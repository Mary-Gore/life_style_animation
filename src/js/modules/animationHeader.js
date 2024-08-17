const animationHeader = () => {
  const tlHeader = gsap.timeline();

  tlHeader.from('.header__bar-wrap',{
    opacity: 0,
    duration: 3
  })
};

export default animationHeader;