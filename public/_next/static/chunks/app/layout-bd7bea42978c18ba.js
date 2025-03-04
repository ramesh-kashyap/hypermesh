(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [185],
  {
    7802: function (e, t, s) {
      Promise.resolve().then(s.bind(s, 4404)),
        Promise.resolve().then(s.bind(s, 7640)),
        Promise.resolve().then(s.bind(s, 239)),
        Promise.resolve().then(s.t.bind(s, 4080, 23)),
        Promise.resolve().then(s.t.bind(s, 9593, 23)),
        Promise.resolve().then(s.t.bind(s, 3054, 23)),
        Promise.resolve().then(s.t.bind(s, 2074, 23)),
        Promise.resolve().then(s.bind(s, 1422)),
        Promise.resolve().then(s.bind(s, 4084)),
        Promise.resolve().then(s.bind(s, 1361)),
        Promise.resolve().then(s.bind(s, 2695));
    },
    1422: function (e, t, s) {
      "use strict";
      s.d(t, {
        Toaster: function () {
          return k;
        },
      });
      var a = s(7437),
        r = s(2265),
        i = s(4867),
        l = s(2278),
        n = s(2218),
        o = s(9354);
      let d = l.zt,
        c = r.forwardRef((e, t) => {
          let { className: s, ...r } = e;
          return (0, a.jsx)(l.l_, {
            ref: t,
            className: (0, o.cn)(
              "fixed bottom-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:right-0 sm:flex-col md:top-0 md:max-w-[420px]",
              s
            ),
            ...r,
          });
        });
      c.displayName = l.l_.displayName;
      let h = (0, n.j)(
          "group pointer-events-auto relative flex w-full items-center justify-between space-x-2 overflow-hidden rounded-md border p-4 pr-6 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
          {
            variants: {
              variant: {
                default: "border bg-background text-foreground",
                destructive:
                  "destructive group border-destructive bg-destructive text-destructive-foreground",
                success: "bg-lime-600 text-white",
                error:
                  "destructive group border-destructive bg-destructive text-destructive-foreground",
              },
            },
            defaultVariants: { variant: "default" },
          }
        ),
        x = r.forwardRef((e, t) => {
          let { className: s, variant: r, ...i } = e;
          return (0, a.jsx)(l.fC, {
            ref: t,
            className: (0, o.cn)(h({ variant: r }), s),
            ...i,
          });
        });
      (x.displayName = l.fC.displayName),
        (r.forwardRef((e, t) => {
          let { className: s, ...r } = e;
          return (0, a.jsx)(l.aU, {
            ref: t,
            className: (0, o.cn)(
              "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium transition-colors hover:bg-secondary focus:outline-none focus:ring-1 focus:ring-ring disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
              s
            ),
            ...r,
          });
        }).displayName = l.aU.displayName);
      let m = r.forwardRef((e, t) => {
        let { className: s, ...r } = e;
        return (0, a.jsx)(l.x8, {
          ref: t,
          className: (0, o.cn)(
            "absolute right-1 top-1 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-1 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
            s
          ),
          "toast-close": "",
          ...r,
          children: (0, a.jsx)(i.Pxu, { className: "h-4 w-4" }),
        });
      });
      m.displayName = l.x8.displayName;
      let u = r.forwardRef((e, t) => {
        let { className: s, ...r } = e;
        return (0, a.jsx)(l.Dx, {
          ref: t,
          className: (0, o.cn)("text-sm font-semibold [&+div]:text-xs", s),
          ...r,
        });
      });
      u.displayName = l.Dx.displayName;
      let f = r.forwardRef((e, t) => {
        let { className: s, ...r } = e;
        return (0, a.jsx)(l.dk, {
          ref: t,
          className: (0, o.cn)("text-sm opacity-90", s),
          ...r,
        });
      });
      f.displayName = l.dk.displayName;
      let p = 0,
        g = new Map(),
        b = (e) => {
          if (g.has(e)) return;
          let t = setTimeout(() => {
            g.delete(e), N({ type: "REMOVE_TOAST", toastId: e });
          }, 1e6);
          g.set(e, t);
        },
        v = (e, t) => {
          switch (t.type) {
            case "ADD_TOAST":
              return { ...e, toasts: [t.toast, ...e.toasts].slice(0, 1) };
            case "UPDATE_TOAST":
              return {
                ...e,
                toasts: e.toasts.map((e) =>
                  e.id === t.toast.id ? { ...e, ...t.toast } : e
                ),
              };
            case "DISMISS_TOAST": {
              let { toastId: s } = t;
              return (
                s
                  ? b(s)
                  : e.toasts.forEach((e) => {
                      b(e.id);
                    }),
                {
                  ...e,
                  toasts: e.toasts.map((e) =>
                    e.id === s || void 0 === s ? { ...e, open: !1 } : e
                  ),
                }
              );
            }
            case "REMOVE_TOAST":
              if (void 0 === t.toastId) return { ...e, toasts: [] };
              return {
                ...e,
                toasts: e.toasts.filter((e) => e.id !== t.toastId),
              };
          }
        },
        y = [],
        j = { toasts: [] };
      function N(e) {
        (j = v(j, e)),
          y.forEach((e) => {
            e(j);
          });
      }
      function w(e) {
        let { ...t } = e,
          s = (p = (p + 1) % Number.MAX_VALUE).toString(),
          a = () => N({ type: "DISMISS_TOAST", toastId: s });
        return (
          N({
            type: "ADD_TOAST",
            toast: {
              ...t,
              id: s,
              open: !0,
              onOpenChange: (e) => {
                e || a();
              },
            },
          }),
          {
            id: s,
            dismiss: a,
            update: (e) => N({ type: "UPDATE_TOAST", toast: { ...e, id: s } }),
          }
        );
      }
      function k() {
        let { toasts: e } = (function () {
          let [e, t] = r.useState(j);
          return (
            r.useEffect(
              () => (
                y.push(t),
                () => {
                  let e = y.indexOf(t);
                  e > -1 && y.splice(e, 1);
                }
              ),
              [e]
            ),
            {
              ...e,
              toast: w,
              dismiss: (e) => N({ type: "DISMISS_TOAST", toastId: e }),
            }
          );
        })();
        return (0, a.jsxs)(d, {
          children: [
            e.map(function (e) {
              let { id: t, title: s, description: r, action: i, ...l } = e;
              return (0,
              a.jsxs)(x, { ...l, children: [(0, a.jsxs)("div", { className: "grid gap-1", children: [s && (0, a.jsx)(u, { children: s }), r && (0, a.jsx)(f, { children: r })] }), i, (0, a.jsx)(m, {})] }, t);
            }),
            (0, a.jsx)(c, {}),
          ],
        });
      }
    },
    4084: function (e, t, s) {
      "use strict";
      s.d(t, {
        default: function () {
          return n;
        },
      });
      var a = s(7437),
        r = s(6648),
        i = s(7138),
        l = s(8179);
      function n() {
        let e = {
          transition: { duration: 1 },
          whileInView: { opacity: 1, x: 0, y: 0 },
          viewport: { once: !0 },
        };
        return (0, a.jsxs)("footer", {
          className: "px-6 pt-12 text-lightGray lg:px-8",
          children: [
            (0, a.jsxs)("div", {
              className:
                "mx-auto flex max-w-[1200px] flex-col justify-between gap-9 lg:flex-row",
              children: [
                (0, a.jsxs)(l.E.div, {
                  initial: { opacity: 0, x: -50 },
                  ...e,
                  className:
                    "flex w-full flex-col items-center lg:w-2/6 lg:items-start",
                  children: [
                    (0, a.jsxs)("div", {
                      className: "mb-4 flex items-center",
                      children: [
                        (0, a.jsx)("div", {
                          className: "mr-2 h-8 w-8",
                          children: (0, a.jsx)(r.default, {
                            src: "/icons/logo.svg",
                            alt: "Logo Meshchain",
                            width: 42,
                            height: 42,
                          }),
                        }),
                        (0, a.jsx)("span", {
                          className: "text-color-primary text-3xl font-bold",
                          children: "MeshChain",
                        }),
                      ],
                    }),
                    (0, a.jsx)("p", {
                      className:
                        "urbanist mb-4 max-w-3xl text-center text-base font-normal lg:text-left",
                      children:
                        "Join the future of AI development with MeshChain, enabling decentralized, scalable compute power. Secure, blockchain-based, and cost-efficient.",
                    }),
                    (0, a.jsxs)("div", {
                      className: "flex space-x-4",
                      children: [
                        (0, a.jsx)(i.default, {
                          href: "https://x.com/meshchainai",
                          className: "text-lightGray hover:text-white",
                          target: "_blank",
                          children: (0, a.jsx)(r.default, {
                            src: "/icons/x.svg",
                            alt: "X",
                            width: 24,
                            height: 24,
                          }),
                        }),
                        (0, a.jsx)(i.default, {
                          href: "https://t.me/MeshchainAi",
                          className: "text-lightGray hover:text-white",
                          target: "_blank",
                          children: (0, a.jsx)(r.default, {
                            src: "/icons/telegram-3.svg",
                            alt: "Telegram",
                            width: 24,
                            height: 24,
                          }),
                        }),
                        (0, a.jsx)(i.default, {
                          href: "https://discord.gg/JQ3PYHcdgZ",
                          className: "text-lightGray hover:text-white",
                          target: "_blank",
                          children: (0, a.jsx)(r.default, {
                            src: "/icons/discord.svg",
                            alt: "Discord",
                            width: 24,
                            height: 24,
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, a.jsxs)(l.E.div, {
                  initial: { opacity: 0, x: 50 },
                  ...e,
                  className:
                    "flex w-full flex-col justify-center gap-8 md:flex-row lg:w-1/2 lg:justify-end",
                  children: [
                    (0, a.jsxs)("div", {
                      className: "text-center lg:w-[173px] lg:text-left",
                      children: [
                        (0, a.jsx)("h3", {
                          className:
                            "mb-4 text-lg text-xl font-semibold text-white",
                          children: "Menu",
                        }),
                        (0, a.jsxs)("ul", {
                          className: "space-y-2",
                          children: [
                            (0, a.jsx)("li", {
                              children: (0, a.jsx)(i.default, {
                                href: "/",
                                className:
                                  "urbanist text-sm font-normal text-lightGray hover:text-primary lg:text-base lg:font-semibold",
                                children: "Home",
                              }),
                            }),
                            (0, a.jsx)("li", {
                              children: (0, a.jsx)(i.default, {
                                href: "https://docs.meshchain.ai",
                                className:
                                  "urbanist text-sm font-normal text-lightGray hover:text-primary lg:text-base lg:font-semibold",
                                target: "_blank",
                                children: "Document",
                              }),
                            }),
                            (0, a.jsx)("li", {
                              children: (0, a.jsx)(i.default, {
                                href: "https://docs.meshchain.ai/introduction/whitepaper",
                                className:
                                  "urbanist text-sm font-normal text-lightGray hover:text-primary lg:text-base lg:font-semibold",
                                target: "_blank",
                                children: "Whitepaper",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      className: "text-center lg:w-[173px] lg:text-left",
                      children: [
                        (0, a.jsx)("h3", {
                          className:
                            "urbanist mb-4 text-xl font-semibold text-white",
                          children: "Quick Links",
                        }),
                        (0, a.jsxs)("ul", {
                          className: "space-y-2",
                          children: [
                            (0, a.jsx)("li", {
                              children: (0, a.jsx)(i.default, {
                                href: "https://docs.meshchain.ai/introduction/overview",
                                className:
                                  "urbanist text-sm font-normal text-lightGray hover:text-primary lg:text-base lg:font-semibold",
                                target: "_blank",
                                children: "Introduction",
                              }),
                            }),
                            (0, a.jsx)("li", {
                              children: (0, a.jsx)(i.default, {
                                href: "https://docs.meshchain.ai/getting-started/quick-start-guide",
                                className:
                                  "urbanist text-sm font-normal text-lightGray hover:text-primary lg:text-base lg:font-semibold",
                                target: "_blank",
                                children: "Getting Started",
                              }),
                            }),
                            (0, a.jsx)("li", {
                              children: (0, a.jsx)(i.default, {
                                href: "https://docs.meshchain.ai/product/roadmap",
                                className:
                                  "urbanist text-sm font-normal text-lightGray hover:text-primary lg:text-base lg:font-semibold",
                                target: "_blank",
                                children: "Roadmap",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      className: "w-full text-center md:w-[300px] lg:text-left",
                      children: [
                        (0, a.jsx)("h3", {
                          className:
                            "mb-4 text-lg text-xl font-semibold text-white",
                          children: "Contact Us",
                        }),
                        (0, a.jsxs)("ul", {
                          className: "space-y-2",
                          children: [
                            (0, a.jsxs)("li", {
                              children: [
                                "Company:",
                                " ",
                                (0, a.jsx)(i.default, {
                                  href: "https://blocknetcorp.com/",
                                  target: "_blank",
                                  className:
                                    "urbanist text-sm font-normal text-lightGray hover:text-primary lg:text-base lg:font-semibold",
                                  children: "BlockNet Technologies",
                                }),
                              ],
                            }),
                            (0, a.jsxs)("li", {
                              children: [
                                "Address:",
                                " ",
                                (0, a.jsx)(i.default, {
                                  href: "https://maps.app.goo.gl/zsi797s8fydMLVX8A",
                                  target: "_blank",
                                  className:
                                    "urbanist text-sm font-normal text-lightGray hover:text-primary lg:text-base lg:font-semibold",
                                  children:
                                    "1209 Mountain Rd Pl NE, Albuquerque, NM 87110, USA",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, a.jsx)(l.E.div, {
              initial: { opacity: 0, y: 50 },
              ...e,
              className: "mt-8 h-[0px] w-full bg-bleeding md:h-[1px]",
            }),
            (0, a.jsx)(l.E.div, {
              initial: { opacity: 0, y: 50 },
              ...e,
              className:
                "urbanist mx-auto max-w-[1200px] py-9 text-sm font-normal text-lightGray",
              children: (0, a.jsxs)("div", {
                className:
                  "flex flex-col items-center justify-between md:flex-row",
                children: [
                  (0, a.jsx)("p", {
                    className: "text-center",
                    children:
                      "Copyright\xa9 2024. MeshChain. All Right Reserved.",
                  }),
                  (0, a.jsxs)("div", {
                    className: "mt-4 md:mt-0",
                    children: [
                      (0, a.jsx)(i.default, {
                        href: "/pages/terms",
                        className: "mr-4 hover:text-primary",
                        children: "Terms and Conditions",
                      }),
                      (0, a.jsx)(i.default, {
                        href: "/pages/privacy",
                        className: "hover:text-primary",
                        children: "Privacy Policy",
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        });
      }
    },
    1361: function (e, t, s) {
      "use strict";
      s.d(t, {
        default: function () {
          return l;
        },
      });
      var a = s(7437);
      s(2265);
      var r = s(9512);
      function i(e) {
        let { children: t, ...s } = e;
        return (0, a.jsx)(r.f, { ...s, children: t });
      }
      function l(e) {
        let { children: t } = e;
        return (0, a.jsx)(a.Fragment, {
          children: (0, a.jsx)(i, {
            attribute: "class",
            defaultTheme: "dark",
            enableSystem: !0,
            children: t,
          }),
        });
      }
    },
    2695: function (e, t, s) {
      "use strict";
      s.d(t, {
        Navbar: function () {
          return f;
        },
      });
      var a = s(7437),
        r = s(4697),
        i = s(2873),
        l = s(2265),
        n = s(8179),
        o = s(980),
        d = s(6604),
        c = s(6660),
        h = s(7138),
        x = s(6648),
        m = s(9354),
        u = s(3293);
      let f = () => {
        let [e, t] = l.useState(!1);
        return (0, a.jsxs)(n.E.header, {
          className: "w-full px-6 lg:px-8",
          initial: { opacity: 0, y: -200 },
          transition: { duration: 1 },
          animate: { opacity: 1, y: 0 },
          children: [
            (0, a.jsxs)("nav", {
              className:
                "relative z-[99] mx-auto flex max-w-[1200px] items-center justify-between bg-[#001012] py-5",
              children: [
                (0, a.jsxs)(h.default, {
                  href: "/",
                  className: "flex items-center gap-[10px]",
                  children: [
                    (0, a.jsx)(x.default, {
                      src: "/icons/logo.svg",
                      alt: "Logo",
                      width: 42,
                      height: 42,
                    }),
                    (0, a.jsx)("h1", {
                      className:
                        "clash-display-semibold text-color-primary text-[32px]",
                      children: "MeshChain",
                    }),
                  ],
                }),
                (0, a.jsx)("div", {
                  className: "flex items-center lg:hidden",
                  onClick: () => t(!e),
                  children: e
                    ? (0, a.jsx)(r.Z, {
                        size: 32,
                        onClick: () => t(!1),
                        className: "cursor-pointer",
                      })
                    : (0, a.jsx)(i.Z, {
                        size: 32,
                        onClick: () => t(!0),
                        className: "cursor-pointer",
                      }),
                }),
                (0, a.jsxs)("div", {
                  className: "hidden gap-9 lg:flex",
                  children: [
                    (0, a.jsx)(h.default, {
                      href: "/",
                      className:
                        "urbanist text-base font-semibold hover:text-primary",
                      children: "Home",
                    }),
                    (0, a.jsx)(u.rU, {
                      to: "features",
                      spy: !0,
                      smooth: !0,
                      offset: -50,
                      duration: 500,
                      className:
                        "urbanist cursor-pointer text-base font-semibold hover:text-primary",
                      children: "Features",
                    }),
                    (0, a.jsx)(u.rU, {
                      to: "roadmap",
                      spy: !0,
                      smooth: !0,
                      offset: -50,
                      duration: 500,
                      className:
                        "urbanist cursor-pointer text-base font-semibold hover:text-primary",
                      children: "Roadmap",
                    }),
                    (0, a.jsx)(h.default, {
                      href: "https://docs.meshchain.ai/introduction/whitepaper",
                      className:
                        "urbanist text-base font-semibold hover:text-primary",
                      target: "_blank",
                      children: "Whitepaper",
                    }),
                    (0, a.jsx)(h.default, {
                      href: "https://docs.meshchain.ai",
                      className:
                        "urbanist text-base font-semibold hover:text-primary",
                      target: "_blank",
                      children: "Docs",
                    }),
                  ],
                }),
                (0, a.jsx)(h.default, {
                  href: "https://app.meshchain.ai",
                  className:
                    "poppins hidden rounded-2xl border border-[#00ffa333] bg-[#00FFA333] px-5 py-2 text-base font-bold text-[#00C076] transition duration-300 ease-in-out hover:border-secondary lg:flex",
                  target: "_blank",
                  children: "Get Started",
                }),
              ],
            }),
            (0, a.jsx)("div", {
              className: "z-[1]",
              children: (0, a.jsx)(o.X, {
                features: d.H,
                strict: !0,
                children: (0, a.jsx)("div", {
                  "aria-expanded": e,
                  className: "relative",
                  children: (0, a.jsxs)("div", {
                    className: "absolute top-0 z-[99999] w-full bg-[#001214]",
                    children: [
                      (0, a.jsxs)(c.m.div, {
                        className: (0, m.cn)({
                          "flex w-full flex-col items-center justify-center gap-9 p-8 lg:hidden":
                            !0,
                          hidden: !e,
                        }),
                        initial: { height: 0, opacity: 1 },
                        animate: {
                          transition: { type: "tween" },
                          height: e ? "auto" : 0,
                        },
                        exit: { height: 0, opacity: 1 },
                        children: [
                          (0, a.jsx)(h.default, {
                            href: "/",
                            className:
                              "urbanist text-base font-semibold hover:text-primary",
                            children: "Home",
                          }),
                          (0, a.jsx)(u.rU, {
                            to: "features",
                            spy: !0,
                            smooth: !0,
                            offset: -50,
                            duration: 500,
                            className:
                              "urbanist cursor-pointer text-base font-semibold hover:text-primary",
                            children: "Features",
                          }),
                          (0, a.jsx)(u.rU, {
                            to: "roadmap",
                            spy: !0,
                            smooth: !0,
                            offset: -50,
                            duration: 500,
                            className:
                              "urbanist cursor-pointer text-base font-semibold hover:text-primary",
                            children: "Roadmap",
                          }),
                          (0, a.jsx)(h.default, {
                            href: "https://docs.meshchain.ai/introduction/whitepaper",
                            className:
                              "urbanist text-base font-semibold hover:text-primary",
                            children: "Whitepaper",
                          }),
                          (0, a.jsx)(h.default, {
                            href: "https://docs.meshchain.ai",
                            target: "_blank",
                            className:
                              "urbanist text-base font-semibold hover:text-primary",
                            children: "Docs",
                          }),
                          (0, a.jsx)(h.default, {
                            href: "https://app.meshchain.ai",
                            className:
                              "poppins rounded-2xl border border-[#00ffa333] bg-[#00FFA333] px-8 py-3 text-base font-bold text-[#00C076] transition duration-300 ease-in-out hover:border-secondary",
                            target: "_blank",
                            children: "Get Started",
                          }),
                        ],
                      }),
                      (0, a.jsx)("div", {
                        className: "h-[1px] w-full bg-bleeding",
                      }),
                    ],
                  }),
                }),
              }),
            }),
          ],
        });
      };
    },
    9354: function (e, t, s) {
      "use strict";
      s.d(t, {
        cn: function () {
          return i;
        },
      });
      var a = s(4839),
        r = s(6164);
      function i() {
        for (var e = arguments.length, t = Array(e), s = 0; s < e; s++)
          t[s] = arguments[s];
        return (0, r.m6)((0, a.W)(t));
      }
    },
    2074: function () {},
    3054: function () {},
  },
  function (e) {
    e.O(0, [454, 310, 759, 183, 480, 971, 23, 744], function () {
      return e((e.s = 7802));
    }),
      (_N_E = e.O());
  },
]);
