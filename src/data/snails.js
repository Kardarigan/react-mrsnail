// --------------------[category
import category_achatina from "../asset/images/category/cateogry_achatina.png";
import category_unique from "../asset/images/category/category_unique.png";
import category_mokamel from "../asset/images/category/cateogry_mokamel.png";
import category_khak from "../asset/images/category/cateogry_khak.png";
// --------------------[rest
import News_1 from "../asset/images/special/special_1.jpg";
import Product_1 from "../asset/products/1000021259.jpg";
// --------------------[snails
import albino_1 from "../asset/products/snails/albino/cover-1.jpg";
import albino_2 from "../asset/products/snails/albino/cover-2.jpg";
import albino_3 from "../asset/products/snails/albino/cover-3.jpg";
import albino_4 from "../asset/products/snails/albino/cover-4.jpg";

export const categories = [
  {
    cover: category_unique,
    alt: "Unique Snails",
    bgColor: "#0F172A",
    label: "کلکسیونی، کمیاب، سفارشی",
    path: "",
  },
  {
    cover: category_achatina,
    alt: "Achatina Snial",
    bgColor: "#0F172A",
    label: "حلزون آچاتینا",
    path: "",
  },
  {
    cover: category_unique,
    alt: "Scargo Snail",
    bgColor: "#0F172A",
    label: "حلزون اسکارگو",
    path: "",
  },
  {
    cover: category_mokamel,
    alt: "Supplements & Calcium",
    bgColor: "#0F172A",
    label: "مکمل و کلسیم",
    path: "",
  },
  {
    cover: category_khak,
    alt: "Soil and Substrate",
    bgColor: "#0F172A",
    label: "خاک و بستر",
    path: "",
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
    covers: [albino_1, albino_2, albino_3, albino_4],
    category: "حلزون آچاتینا",
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
  {
    title: "مکمل خزنده حلزونیکال",
    covers: [Product_1, Product_1, Product_1, Product_1, Product_1],
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
  },
];
