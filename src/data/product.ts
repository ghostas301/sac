export interface ColorVariant {
  id: string;
  name: string;
  subtitle: string;
  primaryHex: string;
  accentHex?: string;
  image: string;
}

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  caption: string;
}

export const WHATSAPP_DISPLAY_NUMBER = '0728338276';
export const WHATSAPP_INTL_NUMBER = '212728338276';

export const PRODUCT_TITLE = 'حقيبة كتف مضادة للسرقة';
export const PRODUCT_PRICE_VALUE = 135;
export const PRODUCT_PRICE_DISPLAY = '135 درهم';
export const PRODUCT_PRICE_CODE = '135 MAD';

export const COLOR_VARIANTS: ColorVariant[] = [
  {
    id: 'black-classic',
    name: 'أسود كلاسيكي',
    subtitle: 'تصميم موحد أنيق ومحايد للعمل والسفر',
    primaryHex: '#18181B',
    image: '/assets/aistudio/sac3_b2cba945.jpg',
  },
  {
    id: 'black-cognac',
    name: 'أسود بلمسة بني',
    subtitle: 'هيكل أسود مع حافة جانبية باللون البني الكلاسيكي',
    primaryHex: '#18181B',
    accentHex: '#9A5B32',
    image: '/assets/aistudio/sac_1dc546f4.webp',
  },
  {
    id: 'grey-cognac',
    name: 'رمادي بلمسة بني',
    subtitle: 'رمادي عصري متباين مع تفاصيل بنية دافئة',
    primaryHex: '#52525B',
    accentHex: '#9A5B32',
    image: '/assets/aistudio/sac1_88014c48.jpg',
  },
  {
    id: 'slate-grey',
    name: 'رمادي معدني',
    subtitle: 'درجة رمادية داكنة عملية لجميع الإطلالات اليومية',
    primaryHex: '#3F3F46',
    image: '/assets/aistudio/sac2_9e19a95b.jpg',
  },
];

export const GALLERY_IMAGES: GalleryItem[] = [
  {
    id: 'gallery-1',
    src: '/assets/aistudio/sac_1dc546f4.webp',
    alt: 'حقيبة كتف مضادة للسرقة مع منفذ شحن USB وتصميم مريح على الكتف',
    caption: 'منفذ شحن USB مدمج وتصميم عصري للارتداء اليومي',
  },
  {
    id: 'gallery-2',
    src: '/assets/aistudio/sac1_88014c48.jpg',
    alt: 'الألوان المتوفرة لحقيبة الكتف المضادة للسرقة',
    caption: 'تشكيلة الألوان الأنيقة والمحايدة بتفاصيل دقيقة',
  },
  {
    id: 'gallery-3',
    src: '/assets/aistudio/sac2_9e19a95b.jpg',
    alt: 'استخدام الحقيبة أثناء ركوب الدراجة مع شحن الهاتف عبر منفذ USB',
    caption: 'ثبات مريح أثناء القيادة والتنقل مع شحن مستمر للهاتف',
  },
  {
    id: 'gallery-4',
    src: '/assets/aistudio/sac3_b2cba945.jpg',
    alt: 'تفاصيل القفل المركب والمقبض العلوي لحقيبة الكتف المضادة للسرقة',
    caption: 'قفل مركب بالأرقام TSA ومقبض يدوي عملي ومتين',
  },
];

export const POCKET_SPECS = [
  {
    group: 'الجيب الرئيسي الواسع',
    items: [
      'جيب داخلي آمن بسحاب متين للمقتنيات الثمينة',
      'جيب مسطح مبطن يتسع لجهاز لوحي مقاس 9.7 بوصة',
      'مساحة إضافية منظمة للمحفظة والملحقات اليومية',
    ],
  },
  {
    group: 'الجيوب الخارجية الذكية',
    items: [
      'جيب أمامي بسحاب سريع الوصول للمفاتيح والمناديل وأحمر الشفاه',
      'جيب مدمج على حزام الكتف للبطاقات أو المقتنيات الصغيرة',
      'جيب خلفي مخفي بسحاب لحماية الهاتف وجواز السفر',
    ],
  },
];

export const USAGE_MODES = [
  { label: 'حقيبة كتف', context: 'للتنقل اليومي' },
  { label: 'حقيبة صدر', context: 'أمان مضاعف في الزحام' },
  { label: 'حقيبة مراسلة', context: 'للمكتب والجامعة' },
  { label: 'حقيبة ظهر مدمجة', context: 'للعمل والمدرسة' },
  { label: 'حقيبة سفر', context: 'لتخزين مستلزمات الرحلات' },
  { label: 'حقيبة رياضية', context: 'للدراجات والمشي والجري' },
  { label: 'حقيبة يومية كاجوال', context: 'لإطلالة عصرية بسيطة' },
  { label: 'حقيبة عمل', context: 'لحمل التابلت 9.7 بوصة' },
];
