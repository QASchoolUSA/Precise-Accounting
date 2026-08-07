const SCRIPT_ID = 'recaptcha-v3-script';

function getSiteKey() {
    return process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || '';
}

/**
 * Load Google reCAPTCHA v3 (standard) and resolve when ready.
 * Matches server verification via https://www.google.com/recaptcha/api/siteverify
 */
export function loadRecaptcha() {
    const siteKey = getSiteKey();
    if (!siteKey) {
        return Promise.reject(new Error('NEXT_PUBLIC_RECAPTCHA_SITE_KEY is not configured'));
    }

    if (typeof window === 'undefined') {
        return Promise.reject(new Error('reCAPTCHA can only run in the browser'));
    }

    if (window.grecaptcha?.ready) {
        return new Promise((resolve) => {
            window.grecaptcha.ready(() => resolve(window.grecaptcha));
        });
    }

    const existing = document.getElementById(SCRIPT_ID);
    if (existing) {
        return new Promise((resolve, reject) => {
            const start = Date.now();
            const poll = () => {
                if (window.grecaptcha?.ready) {
                    window.grecaptcha.ready(() => resolve(window.grecaptcha));
                    return;
                }
                if (Date.now() - start > 15000) {
                    reject(new Error('Timed out waiting for reCAPTCHA'));
                    return;
                }
                requestAnimationFrame(poll);
            };
            poll();
        });
    }

    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.id = SCRIPT_ID;
        script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
        script.async = true;
        script.defer = true;
        script.onload = () => {
            if (!window.grecaptcha?.ready) {
                reject(new Error('reCAPTCHA script loaded but grecaptcha is unavailable'));
                return;
            }
            window.grecaptcha.ready(() => resolve(window.grecaptcha));
        };
        script.onerror = () => reject(new Error('Failed to load reCAPTCHA script'));
        document.head.appendChild(script);
    });
}

/**
 * Execute reCAPTCHA v3 and return a token for server verification.
 * @param {string} [action='submit']
 * @returns {Promise<string>}
 */
export async function getRecaptchaToken(action = 'submit') {
    const siteKey = getSiteKey();
    if (!siteKey) {
        throw new Error('NEXT_PUBLIC_RECAPTCHA_SITE_KEY is not configured');
    }

    const grecaptcha = await loadRecaptcha();
    const token = await grecaptcha.execute(siteKey, { action });
    if (!token) {
        throw new Error('reCAPTCHA returned an empty token');
    }
    return token;
}
