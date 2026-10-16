"use client"

import Script from 'next/script'

export default function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Podium Subsonic",
    "description": "Expertise en événementiel et solutions innovantes.",
    "url": "https://podiumsubsonic.fr",
    "logo": "https://podiumsubsonic.fr/logo.png"
  }

  return (
    <Script
      id="json-ld-organization"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
