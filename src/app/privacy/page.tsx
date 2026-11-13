import type { Metadata } from "next";
import { PageShell } from "@/components/legal/PageShell";
import { LegalDocument } from "@/components/legal/LegalDocument";
import { privacyDoc } from "@/data/legal";

export const metadata: Metadata = {
  title: "Privacy Policy — سياسة الخصوصية | Future Window",
  description: "How Future Window collects, uses and protects personal data under the Saudi PDPL.",
  alternates: { canonical: "/privacy" },
};

export default function Page() {
  return (
    <PageShell activePath="/privacy">
      <LegalDocument doc={privacyDoc} eyebrow="Legal" />
    </PageShell>
  );
}
