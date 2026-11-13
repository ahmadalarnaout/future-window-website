import type { Metadata } from "next";
import { PageShell } from "@/components/legal/PageShell";
import { LegalDocument } from "@/components/legal/LegalDocument";
import { refundDoc } from "@/data/legal";

export const metadata: Metadata = {
  title: "Refund and Cancellation Policy — سياسة الاسترداد والإلغاء | Future Window",
  description: "How to cancel Future Window services and request refunds, with timelines.",
  alternates: { canonical: "/refund-policy" },
};

export default function Page() {
  return (
    <PageShell activePath="/refund-policy">
      <LegalDocument doc={refundDoc} eyebrow="Legal" />
    </PageShell>
  );
}
