import { c as createComponent } from './astro-component_oCQm8Jw4.mjs';
import 'piccolore';
import { r as renderComponent, a as renderTemplate } from './prerender_BIeJtcx-.mjs';
import { $ as $$ServiceDetailLayout } from './ServiceDetailLayout_B0gMs5uZ.mjs';

const $$SapFinansalKonsolidasyon = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "ServiceDetailLayout", $$ServiceDetailLayout, { "title": "SAP Finansal Konsolidasyon (BPC/Group Reporting)", "description": "Holding ve grup şirketinizin kârlılığını tek bakışta gerçek rakamlarla ölçün.", "icon": "table_chart", "problemTitle": "Grup Şirketlerinde Rakam Sisi", "problemText": "Birden fazla şirket kodu, lokal ve global para birimleri, farklı muhasebe standartlarına göre değerleme zorunluluğu, grup konsolidasyonunu aylar süren kabusa çeviriyor. Holding yöneticileri karar alırken verilerin eskimemesi için hızlı ve hatasız tablolar bekliyor.", "solutionTitle": "Merkezi Karar Mekanizması", "solutionText": "SAP Group Reporting veya BPC çözümleriyle bağlı ortaklıklar, iştirakler ve şubeler arasındaki grup içi (intercompany) işlemleri otomatik elimine ediyoruz. VUK, IFRS, US-GAAP gibi farklı standartlara göre eş zamanlı matris konsolidasyonu gerçekleştiriyoruz.", "resultTitle": "%80 Daha Hızlı Konsolide Finansallar", "resultText": "Ay sonu ve yıl sonu konsolidasyon süreçlerinizi %80 oranında kısaltıyoruz. Manuel Excel hatalarını devre dışı bırakarak yönetime denetlenebilir, şeffaf ve doğrudan eyleme dökülebilir grup kârlılığı raporları sunuyoruz.", "insightTitle": "13 · GÖRÜNÜRLÜK VE KONSOLİDASYON", "insightContent": "Holding yapıları, bilançolarda yansıtılan rakamların ötesinde bir organizma gibidir. Şirketler arası nakit transferleri, fiktif kâr iptalleri ve ortak maliyet dağıtımları ancak gerçek bir veri mimarisi ile çözülebilir. SAP'nin raporlama sistemleri veriyi kopyalayarak değil, S/4HANA'nın mutasyon geçirmez 'Universal Journal'ı (ACDOCA) üzerinden anlık olarak çekerek finansallar oluşturur.", "tags": ["SAP Group Reporting", "SAP BPC", "IFRS/TFRS Konsolidasyonu", "Elimination", "Holding Raporlaması"], "relatedServices": [
    { title: "SAP FI, CO & Material Ledger", href: "/hizmetler" },
    { title: "SAP Treasury and Risk Management", href: "/sap-trm" }
  ] })}`;
}, "B:/DEV/HAREZM_EKOSISTEMI/harezm._web/src/pages/sap-finansal-konsolidasyon.astro", void 0);

const $$file = "B:/DEV/HAREZM_EKOSISTEMI/harezm._web/src/pages/sap-finansal-konsolidasyon.astro";
const $$url = "/sap-finansal-konsolidasyon";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$SapFinansalKonsolidasyon,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
