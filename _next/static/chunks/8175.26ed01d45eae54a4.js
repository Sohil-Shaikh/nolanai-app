(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8175], {
        45471: function(e, r, n) {
            "use strict";
            var t = n(64836).default;
            Object.defineProperty(r, "__esModule", {
                value: !0
            }), r.PresetStatusColorTypes = void 0, r.isPresetColor = function(e) {
                let r = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                return r ? [].concat((0, o.default)(a), (0, o.default)(s.PresetColors)).includes(e) : s.PresetColors.includes(e)
            }, r.isPresetStatusColor = function(e) {
                return i.includes(e)
            };
            var o = t(n(861)),
                s = n(36496);
            let a = s.PresetColors.map(e => `${e}-inverse`),
                i = r.PresetStatusColorTypes = ["success", "processing", "error", "default", "warning"]
        },
        47419: function(e, r, n) {
            "use strict";
            var t = n(75263).default;
            Object.defineProperty(r, "__esModule", {
                value: !0
            }), r.cloneElement = function(e, r) {
                return replaceElement(e, e, r)
            }, r.isFragment = function(e) {
                return e && s(e) && e.type === o.Fragment
            }, r.isValidElement = void 0, r.replaceElement = replaceElement;
            var o = t(n(67294));
            let {
                isValidElement: s
            } = o;

            function replaceElement(e, r, n) {
                return s(e) ? o.cloneElement(e, "function" == typeof n ? n(e.props || {}) : n) : r
            }
            r.isValidElement = s
        },
        5339: function(e, r, n) {
            "use strict";
            n.d(r, {
                Z: function() {
                    return WrapInBadge_WrapInBadge
                }
            });
            var t = n(76341),
                o = n(85893);
            n(67294);
            var s = n(84996),
                WrapInBadge_WrapInBadge = function(e) {
                    var r = e.badge,
                        n = e.children,
                        a = e.style,
                        i = void 0 === a ? {} : a;
                    return r ? (0, o.jsx)(s.Z, {
                        count: r.text,
                        color: r.color,
                        dot: r.dot,
                        status: r.status,
                        style: (0, t._)({}, i),
                        children: n
                    }) : n
                }
        },
        25800: function(e, r, n) {
            "use strict";
            n.d(r, {
                Z: function() {
                    return Avatar_Avatar
                }
            });
            var t = n(85893),
                o = n(67294),
                s = {
                    src: "/_next/static/media/user-profile.cbab685a.png"
                },
                a = n(54690),
                i = n.n(a),
                Avatar_Avatar = function(e) {
                    var r = e.image,
                        n = e.size,
                        a = e.className,
                        l = (0, o.useMemo)(function() {
                            return r ? r && "url(".concat(r, ")") : "none"
                        }, [r]);
                    return (0, t.jsx)("div", {
                        id: "avatarContainer",
                        className: "".concat(i().container, " ").concat(a),
                        style: {
                            width: n,
                            height: n,
                            backgroundImage: "".concat(l)
                        },
                        children: !r && (0, t.jsx)("img", {
                            src: s.src,
                            alt: "av"
                        })
                    })
                }
        },
        18968: function(e, r, n) {
            "use strict";
            n.r(r), n.d(r, {
                default: function() {
                    return Header_UserMenu
                }
            });
            var t = n(85893),
                o = n(67294),
                s = n(11163),
                a = n(13578),
                i = n(76341),
                l = n(67462),
                c = n(32207),
                u = n(41664),
                d = n.n(u),
                p = n(25800),
                f = n(5339),
                v = n(41613),
                _ = n.n(v),
                UserDropdown_UserDropdown = function(e) {
                    var r, n, s = e.hideName,
                        u = (0, c._)(e, ["hideName"]),
                        v = (0, o.useContext)(a.V),
                        g = (null == v ? void 0 : null === (r = v.profile) || void 0 === r ? void 0 : r.profile_picture) || (null == v ? void 0 : v.photoURL),
                        m = null == v ? void 0 : v.profileCompleteness,
                        h = (null == v ? void 0 : null === (n = v.profile) || void 0 === n ? void 0 : n.full_name) || (null == v ? void 0 : v.displayName);
                    return v && (0, t.jsx)("div", (0, l._)((0, i._)({}, u), {
                        className: _().container,
                        children: (0, t.jsx)(d(), {
                            href: "/profile",
                            children: void 0 !== s && s ? (0, t.jsx)("div", {
                                className: _().profileDropdownTrigger,
                                children: (0, t.jsx)("span", {
                                    children: (0, t.jsx)(f.Z, {
                                        badge: m < 100 && {
                                            dot: !0,
                                            color: "#DA8813",
                                            status: "processing"
                                        },
                                        children: (0, t.jsx)(p.Z, {
                                            size: 30,
                                            image: g
                                        })
                                    })
                                })
                            }) : (0, t.jsxs)("div", {
                                className: _().profileDropdownTrigger,
                                children: [(0, t.jsx)("span", {
                                    children: (0, t.jsx)(f.Z, {
                                        badge: m < 100 && {
                                            dot: !0,
                                            color: "#DA8813",
                                            status: "processing"
                                        },
                                        children: (0, t.jsx)(p.Z, {
                                            size: 30,
                                            image: g
                                        })
                                    })
                                }), (0, t.jsx)("span", {
                                    className: _().profileName,
                                    children: h
                                })]
                            })
                        })
                    }))
                },
                g = n(17509),
                m = n.n(g),
                Header_UserMenu = function() {
                    var e = (0, o.useContext)(a.V),
                        r = (0, s.useRouter)();
                    return (0, t.jsxs)(t.Fragment, {
                        children: [!e && (0, t.jsx)("div", {
                            onClick: function() {
                                return r.push("/login")
                            },
                            className: m().loginButtonContainer,
                            children: (0, t.jsx)("div", {
                                className: m().loginButtonWrapper,
                                children: (0, t.jsx)("div", {
                                    className: m().loginButtonText,
                                    children: "Log in"
                                })
                            })
                        }), (0, t.jsx)(UserDropdown_UserDropdown, {})]
                    })
                }
        },
        54690: function(e) {
            e.exports = {
                container: "Avatar_container__1T87Y",
                avatar: "Avatar_avatar__ZQ7ks"
            }
        },
        41613: function(e) {
            e.exports = {
                container: "UserDropdown_container__vFFb5",
                profileDropdownTrigger: "UserDropdown_profileDropdownTrigger__6daD1",
                profileName: "UserDropdown_profileName__k_cPz"
            }
        }
    }
]);