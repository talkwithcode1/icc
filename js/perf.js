document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("img").forEach(function (img, index) {
    if (img.hasAttribute("data-critical")) {
      img.removeAttribute("loading");
      img.decoding = "sync";
      img.fetchPriority = "high";
      return;
    }

    if (!img.hasAttribute("loading")) {
      img.loading = "lazy";
    }

    img.decoding = "async";

    if (!img.hasAttribute("fetchpriority")) {
      img.fetchPriority = index < 3 ? "auto" : "low";
    }
  });

  document.querySelectorAll("iframe").forEach(function (iframe) {
    if (!iframe.hasAttribute("loading")) {
      iframe.loading = "lazy";
    }
  });
});
