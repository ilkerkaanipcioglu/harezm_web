import { c as createComponent } from './astro-component_oCQm8Jw4.mjs';
import 'piccolore';
import { r as renderComponent, a as renderTemplate } from './prerender_BIeJtcx-.mjs';
import { $ as $$ServiceDetailLayout } from './ServiceDetailLayout_B0gMs5uZ.mjs';

const $$SapCheckup = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "ServiceDetailLayout", $$ServiceDetailLayout, { "title": "SAP Check-Up Hizmeti", "description": "SAP sistemlerinizi derinlemesine analiz edin, iyileştirin ve en iyi uygulamalarla uyumlu hale getirin.", "icon": "health_and_safety", "problemTitle": "Karmaşıklaşan Sistem Mimarisi", "problemText": "Zaman içinde değişen iş ihtiyaçları, regülasyonlar ve yapılan sayısız özel geliştirmeler (Custom Developments) SAP sistemlerinin karmaşıklaşmasına neden olur. İşletmeler giderek performans düşüşleri, süreçlerde verimsizlik ve artan bakım maliyetleriyle karşı karşıya kalır.", "solutionTitle": "Uçtan Uca Best Practice Analizi", "solutionText": "SAP Check-Up hizmetimizle, mevcut sisteminizin SAP Best Practice standartlarına ne kadar uyumlu olduğunu objektif olarak ölçüyoruz. SAP mimarisi, teknik altyapı, entegrasyon noktaları, veri akışı ve regülasyon uyumluluğu detaylı bir check-up'tan geçer.", "resultTitle": "Yüksek Tempolu ROI ve Verimlilik", "resultText": "Tüm analiz sonucunda önceliklendirilmiş ve uygulanabilir bir iyileştirme yol haritası (Roadmap) sunuyoruz. Sisteminiz daha sade, hızlı ve sürdürülebilir bir yapıya kavuşur; iş süreçlerinde %30'a varan verimlilik artışı ve bakım maliyetlerinde %40'a varan düşüş ile SAP yatırımlarınızdan maksimum geri dönüş almanızı sağlarız.", "tags": ["SAP Best Practice", "Sistem Mimari Analizi", "Süreç Değerlendirmesi", "Custom Kontrolü", "Entegrasyon Optimizasyonu"], "relatedServices": [
    { title: "SAP S/4HANA Dönüşüm", href: "/s4hana" },
    { title: "Danışmanlık Hizmetleri", href: "/danismanlik" }
  ] })}`;
}, "B:/DEV/HAREZM_EKOSISTEMI/harezm._web/src/pages/sap-checkup.astro", void 0);

const $$file = "B:/DEV/HAREZM_EKOSISTEMI/harezm._web/src/pages/sap-checkup.astro";
const $$url = "/sap-checkup";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$SapCheckup,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
