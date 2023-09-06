var tl=gsap.timeline()

tl.from("#nav h1",{
    y:-50,
    delay:0.4,
    opacity:0,
    duration:1,
    stagger:0.4
})

tl.from("#text h1",{
    x:-150,
    opacity:0,
    duration:1,
    stagger:0.4


})
tl.from("#nav3 h1",{
    y:50,
    delay:0.4,
    opacity:0,
    duration:1,
    stagger:0.4
})

tl.from("#img1",{
   z:-100,
    rotate:720,
    delay:0.4,
    opacity:-0.5,
    duration:1,
    
    stagger:0.4
})

tl.from("#img2",{
    y:-100,
      rotate:400,
      delay:0.4,
      opacity:-0.5,
      duration:1,

      stagger:0.4
  })
  tl.from("#img3",{
    z:-100,
      rotate:180,
      delay:0.4,
      opacity:-0.5,
      duration:1,
    
      stagger:0.4
  })
  
