(function () {
  "use strict";

  const fallbackImages = {
    community:
      "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1600&q=82",
    gathering:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1600&q=82",
    table:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=82",
    study:
      "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=1000&q=82",
  };

  window.NeapolisContent = {
    skipLink: "Vai al contenuto",
    accessibility: {
      homeLabel: "Chiesa Evangelica Neapolis - Home",
      menuLabel: "Apri menu",
      primaryActions: "Azioni principali",
      sundayInfo: "Informazioni domenicali",
      gallery: "Foto della comunità",
      socials: "Social Neapolis",
      mapFallbackTitle: "Mappa",
    },
    logo: {
      src: "assets/img/logo-neapolis-nav.png",
      alt: "Chiesa Evangelica Neapolis",
      width: 640,
      height: 245,
    },
    navigation: [
      { label: "Home", target: "home" },
      { label: "Chi siamo", target: "chi-siamo" },
      { label: "Parola", target: "parola" },
      { label: "Attività", target: "attivita" },
      { label: "Foto", target: "foto" },
      { label: "Dove siamo", target: "contatti" },
    ],
    hero: {
      id: "home",
      eyebrow: "Chiesa Evangelica Neapolis - Napoli",
      title: "Una casa aperta nel cuore di Napoli.",
      lead:
        "Ci ritroviamo per conoscere Gesù, ascoltare la Bibbia e condividere la vita con semplicità. Se stai cercando una comunità, qui puoi arrivare senza dover dimostrare niente.",
      actions: [
        { label: "Vieni domenica", href: "#contatti", variant: "primary" },
        { label: "Guarda le foto", href: "#foto", variant: "secondary" },
      ],
      visitCard: {
        label: "Culto domenicale",
        title: "Domenica, ore 18:00",
        text: "Accoglienza dalle 17:30. Un incontro semplice, una parola dalla Bibbia e tempo per conoscerci.",
      },
      slides: [
        {
          src: "assets/img/community-1.jpg",
          fallback: fallbackImages.community,
          width: 1600,
          height: 981,
          fetchPriority: "high",
        },
        {
          src: "assets/img/community-2.jpg",
          fallback: fallbackImages.gathering,
          width: 1600,
          height: 1201,
        },
        {
          src: "assets/img/community-3.jpg",
          fallback: fallbackImages.table,
          width: 1400,
          height: 793,
        },
        {
          src: "assets/img/community-4.jpg",
          fallback: fallbackImages.study,
          width: 1400,
          height: 787,
        },
      ],
    },
    intro: {
      id: "chi-siamo",
      eyebrow: "Chi siamo",
      title: "Una comunità che segue Gesù nella vita reale.",
      text:
        "Neapolis nasce dal desiderio di vivere una fede chiara, vicina, quotidiana. Non vogliamo essere un luogo per chi ha già tutte le risposte, ma una comunità in cui ascoltare Dio, fare domande sincere e camminare insieme con pazienza.",
      image: {
        src: "assets/img/community-2.jpg",
        fallback: fallbackImages.community,
        alt: "Foto della comunità Neapolis in giardino",
        width: 1600,
        height: 1201,
      },
      beliefs: [
        {
          number: "01",
          title: "Una fede ascoltata",
          text: "Apriamo la Bibbia per lasciarci guidare, correggere e consolare da una Parola più grande di noi.",
        },
        {
          number: "02",
          title: "Relazioni senza maschere",
          text: "La chiesa non è una vetrina di persone perfette: è una famiglia che impara a portare pesi, dubbi e gioie.",
        },
        {
          number: "03",
          title: "Presenza nel quotidiano",
          text: "Vogliamo servire Napoli con gesti concreti, attenzione alle persone e una speranza che non resta chiusa alla domenica.",
        },
      ],
    },
    scripture: {
      id: "parola",
      eyebrow: "Una parola per chi arriva",
      quote: "Venite a me, voi tutti che siete affaticati e oppressi, e io vi darò riposo.",
      citation: "Matteo 11:28",
      title: "Non serve arrivare già a posto.",
      text:
        "Il cuore della fede cristiana non è fingere forza, ma ricevere grazia. Per questo desideriamo essere una comunità dove chi è stanco, curioso, ferito o in ricerca possa trovare ascolto e spazio.",
    },
    activities: {
      id: "attivita",
      eyebrow: "Attività",
      title: "Ritmi semplici per crescere insieme.",
      text:
        "La vita della chiesa non è un calendario da riempire, ma un cammino condiviso: culto, tavola, preghiera, formazione e amicizie che maturano nel tempo.",
      items: [
        {
          label: "Domenica",
          title: "Culto comunitario",
          text: "Cantiamo, preghiamo e ascoltiamo la Bibbia insieme, con un linguaggio semplice e uno spazio accogliente anche per chi arriva per la prima volta.",
        },
        {
          label: "In settimana",
          title: "Studio e condivisione",
          text: "Ci incontriamo intorno alla Parola e alla tavola, per parlare con sincerità di fede, famiglia, lavoro, dubbi e vita quotidiana.",
        },
        {
          label: "Durante l'anno",
          title: "Formazione e comunità",
          text: "Giornate teologiche, momenti per famiglie, incontri con studenti e occasioni di servizio per restare una chiesa in cammino.",
        },
      ],
    },
    gallery: {
      id: "foto",
      eyebrow: "Volti e momenti",
      title: "Una chiesa fatta di persone, famiglie, studenti e amici.",
      note:
        "La fede prende forma anche così: bambini che corrono, tavole apparecchiate, preghiere semplici e amicizie che crescono nel tempo.",
      images: [
        {
          src: "assets/img/community-1.jpg",
          fallback: fallbackImages.community,
          alt: "Foto di gruppo davanti alla sede della comunità Neapolis",
          width: 1600,
          height: 981,
        },
        {
          src: "assets/img/community-2.jpg",
          fallback: fallbackImages.gathering,
          alt: "Foto della comunità Neapolis in giardino",
          width: 1600,
          height: 1201,
        },
        {
          src: "assets/img/community-3.jpg",
          fallback: fallbackImages.table,
          alt: "Pranzo comunitario con famiglie e bambini",
          width: 1400,
          height: 793,
        },
        {
          src: "assets/img/community-4.jpg",
          fallback: fallbackImages.study,
          alt: "Gruppo di amici durante un incontro della comunità",
          width: 1400,
          height: 787,
        },
        {
          src: fallbackImages.table,
          alt: "Tavola condivisa della comunità",
          width: 900,
          height: 600,
        },
      ],
    },
    visit: {
      id: "contatti",
      eyebrow: "Dove siamo",
      title: "Via San Pasquale 15/17, Napoli",
      text:
        "Ci incontriamo in zona Chiaia. Se vieni per la prima volta, arriva qualche minuto prima: trovi accoglienza, un caffè e qualcuno pronto ad accompagnarti con discrezione.",
      facts: [
        { value: "17:30", label: "Accoglienza e caffè" },
        { value: "18:00", label: "Culto comunitario" },
        { value: "Dopo", label: "Rinfresco e conversazioni" },
      ],
      directionsLabel: "Apri Google Maps",
      map: {
        badge: "Via",
        title: "Mappa Chiesa Evangelica Neapolis",
        placeholderTitle: "Via San Pasquale 15/17",
        placeholderText: "Indicazioni per raggiungerci in zona Chiaia.",
        embedUrl:
          "https://www.google.com/maps?q=Via%20San%20Pasquale%2015%2F17%2C%20Napoli&output=embed",
        directionsUrl:
          "https://www.google.com/maps/search/?api=1&query=Via%20San%20Pasquale%2015%2F17%2C%20Napoli",
      },
      socials: [
        {
          network: "Instagram",
          handle: "@ceneapolis",
          href: "https://www.instagram.com/ceneapolis/",
          icon: "instagram",
        },
        {
          network: "Facebook",
          handle: "ceneapolis",
          href: "https://www.facebook.com/ceneapolis/",
          icon: "facebook",
        },
        {
          network: "YouTube",
          handle: "Chiesa Evangelica Neapolis 7140",
          href: "https://www.youtube.com/results?search_query=chiesa+evangelica+neapolis+7140",
          icon: "youtube",
        },
      ],
    },
    footer: {
      copyright: "©",
      brand: "NEA:POLIS",
      text:
        "Chiesa Evangelica Neapolis. Una nuova comunità in un'antica città con un'eterna verità.",
    },
  };
})();
