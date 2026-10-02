export default function PageHero({ title, subtitle, children, as: Tag = 'section', className = '' }) {
    return (
        <Tag className={`page-header ${className}`.trim()}>
            <div className="container page-header__inner">
                <h1 className="page-title">{title}</h1>
                {subtitle ? <p className="page-subtitle">{subtitle}</p> : null}
                {children}
            </div>
        </Tag>
    );
}
