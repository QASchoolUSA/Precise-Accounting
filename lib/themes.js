export const THEME_STORAGE_KEY = 'pa-design-theme';
export const DEFAULT_THEME = 'ledger';

/** @typedef {{ id: string, label: string, note: string }} ThemeDefinition */

/** @type {ThemeDefinition[]} */
export const themes = [
    {
        id: 'ledger',
        label: 'Ledger',
        note: 'Precision editorial — calm authority',
    },
    {
        id: 'cornerstone',
        label: 'Cornerstone',
        note: 'Institutional trust — solid & structured',
    },
    {
        id: 'harbor',
        label: 'Harbor',
        note: 'Local-professional — grounded & warm',
    },
];

export const themeIds = themes.map((t) => t.id);

export function isValidTheme(id) {
    return themeIds.includes(id);
}

export function getTheme(id) {
    return themes.find((t) => t.id === id) || themes[0];
}
