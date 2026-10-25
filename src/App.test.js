import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import App from "./App";

const originalFetch = global.fetch;
const originalScrollTo = window.scrollTo;

const renderPortfolio = () => render(<App />);

beforeEach(() => {
  window.scrollTo = jest.fn();
});

afterEach(() => {
  localStorage.clear();
  window.scrollTo = originalScrollTo;
  jest.restoreAllMocks();
  if (originalFetch) {
    global.fetch = originalFetch;
  } else {
    delete global.fetch;
  }
});

test("keeps club activities separate from events and movements", async () => {
  renderPortfolio();
  fireEvent.click(screen.getByRole("button", { name: "Phong trào & Sự kiện" }));

  expect(screen.getByRole("heading", { name: "Hoạt động phong trào & trải nghiệm thực tế" })).toBeInTheDocument();
  expect(
    screen.getByRole("heading", {
      name: "CTV Tuyển sinh & Công tác sinh viên"
    })
  ).toBeInTheDocument();
  expect(screen.queryByText("Phó Chủ nhiệm CLB Kỹ năng mềm The Talk - FTT")).not.toBeInTheDocument();

  fireEvent.click(screen.getByRole("button", { name: "Hoạt động CLB" }));
  expect(screen.getByRole("heading", { name: "Hoạt động câu lạc bộ & sở thích cá nhân" })).toBeInTheDocument();
  expect(screen.getByText("Phó Chủ nhiệm CLB Kỹ năng mềm The Talk - FTT")).toBeInTheDocument();
  expect(screen.queryByText("CTV Tuyển sinh & Công tác sinh viên")).not.toBeInTheDocument();
});

test("opens directly to the portfolio without mock sync or visitor admin controls", () => {
  global.fetch = jest.fn();

  renderPortfolio();

  expect(screen.getByRole("heading", { name: /LÊ TUẤN ANH — SOFTWARE ENGINEERING INTERN/i })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "7 Năng lực & Thế mạnh nổi bật" })).toBeInTheDocument();
  expect(screen.queryByText(/Seven-Treasure Core Pillars|BÁU VẬT 01|ARCHITECTURE PILLARS/)).not.toBeInTheDocument();
  expect(screen.getByRole("button", { name: "Trang chủ" })).toBeInTheDocument();
  expect(global.fetch).not.toHaveBeenCalled();
  expect(screen.queryByText(/GPA|3\.42/i)).not.toBeInTheDocument();
  expect(screen.queryByText(/Cloud Sync|Offline-First|localhost:5000/i)).not.toBeInTheDocument();
  expect(screen.queryByRole("button", { name: /add a project|bổ sung dự án/i })).not.toBeInTheDocument();
  expect(screen.queryByRole("button", { name: /factory reset|khôi phục gốc/i })).not.toBeInTheDocument();
  expect(screen.queryByText(/bash — tuananh@fptu-cantho/i)).not.toBeInTheDocument();
});

test("switches portfolio content to English", async () => {
  renderPortfolio();
  fireEvent.click(screen.getByRole("button", { name: "VI" }));

  expect(screen.getByRole("button", { name: "EN" })).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "Home" })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "7 Core Skills & Strengths" })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "Course Projects" })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "Technical Skills & 4 Coursera Specializations" })).toBeInTheDocument();
});

test("links each Coursera credential to the supplied certificate image", async () => {
  renderPortfolio();

  const certificateLinks = screen.getAllByRole("link", { name: "Xem chứng chỉ ↗" });
  expect(certificateLinks).toHaveLength(4);
  expect(certificateLinks.map((link) => link.href)).toEqual([
    "https://coursera-certificate-images.s3.amazonaws.com/2UF859X8LCQG",
    "https://coursera-certificate-images.s3.amazonaws.com/6MV5YJDVJ0DI",
    "https://coursera-certificate-images.s3.amazonaws.com/D5KZZ4BMO1KR",
    "https://coursera-certificate-images.s3.amazonaws.com/QNEWCJXJ9B51"
  ]);
  certificateLinks.forEach((link) => {
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noreferrer");
  });
});

test("links directly to the existing Vietnamese and English CV PDFs", async () => {
  renderPortfolio();
  fireEvent.click(screen.getByRole("button", { name: "CV 2 trang" }));

  expect(screen.getByRole("link", { name: "Tải CV Tiếng Việt" })).toHaveAttribute(
    "href",
    "/CV/LeAnh_VN.pdf"
  );
  expect(screen.getByRole("link", { name: "Tải CV Tiếng Việt" })).toHaveAttribute(
    "download",
    "LeAnh_VN.pdf"
  );
  expect(screen.getByRole("link", { name: "Download English CV" })).toHaveAttribute(
    "href",
    "/CV/LeAnh_ENT.pdf"
  );
  expect(screen.getByRole("link", { name: "Download English CV" })).toHaveAttribute(
    "download",
    "LeAnh_ENT.pdf"
  );
});

test("shows the five portfolio stories and their supplied local photos", async () => {
  renderPortfolio();
  fireEvent.click(screen.getByRole("button", { name: "Bản tin hành trình" }));

  expect(
    screen.getByRole("heading", { name: "Hành trình của một Kinetic Engineer" })
  ).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "Chân dung chuyên nghiệp & hồ sơ cá nhân" })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "Dấu ấn dự án công nghệ & đồ án thực chiến" })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "Hành trình học tập, chứng chỉ quốc tế & thể thao" })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "Hoạt động ngoại khóa, lãnh đạo trẻ & sự kiện" })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "Kinh nghiệm thực tế & trải nghiệm đời sống" })).toBeInTheDocument();
  expect(screen.getByAltText("Chân dung cá nhân 1")).toHaveAttribute("src", "/images/my1.jpg");
  expect(screen.getByAltText("Sự kiện On The Runway 3")).toHaveAttribute("src", "/images/runway3.jpg");
  expect(screen.getByRole("heading", { name: "Chương 5: Khoảng lặng tái tạo và khát vọng bứt phá" })).toBeInTheDocument();
});

test("uses the authored portfolio projects rather than visitor-local edits", async () => {
  localStorage.setItem(
    "lta_projects_data",
    JSON.stringify([
      {
        id: "prj1",
        code: "FER202 // OLD",
        title: "Ứng dụng Web với ReactJS (Môn FER202)",
        image: "/images/project-prj.png"
      },
      {
        id: "prj2",
        code: "PRJ301 // OLD",
        title: "Nền tảng xem phim TVHAY Clone (Môn PRJ301)",
        image: "/images/project-prj.png"
      },
      {
        id: "prj3",
        code: "PRN211 // OLD",
        title: "Hệ thống Quản lý Doanh nghiệp (C# .NET)",
        image: "/images/project-prj.png"
      }
    ])
  );

  renderPortfolio();
  fireEvent.click(screen.getByRole("button", { name: "Dự án & Việc làm" }));

  expect(screen.getByRole("heading", { name: "Dự án Web với ReactJS (Môn FER202)" })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "Hệ thống kinh doanh (Môn PRJ)" })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "Game Sudoku (Môn SCD)" })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "Hệ thống quản lý xe ô tô (Môn PRF)" })).toBeInTheDocument();
  expect(
    screen.getByRole("heading", {
      name: "Hệ thống quản lý bãi đỗ xe khu dân cư (Môn SQL)"
    })
  ).toBeInTheDocument();
  expect(screen.queryByText(/PRN211|PRJ301|TVHAY Clone/)).not.toBeInTheDocument();
  expect(screen.getByAltText("Hệ thống kinh doanh (Môn PRJ)")).toHaveAttribute(
    "src",
    "/images/kinh doanh.jpg"
  );
  expect(screen.getByRole("img", { name: "Ảnh minh họa Game Sudoku (Môn SCD)" })).toBeInTheDocument();
  expect(screen.getByRole("img", { name: "Ảnh minh họa Hệ thống quản lý xe ô tô (Môn PRF)" })).toBeInTheDocument();
});

test("keeps personal portrait photos fully visible inside their frames", async () => {
  renderPortfolio();

  expect(screen.getByAltText("Chân dung toàn thân Lê Tuấn Anh")).toHaveClass("object-contain");
  expect(screen.getByAltText("Lê Tuấn Anh mặc vest đen, áo sơ mi trắng lịch sự")).toHaveClass("object-contain");
});

test("sends the contact form directly to the email API", async () => {
  global.fetch = jest.fn().mockResolvedValue({
    ok: true,
    json: () => Promise.resolve({ message: "Message sent successfully." })
  });
  const mailAppLink = jest.spyOn(HTMLAnchorElement.prototype, "click");

  renderPortfolio();
  fireEvent.click(screen.getByRole("button", { name: "Liên hệ OJT" }));
  fireEvent.change(screen.getByPlaceholderText("VD: Nguyễn Văn A (HR / Tech Lead)"), {
    target: { value: "Nguyen Van A" }
  });
  fireEvent.change(screen.getByPlaceholderText("VD: FPT Software, TMA Solutions..."), {
    target: { value: "Example Company" }
  });
  fireEvent.change(screen.getByPlaceholderText("hr@congty.com"), {
    target: { value: "hr@example.com" }
  });
  fireEvent.change(
    screen.getByPlaceholderText("Vui lòng chia sẻ thêm về vị trí thực tập OJT, thời gian phỏng vấn dự kiến..."),
    { target: { value: "Mời trao đổi về kỳ thực tập OJT sắp tới." } }
  );
  fireEvent.click(screen.getByRole("button", { name: "Gửi liên hệ trực tiếp" }));

  await waitFor(() =>
    expect(global.fetch).toHaveBeenCalledWith(
      "/api/contact",
      expect.objectContaining({
        method: "POST",
        headers: { "Content-Type": "application/json" }
      })
    )
  );
  expect(global.fetch.mock.calls.at(-1)[1].body).toContain("hr@example.com");
  expect(await screen.findByText(/Email đã được gửi tới/)).toBeInTheDocument();
  expect(mailAppLink).not.toHaveBeenCalled();
});

test("shows a delivery error and keeps the contact form populated", async () => {
  global.fetch = jest.fn()
    .mockResolvedValueOnce({
      ok: false,
      json: () => Promise.resolve({ error: "Email delivery failed. Please try again later." })
    });

  renderPortfolio();
  fireEvent.click(screen.getByRole("button", { name: "Liên hệ OJT" }));
  fireEvent.change(screen.getByPlaceholderText("VD: Nguyễn Văn A (HR / Tech Lead)"), {
    target: { value: "Nguyen Van A" }
  });
  fireEvent.change(screen.getByPlaceholderText("VD: FPT Software, TMA Solutions..."), {
    target: { value: "Example Company" }
  });
  fireEvent.change(screen.getByPlaceholderText("hr@congty.com"), {
    target: { value: "hr@example.com" }
  });
  fireEvent.change(
    screen.getByPlaceholderText("Vui lòng chia sẻ thêm về vị trí thực tập OJT, thời gian phỏng vấn dự kiến..."),
    { target: { value: "Mời trao đổi về kỳ thực tập OJT sắp tới." } }
  );
  fireEvent.click(screen.getByRole("button", { name: "Gửi liên hệ trực tiếp" }));

  expect(await screen.findByRole("alert")).toHaveTextContent(
    "Email delivery failed. Please try again later."
  );
  expect(screen.getByDisplayValue("Nguyen Van A")).toBeInTheDocument();
});

test("shows a clear API configuration error when the contact route returns HTML", async () => {
  global.fetch = jest.fn().mockResolvedValue({
    ok: true,
    json: () => Promise.reject(new SyntaxError("Invalid JSON response"))
  });

  renderPortfolio();
  fireEvent.click(screen.getByRole("button", { name: "Liên hệ OJT" }));
  fireEvent.change(screen.getByPlaceholderText("VD: Nguyễn Văn A (HR / Tech Lead)"), {
    target: { value: "Nguyen Van A" }
  });
  fireEvent.change(screen.getByPlaceholderText("VD: FPT Software, TMA Solutions..."), {
    target: { value: "Example Company" }
  });
  fireEvent.change(screen.getByPlaceholderText("hr@congty.com"), {
    target: { value: "hr@example.com" }
  });
  fireEvent.change(
    screen.getByPlaceholderText("Vui lòng chia sẻ thêm về vị trí thực tập OJT, thời gian phỏng vấn dự kiến..."),
    { target: { value: "Mời trao đổi về kỳ thực tập OJT sắp tới." } }
  );
  fireEvent.click(screen.getByRole("button", { name: "Gửi liên hệ trực tiếp" }));

  expect(await screen.findByRole("alert")).toHaveTextContent(
    "Máy chủ gửi email trả về dữ liệu không hợp lệ. Hãy kiểm tra API /api/contact đã chạy và được cấu hình đúng."
  );
  expect(screen.queryByText(/Unexpected token/)).not.toBeInTheDocument();
  expect(screen.getByDisplayValue("Nguyen Van A")).toBeInTheDocument();
});
