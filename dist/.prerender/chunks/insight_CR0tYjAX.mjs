import { c as createComponent } from './astro-component_oCQm8Jw4.mjs';
import 'piccolore';
import { r as renderComponent, a as renderTemplate, m as maybeRenderHead } from './prerender_BIeJtcx-.mjs';

const $$Insight = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`import Layout from '../layouts/Layout.astro';
import Icon from '../components/Icon.astro';
${renderComponent($$result, "Layout", Layout, { "title": "Insights | Harezm Technology", "description": "Finansal teknolojiler, SAP yenilikleri, e-dönüşüm trendleri ve Harezm Technology uzman görüşlerini içeren güncel makale ve analizler." }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<header class="relative pt-40 pb-24 md:pt-48 md:pb-32 bg-bg overflow-hidden border-b border-border-main"><div class="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--color-primary)_0%,_transparent_40%)] opacity-10 pointer-events-none"></div><div class="max-w-container mx-auto px-8 md:px-12 relative z-10"><div class="w-full md:w-3/4 animate-fade-up"><span class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface text-text-70 text-label mb-8 border border-border">${renderComponent($$result2, "Icon", Icon, { "name": "icon_08_chat_message", "size": 14, "animate": true })}
RESMİ YAYINLAR
</span><h1 class="display-lg text-4xl md:text-h1 mb-6">
Insights <span class="bg-clip-text text-transparent bg-gradient-to-r from-teal to-primary">Serisi.</span></h1>
Sektörel haberlerimizi, SAP dünyasındaki yenilikleri ve yapay zeka ürünlerimize ait güncel teknik bültenleri LinkedIn sayfalarımız üzerinden aktif olarak paylaşıyoruz.
</div></div></header>` })}<section class="py-24 md:py-32 bg-bg2 relative"> <div class="max-w-container mx-auto px-8 md:px-12"> <div class="grid grid-cols-1 lg:grid-cols-2 gap-12"> <!-- Harezm Blog --> <a href="https://www.linkedin.com/company/2735651/posts/" target="_blank" rel="noopener noreferrer" class="glass-card rounded-3xl p-10 group hover:border-primary transition-all duration-300 block relative overflow-hidden h-full flex flex-col"> <div class="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity"> ${renderComponent($$result, "Icon", Icon, { "name": "icon_17_share", "size": 128, "class": "text-primary" })} </div> <span class="inline-flex max-w-max items-center gap-2 px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest rounded-full mb-6 relative z-10">KURUMSAL SAYFA</span> <h3 class="text-3xl font-headline font-bold text-on-background mb-4 relative z-10 group-hover:text-primary transition-colors max-w-[80%]">Harezm SAP Finans Blogu</h3> <p class="text-text-70 text-lg font-light leading-relaxed mb-10 relative z-10 max-w-sm flex-grow">Harezm’e ait SAP güncellemelerini, vaka analizlerini (Case Studies) ve kurumsal teknoloji duyurularını takip edin.</p> <div class="flex items-center gap-3 text-primary font-bold tracking-widest text-sm uppercase relative z-10 mt-auto">
LinkedIn'de Oku ${renderComponent($$result, "Icon", Icon, { "name": "icon_17_share", "size": 12, "class": "rotate-[-45deg] group-hover:translate-x-1 transition-transform" })} </div> </a> <!-- AgentAndBot Blog --> <a href="https://www.linkedin.com/showcase/agentandbot/posts/" target="_blank" rel="noopener noreferrer" class="glass-card rounded-3xl p-10 group hover:border-[#26A5E4] transition-all duration-300 block relative overflow-hidden h-full flex flex-col"> <div class="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity"> ${renderComponent($$result, "Icon", Icon, { "name": "icon_17_share", "size": 128, "class": "text-[#26A5E4]" })} </div> <span class="inline-flex max-w-max items-center gap-2 px-3 py-1 bg-[#26A5E4]/10 text-[#26A5E4] text-xs font-bold uppercase tracking-widest rounded-full mb-6 relative z-10">AI ÜRÜN VİTRİNİ</span> <h3 class="text-3xl font-headline font-bold text-on-background mb-4 relative z-10 group-hover:text-[#26A5E4] transition-colors max-w-[80%]">AgentAndBot Haberleri</h3> <p class="text-text-70 text-lg font-light leading-relaxed mb-10 relative z-10 max-w-sm flex-grow">Yapay zeka (AI) çözümlerimiz, Agent & Bot ürün araştırmaları ve en güncel Showcase teknik bültenlerini okuyun.</p> <div class="flex items-center gap-3 text-[#26A5E4] font-bold tracking-widest text-sm uppercase relative z-10 mt-auto">
LinkedIn'de Oku ${renderComponent($$result, "Icon", Icon, { "name": "icon_17_share", "size": 14, "class": "rotate-90 transform group-hover:translate-x-2 transition-transform" })} </div> </a> </div> </div> </section> `;
}, "B:/DEV/HAREZM_EKOSISTEMI/harezm._web/src/pages/insight.astro", void 0);

const $$file = "B:/DEV/HAREZM_EKOSISTEMI/harezm._web/src/pages/insight.astro";
const $$url = "/insight";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Insight,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
