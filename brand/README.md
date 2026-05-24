# 🎨 Harezm Ekosistemi Tasarım Sistemi ve Otomasyon Rehberi

Bu dizin, Harezm Ekosistemi bünyesindeki tüm web siteleri, portallar ve arka plan uygulamalarının (Astro ve Elixir/Phoenix) görsel kimliğini, stil token'larını ve ikon kütüphanesini tek bir merkezden yöneten **Tasarım Sistemi Çekirdeği**'dir.

---

## 🏗️ Tek Kaynak Mimarisi (Single Source of Truth)

Tüm platformların tasarımı ve görsel ayarları `brand/manifest.toml` dosyası üzerinden yönetilir. 
Bu dosya güncellendiğinde, geliştirilen otomasyon betikleri sayesinde ekosistemdeki **tüm projeler saniyeler içinde anında ve hatasız olarak senkronize olur.**

### Desteklenen Çıktılar:
- **Astro Siteleri için:** Google Fonts @import'ları ve CSS Custom Properties içeren `tokens.css`
- **Elixir/Phoenix Backend için:** CSS Custom Properties içeren `tokens.css` ve modül öznitelikleri barındıran `tokens.ex`
- **Tasarım / Figma / 3. Parti Entegrasyonlar için:** `tokens.json`

---

## ⚙️ Otomasyon ve Dağıtım Betikleri

Tasarım kararlarınızı ekosisteme dağıtmak için aşağıdaki betikleri kullanabilirsiniz. Tüm betikler proje kök dizininden (`b:\DEV\HAREZM_EKOSISTEMI`) çalıştırılmalıdır:

### 1. Tasarım Token'larının Üretilmesi ve Dağıtılması
Renkleri, yazı tiplerini, yuvarlaklık (radius) ve boşluk kurallarını derleyip tüm projelere kopyalamak için:
```bash
node brand/generate_tokens.mjs
```

### 2. İkonların Rebranding ve Dağıtım Süreci
AI üretimli SVG ikonları markalara ve platformlara göre akıllıca filtreleyip dağıtmak için:
```bash
node brand/distribute_icons.mjs
```

---

## 🚀 Yeni Proje Ekleme Kılavuzu (Sıfır Kod Ölçekleme)

Ekosisteme yeni bir Astro sitesi veya Phoenix uygulaması eklendiğinde **hiçbir otomasyon kodunu değiştirmenize gerek yoktur.** Tek yapmanız gereken, `brand/manifest.toml` dosyasının en sonundaki `[projects]` bölümüne yeni projeyi kaydetmektir:

### A. Yeni Bir Astro Sitesi Kaydetmek:
```toml
[projects.yeni_finans_portali]
name = "yeni-finans"
path = "finsoft/yeni-finans"
type = "astro"
brand = "global" # eny veya lesstupid de olabilir
```

### B. Yeni Bir Elixir/Phoenix Uygulaması Kaydetmek:
```toml
[projects.yeni_backend]
name = "yeni_backend"
path = "agentandbot/yeni_backend"
type = "phoenix"
brand = "global"
```

Projeyi kaydedip `node brand/generate_tokens.mjs` ve `node brand/distribute_icons.mjs` komutlarını çalıştırdığınızda, otomasyon betikleri ilgili klasörleri otomatik olarak tarayacak ve CSS, Elixir token'ları ile SVG ikon setlerini hedef dizinlere kendisi yerleştirecektir.
