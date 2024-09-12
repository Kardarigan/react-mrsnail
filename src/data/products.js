import albino_1 from "../asset/products/snails/albino/cover-1.jpg";
import albino_2 from "../asset/products/snails/albino/cover-2.jpg";
import albino_3 from "../asset/products/snails/albino/cover-3.jpg";
import albino_4 from "../asset/products/snails/albino/cover-4.jpg";

export const categories = [
  "باکس‌ها",
  "خزنده‌ها و موش‌ها",
  "مکمل و کلسیم",
  "خاک و بستر",
  "ملزومات و تجهیزات",
  "خوراک‌ها",
];

export const products = [
  {
    title: "مکمل خزنده حلزونیکال",
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
    title: "مکمل خزنده حلزونیکال",
    covers: [albino_1, albino_2, albino_3, albino_4],
    category: "مکمل و کلسیم",
    brand: "حلزونیکال",
    stock: false,
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
];
