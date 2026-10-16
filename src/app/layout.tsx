import type { Metadata } from "next"
import { Providers } from "@/components/providers"
import { Sidebar } from "@/components/layout/sidebar"
import "./globals.css"

export const metadata: Metadata = {
  title: "Podium Subsonic",
  description: "Site vitrine pour Podium Subsonic",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className="bg-brand-secondary text-brand-primary">
        <Providers>
          <main className="ml-20 md:ml-64 p-4 md:p-8 min-h-screen">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  )
}
