const animationHero = () => {
  const tlHero = gsap.timeline();

  tlHero.from('.offer__wrapper .anim-offer', {
    opacity: 0,
    y: -150,
    duration: 1,
    stagger: 0.5,
    delay: 1.5
  }),
  tlHero.from('.offer__btn', {
   y: 100,
   opacity: 0,
   duration: 2,
  }, "animBottom"),
 tlHero.to('.offer .big-star1', {
    opacity: 1,
    duration: 2,
    left: "30%",
    x: "-30%",
    rotate: 360,
  }, "animBottom"),
  tlHero.to('.small-star2', {
    opacity: 1,
    y: -30,
    duration: 2
  }, "-=0.5"),
  tlHero.to('.small-star1', {
    opacity: 1,
    duration: 1
  }, "+=0.1")
}; 

export default animationHero;
