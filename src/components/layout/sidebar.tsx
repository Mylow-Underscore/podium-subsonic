
import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { NAVIGATION } from "@/lib/constants";

import { GetYear } from "@/components/getYear";

export const Sidebar = () => {
  return (
    <aside className="fixed left-0 top-0 h-full w-20 md:w-64 bg-brand-secondary border-r border-brand-muted/20 flex flex-col items-center py-8 z-50 shadow-xl">
      <div className="mb-12">
        <h1 className="hidden md:block font-bold text-xl">Podium Subsonic</h1>
        <div className="md:hidden font-bold text-xl">PS</div>
      </div>

      <nav className="flex flex-col gap-4 w-full px-4">
        {Object.entries(NAVIGATION).map(([key, value]) => (
          <Link
            key={key}
            href={value.href}
            className={cn(
              "flex items-center gap-4 p-3 rounded-lg hover:bg-brand-accent/10 transition-colors",
              "group"
            )}
          >
            <span className="font-medium">{value.label}</span>
          </Link>
        ))}
      </nav>

      <div className="mt-auto p-4 text-xs text-brand-muted">
        <div style={{ display: "flex", gap: 20 }}>
          {["Instagram", "Facebook"].map((r, i) => (
            <a key={r} href={["https://www.instagram.com/podium_subsonic/", "https://www.facebook.com/Podium.SUBSONIC/"][i]} target="_blank" rel="noopener noreferrer" className="text-brand-info hover:text-brand-accent">
              {r}
            </a>
          ))}
        </div>
        <div style={{ maxWidth: 1200, margin: "15px auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
          <span>© {GetYear()} Podium Subsonic.</span>
          <span>Site par <a className="text-brand-info hover:text-brand-accent" href="https://www.instagram.com/wyloz._/" target="_blank" rel="noopener noreferrer">Wyloz Buisness</a>.</span>
        </div>
      </div>
    </aside>
  );
};
