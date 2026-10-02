import PageHero from './PageHero';
import Section from './Section';

/**
 * Shared frame for service detail pages.
 */
export default function ServicePageShell({ title, subtitle, children, cta }) {
    return (
        <>
            <PageHero title={title} subtitle={subtitle} as="header" />
            <Section className="service-detail">
                <div className="container service-detail__body">{children}</div>
            </Section>
            {cta ? (
                <Section className="service-cta-band" tone="alt">
                    <div className="container">{cta}</div>
                </Section>
            ) : null}
        </>
    );
}
