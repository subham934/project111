// Javascript to magnetic effects for all elements on mousemove.
const magneticElements = document.querySelectorAll(".magnetic");

magneticElements.forEach((magneticElement) => {
  // magnetic effects for elements on mousemove.
  magneticElement.addEventListener("mousemove", function (e) {
    // measure the size and position of element relative to the viewport.
    let rect = magneticElement.getBoundingClientRect();
    // calculate element x and y position values.
    let x = (e.clientX - rect.left - rect.width / 2) * 0.5;
    let y = (e.clientY - rect.top - rect.height / 2) * 0.5;
    // element effects.
    magneticElement.style.transform = "translate(" + x + "px, " + y + "px)";
    magneticElement.style.scale = "1.1";
    magneticElement.style.trasition = ".1s ease, .3s ease";
    magneticElement.style.transitionProperty = "transform, scale";
    magneticElement.style.cursor = "pointer";
    magneticElement.style.zIndex = '999'
  });

  // reset element effects on mouseout.
  magneticElement.addEventListener("mouseout", () => {
    magneticElement.style.transform = "translate(0px, 0px)";
    magneticElement.style.scale = "1";
    magneticElement.style.trasition = ".1s ease, .3s ease";
    magneticElement.style.transitionProperty = "transform, scale";
  });
});
