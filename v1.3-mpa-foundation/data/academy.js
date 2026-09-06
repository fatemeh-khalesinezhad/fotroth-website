/**
 * FOTROTH V1.1 — Academy Programs & Mentorship Architecture
 */
window.FotrothData = window.FotrothData || {};

window.FotrothData.academy = {
  programs: [
    {
      id: "prog-light-shadow",
      type: "program",
      cohort_badge: "INTENSIVE • COHORT 09",
      seats_label_en: "LIMITED TO 12 SEATS",
      seats_label_fa: "ظرفیت محدود به ۱۲ نفر",
      title_en: "The Masterclass in Commercial Light & Shadow",
      title_fa: "مسترکلاس نور و سایه تجاری",
      desc_en: "Master complex studio strobe configurations, cinema continuous lighting, atmospheric diffusion, and shape manipulation for high-fashion & commercial products.",
      desc_fa: "تسلط بر چیدمان‌های پیچیده استودیو، نورپردازی مداوم سینمایی، انتشار اتمسفریک و خلق فرم برای فشن و محصولات تجاری.",
      syllabus: [
        { en: "6 Weeks Intensive On-Site & Digital Studio Labs", fa: "۶ هفته کارگاه فشرده حضوری و استودیوی دیجیتال" },
        { en: "Live Direction of Professional European Models", fa: "کارگردانی زنده مدل‌های حرفه‌ای بین‌المللی" },
        { en: "Advanced Color Science & Retouching Workflows", fa: "علوم پیشرفته رنگ و گردش‌کار ریتاچ صنعتی" },
        { en: "Direct One-on-One Portfolio Critique with Amir", fa: "بررسی و نقد فردی پورتفولیو با امیر مقدم" }
      ],
      price_badge: "BY APPLICATION ONLY",
      price_badge_fa: "پذیرش بر اساس رزومه"
    },
    {
      id: "prog-mentorship",
      type: "mentorship",
      is_featured: true,
      cohort_badge: "EXCLUSIVE MENTORSHIP",
      seats_label_en: "4 ARTISTS PER YEAR",
      seats_label_fa: "تنها ۴ هنرمند در سال",
      title_en: "1-on-1 Creative Direction & Brand Mastery",
      title_fa: "مسترشیپ ۱ به ۱ مدیریت خلاقیت و برند",
      desc_en: "A 6-month private mentorship program designed to transform your photography practice into a high-value international brand with elite commercial clients.",
      desc_fa: "برنامه ۶ ماهه اختصاصی برای تبدیل عکاسی شما به یک برند بین‌المللی پرارزش با مشتریان فاخر جهانی.",
      syllabus: [
        { en: "Bi-weekly Private Strategy Sessions with Amir Moghadam", fa: "جلسات راهبردی اختصاصی دوهفته‌یک‌بار با امیر مقدم" },
        { en: "Personal Portfolio & Brand Identity Overhaul", fa: "بازطراحی جامع پورتفولیو و هویت تجاری هنرمند" },
        { en: "Client Pitching & Luxury Pricing Architecture", fa: "اصول ارائه پروژه و قیمت‌گذاری در بازار لوکس" },
        { en: "Invitation to Amir's International On-Location Shoots", fa: "دعوت به پروژه‌های میدانی و بین‌المللی امیر مقدم" }
      ],
      price_badge: "PRIVATE SELECTION",
      price_badge_fa: "گزینش خصوصی"
    },
    {
      id: "prog-workshop-analog",
      type: "workshop",
      cohort_badge: "3-DAY MASTER LAB",
      seats_label_en: "8 PARTICIPANTS",
      seats_label_fa: "ظرفیت ۸ هنرجو",
      title_en: "Analog Medium Format & Darkroom Alchemy",
      title_fa: "کارگاه آنالوگ مدیوم‌فرمت و کیمیای تاریکخانه",
      desc_en: "Hands-on immersion with Hasselblad 500C/M and Leica M analog systems, developer chemistry mixing, silver gelatin baryta printing, and tactile grain curation.",
      desc_fa: "کارگاه تجربی با دوربین‌های آنالوگ هاسلبلاد و لایکا، فرمولاسیون داروهای ظهور، چاپ دستی باریتا و خلق بافت نوری اصیل.",
      syllabus: [
        { en: "Chemical Emulsion Preparation & Push/Pull Development", fa: "آماده‌سازی امولسیون و ظهور سفارشی نگاتیو" },
        { en: "Darkroom Contrast Grading on Baryta Papers", fa: "چاپ دستی بر روی کاغذهای آرشیوی نقره" },
        { en: "Hybrid Archival Scanning & Optical Alignment", fa: "اسکن حرفه‌ای هایبرید برای بازتولید موزه‌ای" }
      ],
      price_badge: "UPON APPLICATION",
      price_badge_fa: "ثبت‌نام از طریق بررسی اثر"
    }
  ],
  levels: [
    { id: "intermediate", en: "Intermediate (2-4 Years Practice)", fa: "متوسط (۲ تا ۴ سال تجربه کاری)" },
    { id: "advanced", en: "Advanced Professional (5+ Years)", fa: "پیشرفته و تجاری (بیش از ۵ سال تجربه)" },
    { id: "agency", en: "Agency Director / Creative Lead", fa: "مدیر هنری آژانس / طراح ارشد" }
  ],
  interest_types: [
    { id: "course", en: "Intensive Course (دوره)", fa: "دوره فشرده آموزشی" },
    { id: "workshop", en: "Workshop (کارگاه)", fa: "کارگاه تخصصی استودیو" },
    { id: "mentorship", en: "Private Mentorship (منتورشیپ)", fa: "منتورشیپ و هدایت اختصاصی" }
  ]
};
