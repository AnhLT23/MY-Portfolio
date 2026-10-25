import { useEffect, useState } from "react";
import { INITIAL_PROJECTS } from "../data/portfolioContent";

export function usePortfolioController() {
  const [activeTab, setActiveTab] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    try {
      const saved = localStorage.getItem("lta_theme_pref");
      return saved ? saved === "dark" : true;
    } catch {
      return true;
    }
  });
  const [lang, setLang] = useState(() => {
    try {
      return localStorage.getItem("lta_lang_pref") === "en" ? "en" : "vi";
    } catch {
      return "vi";
    }
  });
  const [techFilter, setTechFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProjectModal, setSelectedProjectModal] = useState(null);
  const [selectedCertModal, setSelectedCertModal] = useState(null);
  const [showCVModal, setShowCVModal] = useState(false);

  const [contactForm, setContactForm] = useState({
    name: "",
    company: "",
    email: "",
    purpose: "Mời phỏng vấn OJT",
    subject: "Lời mời tham gia phỏng vấn thực tập OJT vị trí Software Engineer Intern",
    content: ""
  });
  const [formErrors, setFormErrors] = useState({});
  const [mailSentBanner, setMailSentBanner] = useState(false);
  const [mailSending, setMailSending] = useState(false);
  const [mailSendError, setMailSendError] = useState("");

  useEffect(() => {
    try {
      localStorage.setItem("lta_theme_pref", isDark ? "dark" : "light");
    } catch {
      // ignore
    }
  }, [isDark]);

  useEffect(() => {
    try {
      localStorage.setItem("lta_lang_pref", lang);
    } catch {
      // ignore
    }
  }, [lang]);

  const handleSendContactForm = async (e) => {
    e.preventDefault();
    if (mailSending) return;
    const errs = {};
    if (!contactForm.name || contactForm.name.trim().length < 2) {
      errs.name = lang === "vi" ? "Vui lòng nhập họ và tên hợp lệ" : "Please enter a valid full name.";
    }
    if (!contactForm.company || contactForm.company.trim().length < 2) {
      errs.company = lang === "vi" ? "Vui lòng nhập tên công ty hợp lệ." : "Please enter a valid company name.";
    }
    if (
      !contactForm.email ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactForm.email.trim())
    ) {
      errs.email = lang === "vi" ? "Vui lòng nhập địa chỉ Email hợp lệ" : "Please enter a valid email address.";
    }
    if (!contactForm.content || contactForm.content.trim().length < 10) {
      errs.content = lang === "vi" ? "Nội dung chi tiết cần tối thiểu 10 ký tự" : "Please provide at least 10 characters of detail.";
    }
    if (Object.keys(errs).length > 0) {
      setFormErrors(errs);
      return;
    }

    setFormErrors({});
    setMailSentBanner(false);
    setMailSendError("");
    setMailSending(true);
    const defaultSubjectVi = "Lời mời tham gia phỏng vấn thực tập OJT vị trí Software Engineer Intern";
    const subject = contactForm.subject === defaultSubjectVi && lang === "en"
      ? "OJT Software Engineer Intern Interview Invitation"
      : contactForm.subject;

    try {
      const response = await fetch(
        process.env.REACT_APP_CONTACT_API_URL || "/api/contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...contactForm,
            subject,
            lang
          })
        }
      );
      let result;
      try {
        result = await response.json();
      } catch {
        throw new Error(lang === "vi"
          ? "Máy chủ gửi email trả về dữ liệu không hợp lệ. Hãy kiểm tra API /api/contact đã chạy và được cấu hình đúng."
          : "The email server returned an invalid response. Check that the /api/contact API is running and configured correctly.");
      }
      if (!response.ok) {
        throw new Error(result.error || (lang === "vi"
          ? "Không gửi được email. Vui lòng thử lại."
          : "Could not send the email. Please try again."));
      }

      setMailSentBanner(true);
      setContactForm({
        ...contactForm,
        name: "",
        company: "",
        email: "",
        content: ""
      });
    } catch (error) {
      setMailSendError(error instanceof TypeError
        ? lang === "vi"
          ? "Không kết nối được máy chủ gửi email. Vui lòng thử lại sau."
          : "Could not connect to the email server. Please try again later."
        : error.message);
    } finally {
      setMailSending(false);
    }
  };

  const projects = INITIAL_PROJECTS;
  const filteredProjects = projects.filter((project) => {
    const matchesTech =
      techFilter === "all" ||
      project.tags.some((tag) => tag.toLowerCase().includes(techFilter.toLowerCase())) ||
      project.title.toLowerCase().includes(techFilter.toLowerCase());
    const query = searchQuery.trim().toLowerCase();
    const matchesQuery =
      !query ||
      project.title.toLowerCase().includes(query) ||
      project.description.toLowerCase().includes(query) ||
      project.code.toLowerCase().includes(query) ||
      project.tags.some((tag) => tag.toLowerCase().includes(query));
    return matchesTech && matchesQuery;
  });

  const themeCanvas = isDark
    ? "bg-[#0b0f19] text-[#e2e8f0]"
    : "bg-[#f1f5f9] text-[#0f172a]";
  const themeCard = isDark
    ? "bg-[#131824] border-[#263044] text-[#e2e8f0]"
    : "bg-[#ffffff] border-[#cbd5e1] text-[#0f172a] shadow-sm";
  const themeElevated = isDark
    ? "bg-[#1c2333] border-[#2e3a52] text-[#e2e8f0]"
    : "bg-[#f8fafc] border-[#cbd5e1] text-[#0f172a]";
  const themeSubtext = isDark ? "text-[#94a3b8]" : "text-[#475569]";
  const themePrimaryText = isDark ? "text-[#38bdf8]" : "text-[#0284c7]";
  const themeEmeraldText = isDark ? "text-[#34d399]" : "text-[#059669]";

  return {
    activeTab,
    setActiveTab,
    mobileMenuOpen,
    setMobileMenuOpen,
    isDark,
    setIsDark,
    lang,
    setLang,
    projects,
    techFilter,
    setTechFilter,
    searchQuery,
    setSearchQuery,
    selectedProjectModal,
    setSelectedProjectModal,
    selectedCertModal,
    setSelectedCertModal,
    showCVModal,
    setShowCVModal,
    contactForm,
    setContactForm,
    formErrors,
    mailSentBanner,
    setMailSentBanner,
    mailSending,
    mailSendError,
    handleSendContactForm,
    filteredProjects,
    themeCanvas,
    themeCard,
    themeElevated,
    themeSubtext,
    themePrimaryText,
    themeEmeraldText
  };
}
