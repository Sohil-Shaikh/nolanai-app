"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5680], {
        74129: function(e, t, n) {
            var E, r, L = n(67294),
                u = L && "object" == typeof L && "default" in L ? L.default : L,
                __assign = function() {
                    return (__assign = Object.assign || function(e) {
                        for (var t, n = 1, E = arguments.length; n < E; n++)
                            for (var r in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                        return e
                    }).apply(this, arguments)
                },
                o = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== n.g ? n.g : "undefined" != typeof self ? self : {};

            function unwrapExports(e) {
                return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
            }

            function createCommonjsModule(e, t) {
                return e(t = {
                    exports: {}
                }, t.exports), t.exports
            }
            var S = createCommonjsModule(function(e, t) {
                var n;
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.BLOCKS = void 0, (n = t.BLOCKS || (t.BLOCKS = {})).DOCUMENT = "document", n.PARAGRAPH = "paragraph", n.HEADING_1 = "heading-1", n.HEADING_2 = "heading-2", n.HEADING_3 = "heading-3", n.HEADING_4 = "heading-4", n.HEADING_5 = "heading-5", n.HEADING_6 = "heading-6", n.OL_LIST = "ordered-list", n.UL_LIST = "unordered-list", n.LIST_ITEM = "list-item", n.HR = "hr", n.QUOTE = "blockquote", n.EMBEDDED_ENTRY = "embedded-entry-block", n.EMBEDDED_ASSET = "embedded-asset-block", n.EMBEDDED_RESOURCE = "embedded-resource-block", n.TABLE = "table", n.TABLE_ROW = "table-row", n.TABLE_CELL = "table-cell", n.TABLE_HEADER_CELL = "table-header-cell"
            });
            unwrapExports(S), S.BLOCKS;
            var _ = createCommonjsModule(function(e, t) {
                var n;
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.INLINES = void 0, (n = t.INLINES || (t.INLINES = {})).HYPERLINK = "hyperlink", n.ENTRY_HYPERLINK = "entry-hyperlink", n.ASSET_HYPERLINK = "asset-hyperlink", n.RESOURCE_HYPERLINK = "resource-hyperlink", n.EMBEDDED_ENTRY = "embedded-entry-inline", n.EMBEDDED_RESOURCE = "embedded-resource-inline"
            });
            unwrapExports(_), _.INLINES;
            var l = createCommonjsModule(function(e, t) {
                var n, E;
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), (E = n || (n = {})).BOLD = "bold", E.ITALIC = "italic", E.UNDERLINE = "underline", E.CODE = "code", E.SUPERSCRIPT = "superscript", E.SUBSCRIPT = "subscript", t.default = n
            });
            unwrapExports(l);
            var O = createCommonjsModule(function(e, t) {
                var n, E = o && o.__spreadArray || function(e, t, n) {
                        if (n || 2 == arguments.length)
                            for (var E, r = 0, L = t.length; r < L; r++) !E && r in t || (E || (E = Array.prototype.slice.call(t, 0, r)), E[r] = t[r]);
                        return e.concat(E || Array.prototype.slice.call(t))
                    },
                    r = o && o.__importDefault || function(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.V1_MARKS = t.V1_NODE_TYPES = t.TEXT_CONTAINERS = t.HEADINGS = t.CONTAINERS = t.VOID_BLOCKS = t.TABLE_BLOCKS = t.LIST_ITEM_BLOCKS = t.TOP_LEVEL_BLOCKS = void 0;
                var L = r(l);
                t.TOP_LEVEL_BLOCKS = [S.BLOCKS.PARAGRAPH, S.BLOCKS.HEADING_1, S.BLOCKS.HEADING_2, S.BLOCKS.HEADING_3, S.BLOCKS.HEADING_4, S.BLOCKS.HEADING_5, S.BLOCKS.HEADING_6, S.BLOCKS.OL_LIST, S.BLOCKS.UL_LIST, S.BLOCKS.HR, S.BLOCKS.QUOTE, S.BLOCKS.EMBEDDED_ENTRY, S.BLOCKS.EMBEDDED_ASSET, S.BLOCKS.EMBEDDED_RESOURCE, S.BLOCKS.TABLE], t.LIST_ITEM_BLOCKS = [S.BLOCKS.PARAGRAPH, S.BLOCKS.HEADING_1, S.BLOCKS.HEADING_2, S.BLOCKS.HEADING_3, S.BLOCKS.HEADING_4, S.BLOCKS.HEADING_5, S.BLOCKS.HEADING_6, S.BLOCKS.OL_LIST, S.BLOCKS.UL_LIST, S.BLOCKS.HR, S.BLOCKS.QUOTE, S.BLOCKS.EMBEDDED_ENTRY, S.BLOCKS.EMBEDDED_ASSET, S.BLOCKS.EMBEDDED_RESOURCE], t.TABLE_BLOCKS = [S.BLOCKS.TABLE, S.BLOCKS.TABLE_ROW, S.BLOCKS.TABLE_CELL, S.BLOCKS.TABLE_HEADER_CELL], t.VOID_BLOCKS = [S.BLOCKS.HR, S.BLOCKS.EMBEDDED_ENTRY, S.BLOCKS.EMBEDDED_ASSET, S.BLOCKS.EMBEDDED_RESOURCE], t.CONTAINERS = ((n = {})[S.BLOCKS.OL_LIST] = [S.BLOCKS.LIST_ITEM], n[S.BLOCKS.UL_LIST] = [S.BLOCKS.LIST_ITEM], n[S.BLOCKS.LIST_ITEM] = t.LIST_ITEM_BLOCKS, n[S.BLOCKS.QUOTE] = [S.BLOCKS.PARAGRAPH], n[S.BLOCKS.TABLE] = [S.BLOCKS.TABLE_ROW], n[S.BLOCKS.TABLE_ROW] = [S.BLOCKS.TABLE_CELL, S.BLOCKS.TABLE_HEADER_CELL], n[S.BLOCKS.TABLE_CELL] = [S.BLOCKS.PARAGRAPH], n[S.BLOCKS.TABLE_HEADER_CELL] = [S.BLOCKS.PARAGRAPH], n), t.HEADINGS = [S.BLOCKS.HEADING_1, S.BLOCKS.HEADING_2, S.BLOCKS.HEADING_3, S.BLOCKS.HEADING_4, S.BLOCKS.HEADING_5, S.BLOCKS.HEADING_6], t.TEXT_CONTAINERS = E([S.BLOCKS.PARAGRAPH], t.HEADINGS, !0), t.V1_NODE_TYPES = [S.BLOCKS.DOCUMENT, S.BLOCKS.PARAGRAPH, S.BLOCKS.HEADING_1, S.BLOCKS.HEADING_2, S.BLOCKS.HEADING_3, S.BLOCKS.HEADING_4, S.BLOCKS.HEADING_5, S.BLOCKS.HEADING_6, S.BLOCKS.OL_LIST, S.BLOCKS.UL_LIST, S.BLOCKS.LIST_ITEM, S.BLOCKS.HR, S.BLOCKS.QUOTE, S.BLOCKS.EMBEDDED_ENTRY, S.BLOCKS.EMBEDDED_ASSET, _.INLINES.HYPERLINK, _.INLINES.ENTRY_HYPERLINK, _.INLINES.ASSET_HYPERLINK, _.INLINES.EMBEDDED_ENTRY, "text"], t.V1_MARKS = [L.default.BOLD, L.default.CODE, L.default.ITALIC, L.default.UNDERLINE]
            });
            unwrapExports(O), O.V1_MARKS, O.V1_NODE_TYPES, O.TEXT_CONTAINERS, O.HEADINGS, O.CONTAINERS, O.VOID_BLOCKS, O.TABLE_BLOCKS, O.LIST_ITEM_BLOCKS, O.TOP_LEVEL_BLOCKS;
            var a = createCommonjsModule(function(e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                })
            });
            unwrapExports(a);
            var i = createCommonjsModule(function(e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                })
            });
            unwrapExports(i);
            var B = createCommonjsModule(function(e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var n = {
                    nodeType: S.BLOCKS.DOCUMENT,
                    data: {},
                    content: [{
                        nodeType: S.BLOCKS.PARAGRAPH,
                        data: {},
                        content: [{
                            nodeType: "text",
                            value: "",
                            marks: [],
                            data: {}
                        }]
                    }]
                };
                t.default = n
            });
            unwrapExports(B);
            var C = createCommonjsModule(function(e, t) {
                function hasValue(e, t) {
                    for (var n = 0, E = Object.keys(e); n < E.length; n++)
                        if (t === e[E[n]]) return !0;
                    return !1
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.isText = t.isBlock = t.isInline = void 0, t.isInline = function(e) {
                    return hasValue(_.INLINES, e.nodeType)
                }, t.isBlock = function(e) {
                    return hasValue(S.BLOCKS, e.nodeType)
                }, t.isText = function(e) {
                    return "text" === e.nodeType
                }
            });
            unwrapExports(C), C.isText, C.isBlock, C.isInline;
            var c = createCommonjsModule(function(e, t) {
                var n = o && o.__createBinding || (Object.create ? function(e, t, n, E) {
                        void 0 === E && (E = n);
                        var r = Object.getOwnPropertyDescriptor(t, n);
                        (!r || ("get" in r ? !t.__esModule : r.writable || r.configurable)) && (r = {
                            enumerable: !0,
                            get: function() {
                                return t[n]
                            }
                        }), Object.defineProperty(e, E, r)
                    } : function(e, t, n, E) {
                        void 0 === E && (E = n), e[E] = t[n]
                    }),
                    E = o && o.__setModuleDefault || (Object.create ? function(e, t) {
                        Object.defineProperty(e, "default", {
                            enumerable: !0,
                            value: t
                        })
                    } : function(e, t) {
                        e.default = t
                    }),
                    r = o && o.__exportStar || function(e, t) {
                        for (var E in e) "default" === E || Object.prototype.hasOwnProperty.call(t, E) || n(t, e, E)
                    },
                    L = o && o.__importStar || function(e) {
                        if (e && e.__esModule) return e;
                        var t = {};
                        if (null != e)
                            for (var r in e) "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && n(t, e, r);
                        return E(t, e), t
                    },
                    u = o && o.__importDefault || function(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.helpers = t.EMPTY_DOCUMENT = t.MARKS = t.INLINES = t.BLOCKS = void 0, Object.defineProperty(t, "BLOCKS", {
                    enumerable: !0,
                    get: function() {
                        return S.BLOCKS
                    }
                }), Object.defineProperty(t, "INLINES", {
                    enumerable: !0,
                    get: function() {
                        return _.INLINES
                    }
                }), Object.defineProperty(t, "MARKS", {
                    enumerable: !0,
                    get: function() {
                        return u(l).default
                    }
                }), r(O, t), r(a, t), r(i, t), Object.defineProperty(t, "EMPTY_DOCUMENT", {
                    enumerable: !0,
                    get: function() {
                        return u(B).default
                    }
                });
                var c = L(C);
                t.helpers = c
            });
            unwrapExports(c);
            var d = c.helpers;
            c.EMPTY_DOCUMENT;
            var I = c.MARKS,
                D = c.INLINES,
                T = c.BLOCKS,
                A = ((E = {})[T.DOCUMENT] = function(e, t) {
                    return t
                }, E[T.PARAGRAPH] = function(e, t) {
                    return u.createElement("p", null, t)
                }, E[T.HEADING_1] = function(e, t) {
                    return u.createElement("h1", null, t)
                }, E[T.HEADING_2] = function(e, t) {
                    return u.createElement("h2", null, t)
                }, E[T.HEADING_3] = function(e, t) {
                    return u.createElement("h3", null, t)
                }, E[T.HEADING_4] = function(e, t) {
                    return u.createElement("h4", null, t)
                }, E[T.HEADING_5] = function(e, t) {
                    return u.createElement("h5", null, t)
                }, E[T.HEADING_6] = function(e, t) {
                    return u.createElement("h6", null, t)
                }, E[T.EMBEDDED_ENTRY] = function(e, t) {
                    return u.createElement("div", null, t)
                }, E[T.EMBEDDED_RESOURCE] = function(e, t) {
                    return u.createElement("div", null, t)
                }, E[T.UL_LIST] = function(e, t) {
                    return u.createElement("ul", null, t)
                }, E[T.OL_LIST] = function(e, t) {
                    return u.createElement("ol", null, t)
                }, E[T.LIST_ITEM] = function(e, t) {
                    return u.createElement("li", null, t)
                }, E[T.QUOTE] = function(e, t) {
                    return u.createElement("blockquote", null, t)
                }, E[T.HR] = function() {
                    return u.createElement("hr", null)
                }, E[T.TABLE] = function(e, t) {
                    return u.createElement("table", null, u.createElement("tbody", null, t))
                }, E[T.TABLE_ROW] = function(e, t) {
                    return u.createElement("tr", null, t)
                }, E[T.TABLE_HEADER_CELL] = function(e, t) {
                    return u.createElement("th", null, t)
                }, E[T.TABLE_CELL] = function(e, t) {
                    return u.createElement("td", null, t)
                }, E[D.ASSET_HYPERLINK] = function(e) {
                    return defaultInline(D.ASSET_HYPERLINK, e)
                }, E[D.ENTRY_HYPERLINK] = function(e) {
                    return defaultInline(D.ENTRY_HYPERLINK, e)
                }, E[D.RESOURCE_HYPERLINK] = function(e) {
                    return defaultInlineResource(D.RESOURCE_HYPERLINK, e)
                }, E[D.EMBEDDED_ENTRY] = function(e) {
                    return defaultInline(D.EMBEDDED_ENTRY, e)
                }, E[D.EMBEDDED_RESOURCE] = function(e, t) {
                    return defaultInlineResource(D.EMBEDDED_RESOURCE, e)
                }, E[D.HYPERLINK] = function(e, t) {
                    return u.createElement("a", {
                        href: e.data.uri
                    }, t)
                }, E),
                K = ((r = {})[I.BOLD] = function(e) {
                    return u.createElement("b", null, e)
                }, r[I.ITALIC] = function(e) {
                    return u.createElement("i", null, e)
                }, r[I.UNDERLINE] = function(e) {
                    return u.createElement("u", null, e)
                }, r[I.CODE] = function(e) {
                    return u.createElement("code", null, e)
                }, r[I.SUPERSCRIPT] = function(e) {
                    return u.createElement("sup", null, e)
                }, r[I.SUBSCRIPT] = function(e) {
                    return u.createElement("sub", null, e)
                }, r);

            function defaultInline(e, t) {
                return u.createElement("span", {
                    key: t.data.target.sys.id
                }, "type: ", t.nodeType, " id: ", t.data.target.sys.id)
            }

            function defaultInlineResource(e, t) {
                return u.createElement("span", {
                    key: t.data.target.sys.urn
                }, "type: ", t.nodeType, " urn: ", t.data.target.sys.urn)
            }
            t.h = function(e, t) {
                return (void 0 === t && (t = {}), e) ? function nodeToReactComponent(e, t) {
                    var n = t.renderNode,
                        E = t.renderMark,
                        r = t.renderText,
                        o = t.preserveWhitespace;
                    if (d.isText(e)) {
                        var S = r ? r(e.value) : e.value;
                        if (o) {
                            var _ = (S = S.replace(/ {2,}/g, function(e) {
                                    return "&nbsp;".repeat(e.length)
                                })).split("\n"),
                                l = [];
                            _.forEach(function(e, t) {
                                l.push(e), t !== _.length - 1 && l.push(u.createElement("br", null))
                            }), S = l
                        }
                        return e.marks.reduce(function(e, t) {
                            return E[t.type] ? E[t.type](e) : e
                        }, S)
                    }
                    var O = e.content.map(function(e, n) {
                        var E;
                        return E = nodeToReactComponent(e, t), L.isValidElement(E) && null === E.key ? L.cloneElement(E, {
                            key: n
                        }) : E
                    });
                    return e.nodeType && n[e.nodeType] ? n[e.nodeType](e, O) : u.createElement(u.Fragment, null, O)
                }(e, {
                    renderNode: __assign(__assign({}, A), t.renderNode),
                    renderMark: __assign(__assign({}, K), t.renderMark),
                    renderText: t.renderText,
                    preserveWhitespace: t.preserveWhitespace
                }) : null
            }
        },
        20549: function(e, t) {
            var n;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.BLOCKS = void 0, (n = t.BLOCKS || (t.BLOCKS = {})).DOCUMENT = "document", n.PARAGRAPH = "paragraph", n.HEADING_1 = "heading-1", n.HEADING_2 = "heading-2", n.HEADING_3 = "heading-3", n.HEADING_4 = "heading-4", n.HEADING_5 = "heading-5", n.HEADING_6 = "heading-6", n.OL_LIST = "ordered-list", n.UL_LIST = "unordered-list", n.LIST_ITEM = "list-item", n.HR = "hr", n.QUOTE = "blockquote", n.EMBEDDED_ENTRY = "embedded-entry-block", n.EMBEDDED_ASSET = "embedded-asset-block", n.EMBEDDED_RESOURCE = "embedded-resource-block", n.TABLE = "table", n.TABLE_ROW = "table-row", n.TABLE_CELL = "table-cell", n.TABLE_HEADER_CELL = "table-header-cell"
        },
        51928: function(e, t, n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var E = n(20549),
                r = {
                    nodeType: E.BLOCKS.DOCUMENT,
                    data: {},
                    content: [{
                        nodeType: E.BLOCKS.PARAGRAPH,
                        data: {},
                        content: [{
                            nodeType: "text",
                            value: "",
                            marks: [],
                            data: {}
                        }]
                    }]
                };
            t.default = r
        },
        86061: function(e, t, n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.isText = t.isBlock = t.isInline = void 0;
            var E = n(20549),
                r = n(7845);

            function hasValue(e, t) {
                for (var n = 0, E = Object.keys(e); n < E.length; n++)
                    if (t === e[E[n]]) return !0;
                return !1
            }
            t.isInline = function(e) {
                return hasValue(r.INLINES, e.nodeType)
            }, t.isBlock = function(e) {
                return hasValue(E.BLOCKS, e.nodeType)
            }, t.isText = function(e) {
                return "text" === e.nodeType
            }
        },
        86437: function(e, t, n) {
            var E = this && this.__createBinding || (Object.create ? function(e, t, n, E) {
                    void 0 === E && (E = n);
                    var r = Object.getOwnPropertyDescriptor(t, n);
                    (!r || ("get" in r ? !t.__esModule : r.writable || r.configurable)) && (r = {
                        enumerable: !0,
                        get: function() {
                            return t[n]
                        }
                    }), Object.defineProperty(e, E, r)
                } : function(e, t, n, E) {
                    void 0 === E && (E = n), e[E] = t[n]
                }),
                r = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                    Object.defineProperty(e, "default", {
                        enumerable: !0,
                        value: t
                    })
                } : function(e, t) {
                    e.default = t
                }),
                L = this && this.__exportStar || function(e, t) {
                    for (var n in e) "default" === n || Object.prototype.hasOwnProperty.call(t, n) || E(t, e, n)
                },
                u = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && E(t, e, n);
                    return r(t, e), t
                },
                o = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.helpers = t.EMPTY_DOCUMENT = t.MARKS = t.INLINES = t.BLOCKS = void 0;
            var S = n(20549);
            Object.defineProperty(t, "BLOCKS", {
                enumerable: !0,
                get: function() {
                    return S.BLOCKS
                }
            });
            var _ = n(7845);
            Object.defineProperty(t, "INLINES", {
                enumerable: !0,
                get: function() {
                    return _.INLINES
                }
            });
            var l = n(31376);
            Object.defineProperty(t, "MARKS", {
                enumerable: !0,
                get: function() {
                    return o(l).default
                }
            }), L(n(97951), t), L(n(80167), t), L(n(11911), t);
            var O = n(51928);
            Object.defineProperty(t, "EMPTY_DOCUMENT", {
                enumerable: !0,
                get: function() {
                    return o(O).default
                }
            });
            var a = u(n(86061));
            t.helpers = a
        },
        7845: function(e, t) {
            var n;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.INLINES = void 0, (n = t.INLINES || (t.INLINES = {})).HYPERLINK = "hyperlink", n.ENTRY_HYPERLINK = "entry-hyperlink", n.ASSET_HYPERLINK = "asset-hyperlink", n.RESOURCE_HYPERLINK = "resource-hyperlink", n.EMBEDDED_ENTRY = "embedded-entry-inline", n.EMBEDDED_RESOURCE = "embedded-resource-inline"
        },
        31376: function(e, t) {
            var n, E;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), (E = n || (n = {})).BOLD = "bold", E.ITALIC = "italic", E.UNDERLINE = "underline", E.CODE = "code", E.SUPERSCRIPT = "superscript", E.SUBSCRIPT = "subscript", t.default = n
        },
        11911: function(e, t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        },
        97951: function(e, t, n) {
            var E, r = this && this.__spreadArray || function(e, t, n) {
                    if (n || 2 == arguments.length)
                        for (var E, r = 0, L = t.length; r < L; r++) !E && r in t || (E || (E = Array.prototype.slice.call(t, 0, r)), E[r] = t[r]);
                    return e.concat(E || Array.prototype.slice.call(t))
                },
                L = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.V1_MARKS = t.V1_NODE_TYPES = t.TEXT_CONTAINERS = t.HEADINGS = t.CONTAINERS = t.VOID_BLOCKS = t.TABLE_BLOCKS = t.LIST_ITEM_BLOCKS = t.TOP_LEVEL_BLOCKS = void 0;
            var u = n(20549),
                o = n(7845),
                S = L(n(31376));
            t.TOP_LEVEL_BLOCKS = [u.BLOCKS.PARAGRAPH, u.BLOCKS.HEADING_1, u.BLOCKS.HEADING_2, u.BLOCKS.HEADING_3, u.BLOCKS.HEADING_4, u.BLOCKS.HEADING_5, u.BLOCKS.HEADING_6, u.BLOCKS.OL_LIST, u.BLOCKS.UL_LIST, u.BLOCKS.HR, u.BLOCKS.QUOTE, u.BLOCKS.EMBEDDED_ENTRY, u.BLOCKS.EMBEDDED_ASSET, u.BLOCKS.EMBEDDED_RESOURCE, u.BLOCKS.TABLE], t.LIST_ITEM_BLOCKS = [u.BLOCKS.PARAGRAPH, u.BLOCKS.HEADING_1, u.BLOCKS.HEADING_2, u.BLOCKS.HEADING_3, u.BLOCKS.HEADING_4, u.BLOCKS.HEADING_5, u.BLOCKS.HEADING_6, u.BLOCKS.OL_LIST, u.BLOCKS.UL_LIST, u.BLOCKS.HR, u.BLOCKS.QUOTE, u.BLOCKS.EMBEDDED_ENTRY, u.BLOCKS.EMBEDDED_ASSET, u.BLOCKS.EMBEDDED_RESOURCE], t.TABLE_BLOCKS = [u.BLOCKS.TABLE, u.BLOCKS.TABLE_ROW, u.BLOCKS.TABLE_CELL, u.BLOCKS.TABLE_HEADER_CELL], t.VOID_BLOCKS = [u.BLOCKS.HR, u.BLOCKS.EMBEDDED_ENTRY, u.BLOCKS.EMBEDDED_ASSET, u.BLOCKS.EMBEDDED_RESOURCE], t.CONTAINERS = ((E = {})[u.BLOCKS.OL_LIST] = [u.BLOCKS.LIST_ITEM], E[u.BLOCKS.UL_LIST] = [u.BLOCKS.LIST_ITEM], E[u.BLOCKS.LIST_ITEM] = t.LIST_ITEM_BLOCKS, E[u.BLOCKS.QUOTE] = [u.BLOCKS.PARAGRAPH], E[u.BLOCKS.TABLE] = [u.BLOCKS.TABLE_ROW], E[u.BLOCKS.TABLE_ROW] = [u.BLOCKS.TABLE_CELL, u.BLOCKS.TABLE_HEADER_CELL], E[u.BLOCKS.TABLE_CELL] = [u.BLOCKS.PARAGRAPH], E[u.BLOCKS.TABLE_HEADER_CELL] = [u.BLOCKS.PARAGRAPH], E), t.HEADINGS = [u.BLOCKS.HEADING_1, u.BLOCKS.HEADING_2, u.BLOCKS.HEADING_3, u.BLOCKS.HEADING_4, u.BLOCKS.HEADING_5, u.BLOCKS.HEADING_6], t.TEXT_CONTAINERS = r([u.BLOCKS.PARAGRAPH], t.HEADINGS, !0), t.V1_NODE_TYPES = [u.BLOCKS.DOCUMENT, u.BLOCKS.PARAGRAPH, u.BLOCKS.HEADING_1, u.BLOCKS.HEADING_2, u.BLOCKS.HEADING_3, u.BLOCKS.HEADING_4, u.BLOCKS.HEADING_5, u.BLOCKS.HEADING_6, u.BLOCKS.OL_LIST, u.BLOCKS.UL_LIST, u.BLOCKS.LIST_ITEM, u.BLOCKS.HR, u.BLOCKS.QUOTE, u.BLOCKS.EMBEDDED_ENTRY, u.BLOCKS.EMBEDDED_ASSET, o.INLINES.HYPERLINK, o.INLINES.ENTRY_HYPERLINK, o.INLINES.ASSET_HYPERLINK, o.INLINES.EMBEDDED_ENTRY, "text"], t.V1_MARKS = [S.default.BOLD, S.default.CODE, S.default.ITALIC, S.default.UNDERLINE]
        },
        80167: function(e, t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        }
    }
]);