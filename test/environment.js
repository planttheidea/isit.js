// test
import test from 'ava';
import {
  isAllAnyNot,
  isNotOnly
} from './_utils/functionPermutations';
import sinon from 'sinon';

// src
import src, {
  all,
  any,
  not
} from 'src/environment';
import * as androidPhone from 'src/isitAndroidPhone';
import * as androidTablet from 'src/isitAndroidTablet';
import * as ipad from 'src/isitIpad';
import * as ipod from 'src/isitIpod';
import * as iphone from 'src/isitIphone';
import * as windowsPhone from 'src/isitWindowsPhone';
import * as windowsTablet from 'src/isitWindowsTablet';

const createFakeNavigator = (userAgent = null, appVersion = null, vendor = null) => {
  return {
    appVersion,
    userAgent,
    vendor
  };
};

const ANDROID_MOBILE_USER_AGENT = 'Mozilla/5.0 (Linux; U; Android 4.0.3; ko-kr; LG-L160L Build/IML74K) AppleWebkit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30';
const ANDROID_TABLET_USER_AGENT = 'Mozilla/5.0 (Linux; U; Android 4.0.3; ko-kr; LG-L160L Build/IML74K) AppleWebkit/534.30 (KHTML, like Gecko) Version/4.0 Safari/534.30';
const BLACKBERRY_9900_USER_AGENT = 'Mozilla/5.0 (BlackBerry; U; BlackBerry 9900; en) AppleWebKit/534.11+ (KHTML, like Gecko) Version/7.1.0.346 Mobile Safari/534.11+';
const BB10_USER_AGENT = 'Mozilla/5.0 (BB10; Touch) AppleWebKit/537.35+ (KHTML, like Gecko) Version/10.2.1.2141 Mobile Safari/537.35+';
const CHROME_USER_AGENT = 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36';
const EDGE_DESKTOP_USER_AGENT = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.246';
const EDGE_TABLET_USER_AGENT = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.246; Touch';
const FIREFOX_USER_AGENT = 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:40.0) Gecko/20100101 Firefox/40.1';
const IE_11_USER_AGENT = 'Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; AS; rv:11.0) like Gecko';
const IE_10_USER_AGENT = 'Mozilla/5.0 (compatible; MSIE 10.6; Windows NT 6.1; Trident/5.0; InfoPath.2; SLCC1; .NET CLR 3.0.4506.2152; .NET CLR 3.5.30729; .NET CLR 2.0.50727) 3gpp-gba UNTRUSTED/1.0';
const IE_9_USER_AGENT = 'Mozilla/5.0 (Windows; U; MSIE 9.0; WIndows NT 9.0; en-US))';
const IPAD_USER_AGENT = 'Mozilla/5.0 (iPad; CPU OS 7_0 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) CriOS/30.0.1599.12 Mobile/11A465 Safari/8536.25 (3B92C18B-D9DE-4CB7-A02A-22FD2AF17C8F)';
const IPHONE_USER_AGENT = 'Mozilla/5.0 (iPhone; CPU iPhone OS 6_1_4 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10B350 Safari/8536.25';
const IPOD_USER_AGENT = 'Mozilla/5.0 (iPod touch; CPU iPhone OS 7_0_3 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) Version/7.0 Mobile/11B511 Safari/9537.53';
const MODERN_OPERA_USER_AGENT = 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/28.0.1500.52 Safari/537.36 OPR/15.0.1147.100';
const LEGACY_OPERA_USER_AGENT = 'Opera/9.80 (X11; Linux i686; Ubuntu/14.10) Presto/2.12.388 Version/12.16';
const SAFARI_USER_AGENT = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit/537.75.14 (KHTML, like Gecko) Version/7.0.3 Safari/7046A194A';
const WINDOWS_PHONE_10_USER_AGENT = 'Mozilla/5.0 (WM 10.0; Android 4.0.3; ko-kr; LG-L160L Build/IML74K) AppleWebKit/534.30 (KHTML, like Gecko) Chrome/<42.0.2311.135 Mobile Safari/534.30 Edge/12.246; Touch';
const WINDOWS_PHONE_8_USER_AGENT = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows Phone 8.0; Trident/6.0; IEMobile/10.0; ARM; Touch; NOKIA; Lumia 920)';
const WINDOWS_PHONE_7_USER_AGENT = 'Mozilla/4.0 (compatible; MSIE 7.0; Windows Phone OS 7.0; Trident/3.1; IEMobile/7.0; LG; GW910)';

const LINUX_APP_VERSION = '5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.110 Safari/537.36';
const MAC_APP_VERSION = '5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.110 Safari/537.36';
const WINDOWS_APP_VERSION = '5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.110 Safari/537.36';

const APPLE_VENDOR = 'Apple Computer';
const GOOGLE_VENDOR = 'Google Inc';

test('if android identifies the android user agent correctly', (t) => {
  const goodPhoneNavigator = createFakeNavigator(ANDROID_MOBILE_USER_AGENT);
  const goodTabletNavigator = createFakeNavigator(ANDROID_TABLET_USER_AGENT);
  const badNavigator = createFakeNavigator(BB10_USER_AGENT);

  t.true(src.android(goodPhoneNavigator));
  t.true(src.android(goodTabletNavigator));
  t.false(src.android(badNavigator));
});

isAllAnyNot(all, any, not, 'android');

test('if androidPhone identifies the android user agent correctly', (t) => {
  const goodPhoneNavigator = createFakeNavigator(ANDROID_MOBILE_USER_AGENT);
  const badTabletNavigator = createFakeNavigator(ANDROID_TABLET_USER_AGENT);
  const badNavigator = createFakeNavigator(BB10_USER_AGENT);

  t.true(src.androidPhone(goodPhoneNavigator));
  t.false(src.androidPhone(badTabletNavigator));
  t.false(src.androidPhone(badNavigator));
});

isAllAnyNot(all, any, not, 'androidPhone');

test('if androidTablet identifies the android user agent correctly', (t) => {
  const badPhoneNavigator = createFakeNavigator(ANDROID_MOBILE_USER_AGENT);
  const goodTabletNavigator = createFakeNavigator(ANDROID_TABLET_USER_AGENT);
  const badNavigator = createFakeNavigator(BB10_USER_AGENT);

  t.false(src.androidTablet(badPhoneNavigator));
  t.true(src.androidTablet(goodTabletNavigator));
  t.false(src.androidTablet(badNavigator));
});

isAllAnyNot(all, any, not, 'androidTablet');

test('if blackberry identifies the blackberry user agent correctly', (t) => {
  const goodBB10Navigator = createFakeNavigator(BB10_USER_AGENT);
  const goodLegacyNavigator = createFakeNavigator(BLACKBERRY_9900_USER_AGENT);
  const badNavigator = createFakeNavigator(ANDROID_MOBILE_USER_AGENT);

  t.true(src.blackberry(goodBB10Navigator));
  t.true(src.blackberry(goodLegacyNavigator));
  t.false(src.blackberry(badNavigator));
});

isAllAnyNot(all, any, not, 'blackberry');

test('if blink identifies the blink user agents correctly', (t) => {
  const goodChromeNavigator = createFakeNavigator(CHROME_USER_AGENT);
  const goodOperaNavigator = createFakeNavigator(MODERN_OPERA_USER_AGENT);
  const badNavigator = createFakeNavigator(EDGE_DESKTOP_USER_AGENT);

  t.true(src.blink(goodChromeNavigator));
  t.true(src.blink(goodOperaNavigator));
  t.false(src.blink(badNavigator));
});

isAllAnyNot(all, any, not, 'blink');

test('if browser will detect if in a browser environment or not', (t) => {
  t.true(src.browser());

  const win = global.window;

  delete global.window;

  t.false(src.browser());

  global.window = win;
});

isNotOnly(all, any, not, 'browser');

test('if chrome identifies the chrome user agent correctly', (t) => {
  const goodNavigator = createFakeNavigator(CHROME_USER_AGENT, null, GOOGLE_VENDOR);
  const badNavigator = createFakeNavigator(CHROME_USER_AGENT);

  t.true(src.chrome(goodNavigator));
  t.false(src.chrome(badNavigator));
});

isAllAnyNot(all, any, not, 'chrome');

test('if edge identifies the edge user agent correctly', (t) => {
  const goodDesktopNavigator = createFakeNavigator(EDGE_DESKTOP_USER_AGENT);
  const goodMobileNavigator = createFakeNavigator(EDGE_TABLET_USER_AGENT);
  const badNavigator = createFakeNavigator(CHROME_USER_AGENT);
  const bad11Navigator = createFakeNavigator(IE_11_USER_AGENT);
  const bad10Navigator = createFakeNavigator(IE_10_USER_AGENT);
  const bad9Navigator = createFakeNavigator(IE_9_USER_AGENT);

  t.true(src.edge(goodDesktopNavigator));
  t.true(src.edge(goodMobileNavigator));
  t.false(src.edge(badNavigator));
  t.false(src.edge(bad11Navigator));
  t.false(src.edge(bad10Navigator));
  t.false(src.edge(bad9Navigator));
});

isAllAnyNot(all, any, not, 'edge');

test('if firefox identifies the firefox user agent correctly', (t) => {
  const goodNavigator = createFakeNavigator(FIREFOX_USER_AGENT);
  const badNavigator = createFakeNavigator(CHROME_USER_AGENT);

  t.true(src.firefox(goodNavigator));
  t.false(src.firefox(badNavigator));
});

isAllAnyNot(all, any, not, 'firefox');

test('if gecko will correctly identify all gecko browsers', (t) => {
  const chromeNavigator = createFakeNavigator(CHROME_USER_AGENT);
  const edgeNavigator = createFakeNavigator(EDGE_DESKTOP_USER_AGENT);
  const firefoxNavigator = createFakeNavigator(FIREFOX_USER_AGENT);
  const ieNavigator = createFakeNavigator(IE_11_USER_AGENT);
  const legacyOperaNavigator = createFakeNavigator(LEGACY_OPERA_USER_AGENT);
  const safariNavigator = createFakeNavigator(SAFARI_USER_AGENT);

  t.true(src.gecko(firefoxNavigator));

  t.false(src.gecko(chromeNavigator));
  t.false(src.gecko(edgeNavigator));
  t.false(src.gecko(ieNavigator));
  t.false(src.gecko(legacyOperaNavigator));
  t.false(src.gecko(safariNavigator));
});

isAllAnyNot(all, any, not, 'gecko');

test('if ie identifies the internet explorer user agent correctly', (t) => {
  const good11Navigator = createFakeNavigator(IE_11_USER_AGENT);
  const good10Navigator = createFakeNavigator(IE_10_USER_AGENT);
  const good9Navigator = createFakeNavigator(IE_9_USER_AGENT);
  const badNavigator = createFakeNavigator(CHROME_USER_AGENT);
  const badEdgeNavigator = createFakeNavigator(EDGE_DESKTOP_USER_AGENT);

  t.true(src.ie(good11Navigator));
  t.true(src.ie(good10Navigator));
  t.true(src.ie(good9Navigator));
  t.false(src.ie(badNavigator));
  t.false(src.ie(badEdgeNavigator));
});

isAllAnyNot(all, any, not, 'ie');

test('if ieVersion identifies the ie user agent and version correctly', (t) => {
  const good11Navigator = createFakeNavigator(IE_11_USER_AGENT);
  const good10Navigator = createFakeNavigator(IE_10_USER_AGENT);
  const good9Navigator = createFakeNavigator(IE_9_USER_AGENT);
  const badNavigator = createFakeNavigator(CHROME_USER_AGENT);
  const badEdgeNavigator = createFakeNavigator(EDGE_DESKTOP_USER_AGENT);

  t.false(src.ieVersion());
  t.false(src.ieVersion());
  t.false(src.ieVersion());

  t.false(src.ieVersion(11, badNavigator));
  t.false(src.ieVersion(11, badEdgeNavigator));

  t.true(src.ieVersion(11, good11Navigator));
  t.true(src.ieVersion(10, good10Navigator));
  t.true(src.ieVersion(9, good9Navigator));
});

isNotOnly(all, any, not, 'ieVersion');

test('if ios calls iphone, ipad, and ipod tests', (t) => {
  const ipadSpy = sinon.spy(ipad, 'default');
  const ipodSpy = sinon.spy(ipod, 'default');
  const iphoneSpy = sinon.spy(iphone, 'default');

  src.ios({userAgent: 'foo'});

  t.true(ipadSpy.calledOnce);
  t.true(ipodSpy.calledOnce);
  t.true(iphoneSpy.calledOnce);

  ipadSpy.restore();
  ipodSpy.restore();
  iphoneSpy.restore();
});

isAllAnyNot(all, any, not, 'ios');

test('if ipad identifies the ipad user agents correctly', (t) => {
  const goodNavigator = createFakeNavigator(IPAD_USER_AGENT);
  const badNavigator = createFakeNavigator(BB10_USER_AGENT);
  const badIpodNavigator = createFakeNavigator(IPOD_USER_AGENT);
  const badIphoneNavigator = createFakeNavigator(IPHONE_USER_AGENT);

  t.true(src.ipad(goodNavigator));
  t.false(src.ipad(badNavigator));
  t.false(src.ipad(badIpodNavigator));
  t.false(src.ipad(badIphoneNavigator));
});

isAllAnyNot(all, any, not, 'ipad');

test('if ipod identifies the ipod user agents correctly', (t) => {
  const goodNavigator = createFakeNavigator(IPOD_USER_AGENT);
  const badNavigator = createFakeNavigator(BB10_USER_AGENT);
  const badIpadNavigator = createFakeNavigator(IPAD_USER_AGENT);
  const badIphoneNavigator = createFakeNavigator(IPHONE_USER_AGENT);

  t.true(src.ipod(goodNavigator));
  t.false(src.ipod(badNavigator));
  t.false(src.ipod(badIpadNavigator));
  t.false(src.ipod(badIphoneNavigator));
});

isAllAnyNot(all, any, not, 'ipod');

test('if iphone identifies the iphone user agents correctly', (t) => {
  const goodNavigator = createFakeNavigator(IPHONE_USER_AGENT);
  const badNavigator = createFakeNavigator(BB10_USER_AGENT);
  const badIpadNavigator = createFakeNavigator(IPAD_USER_AGENT);
  const badIpodNavigator = createFakeNavigator(IPOD_USER_AGENT);

  t.true(src.iphone(goodNavigator));
  t.false(src.iphone(badNavigator));
  t.false(src.iphone(badIpadNavigator));
  t.false(src.iphone(badIpodNavigator));
});

isAllAnyNot(all, any, not, 'iphone');

test('if linux identifies the linux app version correctly', (t) => {
  const goodNavigator = createFakeNavigator(null, LINUX_APP_VERSION);
  const badMacNavigator = createFakeNavigator(null, MAC_APP_VERSION);
  const badWindowsNavigator = createFakeNavigator(null, WINDOWS_APP_VERSION);

  t.true(src.linux(goodNavigator));
  t.false(src.linux(badMacNavigator));
  t.false(src.linux(badWindowsNavigator));
});

isAllAnyNot(all, any, not, 'linux');

test('if mac identifies the mac app version correctly', (t) => {
  const goodNavigator = createFakeNavigator(null, MAC_APP_VERSION);
  const badWindowsNavigator = createFakeNavigator(null, WINDOWS_APP_VERSION);
  const badLinuxNavigator = createFakeNavigator(null, LINUX_APP_VERSION);

  t.true(src.mac(goodNavigator));
  t.false(src.mac(badWindowsNavigator));
  t.false(src.mac(badLinuxNavigator));
});

isAllAnyNot(all, any, not, 'mac');

test('if mobile calls iphone, ipad, ipod, windows, and android tests', (t) => {
  const androidSpy = sinon.spy(androidPhone, 'default');
  const ipadSpy = sinon.spy(ipad, 'default');
  const ipodSpy = sinon.spy(ipod, 'default');
  const iphoneSpy = sinon.spy(iphone, 'default');
  const windowsSpy = sinon.spy(windowsPhone, 'default');

  src.mobile({userAgent: 'foo'});

  t.true(androidSpy.calledOnce);
  t.true(ipodSpy.calledOnce);
  t.true(iphoneSpy.calledOnce);
  t.true(windowsSpy.calledOnce);

  t.false(ipadSpy.calledOnce);

  androidSpy.restore();
  ipadSpy.restore();
  ipodSpy.restore();
  iphoneSpy.restore();
  windowsSpy.restore();
});

isAllAnyNot(all, any, not, 'mobile');

test('if offline will return the falsiness of the onLine property on the navigator', (t) => {
  t.false(src.offline({
    onLine: true
  }));

  t.true(src.offline({
    onLine: false
  }));

  t.true(src.offline({}));
});

isAllAnyNot(all, any, not, 'offline');

test('if online will return the presence of the onLine property on the navigator', (t) => {
  t.true(src.online({
    onLine: true
  }));

  t.false(src.online({
    onLine: false
  }));

  t.false(src.online({}));
});

isAllAnyNot(all, any, not, 'online');

test('if opera identifies both the modern and legacy opera user agent correctly', (t) => {
  const goodModernNavigator = createFakeNavigator(MODERN_OPERA_USER_AGENT);
  const goodLegacyNavigator = createFakeNavigator(LEGACY_OPERA_USER_AGENT);
  const badNavigator = createFakeNavigator(CHROME_USER_AGENT);

  t.true(src.opera(goodModernNavigator));
  t.true(src.opera(goodLegacyNavigator));
  t.false(src.opera(badNavigator));
});

isAllAnyNot(all, any, not, 'opera');

test('if presto will correctly identify all presto browsers', (t) => {
  const chromeNavigator = createFakeNavigator(CHROME_USER_AGENT);
  const edgeNavigator = createFakeNavigator(EDGE_DESKTOP_USER_AGENT);
  const firefoxNavigator = createFakeNavigator(FIREFOX_USER_AGENT);
  const ieNavigator = createFakeNavigator(IE_11_USER_AGENT);
  const legacyOperaNavigator = createFakeNavigator(LEGACY_OPERA_USER_AGENT);
  const safariNavigator = createFakeNavigator(SAFARI_USER_AGENT);

  t.true(src.presto(legacyOperaNavigator));

  t.false(src.presto(chromeNavigator));
  t.false(src.presto(edgeNavigator));
  t.false(src.presto(firefoxNavigator));
  t.false(src.presto(ieNavigator));
  t.false(src.presto(safariNavigator));
});

isAllAnyNot(all, any, not, 'presto');

test('if safari identifies the safari user agent correctly', (t) => {
  const goodNavigator = createFakeNavigator(SAFARI_USER_AGENT, null, APPLE_VENDOR);
  const badNavigator = createFakeNavigator(CHROME_USER_AGENT, null, GOOGLE_VENDOR);

  t.true(src.safari(goodNavigator));
  t.false(src.safari(badNavigator));
});

isAllAnyNot(all, any, not, 'safari');

test('if server will detect if in a server environment or not', (t) => {
  t.false(src.server());

  const win = global.window;

  delete global.window;

  t.true(src.server());

  global.window = win;
});

isNotOnly(all, any, not, 'server');

test('if tablet calls ipad, windows, and android tests', (t) => {
  const androidSpy = sinon.spy(androidTablet, 'default');
  const ipadSpy = sinon.spy(ipad, 'default');
  const windowsSpy = sinon.spy(windowsTablet, 'default');

  src.tablet({userAgent: 'foo'});

  t.true(androidSpy.calledOnce);
  t.true(ipadSpy.calledOnce);
  t.true(windowsSpy.calledOnce);

  androidSpy.restore();
  ipadSpy.restore();
  windowsSpy.restore();
});

isAllAnyNot(all, any, not, 'tablet');

test('if touchDevice detects if touch-capable based on windows', (t) => {
  t.false(src.touchDevice());

  window.ontouchstart = () => {};

  t.true(src.touchDevice());

  delete window.ontouchstart;
});

isNotOnly(all, any, not, 'touchDevice');

test('if trident will correctly identify all trident browsers', (t) => {
  const chromeNavigator = createFakeNavigator(CHROME_USER_AGENT);
  const edgeNavigator = createFakeNavigator(EDGE_DESKTOP_USER_AGENT);
  const firefoxNavigator = createFakeNavigator(FIREFOX_USER_AGENT);
  const ieNavigator = createFakeNavigator(IE_11_USER_AGENT);
  const legacyOperaNavigator = createFakeNavigator(LEGACY_OPERA_USER_AGENT);
  const safariNavigator = createFakeNavigator(SAFARI_USER_AGENT);

  t.true(src.trident(ieNavigator));

  t.false(src.trident(chromeNavigator));
  t.false(src.trident(edgeNavigator));
  t.false(src.trident(safariNavigator));
  t.false(src.trident(firefoxNavigator));
  t.false(src.trident(legacyOperaNavigator));
});

isAllAnyNot(all, any, not, 'trident');

test('if webkit will correctly identify all webkit browsers', (t) => {
  const chromeNavigator = createFakeNavigator(CHROME_USER_AGENT);
  const edgeNavigator = createFakeNavigator(EDGE_DESKTOP_USER_AGENT);
  const firefoxNavigator = createFakeNavigator(FIREFOX_USER_AGENT);
  const ieNavigator = createFakeNavigator(IE_11_USER_AGENT);
  const legacyOperaNavigator = createFakeNavigator(LEGACY_OPERA_USER_AGENT);
  const safariNavigator = createFakeNavigator(SAFARI_USER_AGENT);

  t.true(src.webkit(chromeNavigator));
  t.true(src.webkit(edgeNavigator));
  t.true(src.webkit(safariNavigator));

  t.false(src.webkit(firefoxNavigator));
  t.false(src.webkit(ieNavigator));
  t.false(src.webkit(legacyOperaNavigator));
});

isAllAnyNot(all, any, not, 'webkit');

test('if windows will correctly identify windows app versions', (t) => {
  const goodNavigator = createFakeNavigator(null, WINDOWS_APP_VERSION);
  const badMacNavigator = createFakeNavigator(null, MAC_APP_VERSION);
  const badLinuxNavigator = createFakeNavigator(null, LINUX_APP_VERSION);

  t.true(src.windows(goodNavigator));
  t.false(src.windows(badMacNavigator));
  t.false(src.windows(badLinuxNavigator));
});

isAllAnyNot(all, any, not, 'windows');

test('if windowsPhone will correctly identify windows app versions on phones', (t) => {
  const goodWin7PhoneNavigator = createFakeNavigator(WINDOWS_PHONE_7_USER_AGENT, WINDOWS_APP_VERSION);
  const goodWin8PhoneNavigator = createFakeNavigator(WINDOWS_PHONE_8_USER_AGENT, WINDOWS_APP_VERSION);
  const goodWin10PhoneNavigator = createFakeNavigator(WINDOWS_PHONE_10_USER_AGENT, WINDOWS_APP_VERSION);
  const badDesktopNavigator = createFakeNavigator(null, WINDOWS_APP_VERSION);
  const badTabletNavigator = createFakeNavigator(EDGE_TABLET_USER_AGENT, WINDOWS_APP_VERSION);
  const badMacNavigator = createFakeNavigator(null, MAC_APP_VERSION);
  const badLinuxNavigator = createFakeNavigator(null, LINUX_APP_VERSION);

  t.true(src.windowsPhone(goodWin7PhoneNavigator));
  t.true(src.windowsPhone(goodWin8PhoneNavigator));
  t.true(src.windowsPhone(goodWin10PhoneNavigator));
  t.false(src.windowsPhone(badDesktopNavigator));
  t.false(src.windowsPhone(badTabletNavigator));
  t.false(src.windowsPhone(badMacNavigator));
  t.false(src.windowsPhone(badLinuxNavigator));
});

isAllAnyNot(all, any, not, 'windowsPhone');

test('if windowsTablet will correctly identify windows app versions on tablets', (t) => {
  const goodNavigator = createFakeNavigator(EDGE_TABLET_USER_AGENT, WINDOWS_APP_VERSION);
  const badWin7PhoneNavigator = createFakeNavigator(WINDOWS_PHONE_7_USER_AGENT, WINDOWS_APP_VERSION);
  const badWin8PhoneNavigator = createFakeNavigator(WINDOWS_PHONE_8_USER_AGENT, WINDOWS_APP_VERSION);
  const badWin10PhoneNavigator = createFakeNavigator(WINDOWS_PHONE_10_USER_AGENT, WINDOWS_APP_VERSION);
  const badDesktopNavigator = createFakeNavigator(null, WINDOWS_APP_VERSION);
  const badMacNavigator = createFakeNavigator(null, MAC_APP_VERSION);
  const badLinuxNavigator = createFakeNavigator(null, LINUX_APP_VERSION);

  t.false(src.windowsTablet(goodNavigator));
  t.false(src.windowsTablet(badWin7PhoneNavigator));
  t.false(src.windowsTablet(badWin8PhoneNavigator));
  t.false(src.windowsTablet(badWin10PhoneNavigator));
  t.false(src.windowsTablet(badDesktopNavigator));
  t.false(src.windowsTablet(badMacNavigator));
  t.false(src.windowsTablet(badLinuxNavigator));
});

isAllAnyNot(all, any, not, 'windowsTablet');
