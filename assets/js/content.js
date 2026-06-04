(function () {
  "use strict";

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
      { label: "Prediche", target: "prediche" },
      { label: "Attività", target: "attivita" },
      { label: "Foto", target: "foto" },
      { label: "Contatti", target: "contatti" },
    ],
    hero: {
      id: "home",
      eyebrow: "Chiesa Evangelica Neapolis - Napoli",
      title: "Una nuova comunità, in un'antica città, con un'eterna verità.",
      lead:
        "Nel cuore di Napoli ci ritroviamo per ascoltare la Bibbia, pregare e camminare insieme con Gesù.",
      actions: [
        { label: "Vieni domenica", href: "#contatti", variant: "primary" },
        { label: "Guarda le foto", href: "#foto", variant: "secondary" },
      ],
      visitCard: {
        label: "Culto domenicale",
        title: "Domenica, ore 18:00",
        text:
          "Accoglienza dalle 17:30. In estate il culto è alle 19:00. Un incontro semplice, una parola dalla Bibbia e tempo per conoscerci.",
      },
      slides: [
        {
          src: "assets/img/neapolis-photo-07.jpg",
          width: 1206,
          height: 1058,
          fetchPriority: "high",
        },
        {
          src: "assets/img/neapolis-photo-04.jpg",
          width: 1206,
          height: 943,
        },
        {
          src: "assets/img/neapolis-photo-06.jpg",
          width: 1206,
          height: 1052,
        },
        {
          src: "assets/img/neapolis-photo-02.jpg",
          width: 1206,
          height: 891,
        },
      ],
    },
    intro: {
      id: "chi-siamo",
      eyebrow: "Chi siamo",
      title: "Una comunità che segue Gesù nella vita reale.",
      text:
        "Neapolis nasce dal desiderio di vivere una fede chiara, vicina, quotidiana. Non vogliamo essere un luogo per chi ha già tutte le risposte, ma una comunità in cui ascoltare Dio, fare domande sincere e camminare insieme con pazienza.",
      video: {
        title: "Chiesa Evangelica Neapolis - Promo Video",
        embedUrl:
          "https://www.youtube.com/embed/AE5LcQlCir8?rel=0&playsinline=1&modestbranding=1",
        videoOnly: true,
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
    sermons: {
      id: "prediche",
      eyebrow: "Prediche",
      title: "Le ultime prediche",
      text: "Ascolta le prediche più recenti della comunità.",
      channelId: "UCc3zWIcVwgsAp4Ib0RltCkQ",
      uploadsPlaylistId: "UUc3zWIcVwgsAp4Ib0RltCkQ",
      feedUrl: "https://www.youtube.com/feeds/videos.xml?channel_id=UCc3zWIcVwgsAp4Ib0RltCkQ",
      channelUrl: "https://www.youtube.com/channel/UCc3zWIcVwgsAp4Ib0RltCkQ",
      channelLabel: "Vai al canale YouTube",
      loadingLabel: "",
      fallbackLabel: "Apri la playlist su YouTube",
      fallbackVideos: [
        {
          title: "Ultima predica pubblicata",
          heading: "Ultima predica",
          text: "",
          embedUrl: "https://www.youtube.com/embed/videoseries?list=UUc3zWIcVwgsAp4Ib0RltCkQ",
          watchUrl: "https://www.youtube.com/channel/UCc3zWIcVwgsAp4Ib0RltCkQ/videos",
          dateLabel: "Aggiornata da YouTube",
        },
        {
          title: "Seconda predica più recente",
          heading: "Seconda predica",
          text: "",
          embedUrl: "https://www.youtube.com/embed/videoseries?list=UUc3zWIcVwgsAp4Ib0RltCkQ",
          watchUrl: "https://www.youtube.com/channel/UCc3zWIcVwgsAp4Ib0RltCkQ/videos",
          dateLabel: "Aggiornata da YouTube",
        },
        {
          title: "Terza predica più recente",
          heading: "Terza predica",
          text: "",
          embedUrl: "https://www.youtube.com/embed/videoseries?list=UUc3zWIcVwgsAp4Ib0RltCkQ",
          watchUrl: "https://www.youtube.com/channel/UCc3zWIcVwgsAp4Ib0RltCkQ/videos",
          dateLabel: "Aggiornata da YouTube",
        },
      ],
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
          label: "Martedì, ore 20:00",
          title: "Studio biblico",
          text: "Ci incontriamo intorno alla Bibbia per leggere, fare domande e crescere insieme nella fede.",
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
      eyebrow: "Foto",
      title: "Momenti di vita insieme.",
      note: "Scatti della comunità: culto, tavola, amicizie e tempo condiviso.",
      images: [
        {
          src: "assets/img/neapolis-photo-07.jpg",
          alt: "Gruppo della comunità Neapolis riunito all'aperto",
          width: 1206,
          height: 1058,
        },
        {
          src: "assets/img/neapolis-photo-04.jpg",
          alt: "Gruppo della comunità Neapolis in chiesa",
          width: 1206,
          height: 943,
        },
        {
          src: "assets/img/neapolis-photo-06.jpg",
          alt: "Momento comunitario con famiglie durante una giornata all'aperto",
          width: 1206,
          height: 1052,
        },
        {
          src: "assets/img/neapolis-photo-05.jpg",
          alt: "Gruppo numeroso riunito per un evento comunitario",
          width: 1206,
          height: 1078,
        },
        {
          src: "assets/img/neapolis-photo-02.jpg",
          alt: "Tavola condivisa della comunità Neapolis",
          width: 1206,
          height: 891,
        },
        {
          src: "assets/img/neapolis-photo-03.jpg",
          alt: "Gruppo della comunità durante un incontro in casa",
          width: 1206,
          height: 1195,
        },
        {
          src: "assets/img/neapolis-photo-08.jpg",
          alt: "Incontro della comunità Neapolis intorno alla tavola",
          width: 1206,
          height: 789,
        },
        {
          src: "assets/img/neapolis-photo-01.jpg",
          alt: "Momenti diversi della vita comunitaria Neapolis",
          width: 1206,
          height: 712,
        },
      ],
    },
    visit: {
      id: "contatti",
      eyebrow: "Dove siamo",
      title: "Dove siamo",
      address: "Via San Pasquale 15/17, Napoli",
      text:
        "Ci incontriamo in zona Chiaia. Se vieni per la prima volta, arriva qualche minuto prima: trovi accoglienza, un caffè e il tempo per conoscerci.",
      facts: [
        { value: "17:30", label: "Accoglienza e caffè" },
        { value: "18:00", label: "Culto comunitario. In estate alle 19:00" },
        { value: "Dopo", label: "Rinfresco e conversazioni" },
      ],
      schedule: {
        eyebrow: "Domenica",
        title: "Culto comunitario",
        text:
          "Arriva con calma: il culto è alle 18:00, in estate alle 19:00. Trovi accoglienza, una parola dalla Bibbia e tempo per conoscerci.",
      },
      contactHeading: {
        eyebrow: "Contatti",
        title: "Parla con noi prima di venire.",
        text:
          "Per indicazioni, domande o un primo contatto, puoi chiamare uno dei referenti o scriverci via email.",
      },
      contacts: [
        {
          name: "Matteo Schiano Lomoriello",
          role: "Referente",
          phone: "3450808269",
          phoneLabel: "345 080 8269",
        },
        {
          name: "Luca De Dominicis",
          role: "Referente",
          phone: "3335819541",
          phoneLabel: "333 581 9541",
        },
      ],
      email: {
        label: "Email",
        value: "ceneapolis@gmail.com",
        href: "mailto:ceneapolis@gmail.com",
      },
      directionsLabel: "Apri Google Maps",
      socialHeading: {
        eyebrow: "Social",
        title: "Resta vicino alla comunità.",
        text: "Seguici sui canali ufficiali per aggiornamenti, foto e video.",
      },
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
          text: "Foto e storie della settimana.",
          actionLabel: "Apri Instagram",
          href: "https://www.instagram.com/ceneapolis/",
          icon: "instagram",
        },
        {
          network: "Facebook",
          handle: "ceneapolis",
          text: "Avvisi, eventi e contenuti condivisi.",
          actionLabel: "Apri Facebook",
          href: "https://www.facebook.com/ceneapolis/",
          icon: "facebook",
        },
        {
          network: "YouTube",
          handle: "Chiesa Evangelica Neapolis",
          text: "Video, prediche e contenuti della chiesa.",
          actionLabel: "Apri YouTube",
          href: "https://www.youtube.com/channel/UCc3zWIcVwgsAp4Ib0RltCkQ",
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
