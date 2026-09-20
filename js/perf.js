document.addEventListener("DOMContentLoaded", function () {
  const navigation = document.querySelector("#navbarSupportedContent .navbar-nav");
  if (navigation) {
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    const isActive = function (page) {
      return currentPage === page ? ' active' : '';
    };

    navigation.innerHTML = `
      <li class="nav-item${isActive("index.html")}">
        <a class="nav-link" href="index.html">HOME</a>
      </li>
      <li class="nav-item dropdown${isActive("about.html") || isActive("team.html")}">
        <a class="nav-link dropdown-toggle" href="#" id="aboutDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">ABOUT</a>
        <div class="dropdown-menu" aria-labelledby="aboutDropdown">
          <a class="dropdown-item" href="about.html">ABOUT ICC</a>
          <a class="dropdown-item" href="team.html">OUR TEAM</a>
        </div>
      </li>
      <li class="nav-item dropdown${isActive("upcoming-events.html") || isActive("past.html") || isActive("gallery.html")}">
        <a class="nav-link dropdown-toggle" href="#" id="eventsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">EVENTS</a>
        <div class="dropdown-menu" aria-labelledby="eventsDropdown">
          <a class="dropdown-item" href="upcoming-events.html">RECENT EVENTS</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="past.html">VIDEOS</a>
          <a class="dropdown-item" href="gallery.html">PHOTO GALLERY</a>
        </div>
      </li>
      <li class="nav-item dropdown${isActive("membership.html") || isActive("contact.html")}">
        <a class="nav-link dropdown-toggle" href="#" id="involvedDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">GET INVOLVED</a>
        <div class="dropdown-menu" aria-labelledby="involvedDropdown">
          <a class="dropdown-item" href="membership.html">MEMBERSHIP</a>
          <a class="dropdown-item" href="contact.html#contact">CONTACT</a>
        </div>
      </li>`;
  }

  if (window.location.pathname.endsWith("/index.html") || window.location.pathname === "/") {
    const endorsements = document.querySelector(".announcement");
    const yearsToMove = ["2025", "2024"];
    const sections = Array.from(document.querySelectorAll(".coming-soon"))
      .filter(function (section) {
        return yearsToMove.some(function (year) {
          return section.textContent.includes(year);
        });
      });

    if (endorsements && sections.length === 2) {
      const fragment = document.createDocumentFragment();
      sections.forEach(function (section) {
        const divider = section.nextElementSibling;
        const video = divider && divider.nextElementSibling;
        fragment.appendChild(section);
        if (divider && divider.classList.contains("clearfix")) fragment.appendChild(divider);
        if (video && video.classList.contains("youtube-video")) fragment.appendChild(video);
      });
      endorsements.after(fragment);
    }
  }

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
