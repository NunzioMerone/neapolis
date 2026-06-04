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
    introVideo: "video-card--intro reveal",
    beliefList: "belief-list reveal",
    beliefItem: "belief-item",
    beliefNumber: "belief-item__number",
    sermons: "section section--sermons section-anchor",
    sermonShell: "container sermon-shell",
    sermonIntro: "sermon-intro",
    sermonHeading: "section-heading reveal",
    sermonGrid: "sermon-grid",
    sermonCard: "sermon-card",
    sermonMeta: "sermon-card__meta",
    sermonStatus: "sermon-status",
    activities: "section section--activities section-anchor",
    activityGrid: "activity-grid",
    activityCard: "activity-card reveal",
    gallery: "section section--gallery section-anchor",
    galleryHeading: "container gallery-heading reveal",
    photoMarquee: "photo-marquee",
    photoTrack: "photo-track",
    photoNote: "container photo-note reveal",
    visit: "section section--visit section-anchor",
    visitShell: "container visit-shell",
    visitHeading: "visit-heading reveal",
    visitHeadingText: "visit-heading__text",
    visitAddress: "visit-address",
    visitGrid: "visit-grid",
    mapCard: "map-card reveal",
    mapPlaceholder: "map-placeholder",
    mapPin: "map-placeholder__pin",
    visitPanel: "visit-panel reveal",
    visitFacts: "visit-facts",
    contactShowcase: "contact-showcase",
    contactHeading: "contact-heading",
    contactGrid: "contact-grid",
    contactPeople: "contact-people",
    contactEmailPanel: "contact-email-panel",
    contactCard: "contact-card",
    contactIcon: "contact-card__icon",
    contactBody: "contact-card__body",
    contactActions: "contact-card__actions",
    contactAction: "contact-card__action",
    socialShowcase: "social-showcase",
    socialHeading: "social-heading",
    videoCard: "video-card",
    videoFrame: "video-card__frame",
    videoBody: "video-card__body",
    socialList: "social-list",
    socialCard: "social-card",
    socialCardBody: "social-card__body",
    socialCardAction: "social-card__action",
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
    phone: [
      {
        tag: "path",
        attrs: {
          d: "M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z",
        },
      },
    ],
    mail: [
      {
        tag: "path",
        attrs: {
          d: "M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z",
        },
      },
      { tag: "path", attrs: { d: "m22 6-10 7L2 6" } },
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

  const externalLinkAttrs = (href) => ({
    href,
    target: "_blank",
    rel: "noreferrer",
  });

  const buildYoutubeVideo = (video, modifierClass = "") =>
    element(
      "article",
      { className: [CLASSES.videoCard, modifierClass].filter(Boolean).join(" ") },
      [
        element("div", { className: CLASSES.videoFrame }, [
          element("iframe", {
            attrs: {
              title: video.title,
              src: video.embedUrl,
              loading: "lazy",
              allow:
                "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
              allowfullscreen: true,
              referrerpolicy: "strict-origin-when-cross-origin",
            },
          }),
        ]),
        video.videoOnly
          ? null
          : element("div", { className: CLASSES.videoBody }, [
              element("h3", { text: video.heading }),
              element("p", { text: video.text }),
              element("a", {
                className: CLASSES.buttonPrimary,
                text: video.channelLabel,
                attrs: externalLinkAttrs(video.channelUrl),
              }),
            ]),
      ]
    );

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

  const buildIntroMedia = (intro) =>
    intro.video
      ? buildYoutubeVideo(intro.video, CLASSES.introVideo)
      : element("div", { className: CLASSES.introPhoto }, [image({ ...intro.image, loading: "lazy" }, "")]);

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
          buildIntroMedia(intro),
          element(
            "div",
            { className: CLASSES.beliefList },
            intro.beliefs.map((belief) =>
              element("article", { className: CLASSES.beliefItem }, [
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

  const buildSermonVideo = (video) =>
    element("article", { className: [CLASSES.videoCard, CLASSES.sermonCard].join(" ") }, [
      element("div", { className: CLASSES.videoFrame }, [
        element("iframe", {
          attrs: {
            title: video.title,
            src: video.embedUrl,
            loading: "lazy",
            allow:
              "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
            allowfullscreen: true,
            referrerpolicy: "strict-origin-when-cross-origin",
          },
        }),
      ]),
      element("div", { className: CLASSES.videoBody }, [
        element("span", { className: CLASSES.sermonMeta, text: video.dateLabel }),
        element("h3", { text: video.heading }),
        video.text ? element("p", { text: video.text }) : null,
        element("a", {
          className: CLASSES.buttonPrimary,
          text: video.actionLabel || "Guarda su YouTube",
          attrs: externalLinkAttrs(video.watchUrl),
        }),
      ]),
    ]);

  const buildSermons = (sermons) =>
    element(
      "section",
      {
        className: CLASSES.sermons,
        attrs: { id: sermons.id },
      },
      [
        element("div", { className: CLASSES.sermonShell }, [
          element("div", { className: CLASSES.sermonIntro }, [
            element("div", { className: CLASSES.sermonHeading }, [
              element("p", { className: CLASSES.eyebrow, text: sermons.eyebrow }),
              element("h2", { text: sermons.title }),
              element("p", { text: sermons.text }),
            ]),
            element("a", {
              className: CLASSES.buttonPrimary,
              text: sermons.channelLabel,
              attrs: externalLinkAttrs(sermons.channelUrl),
            }),
          ]),
          element("p", {
            className: [CLASSES.sermonStatus, CLASSES.hidden].join(" "),
            text: sermons.loadingLabel,
            attrs: { "aria-live": "polite", "data-youtube-status": true },
          }),
          element(
            "div",
            {
              className: CLASSES.sermonGrid,
              attrs: {
                "data-youtube-latest": true,
                "data-youtube-feed": sermons.feedUrl,
                "data-youtube-channel": sermons.channelUrl,
                "data-youtube-fallback-label": sermons.fallbackLabel,
                "data-youtube-loading-label": sermons.loadingLabel,
              },
            },
            sermons.fallbackVideos.map((video) =>
              buildSermonVideo({
                ...video,
                actionLabel: sermons.fallbackLabel,
              })
            )
          ),
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

  const normalizeItalianPhone = (phone) => `39${phone.replace(/\D/g, "")}`;
  const phoneHref = (phone) => `tel:+${normalizeItalianPhone(phone)}`;
  const whatsappHref = (phone) => `https://wa.me/${normalizeItalianPhone(phone)}`;

  const buildContactCard = (contact) =>
    element("article", { className: CLASSES.contactCard }, [
      element("span", { className: CLASSES.contactIcon, attrs: { "aria-hidden": "true" } }, [buildIcon("phone")]),
      element("span", { className: CLASSES.contactBody }, [
        element("strong", { text: contact.name }),
        element("small", { text: contact.role }),
        element("em", { text: contact.phoneLabel }),
      ]),
      element("span", { className: CLASSES.contactActions }, [
        element("a", {
          className: CLASSES.contactAction,
          text: "Chiama",
          attrs: { href: phoneHref(contact.phone) },
        }),
        element("a", {
          className: CLASSES.contactAction,
          text: "WhatsApp",
          attrs: externalLinkAttrs(whatsappHref(contact.phone)),
        }),
      ]),
    ]);

  const buildContactShowcase = (visit) =>
    element("section", { className: [CLASSES.contactShowcase, CLASSES.reveal].join(" ") }, [
      element("div", { className: CLASSES.contactHeading }, [
        element("p", { className: CLASSES.eyebrow, text: visit.contactHeading.eyebrow }),
        element("h3", { text: visit.contactHeading.title }),
        element("p", { text: visit.contactHeading.text }),
      ]),
      element("div", { className: CLASSES.contactGrid }, [
        element("div", { className: CLASSES.contactPeople }, visit.contacts.map(buildContactCard)),
        element("a", { className: CLASSES.contactEmailPanel, attrs: { href: visit.email.href } }, [
          element("span", { className: CLASSES.contactIcon, attrs: { "aria-hidden": "true" } }, [buildIcon("mail")]),
          element("span", { className: CLASSES.contactBody }, [
            element("strong", { text: visit.email.value }),
            element("small", { text: "Scrivici una email" }),
          ]),
          element("span", { className: CLASSES.contactAction, text: "Invia email" }),
        ]),
      ]),
    ]);

  const buildSocialCards = (socials, accessibility) =>
    element(
      "nav",
      {
        className: CLASSES.socialList,
        attrs: { "aria-label": accessibility.socials },
      },
      socials.map((social) =>
        element(
          "a",
          {
            className: [CLASSES.socialCard, `social-card--${social.icon}`].join(" "),
            attrs: externalLinkAttrs(social.href),
          },
          [
            element("span", { className: CLASSES.socialIcon, attrs: { "aria-hidden": "true" } }, [
              buildIcon(social.icon),
            ]),
            element("span", { className: CLASSES.socialCardBody }, [
              element("strong", { text: social.network }),
              element("small", { text: social.handle }),
              element("em", { text: social.text }),
            ]),
            element("span", { className: CLASSES.socialCardAction, text: social.actionLabel }),
          ]
        )
      )
    );

  const buildSocialShowcase = (visit, accessibility) =>
    element("section", { className: CLASSES.socialShowcase }, [
      element("div", { className: CLASSES.socialHeading }, [
        element("p", { className: CLASSES.eyebrow, text: visit.socialHeading.eyebrow }),
        element("h3", { text: visit.socialHeading.title }),
        element("p", { text: visit.socialHeading.text }),
      ]),
      buildSocialCards(visit.socials, accessibility),
    ]);

  const buildVisit = (visit, accessibility) =>
    element(
      "section",
      {
        className: CLASSES.visit,
        attrs: { id: visit.id },
      },
      [
        element("div", { className: CLASSES.visitShell }, [
          element("div", { className: CLASSES.visitHeading }, [
            element("h2", { text: visit.title }),
            element("p", { className: CLASSES.visitHeadingText }, [
              visit.text,
              " La sede è in ",
              element("strong", { className: CLASSES.visitAddress, text: visit.address }),
              ".",
            ]),
          ]),
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
            element("aside", { className: CLASSES.visitPanel }, [
              element("p", { className: CLASSES.eyebrow, text: visit.schedule.eyebrow }),
              element("h3", { text: visit.schedule.title }),
              element("p", { text: visit.schedule.text }),
              element(
                "div",
                { className: CLASSES.visitFacts },
                visit.facts.map((fact) =>
                  element("div", {}, [element("strong", { text: fact.value }), element("span", { text: fact.label })])
                )
              ),
              element("a", {
                className: CLASSES.buttonPrimary,
                text: visit.directionsLabel,
                attrs: externalLinkAttrs(visit.map.directionsUrl),
              }),
            ]),
          ]),
          buildContactShowcase(visit),
          buildSocialShowcase(visit, accessibility),
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
          buildSermons(content.sermons),
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
