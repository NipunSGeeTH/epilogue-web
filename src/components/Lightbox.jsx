import { useEffect, useRef, useCallback } from 'react';

export default function Lightbox({ isOpen, onClose, images, index, setIndex }) {
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const nextImage = useCallback((e) => {
    if (e) e.stopPropagation();
    setIndex((prev) => (prev + 1) % images.length);
  }, [images.length, setIndex]);

  const prevImage = useCallback((e) => {
    if (e) e.stopPropagation();
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length, setIndex]);

  // Lightbox Touch Gestures for Mobile Swipe
  const handleTouchStart = useCallback((e) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = e.touches[0].clientX;
  }, []);

  const handleTouchMove = useCallback((e) => {
    touchEndX.current = e.touches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback(() => {
    const diffX = touchStartX.current - touchEndX.current;
    if (diffX > 60) {
      nextImage();
    } else if (diffX < -60) {
      prevImage();
    }
  }, [nextImage, prevImage]);

  // Lightbox Keyboard Navigation
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') nextImage(e);
      if (e.key === 'ArrowLeft') prevImage(e);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, nextImage, prevImage]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[100000] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 transition-all duration-300 select-none"
      onClick={onClose}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Close Button */}
      <button 
        className="absolute top-6 right-6 text-white hover:text-green-400 transition-colors z-50 bg-black/40 hover:bg-black/60 p-2 rounded-full"
        onClick={onClose}
      >
        <span className="material-symbols-outlined text-3xl md:text-4xl">close</span>
      </button>

      {/* Left Arrow */}
      <button 
        className="absolute left-4 md:left-6 text-white hover:text-green-400 transition-colors bg-black/40 hover:bg-black/60 p-2.5 md:p-3 rounded-full flex items-center justify-center z-10"
        onClick={prevImage}
      >
        <span className="material-symbols-outlined text-2xl md:text-3xl">arrow_back_ios_new</span>
      </button>

      {/* Image Container */}
      <div 
        className="relative max-w-4xl w-full max-h-[85vh] flex flex-col items-center scale-up-anim"
        onClick={(e) => e.stopPropagation()}
      >
        <img 
          src={images[index].src} 
          alt={images[index].alt} 
          className="max-h-[60vh] md:max-h-[75vh] object-contain rounded-lg shadow-2xl border border-white/10"
        />
      </div>

      {/* Right Arrow */}
      <button 
        className="absolute right-4 md:right-6 text-white hover:text-green-400 transition-colors bg-black/40 hover:bg-black/60 p-2.5 md:p-3 rounded-full flex items-center justify-center z-10"
        onClick={nextImage}
      >
        <span className="material-symbols-outlined text-2xl md:text-3xl">arrow_forward_ios</span>
      </button>
    </div>
  );
}
