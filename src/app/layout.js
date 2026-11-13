import "./globals.scss";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "@/components/Nav";
import Script from "next/script";
import Gatag from "./Gatag.js";

const inter = Inter({ subsets: ["latin"] });

const SITE_URL = "https://www.heybuddy.co.in";

// Site-wide defaults. Each route sets its own title, description and canonical
// (never set a canonical here: child routes would inherit the homepage URL).
export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "HeyBuddy | AI-Native Digital Transformation & Immersive Tech",
    template: "%s | HeyBuddy",
  },
  description:
    "HeyBuddy builds AI, AR/VR, metaverse, Web3, CGI and game development solutions for brands in India and worldwide, from strategy to launch.",
  applicationName: "HeyBuddy",
  openGraph: {
    type: "website",
    siteName: "HeyBuddy",
    locale: "en_IN",
    images: [{ url: "/Images/logo.png", alt: "HeyBuddy" }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        "name": "HeyBuddy",
        "url": `${SITE_URL}/`,
        "logo": `${SITE_URL}/Images/logo.png`,
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+91 9318398188",
          "contactType": "customer service",
          "areaServed": "IN",
          "availableLanguage": ["en", "hi"]
        },
        "sameAs": [
          "https://facebook.com/heybuddyofficialin",
          "https://instagram.com/heybuddyofficialin",
          "https://www.linkedin.com/company/hey-buddy-official/"
        ]
      },
      {
        "@type": "LocalBusiness",
        "@id": `${SITE_URL}/#localbusiness`,
        "name": "HeyBuddy",
        "image": `${SITE_URL}/Images/logo.png`,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "SupremeWork, Second floor, Eros City Square Mall, Sector 49",
          "addressLocality": "Gurugram",
          "addressRegion": "Haryana",
          "postalCode": "122018",
          "addressCountry": "IN"
        },
        "telephone": "+91 9318398188",
        "priceRange": "$$",
        "url": `${SITE_URL}/`,
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "28.4595",
          "longitude": "77.0266"
        },
        "description": "Hey Buddy is a creative digital agency offering Metaverse development, AR/VR, Unity & Unreal game development, blockchain, Web3, CGI, AI/ML, and custom software development in India.",
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
          ],
          "opens": "00:00",
          "closes": "23:59"
        },
        "sameAs": [
          "https://facebook.com/heybuddyofficialin",
          "https://instagram.com/heybuddyofficialin",
          "https://www.linkedin.com/company/hey-buddy-official/"
        ]
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        "url": `${SITE_URL}/`,
        "name": "HeyBuddy",
        "publisher": { "@id": `${SITE_URL}/#organization` }
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://heybuddy-images.s3.ap-south-1.amazonaws.com" />
        <Gatag />
        {/* HeyBuddy Insights: cookie-free visitor analytics */}
        <Script
          id="heybuddy-insights"
          src="https://main.d23u26mvoecbym.amplifyapp.com/t.js"
          data-site="heybuddy"
          strategy="afterInteractive"
        />
        {/* Plain script tag so the JSON-LD is in the server HTML (next/script injects it client-side only). */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body className={inter.className}>
        {/* Meta Pixel Code */}
        <Script id="meta-pixel" strategy="lazyOnload">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '792540776887763');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=792540776887763&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {/* End Meta Pixel Code */}

        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5G24WP96"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
