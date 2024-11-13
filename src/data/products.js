import albino_1 from "../asset/products/snails/albino/cover-1.jpg";
import albino_2 from "../asset/products/snails/albino/cover-2.jpg";
import albino_3 from "../asset/products/snails/albino/cover-3.jpg";
import albino_4 from "../asset/products/snails/albino/cover-4.jpg";
// ------------------------------------[cocochips-01]
import cocochips_1 from "../asset/products/main/soil-substrate/cocochips/cocochips-01.jpg";
import cocochips_2 from "../asset/products/main/soil-substrate/cocochips/cocochips-02.jpg";

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
    title: "مکمل پروتیینی حلزون و خزنده ی حلزونیکال",
    covers: [albino_1, albino_2, albino_3, albino_4],
    category: "مکمل و کلسیم",
    brand: "حلزونیکال",
    stock: true,
    describe:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
    specs: [
      { label: "دسته بندی", describe: "مکمل و کلسیم" },
      { label: "برند", describe: "حلزونیکال" },
      { label: "مدل", describe: "H157" },
      { label: "مورد استفاده", describe: "حلزون ها و خزندگان" },
      { label: "نوع استفاده", describe: "خوردنی" },
      { label: "حجم", describe: "200 میلی لیتر" },
      { label: "سال تولید", describe: "2024" },
    ],
    price: 400,
    suggested: 20,
  },
  {
    title: "کوکوچیپس بسته ۵۰۰ گرمی",
    covers: [cocochips_1, cocochips_2],
    category: "خاک و بستر",
    brand: "پتز لایف ایران",
    stock: true,
    describe:
      "بستر کوکوچیپس، گزینه‌ای فوق‌العاده برای خزندگان خانگی شما است. این بستر با الیاف طبیعی پوسته نارگیل ساخته شده که خواص جاذب رطوبت و کاهش بوی نامطبوع را داراست. کوکوچیپس فضایی طبیعی و راحت برای خزندگان ایجاد می‌کند و به حفظ بهداشت و تمیزی محیط زندگی آنها کمک می‌کند. مناسب برای انواع خزندگان، این بستر کاملاً قابل تجزیه زیستی است و پس از استفاده می‌تواند به طبیعت بازگردد. با انتخاب بستر کوکوچیپس، محیطی امن و سالم را برای حیوانات خانگی خود فراهم کنید.",
    specs: [
      { label: "دسته بندی", describe: "خاک و بستر" },
      { label: "برند", describe: "آقای حلزون" },
      { label: "مدل", describe: "CCC01" },
      { label: "مورد استفاده", describe: "جوندگان و خزندگان" },
      { label: "نوع استفاده", describe: "به عنوان بستر" },
      { label: "حجم", describe: "500 گرم" },
      { label: "سال تولید", describe: "1403" },
    ],
    price: 400,
    suggested: 20,
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
