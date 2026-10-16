"use client"

import React from "react";
import { cn } from "@/lib/utils";

interface LogoWallProps {
  logos: string[];
  className?: string;
}

export const LogoWall = ({ logos, className }: LogoWallProps) => {
  // Définition des styles typographiques à alterner
  const typographyStyles = [
    "font-serif italic",                   // Style 1 : Élégant / Classique
    "font-sans font-black tracking-tighter", // Style 2 : Impactant / Moderne
    "font-mono text-xs uppercase tracking-widest", // Style 3 : Technique / Minimaliste
  ];

  return (
    <section className={cn("py-12 border-y border-brand-muted/10 bg-brand-secondary/50", className)}>
      <p className={cn(
        "text-center text-sm font-medium text-brand-muted mb-8",
        typographyStyles[0] // Premier élément utilise le style 1
      )}>
        Ils nous font confiance
      </p>

      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale">
        {logos.map((logo, index) => {
          // Calcul de l'index pour alterner les styles à partir du deuxième élément
          // (index + 1) car le titre a déjà consommé l'index 0
          const styleIndex = (index + 1) % typographyStyles.length;

          return (
            <div key={index} className="h-12 w-auto">
              {/* Placeholder for actual logo images */}
              <div className="bg-brand-muted/30 border border-brand-muted/50 rounded-lg p-2">
                <span className={cn("text-xl", typographyStyles[styleIndex])}>
                  {logo}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
