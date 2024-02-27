(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [173], {
        90173: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return Optional_Optional
                }
            });
            var n = i(85893);
            i(67294);
            var a = i(9099),
                r = i(90892),
                o = i.n(r),
                s = [{
                    title: "Registered users",
                    count: "+10000",
                    icon: "supervisor_account"
                }, {
                    title: "Storyboards created",
                    count: "+3000",
                    icon: "developer_board"
                }, {
                    title: "Scripts written",
                    count: "+18000",
                    icon: "summarize"
                }],
                Optional_Optional = function() {
                    return (0, n.jsxs)("div", {
                        className: o().container,
                        children: [(0, n.jsxs)("div", {
                            className: o().header,
                            children: [(0, n.jsx)("div", {
                                className: o().title,
                                children: "Meet Your Fellow Creators at NolanAI"
                            }), (0, n.jsx)("div", {
                                className: o().description,
                                children: "Fueling the Creative Fire: Where Thousands Shape Their Stories"
                            })]
                        }), (0, n.jsx)("div", {
                            className: o().content,
                            children: s.map(function(e, t) {
                                return (0, n.jsxs)("div", {
                                    className: o().itemWrapper,
                                    children: [(0, n.jsx)("div", {
                                        className: o().itemHead,
                                        children: (0, n.jsx)("div", {
                                            className: o().iconWrapper,
                                            children: (0, n.jsx)(a.Z, {
                                                name: e.icon,
                                                style: {
                                                    fontSize: 32
                                                },
                                                variant: "label-default"
                                            })
                                        })
                                    }), (0, n.jsx)("div", {
                                        className: o().count,
                                        children: e.count
                                    }), (0, n.jsx)("div", {
                                        className: o().text,
                                        children: e.title
                                    })]
                                }, t)
                            })
                        })]
                    })
                }
        },
        90892: function(e) {
            e.exports = {
                container: "Optional_container__b2ECj",
                header: "Optional_header__mLrlk",
                title: "Optional_title__OANW0",
                description: "Optional_description__9Ghno",
                content: "Optional_content__ns_co",
                itemWrapper: "Optional_itemWrapper__eQ6OM",
                count: "Optional_count__g0oJR",
                text: "Optional_text__AajiG",
                itemHead: "Optional_itemHead__R3Z_y",
                iconWrapper: "Optional_iconWrapper__4pRSD"
            }
        }
    }
]);