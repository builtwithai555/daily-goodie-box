const heroImages = [
  'https://luxe-assets.com/dgb/images/hero-slider/1.webp',
  'https://luxe-assets.com/dgb/images/hero-slider/2.webp',
  'https://luxe-assets.com/dgb/images/hero-slider/3.webp',
  'https://luxe-assets.com/dgb/images/hero-slider/4.webp',
];

const heroSlide = document.getElementById('heroSlide');
let heroImageIndex = 0;

if (heroSlide) {
  setInterval(() => {
    heroImageIndex = (heroImageIndex + 1) % heroImages.length;
    heroSlide.src = heroImages[heroImageIndex];
  }, 4000);
}
