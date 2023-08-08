var tl = gsap.timeline()

tl.from("#navbar img, #navbar h3, #navbar h4, #navbar button",{
    y:-100,
    duration:1, 
    // time for the Animation,
    delay:0.5,
    // how much time after the Animation starts
    opacity:0,
    // initially the opacity is 0 then it became visible
    stagger:0.2,
    // for one by one animation
})

tl.from("#main h1",{
    y:200,
    opacity:0,
    stagger:0.3,
    
})

tl.from("#main>img",{
    scale:0,
    opacity:0,
    stagger:0.5,
})

tl.to("h5",{
    y:30,
    repeat:-1,
    duration:0.4,
    yoyo:true,
    
})