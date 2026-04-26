import { c as createComponent } from './astro-component_oCQm8Jw4.mjs';
import 'piccolore';
import { c as createRenderInstruction, m as maybeRenderHead, b as addAttribute, u as unescapeHTML, a as renderTemplate, r as renderComponent, F as Fragment, d as renderSlot, e as renderHead } from './prerender_BIeJtcx-.mjs';
import 'clsx';
import fs from 'node:fs';
import path from 'node:path';

async function renderScript(result, id) {
  const inlined = result.inlinedScripts.get(id);
  let content = "";
  if (inlined != null) {
    if (inlined) {
      content = `<script type="module">${inlined}</script>`;
    }
  } else {
    const resolved = await result.resolve(id);
    content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"></script>`;
  }
  return createRenderInstruction({ type: "script", id, content });
}

const translations = {
  tr: {
    // -- Meta --
    siteName: "Harezm SAP Consulting",
    // -- Nav --
    navHome: "Ana Sayfa",
    navServices: "Hizmetler",
    navRollout: "Roll-out & Lokalizasyon",
    navReferences: "Referanslar",
    navInsight: "Insights",
    navAbout: "Hakkımızda",
    navContact: "İletişim",
    navCta: "Görüşelim",
    // -- Hero --
    heroBadge: "SAP FİNANS VE LOKALİZASYON UZMANLIĞI",
    heroTitle1: "SAP ve Yapay Zeka ile",
    heroTitle2: "Finansal Dönüşüm",
    heroDesc: "Karmaşık finansal süreçleri sadeleştiriyor, sınır ötesi operasyonlarınızı ve SAP dönüşümünüzü güvence altına alıyoruz. 15+ yıllık deneyimle CFO ofisini stratejik karar merkezine dönüştürün.",
    heroCtaPrimary: "Yaklaşımımızı İnceleyin",
    heroCtaSecondary: "Stratejinizi Değerlendirelim",
    heroStat: "100+",
    heroStatLabel1: "Başarıyla Tamamlanmış",
    heroStatLabel2: "Global Entegrasyon",
    heroExpBadge: "%40 Daha Hızlı Finansal Kapanış",
    // -- Problem / Solution --
    psSectionTitle: "Manuel Süreçlerden Otomasyona",
    psSectionDesc: "SAP mimarisi ve AI destekli yaklaşımlarla finansal operasyonlardaki darboğazları çözüyor, veri odaklı bir altyapı kuruyoruz.",
    psProblems: "Mevcut Zorluklar",
    psSolutions: "Harezm Çözümü",
    psP1Title: "Yanlış Maliyetleme",
    psP1Desc: "Hatalı CO yapılandırması sonucu ürün karlılığının şeffaf izlenememesi.",
    psP2Title: "Veri Dağınıklığı",
    psP2Desc: "Farklı sistemlerden gelen uyumsuz finansal verilerin konsolidasyon zorluğu.",
    psS1Title: "Doğru CO Tasarımı",
    psS1Desc: "Operasyonel mükemmellik için uçtan uca karlılık analizi ve maliyet akışı.",
    psS2Title: "Merkezi Finansal Yönetim",
    psS2Desc: "S/4HANA ile gerçek zamanlı raporlama ve tek veri kaynağı güvenilirliği.",
    // -- Services --
    svcTitle: "Stratejik Uzmanlık Alanları",
    svcFiCoTitle: "SAP FI/CO Otomasyonu",
    svcFiCoDesc: "Defter-i Kebir, Borçlar/Alacaklar Muhasebesi, Duran Varlıklar ve Masraf Yeri Muhasebesi gibi kritik süreçlerde tam entegrasyon.",
    svcFiCoLink: "Detayları İncele",
    svcLocTitle: "Türkiye Lokalizasyonu",
    svcLocDesc: "E-Fatura, E-Defter ve Türk mevzuatına tam uyumlu SAP çözümleriyle yasal risklerinizi sıfıra indirin.",
    svcLocBadge: "Kritik Hizmet",
    svcGlobalTitle: "Dönüşüm & Global Projeler",
    svcGlobalDesc: "Roll-out projeleri ve sistem dönüşümlerinde küresel tecrübe.",
    svcOutsourceTitle: "Danışman Kaynağı & Destek",
    svcOutsourceDesc: "Proje ve operasyonlarınız için kıdemli SAP danışmanlarını dış kaynak (outsourcing) olarak sağlıyoruz.",
    svcS4Title: "S/4HANA Geçişi",
    svcS4Desc: "Eski sistemlerinizden S/4HANA'ya güvenli ve hızlı veri transferi.",
    // -- Why Harezm --
    whyTitle: "Neden Harezm?",
    whyDesc: "Biz sadece yazılım kurmuyoruz; işinizin finansal mimarisini tasarlıyoruz.",
    why1Title: "Derin Teknik Bilgi",
    why1Desc: "SAP FI/CO modüllerinde derinlemesine uzmanlaşmış kıdemli danışman kadrosu.",
    why2Title: "Butik Yaklaşım",
    why2Desc: "Her işletmenin ihtiyacına özel, kalıplaşmış değil, terzi usulü çözümler.",
    why3Title: "Hızlı Devreye Alma",
    why3Desc: "Best-practice kütüphanemiz ile proje sürelerinde %30 tasarruf.",
    whyQuote: '"Karmaşıklığı\nSadelikle\nYönetiyoruz."',
    // -- Brands --
    brandsTitle: "Bize Güvenen Markalar",
    // -- Thought Leadership --
    tlBadge: "THOUGHT LEADERSHIP",
    tlTitle: "CFO'nun Dönüşüm Ajandası",
    tlDesc: "Sınıfının en iyisi finansal operasyonların nasıl kurulduğunu, yapay zeka entegrasyonlarını ve %40'a varan zaman tasarrufunun mimarisini özel yayınımızda keşfedin.",
    tlBtn: "Kitabı İndirin (PDF)",
    tlBookTitle: "Yapay Zeka Destekli Finans: Sınır Ötesi Operasyonlar",
    tlBookDesc: "3 Ayda SAP FI Dönüşümü ve Uçtan Uca Maliyet Tasarrufu Vaka Analizleri.",
    // -- CTA --
    ctaTitle: "Finansal Geleceğinizi Tasarlayın",
    ctaDesc: "SAP finans operasyonlarınızdaki darboğazları birlikte analiz edelim ve en doğru otomasyon yol haritasını çıkaralım.",
    // -- Footer --
    footerDesc: "Satış ekibine değil, doğrudan çözüm mimarına ulaşırsınız. WhatsApp, Telegram veya LinkedIn üzerinden yazın, hazır teklif değil gerçek analiz alın.",
    footerQuickLinks: "Hızlı Bağlantılar",
    footerServices: "Hizmetlerimiz",
    footerCases: "Vaka Analizleri",
    footerBlog: "Teknik Blog",
    footerCareer: "Kariyer",
    footerContact: "İletişim",
    footerNewsletter: "Bülten Kaydı",
    footerNewsletterDesc: "En güncel SAP finans haberleri ve mevzuat değişiklikleri için kaydolun.",
    footerEmailPlaceholder: "E-posta adresiniz",
    footerCopyright: "© 2026 Harezm. Tüm Hakları Saklıdır.",
    footerKvkk: "KVKK",
    footerPrivacy: "Gizlilik Politikası",
    footerCookies: "Çerez Ayarları",
    // -- Hizmetler Page --
    svcPageBadge: "SAP UZMANLIK HİZMETLERİ",
    svcPageTitle1: "Finansal Sistemlerinizi",
    svcPageTitle2: "Baştan Tasarlıyoruz.",
    svcPageDesc: "SAP FI/CO, S/4HANA dönüşüm süreçleri ve Türkiye lokalizasyonu konusunda derin teknik bilgiyle işletmenizi geleceğe hazırlıyoruz.",
    svcPageStat1: "100+",
    svcPageStat1Label: "Başarılı Proje",
    svcPageStat2: "15+",
    svcPageStat2Label: "Yıllık Tecrübe",
    svcPageStat3: "7/24",
    svcPageStat3Label: "Teknik Destek",
    svcAreaTitle: "Hizmet Alanlarımız",
    svcAreaDesc: "Kurumsal kaynak planlama süreçlerinizde verimliliği artırmak için özelleştirilmiş finansal modül çözümleri.",
    svcFiTitle: "SAP Finansal Muhasebe (FI)",
    svcFiItem1: "Defter-i Kebir (GL) Süreçleri",
    svcFiItem2: "Borçlar & Alacaklar Muhasebesi",
    svcFiItem3: "Banka Hesap Yönetimi",
    svcFiItem4: "Vergi Yönetimi & E-Çözümler",
    svcCoTitle: "SAP Finansal Çekirdek Modülleri",
    svcCoBadge: "Amiral Gemimiz",
    svcCoDesc: "SAP FI, SAP AA, Banka Muhasebesi, SAP RE-FX, Cash Management, IFRS, Banka Entegrasyonları, POS Entegrasyonları, DBS Sistemi, Tahsilat Sistemleri, E-Devlet Uygulamaları, E-Defter, E-Fatura, Türkiye Lokalizasyonu, Global Rolloutlar, Şirket Birleştirme ve Ayrıştırma Projeleri.",
    svcLocFullTitle: "Türkiye Lokalizasyonu",
    svcLocFullDesc: "Mevzuat uyumluluğu, e-Defter, e-Fatura ve beyanname süreçlerinin tam entegrasyonu.",
    svcRolloutTitle: "Global Rollout Projeleri",
    svcRolloutDesc: "Çok uluslu şirketlerin merkezi SAP şablonlarını farklı ülkelere uyarlama, yerel mevzuat entegrasyonu ve çoklu para birimi yönetimi konularında uçtan uca proje yönetimi sunuyoruz.",
    svcS4FullTitle: "SAP S/4HANA Dönüşüm",
    svcS4FullDesc: "Greenfield ve Brownfield yaklaşımlarıyla yeni nesil ERP dünyasına sorunsuz geçiş.",
    svcPsTitle: "SAP PS, IM & BPC",
    svcPsDesc: "Yatırım yönetimi, proje planlaması ve bütçe konsolidasyonu süreçlerinizi SAP Project System, Investment Management ve Business Planning & Consolidation modülleriyle entegre ediyoruz.",
    svcAmsTitle: "Proje, Dış Kaynak (Outsourcing) ve Destek (AMS)",
    svcAmsDesc: "Yeni SAP projelerinizde tam zamanlı (Full-Time) uzman ihtiyacınızı ya da mevcut süreçlerinizdeki 7/24 AMS (Uygulama Yönetim Hizmetleri) gereksinimlerinizi, kıdemli sertifikalı danışman havuzumuz üzerinden dış kaynak olarak esnek bir şekilde karşılıyoruz.",
    svcCtaTitle: "Hangi Hizmete İhtiyacınız Var?",
    svcCtaDesc: "Gelin, işletmenizin finansal süreçlerini beraber analiz edelim ve size en uygun yol haritasını çizelim.",
    // -- Rollout Page --
    rolloutBadge: "SINIR ÖTESİ SAP PROJELERİ",
    rolloutTitle: "Global Roll-out ve Lokalizasyon Uzmanlığı",
    rolloutDesc: "Çok uluslu şirketlerin merkezi sistemlerini Türkiye'ye (Lokalizasyon) veya yerel idareli SAP sistemlerini globale (Roll-out) hatasız entegre ediyoruz.",
    rolloutInTitle: "Türkiye'ye Gelen Şirketler",
    rolloutInDesc: "Global SAP sistemlerinin Türkiye operasyonları için mevzuata tam uyumlu lokalizasyonu ve rollout projeleri. Merkezi mimariyi koruyarak yerel zorunlulukları karşılıyoruz.",
    rolloutOutTitle: "Yurtdışına Açılan Şirketler",
    rolloutOutDesc: "Türk şirketlerinin küresel operasyonları için merkez SAP yapısının uluslararası standartlara (IFRS) ve yabancı ülke mevzuatlarına (Rollout) uyarlanması.",
    rolloutCta: "Roll-out ve Lokalizasyon İhtiyaçlarınızı Belirleyelim",
    // -- References Page --
    refBadge: "Kanıtlanmış Başarılar",
    refTitle: "Gerçek Dönüşüm Hikayeleri",
    refDesc: "Türkiye ve Dünya'nın önde gelen markaları SAP finans modüllerindeki zorlukları aşmak için Harezm'un derin sektörel uzmanlığına güvendi.",
    refOtherTitle: "Çözüm Ortaklığı Sunduğumuz Diğer Markalar",
    // -- About Page --
    aboutTitle: "Harezm Hakkında",
    aboutP1: 'Harezm, SAP ERP Finansal uygulamalarında derinlemesine uzmanlaşma hedefiyle 2010 yılında kuruldu. Yolculuğumuza "en iyi bildiğimiz işi, en iyi şekilde yapma" prensibiyle başladık.',
    aboutP2: 'Biz yalnızca bir yazılım tedarikçisi değiliz; müşterilerimizin iş süreçlerini analiz eden, darboğazlarını tespit eden ve "best practice" yaklaşımıyla en verimli çözüm yolunu inşa eden stratejik bir danışmanlık ortağıyız.',
    aboutP3: "Sadece Türkiye'ye değil, global çapta yurt dışına da hizmet veren bir firma olarak; pek çok sektörde elde ettiğimiz derin uzmanlık, kaliteli hizmet anlayışı ve SAP-Finans köprüsünü kuran vizyonumuzla fark yaratıyoruz.",
    aboutMission: "Misyon",
    aboutMissionDesc: "Finansal SAP projelerinde müşterilerimizin başarısını sağlamak, riskleri azaltmak ve sürdürülebilir sistem tasarımı yapmak.",
    aboutVision: "Vizyon",
    aboutVisionDesc: "SAP Finance danışmanlığında Türkiye'nin ve bölgenin güvenilir ortağı olmak.",
    // -- Contact Page --
    contactTitle: "Doğru Yaklaşımı Değerlendirelim",
    contactDesc: "Sizin için en doğru finansal dönüşüm stratejisini birlikte planlayalım. Kurumsal SAP ve AI-driven Finance hedefleriniz için görüşelim.",
    contactAddress: "Adres",
    contactPhone: "Telefon",
    contactEmail: "E-posta",
    contactFormName: "Ad Soyad",
    contactFormNamePh: "Adınız Soyadınız",
    contactFormCompany: "Şirket",
    contactFormCompanyPh: "Şirketiniz",
    contactFormEmail: "E-posta",
    contactFormEmailPh: "kurumsal@email.com",
    contactFormType: "Projenizin Türü",
    contactFormOpt1: "Global Rollout — Türkiye Lokalizasyonu",
    contactFormOpt2: "Türk Şirket Yurtdışı Rollout",
    contactFormOpt3: "SAP FI/CO Danışmanlığı",
    contactFormOpt4: "SAP S/4HANA Dönüşüm",
    contactFormMsg: "Mesaj",
    contactFormMsgPh: "Proje detaylarınızı kısaca anlatın...",
    contactFormSubmit: "Gönder",
    contactBizUlasin: "Bize Ulaşın"
  },
  en: {
    siteName: "Harezm SAP Consulting",
    navHome: "Home",
    navServices: "Services",
    navRollout: "Roll-out & Localization",
    navReferences: "References",
    navInsight: "Insights",
    navAbout: "About",
    navContact: "Contact",
    navCta: "Let's Talk",
    heroBadge: "SAP FINANCE & LOCALIZATION EXPERTISE",
    heroTitle1: "Financial Transformation",
    heroTitle2: "Driven by SAP & AI",
    heroDesc: "We simplify complex financial processes and secure your cross-border SAP operations. Empower the CFO office as a strategic decision center with 15+ years of execution.",
    heroCtaPrimary: "Explore Our Approach",
    heroCtaSecondary: "Evaluate Your Strategy",
    heroStat: "100+",
    heroStatLabel1: "Successfully Completed",
    heroStatLabel2: "Global Integrations",
    heroExpBadge: "40% Faster Financial Closing",
    psSectionTitle: "From Manual to Automation",
    psSectionDesc: "We resolve bottlenecks in financial operations with SAP architecture and AI, building a data-driven foundation.",
    psProblems: "Current Challenges",
    psSolutions: "Harezm Solution",
    psP1Title: "Incorrect Costing",
    psP1Desc: "Inability to transparently monitor product profitability due to incorrect CO configuration.",
    psP2Title: "Data Silos",
    psP2Desc: "Difficulties in consolidating incompatible financial data from different systems.",
    psS1Title: "Accurate CO Design",
    psS1Desc: "End-to-end profitability analysis and cost flow for operational excellence.",
    psS2Title: "Centralized Financial Management",
    psS2Desc: "Real-time reporting and single source of truth with S/4HANA.",
    svcTitle: "Strategic Expertise",
    svcFiCoTitle: "SAP FI/CO Automation",
    svcFiCoDesc: "Full integration in critical processes such as General Ledger, AP/AR, Fixed Assets, and Cost Center Accounting.",
    svcFiCoLink: "Learn More",
    svcLocTitle: "Turkey Localization",
    svcLocDesc: "Eliminate legal risks with SAP solutions fully compliant with e-Invoice, e-Ledger and Turkish regulations.",
    svcLocBadge: "Critical Service",
    svcGlobalTitle: "Transformation & Global Projects",
    svcGlobalDesc: "Global experience in roll-out projects and system transformations.",
    svcOutsourceTitle: "Consultant Resourcing & Support",
    svcOutsourceDesc: "We provide senior SAP consultants as outsourced resources for your projects and operations.",
    svcS4Title: "S/4HANA Migration",
    svcS4Desc: "Safe and rapid data transfer from legacy systems to S/4HANA.",
    whyTitle: "Why Harezm?",
    whyDesc: "We don't just install software — we design the financial architecture of your business.",
    why1Title: "Deep Technical Knowledge",
    why1Desc: "A senior consultant team deeply specialized in SAP FI/CO modules.",
    why2Title: "Boutique Approach",
    why2Desc: "Tailor-made solutions specific to each business need, not cookie-cutter.",
    why3Title: "Rapid Go-Live",
    why3Desc: "30% savings in project timelines with our best-practice library.",
    whyQuote: '"Managing\nComplexity\nwith Simplicity."',
    brandsTitle: "Trusted By Leading Brands",
    tlBadge: "THOUGHT LEADERSHIP",
    tlTitle: "The CFO's Transformation Agenda",
    tlDesc: "Discover how best-in-class financial operations are built, AI integrations are managed, and architectures delivering up to 40% time savings are deployed in our exclusive publication.",
    tlBtn: "Download the Book (PDF)",
    tlBookTitle: "AI-Driven Finance: Cross-Border Operations",
    tlBookDesc: "3-Month SAP FI Transformation and End-to-End Cost Savings Case Studies.",
    ctaTitle: "Design Your Financial Future",
    ctaDesc: "Let's analyze the bottlenecks in your SAP finance operations together and map out the right automation roadmap.",
    footerDesc: "Your solution partner, specialized in SAP financial modules, offering consulting at global standards.",
    footerQuickLinks: "Quick Links",
    footerServices: "Our Services",
    footerCases: "Case Studies",
    footerBlog: "Tech Blog",
    footerCareer: "Careers",
    footerContact: "Contact",
    footerNewsletter: "Newsletter",
    footerNewsletterDesc: "Subscribe for the latest SAP finance news and regulatory updates.",
    footerEmailPlaceholder: "Your email address",
    footerCopyright: "© 2026 Harezm. All Rights Reserved.",
    footerKvkk: "GDPR",
    footerPrivacy: "Privacy Policy",
    footerCookies: "Cookie Settings",
    svcPageBadge: "SAP EXPERT SERVICES",
    svcPageTitle1: "We Redesign Your",
    svcPageTitle2: "Financial Systems.",
    svcPageDesc: "We prepare your business for the future with deep technical knowledge in SAP FI/CO, S/4HANA transformation processes and Turkey localization.",
    svcPageStat1: "100+",
    svcPageStat1Label: "Successful Projects",
    svcPageStat2: "15+",
    svcPageStat2Label: "Years of Experience",
    svcPageStat3: "7/24",
    svcPageStat3Label: "Technical Support",
    svcAreaTitle: "Our Service Areas",
    svcAreaDesc: "Customized financial module solutions to increase efficiency in your enterprise resource planning processes.",
    svcFiTitle: "SAP Financial Accounting (FI)",
    svcFiItem1: "General Ledger (GL) Processes",
    svcFiItem2: "Accounts Payable & Receivable",
    svcFiItem3: "Bank Account Management",
    svcFiItem4: "Tax Management & E-Solutions",
    svcCoTitle: "SAP Financial Core Modules",
    svcCoBadge: "Our Flagship",
    svcCoDesc: "SAP FI, SAP AA, Bank Accounting, SAP RE-FX, Cash Management, IFRS, Bank Integrations, POS Integrations, DBS System, Collection Systems, e-Government Applications, e-Ledger, e-Invoice, Turkey Localization, Global Rollouts, Company Merger and Spin-off Projects.",
    svcLocFullTitle: "Turkey Localization",
    svcLocFullDesc: "Full integration of regulatory compliance, e-Ledger, e-Invoice and declaration processes.",
    svcRolloutTitle: "Global Rollout Projects",
    svcRolloutDesc: "We offer end-to-end project management in adapting multinational companies' central SAP templates to different countries, local regulatory integration and multi-currency management.",
    svcS4FullTitle: "SAP S/4HANA Transformation",
    svcS4FullDesc: "Seamless transition to the next-generation ERP world with Greenfield and Brownfield approaches.",
    svcPsTitle: "SAP PS, IM & BPC",
    svcPsDesc: "We integrate your investment management, project planning and budget consolidation processes with SAP Project System, Investment Management and Business Planning & Consolidation modules.",
    svcAmsTitle: "Project, Outsourcing & Support (AMS)",
    svcAmsDesc: "We flexibly meet your full-time expert needs in new SAP projects or 24/7 AMS (Application Management Services) requirements in your existing processes through our pool of senior certified consultants as an outsourced resource.",
    svcCtaTitle: "Which Service Do You Need?",
    svcCtaDesc: "Let's analyze your business financial processes together and draw the most suitable roadmap for you.",
    rolloutBadge: "CROSS-BORDER SAP PROJECTS",
    rolloutTitle: "Global Roll-out & Localization Expertise",
    rolloutDesc: "We seamlessly integrate multinational companies' central systems to Turkey (Localization) or local SAP systems to global standards (Roll-out).",
    rolloutInTitle: "Companies Entering Turkey",
    rolloutInDesc: "Fully compliant localization and rollout projects for Turkey operations of global SAP systems. We meet local requirements while preserving central architecture.",
    rolloutOutTitle: "Companies Expanding Abroad",
    rolloutOutDesc: "Adapting the central SAP structure of Turkish companies for global operations according to international standards (IFRS) and foreign country regulations (Rollout).",
    rolloutCta: "Let's Identify Your Roll-out & Localization Needs",
    refBadge: "Proven Success",
    refTitle: "Real Transformation Stories",
    refDesc: "Leading brands in Turkey and worldwide have trusted Harezm's deep industry expertise to overcome challenges in SAP financial modules.",
    refOtherTitle: "Other Brands We've Partnered With",
    aboutTitle: "About Harezm",
    aboutP1: 'Harezm was founded in 2010 with the goal of deep specialization in SAP ERP Financial applications. We started our journey with the principle of "doing what we know best, in the best possible way."',
    aboutP2: `We're not just a software supplier; we're a strategic consulting partner that analyzes our clients' business processes, identifies bottlenecks, and builds the most efficient solution path with a "best practice" approach.`,
    aboutP3: "As a company that serves not only Turkey but also globally; we make a difference with our deep expertise gained in many industries, quality service understanding, and our vision of building the SAP-Finance bridge.",
    aboutMission: "Mission",
    aboutMissionDesc: "To ensure the success of our customers in financial SAP projects, reduce risks and design sustainable systems.",
    aboutVision: "Vision",
    aboutVisionDesc: "To be the trusted partner of Turkey and the region in SAP Finance consulting.",
    contactTitle: "Let's Evaluate the Right Approach",
    contactDesc: "Let's plan the most accurate financial transformation strategy for you. Reach out to discuss your enterprise SAP and AI-driven Finance goals.",
    contactAddress: "Address",
    contactPhone: "Phone",
    contactEmail: "Email",
    contactFormName: "Full Name",
    contactFormNamePh: "Your Full Name",
    contactFormCompany: "Company",
    contactFormCompanyPh: "Your Company",
    contactFormEmail: "Email",
    contactFormEmailPh: "corporate@email.com",
    contactFormType: "Project Type",
    contactFormOpt1: "Global Rollout — Turkey Localization",
    contactFormOpt2: "Turkish Company International Rollout",
    contactFormOpt3: "SAP FI/CO Consulting",
    contactFormOpt4: "SAP S/4HANA Transformation",
    contactFormMsg: "Message",
    contactFormMsgPh: "Briefly describe your project details...",
    contactFormSubmit: "Send",
    contactBizUlasin: "Contact Us"
  }
};

function t(key, lang) {
  return translations[lang][key] ?? translations["tr"][key] ?? key;
}
function getLocalePath(path, lang) {
  if (lang === "tr") return path;
  const pathMap = {
    "/": "/en/",
    "/hizmetler": "/en/services",
    "/lokalizasyon": "/en/rollout",
    "/urunler": "/en/products",
    "/referanslar": "/en/references",
    "/hakkimizda": "/en/about",
    "/iletisim": "/en/contact",
    "/sap-refx": "/en/sap-refx",
    "/sap-opentext": "/en/sap-opentext",
    "/sap-checkup": "/en/sap-checkup",
    "/danismanlik": "/en/consulting",
    "/s4hana": "/en/s4hana",
    "/sap-cash-management": "/en/sap-cash-management",
    "/sap-trm": "/en/sap-trm",
    "/kvkk": "/en/kvkk",
    "/gizlilik-politikasi": "/en/privacy-policy",
    "/cerez-politikasi": "/en/cookie-policy"
  };
  return pathMap[path] || `/en${path}`;
}
function getAlternateLangPath(currentPath, currentLang) {
  if (currentLang === "tr") {
    const map = {
      "/": "/en/",
      "/hizmetler": "/en/services",
      "/lokalizasyon": "/en/rollout",
      "/urunler": "/en/products",
      "/referanslar": "/en/references",
      "/hakkimizda": "/en/about",
      "/iletisim": "/en/contact",
      "/sap-refx": "/en/sap-refx",
      "/sap-opentext": "/en/sap-opentext",
      "/sap-checkup": "/en/sap-checkup",
      "/danismanlik": "/en/consulting",
      "/s4hana": "/en/s4hana",
      "/sap-cash-management": "/en/sap-cash-management",
      "/sap-trm": "/en/sap-trm",
      "/kvkk": "/en/kvkk",
      "/gizlilik-politikasi": "/en/privacy-policy",
      "/cerez-politikasi": "/en/cookie-policy"
    };
    return map[currentPath] || `/en${currentPath}`;
  } else {
    const map = {
      "/en/": "/",
      "/en": "/",
      "/en/services": "/hizmetler",
      "/en/rollout": "/lokalizasyon",
      "/en/products": "/urunler",
      "/en/references": "/referanslar",
      "/en/about": "/hakkimizda",
      "/en/contact": "/iletisim",
      "/en/sap-refx": "/sap-refx",
      "/en/sap-opentext": "/sap-opentext",
      "/en/sap-checkup": "/sap-checkup",
      "/en/consulting": "/danismanlik",
      "/en/s4hana": "/s4hana",
      "/en/sap-cash-management": "/sap-cash-management",
      "/en/sap-trm": "/sap-trm",
      "/en/kvkk": "/kvkk",
      "/en/privacy-policy": "/gizlilik-politikasi",
      "/en/cookie-policy": "/cerez-politikasi"
    };
    return map[currentPath] || currentPath.replace("/en", "");
  }
}

const $$Icon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Icon;
  const {
    name,
    size = 24,
    class: className = "",
    animate = false,
    brand = "lesstupid",
    // Default for harezm._web
    variant
  } = Astro2.props;
  const numericSize = typeof size === "string" ? parseInt(size) : size;
  const selectedVariant = variant || (numericSize > 48 ? "illu" : "nav");
  let finalPath = "";
  const isSystemIcon = name.startsWith("icon_");
  if (isSystemIcon) {
    const brandSuffix = brand === "lesstupid" ? "l" : "e";
    const variantSuffix = selectedVariant;
    const fileName = `${name}_${brandSuffix}_${variantSuffix}.svg`;
    finalPath = path.join(process.cwd(), "public", "icons", fileName);
  } else {
    finalPath = path.join(process.cwd(), "public", "icons", `${name}.svg`);
  }
  let svgContent = "";
  let viewBox = "0 0 500 500";
  try {
    if (fs.existsSync(finalPath)) {
      const content = fs.readFileSync(finalPath, "utf-8");
      const viewBoxMatch = content.match(/viewBox="([^"]+)"/);
      if (viewBoxMatch) {
        viewBox = viewBoxMatch[1];
      }
      svgContent = content.replace(/<svg[^>]*>/, "").replace(/<\/svg>/, "").replace(/width="[^"]*"/g, "").replace(/height="[^"]*"/g, "");
      if (!isSystemIcon) {
      }
    } else {
      console.warn(`⚠️ Icon not found: ${finalPath}`);
    }
  } catch (err) {
    console.error(`❌ Error reading icon: ${finalPath}`, err);
  }
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`icon-container ${animate ? "animate-wobble" : ""} ${className}`, "class")}${addAttribute(`width: ${numericSize}px; height: ${numericSize}px;`, "style")} data-astro-cid-patnjmll> <svg${addAttribute(viewBox, "viewBox")} fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full"${addAttribute(isSystemIcon ? "transform: scale(1.0);" : "transform: scale(1.6);", "style")} data-astro-cid-patnjmll>${unescapeHTML(svgContent)}</svg> </div>`;
}, "B:/DEV/HAREZM_EKOSISTEMI/harezm._web/src/components/Icon.astro", void 0);

const $$ThemeToggle = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<button class="theme-toggle-btn w-9 h-9 flex-shrink-0 rounded-lg flex items-center justify-center text-text-70 hover:text-text-main hover:bg-bg2 transition-colors cursor-pointer" aria-label="Toggle theme" title="Toggle dark/light theme" data-astro-cid-x3pjskd3> <!-- Star icon (shown in dark mode, to switch to light) --> <div class="theme-icon-sun" data-astro-cid-x3pjskd3> ${renderComponent($$result, "Icon", $$Icon, { "name": "icon_12_gallery_photos", "size": 20, "data-astro-cid-x3pjskd3": true })} </div> <!-- Clock icon (shown in light mode, to switch to dark) --> <div class="theme-icon-moon hidden" data-astro-cid-x3pjskd3> ${renderComponent($$result, "Icon", $$Icon, { "name": "icon_10_calendar", "size": 20, "data-astro-cid-x3pjskd3": true })} </div> </button>  ${renderScript($$result, "B:/DEV/HAREZM_EKOSISTEMI/harezm._web/src/components/ThemeToggle.astro?astro&type=script&index=0&lang.ts")}`;
}, "B:/DEV/HAREZM_EKOSISTEMI/harezm._web/src/components/ThemeToggle.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Header;
  const { lang = "tr" } = Astro2.props;
  const currentPath = Astro2.url.pathname;
  const navItems = [
    { label: "Çözümler", enLabel: "Solutions", path: "/urunler" },
    { label: "Hizmetler", enLabel: "Services", path: "/hizmetler" },
    { label: "Kurumsal", enLabel: "Corporate", path: "/hakkimizda" },
    { label: "Harezm Insight", enLabel: "Insight", path: "/insight" }
  ];
  function isActivePath(itemPath) {
    const localePath = getLocalePath(itemPath, lang);
    return currentPath === localePath || currentPath === localePath + "/";
  }
  const alternateLangPath = getAlternateLangPath(currentPath, lang);
  return renderTemplate`${maybeRenderHead()}<nav class="fixed top-0 w-full z-50 glass-nav" id="main-nav"> <div class="flex justify-between items-center px-8 md:px-12 py-3.5 max-w-container mx-auto relative z-20"> <!-- Logo --> <div class="flex items-center"> <a${addAttribute(getLocalePath("/", lang), "href")} class="flex items-center group"> <img src="/images/logo/darktheme_logo.svg" alt="Harezm Logo" class="h-7 md:h-8 w-auto object-contain hidden-in-light group-hover:opacity-80 transition-opacity"> <img src="/images/logo/lighttheme_logo.svg" alt="Harezm Logo" class="h-7 md:h-8 w-auto object-contain hidden-in-dark group-hover:opacity-80 transition-opacity"> </a> </div> <!-- Navigation (Desktop) --> <div class="hidden md:flex items-center space-x-2 h-[50px]"> <!-- Çözümler Dropdown (Mega Menu) --> <div class="relative group h-full flex items-center"> <button${addAttribute(`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 cursor-default ${isActivePath("/urunler") ? "text-primary font-semibold" : "text-text-70 group-hover:text-text-main"}`, "class")}> ${lang === "tr" ? "Çözümlerımız" : "Solutions"} ${renderComponent($$result, "Icon", $$Icon, { "name": "icon_50_orchestrator", "size": 14, "class": "rotate-90 text-text-40 group-hover:rotate-[270deg] transition-transform duration-300" })} </button> <!-- Mega Menu Panel --> <div class="absolute top-full -translate-x-1/3 pt-4 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0 translate-y-3 transition-all duration-300 z-[60]"> <!-- Bridge (invisible area so hover doesn't break) --> <div class="absolute -top-4 left-0 w-full h-4"></div> <div class="bg-bg shadow-[0_16px_50px_rgba(0,0,0,0.15)] border border-border rounded-2xl w-[750px] flex flex-row overflow-hidden backdrop-blur-3xl"> <!-- Left Side: Product Links --> <div class="flex-[3] p-8 bg-bg/95"> <h4 class="text-xs font-bold tracking-widest text-text-40 uppercase mb-5">${lang === "tr" ? "E-Dönüşüm & Altyapı" : "E-Transformation & Infra"}</h4> <div class="space-y-1.5"> <a${addAttribute(getLocalePath("/urunler", lang), "href")} class="flex items-start gap-4 p-3.5 rounded-xl hover:bg-bg2 transition-colors group/item"> <div class="w-11 h-11 rounded-lg bg-teal/10 text-teal flex items-center justify-center shrink-0 group-hover/item:scale-110 transition-transform"> ${renderComponent($$result, "Icon", $$Icon, { "name": "icon_12_gallery_photos", "size": 24 })} </div> <div class="flex-1"> <h5 class="font-bold text-text-main text-[15px] mb-1 group-hover/item:text-teal transition-colors">${lang === "tr" ? "Harezm Nakit Yönetimi" : "Cash Management Hub"}</h5> <p class="text-[13px] text-text-70 leading-relaxed font-light">${lang === "tr" ? "Banka Hub, e-Tahsilat, MT940 mutabakatı ve DBS süreçlerini SAP içinden çıkmadan tek panelde yönetin." : "Manage Bank Hub, e-Collection, MT940 reconciliation directly within SAP."}</p> </div> </a> <a${addAttribute(getLocalePath("/urunler", lang), "href")} class="flex items-start gap-4 p-3.5 rounded-xl hover:bg-bg2 transition-colors group/item"> <div class="w-11 h-11 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover/item:scale-110 transition-transform"> ${renderComponent($$result, "Icon", $$Icon, { "name": "icon_28_info_about", "size": 24 })} </div> <div class="flex-1"> <h5 class="font-bold text-text-main text-[15px] mb-1 group-hover/item:text-primary transition-colors">${lang === "tr" ? "e-Devlet Serisi Çözümleri" : "e-Government Series"}</h5> <p class="text-[13px] text-text-70 leading-relaxed font-light">${lang === "tr" ? "Tam uyumlu e-Fatura, e-Defter, e-İrsaliye çözümlerini %100 SAP FI modülü üzerine kurun." : "Install fully compliant e-Invoice and e-Ledger solutions naturally on SAP FI."}</p> </div> </a> <a${addAttribute(getLocalePath("/e-ticaret", lang), "href")} class="flex items-start gap-4 p-3.5 rounded-xl hover:bg-bg2 transition-colors group/item"> <div class="w-11 h-11 rounded-lg bg-[#26A5E4]/10 text-[#26A5E4] flex items-center justify-center shrink-0 group-hover/item:scale-110 transition-transform"> ${renderComponent($$result, "Icon", $$Icon, { "name": "icon_15_download", "size": 24 })} </div> <div class="flex-1"> <h5 class="font-bold text-text-main text-[15px] mb-1 group-hover/item:text-[#26A5E4] transition-colors">${lang === "tr" ? "Pazaryeri & e-Ticaret" : "Commerce & Marketplace"}</h5> <p class="text-[13px] text-text-70 leading-relaxed font-light">${lang === "tr" ? "Shopify, Trendyol ve Hepsiburada siparişlerini otomatik faturalaştırıp muhasebeleşmesini sağlayın." : "Automatically invoice and account Shopify, Trendyol and other marketplace orders."}</p> </div> </a> </div> </div> <!-- Right Side: Promo Action Card --> <div class="flex-[2] bg-primary p-8 text-white relative flex flex-col justify-end overflow-hidden shadow-inner"> <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.05]"></div> <div class="absolute top-0 right-0 w-32 h-32 bg-white/15 rounded-full blur-[40px]"></div> <div class="relative z-10 text-left"> <div class="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mb-6"> ${renderComponent($$result, "Icon", $$Icon, { "name": "icon_26_plus_add", "size": 20, "class": "text-white" })} </div> <h4 class="font-bold text-xl mb-3 leading-tight">${lang === "tr" ? "AgentAndBot ile Otomatize Edin" : "Automate with AgentAndBot"}</h4> <p class="text-[13px] text-white/80 leading-relaxed mb-6 font-light"> ${lang === "tr" ? "Maliyetli manuel bankacılık ve muhasebe operasyonlarınızı yapay zeka ajanlarıyla uçtan uca dönüştürüyoruz." : "Transform your costly manual banking and accounting operations end-to-end with AI agents."} </p> <a${addAttribute(getLocalePath("/iletisim", lang), "href")} class="inline-flex w-full items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white text-primary font-bold text-sm hover:shadow-xl hover:bg-bg2 hover:-translate-y-0.5 transition-all"> ${lang === "tr" ? "Demo Randevusu Al" : "Book a Demo"} </a> </div> </div> </div> </div> </div> <!-- Hizmetlerimiz Dropdown (Mega Menu) --> <div class="relative group h-full flex items-center"> <button${addAttribute(`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 cursor-default ${isActivePath("/hizmetler") ? "text-primary font-semibold" : "text-text-70 group-hover:text-text-main"}`, "class")}> ${lang === "tr" ? "Hizmetlerimiz" : "Services"} ${renderComponent($$result, "Icon", $$Icon, { "name": "icon_50_orchestrator", "size": 14, "class": "rotate-90 text-text-40 group-hover:rotate-[270deg] transition-transform duration-300" })} </button> <div class="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0 translate-y-3 transition-all duration-300 z-[60]"> <div class="absolute -top-4 left-0 w-full h-4"></div> <div class="bg-bg shadow-[0_16px_50px_rgba(0,0,0,0.15)] border border-border rounded-2xl w-[850px] flex overflow-hidden backdrop-blur-3xl"> <!-- Left Side: Service Links --> <div class="flex-[3] p-8 bg-bg/95 grid grid-cols-2 gap-8"> <!-- Col 1 --> <div> <h4 class="text-[11px] font-bold tracking-widest text-[#26A5E4] uppercase mb-5 flex items-center gap-2"> ${renderComponent($$result, "Icon", $$Icon, { "name": "icon_28_info_about", "size": 24 })} ${lang === "tr" ? "Mimari Danışmanlık" : "Architecture"} </h4> <ul class="space-y-3.5"> <li><a${addAttribute(getLocalePath("/s4hana", lang), "href")} class="text-[14px] text-text-main hover:text-primary transition-colors font-semibold">${lang === "tr" ? "S/4HANA Dönüşümü" : "S/4HANA Transition"}</a></li> <li><a${addAttribute(getLocalePath("/danismanlik", lang), "href")} class="text-[14px] text-text-main hover:text-primary transition-colors font-medium">${lang === "tr" ? "Uçtan Uca SAP Danışmanlığı" : "End-to-End SAP Consulting"}</a></li> <li><a${addAttribute(getLocalePath("/sap-checkup", lang), "href")} class="text-[14px] text-text-main hover:text-primary transition-colors font-medium">SAP Check-up</a></li> <li><a${addAttribute(getLocalePath("/lokalizasyon", lang), "href")} class="text-[14px] text-text-main hover:text-primary transition-colors font-medium">${lang === "tr" ? "Türkiye Lokalizasyonu & Roll-out" : "Turkey Localization & Roll-out"}</a></li> <li><a${addAttribute(getLocalePath("/sap-egitimleri", lang), "href")} class="text-[14px] text-text-main hover:text-primary transition-colors font-medium">${lang === "tr" ? "Kurumsal SAP Eğitimleri" : "Corporate SAP Trainings"}</a></li> <li><a${addAttribute(getLocalePath("/sap-joule-ai", lang), "href")} class="text-[14px] text-text-main hover:text-primary transition-colors font-medium">SAP Joule AI ${lang === "tr" ? "Entegrasyonu" : "Integration"}</a></li> </ul> </div> <!-- Col 2 --> <div> <h4 class="text-[11px] font-bold tracking-widest text-[#26A5E4] uppercase mb-5 flex items-center gap-2"> ${renderComponent($$result, "Icon", $$Icon, { "name": "icon_01_home", "size": 24 })} ${lang === "tr" ? "Modüler Uzmanlık" : "Modular Expertise"} </h4> <ul class="space-y-3.5"> <li><a${addAttribute(getLocalePath("/sap-refx", lang), "href")} class="text-[14px] text-text-main hover:text-primary transition-colors font-medium">${lang === "tr" ? "Gayrimenkul ve İhtilaf (RE-FX)" : "Real Estate (RE-FX)"}</a></li> <li><a${addAttribute(getLocalePath("/sap-trm", lang), "href")} class="text-[14px] text-text-main hover:text-primary transition-colors font-medium">${lang === "tr" ? "Hazine ve Risk (TRM)" : "Treasury & Risk (TRM)"}</a></li> <li><a${addAttribute(getLocalePath("/enflasyon-muhasebesi", lang), "href")} class="text-[14px] text-text-main hover:text-primary transition-colors font-medium">${lang === "tr" ? "TMS 29 Enflasyon Muhasebesi" : "Inflation Accounting"}</a></li> <li><a${addAttribute(getLocalePath("/sap-aa", lang), "href")} class="text-[14px] text-text-main hover:text-primary transition-colors font-medium">${lang === "tr" ? "Duran Varlık Yönetimi (AA)" : "Asset Accounting (AA)"}</a></li> <li><a${addAttribute(getLocalePath("/sap-finansal-konsolidasyon", lang), "href")} class="text-[14px] text-text-main hover:text-primary transition-colors font-medium">${lang === "tr" ? "Grup Raporlaması ve Konsolidasyon" : "Group Reporting & Consolidation"}</a></li> <li><a${addAttribute(getLocalePath("/sap-opentext", lang), "href")} class="text-[14px] text-text-main hover:text-primary transition-colors font-medium">SAP & OpenText</a></li> </ul> </div> </div> <!-- Right Side: Promo Action Card --> <div class="flex-[1.2] bg-bg2 p-8 relative flex flex-col overflow-hidden border-l border-border"> <div class="absolute -bottom-10 -right-10 w-40 h-40 bg-teal/10 rounded-full blur-[40px]"></div> <div class="relative z-10 text-left h-full flex flex-col"> ${renderComponent($$result, "Icon", $$Icon, { "name": "icon_05_settings_gear", "size": 30, "class": "text-teal mb-4" })} <h4 class="font-bold text-lg mb-2 text-text-main">${lang === "tr" ? "Mükemmel Mimari" : "Flawless Architecture"}</h4> <p class="text-[13px] text-text-70 leading-relaxed font-light flex-grow"> ${lang === "tr" ? "Tüm finansal yapınızı uçtan uca tek sistem üzerinde sıfır manuel iş prensibiyle tasarlıyoruz." : "We design your entire financial structure end-to-end on a single system with zero manual work."} </p> <a${addAttribute(getLocalePath("/hizmetler", lang), "href")} class="inline-flex items-center gap-1.5 text-xs font-bold text-teal hover:text-primary transition-colors"> ${lang === "tr" ? "Tüm Hizmetleri Gör" : "View All Services"} ${renderComponent($$result, "Icon", $$Icon, { "name": "icon_17_share", "size": 12, "class": "rotate-[-45deg]" })} </a> </div> </div> </div> </div> </div> <!-- Kurumsal Dropdown --> <div class="relative group h-full flex items-center"> <button${addAttribute(`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 cursor-default ${isActivePath("/hakkimizda") || isActivePath("/sektorler") || isActivePath("/insight") ? "text-primary font-semibold" : "text-text-70 group-hover:text-text-main"}`, "class")}> ${lang === "tr" ? "Kurumsal" : "Corporate"} ${renderComponent($$result, "Icon", $$Icon, { "name": "icon_50_orchestrator", "size": 14, "class": "rotate-90 text-text-40 group-hover:rotate-[270deg] transition-transform duration-300" })} </button> <div class="absolute top-full -translate-x-2/3 pt-4 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0 translate-y-3 transition-all duration-300 z-[60]"> <div class="absolute -top-4 left-0 w-full h-4"></div> <div class="bg-bg/95 shadow-[0_16px_50px_rgba(0,0,0,0.15)] border border-border rounded-2xl w-[500px] flex overflow-hidden backdrop-blur-3xl p-8 grid grid-cols-2 gap-8"> <div> <h4 class="text-[11px] font-bold tracking-widest text-text-40 uppercase mb-5 flex items-center gap-2"> ${renderComponent($$result, "Icon", $$Icon, { "name": "icon_01_home", "size": 24 })} ${lang === "tr" ? "Hakkımızda" : "About Us"} </h4> <ul class="space-y-3.5"> <li><a${addAttribute(getLocalePath("/hakkimizda", lang), "href")} class="text-[14px] text-text-main hover:text-primary transition-colors font-semibold">${lang === "tr" ? "Biz Kimiz?" : "Who We Are"}</a></li> <li><a${addAttribute(getLocalePath("/sektorler", lang), "href")} class="text-[14px] text-text-main hover:text-primary transition-colors font-medium">${lang === "tr" ? "Hizmet Verdiğimiz Sektörler" : "Industries We Serve"}</a></li> <li><a${addAttribute(getLocalePath("/iletisim", lang), "href")} class="text-[14px] text-text-main hover:text-primary transition-colors font-medium">${lang === "tr" ? "İletişim & Konum" : "Contact & Location"}</a></li> </ul> </div> <div> <h4 class="text-[11px] font-bold tracking-widest text-text-40 uppercase mb-5 flex items-center gap-2"> ${renderComponent($$result, "Icon", $$Icon, { "name": "icon_28_info_about", "size": 24 })} ${lang === "tr" ? "İçerik & Yasal" : "Insights & Legal"} </h4> <ul class="space-y-3.5"> <li><a${addAttribute(getLocalePath("/insight", lang), "href")} class="text-[14px] text-text-main hover:text-primary transition-colors font-medium">Harezm Insight</a></li> <li><a${addAttribute(getLocalePath("/kvkk", lang), "href")} class="text-[14px] text-text-main hover:text-primary transition-colors font-medium text-text-70">KVKK / Aydınlatma</a></li> <li><a${addAttribute(getLocalePath("/gizlilik-politikasi", lang), "href")} class="text-[14px] text-text-main hover:text-primary transition-colors font-medium text-text-70">${lang === "tr" ? "Gizlilik Politikası" : "Privacy Policy"}</a></li> <li><a${addAttribute(getLocalePath("/cerez-politikasi", lang), "href")} class="text-[14px] text-text-main hover:text-primary transition-colors font-medium text-text-70">${lang === "tr" ? "Çerez Politikası" : "Cookie Policy"}</a></li> </ul> </div> </div> </div> </div> </div> <!-- Right Actions --> <div class="flex items-center gap-2 md:gap-4"> <!-- Theme Toggle --> <div class="hidden md:flex h-full items-center"> ${renderComponent($$result, "ThemeToggle", $$ThemeToggle, {})} </div> <!-- Lang Dropdown (Desktop) --> <div class="relative group hidden lg:flex h-full items-center"> <button class="flex items-center gap-1.5 px-2 py-2 rounded-lg text-sm font-medium text-text-70 group-hover:text-text-main hover:bg-bg2 transition-colors duration-200"> ${renderComponent($$result, "Icon", $$Icon, { "name": "icon_23_eye_view", "size": 18 })} ${lang === "tr" ? "TR" : "EN"} ${renderComponent($$result, "Icon", $$Icon, { "name": "icon_50_orchestrator", "size": 14, "class": "rotate-90 text-text-40 group-hover:rotate-[270deg] transition-transform duration-300" })} </button> <div class="absolute top-full right-0 pt-4 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0 translate-y-3 transition-all duration-300 z-[60]"> <div class="absolute -top-4 right-0 w-full h-4"></div> <div class="bg-bg/95 shadow-[0_16px_50px_rgba(0,0,0,0.15)] border border-border rounded-xl w-[140px] flex py-2 flex-col overflow-hidden backdrop-blur-3xl"> <a${addAttribute(getAlternateLangPath(currentPath, "en"), "href")}${addAttribute(`px-4 py-2.5 text-sm font-medium transition-colors flex items-center justify-between ${lang === "tr" ? "text-primary bg-primary/5 font-bold" : "text-text-70 hover:bg-bg2 hover:text-text-main"}`, "class")}>
Türkçe
${lang === "tr" && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": "icon_25_check_confirm", "size": 16, "class": "text-primary" })}`} </a> <a${addAttribute(getAlternateLangPath(currentPath, "tr"), "href")}${addAttribute(`px-4 py-2.5 text-sm font-medium transition-colors flex items-center justify-between ${lang === "en" ? "text-primary bg-primary/5 font-bold" : "text-text-70 hover:bg-bg2 hover:text-text-main"}`, "class")}>
English
${lang === "en" && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": "icon_25_check_confirm", "size": 16, "class": "text-primary" })}`} </a> </div> </div> </div> <!-- CTA (Desktop) --> <a${addAttribute(getLocalePath("/iletisim", lang), "href")} class="hidden sm:inline-block bg-primary text-white px-5 py-2.5 rounded-lg font-medium text-sm hover:bg-primary-hover transition-colors"> ${t("navCta", lang)} </a> <!-- Hamburger Button (Mobile) --> <button id="mobile-menu-btn" class="md:hidden flex flex-col items-center justify-center w-10 h-10 text-text-main hover:bg-bg2 rounded-lg transition-colors focus:outline-none" aria-label="Menu Toggle"> <div id="menu-icon-open"> ${renderComponent($$result, "Icon", $$Icon, { "name": "icon_30_menu_hamburger", "size": 28 })} </div> <div id="menu-icon-close" class="hidden"> ${renderComponent($$result, "Icon", $$Icon, { "name": "icon_24_close_cancel", "size": 28 })} </div> </button> </div> </div> <!-- Mobile Menu Overlay --> <div id="mobile-menu" class="absolute top-full left-0 w-full bg-bg/95 backdrop-blur-xl border-t border-border-main shadow-2xl transition-all duration-300 ease-in-out opacity-0 -translate-y-4 pointer-events-none md:hidden flex flex-col px-8 py-6 gap-2 h-[calc(100vh-70px)] overflow-y-auto z-10"> ${navItems.map((item) => renderTemplate`<a${addAttribute(`flex items-center px-4 py-3.5 rounded-xl text-lg font-medium transition-all duration-200 ${isActivePath(item.path) ? "text-primary bg-primary/10 font-bold border-l-4 border-primary" : "text-text-main hover:text-primary hover:bg-bg2"}`, "class")}${addAttribute(getLocalePath(item.path, lang), "href")}> ${lang === "tr" ? item.label : item.enLabel} </a>`)} <div class="mt-4 mb-2 h-px w-full bg-border-main"></div> <!-- CTA (Mobile) --> <a${addAttribute(getLocalePath("/iletisim", lang), "href")} class="w-full text-center bg-primary text-white px-6 py-4 rounded-xl font-bold text-base hover:bg-primary-hover transition-colors shadow-md"> ${t("navCta", lang)} </a> <!-- Theme Toggle (Mobile) --> <div class="mt-2 flex items-center justify-center"> ${renderComponent($$result, "ThemeToggle", $$ThemeToggle, {})} </div> <!-- Lang Toggle (Mobile) --> <div class="mt-4 flex items-center justify-center bg-bg2 rounded-full p-1.5 gap-1 w-full max-w-[240px] mx-auto border border-border-main"> ${lang === "tr" ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <span class="px-6 py-2.5 rounded-full bg-primary text-white text-sm font-bold tracking-wide w-1/2 text-center">TR</span> <a${addAttribute(alternateLangPath, "href")} class="px-6 py-2.5 rounded-full text-text-40 text-sm font-bold tracking-wide hover:text-text-main transition-colors w-1/2 text-center">EN</a> ` })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <a${addAttribute(alternateLangPath, "href")} class="px-6 py-2.5 rounded-full text-text-40 text-sm font-bold tracking-wide hover:text-text-main transition-colors w-1/2 text-center">TR</a> <span class="px-6 py-2.5 rounded-full bg-primary text-white text-sm font-bold tracking-wide w-1/2 text-center">EN</span> ` })}`} </div> </div> </nav> ${renderScript($$result, "B:/DEV/HAREZM_EKOSISTEMI/harezm._web/src/components/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "B:/DEV/HAREZM_EKOSISTEMI/harezm._web/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Footer;
  const { lang = "tr" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<footer class="bg-bg2 text-text-main pt-20 pb-8 px-8 md:px-12 relative overflow-hidden border-t border-border-main"> <div class="max-w-container mx-auto relative z-10"> <!-- Main Grid --> <div class="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16"> <!-- Brand Column --> <div class="md:col-span-4"> <div class="flex items-center mb-6"> <img src="/images/logo/darktheme_logo.svg" alt="Harezm Logo" class="h-8 w-auto object-contain hidden-in-light"> <img src="/images/logo/lighttheme_logo.svg" alt="Harezm Logo" class="h-8 w-auto object-contain hidden-in-dark"> </div> </div> <!-- Quick Links --> <div class="md:col-span-2"> <h4 class="font-sans font-medium text-text-main text-sm uppercase tracking-widest mb-6">${t("footerQuickLinks", lang)}</h4> <ul class="space-y-3"> <li><a class="text-text-70 text-sm hover:text-primary transition-colors font-light"${addAttribute(getLocalePath("/hizmetler", lang), "href")}>${t("footerServices", lang)}</a></li> <li><a class="text-text-70 text-sm hover:text-primary transition-colors font-light"${addAttribute(getLocalePath("/lokalizasyon", lang), "href")}>Roll-out & Lokalizasyon</a></li> <li><a class="text-text-70 text-sm hover:text-primary transition-colors font-light"${addAttribute(getLocalePath("/hakkimizda", lang), "href")}>${t("navAbout", lang)}</a></li> <li><a class="text-text-70 text-sm hover:text-primary transition-colors font-light"${addAttribute(getLocalePath("/iletisim", lang), "href")}>${t("navContact", lang)}</a></li> </ul> </div> <!-- Services --> <div class="md:col-span-3"> <h4 class="font-sans font-medium text-text-main text-sm uppercase tracking-widest mb-6">${lang === "tr" ? "Hizmetler" : "Services"}</h4> <ul class="space-y-3"> <li><a class="text-text-70 text-sm hover:text-primary transition-colors font-light"${addAttribute(getLocalePath("/hizmetler", lang), "href")}>SAP FI/CO & Material Ledger</a></li> <li><a class="text-text-70 text-sm hover:text-primary transition-colors font-light" href="/sap-refx">SAP RE-FX</a></li> <li><a class="text-text-70 text-sm hover:text-primary transition-colors font-light" href="/sap-opentext">SAP & OpenText</a></li> <li><a class="text-text-70 text-sm hover:text-primary transition-colors font-light" href="/sap-checkup">SAP Check-Up</a></li> <li><a class="text-text-70 text-sm hover:text-primary transition-colors font-light" href="/danismanlik">${lang === "tr" ? "Danışmanlık" : "Consulting"}</a></li> </ul> </div> <div class="md:col-span-3"> ${lang === "tr" ? renderTemplate`<p class="text-text-70 text-sm font-light">
Satış ekibine değil, doğrudan çözüm mimarına ulaşırsınız. WhatsApp, Telegram veya LinkedIn üzerinden yazın, hazır teklif değil gerçek analiz alın.
</p>` : renderTemplate`<p class="text-text-70 text-sm font-light">
You reach out directly to the solution architect, not a sales team. Message us on WhatsApp, Telegram, or LinkedIn to get a real analysis rather than a generic proposal.
</p>`} <div class="flex gap-3 mt-4">  <a href="https://wa.me/905332388975" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-xl bg-bg3 border border-border-main flex items-center justify-center text-text-40 hover:bg-[#25D366] hover:text-white transition-colors" title="WhatsApp"> <svg class="w-4 h-4 fill-current text-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"></path></svg> </a>  <a href="https://t.me/+905332388975" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-xl bg-bg3 border border-border-main flex items-center justify-center text-text-40 hover:bg-[#26A5E4] hover:text-white transition-colors" title="Telegram"> <svg class="w-4 h-4 fill-current text-current" viewBox="0 0 24 24"><path d="m20.665 3.717-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z"></path></svg> </a>  <a href="https://www.linkedin.com/company/harezm/" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-xl bg-bg3 border border-border-main flex items-center justify-center text-text-40 hover:bg-[#0077b5] hover:text-white transition-colors" title="LinkedIn"> <svg class="w-4 h-4 fill-current text-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg> </a>  <a href="mailto:info@harezm.com.tr" class="w-10 h-10 rounded-xl bg-bg3 border border-border-main flex items-center justify-center text-text-40 hover:bg-primary hover:text-white transition-colors" title="Email"> ${renderComponent($$result, "Icon", $$Icon, { "name": "icon_09_mail_email", "size": 18 })} </a> </div> </div> </div> <!-- Ecosystem / Brands (Subtle) --> <div class="border-t border-border-main py-6 flex flex-wrap items-center justify-center md:justify-start gap-3 md:gap-5 text-xs text-text-40"> <span class="font-medium text-text-70 tracking-widest uppercase text-[10px]">Harezm Ecosystem</span> <a href="https://www.linkedin.com/showcase/agentandbot/" target="_blank" rel="noopener noreferrer" class="hover:text-primary transition-colors flex items-center gap-1.5 grayscale opacity-70 hover:grayscale-0 hover:opacity-100"> ${renderComponent($$result, "Icon", $$Icon, { "name": "icon_08_chat_message", "size": 14 })} AgentAndBot
</a> <span class="opacity-20 hidden md:inline">•</span> <a${addAttribute(getLocalePath("/urunler", lang), "href")} class="hover:text-primary transition-colors flex items-center gap-1.5 grayscale opacity-70 hover:grayscale-0 hover:opacity-100"> ${renderComponent($$result, "Icon", $$Icon, { "name": "icon_05_settings_gear", "size": 14 })} e-Someting
</a> <span class="opacity-20 hidden md:inline">•</span> <a${addAttribute(getLocalePath("/sap-cash-management", lang), "href")} class="hover:text-primary transition-colors flex items-center gap-1.5 grayscale opacity-70 hover:grayscale-0 hover:opacity-100"> ${renderComponent($$result, "Icon", $$Icon, { "name": "icon_20_lock_security", "size": 14 })} ${lang === "tr" ? "Nakit Yönetimi" : "Cash Management"} </a> <span class="opacity-20 hidden md:inline">•</span> <span class="hover:text-primary transition-colors flex items-center gap-1.5 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 cursor-default"> ${renderComponent($$result, "Icon", $$Icon, { "name": "icon_05_settings_gear", "size": 14 })} ${lang === "tr" ? "SAP Paketleri" : "SAP Packages"} </span> <span class="opacity-20 hidden md:inline">•</span> <span class="hover:text-primary transition-colors flex items-center gap-1.5 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 cursor-default"> ${renderComponent($$result, "Icon", $$Icon, { "name": "icon_05_settings_gear", "size": 14 })} ${lang === "tr" ? "Diğer ERP Entegrasyonları" : "Other ERP Integrations"} </span> </div> <!-- Tuval — Art Exhibition Badge --> <div class="border-t border-border-main py-5 flex flex-wrap items-center justify-center md:justify-between gap-4"> <a href="/tuval" class="flex items-center gap-3 group text-decoration-none"> <img src="/art/innovation.png" alt="" class="w-8 h-8 object-contain opacity-60 group-hover:opacity-100 transition-opacity" style="filter: hue-rotate(280deg) saturate(1.4);"> <div> <span class="text-[10px] font-bold tracking-widest uppercase text-primary block">${lang === "tr" ? "Tuval · Aylık Sergi" : "Tuval · Monthly Exhibition"}</span> <span class="text-xs text-text-40 group-hover:text-text-70 transition-colors">lesstupid · ${lang === "tr" ? "Nisan 2026" : "April 2026"}</span> </div> </a> <span class="text-[10px] text-text-40 italic hidden md:block">${lang === "tr" ? "Her ay farklı bir sanatçı, farklı bir akım." : "A different artist, a different movement, every month."}</span> </div> <!-- Bottom Bar --> <div class="border-t border-border-main pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left"> <span class="text-xs text-text-40">${t("footerCopyright", lang)}</span> <div class="flex flex-wrap justify-center md:justify-end items-center gap-4 md:gap-8 text-xs text-text-40"> ${renderComponent($$result, "ThemeToggle", $$ThemeToggle, {})} <a class="hover:text-primary transition-colors"${addAttribute(getLocalePath("/kvkk", lang), "href")}>${t("footerKvkk", lang)}</a> <a class="hover:text-primary transition-colors"${addAttribute(getLocalePath("/gizlilik-politikasi", lang), "href")}>${t("footerPrivacy", lang)}</a> <a class="hover:text-primary transition-colors"${addAttribute(getLocalePath("/cerez-politikasi", lang), "href")}>${t("footerCookies", lang)}</a> </div> </div> </div> </footer>`;
}, "B:/DEV/HAREZM_EKOSISTEMI/harezm._web/src/components/Footer.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title,
    lang = "tr",
    description = lang === "tr" ? "Harezm Technology — SAP Finansal Danışmanlık, IFRS, Türkiye Lokalizasyonu ve S/4HANA Dönüşüm Uzmanlığı | İstanbul" : "Harezm Technology — SAP Financial Consulting, IFRS, Turkey Localization and S/4HANA Transformation Expertise | Istanbul",
    image = "/images/logo/darktheme_logo.svg"
  } = Astro2.props;
  const normalizedTitle = title.replace(/\s*\|\s*Harezm Technology\s*$/i, "").replace(/\s*\|\s*Harezm\s*$/i, "").trim();
  const siteOrigin = Astro2.site?.toString() || "https://harezm.com";
  const canonicalURL = new URL(Astro2.url.pathname, siteOrigin);
  const normalizedImage = new URL(image, canonicalURL.origin).href;
  const currentPath = Astro2.url.pathname;
  const trToEnPathMap = {
    "/": "/en/",
    "/hakkimizda": "/en/about",
    "/iletisim": "/en/contact",
    "/cerez-politikasi": "/en/cookie-policy",
    "/gizlilik-politikasi": "/en/privacy-policy",
    "/hizmetler": "/en/services",
    "/danismanlik": "/en/consulting",
    "/urunler": "/en/products",
    "/insight": "/en/insight",
    "/lokalizasyon": "/en/rollout"
  };
  const enToTrPathMap = {
    "/en/": "/",
    "/en/about": "/hakkimizda",
    "/en/contact": "/iletisim",
    "/en/cookie-policy": "/cerez-politikasi",
    "/en/privacy-policy": "/gizlilik-politikasi",
    "/en/services": "/hizmetler",
    "/en/consulting": "/danismanlik",
    "/en/products": "/urunler",
    "/en/insight": "/insight",
    "/en/rollout": "/lokalizasyon"
  };
  const trAltPath = currentPath.startsWith("/en/") ? enToTrPathMap[currentPath] || currentPath.replace(/^\/en/, "") || "/" : currentPath;
  const enAltPath = currentPath.startsWith("/en/") ? currentPath : trToEnPathMap[currentPath] || `/en${currentPath === "/" ? "/" : currentPath}`;
  const trAltUrl = new URL(trAltPath, canonicalURL.origin).href;
  const enAltUrl = new URL(enAltPath, canonicalURL.origin).href;
  return renderTemplate(_a || (_a = __template(['<html class="scroll-smooth"', '> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>', ' | Harezm Technology</title><meta name="description"', '><!-- SEO / Canonical --><link rel="canonical"', '><link rel="alternate" hreflang="tr"', '><link rel="alternate" hreflang="en"', '><link rel="alternate" hreflang="x-default" href="https://harezm.com/"><meta name="robots" content="index, follow"><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"', '><meta property="og:title"', '><meta property="og:description"', '><!-- Ensure absolute URL for social images --><meta property="og:image"', '><meta property="og:image:alt"', '><meta property="og:locale"', '><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"', '><meta property="twitter:title"', '><meta property="twitter:description"', '><meta property="twitter:image"', '><!-- JSON-LD Structure for AI & Search Engines --><script type="application/ld+json">', `<\/script><!-- Theme: track OS preference dynamically --><script>
      (function() {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        
        function applyTheme() {
          const stored = localStorage.getItem('harezm-theme');
          const preferred = mediaQuery.matches ? 'dark' : 'light';
          document.documentElement.setAttribute('data-theme', stored || preferred);
        }
        
        applyTheme();

        // If user changes Windows setting, instantly apply it and override manual toggle
        mediaQuery.addEventListener('change', (e) => {
          localStorage.removeItem('harezm-theme');
          document.documentElement.setAttribute('data-theme', e.matches ? 'dark' : 'light');
        });
      })();
    <\/script><!-- Fonts --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500&family=DM+Serif+Display:ital@0;1&display=swap" rel="stylesheet">`, '</head> <body class="bg-bg text-text-main font-sans antialiased selection:bg-primary/20 selection:text-primary"> ', " <main> ", " </main> ", "</body></html>"])), addAttribute(lang, "lang"), normalizedTitle, addAttribute(description, "content"), addAttribute(canonicalURL.href, "href"), addAttribute(trAltUrl, "href"), addAttribute(enAltUrl, "href"), addAttribute(canonicalURL.href, "content"), addAttribute(`${normalizedTitle} | Harezm Technology`, "content"), addAttribute(description, "content"), addAttribute(normalizedImage, "content"), addAttribute(`${normalizedTitle} | Harezm Technology`, "content"), addAttribute(lang === "tr" ? "tr_TR" : "en_US", "content"), addAttribute(canonicalURL.href, "content"), addAttribute(`${normalizedTitle} | Harezm Technology`, "content"), addAttribute(description, "content"), addAttribute(normalizedImage, "content"), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Harezm Technology",
    "url": canonicalURL.origin,
    "logo": normalizedImage,
    "description": description,
    "sameAs": [
      "https://www.linkedin.com/company/harezm/"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "info@harezm.com.tr",
      "contactType": "customer service",
      "availableLanguage": ["Turkish", "English"]
    }
  })), renderHead(), renderComponent($$result, "Header", $$Header, { "lang": lang }), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, { "lang": lang }));
}, "B:/DEV/HAREZM_EKOSISTEMI/harezm._web/src/layouts/Layout.astro", void 0);

export { $$Layout as $, $$Icon as a, t };
