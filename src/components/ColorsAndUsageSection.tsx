import { Check } from 'lucide-react';
import {
  COLOR_VARIANTS,
  USAGE_MODES,
  type ColorVariant,
} from '../data/product';
import { ResilientImage } from './ResilientImage';

interface ColorsAndUsageSectionProps {
  selectedColor: ColorVariant;
  onSelectColorAndScroll: (color: ColorVariant) => void;
}

export function ColorsAndUsageSection({
  selectedColor,
  onSelectColorAndScroll,
}: ColorsAndUsageSectionProps) {
  return (
    <section id="colors" className="py-14 sm:py-20 border-t border-[#E4E4DE]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Multifunctional Usage Editorial Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <p className="text-sm font-semibold text-[#9A5B32] mb-2">
                تصميم بسيط وأنيق لجميع المناسبات
              </p>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#141619] text-balance leading-snug mb-4">
                حقيبة واحدة متعددة الوظائف
              </h2>
              <p className="text-sm sm:text-base text-[#3F3F46] leading-[1.75] mb-7">
                يمكن استخدامها كحقيبة مراسلة، أو حقيبة كتف، أو حقيبة ظهر، أو
                حقيبة يومية غير رسمية، أو حقيبة صدر، أو حقيبة سفر، أو حقيبة عمل،
                مناسبة للمكتب والمدرسة والترفيه في الهواء الطلق والعمل والمناسبات
                الأخرى.
              </p>

              {/* Clean Usage Grid (unboxed hairline separators, no pill spam) */}
              <div className="grid grid-cols-2 gap-3">
                {USAGE_MODES.map((mode) => (
                  <div
                    key={mode.label}
                    className="bg-white border border-[#E4E4DE] rounded-xl px-4 py-3"
                  >
                    <div className="font-display font-bold text-sm text-[#141619]">
                      {mode.label}
                    </div>
                    <div className="text-xs text-[#52525B] mt-0.5">
                      {mode.context}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white border border-[#E4E4DE] rounded-2xl overflow-hidden flex flex-col">
              <div className="flex-1 min-h-[240px]">
                <ResilientImage
                  src="/assets/aistudio/sac1_88014c48.jpg"
                  alt="تشكيلة الألوان الأنيقة لحقيبة الكتف المضادة للسرقة"
                  className="w-full h-full object-contain p-4 bg-white"
                />
              </div>
              <div className="px-4 py-3 border-t border-[#E4E4DE] bg-[#F7F7F5]">
                <p className="text-xs font-medium text-[#3F3F46]">
                  ألوان محايدة وعملية تناسب جميع الإطلالات
                </p>
              </div>
            </div>

            <div className="bg-white border border-[#E4E4DE] rounded-2xl overflow-hidden flex flex-col">
              <div className="flex-1 min-h-[240px]">
                <ResilientImage
                  src="/assets/aistudio/sac_1dc546f4.webp"
                  alt="ارتداء حقيبة الكتف مع شحن الهاتف عبر منفذ USB"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="px-4 py-3 border-t border-[#E4E4DE] bg-[#F7F7F5]">
                <p className="text-xs font-medium text-[#3F3F46]">
                  توازن مريح على الصدر أو الكتف طوال اليوم
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Color Selector Cards */}
        <div className="pt-10 border-t border-[#E4E4DE]">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-7">
            <div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-[#141619]">
                متوفرة بـ 4 ألوان — اختر مفضلتك الأنيقة والمحايدة والفعالة
              </h3>
              <p className="text-sm text-[#52525B] mt-1">
                اضغط على اللون المفضل لديك لتحديده مباشرة في نموذج الطلب أدناه
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {COLOR_VARIANTS.map((color) => {
              const isSelected = color.id === selectedColor.id;
              return (
                <button
                  key={color.id}
                  type="button"
                  onClick={() => onSelectColorAndScroll(color)}
                  className={`group text-right bg-white rounded-2xl border overflow-hidden transition-all duration-150 hover:-translate-y-0.5 cursor-pointer flex flex-col focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B45309] ${
                    isSelected
                      ? 'border-[#141619] ring-1 ring-[#141619]'
                      : 'border-[#E4E4DE] hover:border-[#A1A1AA]'
                  }`}
                >
                  <div className="aspect-[4/3] w-full bg-white overflow-hidden border-b border-[#E4E4DE]">
                    <ResilientImage
                      src={color.image}
                      alt={`حقيبة كتف مضادة للسرقة - ${color.name}`}
                      className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-200"
                    />
                  </div>
                  <div className="p-4 flex-1 flex flex-col justify-between w-full">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <div className="flex items-center gap-2">
                          <span
                            className="w-4 h-4 rounded-full border border-black/15 shrink-0 relative overflow-hidden"
                            style={{ backgroundColor: color.primaryHex }}
                          >
                            {color.accentHex && (
                              <span
                                className="absolute inset-y-0 left-0 w-1.5"
                                style={{ backgroundColor: color.accentHex }}
                              />
                            )}
                          </span>
                          <span className="font-display font-bold text-base text-[#141619]">
                            {color.name}
                          </span>
                        </div>
                        {isSelected && (
                          <span className="inline-flex items-center gap-1 text-xs font-bold text-[#9A5B32]">
                            <Check className="w-3.5 h-3.5" strokeWidth={2.5} />
                            <span>محدد</span>
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-[#52525B] leading-relaxed">
                        {color.subtitle}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
