import Image from 'next/image'
import { cn } from '@/lib/utils'

type FeatureCardProps = {
  image: string
  imageAlt?: string
  title: string
  kicker?: string
  tagline: string
  description: string
  badge?: string
  href?: string
  children?: React.ReactNode
  className?: string
}

export function FeatureCard({
  image,
  imageAlt = '',
  title,
  kicker,
  tagline,
  description,
  badge,
  href,
  children,
  className,
}: FeatureCardProps) {
  const body = (
    <div className="flex flex-col gap-4 p-4 sm:flex-row sm:items-center sm:gap-5">
      <div className="relative size-24 shrink-0 self-center sm:size-[7.25rem]">
        <Image
          src={image || '/placeholder.svg'}
          alt={imageAlt}
          fill
          sizes="116px"
          className="object-contain mix-blend-screen transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex min-w-0 flex-1 flex-col gap-1 text-pretty">
        {kicker && (
          <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-primary">{kicker}</p>
        )}
        <h3 className="flex items-baseline gap-2 text-base font-bold tracking-wide text-foreground">
          {title}
          {badge && (
            <span className="text-[0.6rem] font-normal uppercase tracking-[0.25em] text-muted-foreground">
              {badge}
            </span>
          )}
        </h3>
        <p className="text-[0.8rem] text-muted-foreground">{tagline}</p>
        <p className="mt-2 text-[0.8rem] leading-relaxed text-foreground/75">{description}</p>
        {children}
      </div>
    </div>
  )

  const shell = cn(
    'group block rounded-lg border border-border bg-card backdrop-blur-[2px] transition-colors duration-200',
    'hover:border-primary/40 hover:bg-[rgb(34_29_48/0.8)] hover:shadow-[0_0_24px_-8px_rgb(94_228_245/0.35)]',
    className,
  )

  if (href) {
    return (
      <a href={href} className={cn(shell, 'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary')}>
        {body}
      </a>
    )
  }

  return <article className={shell}>{body}</article>
}
