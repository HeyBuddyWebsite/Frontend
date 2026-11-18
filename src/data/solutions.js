// Keyword landing pages (/solutions/*). Narrower intents than the /services
// pages, which they link up to. Only state what the site already says about
// HeyBuddy (service pages and case studies); no invented numbers, prices,
// timelines or client names. FAQ answers are rendered verbatim and reused in
// the FAQPage schema, so keep them as plain strings.

export const SOLUTIONS_UPDATED = { iso: "2026-11-18", label: "November 2026" };

export const OFFICE = {
  street: "SupremeWork, Second floor, Eros City Square Mall, Sector 49",
  city: "Gurugram",
  postcode: "122018",
  region: "Haryana",
  phone: "+91 9318398188",
  phoneHref: "tel:+919318398188",
};

export const SOLUTIONS = [
  // 1 ─────────────────────────────────────────────────────────────────────
  {
    slug: "webar-development-company-india",
    category: "Augmented reality",
    name: "WebAR development",
    serviceName: "WebAR development",
    seoTitle: "WebAR Development Company in India",
    seoDescription:
      "WebAR from a Gurugram studio: product previews, AR packaging and QR-triggered campaigns that open in the phone's browser, with no app to install.",
    h1: "WebAR development company in India for AR that opens in the browser",
    summary: "Browser-based AR for product previews, packaging and QR-triggered campaigns, with no app install.",
    intro:
      "HeyBuddy is a WebAR development company in India, based in Gurugram, building augmented reality that runs in the phone's web browser. Someone scans a QR code or taps a link and the experience starts: no app store, no download, no sign-up. We use it for product previews on e-commerce pages, packaging that comes to life, campaign activations and QR-triggered experiences in store, at events and on outdoor media.",
    context: {
      title: "When WebAR is the right call, and when it isn't",
      paragraphs: [
        "The case for WebAR is reach. Every extra step between a person and your experience loses people, and asking a shopper to install an app for a thirty-second moment on a cereal box is a big ask. A link or QR code removes that step, which is why WebAR suits campaigns, packaging and product pages where most visitors will use it once or twice.",
        "The trade-off is that a browser gets less of the phone than a native app does. Very heavy 3D scenes, long sessions and features like full-body tracking are usually better served by app-based AR built on ARKit and ARCore. If your audience will come back every week, an app may be worth it. For a D2C furniture client we shipped both: WebAR on the website for casual shoppers and AR inside the app for repeat customers. We'll tell you which one your brief needs before anything gets built.",
      ],
    },
    build: {
      title: "WebAR experiences we build",
      items: [
        { title: "Product previews in your space", text: "Markerless AR that places a true-to-scale 3D product on the floor or table from a \"view in your room\" button on the product page. Shoppers can walk around it and check the details." },
        { title: "Packaging and label AR", text: "The pack itself becomes the trigger. Pointing the camera at a label or box plays a 3D animation, a recipe, a story or a game, and turns a printed surface into a media channel you own." },
        { title: "QR-triggered campaign experiences", text: "Activations for print, retail displays, events and outdoor, including QR-triggered AR that extends a 3D billboard onto the viewer's phone so the campaign travels home with them." },
        { title: "Image-tracked and marker-based AR", text: "Experiences anchored to a specific poster, catalogue page, business card or product. Marker-based tracking is very stable, which makes it a good fit for printed collateral." },
        { title: "AR portals", text: "A doorway placed in the real world that opens into a 360° environment: a showroom, a destination or a brand world, explored by walking through it." },
        { title: "Location-based AR", text: "Content that appears at specific places using GPS and compass data, for tourism, wayfinding, trails and on-ground events." },
      ],
    },
    proof: {
      title: "Related work",
      items: [
        {
          title: "AR for a D2C online furniture store",
          text: "A furniture brand selling directly to customers wanted shoppers to see pieces in their own homes and offices before buying. We implemented markerless AR as both WebAR on the website and AR in the app, with 360° product views and a placement feature for arranging furniture in a real room.",
          href: "/casestudies/ar-development/5",
          linkLabel: "Read the furniture AR case study",
        },
      ],
    },
    process: {
      title: "How we work on a WebAR project",
      steps: [
        { title: "Brief and audience", text: "Where will people scan, on what phones, and what should they do afterwards? These answers shape everything else." },
        { title: "Format decision", text: "WebAR or app AR, marker-based or markerless, and what the fallback is on phones that can't run AR." },
        { title: "3D assets built for mobile data", text: "We build or optimise models to a strict file-size budget, so the experience loads quickly on a 4G connection in a shop aisle." },
        { title: "Prototype on real phones", text: "An early working link you can open on your own phone, tested on iOS and Android browsers before the creative is locked." },
        { title: "Launch and measurement", text: "QR placement, landing flow and analytics, so you can see scans, time in experience and click-throughs." },
        { title: "Iterate", text: "Campaign content can be swapped or extended after launch without rebuilding the experience." },
      ],
    },
    who: {
      title: "Who WebAR is for",
      leftTitle: "Industries",
      left: [
        "FMCG, food and beverage brands with packaging to activate",
        "D2C and e-commerce brands selling physical products",
        "Furniture and home décor retailers",
        "Automotive and consumer electronics launches",
        "Events, exhibitions and brand activations",
        "Museums, tourism and education",
      ],
      rightTitle: "Typical briefs",
      right: [
        "A launch campaign that must work from a QR code on pack",
        "A \"view in your room\" button on product pages",
        "An event activation visitors use on their own phones",
        "Extending an outdoor or billboard campaign onto mobile",
        "Testing AR with real customers before committing to an app",
      ],
    },
    faqs: [
      { q: "What is WebAR, and how is it different from app-based AR?", a: "WebAR is augmented reality that runs inside the phone's web browser, opened from a link or QR code. App-based AR runs inside an installed app and can use more of the phone's capabilities. WebAR wins on reach and convenience; app AR wins on depth, performance and repeat use." },
      { q: "Does WebAR work on both iPhone and Android?", a: "Yes. WebAR runs in current mobile browsers on iOS and Android. Capabilities vary by device and browser, so we test on the kinds of phones your audience actually uses and plan a fallback, such as an interactive 3D viewer, for phones that can't run AR." },
      { q: "How much does WebAR development cost?", a: "It depends on the number and complexity of 3D models, the type of tracking, how interactive the experience is, and what analytics and integrations you need. HeyBuddy quotes per brief after a short consultation, so you get a figure based on your actual scope." },
      { q: "How long does it take to build a WebAR campaign?", a: "The biggest factors are whether 3D assets already exist, how many interactions the experience has, and how many rounds of brand approval are involved. We share a timeline along with the quote, and a working prototype comes early in the process." },
      { q: "Can you use our existing 3D models or CAD files?", a: "Usually, yes. Existing models generally need optimising for mobile browsers, and we handle that. If you don't have models, our 3D modelling team builds them from photos, drawings or a physical sample." },
      { q: "Can WebAR be added to our existing website?", a: "Yes. WebAR is typically embedded as a button or link on existing product or campaign pages. We check your platform during scoping and plan the integration around it." },
    ],
    related: [
      { href: "/services/ar-development", label: "AR development services" },
      { href: "/casestudies/ar-development/5", label: "Case study: AR for a D2C furniture store" },
      { href: "/services/3d-modeling", label: "3D modelling for AR" },
      { href: "/solutions/virtual-try-on-solutions", label: "AR virtual try-on solutions" },
    ],
    cta: {
      title: "Planning a WebAR launch?",
      text: "Tell us the product, the audience and where people will scan. We'll recommend a format and come back with a scoped quote.",
      button: "Discuss your WebAR idea",
    },
  },

  // 2 ─────────────────────────────────────────────────────────────────────
  {
    slug: "virtual-try-on-solutions",
    category: "Augmented reality",
    name: "AR virtual try-on",
    serviceName: "AR virtual try-on development",
    seoTitle: "AR Virtual Try-On Solutions for Retail Brands",
    seoDescription:
      "AR virtual try-on for fashion, eyewear, jewellery and furniture: 3D catalogue conversion, try-on and room placement, integrated with your store.",
    h1: "AR virtual try-on solutions for fashion, eyewear, jewellery and furniture",
    summary: "Try-on and room-placement AR for apparel, eyewear, jewellery and furniture, connected to your catalogue.",
    intro:
      "HeyBuddy builds AR virtual try-on solutions that let shoppers see a product on themselves, or in their room, before they buy. We've delivered a try-on platform for an apparel brand and room-placement AR for a D2C furniture store. We design each build around the product category, because a jacket, a pair of frames, a ring and a sofa each need a different kind of tracking.",
    context: {
      title: "Virtual try-on is four different problems",
      paragraphs: [
        "Apparel is the hardest. The garment has to follow a moving body and look believable across very different body shapes and sizes, which means computer vision for body measurement, accurate 3D garments and careful work on how fabric drapes. Eyewear is a face-tracking problem: frames have to sit at the right scale on the bridge of the nose and stay put as the head turns.",
        "Jewellery is small and reflective. Rings, bracelets and earrings need precise hand, wrist or ear tracking, and metals and stones only look real with good materials and lighting. Furniture is a spatial problem: detect the floor, place the piece at true scale, and let the shopper walk around it. Getting the category right at the start matters more than any single feature.",
      ],
    },
    build: {
      title: "What our virtual try-on work covers",
      items: [
        { title: "Apparel try-on", text: "Computer vision and 3D modelling that let customers dress in clothing using their phone camera, mix and match pieces, and check look and fit from several angles." },
        { title: "Eyewear and accessories try-on", text: "Face-tracked try-on for frames, sunglasses and headwear, scaled to the wearer's face so the result is useful for choosing a size, not just a selfie." },
        { title: "Jewellery and watch try-on", text: "Hand, wrist and ear tracking with high-quality materials, so metal finishes and stones read properly on a small screen." },
        { title: "Furniture and décor placement", text: "Markerless AR that places items at real scale in a home or office, with 360° views and the option to arrange several pieces together." },
        { title: "3D catalogue conversion", text: "Turning your inventory into optimised 3D models that render in real time, starting with the products where try-on will make the biggest difference." },
        { title: "Store and app integration", text: "Try-on that stays in sync with your product catalogue, inventory and order systems, on your website, your app, or both." },
      ],
    },
    proof: {
      title: "Two try-on projects we've delivered",
      items: [
        {
          title: "AR virtual try-on for an apparel brand",
          text: "An apparel brand with a large online and in-store presence wanted to cut returns caused by poor fit. We researched shopper pain points, then built a try-on platform using computer vision and 3D modelling, with ARKit on mobile and cloud infrastructure for the heavy 3D rendering. It integrates with the brand's website, app, catalogue and order systems. The published case study reports a 32% drop in returns and a 26% rise in online conversions within the first three months.",
          href: "/casestudies/ar-development/6",
          linkLabel: "Read the apparel try-on case study",
        },
        {
          title: "AR for a D2C furniture store",
          text: "For a furniture brand selling directly to customers, we implemented markerless AR on the website (WebAR) and in the app, so shoppers could place pieces in their own rooms, view them in 360° and try different arrangements before buying.",
          href: "/casestudies/ar-development/5",
          linkLabel: "Read the furniture AR case study",
        },
      ],
    },
    process: {
      title: "How we approach a try-on build",
      steps: [
        { title: "Category and catalogue audit", text: "Which products, how many SKUs, and what you already have: CAD files, 3D models or only photos." },
        { title: "Agree what \"accurate\" means", text: "Is the goal choosing a style, or choosing a size? Fit accuracy changes the technology and the budget, so we set the target up front." },
        { title: "Digitise the products", text: "3D models, materials and overlays for the first set of SKUs, optimised for real-time rendering on phones." },
        { title: "Test with real shoppers", text: "Prototypes tried by people with different body types, face shapes and phones, because that's where try-on succeeds or fails." },
        { title: "Integrate with your store", text: "Connect try-on to product pages, catalogue and checkout so it's part of the buying flow, not a side feature." },
        { title: "Launch and measure", text: "Track the numbers you care about, such as returns, conversion and order value, and expand to more SKUs from there." },
      ],
    },
    who: {
      title: "Who virtual try-on is for",
      leftTitle: "Categories",
      left: [
        "Fashion and apparel",
        "Eyewear and sunglasses",
        "Jewellery and watches",
        "Bags, hats and accessories",
        "Furniture, lighting and home décor",
      ],
      rightTitle: "Typical goals",
      right: [
        "Reduce returns caused by size and fit",
        "Give shoppers confidence on high-ticket items",
        "Make the product page do the job of a trial room",
        "Stand out against competitors already offering AR",
        "Reuse one 3D catalogue across web, app and campaigns",
      ],
    },
    faqs: [
      { q: "How accurate is AR virtual try-on for size and fit?", a: "Try-on is very good at showing style and look. Size accuracy depends on how body or face measurements are captured. On our apparel project we used computer vision to capture body measurements and build 3D avatars. We agree the accuracy target before development so expectations are clear." },
      { q: "Do shoppers need to download an app?", a: "Not necessarily. Try-on can run in the browser through WebAR or inside your own app. For a furniture client we built both: WebAR on the website and AR in the app." },
      { q: "Do we need 3D models of every product?", a: "Each product shown in AR needs a 3D model. We convert catalogues into optimised models, and we usually recommend starting with best-sellers or the products with the highest return rates, then expanding." },
      { q: "How much does a virtual try-on solution cost?", a: "Cost is driven by the category, the number of SKUs, the level of fit accuracy, the platforms (web, iOS, Android) and how deeply it integrates with your store. HeyBuddy quotes per brief after reviewing your catalogue and goals." },
      { q: "Can try-on connect to our e-commerce platform and inventory?", a: "Yes. On our apparel project the try-on was integrated with the brand's product catalogue, inventory management and order processing, with real-time sync, so shoppers can move straight from trying to buying." },
      { q: "Which product categories work best?", a: "Furniture and eyewear are the most mature because the tracking is reliable. Jewellery and watches work well with good materials. Apparel delivers the most value on returns but is the most complex to build, so it benefits most from a phased rollout." },
    ],
    related: [
      { href: "/casestudies/ar-development/6", label: "Case study: AR try-on for an apparel brand" },
      { href: "/casestudies/ar-development/5", label: "Case study: AR for a D2C furniture store" },
      { href: "/services/ar-development", label: "AR development services" },
      { href: "/solutions/webar-development-company-india", label: "WebAR development" },
    ],
    cta: {
      title: "Want shoppers to try before they buy?",
      text: "Share your category, catalogue size and platform. We'll suggest where try-on will pay off first and send a scoped quote.",
      button: "Talk to our AR team",
    },
  },

  // 3 ─────────────────────────────────────────────────────────────────────
  {
    slug: "unity-game-development-company-india",
    category: "Games",
    name: "Unity game development",
    serviceName: "Unity game development",
    seoTitle: "Unity Game Development Company in India",
    seoDescription:
      "Unity game development from Gurugram: mobile, PC, web and AR/VR games, multiplayer, co-development and LiveOps, with honest advice on Unity vs Unreal.",
    h1: "Unity game development company in India for mobile, PC and XR games",
    summary: "Mobile, PC, web and AR/VR games in Unity, plus co-development and LiveOps for studios.",
    intro:
      "HeyBuddy is a Unity game development company in India, working from Gurugram on mobile, PC, web and AR/VR games. Our game team builds in both Unity 6 and Unreal Engine 5.5, so the engine advice you get isn't a sales pitch. Unity is usually our pick when a game needs to reach a wide range of devices, iterate quickly and ship from one codebase to iOS, Android, desktop, web and headsets.",
    context: {
      title: "Unity or Unreal? How we decide",
      paragraphs: [
        "Unity is strong for mobile games from hyper-casual to mid-core, for 2D and stylised 3D, for AR through AR Foundation and for standalone VR headsets. Its build sizes, tooling and asset ecosystem make it practical for teams that need to ship and update often. Unreal Engine earns its place when the brief is cinematic visuals on PC and console: ray tracing, global illumination and physically based rendering at the high end.",
        "Our published game case studies lean towards that high end. Two used Unreal Engine 5, and one paired it with Unity ML-Agents to drive adaptive AI opponents. We mention this because choosing an engine is a business decision as much as a technical one, and you should hear the trade-offs before you commit.",
      ],
    },
    build: {
      title: "What we build in Unity",
      items: [
        { title: "Mobile games for iOS and Android", text: "From hyper-casual titles to mid-core RPGs, built with performance and retention in mind across a wide spread of devices." },
        { title: "Multiplayer and real-time games", text: "Real-time and turn-based multiplayer with networking, matchmaking and cloud integration, designed to handle concurrent players without lag." },
        { title: "Card, board and casual games", text: "Rummy, chess, ludo and puzzle games with clean rules logic and short-session play. For real-money formats we build in certified RNG integration and anti-fraud layers." },
        { title: "AR and VR games", text: "Unity AR Foundation experiences for phones and immersive games for headsets such as Meta Quest and Apple Vision Pro." },
        { title: "Gamified learning and training", text: "Game mechanics applied to education and skills training: quests instead of lessons, challenges instead of tests." },
        { title: "Co-development and LiveOps", text: "Extra engineering and art capacity for studios with a game already in production, plus seasonal updates, monitoring and post-launch fixes." },
      ],
    },
    proof: {
      title: "Game work we can show",
      items: [
        {
          title: "AI-powered one-on-one duel game",
          text: "For a game development company, we built a one-on-one duel game with 32 characters and 48 environments. Visuals were built in Unreal Engine 5, and the AI used Unity ML-Agents for behaviour trees, reinforcement learning, dynamic difficulty adjustment and real-time analysis of how each player plays.",
          href: "/casestudies/game-development/14",
          linkLabel: "Read the AI duel game case study",
        },
        {
          title: "Cross-platform action-adventure game",
          text: "With an established studio, we co-developed an open-world action-adventure game in Unreal Engine 5, using level-of-detail management, occlusion culling and dynamic resolution scaling to keep performance consistent across platforms.",
          href: "/casestudies/game-development/15",
          linkLabel: "Read the action-adventure case study",
        },
        {
          title: "Graphics and interface overhaul for a multiplayer game",
          text: "For a gaming hub with a global player base, we redesigned the graphics and interface of a multiplayer game while keeping load times under control.",
          href: "/casestudies/game-development/13",
          linkLabel: "Read the multiplayer game case study",
        },
      ],
    },
    process: {
      title: "How a Unity project runs with us",
      steps: [
        { title: "Discovery and concept", text: "Core loop, target audience and monetisation, tested for market fit and technical feasibility before any code." },
        { title: "Pre-production", text: "Game design document, technical architecture and art style guide, so production has a clear map." },
        { title: "Grey-box prototype", text: "A playable build with placeholder art to prove the core loop is fun before investing in full asset production." },
        { title: "Production", text: "3D models, animation and audio alongside game logic, physics and networking, with regular playable builds." },
        { title: "QA and stress testing", text: "Device compatibility testing, debugging and server load simulation ahead of launch day." },
        { title: "Launch and LiveOps", text: "App Store, Play Store and Steam submissions, then content updates and community features to keep players coming back." },
      ],
    },
    who: {
      title: "Who we make Unity games for",
      leftTitle: "Clients",
      left: [
        "Game studios and publishers needing co-development",
        "Founders with a game concept and no in-house team",
        "Card, board and casual gaming platforms",
        "Ed-tech and training providers",
        "Brands exploring games and gamified experiences",
      ],
      rightTitle: "Typical starting points",
      right: [
        "A concept that needs a playable prototype to pitch or fund",
        "A game in production that needs more hands",
        "An existing title that needs performance or UI work",
        "A mobile game that needs to reach headsets or the web",
        "A live game that needs ongoing updates",
      ],
    },
    faqs: [
      { q: "Do you build games in Unity or Unreal Engine?", a: "Both. We use Unity 6 and Unreal Engine 5.5. Unity is usually the better fit for mobile, web, AR and standalone VR, and for teams that need fast iteration. Unreal suits high-end PC and console visuals. We recommend an engine after discovery, based on your platforms, art style and team." },
      { q: "Can you join a Unity project that's already in development?", a: "Yes. Co-development is one of the ways we work with studios. We start by reviewing the codebase, assets and pipeline, then agree which features or areas our team will own." },
      { q: "Which platforms can you ship a Unity game to?", a: "iOS, Android, Windows, macOS, web and XR headsets such as Meta Quest and Apple Vision Pro. Console releases are also possible and involve the platform holders' own approval and certification processes, which we plan for." },
      { q: "How much does it cost to develop a Unity game in India?", a: "Cost depends on the scope of the core loop, the art style and number of assets, whether there's multiplayer and a backend, the target platforms and post-launch plans. HeyBuddy quotes per brief, and a prototype phase is a good way to get a firm number for the rest of the build." },
      { q: "Do you handle store submission and post-launch support?", a: "Yes. We handle submissions to the App Store, Play Store and Steam, and we offer LiveOps: monitoring, seasonal content updates and technical fixes after launch." },
      { q: "Can you add AI to the gameplay?", a: "Yes. We build adaptive difficulty, smart NPCs and procedural content generation. On one project we used Unity ML-Agents with reinforcement learning so AI opponents adapted to each player's style." },
    ],
    related: [
      { href: "/services/game-development", label: "Game development services" },
      { href: "/casestudies/game-development/14", label: "Case study: AI-powered duel game" },
      { href: "/casestudies/game-development/15", label: "Case study: cross-platform action-adventure" },
      { href: "/casestudies/game-development/13", label: "Case study: multiplayer game overhaul" },
    ],
    cta: {
      title: "Got a game that needs building?",
      text: "Send us the concept, the platforms and where you are today. We'll suggest the right engine and first milestone, with a scoped quote.",
      button: "Get a game consultation",
    },
  },

  // 4 ─────────────────────────────────────────────────────────────────────
  {
    slug: "software-development-company-gurugram",
    category: "Software",
    name: "Software development in Gurugram",
    serviceName: "Custom software development",
    local: true,
    seoTitle: "Software Development Company in Gurugram",
    seoDescription:
      "Custom software, mobile apps and AI features from a Sector 49 Gurugram team, for businesses in Gurugram, Delhi NCR and Noida. Meet us in person.",
    h1: "Software development company in Gurugram for teams across Delhi NCR",
    summary: "Custom web platforms, mobile apps and AI features from our Sector 49 office, for Gurugram, Delhi and Noida.",
    intro:
      "HeyBuddy is a software development company in Gurugram, with our office at SupremeWork in Eros City Square Mall, Sector 49. We build custom web platforms, mobile apps and AI features for businesses in Gurugram, Delhi NCR and Noida. Most of a build runs remotely with regular demos, but for discovery workshops and key reviews, being a short drive away makes it easy to sit in the same room.",
    context: {
      title: "Why a local software partner still helps",
      paragraphs: [
        "Software projects rarely fail on code. They fail on misunderstood requirements, slow decisions and a gap between the people who use a system and the people who build it. Meeting in person at the start, ideally where the work happens, closes that gap faster than any requirements document.",
        "Being in Gurugram also means the same time zone, the same holidays and no hand-off to an overseas team overnight. Clients in Delhi and Noida get the same: a team they can meet, and a single point of contact who is accountable for the outcome.",
      ],
    },
    build: {
      title: "What we build for businesses in Gurugram",
      items: [
        { title: "Custom business software", text: "Internal tools, workflow automation and dashboards that replace spreadsheets and manual steps, including migration from legacy systems without losing data." },
        { title: "Marketplaces and D2C commerce", text: "Direct-to-customer storefronts and marketplaces with payment gateways, multi-currency and multi-language support, and a design that matches the brand." },
        { title: "Mobile apps", text: "iOS and Android apps built alongside the web platform and backend they depend on, so the whole product is designed as one system." },
        { title: "AI features and agents", text: "Chatbots, voice assistants, document search over your own data, and AI agents with approval steps, added to new or existing software." },
        { title: "Cloud and data", text: "Cloud-native architecture that scales with usage, plus data pipelines and reporting your team can actually use." },
        { title: "Websites and CMS", text: "Content-managed websites and portals that your marketing team can update without a developer." },
      ],
    },
    proof: {
      title: "Software projects we've delivered",
      items: [
        {
          title: "D2C marketplace for a luxury watch brand",
          text: "An Indian luxury watch brand with customers worldwide wanted to move from multi-vendor marketplaces to its own direct-to-customer platform. We built a custom marketplace with payment gateway integrations, multi-currency and multi-language support, designed to carry the brand's look on every page.",
          href: "/casestudies/custom-software/16",
          linkLabel: "Read the marketplace case study",
        },
        {
          title: "Voice AI assistant for restaurant bookings",
          text: "We trained and deployed a voice-activated AI assistant that interprets spoken requests, recommends restaurants and dishes, and handles bookings, built on a natural language processing engine.",
          href: "/casestudies/AIcasestudy/9",
          linkLabel: "Read the voice AI case study",
        },
      ],
    },
    process: {
      title: "How we work",
      steps: [
        { title: "Discovery workshop", text: "At your office, ours in Sector 49, or remote. We map users, workflows and the decisions the software must support." },
        { title: "Scope and architecture", text: "A clear first phase with defined deliverables, and the technical design to support what comes after it." },
        { title: "Clickable prototype", text: "Screens your team can click through and react to before development begins." },
        { title: "Build in short cycles", text: "Working software demoed regularly, so feedback arrives while it's still cheap to act on." },
        { title: "QA and launch", text: "Testing for function, security and performance, then a planned rollout with your team trained on the system." },
        { title: "Support and evolution", text: "Maintenance and improvements after launch, from the same team that built it." },
      ],
    },
    who: {
      title: "Who we work with",
      leftTitle: "Industries",
      left: [
        "Retail, D2C and luxury brands",
        "Restaurants, hospitality and food-tech",
        "Consumer apps and marketplaces",
        "Startups building a first product",
        "Established businesses modernising old systems",
      ],
      rightTitle: "Areas we serve",
      right: [
        "Gurugram",
        "Delhi",
        "Noida",
        "The wider Delhi NCR",
        "Clients elsewhere in India and abroad, working remotely",
      ],
    },
    office: {
      title: "Visit our Gurugram office",
      text: "Meetings at the office are by appointment. Call or use the contact form and we'll set a time.",
    },
    faqs: [
      { q: "Where is your office in Gurugram?", a: "We're at SupremeWork, Second floor, Eros City Square Mall, Sector 49, Gurugram 122018. You can reach us on +91 9318398188." },
      { q: "Do you work with companies in Delhi and Noida?", a: "Yes. We work with clients across Delhi NCR, including Delhi and Noida, as well as elsewhere in India and abroad. Workshops and key reviews can be in person; day-to-day delivery runs remotely with regular demos." },
      { q: "How much does custom software development cost?", a: "It depends on the number of user types and features, integrations with other systems, platforms (web, iOS, Android), and security and compliance needs. HeyBuddy quotes per brief after discovery, and we often recommend a fixed-scope first phase so you can judge the partnership before committing to more." },
      { q: "Do you build mobile apps as well as web software?", a: "Yes. We build iOS and Android apps together with the web platform and backend they rely on, so the product works as one system." },
      { q: "Can you add AI to our existing software?", a: "Yes. We integrate AI into existing systems through APIs and connectors, including older platforms. Common examples are support chatbots, search over internal documents and automation of repetitive steps." },
      { q: "Can we start with a small project?", a: "Yes. A prototype or a fixed-scope pilot is often the best start. It gives you something useful quickly and shows you how we work before a larger build." },
    ],
    related: [
      { href: "/services/custom-software", label: "Custom software development" },
      { href: "/services/ai-development", label: "AI development services" },
      { href: "/casestudies/custom-software/16", label: "Case study: luxury watch D2C marketplace" },
      { href: "/casestudies/AIcasestudy/9", label: "Case study: voice AI for restaurants" },
    ],
    cta: {
      title: "Building something in Gurugram or Delhi NCR?",
      text: "Tell us what the software needs to do. We'll set up a discovery call or a meeting at our Sector 49 office, then send a scoped proposal.",
      button: "Book a discovery call",
    },
  },

  // 5 ─────────────────────────────────────────────────────────────────────
  {
    slug: "ar-vr-company-delhi-ncr",
    category: "AR, VR and metaverse",
    name: "AR VR company in Delhi NCR",
    serviceName: "AR and VR development",
    local: true,
    seoTitle: "AR VR Company in Delhi NCR, Based in Gurugram",
    seoDescription:
      "AR, VR and metaverse development plus VR/AR labs for schools, from a Gurugram studio serving Delhi, Noida and the NCR, with on-site setup and testing.",
    h1: "AR VR company in Delhi NCR, based in Gurugram",
    summary: "AR, VR, metaverse and school VR/AR labs from our Gurugram studio, with on-site setup across the NCR.",
    intro:
      "HeyBuddy is an AR VR company in Delhi NCR, with our studio in Sector 49, Gurugram. We design and build augmented reality, virtual reality and metaverse experiences for brands, real estate developers, architects, manufacturers and trainers, and we set up VR/AR labs for schools. Being in the region makes the physical side of immersive work easier: site visits, hardware setup, on-site testing and support on launch day.",
    context: {
      title: "AR, VR or metaverse: choosing the right medium",
      paragraphs: [
        "These terms get used interchangeably, but they solve different problems. AR adds digital content to the real world through a phone or tablet, so it's best when the setting matters: a product in a room, a label on a shelf, a machine on a factory floor. VR replaces the world entirely, which makes it ideal for training in places that are dangerous or expensive to recreate, and for touring spaces that aren't built yet.",
        "A metaverse space is a persistent, shared virtual world that people return to, such as a showroom, an event venue or a digital twin of a plant. Many good projects combine them. We start from the outcome you need and recommend the medium, not the other way round.",
      ],
    },
    build: {
      title: "What we build for clients in Delhi NCR",
      items: [
        { title: "AR for brands and retail", text: "WebAR campaigns, packaging AR, virtual try-on and \"view in your room\" product placement, on the web or in your app." },
        { title: "VR training and simulation", text: "Risk-free simulations for safety, vocational and corporate training on Meta Quest, HTC Vive, Pico and PC VR, integrated with your LMS where needed." },
        { title: "VR property tours and architectural visualisation", text: "Photorealistic walkthroughs of homes, offices and unbuilt projects, so buyers and stakeholders can experience a space before it exists." },
        { title: "Metaverse spaces and digital twins", text: "Virtual showrooms, event venues and 1:1 digital twins of facilities, with avatars, spatial audio and real-time collaboration." },
        { title: "VR/AR labs for schools and colleges", text: "Turnkey labs with headsets, curriculum-aligned immersive content, teacher controls and multi-user classrooms, set up on campus." },
        { title: "AR and VR games and activations", text: "Immersive games and event experiences for audiences on their own phones or on headsets at your venue." },
      ],
    },
    proof: {
      title: "Immersive projects we've delivered",
      items: [
        {
          title: "VR tours app for a real estate business",
          text: "We upgraded a real estate client's VR tours app for stability, realism and interactivity, so buyers could explore properties remotely, and made sure the app also worked for people without a VR headset.",
          href: "/casestudies/vr-development/10",
          linkLabel: "Read the VR property tours case study",
        },
        {
          title: "VR architectural visualisation for an architecture firm",
          text: "For a large architectural firm, we built a VR platform for presenting designs in immersive, photorealistic 3D instead of 2D renders, to help with design communication and client decisions.",
          href: "/casestudies/vr-development/11",
          linkLabel: "Read the VR architecture case study",
        },
      ],
    },
    process: {
      title: "How an immersive project runs",
      steps: [
        { title: "Discovery", text: "What should people learn, feel or do? We define the outcome and how it will be measured." },
        { title: "Medium and hardware", text: "AR, VR or a shared virtual space; phones, standalone headsets or PC VR; and how many users at once." },
        { title: "Feasibility and prototype", text: "An early build you can try on the actual device, to check comfort, tracking and performance." },
        { title: "Content production", text: "3D environments, models, interactions and, for training, the scenarios and scoring logic." },
        { title: "On-site setup and testing", text: "Installation and testing in your space, whether that's a sales gallery, a training centre or a classroom." },
        { title: "Support and updates", text: "Ongoing content updates, hardware guidance and maintenance after launch." },
      ],
    },
    who: {
      title: "Who we work with",
      leftTitle: "Industries",
      left: [
        "Real estate developers and architects",
        "Manufacturing and industrial training",
        "Schools, colleges and universities",
        "Retail, D2C and consumer brands",
        "Healthcare and medical training",
        "Events, exhibitions and experience centres",
      ],
      rightTitle: "Typical briefs",
      right: [
        "A VR walkthrough for a project still under construction",
        "A safety simulation for a plant or site",
        "A VR/AR lab for a school's STEM programme",
        "A virtual showroom or event space",
        "An AR campaign for a product launch",
      ],
    },
    office: {
      title: "Working with us across Delhi NCR",
      text: "Our studio serves Gurugram, Delhi, Noida and the wider NCR, and we work with clients elsewhere in India and abroad remotely. Visits are by appointment.",
    },
    faqs: [
      { q: "Where is HeyBuddy based?", a: "Our studio is at SupremeWork, Second floor, Eros City Square Mall, Sector 49, Gurugram 122018, and we work with clients across Delhi NCR, including Delhi and Noida. Phone: +91 9318398188." },
      { q: "Can you set up a VR or AR lab in our school?", a: "Yes. We set up turnkey VR/AR labs with headsets, curriculum-aligned immersive content, teacher controls and multi-user classroom features, and we install and test them on campus." },
      { q: "Which VR headsets do you develop for?", a: "We build for Meta Quest, HTC Vive, Pico and PC VR, and for Apple Vision Pro. We help you choose hardware based on your content, budget and how many people will use it at once." },
      { q: "Can a VR experience also work for people without a headset?", a: "Yes. On our real estate VR tours project, we made the app work for non-VR users too, so the same content could be viewed on a regular screen." },
      { q: "How much does an AR or VR project cost?", a: "It depends on the medium, the number of environments and 3D assets, interactivity, hardware and how many users must be supported at once. HeyBuddy quotes per brief, and a prototype is a good first step before full production." },
      { q: "Do you only work with clients in Delhi NCR?", a: "No. Delhi NCR is home and makes on-site work easy, but we deliver AR and VR projects for clients across India and abroad, working remotely, with on-site work planned where a project needs it." },
    ],
    related: [
      { href: "/services/ar-development", label: "AR development services" },
      { href: "/services/vr-development", label: "VR development services" },
      { href: "/services/metaverse", label: "Metaverse development" },
      { href: "/services/vr-ar-lab", label: "VR/AR lab setup for schools" },
    ],
    cta: {
      title: "Planning an AR or VR project in Delhi NCR?",
      text: "Tell us the audience and the outcome. We'll recommend a medium and hardware, and can meet at your site or our Gurugram studio.",
      button: "Talk to our XR team",
    },
  },

  // 6 ─────────────────────────────────────────────────────────────────────
  {
    slug: "cgi-product-animation-india",
    category: "CGI and 3D",
    name: "CGI product animation",
    serviceName: "CGI product animation",
    seoTitle: "CGI Product Animation Company in India",
    seoDescription:
      "CGI product animation and 3D product videos for e-commerce, D2C brands and launches: photoreal renders, explainers and 360° views from one 3D model.",
    h1: "CGI product animation company in India for launches and e-commerce",
    summary: "3D product videos, explainers and photoreal renders for e-commerce, D2C brands and launches.",
    intro:
      "HeyBuddy is a CGI product animation company in India, making 3D product videos and photoreal renders for e-commerce listings, D2C brands and product launches. Every frame comes from a 3D model, so you're not limited by what a camera can do. We can cut a product open, show a mechanism working, change colourways without a reshoot, and reuse the same model for AR, configurators and billboards.",
    context: {
      title: "Why brands move from product shoots to CGI",
      paragraphs: [
        "A product shoot captures one version of one product in one setting. CGI builds the product once and lets you render it any way you need: every colour and variant, any background, close-ups that would need specialist macro rigs, and cutaways that no camera can capture. For launches, you can have finished visuals before the production unit exists.",
        "It also scales differently. Once the model and lighting set-up are done, the next angle or variant costs far less than the first, and the results stay consistent across a whole catalogue. And the asset keeps paying back: the model behind your launch film can power your AR preview, your 360° viewer and your next campaign.",
      ],
    },
    build: {
      title: "3D product videos and visuals we make",
      items: [
        { title: "Launch films and hero videos", text: "Cinematic product reveals for launch campaigns, websites and social, with camera moves and lighting that would be impractical to shoot." },
        { title: "Technical explainer animations", text: "Animations that show how a complex product works, inside and out, balancing accuracy with clarity so buyers understand it quickly." },
        { title: "E-commerce renders and lifestyle imagery", text: "Photoreal product images and in-context scenes across large catalogues, with consistent lighting and backgrounds." },
        { title: "360° views and configurators", text: "Interactive views that let shoppers turn a product and look at it from every angle, or switch finishes and options." },
        { title: "CGI with live action", text: "3D products, environments and effects composited into filmed footage for ads and branded content." },
        { title: "3D billboard content", text: "Anamorphic and forced-perspective versions of your product animation for 3D digital billboards." },
      ],
    },
    proof: {
      title: "CGI work we've delivered",
      items: [
        {
          title: "Explainer video for an airport security CT scanner",
          text: "A CT scanner manufacturer in the UAE needed a hyper-realistic explainer for its airport security scanner. We modelled and textured the machine in Blender, ZBrush and Substance Painter, animated the journey from baggage entering the scanner to the 3D images it produces, and used a render farm to hit resolution and deadline.",
          href: "/casestudies/3ddevelopment/1",
          linkLabel: "Read the CT scanner case study",
        },
        {
          title: "CGI imagery for a D2C online furniture retailer",
          text: "For an online furniture brand, we replaced flat product photos with CGI lifestyle imagery, interior and exterior backgrounds, and a product configurator for viewing each piece from several angles, keeping quality consistent across a large catalogue.",
          href: "/casestudies/cgidevelopment/7",
          linkLabel: "Read the furniture CGI case study",
        },
        {
          title: "CGI pipeline for a media brand",
          text: "For a media and entertainment brand, we built a CGI pipeline that blends live-action footage with photorealistic 3D environments, characters and effects.",
          href: "/casestudies/cgidevelopment/8",
          linkLabel: "Read the media CGI case study",
        },
      ],
    },
    process: {
      title: "How a product animation comes together",
      steps: [
        { title: "Brief and story", text: "What must the viewer understand or feel by the end? That decides length, shots and level of technical detail." },
        { title: "Model build", text: "We build the product from CAD files, drawings, photos or a physical sample, accurate down to the details buyers notice." },
        { title: "Look development", text: "Materials, finishes and lighting matched to the real product and your brand, approved on stills before animation." },
        { title: "Storyboard and animatic", text: "Rough timing and camera moves agreed up front, so changes happen when they're cheap." },
        { title: "Animation and rendering", text: "Final animation, rendered at the resolution each channel needs, using a render farm for demanding jobs." },
        { title: "Delivery for every channel", text: "Cut-downs and formats for marketplaces, your website, social and screens, plus the 3D model to reuse." },
      ],
    },
    who: {
      title: "Who CGI product animation is for",
      leftTitle: "Industries",
      left: [
        "D2C and e-commerce brands",
        "Furniture and home décor",
        "Consumer electronics and appliances",
        "Industrial, medical and security equipment",
        "FMCG and packaged goods",
        "Media and entertainment",
      ],
      rightTitle: "Typical briefs",
      right: [
        "A launch film before production units are ready",
        "Catalogue imagery for hundreds of SKUs",
        "An explainer that shows how a complex product works",
        "Colour and variant renders without reshoots",
        "One 3D asset for video, AR and billboards",
      ],
    },
    faqs: [
      { q: "What's the difference between CGI product animation and a product shoot?", a: "A shoot photographs a physical product. CGI builds a 3D model of the product and renders it, so you can show any variant, angle, background or cutaway, and reuse the model for future content without reshooting." },
      { q: "What do you need from us to start?", a: "CAD files are ideal. If you don't have them, drawings, detailed photos or a physical sample work too, along with brand guidelines and any reference videos you like." },
      { q: "Can the 3D model be reused for AR or a 3D configurator?", a: "Yes. That's one of the biggest advantages of CGI. The same model can be optimised for WebAR, 360° viewers and configurators, and adapted for 3D billboard content." },
      { q: "How much does a 3D product video cost?", a: "It depends on the video's length, how many products are involved, the complexity and realism of the models, whether mechanisms need animating, and the output formats. HeyBuddy quotes per brief once we've seen the product and the story you want to tell." },
      { q: "How long does a CGI product animation take?", a: "Timelines depend mainly on whether CAD data exists, the length and complexity of the animation, and the number of review rounds. We share a schedule with the quote." },
      { q: "Do you make content for 3D anamorphic billboards?", a: "Yes. We create anamorphic and forced-perspective CGI for 3D digital billboards, tailored to the specific screen and viewing angles, and a product animation can often be adapted for this." },
    ],
    related: [
      { href: "/services/cgi", label: "CGI and VFX services" },
      { href: "/services/3d-modeling", label: "3D modelling services" },
      { href: "/services/billboard", label: "3D anamorphic billboards" },
      { href: "/casestudies/3ddevelopment/1", label: "Case study: CT scanner explainer video" },
    ],
    cta: {
      title: "Have a product that deserves better visuals?",
      text: "Share the product, the channels and your launch date. We'll suggest the right mix of video and stills, with a scoped quote.",
      button: "Start your CGI project",
    },
  },

  // 7 ─────────────────────────────────────────────────────────────────────
  {
    slug: "vr-training-solutions",
    category: "Virtual reality",
    name: "VR training solutions",
    serviceName: "VR training simulation development",
    seoTitle: "VR Training Solutions for Safety and Skills",
    seoDescription:
      "VR training simulations for industrial safety, medical and corporate learning: risk-free scenarios on Quest, Pico, Vive and PC VR, linked to your LMS.",
    h1: "VR training solutions for industrial, medical and corporate teams",
    summary: "Risk-free VR simulations for industrial safety, medical practice and corporate training.",
    intro:
      "HeyBuddy builds VR training solutions: simulations that let people practise dangerous, expensive or rare tasks in a fully controlled virtual environment before they do them for real. We develop for standalone and PC VR headsets in Unity and Unreal Engine 5, and connect training to your LMS so results land where your L&D team already works.",
    context: {
      title: "What VR training does better than a classroom",
      paragraphs: [
        "Most training explains a task. VR lets people do it: reach for the right valve, notice the hazard, follow the procedure under time pressure, and make the mistake that would be costly in the real world. Trainees can repeat a scenario as often as they need, and the same scenario runs identically for every batch, on every site.",
        "VR is not the answer to everything, and it shouldn't be sold that way. Compliance reading, simple software tasks and anything a short video covers well don't need a headset. VR earns its cost where mistakes are dangerous or expensive, where equipment is scarce or can't be taken offline, or where the situation is too risky to stage. We'll help you pick the modules where it pays back first.",
      ],
    },
    build: {
      title: "VR training simulations we build",
      items: [
        { title: "Industrial and site safety", text: "Simulations of high-risk environments, such as construction sites, plants and work at height, where trainees learn to spot hazards and respond correctly without being exposed to them." },
        { title: "Medical and healthcare training", text: "Procedure practice in a zero-risk virtual setting, and VR tools that support work from surgical planning to patient-facing applications." },
        { title: "Equipment and maintenance procedures", text: "Step-by-step drills for specialised tasks, such as maintenance or hazardous materials handling, with performance scoring at each step." },
        { title: "Corporate safety training", text: "Emergency procedures and workplace safety scenarios that staff can repeat on demand, without disrupting operations." },
        { title: "Multi-user and instructor-led sessions", text: "Shared virtual spaces where an instructor and trainees in different locations train together, with avatars, voice chat and shared 3D models." },
        { title: "LMS integration and analytics", text: "Completion, scores and time-on-task sent to your LMS or other enterprise systems, so VR sits inside your existing training records." },
      ],
    },
    proof: {
      title: "VR training work",
      items: [
        {
          title: "Surgical training simulation for a medical school",
          text: "We developed a VR simulation that let students at a medical school practise cardiac surgery in a zero-risk environment, before moving on to physical simulations.",
        },
        {
          title: "Hazard simulation for a construction firm",
          text: "A global construction firm used our VR training to simulate high-risk site environments, so workers could experience dangerous situations and learn the right response without being put in danger.",
          href: "/services/vr-development",
          linkLabel: "See our VR development work",
        },
      ],
    },
    process: {
      title: "How we build a VR training programme",
      steps: [
        { title: "Training needs analysis", text: "Which task, which mistakes matter most, and how you assess competence today. This sets what the simulation must measure." },
        { title: "Scenario design with your experts", text: "Your subject-matter experts walk us through the real procedure, including the shortcuts and failure points that manuals leave out." },
        { title: "Hardware and deployment plan", text: "Standalone or PC VR, how many headsets, single or multi-user, and where sessions will take place." },
        { title: "Prototype and comfort testing", text: "An early build in the headset to test realism, controls and comfort, using techniques like teleport movement to reduce motion sickness." },
        { title: "Production and scoring", text: "Full environments, equipment models, branching outcomes and the scoring logic that turns each session into data." },
        { title: "Pilot, rollout and updates", text: "A pilot with one batch of trainees, refinement from their feedback, then rollout and content updates as procedures change." },
      ],
    },
    who: {
      title: "Who uses VR training",
      leftTitle: "Industries",
      left: [
        "Manufacturing and process plants",
        "Construction and infrastructure",
        "Healthcare and medical education",
        "Chemicals and hazardous materials handling",
        "Aviation and technical maintenance",
        "Corporate learning and development teams",
      ],
      rightTitle: "Typical briefs",
      right: [
        "A safety induction that new workers actually remember",
        "Practice on equipment that can't be taken offline",
        "A procedure that is too risky to rehearse for real",
        "Consistent training across several sites",
        "Measurable competence data for audits",
      ],
    },
    faqs: [
      { q: "Is VR training more effective than classroom training?", a: "For hands-on, high-risk or rarely practised tasks, VR lets people learn by doing and repeat scenarios safely, which a classroom can't offer. The best way to judge it for your organisation is a pilot module measured against your current training." },
      { q: "Which VR headsets do you build training for?", a: "We build for standalone headsets such as Meta Quest and Pico, and for HTC Vive and PC VR. We recommend hardware based on how realistic the scenario must be, how many trainees you have and where training happens." },
      { q: "Can VR training connect to our LMS?", a: "Yes. We integrate VR experiences with existing LMS, CRM or proprietary enterprise software so completion and scoring data is recorded alongside the rest of your training." },
      { q: "Can several trainees train together?", a: "Yes. We build multi-user sessions where an instructor and trainees share one virtual space, even from different locations, with voice chat and shared 3D models." },
      { q: "Will trainees feel motion sickness?", a: "We design for comfort from the start: careful movement options such as teleportation, stable frame rates and rigorous testing in the headset. Comfort is checked during the prototype, before full production." },
      { q: "How much does a VR training simulation cost?", a: "It depends on the number of scenarios, the realism of environments and equipment, branching and scoring logic, multi-user needs, hardware and integrations. HeyBuddy quotes per brief, and a single pilot module is a sensible first step." },
    ],
    related: [
      { href: "/services/vr-development", label: "VR development services" },
      { href: "/services/vr-ar-lab", label: "VR/AR labs for education" },
      { href: "/services/metaverse", label: "Metaverse training and simulation" },
      { href: "/solutions/ar-vr-company-delhi-ncr", label: "AR VR company in Delhi NCR" },
    ],
    cta: {
      title: "Have a task your team can't afford to get wrong?",
      text: "Tell us the procedure and who needs training. We'll suggest a pilot module and the right hardware, with a scoped quote.",
      button: "Plan a VR training pilot",
    },
  },

  // 8 ─────────────────────────────────────────────────────────────────────
  {
    slug: "vr-real-estate-virtual-tours",
    category: "Virtual reality",
    name: "VR property tours",
    serviceName: "VR virtual property tour development",
    seoTitle: "VR Virtual Property Tours for Real Estate",
    seoDescription:
      "VR virtual property tours for real estate: photoreal, true-to-scale walkthroughs of ready and unbuilt projects that work on headsets, phones and laptops.",
    h1: "VR virtual property tours for real estate developers and agents",
    summary: "Photoreal, true-to-scale walkthroughs of ready and unbuilt properties, on headsets and regular screens.",
    intro:
      "HeyBuddy builds VR virtual property tours for real estate: photorealistic, true-to-scale walkthroughs that let buyers explore a home, office or unbuilt project from anywhere. We've built a VR tours app for a property business and a 1:1 VR visualisation platform for an architecture firm. The same 3D work can power a tour on a headset, a phone or a laptop.",
    context: {
      title: "360° photos, CGI walkthroughs and VR tours aren't the same thing",
      paragraphs: [
        "A 360° photo tour needs a finished property and a camera. It's quick, but you can only stand where the photographer stood. A VR tour built from 3D models works before a single brick is laid, lets the buyer move freely, and gives a genuine sense of ceiling height, room size and the view from the balcony.",
        "The catch is that most buyers don't own a headset. A tour that only works in VR reaches very few people, so on our real estate project we made sure the app worked for non-VR users too. In practice the best setup is usually a headset experience in the sales office and the same tour on a phone or laptop for everyone else.",
      ],
    },
    build: {
      title: "What our VR property tours include",
      items: [
        { title: "Walkthroughs of unbuilt projects", text: "1:1 scale VR tours built from architectural drawings, so buyers can walk through apartments and towers that are still under construction." },
        { title: "Remote tours of ready properties", text: "Tours that let prospects explore homes, offices and rental units from their own homes, saving site visits for serious buyers." },
        { title: "Design review for architects", text: "Immersive 1:1 visualisation where architects and clients walk through a design together and refine it in real time." },
        { title: "Self-serve listing creation", text: "Tools that let your own team add new properties to the app, held to the same visual standard, without coming back to us each time." },
        { title: "Photorealistic materials and light", text: "Ray tracing, global illumination and physically based rendering, so finishes, daylight and scale look the way they will in reality." },
        { title: "Headset, phone and web delivery", text: "One tour that runs on VR headsets and on regular screens, tested across the devices your buyers use." },
      ],
    },
    proof: {
      title: "Property and architecture projects",
      items: [
        {
          title: "VR tours app for a real estate business",
          text: "A real estate company that sells, buys and rents properties was losing time taking people to every site. We upgraded their app for stability, realism and interactivity so prospects could tour properties remotely, made it usable for people without a headset, and let the client add new properties themselves.",
          href: "/casestudies/vr-development/10",
          linkLabel: "Read the VR tours case study",
        },
        {
          title: "1:1 VR visualisation for an architecture firm",
          text: "For a large architectural firm, we built a VR platform where architects and clients step inside designs at 1:1 scale, walk through them from different perspectives and iterate together. It used ray tracing and physically based rendering for realism, teleportation and smooth movement for comfort, and integrated with the firm's existing design tools.",
          href: "/casestudies/vr-development/11",
          linkLabel: "Read the VR architecture case study",
        },
      ],
    },
    process: {
      title: "How we produce a property tour",
      steps: [
        { title: "Drawings and specifications", text: "Floor plans, CAD or BIM files, elevations and material specifications, handled under NDA with restricted access and secure file transfer." },
        { title: "3D modelling", text: "Accurate models of the building, interiors and surroundings, matched to the drawings down to fixtures and finishes." },
        { title: "Look development", text: "Materials, furniture and lighting signed off on still renders before the tour is assembled." },
        { title: "Navigation and interaction", text: "How people move, which rooms and options they can explore, and comfortable controls for first-time headset users." },
        { title: "Device testing", text: "Testing on the headsets, phones and browsers you'll use for sales, including performance on mid-range phones." },
        { title: "Launch and new units", text: "Deployment to your sales team and website, plus a simple way to add new units or towers as they launch." },
      ],
    },
    who: {
      title: "Who VR property tours are for",
      leftTitle: "Clients",
      left: [
        "Residential and commercial developers",
        "Brokers, agencies and property platforms",
        "Architects and interior designers",
        "Commercial leasing teams",
        "Buyers' teams selling to overseas or out-of-town clients",
      ],
      rightTitle: "Typical briefs",
      right: [
        "Pre-launch sales for a project still on paper",
        "Fewer wasted site visits for ready inventory",
        "A sales-office headset experience",
        "Faster design sign-off with clients",
        "One 3D asset for VR, web and marketing renders",
      ],
    },
    faqs: [
      { q: "Can you create a VR tour before the building exists?", a: "Yes. We build the tour from architectural drawings and specifications, so buyers can walk through a 1:1 scale version of the project while it is still under construction." },
      { q: "Do buyers need a VR headset?", a: "No. We design tours that work on headsets and on regular phones and laptops. On our real estate tours project, making the app usable for non-VR users was a core requirement." },
      { q: "What do you need from us to start?", a: "Floor plans, CAD or BIM files, elevations and material or finish specifications. Photos and mood boards help with interiors. If something is missing, our 3D team can work from what you have and confirm details with your architects." },
      { q: "Will our drawings and plans stay confidential?", a: "Yes. We work under signed NDAs, restrict access to project data and use secure file transfer for drawings and models." },
      { q: "Can our own team add new listings to the tour app?", a: "It can be built that way. On our real estate project, the client could create and showcase new properties themselves. We scope self-serve tools during discovery if you need them." },
      { q: "How much does a VR property tour cost?", a: "It depends on the area and number of unit types, the level of realism, interactivity such as finish options, the devices you need to support and whether you need self-serve tools. HeyBuddy quotes per brief." },
    ],
    related: [
      { href: "/services/vr-development", label: "VR development services" },
      { href: "/services/3d-modeling", label: "3D modelling and architectural visualisation" },
      { href: "/casestudies/vr-development/10", label: "Case study: VR tours for real estate" },
      { href: "/casestudies/vr-development/11", label: "Case study: VR architectural visualisation" },
    ],
    cta: {
      title: "Launching a project buyers can't visit yet?",
      text: "Send us the drawings and the launch date. We'll recommend headset, web or both, and send a scoped quote.",
      button: "Discuss your property tour",
    },
  },

  // 9 ─────────────────────────────────────────────────────────────────────
  {
    slug: "virtual-showroom-development",
    category: "Metaverse",
    name: "Virtual showrooms",
    serviceName: "Virtual showroom development",
    seoTitle: "Virtual Showroom Development for Brands",
    seoDescription:
      "Virtual showroom development in 3D, VR and the metaverse: digital stores with avatars, consultation rooms, launch events and commerce built in.",
    h1: "Virtual showroom development in 3D, VR and the metaverse",
    summary: "3D, VR and metaverse showrooms with avatars, consultation rooms, launch events and commerce.",
    intro:
      "HeyBuddy handles virtual showroom development for brands that want customers to explore products in a space, not a grid of thumbnails. We build 3D showrooms, VR showrooms for headsets and persistent metaverse spaces with avatars, consultation rooms and events, and we design each one around how your customers actually shop.",
    context: {
      title: "Choosing the right kind of virtual showroom",
      paragraphs: [
        "A 3D showroom on desktop and mobile reaches the most people and suits everyday browsing. A VR showroom offers the deepest sense of presence, which works well for high-value products at events, in sales offices or for private appointments. A metaverse showroom is persistent and social: many visitors at once, avatars, live hosts and events, and a reason to come back.",
        "The right answer depends on who you need to reach and what they need to do there. If you're unsure whether a full build is worth it, a rented metaverse space for a product launch or exhibition is a lower-cost way to test the idea with real customers first.",
      ],
    },
    build: {
      title: "What goes into our virtual showrooms",
      items: [
        { title: "3D environment design", text: "A digital twin of your flagship store, or a space that could never exist physically, designed around your brand and your product range." },
        { title: "Avatars and live consultation", text: "Personalised avatars, private consultation rooms and voice chat, so a sales associate can guide a customer just as they would in store." },
        { title: "Launches and events", text: "Product reveals, shows and business events such as conferences and seminars, hosted inside the showroom." },
        { title: "Commerce and integration", text: "Immersive marketplaces with secure transactions, connected to your existing systems so product data and orders stay in sync." },
        { title: "Digital collectibles", text: "NFTs integrated into the showroom for limited editions, digital twins of products or access passes." },
        { title: "Rental spaces for pilots", text: "Custom metaverse spaces on rent for meetings, exhibitions, showrooms and launches, so you can test before you build your own." },
      ],
    },
    proof: {
      title: "Showroom work",
      items: [
        {
          title: "Persistent virtual showroom for a jewellery brand",
          text: "For a premier jewellery brand, we created a persistent virtual showroom with personalised avatars and private consultation rooms, bringing the one-to-one feel of a luxury store visit online.",
          href: "/services/metaverse",
          linkLabel: "See our metaverse work",
        },
        {
          title: "Product visuals that carry into the showroom",
          text: "Showrooms are only as convincing as the products in them. Our CGI work for a D2C furniture retailer, including lifestyle imagery and a product configurator, shows the level of product detail we bring into 3D spaces.",
          href: "/casestudies/cgidevelopment/7",
          linkLabel: "Read the furniture CGI case study",
        },
      ],
    },
    process: {
      title: "How we build a virtual showroom",
      steps: [
        { title: "Goals and customer journey", text: "Who visits, what they should be able to do, and how success will be measured: visits, appointments, leads or sales." },
        { title: "Space concept", text: "Layout, zones and atmosphere, sketched and approved before any detailed 3D work." },
        { title: "Product digitisation", text: "High-quality 3D models of your products, optimised so the space loads quickly on the devices your customers use." },
        { title: "Build and integrate", text: "Developed in Unity, Unreal Engine 5 or WebXR depending on reach and fidelity, and connected to your product and order systems." },
        { title: "Cross-device testing", text: "Testing on desktop, mobile and VR headsets so every visitor gets a smooth experience." },
        { title: "Launch and analytics", text: "A launch plan, often built around an event, plus analytics to track how visitors move and what they engage with." },
      ],
    },
    who: {
      title: "Who virtual showrooms are for",
      leftTitle: "Industries",
      left: [
        "Luxury, jewellery and fashion",
        "Automotive",
        "Furniture and interiors",
        "Real estate and property",
        "Consumer electronics",
        "Manufacturers with large or complex equipment",
      ],
      rightTitle: "Typical briefs",
      right: [
        "A flagship-store experience for customers far from the store",
        "Private appointments for high-value products",
        "A virtual launch event",
        "A permanent alternative to trade-show stands",
        "A low-cost pilot before a full metaverse build",
      ],
    },
    faqs: [
      { q: "Do visitors need a VR headset to enter a virtual showroom?", a: "No. We build showrooms that are accessible on desktop, mobile and VR headsets, so customers can visit from whatever device they have." },
      { q: "How is a virtual showroom different from a 3D product page?", a: "A 3D product page shows one item. A showroom places your range in a designed space where customers can browse, meet a sales associate, attend an event and come back, much like a physical store." },
      { q: "Can the showroom connect to our e-commerce system?", a: "Yes. We integrate showrooms with your existing systems, with data synchronisation, so product information and transactions stay consistent." },
      { q: "Can we host live events in the showroom?", a: "Yes. We build for launches, shows and business events such as conferences and seminars, with avatars, voice chat and real-time interaction." },
      { q: "Can we test the idea before building our own space?", a: "Yes. We offer custom metaverse spaces on rent for meetings, exhibitions, showrooms and product launches, which is a lower-cost way to test your strategy." },
      { q: "How much does virtual showroom development cost?", a: "It depends on the size and detail of the space, the number of products to model, the devices supported, social and event features, and commerce integration. HeyBuddy quotes per brief after a consultation." },
    ],
    related: [
      { href: "/services/metaverse", label: "Metaverse development services" },
      { href: "/services/3d-modeling", label: "3D modelling for products and spaces" },
      { href: "/services/vr-development", label: "VR development services" },
      { href: "/solutions/virtual-try-on-solutions", label: "AR virtual try-on solutions" },
    ],
    cta: {
      title: "Want a store customers can visit from anywhere?",
      text: "Tell us about your products and customers. We'll recommend a 3D, VR or metaverse format and send a scoped quote.",
      button: "Plan your virtual showroom",
    },
  },

  // 10 ────────────────────────────────────────────────────────────────────
  {
    slug: "ai-voice-assistant-development",
    category: "Artificial intelligence",
    name: "AI voice assistants and chatbots",
    serviceName: "AI voice assistant and chatbot development",
    seoTitle: "AI Voice Assistant and Chatbot Development",
    seoDescription:
      "AI voice assistant and chatbot development: voice booking, support bots with human handover and assistants that connect to your booking, order and CRM systems.",
    h1: "AI voice assistant and chatbot development for customer-facing products",
    summary: "Voice assistants and chatbots that connect to booking, order and support systems, with human handover.",
    intro:
      "HeyBuddy does AI voice assistant and chatbot development for businesses that want customers to get things done by talking or typing: finding, booking, ordering and asking. Our best-known example is Servi, a voice assistant we built for a US food-tech company that handles restaurant search, table booking and dish recommendations from start to finish.",
    context: {
      title: "The conversation is the easy part",
      paragraphs: [
        "Modern language models make it straightforward to build something that chats convincingly. What separates a useful assistant from a demo is everything around the conversation: real-time access to the systems that do the work, such as booking, inventory or CRM; knowing when to hand over to a person; keeping personal data safe; and improving from real conversations after launch.",
        "Voice and chat also suit different jobs. Voice works when hands are busy or the task is quick and well defined, like booking a table. Chat suits support questions, comparisons and anything people want to read twice. Many products need both, sharing the same back end. We decide the channel from the task, not the trend.",
      ],
    },
    build: {
      title: "AI assistants and chatbots we build",
      items: [
        { title: "Voice assistants", text: "Voice-activated assistants that interpret natural speech, ask follow-up questions and complete tasks, built on NLP models trained for your domain." },
        { title: "Customer support chatbots", text: "Context-aware bots that handle complex conversations, learn from your FAQs and escalate smoothly to human agents when needed." },
        { title: "Multilingual and omnichannel", text: "Assistants that support multiple languages and run on your website, app and other channels from one conversation design." },
        { title: "Knowledge assistants on your data", text: "Retrieval-augmented (RAG) assistants that answer from your own documents and policies, with fact-checking layers to keep answers grounded." },
        { title: "Booking and transaction flows", text: "Assistants connected through secure APIs to booking, ordering and inventory systems, so a conversation ends in a completed action." },
        { title: "AI agents", text: "Agents that carry out multi-step work across your tools, with approval steps, failure recovery and a log of every decision." },
      ],
    },
    proof: {
      title: "Conversational AI we've delivered",
      items: [
        {
          title: "Servi: a voice assistant for restaurant bookings",
          text: "For a US food-tech company, we built Servi, a voice assistant covering the whole dining journey: restaurant search, seat booking, dish recommendations based on taste and dietary needs, and real-time coordination with restaurants, including dynamic seating charts and two-way communication with the kitchen. We built custom NLP models for voice commands, trained recommendation models on dining preferences, integrated multiple booking systems through secure APIs and encrypted customer data.",
          href: "/casestudies/AIcasestudy/9",
          linkLabel: "Read the Servi case study",
        },
        {
          title: "NLP chatbot for customer engagement",
          text: "We built an NLP-powered chatbot that answers customer queries promptly with personalised responses, reducing response times for the client's support team.",
          href: "/services/ai-development",
          linkLabel: "See our AI development work",
        },
      ],
    },
    process: {
      title: "How we build a voice assistant or chatbot",
      steps: [
        { title: "Map the conversations", text: "The top tasks and questions customers bring, what the assistant should resolve, and what must always go to a person." },
        { title: "Data and integrations", text: "Which systems the assistant reads from and writes to, and how customer data is protected along the way." },
        { title: "Prototype the dialogue", text: "A working prototype tested with real customer phrasing early, before the integrations are finished." },
        { title: "Build and train", text: "Language understanding, retrieval and integrations built and tuned on your domain's vocabulary." },
        { title: "Test with real users", text: "Edge cases, interruptions, wrong answers and handover, tested before anyone outside the team sees it." },
        { title: "Launch and improve", text: "An analytics dashboard showing what people ask, where the assistant fails and when it hands over, feeding regular improvements." },
      ],
    },
    who: {
      title: "Who we build assistants for",
      leftTitle: "Industries",
      left: [
        "Food-tech, restaurants and hospitality",
        "Retail and D2C e-commerce",
        "Travel and booking platforms",
        "Service businesses that run on appointments",
        "Internal teams that need answers from company documents",
      ],
      rightTitle: "Typical briefs",
      right: [
        "Let customers book or order by voice",
        "Cut first-response time for support",
        "Answer policy and product questions from our own docs",
        "Add an assistant to an existing app",
        "Automate a repetitive multi-step workflow",
      ],
    },
    faqs: [
      { q: "What's the difference between a chatbot and an AI agent?", a: "A chatbot answers and guides within a conversation. An AI agent can also take actions across your tools, such as updating records or triggering workflows, usually with approval steps for anything sensitive." },
      { q: "Can the assistant hand over to a human?", a: "Yes. We design escalation triggers so the assistant hands the conversation to a human agent, with its context, when it can't help or when the customer asks." },
      { q: "Can it understand Hindi or other Indian languages?", a: "Multilingual support is part of our chatbot work. How well a given language or accent performs depends on the speech and language models chosen, so we test with your customers' real phrasing during the prototype before committing." },
      { q: "Can it connect to our booking, order or CRM system?", a: "Yes. Integration is central to our approach. For Servi we integrated with multiple restaurant booking systems through secure API connections and real-time data synchronisation." },
      { q: "How do you protect customer data?", a: "We use encryption and follow strict data protection practices, limit what the assistant stores, and agree data handling rules with you during discovery." },
      { q: "How much does AI voice assistant development cost?", a: "It depends on the channels (voice, chat or both), languages, the number of integrations, the volume of conversations and how much custom model training is needed. HeyBuddy quotes per brief after mapping your use cases." },
    ],
    related: [
      { href: "/services/ai-development", label: "AI development services" },
      { href: "/casestudies/AIcasestudy/9", label: "Case study: Servi voice assistant" },
      { href: "/services/custom-software", label: "Custom software development" },
      { href: "/solutions/software-development-company-gurugram", label: "Software development in Gurugram" },
    ],
    cta: {
      title: "Want customers to get things done by just asking?",
      text: "Tell us the tasks and the systems behind them. We'll map the conversations and send a scoped plan.",
      button: "Discuss your assistant",
    },
  },

  // 11 ────────────────────────────────────────────────────────────────────
  {
    slug: "gamified-ar-marketing-campaigns",
    category: "Augmented reality",
    name: "Gamified AR campaigns",
    serviceName: "Gamified AR marketing campaign development",
    seoTitle: "Gamified AR Marketing Campaigns for Brands",
    seoDescription:
      "Gamified AR marketing campaigns: scan-to-play games on print ads, packs and billboards, plus social AR filters, built by HeyBuddy's AR and game teams.",
    h1: "Gamified AR marketing campaigns that people choose to play",
    summary: "Scan-to-play AR games on print, packs and billboards, plus social AR filters and challenges.",
    intro:
      "HeyBuddy designs and builds gamified AR marketing campaigns: short games and challenges that start when someone points their phone at a print ad, a pack, a poster or a billboard. Our AR team and game developers work on these together, so the result plays like a real game rather than a filter with a score bolted on.",
    context: {
      title: "What makes a branded AR game work",
      paragraphs: [
        "People will give a brand about as long as it takes to understand the game, which is seconds rather than minutes. The campaigns that work are instantly clear, short enough to finish, and built so the product is the game mechanic rather than a logo in the corner. If a cosmetics game lets you try the shades, playing it is the product demo.",
        "The other two ingredients are a frictionless start and a reason to share. Scanning should open the game straight away, which usually means WebAR or a social platform rather than an app download. And the end screen should give players something worth posting, plus a clear next step: a code, a store locator or the product page.",
      ],
    },
    build: {
      title: "Gamified AR formats we build",
      items: [
        { title: "Scan-to-play print and packaging games", text: "Point the phone at a print ad, label or box and a game starts on top of it. The packaging becomes the game board." },
        { title: "Product trial games", text: "Games where trying the product is the play, such as testing cosmetic shades or putting together different looks." },
        { title: "Social AR filters and challenges", text: "Face filters and world effects for Instagram, Snapchat and TikTok, designed to be shared as challenges." },
        { title: "Billboard and outdoor extensions", text: "QR-triggered mobile AR that turns a billboard into something people can play on their own phones." },
        { title: "Event and in-store AR games", text: "Location-based AR, AR portals and treasure hunts for malls, stores, launches and exhibitions." },
        { title: "Rewards and next steps", text: "Unlockable content, codes and leaderboards that connect play to a visit, a sign-up or a purchase." },
      ],
    },
    proof: {
      title: "A gamified AR campaign we've run",
      items: [
        {
          title: "AR game campaign for a cosmetics launch",
          text: "A cosmetics brand launching a new product had worked with other AR developers without getting the result it wanted. We designed a gamified AR campaign where readers scanned product images in print advertisements to open interactive games in which they could apply and try the products and experiment with different looks, including looks inspired by popular fantasy themes. The campaign drove more traffic and strong engagement on social media.",
          href: "/services/ar-development",
          linkLabel: "See our AR development work",
        },
      ],
    },
    process: {
      title: "How we build an AR game campaign",
      steps: [
        { title: "Campaign goal", text: "Awareness, trial, footfall or sales? The goal decides the mechanic and the metric." },
        { title: "Game concept", text: "Two or three concepts built around the product, each explained in a sentence and a sketch." },
        { title: "Format and platform", text: "WebAR, a social platform or inside your app, chosen for where your audience will meet the trigger." },
        { title: "Playable prototype", text: "A rough but playable version on real phones early, so the fun is proved before the art is final." },
        { title: "Art, 3D and polish", text: "Brand-accurate 3D assets, animation and sound, tuned so the game loads fast on mobile data." },
        { title: "Launch and measure", text: "Live tracking of scans, plays, completions, shares and click-throughs, with tweaks during the campaign." },
      ],
    },
    who: {
      title: "Who gamified AR campaigns suit",
      leftTitle: "Industries",
      left: [
        "Cosmetics and beauty",
        "FMCG, food and beverages",
        "Fashion and accessories",
        "Film, entertainment and media launches",
        "Malls, retail chains and events",
        "Automotive and consumer electronics launches",
      ],
      rightTitle: "Typical briefs",
      right: [
        "A product launch that needs to cut through",
        "Print or packaging that should do more than sit there",
        "A social challenge people will share",
        "Footfall and dwell time for a mall or event",
        "A billboard campaign that continues on mobile",
      ],
    },
    faqs: [
      { q: "Do people need to download an app to play?", a: "Not usually. Most campaign games run as WebAR in the phone's browser or as filters on Instagram, Snapchat or TikTok. We recommend an app only if the game is part of a longer-running programme." },
      { q: "How long should a branded AR game be?", a: "Short. A player should understand it in seconds and finish in a minute or two. Longer games can work for loyal audiences, but most campaigns do best when they're quick and replayable." },
      { q: "What can trigger the AR game?", a: "A print ad, a product label or box, a poster, a billboard, a QR code or a specific location. We choose the trigger based on where your audience will be when they first see the campaign." },
      { q: "How do you measure a gamified AR campaign?", a: "We track scans, game starts and completions, time spent, shares and click-throughs to your site or store, so you can compare the campaign with your other channels." },
      { q: "Can the game collect leads or give out rewards?", a: "Yes. Games can unlock codes, rewards or entries in exchange for an opt-in, designed so data collection is clear and consensual." },
      { q: "How much does a gamified AR campaign cost?", a: "It depends on the platform, the complexity of the game, the number of 3D assets, the triggers and any reward or data integrations. HeyBuddy quotes per brief, starting from your campaign goal." },
    ],
    related: [
      { href: "/services/ar-development", label: "AR development services" },
      { href: "/services/game-development", label: "Game development services" },
      { href: "/solutions/webar-development-company-india", label: "WebAR development" },
      { href: "/services/billboard", label: "3D anamorphic billboards" },
    ],
    cta: {
      title: "Have a launch that needs people to play along?",
      text: "Tell us the product, the audience and where they'll see the campaign. We'll come back with game concepts and a scoped quote.",
      button: "Pitch us your campaign",
    },
  },

  // 12 ────────────────────────────────────────────────────────────────────
  {
    slug: "nft-loyalty-program-development",
    category: "Web3",
    name: "NFT and Web3 loyalty",
    serviceName: "NFT and Web3 loyalty program development",
    seoTitle: "NFT and Web3 Loyalty Program Development",
    seoDescription:
      "NFT and Web3 loyalty programs: membership passes, token-gated rewards and collectibles, with audited smart contracts and simple wallet onboarding.",
    h1: "NFT and Web3 loyalty program development for brands",
    summary: "NFT membership passes, token-gated rewards and collectibles, with audited contracts and simple onboarding.",
    intro:
      "HeyBuddy handles NFT and Web3 loyalty program development: membership passes, token-gated rewards and digital collectibles that customers genuinely own. For a high-end fashion retailer, we built a token-gated loyalty programme using NFTs, and we design these programmes so customers who've never used crypto can still join in easily.",
    context: {
      title: "When Web3 adds something to loyalty, and when it doesn't",
      paragraphs: [
        "A conventional points programme in a database is cheaper and simpler, and for many brands it's the right answer. NFTs earn their place when ownership matters: a membership pass that can be gifted or resold, a limited collectible that carries status, or access that partners can verify without sharing a customer database.",
        "The risk is complexity. If joining means installing a wallet, buying crypto and paying fees, most customers won't bother. So we start with the experience, choose a chain with low transaction costs where that matters, keep the Web3 parts in the background, and connect the programme to the systems you already run. We also recommend getting legal and tax advice on token design in the markets you operate in.",
      ],
    },
    build: {
      title: "What we build for NFT loyalty programmes",
      items: [
        { title: "NFT membership passes and tiers", text: "Membership tokens built to standards such as ERC-721, with tiers, upgrades and limited editions." },
        { title: "Token-gated perks", text: "Exclusive drops, early access, events and content unlocked by holding the right token." },
        { title: "Smart contracts and audits", text: "Secure, gas-efficient contracts in Solidity, Rust or Vyper, with security audits and testing before launch." },
        { title: "Wallet onboarding and payments", text: "Seamless wallet integration, intuitive Web3 UX and native payment options designed for people new to crypto." },
        { title: "Integration with your existing stack", text: "Connections to your e-commerce, CRM and current loyalty systems, bridging Web2 and Web3 so staff and customers see one programme." },
        { title: "Reward economics", text: "Programme design covering token distribution, rewards and governance, built to stay sustainable after launch." },
      ],
    },
    proof: {
      title: "An NFT loyalty programme we've built",
      items: [
        {
          title: "Token-gated loyalty for a high-end fashion retailer",
          text: "For a high-end fashion retailer, we developed a token-gated loyalty program using NFTs. As described on our Web3 page, the project increased repeat purchase rates by 45% and built a community of 50k+ highly engaged digital collectors.",
          href: "/services/web3",
          linkLabel: "See our Web3 development work",
        },
      ],
    },
    process: {
      title: "How we build an NFT loyalty programme",
      steps: [
        { title: "Programme design", text: "Goals, tiers and perks, and a clear answer to what token ownership adds for your customers." },
        { title: "Chain and wallet choice", text: "Ethereum, Polygon, Solana, BNB Smart Chain or others, chosen for cost, speed and your audience." },
        { title: "Contracts and audit", text: "Smart contracts written, tested and audited before anything touches real customers." },
        { title: "App and integrations", text: "The customer-facing experience, plus connections to e-commerce, CRM and point-of-sale where needed." },
        { title: "Launch drop", text: "A planned first release, often a limited membership edition, with support ready for first-time users." },
        { title: "Maintenance and scaling", text: "Ongoing support, upgrades and new perks so contracts and the community keep running smoothly." },
      ],
    },
    who: {
      title: "Who NFT loyalty suits",
      leftTitle: "Industries",
      left: [
        "Luxury and high-end fashion",
        "Lifestyle and D2C brands with strong communities",
        "Entertainment, music and fan communities",
        "Gaming and Web3 games",
        "Brands running partner or coalition rewards",
      ],
      rightTitle: "Typical briefs",
      right: [
        "A members' club for top customers",
        "Limited collectibles tied to product drops",
        "Perks that partners can verify",
        "Adding a Web3 layer to an existing programme",
        "A community that rewards early supporters",
      ],
    },
    faqs: [
      { q: "Do customers need a crypto wallet to join?", a: "They need somewhere to hold the token, but it doesn't have to be complicated. We build seamless wallet integration and simple onboarding designed for people new to Web3, so joining feels like signing up for any other programme." },
      { q: "Which blockchain should we use?", a: "It depends on transaction costs, speed and where your audience already is. We work across Ethereum, Solana, Polygon, BNB Smart Chain and other ecosystems, and recommend one during programme design." },
      { q: "How do you keep the smart contracts secure?", a: "We write gas-efficient contracts to established standards and run security audits and testing to find vulnerabilities before launch, then maintain them after deployment." },
      { q: "Can this work alongside our existing loyalty programme?", a: "Yes. We integrate blockchain features into existing enterprise systems, so an NFT tier can sit on top of your current programme rather than replacing it." },
      { q: "Is an NFT loyalty programme right for our brand?", a: "If ownership, scarcity or transferable membership mean something to your customers, it can be. If not, a conventional programme may serve you better, and we'll say so during consultation." },
      { q: "How much does NFT loyalty program development cost?", a: "It depends on the number of token types and perks, contract complexity and audits, the customer app, and integrations with your e-commerce and CRM. HeyBuddy quotes per brief after programme design." },
    ],
    related: [
      { href: "/services/web3", label: "Web3 and blockchain development" },
      { href: "/services/metaverse", label: "Metaverse and NFT experiences" },
      { href: "/services/custom-software", label: "Custom software development" },
      { href: "/solutions/virtual-showroom-development", label: "Virtual showroom development" },
    ],
    cta: {
      title: "Thinking about a loyalty programme customers can own?",
      text: "Tell us about your customers and current rewards. We'll tell you honestly whether Web3 fits, and send a scoped plan if it does.",
      button: "Talk to our Web3 team",
    },
  },
];

export function getSolution(slug) {
  return SOLUTIONS.find((s) => s.slug === slug);
}
