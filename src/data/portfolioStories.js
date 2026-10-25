import { PORTFOLIO_CHAPTERS } from "./portfolioNarrative";

// Năm câu chuyện giới thiệu hồ sơ và các dấu mốc của Lê Tuấn Anh.
export const PORTFOLIO_STORIES = [
  {
    id: "profile",
    number: "BẢN TIN 01",
    numberEn: "JOURNAL 01",
    category: "PROFILE",
    title: "Chân dung chuyên nghiệp & hồ sơ cá nhân",
    titleEn: "Professional Profile",
    description: PORTFOLIO_CHAPTERS[0].paragraphs[0],
    descriptionEn: PORTFOLIO_CHAPTERS[0].paragraphsEn[0],
    images: [
      { src: "/images/my1.jpg", alt: "Chân dung cá nhân 1", altEn: "Personal portrait 1" },
      { src: "/images/my2.jpg", alt: "Chân dung cá nhân 2", altEn: "Personal portrait 2" },
      { src: "/images/my3.jpg", alt: "Chân dung cá nhân 3", altEn: "Personal portrait 3" },
      { src: "/images/my4.jpg", alt: "Chân dung cá nhân 4", altEn: "Personal portrait 4" },
      { src: "/images/my5.jpg", alt: "Chân dung cá nhân 5", altEn: "Personal portrait 5" }
    ]
  },
  {
    id: "projects",
    number: "BẢN TIN 02",
    numberEn: "JOURNAL 02",
    category: "PROJECTS",
    title: "Dấu ấn dự án công nghệ & đồ án thực chiến",
    titleEn: "Technology Projects & Hands-on Coursework",
    description: PORTFOLIO_CHAPTERS[1].paragraphs[0],
    descriptionEn: PORTFOLIO_CHAPTERS[1].paragraphsEn[0],
    images: [
      { src: "/images/kinh doanh.jpg", alt: "Giao diện dự án kinh doanh môn PRJ", altEn: "Business project interface for course PRJ" }
    ]
  },
  {
    id: "learning",
    number: "BẢN TIN 03",
    numberEn: "JOURNAL 03",
    category: "LEARNING & SPORTS",
    title: "Hành trình học tập, chứng chỉ quốc tế & thể thao",
    titleEn: "Learning, International Certifications & Sports",
    description:
      "Đang theo học ngành Kỹ thuật Phần mềm tại Đại học FPT Cần Thơ. Bên cạnh chương trình học, Lê Tuấn Anh hoàn thành bốn chứng chỉ Coursera về Kỹ thuật phần mềm, UX/UI, GenAI và Thiết kế Web; đồng thời tham gia rèn luyện Vovinam và các hoạt động thể thao tại trường.",
    descriptionEn:
      "Le Tuan Anh is studying Software Engineering at FPT University Can Tho. Alongside his coursework, he has completed four Coursera specializations in software engineering, UX/UI, GenAI, and web design, and participates in Vovinam and campus sports.",
    images: [
      { src: "/images/vovinam.jpg", alt: "Hoạt động rèn luyện Vovinam", altEn: "Vovinam training" },
      { src: "/images/vonhac.jpg", alt: "Hoạt động và giao lưu tại trường", altEn: "Campus activities and exchange" },
      { src: "/images/color-tradning.jpg", alt: "Hoạt động hội thao tại trường", altEn: "Campus sports event" }
    ]
  },
  {
    id: "leadership",
    number: "BẢN TIN 04",
    numberEn: "JOURNAL 04",
    category: "LEADERSHIP & CAMPUS",
    title: "Hoạt động ngoại khóa, lãnh đạo trẻ & sự kiện",
    titleEn: "Extracurricular Activities, Leadership & Events",
    description:
      "Trong vai trò Phó Chủ nhiệm CLB Kỹ năng mềm The Talk - FTT, Lê Tuấn Anh tham gia điều hành hoạt động, tổ chức training kỹ năng thuyết trình cho hơn 40 thành viên và đồng tổ chức cuộc thi học thuật “Battle of Minds”. Những dấu mốc khác gồm Open Day, hoạt động cùng CLB Nhạc cụ Truyền thống (FTC), chương trình “On The Runway” và các khoảnh khắc tri ân cùng gia đình, giảng viên.",
    descriptionEn:
      "As Vice President of The Talk Soft Skills Club - FTT, Le Tuan Anh helps lead club activities, trains 40+ members in public speaking, and co-organizes the Battle of Minds academic competition. Other highlights include Open Day, activities with the FTC Traditional Music Club, On The Runway, and moments of appreciation with family and faculty.",
    images: [
      { src: "/images/battel-of-mind-1.jpg", alt: "Cuộc thi Battle of Minds 1", altEn: "Battle of Minds competition 1" },
      { src: "/images/battel-of-mind-2.jpg", alt: "Cuộc thi Battle of Minds 2", altEn: "Battle of Minds competition 2" },
      { src: "/images/kick-of-leader.jpg", alt: "Hoạt động Kick-off Leader", altEn: "Kick-off Leader activity" },
      { src: "/images/clb-ftc.jpg", alt: "Sinh hoạt cùng câu lạc bộ FTC", altEn: "FTC Club gathering" },
      { src: "/images/oppenday1.jpg", alt: "Sự kiện Open Day 1", altEn: "Open Day event 1" },
      { src: "/images/oppenday2.jpg", alt: "Sự kiện Open Day 2", altEn: "Open Day event 2" },
      { src: "/images/runway1.jpg", alt: "Sự kiện On The Runway 1", altEn: "On The Runway event 1" },
      { src: "/images/runway2.jpg", alt: "Sự kiện On The Runway 2", altEn: "On The Runway event 2" },
      { src: "/images/runway3.jpg", alt: "Sự kiện On The Runway 3", altEn: "On The Runway event 3" },
      { src: "/images/c3.jpg", alt: "Khoảnh khắc tri ân tại trường", altEn: "Campus appreciation moment" }
    ]
  },
  {
    id: "experience",
    number: "BẢN TIN 05",
    numberEn: "JOURNAL 05",
    category: "EXPERIENCE & LIFESTYLE",
    title: "Kinh nghiệm thực tế & trải nghiệm đời sống",
    titleEn: "Practical Experience & Student Life",
    description: `${PORTFOLIO_CHAPTERS[2].paragraphs[0]} ${PORTFOLIO_CHAPTERS[4].paragraphs[0]}`,
    descriptionEn: `${PORTFOLIO_CHAPTERS[2].paragraphsEn[0]} ${PORTFOLIO_CHAPTERS[4].paragraphsEn[0]}`,
    images: [
      { src: "/images/CTV.jpg", alt: "Công tác viên tuyển sinh và sự kiện", altEn: "Admissions and events volunteer" },
      { src: "/images/ctv_QS.jpg", alt: "Hoạt động cộng tác viên trong học kỳ quân sự", altEn: "Volunteer activity during military training" },
      { src: "/images/Giao-luu_quoc-te.jpg", alt: "Hoạt động giao lưu quốc tế", altEn: "International exchange activity" },
      { src: "/images/quan su.jpg", alt: "Trải nghiệm học kỳ quân sự", altEn: "Military training semester experience" },
      { src: "/images/sea.jpg", alt: "Trải nghiệm khám phá dưới đáy biển", altEn: "Underwater exploration experience" }
    ]
  }
];
