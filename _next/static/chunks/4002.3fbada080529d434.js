(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4002], {
        65899: function(e, t, i) {
            "use strict";
            var r = i(93128),
                o = i(85893),
                a = i(67294),
                n = i(25675),
                s = i.n(n);
            t.Z = function(e) {
                var t = e.style,
                    i = e.videoId,
                    n = e.autoShow,
                    l = (0, r._)((0, a.useState)(n || !1), 2),
                    c = l[0],
                    d = l[1];
                return (0, o.jsx)("div", {
                    children: c ? (0, o.jsx)("iframe", {
                        style: t || {},
                        loading: "lazy",
                        src: "https://www.youtube.com/embed/".concat(i),
                        title: "Nolan Demo Tutorial",
                        frameBorder: "0",
                        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                        allowFullScreen: !0
                    }) : (0, o.jsx)("div", {
                        className: "video_frame_wrapper",
                        onClick: function() {
                            d(!0)
                        },
                        children: (0, o.jsx)(s(), {
                            sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
                            src: "/images/dashboardBanner.webp",
                            alt: "NolanAI",
                            width: 100,
                            height: 100,
                            style: {
                                objectFit: "cover",
                                width: "100%",
                                height: "100%"
                            },
                            priority: !0
                        })
                    })
                })
            }
        },
        84002: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return WhatIsNolanSection_WhatIsNolanSection
                }
            });
            var r = i(85893);
            i(67294);
            var o = i(11163),
                a = i(65899),
                n = i(14803),
                s = i(9099),
                l = i(84581),
                c = i.n(l),
                WhatIsNolanSection_WhatIsNolanSection = function() {
                    var e = (0, o.useRouter)();
                    return (0, r.jsx)("div", {
                        className: c().container,
                        children: (0, r.jsxs)("div", {
                            className: c().content,
                            children: [(0, r.jsxs)("div", {
                                className: c().leftBlock,
                                children: [(0, r.jsx)("h2", {
                                    children: "Free Script Writing Software"
                                }), (0, r.jsx)("h3", {
                                    children: "And More"
                                }), (0, r.jsxs)("p", {
                                    className: c().description,
                                    children: ["NolanAI isn't just a screenwriting tool, it's a filmmaker's dream studio. From crafting your script with AI assistance to seamlessly pre-producing your masterpiece, all within one intuitive platform, NolanAI empowers you to tell your story without losing your creative spark.", (0, r.jsx)("br", {}), "Imagine ditching siloed tools and having everything at your fingertips, from storyboards to shot lists, all fueled by AI smarts and user-friendly design. That's the NolanAI advantage - streamlined storytelling, from pen to production, with your unique voice always in the director's chair."]
                                }), (0, r.jsx)(n.Z, {
                                    rightIcon: (0, r.jsx)(s.Z, {
                                        style: {
                                            fontSize: 24
                                        },
                                        name: "arrow_forward",
                                        variant: "label-default"
                                    }),
                                    onClick: function() {
                                        return e.push("/pricing")
                                    },
                                    size: "regular",
                                    color: "primary",
                                    mode: "contained",
                                    children: "Explore our premium plan!"
                                })]
                            }), (0, r.jsx)("div", {
                                className: c().videoFrameWrapper,
                                children: (0, r.jsx)(a.Z, {
                                    videoId: "p6P4EDHqAV4"
                                })
                            })]
                        })
                    })
                }
        },
        84581: function(e) {
            e.exports = {
                container: "WhatIsNolanSection_container__ECI46",
                content: "WhatIsNolanSection_content__cSubM",
                leftBlock: "WhatIsNolanSection_leftBlock__iCLaN",
                description: "WhatIsNolanSection_description__BMslR",
                videoFrameWrapper: "WhatIsNolanSection_videoFrameWrapper__h88Cn"
            }
        }
    }
]);