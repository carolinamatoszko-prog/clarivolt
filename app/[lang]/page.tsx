import { notFound } from "next/navigation";
import { Anticipation } from "@/components/Anticipation";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import { PageShell } from "@/components/ui";
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { getDictionary } from "@/content/dictionaries";
import { hasLocale } from "@/content/locales";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const dict = await getDictionary(lang);

  return (
    <PageShell
      header={<SiteHeader lang={lang} />}
      footer={<Footer dict={dict.footer} lang={lang} />}
    >
      <Hero dict={dict.hero} />
      <Problem dict={dict.problem} />
      <Anticipation dict={dict.anticipation} />
      <FinalCta dict={dict.finalCta} form={dict.form} lang={lang} />
    </PageShell>
  );
}
