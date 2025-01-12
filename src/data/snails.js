// ------------------------------------[category
import category_achatina from "../asset/images/category/cateogry_achatina.png";
import category_unique from "../asset/images/category/category_unique.png";
import category_mokamel from "../asset/images/category/cateogry_mokamel.png";
import category_khak from "../asset/images/category/cateogry_khak.png";

// ------------------------------------[rest
import News_1 from "../asset/images/special/special_1.jpg";
import Product_1 from "../asset/products/1000021259.jpg";

// ------------------------------------[snails

// ---------> albino
import albino_1 from "../asset/products/snails/albino/cover-1.jpg";
import albino_2 from "../asset/products/snails/albino/cover-2.jpg";
import albino_3 from "../asset/products/snails/albino/cover-3.jpg";
import albino_4 from "../asset/products/snails/albino/cover-4.jpg";
import albino_5 from "../asset/products/snails/albino/cover-5.jpg";

// ---------> jade
import jade_1 from "../asset/products/snails/jade/cover-1.jpg";
import jade_2 from "../asset/products/snails/jade/cover-2.jpg";
import jade_3 from "../asset/products/snails/jade/cover-3.jpg";
import jade_4 from "../asset/products/snails/jade/cover-4.jpg";
import jade_5 from "../asset/products/snails/jade/cover-5.jpg";
import jade_6 from "../asset/products/snails/jade/cover-6.jpg";
import jade_7 from "../asset/products/snails/jade/cover-7.jpg";
import jade_8 from "../asset/products/snails/jade/cover-8.jpg";
import jade_9 from "../asset/products/snails/jade/cover-9.jpg";

// --------->

export const categories = [
  {
    cover: category_unique,
    alt: "توضیحات تصویر کاور",
    bgColor: "#0F172A",
    label: "کلکسیونی، کمیاب، سفارشی",
    englishLabel: "Unique Snails",
    icon: "fa fa-user",
    hero: {
      cover: albino_3,
      title: "باکس‌ها",
      subtitle: "جایگاه زیر نویس الکی برای این بخش مربوط به دسته بندی",
      path: "#firstSection",
    },
  },
  {
    cover: category_achatina,
    alt: "توضیحات تصویر کاور",
    bgColor: "#0F172A",
    label: "حلزون آچاتینا",
    englishLabel: "Achatina Snial",
    icon: "fa fa-user",
    hero: {
      cover: albino_3,
      title: "باکس‌ها",
      subtitle: "جایگاه زیر نویس الکی برای این بخش مربوط به دسته بندی",
      path: "#firstSection",
    },
  },
  {
    cover: category_unique,
    alt: "توضیحات تصویر کاور",
    bgColor: "#0F172A",
    label: "حلزون اسکارگو",
    englishLabel: "Scargo Snail",
    icon: "fa fa-user",
    hero: {
      cover: albino_3,
      title: "باکس‌ها",
      subtitle: "جایگاه زیر نویس الکی برای این بخش مربوط به دسته بندی",
      path: "#firstSection",
    },
  },
  {
    cover: category_mokamel,
    alt: "توضیحات تصویر کاور",
    bgColor: "#0F172A",
    label: "مکمل و کلسیم",
    englishLabel: "Supplements & Calcium",
    icon: "fa fa-user",
    hero: {
      cover: albino_3,
      title: "باکس‌ها",
      subtitle: "جایگاه زیر نویس الکی برای این بخش مربوط به دسته بندی",
      path: "#firstSection",
    },
  },
  {
    cover: category_khak,
    alt: "توضیحات تصویر کاور",
    bgColor: "#0F172A",
    label: "خاک و بستر",
    englishLabel: "Soil and Substrate",
    icon: "fa fa-user",
    hero: {
      cover: albino_3,
      title: "باکس‌ها",
      subtitle: "جایگاه زیر نویس الکی برای این بخش مربوط به دسته بندی",
      path: "#firstSection",
    },
  },
];

export const specials = [
  {
    title: "بزرگترین رویداد حلزونی در تاریخ ایران",
    subtitle: "برای شرکت در این رویداد همین اکنون پیام بده",
    background: News_1,
    colorClass: "text-slate-50",
    buttons: [
      {
        label: "ارسال پیام",
        path: "/",
      },
      {
        label: "جزییات رویداد",
        path: "/",
      },
    ],
  },
  {
    title: "بزرگترین رویداد حلزونی در تاریخ ایران",
    subtitle: "برای شرکت در این رویداد همین اکنون پیام بده",
    background: News_1,
    colorClass: "text-slate-50",
    buttons: [
      {
        label: "ارسال پیام",
        path: "/",
      },
      {
        label: "جزییات رویداد",
        path: "/",
      },
    ],
  },
  {
    title: "بزرگترین رویداد حلزونی در تاریخ ایران",
    subtitle: "برای شرکت در این رویداد همین اکنون پیام بده",
    background: News_1,
    colorClass: "text-slate-50",
    buttons: [
      {
        label: "ارسال پیام",
        path: "/",
      },
      {
        label: "جزییات رویداد",
        path: "/",
      },
    ],
  },
];

export const products = [
  {
    title: "حلزون آلبینو",
    covers: [albino_1, albino_2, albino_3, albino_4, albino_5],
    category: "حلزون",
    describe: "",
    specs: [{ label: "مورد مصرف", describe: "خزنده ها و موش ها" }],
    prices: [
      { label: "کوچک", describe: "50,000" },
      { label: "متوسط", describe: "100,000" },
      { label: "بزرگ (مولد)", describe: "از 340,000 به بالا" },
    ],
    price: 100,
    suggested: 30,
  },
  {
    title: "حلزون جید",
    covers: [
      jade_1,
      jade_2,
      jade_3,
      jade_4,
      jade_5,
      jade_6,
      jade_7,
      jade_8,
      jade_9,
    ],
    category: "حلزون",
    describe:
      "حلزون‌های جید با رنگ‌های درخشان و الگوهای پیچیده پوسته خود، جلوه‌ای زیبا و جذاب به آکواریوم‌ها می‌بخشند. این حلزون‌ها که به راحتی در شرایط مختلف آکواریومی زنده می‌مانند، نه تنها زینتی هستند بلکه به تمیز نگه داشتن محیط آبی کمک می‌کنند. آن‌ها با تغذیه از جلبک‌ها و ضایعات غذایی، نقش مهمی در حفظ تمیزی و سلامت آکواریوم دارند و گزینه‌ای مناسب برای کسانی هستند که تازه به نگهداری آکواریوم‌ها علاقه‌مند شده‌اند.",
    specs: [{ label: "مورد مصرف", describe: "خزنده ها و موش ها" }],
    prices: [
      { label: "کوچک", describe: "200,000" },
      { label: "متوسط", describe: "280,000" },
      { label: "بزرگ (مولد)", describe: "از 380,000 به بالا" },
    ],
    price: 280,
    suggested: 30,
  },
  {
    title: "حلزون فولیک",
    covers: [
      jade_1,
      jade_2,
      jade_3,
      jade_4,
      jade_5,
      jade_6,
      jade_7,
      jade_8,
      jade_9,
    ],
    category: "حلزون",
    describe:
      "حلزون‌های فولیک، که به خاطر پوسته‌های صاف و براقی که دارند معروف هستند، یکی از محبوب‌ترین گونه‌های حلزون‌های زینتی در آکواریوم‌ها می‌باشند. این حلزون‌ها به خاطر رنگ‌های جذاب خود که اغلب ترکیبی از رنگ‌های خاکستری، قهوه‌ای و طلایی است، توجه زیادی را به خود جلب می‌کنند. حلزون‌های فولیک نه تنها ظاهر زیبایی دارند، بلکه به بهبود کیفیت آب نیز کمک می‌کنند. آن‌ها با تغذیه از جلبک‌ها و ضایعات غذایی موجود در آب، نقش مهمی در حفظ تمیزی و سلامت آکواریوم ایفا می‌کنند. این حلزون‌ها به راحتی با سایر موجودات آکواریومی همزیستی می‌کنند و به مراقبت خاصی نیاز ندارند، که آن‌ها را به یک انتخاب عالی برای آکواریوم‌داران تازه‌کار و با تجربه تبدیل می‌کند.",
    specs: [{ label: "مورد مصرف", describe: "خزنده ها و موش ها" }],
    prices: [
      { label: "کوچک", describe: "150,000" },
      { label: "متوسط", describe: "250,000" },
      { label: "بزرگ (مولد)", describe: "از 380,000 به بالا" },
    ],
    price: 250,
    suggested: 30,
  },
];
