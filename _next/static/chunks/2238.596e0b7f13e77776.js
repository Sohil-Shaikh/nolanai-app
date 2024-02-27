"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2238], {
        74444: function(e, t, r) {
            r.d(t, {
                $s: function() {
                    return calculateBackoffMillis
                },
                BH: function() {
                    return Deferred
                },
                DV: function() {
                    return safeGet
                },
                G6: function() {
                    return isSafari
                },
                GJ: function() {
                    return isAdmin
                },
                L: function() {
                    return base64urlEncodeWithoutPadding
                },
                LL: function() {
                    return ErrorFactory
                },
                P0: function() {
                    return getDefaultEmulatorHostnameAndPort
                },
                Pz: function() {
                    return getExperimentalSetting
                },
                Sg: function() {
                    return createMockUserToken
                },
                UI: function() {
                    return map
                },
                US: function() {
                    return o
                },
                Wl: function() {
                    return stringify
                },
                Yr: function() {
                    return isNodeSdk
                },
                ZR: function() {
                    return FirebaseError
                },
                aH: function() {
                    return getDefaultAppConfig
                },
                b$: function() {
                    return isReactNative
                },
                cI: function() {
                    return jsonEval
                },
                dS: function() {
                    return stringToByteArray
                },
                eu: function() {
                    return validateIndexedDBOpenable
                },
                g5: function() {
                    return assertionError
                },
                gK: function() {
                    return errorPrefix
                },
                gQ: function() {
                    return Sha1
                },
                h$: function() {
                    return base64Encode
                },
                hl: function() {
                    return isIndexedDBAvailable
                },
                hu: function() {
                    return assert
                },
                m9: function() {
                    return getModularInstance
                },
                ne: function() {
                    return createSubscribe
                },
                p$: function() {
                    return deepCopy
                },
                pd: function() {
                    return extractQuerystring
                },
                q4: function() {
                    return getDefaultEmulatorHost
                },
                r3: function() {
                    return contains
                },
                ru: function() {
                    return isBrowserExtension
                },
                tV: function() {
                    return base64Decode
                },
                uI: function() {
                    return isMobileCordova
                },
                ug: function() {
                    return stringLength
                },
                vZ: function() {
                    return function deepEqual(e, t) {
                        if (e === t) return !0;
                        let r = Object.keys(e),
                            n = Object.keys(t);
                        for (let i of r) {
                            if (!n.includes(i)) return !1;
                            let r = e[i],
                                o = t[i];
                            if (isObject(r) && isObject(o)) {
                                if (!deepEqual(r, o)) return !1
                            } else if (r !== o) return !1
                        }
                        for (let e of n)
                            if (!r.includes(e)) return !1;
                        return !0
                    }
                },
                w1: function() {
                    return isIE
                },
                w9: function() {
                    return isValidFormat
                },
                xO: function() {
                    return querystring
                },
                xb: function() {
                    return isEmpty
                },
                z$: function() {
                    return getUA
                },
                zI: function() {
                    return areCookiesEnabled
                },
                zd: function() {
                    return querystringDecode
                }
            });
            var n = r(83454);
            let i = {
                    NODE_CLIENT: !1,
                    NODE_ADMIN: !1,
                    SDK_VERSION: "${JSCORE_VERSION}"
                },
                assert = function(e, t) {
                    if (!e) throw assertionError(t)
                },
                assertionError = function(e) {
                    return Error("Firebase Database (" + i.SDK_VERSION + ") INTERNAL ASSERT FAILED: " + e)
                },
                stringToByteArray$1 = function(e) {
                    let t = [],
                        r = 0;
                    for (let n = 0; n < e.length; n++) {
                        let i = e.charCodeAt(n);
                        i < 128 ? t[r++] = i : (i < 2048 ? t[r++] = i >> 6 | 192 : ((64512 & i) == 55296 && n + 1 < e.length && (64512 & e.charCodeAt(n + 1)) == 56320 ? (i = 65536 + ((1023 & i) << 10) + (1023 & e.charCodeAt(++n)), t[r++] = i >> 18 | 240, t[r++] = i >> 12 & 63 | 128) : t[r++] = i >> 12 | 224, t[r++] = i >> 6 & 63 | 128), t[r++] = 63 & i | 128)
                    }
                    return t
                },
                byteArrayToString = function(e) {
                    let t = [],
                        r = 0,
                        n = 0;
                    for (; r < e.length;) {
                        let i = e[r++];
                        if (i < 128) t[n++] = String.fromCharCode(i);
                        else if (i > 191 && i < 224) {
                            let o = e[r++];
                            t[n++] = String.fromCharCode((31 & i) << 6 | 63 & o)
                        } else if (i > 239 && i < 365) {
                            let o = e[r++],
                                a = e[r++],
                                s = e[r++],
                                c = ((7 & i) << 18 | (63 & o) << 12 | (63 & a) << 6 | 63 & s) - 65536;
                            t[n++] = String.fromCharCode(55296 + (c >> 10)), t[n++] = String.fromCharCode(56320 + (1023 & c))
                        } else {
                            let o = e[r++],
                                a = e[r++];
                            t[n++] = String.fromCharCode((15 & i) << 12 | (63 & o) << 6 | 63 & a)
                        }
                    }
                    return t.join("")
                },
                o = {
                    byteToCharMap_: null,
                    charToByteMap_: null,
                    byteToCharMapWebSafe_: null,
                    charToByteMapWebSafe_: null,
                    ENCODED_VALS_BASE: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
                    get ENCODED_VALS() {
                        return this.ENCODED_VALS_BASE + "+/="
                    },
                    get ENCODED_VALS_WEBSAFE() {
                        return this.ENCODED_VALS_BASE + "-_."
                    },
                    HAS_NATIVE_SUPPORT: "function" == typeof atob,
                    encodeByteArray(e, t) {
                        if (!Array.isArray(e)) throw Error("encodeByteArray takes an array as a parameter");
                        this.init_();
                        let r = t ? this.byteToCharMapWebSafe_ : this.byteToCharMap_,
                            n = [];
                        for (let t = 0; t < e.length; t += 3) {
                            let i = e[t],
                                o = t + 1 < e.length,
                                a = o ? e[t + 1] : 0,
                                s = t + 2 < e.length,
                                c = s ? e[t + 2] : 0,
                                l = i >> 2,
                                u = (3 & i) << 4 | a >> 4,
                                h = (15 & a) << 2 | c >> 6,
                                d = 63 & c;
                            s || (d = 64, o || (h = 64)), n.push(r[l], r[u], r[h], r[d])
                        }
                        return n.join("")
                    },
                    encodeString(e, t) {
                        return this.HAS_NATIVE_SUPPORT && !t ? btoa(e) : this.encodeByteArray(stringToByteArray$1(e), t)
                    },
                    decodeString(e, t) {
                        return this.HAS_NATIVE_SUPPORT && !t ? atob(e) : byteArrayToString(this.decodeStringToByteArray(e, t))
                    },
                    decodeStringToByteArray(e, t) {
                        this.init_();
                        let r = t ? this.charToByteMapWebSafe_ : this.charToByteMap_,
                            n = [];
                        for (let t = 0; t < e.length;) {
                            let i = r[e.charAt(t++)],
                                o = t < e.length,
                                a = o ? r[e.charAt(t)] : 0;
                            ++t;
                            let s = t < e.length,
                                c = s ? r[e.charAt(t)] : 64;
                            ++t;
                            let l = t < e.length,
                                u = l ? r[e.charAt(t)] : 64;
                            if (++t, null == i || null == a || null == c || null == u) throw new DecodeBase64StringError;
                            let h = i << 2 | a >> 4;
                            if (n.push(h), 64 !== c) {
                                let e = a << 4 & 240 | c >> 2;
                                if (n.push(e), 64 !== u) {
                                    let e = c << 6 & 192 | u;
                                    n.push(e)
                                }
                            }
                        }
                        return n
                    },
                    init_() {
                        if (!this.byteToCharMap_) {
                            this.byteToCharMap_ = {}, this.charToByteMap_ = {}, this.byteToCharMapWebSafe_ = {}, this.charToByteMapWebSafe_ = {};
                            for (let e = 0; e < this.ENCODED_VALS.length; e++) this.byteToCharMap_[e] = this.ENCODED_VALS.charAt(e), this.charToByteMap_[this.byteToCharMap_[e]] = e, this.byteToCharMapWebSafe_[e] = this.ENCODED_VALS_WEBSAFE.charAt(e), this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]] = e, e >= this.ENCODED_VALS_BASE.length && (this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)] = e, this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)] = e)
                        }
                    }
                };
            let DecodeBase64StringError = class DecodeBase64StringError extends Error {
                constructor() {
                    super(...arguments), this.name = "DecodeBase64StringError"
                }
            };
            let base64Encode = function(e) {
                    let t = stringToByteArray$1(e);
                    return o.encodeByteArray(t, !0)
                },
                base64urlEncodeWithoutPadding = function(e) {
                    return base64Encode(e).replace(/\./g, "")
                },
                base64Decode = function(e) {
                    try {
                        return o.decodeString(e, !0)
                    } catch (e) {
                        console.error("base64Decode failed: ", e)
                    }
                    return null
                };

            function deepCopy(e) {
                return function deepExtend(e, t) {
                    if (!(t instanceof Object)) return t;
                    switch (t.constructor) {
                        case Date:
                            return new Date(t.getTime());
                        case Object:
                            void 0 === e && (e = {});
                            break;
                        case Array:
                            e = [];
                            break;
                        default:
                            return t
                    }
                    for (let r in t) t.hasOwnProperty(r) && "__proto__" !== r && (e[r] = deepExtend(e[r], t[r]));
                    return e
                }(void 0, e)
            }
            let getDefaultsFromGlobal = () => (function() {
                    if ("undefined" != typeof self) return self;
                    if ("undefined" != typeof window) return window;
                    if (void 0 !== r.g) return r.g;
                    throw Error("Unable to locate global object.")
                })().__FIREBASE_DEFAULTS__,
                getDefaultsFromEnvVariable = () => {
                    if (void 0 === n || void 0 === n.env) return;
                    let e = n.env.__FIREBASE_DEFAULTS__;
                    if (e) return JSON.parse(e)
                },
                getDefaultsFromCookie = () => {
                    let e;
                    if ("undefined" == typeof document) return;
                    try {
                        e = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)
                    } catch (e) {
                        return
                    }
                    let t = e && base64Decode(e[1]);
                    return t && JSON.parse(t)
                },
                getDefaults = () => {
                    try {
                        return getDefaultsFromGlobal() || getDefaultsFromEnvVariable() || getDefaultsFromCookie()
                    } catch (e) {
                        console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);
                        return
                    }
                },
                getDefaultEmulatorHost = e => {
                    var t, r;
                    return null === (r = null === (t = getDefaults()) || void 0 === t ? void 0 : t.emulatorHosts) || void 0 === r ? void 0 : r[e]
                },
                getDefaultEmulatorHostnameAndPort = e => {
                    let t = getDefaultEmulatorHost(e);
                    if (!t) return;
                    let r = t.lastIndexOf(":");
                    if (r <= 0 || r + 1 === t.length) throw Error(`Invalid host ${t} with no separate hostname and port!`);
                    let n = parseInt(t.substring(r + 1), 10);
                    return "[" === t[0] ? [t.substring(1, r - 1), n] : [t.substring(0, r), n]
                },
                getDefaultAppConfig = () => {
                    var e;
                    return null === (e = getDefaults()) || void 0 === e ? void 0 : e.config
                },
                getExperimentalSetting = e => {
                    var t;
                    return null === (t = getDefaults()) || void 0 === t ? void 0 : t[`_${e}`]
                };
            let Deferred = class Deferred {
                constructor() {
                    this.reject = () => {}, this.resolve = () => {}, this.promise = new Promise((e, t) => {
                        this.resolve = e, this.reject = t
                    })
                }
                wrapCallback(e) {
                    return (t, r) => {
                        t ? this.reject(t) : this.resolve(r), "function" == typeof e && (this.promise.catch(() => {}), 1 === e.length ? e(t) : e(t, r))
                    }
                }
            };

            function createMockUserToken(e, t) {
                if (e.uid) throw Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');
                let r = t || "demo-project",
                    n = e.iat || 0,
                    i = e.sub || e.user_id;
                if (!i) throw Error("mockUserToken must contain 'sub' or 'user_id' field!");
                let o = Object.assign({
                    iss: `https://securetoken.google.com/${r}`,
                    aud: r,
                    iat: n,
                    exp: n + 3600,
                    auth_time: n,
                    sub: i,
                    user_id: i,
                    firebase: {
                        sign_in_provider: "custom",
                        identities: {}
                    }
                }, e);
                return [base64urlEncodeWithoutPadding(JSON.stringify({
                    alg: "none",
                    type: "JWT"
                })), base64urlEncodeWithoutPadding(JSON.stringify(o)), ""].join(".")
            }

            function getUA() {
                return "undefined" != typeof navigator && "string" == typeof navigator.userAgent ? navigator.userAgent : ""
            }

            function isMobileCordova() {
                return "undefined" != typeof window && !!(window.cordova || window.phonegap || window.PhoneGap) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(getUA())
            }

            function isBrowserExtension() {
                let e = "object" == typeof chrome ? chrome.runtime : "object" == typeof browser ? browser.runtime : void 0;
                return "object" == typeof e && void 0 !== e.id
            }

            function isReactNative() {
                return "object" == typeof navigator && "ReactNative" === navigator.product
            }

            function isIE() {
                let e = getUA();
                return e.indexOf("MSIE ") >= 0 || e.indexOf("Trident/") >= 0
            }

            function isNodeSdk() {
                return !0 === i.NODE_CLIENT || !0 === i.NODE_ADMIN
            }

            function isSafari() {
                return ! function() {
                    var e;
                    let t = null === (e = getDefaults()) || void 0 === e ? void 0 : e.forceEnvironment;
                    if ("node" === t) return !0;
                    if ("browser" === t) return !1;
                    try {
                        return "[object process]" === Object.prototype.toString.call(r.g.process)
                    } catch (e) {
                        return !1
                    }
                }() && navigator.userAgent.includes("Safari") && !navigator.userAgent.includes("Chrome")
            }

            function isIndexedDBAvailable() {
                try {
                    return "object" == typeof indexedDB
                } catch (e) {
                    return !1
                }
            }

            function validateIndexedDBOpenable() {
                return new Promise((e, t) => {
                    try {
                        let r = !0,
                            n = "validate-browser-context-for-indexeddb-analytics-module",
                            i = self.indexedDB.open(n);
                        i.onsuccess = () => {
                            i.result.close(), r || self.indexedDB.deleteDatabase(n), e(!0)
                        }, i.onupgradeneeded = () => {
                            r = !1
                        }, i.onerror = () => {
                            var e;
                            t((null === (e = i.error) || void 0 === e ? void 0 : e.message) || "")
                        }
                    } catch (e) {
                        t(e)
                    }
                })
            }

            function areCookiesEnabled() {
                return "undefined" != typeof navigator && !!navigator.cookieEnabled
            }
            let FirebaseError = class FirebaseError extends Error {
                constructor(e, t, r) {
                    super(t), this.code = e, this.customData = r, this.name = "FirebaseError", Object.setPrototypeOf(this, FirebaseError.prototype), Error.captureStackTrace && Error.captureStackTrace(this, ErrorFactory.prototype.create)
                }
            };
            let ErrorFactory = class ErrorFactory {
                constructor(e, t, r) {
                    this.service = e, this.serviceName = t, this.errors = r
                }
                create(e, ...t) {
                    let r = t[0] || {},
                        n = `${this.service}/${e}`,
                        i = this.errors[e],
                        o = i ? i.replace(a, (e, t) => {
                            let n = r[t];
                            return null != n ? String(n) : `<${t}?>`
                        }) : "Error",
                        s = `${this.serviceName}: ${o} (${n}).`,
                        c = new FirebaseError(n, s, r);
                    return c
                }
            };
            let a = /\{\$([^}]+)}/g;

            function jsonEval(e) {
                return JSON.parse(e)
            }

            function stringify(e) {
                return JSON.stringify(e)
            }
            let decode = function(e) {
                    let t = {},
                        r = {},
                        n = {},
                        i = "";
                    try {
                        let o = e.split(".");
                        t = jsonEval(base64Decode(o[0]) || ""), r = jsonEval(base64Decode(o[1]) || ""), i = o[2], n = r.d || {}, delete r.d
                    } catch (e) {}
                    return {
                        header: t,
                        claims: r,
                        data: n,
                        signature: i
                    }
                },
                isValidFormat = function(e) {
                    let t = decode(e),
                        r = t.claims;
                    return !!r && "object" == typeof r && r.hasOwnProperty("iat")
                },
                isAdmin = function(e) {
                    let t = decode(e).claims;
                    return "object" == typeof t && !0 === t.admin
                };

            function contains(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }

            function safeGet(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t) ? e[t] : void 0
            }

            function isEmpty(e) {
                for (let t in e)
                    if (Object.prototype.hasOwnProperty.call(e, t)) return !1;
                return !0
            }

            function map(e, t, r) {
                let n = {};
                for (let i in e) Object.prototype.hasOwnProperty.call(e, i) && (n[i] = t.call(r, e[i], i, e));
                return n
            }

            function isObject(e) {
                return null !== e && "object" == typeof e
            }

            function querystring(e) {
                let t = [];
                for (let [r, n] of Object.entries(e)) Array.isArray(n) ? n.forEach(e => {
                    t.push(encodeURIComponent(r) + "=" + encodeURIComponent(e))
                }) : t.push(encodeURIComponent(r) + "=" + encodeURIComponent(n));
                return t.length ? "&" + t.join("&") : ""
            }

            function querystringDecode(e) {
                let t = {},
                    r = e.replace(/^\?/, "").split("&");
                return r.forEach(e => {
                    if (e) {
                        let [r, n] = e.split("=");
                        t[decodeURIComponent(r)] = decodeURIComponent(n)
                    }
                }), t
            }

            function extractQuerystring(e) {
                let t = e.indexOf("?");
                if (!t) return "";
                let r = e.indexOf("#", t);
                return e.substring(t, r > 0 ? r : void 0)
            }
            let Sha1 = class Sha1 {
                constructor() {
                    this.chain_ = [], this.buf_ = [], this.W_ = [], this.pad_ = [], this.inbuf_ = 0, this.total_ = 0, this.blockSize = 64, this.pad_[0] = 128;
                    for (let e = 1; e < this.blockSize; ++e) this.pad_[e] = 0;
                    this.reset()
                }
                reset() {
                    this.chain_[0] = 1732584193, this.chain_[1] = 4023233417, this.chain_[2] = 2562383102, this.chain_[3] = 271733878, this.chain_[4] = 3285377520, this.inbuf_ = 0, this.total_ = 0
                }
                compress_(e, t) {
                    let r, n;
                    t || (t = 0);
                    let i = this.W_;
                    if ("string" == typeof e)
                        for (let r = 0; r < 16; r++) i[r] = e.charCodeAt(t) << 24 | e.charCodeAt(t + 1) << 16 | e.charCodeAt(t + 2) << 8 | e.charCodeAt(t + 3), t += 4;
                    else
                        for (let r = 0; r < 16; r++) i[r] = e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3], t += 4;
                    for (let e = 16; e < 80; e++) {
                        let t = i[e - 3] ^ i[e - 8] ^ i[e - 14] ^ i[e - 16];
                        i[e] = (t << 1 | t >>> 31) & 4294967295
                    }
                    let o = this.chain_[0],
                        a = this.chain_[1],
                        s = this.chain_[2],
                        c = this.chain_[3],
                        l = this.chain_[4];
                    for (let e = 0; e < 80; e++) {
                        e < 40 ? e < 20 ? (r = c ^ a & (s ^ c), n = 1518500249) : (r = a ^ s ^ c, n = 1859775393) : e < 60 ? (r = a & s | c & (a | s), n = 2400959708) : (r = a ^ s ^ c, n = 3395469782);
                        let t = (o << 5 | o >>> 27) + r + l + n + i[e] & 4294967295;
                        l = c, c = s, s = (a << 30 | a >>> 2) & 4294967295, a = o, o = t
                    }
                    this.chain_[0] = this.chain_[0] + o & 4294967295, this.chain_[1] = this.chain_[1] + a & 4294967295, this.chain_[2] = this.chain_[2] + s & 4294967295, this.chain_[3] = this.chain_[3] + c & 4294967295, this.chain_[4] = this.chain_[4] + l & 4294967295
                }
                update(e, t) {
                    if (null == e) return;
                    void 0 === t && (t = e.length);
                    let r = t - this.blockSize,
                        n = 0,
                        i = this.buf_,
                        o = this.inbuf_;
                    for (; n < t;) {
                        if (0 === o)
                            for (; n <= r;) this.compress_(e, n), n += this.blockSize;
                        if ("string" == typeof e) {
                            for (; n < t;)
                                if (i[o] = e.charCodeAt(n), ++o, ++n, o === this.blockSize) {
                                    this.compress_(i), o = 0;
                                    break
                                }
                        } else
                            for (; n < t;)
                                if (i[o] = e[n], ++o, ++n, o === this.blockSize) {
                                    this.compress_(i), o = 0;
                                    break
                                }
                    }
                    this.inbuf_ = o, this.total_ += t
                }
                digest() {
                    let e = [],
                        t = 8 * this.total_;
                    this.inbuf_ < 56 ? this.update(this.pad_, 56 - this.inbuf_) : this.update(this.pad_, this.blockSize - (this.inbuf_ - 56));
                    for (let e = this.blockSize - 1; e >= 56; e--) this.buf_[e] = 255 & t, t /= 256;
                    this.compress_(this.buf_);
                    let r = 0;
                    for (let t = 0; t < 5; t++)
                        for (let n = 24; n >= 0; n -= 8) e[r] = this.chain_[t] >> n & 255, ++r;
                    return e
                }
            };

            function createSubscribe(e, t) {
                let r = new ObserverProxy(e, t);
                return r.subscribe.bind(r)
            }
            let ObserverProxy = class ObserverProxy {
                constructor(e, t) {
                    this.observers = [], this.unsubscribes = [], this.observerCount = 0, this.task = Promise.resolve(), this.finalized = !1, this.onNoObservers = t, this.task.then(() => {
                        e(this)
                    }).catch(e => {
                        this.error(e)
                    })
                }
                next(e) {
                    this.forEachObserver(t => {
                        t.next(e)
                    })
                }
                error(e) {
                    this.forEachObserver(t => {
                        t.error(e)
                    }), this.close(e)
                }
                complete() {
                    this.forEachObserver(e => {
                        e.complete()
                    }), this.close()
                }
                subscribe(e, t, r) {
                    let n;
                    if (void 0 === e && void 0 === t && void 0 === r) throw Error("Missing Observer.");
                    void 0 === (n = ! function(e, t) {
                        if ("object" != typeof e || null === e) return !1;
                        for (let r of t)
                            if (r in e && "function" == typeof e[r]) return !0;
                        return !1
                    }(e, ["next", "error", "complete"]) ? {
                        next: e,
                        error: t,
                        complete: r
                    } : e).next && (n.next = noop), void 0 === n.error && (n.error = noop), void 0 === n.complete && (n.complete = noop);
                    let i = this.unsubscribeOne.bind(this, this.observers.length);
                    return this.finalized && this.task.then(() => {
                        try {
                            this.finalError ? n.error(this.finalError) : n.complete()
                        } catch (e) {}
                    }), this.observers.push(n), i
                }
                unsubscribeOne(e) {
                    void 0 !== this.observers && void 0 !== this.observers[e] && (delete this.observers[e], this.observerCount -= 1, 0 === this.observerCount && void 0 !== this.onNoObservers && this.onNoObservers(this))
                }
                forEachObserver(e) {
                    if (!this.finalized)
                        for (let t = 0; t < this.observers.length; t++) this.sendOne(t, e)
                }
                sendOne(e, t) {
                    this.task.then(() => {
                        if (void 0 !== this.observers && void 0 !== this.observers[e]) try {
                            t(this.observers[e])
                        } catch (e) {
                            "undefined" != typeof console && console.error && console.error(e)
                        }
                    })
                }
                close(e) {
                    this.finalized || (this.finalized = !0, void 0 !== e && (this.finalError = e), this.task.then(() => {
                        this.observers = void 0, this.onNoObservers = void 0
                    }))
                }
            };

            function noop() {}

            function errorPrefix(e, t) {
                return `${e} failed: ${t} argument `
            }
            let stringToByteArray = function(e) {
                    let t = [],
                        r = 0;
                    for (let n = 0; n < e.length; n++) {
                        let i = e.charCodeAt(n);
                        if (i >= 55296 && i <= 56319) {
                            let t = i - 55296;
                            assert(++n < e.length, "Surrogate pair missing trail surrogate.");
                            let r = e.charCodeAt(n) - 56320;
                            i = 65536 + (t << 10) + r
                        }
                        i < 128 ? t[r++] = i : (i < 2048 ? t[r++] = i >> 6 | 192 : (i < 65536 ? t[r++] = i >> 12 | 224 : (t[r++] = i >> 18 | 240, t[r++] = i >> 12 & 63 | 128), t[r++] = i >> 6 & 63 | 128), t[r++] = 63 & i | 128)
                    }
                    return t
                },
                stringLength = function(e) {
                    let t = 0;
                    for (let r = 0; r < e.length; r++) {
                        let n = e.charCodeAt(r);
                        n < 128 ? t++ : n < 2048 ? t += 2 : n >= 55296 && n <= 56319 ? (t += 4, r++) : t += 3
                    }
                    return t
                };

            function calculateBackoffMillis(e, t = 1e3, r = 2) {
                let n = t * Math.pow(r, e);
                return Math.min(144e5, n + Math.round(.5 * n * (Math.random() - .5) * 2))
            }

            function getModularInstance(e) {
                return e && e._delegate ? e._delegate : e
            }
        },
        32238: function(e, t, r) {
            r.d(t, {
                Af: function() {
                    return d
                },
                C6: function() {
                    return getApps
                },
                H9: function() {
                    return _addComponent
                },
                Jn: function() {
                    return g
                },
                KN: function() {
                    return registerVersion
                },
                Mq: function() {
                    return getApp
                },
                P2: function() {
                    return deleteApp
                },
                TP: function() {
                    return onLog
                },
                Ub: function() {
                    return setLogLevel
                },
                Vr: function() {
                    return _addOrOverwriteComponent
                },
                Xd: function() {
                    return _registerComponent
                },
                Z8: function() {
                    return _clearComponents
                },
                ZF: function() {
                    return initializeApp
                },
                ZR: function() {
                    return o.ZR
                },
                l4: function() {
                    return u
                },
                lz: function() {
                    return f
                },
                qX: function() {
                    return _getProvider
                },
                wN: function() {
                    return _removeServiceInstance
                }
            });
            var n = r(8463),
                i = r(53333),
                o = r(74444),
                a = r(26531);
            let PlatformLoggerServiceImpl = class PlatformLoggerServiceImpl {
                constructor(e) {
                    this.container = e
                }
                getPlatformInfoString() {
                    let e = this.container.getProviders();
                    return e.map(e => {
                        if (! function(e) {
                                let t = e.getComponent();
                                return (null == t ? void 0 : t.type) === "VERSION"
                            }(e)) return null; {
                            let t = e.getImmediate();
                            return `${t.library}/${t.version}`
                        }
                    }).filter(e => e).join(" ")
                }
            };
            let s = "@firebase/app",
                c = "0.9.13",
                l = new i.Yd("@firebase/app"),
                u = "[DEFAULT]",
                h = {
                    [s]: "fire-core",
                    "@firebase/app-compat": "fire-core-compat",
                    "@firebase/analytics": "fire-analytics",
                    "@firebase/analytics-compat": "fire-analytics-compat",
                    "@firebase/app-check": "fire-app-check",
                    "@firebase/app-check-compat": "fire-app-check-compat",
                    "@firebase/auth": "fire-auth",
                    "@firebase/auth-compat": "fire-auth-compat",
                    "@firebase/database": "fire-rtdb",
                    "@firebase/database-compat": "fire-rtdb-compat",
                    "@firebase/functions": "fire-fn",
                    "@firebase/functions-compat": "fire-fn-compat",
                    "@firebase/installations": "fire-iid",
                    "@firebase/installations-compat": "fire-iid-compat",
                    "@firebase/messaging": "fire-fcm",
                    "@firebase/messaging-compat": "fire-fcm-compat",
                    "@firebase/performance": "fire-perf",
                    "@firebase/performance-compat": "fire-perf-compat",
                    "@firebase/remote-config": "fire-rc",
                    "@firebase/remote-config-compat": "fire-rc-compat",
                    "@firebase/storage": "fire-gcs",
                    "@firebase/storage-compat": "fire-gcs-compat",
                    "@firebase/firestore": "fire-fst",
                    "@firebase/firestore-compat": "fire-fst-compat",
                    "fire-js": "fire-js",
                    firebase: "fire-js-all"
                },
                d = new Map,
                f = new Map;

            function _addComponent(e, t) {
                try {
                    e.container.addComponent(t)
                } catch (r) {
                    l.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`, r)
                }
            }

            function _addOrOverwriteComponent(e, t) {
                e.container.addOrOverwriteComponent(t)
            }

            function _registerComponent(e) {
                let t = e.name;
                if (f.has(t)) return l.debug(`There were multiple attempts to register component ${t}.`), !1;
                for (let r of (f.set(t, e), d.values())) _addComponent(r, e);
                return !0
            }

            function _getProvider(e, t) {
                let r = e.container.getProvider("heartbeat").getImmediate({
                    optional: !0
                });
                return r && r.triggerHeartbeat(), e.container.getProvider(t)
            }

            function _removeServiceInstance(e, t, r = u) {
                _getProvider(e, t).clearInstance(r)
            }

            function _clearComponents() {
                f.clear()
            }
            let p = new o.LL("app", "Firebase", {
                "no-app": "No Firebase App '{$appName}' has been created - call initializeApp() first",
                "bad-app-name": "Illegal App name: '{$appName}",
                "duplicate-app": "Firebase App named '{$appName}' already exists with different options or config",
                "app-deleted": "Firebase App named '{$appName}' already deleted",
                "no-options": "Need to provide options, when not being deployed to hosting via source.",
                "invalid-app-argument": "firebase.{$appName}() takes either no argument or a Firebase App instance.",
                "invalid-log-argument": "First argument to `onLog` must be null or a function.",
                "idb-open": "Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",
                "idb-get": "Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",
                "idb-set": "Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",
                "idb-delete": "Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."
            });
            let FirebaseAppImpl = class FirebaseAppImpl {
                constructor(e, t, r) {
                    this._isDeleted = !1, this._options = Object.assign({}, e), this._config = Object.assign({}, t), this._name = t.name, this._automaticDataCollectionEnabled = t.automaticDataCollectionEnabled, this._container = r, this.container.addComponent(new n.wA("app", () => this, "PUBLIC"))
                }
                get automaticDataCollectionEnabled() {
                    return this.checkDestroyed(), this._automaticDataCollectionEnabled
                }
                set automaticDataCollectionEnabled(e) {
                    this.checkDestroyed(), this._automaticDataCollectionEnabled = e
                }
                get name() {
                    return this.checkDestroyed(), this._name
                }
                get options() {
                    return this.checkDestroyed(), this._options
                }
                get config() {
                    return this.checkDestroyed(), this._config
                }
                get container() {
                    return this._container
                }
                get isDeleted() {
                    return this._isDeleted
                }
                set isDeleted(e) {
                    this._isDeleted = e
                }
                checkDestroyed() {
                    if (this.isDeleted) throw p.create("app-deleted", {
                        appName: this._name
                    })
                }
            };
            let g = "9.23.0";

            function initializeApp(e, t = {}) {
                let r = e;
                if ("object" != typeof t) {
                    let e = t;
                    t = {
                        name: e
                    }
                }
                let i = Object.assign({
                        name: u,
                        automaticDataCollectionEnabled: !1
                    }, t),
                    a = i.name;
                if ("string" != typeof a || !a) throw p.create("bad-app-name", {
                    appName: String(a)
                });
                if (r || (r = (0, o.aH)()), !r) throw p.create("no-options");
                let s = d.get(a);
                if (s) {
                    if ((0, o.vZ)(r, s.options) && (0, o.vZ)(i, s.config)) return s;
                    throw p.create("duplicate-app", {
                        appName: a
                    })
                }
                let c = new n.H0(a);
                for (let e of f.values()) c.addComponent(e);
                let l = new FirebaseAppImpl(r, i, c);
                return d.set(a, l), l
            }

            function getApp(e = u) {
                let t = d.get(e);
                if (!t && e === u && (0, o.aH)()) return initializeApp();
                if (!t) throw p.create("no-app", {
                    appName: e
                });
                return t
            }

            function getApps() {
                return Array.from(d.values())
            }
            async function deleteApp(e) {
                let t = e.name;
                d.has(t) && (d.delete(t), await Promise.all(e.container.getProviders().map(e => e.delete())), e.isDeleted = !0)
            }

            function registerVersion(e, t, r) {
                var i;
                let o = null !== (i = h[e]) && void 0 !== i ? i : e;
                r && (o += `-${r}`);
                let a = o.match(/\s|\//),
                    s = t.match(/\s|\//);
                if (a || s) {
                    let e = [`Unable to register library "${o}" with version "${t}":`];
                    a && e.push(`library name "${o}" contains illegal characters (whitespace or "/")`), a && s && e.push("and"), s && e.push(`version name "${t}" contains illegal characters (whitespace or "/")`), l.warn(e.join(" "));
                    return
                }
                _registerComponent(new n.wA(`${o}-version`, () => ({
                    library: o,
                    version: t
                }), "VERSION"))
            }

            function onLog(e, t) {
                if (null !== e && "function" != typeof e) throw p.create("invalid-log-argument");
                (0, i.Am)(e, t)
            }

            function setLogLevel(e) {
                (0, i.Ub)(e)
            }
            let b = "firebase-heartbeat-store",
                m = null;

            function getDbPromise() {
                return m || (m = (0, a.X3)("firebase-heartbeat-database", 1, {
                    upgrade: (e, t) => {
                        0 === t && e.createObjectStore(b)
                    }
                }).catch(e => {
                    throw p.create("idb-open", {
                        originalErrorMessage: e.message
                    })
                })), m
            }
            async function readHeartbeatsFromIndexedDB(e) {
                try {
                    let t = await getDbPromise(),
                        r = await t.transaction(b).objectStore(b).get(computeKey(e));
                    return r
                } catch (e) {
                    if (e instanceof o.ZR) l.warn(e.message);
                    else {
                        let t = p.create("idb-get", {
                            originalErrorMessage: null == e ? void 0 : e.message
                        });
                        l.warn(t.message)
                    }
                }
            }
            async function writeHeartbeatsToIndexedDB(e, t) {
                try {
                    let r = await getDbPromise(),
                        n = r.transaction(b, "readwrite"),
                        i = n.objectStore(b);
                    await i.put(t, computeKey(e)), await n.done
                } catch (e) {
                    if (e instanceof o.ZR) l.warn(e.message);
                    else {
                        let t = p.create("idb-set", {
                            originalErrorMessage: null == e ? void 0 : e.message
                        });
                        l.warn(t.message)
                    }
                }
            }

            function computeKey(e) {
                return `${e.name}!${e.options.appId}`
            }
            let HeartbeatServiceImpl = class HeartbeatServiceImpl {
                constructor(e) {
                    this.container = e, this._heartbeatsCache = null;
                    let t = this.container.getProvider("app").getImmediate();
                    this._storage = new HeartbeatStorageImpl(t), this._heartbeatsCachePromise = this._storage.read().then(e => (this._heartbeatsCache = e, e))
                }
                async triggerHeartbeat() {
                    let e = this.container.getProvider("platform-logger").getImmediate(),
                        t = e.getPlatformInfoString(),
                        r = getUTCDateString();
                    return (null === this._heartbeatsCache && (this._heartbeatsCache = await this._heartbeatsCachePromise), this._heartbeatsCache.lastSentHeartbeatDate === r || this._heartbeatsCache.heartbeats.some(e => e.date === r)) ? void 0 : (this._heartbeatsCache.heartbeats.push({
                        date: r,
                        agent: t
                    }), this._heartbeatsCache.heartbeats = this._heartbeatsCache.heartbeats.filter(e => {
                        let t = new Date(e.date).valueOf(),
                            r = Date.now();
                        return r - t <= 2592e6
                    }), this._storage.overwrite(this._heartbeatsCache))
                }
                async getHeartbeatsHeader() {
                    if (null === this._heartbeatsCache && await this._heartbeatsCachePromise, null === this._heartbeatsCache || 0 === this._heartbeatsCache.heartbeats.length) return "";
                    let e = getUTCDateString(),
                        {
                            heartbeatsToSend: t,
                            unsentEntries: r
                        } = function(e, t = 1024) {
                            let r = [],
                                n = e.slice();
                            for (let i of e) {
                                let e = r.find(e => e.agent === i.agent);
                                if (e) {
                                    if (e.dates.push(i.date), countBytes(r) > t) {
                                        e.dates.pop();
                                        break
                                    }
                                } else if (r.push({
                                        agent: i.agent,
                                        dates: [i.date]
                                    }), countBytes(r) > t) {
                                    r.pop();
                                    break
                                }
                                n = n.slice(1)
                            }
                            return {
                                heartbeatsToSend: r,
                                unsentEntries: n
                            }
                        }(this._heartbeatsCache.heartbeats),
                        n = (0, o.L)(JSON.stringify({
                            version: 2,
                            heartbeats: t
                        }));
                    return this._heartbeatsCache.lastSentHeartbeatDate = e, r.length > 0 ? (this._heartbeatsCache.heartbeats = r, await this._storage.overwrite(this._heartbeatsCache)) : (this._heartbeatsCache.heartbeats = [], this._storage.overwrite(this._heartbeatsCache)), n
                }
            };

            function getUTCDateString() {
                let e = new Date;
                return e.toISOString().substring(0, 10)
            }
            let HeartbeatStorageImpl = class HeartbeatStorageImpl {
                constructor(e) {
                    this.app = e, this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck()
                }
                async runIndexedDBEnvironmentCheck() {
                    return !!(0, o.hl)() && (0, o.eu)().then(() => !0).catch(() => !1)
                }
                async read() {
                    let e = await this._canUseIndexedDBPromise;
                    if (!e) return {
                        heartbeats: []
                    }; {
                        let e = await readHeartbeatsFromIndexedDB(this.app);
                        return e || {
                            heartbeats: []
                        }
                    }
                }
                async overwrite(e) {
                    var t;
                    let r = await this._canUseIndexedDBPromise;
                    if (r) {
                        let r = await this.read();
                        return writeHeartbeatsToIndexedDB(this.app, {
                            lastSentHeartbeatDate: null !== (t = e.lastSentHeartbeatDate) && void 0 !== t ? t : r.lastSentHeartbeatDate,
                            heartbeats: e.heartbeats
                        })
                    }
                }
                async add(e) {
                    var t;
                    let r = await this._canUseIndexedDBPromise;
                    if (r) {
                        let r = await this.read();
                        return writeHeartbeatsToIndexedDB(this.app, {
                            lastSentHeartbeatDate: null !== (t = e.lastSentHeartbeatDate) && void 0 !== t ? t : r.lastSentHeartbeatDate,
                            heartbeats: [...r.heartbeats, ...e.heartbeats]
                        })
                    }
                }
            };

            function countBytes(e) {
                return (0, o.L)(JSON.stringify({
                    version: 2,
                    heartbeats: e
                })).length
            }
            _registerComponent(new n.wA("platform-logger", e => new PlatformLoggerServiceImpl(e), "PRIVATE")), _registerComponent(new n.wA("heartbeat", e => new HeartbeatServiceImpl(e), "PRIVATE")), registerVersion(s, c, ""), registerVersion(s, c, "esm2017"), registerVersion("fire-js", "")
        },
        8463: function(e, t, r) {
            r.d(t, {
                H0: function() {
                    return ComponentContainer
                },
                wA: function() {
                    return Component
                }
            });
            var n = r(74444);
            let Component = class Component {
                constructor(e, t, r) {
                    this.name = e, this.instanceFactory = t, this.type = r, this.multipleInstances = !1, this.serviceProps = {}, this.instantiationMode = "LAZY", this.onInstanceCreated = null
                }
                setInstantiationMode(e) {
                    return this.instantiationMode = e, this
                }
                setMultipleInstances(e) {
                    return this.multipleInstances = e, this
                }
                setServiceProps(e) {
                    return this.serviceProps = e, this
                }
                setInstanceCreatedCallback(e) {
                    return this.onInstanceCreated = e, this
                }
            };
            let i = "[DEFAULT]";
            let Provider = class Provider {
                constructor(e, t) {
                    this.name = e, this.container = t, this.component = null, this.instances = new Map, this.instancesDeferred = new Map, this.instancesOptions = new Map, this.onInitCallbacks = new Map
                }
                get(e) {
                    let t = this.normalizeInstanceIdentifier(e);
                    if (!this.instancesDeferred.has(t)) {
                        let e = new n.BH;
                        if (this.instancesDeferred.set(t, e), this.isInitialized(t) || this.shouldAutoInitialize()) try {
                            let r = this.getOrInitializeService({
                                instanceIdentifier: t
                            });
                            r && e.resolve(r)
                        } catch (e) {}
                    }
                    return this.instancesDeferred.get(t).promise
                }
                getImmediate(e) {
                    var t;
                    let r = this.normalizeInstanceIdentifier(null == e ? void 0 : e.identifier),
                        n = null !== (t = null == e ? void 0 : e.optional) && void 0 !== t && t;
                    if (this.isInitialized(r) || this.shouldAutoInitialize()) try {
                        return this.getOrInitializeService({
                            instanceIdentifier: r
                        })
                    } catch (e) {
                        if (n) return null;
                        throw e
                    } else {
                        if (n) return null;
                        throw Error(`Service ${this.name} is not available`)
                    }
                }
                getComponent() {
                    return this.component
                }
                setComponent(e) {
                    if (e.name !== this.name) throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);
                    if (this.component) throw Error(`Component for ${this.name} has already been provided`);
                    if (this.component = e, this.shouldAutoInitialize()) {
                        if ("EAGER" === e.instantiationMode) try {
                            this.getOrInitializeService({
                                instanceIdentifier: i
                            })
                        } catch (e) {}
                        for (let [e, t] of this.instancesDeferred.entries()) {
                            let r = this.normalizeInstanceIdentifier(e);
                            try {
                                let e = this.getOrInitializeService({
                                    instanceIdentifier: r
                                });
                                t.resolve(e)
                            } catch (e) {}
                        }
                    }
                }
                clearInstance(e = i) {
                    this.instancesDeferred.delete(e), this.instancesOptions.delete(e), this.instances.delete(e)
                }
                async delete() {
                    let e = Array.from(this.instances.values());
                    await Promise.all([...e.filter(e => "INTERNAL" in e).map(e => e.INTERNAL.delete()), ...e.filter(e => "_delete" in e).map(e => e._delete())])
                }
                isComponentSet() {
                    return null != this.component
                }
                isInitialized(e = i) {
                    return this.instances.has(e)
                }
                getOptions(e = i) {
                    return this.instancesOptions.get(e) || {}
                }
                initialize(e = {}) {
                    let {
                        options: t = {}
                    } = e, r = this.normalizeInstanceIdentifier(e.instanceIdentifier);
                    if (this.isInitialized(r)) throw Error(`${this.name}(${r}) has already been initialized`);
                    if (!this.isComponentSet()) throw Error(`Component ${this.name} has not been registered yet`);
                    let n = this.getOrInitializeService({
                        instanceIdentifier: r,
                        options: t
                    });
                    for (let [e, t] of this.instancesDeferred.entries()) {
                        let i = this.normalizeInstanceIdentifier(e);
                        r === i && t.resolve(n)
                    }
                    return n
                }
                onInit(e, t) {
                    var r;
                    let n = this.normalizeInstanceIdentifier(t),
                        i = null !== (r = this.onInitCallbacks.get(n)) && void 0 !== r ? r : new Set;
                    i.add(e), this.onInitCallbacks.set(n, i);
                    let o = this.instances.get(n);
                    return o && e(o, n), () => {
                        i.delete(e)
                    }
                }
                invokeOnInitCallbacks(e, t) {
                    let r = this.onInitCallbacks.get(t);
                    if (r)
                        for (let n of r) try {
                            n(e, t)
                        } catch (e) {}
                }
                getOrInitializeService({
                    instanceIdentifier: e,
                    options: t = {}
                }) {
                    let r = this.instances.get(e);
                    if (!r && this.component && (r = this.component.instanceFactory(this.container, {
                            instanceIdentifier: e === i ? void 0 : e,
                            options: t
                        }), this.instances.set(e, r), this.instancesOptions.set(e, t), this.invokeOnInitCallbacks(r, e), this.component.onInstanceCreated)) try {
                        this.component.onInstanceCreated(this.container, e, r)
                    } catch (e) {}
                    return r || null
                }
                normalizeInstanceIdentifier(e = i) {
                    return this.component ? this.component.multipleInstances ? e : i : e
                }
                shouldAutoInitialize() {
                    return !!this.component && "EXPLICIT" !== this.component.instantiationMode
                }
            };
            let ComponentContainer = class ComponentContainer {
                constructor(e) {
                    this.name = e, this.providers = new Map
                }
                addComponent(e) {
                    let t = this.getProvider(e.name);
                    if (t.isComponentSet()) throw Error(`Component ${e.name} has already been registered with ${this.name}`);
                    t.setComponent(e)
                }
                addOrOverwriteComponent(e) {
                    let t = this.getProvider(e.name);
                    t.isComponentSet() && this.providers.delete(e.name), this.addComponent(e)
                }
                getProvider(e) {
                    if (this.providers.has(e)) return this.providers.get(e);
                    let t = new Provider(e, this);
                    return this.providers.set(e, t), t
                }
                getProviders() {
                    return Array.from(this.providers.values())
                }
            }
        },
        53333: function(e, t, r) {
            var n, i;
            r.d(t, {
                Am: function() {
                    return setUserLogHandler
                },
                Ub: function() {
                    return setLogLevel
                },
                Yd: function() {
                    return Logger
                },
                in: function() {
                    return n
                }
            });
            let o = [];
            (i = n || (n = {}))[i.DEBUG = 0] = "DEBUG", i[i.VERBOSE = 1] = "VERBOSE", i[i.INFO = 2] = "INFO", i[i.WARN = 3] = "WARN", i[i.ERROR = 4] = "ERROR", i[i.SILENT = 5] = "SILENT";
            let a = {
                    debug: n.DEBUG,
                    verbose: n.VERBOSE,
                    info: n.INFO,
                    warn: n.WARN,
                    error: n.ERROR,
                    silent: n.SILENT
                },
                s = n.INFO,
                c = {
                    [n.DEBUG]: "log",
                    [n.VERBOSE]: "log",
                    [n.INFO]: "info",
                    [n.WARN]: "warn",
                    [n.ERROR]: "error"
                },
                defaultLogHandler = (e, t, ...r) => {
                    if (t < e.logLevel) return;
                    let n = new Date().toISOString(),
                        i = c[t];
                    if (i) console[i](`[${n}]  ${e.name}:`, ...r);
                    else throw Error(`Attempted to log a message with an invalid logType (value: ${t})`)
                };
            let Logger = class Logger {
                constructor(e) {
                    this.name = e, this._logLevel = s, this._logHandler = defaultLogHandler, this._userLogHandler = null, o.push(this)
                }
                get logLevel() {
                    return this._logLevel
                }
                set logLevel(e) {
                    if (!(e in n)) throw TypeError(`Invalid value "${e}" assigned to \`logLevel\``);
                    this._logLevel = e
                }
                setLogLevel(e) {
                    this._logLevel = "string" == typeof e ? a[e] : e
                }
                get logHandler() {
                    return this._logHandler
                }
                set logHandler(e) {
                    if ("function" != typeof e) throw TypeError("Value assigned to `logHandler` must be a function");
                    this._logHandler = e
                }
                get userLogHandler() {
                    return this._userLogHandler
                }
                set userLogHandler(e) {
                    this._userLogHandler = e
                }
                debug(...e) {
                    this._userLogHandler && this._userLogHandler(this, n.DEBUG, ...e), this._logHandler(this, n.DEBUG, ...e)
                }
                log(...e) {
                    this._userLogHandler && this._userLogHandler(this, n.VERBOSE, ...e), this._logHandler(this, n.VERBOSE, ...e)
                }
                info(...e) {
                    this._userLogHandler && this._userLogHandler(this, n.INFO, ...e), this._logHandler(this, n.INFO, ...e)
                }
                warn(...e) {
                    this._userLogHandler && this._userLogHandler(this, n.WARN, ...e), this._logHandler(this, n.WARN, ...e)
                }
                error(...e) {
                    this._userLogHandler && this._userLogHandler(this, n.ERROR, ...e), this._logHandler(this, n.ERROR, ...e)
                }
            };

            function setLogLevel(e) {
                o.forEach(t => {
                    t.setLogLevel(e)
                })
            }

            function setUserLogHandler(e, t) {
                for (let r of o) {
                    let i = null;
                    t && t.level && (i = a[t.level]), null === e ? r.userLogHandler = null : r.userLogHandler = (t, r, ...o) => {
                        let a = o.map(e => {
                            if (null == e) return null;
                            if ("string" == typeof e) return e;
                            if ("number" == typeof e || "boolean" == typeof e) return e.toString();
                            if (e instanceof Error) return e.message;
                            try {
                                return JSON.stringify(e)
                            } catch (e) {
                                return null
                            }
                        }).filter(e => e).join(" ");
                        r >= (null != i ? i : t.logLevel) && e({
                            level: n[r].toLowerCase(),
                            message: a,
                            args: o,
                            type: t.name
                        })
                    }
                }
            }
        },
        26531: function(e, t, r) {
            var n;
            let i, o;
            r.d(t, {
                Lj: function() {
                    return deleteDB
                },
                X3: function() {
                    return openDB
                }
            });
            let instanceOfAny = (e, t) => t.some(t => e instanceof t),
                a = new WeakMap,
                s = new WeakMap,
                c = new WeakMap,
                l = new WeakMap,
                u = new WeakMap,
                h = {
                    get(e, t, r) {
                        if (e instanceof IDBTransaction) {
                            if ("done" === t) return s.get(e);
                            if ("objectStoreNames" === t) return e.objectStoreNames || c.get(e);
                            if ("store" === t) return r.objectStoreNames[1] ? void 0 : r.objectStore(r.objectStoreNames[0])
                        }
                        return wrap(e[t])
                    },
                    set: (e, t, r) => (e[t] = r, !0),
                    has: (e, t) => e instanceof IDBTransaction && ("done" === t || "store" === t) || t in e
                };

            function wrap(e) {
                var t;
                if (e instanceof IDBRequest) return function(e) {
                    let t = new Promise((t, r) => {
                        let unlisten = () => {
                                e.removeEventListener("success", success), e.removeEventListener("error", error)
                            },
                            success = () => {
                                t(wrap(e.result)), unlisten()
                            },
                            error = () => {
                                r(e.error), unlisten()
                            };
                        e.addEventListener("success", success), e.addEventListener("error", error)
                    });
                    return t.then(t => {
                        t instanceof IDBCursor && a.set(t, e)
                    }).catch(() => {}), u.set(t, e), t
                }(e);
                if (l.has(e)) return l.get(e);
                let r = "function" == typeof(t = e) ? t !== IDBDatabase.prototype.transaction || "objectStoreNames" in IDBTransaction.prototype ? (o || (o = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])).includes(t) ? function(...e) {
                    return t.apply(unwrap(this), e), wrap(a.get(this))
                } : function(...e) {
                    return wrap(t.apply(unwrap(this), e))
                } : function(e, ...r) {
                    let n = t.call(unwrap(this), e, ...r);
                    return c.set(n, e.sort ? e.sort() : [e]), wrap(n)
                } : (t instanceof IDBTransaction && function(e) {
                    if (s.has(e)) return;
                    let t = new Promise((t, r) => {
                        let unlisten = () => {
                                e.removeEventListener("complete", complete), e.removeEventListener("error", error), e.removeEventListener("abort", error)
                            },
                            complete = () => {
                                t(), unlisten()
                            },
                            error = () => {
                                r(e.error || new DOMException("AbortError", "AbortError")), unlisten()
                            };
                        e.addEventListener("complete", complete), e.addEventListener("error", error), e.addEventListener("abort", error)
                    });
                    s.set(e, t)
                }(t), instanceOfAny(t, i || (i = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction]))) ? new Proxy(t, h) : t;
                return r !== e && (l.set(e, r), u.set(r, e)), r
            }
            let unwrap = e => u.get(e);

            function openDB(e, t, {
                blocked: r,
                upgrade: n,
                blocking: i,
                terminated: o
            } = {}) {
                let a = indexedDB.open(e, t),
                    s = wrap(a);
                return n && a.addEventListener("upgradeneeded", e => {
                    n(wrap(a.result), e.oldVersion, e.newVersion, wrap(a.transaction), e)
                }), r && a.addEventListener("blocked", e => r(e.oldVersion, e.newVersion, e)), s.then(e => {
                    o && e.addEventListener("close", () => o()), i && e.addEventListener("versionchange", e => i(e.oldVersion, e.newVersion, e))
                }).catch(() => {}), s
            }

            function deleteDB(e, {
                blocked: t
            } = {}) {
                let r = indexedDB.deleteDatabase(e);
                return t && r.addEventListener("blocked", e => t(e.oldVersion, e)), wrap(r).then(() => void 0)
            }
            let d = ["get", "getKey", "getAll", "getAllKeys", "count"],
                f = ["put", "add", "delete", "clear"],
                p = new Map;

            function getMethod(e, t) {
                if (!(e instanceof IDBDatabase && !(t in e) && "string" == typeof t)) return;
                if (p.get(t)) return p.get(t);
                let r = t.replace(/FromIndex$/, ""),
                    n = t !== r,
                    i = f.includes(r);
                if (!(r in (n ? IDBIndex : IDBObjectStore).prototype) || !(i || d.includes(r))) return;
                let method = async function(e, ...t) {
                    let o = this.transaction(e, i ? "readwrite" : "readonly"),
                        a = o.store;
                    return n && (a = a.index(t.shift())), (await Promise.all([a[r](...t), i && o.done]))[0]
                };
                return p.set(t, method), method
            }
            h = { ...n = h,
                get: (e, t, r) => getMethod(e, t) || n.get(e, t, r),
                has: (e, t) => !!getMethod(e, t) || n.has(e, t)
            }
        }
    }
]);