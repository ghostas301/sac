interface NavbarProps {
  onOrderClick: () => void;
}

export function Navbar({ onOrderClick }: NavbarProps) {
  return (
    <header className="sticky top-0 z-40 bg-[#F7F7F5]/95 backdrop-blur-md border-b border-[#E4E4DE]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (single text element) */}
        <a
          href="#top"
          className="font-display text-lg sm:text-xl font-bold tracking-tight text-[#141619] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B45309] rounded-sm"
        >
          حقيبة الأمان
        </a>

        {/* Zone 2: 4 concise single-line nav links */}
        <nav
          aria-label="التنقل الرئيسي"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-[#4B5563]"
        >
          <a
            href="#features"
            className="hover:text-[#141619] hover:underline underline-offset-8 decoration-[#B45309] transition-colors whitespace-nowrap shrink-0 py-2"
          >
            المميزات
          </a>
          <a
            href="#pockets"
            className="hover:text-[#141619] hover:underline underline-offset-8 decoration-[#B45309] transition-colors whitespace-nowrap shrink-0 py-2"
          >
            التقسيم الداخلي
          </a>
          <a
            href="#colors"
            className="hover:text-[#141619] hover:underline underline-offset-8 decoration-[#B45309] transition-colors whitespace-nowrap shrink-0 py-2"
          >
            الألوان والاستخدام
          </a>
          <a
            href="#order-form"
            className="hover:text-[#141619] hover:underline underline-offset-8 decoration-[#B45309] transition-colors whitespace-nowrap shrink-0 py-2"
          >
            الدفع عند الاستلام
          </a>
        </nav>

        {/* Zone 3: Single primary CTA */}
        <div className="flex items-center shrink-0">
          <button
            type="button"
            onClick={onOrderClick}
            className="px-5 py-2.5 min-h-[42px] bg-[#141619] text-white text-sm font-semibold rounded-lg hover:bg-[#9A5B32] active:scale-[0.98] transition-all duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B45309]"
          >
            اطلب الآن
          </button>
        </div>
      </div>
    </header>
  );
}
