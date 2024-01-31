const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".yo_page_1",
    start: "60% 60%",
    end: "+=800",
    scrub: 2,
    pin: true,
   // markers: true
  }
});

//window.addEventListener('resize',())


tl.to(".b", { scale: 30, translateY: '-50vw', translateX: "-50vw", duration: 2 })
tl.to(".logo_img", { opacity: 1, duration: 6 })
///tl.to(".box", { xPercent: 350, duration: 1 })







const tl_2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".yo_page_2",
    start: "30% 30%",
    end: "+=1000",
    scrub: 2,
    pin: true,
   // markers: true
  }
});
tl_2.to(".yo_page_2 .sp_img", {
  translateX: "50vw",
  duration: 2

})

//window.addEventListener('resize',())


const tl_3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".yo_page_3",
    start: "30% 30%",
    end: "+=1000",
    scrub: 2,
    pin: true,
    markers: true
  }
});
tl_3.to(".yo_page_3_box .box", {
  translateX: "-155vw",
  duration: 2

})


gsap.to(".yo_page_4", {
 background:"#00FFBA",
 color:'black',
  duration: 0.1,
  scrollTrigger: {
    trigger: ".yo_page_4",
    start: "30% 30%",
    end: "+=1",
    scrub: 2,
   // markers: true
  }
})







const tl_4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".yo_page_4",
    start: "30% 30%",
    end: "+=1000",
    scrub: 2,
    pin: true,
   // markers: true
  }
});
tl_4.to(".yo_page_4 .sp_img", {
  translateX: "50vw",
  duration: 2,

})






const tl_5= gsap.timeline({
  scrollTrigger: {
    trigger: ".yo_page_5",
    start: "30% 30%",
    end: "+=1000",
    scrub: 2,
    pin: true,
    markers: true
  }
});
tl_5.to(".yo_page_5 .yo_page_3_box .box", {
  translateX: "-155vw",
  duration: 2,

})
