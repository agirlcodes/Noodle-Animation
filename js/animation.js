let resetButton = document.getElementById("reset")
  // reset the transition by...
  element.addEventListener("click", function(e) {
    e.preventDefault;
    
    // -> removing the class
    element.classList.remove("container");
    
    // -> triggering reflow /* The actual magic */
    // without this it wouldn't work. Try uncommenting the line and the transition won't be retriggered.
    // Oops! This won't work in strict mode. Thanks Felis Phasma!
    // element.offsetWidth = element.offsetWidth;
    // Do this instead:
    void element.offsetWidth;
    
    // -> and re-adding the class
    element.classList.add("container");
  }, false);



// resetButton.addEventListener("click", function() {
//     alert("Hello World!");
//   });

