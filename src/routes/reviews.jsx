import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { ClientReviews } from "@/components/sections/ClientReviews";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Client Reviews — Trionyx Solutions" },
      {
        name: "description",
        content: "Read client reviews for Trionyx Solutions and share your project experience.",
      },
      { property: "og:title", content: "Client Reviews — Trionyx Solutions" },
      {
        property: "og:description",
        content: "Real feedback from businesses and clients who worked with Trionyx Solutions.",
      },
    ],
  }),
  component: ReviewsPage,
});

function ReviewsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Reviews"
        title="Client"
        highlight="reviews."
        description="Read what clients say about working with Trionyx Solutions, or submit your own review."
      />
      <ClientReviews showForm hideReviewList/>
      <CtaBanner />
    </>
  );
}
