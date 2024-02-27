(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5219], {
        25219: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return p
                }
            });
            var i = r(85893),
                a = r(67294),
                n = r(11163),
                o = r(54578),
                s = r.n(o),
                c = [{
                    img: "/images/newFeatures/1.webp",
                    title: "The Industry Standard Script Writing Software",
                    description: "Nolan provides a user-friendly interface, advanced formatting options, and helpful features such as character and scene breakdowns, revision tracking, and collaboration tools.With its powerful tools and intuitive design.",
                    icon: "drive_file_rename_outline",
                    iconBackground: "#1364D9"
                }, {
                    img: "/images/newFeatures/plotHole.webp",
                    title: "Plot Hole Detection Report",
                    description: "With the Plot Hole Detection Report, you can ensure the consistency and quality of your story, enhancing the overall engagement of your content. This detailed report provides actionable insights and suggestions for resolving identified issues, allowing you to fine-tune your narrative and captivate your audience with a more polished and immersive storytelling experience. Whether you're crafting a screenplay, novel, or any other form of narrative, this feature is your indispensable companion in the pursuit of storytelling excellence.",
                    icon: "troubleshoot",
                    iconBackground: "#B11E46"
                }, {
                    img: "/images/newFeatures/3.webp",
                    title: "Ask Nolan for suggestion",
                    description: "To help you create high-quality story, Nolan offers a powerful editing feature. With Ask Nolan, you can easily enhance the quality of your text by highlighting the selected text,correcting any spelling and grammar errors, and adjusting the tone of the paragraph as necessary.This feature provides you with the flexibility to customize your text and make it more engaging and effective.",
                    icon: "lightbulb",
                    iconBackground: "#DA8813"
                }, {
                    img: "/images/newFeatures/4.webp",
                    title: "Change your character accent",
                    description: "Personalize your character and make it truly unique.\n                        \"Change Accent\" allows you to change your character's accent, making it sound more distinct and authentic.\n                        Whether you want to add a touch of personality to your character or create a character that stands out,\n                        this feature provides you with the flexibility to customize your character's accent to match your preferences.\n                        With this feature, you can create a character that truly represents you and brings your story to life.",
                    icon: "translate",
                    iconBackground: "#83C619"
                }, {
                    img: "/images/newFeatures/5.webp",
                    title: "Script Smart",
                    description: "Script Smart uses advanced algorithms to automatically format your text into a screenplay format. With Script Smart, you can save time and focus on writing by letting the software handle the formatting for you. This feature also provides suggestions and corrections to help ensure that your screenplay adheres toindustry standards and is formatted correctly.",
                    icon: "format_align_center",
                    iconBackground: "#D54927"
                }, {
                    img: "/images/newFeatures/scriptBreakdown.webp",
                    title: "Break Smart",
                    description: "The Automatic Screenplay Breakdown (Break Smart) is a time-saving solution that simplifies the process of deconstructing a screenplay. It automatically dissects your script into key elements like scenes, characters, and locations, providing a clear and organized overview of your story's structure.",
                    icon: "list_alt",
                    iconBackground: "#0650B9"
                }],
                l = r(9099),
                u = r(14803),
                d = r(25675),
                h = r.n(d),
                FeaturesSection_FeatureItem = function(e) {
                    var t = e.item;
                    return (0, i.jsxs)("div", {
                        className: s().featureContent,
                        children: [(0, i.jsx)("div", {
                            className: s().imageWrapper,
                            children: (0, i.jsx)(h(), {
                                loading: "lazy",
                                width: 100,
                                height: 100,
                                src: t.img,
                                alt: t.title,
                                sizes: "(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 33vw"
                            })
                        }), (0, i.jsxs)("div", {
                            className: s().textWrapper,
                            children: [(0, i.jsx)("div", {
                                style: {
                                    padding: 12,
                                    background: t.iconBackground,
                                    borderRadius: 96,
                                    overflow: "hidden",
                                    border: "4px rgba(255, 255, 255, 0.08) solid",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    display: "inline-flex"
                                },
                                children: (0, i.jsx)(l.Z, {
                                    name: t.icon,
                                    style: {
                                        fontSize: 32
                                    },
                                    variant: "label-default"
                                })
                            }), (0, i.jsx)("h3", {
                                children: t.title
                            }), (0, i.jsx)("p", {
                                children: t.description
                            })]
                        })]
                    })
                },
                p = (0, a.memo)(function() {
                    var e = (0, n.useRouter)();
                    return (0, i.jsxs)("div", {
                        className: s().container,
                        children: [(0, i.jsx)("div", {
                            className: s().titleContainer,
                            children: (0, i.jsxs)("div", {
                                className: s().titleWrapper,
                                children: [(0, i.jsx)("div", {
                                    className: s().title,
                                    children: "FEATURES"
                                }), (0, i.jsx)("div", {
                                    className: s().description,
                                    children: "Explore what the NolanAI platform can do"
                                })]
                            })
                        }), (0, i.jsx)("div", {
                            className: s().content,
                            children: c.map(function(e) {
                                return (0, i.jsx)(FeaturesSection_FeatureItem, {
                                    item: e
                                }, e.title.split(" ").join(":").toLowerCase())
                            })
                        }), (0, i.jsx)("div", {
                            className: s().buttonWrapper,
                            children: (0, i.jsx)(u.Z, {
                                leftIcon: (0, i.jsx)(l.Z, {
                                    variant: "label-default",
                                    name: "explore"
                                }),
                                onClick: function() {
                                    return e.push("/features")
                                },
                                size: "regular",
                                color: "primary",
                                mode: "contained",
                                children: "Explore All Features"
                            })
                        })]
                    })
                })
        },
        54578: function(e) {
            e.exports = {
                container: "FeaturesSection_container__2atiy",
                titleContainer: "FeaturesSection_titleContainer__YsoAZ",
                titleWrapper: "FeaturesSection_titleWrapper__aGSB7",
                title: "FeaturesSection_title__GXUqz",
                description: "FeaturesSection_description__F1evo",
                content: "FeaturesSection_content__F73A_",
                featureContent: "FeaturesSection_featureContent__LloNY",
                textWrapper: "FeaturesSection_textWrapper__9FMjx",
                imageWrapper: "FeaturesSection_imageWrapper__BhypJ",
                redCircle: "FeaturesSection_redCircle__Ah773",
                blueCircle: "FeaturesSection_blueCircle__KTizd",
                buttonWrapper: "FeaturesSection_buttonWrapper___PFOQ"
            }
        }
    }
]);