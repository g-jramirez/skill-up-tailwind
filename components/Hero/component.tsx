import classNames from "classnames";
import * as React from "react";

export interface IHeroProps {
  leftAligned?: boolean;
  className?: string;
}

export function Hero({ leftAligned, className = "" }: IHeroProps) {
  const heroContentClasses = classNames(
    "hero__content relative grid gap-6 content-center justify-items-center",
    {
      "hero__content--left-aligned text-left": leftAligned,
    },
    className
  );
  return (
    <>
      <div className="hero__wrapper grid justify-center py-12 px-0">
        <div className={heroContentClasses}>
          <div className="headings block text-center justify-items-center content-center relative">
            <div className="eyebrow">
              <span>Eyebrow</span>
            </div>
            <h1 className="headline max-w-5xl mb-4 mt-0 text-4xl font-bold xl:text-7xl xl:mt-6">
              Headline
            </h1>
            <h1 className="headline-secondary max-w-5xl mb-4 mt-0 text-4xl font-bold xl:text-7xl xl:mt-6">
              Headline2
            </h1>
            <div className="subheading mb-5 text-base md:mb-9 md:max-w-3xl md:tracking-normal md:text-xl md:font-normal">
              Subheading
            </div>
          </div>
        </div>
      </div>
      <style jsx global>{`
        .hero {
          &__wrapper {
            grid-template-columns: [left-gutter] 1fr [content] 12fr [right-gutter] 1fr;
          }

          &__content {
            grid-column: content;

            &--left-aligned {
              @apply md:grid;
              grid-template-columns: [left-content] 7fr [center] 1fr [right-content] 5fr;

              .headings {
                @apply justify-items-start text-left;
                grid-column: left-content;
              }
            }
          }
        }
      `}</style>
    </>
  );
}
