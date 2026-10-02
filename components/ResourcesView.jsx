'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function ResourcesView({ lang, dict, initialCategory = 'all', articles = [] }) {
    const [selectedCategory, setSelectedCategory] = useState(initialCategory);
    const [expandedArticleId, setExpandedArticleId] = useState(null);
    const [copiedSlug, setCopiedSlug] = useState(null);

    // Sync with hash on client load or hash change
    useEffect(() => {
        const handleHashChange = () => {
            if (typeof window === 'undefined') return;
            const hash = window.location.hash.replace('#', '');
            if (hash) {
                const matched = articles.find(a => a.slug === hash || a.id === hash);
                if (matched) {
                    setExpandedArticleId(matched.id);
                    setSelectedCategory('all');
                    setTimeout(() => {
                        const el = document.getElementById(hash);
                        if (el) {
                            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                    }, 100);
                }
            }
        };

        const timer = setTimeout(handleHashChange, 0);
        window.addEventListener('hashchange', handleHashChange);
        return () => {
            clearTimeout(timer);
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, [articles]);

    const toggleExpand = (id, slug) => {
        if (expandedArticleId === id) {
            setExpandedArticleId(null);
            if (typeof window !== 'undefined' && window.location.hash) {
                history.replaceState(null, '', window.location.pathname + window.location.search);
            }
        } else {
            setExpandedArticleId(id);
            if (typeof window !== 'undefined') {
                history.replaceState(null, '', `#${slug}`);
            }
        }
    };

    const handleCopyLink = (e, slug) => {
        e.stopPropagation();
        if (typeof window !== 'undefined') {
            const url = `${window.location.origin}/${lang}/resources#${slug}`;
            navigator.clipboard.writeText(url).then(() => {
                setCopiedSlug(slug);
                setTimeout(() => setCopiedSlug(null), 2500);
            });
        }
    };

    const categories = [
        { id: 'all', label: dict.all || 'All' },
        { id: 'tax-news', label: dict.taxNews || 'Tax News' },
        { id: 'insights', label: dict.insights || 'Insights' },
        { id: 'guides', label: dict.guides || 'Guides' },
    ];

    const filteredArticles = selectedCategory === 'all'
        ? articles
        : articles.filter(a => a.category === selectedCategory);

    const getCategoryBadgeClass = (category) => {
        switch (category) {
            case 'tax-news': return 'badge-tax-news';
            case 'insights': return 'badge-insights';
            case 'guides': return 'badge-guides';
            default: return 'badge-default';
        }
    };

    const getCategoryLabel = (catId) => {
        const found = categories.find(c => c.id === catId);
        return found ? found.label : catId;
    };

    return (
        <div className="resources-container">
            {/* Category Filter Pills */}
            <div className="resources-filter-bar">
                {categories.map((cat) => (
                    <button
                        key={cat.id}
                        type="button"
                        className={`filter-pill ${selectedCategory === cat.id ? 'active' : ''}`}
                        onClick={() => {
                            setSelectedCategory(cat.id);
                        }}
                    >
                        {cat.label}
                    </button>
                ))}
            </div>

            {/* Articles Accordion List */}
            <div className="resources-list">
                {filteredArticles.map((article) => {
                    const isExpanded = expandedArticleId === article.id;
                    const contentObj = article[lang] || article.en;
                    const categoryLabel = getCategoryLabel(article.category);
                    const readTime = article.readTime?.[lang] || article.readTime?.en || '';
                    const sourceText = article.source?.[lang] || article.source?.en || '';

                    return (
                        <article
                            key={article.id}
                            id={article.slug}
                            className={`article-card ${isExpanded ? 'expanded' : ''}`}
                        >
                            {/* Card Header / Summary Trigger */}
                            <div
                                className="article-header"
                                onClick={() => toggleExpand(article.id, article.slug)}
                                role="button"
                                tabIndex={0}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' || e.key === ' ') {
                                        e.preventDefault();
                                        toggleExpand(article.id, article.slug);
                                    }
                                }}
                            >
                                <div className="article-meta">
                                    <span className={`category-badge ${getCategoryBadgeClass(article.category)}`}>
                                        {categoryLabel}
                                    </span>
                                    {readTime && (
                                        <span className="read-time">
                                            ⏱ {readTime}
                                        </span>
                                    )}
                                    <button
                                        type="button"
                                        className="share-btn"
                                        title={dict.shareLink || 'Copy Link'}
                                        onClick={(e) => handleCopyLink(e, article.slug)}
                                    >
                                        {copiedSlug === article.slug ? (
                                            <span style={{ color: 'var(--color-accent)', fontWeight: 600 }}>✓ {dict.linkCopied || 'Copied!'}</span>
                                        ) : (
                                            <span>🔗 {dict.shareLink || 'Share'}</span>
                                        )}
                                    </button>
                                </div>

                                <h2 className="article-title">{contentObj.title}</h2>
                                <p className="article-summary">{contentObj.summary}</p>

                                <div className="article-action-row">
                                    <span className="expand-cta">
                                        {isExpanded ? (dict.collapseArticle || 'Collapse Article') : (dict.readArticle || 'Read Article')}
                                        <span className={`expand-icon ${isExpanded ? 'rotated' : ''}`}>▾</span>
                                    </span>
                                </div>
                            </div>

                            {/* Expandable Full Article Content */}
                            {isExpanded && (
                                <div className="article-body">
                                    <div className="article-content-wrapper">
                                        {contentObj.sections.map((section, idx) => {
                                            if (section.type === 'heading') {
                                                return <h3 key={idx} className="article-subheading">{section.text}</h3>;
                                            }
                                            if (section.type === 'subheading') {
                                                return <h4 key={idx} className="article-minorheading">{section.text}</h4>;
                                            }
                                            if (section.type === 'paragraph') {
                                                return <p key={idx} className="article-paragraph">{section.text}</p>;
                                            }
                                            if (section.type === 'callout') {
                                                return (
                                                    <div key={idx} className="article-callout">
                                                        <div className="callout-accent-bar"></div>
                                                        <div className="callout-body">{section.text}</div>
                                                    </div>
                                                );
                                            }
                                            if (section.type === 'list') {
                                                return (
                                                    <ul key={idx} className="article-list">
                                                        {section.items.map((item, itemIdx) => (
                                                            <li key={itemIdx}>{item}</li>
                                                        ))}
                                                    </ul>
                                                );
                                            }
                                            return null;
                                        })}

                                        {sourceText && (
                                            <div className="article-source-footer">
                                                <strong>{dict.source || 'Source'}:</strong> {sourceText}
                                            </div>
                                        )}

                                        <div className="article-bottom-actions">
                                            <button
                                                type="button"
                                                className="btn btn-secondary-dark"
                                                onClick={() => toggleExpand(article.id, article.slug)}
                                            >
                                                {dict.collapseArticle || 'Collapse Article'} ↑
                                            </button>
                                            <Link href={`/${lang}/pricing`} className="btn btn-primary">
                                                {dict.getEstimate || 'Get a Price Estimate'} →
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </article>
                    );
                })}
            </div>
        </div>
    );
}
