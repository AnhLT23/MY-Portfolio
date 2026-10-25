// Dữ liệu tĩnh dùng chung cho hồ sơ, kỹ năng, dự án, chứng chỉ và ảnh.
export const ASSETS = {
  logo: "/images/Logo.png",
  avatarSuit: "/images/my1.jpg",
  avatarSuitFallback: "/images/my2.jpg",
  divineTree: "/images/my3.jpg",
  projectBusiness: "/images/kinh doanh.jpg",
  theTalkWorkshop: "/images/kick-of-leader.jpg",
  battleOfMinds: "/images/battel-of-mind-1.jpg",
  swimmingPool: "/images/sea.jpg",
  campusEventHall: "/images/oppenday1.jpg",
  campusTour: "/images/oppenday2.jpg",
  vinalinkExperience: "/images/CTV.jpg",
  techSound: "/images/vonhac.jpg"
};

export const CV_FILES = {
  vi: { path: "/CV/LeAnh_VN.pdf", fileName: "LeAnh_VN.pdf" },
  en: { path: "/CV/LeAnh_ENT.pdf", fileName: "LeAnh_ENT.pdf" }
};

// ============================================================================
// 2. DỮ LIỆU HỒ SƠ ỨNG VIÊN: thông tin dùng xuyên suốt các màn hình.
// ============================================================================
export const CANDIDATE_INFO = {
  fullName: "Lê Tuấn Anh",
  studentId: "CE191756",
  cohort: "K19 SE",
  phone: "0389 747 825",
  email: "anhlt.ce191756@gmail.com",
  linkedin: "https://www.linkedin.com/in/lê-anh",
  github: "https://github.com/anhlt-fptu",
  addressVi: "An Bình, Q. Ninh Kiều, TP. Cần Thơ",
  addressEn: "An Binh Ward, Ninh Kieu District, Can Tho City",
  schoolVi: "Trường Đại học FPT phân hiệu Cần Thơ",
  schoolEn: "FPT University Can Tho Campus",
  majorVi: "Kỹ thuật phần mềm (Software Engineering)",
  majorEn: "Bachelor of Software Engineering",
  specializationVi: "Phát triển ứng dụng React.js & Web Development",
  specializationEn: "React.js Application & Full-stack Web Development",
  comboBioVi:
    "Xin chào, tôi là Lê Tuấn Anh — sinh viên Kỹ thuật Phần mềm tại Trường Đại học FPT Cần Thơ, định hướng phát triển Web. Hành trình học tập của tôi gồm dự án ReactJS (FER202), hệ thống kinh doanh (PRJ), game Sudoku (SCD), hệ thống quản lý xe ô tô (PRF) và cơ sở dữ liệu quản lý bãi đỗ xe khu dân cư (SQL). Bên cạnh kỹ năng lập trình, tôi tích lũy kinh nghiệm qua hoạt động câu lạc bộ, sự kiện và công việc cộng tác viên.",
  comboBioEn:
    "Hi, I'm Le Tuan Anh, a Software Engineering student at FPT University Can Tho focused on web development. My coursework includes a ReactJS web project (FER202), a business system (PRJ), a Sudoku game (SCD), a car management system (PRF), and a residential parking database project (SQL). I also bring experience from student clubs, campus events, and community-facing roles.",
  shortGoalVi:
    "Ngắn hạn (OJT): Vận dụng kiến thức vững chắc về OOP (Java, C#), ReactJS và SQL Server để phát triển, kiểm thử, tối ưu hóa tính năng phần mềm theo quy trình doanh nghiệp (Agile/Scrum).",
  longGoalVi:
    "Dài hạn (2–3 năm): Trở thành Kỹ sư phần mềm (Full-stack / .NET Developer) chính thức đóng góp vào các giải pháp công nghệ quy mô lớn.",
  shortGoalEn:
    "Short-term (OJT): Apply solid knowledge of OOP (Java, C#), ReactJS, and SQL Server to develop, test, and optimize software features in an enterprise Agile/Scrum environment.",
  longGoalEn:
    "Long-term (2–3 years): Become a full-time Software Engineer (Full-stack / .NET Developer), contributing to scalable enterprise technology solutions."
};

// 3. BẢY NĂNG LỰC CỐT LÕI hiển thị trên trang chủ.
export const SEVEN_PILLARS = [
  {
    title: "Clean Code & Best Practices",
    titleEn: "Clean Code & Best Practices",
    desc: "Viết mã rõ ràng, dễ bảo trì, tuân thủ nguyên tắc SOLID, DRY và tự động hóa kiểm tra cú pháp với ESLint v9.",
    descEn: "Write clear, maintainable code that follows SOLID and DRY principles, with automated linting using ESLint v9.",
    metric: "SonarQube 98%"
  },
  {
    title: "MVC & Layered Architecture",
    titleEn: "MVC & Layered Architecture",
    desc: "Tách bạch rõ rệt giữa Business Logic, Data Access (JDBC) và Presentation Layers (JSP/React); tối ưu khả năng mở rộng.",
    descEn: "Separate business logic, data access (JDBC), and presentation layers (JSP/React) to improve maintainability and scalability.",
    metric: "RESTful & Decoupled"
  },
  {
    title: "Modern React Ecosystem",
    titleEn: "Modern React Ecosystem",
    desc: "Thành thạo ReactJS (JSX, ES6+, Hooks), HTML5/CSS3, Bootstrap 5 & Tailwind CSS chuẩn Responsive.",
    descEn: "Build responsive interfaces with ReactJS (JSX, ES6+, Hooks), HTML5/CSS3, Bootstrap 5, and Tailwind CSS.",
    metric: "Lighthouse 95+"
  },
  {
    title: "OOP Mastery & SQL Server",
    titleEn: "OOP & SQL Server",
    desc: "Nắm sâu hướng đối tượng trong Java, C# (.NET) và thiết kế CSDL quan hệ Microsoft SQL Server chuẩn hóa 3NF.",
    descEn: "Apply object-oriented programming in Java and C# (.NET), and design normalized Microsoft SQL Server relational databases.",
    metric: "3NF & Indexed"
  },
  {
    title: "Team Leadership & GitFlow",
    titleEn: "Team Leadership & GitFlow",
    desc: "Trưởng nhóm điều phối đội ngũ 4–5 thành viên, phân chia công việc, điều hướng nhánh Git và review code.",
    descEn: "Lead a team of 4–5, coordinate task assignments and Git branching, and conduct code reviews.",
    metric: "100% On-Time Sprint"
  },
  {
    title: "High Adaptability & Event Ops",
    titleEn: "Adaptability & Event Operations",
    desc: "Phó Chủ nhiệm CLB The Talk (40+ thành viên) và trực tiếp vận hành 30+ sự kiện lớn (200–1.000+ người tham dự).",
    descEn: "Serve as Vice President of The Talk Club (40+ members) and help operate 30+ large events for 200–1,000+ attendees.",
    metric: "Zero Downtime Ops"
  },
  {
    title: "Continuous Learning & AI-Augmented Workflow",
    titleEn: "Continuous Learning & AI-Augmented Workflow",
    desc: "Tận dụng Generative AI trong phát triển phần mềm để tăng tốc nghiên cứu, kiểm thử và hoàn thành 4 Specialization quốc tế trên Coursera.",
    descEn: "Use generative AI to accelerate software research, testing, and development, and complete four international Coursera specializations.",
    metric: "LIFELONG GROWTH MINDSET"
  }
];

// 4. DỮ LIỆU MẪU DỰ ÁN dùng khi chưa có dữ liệu lưu cục bộ hoặc từ API.
export const INITIAL_PROJECTS = [
  {
    id: "prj1",
    code: "FER202 // FRONTEND_ENG",
    categoryBadge: "React 18 • SPA Architecture",
    categoryBadgeEn: "React 18 • SPA Architecture",
    roleBadge: "Vai trò: Trưởng nhóm",
    roleBadgeEn: "Role: Team Lead",
    title: "Dự án Web với ReactJS (Môn FER202)",
    titleEn: "ReactJS Web Project (FER202)",
    teamSize: "4–5 thành viên",
    teamSizeEn: "4–5 members",
    workflow: "Code Review & Git/GitHub Flow",
    workflowEn: "Code Review & Git/GitHub Flow",
    description:
      "Vận dụng ReactJS (JSX, ES6), HTML5/CSS3 và Git/GitHub để phát triển giao diện web tương tác, chia thành các component và phối hợp nhóm theo tiến độ đồ án.",
    descriptionEn:
      "Used ReactJS (JSX, ES6), HTML5/CSS3, and Git/GitHub to build an interactive web interface with reusable components and coordinate team delivery.",
    tags: ["React", "ReactJS (JSX)", "ES6+", "HTML5 / CSS3", "Bootstrap 5", "Git / GitHub"],
    tagsEn: ["React", "ReactJS (JSX)", "ES6+", "HTML5 / CSS3", "Bootstrap 5", "Git / GitHub"],
    image: null,
    projectIcon: "code",
    gradeBadge: "FER202",
    githubUrl: "https://github.com/anhlt-fptu",
    createdAt: 1714500000000
  },
  {
    id: "prj2",
    code: "PRJ // BUSINESS_SYSTEM",
    categoryBadge: "Hệ thống kinh doanh",
    categoryBadgeEn: "Business System",
    roleBadge: "Đồ án môn học PRJ",
    roleBadgeEn: "PRJ Course Project",
    title: "Hệ thống kinh doanh (Môn PRJ)",
    titleEn: "Business System (PRJ)",
    teamSize: "4–5 thành viên",
    teamSizeEn: "4–5 members",
    workflow: "Phân tích & xây dựng hệ thống",
    workflowEn: "System Analysis & Development",
    description:
      "Đồ án môn PRJ tập trung vào hệ thống kinh doanh. Ảnh minh họa là giao diện thương mại điện tử có trong bộ ảnh dự án.",
    descriptionEn:
      "A PRJ course project focused on a business system. The illustration shows an e-commerce interface from the project image collection.",
    tags: ["PRJ", "Kinh doanh", "Web"],
    tagsEn: ["PRJ", "Business", "Web"],
    image: ASSETS.projectBusiness,
    projectIcon: "business",
    gradeBadge: "PRJ",
    githubUrl: "https://github.com/anhlt-fptu",
    createdAt: 1717100000000
  },
  {
    id: "prj3",
    code: "SCD // SUDOKU_GAME",
    categoryBadge: "Trò chơi Sudoku",
    categoryBadgeEn: "Sudoku Game",
    roleBadge: "Đồ án môn học SCD",
    roleBadgeEn: "SCD Course Project",
    title: "Game Sudoku (Môn SCD)",
    titleEn: "Sudoku Game (SCD)",
    teamSize: "Đồ án môn học",
    teamSizeEn: "Course project",
    workflow: "Phát triển trò chơi",
    workflowEn: "Game Development",
    description:
      "Trò chơi Sudoku được thực hiện trong môn SCD.",
    descriptionEn: "A Sudoku game developed as part of the SCD course.",
    tags: ["SCD", "Sudoku", "Game"],
    tagsEn: ["SCD", "Sudoku", "Game"],
    image: null,
    projectIcon: "sudoku",
    gradeBadge: "SCD",
    githubUrl: "https://github.com/anhlt-fptu",
    createdAt: 1727700000000
  },
  {
    id: "prf-cars",
    code: "PRF // CAR_MANAGEMENT",
    categoryBadge: "Quản lý xe ô tô",
    categoryBadgeEn: "Car Management",
    roleBadge: "Đồ án môn học PRF",
    roleBadgeEn: "PRF Course Project",
    title: "Hệ thống quản lý xe ô tô (Môn PRF)",
    titleEn: "Car Management System (PRF)",
    teamSize: "Đồ án môn học",
    teamSizeEn: "Course project",
    workflow: "Phát triển hệ thống quản lý",
    workflowEn: "Management System Development",
    description:
      "Hệ thống quản lý xe ô tô được thực hiện trong môn PRF.",
    descriptionEn: "A car management system developed as part of the PRF course.",
    tags: ["PRF", "Quản lý xe", "Ô tô"],
    tagsEn: ["PRF", "Car Management", "Automotive"],
    image: null,
    projectIcon: "cars",
    gradeBadge: "PRF",
    githubUrl: "https://github.com/anhlt-fptu",
    createdAt: 1730300000000
  },
  {
    id: "sql-parking",
    code: "SQL // RESIDENTIAL_PARKING",
    categoryBadge: "Quản lý bãi đỗ xe",
    categoryBadgeEn: "Parking Management",
    roleBadge: "Đồ án môn SQL",
    roleBadgeEn: "SQL Course Project",
    title: "Hệ thống quản lý bãi đỗ xe khu dân cư (Môn SQL)",
    titleEn: "Residential Parking Management System (SQL)",
    teamSize: "Đồ án môn học",
    teamSizeEn: "Course project",
    workflow: "Thiết kế cơ sở dữ liệu",
    workflowEn: "Database Design",
    description:
      "Hệ thống quản lý bãi đỗ xe dành cho khu dân cư, được thực hiện trong môn SQL.",
    descriptionEn: "A residential parking management system developed as part of the SQL course.",
    tags: ["SQL", "Bãi đỗ xe", "Khu dân cư", "Database"],
    tagsEn: ["SQL", "Parking", "Residential", "Database"],
    image: null,
    projectIcon: "parking",
    gradeBadge: "SQL",
    githubUrl: "https://github.com/anhlt-fptu",
    createdAt: 1732900000000
  }
];

// 5. DANH SÁCH KỸ NĂNG và mức độ thành thạo hiển thị dạng thanh tiến độ.
export const SKILL_ITEMS = [
  { name: "Java (OOP)", level: 88, category: "languages" },
  { name: "C / C# (.NET)", level: 84, category: "languages" },
  { name: "JavaScript (ES6+)", level: 90, category: "languages" },
  { name: "HTML5 / CSS3", level: 92, category: "languages" },
  { name: "ReactJS (JSX, Hooks, Router)", level: 88, category: "frameworks" },
  { name: "Java Servlet & JSP (MVC)", level: 86, category: "frameworks" },
  { name: "Bootstrap 5 / Tailwind CSS", level: 90, category: "frameworks" },
  { name: "RESTful API & JSON", level: 86, category: "frameworks" },
  { name: "Microsoft SQL Server", level: 86, category: "database_tools" },
  { name: "Git / GitHub (GitFlow)", level: 88, category: "database_tools" },
  { name: "VS Code & Visual Studio", level: 92, category: "database_tools" },
  { name: "Thiết kế ERD & Tối ưu SQL", nameEn: "ERD Design & SQL Optimization", level: 85, category: "database_tools" }
];

// 6. DANH SÁCH CHỨNG CHỈ được hiển thị và xác thực trong hộp thoại.
export const CERTIFICATIONS = [
  {
    id: "cert1",
    credentialId: "2UF859X8LCQG",
    credentialUrl: "https://coursera-certificate-images.s3.amazonaws.com/2UF859X8LCQG",
    date: "04/2026",
    title: "Software Engineering Specialization",
    issuer: "The Hong Kong University of Science and Technology (Coursera)",
    field: "Coursera • Specialization",
    desc: "Đào tạo quy trình vòng đời phát triển phần mềm (SDLC), mô hình hóa hệ thống UML, Design Patterns, kiểm thử và quản lý dự án phần mềm.",
    descEn: "Covered the software development life cycle (SDLC), UML system modeling, design patterns, software testing, and project management."
  },
  {
    id: "cert2",
    credentialId: "6MV5YJDVJ0DI",
    credentialUrl: "https://coursera-certificate-images.s3.amazonaws.com/6MV5YJDVJ0DI",
    date: "02/2026",
    title: "User Experience Research and Design Specialization",
    issuer: "University of Michigan (Coursera)",
    field: "Coursera • UI/UX Field",
    desc: "Nghiên cứu hành vi người dùng, phỏng vấn định tính/định lượng, thiết kế Wireframing & Prototyping tương tác cao.",
    descEn: "Covered user research, qualitative and quantitative interviews, wireframing, and interactive prototyping."
  },
  {
    id: "cert3",
    credentialId: "D5KZZ4BMO1KR",
    credentialUrl: "https://coursera-certificate-images.s3.amazonaws.com/D5KZZ4BMO1KR",
    date: "01/2026",
    title: "Application Development & Generative AI in Software Development",
    issuer: "Amazon (Coursera)",
    field: "Coursera • AI & Engineering",
    desc: "Ứng dụng trí tuệ nhân tạo tạo sinh (Generative AI) vào chu trình lập trình hiện đại, tối ưu hóa mã nguồn và gia tốc phát triển ứng dụng.",
    descEn: "Applied generative AI to modern software development workflows to improve code and accelerate application delivery."
  },
  {
    id: "cert4",
    credentialId: "QNEWCJXJ9B51",
    credentialUrl: "https://coursera-certificate-images.s3.amazonaws.com/QNEWCJXJ9B51",
    date: "06/2025",
    title: "Web Design for Everybody Specialization",
    issuer: "University of Michigan (Coursera)",
    field: "Coursera • Web Standards",
    desc: "Thiết kế web đáp ứng (Responsive Web Design) tương thích Mobile & Desktop với HTML5, CSS3, JavaScript và Bootstrap.",
    descEn: "Designed responsive websites for mobile and desktop using HTML5, CSS3, JavaScript, and Bootstrap."
  }
];

// ============================================================================
