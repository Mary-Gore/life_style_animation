const animMenu =() => {
  const tlMenu = gsap.timeline();
  tlMenu.to(".header__burger-menu-wrap", {
    opacity: 1,
    right: 0,
    duration: 0.6,
    scrub: true,
  })

  tlMenu.pause();

  document.querySelector('.header__burger').addEventListener('click', () => {
    tlMenu.play();
  });

  document.querySelector('.close-wrap').addEventListener('click', () => {
    tlMenu.reverse();
  });
};

export default animMenu;
  