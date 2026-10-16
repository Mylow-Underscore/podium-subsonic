import type { Metadata } from "next"
import JsonLd from "@/features/home/components/JsonLd"
import { Sidebar } from "@/components/layout/sidebar"
import { Hero } from "@/features/home/components/Hero"
import { LogoWall } from "@/features/home/components/LogoWall"
import { ProcessTimeline } from "@/features/home/components/ProcessTimeline"
import { ContactCTA } from "@/features/home/components/ContactCTA"

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
      <Sidebar />
      <main className="min-h-screen">
        <div className="space-y-12">
          <Hero
            title="Bienvenue chez Podium Subsonic"
            description="Une expérience immersive au cœur de l'événementiel."
            ctaText="Découvrir notre univers"
          />

          <LogoWall logos={["St Camelle", "Lauraguel", "Fendeille", "La force", "Airoux", "Molleville", "Villespy"]} />

          <ProcessTimeline />

          <ContactCTA />
        </div>
      </main>
    </>
  )
}
