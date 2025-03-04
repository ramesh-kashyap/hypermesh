(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [759],
  {
    7701: function (t, e, n) {
      var i = "Expected a function",
        r = 0 / 0,
        o = /^\s+|\s+$/g,
        s = /^[-+]0x[0-9a-f]+$/i,
        a = /^0b[01]+$/i,
        l = /^0o[0-7]+$/i,
        u = parseInt,
        c = "object" == typeof n.g && n.g && n.g.Object === Object && n.g,
        d = "object" == typeof self && self && self.Object === Object && self,
        h = c || d || Function("return this")(),
        f = Object.prototype.toString,
        p = Math.max,
        m = Math.min,
        v = function () {
          return h.Date.now();
        };
      function g(t) {
        var e = typeof t;
        return !!t && ("object" == e || "function" == e);
      }
      function y(t) {
        if ("number" == typeof t) return t;
        if (
          "symbol" == typeof (e = t) ||
          (e && "object" == typeof e && "[object Symbol]" == f.call(e))
        )
          return r;
        if (g(t)) {
          var e,
            n = "function" == typeof t.valueOf ? t.valueOf() : t;
          t = g(n) ? n + "" : n;
        }
        if ("string" != typeof t) return 0 === t ? t : +t;
        t = t.replace(o, "");
        var i = a.test(t);
        return i || l.test(t) ? u(t.slice(2), i ? 2 : 8) : s.test(t) ? r : +t;
      }
      t.exports = function (t, e, n) {
        var r = !0,
          o = !0;
        if ("function" != typeof t) throw TypeError(i);
        return (
          g(n) &&
            ((r = "leading" in n ? !!n.leading : r),
            (o = "trailing" in n ? !!n.trailing : o)),
          (function (t, e, n) {
            var r,
              o,
              s,
              a,
              l,
              u,
              c = 0,
              d = !1,
              h = !1,
              f = !0;
            if ("function" != typeof t) throw TypeError(i);
            function b(e) {
              var n = r,
                i = o;
              return (r = o = void 0), (c = e), (a = t.apply(i, n));
            }
            function P(t) {
              var n = t - u,
                i = t - c;
              return void 0 === u || n >= e || n < 0 || (h && i >= s);
            }
            function w() {
              var t,
                n,
                i,
                r = v();
              if (P(r)) return x(r);
              l = setTimeout(
                w,
                ((t = r - u), (n = r - c), (i = e - t), h ? m(i, s - n) : i)
              );
            }
            function x(t) {
              return ((l = void 0), f && r) ? b(t) : ((r = o = void 0), a);
            }
            function S() {
              var t,
                n = v(),
                i = P(n);
              if (((r = arguments), (o = this), (u = n), i)) {
                if (void 0 === l)
                  return (c = t = u), (l = setTimeout(w, e)), d ? b(t) : a;
                if (h) return (l = setTimeout(w, e)), b(u);
              }
              return void 0 === l && (l = setTimeout(w, e)), a;
            }
            return (
              (e = y(e) || 0),
              g(n) &&
                ((d = !!n.leading),
                (s = (h = "maxWait" in n) ? p(y(n.maxWait) || 0, e) : s),
                (f = "trailing" in n ? !!n.trailing : f)),
              (S.cancel = function () {
                void 0 !== l && clearTimeout(l),
                  (c = 0),
                  (r = u = o = l = void 0);
              }),
              (S.flush = function () {
                return void 0 === l ? a : x(v());
              }),
              S
            );
          })(t, e, { leading: r, maxWait: e, trailing: o })
        );
      };
    },
    6648: function (t, e, n) {
      "use strict";
      n.d(e, {
        default: function () {
          return r.a;
        },
      });
      var i = n(5601),
        r = n.n(i);
    },
    7138: function (t, e, n) {
      "use strict";
      n.d(e, {
        default: function () {
          return r.a;
        },
      });
      var i = n(231),
        r = n.n(i);
    },
    844: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "addLocale", {
          enumerable: !0,
          get: function () {
            return i;
          },
        }),
        n(8157);
      let i = function (t) {
        for (
          var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), i = 1;
          i < e;
          i++
        )
          n[i - 1] = arguments[i];
        return t;
      };
      ("function" == typeof e.default ||
        ("object" == typeof e.default && null !== e.default)) &&
        void 0 === e.default.__esModule &&
        (Object.defineProperty(e.default, "__esModule", { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    5944: function (t, e, n) {
      "use strict";
      function i(t, e, n, i) {
        return !1;
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "getDomainLocale", {
          enumerable: !0,
          get: function () {
            return i;
          },
        }),
        n(8157),
        ("function" == typeof e.default ||
          ("object" == typeof e.default && null !== e.default)) &&
          void 0 === e.default.__esModule &&
          (Object.defineProperty(e.default, "__esModule", { value: !0 }),
          Object.assign(e.default, e),
          (t.exports = e.default));
    },
    8173: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "Image", {
          enumerable: !0,
          get: function () {
            return b;
          },
        });
      let i = n(9920),
        r = n(1452),
        o = n(7437),
        s = r._(n(2265)),
        a = i._(n(4887)),
        l = i._(n(8321)),
        u = n(497),
        c = n(7103),
        d = n(3938);
      n(2301);
      let h = n(291),
        f = i._(n(1241)),
        p = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: "/_next/image",
          loader: "default",
          dangerouslyAllowSVG: !1,
          unoptimized: !0,
        };
      function m(t, e, n, i, r, o, s) {
        let a = null == t ? void 0 : t.src;
        t &&
          t["data-loaded-src"] !== a &&
          ((t["data-loaded-src"] = a),
          ("decode" in t ? t.decode() : Promise.resolve())
            .catch(() => {})
            .then(() => {
              if (t.parentElement && t.isConnected) {
                if (("empty" !== e && r(!0), null == n ? void 0 : n.current)) {
                  let e = new Event("load");
                  Object.defineProperty(e, "target", {
                    writable: !1,
                    value: t,
                  });
                  let i = !1,
                    r = !1;
                  n.current({
                    ...e,
                    nativeEvent: e,
                    currentTarget: t,
                    target: t,
                    isDefaultPrevented: () => i,
                    isPropagationStopped: () => r,
                    persist: () => {},
                    preventDefault: () => {
                      (i = !0), e.preventDefault();
                    },
                    stopPropagation: () => {
                      (r = !0), e.stopPropagation();
                    },
                  });
                }
                (null == i ? void 0 : i.current) && i.current(t);
              }
            }));
      }
      function v(t) {
        return s.use ? { fetchPriority: t } : { fetchpriority: t };
      }
      "undefined" == typeof window && (globalThis.__NEXT_IMAGE_IMPORTED = !0);
      let g = (0, s.forwardRef)((t, e) => {
        let {
          src: n,
          srcSet: i,
          sizes: r,
          height: a,
          width: l,
          decoding: u,
          className: c,
          style: d,
          fetchPriority: h,
          placeholder: f,
          loading: p,
          unoptimized: g,
          fill: y,
          onLoadRef: b,
          onLoadingCompleteRef: P,
          setBlurComplete: w,
          setShowAltText: x,
          sizesInput: S,
          onLoad: T,
          onError: C,
          ...E
        } = t;
        return (0, o.jsx)("img", {
          ...E,
          ...v(h),
          loading: p,
          width: l,
          height: a,
          decoding: u,
          "data-nimg": y ? "fill" : "1",
          className: c,
          style: d,
          sizes: r,
          srcSet: i,
          src: n,
          ref: (0, s.useCallback)(
            (t) => {
              e &&
                ("function" == typeof e
                  ? e(t)
                  : "object" == typeof e && (e.current = t)),
                t &&
                  (C && (t.src = t.src), t.complete && m(t, f, b, P, w, g, S));
            },
            [n, f, b, P, w, C, g, S, e]
          ),
          onLoad: (t) => {
            m(t.currentTarget, f, b, P, w, g, S);
          },
          onError: (t) => {
            x(!0), "empty" !== f && w(!0), C && C(t);
          },
        });
      });
      function y(t) {
        let { isAppRouter: e, imgAttributes: n } = t,
          i = {
            as: "image",
            imageSrcSet: n.srcSet,
            imageSizes: n.sizes,
            crossOrigin: n.crossOrigin,
            referrerPolicy: n.referrerPolicy,
            ...v(n.fetchPriority),
          };
        return e && a.default.preload
          ? (a.default.preload(n.src, i), null)
          : (0, o.jsx)(l.default, {
              children: (0, o.jsx)(
                "link",
                { rel: "preload", href: n.srcSet ? void 0 : n.src, ...i },
                "__nimg-" + n.src + n.srcSet + n.sizes
              ),
            });
      }
      let b = (0, s.forwardRef)((t, e) => {
        let n = (0, s.useContext)(h.RouterContext),
          i = (0, s.useContext)(d.ImageConfigContext),
          r = (0, s.useMemo)(() => {
            let t = p || i || c.imageConfigDefault,
              e = [...t.deviceSizes, ...t.imageSizes].sort((t, e) => t - e),
              n = t.deviceSizes.sort((t, e) => t - e);
            return { ...t, allSizes: e, deviceSizes: n };
          }, [i]),
          { onLoad: a, onLoadingComplete: l } = t,
          m = (0, s.useRef)(a);
        (0, s.useEffect)(() => {
          m.current = a;
        }, [a]);
        let v = (0, s.useRef)(l);
        (0, s.useEffect)(() => {
          v.current = l;
        }, [l]);
        let [b, P] = (0, s.useState)(!1),
          [w, x] = (0, s.useState)(!1),
          { props: S, meta: T } = (0, u.getImgProps)(t, {
            defaultLoader: f.default,
            imgConf: r,
            blurComplete: b,
            showAltText: w,
          });
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsx)(g, {
              ...S,
              unoptimized: T.unoptimized,
              placeholder: T.placeholder,
              fill: T.fill,
              onLoadRef: m,
              onLoadingCompleteRef: v,
              setBlurComplete: P,
              setShowAltText: x,
              sizesInput: t.sizes,
              ref: e,
            }),
            T.priority
              ? (0, o.jsx)(y, { isAppRouter: !n, imgAttributes: S })
              : null,
          ],
        });
      });
      ("function" == typeof e.default ||
        ("object" == typeof e.default && null !== e.default)) &&
        void 0 === e.default.__esModule &&
        (Object.defineProperty(e.default, "__esModule", { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    231: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "default", {
          enumerable: !0,
          get: function () {
            return P;
          },
        });
      let i = n(9920),
        r = n(7437),
        o = i._(n(2265)),
        s = n(8016),
        a = n(8029),
        l = n(1142),
        u = n(3461),
        c = n(844),
        d = n(291),
        h = n(4467),
        f = n(3106),
        p = n(5944),
        m = n(4897),
        v = n(1507),
        g = new Set();
      function y(t, e, n, i, r, o) {
        if ("undefined" != typeof window && (o || (0, a.isLocalURL)(e))) {
          if (!i.bypassPrefetchedCheck) {
            let r =
              e +
              "%" +
              n +
              "%" +
              (void 0 !== i.locale
                ? i.locale
                : "locale" in t
                ? t.locale
                : void 0);
            if (g.has(r)) return;
            g.add(r);
          }
          (async () => (o ? t.prefetch(e, r) : t.prefetch(e, n, i)))().catch(
            (t) => {}
          );
        }
      }
      function b(t) {
        return "string" == typeof t ? t : (0, l.formatUrl)(t);
      }
      let P = o.default.forwardRef(function (t, e) {
        let n, i;
        let {
          href: l,
          as: g,
          children: P,
          prefetch: w = null,
          passHref: x,
          replace: S,
          shallow: T,
          scroll: C,
          locale: E,
          onClick: O,
          onMouseEnter: j,
          onTouchStart: M,
          legacyBehavior: A = !1,
          ...R
        } = t;
        (n = P),
          A &&
            ("string" == typeof n || "number" == typeof n) &&
            (n = (0, r.jsx)("a", { children: n }));
        let k = o.default.useContext(d.RouterContext),
          _ = o.default.useContext(h.AppRouterContext),
          D = null != k ? k : _,
          V = !k,
          L = !1 !== w,
          I = null === w ? v.PrefetchKind.AUTO : v.PrefetchKind.FULL,
          { href: B, as: F } = o.default.useMemo(() => {
            if (!k) {
              let t = b(l);
              return { href: t, as: g ? b(g) : t };
            }
            let [t, e] = (0, s.resolveHref)(k, l, !0);
            return { href: t, as: g ? (0, s.resolveHref)(k, g) : e || t };
          }, [k, l, g]),
          W = o.default.useRef(B),
          N = o.default.useRef(F);
        A && (i = o.default.Children.only(n));
        let U = A ? i && "object" == typeof i && i.ref : e,
          [z, H, $] = (0, f.useIntersection)({ rootMargin: "200px" }),
          X = o.default.useCallback(
            (t) => {
              (N.current !== F || W.current !== B) &&
                ($(), (N.current = F), (W.current = B)),
                z(t),
                U &&
                  ("function" == typeof U
                    ? U(t)
                    : "object" == typeof U && (U.current = t));
            },
            [F, U, B, $, z]
          );
        o.default.useEffect(() => {
          D && H && L && y(D, B, F, { locale: E }, { kind: I }, V);
        }, [F, B, H, E, L, null == k ? void 0 : k.locale, D, V, I]);
        let Y = {
          ref: X,
          onClick(t) {
            A || "function" != typeof O || O(t),
              A &&
                i.props &&
                "function" == typeof i.props.onClick &&
                i.props.onClick(t),
              D &&
                !t.defaultPrevented &&
                (function (t, e, n, i, r, s, l, u, c) {
                  let { nodeName: d } = t.currentTarget;
                  if (
                    "A" === d.toUpperCase() &&
                    ((function (t) {
                      let e = t.currentTarget.getAttribute("target");
                      return (
                        (e && "_self" !== e) ||
                        t.metaKey ||
                        t.ctrlKey ||
                        t.shiftKey ||
                        t.altKey ||
                        (t.nativeEvent && 2 === t.nativeEvent.which)
                      );
                    })(t) ||
                      (!c && !(0, a.isLocalURL)(n)))
                  )
                    return;
                  t.preventDefault();
                  let h = () => {
                    let t = null == l || l;
                    "beforePopState" in e
                      ? e[r ? "replace" : "push"](n, i, {
                          shallow: s,
                          locale: u,
                          scroll: t,
                        })
                      : e[r ? "replace" : "push"](i || n, { scroll: t });
                  };
                  c ? o.default.startTransition(h) : h();
                })(t, D, B, F, S, T, C, E, V);
          },
          onMouseEnter(t) {
            A || "function" != typeof j || j(t),
              A &&
                i.props &&
                "function" == typeof i.props.onMouseEnter &&
                i.props.onMouseEnter(t),
              D &&
                (L || !V) &&
                y(
                  D,
                  B,
                  F,
                  { locale: E, priority: !0, bypassPrefetchedCheck: !0 },
                  { kind: I },
                  V
                );
          },
          onTouchStart: function (t) {
            A || "function" != typeof M || M(t),
              A &&
                i.props &&
                "function" == typeof i.props.onTouchStart &&
                i.props.onTouchStart(t),
              D &&
                (L || !V) &&
                y(
                  D,
                  B,
                  F,
                  { locale: E, priority: !0, bypassPrefetchedCheck: !0 },
                  { kind: I },
                  V
                );
          },
        };
        if ((0, u.isAbsoluteUrl)(F)) Y.href = F;
        else if (!A || x || ("a" === i.type && !("href" in i.props))) {
          let t = void 0 !== E ? E : null == k ? void 0 : k.locale,
            e =
              (null == k ? void 0 : k.isLocaleDomain) &&
              (0, p.getDomainLocale)(
                F,
                t,
                null == k ? void 0 : k.locales,
                null == k ? void 0 : k.domainLocales
              );
          Y.href =
            e ||
            (0, m.addBasePath)(
              (0, c.addLocale)(F, t, null == k ? void 0 : k.defaultLocale)
            );
        }
        return A
          ? o.default.cloneElement(i, Y)
          : (0, r.jsx)("a", { ...R, ...Y, children: n });
      });
      ("function" == typeof e.default ||
        ("object" == typeof e.default && null !== e.default)) &&
        void 0 === e.default.__esModule &&
        (Object.defineProperty(e.default, "__esModule", { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    9189: function (t, e) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (function (t, e) {
          for (var n in e)
            Object.defineProperty(t, n, { enumerable: !0, get: e[n] });
        })(e, {
          cancelIdleCallback: function () {
            return i;
          },
          requestIdleCallback: function () {
            return n;
          },
        });
      let n =
          ("undefined" != typeof self &&
            self.requestIdleCallback &&
            self.requestIdleCallback.bind(window)) ||
          function (t) {
            let e = Date.now();
            return self.setTimeout(function () {
              t({
                didTimeout: !1,
                timeRemaining: function () {
                  return Math.max(0, 50 - (Date.now() - e));
                },
              });
            }, 1);
          },
        i =
          ("undefined" != typeof self &&
            self.cancelIdleCallback &&
            self.cancelIdleCallback.bind(window)) ||
          function (t) {
            return clearTimeout(t);
          };
      ("function" == typeof e.default ||
        ("object" == typeof e.default && null !== e.default)) &&
        void 0 === e.default.__esModule &&
        (Object.defineProperty(e.default, "__esModule", { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    8016: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "resolveHref", {
          enumerable: !0,
          get: function () {
            return d;
          },
        });
      let i = n(8323),
        r = n(1142),
        o = n(5519),
        s = n(3461),
        a = n(8157),
        l = n(8029),
        u = n(9195),
        c = n(20);
      function d(t, e, n) {
        let d;
        let h = "string" == typeof e ? e : (0, r.formatWithValidation)(e),
          f = h.match(/^[a-zA-Z]{1,}:\/\//),
          p = f ? h.slice(f[0].length) : h;
        if ((p.split("?", 1)[0] || "").match(/(\/\/|\\)/)) {
          console.error(
            "Invalid href '" +
              h +
              "' passed to next/router in page: '" +
              t.pathname +
              "'. Repeated forward-slashes (//) or backslashes \\ are not valid in the href."
          );
          let e = (0, s.normalizeRepeatedSlashes)(p);
          h = (f ? f[0] : "") + e;
        }
        if (!(0, l.isLocalURL)(h)) return n ? [h] : h;
        try {
          d = new URL(h.startsWith("#") ? t.asPath : t.pathname, "http://n");
        } catch (t) {
          d = new URL("/", "http://n");
        }
        try {
          let t = new URL(h, d);
          t.pathname = (0, a.normalizePathTrailingSlash)(t.pathname);
          let e = "";
          if ((0, u.isDynamicRoute)(t.pathname) && t.searchParams && n) {
            let n = (0, i.searchParamsToUrlQuery)(t.searchParams),
              { result: s, params: a } = (0, c.interpolateAs)(
                t.pathname,
                t.pathname,
                n
              );
            s &&
              (e = (0, r.formatWithValidation)({
                pathname: s,
                hash: t.hash,
                query: (0, o.omit)(n, a),
              }));
          }
          let s =
            t.origin === d.origin ? t.href.slice(t.origin.length) : t.href;
          return n ? [s, e || s] : s;
        } catch (t) {
          return n ? [h] : h;
        }
      }
      ("function" == typeof e.default ||
        ("object" == typeof e.default && null !== e.default)) &&
        void 0 === e.default.__esModule &&
        (Object.defineProperty(e.default, "__esModule", { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    3106: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "useIntersection", {
          enumerable: !0,
          get: function () {
            return l;
          },
        });
      let i = n(2265),
        r = n(9189),
        o = "function" == typeof IntersectionObserver,
        s = new Map(),
        a = [];
      function l(t) {
        let { rootRef: e, rootMargin: n, disabled: l } = t,
          u = l || !o,
          [c, d] = (0, i.useState)(!1),
          h = (0, i.useRef)(null),
          f = (0, i.useCallback)((t) => {
            h.current = t;
          }, []);
        return (
          (0, i.useEffect)(() => {
            if (o) {
              if (u || c) return;
              let t = h.current;
              if (t && t.tagName)
                return (function (t, e, n) {
                  let {
                    id: i,
                    observer: r,
                    elements: o,
                  } = (function (t) {
                    let e;
                    let n = {
                        root: t.root || null,
                        margin: t.rootMargin || "",
                      },
                      i = a.find(
                        (t) => t.root === n.root && t.margin === n.margin
                      );
                    if (i && (e = s.get(i))) return e;
                    let r = new Map();
                    return (
                      (e = {
                        id: n,
                        observer: new IntersectionObserver((t) => {
                          t.forEach((t) => {
                            let e = r.get(t.target),
                              n = t.isIntersecting || t.intersectionRatio > 0;
                            e && n && e(n);
                          });
                        }, t),
                        elements: r,
                      }),
                      a.push(n),
                      s.set(n, e),
                      e
                    );
                  })(n);
                  return (
                    o.set(t, e),
                    r.observe(t),
                    function () {
                      if ((o.delete(t), r.unobserve(t), 0 === o.size)) {
                        r.disconnect(), s.delete(i);
                        let t = a.findIndex(
                          (t) => t.root === i.root && t.margin === i.margin
                        );
                        t > -1 && a.splice(t, 1);
                      }
                    }
                  );
                })(t, (t) => t && d(t), {
                  root: null == e ? void 0 : e.current,
                  rootMargin: n,
                });
            } else if (!c) {
              let t = (0, r.requestIdleCallback)(() => d(!0));
              return () => (0, r.cancelIdleCallback)(t);
            }
          }, [u, n, e, c, h.current]),
          [
            f,
            c,
            (0, i.useCallback)(() => {
              d(!1);
            }, []),
          ]
        );
      }
      ("function" == typeof e.default ||
        ("object" == typeof e.default && null !== e.default)) &&
        void 0 === e.default.__esModule &&
        (Object.defineProperty(e.default, "__esModule", { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    2901: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "AmpStateContext", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
      let i = n(9920)._(n(2265)).default.createContext({});
    },
    687: function (t, e) {
      "use strict";
      function n(t) {
        let {
          ampFirst: e = !1,
          hybrid: n = !1,
          hasQuery: i = !1,
        } = void 0 === t ? {} : t;
        return e || (n && i);
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "isInAmpMode", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
    },
    1943: function (t, e) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "escapeStringRegexp", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
      let n = /[|\\{}()[\]^$+*?.-]/,
        i = /[|\\{}()[\]^$+*?.-]/g;
      function r(t) {
        return n.test(t) ? t.replace(i, "\\$&") : t;
      }
    },
    497: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "getImgProps", {
          enumerable: !0,
          get: function () {
            return a;
          },
        }),
        n(2301);
      let i = n(1564),
        r = n(7103);
      function o(t) {
        return void 0 !== t.default;
      }
      function s(t) {
        return void 0 === t
          ? t
          : "number" == typeof t
          ? Number.isFinite(t)
            ? t
            : NaN
          : "string" == typeof t && /^[0-9]+$/.test(t)
          ? parseInt(t, 10)
          : NaN;
      }
      function a(t, e) {
        var n;
        let a,
          l,
          u,
          {
            src: c,
            sizes: d,
            unoptimized: h = !1,
            priority: f = !1,
            loading: p,
            className: m,
            quality: v,
            width: g,
            height: y,
            fill: b = !1,
            style: P,
            overrideSrc: w,
            onLoad: x,
            onLoadingComplete: S,
            placeholder: T = "empty",
            blurDataURL: C,
            fetchPriority: E,
            layout: O,
            objectFit: j,
            objectPosition: M,
            lazyBoundary: A,
            lazyRoot: R,
            ...k
          } = t,
          { imgConf: _, showAltText: D, blurComplete: V, defaultLoader: L } = e,
          I = _ || r.imageConfigDefault;
        if ("allSizes" in I) a = I;
        else {
          let t = [...I.deviceSizes, ...I.imageSizes].sort((t, e) => t - e),
            e = I.deviceSizes.sort((t, e) => t - e);
          a = { ...I, allSizes: t, deviceSizes: e };
        }
        if (void 0 === L)
          throw Error(
            "images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"
          );
        let B = k.loader || L;
        delete k.loader, delete k.srcSet;
        let F = "__next_img_default" in B;
        if (F) {
          if ("custom" === a.loader)
            throw Error(
              'Image with src "' +
                c +
                '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader'
            );
        } else {
          let t = B;
          B = (e) => {
            let { config: n, ...i } = e;
            return t(i);
          };
        }
        if (O) {
          "fill" === O && (b = !0);
          let t = {
            intrinsic: { maxWidth: "100%", height: "auto" },
            responsive: { width: "100%", height: "auto" },
          }[O];
          t && (P = { ...P, ...t });
          let e = { responsive: "100vw", fill: "100vw" }[O];
          e && !d && (d = e);
        }
        let W = "",
          N = s(g),
          U = s(y);
        if ("object" == typeof (n = c) && (o(n) || void 0 !== n.src)) {
          let t = o(c) ? c.default : c;
          if (!t.src)
            throw Error(
              "An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " +
                JSON.stringify(t)
            );
          if (!t.height || !t.width)
            throw Error(
              "An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " +
                JSON.stringify(t)
            );
          if (
            ((l = t.blurWidth),
            (u = t.blurHeight),
            (C = C || t.blurDataURL),
            (W = t.src),
            !b)
          ) {
            if (N || U) {
              if (N && !U) {
                let e = N / t.width;
                U = Math.round(t.height * e);
              } else if (!N && U) {
                let e = U / t.height;
                N = Math.round(t.width * e);
              }
            } else (N = t.width), (U = t.height);
          }
        }
        let z = !f && ("lazy" === p || void 0 === p);
        (!(c = "string" == typeof c ? c : W) ||
          c.startsWith("data:") ||
          c.startsWith("blob:")) &&
          ((h = !0), (z = !1)),
          a.unoptimized && (h = !0),
          F && c.endsWith(".svg") && !a.dangerouslyAllowSVG && (h = !0),
          f && (E = "high");
        let H = s(v),
          $ = Object.assign(
            b
              ? {
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                  objectFit: j,
                  objectPosition: M,
                }
              : {},
            D ? {} : { color: "transparent" },
            P
          ),
          X =
            V || "empty" === T
              ? null
              : "blur" === T
              ? 'url("data:image/svg+xml;charset=utf-8,' +
                (0, i.getImageBlurSvg)({
                  widthInt: N,
                  heightInt: U,
                  blurWidth: l,
                  blurHeight: u,
                  blurDataURL: C || "",
                  objectFit: $.objectFit,
                }) +
                '")'
              : 'url("' + T + '")',
          Y = X
            ? {
                backgroundSize: $.objectFit || "cover",
                backgroundPosition: $.objectPosition || "50% 50%",
                backgroundRepeat: "no-repeat",
                backgroundImage: X,
              }
            : {},
          K = (function (t) {
            let {
              config: e,
              src: n,
              unoptimized: i,
              width: r,
              quality: o,
              sizes: s,
              loader: a,
            } = t;
            if (i) return { src: n, srcSet: void 0, sizes: void 0 };
            let { widths: l, kind: u } = (function (t, e, n) {
                let { deviceSizes: i, allSizes: r } = t;
                if (n) {
                  let t = /(^|\s)(1?\d?\d)vw/g,
                    e = [];
                  for (let i; (i = t.exec(n)); i) e.push(parseInt(i[2]));
                  if (e.length) {
                    let t = 0.01 * Math.min(...e);
                    return {
                      widths: r.filter((e) => e >= i[0] * t),
                      kind: "w",
                    };
                  }
                  return { widths: r, kind: "w" };
                }
                return "number" != typeof e
                  ? { widths: i, kind: "w" }
                  : {
                      widths: [
                        ...new Set(
                          [e, 2 * e].map(
                            (t) => r.find((e) => e >= t) || r[r.length - 1]
                          )
                        ),
                      ],
                      kind: "x",
                    };
              })(e, r, s),
              c = l.length - 1;
            return {
              sizes: s || "w" !== u ? s : "100vw",
              srcSet: l
                .map(
                  (t, i) =>
                    a({ config: e, src: n, quality: o, width: t }) +
                    " " +
                    ("w" === u ? t : i + 1) +
                    u
                )
                .join(", "),
              src: a({ config: e, src: n, quality: o, width: l[c] }),
            };
          })({
            config: a,
            src: c,
            unoptimized: h,
            width: N,
            quality: H,
            sizes: d,
            loader: B,
          });
        return {
          props: {
            ...k,
            loading: z ? "lazy" : p,
            fetchPriority: E,
            width: N,
            height: U,
            decoding: "async",
            className: m,
            style: { ...$, ...Y },
            sizes: K.sizes,
            srcSet: K.srcSet,
            src: w || K.src,
          },
          meta: { unoptimized: h, priority: f, placeholder: T, fill: b },
        };
      }
    },
    8321: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (function (t, e) {
          for (var n in e)
            Object.defineProperty(t, n, { enumerable: !0, get: e[n] });
        })(e, {
          default: function () {
            return m;
          },
          defaultHead: function () {
            return d;
          },
        });
      let i = n(9920),
        r = n(1452),
        o = n(7437),
        s = r._(n(2265)),
        a = i._(n(5960)),
        l = n(2901),
        u = n(6590),
        c = n(687);
      function d(t) {
        void 0 === t && (t = !1);
        let e = [(0, o.jsx)("meta", { charSet: "utf-8" })];
        return (
          t ||
            e.push(
              (0, o.jsx)("meta", {
                name: "viewport",
                content: "width=device-width",
              })
            ),
          e
        );
      }
      function h(t, e) {
        return "string" == typeof e || "number" == typeof e
          ? t
          : e.type === s.default.Fragment
          ? t.concat(
              s.default.Children.toArray(e.props.children).reduce(
                (t, e) =>
                  "string" == typeof e || "number" == typeof e
                    ? t
                    : t.concat(e),
                []
              )
            )
          : t.concat(e);
      }
      n(2301);
      let f = ["name", "httpEquiv", "charSet", "itemProp"];
      function p(t, e) {
        let { inAmpMode: n } = e;
        return t
          .reduce(h, [])
          .reverse()
          .concat(d(n).reverse())
          .filter(
            (function () {
              let t = new Set(),
                e = new Set(),
                n = new Set(),
                i = {};
              return (r) => {
                let o = !0,
                  s = !1;
                if (
                  r.key &&
                  "number" != typeof r.key &&
                  r.key.indexOf("$") > 0
                ) {
                  s = !0;
                  let e = r.key.slice(r.key.indexOf("$") + 1);
                  t.has(e) ? (o = !1) : t.add(e);
                }
                switch (r.type) {
                  case "title":
                  case "base":
                    e.has(r.type) ? (o = !1) : e.add(r.type);
                    break;
                  case "meta":
                    for (let t = 0, e = f.length; t < e; t++) {
                      let e = f[t];
                      if (r.props.hasOwnProperty(e)) {
                        if ("charSet" === e) n.has(e) ? (o = !1) : n.add(e);
                        else {
                          let t = r.props[e],
                            n = i[e] || new Set();
                          ("name" !== e || !s) && n.has(t)
                            ? (o = !1)
                            : (n.add(t), (i[e] = n));
                        }
                      }
                    }
                }
                return o;
              };
            })()
          )
          .reverse()
          .map((t, e) => {
            let i = t.key || e;
            if (
              !n &&
              "link" === t.type &&
              t.props.href &&
              [
                "https://fonts.googleapis.com/css",
                "https://use.typekit.net/",
              ].some((e) => t.props.href.startsWith(e))
            ) {
              let e = { ...(t.props || {}) };
              return (
                (e["data-href"] = e.href),
                (e.href = void 0),
                (e["data-optimized-fonts"] = !0),
                s.default.cloneElement(t, e)
              );
            }
            return s.default.cloneElement(t, { key: i });
          });
      }
      let m = function (t) {
        let { children: e } = t,
          n = (0, s.useContext)(l.AmpStateContext),
          i = (0, s.useContext)(u.HeadManagerContext);
        return (0, o.jsx)(a.default, {
          reduceComponentsToState: p,
          headManager: i,
          inAmpMode: (0, c.isInAmpMode)(n),
          children: e,
        });
      };
      ("function" == typeof e.default ||
        ("object" == typeof e.default && null !== e.default)) &&
        void 0 === e.default.__esModule &&
        (Object.defineProperty(e.default, "__esModule", { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    1564: function (t, e) {
      "use strict";
      function n(t) {
        let {
            widthInt: e,
            heightInt: n,
            blurWidth: i,
            blurHeight: r,
            blurDataURL: o,
            objectFit: s,
          } = t,
          a = i ? 40 * i : e,
          l = r ? 40 * r : n,
          u = a && l ? "viewBox='0 0 " + a + " " + l + "'" : "";
        return (
          "%3Csvg xmlns='http://www.w3.org/2000/svg' " +
          u +
          "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" +
          (u
            ? "none"
            : "contain" === s
            ? "xMidYMid"
            : "cover" === s
            ? "xMidYMid slice"
            : "none") +
          "' style='filter: url(%23b);' href='" +
          o +
          "'/%3E%3C/svg%3E"
        );
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "getImageBlurSvg", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
    },
    3938: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "ImageConfigContext", {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let i = n(9920)._(n(2265)),
        r = n(7103),
        o = i.default.createContext(r.imageConfigDefault);
    },
    7103: function (t, e) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (function (t, e) {
          for (var n in e)
            Object.defineProperty(t, n, { enumerable: !0, get: e[n] });
        })(e, {
          VALID_LOADERS: function () {
            return n;
          },
          imageConfigDefault: function () {
            return i;
          },
        });
      let n = ["default", "imgix", "cloudinary", "akamai", "custom"],
        i = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: "/_next/image",
          loader: "default",
          loaderFile: "",
          domains: [],
          disableStaticImages: !1,
          minimumCacheTTL: 60,
          formats: ["image/webp"],
          dangerouslyAllowSVG: !1,
          contentSecurityPolicy:
            "script-src 'none'; frame-src 'none'; sandbox;",
          contentDispositionType: "inline",
          remotePatterns: [],
          unoptimized: !1,
        };
    },
    5601: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (function (t, e) {
          for (var n in e)
            Object.defineProperty(t, n, { enumerable: !0, get: e[n] });
        })(e, {
          default: function () {
            return l;
          },
          getImageProps: function () {
            return a;
          },
        });
      let i = n(9920),
        r = n(497),
        o = n(8173),
        s = i._(n(1241));
      function a(t) {
        let { props: e } = (0, r.getImgProps)(t, {
          defaultLoader: s.default,
          imgConf: {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            dangerouslyAllowSVG: !1,
            unoptimized: !0,
          },
        });
        for (let [t, n] of Object.entries(e)) void 0 === n && delete e[t];
        return { props: e };
      }
      let l = o.Image;
    },
    1241: function (t, e) {
      "use strict";
      function n(t) {
        let { config: e, src: n, width: i, quality: r } = t;
        return (
          e.path +
          "?url=" +
          encodeURIComponent(n) +
          "&w=" +
          i +
          "&q=" +
          (r || 75)
        );
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "default", {
          enumerable: !0,
          get: function () {
            return i;
          },
        }),
        (n.__next_img_default = !0);
      let i = n;
    },
    291: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "RouterContext", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
      let i = n(9920)._(n(2265)).default.createContext(null);
    },
    1142: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (function (t, e) {
          for (var n in e)
            Object.defineProperty(t, n, { enumerable: !0, get: e[n] });
        })(e, {
          formatUrl: function () {
            return o;
          },
          formatWithValidation: function () {
            return a;
          },
          urlObjectKeys: function () {
            return s;
          },
        });
      let i = n(1452)._(n(8323)),
        r = /https?|ftp|gopher|file/;
      function o(t) {
        let { auth: e, hostname: n } = t,
          o = t.protocol || "",
          s = t.pathname || "",
          a = t.hash || "",
          l = t.query || "",
          u = !1;
        (e = e ? encodeURIComponent(e).replace(/%3A/i, ":") + "@" : ""),
          t.host
            ? (u = e + t.host)
            : n &&
              ((u = e + (~n.indexOf(":") ? "[" + n + "]" : n)),
              t.port && (u += ":" + t.port)),
          l &&
            "object" == typeof l &&
            (l = String(i.urlQueryToSearchParams(l)));
        let c = t.search || (l && "?" + l) || "";
        return (
          o && !o.endsWith(":") && (o += ":"),
          t.slashes || ((!o || r.test(o)) && !1 !== u)
            ? ((u = "//" + (u || "")), s && "/" !== s[0] && (s = "/" + s))
            : u || (u = ""),
          a && "#" !== a[0] && (a = "#" + a),
          c && "?" !== c[0] && (c = "?" + c),
          "" +
            o +
            u +
            (s = s.replace(/[?#]/g, encodeURIComponent)) +
            (c = c.replace("#", "%23")) +
            a
        );
      }
      let s = [
        "auth",
        "hash",
        "host",
        "hostname",
        "href",
        "path",
        "pathname",
        "port",
        "protocol",
        "query",
        "search",
        "slashes",
      ];
      function a(t) {
        return o(t);
      }
    },
    9195: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (function (t, e) {
          for (var n in e)
            Object.defineProperty(t, n, { enumerable: !0, get: e[n] });
        })(e, {
          getSortedRoutes: function () {
            return i.getSortedRoutes;
          },
          isDynamicRoute: function () {
            return r.isDynamicRoute;
          },
        });
      let i = n(9089),
        r = n(8083);
    },
    20: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "interpolateAs", {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let i = n(1533),
        r = n(3169);
      function o(t, e, n) {
        let o = "",
          s = (0, r.getRouteRegex)(t),
          a = s.groups,
          l = (e !== t ? (0, i.getRouteMatcher)(s)(e) : "") || n;
        o = t;
        let u = Object.keys(a);
        return (
          u.every((t) => {
            let e = l[t] || "",
              { repeat: n, optional: i } = a[t],
              r = "[" + (n ? "..." : "") + t + "]";
            return (
              i && (r = (e ? "" : "/") + "[" + r + "]"),
              n && !Array.isArray(e) && (e = [e]),
              (i || t in l) &&
                (o =
                  o.replace(
                    r,
                    n
                      ? e.map((t) => encodeURIComponent(t)).join("/")
                      : encodeURIComponent(e)
                  ) || "/")
            );
          }) || (o = ""),
          { params: u, result: o }
        );
      }
    },
    8083: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "isDynamicRoute", {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let i = n(2269),
        r = /\/\[[^/]+?\](?=\/|$)/;
      function o(t) {
        return (
          (0, i.isInterceptionRouteAppPath)(t) &&
            (t = (0, i.extractInterceptionRouteInformation)(
              t
            ).interceptedRoute),
          r.test(t)
        );
      }
    },
    8029: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "isLocalURL", {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let i = n(3461),
        r = n(9404);
      function o(t) {
        if (!(0, i.isAbsoluteUrl)(t)) return !0;
        try {
          let e = (0, i.getLocationOrigin)(),
            n = new URL(t, e);
          return n.origin === e && (0, r.hasBasePath)(n.pathname);
        } catch (t) {
          return !1;
        }
      }
    },
    5519: function (t, e) {
      "use strict";
      function n(t, e) {
        let n = {};
        return (
          Object.keys(t).forEach((i) => {
            e.includes(i) || (n[i] = t[i]);
          }),
          n
        );
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "omit", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
    },
    8323: function (t, e) {
      "use strict";
      function n(t) {
        let e = {};
        return (
          t.forEach((t, n) => {
            void 0 === e[n]
              ? (e[n] = t)
              : Array.isArray(e[n])
              ? e[n].push(t)
              : (e[n] = [e[n], t]);
          }),
          e
        );
      }
      function i(t) {
        return "string" != typeof t &&
          ("number" != typeof t || isNaN(t)) &&
          "boolean" != typeof t
          ? ""
          : String(t);
      }
      function r(t) {
        let e = new URLSearchParams();
        return (
          Object.entries(t).forEach((t) => {
            let [n, r] = t;
            Array.isArray(r)
              ? r.forEach((t) => e.append(n, i(t)))
              : e.set(n, i(r));
          }),
          e
        );
      }
      function o(t) {
        for (
          var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), i = 1;
          i < e;
          i++
        )
          n[i - 1] = arguments[i];
        return (
          n.forEach((e) => {
            Array.from(e.keys()).forEach((e) => t.delete(e)),
              e.forEach((e, n) => t.append(n, e));
          }),
          t
        );
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (function (t, e) {
          for (var n in e)
            Object.defineProperty(t, n, { enumerable: !0, get: e[n] });
        })(e, {
          assign: function () {
            return o;
          },
          searchParamsToUrlQuery: function () {
            return n;
          },
          urlQueryToSearchParams: function () {
            return r;
          },
        });
    },
    1533: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "getRouteMatcher", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
      let i = n(3461);
      function r(t) {
        let { re: e, groups: n } = t;
        return (t) => {
          let r = e.exec(t);
          if (!r) return !1;
          let o = (t) => {
              try {
                return decodeURIComponent(t);
              } catch (t) {
                throw new i.DecodeError("failed to decode param");
              }
            },
            s = {};
          return (
            Object.keys(n).forEach((t) => {
              let e = n[t],
                i = r[e.pos];
              void 0 !== i &&
                (s[t] = ~i.indexOf("/")
                  ? i.split("/").map((t) => o(t))
                  : e.repeat
                  ? [o(i)]
                  : o(i));
            }),
            s
          );
        };
      }
    },
    3169: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (function (t, e) {
          for (var n in e)
            Object.defineProperty(t, n, { enumerable: !0, get: e[n] });
        })(e, {
          getNamedMiddlewareRegex: function () {
            return h;
          },
          getNamedRouteRegex: function () {
            return d;
          },
          getRouteRegex: function () {
            return l;
          },
        });
      let i = n(2269),
        r = n(1943),
        o = n(7741);
      function s(t) {
        let e = t.startsWith("[") && t.endsWith("]");
        e && (t = t.slice(1, -1));
        let n = t.startsWith("...");
        return n && (t = t.slice(3)), { key: t, repeat: n, optional: e };
      }
      function a(t) {
        let e = (0, o.removeTrailingSlash)(t).slice(1).split("/"),
          n = {},
          a = 1;
        return {
          parameterizedRoute: e
            .map((t) => {
              let e = i.INTERCEPTION_ROUTE_MARKERS.find((e) => t.startsWith(e)),
                o = t.match(/\[((?:\[.*\])|.+)\]/);
              if (e && o) {
                let { key: t, optional: i, repeat: l } = s(o[1]);
                return (
                  (n[t] = { pos: a++, repeat: l, optional: i }),
                  "/" + (0, r.escapeStringRegexp)(e) + "([^/]+?)"
                );
              }
              if (!o) return "/" + (0, r.escapeStringRegexp)(t);
              {
                let { key: t, repeat: e, optional: i } = s(o[1]);
                return (
                  (n[t] = { pos: a++, repeat: e, optional: i }),
                  e ? (i ? "(?:/(.+?))?" : "/(.+?)") : "/([^/]+?)"
                );
              }
            })
            .join(""),
          groups: n,
        };
      }
      function l(t) {
        let { parameterizedRoute: e, groups: n } = a(t);
        return { re: RegExp("^" + e + "(?:/)?$"), groups: n };
      }
      function u(t) {
        let {
            interceptionMarker: e,
            getSafeRouteKey: n,
            segment: i,
            routeKeys: o,
            keyPrefix: a,
          } = t,
          { key: l, optional: u, repeat: c } = s(i),
          d = l.replace(/\W/g, "");
        a && (d = "" + a + d);
        let h = !1;
        (0 === d.length || d.length > 30) && (h = !0),
          isNaN(parseInt(d.slice(0, 1))) || (h = !0),
          h && (d = n()),
          a ? (o[d] = "" + a + l) : (o[d] = l);
        let f = e ? (0, r.escapeStringRegexp)(e) : "";
        return c
          ? u
            ? "(?:/" + f + "(?<" + d + ">.+?))?"
            : "/" + f + "(?<" + d + ">.+?)"
          : "/" + f + "(?<" + d + ">[^/]+?)";
      }
      function c(t, e) {
        let n;
        let s = (0, o.removeTrailingSlash)(t).slice(1).split("/"),
          a =
            ((n = 0),
            () => {
              let t = "",
                e = ++n;
              for (; e > 0; )
                (t += String.fromCharCode(97 + ((e - 1) % 26))),
                  (e = Math.floor((e - 1) / 26));
              return t;
            }),
          l = {};
        return {
          namedParameterizedRoute: s
            .map((t) => {
              let n = i.INTERCEPTION_ROUTE_MARKERS.some((e) => t.startsWith(e)),
                o = t.match(/\[((?:\[.*\])|.+)\]/);
              if (n && o) {
                let [n] = t.split(o[0]);
                return u({
                  getSafeRouteKey: a,
                  interceptionMarker: n,
                  segment: o[1],
                  routeKeys: l,
                  keyPrefix: e ? "nxtI" : void 0,
                });
              }
              return o
                ? u({
                    getSafeRouteKey: a,
                    segment: o[1],
                    routeKeys: l,
                    keyPrefix: e ? "nxtP" : void 0,
                  })
                : "/" + (0, r.escapeStringRegexp)(t);
            })
            .join(""),
          routeKeys: l,
        };
      }
      function d(t, e) {
        let n = c(t, e);
        return {
          ...l(t),
          namedRegex: "^" + n.namedParameterizedRoute + "(?:/)?$",
          routeKeys: n.routeKeys,
        };
      }
      function h(t, e) {
        let { parameterizedRoute: n } = a(t),
          { catchAll: i = !0 } = e;
        if ("/" === n) return { namedRegex: "^/" + (i ? ".*" : "") + "$" };
        let { namedParameterizedRoute: r } = c(t, !1);
        return { namedRegex: "^" + r + (i ? "(?:(/.*)?)" : "") + "$" };
      }
    },
    9089: function (t, e) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "getSortedRoutes", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
      class n {
        insert(t) {
          this._insert(t.split("/").filter(Boolean), [], !1);
        }
        smoosh() {
          return this._smoosh();
        }
        _smoosh(t) {
          void 0 === t && (t = "/");
          let e = [...this.children.keys()].sort();
          null !== this.slugName && e.splice(e.indexOf("[]"), 1),
            null !== this.restSlugName && e.splice(e.indexOf("[...]"), 1),
            null !== this.optionalRestSlugName &&
              e.splice(e.indexOf("[[...]]"), 1);
          let n = e
            .map((e) => this.children.get(e)._smoosh("" + t + e + "/"))
            .reduce((t, e) => [...t, ...e], []);
          if (
            (null !== this.slugName &&
              n.push(
                ...this.children
                  .get("[]")
                  ._smoosh(t + "[" + this.slugName + "]/")
              ),
            !this.placeholder)
          ) {
            let e = "/" === t ? "/" : t.slice(0, -1);
            if (null != this.optionalRestSlugName)
              throw Error(
                'You cannot define a route with the same specificity as a optional catch-all route ("' +
                  e +
                  '" and "' +
                  e +
                  "[[..." +
                  this.optionalRestSlugName +
                  ']]").'
              );
            n.unshift(e);
          }
          return (
            null !== this.restSlugName &&
              n.push(
                ...this.children
                  .get("[...]")
                  ._smoosh(t + "[..." + this.restSlugName + "]/")
              ),
            null !== this.optionalRestSlugName &&
              n.push(
                ...this.children
                  .get("[[...]]")
                  ._smoosh(t + "[[..." + this.optionalRestSlugName + "]]/")
              ),
            n
          );
        }
        _insert(t, e, i) {
          if (0 === t.length) {
            this.placeholder = !1;
            return;
          }
          if (i) throw Error("Catch-all must be the last part of the URL.");
          let r = t[0];
          if (r.startsWith("[") && r.endsWith("]")) {
            let n = r.slice(1, -1),
              s = !1;
            if (
              (n.startsWith("[") &&
                n.endsWith("]") &&
                ((n = n.slice(1, -1)), (s = !0)),
              n.startsWith("...") && ((n = n.substring(3)), (i = !0)),
              n.startsWith("[") || n.endsWith("]"))
            )
              throw Error(
                "Segment names may not start or end with extra brackets ('" +
                  n +
                  "')."
              );
            if (n.startsWith("."))
              throw Error(
                "Segment names may not start with erroneous periods ('" +
                  n +
                  "')."
              );
            function o(t, n) {
              if (null !== t && t !== n)
                throw Error(
                  "You cannot use different slug names for the same dynamic path ('" +
                    t +
                    "' !== '" +
                    n +
                    "')."
                );
              e.forEach((t) => {
                if (t === n)
                  throw Error(
                    'You cannot have the same slug name "' +
                      n +
                      '" repeat within a single dynamic path'
                  );
                if (t.replace(/\W/g, "") === r.replace(/\W/g, ""))
                  throw Error(
                    'You cannot have the slug names "' +
                      t +
                      '" and "' +
                      n +
                      '" differ only by non-word symbols within a single dynamic path'
                  );
              }),
                e.push(n);
            }
            if (i) {
              if (s) {
                if (null != this.restSlugName)
                  throw Error(
                    'You cannot use both an required and optional catch-all route at the same level ("[...' +
                      this.restSlugName +
                      ']" and "' +
                      t[0] +
                      '" ).'
                  );
                o(this.optionalRestSlugName, n),
                  (this.optionalRestSlugName = n),
                  (r = "[[...]]");
              } else {
                if (null != this.optionalRestSlugName)
                  throw Error(
                    'You cannot use both an optional and required catch-all route at the same level ("[[...' +
                      this.optionalRestSlugName +
                      ']]" and "' +
                      t[0] +
                      '").'
                  );
                o(this.restSlugName, n), (this.restSlugName = n), (r = "[...]");
              }
            } else {
              if (s)
                throw Error(
                  'Optional route parameters are not yet supported ("' +
                    t[0] +
                    '").'
                );
              o(this.slugName, n), (this.slugName = n), (r = "[]");
            }
          }
          this.children.has(r) || this.children.set(r, new n()),
            this.children.get(r)._insert(t.slice(1), e, i);
        }
        constructor() {
          (this.placeholder = !0),
            (this.children = new Map()),
            (this.slugName = null),
            (this.restSlugName = null),
            (this.optionalRestSlugName = null);
        }
      }
      function i(t) {
        let e = new n();
        return t.forEach((t) => e.insert(t)), e.smoosh();
      }
    },
    5960: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "default", {
          enumerable: !0,
          get: function () {
            return a;
          },
        });
      let i = n(2265),
        r = "undefined" == typeof window,
        o = r ? () => {} : i.useLayoutEffect,
        s = r ? () => {} : i.useEffect;
      function a(t) {
        let { headManager: e, reduceComponentsToState: n } = t;
        function a() {
          if (e && e.mountedInstances) {
            let r = i.Children.toArray(
              Array.from(e.mountedInstances).filter(Boolean)
            );
            e.updateHead(n(r, t));
          }
        }
        if (r) {
          var l;
          null == e || null == (l = e.mountedInstances) || l.add(t.children),
            a();
        }
        return (
          o(() => {
            var n;
            return (
              null == e ||
                null == (n = e.mountedInstances) ||
                n.add(t.children),
              () => {
                var n;
                null == e ||
                  null == (n = e.mountedInstances) ||
                  n.delete(t.children);
              }
            );
          }),
          o(
            () => (
              e && (e._pendingUpdate = a),
              () => {
                e && (e._pendingUpdate = a);
              }
            )
          ),
          s(
            () => (
              e &&
                e._pendingUpdate &&
                (e._pendingUpdate(), (e._pendingUpdate = null)),
              () => {
                e &&
                  e._pendingUpdate &&
                  (e._pendingUpdate(), (e._pendingUpdate = null));
              }
            )
          ),
          null
        );
      }
    },
    3461: function (t, e) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (function (t, e) {
          for (var n in e)
            Object.defineProperty(t, n, { enumerable: !0, get: e[n] });
        })(e, {
          DecodeError: function () {
            return p;
          },
          MiddlewareNotFoundError: function () {
            return y;
          },
          MissingStaticPage: function () {
            return g;
          },
          NormalizeError: function () {
            return m;
          },
          PageNotFoundError: function () {
            return v;
          },
          SP: function () {
            return h;
          },
          ST: function () {
            return f;
          },
          WEB_VITALS: function () {
            return n;
          },
          execOnce: function () {
            return i;
          },
          getDisplayName: function () {
            return l;
          },
          getLocationOrigin: function () {
            return s;
          },
          getURL: function () {
            return a;
          },
          isAbsoluteUrl: function () {
            return o;
          },
          isResSent: function () {
            return u;
          },
          loadGetInitialProps: function () {
            return d;
          },
          normalizeRepeatedSlashes: function () {
            return c;
          },
          stringifyError: function () {
            return b;
          },
        });
      let n = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];
      function i(t) {
        let e,
          n = !1;
        return function () {
          for (var i = arguments.length, r = Array(i), o = 0; o < i; o++)
            r[o] = arguments[o];
          return n || ((n = !0), (e = t(...r))), e;
        };
      }
      let r = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
        o = (t) => r.test(t);
      function s() {
        let { protocol: t, hostname: e, port: n } = window.location;
        return t + "//" + e + (n ? ":" + n : "");
      }
      function a() {
        let { href: t } = window.location,
          e = s();
        return t.substring(e.length);
      }
      function l(t) {
        return "string" == typeof t ? t : t.displayName || t.name || "Unknown";
      }
      function u(t) {
        return t.finished || t.headersSent;
      }
      function c(t) {
        let e = t.split("?");
        return (
          e[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") +
          (e[1] ? "?" + e.slice(1).join("?") : "")
        );
      }
      async function d(t, e) {
        let n = e.res || (e.ctx && e.ctx.res);
        if (!t.getInitialProps)
          return e.ctx && e.Component
            ? { pageProps: await d(e.Component, e.ctx) }
            : {};
        let i = await t.getInitialProps(e);
        if (n && u(n)) return i;
        if (!i)
          throw Error(
            '"' +
              l(t) +
              '.getInitialProps()" should resolve to an object. But found "' +
              i +
              '" instead.'
          );
        return i;
      }
      let h = "undefined" != typeof performance,
        f =
          h &&
          ["mark", "measure", "getEntriesByName"].every(
            (t) => "function" == typeof performance[t]
          );
      class p extends Error {}
      class m extends Error {}
      class v extends Error {
        constructor(t) {
          super(),
            (this.code = "ENOENT"),
            (this.name = "PageNotFoundError"),
            (this.message = "Cannot find module for page: " + t);
        }
      }
      class g extends Error {
        constructor(t, e) {
          super(),
            (this.message =
              "Failed to load static file for page: " + t + " " + e);
        }
      }
      class y extends Error {
        constructor() {
          super(),
            (this.code = "ENOENT"),
            (this.message = "Cannot find the middleware module");
        }
      }
      function b(t) {
        return JSON.stringify({ message: t.message, stack: t.stack });
      }
    },
    9949: function (t, e, n) {
      "use strict";
      var i = n(8877);
      function r() {}
      function o() {}
      (o.resetWarningCache = r),
        (t.exports = function () {
          function t(t, e, n, r, o, s) {
            if (s !== i) {
              var a = Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
              );
              throw ((a.name = "Invariant Violation"), a);
            }
          }
          function e() {
            return t;
          }
          t.isRequired = t;
          var n = {
            array: t,
            bigint: t,
            bool: t,
            func: t,
            number: t,
            object: t,
            string: t,
            symbol: t,
            any: t,
            arrayOf: e,
            element: t,
            elementType: t,
            instanceOf: e,
            node: t,
            objectOf: e,
            oneOf: e,
            oneOfType: e,
            shape: e,
            exact: e,
            checkPropTypes: o,
            resetWarningCache: r,
          };
          return (n.PropTypes = n), n;
        });
    },
    1448: function (t, e, n) {
      t.exports = n(9949)();
    },
    8877: function (t) {
      "use strict";
      t.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    },
    9018: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var i = (function () {
          function t(t, e) {
            for (var n = 0; n < e.length; n++) {
              var i = e[n];
              (i.enumerable = i.enumerable || !1),
                (i.configurable = !0),
                "value" in i && (i.writable = !0),
                Object.defineProperty(t, i.key, i);
            }
          }
          return function (e, n, i) {
            return n && t(e.prototype, n), i && t(e, i), e;
          };
        })(),
        r = s(n(2265)),
        o = s(n(111));
      function s(t) {
        return t && t.__esModule ? t : { default: t };
      }
      var a = (function (t) {
        function e() {
          return (
            !(function (t, e) {
              if (!(t instanceof e))
                throw TypeError("Cannot call a class as a function");
            })(this, e),
            (function (t, e) {
              if (!t)
                throw ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e && ("object" == typeof e || "function" == typeof e)
                ? e
                : t;
            })(
              this,
              (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments)
            )
          );
        }
        return (
          !(function (t, e) {
            if ("function" != typeof e && null !== e)
              throw TypeError(
                "Super expression must either be null or a function, not " +
                  typeof e
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
              e &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(t, e)
                  : (t.__proto__ = e));
          })(e, t),
          i(e, [
            {
              key: "render",
              value: function () {
                return r.default.createElement(
                  "button",
                  this.props,
                  this.props.children
                );
              },
            },
          ]),
          e
        );
      })(r.default.Component);
      e.default = (0, o.default)(a);
    },
    7144: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var i =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = arguments[e];
              for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
            }
            return t;
          },
        r = (function () {
          function t(t, e) {
            for (var n = 0; n < e.length; n++) {
              var i = e[n];
              (i.enumerable = i.enumerable || !1),
                (i.configurable = !0),
                "value" in i && (i.writable = !0),
                Object.defineProperty(t, i.key, i);
            }
          }
          return function (e, n, i) {
            return n && t(e.prototype, n), i && t(e, i), e;
          };
        })(),
        o = l(n(2265)),
        s = l(n(9539)),
        a = l(n(1448));
      function l(t) {
        return t && t.__esModule ? t : { default: t };
      }
      var u = (function (t) {
        function e() {
          return (
            !(function (t, e) {
              if (!(t instanceof e))
                throw TypeError("Cannot call a class as a function");
            })(this, e),
            (function (t, e) {
              if (!t)
                throw ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e && ("object" == typeof e || "function" == typeof e)
                ? e
                : t;
            })(
              this,
              (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments)
            )
          );
        }
        return (
          !(function (t, e) {
            if ("function" != typeof e && null !== e)
              throw TypeError(
                "Super expression must either be null or a function, not " +
                  typeof e
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
              e &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(t, e)
                  : (t.__proto__ = e));
          })(e, t),
          r(e, [
            {
              key: "render",
              value: function () {
                var t = this,
                  e = i({}, this.props);
                return (
                  delete e.name,
                  e.parentBindings && delete e.parentBindings,
                  o.default.createElement(
                    "div",
                    i({}, e, {
                      ref: function (e) {
                        t.props.parentBindings.domNode = e;
                      },
                    }),
                    this.props.children
                  )
                );
              },
            },
          ]),
          e
        );
      })(o.default.Component);
      (u.propTypes = { name: a.default.string, id: a.default.string }),
        (e.default = (0, s.default)(u));
    },
    2166: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var i = o(n(2265)),
        r = o(n(111));
      function o(t) {
        return t && t.__esModule ? t : { default: t };
      }
      function s(t, e) {
        if (!t)
          throw ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e && ("object" == typeof e || "function" == typeof e) ? e : t;
      }
      var a = (function (t) {
        function e() {
          !(function (t, e) {
            if (!(t instanceof e))
              throw TypeError("Cannot call a class as a function");
          })(this, e);
          for (
            var t, n, r, o = arguments.length, a = Array(o), l = 0;
            l < o;
            l++
          )
            a[l] = arguments[l];
          return (
            (n = r =
              s(
                this,
                (t = e.__proto__ || Object.getPrototypeOf(e)).call.apply(
                  t,
                  [this].concat(a)
                )
              )),
            (r.render = function () {
              return i.default.createElement("a", r.props, r.props.children);
            }),
            s(r, n)
          );
        }
        return (
          !(function (t, e) {
            if ("function" != typeof e && null !== e)
              throw TypeError(
                "Super expression must either be null or a function, not " +
                  typeof e
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
              e &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(t, e)
                  : (t.__proto__ = e));
          })(e, t),
          e
        );
      })(i.default.Component);
      e.default = (0, r.default)(a);
    },
    3293: function (t, e, n) {
      "use strict";
      e.W_ = e.rU = void 0;
      var i = f(n(2166)),
        r = f(n(9018)),
        o = f(n(7144)),
        s = f(n(5813)),
        a = f(n(3187)),
        l = f(n(8675)),
        u = f(n(1049)),
        c = f(n(111)),
        d = f(n(9539)),
        h = f(n(5670));
      function f(t) {
        return t && t.__esModule ? t : { default: t };
      }
      (e.rU = i.default),
        r.default,
        (e.W_ = o.default),
        s.default,
        a.default,
        l.default,
        u.default,
        c.default,
        d.default,
        h.default,
        i.default,
        r.default,
        o.default,
        s.default,
        a.default,
        l.default,
        u.default,
        c.default,
        d.default,
        h.default;
    },
    5670: function (t, e, n) {
      "use strict";
      var i =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = arguments[e];
              for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
            }
            return t;
          },
        r = (function () {
          function t(t, e) {
            for (var n = 0; n < e.length; n++) {
              var i = e[n];
              (i.enumerable = i.enumerable || !1),
                (i.configurable = !0),
                "value" in i && (i.writable = !0),
                Object.defineProperty(t, i.key, i);
            }
          }
          return function (e, n, i) {
            return n && t(e.prototype, n), i && t(e, i), e;
          };
        })();
      function o(t, e) {
        if (!(t instanceof e))
          throw TypeError("Cannot call a class as a function");
      }
      function s(t, e) {
        if (!t)
          throw ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e && ("object" == typeof e || "function" == typeof e) ? e : t;
      }
      function a(t, e) {
        if ("function" != typeof e && null !== e)
          throw TypeError(
            "Super expression must either be null or a function, not " +
              typeof e
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
          e &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(t, e)
              : (t.__proto__ = e));
      }
      var l = n(2265);
      n(4887), n(3494);
      var u = n(8675),
        c = n(5813),
        d = n(1448),
        h = n(5792),
        f = {
          to: d.string.isRequired,
          containerId: d.string,
          container: d.object,
          activeClass: d.string,
          spy: d.bool,
          smooth: d.oneOfType([d.bool, d.string]),
          offset: d.number,
          delay: d.number,
          isDynamic: d.bool,
          onClick: d.func,
          duration: d.oneOfType([d.number, d.func]),
          absolute: d.bool,
          onSetActive: d.func,
          onSetInactive: d.func,
          ignoreCancelEvents: d.bool,
          hashSpy: d.bool,
          spyThrottle: d.number,
        };
      t.exports = {
        Scroll: function (t, e) {
          console.warn("Helpers.Scroll is deprecated since v1.7.0");
          var n = e || c,
            d = (function (e) {
              function c(t) {
                o(this, c);
                var e = s(
                  this,
                  (c.__proto__ || Object.getPrototypeOf(c)).call(this, t)
                );
                return p.call(e), (e.state = { active: !1 }), e;
              }
              return (
                a(c, e),
                r(c, [
                  {
                    key: "getScrollSpyContainer",
                    value: function () {
                      var t = this.props.containerId,
                        e = this.props.container;
                      return t
                        ? document.getElementById(t)
                        : e && e.nodeType
                        ? e
                        : document;
                    },
                  },
                  {
                    key: "componentDidMount",
                    value: function () {
                      if (this.props.spy || this.props.hashSpy) {
                        var t = this.getScrollSpyContainer();
                        u.isMounted(t) || u.mount(t, this.props.spyThrottle),
                          this.props.hashSpy &&
                            (h.isMounted() || h.mount(n),
                            h.mapContainer(this.props.to, t)),
                          this.props.spy &&
                            u.addStateHandler(this.stateHandler),
                          u.addSpyHandler(this.spyHandler, t),
                          this.setState({ container: t });
                      }
                    },
                  },
                  {
                    key: "componentWillUnmount",
                    value: function () {
                      u.unmount(this.stateHandler, this.spyHandler);
                    },
                  },
                  {
                    key: "render",
                    value: function () {
                      var e = "";
                      e =
                        this.state && this.state.active
                          ? (
                              (this.props.className || "") +
                              " " +
                              (this.props.activeClass || "active")
                            ).trim()
                          : this.props.className;
                      var n = i({}, this.props);
                      for (var r in f) n.hasOwnProperty(r) && delete n[r];
                      return (
                        (n.className = e),
                        (n.onClick = this.handleClick),
                        l.createElement(t, n)
                      );
                    },
                  },
                ]),
                c
              );
            })(l.Component),
            p = function () {
              var t = this;
              (this.scrollTo = function (e, r) {
                n.scrollTo(e, i({}, t.state, r));
              }),
                (this.handleClick = function (e) {
                  t.props.onClick && t.props.onClick(e),
                    e.stopPropagation && e.stopPropagation(),
                    e.preventDefault && e.preventDefault(),
                    t.scrollTo(t.props.to, t.props);
                }),
                (this.stateHandler = function () {
                  n.getActiveLink() !== t.props.to &&
                    (null !== t.state &&
                      t.state.active &&
                      t.props.onSetInactive &&
                      t.props.onSetInactive(),
                    t.setState({ active: !1 }));
                }),
                (this.spyHandler = function (e) {
                  var i = t.getScrollSpyContainer();
                  if (!h.isMounted() || h.isInitialized()) {
                    var r = t.props.to,
                      o = null,
                      s = 0,
                      a = 0,
                      l = 0;
                    if (
                      (i.getBoundingClientRect &&
                        (l = i.getBoundingClientRect().top),
                      !o || t.props.isDynamic)
                    ) {
                      if (!(o = n.get(r))) return;
                      var c = o.getBoundingClientRect();
                      a = (s = c.top - l + e) + c.height;
                    }
                    var d = e - t.props.offset,
                      f = d >= Math.floor(s) && d < Math.floor(a),
                      p = d < Math.floor(s) || d >= Math.floor(a),
                      m = n.getActiveLink();
                    return p
                      ? (r === m && n.setActiveLink(void 0),
                        t.props.hashSpy && h.getHash() === r && h.changeHash(),
                        t.props.spy &&
                          t.state.active &&
                          (t.setState({ active: !1 }),
                          t.props.onSetInactive && t.props.onSetInactive()),
                        u.updateStates())
                      : f && m !== r
                      ? (n.setActiveLink(r),
                        t.props.hashSpy && h.changeHash(r),
                        t.props.spy &&
                          (t.setState({ active: !0 }),
                          t.props.onSetActive && t.props.onSetActive(r)),
                        u.updateStates())
                      : void 0;
                  }
                });
            };
          return (d.propTypes = f), (d.defaultProps = { offset: 0 }), d;
        },
        Element: function (t) {
          console.warn("Helpers.Element is deprecated since v1.7.0");
          var e = (function (e) {
            function n(t) {
              o(this, n);
              var e = s(
                this,
                (n.__proto__ || Object.getPrototypeOf(n)).call(this, t)
              );
              return (e.childBindings = { domNode: null }), e;
            }
            return (
              a(n, e),
              r(n, [
                {
                  key: "componentDidMount",
                  value: function () {
                    if ("undefined" == typeof window) return !1;
                    this.registerElems(this.props.name);
                  },
                },
                {
                  key: "componentDidUpdate",
                  value: function (t) {
                    this.props.name !== t.name &&
                      this.registerElems(this.props.name);
                  },
                },
                {
                  key: "componentWillUnmount",
                  value: function () {
                    if ("undefined" == typeof window) return !1;
                    c.unregister(this.props.name);
                  },
                },
                {
                  key: "registerElems",
                  value: function (t) {
                    c.register(t, this.childBindings.domNode);
                  },
                },
                {
                  key: "render",
                  value: function () {
                    return l.createElement(
                      t,
                      i({}, this.props, { parentBindings: this.childBindings })
                    );
                  },
                },
              ]),
              n
            );
          })(l.Component);
          return (e.propTypes = { name: d.string, id: d.string }), e;
        },
      };
    },
    1049: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var i =
        Object.assign ||
        function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var i in n)
              Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
          }
          return t;
        };
      a(n(3494));
      var r = a(n(7198)),
        o = a(n(3234)),
        s = a(n(3187));
      function a(t) {
        return t && t.__esModule ? t : { default: t };
      }
      var l = function (t) {
          return r.default[t.smooth] || r.default.defaultEasing;
        },
        u =
          (function () {
            if ("undefined" != typeof window)
              return (
                window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame
              );
          })() ||
          function (t, e, n) {
            window.setTimeout(t, n || 1e3 / 60, new Date().getTime());
          },
        c = function () {
          return {
            currentPosition: 0,
            startPosition: 0,
            targetPosition: 0,
            progress: 0,
            duration: 0,
            cancel: !1,
            target: null,
            containerElement: null,
            to: null,
            start: null,
            delta: null,
            percent: null,
            delayTimeout: null,
          };
        },
        d = function (t) {
          var e = t.data.containerElement;
          if (e && e !== document && e !== document.body) return e.scrollLeft;
          var n = void 0 !== window.pageXOffset,
            i = "CSS1Compat" === (document.compatMode || "");
          return n
            ? window.pageXOffset
            : i
            ? document.documentElement.scrollLeft
            : document.body.scrollLeft;
        },
        h = function (t) {
          var e = t.data.containerElement;
          if (e && e !== document && e !== document.body) return e.scrollTop;
          var n = void 0 !== window.pageXOffset,
            i = "CSS1Compat" === (document.compatMode || "");
          return n
            ? window.pageYOffset
            : i
            ? document.documentElement.scrollTop
            : document.body.scrollTop;
        },
        f = function (t) {
          var e = t.data.containerElement;
          if (e && e !== document && e !== document.body)
            return e.scrollWidth - e.offsetWidth;
          var n = document.body,
            i = document.documentElement;
          return Math.max(
            n.scrollWidth,
            n.offsetWidth,
            i.clientWidth,
            i.scrollWidth,
            i.offsetWidth
          );
        },
        p = function (t) {
          var e = t.data.containerElement;
          if (e && e !== document && e !== document.body)
            return e.scrollHeight - e.offsetHeight;
          var n = document.body,
            i = document.documentElement;
          return Math.max(
            n.scrollHeight,
            n.offsetHeight,
            i.clientHeight,
            i.scrollHeight,
            i.offsetHeight
          );
        },
        m = function t(e, n, i) {
          var r = n.data;
          if (!n.ignoreCancelEvents && r.cancel) {
            s.default.registered.end &&
              s.default.registered.end(r.to, r.target, r.currentPositionY);
            return;
          }
          if (
            ((r.delta = Math.round(r.targetPosition - r.startPosition)),
            null === r.start && (r.start = i),
            (r.progress = i - r.start),
            (r.percent =
              r.progress >= r.duration ? 1 : e(r.progress / r.duration)),
            (r.currentPosition =
              r.startPosition + Math.ceil(r.delta * r.percent)),
            r.containerElement &&
            r.containerElement !== document &&
            r.containerElement !== document.body
              ? n.horizontal
                ? (r.containerElement.scrollLeft = r.currentPosition)
                : (r.containerElement.scrollTop = r.currentPosition)
              : n.horizontal
              ? window.scrollTo(r.currentPosition, 0)
              : window.scrollTo(0, r.currentPosition),
            r.percent < 1)
          ) {
            var o = t.bind(null, e, n);
            u.call(window, o);
            return;
          }
          s.default.registered.end &&
            s.default.registered.end(r.to, r.target, r.currentPosition);
        },
        v = function (t) {
          t.data.containerElement = t
            ? t.containerId
              ? document.getElementById(t.containerId)
              : t.container && t.container.nodeType
              ? t.container
              : document
            : null;
        },
        g = function (t, e, n, i) {
          if (
            ((e.data = e.data || c()),
            window.clearTimeout(e.data.delayTimeout),
            o.default.subscribe(function () {
              e.data.cancel = !0;
            }),
            v(e),
            (e.data.start = null),
            (e.data.cancel = !1),
            (e.data.startPosition = e.horizontal ? d(e) : h(e)),
            (e.data.targetPosition = e.absolute ? t : t + e.data.startPosition),
            e.data.startPosition === e.data.targetPosition)
          ) {
            s.default.registered.end &&
              s.default.registered.end(
                e.data.to,
                e.data.target,
                e.data.currentPosition
              );
            return;
          }
          (e.data.delta = Math.round(
            e.data.targetPosition - e.data.startPosition
          )),
            (e.data.duration = (
              "function" == typeof (r = e.duration)
                ? r
                : function () {
                    return r;
                  }
            )(e.data.delta)),
            (e.data.duration = isNaN(parseFloat(e.data.duration))
              ? 1e3
              : parseFloat(e.data.duration)),
            (e.data.to = n),
            (e.data.target = i);
          var r,
            a = l(e),
            f = m.bind(null, a, e);
          if (e && e.delay > 0) {
            e.data.delayTimeout = window.setTimeout(function () {
              s.default.registered.begin &&
                s.default.registered.begin(e.data.to, e.data.target),
                u.call(window, f);
            }, e.delay);
            return;
          }
          s.default.registered.begin &&
            s.default.registered.begin(e.data.to, e.data.target),
            u.call(window, f);
        },
        y = function (t) {
          return ((t = i({}, t)).data = t.data || c()), (t.absolute = !0), t;
        };
      e.default = {
        animateTopScroll: g,
        getAnimationType: l,
        scrollToTop: function (t) {
          g(0, y(t));
        },
        scrollToBottom: function (t) {
          v((t = y(t))), g(t.horizontal ? f(t) : p(t), t);
        },
        scrollTo: function (t, e) {
          g(t, y(e));
        },
        scrollMore: function (t, e) {
          v((e = y(e))), g(t + (e.horizontal ? d(e) : h(e)), e);
        },
      };
    },
    3234: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var i = n(6669),
        r = ["mousedown", "mousewheel", "touchmove", "keydown"];
      e.default = {
        subscribe: function (t) {
          return (
            "undefined" != typeof document &&
            r.forEach(function (e) {
              return (0, i.addPassiveEventListener)(document, e, t);
            })
          );
        },
      };
    },
    6669: function (t, e) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.addPassiveEventListener = function (t, e, i) {
          var r = i.name;
          r || ((r = e), console.warn("Listener must be a named function.")),
            n.has(e) || n.set(e, new Set());
          var o = n.get(e);
          if (!o.has(r)) {
            var s = (function () {
              var t = !1;
              try {
                var e = Object.defineProperty({}, "passive", {
                  get: function () {
                    t = !0;
                  },
                });
                window.addEventListener("test", null, e);
              } catch (t) {}
              return t;
            })();
            t.addEventListener(e, i, !!s && { passive: !0 }), o.add(r);
          }
        }),
        (e.removePassiveEventListener = function (t, e, i) {
          t.removeEventListener(e, i), n.get(e).delete(i.name || e);
        });
      var n = new Map();
    },
    9539: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var i =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = arguments[e];
              for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
            }
            return t;
          },
        r = (function () {
          function t(t, e) {
            for (var n = 0; n < e.length; n++) {
              var i = e[n];
              (i.enumerable = i.enumerable || !1),
                (i.configurable = !0),
                "value" in i && (i.writable = !0),
                Object.defineProperty(t, i.key, i);
            }
          }
          return function (e, n, i) {
            return n && t(e.prototype, n), i && t(e, i), e;
          };
        })(),
        o = l(n(2265));
      l(n(4887));
      var s = l(n(5813)),
        a = l(n(1448));
      function l(t) {
        return t && t.__esModule ? t : { default: t };
      }
      e.default = function (t) {
        var e = (function (e) {
          function n(t) {
            !(function (t, e) {
              if (!(t instanceof e))
                throw TypeError("Cannot call a class as a function");
            })(this, n);
            var e = (function (t, e) {
              if (!t)
                throw ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e && ("object" == typeof e || "function" == typeof e)
                ? e
                : t;
            })(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, t));
            return (e.childBindings = { domNode: null }), e;
          }
          return (
            !(function (t, e) {
              if ("function" != typeof e && null !== e)
                throw TypeError(
                  "Super expression must either be null or a function, not " +
                    typeof e
                );
              (t.prototype = Object.create(e && e.prototype, {
                constructor: {
                  value: t,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
                e &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(t, e)
                    : (t.__proto__ = e));
            })(n, e),
            r(n, [
              {
                key: "componentDidMount",
                value: function () {
                  if ("undefined" == typeof window) return !1;
                  this.registerElems(this.props.name);
                },
              },
              {
                key: "componentDidUpdate",
                value: function (t) {
                  this.props.name !== t.name &&
                    this.registerElems(this.props.name);
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  if ("undefined" == typeof window) return !1;
                  s.default.unregister(this.props.name);
                },
              },
              {
                key: "registerElems",
                value: function (t) {
                  s.default.register(t, this.childBindings.domNode);
                },
              },
              {
                key: "render",
                value: function () {
                  return o.default.createElement(
                    t,
                    i({}, this.props, { parentBindings: this.childBindings })
                  );
                },
              },
            ]),
            n
          );
        })(o.default.Component);
        return (
          (e.propTypes = { name: a.default.string, id: a.default.string }), e
        );
      };
    },
    3187: function (t, e) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var n = {
        registered: {},
        scrollEvent: {
          register: function (t, e) {
            n.registered[t] = e;
          },
          remove: function (t) {
            n.registered[t] = null;
          },
        },
      };
      e.default = n;
    },
    5792: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }), n(6669);
      var i,
        r = (i = n(3494)) && i.__esModule ? i : { default: i };
      e.default = {
        mountFlag: !1,
        initialized: !1,
        scroller: null,
        containers: {},
        mount: function (t) {
          (this.scroller = t),
            (this.handleHashChange = this.handleHashChange.bind(this)),
            window.addEventListener("hashchange", this.handleHashChange),
            this.initStateFromHash(),
            (this.mountFlag = !0);
        },
        mapContainer: function (t, e) {
          this.containers[t] = e;
        },
        isMounted: function () {
          return this.mountFlag;
        },
        isInitialized: function () {
          return this.initialized;
        },
        initStateFromHash: function () {
          var t = this,
            e = this.getHash();
          e
            ? window.setTimeout(function () {
                t.scrollTo(e, !0), (t.initialized = !0);
              }, 10)
            : (this.initialized = !0);
        },
        scrollTo: function (t, e) {
          var n = this.scroller;
          if (n.get(t) && (e || t !== n.getActiveLink())) {
            var i = this.containers[t] || document;
            n.scrollTo(t, { container: i });
          }
        },
        getHash: function () {
          return r.default.getHash();
        },
        changeHash: function (t, e) {
          this.isInitialized() &&
            r.default.getHash() !== t &&
            r.default.updateHash(t, e);
        },
        handleHashChange: function () {
          this.scrollTo(this.getHash());
        },
        unmount: function () {
          (this.scroller = null),
            (this.containers = null),
            window.removeEventListener("hashchange", this.handleHashChange);
        },
      };
    },
    111: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var i =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = arguments[e];
              for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
            }
            return t;
          },
        r = (function () {
          function t(t, e) {
            for (var n = 0; n < e.length; n++) {
              var i = e[n];
              (i.enumerable = i.enumerable || !1),
                (i.configurable = !0),
                "value" in i && (i.writable = !0),
                Object.defineProperty(t, i.key, i);
            }
          }
          return function (e, n, i) {
            return n && t(e.prototype, n), i && t(e, i), e;
          };
        })(),
        o = c(n(2265)),
        s = c(n(8675)),
        a = c(n(5813)),
        l = c(n(1448)),
        u = c(n(5792));
      function c(t) {
        return t && t.__esModule ? t : { default: t };
      }
      var d = {
        to: l.default.string.isRequired,
        containerId: l.default.string,
        container: l.default.object,
        activeClass: l.default.string,
        activeStyle: l.default.object,
        spy: l.default.bool,
        horizontal: l.default.bool,
        smooth: l.default.oneOfType([l.default.bool, l.default.string]),
        offset: l.default.number,
        delay: l.default.number,
        isDynamic: l.default.bool,
        onClick: l.default.func,
        duration: l.default.oneOfType([l.default.number, l.default.func]),
        absolute: l.default.bool,
        onSetActive: l.default.func,
        onSetInactive: l.default.func,
        ignoreCancelEvents: l.default.bool,
        hashSpy: l.default.bool,
        saveHashHistory: l.default.bool,
        spyThrottle: l.default.number,
      };
      e.default = function (t, e) {
        var n = e || a.default,
          l = (function (e) {
            function a(t) {
              !(function (t, e) {
                if (!(t instanceof e))
                  throw TypeError("Cannot call a class as a function");
              })(this, a);
              var e = (function (t, e) {
                if (!t)
                  throw ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return e && ("object" == typeof e || "function" == typeof e)
                  ? e
                  : t;
              })(this, (a.__proto__ || Object.getPrototypeOf(a)).call(this, t));
              return c.call(e), (e.state = { active: !1 }), e;
            }
            return (
              !(function (t, e) {
                if ("function" != typeof e && null !== e)
                  throw TypeError(
                    "Super expression must either be null or a function, not " +
                      typeof e
                  );
                (t.prototype = Object.create(e && e.prototype, {
                  constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                  e &&
                    (Object.setPrototypeOf
                      ? Object.setPrototypeOf(t, e)
                      : (t.__proto__ = e));
              })(a, e),
              r(a, [
                {
                  key: "getScrollSpyContainer",
                  value: function () {
                    var t = this.props.containerId,
                      e = this.props.container;
                    return t && !e
                      ? document.getElementById(t)
                      : e && e.nodeType
                      ? e
                      : document;
                  },
                },
                {
                  key: "componentDidMount",
                  value: function () {
                    if (this.props.spy || this.props.hashSpy) {
                      var t = this.getScrollSpyContainer();
                      s.default.isMounted(t) ||
                        s.default.mount(t, this.props.spyThrottle),
                        this.props.hashSpy &&
                          (u.default.isMounted() || u.default.mount(n),
                          u.default.mapContainer(this.props.to, t)),
                        s.default.addSpyHandler(this.spyHandler, t),
                        this.setState({ container: t });
                    }
                  },
                },
                {
                  key: "componentWillUnmount",
                  value: function () {
                    s.default.unmount(this.stateHandler, this.spyHandler);
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e = "";
                    e =
                      this.state && this.state.active
                        ? (
                            (this.props.className || "") +
                            " " +
                            (this.props.activeClass || "active")
                          ).trim()
                        : this.props.className;
                    var n = {};
                    n =
                      this.state && this.state.active
                        ? i({}, this.props.style, this.props.activeStyle)
                        : i({}, this.props.style);
                    var r = i({}, this.props);
                    for (var s in d) r.hasOwnProperty(s) && delete r[s];
                    return (
                      (r.className = e),
                      (r.style = n),
                      (r.onClick = this.handleClick),
                      o.default.createElement(t, r)
                    );
                  },
                },
              ]),
              a
            );
          })(o.default.PureComponent),
          c = function () {
            var t = this;
            (this.scrollTo = function (e, r) {
              n.scrollTo(e, i({}, t.state, r));
            }),
              (this.handleClick = function (e) {
                t.props.onClick && t.props.onClick(e),
                  e.stopPropagation && e.stopPropagation(),
                  e.preventDefault && e.preventDefault(),
                  t.scrollTo(t.props.to, t.props);
              }),
              (this.spyHandler = function (e, i) {
                var r = t.getScrollSpyContainer();
                if (!u.default.isMounted() || u.default.isInitialized()) {
                  var o = t.props.horizontal,
                    s = t.props.to,
                    a = null,
                    l = void 0,
                    c = void 0;
                  if (o) {
                    var d = 0,
                      h = 0,
                      f = 0;
                    if (
                      (r.getBoundingClientRect &&
                        (f = r.getBoundingClientRect().left),
                      !a || t.props.isDynamic)
                    ) {
                      if (!(a = n.get(s))) return;
                      var p = a.getBoundingClientRect();
                      h = (d = p.left - f + e) + p.width;
                    }
                    var m = e - t.props.offset;
                    (l = m >= Math.floor(d) && m < Math.floor(h)),
                      (c = m < Math.floor(d) || m >= Math.floor(h));
                  } else {
                    var v = 0,
                      g = 0,
                      y = 0;
                    if (
                      (r.getBoundingClientRect &&
                        (y = r.getBoundingClientRect().top),
                      !a || t.props.isDynamic)
                    ) {
                      if (!(a = n.get(s))) return;
                      var b = a.getBoundingClientRect();
                      g = (v = b.top - y + i) + b.height;
                    }
                    var P = i - t.props.offset;
                    (l = P >= Math.floor(v) && P < Math.floor(g)),
                      (c = P < Math.floor(v) || P >= Math.floor(g));
                  }
                  var w = n.getActiveLink();
                  if (c) {
                    if (
                      (s === w && n.setActiveLink(void 0),
                      t.props.hashSpy && u.default.getHash() === s)
                    ) {
                      var x = t.props.saveHashHistory;
                      u.default.changeHash("", void 0 !== x && x);
                    }
                    t.props.spy &&
                      t.state.active &&
                      (t.setState({ active: !1 }),
                      t.props.onSetInactive && t.props.onSetInactive(s, a));
                  }
                  if (l && (w !== s || !1 === t.state.active)) {
                    n.setActiveLink(s);
                    var S = t.props.saveHashHistory;
                    t.props.hashSpy &&
                      u.default.changeHash(s, void 0 !== S && S),
                      t.props.spy &&
                        (t.setState({ active: !0 }),
                        t.props.onSetActive && t.props.onSetActive(s, a));
                  }
                }
              });
          };
        return (l.propTypes = d), (l.defaultProps = { offset: 0 }), l;
      };
    },
    8675: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var i,
        r = (i = n(7701)) && i.__esModule ? i : { default: i },
        o = n(6669),
        s = function (t) {
          var e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 66;
          return (0, r.default)(t, e);
        },
        a = {
          spyCallbacks: [],
          spySetState: [],
          scrollSpyContainers: [],
          mount: function (t, e) {
            if (t) {
              var n = s(function (e) {
                a.scrollHandler(t);
              }, e);
              a.scrollSpyContainers.push(t),
                (0, o.addPassiveEventListener)(t, "scroll", n);
            }
          },
          isMounted: function (t) {
            return -1 !== a.scrollSpyContainers.indexOf(t);
          },
          currentPositionX: function (t) {
            if (t !== document) return t.scrollLeft;
            var e = void 0 !== window.pageYOffset,
              n = "CSS1Compat" === (document.compatMode || "");
            return e
              ? window.pageXOffset
              : n
              ? document.documentElement.scrollLeft
              : document.body.scrollLeft;
          },
          currentPositionY: function (t) {
            if (t !== document) return t.scrollTop;
            var e = void 0 !== window.pageXOffset,
              n = "CSS1Compat" === (document.compatMode || "");
            return e
              ? window.pageYOffset
              : n
              ? document.documentElement.scrollTop
              : document.body.scrollTop;
          },
          scrollHandler: function (t) {
            (
              a.scrollSpyContainers[a.scrollSpyContainers.indexOf(t)]
                .spyCallbacks || []
            ).forEach(function (e) {
              return e(a.currentPositionX(t), a.currentPositionY(t));
            });
          },
          addStateHandler: function (t) {
            a.spySetState.push(t);
          },
          addSpyHandler: function (t, e) {
            var n = a.scrollSpyContainers[a.scrollSpyContainers.indexOf(e)];
            n.spyCallbacks || (n.spyCallbacks = []),
              n.spyCallbacks.push(t),
              t(a.currentPositionX(e), a.currentPositionY(e));
          },
          updateStates: function () {
            a.spySetState.forEach(function (t) {
              return t();
            });
          },
          unmount: function (t, e) {
            a.scrollSpyContainers.forEach(function (t) {
              return (
                t.spyCallbacks &&
                t.spyCallbacks.length &&
                t.spyCallbacks.indexOf(e) > -1 &&
                t.spyCallbacks.splice(t.spyCallbacks.indexOf(e), 1)
              );
            }),
              a.spySetState &&
                a.spySetState.length &&
                a.spySetState.indexOf(t) > -1 &&
                a.spySetState.splice(a.spySetState.indexOf(t), 1),
              document.removeEventListener("scroll", a.scrollHandler);
          },
          update: function () {
            return a.scrollSpyContainers.forEach(function (t) {
              return a.scrollHandler(t);
            });
          },
        };
      e.default = a;
    },
    5813: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var i =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = arguments[e];
              for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
            }
            return t;
          },
        r = a(n(3494)),
        o = a(n(1049)),
        s = a(n(3187));
      function a(t) {
        return t && t.__esModule ? t : { default: t };
      }
      var l = {},
        u = void 0;
      e.default = {
        unmount: function () {
          l = {};
        },
        register: function (t, e) {
          l[t] = e;
        },
        unregister: function (t) {
          delete l[t];
        },
        get: function (t) {
          return (
            l[t] ||
            document.getElementById(t) ||
            document.getElementsByName(t)[0] ||
            document.getElementsByClassName(t)[0]
          );
        },
        setActiveLink: function (t) {
          return (u = t);
        },
        getActiveLink: function () {
          return u;
        },
        scrollTo: function (t, e) {
          var n = this.get(t);
          if (!n) {
            console.warn("target Element not found");
            return;
          }
          var a = (e = i({}, e, { absolute: !1 })).containerId,
            l = e.container,
            u = void 0;
          (u = a ? document.getElementById(a) : l && l.nodeType ? l : document),
            (e.absolute = !0);
          var c = e.horizontal,
            d = r.default.scrollOffset(u, n, c) + (e.offset || 0);
          if (!e.smooth) {
            s.default.registered.begin && s.default.registered.begin(t, n),
              u === document
                ? e.horizontal
                  ? window.scrollTo(d, 0)
                  : window.scrollTo(0, d)
                : (u.scrollTop = d),
              s.default.registered.end && s.default.registered.end(t, n);
            return;
          }
          o.default.animateTopScroll(d, e, t, n);
        },
      };
    },
    7198: function (t, e) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = {
          defaultEasing: function (t) {
            return t < 0.5
              ? Math.pow(2 * t, 2) / 2
              : 1 - Math.pow((1 - t) * 2, 2) / 2;
          },
          linear: function (t) {
            return t;
          },
          easeInQuad: function (t) {
            return t * t;
          },
          easeOutQuad: function (t) {
            return t * (2 - t);
          },
          easeInOutQuad: function (t) {
            return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
          },
          easeInCubic: function (t) {
            return t * t * t;
          },
          easeOutCubic: function (t) {
            return --t * t * t + 1;
          },
          easeInOutCubic: function (t) {
            return t < 0.5
              ? 4 * t * t * t
              : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
          },
          easeInQuart: function (t) {
            return t * t * t * t;
          },
          easeOutQuart: function (t) {
            return 1 - --t * t * t * t;
          },
          easeInOutQuart: function (t) {
            return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
          },
          easeInQuint: function (t) {
            return t * t * t * t * t;
          },
          easeOutQuint: function (t) {
            return 1 + --t * t * t * t * t;
          },
          easeInOutQuint: function (t) {
            return t < 0.5
              ? 16 * t * t * t * t * t
              : 1 + 16 * --t * t * t * t * t;
          },
        });
    },
    3494: function (t, e) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var n = function (t, e) {
        for (var n = t.offsetTop, i = t.offsetParent; i && !e(i); )
          (n += i.offsetTop), (i = i.offsetParent);
        return { offsetTop: n, offsetParent: i };
      };
      e.default = {
        updateHash: function (t, e) {
          var n = 0 === t.indexOf("#") ? t.substring(1) : t,
            i = n ? "#" + n : "",
            r = window && window.location,
            o = i ? r.pathname + r.search + i : r.pathname + r.search;
          e
            ? history.pushState(history.state, "", o)
            : history.replaceState(history.state, "", o);
        },
        getHash: function () {
          return window.location.hash.replace(/^#/, "");
        },
        filterElementInContainer: function (t) {
          return function (e) {
            return t.contains
              ? t != e && t.contains(e)
              : !!(16 & t.compareDocumentPosition(e));
          };
        },
        scrollOffset: function (t, e, i) {
          if (i)
            return t === document
              ? e.getBoundingClientRect().left +
                  (window.scrollX || window.pageXOffset)
              : "static" !== getComputedStyle(t).position
              ? e.offsetLeft
              : e.offsetLeft - t.offsetLeft;
          if (t === document)
            return (
              e.getBoundingClientRect().top +
              (window.scrollY || window.pageYOffset)
            );
          if ("static" !== getComputedStyle(t).position) {
            if (e.offsetParent !== t) {
              var r = n(e, function (e) {
                  return e === t || e === document;
                }),
                o = r.offsetTop;
              if (r.offsetParent !== t)
                throw Error(
                  "Seems containerElement is not an ancestor of the Element"
                );
              return o;
            }
            return e.offsetTop;
          }
          if (e.offsetParent === t.offsetParent)
            return e.offsetTop - t.offsetTop;
          var s = function (t) {
            return t === document;
          };
          return n(e, s).offsetTop - n(t, s).offsetTop;
        },
      };
    },
    6323: function (t, e, n) {
      "use strict";
      n.d(e, {
        t: function () {
          return i;
        },
      });
      let i = new Set(["opacity", "clipPath", "filter", "transform"]);
    },
    1298: function (t, e, n) {
      "use strict";
      n.d(e, {
        v: function () {
          return tR;
        },
      });
      var i = n(557),
        r = n(6019);
      let o = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
        s = (t) => ({
          type: "spring",
          stiffness: 550,
          damping: 0 === t ? 2 * Math.sqrt(550) : 30,
          restSpeed: 10,
        }),
        a = { type: "keyframes", duration: 0.8 },
        l = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
        u = (t, { keyframes: e }) =>
          e.length > 2
            ? a
            : r.G.has(t)
            ? t.startsWith("scale")
              ? s(e[1])
              : o
            : l;
      var c = n(9792),
        d = n(565);
      let h = { current: !1 },
        f = (t) => null !== t;
      function p(t, { repeat: e, repeatType: n = "loop" }, i) {
        let r = t.filter(f),
          o = e && "loop" !== n && e % 2 == 1 ? 0 : r.length - 1;
        return o && void 0 !== i ? i : r[o];
      }
      var m = n(6219),
        v = n(3078);
      function g(t) {
        let e;
        return () => (void 0 === e && (e = t()), e);
      }
      var y = n(9276),
        b = n(9993),
        P = n(3653),
        w = n(9047),
        x = n(3646);
      let S = (t, e) =>
        "zIndex" !== e &&
        !!(
          "number" == typeof t ||
          Array.isArray(t) ||
          ("string" == typeof t &&
            (x.P.test(t) || "0" === t) &&
            !t.startsWith("url("))
        );
      class T {
        constructor({
          autoplay: t = !0,
          delay: e = 0,
          type: n = "keyframes",
          repeat: i = 0,
          repeatDelay: r = 0,
          repeatType: o = "loop",
          ...s
        }) {
          (this.isStopped = !1),
            (this.hasAttemptedResolve = !1),
            (this.createdAt = b.X.now()),
            (this.options = {
              autoplay: t,
              delay: e,
              type: n,
              repeat: i,
              repeatDelay: r,
              repeatType: o,
              ...s,
            }),
            this.updateFinishedPromise();
        }
        calcStartTime() {
          return this.resolvedAt && this.resolvedAt - this.createdAt > 40
            ? this.resolvedAt
            : this.createdAt;
        }
        get resolved() {
          return (
            this._resolved || this.hasAttemptedResolve || (0, P.m)(),
            this._resolved
          );
        }
        onKeyframesResolved(t, e) {
          (this.resolvedAt = b.X.now()), (this.hasAttemptedResolve = !0);
          let {
            name: n,
            type: i,
            velocity: r,
            delay: o,
            onComplete: s,
            onUpdate: a,
            isGenerator: l,
          } = this.options;
          if (
            !l &&
            !(function (t, e, n, i) {
              let r = t[0];
              if (null === r) return !1;
              if ("display" === e || "visibility" === e) return !0;
              let o = t[t.length - 1],
                s = S(r, e),
                a = S(o, e);
              return (
                (0, w.K)(
                  s === a,
                  `You are trying to animate ${e} from "${r}" to "${o}". ${r} is not an animatable value - to enable this animation set ${r} to a value animatable to ${o} via the \`style\` property.`
                ),
                !!s &&
                  !!a &&
                  ((function (t) {
                    let e = t[0];
                    if (1 === t.length) return !0;
                    for (let n = 0; n < t.length; n++)
                      if (t[n] !== e) return !0;
                  })(t) ||
                    ("spring" === n && i))
              );
            })(t, n, i, r)
          ) {
            if (h.current || !o) {
              null == a || a(p(t, this.options, e)),
                null == s || s(),
                this.resolveFinishedPromise();
              return;
            }
            this.options.duration = 0;
          }
          let u = this.initPlayback(t, e);
          !1 !== u &&
            ((this._resolved = { keyframes: t, finalKeyframe: e, ...u }),
            this.onPostResolved());
        }
        onPostResolved() {}
        then(t, e) {
          return this.currentFinishedPromise.then(t, e);
        }
        updateFinishedPromise() {
          this.currentFinishedPromise = new Promise((t) => {
            this.resolveFinishedPromise = t;
          });
        }
      }
      var C = n(3476);
      function E(t, e, n) {
        let i = Math.max(e - 5, 0);
        return (0, C.R)(n - t(i), e - i);
      }
      var O = n(1506);
      function j(t, e) {
        return t * Math.sqrt(1 - e * e);
      }
      let M = ["duration", "bounce"],
        A = ["stiffness", "damping", "mass"];
      function R(t, e) {
        return e.some((e) => void 0 !== t[e]);
      }
      function k({ keyframes: t, restDelta: e, restSpeed: n, ...r }) {
        let o;
        let s = t[0],
          a = t[t.length - 1],
          l = { done: !1, value: s },
          {
            stiffness: u,
            damping: c,
            mass: d,
            duration: h,
            velocity: f,
            isResolvedFromDuration: p,
          } = (function (t) {
            let e = {
              velocity: 0,
              stiffness: 100,
              damping: 10,
              mass: 1,
              isResolvedFromDuration: !1,
              ...t,
            };
            if (!R(t, A) && R(t, M)) {
              let n = (function ({
                duration: t = 800,
                bounce: e = 0.25,
                velocity: n = 0,
                mass: r = 1,
              }) {
                let o, s;
                (0, w.K)(
                  t <= (0, i.w)(10),
                  "Spring duration must be 10 seconds or less"
                );
                let a = 1 - e;
                (a = (0, O.u)(0.05, 1, a)),
                  (t = (0, O.u)(0.01, 10, (0, i.X)(t))),
                  a < 1
                    ? ((o = (e) => {
                        let i = e * a,
                          r = i * t;
                        return 0.001 - ((i - n) / j(e, a)) * Math.exp(-r);
                      }),
                      (s = (e) => {
                        let i = e * a * t,
                          r = Math.pow(a, 2) * Math.pow(e, 2) * t,
                          s = j(Math.pow(e, 2), a);
                        return (
                          ((i * n + n - r) *
                            Math.exp(-i) *
                            (-o(e) + 0.001 > 0 ? -1 : 1)) /
                          s
                        );
                      }))
                    : ((o = (e) =>
                        -0.001 + Math.exp(-e * t) * ((e - n) * t + 1)),
                      (s = (e) => t * t * (n - e) * Math.exp(-e * t)));
                let l = (function (t, e, n) {
                  let i = n;
                  for (let n = 1; n < 12; n++) i -= t(i) / e(i);
                  return i;
                })(o, s, 5 / t);
                if (((t = (0, i.w)(t)), isNaN(l)))
                  return { stiffness: 100, damping: 10, duration: t };
                {
                  let e = Math.pow(l, 2) * r;
                  return {
                    stiffness: e,
                    damping: 2 * a * Math.sqrt(r * e),
                    duration: t,
                  };
                }
              })(t);
              (e = { ...e, ...n, mass: 1 }).isResolvedFromDuration = !0;
            }
            return e;
          })({ ...r, velocity: -(0, i.X)(r.velocity || 0) }),
          m = f || 0,
          v = c / (2 * Math.sqrt(u * d)),
          g = a - s,
          y = (0, i.X)(Math.sqrt(u / d)),
          b = 5 > Math.abs(g);
        if ((n || (n = b ? 0.01 : 2), e || (e = b ? 0.005 : 0.5), v < 1)) {
          let t = j(y, v);
          o = (e) =>
            a -
            Math.exp(-v * y * e) *
              (((m + v * y * g) / t) * Math.sin(t * e) + g * Math.cos(t * e));
        } else if (1 === v)
          o = (t) => a - Math.exp(-y * t) * (g + (m + y * g) * t);
        else {
          let t = y * Math.sqrt(v * v - 1);
          o = (e) => {
            let n = Math.exp(-v * y * e),
              i = Math.min(t * e, 300);
            return (
              a -
              (n * ((m + v * y * g) * Math.sinh(i) + t * g * Math.cosh(i))) / t
            );
          };
        }
        return {
          calculatedDuration: (p && h) || null,
          next: (t) => {
            let r = o(t);
            if (p) l.done = t >= h;
            else {
              let s = 0;
              v < 1 && (s = 0 === t ? (0, i.w)(m) : E(o, t, r));
              let u = Math.abs(s) <= n,
                c = Math.abs(a - r) <= e;
              l.done = u && c;
            }
            return (l.value = l.done ? a : r), l;
          },
        };
      }
      function _({
        keyframes: t,
        velocity: e = 0,
        power: n = 0.8,
        timeConstant: i = 325,
        bounceDamping: r = 10,
        bounceStiffness: o = 500,
        modifyTarget: s,
        min: a,
        max: l,
        restDelta: u = 0.5,
        restSpeed: c,
      }) {
        let d, h;
        let f = t[0],
          p = { done: !1, value: f },
          m = (t) => (void 0 !== a && t < a) || (void 0 !== l && t > l),
          v = (t) =>
            void 0 === a
              ? l
              : void 0 === l
              ? a
              : Math.abs(a - t) < Math.abs(l - t)
              ? a
              : l,
          g = n * e,
          y = f + g,
          b = void 0 === s ? y : s(y);
        b !== y && (g = b - f);
        let P = (t) => -g * Math.exp(-t / i),
          w = (t) => b + P(t),
          x = (t) => {
            let e = P(t),
              n = w(t);
            (p.done = Math.abs(e) <= u), (p.value = p.done ? b : n);
          },
          S = (t) => {
            m(p.value) &&
              ((d = t),
              (h = k({
                keyframes: [p.value, v(p.value)],
                velocity: E(w, t, p.value),
                damping: r,
                stiffness: o,
                restDelta: u,
                restSpeed: c,
              })));
          };
        return (
          S(0),
          {
            calculatedDuration: null,
            next: (t) => {
              let e = !1;
              return (h || void 0 !== d || ((e = !0), x(t), S(t)),
              void 0 !== d && t >= d)
                ? h.next(t - d)
                : (e || x(t), p);
            },
          }
        );
      }
      let D = (t, e, n) =>
        (((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t;
      function V(t, e, n, i) {
        if (t === e && n === i) return y.Z;
        let r = (e) =>
          (function (t, e, n, i, r) {
            let o, s;
            let a = 0;
            do (o = D((s = e + (n - e) / 2), i, r) - t) > 0 ? (n = s) : (e = s);
            while (Math.abs(o) > 1e-7 && ++a < 12);
            return s;
          })(e, 0, 1, t, n);
        return (t) => (0 === t || 1 === t ? t : D(r(t), e, i));
      }
      let L = V(0.42, 0, 1, 1),
        I = V(0, 0, 0.58, 1),
        B = V(0.42, 0, 0.58, 1),
        F = (t) => Array.isArray(t) && "number" != typeof t[0];
      var W = n(8536),
        N = n(3108),
        U = n(2718);
      let z = V(0.33, 1.53, 0.69, 0.99),
        H = (0, U.M)(z),
        $ = (0, N.o)(H),
        X = {
          linear: y.Z,
          easeIn: L,
          easeInOut: B,
          easeOut: I,
          circIn: W.Z7,
          circInOut: W.X7,
          circOut: W.Bn,
          backIn: H,
          backInOut: $,
          backOut: z,
          anticipate: (t) =>
            (t *= 2) < 1 ? 0.5 * H(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1))),
        },
        Y = (t) => {
          if (Array.isArray(t)) {
            (0, w.k)(
              4 === t.length,
              "Cubic bezier arrays must contain four numerical values."
            );
            let [e, n, i, r] = t;
            return V(e, n, i, r);
          }
          return "string" == typeof t
            ? ((0, w.k)(void 0 !== X[t], `Invalid easing type '${t}'`), X[t])
            : t;
        };
      var K = n(9654),
        q = n(3217),
        G = n(5004);
      function Z(t, e, n) {
        return (n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6)
          ? t + (e - t) * 6 * n
          : n < 0.5
          ? e
          : n < 2 / 3
          ? t + (e - t) * (2 / 3 - n) * 6
          : t;
      }
      var Q = n(5778),
        J = n(1583),
        tt = n(598);
      function te(t, e) {
        return (n) => (n > 0 ? e : t);
      }
      let tn = (t, e, n) => {
          let i = t * t,
            r = n * (e * e - i) + i;
          return r < 0 ? 0 : Math.sqrt(r);
        },
        ti = [Q.$, J.m, tt.J],
        tr = (t) => ti.find((e) => e.test(t));
      function to(t) {
        let e = tr(t);
        if (
          ((0, w.K)(
            !!e,
            `'${t}' is not an animatable color. Use the equivalent color code instead.`
          ),
          !e)
        )
          return !1;
        let n = e.parse(t);
        return (
          e === tt.J &&
            (n = (function ({ hue: t, saturation: e, lightness: n, alpha: i }) {
              (t /= 360), (n /= 100);
              let r = 0,
                o = 0,
                s = 0;
              if ((e /= 100)) {
                let i = n < 0.5 ? n * (1 + e) : n + e - n * e,
                  a = 2 * n - i;
                (r = Z(a, i, t + 1 / 3)),
                  (o = Z(a, i, t)),
                  (s = Z(a, i, t - 1 / 3));
              } else r = o = s = n;
              return {
                red: Math.round(255 * r),
                green: Math.round(255 * o),
                blue: Math.round(255 * s),
                alpha: i,
              };
            })(n)),
          n
        );
      }
      let ts = (t, e) => {
        let n = to(t),
          i = to(e);
        if (!n || !i) return te(t, e);
        let r = { ...n };
        return (t) => (
          (r.red = tn(n.red, i.red, t)),
          (r.green = tn(n.green, i.green, t)),
          (r.blue = tn(n.blue, i.blue, t)),
          (r.alpha = (0, G.t)(n.alpha, i.alpha, t)),
          J.m.transform(r)
        );
      };
      var ta = n(146),
        tl = n(1534);
      let tu = new Set(["none", "hidden"]);
      function tc(t, e) {
        return (n) => (0, G.t)(t, e, n);
      }
      function td(t) {
        return "number" == typeof t
          ? tc
          : "string" == typeof t
          ? (0, tl.t)(t)
            ? te
            : ta.$.test(t)
            ? ts
            : tp
          : Array.isArray(t)
          ? th
          : "object" == typeof t
          ? ta.$.test(t)
            ? ts
            : tf
          : te;
      }
      function th(t, e) {
        let n = [...t],
          i = n.length,
          r = t.map((t, n) => td(t)(t, e[n]));
        return (t) => {
          for (let e = 0; e < i; e++) n[e] = r[e](t);
          return n;
        };
      }
      function tf(t, e) {
        let n = { ...t, ...e },
          i = {};
        for (let r in n)
          void 0 !== t[r] && void 0 !== e[r] && (i[r] = td(t[r])(t[r], e[r]));
        return (t) => {
          for (let e in i) n[e] = i[e](t);
          return n;
        };
      }
      let tp = (t, e) => {
        let n = x.P.createTransformer(e),
          i = (0, x.V)(t),
          r = (0, x.V)(e);
        return i.indexes.var.length === r.indexes.var.length &&
          i.indexes.color.length === r.indexes.color.length &&
          i.indexes.number.length >= r.indexes.number.length
          ? (tu.has(t) && !r.values.length) || (tu.has(e) && !i.values.length)
            ? tu.has(t)
              ? (n) => (n <= 0 ? t : e)
              : (n) => (n >= 1 ? e : t)
            : (0, K.z)(
                th(
                  (function (t, e) {
                    var n;
                    let i = [],
                      r = { color: 0, var: 0, number: 0 };
                    for (let o = 0; o < e.values.length; o++) {
                      let s = e.types[o],
                        a = t.indexes[s][r[s]],
                        l = null !== (n = t.values[a]) && void 0 !== n ? n : 0;
                      (i[o] = l), r[s]++;
                    }
                    return i;
                  })(i, r),
                  r.values
                ),
                n
              )
          : ((0, w.K)(
              !0,
              `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`
            ),
            te(t, e));
      };
      function tm(t, e, n) {
        return "number" == typeof t &&
          "number" == typeof e &&
          "number" == typeof n
          ? (0, G.t)(t, e, n)
          : td(t)(t, e);
      }
      function tv({
        duration: t = 300,
        keyframes: e,
        times: n,
        ease: i = "easeInOut",
      }) {
        let r = F(i) ? i.map(Y) : Y(i),
          o = { done: !1, value: e[0] },
          s = (function (t, e, { clamp: n = !0, ease: i, mixer: r } = {}) {
            let o = t.length;
            if (
              ((0, w.k)(
                o === e.length,
                "Both input and output ranges must be the same length"
              ),
              1 === o)
            )
              return () => e[0];
            if (2 === o && t[0] === t[1]) return () => e[1];
            t[0] > t[o - 1] && ((t = [...t].reverse()), (e = [...e].reverse()));
            let s = (function (t, e, n) {
                let i = [],
                  r = n || tm,
                  o = t.length - 1;
                for (let n = 0; n < o; n++) {
                  let o = r(t[n], t[n + 1]);
                  if (e) {
                    let t = Array.isArray(e) ? e[n] || y.Z : e;
                    o = (0, K.z)(t, o);
                  }
                  i.push(o);
                }
                return i;
              })(e, i, r),
              a = s.length,
              l = (e) => {
                let n = 0;
                if (a > 1) for (; n < t.length - 2 && !(e < t[n + 1]); n++);
                let i = (0, q.Y)(t[n], t[n + 1], e);
                return s[n](i);
              };
            return n ? (e) => l((0, O.u)(t[0], t[o - 1], e)) : l;
          })(
            (n && n.length === e.length
              ? n
              : (function (t) {
                  let e = [0];
                  return (
                    (function (t, e) {
                      let n = t[t.length - 1];
                      for (let i = 1; i <= e; i++) {
                        let r = (0, q.Y)(0, e, i);
                        t.push((0, G.t)(n, 1, r));
                      }
                    })(e, t.length - 1),
                    e
                  );
                })(e)
            ).map((e) => e * t),
            e,
            {
              ease: Array.isArray(r)
                ? r
                : e.map(() => r || B).splice(0, e.length - 1),
            }
          );
        return {
          calculatedDuration: t,
          next: (e) => ((o.value = s(e)), (o.done = e >= t), o),
        };
      }
      let tg = (t) => {
          let e = ({ timestamp: e }) => t(e);
          return {
            start: () => m.Wi.update(e, !0),
            stop: () => (0, m.Pn)(e),
            now: () =>
              m.frameData.isProcessing ? m.frameData.timestamp : b.X.now(),
          };
        },
        ty = { decay: _, inertia: _, tween: tv, keyframes: tv, spring: k },
        tb = (t) => t / 100;
      class tP extends T {
        constructor(t) {
          super(t),
            (this.holdTime = null),
            (this.cancelTime = null),
            (this.currentTime = 0),
            (this.playbackSpeed = 1),
            (this.pendingPlayState = "running"),
            (this.startTime = null),
            (this.state = "idle"),
            (this.stop = () => {
              if (
                (this.resolver.cancel(),
                (this.isStopped = !0),
                "idle" === this.state)
              )
                return;
              this.teardown();
              let { onStop: t } = this.options;
              t && t();
            });
          let {
              name: e,
              motionValue: n,
              element: i,
              keyframes: r,
            } = this.options,
            o = (null == i ? void 0 : i.KeyframeResolver) || P.e;
          (this.resolver = new o(
            r,
            (t, e) => this.onKeyframesResolved(t, e),
            e,
            n,
            i
          )),
            this.resolver.scheduleResolve();
        }
        initPlayback(t) {
          let e, n;
          let {
              type: i = "keyframes",
              repeat: r = 0,
              repeatDelay: o = 0,
              repeatType: s,
              velocity: a = 0,
            } = this.options,
            l = ty[i] || tv;
          l !== tv &&
            "number" != typeof t[0] &&
            ((e = (0, K.z)(tb, tm(t[0], t[1]))), (t = [0, 100]));
          let u = l({ ...this.options, keyframes: t });
          "mirror" === s &&
            (n = l({
              ...this.options,
              keyframes: [...t].reverse(),
              velocity: -a,
            })),
            null === u.calculatedDuration &&
              (u.calculatedDuration = (function (t) {
                let e = 0,
                  n = t.next(e);
                for (; !n.done && e < 2e4; ) (e += 50), (n = t.next(e));
                return e >= 2e4 ? 1 / 0 : e;
              })(u));
          let { calculatedDuration: c } = u,
            d = c + o;
          return {
            generator: u,
            mirroredGenerator: n,
            mapPercentToKeyframes: e,
            calculatedDuration: c,
            resolvedDuration: d,
            totalDuration: d * (r + 1) - o,
          };
        }
        onPostResolved() {
          let { autoplay: t = !0 } = this.options;
          this.play(),
            "paused" !== this.pendingPlayState && t
              ? (this.state = this.pendingPlayState)
              : this.pause();
        }
        tick(t, e = !1) {
          let { resolved: n } = this;
          if (!n) {
            let { keyframes: t } = this.options;
            return { done: !0, value: t[t.length - 1] };
          }
          let {
            finalKeyframe: i,
            generator: r,
            mirroredGenerator: o,
            mapPercentToKeyframes: s,
            keyframes: a,
            calculatedDuration: l,
            totalDuration: u,
            resolvedDuration: c,
          } = n;
          if (null === this.startTime) return r.next(0);
          let {
            delay: d,
            repeat: h,
            repeatType: f,
            repeatDelay: m,
            onUpdate: v,
          } = this.options;
          this.speed > 0
            ? (this.startTime = Math.min(this.startTime, t))
            : this.speed < 0 &&
              (this.startTime = Math.min(t - u / this.speed, this.startTime)),
            e
              ? (this.currentTime = t)
              : null !== this.holdTime
              ? (this.currentTime = this.holdTime)
              : (this.currentTime =
                  Math.round(t - this.startTime) * this.speed);
          let g = this.currentTime - d * (this.speed >= 0 ? 1 : -1),
            y = this.speed >= 0 ? g < 0 : g > u;
          (this.currentTime = Math.max(g, 0)),
            "finished" === this.state &&
              null === this.holdTime &&
              (this.currentTime = u);
          let b = this.currentTime,
            P = r;
          if (h) {
            let t = Math.min(this.currentTime, u) / c,
              e = Math.floor(t),
              n = t % 1;
            !n && t >= 1 && (n = 1),
              1 === n && e--,
              (e = Math.min(e, h + 1)) % 2 &&
                ("reverse" === f
                  ? ((n = 1 - n), m && (n -= m / c))
                  : "mirror" === f && (P = o)),
              (b = (0, O.u)(0, 1, n) * c);
          }
          let w = y ? { done: !1, value: a[0] } : P.next(b);
          s && (w.value = s(w.value));
          let { done: x } = w;
          y ||
            null === l ||
            (x =
              this.speed >= 0 ? this.currentTime >= u : this.currentTime <= 0);
          let S =
            null === this.holdTime &&
            ("finished" === this.state || ("running" === this.state && x));
          return (
            S && void 0 !== i && (w.value = p(a, this.options, i)),
            v && v(w.value),
            S && this.finish(),
            w
          );
        }
        get duration() {
          let { resolved: t } = this;
          return t ? (0, i.X)(t.calculatedDuration) : 0;
        }
        get time() {
          return (0, i.X)(this.currentTime);
        }
        set time(t) {
          (t = (0, i.w)(t)),
            (this.currentTime = t),
            null !== this.holdTime || 0 === this.speed
              ? (this.holdTime = t)
              : this.driver &&
                (this.startTime = this.driver.now() - t / this.speed);
        }
        get speed() {
          return this.playbackSpeed;
        }
        set speed(t) {
          let e = this.playbackSpeed !== t;
          (this.playbackSpeed = t),
            e && (this.time = (0, i.X)(this.currentTime));
        }
        play() {
          if (
            (this.resolver.isScheduled || this.resolver.resume(),
            !this._resolved)
          ) {
            this.pendingPlayState = "running";
            return;
          }
          if (this.isStopped) return;
          let { driver: t = tg, onPlay: e, startTime: n } = this.options;
          this.driver || (this.driver = t((t) => this.tick(t))), e && e();
          let i = this.driver.now();
          null !== this.holdTime
            ? (this.startTime = i - this.holdTime)
            : this.startTime
            ? "finished" === this.state && (this.startTime = i)
            : (this.startTime = null != n ? n : this.calcStartTime()),
            "finished" === this.state && this.updateFinishedPromise(),
            (this.cancelTime = this.startTime),
            (this.holdTime = null),
            (this.state = "running"),
            this.driver.start();
        }
        pause() {
          var t;
          if (!this._resolved) {
            this.pendingPlayState = "paused";
            return;
          }
          (this.state = "paused"),
            (this.holdTime =
              null !== (t = this.currentTime) && void 0 !== t ? t : 0);
        }
        complete() {
          "running" !== this.state && this.play(),
            (this.pendingPlayState = this.state = "finished"),
            (this.holdTime = null);
        }
        finish() {
          this.teardown(), (this.state = "finished");
          let { onComplete: t } = this.options;
          t && t();
        }
        cancel() {
          null !== this.cancelTime && this.tick(this.cancelTime),
            this.teardown(),
            this.updateFinishedPromise();
        }
        teardown() {
          (this.state = "idle"),
            this.stopDriver(),
            this.resolveFinishedPromise(),
            this.updateFinishedPromise(),
            (this.startTime = this.cancelTime = null),
            this.resolver.cancel();
        }
        stopDriver() {
          this.driver && (this.driver.stop(), (this.driver = void 0));
        }
        sample(t) {
          return (this.startTime = 0), this.tick(t, !0);
        }
      }
      var tw = n(6323);
      let tx = (t) => Array.isArray(t) && "number" == typeof t[0],
        tS = ([t, e, n, i]) => `cubic-bezier(${t}, ${e}, ${n}, ${i})`,
        tT = {
          linear: "linear",
          ease: "ease",
          easeIn: "ease-in",
          easeOut: "ease-out",
          easeInOut: "ease-in-out",
          circIn: tS([0, 0.65, 0.55, 1]),
          circOut: tS([0.55, 0, 1, 0.45]),
          backIn: tS([0.31, 0.01, 0.66, -0.59]),
          backOut: tS([0.33, 1.53, 0.69, 0.99]),
        };
      function tC(t) {
        return tE(t) || tT.easeOut;
      }
      function tE(t) {
        if (t) return tx(t) ? tS(t) : Array.isArray(t) ? t.map(tC) : tT[t];
      }
      let tO = g(() =>
        Object.hasOwnProperty.call(Element.prototype, "animate")
      );
      class tj extends T {
        constructor(t) {
          super(t);
          let {
            name: e,
            motionValue: n,
            element: i,
            keyframes: r,
          } = this.options;
          (this.resolver = new v.s(
            r,
            (t, e) => this.onKeyframesResolved(t, e),
            e,
            n,
            i
          )),
            this.resolver.scheduleResolve();
        }
        initPlayback(t, e) {
          var n, i;
          let {
            duration: r = 300,
            times: o,
            ease: s,
            type: a,
            motionValue: l,
            name: u,
            startTime: c,
          } = this.options;
          if (!(null === (n = l.owner) || void 0 === n ? void 0 : n.current))
            return !1;
          if (
            "spring" === (i = this.options).type ||
            !(function t(e) {
              return !!(
                !e ||
                ("string" == typeof e && e in tT) ||
                tx(e) ||
                (Array.isArray(e) && e.every(t))
              );
            })(i.ease)
          ) {
            let {
                onComplete: e,
                onUpdate: n,
                motionValue: i,
                element: l,
                ...u
              } = this.options,
              c = (function (t, e) {
                let n = new tP({
                    ...e,
                    keyframes: t,
                    repeat: 0,
                    delay: 0,
                    isGenerator: !0,
                  }),
                  i = { done: !1, value: t[0] },
                  r = [],
                  o = 0;
                for (; !i.done && o < 2e4; )
                  r.push((i = n.sample(o)).value), (o += 10);
                return {
                  times: void 0,
                  keyframes: r,
                  duration: o - 10,
                  ease: "linear",
                };
              })(t, u);
            1 === (t = c.keyframes).length && (t[1] = t[0]),
              (r = c.duration),
              (o = c.times),
              (s = c.ease),
              (a = "keyframes");
          }
          let d = (function (
            t,
            e,
            n,
            {
              delay: i = 0,
              duration: r = 300,
              repeat: o = 0,
              repeatType: s = "loop",
              ease: a,
              times: l,
            } = {}
          ) {
            let u = { [e]: n };
            l && (u.offset = l);
            let c = tE(a);
            return (
              Array.isArray(c) && (u.easing = c),
              t.animate(u, {
                delay: i,
                duration: r,
                easing: Array.isArray(c) ? "linear" : c,
                fill: "both",
                iterations: o + 1,
                direction: "reverse" === s ? "alternate" : "normal",
              })
            );
          })(l.owner.current, u, t, {
            ...this.options,
            duration: r,
            times: o,
            ease: s,
          });
          return (
            (d.startTime = null != c ? c : this.calcStartTime()),
            this.pendingTimeline
              ? ((d.timeline = this.pendingTimeline),
                (this.pendingTimeline = void 0))
              : (d.onfinish = () => {
                  let { onComplete: n } = this.options;
                  l.set(p(t, this.options, e)),
                    n && n(),
                    this.cancel(),
                    this.resolveFinishedPromise();
                }),
            {
              animation: d,
              duration: r,
              times: o,
              type: a,
              ease: s,
              keyframes: t,
            }
          );
        }
        get duration() {
          let { resolved: t } = this;
          if (!t) return 0;
          let { duration: e } = t;
          return (0, i.X)(e);
        }
        get time() {
          let { resolved: t } = this;
          if (!t) return 0;
          let { animation: e } = t;
          return (0, i.X)(e.currentTime || 0);
        }
        set time(t) {
          let { resolved: e } = this;
          if (!e) return;
          let { animation: n } = e;
          n.currentTime = (0, i.w)(t);
        }
        get speed() {
          let { resolved: t } = this;
          if (!t) return 1;
          let { animation: e } = t;
          return e.playbackRate;
        }
        set speed(t) {
          let { resolved: e } = this;
          if (!e) return;
          let { animation: n } = e;
          n.playbackRate = t;
        }
        get state() {
          let { resolved: t } = this;
          if (!t) return "idle";
          let { animation: e } = t;
          return e.playState;
        }
        get startTime() {
          let { resolved: t } = this;
          if (!t) return null;
          let { animation: e } = t;
          return e.startTime;
        }
        attachTimeline(t) {
          if (this._resolved) {
            let { resolved: e } = this;
            if (!e) return y.Z;
            let { animation: n } = e;
            (n.timeline = t), (n.onfinish = null);
          } else this.pendingTimeline = t;
          return y.Z;
        }
        play() {
          if (this.isStopped) return;
          let { resolved: t } = this;
          if (!t) return;
          let { animation: e } = t;
          "finished" === e.playState && this.updateFinishedPromise(), e.play();
        }
        pause() {
          let { resolved: t } = this;
          if (!t) return;
          let { animation: e } = t;
          e.pause();
        }
        stop() {
          if (
            (this.resolver.cancel(),
            (this.isStopped = !0),
            "idle" === this.state)
          )
            return;
          this.resolveFinishedPromise(), this.updateFinishedPromise();
          let { resolved: t } = this;
          if (!t) return;
          let {
            animation: e,
            keyframes: n,
            duration: r,
            type: o,
            ease: s,
            times: a,
          } = t;
          if ("idle" === e.playState || "finished" === e.playState) return;
          if (this.time) {
            let {
                motionValue: t,
                onUpdate: e,
                onComplete: l,
                element: u,
                ...c
              } = this.options,
              d = new tP({
                ...c,
                keyframes: n,
                duration: r,
                type: o,
                ease: s,
                times: a,
                isGenerator: !0,
              }),
              h = (0, i.w)(this.time);
            t.setWithVelocity(d.sample(h - 10).value, d.sample(h).value, 10);
          }
          let { onStop: l } = this.options;
          l && l(), this.cancel();
        }
        complete() {
          let { resolved: t } = this;
          t && t.animation.finish();
        }
        cancel() {
          let { resolved: t } = this;
          t && t.animation.cancel();
        }
        static supports(t) {
          let {
            motionValue: e,
            name: n,
            repeatDelay: i,
            repeatType: r,
            damping: o,
            type: s,
          } = t;
          return (
            tO() &&
            n &&
            tw.t.has(n) &&
            e &&
            e.owner &&
            e.owner.current instanceof HTMLElement &&
            !e.owner.getProps().onUpdate &&
            !i &&
            "mirror" !== r &&
            0 !== o &&
            "inertia" !== s
          );
        }
      }
      let tM = g(() => void 0 !== window.ScrollTimeline);
      class tA {
        constructor(t) {
          (this.stop = () => this.runAll("stop")),
            (this.animations = t.filter(Boolean));
        }
        then(t, e) {
          return Promise.all(this.animations).then(t).catch(e);
        }
        getAll(t) {
          return this.animations[0][t];
        }
        setAll(t, e) {
          for (let n = 0; n < this.animations.length; n++)
            this.animations[n][t] = e;
        }
        attachTimeline(t) {
          let e = this.animations.map((e) => {
            if (!tM() || !e.attachTimeline)
              return (
                e.pause(),
                (function (t, e) {
                  let n;
                  let i = () => {
                    let { currentTime: i } = e,
                      r = (null === i ? 0 : i.value) / 100;
                    n !== r && t(r), (n = r);
                  };
                  return m.Wi.update(i, !0), () => (0, m.Pn)(i);
                })((t) => {
                  e.time = e.duration * t;
                }, t)
              );
            e.attachTimeline(t);
          });
          return () => {
            e.forEach((t, e) => {
              t && t(), this.animations[e].stop();
            });
          };
        }
        get time() {
          return this.getAll("time");
        }
        set time(t) {
          this.setAll("time", t);
        }
        get speed() {
          return this.getAll("speed");
        }
        set speed(t) {
          this.setAll("speed", t);
        }
        get startTime() {
          return this.getAll("startTime");
        }
        get duration() {
          let t = 0;
          for (let e = 0; e < this.animations.length; e++)
            t = Math.max(t, this.animations[e].duration);
          return t;
        }
        runAll(t) {
          this.animations.forEach((e) => e[t]());
        }
        play() {
          this.runAll("play");
        }
        pause() {
          this.runAll("pause");
        }
        cancel() {
          this.runAll("cancel");
        }
        complete() {
          this.runAll("complete");
        }
      }
      let tR =
        (t, e, n, r = {}, o, s, a) =>
        (l) => {
          let f = (0, c.e)(r, t) || {},
            v = f.delay || r.delay || 0,
            { elapsed: g = 0 } = r;
          g -= (0, i.w)(v);
          let y = {
            keyframes: Array.isArray(n) ? n : [null, n],
            ease: "easeOut",
            velocity: e.getVelocity(),
            ...f,
            delay: -g,
            onUpdate: (t) => {
              e.set(t), f.onUpdate && f.onUpdate(t);
            },
            onComplete: () => {
              l(), f.onComplete && f.onComplete(), a && a();
            },
            onStop: a,
            name: t,
            motionValue: e,
            element: s ? void 0 : o,
          };
          (0, c.r)(f) || (y = { ...y, ...u(t, y) }),
            y.duration && (y.duration = (0, i.w)(y.duration)),
            y.repeatDelay && (y.repeatDelay = (0, i.w)(y.repeatDelay)),
            void 0 !== y.from && (y.keyframes[0] = y.from);
          let b = !1;
          if (
            ((!1 !== y.type && (0 !== y.duration || y.repeatDelay)) ||
              ((y.duration = 0), 0 !== y.delay || (b = !0)),
            (h.current || d.c.skipAnimations) &&
              ((b = !0), (y.duration = 0), (y.delay = 0)),
            b && !s && void 0 !== e.get())
          ) {
            let t = p(y.keyframes, f);
            if (void 0 !== t)
              return (
                m.Wi.update(() => {
                  y.onUpdate(t), y.onComplete();
                }),
                new tA([])
              );
          }
          return !s && tj.supports(y) ? new tj(y) : new tP(y);
        };
    },
    5908: function (t, e, n) {
      "use strict";
      n.d(e, {
        M: function () {
          return i;
        },
      });
      let i = "data-" + (0, n(1580).D)("framerAppearId");
    },
    2087: function (t, e, n) {
      "use strict";
      n.d(e, {
        s: function () {
          return r;
        },
      });
      var i = n(5908);
      function r(t) {
        return t.props[i.M];
      }
    },
    4572: function (t, e, n) {
      "use strict";
      function i(t) {
        return (
          null !== t && "object" == typeof t && "function" == typeof t.start
        );
      }
      n.d(e, {
        H: function () {
          return i;
        },
      });
    },
    6925: function (t, e, n) {
      "use strict";
      n.d(e, {
        C: function () {
          return i;
        },
      });
      let i = (t) => Array.isArray(t);
    },
    9792: function (t, e, n) {
      "use strict";
      function i({
        when: t,
        delay: e,
        delayChildren: n,
        staggerChildren: i,
        staggerDirection: r,
        repeat: o,
        repeatType: s,
        repeatDelay: a,
        from: l,
        elapsed: u,
        ...c
      }) {
        return !!Object.keys(c).length;
      }
      function r(t, e) {
        return t[e] || t.default || t;
      }
      n.d(e, {
        e: function () {
          return r;
        },
        r: function () {
          return i;
        },
      });
    },
    5050: function (t, e, n) {
      "use strict";
      n.d(e, {
        p: function () {
          return i;
        },
      });
      let i = (0, n(2265).createContext)({});
    },
    6539: function (t, e, n) {
      "use strict";
      n.d(e, {
        u: function () {
          return i;
        },
      });
      let i = (0, n(2265).createContext)({ strict: !1 });
    },
    9791: function (t, e, n) {
      "use strict";
      n.d(e, {
        _: function () {
          return i;
        },
      });
      let i = (0, n(2265).createContext)({
        transformPagePoint: (t) => t,
        isStatic: !1,
        reducedMotion: "never",
      });
    },
    7797: function (t, e, n) {
      "use strict";
      n.d(e, {
        O: function () {
          return i;
        },
      });
      let i = (0, n(2265).createContext)(null);
    },
    6094: function (t, e, n) {
      "use strict";
      n.d(e, {
        g: function () {
          return i;
        },
      });
      let i = (0, n(2265).createContext)({});
    },
    8536: function (t, e, n) {
      "use strict";
      n.d(e, {
        Bn: function () {
          return s;
        },
        X7: function () {
          return a;
        },
        Z7: function () {
          return o;
        },
      });
      var i = n(3108),
        r = n(2718);
      let o = (t) => 1 - Math.sin(Math.acos(t)),
        s = (0, r.M)(o),
        a = (0, i.o)(o);
    },
    3108: function (t, e, n) {
      "use strict";
      n.d(e, {
        o: function () {
          return i;
        },
      });
      let i = (t) => (e) => e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2;
    },
    2718: function (t, e, n) {
      "use strict";
      n.d(e, {
        M: function () {
          return i;
        },
      });
      let i = (t) => (e) => 1 - t(1 - e);
    },
    3731: function (t, e, n) {
      "use strict";
      function i(t, e, n, i = { passive: !0 }) {
        return t.addEventListener(e, n, i), () => t.removeEventListener(e, n);
      }
      n.d(e, {
        E: function () {
          return i;
        },
      });
    },
    3787: function (t, e, n) {
      "use strict";
      n.d(e, {
        a: function () {
          return o;
        },
      });
      var i = n(3731),
        r = n(3280);
      function o(t, e, n, o) {
        return (0, i.E)(t, e, (0, r.s)(n), o);
      }
    },
    3280: function (t, e, n) {
      "use strict";
      n.d(e, {
        Q: function () {
          return r;
        },
        s: function () {
          return o;
        },
      });
      var i = n(3414);
      function r(t, e = "page") {
        return { point: { x: t[`${e}X`], y: t[`${e}Y`] } };
      }
      let o = (t) => (e) => (0, i.D)(e) && t(e, r(e));
    },
    3414: function (t, e, n) {
      "use strict";
      n.d(e, {
        D: function () {
          return i;
        },
      });
      let i = (t) =>
        "mouse" === t.pointerType
          ? "number" != typeof t.button || t.button <= 0
          : !1 !== t.isPrimary;
    },
    2981: function (t, e, n) {
      "use strict";
      n.d(e, {
        Z: function () {
          return o;
        },
      });
      var i = n(565);
      let r = [
        "read",
        "resolveKeyframes",
        "update",
        "preRender",
        "render",
        "postRender",
      ];
      function o(t, e) {
        let n = !1,
          o = !0,
          s = { delta: 0, timestamp: 0, isProcessing: !1 },
          a = () => (n = !0),
          l = r.reduce(
            (t, e) => (
              (t[e] = (function (t) {
                let e = new Set(),
                  n = new Set(),
                  i = !1,
                  r = !1,
                  o = new WeakSet(),
                  s = { delta: 0, timestamp: 0, isProcessing: !1 };
                function a(e) {
                  o.has(e) && (l.schedule(e), t()), e(s);
                }
                let l = {
                  schedule: (t, r = !1, s = !1) => {
                    let a = s && i ? e : n;
                    return r && o.add(t), a.has(t) || a.add(t), t;
                  },
                  cancel: (t) => {
                    n.delete(t), o.delete(t);
                  },
                  process: (t) => {
                    if (((s = t), i)) {
                      r = !0;
                      return;
                    }
                    (i = !0),
                      ([e, n] = [n, e]),
                      n.clear(),
                      e.forEach(a),
                      (i = !1),
                      r && ((r = !1), l.process(t));
                  },
                };
                return l;
              })(a)),
              t
            ),
            {}
          ),
          {
            read: u,
            resolveKeyframes: c,
            update: d,
            preRender: h,
            render: f,
            postRender: p,
          } = l,
          m = () => {
            let r = i.c.useManualTiming ? s.timestamp : performance.now();
            (n = !1),
              (s.delta = o
                ? 1e3 / 60
                : Math.max(Math.min(r - s.timestamp, 40), 1)),
              (s.timestamp = r),
              (s.isProcessing = !0),
              u.process(s),
              c.process(s),
              d.process(s),
              h.process(s),
              f.process(s),
              p.process(s),
              (s.isProcessing = !1),
              n && e && ((o = !1), t(m));
          },
          v = () => {
            (n = !0), (o = !0), s.isProcessing || t(m);
          };
        return {
          schedule: r.reduce((t, e) => {
            let i = l[e];
            return (
              (t[e] = (t, e = !1, r = !1) => (n || v(), i.schedule(t, e, r))), t
            );
          }, {}),
          cancel: (t) => {
            for (let e = 0; e < r.length; e++) l[r[e]].cancel(t);
          },
          state: s,
          steps: l,
        };
      }
    },
    6219: function (t, e, n) {
      "use strict";
      n.d(e, {
        Pn: function () {
          return o;
        },
        S6: function () {
          return a;
        },
        Wi: function () {
          return r;
        },
        frameData: function () {
          return s;
        },
      });
      var i = n(9276);
      let {
        schedule: r,
        cancel: o,
        state: s,
        steps: a,
      } = (0, n(2981).Z)(
        "undefined" != typeof requestAnimationFrame
          ? requestAnimationFrame
          : i.Z,
        !0
      );
    },
    8172: function (t, e, n) {
      "use strict";
      n.d(e, {
        g: function () {
          return i;
        },
      });
      let { schedule: i, cancel: r } = (0, n(2981).Z)(queueMicrotask, !1);
    },
    9993: function (t, e, n) {
      "use strict";
      let i;
      n.d(e, {
        X: function () {
          return a;
        },
      });
      var r = n(565),
        o = n(6219);
      function s() {
        i = void 0;
      }
      let a = {
        now: () => (
          void 0 === i &&
            a.set(
              o.frameData.isProcessing || r.c.useManualTiming
                ? o.frameData.timestamp
                : performance.now()
            ),
          i
        ),
        set: (t) => {
          (i = t), queueMicrotask(s);
        },
      };
    },
    5153: function (t, e, n) {
      "use strict";
      function i(t) {
        let e = null;
        return () =>
          null === e &&
          ((e = t),
          () => {
            e = null;
          });
      }
      n.d(e, {
        fJ: function () {
          return s;
        },
        gD: function () {
          return a;
        },
      });
      let r = i("dragHorizontal"),
        o = i("dragVertical");
      function s(t) {
        let e = !1;
        if ("y" === t) e = o();
        else if ("x" === t) e = r();
        else {
          let t = r(),
            n = o();
          t && n
            ? (e = () => {
                t(), n();
              })
            : (t && t(), n && n());
        }
        return e;
      }
      function a() {
        let t = s(!0);
        return !t || (t(), !1);
      }
    },
    847: function (t, e, n) {
      "use strict";
      n.d(e, {
        L: function () {
          return i;
        },
      });
      class i {
        constructor(t) {
          (this.isMounted = !1), (this.node = t);
        }
        update() {}
      }
    },
    9188: function (t, e, n) {
      "use strict";
      n.d(e, {
        s: function () {
          return A;
        },
      });
      var i = n(4572),
        r = n(6925);
      function o(t, e) {
        if (!Array.isArray(e)) return !1;
        let n = e.length;
        if (n !== t.length) return !1;
        for (let i = 0; i < n; i++) if (e[i] !== t[i]) return !1;
        return !0;
      }
      var s = n(6859),
        a = n(8595);
      function l(t, e, n) {
        let i = t.getProps();
        return (0, a.o)(i, e, void 0 !== n ? n : i.custom, t);
      }
      var u = n(3552),
        c = n(6019),
        d = n(1298),
        h = n(9155),
        f = n(804),
        p = n(9792),
        m = n(2087),
        v = n(3944),
        g = n(6219);
      function y(t, e, { delay: n = 0, transitionOverride: i, type: r } = {}) {
        var o;
        let {
          transition: s = t.getDefaultTransition(),
          transitionEnd: a,
          ...u
        } = e;
        i && (s = i);
        let y = [],
          b = r && t.animationState && t.animationState.getState()[r];
        for (let e in u) {
          let i = t.getValue(
              e,
              null !== (o = t.latestValues[e]) && void 0 !== o ? o : null
            ),
            r = u[e];
          if (
            void 0 === r ||
            (b &&
              (function ({ protectedKeys: t, needsAnimating: e }, n) {
                let i = t.hasOwnProperty(n) && !0 !== e[n];
                return (e[n] = !1), i;
              })(b, e))
          )
            continue;
          let a = { delay: n, ...(0, p.e)(s || {}, e) },
            l = !1;
          if (window.MotionHandoffAnimation) {
            let n = (0, m.s)(t);
            if (n) {
              let t = window.MotionHandoffAnimation(n, e, g.Wi);
              null !== t && ((a.startTime = t), (l = !0));
            }
          }
          i.start(
            (0, d.v)(
              e,
              i,
              r,
              t.shouldReduceMotion && c.G.has(e) ? { type: !1 } : a,
              t,
              l,
              (0, v.K)(t, e)
            )
          );
          let h = i.animation;
          h && y.push(h);
        }
        return (
          a &&
            Promise.all(y).then(() => {
              g.Wi.update(() => {
                a &&
                  (function (t, e) {
                    let {
                      transitionEnd: n = {},
                      transition: i = {},
                      ...r
                    } = l(t, e) || {};
                    for (let e in (r = { ...r, ...n })) {
                      let n = (0, h.Y)(r[e]);
                      t.hasValue(e)
                        ? t.getValue(e).set(n)
                        : t.addValue(e, (0, f.BX)(n));
                    }
                  })(t, a);
              });
            }),
          y
        );
      }
      function b(t, e, n = {}) {
        var i;
        let r = l(
            t,
            e,
            "exit" === n.type
              ? null === (i = t.presenceContext) || void 0 === i
                ? void 0
                : i.custom
              : void 0
          ),
          { transition: o = t.getDefaultTransition() || {} } = r || {};
        n.transitionOverride && (o = n.transitionOverride);
        let s = r ? () => Promise.all(y(t, r, n)) : () => Promise.resolve(),
          a =
            t.variantChildren && t.variantChildren.size
              ? (i = 0) => {
                  let {
                    delayChildren: r = 0,
                    staggerChildren: s,
                    staggerDirection: a,
                  } = o;
                  return (function (t, e, n = 0, i = 0, r = 1, o) {
                    let s = [],
                      a = (t.variantChildren.size - 1) * i,
                      l = 1 === r ? (t = 0) => t * i : (t = 0) => a - t * i;
                    return (
                      Array.from(t.variantChildren)
                        .sort(P)
                        .forEach((t, i) => {
                          t.notify("AnimationStart", e),
                            s.push(
                              b(t, e, { ...o, delay: n + l(i) }).then(() =>
                                t.notify("AnimationComplete", e)
                              )
                            );
                        }),
                      Promise.all(s)
                    );
                  })(t, e, r + i, s, a, n);
                }
              : () => Promise.resolve(),
          { when: u } = o;
        if (!u) return Promise.all([s(), a(n.delay)]);
        {
          let [t, e] = "beforeChildren" === u ? [s, a] : [a, s];
          return t().then(() => e());
        }
      }
      function P(t, e) {
        return t.sortNodePosition(e);
      }
      let w = u.V.length,
        x = [...u.e].reverse(),
        S = u.e.length;
      function T(t = !1) {
        return {
          isActive: t,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {},
        };
      }
      function C() {
        return {
          animate: T(!0),
          whileInView: T(),
          whileHover: T(),
          whileTap: T(),
          whileDrag: T(),
          whileFocus: T(),
          exit: T(),
        };
      }
      var E = n(847);
      class O extends E.L {
        constructor(t) {
          super(t),
            t.animationState ||
              (t.animationState = (function (t) {
                let e = (e) =>
                    Promise.all(
                      e.map(({ animation: e, options: n }) =>
                        (function (t, e, n = {}) {
                          let i;
                          if ((t.notify("AnimationStart", e), Array.isArray(e)))
                            i = Promise.all(e.map((e) => b(t, e, n)));
                          else if ("string" == typeof e) i = b(t, e, n);
                          else {
                            let r =
                              "function" == typeof e ? l(t, e, n.custom) : e;
                            i = Promise.all(y(t, r, n));
                          }
                          return i.then(() => {
                            t.notify("AnimationComplete", e);
                          });
                        })(t, e, n)
                      )
                    ),
                  n = C(),
                  a = !0,
                  c = (e) => (n, i) => {
                    var r;
                    let o = l(
                      t,
                      i,
                      "exit" === e
                        ? null === (r = t.presenceContext) || void 0 === r
                          ? void 0
                          : r.custom
                        : void 0
                    );
                    if (o) {
                      let { transition: t, transitionEnd: e, ...i } = o;
                      n = { ...n, ...i, ...e };
                    }
                    return n;
                  };
                function d(l) {
                  let { props: d } = t,
                    h =
                      (function t(e) {
                        if (!e) return;
                        if (!e.isControllingVariants) {
                          let n = (e.parent && t(e.parent)) || {};
                          return (
                            void 0 !== e.props.initial &&
                              (n.initial = e.props.initial),
                            n
                          );
                        }
                        let n = {};
                        for (let t = 0; t < w; t++) {
                          let i = u.V[t],
                            r = e.props[i];
                          ((0, s.$)(r) || !1 === r) && (n[i] = r);
                        }
                        return n;
                      })(t.parent) || {},
                    f = [],
                    p = new Set(),
                    m = {},
                    v = 1 / 0;
                  for (let e = 0; e < S; e++) {
                    var g;
                    let u = x[e],
                      y = n[u],
                      b = void 0 !== d[u] ? d[u] : h[u],
                      P = (0, s.$)(b),
                      w = u === l ? y.isActive : null;
                    !1 === w && (v = e);
                    let S = b === h[u] && b !== d[u] && P;
                    if (
                      (S && a && t.manuallyAnimateOnMount && (S = !1),
                      (y.protectedKeys = { ...m }),
                      (!y.isActive && null === w) ||
                        (!b && !y.prevProp) ||
                        (0, i.H)(b) ||
                        "boolean" == typeof b)
                    )
                      continue;
                    let T =
                        ((g = y.prevProp),
                        "string" == typeof b
                          ? b !== g
                          : !!Array.isArray(b) && !o(b, g)),
                      C =
                        T || (u === l && y.isActive && !S && P) || (e > v && P),
                      E = !1,
                      O = Array.isArray(b) ? b : [b],
                      j = O.reduce(c(u), {});
                    !1 === w && (j = {});
                    let { prevResolvedValues: M = {} } = y,
                      A = { ...M, ...j },
                      R = (e) => {
                        (C = !0),
                          p.has(e) && ((E = !0), p.delete(e)),
                          (y.needsAnimating[e] = !0);
                        let n = t.getValue(e);
                        n && (n.liveStyle = !1);
                      };
                    for (let t in A) {
                      let e = j[t],
                        n = M[t];
                      if (!m.hasOwnProperty(t))
                        ((0, r.C)(e) && (0, r.C)(n) ? o(e, n) : e === n)
                          ? void 0 !== e && p.has(t)
                            ? R(t)
                            : (y.protectedKeys[t] = !0)
                          : null != e
                          ? R(t)
                          : p.add(t);
                    }
                    (y.prevProp = b),
                      (y.prevResolvedValues = j),
                      y.isActive && (m = { ...m, ...j }),
                      a && t.blockInitialAnimation && (C = !1);
                    let k = !(S && T) || E;
                    C &&
                      k &&
                      f.push(
                        ...O.map((t) => ({
                          animation: t,
                          options: { type: u },
                        }))
                      );
                  }
                  if (p.size) {
                    let e = {};
                    p.forEach((n) => {
                      let i = t.getBaseTarget(n),
                        r = t.getValue(n);
                      r && (r.liveStyle = !0), (e[n] = null != i ? i : null);
                    }),
                      f.push({ animation: e });
                  }
                  let y = !!f.length;
                  return (
                    a &&
                      (!1 === d.initial || d.initial === d.animate) &&
                      !t.manuallyAnimateOnMount &&
                      (y = !1),
                    (a = !1),
                    y ? e(f) : Promise.resolve()
                  );
                }
                return {
                  animateChanges: d,
                  setActive: function (e, i) {
                    var r;
                    if (n[e].isActive === i) return Promise.resolve();
                    null === (r = t.variantChildren) ||
                      void 0 === r ||
                      r.forEach((t) => {
                        var n;
                        return null === (n = t.animationState) || void 0 === n
                          ? void 0
                          : n.setActive(e, i);
                      }),
                      (n[e].isActive = i);
                    let o = d(e);
                    for (let t in n) n[t].protectedKeys = {};
                    return o;
                  },
                  setAnimateFunction: function (n) {
                    e = n(t);
                  },
                  getState: () => n,
                  reset: () => {
                    (n = C()), (a = !0);
                  },
                };
              })(t));
        }
        updateAnimationControlsSubscription() {
          let { animate: t } = this.node.getProps();
          (0, i.H)(t) && (this.unmountControls = t.subscribe(this.node));
        }
        mount() {
          this.updateAnimationControlsSubscription();
        }
        update() {
          let { animate: t } = this.node.getProps(),
            { animate: e } = this.node.prevProps || {};
          t !== e && this.updateAnimationControlsSubscription();
        }
        unmount() {
          var t;
          this.node.animationState.reset(),
            null === (t = this.unmountControls) || void 0 === t || t.call(this);
        }
      }
      let j = 0;
      class M extends E.L {
        constructor() {
          super(...arguments), (this.id = j++);
        }
        update() {
          if (!this.node.presenceContext) return;
          let { isPresent: t, onExitComplete: e } = this.node.presenceContext,
            { isPresent: n } = this.node.prevPresenceContext || {};
          if (!this.node.animationState || t === n) return;
          let i = this.node.animationState.setActive("exit", !t);
          e && !t && i.then(() => e(this.id));
        }
        mount() {
          let { register: t } = this.node.presenceContext || {};
          t && (this.unmount = t(this.id));
        }
        unmount() {}
      }
      let A = { animation: { Feature: O }, exit: { Feature: M } };
    },
    6317: function (t, e, n) {
      "use strict";
      n.d(e, {
        featureDefinitions: function () {
          return r;
        },
      });
      let i = {
          animation: [
            "animate",
            "variants",
            "whileHover",
            "whileTap",
            "exit",
            "whileInView",
            "whileFocus",
            "whileDrag",
          ],
          exit: ["exit"],
          drag: ["drag", "dragControls"],
          focus: ["whileFocus"],
          hover: ["whileHover", "onHoverStart", "onHoverEnd"],
          tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
          pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
          inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
          layout: ["layout", "layoutId"],
        },
        r = {};
      for (let t in i) r[t] = { isEnabled: (e) => i[t].some((t) => !!e[t]) };
    },
    5859: function (t, e, n) {
      "use strict";
      n.d(e, {
        E: function () {
          return S;
        },
      });
      var i = n(3787),
        r = n(9654),
        o = n(5153),
        s = n(847),
        a = n(6219);
      function l(t, e) {
        let n = e ? "onHoverStart" : "onHoverEnd";
        return (0, i.a)(
          t.current,
          e ? "pointerenter" : "pointerleave",
          (i, r) => {
            if ("touch" === i.pointerType || (0, o.gD)()) return;
            let s = t.getProps();
            t.animationState &&
              s.whileHover &&
              t.animationState.setActive("whileHover", e);
            let l = s[n];
            l && a.Wi.postRender(() => l(i, r));
          },
          { passive: !t.getProps()[n] }
        );
      }
      class u extends s.L {
        mount() {
          this.unmount = (0, r.z)(l(this.node, !0), l(this.node, !1));
        }
        unmount() {}
      }
      var c = n(3731);
      class d extends s.L {
        constructor() {
          super(...arguments), (this.isActive = !1);
        }
        onFocus() {
          let t = !1;
          try {
            t = this.node.current.matches(":focus-visible");
          } catch (e) {
            t = !0;
          }
          t &&
            this.node.animationState &&
            (this.node.animationState.setActive("whileFocus", !0),
            (this.isActive = !0));
        }
        onBlur() {
          this.isActive &&
            this.node.animationState &&
            (this.node.animationState.setActive("whileFocus", !1),
            (this.isActive = !1));
        }
        mount() {
          this.unmount = (0, r.z)(
            (0, c.E)(this.node.current, "focus", () => this.onFocus()),
            (0, c.E)(this.node.current, "blur", () => this.onBlur())
          );
        }
        unmount() {}
      }
      var h = n(3280);
      let f = (t, e) => !!e && (t === e || f(t, e.parentElement));
      var p = n(9276);
      function m(t, e) {
        if (!e) return;
        let n = new PointerEvent("pointer" + t);
        e(n, (0, h.Q)(n));
      }
      class v extends s.L {
        constructor() {
          super(...arguments),
            (this.removeStartListeners = p.Z),
            (this.removeEndListeners = p.Z),
            (this.removeAccessibleListeners = p.Z),
            (this.startPointerPress = (t, e) => {
              if (this.isPressing) return;
              this.removeEndListeners();
              let n = this.node.getProps(),
                o = (0, i.a)(
                  window,
                  "pointerup",
                  (t, e) => {
                    if (!this.checkPressEnd()) return;
                    let {
                        onTap: n,
                        onTapCancel: i,
                        globalTapTarget: r,
                      } = this.node.getProps(),
                      o = r || f(this.node.current, t.target) ? n : i;
                    o && a.Wi.update(() => o(t, e));
                  },
                  { passive: !(n.onTap || n.onPointerUp) }
                ),
                s = (0, i.a)(
                  window,
                  "pointercancel",
                  (t, e) => this.cancelPress(t, e),
                  { passive: !(n.onTapCancel || n.onPointerCancel) }
                );
              (this.removeEndListeners = (0, r.z)(o, s)), this.startPress(t, e);
            }),
            (this.startAccessiblePress = () => {
              let t = (0, c.E)(this.node.current, "keydown", (t) => {
                  "Enter" !== t.key ||
                    this.isPressing ||
                    (this.removeEndListeners(),
                    (this.removeEndListeners = (0, c.E)(
                      this.node.current,
                      "keyup",
                      (t) => {
                        "Enter" === t.key &&
                          this.checkPressEnd() &&
                          m("up", (t, e) => {
                            let { onTap: n } = this.node.getProps();
                            n && a.Wi.postRender(() => n(t, e));
                          });
                      }
                    )),
                    m("down", (t, e) => {
                      this.startPress(t, e);
                    }));
                }),
                e = (0, c.E)(this.node.current, "blur", () => {
                  this.isPressing &&
                    m("cancel", (t, e) => this.cancelPress(t, e));
                });
              this.removeAccessibleListeners = (0, r.z)(t, e);
            });
        }
        startPress(t, e) {
          this.isPressing = !0;
          let { onTapStart: n, whileTap: i } = this.node.getProps();
          i &&
            this.node.animationState &&
            this.node.animationState.setActive("whileTap", !0),
            n && a.Wi.postRender(() => n(t, e));
        }
        checkPressEnd() {
          return (
            this.removeEndListeners(),
            (this.isPressing = !1),
            this.node.getProps().whileTap &&
              this.node.animationState &&
              this.node.animationState.setActive("whileTap", !1),
            !(0, o.gD)()
          );
        }
        cancelPress(t, e) {
          if (!this.checkPressEnd()) return;
          let { onTapCancel: n } = this.node.getProps();
          n && a.Wi.postRender(() => n(t, e));
        }
        mount() {
          let t = this.node.getProps(),
            e = (0, i.a)(
              t.globalTapTarget ? window : this.node.current,
              "pointerdown",
              this.startPointerPress,
              { passive: !(t.onTapStart || t.onPointerStart) }
            ),
            n = (0, c.E)(this.node.current, "focus", this.startAccessiblePress);
          this.removeStartListeners = (0, r.z)(e, n);
        }
        unmount() {
          this.removeStartListeners(),
            this.removeEndListeners(),
            this.removeAccessibleListeners();
        }
      }
      let g = new WeakMap(),
        y = new WeakMap(),
        b = (t) => {
          let e = g.get(t.target);
          e && e(t);
        },
        P = (t) => {
          t.forEach(b);
        },
        w = { some: 0, all: 1 };
      class x extends s.L {
        constructor() {
          super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
        }
        startObserver() {
          this.unmount();
          let { viewport: t = {} } = this.node.getProps(),
            { root: e, margin: n, amount: i = "some", once: r } = t,
            o = {
              root: e ? e.current : void 0,
              rootMargin: n,
              threshold: "number" == typeof i ? i : w[i],
            };
          return (function (t, e, n) {
            let i = (function ({ root: t, ...e }) {
              let n = t || document;
              y.has(n) || y.set(n, {});
              let i = y.get(n),
                r = JSON.stringify(e);
              return (
                i[r] || (i[r] = new IntersectionObserver(P, { root: t, ...e })),
                i[r]
              );
            })(e);
            return (
              g.set(t, n),
              i.observe(t),
              () => {
                g.delete(t), i.unobserve(t);
              }
            );
          })(this.node.current, o, (t) => {
            let { isIntersecting: e } = t;
            if (
              this.isInView === e ||
              ((this.isInView = e), r && !e && this.hasEnteredView)
            )
              return;
            e && (this.hasEnteredView = !0),
              this.node.animationState &&
                this.node.animationState.setActive("whileInView", e);
            let { onViewportEnter: n, onViewportLeave: i } =
                this.node.getProps(),
              o = e ? n : i;
            o && o(t);
          });
        }
        mount() {
          this.startObserver();
        }
        update() {
          if ("undefined" == typeof IntersectionObserver) return;
          let { props: t, prevProps: e } = this.node;
          ["amount", "margin", "root"].some(
            (function ({ viewport: t = {} }, { viewport: e = {} } = {}) {
              return (n) => t[n] !== e[n];
            })(t, e)
          ) && this.startObserver();
        }
        unmount() {}
      }
      let S = {
        inView: { Feature: x },
        tap: { Feature: v },
        focus: { Feature: d },
        hover: { Feature: u },
      };
    },
    344: function (t, e, n) {
      "use strict";
      n.d(e, {
        K: function () {
          return r;
        },
      });
      var i = n(6317);
      function r(t) {
        for (let e in t)
          i.featureDefinitions[e] = { ...i.featureDefinitions[e], ...t[e] };
      }
    },
    2020: function (t, e, n) {
      "use strict";
      n.d(e, {
        j: function () {
          return o;
        },
      });
      var i = n(7290),
        r = n(6019);
      function o(t, { layout: e, layoutId: n }) {
        return (
          r.G.has(t) ||
          t.startsWith("origin") ||
          ((e || void 0 !== n) && (!!i.P[t] || "opacity" === t))
        );
      }
    },
    3005: function (t, e, n) {
      "use strict";
      function i({ top: t, left: e, right: n, bottom: i }) {
        return { x: { min: e, max: n }, y: { min: t, max: i } };
      }
      function r({ x: t, y: e }) {
        return { top: e.min, right: t.max, bottom: e.max, left: t.min };
      }
      function o(t, e) {
        if (!e) return t;
        let n = e({ x: t.left, y: t.top }),
          i = e({ x: t.right, y: t.bottom });
        return { top: n.y, left: n.x, bottom: i.y, right: i.x };
      }
      n.d(e, {
        d7: function () {
          return o;
        },
        i8: function () {
          return i;
        },
        z2: function () {
          return r;
        },
      });
    },
    6711: function (t, e, n) {
      "use strict";
      n.d(e, {
        D2: function () {
          return h;
        },
        YY: function () {
          return u;
        },
        am: function () {
          return c;
        },
        o2: function () {
          return l;
        },
        q2: function () {
          return o;
        },
      });
      var i = n(5004),
        r = n(8107);
      function o(t, e, n) {
        return n + e * (t - n);
      }
      function s(t, e, n, i, r) {
        return void 0 !== r && (t = i + r * (t - i)), i + n * (t - i) + e;
      }
      function a(t, e = 0, n = 1, i, r) {
        (t.min = s(t.min, e, n, i, r)), (t.max = s(t.max, e, n, i, r));
      }
      function l(t, { x: e, y: n }) {
        a(t.x, e.translate, e.scale, e.originPoint),
          a(t.y, n.translate, n.scale, n.originPoint);
      }
      function u(t, e, n, i = !1) {
        let o, s;
        let a = n.length;
        if (a) {
          e.x = e.y = 1;
          for (let u = 0; u < a; u++) {
            s = (o = n[u]).projectionDelta;
            let { visualElement: a } = o.options;
            (!a || !a.props.style || "contents" !== a.props.style.display) &&
              (i &&
                o.options.layoutScroll &&
                o.scroll &&
                o !== o.root &&
                h(t, { x: -o.scroll.offset.x, y: -o.scroll.offset.y }),
              s && ((e.x *= s.x.scale), (e.y *= s.y.scale), l(t, s)),
              i && (0, r.ud)(o.latestValues) && h(t, o.latestValues));
          }
          e.x < 1.0000000000001 && e.x > 0.999999999999 && (e.x = 1),
            e.y < 1.0000000000001 && e.y > 0.999999999999 && (e.y = 1);
        }
      }
      function c(t, e) {
        (t.min = t.min + e), (t.max = t.max + e);
      }
      function d(t, e, n, r, o = 0.5) {
        let s = (0, i.t)(t.min, t.max, o);
        a(t, e, n, s, r);
      }
      function h(t, e) {
        d(t.x, e.x, e.scaleX, e.scale, e.originX),
          d(t.y, e.y, e.scaleY, e.scale, e.originY);
      }
    },
    8250: function (t, e, n) {
      "use strict";
      n.d(e, {
        dO: function () {
          return s;
        },
        wc: function () {
          return r;
        },
      });
      let i = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
        r = () => ({ x: i(), y: i() }),
        o = () => ({ min: 0, max: 0 }),
        s = () => ({ x: o(), y: o() });
    },
    7290: function (t, e, n) {
      "use strict";
      n.d(e, {
        B: function () {
          return r;
        },
        P: function () {
          return i;
        },
      });
      let i = {};
      function r(t) {
        Object.assign(i, t);
      }
    },
    8107: function (t, e, n) {
      "use strict";
      function i(t) {
        return void 0 === t || 1 === t;
      }
      function r({ scale: t, scaleX: e, scaleY: n }) {
        return !i(t) || !i(e) || !i(n);
      }
      function o(t) {
        return (
          r(t) ||
          s(t) ||
          t.z ||
          t.rotate ||
          t.rotateX ||
          t.rotateY ||
          t.skewX ||
          t.skewY
        );
      }
      function s(t) {
        var e, n;
        return ((e = t.x) && "0%" !== e) || ((n = t.y) && "0%" !== n);
      }
      n.d(e, {
        D_: function () {
          return s;
        },
        Lj: function () {
          return r;
        },
        ud: function () {
          return o;
        },
      });
    },
    7684: function (t, e, n) {
      "use strict";
      n.d(e, {
        J: function () {
          return o;
        },
        z: function () {
          return s;
        },
      });
      var i = n(3005),
        r = n(6711);
      function o(t, e) {
        return (0, i.i8)((0, i.d7)(t.getBoundingClientRect(), e));
      }
      function s(t, e, n) {
        let i = o(t, n),
          { scroll: s } = e;
        return s && ((0, r.am)(i.x, s.offset.x), (0, r.am)(i.y, s.offset.y)), i;
      }
    },
    1292: function (t, e, n) {
      "use strict";
      n.d(e, {
        x: function () {
          return G;
        },
      });
      var i,
        r = n(7437),
        o = n(2265),
        s = n(9791);
      let a = (0, o.createContext)({});
      var l = n(7797),
        u = n(9033),
        c = n(6539),
        d = n(5908),
        h = n(8172),
        f = n(7576),
        p = n(6094);
      let m = !1;
      function v() {
        window.MotionHandoffIsComplete = !0;
      }
      var g = n(6859),
        y = n(3795);
      function b(t) {
        return Array.isArray(t) ? t.join(" ") : t;
      }
      var P = n(344),
        w = n(7282),
        x = n(5050);
      let S = Symbol.for("motionComponentSymbol");
      var T = n(6317),
        C = n(2860),
        E = n(545),
        O = n(875),
        j = n(4572),
        M = n(8595),
        A = n(458),
        R = n(2404),
        k = n(5674),
        _ = n(8746);
      let D = (t) => (e, n) => {
        let i = (0, o.useContext)(a),
          r = (0, o.useContext)(l.O),
          s = () =>
            (function (
              {
                applyWillChange: t = !1,
                scrapeMotionValuesFromProps: e,
                createRenderState: n,
                onMount: i,
              },
              r,
              o,
              s,
              a
            ) {
              let l = {
                latestValues: (function (t, e, n, i, r) {
                  var o;
                  let s = {},
                    a = [],
                    l =
                      i &&
                      (null === (o = t.style) || void 0 === o
                        ? void 0
                        : o.willChange) === void 0,
                    u = r(t, {});
                  for (let t in u) s[t] = (0, R.b)(u[t]);
                  let { initial: c, animate: d } = t,
                    h = (0, y.G)(t),
                    f = (0, y.M)(t);
                  e &&
                    f &&
                    !h &&
                    !1 !== t.inherit &&
                    (void 0 === c && (c = e.initial),
                    void 0 === d && (d = e.animate));
                  let p = !!n && !1 === n.initial,
                    m = (p = p || !1 === c) ? d : c;
                  return (
                    m &&
                      "boolean" != typeof m &&
                      !(0, j.H)(m) &&
                      V(t, m, (t, e) => {
                        for (let e in t) {
                          let n = t[e];
                          if (Array.isArray(n)) {
                            let t = p ? n.length - 1 : 0;
                            n = n[t];
                          }
                          null !== n && (s[e] = n);
                        }
                        for (let t in e) s[t] = e[t];
                      }),
                    l &&
                      (d &&
                        !1 !== c &&
                        !(0, j.H)(d) &&
                        V(t, d, (t) => {
                          for (let e in t)
                            !(function (t, e) {
                              let n = (0, k.p)(e);
                              n && (0, _.y4)(t, n);
                            })(a, e);
                        }),
                      a.length && (s.willChange = a.join(","))),
                    s
                  );
                })(r, o, s, !a && t, e),
                renderState: n(),
              };
              return i && (l.mount = (t) => i(r, t, l)), l;
            })(t, e, i, r, n);
        return n ? s() : (0, A.h)(s);
      };
      function V(t, e, n) {
        let i = Array.isArray(e) ? e : [e];
        for (let e = 0; e < i.length; e++) {
          let r = (0, M.o)(t, i[e]);
          if (r) {
            let { transitionEnd: t, transition: e, ...i } = r;
            n(i, t);
          }
        }
      }
      let L = () => ({
          style: {},
          transform: {},
          transformOrigin: {},
          vars: {},
        }),
        I = () => ({ ...L(), attrs: {} });
      var B = n(2622),
        F = n(5969),
        W = n(6219);
      let N = {
          useVisualState: D({
            scrapeMotionValuesFromProps: O.U,
            createRenderState: I,
            onMount: (t, e, { renderState: n, latestValues: i }) => {
              W.Wi.read(() => {
                try {
                  n.dimensions =
                    "function" == typeof e.getBBox
                      ? e.getBBox()
                      : e.getBoundingClientRect();
                } catch (t) {
                  n.dimensions = { x: 0, y: 0, width: 0, height: 0 };
                }
              }),
                W.Wi.render(() => {
                  (0, B.i)(n, i, (0, F.a)(e.tagName), t.transformTemplate),
                    (0, E.K)(e, n);
                });
            },
          }),
        },
        U = {
          useVisualState: D({
            applyWillChange: !0,
            scrapeMotionValuesFromProps: n(1315).U,
            createRenderState: L,
          }),
        };
      var z = n(2020),
        H = n(8322),
        $ = n(4651);
      function X(t, e, n) {
        for (let i in e) (0, H.i)(e[i]) || (0, z.j)(i, n) || (t[i] = e[i]);
      }
      let Y = new Set([
        "animate",
        "exit",
        "variants",
        "initial",
        "style",
        "values",
        "variants",
        "transition",
        "transformTemplate",
        "custom",
        "inherit",
        "onBeforeLayoutMeasure",
        "onAnimationStart",
        "onAnimationComplete",
        "onUpdate",
        "onDragStart",
        "onDrag",
        "onDragEnd",
        "onMeasureDragConstraints",
        "onDirectionLock",
        "onDragTransitionEnd",
        "_dragX",
        "_dragY",
        "onHoverStart",
        "onHoverEnd",
        "onViewportEnter",
        "onViewportLeave",
        "globalTapTarget",
        "ignoreStrict",
        "viewport",
      ]);
      function K(t) {
        return (
          t.startsWith("while") ||
          (t.startsWith("drag") && "draggable" !== t) ||
          t.startsWith("layout") ||
          t.startsWith("onTap") ||
          t.startsWith("onPan") ||
          t.startsWith("onLayout") ||
          Y.has(t)
        );
      }
      let q = (t) => !K(t);
      try {
        (i = require("@emotion/is-prop-valid").default) &&
          (q = (t) => (t.startsWith("on") ? !K(t) : i(t)));
      } catch (t) {}
      function G(t, e) {
        return function (
          n,
          { forwardMotionProps: i } = { forwardMotionProps: !1 }
        ) {
          return (function (t) {
            let {
              preloadedFeatures: e,
              createVisualElement: n,
              useRender: i,
              useVisualState: C,
              Component: E,
            } = t;
            e && (0, P.K)(e);
            let O = (0, o.forwardRef)(function (t, e) {
              var P;
              let S;
              let O = {
                  ...(0, o.useContext)(s._),
                  ...t,
                  layoutId: (function (t) {
                    let { layoutId: e } = t,
                      n = (0, o.useContext)(x.p).id;
                    return n && void 0 !== e ? n + "-" + e : e;
                  })(t),
                },
                { isStatic: j } = O,
                M = (function (t) {
                  let { initial: e, animate: n } = (function (t, e) {
                    if ((0, y.G)(t)) {
                      let { initial: e, animate: n } = t;
                      return {
                        initial: !1 === e || (0, g.$)(e) ? e : void 0,
                        animate: (0, g.$)(n) ? n : void 0,
                      };
                    }
                    return !1 !== t.inherit ? e : {};
                  })(t, (0, o.useContext)(a));
                  return (0, o.useMemo)(
                    () => ({ initial: e, animate: n }),
                    [b(e), b(n)]
                  );
                })(t),
                A = C(t, j);
              if (!j && w.j) {
                (0, o.useContext)(c.u).strict;
                let t = (function (t) {
                  let { drag: e, layout: n } = T.featureDefinitions;
                  if (!e && !n) return {};
                  let i = { ...e, ...n };
                  return {
                    MeasureLayout:
                      (null == e ? void 0 : e.isEnabled(t)) ||
                      (null == n ? void 0 : n.isEnabled(t))
                        ? i.MeasureLayout
                        : void 0,
                    ProjectionNode: i.ProjectionNode,
                  };
                })(O);
                (S = t.MeasureLayout),
                  (M.visualElement = (function (t, e, n, i, r) {
                    var g;
                    let { visualElement: y } = (0, o.useContext)(a),
                      b = (0, o.useContext)(c.u),
                      P = (0, o.useContext)(l.O),
                      w = (0, o.useContext)(s._).reducedMotion,
                      x = (0, o.useRef)();
                    (i = i || b.renderer),
                      !x.current &&
                        i &&
                        (x.current = i(t, {
                          visualState: e,
                          parent: y,
                          props: n,
                          presenceContext: P,
                          blockInitialAnimation: !!P && !1 === P.initial,
                          reducedMotionConfig: w,
                        }));
                    let S = x.current,
                      T = (0, o.useContext)(p.g);
                    S &&
                      !S.projection &&
                      r &&
                      ("html" === S.type || "svg" === S.type) &&
                      (function (t, e, n, i) {
                        let {
                          layoutId: r,
                          layout: o,
                          drag: s,
                          dragConstraints: a,
                          layoutScroll: l,
                          layoutRoot: u,
                        } = e;
                        (t.projection = new n(
                          t.latestValues,
                          e["data-framer-portal-id"]
                            ? void 0
                            : (function t(e) {
                                if (e)
                                  return !1 !== e.options.allowProjection
                                    ? e.projection
                                    : t(e.parent);
                              })(t.parent)
                        )),
                          t.projection.setOptions({
                            layoutId: r,
                            layout: o,
                            alwaysMeasureLayout: !!s || (a && (0, f.I)(a)),
                            visualElement: t,
                            animationType: "string" == typeof o ? o : "both",
                            initialPromotionConfig: i,
                            layoutScroll: l,
                            layoutRoot: u,
                          });
                      })(x.current, n, r, T),
                      (0, o.useInsertionEffect)(() => {
                        S && S.update(n, P);
                      });
                    let C = n[d.M],
                      E = (0, o.useRef)(
                        !!C &&
                          !window.MotionHandoffIsComplete &&
                          (null === (g = window.MotionHasOptimisedAnimation) ||
                          void 0 === g
                            ? void 0
                            : g.call(window, C))
                      );
                    return (
                      (0, u.L)(() => {
                        S &&
                          (S.updateFeatures(),
                          h.g.render(S.render),
                          E.current &&
                            S.animationState &&
                            S.animationState.animateChanges());
                      }),
                      (0, o.useEffect)(() => {
                        S &&
                          (!E.current &&
                            S.animationState &&
                            S.animationState.animateChanges(),
                          (E.current = !1),
                          m || ((m = !0), queueMicrotask(v)));
                      }),
                      S
                    );
                  })(E, A, O, n, t.ProjectionNode));
              }
              return (0, r.jsxs)(a.Provider, {
                value: M,
                children: [
                  S && M.visualElement
                    ? (0, r.jsx)(S, { visualElement: M.visualElement, ...O })
                    : null,
                  i(
                    E,
                    t,
                    ((P = M.visualElement),
                    (0, o.useCallback)(
                      (t) => {
                        t && A.mount && A.mount(t),
                          P && (t ? P.mount(t) : P.unmount()),
                          e &&
                            ("function" == typeof e
                              ? e(t)
                              : (0, f.I)(e) && (e.current = t));
                      },
                      [P]
                    )),
                    A,
                    j,
                    M.visualElement
                  ),
                ],
              });
            });
            return (O[S] = E), O;
          })({
            ...((0, C.q)(n) ? N : U),
            preloadedFeatures: t,
            useRender: (function (t = !1) {
              return (e, n, i, { latestValues: r }, s) => {
                let a = (
                    (0, C.q)(e)
                      ? function (t, e, n, i) {
                          let r = (0, o.useMemo)(() => {
                            let n = I();
                            return (
                              (0, B.i)(n, e, (0, F.a)(i), t.transformTemplate),
                              { ...n.attrs, style: { ...n.style } }
                            );
                          }, [e]);
                          if (t.style) {
                            let e = {};
                            X(e, t.style, t), (r.style = { ...e, ...r.style });
                          }
                          return r;
                        }
                      : function (t, e) {
                          let n = {},
                            i = (function (t, e) {
                              let n = t.style || {},
                                i = {};
                              return (
                                X(i, n, t),
                                Object.assign(
                                  i,
                                  (function ({ transformTemplate: t }, e) {
                                    return (0, o.useMemo)(() => {
                                      let n = L();
                                      return (
                                        (0, $.r)(n, e, t),
                                        Object.assign({}, n.vars, n.style)
                                      );
                                    }, [e]);
                                  })(t, e)
                                ),
                                i
                              );
                            })(t, e);
                          return (
                            t.drag &&
                              !1 !== t.dragListener &&
                              ((n.draggable = !1),
                              (i.userSelect =
                                i.WebkitUserSelect =
                                i.WebkitTouchCallout =
                                  "none"),
                              (i.touchAction =
                                !0 === t.drag
                                  ? "none"
                                  : `pan-${"x" === t.drag ? "y" : "x"}`)),
                            void 0 === t.tabIndex &&
                              (t.onTap || t.onTapStart || t.whileTap) &&
                              (n.tabIndex = 0),
                            (n.style = i),
                            n
                          );
                        }
                  )(n, r, s, e),
                  l = (function (t, e, n) {
                    let i = {};
                    for (let r in t)
                      ("values" !== r || "object" != typeof t.values) &&
                        (q(r) ||
                          (!0 === n && K(r)) ||
                          (!e && !K(r)) ||
                          (t.draggable && r.startsWith("onDrag"))) &&
                        (i[r] = t[r]);
                    return i;
                  })(n, "string" == typeof e, t),
                  u = e !== o.Fragment ? { ...l, ...a, ref: i } : {},
                  { children: c } = n,
                  d = (0, o.useMemo)(() => ((0, H.i)(c) ? c.get() : c), [c]);
                return (0, o.createElement)(e, { ...u, children: d });
              };
            })(i),
            createVisualElement: e,
            Component: n,
          });
        };
      }
    },
    6863: function (t, e, n) {
      "use strict";
      function i(t) {
        if ("undefined" == typeof Proxy) return t;
        let e = new Map();
        return new Proxy((...e) => t(...e), {
          get: (n, i) =>
            "create" === i ? t : (e.has(i) || e.set(i, t(i)), e.get(i)),
        });
      }
      n.d(e, {
        c: function () {
          return i;
        },
      });
    },
    8179: function (t, e, n) {
      "use strict";
      n.d(e, {
        E: function () {
          return eb;
        },
      });
      var i = n(6863),
        r = n(9188),
        o = n(847),
        s = n(9276),
        a = n(9047),
        l = n(3280),
        u = n(557),
        c = n(3787),
        d = n(9654);
      let h = (t, e) => Math.abs(t - e);
      var f = n(3414),
        p = n(6219);
      class m {
        constructor(
          t,
          e,
          {
            transformPagePoint: n,
            contextWindow: i,
            dragSnapToOrigin: r = !1,
          } = {}
        ) {
          if (
            ((this.startEvent = null),
            (this.lastMoveEvent = null),
            (this.lastMoveEventInfo = null),
            (this.handlers = {}),
            (this.contextWindow = window),
            (this.updatePoint = () => {
              var t, e;
              if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
              let n = y(this.lastMoveEventInfo, this.history),
                i = null !== this.startEvent,
                r =
                  ((t = n.offset),
                  (e = { x: 0, y: 0 }),
                  Math.sqrt(h(t.x, e.x) ** 2 + h(t.y, e.y) ** 2) >= 3);
              if (!i && !r) return;
              let { point: o } = n,
                { timestamp: s } = p.frameData;
              this.history.push({ ...o, timestamp: s });
              let { onStart: a, onMove: l } = this.handlers;
              i ||
                (a && a(this.lastMoveEvent, n),
                (this.startEvent = this.lastMoveEvent)),
                l && l(this.lastMoveEvent, n);
            }),
            (this.handlePointerMove = (t, e) => {
              (this.lastMoveEvent = t),
                (this.lastMoveEventInfo = v(e, this.transformPagePoint)),
                p.Wi.update(this.updatePoint, !0);
            }),
            (this.handlePointerUp = (t, e) => {
              this.end();
              let {
                onEnd: n,
                onSessionEnd: i,
                resumeAnimation: r,
              } = this.handlers;
              if (
                (this.dragSnapToOrigin && r && r(),
                !(this.lastMoveEvent && this.lastMoveEventInfo))
              )
                return;
              let o = y(
                "pointercancel" === t.type
                  ? this.lastMoveEventInfo
                  : v(e, this.transformPagePoint),
                this.history
              );
              this.startEvent && n && n(t, o), i && i(t, o);
            }),
            !(0, f.D)(t))
          )
            return;
          (this.dragSnapToOrigin = r),
            (this.handlers = e),
            (this.transformPagePoint = n),
            (this.contextWindow = i || window);
          let o = v((0, l.Q)(t), this.transformPagePoint),
            { point: s } = o,
            { timestamp: a } = p.frameData;
          this.history = [{ ...s, timestamp: a }];
          let { onSessionStart: u } = e;
          u && u(t, y(o, this.history)),
            (this.removeListeners = (0, d.z)(
              (0, c.a)(
                this.contextWindow,
                "pointermove",
                this.handlePointerMove
              ),
              (0, c.a)(this.contextWindow, "pointerup", this.handlePointerUp),
              (0, c.a)(
                this.contextWindow,
                "pointercancel",
                this.handlePointerUp
              )
            ));
        }
        updateHandlers(t) {
          this.handlers = t;
        }
        end() {
          this.removeListeners && this.removeListeners(),
            (0, p.Pn)(this.updatePoint);
        }
      }
      function v(t, e) {
        return e ? { point: e(t.point) } : t;
      }
      function g(t, e) {
        return { x: t.x - e.x, y: t.y - e.y };
      }
      function y({ point: t }, e) {
        return {
          point: t,
          delta: g(t, b(e)),
          offset: g(t, e[0]),
          velocity: (function (t, e) {
            if (t.length < 2) return { x: 0, y: 0 };
            let n = t.length - 1,
              i = null,
              r = b(t);
            for (
              ;
              n >= 0 &&
              ((i = t[n]), !(r.timestamp - i.timestamp > (0, u.w)(0.1)));

            )
              n--;
            if (!i) return { x: 0, y: 0 };
            let o = (0, u.X)(r.timestamp - i.timestamp);
            if (0 === o) return { x: 0, y: 0 };
            let s = { x: (r.x - i.x) / o, y: (r.y - i.y) / o };
            return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s;
          })(e, 0),
        };
      }
      function b(t) {
        return t[t.length - 1];
      }
      var P = n(5153),
        w = n(7576),
        x = n(3217),
        S = n(5004);
      function T(t) {
        return t.max - t.min;
      }
      function C(t, e, n, i = 0.5) {
        (t.origin = i),
          (t.originPoint = (0, S.t)(e.min, e.max, t.origin)),
          (t.scale = T(n) / T(e)),
          (t.translate = (0, S.t)(n.min, n.max, t.origin) - t.originPoint),
          ((t.scale >= 0.9999 && t.scale <= 1.0001) || isNaN(t.scale)) &&
            (t.scale = 1),
          ((t.translate >= -0.01 && t.translate <= 0.01) ||
            isNaN(t.translate)) &&
            (t.translate = 0);
      }
      function E(t, e, n, i) {
        C(t.x, e.x, n.x, i ? i.originX : void 0),
          C(t.y, e.y, n.y, i ? i.originY : void 0);
      }
      function O(t, e, n) {
        (t.min = n.min + e.min), (t.max = t.min + T(e));
      }
      function j(t, e, n) {
        (t.min = e.min - n.min), (t.max = t.min + T(e));
      }
      function M(t, e, n) {
        j(t.x, e.x, n.x), j(t.y, e.y, n.y);
      }
      var A = n(1506);
      function R(t, e, n) {
        return {
          min: void 0 !== e ? t.min + e : void 0,
          max: void 0 !== n ? t.max + n - (t.max - t.min) : void 0,
        };
      }
      function k(t, e) {
        let n = e.min - t.min,
          i = e.max - t.max;
        return (
          e.max - e.min < t.max - t.min && ([n, i] = [i, n]), { min: n, max: i }
        );
      }
      function _(t, e, n) {
        return { min: D(t, e), max: D(t, n) };
      }
      function D(t, e) {
        return "number" == typeof t ? t : t[e] || 0;
      }
      var V = n(8250);
      function L(t) {
        return [t("x"), t("y")];
      }
      var I = n(7684),
        B = n(3005),
        F = n(3731),
        W = n(5480),
        N = n(1298);
      let U = ({ current: t }) => (t ? t.ownerDocument.defaultView : null);
      var z = n(3944);
      let H = new WeakMap();
      class $ {
        constructor(t) {
          (this.openGlobalLock = null),
            (this.isDragging = !1),
            (this.currentDirection = null),
            (this.originPoint = { x: 0, y: 0 }),
            (this.constraints = !1),
            (this.hasMutatedConstraints = !1),
            (this.elastic = (0, V.dO)()),
            (this.visualElement = t);
        }
        start(t, { snapToCursor: e = !1 } = {}) {
          let { presenceContext: n } = this.visualElement;
          if (n && !1 === n.isPresent) return;
          let { dragSnapToOrigin: i } = this.getProps();
          this.panSession = new m(
            t,
            {
              onSessionStart: (t) => {
                let { dragSnapToOrigin: n } = this.getProps();
                n ? this.pauseAnimation() : this.stopAnimation(),
                  e && this.snapToCursor((0, l.Q)(t, "page").point);
              },
              onStart: (t, e) => {
                var n;
                let {
                  drag: i,
                  dragPropagation: r,
                  onDragStart: o,
                } = this.getProps();
                if (
                  i &&
                  !r &&
                  (this.openGlobalLock && this.openGlobalLock(),
                  (this.openGlobalLock = (0, P.fJ)(i)),
                  !this.openGlobalLock)
                )
                  return;
                (this.isDragging = !0),
                  (this.currentDirection = null),
                  this.resolveConstraints(),
                  this.visualElement.projection &&
                    ((this.visualElement.projection.isAnimationBlocked = !0),
                    (this.visualElement.projection.target = void 0)),
                  L((t) => {
                    let e = this.getAxisMotionValue(t).get() || 0;
                    if (W.aQ.test(e)) {
                      let { projection: n } = this.visualElement;
                      if (n && n.layout) {
                        let i = n.layout.layoutBox[t];
                        if (i) {
                          let t = T(i);
                          e = (parseFloat(e) / 100) * t;
                        }
                      }
                    }
                    this.originPoint[t] = e;
                  }),
                  o && p.Wi.postRender(() => o(t, e)),
                  null === (n = this.removeWillChange) ||
                    void 0 === n ||
                    n.call(this),
                  (this.removeWillChange = (0, z.K)(
                    this.visualElement,
                    "transform"
                  ));
                let { animationState: s } = this.visualElement;
                s && s.setActive("whileDrag", !0);
              },
              onMove: (t, e) => {
                let {
                  dragPropagation: n,
                  dragDirectionLock: i,
                  onDirectionLock: r,
                  onDrag: o,
                } = this.getProps();
                if (!n && !this.openGlobalLock) return;
                let { offset: s } = e;
                if (i && null === this.currentDirection) {
                  (this.currentDirection = (function (t, e = 10) {
                    let n = null;
                    return (
                      Math.abs(t.y) > e
                        ? (n = "y")
                        : Math.abs(t.x) > e && (n = "x"),
                      n
                    );
                  })(s)),
                    null !== this.currentDirection &&
                      r &&
                      r(this.currentDirection);
                  return;
                }
                this.updateAxis("x", e.point, s),
                  this.updateAxis("y", e.point, s),
                  this.visualElement.render(),
                  o && o(t, e);
              },
              onSessionEnd: (t, e) => this.stop(t, e),
              resumeAnimation: () =>
                L((t) => {
                  var e;
                  return (
                    "paused" === this.getAnimationState(t) &&
                    (null === (e = this.getAxisMotionValue(t).animation) ||
                    void 0 === e
                      ? void 0
                      : e.play())
                  );
                }),
            },
            {
              transformPagePoint: this.visualElement.getTransformPagePoint(),
              dragSnapToOrigin: i,
              contextWindow: U(this.visualElement),
            }
          );
        }
        stop(t, e) {
          var n;
          null === (n = this.removeWillChange) || void 0 === n || n.call(this);
          let i = this.isDragging;
          if ((this.cancel(), !i)) return;
          let { velocity: r } = e;
          this.startAnimation(r);
          let { onDragEnd: o } = this.getProps();
          o && p.Wi.postRender(() => o(t, e));
        }
        cancel() {
          this.isDragging = !1;
          let { projection: t, animationState: e } = this.visualElement;
          t && (t.isAnimationBlocked = !1),
            this.panSession && this.panSession.end(),
            (this.panSession = void 0);
          let { dragPropagation: n } = this.getProps();
          !n &&
            this.openGlobalLock &&
            (this.openGlobalLock(), (this.openGlobalLock = null)),
            e && e.setActive("whileDrag", !1);
        }
        updateAxis(t, e, n) {
          let { drag: i } = this.getProps();
          if (!n || !X(t, i, this.currentDirection)) return;
          let r = this.getAxisMotionValue(t),
            o = this.originPoint[t] + n[t];
          this.constraints &&
            this.constraints[t] &&
            (o = (function (t, { min: e, max: n }, i) {
              return (
                void 0 !== e && t < e
                  ? (t = i ? (0, S.t)(e, t, i.min) : Math.max(t, e))
                  : void 0 !== n &&
                    t > n &&
                    (t = i ? (0, S.t)(n, t, i.max) : Math.min(t, n)),
                t
              );
            })(o, this.constraints[t], this.elastic[t])),
            r.set(o);
        }
        resolveConstraints() {
          var t;
          let { dragConstraints: e, dragElastic: n } = this.getProps(),
            i =
              this.visualElement.projection &&
              !this.visualElement.projection.layout
                ? this.visualElement.projection.measure(!1)
                : null === (t = this.visualElement.projection) || void 0 === t
                ? void 0
                : t.layout,
            r = this.constraints;
          e && (0, w.I)(e)
            ? this.constraints ||
              (this.constraints = this.resolveRefConstraints())
            : e && i
            ? (this.constraints = (function (
                t,
                { top: e, left: n, bottom: i, right: r }
              ) {
                return { x: R(t.x, n, r), y: R(t.y, e, i) };
              })(i.layoutBox, e))
            : (this.constraints = !1),
            (this.elastic = (function (t = 0.35) {
              return (
                !1 === t ? (t = 0) : !0 === t && (t = 0.35),
                { x: _(t, "left", "right"), y: _(t, "top", "bottom") }
              );
            })(n)),
            r !== this.constraints &&
              i &&
              this.constraints &&
              !this.hasMutatedConstraints &&
              L((t) => {
                !1 !== this.constraints &&
                  this.getAxisMotionValue(t) &&
                  (this.constraints[t] = (function (t, e) {
                    let n = {};
                    return (
                      void 0 !== e.min && (n.min = e.min - t.min),
                      void 0 !== e.max && (n.max = e.max - t.min),
                      n
                    );
                  })(i.layoutBox[t], this.constraints[t]));
              });
        }
        resolveRefConstraints() {
          var t;
          let { dragConstraints: e, onMeasureDragConstraints: n } =
            this.getProps();
          if (!e || !(0, w.I)(e)) return !1;
          let i = e.current;
          (0, a.k)(
            null !== i,
            "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop."
          );
          let { projection: r } = this.visualElement;
          if (!r || !r.layout) return !1;
          let o = (0, I.z)(
              i,
              r.root,
              this.visualElement.getTransformPagePoint()
            ),
            s = { x: k((t = r.layout.layoutBox).x, o.x), y: k(t.y, o.y) };
          if (n) {
            let t = n((0, B.z2)(s));
            (this.hasMutatedConstraints = !!t), t && (s = (0, B.i8)(t));
          }
          return s;
        }
        startAnimation(t) {
          let {
              drag: e,
              dragMomentum: n,
              dragElastic: i,
              dragTransition: r,
              dragSnapToOrigin: o,
              onDragTransitionEnd: s,
            } = this.getProps(),
            a = this.constraints || {};
          return Promise.all(
            L((s) => {
              if (!X(s, e, this.currentDirection)) return;
              let l = (a && a[s]) || {};
              o && (l = { min: 0, max: 0 });
              let u = {
                type: "inertia",
                velocity: n ? t[s] : 0,
                bounceStiffness: i ? 200 : 1e6,
                bounceDamping: i ? 40 : 1e7,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...r,
                ...l,
              };
              return this.startAxisValueAnimation(s, u);
            })
          ).then(s);
        }
        startAxisValueAnimation(t, e) {
          let n = this.getAxisMotionValue(t);
          return n.start(
            (0, N.v)(
              t,
              n,
              0,
              e,
              this.visualElement,
              !1,
              (0, z.K)(this.visualElement, t)
            )
          );
        }
        stopAnimation() {
          L((t) => this.getAxisMotionValue(t).stop());
        }
        pauseAnimation() {
          L((t) => {
            var e;
            return null === (e = this.getAxisMotionValue(t).animation) ||
              void 0 === e
              ? void 0
              : e.pause();
          });
        }
        getAnimationState(t) {
          var e;
          return null === (e = this.getAxisMotionValue(t).animation) ||
            void 0 === e
            ? void 0
            : e.state;
        }
        getAxisMotionValue(t) {
          let e = `_drag${t.toUpperCase()}`,
            n = this.visualElement.getProps();
          return (
            n[e] ||
            this.visualElement.getValue(
              t,
              (n.initial ? n.initial[t] : void 0) || 0
            )
          );
        }
        snapToCursor(t) {
          L((e) => {
            let { drag: n } = this.getProps();
            if (!X(e, n, this.currentDirection)) return;
            let { projection: i } = this.visualElement,
              r = this.getAxisMotionValue(e);
            if (i && i.layout) {
              let { min: n, max: o } = i.layout.layoutBox[e];
              r.set(t[e] - (0, S.t)(n, o, 0.5));
            }
          });
        }
        scalePositionWithinConstraints() {
          if (!this.visualElement.current) return;
          let { drag: t, dragConstraints: e } = this.getProps(),
            { projection: n } = this.visualElement;
          if (!(0, w.I)(e) || !n || !this.constraints) return;
          this.stopAnimation();
          let i = { x: 0, y: 0 };
          L((t) => {
            let e = this.getAxisMotionValue(t);
            if (e && !1 !== this.constraints) {
              let n = e.get();
              i[t] = (function (t, e) {
                let n = 0.5,
                  i = T(t),
                  r = T(e);
                return (
                  r > i
                    ? (n = (0, x.Y)(e.min, e.max - i, t.min))
                    : i > r && (n = (0, x.Y)(t.min, t.max - r, e.min)),
                  (0, A.u)(0, 1, n)
                );
              })({ min: n, max: n }, this.constraints[t]);
            }
          });
          let { transformTemplate: r } = this.visualElement.getProps();
          (this.visualElement.current.style.transform = r ? r({}, "") : "none"),
            n.root && n.root.updateScroll(),
            n.updateLayout(),
            this.resolveConstraints(),
            L((e) => {
              if (!X(e, t, null)) return;
              let n = this.getAxisMotionValue(e),
                { min: r, max: o } = this.constraints[e];
              n.set((0, S.t)(r, o, i[e]));
            });
        }
        addListeners() {
          if (!this.visualElement.current) return;
          H.set(this.visualElement, this);
          let t = this.visualElement.current,
            e = (0, c.a)(t, "pointerdown", (t) => {
              let { drag: e, dragListener: n = !0 } = this.getProps();
              e && n && this.start(t);
            }),
            n = () => {
              let { dragConstraints: t } = this.getProps();
              (0, w.I)(t) &&
                t.current &&
                (this.constraints = this.resolveRefConstraints());
            },
            { projection: i } = this.visualElement,
            r = i.addEventListener("measure", n);
          i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()),
            p.Wi.read(n);
          let o = (0, F.E)(window, "resize", () =>
              this.scalePositionWithinConstraints()
            ),
            s = i.addEventListener(
              "didUpdate",
              ({ delta: t, hasLayoutChanged: e }) => {
                this.isDragging &&
                  e &&
                  (L((e) => {
                    let n = this.getAxisMotionValue(e);
                    n &&
                      ((this.originPoint[e] += t[e].translate),
                      n.set(n.get() + t[e].translate));
                  }),
                  this.visualElement.render());
              }
            );
          return () => {
            o(), e(), r(), s && s();
          };
        }
        getProps() {
          let t = this.visualElement.getProps(),
            {
              drag: e = !1,
              dragDirectionLock: n = !1,
              dragPropagation: i = !1,
              dragConstraints: r = !1,
              dragElastic: o = 0.35,
              dragMomentum: s = !0,
            } = t;
          return {
            ...t,
            drag: e,
            dragDirectionLock: n,
            dragPropagation: i,
            dragConstraints: r,
            dragElastic: o,
            dragMomentum: s,
          };
        }
      }
      function X(t, e, n) {
        return (!0 === e || e === t) && (null === n || n === t);
      }
      class Y extends o.L {
        constructor(t) {
          super(t),
            (this.removeGroupControls = s.Z),
            (this.removeListeners = s.Z),
            (this.controls = new $(t));
        }
        mount() {
          let { dragControls: t } = this.node.getProps();
          t && (this.removeGroupControls = t.subscribe(this.controls)),
            (this.removeListeners = this.controls.addListeners() || s.Z);
        }
        unmount() {
          this.removeGroupControls(), this.removeListeners();
        }
      }
      let K = (t) => (e, n) => {
        t && p.Wi.postRender(() => t(e, n));
      };
      class q extends o.L {
        constructor() {
          super(...arguments), (this.removePointerDownListener = s.Z);
        }
        onPointerDown(t) {
          this.session = new m(t, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: U(this.node),
          });
        }
        createPanHandlers() {
          let {
            onPanSessionStart: t,
            onPanStart: e,
            onPan: n,
            onPanEnd: i,
          } = this.node.getProps();
          return {
            onSessionStart: K(t),
            onStart: K(e),
            onMove: n,
            onEnd: (t, e) => {
              delete this.session, i && p.Wi.postRender(() => i(t, e));
            },
          };
        }
        mount() {
          this.removePointerDownListener = (0, c.a)(
            this.node.current,
            "pointerdown",
            (t) => this.onPointerDown(t)
          );
        }
        update() {
          this.session && this.session.updateHandlers(this.createPanHandlers());
        }
        unmount() {
          this.removePointerDownListener(), this.session && this.session.end();
        }
      }
      var G = n(7437),
        Z = n(2265),
        Q = n(7797),
        J = n(5050),
        tt = n(6094);
      let te = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
      function tn(t, e) {
        return e.max === e.min ? 0 : (t / (e.max - e.min)) * 100;
      }
      let ti = {
        correct: (t, e) => {
          if (!e.target) return t;
          if ("string" == typeof t) {
            if (!W.px.test(t)) return t;
            t = parseFloat(t);
          }
          let n = tn(t, e.target.x),
            i = tn(t, e.target.y);
          return `${n}% ${i}%`;
        },
      };
      var tr = n(3646),
        to = n(7290),
        ts = n(8172);
      class ta extends Z.Component {
        componentDidMount() {
          let {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: n,
              layoutId: i,
            } = this.props,
            { projection: r } = t;
          (0, to.B)(tu),
            r &&
              (e.group && e.group.add(r),
              n && n.register && i && n.register(r),
              r.root.didUpdate(),
              r.addEventListener("animationComplete", () => {
                this.safeToRemove();
              }),
              r.setOptions({
                ...r.options,
                onExitComplete: () => this.safeToRemove(),
              })),
            (te.hasEverUpdated = !0);
        }
        getSnapshotBeforeUpdate(t) {
          let {
              layoutDependency: e,
              visualElement: n,
              drag: i,
              isPresent: r,
            } = this.props,
            o = n.projection;
          return (
            o &&
              ((o.isPresent = r),
              i || t.layoutDependency !== e || void 0 === e
                ? o.willUpdate()
                : this.safeToRemove(),
              t.isPresent === r ||
                (r
                  ? o.promote()
                  : o.relegate() ||
                    p.Wi.postRender(() => {
                      let t = o.getStack();
                      (t && t.members.length) || this.safeToRemove();
                    }))),
            null
          );
        }
        componentDidUpdate() {
          let { projection: t } = this.props.visualElement;
          t &&
            (t.root.didUpdate(),
            ts.g.postRender(() => {
              !t.currentAnimation && t.isLead() && this.safeToRemove();
            }));
        }
        componentWillUnmount() {
          let {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: n,
            } = this.props,
            { projection: i } = t;
          i &&
            (i.scheduleCheckAfterUnmount(),
            e && e.group && e.group.remove(i),
            n && n.deregister && n.deregister(i));
        }
        safeToRemove() {
          let { safeToRemove: t } = this.props;
          t && t();
        }
        render() {
          return null;
        }
      }
      function tl(t) {
        let [e, n] = (function () {
            let t = (0, Z.useContext)(Q.O);
            if (null === t) return [!0, null];
            let { isPresent: e, onExitComplete: n, register: i } = t,
              r = (0, Z.useId)();
            (0, Z.useEffect)(() => i(r), []);
            let o = (0, Z.useCallback)(() => n && n(r), [r, n]);
            return !e && n ? [!1, o] : [!0];
          })(),
          i = (0, Z.useContext)(J.p);
        return (0, G.jsx)(ta, {
          ...t,
          layoutGroup: i,
          switchLayoutGroup: (0, Z.useContext)(tt.g),
          isPresent: e,
          safeToRemove: n,
        });
      }
      let tu = {
        borderRadius: {
          ...ti,
          applyTo: [
            "borderTopLeftRadius",
            "borderTopRightRadius",
            "borderBottomLeftRadius",
            "borderBottomRightRadius",
          ],
        },
        borderTopLeftRadius: ti,
        borderTopRightRadius: ti,
        borderBottomLeftRadius: ti,
        borderBottomRightRadius: ti,
        boxShadow: {
          correct: (t, { treeScale: e, projectionDelta: n }) => {
            let i = tr.P.parse(t);
            if (i.length > 5) return t;
            let r = tr.P.createTransformer(t),
              o = "number" != typeof i[0] ? 1 : 0,
              s = n.x.scale * e.x,
              a = n.y.scale * e.y;
            (i[0 + o] /= s), (i[1 + o] /= a);
            let l = (0, S.t)(s, a, 0.5);
            return (
              "number" == typeof i[2 + o] && (i[2 + o] /= l),
              "number" == typeof i[3 + o] && (i[3 + o] /= l),
              r(i)
            );
          },
        },
      };
      var tc = n(2428),
        td = n(8536);
      let th = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        tf = th.length,
        tp = (t) => ("string" == typeof t ? parseFloat(t) : t),
        tm = (t) => "number" == typeof t || W.px.test(t);
      function tv(t, e) {
        return void 0 !== t[e] ? t[e] : t.borderRadius;
      }
      let tg = tb(0, 0.5, td.Bn),
        ty = tb(0.5, 0.95, s.Z);
      function tb(t, e, n) {
        return (i) => (i < t ? 0 : i > e ? 1 : n((0, x.Y)(t, e, i)));
      }
      function tP(t, e) {
        (t.min = e.min), (t.max = e.max);
      }
      function tw(t, e) {
        tP(t.x, e.x), tP(t.y, e.y);
      }
      function tx(t, e) {
        (t.translate = e.translate),
          (t.scale = e.scale),
          (t.originPoint = e.originPoint),
          (t.origin = e.origin);
      }
      var tS = n(6711);
      function tT(t, e, n, i, r) {
        return (
          (t -= e),
          (t = (0, tS.q2)(t, 1 / n, i)),
          void 0 !== r && (t = (0, tS.q2)(t, 1 / r, i)),
          t
        );
      }
      function tC(t, e, [n, i, r], o, s) {
        !(function (t, e = 0, n = 1, i = 0.5, r, o = t, s = t) {
          if (
            (W.aQ.test(e) &&
              ((e = parseFloat(e)),
              (e = (0, S.t)(s.min, s.max, e / 100) - s.min)),
            "number" != typeof e)
          )
            return;
          let a = (0, S.t)(o.min, o.max, i);
          t === o && (a -= e),
            (t.min = tT(t.min, e, n, a, r)),
            (t.max = tT(t.max, e, n, a, r));
        })(t, e[n], e[i], e[r], e.scale, o, s);
      }
      let tE = ["x", "scaleX", "originX"],
        tO = ["y", "scaleY", "originY"];
      function tj(t, e, n, i) {
        tC(t.x, e, tE, n ? n.x : void 0, i ? i.x : void 0),
          tC(t.y, e, tO, n ? n.y : void 0, i ? i.y : void 0);
      }
      var tM = n(9792);
      function tA(t) {
        return 0 === t.translate && 1 === t.scale;
      }
      function tR(t) {
        return tA(t.x) && tA(t.y);
      }
      function tk(t, e) {
        return t.min === e.min && t.max === e.max;
      }
      function t_(t, e) {
        return (
          Math.round(t.min) === Math.round(e.min) &&
          Math.round(t.max) === Math.round(e.max)
        );
      }
      function tD(t, e) {
        return t_(t.x, e.x) && t_(t.y, e.y);
      }
      function tV(t) {
        return T(t.x) / T(t.y);
      }
      function tL(t, e) {
        return (
          t.translate === e.translate &&
          t.scale === e.scale &&
          t.originPoint === e.originPoint
        );
      }
      var tI = n(8746);
      class tB {
        constructor() {
          this.members = [];
        }
        add(t) {
          (0, tI.y4)(this.members, t), t.scheduleRender();
        }
        remove(t) {
          if (
            ((0, tI.cl)(this.members, t),
            t === this.prevLead && (this.prevLead = void 0),
            t === this.lead)
          ) {
            let t = this.members[this.members.length - 1];
            t && this.promote(t);
          }
        }
        relegate(t) {
          let e;
          let n = this.members.findIndex((e) => t === e);
          if (0 === n) return !1;
          for (let t = n; t >= 0; t--) {
            let n = this.members[t];
            if (!1 !== n.isPresent) {
              e = n;
              break;
            }
          }
          return !!e && (this.promote(e), !0);
        }
        promote(t, e) {
          let n = this.lead;
          if (t !== n && ((this.prevLead = n), (this.lead = t), t.show(), n)) {
            n.instance && n.scheduleRender(),
              t.scheduleRender(),
              (t.resumeFrom = n),
              e && (t.resumeFrom.preserveOpacity = !0),
              n.snapshot &&
                ((t.snapshot = n.snapshot),
                (t.snapshot.latestValues =
                  n.animationValues || n.latestValues)),
              t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
            let { crossfade: i } = t.options;
            !1 === i && n.hide();
          }
        }
        exitAnimationComplete() {
          this.members.forEach((t) => {
            let { options: e, resumingFrom: n } = t;
            e.onExitComplete && e.onExitComplete(),
              n && n.options.onExitComplete && n.options.onExitComplete();
          });
        }
        scheduleRender() {
          this.members.forEach((t) => {
            t.instance && t.scheduleRender(!1);
          });
        }
        removeLeadSnapshot() {
          this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
        }
      }
      var tF = n(8107);
      let tW = (t, e) => t.depth - e.depth;
      class tN {
        constructor() {
          (this.children = []), (this.isDirty = !1);
        }
        add(t) {
          (0, tI.y4)(this.children, t), (this.isDirty = !0);
        }
        remove(t) {
          (0, tI.cl)(this.children, t), (this.isDirty = !0);
        }
        forEach(t) {
          this.isDirty && this.children.sort(tW),
            (this.isDirty = !1),
            this.children.forEach(t);
        }
      }
      var tU = n(2404),
        tz = n(9993),
        tH = n(804),
        t$ = n(8322),
        tX = n(2087);
      let tY = {
          type: "projectionFrame",
          totalNodes: 0,
          resolvedTargetDeltas: 0,
          recalculatedProjection: 0,
        },
        tK = "undefined" != typeof window && void 0 !== window.MotionDebug,
        tq = ["", "X", "Y", "Z"],
        tG = { visibility: "hidden" },
        tZ = 0;
      function tQ(t, e, n, i) {
        let { latestValues: r } = e;
        r[t] && ((n[t] = r[t]), e.setStaticValue(t, 0), i && (i[t] = 0));
      }
      function tJ({
        attachResizeListener: t,
        defaultParent: e,
        measureScroll: n,
        checkIsScrollRoot: i,
        resetTransform: r,
      }) {
        return class {
          constructor(t = {}, n = null == e ? void 0 : e()) {
            (this.id = tZ++),
              (this.animationId = 0),
              (this.children = new Set()),
              (this.options = {}),
              (this.isTreeAnimating = !1),
              (this.isAnimationBlocked = !1),
              (this.isLayoutDirty = !1),
              (this.isProjectionDirty = !1),
              (this.isSharedProjectionDirty = !1),
              (this.isTransformDirty = !1),
              (this.updateManuallyBlocked = !1),
              (this.updateBlockedByResize = !1),
              (this.isUpdating = !1),
              (this.isSVG = !1),
              (this.needsReset = !1),
              (this.shouldResetTransform = !1),
              (this.hasCheckedOptimisedAppear = !1),
              (this.treeScale = { x: 1, y: 1 }),
              (this.eventHandlers = new Map()),
              (this.hasTreeAnimated = !1),
              (this.updateScheduled = !1),
              (this.scheduleUpdate = () => this.update()),
              (this.projectionUpdateScheduled = !1),
              (this.checkUpdateFailed = () => {
                this.isUpdating &&
                  ((this.isUpdating = !1), this.clearAllSnapshots());
              }),
              (this.updateProjection = () => {
                (this.projectionUpdateScheduled = !1),
                  tK &&
                    (tY.totalNodes =
                      tY.resolvedTargetDeltas =
                      tY.recalculatedProjection =
                        0),
                  this.nodes.forEach(t2),
                  this.nodes.forEach(t7),
                  this.nodes.forEach(et),
                  this.nodes.forEach(t5),
                  tK && window.MotionDebug.record(tY);
              }),
              (this.resolvedRelativeTargetAt = 0),
              (this.hasProjected = !1),
              (this.isVisible = !0),
              (this.animationProgress = 0),
              (this.sharedNodes = new Map()),
              (this.latestValues = t),
              (this.root = n ? n.root || n : this),
              (this.path = n ? [...n.path, n] : []),
              (this.parent = n),
              (this.depth = n ? n.depth + 1 : 0);
            for (let t = 0; t < this.path.length; t++)
              this.path[t].shouldResetTransform = !0;
            this.root === this && (this.nodes = new tN());
          }
          addEventListener(t, e) {
            return (
              this.eventHandlers.has(t) ||
                this.eventHandlers.set(t, new tc.L()),
              this.eventHandlers.get(t).add(e)
            );
          }
          notifyListeners(t, ...e) {
            let n = this.eventHandlers.get(t);
            n && n.notify(...e);
          }
          hasListeners(t) {
            return this.eventHandlers.has(t);
          }
          mount(e, n = this.root.hasTreeAnimated) {
            if (this.instance) return;
            (this.isSVG = e instanceof SVGElement && "svg" !== e.tagName),
              (this.instance = e);
            let { layoutId: i, layout: r, visualElement: o } = this.options;
            if (
              (o && !o.current && o.mount(e),
              this.root.nodes.add(this),
              this.parent && this.parent.children.add(this),
              n && (r || i) && (this.isLayoutDirty = !0),
              t)
            ) {
              let n;
              let i = () => (this.root.updateBlockedByResize = !1);
              t(e, () => {
                (this.root.updateBlockedByResize = !0),
                  n && n(),
                  (n = (function (t, e) {
                    let n = tz.X.now(),
                      i = ({ timestamp: e }) => {
                        let r = e - n;
                        r >= 250 && ((0, p.Pn)(i), t(r - 250));
                      };
                    return p.Wi.read(i, !0), () => (0, p.Pn)(i);
                  })(i, 0)),
                  te.hasAnimatedSinceResize &&
                    ((te.hasAnimatedSinceResize = !1), this.nodes.forEach(t4));
              });
            }
            i && this.root.registerSharedNode(i, this),
              !1 !== this.options.animate &&
                o &&
                (i || r) &&
                this.addEventListener(
                  "didUpdate",
                  ({
                    delta: t,
                    hasLayoutChanged: e,
                    hasRelativeTargetChanged: n,
                    layout: i,
                  }) => {
                    if (this.isTreeAnimationBlocked()) {
                      (this.target = void 0), (this.relativeTarget = void 0);
                      return;
                    }
                    let r =
                        this.options.transition ||
                        o.getDefaultTransition() ||
                        es,
                      {
                        onLayoutAnimationStart: s,
                        onLayoutAnimationComplete: a,
                      } = o.getProps(),
                      l = !this.targetLayout || !tD(this.targetLayout, i) || n,
                      u = !e && n;
                    if (
                      this.options.layoutRoot ||
                      (this.resumeFrom && this.resumeFrom.instance) ||
                      u ||
                      (e && (l || !this.currentAnimation))
                    ) {
                      this.resumeFrom &&
                        ((this.resumingFrom = this.resumeFrom),
                        (this.resumingFrom.resumingFrom = void 0)),
                        this.setAnimationOrigin(t, u);
                      let e = {
                        ...(0, tM.e)(r, "layout"),
                        onPlay: s,
                        onComplete: a,
                      };
                      (o.shouldReduceMotion || this.options.layoutRoot) &&
                        ((e.delay = 0), (e.type = !1)),
                        this.startAnimation(e);
                    } else
                      e || t4(this),
                        this.isLead() &&
                          this.options.onExitComplete &&
                          this.options.onExitComplete();
                    this.targetLayout = i;
                  }
                );
          }
          unmount() {
            this.options.layoutId && this.willUpdate(),
              this.root.nodes.remove(this);
            let t = this.getStack();
            t && t.remove(this),
              this.parent && this.parent.children.delete(this),
              (this.instance = void 0),
              (0, p.Pn)(this.updateProjection);
          }
          blockUpdate() {
            this.updateManuallyBlocked = !0;
          }
          unblockUpdate() {
            this.updateManuallyBlocked = !1;
          }
          isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize;
          }
          isTreeAnimationBlocked() {
            return (
              this.isAnimationBlocked ||
              (this.parent && this.parent.isTreeAnimationBlocked()) ||
              !1
            );
          }
          startUpdate() {
            !this.isUpdateBlocked() &&
              ((this.isUpdating = !0),
              this.nodes && this.nodes.forEach(ee),
              this.animationId++);
          }
          getTransformTemplate() {
            let { visualElement: t } = this.options;
            return t && t.getProps().transformTemplate;
          }
          willUpdate(t = !0) {
            if (
              ((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())
            ) {
              this.options.onExitComplete && this.options.onExitComplete();
              return;
            }
            if (
              (window.MotionCancelOptimisedAnimation &&
                !this.hasCheckedOptimisedAppear &&
                (function t(e) {
                  if (((e.hasCheckedOptimisedAppear = !0), e.root === e))
                    return;
                  let { visualElement: n } = e.options;
                  if (!n) return;
                  let i = (0, tX.s)(n);
                  if (window.MotionHasOptimisedAnimation(i, "transform")) {
                    let { layout: t, layoutId: n } = e.options;
                    window.MotionCancelOptimisedAnimation(
                      i,
                      "transform",
                      p.Wi,
                      !(t || n)
                    );
                  }
                  let { parent: r } = e;
                  r && !r.hasCheckedOptimisedAppear && t(r);
                })(this),
              this.root.isUpdating || this.root.startUpdate(),
              this.isLayoutDirty)
            )
              return;
            this.isLayoutDirty = !0;
            for (let t = 0; t < this.path.length; t++) {
              let e = this.path[t];
              (e.shouldResetTransform = !0),
                e.updateScroll("snapshot"),
                e.options.layoutRoot && e.willUpdate(!1);
            }
            let { layoutId: e, layout: n } = this.options;
            if (void 0 === e && !n) return;
            let i = this.getTransformTemplate();
            (this.prevTransformTemplateValue = i
              ? i(this.latestValues, "")
              : void 0),
              this.updateSnapshot(),
              t && this.notifyListeners("willUpdate");
          }
          update() {
            if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
              this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(t9);
              return;
            }
            this.isUpdating || this.nodes.forEach(t6),
              (this.isUpdating = !1),
              this.nodes.forEach(t8),
              this.nodes.forEach(t0),
              this.nodes.forEach(t1),
              this.clearAllSnapshots();
            let t = tz.X.now();
            (p.frameData.delta = (0, A.u)(
              0,
              1e3 / 60,
              t - p.frameData.timestamp
            )),
              (p.frameData.timestamp = t),
              (p.frameData.isProcessing = !0),
              p.S6.update.process(p.frameData),
              p.S6.preRender.process(p.frameData),
              p.S6.render.process(p.frameData),
              (p.frameData.isProcessing = !1);
          }
          didUpdate() {
            this.updateScheduled ||
              ((this.updateScheduled = !0), ts.g.read(this.scheduleUpdate));
          }
          clearAllSnapshots() {
            this.nodes.forEach(t3), this.sharedNodes.forEach(en);
          }
          scheduleUpdateProjection() {
            this.projectionUpdateScheduled ||
              ((this.projectionUpdateScheduled = !0),
              p.Wi.preRender(this.updateProjection, !1, !0));
          }
          scheduleCheckAfterUnmount() {
            p.Wi.postRender(() => {
              this.isLayoutDirty
                ? this.root.didUpdate()
                : this.root.checkUpdateFailed();
            });
          }
          updateSnapshot() {
            !this.snapshot && this.instance && (this.snapshot = this.measure());
          }
          updateLayout() {
            if (
              !this.instance ||
              (this.updateScroll(),
              !(this.options.alwaysMeasureLayout && this.isLead()) &&
                !this.isLayoutDirty)
            )
              return;
            if (this.resumeFrom && !this.resumeFrom.instance)
              for (let t = 0; t < this.path.length; t++)
                this.path[t].updateScroll();
            let t = this.layout;
            (this.layout = this.measure(!1)),
              (this.layoutCorrected = (0, V.dO)()),
              (this.isLayoutDirty = !1),
              (this.projectionDelta = void 0),
              this.notifyListeners("measure", this.layout.layoutBox);
            let { visualElement: e } = this.options;
            e &&
              e.notify(
                "LayoutMeasure",
                this.layout.layoutBox,
                t ? t.layoutBox : void 0
              );
          }
          updateScroll(t = "measure") {
            let e = !!(this.options.layoutScroll && this.instance);
            if (
              (this.scroll &&
                this.scroll.animationId === this.root.animationId &&
                this.scroll.phase === t &&
                (e = !1),
              e)
            ) {
              let e = i(this.instance);
              this.scroll = {
                animationId: this.root.animationId,
                phase: t,
                isRoot: e,
                offset: n(this.instance),
                wasRoot: this.scroll ? this.scroll.isRoot : e,
              };
            }
          }
          resetTransform() {
            if (!r) return;
            let t =
                this.isLayoutDirty ||
                this.shouldResetTransform ||
                this.options.alwaysMeasureLayout,
              e = this.projectionDelta && !tR(this.projectionDelta),
              n = this.getTransformTemplate(),
              i = n ? n(this.latestValues, "") : void 0,
              o = i !== this.prevTransformTemplateValue;
            t &&
              (e || (0, tF.ud)(this.latestValues) || o) &&
              (r(this.instance, i),
              (this.shouldResetTransform = !1),
              this.scheduleRender());
          }
          measure(t = !0) {
            var e;
            let n = this.measurePageBox(),
              i = this.removeElementScroll(n);
            return (
              t && (i = this.removeTransform(i)),
              eu((e = i).x),
              eu(e.y),
              {
                animationId: this.root.animationId,
                measuredBox: n,
                layoutBox: i,
                latestValues: {},
                source: this.id,
              }
            );
          }
          measurePageBox() {
            var t;
            let { visualElement: e } = this.options;
            if (!e) return (0, V.dO)();
            let n = e.measureViewportBox();
            if (
              !(
                (null === (t = this.scroll) || void 0 === t
                  ? void 0
                  : t.wasRoot) || this.path.some(ed)
              )
            ) {
              let { scroll: t } = this.root;
              t && ((0, tS.am)(n.x, t.offset.x), (0, tS.am)(n.y, t.offset.y));
            }
            return n;
          }
          removeElementScroll(t) {
            var e;
            let n = (0, V.dO)();
            if (
              (tw(n, t),
              null === (e = this.scroll) || void 0 === e ? void 0 : e.wasRoot)
            )
              return n;
            for (let e = 0; e < this.path.length; e++) {
              let i = this.path[e],
                { scroll: r, options: o } = i;
              i !== this.root &&
                r &&
                o.layoutScroll &&
                (r.wasRoot && tw(n, t),
                (0, tS.am)(n.x, r.offset.x),
                (0, tS.am)(n.y, r.offset.y));
            }
            return n;
          }
          applyTransform(t, e = !1) {
            let n = (0, V.dO)();
            tw(n, t);
            for (let t = 0; t < this.path.length; t++) {
              let i = this.path[t];
              !e &&
                i.options.layoutScroll &&
                i.scroll &&
                i !== i.root &&
                (0, tS.D2)(n, { x: -i.scroll.offset.x, y: -i.scroll.offset.y }),
                (0, tF.ud)(i.latestValues) && (0, tS.D2)(n, i.latestValues);
            }
            return (
              (0, tF.ud)(this.latestValues) && (0, tS.D2)(n, this.latestValues),
              n
            );
          }
          removeTransform(t) {
            let e = (0, V.dO)();
            tw(e, t);
            for (let t = 0; t < this.path.length; t++) {
              let n = this.path[t];
              if (!n.instance || !(0, tF.ud)(n.latestValues)) continue;
              (0, tF.Lj)(n.latestValues) && n.updateSnapshot();
              let i = (0, V.dO)();
              tw(i, n.measurePageBox()),
                tj(
                  e,
                  n.latestValues,
                  n.snapshot ? n.snapshot.layoutBox : void 0,
                  i
                );
            }
            return (0, tF.ud)(this.latestValues) && tj(e, this.latestValues), e;
          }
          setTargetDelta(t) {
            (this.targetDelta = t),
              this.root.scheduleUpdateProjection(),
              (this.isProjectionDirty = !0);
          }
          setOptions(t) {
            this.options = {
              ...this.options,
              ...t,
              crossfade: void 0 === t.crossfade || t.crossfade,
            };
          }
          clearMeasurements() {
            (this.scroll = void 0),
              (this.layout = void 0),
              (this.snapshot = void 0),
              (this.prevTransformTemplateValue = void 0),
              (this.targetDelta = void 0),
              (this.target = void 0),
              (this.isLayoutDirty = !1);
          }
          forceRelativeParentToResolveTarget() {
            this.relativeParent &&
              this.relativeParent.resolvedRelativeTargetAt !==
                p.frameData.timestamp &&
              this.relativeParent.resolveTargetDelta(!0);
          }
          resolveTargetDelta(t = !1) {
            var e, n, i, r;
            let o = this.getLead();
            this.isProjectionDirty ||
              (this.isProjectionDirty = o.isProjectionDirty),
              this.isTransformDirty ||
                (this.isTransformDirty = o.isTransformDirty),
              this.isSharedProjectionDirty ||
                (this.isSharedProjectionDirty = o.isSharedProjectionDirty);
            let s = !!this.resumingFrom || this !== o;
            if (
              !(
                t ||
                (s && this.isSharedProjectionDirty) ||
                this.isProjectionDirty ||
                (null === (e = this.parent) || void 0 === e
                  ? void 0
                  : e.isProjectionDirty) ||
                this.attemptToResolveRelativeTarget ||
                this.root.updateBlockedByResize
              )
            )
              return;
            let { layout: a, layoutId: l } = this.options;
            if (this.layout && (a || l)) {
              if (
                ((this.resolvedRelativeTargetAt = p.frameData.timestamp),
                !this.targetDelta && !this.relativeTarget)
              ) {
                let t = this.getClosestProjectingParent();
                t && t.layout && 1 !== this.animationProgress
                  ? ((this.relativeParent = t),
                    this.forceRelativeParentToResolveTarget(),
                    (this.relativeTarget = (0, V.dO)()),
                    (this.relativeTargetOrigin = (0, V.dO)()),
                    M(
                      this.relativeTargetOrigin,
                      this.layout.layoutBox,
                      t.layout.layoutBox
                    ),
                    tw(this.relativeTarget, this.relativeTargetOrigin))
                  : (this.relativeParent = this.relativeTarget = void 0);
              }
              if (this.relativeTarget || this.targetDelta) {
                if (
                  ((this.target ||
                    ((this.target = (0, V.dO)()),
                    (this.targetWithTransforms = (0, V.dO)())),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.relativeParent &&
                    this.relativeParent.target)
                    ? (this.forceRelativeParentToResolveTarget(),
                      (n = this.target),
                      (i = this.relativeTarget),
                      (r = this.relativeParent.target),
                      O(n.x, i.x, r.x),
                      O(n.y, i.y, r.y))
                    : this.targetDelta
                    ? (this.resumingFrom
                        ? (this.target = this.applyTransform(
                            this.layout.layoutBox
                          ))
                        : tw(this.target, this.layout.layoutBox),
                      (0, tS.o2)(this.target, this.targetDelta))
                    : tw(this.target, this.layout.layoutBox),
                  this.attemptToResolveRelativeTarget)
                ) {
                  this.attemptToResolveRelativeTarget = !1;
                  let t = this.getClosestProjectingParent();
                  t &&
                  !!t.resumingFrom == !!this.resumingFrom &&
                  !t.options.layoutScroll &&
                  t.target &&
                  1 !== this.animationProgress
                    ? ((this.relativeParent = t),
                      this.forceRelativeParentToResolveTarget(),
                      (this.relativeTarget = (0, V.dO)()),
                      (this.relativeTargetOrigin = (0, V.dO)()),
                      M(this.relativeTargetOrigin, this.target, t.target),
                      tw(this.relativeTarget, this.relativeTargetOrigin))
                    : (this.relativeParent = this.relativeTarget = void 0);
                }
                tK && tY.resolvedTargetDeltas++;
              }
            }
          }
          getClosestProjectingParent() {
            return !this.parent ||
              (0, tF.Lj)(this.parent.latestValues) ||
              (0, tF.D_)(this.parent.latestValues)
              ? void 0
              : this.parent.isProjecting()
              ? this.parent
              : this.parent.getClosestProjectingParent();
          }
          isProjecting() {
            return !!(
              (this.relativeTarget ||
                this.targetDelta ||
                this.options.layoutRoot) &&
              this.layout
            );
          }
          calcProjection() {
            var t;
            let e = this.getLead(),
              n = !!this.resumingFrom || this !== e,
              i = !0;
            if (
              ((this.isProjectionDirty ||
                (null === (t = this.parent) || void 0 === t
                  ? void 0
                  : t.isProjectionDirty)) &&
                (i = !1),
              n &&
                (this.isSharedProjectionDirty || this.isTransformDirty) &&
                (i = !1),
              this.resolvedRelativeTargetAt === p.frameData.timestamp &&
                (i = !1),
              i)
            )
              return;
            let { layout: r, layoutId: o } = this.options;
            if (
              ((this.isTreeAnimating = !!(
                (this.parent && this.parent.isTreeAnimating) ||
                this.currentAnimation ||
                this.pendingAnimation
              )),
              this.isTreeAnimating ||
                (this.targetDelta = this.relativeTarget = void 0),
              !this.layout || !(r || o))
            )
              return;
            tw(this.layoutCorrected, this.layout.layoutBox);
            let s = this.treeScale.x,
              a = this.treeScale.y;
            (0, tS.YY)(this.layoutCorrected, this.treeScale, this.path, n),
              e.layout &&
                !e.target &&
                (1 !== this.treeScale.x || 1 !== this.treeScale.y) &&
                ((e.target = e.layout.layoutBox),
                (e.targetWithTransforms = (0, V.dO)()));
            let { target: l } = e;
            if (!l) {
              this.prevProjectionDelta &&
                (this.createProjectionDeltas(), this.scheduleRender());
              return;
            }
            this.projectionDelta && this.prevProjectionDelta
              ? (tx(this.prevProjectionDelta.x, this.projectionDelta.x),
                tx(this.prevProjectionDelta.y, this.projectionDelta.y))
              : this.createProjectionDeltas(),
              E(
                this.projectionDelta,
                this.layoutCorrected,
                l,
                this.latestValues
              ),
              (this.treeScale.x === s &&
                this.treeScale.y === a &&
                tL(this.projectionDelta.x, this.prevProjectionDelta.x) &&
                tL(this.projectionDelta.y, this.prevProjectionDelta.y)) ||
                ((this.hasProjected = !0),
                this.scheduleRender(),
                this.notifyListeners("projectionUpdate", l)),
              tK && tY.recalculatedProjection++;
          }
          hide() {
            this.isVisible = !1;
          }
          show() {
            this.isVisible = !0;
          }
          scheduleRender(t = !0) {
            var e;
            if (
              (null === (e = this.options.visualElement) ||
                void 0 === e ||
                e.scheduleRender(),
              t)
            ) {
              let t = this.getStack();
              t && t.scheduleRender();
            }
            this.resumingFrom &&
              !this.resumingFrom.instance &&
              (this.resumingFrom = void 0);
          }
          createProjectionDeltas() {
            (this.prevProjectionDelta = (0, V.wc)()),
              (this.projectionDelta = (0, V.wc)()),
              (this.projectionDeltaWithTransform = (0, V.wc)());
          }
          setAnimationOrigin(t, e = !1) {
            let n;
            let i = this.snapshot,
              r = i ? i.latestValues : {},
              o = { ...this.latestValues },
              s = (0, V.wc)();
            (this.relativeParent && this.relativeParent.options.layoutRoot) ||
              (this.relativeTarget = this.relativeTargetOrigin = void 0),
              (this.attemptToResolveRelativeTarget = !e);
            let a = (0, V.dO)(),
              l =
                (i ? i.source : void 0) !==
                (this.layout ? this.layout.source : void 0),
              u = this.getStack(),
              c = !u || u.members.length <= 1,
              d = !!(
                l &&
                !c &&
                !0 === this.options.crossfade &&
                !this.path.some(eo)
              );
            (this.animationProgress = 0),
              (this.mixTargetDelta = (e) => {
                let i = e / 1e3;
                if (
                  (ei(s.x, t.x, i),
                  ei(s.y, t.y, i),
                  this.setTargetDelta(s),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.layout &&
                    this.relativeParent &&
                    this.relativeParent.layout)
                ) {
                  var u, h, f, p;
                  M(
                    a,
                    this.layout.layoutBox,
                    this.relativeParent.layout.layoutBox
                  ),
                    (f = this.relativeTarget),
                    (p = this.relativeTargetOrigin),
                    er(f.x, p.x, a.x, i),
                    er(f.y, p.y, a.y, i),
                    n &&
                      ((u = this.relativeTarget),
                      (h = n),
                      tk(u.x, h.x) && tk(u.y, h.y)) &&
                      (this.isProjectionDirty = !1),
                    n || (n = (0, V.dO)()),
                    tw(n, this.relativeTarget);
                }
                l &&
                  ((this.animationValues = o),
                  (function (t, e, n, i, r, o) {
                    r
                      ? ((t.opacity = (0, S.t)(
                          0,
                          void 0 !== n.opacity ? n.opacity : 1,
                          tg(i)
                        )),
                        (t.opacityExit = (0, S.t)(
                          void 0 !== e.opacity ? e.opacity : 1,
                          0,
                          ty(i)
                        )))
                      : o &&
                        (t.opacity = (0, S.t)(
                          void 0 !== e.opacity ? e.opacity : 1,
                          void 0 !== n.opacity ? n.opacity : 1,
                          i
                        ));
                    for (let r = 0; r < tf; r++) {
                      let o = `border${th[r]}Radius`,
                        s = tv(e, o),
                        a = tv(n, o);
                      (void 0 !== s || void 0 !== a) &&
                        (s || (s = 0),
                        a || (a = 0),
                        0 === s || 0 === a || tm(s) === tm(a)
                          ? ((t[o] = Math.max((0, S.t)(tp(s), tp(a), i), 0)),
                            (W.aQ.test(a) || W.aQ.test(s)) && (t[o] += "%"))
                          : (t[o] = a));
                    }
                    (e.rotate || n.rotate) &&
                      (t.rotate = (0, S.t)(e.rotate || 0, n.rotate || 0, i));
                  })(o, r, this.latestValues, i, d, c)),
                  this.root.scheduleUpdateProjection(),
                  this.scheduleRender(),
                  (this.animationProgress = i);
              }),
              this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
          }
          startAnimation(t) {
            this.notifyListeners("animationStart"),
              this.currentAnimation && this.currentAnimation.stop(),
              this.resumingFrom &&
                this.resumingFrom.currentAnimation &&
                this.resumingFrom.currentAnimation.stop(),
              this.pendingAnimation &&
                ((0, p.Pn)(this.pendingAnimation),
                (this.pendingAnimation = void 0)),
              (this.pendingAnimation = p.Wi.update(() => {
                (te.hasAnimatedSinceResize = !0),
                  (this.currentAnimation = (function (t, e, n) {
                    let i = (0, t$.i)(0) ? 0 : (0, tH.BX)(0);
                    return i.start((0, N.v)("", i, 1e3, n)), i.animation;
                  })(0, 0, {
                    ...t,
                    onUpdate: (e) => {
                      this.mixTargetDelta(e), t.onUpdate && t.onUpdate(e);
                    },
                    onComplete: () => {
                      t.onComplete && t.onComplete(), this.completeAnimation();
                    },
                  })),
                  this.resumingFrom &&
                    (this.resumingFrom.currentAnimation =
                      this.currentAnimation),
                  (this.pendingAnimation = void 0);
              }));
          }
          completeAnimation() {
            this.resumingFrom &&
              ((this.resumingFrom.currentAnimation = void 0),
              (this.resumingFrom.preserveOpacity = void 0));
            let t = this.getStack();
            t && t.exitAnimationComplete(),
              (this.resumingFrom =
                this.currentAnimation =
                this.animationValues =
                  void 0),
              this.notifyListeners("animationComplete");
          }
          finishAnimation() {
            this.currentAnimation &&
              (this.mixTargetDelta && this.mixTargetDelta(1e3),
              this.currentAnimation.stop()),
              this.completeAnimation();
          }
          applyTransformsToTarget() {
            let t = this.getLead(),
              {
                targetWithTransforms: e,
                target: n,
                layout: i,
                latestValues: r,
              } = t;
            if (e && n && i) {
              if (
                this !== t &&
                this.layout &&
                i &&
                ec(
                  this.options.animationType,
                  this.layout.layoutBox,
                  i.layoutBox
                )
              ) {
                n = this.target || (0, V.dO)();
                let e = T(this.layout.layoutBox.x);
                (n.x.min = t.target.x.min), (n.x.max = n.x.min + e);
                let i = T(this.layout.layoutBox.y);
                (n.y.min = t.target.y.min), (n.y.max = n.y.min + i);
              }
              tw(e, n),
                (0, tS.D2)(e, r),
                E(
                  this.projectionDeltaWithTransform,
                  this.layoutCorrected,
                  e,
                  r
                );
            }
          }
          registerSharedNode(t, e) {
            this.sharedNodes.has(t) || this.sharedNodes.set(t, new tB()),
              this.sharedNodes.get(t).add(e);
            let n = e.options.initialPromotionConfig;
            e.promote({
              transition: n ? n.transition : void 0,
              preserveFollowOpacity:
                n && n.shouldPreserveFollowOpacity
                  ? n.shouldPreserveFollowOpacity(e)
                  : void 0,
            });
          }
          isLead() {
            let t = this.getStack();
            return !t || t.lead === this;
          }
          getLead() {
            var t;
            let { layoutId: e } = this.options;
            return (
              (e &&
                (null === (t = this.getStack()) || void 0 === t
                  ? void 0
                  : t.lead)) ||
              this
            );
          }
          getPrevLead() {
            var t;
            let { layoutId: e } = this.options;
            return e
              ? null === (t = this.getStack()) || void 0 === t
                ? void 0
                : t.prevLead
              : void 0;
          }
          getStack() {
            let { layoutId: t } = this.options;
            if (t) return this.root.sharedNodes.get(t);
          }
          promote({
            needsReset: t,
            transition: e,
            preserveFollowOpacity: n,
          } = {}) {
            let i = this.getStack();
            i && i.promote(this, n),
              t && ((this.projectionDelta = void 0), (this.needsReset = !0)),
              e && this.setOptions({ transition: e });
          }
          relegate() {
            let t = this.getStack();
            return !!t && t.relegate(this);
          }
          resetSkewAndRotation() {
            let { visualElement: t } = this.options;
            if (!t) return;
            let e = !1,
              { latestValues: n } = t;
            if (
              ((n.z ||
                n.rotate ||
                n.rotateX ||
                n.rotateY ||
                n.rotateZ ||
                n.skewX ||
                n.skewY) &&
                (e = !0),
              !e)
            )
              return;
            let i = {};
            n.z && tQ("z", t, i, this.animationValues);
            for (let e = 0; e < tq.length; e++)
              tQ(`rotate${tq[e]}`, t, i, this.animationValues),
                tQ(`skew${tq[e]}`, t, i, this.animationValues);
            for (let e in (t.render(), i))
              t.setStaticValue(e, i[e]),
                this.animationValues && (this.animationValues[e] = i[e]);
            t.scheduleRender();
          }
          getProjectionStyles(t) {
            var e, n;
            if (!this.instance || this.isSVG) return;
            if (!this.isVisible) return tG;
            let i = { visibility: "" },
              r = this.getTransformTemplate();
            if (this.needsReset)
              return (
                (this.needsReset = !1),
                (i.opacity = ""),
                (i.pointerEvents =
                  (0, tU.b)(null == t ? void 0 : t.pointerEvents) || ""),
                (i.transform = r ? r(this.latestValues, "") : "none"),
                i
              );
            let o = this.getLead();
            if (!this.projectionDelta || !this.layout || !o.target) {
              let e = {};
              return (
                this.options.layoutId &&
                  ((e.opacity =
                    void 0 !== this.latestValues.opacity
                      ? this.latestValues.opacity
                      : 1),
                  (e.pointerEvents =
                    (0, tU.b)(null == t ? void 0 : t.pointerEvents) || "")),
                this.hasProjected &&
                  !(0, tF.ud)(this.latestValues) &&
                  ((e.transform = r ? r({}, "") : "none"),
                  (this.hasProjected = !1)),
                e
              );
            }
            let s = o.animationValues || o.latestValues;
            this.applyTransformsToTarget(),
              (i.transform = (function (t, e, n) {
                let i = "",
                  r = t.x.translate / e.x,
                  o = t.y.translate / e.y,
                  s = (null == n ? void 0 : n.z) || 0;
                if (
                  ((r || o || s) &&
                    (i = `translate3d(${r}px, ${o}px, ${s}px) `),
                  (1 !== e.x || 1 !== e.y) &&
                    (i += `scale(${1 / e.x}, ${1 / e.y}) `),
                  n)
                ) {
                  let {
                    transformPerspective: t,
                    rotate: e,
                    rotateX: r,
                    rotateY: o,
                    skewX: s,
                    skewY: a,
                  } = n;
                  t && (i = `perspective(${t}px) ${i}`),
                    e && (i += `rotate(${e}deg) `),
                    r && (i += `rotateX(${r}deg) `),
                    o && (i += `rotateY(${o}deg) `),
                    s && (i += `skewX(${s}deg) `),
                    a && (i += `skewY(${a}deg) `);
                }
                let a = t.x.scale * e.x,
                  l = t.y.scale * e.y;
                return (
                  (1 !== a || 1 !== l) && (i += `scale(${a}, ${l})`),
                  i || "none"
                );
              })(this.projectionDeltaWithTransform, this.treeScale, s)),
              r && (i.transform = r(s, i.transform));
            let { x: a, y: l } = this.projectionDelta;
            for (let t in ((i.transformOrigin = `${100 * a.origin}% ${
              100 * l.origin
            }% 0`),
            o.animationValues
              ? (i.opacity =
                  o === this
                    ? null !==
                        (n =
                          null !== (e = s.opacity) && void 0 !== e
                            ? e
                            : this.latestValues.opacity) && void 0 !== n
                      ? n
                      : 1
                    : this.preserveOpacity
                    ? this.latestValues.opacity
                    : s.opacityExit)
              : (i.opacity =
                  o === this
                    ? void 0 !== s.opacity
                      ? s.opacity
                      : ""
                    : void 0 !== s.opacityExit
                    ? s.opacityExit
                    : 0),
            to.P)) {
              if (void 0 === s[t]) continue;
              let { correct: e, applyTo: n } = to.P[t],
                r = "none" === i.transform ? s[t] : e(s[t], o);
              if (n) {
                let t = n.length;
                for (let e = 0; e < t; e++) i[n[e]] = r;
              } else i[t] = r;
            }
            return (
              this.options.layoutId &&
                (i.pointerEvents =
                  o === this
                    ? (0, tU.b)(null == t ? void 0 : t.pointerEvents) || ""
                    : "none"),
              i
            );
          }
          clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0;
          }
          resetTree() {
            this.root.nodes.forEach((t) => {
              var e;
              return null === (e = t.currentAnimation) || void 0 === e
                ? void 0
                : e.stop();
            }),
              this.root.nodes.forEach(t9),
              this.root.sharedNodes.clear();
          }
        };
      }
      function t0(t) {
        t.updateLayout();
      }
      function t1(t) {
        var e;
        let n =
          (null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) ||
          t.snapshot;
        if (t.isLead() && t.layout && n && t.hasListeners("didUpdate")) {
          let { layoutBox: e, measuredBox: i } = t.layout,
            { animationType: r } = t.options,
            o = n.source !== t.layout.source;
          "size" === r
            ? L((t) => {
                let i = o ? n.measuredBox[t] : n.layoutBox[t],
                  r = T(i);
                (i.min = e[t].min), (i.max = i.min + r);
              })
            : ec(r, n.layoutBox, e) &&
              L((i) => {
                let r = o ? n.measuredBox[i] : n.layoutBox[i],
                  s = T(e[i]);
                (r.max = r.min + s),
                  t.relativeTarget &&
                    !t.currentAnimation &&
                    ((t.isProjectionDirty = !0),
                    (t.relativeTarget[i].max = t.relativeTarget[i].min + s));
              });
          let s = (0, V.wc)();
          E(s, e, n.layoutBox);
          let a = (0, V.wc)();
          o
            ? E(a, t.applyTransform(i, !0), n.measuredBox)
            : E(a, e, n.layoutBox);
          let l = !tR(s),
            u = !1;
          if (!t.resumeFrom) {
            let i = t.getClosestProjectingParent();
            if (i && !i.resumeFrom) {
              let { snapshot: r, layout: o } = i;
              if (r && o) {
                let s = (0, V.dO)();
                M(s, n.layoutBox, r.layoutBox);
                let a = (0, V.dO)();
                M(a, e, o.layoutBox),
                  tD(s, a) || (u = !0),
                  i.options.layoutRoot &&
                    ((t.relativeTarget = a),
                    (t.relativeTargetOrigin = s),
                    (t.relativeParent = i));
              }
            }
          }
          t.notifyListeners("didUpdate", {
            layout: e,
            snapshot: n,
            delta: a,
            layoutDelta: s,
            hasLayoutChanged: l,
            hasRelativeTargetChanged: u,
          });
        } else if (t.isLead()) {
          let { onExitComplete: e } = t.options;
          e && e();
        }
        t.options.transition = void 0;
      }
      function t2(t) {
        tK && tY.totalNodes++,
          t.parent &&
            (t.isProjecting() ||
              (t.isProjectionDirty = t.parent.isProjectionDirty),
            t.isSharedProjectionDirty ||
              (t.isSharedProjectionDirty = !!(
                t.isProjectionDirty ||
                t.parent.isProjectionDirty ||
                t.parent.isSharedProjectionDirty
              )),
            t.isTransformDirty ||
              (t.isTransformDirty = t.parent.isTransformDirty));
      }
      function t5(t) {
        t.isProjectionDirty =
          t.isSharedProjectionDirty =
          t.isTransformDirty =
            !1;
      }
      function t3(t) {
        t.clearSnapshot();
      }
      function t9(t) {
        t.clearMeasurements();
      }
      function t6(t) {
        t.isLayoutDirty = !1;
      }
      function t8(t) {
        let { visualElement: e } = t.options;
        e &&
          e.getProps().onBeforeLayoutMeasure &&
          e.notify("BeforeLayoutMeasure"),
          t.resetTransform();
      }
      function t4(t) {
        t.finishAnimation(),
          (t.targetDelta = t.relativeTarget = t.target = void 0),
          (t.isProjectionDirty = !0);
      }
      function t7(t) {
        t.resolveTargetDelta();
      }
      function et(t) {
        t.calcProjection();
      }
      function ee(t) {
        t.resetSkewAndRotation();
      }
      function en(t) {
        t.removeLeadSnapshot();
      }
      function ei(t, e, n) {
        (t.translate = (0, S.t)(e.translate, 0, n)),
          (t.scale = (0, S.t)(e.scale, 1, n)),
          (t.origin = e.origin),
          (t.originPoint = e.originPoint);
      }
      function er(t, e, n, i) {
        (t.min = (0, S.t)(e.min, n.min, i)),
          (t.max = (0, S.t)(e.max, n.max, i));
      }
      function eo(t) {
        return t.animationValues && void 0 !== t.animationValues.opacityExit;
      }
      let es = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
        ea = (t) =>
          "undefined" != typeof navigator &&
          navigator.userAgent &&
          navigator.userAgent.toLowerCase().includes(t),
        el = ea("applewebkit/") && !ea("chrome/") ? Math.round : s.Z;
      function eu(t) {
        (t.min = el(t.min)), (t.max = el(t.max));
      }
      function ec(t, e, n) {
        return (
          "position" === t ||
          ("preserve-aspect" === t && !(0.2 >= Math.abs(tV(e) - tV(n))))
        );
      }
      function ed(t) {
        var e;
        return (
          t !== t.root &&
          (null === (e = t.scroll) || void 0 === e ? void 0 : e.wasRoot)
        );
      }
      let eh = tJ({
          attachResizeListener: (t, e) => (0, F.E)(t, "resize", e),
          measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop,
          }),
          checkIsScrollRoot: () => !0,
        }),
        ef = { current: void 0 },
        ep = tJ({
          measureScroll: (t) => ({ x: t.scrollLeft, y: t.scrollTop }),
          defaultParent: () => {
            if (!ef.current) {
              let t = new eh({});
              t.mount(window),
                t.setOptions({ layoutScroll: !0 }),
                (ef.current = t);
            }
            return ef.current;
          },
          resetTransform: (t, e) => {
            t.style.transform = void 0 !== e ? e : "none";
          },
          checkIsScrollRoot: (t) =>
            "fixed" === window.getComputedStyle(t).position,
        });
      var em = n(5859),
        ev = n(1292),
        eg = n(3302);
      let ey = (0, ev.x)(
          {
            ...r.s,
            ...em.E,
            pan: { Feature: q },
            drag: { Feature: Y, ProjectionNode: ep, MeasureLayout: tl },
            layout: { ProjectionNode: ep, MeasureLayout: tl },
          },
          eg.b
        ),
        eb = (0, i.c)(ey);
    },
    3078: function (t, e, n) {
      "use strict";
      n.d(e, {
        s: function () {
          return p;
        },
      });
      var i = n(9102),
        r = n(9047),
        o = n(4386),
        s = n(1534);
      let a = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
      var l = n(5014),
        u = n(3769),
        c = n(3653),
        d = n(3646),
        h = n(6450);
      let f = new Set(["auto", "none", "0"]);
      class p extends c.e {
        constructor(t, e, n, i, r) {
          super(t, e, n, i, r, !0);
        }
        readKeyframes() {
          let { unresolvedKeyframes: t, element: e, name: n } = this;
          if (!e || !e.current) return;
          super.readKeyframes();
          for (let n = 0; n < t.length; n++) {
            let i = t[n];
            if ("string" == typeof i && ((i = i.trim()), (0, s.t)(i))) {
              let l = (function t(e, n, i = 1) {
                (0, r.k)(
                  i <= 4,
                  `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`
                );
                let [l, u] = (function (t) {
                  let e = a.exec(t);
                  if (!e) return [,];
                  let [, n, i, r] = e;
                  return [`--${null != n ? n : i}`, r];
                })(e);
                if (!l) return;
                let c = window.getComputedStyle(n).getPropertyValue(l);
                if (c) {
                  let t = c.trim();
                  return (0, o.P)(t) ? parseFloat(t) : t;
                }
                return (0, s.t)(u) ? t(u, n, i + 1) : u;
              })(i, e.current);
              void 0 !== l && (t[n] = l),
                n === t.length - 1 && (this.finalKeyframe = i);
            }
          }
          if ((this.resolveNoneKeyframes(), !l.z2.has(n) || 2 !== t.length))
            return;
          let [i, c] = t,
            d = (0, u.C)(i),
            h = (0, u.C)(c);
          if (d !== h) {
            if ((0, l.mP)(d) && (0, l.mP)(h))
              for (let e = 0; e < t.length; e++) {
                let n = t[e];
                "string" == typeof n && (t[e] = parseFloat(n));
              }
            else this.needsMeasurement = !0;
          }
        }
        resolveNoneKeyframes() {
          let { unresolvedKeyframes: t, name: e } = this,
            n = [];
          for (let e = 0; e < t.length; e++) {
            var r;
            ("number" == typeof (r = t[e])
              ? 0 === r
              : null === r || "none" === r || "0" === r || (0, i.W)(r)) &&
              n.push(e);
          }
          n.length &&
            (function (t, e, n) {
              let i,
                r = 0;
              for (; r < t.length && !i; ) {
                let e = t[r];
                "string" == typeof e &&
                  !f.has(e) &&
                  (0, d.V)(e).values.length &&
                  (i = t[r]),
                  r++;
              }
              if (i && n) for (let r of e) t[r] = (0, h.T)(n, i);
            })(t, n, e);
        }
        measureInitialState() {
          let { element: t, unresolvedKeyframes: e, name: n } = this;
          if (!t || !t.current) return;
          "height" === n && (this.suspendedScrollY = window.pageYOffset),
            (this.measuredOrigin = l.lw[n](
              t.measureViewportBox(),
              window.getComputedStyle(t.current)
            )),
            (e[0] = this.measuredOrigin);
          let i = e[e.length - 1];
          void 0 !== i && t.getValue(n, i).jump(i, !1);
        }
        measureEndState() {
          var t;
          let { element: e, name: n, unresolvedKeyframes: i } = this;
          if (!e || !e.current) return;
          let r = e.getValue(n);
          r && r.jump(this.measuredOrigin, !1);
          let o = i.length - 1,
            s = i[o];
          (i[o] = l.lw[n](
            e.measureViewportBox(),
            window.getComputedStyle(e.current)
          )),
            null !== s &&
              void 0 === this.finalKeyframe &&
              (this.finalKeyframe = s),
            (null === (t = this.removedTransforms) || void 0 === t
              ? void 0
              : t.length) &&
              this.removedTransforms.forEach(([t, n]) => {
                e.getValue(t).set(n);
              }),
            this.resolveNoneKeyframes();
        }
      }
    },
    3302: function (t, e, n) {
      "use strict";
      n.d(e, {
        b: function () {
          return Y;
        },
      });
      var i = n(2265),
        r = n(4651),
        o = n(1534),
        s = n(6019),
        a = n(1315),
        l = n(9979),
        u = n(781),
        c = n(7684),
        d = n(7282);
      let h = { current: null },
        f = { current: !1 };
      var p = n(2428),
        m = n(804),
        v = n(8322),
        g = n(3795),
        y = n(8595),
        b = n(6317);
      let P = new WeakMap();
      var w = n(3653),
        x = n(4386),
        S = n(9102),
        T = n(146),
        C = n(3646),
        E = n(3769),
        O = n(2649);
      let j = [...E.$, T.$, C.P],
        M = (t) => j.find((0, O.l)(t));
      var A = n(6450),
        R = n(8250),
        k = n(9993),
        _ = n(6219);
      let D = [
        "AnimationStart",
        "AnimationComplete",
        "Update",
        "BeforeLayoutMeasure",
        "LayoutMeasure",
        "LayoutAnimationStart",
        "LayoutAnimationComplete",
      ];
      class V {
        scrapeMotionValuesFromProps(t, e, n) {
          return {};
        }
        constructor(
          {
            parent: t,
            props: e,
            presenceContext: n,
            reducedMotionConfig: i,
            blockInitialAnimation: r,
            visualState: o,
          },
          s = {}
        ) {
          (this.applyWillChange = !1),
            (this.current = null),
            (this.children = new Set()),
            (this.isVariantNode = !1),
            (this.isControllingVariants = !1),
            (this.shouldReduceMotion = null),
            (this.values = new Map()),
            (this.KeyframeResolver = w.e),
            (this.features = {}),
            (this.valueSubscriptions = new Map()),
            (this.prevMotionValues = {}),
            (this.events = {}),
            (this.propEventSubscriptions = {}),
            (this.notifyUpdate = () =>
              this.notify("Update", this.latestValues)),
            (this.render = () => {
              this.current &&
                (this.triggerBuild(),
                this.renderInstance(
                  this.current,
                  this.renderState,
                  this.props.style,
                  this.projection
                ));
            }),
            (this.renderScheduledAt = 0),
            (this.scheduleRender = () => {
              let t = k.X.now();
              this.renderScheduledAt < t &&
                ((this.renderScheduledAt = t),
                _.Wi.render(this.render, !1, !0));
            });
          let { latestValues: a, renderState: l } = o;
          (this.latestValues = a),
            (this.baseTarget = { ...a }),
            (this.initialValues = e.initial ? { ...a } : {}),
            (this.renderState = l),
            (this.parent = t),
            (this.props = e),
            (this.presenceContext = n),
            (this.depth = t ? t.depth + 1 : 0),
            (this.reducedMotionConfig = i),
            (this.options = s),
            (this.blockInitialAnimation = !!r),
            (this.isControllingVariants = (0, g.G)(e)),
            (this.isVariantNode = (0, g.M)(e)),
            this.isVariantNode && (this.variantChildren = new Set()),
            (this.manuallyAnimateOnMount = !!(t && t.current));
          let { willChange: u, ...c } = this.scrapeMotionValuesFromProps(
            e,
            {},
            this
          );
          for (let t in c) {
            let e = c[t];
            void 0 !== a[t] && (0, v.i)(e) && e.set(a[t], !1);
          }
        }
        mount(t) {
          (this.current = t),
            P.set(t, this),
            this.projection &&
              !this.projection.instance &&
              this.projection.mount(t),
            this.parent &&
              this.isVariantNode &&
              !this.isControllingVariants &&
              (this.removeFromVariantTree = this.parent.addVariantChild(this)),
            this.values.forEach((t, e) => this.bindToMotionValue(e, t)),
            f.current ||
              (function () {
                if (((f.current = !0), d.j)) {
                  if (window.matchMedia) {
                    let t = window.matchMedia("(prefers-reduced-motion)"),
                      e = () => (h.current = t.matches);
                    t.addListener(e), e();
                  } else h.current = !1;
                }
              })(),
            (this.shouldReduceMotion =
              "never" !== this.reducedMotionConfig &&
              ("always" === this.reducedMotionConfig || h.current)),
            this.parent && this.parent.children.add(this),
            this.update(this.props, this.presenceContext);
        }
        unmount() {
          for (let t in (P.delete(this.current),
          this.projection && this.projection.unmount(),
          (0, _.Pn)(this.notifyUpdate),
          (0, _.Pn)(this.render),
          this.valueSubscriptions.forEach((t) => t()),
          this.valueSubscriptions.clear(),
          this.removeFromVariantTree && this.removeFromVariantTree(),
          this.parent && this.parent.children.delete(this),
          this.events))
            this.events[t].clear();
          for (let t in this.features) {
            let e = this.features[t];
            e && (e.unmount(), (e.isMounted = !1));
          }
          this.current = null;
        }
        bindToMotionValue(t, e) {
          let n;
          this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
          let i = s.G.has(t),
            r = e.on("change", (e) => {
              (this.latestValues[t] = e),
                this.props.onUpdate && _.Wi.preRender(this.notifyUpdate),
                i && this.projection && (this.projection.isTransformDirty = !0);
            }),
            o = e.on("renderRequest", this.scheduleRender);
          window.MotionCheckAppearSync &&
            (n = window.MotionCheckAppearSync(this, t, e)),
            this.valueSubscriptions.set(t, () => {
              r(), o(), n && n(), e.owner && e.stop();
            });
        }
        sortNodePosition(t) {
          return this.current &&
            this.sortInstanceNodePosition &&
            this.type === t.type
            ? this.sortInstanceNodePosition(this.current, t.current)
            : 0;
        }
        updateFeatures() {
          let t = "animation";
          for (t in b.featureDefinitions) {
            let e = b.featureDefinitions[t];
            if (!e) continue;
            let { isEnabled: n, Feature: i } = e;
            if (
              (!this.features[t] &&
                i &&
                n(this.props) &&
                (this.features[t] = new i(this)),
              this.features[t])
            ) {
              let e = this.features[t];
              e.isMounted ? e.update() : (e.mount(), (e.isMounted = !0));
            }
          }
        }
        triggerBuild() {
          this.build(this.renderState, this.latestValues, this.props);
        }
        measureViewportBox() {
          return this.current
            ? this.measureInstanceViewportBox(this.current, this.props)
            : (0, R.dO)();
        }
        getStaticValue(t) {
          return this.latestValues[t];
        }
        setStaticValue(t, e) {
          this.latestValues[t] = e;
        }
        update(t, e) {
          (t.transformTemplate || this.props.transformTemplate) &&
            this.scheduleRender(),
            (this.prevProps = this.props),
            (this.props = t),
            (this.prevPresenceContext = this.presenceContext),
            (this.presenceContext = e);
          for (let e = 0; e < D.length; e++) {
            let n = D[e];
            this.propEventSubscriptions[n] &&
              (this.propEventSubscriptions[n](),
              delete this.propEventSubscriptions[n]);
            let i = t["on" + n];
            i && (this.propEventSubscriptions[n] = this.on(n, i));
          }
          (this.prevMotionValues = (function (t, e, n) {
            for (let i in e) {
              let r = e[i],
                o = n[i];
              if ((0, v.i)(r)) t.addValue(i, r);
              else if ((0, v.i)(o)) t.addValue(i, (0, m.BX)(r, { owner: t }));
              else if (o !== r) {
                if (t.hasValue(i)) {
                  let e = t.getValue(i);
                  !0 === e.liveStyle ? e.jump(r) : e.hasAnimated || e.set(r);
                } else {
                  let e = t.getStaticValue(i);
                  t.addValue(i, (0, m.BX)(void 0 !== e ? e : r, { owner: t }));
                }
              }
            }
            for (let i in n) void 0 === e[i] && t.removeValue(i);
            return e;
          })(
            this,
            this.scrapeMotionValuesFromProps(t, this.prevProps, this),
            this.prevMotionValues
          )),
            this.handleChildMotionValue && this.handleChildMotionValue();
        }
        getProps() {
          return this.props;
        }
        getVariant(t) {
          return this.props.variants ? this.props.variants[t] : void 0;
        }
        getDefaultTransition() {
          return this.props.transition;
        }
        getTransformPagePoint() {
          return this.props.transformPagePoint;
        }
        getClosestVariantNode() {
          return this.isVariantNode
            ? this
            : this.parent
            ? this.parent.getClosestVariantNode()
            : void 0;
        }
        addVariantChild(t) {
          let e = this.getClosestVariantNode();
          if (e)
            return (
              e.variantChildren && e.variantChildren.add(t),
              () => e.variantChildren.delete(t)
            );
        }
        addValue(t, e) {
          let n = this.values.get(t);
          e !== n &&
            (n && this.removeValue(t),
            this.bindToMotionValue(t, e),
            this.values.set(t, e),
            (this.latestValues[t] = e.get()));
        }
        removeValue(t) {
          this.values.delete(t);
          let e = this.valueSubscriptions.get(t);
          e && (e(), this.valueSubscriptions.delete(t)),
            delete this.latestValues[t],
            this.removeValueFromRenderState(t, this.renderState);
        }
        hasValue(t) {
          return this.values.has(t);
        }
        getValue(t, e) {
          if (this.props.values && this.props.values[t])
            return this.props.values[t];
          let n = this.values.get(t);
          return (
            void 0 === n &&
              void 0 !== e &&
              ((n = (0, m.BX)(null === e ? void 0 : e, { owner: this })),
              this.addValue(t, n)),
            n
          );
        }
        readValue(t, e) {
          var n;
          let i =
            void 0 === this.latestValues[t] && this.current
              ? null !== (n = this.getBaseTargetFromProps(this.props, t)) &&
                void 0 !== n
                ? n
                : this.readValueFromInstance(this.current, t, this.options)
              : this.latestValues[t];
          return (
            null != i &&
              ("string" == typeof i && ((0, x.P)(i) || (0, S.W)(i))
                ? (i = parseFloat(i))
                : !M(i) && C.P.test(e) && (i = (0, A.T)(t, e)),
              this.setBaseTarget(t, (0, v.i)(i) ? i.get() : i)),
            (0, v.i)(i) ? i.get() : i
          );
        }
        setBaseTarget(t, e) {
          this.baseTarget[t] = e;
        }
        getBaseTarget(t) {
          var e;
          let n;
          let { initial: i } = this.props;
          if ("string" == typeof i || "object" == typeof i) {
            let r = (0, y.o)(
              this.props,
              i,
              null === (e = this.presenceContext) || void 0 === e
                ? void 0
                : e.custom
            );
            r && (n = r[t]);
          }
          if (i && void 0 !== n) return n;
          let r = this.getBaseTargetFromProps(this.props, t);
          return void 0 === r || (0, v.i)(r)
            ? void 0 !== this.initialValues[t] && void 0 === n
              ? void 0
              : this.baseTarget[t]
            : r;
        }
        on(t, e) {
          return (
            this.events[t] || (this.events[t] = new p.L()),
            this.events[t].add(e)
          );
        }
        notify(t, ...e) {
          this.events[t] && this.events[t].notify(...e);
        }
      }
      var L = n(3078);
      class I extends V {
        constructor() {
          super(...arguments), (this.KeyframeResolver = L.s);
        }
        sortInstanceNodePosition(t, e) {
          return 2 & t.compareDocumentPosition(e) ? 1 : -1;
        }
        getBaseTargetFromProps(t, e) {
          return t.style ? t.style[e] : void 0;
        }
        removeValueFromRenderState(t, { vars: e, style: n }) {
          delete e[t], delete n[t];
        }
      }
      class B extends I {
        constructor() {
          super(...arguments),
            (this.type = "html"),
            (this.applyWillChange = !0),
            (this.renderInstance = l.N);
        }
        readValueFromInstance(t, e) {
          if (s.G.has(e)) {
            let t = (0, u.A)(e);
            return (t && t.default) || 0;
          }
          {
            let n = window.getComputedStyle(t),
              i = ((0, o.f)(e) ? n.getPropertyValue(e) : n[e]) || 0;
            return "string" == typeof i ? i.trim() : i;
          }
        }
        measureInstanceViewportBox(t, { transformPagePoint: e }) {
          return (0, c.J)(t, e);
        }
        build(t, e, n) {
          (0, r.r)(t, e, n.transformTemplate);
        }
        scrapeMotionValuesFromProps(t, e, n) {
          return (0, a.U)(t, e, n);
        }
        handleChildMotionValue() {
          this.childSubscription &&
            (this.childSubscription(), delete this.childSubscription);
          let { children: t } = this.props;
          (0, v.i)(t) &&
            (this.childSubscription = t.on("change", (t) => {
              this.current && (this.current.textContent = `${t}`);
            }));
        }
      }
      var F = n(875),
        W = n(2622),
        N = n(1580),
        U = n(2394),
        z = n(545),
        H = n(5969);
      class $ extends I {
        constructor() {
          super(...arguments),
            (this.type = "svg"),
            (this.isSVGTag = !1),
            (this.measureInstanceViewportBox = R.dO);
        }
        getBaseTargetFromProps(t, e) {
          return t[e];
        }
        readValueFromInstance(t, e) {
          if (s.G.has(e)) {
            let t = (0, u.A)(e);
            return (t && t.default) || 0;
          }
          return (e = U.s.has(e) ? e : (0, N.D)(e)), t.getAttribute(e);
        }
        scrapeMotionValuesFromProps(t, e, n) {
          return (0, F.U)(t, e, n);
        }
        build(t, e, n) {
          (0, W.i)(t, e, this.isSVGTag, n.transformTemplate);
        }
        renderInstance(t, e, n, i) {
          (0, z.K)(t, e, n, i);
        }
        mount(t) {
          (this.isSVGTag = (0, H.a)(t.tagName)), super.mount(t);
        }
      }
      var X = n(2860);
      let Y = (t, e) =>
        (0, X.q)(t)
          ? new $(e)
          : new B(e, { allowProjection: t !== i.Fragment });
    },
    1580: function (t, e, n) {
      "use strict";
      n.d(e, {
        D: function () {
          return i;
        },
      });
      let i = (t) => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase();
    },
    1534: function (t, e, n) {
      "use strict";
      n.d(e, {
        f: function () {
          return r;
        },
        t: function () {
          return s;
        },
      });
      let i = (t) => (e) => "string" == typeof e && e.startsWith(t),
        r = i("--"),
        o = i("var(--"),
        s = (t) => !!o(t) && a.test(t.split("/*")[0].trim()),
        a =
          /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
    },
    2860: function (t, e, n) {
      "use strict";
      n.d(e, {
        q: function () {
          return r;
        },
      });
      let i = [
        "animate",
        "circle",
        "defs",
        "desc",
        "ellipse",
        "g",
        "image",
        "line",
        "filter",
        "marker",
        "mask",
        "metadata",
        "path",
        "pattern",
        "polygon",
        "polyline",
        "rect",
        "stop",
        "switch",
        "symbol",
        "svg",
        "text",
        "tspan",
        "use",
        "view",
      ];
      function r(t) {
        if ("string" != typeof t || t.includes("-"));
        else if (i.indexOf(t) > -1 || /[A-Z]/u.test(t)) return !0;
        return !1;
      }
    },
    5014: function (t, e, n) {
      "use strict";
      n.d(e, {
        Ei: function () {
          return h;
        },
        lw: function () {
          return f;
        },
        mP: function () {
          return a;
        },
        z2: function () {
          return s;
        },
      });
      var i = n(6019),
        r = n(783),
        o = n(5480);
      let s = new Set([
          "width",
          "height",
          "top",
          "left",
          "right",
          "bottom",
          "x",
          "y",
          "translateX",
          "translateY",
        ]),
        a = (t) => t === r.Rx || t === o.px,
        l = (t, e) => parseFloat(t.split(", ")[e]),
        u =
          (t, e) =>
          (n, { transform: i }) => {
            if ("none" === i || !i) return 0;
            let r = i.match(/^matrix3d\((.+)\)$/u);
            if (r) return l(r[1], e);
            {
              let e = i.match(/^matrix\((.+)\)$/u);
              return e ? l(e[1], t) : 0;
            }
          },
        c = new Set(["x", "y", "z"]),
        d = i._.filter((t) => !c.has(t));
      function h(t) {
        let e = [];
        return (
          d.forEach((n) => {
            let i = t.getValue(n);
            void 0 !== i &&
              (e.push([n, i.get()]), i.set(n.startsWith("scale") ? 1 : 0));
          }),
          e
        );
      }
      let f = {
        width: ({ x: t }, { paddingLeft: e = "0", paddingRight: n = "0" }) =>
          t.max - t.min - parseFloat(e) - parseFloat(n),
        height: ({ y: t }, { paddingTop: e = "0", paddingBottom: n = "0" }) =>
          t.max - t.min - parseFloat(e) - parseFloat(n),
        top: (t, { top: e }) => parseFloat(e),
        left: (t, { left: e }) => parseFloat(e),
        bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
        right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
        x: u(4, 13),
        y: u(5, 14),
      };
      (f.translateX = f.x), (f.translateY = f.y);
    },
    6450: function (t, e, n) {
      "use strict";
      n.d(e, {
        T: function () {
          return s;
        },
      });
      var i = n(3646),
        r = n(4913),
        o = n(781);
      function s(t, e) {
        let n = (0, o.A)(t);
        return (
          n !== r.h && (n = i.P),
          n.getAnimatableNone ? n.getAnimatableNone(e) : void 0
        );
      }
    },
    781: function (t, e, n) {
      "use strict";
      n.d(e, {
        A: function () {
          return s;
        },
      });
      var i = n(146),
        r = n(4913);
      let o = {
          ...n(7755).j,
          color: i.$,
          backgroundColor: i.$,
          outlineColor: i.$,
          fill: i.$,
          stroke: i.$,
          borderColor: i.$,
          borderTopColor: i.$,
          borderRightColor: i.$,
          borderBottomColor: i.$,
          borderLeftColor: i.$,
          filter: r.h,
          WebkitFilter: r.h,
        },
        s = (t) => o[t];
    },
    3769: function (t, e, n) {
      "use strict";
      n.d(e, {
        $: function () {
          return s;
        },
        C: function () {
          return a;
        },
      });
      var i = n(783),
        r = n(5480),
        o = n(2649);
      let s = [
          i.Rx,
          r.px,
          r.aQ,
          r.RW,
          r.vw,
          r.vh,
          { test: (t) => "auto" === t, parse: (t) => t },
        ],
        a = (t) => s.find((0, o.l)(t));
    },
    7755: function (t, e, n) {
      "use strict";
      n.d(e, {
        j: function () {
          return s;
        },
      });
      var i = n(783),
        r = n(5480);
      let o = { ...i.Rx, transform: Math.round },
        s = {
          borderWidth: r.px,
          borderTopWidth: r.px,
          borderRightWidth: r.px,
          borderBottomWidth: r.px,
          borderLeftWidth: r.px,
          borderRadius: r.px,
          radius: r.px,
          borderTopLeftRadius: r.px,
          borderTopRightRadius: r.px,
          borderBottomRightRadius: r.px,
          borderBottomLeftRadius: r.px,
          width: r.px,
          maxWidth: r.px,
          height: r.px,
          maxHeight: r.px,
          size: r.px,
          top: r.px,
          right: r.px,
          bottom: r.px,
          left: r.px,
          padding: r.px,
          paddingTop: r.px,
          paddingRight: r.px,
          paddingBottom: r.px,
          paddingLeft: r.px,
          margin: r.px,
          marginTop: r.px,
          marginRight: r.px,
          marginBottom: r.px,
          marginLeft: r.px,
          rotate: r.RW,
          rotateX: r.RW,
          rotateY: r.RW,
          rotateZ: r.RW,
          scale: i.bA,
          scaleX: i.bA,
          scaleY: i.bA,
          scaleZ: i.bA,
          skew: r.RW,
          skewX: r.RW,
          skewY: r.RW,
          distance: r.px,
          translateX: r.px,
          translateY: r.px,
          translateZ: r.px,
          x: r.px,
          y: r.px,
          z: r.px,
          perspective: r.px,
          transformPerspective: r.px,
          opacity: i.Fq,
          originX: r.$C,
          originY: r.$C,
          originZ: r.px,
          zIndex: o,
          backgroundPositionX: r.px,
          backgroundPositionY: r.px,
          fillOpacity: i.Fq,
          strokeOpacity: i.Fq,
          numOctaves: o,
        };
    },
    2649: function (t, e, n) {
      "use strict";
      n.d(e, {
        l: function () {
          return i;
        },
      });
      let i = (t) => (e) => e.test(t);
    },
    4651: function (t, e, n) {
      "use strict";
      n.d(e, {
        r: function () {
          return u;
        },
      });
      var i = n(6019);
      let r = (t, e) => (e && "number" == typeof t ? e.transform(t) : t);
      var o = n(7755);
      let s = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective",
        },
        a = i._.length;
      var l = n(1534);
      function u(t, e, n) {
        let { style: u, vars: c, transformOrigin: d } = t,
          h = !1,
          f = !1;
        for (let t in e) {
          let n = e[t];
          if (i.G.has(t)) {
            h = !0;
            continue;
          }
          if ((0, l.f)(t)) {
            c[t] = n;
            continue;
          }
          {
            let e = r(n, o.j[t]);
            t.startsWith("origin") ? ((f = !0), (d[t] = e)) : (u[t] = e);
          }
        }
        if (
          (!e.transform &&
            (h || n
              ? (u.transform = (function (t, e, n) {
                  let l = "",
                    u = !0;
                  for (let c = 0; c < a; c++) {
                    let a = i._[c],
                      d = t[a];
                    if (void 0 === d) continue;
                    let h = !0;
                    if (
                      !(h =
                        "number" == typeof d
                          ? d === (a.startsWith("scale") ? 1 : 0)
                          : 0 === parseFloat(d)) ||
                      n
                    ) {
                      let t = r(d, o.j[a]);
                      if (!h) {
                        u = !1;
                        let e = s[a] || a;
                        l += `${e}(${t}) `;
                      }
                      n && (e[a] = t);
                    }
                  }
                  return (
                    (l = l.trim()),
                    n ? (l = n(e, u ? "" : l)) : u && (l = "none"),
                    l
                  );
                })(e, t.transform, n))
              : u.transform && (u.transform = "none")),
          f)
        ) {
          let { originX: t = "50%", originY: e = "50%", originZ: n = 0 } = d;
          u.transformOrigin = `${t} ${e} ${n}`;
        }
      }
    },
    9979: function (t, e, n) {
      "use strict";
      function i(t, { style: e, vars: n }, i, r) {
        for (let o in (Object.assign(t.style, e, r && r.getProjectionStyles(i)),
        n))
          t.style.setProperty(o, n[o]);
      }
      n.d(e, {
        N: function () {
          return i;
        },
      });
    },
    1315: function (t, e, n) {
      "use strict";
      n.d(e, {
        U: function () {
          return o;
        },
      });
      var i = n(2020),
        r = n(8322);
      function o(t, e, n) {
        var o;
        let { style: s } = t,
          a = {};
        for (let l in s)
          ((0, r.i)(s[l]) ||
            (e.style && (0, r.i)(e.style[l])) ||
            (0, i.j)(l, t) ||
            (null === (o = null == n ? void 0 : n.getValue(l)) || void 0 === o
              ? void 0
              : o.liveStyle) !== void 0) &&
            (a[l] = s[l]);
        return (
          n && s && "string" == typeof s.willChange && (n.applyWillChange = !1),
          a
        );
      }
    },
    6019: function (t, e, n) {
      "use strict";
      n.d(e, {
        G: function () {
          return r;
        },
        _: function () {
          return i;
        },
      });
      let i = [
          "transformPerspective",
          "x",
          "y",
          "z",
          "translateX",
          "translateY",
          "translateZ",
          "scale",
          "scaleX",
          "scaleY",
          "rotate",
          "rotateX",
          "rotateY",
          "rotateZ",
          "skew",
          "skewX",
          "skewY",
        ],
        r = new Set(i);
    },
    2622: function (t, e, n) {
      "use strict";
      n.d(e, {
        i: function () {
          return l;
        },
      });
      var i = n(4651),
        r = n(5480);
      function o(t, e, n) {
        return "string" == typeof t ? t : r.px.transform(e + n * t);
      }
      let s = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
        a = { offset: "strokeDashoffset", array: "strokeDasharray" };
      function l(
        t,
        {
          attrX: e,
          attrY: n,
          attrScale: l,
          originX: u,
          originY: c,
          pathLength: d,
          pathSpacing: h = 1,
          pathOffset: f = 0,
          ...p
        },
        m,
        v
      ) {
        if (((0, i.r)(t, p, v), m)) {
          t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
          return;
        }
        (t.attrs = t.style), (t.style = {});
        let { attrs: g, style: y, dimensions: b } = t;
        g.transform && (b && (y.transform = g.transform), delete g.transform),
          b &&
            (void 0 !== u || void 0 !== c || y.transform) &&
            (y.transformOrigin = (function (t, e, n) {
              let i = o(e, t.x, t.width),
                r = o(n, t.y, t.height);
              return `${i} ${r}`;
            })(b, void 0 !== u ? u : 0.5, void 0 !== c ? c : 0.5)),
          void 0 !== e && (g.x = e),
          void 0 !== n && (g.y = n),
          void 0 !== l && (g.scale = l),
          void 0 !== d &&
            (function (t, e, n = 1, i = 0, o = !0) {
              t.pathLength = 1;
              let l = o ? s : a;
              t[l.offset] = r.px.transform(-i);
              let u = r.px.transform(e),
                c = r.px.transform(n);
              t[l.array] = `${u} ${c}`;
            })(g, d, h, f, !1);
      }
    },
    2394: function (t, e, n) {
      "use strict";
      n.d(e, {
        s: function () {
          return i;
        },
      });
      let i = new Set([
        "baseFrequency",
        "diffuseConstant",
        "kernelMatrix",
        "kernelUnitLength",
        "keySplines",
        "keyTimes",
        "limitingConeAngle",
        "markerHeight",
        "markerWidth",
        "numOctaves",
        "targetX",
        "targetY",
        "surfaceScale",
        "specularConstant",
        "specularExponent",
        "stdDeviation",
        "tableValues",
        "viewBox",
        "gradientTransform",
        "pathLength",
        "startOffset",
        "textLength",
        "lengthAdjust",
      ]);
    },
    5969: function (t, e, n) {
      "use strict";
      n.d(e, {
        a: function () {
          return i;
        },
      });
      let i = (t) => "string" == typeof t && "svg" === t.toLowerCase();
    },
    545: function (t, e, n) {
      "use strict";
      n.d(e, {
        K: function () {
          return s;
        },
      });
      var i = n(1580),
        r = n(9979),
        o = n(2394);
      function s(t, e, n, s) {
        for (let n in ((0, r.N)(t, e, void 0, s), e.attrs))
          t.setAttribute(o.s.has(n) ? n : (0, i.D)(n), e.attrs[n]);
      }
    },
    875: function (t, e, n) {
      "use strict";
      n.d(e, {
        U: function () {
          return s;
        },
      });
      var i = n(8322),
        r = n(1315),
        o = n(6019);
      function s(t, e, n) {
        let s = (0, r.U)(t, e, n);
        for (let n in t)
          ((0, i.i)(t[n]) || (0, i.i)(e[n])) &&
            (s[
              -1 !== o._.indexOf(n)
                ? "attr" + n.charAt(0).toUpperCase() + n.substring(1)
                : n
            ] = t[n]);
        return s;
      }
    },
    3653: function (t, e, n) {
      "use strict";
      n.d(e, {
        e: function () {
          return d;
        },
        m: function () {
          return c;
        },
      });
      var i = n(5014),
        r = n(6219);
      let o = new Set(),
        s = !1,
        a = !1;
      function l() {
        if (a) {
          let t = Array.from(o).filter((t) => t.needsMeasurement),
            e = new Set(t.map((t) => t.element)),
            n = new Map();
          e.forEach((t) => {
            let e = (0, i.Ei)(t);
            e.length && (n.set(t, e), t.render());
          }),
            t.forEach((t) => t.measureInitialState()),
            e.forEach((t) => {
              t.render();
              let e = n.get(t);
              e &&
                e.forEach(([e, n]) => {
                  var i;
                  null === (i = t.getValue(e)) || void 0 === i || i.set(n);
                });
            }),
            t.forEach((t) => t.measureEndState()),
            t.forEach((t) => {
              void 0 !== t.suspendedScrollY &&
                window.scrollTo(0, t.suspendedScrollY);
            });
        }
        (a = !1), (s = !1), o.forEach((t) => t.complete()), o.clear();
      }
      function u() {
        o.forEach((t) => {
          t.readKeyframes(), t.needsMeasurement && (a = !0);
        });
      }
      function c() {
        u(), l();
      }
      class d {
        constructor(t, e, n, i, r, o = !1) {
          (this.isComplete = !1),
            (this.isAsync = !1),
            (this.needsMeasurement = !1),
            (this.isScheduled = !1),
            (this.unresolvedKeyframes = [...t]),
            (this.onComplete = e),
            (this.name = n),
            (this.motionValue = i),
            (this.element = r),
            (this.isAsync = o);
        }
        scheduleResolve() {
          (this.isScheduled = !0),
            this.isAsync
              ? (o.add(this),
                s || ((s = !0), r.Wi.read(u), r.Wi.resolveKeyframes(l)))
              : (this.readKeyframes(), this.complete());
        }
        readKeyframes() {
          let {
            unresolvedKeyframes: t,
            name: e,
            element: n,
            motionValue: i,
          } = this;
          for (let r = 0; r < t.length; r++)
            if (null === t[r]) {
              if (0 === r) {
                let r = null == i ? void 0 : i.get(),
                  o = t[t.length - 1];
                if (void 0 !== r) t[0] = r;
                else if (n && e) {
                  let i = n.readValue(e, o);
                  null != i && (t[0] = i);
                }
                void 0 === t[0] && (t[0] = o), i && void 0 === r && i.set(t[0]);
              } else t[r] = t[r - 1];
            }
        }
        setFinalKeyframe() {}
        measureInitialState() {}
        renderEndStyles() {}
        measureEndState() {}
        complete() {
          (this.isComplete = !0),
            this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
            o.delete(this);
        }
        cancel() {
          this.isComplete || ((this.isScheduled = !1), o.delete(this));
        }
        resume() {
          this.isComplete || this.scheduleResolve();
        }
      }
    },
    3795: function (t, e, n) {
      "use strict";
      n.d(e, {
        G: function () {
          return s;
        },
        M: function () {
          return a;
        },
      });
      var i = n(4572),
        r = n(6859),
        o = n(3552);
      function s(t) {
        return (0, i.H)(t.animate) || o.V.some((e) => (0, r.$)(t[e]));
      }
      function a(t) {
        return !!(s(t) || t.variants);
      }
    },
    6859: function (t, e, n) {
      "use strict";
      function i(t) {
        return "string" == typeof t || Array.isArray(t);
      }
      n.d(e, {
        $: function () {
          return i;
        },
      });
    },
    8595: function (t, e, n) {
      "use strict";
      function i(t) {
        let e = [{}, {}];
        return (
          null == t ||
            t.values.forEach((t, n) => {
              (e[0][n] = t.get()), (e[1][n] = t.getVelocity());
            }),
          e
        );
      }
      function r(t, e, n, r) {
        if ("function" == typeof e) {
          let [o, s] = i(r);
          e = e(void 0 !== n ? n : t.custom, o, s);
        }
        if (
          ("string" == typeof e && (e = t.variants && t.variants[e]),
          "function" == typeof e)
        ) {
          let [o, s] = i(r);
          e = e(void 0 !== n ? n : t.custom, o, s);
        }
        return e;
      }
      n.d(e, {
        o: function () {
          return r;
        },
      });
    },
    3552: function (t, e, n) {
      "use strict";
      n.d(e, {
        V: function () {
          return r;
        },
        e: function () {
          return i;
        },
      });
      let i = [
          "animate",
          "whileInView",
          "whileFocus",
          "whileHover",
          "whileTap",
          "whileDrag",
          "exit",
        ],
        r = ["initial", ...i];
    },
    565: function (t, e, n) {
      "use strict";
      n.d(e, {
        c: function () {
          return i;
        },
      });
      let i = { skipAnimations: !1, useManualTiming: !1 };
    },
    8746: function (t, e, n) {
      "use strict";
      function i(t, e) {
        -1 === t.indexOf(e) && t.push(e);
      }
      function r(t, e) {
        let n = t.indexOf(e);
        n > -1 && t.splice(n, 1);
      }
      n.d(e, {
        cl: function () {
          return r;
        },
        y4: function () {
          return i;
        },
      });
    },
    1506: function (t, e, n) {
      "use strict";
      n.d(e, {
        u: function () {
          return i;
        },
      });
      let i = (t, e, n) => (n > e ? e : n < t ? t : n);
    },
    9047: function (t, e, n) {
      "use strict";
      n.d(e, {
        K: function () {
          return r;
        },
        k: function () {
          return o;
        },
      });
      var i = n(9276);
      let r = i.Z,
        o = i.Z;
    },
    7282: function (t, e, n) {
      "use strict";
      n.d(e, {
        j: function () {
          return i;
        },
      });
      let i = "undefined" != typeof window;
    },
    4386: function (t, e, n) {
      "use strict";
      n.d(e, {
        P: function () {
          return i;
        },
      });
      let i = (t) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);
    },
    7576: function (t, e, n) {
      "use strict";
      function i(t) {
        return (
          t &&
          "object" == typeof t &&
          Object.prototype.hasOwnProperty.call(t, "current")
        );
      }
      n.d(e, {
        I: function () {
          return i;
        },
      });
    },
    9102: function (t, e, n) {
      "use strict";
      n.d(e, {
        W: function () {
          return i;
        },
      });
      let i = (t) => /^0[^.\s]+$/u.test(t);
    },
    5004: function (t, e, n) {
      "use strict";
      n.d(e, {
        t: function () {
          return i;
        },
      });
      let i = (t, e, n) => t + (e - t) * n;
    },
    9276: function (t, e, n) {
      "use strict";
      n.d(e, {
        Z: function () {
          return i;
        },
      });
      let i = (t) => t;
    },
    9654: function (t, e, n) {
      "use strict";
      n.d(e, {
        z: function () {
          return r;
        },
      });
      let i = (t, e) => (n) => e(t(n)),
        r = (...t) => t.reduce(i);
    },
    3217: function (t, e, n) {
      "use strict";
      n.d(e, {
        Y: function () {
          return i;
        },
      });
      let i = (t, e, n) => {
        let i = e - t;
        return 0 === i ? 1 : (n - t) / i;
      };
    },
    9155: function (t, e, n) {
      "use strict";
      n.d(e, {
        Y: function () {
          return o;
        },
        p: function () {
          return r;
        },
      });
      var i = n(6925);
      let r = (t) => !!(t && "object" == typeof t && t.mix && t.toValue),
        o = (t) => ((0, i.C)(t) ? t[t.length - 1] || 0 : t);
    },
    2428: function (t, e, n) {
      "use strict";
      n.d(e, {
        L: function () {
          return r;
        },
      });
      var i = n(8746);
      class r {
        constructor() {
          this.subscriptions = [];
        }
        add(t) {
          return (
            (0, i.y4)(this.subscriptions, t),
            () => (0, i.cl)(this.subscriptions, t)
          );
        }
        notify(t, e, n) {
          let i = this.subscriptions.length;
          if (i) {
            if (1 === i) this.subscriptions[0](t, e, n);
            else
              for (let r = 0; r < i; r++) {
                let i = this.subscriptions[r];
                i && i(t, e, n);
              }
          }
        }
        getSize() {
          return this.subscriptions.length;
        }
        clear() {
          this.subscriptions.length = 0;
        }
      }
    },
    557: function (t, e, n) {
      "use strict";
      n.d(e, {
        X: function () {
          return r;
        },
        w: function () {
          return i;
        },
      });
      let i = (t) => 1e3 * t,
        r = (t) => t / 1e3;
    },
    458: function (t, e, n) {
      "use strict";
      n.d(e, {
        h: function () {
          return r;
        },
      });
      var i = n(2265);
      function r(t) {
        let e = (0, i.useRef)(null);
        return null === e.current && (e.current = t()), e.current;
      }
    },
    9033: function (t, e, n) {
      "use strict";
      n.d(e, {
        L: function () {
          return r;
        },
      });
      var i = n(2265);
      let r = n(7282).j ? i.useLayoutEffect : i.useEffect;
    },
    3476: function (t, e, n) {
      "use strict";
      function i(t, e) {
        return e ? (1e3 / e) * t : 0;
      }
      n.d(e, {
        R: function () {
          return i;
        },
      });
    },
    804: function (t, e, n) {
      "use strict";
      n.d(e, {
        BX: function () {
          return c;
        },
        Hg: function () {
          return u;
        },
      });
      var i = n(2428),
        r = n(3476),
        o = n(9993),
        s = n(6219);
      let a = (t) => !isNaN(parseFloat(t)),
        l = { current: void 0 };
      class u {
        constructor(t, e = {}) {
          (this.version = "11.5.6"),
            (this.canTrackVelocity = null),
            (this.events = {}),
            (this.updateAndNotify = (t, e = !0) => {
              let n = o.X.now();
              this.updatedAt !== n && this.setPrevFrameValue(),
                (this.prev = this.current),
                this.setCurrent(t),
                this.current !== this.prev &&
                  this.events.change &&
                  this.events.change.notify(this.current),
                e &&
                  this.events.renderRequest &&
                  this.events.renderRequest.notify(this.current);
            }),
            (this.hasAnimated = !1),
            this.setCurrent(t),
            (this.owner = e.owner);
        }
        setCurrent(t) {
          (this.current = t),
            (this.updatedAt = o.X.now()),
            null === this.canTrackVelocity &&
              void 0 !== t &&
              (this.canTrackVelocity = a(this.current));
        }
        setPrevFrameValue(t = this.current) {
          (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
        }
        onChange(t) {
          return this.on("change", t);
        }
        on(t, e) {
          this.events[t] || (this.events[t] = new i.L());
          let n = this.events[t].add(e);
          return "change" === t
            ? () => {
                n(),
                  s.Wi.read(() => {
                    this.events.change.getSize() || this.stop();
                  });
              }
            : n;
        }
        clearListeners() {
          for (let t in this.events) this.events[t].clear();
        }
        attach(t, e) {
          (this.passiveEffect = t), (this.stopPassiveEffect = e);
        }
        set(t, e = !0) {
          e && this.passiveEffect
            ? this.passiveEffect(t, this.updateAndNotify)
            : this.updateAndNotify(t, e);
        }
        setWithVelocity(t, e, n) {
          this.set(e),
            (this.prev = void 0),
            (this.prevFrameValue = t),
            (this.prevUpdatedAt = this.updatedAt - n);
        }
        jump(t, e = !0) {
          this.updateAndNotify(t),
            (this.prev = t),
            (this.prevUpdatedAt = this.prevFrameValue = void 0),
            e && this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
        get() {
          return l.current && l.current.push(this), this.current;
        }
        getPrevious() {
          return this.prev;
        }
        getVelocity() {
          let t = o.X.now();
          if (
            !this.canTrackVelocity ||
            void 0 === this.prevFrameValue ||
            t - this.updatedAt > 30
          )
            return 0;
          let e = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
          return (0, r.R)(
            parseFloat(this.current) - parseFloat(this.prevFrameValue),
            e
          );
        }
        start(t) {
          return (
            this.stop(),
            new Promise((e) => {
              (this.hasAnimated = !0),
                (this.animation = t(e)),
                this.events.animationStart &&
                  this.events.animationStart.notify();
            }).then(() => {
              this.events.animationComplete &&
                this.events.animationComplete.notify(),
                this.clearAnimation();
            })
          );
        }
        stop() {
          this.animation &&
            (this.animation.stop(),
            this.events.animationCancel &&
              this.events.animationCancel.notify()),
            this.clearAnimation();
        }
        isAnimating() {
          return !!this.animation;
        }
        clearAnimation() {
          delete this.animation;
        }
        destroy() {
          this.clearListeners(),
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
      }
      function c(t, e) {
        return new u(t, e);
      }
    },
    5778: function (t, e, n) {
      "use strict";
      n.d(e, {
        $: function () {
          return r;
        },
      });
      var i = n(1583);
      let r = {
        test: (0, n(3338).i)("#"),
        parse: function (t) {
          let e = "",
            n = "",
            i = "",
            r = "";
          return (
            t.length > 5
              ? ((e = t.substring(1, 3)),
                (n = t.substring(3, 5)),
                (i = t.substring(5, 7)),
                (r = t.substring(7, 9)))
              : ((e = t.substring(1, 2)),
                (n = t.substring(2, 3)),
                (i = t.substring(3, 4)),
                (r = t.substring(4, 5)),
                (e += e),
                (n += n),
                (i += i),
                (r += r)),
            {
              red: parseInt(e, 16),
              green: parseInt(n, 16),
              blue: parseInt(i, 16),
              alpha: r ? parseInt(r, 16) / 255 : 1,
            }
          );
        },
        transform: i.m.transform,
      };
    },
    598: function (t, e, n) {
      "use strict";
      n.d(e, {
        J: function () {
          return a;
        },
      });
      var i = n(783),
        r = n(5480),
        o = n(7292),
        s = n(3338);
      let a = {
        test: (0, s.i)("hsl", "hue"),
        parse: (0, s.d)("hue", "saturation", "lightness"),
        transform: ({ hue: t, saturation: e, lightness: n, alpha: s = 1 }) =>
          "hsla(" +
          Math.round(t) +
          ", " +
          r.aQ.transform((0, o.Nw)(e)) +
          ", " +
          r.aQ.transform((0, o.Nw)(n)) +
          ", " +
          (0, o.Nw)(i.Fq.transform(s)) +
          ")",
      };
    },
    146: function (t, e, n) {
      "use strict";
      n.d(e, {
        $: function () {
          return a;
        },
      });
      var i = n(7292),
        r = n(5778),
        o = n(598),
        s = n(1583);
      let a = {
        test: (t) => s.m.test(t) || r.$.test(t) || o.J.test(t),
        parse: (t) =>
          s.m.test(t)
            ? s.m.parse(t)
            : o.J.test(t)
            ? o.J.parse(t)
            : r.$.parse(t),
        transform: (t) =>
          (0, i.HD)(t)
            ? t
            : t.hasOwnProperty("red")
            ? s.m.transform(t)
            : o.J.transform(t),
      };
    },
    1583: function (t, e, n) {
      "use strict";
      n.d(e, {
        m: function () {
          return u;
        },
      });
      var i = n(1506),
        r = n(783),
        o = n(7292),
        s = n(3338);
      let a = (t) => (0, i.u)(0, 255, t),
        l = { ...r.Rx, transform: (t) => Math.round(a(t)) },
        u = {
          test: (0, s.i)("rgb", "red"),
          parse: (0, s.d)("red", "green", "blue"),
          transform: ({ red: t, green: e, blue: n, alpha: i = 1 }) =>
            "rgba(" +
            l.transform(t) +
            ", " +
            l.transform(e) +
            ", " +
            l.transform(n) +
            ", " +
            (0, o.Nw)(r.Fq.transform(i)) +
            ")",
        };
    },
    3338: function (t, e, n) {
      "use strict";
      n.d(e, {
        d: function () {
          return o;
        },
        i: function () {
          return r;
        },
      });
      var i = n(7292);
      let r = (t, e) => (n) =>
          !!(
            ((0, i.HD)(n) && i.mj.test(n) && n.startsWith(t)) ||
            (e && !(0, i.Rw)(n) && Object.prototype.hasOwnProperty.call(n, e))
          ),
        o = (t, e, n) => (r) => {
          if (!(0, i.HD)(r)) return r;
          let [o, s, a, l] = r.match(i.KP);
          return {
            [t]: parseFloat(o),
            [e]: parseFloat(s),
            [n]: parseFloat(a),
            alpha: void 0 !== l ? parseFloat(l) : 1,
          };
        };
    },
    4913: function (t, e, n) {
      "use strict";
      n.d(e, {
        h: function () {
          return l;
        },
      });
      var i = n(3646),
        r = n(7292);
      let o = new Set(["brightness", "contrast", "saturate", "opacity"]);
      function s(t) {
        let [e, n] = t.slice(0, -1).split("(");
        if ("drop-shadow" === e) return t;
        let [i] = n.match(r.KP) || [];
        if (!i) return t;
        let s = n.replace(i, ""),
          a = o.has(e) ? 1 : 0;
        return i !== n && (a *= 100), e + "(" + a + s + ")";
      }
      let a = /\b([a-z-]*)\(.*?\)/gu,
        l = {
          ...i.P,
          getAnimatableNone: (t) => {
            let e = t.match(a);
            return e ? e.map(s).join(" ") : t;
          },
        };
    },
    3646: function (t, e, n) {
      "use strict";
      n.d(e, {
        P: function () {
          return h;
        },
        V: function () {
          return l;
        },
      });
      var i = n(146),
        r = n(7292);
      let o = "number",
        s = "color",
        a =
          /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
      function l(t) {
        let e = t.toString(),
          n = [],
          r = { color: [], number: [], var: [] },
          l = [],
          u = 0,
          c = e
            .replace(
              a,
              (t) => (
                i.$.test(t)
                  ? (r.color.push(u), l.push(s), n.push(i.$.parse(t)))
                  : t.startsWith("var(")
                  ? (r.var.push(u), l.push("var"), n.push(t))
                  : (r.number.push(u), l.push(o), n.push(parseFloat(t))),
                ++u,
                "${}"
              )
            )
            .split("${}");
        return { values: n, split: c, indexes: r, types: l };
      }
      function u(t) {
        return l(t).values;
      }
      function c(t) {
        let { split: e, types: n } = l(t),
          a = e.length;
        return (t) => {
          let l = "";
          for (let u = 0; u < a; u++)
            if (((l += e[u]), void 0 !== t[u])) {
              let e = n[u];
              e === o
                ? (l += (0, r.Nw)(t[u]))
                : e === s
                ? (l += i.$.transform(t[u]))
                : (l += t[u]);
            }
          return l;
        };
      }
      let d = (t) => ("number" == typeof t ? 0 : t),
        h = {
          test: function (t) {
            var e, n;
            return (
              isNaN(t) &&
              (0, r.HD)(t) &&
              ((null === (e = t.match(r.KP)) || void 0 === e
                ? void 0
                : e.length) || 0) +
                ((null === (n = t.match(r.dA)) || void 0 === n
                  ? void 0
                  : n.length) || 0) >
                0
            );
          },
          parse: u,
          createTransformer: c,
          getAnimatableNone: function (t) {
            let e = u(t);
            return c(t)(e.map(d));
          },
        };
    },
    783: function (t, e, n) {
      "use strict";
      n.d(e, {
        Fq: function () {
          return o;
        },
        Rx: function () {
          return r;
        },
        bA: function () {
          return s;
        },
      });
      var i = n(1506);
      let r = {
          test: (t) => "number" == typeof t,
          parse: parseFloat,
          transform: (t) => t,
        },
        o = { ...r, transform: (t) => (0, i.u)(0, 1, t) },
        s = { ...r, default: 1 };
    },
    5480: function (t, e, n) {
      "use strict";
      n.d(e, {
        $C: function () {
          return c;
        },
        RW: function () {
          return o;
        },
        aQ: function () {
          return s;
        },
        px: function () {
          return a;
        },
        vh: function () {
          return l;
        },
        vw: function () {
          return u;
        },
      });
      var i = n(7292);
      let r = (t) => ({
          test: (e) =>
            (0, i.HD)(e) && e.endsWith(t) && 1 === e.split(" ").length,
          parse: parseFloat,
          transform: (e) => `${e}${t}`,
        }),
        o = r("deg"),
        s = r("%"),
        a = r("px"),
        l = r("vh"),
        u = r("vw"),
        c = {
          ...s,
          parse: (t) => s.parse(t) / 100,
          transform: (t) => s.transform(100 * t),
        };
    },
    7292: function (t, e, n) {
      "use strict";
      n.d(e, {
        HD: function () {
          return a;
        },
        KP: function () {
          return r;
        },
        Nw: function () {
          return i;
        },
        Rw: function () {
          return l;
        },
        dA: function () {
          return o;
        },
        mj: function () {
          return s;
        },
      });
      let i = (t) => Math.round(1e5 * t) / 1e5,
        r = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu,
        o =
          /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
        s =
          /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;
      function a(t) {
        return "string" == typeof t;
      }
      function l(t) {
        return null == t;
      }
    },
    3944: function (t, e, n) {
      "use strict";
      n.d(e, {
        K: function () {
          return l;
        },
      });
      var i = n(804),
        r = n(5674),
        o = n(8746);
      class s extends i.Hg {
        constructor() {
          super(...arguments), (this.output = []), (this.counts = new Map());
        }
        add(t) {
          let e = (0, r.p)(t);
          if (!e) return;
          let n = this.counts.get(e) || 0;
          this.counts.set(e, n + 1),
            0 === n && (this.output.push(e), this.update());
          let i = !1;
          return () => {
            if (i) return;
            i = !0;
            let t = this.counts.get(e) - 1;
            this.counts.set(e, t),
              0 === t && ((0, o.cl)(this.output, e), this.update());
          };
        }
        update() {
          this.set(this.output.length ? this.output.join(", ") : "auto");
        }
      }
      var a = n(8322);
      function l(t, e) {
        var n, i;
        if (!t.applyWillChange) return;
        let r = t.getValue("willChange");
        if (
          (r ||
            (null === (n = t.props.style) || void 0 === n
              ? void 0
              : n.willChange) ||
            ((r = new s("auto")), t.addValue("willChange", r)),
          (i = r),
          (0, a.i)(i) && i.add)
        )
          return r.add(e);
      }
    },
    5674: function (t, e, n) {
      "use strict";
      n.d(e, {
        p: function () {
          return s;
        },
      });
      var i = n(6323),
        r = n(1580),
        o = n(6019);
      function s(t) {
        return o.G.has(t) ? "transform" : i.t.has(t) ? (0, r.D)(t) : void 0;
      }
    },
    8322: function (t, e, n) {
      "use strict";
      n.d(e, {
        i: function () {
          return i;
        },
      });
      let i = (t) => !!(t && t.getVelocity);
    },
    2404: function (t, e, n) {
      "use strict";
      n.d(e, {
        b: function () {
          return o;
        },
      });
      var i = n(9155),
        r = n(8322);
      function o(t) {
        let e = (0, r.i)(t) ? t.get() : t;
        return (0, i.p)(e) ? e.toValue() : e;
      }
    },
  },
]);
