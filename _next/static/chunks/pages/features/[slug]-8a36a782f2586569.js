(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2459], {
        6111: function(e, n, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/features/[slug]", function() {
                return t(21933)
            }])
        },
        21933: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                __N_SSG: function() {
                    return h
                },
                default: function() {
                    return SinglePost
                }
            });
            var i = t(85893),
                l = t(24847);
            t(67294);
            var o = t(41664),
                r = t.n(o),
                a = t(9099),
                d = t(6363),
                s = t.n(d),
                u = t(25675),
                c = t.n(u),
                SingleFeature_SingleFeatureHeader = function(e) {
                    var n = e.post;
                    return (0, i.jsxs)("div", {
                        className: s().header,
                        children: [(0, i.jsx)(c(), {
                            priority: !0,
                            src: "/images/aboutUs.webp",
                            alt: "NolanAI",
                            fill: !0,
                            sizes: "(max-width: 768px) 50vw, (max-width: 1200px) 100vw, 100vw",
                            style: {
                                objectFit: "cover"
                            }
                        }), (0, i.jsx)("div", {
                            className: s().content,
                            children: (0, i.jsxs)("div", {
                                className: s().wrapper,
                                children: [(0, i.jsxs)("div", {
                                    className: s().nolanTextWrapper,
                                    children: [(0, i.jsxs)("div", {
                                        className: s().nolan,
                                        children: [(0, i.jsx)(r(), {
                                            href: "/",
                                            children: "NOLAN"
                                        }), " // ", (0, i.jsx)(r(), {
                                            href: "/features",
                                            children: "FEATURES"
                                        }), " //"]
                                    }), (0, i.jsx)("div", {
                                        className: s().priceText,
                                        children: n.title
                                    })]
                                }), (0, i.jsxs)("div", {
                                    className: s().titleWrapper,
                                    children: [(0, i.jsx)("div", {
                                        className: s().iconContainer,
                                        children: (0, i.jsx)("div", {
                                            className: s().iconWrapper,
                                            style: {
                                                background: n.iconColor || "#1D6EE3"
                                            },
                                            children: (0, i.jsx)(a.Z, {
                                                outlined: !0,
                                                variant: "label-default",
                                                name: n.featureIcon,
                                                style: {
                                                    fontSize: 32
                                                }
                                            })
                                        })
                                    }), (0, i.jsx)("div", {
                                        className: s().price,
                                        children: n.title
                                    })]
                                })]
                            })
                        })]
                    })
                },
                _ = t(11163),
                g = t(16224),
                p = t(14803),
                v = t(6585),
                SingleFeature_SingleFeatureBody = function(e) {
                    var n = e.post,
                        t = (0, _.useRouter)();
                    return (0, i.jsxs)("div", {
                        className: s().blogItemWrapper,
                        children: [(0, i.jsx)("div", {
                            className: s().blogItemWrapperContent,
                            children: (0, i.jsx)("div", {
                                className: s().single,
                                children: (0, i.jsx)(g.Z, {
                                    post: n
                                })
                            })
                        }), (0, i.jsx)("div", {
                            children: (0, i.jsx)("div", {
                                style: {
                                    textAlign: "center"
                                },
                                children: (0, i.jsx)(p.Z, {
                                    size: "regular",
                                    color: "primary",
                                    mode: "contained",
                                    onClick: function() {
                                        return t.push("/login?t=signup")
                                    },
                                    children: "Get NolanAI FREE"
                                })
                            })
                        }), (0, i.jsx)(v.Z, {})]
                    })
                },
                SingleFeature_SingleFeature = function(e) {
                    var n = e.post;
                    return (0, i.jsxs)("div", {
                        className: s().container,
                        children: [(0, i.jsx)(SingleFeature_SingleFeatureHeader, {
                            post: n
                        }), (0, i.jsx)(SingleFeature_SingleFeatureBody, {
                            post: n
                        })]
                    })
                },
                containers_SingleFeatureContainer = function(e) {
                    var n = e.post;
                    return (0, i.jsx)(SingleFeature_SingleFeature, {
                        post: n
                    })
                },
                h = !0;

            function SinglePost(e) {
                var n = e.post;
                return (0, i.jsx)(containers_SingleFeatureContainer, {
                    post: n
                })
            }
            SinglePost.Layout = l.Z
        },
        16224: function(e, n, t) {
            "use strict";
            t.d(n, {
                Z: function() {
                    return BlogSingleContent_BlogSingleContent
                }
            });
            var i = t(73292),
                l = t(85893);
            t(67294);
            var o = t(25675),
                r = t.n(o),
                a = t(74129),
                d = t(86437),
                s = t(3981),
                u = t.n(s),
                BlogSingleContent_BlogSingleContent = function(e) {
                    var n, t = e.post,
                        o = {
                            renderNode: (n = {}, (0, i._)(n, d.BLOCKS.EMBEDDED_ASSET, function(e) {
                                var n, i, o, a, d, s, c, _, g = null == e ? void 0 : null === (a = e.data) || void 0 === a ? void 0 : null === (o = a.target) || void 0 === o ? void 0 : null === (i = o.fields) || void 0 === i ? void 0 : null === (n = i.file) || void 0 === n ? void 0 : n.contentType,
                                    p = null == e ? void 0 : null === (_ = e.data) || void 0 === _ ? void 0 : null === (c = _.target) || void 0 === c ? void 0 : null === (s = c.fields) || void 0 === s ? void 0 : null === (d = s.file) || void 0 === d ? void 0 : d.url,
                                    v = e.data.target.sys.id;
                                return (0, l.jsx)("div", {
                                    className: u().imgWrapper,
                                    children: (0, l.jsx)("div", {
                                        className: u().imgContainer,
                                        children: "video/mp4" === g ? (0, l.jsx)("video", {
                                            style: {
                                                width: "100%",
                                                height: "100%"
                                            },
                                            controls: !0,
                                            children: (0, l.jsx)("source", {
                                                src: "https://".concat(p),
                                                type: g
                                            })
                                        }) : (0, l.jsx)(r(), {
                                            src: "/api/blog/images/".concat(v),
                                            style: {
                                                width: "100%",
                                                height: "100%"
                                            },
                                            width: 0,
                                            height: 0,
                                            alt: t.title,
                                            sizes: "50vw"
                                        })
                                    })
                                })
                            }), (0, i._)(n, d.BLOCKS.EMBEDDED_ENTRY, function(e) {
                                var n, t, i, o, a, d, s, c, _, g, p, v, h, m, x, f, S, j = null == e ? void 0 : null === (a = e.data) || void 0 === a ? void 0 : null === (o = a.target) || void 0 === o ? void 0 : null === (i = o.sys) || void 0 === i ? void 0 : null === (t = i.contentType) || void 0 === t ? void 0 : null === (n = t.sys) || void 0 === n ? void 0 : n.id,
                                    B = null == e ? void 0 : null === (p = e.data) || void 0 === p ? void 0 : null === (g = p.target) || void 0 === g ? void 0 : null === (_ = g.fields) || void 0 === _ ? void 0 : null === (c = _.before) || void 0 === c ? void 0 : null === (s = c.fields) || void 0 === s ? void 0 : null === (d = s.file) || void 0 === d ? void 0 : d.url,
                                    N = null == e ? void 0 : null === (S = e.data) || void 0 === S ? void 0 : null === (f = S.target) || void 0 === f ? void 0 : null === (x = f.fields) || void 0 === x ? void 0 : null === (m = x.after) || void 0 === m ? void 0 : null === (h = m.fields) || void 0 === h ? void 0 : null === (v = h.file) || void 0 === v ? void 0 : v.url;
                                return "compareEntry" === j ? (0, l.jsxs)("div", {
                                    className: u().compareWrapper,
                                    children: [B && (0, l.jsxs)("div", {
                                        className: u().compareElement,
                                        children: [(0, l.jsx)("h4", {
                                            children: "Before"
                                        }), (0, l.jsx)(r(), {
                                            src: "https:".concat(B),
                                            style: {
                                                width: "100%",
                                                height: "100%"
                                            },
                                            width: 0,
                                            height: 0,
                                            alt: "After",
                                            sizes: "50vw"
                                        })]
                                    }), N && (0, l.jsxs)("div", {
                                        className: u().compareElement,
                                        children: [(0, l.jsx)("h4", {
                                            children: "After"
                                        }), (0, l.jsx)(r(), {
                                            src: "https:".concat(N),
                                            style: {
                                                width: "100%",
                                                height: "100%"
                                            },
                                            width: 0,
                                            height: 0,
                                            alt: "Before",
                                            sizes: "50vw"
                                        })]
                                    })]
                                }) : null
                            }), n)
                        };
                    return (0, l.jsx)("div", {
                        className: u().container,
                        children: (0, a.h)(t, o)
                    })
                }
        },
        14803: function(e, n, t) {
            "use strict";
            t.d(n, {
                Z: function() {
                    return _
                }
            });
            var i = t(73292),
                l = t(76341),
                o = t(67462),
                r = t(32207),
                a = t(85893);
            t(67294);
            var d = t(94184),
                s = t.n(d),
                u = t(1773),
                c = t.n(u),
                Button = function(e) {
                    var n, t = e.children,
                        d = e.onClick,
                        u = e.mode,
                        _ = e.loading,
                        g = e.disabled,
                        p = e.rounded,
                        v = e.color,
                        h = e.size,
                        m = e.className,
                        x = e.id,
                        f = e.name,
                        S = e.type,
                        j = e.tabIndex,
                        B = e.rightIcon,
                        N = e.leftIcon,
                        C = (0, r._)(e, ["children", "onClick", "mode", "loading", "disabled", "rounded", "color", "size", "className", "id", "name", "type", "tabIndex", "rightIcon", "leftIcon"]),
                        b = s()([c().button], [c()[v]], [c()[h]], m, (n = {}, (0, i._)(n, c().disabledButton, g), (0, i._)(n, c().outline, "outline" === u), (0, i._)(n, c().contained, "contained" === u), (0, i._)(n, c().link, "link" === u), (0, i._)(n, c().loading, _), (0, i._)(n, c().rounded, p), n));
                    return (0, a.jsxs)("button", (0, o._)((0, l._)({
                        type: S || "button",
                        className: b,
                        disabled: g,
                        onClick: d,
                        id: x,
                        name: f,
                        tabIndex: j
                    }, C), {
                        children: [N && (0, a.jsx)("div", {
                            style: {
                                width: 24
                            },
                            children: N
                        }), (0, a.jsx)("div", {
                            className: c().text,
                            children: t
                        }), B && B]
                    }))
                };
            Button.defaultProps = {
                children: null,
                onClick: function() {},
                color: "default",
                size: "regular",
                mode: "contained",
                rounded: !1,
                loading: !1,
                disabled: !1,
                className: null,
                leftIcon: null,
                rightIcon: null,
                id: null,
                name: null,
                tabIndex: null,
                type: "button"
            };
            var _ = Button
        },
        3981: function(e) {
            e.exports = {
                container: "BlogSingleContent_container__HAy9_",
                imgWrapper: "BlogSingleContent_imgWrapper__sp_9M",
                imgContainer: "BlogSingleContent_imgContainer__XM4B9",
                "single-blog-item__text": "BlogSingleContent_single-blog-item__text__yj5HP",
                bold: "BlogSingleContent_bold__nBYTP",
                title: "BlogSingleContent_title__n9kS7",
                blogTitle: "BlogSingleContent_blogTitle__N_lGC",
                compareWrapper: "BlogSingleContent_compareWrapper__jMn9T",
                compareElement: "BlogSingleContent_compareElement__kekZQ"
            }
        },
        1773: function(e) {
            e.exports = {
                button: "Button_button__IaV2_",
                rounded: "Button_rounded__d8r5_",
                small: "Button_small__KX87B",
                outline: "Button_outline__L2Kgu",
                contained: "Button_contained__t1eUM",
                regular: "Button_regular__CcMum",
                text: "Button_text__ILwkE",
                large: "Button_large__xXHPt",
                screenColor: "Button_screenColor__clsAu",
                link: "Button_link__OzdYE",
                default: "Button_default__JoTjL",
                primary: "Button_primary__NJ81B",
                secondary: "Button_secondary__U93ri",
                loading: "Button_loading__xW4BO",
                spin: "Button_spin__yo0MK"
            }
        },
        6363: function(e) {
            e.exports = {
                container: "SingleFeature_container__RqozS",
                header: "SingleFeature_header__JNuxT",
                content: "SingleFeature_content__grpKM",
                wrapper: "SingleFeature_wrapper__7sDvz",
                date: "SingleFeature_date__RRsBT",
                price: "SingleFeature_price__NDpxT",
                nolanTextWrapper: "SingleFeature_nolanTextWrapper__9PerR",
                nolan: "SingleFeature_nolan__ov_gZ",
                priceText: "SingleFeature_priceText__PKV_W",
                blogItemWrapper: "SingleFeature_blogItemWrapper__dXmzy",
                blogItemWrapperContent: "SingleFeature_blogItemWrapperContent__G6kq0",
                single: "SingleFeature_single__tpp_i",
                iconContainer: "SingleFeature_iconContainer__w3Tiy",
                iconWrapper: "SingleFeature_iconWrapper__hKEGx",
                titleWrapper: "SingleFeature_titleWrapper__uA7vU",
                circle1: "SingleFeature_circle1__zy6A9",
                circle2: "SingleFeature_circle2__zsray",
                circle3: "SingleFeature_circle3__hWi4i"
            }
        }
    },
    function(e) {
        e.O(0, [5680, 9774, 2888, 179], function() {
            return e(e.s = 6111)
        }), _N_E = e.O()
    }
]);