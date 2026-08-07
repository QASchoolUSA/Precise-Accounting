'use client';

import { usePathname, useRouter } from 'next/navigation';

export default function LanguageSwitcher() {
    const pathname = usePathname();
    const router = useRouter();
    const segment = pathname?.split('/')[1];
    const currentLang = segment === 'en' || segment === 'ru' ? segment : 'en';

    const switchLanguage = (lang) => {
        if (!pathname) return;

        const segments = pathname.split('/');
        // segments[0] is empty string because path starts with /
        // segments[1] is the locale ('en' or 'ru')

        if (segments[1] === 'en' || segments[1] === 'ru') {
            segments[1] = lang;
        } else {
            // If for some reason locale is missing (shouldn't happen with middleware), prepend it
            segments.splice(1, 0, lang);
        }

        const newPath = segments.join('/');
        router.push(newPath);
    };

    return (
        <div className="language-switcher">
            <button
                className={`lang-btn ${currentLang === 'en' ? 'active' : ''}`}
                onClick={() => switchLanguage('en')}
            >
                EN
            </button>
            <span className="divider">|</span>
            <button
                className={`lang-btn ${currentLang === 'ru' ? 'active' : ''}`}
                onClick={() => switchLanguage('ru')}
            >
                RU
            </button>
        </div>
    );
}
