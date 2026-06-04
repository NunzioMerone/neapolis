(function () {
  "use strict";

  const content = window.NeapolisContent;
  const components = window.NeapolisComponents;

  if (!content || !components) {
    return;
  }

  const navigationEntry = performance.getEntriesByType?.("navigation")?.[0];
  const isPageReload =
    navigationEntry?.type === "reload" ||
    (performance.navigation && performance.navigation.type === performance.navigation.TYPE_RELOAD);
  const initialHash = window.location.hash;

  if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }

  if (isPageReload && window.location.hash) {
    history.replaceState(null, document.title, `${window.location.pathname}${window.location.search}`);
  }

  components.renderPage(content);

  const body = document.body;
  const header = document.querySelector("[data-header]");
  const nav = document.querySelector("[data-nav]");
  const navToggle = document.querySelector("[data-nav-toggle]");
  const sectionLinks = document.querySelectorAll('.site-nav a[href^="#"]');
  const anchorSections = document.querySelectorAll(".section-anchor[id]");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const resetReloadScroll = () => {
    if (!isPageReload) {
      return;
    }

    window.scrollTo(0, 0);
    requestAnimationFrame(() => window.scrollTo(0, 0));
  };

  const scrollToInitialAnchor = () => {
    if (isPageReload || !initialHash) {
      return;
    }

    let targetId = initialHash.slice(1);

    try {
      targetId = decodeURIComponent(targetId);
    } catch {
      // Keep the raw hash if it is not a valid encoded string.
    }

    const scrollToTarget = () => document.getElementById(targetId)?.scrollIntoView();

    requestAnimationFrame(scrollToTarget);
    window.addEventListener("load", () => window.setTimeout(scrollToTarget, 0), { once: true });
  };

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

  const fetchWithTimeout = async (url, timeout = 8000) => {
    const controller = new AbortController();
    const timeoutId = window.setTimeout(() => controller.abort(), timeout);

    try {
      const response = await fetch(url, {
        signal: controller.signal,
        headers: { Accept: "application/rss+xml, application/xml, application/json, text/xml, text/plain" },
      });

      if (!response.ok) {
        throw new Error(`Feed non disponibile: ${response.status}`);
      }

      return response;
    } finally {
      window.clearTimeout(timeoutId);
    }
  };

  const getNodeText = (node, localName) => {
    const target = Array.from(node.getElementsByTagName("*")).find((child) => child.localName === localName);
    return target?.textContent?.trim() || "";
  };

  const extractYoutubeVideoId = (url) => {
    if (!url) {
      return "";
    }

    try {
      const parsedUrl = new URL(url);
      const videoId = parsedUrl.searchParams.get("v");

      if (videoId) {
        return videoId;
      }

      const pathMatch = parsedUrl.pathname.match(/\/(?:embed|shorts)\/([a-zA-Z0-9_-]{11})/);
      return pathMatch?.[1] || "";
    } catch {
      const fallbackMatch = url.match(/[?&]v=([a-zA-Z0-9_-]{11})/);
      return fallbackMatch?.[1] || "";
    }
  };

  const parseYoutubeXmlFeed = (feedText) => {
    const feedDocument = new DOMParser().parseFromString(feedText, "application/xml");

    if (feedDocument.querySelector("parsererror")) {
      throw new Error("Feed XML non valido");
    }

    return Array.from(feedDocument.getElementsByTagName("entry"))
      .map((entry) => {
        const link = entry.querySelector("link[rel='alternate']") || entry.querySelector("link");
        const watchUrl = link?.getAttribute("href") || "";
        const videoId = getNodeText(entry, "videoId") || extractYoutubeVideoId(watchUrl);

        return {
          id: videoId,
          title: getNodeText(entry, "title"),
          publishedAt: getNodeText(entry, "published"),
          watchUrl: watchUrl || `https://www.youtube.com/watch?v=${videoId}`,
        };
      })
      .filter((video) => video.id && video.title)
      .slice(0, 3);
  };

  const parseRssJsonFeed = (feedData) => {
    if (!Array.isArray(feedData.items)) {
      return [];
    }

    return feedData.items
      .map((item) => {
        const watchUrl = item.link || "";
        const videoId = extractYoutubeVideoId(watchUrl) || extractYoutubeVideoId(item.guid || "");

        return {
          id: videoId,
          title: item.title || "Predica YouTube",
          publishedAt: item.pubDate || "",
          watchUrl: watchUrl || `https://www.youtube.com/watch?v=${videoId}`,
        };
      })
      .filter((video) => video.id && video.title)
      .slice(0, 3);
  };

  const loadYoutubeFeed = async (feedUrl) => {
    const encodedFeedUrl = encodeURIComponent(feedUrl);
    const sources = [
      {
        url: feedUrl,
        parse: async (response) => parseYoutubeXmlFeed(await response.text()),
      },
      {
        url: `https://api.rss2json.com/v1/api.json?rss_url=${encodedFeedUrl}`,
        parse: async (response) => parseRssJsonFeed(await response.json()),
      },
      {
        url: `https://api.allorigins.win/raw?url=${encodedFeedUrl}`,
        parse: async (response) => parseYoutubeXmlFeed(await response.text()),
      },
    ];

    for (const source of sources) {
      try {
        const videos = await source.parse(await fetchWithTimeout(source.url));

        if (videos.length) {
          return videos;
        }
      } catch {
        // Try the next source; the static fallback remains visible if every source fails.
      }
    }

    return [];
  };

  const formatPublishedDate = (publishedAt) => {
    const date = new Date(publishedAt);

    if (Number.isNaN(date.getTime())) {
      return "Pubblicata su YouTube";
    }

    return `Pubblicata il ${new Intl.DateTimeFormat("it-IT", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }).format(date)}`;
  };

  const createSermonCard = (video) => {
    const card = document.createElement("article");
    card.className = "video-card sermon-card";

    const frame = document.createElement("div");
    frame.className = "video-card__frame";

    const iframe = document.createElement("iframe");
    iframe.title = video.title;
    iframe.src = `https://www.youtube.com/embed/${video.id}`;
    iframe.loading = "lazy";
    iframe.allow =
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    iframe.allowFullscreen = true;
    iframe.referrerPolicy = "strict-origin-when-cross-origin";

    const body = document.createElement("div");
    body.className = "video-card__body";

    const meta = document.createElement("span");
    meta.className = "sermon-card__meta";
    meta.textContent = formatPublishedDate(video.publishedAt);

    const title = document.createElement("h3");
    title.textContent = video.title;

    const link = document.createElement("a");
    link.className = "button button-primary";
    link.href = video.watchUrl;
    link.target = "_blank";
    link.rel = "noreferrer";
    link.textContent = "Guarda su YouTube";

    frame.append(iframe);
    body.append(meta, title, link);
    card.append(frame, body);

    return card;
  };

  const initLatestYoutubeVideos = async () => {
    const latestVideos = document.querySelector("[data-youtube-latest]");

    if (!latestVideos?.dataset.youtubeFeed) {
      return;
    }

    const status = document.querySelector("[data-youtube-status]");
    const videos = await loadYoutubeFeed(latestVideos.dataset.youtubeFeed);

    if (!videos.length) {
      if (status) {
        status.textContent = "Video non disponibili. Apri il canale YouTube per vedere tutte le prediche.";
      }

      return;
    }

    latestVideos.replaceChildren(...videos.map(createSermonCard));

    if (status) {
      status.textContent = "Video caricati.";
    }
  };

  updateYears();
  resetReloadScroll();
  scrollToInitialAnchor();
  initImageFallbacks();
  initDeferredImages();
  initHeader();
  initNavigation();
  initActiveSection();
  initReveal();
  initPhotoMarquee();
  initLazyMaps();
  initLatestYoutubeVideos();
})();
