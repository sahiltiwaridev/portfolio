type JsonLdProps = {
  graph: Record<string, unknown>[];
};

/** Renders one schema.org @graph. "<" is escaped so content can never close the script tag. */
export default function JsonLd({ graph }: JsonLdProps) {
  const json = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": graph,
  }).replace(/</g, "\\u003c");

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
