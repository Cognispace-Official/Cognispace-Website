import { ContactForm } from '@/components/contact-form'
import { FeatureCard } from '@/components/feature-card'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { Starfield } from '@/components/starfield'

function SectionLabel({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2
      id={id}
      className="flex scroll-mt-6 items-center gap-3 pt-6 text-[0.65rem] font-bold uppercase tracking-[0.3em] text-muted-foreground first:pt-0"
    >
      {children}
      <span className="h-px flex-1 bg-border" aria-hidden="true" />
    </h2>
  )
}

export default function Page() {
  return (
    <>
      <Starfield />
      <SiteHeader />

      <main className="mx-auto flex w-full max-w-3xl flex-col gap-3 px-4 py-10">
        <SectionLabel id="product">Product</SectionLabel>
        <FeatureCard
          image="/images/immersive.png"
          kicker="01"
          title="Immersive"
          tagline="Experiences you step inside."
          description="At Cognispace, we specialize in developing immersive AR and VR experiences for our audience."
        />
        <FeatureCard
          image="/images/easy.png"
          kicker="02"
          title="Easy"
          tagline="No technical expertise required."
          description="Our technology is user-friendly. You can easily control your experience without any technical expertise thanks to our intuitive interfaces."
        />

        <SectionLabel id="about">About Cognispace</SectionLabel>
        <FeatureCard
          image="/images/vision.png"
          title="Vision"
          tagline="The transformative power of AR and VR."
          description="Cognispace believes in the transformative power of Augmented and Virtual Reality in gaming. We are dedicated to providing immersive AR/VR experiences to the world."
        />
        <FeatureCard
          image="/images/technology.png"
          title="Technology"
          tagline="Tailor-made, from apps to animation."
          description="Cognispace works closely with our users to understand their unique requirements and deliver tailor-made products for their specific needs, ranging from AR/VR app development to 3D modelling and animation."
        />

        <SectionLabel id="team">Meet the Team</SectionLabel>
        <FeatureCard
          image="/images/team.png"
          imageAlt="Pixel art portrait of a game developer"
          kicker="Head of Cognispace"
          title="Temidayo Egwuenu"
          tagline="Sydney-based computer programmer."
          description="Temidayo studied Computer Science (Game Design and Development) and currently works as a Sydney-based computer programmer, leading Cognispace."
        />

        <SectionLabel id="portfolio">Portfolio</SectionLabel>
        <FeatureCard
          image="/images/aim-game.png"
          kicker="Featured"
          title="Aim Game"
          badge="Demo"
          tagline="A Cognispace game, ready to play."
          description="The latest title from our portfolio. Want to try the demo? Get in touch below and we will send it your way."
        />

        <SectionLabel id="contact">Contact</SectionLabel>
        <FeatureCard
          image="/images/contact.png"
          title="Get in touch"
          tagline="Tell us what you want to build."
          description="Have a project in mind or want to try the demo? Send us a note and we will get back to you shortly."
          className="hover:bg-card"
        >
          <ContactForm />
        </FeatureCard>
      </main>

      <SiteFooter />
    </>
  )
}
