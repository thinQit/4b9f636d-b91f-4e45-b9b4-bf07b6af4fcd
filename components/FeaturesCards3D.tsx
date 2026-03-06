"use client";
import { CardContainer, CardBody, CardItem } from "@/components/ui/effects/3d-card-effect";

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface FeaturesCards3DProps {
  badge?: string;
  title?: string;
  subtitle?: string;
  headline?: string;
  subheadline?: string;
  features: Feature[];
}

export default function FeaturesCards3D({
  badge = 'Why Shop With Us',
  // Accept both title/headline and subtitle/subheadline props for compatibility
  title,
  headline,
  subtitle,
  subheadline,
  features = [],
}: Partial<FeaturesCards3DProps>) {
  const resolvedTitle = title ?? headline ?? "Built for Better Online Shopping";
  const resolvedSubtitle =
    subtitle ?? subheadline ?? "From quality checks to fast shipping, every detail is optimized for your confidence.";
  return (
    <section className="bg-muted/50 py-20 md:py-28">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          {badge && <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">{badge}</span>}
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">{resolvedTitle}</h2>
          {resolvedSubtitle && <p className="mt-4 text-lg text-muted-foreground">{resolvedSubtitle}</p>}
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map(function (feature, index) {
            return (
              <CardContainer key={index} className="inter-var">
                <CardBody className="group/card relative h-auto w-auto rounded-xl border border-black/[0.1] bg-background p-6 dark:border-white/[0.2] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]">
                  <CardItem translateZ="50" className="mb-4 text-3xl">
                    {feature.icon}
                  </CardItem>
                  <CardItem translateZ="60" className="text-xl font-bold text-foreground">
                    {feature.title}
                  </CardItem>
                  <CardItem as="p" translateZ="40" className="mt-2 text-sm text-muted-foreground">
                    {feature.description}
                  </CardItem>
                </CardBody>
              </CardContainer>
            );
          })}
        </div>
      </div>
    </section>
  );
}
