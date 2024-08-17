const animationAdvantages = () => {
  gsap.registerPlugin(ScrollTrigger);
   gsap.from('.advantages__title', {
    opacity: 0,
    x: "-100%",
    duration: 2,
    scrollTrigger: {
      trigger: ".advantages__title",
      start: "-400px top",
      end: "+=100px",
    }
  }),
  gsap.from('#advantages-para1', {
    opacity: 0,
    y: "-100%",
    duration: 2,
    scrollTrigger: {
      trigger: "#advantages-para1",
      start: "-300px top",
    }
  })
  gsap.from('#advantages-para2', {
    opacity: 0,
    y: "-50%",
    duration: 2,
    scrollTrigger: {
    trigger: "#advantages-para2",
    start: "-50px top",
   }
 }),
 gsap.to('.advantages .big-star2', {
  opacity: 1,
  duration: 2,
  right: 0,
  scrollTrigger: {
    trigger: ".advantages .big-star2",
    start: "top center",
    markers: true
   },
  rotate: 360,
})
};

export default animationAdvantages;