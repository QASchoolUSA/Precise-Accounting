/**
 * Renders one or more Schema.org JSON-LD blocks.
 * @param {{ data: object | object[] }} props
 */
export default function JsonLd({ data }) {
    const items = Array.isArray(data) ? data : [data];

    return (
        <>
            {items.map((item, index) => (
                <script
                    key={item['@id'] || item['@type'] || index}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
                />
            ))}
        </>
    );
}
