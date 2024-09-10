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
    describe:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
    specs: [
      { label: "مورد مصرف", describe: "خزنده ها و موش ها" },
      { label: "مورد مصرف", describe: "خزنده ها و موش ها" },
      { label: "مورد مصرف", describe: "خزنده ها و موش ها" },
      { label: "مورد مصرف", describe: "خزنده ها و موش ها" },
    ],
    price: 400,
    suggested: 20,
  },
];
