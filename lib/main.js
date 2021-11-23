"use strict";

// TypeIt
new TypeIt(".typed", { speed: 200, loop: true })
  .type("Une entreprise agile")
  .pause(1000)
  .delete()
  .type("au service de la population")
  .pause(1000)
  .delete()
  .type("Avec une expertise locale")
  .pause(1000)
  .delete()
  // .type("欢迎")
  // .pause(1000)
  // .delete()
  // .type("Bienvenidos")
  // .pause(1000)
  // .delete()
  .go();

// Smooth Scroll
var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 900,
  speedAsDuration: true,
});

// Navbar burger
var navbarBurger = Array.prototype.slice.call(
  document.querySelectorAll(".navbar-burger"),
  0
);

if (navbarBurger.length > 0) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    var _loop = function _loop() {
      var el = _step.value;

      el.addEventListener("click", function () {
        var target = el.dataset.target;
        var _target = document.getElementById(target);

        el.classList.toggle("is-active");
        _target.classList.toggle("is-active");
      });
    };

    for (
      var _iterator = navbarBurger[Symbol.iterator](), _step;
      !(_iteratorNormalCompletion = (_step = _iterator.next()).done);
      _iteratorNormalCompletion = true
    ) {
      _loop();
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}
