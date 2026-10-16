import type { Metadata } from "next"
import JsonLd from "@/features/home/components/JsonLd"
import { Hero } from "@/features/home/components/Hero";

export const metadata: Metadata = {
  title: "Podium Subsonic | Excellence en Événementiel",
  description: "Découvrez les solutions innovantes de Podium Subsonic pour vos événements.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Podium Subsonic",
    description: "Expertise en événementiel et solutions innovantes.",
    type: "website",
    locale: "fr_FR",
    url: "https://podiumsubsonic.fr",
  },
  twitter: {
    card: "summary_large_image",
    title: "Podium Subsonic",
    description: "Expertise en événementiel et solutions innovantes.",
  },
}

export default function Page() {
  return (
    <>
      <JsonLd />
      <main>
        <div className="max-w-7xl mx-auto w-full">
          <Hero
            title="Bienvenue chez Podium Subsonic"
            description="Une expérience immersive au cœur de l'événementiel."
            ctaText="Découvrir notre univers"
          />
          {/* Les sections suivantes seront ajoutées ici */}
        </div>
      </main>
    </>
  )
}
