// environment
import * as android from '../android';
import * as androidPhone from '../androidPhone';
import * as androidTablet from '../androidTablet';
import * as blackberry from '../blackberry';
import * as blink from '../blink';
import * as browser from '../browser';
import * as chrome from '../chrome';
import * as edge from '../edge';
import * as firefox from '../firefox';
import * as gecko from '../gecko';
import * as ie from '../ie';
import * as ieVersion from '../ieVersion';
import * as ios from '../ios';
import * as ipad from '../ipad';
import * as iphone from '../iphone';
import * as ipod from '../ipod';
import * as linux from '../linux';
import * as mac from '../mac';
import * as mobile from '../mobile';
import * as offline from '../offline';
import * as online from '../online';
import * as opera from '../opera';
import * as presto from '../presto';
import * as safari from '../safari';
import * as server from '../server';
import * as tablet from '../tablet';
import * as touchDevice from '../touchDevice';
import * as trident from '../trident';
import * as webkit from '../webkit';
import * as windows from '../windows';
import * as windowsPhone from '../windowsPhone';
import * as windowsTablet from '../windowsTablet';

/**
 * @module environment
 */

export const all = {
  android: android.isAllAndroid,
  androidPhone: androidPhone.isAllAndroidPhone,
  androidTablet: androidTablet.isAllAndroidTablet,
  blackberry: blackberry.isAllBlackberry,
  blink: blink.isAllBlink,
  chrome: chrome.isAllChrome,
  edge: edge.isAllEdge,
  firefox: firefox.isAllFirefox,
  gecko: gecko.isAllGecko,
  ie: ie.isAllIe,
  ios: ios.isAllIos,
  ipad: ipad.isAllIpad,
  ipod: ipod.isAllIpod,
  iphone: iphone.isAllIphone,
  linux: linux.isAllLinux,
  mac: mac.isAllMac,
  mobile: mobile.isAllMobile,
  offline: offline.isAllOffline,
  online: online.isAllOnline,
  opera: opera.isAllOpera,
  presto: presto.isAllPresto,
  safari: safari.isAllSafari,
  tablet: tablet.isAllTablet,
  trident: trident.isAllTrident,
  webkit: webkit.isAllWebkit,
  windows: windows.isAllWindows,
  windowsPhone: windowsPhone.isAllWindowsPhone,
  windowsTablet: windowsTablet.isAllWindowsTablet
};

export const any = {
  android: android.isAnyAndroid,
  androidPhone: androidPhone.isAnyAndroidPhone,
  androidTablet: androidTablet.isAnyAndroidTablet,
  blackberry: blackberry.isAnyBlackberry,
  blink: blink.isAnyBlink,
  chrome: chrome.isAnyChrome,
  edge: edge.isAnyEdge,
  firefox: firefox.isAnyFirefox,
  gecko: gecko.isAnyGecko,
  ie: ie.isAnyIe,
  ios: ios.isAnyIos,
  ipad: ipad.isAnyIpad,
  ipod: ipod.isAnyIpod,
  iphone: iphone.isAnyIphone,
  linux: linux.isAnyLinux,
  mac: mac.isAnyMac,
  mobile: mobile.isAnyMobile,
  offline: offline.isAnyOffline,
  online: online.isAnyOnline,
  opera: opera.isAnyOpera,
  presto: presto.isAnyPresto,
  safari: safari.isAnySafari,
  tablet: tablet.isAnyTablet,
  trident: trident.isAnyTrident,
  webkit: webkit.isAnyWebkit,
  windows: windows.isAnyWindows,
  windowsPhone: windowsPhone.isAnyWindowsPhone,
  windowsTablet: windowsTablet.isAnyWindowsTablet
};

export const not = {
  android: android.isNotAndroid,
  androidPhone: androidPhone.isNotAndroidPhone,
  androidTablet: androidTablet.isNotAndroidTablet,
  blackberry: blackberry.isNotBlackberry,
  blink: blink.isNotBlink,
  browser: browser.isNotBrowser,
  chrome: chrome.isNotChrome,
  edge: edge.isNotEdge,
  firefox: firefox.isNotFirefox,
  gecko: gecko.isNotGecko,
  ie: ie.isNotIe,
  ieVersion: ieVersion.isNotIeVersion,
  ios: ios.isNotIos,
  ipad: ipad.isNotIpad,
  ipod: ipod.isNotIpod,
  iphone: iphone.isNotIphone,
  linux: linux.isNotLinux,
  mac: mac.isNotMac,
  mobile: mobile.isNotMobile,
  offline: offline.isNotOffline,
  online: online.isNotOnline,
  opera: opera.isNotOpera,
  presto: presto.isNotPresto,
  safari: safari.isNotSafari,
  server: server.isNotServer,
  tablet: tablet.isNotTablet,
  touchDevice: touchDevice.isNotTouchDevice,
  trident: trident.isNotTrident,
  webkit: webkit.isNotWebkit,
  windows: windows.isNotWindows,
  windowsPhone: windowsPhone.isNotWindowsPhone,
  windowsTablet: windowsTablet.isNotWindowsTablet
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
