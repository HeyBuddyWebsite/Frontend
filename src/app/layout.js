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
          "streetAddress": "Gurugram",
          "addressLocality": "Gurgaon",
          "addressRegion": "Haryana",
          "postalCode": "122001",
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
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "AI Development",
            "item": "https://www.heybuddy.co.in/services/ai-development"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Game Development",
            "item": "https://www.heybuddy.co.in/services/gamedevelopment"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Web3 Development",
            "item": "https://www.heybuddy.co.in/services/web3"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Metaverse Development",
            "item": "https://www.heybuddy.co.in/services/metaverse"
          },
          {
            "@type": "ListItem",
            "position": 5,
            "name": "Custom Software Development",
            "item": "https://www.heybuddy.co.in/services/customsoftware"
          },
          {
            "@type": "ListItem",
            "position": 6,
            "name": "VR Development",
            "item": "https://www.heybuddy.co.in/services/vrdevelopment"
          },
          {
            "@type": "ListItem",
            "position": 7,
            "name": "AR Development",
            "item": "https://www.heybuddy.co.in/services/ardevelopment"
          },
          {
            "@type": "ListItem",
            "position": 8,
            "name": "CGI Development",
            "item": "https://www.heybuddy.co.in/services/cgi"
          },
          {
            "@type": "ListItem",
            "position": 9,
            "name": "Digital Marketing Services",
            "item": "https://www.heybuddy.co.in/services/digital-marketing"
          },
          {
            "@type": "ListItem",
            "position": 10,
            "name": "AI Ads Creative Services",
            "item": "https://www.heybuddy.co.in/services/aiads"
          },
          {
            "@type": "ListItem",
            "position": 11,
            "name": "3D Modelling",
            "item": "https://www.heybuddy.co.in/services/3dmodeling"
          },
          {
            "@type": "ListItem",
            "position": 12,
            "name": "3D Animation",
            "item": ""
          },
          {
            "@type": "ListItem",
            "position": 13,
            "name": "Billboard",
            "item": "https://www.heybuddy.co.in/services/billboard"
          },
          {
            "@type": "ListItem",
            "position": 14,
            "name": "Robotics Lab Setup",
            "item": "https://www.heybuddy.co.in/services/robotics-lab"
          }
        ]
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
