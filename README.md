# Harezm Kurumsal Web Sitesi

Bu proje, Harezm markasının kurumsal kimliğini yansıtan, yüksek performanslı ve modern bir web uygulamasıdır. **Astro JS** ve **Tailwind CSS** kullanılarak statik site üretici (SSG - Static Site Generation) mantığıyla oluşturulmuştur. Harezm'in güncellenmiş "Core Identity v2" yönergelerine uygun şekilde tasarlanmış, premium "Deep Plum & Electric Turquoise" tabanlı yapay zeka ve finans mimarisi temasına sahiptir.

## Teknolojiler
- **Astro (v5)**: Sıfır JS konsepti ile hız odalı static rendering.
- **Tailwind CSS (v4)**: Utility tabanlı, doğrudan HTML içinde hızlı tasarım süreçleri.
- **TypeScript**: Hata yönetimini kolaylaştıran modern standart komutlar.

## Geliştirici Kılavuzu

Proje `b:\DEV\harezm` dizinine kurulmuştur.

### Sistem Gereksinimleri
- Node.js (v18.17.1 veya daha yeni sürüm)
- npm (Node Package Manager)

### Kurulum

Projeyi klonladıktan veya indirdikten sonra bağımlılıkları yükleyin:
```bash
npm install
```

### Geliştirme Sunucusu

Projenin yerel sunucusunda çalışmasını sağlamak ve tasarımsal değişiklikleri canlı olarak görmek için:
```bash
npm run dev
```
Uygulama tarayıcınızda `http://localhost:4321` adresinde çalışacaktır.

### Yayına Alma (Build)

Projeyi tamamladığınızda canlı ortama göndereceğiniz HTML, CSS ve küçültülmüş JS dosyalarını oluşturmak için:
```bash
npm run build
```
Oluşturulan statik dosyalar `dist/` klasörü altına çıkartılır. Bu dosyaları cPanel, Vercel, Netlify, Github Pages veya standart Nginx/Apache sunucularında kolayca host edebilirsiniz.

> **Not:** Projede kullanılan **Tailwind CSS v4 Vite Eklentisi** ile Astro tip denetleyicisi (`npx astro check`) arasında bilinen bir uyuşmazlık bulunmaktadır. Terminalde veya VS Code'da `.astro` dosyaları için görülen söz dizimi hataları (örn. `ts(1003)`) gerçeği yansıtmaz ve projenin `build` almasını veya çalışmasını engellemez.

## Proje Dizini Mimarisi
```text
/
├── public/                 # Statik resim, favicon ve font vb. dışarıya doğrudan yansıyan öğeler.
├── src/                    # Uygulama kaynak kodları
│   ├── components/         # Tekrar kullanılabilen bağımsız bileşenler (Header.astro, Footer.astro)
│   ├── layouts/            # Ortak sayfa şablonları (Layout.astro)
│   └── pages/              # Astro sayfaları tabanlı URL map (index.astro, hizmetler.astro vb.)
├── astro.config.mjs        # Astro yapılandırma dosyası
├── tailwind.config.mjs     # Harezm renklerini ve arayüzünü tanımlayan CSS mimari tablosu
└── package.json            # Projenin paket kütüphaneleri
```
