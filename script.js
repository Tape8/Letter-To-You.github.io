// Message box toggle
$("#messageState").on("change", () => {
  $(".message").removeClass("openNor closeNor");
  if ($("#messageState").is(":checked")) {
    $(".message").removeClass("closed no-anim").addClass("openNor");
    $(".heart").removeClass("closeHer openedHer").addClass("openHer");
    $(".container").stop().animate({"backgroundColor": "#f48fb1"}, 2000);
  } else {
    $(".message").removeClass("no-anim").addClass("closeNor");
    $(".heart").removeClass("openHer openedHer").addClass("closeHer");
    $(".container").stop().animate({"backgroundColor": "#fce4ec"}, 2000);
  }
});

$(".message").on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function() {
  if ($(".message").hasClass("closeNor")) $(".message").addClass("closed");
  $(".message").removeClass("openNor closeNor").addClass("no-anim");
});

$(".heart").on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function() {
  if (!$(".heart").hasClass("closeHer")) $(".heart").addClass("openedHer beating");
  else $(".heart").addClass("no-anim").removeClass("beating");
  $(".heart").removeClass("openHer closeHer");
});

// Floating hearts
function createFloatingHeart(x, y) {
  const heart = $('<div class="heart-float"></div>');

  const offsetX = (Math.random() - 0.5) * 100 + "px";
  const offsetY = -Math.random() * 200 + "px";
  const scale = 0.8 + Math.random() * 0.5;
  const rotate0 = Math.random() * 360;
  const rotate1 = rotate0 + (Math.random() * 60 - 30);
  const rotate2 = rotate0 + (Math.random() * 120 - 60);
  const duration = (1.5 + Math.random() * 1.5) + "s";

  heart.css({
    left: x + "px",
    top: y + "px",
    '--x': offsetX,
    '--y': offsetY,
    '--scale': scale,
    '--rotate0': rotate0,
    '--rotate1': rotate1,
    '--rotate2': rotate2,
    'animation-duration': duration
  });

  $(".container").append(heart);

  heart.on('animationend', function() { heart.remove(); });
}

// Click heart to generate floating hearts
$(".heart > img").on("click", function() {
  const rect = this.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  for (let i = 0; i < 5; i++) createFloatingHeart(centerX, centerY);
});
