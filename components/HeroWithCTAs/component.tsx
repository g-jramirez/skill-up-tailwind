import React from "react";
import { Hero } from "./../Hero";

interface IHeroWithCTAs {
  CTA1?: string;
  CTA2?: string;
  url?: string;
}

export const HeroWithCTAs: React.FC<IHeroWithCTAs> = ({ CTA1, CTA2, url }) => {
  return (
    <div className="hero-with-cta">
      <Hero />
      <div className="cta-container flex gap-4 justify-center mb-6">
        {CTA1 && <button className="bg-white rounded-full px-6 py-3 border-4 border-white transition-all hover:bg-black hover:text-white ease-in hover:border-black">{CTA1}</button>}
        {CTA2 && (
          <button className="bg-black text-white rounded-full px-6 py-3 border-4 border-black transition-all ease-in hover:text-black hover:bg-white">
            {CTA2}
          </button>
        )}
      </div>
      <div className="link-container text-center">
        {url && (
          <p className="text-sm">
            Some other disclaimer{" "}
            <a
              className="underline underline-offset-2 transition-all ease-in hover:text-purple-800"
              href={url}
              target="_blank"
            >
              sign in
            </a>
          </p>
        )}
      </div>
    </div>
  );
};
