import { useState } from 'react';
import { ColorsAndUsageSection } from './components/ColorsAndUsageSection';
import { FeaturesSection } from './components/FeaturesSection';
import { HeroSection } from './components/HeroSection';
import { Navbar } from './components/Navbar';
import { OrderSection } from './components/OrderSection';
import {
  COLOR_VARIANTS,
  GALLERY_IMAGES,
  PRODUCT_PRICE_DISPLAY,
  PRODUCT_TITLE,
  WHATSAPP_DISPLAY_NUMBER,
  type ColorVariant,
} from './data/product';

export default function App() {
  const [selectedColor, setSelectedColor] = useState<ColorVariant>(
    COLOR_VARIANTS[1]
  );
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

  const scrollToOrder = () => {
    const el = document.getElementById('order-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSelectColor = (color: ColorVariant) => {
    setSelectedColor(color);
    const galleryIndex = GALLERY_IMAGES.findIndex(
      (item) => item.src === color.image
    );
    if (galleryIndex !== -1) {
      setActiveImageIndex(galleryIndex);
    }
  };

  const handleSelectColorAndScroll = (color: ColorVariant) => {
    handleSelectColor(color);
    scrollToOrder();
  };

  return (
    <div dir="rtl" className="min-h-screen flex flex-col bg-[#F7F7F5] text-[#141619]">
      <Navbar onOrderClick={scrollToOrder} />

      <main className="flex-1 pb-16 md:pb-0">
        <HeroSection
          selectedColor={selectedColor}
          onSelectColor={handleSelectColor}
          activeImageIndex={activeImageIndex}
          onSelectImageIndex={setActiveImageIndex}
          onOrderClick={scrollToOrder}
        />

        <FeaturesSection />

        <ColorsAndUsageSection
          selectedColor={selectedColor}
          onSelectColorAndScroll={handleSelectColorAndScroll}
        />

        <OrderSection
          selectedColor={selectedColor}
          onSelectColor={handleSelectColor}
        />
      </main>

      {/* Quiet Footer */}
      <footer className="border-t border-[#E4E4DE] bg-[#F7F7F5] py-8 pb-24 md:pb-8">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-[#52525B]">
          <div className="flex items-center gap-2 font-display font-bold text-[#141619]">
            <span>{PRODUCT_TITLE}</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span>الدفع عند الاستلام</span>
            <span aria-hidden="true">·</span>
            <span>
              واتساب خدمة العملاء:{' '}
              <a
                href="https://wa.me/212728338276"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#141619] hover:text-[#9A5B32] tabular-nums"
                dir="ltr"
              >
                {WHATSAPP_DISPLAY_NUMBER}
              </a>
            </span>
          </div>
        </div>
      </footer>

      {/* Compact Mobile Bottom Sticky Bar (strictly <= 15% viewport height) */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-30 bg-white/95 backdrop-blur-md border-t border-[#E4E4DE] px-4 py-2.5 flex items-center justify-between gap-3">
        <div className="min-w-0">
          <div className="text-xs font-bold text-[#141619] truncate">
            {PRODUCT_TITLE} —{' '}
            <span className="text-[#9A5B32] tabular-nums">
              {PRODUCT_PRICE_DISPLAY}
            </span>
          </div>
          <div className="text-[11px] text-[#52525B] truncate">
            {selectedColor.name} · الدفع عند الاستلام
          </div>
        </div>
        <button
          type="button"
          onClick={scrollToOrder}
          className="px-5 py-2.5 min-h-[42px] bg-[#9A5B32] hover:bg-[#7C4624] text-white font-display font-bold text-sm rounded-lg whitespace-nowrap shrink-0 cursor-pointer"
        >
          اطلب الآن
        </button>
      </div>
    </div>
  );
}
