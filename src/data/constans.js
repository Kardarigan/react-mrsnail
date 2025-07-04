// --------------------[category
import category_moosh from "../asset/images/category/cateogry_moosh.png";
import category_mokamel from "../asset/images/category/cateogry_mokamel.png";
import category_khak from "../asset/images/category/cateogry_khak.png";
import cateogry_khorak from "../asset/images/category/cateogry_khorak.png";
import cateogry_box from "../asset/images/category/cateogry_box.png";
import cateogry_essentials from "../asset/images/category/cateogry_essentials.png";
import cateogry_warming from "../asset/images/category/category_warming_pad.png";
// --------------------[hero
import hero_home from "../asset/images/hero/hero_home.jpg";
import hero_product from "../asset/images/hero/hero_product.jpg";
import hero_about from "../asset/images/hero/hero_about.jpg";
import hero_hq from "../asset/images/hero/hero_hq.jpg";
import hero_snail from "../asset/images/hero/hero_snail.jpg";
// --------------------[special
import special_1 from "../asset/images/special/special_1.jpg";
import special_2 from "../asset/images/special/special_2.png";
import special_3 from "../asset/images/special/special_3.webp";

import Hero_1 from "../asset/images/20240428_045027.jpg";

export const navbar = [
  {
    label: "خانه",
    path: "/",
  },
  {
    label: "مرکز حلزون",
    path: "/مرکز حلزون",
  },
  {
    label: "محصولات",
    path: "/محصولات",
  },
  {
    label: "مقالات",
    path: "/مقالات",
  },
];

export const footer = {
  logos: [
    {
      label: "نماد ساخت امپراتوری",
      logo: "http://www.codeempire.ir/static/media/coat-of-arms.205c285c2897da9c80dd.png",
      path: "http://codeempire.ir/",
    },
  ],
  links: [
    {
      title: "شرکت ما",
      links: [
        {
          label: "درباره ما",
          path: "/درباره",
        },
        {
          label: "تماس با ما",
          path: "/تماس با ما",
        },
        {
          label: "قوانین",
          path: "/قوانین",
        },
      ],
    },
    {
      title: "مقالات ابتدایی",
      links: [
        {
          label: "حلزون چیست؟",
          path: "/",
        },
        {
          label: "یه حلزون چیا نیاز داره؟",
          path: "/",
        },
        {
          label: "بهترین برند لوازم حلزون ها",
          path: "/",
        },
        {
          label: "روتین روزمره ی حلزون ها",
          path: "/",
        },
      ],
    },
    {
      title: "دسترسی سریع",
      links: [
        {
          label: "خانه",
          path: "/",
        },
        {
          label: "محصولات",
          path: "/محصولات",
        },
        {
          label: "مقالات",
          path: "/مقالات",
        },
      ],
    },
  ],
};

export const social = [
  {
    path: "https://www.instagram.com/m_r_snail/",
    iconClass: "fa-instagram",
    colorClass: "hover:instagram",
  },
  {
    path: "https://t.me/+CX8v2UMK135lYmM8?fbclid=PAZXh0bgNhZW0CMTEAAabTyuX7OPpFadkSTBN6fSRH_j-G23qyouZaTUUzs9tXepfk0NumV4gG6WY_aem_1M7sh3QBE6NUYUqkSNhnzQ",
    iconClass: "fa-telegram",
    colorClass: "hover:bg-sky-500",
  },
  {
    path: "https://wa.me/989335720649",
    iconClass: "fa-whatsapp",
    colorClass: "hover:bg-green-500",
  },
];

export const categories = [
  {
    cover: cateogry_box,
    alt: "توضیحات تصویر کاور",
    bgColor: "#0F172A",
    label: "باکس‌ها",
    englishLabel: "Box of Reptiles",
    icon: "fa fa-user",
    hero: {
      cover: hero_home,
      title: "باکس‌ها",
      subtitle: "جایگاه زیر نویس الکی برای این بخش مربوط به دسته بندی",
      path: "#firstSection",
    },
  },
  {
    cover: category_moosh,
    alt: "توضیحات تصویر کاور",
    bgColor: "#0F172A",
    label: "خزنده‌ها و موش‌ها",
    englishLabel: "Reptiles & Mice",
    icon: "fa fa-user",
    hero: {
      cover: hero_home,
      title: "خزنده‌ها و موش‌ها",
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
      cover: hero_home,
      title: "مکمل و کلسیم",
      subtitle: "جایگاه زیر نویس الکی برای این بخش مربوط به دسته بندی",
      path: "#firstSection",
    },
  },
  {
    cover: category_khak,
    alt: "توضیحات تصویر کاور",
    bgColor: "#0F172A",
    label: "خاک و بستر",
    englishLabel: "Soil & Substrate",
    icon: "fa fa-user",
    hero: {
      cover: hero_home,
      title: "خاک و بستر",
      subtitle: "جایگاه زیر نویس الکی برای این بخش مربوط به دسته بندی",
      path: "#firstSection",
    },
  },
  {
    cover: cateogry_essentials,
    alt: "توضیحات تصویر کاور",
    bgColor: "#0F172A",
    label: "ملزومات و تجهیزات",
    englishLabel: "Essentials",
    icon: "fa fa-user",
    hero: {
      cover: hero_home,
      title: "ملزومات و تجهیزات",
      subtitle: "جایگاه زیر نویس الکی برای این بخش مربوط به دسته بندی",
      path: "#firstSection",
    },
  },
  {
    cover: cateogry_khorak,
    alt: "توضیحات تصویر کاور",
    bgColor: "#0F172A",
    label: "خوراک‌ها",
    englishLabel: "Foods",
    icon: "fa fa-user",
    hero: {
      cover: hero_home,
      title: "خوراک‌ها",
      subtitle: "جایگاه زیر نویس الکی برای این بخش مربوط به دسته بندی",
      path: "#firstSection",
    },
  },
];

export const homeSlide = [
  {
    title: "فستیوال تراریوم و خانه ی حلزون",
    subtitle: "برای شرکت در این رویداد همین اکنون پیام بده",
    background: special_1,
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
    background: special_2,
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
    title: "یه حلزون میتونه حیوون خونگی باشه؟",
    subtitle: "پیشنهادی ترین مقاله ی ماه",
    background: special_3,
    colorClass: "text-slate-50",
    buttons: [
      {
        label: "مشاهده ی مقاله",
        path: "/",
      },
    ],
  },
];

export const articles = {
  common: [
    {
      title: "اولین فروشگاه تخصصی حلزون خانگی در ایران",
      paragraph:
        "آقای حلزون اولین فروشگاه تخصصی فروش حلزون در ایران هست. اگه دنبال یه حیوان خونگی کم‌دردسر، بی‌صدا، خاص و باحال می‌گردی، حلزون انتخابیه که هم خاصه، هم یونیک، هم فانتزی! اینجا انواع حلزون‌های خانگی با نژادهای متفاوت رو پیدا می‌کنی، مخصوص اونایی که دنبال آرامش و vibe متفاوت توی خونه‌ن.",
    },
    {
      title: "مرجع حلزون‌های خانگی و لوازم نگهداری‌شون",
      paragraph:
        "ما فقط حلزون نمی‌فروشیم؛ یه دنیای کامل براشون ساختیم. از تراریوم‌های شیشه‌ای و خاک مخصوص گرفته تا غذاهای مقوی و لوازم نگهداری، همه‌چی اینجاست تا حلزونت خوشحال و سلامت باشه. Mr.Snail جاییه که حلزونت احساس شاه بودن می‌کنه، و تو حس می‌کنی یه کوچولوی لاک‌دار رو داری که عاشقته.",
    },
  ],
};

export const hero = {
  home: {
    cover: hero_home,
    title: "فکر میکنم حلزونت از ما خوشش بیاد!",
    subtitle:
      "میخوای خدمات حلوزنیمون رو ببینی؟<br>اگه آره کلیک کن تا شروع کنیم.",
    path: "#firstSection",
  },
  snail: {
    cover: hero_snail,
    title: "بخش حلزون ها اینجاست!",
    path: "/مرکز حلزون",
  },
  snailHero: {
    cover: hero_hq,
    title: "اینجا مخصوص حلزوناست!",
    subtitle: "یه بخش فقط برای حلزون ها",
    path: "#firstSection",
  },
  About: {
    cover: hero_about,
    title: "آقای حلزون",
    subtitle: "همونی که حلزونت میخواد!",
  },
  form: {
    cover: Hero_1,
    title: "فرم ارتباط سریع",
    subtitle: "جهت سفارش یا هر کار دیگه که داری میتونی ازین فرم استفاده کنی.",
  },
  products: {
    cover: hero_product,
    title: "تمام محصولات رو میتونی اینجا پیدا کنی",
    path: "#firstSection",
  },
};

export const middle = {
  about: [
    {
      title: "ما کی هستیم؟",
      describe:
        "ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف.",
    },
  ],
};

export const half = {
  about: [
    {
      title: "کار ما تو چه زمینه‌ای هست؟",
      describe:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
      cover: special_2,
    },
  ],
};

export const about = {
  numbers: [
    {
      title: "مشتری از تمام دنیا",
      number: "500",
    },
    {
      title: "مشتری از تمام دنیا",
      number: "500",
    },
    {
      title: "مشتری از تمام دنیا",
      number: "500",
    },
    {
      title: "مشتری از تمام دنیا",
      number: "500",
    },
  ],
};

export const contact = {
  hint: "میتونی بجای تماس گرفتن، از <a href='#form' class='underline'>این فرم</a> استفاده کنی",
  formHint:
    "خوشت نیومد؟ برگرد به صفحه ی <a href='/تماس با ما'>ارتباط با ما</a>",
  boxes: [
    {
      title: "اطلاعات تماس",
      items: [
        {
          icon: "fa-duotone fa-solid fa-mobile",
          label: "همراه (حلزون)",
          describe: "+98 933-572-0649",
        },
        {
          icon: "fa-duotone fa-solid fa-mobile",
          label: "همراه (صرفا خزندگان و جوندگان)",
          describe: "+98 935-529-2294",
        },
        {
          icon: "fa-duotone fa-solid fa-envelope",
          label: "ایمیل",
          describe: "mrsnail@gmail.com",
        },
        {
          icon: "fa-sharp-duotone fa-solid fa-location-dot",
          label: "آدرس",
          describe: "تهران، خیابان ولیعصر، خیابان پنج، پلاک 96",
        },
      ],
    },
    {
      title: "روز های کاری",
      items: [
        {
          icon: "fa-duotone fa-solid fa-calendar",
          label: "شنبه",
          describe: "7 - 21",
        },
        {
          icon: "fa-duotone fa-solid fa-calendar",
          label: "یکشنبه",
          describe: "7 - 21",
        },
        {
          icon: "fa-duotone fa-solid fa-calendar",
          label: "دوشنبه",
          describe: "7 - 21",
        },
        {
          icon: "fa-duotone fa-solid fa-calendar",
          label: "سه شنبه",
          describe: "7 - 21",
        },
        {
          icon: "fa-duotone fa-solid fa-calendar",
          label: "چهارشنبه",
          describe: "7 - 21",
        },
        {
          icon: "fa-duotone fa-solid fa-calendar",
          label: "پنجشنبه",
          describe: "7 - 21",
        },
        {
          icon: "fa-duotone fa-solid fa-calendar",
          label: "جمعه",
          describe: "9 - 18",
        },
      ],
    },
  ],
  socialMedia: [
    {
      icon: "fa-brands fa-instagram",
      label: "اینستاگرام آقای حلزون",
      href: "https://www.instagram.com/m_r_snail/",
      class: "instagram",
    },
    {
      icon: "fa-brands fa-instagram",
      label: "اینستاگرام پت لایف ایران",
      href: "https://www.instagram.com/petslife.iran/",
      class: "instagram",
    },
    {
      icon: "fa-brands fa-telegram",
      label: "کانال تلگرام",
      href: "https://t.me/+CX8v2UMK135lYmM8?fbclid=PAZXh0bgNhZW0CMTEAAabTyuX7OPpFadkSTBN6fSRH_j-G23qyouZaTUUzs9tXepfk0NumV4gG6WY_aem_1M7sh3QBE6NUYUqkSNhnzQ",
      class: "bg-sky-500",
    },
  ],
  contactForm: [
    {
      label: "نام",
      type: "text",
      required: true,
      half: true,
    },
    {
      label: "نام خانوادگی (اختیاری)",
      type: "text",
      half: true,
    },
    {
      label: "شماره تماس (اختیاری)",
      type: "tel",
    },
    {
      label: "ایمیل",
      type: "email",
      required: true,
    },
    {
      label: "موضوع پیام",
      type: "text",
      required: true,
    },
    {
      label: "متن پیام",
      type: "textarea",
      required: true,
    },
  ],
};

export const sorts = {
  products: ["آخرین", "ارزانترین", "گرانترین"],
  blogs: ["آخرین", "پیشنهاد شده ترین"],
};

export const orderLink = [
  {
    label: "پیام در تلگرام",
    icon: "fa-brands fa-telegram",
    path: "https://t.me/m_r_snail",
  },
  {
    label: "تماس",
    icon: "fa-solid fa-phone",
    path: "tel:+989335720649",
  },
];

export const shareButtons = [
  {
    title: "اشتراک با واتساپ",
    icon: "fa-brands fa-whatsapp",
    href: "whatsapp://send?text=",
  },
  {
    title: "اشتراک با اینستاگرام",
    icon: "fa-brands fa-instagram",
    href: "https://www.instagram.com/?url=",
  },
  {
    title: "اشتراک با تلگرام",
    icon: "fa-brands fa-telegram",
    href: "https://t.me/share/url?url=",
  },
];

export const infoValue = [
  {
    icon: "fa-sharp fa-solid fa-shield-check",
    title: "ارسال ایمن حیوانات خانگی",
    describe: "حیوانات خانگی شما با اطمینان و راحتی به مقصد خواهند رسید",
  },
  {
    icon: "fa-solid fa-salad",
    title: "بهترین‌ تغذیه و نگهداری",
    describe: "حیوانات خانگی ما با بهترین تغذیه و نگهداری پرورش یافته‌اند",
  },
  {
    icon: "fa-sharp fa-solid fa-seedling",
    title: "محصولات مرغوب و تازه",
    describe: "تضمین کیفیت با ارائه محصولات تازه و درجه یک",
  },
  {
    icon: "fa-sharp fa-solid fa-sack-dollar",
    title: "به صرفه و با کیفیت",
    describe: "بهترین قیمت بازار در عین بالا بودن کیفیت محصولات",
  },
];
