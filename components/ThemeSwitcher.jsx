'use client';

import { useEffect, useId, useRef, useState } from 'react';
import { useTheme } from './ThemeProvider';

export default function ThemeSwitcher() {
    const { themeId, theme, themes, setThemeId } = useTheme();
    const [open, setOpen] = useState(false);
    const panelId = useId();
    const rootRef = useRef(null);

    useEffect(() => {
        if (!open) return undefined;
        const onPointerDown = (event) => {
            if (rootRef.current && !rootRef.current.contains(event.target)) {
                setOpen(false);
            }
        };
        const onKeyDown = (event) => {
            if (event.key === 'Escape') setOpen(false);
        };
        document.addEventListener('pointerdown', onPointerDown);
        document.addEventListener('keydown', onKeyDown);
        return () => {
            document.removeEventListener('pointerdown', onPointerDown);
            document.removeEventListener('keydown', onKeyDown);
        };
    }, [open]);

    return (
        <div className={`theme-switcher ${open ? 'is-open' : ''}`} ref={rootRef}>
            <button
                type="button"
                className="theme-switcher__toggle"
                aria-expanded={open}
                aria-controls={panelId}
                aria-label={`Design preview: ${theme.label}`}
                onClick={() => setOpen((value) => !value)}
            >
                <span className="theme-switcher__fab-mark" aria-hidden="true">Aa</span>
                <span className="theme-switcher__copy">
                    <span className="theme-switcher__eyebrow">Design preview</span>
                    <span className="theme-switcher__current">{theme.label}</span>
                </span>
            </button>

            <div id={panelId} className="theme-switcher__panel" hidden={!open}>
                <p className="theme-switcher__hint">
                    Same charcoal + emerald. Three full-site directions — pick one to preview.
                </p>
                <ul className="theme-switcher__list">
                    {themes.map((item) => {
                        const active = item.id === themeId;
                        return (
                            <li key={item.id}>
                                <button
                                    type="button"
                                    className={`theme-switcher__option ${active ? 'is-active' : ''}`}
                                    aria-pressed={active}
                                    onClick={() => {
                                        setThemeId(item.id);
                                        setOpen(false);
                                    }}
                                >
                                    <span className="theme-switcher__option-label">{item.label}</span>
                                    <span className="theme-switcher__option-note">{item.note}</span>
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}
