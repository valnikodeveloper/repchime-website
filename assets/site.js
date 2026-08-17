document.getElementById("year").textContent = new Date().getFullYear();

document.querySelectorAll(".video-trigger").forEach(function (button) {
  button.addEventListener("click", function () {
    var frame = document.createElement("iframe");
    frame.src = "https://www.youtube-nocookie.com/embed/" + button.dataset.video + "?autoplay=1&rel=0&playsinline=1";
    frame.title = button.getAttribute("aria-label");
    frame.allow = "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture";
    frame.allowFullscreen = true;
    var stage = document.createElement("div");
    stage.className = "video-stage";
    stage.appendChild(frame);
    button.replaceWith(stage);
  }, { once: true });
});

