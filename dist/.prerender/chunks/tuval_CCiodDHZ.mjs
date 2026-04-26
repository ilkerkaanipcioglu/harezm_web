import { c as createComponent } from './astro-component_oCQm8Jw4.mjs';
import 'piccolore';
import { m as maybeRenderHead, b as addAttribute, a as renderTemplate, r as renderComponent } from './prerender_BIeJtcx-.mjs';
import { $ as $$Layout, a as $$Icon } from './Layout_BjVWe-4o.mjs';
import 'clsx';

const $$ArtIllustration = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$ArtIllustration;
  const {
    src,
    alt = "İllüstrasyon",
    size = "md",
    class: className = "",
    decorative = false,
    variant = "brand"
  } = Astro2.props;
  const variantClass = `art-variant-${variant}`;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`art-illustration art-${size} ${variantClass} ${className}`, "class")}${addAttribute(decorative ? "presentation" : void 0, "role")} data-astro-cid-7qkr5pq5> <img${addAttribute(src, "src")}${addAttribute(decorative ? "" : alt, "alt")} loading="lazy"${addAttribute(decorative ? "true" : void 0, "aria-hidden")} data-astro-cid-7qkr5pq5> </div>`;
}, "B:/DEV/HAREZM_EKOSISTEMI/harezm._web/src/components/ArtIllustration.astro", void 0);

const $$Tuval = createComponent(($$result, $$props, $$slots) => {
  const exhibition = {
    studio: "lesstupid",
    movement: "El Çizimi İllüstrasyon",
    period: "Nisan 2026",
    description: "El çizimi, minimal ve absürd illüstrasyonlar. Siyah mürekkep çizgileri ve tek renk splash ile karakterize edilen, sıra dışı bir görsel dil. Her ay farklı bir sanatçı veya akım, grup sitelerimizin görsel kimliğine eşlik ediyor.",
    link: "https://lesstupid.com",
    illustrations: [
      { id: "vision", file: "/art/vision.png", title: "Vizyon", variant: "bw" },
      { id: "workspace", file: "/art/workspace.png", title: "Çalışma Alanı", variant: "brand" },
      { id: "growth", file: "/art/growth.png", title: "Büyüme", variant: "bw" },
      { id: "connection", file: "/art/connection.png", title: "Bağlantı", variant: "secondary" },
      { id: "strategy", file: "/art/strategy.png", title: "Strateji", variant: "minimal" },
      { id: "innovation", file: "/art/innovation.png", title: "İnovasyon", variant: "brand" }
    ]
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Tuval — Aylık Görsel Sergi", "description": "Harezm grup sitelerinde her ay değişen sanat sergisi. Bu ay: lesstupid — el çizimi absürd illüstrasyonlar.", "data-astro-cid-cl5fuowx": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<header class="tuval-hero" data-astro-cid-cl5fuowx> <div class="tuval-hero-inner" data-astro-cid-cl5fuowx> <div class="tuval-hero-text" data-astro-cid-cl5fuowx> <span class="tuval-label" data-astro-cid-cl5fuowx>Tuval · Aylık Görsel Sergi</span> <h1 class="tuval-title" data-astro-cid-cl5fuowx>
Bu Ayın<br data-astro-cid-cl5fuowx> <em data-astro-cid-cl5fuowx>Görsel Dili</em> </h1> <p class="tuval-subtitle" data-astro-cid-cl5fuowx>
Her ay farklı bir sanatçı, farklı bir akım. Sitelerimizdeki illüstrasyonlar bu sergiden beslenir.
</p> </div> <div class="tuval-hero-art" data-astro-cid-cl5fuowx> ${renderComponent($$result2, "ArtIllustration", $$ArtIllustration, { "src": "/art/vision.png", "alt": "Vizyon illüstrasyonu", "size": "xl", "variant": "minimal", "data-astro-cid-cl5fuowx": true })} </div> </div> </header>  <section class="tuval-artist-section" data-astro-cid-cl5fuowx> <div class="tuval-container" data-astro-cid-cl5fuowx> <div class="tuval-artist-card" data-astro-cid-cl5fuowx> <div class="tuval-artist-info" data-astro-cid-cl5fuowx> <span class="tuval-tag" data-astro-cid-cl5fuowx>Bu Ayın Akımı</span> <h2 class="tuval-artist-name" data-astro-cid-cl5fuowx>${exhibition.movement}</h2> <p class="tuval-artist-by" data-astro-cid-cl5fuowx> ${exhibition.studio} </p> <p class="tuval-artist-period" data-astro-cid-cl5fuowx>${exhibition.period}</p> </div> <div class="tuval-artist-desc" data-astro-cid-cl5fuowx> <p data-astro-cid-cl5fuowx>${exhibition.description}</p> <a${addAttribute(exhibition.link, "href")} target="_blank" rel="noopener" class="tuval-link" data-astro-cid-cl5fuowx> ${exhibition.studio} →
</a> </div> </div> </div> </section>  <section class="tuval-gallery-section" data-astro-cid-cl5fuowx> <div class="tuval-container" data-astro-cid-cl5fuowx> <h2 class="tuval-section-title" data-astro-cid-cl5fuowx>Sergi</h2> <div class="tuval-gallery" data-astro-cid-cl5fuowx> ${exhibition.illustrations.map((ill) => renderTemplate`<div class="tuval-gallery-item" data-astro-cid-cl5fuowx> <div class="tuval-gallery-img" data-astro-cid-cl5fuowx> ${renderComponent($$result2, "ArtIllustration", $$ArtIllustration, { "src": ill.file, "alt": ill.title, "size": "lg", "variant": ill.variant, "data-astro-cid-cl5fuowx": true })} </div> <p class="tuval-gallery-label" data-astro-cid-cl5fuowx>${ill.title}</p> </div>`)} </div> </div> </section>  <section class="tuval-manifesto" data-astro-cid-cl5fuowx> <div class="tuval-container" data-astro-cid-cl5fuowx> <div class="tuval-manifesto-inner" data-astro-cid-cl5fuowx> ${renderComponent($$result2, "Icon", $$Icon, { "name": "icon_05_settings_gear", "size": 48, "class": "tuval-manifesto-icon mb-8 block mx-auto", "animate": true, "data-astro-cid-cl5fuowx": true })} <h2 data-astro-cid-cl5fuowx>Steril Değiliz.</h2> <p data-astro-cid-cl5fuowx>
Teknoloji şirketleri genellikle soğuk ve mesafeli görünür. Biz öyle değiliz. Her ay farklı bir sanatçının eserlerini 
          dijital alanlarımıza taşıyoruz — çünkü iyi mühendislik ve iyi estetik aynı kökten beslenir: <em data-astro-cid-cl5fuowx>detaylara takıntılı olmak.</em> </p> <p class="tuval-manifesto-small" data-astro-cid-cl5fuowx>
Sanatçı veya illüstratör müsünüz? Eserlerinizi sergimizde görmek isterseniz bize ulaşın.
</p> <a href="/iletisim" class="tuval-cta" data-astro-cid-cl5fuowx>Eserlerinizi Gönderin</a> </div> </div> </section>  <section class="tuval-color-section" data-astro-cid-cl5fuowx> <div class="tuval-container" data-astro-cid-cl5fuowx> <h2 class="tuval-section-title" data-astro-cid-cl5fuowx>Renk Uyumu</h2> <p class="tuval-color-desc" data-astro-cid-cl5fuowx>
Aynı illüstrasyonlar her sitede o markanın rengiyle hayat bulur.
</p> <div class="tuval-color-grid" data-astro-cid-cl5fuowx> <div class="tuval-color-card tuval-color-harezm" data-astro-cid-cl5fuowx> <div class="tuval-color-swatch" style="background:#82165F;" data-astro-cid-cl5fuowx></div> <p class="tuval-color-name" data-astro-cid-cl5fuowx>Harezm</p> <p class="tuval-color-hex" data-astro-cid-cl5fuowx>#82165F · Mürdüm</p> </div> <div class="tuval-color-card tuval-color-eny" data-astro-cid-cl5fuowx> <div class="tuval-color-swatch" style="background:#D0FD17;" data-astro-cid-cl5fuowx></div> <p class="tuval-color-name" data-astro-cid-cl5fuowx>Eny</p> <p class="tuval-color-hex" data-astro-cid-cl5fuowx>#D0FD17 · Neon Lime</p> </div> <div class="tuval-color-card tuval-color-ab" data-astro-cid-cl5fuowx> <div class="tuval-color-swatch" style="background:#C9B1FF;" data-astro-cid-cl5fuowx></div> <p class="tuval-color-name" data-astro-cid-cl5fuowx>AgentandBot</p> <p class="tuval-color-hex" data-astro-cid-cl5fuowx>#C9B1FF · Soft Lila</p> </div> <div class="tuval-color-card tuval-color-ip" data-astro-cid-cl5fuowx> <div class="tuval-color-swatch" style="background:#E63946;" data-astro-cid-cl5fuowx></div> <p class="tuval-color-name" data-astro-cid-cl5fuowx>ipcioglu.com</p> <p class="tuval-color-hex" data-astro-cid-cl5fuowx>#E63946 · Crimson</p> </div> </div> </div> </section> ` })}`;
}, "B:/DEV/HAREZM_EKOSISTEMI/harezm._web/src/pages/tuval.astro", void 0);

const $$file = "B:/DEV/HAREZM_EKOSISTEMI/harezm._web/src/pages/tuval.astro";
const $$url = "/tuval";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Tuval,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
