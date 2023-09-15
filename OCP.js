function showImage(src) {
    var expanded_img_element = document.getElementById("expanded_img");
    var image_element = document.getElementById("image");
    expanded_img_element.style.display = "block";
    image_element.src = src;
  }
  
  function closeImage() {
    var expanded_img_element = document.getElementById("expanded_img");
    expanded_img_element.style.display = "none";
  }

  const sr = ScrollReveal({
    distance: '65px',
    duration: 4000,
    delay: 450,
    reset: true
});

sr.reveal('.hero-text',{delay:200, origin:'top'});
sr.reveal('.logo',{delay:510, origin:'top'});
sr.reveal('.page',{delay:500, origin:'left'});
