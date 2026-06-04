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
      title: "Una nuova comunità in un'antica città.",
      text:
        "Neapolis è una comunità cristiana evangelica nata nel cuore di Napoli, con il desiderio di vivere e annunciare una verità eterna in modo chiaro, vicino e quotidiano.",
      quote: "Vivere il Vangelo con semplicità, relazioni vere e speranza per ogni giorno.",
      video: {
        title: "Chiesa Evangelica Neapolis - Promo Video",
        embedUrl:
          "https://www.youtube.com/embed/AE5LcQlCir8?rel=0&playsinline=1&modestbranding=1",
        videoOnly: true,
      },
      beliefs: [
        {
          icon: "book",
          title: "Fede chiara e vicina",
          text:
            "La fede, per noi, non è un insieme di regole da seguire, ma un cammino da percorrere insieme, fatto di ascolto, crescita e condivisione.",
        },
        {
          icon: "church",
          title: "Una verità eterna",
          text: "In una città antica come Napoli, il Vangelo resta una speranza viva e attuale.",
        },
        {
          icon: "message",
          title: "Domande sincere",
          text:
            "Non devi avere tutto chiaro per avvicinarti a Dio. Puoi venire così come sei, con la tua storia.",
        },
        {
          icon: "users",
          title: "Camminare insieme",
          text: "Siamo una famiglia unita con lo scopo di seguire Cristo.",
        },
      ],
    },
    sermons: {
      id: "prediche",
      eyebrow: "Prediche",
      title: "Prediche e messaggi biblici",
      text: "Messaggi biblici per incoraggiare, guidare e far riflettere.",
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
          text:
            "Ci ritroviamo come famiglia per lodare Dio, ascoltare la Sua Parola e ricordarci insieme ciò che conta davvero. Un tempo semplice, accogliente e aperto anche a chi si avvicina per la prima volta.",
        },
        {
          label: "Martedì, ore 20:00",
          title: "Studio biblico",
          text:
            "Apriamo la Bibbia con il desiderio di capire, fare domande vere e lasciare che Dio parli alla nostra vita quotidiana. Non una lezione fredda, ma un cammino condiviso nella fede.",
        },
        {
          label: "Durante l'anno",
          title: "Formazione e comunità",
          text:
            "Viviamo momenti pensati per crescere, servire e costruire relazioni autentiche: incontri, giornate speciali, attività per famiglie e occasioni per essere una chiesa presente nella città.",
        },
      ],
    },
    gallery: {
      id: "foto",
      eyebrow: "",
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
