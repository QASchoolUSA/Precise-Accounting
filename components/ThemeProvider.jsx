'use client';

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import {
    DEFAULT_THEME,
    THEME_STORAGE_KEY,
    getTheme,
    isValidTheme,
    themes,
} from '../lib/themes';

const ThemeContext = createContext({
    themeId: DEFAULT_THEME,
    theme: getTheme(DEFAULT_THEME),
    themes,
    setThemeId: () => {},
});

function applyThemeToDocument(themeId) {
    if (typeof document === 'undefined') return;
    document.documentElement.setAttribute('data-theme', themeId);
}

export function ThemeProvider({ children, defaultTheme = DEFAULT_THEME }) {
    const [themeId, setThemeIdState] = useState(defaultTheme);
    const [ready, setReady] = useState(false);

    useEffect(() => {
        let initial = defaultTheme;
        try {
            const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
            if (isValidTheme(stored)) initial = stored;
        } catch {
            // ignore storage errors
        }
        setThemeIdState(initial);
        applyThemeToDocument(initial);
        setReady(true);
    }, [defaultTheme]);

    const setThemeId = useCallback((id) => {
        if (!isValidTheme(id)) return;
        setThemeIdState(id);
        applyThemeToDocument(id);
        try {
            window.localStorage.setItem(THEME_STORAGE_KEY, id);
        } catch {
            // ignore
        }
    }, []);

    const value = useMemo(
        () => ({
            themeId,
            theme: getTheme(themeId),
            themes,
            setThemeId,
            ready,
        }),
        [themeId, setThemeId, ready]
    );

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
    return useContext(ThemeContext);
}
