"use client"

import type { ReactNode } from "react"

interface MarketingHeroBadge {
  label: string
}

interface MarketingHeroProps {
  eyebrow: string
  title: string
  highlight: string
  subtitle: string
  badges?: MarketingHeroBadge[]
  actions: ReactNode
}

export function MarketingHero({
  eyebrow,
  title,
  highlight,
  subtitle,
  badges = [],
  actions,
}: MarketingHeroProps) {
  return (
    <section className="bg-primary pt-24 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center min-h-[70vh]">
        <div className="text-center max-w-3xl mx-auto text-primary-foreground">
          {/* <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/30 bg-white/10 text-sm font-medium mb-6 shadow-sm text-primary-foreground">
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/20 text-[10px] font-semibold">
              ★
            </span>
            <span>{eyebrow}</span>
          </div> */}

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight sm:leading-[1.1] mb-4">
            {title}
            <br />
            <span className="font-semibold">{highlight}</span>
          </h1>

          <p className="text-base sm:text-lg text-primary-foreground/80 mb-10 leading-relaxed max-w-2xl mx-auto">
            {subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            {actions}
          </div>

          {badges.length > 0 && (
            <div className="flex flex-wrap items-center justify-center gap-8 text-xs sm:text-sm text-primary-foreground/80">
              {badges.map((badge) => (
                <div key={badge.label} className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-white" />
                  {badge.label}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
