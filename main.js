tl = gsap.timeline({defaults: {duration: 0.75}});

tl.fromTo('.cookie-container', {opacity: 0, scale: 0}, {scale: 1,ease: Elastic.easeOut.config(1, 0.4) ,opacity: 1, y: 0, duration: 1.5});
tl.fromTo('.image svg', {opacity: 0, rotation: -45, x: -50}, {rotation: 0, opacity: 1, x: 0}, "<50%");
tl.fromTo('.text', {opacity: 0, x: 50}, {opacity: 1, x: 0}, "<");

tl.fromTo('svg',{rotation: '0deg', y: 0}, {rotation: '-20deg', y: -20, yoyo:true, repeat: -1})
tl.fromTo('svg #pieces', {y: 0}, {y: -80, repeat: -1, yoyo: true}, '<')


let button = document.querySelector(".cookie-container button");

button.addEventListener('click', ()=>{
  gsap.to('.cookie-container', {opacity: 0, y: 50, duration: 0.5});
})