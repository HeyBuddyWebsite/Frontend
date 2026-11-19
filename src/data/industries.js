// Industry hub pages (/industries/*). Each hub sits above the /solutions,
// /services and /casestudies pages for one sector and links down to them
// instead of repeating them. Only state what the site already says about
// HeyBuddy: case study results are quoted as "the published case study
// reports…", and nothing comes from the templated success-story blocks on the
// service pages. No invented numbers, prices, timelines or client names. FAQ
// answers are rendered verbatim and reused in the FAQPage schema, so keep them
// as plain strings.

export const INDUSTRIES_UPDATED = { iso: "2026-11-19", label: "November 2026" };

export const INDUSTRIES = [
  // 1 ─────────────────────────────────────────────────────────────────────
  {
    slug: "real-estate",
    name: "Real estate",
    seoTitle: "Real Estate Technology Solutions: AR, VR and 3D",
    seoDescription:
      "Real estate technology from HeyBuddy: VR property tours, 3D walkthroughs and renders, 3D launch billboards and custom apps for developers and brokers.",
    h1: "Real estate technology solutions: AR, VR and 3D for developers, brokers and architects",
    summary: "VR tours, 3D walkthroughs, launch billboards and the apps behind them, with two VR case studies from the sector.",
    intro:
      "HeyBuddy builds the visual and software side of selling property: VR tours, 3D walkthroughs and renders, anamorphic billboards for project launches, and the custom apps that hold it all together. This page is the overview for real estate teams. Each part links to the page that covers it in depth, and to the two VR projects we've published from the sector.",
    problems: {
      title: "The problems real estate teams bring to us",
      items: [
        { title: "Selling a building that doesn't exist yet", text: "Off-plan projects are sold from brochures, sample flats and 2D plans. Most buyers can't read scale, light or layout from a floor plan, so they hesitate." },
        { title: "Site visits that eat the sales week", text: "Showing every prospect every property in person takes time away from listing and verifying new inventory. That was the exact problem behind our VR tours case study." },
        { title: "Design sign-off that drags on", text: "Architects and clients read the same 2D render differently. The gap shows up later as revisions, when changes cost more." },
        { title: "Launches that look like every other launch", text: "When every hoarding and listing uses the same style of render, a new project has to work harder to be noticed." },
        { title: "Tools that don't fit the workflow", text: "Generic listing and CRM tools rarely match how a developer or brokerage actually runs inventory, leads and bookings." },
      ],
    },
    build: {
      title: "What HeyBuddy builds for real estate",
      groups: [
        {
          label: "VR and AR",
          items: [
            { title: "VR property tours", text: "True-to-scale tours of ready and unbuilt properties on headsets, phones and regular screens. The dedicated page covers formats, devices and buyers without a headset.", href: "/solutions/vr-real-estate-virtual-tours", linkLabel: "VR property tours" },
            { title: "VR design review for architects", text: "Walkthroughs at 1:1 scale where architects and their clients review a design together before construction starts.", href: "/casestudies/vr-development/11", linkLabel: "See the architecture project" },
          ],
        },
        {
          label: "3D and CGI",
          items: [
            { title: "3D walkthroughs and interior renders", text: "Our 3D modelling team translates CAD data into walkthroughs and interior renders for real estate and urban planning, and builds digital twins for architecture.", href: "/services/3d-modeling", linkLabel: "3D modelling services" },
            { title: "Anamorphic 3D billboards for launches", text: "Forced-perspective content for corner LED screens, which can be paired with QR-triggered mobile AR so a launch campaign carries on from the street to the buyer's phone.", href: "/services/billboard", linkLabel: "3D billboard advertising" },
          ],
        },
        {
          label: "Software",
          items: [
            { title: "Real estate apps and platforms", text: "Custom web and mobile apps, CRM and ERP systems, and content management for listings, built around the way your team works rather than a template.", href: "/services/custom-software", linkLabel: "Custom software development" },
          ],
        },
      ],
    },
    proof: {
      title: "Proof from real estate projects",
      items: [
        {
          title: "VR tours app for a real estate business",
          text: "A company that buys, sells and rents property needed to stop spending its days on site visits. We upgraded its app so prospects could tour properties remotely, kept it usable for people who don't own a VR headset, and made it simple for the client's team to add new properties themselves.",
          href: "/casestudies/vr-development/10",
          linkLabel: "Read the VR tours case study",
        },
        {
          title: "VR architectural visualisation for an architecture firm",
          text: "A large architecture firm wanted more from design reviews than 2D renderings could give. We built a VR platform where architects and clients step into a design at 1:1 scale and iterate on it together. The published case study reports 35% fewer design revisions, 20% faster client approvals and a 28% rise in client satisfaction ratings.",
          href: "/casestudies/vr-development/11",
          linkLabel: "Read the architecture case study",
        },
      ],
    },
    process: {
      title: "How a real estate project usually runs",
      steps: [
        { title: "Start from the sales problem", text: "Pre-launch sales, fewer site visits, faster design approval or a louder launch: the goal decides the format, so we agree it first." },
        { title: "Collect the drawings early", text: "CAD files, floor plans, elevations and material specifications. Accuracy depends on them, so we ask for them on day one." },
        { title: "Model once, use it everywhere", text: "We plan the 3D model so the same asset can feed renders, walkthroughs, VR tours and campaign content." },
        { title: "Review where buyers will see it", text: "You review on the headsets, phones and screens your buyers will use, not only as still images." },
        { title: "Launch and hand over", text: "Delivery on headset, phone or web, plus a walkthrough for your team if they will add properties or update content." },
      ],
    },
    faqs: [
      { q: "What technology do developers use to sell off-plan projects?", a: "The usual set is photoreal 3D renders, animated 3D walkthroughs and VR tours, often backed by a website or app that holds the listings. HeyBuddy builds all of these, and we usually recommend starting with the format closest to your current sales process rather than everything at once." },
      { q: "Do buyers need a VR headset to take a virtual property tour?", a: "No. In our VR tours project for a real estate business, the app was built to work for people without a headset too. Tours can run on headsets, phones and regular screens." },
      { q: "Can you work from our architectural drawings and CAD files?", a: "Yes. Our 3D modelling team translates CAD data into 3D walkthroughs and interior renders. The more complete the drawings and material specifications, the more accurate the result." },
      { q: "What is the difference between a 3D walkthrough and a VR tour?", a: "A 3D walkthrough is a rendered video along a fixed path that anyone can watch. A VR tour lets the viewer move through the space themselves at true scale. Walkthroughs suit marketing; VR tours suit serious buyers and design reviews." },
      { q: "Can HeyBuddy build our real estate CRM, app or website?", a: "Yes. Our custom software team builds web and mobile apps, CRM and ERP systems and content management platforms. For a real estate business that can cover listings, lead management and the app that hosts your VR tours." },
      { q: "How much does a real estate VR or 3D project cost?", a: "It depends on the size of the project, how many units and interiors need modelling, the level of realism and where the content will run. HeyBuddy quotes per brief after a short consultation." },
    ],
    reading: [
      { href: "/blog/3d-walkthrough-services-for-real-estate", label: "3D walkthrough services for real estate" },
      { href: "/blog/3d-apartment-rendering", label: "3D apartment rendering: types, process and cost" },
      { href: "/blog/3d-architectural-rendering-complete-guide", label: "3D architectural rendering: a complete guide" },
      { href: "/blog/real-estate-software-development-company", label: "Choosing a real estate software development company" },
      { href: "/blog/real-estate-website-development-company", label: "Real estate website development guide" },
    ],
    related: [
      { href: "/services/vr-development", label: "VR development services" },
      { href: "/solutions/ar-vr-company-delhi-ncr", label: "AR and VR company in Delhi NCR" },
      { href: "/casestudies", label: "All case studies" },
    ],
    cta: {
      title: "Planning a launch or a sales gallery?",
      text: "Send us the drawings and tell us what buyers need to understand. We'll recommend a format and come back with a scoped quote.",
      button: "Discuss your project",
    },
  },

  // 2 ─────────────────────────────────────────────────────────────────────
  {
    slug: "education",
    name: "Education",
    seoTitle: "Immersive Learning Solutions for Schools",
    seoDescription:
      "Immersive learning for schools: VR/AR labs, robotics labs, custom VR lessons, teacher training and support, plus digital marketing that helps admissions.",
    h1: "Immersive learning solutions for schools: VR in education, AR and robotics labs",
    summary: "VR/AR and robotics labs with curriculum, teacher training and support, plus custom content and school marketing.",
    intro:
      "HeyBuddy sets up VR/AR labs and robotics labs for schools and higher education, and builds custom immersive lessons for them. This page brings our education work together: the two kinds of lab, the content and teacher training that make them get used, and the digital marketing that helps a school show parents what it has built.",
    problems: {
      title: "What schools tell us they're trying to fix",
      items: [
        { title: "Abstract concepts stay abstract", text: "Cells, the solar system, magnetic fields and anatomy are hard to grasp from a diagram on a page." },
        { title: "Practicals that are risky or expensive", text: "Some experiments and vocational skills are too hazardous or costly to repeat with real materials as often as students need." },
        { title: "Labs that end up locked", text: "Hardware bought on its own often goes unused when teachers haven't been trained and the content doesn't match the syllabus." },
        { title: "Coding that never leaves the screen", text: "Logic taught only on a 2D screen misses the build, test and fix loop that physical robotics gives students." },
        { title: "Admissions that depend on being seen", text: "Parents compare schools online long before they visit, and a new lab does nothing for admissions if nobody outside the school knows about it." },
      ],
    },
    build: {
      title: "What HeyBuddy builds for education",
      groups: [
        {
          label: "VR and AR",
          items: [
            { title: "VR/AR lab setup", text: "Turnkey labs from standalone VR to mixed reality, with enterprise-grade headsets, built-in device management, pre-loaded grade-wise content and a subscription LMS.", href: "/services/vr-ar-lab", linkLabel: "VR/AR lab setup" },
            { title: "Custom VR and AR lessons", text: "Modules built for your syllabus or training needs, from K-12 subjects to vocational skills such as welding, carpentry or hazardous chemical mixing, plus gamified modules that turn lessons into quests and assessments into challenges." },
          ],
        },
        {
          label: "Robotics and AI",
          items: [
            { title: "Robotics lab setup", text: "Labs for every stage: block-based kits for primary students, mechanics kits for middle school, and AI and ROS robots for high school and university.", href: "/services/robotics-lab", linkLabel: "Robotics lab setup" },
            { title: "Maker, drone and competition zones", text: "3D printers and maker tools, drone and IoT stations, and training tracks that prepare school teams for national and international robotics competitions." },
          ],
        },
        {
          label: "Marketing",
          items: [
            { title: "School marketing and admissions", text: "SEO, social media, performance marketing and AI and CGI ad creatives from our digital marketing team, so parents can see the learning that happens inside the lab.", href: "/services/digital-marketing", linkLabel: "Digital marketing services" },
          ],
        },
      ],
    },
    proof: {
      title: "What comes with every HeyBuddy lab",
      items: [
        { title: "A curriculum, not just hardware", text: "Both lab pages describe a graded, progressive curriculum aligned with NEP and STEM standards, with 550+ STEM simulations connected to your existing LMS through single sign-on.", href: "/services/vr-ar-lab", linkLabel: "How the VR/AR lab works" },
        { title: "Teachers who don't need to be technical", text: "No prior technical expertise is needed. Faculty get hands-on workshops, and the lab pages describe ongoing training, software and curriculum updates and hardware maintenance after launch.", href: "/services/robotics-lab", linkLabel: "How the robotics lab works" },
        { title: "Planned around your space", text: "We map the room before anything is installed. The VR/AR lab page plans for areas of 500 to 1,200 sq. ft. with a safety-first layout; the robotics lab page says a classroom of about 600 to 800 sq. ft. usually suits a batch of 30 students." },
        { title: "Built for a school day", text: "VR headsets run simulations offline once set up, so a weak connection doesn't stop a lesson. The internet is needed for initial setup and for syncing data to the LMS.", href: "/blog/vr-ar-lab-setup-guide", linkLabel: "Read the VR/AR lab setup guide" },
      ],
    },
    process: {
      title: "How a school lab comes together",
      steps: [
        { title: "Assess", text: "Learning objectives, student numbers and the space you have available." },
        { title: "Design the room", text: "Layout, furniture and network planned around safety and the number of students using it at once." },
        { title: "Equip and test", text: "Headsets or robotics kits provisioned and stress-tested before the first class." },
        { title: "Connect the curriculum", text: "Grade-wise content linked to your LMS, so teachers and students sign in once." },
        { title: "Train and support", text: "Faculty workshops, student onboarding, pilot feedback and maintenance after launch." },
      ],
    },
    faqs: [
      { q: "What is the difference between a VR/AR lab and a robotics lab?", a: "A VR/AR lab uses headsets and mixed reality to let students explore subjects they can't touch, such as anatomy, astronomy or historical sites. A robotics lab is hands-on: students build, code and test machines using kits, sensors, microcontrollers and maker tools. Many schools start with one and add the other." },
      { q: "Which age groups are immersive labs suitable for?", a: "The robotics lab covers K-12 and higher education, from block-based kits for primary students to AI and ROS robots for high school and university. The VR/AR lab runs from K-12 virtual field trips to vocational skills simulations." },
      { q: "Can a school set up both a VR/AR lab and a robotics lab?", a: "Yes. The VR/AR lab is designed as part of a total school solution that works with broader STEM tools, and the robotics lab doubles as a maker space with 3D printers, IoT and drone stations. Both follow the same approach: space planning, a graded curriculum on an LMS and teacher training." },
      { q: "Can you build VR lessons for our own syllabus?", a: "Yes. Alongside the pre-loaded content, we create custom VR and AR modules for a specific curriculum or training need, including gamified modules and skills simulations." },
      { q: "Do you help schools with marketing and admissions?", a: "Yes. Our digital marketing team handles SEO, social media, performance marketing and ad creatives, and our blog covers the admissions mistakes we see most often in school marketing." },
      { q: "How much does a school VR/AR or robotics lab cost?", a: "It depends on the type of lab, the number of headsets or kits, the size of the space and the curriculum package. HeyBuddy prepares a lab proposal for each institution after an assessment." },
    ],
    reading: [
      { href: "/blog/vr-ar-lab-setup-guide", label: "The complete guide to VR/AR labs" },
      { href: "/blog/school-marketing-strategy-mistakes-that-cost-you-admissions", label: "School marketing mistakes that cost admissions" },
      { href: "/blog/school-website-not-generating-leads", label: "Why a school website isn't generating leads" },
      { href: "/blog/digital-storytelling-for-schools", label: "Digital storytelling for schools" },
      { href: "/blog/why-traditional-school-brochures-are-failing", label: "Why traditional school brochures are failing" },
    ],
    related: [
      { href: "/solutions/vr-training-solutions", label: "VR training solutions" },
      { href: "/services/vr-development", label: "VR development services" },
      { href: "/services/game-development", label: "Game development services" },
    ],
    cta: {
      title: "Planning a lab for your school?",
      text: "Tell us your grades, student numbers and the space you have. We'll recommend the right lab and prepare a proposal.",
      button: "Get a lab proposal",
    },
  },

  // 3 ─────────────────────────────────────────────────────────────────────
  {
    slug: "retail-d2c",
    name: "Retail and D2C",
    seoTitle: "AR and 3D Solutions for Retail and D2C Brands",
    seoDescription:
      "AR and 3D for retail and D2C brands: virtual try-on, WebAR, CGI product imagery, virtual showrooms, AI video ads and custom stores, backed by case studies.",
    h1: "AR and 3D solutions for retail and D2C brands, from product page to checkout",
    summary: "Try-on, WebAR, CGI imagery, showrooms, AI ads and custom stores, with four published retail case studies.",
    intro:
      "HeyBuddy builds the tools retail and D2C brands use to sell physical products online: AR try-on and room placement, WebAR, CGI product imagery and animation, virtual showrooms, AI video ads and the commerce platform underneath. Four of our published case studies come from retail and D2C. This page connects them to the solution pages that go deeper.",
    problems: {
      title: "Where retail and D2C brands lose sales online",
      items: [
        { title: "Shoppers can't judge fit or size", text: "On a screen, nobody can tell how a jacket fits or whether a sofa suits the room. The doubt shows up later as returns and abandoned carts." },
        { title: "Flat photos don't hold attention", text: "Still product shots look like everyone else's. Our CGI case study client was struggling to win the attention of the customers it was targeting." },
        { title: "Leaving the marketplaces", text: "Moving from multi-vendor marketplaces to your own store means building a platform that can take orders, payments and international customers." },
        { title: "Creative that can't keep up", text: "Paid campaigns need many ad variations across Instagram, Facebook, Google and YouTube, and each format has its own requirements." },
        { title: "Premium brands, generic tools", text: "A luxury or design-led brand needs the online experience to match its stores. Off-the-shelf templates rarely do." },
      ],
    },
    build: {
      title: "What HeyBuddy builds for retail and D2C",
      groups: [
        {
          label: "AR",
          items: [
            { title: "Virtual try-on and room placement", text: "Try-on for apparel, eyewear and jewellery, and true-scale placement for furniture, connected to your catalogue.", href: "/solutions/virtual-try-on-solutions", linkLabel: "AR virtual try-on" },
            { title: "WebAR", text: "AR that opens from a link or QR code with no app to install, for product pages, packaging and in-store campaigns.", href: "/solutions/webar-development-company-india", linkLabel: "WebAR development" },
          ],
        },
        {
          label: "3D and CGI",
          items: [
            { title: "CGI product imagery and animation", text: "Photoreal renders, lifestyle imagery, 360° views and launch films made from 3D models instead of photo shoots.", href: "/solutions/cgi-product-animation-india", linkLabel: "CGI product animation" },
            { title: "Virtual showrooms", text: "3D, VR and metaverse showrooms with avatars, private consultation rooms and launch events.", href: "/solutions/virtual-showroom-development", linkLabel: "Virtual showroom development" },
          ],
        },
        {
          label: "AI",
          items: [
            { title: "AI video ads and ad creatives", text: "AI-generated video ads and personalised creatives for Facebook, Instagram and Google, with multiple variations to test.", href: "/services/ai-ads", linkLabel: "AI ads creative services" },
          ],
        },
        {
          label: "Software",
          items: [
            { title: "Your own D2C store", text: "Custom eCommerce platforms with a secure payment process and mobile-responsive design, built to match your brand rather than a template.", href: "/services/custom-software", linkLabel: "Custom software development" },
          ],
        },
      ],
    },
    proof: {
      title: "Retail and D2C case studies",
      items: [
        {
          title: "AR try-on for an apparel brand",
          text: "An apparel brand with a large online and in-store presence wanted fewer returns. We built an AR try-on platform integrated with its website, app, catalogue and order systems. The published case study reports a 32% reduction in returns, a 26% increase in online conversions within the first three months and a 20% increase in average order value.",
          href: "/casestudies/ar-development/6",
          linkLabel: "Read the try-on case study",
        },
        {
          title: "AR for a D2C furniture store",
          text: "A furniture brand selling direct wanted shoppers to see pieces in their own rooms. We added markerless AR to both its website and its app, delivered within three months. The published case study reports a 17% monthly increase in product sales, a 24% better customer interaction rate and a 23% reduction in bounce rate.",
          href: "/casestudies/ar-development/5",
          linkLabel: "Read the furniture AR case study",
        },
        {
          title: "CGI imagery for an online furniture brand",
          text: "We replaced flat product photos with CGI lifestyle imagery, new backgrounds and a configurator for viewing each piece from several angles. The published case study reports web traffic rising by around a third after the CGI imagery went live, and a significant drop in cart abandonment.",
          href: "/casestudies/cgidevelopment/7",
          linkLabel: "Read the CGI case study",
        },
        {
          title: "D2C marketplace for a luxury watch brand",
          text: "A luxury watch brand in India wanted to sell directly instead of through multi-vendor marketplaces. We built its D2C platform in six months, scoped around payment gateways and multi-currency and multi-language needs, with product videos on every page. The published case study reports 35% better customer retention and a 46% reduction in product returns.",
          href: "/casestudies/custom-software/16",
          linkLabel: "Read the marketplace case study",
        },
      ],
    },
    process: {
      title: "How we approach a retail project",
      steps: [
        { title: "Find the leak", text: "Returns, bounce, cart abandonment or tired ad creative: we start where your funnel loses the most people." },
        { title: "Pilot on the best sellers", text: "AR and 3D go first on the products where they will make the biggest difference, not the whole catalogue." },
        { title: "Build 3D assets to reuse", text: "Models made for try-on or placement can also produce CGI imagery, 360° views and showroom content." },
        { title: "Integrate with the store", text: "Catalogue, inventory and order systems stay in sync, so AR is part of the buying journey rather than a separate demo." },
        { title: "Measure and extend", text: "Track the metric you started with, then roll out to more products, channels or campaigns." },
      ],
    },
    faqs: [
      { q: "What is the best first AR or 3D project for a D2C brand?", a: "Start where you lose the most sales. If returns are the problem, virtual try-on or room placement usually comes first. If shoppers bounce from product pages, CGI imagery and 360° views are often quicker wins. We recommend a pilot on your best sellers before rolling out." },
      { q: "Will AR work with our existing online store?", a: "Usually, yes. AR is normally added as a button on existing product pages. In our try-on project the platform was integrated with the brand's website, app, catalogue, inventory and order processing. We check your platform during scoping." },
      { q: "Do we need 3D models of every product?", a: "No. Most brands start with a small set of high-value or high-return products. If you don't have 3D models, our team can build them from photos, drawings or a physical sample." },
      { q: "Can the same 3D models be used for ads and product imagery?", a: "Yes. A model built for AR can also be rendered for CGI lifestyle imagery, 360° views, launch films and virtual showrooms, which is why we plan the 3D catalogue once." },
      { q: "Can HeyBuddy build our own D2C store?", a: "Yes. We built a D2C marketplace for a luxury watch brand moving off multi-vendor marketplaces, scoped around payment gateways and multi-currency and multi-language needs. Our custom software team also builds CMS and CRM systems." },
      { q: "How much does AR or 3D for retail cost?", a: "It depends on the number of products, the type of AR, the level of realism and the integrations you need. HeyBuddy quotes per brief after a short consultation." },
    ],
    reading: [
      { href: "/blog/e-commerce-website-development-cost-in-india", label: "E-commerce website development cost in India" },
      { href: "/blog/ai-chatbot-development-service-for-ecommerce", label: "AI chatbots for e-commerce" },
      { href: "/blog/conversational-ai-chatbot-solution-for-ecommerce", label: "Conversational AI for e-commerce" },
    ],
    related: [
      { href: "/services/ar-development", label: "AR development services" },
      { href: "/services/cgi", label: "CGI and VFX services" },
      { href: "/solutions/gamified-ar-marketing-campaigns", label: "Gamified AR marketing campaigns" },
    ],
    cta: {
      title: "Losing sales between product page and checkout?",
      text: "Tell us what you sell and where shoppers drop off. We'll suggest where AR, 3D or AI will help most and send a scoped quote.",
      button: "Talk to our retail team",
    },
  },

  // 4 ─────────────────────────────────────────────────────────────────────
  {
    slug: "manufacturing",
    name: "Manufacturing",
    seoTitle: "3D, VR and AI Solutions for Manufacturing",
    seoDescription:
      "3D, VR and AI for manufacturers: CGI explainers for complex products, VR training, 3D from CAD, AI for operations and custom software for the plant.",
    h1: "3D, VR and AI solutions for manufacturers and industrial equipment makers",
    summary: "CGI explainers, VR training and prototyping, 3D from CAD, AI and custom software for manufacturers.",
    intro:
      "HeyBuddy helps manufacturers with three jobs: explaining complex products to buyers through 3D animation, training people on equipment and safety in VR, and building the AI and custom software behind operations. Our clearest manufacturing proof is an animated explainer for a CT scanner maker's airport security machine. The rest of this page shows where each capability is covered in depth.",
    problems: {
      title: "Problems manufacturers bring to us",
      items: [
        { title: "Complex products are hard to explain", text: "Buyers need to see how a machine works inside. Brochures and photos can't show that, and a real unit can't travel to every sales meeting." },
        { title: "Training on equipment you can't risk", text: "New staff can't learn hazardous or high-stakes procedures on live machinery, and taking equipment offline for training costs output." },
        { title: "Prototypes and mockups cost money", text: "Every physical iteration of a design adds time and cost before the product is ready for production." },
        { title: "Data that never reaches a decision", text: "Production, quality, inventory and supply information sits in separate systems and documents, so it is slow to act on." },
        { title: "Software that doesn't fit the floor", text: "Generic planning and inventory tools are built for an average business, not for how your plant actually runs." },
      ],
    },
    build: {
      title: "What HeyBuddy builds for manufacturing",
      groups: [
        {
          label: "3D and CGI",
          items: [
            { title: "Technical explainers and product films", text: "Animations that show buyers how a product works inside, from launch films to detailed explainers.", href: "/solutions/cgi-product-animation-india", linkLabel: "CGI product animation" },
            { title: "3D models from CAD and scans", text: "Accurate models translated from CAD data or captured with scan-to-3D workflows, with rigging for moving parts.", href: "/services/3d-modeling", linkLabel: "3D modelling services" },
          ],
        },
        {
          label: "VR",
          items: [
            { title: "VR training for equipment and safety", text: "Simulations for equipment and maintenance procedures and industrial safety, with multi-user sessions and LMS integration.", href: "/solutions/vr-training-solutions", linkLabel: "VR training solutions" },
            { title: "VR product prototyping", text: "Reviewing and iterating on product designs in virtual space before anything is manufactured.", href: "/services/vr-development", linkLabel: "VR development services" },
          ],
        },
        {
          label: "AI",
          items: [
            { title: "AI for operations", text: "Our AI development page lists predictive maintenance, quality control, supply chain optimisation and digital twins among its manufacturing use cases, alongside computer vision for visual monitoring and AI that processes large volumes of documents and reports.", href: "/services/ai-development", linkLabel: "AI development services" },
          ],
        },
        {
          label: "Software",
          items: [
            { title: "Custom software for the business", text: "ERP and CRM systems, IoT applications, cloud and data analytics, built around your processes.", href: "/services/custom-software", linkLabel: "Custom software development" },
          ],
        },
      ],
    },
    proof: {
      title: "Proof from manufacturing work",
      items: [
        {
          title: "Animated explainer for an airport security CT scanner",
          text: "A CT scanner manufacturer in the UAE needed to show airport authorities, its prospective buyers, how its new security scanner works. Our team learned the machine's specifications, modelled it in Blender, ZBrush and Substance Painter, and animated everything from baggage entering the scanner to the 3D images it produces. The published case study reports four months of collaboration, 30 close-up shots, 100 hours saved in post-processing by using a render farm, and delivery 20 days before the deadline.",
          href: "/casestudies/3ddevelopment/1",
          linkLabel: "Read the CT scanner case study",
        },
        {
          title: "What we haven't published yet",
          text: "We don't have a published manufacturing case study for VR training, AI or plant software yet. The VR training, AI development and custom software pages describe those capabilities, and we're happy to walk you through comparable work on a call.",
        },
      ],
    },
    process: {
      title: "How a manufacturing project runs",
      steps: [
        { title: "Start with engineering data", text: "CAD files, specifications and drawings, plus time with your engineers to understand how the product or process really works." },
        { title: "Agree what the audience must take away", text: "A buyer, a new technician and a plant manager need different things. We decide what to show and what to leave out." },
        { title: "Model for accuracy", text: "One accurate model can serve animation, VR training and AR, so it is built to engineering detail from the start." },
        { title: "Review with your experts", text: "Your engineers check technical accuracy at each stage, as the CT scanner client did throughout that project." },
        { title: "Deliver and support", text: "Rendered films, VR builds on headsets, or deployed software, with updates as the product changes." },
      ],
    },
    faqs: [
      { q: "Can you create a 3D animation of our machine from CAD files?", a: "Yes. Our 3D modelling team translates CAD data into accurate 3D models, which we then texture, rig and animate. If CAD isn't available, scan-to-3D or drawings and reference photos can be used instead." },
      { q: "How do you keep technical animations accurate?", a: "By learning the product's specifications and reviewing with your engineers throughout. In our CT scanner project, the team had to balance visual appeal with educational value without sacrificing technical accuracy." },
      { q: "What can VR training cover in a manufacturing setting?", a: "Equipment operation and maintenance procedures, industrial safety and hazard response, run as single-user or instructor-led multi-user sessions and connected to your LMS for tracking." },
      { q: "Which AI use cases fit manufacturing?", a: "Our AI development page lists predictive maintenance, quality control, supply chain optimisation and digital twins for manufacturing. Computer vision for visual monitoring and AI that extracts data from documents and reports are also common starting points." },
      { q: "Can you build custom software for production and inventory?", a: "Yes. Our custom software team builds ERP and CRM systems, IoT applications and cloud and data platforms around your existing processes." },
      { q: "How much does a manufacturing 3D, VR or AI project cost?", a: "It depends on the complexity of the product or process, the level of detail, the delivery platform and the integrations needed. HeyBuddy quotes per brief after a short consultation." },
    ],
    reading: [
      { href: "/blog/pharma-animation-for-manufacturing-capabilities", label: "Animation for showing manufacturing capabilities" },
      { href: "/blog/product-development-company-in-india", label: "Product development company in India: a guide" },
      { href: "/blog/custom-machine-learning-solutions", label: "Why custom machine learning projects fail" },
      { href: "/blog/enterprise-ai-agent-development-services", label: "Enterprise AI agent development" },
    ],
    related: [
      { href: "/services/cgi", label: "CGI and VFX services" },
      { href: "/services/ar-development", label: "AR development services" },
      { href: "/casestudies", label: "All case studies" },
    ],
    cta: {
      title: "Have a product that's hard to explain?",
      text: "Share the CAD files or a spec sheet and tell us who needs to understand it. We'll recommend an approach and send a scoped quote.",
      button: "Discuss your project",
    },
  },
];

export function getIndustry(slug) {
  return INDUSTRIES.find((i) => i.slug === slug);
}
