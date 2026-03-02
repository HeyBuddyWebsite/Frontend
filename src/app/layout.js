import "./globals.scss";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "@/components/Nav";
import Script from "next/script";
import Gatag from "./Gatag.js";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "HeyBuddy | AI-Native Digital Transformation & Immersive Tech",
  description: "HeyBuddy is India's leading software development company offering innovative AI, AR/VR, Metaverse, Web3 & Game development solutions for digital transformation.",
};

export default function RootLayout({ children }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://heybuddy.co.in/#organization",
        "name": "HeyBuddy",
        "url": "https://heybuddy.co.in/",
        "logo": "https://heybuddy.co.in/logo.png",
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
        "@id": "https://heybuddy.co.in/#localbusiness",
        "name": "HeyBuddy",
        "image": "https://heybuddy.co.in/logo.png",
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
        "url": "https://heybuddy.co.in/",
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
        "@id": "https://heybuddy.co.in/#website",
        "url": "https://heybuddy.co.in/",
        "name": "HeyBuddy",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://heybuddy.co.in/?s={search_term}",
          "query-input": "required name=search_term"
        }
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <link href="https://www.heybuddy.co.in/" rel="canonical" />
        <Gatag />
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
        <Script id="syntr-tracker">
          {`
            (function(w,d,s,u,o){
            w[o]=w[o]||function(){(w[o].q=w[o].q||[]).push(arguments)}
            var js=d.createElement(s),f=d.getElementsByTagName(s)[0]
            js.async=1;js.src='http://localhost:5001/sdk/syntr.js';f.parentNode.insertBefore(js,f)
            })(window,document,'script','http://localhost:5001/sdk/syntr.js','syntr');
            syntr('init','syntr_pk_GMTIThkoNut-SHMY');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        {/* Meta Pixel Code */}
        <Script id="meta-pixel" strategy="afterInteractive">
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
