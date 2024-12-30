window.addEventListener("DOMContentLoaded", function () {
  const bannerSlide = document.getElementById("banner-slide");
  if (bannerSlide) {
    const gap = 8;
    let slideInterval;
    const itemHeight = 60;
    let activeSlide = 0;
    const bannerRail = document.getElementById("banner-slide-rail");
    const slideItems = bannerRail.getElementsByClassName("banner-slide-item");

    setTimeout(() => {
      switchSlide();
      startInterval();
    }, 300);

    const startInterval = () => {
      slideInterval = setInterval(switchSlide, 5000);
    };

    Array.from(slideItems).forEach((element) => {
      element.addEventListener("mouseover", () => {
        clearInterval(slideInterval);
        // console.log("over");
      });
      element.addEventListener("mouseout", () => {
        // console.log("out");
        startInterval();
      });
    });

    const switchSlide = () => {
      if (!bannerRail && slideItems.length === 0) return;
      bannerRail.style.transform = `translateY(-${activeSlide * (itemHeight + gap)}px)`;
      Array.from(slideItems).forEach((element, index) => {
        element.classList.remove("active");
        if (index === activeSlide) element.classList.add("active");
      });
      activeSlide++;
      if (activeSlide === slideItems.length) activeSlide = 0;
    };
  }
});
