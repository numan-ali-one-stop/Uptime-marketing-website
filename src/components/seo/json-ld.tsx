type JsonLdProps = {
  schema: Record<string, unknown> | Record<string, unknown>[];
};

/** Renders one or more JSON-LD objects as `<script>` tags. */
function JsonLd({ schema }: JsonLdProps) {
  const schemas = Array.isArray(schema) ? schema : [schema];

  return (
    <>
      {schemas.map((item, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
    </>
  );
}

export { JsonLd };
