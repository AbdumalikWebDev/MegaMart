export function handleSlider(container, items, viewAllBtn) {
  let slideIndex = 0;
  const totalSlides = items.length;
  let slideInterval;
  const showSlide = (index) => {
    slideIndex = index;
    container.style.transform = `translateX(-${index * 50}%)`;
  };
  const nextSlide = () => {
    slideIndex = (slideIndex + 1) % totalSlides;
    showSlide(slideIndex);
  };
  const startAutoSlide = () => {
    slideInterval = setInterval(nextSlide, 3000);
  };
  const stopAutoSlide = () => {
    clearInterval(slideInterval);
  };
  if (viewAllBtn) {
    viewAllBtn.addEventListener("click", () => {
      container.style.transition = "all 0s";
      setTimeout(() => {
        container.style.transition = "all 0.5s";
      }, 300);
      viewAllBtn.classList.toggle("stop-slide");
      container.classList.toggle("wrap");

      if (viewAllBtn.classList.contains("stop-slide")) {
        stopAutoSlide();
        container.style.transform = "none";
      } else {
        startAutoSlide();
        showSlide(slideIndex);
      }

      viewAllBtn.disabled = true;
      setTimeout(() => {
        viewAllBtn.disabled = false;
      }, 1000);
    });
  }
  startAutoSlide();
  showSlide(slideIndex);
}
