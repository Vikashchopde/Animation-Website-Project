
// locomotive js - smooth scrolling

const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});

// gsap to animate
gsap.to(".nlink", { 
 y: 30, 
  duration: 2,
  Delay: 3,
  ease: "bounce.out",
     opacity: 1,
     // scale: 1.3,
   });

   Shery.textAnimate(".h-mid #h-mid-heading h1" , {
     style: 1,
     y: 10,
     delay: 0.2,
     duration: 2,
     ease: "cubic-bezier(0.23, 1, 0.320, 1)",
     multiplier: 0.1,
   });

   gsap.from(".anim2", {
     y: 50,
     stagger: .2,
     opacity: 0,
     ease: "expo.out",
     duration: 1.5,
   });

   Shery.imageEffect(".image-text img", {
     style: 3,
     config: {"uFrequencyX":{"value":18.18,"range":[0,100]},"uFrequencyY":{"value":12.4,"range":[0,100]},"uFrequencyZ":{"value":10.74,"range":[0,100]},"geoVertex":{"range":[1,64],"value":19.22},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.75},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.4,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
     
   });

   Shery.imageEffect(" .imgff img", {
     style: 4,
     config: {"uColor":{"value":false},"uSpeed":{"value":1,"range":[0.1,1],"rangep":[1,10]},"uAmplitude":{"value":0.91,"range":[0,5]},"uFrequency":{"value":4.88,"range":[0,10]},"geoVertex":{"range":[1,64],"value":19.22},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.8},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.23,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]},"uFrequencyX":{"value":18.18,"range":[0,100]},"uFrequencyY":{"value":12.4,"range":[0,100]},"uFrequencyZ":{"value":10.74,"range":[0,100]}},
     
   });

   gsap.from(".image-text img", {
     y: 70,
     opacity: 0,
     duration: 2,
     ease: "power3",

   })

   Shery.imageEffect(".bimg", {
     style: 5,
     cogfig: {"a":{"value":1.24,"range":[0,30]},"b":{"value":-0.92,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":2.057142857142857},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":1.93,"range":[1,15]},"durationOut":{"value":0.46,"range":[0.1,5]},"durationIn":{"value":0.79,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.2,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.01,"range":[0,0.1]},"noise_height":{"value":0.45,"range":[0,2]},"noise_scale":{"value":6.61,"range":[0,100]}} ,
     gooey: true, 
   });


   document.querySelector(".ftext button")
   .addEventListener("mouseover", function(){
      gsap.to("#future video",{
         opacity: 1,
         duration: 1.2,
         ease: "power5",
      })
   });

   document.querySelector(".ftext button")
   .addEventListener("mouseleave", function(){
     gsap.to("#future video",{
       opacity: 0,
       duration: 1,
       ease: "power5",
    })
   });


