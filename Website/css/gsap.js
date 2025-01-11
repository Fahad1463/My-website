// Gsap code
gsap.from('.same-Class', {
    y:20,
    opacity:0,
    duration:0.5,
    delay:0.7,
})
gsap.from('#quote1',{
  opacity:0,
  duration:0.4,
  delay:1,
})
gsap.from('#quote2',{
  opacity:0,
  duration:0.4,
  delay:1,
})
let tl = gsap.timeline({
    scrollTrigger: {
      scroller: "body",
      trigger: "#quote1",
      start: "top center",
      end: "bottom center",
      toggleActions: "play none none reverse",
    }
  });
  
  tl.from('#quote1', { y: 20, duration: 1 })
    .to('#quote1', { y: -20, duration: 0.5, yoyo: true, repeat: -1 });

let tl2 = gsap.timeline({
        scrollTrigger: {
          scroller: "body",
          trigger: "#quote2",
        //   start: "top center",
        //   end: "bottom center",
          toggleActions: "play none none reverse",
        }
      });
      
      tl2.from('#quote2', { y: 20, duration: 1 })
        .to('#quote2', { y: -20, duration: 0.5, yoyo: true, repeat: -1 });

        // document.addEventListener("DOMContentLoaded", function () {
        //   gsap.registerPlugin(ScrollTrigger);
      
        //   gsap.from([".mid-box1", ".mid-box2", ".mid-box3"], {
        //     y: 50, 
        //     opacity: 0, 
        //     duration: 1, 
        //     ease: "power3.out", 
        //     stagger: 0.3, 
        //     scrollTrigger: {
        //       trigger: "#submid-boxes",
        //       start: "top 85%",
        //       end: "top 60%",
        //       scrub: 0.5,
        //       markers: false, 
        //     },
        //   });
        // });
        

gsap.from('.aftermid-box1', {
  x: 50,
  duration: 1.2, // Increase the duration for a smoother transition
  delay: 0.5, // Slightly reduce delay for a more natural feel
  opacity: 0,
  ease: "power3.out", // Use a smoother easing function
  scrollTrigger: {
    scroller: "body",
    trigger: ".aftermid-box1",
    start: "top 210px",
    end: "top 150px", // Smooth end point for trigger
    scrub: 1, // Add scrub for smoother syncing with scroll
    // markers: true,
  }
});
    
gsap.from('.aftermid-box2', {
  x: 50,
  duration: 1.2, // Increase the duration for a smoother transition
  delay: 0.5, // Slightly reduce delay for a more natural feel
  opacity: 0,
  ease: "power3.out", // Use a smoother easing function
  scrollTrigger: {
    scroller: "body",
    trigger: ".aftermid-box2",
    start: "top 210px",
    end: "top 150px", // Smooth end point for trigger
    scrub: 1, // Add scrub for smoother syncing with scroll
    // markers: true,
  }
});

gsap.registerPlugin(ScrollTrigger);

// Smooth GSAP Animation for Image with Class .section-box1
gsap.from('.section-box1', {
  y: 50, // Slide up from 50px below
  opacity: 0, // Start with 0 opacity
  duration: 1.5, // Smooth duration
  ease: "power3.out", // Smooth easing for a professional feel
  scrollTrigger: {
    trigger: ".section-box1", // Element that triggers the animation
    start: "top 80%", // Animation starts when .section-box1 enters the viewport
    end: "top 50%", // Ends as it reaches the middle of the viewport
    scrub: 1, // Smooth scroll interaction
    toggleActions: "play none none reverse", // Smoothly reverse on scroll back
    // markers: false, // Set to true to debug the scroll points
  },
});

gsap.registerPlugin(ScrollTrigger);

// Unique GSAP Animation for .section3-box1
gsap.from('.section3-box1', {
  scale: 0.8, // Start slightly smaller
  rotation: -5, // Start with a slight tilt
  opacity: 0, // Begin fully transparent
  duration: 1.2, // Smooth animation duration
  ease: "expo.out", // Exponential easing for a polished look
  scrollTrigger: {
    trigger: ".section3-box1", // Element triggering the animation
    start: "top 85%", // Start animation when the element enters the viewport
    end: "top 60%", // End animation as it gets closer to the center
    scrub: 0.5, // Smooth scrolling interaction
    toggleActions: "play none none reverse", // Reverse animation on scroll back
    markers: false, // Debug markers (set to true if needed)
  },
});

gsap.registerPlugin(ScrollTrigger);

// GSAP Stagger Animation for Cards
gsap.from([".sub-sec4-card1", ".sub-sec4-card2", ".sub-sec4-card3"], {
  y: 50, // Slide up from 50px below
  opacity: 0, // Start fully transparent
  duration: 1, // Smooth animation duration
  ease: "power3.out", // Gentle easing
  stagger: 0.3, // Delay of 0.3 seconds between animations
  scrollTrigger: {
    trigger: ".sub-sec4-card1", // Trigger animation when the first card enters viewport
    start: "top 85%", // Start animation when the element is near the viewport
    end: "top 60%", // Animation progress until it reaches this point
    scrub: 0.5, // Smooth scrolling interaction
    markers: false, // Debug markers (set to true for testing)
  },
});