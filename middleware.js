import { NextResponse } from "next/server";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

let locales = ["en", "ru"];
export let defaultLocale = "en";

const METADATA_PATHS = new Set([
    "/icon",
    "/apple-icon",
    "/opengraph-image",
    "/twitter-image",
    "/robots.txt",
    "/sitemap.xml",
    "/llms.txt",
    "/manifest.webmanifest",
    "/favicon.ico",
]);

function getLocale(request) {
    const negotiatorHeaders = {};
    request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

    let languages = new Negotiator({ headers: negotiatorHeaders }).languages();
    // Negotiator can return "*" when Accept-Language is missing/wildcard;
    // Intl.match throws on "*", so fall back to default.
    const safeLanguages = languages.filter((lang) => lang && lang !== "*");
    if (safeLanguages.length === 0) {
        return defaultLocale;
    }
    return match(safeLanguages, locales, defaultLocale);
}

export function middleware(request) {
    const { pathname } = request.nextUrl;
    const barePath = pathname.replace(/\/$/, "") || "/";

    // Already localized
    if (
        pathname.startsWith(`/${defaultLocale}/`) ||
        pathname.startsWith(`/ru/`) ||
        pathname === `/${defaultLocale}` ||
        pathname === `/ru`
    ) {
        return;
    }

    // Skip API, Next internals, static files, and App Router metadata routes
    if (
        pathname.includes(".") ||
        pathname.startsWith("/api/") ||
        pathname.startsWith("/_next/") ||
        pathname.startsWith("/monitoring") ||
        METADATA_PATHS.has(barePath) ||
        METADATA_PATHS.has(pathname)
    ) {
        return;
    }

    const locale = getLocale(request);
    const newUrl = new URL(`/${locale}${pathname === "/" ? "" : pathname}`, request.url);
    newUrl.search = request.nextUrl.search;

    return NextResponse.redirect(newUrl);
}

export const config = {
    matcher: [
        "/((?!_next|api|favicon.ico|icon|apple-icon|opengraph-image|twitter-image|robots.txt|sitemap.xml|llms.txt).*)",
    ],
};
