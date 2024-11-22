// SCROLL REVEAL
const scrollReveal = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  // reset: true;
});

scrollReveal.reveal(".nav, .home-title, .services-container, .data-title h4, .filter-buttons, .btn-secondary, .cta-banner-container, .blog-title, .testimonial-data, .footer-container");
scrollReveal.reveal(".home-card", { delay: 700, distance: '100px', interval: 300 });
scrollReveal.reveal(".service-card", { delay: 700, distance: '200px', interval: 300, origin:"bottom" });
scrollReveal.reveal(".flex-data h2", { delay: 700, origin: "left" });
scrollReveal.reveal(".flex-data p", { delay: 700, origin: "right" });
scrollReveal.reveal(".location1, .location3", { delay: 800, origin: "left", distance: '100px', interval:200 });
scrollReveal.reveal(".location2, .location4", { delay: 800, origin: "right", distance: '100px', interval:200 });
scrollReveal.reveal(".destination-package, .blog-card", { delay: 700, distance: '250px', interval: 400, origin:"bottom" });
scrollReveal.reveal(".main-testimonials", { origin: "bottom", ease: 'ease-in' });
scrollReveal.reveal(".footer-social-link, .footer-data div", { origin: "bottom", ease: 'ease-in', delay: 700, distance: '150px', interval: 200 });
