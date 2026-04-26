import { c as createComponent } from './astro-component_oCQm8Jw4.mjs';
import 'piccolore';
import { r as renderComponent, a as renderTemplate } from './prerender_BIeJtcx-.mjs';
import { $ as $$ServiceDetailLayout } from './ServiceDetailLayout_B0gMs5uZ.mjs';

const $$OnlineDbs = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "ServiceDetailLayout", $$ServiceDetailLayout, { "title": "Online DBS ve Banka Entegrasyonu", "description": "Banka mutabakatlarınızı, DBS tahsilatlarınızı otomatize ederek ERP sisteminize anında yansıtın.", "icon": "account_balance", "problemTitle": "Manuel Bankacılık ve Nakit Gecikmeleri", "problemText": "Onlarca farklı bankanın ekranlarına ayrı ayrı şifrelerle girmek, MT940 hesap hareketlerini günlük olarak manuel SAP'ye işlemek ve bayilerden gelen Doğrudan Borçlandırma (DBS) limitlerini excel tablolarında yönetmek nakit görünürlüğünü imkansızlaştırır.", "solutionTitle": "Tek Ekran, 29 Banka Entegrasyonu", "solutionText": "Güçlü altyapı ortaklıklarımızla 29 Türk bankasını doğrudan SAP sisteminize bağlıyoruz. Online DBS limit güncellemeleri, anında tahsilat onayları, TÖS (Toplu Ödeme Sistemi) talimatları ve hesap ekstresi mutabakatı (MT940/Camt.053) ERP'niz içinde gerçekleşir.", "resultTitle": "%94 Mutabakat Otomasyonu", "resultText": "Tahsilat ve ödeme eşleştirmelerinde yapay zeka destekli kurallarla %90'ın üzerinde otomasyon sağlıyoruz. Finans operasyonlarındaki eforları azaltırken, nakit döngüsünü (Cash Conversion Cycle) gün kaybetmeden yönetebilmenizi sağlıyoruz.", "insightTitle": "11 · BANKA HUB VE LİKİDİTE", "insightContent": "Nakit akışı verisi, kurumsal kararların yakıtıdır. Ancak bu veriye ancak bankalarla sistemleriniz arasında kesintisiz veri aktarımı varsa güvenilebilir. Harezm'in banka entegrasyonu vizyonu; şirketinizi banka ekranlarına mahkum olmaktan çıkarıp, tüm finansal kararların SAP veya ilgili ERP içerisinde alındığı 'Merkezi Likidite Radarı' konseptine ulaştırmayı hedefler. Sadece teknolojik bir bağlantı değil, stratejik bir bağımsızlık sunar.", "tags": ["Doğrudan Borçlandırma (DBS)", "TÖS (Toplu Ödeme)", "MT940 Entegrasyonu", "Banka Mutabakat", "API Bankacılığı"], "relatedServices": [
    { title: "SAP Cash Management", href: "/sap-cash-management" },
    { title: "SAP Treasury and Risk Management", href: "/sap-trm" }
  ] })}`;
}, "B:/DEV/HAREZM_EKOSISTEMI/harezm._web/src/pages/online-dbs.astro", void 0);

const $$file = "B:/DEV/HAREZM_EKOSISTEMI/harezm._web/src/pages/online-dbs.astro";
const $$url = "/online-dbs";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$OnlineDbs,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
