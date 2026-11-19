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

  // 13 ────────────────────────────────────────────────────────────────────
  {
    slug: "unreal-engine-development-company-india",
    category: "Games",
    name: "Unreal Engine development",
    serviceName: "Unreal Engine development",
    seoTitle: "Unreal Engine Development Company in India",
    seoDescription:
      "Unreal Engine 5 development from Gurugram: high-end PC and console games, MetaHuman digital humans, real-time architectural visualisation and cinematics.",
    h1: "Unreal Engine development company in India for games, digital humans and real-time visuals",
    summary: "Unreal Engine 5 games, MetaHuman digital humans, real-time archviz and in-engine cinematics.",
    intro:
      "HeyBuddy is an Unreal Engine development company in India, working from Gurugram. Our team builds in Unreal Engine 5.5 for games where visual fidelity is the point, for MetaHuman digital humans, for real-time architectural walkthroughs and for cinematic sequences rendered inside the engine. Several of our published game and 3D case studies were built in Unreal Engine 5.",
    context: {
      title: "What Unreal Engine is for, beyond games",
      paragraphs: [
        "Unreal's real-time renderer is now used well outside games. The same lighting, materials and cameras that drive an open-world game can render an apartment that hasn't been built, a digital human for a virtual production, or a launch film you can re-render overnight when the product changes. What you see in the editor is close to the final frame, so iteration is fast and assets can be reused across a game, a walkthrough and a film.",
        "It isn't the right engine for everything. Unreal projects need stronger hardware and produce larger builds, which matters for mobile games on mid-range Android phones and for lightweight web experiences; there we usually recommend Unity, and we work in both. Unreal earns its place in high-end PC and console visuals, photoreal humans and real-time visualisation.",
      ],
    },
    build: {
      title: "What we build in Unreal Engine",
      items: [
        { title: "High-end PC and console games", text: "Games built around Unreal Engine 5's ray tracing, global illumination and physically based rendering, with native console builds and the platform certification work that comes with them." },
        { title: "AI-driven gameplay", text: "Smart NPCs, adaptive difficulty and procedural content, such as opponents that learn each player's style." },
        { title: "MetaHuman digital humans", text: "Photorealistic digital humans that are easy to customise, for virtual productions, games and other real-time applications." },
        { title: "Real-time architectural visualisation", text: "Interactive walkthroughs built from CAD data, on screen or in VR at 1:1 scale, so clients can move through a space instead of looking at fixed renders." },
        { title: "In-engine cinematics", text: "Story sequences, trailers and product films rendered in real time from the same assets as the game or walkthrough, so changes don't mean starting a render from scratch." },
        { title: "Co-development and optimisation", text: "Extra engineering and art capacity for Unreal projects in production, plus performance work such as level-of-detail management, occlusion culling and dynamic resolution scaling." },
      ],
    },
    proof: {
      title: "Unreal Engine work we've delivered",
      items: [
        {
          title: "AI-powered one-on-one duel game",
          text: "A game development company wanted a duel game with striking visuals and opponents that adapt to each player. We built the visuals in Unreal Engine 5 across 32 characters and 48 environments, and used Unity ML-Agents for behaviour trees, reinforcement learning and dynamic difficulty adjustment.",
          href: "/casestudies/game-development/14",
          linkLabel: "Read the AI duel game case study",
        },
        {
          title: "Open-world action-adventure, co-developed with a studio",
          text: "With an established studio, we co-developed a cross-platform open-world game in Unreal Engine 5, contributing design, programming, art and engine optimisation, with ray tracing, global illumination, dynamic weather and realistic physics.",
          href: "/casestudies/game-development/15",
          linkLabel: "Read the action-adventure case study",
        },
        {
          title: "Stylised characters for an Unreal Engine 5 fighting game",
          text: "For a games company, we modelled and rigged 32 characters with deliberately oversized hands and gave the game a painterly, stylised look in Unreal Engine 5, adjusting polygon counts so the style held up without hurting performance.",
          href: "/casestudies/3ddevelopment/4",
          linkLabel: "Read the 3D characters case study",
        },
      ],
    },
    process: {
      title: "How an Unreal project runs with us",
      steps: [
        { title: "Engine fit check", text: "Platforms, visual target, team and budget. If Unity or a web engine would serve you better, this is where we say so." },
        { title: "Visual target and budgets", text: "A look-development scene that sets the quality bar, plus the frame-rate, memory and build-size budgets for each platform." },
        { title: "Vertical slice", text: "One level, room or sequence at final quality, to prove the look and the performance together before full production." },
        { title: "Asset pipeline", text: "Models, textures and rigs brought into Unreal with consistent naming, scale and materials." },
        { title: "Production and optimisation", text: "Regular playable or viewable builds, with profiling on target hardware throughout rather than at the end." },
        { title: "Release and support", text: "Store or platform submission for games, deployment for visualisation, and updates after launch." },
      ],
    },
    who: {
      title: "Who we do Unreal work for",
      leftTitle: "Clients",
      left: [
        "Game studios and publishers",
        "Founders with a high-fidelity game concept",
        "Real estate developers and architects",
        "Film, animation and virtual production teams",
        "Brands that need real-time product or launch visuals",
      ],
      rightTitle: "Typical briefs",
      right: [
        "A vertical slice to pitch a game to a publisher",
        "Extra Unreal engineers or artists for a game in production",
        "Digital humans for a film, game or presenter",
        "An interactive walkthrough of an unbuilt project",
        "Cinematics that can be re-rendered as the design changes",
      ],
    },
    faqs: [
      { q: "Which version of Unreal Engine do you use?", a: "Our game team works in Unreal Engine 5.5, and our published Unreal projects were built in Unreal Engine 5. We also work in Unity 6, so the recommendation follows your project." },
      { q: "Should we choose Unreal Engine or Unity?", a: "Unreal suits high-end PC and console visuals, photoreal humans and real-time visualisation. Unity is usually the better fit for mobile games on a wide range of devices, web games and lighter AR and VR. We recommend an engine after discovery, based on your platforms, art style and team." },
      { q: "Can you create MetaHumans for our project?", a: "Yes. We create photorealistic, easily customised MetaHumans for virtual productions, games and other applications, and our character team builds custom characters where a MetaHuman isn't the right start." },
      { q: "Can Unreal Engine be used for architectural visualisation?", a: "Yes. We translate CAD data into interactive 3D walkthroughs that run on a screen or in a VR headset at 1:1 scale, which lets clients explore a design freely and give feedback earlier." },
      { q: "Can you join an Unreal project that's already in development?", a: "Yes. We co-develop with studios; on one open-world Unreal Engine 5 game we worked alongside the client's team on design, programming, art and optimisation. We start by reviewing your project and pipeline." },
      { q: "How much does Unreal Engine development cost?", a: "It depends on the platforms, the visual target, the number of characters, environments and assets, any multiplayer or AI systems, and how much optimisation each platform needs. HeyBuddy quotes per brief, and a vertical slice is a good way to fix the scope for the rest of the build." },
    ],
    related: [
      { href: "/services/game-development", label: "Game development services" },
      { href: "/services/3d-modeling", label: "3D modelling and MetaHuman creation" },
      { href: "/casestudies/game-development/14", label: "Case study: AI-powered duel game" },
      { href: "/solutions/unity-game-development-company-india", label: "Unity game development" },
      { href: "/solutions/3d-character-modeling-services", label: "3D character modeling services" },
    ],
    cta: {
      title: "Building something that has to look real?",
      text: "Tell us the platform, the visual target and where the project stands. We'll confirm whether Unreal fits and send a scoped quote.",
      button: "Discuss your Unreal project",
    },
  },

  // 14 ────────────────────────────────────────────────────────────────────
  {
    slug: "3d-character-modeling-services",
    category: "CGI and 3D",
    name: "3D character modeling",
    serviceName: "3D character modeling",
    seoTitle: "3D Character Modeling Services for Games and Film",
    seoDescription:
      "3D character modeling for games and film: concept, sculpting, texturing, hair, clothing and rigging, from the team behind 42 warriors for a Korean film studio.",
    h1: "3D character modeling services for games, film and animation",
    summary: "Character concept, sculpting, texturing, hair, clothing and rigging for games, film and animation.",
    intro:
      "HeyBuddy provides 3D character modeling services for game studios, publishers and film and animation studios. We take characters from concept and blockout through sculpting, retopology, texturing, hair and clothing to a finished rig. Our published character work includes 42 legendary warriors for a Korean film studio, eight semi-realistic 4K characters for a game publisher, and 32 stylised fighters for an Unreal Engine 5 game.",
    context: {
      title: "A film character and a game character are built differently",
      paragraphs: [
        "A film character can carry millions of polygons, strand-by-strand hair and physically draped cloth, because each frame can take as long as it needs to render. A game character has to look almost as good while being drawn many times a second, which means a clean low-poly mesh, levels of detail, careful texture memory and a rig that behaves in the engine. Which one you need changes how the character is built from the first sculpt.",
        "Style matters too. Realistic characters live or die on anatomy, skin detail and likeness. Stylised ones need their own logic: on one project the characters had deliberately oversized hands, and making that read as intentional took extra care. Across a whole cast, consistency becomes the hardest part.",
      ],
    },
    build: {
      title: "What our character work covers",
      items: [
        { title: "Concept and blockout", text: "Concept art and rough blocking to agree silhouette, proportions and costume before any detailed sculpting, or we work from your existing concepts and turnarounds." },
        { title: "High-detail sculpting", text: "Faces, anatomy, armour and costume sculpted in ZBrush and Blender, down to wrinkles, moles and freckles where realism calls for it." },
        { title: "Game-ready topology", text: "Low-poly meshes and levels of detail for real-time use, checked for tri-count, draw calls and UV efficiency so characters hold up in Unity, Unreal or your own engine." },
        { title: "Texturing and materials", text: "Physically based textures in Substance Painter that react naturally to light, up to 4K resolution for hero characters." },
        { title: "Hair and clothing", text: "Hairstyles built with hair particles in Blender and costumes made in Marvelous Designer, so clothing folds and moves believably." },
        { title: "Rigging and animation", text: "Production-ready skeletal and facial rigs with intuitive controls, tested in motion, and animation when you need the character moving." },
      ],
    },
    proof: {
      title: "Character projects we've delivered",
      items: [
        {
          title: "42 warrior characters for a Korean film studio",
          text: "A Korean film studio needed AAA-quality characters for a short film set in an ancient Korean village. We designed, textured, clothed, rigged and animated 42 legendary warriors using ZBrush, Blender, Marvelous Designer, Substance Painter and 3ds Max, worked with a Korean historian on dress and appearance, and put more than 1,000 hours into rigging.",
          href: "/casestudies/3ddevelopment/2",
          linkLabel: "Read the Korean film characters case study",
        },
        {
          title: "Semi-realistic 4K characters for a game publisher",
          text: "A publisher with AAA and indie titles needed eight semi-realistic characters of well-known singers, rendered in 4K. Facial likeness was the main challenge, so we sculpted each face in Blender and ZBrush, placed and styled hair strand by strand, and dressed each character in Marvelous Designer.",
          href: "/casestudies/3ddevelopment/3",
          linkLabel: "Read the 4K game characters case study",
        },
        {
          title: "32 stylised characters for an Unreal Engine 5 game",
          text: "For a games company, we created 32 characters with oversized hands for an arena fighting game, plus 48 environments and 302 props, in one painterly Unreal Engine 5 style, delivering in six months work the case study says would normally take at least eight.",
          href: "/casestudies/3ddevelopment/4",
          linkLabel: "Read the stylised characters case study",
        },
      ],
    },
    process: {
      title: "How a character moves through our pipeline",
      steps: [
        { title: "Brief and references", text: "Concept art, turnarounds, mood boards and the target: film render, game engine or both, plus the poly and texture budgets." },
        { title: "Blockout sign-off", text: "Proportions and silhouette approved on a rough model, when changes are still quick." },
        { title: "Sculpt and review", text: "High-detail sculpt reviewed on turntables and close-ups, with feedback at each round." },
        { title: "Topology, UVs and textures", text: "Clean, animation-friendly topology, efficient UVs and physically based textures, approved under neutral and in-context lighting." },
        { title: "Rig and test", text: "Skeletal and facial rigs tested in extreme poses and sample animations before handover." },
        { title: "Delivery in your pipeline", text: "Files exported for your engine or renderer and checked in your scene." },
      ],
    },
    who: {
      title: "Who we model characters for",
      leftTitle: "Clients",
      left: [
        "Game studios and publishers",
        "Film and animation studios",
        "Indie teams without an in-house character artist",
        "Virtual production and digital human projects",
        "Brands that need a mascot or presenter character",
      ],
      rightTitle: "Typical briefs",
      right: [
        "A full cast that has to look like one world",
        "Hero characters at 4K for close-up shots",
        "Game-ready versions of film-quality characters",
        "Rigging and animation for characters you already have",
        "A likeness of a real person, with the rights in place",
      ],
    },
    faqs: [
      { q: "What do you need from us to start a character?", a: "Concept art and turnarounds are ideal, along with references for costume, materials and mood. If you only have a written description, our designers can produce concept art and a blockout for approval first." },
      { q: "Can you make game-ready characters for Unity or Unreal Engine?", a: "Yes. We build characters for Unity, Unreal or your own engine, with optimised topology, levels of detail and textures checked for tri-count, draw calls and UV efficiency." },
      { q: "Do you rig and animate the characters as well?", a: "Yes. We build skeletal and facial rigs and animate characters; on our Korean film project, rigging and animation covered all 42." },
      { q: "Can you create a 3D character based on a real person?", a: "Yes. For a game publisher we sculpted semi-realistic characters of well-known singers, capturing facial features, expressions and signature hairstyles. You'll need the rights to use the person's likeness before production starts." },
      { q: "Can you match the style of our existing characters?", a: "Yes. We work from your style guide and existing assets and keep proportions, materials and detail consistent across the cast. A test character confirms the match first." },
      { q: "How much do 3D character modeling services cost?", a: "Cost depends on the number of characters, realistic or stylised detail, film or real-time target, hair and clothing complexity, facial rigging and animation. HeyBuddy quotes per brief, and a single test character is a good way to agree quality before committing to a full cast." },
    ],
    related: [
      { href: "/services/3d-modeling", label: "3D modelling services" },
      { href: "/casestudies/3ddevelopment/2", label: "Case study: 42 characters for a Korean film" },
      { href: "/casestudies/3ddevelopment/4", label: "Case study: 32 stylised game characters" },
      { href: "/solutions/game-art-outsourcing-india", label: "Game art outsourcing" },
      { href: "/solutions/3d-animation-services-india", label: "3D animation services" },
    ],
    cta: {
      title: "Need characters that carry your story?",
      text: "Send us your concepts or a description, the target engine or renderer and how many characters you need. We'll suggest a test character and send a scoped quote.",
      button: "Brief our character team",
    },
  },

  // 15 ────────────────────────────────────────────────────────────────────
  {
    slug: "game-art-outsourcing-india",
    category: "Games",
    name: "Game art outsourcing",
    serviceName: "Game art outsourcing",
    seoTitle: "Game Art Outsourcing Company in India",
    seoDescription:
      "Game art outsourcing from India: environments, props, characters, UI and animation made to your style guide and engine budgets, inside your own pipeline.",
    h1: "Game art outsourcing in India for studios that need more art capacity",
    summary: "Environments, props, characters, UI and animation to your style guide, working inside your pipeline.",
    intro:
      "HeyBuddy is a game art outsourcing partner in Gurugram, India, for studios and publishers that need more art than their in-house team can produce. We make environments, props, characters, UI and animation to your style guide and your engine's budgets, and we fit into your tools, task tracker and review cycle instead of asking you to adopt ours.",
    context: {
      title: "Why outsourced game art goes wrong, and how to avoid it",
      paragraphs: [
        "Most outsourcing problems aren't about talent. They come from style drift, where assets slowly stop looking like your game; from assets that look right in a render but break in the engine; from reviews that pile up on one art director; and from specs that live in someone's head. The fix is mostly process: a short art test, a written style guide, technical specs agreed up front (polygon budgets, texel density, naming, pivots and scale), and reviews done in a build of your game rather than on turntables.",
        "Fit with your team matters as much. On one project the client's first requirement was a partner whose skills and working practices matched its in-house team. We approach every engagement that way: the art should arrive looking like it was made down the corridor.",
      ],
    },
    build: {
      title: "Game art we produce",
      items: [
        { title: "Environments and world building", text: "Levels, modular kits and set dressing with consistent art direction, from stylised arenas to realistic open worlds." },
        { title: "Props and hard-surface assets", text: "Weapons, vehicles, machinery, furniture and pickups, modelled to your specifications and optimised for your platform." },
        { title: "Characters and creatures", text: "Heroes, enemies and NPCs from sculpt to rig. Our character work has its own page, covering film and game characters in detail." },
        { title: "UI and interface art", text: "Menus, HUDs, icons and in-game interface graphics that balance a richer look with usability and load times." },
        { title: "Rigging and animation", text: "Production-ready rigs and animation for characters, vehicles and complex machinery." },
        { title: "Technical art and optimisation", text: "Levels of detail, texture budgets and checks for draw calls, tri-count and UV efficiency, plus 3D scanning and photogrammetry when you need real-world assets." },
      ],
    },
    proof: {
      title: "Game art we've delivered for other teams",
      items: [
        {
          title: "Characters, environments and props for a fighting game",
          text: "A games company needed a partner whose team could match its own. We produced 32 characters, 48 stylised environments and 302 props for an Unreal Engine 5 arena fighter, holding one painterly style across all of it, and delivered in six months after the client had lost time finding a partner.",
          href: "/casestudies/3ddevelopment/4",
          linkLabel: "Read the fighting game art case study",
        },
        {
          title: "Graphics and interface overhaul for a multiplayer game",
          text: "A gaming hub with a global player base wanted richer graphics while its own team focused on gameplay. We redesigned the game's look and interface, balancing visual improvement against usability and keeping load times in check as new plug-ins and APIs were added.",
          href: "/casestudies/game-development/13",
          linkLabel: "Read the interface overhaul case study",
        },
        {
          title: "Art production on a co-developed open-world game",
          text: "On an open-world action-adventure co-developed with an established studio, our artists produced character models, environment art and level layouts, coordinated with the client's team across time zones.",
          href: "/casestudies/game-development/15",
          linkLabel: "Read the co-development case study",
        },
      ],
    },
    process: {
      title: "How an outsourcing engagement starts and scales",
      steps: [
        { title: "Art test", text: "A small set of representative assets made to your brief, so you can judge quality and fit before committing to volume." },
        { title: "Style guide and specs", text: "Your style bible plus a written technical spec: budgets, texel density, naming, file structure and export settings." },
        { title: "Pipeline set-up", text: "Access to your task tracker, repository and engine build, with one point of contact on each side." },
        { title: "Batch production", text: "Assets delivered in agreed batches with work-in-progress reviews, so feedback lands early." },
        { title: "Review in engine", text: "Assets checked in your game, under your lighting and camera, before they're marked done." },
        { title: "Scale up or down", text: "Capacity adjusted to your production schedule, from a single hero asset to a full environment library." },
      ],
    },
    who: {
      title: "Who outsources game art to us",
      leftTitle: "Clients",
      left: [
        "Game studios heading into content-heavy production",
        "Publishers managing several titles at once",
        "Indie teams with programmers but no full art team",
        "Live games that need seasonal content",
        "Studios abroad adding an art team in India",
      ],
      rightTitle: "Typical briefs",
      right: [
        "Hundreds of props to one style guide",
        "A set of environments for a new game mode",
        "A UI and graphics refresh for an existing game",
        "Characters rigged and animated for an Unreal or Unity title",
        "Overflow capacity for a milestone deadline",
      ],
    },
    faqs: [
      { q: "What kinds of game art can you outsource for us?", a: "Environments, props and hard-surface assets, characters and creatures, UI and interface art, rigging and animation, and technical art such as optimisation and levels of detail." },
      { q: "Can you match our existing art style?", a: "Yes. We work from your style guide and existing assets, and an art test at the start shows you how closely we can match them before any volume work. On our fighting game project, keeping one style across 32 characters, 48 environments and 302 props was the main job." },
      { q: "Which tools and engines do you work with?", a: "Our artists use Blender, Autodesk Maya, 3ds Max, ZBrush, Substance Painter and Marvelous Designer, and we deliver into Unity, Unreal Engine or your own engine. We follow your file formats, naming and repository structure." },
      { q: "How do you fit into our production pipeline?", a: "We work in your task tracker and repository, keep one point of contact on each side, and review assets in your engine build." },
      { q: "Can we start with a small batch?", a: "Yes, and we recommend it. An art test or a small first batch lets you check quality, communication and turnaround before you hand over a larger part of production." },
      { q: "How much does game art outsourcing cost?", a: "It depends on the number and type of assets, realistic or stylised detail, polygon and texture budgets, rigging and animation, and how many review rounds each asset needs. HeyBuddy quotes per brief, usually after an art test has set the quality bar." },
    ],
    related: [
      { href: "/services/game-development", label: "Game development services" },
      { href: "/services/3d-modeling", label: "3D modelling services" },
      { href: "/solutions/3d-character-modeling-services", label: "3D character modeling services" },
      { href: "/casestudies/3ddevelopment/4", label: "Case study: fighting game characters and environments" },
      { href: "/solutions/unreal-engine-development-company-india", label: "Unreal Engine development" },
    ],
    cta: {
      title: "Running short of art capacity?",
      text: "Send us your style guide, the asset list and your deadline. We'll propose an art test and a production plan, with a scoped quote.",
      button: "Start with an art test",
    },
  },

  // 16 ────────────────────────────────────────────────────────────────────
  {
    slug: "mobile-game-development-company-india",
    category: "Games",
    name: "Mobile game development",
    serviceName: "Mobile game development",
    seoTitle: "Mobile Game Development Company in India",
    seoDescription:
      "Mobile game development for iOS and Android: casual, mid-core, card and multiplayer games built for real phones, with store launch and LiveOps after release.",
    h1: "Mobile game development company in India for iOS and Android",
    summary: "Casual, mid-core, card and multiplayer games for iOS and Android, built for real phones and real retention.",
    intro:
      "HeyBuddy is a mobile game development company in India, building iOS and Android games from our studio in Gurugram. We make everything from hyper-casual titles to mid-core RPGs, card and board games, and real-time multiplayer, and we stay on after launch with updates and LiveOps. Mobile is its own discipline: the phone in your player's pocket sets most of the rules.",
    context: {
      title: "What makes mobile games different",
      paragraphs: [
        "A mobile game has to run on a huge spread of hardware: flagship iPhones, but also mid-range Android phones with limited memory that heat up and throttle after a few minutes. Download size affects how many people install at all, sessions are short and interrupted, and controls have to work with one thumb on a bus. A game that is fun on a development machine can feel very different on the phone most of your audience actually owns, so we test on target devices from the first prototype.",
        "The business side is just as specific. Retention, monetisation and store policies shape the design as much as the art style does, and the work doesn't stop at launch: live games need events, fixes and balancing every week. On engines, Unity is usually our pick for mobile (see our Unity page); Unreal can make sense for high-end mobile when the visuals justify the size.",
      ],
    },
    build: {
      title: "Mobile games we build",
      items: [
        { title: "Hyper-casual and casual games", text: "Instantly readable mechanics, short sessions and quick iteration, prototyped fast so weak ideas are dropped early." },
        { title: "Mid-core and RPG games", text: "Progression systems, character skill trees and responsive combat that keep players coming back over weeks, not minutes." },
        { title: "Card, board and real-money games", text: "Rummy, poker, ludo, chess and puzzle games. For real-money formats we build in certified RNG integration, anti-fraud layers and the concurrency needed for tournaments." },
        { title: "Multiplayer games", text: "Real-time and turn-based multiplayer with matchmaking and cloud back ends, using tools such as Photon, Mirror, AWS GameLift and PlayFab." },
        { title: "Analytics and LiveOps tooling", text: "Player analytics and engagement tools such as Firebase, Mixpanel and Braze, so you can see where players drop off and run events without a new build." },
        { title: "Graphics and UI upgrades", text: "Fresh art and interface for an existing game, balanced against load times and memory on lower-end phones." },
      ],
    },
    proof: {
      title: "Mobile and cross-platform game work",
      items: [
        {
          title: "Graphics and interface overhaul for a gaming app",
          text: "A gaming hub with a global player base wanted better graphics for a multiplayer game while its team focused on gameplay. We redesigned the visuals and interface, working within memory and processing limits and keeping load times down as new plug-ins and APIs were added. The published case study reports 100k+ downloads from the Play Store.",
          href: "/casestudies/game-development/13",
          linkLabel: "Read the gaming app case study",
        },
        {
          title: "Cross-platform action-adventure game",
          text: "For an open-world game co-developed with an established studio, we used level-of-detail management, occlusion culling, dynamic resolution scaling and platform-specific tuning so performance and visual quality stayed consistent across very different hardware.",
          href: "/casestudies/game-development/15",
          linkLabel: "Read the cross-platform case study",
        },
      ],
    },
    process: {
      title: "How a mobile game gets made",
      steps: [
        { title: "Concept and economy", text: "Core loop, audience and monetisation model, checked for market fit before any production starts." },
        { title: "Device targets", text: "The lowest-spec phone you'll support, plus budgets for download size, memory and frame rate." },
        { title: "Playable prototype", text: "A grey-box build on real phones to prove the core loop is fun with a thumb on a small screen." },
        { title: "Production", text: "Art, animation, game logic and back end built in parallel, with regular builds on test devices." },
        { title: "QA and load testing", text: "Testing across a matrix of Android and iOS devices, plus server load simulation for multiplayer." },
        { title: "Store launch and LiveOps", text: "App Store and Play Store submission, then monitoring, seasonal content and balancing after release." },
      ],
    },
    who: {
      title: "Who we build mobile games for",
      leftTitle: "Clients",
      left: [
        "Founders with a mobile game concept",
        "Card, board and casual gaming platforms",
        "Studios bringing a PC or console idea to phones",
        "Brands that want a game as part of their app",
        "Ed-tech companies adding game mechanics to learning",
      ],
      rightTitle: "Typical starting points",
      right: [
        "A prototype to test with players or investors",
        "A rummy, ludo or chess platform",
        "A multiplayer game that has to scale",
        "A live game with ageing graphics or UI",
        "A game that needs updates and LiveOps after launch",
      ],
    },
    faqs: [
      { q: "Do you build mobile games for both iOS and Android?", a: "Yes. We build for both, usually from one codebase, and test on a range of devices for each platform, including the lower-spec Android phones many players actually use." },
      { q: "Which engine do you use for mobile games?", a: "Usually Unity, because of its device reach, build sizes and fast iteration. Unreal Engine can suit high-end mobile games where the visuals justify larger downloads. We recommend an engine after discovery." },
      { q: "Can you build a rummy or other real-money card game?", a: "Yes. We build rummy, poker and other card platforms with certified RNG integration, anti-fraud layers and high-concurrency tournament handling. Rules on real-money gaming differ between states and countries, so you should take legal advice for the markets you plan to launch in." },
      { q: "How do you make a game run well on low-end phones?", a: "We agree a minimum device at the start and test on it throughout. Then we manage texture and polygon budgets, levels of detail, draw calls and download size throughout, not just before launch." },
      { q: "Do you handle App Store and Play Store submission?", a: "Yes. We handle store submissions and the launch itself, then offer LiveOps: monitoring, seasonal content updates, community features and technical fixes." },
      { q: "How much does mobile game development cost in India?", a: "It depends on the genre and scope of the core loop, the art style and number of assets, multiplayer and back-end needs, real-money compliance features and post-launch plans. HeyBuddy quotes per brief, and a prototype phase is the best way to firm up the number." },
    ],
    related: [
      { href: "/services/game-development", label: "Game development services" },
      { href: "/solutions/unity-game-development-company-india", label: "Unity game development" },
      { href: "/casestudies/game-development/13", label: "Case study: gaming app overhaul" },
      { href: "/solutions/game-art-outsourcing-india", label: "Game art outsourcing" },
      { href: "/solutions/game-development-company-delhi-ncr", label: "Game development in Delhi NCR" },
    ],
    furtherReading: [
      { href: "/blog/rummy-game-development-company", label: "Guide: choosing a rummy game development company" },
    ],
    cta: {
      title: "Have a mobile game idea?",
      text: "Tell us the genre, the audience and how you plan to make money. We'll suggest a first prototype and the devices to target, with a scoped quote.",
      button: "Get a mobile game consultation",
    },
  },

  // 17 ────────────────────────────────────────────────────────────────────
  {
    slug: "vr-game-development",
    category: "Virtual reality",
    name: "VR game development",
    serviceName: "VR game development",
    seoTitle: "VR Game Development Company for Meta Quest",
    seoDescription:
      "VR game development for Meta Quest, PC VR, Pico and HTC Vive: comfortable movement, hand-tracking, multiplayer and store-ready builds in Unity or Unreal.",
    h1: "VR game development company for Meta Quest and PC VR",
    summary: "VR games for Meta Quest, PC VR, Pico and Vive, built for comfort, presence and store release.",
    intro:
      "HeyBuddy is a VR game development company building games for Meta Quest and other standalone headsets, for PC VR, and for Pico and HTC Vive. We develop in Unity and Unreal Engine 5, and our VR and game teams work together, so a project gets game design and headset experience from the same studio. If you're still exploring the idea, our guide to custom AR/VR game development, linked at the bottom of this page, covers the planning side in more depth.",
    context: {
      title: "Designing for a headset is not designing for a screen",
      paragraphs: [
        "In VR the player's body is the controller. Picking things up, ducking, leaning and turning your head are the game, and interactions that work on a gamepad often feel wrong in a headset. Comfort matters just as much: artificial movement can make people feel sick, so locomotion choices such as teleportation, snap turning and smooth movement, and a steady frame rate, have to be designed in from the first prototype rather than patched at the end.",
        "The second decision is hardware. Standalone headsets like Meta Quest run on mobile chips, so scenes, lighting and effects have to fit a much tighter budget than a PC. PC VR allows richer visuals but reaches fewer players. Many games target Quest first and scale up for PC VR. We help you pick based on your audience and the experience you want, and we test in the actual headset at every stage.",
      ],
    },
    build: {
      title: "What our VR game work covers",
      items: [
        { title: "Standalone Quest games", text: "Games designed around the performance budget of standalone headsets, with art and effects that look good within it." },
        { title: "PC VR and cross-platform releases", text: "Builds for PC VR, HTC Vive and Pico alongside Quest, with assets that scale between platforms." },
        { title: "Hand-tracking and haptics", text: "Natural interactions with tracked hands or controllers, with haptic feedback that makes objects feel solid." },
        { title: "Multiplayer and social VR", text: "Shared spaces with avatars, voice chat and real-time play, for co-op, competitive and social games." },
        { title: "AI-driven NPCs", text: "Characters and opponents that react to the player, drawing on our work with adaptive AI in games." },
        { title: "Location-based and event VR", text: "VR games for arcades, experience centres, exhibitions and brand activations, set up and tested on site." },
      ],
    },
    proof: {
      title: "VR and game work closest to this",
      items: [
        {
          title: "Comfortable, realistic movement in VR",
          text: "For an architecture firm we built a 1:1 scale VR platform with ray tracing and physically based rendering, and paired teleportation with smooth movement so first-time headset users could explore comfortably. The same comfort and realism problems sit at the heart of any VR game.",
          href: "/casestudies/vr-development/11",
          linkLabel: "Read the VR visualisation case study",
        },
        {
          title: "Adaptive AI opponents",
          text: "For a one-on-one duel game we used Unity ML-Agents for behaviour trees, reinforcement learning and dynamic difficulty, so opponents learned each player's style. That kind of AI makes VR opponents and companions feel alive.",
          href: "/casestudies/game-development/14",
          linkLabel: "Read the AI duel game case study",
        },
      ],
    },
    process: {
      title: "How a VR game comes together",
      steps: [
        { title: "Concept and platform", text: "Core experience, audience and target headsets, which together set the performance budget." },
        { title: "Comfort prototype", text: "Movement, interaction and scale tested in the headset in the first weeks, before the art is locked." },
        { title: "Vertical slice", text: "One level or scene at final quality, running at target frame rate on the weakest headset you support." },
        { title: "Production", text: "Environments, characters, interactions and audio built with regular in-headset playtests." },
        { title: "Performance and comfort QA", text: "Frame-rate profiling, comfort testing with first-time players, and checks across every supported headset." },
        { title: "Store release and updates", text: "Submission to the headset stores, whose own technical and content reviews we plan for, then updates after launch." },
      ],
    },
    who: {
      title: "Who we make VR games for",
      leftTitle: "Clients",
      left: [
        "Game studios moving into VR",
        "Founders with a VR game concept",
        "Arcades, experience centres and entertainment venues",
        "Brands planning VR activations at events",
        "Education and training teams using game mechanics",
      ],
      rightTitle: "Typical briefs",
      right: [
        "A Quest game from concept to store",
        "A playable VR prototype to pitch or fund",
        "A multiplayer VR game for friends or teams",
        "A VR game for a venue or exhibition",
        "A flat-screen game concept rethought for VR",
      ],
    },
    faqs: [
      { q: "Which VR headsets do you develop games for?", a: "Meta Quest, Pico, HTC Vive and PC VR, and we also build for Apple Vision Pro. We recommend target headsets based on your audience, budget and how much visual fidelity the game needs." },
      { q: "Should a VR game be built in Unity or Unreal Engine?", a: "Unity is often the practical choice for standalone headsets like Quest. Unreal Engine 5 suits high-fidelity PC VR. We work in both and recommend one after we've agreed your platforms and art style." },
      { q: "How do you stop players feeling motion sick?", a: "We design for comfort from the start: movement options such as teleportation, stable frame rates and rigorous testing with real players in the headset. Comfort is checked in the prototype, before full production." },
      { q: "Can a VR game be multiplayer?", a: "Yes. We build VR games with social features such as avatars, voice chat and shared spaces, and with cross-platform compatibility so players on different headsets can play together where the platforms allow." },
      { q: "Can you turn our existing game into a VR game?", a: "Often, but it's rarely a straight port. Camera, controls, scale and pacing usually need redesigning for a headset. We review your game and tell you what would carry over and what would need rebuilding." },
      { q: "How much does VR game development cost?", a: "It depends on the number of levels and assets, interaction complexity, multiplayer, the headsets supported and how much performance optimisation each one needs. HeyBuddy quotes per brief, and a comfort prototype is a sensible first step." },
    ],
    related: [
      { href: "/services/vr-development", label: "VR development services" },
      { href: "/services/game-development", label: "Game development services" },
      { href: "/solutions/unity-game-development-company-india", label: "Unity game development" },
      { href: "/solutions/unreal-engine-development-company-india", label: "Unreal Engine development" },
      { href: "/solutions/ar-vr-company-delhi-ncr", label: "AR VR company in Delhi NCR" },
    ],
    furtherReading: [
      { href: "/blog/custom-ar-vr-game-development", label: "Guide: custom AR/VR game development" },
    ],
    cta: {
      title: "Planning a game for Quest or PC VR?",
      text: "Tell us the concept, the headsets and where you are today. We'll suggest a comfort prototype as the first milestone, with a scoped quote.",
      button: "Talk to our VR game team",
    },
  },

  // 18 ────────────────────────────────────────────────────────────────────
  {
    slug: "ai-agent-development-company",
    category: "Artificial intelligence",
    name: "AI agent development",
    serviceName: "AI agent development",
    seoTitle: "AI Agent Development Company in India",
    seoDescription:
      "AI agent development from Gurugram: agents that run multi-step work across your tools, with approval steps, failure recovery and a log of every decision.",
    h1: "AI agent development company in India for agents that do real work",
    summary: "Multi-step agents that work across your tools, with approvals, failure recovery and decision logs.",
    intro:
      "HeyBuddy is an AI agent development company in India, based in Gurugram. We build agents that carry out multi-step work across your business tools: research and analysis, data entry, report generation, ticket handling and monitoring. We build them with approval steps where a person should decide, failure recovery for when a step breaks, and a log of what the agent did and why.",
    context: {
      title: "An agent is a workflow with judgement, not a chatbot",
      paragraphs: [
        "A chatbot answers questions. An agent is given a goal and works through the steps to reach it: it reads an inbox, looks up a record, decides what kind of request it is, drafts a reply, updates the CRM and flags anything unusual for a person. Language models make the judgement steps possible, but the value comes from the tools the agent can use and the rules around when it must stop and ask.",
        "Not every process needs an agent. If the steps are fixed and the inputs are always structured, conventional automation is cheaper and more predictable, and we've deployed robotic process automation for a logistics partner for exactly that kind of work. Agents earn their place where inputs are messy, such as emails, documents and free text, and where each case needs a small decision. We start by mapping the process with you and picking the parts where an agent actually helps.",
      ],
    },
    build: {
      title: "AI agents we build",
      items: [
        { title: "Process automation agents", text: "Agents that handle data entry, report generation, approvals and ticket handling end to end, with people in control where it matters." },
        { title: "Research and monitoring agents", text: "Agents for market research, competitor tracking and ongoing monitoring tasks that gather, analyse and summarise on a schedule." },
        { title: "Multi-agent systems", text: "Several specialised agents working together, from research through to execution, built with frameworks such as LangGraph, CrewAI, AutoGen and Semantic Kernel." },
        { title: "Integration with your systems", text: "Agents connected to your ERP, CRM and cloud platforms with real-time data, so they act on live information rather than copies." },
        { title: "Agents grounded in your knowledge", text: "Retrieval-augmented agents that work from your own documents and policies, using vector databases such as Pinecone, Weaviate or Qdrant." },
        { title: "Controls and audit", text: "Approval workflows, failure recovery and decision logging, plus private deployments for regulated work, so you stay in control of models and data." },
      ],
    },
    proof: {
      title: "Related AI work",
      items: [
        {
          title: "Servi: an AI assistant that completes multi-step tasks",
          text: "For a US food-tech company we built Servi, a voice assistant that takes a request from restaurant search through to a confirmed booking. Behind the conversation it works across several restaurant booking systems through secure APIs, keeps availability in sync in real time and coordinates with kitchens. Connecting AI to the systems that do the work, safely, is the same problem every agent project has to solve.",
          href: "/casestudies/AIcasestudy/9",
          linkLabel: "Read the Servi case study",
        },
      ],
    },
    process: {
      title: "How we build an AI agent",
      steps: [
        { title: "Pick one workflow", text: "A single process with a clear owner, a measurable cost today and enough volume to matter." },
        { title: "Map steps and decisions", text: "Every step, the systems it touches, and which decisions the agent may make alone and which need a person." },
        { title: "Tools and permissions", text: "The narrowest access the agent needs to each system, with secrets and data handled securely." },
        { title: "Supervised pilot", text: "The agent runs on real cases while a person approves each action, so we can measure accuracy before anything is automatic." },
        { title: "Widen autonomy gradually", text: "Steps that prove reliable move to automatic; the rest keep their approval step." },
        { title: "Monitor and improve", text: "Decision logs, failure alerts and regular reviews, with the agent updated as the process changes." },
      ],
    },
    who: {
      title: "Who uses AI agents",
      leftTitle: "Teams",
      left: [
        "Operations and back-office teams",
        "Customer support and service desks",
        "Sales and marketing intelligence",
        "Finance teams processing invoices and documents",
        "Regulated businesses that need private AI",
      ],
      rightTitle: "Typical first agents",
      right: [
        "Triage and route incoming tickets or emails",
        "Pull data from documents into a system of record",
        "Weekly competitor or market research reports",
        "Prepare approvals with the evidence attached",
        "Monitor systems or listings and flag changes",
      ],
    },
    faqs: [
      { q: "What is the difference between an AI agent, a chatbot and RPA?", a: "A chatbot holds a conversation. RPA follows fixed rules on structured inputs. An AI agent pursues a goal across several steps and tools, using a language model to handle messy inputs and small decisions, with approval steps for anything sensitive." },
      { q: "Which models and frameworks do you use?", a: "We work with models from OpenAI, Anthropic, Meta, Mistral and Google, and build agents with frameworks such as LangChain, LangGraph, LlamaIndex, CrewAI, AutoGen and Semantic Kernel. We choose based on your accuracy, cost and data privacy needs." },
      { q: "How do you stop an agent from doing something wrong?", a: "Agents get only the access they need, actions above an agreed risk level go to a person for approval, failures trigger recovery steps or a handover, and every decision is logged so you can review what happened and why." },
      { q: "Can an AI agent work with our ERP or CRM?", a: "Yes. Integration is central to agent work. We connect agents to ERP, CRM and cloud platforms through their APIs, including older systems, with real-time data processing." },
      { q: "Can the agent run without our data leaving our control?", a: "Yes, it can be designed that way. We build private AI deployments for internal tools and regulated industries, where you keep full control of the models and data. We agree the data handling rules during discovery." },
      { q: "How much does AI agent development cost?", a: "It depends on the number of steps and systems involved, how much data preparation is needed, the model and hosting choice, approval and audit requirements, and the volume the agent handles. HeyBuddy quotes per brief, and a supervised pilot on one workflow is a sensible first step." },
    ],
    related: [
      { href: "/services/ai-development", label: "AI development services" },
      { href: "/casestudies/AIcasestudy/9", label: "Case study: Servi AI assistant" },
      { href: "/solutions/ai-voice-assistant-development", label: "AI voice assistants and chatbots" },
      { href: "/solutions/generative-ai-development-company", label: "Generative AI development" },
      { href: "/solutions/ai-development-company-gurugram", label: "AI development in Gurugram" },
    ],
    furtherReading: [
      { href: "/blog/enterprise-ai-agent-development-services", label: "Guide: enterprise AI agent development" },
    ],
    cta: {
      title: "Have a process your team does by hand every day?",
      text: "Tell us the workflow and the systems involved. We'll map where an agent fits and propose a supervised pilot, with a scoped quote.",
      button: "Discuss an AI agent",
    },
  },

  // 19 ────────────────────────────────────────────────────────────────────
  {
    slug: "generative-ai-development-company",
    category: "Artificial intelligence",
    name: "Generative AI development",
    serviceName: "Generative AI development",
    seoTitle: "Generative AI Development Company in India",
    seoDescription:
      "Generative AI development: LLM apps, RAG on your own data, fine-tuned models, brand-voice content tools and AI ad creative, with guardrails and fact-checking.",
    h1: "Generative AI development company for LLM apps, content tools and AI creative",
    summary: "LLM apps, RAG on your data, fine-tuned models, brand-voice content tools and AI ad creative.",
    intro:
      "HeyBuddy is a generative AI development company in India. We work on three kinds of GenAI project: applications built on large language models and your own data, generative tools trained on your brand's voice and assets, and AI-generated ad creative made by our AI ads team. Each is built with the guardrails, fact-checking and data controls a business needs before generated content reaches customers.",
    context: {
      title: "Prompting, RAG or fine-tuning: choosing the approach",
      paragraphs: [
        "Most generative AI projects use one of three approaches, often combined. Prompting a foundation model is the fastest way to start and is enough for many writing and summarising tasks. Retrieval-augmented generation (RAG) is the answer when responses must come from your own documents and stay current as they change, because the model looks up the facts instead of relying on memory. Fine-tuning a model on your own data makes sense when you need a style, vocabulary or behaviour the base model doesn't have. The simplest approach that works is usually the cheapest to run and maintain.",
        "The harder questions are about risk. Language models can state wrong things confidently, so answers that matter need grounding and fact-checking layers. Generated marketing content needs guardrails to stay on brand and within your rules. Data sent to a model needs clear handling, and some businesses need models hosted privately. We plan for all of this from the start rather than adding it after a demo.",
      ],
    },
    build: {
      title: "Generative AI we build",
      items: [
        { title: "LLM applications and copilots", text: "Assistants and features built into your products and internal tools, on models from OpenAI, Anthropic, Meta, Mistral or Google." },
        { title: "Knowledge systems on your data", text: "RAG systems that turn documents, data and policies into answers, for internal Q&A, document search, compliance support and onboarding." },
        { title: "Custom and fine-tuned models", text: "Foundation models fine-tuned on your proprietary data, with fact-checking layers and portability so you aren't locked to one provider." },
        { title: "Brand-voice content tools", text: "Generators for marketing content, product descriptions and reports, trained on your voice, with content guardrails, asset libraries, workflow plugins and usage analytics." },
        { title: "Multimodal and image generation", text: "Text-to-image and multi-format generation for creative teams, kept consistent with your brand." },
        { title: "AI ad creative", text: "AI-powered video ads, UGC-style ads, hook and caption variations, AI voiceovers and subtitles, produced by our AI ads team for social and performance campaigns." },
      ],
    },
    proof: {
      title: "AI products we've delivered",
      items: [
        {
          title: "AI matchmaking app for a social startup",
          text: "A startup wanted a social app that connects people on shared interests, values and personality instead of superficial interactions. We built an AI matchmaking engine that uses natural language processing to understand chat and profile data, machine learning to suggest compatible matches, and contextual signals such as location and real-time feedback to refine them.",
          href: "/casestudies/AIcasestudy/12",
          linkLabel: "Read the matchmaking app case study",
        },
        {
          title: "Servi: a voice assistant for restaurant bookings",
          text: "For a US food-tech company we built custom NLP models for voice commands and recommendation models trained on dining preferences, with customer data encrypted throughout.",
          href: "/casestudies/AIcasestudy/9",
          linkLabel: "Read the Servi case study",
        },
      ],
    },
    process: {
      title: "How we run a generative AI project",
      steps: [
        { title: "Use case and measure", text: "One task, who it helps, and how we'll know generated output is good enough to use." },
        { title: "Data and privacy review", text: "What data the system needs, where it lives, what may be sent to a model and what must stay private." },
        { title: "Approach and model choice", text: "Prompting, RAG, fine-tuning or a mix, and a model chosen for quality, cost and hosting needs." },
        { title: "Prototype with a test set", text: "A working prototype scored against real examples, so quality is measured rather than judged on a demo." },
        { title: "Guardrails and review", text: "Content guardrails, fact-checking and human review where the stakes call for it." },
        { title: "Launch and monitor", text: "Usage analytics, cost tracking and regular quality checks as your data and the models change." },
      ],
    },
    who: {
      title: "Who generative AI suits",
      leftTitle: "Teams",
      left: [
        "Marketing and brand teams producing content at scale",
        "E-commerce teams with large catalogues",
        "Support and knowledge teams answering from documents",
        "Product companies adding AI features",
        "Regulated businesses that need private models",
      ],
      rightTitle: "Typical briefs",
      right: [
        "Product descriptions for thousands of SKUs in our voice",
        "An internal assistant that answers from our policies",
        "Ad creative variations for social testing",
        "A copilot feature inside our existing app",
        "A model fine-tuned on our domain data",
      ],
    },
    faqs: [
      { q: "Which large language models do you work with?", a: "We work with models from OpenAI, Anthropic (Claude), Meta (LLaMA), Mistral and Google (Gemini), and with open-source models through Hugging Face. The right model depends on quality, cost, latency and whether it must be hosted privately." },
      { q: "Should we use RAG or fine-tune a model?", a: "Use RAG when answers must come from your own documents and stay current. Fine-tune when you need a particular style or domain behaviour. Many systems combine both, and we recommend the simplest approach that meets your needs." },
      { q: "How do you reduce wrong or made-up answers?", a: "We ground answers in your data with RAG, add fact-checking layers, test against real examples before launch and route high-stakes outputs to human review. No language model is perfect, so we design the product around that." },
      { q: "Will our data be used to train public AI models?", a: "We design deployments so you stay in control of your data and models, including private deployments for sensitive or regulated work. Data handling rules are agreed with you during discovery, before anything is built." },
      { q: "Can you make AI video ads and creative?", a: "Yes. Our AI ads team produces AI-powered video ads, UGC-style ads, short-form videos, hook and caption variations, and AI voiceovers with subtitles, made to your brand guidelines." },
      { q: "How much does generative AI development cost?", a: "It depends on the use case, the amount and state of your data, prompting versus RAG versus fine-tuning, the model and hosting choice, integrations and review requirements. HeyBuddy quotes per brief, and a measured prototype is a good first step." },
    ],
    related: [
      { href: "/services/ai-development", label: "AI development services" },
      { href: "/services/ai-ads", label: "AI ads and creative" },
      { href: "/solutions/ai-agent-development-company", label: "AI agent development" },
      { href: "/solutions/ai-voice-assistant-development", label: "AI voice assistants and chatbots" },
    ],
    furtherReading: [
      { href: "/blog/what-is-the-responsibility-of-developers-using-generative-ai", label: "Guide: the responsibility of developers using generative AI" },
    ],
    cta: {
      title: "Want to put generative AI to work?",
      text: "Tell us the task, the data behind it and who will use it. We'll recommend an approach and a first prototype, with a scoped quote.",
      button: "Discuss your GenAI project",
    },
  },

  // 20 ────────────────────────────────────────────────────────────────────
  {
    slug: "ai-development-company-gurugram",
    category: "Artificial intelligence",
    name: "AI development in Gurugram",
    serviceName: "AI development",
    local: true,
    seoTitle: "AI Development Company in Gurugram",
    seoDescription:
      "AI development in Gurugram: readiness workshops, agents, assistants, document search and forecasting for Delhi NCR businesses, from our Sector 49 office.",
    h1: "AI development company in Gurugram for businesses across Delhi NCR",
    summary: "AI readiness workshops, agents, assistants, document search and forecasting, from our Sector 49 office.",
    intro:
      "HeyBuddy is an AI development company in Gurugram, working from SupremeWork in Eros City Square Mall, Sector 49. Most companies we meet don't start with a specification. They start with a question: where would AI actually help us? We answer that with an AI readiness assessment and roadmap, run at your office or ours, and then build the agents, assistants, search tools and predictive models that the roadmap justifies.",
    context: {
      title: "Where AI projects should start",
      paragraphs: [
        "The most useful AI projects are rarely the most impressive demos. They attach to a process that already costs time or money, has data behind it, and has someone who owns the result: support tickets, invoices, sales forecasts, internal documents nobody can find. Starting there gives you something you can measure in weeks. Starting from a technology you want to try usually gives you a prototype nobody uses. Part of our job is to say no to AI where a simpler fix would do.",
        "AI work also depends heavily on people and data that sit inside your business. A readiness assessment means talking to the team that does the work today, seeing the exceptions they handle, and getting IT and security comfortable with what data goes where. That goes faster around a table than over a series of calls, which is why, for clients in Gurugram, Delhi and Noida, we usually hold the first workshops in person.",
      ],
    },
    build: {
      title: "AI we build for Gurugram and Delhi NCR businesses",
      items: [
        { title: "AI readiness and roadmap", text: "An assessment of where AI fits your business, which opportunities to pursue first, and a roadmap with costs and risks for each." },
        { title: "AI agents for operations", text: "Agents that take on repetitive multi-step work, such as data entry, reports and ticket handling, with approval steps and a log of every decision." },
        { title: "Customer support and voice assistants", text: "Assistants that understand intent, answer in several languages, and hand over to a person when they should." },
        { title: "Enterprise knowledge search", text: "Your documents, data and policies turned into a system your teams can question in plain language." },
        { title: "Predictive analytics", text: "Models for demand forecasting, churn prediction, sales projections and risk analysis, built on your own data." },
        { title: "AI in your existing systems", text: "Intelligence added to your current ERP, CRM and cloud platforms without disrupting how the business runs." },
      ],
    },
    proof: {
      title: "AI work we've delivered",
      items: [
        {
          title: "Servi: a voice assistant for restaurant bookings",
          text: "For a US food-tech company, we researched customer pain points and restaurant operations, then built Servi, a voice assistant that handles restaurant search, table booking and dish recommendations based on taste and dietary needs, integrated with several booking systems in real time.",
          href: "/casestudies/AIcasestudy/9",
          linkLabel: "Read the Servi case study",
        },
        {
          title: "AI matchmaking app",
          text: "For a social startup, we built an AI-driven mobile app whose matchmaking engine combines natural language processing, machine learning and contextual data analysis to suggest compatible matches based on interests, values and personality.",
          href: "/casestudies/AIcasestudy/12",
          linkLabel: "Read the matchmaking app case study",
        },
      ],
    },
    process: {
      title: "How an AI engagement runs",
      steps: [
        { title: "Readiness workshop", text: "At your office or ours in Sector 49: the processes, pain points and data, with the people who do the work." },
        { title: "Data and systems review", text: "What data exists, its quality, where it lives and what IT and security need to approve." },
        { title: "Pick the pilot", text: "One opportunity with a clear owner and a number to move, chosen from the roadmap." },
        { title: "Prototype on your data", text: "A working prototype tested on real cases, reviewed with the team that will use it." },
        { title: "Production and integration", text: "The pilot built properly, connected to your systems and rolled out with training." },
        { title: "Measure and expand", text: "Results checked against the original number, then the next item on the roadmap." },
      ],
    },
    who: {
      title: "Who we work with",
      leftTitle: "Industries",
      left: [
        "Fintech and banking",
        "Healthcare and pharma",
        "Retail and e-commerce",
        "Logistics and supply chain",
        "Hospitality and food-tech",
        "Startups building an AI-first product",
      ],
      rightTitle: "Typical first projects",
      right: [
        "An AI readiness assessment for the leadership team",
        "A support assistant with human handover",
        "Search across internal documents and policies",
        "A forecasting model for demand or sales",
        "An agent for one repetitive back-office process",
      ],
    },
    office: {
      title: "Meet our AI team in Sector 49",
      text: "Workshops and reviews can be at our office or at yours anywhere in Gurugram, Delhi or Noida, and we work with clients elsewhere in India and abroad remotely. Visits are by appointment.",
    },
    faqs: [
      { q: "Where is your AI team based?", a: `Our team works from ${OFFICE.street}, ${OFFICE.city} ${OFFICE.postcode}. You can call us on ${OFFICE.phone} to set up a meeting.` },
      { q: "We don't know where AI fits in our business. Can you help?", a: "Yes. That is what our AI readiness assessment is for. We look at your processes and data, identify the best opportunities, and give you a roadmap with a recommended first pilot." },
      { q: "Can our data stay under our control?", a: "Yes. We design private, secure AI deployments where you keep full control of models and data, which suits internal tools and regulated industries. Data handling is agreed with your IT and security teams up front." },
      { q: "Can you add AI to the systems we already use?", a: "Yes. We integrate AI with existing ERP, CRM and cloud platforms, including older systems, through APIs and connectors, so teams keep working in the tools they know." },
      { q: "Do you only work with companies in Gurugram?", a: "No. Gurugram is home, and clients in Delhi and Noida can meet us in person easily, but we deliver AI projects for clients across India and abroad, working remotely." },
      { q: "How much does AI development cost?", a: "It depends on the use case, the state of your data, integrations, model and hosting choices, and security requirements. HeyBuddy quotes per brief, and a readiness assessment or a single pilot is the usual way to start." },
    ],
    related: [
      { href: "/services/ai-development", label: "AI development services" },
      { href: "/solutions/ai-agent-development-company", label: "AI agent development" },
      { href: "/solutions/generative-ai-development-company", label: "Generative AI development" },
      { href: "/solutions/ai-voice-assistant-development", label: "AI voice assistants and chatbots" },
      { href: "/solutions/software-development-company-gurugram", label: "Software development in Gurugram" },
    ],
    cta: {
      title: "Wondering where AI fits in your business?",
      text: "Book a readiness workshop at our Sector 49 office or yours. We'll come back with a roadmap and a scoped first pilot.",
      button: "Book an AI workshop",
    },
  },

  // 21 ────────────────────────────────────────────────────────────────────
  {
    slug: "game-development-company-delhi-ncr",
    category: "Games",
    name: "Game development in Delhi NCR",
    serviceName: "Game development",
    local: true,
    seoTitle: "Game Development Company in Delhi NCR",
    seoDescription:
      "A Gurugram game studio for Delhi NCR: mobile, PC, console and VR games, game art and co-development, with playtests and milestone reviews in person.",
    h1: "Game development company in Delhi NCR, with our studio in Gurugram",
    summary: "Mobile, PC, console and VR games, game art and co-development, from a studio in Sector 49, Gurugram.",
    intro:
      "HeyBuddy is a game development company in Delhi NCR, with our game studio in Sector 49, Gurugram. We build mobile, PC, console and VR games, produce game art and co-develop with studios, for clients in Gurugram, Delhi and Noida as well as further afield. Day-to-day production runs remotely, but playtests, milestone reviews and pitch preparation can happen in the same room, with the build in your hands.",
    context: {
      title: "Why a nearby studio helps with games in particular",
      paragraphs: [
        "Games are judged by feel: whether a jump lands, whether a menu is obvious, whether the first minute makes you want a second. Feel is hard to review over a video call and easy to judge with a controller or phone in your hand. Being a short drive away means founders and producers can play a build with our designers and settle in an afternoon what could take a week of calls.",
        "That said, location should never be the main reason to choose a game studio. Engine experience, the games a team has actually shipped and how it handles production matter more. So here is ours: we work in Unity 6 and Unreal Engine 5.5, and our published case studies include an AI-driven duel game, a co-developed open-world action-adventure and a graphics and interface overhaul for a multiplayer game.",
      ],
    },
    build: {
      title: "What our Gurugram studio builds",
      items: [
        { title: "Mobile games", text: "iOS and Android games from hyper-casual to mid-core, built for the phones your players actually own." },
        { title: "PC and console games", text: "Windows and macOS games and native builds for PlayStation 5 Pro, Xbox Series X and Nintendo Switch, including platform certification." },
        { title: "VR and AR games", text: "Games for Meta Quest, PC VR and Apple Vision Pro, and AR games that run on phones." },
        { title: "Card, board and real-money games", text: "Rummy, poker, ludo and chess platforms with certified RNG integration and anti-fraud layers." },
        { title: "Game art and co-development", text: "Characters, environments, props, UI and engineering capacity for studios with a game already in production." },
        { title: "AI in games", text: "Smart NPCs, adaptive difficulty and procedural content generation that respond to how each player plays." },
      ],
    },
    proof: {
      title: "Games we've worked on",
      items: [
        {
          title: "AI duel game in Unreal Engine 5",
          text: "This project had to balance striking visuals with sophisticated AI: Unreal Engine 5 visuals across 32 characters and 48 environments, and Unity ML-Agents driving opponents that learn each player's style and adjust their tactics.",
          href: "/casestudies/game-development/14",
          linkLabel: "Read the AI duel game case study",
        },
        {
          title: "Open-world game with an established studio",
          text: "Working alongside a studio's own team across time zones, our developers, artists and QA specialists contributed design, programming, art and optimisation to an ambitious cross-platform action-adventure in Unreal Engine 5.",
          href: "/casestudies/game-development/15",
          linkLabel: "Read the open-world case study",
        },
        {
          title: "A new look for a multiplayer game",
          text: "A gaming hub with players around the world asked us to raise the visual quality of a multiplayer game without slowing it down. We overhauled the graphics and interface while keeping load times under control.",
          href: "/casestudies/game-development/13",
          linkLabel: "Read the multiplayer game case study",
        },
      ],
    },
    process: {
      title: "How we start a game project with NCR clients",
      steps: [
        { title: "First meeting", text: "At our Sector 49 studio, at your office or on a call: the concept, the audience and the platforms." },
        { title: "Concept and feasibility", text: "Core loop, monetisation and technical risks, checked before anything is built." },
        { title: "Playable prototype", text: "A grey-box build you can play with us in person, to prove the idea is fun." },
        { title: "Production with milestone builds", text: "Regular builds you can play, with milestone reviews in person where it helps." },
        { title: "Launch", text: "Store submissions for App Store, Play Store and Steam, and console certification where needed." },
        { title: "LiveOps", text: "Monitoring, fixes and seasonal content after launch." },
      ],
    },
    who: {
      title: "Who we make games for",
      leftTitle: "Clients",
      left: [
        "Founders and startups with a game concept",
        "Studios and publishers needing co-development or art",
        "Card, board and casual gaming platforms",
        "Brands and agencies planning a branded game",
        "Ed-tech and training companies adding game mechanics",
      ],
      rightTitle: "What clients usually bring",
      right: [
        "An idea and a target audience, with no team yet",
        "A game in production that needs more people",
        "A live game that needs better graphics or UI",
        "A pitch that needs a playable demo",
        "A launch date that can't move",
      ],
    },
    office: {
      title: "Visit our game studio",
      text: "We work with clients across Gurugram, Delhi, Noida and the wider NCR, and with studios elsewhere in India and abroad remotely. Studio visits and playtests are by appointment.",
    },
    faqs: [
      { q: "Where is your game studio?", a: `Our studio is at ${OFFICE.street}, ${OFFICE.city} ${OFFICE.postcode}, and we work with clients across Delhi NCR. Phone: ${OFFICE.phone}.` },
      { q: "Can we play builds with your team in person?", a: "Yes. Clients in Gurugram, Delhi and Noida can review prototypes and milestone builds with our team at the studio or at their own office, by appointment. Builds are also shared remotely throughout the project." },
      { q: "What kinds of games do you develop?", a: "Mobile, PC, console, AR and VR games across genres including action and RPG, strategy and simulation, sports and racing, puzzle and board, card and real-money, and multiplayer, in Unity 6 and Unreal Engine 5.5." },
      { q: "Do you only make games for clients in Delhi NCR?", a: "No. The studio is in Gurugram and that makes in-person work easy for NCR clients, but we develop games for clients across India and abroad, working remotely." },
      { q: "Can you provide game art or developers for our existing project?", a: "Yes. We co-develop with studios, adding engineering or art capacity to a game already in production after reviewing the codebase, assets and pipeline." },
      { q: "How much does it cost to develop a game?", a: "It depends on the genre and scope, art style and asset count, platforms, multiplayer and back-end needs, and post-launch plans. HeyBuddy quotes per brief, and a prototype is the best way to firm up the cost of the full game." },
    ],
    related: [
      { href: "/services/game-development", label: "Game development services" },
      { href: "/solutions/mobile-game-development-company-india", label: "Mobile game development" },
      { href: "/solutions/unreal-engine-development-company-india", label: "Unreal Engine development" },
      { href: "/solutions/vr-game-development", label: "VR game development" },
      { href: "/solutions/ar-vr-company-delhi-ncr", label: "AR VR company in Delhi NCR" },
    ],
    cta: {
      title: "Making a game in Delhi NCR?",
      text: "Tell us the idea and the platforms. We'll meet at our Gurugram studio or yours and come back with a first milestone and a scoped quote.",
      button: "Book a game consultation",
    },
  },

  // 22 ────────────────────────────────────────────────────────────────────
  {
    slug: "3d-animation-services-india",
    category: "CGI and 3D",
    name: "3D animation services",
    serviceName: "3D animation",
    seoTitle: "3D Animation Services in India",
    seoDescription:
      "3D animation services for technical explainers, medical and pharma, industrial machinery and training, built from your CAD and specs and checked for accuracy.",
    h1: "3D animation services in India for technical, medical and industrial stories",
    summary: "Technical explainers, medical and pharma, industrial and training animation, accurate to your specs.",
    intro:
      "HeyBuddy provides 3D animation services from India for subjects that are hard to film and harder to explain: what happens inside a machine, how a medical device works, how a process runs on a factory floor. We build accurate 3D models from your CAD files and specifications, then animate them so buyers, trainees and decision-makers understand them quickly. If you need a product film for e-commerce or a launch, that is a different brief, covered on our CGI product animation page.",
    context: {
      title: "Explaining is a different job from selling",
      paragraphs: [
        "A product film is made to make something desirable. A technical or medical animation is made to make something understood, and that changes almost every decision. Accuracy comes before drama. Camera moves serve the explanation, not the mood. The hardest part is deciding what to leave out: on our CT scanner project the challenge was balancing engaging visuals with educational value, without overwhelming viewers with technical detail or sacrificing accuracy.",
        "Animation can show things no camera can: a cutaway through a sealed machine, an X-ray view of baggage passing through a scanner, a process that happens too fast or too small to see. It can also be updated as the product changes, translated, and cut into versions for sales meetings, exhibitions, training and e-learning. That makes it worth planning as a long-term asset, not a one-off video.",
      ],
    },
    build: {
      title: "3D animation we make",
      items: [
        { title: "Technical explainers", text: "How a machine or device works, inside and out, with cutaways, transparent views and step-by-step sequences." },
        { title: "Medical and pharma animation", text: "Medical devices, procedures and pharmaceutical manufacturing shown clearly and accurately, for sales teams, trade and training." },
        { title: "Industrial and process animation", text: "Machinery, plants and production lines animated from engineering data, for buyers, investors and new staff." },
        { title: "Educational and training animation", text: "Animated learning content that breaks the monotony of text and slides and holds attention through complex topics." },
        { title: "Character animation", text: "Rigged 3D characters that present, demonstrate or tell a story, from realistic to stylised." },
        { title: "Architectural walkthroughs", text: "Animated walkthroughs and interior sequences built from CAD data for real estate and urban planning." },
      ],
    },
    proof: {
      title: "Animation work we've delivered",
      items: [
        {
          title: "Animated explainer for an airport security CT scanner",
          text: "A CT scanner manufacturer in the UAE needed a hyper-realistic animation explaining its new airport security scanner to prospective buyers. Our team learned the scanner's specifications, modelled and textured it in Blender, ZBrush and Substance Painter, and animated the full journey from baggage entering the machine to the 3D images it produces. The case study notes around 30 close-up shots, a render farm to reach the required resolution, and delivery ahead of the deadline.",
          href: "/casestudies/3ddevelopment/1",
          linkLabel: "Read the CT scanner case study",
        },
        {
          title: "Rigged and animated characters for a short film",
          text: "For a Korean film studio, we created, rigged and animated 42 warrior characters for a short film, making sure the animation fit the film's narrative and emotional tone.",
          href: "/casestudies/3ddevelopment/2",
          linkLabel: "Read the film characters case study",
        },
      ],
    },
    process: {
      title: "How a technical animation is made",
      steps: [
        { title: "Script with your experts", text: "What the viewer must understand by the end, written with your engineers, clinicians or product team." },
        { title: "Technical references", text: "CAD files, specifications, drawings and photos, so the model matches the real product or process." },
        { title: "Style frames", text: "A few finished stills to agree the look, level of realism and how internal parts are revealed." },
        { title: "Animatic and accuracy review", text: "Rough timing and camera moves checked by your experts, when corrections are still cheap." },
        { title: "Animation and rendering", text: "Final animation rendered at the resolution you need, using a render farm for demanding jobs." },
        { title: "Versions for every use", text: "Cut-downs, voiceover and subtitle versions for sales, exhibitions, training and the web." },
      ],
    },
    who: {
      title: "Who 3D animation is for",
      leftTitle: "Industries",
      left: [
        "Medical device and pharma companies",
        "Industrial equipment and machinery manufacturers",
        "Security and inspection technology",
        "Engineering, construction and real estate",
        "Education and e-learning providers",
        "Film and animation studios",
      ],
      rightTitle: "Typical briefs",
      right: [
        "Explain a complex product to buyers in two minutes",
        "Show what happens inside a sealed machine",
        "A trade-show loop for an exhibition stand",
        "Training content for a procedure or process",
        "One animation re-cut for sales, web and training",
      ],
    },
    faqs: [
      { q: "How is this different from CGI product animation?", a: "Our CGI product animation work is built to sell: launch films, e-commerce renders and 360° views. Technical, medical and industrial animation is built to explain, so accuracy and clarity lead. Many projects use both, from the same 3D model." },
      { q: "Can you animate directly from our CAD files?", a: "Yes. CAD files are the best starting point for accurate models. If you don't have them, drawings, specifications, photos or a physical sample work too." },
      { q: "How do you make sure the animation is technically accurate?", a: "We study the product's specifications, build from your engineering data and have your experts review the script, the style frames and the animatic before final animation. On our CT scanner project, the team learned the scanner's specifications and functions before animating it." },
      { q: "Do you make medical and pharma animations?", a: "Yes. We animate medical devices, procedures and pharmaceutical manufacturing. Your medical, regulatory or compliance team should review any claims shown, and we build that review into the schedule." },
      { q: "How much do 3D animation services cost?", a: "It depends on the length, the number and complexity of models, the level of realism, how many internal mechanisms are shown, voiceover and language versions, and the number of review rounds. HeyBuddy quotes per brief once we've seen your references." },
      { q: "How long does a 3D animation take?", a: "The main factors are whether CAD data exists, the length and complexity of the animation, render requirements and how many expert reviews are needed. We share a schedule with the quote." },
    ],
    related: [
      { href: "/services/3d-modeling", label: "3D modelling and animation services" },
      { href: "/services/cgi", label: "CGI and VFX services" },
      { href: "/solutions/cgi-product-animation-india", label: "CGI product animation" },
      { href: "/casestudies/3ddevelopment/1", label: "Case study: CT scanner animation" },
      { href: "/solutions/3d-character-modeling-services", label: "3D character modeling services" },
    ],
    furtherReading: [
      { href: "/blog/pharma-animation-for-manufacturing-capabilities", label: "Guide: pharma animation for manufacturing capabilities" },
    ],
    cta: {
      title: "Have something that's hard to explain?",
      text: "Send us the product or process and who needs to understand it. We'll suggest a script approach and length, with a scoped quote.",
      button: "Start your animation project",
    },
  },
];

export function getSolution(slug) {
  return SOLUTIONS.find((s) => s.slug === slug);
}
