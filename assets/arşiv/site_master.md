HAREZM
Technology A.Ş.

Site İçerik & Yapı Dokümanı
Bu doküman Harezm web sitesinin tüm sayfa içeriklerini, bölüm yapılarını, mesajlaşma tonunu ve Astro implementasyon kılavuzunu kapsar.
Son güncelleme: 2025 · Gizlidir
 
01. Stratejik Çerçeve & Konumlanma
Kimiz
Harezm, kurumsal finansal sistemler alanında uzmanlaşmış bir SAP danışmanlık ve teknoloji şirketidir. Yalnızca sistem kurmuyoruz — şirketlerin finansal kontrol mimarisini tasarlıyoruz.
SAP danışmanlığını finansal perspektiften ele alıyoruz: her projeye teknik değil, iş ve finans gözüyle bakıyor; riskleri önceden tespit ediyor, maliyetleri baştan kontrol altına alıyoruz.
Konumlanma Cümlesi
Harezm, şirketlerin finansal gerçeğini inşa eder — likidite, risk, uyum ve karar mekanizması tek bir mimari altında.
Neden Farklıyız
Büyük danışmanlık firmalarının aksine, her projeye kıdemli uzmanlarla giriyoruz. İki kişilik çekirdek kadromuz, her konuya direkt sahip çıkar — aracı katman yoktur, dolayısıyla hız ve kalite doğrudan müşteriye yansır.
Bu dürüst bir özellik, çünkü müşteri gerçekte kimi çalıştırdığını bilir.
Ton & Yazı Dili Kuralları
Kısa & Net	Uzun açıklamalar güvensizlik hissi verir. Her cümle bağımsız durabilmeli.
Outcome-First	'Ne yapıyoruz' değil, 'müşteri ne kazanıyor' diliyle yaz.
Teknik ama erişilebilir	Jargon kullan ama tanımla. CFO da CTO da anlayabilmeli.
Soru sordurma	Okuyucu 'bu bizi anlıyor' hissedebilmeli.
Otorite, kibir değil	Açıklamak zorunda değilsin — ama her kelime yerinde olmalı.
 
02. Renk & Tasarım Sistemi
Renk Paleti
Deep Plum	#580F41 — Ana kimlik rengi. Butonlar, başlık vurguları, border accent.
Deep Black	#0B0B0D — Arka plan temeli. Asla saf siyah kullanma.
Graphite	#1A1C1F — Kart ve surface arka planı.
Electric Turquoise	#40E0D0 — AI ve teknoloji katmanı için mikro vurgu. Çok az kullan (%3–5).
Soft White	#F5F7FA — Primary metin.
Metal Silver	#C9CCD1 — Secondary metin ve border.
Kullanım Oranı
–	85% — Koyu arka plan (#0B0B0D / #1A1C1F)
–	10% — Plum (#580F41) — butonlar, vurgular, başlık aksanları
–	5% — Turquoise (#40E0D0) — yalnızca teknoloji/AI referanslarında
Tipografi
Display / Heading	DM Serif Display — italic varyantı hero başlıklarında kullan
Body / UI	DM Sans — weight 300 (light body), 400 (normal), 500 (UI/buton)
H1 Hero	58–64px · line-height 1.08 · letter-spacing -0.02em
H2 Section	44–48px · line-height 1.1
H3 Subsection	22–24px
Body	15–17px · line-height 1.65 · weight 300
Label/Badge	11–12px · uppercase · letter-spacing 0.08em · color: white40
Spacing (8px grid)
xs: 8px · sm: 16px · md: 24px · lg: 32px · xl: 48px · 2xl: 64px · 3xl: 96px
Grid
–	Max-width: 1160px · margin: auto · padding: 0 32px
–	12 kolon · gap: 24px
–	Hero: 6/6 · Content: 7/5 · Cards: 4/4/4 veya 3/3/3/3
 
03. Site Yapısı & Navigasyon
Sayfa Haritası
/ (Ana Sayfa)	Hero · Trust Signals · Hizmetler · Statement · e-Solutions · CTO · Sektörler · İletişim
/hizmetler	SAP FI/CO · TRM · Uyum · Bulut · AI · Roll-out (her biri alt sayfa)
/urunler	e-Tahsilat · Banka Hub · e-DBS · e-Ödeme · e-Devlet paketi
/sektorler	İlaç · Savunma · FMCG · Enerji · Otomotiv
/teknoloji	SAP S/4HANA · BTP · Joule · Signavio · AI Agents
/hakkimizda	Felsefe · Yaklaşım · İletişim
/iletisim	Form · Harita · İletişim bilgileri
Navigasyon Yapısı
–	Navbar: Logo (sol) · Linkler (orta) · CTA Buton (sağ)
–	Scroll'da: backdrop-blur + %92 opacity background
–	Mobile: hamburger menu · slide-in drawer
–	CTA butonu: 'İletişime Geçin' — plum background
 
04. Ana Sayfa — Tam İçerik
HERO SECTION
Hero — Finansal Kontrol Mimarisi


Badge
SAP Certified Partner · Istanbul
Ana Başlık (H1)
Finansal Kontrol Mimarisi
(Not: 'Mimarisi' kelimesi italic ve plum renkte — vurgu buradadır)
Alt Başlık
Sistemler kurmuyoruz. Şirketinizin finansal gerçeğini tasarlıyoruz — likidite, risk, uyum ve karar mekanizması tek bir mimari altında.
CTA Butonları
–	Primary (plum): Projeyi Başlat
–	Ghost: Referansları Gör →
Sağ Panel — Trust Signals
Metrik kartlar yerine sektör referansları ve proje türleri göster. Rakam uydurmak güveni zedeler.
Panel Başlığı	Çalıştığımız Sektörler
Pill'ler	İlaç / Savunma / FMCG / Enerji / Otomotiv
Alt Etiket	SAP Certified Partner
Opsiyonel	Son proje örneği — sektör + modül (örn: İlaç sektörü · SAP TRM implementasyonu)

HIZMETLER SECTION
Hizmetler — 6 Kart Grid
Finansal sistemler mühendislik gerektirir

Section Başlığı
Finansal sistemler mühendislik gerektirir
SAP danışmanlığının ötesinde: iş süreçlerinizin kalbini tasarlıyor, veri egemenliğinizi koruyuyor ve her finansal hareketi kontrol altında tutuyoruz.
Kart 1 — SAP Finansal Çekirdek
New GL, Paralel Muhasebe, S/4HANA dönüşümü ve çok şirketli konsolidasyon. Hassasiyetle tasarlanmış — yaklaşıkla değil.
Modüller: SAP FI · SAP CO · S/4HANA · IFRS Raporlama · Hızlı Kapanış (AFC)
Kart 2 — Hazine & Risk Yönetimi
Gerçek zamanlı nakit pozisyonu, likidite tahmini, döviz riski ve türev araç yönetimi. Sabah 7'de kasanızın durumunu bilirsiniz.
Modüller: SAP TRM · Cash Management · Banka Entegrasyon · Findeks
Kart 3 — Uyum & Vergi Mimarisi
IFRS 16, TMS 29 Enflasyon Muhasebesi, KVKK ve tam e-Dönüşüm paketi. Uyum yönetilmez — sisteme gömülür.
Modüller: IFRS 16 · TMS 29 · e-Fatura · e-Defter · DRC · Peppol
Kart 4 — Bulut & Platform
SAP BTP, Signavio, S/4HANA Cloud ve Joule entegrasyonları. Platform kurmak değil — ekosistem inşa etmek.
Modüller: SAP BTP · Integration Suite · Signavio · SAP Build · Joule
Kart 5 — AI & Otomasyon
Finansal verileri analiz eden AI ajanlar, akıllı OCR ve RPA. Ekibiniz çevrimdışıyken de süreçler çalışır.
Modüller: AI Agents · OCR/Document AI · RPA · Predictive Cash Flow
Kart 6 — Global Roll-out & AMS
Çoklu ülke yerelleştirme, carve-out yönetimi ve SLA bazlı 7/24 destek. Sınırları aşarken yapıyı bozmayın.
Modüller: Multi-Country · Carve-out · AMS · IK Outsource · T-Flow

STATEMENT SECTION
Felsefe — Merkez Alıntı


CFO kontrolü sağlar. CTO sistemi kurar. Harezm ikisini birleştirir — finansal mimari ve teknoloji aynı anda.
Byline: Control + Architecture = Power

E-SOLUTIONS SECTION
SAP İçine Gömülü Finansal Teknoloji


Section Başlığı
SAP içine gömülü finansal teknoloji
Dış sistem bağımlılığı ortadan kalkar. Tüm finansal işlemler doğrudan SAP altyapısı üzerinden — anlık muhasebeleşme ile.
Ürün 1 — SAP e-Tahsilat
Bayi ve müşterilerden SAP üzerinden anlık tahsilat ve otomatik muhasebeleşme. Harici ödeme sistemi gerekmez.
Ürün 2 — Banka Entegrasyon Hub
Tüm banka hesaplarının tek panelden gerçek zamanlı nakit takibi. Her hareket otomatik eşleşir.
Ürün 3 — SAP e-DBS
Banka altyapısıyla doğrudan borçlandırma ve otomatik tahsilat yönetimi. Manuel takip sona erer.
Ürün 4 — e-Ödeme (TÖS)
SAP onay mekanizmalarıyla toplu para transferi — hatasız, denetlenebilir, tam otomatik.
Ürün 5 — e-Devlet Paketi
e-Fatura, e-Arşiv, e-Defter, e-İrsaliye ve e-Müstahsil — Türkiye mevzuatına tam uyumlu, SAP içinden yönetilen tek paket.

CTO YOL HARITASI
Dağınık Sistemlerden Birleşik Mimariye


Giriş Metni
Harezm, şirketinizin dijital sinir sistemini tasarlar. Sistemlere bağımlı değilsiniz — sistemler size bağımlıdır.
5 Adım Listesi (her biri bir satır)
API-First Mimari	Tüm sistemler API ile konuşur. Vendor bağımlılığı sona erer. Gelecekteki her entegrasyon daha hızlı kurulur.
SAP BTP & Entegrasyon	SAP ve SAP dışı sistemlerin merkezi orkestrasyonu. Veri çoğaltması ortadan kalkar.
Data Sovereignty	Veriniz okyanus ötesine gitmez. Kontrol sizde kalır. KVKK ve GDPR uyumu baştan mimariye gömülüdür.
AI-Ready Pipeline	Machine learning için hazır, temiz ve standartlaştırılmış veri mimarisi.
Zero Trust Security	KVKK, GDPR ve rol bazlı erişim kontrolü. Denetim izi eksiksiz.

SEKTÖRLER
Finansal Hatanın Opsiyonel Olmadığı Sektörler


01 · İlaç & Sağlık	Sıkı regülasyon, çok katmanlı maliyet yapısı ve uluslararası raporlama gereksinimleri.
02 · Savunma & Havacılık	Proje muhasebesi, maliyet kontrolü ve gizlilik gerektiren finansal mimariler.
03 · FMCG & Perakende	Yüksek işlem hacmi, gerçek zamanlı mutabakat ve çok kanallı tahsilat yönetimi.
04 · Enerji & Utilities	Çoklu para birimi, emtia riski ve uzun vadeli sözleşme muhasebesi.
05 · Otomotiv & OEM	Tedarik zinciri finansmanı, dealer network yönetimi ve global roll-out.

İLETIŞIM SECTION
Sisteme Girin


Başlık
Sisteme girin
Alt Metin
Yaklaşım değil, kontrol isteyen şirketler için. İlk görüşmede mevcut sistemlerinizi analiz ediyoruz.
CTA
Görüşme Talep Et — Primary buton (plum)
İletişim Bilgileri
–	E-posta: info@harezm.com
–	Web: www.harezm.com.tr
–	Konum: Istanbul, Türkiye — Global Operasyonlar
–	Uzmanlık: SAP FI · CO · TRM · BTP · AI & Otomasyon
 
05. Diğer Sayfalar — İçerik
Hakkımızda
Başlık
Danışmanlık değil. Mimari.
Ana Metin
Harezm, basit bir fikir üzerine kuruldu: finansal sistemler insan çabasına bağımlı olmamalıdır.
Süreçleri optimize etmiyoruz — yeniden tanımlıyoruz. Karmaşık yapıları baskı altında, ölçekte ve sürekli değişen regülasyon ortamında çalışmaya devam edecek şekilde tasarlıyoruz.
Yaklaşım
Her projeye kıdemli uzmanlarla giriyoruz. Aracı katman yok. Siz ne söylüyorsa onu duyan, doğrudan çözüm üreten bir ekiple çalışıyorsunuz.
Felsefe
Verinizi ihraç etmiyoruz. Koruyoruz.
'Algoritmalarımız Harezm'den doğuyor, nehirlerimiz tüm dünyaya akıyor.'

Hizmetler Alt Sayfaları — Şablon
Her hizmet sayfası şu yapıyı takip etmeli:
–	Hero: Hizmet adı + tek cümle tanım
–	Problem: Müşteri şu an ne yaşıyor?
–	Çözüm: Harezm ne yapıyor?
–	Sonuç: Müşteri ne kazanıyor?
–	Modüller: Teknik detaylar (tag cloud)
–	CTA: Konuşalım

Ürünler Sayfası
Başlık
SAP içinde çalışan finansal altyapı.
Alt Metin
Her ürünümüz SAP ekosisteminin içine gömülüdür. Ek sistem kurulmaz, ek entegrasyon gerekmez. Kullandığınız SAP lisansının gücü katlanarak artar.

Teknoloji Sayfası
Başlık
Kurumsal yazılım yeniden yazılıyor.
Mesaj
Şirketler artık yazılım satın almıyor. Platform ve AI ekosistemi kuruyor. Harezm, bu ekosistemi sizin için tasarlar ve işler hale getirir.
SAP S/4HANA Cloud	Modüler ve ölçeklenebilir bulut ERP — RISE with SAP & GROW with SAP
SAP Joule	İş süreçlerini anlayan üretken yapay zeka asistanı
SAP BTP	Uygulama geliştirme, entegrasyon ve veri analitiğinin merkezi
SAP Signavio	Süreç tasarımı, madenciliği ve sürekli iyileştirme
SAP Build	Düşük kodlu inovasyon ve süreç otomasyonu araçları
AI Agents	Finansal verileri analiz eden, karar destek raporları hazırlayan otonom sistemler
 
06. Astro Implementasyon Kılavuzu
Proje Yapısı
src/   components/     layout/      → Navbar.astro, Footer.astro     sections/    → Hero.astro, Services.astro, Statement.astro                    Products.astro, CTO.astro, Industries.astro                    Contact.astro     ui/          → Button.astro, Badge.astro, Card.astro                    ServiceCard.astro, ProductCard.astro   layouts/       → BaseLayout.astro (head, fonts, CSS vars)   pages/     index.astro  → Ana sayfa     hizmetler/   → index.astro + [slug].astro     urunler.astro     hakkimizda.astro     iletisim.astro   styles/     global.css   → CSS custom properties + reset     tokens.css   → Spacing, color, typography tokens public/   fonts/         → DM Serif Display + DM Sans (self-host)
CSS Token Sistemi (global.css)
:root {   --bg:        #08080A;   --bg2:       #0F0E12;   --bg3:       #1A1C1F;   --plum:      #580F41;   --plum-h:    #7A1559;  /* hover */   --teal:      #40E0D0;   --text:      #F5F7FA;   --text-70:   rgba(245,247,250,0.70);   --text-40:   rgba(245,247,250,0.40);   --border:    rgba(201,204,209,0.12);   --border-2:  rgba(201,204,209,0.22);  --sp-xs:  8px;  --sp-sm: 16px; --sp-md: 24px;   --sp-lg: 32px;  --sp-xl: 48px; --sp-2xl: 64px;   --sp-3xl: 96px;   --max-w: 1160px; }
Temel Bileşenler — Implementasyon Notları
BaseLayout.astro
–	+ DM Sans yükle (display=swap)
–	Meta: title, description, og:image, canonical — her sayfa için override edilebilir
–	Slot yapısı: <Navbar /> · <slot /> · <Footer />
–	Body: background: var(--bg); color: var(--text); font-family: var(--sans);
Navbar.astro
–	position: sticky; top: 0; z-index: 100;
–	Scroll'da JS ile .scrolled class ekle → backdrop-filter: blur(12px)
–	Logo: font-family: var(--serif); 'Harezm' + turquoise nokta
–	Mobile: @media (max-width: 768px) → hamburger + aside drawer
Hero.astro
–	2-kolon grid: sol içerik (7/12) + sağ panel (5/12)
–	H1: font-family: var(--serif); font-size clamp(42px, 5vw, 64px);
–	Italic+Plum: <em> tagı ile — CSS'de em { color: var(--teal); font-style: italic; }
–	Badge: uppercase + letter-spacing + ince border
–	Sağ panel: sektör pill'leri — flexbox wrap + border + padding
–	Arka plan: subtle radial gradient — center'da çok hafif plum tonu
ServiceCard.astro
–	Props: icon (SVG string), title, description, tags (string[])
–	Grid: 3 kolon desktop · 2 tablet · 1 mobile
–	Hover: background: var(--bg2) — transition: background 0.2s ease
–	Icon: 36x36px border box içinde — stroke: var(--teal)
–	Tags: font-size 11px · border: 0.5px · color: var(--text-40)
Button.astro
–	Props: variant ('primary' | 'ghost'), href?, onClick?
–	Primary: background: var(--plum); hover: var(--plum-h)
–	Ghost: background: transparent; border: 0.5px solid var(--border-2)
–	Geçiş: transition: all 0.2s ease; — glow veya shadow yok
İçerik Yönetimi
–	Basit metin değişiklikleri için: Astro'nun .astro component'larında direkt hardcode
–	Çok sayfalı hizmet içeriği için: src/content/hizmetler/*.md — Astro Content Collections
–	Referanslar/projeler için: src/content/projeler/*.json
Animasyon Stratejisi
Kural: Her animasyon bir amaca hizmet etmeli. Dekoratif hareket yasak.
Sayfa Yükleme	Fade-in + translateY(20px) → 0 · staggered (hero önce, sonra sırayla)
Scroll Reveal	Intersection Observer ile .visible class ekle → opacity + translateY
Hover	background, border-color, color geçişleri — 0.2s ease yeterli
Yok	Rotate, scale (buton dışında), bounce, glow — bunlar yasak
CSS transition tercihi: JS kütüphanesinden önce CSS dene. Performans ve bakım daha kolay.
Performans Kuralları
–	Fontları self-host et — Google Fonts 3. parti cookie riski
–	SVG ikonları inline kullan — icon font veya harici sprite yok
–	Görseller: WebP format · loading='lazy' · srcset ile responsive
–	Astro'nun varsayılan static output'u kullan — client-side JS minimize et
–	Lighthouse hedefi: Performance 95+ · Accessibility 100 · SEO 100
 
07. SEO & Meta Kılavuzu
Title & Description Şablonları
Ana Sayfa	Harezm Technology — SAP Danışmanlık & Finansal Mimari | Istanbul
Hizmetler	SAP Finansal Çekirdek Hizmetleri — S/4HANA, FI/CO, IFRS | Harezm
Ürünler	SAP e-Tahsilat, Banka Entegrasyon, e-DBS Çözümleri | Harezm
Hakkımızda	Harezm Technology — Finansal Kontrol Mimarisi, Istanbul
İletişim	İletişim | Harezm Technology SAP Danışmanlık
Description max 155 karakter. Her sayfada benzersiz.
Anahtar Kelimeler (Birincil)
–	SAP danışmanlık Istanbul
–	SAP S/4HANA implementasyon
–	SAP FI CO danışmanlık
–	Finansal sistemler danışmanlık
–	SAP IFRS 16 TMS 29
–	SAP e-fatura e-dönüşüm
Anahtar Kelimeler (İkincil)
–	SAP TRM hazine yönetimi
–	SAP BTP danışmanlık
–	AI otomasyon SAP
–	Enflasyon muhasebesi SAP
–	Global SAP roll-out
Yapısal Veri (Schema.org)
–	Organization schema — ana sayfa
–	Service schema — her hizmet sayfası
–	BreadcrumbList — tüm alt sayfalar
–	FAQPage — SSS varsa

— Son —
Harezm Technology A.Ş. · info@harezm.com · www.harezm.com.tr
"Algoritmalarımız Harezm'den doğuyor, nehirlerimiz tüm dünyaya akıyor."
