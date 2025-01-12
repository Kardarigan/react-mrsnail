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
    title: "پروتیینی حلزون و خزنده ی حلزونیکال",
    covers: [Product_1, Product_1, Product_1, Product_1],
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
];
