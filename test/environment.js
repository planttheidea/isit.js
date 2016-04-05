import test from 'tape';
import isit from '../src';

import {
    testTypeOf
} from './_utils';

const ANDROID_BROWSER_USER_AGENT = 'Mozilla/5.0 (Linux; U; Android 4.0.3; ko-kr; LG-L160L Build/IML74K) AppleWebkit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30';
const GALAXY_NEXUS_USER_AGENT = 'Mozilla/5.0 (Linux; Android 4.0.4; Galaxy Nexus Build/IMM76B) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.133 Mobile Safari/535.19';
const NEXUS_9_USER_AGENT = 'Mozilla/5.0 (Linux; Android 5.0; Nexus 9 Build/LRX21R) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/37.0.0.0 Safari/537.36';

const BLACKBERRY_9900_USER_AGENT = 'Mozilla/5.0 (BlackBerry; U; BlackBerry 9900; en) AppleWebKit/534.11+ (KHTML, like Gecko) Version/7.1.0.346 Mobile Safari/534.11+';
const BB10_USER_AGENT = 'Mozilla/5.0 (BB10; Touch) AppleWebKit/537.35+ (KHTML, like Gecko) Version/10.2.1.2141 Mobile Safari/537.35+';

const CHROME_41_USER_AGENT = 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36';

const EDGE_DESKTOP_USER_AGENT = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.246';
const EDGE_TABLET_USER_AGENT = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.246; Touch';
const IE_11_USER_AGENT = 'Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; AS; rv:11.0) like Gecko';
const IE_10_USER_AGENT = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 7.0; InfoPath.3; .NET CLR 3.1.40767; Trident/6.0; en-IN)';
const IE_9_USER_AGENT = 'Mozilla/5.0 (Windows; U; MSIE 9.0; WIndows NT 9.0; en-US))';
const IE_8_USER_AGENT = 'Mozilla/5.0 (compatible; MSIE 8.0; Windows NT 6.1; Trident/4.0; GTB7.4; InfoPath.2; SV1; .NET CLR 3.3.69573; WOW64; en-US)';
const IE_7_USER_AGENT = 'Mozilla/5.0 (Windows; U; MSIE 7.0; Windows NT 6.0; en-US)';
const IE_6_USER_AGENT = 'Mozilla/4.0 (compatible; MSIE 6.1; Windows XP; .NET CLR 1.1.4322; .NET CLR 2.0.50727)';

const FIREFOX_41_USER_AGENT = 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:40.0) Gecko/20100101 Firefox/40.1';

const IPAD_IOS_7_USER_AGENT = 'Mozilla/5.0 (iPad; CPU OS 7_0 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) CriOS/30.0.1599.12 Mobile/11A465 Safari/8536.25 (3B92C18B-D9DE-4CB7-A02A-22FD2AF17C8F)';
const IPHONE_IOS_7_USER_AGENT = 'Mozilla/5.0 (iPhone; CPU iPhone OS 7_0 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) Version/7.0 Mobile/11A465 Safari/9537.53';
const IPOD_IOS_7_USER_AGENT = 'Mozilla/5.0 (iPod touch; CPU iPhone OS 7_0_3 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) Version/7.0 Mobile/11B511 Safari/9537.53';

const LINUX_APP_VERSION = '5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.110 Safari/537.36';

const MAC_APP_VERSION = '5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.110 Safari/537.36';

const OPERA_15_USER_AGENT = 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/28.0.1500.52 Safari/537.36 OPR/15.0.1147.100';
const OPERA_12_USER_AGENT = 'Opera/9.80 (X11; Linux i686; Ubuntu/14.10) Presto/2.12.388 Version/12.16';

const SAFARI_USER_AGENT = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit/537.75.14 (KHTML, like Gecko) Version/7.0.3 Safari/7046A194A';

const WINDOWS_APP_VERSION = '5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.110 Safari/537.36';

const WINDOWS_PHONE_8_USER_AGENT = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows Phone 8.0; Trident/6.0; IEMobile/10.0; ARM; Touch; NOKIA; Lumia 920)';
const WINDOWS_PHONE_7_USER_AGENT = 'Mozilla/4.0 (compatible; MSIE 7.0; Windows Phone OS 7.0; Trident/3.1; IEMobile/7.0; LG; GW910)';

test('isitAndroid', (t) => {
    t.plan(4);
    
    testTypeOf(t, 'android');
    
    t.equal(isit.android(), false);
    t.equal(isit.android(ANDROID_BROWSER_USER_AGENT), true);

    t.equal(isit.not.android(ANDROID_BROWSER_USER_AGENT), false);
});

test('isitAndroidPhone', (t) => {
    t.plan(4);

    testTypeOf(t, 'androidPhone');

    t.equal(isit.androidPhone(), false);
    t.equal(isit.androidPhone(GALAXY_NEXUS_USER_AGENT), true);

    t.equal(isit.not.androidPhone(GALAXY_NEXUS_USER_AGENT), false);
});

test('isitAndroidTablet', (t) => {
    t.plan(4);

    testTypeOf(t, 'androidTablet');

    t.equal(isit.androidTablet(), false);
    t.equal(isit.androidTablet(NEXUS_9_USER_AGENT), true);

    t.equal(isit.not.androidTablet(NEXUS_9_USER_AGENT), false);
});

test('isitBlackberry', (t) => {
    t.plan(6);

    testTypeOf(t, 'blackberry');

    t.equal(isit.blackberry(), false);
    t.equal(isit.blackberry(BLACKBERRY_9900_USER_AGENT), true);
    t.equal(isit.blackberry(BB10_USER_AGENT), true);

    t.equal(isit.not.blackberry(BLACKBERRY_9900_USER_AGENT), false);
    t.equal(isit.not.blackberry(BB10_USER_AGENT), false);
});

test('isitBlink', (t) => {
    t.plan(8);

    testTypeOf(t, 'blink');

    /**
     * the "false" checker uses Opera 12 because the default test runner uses
     * a Chrome user agent. Also, its a good test of the Opera 12 vs 15 transition
     * from Presto to Webkit / Blink
     */
    t.equal(isit.blink(), true);
    t.equal(isit.blink(OPERA_12_USER_AGENT), false);
    t.equal(isit.blink(CHROME_41_USER_AGENT), true);
    t.equal(isit.blink(OPERA_15_USER_AGENT), true);

    t.equal(isit.not.blink(OPERA_12_USER_AGENT), true);
    t.equal(isit.not.blink(CHROME_41_USER_AGENT), false);
    t.equal(isit.not.blink(OPERA_15_USER_AGENT), false);
});

/**
 * Can only test if its a browser, which in a headless browser ... is true
 */
test('isitBrowser', (t) => {
    t.plan(3);

    testTypeOf(t, 'browser');

    t.equal(isit.browser(), true);

    t.equal(isit.not.browser(), false);
});

test('isitChrome', (t) => {
    t.plan(6);

    testTypeOf(t, 'chrome');

    /**
     * again, we use Opera as a false check because it has the Chrome
     * user agent but is a different vendor and the default user agent
     * is Chrome
     */
    t.equal(isit.chrome(), true);
    t.equal(isit.chrome(OPERA_15_USER_AGENT, 'opera'), false);
    t.equal(isit.chrome(CHROME_41_USER_AGENT, 'google inc'), true);

    t.equal(isit.not.chrome(OPERA_15_USER_AGENT, 'opera'), true);
    t.equal(isit.not.chrome(CHROME_41_USER_AGENT, 'google inc'), false);
});

test('isitDesktop', (t) => {
    t.plan(6);

    testTypeOf(t, 'desktop');

    t.equal(isit.desktop(), true);
    t.equal(isit.desktop(CHROME_41_USER_AGENT), true);
    t.equal(isit.desktop(GALAXY_NEXUS_USER_AGENT), false);

    t.equal(isit.not.desktop(CHROME_41_USER_AGENT), false);
    t.equal(isit.not.desktop(GALAXY_NEXUS_USER_AGENT), true);
});

test('isitEdge', (t) => {
    t.plan(4);

    testTypeOf(t, 'edge');

    t.equal(isit.edge(), false);
    t.equal(isit.edge(EDGE_DESKTOP_USER_AGENT), true);

    t.equal(isit.not.edge(EDGE_DESKTOP_USER_AGENT), false);
});

test('isitFirefox', (t) => {
    t.plan(4);

    testTypeOf(t, 'firefox');

    t.equal(isit.firefox(), false);
    t.equal(isit.firefox(FIREFOX_41_USER_AGENT), true);

    t.equal(isit.not.firefox(FIREFOX_41_USER_AGENT), false);
});

test('isitGecko', (t) => {
    t.plan(4);

    testTypeOf(t, 'gecko');

    t.equal(isit.gecko(), false);
    t.equal(isit.gecko(FIREFOX_41_USER_AGENT), true);

    t.equal(isit.not.gecko(FIREFOX_41_USER_AGENT), false);
});

test('isitIe', (t) => {
    t.plan(10);

    testTypeOf(t, 'ie');

    t.equal(isit.ie(), false);
    t.equal(isit.ie(11, IE_11_USER_AGENT), true);
    t.equal(isit.ie(10, IE_10_USER_AGENT), true);
    t.equal(isit.ie(9, IE_9_USER_AGENT), true);
    t.equal(isit.ie(8, IE_8_USER_AGENT), true);
    t.equal(isit.ie(7, IE_7_USER_AGENT), true);
    t.equal(isit.ie(6, IE_6_USER_AGENT), true);

    t.equal(isit.not.ie(), true);
    t.equal(isit.not.ie(11, IE_11_USER_AGENT), false);
});

test('isitIos', (t) => {
    t.plan(7);

    testTypeOf(t, 'ios');

    t.equal(isit.ios(), false);
    t.equal(isit.ios(IPAD_IOS_7_USER_AGENT), true);
    t.equal(isit.ios(IPHONE_IOS_7_USER_AGENT), true);
    t.equal(isit.ios(IPOD_IOS_7_USER_AGENT), true);
    t.equal(isit.ios(SAFARI_USER_AGENT), false);

    t.equal(isit.not.ios(IPAD_IOS_7_USER_AGENT), false);
});

test('isitIpad', (t) => {
    t.plan(6);

    testTypeOf(t, 'ipad');

    t.equal(isit.ipad(), false);
    t.equal(isit.ipad(IPAD_IOS_7_USER_AGENT), true);
    t.equal(isit.ipad(IPHONE_IOS_7_USER_AGENT), false);
    t.equal(isit.ipad(IPOD_IOS_7_USER_AGENT), false);

    t.equal(isit.not.ipad(IPAD_IOS_7_USER_AGENT), false);
});

test('isitIphone', (t) => {
    t.plan(6);

    testTypeOf(t, 'iphone');

    t.equal(isit.iphone(), false);
    t.equal(isit.iphone(IPAD_IOS_7_USER_AGENT), false);
    t.equal(isit.iphone(IPHONE_IOS_7_USER_AGENT), true);
    t.equal(isit.iphone(IPOD_IOS_7_USER_AGENT), false);

    t.equal(isit.not.iphone(IPHONE_IOS_7_USER_AGENT), false);
});

test('isitIpod', (t) => {
    t.plan(6);

    testTypeOf(t, 'ipod');

    t.equal(isit.ipod(), false);
    t.equal(isit.ipod(IPAD_IOS_7_USER_AGENT), false);
    t.equal(isit.ipod(IPHONE_IOS_7_USER_AGENT), false);
    t.equal(isit.ipod(IPOD_IOS_7_USER_AGENT), true);

    t.equal(isit.not.ipod(IPOD_IOS_7_USER_AGENT), false);
});

test('isitLinux', (t) => {
    t.plan(6);

    testTypeOf(t, 'linux');
    
    t.equal(isit.linux(LINUX_APP_VERSION), true);
    t.equal(isit.linux(MAC_APP_VERSION), false);
    t.equal(isit.linux(WINDOWS_APP_VERSION), false);

    t.equal(isit.not.linux(WINDOWS_APP_VERSION), true);
    t.equal(isit.not.linux(LINUX_APP_VERSION), false);
});

test('isitMac', (t) => {
    t.plan(6);

    testTypeOf(t, 'mac');

    t.equal(isit.mac(LINUX_APP_VERSION), false);
    t.equal(isit.mac(MAC_APP_VERSION), true);
    t.equal(isit.mac(WINDOWS_APP_VERSION), false);

    t.equal(isit.not.mac(WINDOWS_APP_VERSION), true);
    t.equal(isit.not.mac(MAC_APP_VERSION), false);
});

test('isitMobile', (t) => {
    t.plan(9);

    testTypeOf(t, 'mobile');

    t.equal(isit.mobile(), false);
    t.equal(isit.mobile(GALAXY_NEXUS_USER_AGENT), true);
    t.equal(isit.mobile(IPHONE_IOS_7_USER_AGENT), true);
    t.equal(isit.mobile(BB10_USER_AGENT), true);
    t.equal(isit.mobile(FIREFOX_41_USER_AGENT), false);
    t.equal(isit.mobile(CHROME_41_USER_AGENT), false);

    t.equal(isit.not.mobile(CHROME_41_USER_AGENT), true);
    t.equal(isit.not.mobile(GALAXY_NEXUS_USER_AGENT), false);
});

/**
 * Like isit.browser(), can only test in headless browser, so its false
 */
test('isitNode', (t) => {
    t.plan(3);

    testTypeOf(t, 'node');

    t.equal(isit.node(), false);

    t.equal(isit.not.node(), true);
});

test('isitOffline', (t) => {
    t.plan(3);

    testTypeOf(t, 'offline');

    t.equal(isit.offline(), false);

    t.equal(isit.not.offline(), true);
});

test('isitOnline', (t) => {
    t.plan(3);

    testTypeOf(t, 'online');

    t.equal(isit.online(), true);

    t.equal(isit.not.online(), false);
});

test('isitOpera', (t) => {
    t.plan(6);

    testTypeOf(t, 'opera');

    t.equal(isit.opera(), false);
    t.equal(isit.opera(OPERA_12_USER_AGENT), true);
    t.equal(isit.opera(OPERA_15_USER_AGENT), true);

    t.equal(isit.not.opera(CHROME_41_USER_AGENT), true);
    t.equal(isit.not.opera(OPERA_12_USER_AGENT), false);
});

test('isitPresto', (t) => {
    t.plan(6);

    testTypeOf(t, 'presto');

    t.equal(isit.presto(), false);
    t.equal(isit.presto(OPERA_12_USER_AGENT), true);
    t.equal(isit.presto(OPERA_15_USER_AGENT), false);

    t.equal(isit.not.presto(), true);
    t.equal(isit.not.presto(OPERA_12_USER_AGENT), false);
});

test('isitSafari', (t) => {
    t.plan(5);

    testTypeOf(t, 'safari');

    t.equal(isit.safari(), false);
    t.equal(isit.safari(SAFARI_USER_AGENT, 'apple computer'), true);

    t.equal(isit.not.safari(), true);
    t.equal(isit.not.safari(SAFARI_USER_AGENT, 'apple computer'), false);
});

test('isitTablet', (t) => {
    t.plan(8);

    testTypeOf(t, 'tablet');

    t.equal(isit.tablet(), false);
    t.equal(isit.tablet(NEXUS_9_USER_AGENT), true);
    t.equal(isit.tablet(IPAD_IOS_7_USER_AGENT), true);
    t.equal(isit.tablet(EDGE_DESKTOP_USER_AGENT, WINDOWS_APP_VERSION), false);
    t.equal(isit.tablet(EDGE_TABLET_USER_AGENT, WINDOWS_APP_VERSION), true);

    t.equal(isit.not.tablet(), true);
    t.equal(isit.not.tablet(IPAD_IOS_7_USER_AGENT), false);
});

test('isitTrident', (t) => {
    t.plan(11);

    testTypeOf(t, 'trident');

    t.equal(isit.trident(), false);
    t.equal(isit.trident(EDGE_DESKTOP_USER_AGENT), false); // I know, I was surprised too
    t.equal(isit.trident(IE_11_USER_AGENT), true);
    t.equal(isit.trident(IE_10_USER_AGENT), true);
    t.equal(isit.trident(IE_9_USER_AGENT), true);
    t.equal(isit.trident(IE_8_USER_AGENT), true);
    t.equal(isit.trident(IE_7_USER_AGENT), true);
    t.equal(isit.trident(IE_6_USER_AGENT), true);

    t.equal(isit.not.trident(), true);
    t.equal(isit.not.trident(IE_11_USER_AGENT), false);
});

test('isitTouchDevice', (t) => {
    t.plan(3);

    testTypeOf(t, 'touchDevice');

    t.equal(isit.touchDevice(), false);

    t.equal(isit.not.touchDevice(), true);
});

test('isitWebkit', (t) => {
    t.plan(14);

    testTypeOf(t, 'webkit');

    t.equal(isit.webkit(), true);
    t.equal(isit.webkit(EDGE_DESKTOP_USER_AGENT), true); // look it up if you don't believe me
    t.equal(isit.webkit(IE_11_USER_AGENT), false);
    t.equal(isit.webkit(IE_10_USER_AGENT), false);
    t.equal(isit.webkit(IE_9_USER_AGENT), false);
    t.equal(isit.webkit(IE_8_USER_AGENT), false);
    t.equal(isit.webkit(IE_7_USER_AGENT), false);
    t.equal(isit.webkit(IE_7_USER_AGENT), false);
    t.equal(isit.webkit(FIREFOX_41_USER_AGENT), false);
    t.equal(isit.webkit(CHROME_41_USER_AGENT), true);
    t.equal(isit.webkit(SAFARI_USER_AGENT), true);

    t.equal(isit.not.webkit(), false);
    t.equal(isit.not.webkit(FIREFOX_41_USER_AGENT), true);
});

test('isitWindows', (t) => {
    t.plan(6);

    testTypeOf(t, 'windows');

    t.equal(isit.windows(LINUX_APP_VERSION), false);
    t.equal(isit.windows(MAC_APP_VERSION), false);
    t.equal(isit.windows(WINDOWS_APP_VERSION), true);

    t.equal(isit.not.windows(MAC_APP_VERSION), true);
    t.equal(isit.not.windows(WINDOWS_APP_VERSION), false);
});

test('isitWindowsPhone', (t) => {
    t.plan(8);

    testTypeOf(t, 'windowsPhone');

    t.equal(isit.windowsPhone(), false);
    t.equal(isit.windowsPhone(EDGE_DESKTOP_USER_AGENT), false);
    t.equal(isit.windowsPhone(EDGE_TABLET_USER_AGENT, WINDOWS_APP_VERSION), false);
    t.equal(isit.windowsPhone(WINDOWS_PHONE_8_USER_AGENT, WINDOWS_APP_VERSION), true);
    t.equal(isit.windowsPhone(WINDOWS_PHONE_7_USER_AGENT, WINDOWS_APP_VERSION), true);

    t.equal(isit.not.windowsPhone(EDGE_DESKTOP_USER_AGENT), true);
    t.equal(isit.not.windowsPhone(WINDOWS_PHONE_8_USER_AGENT, WINDOWS_APP_VERSION), false);
});

test('isitWindowsTablet', (t) => {
    t.plan(8);

    testTypeOf(t, 'windowsTablet');

    t.equal(isit.windowsTablet(), false);
    t.equal(isit.windowsTablet(EDGE_DESKTOP_USER_AGENT), false);
    t.equal(isit.windowsTablet(EDGE_TABLET_USER_AGENT, WINDOWS_APP_VERSION), true);
    t.equal(isit.windowsTablet(WINDOWS_PHONE_8_USER_AGENT, WINDOWS_APP_VERSION), false);
    t.equal(isit.windowsTablet(WINDOWS_PHONE_7_USER_AGENT, WINDOWS_APP_VERSION), false);

    t.equal(isit.not.windowsTablet(EDGE_DESKTOP_USER_AGENT), true);
    t.equal(isit.not.windowsTablet(EDGE_TABLET_USER_AGENT, WINDOWS_APP_VERSION), false);
});