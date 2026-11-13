import type { Metadata } from "next";
import { PageShell } from "@/components/legal/PageShell";
import { LegalDocument } from "@/components/legal/LegalDocument";
import { termsDoc } from "@/data/legal";

export const metadata: Metadata = {
  title: "Terms of Service — شروط الخدمة | Future Window",
  description: "Terms of Service of Future Window Information Technology Company (شركة نافذة المستقبل لتقنية المعلومات), Unified National Number 7002962806.",
  alternates: { canonical: "/terms" },
};

export default function Page() {
  return (
    <PageShell activePath="/terms">
      <LegalDocument doc={termsDoc} eyebrow="Legal" />
    </PageShell>
  );
}
