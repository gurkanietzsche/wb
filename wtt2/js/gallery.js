
const swiper = new Swiper(".swiper-slider", {
    // Optional parameters
    centeredSlides: true,
    slidesPerView: 1,
    grabCursor: true,
    freeMode: false,
    loop: true,
    mousewheel: false,
    keyboard: {
      enabled: true
    },
  
    // Enabled autoplay mode
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
  
    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: false,
      clickable: true
    },
  
    // If we need navigation
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
  
    // Responsive breakpoints
    breakpoints: {
      640: {
        slidesPerView: 1.25,
        spaceBetween: 20
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 20
      }
    }
  });
  const button = document.querySelector("#button");

const animate = (e) => {
	const glow = document.createElement("div");
	glow.classList.add("glow");
	gsap.to(e.currentTarget, {
		keyframes: [
			{
				duration: 2,
				ease: "none",
				onStart: () => {
					button.appendChild(glow);
					gsap.to(glow, {
						inset: "-2em",
						opacity: 0,
						duration: 1.3
					});
				},
				onComplete: () => {
					button.removeChild(glow);
				}
			}
		]
	});
};

button.addEventListener("click", animate);