"use client"

import { Button } from "@/components/ui/button";

export const ContactCTA = () => {
  return (
    <section className="py-24 bg-brand-accent text-white text-center px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Prêt à donner vie à votre projet ?</h2>
        <p className="text-lg mb-10 opacity-90">
          Contactez notre équipe dès aujourd&apos;hui pour discuter de votre prochain événement et obtenir une proposition sur mesure.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-brand-secondary text-white hover:bg-secondary/90">
            Prendre rendez-vous
          </Button>
          <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
            Nous contacter
          </Button>
        </div>
      </div>
    </section>
  );
};
