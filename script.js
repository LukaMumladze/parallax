window.addEventListener("scroll", function () {
  const scrollPosition = window.scrollY;
  const viewportHeight = window.innerHeight;

  document.querySelectorAll(".parallax-container").forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionBottom = sectionTop + sectionHeight;

    if (scrollPosition + viewportHeight > sectionTop && scrollPosition < sectionBottom) {
      const relativeScroll = scrollPosition - sectionTop;

      section.querySelectorAll(".parallax-element").forEach((element) => {
        const speed = parseFloat(element.dataset.speed) || 0.5;

        const maxMove = 200; 
        const moveAmount = Math.min(relativeScroll * speed, maxMove);

        element.style.transform = `translateY(${moveAmount}px)`;
      });
    }
  });
});