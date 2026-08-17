document.getElementById("year").textContent = new Date().getFullYear();

document.querySelectorAll(".video-trigger").forEach(function (button) {
  button.addEventListener("click", function () {
    var videoUrl = "https://www.youtube.com/shorts/" + button.dataset.video;
    if (window.location.protocol === "file:") {
      window.open(videoUrl, "_blank", "noopener,noreferrer");
      return;
    }
    var frame = document.createElement("iframe");
    frame.src = "https://www.youtube-nocookie.com/embed/" + button.dataset.video + "?autoplay=1&rel=0&playsinline=1";
    frame.title = button.getAttribute("aria-label");
    frame.allow = "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share";
    frame.allowFullscreen = true;
    frame.referrerPolicy = "strict-origin-when-cross-origin";
    var stage = document.createElement("div");
    stage.className = "video-stage";
    stage.appendChild(frame);
    var fallback = document.createElement("a");
    var fallbackLabels = { "de": "Auf YouTube öffnen", "fr": "Ouvrir sur YouTube", "es-419": "Abrir en YouTube" };
    fallback.className = "video-fallback";
    fallback.href = videoUrl;
    fallback.target = "_blank";
    fallback.rel = "noopener noreferrer";
    fallback.textContent = fallbackLabels[document.documentElement.lang] || "Open on YouTube";
    stage.appendChild(fallback);
    button.replaceWith(stage);
  }, { once: true });
});
