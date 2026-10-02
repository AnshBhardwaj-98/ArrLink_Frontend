/** Inline JSON-LD; rendered server-side by the prerender step so crawlers see it without JS. */
const JsonLd = ({ data }: { data: object }) => (
  <script
    type="application/ld+json"
    // "<" is escaped so content can never close the script tag early.
    dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
  />
);

export default JsonLd;
