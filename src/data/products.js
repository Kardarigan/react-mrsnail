import albino_1 from "../asset/products/snails/albino/cover-1.jpg";
import albino_2 from "../asset/products/snails/albino/cover-2.jpg";
import albino_3 from "../asset/products/snails/albino/cover-3.jpg";
import albino_4 from "../asset/products/snails/albino/cover-4.jpg";

// ------------------------------------[cocochips-01]
import cocochips_1 from "../asset/products/main/soil-substrate/cocochips/cocochips-01.jpg";
import cocochips_2 from "../asset/products/main/soil-substrate/cocochips/cocochips-02.jpg";

// ------------------------------------[protein-vitamin]
import protein_vitamin_1 from "../asset/products/main/supplements-calcium/protein-vitamin/cover-1.jpg";
import protein_vitamin_2 from "../asset/products/main/supplements-calcium/protein-vitamin/cover-2.jpg";

export const categories = [
  "باکس‌ها",
  "خزنده‌ها و موش‌ها",
  "مکمل و کلسیم",
  "خاک و بستر",
  "ملزومات و تجهیزات",
  "خوراک‌ها",
  "پدحرارتی",
];

export const products = [
  {
    title: "مکمل و ویتامین پروتئینه دونه پفکی (وارداتی)",
    covers: [protein_vitamin_1, protein_vitamin_2],
    category: "مکمل و کلسیم",
    brand: "وارداتی (واردکننده آقای حلزون)",
    stock: true,
    describe:
      'مکمل و ویتامین پروتئینه دونه پفکی، یک انتخاب بی‌نظیر برای تقویت سلامتی و شادابی خزندگان و حلزون عزیز شماست. این محصول وارداتی با ترکیبی منحصر به فرد از ویتامین‌ها، پروتئین‌ها و مواد معدنی طراحی شده است تا نیازهای غذایی حیوانات خانگی شما را به بهترین شکل ممکن تأمین کند. دونه پفکی نه تنها به افزایش انرژی و قدرت فیزیکی کمک می‌کند، بلکه با تقویت سیستم ایمنی، به بهبود سلامت کلی و پیشگیری از بیماری‌ها نیز کمک می‌نماید. با انتخاب مکمل و ویتامین پروتئینه دونه پفکی از فروشگاه آنلاین "آقای حلزون"، به حیوانات خانگی خود هدیه‌ای از سلامتی و نشاط ببخشید.',
    specs: [
      { label: "دسته بندی", describe: "مکمل و کلسیم" },
      { label: "برند", describe: "وارداتی (واردکننده آقای حلزون)" },
      { label: "مدل (کد)", describe: "SVP01" },
      { label: "مورد استفاده", describe: "تقویت خزندگان و حلزون" },
      { label: "نوع استفاده", describe: "خوراک تقویتی" },
      { label: "حجم (پیشفرض)", describe: "100 گرم" },
      { label: "سال تولید", describe: "1403" },
    ],
    price: 250,
    suggested: 1,
  },
  {
    title: "خاک کوکوچیپس بسته 500 گرمی",
    covers: [cocochips_1, cocochips_2],
    category: "خاک و بستر",
    brand: "پتز لایف ایران",
    stock: true,
    describe:
      "بستر کوکوچیپس، گزینه‌ای فوق‌العاده برای خزندگان خانگی شما است. این بستر با الیاف طبیعی پوسته نارگیل ساخته شده که خواص جاذب رطوبت و کاهش بوی نامطبوع را داراست. کوکوچیپس فضایی طبیعی و راحت برای خزندگان ایجاد می‌کند و به حفظ بهداشت و تمیزی محیط زندگی آنها کمک می‌کند. مناسب برای انواع خزندگان، این بستر کاملاً قابل تجزیه زیستی است و پس از استفاده می‌تواند به طبیعت بازگردد. با انتخاب بستر کوکوچیپس، محیطی امن و سالم را برای حیوانات خانگی خود فراهم کنید.",
    specs: [
      { label: "دسته بندی", describe: "خاک و بستر" },
      { label: "برند", describe: "پتز لایف ایران" },
      { label: "مدل (کد)", describe: "CCC01" },
      { label: "مورد استفاده", describe: "جوندگان و خزندگان" },
      { label: "نوع استفاده", describe: "به عنوان بستر" },
      { label: "حجم (پیشفرض)", describe: "500 گرم" },
      { label: "سال تولید", describe: "1403" },
    ],
    price: 150,
    suggested: 1,
  },
  {
    title: "خاک کوکوپیت بسته 500 گرمی",
    covers: [cocochips_1, cocochips_2],
    category: "خاک و بستر",
    brand: "پتز لایف ایران",
    stock: true,
    describe:
      "خاک کوکوپیت، یا همان الیاف پوسته نارگیل، یک گزینه عالی برای استفاده به عنوان بستر حیوانات است. این ماده طبیعی، نرم و دارای توانایی بالای جذب آب است، که راحتی و بهداشت حیوانات را تضمین می‌کند. علاوه بر این، کوکوپیت به دلیل داشتن خواص ضد میکروبی طبیعی، به کاهش بوی نامطبوع و ایجاد محیطی سالم‌تر برای حیوانات کمک می‌کند. همچنین، این بستر قابل تجدید و دوستدار محیط زیست است، که آن را به انتخابی مناسب برای استفاده در محیط‌های نگهداری حیوانات تبدیل می‌کند.",
    specs: [
      { label: "دسته بندی", describe: "خاک و بستر" },
      { label: "برند", describe: "آقای حلزون" },
      { label: "مدل (کد)", describe: "CCP01" },
      { label: "مورد استفاده", describe: "جوندگان و خزندگان" },
      { label: "نوع استفاده", describe: "به عنوان بستر" },
      { label: "حجم (پیشفرض)", describe: "500 گرم" },
      { label: "سال تولید", describe: "1403" },
    ],
    price: 100,
    suggested: 1,
  },
  {
    title: "خزه (بسته و گونی) بستر تراریوم",
    covers: [cocochips_1, cocochips_2],
    category: "خاک و بستر",
    brand: "پتز لایف ایران",
    stock: true,
    describe:
      "خزه، که به عنوان یکی از قدیمی‌ترین گیاهان جهان شناخته می‌شود، به دلیل ظاهر جذاب و نگهداری آسان، محبوبیت زیادی در میان دوست‌داران طبیعت و حیوانات خانگی دارد. این گیاه کوچک و سبز می‌تواند در محیط‌های مرطوب و سایه‌دار به خوبی رشد کند و برای تزئین آکواریوم‌ها و تراریوم‌ها ایده‌آل است. خزه نیاز به نور غیرمستقیم و آب فراوان دارد و می‌تواند به زیبایی محیط زندگی حیوانات خانگی شما اضافه کند. برای کسانی که به دنبال ایجاد محیطی طبیعی و آرام برای حیوانات خانگی خود هستند، خزه گزینه‌ای عالی و زیباست.",
    specs: [
      { label: "دسته بندی", describe: "خاک و بستر" },
      { label: "برند", describe: "آقای حلزون" },
      { label: "مدل (کد)", describe: "M01" },
      { label: "مورد استفاده", describe: "بستر تراریوم برای انواع حیوانات" },
      { label: "نوع استفاده", describe: "به عنوان بستر" },
      { label: "حجم (پیشفرض)", describe: "متغیر" },
      { label: "سال تولید", describe: "1403" },
    ],
    prices: [
      { label: "بسته‌ای", describe: "100,000" },
      { label: "هر گونی", describe: "700,000" },
    ],
    price: 100,
    suggested: 1,
  },
];

// {
//   title: '',
//   covers: [],
//   category: '',
//   brand: "",
//   stock: true,
//   describe: '',
//   specs: [
//     { label: "", describe: "" },
//   ],
//   price: ,
//   suggested: ,
// }
