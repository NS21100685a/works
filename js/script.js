//new LuminousGallery(document.querySelectorAll(".grid-gallery"));
new LuminousGallery(document.querySelectorAll('.grid-gallery'),{},{
 caption :function(trigger) {
    return trigger.querySelector('img').getAttribute('alt');
  }
});