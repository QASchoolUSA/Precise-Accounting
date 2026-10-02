export default function Section({ children, className = '', id, tone = 'default' }) {
    const toneClass = tone !== 'default' ? `section--${tone}` : '';
    return (
        <section id={id} className={`section ${toneClass} ${className}`.trim()}>
            {children}
        </section>
    );
}
