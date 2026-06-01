(function () {
  "use strict";

  const content = window.NeapolisContent;
  const components = window.NeapolisComponents;

  if (!content || !components) {
    return;
  }

  components.renderPage(content);

  const body = document.body;
  const header = document.querySelector("[data-header]");
  const nav = document.querySelector("[data-nav]");
  const navToggle = document.querySelector("[data-nav-toggle]");
  const sectionLinks = document.querySelectorAll('.site-nav a[href^="#"]');
  const anchorSections = document.querySelectorAll(".section-anchor[id]");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const updateYears = () => {
    document.querySelectorAll("[data-year]").forEach((target) => {
      target.textContent = new Date().getFullYear().toString();
    });
  };

  const applyImageFallback = (image) => {
    const useFallback = () => {
      if (image.dataset.fallback && image.src !== image.dataset.fallback) {
        image.src = image.dataset.fallback;
      }
    };

    image.addEventListener("error", useFallback, { once: true });

    if (image.hasAttribute("src") && image.complete && image.naturalWidth === 0) {
      useFallback();
    }
  };

  const initImageFallbacks = (root = document) => {
    root.querySelectorAll("img[data-fallback]").forEach(applyImageFallback);
  };

  const initDeferredImages = () => {
    const deferredImages = document.querySelectorAll("img[data-defer-src]");

    if (!deferredImages.length) {
      return;
    }

    const hydrateImages = () => {
      deferredImages.forEach((image) => {
        if (image.dataset.src) {
          image.src = image.dataset.src;
          image.removeAttribute("data-defer-src");
        }
      });
    };

    if ("requestIdleCallback" in window) {
      window.requestIdleCallback(hydrateImages, { timeout: 1800 });
    } else {
      window.setTimeout(hydrateImages, 900);
    }
  };

  const initHeader = () => {
    if (!header) {
      return;
    }

    let ticking = false;

    const updateHeaderState = () => {
      header.classList.toggle("is-scrolled", window.scrollY > 24);
      ticking = false;
    };

    const requestHeaderUpdate = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(updateHeaderState);
      }
    };

    updateHeaderState();
    window.addEventListener("scroll", requestHeaderUpdate, { passive: true });
  };

  const closeNavigation = () => {
    if (!nav || !navToggle) {
      return;
    }

    nav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
    body.classList.remove("nav-open");
  };

  const initNavigation = () => {
    if (!nav || !navToggle) {
      return;
    }

    navToggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", isOpen.toString());
      body.classList.toggle("nav-open", isOpen);
    });

    nav.addEventListener("click", (event) => {
      if (event.target instanceof HTMLAnchorElement) {
        closeNavigation();
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeNavigation();
      }
    });
  };

  const initActiveSection = () => {
    if (!sectionLinks.length || !anchorSections.length || !("IntersectionObserver" in window)) {
      return;
    }

    const setActiveLink = (sectionId) => {
      sectionLinks.forEach((link) => {
        link.toggleAttribute("aria-current", link.getAttribute("href") === `#${sectionId}`);
      });
    };

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-38% 0px -52% 0px",
        threshold: 0,
      }
    );

    anchorSections.forEach((section) => sectionObserver.observe(section));
  };

  const initReveal = () => {
    const revealElements = document.querySelectorAll(".reveal");

    if (reducedMotion || !("IntersectionObserver" in window)) {
      revealElements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 }
    );

    revealElements.forEach((element) => revealObserver.observe(element));
  };

  const initPhotoMarquee = () => {
    const photoTrack = document.querySelector(".photo-track");
    const photoMarquee = document.querySelector(".photo-marquee");

    if (!photoTrack || !photoMarquee) {
      return;
    }

    Array.from(photoTrack.children).forEach((image) => {
      const clone = image.cloneNode(true);
      clone.setAttribute("aria-hidden", "true");
      photoTrack.append(clone);
    });

    initImageFallbacks(photoTrack);

    if (reducedMotion) {
      return;
    }

    let frameId = 0;
    let loopWidth = 0;
    let position = 0;
    let velocity = -0.45;
    let targetVelocity = -0.45;
    let isVisible = true;

    const measure = () => {
      loopWidth = photoTrack.scrollWidth / 2;
    };

    const animate = () => {
      if (!isVisible) {
        frameId = 0;
        return;
      }

      velocity += (targetVelocity - velocity) * 0.06;
      position += velocity;

      if (loopWidth > 0) {
        if (position <= -loopWidth) {
          position += loopWidth;
        } else if (position > 0) {
          position -= loopWidth;
        }
      }

      photoTrack.style.transform = `translate3d(${position}px, 0, 0)`;
      frameId = requestAnimationFrame(animate);
    };

    const start = () => {
      if (!frameId) {
        frameId = requestAnimationFrame(animate);
      }
    };

    const stop = () => {
      if (frameId) {
        cancelAnimationFrame(frameId);
        frameId = 0;
      }
    };

    photoMarquee.addEventListener("mousemove", (event) => {
      const bounds = photoMarquee.getBoundingClientRect();
      const relativeX = (event.clientX - bounds.left) / bounds.width;
      targetVelocity = (0.5 - relativeX) * 4.2;
    });

    photoMarquee.addEventListener("mouseleave", () => {
      targetVelocity = -0.45;
    });

    if ("ResizeObserver" in window) {
      const resizeObserver = new ResizeObserver(measure);
      resizeObserver.observe(photoTrack);
      photoTrack.resizeObserver = resizeObserver;
    } else {
      window.addEventListener("resize", measure, { passive: true });
    }

    if ("IntersectionObserver" in window) {
      const marqueeObserver = new IntersectionObserver(
        ([entry]) => {
          isVisible = entry.isIntersecting;

          if (isVisible) {
            start();
          } else {
            stop();
          }
        },
        { threshold: 0.08 }
      );

      marqueeObserver.observe(photoMarquee);
    }

    measure();
    start();
  };

  const loadMap = (mapCard) => {
    if (mapCard.dataset.mapLoaded === "true" || !mapCard.dataset.mapSrc) {
      return;
    }

    const iframe = document.createElement("iframe");
    iframe.title = mapCard.dataset.mapTitle || content.accessibility.mapFallbackTitle;
    iframe.src = mapCard.dataset.mapSrc;
    iframe.loading = "lazy";
    iframe.referrerPolicy = "no-referrer-when-downgrade";

    mapCard.dataset.mapLoaded = "true";
    mapCard.replaceChildren(iframe);
  };

  const initLazyMaps = () => {
    const mapCards = document.querySelectorAll("[data-map]");

    if (!mapCards.length) {
      return;
    }

    mapCards.forEach((mapCard) => {
      const loadButton = mapCard.querySelector("[data-map-load]");
      loadButton?.addEventListener("click", () => loadMap(mapCard));
    });

    if (!("IntersectionObserver" in window)) {
      return;
    }

    const mapObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            loadMap(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "360px 0px" }
    );

    mapCards.forEach((mapCard) => mapObserver.observe(mapCard));
  };

  updateYears();
  initImageFallbacks();
  initDeferredImages();
  initHeader();
  initNavigation();
  initActiveSection();
  initReveal();
  initPhotoMarquee();
  initLazyMaps();
})();
