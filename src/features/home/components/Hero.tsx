"use client"

import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Image from "next/dist/shared/lib/image-external";

interface HeroProps {
  title: string;
  description: string;
  ctaText: string;
  className?: string;
}

export const Hero = ({ title, description, ctaText, className }: HeroProps) => {
  return (
    <section className={cn("relative min-h-[80vh] flex items-center justify-center py-20 px-6 overflow-hidden", className)}>
      {/* Trapezoid Background Layer */}
      <div className="absolute inset-0 -z-10 bg-brand-primary">
        <div className="w-full h-full bg-brand-accent/30 clip-path-trapezoid hero-gradient-overlay" />
      </div>

      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="max-w-2xl text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-brand-secondary">
            {title}
          </h1>
          <p className="text-lg md:text-xl mb-8 text-brand-muted max-w-lg">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button size="lg" className="bg-brand-accent hover:bg-brand-accent/80 text-white">{ctaText}</Button>
            <Button variant="outline" size="lg">En savoir plus</Button>
          </div>
        </div>

        <div className="w-full md:w-1/2 group">
          <div className="relative aspect-video bg-gray-200 rounded-2xl overflow-hidden border-4 border-brand-secondary/10 shadow-xl">
             <div className="absolute inset-0 flex items-center justify-center text-gray-400">
               <Image src="/images/hero_img_1.jpg" alt="Hero Image" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};
