const assert = require("node:assert/strict");
const { after, before, test } = require("node:test");
const { createContactApp } = require("./contactServer");

const validMessage = {
  name: "Alex Nguyen",
  company: "Example Company",
  email: "alex@example.com",
  purpose: "Mời phỏng vấn OJT",
  subject: "Interview invitation",
  content: "We would like to discuss an internship opportunity.",
  lang: "en"
};

let server;
let baseUrl;
let sentMessages;

before(async () => {
  sentMessages = [];
  const app = createContactApp({
    transporter: {
      sendMail: async (message) => {
        sentMessages.push(message);
      }
    },
    recipient: "owner@example.com",
    allowedOrigins: ["http://localhost:3000"]
  });
  server = app.listen(0);
  await new Promise((resolve) => server.once("listening", resolve));
  baseUrl = `http://127.0.0.1:${server.address().port}`;
});

after(async () => {
  await new Promise((resolve, reject) => {
    server.close((error) => error ? reject(error) : resolve());
  });
});

test("sends validated contact form data to the configured recipient", async () => {
  const response = await fetch(`${baseUrl}/api/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(validMessage)
  });

  assert.equal(response.status, 200);
  assert.equal(sentMessages.length, 1);
  assert.equal(sentMessages[0].to, "owner@example.com");
  assert.equal(sentMessages[0].replyTo, validMessage.email);
  assert.match(sentMessages[0].text, /Example Company/);
});

test("rejects invalid input without sending an email", async () => {
  const response = await fetch(`${baseUrl}/api/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...validMessage, email: "not-an-email" })
  });

  assert.equal(response.status, 400);
  assert.equal(sentMessages.length, 1);
});

test("rejects requests from unapproved browser origins", async () => {
  const response = await fetch(`${baseUrl}/api/contact`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Origin: "https://untrusted.example"
    },
    body: JSON.stringify(validMessage)
  });

  assert.equal(response.status, 403);
  assert.equal(sentMessages.length, 1);
});

test("returns an explicit error when the SMTP provider rejects delivery", async () => {
  const app = createContactApp({
    transporter: {
      sendMail: async () => {
        throw new Error("SMTP unavailable");
      }
    },
    recipient: "owner@example.com",
    allowedOrigins: []
  });
  const failingServer = app.listen(0);
  await new Promise((resolve) => failingServer.once("listening", resolve));

  try {
    const response = await fetch(`http://127.0.0.1:${failingServer.address().port}/api/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(validMessage)
    });
    assert.equal(response.status, 502);
    assert.match((await response.json()).error, /Email delivery failed/);
  } finally {
    await new Promise((resolve, reject) => {
      failingServer.close((error) => error ? reject(error) : resolve());
    });
  }
});
