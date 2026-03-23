# Harezm Prestij Dönüşüm Stratejisi — v2 (Implementation Plan)

Bu doküman, `harezm_strateji_v2.md` dokümanındaki yönlendirmeleri mevcut Harezm web sitesine (Astro altyapısı) uygulamak için hazırlanmıştır. Kullanıcının "Architecture & Specs" (Phase 1) kuralına istinaden oluşturulmuştur.

## User Review Required
> [!IMPORTANT]
> Lütfen bu planın adımlarını onaylayın. Onayınızın ardından kodlama aşamasına geçilecek ve `task.md` üzerinden ilerlenecektir. Olası İngilizce sayfa (`/en/...`) çevirileri de bu kapsama dahil edilecektir.

## Proposed Changes

Aşağıdaki değişiklikler bileşen veya sayfa bazında gruplandırılmıştır:

### 1. Hızlı Kazanımlar (Immediate Fixes)
- **Astro ve Tip Denetimi Güncellemesi:** Astro ve Tailwind v4 uyumsuzluğundan kaynaklanan 1705 syntax hatasını (`npx astro check`) gidermek için `astro`, `@astrojs/check` ve `typescript` bağımlılıklarının en son sürümlerine güncellenmesi.
- **Footer Düzeltmeleri:** Metin kırılması sorununu ortadan kaldıran CSS/flex düzenlemeleri.
- **İngilizce Sayfa 404 Çözümleri:** `/en/` route altındaki eksik sayfaların tespit edilip oluşturulması (veya eksik i18n link yönlendirmelerinin çözülmesi).
- **Sayfa Sayaçları:** `hizmetler.astro` içerisindeki "Boş Sayaç" component verilerinin mantıklı benchmark'lar ile doldurulması.
- **Türkçeleştirme:** Hero section'daki "49% Faster Closing", "100+ Projects" gibi kutucukların Türkçe karşılıklarıyla (`%49 Daha Hızlı Kapanış`, `100+ Proje` vb.) güncellenmesi (Sadece tr route'da).
- **Hizmet Sayfalarına Ölçülebilir Sonuçlar (Measurables):** `s4hana.astro`, `sap-trm.astro` gibi var olan sayfalara statik/ölçülebilir iyileştirme yüzdeleri eklenmesi.

### 2. Ana Sayfa (`src/pages/index.astro`)
- **Hero Sloganı:** "SAP'ı tasarlarız. Türkiye'ye entegre ederiz. Dünyaya açarız, Yapay zeka ile otomatize ederiz." olarak revize edilmesi.
- **Ürün Genişlik Haritası:** Hero altında 3 kolonlu (SAP Danışmanlığı, e-Dönüşüm & Otomasyon, AI & Strateji) bir snippet bölümü oluşturulması.
- **TMS 29 Vurgusu:** Enflasyon Muhasebesi (TMS 29) konusunda uyarı/farkındalık sağlayan dikkat çekici bir kart (badge) eklenmesi.
- **Finrota Rakamları:** "29 Türk bankasıyla entegre", "Banka mutabakat otomasyonu: %94" verilerini gösteren özet panelleri.

### 3. Hizmetler Sayfası (`src/pages/hizmetler.astro`)
- Var olan 8 hizmenin grid yapısını, **4 ana başlık** altında alt kırılımlara ayıracak biçimde yeniden yapılandırmak:
  1. SAP Platformu (FI/CO, RE-FX, TRM, Cash, vb.)
  2. e-Dönüşüm & Dijitalleştirme (e-Something) (e-Fatura, e-Defter, e-Mutabakat vb.)
  3. Finansal Otomasyon & Banka Entegrasyonu (Online DBS, POS Raporlama, TMS 29 vb.)
  4. AI & Strateji (SAP Joule, Süreç Otomasyonu, AgentandBot)

### 4. Hakkımızda & Lokalizasyon Sayfaları
- **`src/pages/hakkimizda.astro`**: Ekip listesini genişletecek, her uzmanın SAP sertifikasyonu ve geçmiş tecrübe/proje yelpazesini (uzmanlık alanlarını) yansıtan bir timeline/ekip grid'i eklemek. Ürün ekosistemindeki gizli gücü (Finrota iş ortaklığı benzeri) ima eden metinler eklemek.
- **`src/pages/lokalizasyon.astro`**: Roll-out hizmetinin kapsamına "Online DBS ve Banka Entegrasyonu, aynı proje içerisinde teslim edilir" mesajının eklenmesi. Orta Doğu, Avrupa ülkelerini ismen zikrederek lokalizasyon gücünün altının çizilmesi.

### 5. Yeni Sayfaların Eklenmesi
`src/pages/` ve `src/pages/en/` dizinlerine aşağıdaki yeni Astro sayfaları tasarlanıp eklenecektir:
- `enflasyon-muhasebesi.astro` (Enflasyon Muhasebesi TMS 29)
- `online-dbs.astro` (Online DBS & Banka Entegrasyonu)
- `sap-joule-ai.astro` (SAP Joule ve AI Ajanları)
- `sap-finansal-konsolidasyon.astro`
- `sap-aa.astro` (Sabit Kıymet Muhasebesi)
- `sap-egitimleri.astro`
- `kdv-iade-paketi.astro`
- `e-ticaret.astro`

### 6. e-Something ve AgentAndBot Landing Yönlendirmeleri
Yeni marka konumlandırması doğrultusunda, sitede uygun menü linkleri yaratılarak ("e-Çözümler", "AI & Otomasyon") kullanıcının doğrudan bu çözümleri keşfedebileceği landing-page blokları (veya ayrı sayfalar) hazırlanması.

## Verification Plan

### Automated / UI Tests
- `npm run dev` ile sitenin tüm yeni sayfaları local'de görüntülenecektir.
- UI responsive kontrolleri yapılacak, footer düzeltmelerinin mobilde de geçerli olduğuna bakılacaktır.
- İngilizce rotalardaki (`/en/...`) bütün yeni ve eski linklerin `/en/404` atmadığı doğrulanacaktır.
- Tarayıcı aracı (Browser Subagent) ile sayfalar dolaşılacak ve "Walkthrough" artefaktına ekran görüntüleri ve/veya video kanıtları eklenecektir.

### Manual Verification
- Kullanıcının, kodlama bittikten sonra yerelde siteyi kendi tarayacısında `npm run start` veya `dev` ile kontrol etmesi, yeni metinleri ve tasarımlarını incelemesi.
