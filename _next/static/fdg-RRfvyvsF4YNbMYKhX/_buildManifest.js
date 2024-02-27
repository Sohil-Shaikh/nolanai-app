self.__BUILD_MANIFEST = function(s, c, a, e, t, i, f, u, r, d, b, g, n, o, l, h, k, p, j, m) {
    return {
        __rewrites: {
            afterFiles: [{
                has: [{
                    type: f,
                    key: "o",
                    value: "(?<orgid>\\d*)"
                }, {
                    type: f,
                    key: "p",
                    value: "(?<projectid>\\d*)"
                }],
                source: "/monitoring(/?)",
                destination: void 0
            }],
            beforeFiles: [],
            fallback: []
        },
        "/": ["static/css/78f4d612c5f5367c.css", "static/chunks/pages/index-696e6fda2f4b0a75.js"],
        "/404": ["static/css/619a32a2d3c9e09f.css", "static/chunks/pages/404-55a4cb51b3428688.js"],
        "/_defer": ["static/chunks/8764-8ae3e77f27673912.js", "static/chunks/6859-2b370767198b8b8e.js", "static/chunks/pages/_defer-64f7ff6df33846e3.js"],
        "/_error": ["static/chunks/pages/_error-7d020e9f16c1ff58.js"],
        "/about-us": [s, "static/css/f9d6843a37eed17d.css", "static/chunks/pages/about-us-81d0956d5bd55738.js"],
        "/backstage": [c, a, u, r, d, b, "static/chunks/584-fcdbac92cbce69e6.js", g, "static/chunks/2386-1a30f95f2a247881.js", "static/chunks/9843-cf09a6f2cafb1bce.js", "static/chunks/3041-acb1c94f31c90209.js", "static/chunks/4366-b5ade113210ee655.js", n, "static/chunks/6590-34c8072396c51eae.js", "static/chunks/9509-9bf18af8cf5de7bd.js", "static/chunks/8975-6e424f9f8fef7783.js", "static/chunks/pages/backstage-d1e3069ae4df9dfe.js"],
        "/blog": ["static/css/de13f92034fcc1ce.css", "static/chunks/pages/blog-784ecffacccd7184.js"],
        "/blog/[slug]": [s, "static/css/44325dcf7db3d3e3.css", "static/chunks/pages/blog/[slug]-54db1795b456a318.js"],
        "/budgeting/[slug]": ["static/chunks/pages/budgeting/[slug]-a3d500ac0baa1675.js"],
        "/dashboard": ["static/chunks/pages/dashboard-14e9bd03c0b9665f.js"],
        "/editor/break-smart/[slug]": ["static/chunks/pages/editor/break-smart/[slug]-61e31ea71d0db83c.js"],
        "/editor/storyboard/[slug]": ["static/chunks/pages/editor/storyboard/[slug]-5c7418d05ca3b787.js"],
        "/editor/[slug]": ["static/chunks/pages/editor/[slug]-ff9b4974aaff27a4.js"],
        "/features": ["static/css/2e1db05bd3100e81.css", "static/chunks/pages/features-29dcffdac74143a4.js"],
        "/features/[slug]": [s, "static/css/738ab55653ba160a.css", "static/chunks/pages/features/[slug]-8a36a782f2586569.js"],
        "/for-studios": [c, a, "static/css/6e44e8fb37a9748c.css", "static/chunks/pages/for-studios-4fc38f4298688ee9.js"],
        "/forgot-password": [c, a, e, "static/chunks/4863-ed5be40b37f70440.js", "static/css/d045eeab1a619514.css", "static/chunks/pages/forgot-password-793214aab25aa97e.js"],
        "/g3n3s1s": [c, a, o, e, l, t, h, k, p, j, "static/chunks/pages/g3n3s1s-ecabf791303a086c.js"],
        "/login": [c, a, o, e, l, t, h, k, p, j, "static/chunks/pages/login-de53bb9c89a68eb3.js"],
        "/plot-hole-report/[slug]": ["static/chunks/pages/plot-hole-report/[slug]-38eea934d9342a6f.js"],
        "/pricing": [c, a, e, u, r, "static/chunks/5562-d50f67211b67a7ee.js", d, "static/chunks/7538-3b022924cbab1f22.js", b, g, "static/chunks/6664-c539b1b6a643705c.js", n, t, "static/chunks/2817-f9181c5446ce1c47.js", "static/chunks/1443-3e494e2ea2971ffb.js", "static/css/aa0cb4b813f2dcf3.css", "static/chunks/pages/pricing-697c9ffd0ed028d2.js"],
        "/privacy-policy": [i, "static/chunks/pages/privacy-policy-1791ef172269e15c.js"],
        "/profile": ["static/chunks/pages/profile-712f88406b95f679.js"],
        "/profile/affiliate": ["static/chunks/pages/profile/affiliate-19c05402dc016333.js"],
        "/referral-program": [s, "static/css/6a2754c1c92f56ac.css", "static/chunks/pages/referral-program-9fa95f57f05cef72.js"],
        "/releases": [s, m, "static/chunks/pages/releases-67dee5d144e891d4.js"],
        "/releases/[slug]": [s, m, "static/chunks/pages/releases/[slug]-eaaaf5e6da4cec15.js"],
        "/rss.xml": ["static/chunks/pages/rss.xml-63e58126db88b88d.js"],
        "/scheduling/[slug]": ["static/chunks/pages/scheduling/[slug]-9944fde58653ee65.js"],
        "/script-share/[slug]": ["static/chunks/pages/script-share/[slug]-770d28946f8b164d.js"],
        "/sitemap.xml": ["static/chunks/pages/sitemap.xml-866e5f80e4307408.js"],
        "/terms-and-conditions": [i, "static/chunks/pages/terms-and-conditions-65ade6b0706e29aa.js"],
        "/terms-of-service": [i, "static/chunks/pages/terms-of-service-9a4a5be86fefd549.js"],
        sortedPages: ["/", "/404", "/_app", "/_defer", "/_error", "/about-us", "/backstage", "/blog", "/blog/[slug]", "/budgeting/[slug]", "/dashboard", "/editor/break-smart/[slug]", "/editor/storyboard/[slug]", "/editor/[slug]", "/features", "/features/[slug]", "/for-studios", "/forgot-password", "/g3n3s1s", "/login", "/plot-hole-report/[slug]", "/pricing", "/privacy-policy", "/profile", "/profile/affiliate", "/referral-program", "/releases", "/releases/[slug]", "/rss.xml", "/scheduling/[slug]", "/script-share/[slug]", "/sitemap.xml", "/terms-and-conditions", "/terms-of-service"]
    }
}("static/chunks/5680-15725a55fd77d469.js", "static/chunks/1929-795f09305f397bdc.js", "static/chunks/2074-95dda2b3e0c83b50.js", "static/chunks/8520-7618b6ec44d43248.js", "static/chunks/3183-e3259874f3044a81.js", "static/css/5070f589cc0abc5f.css", "query", "static/chunks/4006-e15290970e90e3c8.js", "static/chunks/1366-8f89256a5019a6ba.js", "static/chunks/3957-fc817f1594d03077.js", "static/chunks/1024-81700fd4a4d1a344.js", "static/chunks/1886-45a7f43781df2e85.js", "static/chunks/4713-9673848b7123480d.js", "static/chunks/82-379344e54ec9ea72.js", "static/chunks/8456-82cbc025f4d51537.js", "static/chunks/3914-9d7ec1f9c61b2a31.js", "static/chunks/4103-b4070d3914e5ddfa.js", "static/css/d76dac62eeace07b.css", "static/chunks/6785-97d9934305a8084b.js", "static/css/90d656b59056fcf4.css"), self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();