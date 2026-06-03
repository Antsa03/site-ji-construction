import Script from "next/script"

function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "JI Construction",
    description:
      "Expert BTP et concepteur de bungalows sur mesure à Madagascar. Construction, rénovation, études et plans.",
    url: "https://jiconstruction.mg",
    telephone: "+261341234567",
    email: "contact@jiconstruction.mg",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Lot II A 45 Analakely",
      addressLocality: "Antananarivo",
      postalCode: "101",
      addressCountry: "MG",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -18.8792,
      longitude: 47.5079,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "12:00",
      },
    ],
    sameAs: [
      "https://facebook.com/jiconstruction",
      "https://instagram.com/jiconstruction",
      "https://linkedin.com/company/jiconstruction",
    ],
    image: "https://jiconstruction.mg/images/hero/construction.jpg",
    priceRange: "$$",
    areaServed: {
      "@type": "Country",
      name: "Madagascar",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services de construction",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Construction neuve",
            description: "Maisons, immeubles, locaux commerciaux",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Rénovation",
            description: "Remise à neuf complète de vos espaces existants",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Bungalows sur mesure",
            description: "Conception et construction de bungalows uniques",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Études et plans",
            description: "Plans architecturaux, études de sol, métré",
          },
        },
      ],
    },
  }

  return (
    <Script
      id="ji-construction-jsonld"
      type="application/ld+json"
      strategy="beforeInteractive"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  )
}

export { JsonLd }