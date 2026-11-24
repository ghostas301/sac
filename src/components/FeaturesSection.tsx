import { Droplets, Layers, Lock, Wind } from 'lucide-react';
import { POCKET_SPECS } from '../data/product';
import { ResilientImage } from './ResilientImage';

export function FeaturesSection() {
  return (
    <section id="features" className="py-14 sm:py-20 border-t border-[#E4E4DE] bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-2xl mb-10 sm:mb-14">
          <p className="text-sm font-semibold text-[#9A5B32] mb-2">
            تصميم هندسي عملي
          </p>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#141619] text-balance leading-snug">
            أمان متكامل، تنظيم ذكي، وراحة طوال اليوم
          </h2>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* 01. Anti-theft TSA Lock (Large Visual Feature Card) */}
          <article className="lg:col-span-7 bg-[#F7F7F5] border border-[#E4E4DE] rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-12">
            <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#52525B] mb-3">
                  <Lock className="w-4 h-4 text-[#9A5B32]" />
                  <span>01. الحماية والأمان</span>
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-[#141619] mb-3">
                  قفل مركب مضاد للسرقة بتقنية TSA
                </h3>
                <p className="text-sm sm:text-base text-[#3F3F46] leading-[1.75]">
                  مزودة بسحاب مزدوج القناة عالي التحمل مع قفل مركب مضاد للسرقة
                  لسهولة الوصول وأمان إضافي. حقيبة مضادة للسرقة مع قفل TSA تحمي
                  مقتنياتك الثمينة من الغرباء في الأماكن المزدحمة وأثناء السفر.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#E4E4DE] flex items-center gap-3 text-xs font-medium text-[#52525B]">
                <span>سحاب مزدوج القناة</span>
                <span aria-hidden="true">·</span>
                <span>أرقام سرية قابلة للضبط</span>
              </div>
            </div>
            <div className="md:col-span-5 min-h-[240px] bg-white">
              <ResilientImage
                src="/assets/aistudio/sac3_b2cba945.jpg"
                alt="قفل مركب TSA ومقبض متين في الحقيبة المضادة للسرقة"
                className="w-full h-full object-cover"
              />
            </div>
          </article>

          {/* 02. Water & Scratch Resistance */}
          <article className="lg:col-span-5 bg-[#141619] text-white rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#D6D3CD] mb-3">
                <Droplets className="w-4 h-4 text-[#E09F67]" />
                <span>02. المتانة والحماية</span>
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-3">
                مقاومة للماء والخدش والتمزق
              </h3>
              <p className="text-sm sm:text-base text-[#D4D4D8] leading-[1.75]">
                مصنوعة من قماش أكسفورد عالي الكثافة مقاوم للتمزق، مع طبقة خارجية
                مقاومة للخدش تمنع الجروح وعلامات الاحتكاك، ومقاومة للماء والرذاذ
                للحفاظ على مقتنياتك جافة دائماً. السحاب المعدني المتين يُغلق
                ويُفتح بسلاسة للاستخدام اليومي الدائم.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/15 flex items-center gap-3 text-xs font-medium text-[#D4D4D8]">
              <span>قماش أكسفورد عالي الكثافة</span>
              <span aria-hidden="true">·</span>
              <span>سحابات معدنية سلسة</span>
            </div>
          </article>

          {/* 03. Spacious Organized Pockets (Full Breakdown) */}
          <article
            id="pockets"
            className="lg:col-span-6 bg-[#F7F7F5] border border-[#E4E4DE] rounded-2xl p-6 sm:p-8 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#52525B] mb-3">
                <Layers className="w-4 h-4 text-[#9A5B32]" />
                <span>03. التنظيم الداخلي والخارجي</span>
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-[#141619] mb-3">
                جيوب واسعة ومنظمة لكل مستلزماتك
              </h3>
              <p className="text-sm sm:text-base text-[#3F3F46] leading-[1.75] mb-6">
                تحمل جهاز لوحي مقاس{' '}
                <span className="tabular-nums font-semibold text-[#141619]">
                  9.7
                </span>{' '}
                بوصات، الهاتف، المحفظة، المفاتيح، أحمر الشفاه، المناديل وأكثر من
                ذلك. رفيق مثالي لتخزين مستلزمات السفر والعمل بترتيب تام.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {POCKET_SPECS.map((section) => (
                  <div
                    key={section.group}
                    className="bg-white border border-[#E4E4DE] rounded-xl p-4"
                  >
                    <h4 className="font-display font-bold text-sm text-[#141619] mb-2.5">
                      {section.group}
                    </h4>
                    <ul className="space-y-2 text-xs sm:text-sm text-[#3F3F46] leading-relaxed">
                      {section.items.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="text-[#9A5B32] font-bold mt-0.5">
                            —
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </article>

          {/* 04. Breathable Comfort & USB Port */}
          <article className="lg:col-span-6 bg-[#F7F7F5] border border-[#E4E4DE] rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-12">
            <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#52525B] mb-3">
                  <Wind className="w-4 h-4 text-[#9A5B32]" />
                  <span>04. الراحة والشحن المستمر</span>
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-[#141619] mb-3">
                  تصميم مسامي يخفف الضغط + منفذ شحن USB
                </h3>
                <p className="text-sm sm:text-base text-[#3F3F46] leading-[1.75]">
                  تجمع بين منفذ شحن USB الخارجي والقفل المركب لتمنحك مظهراً أنيقاً
                  ومواكباً للعصر. تحافظ وسادات الظهر ثلاثية الأبعاد وأحزمة الكتف
                  السميكة على راحة وجفاف ظهرك وأكتافك حتى في أيام الصيف الحارة،
                  مما يقلل الضغط والتعب عند ركوب الدراجات، الجري، المشي لمسافات
                  طويلة، اللياقة البدنية، السفر، وتسلق الجبال.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#E4E4DE] flex items-center gap-3 text-xs font-medium text-[#52525B]">
                <span>وسادات ظهر 3D مسامية</span>
                <span aria-hidden="true">·</span>
                <span>شحن USB أثناء الحركة</span>
              </div>
            </div>
            <div className="md:col-span-5 min-h-[240px] bg-white">
              <ResilientImage
                src="/assets/aistudio/sac2_9e19a95b.jpg"
                alt="شحن الهاتف أثناء ركوب الدراجة عبر منفذ USB في حقيبة الكتف"
                className="w-full h-full object-cover"
              />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
