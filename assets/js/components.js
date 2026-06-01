(function () {
  "use strict";

  const CLASSES = {
    skipLink: "skip-link",
    hidden: "visually-hidden",
    container: "container",
    reveal: "reveal",
    button: "button",
    buttonPrimary: "button button-primary",
    buttonSecondary: "button button-secondary",
    header: "site-header",
    brand: "brand logo-brand",
    brandLogo: "brand-logo",
    navToggle: "nav-toggle",
    navToggleLine: "nav-toggle-line",
    nav: "site-nav",
    hero: "hero section-anchor",
    heroMedia: "hero__media",
    heroSlide: "hero__slide",
    heroShade: "hero__shade",
    heroContent: "container hero__content",
    heroCopy: "hero__copy",
    eyebrow: "eyebrow",
    heroLead: "hero__lead",
    heroActions: "hero__actions",
    heroCard: "hero-card",
    section: "section section-anchor",
    sectionHeading: "section-heading reveal",
    intro: "section section--intro section-anchor",
    introShell: "container intro",
    introText: "intro__text reveal",
    introPhoto: "intro__photo reveal",
    beliefList: "belief-list reveal",
    beliefItem: "belief-item",
    beliefNumber: "belief-item__number",
    scripture: "scripture section-anchor",
    scriptureCard: "container scripture-card reveal",
    activities: "section section--activities section-anchor",
    activityGrid: "activity-grid",
    activityCard: "activity-card reveal",
    gallery: "section section--gallery section-anchor",
    galleryHeading: "container gallery-heading reveal",
    photoMarquee: "photo-marquee",
    photoTrack: "photo-track",
    photoNote: "container photo-note reveal",
    visit: "section section--visit section-anchor",
    visitGrid: "container visit-grid",
    mapCard: "map-card reveal",
    mapPlaceholder: "map-placeholder",
    mapPin: "map-placeholder__pin",
    visitPanel: "visit-panel reveal",
    visitFacts: "visit-facts",
    socialList: "social-list",
    socialIcon: "social-icon",
    footer: "site-footer",
    footerInner: "container site-footer__inner",
  };

  const ICONS = {
    instagram: [
      { tag: "rect", attrs: { x: 3, y: 3, width: 18, height: 18, rx: 5 } },
      { tag: "circle", attrs: { cx: 12, cy: 12, r: 4 } },
      { tag: "circle", attrs: { cx: 17.5, cy: 6.5, r: 1 } },
    ],
    facebook: [
      {
        tag: "path",
        attrs: {
          d: "M14 8h3V4h-3c-3 0-5 2-5 5v3H6v4h3v4h4v-4h3l1-4h-4V9c0-.6.4-1 1-1Z",
        },
      },
    ],
    youtube: [
      {
        tag: "path",
        attrs: {
          d: "M21 12s0-4-1-5c-.7-.8-1.5-1-8-1s-7.3.2-8 1c-1 1-1 5-1 5s0 4 1 5c.7.8 1.5 1 8 1s7.3-.2 8-1c1-1 1-5 1-5Z",
        },
      },
      { tag: "path", attrs: { d: "m10 9 5 3-5 3Z" } },
    ],
  };

  const setAttributes = (node, attrs = {}) => {
    Object.entries(attrs).forEach(([name, value]) => {
      if (value === undefined || value === null || value === false) {
        return;
      }

      if (value === true) {
        node.setAttribute(name, "");
        return;
      }

      node.setAttribute(name, String(value));
    });
  };

  const appendChildren = (node, children = []) => {
    children.flat().forEach((child) => {
      if (child === undefined || child === null) {
        return;
      }

      node.append(child instanceof Node ? child : document.createTextNode(String(child)));
    });
  };

  const element = (tagName, options = {}, children = []) => {
    const node = document.createElement(tagName);

    if (options.className) {
      node.className = options.className;
    }

    if (options.text) {
      node.textContent = options.text;
    }

    setAttributes(node, options.attrs);
    appendChildren(node, children);

    return node;
  };

  const image = (data, className) => {
    const attrs = {
      alt: data.alt || "",
      width: data.width,
      height: data.height,
      decoding: "async",
    };

    if (data.defer) {
      attrs["data-src"] = data.src;
      attrs["data-defer-src"] = true;
    } else {
      attrs.src = data.src;
    }

    if (data.fallback) {
      attrs["data-fallback"] = data.fallback;
    }

    if (data.loading) {
      attrs.loading = data.loading;
    }

    if (data.fetchPriority) {
      attrs.fetchpriority = data.fetchPriority;
    }

    return element("img", { className, attrs });
  };

  const buttonClass = (variant) =>
    variant === "secondary" ? CLASSES.buttonSecondary : CLASSES.buttonPrimary;

  const buildIcon = (name) => {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    setAttributes(svg, {
      viewBox: "0 0 24 24",
      "aria-hidden": "true",
      focusable: "false",
    });

    (ICONS[name] || []).forEach((iconPart) => {
      const part = document.createElementNS("http://www.w3.org/2000/svg", iconPart.tag);
      setAttributes(part, iconPart.attrs);
      svg.append(part);
    });

    return svg;
  };

  const buildHeader = (content) => {
    const logo = image(content.logo, CLASSES.brandLogo);
    const brand = element(
      "a",
      {
        className: CLASSES.brand,
        attrs: {
          href: "#home",
          "aria-label": content.accessibility.homeLabel,
        },
      },
      [logo]
    );

    const toggle = element(
      "button",
      {
        className: CLASSES.navToggle,
        attrs: {
          type: "button",
          "aria-controls": "site-nav",
          "aria-expanded": "false",
          "data-nav-toggle": true,
        },
      },
      [
        element("span", { className: CLASSES.navToggleLine }),
        element("span", { className: CLASSES.navToggleLine }),
        element("span", { className: CLASSES.navToggleLine }),
        element("span", { className: CLASSES.hidden, text: content.accessibility.menuLabel }),
      ]
    );

    const nav = element(
      "nav",
      {
        className: CLASSES.nav,
        attrs: {
          id: "site-nav",
          "data-nav": true,
        },
      },
      content.navigation.map((item, index) =>
        element("a", {
          text: item.label,
          attrs: {
            href: `#${item.target}`,
            "aria-current": index === 0 ? "page" : undefined,
          },
        })
      )
    );

    return element(
      "header",
      {
        className: CLASSES.header,
        attrs: { "data-header": true },
      },
      [brand, toggle, nav]
    );
  };

  const buildHero = (hero, accessibility) =>
    element(
      "section",
      {
        className: CLASSES.hero,
        attrs: { id: hero.id },
      },
      [
        element(
          "div",
          {
            className: CLASSES.heroMedia,
            attrs: { "aria-hidden": "true" },
          },
          hero.slides.map((slide, index) =>
            image(
              {
                ...slide,
                defer: index > 0,
                loading: index === 0 ? "eager" : undefined,
              },
              CLASSES.heroSlide
            )
          )
        ),
        element("div", { className: CLASSES.heroShade }),
        element("div", { className: CLASSES.heroContent }, [
          element("div", { className: CLASSES.heroCopy }, [
            element("p", { className: CLASSES.eyebrow, text: hero.eyebrow }),
            element("h1", { text: hero.title }),
            element("p", { className: CLASSES.heroLead, text: hero.lead }),
            element(
              "div",
              {
                className: CLASSES.heroActions,
                attrs: { "aria-label": accessibility.primaryActions },
              },
              hero.actions.map((action) =>
                element("a", {
                  className: buttonClass(action.variant),
                  text: action.label,
                  attrs: { href: action.href },
                })
              )
            ),
          ]),
          element(
            "aside",
            {
              className: CLASSES.heroCard,
              attrs: { "aria-label": accessibility.sundayInfo },
            },
            [
              element("span", { text: hero.visitCard.label }),
              element("strong", { text: hero.visitCard.title }),
              element("p", { text: hero.visitCard.text }),
            ]
          ),
        ]),
      ]
    );

  const buildIntro = (intro) =>
    element(
      "section",
      {
        className: CLASSES.intro,
        attrs: { id: intro.id },
      },
      [
        element("div", { className: CLASSES.introShell }, [
          element("div", { className: CLASSES.introText }, [
            element("p", { className: CLASSES.eyebrow, text: intro.eyebrow }),
            element("h2", { text: intro.title }),
            element("p", { text: intro.text }),
          ]),
          element("div", { className: CLASSES.introPhoto }, [
            image({ ...intro.image, loading: "lazy" }, ""),
          ]),
          element(
            "div",
            { className: CLASSES.beliefList },
            intro.beliefs.map((belief) =>
              element("article", { className: CLASSES.beliefItem }, [
                element("span", { className: CLASSES.beliefNumber, text: belief.number }),
                element("div", {}, [
                  element("h3", { text: belief.title }),
                  element("p", { text: belief.text }),
                ]),
              ])
            )
          ),
        ]),
      ]
    );

  const buildScripture = (scripture) =>
    element(
      "section",
      {
        className: CLASSES.scripture,
        attrs: { id: scripture.id },
      },
      [
        element("div", { className: CLASSES.scriptureCard }, [
          element("p", { className: CLASSES.eyebrow, text: scripture.eyebrow }),
          element("blockquote", {}, [
            element("p", { text: `"${scripture.quote}"` }),
            element("cite", { text: scripture.citation }),
          ]),
          element("div", {}, [element("h2", { text: scripture.title }), element("p", { text: scripture.text })]),
        ]),
      ]
    );

  const buildActivities = (activities) =>
    element(
      "section",
      {
        className: CLASSES.activities,
        attrs: { id: activities.id },
      },
      [
        element("div", { className: CLASSES.container }, [
          element("div", { className: CLASSES.sectionHeading }, [
            element("p", { className: CLASSES.eyebrow, text: activities.eyebrow }),
            element("h2", { text: activities.title }),
            element("p", { text: activities.text }),
          ]),
          element(
            "div",
            { className: CLASSES.activityGrid },
            activities.items.map((activity) =>
              element("article", { className: CLASSES.activityCard }, [
                element("span", { text: activity.label }),
                element("h3", { text: activity.title }),
                element("p", { text: activity.text }),
              ])
            )
          ),
        ]),
      ]
    );

  const buildGallery = (gallery, accessibility) =>
    element(
      "section",
      {
        className: CLASSES.gallery,
        attrs: { id: gallery.id },
      },
      [
        element("div", { className: CLASSES.galleryHeading }, [
          element("p", { className: CLASSES.eyebrow, text: gallery.eyebrow }),
          element("h2", { text: gallery.title }),
        ]),
        element(
          "div",
          {
            className: CLASSES.photoMarquee,
            attrs: { "aria-label": accessibility.gallery },
          },
          [
            element(
              "div",
              { className: CLASSES.photoTrack },
              gallery.images.map((photo) => image({ ...photo, loading: "lazy" }, ""))
            ),
          ]
        ),
        element("div", { className: CLASSES.photoNote }, [element("p", { text: gallery.note })]),
      ]
    );

  const buildVisit = (visit, accessibility) =>
    element(
      "section",
      {
        className: CLASSES.visit,
        attrs: { id: visit.id },
      },
      [
        element("div", { className: CLASSES.visitGrid }, [
          element(
            "div",
            {
              className: CLASSES.mapCard,
              attrs: {
                "data-map": true,
                "data-map-src": visit.map.embedUrl,
                "data-map-title": visit.map.title,
              },
            },
            [
              element(
                "button",
                {
                  className: CLASSES.mapPlaceholder,
                  attrs: {
                    type: "button",
                    "data-map-load": true,
                  },
                },
                [
                  element("span", { className: CLASSES.mapPin, text: visit.map.badge }),
                  element("strong", { text: visit.map.placeholderTitle }),
                  element("small", { text: visit.map.placeholderText }),
                ]
              ),
            ]
          ),
          element("div", { className: CLASSES.visitPanel }, [
            element("p", { className: CLASSES.eyebrow, text: visit.eyebrow }),
            element("h2", { text: visit.title }),
            element("p", { text: visit.text }),
            element(
              "div",
              { className: CLASSES.visitFacts },
              visit.facts.map((fact) =>
                element("div", {}, [element("strong", { text: fact.value }), element("span", { text: fact.label })])
              )
            ),
            element(
              "nav",
              {
                className: CLASSES.socialList,
                attrs: { "aria-label": accessibility.socials },
              },
              visit.socials.map((social) =>
                element(
                  "a",
                  {
                    attrs: {
                      href: social.href,
                      target: "_blank",
                      rel: "noreferrer",
                    },
                  },
                  [
                    element("span", { className: CLASSES.socialIcon, attrs: { "aria-hidden": "true" } }, [
                      buildIcon(social.icon),
                    ]),
                    social.network,
                    element("small", { text: social.handle }),
                  ]
                )
              )
            ),
            element("a", {
              className: CLASSES.buttonPrimary,
              text: visit.directionsLabel,
              attrs: {
                href: visit.map.directionsUrl,
                target: "_blank",
                rel: "noreferrer",
              },
            }),
          ]),
        ]),
      ]
    );

  const buildFooter = (footer) =>
    element("footer", { className: CLASSES.footer }, [
      element("div", { className: CLASSES.footerInner }, [
        element("strong", { text: footer.brand }),
        element("p", {}, [
          `${footer.copyright} `,
          element("span", { attrs: { "data-year": true } }),
          ` ${footer.text}`,
        ]),
      ]),
    ]);

  const renderPage = (content) => {
    const root = document.querySelector("[data-site-root]");

    if (!root || !content) {
      return;
    }

    root.replaceChildren(
      element("a", { className: CLASSES.skipLink, text: content.skipLink, attrs: { href: "#contenuto" } }),
      buildHeader(content),
      element(
        "main",
        { attrs: { id: "contenuto" } },
        [
          buildHero(content.hero, content.accessibility),
          buildIntro(content.intro),
          buildScripture(content.scripture),
          buildActivities(content.activities),
          buildGallery(content.gallery, content.accessibility),
          buildVisit(content.visit, content.accessibility),
        ]
      ),
      buildFooter(content.footer)
    );
  };

  window.NeapolisComponents = {
    renderPage,
  };
})();
