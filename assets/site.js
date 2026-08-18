document.getElementById("year").textContent = new Date().getFullYear();

document.querySelectorAll(".video-trigger").forEach(function (link) {
  link.addEventListener("click", function (event) {
    if (window.location.protocol !== "http:" && window.location.protocol !== "https:") return;
    event.preventDefault();
    var frame = document.createElement("iframe");
    frame.src = "https://www.youtube-nocookie.com/embed/" + link.dataset.video + "?autoplay=1&rel=0&playsinline=1";
    frame.title = link.getAttribute("aria-label");
    frame.allow = "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture";
    frame.allowFullscreen = true;
    frame.referrerPolicy = "strict-origin-when-cross-origin";
    var stage = document.createElement("div");
    stage.className = "video-stage";
    stage.appendChild(frame);
    link.replaceWith(stage);
  }, { once: true });
});
