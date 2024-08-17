const marqueAnimation = () => {
  window.addEventListener('wheel', e => {
    if ( e.deltaY > 0) {
      gsap.to('.marque.left', {
        transform: 'translateX(-200%)',
        duration: 4,
        repeat: -1,
        ease: 'none'
      });

      gsap.to('.marque.right', {
        transform: 'translateX(0%)',
        duration: 4,
        repeat: -1,
        ease: 'none'
      });
    } else {
      gsap.to('.marque.left', {
        transform: 'translateX(0%)',
        duration: 4,
        repeat: -1,
        ease: 'none'
      });

      gsap.to('.marque.right', {
        transform: 'translateX(-200%)',
        duration: 4,
        repeat: -1,
        ease: 'none'
      });
    }
  }) 
};

export default marqueAnimation;
