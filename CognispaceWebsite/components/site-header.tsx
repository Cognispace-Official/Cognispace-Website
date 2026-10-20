import Image from 'next/image'
import { Gamepad2, Mail } from 'lucide-react'

const pillClass =
  'inline-flex items-center gap-2 rounded-full border border-accent/40 bg-[rgb(40_32_64/0.7)] px-4 py-1.5 text-[0.8rem] font-bold text-foreground/85 shadow-[inset_0_1px_0_rgb(255_255_255/0.06)] transition-colors hover:border-primary/60 hover:text-primary'

export function SiteHeader() {
  return (
    <header className="flex flex-col items-center gap-5 px-4 pt-16 text-center sm:pt-12">
      <nav aria-label="Quick links" className="fixed right-3 top-3 z-20 flex gap-2 sm:right-4 sm:top-4">
        <a href="#portfolio" className={pillClass}>
          <Gamepad2 className="size-4" aria-hidden="true" />
          Demo
        </a>
        <a href="#contact" className={pillClass}>
          <Mail className="size-4" aria-hidden="true" />
          Contact
        </a>
      </nav>

      <h1 className="relative w-full max-w-[22rem] sm:max-w-sm">
        <span className="sr-only">Cognispace</span>
        <span
          aria-hidden="true"
          className="absolute inset-x-6 inset-y-4 -z-10 rounded-full bg-primary/15 blur-3xl"
        />
        <Image
          src="/images/logo.png"
          alt=""
          width={1408}
          height={768}
          priority
          className="h-auto w-full mix-blend-screen"
        />
      </h1>

      <p className="-mt-6 flex flex-wrap items-baseline justify-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
        <span>
          <strong className="text-base font-bold text-foreground">AR</strong> augmented
        </span>
        <span>
          <strong className="text-base font-bold text-foreground">VR</strong> virtual
        </span>
        <span>
          <strong className="text-base font-bold text-foreground">3D</strong> modelling
        </span>
      </p>

      <a
        href="#portfolio"
        className="flex items-center gap-3 rounded-lg border border-primary/40 bg-[rgb(20_30_40/0.6)] px-4 py-2 text-left transition-colors hover:border-primary/70"
      >
        <Gamepad2 className="size-5 text-primary" aria-hidden="true" />
        <span className="flex flex-col">
          <span className="text-[0.6rem] font-bold uppercase tracking-[0.2em] text-primary">
            Forge ahead with AR and VR
          </span>
          <span className="text-sm font-bold text-foreground">Aim Game — play the demo</span>
        </span>
        <span className="pulse-dot ml-1 size-2 rounded-full bg-primary" aria-hidden="true" />
      </a>
    </header>
  )
}
