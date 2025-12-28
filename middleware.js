import { NextResponse } from "next/server";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

let locales = ["en", "ru"];
export let defaultLocale = "en";

function getLocale(request) {
    const negotiatorHeaders = {};
    request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

    let languages = new Negotiator({ headers: negotiatorHeaders }).languages();
    return match(languages, locales, defaultLocale);
}

export function middleware(request) {
    // Check if there is any supported locale in the pathname
    const { pathname } = request.nextUrl;

    // Skip if path is already localized or is a public file
    if (
        pathname.startsWith(`/${defaultLocale}/`) ||
        pathname.startsWith(`/ru/`) ||
        pathname === `/${defaultLocale}` ||
        pathname === `/ru`
    ) {
        return;
    }

    // Skip API routes, static files, images, etc.
    if (
        pathname.includes('.') || // files with extensions
        pathname.startsWith('/api/') || // api routes
        pathname.startsWith('/_next/') ||
        pathname.startsWith('/monitoring')
    ) {
        return;
    }

    const locale = getLocale(request);
    const newUrl = new URL(`/${locale}${pathname === '/' ? '' : pathname}`, request.url);

    // Preserve query parameters
    newUrl.search = request.nextUrl.search;

    return NextResponse.redirect(newUrl);
}

export const config = {
    matcher: [
        // Skip all internal paths (_next)
        '/((?!_next|api|favicon.ico).*)',
        // Optional: only run on root (/)
        // '/'
    ],
};
