(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [480],
  {
    239: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      let r = n(7437),
        o = n(2265);
      t.default = function (e) {
        let {
          html: t,
          height: n = null,
          width: i = null,
          children: a,
          dataNtpc: s = "",
        } = e;
        return (
          (0, o.useEffect)(() => {
            s &&
              performance.mark("mark_feature_usage", {
                detail: { feature: "next-third-parties-".concat(s) },
              });
          }, [s]),
          (0, r.jsxs)(r.Fragment, {
            children: [
              a,
              t
                ? (0, r.jsx)("div", {
                    style: {
                      height: null != n ? "".concat(n, "px") : "auto",
                      width: null != i ? "".concat(i, "px") : "auto",
                    },
                    "data-ntpc": s,
                    dangerouslySetInnerHTML: { __html: t },
                  })
                : null,
            ],
          })
        );
      };
    },
    4404: function (e, t, n) {
      "use strict";
      var r;
      let o;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.sendGAEvent = t.GoogleAnalytics = void 0);
      let i = n(7437),
        a = n(2265),
        s = (r = n(1877)) && r.__esModule ? r : { default: r };
      (t.GoogleAnalytics = function (e) {
        let { gaId: t, dataLayerName: n = "dataLayer" } = e;
        return (
          void 0 === o && (o = n),
          (0, a.useEffect)(() => {
            performance.mark("mark_feature_usage", {
              detail: { feature: "next-third-parties-ga" },
            });
          }, []),
          (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)(s.default, {
                id: "_next-ga-init",
                dangerouslySetInnerHTML: {
                  __html: "\n          window['"
                    .concat(n, "'] = window['")
                    .concat(n, "'] || [];\n          function gtag(){window['")
                    .concat(
                      n,
                      "'].push(arguments);}\n          gtag('js', new Date());\n\n          gtag('config', '"
                    )
                    .concat(t, "');"),
                },
              }),
              (0, i.jsx)(s.default, {
                id: "_next-ga",
                src: "https://www.googletagmanager.com/gtag/js?id=".concat(t),
              }),
            ],
          })
        );
      }),
        (t.sendGAEvent = function () {
          for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          if (void 0 === o) {
            console.warn("@next/third-parties: GA has not been initialized");
            return;
          }
          window[o]
            ? window[o].push(arguments)
            : console.warn(
                "@next/third-parties: GA dataLayer ".concat(
                  o,
                  " does not exist"
                )
              );
        });
    },
    7640: function (e, t, n) {
      "use strict";
      var r;
      let o;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.sendGTMEvent = t.GoogleTagManager = void 0);
      let i = n(7437),
        a = n(2265),
        s = (r = n(1877)) && r.__esModule ? r : { default: r };
      (t.GoogleTagManager = function (e) {
        let {
          gtmId: t,
          dataLayerName: n = "dataLayer",
          auth: r,
          preview: l,
          dataLayer: u,
        } = e;
        void 0 === o && (o = n);
        let c = "dataLayer" !== n ? "&l=".concat(n) : "";
        return (
          (0, a.useEffect)(() => {
            performance.mark("mark_feature_usage", {
              detail: { feature: "next-third-parties-gtm" },
            });
          }, []),
          (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)(s.default, {
                id: "_next-gtm-init",
                dangerouslySetInnerHTML: {
                  __html:
                    "\n      (function(w,l){\n        w[l]=w[l]||[];\n        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});\n        "
                      .concat(
                        u ? "w[l].push(".concat(JSON.stringify(u), ")") : "",
                        "\n      })(window,'"
                      )
                      .concat(n, "');"),
                },
              }),
              (0, i.jsx)(s.default, {
                id: "_next-gtm",
                "data-ntpc": "GTM",
                src: "https://www.googletagmanager.com/gtm.js?id="
                  .concat(t)
                  .concat(c)
                  .concat(r ? "&gtm_auth=".concat(r) : "")
                  .concat(
                    l ? "&gtm_preview=".concat(l, "&gtm_cookies_win=x") : ""
                  ),
              }),
            ],
          })
        );
      }),
        (t.sendGTMEvent = (e) => {
          if (void 0 === o) {
            console.warn("@next/third-parties: GTM has not been initialized");
            return;
          }
          window[o]
            ? window[o].push(e)
            : console.warn(
                "@next/third-parties: GTM dataLayer ".concat(
                  o,
                  " does not exist"
                )
              );
        });
    },
    8030: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return l;
        },
      });
      var r = n(2265);
      let o = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
        i = function () {
          for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return t.filter((e, t, n) => !!e && n.indexOf(e) === t).join(" ");
        };
      var a = {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
      };
      let s = (0, r.forwardRef)((e, t) => {
          let {
            color: n = "currentColor",
            size: o = 24,
            strokeWidth: s = 2,
            absoluteStrokeWidth: l,
            className: u = "",
            children: c,
            iconNode: d,
            ...f
          } = e;
          return (0, r.createElement)(
            "svg",
            {
              ref: t,
              ...a,
              width: o,
              height: o,
              stroke: n,
              strokeWidth: l ? (24 * Number(s)) / Number(o) : s,
              className: i("lucide", u),
              ...f,
            },
            [
              ...d.map((e) => {
                let [t, n] = e;
                return (0, r.createElement)(t, n);
              }),
              ...(Array.isArray(c) ? c : [c]),
            ]
          );
        }),
        l = (e, t) => {
          let n = (0, r.forwardRef)((n, a) => {
            let { className: l, ...u } = n;
            return (0, r.createElement)(s, {
              ref: a,
              iconNode: t,
              className: i("lucide-".concat(o(e)), l),
              ...u,
            });
          });
          return (n.displayName = "".concat(e)), n;
        };
    },
    2873: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      let r = (0, n(8030).Z)("Menu", [
        ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
        ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
        ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
      ]);
    },
    4697: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      let r = (0, n(8030).Z)("X", [
        ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
        ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
      ]);
    },
    1877: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return o.a;
          },
        });
      var r = n(4080),
        o = n.n(r),
        i = {};
      for (var a in r)
        "default" !== a &&
          (i[a] = function (e) {
            return r[e];
          }.bind(0, a));
      n.d(t, i);
    },
    905: function (e, t) {
      "use strict";
      let n;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          DOMAttributeNames: function () {
            return r;
          },
          default: function () {
            return a;
          },
          isEqualNode: function () {
            return i;
          },
        });
      let r = {
        acceptCharset: "accept-charset",
        className: "class",
        htmlFor: "for",
        httpEquiv: "http-equiv",
        noModule: "noModule",
      };
      function o(e) {
        let { type: t, props: n } = e,
          o = document.createElement(t);
        for (let e in n) {
          if (
            !n.hasOwnProperty(e) ||
            "children" === e ||
            "dangerouslySetInnerHTML" === e ||
            void 0 === n[e]
          )
            continue;
          let i = r[e] || e.toLowerCase();
          "script" === t && ("async" === i || "defer" === i || "noModule" === i)
            ? (o[i] = !!n[e])
            : o.setAttribute(i, n[e]);
        }
        let { children: i, dangerouslySetInnerHTML: a } = n;
        return (
          a
            ? (o.innerHTML = a.__html || "")
            : i &&
              (o.textContent =
                "string" == typeof i ? i : Array.isArray(i) ? i.join("") : ""),
          o
        );
      }
      function i(e, t) {
        if (e instanceof HTMLElement && t instanceof HTMLElement) {
          let n = t.getAttribute("nonce");
          if (n && !e.getAttribute("nonce")) {
            let r = t.cloneNode(!0);
            return (
              r.setAttribute("nonce", ""),
              (r.nonce = n),
              n === e.nonce && e.isEqualNode(r)
            );
          }
        }
        return e.isEqualNode(t);
      }
      function a() {
        return {
          mountedInstances: new Set(),
          updateHead: (e) => {
            let t = {};
            e.forEach((e) => {
              if ("link" === e.type && e.props["data-optimized-fonts"]) {
                if (
                  document.querySelector(
                    'style[data-href="' + e.props["data-href"] + '"]'
                  )
                )
                  return;
                (e.props.href = e.props["data-href"]),
                  (e.props["data-href"] = void 0);
              }
              let n = t[e.type] || [];
              n.push(e), (t[e.type] = n);
            });
            let r = t.title ? t.title[0] : null,
              o = "";
            if (r) {
              let { children: e } = r.props;
              o = "string" == typeof e ? e : Array.isArray(e) ? e.join("") : "";
            }
            o !== document.title && (document.title = o),
              ["meta", "base", "link", "style", "script"].forEach((e) => {
                n(e, t[e] || []);
              });
          },
        };
      }
      (n = (e, t) => {
        let n = document.getElementsByTagName("head")[0],
          r = n.querySelector("meta[name=next-head-count]"),
          a = Number(r.content),
          s = [];
        for (
          let t = 0, n = r.previousElementSibling;
          t < a;
          t++, n = (null == n ? void 0 : n.previousElementSibling) || null
        ) {
          var l;
          (null == n
            ? void 0
            : null == (l = n.tagName)
            ? void 0
            : l.toLowerCase()) === e && s.push(n);
        }
        let u = t.map(o).filter((e) => {
          for (let t = 0, n = s.length; t < n; t++)
            if (i(s[t], e)) return s.splice(t, 1), !1;
          return !0;
        });
        s.forEach((e) => {
          var t;
          return null == (t = e.parentNode) ? void 0 : t.removeChild(e);
        }),
          u.forEach((e) => n.insertBefore(e, r)),
          (r.content = (a - s.length + u.length).toString());
      }),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    4080: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          default: function () {
            return w;
          },
          handleClientScriptLoad: function () {
            return h;
          },
          initScriptLoader: function () {
            return y;
          },
        });
      let r = n(9920),
        o = n(1452),
        i = n(7437),
        a = r._(n(4887)),
        s = o._(n(2265)),
        l = n(6590),
        u = n(905),
        c = n(9189),
        d = new Map(),
        f = new Set(),
        p = [
          "onLoad",
          "onReady",
          "dangerouslySetInnerHTML",
          "children",
          "onError",
          "strategy",
          "stylesheets",
        ],
        m = (e) => {
          if (a.default.preinit) {
            e.forEach((e) => {
              a.default.preinit(e, { as: "style" });
            });
            return;
          }
          if ("undefined" != typeof window) {
            let t = document.head;
            e.forEach((e) => {
              let n = document.createElement("link");
              (n.type = "text/css"),
                (n.rel = "stylesheet"),
                (n.href = e),
                t.appendChild(n);
            });
          }
        },
        v = (e) => {
          let {
              src: t,
              id: n,
              onLoad: r = () => {},
              onReady: o = null,
              dangerouslySetInnerHTML: i,
              children: a = "",
              strategy: s = "afterInteractive",
              onError: l,
              stylesheets: c,
            } = e,
            v = n || t;
          if (v && f.has(v)) return;
          if (d.has(t)) {
            f.add(v), d.get(t).then(r, l);
            return;
          }
          let h = () => {
              o && o(), f.add(v);
            },
            y = document.createElement("script"),
            g = new Promise((e, t) => {
              y.addEventListener("load", function (t) {
                e(), r && r.call(this, t), h();
              }),
                y.addEventListener("error", function (e) {
                  t(e);
                });
            }).catch(function (e) {
              l && l(e);
            });
          for (let [n, r] of (i
            ? ((y.innerHTML = i.__html || ""), h())
            : a
            ? ((y.textContent =
                "string" == typeof a ? a : Array.isArray(a) ? a.join("") : ""),
              h())
            : t && ((y.src = t), d.set(t, g)),
          Object.entries(e))) {
            if (void 0 === r || p.includes(n)) continue;
            let e = u.DOMAttributeNames[n] || n.toLowerCase();
            y.setAttribute(e, r);
          }
          "worker" === s && y.setAttribute("type", "text/partytown"),
            y.setAttribute("data-nscript", s),
            c && m(c),
            document.body.appendChild(y);
        };
      function h(e) {
        let { strategy: t = "afterInteractive" } = e;
        "lazyOnload" === t
          ? window.addEventListener("load", () => {
              (0, c.requestIdleCallback)(() => v(e));
            })
          : v(e);
      }
      function y(e) {
        e.forEach(h),
          [
            ...document.querySelectorAll('[data-nscript="beforeInteractive"]'),
            ...document.querySelectorAll('[data-nscript="beforePageRender"]'),
          ].forEach((e) => {
            let t = e.id || e.getAttribute("src");
            f.add(t);
          });
      }
      function g(e) {
        let {
            id: t,
            src: n = "",
            onLoad: r = () => {},
            onReady: o = null,
            strategy: u = "afterInteractive",
            onError: d,
            stylesheets: p,
            ...m
          } = e,
          {
            updateScripts: h,
            scripts: y,
            getIsSsr: g,
            appDir: w,
            nonce: b,
          } = (0, s.useContext)(l.HeadManagerContext),
          E = (0, s.useRef)(!1);
        (0, s.useEffect)(() => {
          let e = t || n;
          E.current || (o && e && f.has(e) && o(), (E.current = !0));
        }, [o, t, n]);
        let x = (0, s.useRef)(!1);
        if (
          ((0, s.useEffect)(() => {
            !x.current &&
              ("afterInteractive" === u
                ? v(e)
                : "lazyOnload" === u &&
                  ("complete" === document.readyState
                    ? (0, c.requestIdleCallback)(() => v(e))
                    : window.addEventListener("load", () => {
                        (0, c.requestIdleCallback)(() => v(e));
                      })),
              (x.current = !0));
          }, [e, u]),
          ("beforeInteractive" === u || "worker" === u) &&
            (h
              ? ((y[u] = (y[u] || []).concat([
                  { id: t, src: n, onLoad: r, onReady: o, onError: d, ...m },
                ])),
                h(y))
              : g && g()
              ? f.add(t || n)
              : g && !g() && v(e)),
          w)
        ) {
          if (
            (p &&
              p.forEach((e) => {
                a.default.preinit(e, { as: "style" });
              }),
            "beforeInteractive" === u)
          )
            return n
              ? (a.default.preload(
                  n,
                  m.integrity
                    ? {
                        as: "script",
                        integrity: m.integrity,
                        nonce: b,
                        crossOrigin: m.crossOrigin,
                      }
                    : { as: "script", nonce: b, crossOrigin: m.crossOrigin }
                ),
                (0, i.jsx)("script", {
                  nonce: b,
                  dangerouslySetInnerHTML: {
                    __html:
                      "(self.__next_s=self.__next_s||[]).push(" +
                      JSON.stringify([n, { ...m, id: t }]) +
                      ")",
                  },
                }))
              : (m.dangerouslySetInnerHTML &&
                  ((m.children = m.dangerouslySetInnerHTML.__html),
                  delete m.dangerouslySetInnerHTML),
                (0, i.jsx)("script", {
                  nonce: b,
                  dangerouslySetInnerHTML: {
                    __html:
                      "(self.__next_s=self.__next_s||[]).push(" +
                      JSON.stringify([0, { ...m, id: t }]) +
                      ")",
                  },
                }));
          "afterInteractive" === u &&
            n &&
            a.default.preload(
              n,
              m.integrity
                ? {
                    as: "script",
                    integrity: m.integrity,
                    nonce: b,
                    crossOrigin: m.crossOrigin,
                  }
                : { as: "script", nonce: b, crossOrigin: m.crossOrigin }
            );
        }
        return null;
      }
      Object.defineProperty(g, "__nextScript", { value: !0 });
      let w = g;
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    9593: function (e, t, n) {
      "use strict";
      var r = Object.create,
        o = Object.defineProperty,
        i = Object.getOwnPropertyDescriptor,
        a = Object.getOwnPropertyNames,
        s = Object.getPrototypeOf,
        l = Object.prototype.hasOwnProperty,
        u = (e, t) => o(e, "name", { value: t, configurable: !0 }),
        c = (e, t, n, r) => {
          if ((t && "object" == typeof t) || "function" == typeof t)
            for (let s of a(t))
              l.call(e, s) ||
                s === n ||
                o(e, s, {
                  get: () => t[s],
                  enumerable: !(r = i(t, s)) || r.enumerable,
                });
          return e;
        },
        d = (e, t, n) => (
          (n = null != e ? r(s(e)) : {}),
          c(
            !t && e && e.__esModule
              ? n
              : o(n, "default", { value: e, enumerable: !0 }),
            e
          )
        ),
        f = {};
      ((e, t) => {
        for (var n in t) o(e, n, { get: t[n], enumerable: !0 });
      })(f, { default: () => y }),
        (e.exports = c(o({}, "__esModule", { value: !0 }), f));
      var p = d(n(1448)),
        m = d(n(2265)),
        v = d(n(4278)),
        h = u((e) => {
          let {
              color: t,
              height: n,
              showSpinner: r,
              crawl: o,
              crawlSpeed: i,
              initialPosition: a,
              easing: s,
              speed: l,
              shadow: c,
              template: d,
              zIndex: f = 1600,
              showAtBottom: p = !1,
            } = e,
            h = null != t ? t : "#29d",
            y =
              c || void 0 === c
                ? c
                  ? "box-shadow:".concat(c)
                  : "box-shadow:0 0 10px ".concat(h, ",0 0 5px ").concat(h)
                : "",
            g = m.createElement(
              "style",
              null,
              "#nprogress{pointer-events:none}#nprogress .bar{background:"
                .concat(h, ";position:fixed;z-index:")
                .concat(f, ";")
                .concat(
                  p ? "bottom: 0;" : "top: 0;",
                  "left:0;width:100%;height:"
                )
                .concat(
                  null != n ? n : 3,
                  "px}#nprogress .peg{display:block;position:absolute;right:0;width:100px;height:100%;"
                )
                .concat(
                  y,
                  ";opacity:1;-webkit-transform:rotate(3deg) translate(0px,-4px);-ms-transform:rotate(3deg) translate(0px,-4px);transform:rotate(3deg) translate(0px,-4px)}#nprogress .spinner{display:block;position:fixed;z-index:"
                )
                .concat(f, ";")
                .concat(
                  p ? "bottom: 15px;" : "top: 15px;",
                  "right:15px}#nprogress .spinner-icon{width:18px;height:18px;box-sizing:border-box;border:2px solid transparent;border-top-color:"
                )
                .concat(h, ";border-left-color:")
                .concat(
                  h,
                  ";border-radius:50%;-webkit-animation:nprogress-spinner 400ms linear infinite;animation:nprogress-spinner 400ms linear infinite}.nprogress-custom-parent{overflow:hidden;position:relative}.nprogress-custom-parent #nprogress .bar,.nprogress-custom-parent #nprogress .spinner{position:absolute}@-webkit-keyframes nprogress-spinner{0%{-webkit-transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg)}}@keyframes nprogress-spinner{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}"
                )
            ),
            w = u(
              (e) => new URL(e, window.location.href).href,
              "toAbsoluteURL"
            ),
            b = u((e, t) => {
              let n = new URL(w(e)),
                r = new URL(w(t));
              return n.href.split("#")[0] === r.href.split("#")[0];
            }, "isHashAnchor"),
            E = u((e, t) => {
              let n = new URL(w(e)),
                r = new URL(w(t));
              return (
                n.hostname.replace(/^www\./, "") ===
                r.hostname.replace(/^www\./, "")
              );
            }, "isSameHostName");
          return (
            m.useEffect(() => {
              let e, t;
              function n(e, t) {
                let n = new URL(e),
                  r = new URL(t);
                if (
                  n.hostname === r.hostname &&
                  n.pathname === r.pathname &&
                  n.search === r.search
                ) {
                  let e = n.hash,
                    t = r.hash;
                  return (
                    e !== t && n.href.replace(e, "") === r.href.replace(t, "")
                  );
                }
                return !1;
              }
              v.configure({
                showSpinner: null == r || r,
                trickle: null == o || o,
                trickleSpeed: null != i ? i : 200,
                minimum: null != a ? a : 0.08,
                easing: null != s ? s : "ease",
                speed: null != l ? l : 200,
                template:
                  null != d
                    ? d
                    : '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>',
              }),
                u(n, "isAnchorOfCurrentUrl");
              var c,
                f,
                p = document.querySelectorAll("html");
              let m = u(
                () => p.forEach((e) => e.classList.remove("nprogress-busy")),
                "removeNProgressClass"
              );
              function h(e) {
                for (; e && "a" !== e.tagName.toLowerCase(); )
                  e = e.parentElement;
                return e;
              }
              function y(e) {
                try {
                  let t = e.target,
                    r = h(t),
                    o = null == r ? void 0 : r.href;
                  if (o) {
                    let t = window.location.href,
                      i = "_blank" === r.target,
                      a = [
                        "tel:",
                        "mailto:",
                        "sms:",
                        "blob:",
                        "download:",
                      ].some((e) => o.startsWith(e)),
                      s = n(t, o);
                    if (!E(window.location.href, r.href)) return;
                    o === t ||
                    s ||
                    i ||
                    a ||
                    e.ctrlKey ||
                    e.metaKey ||
                    e.shiftKey ||
                    e.altKey ||
                    b(window.location.href, r.href) ||
                    !w(r.href).startsWith("http")
                      ? (v.start(), v.done(), m())
                      : v.start();
                  }
                } catch (e) {
                  v.start(), v.done();
                }
              }
              function g() {
                v.done(), m();
              }
              function x() {
                v.done();
              }
              return (
                u(h, "findClosestAnchor"),
                u(y, "handleClick"),
                (e = (c = window.history).pushState),
                (c.pushState = function () {
                  for (
                    var t = arguments.length, n = Array(t), r = 0;
                    r < t;
                    r++
                  )
                    n[r] = arguments[r];
                  return v.done(), m(), e.apply(c, n);
                }),
                (t = (f = window.history).replaceState),
                (f.replaceState = function () {
                  for (
                    var e = arguments.length, n = Array(e), r = 0;
                    r < e;
                    r++
                  )
                    n[r] = arguments[r];
                  return v.done(), m(), t.apply(f, n);
                }),
                u(g, "handlePageHide"),
                u(x, "handleBackAndForth"),
                window.addEventListener("popstate", x),
                document.addEventListener("click", y),
                window.addEventListener("pagehide", g),
                () => {
                  document.removeEventListener("click", y),
                    window.removeEventListener("pagehide", g),
                    window.removeEventListener("popstate", x);
                }
              );
            }, []),
            g
          );
        }, "NextTopLoader"),
        y = h;
      h.propTypes = {
        color: p.string,
        height: p.number,
        showSpinner: p.bool,
        crawl: p.bool,
        crawlSpeed: p.number,
        initialPosition: p.number,
        easing: p.string,
        speed: p.number,
        template: p.string,
        shadow: p.oneOfType([p.string, p.bool]),
        zIndex: p.number,
        showAtBottom: p.bool,
      };
    },
    4278: function (e, t, n) {
      var r, o;
      void 0 !==
        (o =
          "function" ==
          typeof (r = function () {
            var e,
              t,
              n,
              r = {};
            r.version = "0.2.0";
            var o = (r.settings = {
              minimum: 0.08,
              easing: "ease",
              positionUsing: "",
              speed: 200,
              trickle: !0,
              trickleRate: 0.02,
              trickleSpeed: 800,
              showSpinner: !0,
              barSelector: '[role="bar"]',
              spinnerSelector: '[role="spinner"]',
              parent: "body",
              template:
                '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>',
            });
            function i(e, t, n) {
              return e < t ? t : e > n ? n : e;
            }
            (r.configure = function (e) {
              var t, n;
              for (t in e)
                void 0 !== (n = e[t]) && e.hasOwnProperty(t) && (o[t] = n);
              return this;
            }),
              (r.status = null),
              (r.set = function (e) {
                var t = r.isStarted();
                (e = i(e, o.minimum, 1)), (r.status = 1 === e ? null : e);
                var n = r.render(!t),
                  l = n.querySelector(o.barSelector),
                  u = o.speed,
                  c = o.easing;
                return (
                  n.offsetWidth,
                  a(function (t) {
                    var i, a;
                    "" === o.positionUsing &&
                      (o.positionUsing = r.getPositioningCSS()),
                      s(
                        l,
                        ((i = e),
                        ((a =
                          "translate3d" === o.positionUsing
                            ? {
                                transform:
                                  "translate3d(" + (-1 + i) * 100 + "%,0,0)",
                              }
                            : "translate" === o.positionUsing
                            ? {
                                transform:
                                  "translate(" + (-1 + i) * 100 + "%,0)",
                              }
                            : {
                                "margin-left": (-1 + i) * 100 + "%",
                              }).transition = "all " + u + "ms " + c),
                        a)
                      ),
                      1 === e
                        ? (s(n, { transition: "none", opacity: 1 }),
                          n.offsetWidth,
                          setTimeout(function () {
                            s(n, {
                              transition: "all " + u + "ms linear",
                              opacity: 0,
                            }),
                              setTimeout(function () {
                                r.remove(), t();
                              }, u);
                          }, u))
                        : setTimeout(t, u);
                  }),
                  this
                );
              }),
              (r.isStarted = function () {
                return "number" == typeof r.status;
              }),
              (r.start = function () {
                r.status || r.set(0);
                var e = function () {
                  setTimeout(function () {
                    r.status && (r.trickle(), e());
                  }, o.trickleSpeed);
                };
                return o.trickle && e(), this;
              }),
              (r.done = function (e) {
                return e || r.status
                  ? r.inc(0.3 + 0.5 * Math.random()).set(1)
                  : this;
              }),
              (r.inc = function (e) {
                var t = r.status;
                return t
                  ? ("number" != typeof e &&
                      (e = (1 - t) * i(Math.random() * t, 0.1, 0.95)),
                    (t = i(t + e, 0, 0.994)),
                    r.set(t))
                  : r.start();
              }),
              (r.trickle = function () {
                return r.inc(Math.random() * o.trickleRate);
              }),
              (e = 0),
              (t = 0),
              (r.promise = function (n) {
                return (
                  n &&
                    "resolved" !== n.state() &&
                    (0 === t && r.start(),
                    e++,
                    t++,
                    n.always(function () {
                      0 == --t ? ((e = 0), r.done()) : r.set((e - t) / e);
                    })),
                  this
                );
              }),
              (r.render = function (e) {
                if (r.isRendered()) return document.getElementById("nprogress");
                u(document.documentElement, "nprogress-busy");
                var t = document.createElement("div");
                (t.id = "nprogress"), (t.innerHTML = o.template);
                var n,
                  i = t.querySelector(o.barSelector),
                  a = e ? "-100" : (-1 + (r.status || 0)) * 100,
                  l = document.querySelector(o.parent);
                return (
                  s(i, {
                    transition: "all 0 linear",
                    transform: "translate3d(" + a + "%,0,0)",
                  }),
                  !o.showSpinner &&
                    (n = t.querySelector(o.spinnerSelector)) &&
                    f(n),
                  l != document.body && u(l, "nprogress-custom-parent"),
                  l.appendChild(t),
                  t
                );
              }),
              (r.remove = function () {
                c(document.documentElement, "nprogress-busy"),
                  c(
                    document.querySelector(o.parent),
                    "nprogress-custom-parent"
                  );
                var e = document.getElementById("nprogress");
                e && f(e);
              }),
              (r.isRendered = function () {
                return !!document.getElementById("nprogress");
              }),
              (r.getPositioningCSS = function () {
                var e = document.body.style,
                  t =
                    "WebkitTransform" in e
                      ? "Webkit"
                      : "MozTransform" in e
                      ? "Moz"
                      : "msTransform" in e
                      ? "ms"
                      : "OTransform" in e
                      ? "O"
                      : "";
                return t + "Perspective" in e
                  ? "translate3d"
                  : t + "Transform" in e
                  ? "translate"
                  : "margin";
              });
            var a =
                ((n = []),
                function (e) {
                  n.push(e),
                    1 == n.length &&
                      (function e() {
                        var t = n.shift();
                        t && t(e);
                      })();
                }),
              s = (function () {
                var e = ["Webkit", "O", "Moz", "ms"],
                  t = {};
                function n(n, r, o) {
                  var i;
                  (r =
                    t[
                      (i = (i = r)
                        .replace(/^-ms-/, "ms-")
                        .replace(/-([\da-z])/gi, function (e, t) {
                          return t.toUpperCase();
                        }))
                    ] ||
                    (t[i] = (function (t) {
                      var n = document.body.style;
                      if (t in n) return t;
                      for (
                        var r,
                          o = e.length,
                          i = t.charAt(0).toUpperCase() + t.slice(1);
                        o--;

                      )
                        if ((r = e[o] + i) in n) return r;
                      return t;
                    })(i))),
                    (n.style[r] = o);
                }
                return function (e, t) {
                  var r,
                    o,
                    i = arguments;
                  if (2 == i.length)
                    for (r in t)
                      void 0 !== (o = t[r]) &&
                        t.hasOwnProperty(r) &&
                        n(e, r, o);
                  else n(e, i[1], i[2]);
                };
              })();
            function l(e, t) {
              return (
                ("string" == typeof e ? e : d(e)).indexOf(" " + t + " ") >= 0
              );
            }
            function u(e, t) {
              var n = d(e),
                r = n + t;
              l(n, t) || (e.className = r.substring(1));
            }
            function c(e, t) {
              var n,
                r = d(e);
              l(e, t) &&
                ((n = r.replace(" " + t + " ", " ")),
                (e.className = n.substring(1, n.length - 1)));
            }
            function d(e) {
              return (" " + (e.className || "") + " ").replace(/\s+/gi, " ");
            }
            function f(e) {
              e && e.parentNode && e.parentNode.removeChild(e);
            }
            return r;
          })
            ? r.call(t, n, t, e)
            : r) && (e.exports = o);
    },
    2278: function (e, t, n) {
      "use strict";
      n.d(t, {
        aU: function () {
          return el;
        },
        x8: function () {
          return eu;
        },
        dk: function () {
          return es;
        },
        zt: function () {
          return er;
        },
        fC: function () {
          return ei;
        },
        Dx: function () {
          return ea;
        },
        l_: function () {
          return eo;
        },
      });
      var r,
        o = n(2265),
        i = n(4887);
      function a(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
        return function (r) {
          if ((e?.(r), !1 === n || !r.defaultPrevented)) return t?.(r);
        };
      }
      var s = n(1584),
        l = n(7437);
      function u(e, t = []) {
        let n = [],
          r = () => {
            let t = n.map((e) => o.createContext(e));
            return function (n) {
              let r = n?.[e] || t;
              return o.useMemo(
                () => ({ [`__scope${e}`]: { ...n, [e]: r } }),
                [n, r]
              );
            };
          };
        return (
          (r.scopeName = e),
          [
            function (t, r) {
              let i = o.createContext(r),
                a = n.length;
              function s(t) {
                let { scope: n, children: r, ...s } = t,
                  u = n?.[e][a] || i,
                  c = o.useMemo(() => s, Object.values(s));
                return (0, l.jsx)(u.Provider, { value: c, children: r });
              }
              return (
                (n = [...n, r]),
                (s.displayName = t + "Provider"),
                [
                  s,
                  function (n, s) {
                    let l = s?.[e][a] || i,
                      u = o.useContext(l);
                    if (u) return u;
                    if (void 0 !== r) return r;
                    throw Error(`\`${n}\` must be used within \`${t}\``);
                  },
                ]
              );
            },
            (function (...e) {
              let t = e[0];
              if (1 === e.length) return t;
              let n = () => {
                let n = e.map((e) => ({
                  useScope: e(),
                  scopeName: e.scopeName,
                }));
                return function (e) {
                  let r = n.reduce((t, { useScope: n, scopeName: r }) => {
                    let o = n(e)[`__scope${r}`];
                    return { ...t, ...o };
                  }, {});
                  return o.useMemo(
                    () => ({ [`__scope${t.scopeName}`]: r }),
                    [r]
                  );
                };
              };
              return (n.scopeName = t.scopeName), n;
            })(r, ...t),
          ]
        );
      }
      var c = n(1538),
        d = [
          "a",
          "button",
          "div",
          "form",
          "h2",
          "h3",
          "img",
          "input",
          "label",
          "li",
          "nav",
          "ol",
          "p",
          "span",
          "svg",
          "ul",
        ].reduce((e, t) => {
          let n = o.forwardRef((e, n) => {
            let { asChild: r, ...o } = e,
              i = r ? c.g7 : t;
            return (
              "undefined" != typeof window &&
                (window[Symbol.for("radix-ui")] = !0),
              (0, l.jsx)(i, { ...o, ref: n })
            );
          });
          return (n.displayName = `Primitive.${t}`), { ...e, [t]: n };
        }, {});
      function f(e, t) {
        e && i.flushSync(() => e.dispatchEvent(t));
      }
      function p(e) {
        let t = o.useRef(e);
        return (
          o.useEffect(() => {
            t.current = e;
          }),
          o.useMemo(
            () =>
              (...e) =>
                t.current?.(...e),
            []
          )
        );
      }
      var m = "dismissableLayer.update",
        v = o.createContext({
          layers: new Set(),
          layersWithOutsidePointerEventsDisabled: new Set(),
          branches: new Set(),
        }),
        h = o.forwardRef((e, t) => {
          var n, i;
          let {
              disableOutsidePointerEvents: u = !1,
              onEscapeKeyDown: c,
              onPointerDownOutside: f,
              onFocusOutside: h,
              onInteractOutside: y,
              onDismiss: b,
              ...E
            } = e,
            x = o.useContext(v),
            [T, S] = o.useState(null),
            C =
              null !== (i = null == T ? void 0 : T.ownerDocument) &&
              void 0 !== i
                ? i
                : null === (n = globalThis) || void 0 === n
                ? void 0
                : n.document,
            [, L] = o.useState({}),
            k = (0, s.e)(t, (e) => S(e)),
            N = Array.from(x.layers),
            [_] = [...x.layersWithOutsidePointerEventsDisabled].slice(-1),
            P = N.indexOf(_),
            M = T ? N.indexOf(T) : -1,
            O = x.layersWithOutsidePointerEventsDisabled.size > 0,
            R = M >= P,
            j = (function (e) {
              var t;
              let n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null === (t = globalThis) || void 0 === t
                    ? void 0
                    : t.document,
                r = p(e),
                i = o.useRef(!1),
                a = o.useRef(() => {});
              return (
                o.useEffect(() => {
                  let e = (e) => {
                      if (e.target && !i.current) {
                        let t = function () {
                            w("dismissableLayer.pointerDownOutside", r, o, {
                              discrete: !0,
                            });
                          },
                          o = { originalEvent: e };
                        "touch" === e.pointerType
                          ? (n.removeEventListener("click", a.current),
                            (a.current = t),
                            n.addEventListener("click", a.current, {
                              once: !0,
                            }))
                          : t();
                      } else n.removeEventListener("click", a.current);
                      i.current = !1;
                    },
                    t = window.setTimeout(() => {
                      n.addEventListener("pointerdown", e);
                    }, 0);
                  return () => {
                    window.clearTimeout(t),
                      n.removeEventListener("pointerdown", e),
                      n.removeEventListener("click", a.current);
                  };
                }, [n, r]),
                { onPointerDownCapture: () => (i.current = !0) }
              );
            })((e) => {
              let t = e.target,
                n = [...x.branches].some((e) => e.contains(t));
              !R ||
                n ||
                (null == f || f(e),
                null == y || y(e),
                e.defaultPrevented || null == b || b());
            }, C),
            A = (function (e) {
              var t;
              let n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null === (t = globalThis) || void 0 === t
                    ? void 0
                    : t.document,
                r = p(e),
                i = o.useRef(!1);
              return (
                o.useEffect(() => {
                  let e = (e) => {
                    e.target &&
                      !i.current &&
                      w(
                        "dismissableLayer.focusOutside",
                        r,
                        { originalEvent: e },
                        { discrete: !1 }
                      );
                  };
                  return (
                    n.addEventListener("focusin", e),
                    () => n.removeEventListener("focusin", e)
                  );
                }, [n, r]),
                {
                  onFocusCapture: () => (i.current = !0),
                  onBlurCapture: () => (i.current = !1),
                }
              );
            })((e) => {
              let t = e.target;
              [...x.branches].some((e) => e.contains(t)) ||
                (null == h || h(e),
                null == y || y(e),
                e.defaultPrevented || null == b || b());
            }, C);
          return (
            !(function (e, t = globalThis?.document) {
              let n = p(e);
              o.useEffect(() => {
                let e = (e) => {
                  "Escape" === e.key && n(e);
                };
                return (
                  t.addEventListener("keydown", e, { capture: !0 }),
                  () => t.removeEventListener("keydown", e, { capture: !0 })
                );
              }, [n, t]);
            })((e) => {
              M !== x.layers.size - 1 ||
                (null == c || c(e),
                !e.defaultPrevented && b && (e.preventDefault(), b()));
            }, C),
            o.useEffect(() => {
              if (T)
                return (
                  u &&
                    (0 === x.layersWithOutsidePointerEventsDisabled.size &&
                      ((r = C.body.style.pointerEvents),
                      (C.body.style.pointerEvents = "none")),
                    x.layersWithOutsidePointerEventsDisabled.add(T)),
                  x.layers.add(T),
                  g(),
                  () => {
                    u &&
                      1 === x.layersWithOutsidePointerEventsDisabled.size &&
                      (C.body.style.pointerEvents = r);
                  }
                );
            }, [T, C, u, x]),
            o.useEffect(
              () => () => {
                T &&
                  (x.layers.delete(T),
                  x.layersWithOutsidePointerEventsDisabled.delete(T),
                  g());
              },
              [T, x]
            ),
            o.useEffect(() => {
              let e = () => L({});
              return (
                document.addEventListener(m, e),
                () => document.removeEventListener(m, e)
              );
            }, []),
            (0, l.jsx)(d.div, {
              ...E,
              ref: k,
              style: {
                pointerEvents: O ? (R ? "auto" : "none") : void 0,
                ...e.style,
              },
              onFocusCapture: a(e.onFocusCapture, A.onFocusCapture),
              onBlurCapture: a(e.onBlurCapture, A.onBlurCapture),
              onPointerDownCapture: a(
                e.onPointerDownCapture,
                j.onPointerDownCapture
              ),
            })
          );
        });
      h.displayName = "DismissableLayer";
      var y = o.forwardRef((e, t) => {
        let n = o.useContext(v),
          r = o.useRef(null),
          i = (0, s.e)(t, r);
        return (
          o.useEffect(() => {
            let e = r.current;
            if (e)
              return (
                n.branches.add(e),
                () => {
                  n.branches.delete(e);
                }
              );
          }, [n.branches]),
          (0, l.jsx)(d.div, { ...e, ref: i })
        );
      });
      function g() {
        let e = new CustomEvent(m);
        document.dispatchEvent(e);
      }
      function w(e, t, n, r) {
        let { discrete: o } = r,
          i = n.originalEvent.target,
          a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
        t && i.addEventListener(e, t, { once: !0 }),
          o ? f(i, a) : i.dispatchEvent(a);
      }
      y.displayName = "DismissableLayerBranch";
      var b = globalThis?.document ? o.useLayoutEffect : () => {},
        E = o.forwardRef((e, t) => {
          var n, r;
          let { container: a, ...s } = e,
            [u, c] = o.useState(!1);
          b(() => c(!0), []);
          let f =
            a ||
            (u &&
              (null === (r = globalThis) || void 0 === r
                ? void 0
                : null === (n = r.document) || void 0 === n
                ? void 0
                : n.body));
          return f
            ? i.createPortal((0, l.jsx)(d.div, { ...s, ref: t }), f)
            : null;
        });
      E.displayName = "Portal";
      var x = (e) => {
        var t, n;
        let r, a;
        let { present: l, children: u } = e,
          c = (function (e) {
            var t, n;
            let [r, a] = o.useState(),
              s = o.useRef({}),
              l = o.useRef(e),
              u = o.useRef("none"),
              [c, d] =
                ((t = e ? "mounted" : "unmounted"),
                (n = {
                  mounted: {
                    UNMOUNT: "unmounted",
                    ANIMATION_OUT: "unmountSuspended",
                  },
                  unmountSuspended: {
                    MOUNT: "mounted",
                    ANIMATION_END: "unmounted",
                  },
                  unmounted: { MOUNT: "mounted" },
                }),
                o.useReducer((e, t) => {
                  let r = n[e][t];
                  return null != r ? r : e;
                }, t));
            return (
              o.useEffect(() => {
                let e = T(s.current);
                u.current = "mounted" === c ? e : "none";
              }, [c]),
              b(() => {
                let t = s.current,
                  n = l.current;
                if (n !== e) {
                  let r = u.current,
                    o = T(t);
                  e
                    ? d("MOUNT")
                    : "none" === o ||
                      (null == t ? void 0 : t.display) === "none"
                    ? d("UNMOUNT")
                    : n && r !== o
                    ? d("ANIMATION_OUT")
                    : d("UNMOUNT"),
                    (l.current = e);
                }
              }, [e, d]),
              b(() => {
                if (r) {
                  let e = (e) => {
                      let t = T(s.current).includes(e.animationName);
                      e.target === r &&
                        t &&
                        i.flushSync(() => d("ANIMATION_END"));
                    },
                    t = (e) => {
                      e.target === r && (u.current = T(s.current));
                    };
                  return (
                    r.addEventListener("animationstart", t),
                    r.addEventListener("animationcancel", e),
                    r.addEventListener("animationend", e),
                    () => {
                      r.removeEventListener("animationstart", t),
                        r.removeEventListener("animationcancel", e),
                        r.removeEventListener("animationend", e);
                    }
                  );
                }
                d("ANIMATION_END");
              }, [r, d]),
              {
                isPresent: ["mounted", "unmountSuspended"].includes(c),
                ref: o.useCallback((e) => {
                  e && (s.current = getComputedStyle(e)), a(e);
                }, []),
              }
            );
          })(l),
          d =
            "function" == typeof u
              ? u({ present: c.isPresent })
              : o.Children.only(u),
          f = (0, s.e)(
            c.ref,
            (r =
              null === (t = Object.getOwnPropertyDescriptor(d.props, "ref")) ||
              void 0 === t
                ? void 0
                : t.get) &&
              "isReactWarning" in r &&
              r.isReactWarning
              ? d.ref
              : (r =
                  null === (n = Object.getOwnPropertyDescriptor(d, "ref")) ||
                  void 0 === n
                    ? void 0
                    : n.get) &&
                "isReactWarning" in r &&
                r.isReactWarning
              ? d.props.ref
              : d.props.ref || d.ref
          );
        return "function" == typeof u || c.isPresent
          ? o.cloneElement(d, { ref: f })
          : null;
      };
      function T(e) {
        return (null == e ? void 0 : e.animationName) || "none";
      }
      x.displayName = "Presence";
      var S = o.forwardRef((e, t) =>
        (0, l.jsx)(d.span, {
          ...e,
          ref: t,
          style: {
            position: "absolute",
            border: 0,
            width: 1,
            height: 1,
            padding: 0,
            margin: -1,
            overflow: "hidden",
            clip: "rect(0, 0, 0, 0)",
            whiteSpace: "nowrap",
            wordWrap: "normal",
            ...e.style,
          },
        })
      );
      S.displayName = "VisuallyHidden";
      var C = "ToastProvider",
        [L, k, N] = (function (e) {
          let t = e + "CollectionProvider",
            [n, r] = u(t),
            [i, a] = n(t, {
              collectionRef: { current: null },
              itemMap: new Map(),
            }),
            d = (e) => {
              let { scope: t, children: n } = e,
                r = o.useRef(null),
                a = o.useRef(new Map()).current;
              return (0, l.jsx)(i, {
                scope: t,
                itemMap: a,
                collectionRef: r,
                children: n,
              });
            };
          d.displayName = t;
          let f = e + "CollectionSlot",
            p = o.forwardRef((e, t) => {
              let { scope: n, children: r } = e,
                o = a(f, n),
                i = (0, s.e)(t, o.collectionRef);
              return (0, l.jsx)(c.g7, { ref: i, children: r });
            });
          p.displayName = f;
          let m = e + "CollectionItemSlot",
            v = "data-radix-collection-item",
            h = o.forwardRef((e, t) => {
              let { scope: n, children: r, ...i } = e,
                u = o.useRef(null),
                d = (0, s.e)(t, u),
                f = a(m, n);
              return (
                o.useEffect(
                  () => (
                    f.itemMap.set(u, { ref: u, ...i }),
                    () => void f.itemMap.delete(u)
                  )
                ),
                (0, l.jsx)(c.g7, { [v]: "", ref: d, children: r })
              );
            });
          return (
            (h.displayName = m),
            [
              { Provider: d, Slot: p, ItemSlot: h },
              function (t) {
                let n = a(e + "CollectionConsumer", t);
                return o.useCallback(() => {
                  let e = n.collectionRef.current;
                  if (!e) return [];
                  let t = Array.from(e.querySelectorAll("[".concat(v, "]")));
                  return Array.from(n.itemMap.values()).sort(
                    (e, n) =>
                      t.indexOf(e.ref.current) - t.indexOf(n.ref.current)
                  );
                }, [n.collectionRef, n.itemMap]);
              },
              r,
            ]
          );
        })("Toast"),
        [_, P] = u("Toast", [N]),
        [M, O] = _(C),
        R = (e) => {
          let {
              __scopeToast: t,
              label: n = "Notification",
              duration: r = 5e3,
              swipeDirection: i = "right",
              swipeThreshold: a = 50,
              children: s,
            } = e,
            [u, c] = o.useState(null),
            [d, f] = o.useState(0),
            p = o.useRef(!1),
            m = o.useRef(!1);
          return (
            n.trim() ||
              console.error(
                "Invalid prop `label` supplied to `".concat(
                  C,
                  "`. Expected non-empty `string`."
                )
              ),
            (0, l.jsx)(L.Provider, {
              scope: t,
              children: (0, l.jsx)(M, {
                scope: t,
                label: n,
                duration: r,
                swipeDirection: i,
                swipeThreshold: a,
                toastCount: d,
                viewport: u,
                onViewportChange: c,
                onToastAdd: o.useCallback(() => f((e) => e + 1), []),
                onToastRemove: o.useCallback(() => f((e) => e - 1), []),
                isFocusedToastEscapeKeyDownRef: p,
                isClosePausedRef: m,
                children: s,
              }),
            })
          );
        };
      R.displayName = C;
      var j = "ToastViewport",
        A = ["F8"],
        I = "toast.viewportPause",
        D = "toast.viewportResume",
        F = o.forwardRef((e, t) => {
          let {
              __scopeToast: n,
              hotkey: r = A,
              label: i = "Notifications ({hotkey})",
              ...a
            } = e,
            u = O(j, n),
            c = k(n),
            f = o.useRef(null),
            p = o.useRef(null),
            m = o.useRef(null),
            v = o.useRef(null),
            h = (0, s.e)(t, v, u.onViewportChange),
            g = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
            w = u.toastCount > 0;
          o.useEffect(() => {
            let e = (e) => {
              var t;
              r.every((t) => e[t] || e.code === t) &&
                (null === (t = v.current) || void 0 === t || t.focus());
            };
            return (
              document.addEventListener("keydown", e),
              () => document.removeEventListener("keydown", e)
            );
          }, [r]),
            o.useEffect(() => {
              let e = f.current,
                t = v.current;
              if (w && e && t) {
                let n = () => {
                    if (!u.isClosePausedRef.current) {
                      let e = new CustomEvent(I);
                      t.dispatchEvent(e), (u.isClosePausedRef.current = !0);
                    }
                  },
                  r = () => {
                    if (u.isClosePausedRef.current) {
                      let e = new CustomEvent(D);
                      t.dispatchEvent(e), (u.isClosePausedRef.current = !1);
                    }
                  },
                  o = (t) => {
                    e.contains(t.relatedTarget) || r();
                  },
                  i = () => {
                    e.contains(document.activeElement) || r();
                  };
                return (
                  e.addEventListener("focusin", n),
                  e.addEventListener("focusout", o),
                  e.addEventListener("pointermove", n),
                  e.addEventListener("pointerleave", i),
                  window.addEventListener("blur", n),
                  window.addEventListener("focus", r),
                  () => {
                    e.removeEventListener("focusin", n),
                      e.removeEventListener("focusout", o),
                      e.removeEventListener("pointermove", n),
                      e.removeEventListener("pointerleave", i),
                      window.removeEventListener("blur", n),
                      window.removeEventListener("focus", r);
                  }
                );
              }
            }, [w, u.isClosePausedRef]);
          let b = o.useCallback(
            (e) => {
              let { tabbingDirection: t } = e,
                n = c().map((e) => {
                  let n = e.ref.current,
                    r = [
                      n,
                      ...(function (e) {
                        let t = [],
                          n = document.createTreeWalker(
                            e,
                            NodeFilter.SHOW_ELEMENT,
                            {
                              acceptNode: (e) => {
                                let t =
                                  "INPUT" === e.tagName && "hidden" === e.type;
                                return e.disabled || e.hidden || t
                                  ? NodeFilter.FILTER_SKIP
                                  : e.tabIndex >= 0
                                  ? NodeFilter.FILTER_ACCEPT
                                  : NodeFilter.FILTER_SKIP;
                              },
                            }
                          );
                        for (; n.nextNode(); ) t.push(n.currentNode);
                        return t;
                      })(n),
                    ];
                  return "forwards" === t ? r : r.reverse();
                });
              return ("forwards" === t ? n.reverse() : n).flat();
            },
            [c]
          );
          return (
            o.useEffect(() => {
              let e = v.current;
              if (e) {
                let t = (t) => {
                  let n = t.altKey || t.ctrlKey || t.metaKey;
                  if ("Tab" === t.key && !n) {
                    var r, o, i;
                    let n = document.activeElement,
                      a = t.shiftKey;
                    if (t.target === e && a) {
                      null === (r = p.current) || void 0 === r || r.focus();
                      return;
                    }
                    let s = b({
                        tabbingDirection: a ? "backwards" : "forwards",
                      }),
                      l = s.findIndex((e) => e === n);
                    en(s.slice(l + 1))
                      ? t.preventDefault()
                      : a
                      ? null === (o = p.current) || void 0 === o || o.focus()
                      : null === (i = m.current) || void 0 === i || i.focus();
                  }
                };
                return (
                  e.addEventListener("keydown", t),
                  () => e.removeEventListener("keydown", t)
                );
              }
            }, [c, b]),
            (0, l.jsxs)(y, {
              ref: f,
              role: "region",
              "aria-label": i.replace("{hotkey}", g),
              tabIndex: -1,
              style: { pointerEvents: w ? void 0 : "none" },
              children: [
                w &&
                  (0, l.jsx)(H, {
                    ref: p,
                    onFocusFromOutsideViewport: () => {
                      en(b({ tabbingDirection: "forwards" }));
                    },
                  }),
                (0, l.jsx)(L.Slot, {
                  scope: n,
                  children: (0, l.jsx)(d.ol, { tabIndex: -1, ...a, ref: h }),
                }),
                w &&
                  (0, l.jsx)(H, {
                    ref: m,
                    onFocusFromOutsideViewport: () => {
                      en(b({ tabbingDirection: "backwards" }));
                    },
                  }),
              ],
            })
          );
        });
      F.displayName = j;
      var U = "ToastFocusProxy",
        H = o.forwardRef((e, t) => {
          let { __scopeToast: n, onFocusFromOutsideViewport: r, ...o } = e,
            i = O(U, n);
          return (0, l.jsx)(S, {
            "aria-hidden": !0,
            tabIndex: 0,
            ...o,
            ref: t,
            style: { position: "fixed" },
            onFocus: (e) => {
              var t;
              let n = e.relatedTarget;
              (null === (t = i.viewport) || void 0 === t
                ? void 0
                : t.contains(n)) || r();
            },
          });
        });
      H.displayName = U;
      var W = "Toast",
        z = o.forwardRef((e, t) => {
          let {
              forceMount: n,
              open: r,
              defaultOpen: i,
              onOpenChange: s,
              ...u
            } = e,
            [c = !0, d] = (function ({
              prop: e,
              defaultProp: t,
              onChange: n = () => {},
            }) {
              let [r, i] = (function ({ defaultProp: e, onChange: t }) {
                  let n = o.useState(e),
                    [r] = n,
                    i = o.useRef(r),
                    a = p(t);
                  return (
                    o.useEffect(() => {
                      i.current !== r && (a(r), (i.current = r));
                    }, [r, i, a]),
                    n
                  );
                })({ defaultProp: t, onChange: n }),
                a = void 0 !== e,
                s = a ? e : r,
                l = p(n);
              return [
                s,
                o.useCallback(
                  (t) => {
                    if (a) {
                      let n = "function" == typeof t ? t(e) : t;
                      n !== e && l(n);
                    } else i(t);
                  },
                  [a, e, i, l]
                ),
              ];
            })({ prop: r, defaultProp: i, onChange: s });
          return (0, l.jsx)(x, {
            present: n || c,
            children: (0, l.jsx)(B, {
              open: c,
              ...u,
              ref: t,
              onClose: () => d(!1),
              onPause: p(e.onPause),
              onResume: p(e.onResume),
              onSwipeStart: a(e.onSwipeStart, (e) => {
                e.currentTarget.setAttribute("data-swipe", "start");
              }),
              onSwipeMove: a(e.onSwipeMove, (e) => {
                let { x: t, y: n } = e.detail.delta;
                e.currentTarget.setAttribute("data-swipe", "move"),
                  e.currentTarget.style.setProperty(
                    "--radix-toast-swipe-move-x",
                    "".concat(t, "px")
                  ),
                  e.currentTarget.style.setProperty(
                    "--radix-toast-swipe-move-y",
                    "".concat(n, "px")
                  );
              }),
              onSwipeCancel: a(e.onSwipeCancel, (e) => {
                e.currentTarget.setAttribute("data-swipe", "cancel"),
                  e.currentTarget.style.removeProperty(
                    "--radix-toast-swipe-move-x"
                  ),
                  e.currentTarget.style.removeProperty(
                    "--radix-toast-swipe-move-y"
                  ),
                  e.currentTarget.style.removeProperty(
                    "--radix-toast-swipe-end-x"
                  ),
                  e.currentTarget.style.removeProperty(
                    "--radix-toast-swipe-end-y"
                  );
              }),
              onSwipeEnd: a(e.onSwipeEnd, (e) => {
                let { x: t, y: n } = e.detail.delta;
                e.currentTarget.setAttribute("data-swipe", "end"),
                  e.currentTarget.style.removeProperty(
                    "--radix-toast-swipe-move-x"
                  ),
                  e.currentTarget.style.removeProperty(
                    "--radix-toast-swipe-move-y"
                  ),
                  e.currentTarget.style.setProperty(
                    "--radix-toast-swipe-end-x",
                    "".concat(t, "px")
                  ),
                  e.currentTarget.style.setProperty(
                    "--radix-toast-swipe-end-y",
                    "".concat(n, "px")
                  ),
                  d(!1);
              }),
            }),
          });
        });
      z.displayName = W;
      var [K, q] = _(W, { onClose() {} }),
        B = o.forwardRef((e, t) => {
          let {
              __scopeToast: n,
              type: r = "foreground",
              duration: u,
              open: c,
              onClose: f,
              onEscapeKeyDown: m,
              onPause: v,
              onResume: y,
              onSwipeStart: g,
              onSwipeMove: w,
              onSwipeCancel: b,
              onSwipeEnd: E,
              ...x
            } = e,
            T = O(W, n),
            [S, C] = o.useState(null),
            k = (0, s.e)(t, (e) => C(e)),
            N = o.useRef(null),
            _ = o.useRef(null),
            P = u || T.duration,
            M = o.useRef(0),
            R = o.useRef(P),
            j = o.useRef(0),
            { onToastAdd: A, onToastRemove: F } = T,
            U = p(() => {
              var e;
              (null == S ? void 0 : S.contains(document.activeElement)) &&
                (null === (e = T.viewport) || void 0 === e || e.focus()),
                f();
            }),
            H = o.useCallback(
              (e) => {
                e &&
                  e !== 1 / 0 &&
                  (window.clearTimeout(j.current),
                  (M.current = new Date().getTime()),
                  (j.current = window.setTimeout(U, e)));
              },
              [U]
            );
          o.useEffect(() => {
            let e = T.viewport;
            if (e) {
              let t = () => {
                  H(R.current), null == y || y();
                },
                n = () => {
                  let e = new Date().getTime() - M.current;
                  (R.current = R.current - e),
                    window.clearTimeout(j.current),
                    null == v || v();
                };
              return (
                e.addEventListener(I, n),
                e.addEventListener(D, t),
                () => {
                  e.removeEventListener(I, n), e.removeEventListener(D, t);
                }
              );
            }
          }, [T.viewport, P, v, y, H]),
            o.useEffect(() => {
              c && !T.isClosePausedRef.current && H(P);
            }, [c, P, T.isClosePausedRef, H]),
            o.useEffect(() => (A(), () => F()), [A, F]);
          let z = o.useMemo(
            () =>
              S
                ? (function e(t) {
                    let n = [];
                    return (
                      Array.from(t.childNodes).forEach((t) => {
                        if (
                          (t.nodeType === t.TEXT_NODE &&
                            t.textContent &&
                            n.push(t.textContent),
                          t.nodeType === t.ELEMENT_NODE)
                        ) {
                          let r =
                              t.ariaHidden ||
                              t.hidden ||
                              "none" === t.style.display,
                            o = "" === t.dataset.radixToastAnnounceExclude;
                          if (!r) {
                            if (o) {
                              let e = t.dataset.radixToastAnnounceAlt;
                              e && n.push(e);
                            } else n.push(...e(t));
                          }
                        }
                      }),
                      n
                    );
                  })(S)
                : null,
            [S]
          );
          return T.viewport
            ? (0, l.jsxs)(l.Fragment, {
                children: [
                  z &&
                    (0, l.jsx)(G, {
                      __scopeToast: n,
                      role: "status",
                      "aria-live": "foreground" === r ? "assertive" : "polite",
                      "aria-atomic": !0,
                      children: z,
                    }),
                  (0, l.jsx)(K, {
                    scope: n,
                    onClose: U,
                    children: i.createPortal(
                      (0, l.jsx)(L.ItemSlot, {
                        scope: n,
                        children: (0, l.jsx)(h, {
                          asChild: !0,
                          onEscapeKeyDown: a(m, () => {
                            T.isFocusedToastEscapeKeyDownRef.current || U(),
                              (T.isFocusedToastEscapeKeyDownRef.current = !1);
                          }),
                          children: (0, l.jsx)(d.li, {
                            role: "status",
                            "aria-live": "off",
                            "aria-atomic": !0,
                            tabIndex: 0,
                            "data-state": c ? "open" : "closed",
                            "data-swipe-direction": T.swipeDirection,
                            ...x,
                            ref: k,
                            style: {
                              userSelect: "none",
                              touchAction: "none",
                              ...e.style,
                            },
                            onKeyDown: a(e.onKeyDown, (e) => {
                              "Escape" !== e.key ||
                                (null == m || m(e.nativeEvent),
                                e.nativeEvent.defaultPrevented ||
                                  ((T.isFocusedToastEscapeKeyDownRef.current =
                                    !0),
                                  U()));
                            }),
                            onPointerDown: a(e.onPointerDown, (e) => {
                              0 === e.button &&
                                (N.current = { x: e.clientX, y: e.clientY });
                            }),
                            onPointerMove: a(e.onPointerMove, (e) => {
                              if (!N.current) return;
                              let t = e.clientX - N.current.x,
                                n = e.clientY - N.current.y,
                                r = !!_.current,
                                o = ["left", "right"].includes(
                                  T.swipeDirection
                                ),
                                i = ["left", "up"].includes(T.swipeDirection)
                                  ? Math.min
                                  : Math.max,
                                a = o ? i(0, t) : 0,
                                s = o ? 0 : i(0, n),
                                l = "touch" === e.pointerType ? 10 : 2,
                                u = { x: a, y: s },
                                c = { originalEvent: e, delta: u };
                              r
                                ? ((_.current = u),
                                  ee("toast.swipeMove", w, c, { discrete: !1 }))
                                : et(u, T.swipeDirection, l)
                                ? ((_.current = u),
                                  ee("toast.swipeStart", g, c, {
                                    discrete: !1,
                                  }),
                                  e.target.setPointerCapture(e.pointerId))
                                : (Math.abs(t) > l || Math.abs(n) > l) &&
                                  (N.current = null);
                            }),
                            onPointerUp: a(e.onPointerUp, (e) => {
                              let t = _.current,
                                n = e.target;
                              if (
                                (n.hasPointerCapture(e.pointerId) &&
                                  n.releasePointerCapture(e.pointerId),
                                (_.current = null),
                                (N.current = null),
                                t)
                              ) {
                                let n = e.currentTarget,
                                  r = { originalEvent: e, delta: t };
                                et(t, T.swipeDirection, T.swipeThreshold)
                                  ? ee("toast.swipeEnd", E, r, { discrete: !0 })
                                  : ee("toast.swipeCancel", b, r, {
                                      discrete: !0,
                                    }),
                                  n.addEventListener(
                                    "click",
                                    (e) => e.preventDefault(),
                                    { once: !0 }
                                  );
                              }
                            }),
                          }),
                        }),
                      }),
                      T.viewport
                    ),
                  }),
                ],
              })
            : null;
        }),
        G = (e) => {
          let { __scopeToast: t, children: n, ...r } = e,
            i = O(W, t),
            [a, s] = o.useState(!1),
            [u, c] = o.useState(!1);
          return (
            (function () {
              let e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : () => {},
                t = p(e);
              b(() => {
                let e = 0,
                  n = 0;
                return (
                  (e = window.requestAnimationFrame(
                    () => (n = window.requestAnimationFrame(t))
                  )),
                  () => {
                    window.cancelAnimationFrame(e),
                      window.cancelAnimationFrame(n);
                  }
                );
              }, [t]);
            })(() => s(!0)),
            o.useEffect(() => {
              let e = window.setTimeout(() => c(!0), 1e3);
              return () => window.clearTimeout(e);
            }, []),
            u
              ? null
              : (0, l.jsx)(E, {
                  asChild: !0,
                  children: (0, l.jsx)(S, {
                    ...r,
                    children:
                      a &&
                      (0, l.jsxs)(l.Fragment, { children: [i.label, " ", n] }),
                  }),
                })
          );
        },
        $ = o.forwardRef((e, t) => {
          let { __scopeToast: n, ...r } = e;
          return (0, l.jsx)(d.div, { ...r, ref: t });
        });
      $.displayName = "ToastTitle";
      var V = o.forwardRef((e, t) => {
        let { __scopeToast: n, ...r } = e;
        return (0, l.jsx)(d.div, { ...r, ref: t });
      });
      V.displayName = "ToastDescription";
      var Z = "ToastAction",
        J = o.forwardRef((e, t) => {
          let { altText: n, ...r } = e;
          return n.trim()
            ? (0, l.jsx)(Q, {
                altText: n,
                asChild: !0,
                children: (0, l.jsx)(Y, { ...r, ref: t }),
              })
            : (console.error(
                "Invalid prop `altText` supplied to `".concat(
                  Z,
                  "`. Expected non-empty `string`."
                )
              ),
              null);
        });
      J.displayName = Z;
      var X = "ToastClose",
        Y = o.forwardRef((e, t) => {
          let { __scopeToast: n, ...r } = e,
            o = q(X, n);
          return (0, l.jsx)(Q, {
            asChild: !0,
            children: (0, l.jsx)(d.button, {
              type: "button",
              ...r,
              ref: t,
              onClick: a(e.onClick, o.onClose),
            }),
          });
        });
      Y.displayName = X;
      var Q = o.forwardRef((e, t) => {
        let { __scopeToast: n, altText: r, ...o } = e;
        return (0, l.jsx)(d.div, {
          "data-radix-toast-announce-exclude": "",
          "data-radix-toast-announce-alt": r || void 0,
          ...o,
          ref: t,
        });
      });
      function ee(e, t, n, r) {
        let { discrete: o } = r,
          i = n.originalEvent.currentTarget,
          a = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: n });
        t && i.addEventListener(e, t, { once: !0 }),
          o ? f(i, a) : i.dispatchEvent(a);
      }
      var et = function (e, t) {
        let n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          r = Math.abs(e.x),
          o = Math.abs(e.y),
          i = r > o;
        return "left" === t || "right" === t ? i && r > n : !i && o > n;
      };
      function en(e) {
        let t = document.activeElement;
        return e.some(
          (e) => e === t || (e.focus(), document.activeElement !== t)
        );
      }
      var er = R,
        eo = F,
        ei = z,
        ea = $,
        es = V,
        el = J,
        eu = Y;
    },
    980: function (e, t, n) {
      "use strict";
      n.d(t, {
        X: function () {
          return s;
        },
      });
      var r = n(7437),
        o = n(2265),
        i = n(6539),
        a = n(344);
      function s(e) {
        let { children: t, features: n, strict: s = !1 } = e,
          [, u] = (0, o.useState)(!l(n)),
          c = (0, o.useRef)(void 0);
        if (!l(n)) {
          let { renderer: e, ...t } = n;
          (c.current = e), (0, a.K)(t);
        }
        return (
          (0, o.useEffect)(() => {
            l(n) &&
              n().then((e) => {
                let { renderer: t, ...n } = e;
                (0, a.K)(n), (c.current = t), u(!0);
              });
          }, []),
          (0, r.jsx)(i.u.Provider, {
            value: { renderer: c.current, strict: s },
            children: t,
          })
        );
      }
      function l(e) {
        return "function" == typeof e;
      }
    },
    6660: function (e, t, n) {
      "use strict";
      n.d(t, {
        m: function () {
          return i;
        },
      });
      var r = n(6863);
      let o = (0, n(1292).x)(),
        i = (0, r.c)(o);
    },
    6604: function (e, t, n) {
      "use strict";
      n.d(t, {
        H: function () {
          return i;
        },
      });
      var r = n(9188),
        o = n(5859);
      let i = { renderer: n(3302).b, ...r.s, ...o.E };
    },
    9512: function (e, t, n) {
      "use strict";
      n.d(t, {
        f: function () {
          return l;
        },
      });
      var r = n(2265),
        o = ["light", "dark"],
        i = "(prefers-color-scheme: dark)",
        a = "undefined" == typeof window,
        s = r.createContext(void 0),
        l = (e) =>
          r.useContext(s) ? e.children : r.createElement(c, { ...e }),
        u = ["light", "dark"],
        c = (e) => {
          let {
              forcedTheme: t,
              disableTransitionOnChange: n = !1,
              enableSystem: a = !0,
              enableColorScheme: l = !0,
              storageKey: c = "theme",
              themes: v = u,
              defaultTheme: h = a ? "system" : "light",
              attribute: y = "data-theme",
              value: g,
              children: w,
              nonce: b,
            } = e,
            [E, x] = r.useState(() => f(c, h)),
            [T, S] = r.useState(() => f(c)),
            C = g ? Object.values(g) : v,
            L = r.useCallback((e) => {
              let t = e;
              if (!t) return;
              "system" === e && a && (t = m());
              let r = g ? g[t] : t,
                i = n ? p() : null,
                s = document.documentElement;
              if (
                ("class" === y
                  ? (s.classList.remove(...C), r && s.classList.add(r))
                  : r
                  ? s.setAttribute(y, r)
                  : s.removeAttribute(y),
                l)
              ) {
                let e = o.includes(h) ? h : null,
                  n = o.includes(t) ? t : e;
                s.style.colorScheme = n;
              }
              null == i || i();
            }, []),
            k = r.useCallback(
              (e) => {
                let t = "function" == typeof e ? e(e) : e;
                x(t);
                try {
                  localStorage.setItem(c, t);
                } catch (e) {}
              },
              [t]
            ),
            N = r.useCallback(
              (e) => {
                S(m(e)), "system" === E && a && !t && L("system");
              },
              [E, t]
            );
          r.useEffect(() => {
            let e = window.matchMedia(i);
            return e.addListener(N), N(e), () => e.removeListener(N);
          }, [N]),
            r.useEffect(() => {
              let e = (e) => {
                e.key === c && k(e.newValue || h);
              };
              return (
                window.addEventListener("storage", e),
                () => window.removeEventListener("storage", e)
              );
            }, [k]),
            r.useEffect(() => {
              L(null != t ? t : E);
            }, [t, E]);
          let _ = r.useMemo(
            () => ({
              theme: E,
              setTheme: k,
              forcedTheme: t,
              resolvedTheme: "system" === E ? T : E,
              themes: a ? [...v, "system"] : v,
              systemTheme: a ? T : void 0,
            }),
            [E, k, t, T, a, v]
          );
          return r.createElement(
            s.Provider,
            { value: _ },
            r.createElement(d, {
              forcedTheme: t,
              disableTransitionOnChange: n,
              enableSystem: a,
              enableColorScheme: l,
              storageKey: c,
              themes: v,
              defaultTheme: h,
              attribute: y,
              value: g,
              children: w,
              attrs: C,
              nonce: b,
            }),
            w
          );
        },
        d = r.memo((e) => {
          let {
              forcedTheme: t,
              storageKey: n,
              attribute: a,
              enableSystem: s,
              enableColorScheme: l,
              defaultTheme: u,
              value: c,
              attrs: d,
              nonce: f,
            } = e,
            p = "system" === u,
            m =
              "class" === a
                ? "var d=document.documentElement,c=d.classList;".concat(
                    "c.remove(".concat(
                      d.map((e) => "'".concat(e, "'")).join(","),
                      ")"
                    ),
                    ";"
                  )
                : "var d=document.documentElement,n='".concat(
                    a,
                    "',s='setAttribute';"
                  ),
            v = l
              ? (o.includes(u) ? u : null)
                ? "if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'".concat(
                    u,
                    "'"
                  )
                : "if(e==='light'||e==='dark')d.style.colorScheme=e"
              : "",
            h = function (e) {
              let t =
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1],
                n =
                  !(arguments.length > 2) ||
                  void 0 === arguments[2] ||
                  arguments[2],
                r = c ? c[e] : e,
                i = t ? e + "|| ''" : "'".concat(r, "'"),
                s = "";
              return (
                l &&
                  n &&
                  !t &&
                  o.includes(e) &&
                  (s += "d.style.colorScheme = '".concat(e, "';")),
                "class" === a
                  ? t || r
                    ? (s += "c.add(".concat(i, ")"))
                    : (s += "null")
                  : r && (s += "d[s](n,".concat(i, ")")),
                s
              );
            },
            y = t
              ? "!function(){".concat(m).concat(h(t), "}()")
              : s
              ? "!function(){try{"
                  .concat(m, "var e=localStorage.getItem('")
                  .concat(n, "');if('system'===e||(!e&&")
                  .concat(p, ")){var t='")
                  .concat(
                    i,
                    "',m=window.matchMedia(t);if(m.media!==t||m.matches){"
                  )
                  .concat(h("dark"), "}else{")
                  .concat(h("light"), "}}else if(e){")
                  .concat(c ? "var x=".concat(JSON.stringify(c), ";") : "")
                  .concat(h(c ? "x[e]" : "e", !0), "}")
                  .concat(p ? "" : "else{" + h(u, !1, !1) + "}")
                  .concat(v, "}catch(e){}}()")
              : "!function(){try{"
                  .concat(m, "var e=localStorage.getItem('")
                  .concat(n, "');if(e){")
                  .concat(c ? "var x=".concat(JSON.stringify(c), ";") : "")
                  .concat(h(c ? "x[e]" : "e", !0), "}else{")
                  .concat(h(u, !1, !1), ";}")
                  .concat(v, "}catch(t){}}();");
          return r.createElement("script", {
            nonce: f,
            dangerouslySetInnerHTML: { __html: y },
          });
        }),
        f = (e, t) => {
          let n;
          if (!a) {
            try {
              n = localStorage.getItem(e) || void 0;
            } catch (e) {}
            return n || t;
          }
        },
        p = () => {
          let e = document.createElement("style");
          return (
            e.appendChild(
              document.createTextNode(
                "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}"
              )
            ),
            document.head.appendChild(e),
            () => {
              window.getComputedStyle(document.body),
                setTimeout(() => {
                  document.head.removeChild(e);
                }, 1);
            }
          );
        },
        m = (e) => (
          e || (e = window.matchMedia(i)), e.matches ? "dark" : "light"
        );
    },
  },
]);
