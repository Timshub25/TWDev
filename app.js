const get = (element) => document.querySelector(element);
const width = document.querySelector(".width");
window.onresize = () => {
  width.innerHTML = window.innerWidth;
};

//Navigation
// const navigation = document.querySelector(".navigation");
// const burger = document.querySelector(".burger");
// const line1 = get(".line1");
// const line2 = get(".line2");

// burger.addEventListener("click", (e) => {
//   navigation.classList.toggle("nav-active");
//   line1.classList.toggle("rotate-left");
//   line2.classList.toggle("rotate-right");
// });

function contentAnimation() {
  let tl = gsap.timeline();
  tl.from(".home-info", { duration: 2, translateX: 100, opacity: 0 }, "-=.5");
  tl.fromTo(".about-cta", { duration: 0.5, opacity: 0 }, { opacity: 1 }, "-=1");
  tl.fromTo(
    ".work-cta",
    { duration: 0.5, opacity: 0, delay: 0.3 },
    { opacity: 1 },
    "-=.4"
  );
}

function pageTransition() {
  let tl = gsap.timeline();
  tl.to(".loading-screen", {
    duration: 0.8,
    width: "100%",
    left: "0%",
    ease: "Expo.easeInOut",
  });

  tl.to(".loading-screen", {
    duration: 0.8,
    width: "100%",
    left: "100%",
    ease: "Expo.easeInOut",
    delay: 0.3,
  });
  tl.set(".loading-screen", { left: "-100%" });
}

function delay(n) {
  n = n || 2000;
  return new Promise((done) => {
    setTimeout(() => {
      done();
    }, n);
  });
}

barba.init({
  sync: true,
  transitions: [
    {
      async leave(data) {
        const done = this.async();
        pageTransition();
        await delay(1500);
        done();
      },
      async enter(data) {
        contentAnimation();
      },
      async once(data) {
        contentAnimation();
      },
    },
  ],
});
