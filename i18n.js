// i18n initialization for index.html
// Simple key-based replacement using data-i18n attributes

const resources = {
  tr: {
    translation: {
      title: "IEEE ODTÜ KKK",
      nav: {
        home: "Ana Sayfa",
        team: "Ekibimiz",
        teknofest: "Teknofest",
        contact: "İletişim",
        about: "Hakkımızda",
        calendar: "Takvim"
      },
      hero: {
        title: "IEEE ODTÜ KIBRIS",
        lead: "Dünyanın en büyük teknik profesyonel organizasyonu olan IEEE (Institute of Electrical and Electronics Engineers), teknolojiyi insanlığın yararına ilerletmeye adanmıştır.",
        globalMember: "IEEE Global Üyesi Ol",
        registerBranch: "IEEE METU NCC'ye Kayıt Ol"
      },
      section: {
        subsocieties: "Alt Topluluklar",
        announcements: "Duyurular & Etkinlikler",
        pastEvents: "Geçmiş Etkinlikler",
        cs: "IEEE Computer Society, web development, game development ve yapay zeka alanlarında ekip çalışmaları ve etkinlikler yürüterek öğrencilerin birlikte öğrenmesini ve üretmesini sağlar. Üyelerine projeler, eğitimler ve etkinliklerle hem akademik hem profesyonel gelişim imkânı sunar.",
        ras: "IEEE RAS topluluğu olarak eğitimler ve teknik etkinlikler düzenliyor, aynı zamanda Teknofest yarışmalarında da aktif olarak yer alıyoruz.",
        aess: "Yeni kurulan IEEE Aerospace and Electronic Systems Society Havacılık ve Uzay Mühendisliği Öğrencilerini bekliyor."
      },
      about: {
        pageTitle: "Hakkımızda - IEEE ODTÜ KKK",
        headerTitle: "Hakkımızda",
        headerTagline: "\"Inspire. Innovate. Impact.\"",
        historyTitle: "Tarihçemiz",
        historyParagraph: "IEEE METU NCC, <strong>7 Mart 2011</strong> tarihinde Ali Muhtaroğlu Hocamız, Furkan Ercan ve ekibi tarafından kurulmuştur. Topluluğumuz, öğrencilerin mühendislik, teknoloji ve yenilik alanlarında gelişimini desteklemeyi amaçlayan aktif bir öğrenci organizasyonudur.",
        subsocietiesTitle: "Alt Topluluklar",
        subsocietiesParagraph: "IEEE METU NCC bünyesinde <strong>RAS</strong> (Robotics & Automation Society), <strong>AESS</strong> (Aerospace & Electronic Systems Society) ve <strong>CS</strong> (Computer Society) olmak üzere dört aktif alt topluluk bulunmaktadır. Her bir alt topluluk, kendi ilgi alanlarına yönelik teknik eğitimler, seminerler, atölye çalışmaları ve sosyal etkinlikler düzenlemektedir.",
        eventsTitle: "Etkinlikler ve Yarışmalar",
        eventsParagraph: "Topluluğumuz ayrıca <strong>TEKNOFEST</strong> gibi ulusal teknoloji yarışmalarına düzenli olarak katılmakta ve üniversitemizi gururla temsil etmektedir. Bunun yanında IEEE METU NCC, teknik bilgi paylaşımını teşvik eden etkinliklerin yanı sıra sosyal dayanışmayı güçlendiren projelere de önem verir.",
        visionTitle: "Vizyonumuz",
        visionParagraph: "IEEE METU NCC, <strong>\"Inspire. Innovate. Impact.\"</strong> vizyonuyla, öğrencilerin hem teknik hem de liderlik becerilerini geliştirebileceği bir ortam sunmaya devam etmektedir."
      },
      modal: {
        explore: "Keşfet"
      },
      footer: {
        follow: "Bizi takip edin:"
      }
      ,
      contact: {
        pageTitle: "İletişim - IEEE ODTÜ KKK",
        headerTitle: "İletişim",
        xtremeFormTitle: "IEEEXtreme Yarışma Kayıt Formu",
        xtremeFormDesc: "IEEEXtreme programlama yarışmasına katılmak için aşağıdaki formu doldurun. Not: Resmi kayıt için IEEE Global Websitesinden kayıt olmanız gerekmektedir. Bu form, üniversite içerisinde sizin takımınızı takip edebilmemiz ve size yardımcı olabilmemiz için oluşturulmuştur.",
        teamInfo: "Takım Bilgileri",
        teamNameLabel: "Takım Adı <span class='text-danger'>*</span>",
        teamSizeLabel: "Takım Üye Sayısı <span class='text-danger'>*</span>",
        member1: "1. Üye Bilgileri (Takım Kaptanı)",
        member2: "2. Üye Bilgileri",
        member3: "3. Üye Bilgileri",
        nameLabelRequired: "Ad Soyad <span class='text-danger'>*</span>",
        emailLabelRequired: "E-posta <span class='text-danger'>*</span>",
        memberIdLabelRequired: "IEEE Member ID <span class='text-danger'>*</span>",
        phoneLabelRequired: "Telefon <span class='text-danger'>*</span>",
        nameLabel: "Ad Soyad",
        emailLabel: "E-posta",
        memberIdLabel: "IEEE Member ID",
        phoneLabel: "Telefon",
        extraInfo: "Ek Bilgiler",
        experienceLabel: "Programlama Deneyimi",
        experiencePlaceholder: "Kullandığınız programlama dilleri ve deneyim seviyeniz...",
        notesLabel: "Notlar / Sorular",
        registerButton: "Kayıt Ol",
        formTitle: "İletişim Formu",
        formDesc: "Mesajınızı bırakın, en kısa sürede size geri dönüş yapalım.",
        subjectLabel: "Konu",
        messageLabelRequired: "Mesaj <span class='text-danger'>*</span>",
        sendButton: "Gönder",
        reachUsTitle: "Bize Ulaşın",
        reachUsDesc: "Sorularınız için e‑posta gönderebilir veya sosyal medya hesaplarımızdan bize ulaşabilirsiniz.",
        sendEmailButton: "Email Gönder",
        instagram: "Instagram",
        linkedin: "LinkedIn",
        roomTitle: "Topluluk Odası",
        roomLocation: "Konum: ODTÜ Kuzey Kıbrıs Kampüsü Mühendislik Labları Binası"
      }
      ,
      team: {
        pageTitle: "Ekibimiz - IEEE ODTÜ KKK",
        boardTitle: "Yönetim Kurulu",
        role: {
          president: "Başkan",
          vicePresident: "Başkan Yardımcısı",
          csChair: "Computer Society Başkanı",
          secretary: "Genel Sekreter",
          aessChair: "AESS Başkanı",
          rasChair: "RAS Başkanı",
          financeCoordinator: "Finans ve Sponsorluk Koordinatörü",
          auditBoard: "Denetim Kurulu Üyesi"
        }
      }
      ,
      teknofest: {
        pageTitle: "Teknofest Projeleri",
        headerTitle: "Teknofest Projelerimiz",
        mechatroverTitle: "Mechatrover",
        mechatroverParagraph: "IEEE METU NCC RAS Mechatrover ekibimiz, 2025 yılında düzenlenen TEKNOFEST Sanayide Dijital Teknolojiler Yarışması’na 10 kişilik bir kadro ile katılım sağlayarak finalist olma başarısı göstermiştir. Bu süreçte ODTÜ Kuzey Kıbrıs Kampüsü’nü (METU NCC) gururla temsil ettik. Sanayide Dijital Teknolojiler Yarışması, imalat sanayinin dijitalleşmesi yoluyla üretim, planlama, stok takip, tedarik, pazarlama, yönetim, karar destek, lojistik ve enerji kullanımı gibi süreçlerde verimlilik, kalite, hız ve esneklik artışı sağlamayı amaçlamaktadır. Bu kapsamda yarışmada, fabrika iç lojistiğinde veya depolarda kullanılabilecek, yollarda hareket ederek belirli yükleri noktadan noktaya taşıyan ve tamamen otonom çalışan bir güdümlü robot tasarlanması beklenmektedir. IEEE METU NCC RAS Mechatrover olarak, geliştirdiğimiz yenilikçi çözüm ile hem takımımızı hem de üniversitemizi bu önemli platformda temsil etmekten gurur duyuyoruz.",
        caleumTitle: "Caleum",
        caleumParagraph: "IEEE–METU CALEUM ekibimiz, 2021 yılında başlatılan Model Uydu Projesi kapsamında çalışmalarını sürdürmüş ve 2024 yılında düzenlenen Model Uydu Yarışması’nda birincilik elde etmiştir. Proje; Güney Tünçer, Nadir Güney Kunt ve Arda Altınbilek liderliğinde yürütülmüş, ekibimizin mühendislik kabiliyetlerini, disiplinler arası iş birliğini ve uzay teknolojilerine olan ilgisini ortaya koymuştur. Bu başarı, METU NCC’nin bilim ve teknoloji alanında ulusal platformda ses getiren en önemli gurur kaynaklarından biri olmuştur."
      },
      calendar: {
        pageTitle: "Takvim",
        headerTitle: "IEEE Etkinlik Takvimi"
      }
    }
  },
  en: {
    translation: {
      title: "IEEE METU NCC",
      nav: {
        home: "Home",
        team: "Our Team",
        teknofest: "Teknofest",
        contact: "Contact",
        about: "About",
        calendar: "Calendar"
      },
      hero: {
        title: "IEEE METU NCC",
        lead: "IEEE (Institute of Electrical and Electronics Engineers), the world's largest technical professional organization, is dedicated to advancing technology for the benefit of humanity.",
        globalMember: "Become an IEEE Global Member",
        registerBranch: "Register to IEEE METU NCC"
      },
      section: {
        subsocieties: "Sub Societies",
        announcements: "Announcements & Events",
        pastEvents: "Past Events",
        cs: "IEEE Computer Society promotes collaborative learning and creation through team projects and events in web development, game development and artificial intelligence. It offers members projects, trainings and activities providing both academic and professional development opportunities.",
        ras: "IEEE RAS organizes trainings and technical events and actively participates in Teknofest competitions.",
        aess: "The newly established IEEE Aerospace and Electronic Systems Society welcomes Aerospace Engineering students."
      },
      about: {
        pageTitle: "About - IEEE METU NCC",
        headerTitle: "About Us",
        headerTagline: "\"Inspire. Innovate. Impact.\"",
        historyTitle: "Our History",
        historyParagraph: "IEEE METU NCC was founded on <strong>March 7, 2011</strong> by Professor Ali Muhtaroğlu, Furkan Ercan and their team. Our student branch is an active organization aiming to support students' development in engineering, technology and innovation.",
        subsocietiesTitle: "Sub Societies",
        subsocietiesParagraph: "Within IEEE METU NCC there are active sub-societies including <strong>RAS</strong> (Robotics & Automation Society), <strong>AESS</strong> (Aerospace & Electronic Systems Society) and <strong>CS</strong> (Computer Society). Each sub-society organizes technical trainings, seminars, workshops and social events tailored to its domain.",
        eventsTitle: "Events and Competitions",
        eventsParagraph: "Our branch regularly participates in national technology competitions such as <strong>TEKNOFEST</strong>, proudly representing our university. In addition to events that promote technical knowledge sharing, IEEE METU NCC values projects that strengthen social collaboration.",
        visionTitle: "Our Vision",
        visionParagraph: "With the vision <strong>\"Inspire. Innovate. Impact.\"</strong>, IEEE METU NCC continues to provide an environment where students can develop both their technical and leadership skills."
      },
      modal: {
        explore: "Explore"
      },
      footer: {
        follow: "Follow us:"
      },
      contact: {
        pageTitle: "Contact - IEEE METU NCC",
        headerTitle: "Contact",
        xtremeFormTitle: "IEEEXtreme Competition Registration Form",
        xtremeFormDesc: "Fill out the form below to join the IEEEXtreme programming competition. Note: Official registration must be completed on the IEEE Global Website. This form is created so we can track and assist your team within the university.",
        teamInfo: "Team Information",
        teamNameLabel: "Team Name <span class='text-danger'>*</span>",
        teamSizeLabel: "Team Member Count <span class='text-danger'>*</span>",
        member1: "Member 1 Details (Team Captain)",
        member2: "Member 2 Details",
        member3: "Member 3 Details",
        nameLabelRequired: "Full Name <span class='text-danger'>*</span>",
        emailLabelRequired: "Email <span class='text-danger'>*</span>",
        memberIdLabelRequired: "IEEE Member ID <span class='text-danger'>*</span>",
        phoneLabelRequired: "Phone <span class='text-danger'>*</span>",
        nameLabel: "Full Name",
        emailLabel: "Email",
        memberIdLabel: "IEEE Member ID",
        phoneLabel: "Phone",
        extraInfo: "Additional Information",
        experienceLabel: "Programming Experience",
        experiencePlaceholder: "Programming languages you use and your experience level...",
        notesLabel: "Notes / Questions",
        registerButton: "Register",
        formTitle: "Contact Form",
        formDesc: "Leave your message and we will get back to you soon.",
        subjectLabel: "Subject",
        messageLabelRequired: "Message <span class='text-danger'>*</span>",
        sendButton: "Send",
        reachUsTitle: "Reach Us",
        reachUsDesc: "You can send an email or reach us via our social media accounts for your questions.",
        sendEmailButton: "Send Email",
        instagram: "Instagram",
        linkedin: "LinkedIn",
        roomTitle: "Community Room",
        roomLocation: "Location: METU Northern Cyprus Campus Engineering Labs Building"
      },
      team: {
        pageTitle: "Our Team - IEEE METU NCC",
        boardTitle: "Executive Board",
        role: {
          president: "President",
          vicePresident: "Vice President",
          csChair: "Computer Society President",
          secretary: "Secretary General",
          aessChair: "AESS President",
          rasChair: "RAS President",
          financeCoordinator: "Finance & Sponsorship Coordinator",
          auditBoard: "Audit Board Member"
        }
      },
      teknofest: {
        pageTitle: "Teknofest Projects",
        headerTitle: "Our Teknofest Projects",
        mechatroverTitle: "Mechatrover",
        mechatroverParagraph: "Our IEEE METU NCC RAS Mechatrover team participated in the 2025 TEKNOFEST Industrial Digital Technologies Competition with a 10-person squad and achieved finalist status, proudly representing METU NCC. The competition aims to increase efficiency, quality, speed and flexibility in processes such as production, planning, stock tracking, supply, marketing, management, decision support, logistics and energy use through the digitalization of the manufacturing industry. Within this scope, teams are expected to design a fully autonomous guided robot that can move along designated paths and transport specific loads point-to-point in factory internal logistics or warehouses. As IEEE METU NCC RAS Mechatrover, we are proud to represent both our team and university on this important platform with our innovative solution.",
        caleumTitle: "Caleum",
        caleumParagraph: "Our IEEE–METU CALEUM team continued its work within the Model Satellite Project launched in 2021 and achieved first place in the 2024 Model Satellite Competition. Led by Güney Tünçer, Nadir Güney Kunt and Arda Altınbilek, the project showcased our team’s engineering capabilities, interdisciplinary collaboration and interest in space technologies. This success has become one of METU NCC’s most prominent sources of pride in the national science and technology arena."
      },
      calendar: {
        pageTitle: "Calendar",
        headerTitle: "IEEE Events Calendar"
      }
    }
  }
};

function updateContent() {
  document.documentElement.lang = i18next.language;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const text = i18next.t(key);
    if (el.tagName === 'INPUT') {
      if (el.hasAttribute('placeholder')) {
        el.setAttribute('placeholder', text);
      }
    } else {
      el.innerHTML = text;
    }
  });
}

// Initialize i18next
const savedLng = localStorage.getItem('lang') || 'tr';
i18next.init({
  lng: savedLng,
  fallbackLng: 'en',
  resources
}, () => {
  updateContent();
  setLangToggleLabel();
});

// Language switcher buttons
function setLangToggleLabel() {
  const toggle = document.querySelector('[data-lang-toggle]');
  if (!toggle) return;
  // Show the next language code as label
  toggle.textContent = i18next.language === 'tr' ? 'EN' : 'TR';
}

document.addEventListener('click', (e) => {
  const toggle = e.target.closest('[data-lang-toggle]');
  if (toggle) {
    const next = i18next.language === 'tr' ? 'en' : 'tr';
    i18next.changeLanguage(next, () => {
      localStorage.setItem('lang', next);
      updateContent();
      setLangToggleLabel();
    });
    return;
  }
  const btn = e.target.closest('[data-setlang]');
  if (btn) {
    const lang = btn.getAttribute('data-setlang');
    i18next.changeLanguage(lang, () => {
      localStorage.setItem('lang', lang);
      updateContent();
      setLangToggleLabel();
    });
  }
});
