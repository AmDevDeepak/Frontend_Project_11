function sectionOneAnim() {
  var tl = gsap.timeline();
  tl.from("nav h1, nav h4, nav button ", {
    y: -50,
    delay: 0.5,
    scale: 1.1,
    opacity: 0,
    duration: 0.5,
    stagger: 0.3,
  });

  tl.from(
    ".center-p1 h1",
    {
      x: -200,
      opacity: 0,
      duration: 0.5,
    },
    "a"
  );

  tl.from(
    ".center-p1 p",
    {
      x: -100,
      opacity: 0,
      duration: 0.4,
    },
    "a"
  );

  tl.from(".center-p1 button", {
    opacity: 0,
    duration: 0.5,
  });

  tl.from(
    ".center-p2 svg",
    {
      opacity: 0,
      duration: 0.5,
      scale: 0.8,
    },
    "-=1"
  );
}
function sectionTwoAnim() {
  var tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".section2",
      scroller: "body",
      start: "top 80%",
      end: "top 0%",
      scrub: 5,
    },
  });

  tl2.from(".img-Div img", {
    opacity: 0,
    y: 50,
    stagger: 1,
    duration: 3,
  });

  tl2.from(".services h3", {
    x: -200,
    opacity: 0,
    duration: 3,
  });

  tl2.from(".services p", {
    x: 200,
    opacity: 0,
    duration: 3,
  });

  tl2.from(
    ".services-div .service.s1",
    {
      x: -300,
      opacity: 0,
      duration: 3,
    },
    "a"
  );

  tl2.from(
    ".services-div .service.s2",
    {
      x: 300,
      opacity: 0,
      duration: 3,
    },
    "a"
  );

  tl2.from(
    ".services-div .service.s3",
    {
      x: -300,
      opacity: 0,
      duration: 3,
    },
    "a"
  );

  tl2.from(
    ".services-div .service.s4",
    {
      x: 300,
      opacity: 0,
      duration: 3,
    },
    "a"
  );
}
function sectionThreeAnim() {
  var tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".section3",
      scroller: "body",
      start: "top 50%",
      end: "top 80%",
      scrub: 4,
    },
  });

  tl3.from(
    ".container-p1 h3",
    {
      opacity: 0,
      duration: 2,
      x: -200,
    },
    "a"
  );

  tl3.from(
    ".container-p1 p",
    {
      opacity: 0,
      duration: 2,
      x: 200,
    },
    "c"
  );

  tl3.from(
    ".container-p1 button",
    {
      opacity: 0,
      duration: 2,
      x: -200,
    },
    "c"
  );

  tl3.from(
    ".container-p2 img",
    {
      opacity: 0,
      duration: 2,
      scale: 0.7,
    },
    "a"
  );
}
sectionOneAnim();
sectionTwoAnim();
sectionThreeAnim();
