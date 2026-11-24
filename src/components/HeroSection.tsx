import { Check, Lock, ShieldCheck, Usb } from 'lucide-react';
import {
  COLOR_VARIANTS,
  GALLERY_IMAGES,
  PRODUCT_PRICE_CODE,
  PRODUCT_PRICE_DISPLAY,
  PRODUCT_TITLE,
  type ColorVariant,
} from '../data/product';
import { ResilientImage } from './ResilientImage';

interface HeroSectionProps {
  selectedColor: ColorVariant;
  onSelectColor: (color: ColorVariant) => void;
  activeImageIndex: number;
  onSelectImageIndex: (index: number) => void;
  onOrderClick: () => void;
}

export function HeroSection({
  selectedColor,
  onSelectColor,
  activeImageIndex,
  onSelectImageIndex,
  onOrderClick,
}: HeroSectionProps) {
  const activePhoto = GALLERY_IMAGES[activeImageIndex] || GALLERY_IMAGES[0];

  const handleColorClick = (color: ColorVariant) => {
    onSelectColor(color);
    const matchingGalleryIdx = GALLERY_IMAGES.findIndex(
      (item) => item.src === color.image
    );
    if (matchingGalleryIdx !== -1) {
      onSelectImageIndex(matchingGalleryIdx);
    }
  };

  return (
    <section id="top" className="pt-8 pb-12 sm:pt-12 sm:pb-16 lg:pt-14 lg:pb-20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 2-column split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Copy & Purchase Control Column (Right in RTL) */}
          <div className="lg:col-span-6 flex flex-col justify-between py-2">
            <div>
              {/* Quiet unboxed metadata line */}
              <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-medium text-[#52525B] mb-4">
                <span>قماش أكسفورد مقاوم للماء</span>
                <span aria-hidden="true">·</span>
                <span>قفل TSA مضاد للسرقة</span>
                <span aria-hidden="true">·</span>
                <span>منفذ شحن USB</span>
              </div>

              <h1
                className="font-display font-extrabold text-[#141619] leading-[1.2] tracking-tight text-balance mb-5"
                style={{ fontSize: 'clamp(2.15rem, 4vw, 3.5rem)' }}
              >
                {PRODUCT_TITLE}
              </h1>

              <p className="text-base sm:text-lg text-[#3F3F46] leading-[1.75] max-w-xl mb-7">
                رفيقك اليومي للسفر والعمل والتنقل بذكاء وأمان. تجمع بين قفل مركب
                مضاد للسرقة، قماش مقاوم للماء والخدش، منفذ شحن USB عملي، وجيوب
                واسعة ومنظمة تتسع لجهاز لوحي مقاس{' '}
                <span className="tabular-nums font-semibold text-[#141619]">
                  9.7
                </span>{' '}
                بوصة بكل راحة.
              </p>

              {/* Color Selection Module */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-bold text-[#141619]">
                    اختر اللون المناسب:{' '}
                    <span className="text-[#9A5B32]">{selectedColor.name}</span>
                  </span>
                  <span className="text-xs text-[#52525B] tabular-nums">
                    متوفرة بـ 4 ألوان
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {COLOR_VARIANTS.map((color) => {
                    const isSelected = color.id === selectedColor.id;
                    return (
                      <button
                        key={color.id}
                        type="button"
                        onClick={() => handleColorClick(color)}
                        aria-pressed={isSelected}
                        className={`group flex items-center gap-2.5 px-3 py-2.5 min-h-[44px] rounded-xl border text-right transition-all duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B45309] ${
                          isSelected
                            ? 'bg-white border-[#141619] shadow-sm'
                            : 'bg-[#EFEFEA]/70 border-[#E2E2DC] hover:bg-white hover:border-[#A1A1AA]'
                        }`}
                      >
                        <span
                          className="w-5 h-5 rounded-full shrink-0 border border-black/15 flex items-center justify-center relative overflow-hidden"
                          style={{ backgroundColor: color.primaryHex }}
                        >
                          {color.accentHex && (
                            <span
                              className="absolute inset-y-0 left-0 w-2"
                              style={{ backgroundColor: color.accentHex }}
                            />
                          )}
                          {isSelected && (
                            <Check
                              className="w-3 h-3 text-white relative z-10"
                              strokeWidth={3}
                            />
                          )}
                        </span>
                        <span className="text-xs font-semibold text-[#141619] truncate">
                          {color.name}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Primary CTA & COD Assurance */}
            <div className="pt-5 border-t border-[#E4E4DE] space-y-4">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <div className="flex items-baseline gap-2.5">
                  <span className="font-display text-3xl sm:text-4xl font-extrabold text-[#141619] tabular-nums">
                    {PRODUCT_PRICE_DISPLAY}
                  </span>
                  <span
                    className="text-sm font-semibold text-[#52525B] tabular-nums"
                    dir="ltr"
                  >
                    ({PRODUCT_PRICE_CODE})
                  </span>
                </div>
                <span className="text-xs sm:text-sm font-semibold text-[#047857]">
                  الدفع نقداً عند الاستلام
                </span>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  type="button"
                  onClick={onOrderClick}
                  className="px-8 py-4 min-h-[52px] bg-[#9A5B32] hover:bg-[#7C4624] text-white font-display font-bold text-base sm:text-lg rounded-xl transition-all duration-150 active:scale-[0.99] cursor-pointer whitespace-nowrap shrink-0 flex items-center justify-center gap-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#141619]"
                >
                  <span>اطلب الآن</span>
                </button>

                <a
                  href="#features"
                  className="px-6 py-4 min-h-[52px] bg-white hover:bg-[#EFEFEA] text-[#141619] border border-[#D4D4CE] font-semibold text-sm sm:text-base rounded-xl transition-colors flex items-center justify-center whitespace-nowrap shrink-0"
                >
                  اكتشف المواصفات
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs sm:text-sm text-[#3F3F46]">
                <span className="inline-flex items-center gap-1.5 font-medium">
                  <ShieldCheck className="w-4 h-4 text-[#9A5B32]" />
                  <span>الدفع عند الاستلام لجميع المدن</span>
                </span>
                <span className="text-[#A1A1AA]" aria-hidden="true">
                  ·
                </span>
                <span className="inline-flex items-center gap-1.5 font-medium">
                  <Lock className="w-4 h-4 text-[#9A5B32]" />
                  <span>تأكيد سريع عبر رسالة تلقائية</span>
                </span>
              </div>
            </div>
          </div>

          {/* Interactive Product Gallery Column (Left in RTL) */}
          <div className="lg:col-span-6 flex flex-col gap-3">
            <div className="relative bg-white border border-[#E4E4DE] rounded-2xl overflow-hidden flex-1 min-h-[320px] sm:min-h-[420px] flex items-center justify-center">
              <ResilientImage
                src={activePhoto.src}
                alt={activePhoto.alt}
                className="w-full h-full max-h-[480px] object-contain p-3 sm:p-5 transition-opacity duration-200"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#141619]/80 via-[#141619]/40 to-transparent px-5 py-4">
                <p className="text-xs sm:text-sm font-medium text-white">
                  {activePhoto.caption}
                </p>
              </div>
            </div>

            {/* Thumbnail Strip */}
            <div className="grid grid-cols-4 gap-2.5">
              {GALLERY_IMAGES.map((item, idx) => {
                const isActive = idx === activeImageIndex;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => onSelectImageIndex(idx)}
                    aria-label={`عرض الصورة ${idx + 1}: ${item.caption}`}
                    className={`relative aspect-square rounded-xl overflow-hidden bg-white border transition-all duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B45309] ${
                      isActive
                        ? 'border-[#141619] ring-1 ring-[#141619]'
                        : 'border-[#E4E4DE] opacity-80 hover:opacity-100'
                    }`}
                  >
                    <ResilientImage
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-full object-cover"
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Full-Width 4-Column Specifications Strip */}
        <div className="mt-10 sm:mt-12 bg-white border border-[#E4E4DE] rounded-2xl grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x lg:divide-x-reverse divide-[#E4E4DE]">
          <div className="p-5 sm:p-6">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs font-medium text-[#52525B]">
                السعة الداخلية
              </span>
              <span className="text-xs font-semibold text-[#9A5B32]">جيب مسطح</span>
            </div>
            <div className="font-display text-xl sm:text-2xl font-bold text-[#141619] tabular-nums">
              9.7 بوصة
            </div>
            <p className="text-xs text-[#52525B] mt-1">
              مناسب للأجهزة اللوحية والمقتنيات اليومية
            </p>
          </div>

          <div className="p-5 sm:p-6">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs font-medium text-[#52525B]">
                نظام الحماية
              </span>
              <Lock className="w-4 h-4 text-[#9A5B32]" />
            </div>
            <div className="font-display text-xl sm:text-2xl font-bold text-[#141619] tabular-nums">
              قفل TSA
            </div>
            <p className="text-xs text-[#52525B] mt-1">
              سحاب مزدوج القناة مع قفل مركب مضاد للسرقة
            </p>
          </div>

          <div className="p-5 sm:p-6">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs font-medium text-[#52525B]">
                الشحن أثناء التنقل
              </span>
              <Usb className="w-4 h-4 text-[#9A5B32]" />
            </div>
            <div className="font-display text-xl sm:text-2xl font-bold text-[#141619] tabular-nums">
              منفذ USB
            </div>
            <p className="text-xs text-[#52525B] mt-1">
              توصيل سريع ومريح للهاتف في أي وقت
            </p>
          </div>

          <div className="p-5 sm:p-6">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs font-medium text-[#52525B]">
                خامة التصنيع
              </span>
              <ShieldCheck className="w-4 h-4 text-[#9A5B32]" />
            </div>
            <div className="font-display text-xl sm:text-2xl font-bold text-[#141619]">
              أكسفورد
            </div>
            <p className="text-xs text-[#52525B] mt-1">
              مقاوم للماء والخدش والتمزق عالي الكثافة
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
