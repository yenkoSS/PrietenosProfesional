/* LOGO HEADER */

document.querySelector(".logo-navbar").addEventListener("click", (e) => {
  e.preventDefault();
  const id = document.querySelector(".logo-navbar").getAttribute("href");
  setTimeout(() => {
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }, 200);
});

/* NAV HEADER LINK LG */

document.querySelectorAll(".nav-header-link-lg").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const id = link.getAttribute("href");
    setTimeout(() => {
      document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    }, 200);
  });
});

document.querySelectorAll(".nav-services-lg").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const id = link.getAttribute("href");
    window.location.href = id;
    setTimeout(() => history.replaceState(null, null, "index.html"), 100);
  });
});

/* NAV FIXED */

window.addEventListener("scroll", () => {
  if (scrollY > 100) {
    document.querySelector(".quickbar").style.display = "none";
  }
  if (scrollY < 100) {
    document.querySelector(".quickbar").style.display = "flex";
  }
});

if (document.querySelector(".breadcrumbs")) {
  window.addEventListener("scroll", () => {
    if (scrollY > 700) {
      document.querySelector(".breadcrumbs").classList.add("fixed-nav-bread");
    }
    if (scrollY < 700) {
      document.querySelector(".breadcrumbs").classList.remove("fixed-nav-bread");
    }
  });
}

/* NAV SM */

document.querySelector(".icon-menu").addEventListener("click", () => {
  document.querySelector(".nav-header-list-sm").style.display = "flex";
  if (document.querySelector(".breadcrumbs" && ".fixed-nav-bread")) {
    document.querySelector(".fixed-nav-bread").style.display = "none";
  }
});

document.querySelector(".icon-close").addEventListener("click", () => {
  document.querySelector(".nav-header-list-sm").style.display = "none";
  if (document.querySelector(".fixed-nav-bread")) {
    document.querySelector(".fixed-nav-bread").style.display = "block";
  }
});

document.querySelectorAll(".nav-header-link-sm").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const id = link.getAttribute("href");
    document.querySelector(".nav-header-list-sm").style.display = "none";
    if (document.querySelector(".breadcrumbs")) {
      if (document.querySelector(".fixed-nav-bread")) document.querySelector(".fixed-nav-bread").style.display = "block";
    }
    setTimeout(() => {
      document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    }, 200);
  });
  document.querySelector("body").classList.remove("no-scroll");
});

document.querySelectorAll(".nav-services-sm").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const id = link.getAttribute("href");
    document.querySelector(".nav-header-list-sm").style.display = "none";
    window.location.href = id;
    setTimeout(() => history.replaceState(null, null, "index.html"), 100);
  });
});

/* NAV INTERNAL */

document.querySelector(".btn-navbar").addEventListener("click", (e) => {
  e.preventDefault();
  setTimeout(() => {
    document.querySelector("#section-contact").scrollIntoView({ behavior: "smooth" });
  }, 200);
});

document.querySelector(".btn-hero").addEventListener("click", (e) => {
  e.preventDefault();
  setTimeout(() => {
    document.querySelector("#section-services").scrollIntoView({ behavior: "smooth" });
  }, 200);
});

document.querySelector(".btn-hero-second").addEventListener("click", (e) => {
  e.preventDefault();
  setTimeout(() => {
    document.querySelector("#section-contact").scrollIntoView({ behavior: "smooth" });
  }, 200);
});

document.querySelectorAll(".btn-schedule").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const id = btn.getAttribute("href");
    setTimeout(() => {
      document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    }, 200);
  });
});

document.querySelector(".icon-up").addEventListener("click", (e) => {
  const sectionServices = document.querySelector("#home");
  setTimeout(() => {
    sectionServices.scrollIntoView({ behavior: "smooth" });
  }, 200);
});

document.querySelector(".btn-tips").addEventListener("click", (e) => {
  const sectionTips = document.querySelector(".section-tips");
  sectionTips.style.display = "block";
  setTimeout(() => {
    sectionTips.scrollIntoView({ behavior: "smooth" });
  }, 200);
});

/* LOGO FOOTER */

document.querySelector(".logo-footer").addEventListener("click", (e) => {
  e.preventDefault();
  const home = document.querySelector("#home");
  setTimeout(() => {
    home.scrollIntoView({ behavior: "smooth" });
  }, 200);
});

/* NAV FOOTER LINK */

document.querySelectorAll(".nav-footer-link").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const id = link.getAttribute("href");
    setTimeout(() => {
      document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    }, 200);
  });
});

document.querySelectorAll(".nav-footer-link-service").forEach((link) => {
  link.addEventListener("click", () => {
    const id = link.getAttribute("href");
    window.location.href = id;
    setTimeout(() => history.replaceState(null, null, "index.html"), 100);
  });
});

console.log("navi JS");
