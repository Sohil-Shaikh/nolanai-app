(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4831], {
        34831: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return Customers_Customers
                }
            });
            var o = r(85893);
            r(67294);
            var s = r(25675),
                a = r.n(s),
                n = r(41664),
                i = r.n(n),
                c = [{
                    name: "Mike Wech",
                    role: "Producer • Editor • Writer",
                    image: "/images/customers/mike_wech.jpeg",
                    feedback: "NolanAI has the ability to be a game changer for producers. What used to take days could soon take hours and the technology is constantly improving. I was happy that the developers were quick to address the issues and eager to learn how the program can become more efficient for producers. The incorporated new features that we asked for and are eager to help filmmakers streamline production. Highly recommended.",
                    social: [{
                        name: "imdb",
                        url: "https://www.imdb.com/name/nm2665247/"
                    }]
                }],
                m = r(20121),
                l = r.n(m),
                Customers_Customers = function() {
                    return (0, o.jsxs)("div", {
                        className: l().container,
                        children: [(0, o.jsxs)("div", {
                            className: l().header,
                            children: [(0, o.jsx)("div", {
                                className: l().title,
                                children: "Testimonials"
                            }), (0, o.jsx)("div", {
                                className: l().text,
                                children: "What Our Customers Say"
                            })]
                        }), (0, o.jsx)("div", {
                            className: l().body,
                            children: c.map(function(e, t) {
                                return (0, o.jsxs)("div", {
                                    className: l().content,
                                    children: [(0, o.jsx)("div", {
                                        className: l().iconContainer,
                                        children: (0, o.jsx)(a(), {
                                            src: e.image,
                                            alt: e.name,
                                            className: l().customerImage,
                                            width: 64,
                                            height: 64
                                        })
                                    }), (0, o.jsxs)("div", {
                                        className: l().nameContainer,
                                        children: [(0, o.jsx)("div", {
                                            className: l().name,
                                            children: e.name
                                        }), (0, o.jsx)("div", {
                                            className: l().position,
                                            children: e.role
                                        })]
                                    }), (0, o.jsx)("div", {
                                        className: l().footer,
                                        children: (0, o.jsx)("div", {
                                            className: l().footerText,
                                            dangerouslySetInnerHTML: {
                                                __html: e.feedback
                                            }
                                        })
                                    }), (0, o.jsx)("div", {
                                        className: l().socialFooter,
                                        children: e.social.map(function(e, t) {
                                            return (0, o.jsx)(i(), {
                                                href: e.url,
                                                nofollow: "true",
                                                target: "_blank",
                                                rel: "noreferrer",
                                                children: (0, o.jsx)(a(), {
                                                    src: "/images/icons/".concat(e.name, ".png"),
                                                    alt: e.name,
                                                    width: 32,
                                                    height: 32
                                                })
                                            }, t)
                                        })
                                    })]
                                }, t)
                            })
                        })]
                    })
                }
        },
        20121: function(e) {
            e.exports = {
                container: "Customer_container__HqfMC",
                header: "Customer_header__fCdup",
                title: "Customer_title__i9ZTg",
                text: "Customer_text__MZQoi",
                customerImage: "Customer_customerImage__8UsaW",
                body: "Customer_body__6RA_F",
                content: "Customer_content__deVnA",
                socialFooter: "Customer_socialFooter__6E_PC",
                footer: "Customer_footer__1MVKy",
                footerText: "Customer_footerText__llMd8",
                nameContainer: "Customer_nameContainer__H2OeP",
                name: "Customer_name__cc_cc",
                position: "Customer_position__9lLsh",
                iconContainer: "Customer_iconContainer__Z9u_p",
                iconWrapper: "Customer_iconWrapper__uq3tt"
            }
        }
    }
]);