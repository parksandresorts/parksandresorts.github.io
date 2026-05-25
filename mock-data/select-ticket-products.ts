import { ProductBlockFragment } from "@/core/types";
import { EntryVariant, VisitorCategory } from "../../src/types/services/purchase-flow-service-types";
import { StaticConfigContextType } from "@/core/contexts";
import { DeliveryType, WebshopProductType } from "@parksandresorts/webapiproxy-types";

export const mockedDateProducts = [
  {
    productId: 6555,
    productName: "Ticket-to-ride Dag 4-8 P3",
    price: 395,
    previousPrice: -1,
    timePassRequired: false,
    productMetadata: {
      numberOfJetPassIncluded: 2,
      entryVariant: "Day" as EntryVariant["id"],
      priceLevel: 3,
      visitorCategory: "Child" as VisitorCategory["id"],
      timeLimits: {
        firstEntryTime: "11:00:00",
        lastEntryTime: "22:00:00",
        firstRideTime: "11:00:00",
        lastRideTime: "21:40:00",
        rideMinutesFromEntry: 0,
        lastActivityRelativeTime: 0,
      },
      autoSelectTimeslot: false,
    },
    dateSlot: {
      dateSlotId: 2075211,
      date: "2025-05-16T00:00:00",
      quantity: 100,
    },
    template: {
      templateId: 200,
      highEntrance: true,
    },
    ticketsForQuantity: true,
  },
  {
    productId: 8870,
    productName: "Entré 4-9 år P3",
    price: 150,
    previousPrice: -1,
    timePassRequired: false,
    productMetadata: {
      numberOfJetPassIncluded: 0,
      entryVariant: "Day" as EntryVariant["id"],
      priceLevel: 3,
      visitorCategory: "Child" as VisitorCategory["id"],
      timeLimits: {
        firstEntryTime: "11:00:00",
        lastEntryTime: "22:00:00",
        firstRideTime: "11:00:00",
        lastRideTime: "21:40:00",
        rideMinutesFromEntry: 0,
        lastActivityRelativeTime: 0,
      },
      autoSelectTimeslot: false,
    },
    dateSlot: {
      dateSlotId: 2072914,
      date: "2025-05-16T00:00:00",
      quantity: 100,
    },
    template: {
      templateId: 22,
      highEntrance: false,
    },
    ticketsForQuantity: true,
  },
  {
    productId: 6556,
    productName: "Ticket-to-ride Dag 9-64 P3",
    price: 445,
    previousPrice: -1,
    timePassRequired: false,
    productMetadata: {
      numberOfJetPassIncluded: 2,
      entryVariant: "Day" as EntryVariant["id"],
      priceLevel: 3,
      visitorCategory: "Adult" as VisitorCategory["id"],
      timeLimits: {
        firstEntryTime: "11:00:00",
        lastEntryTime: "22:00:00",
        firstRideTime: "11:00:00",
        lastRideTime: "21:40:00",
        rideMinutesFromEntry: 0,
        lastActivityRelativeTime: 0,
      },
      autoSelectTimeslot: false,
    },
    dateSlot: {
      dateSlotId: 2075219,
      date: "2025-05-16T00:00:00",
      quantity: 100,
    },
    template: {
      templateId: 200,
      highEntrance: true,
    },
    ticketsForQuantity: true,
  },
  {
    productId: 8863,
    productName: "Entré 9-64 år P3",
    price: 150,
    previousPrice: -1,
    timePassRequired: false,
    productMetadata: {
      numberOfJetPassIncluded: 0,
      entryVariant: "Day" as EntryVariant["id"],
      priceLevel: 3,
      visitorCategory: "Adult" as VisitorCategory["id"],
      timeLimits: {
        firstEntryTime: "11:00:00",
        lastEntryTime: "22:00:00",
        firstRideTime: "11:00:00",
        lastRideTime: "21:40:00",
        rideMinutesFromEntry: 0,
        lastActivityRelativeTime: 0,
      },
      autoSelectTimeslot: false,
    },
    dateSlot: {
      dateSlotId: 2072922,
      date: "2025-05-16T00:00:00",
      quantity: 100,
    },
    template: {
      templateId: 22,
      highEntrance: false,
    },
    ticketsForQuantity: true,
  },
];

export const dummyAdditionalProducts: Array<ProductBlockFragment> = [
  {
    id: "f6cc7616-407c-5a76-a3cf-db1e720a6262",
    backgroundColor: null,
    contentful_id: "2zCUuhfb85ZmRN81gBp5jw",
    node_locale: "sv",
    internalTitle: "Produkt Gröna Kortet (Gåvobevis)",
    componentTheme: "gold",
    productData: {
      glkId: "6521",
      productType: "Standard",
    },
    productName: "Gröna Kortet (+ Familjefemkampshäfte)",
    productNameMyPages: "Gröna Kortet",
    productPageLink: {
      slug: "/biljetter/grona-kortet-flow",
    },
    productImage: {
      file: {
        url: "//images.ctfassets.net/ds6dz7ilx8up/5lSYMdJBcbjnmUb3ZlBnkG/09ba027b58186883a312c840a5a6e7dd/GLT_GLive_1600x900px.png",
      },
      gatsbyImageData: null,
      fullWidthGatsbyImageData: null,
      largeGatsbyImageData: null,
    },
    upsellRichText: null,
    description: {
      childMarkdownRemark: {
        html: '<p>Är du på jakt efter den perfekta presenten? Då har du hamnat helt rätt! Med Grönan Live-passet ger du bort minnen för livet med över 50 häftiga konsertupplevelser och alla danskvällar under hela sommarsäsongen 2022. Du får hem ett snyggt gåvobevis att ge bort. Den som får gåvobeviset kan enkelt aktivera sitt personliga pass på Mina Sidor och se fram emot en oförglömlig konsertsommar på Gröna Lund.</p>\n<p><strong>Grönan Live-passet ger dig:</strong></p>\n<ul>\n<li>Entré från 16.30 varje konsert under hela sommaren</li>\n<li>Tillgång till alla konserter på Stora och Lilla Scen</li>\n<li>Tillgång till alla danskvällar</li>\n</ul>\n<p><strong>Obs!</strong> Grönan Live-passet är personligt och måste <a href="https://www.gronalund.com/mina-sidor/login">registreras</a> på Mina Sidor för att kunna användas.</p>',
      },
    },
    readMoreLabel: "Viktig information om Grönan Live-passet som present",
    readMoreText: {
      childMarkdownRemark: {
        html: "<ul>\n<li>Grönan Live-passet gäller för en inpassering per konsert- eller danskväll i mån av plats. Observera att passet inte är giltigt de dagar då det inte är konsert- eller danskväll.</li>\n<li>Grönan Live-passet gäller för inpassering från kl. 16.30 de dagar vi har för- och eftermiddagspass och från öppningsstart de dagar vi har öppet hela dagen.</li>\n<li>Entré gäller i mån av plats under konsert- eller danskvällar sommarsäsongen 2022. Gönan Live-passet garanterar inte plats till en specifik konsert - först till kvarn gäller.</li>\n<li>Tidigare köpta Gröna Kortet för 2020 omvandlas till Grönan Live-pass och är giltiga för konserterna 2022.</li>\n<li>Med Grönan Live-passet ingår inga åk i parken.</li>\n<li>Ditt gåvobevis skickas det hem till den adress du anger vid beställning med en estimerad leveranstid på 7-14 arbetsdagar. Fraktkostnad på 29 kr tillkommer.</li>\n</ul>",
      },
    },
    shortDescription: "Ge bort fri entré till konserter och danskvällar hela sommaren 2023! Kan endast köpas online.",
    customPriceText: "Ingår i black week erbjudandet!",
    purchaseFlowCustomPriceText: null,
    label: null,
    tags: [
      {
        id: "405784b7-a2d7-59fe-97ad-11950d5431b8",
        title: "Säsongskort",
      },
    ],
    customCtaText: null,
    optionalLinkLabelText: null,
    optionalLinkUrl: null,
    addedToCartHeadline: "Snyggt! 🙌🏼",
    addedToCartBody: "Världens bästa present ligger nu i din varukorg!",
    activateProductCalendar: null,
    numberOfJetpassIncluded: null,
    numberOfEntryTicketsIncluded: null,
    purchasableOutsideEntryTime: null,
    seasonPassVisitorCategory: "Vuxen",
    preamble: null,
    hidePriceInProductListBlock: null,
    useFullWidthImage: null,
    enableRegistrationForm: null,
    myPagesDescription: null,
    myPageTheme: null,
    myPagesProductInformation: null,
    needsTimeSlotBooking: null,
  },
  {
    backgroundColor: null,
    id: "2f7bf1f2-1d61-523b-9ae3-ced0b09b1ff7",
    contentful_id: "5KZHP1WItylaigOkMjXngD",
    node_locale: "sv",
    internalTitle: "Produkt Guldkortet Ge bort (4627)",
    componentTheme: "gold",
    productData: {
      glkId: "4627",
      productType: "Standard",
    },
    productName: "Guldkortet",
    productPageLink: {
      slug: "/biljetter/guldkortet",
    },
    productImage: {
      file: {
        url: "//images.ctfassets.net/ds6dz7ilx8up/5MdinxnUtOApzRMEXSzJQC/4d0f80474af0fb368ef14c4fd053ae12/GLT_guldkortet_1600x900px.png",
      },
      gatsbyImageData: null,
      fullWidthGatsbyImageData: null,
      largeGatsbyImageData: null,
    },
    upsellRichText: null,
    description: {
      childMarkdownRemark: {
        html: '<h2>Snart släpps Guldkort till sommarsäsongen 2023!</h2>\n<p>Ge bort Guldkortet som present! Guldkortet ger fri entré och obegränsade åk under hela sommarsäsongen 2023. Du får hem ett snyggt gåvobevis att ge bort och den som får gåvobeviset kan enkelt aktivera sitt personliga kort på Mina Sidor och se fram emot en oförglömlig tivolisommar på Gröna Lund.</p>\n<p>Har du kvar Guldkortet från 2022? <a href="https://www.gronalund.com/biljetter/ateraktivera-guldkortet">Återaktivera det här!</a></p>\n<p><strong>Guldkortet ger dig</strong></p>\n<ul>\n<li>Entré hela sommaren</li>\n<li>Obegränsade åk hela sommaren</li>\n<li>Tillgång till alla konserter på Stora och Lilla Scen</li>\n<li>Tillgång till alla danskvällar på Dansbanan</li>\n</ul>\n<p><strong>Obs!</strong> Guldkortet är personligt och måste <a href="https://www.gronalund.com/mina-sidor/login">registreras </a>på Mina Sidor för att kunna användas.</p>',
      },
    },
    readMoreLabel: "Viktig information om Guldkortet",
    readMoreText: {
      childMarkdownRemark: {
        html: "<ul>\n<li>Guldkortet gäller för inpassering en gång per dag.</li>\n<li>Varje besök måste förbokas kostnadsfritt.</li>\n<li>Ett begränsat antal platser till varje öppettdag släpps för dig med Guldkort. Först till kvarn gäller vid bokning.</li>\n<li>Ditt gåvobevis skickas det hem till den adress du anger vid beställning med en estimerad leveranstid på 7-14 arbetsdagar. Fraktkostnad på 29 kr tillkommer.</li>\n</ul>",
      },
    },
    shortDescription: "Ge bort fri entré och fria åk hela sommaren 2023! Kan endast köpas online.",
    customPriceText: "Ingår i black week erbjudandet!",
    purchaseFlowCustomPriceText: null,
    label: null,
    tags: [
      {
        id: "405784b7-a2d7-59fe-97ad-11950d5431b8",
        title: "Säsongskort",
      },
    ],
    customCtaText: null,
    optionalLinkLabelText: null,
    optionalLinkUrl: null,
    addedToCartHeadline: "Hurra! 🤩",
    addedToCartBody: "En riktigt bra present ligger nu i din varukorg!",
    activateProductCalendar: null,
    numberOfJetpassIncluded: null,
    numberOfEntryTicketsIncluded: null,
    productNameMyPages: "Guldkortet",
    purchasableOutsideEntryTime: null,
    seasonPassVisitorCategory: "Vuxen",
    preamble: null,
    hidePriceInProductListBlock: null,
    useFullWidthImage: null,
    enableRegistrationForm: null,
    myPagesDescription: null,
    myPageTheme: null,
    myPagesProductInformation: null,
    needsTimeSlotBooking: null,
  },
];

export const fakeProducts = {
  contentfulProducts: [
    {
      id: "f6cc7616-407c-5a76-a3cf-db1e720a6262",
      contentful_id: "2zCUuhfb85ZmRN81gBp5jw",
      node_locale: "sv",
      internalTitle: "Produkt Gröna Kortet (Gåvobevis)",
      componentTheme: "gold",
      productData: {
        glkId: "6521",
        productType: "Standard",
      },
      productName: "Gröna Kortet (+ Familje­femkamps­häfte)",
      productNameMyPages: "Gröna Kortet",
      productPageLink: {
        slug: "/biljetter/grona-kortet-flow",
      },
      productImage: {
        file: {
          url: "//images.ctfassets.net/ds6dz7ilx8up/5lSYMdJBcbjnmUb3ZlBnkG/09ba027b58186883a312c840a5a6e7dd/GLT_GLive_1600x900px.png",
        },
        gatsbyImageData: {
          images: {
            sources: [
              {
                srcSet:
                  "https://images.ctfassets.net/ds6dz7ilx8up/5lSYMdJBcbjnmUb3ZlBnkG/09ba027b58186883a312c840a5a6e7dd/GLT_GLive_1600x900px.png?w=228&h=128&q=100&fm=webp&fit=fill 228w,\nhttps://images.ctfassets.net/ds6dz7ilx8up/5lSYMdJBcbjnmUb3ZlBnkG/09ba027b58186883a312c840a5a6e7dd/GLT_GLive_1600x900px.png?w=456&h=256&q=100&fm=webp&fit=fill 456w",
                sizes: "228px",
                type: "image/webp",
              },
            ],
            fallback: {
              src: "https://images.ctfassets.net/ds6dz7ilx8up/5lSYMdJBcbjnmUb3ZlBnkG/09ba027b58186883a312c840a5a6e7dd/GLT_GLive_1600x900px.png?w=228&h=128&q=100&fm=png&fit=fill",
              srcSet:
                "https://images.ctfassets.net/ds6dz7ilx8up/5lSYMdJBcbjnmUb3ZlBnkG/09ba027b58186883a312c840a5a6e7dd/GLT_GLive_1600x900px.png?w=228&h=128&q=100&fm=png&fit=fill 228w,\nhttps://images.ctfassets.net/ds6dz7ilx8up/5lSYMdJBcbjnmUb3ZlBnkG/09ba027b58186883a312c840a5a6e7dd/GLT_GLive_1600x900px.png?w=456&h=256&q=100&fm=png&fit=fill 456w",
              sizes: "228px",
            },
          },
          layout: "fixed",
          width: 228,
          height: 128,
        },
        fullWidthGatsbyImageData: null,
        largeGatsbyImageData: null,
      },
      upsellRichText: null,
      description: {
        childMarkdownRemark: {
          html: '<p>Är du på jakt efter den perfekta presenten? Då har du hamnat helt rätt! Med Grönan Live-passet ger du bort minnen för livet med över 50 häftiga konsertupplevelser och alla danskvällar under hela sommarsäsongen 2022. Du får hem ett snyggt gåvobevis att ge bort. Den som får gåvobeviset kan enkelt aktivera sitt personliga pass på Mina Sidor och se fram emot en oförglömlig konsertsommar på Gröna Lund.</p>\n<p><strong>Grönan Live-passet ger dig:</strong></p>\n<ul>\n<li>Entré från 16.30 varje konsert under hela sommaren</li>\n<li>Tillgång till alla konserter på Stora och Lilla Scen</li>\n<li>Tillgång till alla danskvällar</li>\n</ul>\n<p><strong>Obs!</strong> Grönan Live-passet är personligt och måste <a href="https://www.gronalund.com/mina-sidor/login">registreras</a> på Mina Sidor för att kunna användas.</p>',
        },
      },
      readMoreLabel: "Viktig information om Grönan Live-passet som present",
      readMoreText: {
        childMarkdownRemark: {
          html: "<ul>\n<li>Grönan Live-passet gäller för en inpassering per konsert- eller danskväll i mån av plats. Observera att passet inte är giltigt de dagar då det inte är konsert- eller danskväll.</li>\n<li>Grönan Live-passet gäller för inpassering från kl. 16.30 de dagar vi har för- och eftermiddagspass och från öppningsstart de dagar vi har öppet hela dagen.</li>\n<li>Entré gäller i mån av plats under konsert- eller danskvällar sommarsäsongen 2022. Gönan Live-passet garanterar inte plats till en specifik konsert - först till kvarn gäller.</li>\n<li>Tidigare köpta Gröna Kortet för 2020 omvandlas till Grönan Live-pass och är giltiga för konserterna 2022.</li>\n<li>Med Grönan Live-passet ingår inga åk i parken.</li>\n<li>Ditt gåvobevis skickas det hem till den adress du anger vid beställning med en estimerad leveranstid på 7-14 arbetsdagar. Fraktkostnad på 29 kr tillkommer.</li>\n</ul>",
        },
      },
      shortDescription: "Ge bort fri entré till konserter och danskvällar hela sommaren 2023! Kan endast köpas online.",
      customPriceText: "Ingår i black week erbjudandet!",
      purchaseFlowCustomPriceText: null,
      hidePriceInProductListBlock: null,
      label: null,
      tags: [
        {
          id: "405784b7-a2d7-59fe-97ad-11950d5431b8",
          title: "Säsongskort",
        },
      ],
      customCtaText: null,
      optionalLinkLabelText: null,
      optionalLinkUrl: null,
      addedToCartHeadline: "Snyggt! 🙌🏼",
      addedToCartBody: "Världens bästa present ligger nu i din varukorg!",
      activateProductCalendar: null,
      numberOfJetpassIncluded: null,
      numberOfEntryTicketsIncluded: null,
      myPagesDescription: null,
      myPageTheme: "season-pass-gronan-live",
      myPagesProductInformation: null,
      needsTimeSlotBooking: false,
      purchasableOutsideEntryTime: null,
      seasonPassVisitorCategory: "Vuxen",
      backgroundColor: null,
      useFullWidthImage: null,
      enableRegistrationForm: null,
      preamble: null,
    },
    {
      id: "5c7440de-e42b-50ca-8cbd-ae4b2830386e",
      contentful_id: "s9BLLjHqZsSLX0ZaJeQjW",
      node_locale: "sv",
      internalTitle: "Produkt Guldkortet (",
      componentTheme: "gold",
      productData: {
        glkId: "4627",
        productType: "Standard",
      },
      productName: "Guldkortet",
      productNameMyPages: "",
      productPageLink: {
        slug: "/biljetter/guldkortet",
      },
      productImage: {
        file: {
          url: "//images.ctfassets.net/ds6dz7ilx8up/6oXhWk5WEhIiSxL5eF6Wty/009194e3459502a4d259f6705b50feba/guldkortetny-1600x900.png",
        },
        gatsbyImageData: {
          images: {
            sources: [
              {
                srcSet:
                  "https://images.ctfassets.net/ds6dz7ilx8up/6oXhWk5WEhIiSxL5eF6Wty/009194e3459502a4d259f6705b50feba/guldkortetny-1600x900.png?w=228&h=128&q=100&fm=webp&fit=fill 228w,\nhttps://images.ctfassets.net/ds6dz7ilx8up/6oXhWk5WEhIiSxL5eF6Wty/009194e3459502a4d259f6705b50feba/guldkortetny-1600x900.png?w=456&h=256&q=100&fm=webp&fit=fill 456w",
                sizes: "228px",
                type: "image/webp",
              },
            ],
            fallback: {
              src: "https://images.ctfassets.net/ds6dz7ilx8up/6oXhWk5WEhIiSxL5eF6Wty/009194e3459502a4d259f6705b50feba/guldkortetny-1600x900.png?w=228&h=128&q=100&fm=png&fit=fill",
              srcSet:
                "https://images.ctfassets.net/ds6dz7ilx8up/6oXhWk5WEhIiSxL5eF6Wty/009194e3459502a4d259f6705b50feba/guldkortetny-1600x900.png?w=228&h=128&q=100&fm=png&fit=fill 228w,\nhttps://images.ctfassets.net/ds6dz7ilx8up/6oXhWk5WEhIiSxL5eF6Wty/009194e3459502a4d259f6705b50feba/guldkortetny-1600x900.png?w=456&h=256&q=100&fm=png&fit=fill 456w",
              sizes: "228px",
            },
          },
          layout: "fixed",
          width: 228,
          height: 128,
        },
        largeGatsbyImageData: null,
        fullWidthGatsbyImageData: null,
      },
      upsellRichText: null,
      description: {
        childMarkdownRemark: {
          html: '<p>Med Guldkortet får du fri entré och obegränsade åk varje dag under hela sommarsäsongen 2021!</p>\n<p>Har du kvar Guldkortet från 2019? <a href="https://www.gronalund.com/biljetter/ateraktivera-guldkortet">Återaktivera det här!</a></p>\n<p><strong>Guldkortet ger dig</strong></p>\n<ul>\n<li>Entré varje dag hela sommaren</li>\n<li>Obegränsade åk hela sommaren</li>\n<li>Tillgång till alla konserter på Stora och Lilla Scen</li>\n<li>Tillgång till alla danskvällar på Dansbanan</li>\n</ul>\n<p><strong>Dessutom...</strong></p>',
        },
      },
      readMoreLabel: null,
      readMoreText: {
        childMarkdownRemark: {
          html: '<ul>\n<li>10% rabatt på alla kläder i våra Tivolibutiker</li>\n<li>10 kr rabatt på biljetter till House of Nightmares</li>\n<li>Gratis plusmeny (värde 8 kr) vid köp av valfri hamburgermeny i våra fastfoodrestauranger</li>\n</ul>\n<p><strong>Bra att veta om Guldkortet</strong></p>\n<ul>\n<li>Guldkortet är personligt och måste registreras innan ditt andra parkbesök. <a href="https://webbshop.gronalund.com/registrera">Registrera ditt Guldkort här.</a></li>\n<li>Guldkortet gäller för inpassering en gång per dag.</li>\n<li>Entré i mån av plats under ordinarie öppetdagar sommarsäsongen 2021.</li>\n<li>Ett stulet, borttappat eller på annat sätt förlorat kort kan ersättas mot en avgift om 100 kr. Gå till Gästservice eller Biljettcenter om du behöver ett nytt kort!</li>\n</ul>',
        },
      },
      shortDescription: " Fri entré och åkband varje dag hela sommaren 2021!",
      customPriceText: null,
      purchaseFlowCustomPriceText: null,
      hidePriceInProductListBlock: null,
      label: null,
      tags: [
        {
          id: "405784b7-a2d7-59fe-97ad-11950d5431b8",
          title: "Säsongskort",
        },
      ],
      customCtaText: null,
      optionalLinkLabelText: null,
      optionalLinkUrl: null,
      addedToCartHeadline: "WOW! 🤩",
      addedToCartBody: "%productName% ligger nu i din varukorg. Vi ses sommaren 2021!",
      activateProductCalendar: null,
      numberOfJetpassIncluded: null,
      numberOfEntryTicketsIncluded: null,
      myPagesDescription: null,
      myPageTheme: "season-pass-guldkortet",
      myPagesProductInformation: null,
      needsTimeSlotBooking: null,
      purchasableOutsideEntryTime: null,
      seasonPassVisitorCategory: null,
      backgroundColor: null,
      useFullWidthImage: null,
      enableRegistrationForm: null,
      preamble: null,
    },
  ],
  glkProducts: [
    {
      id: 6521,
      internalName: "Gröna Kortet Gåvobevis",
      friendlySalesNameSwe: "Gröna Kortet Gåvobevis",
      friendlyDisplayNameSwe: "Gröna Kortet Gåvobevis",
      friendlySalesNameEng: "Gröna Kortet Voucher",
      friendlyDisplayNameEng: "Gröna Kortet Voucher",
      priceIncludingVat: 395,
      priceExcludingVat: 316,
      vatAmount: 79,
      vatFraction: 0.25,
      isBuyable: true,
      minimumQuantity: 1,
      productType: WebshopProductType.STANDARD,
      deliveryTypes: [
        {
          deliveryType: DeliveryType.DIGITAL,
          deliveryProductId: undefined,
        },
      ],
      flags: {
        canBeOrdered: true,
        noDiscount: true,
        recipe: true,
        seasonPass: true,
        allowAddToMobileWallet: true,
      },
      metadata: {
        optionalDynamicDataTypes: ["CardReactivationV1", "CardHolderInformationV1"],
      },
    },
    {
      id: 4627,
      internalName: "Guldkortet Gåvobevis",
      friendlySalesNameSwe: "Guldkortet Vuxen Hemleverans",
      friendlyDisplayNameSwe: "Guldkortet Vuxen Hemleverans",
      friendlySalesNameEng: "Guldkortet Vuxen Hemleverans",
      friendlyDisplayNameEng: "Guldkortet Vuxen Hemleverans",
      priceIncludingVat: 1899,
      priceExcludingVat: 1519.2,
      vatAmount: 379.8,
      vatFraction: 0.25,
      isBuyable: true,
      minimumQuantity: 1,
      productType: WebshopProductType.STANDARD,
      deliveryTypes: [
        {
          deliveryType: DeliveryType.DIGITAL,
          deliveryProductId: undefined,
        },
      ],
      flags: {
        noDiscount: true,
        recipe: true,
        premiumCard: true,
      },
      metadata: {
        optionalDynamicDataTypes: ["CardReactivationV1", "CardHolderInformationV1"],
      },
    },
  ],
} satisfies StaticConfigContextType["products"];
