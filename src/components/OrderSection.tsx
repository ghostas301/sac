import { useState, type FormEvent } from 'react';
import {
  Check,
  CheckCircle2,
  Copy,
  MessageCircle,
  ShieldCheck,
  Truck,
} from 'lucide-react';
import {
  COLOR_VARIANTS,
  PRODUCT_PRICE_CODE,
  PRODUCT_PRICE_DISPLAY,
  PRODUCT_TITLE,
  WHATSAPP_DISPLAY_NUMBER,
  WHATSAPP_INTL_NUMBER,
  type ColorVariant,
} from '../data/product';
import { ResilientImage } from './ResilientImage';

interface OrderSectionProps {
  selectedColor: ColorVariant;
  onSelectColor: (color: ColorVariant) => void;
}

interface FormErrors {
  fullName?: string;
  phone?: string;
  city?: string;
  address?: string;
}

interface SubmittedOrder {
  orderRef: string;
  fullName: string;
  phone: string;
  city: string;
  address: string;
  colorName: string;
  paymentMethod: string;
  whatsappUrl: string;
  formattedMessage: string;
}

const POPULAR_CITIES = [
  'الدار البيضاء',
  'الرباط',
  'مراكش',
  'طنجة',
  'فاس',
  'أكادير',
  'مكناس',
  'وجدة',
];

export function OrderSection({
  selectedColor,
  onSelectColor,
}: OrderSectionProps) {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [paymentMethod] = useState('الدفع عند الاستلام');
  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedOrder, setSubmittedOrder] = useState<SubmittedOrder | null>(
    null
  );
  const [copied, setCopied] = useState(false);

  const validate = (): FormErrors => {
    const nextErrors: FormErrors = {};
    if (fullName.trim().length < 2) {
      nextErrors.fullName = 'يرجى إدخال الاسم الكامل بشكل صحيح';
    }
    const cleanPhone = phone.replace(/[\s\-()]/g, '');
    if (!/^\+?[0-9]{8,15}$/.test(cleanPhone)) {
      nextErrors.phone = 'يرجى إدخال رقم هاتف صحيح (مثال: 0612345678)';
    }
    if (city.trim().length < 2) {
      nextErrors.city = 'يرجى إدخال اسم المدينة';
    }
    if (address.trim().length < 5) {
      nextErrors.address = 'يرجى كتابة العنوان التفصيلي لتوصيل الطلب';
    }
    return nextErrors;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    const orderRef = `BAG-${Math.floor(1000 + Math.random() * 9000)}`;
    const lines = [
      `طلب جديد - ${PRODUCT_TITLE}`,
      `رقم المرجع: ${orderRef}`,
      `-------------------------`,
      `الاسم الكامل: ${fullName.trim()}`,
      `رقم الهاتف: ${phone.trim()}`,
      `المدينة: ${city.trim()}`,
      `العنوان: ${address.trim()}`,
      `اللون المختار: ${selectedColor.name}`,
      `السعر: ${PRODUCT_PRICE_DISPLAY} (${PRODUCT_PRICE_CODE})`,
      `طريقة الدفع: ${paymentMethod}`,
      `-------------------------`,
      `يرجى تأكيد الطلب وتحديد موعد التوصيل.`,
    ];
    const formattedMessage = lines.join('\n');
    const whatsappUrl = `https://wa.me/${WHATSAPP_INTL_NUMBER}?text=${encodeURIComponent(
      formattedMessage
    )}`;

    setSubmittedOrder({
      orderRef,
      fullName: fullName.trim(),
      phone: phone.trim(),
      city: city.trim(),
      address: address.trim(),
      colorName: selectedColor.name,
      paymentMethod,
      whatsappUrl,
      formattedMessage,
    });

    // Safe anchor click (avoids window.open while opening WhatsApp in new tab)
    const link = document.createElement('a');
    link.href = whatsappUrl;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleCopySummary = async () => {
    if (!submittedOrder) return;
    try {
      await navigator.clipboard.writeText(submittedOrder.formattedMessage);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section
      id="order-form"
      className="py-14 sm:py-20 border-t border-[#E4E4DE] bg-white"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10">
          <p className="text-sm font-semibold text-[#9A5B32] mb-2">
            إتمام الطلب بسهولة وأمان
          </p>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#141619] text-balance leading-snug">
            اطلب حقيبتك الآن مع خيار الدفع عند الاستلام
          </h2>
          <p className="text-sm sm:text-base text-[#52525B] mt-2">
            املأ بياناتك وسيتم إرسال طلبك مباشرة إلى واتساب خدمة العملاء (
            <span className="tabular-nums font-semibold text-[#141619]" dir="ltr">
              {WHATSAPP_DISPLAY_NUMBER}
            </span>
            ) مع ضمان سرعة التواصل وتأكيد الطلب عبر رسالة تلقائية.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Selected Product & COD Assurance Summary (5 cols) */}
          <aside className="lg:col-span-5 bg-[#F7F7F5] border border-[#E4E4DE] rounded-2xl p-6 sm:p-7 space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-24 h-24 rounded-xl bg-white border border-[#E4E4DE] overflow-hidden shrink-0">
                <ResilientImage
                  src={selectedColor.image}
                  alt={selectedColor.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-[#141619]">
                  {PRODUCT_TITLE}
                </h3>
                <p className="text-sm text-[#52525B] mt-1">
                  اللون المختار:{' '}
                  <span className="font-bold text-[#9A5B32]">
                    {selectedColor.name}
                  </span>
                </p>
                <div className="flex items-baseline gap-2 mt-1.5">
                  <span className="font-display font-extrabold text-xl text-[#141619] tabular-nums">
                    {PRODUCT_PRICE_DISPLAY}
                  </span>
                  <span
                    className="text-xs font-semibold text-[#52525B] tabular-nums"
                    dir="ltr"
                  >
                    ({PRODUCT_PRICE_CODE})
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-5 border-t border-[#E4E4DE] space-y-4">
              <div className="flex items-start gap-3">
                <Truck className="w-5 h-5 text-[#9A5B32] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-display font-bold text-sm text-[#141619]">
                    الدفع عند الاستلام
                  </h4>
                  <p className="text-xs sm:text-sm text-[#52525B] leading-relaxed mt-0.5">
                    لا حاجة لبطاقة بنكية مسبقاً — ادفع نقداً عند استلام الحقيبة
                    وفحصها بنفسك.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MessageCircle className="w-5 h-5 text-[#047857] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-display font-bold text-sm text-[#141619]">
                    تأكيد فوري عبر رسالة تلقائية
                  </h4>
                  <p className="text-xs sm:text-sm text-[#52525B] leading-relaxed mt-0.5">
                    بمجرد الضغط على زر «اطلب الآن»، تُرسل تفاصيل طلبك مباشرة
                    إلى الرقم{' '}
                    <span
                      className="font-bold text-[#141619] tabular-nums"
                      dir="ltr"
                    >
                      {WHATSAPP_DISPLAY_NUMBER}
                    </span>{' '}
                    مع تأكيد سريع لموعد الشحن.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#9A5B32] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-display font-bold text-sm text-[#141619]">
                    جودة مضمونة ومطابقة للصور
                  </h4>
                  <p className="text-xs sm:text-sm text-[#52525B] leading-relaxed mt-0.5">
                    قماش أكسفورد متين مقاوم للماء والخدش وسحابات معدنية عالية
                    التحمل.
                  </p>
                </div>
              </div>
            </div>
          </aside>

          {/* Form or Confirmation State (7 cols) */}
          <div className="lg:col-span-7 bg-[#F7F7F5] border border-[#E4E4DE] rounded-2xl p-6 sm:p-8">
            {submittedOrder ? (
              <div className="space-y-6" role="status" aria-live="polite">
                <div className="flex items-start gap-3.5 pb-5 border-b border-[#E4E4DE]">
                  <CheckCircle2 className="w-7 h-7 text-[#047857] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-semibold text-[#047857] mb-1">
                      رسالة تأكيد تلقائية · المرجع{' '}
                      <span className="tabular-nums" dir="ltr">
                        {submittedOrder.orderRef}
                      </span>
                    </div>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-[#141619]">
                      تم استلام طلبك بنجاح وجارٍ التوجيه إلى واتساب
                    </h3>
                    <p className="text-sm text-[#3F3F46] mt-1.5 leading-relaxed">
                      شكراً لك {submittedOrder.fullName}. تم تجهيز تفاصيل طلبك
                      لإرسالها إلى فريقنا على واتساب (
                      <span className="tabular-nums font-semibold" dir="ltr">
                        {WHATSAPP_DISPLAY_NUMBER}
                      </span>
                      ) للتواصل السريع وتأكيد التوصيل إلى مدينة{' '}
                      {submittedOrder.city}.
                    </p>
                  </div>
                </div>

                <div className="bg-white border border-[#E4E4DE] rounded-xl p-4 sm:p-5 space-y-2.5 text-sm">
                  <div className="flex justify-between gap-4 py-1 border-b border-[#F0F0EC]">
                    <span className="text-[#52525B]">المنتج</span>
                    <span className="font-semibold text-[#141619]">
                      {PRODUCT_TITLE}
                    </span>
                  </div>
                  <div className="flex justify-between gap-4 py-1 border-b border-[#F0F0EC]">
                    <span className="text-[#52525B]">اللون المختار</span>
                    <span className="font-semibold text-[#9A5B32]">
                      {submittedOrder.colorName}
                    </span>
                  </div>
                  <div className="flex justify-between gap-4 py-1 border-b border-[#F0F0EC]">
                    <span className="text-[#52525B]">الاسم الكامل</span>
                    <span className="font-semibold text-[#141619]">
                      {submittedOrder.fullName}
                    </span>
                  </div>
                  <div className="flex justify-between gap-4 py-1 border-b border-[#F0F0EC]">
                    <span className="text-[#52525B]">رقم الهاتف</span>
                    <span
                      className="font-semibold text-[#141619] tabular-nums"
                      dir="ltr"
                    >
                      {submittedOrder.phone}
                    </span>
                  </div>
                  <div className="flex justify-between gap-4 py-1 border-b border-[#F0F0EC]">
                    <span className="text-[#52525B]">المدينة والعنوان</span>
                    <span className="font-semibold text-[#141619] text-left">
                      {submittedOrder.city} — {submittedOrder.address}
                    </span>
                  </div>
                  <div className="flex justify-between gap-4 py-1 border-b border-[#F0F0EC]">
                    <span className="text-[#52525B]">السعر الإجمالي</span>
                    <span className="font-bold text-[#141619] tabular-nums">
                      {PRODUCT_PRICE_DISPLAY} ({PRODUCT_PRICE_CODE})
                    </span>
                  </div>
                  <div className="flex justify-between gap-4 py-1">
                    <span className="text-[#52525B]">طريقة الدفع</span>
                    <span className="font-semibold text-[#047857]">
                      {submittedOrder.paymentMethod}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <a
                    href={submittedOrder.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-6 py-4 min-h-[50px] bg-[#047857] hover:bg-[#065F46] text-white font-display font-bold text-base rounded-xl transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>تأكيد وإرسال عبر واتساب الآن</span>
                  </a>

                  <button
                    type="button"
                    onClick={handleCopySummary}
                    className="px-5 py-4 min-h-[50px] bg-white hover:bg-[#EFEFEA] text-[#141619] border border-[#D4D4CE] font-semibold text-sm rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
                  >
                    <Copy className="w-4 h-4" />
                    <span>{copied ? 'تم نسخ الطلب' : 'نسخ تفاصيل الطلب'}</span>
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => setSubmittedOrder(null)}
                  className="text-xs font-semibold text-[#52525B] hover:text-[#141619] underline underline-offset-4 cursor-pointer"
                >
                  تعديل بيانات الطلب أو طلب قطعة إضافية
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* Color Picker Inside Form */}
                <div>
                  <label className="block text-sm font-bold text-[#141619] mb-2.5">
                    اختيار اللون المناسب <span className="text-[#9A5B32]">*</span>
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {COLOR_VARIANTS.map((color) => {
                      const isSelected = color.id === selectedColor.id;
                      return (
                        <button
                          key={color.id}
                          type="button"
                          onClick={() => onSelectColor(color)}
                          aria-pressed={isSelected}
                          className={`flex items-center gap-2 px-3 py-2.5 min-h-[44px] rounded-xl border text-right transition-all duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B45309] ${
                            isSelected
                              ? 'bg-white border-[#141619] shadow-sm'
                              : 'bg-white/60 border-[#E2E2DC] hover:bg-white hover:border-[#A1A1AA]'
                          }`}
                        >
                          <span
                            className="w-4 h-4 rounded-full shrink-0 border border-black/15 flex items-center justify-center relative overflow-hidden"
                            style={{ backgroundColor: color.primaryHex }}
                          >
                            {color.accentHex && (
                              <span
                                className="absolute inset-y-0 left-0 w-1.5"
                                style={{ backgroundColor: color.accentHex }}
                              />
                            )}
                            {isSelected && (
                              <Check
                                className="w-2.5 h-2.5 text-white relative z-10"
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

                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="order-fullname"
                      className="block text-sm font-bold text-[#141619] mb-1.5"
                    >
                      الاسم الكامل <span className="text-[#9A5B32]">*</span>
                    </label>
                    <input
                      id="order-fullname"
                      type="text"
                      value={fullName}
                      onChange={(e) => {
                        setFullName(e.target.value);
                        if (errors.fullName)
                          setErrors((prev) => ({ ...prev, fullName: undefined }));
                      }}
                      placeholder="مثال: محمد العلمي"
                      className={`w-full px-4 py-3 min-h-[46px] bg-white border rounded-xl text-sm text-[#141619] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#9A5B32]/30 focus:border-[#9A5B32] ${
                        errors.fullName ? 'border-[#DC2626]' : 'border-[#D4D4CE]'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="text-xs text-[#DC2626] mt-1 font-medium">
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="order-phone"
                      className="block text-sm font-bold text-[#141619] mb-1.5"
                    >
                      رقم الهاتف <span className="text-[#9A5B32]">*</span>
                    </label>
                    <input
                      id="order-phone"
                      type="tel"
                      dir="ltr"
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                        if (errors.phone)
                          setErrors((prev) => ({ ...prev, phone: undefined }));
                      }}
                      placeholder="06 12 34 56 78"
                      className={`w-full px-4 py-3 min-h-[46px] bg-white border rounded-xl text-sm text-right text-[#141619] tabular-nums placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#9A5B32]/30 focus:border-[#9A5B32] ${
                        errors.phone ? 'border-[#DC2626]' : 'border-[#D4D4CE]'
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-xs text-[#DC2626] mt-1 font-medium">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                {/* City & Address */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="order-city"
                      className="block text-sm font-bold text-[#141619] mb-1.5"
                    >
                      المدينة <span className="text-[#9A5B32]">*</span>
                    </label>
                    <input
                      id="order-city"
                      type="text"
                      list="morocco-cities"
                      value={city}
                      onChange={(e) => {
                        setCity(e.target.value);
                        if (errors.city)
                          setErrors((prev) => ({ ...prev, city: undefined }));
                      }}
                      placeholder="اختر أو اكتب مدينتك"
                      className={`w-full px-4 py-3 min-h-[46px] bg-white border rounded-xl text-sm text-[#141619] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#9A5B32]/30 focus:border-[#9A5B32] ${
                        errors.city ? 'border-[#DC2626]' : 'border-[#D4D4CE]'
                      }`}
                    />
                    <datalist id="morocco-cities">
                      {POPULAR_CITIES.map((cityName) => (
                        <option key={cityName} value={cityName} />
                      ))}
                    </datalist>
                    {errors.city && (
                      <p className="text-xs text-[#DC2626] mt-1 font-medium">
                        {errors.city}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="order-address"
                      className="block text-sm font-bold text-[#141619] mb-1.5"
                    >
                      العنوان <span className="text-[#9A5B32]">*</span>
                    </label>
                    <input
                      id="order-address"
                      type="text"
                      value={address}
                      onChange={(e) => {
                        setAddress(e.target.value);
                        if (errors.address)
                          setErrors((prev) => ({ ...prev, address: undefined }));
                      }}
                      placeholder="الحي، الشارع، رقم المنزل"
                      className={`w-full px-4 py-3 min-h-[46px] bg-white border rounded-xl text-sm text-[#141619] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#9A5B32]/30 focus:border-[#9A5B32] ${
                        errors.address ? 'border-[#DC2626]' : 'border-[#D4D4CE]'
                      }`}
                    />
                    {errors.address && (
                      <p className="text-xs text-[#DC2626] mt-1 font-medium">
                        {errors.address}
                      </p>
                    )}
                  </div>
                </div>

                {/* Cash On Delivery Option */}
                <div className="bg-white border border-[#141619] rounded-xl px-4 py-3.5 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#141619] text-white flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3" strokeWidth={3} />
                    </span>
                    <div>
                      <div className="font-display font-bold text-sm text-[#141619]">
                        الدفع عند الاستلام
                      </div>
                      <div className="text-xs text-[#52525B]">
                        ادفع المبلغ نقداً عند استلام الحقيبة من الموزع
                      </div>
                    </div>
                  </div>
                  <div className="text-left shrink-0">
                    <div className="font-display font-extrabold text-base text-[#141619] tabular-nums">
                      {PRODUCT_PRICE_DISPLAY}
                    </div>
                    <div className="text-[11px] font-semibold text-[#047857]" dir="ltr">
                      {PRODUCT_PRICE_CODE}
                    </div>
                  </div>
                </div>

                {/* Submit CTA */}
                <button
                  type="submit"
                  className="w-full px-8 py-4 min-h-[54px] bg-[#9A5B32] hover:bg-[#7C4624] active:scale-[0.99] text-white font-display font-bold text-lg rounded-xl transition-all duration-150 cursor-pointer flex items-center justify-center gap-2.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#141619]"
                >
                  <span>اطلب الآن</span>
                </button>

                <p className="text-xs text-center text-[#52525B] leading-relaxed">
                  يتم إرسال الطلب مباشرة إلى رقم الواتساب{' '}
                  <span
                    className="font-semibold text-[#141619] tabular-nums"
                    dir="ltr"
                  >
                    {WHATSAPP_DISPLAY_NUMBER}
                  </span>{' '}
                  مع ضمان سرعة التواصل وتأكيد الطلب عبر رسالة تلقائية.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
