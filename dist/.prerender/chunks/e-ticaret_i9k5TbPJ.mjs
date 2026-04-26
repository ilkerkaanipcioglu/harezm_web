import { c as createComponent } from './astro-component_oCQm8Jw4.mjs';
import 'piccolore';
import { r as renderComponent, a as renderTemplate } from './prerender_BIeJtcx-.mjs';
import { $ as $$ServiceDetailLayout } from './ServiceDetailLayout_B0gMs5uZ.mjs';

const $$ETicaret = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "ServiceDetailLayout", $$ServiceDetailLayout, { "title": "e-Ticaret ve Pazar Yeri Entegrasyonları", "description": "Siparişler, stoklar, kargo ve e-Fatura verilerini e-ticaret sitenizden SAP altyapısına gerçek zamanlı akıtın.", "icon": "storefront", "problemTitle": "Kopan Senkronizasyon, Şişen Operasyon", "problemText": "Çok kanallı satış yapan firmalarda sipariş girişleri ve envanter kontrolleri ERP ile senkronize çalışmazsa felaket başlar. Satılmayan ürün için fatura kesilir, stokta biten ürün pazaryerinde listelenmeye devam eder; manuel iptal/iade yönetimi finans ekiplerini boğar.", "solutionTitle": "API First Bulut Mimarisi", "solutionText": "B2B ve B2C e-ticaret siteleriniz ile popüler pazar yerlerini (Trendyol, Hepsiburada, Amazon, Shopify vb.) SAP S/4HANA ile BTP (Business Technology Platform) veya middleware katmanı üzerinden çift yönlü entegre ediyoruz. Sipariş akar akmaz depo teslimatı başlatılır, aynı saniye e-Faturası GİB'e iletilir ve muhasebe kaydı atılır.", "resultTitle": "Anlık Mutabakat, Sıfır Gecikme", "resultText": "On binlerce satıra ulaşan perakende işlemlerin tahsilat ve banka pos mutabakatlarını %99 oranında otomatik eşleştiriyoruz. Operasyonel körlüğü bitirip hangi kanalın anlık ne kadar kârlı olduğunu SAP üzerinden tek bakışta görmenizi sağlıyoruz.", "insightTitle": "17 · ÇOK KANALLI DİJİTAL PERAKENDE", "insightContent": "E-ticaret oyununun kuralı pazaryerlerinde görünürlük değil, arka taraftaki operasyonel hızdır. Saniyede binlerce siparişin düştüğü efsane alışveriş dönemi kampanyalarında sisteminiz esnemeden ayakta kalamaz. SAP e-Ticaret entegrasyonlarımız, yoğun trafik yükünü kaldıracak kuyruk (queue) mimarileri ve anlık sipariş doğrulama motorları ile arka planda kusursuz bir operasyon garantiler.", "tags": ["Pazar Yeri API Entegrasyonu", "Shopify/Magento/WooCommerce", "e-Fatura Otomasyonu", "Toplu POS Mutabakatı", "Gerçek Zamanlı Stok"], "relatedServices": [
    { title: "SAP & OpenText", href: "/sap-opentext" },
    { title: "Online DBS ve Banka Entegrasyonu", href: "/online-dbs" }
  ] })}`;
}, "B:/DEV/HAREZM_EKOSISTEMI/harezm._web/src/pages/e-ticaret.astro", void 0);

const $$file = "B:/DEV/HAREZM_EKOSISTEMI/harezm._web/src/pages/e-ticaret.astro";
const $$url = "/e-ticaret";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$ETicaret,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
