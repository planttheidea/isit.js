export const HAS_WINDOW = typeof window !== 'undefined';
export const NAVIGATOR = HAS_WINDOW ? window.navigator : {};
export const NAVIGATOR_IN_WINDOW = HAS_WINDOW && 'navigator' in window;

/**
 * @private
 *
 * @function getNavigatorPropertyIfExists
 *
 * @description
 * Returns property from navigator object exists, else returns false
 *
 * @param {string} property
 * @returns {boolean|string}
 */
export const getNavigatorPropertyIfExists = (property) => {
  return NAVIGATOR_IN_WINDOW && property in navigator && navigator[property].toLowerCase();
};

export const USER_AGENT = getNavigatorPropertyIfExists('userAgent');
export const VENDOR = getNavigatorPropertyIfExists('vendor');
export const APP_VERSION = getNavigatorPropertyIfExists('appVersion');
export const ANDROID_REGEXP = /android/i;
export const APPLE_COMPUTER_REGEXP = /apple computer/i;
export const APPLE_WEBKIT_REGEXP = /applewebkit/i;
export const BB10_REGEXP = /BB10/i;
export const BLACKBERRY_REGEXP = /blackberry/i;
export const CHROME_REGEXP = /chrome/i;
export const CHROME_OR_CHROMIUM_REGEXP = /chrome|chromium/i;
export const EDGE_REGEXP = /edge/i;
export const FIREFOX_REGEXP = /firefox/i;
export const GECKO_REGEXP = /gecko/i;
export const GOOGLE_INC_REGEXP = /google inc/i;
export const IPAD_REGEXP = /ipad/i;
export const IPHONE_REGEXP = /iphone/i;
export const IPOD_REGEXP = /ipod/i;
export const LIKE_GECKO_REGEXP = /like gecko/i;
export const LINUX_REGEXP = /linux/i;
export const MAC_REGEXP = /mac/i;
export const MOBILE_REGEXP = /mobile/i;
export const MSIE_REGEXP = /msie/i;
export const OPERA_LEGACY_REGEXP = /^Opera\//;
export const OPERA_MODERN_REGEXP = /\x20OPR\//;
export const PHONE_REGEXP = /phone/i;
export const RV11_REGEXP = /rv:11/;
export const SAFARI_REGEXP = /safari/i;
export const TOUCH_REGEXP = /touch/i;
export const TRIDENT_REGEXP = /trident/i;
export const UNIX_REGEXP = /X11/;
export const WIN_REGEXP = /win/i;
export const WINDOWS_NT_REGEXP = /windows nt/i;
export const WINDOWS_MOBILE_REGEXP = /WM/;
