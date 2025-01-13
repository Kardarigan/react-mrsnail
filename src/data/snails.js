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

// ---------> jade and fulica dark russian
import jade_fulica_dark_russian_1 from "../asset/products/snails/unique/fulica-dark-russian/cover-1.jpg";
import jade_fulica_dark_russian_2 from "../asset/products/snails/unique/fulica-dark-russian/cover-2.jpg";
import jade_fulica_dark_russian_3 from "../asset/products/snails/unique/fulica-dark-russian/cover-3.jpg";

export const categories = [
  {
    cover: category_achatina,
    alt: "توضیحات تصویر کاور",
    bgColor: "#0F172A",
    label: "حلزون ها",
    englishLabel: "Snials",
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
    label: "کلکسیونی و کمیاب",
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
    category: "حلزون ها",
    stock: true,
    describe:
      "حلزون آلبینو، با پوسته‌ای شفاف و بدن سفید تا صورتی، یکی از جذاب‌ترین حیوانات خانگی است. این نوع حلزون به دلیل رنگ‌بندی منحصر به فرد، در میان دوست‌داران حیوانات خانگی بسیار محبوب است. نگهداری از حلزون آلبینو نیاز به محیطی مرطوب و غذای مناسب دارد که شامل سبزیجات تازه و کلسیم است. این حلزون‌ها به آرامش و کم‌نوری علاقه‌مندند و می‌توانند در شرایط مناسب به خوبی رشد کنند. اگر به دنبال حیوان خانگی متفاوت و جذاب هستید، حلزون آلبینو می‌تواند انتخابی عالی باشد.",
    specs: [
      { label: "مورد مصرف", describe: "پت (حیوان خانگی)" },
      { label: "نژاد", describe: "آلبینو" },
      { label: "نوع نگهداری", describe: "نگهداری در تنگ" },
      { label: "نگهداری راحت", describe: "بله" },
    ],
    prices: [
      { label: "کوچک", describe: "50,000" },
      { label: "متوسط", describe: "100,000" },
      { label: "بزرگ (مولد)", describe: "از 340,000 به بالا" },
    ],
    price: 100,
    suggested: 1,
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
    category: "حلزون ها",
    stock: true,
    describe:
      "حلزون‌های جید با رنگ‌های درخشان و الگوهای پیچیده پوسته خود، جلوه‌ای زیبا و جذاب به آکواریوم‌ها می‌بخشند. این حلزون‌ها که به راحتی در شرایط مختلف آکواریومی زنده می‌مانند، نه تنها زینتی هستند بلکه به تمیز نگه داشتن محیط آبی کمک می‌کنند. آن‌ها با تغذیه از جلبک‌ها و ضایعات غذایی، نقش مهمی در حفظ تمیزی و سلامت آکواریوم دارند و گزینه‌ای مناسب برای کسانی هستند که تازه به نگهداری آکواریوم‌ها علاقه‌مند شده‌اند.",
    specs: [
      { label: "مورد مصرف", describe: "پت (حیوان خانگی)" },
      { label: "نژاد", describe: "جید" },
      { label: "نوع نگهداری", describe: "نگهداری در تنگ" },
      { label: "نگهداری راحت", describe: "بله" },
    ],
    prices: [
      { label: "کوچک", describe: "200,000" },
      { label: "متوسط", describe: "280,000" },
      { label: "بزرگ (مولد)", describe: "از 380,000 به بالا" },
    ],
    price: 280,
    suggested: 1,
  },
  {
    title: "حلزون فولیکا",
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
    category: "حلزون ها",
    stock: true,
    describe:
      "حلزون‌های فولیکا، که به خاطر پوسته‌های صاف و براقی که دارند معروف هستند، یکی از محبوب‌ترین گونه‌های حلزون‌های زینتی در محفظه ها می‌باشند. این حلزون‌ها به خاطر رنگ‌های جذاب خود که اغلب ترکیبی از رنگ‌های خاکستری، قهوه‌ای و طلایی است، توجه زیادی را به خود جلب می‌کنند.",
    specs: [
      { label: "مورد مصرف", describe: "پت (حیوان خانگی)" },
      { label: "نژاد", describe: "فولیکا" },
      { label: "نوع نگهداری", describe: "نگهداری در تنگ" },
      { label: "نگهداری راحت", describe: "بله" },
    ],
    prices: [
      { label: "کوچک", describe: "150,000" },
      { label: "متوسط", describe: "250,000" },
      { label: "بزرگ (مولد)", describe: "از 380,000 به بالا" },
    ],
    price: 250,
    suggested: 30,
  },
  {
    title: "حلزون کلکسیونی جید دارک روسی",
    covers: [
      jade_fulica_dark_russian_1,
      jade_fulica_dark_russian_2,
      jade_fulica_dark_russian_3,
    ],
    category: "کلکسیونی و کمیاب",
    stock: true,
    describe:
      "حلزون کلکسیونی جید دارک روسی، یکی از محبوب‌ترین گونه‌های حلزون‌های کلکسیونی است که به دلیل ظاهر منحصر به فرد و رنگ‌بندی زیبای خود جذابیت بسیاری دارد. این حلزون‌ها معمولاً دارای پوسته‌ای شفاف و رنگ‌های متنوعی هستند که می‌تواند از سفید تا رنگ های تیره باشد. نگهداری از این حلزون‌ها نیاز به محیطی مرطوب و آرام دارد و غذای مناسبی مانند سبزیجات تازه و کلسیم می‌تواند به رشد و سلامت آن‌ها کمک کند. اگر به دنبال یک حلزون کلکسیونی با ظاهر جذاب و آسان نگهداری هستید، جید دارک روسی گزینه‌ای عالی است.",
    specs: [
      { label: "مورد مصرف", describe: "پت (حیوان خانگی)" },
      { label: "نژاد", describe: "جید دارک روسی" },
      { label: "نوع نگهداری", describe: "نگهداری در تنگ" },
      { label: "نگهداری راحت", describe: "بله" },
    ],
    price: 0,
    suggested: 1,
  },
];
