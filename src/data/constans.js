// --------------------[category
import category_moosh from "../asset/images/category/cateogry_moosh.png";
import category_mokamel from "../asset/images/category/cateogry_mokamel.png";
import category_khak from "../asset/images/category/cateogry_khak.png";
import cateogry_khorak from "../asset/images/category/cateogry_khorak.png";
import cateogry_box from "../asset/images/category/cateogry_box.png";
import cateogry_essentials from "../asset/images/category/cateogry_essentials.png";
// --------------------[hero
import hero_home from "../asset/images/hero/hero_home.jpg";
import hero_blog from "../asset/images/hero/hero_blog.png";
import hero_product from "../asset/images/hero/hero_product.png";
import hero_about from "../asset/images/hero/hero_about.webp";
import hero_hq from "../asset/images/hero/hero_hq.webp";
import hero_snail from "../asset/images/hero/hero_snail.webp";
// --------------------[special
import special_1 from "../asset/images/special/special_1.jpg";
import special_2 from "../asset/images/special/special_2.png";
import special_3 from "../asset/images/special/special_3.webp";

import Hero_1 from "../asset/images/20240428_045027.jpg";
import Logo_1 from "../asset/images/64e6177329c2d71389b1b219_walmart.png";

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
    label: "بلاگ",
    path: "/مقالات",
  },
  {
    label: "محصولات",
    path: "/محصولات",
  },
];

export const navmenu = [
  {
    label: "باکس ها",
    path: "/",
  },
  {
    label: "خزنده ها و موش ها",
    path: "/",
  },
  {
    label: "مکمل تقویتی و دارو",
    path: "/",
  },
  {
    label: "خاک و بستر",
    path: "/",
  },
  {
    label: "ملزومات و تجهیزات",
    path: "/",
  },
  {
    label: "خوراک ها",
    path: "/",
  },
];

export const footer = {
  logos: [
    {
      label: "developer's logo",
      logo: Logo_1,
      path: "/",
    },
    {
      label: "developer's logo",
      logo: Logo_1,
      path: "/",
    },
    {
      label: "developer's logo",
      logo: Logo_1,
      path: "/",
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
          label: "مقالات",
          path: "/",
        },
        {
          label: "محصولات",
          path: "/",
        },
        {
          label: "دسته بندی ها",
          path: "/",
        },
      ],
    },
  ],
};

export const social = [
  {
    path: "/",
    iconClass: "fa-instagram",
    colorClass: "hover:bg-pink-600",
  },
  {
    path: "/",
    iconClass: "fa-whatsapp",
    colorClass: "hover:bg-green-500",
  },
  {
    path: "/",
    iconClass: "fa-telegram",
    colorClass: "hover:bg-sky-500",
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
  home: [
    {
      title: "تایتل الکی همینجوری؟",
      paragraph:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
    },
    {
      title: "تایتل الکی همینجوری؟",
      paragraph:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با.",
    },
    {
      title: "تایتل الکی",
      paragraph:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با.",
    },
  ],
  policy: {
    overall: [
      {
        title: "تایتل الکی همینجوری؟",
        paragraph:
          "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با.",
      },
      {
        title: "تایتل الکی",
        paragraph:
          "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با.",
      },
    ],
    categories: [
      {
        title: "تایتل الکی همینجوری؟",
        paragraph:
          "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با.",
      },
      {
        title: "تایتل الکی",
        paragraph:
          "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با.",
      },
      {
        title: "تایتل الکی",
        paragraph:
          "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با.",
      },
    ],
  },
  product: [
    {
      title: "تایتل الکی همینجوری؟",
      paragraph:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با.",
    },
    {
      title: "تایتل الکی",
      paragraph:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با.",
    },
  ],
  blog: [
    {
      title: "تایتل الکی همینجوری؟",
      paragraph:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با.",
    },
    {
      title: "تایتل الکی",
      paragraph:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با.",
    },
  ],
  snail: [
    {
      title: "تایتل الکی همینجوری؟",
      paragraph:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با.",
    },
    {
      title: "تایتل الکی",
      paragraph:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با.",
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
  Policy: {
    cover: Hero_1,
    title: "قوانین و مقررات",
    path: "#firstSection",
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
  blogs: {
    cover: hero_blog,
    title: "هر چیزی که باید درمورد یه حلزون ها بدونی",
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
          icon: "fa-duotone fa-solid fa-phone",
          label: "ثابت",
          describe: "+1 518 879 654",
        },
        {
          icon: "fa-duotone fa-solid fa-mobile",
          label: "همراه (حلزون)",
          describe: "+98 933-572-0649",
        },
        {
          icon: "fa-duotone fa-solid fa-mobile",
          label: "همراه (خزنده)",
          describe: "+98 933-572-0649",
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

export const blogControl = {
  shareButtons: [
    {
      title: "اشتراک با واتساپ",
      icon: "fa-brands fa-whatsapp",
      href: "",
    },
    {
      title: "اشتراک با اینستاگرام",
      icon: "fa-brands fa-instagram",
      href: "",
    },
    {
      title: "اشتراک با تلگرام",
      icon: "fa-brands fa-telegram",
      href: "",
    },
    {
      title: "اشتراک گذاری",
      icon: "fa-regular fa-share-nodes",
      href: "",
    },
  ],
};

export const infoValue = [
  {
    icon: "fa-solid fa-brain",
    title: "بهترین ورزش ذهن",
    describe:
      "ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
  },
  {
    icon: "fa-solid fa-brain",
    title: "بهترین ورزش ذهن",
    describe:
      "ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
  },
  {
    icon: "fa-solid fa-brain",
    title: "بهترین ورزش ذهن",
    describe:
      "ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
  },
  {
    icon: "fa-solid fa-brain",
    title: "بهترین ورزش ذهن",
    describe:
      "ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
  },
];
