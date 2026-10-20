"use client"


interface Step {
  title: string;
  description: string;
}

export const ProcessTimeline = () => {
  const steps: Step[] = [
    { title: "Conseil", description: "Audit de vos besoins et définition de la stratégie." },
    { title: "Conception", description: "Création du concept et des éléments visuels." },
    { title: "Production", description: "Mise en œuvre et exécution technique." },
    { title: "Coordination", description: "Gestion fluide jusqu'au jour J." },
  ];

  return (
    <section className="py-20 bg-brand-primary text-brand-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Notre Méthodologie</h2>
          <p className="text-brand-muted max-w-2xl mx-auto">Une approche structurée pour garantir le succès de vos projets.</p>
        </div>

        <div className="relative">
          {/* Central Timeline Line - only visible on desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 linear-gradient(to right, transparent 10%, 100%) -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative flex flex-col items-center text-center">
                {/* Circle Marker */}
                <div className="z-10 w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-lg border-2">
                  {index + 1}
                </div>

                <div className="mt-6 space-y-2">
                  <h3 className="text-xl font-bold">{step.title}</h3>
                  <p className="text-sm text-brand-muted max-w-[200px] mx-auto">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
