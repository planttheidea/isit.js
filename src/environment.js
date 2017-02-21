// environment
import * as android from './isitAndroid';
import * as androidPhone from './isitAndroidPhone';
import * as androidTablet from './isitAndroidTablet';
import * as blackberry from './isitBlackberry';
import * as blink from './isitBlink';
import * as browser from './isitBrowser';
import * as chrome from './isitChrome';
import * as edge from './isitEdge';
import * as firefox from './isitFirefox';
import * as gecko from './isitGecko';
import * as ie from './isitIe';
import * as ieVersion from './isitIeVersion';
import * as ios from './isitIos';
import * as ipad from './isitIpad';
import * as ipod from './isitIpod';
import * as iphone from './isitIphone';
import * as linux from './isitLinux';
import * as mac from './isitMac';
import * as mobile from './isitMobile';
import * as offline from './isitOffline';
import * as online from './isitOnline';
import * as opera from './isitOpera';
import * as presto from './isitPresto';
import * as safari from './isitSafari';
import * as server from './isitServer';
import * as tablet from './isitTablet';
import * as touchDevice from './isitTouchDevice';
import * as trident from './isitTrident';
import * as webkit from './isitWebkit';
import * as windows from './isitWindows';
import * as windowsPhone from './isitWindowsPhone';
import * as windowsTablet from './isitWindowsTablet';

/**
 * @module environment
 */

export const all = {
  android: android.isitAllAndroid,
  androidPhone: androidPhone.isitAllAndroidPhone,
  androidTablet: androidTablet.isitAllAndroidTablet,
  blackberry: blackberry.isitAllBlackberry,
  blink: blink.isitAllBlink,
  chrome: chrome.isitAllChrome,
  edge: edge.isitAllEdge,
  firefox: firefox.isitAllFirefox,
  gecko: gecko.isitAllGecko,
  ie: ie.isitAllIe,
  ios: ios.isitAllIos,
  ipad: ipad.isitAllIpad,
  ipod: ipod.isitAllIpod,
  iphone: iphone.isitAllIphone,
  linux: linux.isitAllLinux,
  mac: mac.isitAllMac,
  mobile: mobile.isitAllMobile,
  offline: offline.isitAllOffline,
  online: online.isitAllOnline,
  opera: opera.isitAllOpera,
  presto: presto.isitAllPresto,
  safari: safari.isitAllSafari,
  tablet: tablet.isitAllTablet,
  trident: trident.isitAllTrident,
  webkit: webkit.isitAllWebkit,
  windows: windows.isitAllWindows,
  windowsPhone: windowsPhone.isitAllWindowsPhone,
  windowsTablet: windowsTablet.isitAllWindowsTablet
};

export const any = {
  android: android.isitAnyAndroid,
  androidPhone: androidPhone.isitAnyAndroidPhone,
  androidTablet: androidTablet.isitAnyAndroidTablet,
  blackberry: blackberry.isitAnyBlackberry,
  blink: blink.isitAnyBlink,
  chrome: chrome.isitAnyChrome,
  edge: edge.isitAnyEdge,
  firefox: firefox.isitAnyFirefox,
  gecko: gecko.isitAnyGecko,
  ie: ie.isitAnyIe,
  ios: ios.isitAnyIos,
  ipad: ipad.isitAnyIpad,
  ipod: ipod.isitAnyIpod,
  iphone: iphone.isitAnyIphone,
  linux: linux.isitAnyLinux,
  mac: mac.isitAnyMac,
  mobile: mobile.isitAnyMobile,
  offline: offline.isitAnyOffline,
  online: online.isitAnyOnline,
  opera: opera.isitAnyOpera,
  presto: presto.isitAnyPresto,
  safari: safari.isitAnySafari,
  tablet: tablet.isitAnyTablet,
  trident: trident.isitAnyTrident,
  webkit: webkit.isitAnyWebkit,
  windows: windows.isitAnyWindows,
  windowsPhone: windowsPhone.isitAnyWindowsPhone,
  windowsTablet: windowsTablet.isitAnyWindowsTablet
};

export const not = {
  android: android.isitNotAndroid,
  androidPhone: androidPhone.isitNotAndroidPhone,
  androidTablet: androidTablet.isitNotAndroidTablet,
  blackberry: blackberry.isitNotBlackberry,
  blink: blink.isitNotBlink,
  browser: browser.isitNotBrowser,
  chrome: chrome.isitNotChrome,
  edge: edge.isitNotEdge,
  firefox: firefox.isitNotFirefox,
  gecko: gecko.isitNotGecko,
  ie: ie.isitNotIe,
  ieVersion: ieVersion.isitNotIeVersion,
  ios: ios.isitNotIos,
  ipad: ipad.isitNotIpad,
  ipod: ipod.isitNotIpod,
  iphone: iphone.isitNotIphone,
  linux: linux.isitNotLinux,
  mac: mac.isitNotMac,
  mobile: mobile.isitNotMobile,
  offline: offline.isitNotOffline,
  online: online.isitNotOnline,
  opera: opera.isitNotOpera,
  presto: presto.isitNotPresto,
  safari: safari.isitNotSafari,
  server: server.isitNotServer,
  tablet: tablet.isitNotTablet,
  touchDevice: touchDevice.isitNotTouchDevice,
  trident: trident.isitNotTrident,
  webkit: webkit.isitNotWebkit,
  windows: windows.isitNotWindows,
  windowsPhone: windowsPhone.isitNotWindowsPhone,
  windowsTablet: windowsTablet.isitNotWindowsTablet
};

export default {
  android: android.default,
  androidPhone: androidPhone.default,
  androidTablet: androidTablet.default,
  blackberry: blackberry.default,
  blink: blink.default,
  browser: browser.default,
  chrome: chrome.default,
  edge: edge.default,
  firefox: firefox.default,
  gecko: gecko.default,
  ie: ie.default,
  ieVersion: ieVersion.default,
  ios: ios.default,
  ipad: ipad.default,
  ipod: ipod.default,
  iphone: iphone.default,
  linux: linux.default,
  mac: mac.default,
  mobile: mobile.default,
  offline: offline.default,
  online: online.default,
  opera: opera.default,
  presto: presto.default,
  safari: safari.default,
  server: server.default,
  tablet: tablet.default,
  touchDevice: touchDevice.default,
  trident: trident.default,
  webkit: webkit.default,
  windows: windows.default,
  windowsPhone: windowsPhone.default,
  windowsTablet: windowsTablet.default
};
