'use client';

import { useEffect } from 'react';

export default function AndroidScaler() {
    useEffect(() => {
        const ua = navigator.userAgent.toLowerCase();
        const isAndroid = ua.indexOf("android") > -1;

        if (isAndroid) {
            document.documentElement.classList.add('is-android');
        }
    }, []);

    return null; // This component renders nothing
}
