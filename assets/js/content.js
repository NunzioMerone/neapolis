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
      { label: "Storia", target: "storia" },
      { label: "Sermoni", target: "sermoni" },
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
          src: "assets/img/home-01.jpeg",
          width: 1600,
          height: 1201,
          fetchPriority: "high",
        },
        {
          src: "assets/img/home-02.jpeg",
          width: 1600,
          height: 921,
        },
        {
          src: "assets/img/home-03.jpeg",
          width: 1600,
          height: 1200,
        },
        {
          src: "assets/img/home-04.jpeg",
          width: 1600,
          height: 1200,
        },
      ],
    },
    intro: {
      id: "chi-siamo",
      eyebrow: "Chi siamo",
      title: "Una nuova comunità in un'antica città.",
      text:
        "Neapolis è una comunità cristiana evangelica nel cuore di Napoli. Crediamo nel Dio uno e trino, nella Bibbia come Parola autorevole di Dio e nel Vangelo di Gesù Cristo: la buona notizia della sua morte e risurrezione, unica speranza per essere riconciliati con Dio e vivere come suo popolo nella città.",
      quote:
        "Confessiamo una fede centrata su Cristo, fondata sulla Parola di Dio e sostenuta dalla grazia: una speranza viva che ci unisce come chiesa e ci spinge a servire la città.",
      action: {
        label: "Scopri di più",
        href: "https://tgcitalia.org/documenti-fondanti/#confessione-di-fede",
        external: true,
      },
      video: {
        title: "Chiesa Evangelica Neapolis - Promo Video",
        embedUrl:
          "https://www.youtube.com/embed/AE5LcQlCir8?rel=0&playsinline=1&modestbranding=1",
        videoOnly: true,
      },
      beliefs: [
        {
          icon: "book",
          title: "Scritture al centro",
          text:
            "Ascoltiamo la Bibbia come Parola di Dio, sufficiente per guidare la fede, la vita e il cammino della chiesa.",
        },
        {
          icon: "church",
          title: "Vangelo di Cristo",
          text:
            "Annunciamo Gesù crocifisso e risorto, il centro della nostra fede e la speranza viva per ogni persona.",
        },
        {
          icon: "message",
          title: "Grazia che trasforma",
          text:
            "Viviamo la fede come risposta alla grazia di Dio: con ravvedimento, fiducia e relazioni sincere.",
        },
        {
          icon: "users",
          title: "Popolo nella città",
          text: "Camminiamo insieme come chiesa locale, desiderando amare Dio, servirci a vicenda e fare del bene a Napoli.",
        },
      ],
      valuesLink: {
        eyebrow: "Valori e distintivi",
        title: "Una fede centrata sul Vangelo, vissuta in missione.",
        text:
          "Per approfondire il quadro di valori e distintivi teologici a cui guardiamo, Impatto Italia presenta una visione di chiese che fondano chiese, con attenzione al Vangelo, alla santità, all'umiltà, all'evangelizzazione e alla missione della chiesa locale.",
        action: {
          label: "Leggi valori e distintivi",
          href: "https://www.impattoitalia.org/valori-e-distintivi",
          external: true,
        },
      },
    },
    history: {
      id: "storia",
      eyebrow: "La nostra storia",
      title: "Una storia nata a tavola, cresciuta nella Parola.",
      lead:
        "La storia di Neapolis attraversa incontri semplici, passaggi pastorali, collaborazioni e una stessa convinzione: annunciare il Vangelo nel cuore di Napoli.",
      prompt:
        "Apri i capitoli per leggere la storia completa, dalle prime riunioni nel 2015 fino al cammino attuale della comunità.",
      sideImage: {
        src: "assets/img/neapolis-photo-08.jpg",
        alt: "Incontro della comunità Neapolis intorno alla tavola",
        width: 1206,
        height: 789,
      },
      items: [
        {
          label: "Settembre 2015",
          title: "Il primo incontro",
          teaser: "Tre persone, un pasto condiviso, preghiera e studio biblico nel centro di Napoli.",
          paragraphs: [
            "In un martedì di settembre del 2015 tre persone si riunirono per la prima volta per condividere un pasto, pregare e studiare la Bibbia insieme nel salone della Christ Church di Napoli, una chiesa Anglicana ubicata al centro della città.",
            "Il Signore aveva messo nel cuore del pastore Mark Oden e di sua moglie Jane Oden, inviati dall'Inghilterra dalla società missionaria evangelica Crosslinks, il desiderio di fondare una chiesa nel cuore di Napoli: così è nata la Chiesa Evangelica Neapolis (CEN).",
          ],
        },
        {
          label: "Ottobre 2016",
          title: "La comunità prende forma",
          teaser: "Dagli incontri domenicali nascono ministeri, relazioni e nuovi passi di crescita.",
          paragraphs: [
            "Pian piano il gruppo è cresciuto e nell'ottobre del 2016 sono iniziati i primi incontri domenicali settimanali della nostra chiesa.",
            "Oltre al culto domenicale e allo studio biblico infrasettimanale, nel corso del tempo Dio ha reso possibile la nascita di diversi ministeri all'interno della nostra comunità tra cui quello di sostegno alle persone senza dimora di Napoli, la scuola domenicale per i bambini, il ministero dedicato agli adolescenti e il ministero delle donne.",
            "Negli anni, il Signore ha continuato a far crescere la nostra comunità sia tramite nuove conversioni che grazie all'arrivo di fratelli provenienti da altre chiese.",
          ],
        },
        {
          label: "Circa 8 anni",
          title: "Un servizio pastorale fedele",
          teaser: "Gli anni del servizio di Mark Oden e il coinvolgimento di nuovi consiglieri nella chiesa.",
          paragraphs: [
            "Per circa 8 anni, Mark Oden ha servito come pastore della nostra chiesa, affiancato inizialmente da Francesco Schiano in qualità di assistente pastore.",
            "Dopo l'uscita di Francesco Schiano, divenuto anziano della Chiesa Evangelica di Bacoli, Luca De Dominicis e Matteo Schiano hanno assunto il ruolo di consiglieri del pastore.",
          ],
        },
        {
          label: "2025 - marzo 2026",
          title: "Il passaggio a una nuova guida",
          teaser: "La chiamata di Mark in Scozia e la scelta di Luca e Matteo come nuovi pastori.",
          paragraphs: [
            "Dal 2025, Mark Oden ha ricevuto una chiamata dal Signore a servirLo come pastore in Scozia, presso la Chalmers Church di Edimburgo.",
            "In vista di questo cambiamento, Mark ha preparato la chiesa alla scelta di nuovi pastori e anziani. I membri della nostra comunità, insieme alla rete Impatto Italia (Acts 29), hanno quindi indicato Luca de Dominicis e Matteo Schiano per questo incarico ed essi sono diventati i nuovi pastori della chiesa nel marzo 2026.",
          ],
        },
        {
          label: "Oggi",
          title: "Una chiesa centrata sulla Parola",
          teaser: "L'identità evangelica riformata della CEN e la gratitudine per chi ha fondato la chiesa.",
          paragraphs: [
            "La CEN è una chiesa evangelica conservatrice riformata impegnata a insegnare fedelmente la Parola di Dio in ogni occasione.",
            "Come chiesa, siamo grati a Crosslinks per aver inviato Mark e Jane, insieme ai loro figli, per fondare la Chiesa Evangelica Neapolis.",
          ],
        },
        {
          label: "Collaborazioni",
          title: "Reti e relazioni al servizio del Vangelo",
          teaser: "Le collaborazioni con GBU, Impatto, TGC Italia e altre realtà cristiane.",
          paragraphs: [
            "Grazie a Francesco Schiano, segretario generale del GBU Italia, abbiamo il piacere di collaborare con questo movimento studentesco che si impegna a portare la Bibbia negli ambienti universitari.",
            "Siamo inoltre collegati a Impatto, la rete di Acts 29 in Italia, e condividiamo una visione per la fondazione di nuove chiese al centro di Napoli.",
            "Collaboriamo anche con The Gospel Coalition Italia e, nel corso degli anni, abbiamo instaurato rapporti con Open Doors, Youth For Christ Italia e Compassion.",
          ],
        },
      ],
      closing: {
        title: "Guardiamo avanti con gratitudine.",
        text:
          "Ringraziamo il Padre celeste per la Sua fedeltà e per come ci ha sostenuti fin qui. Guardiamo al futuro con fede ed entusiasmo, certi che continuerà a usare la nostra comunità per annunciare il Vangelo nella nostra città!",
      },
    },
    sermons: {
      id: "sermoni",
      eyebrow: "Sermoni",
      title: "Sermoni e messaggi biblici",
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
          title: "Ultimo sermone pubblicato",
          heading: "Ultimo sermone",
          text: "",
          embedUrl: "https://www.youtube.com/embed/videoseries?list=UUc3zWIcVwgsAp4Ib0RltCkQ",
          watchUrl: "https://www.youtube.com/channel/UCc3zWIcVwgsAp4Ib0RltCkQ/videos",
          dateLabel: "Aggiornata da YouTube",
        },
        {
          title: "Secondo sermone più recente",
          heading: "Secondo sermone",
          text: "",
          embedUrl: "https://www.youtube.com/embed/videoseries?list=UUc3zWIcVwgsAp4Ib0RltCkQ",
          watchUrl: "https://www.youtube.com/channel/UCc3zWIcVwgsAp4Ib0RltCkQ/videos",
          dateLabel: "Aggiornata da YouTube",
        },
        {
          title: "Terzo sermone più recente",
          heading: "Terzo sermone",
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
            "Apriamo la Bibbia con il desiderio di capire, fare domande vere e lasciare che Dio parli alla nostra vita. Non una lezione fredda, ma un cammino condiviso nella fede.",
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
          text: "Video, sermoni e contenuti della chiesa.",
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
