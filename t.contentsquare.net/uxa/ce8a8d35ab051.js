//15.196.0-es2019 2026-03-12T09:09:55.558Z (ce8a8d35ab051)
var CS_CONF = {
  collectionEnabled: true,
  projectId: 451732,
  status: 1,
  hostnames: [""],
  crossDomainTracking: 0,
  crossDomainSingleIframeTracking: 0,
  consentRequired: 0,
  allowSubdomains: 1,
  visitorCookieTimeout: 34164000000,
  sampleRate: 100,
  replayRecordingRate: 100,
  validationRate: 10,
  lastTrackingDraw: null,
  trackerDomain: "c.ba.contentsquare.net",
  recordingDomain: "r.contentsquare.net",
  useMalkaPipeline: 1,
  malkaQuotaServiceDomain: "q.ba.contentsquare.net",
  malkaRecordingDomain: "k.ba.contentsquare.net",
  ed: "l.contentsquare.net/log/web",
  eMerchandisingEnabled: 0,
  mouseMoveHeatmapEnabled: 1,
  jsErrorsEnabled: 1,
  customErrorsEnabled: 0,
  jsCustomErrorsEnabled: 0,
  apiErrorsEnabled: 0,
  customHashIdEnabled: 0,
  recordingEncryptionEnabled: 0,
  recordingEncryptionPublicKey: null,
  recordingEncryptionPublicKeyId: 0,
  secureCookiesEnabled: 1,
  triggerSessionReplayEnabled: 0,
  triggerSessionReplayRegex: null,
  dynamicIdRegex: null,
  whitelistedAttributes: null,
  replayRecordingUnmaskedUrlRegex: null,
  replayRecordingUnmaskedUrlRegexRules: [],
  replayRecordingMaskedUrlRegexRules: [
    {
      operator: "contain",
      value: ".*",
      ignoreQueryParams: 1,
      ignoreURIFragments: 1,
      ignoreCaseSensitivity: 1,
      maskMedia: 1,
    },
  ],
  replayRecordingMaskedUrlRegex: null,
  anonymisationMethod: "replayRecordingMaskedUrlRegexRules",
  anonymizeDigits: true,
  tagDeploymentMode: "CONTENTSQUARE",
  experimental: null,
  iframesTracking: 0,
  textVisibilityEnabled: 0,
  cookielessTrackingEnabled: 0,
  malkaUrlEnabled: 0,
  malkaEtrEnabled: 0,
  pathComputationRules: {},
  asyncSerializerEnabled: 1,
  pendingInactivityTimeout: 5000,
  accessibilityEnabled: 0,
  taskSchedulerOptions: { enabled: 1 },
  uxaDomain: "app.contentsquare.com",
  webviewsTrackingEnabled: 0,
  staticResourceManagerDomain: "srm.ba.contentsquare.net",
  useStaticResourceManager: 1,
  performanceTimingOptions: { withResource: false, withNavigation: false },
  replayConsentRequiredForSession: 0,
  displayAdOptions: null,
  implementations: [
    {
      template: { name: "ArtificialPageview", args: {} },
      triggers: [
        {
          name: "HistoryChange",
          args: {
            listeners: "popstate, pushState, replaceState",
            useDebounce: "no",
            window: 400,
          },
        },
      ],
    },
  ],
  eventsApiEnabled: 0,
  dynamicConfDomain: "t.contentsquare.net/settings",
  collectHierarchy: 0,
  collectSubmit: 0,
  collectTargetText: 1,
  tagVerificationDomain: "tcvsapi.contentsquare.com",
  tagVerificationEnabled: true,
  startMode: 1,
  quotas: [
    { quotaType: "ANALYTICS", value: 1 },
    { quotaType: "RECORDING", value: 0.05 },
  ],
  trackingCodeVerified: true,
  vocData: {
    siteId: 6591979,
    accountId: 5057199,
    projectId: 451732,
    accountSignature:
      "faa98763fecf06716c8d5b17e07963beb89e486bc3e8e9e52cad84695bef9f52",
    surveys: [],
    hashes: {
      SURVEY_BOOTSTRAPPER: {
        js: "survey-bootstrapper.31d6cfe0d16ae931b73c.js",
      },
      SURVEY_INVITATION: { js: "survey-invitation.333ff3f2aa9bd54cfb8e.js" },
      SURVEY_ISOLATED: { js: "survey-isolated.31d6cfe0d16ae931b73c.js" },
      SURVEY_V2: { js: "survey-v2.480689fe14389604b7a3.js" },
      USER_TEST: { js: "user-test.e34745ac3e7a98fc10ac.js" },
    },
  },
};
(() => {
  var Rd = Object.defineProperty;
  var Cd = (s, r, t) =>
    r in s
      ? Rd(s, r, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (s[r] = t);
  var As = (s, r, t) => Cd(s, typeof r != "symbol" ? r + "" : r, t);
  var rs = {};
  rs.d = (s, r) => {
    for (var t in r)
      rs.o(r, t) &&
        !rs.o(s, t) &&
        Object.defineProperty(s, t, { enumerable: !0, get: r[t] });
  };
  rs.g = (function () {
    if (typeof globalThis == "object") return globalThis;
    try {
      return this || new Function("return this")();
    } catch {
      if (typeof window == "object") return window;
    }
  })();
  rs.o = (s, r) => Object.prototype.hasOwnProperty.call(s, r);
  rs.r = (s) => {
    typeof Symbol != "undefined" &&
      Symbol.toStringTag &&
      Object.defineProperty(s, Symbol.toStringTag, { value: "Module" }),
      Object.defineProperty(s, "__esModule", { value: !0 });
  };
  var sc = {};
  rs.r(sc);
  rs.d(sc, { getRequestParameters: () => qm });
  function Ci(s, r) {
    let t;
    return (
      window.Zone &&
        typeof window.Zone.__symbol__ == "function" &&
        (t = s[window.Zone.__symbol__(r)]),
      t != null ? t : s[r]
    );
  }
  function Pu(s, r, t, e) {
    var i = arguments.length,
      n =
        i < 3
          ? r
          : e === null
          ? (e = Object.getOwnPropertyDescriptor(r, t))
          : e,
      o;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      n = Reflect.decorate(s, r, t, e);
    else
      for (var c = s.length - 1; c >= 0; c--)
        (o = s[c]) && (n = (i < 3 ? o(n) : i > 3 ? o(r, t, n) : o(r, t)) || n);
    return i > 3 && n && Object.defineProperty(r, t, n), n;
  }
  var Si;
  (function (s) {
    (s.debug = "debug"),
      (s.warn = "warn"),
      (s.implementation = "implementation"),
      (s.error = "error"),
      (s.critical = "critical");
  })(Si || (Si = {}));
  var rb = {
      [Si.debug]: 0,
      [Si.warn]: 1,
      [Si.implementation]: 1,
      [Si.error]: 2,
      [Si.critical]: 3,
    },
    Mr = {
      debug(...s) {},
      warn(...s) {},
      implementation(...s) {},
      error(...s) {},
      critical(...s) {},
      isPerfLoggingActive() {
        return !1;
      },
    };
  var Ou = typeof performance != "undefined" && !!performance.now,
    Fc = Ou ? () => performance.now() : () => csDate.now(),
    Id = (() => {
      var s, r, t;
      return Ou
        ? (r =
            (s = performance.timing) === null || s === void 0
              ? void 0
              : s.navigationStart) !== null && r !== void 0
          ? r
          : Math.floor(
              (t = performance.timeOrigin) !== null && t !== void 0 ? t : 0
            )
        : 0;
    })(),
    Gc = {
      now() {
        return Math.round(Fc() + Id);
      },
      elapsed() {
        return Fc();
      },
    };
  function Pd(s, r) {
    let t = r.wait,
      e = r.mode || "leading",
      i,
      n = [],
      o = null,
      c = 0,
      h,
      d = () => {
        (c = Gc.now()), (o = null), (h = s.apply(i, n)), (n = []), (i = null);
      },
      S = function (...y) {
        if (((i = this), (n = [...y]), e === "trailing"))
          return o || (o = csSetTimeout(d, t)), h;
        let _ = Gc.now(),
          w = t - (_ - c);
        return (
          w <= 0 || w > t
            ? ((c = _),
              (h = s.apply(i, n)),
              o ? (csClearTimeout(o), (o = null)) : (n = []))
            : o || (o = csSetTimeout(d, w)),
          h
        );
      };
    return (
      (S.cancel = () => {
        o && (csClearTimeout(o), (c = 0), (o = null), (n = []));
      }),
      (S.flushPending = () => {
        o && (csClearTimeout(o), d());
      }),
      S
    );
  }
  function Od(s, r) {
    let t = null,
      e,
      i = [],
      n = () => {
        (t = null), s.apply(e, i), (i = []), (e = null);
      };
    return function (...o) {
      (e = this),
        (i = [...o]),
        t && csClearTimeout(t),
        (t = csSetTimeout(n, r));
    };
  }
  var Nu = (s) => (r, t, e) => {
    let i = (t == null ? void 0 : t.toString()) || "",
      n = s || `${r.constructor && r.constructor.name}.${i}`;
    if (e) {
      let o = e.value;
      e.value = function (...c) {
        return Md(n, o.bind(this))(...c);
      };
    }
  };
  function Nd(s) {
    return typeof s != "undefined";
  }
  function zc(s) {
    return s instanceof Error;
  }
  function Md(s, r) {
    return function (...t) {
      try {
        let e = r.apply(this, t);
        return Nd(self.Promise) && e instanceof self.Promise
          ? e.then(
              (i) => i,
              (i) => Mr.error(zc(i) ? i : new Error(i), s)
            )
          : e;
      } catch (e) {
        try {
          Mr.error(zc(e) ? e : new Error(e), s);
        } catch {}
      }
    };
  }
  var re = (() => {
      class s {
        static setGlobalService(t) {
          s.globalService = t;
        }
        static dE(t) {
          this.fE.test(t) ||
            Mr.error(
              `Invalid metric name: "${t}". Must contain only letters with optional hyphens or dots between words.`
            );
        }
        static validateParameterName(t) {
          return !/^https?:\/\/.+/.test(t) && !this.pE.test(t)
            ? (Mr.error(
                `Invalid parameter name: "${t}". Must start with letters, optionally followed by segments of letters or digits separated by hyphens, dots, colons, underscores, or pipes.`
              ),
              !1)
            : !0;
        }
        constructor(t) {
          (this.name = t), (this.values = {}), s.dE(t);
        }
        reset() {
          this.values = {};
        }
        flush(t = "") {
          if (!s.globalService) return !1;
          let e = this.values,
            i = Object.keys(e);
          if (!i.length) return !1;
          let n = csArray.prototype.map.call(i, (o) => ({
            name: this.name,
            parameter: `${t === "" ? "" : `${t}.`}${o}`,
            value: Math.round(e[o]),
          }));
          return s.globalService.push(n), this.reset(), n.length > 0;
        }
      }
      return (
        (s.globalService = null),
        (s.fE = /^[a-zA-Z]+([-.][a-zA-Z]+)*$/),
        (s.pE = /^[a-zA-Z]+([-.:_|][a-zA-Z0-9]+)*$/),
        Pu([Nu()], s.prototype, "flush", null),
        s
      );
    })(),
    Lt = (() => {
      class s extends re {
        constructor(t, e = 100) {
          super(t),
            (this.gE = e),
            (this.values = {}),
            (this.debouncedFlush = () => this.flush()),
            e && (this.debouncedFlush = Od(() => this.flush(), this.gE));
        }
        count(t, e = 1) {
          re.globalService &&
            (this.values[t] || re.validateParameterName(t),
            (this.values[t] = (this.values[t] || 0) + e),
            this.debouncedFlush());
        }
      }
      return s;
    })(),
    wr = (() => {
      class s extends re {
        constructor(t, e = ["max", "average", "total", "count"]) {
          super(t),
            (this.collecting = e),
            (this.values = { average: 0, count: 0, max: 0, total: 0 });
        }
        get average() {
          return this.values.average;
        }
        get count() {
          return this.values.count;
        }
        get max() {
          return this.values.max;
        }
        get total() {
          return this.values.total;
        }
        flush(t = "") {
          if (this.count === 0) return !1;
          let e = Object.keys(this.values);
          return (
            csArray.prototype.forEach.call(
              csArray.prototype.filter.call(
                e,
                (i) =>
                  !csArray.prototype.some.call(this.collecting, (n) => i === n)
              ),
              (i) => {
                delete this.values[i];
              }
            ),
            super.flush(t)
          );
        }
        push(t) {
          this.values.count++,
            (this.values.total += t),
            (this.values.max = Math.max(this.values.max, t)),
            (this.values.average = this.values.total / this.values.count);
        }
        reset() {
          this.values = { count: 0, total: 0, max: 0, average: 0 };
        }
      }
      return s;
    })(),
    fn = (() => {
      class s extends re {
        constructor(t, e = ["max", "average", "total", "count"]) {
          super(t), (this.collecting = e);
        }
        flush(t = "") {
          let e = Object.keys(this.values);
          return (
            csArray.prototype.forEach.call(
              csArray.prototype.filter.call(
                e,
                (i) =>
                  !csArray.prototype.some.call(this.collecting, (n) =>
                    csString.prototype.endsWith.call(i, `.${n}`)
                  )
              ),
              (i) => {
                delete this.values[i];
              }
            ),
            super.flush(t)
          );
        }
        add(t, e) {
          var i, n, o, c, h, d, S;
          if (!re.globalService) return;
          this.values[`${t}.count`] || re.validateParameterName(t);
          let y = (_) => this.values[`${t}.${_}`];
          ((i = (c = this.values)[(h = `${t}.count`)]) !== null &&
            i !== void 0) ||
            (c[h] = 0),
            ((n = (d = this.values)[(S = `${t}.total`)]) !== null &&
              n !== void 0) ||
              (d[S] = 0),
            this.values[`${t}.count`]++,
            (this.values[`${t}.total`] += e),
            (this.values[`${t}.max`] = Math.max(
              (o = y("max")) !== null && o !== void 0 ? o : 0,
              e
            )),
            (this.values[`${t}.average`] = y("total") / y("count"));
        }
      }
      return s;
    })(),
    Dd = (() => {
      class s extends re {
        constructor() {
          super(...arguments), (this.values = {});
        }
        set(t, e = "flags") {
          var i, n;
          re.globalService &&
            (this.values[e] || re.validateParameterName(e),
            ((i = (n = this.values)[e]) !== null && i !== void 0) || (n[e] = 0),
            (this.values[e] |= t),
            this.flush());
        }
      }
      return s;
    })(),
    kd = (() => {
      class s extends re {
        constructor(t, e = { iterations: 10, interval: 2e3 }) {
          super(t),
            (this.Nd = e),
            (this.Vo = 0),
            (this.Le = null),
            (this.Uo = []),
            (this.values = {});
        }
        push(t) {
          document.visibilityState !== "hidden" &&
            ((this.Vo += t), this.Le || this.mE());
        }
        mE() {
          this.Le = window.csSetInterval(() => {
            csArray.prototype.push.call(this.Uo, this.Vo),
              (this.Vo = 0),
              this.Uo.length >= this.Nd.iterations &&
                this.Le &&
                csClearInterval(this.Le);
          }, this.Nd.interval);
        }
        flush(t) {
          return (
            this.Le && (csClearInterval(this.Le), (this.Le = null)),
            csArray.prototype.forEach.call(this.Uo, (e, i) => {
              this.values[`interval.${i + 1}`] = e;
            }),
            (this.Uo = []),
            (this.Vo = 0),
            super.flush(t)
          );
        }
      }
      return s;
    })(),
    xd = (() => {
      class s extends re {
        constructor() {
          super("upload-size"), (this.Ho = new Map());
        }
        add(t, e, i) {
          if (t === 0) return;
          try {
            (e = `${
              csString.prototype.substring.call(
                csString.prototype.replace.call(
                  new csURL(e).pathname,
                  /[^a-z0-9]+/g,
                  "-"
                ),
                1
              ) || "home"
            }|${i}`),
              (e = csString.prototype.toLowerCase.call(
                csString.prototype.replace.call(e, /^v2-/, "")
              ));
          } catch {
            Mr.error(`Invalid URL for upload size metric: ${e}`);
            return;
          }
          let n = this.Ho.get(e) || { count: 0, total: 0, max: 0, average: 0 };
          n.count++,
            (n.total += t),
            (n.max = Math.max(n.max, t)),
            (n.average = n.total / n.count),
            this.Ho.set(e, n);
        }
        flush(t) {
          if (re.globalService === null || isNaN(+t)) return !1;
          let e = [];
          return (
            this.Ho.forEach((i, n) => {
              csArray.prototype.forEach.call(Object.keys(i), (o) => {
                let c = `${n}.${o}.${t}`;
                re.validateParameterName(c),
                  csArray.prototype.push.call(e, {
                    name: this.name,
                    parameter: c,
                    value: Math.round(i[o]),
                  });
              });
            }),
            re.globalService.push(e),
            this.Ho.clear(),
            !0
          );
        }
      }
      return Pu([Nu()], s.prototype, "flush", null), s;
    })(),
    st = {
      counters: {
        commandsFromIntegrations: new Lt("commands-from-integrations"),
        commandsFromCSTC: new Lt("commands-from-cstc"),
        commandsFromIframe: new Lt("commands-from-iframe"),
        commandApplied: new Lt("command-applied"),
        commandError: new Lt("command-error"),
        commandMisuse: new Lt("command-misuse"),
        CSTCSnippetUsed: new Lt("cstc-snippet-used"),
        redactedPII: new Lt("redacted-pii"),
        pageAnonymisation: new Lt("page-anonymisation"),
        patchedNativeFunctions: new Lt("patched-native-functions"),
        pureWindowState: new Lt("pure-window-state"),
        sensitiveElements: new Lt("sensitive-elements"),
        cspErrors: new Lt("csp-errors"),
        networkRequests: new Lt("network-requests"),
        webVitalsErrors: new Lt("web-vitals-errors"),
        trackedFeatures: new Lt("tracked-features"),
        longTasks: new wr("long-tasks"),
        errors: new Lt("errors"),
        methodPerformance: new fn("perf"),
        transferSize: new wr("transfer-size", ["max", "average"]),
        downloadTime: new wr("download-time", ["average"]),
        blockingTime: new wr("blocking-time"),
        inpContribution: new wr("inp-contribution"),
        tasks: new fn("tasks"),
        availableFeatures: new Dd("available-features"),
        dom: new fn("dom", ["total"]),
        mutations: new kd("mutations"),
        requestTimeouts: new Lt("request-timeouts"),
        requestErrors: new Lt("request-errors"),
        requestCounts: new Lt("request-counter"),
        payloadSize: new xd(),
        featureUsage: new Lt("feature-usage"),
        inpLoaf: new fn("inp-loaf", ["max", "average"]),
      },
      setService(s) {
        re.setGlobalService(s);
      },
      normalizeParameter(s) {
        return csString.prototype.toLowerCase.call(
          csString.prototype.replace.call(
            csString.prototype.replace.call(s, /([a-z])([A-Z])/g, "$1-$2"),
            /([A-Z])([A-Z][a-z])/g,
            "$1-$2"
          )
        );
      },
    },
    Ot = (() => {
      let s;
      return (
        (function (r) {
          (r.debug = "debug"),
            (r.warn = "warn"),
            (r.implementation = "implementation"),
            (r.error = "error"),
            (r.critical = "critical");
        })(s || (s = {})),
        s
      );
    })();
  function Ht(s) {
    return ft(s) && (typeof s == "number" || s instanceof Number) && !isNaN(s);
  }
  function wi(s) {
    return s === parseInt(s, 10);
  }
  function j(s) {
    return ft(s) && (typeof s == "string" || s instanceof csString);
  }
  function Cn(s) {
    return typeof s == "boolean";
  }
  function Ki(s) {
    return typeof s == "object";
  }
  function ft(s) {
    return typeof s != "undefined";
  }
  function Ct(s) {
    return ft(s) && s !== null;
  }
  function dt(s) {
    return typeof s == "object" && s !== null;
  }
  function Ld(s, r, t) {
    return wi(s) && s >= r && s <= t;
  }
  function wa(s) {
    for (let r in s) return !1;
    return !0;
  }
  function Xe(s) {
    return typeof s == "function";
  }
  function si(s) {
    return s instanceof Element;
  }
  function ns(s) {
    return s instanceof Error;
  }
  function ic(s) {
    let r = s.length;
    for (let t = 0; t < r; t++)
      switch (csString.prototype.charCodeAt.call(s, t)) {
        case 9:
        case 10:
        case 11:
        case 12:
        case 13:
        case 32:
        case 160:
          continue;
        default:
          return !1;
      }
    return !0;
  }
  var $o = {
      [Ot.debug]: 0,
      [Ot.warn]: 1,
      [Ot.implementation]: 1,
      [Ot.error]: 2,
      [Ot.critical]: 3,
    },
    Tt = {
      debug(...s) {},
      warn(...s) {},
      implementation(...s) {},
      error(...s) {},
      critical(...s) {},
      isPerfLoggingActive() {
        return !1;
      },
    };
  function Vd(s) {
    Tt = s;
  }
  var $ = (s) => (r, t, e) => {
    let i = (t == null ? void 0 : t.toString()) || "",
      n = s || `${r.constructor && r.constructor.name}.${i}`;
    if (e) {
      let o = e.value;
      e.value = function (...c) {
        return ii(n, o.bind(this))(...c);
      };
    }
  };
  function ii(s, r) {
    return function (...t) {
      try {
        let e = r.apply(this, t);
        return ft(self.Promise) && e instanceof self.Promise
          ? e.then(
              (i) => i,
              (i) => Tt.error(ns(i) ? i : new Error(i), s)
            )
          : e;
      } catch (e) {
        try {
          Tt.error(ns(e) ? e : new Error(e), s);
        } catch {}
      }
    };
  }
  var Hr = (() => {
      class s {
        constructor() {
          this.jo = 0;
        }
        get length() {
          return this.jo;
        }
        get isEmpty() {
          return !this.Gs;
        }
        pushAll(t) {
          for (let e = 0; e < t.length; e++) this.push(t[e]);
        }
        push(t) {
          this.jo++,
            this.Qr
              ? (this.Qr = this.Qr[1] = [t, void 0])
              : (this.Qr = this.Gs = [t, void 0]);
        }
        pop() {
          if (!this.Gs) return null;
          this.jo--;
          let t = this.Gs[0];
          return (this.Gs = this.Gs[1]), this.Gs || (this.Qr = void 0), t;
        }
        forEach(t) {
          let e = this.Gs;
          for (; e != null && e.length; ) t(e[0]), (e = e[1]);
        }
        clear() {
          (this.jo = 0), (this.Gs = this.Qr = void 0);
        }
      }
      return s;
    })(),
    Aa = 0,
    rc = (s) => {
      Aa++,
        csQueueMicrotask(() =>
          ks(() => {
            try {
              s();
            } finally {
              Aa--;
            }
          }, [He.MicroTask, "queueMicrotask"])
        );
    },
    In = new Hr(),
    Pn = new Hr();
  function ve(s, r = "high") {
    In.isEmpty && Pn.isEmpty && Mu(Ud),
      r === "high" ? Pn.push(qc(s)) : In.push(qc(s));
  }
  function Mu(s, r = 10) {
    r === 0 ? rc(s) : csQueueMicrotask(() => Mu(s, r - 1));
  }
  function Ud() {
    for (; !Pn.isEmpty; ) Pn.pop()();
    for (; !In.isEmpty; ) In.pop()();
  }
  async function Du(s = 1) {
    for (let r = 0; r < s; r++) await new Promise((t) => ve(t));
  }
  function qc(s) {
    return function () {
      try {
        s.apply(window, arguments);
      } catch (r) {
        Tt.critical(r);
      }
    };
  }
  var jr = typeof window == "undefined";
  function Hd() {
    return typeof globalThis != "undefined"
      ? globalThis
      : typeof window != "undefined"
      ? window
      : typeof rs.g != "undefined"
      ? rs.g
      : typeof process != "undefined"
      ? process
      : Function("return this")();
  }
  var gt = Hd();
  function nc(s) {
    let r = new ArrayBuffer(s.length),
      t = new Uint8Array(r);
    for (let e = 0, i = s.length; e < i; e += 1)
      t[e] = csString.prototype.charCodeAt.call(s, e);
    return r;
  }
  function Wc(s) {
    let r = new Uint8Array(s),
      t = "";
    for (let e = 0; e < r.byteLength; e += 1) t += csString.fromCodePoint(r[e]);
    return t;
  }
  function ku(s) {
    let r = gt.atob(s);
    return nc(r);
  }
  function ba(s) {
    let r = csArray.from(new Uint8Array(s));
    return csArray.prototype.join.call(
      csArray.prototype.map.call(r, (t) =>
        csString.prototype.padStart.call(t.toString(16), 2, "0")
      ),
      ""
    );
  }
  function Yc(s) {
    let r = csString.prototype.indexOf.call(s, ";base64,") !== -1,
      t = csString.prototype.indexOf.call(s, ","),
      e = r
        ? [
            csString.prototype.substring.call(s, 0, t - 7),
            csString.prototype.substring.call(s, t + 1),
          ]
        : [
            csString.prototype.substring.call(s, 0, t),
            csString.prototype.substring.call(s, t + 1),
          ];
    if (!r && /^%3Csvg/i.test(e[1]))
      try {
        e[1] = decodeURIComponent(e[1]);
      } catch (o) {
        Tt.warn(`${o}, calling decodeURIComponent on: ${e[1]}`);
      }
    let n = r ? ku(e[1]) : nc(e[1]);
    return new Blob([n], {
      type: csString.prototype.replace.call(e[0], "data:", ""),
    });
  }
  var xu = typeof performance != "undefined" && !!performance.now,
    Xc = xu ? () => performance.now() : () => csDate.now(),
    jd = (() => {
      var s, r;
      return xu
        ? (r =
            (s = performance.timing) === null || s === void 0
              ? void 0
              : s.navigationStart) !== null && r !== void 0
          ? r
          : Math.floor(performance.timeOrigin)
        : 0;
    })(),
    oc = 34164e6,
    Bd = 2592e6;
  var q = {
    now() {
      return Math.round(Xc() + jd);
    },
    elapsed() {
      return Xc();
    },
  };
  function Kc() {
    return Math.floor(q.now() / 1e3);
  }
  function Lu() {
    return typeof gt.Promise == "function";
  }
  function $d() {
    var s;
    return (
      typeof crypto != "undefined" &&
      Xe((s = crypto.subtle) === null || s === void 0 ? void 0 : s.digest)
    );
  }
  function Jc() {
    var s, r;
    return (
      typeof ((s = window.navigation) === null || s === void 0
        ? void 0
        : s.addEventListener) == "function" &&
      typeof ((r = window.navigation) === null || r === void 0
        ? void 0
        : r.removeEventListener) == "function"
    );
  }
  function ee(s, r) {
    return csString.prototype.lastIndexOf.call(s, r, 0) === 0;
  }
  function er(s, r) {
    return csString.prototype.indexOf.call(s, r, s.length - r.length) !== -1;
  }
  var Fd = Number.MAX_SAFE_INTEGER || 9007199254740991,
    Ai = {
      percentage() {
        return Math.floor(Math.random() * 1e4) / 100;
      },
      boolean(s) {
        return this.percentage() < s;
      },
      integer(s = Fd) {
        return Math.floor(Math.random() * s);
      },
    },
    An = "null",
    Js = null,
    Vu = [],
    Gd = () => {
      var s;
      return (
        jr ||
        !!(
          !((s = document.body) === null || s === void 0) &&
          s.getAttribute("data-cs-tag-extension")
        )
      );
    };
  !jr &&
    Gd() &&
    (window._uxa
      ? _uxa.push(["debugEvents", !0])
      : (window._uxa = [["debugEvents", !0]]),
    (Js = new BroadcastChannel("cs-tag")),
    document.addEventListener("cs.tracking.recordingEvent", (s) => {
      Ta({ type: "UXA_EVENT", event: s.detail });
    }),
    Js.addEventListener("message", (s) => {
      if (s.data.type === "CONNECT") {
        if (s.data.sessionId === An) return;
        (An = s.data.sessionId),
          csArray.prototype.forEach.call(Vu, (r) => r()),
          Js == null || Js.postMessage({ type: "CONNECTED", sessionId: An });
      }
    }));
  function zd(s) {
    jr ||
      (An !== null && csSetTimeout(s),
      csSetTimeout(() => csArray.prototype.push.call(Vu, s)));
  }
  function Ta(s) {
    Js == null || Js.postMessage(s);
  }
  function Dr(s) {
    var r;
    let t = (r = s.length) !== null && r !== void 0 ? r : 0,
      e = new csArray(t);
    for (let i = 0; i < t; i += 1) e[i] = s[i];
    return e;
  }
  function Ye(s, r) {
    let t = s.length,
      e = new csArray(t);
    for (let i = 0; i < t; i += 1) e[i] = r(s[i]);
    return e;
  }
  function qd(s, r, t) {
    let e = [],
      i = 0;
    for (let n = 0; n < s.length; n += 1) {
      let o = r(s[n]);
      for (let c = 0; c < o.length; c++) t(o[c], i++);
    }
    return e;
  }
  function ac(s, r) {
    let t = [];
    return qd(s, r, (e) => csArray.prototype.push.call(t, e)), t;
  }
  function pt(s, r) {
    if (Wd(s)) {
      let t = s.length;
      for (let e = 0; e < t; e++) r(s[e], e);
    } else {
      let t = 0,
        e = s.next();
      for (; !e.done; ) r(e.value, t++), (e = s.next());
    }
  }
  function Wd(s) {
    return s.length >= 0;
  }
  function sr(s, r) {
    let t = s.length;
    for (let e = 0; e < t; e++) if (r(s[e], e)) return s[e];
  }
  function Uu(s, r) {
    let t = s.length;
    for (let e = 0; e < t; e++) if (r(s[e], e)) return !0;
    return !1;
  }
  function Hu(s, r) {
    let t = s.length;
    for (let e = 0; e < t; e++) if (!r(s[e], e)) return !1;
    return !0;
  }
  function On(s, r) {
    let t = s.length,
      e = [];
    for (let i = 0; i < t; i += 1) {
      let n = s[i];
      r(n) && csArray.prototype.push.call(e, n);
    }
    return e;
  }
  function Yd(s, r, t) {
    let e = s.length + r.length + ((t == null ? void 0 : t.length) || 0),
      i = new csArray(e),
      n = 0;
    for (let o = 0; o < s.length; o++) i[n++] = s[o];
    for (let o = 0; o < r.length; o++) i[n++] = r[o];
    if (!t) return i;
    for (let o = 0; o < t.length; o++) i[n++] = t[o];
    return i;
  }
  function Qc(s, r) {
    for (let t = 0; t < s.length; t++) csArray.prototype.push.call(r, s[t]);
  }
  function Ds(s) {
    let r = s instanceof Map,
      t = [];
    return (
      s.forEach((e, i) => csArray.prototype.push.call(t, r ? [i, e] : e)), t
    );
  }
  function Xd(s) {
    return csArray.isArray(s) && s.length > 0;
  }
  var Br = (() => {
      class s {
        constructor(t, e = "") {
          (this.name = t), (this.format = e);
        }
      }
      return s;
    })(),
    bs = (() => {
      class s extends Br {
        constructor(t) {
          super(t, "Value: {count}"), (this.count = 0);
        }
        increase(t = 1) {
          this.count += t;
        }
        decrease() {
          this.count > 0 && this.count--;
        }
        clear() {
          this.count = 0;
        }
        getData() {
          return { count: this.count };
        }
      }
      return s;
    })();
  var Zc = (() => {
      class s extends Br {
        constructor(t) {
          super(
            t,
            "Living intances: {instances}<br/>Added: {added}<br/>Removed: {removed}"
          ),
            (this.added = 0),
            (this.removed = 0);
        }
        get value() {
          return this.added - this.removed;
        }
        increase() {
          this.added++;
        }
        decrease() {
          this.removed++;
        }
        getData() {
          return {
            added: this.added,
            removed: this.removed,
            instances: this.added - this.removed,
          };
        }
      }
      return s;
    })(),
    Ts = (() => {
      class s extends Br {
        constructor(t) {
          super(
            t,
            "Count: {count}<br/>Average: {average}ms<br/>Max: {max}ms<br/>Total: {total}ms"
          ),
            (this.total = 0),
            (this.count = 0),
            (this.max = 0);
        }
        get average() {
          return this.count ? this.total / this.count : 0;
        }
        elapsed(t) {
          return (
            this.count++,
            (this.max = Math.max(this.max, t)),
            (this.total += t),
            t
          );
        }
        measure(t) {
          let e = q.elapsed();
          t(), this.count++;
          let i = q.elapsed() - e;
          return (this.max = Math.max(this.max, i)), (this.total += i), i;
        }
        asyncMeasure() {
          let t = q.elapsed();
          return () => {
            this.count++;
            let e = q.elapsed() - t;
            return (this.max = Math.max(this.max, e)), (this.total += e), e;
          };
        }
        getData() {
          return {
            total: this.total,
            count: this.count,
            average: this.average,
            max: this.max,
          };
        }
      }
      return s;
    })(),
    Kd = (() => {
      class s extends Br {
        constructor() {
          super("INP", "Value: {value}");
        }
        getData() {
          return { value: Vt.tasks.eventListener.max };
        }
      }
      return s;
    })(),
    Vt = {
      general: {
        category: "General",
        nbEvents: new bs("Nb of Events"),
        pendingTasks: new bs("Pending Tasks"),
        pendingEvents: new bs("Pending Tasks"),
        nbOfMutationObservers: new Zc("Nb of Mutation Observers"),
        inp: new Kd(),
      },
      mutations: {
        category: "Mutations",
        initialDOM: new Ts("Initial DOM"),
        pendingMutations: new bs("Nb of Mutations scheduled"),
        serializedMutations: new Ts("Serialized Mutations"),
        count: new bs("Mutation Count"),
        elementMutationObserved: new Zc(
          "Nb of Elements Observed by MutationObserver"
        ),
        unobserveGarbageCollection: new Ts("Unobserve GC"),
      },
      visibilityObserver: {
        category: "Visibility Observer",
        hiddenElements: new bs("Nb of Hidden Elements "),
        nbElements: new bs("Nb of  Elements"),
      },
      tasks: {
        category: "Tasks",
        tasks: new bs("Tasks"),
        errors: new bs("Errors"),
        timer: new Ts("Timers"),
        microtask: new Ts("Microtasks"),
        mutationObserver: new Ts("MutationObserver"),
        monkeyPatch: new Ts("MonkeyPatch"),
        eventListener: new Ts("EventListener"),
        intersectionObserver: new Ts("Intersection"),
      },
    };
  function Jd() {
    let s = null;
    zd(() => {
      let r = (n) => Object.keys(n),
        t = csArray.prototype.map.call(r(Vt), (n) => Vt[n]),
        e = csArray.prototype.map.call(t, (n) =>
          csArray.prototype.filter.call(
            csArray.prototype.map.call(r(n), (o) => n[o]),
            (o) => o instanceof Br
          )
        );
      Ta({
        type: "UXA_PERFORMANCE_COUNTER_SCHEMA",
        event: csArray.prototype.map.call(t, (n, o) => ({
          category: n.category,
          performanceCounters: csArray.prototype.map.call(e[o], (c) => ({
            name: c.name,
            format: c.format,
          })),
        })),
      }),
        !s &&
          (s = csSetInterval(() => {
            ks(() => {
              let n = ac(
                Ye(e, (o) => Ye(o, (c) => c.getData())),
                (o) => o
              );
              Ta({ type: "UXA_PERFORMANCE_COUNTER", event: n });
            }, [He.Timer, "performance-counter-interval"]);
          }, 1e3));
    });
  }
  var He = (() => {
      let s;
      return (
        (function (r) {
          (r.Timer = "timer"),
            (r.MonkeyPatch = "monkeyPatch"),
            (r.MutationObserver = "mutationObserver"),
            (r.EventListener = "eventListener"),
            (r.IntersectionObserver = "intersectionObserver"),
            (r.MicroTask = "microtask");
        })(s || (s = {})),
        s
      );
    })(),
    Se = null,
    Qd = ["click", "tap", "keyup", "keydown", "pointerup", "pointerdown"];
  async function ks(s, r, t = null) {
    if (Se && r[0] !== He.MicroTask) return s();
    t && (Se = t),
      Se || ((Se = { type: r[0], elapsed: 0 }), Vt.tasks.tasks.increase());
    try {
      Se.elapsed += Zd(s);
    } catch (e) {
      Vt.tasks.errors.increase(),
        Tt.critical(
          new Error(
            `Task error:  ${r}/${s.name}.
${e.message}
${e.stack}`,
            e
          ),
          "TASK_ERROR"
        );
    } finally {
      Aa <= 0 &&
        (Vt.tasks[Se.type].elapsed(Se.elapsed),
        Se.elapsed > 50 &&
          (st.counters.longTasks.push(Se.elapsed),
          st.counters.blockingTime.push(Se.elapsed - 50)),
        st.counters.tasks.add(r[0], Se.elapsed),
        csArray.prototype.includes.call(Qd, r[1]) &&
          st.counters.inpContribution.push(Se.elapsed),
        (Se = null));
    }
  }
  function Zd(s) {
    let r = q.elapsed();
    return s(), q.elapsed() - r;
  }
  var Fo,
    tf = "cs-native-frame";
  var Gs = {
    navigatorProperties: [{ propertyName: "sendBeacon", binding: navigator }],
    nodeProperties: [
      "childNodes",
      "parentNode",
      "nextSibling",
      "firstChild",
      "nodeType",
    ],
    elementProperties: ["shadowRoot"],
    elementPropertiesValues: [
      "matches",
      "mozMatchesSelector",
      "msMatchesSelector",
      "oMatchesSelector",
      "webkitMatchesSelector",
    ],
    eventProperties: ["target"],
    imageProperties: ["src"],
    constructors: {
      Date: "csDate",
      JSON: "csJSON",
      Array: "csArray",
      String: "csString",
      URL: "csURL",
      MutationObserver: "csMutationObserver",
      screen: "csScreen",
      RegExp: "csRegExp",
    },
  };
  function ju(s, r) {
    let t = Ci(window, s);
    return function (e, i) {
      return t(() => ks(e, [r, s]), i);
    };
  }
  window.csSetTimeout = ju("setTimeout", He.Timer);
  window.csSetInterval = ju("setInterval", He.Timer);
  window.csQueueMicrotask =
    (Fo = Ci(window, "queueMicrotask")) !== null && Fo !== void 0
      ? Fo
      : setTimeout;
  window.csClearTimeout = Ci(window, "clearTimeout");
  window.csClearInterval = Ci(window, "clearInterval");
  window.csFileReader = Ci(window, "FileReader");
  (() => {
    var s;
    let r = 0;
    function t(i) {
      return "cs$Symbol_" + i;
    }
    function e(i) {
      return t(i) + ++r;
    }
    (e.for = t),
      (window.csSymbol = (s = window.Symbol) !== null && s !== void 0 ? s : e);
  })();
  function ef() {
    let s = document.createElement("iframe");
    (s.id = tf),
      s.setAttribute("hidden", ""),
      s.setAttribute("title", "Intentionally blank"),
      s.setAttribute("sandbox", "allow-same-origin");
    let r = document.createElement("cs-native-frame-holder");
    if (
      (r.setAttribute("hidden", ""),
      document.body.appendChild(r),
      !!Element.prototype.attachShadow)
    ) {
      let e = r.attachShadow({ mode: "closed" });
      return (e.innerHTML = s.outerHTML), e.firstElementChild.contentWindow;
    }
    return (r.innerHTML = s.outerHTML), r.firstElementChild.contentWindow;
  }
  function sf(s, r) {
    let t,
      e = s;
    for (; e && !(t = Object.getOwnPropertyDescriptor(e, r)); )
      e = Object.getPrototypeOf(e);
    return t;
  }
  function rf(s, r, t) {
    let e = sf(s, r);
    if (!e)
      return function () {
        return this[r];
      };
    switch (t) {
      case "get":
        return e.get;
      case "set":
        return e.set;
      case "value":
        return e.value;
    }
  }
  function Bu(s) {
    var r, t;
    Object.keys(Gs.constructors).forEach((i) => {
      window[Gs.constructors[i]] =
        s[i] instanceof Function && s[i].prototype == null
          ? s[i].bind(window)
          : s[i];
    }),
      af(s);
    let e = s.MutationObserver;
    ("Prototype" in window || of()) &&
      (e =
        (t =
          (r = Ci(window, "MutationObserver")) !== null && r !== void 0
            ? r
            : window.WebKitMutationObserver) !== null && t !== void 0
          ? t
          : window.MutationObserver),
      (window.csIntersectionObserver = tl(
        window.IntersectionObserver,
        He.IntersectionObserver
      )),
      (window.csMutationObserver = tl(e, He.MutationObserver)),
      Bi("csNode", Gs.nodeProperties, s.Node.prototype, "get"),
      Bi("csElement", Gs.elementProperties, s.Element.prototype, "get"),
      Bi(
        "csElement",
        Gs.elementPropertiesValues,
        s.Element.prototype,
        "value",
        !1
      ),
      Bi(
        "csHTMLImageElement",
        Gs.imageProperties,
        s.HTMLImageElement.prototype,
        "set"
      ),
      Bi("csEvent", Gs.eventProperties, s.Event.prototype, "get"),
      Bi("csNavigator", Gs.navigatorProperties, s.navigator, "value");
  }
  function Bi(s, r, t, e, i = !0) {
    r.forEach((n) => {
      let o = typeof n != "string" && "binding" in n,
        c = o ? n.propertyName : n;
      (i || c in t) &&
        ((window[`${s + c}`] = rf(t, c, e)),
        o && (window[`${s + c}`] = window[`${s + c}`].bind(n.binding)));
    });
  }
  function cc(s, r) {
    (window.CSProtectnativeFunctionsLogs =
      window.CSProtectnativeFunctionsLogs || {}),
      (window.CSProtectnativeFunctionsLogs[s] = r);
  }
  function nf() {
    try {
      let s = ef();
      return s ? ((window.CSPureWindow = s), Bu(window.CSPureWindow), !0) : !1;
    } catch (s) {
      return (
        cc(
          "Warning",
          `failed to copy references from pure iframe: ${s.message}`
        ),
        !1
      );
    }
  }
  if (!nf())
    try {
      Bu(gt);
    } catch (s) {
      cc("Critical", `failed to copy references from window: ${s.message}`);
    }
  function of() {
    return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  }
  function af(s) {
    (window.csquerySelector = {
      1: s.Element.prototype.querySelector,
      9: s.Document.prototype.querySelector,
      11: s.DocumentFragment.prototype.querySelector,
    }),
      (window.csquerySelectorAll = {
        1: s.Element.prototype.querySelectorAll,
        9: s.Document.prototype.querySelectorAll,
        11: s.DocumentFragment.prototype.querySelectorAll,
      });
  }
  function tl(s, r) {
    try {
      let t = function (e, i) {
        return new s((o, c) => {
          ks(() => e(o, c), [r, s.name]);
        }, i);
      };
      return (t.base = s), t;
    } catch {
      return cc("Warning", `failed to extends ${s.name}`), s;
    }
  }
  var Jt = (() => {
    let s;
    return (
      (function (r) {
        r.ELLIPSIS = "\u2026";
        function t(o) {
          return csString.prototype.replace.call(
            o,
            /[.*+?^${}()|[\]\\]/g,
            "\\$&"
          );
        }
        function e(o) {
          return csString.prototype.replace.call(
            o,
            /([#;&,.+*~':"!^$[\]()<=>|/%?@`{}\\ ])/g,
            "\\$1"
          );
        }
        r.escapeInvalidCharacters = e;
        function i(o, c, h) {
          if ("replaceAll" in csString.prototype)
            return csString.prototype.replaceAll.call(o, c, h);
          let d = new csRegExp(t(c), "g");
          return csString.prototype.replace.call(o, d, h);
        }
        r.stringReplaceAll = i;
        function n(o, c, h = "") {
          return o.length <= c
            ? o
            : csString.prototype.slice.call(o, 0, c - h.length) + h;
        }
        r.truncate = n;
      })(s || (s = {})),
      s
    );
  })();
  function Ra(s) {
    return Jt.escapeInvalidCharacters(
      csString.prototype.toLowerCase.call(s.localName)
    );
  }
  function cf(s) {
    let r = s.getAttribute("id");
    return r && Jt.escapeInvalidCharacters(r);
  }
  function It(s) {
    return csNodenodeType.apply(s) === 1;
  }
  function Nn(s) {
    return csNodenodeType.apply(s) === 3;
  }
  function lf(s) {
    return csNodenodeType.apply(s) === 8;
  }
  function $u(s) {
    return It(s) && s.localName === "link";
  }
  function uf(s) {
    return It(s) && s.localName === "source";
  }
  function Fu(s) {
    return It(s) && s.localName === "a";
  }
  function lc(s) {
    return $u(s) && csString.prototype.indexOf.call(s.rel, "stylesheet") !== -1;
  }
  function hf(s) {
    return It(s) && s.localName === "img";
  }
  function Fn(s) {
    return It(s) && s.localName === "style";
  }
  function Gn(s) {
    return It(s) && s.localName === "input";
  }
  function uc(s) {
    return It(s) && s.localName === "textarea";
  }
  function zn(s) {
    return It(s) && s.localName === "script";
  }
  function df(s) {
    return It(s) && s.localName === "button";
  }
  function ir(s) {
    return It(s) && "ownerSVGElement" in s;
  }
  function hc(s) {
    return It(s) && s.localName === "select";
  }
  function ff(s) {
    return It(s) && s.localName === "details";
  }
  function pf(s) {
    return It(s) && s.localName === "summary";
  }
  function gf(s) {
    return ir(s) && s.localName === "image";
  }
  function mf(s) {
    return ir(s) && s.localName === "use";
  }
  function yf(s) {
    return ir(s) && s.localName === "feImage";
  }
  function Ef(s) {
    switch (csNodenodeType.apply(s)) {
      case 9:
      case 11:
        return !0;
      default:
        return !1;
    }
  }
  function Sf(s) {
    switch (csNodenodeType.apply(s)) {
      case 9:
      case 11:
      case 1:
        return !0;
      default:
        return !1;
    }
  }
  function Mn(s) {
    return csNodenodeType.apply(s) === 9;
  }
  function Ji(s) {
    return Ef(s) && "host" in s && "mode" in s;
  }
  function Gu(s) {
    return (
      It(s) &&
      !!csElementshadowRoot.apply(s) &&
      Ji(csElementshadowRoot.apply(s))
    );
  }
  var vf = [
    "annotation-xml",
    "color-profile",
    "font-face",
    "font-face-src",
    "font-face-uri",
    "font-face-format",
    "font-face-name",
    "missing-glyph",
  ];
  function _f(s) {
    return (
      It(s) &&
      Ct(s.tagName) &&
      csString.prototype.indexOf.call(s.tagName, "-") > 0 &&
      csString.prototype.indexOf.call(s.tagName, ":") === -1 &&
      csString.prototype.indexOf.call(s.tagName, '"') === -1 &&
      csString.prototype.indexOf.call(s.tagName, ",") === -1 &&
      csArray.prototype.indexOf.call(
        vf,
        csString.prototype.toLocaleLowerCase.call(s.tagName)
      ) < 0
    );
  }
  var $r = "detached";
  function zu(s) {
    let r = s,
      t = [r];
    for (; csNodeparentNode.apply(r) !== null; )
      (r = csNodeparentNode.apply(r)), csArray.prototype.push.call(t, r);
    return (
      Dn(r) && csArray.prototype.push.call(t, $r),
      { ancestors: t, selectionRoot: r }
    );
  }
  function wf(s) {
    let r = s,
      t = [r],
      e = null;
    for (; csNodeparentNode.apply(r) !== null; )
      e === null && Fu(r) && (e = r),
        csArray.prototype.push.call(t, csNodeparentNode.apply(r)),
        (r = csNodeparentNode.apply(r));
    return (
      Dn(r) && csArray.prototype.push.call(t, $r),
      { firstAnchorParent: e, ancestors: t, selectionRoot: r }
    );
  }
  function Dn(s) {
    return ti.isValidElement(s);
  }
  var Ei = (() => {
      var s, r;
      return (r =
        (s = gt.Element) === null || s === void 0 ? void 0 : s.prototype) !==
        null && r !== void 0
        ? r
        : {};
    })(),
    Pe =
      Ei.matches ||
      Ei.matchesSelector ||
      Ei.mozMatchesSelector ||
      Ei.msMatchesSelector ||
      Ei.oMatchesSelector ||
      Ei.webkitMatchesSelector,
    el = Ei.closest,
    qu = 9;
  function Af(s, r) {
    return r ? csArray.prototype.some.call(r, (t) => Pe.call(s, t)) : !1;
  }
  function bf(s, r, t) {
    if (s === $r || csNodenodeType.apply(s) === qu) return 0;
    let e = t.dynamicElementNameRegex,
      i = !!(e != null && e.test(r.localName)),
      n = Ra(r),
      o = 0,
      c = r.previousElementSibling;
    for (; c; )
      (Ra(c) === n || (i && e != null && e.test(c.localName))) &&
        !Af(c, t.reliableSelectors) &&
        (o += 1),
        (c = c.previousElementSibling);
    return o;
  }
  function Tf(s, r, t) {
    if (s === $r || csNodenodeType.apply(s) === qu) return 0;
    let e = 0,
      i = r.previousElementSibling;
    for (; i; ) Pe.call(i, t) && (e += 1), (i = i.previousElementSibling);
    return e;
  }
  var Rf = [/\d{4}/, /^ember\d+$/],
    Cf = "@",
    dc = "data-cs-override-id",
    If = "data-cs-dynamic-id";
  function Wu(s, r, t, e) {
    let i = e.dynamicIdRegex || null,
      n = e.dynamicElementNameRegex,
      o = Ra(s);
    if (
      (n &&
        n.test(s.localName) &&
        (o = csString.prototype.replace.call(o, n, `$1${Cf}`)),
      Nf(s, t))
    ) {
      let _ = fc(s);
      return { hasUniqueIdentifier: !0, elementSelector: `${o}[${dc}="${_}"]` };
    }
    let c = Uf(s, t, e);
    if (c.success)
      return {
        hasUniqueIdentifier: !0,
        elementSelector: `${o}#UA[${c.attributeName}="${c.attributeValue}"]`,
      };
    let h = Pf(s, t, e);
    if (h)
      return { hasUniqueIdentifier: !0, elementSelector: `${o}#UCS[${h}]` };
    let d = cf(s);
    if (Df(s, d, t, i))
      return { hasUniqueIdentifier: !0, elementSelector: `${o}#${d}` };
    let S = Of(s, e);
    if (S) {
      let _ = Tf(r, s, S);
      return { hasUniqueIdentifier: !1, elementSelector: `${o}[${S}](${_})` };
    }
    let y = bf(r, s, e);
    return { hasUniqueIdentifier: !1, elementSelector: `${o}:eq(${y})` };
  }
  function Pf(s, r, t) {
    if (t.uniqueCssSelectors) {
      for (let e of t.uniqueCssSelectors)
        if (Pe.call(s, e) && Vf(e, r)) return e;
    }
  }
  function Of(s, r) {
    if (r.reliableSelectors) {
      for (let t of r.reliableSelectors) if (Pe.call(s, t)) return t;
    }
  }
  function Nf(s, r) {
    let t = fc(s);
    return t && csString.prototype.match.call(t, /^[\w-]+$/) && pc(dc, t, r);
  }
  function Mf(s) {
    return fc(s) !== null;
  }
  function fc(s) {
    return s.getAttribute(dc);
  }
  function Df(s, r, t, e) {
    return r && !Mf(s) && !kf(s, r, e) && Lf(r, t);
  }
  function kf(s, r, t) {
    return s.hasAttribute(If) || xf(r, t);
  }
  function xf(s, r) {
    let t = !1;
    return (
      s && r && (t = r.test(s)),
      s && (csArray.prototype.some.call(Rf, (e) => e.test(s)) || t)
    );
  }
  function Lf(s, r) {
    return s && pc("id", s, r);
  }
  function pc(s, r, t) {
    try {
      return (
        window.csquerySelectorAll[t.nodeType].call(t, `[${s}="${r}"]`)
          .length === 1
      );
    } catch (e) {
      if (e.name !== "SyntaxError") throw e;
    }
    return !1;
  }
  function Vf(s, r) {
    try {
      return window.csquerySelectorAll[r.nodeType].call(r, s).length === 1;
    } catch (t) {
      if (t.name !== "SyntaxError") throw t;
    }
    return !1;
  }
  function Uf(s, r, t) {
    if (!t.uniqueAttributes) return { success: !1 };
    for (let e of t.uniqueAttributes) {
      let i = s.getAttribute(e);
      if (i !== null && pc(e, i, r))
        return { attributeName: e, attributeValue: i, success: !0 };
    }
    return { success: !1 };
  }
  var Ca = 11;
  function kn(s, r, t) {
    let e = csArray.prototype.shift.call(s);
    if (s.length === 0) return sl(e, t);
    let i = e,
      n = s[0],
      { elementSelector: o, hasUniqueIdentifier: c } = Wu(i, n, r, t);
    if (!t.fullPath && c) {
      let d = s[s.length - 1];
      return `${sl(d, t)}${o}`;
    }
    let h = kn(s, r, t);
    return `${h ? `${h}>` : ""}${o}`;
  }
  function sl(s, r) {
    if (s === $r) return "|detached|";
    if (s.host) {
      let { ancestors: t, selectionRoot: e } = zu(s.host);
      return `${kn(t, e, r)}|shadow-root|`;
    }
    return csNodenodeType.apply(s) === Ca ? "|fragment|" : "";
  }
  var Yu = (() => {
      class s {
        constructor(t) {
          (this.options = t), (this.done = !1), (this.path = null);
        }
        getPath() {
          if (this.path === null)
            throw new Error("getPath was called before serializeElement");
          return this.path;
        }
        isDone() {
          return this.done;
        }
      }
      return s;
    })(),
    Hf = (() => {
      class s extends Yu {
        constructor() {
          super(...arguments), (this.Bo = !1), (this.$o = !1), (this.kc = !1);
        }
        yE(t, e) {
          return (
            this.Bo &&
            !(e === null && Dn(t)) &&
            csNodenodeType.apply(t) !== Ca &&
            !t.host
          );
        }
        EE(t) {
          return !t.localName;
        }
        serializeElement(t, e, i) {
          var n;
          if (
            (((n = this.path) !== null && n !== void 0) || (this.path = ""),
            this.yE(t, e))
          )
            return;
          let o = !1;
          e === null && Dn(t) && ((o = !0), (this.done = !0));
          let c = this.$o && !this.options.fullPath ? "" : ">",
            h = !!t.host;
          if (
            (h &&
              this.path &&
              ((this.path = "|shadow-root|" + c + this.path),
              (this.kc = !0),
              (this.Bo = !1),
              (this.$o = !1)),
            !h && e === null && csNodenodeType.apply(t) === Ca)
          ) {
            (this.path = "|fragment|" + c + this.path), (this.done = !0);
            return;
          }
          if (this.EE(t)) return;
          let d = e != null ? e : "detached",
            { elementSelector: S, hasUniqueIdentifier: y } = Wu(
              t,
              d,
              i,
              this.options
            );
          y && ((this.$o = !0), (this.Bo = !this.options.fullPath));
          let _ = `${o ? `|detached|${c}` : ""}${this.Bo && !y ? "" : S}`,
            T =
              !y && this.$o && !this.options.fullPath
                ? ""
                : this.path && !this.kc
                ? ">"
                : "";
          (this.kc = !1), (this.path = `${_}${T}${this.path}`);
        }
      }
      return s;
    })(),
    qt = (() => {
      let s;
      return (
        (function (r) {
          function t() {
            let y = [i()];
            return (
              document.documentElement &&
                csArray.prototype.push.call(
                  y,
                  document.documentElement.scrollHeight,
                  document.documentElement.offsetHeight,
                  document.documentElement.clientHeight
                ),
              document.body &&
                csArray.prototype.push.call(
                  y,
                  document.body.scrollHeight,
                  document.body.offsetHeight
                ),
              Math.max(...y)
            );
          }
          r.documentHeight = t;
          function e() {
            return document.documentElement.scrollWidth;
          }
          r.documentWidth = e;
          function i() {
            return window.innerHeight;
          }
          r.windowHeight = i;
          function n() {
            return window.innerWidth;
          }
          r.windowWidth = n;
          function o() {
            let y = window.csScreen.width;
            return wi(y) && y > 0 ? y : window.screen.width;
          }
          r.screenWidth = o;
          function c() {
            let y = window.csScreen.height;
            return wi(y) && y > 0 ? y : window.screen.height;
          }
          r.screenHeight = c;
          function h() {
            return window.pageXOffset;
          }
          r.windowOffsetX = h;
          function d() {
            return window.pageYOffset;
          }
          r.windowOffsetY = d;
          function S() {
            return {
              dw: `${e()}`,
              dh: `${t()}`,
              ww: `${n()}`,
              wh: `${i()}`,
              sw: `${o()}`,
              sh: `${c()}`,
            };
          }
          r.getRequestParameters = S;
        })(s || (s = {})),
        s
      );
    })();
  function _e(s, r = fe.SHOW_ALL) {
    let t = r | fe.SHOW_ELEMENT,
      e = [document.createTreeWalker(s, t, null, !1)],
      i = il(s);
    i &&
      csArray.prototype.push.call(e, document.createTreeWalker(i, t, null, !1));
    let n = null;
    return {
      root: s,
      nextNode() {
        if (i) {
          let o = i;
          return (i = null), o;
        }
        for (; e.length > 0; ) {
          if (n) {
            let d = n;
            return (n = null), d;
          }
          let c = e[e.length - 1].nextNode();
          if (!c) {
            csArray.prototype.pop.call(e);
            continue;
          }
          let h = il(c);
          if (
            (r & fe.SHOW_DOCUMENT_FRAGMENT && h && (n = h),
            h &&
              csArray.prototype.push.call(
                e,
                document.createTreeWalker(h, t, null, !1)
              ),
            (zo[csNodenodeType.apply(c)] & r) !== 0)
          )
            return c;
        }
        return null;
      },
      visitAll(o) {
        zo[csNodenodeType.apply(s)] & r && o(s);
        let c = this.nextNode();
        for (; c; ) {
          if ((zo[csNodenodeType.apply(c)] & r) === 0) {
            c = this.nextNode();
            continue;
          }
          o(c), (c = this.nextNode());
        }
      },
      find(o) {
        let c;
        return this.visitAll((h) => o(h) && (c = h)), c;
      },
      collectAll(o) {
        let c = [];
        return (
          this.visitAll((h) => csArray.prototype.push.call(c, o ? o(h) : h)), c
        );
      },
    };
  }
  function il(s) {
    return s && Gu(s) ? s.shadowRoot : null;
  }
  var Go = (() => {
      var s;
      return (s = gt.Node) !== null && s !== void 0 ? s : {};
    })(),
    fe = (() => {
      var s;
      return (s = gt.NodeFilter) !== null && s !== void 0 ? s : {};
    })(),
    zo = {
      2: fe.SHOW_ATTRIBUTE,
      4: fe.SHOW_CDATA_SECTION,
      8: fe.SHOW_COMMENT,
      11: fe.SHOW_DOCUMENT_FRAGMENT,
      9: fe.SHOW_DOCUMENT,
      10: fe.SHOW_DOCUMENT_TYPE,
      1: fe.SHOW_ELEMENT,
      [Go.ENTITY_NODE]: fe.SHOW_ENTITY,
      [Go.ENTITY_REFERENCE_NODE]: fe.SHOW_ENTITY_REFERENCE,
      [Go.NOTATION_NODE]: fe.SHOW_NOTATION,
      7: fe.SHOW_PROCESSING_INSTRUCTION,
      3: fe.SHOW_TEXT,
    },
    Xu = !1,
    Ia = 5,
    pn = 50;
  function jf(s = 5) {
    (Xu = Tt.isPerfLoggingActive()), (Ia = s);
  }
  function Ii(s, r) {
    return function () {
      if (!Xu) return s.apply(this, arguments);
      let t = q.elapsed(),
        e = s.apply(this, arguments);
      if (e != null && e.then)
        e.then(() => {
          let i = q.elapsed() - t;
          i >= Ia && st.counters.methodPerformance.add(r, i),
            i > pn && st.counters.blockingTime.push(i - pn);
        });
      else {
        let i = q.elapsed() - t;
        i >= Ia && st.counters.methodPerformance.add(r, i),
          i > pn && st.counters.blockingTime.push(i - pn);
      }
      return e;
    };
  }
  var Qt = function (s) {
      return function (r, t, e) {
        let i = e.value;
        e.value = Ii(i, s);
      };
    },
    _i = (() => {
      let s;
      return (
        (function (r) {
          function t() {
            return !!Element.prototype.attachShadow;
          }
          r.isSupported = t;
          function e(n) {
            return n && Gu(n) ? n.shadowRoot : null;
          }
          r.getShadowRoot = e;
          function i(n) {
            return _e(n, NodeFilter.SHOW_DOCUMENT_FRAGMENT).collectAll(
              (o) => o.host
            );
          }
          r.getAllShadowHosts = Ii(i, "getAllShadowHosts");
        })(s || (s = {})),
        s
      );
    })(),
    qo = (() => {
      var s;
      return (s = gt.Node) !== null && s !== void 0 ? s : Object;
    })(),
    bt = (() => {
      let s;
      return (
        (function (r) {
          let t =
            "isConnected" in qo.prototype
              ? (I) => I.isConnected
              : (I) =>
                  !I.ownerDocument ||
                  !(
                    I.ownerDocument.compareDocumentPosition(I) &
                    I.DOCUMENT_POSITION_DISCONNECTED
                  );
          function e(I, Y) {
            for (let Q = I; Q; Q = csNodenextSibling.apply(Q)) Y(I);
          }
          r.forEachChild = e;
          function i(I) {
            return t(I);
          }
          r.isConnected = i;
          function n(I, Y) {
            let Q = [];
            for (let nt of h(I, Y)) csArray.prototype.push.call(Q, nt);
            return Q;
          }
          r.getAncestors = n;
          let o = (I, Y) => {
            var Q;
            return (Q = csNodeparentNode.apply(I)) !== null && Q !== void 0
              ? Q
              : Y && Ji(I)
              ? I.host
              : null;
          };
          function c(I, Y, Q = !1) {
            let nt = I;
            for (; nt; ) {
              if (Y(nt)) return nt;
              let Pt = o(nt, Q);
              if (Pt && Pt !== nt) nt = Pt;
              else break;
            }
            return null;
          }
          r.findAncestor = c;
          function* h(I, Y = !1) {
            let Q = I;
            for (; Q; ) {
              yield Q;
              let nt = o(Q, Y);
              if (nt && nt !== Q) Q = nt;
              else break;
            }
          }
          r.walkUp = h;
          function d(I, Y) {
            if (I === Y || Y.contains(I)) return !0;
            let Q = r.getParentElement(I);
            return Q && Q !== I ? d(Q, Y) : !1;
          }
          r.isDescendantOf = d;
          function S(I) {
            var Y;
            return I.parentElement
              ? I.parentElement
              : r.getRootNode(I)
              ? (Y = r.getRootNode(I)) === null || Y === void 0
                ? void 0
                : Y.host
              : null;
          }
          r.getParentElement = S;
          function y(I, Y = document) {
            let Q = Dr(window.csquerySelectorAll[Y.nodeType].call(Y, I)),
              nt = _i.getAllShadowHosts(Y);
            for (let Pt of nt) {
              let jt = _i.getShadowRoot(Pt);
              if (!jt) continue;
              let Ne = Dr(window.csquerySelectorAll[jt.nodeType].call(jt, I));
              csArray.prototype.push.call(Q, ...Ne);
            }
            return Q;
          }
          (r.findAllElements = y),
            (r.getRootNode = (() => {
              if ("getRootNode" in qo.prototype)
                return (Q, nt) => Q.getRootNode(nt);
              function I(Q) {
                let nt = Y(Q);
                return Ji(nt) ? I(nt.host) : nt;
              }
              function Y(Q) {
                return csNodeparentNode.apply(Q) != null
                  ? Y(csNodeparentNode.apply(Q))
                  : Q;
              }
              return (Q, nt) =>
                typeof nt == "object" && !!nt.composed ? I(Q) : Y(Q);
            })());
          function _(I) {
            return (
              I === "transparent" ||
              /^(rgba|hsla)\(\d+, \d+%?, \d+%?, 0\)$/.test(I)
            );
          }
          function w(I) {
            let Y = I.getBoundingClientRect();
            return (
              Y.right + qt.windowOffsetX() < 0 ||
              Y.bottom + qt.windowOffsetY() < 0
            );
          }
          function T(I) {
            var Y, Q;
            if (
              ((Y = I.checkVisibility) === null || Y === void 0
                ? void 0
                : Y.call(I, { checkOpacity: !0, checkVisibilityCSS: !0 })) ===
              !1
            )
              return !0;
            if (!I.offsetParent) {
              if (!I.getBoundingClientRect)
                return (
                  Tt.warn(
                    `SUP-11432: Element doesn't have getBoundingClientRect. Node: ${
                      I instanceof qo
                    } Ctor: ${
                      (Q = I == null ? void 0 : I.constructor) === null ||
                      Q === void 0
                        ? void 0
                        : Q.name
                    }`
                  ),
                  !1
                );
              let jt = I.getBoundingClientRect();
              if (jt.width === 0 && jt.height === 0) return !0;
            }
            let nt = window.getComputedStyle(I);
            return nt
              ? nt.display === "none" ||
                  nt.visibility === "hidden" ||
                  nt.visibility === "collapse" ||
                  nt.opacity === "0" ||
                  nt.filter === "opacity(0)" ||
                  (nt.width === "0px" && nt.height === "0px") ||
                  _(nt.color)
              : !0;
          }
          r.isHiddenByCSS = T;
          function M(I) {
            if (T(I)) return !0;
            let Q = S(I);
            return Q != null && M(Q);
          }
          r.areAncestorsHiddenByCSS = M;
          function x(I) {
            let Y = null,
              Q = I;
            do
              if (T(Q)) Y = Q;
              else break;
            while ((Q = S(Q)));
            return Y;
          }
          r.getTopAncestorHiddenByCSS = x;
          function P(I) {
            let Y = N(I);
            return Y !== null && !I.contains(Y) && !Y.contains(I);
          }
          function N(I) {
            let Y = I.getBoundingClientRect(),
              Q = Y.left + 0.5 * Y.width,
              nt = Y.top + 0.5 * Y.height;
            return D(document, Q, nt);
          }
          r.getTopElement = N;
          function W(I) {
            if (!I.getBoundingClientRect) return null;
            let Y = I.getBoundingClientRect(),
              Q = Y.x + Y.width / 2,
              nt = Y.y + Y.height / 2;
            return r.getTopElementFromPoint(document, Q, nt);
          }
          r.getElementOnTop = W;
          function D(I, Y, Q) {
            let nt = I.elementFromPoint(Y, Q);
            if (!nt) return null;
            let Pt = _i.getShadowRoot(nt);
            return Pt && Pt !== r.getRootNode(document.body) && Pt !== I
              ? D(Pt, Y, Q)
              : nt;
          }
          r.getTopElementFromPoint = D;
          function L(I) {
            return !w(I) && !T(I) && !P(I);
          }
          r.isVisibleInDocument = L;
          function it(I) {
            return T(I) ? !1 : et(I);
          }
          r.isVisibleInViewportInForeground = it;
          function et(I) {
            let Y = N(I);
            return Y === null
              ? !1
              : I === Y
              ? !0
              : oe(I)
              ? I.textContent !== "" && Y.contains(I)
              : I.contains(Y);
          }
          r.isInViewPort = et;
          function ht(I, Y, Q) {
            let nt = I.getAttributeNS(Y, Q);
            return nt === "" ? (I.hasAttributeNS(Y, Q) ? nt : null) : nt;
          }
          r.getAttributeNS = ht;
          function Nt(I) {
            return !!(
              I.hasAttribute("tabIndex") ||
              I.getAttribute("contentEditable") === "true" ||
              (Fu(I) && I.hasAttribute("href")) ||
              ((hc(I) || uc(I) || Gn(I) || df(I)) &&
                !I.hasAttribute("disabled")) ||
              ff(I) ||
              pf(I)
            );
          }
          r.isElementFocusable = Nt;
          function oe(I) {
            return (
              I.localName === "span" ||
              I.localName === "a" ||
              I.localName === "b" ||
              I.localName === "i" ||
              I.localName === "button" ||
              I.localName === "input" ||
              I.localName === "label" ||
              I.localName === "cite" ||
              I.localName === "small" ||
              I.localName === "strong" ||
              I.localName === "code" ||
              I.localName === "abbr" ||
              I.localName === "em" ||
              I.localName === "dfn" ||
              I.localName === "time" ||
              I.localName === "output" ||
              I.localName === "object" ||
              I.localName === "sub"
            );
          }
          r.isInlineElement = oe;
          function ae(I) {
            document.readyState === "loading"
              ? document.addEventListener("DOMContentLoaded", () => I(), {
                  once: !0,
                })
              : csSetTimeout(I);
          }
          r.onDocumentLoaded = ae;
        })(s || (s = {})),
        s
      );
    })(),
    Bf = (() => {
      class s {
        constructor(t) {
          this.SE = t;
        }
        run(t) {
          let e = [...this.SE],
            i = bt.getAncestors(t, !1),
            n = i[i.length - 1];
          for (; e.length > 0 && i.length > 0; ) {
            let o = csArray.prototype.shift.call(i),
              c = i[0] || null;
            if ((this.vE(e, o, c, n), this._E(e), e.length === 0)) break;
            i.length === 0 &&
              o.host &&
              ((i = bt.getAncestors(o.host, !1)), (n = i[i.length - 1]));
          }
        }
        vE(t, e, i, n) {
          for (let o of t) o.serializeElement(e, i, n);
        }
        _E(t) {
          for (let e = 0; e < t.length; e++)
            t[e].isDone() && (csArray.prototype.splice.call(t, e, 1), e--);
        }
      }
      return s;
    })(),
    $f = (() => {
      class s extends Yu {
        serializeElement(t) {
          var e;
          if (
            (((e = this.path) !== null && e !== void 0) || (this.path = ""),
            (t === "detached" || t.localName === "body") &&
              ((this.done = !0), this.path.length > 0))
          )
            return;
          let i = this.wE(t);
          if (
            ((i += i.length > 0 ? "|" : ""),
            this.path.length + i.length > this.options.hierarchyMaxLength)
          ) {
            this.done = !0;
            return;
          }
          this.path = i + this.path;
        }
        wE(t) {
          if (!t.localName) return "";
          let e = `@${t.localName};`;
          return (
            (e += this.AE(t.id)),
            t.classList && (e += this.bE(csArray.from(t.classList))),
            t.attributes && (e += this.TE(t)),
            e
          );
        }
        AE(t) {
          return t ? `#${t};` : "";
        }
        bE(t) {
          return t.length > 0
            ? `.${csArray.prototype.join.call(
                csArray.prototype.sort.call(t),
                ";."
              )};`
            : "";
        }
        RE(t, e) {
          var i, n;
          return (
            ((n = (i = this.options).isAttributeSensitive) === null ||
            n === void 0
              ? void 0
              : n.call(i, t, e)) ||
            csArray.prototype.indexOf.call(
              this.options.attributeIgnoreTokens,
              e
            ) !== -1 ||
            (ir(t) &&
              csString.prototype.indexOf.call(e, "data-") === -1 &&
              e !== "aria-label") ||
            (Gn(t) && e === "value")
          );
        }
        CE(t, e) {
          return (
            (this.options.useAnonymization &&
              !this.options.allWhitelistedAttributes.has(t)) ||
            e.length > this.options.attrMaxLength
          );
        }
        IE(t) {
          let e = {};
          for (let i of csArray.from(t.attributes))
            this.RE(t, i.name) || (e[i.name] = i.value);
          return e;
        }
        TE(t) {
          var e, i;
          if (
            !(
              (i = (e = this.options).isNodeSensitive) === null || i === void 0
            ) &&
            i.call(e, t)
          )
            return "";
          let n = Object.entries(this.IE(t));
          return (
            csArray.prototype.join.call(
              csArray.prototype.sort.call(
                csArray.prototype.map.call(
                  csArray.prototype.filter.call(
                    n,
                    ([o]) => o.length < this.options.attrMaxLength
                  ),
                  ([o, c]) => (this.CE(o, c) ? `[${o}]` : `[${o}=${c}]`)
                )
              ),
              ";"
            ) + (n.length > 0 ? ";" : "")
          );
        }
      }
      return s;
    })(),
    ti = (() => {
      let s;
      return (
        (function (r) {
          r.INVALID_ELEMENT = "INVALID_ELEMENT";
          function t(c) {
            return (
              !!c &&
              "localName" in c &&
              "getAttribute" in c &&
              "hasAttribute" in c &&
              "parentNode" in c
            );
          }
          r.isValidElement = t;
          function e(c, h, d = { fullPath: !1, dynamicIdRegex: null }) {
            let S = o(c);
            if (S === document) return { path: "", hierarchy: "" };
            if (!t(S))
              return { path: r.INVALID_ELEMENT, hierarchy: r.INVALID_ELEMENT };
            let y = new Hf(d),
              _ = new $f(h);
            return (
              new Bf([y, _]).run(S),
              { path: y.getPath(), hierarchy: _.getPath() }
            );
          }
          r.getElementPathAndHierarchy = e;
          function i(c, h = { fullPath: !1, dynamicIdRegex: null }) {
            let d = o(c);
            if (d === document) return "";
            if (!t(d)) return r.INVALID_ELEMENT;
            let { ancestors: S, selectionRoot: y } = zu(d);
            return kn(S, y, h);
          }
          r.getElementPath = i;
          function n(c, h = { fullPath: !1, dynamicIdRegex: null }) {
            let d = o(c);
            if (d === document) return { path: "", firstAnchorParent: null };
            if (!t(d))
              return { path: r.INVALID_ELEMENT, firstAnchorParent: null };
            let {
              firstAnchorParent: S,
              ancestors: y,
              selectionRoot: _,
            } = wf(d);
            return { path: kn(y, _, h), firstAnchorParent: S };
          }
          r.getElementPathAndFirstAnchorParent = n;
          function o(c) {
            return c && "jquery" in c && c.length === 1 ? c[0] : c;
          }
        })(s || (s = {})),
        s
      );
    })();
  window.CSPathComputation = window.CSPathComputation || ti;
  var Ff = (function () {
      "use strict";
      var s = {
          d: function (i, n) {
            for (var o in n)
              s.o(n, o) &&
                !s.o(i, o) &&
                Object.defineProperty(i, o, { enumerable: !0, get: n[o] });
          },
          o: function (i, n) {
            return Object.prototype.hasOwnProperty.call(i, n);
          },
        },
        r = {};
      s.d(r, {
        H: function () {
          return t;
        },
      });
      var t = function () {
          var i =
              arguments.length > 0 && arguments[0] !== void 0
                ? arguments[0]
                : {},
            n = i.tryCatch,
            o = i.exception,
            c = i.scriptDomain,
            h = i.hjHost,
            d = i.askUrl,
            S = i.surveysHost,
            y = i.surveyImagesHost,
            _ = i.surveyImpressionsEndpoint;
          (window.hj =
            window.hj ||
            function () {
              (window.hj.q = window.hj.q || []).push(arguments);
            }),
            (hj.q = window.hj.q || []),
            (window._hjSettings = window._hjSettings || {}),
            (hj.isPreview = !!_hjSettings.preview),
            (hj.settings =
              hj.isPreview || !window.hjSiteSettings
                ? {}
                : window.hjSiteSettings),
            (hj.scriptDomain =
              window.hj.scriptDomain || c || "https://script.hotjar.com/"),
            (hj.defaults = {
              environment: "live",
              host: "in.hotjar.com",
              insightsHost: "insights.hotjar.com",
              identifyEndpoint: "https://identify.hotjar.com",
              surveysHost: "surveys.hotjar.com",
              surveyImagesHost: "survey-images.hotjar.com",
              surveyImpressionsEndpoint: "https://surveystats.hotjar.io/hit",
              askUrl: "https://ask.hotjar.io/",
            }),
            (hj.environment =
              _hjSettings.environment || hj.defaults.environment),
            (hj.host = h || _hjSettings.host || hj.defaults.host),
            (hj.insightsHost =
              _hjSettings.insightsHost || hj.defaults.insightsHost),
            (hj.surveysHost =
              S || _hjSettings.surveysHost || hj.defaults.surveysHost),
            (hj.surveyImagesHost = y || hj.defaults.surveyImagesHost),
            (hj.apiUrlBase = "https://" + hj.host + "/api/v1"),
            (hj.insightsHost =
              _hjSettings.insightsHost || hj.defaults.insightsHost),
            (hj.identifyEndpoint =
              _hjSettings.identifyEndpoint || hj.defaults.identifyEndpoint),
            (hj.askUrl = _hjSettings.askUrl || d || hj.defaults.askUrl),
            (hj.surveyImpressionsEndpoint =
              _ ||
              _hjSettings.surveyImpressionsEndpoint ||
              hj.defaults.surveyImpressionsEndpoint),
            (hj.userDeviceType = null),
            (hj.tryCatch = n || window.hj.tryCatch);
          var w = o && { log: o };
          hj.exceptions = w || window.hj.exceptions;
        },
        e = r.H;
      return { n: e };
    })(),
    Gf = Ff.n,
    Ku = ["t.contentsquare.net", "clicktale"],
    zf = (s) => {
      var r;
      if (
        typeof s.filename == "string" &&
        csArray.prototype.some.call(
          Ku,
          (t) => csString.prototype.indexOf.call(s.filename, t) > -1
        ) &&
        !(
          csString.prototype.indexOf.call(s.filename, "blob") > -1 &&
          (s.message == null
            ? void 0
            : csString.prototype.indexOf.call(s.message, "importScripts")) > -1
        )
      ) {
        let t = new Error(s.message);
        (t.stack = (r = s.error) === null || r === void 0 ? void 0 : r.stack),
          J.critical(t);
      }
    };
  window.addEventListener("error", zf);
  var J = (() => {
      class s {
        constructor() {}
        static whiteListFilename(t) {
          csArray.prototype.push.call(Ku, t);
        }
        static setStrategy(t) {
          s.ar = t;
        }
        static computeIsActive(t) {
          (s.Ge = Ai.boolean(t)), s.Ge ? (s.xc = Ai.boolean(10)) : (s.xc = !1);
        }
        static isLoggingActive() {
          return s.Ge;
        }
        static getStrategy() {
          return s.ar;
        }
        static debug(t, e = "") {
          s.Ge && this.ar.send(t, e, Ot.debug);
        }
        static warn(t, e = !0, i = "") {
          var n;
          st.counters.errors.count("warning"),
            s.Ge && e && this.ar.send(t, i, Ot.warn),
            (n = window.UXAnalytics.Console) === null ||
              n === void 0 ||
              n.warn(t);
        }
        static implementation(t, e = "") {
          st.counters.errors.count("implementation"),
            s.Ge && this.ar.send(t, e, Ot.implementation);
        }
        static error(t, e = "") {
          var i;
          st.counters.errors.count("error"),
            s.Ge && this.ar.send(t, e, Ot.error),
            (i = window.UXAnalytics.Console) === null ||
              i === void 0 ||
              i.error(t);
        }
        static critical(t, e = "") {
          st.counters.errors.count("critical"), this.ar.send(t, e, Ot.critical);
        }
        static tryToExecute(t, e) {
          return function (...i) {
            try {
              let n = e.apply(this, i);
              return ft(gt.Promise) && n instanceof gt.Promise
                ? n.then(
                    (o) => o,
                    (o) => s.error(ns(o) ? o : new Error(o), t)
                  )
                : n;
            } catch (n) {
              try {
                s.error(ns(n) ? n : new Error(n), t);
              } catch {}
            }
          };
        }
        static isPerfLoggingActive() {
          return s.xc;
        }
      }
      return (s.Ge = !1), (s.xc = !1), s;
    })(),
    qf = "https://script.hj.contentsquare.net/",
    Wf = "https://ask.hj.contentsquare.net/",
    Yf = "in.hj.contentsquare.net",
    Xf = "surveys.hotjar.com",
    Kf = "survey-images.hj.contentsquare.net",
    Jf = "https://surveystats.hj.contentsquare.net/hit",
    Qf = {
      tryCatch: (s, r) => J.tryToExecute(r, s),
      exception: (s, r) => J.error(s, r),
      scriptDomain: qf,
      hjHost: Yf,
      askUrl: Wf,
      surveysHost: Xf,
      surveyImagesHost: Kf,
      surveyImpressionsEndpoint: Jf,
    };
  Gf(Qf);
  var Zf = null;
  function tp(s) {
    Zf = s;
  }
  var ep = [],
    sp = [];
  function Ju(s, r) {
    return (
      csArray.prototype.push.call(s, r),
      () => {
        let t = csArray.prototype.indexOf.call(s, r);
        t !== -1 && csArray.prototype.splice.call(s, t, 1);
      }
    );
  }
  function ip(s) {
    return Ju(ep, s);
  }
  function rp(s) {
    return Ju(sp, s);
  }
  var Pa = !1;
  function np() {
    Pa = !0;
  }
  function Rt() {
    return (s, r, t) => {
      if (t) {
        let e = t.value;
        t.value = function (i, n) {
          ((i == null ? void 0 : i.isTrusted) === !1 && Pa) ||
            e.call(this, i, n);
        };
      } else {
        let e = s[r];
        if (typeof e != "function") return;
        s[r] = function (i, ...n) {
          ((i == null ? void 0 : i.isTrusted) === !1 && Pa) ||
            e.call(this, i, n);
        };
      }
    };
  }
  function op(s) {
    if (document != null && document.prerendering) {
      document.addEventListener("prerenderingchange", s, { once: !0 });
      return;
    }
    s();
  }
  var ap = (() => {
      class s {
        constructor(t, e) {
          (this.cr = t), (this.Md = e);
        }
        init() {
          (this.Dd = this.cr !== this.cr.top),
            (this.kd = this.Md.isWebView && this.cr === this.cr.top),
            (this.Md.iframesTracking && this.Dd && !this.PE()) || this.kd
              ? (this.xd = !1)
              : (this.xd = !0);
        }
        isInIframeContext() {
          return this.Dd;
        }
        isTopWindowTracker() {
          return this.xd;
        }
        isInWebViewContext() {
          return this.kd;
        }
        PE() {
          var t, e, i;
          let n = !1;
          try {
            n =
              Xe(
                (e =
                  (t = this.cr.top) === null || t === void 0
                    ? void 0
                    : t.$A) === null || e === void 0
                  ? void 0
                  : e.createComponent
              ) ||
              dt((i = this.cr.top) === null || i === void 0 ? void 0 : i.LWR);
          } catch {}
          return n;
        }
      }
      return s;
    })(),
    cp =
      /[a-zA-Z0-9._%+-]+(?:@|%40|%2540)[a-zA-Z0-9.%-_]+((?:\.|%2[eE])[a-zA-Z0-9-]+)+/g,
    lp = /[a-zA-Z0-9+_-](?:@|%40|%2540)/,
    up = "CS_ANONYMIZED_EMAIL",
    Wo = "([-A-Za-z0-9+/=_]|=[^=]|={3,})+",
    hp = new csRegExp(`(ey${Wo}\\.ey${Wo}\\.${Wo})`, "g"),
    dp = "CS_ANONYMIZED_JWT",
    fp = /[0-9]{4}/,
    pp =
      /(^|[^a-zA-Z0-9*.,-])([45*][0-9*]{3}([ -]?)[0-9*]{4}\3[0-9*]{4}\3[0-9*]{4})($|[^a-zA-Z0-9*.,-])/g,
    gp = "CS_ANONYMIZED_PII",
    mp = "\u2022",
    yp = /\d/g,
    Ep = /([+(]{0,2}\d[-_ ()/]{0,4}){9,}/,
    Sp = /(?:\d{1,3}\.){3}\d{1,3}/,
    vp = /(?:[A-F0-9]{1,4}:){7}[A-F0-9]{1,4}/,
    _p = new csRegExp(
      "(?:^|[?&#]|%3[fF]|%2[36])(?:id_token|access_token|refresh_token|auth_token)(=|%3[dD]).*?(?=%2[36]|&|$)",
      "gi"
    ),
    wp = /_token/i,
    Ap = "CS_ANONYMIZED_TOKEN",
    Re = (() => {
      let s;
      return (
        (function (r) {
          function t(_) {
            return csString.prototype.replace.call(_, cp, up);
          }
          r.replaceEmail = t;
          function e(_) {
            return csString.prototype.replace.call(_, hp, dp);
          }
          r.replaceJWT = e;
          function i(_, w) {
            return csString.prototype.replace.call(_, pp, w);
          }
          r.replaceCreditCardNumber = i;
          function n(_) {
            return csString.prototype.replace.call(_, yp, mp);
          }
          r.replaceDigits = n;
          function o(_) {
            return csString.prototype.replace.call(_, _p, function (w) {
              let T = csString.prototype.match.call(w, /%3d/i),
                M = T ? T[0] : "=";
              return csString.prototype.split.call(w, M)[0] + M + Ap;
            });
          }
          r.replaceTokens = o;
          function c(_) {
            return Sp.test(_) || vp.test(_);
          }
          r.mayHaveIPAddress = c;
          function h(_) {
            return Ep.test(_);
          }
          r.mayHaveNumberSequence = h;
          function d(_) {
            return fp.test(_);
          }
          r.mayHaveCreditCardNumber = d;
          function S(_) {
            return lp.test(_);
          }
          r.mayHaveEmail = S;
          function y(_) {
            return wp.test(_);
          }
          r.mayHaveToken = y;
        })(s || (s = {})),
        s
      );
    })(),
    ri = (() => {
      class s {
        hasPII(t, e) {
          let i = this.checkAndAnonymizePII(t, e);
          return t !== i;
        }
        checkAndAnonymizePII(t, e = null) {
          let i = this.OE(this.Lc(t));
          return e === !0 ? (i = this.NE(i)) : e === !1 && (i = this.ME(i)), i;
        }
        anonymizePII(t) {
          return this.Lc(t);
        }
        anonymizeJwt(t) {
          return Re.replaceJWT(t);
        }
        anonymizeTokens(t) {
          return Re.mayHaveToken(t) ? Re.replaceTokens(t) : t;
        }
        anonymizeFields(t, e) {
          return (
            csArray.prototype.forEach.call(e, (i) => {
              t[i] = this.Lc(t[i]);
            }),
            t
          );
        }
        Lc(t) {
          if (Re.mayHaveEmail(t)) {
            let e = Re.replaceEmail(t);
            return e !== t && st.counters.redactedPII.count("email"), e;
          }
          return t;
        }
        NE(t) {
          return Re.replaceDigits(t);
        }
        ME(t) {
          return Re.mayHaveNumberSequence(t) ? Re.replaceDigits(t) : t;
        }
        OE(t) {
          return Re.mayHaveCreditCardNumber(t)
            ? Re.replaceCreditCardNumber(t, (e, i, n, o, c) => {
                if (csString.prototype.indexOf.call(n, "*") === -1) {
                  let d = o.length
                    ? csArray.prototype.join.call(
                        csString.prototype.split.call(n, o),
                        ""
                      )
                    : n;
                  if (!this.DE(d)) return e;
                  st.counters.redactedPII.count("cc");
                } else st.counters.redactedPII.count("cc-partial");
                return `${i}${gp}${c}`;
              })
            : t;
        }
        DE(t) {
          let e = parseInt(t[t.length - 1]),
            i = 0;
          for (let n = t.length - 2; n >= 0; n--) {
            let o = parseInt(t[n]);
            n % 2 === 0 && (o *= 2), (i += Math.floor(o / 10) + (o % 10));
          }
          return 10 - (i % 10) === e;
        }
      }
      return s;
    })(),
    Qu = "15.196.0";
  function gc() {
    return { v: Qu };
  }
  var Zu = (() => {
      class s {
        constructor(t, e) {
          (this.E = t), (this.O = e);
        }
        getRequestParameters() {
          return {
            d: `${q.now()}`,
            p: this.O.anonymizePII(window.location.href),
            ...this.E.getRequestParameters(),
            ...gc(),
          };
        }
      }
      return s;
    })(),
    bp = "No stacktrace",
    Tp = "No context";
  function th(s, r) {
    return ns(s) ? `${s.stack || bp} ${r}` : r || Tp;
  }
  function mc(s, r, t) {
    let e = ns(r) ? s.anonymizePII(r.message || r.toString()) : r;
    return t && (e += ` ErrorCode: ${t}`), e;
  }
  function rl() {}
  function Oa(s, r) {
    return csString.prototype.lastIndexOf.call(s, r, 0) === 0;
  }
  function Rp(s, r) {
    return csString.prototype.indexOf.call(s, r, s.length - r.length) !== -1;
  }
  var Yo = csSymbol("cachedJson");
  function Cp(s) {
    if (s[Yo]) return s[Yo];
    if (csArray.isArray(s)) {
      if (s.length === 0) return "[]";
      let r = "[" + bi(s[0]);
      for (let t = 1; t < s.length; t++) r += "," + bi(s[t]);
      return (r += "]");
    }
    return (s[Yo] = csJSON.stringify(s));
  }
  var bi = typeof window.Symbol != "undefined" ? Cp : csJSON.stringify;
  var kr = (() => {
      let s;
      return (
        (function (r) {
          function t(e) {
            return csArray.prototype.join.call(
              csArray.prototype.map.call(
                Object.keys(e),
                (i) => `${encodeURIComponent(i)}=${encodeURIComponent(e[i])}`
              ),
              "&"
            );
          }
          r.toQuery = t;
        })(s || (s = {})),
        s
      );
    })(),
    yc = (() => {
      class s {
        constructor(t, e) {
          (this.domainUri = t),
            (this.path = e),
            (this.beforeRequestCallbacks = []),
            (this.afterRequestCallbacks = []);
        }
        setRequestParametersProviders(...t) {
          this.requestParametersProviders = t;
        }
        before(t) {
          csArray.prototype.push.call(this.beforeRequestCallbacks, t);
        }
        after(t) {
          csArray.prototype.push.call(this.afterRequestCallbacks, t);
        }
        retrieveParameters() {
          return this.requestParametersProviders
            ? csArray.prototype.reduce.call(
                csArray.prototype.map.call(
                  this.requestParametersProviders,
                  (t) => t.getRequestParameters()
                ),
                (t, e) => ({ ...t, ...e })
              )
            : {};
        }
      }
      return s;
    })(),
    xr = (() => {
      class s extends yc {
        constructor(t, e) {
          super(t, e);
        }
        send() {
          csArray.prototype.forEach.call(this.beforeRequestCallbacks, (i) =>
            i()
          );
          let t = this.retrieveParameters();
          this.Vc(t);
          let e = kr.toQuery(t);
          this.kE(e),
            csArray.prototype.forEach.call(this.afterRequestCallbacks, (i) =>
              i()
            );
        }
        kE(t) {
          let e = new window.Image(1, 1);
          (e.onload = rl),
            (e.onerror = rl),
            csHTMLImageElementsrc.call(
              e,
              `${this.domainUri}${this.path ? `/${this.path}` : ""}?${t}`
            );
        }
        Vc(t) {
          t.r = csString.prototype.slice.call(`${Math.random()}`, 2, 8);
        }
      }
      return s;
    })(),
    eh = (() => {
      class s {
        constructor(t, e) {
          (this.ze = t), (this.xE = e);
        }
        init() {
          (this.Ut = new xr(this.ze.getLoggerUri())),
            this.Ut.setRequestParametersProviders(this, this.xE);
        }
        send(t) {
          (this.Fo = t), this.Ut.send();
        }
        getRequestParameters() {
          return {
            a: this.Fo.app,
            l: this.Fo.level,
            m: this.Fo.message,
            s: this.Fo.stacktrace,
          };
        }
      }
      return s;
    })(),
    Ip = "uxa",
    Pp = (() => {
      class s {
        constructor(t) {
          if (((this.Ut = null), (this.O = new ri()), t))
            try {
              let e = new Zu(t, this.O);
              (this.Ut = new eh(t, e)), this.Ut.init();
            } catch {
              this.Ut = null;
            }
        }
        send(t, e, i) {
          if (this.Ut)
            try {
              let n = {
                message: mc(this.O, t, e),
                stacktrace: th(t),
                app: Ip,
                level: i,
              };
              this.Ut.send(n);
              return;
            } catch {}
        }
      }
      return s;
    })();
  var Zt = (() => {
      let s;
      return (
        (function (r) {
          (r.Discovery = "discovery"),
            (r.Stop = "stop"),
            (r.RecordingContext = "recordingContext"),
            (r.SensitiveStatus = "sensitiveStatus"),
            (r.RecordingEvent = "recordingEvent"),
            (r.EndOfBufferedMessages = "endOfBufferedMessages"),
            (r.ChildLogMessage = "childLogMessage"),
            (r.AnalysisEvent = "analysisEvent"),
            (r.JavascriptError = "javascriptError"),
            (r.ApiError = "apiError"),
            (r.Assets = "assets"),
            (r.DetailedApiError = "detailedApiError"),
            (r.EmerchandisingMessage = "emerchandisingMessage"),
            (r.Commands = "commands"),
            (r.IntegrationCallback = "integrationCallback"),
            (r.StaticResource = "staticResource"),
            (r.TrackingContextResultMessage = "trackingContextResultMessage"),
            (r.TrackingContextRequestMessage = "trackingContextRequestMessage"),
            (r.CustomError = "customError");
        })(s || (s = {})),
        s
      );
    })(),
    te = !jr && document.createElement("a"),
    Op = /(:443|:80)$/;
  function Os(s) {
    return te ? ((te.href = s), te.href) : "";
  }
  function Np(s, r) {
    return new csURL(s, r).href;
  }
  function Mp(s, r) {
    return csArray.prototype.some.call(
      r,
      (t) => er(s, `.${t}`) || s === t || t === ""
    );
  }
  function Dp(s) {
    return s[0] === "/" ? s : `/${s}`;
  }
  function nl(s) {
    return csString.prototype.replace.call(s, Op, "");
  }
  function sh(s) {
    return !te || (!ee(s, "http://") && !ee(s, "https://"))
      ? null
      : ((te.href = s),
        {
          hash: te.hash,
          host: nl(te.host),
          hostname: te.hostname,
          href: te.href,
          origin: te.origin ? te.origin : nl(`${te.protocol}//${te.host}`),
          pathname: Dp(te.pathname),
          port: te.port,
          protocol: te.protocol,
          search: te.search,
        });
  }
  var kp = (() => {
      class s {
        setContext(t, e) {
          (this.N = t), (this.C = e);
        }
        getVisitorService() {
          return this.N;
        }
        getSessionService() {
          return this.C;
        }
      }
      return s;
    })(),
    Fr = (() => {
      let s;
      return (
        (function (r) {
          (r.UNCOMPRESSED = "0"), (r.GZIP = "2");
        })(s || (s = {})),
        s
      );
    })(),
    ih = (() => {
      class s {}
      return s;
    })(),
    xp = 2e4,
    xn = (() => {
      class s {
        constructor(t) {
          var e, i;
          (this.qe = {}),
            (this.Uc = {}),
            (this.Ld = (n) => {
              for (let o of n) {
                let { metadata: c, events: h } = o;
                this.send(h, c);
              }
            }),
            (this.Ai = t.endpoint),
            (this.Zr = t.compressionOpts),
            (this.ae = t.recoveryStorage),
            (this.mandatoryParameters =
              (e = t.mandatoryParameters) !== null && e !== void 0 ? e : []),
            (this.Hc = t.contentType),
            (this.worker = !!t.worker),
            (this.jc =
              (i = t.disableRequestCounting) !== null && i !== void 0 ? i : !1),
            this.ae && this.ae.recover(this.Ld);
        }
        setQueryParams(t) {
          csArray.prototype.forEach.call(Object.keys(t), (e) => {
            this.qe[e] = t[e];
          });
        }
        removeQueryParams(t) {
          t
            ? csArray.prototype.forEach.call(t, (e) => {
                delete this.qe[e];
              })
            : (this.qe = {});
        }
        send(t, e) {
          t = t != null ? t : "";
          let i = e || { ...this.qe },
            n = !("ct" in i),
            o =
              this.Hc === "application/json" ||
              (typeof t != "string" && !this.LE(t));
          "ct" in i ||
            (!this.Zr || !n
              ? (i.ct = Fr.UNCOMPRESSED)
              : (i.ct = this.Zr.compressionType));
          let c = o ? csJSON.stringify(t) : t,
            h = csArray.prototype.join.call(
              csArray.prototype.map.call(
                Object.keys(i),
                (y) => `${encodeURIComponent(y)}=${encodeURIComponent(i[y])}`
              ),
              "&"
            ),
            d = `${this.Ai}?${h}`;
          if (Uu(this.mandatoryParameters, (y) => i[y] == null)) {
            Tt.warn(
              `[${
                this.worker ? "WORKER" : "MAIN"
              }] All mandatory parameters are not present on ${d}`
            );
            return;
          }
          let S = (y) => (typeof y == "string" ? y.length : y.byteLength);
          st.counters.payloadSize.add(S(c), d, "raw"),
            this.Zr && n && typeof c == "string"
              ? this.Zr.compressor(c, this.Zr.compressionOutputType, (y) => {
                  st.counters.payloadSize.add(S(y), d, "compressed"),
                    this.Vd(d, i, y);
                })
              : this.Vd(d, i, c);
        }
        onLoad(t) {
          this.lr = t;
        }
        onError(t) {
          this.tn = t;
        }
        onTimeout(t, e) {
          (this.bi = t), (this.Go = e);
        }
        abort() {
          this.Ud && this.Ud();
        }
        setRequestHeader(t, e) {
          this.Uc[t] = e;
        }
        getQueryParams() {
          return this.qe;
        }
        LE(t) {
          return t && t.byteLength !== void 0;
        }
        Vd(t, e, i) {
          let n = new XMLHttpRequest(),
            o = csArray.prototype.join.call(
              csArray.prototype.map.call(
                Object.keys(e),
                (c) => `${encodeURIComponent(c)}=${encodeURIComponent(e[c])}`
              ),
              "&"
            );
          n.open("POST", t, !0),
            this.Hc && n.setRequestHeader("Content-Type", this.Hc),
            (n.onload = () => {
              if ((this.ae && this.ae.recover(this.Ld), this.lr)) {
                let c = {
                  params: e,
                  responseText: n.responseText,
                  status: n.status,
                };
                this.lr(c);
              }
              this.jc || st.counters.requestCounts.count(this.Ai);
            }),
            (n.onerror = () => {
              this.ae && this.ae.save({ key: o, metadata: e, events: i }),
                this.jc || st.counters.requestErrors.count(this.Ai),
                this.tn && this.tn({ params: e });
            }),
            (n.timeout = this.Go || xp),
            (n.ontimeout = () => {
              this.jc || st.counters.requestTimeouts.count(this.Ai),
                this.bi && this.bi();
            }),
            (this.Ud = () => n.abort()),
            csArray.prototype.forEach.call(Object.keys(this.Uc), (c) => {
              n.setRequestHeader(c, this.Uc[c]);
            }),
            n.send(i);
        }
      }
      return s;
    })(),
    Lp = (() => {
      class s {
        constructor(t, e) {
          (this.ze = t), (this.VE = e);
        }
        init() {
          this.Ut = new xn({
            endpoint: this.ze.getLoggerUri(),
            contentType: "text/plain",
          });
        }
        send(t) {
          let e = this.VE.getRequestParameters(),
            i = csArray.prototype.map.call(t, (n) => ({
              ...e,
              a: n.app,
              l: n.level,
              m: n.message,
              s: n.stacktrace,
            }));
          this.Ut.send(i);
        }
        getRequestParameters() {
          return {};
        }
      }
      return s;
    })(),
    Vp = "uxa",
    ol = 5,
    rh = "snippet-",
    nh = "implementation-snippet-",
    al = (() => {
      let s;
      return (
        (function (r) {
          (r.IMPLEMENTATION = "implementation"), (r.DYNAMIC = "dynamic");
        })(s || (s = {})),
        s
      );
    })(),
    Up = (() => {
      class s {
        constructor(t, e, i, n) {
          (this.ur = e),
            (this.O = new ri()),
            (this.Hd = $o[Ot.warn]),
            (this.Hd = $o[t.minLogLevel || Ot.warn]);
          let o = new Zu(t, this.O);
          (this.Ut = i || new eh(t, o)),
            (this.jd = n || new Lp(t, o)),
            (this.Bc = {
              [Ot.debug]: [],
              [Ot.warn]: [],
              [Ot.implementation]: [],
              [Ot.error]: [],
              [Ot.critical]: [],
            }),
            (this.zo = { implementation: {}, dynamic: {} }),
            this.Ut.init(),
            this.jd.init();
        }
        send(t, e = "", i = Ot.warn) {
          if (!this.Bd(i, e)) return;
          csArray.prototype.push.call(this.Bc[i], e || "");
          let n = this.UE(),
            o = {
              message: mc(this.O, t, e),
              stacktrace: th(t, n),
              app: Vp,
              level: i,
            };
          this.Ut.send(o);
        }
        sendBulk(t) {
          let e = csArray.prototype.filter.call(t, (n) => {
            let o = n.level,
              c = this.HE(n.message);
            return csString.prototype.startsWith.call(n.message, "debug-ct-log")
              ? !0
              : this.Bd(o, c)
              ? (csArray.prototype.push.call(this.Bc[o], c || ""), !0)
              : !1;
          });
          if (e.length === 0) return;
          let i = csArray.prototype.map.call(e, (n) => ({
            ...n,
            message: n.message,
            stacktrace: n.stacktrace,
          }));
          this.jd.send(i);
        }
        HE(t) {
          let e = csString.prototype.match.call(t, /ErrorCode: (.+)$/);
          return e ? e[1] : "";
        }
        UE() {
          let t = this.ur.getVisitorService(),
            e = t == null ? void 0 : t.getVisitor();
          if (!e) return "No context";
          let i = this.ur.getSessionService(),
            n = i && i.getSession(),
            o = {
              userId: e.id,
              sessionNumber: e.visitsCount,
              pageNumber: n && n.pageNumber,
            };
          return csJSON.stringify(o);
        }
        Bd(t, e) {
          if ($o[t] < this.Hd) return !1;
          if (
            (e == null ? void 0 : csString.prototype.indexOf.call(e, nh, 0)) ===
            0
          )
            return this.$d(e, al.IMPLEMENTATION);
          if (
            (e == null ? void 0 : csString.prototype.indexOf.call(e, rh, 0)) ===
            0
          )
            return this.$d(e, al.DYNAMIC);
          let i = this.Bc[t];
          return i.length >= ol
            ? !1
            : !(e && csArray.prototype.some.call(i, (n) => n === e));
        }
        $d(t, e) {
          return t in this.zo[e]
            ? this.zo[e][t] >= ol
              ? !1
              : ((this.zo[e][t] += 1), !0)
            : ((this.zo[e][t] = 1), !0);
        }
      }
      return s;
    })();
  var Hp = (() => {
      let s;
      return (
        (function (r) {
          function t() {
            return (
              typeof window.CSJavascriptBridge == "object" &&
              typeof window.CSJavascriptBridge.optIn == "function" &&
              typeof window.CSJavascriptBridge.optOut == "function" &&
              typeof window.CSJavascriptBridge.sendEvent == "function" &&
              typeof window.CSJavascriptBridge.sendDynamicVar == "function" &&
              typeof window.CSJavascriptBridge.sendTransaction == "function"
            );
          }
          r.isCSJavascriptBridgeDefined = t;
          function e() {
            if (typeof window.CSJavascriptBridge.getVersion == "function")
              try {
                let et = window.CSJavascriptBridge.getVersion();
                if (Ht(et)) return et;
              } catch {
                J.warn("an error occurred when calling getVersion");
              }
            return null;
          }
          r.getBridgeVersion = e;
          function i() {
            typeof window.CSJavascriptBridge.onWebviewTrackingReady ==
              "function" && window.CSJavascriptBridge.onWebviewTrackingReady();
          }
          r.notifyIsReadyForTracking = i;
          function n(et, ht) {
            window.CSJavascriptBridge.identify &&
              window.CSJavascriptBridge.identify(et, csJSON.stringify(ht));
          }
          r.identify = n;
          function o() {
            window.CSJavascriptBridge.resetIdentity &&
              window.CSJavascriptBridge.resetIdentity();
          }
          r.resetIdentity = o;
          function c(et) {
            window.CSJavascriptBridge.addUserProperties &&
              window.CSJavascriptBridge.addUserProperties(csJSON.stringify(et));
          }
          r.addUserProperties = c;
          function h(et) {
            window.CSJavascriptBridge.addEventProperties &&
              window.CSJavascriptBridge.addEventProperties(
                csJSON.stringify(et)
              );
          }
          r.addEventProperties = h;
          function d(et) {
            window.CSJavascriptBridge.removeEventProperty &&
              window.CSJavascriptBridge.removeEventProperty(et);
          }
          r.removeEventProperty = d;
          function S() {
            window.CSJavascriptBridge.clearEventProperties &&
              window.CSJavascriptBridge.clearEventProperties();
          }
          r.clearEventProperties = S;
          function y(et) {
            window.CSJavascriptBridge.addPageviewProperties &&
              window.CSJavascriptBridge.addPageviewProperties(
                csJSON.stringify(et)
              );
          }
          r.addPageviewProperties = y;
          function _(et) {
            window.CSJavascriptBridge.removePageviewProperty &&
              window.CSJavascriptBridge.removePageviewProperty(et);
          }
          r.removePageviewProperty = _;
          function w() {
            window.CSJavascriptBridge.clearPageviewProperties &&
              window.CSJavascriptBridge.clearPageviewProperties();
          }
          r.clearPageviewProperties = w;
          function T(et) {
            window.CSJavascriptBridge.sendEvent(csJSON.stringify(et));
          }
          r.sendAnalysisEvent = T;
          function M(et) {
            if (window.CSJavascriptBridge.sendSREvent)
              for (let ht of et.events)
                window.CSJavascriptBridge.sendSREvent(csJSON.stringify(ht));
          }
          r.sendSREvent = M;
          function x(et) {
            window.CSJavascriptBridge &&
              window.CSJavascriptBridge.sendLog &&
              window.CSJavascriptBridge.sendLog(csJSON.stringify(et));
          }
          r.sendLog = x;
          function P() {
            window.CSJavascriptBridge.optIn();
          }
          r.sendOptIn = P;
          function N() {
            window.CSJavascriptBridge.optOut();
          }
          r.sendOptOut = N;
          function W(et, ht) {
            window.CSJavascriptBridge.sendDynamicVar(et, ht);
          }
          r.sendDynamicVariable = W;
          function D(et, ht, Nt) {
            window.CSJavascriptBridge.sendTransaction(et, ht, Nt);
          }
          r.sendTransaction = D;
          function L(et, ht) {
            if (window.CSJavascriptBridge.sendAssets) {
              let Nt = csJSON.stringify(et);
              window.CSJavascriptBridge.sendAssets(Nt, ht || null);
            } else
              window.CSJavascriptBridge.sendSRAssets &&
                window.CSJavascriptBridge.sendSRAssets(
                  csArray.prototype.map.call(et, (Nt) => Nt.assetId)
                );
          }
          r.sendAssets = L;
          function it(et) {
            window.CSJavascriptBridge &&
              window.CSJavascriptBridge.sendNativeSREvent &&
              window.CSJavascriptBridge.sendNativeSREvent(csJSON.stringify(et));
          }
          r.sendNativeSREvent = it;
        })(s || (s = {})),
        s
      );
    })(),
    jp = "No stacktrace",
    Bp = (() => {
      class s {
        constructor() {
          this.O = new ri();
        }
        send(t, e, i = Ot.warn) {
          let n = { message: mc(this.O, t), errorCode: e, level: i },
            o = this.jE(t);
          o && (n.stacktrace = o), Hp.sendLog(n);
        }
        jE(t) {
          if (ns(t)) return `${t.stack || jp}`;
        }
        sendBulk(t) {}
      }
      return s;
    })();
  function Le(s) {
    return ee(s, "data:");
  }
  function $p(s) {
    return ee(s, "#");
  }
  function Fp(s) {
    return !!s && (er(s, ".css") || ee(s, "https://fonts.googleapis.com/css"));
  }
  function Gp() {
    let s = {};
    return (
      new csURL(location.href).searchParams.forEach((r, t) => (s[t] = r)), s
    );
  }
  var zp = [
      "id",
      "class",
      "style",
      "srcset",
      "sizes",
      "rel",
      "type",
      "width",
      "height",
      "media",
      "align",
      "dir",
      "bgcolor",
      "color",
      "border",
      "colspan",
      "rowspan",
      "cols",
      "rows",
      "size",
      "start",
      "slot",
      "data-cs-override-id",
    ],
    Ec = (s) => {
      let r = new Set(zp);
      return (
        csArray.prototype.forEach.call(s, (t) => {
          r.add(t);
        }),
        r
      );
    },
    qp = ["svg", "slot"],
    Wp = (s, r, t) =>
      (t === "radio" && s === "input" && r === "name") ||
      csArray.prototype.indexOf.call(qp, s) > -1,
    oh = { href: new Set(["a"]), src: new Set(["iframe"]) },
    Yp = (s) => oh.hasOwnProperty(s),
    Xp = (s, r, t) => {
      var e;
      return (
        ((e = oh[r]) === null || e === void 0 ? void 0 : e.has(s)) && !Le(t)
      );
    },
    Kp = (s, r, t) =>
      (t === "submit" || t === "button") && s === "input" && r === "value";
  function Xo(s) {
    return s ? Jp(s) : null;
  }
  function Jp(s) {
    try {
      let r = /^\/(.*)\/([gim]*)$/.exec(s);
      if (r) {
        let [, t, e] = r;
        return new csRegExp(`^${t}$`, e);
      }
      return new csRegExp(`^${s}$`);
    } catch {
      return null;
    }
  }
  var Qp = /^\d+\.\d+(?:\.\d+)?$/,
    Zp = (s) => {
      if (!Qp.test(s)) return;
      let [r, t, e] = csArray.prototype.map.call(
        csString.prototype.split.call(s, "."),
        Number
      );
      return { major: r, minor: t, patch: !e || Number.isNaN(e) ? 0 : e };
    },
    tg = (s, r) =>
      s.major !== r.major
        ? s.major - r.major
        : s.minor !== r.minor
        ? s.minor - r.minor
        : s.patch - r.patch,
    eg = (s, r) => tg(s, r) >= 0,
    sg = 1,
    Na = (() => {
      let s;
      return (
        (function (r) {
          (r[(r.Disabled = 0)] = "Disabled"),
            (r[(r.ButtonAndLinkOnly = 1)] = "ButtonAndLinkOnly"),
            (r[(r.Enabled = 2)] = "Enabled");
        })(s || (s = {})),
        s
      );
    })(),
    Ln = (() => {
      let s;
      return (
        (function (r) {
          (r[(r.Automatic = 1)] = "Automatic"), (r[(r.Manual = 2)] = "Manual");
        })(s || (s = {})),
        s
      );
    })(),
    ah = (() => {
      class s {
        constructor(t) {
          var e, i, n, o, c, h, d, S, y, _;
          (this.isChild = !1),
            (this.useFastDOM = !1),
            (this.isSMB = !!t.isSMB),
            (this.trackerDomain = t.trackerDomain),
            (this.dynamicConfDomain = t.dynamicConfDomain),
            (this.settingsFileUri = t.settingsFileUri),
            (this.tagDomain = t.tagDomain),
            (this.loggerDomain = t.ed),
            (this.minLogLevel = t.logLevel),
            (this.projectId = t.projectId),
            (this.smbConfig = t.smbConfig),
            (this.status = t.status),
            (this.hostnames = t.hostnames),
            (this.iframesTracking = !!t.iframesTracking),
            (this.crossDomainTracking = !1),
            (this.crossDomainSingleIframeTracking =
              !!t.crossDomainSingleIframeTracking),
            (this.consentRequired = !!t.consentRequired),
            (this.allowSubdomains = !!t.allowSubdomains),
            (this.visitorCookieTimeout = t.visitorCookieTimeout || oc),
            (this.sampleRate = t.sampleRate),
            (this.replayRecordingRate = t.replayRecordingRate),
            (this.validationRate = t.validationRate),
            (this.lastTrackingDraw = t.lastTrackingDraw || 1),
            (this.useHttps = !0),
            (this.eMerchandisingEnabled = !1),
            (this.jsErrorsEnabled = !0),
            (this.collectionEnabled = !!(
              !(
                (n =
                  (e = t.collectionEnabled) !== null && e !== void 0
                    ? e
                    : (i = t.smbConfig) === null || i === void 0
                    ? void 0
                    : i.record) !== null && n !== void 0
              ) || n
            )),
            (this.apiErrors = { enabled: 0, ...t.apiErrors }),
            (this.customErrors = { enabled: 0, ...t.customErrors }),
            (this.jsCustomErrorsEnabled = t.jsCustomErrorsEnabled),
            (this.triggerSessionReplayEnabled = t.triggerSessionReplayEnabled),
            (this.triggerSessionReplayRegex = Xo(t.triggerSessionReplayRegex)),
            (this.dynamicIdRegex = t.dynamicIdRegex
              ? new csRegExp(t.dynamicIdRegex)
              : null),
            (this.whitelistedAttributes = t.whitelistedAttributes || []),
            (this.replayRecordingUnmaskedUrlRegex = Xo(
              t.replayRecordingUnmaskedUrlRegex
            )),
            (this.replayRecordingMaskedUrlRegex = Xo(
              t.replayRecordingMaskedUrlRegex
            )),
            (this.replayRecordingMaskedUrlRegexRules =
              t.replayRecordingMaskedUrlRegexRules || null),
            (this.replayRecordingUnmaskedUrlRegexRules =
              t.replayRecordingUnmaskedUrlRegexRules || null),
            (this.anonymisationMethod = t.anonymisationMethod || null),
            (this.tagDeploymentMode = t.tagDeploymentMode),
            (this.dualCollectionTagDomain = t.dualCollectionTagDomain || null),
            (this.ptcDomain = t.ptcDomain || null),
            (this.ptcGuid = t.ptcGuid || null),
            (this.secureCookiesEnabled = !!t.secureCookiesEnabled),
            (this.ptcSha512 = t.ptcSha512 || null),
            (this.ptcSnapshotPath = t.ptcSnapshotPath || null),
            (this.emitDebugEvents = !1),
            (this.staticResourceManagerDomain =
              t.staticResourceManagerDomain || null),
            (this.malkaRecordingDomain = t.malkaRecordingDomain || null),
            (this.textVisibilityEnabled = !1),
            (this.experimental = t.experimental || {}),
            (this.malkaEtrEnabled = !!t.malkaEtrEnabled),
            (this.malkaUrlEnabled = !!t.malkaUrlEnabled),
            (this.recordingUrlRules =
              (o = t.recordingUrlRules) !== null && o !== void 0 ? o : []),
            (this.cookielessTrackingEnabled = t.cookielessTrackingEnabled),
            (this.customHashIdEnabled = !!t.customHashIdEnabled),
            (this.encryptionEnabled = !1),
            (this.encryptionPublicKey = t.recordingEncryptionPublicKey || null),
            (this.pathComputationRules = t.pathComputationRules || {}),
            t.pathComputationRules &&
              t.pathComputationRules.dynamicElementNameRegex === "" &&
              (this.pathComputationRules.dynamicElementNameRegex = null),
            t.pathComputationRules &&
              t.pathComputationRules.dynamicElementNameRegex &&
              (this.pathComputationRules.dynamicElementNameRegex = new csRegExp(
                t.pathComputationRules.dynamicElementNameRegex
              )),
            (this.asyncSerializerEnabled = !!t.asyncSerializerEnabled),
            (this.encryptionPublicKeyId = t.recordingEncryptionPublicKeyId),
            (this.pendingInactivityTimeout = t.pendingInactivityTimeout || 5e3),
            (this.accessibilityEnabled = !1),
            (this.useStaticResourceManager = !0),
            t.taskSchedulerOptions &&
              (this.taskSchedulerOptions = {
                ...t.taskSchedulerOptions,
                enabled: !!t.taskSchedulerOptions.enabled,
              }),
            (this.uxaDomain = t.uxaDomain),
            (this.environment =
              ((c = t.uxaDomain) === null || c === void 0
                ? void 0
                : c.indexOf("staging")) > -1
                ? "staging"
                : "production"),
            (this.performanceTimingOptions = t.performanceTimingOptions),
            (this.replayConsentRequiredForSession =
              !!t.replayConsentRequiredForSession),
            (this.isWebView = !1),
            t.displayAdOptions &&
              t.displayAdOptions.length &&
              (this.displayAdOptions = t.displayAdOptions),
            t.voc && (this.voc = { ...t.voc, enabled: !!t.voc.enabled }),
            (this.vocData = t.vocData),
            t.heapEnvironment && (this.heapEnvironment = t.heapEnvironment),
            t.implementations &&
              t.implementations.length &&
              (this.implementations = t.implementations),
            (this.eventsApiEnabled = !1),
            (this.anonymizeDigits =
              (h = t.anonymizeDigits) !== null && h !== void 0 ? h : null),
            (this.isHeapPresent = window.heap !== void 0),
            (this.recordTargetingRules =
              (d = t.recordTargetingRules) !== null && d !== void 0 ? d : []),
            (this.paProxyDomainUri = t.paProxyDomainUri || null),
            (this.emitRecordInfoEvents = t.emitRecordInfoEvents !== !1),
            (this.collectHierarchy = !!t.collectHierarchy),
            (this.collectSubmit = !!t.collectSubmit),
            (this.collectTargetText =
              (S = t.collectTargetText) !== null && S !== void 0
                ? S
                : Na.Disabled),
            (this.identityEncryptionKey = t.identityEncryptionKey || null),
            (this.tagVerificationDomain = t.tagVerificationDomain),
            (this.tagVerificationEnabled = !0),
            (this.trackingCodeVerified = !!t.trackingCodeVerified),
            (this.quotas = (y = t.quotas) !== null && y !== void 0 ? y : null),
            (this.startMode =
              (_ = t.startMode) !== null && _ !== void 0 ? _ : Ln.Automatic),
            (this.eventEnricher = t.eventEnricher || null),
            (this.experiments = t.experiments || null);
        }
        getTrackerUri() {
          return `${this.zs()}://${this.trackerDomain}`;
        }
        getRecordingUri() {
          return `${this.zs()}://${this.malkaRecordingDomain}`;
        }
        getLoggerUri() {
          return `${this.zs()}://${this.loggerDomain}`;
        }
        getMetricsUri() {
          return `${this.zs()}://${this.loggerDomain}/metrics`;
        }
        getStaticResourceManagerUri() {
          return `${this.zs()}://${this.staticResourceManagerDomain}`;
        }
        getVerificationEndpoint() {
          return `${this.zs()}://${this.tagVerificationDomain}`;
        }
        getSettingsFileUri() {
          return this.settingsFileUri
            ? this.settingsFileUri
            : `${this.zs()}://${this.dynamicConfDomain}/${this.projectId}.json`;
        }
        isQuotaEnabled() {
          return this.isSMB || this.quotas !== null;
        }
        getPaProxyDomainUri() {
          return `${this.zs()}://${this.paProxyDomainUri}`;
        }
        zs() {
          return this.useHttps ? "https" : "http";
        }
        isProjectActive() {
          return this.status === sg;
        }
        processOptionOverrides(t) {
          t &&
            t.forEach &&
            t.forEach(([e, ...i]) => {
              if (e === "setOption") {
                let [n, o] = i;
                this.BE(n, o);
              } else
                e === "setIframeAutonomous" &&
                  ((this.allowSubdomains = !1), (this.iframesTracking = !1));
            });
        }
        BE(t, e) {
          t === "trackerDomain" && (this.trackerDomain = e),
            t === "loggerDomain" && (this.loggerDomain = e),
            t === "malkaRecordingDomain" && (this.malkaRecordingDomain = e),
            t === "staticResourceManagerDomain" &&
              (this.staticResourceManagerDomain = e),
            t === "minLogLevel" && (this.minLogLevel = e),
            t === "useHttps" && (this.useHttps = !!e),
            t === "isWebView" && (this.isWebView = e),
            t === "dynamicConfDomain" && (this.dynamicConfDomain = e),
            t === "paProxyDomainUri" && (this.paProxyDomainUri = e),
            t === "allowSubdomains" && (this.allowSubdomains = !!e),
            t === "iframesTracking" && (this.iframesTracking = !!e),
            t === "startMode" &&
              wi(e) &&
              csArray.prototype.includes.call(Object.values(Ln), e) &&
              (this.startMode = e);
        }
        getRequestParameters() {
          return { pid: `${this.projectId}` };
        }
        updateDynamicFields(t, e) {
          t === "emitDebugEvents" && (this.emitDebugEvents = e),
            t === "minLogLevel" && (this.minLogLevel = e);
        }
        isCsSideloadingHeap() {
          return !1;
        }
        isHeapSideloadsCs() {
          return !1;
        }
        isHeapSideloadsCsV5() {
          return !1;
        }
        isHeapSideloadsStartDataCollection() {
          if (this.isHeapSideloadsCs()) {
            if (this.$E()) return !0;
            let t = Zp(this.getHeapVersion() || "");
            if (t && t.major === 4 && eg(t, { major: 4, minor: 23, patch: 5 }))
              return !0;
          }
          return !1;
        }
        $E() {
          var t;
          return (
            typeof ((t = window.heap) === null || t === void 0
              ? void 0
              : t.getUserId) == "function"
          );
        }
        getHeapVersion() {
          var t, e, i, n, o, c;
          return (
            (typeof ((t = window.heap) === null || t === void 0
              ? void 0
              : t.getConfig) == "function" &&
              ((n =
                (i =
                  (e = window.heap) === null || e === void 0
                    ? void 0
                    : e.getConfig()) === null || i === void 0
                  ? void 0
                  : i.sdk) === null || n === void 0
                ? void 0
                : n.version)) ||
            ((c =
              (o = window.heap) === null || o === void 0
                ? void 0
                : o.version) === null || c === void 0
              ? void 0
              : c.heapJsVersion) ||
            void 0
          );
        }
        isCsCrosswritingHeap() {
          return !1;
        }
        getHeapStorageLocation() {
          var t, e;
          return (e =
            (t = this.heapEnvironment) === null || t === void 0
              ? void 0
              : t.heap_storage_location) !== null && e !== void 0
            ? e
            : null;
        }
        getHeapWebAppUri() {
          return this.getHeapStorageLocation() === "eu-west-1"
            ? "https://eu.heapanalytics.com"
            : "https://heapanalytics.com";
        }
        isCollectTargetTextEnabled() {
          return this.collectTargetText !== Na.Disabled;
        }
        isNetworkDetailsEnabled() {
          return this.performanceTimingOptions
            ? this.performanceTimingOptions.withResource ||
                this.performanceTimingOptions.withNavigation
            : !1;
        }
        hasRecordingUrlRules() {
          var t;
          return !!(
            !((t = this.recordingUrlRules) === null || t === void 0) && t.length
          );
        }
        hasTargetingRules() {
          var t;
          return !!(
            !((t = this.recordTargetingRules) === null || t === void 0) &&
            t.length
          );
        }
        getHeapEnvId() {
          return this.heapEnvironment ? this.heapEnvironment.env_id : "";
        }
      }
      return s;
    })();
  function Z(s, r, t, e) {
    var i = arguments.length,
      n =
        i < 3
          ? r
          : e === null
          ? (e = Object.getOwnPropertyDescriptor(r, t))
          : e,
      o;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      n = Reflect.decorate(s, r, t, e);
    else
      for (var c = s.length - 1; c >= 0; c--)
        (o = s[c]) && (n = (i < 3 ? o(n) : i > 3 ? o(r, t, n) : o(r, t)) || n);
    return i > 3 && n && Object.defineProperty(r, t, n), n;
  }
  var ge = (() => {
      class s extends Error {
        constructor(t, e) {
          let i = e ? `Command misuse: ${t} - ${e}` : `Command misuse: ${t}`;
          super(i), (this.name = "MisusedCommandError");
        }
      }
      return s;
    })(),
    Ko;
  function ne(s) {
    if ((Ko || (Ko = document.createElement("div")), !(!!s && j(s))))
      return Tt.warn(`isValidSelector: invalid selector provided '${s}'`), !1;
    try {
      return Pe.call(Ko, s), !0;
    } catch {
      return Tt.warn(`isValidSelector: invalid selector provided '${s}'`), !1;
    }
  }
  function Qi(s, r) {
    if (el) return el.call(s, r);
    let t = s;
    do {
      if (Pe.call(t, r)) return t;
      t = t == null ? void 0 : t.parentElement;
    } while (t !== null && csNodenodeType.apply(t) === 1);
    return null;
  }
  function ig(s, r) {
    if (s === r) return !0;
    if (
      s == null ||
      r == null ||
      typeof s != typeof r ||
      typeof s != "object" ||
      csArray.isArray(s) !== csArray.isArray(r)
    )
      return !1;
    if (csArray.isArray(s))
      return s.length !== r.length
        ? !1
        : csArray.prototype.every.call(s, (i, n) => i === r[n]);
    let t = Object.keys(s),
      e = Object.keys(r);
    return t.length !== e.length
      ? !1
      : csArray.prototype.every.call(t, (i) => s[i] === r[i]);
  }
  function ch(s) {
    let r = null;
    return (t) => (t ? (r = t) : r || (r = s()));
  }
  var $i = ch(() => new WeakMap()),
    Jo = ch(() => new Set()),
    bn = (() => {
      let s;
      return (
        (function (r) {
          function t(S) {
            return $i().get(S);
          }
          r.getAll = t;
          function e(S, y) {
            var _;
            return (_ = $i().get(S)) === null || _ === void 0 ? void 0 : _[y];
          }
          r.get = e;
          function i(S, y, _) {
            let w = $i().get(S);
            w || $i().set(S, (w = {})), !ig(w[y], _) && ((w[y] = _), c(S));
          }
          r.set = i;
          function n(S, y) {
            let _ = $i().get(S);
            _ && (delete _[y], c(S));
          }
          r.remove = n;
          function o() {
            $i(new WeakMap());
          }
          r.reset = o;
          function c(S) {
            for (let y of Jo()) y(S);
          }
          function h(S) {
            Jo().add(S);
          }
          r.subscribe = h;
          function d(S) {
            Jo().delete(S);
          }
          r.unsubscribe = d;
        })(s || (s = {})),
        s
      );
    })(),
    Et = (() => {
      let s;
      return (
        (function (r) {
          function t(h, d, S) {
            var y;
            if (typeof Node != "undefined" && h instanceof Node)
              bn.set(h, d, S);
            else {
              let _ = h;
              ((y = _.props) !== null && y !== void 0) || (_.props = {}),
                (_.props[d] = S);
            }
          }
          r.setProperty = t;
          function e(h, d) {
            var S;
            return typeof Node != "undefined" && h instanceof Node
              ? bn.get(h, d)
              : (S = h.props) === null || S === void 0
              ? void 0
              : S[d];
          }
          r.getProperty = e;
          function i(h) {
            return typeof Node != "undefined" && h instanceof Node
              ? bn.getAll(h)
              : h.props;
          }
          r.getProperties = i;
          function n(h, d) {
            let S = null;
            return o(h, (y, _, w) => d(y) && (S = y) && !!w()), S;
          }
          r.findDescendant = n;
          function o(h, d) {
            c(h, void 0, d);
          }
          r.traverse = o;
          function c(h, d, S) {
            let y = !1;
            if ((S(h, d, () => (y = !0)), y)) return;
            let w = h.shadowRoot;
            w && c(w, h, S);
            let T = h.children;
            if (T != null && T.length) {
              for (let M of T) if (M && (c(M, h, S), y)) break;
            }
          }
        })(s || (s = {})),
        s
      );
    })(),
    F = (() => {
      let s;
      return (
        (function (r) {
          let t;
          (function (P) {
            (P[(P.NotMasked = 0)] = "NotMasked"),
              (P[(P.Parent = 1)] = "Parent"),
              (P[(P.Child = 2)] = "Child");
          })((t = r.MaskedElementState || (r.MaskedElementState = {}))),
            (r.maskedProp = "masked"),
            (r.maskedAttributeProp = "maskedAttribute");
          function e(P) {
            return Ki(P) && "Attributes" in P && "PIISelectors" in P
              ? P.Attributes instanceof Array && P.PIISelectors instanceof Array
              : !1;
          }
          r.isSelectorUserInput = e;
          function i(P) {
            if (!Ki(P) || P === null) throw new ge("setPIISelectors");
            return (
              "Attributes" in P || (P.Attributes = []),
              "PIISelectors" in P || (P.PIISelectors = []),
              P
            );
          }
          r.sanitizeSelectorUserInput = i;
          function n(P) {
            var N, W, D;
            return "nodeType" in P
              ? (N = Et.getProperty(P, r.maskedProp)) !== null && N !== void 0
                ? N
                : { state: t.NotMasked }
              : (D =
                  (W = P.metadata) === null || W === void 0
                    ? void 0
                    : W[r.maskedProp]) !== null && D !== void 0
              ? D
              : { state: t.NotMasked };
          }
          r.getMaskedElementDetails = n;
          function o(P) {
            var N, W, D;
            return "nodeType" in P
              ? (N = Et.getProperty(P, r.maskedAttributeProp)) !== null &&
                N !== void 0
                ? N
                : { attributes: [] }
              : (D =
                  (W = P.metadata) === null || W === void 0
                    ? void 0
                    : W[r.maskedAttributeProp]) !== null && D !== void 0
              ? D
              : { attributes: [] };
          }
          r.getMaskedAttributeDetails = o;
          function c(P) {
            let N = Et.getProperty(P, r.maskedProp);
            return (N == null ? void 0 : N.state) === t.Parent;
          }
          r.isMaskedElement = c;
          function h(P) {
            let N = Et.getProperty(P, r.maskedProp);
            return (N == null ? void 0 : N.state) === t.Child;
          }
          r.isMaskedElementChild = h;
          function d(P, N) {
            let W = Et.getProperty(P, r.maskedAttributeProp);
            return (
              ((W == null ? void 0 : W.attributes) == null
                ? void 0
                : csArray.prototype.indexOf.call(
                    W == null ? void 0 : W.attributes,
                    N
                  )) > -1
            );
          }
          r.isMaskedAttribute = d;
          function S(P, N) {
            Et.setProperty(P, r.maskedProp, N);
          }
          r.setMaskedElementProperty = S;
          function y(P) {
            Et.setProperty(P, r.maskedProp, void 0);
          }
          r.unsetMaskedElementProperty = y;
          function _(P, N) {
            Et.setProperty(P, r.maskedAttributeProp, N);
          }
          r.setMaskedAttributeProperty = _;
          function w(P, N) {
            let W = csArray.prototype.filter.call(P.PIISelectors, (it) =>
              ne(it)
            );
            N.elementSelector.length > 0 &&
              csArray.prototype.push.call(
                W,
                ...csString.prototype.split.call(N.elementSelector, ",")
              );
            let D = x([...W]),
              L = {
                elementSelector: csArray.prototype.join.call(D, ","),
                attrSelector: N.attrSelector,
                attrSelectors: N.attrSelectors,
              };
            return (
              csArray.prototype.forEach.call(P.Attributes, (it) => {
                it != null &&
                  it.attrName &&
                  it != null &&
                  it.selector &&
                  ne(it.selector) &&
                  !T(L.attrSelectors, it) &&
                  csArray.prototype.push.call(L.attrSelectors, it);
              }),
              (L.attrSelector = M(L.attrSelectors)),
              L
            );
          }
          r.getComputedSelectorSettings = w;
          function T(P, N) {
            return csArray.prototype.some.call(
              P,
              (W) => W.selector === N.selector && W.attrName === N.attrName
            );
          }
          function M(P) {
            let N = "";
            return (
              csArray.prototype.forEach.call(P, (W) => {
                let D = csString.prototype.split.call(W.selector, ",");
                csArray.prototype.forEach.call(D, (L) => {
                  ne(L) && (N && (N += ","), (N += L));
                });
              }),
              N
            );
          }
          function x(P) {
            if (P.length <= 1) return P;
            let N = [];
            for (let W of P) {
              let D = csString.prototype.split.call(W, ",");
              for (let L of D)
                csArray.prototype.indexOf.call(N, L) === -1 &&
                  csArray.prototype.push.call(N, L);
            }
            return N;
          }
        })(s || (s = {})),
        s
      );
    })();
  function rg() {
    let s = new MutationObserver((r) => {
      r.forEach((t) => {
        pt(t.removedNodes, (e) => {
          e instanceof HTMLElement &&
            e.tagName === "CS-NATIVE-FRAME-HOLDER" &&
            (st.counters.pureWindowState.count("iframe-deletion"),
            Tt.warn("<cs-native-frame-holder> deleted"),
            s.disconnect());
        });
      });
    });
    s.observe(document.body, { childList: !0 });
  }
  function cl(s) {
    return typeof s != "function"
      ? !1
      : s.toString().indexOf("[native code]") !== -1;
  }
  function ng() {
    (!cl(MutationObserver) || !cl(MutationObserver.prototype.observe)) &&
      st.counters.patchedNativeFunctions.count("MutationObserver");
  }
  function og() {
    try {
      window.CSPureWindow && rg(), ng();
    } catch {}
  }
  var lh = ":";
  function ll(s) {
    let r = [],
      t = ag(s),
      e = csString.prototype.split.call(t, "/");
    for (let i of e)
      ee(i, lh)
        ? csArray.prototype.push.call(r, {
            key: i,
            value: `CS_ANONYMIZED_${csString.prototype.toUpperCase.call(
              csString.prototype.slice.call(i, 1)
            )}`,
          })
        : csArray.prototype.push.call(r, { key: i, value: null });
    return r;
  }
  function ag(s) {
    let r = s;
    return (
      ee(s, "/") && (r = csString.prototype.substring.call(r, 1)),
      er(s, "/") && (r = csString.prototype.slice.call(r, 0, -1)),
      r
    );
  }
  var cg =
      /\b((?:profile|user|last|first|primary|primary(?:[/_+-]|%20)?last)(?:[/_+-]|%20)?(?:name)[/=])[^#;?&/]+/gi,
    lg = "$1CS_ANONYMIZED_NAME",
    ug = (() => {
      class s {
        constructor(t) {
          this.O = t;
        }
        anonymizeUrl(t, e = {}) {
          let i = e.maskingPatterns || [],
            n = e.partialMaskingPatterns || [],
            o = this.O.anonymizePII(t);
          if (
            ((o = this.O.anonymizeJwt(o)),
            (o = this.O.anonymizeTokens(o)),
            e.maskNames)
          ) {
            let d = o;
            (o = this.en(o)),
              o !== d &&
                (st.counters.redactedPII.count("name"),
                st.counters.redactedPII.count("name-in-url"));
          }
          let c = this.FE(o, i);
          if (c !== o) return st.counters.redactedPII.count("url"), c;
          let h = this.GE(o, n);
          return h !== o && st.counters.redactedPII.count("url"), h;
        }
        removeQueryString(t) {
          let { path: e, queryString: i } = this.$c(t);
          return i !== "" ? `${e}?` : e;
        }
        $c(t) {
          let e = csString.prototype.indexOf.call(t, "?"),
            i,
            n = "";
          return (
            e !== -1
              ? ((i = csString.prototype.slice.call(t, 0, e)),
                (n = csString.prototype.slice.call(t, e, t.length)))
              : (i = t),
            { path: i, queryString: n }
          );
        }
        FE(t, e) {
          if (e.length === 0) return t;
          let { path: i, queryString: n } = this.$c(t),
            o = csString.prototype.split.call(i, "/");
          for (let c of e) {
            let h = this.zE(o, c);
            if (h !== null) return `${h}${n}`;
          }
          return t;
        }
        zE(t, e) {
          if (t.length < e.length) return null;
          let i = [];
          for (let n = 0; n < t.length; n++) {
            let o = t[n];
            if (n >= e.length) {
              csArray.prototype.push.call(i, o);
              continue;
            }
            let c = e[n].key;
            if (this.Fd(c)) {
              let h = e[n].value;
              csArray.prototype.push.call(i, h);
              continue;
            }
            if (o === c) {
              csArray.prototype.push.call(i, o);
              continue;
            }
            return null;
          }
          return csArray.prototype.join.call(i, "/");
        }
        GE(t, e) {
          if (e.length === 0) return t;
          let { path: i, queryString: n } = this.$c(t),
            o = csString.prototype.split.call(i, "/");
          for (let c of e) o = this.qE(o, c);
          return `${csArray.prototype.join.call(o, "/")}${n}`;
        }
        qE(t, e) {
          let i = [],
            n = 0,
            c = t[0] === "http:" || t[0] === "https:" ? 2 : 0;
          for (let h = 0; h < t.length; h++) {
            let d = t[h],
              S = e[n].key;
            if (this.Fd(S) && h >= c) {
              let y = e[n].value;
              csArray.prototype.push.call(i, d.length > 0 ? y : ""),
                n++,
                n === e.length && (n = 0);
              continue;
            }
            if (d === S) {
              csArray.prototype.push.call(i, d), n++, n === e.length && (n = 0);
              continue;
            }
            for (let y = 0; y < n; y++) {
              let _ = h - n + y;
              i[_] = t[_];
            }
            (n = 0), csArray.prototype.push.call(i, d);
          }
          for (let h = 0; h < n; h++) {
            let d = t.length - n + h;
            i[d] = t[d];
          }
          return i;
        }
        Fd(t) {
          return ee(t, lh);
        }
        en(t) {
          return csString.prototype.replace.call(t, cg, lg);
        }
      }
      return s;
    })(),
    hg = "spki",
    ul = "RSA-OAEP",
    dg = "SHA-256",
    hl = "AES-CTR",
    fg = "SHA-1",
    dl = 190,
    Tr = (() => {
      let s;
      return (
        (function (r) {
          var t;
          let e = !1,
            i = null,
            n,
            o = typeof TextEncoder != "undefined" ? new TextEncoder() : null,
            c;
          (r.crypto =
            (t = gt.crypto) === null || t === void 0 ? void 0 : t.subtle),
            (r.MAX_DIGEST_INPUT_SIZE = 100);
          function h() {
            return !e;
          }
          r.isKeyImported = h;
          function d() {
            return i;
          }
          r.getCryptoKey = d;
          function S() {
            var D, L;
            return (
              ((L =
                (D = gt.self.crypto) === null || D === void 0
                  ? void 0
                  : D.subtle) === null || L === void 0
                ? void 0
                : L.encrypt) != null && gt.self.CryptoKey != null
            );
          }
          r.isSupported = S;
          async function y(D) {
            (n = r.crypto
              .importKey(hg, ku(D), { name: ul, hash: dg }, !1, ["encrypt"])
              .catch(() => ((e = !0), null))),
              (i = await n),
              (n = void 0),
              i || Tt.warn(`Fail to import public key '${D}'`);
          }
          r.importKey = y;
          async function _(D) {
            if (!S() || e) return null;
            await n;
            let L = nc(D);
            L.byteLength > dl && (L = L.slice(0, dl));
            try {
              let it = await r.crypto.encrypt({ name: ul }, i, L);
              return Wc(it);
            } catch {
              return null;
            }
          }
          r.asymmetricEncrypt = _;
          async function w(D, L) {
            if (!S() || e) return null;
            let it = { counter: L.initializationVector, name: hl, length: 64 },
              et = o.encode(D);
            try {
              let ht = await r.crypto.encrypt(it, L.cryptoKey, et);
              return Wc(ht);
            } catch {
              return null;
            }
          }
          r.symmetricEncrypt = w;
          async function T(D) {
            let L = await M(D);
            if (!L) throw new Error("Export secret failed");
            let it = await _(L);
            if (!it) throw new Error("Encrypt secret failed");
            return it;
          }
          r.encryptSecret = T;
          async function M(D) {
            var L;
            if (!S()) return null;
            try {
              return (L = (await r.crypto.exportKey("jwk", D)).k) !== null &&
                L !== void 0
                ? L
                : null;
            } catch {
              return null;
            }
          }
          async function x() {
            if (!S() || e) return null;
            try {
              return {
                cryptoKey: await r.crypto.generateKey(
                  { name: hl, length: 128 },
                  !0,
                  ["encrypt", "decrypt"]
                ),
                initializationVector: gt.crypto.getRandomValues(
                  new Uint8Array(16)
                ),
              };
            } catch {
              return null;
            }
          }
          r.generateSymmetricKey = x;
          function P(D) {
            c = D;
          }
          r.setDigestSalt = P;
          async function N(D) {
            (D = csString.prototype.toLocaleLowerCase.call(
              csString.prototype.trim.call(D)
            )),
              c && (D = `${D}:${c}`);
            let L = o.encode(D);
            try {
              let it = await r.crypto.digest(fg, L);
              return ba(it);
            } catch {
              return null;
            }
          }
          r.digest = N;
          function W() {
            return gt.crypto.subtle.generateKey(
              {
                name: "RSA-OAEP",
                modulusLength: 2048,
                publicExponent: new Uint8Array([1, 0, 1]),
                hash: "SHA-256",
              },
              !0,
              ["encrypt", "decrypt"]
            );
          }
          r.generateKeyPair = W;
        })(s || (s = {})),
        s
      );
    })(),
    Rs = (() => {
      let s;
      return (
        (function (r) {
          (r.REGEX = "regex"),
            (r.START = "start"),
            (r.NOT_START = "not-start"),
            (r.END = "end"),
            (r.NOT_END = "not-end"),
            (r.CONTAIN = "contain"),
            (r.NOT_CONTAIN = "not-contain"),
            (r.EXACT = "exact"),
            (r.NOT_EXACT = "not-exact");
        })(s || (s = {})),
        s
      );
    })(),
    zs = (() => {
      let s;
      return (
        (function (r) {
          (r.START = "start"),
            (r.NOT_START = "not-start"),
            (r.END = "end"),
            (r.NOT_END = "not-end"),
            (r.CONTAIN = "contain"),
            (r.NOT_CONTAIN = "not-contain"),
            (r.EXACT = "exact"),
            (r.NOT_EXACT = "not-exact");
        })(s || (s = {})),
        s
      );
    })(),
    mi = (() => {
      let s;
      return (
        (function (r) {
          (r.replayRecordingUnmaskedUrlRegex =
            "replayRecordingUnmaskedUrlRegex"),
            (r.replayRecordingMaskedUrlRegex = "replayRecordingMaskedUrlRegex"),
            (r.replayRecordingUnmaskedUrlRegexRules =
              "replayRecordingUnmaskedUrlRegexRules"),
            (r.replayRecordingMaskedUrlRegexRules =
              "replayRecordingMaskedUrlRegexRules");
        })(s || (s = {})),
        s
      );
    })(),
    qn = (() => {
      class s {
        constructor() {
          this.Fc = [];
        }
        setRegexRules(t) {
          this.Fc = csArray.prototype.filter.call(
            csArray.prototype.map.call(t, (e) => this.WE(e)),
            (e) => e !== null
          );
        }
        evaluateUrl(t) {
          return csArray.prototype.some.call(this.Fc, (e) => this.Gd(t, e));
        }
        getMatchingRules(t) {
          return csArray.prototype.map.call(
            csArray.prototype.filter.call(this.Fc, (e) => this.Gd(t, e)),
            (e) => e.ruleInput
          );
        }
        Gd(t, e) {
          var i, n;
          let o = this.YE(t, e);
          return !this.XE(e) || !this.KE(e)
            ? !1
            : !!(e != null && e.notOperator
                ? !(!((i = e.regex) === null || i === void 0) && i.test(o))
                : !((n = e.regex) === null || n === void 0) && n.test(o));
        }
        XE(t) {
          let e = new csDate(),
            i = t.startDate && t.startDate > e,
            n = t.endDate && t.endDate < e;
          return !i && !n;
        }
        KE(t) {
          let e = t.samplingRate !== 100,
            i = e && Ai.boolean(t.samplingRate);
          return !e || i;
        }
        qo(t) {
          return !ee(t, "http://") && !ee(t, "https://") ? `https://${t}` : t;
        }
        YE(t, e) {
          let i = sh(this.qo(t));
          return i
            ? e.ignoreQueryParams && e.ignoreURIFragments
              ? `${i.origin}${i.pathname}`
              : e.ignoreQueryParams
              ? `${i.origin}${i.pathname}${i.hash}`
              : e.ignoreURIFragments
              ? `${i.origin}${i.pathname}${i.search}`
              : t
            : t;
        }
        Wo(t) {
          return t != null && t.ignoreCaseSensitivity ? "i" : "";
        }
        WE(t) {
          let e = null,
            i = !1;
          switch (t.operator) {
            case zs.NOT_START:
            case Rs.NOT_START:
              i = !0;
            case zs.START:
            case Rs.START:
              e = new csRegExp(`^${t.value}`, this.Wo(t));
              break;
            case zs.NOT_END:
            case Rs.NOT_END:
              i = !0;
            case zs.END:
            case Rs.END:
              e = new csRegExp(`${t.value}$`, this.Wo(t));
              break;
            case zs.NOT_CONTAIN:
            case Rs.NOT_CONTAIN:
              i = !0;
            case zs.CONTAIN:
            case Rs.CONTAIN:
            case Rs.REGEX:
              e = new csRegExp(`${t.value}`, this.Wo(t));
              break;
            case zs.NOT_EXACT:
            case Rs.NOT_EXACT:
              i = !0;
            case zs.EXACT:
            case Rs.EXACT:
              e = new csRegExp(`^${t.value}$`, this.Wo(t));
              break;
            default:
              Tt.warn(`compileRegexRule, unknown operator: ${t.operator}`);
          }
          if (e === null) return null;
          let n = t.startDate ? this.zd(t.startDate) : void 0,
            o = t.endDate ? this.zd(t.endDate) : void 0;
          return {
            regex: e,
            ignoreQueryParams: t.ignoreQueryParams,
            ignoreURIFragments: t.ignoreURIFragments,
            notOperator: i,
            samplingRate: t.samplingRate !== void 0 ? t.samplingRate : 100,
            startDate: n,
            endDate: o,
            ruleInput: t,
          };
        }
        zd(t) {
          let e = new csDate(t);
          return isNaN(e.getTime()) ? void 0 : e;
        }
      }
      return s;
    })(),
    at = (() => {
      let s;
      return (
        (function (r) {
          (r[(r.RESIZE = 0)] = "RESIZE"),
            (r[(r.SCROLL = 1)] = "SCROLL"),
            (r[(r.MOUSEMOVE = 2)] = "MOUSEMOVE"),
            (r[(r.MOUSEDOWN = 3)] = "MOUSEDOWN"),
            (r[(r.MOUSEUP = 4)] = "MOUSEUP"),
            (r[(r.CLICK = 5)] = "CLICK"),
            (r[(r.MOUSEOVER = 6)] = "MOUSEOVER"),
            (r[(r.MOUSEOUT = 7)] = "MOUSEOUT"),
            (r[(r.CHANGE = 10)] = "CHANGE"),
            (r[(r.FOCUSIN = 11)] = "FOCUSIN"),
            (r[(r.FOCUSOUT = 12)] = "FOCUSOUT"),
            (r[(r.TAP = 14)] = "TAP"),
            (r[(r.KEYDOWN = 15)] = "KEYDOWN"),
            (r[(r.KEYUP = 16)] = "KEYUP"),
            (r[(r.COMMAND = 17)] = "COMMAND"),
            (r[(r.PERFORMANCE = 19)] = "PERFORMANCE"),
            (r[(r.DRAG = 20)] = "DRAG"),
            (r[(r.FLICK = 21)] = "FLICK"),
            (r[(r.KEYBOARD_NAVIGATION = 22)] = "KEYBOARD_NAVIGATION"),
            (r[(r.ZOOM = 23)] = "ZOOM"),
            (r[(r.VIEWPORT_SCALE = 24)] = "VIEWPORT_SCALE"),
            (r[(r.TEXT_HIGHLIGHT = 25)] = "TEXT_HIGHLIGHT"),
            (r[(r.DEAD_CLICK = 30)] = "DEAD_CLICK"),
            (r[(r.DEAD_ZOOM = 31)] = "DEAD_ZOOM"),
            (r[(r.PAGE_RELOAD = 32)] = "PAGE_RELOAD"),
            (r[(r.THRASHED_CURSOR = 33)] = "THRASHED_CURSOR"),
            (r[(r.BLANK_PAGE = 34)] = "BLANK_PAGE"),
            (r[(r.EXTERNAL_EVENT = 35)] = "EXTERNAL_EVENT"),
            (r[(r.SUBMIT = 36)] = "SUBMIT"),
            (r[(r.CUSTOM_EVENT = 37)] = "CUSTOM_EVENT");
        })(s || (s = {})),
        s
      );
    })(),
    Cs = (() => {
      let s;
      return (
        (function (r) {
          (r.APPCUES = "appcues"),
            (r.CHAMELEON = "chameleon"),
            (r.CONTENTSQUARE = "contentsquare"),
            (r.SEGMENT = "segment"),
            (r.SHOPIFY = "shopify"),
            (r.WEB = "web");
        })(s || (s = {})),
        s
      );
    })();
  function pg(s) {
    return s.tgtHM !== void 0;
  }
  function uh(s) {
    return s.tgt !== void 0;
  }
  function gg(s) {
    return s.tgtLk !== void 0;
  }
  function mg(s) {
    return s.x !== void 0 && s.y !== void 0;
  }
  function yg(s) {
    return (
      s === Cs.APPCUES ||
      s === Cs.CHAMELEON ||
      s === Cs.CONTENTSQUARE ||
      s === Cs.SEGMENT ||
      s === Cs.SHOPIFY ||
      s === Cs.WEB
    );
  }
  var Eg = Math.pow(2, 31);
  function Sg(s, r = 0) {
    let h = r >>> 0,
      d = s.length;
    for (let w = 0; w < d - 3; w += 4) {
      let T =
        ((csString.prototype.charCodeAt.call(s, w) & 255) |
          ((csString.prototype.charCodeAt.call(s, w + 1) & 255) << 8) |
          ((csString.prototype.charCodeAt.call(s, w + 2) & 255) << 16) |
          ((csString.prototype.charCodeAt.call(s, w + 3) & 255) << 24)) >>>
        0;
      (T = Math.imul(T, 3432918353)),
        (T = (T << 15) | (T >>> 17)),
        (T = Math.imul(T, 461845907)),
        (h ^= T),
        (h = (h << 13) | (h >>> 19)),
        (h = Math.imul(h, 5) + 3864292196);
    }
    let S = 0,
      y = d & 3,
      _ = d - y;
    switch (y) {
      case 3:
        S ^= (csString.prototype.charCodeAt.call(s, _ + 2) & 255) << 16;
      case 2:
        S ^= (csString.prototype.charCodeAt.call(s, _ + 1) & 255) << 8;
      case 1:
        (S ^= csString.prototype.charCodeAt.call(s, _) & 255),
          (S = Math.imul(S, 3432918353)),
          (S = (S << 15) | (S >>> 17)),
          (S = Math.imul(S, 461845907)),
          (h ^= S);
    }
    return (
      (h ^= d),
      (h ^= h >>> 16),
      (h = Math.imul(h, 2246822507)),
      (h ^= h >>> 13),
      (h = Math.imul(h, 3266489909)),
      (h ^= h >>> 16),
      h >>> 0
    );
  }
  function hh(s) {
    return (Sg(s) + Eg) >>> 0;
  }
  var Sc = (() => {
      class s {
        constructor() {
          this.listeners = [];
        }
        addListener(t) {
          csArray.prototype.push.call(this.listeners, t);
        }
      }
      return s;
    })(),
    Rr = "|iframe|",
    vg = (() => {
      class s extends Sc {
        constructor(t, e, i, n) {
          super(), (this.JE = t), (this.QE = e), (this.ZE = i), (this.tS = n);
        }
        emitIframeEvent(t, e, i) {
          if (this.eS(e) && t === null) {
            J.error(
              `iframeEventEmitter received event ${e} with null iframe, content:${csJSON.stringify(
                i
              )}`
            );
            return;
          }
          switch (e) {
            case Zt.ChildLogMessage:
              this.sS(i);
              break;
            case Zt.AnalysisEvent: {
              let n = i,
                o = this.JE.transformEvent(t, n);
              o.isUserEvent ? this.iS(o.event) : this.rS(o.event);
              break;
            }
            case Zt.RecordingEvent: {
              let n = i,
                o = this.tS.transformEvents(t, n);
              if (o.events.length === 0) return;
              o.containsUserEvent ? this.nS(o.events) : this.oS(o.events);
              break;
            }
            case Zt.JavascriptError:
              this.aS(i);
              break;
            case Zt.ApiError:
              this.cS(i);
              break;
            case Zt.DetailedApiError:
              this.lS(i);
              break;
            case Zt.CustomError:
              this.uS(i);
              break;
            case Zt.EmerchandisingMessage: {
              let n = this.ZE.transformEvent(t, i);
              this.hS(n);
              break;
            }
            case Zt.Commands: {
              let n = this.QE.transformEvent(t, i);
              this.dS(n);
              break;
            }
            case Zt.IntegrationCallback:
              this.fS(i);
              break;
            case Zt.StaticResource:
              this.pS(i);
              break;
            case Zt.TrackingContextRequestMessage:
              this.gS(i);
              break;
            default:
              J.error(
                `Parent received unknown data type from iframe : ${csJSON.stringify(
                  i
                )}`
              );
          }
        }
        eS(t) {
          let e = [
            Zt.AnalysisEvent,
            Zt.RecordingEvent,
            Zt.EmerchandisingMessage,
            Zt.Commands,
          ];
          return csArray.prototype.indexOf.call(e, t) !== -1;
        }
        sS(t) {
          let { message: e, errorCode: i, level: n } = t;
          switch (n) {
            case Ot.debug:
              J.debug(e, i);
              break;
            case Ot.warn:
              J.warn(e, !0, i);
              break;
            case Ot.implementation:
              J.implementation(e, i);
              break;
            case Ot.error:
              J.error(e, i);
              break;
            case Ot.critical:
              J.critical(e, i);
              break;
          }
        }
        iS(t) {
          for (let e of this.listeners)
            e.onIframeAnalysisUserEvent && e.onIframeAnalysisUserEvent(t);
        }
        rS(t) {
          for (let e of this.listeners)
            e.onIframeAnalysisBrowserEvent && e.onIframeAnalysisBrowserEvent(t);
        }
        nS(t) {
          for (let e of this.listeners)
            e.onIframeRecordingUserEvent && e.onIframeRecordingUserEvent(t);
        }
        oS(t) {
          for (let e of this.listeners)
            e.onIframeRecordingBrowserEvent &&
              e.onIframeRecordingBrowserEvent(t);
        }
        aS(t) {
          for (let e of this.listeners)
            e.onIframeJavascriptError && e.onIframeJavascriptError(t);
        }
        cS(t) {
          for (let e of this.listeners)
            e.onIframeApiError && e.onIframeApiError(t);
        }
        lS(t) {
          for (let e of this.listeners)
            e.onIframeDetailedApiError && e.onIframeDetailedApiError(t);
        }
        hS(t) {
          for (let e of this.listeners)
            e.onIframeEmerchandisingMessage &&
              e.onIframeEmerchandisingMessage(t);
        }
        dS(t) {
          for (let e of this.listeners)
            e.onIframeCommands && e.onIframeCommands(t);
        }
        fS(t) {
          for (let e of this.listeners)
            e.onIframeIntegrationCallback && e.onIframeIntegrationCallback(t);
        }
        pS(t) {
          for (let e of this.listeners)
            e.onIframeStaticResource && e.onIframeStaticResource(t);
        }
        gS(t) {
          for (let e of this.listeners)
            e.onTrackingContextRequestCallback &&
              e.onTrackingContextRequestCallback(t);
        }
        uS(t) {
          for (let e of this.listeners)
            e.onIframeCustomError && e.onIframeCustomError(t);
        }
      }
      return s;
    })(),
    _g = (() => {
      class s {
        constructor(t, e, i) {
          (this.wt = t), (this.qd = e), (this.Wd = i);
        }
        transformEvent(t, e) {
          this.mS(t, e.event);
          let i = this.wt.getElementPath(t);
          return this.yS(i, e.event), this.ES(e.event), e;
        }
        mS(t, e) {
          if (mg(e)) {
            let i = t.getBoundingClientRect();
            (e.x = Math.round(i.left + e.x + qt.windowOffsetX())),
              (e.y = Math.round(i.top + e.y + qt.windowOffsetY()));
          }
        }
        yS(t, e) {
          uh(e) && (e.tgt = `${t}${Rr}${e.tgt}`),
            pg(e) &&
              ((e.tgtHM = `${t}${Rr}${e.tgtHM}`),
              this.qd || (e.tgtHMH = hh(e.tgtHM))),
            gg(e) && (e.tgtLk = `${t}${Rr}${e.tgtLk}`);
        }
        ES(t) {
          !this.qd && this.Wd && this.Wd.enhanceAnalysisEvent(null, t);
        }
      }
      return s;
    })(),
    wg = (() => {
      class s {
        constructor(t) {
          this.wt = t;
        }
        transformEvent(t, e) {
          let i = this.wt.getElementPath(t);
          return {
            iframePath: e.iframePath ? `${i}${Rr}${e.iframePath}` : i,
            commands: e.commands,
          };
        }
      }
      return s;
    })(),
    Ag = (() => {
      class s {
        constructor(t) {
          this.wt = t;
        }
        transformEvent(t, e) {
          if (e.products.length === 0) return e;
          let i = this.wt.getElementPath(t),
            n = csArray.prototype.map.call(e.products, (o) => ({
              ...o,
              targetPath: `${i}${Rr}${o.targetPath}`,
            }));
          return { ...e, products: n };
        }
      }
      return s;
    })(),
    bg = 1,
    fl = csSymbol("nodeIdentifier");
  function At(s) {
    let r = s[fl];
    return r != null ? r : (s[fl] = bg++);
  }
  var X = (() => {
    let s;
    return (
      (function (r) {
        (r[(r.MUTATION_INSERT = 1)] = "MUTATION_INSERT"),
          (r[(r.MUTATION_REMOVE = 2)] = "MUTATION_REMOVE"),
          (r[(r.MUTATION_ATTRIBUTE = 3)] = "MUTATION_ATTRIBUTE"),
          (r[(r.MUTATION_CHARACTER_DATA = 4)] = "MUTATION_CHARACTER_DATA"),
          (r[(r.INITIAL_DOM = 5)] = "INITIAL_DOM"),
          (r[(r.SCROLL = 6)] = "SCROLL"),
          (r[(r.CLICK = 8)] = "CLICK"),
          (r[(r.RESIZE = 9)] = "RESIZE"),
          (r[(r.INPUT_CHECKABLE = 10)] = "INPUT_CHECKABLE"),
          (r[(r.INPUT_SELECT = 11)] = "INPUT_SELECT"),
          (r[(r.INPUT_TEXT = 12)] = "INPUT_TEXT"),
          (r[(r.HASH_CHANGE = 13)] = "HASH_CHANGE"),
          (r[(r.UNANONYMIZED_CONSENT_GRANTED = 14)] =
            "UNANONYMIZED_CONSENT_GRANTED"),
          (r[(r.UNANONYMIZED_CONSENT_WITHDRAWN = 15)] =
            "UNANONYMIZED_CONSENT_WITHDRAWN"),
          (r[(r.MOUSE_OVER = 16)] = "MOUSE_OVER"),
          (r[(r.VISIBILITY_CHANGE = 17)] = "VISIBILITY_CHANGE"),
          (r[(r.STYLESHEET_RULE_INSERT = 18)] = "STYLESHEET_RULE_INSERT"),
          (r[(r.STATIC_RESOURCE_URL = 19)] = "STATIC_RESOURCE_URL"),
          (r[(r.PERFORMANCE_TIMINGS = 20)] = "PERFORMANCE_TIMINGS"),
          (r[(r.ATTACH_SHADOW = 22)] = "ATTACH_SHADOW"),
          (r[(r.STYLESHEET_CSS_TEXT_UPDATE = 23)] =
            "STYLESHEET_CSS_TEXT_UPDATE"),
          (r[(r.JAVASCRIPT_ERROR = 26)] = "JAVASCRIPT_ERROR"),
          (r[(r.PAGE_EVENT = 27)] = "PAGE_EVENT"),
          (r[(r.API_ERROR = 28)] = "API_ERROR"),
          (r[(r.TEXT_VISIBILITY = 29)] = "TEXT_VISIBILITY"),
          (r[(r.MUTATION_ENCRYPTED_CHARACTER_DATA = 30)] =
            "MUTATION_ENCRYPTED_CHARACTER_DATA"),
          (r[(r.INPUT_ENCRYPTED_TEXT = 31)] = "INPUT_ENCRYPTED_TEXT"),
          (r[(r.KEY_DOWN = 32)] = "KEY_DOWN"),
          (r[(r.KEY_UP = 33)] = "KEY_UP"),
          (r[(r.CLIPBOARD_COMMAND = 34)] = "CLIPBOARD_COMMAND"),
          (r[(r.STYLESHEET_RULE_DELETE = 37)] = "STYLESHEET_RULE_DELETE"),
          (r[(r.USER_IDENTIFIER = 38)] = "USER_IDENTIFIER"),
          (r[(r.TOUCH_START = 41)] = "TOUCH_START"),
          (r[(r.TOUCH_MOVE = 42)] = "TOUCH_MOVE"),
          (r[(r.TOUCH_END = 43)] = "TOUCH_END"),
          (r[(r.GESTURE_RECOGNITION = 44)] = "GESTURE_RECOGNITION"),
          (r[(r.POINTER_DOWN = 47)] = "POINTER_DOWN"),
          (r[(r.POINTER_MOVE = 48)] = "POINTER_MOVE"),
          (r[(r.POINTER_UP = 49)] = "POINTER_UP"),
          (r[(r.CUSTOM_ERROR = 50)] = "CUSTOM_ERROR"),
          (r[(r.CUSTOM_ELEMENT_REGISTRATION = 54)] =
            "CUSTOM_ELEMENT_REGISTRATION"),
          (r[(r.REGISTER_ADOPTED_STYLE_SHEET = 60)] =
            "REGISTER_ADOPTED_STYLE_SHEET"),
          (r[(r.SET_ADOPTED_STYLE_SHEETS = 61)] = "SET_ADOPTED_STYLE_SHEETS"),
          (r[(r.ADOPTED_STYLESHEET_RULE_INSERT = 62)] =
            "ADOPTED_STYLESHEET_RULE_INSERT"),
          (r[(r.ADOPTED_STYLESHEET_RULE_DELETE = 63)] =
            "ADOPTED_STYLESHEET_RULE_DELETE"),
          (r[(r.SCREEN_RESIZE = 65)] = "SCREEN_RESIZE"),
          (r[(r.RESOURCE_HASHES = 66)] = "RESOURCE_HASHES"),
          (r[(r.PERFORMANCE_NAVIGATION_TIMING = 67)] =
            "PERFORMANCE_NAVIGATION_TIMING"),
          (r[(r.PERFORMANCE_RESOURCE_TIMING = 68)] =
            "PERFORMANCE_RESOURCE_TIMING"),
          (r[(r.RECORDING_INFO_EVENT = 72)] = "RECORDING_INFO_EVENT"),
          (r[(r.TEXT_REF = 73)] = "TEXT_REF"),
          (r[(r.TOUCH_CANCEL = 74)] = "TOUCH_CANCEL"),
          (r[(r.MUTATION_MOVE = 75)] = "MUTATION_MOVE"),
          (r[(r.STYLESHEET_RULE_UPDATE = 76)] = "STYLESHEET_RULE_UPDATE"),
          (r[(r.ADOPTED_STYLESHEET_RULE_UPDATE = 77)] =
            "ADOPTED_STYLESHEET_RULE_UPDATE"),
          (r[(r.VIDEO_PLAY = 78)] = "VIDEO_PLAY"),
          (r[(r.VIDEO_PAUSE = 79)] = "VIDEO_PAUSE"),
          (r[(r.VIDEO_SEEK = 80)] = "VIDEO_SEEK"),
          (r[(r.ADOPTED_STYLESHEET_DISABLED = 98)] =
            "ADOPTED_STYLESHEET_DISABLED"),
          (r[(r.STYLESHEET_DISABLED = 99)] = "STYLESHEET_DISABLED"),
          (r[(r.DOM_INITIAL_STATE = 102)] = "DOM_INITIAL_STATE"),
          (r[(r.DOM_PATCH_STATE = 103)] = "DOM_PATCH_STATE"),
          (r[(r.DEBUG = 999)] = "DEBUG");
      })(s || (s = {})),
      s
    );
  })();
  var Ar = (() => {
      let s;
      return (
        (function (r) {
          (r[(r.SWIPE = 0)] = "SWIPE"),
            (r[(r.PINCH_IN = 1)] = "PINCH_IN"),
            (r[(r.PINCH_OUT = 2)] = "PINCH_OUT"),
            (r[(r.LONG_PRESS = 3)] = "LONG_PRESS"),
            (r[(r.TAP = 4)] = "TAP"),
            (r[(r.DOUBLE_TAP = 5)] = "DOUBLE_TAP");
        })(s || (s = {})),
        s
      );
    })(),
    Tg = (() => {
      class s {
        constructor() {
          (this.SS = { clientX: 2, clientY: 3 }),
            (this.vS = { clientX: 1, clientY: 2 }),
            (this._S = [X.POINTER_DOWN, X.POINTER_MOVE, X.POINTER_UP]),
            (this.wS = [X.TOUCH_START, X.TOUCH_MOVE, X.TOUCH_END]);
        }
        transformEvents(t, e) {
          if (!bt.isConnected(t))
            return (
              (e.events = csArray.prototype.filter.call(
                e.events,
                (c) => c.type !== X.VISIBILITY_CHANGE
              )),
              e.events.length === 0 ||
                (J.warn(`IframeRecordingEventsTransformer received event ${
                  Zt.RecordingEvent
                }
        from disconnected iframe, content:${csJSON.stringify(e.events)}`),
                (e.events = [])),
              e
            );
          let i = At(t),
            n = null;
          csArray.prototype.some.call(
            e.events,
            (c) => this.Yd(c) || this.Xd(c)
          ) && (n = t.getBoundingClientRect());
          for (let c of e.events)
            this.Yd(c) ? this.AS(n, c) : this.Xd(c) && this.bS(n, c),
              (c.context =
                c.context && c.context.length > 0
                  ? `${i}/${c.context}`
                  : `${i}`);
          return e;
        }
        bS(t, e) {
          this.Kd(this.vS, t, e);
        }
        AS(t, e) {
          this.Kd(this.SS, t, e);
        }
        Kd(t, e, i) {
          i.args &&
            ((i.args[t.clientX] = Math.round(e.left + i.args[t.clientX])),
            (i.args[t.clientY] = Math.round(e.top + i.args[t.clientY])));
        }
        Yd(t) {
          return csArray.prototype.indexOf.call(this._S, t.type) !== -1;
        }
        Xd(t) {
          return csArray.prototype.indexOf.call(this.wS, t.type) !== -1;
        }
      }
      return s;
    })(),
    Rg = (() => {
      class s {
        constructor() {
          (this.Yo = {
            elementSelector: "",
            attrSelector: "",
            attrSelectors: [],
          }),
            (this.Gc = {
              elementSelector: "",
              attrSelector: "",
              attrSelectors: [],
            }),
            (this.TS =
              window.top === window ? "pii-migration" : "pii-migration-iframe"),
            (this.Jd = !1);
        }
        onAfterNaturalPageView() {
          this.Qd();
        }
        onParentSensitiveStatusChange(t) {
          t.started &&
            !this.Jd &&
            ((this.Jd = !0),
            t.maskedElementSettings && (this.Yo = t.maskedElementSettings),
            this.Qd());
        }
        Qd() {
          var t, e;
          let i = this.Zd(this.Yo),
            n = this.Zd(this.Gc),
            o = csArray.prototype.filter.call(
              n.elementSelectors,
              (h) =>
                csArray.prototype.indexOf.call(i.elementSelectors, h) === -1 &&
                h !== "[data-cs-mask]"
            ),
            c = {};
          for (let [h, d] of Object.entries(n.attrSelectors)) {
            let S = i.attrSelectors[h] || [],
              y = csArray.prototype.filter.call(
                d,
                (_) => csArray.prototype.indexOf.call(S, _) === -1
              );
            y.length > 0 && (c[h] = y);
          }
          (o.length > 0 || Object.keys(c).length > 0) &&
            (J.computeIsActive(100),
            J.warn(csJSON.stringify({ selectors: o, attrs: c }), !0, this.TS),
            J.computeIsActive(
              (e =
                (t = window.CS_CONF) === null || t === void 0
                  ? void 0
                  : t.validationRate) !== null && e !== void 0
                ? e
                : 10
            ));
        }
        Zd(t) {
          let e =
              csString.prototype.trim.call(t.elementSelector).length > 0
                ? csArray.prototype.filter.call(
                    csArray.prototype.map.call(
                      csString.prototype.split.call(t.elementSelector, ","),
                      (n) => csString.prototype.trim.call(n)
                    ),
                    (n) => n.length > 0
                  )
                : [],
            i = {};
          for (let n of t.attrSelectors)
            i[n.attrName] = csArray.prototype.filter.call(
              csArray.prototype.map.call(
                csString.prototype.split.call(n.selector, ","),
                (o) => csString.prototype.trim.call(o)
              ),
              (o) => o.length > 0
            );
          return { elementSelectors: e, attrSelectors: i };
        }
        markClicktalePIIInUse(t) {
          this.Gc = F.getComputedSelectorSettings(t, this.Gc);
        }
        markPIIMaskingTemplateInUse(t) {
          let e = F.sanitizeSelectorUserInput(t);
          this.Yo = F.getComputedSelectorSettings(e, this.Yo);
        }
      }
      return Z([$()], s.prototype, "markPIIMaskingTemplateInUse", null), s;
    })(),
    Cg = (() => {
      class s {
        constructor(t, e) {
          (this.S = t), (this.mt = e);
        }
        init() {
          this.mt.addListener(this.S);
        }
        onOptout() {
          this.S.stop();
        }
        onBeforeSessionRenewal() {
          this.S.stop();
        }
      }
      return s;
    })();
  var se = (() => {
      class s {
        constructor() {
          this._isStarted = !1;
        }
        get isStarted() {
          return this._isStarted;
        }
        start(...t) {
          this._isStarted || ((this._isStarted = !0), this.onStart(...t));
        }
        stop() {
          this._isStarted && ((this._isStarted = !1), this.onStop());
        }
        restart() {
          this.stop(), this.start();
        }
      }
      return s;
    })(),
    Ig = (() => {
      let s;
      return (
        (function (r) {
          (r.UXA = "_uxa"), (r.WVT = "cs_wvt");
        })(s || (s = {})),
        s
      );
    })(),
    Pg = (() => {
      class s extends se {
        constructor(t, e) {
          super(), (this.zc = t), (this.qc = e), (this.ss = {});
        }
        register(t, e, i) {
          for (let n of t) {
            let o = (...c) => {
              let h = (i == null ? void 0 : i.metricParameter) || n;
              try {
                let d = e(...c);
                return st.counters.commandApplied.count(h), d;
              } catch (d) {
                d instanceof ge
                  ? (st.counters.commandMisuse.count(h),
                    J.implementation(
                      `Misused Command: ${n}; Args: ${csJSON.stringify(
                        c
                      )}; Error: ${ns(d) ? d.stack : d}`
                    ))
                  : (st.counters.commandError.count(h),
                    J.error(`Command Error - ${n}: ${ns(d) ? d.stack : d}`));
              }
            };
            (this.ss[n] = { callback: o, configuration: i }), this.ss;
          }
        }
        onStart() {
          this.RS(), this.CS();
        }
        onStop() {
          for (let t of this.zc) window[t] = [];
        }
        applyFromIntegration(t, e, i) {
          this.tf(t, e, `Commands.apply.from.integration: ${i}`),
            st.counters.commandsFromIntegrations.count(t);
        }
        applyFromImplementation(t, e, i) {
          var n;
          this.tf(t, e, `Commands.apply.from.implementation: ${i}`),
            st.counters.commandsFromCSTC.count(t),
            i === "PIIMaskingTemplate" &&
              ((n = this.qc) === null ||
                n === void 0 ||
                n.markPIIMaskingTemplateInUse(e[0]));
        }
        onIframeCommands(t) {
          for (let e of t.commands)
            this.IS(e.name, e.params, t.iframePath),
              st.counters.commandsFromIframe.count(e.name);
        }
        tf(t, e, i) {
          if (!this.isStarted) {
            window._uxa.push([t, ...e]);
            return;
          }
          J.tryToExecute(i, () => {
            if (this.ss[t]) return this.ss[t].callback(...e);
          })();
        }
        IS(t, e, i) {
          J.tryToExecute(`Commands.apply.from.iframe: ${i}`, () => {
            if (this.ss[t]) return this.ss[t].callback(...e);
          })();
        }
        RS() {
          for (let t of this.zc)
            window[t].forEach(([e, ...i]) => this.ef(e, i, !1));
        }
        CS() {
          for (let t of this.zc)
            window[t] = { push: ([e, ...i]) => this.ef(e, i, !0) };
        }
        ef(t, e, i) {
          var n, o;
          if (this.ss[t]) {
            if (
              (((n = this.ss[t].configuration) === null || n === void 0
                ? void 0
                : n.disableApplyPending) &&
                !i) ||
              (((o = this.ss[t].configuration) === null || o === void 0
                ? void 0
                : o.disableApplyImmediate) &&
                i)
            )
              return;
            try {
              return this.ss[t].callback(...e);
            } catch (h) {
              J.error(
                `Command ${t} failed - params: ${csJSON.stringify(e)}`,
                h
              );
            }
          }
        }
      }
      return s;
    })(),
    Og = (() => {
      class s extends Sc {
        emitPageEvent(t) {
          for (let e of this.listeners) e.onPageEvent && e.onPageEvent(t);
        }
        emitEventTriggerRecording(t, e) {
          for (let i of this.listeners)
            i.onEventTriggerRecording && i.onEventTriggerRecording(t, e);
        }
        emitCustomJavaScriptErrorEvent(t) {
          for (let e of this.listeners)
            e.onCustomJavaScriptErrorEvent && e.onCustomJavaScriptErrorEvent(t);
        }
        emitCustomErrorEvent(t) {
          for (let e of this.listeners)
            e.onCustomErrorEvent && e.onCustomErrorEvent(t);
        }
        emitUserIdentifierEvent(t) {
          for (let e of this.listeners)
            e.onUserIdentifierEvent && e.onUserIdentifierEvent(t);
        }
        emitExternalEvent(t) {
          for (let e of this.listeners)
            e.onExternalEvent &&
              e.onExternalEvent({ type: at.EXTERNAL_EVENT, name: t, ts: 0 });
        }
        emitTargetingRulesArtificialPageview(t) {
          for (let e of this.listeners)
            e.onTargetingRulesArtificialPageview &&
              e.onTargetingRulesArtificialPageview(t);
        }
      }
      return s;
    })();
  function Gt(s) {
    let r = csEventtarget.apply(s);
    return r && It(r) && csElementshadowRoot.apply(r) && s.composedPath
      ? s.__csOriginalTarget || s.composedPath()[0]
      : r;
  }
  function Ng(s) {
    return (
      s.composedPath &&
        Object.defineProperty(s, "__csOriginalTarget", {
          value: s.composedPath()[0],
          writable: !1,
          enumerable: !1,
        }),
      s
    );
  }
  function Mg() {
    return (s, r, t) => {
      let e = t.value;
      return (
        e &&
          (t.value = function (i) {
            if (Gt(i) === csEventtarget.apply(i)) return e.call(this, i);
          }),
        t
      );
    };
  }
  var Dg = [
      "class",
      "data-com.agilebits.onepassword.initial-value",
      "data-com.onepassword.iv",
      "data-ember-action",
      "data-initial-value",
      "data-previous-value",
      "data-react-checksum",
      "data-reactid",
      "id",
      "maxlength",
      "onclick",
      "onsubmit",
      "style",
    ],
    kg = 1024,
    xg = 1024,
    Lg = (() => {
      class s {
        constructor(t, e) {
          (this.gt = t), (this.E = e);
        }
        getEventTargetPathAndHierarchy(t, e) {
          let i = Gt(t),
            n = {
              isNodeSensitive(o) {
                return F.isMaskedElement(o) || F.isMaskedElementChild(o);
              },
              isAttributeSensitive(o, c) {
                return F.isMaskedAttribute(o, c);
              },
              allWhitelistedAttributes: Ec(this.E.whitelistedAttributes),
              attributeIgnoreTokens: Dg,
              useAnonymization: e,
              attrMaxLength: xg,
              hierarchyMaxLength: kg,
            };
          return this.gt.getElementPathAndHierarchy(i, n, {
            dynamicIdRegex: this.E.dynamicIdRegex,
            ...this.E.pathComputationRules,
          });
        }
        getEventTargetPath(t) {
          let e = Gt(t);
          return this.gt.getElementPath(e, {
            dynamicIdRegex: this.E.dynamicIdRegex,
            ...this.E.pathComputationRules,
          });
        }
        getEventTargetPathAndTargetLink(t) {
          let e = Gt(t),
            { path: i, firstAnchorParent: n } =
              this.gt.getElementPathAndFirstAnchorParent(e, {
                dynamicIdRegex: this.E.dynamicIdRegex,
                ...this.E.pathComputationRules,
              }),
            o = this.PS(n) ? n.href : "";
          return { path: i, targetLink: o };
        }
        hasValidEventTarget(t) {
          let e = Gt(t);
          return this.gt.isValidElement(e);
        }
        getElementPath(t) {
          return this.gt.getElementPath(t, {
            dynamicIdRegex: this.E.dynamicIdRegex,
            ...this.E.pathComputationRules,
          });
        }
        PS(t) {
          var e;
          return (
            t !== null &&
            t.hasAttribute("href") &&
            !Oa(
              (e = t.getAttribute("href")) !== null && e !== void 0 ? e : "",
              "#"
            )
          );
        }
      }
      return s;
    })();
  function Wn(s, r) {
    typeof r == "number" && (r = { wait: r });
    let t = r.wait,
      e = r.mode || "leading",
      i,
      n = [],
      o = null,
      c = 0,
      h,
      d = () => {
        (c = q.now()), (o = null), (h = s.apply(i, n)), (n = []), (i = null);
      },
      S = function (...y) {
        if (
          ((i = this !== null && this !== void 0 ? this : gt),
          (n = [...y]),
          e === "trailing")
        )
          return o || (o = gt.csSetTimeout(d, t)), h;
        let _ = q.now(),
          w = t - (_ - c);
        return (
          w <= 0 || w > t
            ? ((c = _),
              (h = s.apply(i, n)),
              o ? (gt.csClearTimeout(o), (o = null)) : (n = []))
            : o || (o = gt.csSetTimeout(d, w)),
          h
        );
      };
    return (
      (S.cancel = () => {
        o && (gt.csClearTimeout(o), (c = 0), (o = null), (n = []));
      }),
      (S.flushPending = () => {
        o && (gt.csClearTimeout(o), d());
      }),
      S
    );
  }
  var Yn = (s) => (r, t, e) => {
    e.value = Wn(e.value, s);
  };
  var Vg = (() => {
      let s;
      return (
        (function (r) {
          function t() {
            return (
              window.navigator.vendor &&
              csString.prototype.indexOf.call(
                window.navigator.vendor,
                "Apple"
              ) > -1 &&
              window.navigator.appVersion &&
              csString.prototype.indexOf.call(
                window.navigator.appVersion,
                "Version/12."
              ) > -1
            );
          }
          r.browserIsSafariV12 = t;
        })(s || (s = {})),
        s
      );
    })(),
    Qs = (() => {
      let s;
      return (
        (function (r) {
          (r.None = "None"), (r.Lax = "Lax"), (r.NotSet = "X");
        })(s || (s = {})),
        s
      );
    })(),
    es = (() => {
      let s;
      return (
        (function (r) {
          (r[(r.Yes = 1)] = "Yes"), (r[(r.No = 0)] = "No");
        })(s || (s = {})),
        s
      );
    })(),
    Xn = (() => {
      class s {
        constructor(t, e, i) {
          (this.E = t),
            (this.A = e),
            (this.Ti = i),
            (this.Wc = !1),
            (this.sf = Qs.NotSet),
            (this.Yc = es.No);
        }
        getSameSiteFlag() {
          return this.sf;
        }
        getSecureFlag() {
          return this.Yc;
        }
        getDomain() {
          return this.Xc;
        }
        getRootDomain() {
          return this.rf;
        }
        init() {
          if (this.E.cookielessTrackingEnabled) return;
          let t = this.OS(),
            e = this.NS();
          (this.Wc = this.MS(t, e)),
            this.Wc
              ? ((this.sf = t), (this.Yc = e))
              : this.E.secureCookiesEnabled &&
                this.A.getUrlProtocol() === "https:" &&
                (this.Yc = es.Yes),
            (this.rf = this.DS()),
            (this.Xc = this.kS(this.rf));
        }
        MS(t, e) {
          return Vg.browserIsSafariV12()
            ? !1
            : (Ut.set(
                s.COOKIE_TEST_FOR_SAME_SITE,
                "Test same site",
                s.CURRENT_DOMAIN,
                void 0,
                t,
                e
              ),
              Ut.get(s.COOKIE_TEST_FOR_SAME_SITE)
                ? (Ut.remove(s.COOKIE_TEST_FOR_SAME_SITE, s.CURRENT_DOMAIN), !0)
                : !1);
        }
        OS() {
          return this.A.getUrlProtocol() === "http:"
            ? Qs.Lax
            : this.Ti.isSameSiteNoneSecureNeeded() || this.E.crossDomainTracking
            ? Qs.None
            : Qs.Lax;
        }
        NS() {
          return this.A.getUrlProtocol() === "http:"
            ? es.No
            : this.E.secureCookiesEnabled ||
              this.E.crossDomainTracking ||
              this.Ti.isSameSiteNoneSecureNeeded()
            ? es.Yes
            : es.No;
        }
        isSameSiteSupported() {
          return this.Wc;
        }
        set(t, e, i, n) {
          let o = Ut.toExpireDate(i),
            c = n ? es.Yes : this.getSecureFlag();
          Ut.set(t, e, this.Xc, o, this.getSameSiteFlag(), c);
        }
        get(t) {
          let i = new csRegExp(`(^|;)[ ]*${t}=([^;]*)`).exec(document.cookie);
          return i ? decodeURIComponent(i[2]) : null;
        }
        delete(t, e) {
          let i = e || this.Xc;
          Ut.remove(t, i);
        }
        DS() {
          let t =
              this.Ti.isSameSiteNoneSecureNeeded() &&
              this.isSameSiteSupported(),
            e = t ? Qs.None : void 0,
            i = t ? es.Yes : void 0;
          return Ut.getRootDomain(e, i);
        }
        kS(t) {
          return this.E.allowSubdomains ? t : Ut.CURRENT_DOMAIN;
        }
      }
      return (
        (s.CURRENT_DOMAIN = "CURRENT_DOMAIN"),
        (s.COOKIE_TEST_FOR_SAME_SITE = "_cs_same_site"),
        s
      );
    })(),
    Ut = (() => {
      let s;
      return (
        (function (r) {
          r.CURRENT_DOMAIN = "CURRENT_DOMAIN";
          function t(h) {
            let S = new csRegExp(`(^|;)[ ]*${h}=([^;]*)`).exec(document.cookie);
            return S ? decodeURIComponent(S[2]) : null;
          }
          r.get = t;
          function e(h, d, S, y, _, w) {
            let T = encodeURIComponent(`${d}`),
              M = S === r.CURRENT_DOMAIN ? void 0 : S,
              x = i(y),
              P = x ? `;expires=${x.toUTCString()}` : "",
              N = ";path=/",
              W = Ct(M) ? `;domain=${M}` : "",
              D = `${h}=${T}${P}${N}${W}`;
            return (
              ft(_) && _ !== Qs.NotSet && (D = `${D};SameSite=${_}`),
              ft(w) && w === es.Yes && (D = `${D};Secure`),
              (document.cookie = D),
              !0
            );
          }
          r.set = e;
          function i(h) {
            return Ht(h) ? new csDate(q.now() + h) : h;
          }
          r.toExpireDate = i;
          function n(h, d) {
            t(h) && e(h, "", d, new csDate(0)),
              t(h) && e(h, "", d, new csDate(0), Qs.None, es.Yes);
          }
          r.remove = n;
          function o() {
            return document.cookie.length > 0;
          }
          r.isCookiePresent = o;
          function c(h, d) {
            let S = "_cs_root-domain",
              y = t(S);
            if (y !== null && y !== "1") return y;
            let _ = csString.prototype.split.call(
                window.location.hostname,
                "."
              ),
              w = csArray.prototype.pop.call(_);
            for (; _.length && (y === null || y === "1"); )
              (w = csArray.prototype.join.call(
                [csArray.prototype.pop.call(_), w],
                "."
              )),
                e(S, w, w, void 0, h, d),
                (y = t(S));
            return n(S, w), w;
          }
          r.getRootDomain = c;
        })(s || (s = {})),
        s
      );
    })();
  var Vn = ".",
    vc = "__DOT__",
    Ug = /^(([a-z0-9\-])+(\.[0-9]+){6})(\.[0-1])?(\.\b(x|[0-9a-fA-F]{12})\b)?$/,
    dh = "x";
  function Hg(s) {
    let [r, t, e, i, n, o, c, h, d] = Gg(s);
    return {
      id: r,
      creationTimestamp: Number(t),
      visitsCount: Number(e),
      hitTimestamp: Number(i),
      lastVisitTimestamp: Number(n),
      appliedTrackingDraw: Number(o),
      expires: Number(c),
      allowSubdomains: h === void 0 ? void 0 : !!Number(h),
      identityPrint: d === void 0 || d === dh ? null : d,
    };
  }
  function jg(s) {
    var r;
    return csArray.prototype.join.call(
      csArray.prototype.map.call(
        csArray.prototype.map.call(
          [
            s.id,
            s.creationTimestamp,
            s.visitsCount,
            s.hitTimestamp,
            s.lastVisitTimestamp,
            s.appliedTrackingDraw,
            s.expires,
            s.allowSubdomains ? 1 : 0,
            (r = s.identityPrint) !== null && r !== void 0 ? r : dh,
          ],
          csString
        ),
        $g
      ),
      Vn
    );
  }
  function Bg(s) {
    return Ug.test(s);
  }
  function $g(s) {
    return csString.prototype.replace.call(s, /\./g, vc);
  }
  function Fg(s) {
    return csString.prototype.replace.call(s, new csRegExp(vc, "g"), Vn);
  }
  function Gg(s) {
    return csString.prototype.indexOf.call(s, vc) !== -1
      ? csArray.prototype.map.call(csString.prototype.split.call(s, Vn), Fg)
      : csString.prototype.split.call(s, Vn);
  }
  var z = (() => {
    let s;
    return (
      (function (r) {
        (r.QUOTA_REACHED = "X"),
          (r.RECORDING_RULES_TARGETING = "8"),
          (r.ANALYTICS_ONLY_RULES_TARGETING = "9"),
          (r.ANALYTICS_ONLY_RECORDING_PENDING_RULES_TARGETING = "P"),
          (r.ANALYTICS_ONLY = "0"),
          (r.RECORDING_GLOBAL_SAMPLING = "5"),
          (r.RECORDING_TEMPORARILY = "T"),
          (r.RECORDING_URL_SAMPLING = "6"),
          (r.RECORDING_ETR_SAMPLING = "7"),
          (r.RECORDING_BLOCKED_BY_CONSENT_NOT_EXPRESSED = "B"),
          (r.RECORDING_BLOCKED_BY_CONSENT_WITHDRAWN = "W");
      })(s || (s = {})),
      s
    );
  })();
  function fh(s) {
    return (
      s === z.RECORDING_TEMPORARILY ||
      s === z.ANALYTICS_ONLY_RECORDING_PENDING_RULES_TARGETING
    );
  }
  function _c(s) {
    return (
      s === z.RECORDING_GLOBAL_SAMPLING ||
      s === z.RECORDING_RULES_TARGETING ||
      s === z.RECORDING_URL_SAMPLING ||
      s === z.RECORDING_ETR_SAMPLING
    );
  }
  var zg = { [z.RECORDING_RULES_TARGETING]: z.RECORDING_GLOBAL_SAMPLING },
    Ue = (() => {
      let s;
      return (
        (function (r) {
          (r.ETR_OFF = "0"), (r.ETR_ON = "1");
        })(s || (s = {})),
        s
      );
    })(),
    ei = (() => {
      let s;
      return (
        (function (r) {
          (r.ETR_LEGACY = "0"), (r.ETR_SESSION = "1"), (r.ETR_PAGE = "2");
        })(s || (s = {})),
        s
      );
    })(),
    Ce = (() => {
      let s;
      return (
        (function (r) {
          (r.ETR_DISABLED = "0"),
            (r.ETR_PENDING = "1"),
            (r.ETR_SAVED_PAGE = "2"),
            (r.ETR_SAVED_SESSION = "3"),
            (r.ETR_NOT_SAVED_SESSION = "9");
        })(s || (s = {})),
        s
      );
    })(),
    Ma = (() => {
      let s;
      return (
        (function (r) {
          (r.UNNECESSARY = "U"),
            (r.NOT_EXPRESSED = "N"),
            (r.WITHDRAWN = "W"),
            (r.GRANTED = "G");
        })(s || (s = {})),
        s
      );
    })(),
    ph = /^(\d+\.[01356789TBWXP](\.[01UNWG])?(\.[39])?)(\.\d+)?$/,
    gh = ".";
  function qg(s) {
    return csArray.prototype.join.call(
      [s.pageNumber, s.collectState, s.replayConsent, s.etrStatus],
      gh
    );
  }
  function Wg(s) {
    if (!wc(s)) return null;
    let r = Da(s);
    return r !== null ? mh(r) : null;
  }
  function mh(s) {
    var r, t;
    let [e, i, n, o] = csString.prototype.split.call(s, gh);
    return {
      collectState: i,
      replayConsent: (r = n) !== null && r !== void 0 ? r : Ma.UNNECESSARY,
      etrStatus:
        (t = o) !== null && t !== void 0 ? t : Ce.ETR_NOT_SAVED_SESSION,
      pageNumber: parseInt(e, 10),
    };
  }
  function wc(s) {
    return ph.test(s);
  }
  function Da(s) {
    if (!s) return null;
    let r = (() => {
      var t;
      return (t = csString.prototype.match.call(s, ph)) === null || t === void 0
        ? void 0
        : t[1];
    })();
    return r != null ? r : null;
  }
  var Yg = (() => {
      class s {
        constructor(t, e, i, n, o, c, h) {
          (this.w = t),
            (this.S = e),
            (this.sl = i),
            (this.il = n),
            (this.rs = o),
            (this.jS = c),
            (this.nn = h);
        }
        start() {
          this.w.addListener(this.jS),
            this.w.addListener(this.nn),
            this.w.addListener(this.sl),
            this.nn.init(),
            this.il.init(),
            this.rs.init(),
            !this.rs.isActive() && this.S.start();
        }
      }
      return s;
    })(),
    yh = "_cs_ex",
    Xg = (() => {
      class s {
        constructor(t) {
          this.vs = t;
        }
        onOptout() {
          this.vs.removeExclusion();
        }
      }
      return s;
    })(),
    Kg = (() => {
      class s {
        constructor(t, e) {
          (this.Ht = t), (this.it = e);
        }
        exclude(t) {
          this.it.set(csString(t.lastTrackingDraw));
        }
        removeExclusion() {
          this.it.remove();
        }
        isExcluded() {
          return this.BS() || this.$S();
        }
        BS() {
          return this.getAppliedTrackingDraw() !== 0;
        }
        getAppliedTrackingDraw() {
          return Number(this.it.get());
        }
        $S() {
          return csString.prototype.indexOf.call(this.Ht.href, yh) > 0;
        }
      }
      return s;
    })(),
    Eh = ["excludeURLforReplay"],
    Jg = (() => {
      class s {
        constructor(t, e) {
          (this.vs = t), (this.S = e);
        }
        init() {
          this.S.register(Eh, (t) => {
            if (j(t)) this.vs.setExcludeUrlForSessionReplay(t);
            else throw new ge("excludeURLforReplay");
          });
        }
      }
      return s;
    })(),
    Qo = (() => {
      let s;
      return (
        (function (r) {
          (r.SessionReplay = "SR"), (r.None = "");
        })(s || (s = {})),
        s
      );
    })(),
    Qg = ".^",
    Sh = ".*",
    Zg = (() => {
      class s {
        constructor(t) {
          (this.A = t), (this.rl = new csRegExp(`${Qg}`));
        }
        setExcludeUrlForSessionReplay(t) {
          try {
            this.rl = new csRegExp(t);
          } catch {
            J.warn(`excludeURLforReplay - invalid regex '${t}'`),
              (this.rl = new csRegExp(`${Sh}`));
          }
        }
        pf() {
          return this.rl.test(this.A.getAnonymizedUrl())
            ? Qo.SessionReplay
            : Qo.None;
        }
        isUrlExcludedForSessionReplay() {
          return this.pf() === Qo.SessionReplay;
        }
        getRequestParameters() {
          return { ex: this.pf() };
        }
      }
      return s;
    })(),
    tm = ["visitor:language"],
    em = [
      "device",
      "browser:resolution",
      "browser:windowWidth",
      "browser:windowHeight",
    ],
    sm = ["visit:isNew", "visit:number", "source:from"],
    nb = [...tm, ...em, ...sm];
  var im = {
      ALL_VISITORS: -1,
      NEW_VISITORS: 1,
      RETURNING_VISITORS: 2,
      BOTS_AND_SPIDERS: 3,
      PURCHASE_INTENT_USERS: 4,
      VISITS_WITH_TRANSACTIONS: 7,
      VISITS_WITHOUT_TRANSACTIONS: 8,
      NON_BOUNCE_VISITS: 12,
      BOUNCE_VISITS: 13,
    },
    Un;
  (function (s) {
    (s.MATCH_GREATER_OR_EQUAL = ">="),
      (s.MATCH_LESS_OR_EQUAL = "<="),
      (s.MATCH_GREATER = ">"),
      (s.MATCH_LESS = "<"),
      (s.MATCH_LOGICAL_EQUAL = "="),
      (s.MATCH_LOGICAL_NOT_EQUAL = "!="),
      (s.MATCH_GTE = "more_or_equals"),
      (s.MATCH_LTE = "less_or_equals"),
      (s.MATCH_GT = "more_than"),
      (s.MATCH_LT = "less_than"),
      (s.MATCH_CONTAINS = "contains"),
      (s.MATCH_DOES_NOT_CONTAIN = "not_contains"),
      (s.MATCH_EQUALS = "equals"),
      (s.MATCH_NOT_EQUALS = "not_equals"),
      (s.MATCH_STARTS_WITH = "starts_with"),
      (s.MATCH_DOES_NOT_START_WITH = "not_starts_with"),
      (s.MATCH_ENDS_WITH = "ends_with"),
      (s.MATCH_DOES_NOT_END_WITH = "not_ends_with"),
      (s.MATCH_REGEX = "matches_regex"),
      (s.MATCH_IN = "matchIn"),
      (s.MATCH_BETWEEN = "between"),
      (s.DOES_NOT_MATCH_IN = "not_matchIn"),
      (s.DOES_NOT_MATCH_REGEX = "not_matches_regex"),
      (s.DOES_NOT_MATCH = "doesNotMatchIn"),
      (s.IS_EMPTY = "is_empty"),
      (s.NOT_IS_EMPTY = "not_is_empty"),
      (s.EXISTS = "exists"),
      (s.NOT_EXISTS = "not_exists"),
      (s.HAS_ANY = "hasAny"),
      (s.NOT_HAS_ANY = "not_hasAny"),
      (s.HAS_ALL = "hasAll"),
      (s.NOT_HAS_ALL = "not_hasAll"),
      (s.SIMPLE_MATCH = "simple_match"),
      (s.NOT_SIMPLE_MATCH = "not_simple_match");
  })(Un || (Un = {}));
  var pl;
  (function (s) {
    (s.interactionEvents = "interactionEvents"),
      (s.zoneMetrics = "zoneMetrics"),
      (s.zoneInsights = "zoneInsights"),
      (s.pageviewMetrics = "pageviewMetrics"),
      (s.dynamicVars = "dynamicVars"),
      (s.errors = "errors"),
      (s.textConditions = "textConditions"),
      (s.pageEvents = "pageEvents"),
      (s.webVitals = "webVitals"),
      (s.pageviewFrustrationScore = "pageviewFrustrationScore"),
      (s.accessibilityMetrics = "accessibilityMetrics"),
      (s.pageviewFrustrationFactor = "pageviewFrustrationFactor"),
      (s.zoneFrustrationFactor = "zoneFrustrationFactor");
  })(pl || (pl = {}));
  var Ns;
  (function (s) {
    (s.Pageviews = "pageviews"),
      (s.UserId = "userId"),
      (s.Goal = "goal"),
      (s.GoalId = "goal:id"),
      (s.GoalReference = "goal:reference"),
      (s.SegmentId = "segment:id"),
      (s.PrestoredText = "page:prestored_text"),
      (s.TextSeen = "segment:textSeen"),
      (s.VisitText = "visit:text"),
      (s.IsReturning = "visit:isNew"),
      (s.NumberVisits = "visit:number"),
      (s.Language = "visitor:language"),
      (s.Connection = "visit:connectionType"),
      (s.AppVersion = "visit:appVersion"),
      (s.DynamicVariable = "dynamicVar"),
      (s.DeviceCommercialName = "device:marketingName"),
      (s.DeviceModel = "device:manufacturer"),
      (s.DeviceModelCommercialName = "device:manufacturerCommercialName"),
      (s.DeviceModelVersion = "device:model"),
      (s.OsVersion = "device:osVersion"),
      (s.Device = "device"),
      (s.DeviceType = "device:typeId"),
      (s.Transaction = "visit:isBuyer"),
      (s.Amount = "visit:amount"),
      (s.NumberPageViews = "visit:pageviews"),
      (s.VisitDuration = "visit:durationTime"),
      (s.Referrer = "source:from"),
      (s.GeographicCity = "location:city"),
      (s.GeographicArea = "location:country"),
      (s.Test = "version:id"),
      (s.CustomVariable = "customVar"),
      (s.Browser = "browser:name"),
      (s.BrowserVersion = "browser:version"),
      (s.BrowserSemanticVersion = "browser:semanticVersion"),
      (s.Os = "browser:platform"),
      (s.WebOsVersion = "browser:platformVersion"),
      (s.Resolution = "browser:resolution"),
      (s.BrowserWindowWidth = "browser:windowWidth"),
      (s.BrowserWindowHeight = "browser:windowHeight"),
      (s.LandingPath = "visit:landingPath"),
      (s.LandingPage = "visit:landingPage"),
      (s.LandingPagePOF = "visit:landingPagePOF"),
      (s.ExitPage = "visit:exitPath"),
      (s.NumberPageviews = "visit:pageviews"),
      (s.PageHostViewed = "page:host"),
      (s.PagePathViewed = "page:path"),
      (s.PageFullUrlViewd = "page:fullURL"),
      (s.PageQueryParamsViewed = "page:query"),
      (s.PageEvent = "page:pageEvent"),
      (s.PageText = "page:text"),
      (s.ExternalEvent = "externalEvent"),
      (s.Feedback = "voc:feedback"),
      (s.NetPromoterScore = "voc:nps"),
      (s.Survey = "voc:surveyId"),
      (s.Reaction = "voc:reaction"),
      (s.FullText = "page:full_text"),
      (s.PageCustomHashId = "page:customHashId"),
      (s.CustomHashId = "customHashId"),
      (s.SessionVisitIP = "visit:ip"),
      (s.SegmentMerch = "segment:merch"),
      (s.SegmentMerchProduct = "segment:merchProduct"),
      (s.SegmentMerchCategoryBrand = "segment:merchCategoryBrand"),
      (s.Error = "error"),
      (s.ErrorMessage = "error:message"),
      (s.ErrorFileName = "error:filename"),
      (s.ErrorLineNumber = "error:lineNumber"),
      (s.ErrorColumnNumber = "error:colNumber"),
      (s.ErrorType = "error:type"),
      (s.ErrorGroupId = "error:groupId"),
      (s.ErrorGroupIdV1 = "error:groupIdV1"),
      (s.ApiErrorURL = "errorApi:url"),
      (s.ApiErrorStatusCode = "errorApi:statusCode"),
      (s.ApiErrorMethod = "errorApi:method"),
      (s.ApiErrorType = "errorApi:type"),
      (s.ApiErrorGroupId = "errorApi:groupId"),
      (s.ApiErrorGroupIdV1 = "errorApi:groupIdV1"),
      (s.ApiErrorBodyAttribute = "errorApi:responseBodyAttribute"),
      (s.ErrorDismissStatus = "error:dismiss_status"),
      (s.ApiErrorDismissStatus = "errorApi:dismiss_status"),
      (s.CustomErrorType = "customError:type"),
      (s.CustomErrorMessage = "customError:message"),
      (s.CustomErrorAttributes = "customError:attributes"),
      (s.CustomErrorGroupId = "customError:groupId"),
      (s.CustomErrorGroupIdV1 = "customError:groupIdV1"),
      (s.CrashType = "errorCrash:type"),
      (s.CrashGroupId = "errorCrash:groupId"),
      (s.CrashSpecificId = "errorCrash:id"),
      (s.FlutterType = "errorFlutter:type"),
      (s.FlutterGroupId = "errorFlutter:groupId"),
      (s.FlutterSpecificId = "errorFlutter:id"),
      (s.ExcludeBots = "visit:excludeBots"),
      (s.IsBot = "visit:isBot"),
      (s.SdkScreenActivity = "screen:activity"),
      (s.SdkScreenContainer = "screen:container"),
      (s.SdkScreenQuery = "screen:query"),
      (s.SdkScreenName = "screen:name"),
      (s.LargestContentfulPaint = "cwv:largest_contentful_paint"),
      (s.FirstContentfulPaint = "cwv:first_contentful_paint"),
      (s.CumulativeLayoutShift = "cwv:cumulative_layout_shift"),
      (s.InteractionToNextPaint = "cwv:interaction_to_next_paint"),
      (s.FirstInputDelay = "cwv:first_input_delay"),
      (s.TimeToFirstByte = "cwv:time_to_first_byte"),
      (s.EnrichmentIntegration = "external:integrationEnrichment"),
      (s.DynamicSnippetIntegration = "external:dynamicSnippetIntegration"),
      (s.ExternalSegmentIntegration = "external:segmentIntegration"),
      (s.AccessibilityFeatures = "accessibility:features"),
      (s.AccessibilityZoom = "accessibility:max_zoom"),
      (s.AccessibilityHighlight = "accessibility:text_highlight"),
      (s.AccessibilityKeyboard = "accessibility:keyboard"),
      (s.AccessibilityKeyboardClick = "accessibility:keyboard_click"),
      (s.AccessibilityKeyboardFocus = "accessibility:keyboard_focus"),
      (s.AccessibilityKeyboardScroll = "accessibility:keyboard_scroll"),
      (s.AccessibilityExtensions = "accessibility:extensions"),
      (s.PageviewFrustrationScore = "pageviewFrustrationScore"),
      (s.SessionFrustrationScore = "visit:sessionFrustrationScore"),
      (s.FrustrationFactor = "frustrationFactor"),
      (s.FrustrationFactorBlankPage = "frustrationFactor:blankPage"),
      (s.FrustrationFactorDeadLink = "frustrationFactor:deadAnchor"),
      (s.FrustrationFactorDeadClick = "frustrationFactor:deadClick"),
      (s.FrustrationFactorDeadZoom = "frustrationFactor:deadZoom"),
      (s.FrustrationFactorExcessiveHover = "frustrationFactor:excessiveHover"),
      (s.FrustrationFactorLoopingIndex = "frustrationFactor:loopingIndex"),
      (s.FrustrationFactorMultipleButtonInteractions =
        "frustrationFactor:multipleButtonInteractions"),
      (s.FrustrationFactorMultipleFieldInteractions =
        "frustrationFactor:multipleFieldInteractions"),
      (s.FrustrationFactorMultipleInteractions =
        "frustrationFactor:multipleInteractions"),
      (s.FrustrationFactorMultipleUseTarget =
        "frustrationFactor:multipleUseTarget"),
      (s.FrustrationFactorPageReload = "frustrationFactor:pageReload"),
      (s.FrustrationFactorPropViewsNotConsumed =
        "frustrationFactor:propViewsNotConsumed"),
      (s.FrustrationFactorRageClick = "frustrationFactor:rageClick"),
      (s.FrustrationFactorRageTap = "frustrationFactor:rageTap"),
      (s.FrustrationFactorLowActivity = "frustrationFactor:lowActivity"),
      (s.FrustrationFactorThrashedCursor = "frustrationFactor:thrashedCursor"),
      (s.SessionWithUserReturn = "heap:sessionWithUserReturn"),
      (s.SessionFollowedByPurchase = "heap:sessionFollowedByPurchase"),
      (s.FrontEndClickedElement = "frontend-clicked-element");
  })(Ns || (Ns = {}));
  var ob = [Ns.PageHostViewed, Ns.PagePathViewed, Ns.PageQueryParamsViewed],
    gl;
  (function (s) {
    (s.ZoneInteractionClick = "pageview:zone-interaction:click"),
      (s.ZoneInteractionHover = "pageview:zone-interaction:hover"),
      (s.ZoneInteractionTap = "pageview:zone-interaction:tap"),
      (s.ZoneInteractionExitZone = "pageview:zone-interaction:exitZone"),
      (s.TextConditionFullSearch = "pageview:fullSearch"),
      (s.TextConditionPrestoredText = "pageview:prestoredText"),
      (s.MetricHoverTime = "metric:hoverTime"),
      (s.MetricTimeBeforeFirstClick = "metric:timeBeforeFirstClick"),
      (s.MetricTimeBeforeFirstTap = "metric:timeBeforeFirstTap"),
      (s.MetricHesitationTime = "metric:hesitationTime"),
      (s.MetricScrollRate = "metric:scrollRate"),
      (s.MetricTimeSpent = "metric:timeSpent"),
      (s.FrontendZoneInteractionGoal =
        "frontend:pageview:zone-interaction:goal"),
      (s.PageEvent = "page:pageEvent"),
      (s.FrustrationScore = "pageview:frustration-score");
  })(gl || (gl = {}));
  var ml;
  (function (s) {
    (s.Click = "click"),
      (s.Change = "change"),
      (s.DynamicVariable = "dvar_page"),
      (s.Focus = "focus"),
      (s.Tap = "tap"),
      (s.Pageview = "pageview"),
      (s.Screenview = "screenview"),
      (s.PageEvent = "pageEvent"),
      (s.Hover = "hover"),
      (s.HoverTime = "hoverTime"),
      (s.ExitPage = "exitPage"),
      (s.ExitZone = "exitZone"),
      (s.Purchase = "purchase"),
      (s.AddToCart = "addToCart"),
      (s.MetricBounce = "metric:bounce"),
      (s.MetricScrollRate = "metric:scrollRate"),
      (s.MetricTimeBeforeFirstClick = "metric:timeBeforeFirstClick"),
      (s.MetricTimeBeforeFirstTap = "metric:timeBeforeFirstTap"),
      (s.MetricHesitationTime = "metric:hesitationTime"),
      (s.MetricHoverTime = "metric:hoverTime"),
      (s.MetricTimeSpent = "metric:timeSpent"),
      (s.MetricClickRepetition = "metric:clickRepetition"),
      (s.BlankPage = "friction:blankPage"),
      (s.DeadClick = "friction:deadClick"),
      (s.DeadLink = "friction:deadAnchor"),
      (s.DeadZoom = "friction:deadZoom"),
      (s.ExcessiveHover = "friction:excessiveHover"),
      (s.FastBack = "friction:fastBack"),
      (s.LoadingTime = "friction:loadingTime"),
      (s.LowActivity = "friction:lowActivity"),
      (s.MultipleButtonInteraction = "friction:multipleButtonInteraction"),
      (s.MultipleFieldInteraction = "friction:multipleFieldInteraction"),
      (s.MultipleInteraction = "friction:multipleInteraction"),
      (s.MultiplePageRevisit = "friction:multiplePageRevisit"),
      (s.MultipleUseTarget = "friction:multipleUseTarget"),
      (s.PageReload = "friction:pageReload"),
      (s.PromocodeStruggle = "friction:promocodeStruggle"),
      (s.QualifiedBouncers = "friction:qualifiedBouncers"),
      (s.RageClick = "friction:rageClick"),
      (s.RageTap = "friction:rageTap"),
      (s.ThrashedCursor = "friction:thrashedCursor"),
      (s.Swipe = "swipe"),
      (s.LandingPage = "landingPage"),
      (s.LargestContentFulPaint = "cwv:largest_contentful_paint"),
      (s.FirstContentFulPaint = "cwv:first_contentful_paint"),
      (s.CumulativeLayoutShift = "cwv:cumulative_layout_shift"),
      (s.InteractionToNextPaint = "cwv:interaction_to_next_paint"),
      (s.FirstInputDelay = "cwv:first_input_delay"),
      (s.TimeToFistByte = "cwv:time_to_first_byte"),
      (s.Error = "error"),
      (s.AccessibilityFeatures = "accessibility:features"),
      (s.AccessibilityZoom = "accessibility:max_zoom"),
      (s.AccessibilityHighlight = "accessibility:text_highlight"),
      (s.AccessibilityKeyboard = "accessibility:keyboard"),
      (s.AccessibilityKeyboardClick = "accessibility:keyboard_click"),
      (s.AccessibilityKeyboardFocus = "accessibility:keyboard_focus"),
      (s.AccessibilityKeyboardScroll = "accessibility:keyboard_scroll"),
      (s.AccessibilityExtensions = "accessibility:extensions");
  })(ml || (ml = {}));
  var qe;
  (function (s) {
    (s.AND = "AND"),
      (s.OR = "OR"),
      (s.NOT = "NOT"),
      (s.SEQ = "SEQ"),
      (s.CSEQ = "CSEQ"),
      (s.THEN = "THEN"),
      (s.DIRECTLY_THEN = "DIRECTLY_THEN"),
      (s.FILTER = "filter"),
      (s.EVENT_OCCURRENCE = "event_occurrence"),
      (s.EVENT_SEQUENCE_OCCURRENCE = "event_sequence_occurrence");
  })(qe || (qe = {}));
  var yl;
  (function (s) {
    (s.EQUAL = "="),
      (s.GREATER = ">"),
      (s.LESS = "<"),
      (s.GREATER_OR_EQUAL = ">="),
      (s.LESS_OR_EQUAL = "<="),
      (s.NOT_EQUAL = "!="),
      (s.BETWEEN = "between");
  })(yl || (yl = {}));
  var El;
  (function (s) {
    (s.ANY = "any"), (s.URL = "url"), (s.PAGE = "page");
  })(El || (El = {}));
  var Sl;
  (function (s) {
    (s.ANY = "any"),
      (s.NAMED = "named"),
      (s.EXACT = "exact"),
      (s.GROUPED = "grouped");
  })(Sl || (Sl = {}));
  var vl;
  (function (s) {
    (s.API = "API"),
      (s.JS = "JS"),
      (s.CUSTOM = "CUSTOM"),
      (s.CRASH = "CRASH"),
      (s.FLUTTER = "FLUTTER");
  })(vl || (vl = {}));
  var _l;
  (function (s) {
    (s.GET = "GET"),
      (s.POST = "POST"),
      (s.PUT = "PUT"),
      (s.PATCH = "PATCH"),
      (s.DELETE = "DELETE");
  })(_l || (_l = {}));
  var wl;
  (function (s) {
    (s.EXPERIENCED = "EXPERIENCED"),
      (s.HAVE_NOT_EXPERIENCED = "HAVE_NOT_EXPERIENCED");
  })(wl || (wl = {}));
  var Al;
  (function (s) {
    (s.ALL = "ALL"),
      (s.DISMISSED = "DISMISSED"),
      (s.UNDISMISSED = "UNDISMISSED");
  })(Al || (Al = {}));
  var ab = Object.freeze([
      qe.AND,
      qe.OR,
      qe.SEQ,
      qe.CSEQ,
      qe.THEN,
      qe.DIRECTLY_THEN,
    ]),
    cb = { children: [], nodeType: qe.AND },
    lb = {
      nodeType: qe.FILTER,
      field: Ns.SegmentId,
      operator: Un.MATCH_EQUALS,
      value: im.ALL_VISITORS,
    },
    bl;
  (function (s) {
    (s.Model = "model"),
      (s.Product = "product"),
      (s.Category = "category"),
      (s.Brand = "brand");
  })(bl || (bl = {}));
  var Tl;
  (function (s) {
    (s.Visit = "pageview:visit"),
      (s.First = "pageview:first"),
      (s.Last = "pageview:last"),
      (s.Bounce = "pageview:bounce"),
      (s.FrontendGoal = "frontend:pageview:goal");
  })(Tl || (Tl = {}));
  var ub = {
      field: "pageview:no_op",
      nodeType: qe.FILTER,
      operator: Un.MATCH_EQUALS,
    },
    Rl;
  (function (s) {
    (s.PageViewedConditionId = "goal:reference:PageViewed"),
      (s.ZoneClickedConditionId = "goal:reference:click"),
      (s.SamePageViewConditionEditorId = "pageviews");
  })(Rl || (Rl = {}));
  var hb = [
    Ns.EnrichmentIntegration,
    Ns.DynamicSnippetIntegration,
    Ns.ExternalSegmentIntegration,
  ];
  function Cl(s, r, t) {
    if (!ft(r) && !ft(t)) return s.href;
    let e = ft(r) ? ka(r) : s.pathname,
      i = ft(t) ? vh(t) : s.search;
    return `${s.protocol}//${s.host}${e}${i}`;
  }
  function ka(s) {
    return ee(s, "/") ? s : `/${s}`;
  }
  function vh(s) {
    return ee(s, "?") || s === "" ? s : `?${s}`;
  }
  var Ps = (() => {
      let s;
      return (
        (function (r) {
          (r.Artificial = "a"), (r.Renewal = "r"), (r.Natural = "n");
        })(s || (s = {})),
        s
      );
    })(),
    Zo;
  ((Zo = window._uxa) !== null && Zo !== void 0) || (window._uxa = []);
  var Il = 1 / 0,
    { toString: rm } = Object.prototype;
  function nm(s) {
    return s == null
      ? s === void 0
        ? "[object Undefined]"
        : "[object Null]"
      : rm.call(s);
  }
  var Ac = (s) =>
    typeof s == "symbol" ||
    (typeof s == "object" && s != null && nm(s) === "[object Symbol]");
  function _h(s) {
    if (typeof s == "string" || Ac(s)) return s;
    let r = `${s}`;
    return typeof s == "number"
      ? r === "0" && 1 / s === -Il
        ? "-0"
        : r
      : s instanceof Number && r === "0" && 1 / s.valueOf() === -Il
      ? "-0"
      : r;
  }
  var om = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    am = /^\w*$/;
  function cm(s, r) {
    return csArray.isArray(s)
      ? !1
      : typeof s == "number" || typeof s == "boolean" || s == null || Ac(s)
      ? !0
      : am.test(s) || !om.test(s) || (r != null && s in Object(r));
  }
  function bc(s, r) {
    if (typeof s != "function" || (r != null && typeof r != "function"))
      throw new TypeError("Expected a function");
    let t = function (...e) {
      let i = r ? r.apply(this, e) : e[0],
        { cache: n } = t;
      if (n.has(i)) return n.get(i);
      let o = s.apply(this, e);
      return (t.cache = n.set(i, o) || n), o;
    };
    return (t.cache = new (bc.Cache || Map)()), t;
  }
  bc.Cache = Map;
  var lm = 500;
  function um(s) {
    let r = bc(s, (t) => {
      let { cache: e } = r;
      return e.size === lm && e.clear(), t;
    });
    return r;
  }
  var hm = 46,
    dm = /\\(\\)?/g,
    fm = csRegExp(
      `[^.[\\]]+|\\[(?:([^"'][^[]*)|(["'])((?:(?!\\2)[^\\\\]|\\\\.)*?)\\2)\\]|(?=(?:\\.|\\[\\])(?:\\.|\\[\\]|$))`,
      "g"
    ),
    wh = um((s) => {
      let r = [];
      return (
        csString.prototype.charCodeAt.call(s, 0) === hm &&
          csArray.prototype.push.call(r, ""),
        csString.prototype.replace.call(s, fm, (t, e, i, n) => {
          let o = t;
          return (
            i
              ? (o = csString.prototype.replace.call(n, dm, "$1"))
              : e && (o = csString.prototype.trim.call(e)),
            csArray.prototype.push.call(r, o),
            t
          );
        }),
        r
      );
    });
  function pm(s, r) {
    return csArray.isArray(s) ? s : cm(s, r) ? [s] : wh(s);
  }
  function gm(s, r) {
    let t = pm(r, s),
      e = s,
      i = 0,
      { length: n } = t;
    for (; e != null && i < n; ) {
      let o = _h(t[i]);
      (e = e[o]), (i += 1);
    }
    return i && i === n ? e : void 0;
  }
  function mm(s) {
    return "iterable" in s;
  }
  function Ah(s) {
    return ft(s.iterable) ? j(s.iterable) || s.iterable === null : !0;
  }
  function bh(s, r, t) {
    let e = s == null ? void 0 : gm(s, r);
    return e === void 0 ? t : e;
  }
  var ym = /\b__p \+= '';/g,
    Em = /\b(__p \+=) '' \+/g,
    Sm = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
    vm = /['\n\r\u2028\u2029\\]/g,
    Th = /[&<>"']/g,
    _m = csRegExp(Th.source),
    wm = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
    gn = /($^)/,
    Am = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029",
    },
    bm = /[()=,{}[\]/\s]/,
    Tm = /<%-([\s\S]+?)%>/g,
    Rm = /<%([\s\S]+?)%>/g,
    Rh = /<%=([\s\S]+?)%>/g,
    { hasOwnProperty: Pl } = Object.prototype,
    Cm = "Invalid `variable` option passed into `_.template`";
  function Im(s) {
    return `\\${Am[s]}`;
  }
  var Pm = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    },
    Om = {
      escape: Tm,
      evaluate: Rm,
      interpolate: Rh,
      variable: "",
      imports: {
        _: {
          template: Tn,
          escape(s) {
            return s && _m.test(s)
              ? csString.prototype.replace.call(s, Th, (r) => Pm[r])
              : s != null
              ? s
              : "";
          },
        },
      },
    };
  function Tn(s, r) {
    let t = { ...Om, ...r },
      e = Object.keys(t.imports || {}),
      i = csArray.prototype.map.call(e, (T) =>
        t == null ? void 0 : t.imports[T]
      ),
      n,
      o,
      c = 0,
      h = t.interpolate || gn,
      d = "__p += '",
      S = csRegExp(
        `${(t.escape || gn).source}|${h.source}|${
          (h === Rh ? wm : gn).source
        }|${(t.evaluate || gn).source}|$`,
        "g"
      ),
      y = `//# sourceURL=${
        Pl.call(t, "sourceURL")
          ? csString.prototype.replace.call(`${t.sourceURL}`, /\s/g, " ")
          : void 0
      }
`;
    s == null ||
      csString.prototype.replace.call(s, S, (T, M, x, P, N, W) => {
        let D = x || P;
        return (
          (d += csString.prototype.replace.call(
            csString.prototype.slice.call(s, c, W),
            vm,
            Im
          )),
          M &&
            ((n = !0),
            (d += `' +
__e(${M}) +
'`)),
          N &&
            ((o = !0),
            (d += `';
${N};
__p += '`)),
          D &&
            (d += `' +
((__t = (${D})) == null ? '' : __t) +
'`),
          (c = W + T.length),
          T
        );
      }),
      (d += `';
`);
    let _ = Pl.call(t, "variable") && t.variable;
    if (!_)
      d = `with (obj) {
${d}
}
`;
    else if (bm.test(_)) throw new Error(Cm);
    (d = csString.prototype.replace.call(
      csString.prototype.replace.call(
        o ? csString.prototype.replace.call(d, ym, "") : d,
        Em,
        "$1"
      ),
      Sm,
      "$1;"
    )),
      (d = `function(${_ || "obj"}) {
${
  _
    ? ""
    : `obj || (obj = {});
`
}var __t, __p = ''${n ? ", __e = _.escape" : ""}${
        o
          ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`
          : `;
`
      }${d}return __p
}`);
    let w;
    try {
      w = Function(...e, `${y}return ${d}`)(...i);
    } catch (T) {
      w = T;
    }
    if (((w.source = d), w instanceof Error)) throw w;
    return w;
  }
  var Nm = /^(\s*("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')\s*,?)+$/,
    Mm =
      /<%[\s\S]+?%>|<%-[\s\S]+?%>|<%=[\s\S]+?%>|\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/,
    Dm =
      /^document\.querySelector\(("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')\)\.(textContent|value)$/;
  function Ol(s) {
    if (!Nm.test(s) || Mm.test(s))
      throw new Error("whitelisted function is wrongly used");
  }
  var Nl = {
    "window.location.hash.replace(": (s, r) => {
      let t = csString.prototype.substring.call(s, 29, s.length - 1);
      return Ol(t), Tn(`\${${s}}`)(r);
    },
    "window.sessionStorage.getItem(": (s, r) => {
      let t = csString.prototype.substring.call(s, 30, s.length - 1);
      return Ol(t), Tn(`\${${s}}`)(r);
    },
    "document.querySelector(": (s, r) => {
      if (Dm.test(s)) return Tn(`\${${s}}`)(r);
    },
    "new Date().getTime()": (s, r) => new csDate().getTime().toString(),
  };
  function km(s) {
    let r = sr(Object.keys(Nl), (t) => ee(s, t));
    if (r) return Nl[r];
  }
  function xm(s) {
    return ee(s, "'") && er(s, "'");
  }
  var Lm = /\$\{([\s\S]+?)\}/g,
    Vm = (s) => (r, t, e) => {
      let i = "";
      return (
        csArray.prototype.forEach.call(
          csString.prototype.split.call(t, "+"),
          (n) => {
            let o = csString.prototype.trim.call(n),
              c = bh(s, o);
            if (c === void 0)
              if (xm(o))
                c = csString.prototype.substring.call(o, 1, o.length - 1);
              else {
                let h = km(o);
                if ((h && (c = h(o, s)), c === void 0))
                  throw new Error("undefined not allowed");
              }
            i += c;
          }
        ),
        i
      );
    };
  function Zi(s, r) {
    try {
      return csString.prototype.replace.call(s, Lm, Vm(r));
    } catch {
      return null;
    }
  }
  function xa(s, r) {
    let t = {};
    for (let e of Object.keys(s)) {
      let i = s[e];
      if (j(i)) {
        let n = Zi(i, r);
        if (n === null) return null;
        t[e] = n;
      } else t[e] = i;
    }
    return t;
  }
  function La(s, r) {
    let t = csArray.prototype.join.call(
      csArray.prototype.filter.call(
        csArray.prototype.map.call(csString.prototype.split.call(s, ","), (e) =>
          Zi(e, r)
        ),
        (e) => e !== null && ne(e)
      ),
      ","
    );
    return ne(t) ? t : null;
  }
  var ta = (() => {
      let s;
      return (
        (function (r) {
          (r.AND = "AND"), (r.OR = "OR");
        })(s || (s = {})),
        s
      );
    })(),
    ze = (() => {
      let s;
      return (
        (function (r) {
          (r.STARTS_WITH = "startsWith"),
            (r.EQUALS = "equals"),
            (r.NOT_EQUALS = "notEquals"),
            (r.CONTAINS = "contains"),
            (r.NOT_CONTAINS = "notContains"),
            (r.MATCHES = "matches"),
            (r.NOT_MATCHES = "notMatches"),
            (r.EXIST = "exist"),
            (r.NOT_EXIST = "notExist");
        })(s || (s = {})),
        s
      );
    })();
  function Ch(s, r) {
    return Um(s.operator, $m(s.args, r));
  }
  function Um(s, r) {
    switch (s) {
      case ze.EXIST:
      case ze.NOT_EXIST:
        return Hm(s, r);
      default:
        return jm(s, r);
    }
  }
  function Hm(s, r) {
    let [t] = r;
    if (!ne(t)) return !1;
    switch (s) {
      case ze.EXIST:
        return (
          window.csquerySelector[document.nodeType].call(document, t) !== null
        );
      case ze.NOT_EXIST:
        return (
          window.csquerySelector[document.nodeType].call(document, t) === null
        );
      default:
        return !1;
    }
  }
  function jm(s, r) {
    let [t, e] = r;
    if (!(s in ta) && !(j(t) && j(e))) return !1;
    switch (s) {
      case ta.AND:
        return !!csArray.prototype.reduce.call(r, (n, o) => n && o);
      case ta.OR:
        return !!csArray.prototype.reduce.call(r, (n, o) => n || o);
      case ze.STARTS_WITH:
        return ee(t, e);
      case ze.EQUALS:
        return t === e;
      case ze.NOT_EQUALS:
        return t !== e;
      case ze.CONTAINS:
        return csString.prototype.indexOf.call(t, e) > -1;
      case ze.NOT_CONTAINS:
        return csString.prototype.indexOf.call(t, e) === -1;
      case ze.MATCHES: {
        let n = Ml(e);
        return n !== null && n.test(t);
      }
      case ze.NOT_MATCHES: {
        let n = Ml(e);
        return n !== null && !n.test(t);
      }
      default:
        return !1;
    }
  }
  function Bm(s) {
    return !!(s && s.operator && s.args);
  }
  function $m(s, r) {
    return csArray.prototype.map.call(s, (t) =>
      Bm(t) ? Ch(t, r) : j(t) ? Zi(t, r) : t
    );
  }
  function Ml(s) {
    let r = /^\/(.*)\/([gimy]*)$/.exec(s),
      t = null;
    if (r) {
      let [, e, i] = r;
      try {
        t = new csRegExp(e, i);
      } catch {}
    } else
      try {
        t = new csRegExp(s);
      } catch {}
    return t;
  }
  var Fm = ["api-errors:maskUrl"];
  var Wt = (() => {
      class s {
        constructor(t, e) {
          (this.commandsService = t), (this.args = e);
        }
      }
      return s;
    })(),
    Gr = (() => {
      class s extends Wt {}
      return s;
    })(),
    Gm = (() => {
      class s extends Wt {
        validateArgs(t) {
          return dt(t) ? j(t.url) : !1;
        }
        execute(t) {
          this.commandsService.applyFromImplementation(
            Fm[0],
            [t.url],
            "ApiErrorsMaskUrlTemplate"
          );
        }
      }
      return s;
    })(),
    Lr = (() => {
      class s {
        constructor(...t) {
          this.Tf = t;
        }
        addProvider(t) {
          csArray.prototype.push.call(this.Tf, t);
        }
        getRequestParameters() {
          return csArray.prototype.reduce.call(
            this.Tf,
            (t, e) => ({ ...e.getRequestParameters(), ...t }),
            {}
          );
        }
      }
      return s;
    })(),
    zm =
      window.navigator.language ||
      window.navigator.userLanguage ||
      window.navigator.browserLanguage ||
      window.navigator.systemLanguage ||
      "unknown";
  function qm() {
    return { la: zm };
  }
  function Wm(s) {
    if (typeof Object.values == "function") return Object.values(s);
    let r = [];
    for (let t in s)
      s.hasOwnProperty(t) && csArray.prototype.push.call(r, s[t]);
    return r;
  }
  function Ym(s, r) {
    if (Object.keys(s).length <= r) return s;
    let t = {},
      e = 0;
    for (let [i, n] of Object.entries(s)) {
      if (e >= r) break;
      (t[i] = n), e++;
    }
    return t;
  }
  var Xm = (() => {
      let s;
      return (
        (function (r) {
          function e(i, n, o, c) {
            let h = { ...i, ...n, ...o, ...c };
            return Ym(h, 200);
          }
          r.mergeAndLimitProperties = e;
        })(s || (s = {})),
        s
      );
    })(),
    We = (() => {
      let s;
      return (
        (function (r) {
          (r.Natural = "Natural"),
            (r.Artificial = "Artificial"),
            (r.Renewal = "Renewal");
        })(s || (s = {})),
        s
      );
    })(),
    Km = (() => {
      class s extends se {
        constructor(t, e, i, n, o, c, h, d, S, y) {
          super(),
            (this.E = t),
            (this.w = e),
            (this.z = i),
            (this.Ci = n),
            (this.A = o),
            (this.ls = c),
            (this.Av = h),
            (this.Wt = d),
            (this.At = S),
            (this.Al = y),
            (this.ws = null);
        }
        init() {
          this.bl();
        }
        onStart(t = We.Natural) {
          switch (t) {
            case We.Natural:
              this.Tl();
              break;
            case We.Artificial:
              this.Rl();
              break;
            case We.Renewal:
              this.Cl();
              break;
          }
        }
        onStop() {}
        triggerArtificialPageView(t, e) {
          this.isStarted
            ? (this.w.emitArtificialPageViewEnd(), this.Ii(t, e))
            : (Ct(t) && this.A.overridePath(t, e),
              this.z.emitTargetingRulesArtificialPageview(this.A.getUrl()),
              this.E.hasTargetingRules() && this.A.cleanupOverrideLifespan());
        }
        Tl() {
          this.ls.setPageViewType(Ps.Natural);
          let t = this.A.getAnonymizedUrl();
          this.w.emitBeforeNaturalPageView(t),
            this.Il(),
            this.A.cleanupOverrideLifespan(),
            this.w.emitAfterNaturalPageView(Ps.Natural),
            (this.ws = t);
        }
        Cl() {
          this.ls.setPageViewType(Ps.Renewal);
          let t = this.A.getAnonymizedUrl();
          this.w.emitBeforeNaturalPageView(t),
            this.Il(),
            this.w.emitAfterNaturalPageView(Ps.Renewal),
            (this.ws = t);
        }
        Ii(t, e, i = !1) {
          Ct(t) && this.A.overridePath(t, e);
          let n = this.A.getAnonymizedUrl();
          this.w.emitBeforeArtificialPageView(this.ws, n),
            this.ls.setPageViewType(Ps.Artificial),
            this.Il(),
            this.A.cleanupOverrideLifespan(),
            this.w.emitAfterArtificialPageView(i),
            (this.ws = n);
        }
        Rl() {
          this.Ii(null, void 0, !0);
        }
        bl() {
          window.addEventListener("pageshow", (t) => {
            this.isStarted &&
              t.persisted &&
              (this.w.emitArtificialPageViewEnd(), this.Ii());
          });
        }
        bv() {
          var t, e, i;
          let n =
              (t = this.Al) === null || t === void 0
                ? void 0
                : t.getProperties(document, "pageview", this.A.getPath()),
            o = Xm.mergeAndLimitProperties(
              (e = this.Wt) === null || e === void 0
                ? void 0
                : e.getProperties(),
              (i = this.At) === null || i === void 0
                ? void 0
                : i.getProperties(),
              n != null ? n : void 0,
              void 0
            );
          if (Object.keys(o).length > 0) return o;
        }
        Il() {
          let t = this.bv(),
            e = t ? { properties: t } : void 0;
          this.Ci.removeQueryParams(),
            this.Ci.setQueryParams({
              ...this.Av.getRequestParameters(),
              ...(e ? {} : { ct: Fr.UNCOMPRESSED }),
            }),
            this.Ci.send(e);
        }
      }
      return s;
    })(),
    Jm = 99999,
    Qm = (() => {
      class s {
        constructor(t) {
          (this.C = t), (this.Tv = this.Rv() && window.CSCurrentScript);
        }
        Cv() {
          let t = window.CSCurrentScript;
          if (!t) return null;
          let e = window.performance.getEntriesByName(t.src, "resource")[0];
          return !e || this.Iv(e)
            ? null
            : Math.round(e.responseEnd - e.fetchStart);
        }
        Iv(t) {
          let e = t.transferSize;
          return e !== void 0
            ? e === 0 || e === 300 || e < t.encodedBodySize
            : t.connectStart === t.domainLookupEnd;
        }
        getRequestParameters() {
          if (!this.Tv || this.Pv() !== 1) return {};
          let t = this.Cv();
          return t === null ? {} : { dt: `${Math.min(t, Jm)}` };
        }
        Pv() {
          var t;
          return (
            ((t = this.C.getSession()) === null || t === void 0
              ? void 0
              : t.pageNumber) || null
          );
        }
        Rv() {
          return (
            typeof window.performance == "object" &&
            typeof window.performance.getEntriesByName == "function"
          );
        }
      }
      return s;
    })(),
    Ih = ["trackPageview"],
    Va = ["setPath"],
    Ua = ["setQuery"],
    Dl = ["referrer:maskUrl"],
    Zm = ["referrer:removeQueryString"],
    ty = ["referrer:keepQueryString"],
    ey = "pageview",
    ea = (s) => Ki(s) && s !== null,
    Ph = (s, r, t, e) => {
      s.register(Ih, (i, n) => {
        if (!j(i)) {
          r.triggerArtificialPageView();
          return;
        }
        ea(n)
          ? r.triggerArtificialPageView(i, n)
          : r.triggerArtificialPageView(i);
      }),
        s.register(Va, (i, n) => {
          if (!j(i)) throw new ge(Va[0]);
          ea(n) ? t.overridePath(i, n) : t.overridePath(i);
        }),
        s.register(Ua, (i, n) => {
          if (!j(i)) throw new ge(Ua[0]);
          ea(n) ? t.overrideQuery(i, n) : t.overrideQuery(i);
        }),
        e &&
          (s.register(Dl, (i) => {
            if (!j(i)) throw new ge(Dl[0]);
            e.addUrlMaskingPattern(i);
          }),
          s.register(Zm, () => e.enableRemoveQueryString()),
          s.register(ty, () => e.disableRemoveQueryString()));
    },
    sy = (() => {
      class s {
        constructor(t, e, i, n, o, c, h, d, S, y, _, w, T, M, x, P, N, W, D) {
          (this.E = t),
            (this.S = e),
            (this.w = i),
            (this.Ue = n),
            (this.N = o),
            (this.C = c),
            (this.As = h),
            (this.bt = d),
            (this.ht = S),
            (this.A = y),
            (this.Yt = _),
            (this.ls = w),
            (this.z = T),
            (this.xt = M),
            (this.We = x),
            (this.pr = P),
            (this.Wt = N),
            (this.At = W),
            (this.Al = D);
        }
        init() {
          let t = this.xt.create(`${this.E.getTrackerUri()}/${ey}`, "base64"),
            e = new Lr(
              this.Ue,
              this.N,
              qt,
              this.As,
              this.A,
              this.bt,
              sc,
              this.ht,
              this.ls,
              new Qm(this.C),
              this.Yt
            );
          (this.ln = new Km(
            this.E,
            this.w,
            this.z,
            t,
            this.A,
            this.ls,
            e,
            this.Wt,
            this.At,
            this.Al
          )),
            this.ln.init(),
            this.We && e.addProvider(this.We),
            this.pr && e.addProvider(this.pr);
          let i = this.E.isCsCrosswritingHeap();
          if (i || this.E.isCsSideloadingHeap() || this.E.isHeapSideloadsCs()) {
            let n = this.E.getHeapEnvId() || void 0;
            e.addProvider({
              getRequestParameters() {
                let o = { cw: i ? "1" : "2" };
                return n && (o.happid = n), o;
              },
            });
          }
          Ph(this.S, this.ln, this.A, this.As);
        }
        start(t) {
          this.ln.start(t);
        }
        stop() {
          this.ln.stop();
        }
        onBeforeSessionRenewal() {
          this.ln.stop();
        }
      }
      return s;
    })();
  function Tc(s) {
    switch (s) {
      case "no decoding":
        return null;
      case "decode once":
        return { decodeURI: !0 };
      case "decode multiple times":
        return { decodeURIDeep: !0 };
      default:
        return null;
    }
  }
  function Rc(s) {
    switch (s == null ? void 0 : s[0]) {
      case "on next pageview only":
        return { lifespan: "onNextPageviewOnly" };
      default:
        return null;
    }
  }
  var Oh = (() => {
      class s extends Wt {
        validateArgs(t) {
          if (dt(t)) {
            let e = ft(t.path) ? j(t.path) : !0,
              i = ft(t.decodeURI) ? j(t.decodeURI) : !0,
              n = ft(t.lifespan) ? csArray.isArray(t.lifespan) : !0;
            return e && i && n;
          }
          return !1;
        }
        execute(t) {
          if (!t.path) this.un([]);
          else {
            let e = [t.path],
              i = Tc(t.decodeURI),
              n = Rc(t.lifespan),
              o = { ...i, ...n };
            Object.keys(o).length && e.push(o), this.un(e);
          }
        }
        un(t) {
          this.commandsService.applyFromImplementation(
            Ih[0],
            t,
            "ArtificialPageviewTemplate"
          );
        }
      }
      return s;
    })(),
    iy = (() => {
      class s extends Wt {
        constructor() {
          super(...arguments), (this.Pl = !1);
        }
        validateArgs(t) {
          return dt(t) &&
            j(t.type) &&
            j(t.urls) &&
            (t.type === "allow" || t.type === "block") &&
            csString.prototype.trim.call(t.urls).length > 0
            ? ((this.Pl = !1), !0)
            : (J.implementation(
                `BlockAllowListForSRTemplate has wrong argument: ${t}, fallback to default config.`
              ),
              (this.Pl = !0),
              !0);
        }
        execute(t) {
          let e = "";
          this.Pl ? (e = Sh) : (e = this.Ov(t.urls, t.type)),
            this.commandsService.applyFromImplementation(
              Eh[0],
              [e],
              "BlockAllowListForSRTemplate"
            );
        }
        Ov(t, e) {
          let i = e === "allow" ? "?!" : "";
          return (
            (i += csArray.prototype.join.call(
              csArray.prototype.map.call(
                csString.prototype.split.call(t, ","),
                (n) => `.*${csString.prototype.trim.call(n)}`
              ),
              "|"
            )),
            `^(${i}).*?`
          );
        }
      }
      return s;
    })(),
    Nh = ["trackError"],
    ry = (() => {
      class s extends Gr {
        validateArgs(t) {
          return dt(t) ? j(t.message) && csArray.isArray(t.attributes) : !1;
        }
        execute(t, e) {
          let i = Zi(t.message, e);
          if (!i) return;
          let n = {};
          for (let o of t.attributes) {
            let c = Zi(o.value, e);
            c !== null && (n[o.key] = c);
          }
          this.commandsService.applyFromImplementation(
            Nh[0],
            [i, n],
            "CustomErrorTemplate"
          );
        }
      }
      return s;
    })(),
    Cc = ["setCustomVariable"],
    ny = "_cs_cvars",
    oy = (() => {
      class s {
        constructor(t, e) {
          (this.S = t), (this.ht = e);
        }
        init() {
          this.S.register(Cc, (t, e, i, n) => {
            this.ht.set(t, e, i, n);
          });
        }
        onAfterArtificialPageView() {
          this.ht.deleteNextPageOnlyCustomVariables();
        }
        onAfterNaturalPageView() {
          this.ht.deleteNextPageOnlyCustomVariables();
        }
        onOptout() {
          this.ht.removeCustomVariablesSession();
        }
        onBeforeVisitorRenewal() {
          this.ht.removeCustomVariablesSession(),
            this.ht.removeCustomVariablesPage();
        }
      }
      return s;
    })(),
    ay = (() => {
      class s extends Wt {
        validateArgs(t) {
          if (dt(t)) {
            let e = Ah(t),
              i = csArray.isArray(t.scope) ? Hu(t.scope, (n) => j(n)) : !0;
            return e && i && Ht(t.index) && j(t.name) && j(t.value);
          }
          return !1;
        }
        execute(t) {
          this.commandsService.applyFromImplementation(
            Cc[0],
            [t.index, t.name, t.value, t.scope[0]],
            "CustomVariableTemplate"
          );
        }
      }
      return s;
    })(),
    Mh = ["setEncryptionSelectors"],
    Kn = ["setPIISelectors"],
    Dh = ["setCapturedElementsSelector"],
    cy = (() => {
      class s {
        constructor(t, e, i, n, o, c, h) {
          (this.w = t),
            (this.S = e),
            (this.J = i),
            (this.Xt = n),
            (this.Kt = o),
            (this.lt = c),
            (this.gr = h);
        }
        init() {
          var t, e;
          this.gr &&
            this.lt &&
            ((t = this.gr) === null ||
              t === void 0 ||
              t.addSelector(
                (e = this.lt) === null || e === void 0
                  ? void 0
                  : e.getEncryptionSelectors()
              )),
            this.ut();
        }
        onBeforeNaturalPageView(t) {
          this.Xt.start(), this.w.emitSensitiveStatusChange();
        }
        onStartTracking(t) {
          this.Xt.start(), this.w.emitSensitiveStatusChange();
        }
        onAfterArtificialPageView() {
          this.Xt.stop(), this.Xt.start(), this.w.emitSensitiveStatusChange();
        }
        onBeforeSessionRenewal() {
          this.Xt.stop(), this.w.emitSensitiveStatusChange();
        }
        onOptout() {
          this.Xt.stop(), this.w.emitSensitiveStatusChange();
        }
        onReplayUnanonymizationConsentGranted() {
          this.w.emitSensitiveStatusChange();
        }
        onReplayUnanonymizationConsentWithdrawn() {
          this.w.emitSensitiveStatusChange();
        }
        ut() {
          this.S.register(Kn, (t) => {
            this.J.setMaskedElementSettingsFromCommand(t),
              this.w.emitSensitiveStatusChange();
          }),
            this.S.register(Dh, (t) => {
              this.Kt.setWhitelistedElementsSelector(t),
                this.w.emitSensitiveStatusChange();
            }),
            this.S.register(Mh, (t) => {
              var e, i;
              (e = this.lt) === null ||
                e === void 0 ||
                e.setEncryptionSelectors(t),
                (i = this.gr) === null || i === void 0 || i.addSelector(t);
            });
        }
      }
      return s;
    })(),
    ly = (() => {
      class s extends Wt {
        validateArgs(t) {
          return dt(t) ? j(t.selector) : !1;
        }
        execute(t) {
          this.commandsService.applyFromImplementation(
            Mh[0],
            [t.selector],
            "DataCsEncryptTemplate"
          );
        }
      }
      return s;
    })(),
    uy = "data-cs-override-id",
    hy = (() => {
      class s extends Wt {
        validateArgs(t) {
          if (dt(t)) {
            let e = Ct(t.value) ? j(t.value) : !0;
            return j(t.selector) && e;
          }
          return !1;
        }
        execute(t) {
          var e;
          if (!ne(t.selector)) return;
          let i = window.csquerySelector[document.nodeType].call(
            document,
            t.selector
          );
          i &&
            i.setAttribute(uy, (e = t.value) !== null && e !== void 0 ? e : "");
        }
      }
      return s;
    })(),
    dy = 512,
    fy = 255,
    sa = (() => {
      class s {
        constructor(t, e) {
          (this.key = csString.prototype.slice.call(t, 0, dy)),
            (this.value = j(e) ? csString.prototype.slice.call(e, 0, fy) : e);
        }
        static isKeyValid(t) {
          return j(t);
        }
        static isValueValid(t) {
          return j(t) || wi(t);
        }
      }
      return s;
    })(),
    py = (() => {
      class s extends se {
        constructor(t, e) {
          super(), (this.Jt = t), (this.O = e), (this.Ol = []);
        }
        onStart() {
          csArray.prototype.forEach.call(this.Ol, (t) =>
            this.Rf(t.key, t.value)
          ),
            (this.Ol = []);
        }
        onStop() {}
        Rf(t, e) {
          let i = this.O.anonymizePII(t),
            n = wi(e) ? e : this.O.anonymizePII(e);
          this.Jt.add(new sa(i, n));
        }
        trackDynamicVariable(t, e) {
          if (sa.isKeyValid(t) && sa.isValueValid(e)) {
            if (!this.isStarted) {
              csArray.prototype.push.call(this.Ol, { key: t, value: e });
              return;
            }
            this.Rf(t, e);
          } else throw new ge(Ic[0]);
        }
      }
      return s;
    })(),
    gy = (() => {
      class s {
        constructor(t) {
          (this.de = t), (this.Jt = []);
        }
        add(t) {
          csArray.prototype.push.call(this.Jt, t), this.setBatchReadyCall();
        }
        clear() {
          this.Jt = [];
        }
        onBatchReady(t) {
          this.Nv = t;
        }
        getRequestParameters() {
          let t = {};
          for (let e of this.Jt) t[e.key] = e.value;
          return {
            dv: this.de.compressSync(csJSON.stringify(t), "base64"),
            ct: this.de.algorithm,
          };
        }
        setBatchReadyCall() {
          this.Nv();
        }
      }
      return (
        Z(
          [Yn({ wait: 0, mode: "trailing" }), $("dynamicVariablesBatchReady")],
          s.prototype,
          "setBatchReadyCall",
          null
        ),
        s
      );
    })(),
    my = "dvar",
    Ic = ["trackDynamicVariable"],
    yy = (() => {
      class s {
        constructor(t, e, i, n, o, c) {
          (this.S = t),
            (this.C = e),
            (this.E = i),
            (this.Ue = n),
            (this.de = o),
            (this.O = c),
            (this.Ut = new xr(this.E.getTrackerUri(), my)),
            (this.Jt = new gy(this.de)),
            (this.vs = new py(this.Jt, this.O));
        }
        init() {
          this.Ut.setRequestParametersProviders(this.Ue, this.Jt),
            this.C.setDynamicVariablesService(this.vs),
            this.Jt.onBatchReady(() => this.Ut.send()),
            this.Ut.after(() => this.Jt.clear()),
            this.S.register(Ic, ({ key: t, value: e } = {}) => {
              this.vs.trackDynamicVariable(t, e);
            });
        }
        onStartTracking() {
          this.vs.start();
        }
        onArtificialPageViewEnd(t) {
          t && this.vs.stop();
        }
        onAfterArtificialPageView(t) {
          t && this.vs.start();
        }
      }
      return s;
    })(),
    Ey = 20,
    Sy = (() => {
      class s extends Gr {
        validateArgs(t) {
          return dt(t) ? Ah(t) && j(t.key) && j(t.value) && j(t.type) : !1;
        }
        execute(t, e) {
          let i = xa(t, e);
          i !== null ? this.un(i) : this.Mv(t, e)();
        }
        Mv(t, e) {
          return () => {
            let i = 0,
              n = window.csSetInterval(() => {
                i += 1;
                let o = xa(t, e);
                if (o !== null) {
                  window.csClearInterval(n), (n = void 0), (i = 0), this.un(o);
                  return;
                }
                i >= Ey && (window.csClearInterval(n), (n = void 0), (i = 0));
              }, 100);
          };
        }
        un(t) {
          let e = t.value;
          if (t.type === "Integer") {
            let i = Number.parseInt(t.value, 10);
            Number.isNaN(i) || (e = i);
          }
          this.commandsService.applyFromImplementation(
            Ic[0],
            [{ key: t.key, value: e }],
            "DynamicVariableTemplate"
          );
        }
      }
      return s;
    })(),
    kh = 100,
    vy = 100,
    _y = (() => {
      class s extends se {
        constructor(t, e) {
          super(),
            (this.Dv = t),
            (this.V = e),
            (this.Ce = null),
            (this.Nl = []);
        }
        onStart() {
          csArray.prototype.forEach.call(this.Nl, (t) => {
            (this.Ce = t), this.Cf();
          }),
            (this.Nl = []);
        }
        onStop() {}
        addToCart(t) {
          let e = {};
          j(t.sku) && (e.sku = csString.prototype.slice.call(t.sku, 0, vy)),
            j(t.merchant) &&
              (e.merchant = csString.prototype.slice.call(t.merchant, 0, kh)),
            (e.sku || e.merchant) && ((this.Ce = e), this.Cf());
        }
        getCartItem() {
          return this.Ce;
        }
        Cf() {
          if (!this.isStarted && this.Ce !== null) {
            csArray.prototype.push.call(this.Nl, this.Ce), this.clear();
            return;
          }
          this.V.refreshSession(), this.V.isSessionValid() && this.Dv.send();
        }
        clear() {
          this.Ce = null;
        }
        getRequestParameters() {
          if (!this.Ce) return {};
          let t = {};
          return (
            j(this.Ce.sku) && this.Ce.sku.length > 0 && (t.sku = this.Ce.sku),
            j(this.Ce.merchant) &&
              this.Ce.merchant.length > 0 &&
              (t.me = this.Ce.merchant),
            t
          );
        }
      }
      return s;
    })(),
    kl = (() => {
      class s {
        constructor(t, e) {
          (this.id = t), (this.revenue = e);
        }
        static from(t) {
          let e = new s(t.id, parseFloat(t.revenue));
          return (
            isNaN(parseFloat(t.tax)) || (e.tax = parseFloat(t.tax)),
            isNaN(parseFloat(t.shipping)) ||
              (e.shipping = parseFloat(t.shipping)),
            j(t.currency) &&
              t.currency.length <= 10 &&
              (e.currency = t.currency),
            e
          );
        }
        hasValidRevenue() {
          return !isNaN(this.revenue) && this.revenue >= 0;
        }
        static isValid(t) {
          return (
            Ct(t) &&
            Ht(t.revenue) &&
            j(t.currency) &&
            t.currency.length <= 10 &&
            (!Ct(t.id) || j(t.id))
          );
        }
      }
      return s;
    })(),
    wy = (() => {
      class s {
        constructor(t, e, i, n) {
          (this.id = t), (this.name = e), (this.price = i), (this.quantity = n);
        }
        static from(t) {
          if (!s.Ml(t)) return null;
          let e = new s(
            t.id,
            t.name,
            parseFloat(t.price),
            parseInt(t.quantity, 10)
          );
          return (
            ft(t.sku) && (e.sku = t.sku),
            ft(t.category) && (e.category = t.category),
            ft(t.merchant) &&
              t.merchant.length > 0 &&
              (e.merchant = t.merchant.slice(0, kh)),
            e
          );
        }
        static Ml(t) {
          return (
            Ct(t) &&
            j(t.id) &&
            j(t.name) &&
            Ht(parseFloat(t.price)) &&
            wi(parseInt(t.quantity, 10)) &&
            (!ft(t.sku) || j(t.sku)) &&
            (!ft(t.category) || j(t.category)) &&
            (!ft(t.merchant) || j(t.merchant))
          );
        }
      }
      return s;
    })(),
    Ay = (() => {
      class s extends se {
        constructor(t, e, i) {
          super(),
            (this.O = t),
            (this.If = e),
            (this.V = i),
            (this.Dl = []),
            this.clear();
        }
        onStart() {
          csArray.prototype.forEach.call(this.Dl, (t) => {
            (this.fe = t.transaction),
              (this.hn = t.transactionItems),
              this.sendTransaction();
          }),
            (this.Dl = []);
        }
        onStop() {}
        addTransaction(t) {
          let e = this.O.anonymizeFields(t, ["id"]);
          this.fe = kl.from(e);
        }
        getTransaction() {
          return this.fe;
        }
        sendTransaction() {
          if (!this.isStarted) {
            csArray.prototype.push.call(this.Dl, {
              transaction: this.fe,
              transactionItems: [...this.hn],
            }),
              this.clear();
            return;
          }
          if (
            !(this.If === null || this.V === null) &&
            (this.V.refreshSession(), !!this.V.isSessionValid())
          ) {
            if (!this.fe.hasValidRevenue()) {
              J.warn(
                "Transaction Service: unable to send transaction with invalid parameters"
              );
              return;
            }
            this.If.send();
          }
        }
        addItem(t) {
          if (Xe(t)) throw new ge(Jn[1]);
          let e = this.O.anonymizeFields(t, ["id", "name", "sku", "category"]),
            i = wy.from(e);
          i !== null && csArray.prototype.push.call(this.hn, i);
        }
        getItems() {
          return this.hn;
        }
        clear() {
          (this.fe = kl.from({ revenue: NaN })), (this.hn = []);
        }
        getRequestParameters() {
          let t = {
            id: this.fe.id ? `${this.fe.id}` : "",
            revenue: `${this.fe.revenue}`,
          };
          return (
            ft(this.fe.tax) && (t.tax = `${this.fe.tax}`),
            ft(this.fe.shipping) && (t.shipping = `${this.fe.shipping}`),
            ft(this.fe.currency) && (t.cu = `${this.fe.currency}`),
            (t.items = window.csJSON.stringify(this.hn)),
            t
          );
        }
      }
      return s;
    })(),
    by = ["ecommerce:addToCart", "ec:cart:add"],
    Pc = ["ecommerce:addTransaction", "ec:transaction:create"],
    Jn = ["ecommerce:addItem", "ec:transaction:items:add"],
    Oc = ["ecommerce:send", "ec:transaction:send"],
    Ty = (() => {
      class s {
        constructor(t, e, i, n, o, c, h) {
          (this.E = t),
            (this.Et = e),
            (this.N = i),
            (this.S = n),
            (this.O = o),
            (this.V = c),
            (this.A = h);
        }
        init() {
          let t = new xr(this.E.getTrackerUri(), "transaction"),
            e = new xr(this.E.getTrackerUri(), "addtocart");
          (this.He = new Ay(this.O, t, this.V)), (this.mr = new _y(e, this.V));
          let i = new Lr(this.Et, this.N, this.A, this.He);
          t.setRequestParametersProviders(i),
            t.after(() => {
              this.He.clear();
            });
          let n = new Lr(this.Et, this.N, this.A, this.mr);
          e.setRequestParametersProviders(n),
            e.after(() => {
              this.mr.clear();
            }),
            this.S.register(Pc, (o) => {
              this.He.addTransaction(o);
            }),
            this.S.register(Jn, (o) => this.He.addItem(o)),
            this.S.register(Oc, () => this.He.sendTransaction()),
            this.S.register(by, (o) => {
              this.mr.addToCart(o);
            });
        }
        onStartTracking() {
          this.He.start(), this.mr.start();
        }
        onArtificialPageViewEnd(t) {
          t && (this.He.stop(), this.mr.stop());
        }
        onAfterArtificialPageView(t) {
          t && (this.He.start(), this.mr.start());
        }
      }
      return s;
    })(),
    Ry = (() => {
      class s extends Wt {
        validateArgs(t) {
          return dt(t)
            ? j(t.transactionId) &&
                Ht(t.revenue) &&
                j(t.currency) &&
                j(t.name) &&
                j(t.sku) &&
                j(t.category) &&
                Ht(t.price) &&
                Ht(t.quantity)
            : !1;
        }
        execute(t) {
          this.kv({
            id: t.transactionId,
            revenue: t.revenue,
            currency: t.currency,
          }),
            this.xv({
              id: t.transactionId,
              name: t.name,
              sku: t.sku,
              category: t.category,
              price: t.price,
              quantity: t.quantity,
            }),
            this.ta();
        }
        kv(t) {
          this.commandsService.applyFromImplementation(
            Pc[0],
            [t],
            "EcTransactionAllTemplate"
          );
        }
        xv(t) {
          this.commandsService.applyFromImplementation(
            Jn[0],
            [t],
            "EcTransactionAllTemplate"
          );
        }
        ta() {
          this.commandsService.applyFromImplementation(
            Oc[0],
            [],
            "EcTransactionAllTemplate"
          );
        }
      }
      return s;
    })(),
    Cy = (() => {
      class s extends Wt {
        validateArgs(t) {
          return dt(t) ? j(t.id) && Ht(t.revenue) && j(t.currency) : !1;
        }
        execute(t) {
          this.commandsService.applyFromImplementation(
            Pc[0],
            [t],
            "EcTransactionCreateTemplate"
          );
        }
      }
      return s;
    })(),
    Iy = (() => {
      class s extends Wt {
        validateArgs(t) {
          return dt(t)
            ? j(t.id) &&
                j(t.name) &&
                j(t.sku) &&
                j(t.category) &&
                Ht(t.price) &&
                Ht(t.quantity)
            : !1;
        }
        execute(t) {
          this.commandsService.applyFromImplementation(
            Jn[0],
            [t],
            "EcTransactionItemsAddTemplate"
          );
        }
      }
      return s;
    })(),
    Py = (() => {
      class s extends Wt {
        validateArgs(t) {
          return !!dt(t);
        }
        execute() {
          this.commandsService.applyFromImplementation(
            Oc[0],
            [],
            "EcTransactionSendTemplate"
          );
        }
      }
      return s;
    })(),
    Oy = (() => {
      class s extends Gr {
        validateArgs(t) {
          return dt(t) ? Ct(t) && j(t.selector) : !1;
        }
        execute(t, e) {
          if (!Ct(t) || !j(t == null ? void 0 : t.selector)) return;
          let i = La(t.selector, e);
          i !== null &&
            this.commandsService.applyFromImplementation(
              Dh[0],
              [i],
              "ElementUnmaskingTemplate"
            );
        }
      }
      return s;
    })(),
    Ti;
  (function (s) {
    (s.ContentSquare = "CONTENTSQUARE"),
      (s.LoadedByClicktale = "LOADED_BY_CLICKTALE"),
      (s.LoadClicktalePtc = "LOAD_CLICKTALE_PTC"),
      (s.DualCollectionReview = "DUAL_COLLECTION_REVIEW"),
      (s.DualCollection = "DUAL_COLLECTION"),
      (s.ContentSquareTagClickTaleEndpoints =
        "CONTENTSQUARE_TAG_CLICKTALE_ENDPOINTS");
  })(Ti || (Ti = {}));
  var xl = (() => {
    let s;
    return (
      (function (r) {
        function t() {
          return window.ClickTaleIsRecording && window.ClickTaleIsRecording();
        }
        r.isRecording = t;
        function e() {
          window.ClickTaleStop && window.ClickTaleStop();
        }
        r.stopRecording = e;
        function i(c) {
          window.ClickTaleLogicalWithUploadPage &&
            window.ClickTaleLogicalWithUploadPage(c);
        }
        r.triggerLogicalPageView = i;
        function n(c) {
          window.ClickTaleEvent && window.ClickTaleEvent(c);
        }
        r.sendPageEvent = n;
        function o(c) {
          window.ClickTaleEventTrigger && window.ClickTaleEventTrigger(c);
        }
        r.sendEventTriggerRecording = o;
      })(s || (s = {})),
      s
    );
  })();
  function Ha(s) {
    return (
      s.tagDeploymentMode === Ti.DualCollectionReview ||
      s.tagDeploymentMode === Ti.DualCollection
    );
  }
  function Ny(s) {
    return Ha(s) || s.tagDeploymentMode === Ti.LoadClicktalePtc;
  }
  var My = "@ETP@",
    Ll = "@user-identifier@",
    Dy = (() => {
      class s extends se {
        constructor(t, e, i, n) {
          super(),
            (this.E = t),
            (this.Lv = e),
            (this.de = i),
            (this.z = n),
            (this.kl = []),
            (this.Pi = []);
        }
        onStart() {
          csArray.prototype.forEach.call(this.kl, (t) => this.Pf(t)),
            (this.kl = []),
            csArray.prototype.forEach.call(this.Pi, (t) => this.Of(t)),
            (this.Pi = []);
        }
        onStop() {}
        Pf(t) {
          this.Uv(t) ? Tr.isSupported() && this.Hv(t) : this.jv(t);
        }
        trackPageEvent(t) {
          if (!s.Nf(t)) throw new ge(Nc[0]);
          this.isStarted ? this.Pf(t) : csArray.prototype.push.call(this.kl, t);
        }
        Uv(t) {
          return Oa(t, Ll);
        }
        async Hv(t) {
          if (!this.E.customHashIdEnabled) return;
          let e = csString.prototype.slice.call(t, Ll.length);
          if (e.length > Tr.MAX_DIGEST_INPUT_SIZE) {
            J.warn("UserIdentifier event: invalid user identifier");
            return;
          }
          let i = await Tr.digest(e);
          i
            ? ((this.yr = { eventName: i, isETR: !1, isCustomHashId: !0 }),
              this.sa())
            : J.warn("Page event: unable to compute customHashId"),
            this.E.encryptionEnabled && this.z.emitUserIdentifierEvent(e);
        }
        jv(t) {
          this.z.emitPageEvent(t),
            (this.yr = { eventName: t, isETR: !1, isCustomHashId: !1 }),
            this.sa(),
            this.E.tagDeploymentMode === Ti.LoadClicktalePtc &&
              xl.sendPageEvent(t);
        }
        Of(t) {
          this.E.malkaEtrEnabled ? this.Bv(t) : this.$v(t);
        }
        trackEventTriggerRecording(t) {
          if (!s.Nf(t)) throw new ge(zr[0]);
          this.isStarted ? this.Of(t) : csArray.prototype.push.call(this.Pi, t);
        }
        Bv(t) {
          Oa(t, My)
            ? this.z.emitEventTriggerRecording(t, ei.ETR_PAGE)
            : this.z.emitEventTriggerRecording(t, ei.ETR_SESSION),
            (this.yr = { eventName: t, isETR: !0, isCustomHashId: !1 }),
            this.sa();
        }
        $v(t) {
          Ny(this.E) &&
            (this.z.emitEventTriggerRecording(t, ei.ETR_LEGACY),
            (this.yr = { eventName: t, isETR: !0, isCustomHashId: !1 }),
            this.sa(),
            this.E.tagDeploymentMode === Ti.LoadClicktalePtc &&
              xl.sendEventTriggerRecording(t));
        }
        getRequestParameters() {
          return {
            value: this.de.compressSync(this.yr.eventName, "base64"),
            ct: this.de.algorithm,
            isETR: `${this.yr.isETR}`,
            isCustomHashId: `${this.yr.isCustomHashId}`,
          };
        }
        sa() {
          this.Lv.send();
        }
        static Nf(t) {
          return j(t) && !!csString.prototype.trim.call(t);
        }
      }
      return s;
    })(),
    Nc = ["trackPageEvent"],
    zr = ["trackEventTriggerRecording"],
    ky = (() => {
      class s {
        constructor(t, e, i, n, o) {
          (this.E = t),
            (this.S = e),
            (this.de = i),
            (this.Ue = n),
            (this.z = o);
        }
        init() {
          let t = new xr(this.E.getTrackerUri(), "pageEvent");
          (this.Er = new Dy(this.E, t, this.de, this.z)),
            t.setRequestParametersProviders(this.Er, this.Ue),
            this.S.register(Nc, (e) => {
              this.Er.trackPageEvent(e);
            }),
            this.S.register(zr, (e) => {
              this.Er.trackEventTriggerRecording(e);
            });
        }
        onStartTracking() {
          this.Er.start();
        }
        onArtificialPageViewEnd(t) {
          t && this.Er.stop();
        }
        onAfterArtificialPageView(t) {
          t && this.Er.start();
        }
      }
      return s;
    })(),
    xy = (() => {
      class s extends Wt {
        validateArgs(t) {
          return dt(t) ? j(t.eventName) : !1;
        }
        execute(t) {
          this.commandsService.applyFromImplementation(
            zr[0],
            [`@ETP@${t.eventName}`],
            "EventTriggerRecordingPageTemplate"
          );
        }
      }
      return s;
    })(),
    Ly = (() => {
      class s extends Wt {
        validateArgs(t) {
          return dt(t) ? j(t.eventName) : !1;
        }
        execute(t) {
          this.commandsService.applyFromImplementation(
            zr[0],
            [`@ETS@${t.eventName}`],
            "EventTriggerRecordingSessionTemplate"
          );
        }
      }
      return s;
    })(),
    Vy = ["networkRequest:maskUrls"];
  var Uy = (() => {
      class s extends Wt {
        validateArgs(t) {
          return dt(t) ? j(t.maskingPattern) : !1;
        }
        execute(t) {
          this.commandsService.applyFromImplementation(
            Vy[0],
            [t.maskingPattern],
            "NetworkRequestMaskUrlTemplate"
          );
        }
      }
      return s;
    })(),
    Hy = (() => {
      class s extends Wt {
        validateArgs(t) {
          return dt(t) ? j(t.eventName) : !1;
        }
        execute(t) {
          this.commandsService.applyFromImplementation(
            Nc[0],
            [t.eventName],
            "PageEventTemplate"
          );
        }
      }
      return s;
    })(),
    jy = (() => {
      class s extends Gr {
        validateArgs(t) {
          if (dt(t)) {
            let e = csArray.isArray(t.cssSelectors),
              i = csArray.isArray(t.attributes);
            return e && i;
          }
          return !1;
        }
        execute(t, e) {
          let i = csArray.prototype.filter.call(
              csArray.prototype.map.call(t.cssSelectors, (c) => La(c, e)),
              (c) => !!c
            ),
            n = csArray.prototype.filter.call(
              csArray.prototype.map.call(t.attributes, (c) => {
                let h = Zi(c.attrName, e),
                  d = La(c.selector, e);
                return { attrName: h, selector: d };
              }),
              (c) => !!c.attrName && !!c.selector
            ),
            o = { PIISelectors: [...i], Attributes: [...n] };
          this.commandsService.applyFromImplementation(
            Kn[0],
            [o],
            "PIIMaskingTemplate"
          );
        }
      }
      return s;
    })(),
    By = (() => {
      class s extends Wt {
        validateArgs(t) {
          return dt(t) ? j(t.eventName) : !1;
        }
        execute(t) {
          this.commandsService.applyFromImplementation(
            zr[0],
            [`${t.eventName}`],
            "RecordingEventTriggerTemplate"
          );
        }
      }
      return s;
    })(),
    $y = (() => {
      class s extends Wt {
        validateArgs(t) {
          return dt(t) ? j(t.path) : !1;
        }
        execute(t) {
          let e = [t.path],
            i = Tc(t.decodeURI),
            n = Rc(t.lifespan),
            o = { ...i, ...n };
          Object.keys(o).length && e.push(o),
            this.commandsService.applyFromImplementation(
              Va[0],
              e,
              "SetPathTemplate"
            );
        }
      }
      return s;
    })(),
    Fy = (() => {
      class s extends Wt {
        validateArgs(t) {
          return dt(t) ? j(t.query) : !1;
        }
        execute(t) {
          let e = [t.query],
            i = Tc(t.decodeURI),
            n = Rc(t.lifespan),
            o = { ...i, ...n };
          Object.keys(o).length && e.push(o),
            this.commandsService.applyFromImplementation(
              Ua[0],
              e,
              "SetQueryTemplate"
            );
        }
      }
      return s;
    })();
  function xs(s, r, t, e) {
    var i = arguments.length,
      n =
        i < 3
          ? r
          : e === null
          ? (e = Object.getOwnPropertyDescriptor(r, t))
          : e,
      o;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      n = Reflect.decorate(s, r, t, e);
    else
      for (var c = s.length - 1; c >= 0; c--)
        (o = s[c]) && (n = (i < 3 ? o(n) : i > 3 ? o(r, t, n) : o(r, t)) || n);
    return i > 3 && n && Object.defineProperty(r, t, n), n;
  }
  var br = (s) => (s instanceof HTMLFormElement ? "form" : s.localName),
    Vl = new Map(),
    ia = !jr && document.implementation.createHTMLDocument("");
  function xh(s) {
    var r, t;
    return (t = (r = s.sheet) === null || r === void 0 ? void 0 : r.href) !==
      null && t !== void 0
      ? t
      : s.getAttribute("href");
  }
  function Gy(s) {
    if (!Fn(s)) return null;
    let r = Lh(s);
    if (r === null || r.length === 0) return null;
    let t = "";
    if (ic(s.textContent)) pt(r, (e) => (t += e.cssText));
    else {
      let e = zy(s);
      if (e === r.length || e > r.length) return null;
      let i = new csArray(r.length - e);
      for (let n = e, o = 0; n < r.length; n += 1, o += 1) i[o] = r[n];
      pt(i, (n) => (t += n.cssText));
    }
    return t;
  }
  function zy(s) {
    if (!ia) return 0;
    let r = Vl.get(s.textContent);
    if (r) return r;
    let t = s.cloneNode(!0);
    (t.textContent = s.textContent), ia.head.appendChild(t);
    let e = Lh(t);
    return (
      (r = e ? e.length : 0),
      Vl.set(s.textContent, r),
      ia.head.removeChild(t),
      r
    );
  }
  function Lh(s) {
    try {
      if (s.disabled) return null;
      let r = s.sheet;
      return r ? r.cssRules || r.rules : null;
    } catch (r) {
      if (r.name !== "SecurityError" && r.name !== "InvalidAccessError")
        throw r;
      return null;
    }
  }
  var Ms = {
    ELEMENT_NODE: 1,
    ATTRIBUTE_NODE: 2,
    TEXT_NODE: 3,
    CDATA_SECTION_NODE: 4,
    ENTITY_REFERENCE_NODE: 5,
    PROCESSING_INSTRUCTION_NODE: 7,
    COMMENT_NODE: 8,
    DOCUMENT_NODE: 9,
    DOCUMENT_TYPE_NODE: 10,
    DOCUMENT_FRAGMENT_NODE: 11,
    STYLESHEET: 50,
  };
  var Pi = (() => {
      class s {
        constructor(t) {
          (this.csId = At(t)), (this.props = bn.getAll(t));
        }
      }
      return s;
    })(),
    Vh = (() => {
      class s extends Pi {
        constructor(t) {
          super(t), (this.nodeType = 3), (this.data = t.data);
        }
      }
      return s;
    })(),
    Ie = (() => {
      class s extends Pi {
        constructor(t) {
          var e, i, n;
          super(t),
            (this.attributes = []),
            (this.nodeType = Ms.ELEMENT_NODE),
            (this.localName = br(t)),
            (this.namespaceURI =
              (e = t.namespaceURI) !== null && e !== void 0 ? e : void 0),
            (this.children = []);
          let o = Gy(t);
          if (o) {
            this.children = new csArray(csNodechildNodes.apply(t).length);
            let c = document.createTextNode(o),
              h = new Vh(c);
            csArray.prototype.push.call(this.children, h);
          }
          (Fn(t) || lc(t)) &&
            (this.disabledSheet =
              (n =
                (i = t.sheet) === null || i === void 0
                  ? void 0
                  : i.disabled) !== null && n !== void 0
                ? n
                : !1);
        }
        static isElement(t) {
          return t.nodeType === Ms.ELEMENT_NODE;
        }
        static getAttribute(t, e) {
          return sr(t.attributes, (i) => i.name === e);
        }
        static getAttributeValue(t, e) {
          var i;
          return (i = this.getAttribute(t, e)) === null || i === void 0
            ? void 0
            : i.value;
        }
      }
      return s;
    })();
  function qy(s, r) {
    let t = !1,
      e = function () {
        if (!t) return s.apply(r, arguments);
      };
    return (e.cancel = () => (t = !0)), e;
  }
  function vt(s, r, t, e) {
    var i = arguments.length,
      n =
        i < 3
          ? r
          : e === null
          ? (e = Object.getOwnPropertyDescriptor(r, t))
          : e,
      o;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      n = Reflect.decorate(s, r, t, e);
    else
      for (var c = s.length - 1; c >= 0; c--)
        (o = s[c]) && (n = (i < 3 ? o(n) : i > 3 ? o(r, t, n) : o(r, t)) || n);
    return i > 3 && n && Object.defineProperty(r, t, n), n;
  }
  function Wy() {
    let s = new Error(),
      r = s.stack
        ? csArray.prototype.filter.call(
            csString.prototype.split.call(
              s.stack,
              `
`
            ),
            (e) =>
              e !== "Error" &&
              csString.prototype.indexOf.call(
                csString.prototype.toLowerCase.call(e),
                "promise "
              ) === -1 &&
              csString.prototype.indexOf.call(e, "[native code]") === -1 &&
              csString.prototype.indexOf.call(e, "(<anonymous>)") === -1
          )
        : [];
    if (r.length === 0) return "";
    let t = Xy(r);
    return t === "" || ((r = Ky(r, t)), r.length === 0) ? "" : Uh(r[0]);
  }
  function Yy(s) {
    return csString.prototype.indexOf.call(s, "@") !== -1;
  }
  function Xy(s) {
    return s.length > 0 ? Uh(s[0]) : "";
  }
  function Ky(s, r) {
    return csArray.prototype.filter.call(
      s,
      (t) => csString.prototype.indexOf.call(t, r) === -1
    );
  }
  function Uh(s) {
    let r = "",
      t;
    Yy(s)
      ? (t = new csRegExp("@(.+):(\\d+):(\\d+)$"))
      : (t = new csRegExp("\\((.+):(\\d+):(\\d+)\\)"));
    let e = t.exec(s);
    return e && (r = e[1]), r;
  }
  var Jy = (s) => s;
  function Qy(s, r, t, e) {
    let i = csSymbol.for("propertyProxy");
    Object.defineProperty(s, r, {
      get() {
        var n;
        if (this[i]) return this[i];
        let o = (n = t.get) === null || n === void 0 ? void 0 : n.apply(this);
        return typeof o != "object"
          ? o
          : (typeof Proxy == "function"
              ? (this[i] = new Proxy(o, {
                  get(c, h) {
                    let d = Reflect.get(c, h);
                    return typeof d == "function" ? d.bind(c) : d;
                  },
                  set: (c, h, d) => {
                    let S = c[h],
                      y = Reflect.set(c, h, d);
                    return e.forEach((_) => _(this, d, S, "subproperty")), y;
                  },
                }))
              : (this[i] = o),
            this[i]);
      },
      set() {
        var n;
        let o = arguments,
          c = this[r],
          h = (n = t.set) === null || n === void 0 ? void 0 : n.apply(this, o);
        delete this[i];
        try {
          e.forEach((d) => d(this, o[0], c, "property"));
        } catch (d) {
          Tt.error(d);
        }
        return h;
      },
    });
  }
  function Zy(s, r, t) {
    let e = tE(s, r);
    if (!e) return null;
    let i = (n, o, c, h) => t(n, o, c, h);
    return {
      activate: () => {
        e.add(i);
      },
      deactivate: () => {
        e.delete(i);
      },
    };
  }
  function tE(s, r) {
    let t = csSymbol.for(r);
    if (s[t]) return s[t];
    let e = new Set(),
      i = Object.getOwnPropertyDescriptor(s, r);
    return i
      ? i.configurable
        ? ((s[t] = e), Qy(s, r, i, e), e)
        : (Tt.warn(
            `Cannot intercept non configurable property '${csString(
              r
            )}' of object '${s}'`
          ),
          null)
      : (Tt.warn(
          `Cannot intercept property '${csString(
            r
          )}' because it does not exist directly on the target object '${s}'`
        ),
        null);
  }
  function eE(s, r) {
    let t = csSymbol.for(r);
    if (s[t]) return s[t];
    let e = Object.getOwnPropertyDescriptor(s, r);
    if (!(e != null && e.writable) && !(e != null && e.set))
      return (
        Tt.warn(
          `Cannot intercept read only function '${csString(
            r
          )}' of object '${s}'`
        ),
        null
      );
    let i = new Set();
    s[t] = i;
    let n = s[r];
    if (typeof n == "function") {
      let o = function () {
        let c = arguments,
          h = [];
        try {
          h = csArray.prototype.map.call(Ds(i), (S) => S(c));
        } catch (S) {
          Tt.critical(S);
        }
        let d = n.apply(this, c);
        return (
          ks(() => {
            let S = { result: d, context: this, args: c };
            csArray.prototype.forEach.call(h, (y) => y(S));
          }, [He.MonkeyPatch, `${csString(r)}`]),
          d
        );
      };
      rE(o, n), (s[r] = o);
    }
    return i;
  }
  function ss({
    target: s,
    methodName: r,
    hook: t,
    hookPrepareArgs: e = Jy,
    options: i,
  }) {
    let n = eE(s, r);
    if (!n) return null;
    let o = (c) => {
      let h = e(c),
        d = i != null && i.withCallerName ? { callerName: Wy() } : {};
      return (S) => t({ ...S, ...d, args: h });
    };
    return {
      activate: () => {
        n.add(o);
      },
      deactivate: () => {
        n.delete(o);
      },
    };
  }
  function sE(s, r) {
    return Hh(s, r, !1);
  }
  function Hh(s, r, t = !0) {
    let e = csSymbol.for(r);
    if (t ? s[e] : s.hasOwnProperty(e)) return s[e];
    let i = new Set(),
      n = Object.getOwnPropertyDescriptor(s, r);
    if (!n)
      return (
        Tt.warn(
          `Cannot intercept property '${csString(
            r
          )}' because it does not exist directly on the target object '${s}'`
        ),
        null
      );
    if (!n.configurable)
      return (
        Tt.warn(
          `Cannot intercept read only property '${csString(
            r
          )}' of object '${s}'`
        ),
        null
      );
    s[e] = i;
    let o = `${csString(r)}-setter`;
    return (
      Object.defineProperty(s, r, {
        set() {
          var c;
          let h = this[r],
            d = arguments;
          return (
            ks(() => {
              i.forEach((S) => S(this, d[0], h, "property"));
            }, [He.MonkeyPatch, o]),
            (c = n.set) === null || c === void 0 ? void 0 : c.apply(this, d)
          );
        },
      }),
      i
    );
  }
  function iE(s, r, t) {
    return Vr(s, r, t, !0);
  }
  function Vr(s, r, t, e = !1) {
    let i = e ? sE(s, r) : Hh(s, r);
    if (!i) return null;
    let n = (o, c, h) => t(o, c, h, "property");
    return {
      activate: () => {
        i.add(n);
      },
      deactivate: () => {
        i.delete(n);
      },
    };
  }
  function rE(s, r) {
    (s.prototype = r.prototype),
      Object.defineProperty(s, "toString", { value: () => r.toString() });
  }
  var Qn = (() => {
      class s {
        constructor() {
          this.set = new Set();
        }
        add(t) {
          this.set.add(t),
            this.set.size === 1 &&
              csSetTimeout(() => {
                this.set.clear();
              });
        }
        has(t) {
          return this.set.has(t);
        }
        del(t) {
          this.set.delete(t);
        }
        clear() {
          this.set.clear();
        }
        values() {
          return Ds(this.set);
        }
        get count() {
          return this.set.size;
        }
      }
      return s;
    })(),
    nE = (() => {
      class s extends Qn {
        constructor(t = "high") {
          super(), (this.Fv = t);
        }
        add(t) {
          this.set.add(t),
            this.set.size === 1 &&
              ve(() => {
                this.set.clear();
              }, this.Fv);
        }
      }
      return s;
    })();
  function Zn(s, r = !1) {
    let t = new Qn();
    return {
      push(e) {
        t.count === 0 &&
          (r ? ve : csSetTimeout)(() => {
            s(t.values()), t.clear();
          }),
          t.add(e);
      },
    };
  }
  var Is = csSymbol(),
    Mc = (() => {
      class s {
        constructor(t) {
          var e, i, n, o, c, h, d, S, y, _, w, T, M;
          (this.R = t),
            (this.xl = null),
            (this.Ll = null),
            (this.Vl = null),
            (this.Ul = null),
            (this.Hl = null),
            (this.Gv = Zn((x) => this.processUpdateRulesInATick(x))),
            (this.jl = null),
            (this.Bl = null),
            (this.$l = null),
            (this.R = (x) => ve(() => t(x))),
            typeof ((i =
              (e = window.CSSStyleSheet) === null || e === void 0
                ? void 0
                : e.prototype) === null || i === void 0
              ? void 0
              : i.insertRule) == "function" &&
              (this.xl = ss({
                target: window.CSSStyleSheet.prototype,
                methodName: "insertRule",
                hook: ({ context: x, args: P }) => {
                  this.processInsertRule(x, P);
                },
              })),
            typeof ((o =
              (n = window.CSSStyleSheet) === null || n === void 0
                ? void 0
                : n.prototype) === null || o === void 0
              ? void 0
              : o.deleteRule) == "function" &&
              (this.Ll = ss({
                target: window.CSSStyleSheet.prototype,
                methodName: "deleteRule",
                hook: ({ context: x, args: P }) => {
                  this.processDeleteRule(x, P);
                },
              })),
            typeof ((h =
              (c = window.CSSGroupingRule) === null || c === void 0
                ? void 0
                : c.prototype) === null || h === void 0
              ? void 0
              : h.insertRule) == "function" &&
              (this.Vl = ss({
                target: window.CSSGroupingRule.prototype,
                methodName: "insertRule",
                hook: ({ context: x }) => this.processUpdateRule(x),
              })),
            typeof ((S =
              (d = window.CSSGroupingRule) === null || d === void 0
                ? void 0
                : d.prototype) === null || S === void 0
              ? void 0
              : S.deleteRule) == "function" &&
              (this.Ul = ss({
                target: window.CSSGroupingRule.prototype,
                methodName: "deleteRule",
                hook: ({ context: x }) => this.processUpdateRule(x),
              })),
            !((y = window.StyleSheet) === null || y === void 0) &&
              y.prototype &&
              "disabled" in window.StyleSheet.prototype &&
              (this.Hl = Vr(
                window.StyleSheet.prototype,
                "disabled",
                (x, P, N) => {
                  P !== N && this.zv(x, P);
                }
              )),
            typeof ((w =
              (_ = window.CSSStyleDeclaration) === null || _ === void 0
                ? void 0
                : _.prototype) === null || w === void 0
              ? void 0
              : w.setProperty) == "function" &&
              (this.jl = ss({
                target: window.CSSStyleDeclaration.prototype,
                methodName: "setProperty",
                hook: ({ context: x }) => {
                  let P = x.parentRule;
                  P instanceof CSSStyleRule && this.processUpdateRule(P);
                },
              })),
            typeof ((M =
              (T = window.CSSStyleDeclaration) === null || T === void 0
                ? void 0
                : T.prototype) === null || M === void 0
              ? void 0
              : M.removeProperty) == "function" &&
              (this.Bl = ss({
                target: window.CSSStyleDeclaration.prototype,
                methodName: "removeProperty",
                hook: ({ context: x }) => {
                  let P = x.parentRule;
                  P instanceof CSSStyleRule && this.processUpdateRule(P);
                },
              })),
            Object.getOwnPropertyDescriptor(
              window.CSSStyleRule.prototype,
              "style"
            ) &&
              (this.$l = Zy(window.CSSStyleRule.prototype, "style", (x) => {
                this.processUpdateRule(x);
              }));
        }
        observe() {
          var t, e, i, n, o, c, h, d;
          (t = this.xl) === null || t === void 0 || t.activate(),
            (e = this.Ll) === null || e === void 0 || e.activate(),
            (i = this.Vl) === null || i === void 0 || i.activate(),
            (n = this.Ul) === null || n === void 0 || n.activate(),
            (o = this.Hl) === null || o === void 0 || o.activate(),
            (c = this.jl) === null || c === void 0 || c.activate(),
            (h = this.Bl) === null || h === void 0 || h.activate(),
            (d = this.$l) === null || d === void 0 || d.activate();
        }
        disconnect() {
          var t, e, i, n, o, c, h, d;
          (t = this.xl) === null || t === void 0 || t.deactivate(),
            (e = this.Ll) === null || e === void 0 || e.deactivate(),
            (i = this.Vl) === null || i === void 0 || i.deactivate(),
            (n = this.Ul) === null || n === void 0 || n.deactivate(),
            (o = this.Hl) === null || o === void 0 || o.deactivate(),
            (c = this.jl) === null || c === void 0 || c.deactivate(),
            (h = this.Bl) === null || h === void 0 || h.deactivate(),
            (d = this.$l) === null || d === void 0 || d.deactivate();
        }
        processInsertRule(t, [e, i]) {
          if (t[Is] == null && !t.ownerNode) return;
          let n = { type: "cssRuleInserted", sheet: t, rule: e, index: i };
          this.R(n);
        }
        processUpdateRule(t) {
          let e = t;
          for (; e.parentRule !== null; ) e = e.parentRule;
          e.parentStyleSheet !== null && this.Gv.push(e);
        }
        processUpdateRulesInATick(t) {
          for (let e of t) {
            if (e.parentStyleSheet === null) return;
            let i = e.parentStyleSheet,
              n = csArray.prototype.indexOf.call(Dr(i.cssRules), e);
            if (n === -1) return;
            let o = {
              type: "cssRuleUpdated",
              sheet: i,
              rule: e.cssText,
              index: n,
            };
            this.R(o);
          }
        }
        processDeleteRule(t, [e]) {
          if (t[Is] == null && !t.ownerNode) return;
          let i = { type: "cssRuleDeleted", sheet: t, index: e };
          this.R(i);
        }
        zv(t, e) {
          if (t[Is] == null && !t.ownerNode) return;
          let i = { type: "cssStyleSheetDisabled", sheet: t, disabled: e };
          this.R(i);
        }
      }
      return (
        vt([$()], s.prototype, "observe", null),
        vt([$()], s.prototype, "disconnect", null),
        vt([$()], s.prototype, "processInsertRule", null),
        vt([$()], s.prototype, "processUpdateRule", null),
        vt([$()], s.prototype, "processUpdateRulesInATick", null),
        vt([$()], s.prototype, "processDeleteRule", null),
        s
      );
    })(),
    Oi = (() => {
      var s;
      class r {
        static qv(e) {
          this.bs.forEach((i) => {
            e(i, "initial");
          });
        }
        static dn(e) {
          if (
            (this.U ||
              (this.U = new csMutationObserver((i) => {
                for (let n of i)
                  n.target.isConnected && pt(n.addedNodes, this.Wv),
                    pt(n.removedNodes, this.Yv);
              })),
            csArray.prototype.push.call(this.St, e),
            !this.Rt)
          ) {
            (this.Rt = !0), this.U.observe(document, this.En);
            for (let i of _i.getAllShadowHosts(document)) {
              let n = csElementshadowRoot.apply(i);
              this.bs.add(n), this.U.observe(n, this.En);
            }
            this.Oi ||
              (this.Oi = ss({
                target: Element.prototype,
                methodName: "attachShadow",
                hook: (i) => this.Xv(i.result) && this.Df(i.result),
              })),
              this.Oi.activate();
          }
          this.qv(e);
        }
        static Xv(e) {
          return e.isConnected && e.ownerDocument === document;
        }
        static Sn(e) {
          var i, n;
          (this.St = csArray.prototype.filter.call(this.St, (o) => o !== e)),
            this.St.length === 0 &&
              ((this.St = []),
              (this.Rt = !1),
              (i = this.U) === null || i === void 0 || i.disconnect(),
              (n = this.Oi) === null || n === void 0 || n.deactivate(),
              this.bs.clear());
        }
        constructor(e) {
          (this.R = e),
            (this.R = ii("DocumentShadowRootObserver:callback", (i, n) =>
              e(i, n)
            ));
        }
        get shadowRoots() {
          return Ds(s.bs);
        }
        static get shadowRootsCount() {
          if (s.Rt) return Ds(s.bs).length;
        }
        takeRecords() {
          var e, i;
          return (i =
            (e = s.U) === null || e === void 0 ? void 0 : e.takeRecords()) !==
            null && i !== void 0
            ? i
            : [];
        }
        observe() {
          _i.isSupported() && s.dn(this.R);
        }
        disconnect() {
          _i.isSupported() && s.Sn(this.R);
        }
      }
      return (
        (s = r),
        (r.St = []),
        (r.bs = new Set()),
        (r.Rt = !1),
        (r.En = { childList: !0, subtree: !0 }),
        (r.Df = (t) => {
          s.bs.has(t) ||
            (s.U.observe(t, s.En), s.bs.add(t), pt(s.St, (e) => e(t, "added")));
        }),
        (r.Wv = (t) => {
          _e(t, NodeFilter.SHOW_DOCUMENT_FRAGMENT).visitAll(s.Df);
        }),
        (r.Yv = (t) => {
          t.isConnected ||
            _e(t, NodeFilter.SHOW_DOCUMENT_FRAGMENT).visitAll((e) => {
              s.bs.has(e) && (s.bs.delete(e), pt(s.St, (i) => i(e, "removed")));
            });
        }),
        vt([$()], r.prototype, "observe", null),
        vt([$()], r.prototype, "disconnect", null),
        r
      );
    })(),
    oE = (() => {
      class s {
        constructor(t) {
          (this.Kv = 1),
            (this.ia = new Set()),
            (this.Fl = null),
            (this.Gl = null),
            (this.zl = (e, i) => {
              (i === "initial" || i === "added") &&
                this.setStyleSheets(e, e.adoptedStyleSheets);
            }),
            (this.Jv = (e) => {
              let i = e.sheet;
              if (this.ia.has(i)) {
                if (e.type === "cssRuleInserted") {
                  let n = {
                    type: "adoptedStyleSheetRuleInserted",
                    sheetId: i[Is],
                    rule: e.rule,
                    index: e.index,
                  };
                  this.R(n);
                } else if (e.type === "cssRuleDeleted") {
                  let n = {
                    type: "adoptedStyleSheetRuleDeleted",
                    sheetId: i[Is],
                    index: e.index,
                  };
                  this.R(n);
                } else if (e.type === "cssRuleUpdated") {
                  let n = {
                    type: "adoptedStyleSheetRuleUpdated",
                    sheetId: i[Is],
                    rule: e.rule,
                    index: e.index,
                  };
                  this.R(n);
                } else if (e.type === "cssStyleSheetDisabled") {
                  let n = {
                    type: "adoptedStyleSheetDisabled",
                    sheetId: i[Is],
                    disabled: e.disabled,
                  };
                  this.R(n);
                }
              }
            }),
            (this.R = (e) =>
              ve(async () => {
                await Du(2), t(e);
              })),
            (this.pe = new Oi(this.zl)),
            "adoptedStyleSheets" in Document.prototype &&
              (this.Fl = Vr(
                window.Document.prototype,
                "adoptedStyleSheets",
                (e, i) => {
                  this.setStyleSheets(e, i);
                }
              )),
            "ShadowRoot" in window &&
              "adoptedStyleSheets" in window.ShadowRoot.prototype &&
              (this.Gl = Vr(
                window.ShadowRoot.prototype,
                "adoptedStyleSheets",
                (e, i) => {
                  this.setStyleSheets(e, i);
                }
              )),
            (this.kf = new Mc(this.Jv));
        }
        observe() {
          var t, e;
          this.setStyleSheets(document, document.adoptedStyleSheets),
            this.pe.observe(),
            (t = this.Fl) === null || t === void 0 || t.activate(),
            (e = this.Gl) === null || e === void 0 || e.activate(),
            this.kf.observe();
        }
        disconnect() {
          var t, e;
          this.ia.clear(),
            this.pe.disconnect(),
            (t = this.Fl) === null || t === void 0 || t.deactivate(),
            (e = this.Gl) === null || e === void 0 || e.deactivate(),
            this.kf.disconnect();
        }
        setStyleSheets(t, e) {
          if (!e.length) return;
          this.Qv(e);
          let i = Ye(e, (o) => o[Is]),
            n = { type: "adoptedStyleSheetsSet", target: t, sheetsIds: i };
          this.R(n);
        }
        Qv(t) {
          pt(t, (e) => {
            if (this.ia.has(e)) return;
            let i = this.Kv++;
            (e[Is] = i), this.ia.add(e);
            let n = this.Zv(e),
              o = {
                type: "adoptedStyleSheetRegistered",
                sheetId: i,
                cssRules: n,
                disabled: e == null ? void 0 : e.disabled,
              };
            this.R(o);
          });
        }
        Zv(t) {
          let e = [];
          try {
            e = Ye(t.cssRules, (i) => i.cssText);
          } catch {}
          return e;
        }
      }
      return (
        vt([$()], s.prototype, "observe", null),
        vt([$()], s.prototype, "disconnect", null),
        vt([$()], s.prototype, "setStyleSheets", null),
        s
      );
    })(),
    aE = Ii(hE, "optimizeMutations"),
    cE = csSymbol.for("ignoreNextSerialization");
  function lE() {
    let s = new Set(),
      r = new Set(),
      t = new Set(),
      e = new Set(),
      i = new Map(),
      n = new Map(),
      o = new Map(),
      c = new Set(),
      h = new Set(),
      d = new Map(),
      S = new Set();
    return {
      isMovedNode(y) {
        return s.has(y);
      },
      markAsMovedNode(y) {
        S.delete(y), s.add(y);
      },
      isDetachedMove(y) {
        return !!bt.findAncestor(y, (_) => S.has(_), !0);
      },
      isAddedNode(y) {
        let _ = bt.findAncestor(y, (w) => r.has(w) || h.has(w) || s.has(w), !0);
        return !!_ && !s.has(_);
      },
      isMovedNodeIntoAddedNode(y) {
        return (
          s.has(y) && !!bt.findAncestor(y, (_) => r.has(_) || h.has(_), !0)
        );
      },
      markAsAddedNode(y) {
        S.delete(y), h.delete(y), r.add(y);
      },
      markAsPendingInsert(y) {
        h.add(y);
      },
      isPendingInsert(y) {
        return h.has(y);
      },
      isRemovedNode(y) {
        return !!bt.findAncestor(y, (_) => t.has(_), !0);
      },
      markAsRemovedNode(y) {
        t.add(y);
      },
      isUselessNode(y) {
        return e.has(y);
      },
      markAsUselessNode(y) {
        e.add(y);
      },
      getPlaceholder(y, _) {
        let w = _ === "previous" ? n : i;
        return y && w.has(y) ? w.get(y) || null : y;
      },
      getSiblings(y) {
        let _ = y.addedNodes.length,
          w = this.getPlaceholder(y.previousSibling, "previous"),
          T = this.getPlaceholder(y.nextSibling, "next");
        if (_) {
          let M = w,
            x = T,
            P = y.previousSibling !== w,
            N = y.nextSibling !== T;
          for (let W = 0; W < _; W++) {
            let D = y.addedNodes[W],
              L = y.addedNodes[_ - W - 1];
            this.isLatestNodeMutation(D, y)
              ? (n.delete(D),
                y.previousSibling &&
                  P &&
                  (i.set(y.previousSibling, D), (P = !1)),
                (M = D))
              : n.set(D, M),
              this.isLatestNodeMutation(L, y)
                ? (i.delete(L),
                  y.nextSibling && N && (n.set(y.nextSibling, L), (N = !1)),
                  (x = L))
                : i.set(L, x);
          }
        } else
          y.previousSibling &&
            y.previousSibling !== w &&
            i.set(y.previousSibling, T),
            y.nextSibling && y.nextSibling !== T && n.set(y.nextSibling, w);
        return { previousSibling: w, nextSibling: T };
      },
      setAttributeMutation(y, _) {
        let w = o.get(y) || new Set();
        w.add(_), o.set(y, w);
      },
      isAttributeMutated(y, _) {
        var w;
        return !!(!((w = o.get(y)) === null || w === void 0) && w.has(_));
      },
      setLatestNodeMutation(y, _) {
        d.set(y, _);
      },
      isLatestNodeMutation(y, _) {
        return d.get(y) === _;
      },
      markAsFutureAddedNode(y) {
        d.has(y) || S.add(y);
      },
      isTextMutated(y) {
        return c.has(y);
      },
      setTextMutated(y) {
        return c.add(y);
      },
    };
  }
  function uE(s, r) {
    for (let t = 0; t < s.addedNodes.length; t++) {
      let e = s.addedNodes[t];
      r.markAsFutureAddedNode(e), r.setLatestNodeMutation(e, s);
    }
    for (let t = 0; t < s.removedNodes.length; t++) {
      let e = s.removedNodes[t];
      r.setLatestNodeMutation(e, s);
    }
  }
  function hE(s) {
    let r = lE(),
      t = [];
    for (let e of s) e.type === "childList" && uE(e, r);
    for (let e of s)
      switch (e.type) {
        case "attributes":
          fE(e, r, t);
          break;
        case "characterData":
          dE(e, r, t);
          break;
        case "childList":
          mE(e, r, t);
          break;
      }
    return t;
  }
  function dE(s, r, t = []) {
    let e = s.target;
    return (
      bt.isConnected(e) &&
        !r.isTextMutated(e) &&
        !r.isAddedNode(e) &&
        !gE(e, "characterData") &&
        (r.setTextMutated(e), csArray.prototype.push.call(t, s)),
      t
    );
  }
  function fE(s, r, t = []) {
    let e = s.target,
      i = `${s.attributeNamespace}/${s.attributeName}`;
    return (
      bt.isConnected(e) &&
        !r.isAttributeMutated(e, i) &&
        !r.isAddedNode(e) &&
        (r.setAttributeMutation(e, i), csArray.prototype.push.call(t, s)),
      t
    );
  }
  var pE = 30;
  function gE(s, r, t) {
    let e = csSymbol.for(t ? `${r}:${t}` : r),
      i = q.now(),
      n = s[e];
    return n && i < n ? !0 : ((s[e] = i + pE), !1);
  }
  function mE(s, r, t = []) {
    let e = bt.isConnected(s.target),
      i = !e && r.isRemovedNode(s.target),
      n = e && r.isAddedNode(s.target),
      o = r.getSiblings(s),
      c = o.nextSibling,
      h = o.previousSibling,
      d = null,
      S = () => {
        if (d) {
          let { childListType: w, movedNodes: T, ...M } = d;
          csArray.prototype.push.call(
            t,
            w === "added" ? M : { ...M, movedNodes: T }
          ),
            (d = null);
        }
      },
      y = (w) =>
        w === (d == null ? void 0 : d.childListType)
          ? d
          : (S(),
            {
              childListType: w,
              type: "childList",
              target: s.target,
              addedNodes: [],
              removedNodes: [],
              movedNodes: [],
              previousSibling: h,
              nextSibling: c,
            });
    if (e) {
      for (let w = 0; w < s.addedNodes.length; w++) {
        let T = s.addedNodes[w];
        r.isLatestNodeMutation(T, s)
          ? (r.isMovedNode(T)
              ? ((d = y("moved")), csArray.prototype.push.call(d.movedNodes, T))
              : (r.markAsAddedNode(T),
                n ||
                  ((d = y("added")),
                  csArray.prototype.push.call(d.addedNodes, T))),
            (h = T))
          : bt.isConnected(T)
          ? r.isMovedNode(T) || r.markAsPendingInsert(T)
          : r.markAsUselessNode(T);
      }
      S();
    }
    let _ = On(s.removedNodes, (w) => {
      if (bt.isConnected(w)) {
        if (!i && !r.isPendingInsert(w)) {
          if (r.isDetachedMove(w)) return !0;
          r.markAsMovedNode(w), r.isMovedNodeIntoAddedNode(w) && (w[cE] = !0);
        }
        return !1;
      }
      return r.isUselessNode(w) ? !1 : (r.markAsRemovedNode(w), !0);
    });
    return (
      _.length &&
        csArray.prototype.push.call(t, {
          type: "childList",
          removedNodes: _,
          addedNodes: [],
          movedNodes: [],
          target: s.target,
          nextSibling: c,
          previousSibling: h,
        }),
      t
    );
  }
  var Ul = {
      childList: !0,
      subtree: !0,
      attributes: !0,
      characterData: !0,
      characterDataOldValue: !0,
      attributeOldValue: !0,
    },
    cs = (() => {
      var s;
      class r {
        static setShadowRootFilter(e) {
          csArray.prototype.push.call(s.shadowRootFilters, e);
        }
        static ql(e) {
          if (s.shadowRootFilters.length > 0 && Ji(e))
            for (let i = 0; i < s.shadowRootFilters.length; i++) {
              let n = s.shadowRootFilters[i];
              if (n(e)) return;
            }
          this.observedTargets.add(e), this.mutationObserver.observe(e, Ul);
        }
        static disconnectShadowRoot(e) {
          this.observedTargets.has(e) &&
            (this.observedTargets.delete(e),
            this.isRefreshing ||
              ((this.isRefreshing = !0),
              ve(() => {
                this.isRefreshing = !1;
                let i = this.mutationObserver.takeRecords();
                i.length && s.mutationCallback(i),
                  this.mutationObserver.disconnect(),
                  this.observedTargets.forEach((n) => {
                    this.mutationObserver.observe(n, Ul);
                  });
              })));
        }
        static observe(e, i) {
          csArray.prototype.push.call(this.callbacks, e),
            i && csArray.prototype.push.call(this.shadowRootCallbacks, i),
            this.started
              ? i &&
                csArray.prototype.forEach.call(
                  _i.getAllShadowHosts(document),
                  (n) => i(csElementshadowRoot.apply(n), "initial")
                )
              : ((this.mutationObserver = new csMutationObserver(
                  this.mutationCallback
                )),
                this.ql(document),
                (this.shadowRootObserver = new Oi(this.onShadowRoot)),
                this.shadowRootObserver.observe(),
                (this.started = !0),
                pt(this.shadowRootObserver.shadowRoots, (n) => {
                  this.ql(n);
                }));
        }
        static disconnect(e, i) {
          var n, o;
          (this.callbacks = csArray.prototype.filter.call(
            this.callbacks,
            (c) => c !== e
          )),
            i &&
              (this.shadowRootCallbacks = csArray.prototype.filter.call(
                this.shadowRootCallbacks,
                (c) => c !== i
              )),
            this.callbacks.length === 0 &&
              ((this.callbacks = []),
              (this.shadowRootCallbacks = []),
              (s.shadowRootFilters = []),
              (n = this.shadowRootObserver) === null ||
                n === void 0 ||
                n.disconnect(),
              (o = this.mutationObserver) === null ||
                o === void 0 ||
                o.disconnect(),
              this.observedTargets.clear(),
              (this.started = !1));
        }
        constructor(e, i) {
          (this.R = e), (this.xf = i);
          let n = Zn((o) => e(o, this), !0);
          this.R = ii("DocumentMutationObserver:callback", (o) => {
            pt(o, (c) => n.push(c));
          });
        }
        get shadowRoots() {
          var e, i;
          return (i =
            (e = s.shadowRootObserver) === null || e === void 0
              ? void 0
              : e.shadowRoots) !== null && i !== void 0
            ? i
            : [];
        }
        takeRecords() {
          var e;
          let i =
              (e = s.mutationObserver) === null || e === void 0
                ? void 0
                : e.takeRecords(),
            n = s.shadowRootObserver.takeRecords();
          return i != null && i.length && n.length
            ? Yd(i, n)
            : i != null
            ? i
            : n;
        }
        observe() {
          s.observe(this.R, this.xf);
        }
        disconnect() {
          s.disconnect(this.R, this.xf);
        }
      }
      return (
        (s = r),
        (r.callbacks = []),
        (r.shadowRootCallbacks = []),
        (r.started = !1),
        (r.observedTargets = new Set()),
        (r.shadowRootFilters = []),
        (r.mutationCallback = (t) => {
          Vt.mutations.count.increase(t.length),
            st.counters.mutations.push(t.length),
            csArray.prototype.forEach.call(s.callbacks, (e) =>
              e(t, s.mutationObserver)
            );
        }),
        (r.onShadowRoot = (t, e) => {
          pt(s.shadowRootCallbacks, (i) => i(t, e)),
            e !== "removed" ? s.ql(t) : s.disconnectShadowRoot(t);
        }),
        (r.isRefreshing = !1),
        vt([$()], r.prototype, "observe", null),
        vt([$()], r.prototype, "disconnect", null),
        r
      );
    })(),
    yE = (() => {
      class s {
        constructor(t) {
          (this.R = t),
            (this.Wl = !1),
            (this.t_ = (e) => {
              e.sheet.ownerNode &&
                (e.type === "cssRuleInserted"
                  ? this.R({
                      type: e.type,
                      target: e.sheet.ownerNode,
                      rule: e.rule,
                      index: e.index,
                    })
                  : e.type === "cssRuleDeleted"
                  ? this.R({
                      type: e.type,
                      target: e.sheet.ownerNode,
                      index: e.index,
                    })
                  : e.type === "cssRuleUpdated"
                  ? this.R({
                      type: e.type,
                      target: e.sheet.ownerNode,
                      rule: e.rule,
                      index: e.index,
                    })
                  : e.type === "cssStyleSheetDisabled" &&
                    this.R({
                      type: e.type,
                      target: e.sheet.ownerNode,
                      disabled: e.disabled,
                    }));
            }),
            (this.R = (e) => ve(() => t(e))),
            (this.Lf = new Mc((e) =>
              ve(async () => {
                await Du(), this.t_(e);
              })
            )),
            "adoptedStyleSheets" in Document.prototype && (this.Vf = new oE(t));
        }
        observe() {
          var t;
          (this.Wl = !1),
            (this.U = new cs(
              (e) => this.e_(e),
              (e, i) => {
                i === "added" && this.s_(e);
              }
            )),
            this.U.observe(),
            this.Lf.observe(),
            (t = this.Vf) === null || t === void 0 || t.observe();
        }
        disconnect() {
          var t, e;
          (t = this.U) === null || t === void 0 || t.disconnect(),
            this.Lf.disconnect(),
            (e = this.Vf) === null || e === void 0 || e.disconnect(),
            (this.Wl = !0);
        }
        e_(t) {
          if (this.Wl) return;
          let e = aE(t);
          for (let i = 0; i < e.length; i++) {
            let n = e[i];
            if (!n) {
              Tt.error("processRawMutations: empty record");
              continue;
            }
            switch (n.type) {
              case "attributes":
                this.processAttributeChanged(n);
                break;
              case "characterData":
                this.processCharacterDataChanged(n);
                break;
              case "childList":
                this.processChildListChanged(n);
                break;
              default:
                Tt.error(
                  `processRawMutations: unknown record type '${n.type}'`
                );
                break;
            }
          }
        }
        processAttributeChanged(t) {
          let e = {
            type: "attributeChanged",
            target: t.target,
            attribute: t.attributeName,
            namespace: t.attributeNamespace,
            oldValue: t.oldValue,
            newValue: bt.getAttributeNS(
              t.target,
              t.attributeNamespace,
              t.attributeName
            ),
          };
          this.R(e);
        }
        processCharacterDataChanged(t) {
          let e = {
            type: "characterDataChanged",
            target: t.target,
            oldValue: t.oldValue,
            newValue: t.target.data,
          };
          this.R(e);
        }
        processChildListChanged(t) {
          var e, i, n;
          if (!((e = t.movedNodes) === null || e === void 0) && e.length) {
            let o = {
              type: "nodesMoved",
              target: t.target,
              nodes: t.movedNodes,
              previousSibling: t.previousSibling,
              nextSibling: t.nextSibling,
            };
            this.R(o);
          }
          if (!((i = t.addedNodes) === null || i === void 0) && i.length) {
            let o = {
              type: "nodesAdded",
              target: t.target,
              previousSibling: t.previousSibling,
              nextSibling: t.nextSibling,
              nodes: Dr(t.addedNodes),
            };
            this.R(o);
          }
          if (!((n = t.removedNodes) === null || n === void 0) && n.length) {
            let o = {
              type: "nodesRemoved",
              target: t.target,
              nodes: Ye(t.removedNodes, (c) => c),
            };
            this.R(o);
          }
        }
        s_(t) {
          let e = { type: "shadowRootAttached", target: t.host, shadowRoot: t };
          this.R(e);
        }
      }
      return (
        vt([$()], s.prototype, "processAttributeChanged", null),
        vt([$()], s.prototype, "processCharacterDataChanged", null),
        vt([$()], s.prototype, "processChildListChanged", null),
        s
      );
    })(),
    EE = (() => {
      class s extends Pi {
        constructor(t) {
          super(t), (this.nodeType = 4), (this.data = t.data);
        }
      }
      return s;
    })(),
    SE = (() => {
      class s extends Pi {
        constructor(t) {
          super(t), (this.nodeType = 8), (this.data = t.data);
        }
      }
      return s;
    })(),
    vE = (() => {
      class s extends Pi {
        constructor(t) {
          super(t),
            (this.nodeType = 10),
            (this.name = t.name),
            (this.publicId = t.publicId),
            (this.systemId = t.systemId);
        }
      }
      return s;
    })(),
    _E = (() => {
      class s extends Pi {
        constructor(t) {
          super(t),
            (this.nodeType = 9),
            (this.baseURI = s.getBaseURI(t)),
            (this.children = []);
        }
        static getBaseURI(t) {
          let e = t.baseURI;
          if (e == null) {
            let i = t.getElementsByTagName("base");
            e = i.length !== 0 ? i[0].href : t.URL;
          }
          return e;
        }
      }
      return s;
    })(),
    wE = (() => {
      class s extends Pi {
        constructor(t) {
          super(t),
            (this.nodeType = 11),
            (this.mode = t.mode),
            (this.children = []);
        }
      }
      return s;
    })(),
    AE = (() => {
      class s {
        constructor(t, e, i) {
          var n;
          typeof t == "string"
            ? ((this.name = t),
              (this.value = e),
              (this.namespaceURI = i != null ? i : ""))
            : ((this.name = t.name),
              (this.value = t.value),
              (this.namespaceURI =
                (n = t.namespaceURI) !== null && n !== void 0 ? n : ""));
        }
        static create(t) {
          let e = t.attributes,
            i = new csArray(e.length);
          for (let n = 0; n < i.length; n++) {
            let o = e[n];
            (i[n] = new s(o.name, o.value, o.namespaceURI)),
              o.name === "href" && lc(t) && (i[n].value = xh(t));
          }
          return i;
        }
      }
      return s;
    })(),
    Hl = { workTime: 40, async: !0, initialDOM: !0 },
    bE = { serialize: Bh() },
    Cr = csSymbol("InitialDom"),
    jl = csSymbol.for("ignoreNextSerialization");
  function jh(s) {
    return s[jl] ? (delete s[jl], !0) : !1;
  }
  function Bh(s = Hl) {
    return function (t, e) {
      var i;
      ((i = s.workTime) !== null && i !== void 0) || (s.workTime = Hl.workTime);
      let n = ii("serialize:callback", (_) => e(_)),
        o = new Hr(),
        c = (_, w) => {
          _.hasChildNodes() && o.push({ node: _, serializedNode: w });
          let T = _ instanceof Element && csElementshadowRoot.apply(_);
          if (T) {
            let M = (w.shadowRoot = Ir(T));
            s.async && s.initialDOM && Et.setProperty(T, Cr, !0), c(T, M);
          }
        },
        h,
        d = !0,
        S = 8,
        y = ii("work", () => {
          var _;
          if (d)
            (h = Ir(t)),
              s.async && s.initialDOM && Et.setProperty(t, Cr, !0),
              c(t, h),
              (d = !1);
          else if (o.isEmpty) return;
          let w = CE(100);
          for (; !o.isEmpty; ) {
            if (s.async && w.elapsed() >= s.workTime) {
              --S <= 0 && csSetTimeout(y);
              return;
            }
            let { node: T, serializedNode: M } = o.pop(),
              x = (_ = M.children) !== null && _ !== void 0 ? _ : [];
            if (zn(T)) continue;
            let P = 0;
            for (
              let N = csNodefirstChild.apply(T);
              N;
              N = csNodenextSibling.apply(N)
            ) {
              if (jh(N)) continue;
              let W = Ir(N);
              s.async && s.initialDOM && Et.setProperty(N, Cr, !0),
                (x[P++] = W),
                c(N, W);
            }
          }
          s.async ? csSetTimeout(() => n(h)) : e(h);
        });
      if (!s.async) (s.workTime = 1 / 0), y();
      else for (let _ = 0; _ < S; _++) csSetTimeout(y, 1);
    };
  }
  function TE(s) {
    let r = Ir(s),
      t = r;
    if (zn(s)) return r;
    let e = 0;
    for (let n = csNodefirstChild.apply(s); n; n = csNodenextSibling.apply(n))
      jh(n) || (t.children[e++] = ja(n));
    let i = s.shadowRoot;
    return i && (t.shadowRoot = ja(i)), r;
  }
  var ja = Ii(TE, "serializeSync");
  function Ir(s) {
    let r, t;
    switch (csNodenodeType.apply(s)) {
      case 1:
        (t = r = new Ie(s)), (r.attributes = IE(s));
        break;
      case 3:
        t = new Vh(s);
        break;
      case 4:
        t = new EE(s);
        break;
      case 8:
        t = new SE(s);
        break;
      case 10:
        t = new vE(s);
        break;
      case 9:
        t = new _E(s);
        break;
      case 11:
        t = new wE(s);
        break;
      default:
        throw new Error("Node type not supported: " + csNodenodeType.apply(s));
    }
    return t;
  }
  function RE() {
    Cr = csSymbol("InitialDom");
  }
  function CE(s) {
    if (s < 1) throw new Error("Precision should be >= 1");
    let r = 0,
      t = q.elapsed();
    return {
      started: t,
      elapsed() {
        return ++r % s === 0 && (t = q.elapsed()), t - this.started;
      },
    };
  }
  function IE(s) {
    return zn(s) ? [] : AE.create(s);
  }
  var Dc = (() => {
      class s {
        constructor(t) {
          (this.type = "asyncEvent"),
            (this.Yl = !1),
            t && t((e) => this.resolve(e));
        }
        resolve(t) {
          if (this.Yl) throw new Error("AsyncEvent already resolve.");
          t.timestamp == null && (t = { ...t, timestamp: this.timestamp }),
            (this.Uf = t),
            (this.Yl = !0),
            this.R && this.R(this.Uf);
        }
        complete(t) {
          this.Yl && t(this.Uf), (this.R = t);
        }
        wait() {
          return new Promise((t) => this.complete(t));
        }
      }
      return s;
    })(),
    ls = (() => {
      class s {
        constructor() {
          (this.ge = []), (this.isStarted = !1);
        }
        async produceEvent(t) {
          var e;
          this.isStarted &&
            ((t.timestamp =
              (e = t.timestamp) !== null && e !== void 0 ? e : q.now()),
            t.timestamp == null && (t.timestamp = q.now()),
            csArray.prototype.forEach.call(this.ge, (i) => i(t)));
        }
        onStop() {}
        start() {
          this.isStarted || ((this.isStarted = !0), this.onStart());
        }
        stop() {
          this.isStarted &&
            ((this.isStarted = !1), this.onStop(), (this.ge = []));
        }
        stopForInactivity() {
          this.isStarted && ((this.isStarted = !1), this.onStop());
        }
        subscribe(t) {
          return (
            csArray.prototype.push.call(this.ge, t),
            () => {
              let e = csArray.prototype.indexOf.call(this.ge, t);
              csArray.prototype.splice.call(this.ge, e, 1);
            }
          );
        }
      }
      return s;
    })(),
    PE = Bh(),
    OE = (() => {
      class s extends ls {
        constructor() {
          super(...arguments), (this.ra = !1);
        }
        onStart() {
          (this.ra = !0),
            (this.R = qy(this.i_, this)),
            (this.K = new yE(this.R)),
            this.K.observe();
          let t = Vt.mutations.initialDOM.asyncMeasure(),
            e = () => {
              (this.ra = !1), RE(), t();
            };
          this.produceEvent(
            new Dc((i) =>
              PE(document, (n) => {
                e(),
                  i({
                    type: "DomEvent",
                    domEvent: "initialDOM",
                    initialDOM: n,
                  });
              })
            )
          );
        }
        onStop() {
          var t, e;
          (this.ra = !1),
            (t = this.R) === null || t === void 0 || t.cancel(),
            (e = this.K) === null || e === void 0 || e.disconnect();
        }
        Qt(t, e) {
          let i = {
            type: "DomEvent",
            domEvent: e.type,
            target: 0,
            targetProps: {},
          };
          return (
            "target" in e &&
              ((i.target = At(e.target)),
              (i.targetProps = Et.getProperties(e.target))),
            [e, i]
          );
        }
        i_(t) {
          if (!this.r_(t))
            switch (t.type) {
              case "attributeChanged":
                {
                  let [e, i] = this.Qt(t.type, t);
                  (i.attribute = e.attribute),
                    (i.isSvg = ir(e.target)),
                    (i.namespace = e.namespace),
                    (i.newValue = e.newValue),
                    (i.oldValue = e.oldValue),
                    (i.localName = br(e.target)),
                    (i.linkRel = $u(e.target) ? e.target.rel : null),
                    (i.parentLocalName = e.target.parentElement
                      ? br(e.target.parentElement)
                      : void 0),
                    i.localName === "input" &&
                      (i.inputType = e.target.getAttribute("type")),
                    this.produceEvent(i);
                }
                break;
              case "characterDataChanged":
                {
                  let [e, i] = this.Qt(t.type, t);
                  (i.newValue = e.newValue),
                    (i.oldValue = e.oldValue),
                    (i.targetNodeType = csNodenodeType.apply(e.target)),
                    (i.parentLocalName = e.target.parentElement
                      ? br(e.target.parentElement)
                      : null),
                    (i.parentProps = e.target.parentElement
                      ? Et.getProperties(e.target.parentElement)
                      : void 0),
                    this.produceEvent(i);
                }
                break;
              case "nodesAdded": {
                let [e, i] = this.Qt(t.type, t);
                (i.targetLocalName = It(e.target) ? br(e.target) : null),
                  (i.nextSibling = e.nextSibling ? At(e.nextSibling) : null),
                  (i.previousSibling = e.previousSibling
                    ? At(e.previousSibling)
                    : null),
                  Vt.mutations.serializedMutations.measure(() => {
                    i.nodes = Ye(e.nodes, ja);
                  }),
                  this.produceEvent(i);
                break;
              }
              case "nodesMoved": {
                let [e, i] = this.Qt(t.type, t);
                (i.previousSibling = e.previousSibling
                  ? At(e.previousSibling)
                  : null),
                  (i.nextSibling = e.nextSibling ? At(e.nextSibling) : null),
                  (i.nodesIds = Ye(e.nodes, At)),
                  this.produceEvent(i);
                break;
              }
              case "nodesRemoved": {
                let [e, i] = this.Qt(t.type, t);
                (i.nodesIds = Ye(e.nodes, At)), this.produceEvent(i);
                break;
              }
              case "shadowRootAttached": {
                let [e, i] = this.Qt(t.type, t);
                (i.shadowRoot = Ir(e.shadowRoot)), this.produceEvent(i);
                break;
              }
              case "cssRuleInserted": {
                let [e, i] = this.Qt(t.type, t);
                (i.index = e.index), (i.rule = e.rule), this.produceEvent(i);
                break;
              }
              case "cssRuleDeleted": {
                let [e, i] = this.Qt(t.type, t);
                (i.index = e.index), this.produceEvent(i);
                break;
              }
              case "cssRuleUpdated": {
                let [e, i] = this.Qt(t.type, t);
                (i.rule = e.rule), (i.index = e.index), this.produceEvent(i);
                break;
              }
              case "cssStyleSheetDisabled": {
                let [e, i] = this.Qt(t.type, t);
                (i.disabled = e.disabled), this.produceEvent(i);
                break;
              }
              case "adoptedStyleSheetRegistered": {
                let [e, i] = this.Qt(t.type, t);
                (i.sheetId = e.sheetId),
                  (i.cssRules = e.cssRules),
                  (i.disabled = e.disabled),
                  this.produceEvent(i);
                break;
              }
              case "adoptedStyleSheetsSet": {
                let [e, i] = this.Qt(t.type, t);
                (i.sheetsIds = e.sheetsIds), this.produceEvent(i);
                break;
              }
              case "adoptedStyleSheetRuleInserted": {
                let [e, i] = this.Qt(t.type, t);
                (i.sheetId = e.sheetId),
                  (i.rule = e.rule),
                  (i.index = e.index),
                  this.produceEvent(i);
                break;
              }
              case "adoptedStyleSheetRuleDeleted": {
                let [e, i] = this.Qt(t.type, t);
                (i.sheetId = e.sheetId),
                  (i.index = e.index),
                  this.produceEvent(i);
                break;
              }
              case "adoptedStyleSheetRuleUpdated": {
                let [e, i] = this.Qt(t.type, t);
                (i.sheetId = e.sheetId),
                  (i.rule = e.rule),
                  (i.index = e.index),
                  this.produceEvent(i);
                break;
              }
              case "adoptedStyleSheetDisabled": {
                let [e, i] = this.Qt(t.type, t);
                (i.sheetId = e.sheetId),
                  (i.disabled = e.disabled),
                  this.produceEvent(i);
                break;
              }
            }
        }
        na(t) {
          return this.ra && !Et.getProperty(t, Cr);
        }
        r_(t) {
          switch (t.type) {
            case "nodesAdded":
            case "nodesMoved":
            case "nodesRemoved":
            case "shadowRootAttached":
              return (
                this.na(t.target) ||
                F.isMaskedElement(t.target) ||
                F.isMaskedElementChild(t.target)
              );
            case "characterDataChanged": {
              let e = t.target.parentElement;
              return (
                e !== null &&
                (this.na(e) ||
                  F.isMaskedElement(e) ||
                  F.isMaskedElementChild(e))
              );
            }
            case "attributeChanged":
              return (
                this.na(t.target) ||
                F.isMaskedElementChild(t.target) ||
                F.isMaskedAttribute(t.target, t.attribute)
              );
            case "cssRuleInserted":
            case "cssRuleDeleted":
            case "cssRuleUpdated":
            case "cssStyleSheetDisabled":
              return this.na(t.target) || F.isMaskedElementChild(t.target);
            default:
              return !1;
          }
        }
      }
      return s;
    })(),
    Ri = (() => {
      let s;
      return (
        (function (r) {
          function t(i) {
            return i.type === "DomEvent";
          }
          r.isDOMEvent = t;
          function e(i) {
            return i.domEvent === "attributeChanged";
          }
          r.isAttributeChangedEvent = e;
        })(s || (s = {})),
        s
      );
    })(),
    rr = (() => {
      class s {
        constructor() {
          this.ge = [];
        }
        start() {}
        stop() {
          (this.ge.length = 0), (this.ge = []);
        }
        pushEvent(t) {
          if ((s.pendingEvents++, this.isListening(t))) {
            let e = this.ge;
            csSetTimeout(() => {
              let n = ii("Processor:processEvent", (o) => this.processEvent(o))(
                t
              );
              n != null && csArray.prototype.forEach.call(e, (o) => o(n)),
                s.pendingEvents--;
            });
          } else
            csSetTimeout(() => {
              csArray.prototype.forEach.call(this.ge, (e) => e(t));
            });
        }
        subscribe(t) {
          return (
            csArray.prototype.push.call(this.ge, t),
            () => {
              this.ge = csArray.prototype.filter.call(this.ge, (e) => e !== t);
            }
          );
        }
        emitEvent(t) {
          ve(() => csArray.prototype.forEach.call(this.ge, (e) => e(t)));
        }
      }
      return (s.pendingEvents = 0), s;
    })(),
    NE = (() => {
      class s extends rr {
        isListening(t) {
          return (
            t.type === "DOM_PATCH" ||
            t.type === "DOM_INITIAL_STATE" ||
            (Ri.isDOMEvent(t) &&
              (t.domEvent === "initialDOM" || t.domEvent === "nodesAdded"))
          );
        }
        processEvent(t) {
          if (t.type === "DOM_PATCH" || t.type === "DOM_INITIAL_STATE")
            return this.processFastDOM(t), t;
          let e = 0,
            i = t.domEvent === "initialDOM" ? [t.initialDOM] : t.nodes;
          for (let n of i) {
            if (n instanceof Ie) {
              let c = F.getMaskedAttributeDetails(n);
              n.attributes = this.oa(n, c);
            }
            if (
              F.getMaskedElementDetails(n).state === F.MaskedElementState.Child
            ) {
              if (t.domEvent === "initialDOM") return null;
              t.nodes = csArray.prototype.filter.call(t.nodes, (c) => c !== n);
              continue;
            }
            Et.traverse(n, (c) => {
              if (c instanceof Ie) {
                let h = F.getMaskedAttributeDetails(c);
                c.attributes = this.oa(c, h);
                let d = F.getMaskedElementDetails(c);
                d.state === F.MaskedElementState.Parent && (this.aa(c, d), e++);
              }
            });
          }
          return (
            e > 0 && st.counters.sensitiveElements.count("masked-elements", e),
            t
          );
        }
        processFastDOM(t) {
          var e;
          let { MaskedElementState: i } = F,
            n = t.type === "DOM_PATCH" ? t.diff : t.state,
            o = t.state;
          for (let c in n) {
            let h = n[c],
              d = o[c],
              S = F.getMaskedElementDetails(d);
            if (S.state === i.Child) {
              delete n[c];
              continue;
            } else if (d.type !== 1) continue;
            let y = F.getMaskedAttributeDetails(d);
            for (let _ of (e = y.attributes) !== null && e !== void 0 ? e : [])
              h.attributes && delete h.attributes[_];
            S.state === i.Parent && this.aa(h, S);
          }
        }
        oa(t, e) {
          return e.attributes.length === 0
            ? t.attributes
            : csArray.prototype.filter.call(
                t.attributes,
                (i) =>
                  csArray.prototype.indexOf.call(e.attributes, i.name) === -1
              );
        }
        aa(t, e) {
          var i;
          let n = `width: ${e.width}px !important; height: ${e.height}px !important;`;
          "nodeType" in t
            ? ((t.children = []),
              (t.shadowRoot = void 0),
              csArray.prototype.push.call(t.attributes, {
                name: "style",
                value: n,
                namespaceURI: "",
              }),
              Ie.getAttribute(t, "data-cs-mask") ||
                csArray.prototype.push.call(t.attributes, {
                  name: "data-cs-mask",
                  value: "",
                  namespaceURI: "",
                }))
            : (((i = t.attributes) !== null && i !== void 0) ||
                (t.attributes = {}),
              delete t.firstChild,
              delete t.shadowRoot,
              (t.attributes.style = n),
              t.attributes["data-cs-mask"] ||
                (t.attributes["data-cs-mask"] = ""));
        }
      }
      return (
        xs(
          [Qt("MaskedElementProcessor.processEvent")],
          s.prototype,
          "processEvent",
          null
        ),
        s
      );
    })(),
    is = (() => {
      let s;
      return (
        (function (r) {
          (r.ANONYMIZED_TEXT_STATUS_PROP = "anonymizationStatus"),
            (r.WHITELISTED_STATUS = "whitelisted");
          function t(n) {
            return (
              Et.getProperty(n, r.ANONYMIZED_TEXT_STATUS_PROP) ===
              r.WHITELISTED_STATUS
            );
          }
          r.isWhitelistedElement = t;
          function e(n) {
            Et.setProperty(
              n,
              r.ANONYMIZED_TEXT_STATUS_PROP,
              r.WHITELISTED_STATUS
            );
          }
          r.whitelistElement = e;
          function i(n) {
            Et.setProperty(n, r.ANONYMIZED_TEXT_STATUS_PROP, void 0);
          }
          r.removeWhitelistElement = i;
        })(s || (s = {})),
        s
      );
    })(),
    ME =
      /[\u4E00-\u9FFF]|[\u3000-\u303F]|[\u3040-\u309F]|[\u30A0-\u30FF]|[\uFF00-\uFFEF]/g,
    DE = "\uFF41",
    kE = /[^ａ\s]/g,
    xE = "a";
  function ra(s) {
    let r = csString.prototype.replace.call(s, ME, DE);
    return csString.prototype.replace.call(r, kE, xE);
  }
  function LE(s, r) {
    let t = r === "number" ? "0" : "\u2022";
    return csString.prototype.replace.call(s, /\S/g, t);
  }
  var $h = (() => {
      class s {
        constructor(t, e, i, n = null, o = !1) {
          (this.us = t),
            (this._n = e),
            (this.O = i),
            (this.ca = n),
            (this.n_ = o),
            (this.wn = Ec(this._n));
        }
        sanitize(t, e) {
          return (
            Et.traverse(t, (i, n) => {
              if (((i.anonymized = this.us), i.nodeType === Ms.TEXT_NODE)) {
                let o = i,
                  { anonymizedValue: c, withAnonymization: h } =
                    this.getAnonymizedValue(
                      o.data,
                      n
                        ? n == null
                          ? void 0
                          : n.localName
                        : e == null
                        ? void 0
                        : e.targetLocalName,
                      n
                        ? Et.getProperties(n)
                        : e == null
                        ? void 0
                        : e.targetProps
                    );
                (i.anonymized = h), (o.data = c);
                return;
              }
              if (Ie.isElement(i)) return this.o_(i);
              if (i.nodeType === Ms.CDATA_SECTION_NODE) {
                let o = i;
                o.data = this.us
                  ? ra(o.data)
                  : this.O.checkAndAnonymizePII(o.data, this.ca);
                return;
              }
            }),
            t
          );
        }
        setAnonymization(t) {
          this.us = t;
        }
        getAnonymizedValue(t, e, i) {
          if (e === "style")
            return { anonymizedValue: t, withAnonymization: !1 };
          let n =
            (i == null ? void 0 : i[is.ANONYMIZED_TEXT_STATUS_PROP]) ===
            is.WHITELISTED_STATUS;
          return this.us && !n
            ? { anonymizedValue: ra(t), withAnonymization: !0 }
            : {
                anonymizedValue: this.O.checkAndAnonymizePII(t, this.ca),
                withAnonymization: !1,
              };
        }
        o_(t) {
          let e = sr(t.attributes, (n) => n.name === "type"),
            i = e == null ? void 0 : e.value;
          t.attributes = csArray.prototype.map.call(
            t.attributes,
            (n) => (
              (n.anonymized = this.us),
              (n.value = this.getAnonymizedAttributeValue(
                t.namespaceURI,
                t.localName,
                n.name,
                n.value,
                i
              )),
              n
            )
          );
        }
        getAnonymizedAttributeValue(t, e, i, n, o) {
          if (
            t === "http://www.w3.org/2000/svg" ||
            t === "svg" ||
            this.a_(e, i, o)
          )
            return n;
          if (Yp(i)) return Xp(e, i, n) ? this.O.anonymizePII(n) : n;
          let c = this.n_ && i === "placeholder";
          return this.us && (Kp(e, i, o) || c)
            ? ra(n)
            : this.us
            ? ""
            : this.O.checkAndAnonymizePII(n, null);
        }
        a_(t, e, i) {
          return Wp(t, e, i) || this.wn.has(e);
        }
      }
      return s;
    })(),
    Bl = (() => {
      class s {
        static create(t, e) {
          if (!s.isSupported())
            throw new Error("IntersectionObserver is not supported");
          if (e && e.delay && e.delay < 100)
            throw new Error("Visibility delay should be > 100ms");
          return (
            e != null && e.trackVisibility && (t = s.c_(t)),
            new csIntersectionObserver(t, e)
          );
        }
        static isSupported() {
          return (
            !!window.csIntersectionObserver &&
            !!window.IntersectionObserverEntry
          );
        }
        static c_(t) {
          return (e, i) => t(Ye(e, VE), i);
        }
      }
      return s;
    })();
  function VE(s) {
    return s.isVisible || !bt.isVisibleInViewportInForeground(s.target)
      ? s
      : {
          boundingClientRect: s.boundingClientRect,
          intersectionRatio: s.intersectionRatio,
          intersectionRect: s.intersectionRect,
          isIntersecting: s.isIntersecting,
          rootBounds: s.rootBounds,
          target: s.target,
          time: s.time,
          isVisible: !0,
        };
  }
  var Ba = () => (s, r, t) => {
    t.value = UE(t.value);
  };
  function UE(s) {
    let r = csSymbol("oncePerTickSymbol"),
      t = null,
      e = {},
      i = function () {
        var n;
        let o = (n = this) !== null && n !== void 0 ? n : e;
        if (((t = arguments), o[r])) return;
        (o[r] = !0),
          rc(() => {
            (o[r] = !1), s.apply(o, t);
          });
      };
    return (i.oncePerTickSymbol = r), i;
  }
  Ba.isScheduled = (s, r) => {
    let t = r.oncePerTickSymbol;
    return s[t];
  };
  var HE = (() => {
      class s {
        constructor(t) {
          (this.R = t),
            (this.Js = new Map()),
            (this.Hf = (e) => {
              let i = e.target;
              if (this.Js.has(i)) return !0;
              let n = !1;
              return (
                this.Js.forEach((o, c) => {
                  n || !this.Js.get(c).subtree || (n = c.contains(i));
                }),
                n
              );
            }),
            Vt.general.nbOfMutationObservers.increase(),
            (this.U = new csMutationObserver((e) => {
              Ba.isScheduled(this, this.garbageCollect) && (e = On(e, this.Hf)),
                e.length && ve(() => t(e, this));
            }));
        }
        disconnect() {
          Vt.general.nbOfMutationObservers.decrease(),
            this.U.disconnect(),
            (this.Js = new Map());
        }
        takeRecords() {
          return this.U.takeRecords();
        }
        observe(t, e) {
          return (
            Vt.mutations.elementMutationObserved.increase(),
            this.Js.set(t, e),
            this.U.observe(t, e)
          );
        }
        unobserve(t) {
          this.Js.has(t) &&
            (Vt.mutations.elementMutationObserved.decrease(),
            this.Js.delete(t),
            this.garbageCollect());
        }
        garbageCollect() {
          Vt.mutations.unobserveGarbageCollection.measure(() => {
            let t = On(this.takeRecords(), this.Hf);
            t.length && this.R(t, this),
              this.U.disconnect(),
              this.Js.forEach((e, i) => this.U.observe(i, e));
          });
        }
      }
      return vt([Ba()], s.prototype, "garbageCollect", null), s;
    })(),
    jE = (() => {
      class s {
        constructor(t) {
          (this.R = t), (this.ua = new Set());
        }
        onMutations(t) {
          if (
            Uu(t, (e) => {
              var i;
              return !!(
                !((i = e.removedNodes) === null || i === void 0) && i.length
              );
            })
          )
            for (let e of this.ua.values())
              bt.isConnected(e) || (this.ua.delete(e), this.R(e));
        }
        observe(t) {
          this.K ||
            ((this.K = new cs((e) => csSetTimeout(() => this.onMutations(e)))),
            this.K.observe()),
            this.ua.add(t);
        }
        disconnect() {
          var t;
          (t = this.K) === null || t === void 0 || t.disconnect(),
            this.ua.clear(),
            (this.K = void 0);
        }
      }
      return (
        vt(
          [$("NodeDisconnectedObserver.onMutations")],
          s.prototype,
          "onMutations",
          null
        ),
        s
      );
    })(),
    BE = 300,
    Hn = (() => {
      class s {
        constructor(t) {
          (this.ha = new Set()),
            (this.l_ = new jE((e) => this.jf(e))),
            (this.Rt = !1),
            (this.Ot = t ? { ...$l, ...t } : $l);
        }
        stop() {
          var t, e;
          (this.Rt = !1),
            (t = this.An) === null || t === void 0 || t.disconnect(),
            (e = this.U) === null || e === void 0 || e.disconnect();
        }
        start(t) {
          if (this.Rt) throw new Error("VisibilityObserver is already started");
          this.R = ii("VisibilityObserver:callback", (i, n) => t(i, n));
          let e = {
            root: null,
            rootMargin: "0px",
            threshold: 0.5,
            trackVisibility: !0,
            delay: BE,
          };
          (this.An = Bl.create((i) => this.handleIntersection(i), e)),
            (this.U = new HE((i) =>
              csSetTimeout(() => {
                pt(i, (n) => this.jf(n.target));
              })
            )),
            this.Xl(),
            (this.Rt = !0);
        }
        observe(t) {
          if (!this.Rt) throw new Error("Observer is stopped.");
          (this.Ot.reobserve === !1 && t[this.Kl]) ||
            (Vt.visibilityObserver.nbElements.increase(),
            (t[this.Kl] = !0),
            this.watchIntersection(t));
        }
        Xl() {
          (this.da = csSymbol("isVisible")),
            (this.Kl = csSymbol("ObservedElement")),
            (this.Jl = csSymbol("LinkedElement")),
            (this.Bf = csSymbol("Tracked"));
        }
        jf(t) {
          this.ha.add(t);
          for (let e of this.u_(t)) this.ha.add(e);
          this.recheckCssVisibilityAll();
        }
        recheckCssVisibilityAll() {
          pt(this.ha.keys(), (t) => {
            !t.isConnected ||
              bt.areAncestorsHiddenByCSS(t) ||
              (t[this.Kl] && this.watchIntersection(t));
          }),
            this.ha.clear();
        }
        watchIntersection(t) {
          this.U.unobserve(t), this.An.unobserve(t);
          let e = bt.getTopAncestorHiddenByCSS(t);
          e
            ? (e !== t && (this.$f(e, t), this.watchMutation(e)),
              this.watchMutation(t))
            : this.An.observe(t);
        }
        watchMutation(t, e = !0) {
          e && delete t[this.da], this.An.unobserve(t);
          let i = { attributeFilter: ["style", "class", "hidden"] };
          this.U.observe(t, i);
        }
        handleIntersection(t) {
          for (let e of t) {
            let i = e.target;
            if (!e.isVisible) {
              bt.isVisibleInDocument(i) || this.h_(i);
              continue;
            }
            let n = this.Ot.allowSameMatch || !e.target[this.da];
            (e.target[this.da] = !0),
              n &&
                !this.Ot.delay &&
                this.onVisibilityChanged(e.target, Pr.VisibleInViewPort);
          }
          this.Ot.delay &&
            csSetTimeout(() => {
              for (let e of t) {
                let i = e.isIntersecting && e.isVisible;
                e.target[this.da] &&
                  i &&
                  this.onVisibilityChanged(e.target, Pr.VisibleInViewPort);
              }
            }, this.Ot.delay);
        }
        h_(t) {
          Vt.visibilityObserver.hiddenElements.increase();
          let e = bt.getTopElement(t);
          this.watchMutation(t),
            e && (this.l_.observe(e), this.$f(e, t), this.watchMutation(e, !1));
        }
        $f(t, e) {
          var i;
          (t[this.Jl] =
            (i = t[this.Jl]) !== null && i !== void 0 ? i : new Set()).add(e);
        }
        u_(t) {
          var e, i;
          let n = [],
            o =
              (i =
                (e = t[this.Jl]) === null || e === void 0
                  ? void 0
                  : e.values()) !== null && i !== void 0
                ? i
                : [];
          return pt(o, (c) => csArray.prototype.push.call(n, c)), n;
        }
        onVisibilityChanged(t, e) {
          if (e === Pr.VisibleInViewPort && this.Ot.trackOnce) {
            if ((this.An.unobserve(t), this.U.unobserve(t), t[this.Bf])) return;
            t[this.Bf] = !0;
          }
          this.R(t, e);
        }
        static isSupported() {
          return Bl.isSupported();
        }
      }
      return (
        vt([$()], s.prototype, "observe", null),
        vt(
          [Yn({ wait: 50 }), $(), Qt("recheckCssVisibilityAll")],
          s.prototype,
          "recheckCssVisibilityAll",
          null
        ),
        vt([$()], s.prototype, "watchIntersection", null),
        vt([$()], s.prototype, "watchMutation", null),
        vt(
          [$(), Qt("VisibilityObserver.handleIntersection")],
          s.prototype,
          "handleIntersection",
          null
        ),
        vt([$()], s.prototype, "onVisibilityChanged", null),
        s
      );
    })(),
    Pr = (() => {
      let s;
      return (
        (function (r) {
          (r.VisibleInViewPort = "VisibleInViewPort"),
            (r.HiddenByAnother = "HiddenByAnother"),
            (r.Hidden = "Hidden");
        })(s || (s = {})),
        s
      );
    })(),
    $l = { delay: 1e3, trackOnce: !0, reobserve: !1 };
  var $E = (() => {
      let s;
      return (
        (function (r) {
          r.ENCRYPTED_NODE_PROP = "encrypted";
          function t(n) {
            return Et.getProperty(n, r.ENCRYPTED_NODE_PROP) === !0;
          }
          r.shouldEncrypt = t;
          function e(n) {
            Et.setProperty(n, r.ENCRYPTED_NODE_PROP, !0);
          }
          r.markEncryptedNode = e;
          function i(n) {
            Et.setProperty(n, r.ENCRYPTED_NODE_PROP, void 0);
          }
          r.unmarkEncryptedNode = i;
        })(s || (s = {})),
        s
      );
    })(),
    Ks = (() => {
      let s;
      return (
        (function (r) {
          r.EDITABLE_NODE_PROP = "editableNode";
          function t(n) {
            var o;
            return "nodeType" in n
              ? Et.getProperty(n, r.EDITABLE_NODE_PROP) === !0
              : ((o = n.metadata) === null || o === void 0
                  ? void 0
                  : o[r.EDITABLE_NODE_PROP]) === !0;
          }
          r.isEditableNode = t;
          function e(n) {
            Et.setProperty(n, r.EDITABLE_NODE_PROP, !0);
          }
          r.markEditableNode = e;
          function i(n) {
            Et.setProperty(n, r.EDITABLE_NODE_PROP, void 0);
          }
          r.unmarkEditableNode = i;
        })(s || (s = {})),
        s
      );
    })();
  var Fl = (() => {
    let s;
    return (
      (function (r) {
        function t(e) {
          return e.type === "TextVisibility";
        }
        r.isTextVisibilityEvent = t;
      })(s || (s = {})),
      s
    );
  })();
  function Gl(s) {
    var r;
    let t = (r = s.attributes) === null || r === void 0 ? void 0 : r.type;
    if (t != null)
      return csString.prototype.trim.call(
        csString.prototype.toLowerCase.call(t)
      );
  }
  var FE = (() => {
    class s extends rr {
      constructor(t, e, i = new ri(), n = null, o = !1) {
        super(),
          (this.O = i),
          (this.ca = n),
          (this.captureAnonymizedPlaceholders = o),
          (this.Sr = new $h(t, e, i, n, o));
      }
      setAnonymization(t) {
        this.Sr.setAnonymization(t);
      }
      isListening(t) {
        return (
          t.type === "DOM_PATCH" ||
          t.type === "DOM_INITIAL_STATE" ||
          Fl.isTextVisibilityEvent(t) ||
          (Ri.isDOMEvent(t) &&
            (t.domEvent === "initialDOM" ||
              t.domEvent === "nodesAdded" ||
              (Ri.isAttributeChangedEvent(t) &&
                typeof t.newValue == "string") ||
              t.domEvent === "characterDataChanged"))
        );
      }
      processEvent(t) {
        if (t.type === "DOM_PATCH" || t.type === "DOM_INITIAL_STATE")
          return this.f_(t);
        if (Fl.isTextVisibilityEvent(t))
          return (t.text = this.O.checkAndAnonymizePII(t.text, this.ca)), t;
        switch (t.domEvent) {
          case "initialDOM":
          case "nodesAdded":
            this.tu(t);
            break;
          case "attributeChanged":
            this.p_(t);
            break;
          case "characterDataChanged":
            this.g_(t);
            break;
        }
        return t;
      }
      f_(t) {
        var e, i;
        let n = t.type === "DOM_PATCH" ? t.diff : t.state,
          o = t.state;
        for (let c in n) {
          let h = o[c],
            d = o[h.parent];
          switch (h.type) {
            case Ms.TEXT_NODE:
            case Ms.COMMENT_NODE: {
              let S = n[c];
              if (ft(S.data)) {
                if (d.localName === "script") {
                  S.data = "";
                  continue;
                }
              } else continue;
              let { anonymizedValue: y, withAnonymization: _ } =
                this.Sr.getAnonymizedValue(
                  (e = S.data) !== null && e !== void 0 ? e : "",
                  d.localName,
                  d.metadata
                );
              (S.anonymized = _), (S.data = y);
              break;
            }
            case Ms.ELEMENT_NODE: {
              let S = n[c];
              if (S.attributes)
                for (let y in S.attributes) {
                  let _ = S.attributes[y],
                    w = Gl(h);
                  S.attributes[y] = this.Sr.getAnonymizedAttributeValue(
                    h.namespaceURI,
                    h.localName,
                    y,
                    _,
                    w
                  );
                }
              !((i = S.state) === null || i === void 0) &&
                i.value &&
                (S.state.value = LE(S.state.value, Gl(h)));
              break;
            }
          }
        }
        return t;
      }
      tu(t) {
        let e = t.domEvent === "initialDOM" ? [t.initialDOM] : t.nodes,
          i;
        t.domEvent === "nodesAdded" &&
          (i = {
            targetLocalName: t.targetLocalName,
            targetProps: t.targetProps,
          });
        for (let n of e) this.Sr.sanitize(n, i);
      }
      p_(t) {
        if (!t.isSvg && t.newValue) {
          if (t.localName === null) {
            t.newValue = "";
            return;
          }
          t.newValue = this.Sr.getAnonymizedAttributeValue(
            t.namespace,
            t.localName,
            t.attribute,
            t.newValue,
            t.inputType
          );
        }
      }
      g_(t) {
        t.newValue = this.Sr.getAnonymizedValue(
          t.newValue,
          t.parentLocalName,
          t.parentProps
        ).anonymizedValue;
      }
    }
    return (
      xs(
        [Qt("AnonymizedTextProcessor.processEvent")],
        s.prototype,
        "processEvent",
        null
      ),
      s
    );
  })();
  function zl(s) {
    return csString.prototype.replace.call(s, /[:\\]/g, "\\$&");
  }
  function GE(s, r) {
    let t = zl(r);
    return s ? `${zl(s)}:${t}` : t;
  }
  var Or = (() => {
    let s;
    return (
      (function (r) {
        (r[(r.ELEMENT_NODE = 1)] = "ELEMENT_NODE"),
          (r[(r.ATTRIBUTE_NODE = 2)] = "ATTRIBUTE_NODE"),
          (r[(r.TEXT_NODE = 3)] = "TEXT_NODE"),
          (r[(r.CDATA_SECTION_NODE = 4)] = "CDATA_SECTION_NODE"),
          (r[(r.COMMENT_NODE = 8)] = "COMMENT_NODE"),
          (r[(r.DOCUMENT_NODE = 9)] = "DOCUMENT_NODE"),
          (r[(r.DOCUMENT_TYPE_NODE = 10)] = "DOCUMENT_TYPE_NODE"),
          (r[(r.DOCUMENT_FRAGMENT_NODE = 11)] = "DOCUMENT_FRAGMENT_NODE"),
          (r[(r.CSS_STYLESHEET_NODE = 50)] = "CSS_STYLESHEET_NODE");
      })(s || (s = {})),
      s
    );
  })();
  function kc(s) {
    let r = csString.prototype.trim.call(s);
    if (s === "") return [];
    let [t, e] = zE(r);
    return e ? (er(t, ",") || (e = qE(e)), [ql(t), ...kc(e)]) : [ql(t)];
  }
  function zE(s) {
    return csString.prototype.split.call(s, /\s(.+)/);
  }
  function ql(s) {
    return csString.prototype.split.call(s, /,$/)[0];
  }
  function qE(s) {
    return csString.prototype.split.call(s, /,(.+)/)[1] || "";
  }
  var WE =
    /(@import\s*("([^"]+)"|'([^']+)'))|(url\s*\(\s*((("([^"\]]+)"|'([^'\]]+)')\s*)|([^)\]]+))\)(?!\\))/g;
  function YE(s, r) {
    return csString.prototype.replace.call(s, WE, (...e) => {
      let i = e[3] || e[4],
        n = e[9] || e[10] || e[11],
        o = KE((i || n).trim()),
        c = i ? "@import " : "",
        h = r(o) || o;
      return `${c}url(${XE(h)})`;
    });
  }
  function XE(s) {
    return csString.prototype.indexOf.call(s, '"') === -1
      ? `"${s}"`
      : csString.prototype.indexOf.call(s, "'") === -1
      ? `'${s}'`
      : s;
  }
  function Nr(s) {
    let r = new Set();
    return (
      YE(s, (t) => {
        var e, i;
        return (
          r.add(
            (i =
              (e = csString.prototype.match.call(t, /^["|'](.*)?["|']$/)) ===
                null || e === void 0
                ? void 0
                : e[1]) !== null && i !== void 0
              ? i
              : t
          ),
          t
        );
      }),
      Ds(r)
    );
  }
  function KE(s) {
    let r = /(\\)*\\(?:([a-fA-F0-9]{1,6})|(.))[\n\t\x20]?/g;
    return csString.prototype.replace.call(s, r, (t, e, i, n) => {
      if (e === "\\") return csString.prototype.slice.call(t, 1);
      if (n) return n;
      let o = parseInt(i, 16);
      return (55296 <= o && o <= 57343) || o === 0 || o > 1114111
        ? "\uFFFD"
        : csString.fromCodePoint(o);
    });
  }
  var Wl = (() => {
      class s {
        static async toStaticResourceEvent(t, e, i) {
          let n = await s.E_(t);
          if (!n) return null;
          let o = await s.qf(n),
            c = Le(t) ? void 0 : t,
            h = {
              type: "StaticResourceManagerEvent",
              timestamp: i,
              resourceId: e,
              resource: { hash: o, data: n },
            };
          return c && (h.originalResourceName = c), h;
        }
        static async toCSSStaticResourceEvent(t, e, i, n) {
          let o = await s.S_(t, n),
            c = Os(t),
            h = o.get(c);
          if (!h) return null;
          let d = {
            type: "StaticResourceManagerEvent",
            timestamp: i,
            resourceId: e,
            resource: { hash: h.hash, data: h.data },
          };
          return (
            o.delete(c),
            o.size &&
              ((d.nestedResources = []),
              o.forEach((S) => {
                S &&
                  csArray.prototype.push.call(d.nestedResources, {
                    hash: S.hash,
                    data: S.data,
                  });
              })),
            d
          );
        }
        static async qf(t) {
          let e = await t.arrayBuffer(),
            i = await crypto.subtle.digest(this.Wf, e);
          return ba(i);
        }
        static async E_(t) {
          let e;
          if (!Le(t)) e = await (await window.fetch(t)).blob();
          else {
            let i = Yc(t);
            if (!i) return null;
            e = i;
          }
          return e;
        }
        static async S_(t, e) {
          let i = new Map(),
            n = Os(t),
            c = [{ resourceRawPath: t, resourceAbsolutePath: n }];
          for (; c.length > 0; ) {
            let h = csArray.prototype.pop.call(c);
            if (
              !e &&
              h.resourceAbsolutePath !== null &&
              !Le(h.resourceAbsolutePath)
            ) {
              i.set(h.resourceAbsolutePath, null);
              continue;
            }
            if (i.get(h.resourceAbsolutePath) === void 0)
              try {
                if (
                  h.resourceRawPath === null ||
                  csString.prototype.indexOf.call(h.resourceRawPath, ".css") > 0
                ) {
                  if (!h.data) {
                    let w = await fetch(h.resourceAbsolutePath);
                    h.data = await w.text();
                  }
                  h.nestedResources || (h.nestedResources = Nr(h.data));
                  let y = !1,
                    _ = !1;
                  for (let w of h.nestedResources) {
                    let T = Le(w)
                        ? w
                        : h.resourceAbsolutePath
                        ? Np(w, h.resourceAbsolutePath)
                        : Os(w),
                      M = i.get(T);
                    if (M !== void 0) {
                      if (M !== null) {
                        let P = s.v_(M, w);
                        h.data = Jt.stringReplaceAll(h.data, w, P);
                      }
                      continue;
                    }
                    sr(c, (P) => P.resourceAbsolutePath === T) !== void 0 ||
                      ((y = !0),
                      _ || (csArray.prototype.push.call(c, h), (_ = !0)),
                      csArray.prototype.push.call(c, {
                        resourceRawPath: w,
                        resourceAbsolutePath: T,
                      }));
                  }
                  if (!y) {
                    let w = await s.__(h.data);
                    i.set(h.resourceAbsolutePath, {
                      hash: w.hash,
                      data: w.data,
                    });
                  }
                } else {
                  let y;
                  if (!Le(h.resourceAbsolutePath))
                    y = await (await fetch(h.resourceAbsolutePath)).blob();
                  else {
                    let w = Yc(h.resourceAbsolutePath);
                    if (!w) {
                      i.set(h.resourceAbsolutePath, null);
                      continue;
                    }
                    y = w;
                  }
                  let _ = await s.qf(y);
                  i.set(h.resourceAbsolutePath, { hash: _, data: y });
                }
              } catch {
                i.set(h.resourceAbsolutePath, null);
              }
          }
          return i;
        }
        static v_(t, e) {
          let i = `cs://resources/${t.hash}`;
          return Le(e) || (i += `?${s.su}=${e}`), i;
        }
        static async __(t) {
          let e = new Blob([t], { type: "text/css" }),
            i = await e.arrayBuffer(),
            n = await crypto.subtle.digest(s.Wf, i);
          return { data: e, hash: ba(n) };
        }
      }
      return (s.Wf = "SHA-256"), (s.su = "original-resource-name"), s;
    })(),
    na = GE("http://www.w3.org/1999/xlink", "href"),
    $a = (() => {
      class s extends rr {
        get busy() {
          return this.iu > 0;
        }
        constructor() {
          super(),
            (this.w_ = "cssrm://"),
            (this.A_ = 1),
            (this.hs = !1),
            (this.iu = 0);
        }
        isListening(t) {
          if (s.isSupported()) {
            if (t.type === "DOM_PATCH" || t.type === "DOM_INITIAL_STATE")
              return !0;
            if (!Ri.isDOMEvent(t)) return !1;
          } else return !1;
          return (
            t.domEvent === "initialDOM" ||
            t.domEvent === "nodesAdded" ||
            t.domEvent === "attributeChanged" ||
            t.domEvent === "characterDataChanged"
          );
        }
        processEvent(t) {
          if (t.type !== "DomEvent") return this.b_(t);
          switch (t.domEvent) {
            case "initialDOM":
            case "nodesAdded":
              this.T_(t);
              break;
            case "attributeChanged":
              this.R_(t);
              break;
            case "characterDataChanged":
              this.C_(t);
              break;
          }
          return t;
        }
        disableOnlineAssets() {
          this.hs = !1;
        }
        enableOnlineAssets() {
          this.hs = !0;
        }
        isOnlineAssetsActivated() {
          return this.hs;
        }
        b_(t) {
          var e;
          let i = t.type === "DOM_PATCH" ? t.diff : t.state;
          for (let n in i) {
            let o = i[n],
              c = t.state[n],
              h = t.state[c.parent];
            switch (c.type) {
              case Or.TEXT_NODE:
                this.Yf(o, h == null ? void 0 : h.localName);
                break;
              case Or.CSS_STYLESHEET_NODE: {
                if (((o = o), o.cssRules))
                  for (let d in o.cssRules) {
                    let S = o.cssRules[d],
                      y = this.vr(S);
                    y !== null && (o.cssRules[d] = y);
                  }
                break;
              }
              case Or.ELEMENT_NODE: {
                o = o;
                let d = o.attributes;
                if (!d) continue;
                if (
                  (d.style && (d.style = this.vr(d.style)),
                  (this.Xf(c.localName) ||
                    this.Kf(c.localName, h == null ? void 0 : h.localName)) &&
                    ("src" in d && (d.src = this.Zs(d.src)),
                    "srcset" in d && (d.srcset = this.ru(d.srcset))),
                  this.nu(c.localName) &&
                    ("href" in d && (d.href = this.Zs(d.href)),
                    na in d && (d[na] = this.Zs(d[na]))),
                  this.hs &&
                    c.localName === "link" &&
                    !((e = d.href) === null || e === void 0) &&
                    e.length &&
                    d.rel === "stylesheet")
                ) {
                  let S = this.Ni(Os(d.href), !0);
                  (d["data-cs-original-href"] = d.href), (d.href = S);
                }
              }
            }
          }
          return t;
        }
        T_(t) {
          let e = t.domEvent === "initialDOM" ? [t.initialDOM] : t.nodes;
          for (let i of e)
            Et.traverse(i, (n, o) => {
              if (n.nodeType === Ms.TEXT_NODE && o) {
                this.Yf(n, o.localName);
                return;
              }
              if (!Ie.isElement(n)) return;
              let c = Ie.getAttribute(n, "style");
              if (
                (c != null && c.value && (c.value = this.vr(c.value)),
                this.Xf(n.localName) ||
                  this.Kf(n.localName, o == null ? void 0 : o.localName))
              ) {
                let h = Ie.getAttribute(n, "src");
                h != null && h.value && (h.value = this.Zs(h.value));
                let d = Ie.getAttribute(n, "srcset");
                if (d) {
                  d.value = this.ru(d.value);
                  return;
                }
              }
              if (this.nu(n.localName)) {
                let h = Ie.getAttribute(n, "href");
                h != null && h.value && (h.value = this.Zs(h.value));
                let d = Ie.getAttribute(n, "xlink:href");
                d != null && d.value && (d.value = this.Zs(d.value));
              }
              if (this.I_(n) && this.hs) {
                let h = sr(n.attributes, (S) => S.name === "href");
                if (!h || !h.value) return;
                let d = this.Ni(Os(h.value), !0);
                csArray.prototype.push.call(n.attributes, {
                  name: "data-cs-original-href",
                  namespaceURI: "",
                  value: h.value,
                }),
                  (h.value = d);
              }
            });
        }
        Yf(t, e) {
          if (!t || e !== "style") return;
          let i = this.vr(t.data);
          i !== null && (t.data = i);
        }
        C_(t) {
          if (t.parentLocalName !== "style" || !t.newValue) return;
          let e = this.vr(t.newValue);
          e !== null && (t.newValue = e);
        }
        R_(t) {
          if (!t.newValue || t.newValue === t.oldValue) return;
          let e = t.attribute === "src",
            i = t.attribute === "srcset";
          if (t.attribute === "style") {
            t.newValue = this.vr(t.newValue);
            return;
          }
          if (t.attribute === "href" && this.nu(t.localName)) {
            t.newValue = this.Zs(t.newValue);
            return;
          }
          if (!e && !i) return;
          let c = t.localName === "img",
            h =
              t.localName === "source" &&
              t.parentLocalName &&
              t.parentLocalName === "picture";
          (!c && !h) ||
            (e && (t.newValue = this.Zs(t.newValue)),
            i && (t.newValue = this.ru(t.newValue)));
        }
        Zs(t) {
          return Le(t) || this.hs ? this.Ni(t, !1, q.now()) : t;
        }
        ru(t) {
          if (!this.hs) return t;
          let e = t,
            i = kc(t);
          for (let n of i) {
            let o = this.Ni(Os(n), !1);
            e = csString.prototype.replace.call(e, n, o);
          }
          return e;
        }
        vr(t) {
          let e = Nr(t),
            i = t,
            n = q.now();
          for (let o of e) {
            let c = Le(o);
            if (!(c || this.hs) || this.P_(o)) continue;
            let h = Fp(o),
              d = o;
            c
              ? (d = this.Ni(o, !1, n))
              : this.hs &&
                (h ? (d = this.Ni(o, !0, n)) : (d = this.Ni(Os(o), !1, n))),
              (i = csString.prototype.replace.call(i, o, d));
          }
          return i;
        }
        Ni(t, e, i = q.now()) {
          let n = this.A_++;
          this.iu++;
          let o = e ? Wl.toCSSStaticResourceEvent : Wl.toStaticResourceEvent,
            c = new Dc(async (h) => {
              try {
                let d = await o(t, n, i, this.hs);
                h(
                  d || {
                    type: "warning",
                    message: `Failed to process static resource: ${t}`,
                  }
                );
              } catch (d) {
                h({ type: "warning", message: d });
              } finally {
                this.iu--;
              }
            });
          return this.emitEvent(c), this.w_ + n;
        }
        Xf(t) {
          return t === "img";
        }
        nu(t) {
          return t === "image";
        }
        Kf(t, e) {
          return t === "source" && e === "picture";
        }
        I_(t) {
          return (
            t.localName === "link" &&
            csArray.prototype.some.call(
              t.attributes,
              (e) => e.name === "rel" && e.value === "stylesheet"
            )
          );
        }
        static isSupported() {
          return Lu() && $d() && !!csArray.from;
        }
        P_(t) {
          return csString.prototype.replace.call(t, /['"]+/g, "").length === 0;
        }
      }
      return (
        xs(
          [Qt("StaticResourceManagerProcessor.processEvent")],
          s.prototype,
          "processEvent",
          null
        ),
        s
      );
    })();
  function* JE(s, r) {
    for (let t of Object.values(s)) r(t) && (yield t);
  }
  var QE = (() => {
      class s extends rr {
        constructor(t) {
          super(), (this.Q = t);
        }
        isListening(t) {
          return (
            t.type === "DOM_INITIAL_STATE" ||
            (Ri.isDOMEvent(t) && t.domEvent === "initialDOM")
          );
        }
        processEvent(t) {
          if (Ri.isDOMEvent(t))
            t.initialDOM.baseURI = this.Q.anonymizeUrl(t.initialDOM.baseURI);
          else
            for (let e of JE(t.state, (i) => i.type === Or.DOCUMENT_NODE))
              e &&
                e.type === Or.DOCUMENT_NODE &&
                (e.baseURI = this.Q.anonymizeUrl(e.baseURI));
          return t;
        }
      }
      return (
        xs(
          [Qt("UrlAnonymizationProcessor.processEvent")],
          s.prototype,
          "processEvent",
          null
        ),
        s
      );
    })(),
    ZE = "textarea",
    tS = (() => {
      class s extends rr {
        isListening(t) {
          return (
            t.type === "DOM_PATCH" ||
            t.type === "DOM_INITIAL_STATE" ||
            (Ri.isDOMEvent(t) &&
              (t.domEvent === "initialDOM" ||
                t.domEvent === "nodesAdded" ||
                t.domEvent === "characterDataChanged"))
          );
        }
        processEvent(t) {
          if (t.type === "DOM_PATCH" || t.type === "DOM_INITIAL_STATE")
            return this.O_(t), t;
          switch (t.domEvent) {
            case "initialDOM":
            case "nodesAdded":
              this.N_(t);
              break;
            case "characterDataChanged":
              this.M_(t);
              break;
          }
          return t;
        }
        O_(t) {
          let e = t.type === "DOM_PATCH" ? t.diff : t.state,
            i = t.state;
          for (let n in e) {
            let o = e[n],
              c = i[n];
            if (!c.parent || !("data" in o) || c.type !== 3) continue;
            let h = i[c.parent];
            this.Jf(o, c.metadata, h.localName);
          }
        }
        N_(t) {
          let e = t.domEvent === "initialDOM" ? [t.initialDOM] : t.nodes;
          for (let i of e)
            Et.traverse(i, (n, o) => {
              var c;
              let h =
                  (c = o == null ? void 0 : o.localName) !== null &&
                  c !== void 0
                    ? c
                    : t.targetLocalName,
                d = n.props;
              n.nodeType === 3 && this.Jf(n, d, h);
            });
        }
        Jf(t, e, i) {
          this.Qf(i, e) && (t.data = this.Zf(t.data));
        }
        M_(t) {
          this.Qf(t.parentLocalName, t.targetProps) &&
            (t.newValue = this.Zf(t.newValue));
        }
        Zf(t) {
          return csString.prototype.replace.call(t, /\S/g, "\u2022");
        }
        Qf(t, e) {
          return (
            t === ZE || (e == null ? void 0 : e[Ks.EDITABLE_NODE_PROP]) === !0
          );
        }
      }
      return (
        xs(
          [Qt("AnonymizedEditableTextProcessor.processEvent")],
          s.prototype,
          "processEvent",
          null
        ),
        s
      );
    })(),
    Fh = !0,
    Rn = csSymbol("safe"),
    Yl = csSymbol("task");
  function Mt(s, r = Fh) {
    var t;
    ((t = s[Rn]) !== null && t !== void 0) ||
      (s[Rn] = function (e) {
        let i = arguments;
        ks(
          () => ((e[Yl] = Se), s.listener.apply(s.boundElement, i)),
          [He.EventListener, s.type],
          e[Yl]
        );
      }),
      s.boundElement.addEventListener(s.type, s[Rn], r);
  }
  function Dt(s, r = Fh) {
    s.boundElement.removeEventListener(s.type, s[Rn], r);
  }
  var eS = (() => {
      class s {
        constructor(t) {
          (this.R = t),
            (this.Zt = {
              boundElement: window,
              type: "resize",
              listener: () => this.resizeListener(),
            }),
            (this.R = t);
        }
        observe() {
          Mt(this.Zt), this.ou();
        }
        ou() {
          this.resizeListener();
        }
        disconnect() {
          Dt(this.Zt);
        }
        resizeListener() {
          let t = { width: qt.windowWidth(), height: qt.windowHeight() };
          this.R(t);
        }
      }
      return vt([$("resize")], s.prototype, "resizeListener", null), s;
    })(),
    Xs = (() => {
      let s;
      return (
        (function (r) {
          (r.PORTRAIT = "Portrait"), (r.LANDSCAPE = "Landscape");
        })(s || (s = {})),
        s
      );
    })(),
    mn = (() => {
      let s;
      return (
        (function (r) {
          (r.PORTRAIT_PRIMARY = "portrait-primary"),
            (r.PORTRAIT_SECONDARY = "portrait-secondary"),
            (r.LANDSCAPE_PRIMARY = "landscape-primary"),
            (r.LANDSCAPE_SECONDARY = "landscape-secondary");
        })(s || (s = {})),
        s
      );
    })(),
    yn = (() => {
      let s;
      return (
        (function (r) {
          (r[(r.PORTRAIT = 0)] = "PORTRAIT"),
            (r[(r.PORTRAIT_REVERSE = 180)] = "PORTRAIT_REVERSE"),
            (r[(r.LANDSCAPE = -90)] = "LANDSCAPE"),
            (r[(r.LANDSCAPE_REVERSE = 90)] = "LANDSCAPE_REVERSE");
        })(s || (s = {})),
        s
      );
    })(),
    sS = (() => {
      let s;
      return (
        (function (r) {
          let t = null;
          (r.isScreenOrientationApiSupported = () => {
            var c;
            return t != null
              ? t
              : (t = !!(
                  !((c = gt.screen) === null || c === void 0) && c.orientation
                ));
          }),
            (r.isDeprecatedScreenOrientationApiSupported = () =>
              "orientation" in gt);
          function e() {
            return Xs.LANDSCAPE;
          }
          function i() {
            var c;
            switch (
              (c = gt.screen.orientation) === null || c === void 0
                ? void 0
                : c.type
            ) {
              case mn.PORTRAIT_PRIMARY:
              case mn.PORTRAIT_SECONDARY:
                return Xs.PORTRAIT;
              case mn.LANDSCAPE_PRIMARY:
              case mn.LANDSCAPE_SECONDARY:
                return Xs.LANDSCAPE;
              default:
                return Xs.PORTRAIT;
            }
          }
          function n() {
            switch (window.orientation) {
              case yn.PORTRAIT:
              case yn.PORTRAIT_REVERSE:
                return Xs.PORTRAIT;
              case yn.LANDSCAPE:
              case yn.LANDSCAPE_REVERSE:
                return Xs.LANDSCAPE;
              default:
                return Xs.PORTRAIT;
            }
          }
          function o() {
            return r.isScreenOrientationApiSupported()
              ? i()
              : r.isDeprecatedScreenOrientationApiSupported()
              ? n()
              : e();
          }
          r.getCurrentOrientation = o;
        })(s || (s = {})),
        s
      );
    })(),
    iS = (() => {
      class s extends ls {
        constructor() {
          super(...arguments),
            (this.au = null),
            (this.lu = null),
            (this.ti = new eS((t) => {
              this.produceEvent({ ...t, type: "viewportResize" }),
                this.onScreenPotentiallyChanged();
            }));
        }
        onScreenPotentiallyChanged() {
          let t = sS.getCurrentOrientation(),
            { screenWidth: e, screenHeight: i } = this.D_(t);
          if (e !== this.au || i !== this.lu) {
            (this.au = e), (this.lu = i);
            let n = { type: "screenResize", width: e, height: i };
            this.produceEvent(n);
          }
        }
        D_(t) {
          let e,
            i,
            n = qt.screenWidth(),
            o = qt.screenHeight();
          return (
            t === Xs.PORTRAIT
              ? ((e = n), (i = o))
              : ((e = Math.max(n, o)), (i = Math.min(n, o))),
            { screenWidth: e, screenHeight: i }
          );
        }
        onStart() {
          this.ti.observe();
        }
        onStop() {
          (this.au = null), (this.lu = null), this.ti.disconnect();
        }
      }
      return s;
    })(),
    Ke = (() => {
      class s {
        get selectors() {
          return this.Ye === "" ? null : this.Ye;
        }
        constructor(t, e = { closest: !1 }) {
          (this.R = t),
            (this.Ot = e),
            (this.Ye = ""),
            (this.Tn = new Qn()),
            (this.fa = Ii((i) => {
              if (this.Ye === "") return;
              let n = [];
              for (let o of ac(i, (c) => c.addedNodes)) {
                if (!(Sf(o) || (this.Ot.closest && Nn(o)))) continue;
                let c = this.Ot.closest
                  ? this.k_(o, this.Ye)
                  : this.findMatchingElements(o, this.Ye);
                Qc(c, n);
              }
              n.length && this.R(n, "added");
            }, "SelectorObserver.processMutations")),
            (this.x_ = (i, n) => {
              if (this.Ye === "" || n !== "added") return;
              let o = this.findMatchingElements(i, this.Ye);
              o.length && this.R(o, "added");
            }),
            (this.K = new cs(this.fa, this.x_));
        }
        observe(t) {
          this.Ye === "" ? this.K.observe() : (this.Ye += ","), (this.Ye += t);
          let e = this.findMatchingElements(document, t);
          for (let i of this.K.shadowRoots) {
            let n = this.findMatchingElements(i, t);
            Qc(n, e);
          }
          e.length &&
            (pt(e, (i) => {
              this.Tn.add(i);
            }),
            this.R(e, "initial"));
        }
        processPendingMutations() {
          this.fa(this.K.takeRecords());
        }
        disconnect() {
          this.K.disconnect(), this.Tn.clear(), (this.Ye = "");
        }
        k_(t, e) {
          let i = [];
          if (Nn(t)) {
            if (t.parentElement) {
              let n = Qi(t.parentElement, e);
              n && csArray.prototype.push.call(i, n);
            }
            return csArray.prototype.filter.call(
              i,
              (n) => this.Tn.has(n) === !1
            );
          } else {
            if (si(t)) {
              let n = Qi(t, e);
              if (n)
                return (
                  csArray.prototype.push.call(i, n),
                  csArray.prototype.filter.call(i, (o) => this.Tn.has(o) === !1)
                );
            }
            return this.findMatchingElements(t, e);
          }
        }
        findMatchingElements(t, e) {
          let i = Dr(window.csquerySelectorAll[t.nodeType].call(t, e));
          return (
            It(t) && Pe.call(t, e) && csArray.prototype.push.call(i, t),
            csArray.prototype.filter.call(i, (n) => this.Tn.has(n) === !1)
          );
        }
      }
      return (
        vt([$()], s.prototype, "observe", null),
        vt([$()], s.prototype, "disconnect", null),
        vt(
          [Qt("SelectorObserver.findMatchingElements")],
          s.prototype,
          "findMatchingElements",
          null
        ),
        s
      );
    })(),
    rS = (() => {
      class s extends ls {
        constructor() {
          super(),
            (this.tp = (t) => {
              let e = Gt(t);
              e && this.hu(e, t.type);
            }),
            (this.pe = new Oi((t, e) => {
              switch (e) {
                case "initial":
                case "added":
                  this.ep(t);
                  break;
                case "removed":
                  this.sp(t);
                  break;
              }
            })),
            (this.W = new Ke((t, e) => {
              (e === "initial" || e === "added") && this.L_(t);
            }));
        }
        static shouldProcessElement(t) {
          return (
            t.tagName === "VIDEO" &&
            bt.isConnected(t) &&
            !F.isMaskedElement(t) &&
            !F.isMaskedElementChild(t)
          );
        }
        static isPlaying(t) {
          return !t.paused && !t.ended;
        }
        onStart() {
          this.ep(document), this.pe.observe(), this.W.observe("video");
        }
        onStop() {
          this.sp(document), this.pe.disconnect(), this.W.disconnect();
        }
        hu(t, ...e) {
          if (this.isStarted && s.shouldProcessElement(t))
            for (let i of e) {
              let n = At(t),
                o = { type: "VideoEvent", videoEventType: i, nodeId: n };
              i === "seeked" && (o.newTimePositionInSec = t.currentTime),
                rc(() => this.produceEvent(o));
            }
        }
        L_(t) {
          for (let e of t)
            this.hu(e, "seeked"), s.isPlaying(e) && this.hu(e, "play");
        }
        ep(t) {
          for (let e of ["play", "pause", "seeked"])
            Mt({ type: e, listener: this.tp, boundElement: t });
        }
        sp(t) {
          for (let e of ["play", "pause", "seeked"])
            Dt({ type: e, listener: this.tp, boundElement: t });
        }
      }
      return s;
    })();
  function nS(s) {
    return s.nodeName === "SELECT";
  }
  function xc(s) {
    return s.nodeName === "INPUT";
  }
  function oS(s) {
    return s.nodeName === "TEXTAREA" || (xc(s) && !Gh(s) && !zh(s));
  }
  function Gh(s) {
    return xc(s) && s.type === "number";
  }
  function zh(s) {
    return xc(s) && (s.type === "checkbox" || s.type === "radio");
  }
  var aS = (() => {
    class s extends ls {
      constructor(t, e = []) {
        super(),
          (this.lt = t),
          (this.V_ = e),
          (this.du = new nE("low")),
          (this._r = (i) => this.inputHandler(i)),
          (this.pa = []),
          (this.fu = new Map()),
          this.U_(),
          this.H_(),
          (this.W = new Ke((i) => {
            for (let n of i) {
              if (n instanceof HTMLInputElement)
                for (let o of this.V_) this.j_(n, o);
              this.pu(n) &&
                ve(() => {
                  this.gu(n, At(n));
                }, "low");
            }
          })),
          (this.pe = new Oi((i, n) => {
            switch (n) {
              case "initial":
              case "added":
                Mt({ type: "change", listener: this._r, boundElement: i });
                break;
              case "removed":
                Dt({ type: "change", boundElement: i, listener: this._r });
                break;
            }
          }));
      }
      j_(t, e) {
        let i = this.fu.get(e);
        if (!i) (i = new WeakSet()), this.fu.set(e, i);
        else if (i.has(t)) return;
        i.add(t);
        let n = iE(t, e, (o, c, h) => {
          h !== c && bt.isConnected(o) && this.ip(o);
        });
        n &&
          (this.isStarted && n.activate(),
          csArray.prototype.push.call(this.pa, n));
      }
      onStart() {
        Mt({ type: "keyup", boundElement: document, listener: this._r }),
          Mt({ type: "change", boundElement: document, listener: this._r }),
          pt(this.pa, (t) => t.activate()),
          this.W.observe(csArray.prototype.join.call(s.B_, ",")),
          this.pe.observe();
      }
      onStop() {
        Dt({ type: "keyup", boundElement: document, listener: this._r }),
          Dt({ type: "change", boundElement: document, listener: this._r }),
          pt(this.pa, (t) => t.deactivate()),
          this.W.disconnect(),
          this.pe.disconnect(),
          this.du.clear(),
          this.fu.clear();
      }
      gu(t, e) {
        var i, n, o;
        if (this.du.has(t)) return;
        if ((this.du.add(t), nS(t))) {
          let d = {
            type: "InputEvent",
            inputType: "select",
            target: At(t),
            selectedIndex: t.selectedIndex,
            timestamp: q.now(),
          };
          this.produceEvent(d);
          return;
        }
        if (zh(t)) {
          let d = {
            type: "InputEvent",
            inputType: "checkable",
            target: At(t),
            checked: t.checked,
            timestamp: q.now(),
          };
          this.produceEvent(d);
          return;
        }
        let c = oS(t),
          h = Gh(t);
        if (c || h) {
          let d = (i = t.value) !== null && i !== void 0 ? i : "";
          if (!((n = this.lt) === null || n === void 0) && n.shouldEncrypt(t)) {
            (o = this.lt) === null ||
              o === void 0 ||
              o.registerInputNodeToEncrypt({
                targetId: e,
                targetValue: d,
                date: q.now(),
              });
            return;
          }
          let S = h ? "0" : "\u2022",
            y = {
              type: "InputEvent",
              inputType: "text",
              target: At(t),
              value: csString.prototype.replace.call(d, /\S/g, S),
              timestamp: q.now(),
            };
          this.produceEvent(y);
        }
      }
      inputHandler(t) {
        if (!this.isStarted) return;
        let e = Gt(t),
          i = At(e);
        !i ||
          !this.pu(e) ||
          (bt.isConnected(e) &&
            ve(() => {
              this.gu(e, i);
            }, "low"));
      }
      U_() {
        this.trackChanges(HTMLInputElement, "checked"),
          this.trackChanges(HTMLInputElement, "value"),
          this.trackChanges(HTMLTextAreaElement, "value");
      }
      H_() {
        this.trackChanges(HTMLSelectElement, "selectedIndex"),
          this.trackChanges(HTMLSelectElement, "value"),
          this.trackChanges(HTMLOptionElement, "selected", !0);
      }
      trackChanges(t, e, i = !1) {
        let n = Vr(t.prototype, e, (o, c, h) => {
          if (h !== c && bt.isConnected(o)) {
            let d = i ? o.parentElement : o;
            this.ip(d);
          }
        });
        n && csArray.prototype.push.call(this.pa, n);
      }
      pu(t) {
        return (
          !F.isMaskedElement(t) &&
          !F.isMaskedElementChild(t) &&
          (Gn(t) || hc(t) || uc(t))
        );
      }
      ip(t) {
        if (this.isStarted && bt.isConnected(t)) {
          let e = At(t);
          e &&
            this.pu(t) &&
            ve(() => {
              this.gu(t, e);
            }, "low");
        }
      }
    }
    return (
      (s.B_ = [
        "textarea",
        "input:not([type])",
        'input[type="text"]',
        'input[type="email"]',
        'input[type="search"]',
        'input[type="tel"]',
        'input[type="url"]',
        'input[type="password"]',
        'input[type="number"]',
        'input[type="checkbox"]',
        'input[type="radio"]',
        "select",
      ]),
      xs([Rt()], s.prototype, "inputHandler", null),
      xs([$()], s.prototype, "trackChanges", null),
      s
    );
  })();
  var cS = (() => {
      class s {
        constructor(t = Number.POSITIVE_INFINITY) {
          (this.ei = []), (this.nt = []), (this.$_ = t);
        }
        next(t) {
          this.nt.length === this.$_ && csArray.prototype.shift.call(this.nt),
            csArray.prototype.push.call(this.nt, t),
            this.nt.length === 1 && csSetTimeout(() => this.clear());
          for (let e of this.ei) e(t);
        }
        subscribe(t) {
          if (sr(this.ei, (i) => t === i))
            return () => {
              this.ei = csArray.prototype.filter.call(this.ei, (i) => i !== t);
            };
          csArray.prototype.push.call(this.ei, t);
          for (let i of this.nt) t(i);
          return () => {
            this.ei = csArray.prototype.filter.call(this.ei, (i) => i !== t);
          };
        }
        clear() {
          this.nt = [];
        }
        hasObservers() {
          return this.ei.length > 0;
        }
      }
      return s;
    })(),
    qh = (() => {
      var s;
      class r {
        constructor(e) {
          this.R = e;
        }
        observe() {
          (this.F_ = s.Rn.subscribe((e) => this.R(e))),
            s.ga ||
              ((s.ga = !0),
              s.bn.observe(),
              _e(document, NodeFilter.SHOW_ELEMENT).visitAll((i) => {
                s.Ts.add(i), s.Rn.next(i);
              }));
        }
        disconnect() {
          s.ga &&
            (this.F_(),
            s.Rn.hasObservers() ||
              ((s.ga = !1), s.bn.disconnect(), s.Rn.clear(), s.Ts.clear()));
        }
      }
      return (
        (s = r),
        (r.Ts = new Qn()),
        (r.Rn = new cS()),
        (r.G_ = Ii((t) => {
          ve(() => {
            for (let e of t)
              e.type === "childList" &&
                pt(e.addedNodes, (i) => {
                  _e(i, NodeFilter.SHOW_ELEMENT).visitAll((o) => {
                    s.Ts.has(o) || (s.Ts.add(o), s.Rn.next(o));
                  });
                });
          });
        }, "ElementObserver.findAllElements")),
        (r.ga = !1),
        (r.bn = new cs(s.G_)),
        vt([$()], r.prototype, "observe", null),
        vt([$()], r.prototype, "disconnect", null),
        r
      );
    })(),
    lS = (() => {
      class s extends ls {
        constructor() {
          super(),
            (this.Mi =
              typeof window.customElements == "object" &&
              typeof window.customElements.whenDefined == "function" &&
              typeof window.Promise == "function"),
            (this.z_ = ii(
              "CustomElementRegistrationProducer:onElementsFound",
              (e) => {
                for (let i of e)
                  F.isMaskedElement(i) ||
                    F.isMaskedElementChild(i) ||
                    (_f(i) &&
                      this.register(
                        csString.prototype.toLowerCase.call(i.tagName)
                      ));
              }
            ));
          let t = Zn(this.z_);
          (this.Cn = new qh((e) => t.push(e))), (this.Qs = new Set());
        }
        onStart() {
          this.Mi && this.Cn.observe();
        }
        onStop() {
          this.Qs.clear(), this.Cn.disconnect();
        }
        async register(t) {
          this.Qs.has(t) ||
            (this.Qs.add(t),
            await window.customElements.whenDefined(t),
            this.produceEvent({
              type: "CustomElementRegistration",
              tagName: csString.prototype.toLowerCase.call(t),
            }));
        }
      }
      return xs([$()], s.prototype, "register", null), s;
    })(),
    Xl = (() => {
      class s {
        static isNavigationTimingObserverSupported() {
          var t, e;
          return (
            (((t = window.PerformanceObserver) === null || t === void 0
              ? void 0
              : t.supportedEntryTypes) == null
              ? void 0
              : csArray.prototype.indexOf.call(
                  (e = window.PerformanceObserver) === null || e === void 0
                    ? void 0
                    : e.supportedEntryTypes,
                  "navigation"
                )) >= 0
          );
        }
        static getTimeOrigin() {
          return window.performance.timeOrigin;
        }
        static rp() {
          if (this.isNavigationTimingObserverSupported())
            return new window.PerformanceObserver((t) => s.q_(t));
        }
        static q_(t) {
          let i = t.getEntriesByType("navigation")[0];
          i && ((this.Di = i), s.wr(i));
        }
        static dn(t) {
          this.W_(t), this.Di && t(this.Di), this.je || this.Y_();
        }
        static W_(t) {
          this.Lt.add(t);
        }
        static X_(t) {
          this.Lt.delete(t);
        }
        static Y_() {
          if ((this.In || (this.In = this.rp()), !this.In)) {
            this.Di ||
              (this.Di = {
                requestStart: window.performance.timing.requestStart,
                domInteractive: window.performance.timing.domInteractive,
              }),
              this.wr(this.Di);
            return;
          }
          this.In.observe({ type: "navigation", buffered: !0 }), (this.je = !0);
        }
        static wr(t) {
          this.Lt.forEach((e) => e(t));
        }
        static Sn(t) {
          this.X_(t), this.Lt.size === 0 && this.Pn();
        }
        static Pn() {
          var t;
          this.je &&
            ((t = this.In) === null || t === void 0 || t.disconnect(),
            (this.je = !1),
            (this.Di = null),
            (this.In = this.rp()));
        }
        constructor(t) {
          this.R = t;
        }
        observe() {
          s.dn(this.R);
        }
        disconnect() {
          s.Sn(this.R);
        }
      }
      return (s.je = !1), (s.Lt = new Set()), (s.Di = null), s;
    })(),
    uS = (() => {
      class s extends ls {
        constructor() {
          super(...arguments),
            (this.ma = null),
            (this.np = new Xl((t) => {
              if (this.ma) return;
              let e = this.K_(t);
              e && ((this.ma = e), this.produceEvent(e));
            }));
        }
        onStart() {
          if (this.ma) {
            this.produceEvent(this.ma);
            return;
          }
          this.np.observe();
        }
        onStop() {
          this.np.disconnect();
        }
        K_(t) {
          let e = Xl.getTimeOrigin();
          return {
            type: "PerformanceTiming",
            timings: {
              timeOrigin: e,
              requestStart: Math.floor(e + t.requestStart),
              domInteractive: Math.floor(e + t.domInteractive),
            },
            timestamp: q.now(),
          };
        }
      }
      return s;
    })(),
    zt = (() => {
      let s;
      return (
        (function (r) {
          (r[(r.TAP = 0)] = "TAP"),
            (r[(r.LONG_PRESS = 1)] = "LONG_PRESS"),
            (r[(r.DRAG = 2)] = "DRAG"),
            (r[(r.FLICK = 3)] = "FLICK"),
            (r[(r.PINCH_IN = 4)] = "PINCH_IN"),
            (r[(r.PINCH_OUT = 5)] = "PINCH_OUT");
        })(s || (s = {})),
        s
      );
    })(),
    En = (() => {
      let s;
      return (
        (function (r) {
          (r[(r.UP = 1)] = "UP"),
            (r[(r.DOWN = 2)] = "DOWN"),
            (r[(r.LEFT = 3)] = "LEFT"),
            (r[(r.RIGHT = 4)] = "RIGHT");
        })(s || (s = {})),
        s
      );
    })(),
    hS = (() => {
      class s {
        compute(t, e) {
          let i = this.si(e.x) - this.si(t.x),
            n = this.si(e.y) - this.si(t.y),
            o = e.time - t.time;
          return {
            duration: o,
            distance: this.op(i, n),
            direction: this.J_(i, n),
            velocity: this.Q_(i, n, o),
          };
        }
        computePinchMetrics(t, e) {
          let i = this.si(e.x) - this.si(t.x),
            n = this.si(e.y) - this.si(t.y);
          return { duration: e.time - t.time, distance: this.op(i, n) };
        }
        getScale(t, e) {
          return Math.abs(e / t - 1);
        }
        si(t) {
          return t / window.devicePixelRatio;
        }
        op(t, e) {
          return Math.round(Math.sqrt(t * t + e * e));
        }
        Q_(t, e, i) {
          let n = i / 1e3,
            o = t / n,
            c = e / n;
          return Math.round(Math.abs(o) + Math.abs(c));
        }
        J_(t, e) {
          return Math.abs(t) > Math.abs(e)
            ? t > 0
              ? En.RIGHT
              : En.LEFT
            : e > 0
            ? En.DOWN
            : En.UP;
        }
      }
      return s;
    })();
  function Kl(s, r = 0) {
    let t = Math.pow(10, r);
    return Math.round(s * t) / t;
  }
  var dS = 1e3,
    fS = 100,
    pS = 0.1,
    Fa = (() => {
      class s {
        constructor() {
          (this.te = {}), (this.mu = () => {}), (this.ya = new hS()), this.ap();
        }
        static isGestureDetectionSupported() {
          return typeof devicePixelRatio != "undefined";
        }
        onGesture(t) {
          this.mu = t;
        }
        isValidTouchEvent(t) {
          return "touches" in t && "changedTouches" in t;
        }
        processActionDown(t) {
          if (!this.Z_(t)) return;
          this.tw(t) && this.ap();
          let e = {
            x: t.touches[0].clientX,
            y: t.touches[0].clientY,
            time: q.now(),
          };
          if (t.touches.length === 1)
            (this.te.startPinchTime = e.time), (this.te.firstTouch = e);
          else if (
            t.touches.length === 2 &&
            ((this.te.secondTouch = {
              x: t.touches[1].clientX,
              y: t.touches[1].clientY,
              time: q.now(),
            }),
            this.te.firstTouch && this.te.secondTouch)
          ) {
            let i = this.ya.computePinchMetrics(
              this.te.firstTouch,
              this.te.secondTouch
            );
            this.Ar = i.distance;
          }
          csArray.prototype.push.call(this.On, e), (this.Ea = Gt(t));
        }
        processActionMove() {
          this.yu = !0;
        }
        processActionUp(t) {
          if (this.ew(t)) {
            if (
              (csArray.prototype.push.call(this.On, {
                x: t.changedTouches[0].clientX,
                y: t.changedTouches[0].clientY,
                time: q.now(),
              }),
              this.iw(t) && this.te.startPinchTime)
            ) {
              let e = {
                  x: t.touches[0].clientX,
                  y: t.touches[0].clientY,
                  time: this.te.startPinchTime,
                },
                i = {
                  x: t.changedTouches[0].clientX,
                  y: t.changedTouches[0].clientY,
                  time: q.now(),
                };
              this.te.firstTouch &&
                ((this.te.firstTouch = e), (this.te.secondTouch = i)),
                this.rw(t);
            }
            this.Ar || (this.nw() && this.ow(t));
          }
        }
        ap() {
          (this.On = []),
            (this.Ea = null),
            (this.yu = !1),
            (this.Ar = null),
            (this.Nn = !0);
        }
        ow(t) {
          let e = this.ya.compute(this.On[0], this.On[1]);
          this.Nn = t.isTrusted;
          let i = this.yu ? this.aw(e) : this.lw(e);
          if (this.uw(i.type, t.changedTouches)) {
            let n = t.changedTouches[0];
            (i.pageX = Kl(n.pageX, 1)), (i.pageY = Kl(n.pageY, 1));
          }
          this.mu(i, t);
        }
        rw(t) {
          if (!(this.te.firstTouch && this.te.secondTouch)) return;
          let e = this.ya.computePinchMetrics(
            this.te.firstTouch,
            this.te.secondTouch
          );
          this.Nn = t.isTrusted;
          let i = this.hw(e);
          i && this.mu(i, t);
        }
        hw(t) {
          return !this.Ar || this.ya.getScale(this.Ar, t.distance) < pS
            ? void 0
            : {
                type: this.Ar > t.distance ? zt.PINCH_IN : zt.PINCH_OUT,
                target: this.Ea,
                distance: t.distance,
                isTrusted: this.Nn,
              };
        }
        aw(t) {
          return {
            type: t.velocity < fS ? zt.DRAG : zt.FLICK,
            target: this.Ea,
            velocity: t.velocity,
            distance: t.distance,
            direction: t.direction,
            isTrusted: this.Nn,
          };
        }
        lw(t) {
          return {
            type: t.duration < dS ? zt.TAP : zt.LONG_PRESS,
            target: this.Ea,
            isTrusted: this.Nn,
          };
        }
        uw(t, e) {
          return t === zt.TAP && e && e.length === 1;
        }
        tw(t) {
          return t.touches.length === 1;
        }
        nw() {
          return this.On.length === 2;
        }
        Z_(t) {
          return t.touches.length > 0;
        }
        ew(t) {
          return t.changedTouches.length > 0;
        }
        iw(t) {
          return (
            this.yu &&
            !!this.Ar &&
            t.changedTouches.length === 1 &&
            t.touches.length === 1
          );
        }
      }
      return s;
    })(),
    gS = "touchstart",
    mS = "touchmove",
    yS = "touchend",
    Wh = (() => {
      class s {
        constructor(t) {
          this.R = t;
        }
        observe() {
          s.cp && s.Eu(this.R);
        }
        disconnect() {
          s.cp && s.Su(this.R);
        }
        static fw(t, e) {
          csArray.prototype.forEach.call(Ds(s.Lt), (i) => i(t, e));
        }
        static Eu(t) {
          s.Lt.has(t) ||
            (s.Lt.add(t),
            s.Lt.size === 1 &&
              (s.Mn.onGesture(s.fw),
              csArray.prototype.forEach.call(s.ii, (e) => Mt(e))));
        }
        static Su(t) {
          s.Lt.delete(t),
            s.Lt.size === 0 &&
              csArray.prototype.forEach.call(s.ii, (e) => Dt(e));
        }
        static vu(t) {
          if (s.Mn.isValidTouchEvent(t))
            switch (t.type) {
              case "touchstart":
                s.Mn.processActionDown(t);
                break;
              case "touchmove":
                s.Mn.processActionMove();
                break;
              case "touchend":
                s.Mn.processActionUp(t);
                break;
            }
        }
      }
      return (
        (s.ii = [
          { boundElement: gt.document, type: gS, listener: (r) => s.vu(r) },
          { boundElement: gt.document, type: mS, listener: (r) => s.vu(r) },
          { boundElement: gt.document, type: yS, listener: (r) => s.vu(r) },
        ]),
        (s.cp = Fa.isGestureDetectionSupported()),
        (s.Lt = new Set()),
        (s.Mn = new Fa()),
        s
      );
    })(),
    ES = (() => {
      class s extends ls {
        constructor() {
          super(), (this.Dn = new Wh(this._u.bind(this)));
        }
        onStart() {
          this.Dn.observe();
        }
        onStop() {
          this.Dn.disconnect();
        }
        _u(t) {
          let e = this.pw(t);
          e && this.produceEvent(e);
        }
        pw(t) {
          return this.gw(t)
            ? {
                type: "Gesture",
                targetId: At(t.target),
                data: {
                  type: t.type,
                  direction: t.direction,
                  distance: t.distance,
                  velocity: t.velocity,
                  pageX: t.pageX,
                  pageY: t.pageY,
                },
              }
            : null;
        }
        gw(t) {
          return (
            t.target !== null &&
            !(It(t.target) && F.isMaskedElementChild(t.target))
          );
        }
      }
      return s;
    })(),
    Yh = (() => {
      class s {
        constructor(t) {
          (this.R = t),
            (this.ni = !1),
            (this.Zt = {
              boundElement: gt,
              type: "error",
              listener: (e) => this.mw(e),
            });
        }
        observe() {
          Mt(this.Zt, this.ni);
        }
        disconnect() {
          Dt(this.Zt, this.ni);
        }
        mw(t) {
          this.R(t);
        }
      }
      return s;
    })(),
    SS = (() => {
      class s extends ls {
        constructor() {
          super(...arguments), (this.lp = new Yh((t) => this.yw(t)));
        }
        yw({ message: t, filename: e, lineno: i, colno: n }) {
          (t = t != null ? t : "[NO ERROR MESSAGE]"),
            (e = !e || Le(e) ? "" : e),
            this.produceEvent({
              type: "JSError",
              message: t,
              filename: e,
              lineno: i,
              colno: n,
            });
        }
        onStart() {
          this.lp.observe();
        }
        onStop() {
          this.lp.disconnect();
        }
      }
      return s;
    })(),
    vS = (() => {
      class s extends rr {
        constructor(t) {
          super(), (this.Ew = t), (this.wu = 1024), (this.Au = 150);
        }
        isListening(t) {
          return t.type === "JSError";
        }
        processEvent(t) {
          return (
            (t.message = Jt.truncate(t.message, this.wu, Jt.ELLIPSIS)),
            (t.filename = Jt.truncate(t.filename, this.Au, Jt.ELLIPSIS)),
            this.Ew(t)
          );
        }
      }
      return s;
    })();
  var qi = [],
    Ga = !1,
    Xh = Ii(wS, "executeTasks");
  function _S(s) {
    if ((csArray.prototype.push.call(qi, s), !Ga)) {
      for (let r = 0; r < 3; r++) csSetTimeout(Xh);
      Ga = !0;
    }
  }
  function wS() {
    let s = csDate.now();
    for (let r = 0; r < qi.length; r++)
      if ((qi[r](), csDate.now() - s >= 35)) {
        (qi = csArray.prototype.slice.call(qi, r + 1)), csSetTimeout(Xh);
        return;
      }
    (qi = []), (Ga = !1);
  }
  var qs = (() => {
      let s;
      return (
        (function (r) {
          (r[(r.Started = 0)] = "Started"),
            (r[(r.Stopped = 1)] = "Stopped"),
            (r[(r.Processing = 2)] = "Processing"),
            (r[(r.Completed = 3)] = "Completed");
        })(s || (s = {})),
        s
      );
    })(),
    Kh = (() => {
      class s {
        constructor() {
          (this.Ie = new Hr()),
            (this.kt = qs.Stopped),
            (this.R = null),
            (this.hp = (t) => {
              this.kt === qs.Stopped || !t || (this.R(t), this.dp());
            });
        }
        get queueLength() {
          return this.Ie.length;
        }
        start(t) {
          if (this.R) throw new Error("callback already set");
          (this.kt = qs.Started), (this.R = t);
        }
        push(t) {
          this.Ie.push(t), this.Aw();
        }
        stop() {
          (this.R = null), (this.kt = qs.Stopped), this.Ie.clear();
        }
        static pipe(t, e) {
          let i = t,
            n = new csArray();
          for (let c of e) {
            let h = new s();
            h.start((d) => {
              c.pushEvent(d);
            }),
              csArray.prototype.push.call(n, h),
              pt(i, (d) => d.subscribe((S) => h.push(S))),
              (i = [c]);
          }
          let o = new AS(n);
          return pt(i, (c) => c.subscribe((h) => o.push(h))), o;
        }
        fp() {
          return this.kt === qs.Stopped;
        }
        ds() {
          return this.kt === qs.Processing;
        }
        dp() {
          if (!this.fp()) {
            if (this.Ie.isEmpty) {
              this.kt = qs.Completed;
              return;
            }
            (this.kt = qs.Processing),
              _S(() => {
                let t = this.Ie.pop();
                t instanceof Dc ? t.complete(this.hp) : this.hp(t);
              });
          }
        }
        Aw() {
          this.fp() || this.ds() || this.dp();
        }
      }
      return s;
    })(),
    AS = (() => {
      class s extends Kh {
        constructor(t) {
          super(), (this.pp = t);
        }
        get queueLength() {
          return csArray.prototype.reduce.call(
            this.pp,
            (t, e) => t + e.queueLength,
            0
          );
        }
        stop() {
          super.stop(), pt(this.pp, (t) => t.stop());
        }
      }
      return s;
    })(),
    bS = (() => {
      class s {
        constructor(t, e = []) {
          (this.producers = t),
            (this.processors = e),
            (this.Rt = !1),
            (this.Lt = []);
        }
        get pendingEvents() {
          var t, e;
          return (e =
            (t = this.Ie) === null || t === void 0 ? void 0 : t.queueLength) !==
            null && e !== void 0
            ? e
            : 0;
        }
        start() {
          if (this.Rt) throw new Error("Recording is already started.");
          let t = this.Lt;
          (this.Ie = Kh.pipe(this.producers, this.processors)),
            this.Ie.start((e) =>
              csArray.prototype.forEach.call(t, (i) => i(e))
            ),
            pt(this.producers, (e) => e.start()),
            pt(this.processors, (e) => e.start()),
            (this.Rt = !0);
        }
        stop() {
          this.Ie.stop(), (this.Lt.length = 0);
          for (let t of this.producers) t.stop();
          for (let t of this.processors) t.stop();
          (this.Rt = !1), (this.Lt = []);
        }
        subscribe(t) {
          if (this.Rt) throw new Error("Recording is already started.");
          return (
            csArray.prototype.push.call(this.Lt, t),
            () =>
              (this.Lt = csArray.prototype.filter.call(this.Lt, (e) => e !== t))
          );
        }
      }
      return s;
    })(),
    TS = (() => {
      class s {
        constructor(t) {
          (this.gp = t),
            (this.Oi = null),
            (this.mp = !1),
            (this.bw =
              typeof requestIdleCallback != "undefined"
                ? (e) => requestIdleCallback(e)
                : (e) => csSetTimeout(e));
        }
        async start() {
          this.mp || ((this.mp = !0), await this.Tw(this.gp));
        }
        stop() {
          var t;
          (t = this.Oi) === null || t === void 0 || t.deactivate();
        }
        async Tw(t) {
          (await this.Rw(gt.document)) ? t() : this.Cw(this.gp);
        }
        Cw(t) {
          var e;
          (this.Oi = ss({
            target: HTMLElement.prototype,
            methodName: "attachInternals",
            hook: () => {
              t(), this.stop();
            },
          })),
            (e = this.Oi) === null || e === void 0 || e.activate();
        }
        async Rw(t) {
          await new Promise((n) => this.bw(() => n()));
          let e = _e(t, NodeFilter.SHOW_ELEMENT),
            i = e.nextNode();
          for (; i; ) {
            if (this.Iw(i)) return !0;
            i = e.nextNode();
          }
          return !1;
        }
        Iw(t) {
          var e;
          return (
            ((e = t.constructor) === null || e === void 0
              ? void 0
              : e.formAssociated) === !0 &&
            csString.prototype.includes.call(t.tagName, "-")
          );
        }
      }
      return s;
    })(),
    RS = 2,
    Lc = (() => {
      class s {
        constructor(t) {
          (this.Pw = t), (this.Sa = 0);
        }
        addString(t) {
          this.Sa += t.length * RS;
        }
        addArrayBuffer(t) {
          this.Sa += t.byteLength;
        }
        isThresholdReached() {
          return this.Sa > this.Pw;
        }
        reset() {
          this.Sa = 0;
        }
      }
      return s;
    })(),
    CS = (() => {
      class s {
        constructor(t) {
          (this.va = {}), (this.Pe = new Lc(t));
        }
        save({ key: t, metadata: e, events: i }) {
          this.Pe.isThresholdReached() ||
            (this.Pe.addString(t),
            typeof i == "string"
              ? this.Pe.addString(i)
              : this.Pe.addArrayBuffer(i),
            !this.Pe.isThresholdReached() &&
              (this.va[t] = { metadata: e, events: i }));
        }
        recover(t) {
          let e = [];
          csArray.prototype.forEach.call(this.Ow(), (i) => {
            let n = this.va[i];
            n !== void 0 &&
              (delete n.metadata.datatype,
              csArray.prototype.push.call(e, n),
              this.Nw(i));
          }),
            e.length !== 0 && (t(e), this.Pe.reset());
        }
        Ow() {
          return Object.keys(this.va);
        }
        Nw(t) {
          delete this.va[t];
        }
      }
      return s;
    })(),
    Ws = (() => {
      let s;
      return (
        (function (r) {
          (r[(r.NOT_STARTED = 0)] = "NOT_STARTED"),
            (r[(r.OPEN_IN_PROGRESS = 1)] = "OPEN_IN_PROGRESS"),
            (r[(r.OPEN_FAILED = 2)] = "OPEN_FAILED"),
            (r[(r.READY = 3)] = "READY");
        })(s || (s = {})),
        s
      );
    })(),
    IS = (() => {
      class s {
        constructor(t, e, i) {
          (this.br = t),
            (this.Mw = i),
            (this.ki = Ws.NOT_STARTED),
            (this._a = []),
            (this.Cu = 0),
            (this.Dw = self.origin),
            (this.Oe = typeof window == "object" ? "" : "worker-"),
            (this.Pe = new Lc(e)),
            this.Xl();
        }
        async Xl() {
          await this.yp(), this.ki === Ws.READY ? this.kw() : this.Mw(this._a);
        }
        kw() {
          csArray.prototype.forEach.call(this._a, (t) => {
            this.save(t);
          }),
            (this._a = []);
        }
        async save(t) {
          try {
            if (this.ki === Ws.OPEN_IN_PROGRESS) {
              csArray.prototype.push.call(this._a, t);
              return;
            }
            if (this.ki !== Ws.READY || this.Pe.isThresholdReached()) return;
            let { key: e, metadata: i, events: n } = t;
            if (
              (this.Pe.addString(e),
              typeof n == "string"
                ? this.Pe.addString(n)
                : this.Pe.addArrayBuffer(n),
              this.Pe.isThresholdReached())
            )
              return;
            await this.ce.put(
              `${this.Dw}/${e}`,
              new Response(n, { headers: i })
            );
          } catch {}
        }
        async recover(t) {
          (!this.ce && (await this.yp(), this.ki !== Ws.READY)) || this.xw(t);
        }
        async yp() {
          try {
            (this.ki = Ws.OPEN_IN_PROGRESS),
              (this.ce = await self.caches.open(`${this.Oe}${this.br}`)),
              (this.ki = Ws.READY);
          } catch {
            this.ki = Ws.OPEN_FAILED;
          }
        }
        async xw(t) {
          try {
            if ((this.Cu++, this.Cu > 1)) return;
            let e = await this.ce.keys();
            if (e.length === 0) return;
            let i = await this.ce.matchAll(),
              n = csArray.prototype.map.call(i, (c) => {
                let h = {};
                c.headers.forEach((S, y) => {
                  h[y] = S;
                }),
                  delete h["content-type"];
                let d = h.datatype;
                return (
                  delete h.datatype,
                  d === "json" || d === "base64"
                    ? c.text().then((S) => ({ metadata: h, events: S }))
                    : c.arrayBuffer().then((S) => ({ metadata: h, events: S }))
                );
              }),
              o = await Promise.all(n);
            await Promise.all(
              csArray.prototype.map.call(e, (c) => this.ce.delete(c))
            ),
              t(o),
              this.Pe.reset();
          } catch {
          } finally {
            this.Cu--;
          }
        }
      }
      return s;
    })(),
    PS = (() => {
      class s {
        constructor(t) {
          try {
            this.Lw(t);
          } catch {
            this.Iu();
          }
        }
        Lw(t) {
          self.caches ? this.Vw(t) : this.Iu();
        }
        save(t) {
          this.wa.save(t);
        }
        recover(t) {
          this.wa.recover(t);
        }
        Vw(t) {
          this.wa = new IS(t, s.Ep, (e) => {
            this.Iu(e);
          });
        }
        Iu(t) {
          (this.wa = new CS(s.Ep)),
            t &&
              csArray.prototype.forEach.call(t, (e) => {
                this.wa.save(e);
              });
        }
      }
      return (s.Ep = 1024 * 1024 * 16), s;
    })(),
    Jh = (() => {
      class s {
        constructor(t) {
          (this.Sp = []), (this.vp = []), (this.qe = {}), (this.Ai = t);
        }
        setQueryParams(t) {
          csArray.prototype.forEach.call(Object.keys(t), (e) => {
            this.qe[e] = t[e];
          });
        }
        removeQueryParams(t) {
          t
            ? csArray.prototype.forEach.call(t, (e) => {
                delete this.qe[e];
              })
            : (this.qe = {});
        }
        onBeaconSuccess(t) {
          csArray.prototype.push.call(this.Sp, t);
        }
        onBeaconFailure(t) {
          csArray.prototype.push.call(this.vp, t);
        }
        send(t) {
          let e = kr.toQuery({ ...this.qe, ct: Fr.UNCOMPRESSED }),
            i = this.Uw(e, t);
          return (
            i
              ? csArray.prototype.forEach.call(this.Sp, (n) => n())
              : csArray.prototype.forEach.call(this.vp, (n) => n(this.qe)),
            i
          );
        }
        Uw(t, e) {
          try {
            if (typeof csNavigatorsendBeacon != "function") return !1;
            let i = csNavigatorsendBeacon(`${this.Ai}?${t}`, e || "");
            if (i) return i;
          } catch {}
          return typeof navigator.sendBeacon != "function"
            ? !1
            : navigator.sendBeacon(`${this.Ai}?${t}`, e || "");
        }
      }
      return s;
    })(),
    OS = (() => {
      class s {
        constructor(t, e) {
          (this.w = t),
            (this.C = e),
            (this.kn = Ce.ETR_DISABLED),
            (this.Aa = Ce.ETR_PENDING),
            (this.Pu = !0);
        }
        getEtrStatus(t) {
          t === void 0 && (t = this.C.getSession());
          let e = t == null ? void 0 : t.etrStatus;
          return this._p() && e === Ce.ETR_SAVED_SESSION ? e : this.kn;
        }
        onEventTriggerRecording(t, e) {
          switch (e) {
            case ei.ETR_PAGE:
              this.wp(Ce.ETR_SAVED_PAGE);
              break;
            case ei.ETR_LEGACY:
            case ei.ETR_SESSION:
              this.wp(Ce.ETR_SAVED_SESSION);
              break;
          }
        }
        onCollectStateChange(t, e) {
          t === z.RECORDING_TEMPORARILY ? (this.Pu = !0) : (this.Pu = !1),
            t === z.ANALYTICS_ONLY && e === Ue.ETR_ON
              ? this.Ap(this.Aa)
              : this.Ap(Ce.ETR_DISABLED);
        }
        Ap(t) {
          (this.kn = t),
            (this.Aa = Ce.ETR_PENDING),
            this.bp(t),
            this.w.emitRecordingContextChange();
        }
        wp(t) {
          this.Pu
            ? Number(t) > Number(this.Aa) && (this.Aa = t)
            : this._p() &&
              Number(t) > Number(this.kn) &&
              ((this.kn = t), this.bp(t), this.w.emitRecordingContextChange());
        }
        bp(t) {
          let e = this.C.getSession();
          e !== null &&
            e.etrStatus === Ce.ETR_NOT_SAVED_SESSION &&
            t === Ce.ETR_SAVED_SESSION &&
            ((e.etrStatus = t), this.C.setSession(e));
        }
        _p() {
          return this.kn !== Ce.ETR_DISABLED;
        }
      }
      return s;
    })(),
    NS = (() => {
      class s {
        constructor(t = 100) {
          (this.Hw = t),
            (this.ba = {}),
            (this.xn = null),
            (this.su = "original-resource-name");
        }
        onEvent(t) {
          this.jw = t;
        }
        processEvent(t) {
          this.Bw(t.resourceId, t.resource.hash, t.originalResourceName),
            this.$w(t);
        }
        flushEvents() {
          this.xn && csClearTimeout(this.xn), this.Tp();
        }
        onSendStaticResource(t) {
          this.$w = t;
        }
        Tp() {
          if (!Object.keys(this.ba).length) return;
          let t = { type: X.RESOURCE_HASHES, date: q.now(), args: [this.ba] };
          (this.xn = null), (this.ba = {}), this.jw(t);
        }
        Bw(t, e, i) {
          let n = e;
          i && (n += `?${this.su}=${i}`),
            (this.ba[t] = n),
            !this.xn &&
              (this.xn = window.csSetTimeout(() => this.Tp(), this.Hw));
        }
      }
      return s;
    })();
  function MS(s, r, t) {
    let { timestamp: e } = s;
    switch (s.domEvent) {
      case "initialDOM": {
        let { initialDOM: i } = s,
          n = { type: X.INITIAL_DOM, date: e, args: [i] };
        t.emitInitialDomDone(n);
        break;
      }
      case "nodesAdded": {
        csArray.prototype.forEach.call(s.nodes, (i) => {
          r({
            type: X.MUTATION_INSERT,
            date: e,
            args: [s.target, s.nextSibling, i],
          });
        });
        break;
      }
      case "nodesMoved": {
        for (let i of s.nodesIds)
          r({
            type: X.MUTATION_MOVE,
            date: e,
            args: [i, s.nextSibling, s.target],
          });
        break;
      }
      case "nodesRemoved": {
        csArray.prototype.forEach.call(s.nodesIds, (i) => {
          r({ type: X.MUTATION_REMOVE, date: e, args: [i] });
        });
        break;
      }
      case "attributeChanged": {
        let { target: i, namespace: n, attribute: o, newValue: c } = s;
        r({ type: X.MUTATION_ATTRIBUTE, date: e, args: [i, n, o, c] });
        break;
      }
      case "characterDataChanged": {
        let { target: i, newValue: n } = s;
        r({ type: X.MUTATION_CHARACTER_DATA, date: e, args: [i, n] });
        break;
      }
      case "cssRuleInserted": {
        let { target: i, rule: n, index: o } = s,
          c = ft(o) ? [i, n, o] : [i, n];
        r({ type: X.STYLESHEET_RULE_INSERT, date: e, args: c });
        break;
      }
      case "cssRuleDeleted": {
        let { target: i, index: n } = s;
        r({ type: X.STYLESHEET_RULE_DELETE, date: e, args: [i, n] });
        break;
      }
      case "cssRuleUpdated": {
        let { target: i, rule: n, index: o } = s;
        r({ type: X.STYLESHEET_RULE_UPDATE, date: e, args: [i, n, o] });
        break;
      }
      case "cssStyleSheetDisabled": {
        let { target: i, disabled: n } = s;
        r({ type: X.STYLESHEET_DISABLED, date: e, args: [i, n] });
        break;
      }
      case "shadowRootAttached": {
        let { target: i, shadowRoot: n } = s;
        r({ type: X.ATTACH_SHADOW, date: e, args: [i, n] });
        break;
      }
      case "adoptedStyleSheetRegistered": {
        let { sheetId: i, cssRules: n, disabled: o } = s;
        r({
          type: X.REGISTER_ADOPTED_STYLE_SHEET,
          date: e,
          args: [i, { cssRules: n, disabled: o }],
        });
        break;
      }
      case "adoptedStyleSheetsSet": {
        let { target: i, sheetsIds: n } = s;
        r({ type: X.SET_ADOPTED_STYLE_SHEETS, date: e, args: [i, n] });
        break;
      }
      case "adoptedStyleSheetRuleInserted": {
        let { sheetId: i, rule: n, index: o } = s,
          c = ft(o) ? [i, n, o] : [i, n];
        r({ type: X.ADOPTED_STYLESHEET_RULE_INSERT, date: e, args: c });
        break;
      }
      case "adoptedStyleSheetRuleDeleted": {
        let { sheetId: i, index: n } = s;
        r({ type: X.ADOPTED_STYLESHEET_RULE_DELETE, date: e, args: [i, n] });
        break;
      }
      case "adoptedStyleSheetRuleUpdated": {
        let { sheetId: i, rule: n, index: o } = s,
          c = [i, n, o];
        r({ type: X.ADOPTED_STYLESHEET_RULE_UPDATE, date: e, args: c });
        break;
      }
      case "adoptedStyleSheetDisabled": {
        let { sheetId: i, disabled: n } = s,
          o = [i, n];
        r({ type: X.ADOPTED_STYLESHEET_DISABLED, date: e, args: o });
        break;
      }
      default:
        J.error("translateDOMEvent: DOMEvent not supported");
        break;
    }
  }
  function DS(s) {
    let r = kS(s.data);
    return {
      type: X.GESTURE_RECOGNITION,
      args: [s.targetId, r],
      date: s.timestamp,
    };
  }
  function kS(s) {
    let r = { type: xS(s.type) };
    for (let t in s) {
      let e = s[t];
      e !== void 0 && t !== "type" && (r[t] = e);
    }
    return r;
  }
  function xS(s) {
    switch (s) {
      case zt.DRAG:
      case zt.FLICK:
        return Ar.SWIPE;
      case zt.LONG_PRESS:
        return Ar.LONG_PRESS;
      case zt.TAP:
        return Ar.TAP;
      case zt.PINCH_IN:
        return Ar.PINCH_IN;
      case zt.PINCH_OUT:
        return Ar.PINCH_OUT;
    }
  }
  function LS(s) {
    switch (s.inputType) {
      case "text":
        return {
          type: X.INPUT_TEXT,
          args: [s.target, s.value],
          date: s.timestamp,
        };
      case "select":
        return {
          type: X.INPUT_SELECT,
          args: [s.target, s.selectedIndex],
          date: s.timestamp,
        };
      case "checkable":
        return {
          type: X.INPUT_CHECKABLE,
          args: [s.target, s.checked],
          date: s.timestamp,
        };
    }
  }
  var oa = (() => {
    let s;
    return (
      (function (r) {
        (r.REQUEST_START = "requestStart"),
          (r.DOM_INTERACTIVE = "domInteractive"),
          (r.TIME_ORIGIN = "timeOrigin");
      })(s || (s = {})),
      s
    );
  })();
  function VS(s) {
    return {
      type: X.PERFORMANCE_TIMINGS,
      args: [
        {
          performanceTiming: oa.REQUEST_START,
          timestamp: s.timings.requestStart,
        },
        {
          performanceTiming: oa.DOM_INTERACTIVE,
          timestamp: s.timings.domInteractive,
        },
        { performanceTiming: oa.TIME_ORIGIN, timestamp: s.timings.timeOrigin },
      ],
      date: s.timestamp,
    };
  }
  var US = 500,
    aa = 0;
  function HS() {
    return {
      processEvent(s, r) {
        if (s.originalEvent.type === X.PERFORMANCE_RESOURCE_TIMING)
          return aa >= US
            ? null
            : ((aa += 1), r({ ...s.originalEvent, date: s.timestamp }));
        r(s.originalEvent);
      },
      reset() {
        aa = 0;
      },
    };
  }
  function Jl(s) {
    let r = s.type === "DOM_INITIAL_STATE" ? s.state : s.diff;
    for (let t in r) {
      let e = r[t];
      e && (delete e.parent, delete e.previousSibling, delete e.metadata);
    }
    return s;
  }
  function jS(s, r) {
    let t = [],
      e = !1;
    return {
      push(i) {
        if ((csArray.prototype.push.call(t, i), t.length === r.batchSize)) {
          this.flush();
          return;
        }
        r.autoFlushDelay &&
          r.autoFlushDelay > 0 &&
          !e &&
          ((e = !0),
          csSetTimeout(() => {
            (e = !1), t.length > 0 && this.flush();
          }, r.autoFlushDelay));
      },
      flush() {
        if (!t.length) return;
        let i = t;
        (t = []), s(i);
      },
    };
  }
  var BS = 20;
  function $S(s) {
    return jS(
      (r) => {
        let t = { visibleInViewPort: r },
          e = { type: X.TEXT_VISIBILITY, date: q.now(), args: [t] };
        s(e);
      },
      { batchSize: BS, autoFlushDelay: 1e3 }
    );
  }
  function FS(s) {
    switch (s.videoEventType) {
      case "play":
        return { type: X.VIDEO_PLAY, args: [s.nodeId], date: s.timestamp };
      case "pause":
        return { type: X.VIDEO_PAUSE, args: [s.nodeId], date: s.timestamp };
      case "seeked": {
        let r = s;
        return {
          type: X.VIDEO_SEEK,
          args: [r.nodeId, r.newTimePositionInSec],
          date: s.timestamp,
        };
      }
      default:
        return null;
    }
  }
  var GS = (() => {
    class s {
      get pendingEvents() {
        return this.Ta.pendingEvents;
      }
      constructor(t, e, i, n, o) {
        (this.Ta = t),
          (this.w = e),
          (this.Ne = i),
          (this.fs = n),
          (this.Rs = o),
          (this.ee = () => {}),
          (this.Ln = () => {}),
          (this.Rp = $S((c) => this.ee(c)));
      }
      start() {
        var t, e;
        (this.Cp = HS()),
          this.Ta.subscribe((i) => {
            var n, o, c, h, d, S, y;
            let _ = i,
              { timestamp: w } = _;
            switch (_.type) {
              case "Legacy":
                {
                  let T =
                    _.eventType === "user"
                      ? (n = this.Ln) !== null && n !== void 0
                        ? n
                        : () => {}
                      : this.ee;
                  this.Cp.processEvent(_, T);
                }
                break;
              case "CustomElementRegistration": {
                this.ee({
                  type: X.CUSTOM_ELEMENT_REGISTRATION,
                  date: w,
                  args: [_.tagName],
                });
                break;
              }
              case "DomEvent": {
                MS(_, this.ee, this.w);
                break;
              }
              case "InputEvent": {
                let T = LS(_);
                (o = this.Ln) === null || o === void 0 || o.call(this, T);
                break;
              }
              case "inputEncryptedText": {
                let {
                  target: T,
                  value: M,
                  encryptedData: x,
                  encryptionMetadata: P,
                } = _;
                (c = this.Ln) === null ||
                  c === void 0 ||
                  c.call(this, {
                    type: X.INPUT_ENCRYPTED_TEXT,
                    date: w,
                    args: [T, M, x, P],
                  });
                break;
              }
              case "encryptedCharacterDataChanged": {
                let {
                  target: T,
                  rawData: M,
                  encryptedData: x,
                  encryptionMetadata: P,
                } = _;
                this.ee({
                  type: X.MUTATION_ENCRYPTED_CHARACTER_DATA,
                  date: w,
                  args: [T, M, x, P],
                });
                break;
              }
              case "StaticResource": {
                let { url: T } = _;
                this.ee({ type: X.STATIC_RESOURCE_URL, date: w, args: [T] });
                break;
              }
              case "ResizeMaskedElement": {
                let { target: T, width: M, height: x } = _;
                this.ee({
                  type: X.MUTATION_ATTRIBUTE,
                  date: w,
                  args: [
                    T,
                    "",
                    "style",
                    `width:${M}px !important;height:${x}px !important;`,
                  ],
                });
                break;
              }
              case "Gesture": {
                let T = DS(i);
                (h = this.Ln) === null || h === void 0 || h.call(this, T);
                break;
              }
              case "TextVisibility": {
                this.Rp.push(_.text);
                break;
              }
              case "StaticResourceManagerEvent": {
                (d = this.Ne) === null || d === void 0 || d.processEvent(_);
                break;
              }
              case "screenResize": {
                let { width: T, height: M } = _,
                  x = { type: X.SCREEN_RESIZE, date: w, args: [T, M] };
                this.ee(x);
                break;
              }
              case "viewportResize": {
                let { width: T, height: M } = _,
                  x = { type: X.RESIZE, date: w, args: [T, M] };
                this.ee(x);
                break;
              }
              case "PerformanceTiming": {
                this.ee(VS(_));
                break;
              }
              case "CustomError": {
                let T =
                  (S = this.Rs) === null || S === void 0
                    ? void 0
                    : S.translate(_);
                T && this.ee(T);
                break;
              }
              case "JSError": {
                let T =
                  (y = this.fs) === null || y === void 0
                    ? void 0
                    : y.translate(_);
                T && this.ee(T);
                break;
              }
              case "VideoEvent": {
                let T = FS(_);
                T && this.ee(T);
                break;
              }
              case "DOM_INITIAL_STATE": {
                let T = Jl(_),
                  M = { type: X.DOM_INITIAL_STATE, date: w, args: [T.state] };
                this.w.emitInitialDomDone(M);
                break;
              }
              case "DOM_PATCH": {
                let T = Jl(_),
                  M = { type: X.DOM_PATCH_STATE, date: w, args: [T.diff] };
                this.ee(M);
                break;
              }
              case "warning": {
                J.warn(_.message);
                break;
              }
              default:
                J.error(
                  `WebRecorderEventTranslator: Event not supported (${_.type})`
                );
                break;
            }
          }),
          this.w.emitInitialDomStart(),
          (t = this.fs) === null || t === void 0 || t.start(),
          (e = this.Rs) === null || e === void 0 || e.start(),
          this.Ta.start();
      }
      stop() {
        var t, e, i;
        this.reset(),
          this.flush(),
          this.Ta.stop(),
          (t = this.Ne) === null || t === void 0 || t.flushEvents(),
          (e = this.fs) === null || e === void 0 || e.stop(),
          (i = this.Rs) === null || i === void 0 || i.stop();
      }
      flush() {
        this.Rp.flush();
      }
      onEvent(t, e) {
        var i;
        (this.ee = t),
          (this.Ln = e),
          (i = this.Ne) === null ||
            i === void 0 ||
            i.onEvent((n) => this.ee(n));
      }
      reset() {
        this.Cp.reset();
      }
    }
    return s;
  })();
  var zS = (() => {
      class s {
        constructor(t) {
          (this.Ra = t), (this.an = 20), (this.Li = 0), (this.j = !1);
        }
        translate(t) {
          if (this.Li >= this.an) return this.Ra.stop(), null;
          this.Li += 1;
          let {
            filename: e,
            message: i,
            lineno: n,
            colno: o,
            timestamp: c,
          } = t;
          return {
            type: X.JAVASCRIPT_ERROR,
            date: c,
            args: [
              {
                errorType: "jsError",
                message: i,
                filename: e,
                lineno: n,
                colno: o,
              },
            ],
          };
        }
        start() {
          this.j || ((this.Li = 0), (this.j = !0));
        }
        stop() {
          this.j = !1;
        }
      }
      return s;
    })(),
    qS = (() => {
      class s extends ls {
        constructor(t) {
          super(), (this.Be = t);
        }
        subscribe(t) {
          return super.subscribe(t);
        }
        onStart() {
          pt(this.Be, (t) => {
            t.onEvent((e) => {
              var i;
              return this.Tr(
                e,
                (i = t.eventType) !== null && i !== void 0 ? i : "browser"
              );
            });
          }),
            pt(this.Be, (t) => {
              var e;
              (e = t.start) === null || e === void 0 || e.call(t);
            });
        }
        onStop() {
          pt(this.Be, (t) => {
            var e;
            return (e = t.stop) === null || e === void 0 ? void 0 : e.call(t);
          });
        }
        Tr(t, e) {
          this.produceEvent({
            timestamp: q.now(),
            type: "Legacy",
            originalEvent: t,
            eventType: e,
          });
        }
      }
      return s;
    })(),
    Qh = (() => {
      class s {
        emit(t, e, i, n = document) {
          let c = `${i !== void 0 ? `${i}` : `${s.Fw}`}${t}`,
            h = s.createEvent(c, { detail: e });
          h !== null && n.dispatchEvent(h);
        }
        static createEvent(t, e = {}) {
          if (typeof CustomEvent == "function") return new CustomEvent(t, e);
          let i = this.Gw();
          if (i === null) return null;
          let { bubbles: n = !1, cancelable: o = !1, detail: c } = e;
          return i.initCustomEvent(t, n, o, c), i;
        }
        static Gw() {
          try {
            return document.createEvent("CustomEvent");
          } catch {
            return null;
          }
        }
      }
      return (s.Fw = "cs.tracking."), s;
    })(),
    Ve = (() => {
      let s;
      return (
        (function (r) {
          (r.Visible = "visible"),
            (r.Hidden = "hidden"),
            (r.Blur = "blur"),
            (r.PagehideVisible = "pagehideVisible"),
            (r.PagehideHidden = "pagehideHidden"),
            (r.ExitPageByNavigate = "exitPageByNavigate");
        })(s || (s = {})),
        s
      );
    })(),
    Zh = (() => {
      class s {
        constructor() {
          (this.j = !1),
            (this.oi = (t) => {
              try {
                switch (t.type) {
                  case "visibilitychange":
                    return document.visibilityState === "hidden"
                      ? this.Cs(Ve.Hidden)
                      : this.Cs(Ve.Visible);
                  case "pagehide":
                    return document.visibilityState === "hidden"
                      ? this.Cs(Ve.PagehideHidden)
                      : this.Cs(Ve.PagehideVisible);
                  case "blur":
                    return this.Cs(Ve.Blur);
                  case "navigate":
                    return this.zw(t) ? this.Cs(Ve.ExitPageByNavigate) : void 0;
                  default:
                    return;
                }
              } catch {}
            });
        }
        start() {
          this.j ||
            ((this.j = !0), this.Ou(), this.qw(), this.Ww(), Jc() && this.Yw());
        }
        stop() {
          this.j &&
            ((this.j = !1), this.Nu(), this.Xw(), this.Kw(), Jc() && this.Jw());
        }
        onEvent(t) {
          this.Cs = t;
        }
        Yw() {
          window.navigation.addEventListener("navigate", this.oi);
        }
        Jw() {
          window.navigation.removeEventListener("navigate", this.oi);
        }
        Ou() {
          document.addEventListener("visibilitychange", this.oi);
        }
        Nu() {
          document.removeEventListener("visibilitychange", this.oi);
        }
        qw() {
          window.addEventListener("pagehide", this.oi);
        }
        Xw() {
          window.removeEventListener("pagehide", this.oi);
        }
        Ww() {
          window.addEventListener("blur", this.oi);
        }
        Kw() {
          window.removeEventListener("blur", this.oi);
        }
        zw(t) {
          return t instanceof NavigateEvent
            ? !t.hashChange && !t.downloadRequest && !t.formData
            : !1;
        }
      }
      return s;
    })(),
    ie = (() => {
      let s;
      return (
        (function (r) {
          (r[(r.Active = 0)] = "Active"),
            (r[(r.Paused = 1)] = "Paused"),
            (r[(r.Stopped = 2)] = "Stopped");
        })(s || (s = {})),
        s
      );
    })(),
    WS = (() => {
      class s {
        constructor(t, e, i = []) {
          (this.Tr = t),
            (this.Mu = e),
            (this.Qw = i),
            (this.Ca = null),
            (this.kt = ie.Active),
            (this.nt = []);
        }
        reset() {
          (this.Ca = null), (this.nt = []), (this.kt = ie.Active);
        }
        disconnect() {
          this.kt = ie.Stopped;
        }
        Zw() {
          this.Mu(ie.Paused),
            (this.kt = ie.Paused),
            csSetTimeout(() => {
              this.kt === ie.Paused && this.Du();
            }, s.STOP_TIMEOUT);
        }
        tA() {
          this.Mu(ie.Active),
            (this.kt = ie.Active),
            pt(this.nt, this.Tr),
            (this.nt = []);
        }
        Du() {
          (this.nt = []), this.Mu(ie.Stopped), (this.kt = ie.Stopped);
        }
        pushEvent(t, e) {
          if (e.isUserEvent && ((this.Ca = t.date), this.kt !== ie.Active)) {
            this.tA(), this.Tr(t);
            return;
          }
          if (this.eA(t)) {
            this.Tr(t);
            return;
          }
          switch (this.kt) {
            case ie.Active:
              if (this.sA(t, e)) {
                this.Zw(), csArray.prototype.push.call(this.nt, t);
                return;
              }
              this.Tr(t);
              break;
            case ie.Paused:
              csArray.prototype.push.call(this.nt, t);
              break;
            case ie.Stopped:
              break;
          }
        }
        sA(t, e) {
          return (
            !e.isUserEvent &&
            this.Ca !== null &&
            t.date - this.Ca > s.INACTIVITY_TIMEOUT
          );
        }
        eA(t) {
          return csArray.prototype.indexOf.call(this.Qw, t.type) > -1;
        }
      }
      return (s.INACTIVITY_TIMEOUT = 5e3), (s.STOP_TIMEOUT = 5e3), s;
    })(),
    YS = 2e3,
    XS = (() => {
      class s extends se {
        constructor(
          t,
          e,
          i,
          n,
          o,
          c,
          h,
          d,
          S,
          y,
          _,
          w,
          T,
          M = [],
          x,
          P,
          N,
          W,
          D
        ) {
          super(),
            (this.E = t),
            (this.G = e),
            (this.iA = i),
            (this.V = n),
            (this.C = o),
            (this.ye = c),
            (this.yt = h),
            (this.Ve = d),
            (this.lt = S),
            (this.Y = y),
            (this.Vt = _),
            (this.Nt = w),
            (this.$e = T),
            (this.Be = M),
            (this.Ip = x),
            (this.se = P),
            (this.Vn = N),
            (this.fs = W),
            (this.Rs = D),
            (this.Ks = 0),
            (this.Rr = new Qh()),
            (this.Cr = {
              allowFromQuotaService: !0,
              allowFromSerialization: !0,
            }),
            (this.Pp = Wn(() => {
              this.G.eventsCount() > 0 && this.Op();
            }, YS)),
            (this.Is = (L) => this.processBrowserEvent(L)),
            (this.Un = (L) => this.ie(L)),
            (this.Ia = 0),
            (this.Hn = 0),
            (this.Xe = new Zh()),
            (this.ku = !1),
            (this.Np = 50 * 1024),
            (this.Vi = !1),
            (this.Bn = !1),
            (this.Pi = []),
            (this.Pa = new WS(
              (L) => this.X(L),
              (L) => {
                switch (L) {
                  case ie.Active:
                    this.rA();
                    break;
                  case ie.Stopped:
                    this.nA();
                    break;
                }
              },
              [
                X.RESOURCE_HASHES,
                X.TEXT_VISIBILITY,
                X.API_ERROR,
                X.JAVASCRIPT_ERROR,
              ]
            )),
            (this.Mp = (L) => {
              this.Vt.removeBatchInProgress(
                `${L.params.sn}.${L.params.pn}.${L.params.ri}`
              );
            });
        }
        init() {
          this.xu(), this.Y.onLoad(this.Mp), this.Y.onError(this.Mp);
        }
        rA() {
          csArray.prototype.forEach.call(this.Ip, (t) => t.start());
        }
        nA() {
          csArray.prototype.forEach.call(this.Ip, (t) => t.stopForInactivity());
        }
        xu() {
          var t, e, i;
          this.$e.onEvent(this.Is, this.Un),
            (t = this.lt) === null ||
              t === void 0 ||
              t.onInputNodeToEncrypt(this.Un),
            (e = this.lt) === null ||
              e === void 0 ||
              e.onApiErrorToEncrypt((n) => {
                this.Dp(n);
              }),
            (i = this.lt) === null ||
              i === void 0 ||
              i.onUserIdentifierToEncrypt(this.Is),
            this.Xe.onEvent((n) => {
              if (
                (csSetTimeout(() => this.Ui("page-state", n)), n !== Ve.Visible)
              ) {
                if (n === Ve.Blur) return this.kp();
                if (!this.ku)
                  return (
                    (this.ku = !0),
                    csSetTimeout(() => {
                      this.ku = !1;
                    }),
                    n === Ve.Hidden ? this.kp() : this.oA()
                  );
              }
            });
        }
        isRecording() {
          return this.C.hasValidSession() && this.isStarted;
        }
        kp() {
          if (!this.canSendEvents()) return;
          this.$e.flush(),
            this.Vt.saveBatchesInProgress(),
            pt(this.Be, (c) => {
              var h, d;
              return pt(
                (d =
                  (h = c.getPendingEvents) === null || h === void 0
                    ? void 0
                    : h.call(c)) !== null && d !== void 0
                  ? d
                  : [],
                (S) => this.G.addEvent(S)
              );
            });
          let t = this.G.getEvents();
          if (t.length === 0) return;
          this.Ui("pending-events", this.$e.pendingEvents);
          let e = this.Y.getQueryParams();
          (e.rst = this.getRecordingStartTimestamp()),
            (this.Hn = t[t.length - 1].date),
            (e.let = this.getRecordingLastEventTimestamp());
          let i = this.G.getCurrentRequestIndex(),
            n = i.getCurrentIndex();
          (e.ri = n.toString()),
            this.Nt.removeQueryParams(),
            this.Nt.setQueryParams(e);
          let o = this.G.stringifyEvents();
          if (o.length > this.Np) {
            let c = this.xp();
            if (c.length > 0) {
              let h = bi(c);
              this.Nt.send(h) ||
                this.Vt.save({
                  key: `${e.sn}.${e.pn}.${e.ri}.last`,
                  metadata: { ...e, datatype: "json" },
                  events: h,
                }),
                i.increment();
            }
            if (this.G.eventsCount() > 0) {
              e.ri = i.getCurrentIndex().toString();
              let h = this.G.stringifyEvents();
              this.Vt.save({
                key: `${e.sn}.${e.pn}.${e.ri}.last`,
                metadata: { ...e, datatype: "json" },
                events: h,
              }),
                i.increment();
            }
          } else
            this.Nt.send(o) ||
              this.Vt.save({
                key: `${e.sn}.${e.pn}.${e.ri}.last`,
                metadata: { ...e, datatype: "json" },
                events: o,
              }),
              i.increment();
          this.Nt.removeQueryParams(), this.G.clearEvents();
        }
        oA() {
          if (!this.canSendEvents()) return;
          this.$e.flush();
          let t = this.Y.getQueryParams();
          this.Vt.saveBatchesInProgress(),
            (t.rst = this.getRecordingStartTimestamp()),
            delete t.ri,
            (t.hlm = "true"),
            this.Nt.removeQueryParams(),
            pt(this.Be, (n) => {
              var o, c;
              return pt(
                (c =
                  (o = n.getPendingEvents) === null || o === void 0
                    ? void 0
                    : o.call(n)) !== null && c !== void 0
                  ? c
                  : [],
                (h) => this.G.addEvent(h)
              );
            });
          let e = this.G.getEvents();
          if (e.length === 0) {
            delete t.let,
              delete t.rst,
              this.Nt.setQueryParams(t),
              this.Nt.send(),
              this.Nt.removeQueryParams();
            return;
          }
          this.Ui("pending-events", this.$e.pendingEvents),
            (this.Hn = e[e.length - 1].date),
            (t.let = this.getRecordingLastEventTimestamp()),
            this.Nt.setQueryParams(t);
          let i = this.G.stringifyEvents();
          if (i.length > this.Np) {
            let n = this.xp();
            if (n.length > 0) {
              let o = bi(n);
              this.Nt.send(o) ||
                this.Vt.save({
                  key: `${t.sn}.${t.pn}.last`,
                  metadata: { ...t, datatype: "json" },
                  events: o,
                });
            } else
              delete t.let,
                delete t.rst,
                delete t.ri,
                this.Nt.removeQueryParams(),
                this.Nt.setQueryParams(t),
                this.Nt.send(),
                this.Nt.removeQueryParams();
            if (this.G.eventsCount() > 0) {
              (t.rst = this.getRecordingStartTimestamp()),
                (t.let = this.getRecordingLastEventTimestamp());
              let o = this.G.getCurrentRequestIndex(),
                c = o.getCurrentIndex();
              t.ri = c.toString();
              let h = this.G.stringifyEvents();
              this.Vt.save({
                key: `${t.sn}.${t.pn}.${t.ri}.last`,
                metadata: { ...t, datatype: "json" },
                events: h,
              }),
                o.increment();
            }
          } else
            this.Nt.send(i) ||
              (this.Vt.save({
                key: `${t.sn}.${t.pn}.${t.ri}.last`,
                metadata: { ...t, datatype: "json" },
                events: i,
              }),
              this.G.getCurrentRequestIndex().increment());
          this.Nt.removeQueryParams(), this.G.clearEvents();
        }
        blockSendingEventsFromQuotaService() {
          this.Cr.allowFromQuotaService = !1;
        }
        allowSendingEventsFromQuotaService() {
          this.Cr.allowFromQuotaService = !0;
        }
        blockSendingEventsFromSerialization() {
          this.Cr.allowFromSerialization = !1;
        }
        allowSendingEventsFromSerialization() {
          this.Cr.allowFromSerialization = !0;
        }
        canSendEvents() {
          return (
            this.Cr.allowFromQuotaService && this.Cr.allowFromSerialization
          );
        }
        onIframeJavascriptError(t) {
          var e;
          if (this.ye && this.fs) {
            (e = this.ye) === null || e === void 0 || e.anonymize(t);
            let i = this.fs.translate({
              message: t.message,
              colno: t.colno,
              lineno: t.lineno,
              filename: t.filename,
              timestamp: q.now(),
              type: "JSError",
            });
            i && this.Is(i);
          }
        }
        onIframeCustomError(t) {
          if (this.Rs) {
            let e = this.Rs.translate({
              ...t,
              timestamp: q.now(),
              type: "CustomError",
            });
            e && this.Is(e);
          }
        }
        onIframeDetailedApiError(t) {
          this.Lp(t);
        }
        onIframeRecordingUserEvent(t) {
          for (let e of t) this.ie(e);
        }
        onIframeRecordingBrowserEvent(t) {
          if (this.isStarted) for (let e of t) this.processBrowserEvent(e);
        }
        processBrowserEvent(t) {
          this.V.isCurrentPageviewValid() &&
            this.Pa.pushEvent(t, { isUserEvent: !1 });
        }
        ie(t) {
          this.V.refreshSession(),
            this.V.isSessionValid() &&
              this.Pa.pushEvent(t, { isUserEvent: !0 });
        }
        X(t) {
          Vt.general.nbEvents.increase(),
            this.G.addEvent(t),
            this.G.isThresholdReached()
              ? this.pushEvents()
              : this.G.isFull() && this.Pp(),
            this.Vp(t);
        }
        Vp(t) {
          this.E.emitDebugEvents &&
            this.Rr.emit("recordingEvent", { ...t, typeName: X[t.type] });
        }
        onStart() {
          var t;
          this.Ui("tag-version", "15.196.0"),
            this.Ui("page-state", document.visibilityState),
            this.Pa.reset(),
            this.Xe.start(),
            this.initStates(),
            this.$e.start(),
            this.yt &&
              this.Ve &&
              this.yt.subscribe(s.jt, (e) => this.Lp(e), { detailedEvent: !0 }),
            this.E.emitDebugEvents && this.Rr.emit("replayRecordingStarted"),
            csArray.prototype.forEach.call(this.Pi, (e) => this.Up(e)),
            (this.Pi = []),
            this.Vi &&
              ((t = this.se) === null || t === void 0 || t.enableOnlineAssets(),
              (this.Vi = !1));
        }
        onStop() {
          var t;
          this.Xe.stop(),
            this.yt && this.yt.unsubscribe(s.jt),
            this.$e.stop(),
            this.Pa.disconnect(),
            (t = this.se) === null || t === void 0 || t.disableOnlineAssets();
        }
        clearStates() {
          this.$e.flush(),
            this.Pp.cancel(),
            this.pushEvents(),
            this.Y.removeQueryParams();
        }
        initStates() {
          (this.Ia = q.now()),
            this.G.getCurrentRequestIndex().reset(),
            (this.Ks = 0),
            this.Y.setQueryParams(this.iA.getRequestParameters());
        }
        pushEvents() {
          pt(this.Be, (t) => {
            var e;
            return (e = t.flushEvents) === null || e === void 0
              ? void 0
              : e.call(t);
          }),
            this.G.eventsCount() > 0 &&
              (this.isStarted ? this.Op() : this.G.clearEvents());
        }
        Op() {
          if (!this.canSendEvents()) return;
          let t = this.G.getOrderedBatchSlots();
          for (let e of t) {
            let i = e.batch.getEvents();
            if (!i.length) continue;
            this.Hn = i[i.length - 1].date;
            let n = e.metadata.requestIndex,
              o = n.getCurrentIndex(),
              c = this.Ia > this.Hn ? i[0].date : this.Ia;
            this.Y.setQueryParams({
              pn: csString(e.metadata.pageNumber),
              ri: o.toString(),
              rst: c.toString(),
              let: this.getRecordingLastEventTimestamp(),
            });
            let h = this.Y.getQueryParams();
            this.Vt.addBatchInProgress(
              `${h.sn}.${h.pn}.${o}`,
              { ...this.Y.getQueryParams() },
              i
            ),
              this.Y.send(i),
              n.increment(),
              e.batch.clearEvents(),
              this.Hp && this.Hp();
          }
          this.G.clearEmptyBatchSlots();
        }
        addInitialDom(t) {
          this.G.addEventByTimestamp(t), this.Vp(t);
        }
        Lp(t) {
          if (
            this.Vn &&
            (t.plainCustomRequestHeaders ||
              t.plainCustomResponseHeaders ||
              t.requestBodyAttributes ||
              t.responseBodyAttributes ||
              t.customRequestHeaders ||
              t.customResponseHeaders ||
              t.queryParameters ||
              t.requestBody ||
              t.responseBody)
          ) {
            if ((this.Vn.truncate(t), this.lt)) {
              this.lt.registerApiErrorToEncrypt(t);
              return;
            }
            (t.customRequestHeaders = ""),
              (t.customResponseHeaders = ""),
              (t.requestBodyAttributes = ""),
              (t.responseBodyAttributes = ""),
              (t.queryParameters = ""),
              (t.requestBody = ""),
              (t.responseBody = "");
          }
          this.Dp(t);
        }
        Dp(t) {
          if (this.Ks < s.aA) {
            let e = {
              type: X.API_ERROR,
              date: q.now(),
              args: [this.Ve.anonymize(t)],
            };
            this.Is(e),
              (this.Ks = this.Ks + 1),
              st.counters.networkRequests.count("collected");
          }
        }
        cA(t) {
          t === ei.ETR_SESSION
            ? this.Y.setQueryParams({ [s.lA]: s.jp })
            : t === ei.ETR_PAGE && this.Y.setQueryParams({ [s.uA]: s.jp });
        }
        clearEvents() {
          this.G.clearEvents();
        }
        onCustomJavaScriptErrorEvent(t) {
          var e;
          let i =
            (e = this.fs) === null || e === void 0
              ? void 0
              : e.translate({
                  type: "JSError",
                  timestamp: q.now(),
                  message: t.message,
                  colno: t.colno,
                  lineno: t.lineno,
                  filename: t.filename,
                });
          i && this.Is(i);
        }
        onCustomErrorEvent(t) {
          var e;
          let i =
            (e = this.Rs) === null || e === void 0
              ? void 0
              : e.translate({
                  type: "CustomError",
                  timestamp: q.now(),
                  message: t.message,
                  attributes: t.attributes,
                });
          i && this.Is(i);
        }
        onPageEvent(t) {
          this.Bp(t);
        }
        onUserIdentifierEvent(t) {
          var e;
          let i = {
            userIdentifier: t,
            date: q.now(),
            keyId: this.E.encryptionPublicKeyId,
          };
          (e = this.lt) === null ||
            e === void 0 ||
            e.registerUserIdentifierToEncrypt(i);
        }
        onEventTriggerRecording(t, e) {
          this.isStarted
            ? this.Up({ eventName: t, eventType: e })
            : csArray.prototype.push.call(this.Pi, {
                eventName: t,
                eventType: e,
              });
        }
        Up(t) {
          this.cA(t.eventType), this.Bp(t.eventName), this.pushEvents();
        }
        Bp(t) {
          let e = {
            type: X.PAGE_EVENT,
            date: q.now(),
            args: [{ eventName: csString.prototype.slice.call(t, 0, s.hA) }],
          };
          this.G.addEvent(e);
        }
        triggerUnanonymizationConsentGranted() {
          let t = { date: q.now(), type: X.UNANONYMIZED_CONSENT_GRANTED };
          this.G.addEvent(t);
        }
        triggerUnanonymizationConsentWithdrawn() {
          let t = { date: q.now(), type: X.UNANONYMIZED_CONSENT_WITHDRAWN };
          this.G.addEvent(t);
        }
        triggerRecordingForSessionGranted() {
          this.Ui("consent-granted");
        }
        triggerRecordingForSessionWithdrawn() {
          this.Ui("consent-withdrawn");
        }
        activateOnlineAssetsOnNextPageview() {
          this.Bn = !0;
        }
        getStaticResourceManagerStatus() {
          return this.se
            ? {
                isStarted: this.E.useStaticResourceManager && $a.isSupported(),
                onlineAssets: {
                  activated: this.se.isOnlineAssetsActivated(),
                  enabledOnNextPageview: this.Bn,
                },
              }
            : null;
        }
        resetOnlineAssetsOnPageview() {
          (this.Vi = !1), (this.Bn = !1);
        }
        updateOnlineAssetsOnPageview() {
          this.se && this.Bn && ((this.Vi = !0), (this.Bn = !1));
        }
        onRecordingRequestSent(t) {
          this.Hp = t;
        }
        getRecordingStartTimestamp() {
          return this.Ia.toString();
        }
        getRecordingLastEventTimestamp() {
          return this.Hn.toString();
        }
        onOptOut() {
          pt(this.Be, (t) => {
            var e;
            return (e = t.releaseResources) === null || e === void 0
              ? void 0
              : e.call(t);
          });
        }
        Ui(t, e) {
          if (!this.E.emitRecordInfoEvents) return;
          let i = {
            date: q.now(),
            type: X.RECORDING_INFO_EVENT,
            args: e == null ? [t] : [t, e],
          };
          this.G.addEvent(i);
        }
        xp() {
          return this.G.extractEvents(
            X.API_ERROR,
            X.JAVASCRIPT_ERROR,
            X.CUSTOM_ERROR,
            X.TEXT_VISIBILITY,
            X.POINTER_DOWN
          );
        }
      }
      return (
        (s.jt = "RecordingService"),
        (s.hA = 255),
        (s.aA = 20),
        (s.uA = "etrp"),
        (s.lA = "etrs"),
        (s.jp = "1"),
        Z([Qt("addInitialDom")], s.prototype, "addInitialDom", null),
        s
      );
    })(),
    KS = (() => {
      class s extends se {
        constructor(t, e, i) {
          super(),
            (this.ae = t),
            (this.Nt = e),
            (this.Y = i),
            (this.Lu = !1),
            (this.$n = {}),
            (this.dA = (n) => {
              if (n.length !== 0)
                for (let o of n) {
                  let { metadata: c, events: h } = o;
                  this.fA(c.rt) && this.Y.send(h, c);
                }
            }),
            window.addEventListener("focus", () => {
              this.recover();
            });
        }
        onStart() {
          this.$n = {};
        }
        onStop() {}
        recover() {
          this.ae.recover(this.dA);
        }
        addBatchInProgress(t, e, i) {
          this.$n[t] = { metadata: { ...e }, events: i };
        }
        removeBatchInProgress(t) {
          delete this.$n[t];
        }
        blockSendingLastMessage() {
          this.Lu = !1;
        }
        allowSendingLastMessage() {
          this.Lu = !0;
        }
        sendLastMessageBeacon() {
          if (this.Lu) {
            let { ri: t, rst: e, let: i, ...n } = this.Y.getQueryParams();
            (n.hlm = "true"), this.Nt.setQueryParams(n), this.Nt.send();
          }
        }
        fA(t) {
          return (
            !!t &&
            csString.prototype.indexOf.call(t, z.RECORDING_TEMPORARILY) === -1
          );
        }
        saveBatchesInProgress() {
          csArray.prototype.forEach.call(Object.keys(this.$n), (t) => {
            let { metadata: e, events: i } = this.$n[t];
            this.ae.save({
              key: `${e.sn}.${e.pn}.${e.ri}`,
              metadata: { ...e, datatype: "json" },
              events: csJSON.stringify(i),
            });
          });
        }
        save(t) {
          this.ae.save(t);
        }
      }
      return Z([$("RecordingRecovery")], s.prototype, "recover", null), s;
    })();
  function jn(s, r) {
    let t,
      e,
      i,
      n,
      o,
      c = null,
      h = (S) => {
        let y = q.elapsed();
        if (!S && c !== null) {
          let w = r - (y - c);
          if (w >= 1) {
            i = gt.csSetTimeout(h, w);
            return;
          }
        }
        let _ = y - n;
        (i = null), (c = null), (n = null), (o = s.apply(t, [_, ...e]));
      },
      d = function () {
        if (((t = this), (e = arguments), n)) {
          c = q.elapsed();
          return;
        }
        return (n = q.elapsed()), (i = gt.csSetTimeout(h, r)), o;
      };
    return (
      (d.flushPending = () => {
        i && (gt.csClearTimeout(i), h(!0));
      }),
      (d.cancel = () => {
        (c = null), (n = null), i && (gt.csClearTimeout(i), (i = null));
      }),
      d
    );
  }
  var JS = (() => {
      let s;
      return (
        (function (r) {
          r[(r.NOT_EXIST = 2)] = "NOT_EXIST";
        })(s || (s = {})),
        s
      );
    })(),
    QS = 8 * 1024 * 1024,
    ZS = (() => {
      class s extends se {
        constructor(t, e, i) {
          super(),
            (this.Ne = t),
            (this.$p = e),
            (this.Et = i),
            (this.Vu = {}),
            (this.Fp = new Set()),
            (this.ds = !1);
        }
        initState() {
          Lu() &&
            ((this.Ue = this.Et.getRequestParameters()),
            (this.pA = `${this.$p}/exist?${kr.toQuery(this.Ue)}`),
            (this.gA = `${this.$p}/putTag?${kr.toQuery(this.Ue)}`),
            (this.Gp = jn(async () => {
              if (this.ds) {
                this.Gp();
                return;
              }
              this.ds = !0;
              try {
                await this.mA();
              } finally {
                this.ds = !1;
              }
            }, 300)),
            this.Ne.onSendStaticResource((t) => {
              this.zp(t);
            }));
        }
        onStart() {}
        onStop() {}
        onIframeStaticResource(t) {
          this.zp(t);
        }
        zp(t) {
          this.qp(t.resource.hash, t.resource.data),
            t.nestedResources &&
              t.nestedResources.length > 0 &&
              csArray.prototype.forEach.call(t.nestedResources, (e) => {
                this.qp(e.hash, e.data);
              });
        }
        qp(t, e) {
          this.Fp.has(t) || (this.Fp.add(t), (this.Vu[t] = e), this.Gp());
        }
        async mA() {
          let t = this.Vu;
          this.Vu = {};
          let e = await this.yA(t);
          if (!e.length) return;
          let i = this.EA(e);
          await Promise.all(
            csArray.prototype.map.call(i, (n) =>
              window.fetch(this.gA, { method: "POST", body: n })
            )
          );
        }
        async SA(t) {
          try {
            let e = Object.keys(t);
            if (!e.length) return [];
            let i = {
              projectId: this.Ue.pid,
              filter: JS.NOT_EXIST,
              hashes: e,
              touch: !0,
            };
            return await (
              await window.fetch(this.pA, {
                method: "POST",
                body: csJSON.stringify(i),
              })
            ).json();
          } catch {
            return [];
          }
        }
        async yA(t) {
          let e = [],
            i = await this.SA(t);
          return (
            csArray.prototype.forEach.call(i, (n) => {
              let o = t[n];
              o
                ? csArray.prototype.push.call(e, { hash: n, data: o })
                : J.warn("SRM: received unknown hash: " + n);
            }),
            e
          );
        }
        EA(t) {
          let e = 0,
            i = [new FormData()];
          for (let n of t) {
            let { data: o, hash: c } = n,
              h = i.length - 1;
            if (((e = e + o.size), e < QS)) i[h].append("", o, c);
            else {
              let d = new FormData();
              d.append("", o, c),
                (e = o.size),
                csArray.prototype.push.call(i, d);
            }
          }
          return i;
        }
      }
      return s;
    })(),
    td = 2 * 1e3 * 1024,
    tv = 200,
    Ql = (() => {
      class s {
        constructor(t = td) {
          (this.Bt = []), (this.Uu = new Lc(t));
        }
        addEvent(t) {
          this.Uu.addString(bi(t)), csArray.prototype.push.call(this.Bt, t);
        }
        addEventByTimestamp(t) {
          let e = 0;
          for (; e < this.Bt.length && !(this.Bt[e].date >= t.date); e += 1);
          csArray.prototype.splice.call(this.Bt, e, 0, t);
        }
        eventsCount() {
          return this.Bt.length;
        }
        clearEvents() {
          this.Uu.reset(), (this.Bt = []);
        }
        isFull() {
          return this.eventsCount() >= tv;
        }
        isThresholdReached() {
          return this.Uu.isThresholdReached();
        }
        getEvents() {
          return this.Bt;
        }
        extractEvents(...t) {
          let e = [],
            i = [];
          return (
            csArray.prototype.forEach.call(this.Bt, (n) => {
              csArray.prototype.indexOf.call(t, n.type) !== -1
                ? csArray.prototype.push.call(e, n)
                : csArray.prototype.push.call(i, n);
            }),
            (this.Bt = i),
            e
          );
        }
        stringifyEvents() {
          return bi(this.Bt);
        }
        iO(t) {
          t.type === X.INITIAL_DOM &&
            (window.CSDomSerialized = window.CSDomSerialized
              ? window.CSDomSerialized + 1
              : 1);
        }
      }
      return (
        Z([Qt("RecordingBatch.addEvent")], s.prototype, "addEvent", null), s
      );
    })(),
    Zl = (() => {
      class s {
        constructor() {
          this.Oa = 1;
        }
        getCurrentIndex() {
          return this.Oa;
        }
        increment() {
          this.Oa += 1;
        }
        reset() {
          this.Oa = 1;
        }
        getRequestParameters() {
          return { ri: `${this.Oa}` };
        }
      }
      return s;
    })(),
    ev = 3,
    sv = 8,
    iv = (() => {
      class s {
        constructor(t, e = td, i = ev) {
          (this.vA = t), (this.Wp = e), (this.Hu = i), (this.Na = {});
        }
        addEvent(t) {
          this.Yp().addEvent(t);
        }
        addEventByTimestamp(t) {
          this.Yp().addEventByTimestamp(t);
        }
        eventsCount() {
          return csArray.prototype.reduce.call(
            this.Hi(),
            (t, e) => t + e.batch.eventsCount(),
            0
          );
        }
        isFull() {
          return csArray.prototype.some.call(this.Hi(), (t) =>
            t.batch.isFull()
          );
        }
        isThresholdReached() {
          let t = this.Hi();
          return (
            t.length >= this.Hu ||
            csArray.prototype.some.call(t, (e) => e.batch.isThresholdReached())
          );
        }
        getEvents() {
          return csArray.prototype.reduce.call(
            this.getOrderedBatchSlots(),
            (t, e) => csArray.prototype.concat.call(t, e.batch.getEvents()),
            []
          );
        }
        extractEvents(...t) {
          return csArray.prototype.reduce.call(
            this.getOrderedBatchSlots(),
            (e, i) =>
              csArray.prototype.concat.call(e, i.batch.extractEvents(...t)),
            []
          );
        }
        stringifyEvents() {
          return bi(this.getEvents());
        }
        clearEvents() {
          csArray.prototype.forEach.call(this.Hi(), (t) =>
            t.batch.clearEvents()
          );
        }
        clearEmptyBatchSlots() {
          let t = this.getOrderedBatchSlots();
          for (let e = 0; e < t.length - 1; e++)
            t[e].batch.eventsCount() === 0 &&
              delete this.Na[t[e].metadata.pageNumber];
        }
        Hi() {
          return Wm(this.Na);
        }
        getOrderedBatchSlots() {
          return csArray.prototype.sort.call(this.Hi(), rv);
        }
        Xp() {
          let t = this.vA();
          if (t <= 0)
            return {
              batch: new Ql(this.Wp),
              metadata: { pageNumber: 0, requestIndex: new Zl() },
            };
          let e = this.Na[t];
          if (e) return e;
          let i = {
            batch: new Ql(this.Wp),
            metadata: { pageNumber: t, requestIndex: new Zl() },
          };
          return (
            (this.Na[t] = i),
            this.Hi().length > Math.max(this.Hu, sv) &&
              J.warn(
                `RecordingBatchGroup: max number of slots overflowed(${
                  this.Hi().length
                }/${this.Hu})`
              ),
            i
          );
        }
        Yp() {
          return this.Xp().batch;
        }
        getCurrentRequestIndex() {
          return this.Xp().metadata.requestIndex;
        }
      }
      return s;
    })();
  function rv(s, r) {
    return s.metadata.pageNumber - r.metadata.pageNumber;
  }
  function Ee(s, r = 0) {
    let t = Math.pow(10, r);
    return Math.round(s * t) / t;
  }
  var nv = (() => {
      class s {
        constructor(t, e) {
          (this.Ht = t),
            (this.O = e),
            (this.ii = [
              {
                boundElement: window,
                type: "hashchange",
                listener: () => this.hashChangeListener(),
              },
              {
                boundElement: document,
                type: "visibilitychange",
                listener: () => this.visibilityChangeListener(),
              },
            ]);
        }
        onEvent(t) {
          this.B = t;
        }
        start() {
          this.Bi(), this.triggerInitialEvents();
        }
        stop() {
          this.$i();
        }
        Bi() {
          csArray.prototype.forEach.call(this.ii, (t) => Mt(t));
        }
        $i() {
          csArray.prototype.forEach.call(this.ii, (t) => Dt(t));
        }
        triggerInitialEvents() {
          this.hashChangeListener();
        }
        hashChangeListener() {
          let t = {
            type: X.HASH_CHANGE,
            args: [this.O.anonymizePII(this.Ht.href)],
            date: q.now(),
          };
          this.B(t);
        }
        visibilityChangeListener() {
          let t = {
            type: X.VISIBILITY_CHANGE,
            args: [document.visibilityState],
            date: q.now(),
          };
          this.B(t);
        }
      }
      return (
        Z([$("hashChange")], s.prototype, "hashChangeListener", null),
        Z(
          [$("visibilityChange")],
          s.prototype,
          "visibilityChangeListener",
          null
        ),
        s
      );
    })(),
    Yi = (() => {
      let s;
      return (
        (function (r) {
          (r[(r.COPY = 0)] = "COPY"),
            (r[(r.CUT = 1)] = "CUT"),
            (r[(r.PASTE = 2)] = "PASTE");
        })(s || (s = {})),
        s
      );
    })(),
    ut = (() => {
      let s;
      return (
        (function (r) {
          (r[(r.SPACE = 0)] = "SPACE"),
            (r[(r.ENTER = 1)] = "ENTER"),
            (r[(r.BACKSPACE = 2)] = "BACKSPACE"),
            (r[(r.DELETE = 3)] = "DELETE"),
            (r[(r.ARROWUP = 4)] = "ARROWUP"),
            (r[(r.ARROWDOWN = 5)] = "ARROWDOWN"),
            (r[(r.ARROWLEFT = 6)] = "ARROWLEFT"),
            (r[(r.ARROWRIGHT = 7)] = "ARROWRIGHT"),
            (r[(r.CAPSLOCK = 8)] = "CAPSLOCK"),
            (r[(r.SHIFT = 9)] = "SHIFT"),
            (r[(r.TAB = 10)] = "TAB"),
            (r[(r.ALPHANUMERICAL = 11)] = "ALPHANUMERICAL"),
            (r[(r.ESCAPE = 12)] = "ESCAPE"),
            (r[(r.END = 13)] = "END"),
            (r[(r.ALT = 14)] = "ALT"),
            (r[(r.CTRL = 15)] = "CTRL"),
            (r[(r.META = 16)] = "META");
        })(s || (s = {})),
        s
      );
    })();
  function ov(s) {
    if (!j(s)) return null;
    let t = /iP(ad|hone|od).+Version\/(\d+)\..*Safari/i.exec(s);
    return t ? Number(t[2]) : null;
  }
  var tu = "data-cs-scroll-container";
  function av(s) {
    try {
      if (Ct(csEventtarget.apply(s))) return !0;
    } catch {}
    return !1;
  }
  var Xi = (() => {
      let s;
      return (
        (function (r) {
          function t(i) {
            return !!(
              Ct(i) &&
              av(i) &&
              si(csEventtarget.apply(i)) &&
              csEventtarget.apply(i).getAttribute(tu) !== null
            );
          }
          r.isEventOnScrollContainer = t;
          function e() {
            return window.csquerySelector[document.nodeType].call(
              document,
              `[${tu}]`
            );
          }
          r.getScrollContainer = e;
        })(s || (s = {})),
        s
      );
    })(),
    cv = 33,
    lv = (() => {
      class s {
        constructor() {
          (this.eventType = "user"),
            (this.Bu = []),
            (this.IA = [
              {
                type: "pointerup",
                listener: (e) => this.pointerUpListener(e),
                boundElement: document,
              },
              {
                type: "pointermove",
                listener: (e) => this.pointerMoveListener(e),
                boundElement: document,
              },
              {
                type: "pointerdown",
                listener: (e) => this.pointerDownListener(e),
                boundElement: document,
              },
            ]),
            (this.PA = [
              {
                type: "touchstart",
                listener: (e) => this.touchStartListener(e),
                boundElement: document,
              },
              {
                type: "touchmove",
                listener: (e) => this.touchMoveListener(e),
                boundElement: document,
              },
              {
                type: "touchend",
                listener: (e) => this.touchEndCancelListener(e),
                boundElement: document,
              },
              {
                type: "touchcancel",
                listener: (e) => this.touchEndCancelListener(e),
                boundElement: document,
              },
            ]),
            (this.Da = [
              {
                type: "click",
                listener: (e) => this.clickListener(e),
                boundElement: document,
              },
              {
                type: "keyup",
                listener: (e) => this.keyUpListener(e),
                boundElement: document,
              },
              {
                type: "keydown",
                listener: (e) => this.keyDownListener(e),
                boundElement: document,
              },
              {
                type: "copy",
                listener: (e) => this.copyListener(e),
                boundElement: document,
              },
              {
                type: "cut",
                listener: (e) => this.cutListener(e),
                boundElement: document,
              },
              {
                type: "paste",
                listener: (e) => this.pasteListener(e),
                boundElement: document,
              },
              {
                type: "scroll",
                listener: (e) => this.scrollListener(csEventtarget.apply(e)),
                boundElement: document,
              },
              {
                type: "mouseover",
                listener: (e) => this.mouseOverListener(e),
                boundElement: document,
              },
            ]),
            (this.$u = [
              {
                type: "scroll",
                listener: (e) => this.scrollListener(csEventtarget.apply(e)),
              },
            ]);
          let t = ov(window.navigator.userAgent);
          (t === null || (t && t >= 16)) &&
            csArray.prototype.push.call(this.$u, {
              type: "mouseover",
              listener: (e) => this.mouseOverListener(e),
            }),
            (this.pe = new Oi((e, i) => {
              switch (i) {
                case "initial":
                case "added":
                  this.Bi(e);
                  break;
                case "removed":
                  this.$i(e);
                  break;
              }
            }));
        }
        init() {
          this.OA(), this.NA(), this.Fu();
        }
        onEvent(t) {
          csArray.prototype.push.call(this.Bu, t);
        }
        le(t, e = !1) {
          csArray.prototype.forEach.call(this.Bu, (i) => i(t, e));
        }
        start() {
          this.ou(), this.Bi(document), this.pe.observe();
        }
        stop() {
          this.$i(document), this.pe.disconnect(), (this.Bu = []);
        }
        NA() {
          this.MA() && csArray.prototype.push.call(this.Da, ...this.IA);
        }
        OA() {
          this.DA() && csArray.prototype.push.call(this.Da, ...this.PA);
        }
        Bi(t) {
          Mn(t)
            ? csArray.prototype.forEach.call(this.Da, (e) => Mt(e))
            : csArray.prototype.forEach.call(this.$u, (e) => {
                let i = { type: e.type, listener: e.listener, boundElement: t };
                Mt(i);
              });
        }
        $i(t) {
          Mn(t)
            ? csArray.prototype.forEach.call(this.Da, (e) => Dt(e))
            : csArray.prototype.forEach.call(this.$u, (e) => {
                let i = { type: e.type, listener: e.listener, boundElement: t };
                Dt(i);
              });
        }
        MA() {
          return (
            "PointerEvent" in window && typeof window.PointerEvent == "function"
          );
        }
        DA() {
          return (
            "TouchEvent" in window && typeof window.TouchEvent == "function"
          );
        }
        ou() {
          this.kA();
        }
        kA() {
          let t = Xi.getScrollContainer() || document,
            e = At(t),
            i = this.Kp(t);
          if (i.top !== 0 || i.left !== 0) {
            let n = { type: X.SCROLL, args: [e, i.left, i.top], date: q.now() };
            this.le(n, !0);
          }
        }
        Kp(t) {
          return t === document
            ? { top: window.pageYOffset, left: window.pageXOffset }
            : { top: t.scrollTop, left: t.scrollLeft };
        }
        scrollListener(t) {
          if (F.isMaskedElement(t) || F.isMaskedElementChild(t)) return;
          let e = At(t),
            i = this.Kp(t),
            n = { type: X.SCROLL, args: [e, i.left, i.top], date: q.now() };
          this.le(n);
        }
        mouseOverListener(t) {
          if (F.isMaskedElementChild(t.target)) return;
          let e = At(t.target),
            i = { type: X.MOUSE_OVER, args: [e], date: q.now() };
          this.le(i);
        }
        clickListener(t) {
          let e = Gt(t);
          if (F.isMaskedElementChild(e)) return;
          let i = At(e),
            n = { type: X.CLICK, args: [i], date: q.now() };
          this.le(n);
        }
        keyUpListener(t) {
          let e = Gt(t);
          if (F.isMaskedElementChild(e)) return;
          let i = At(e),
            n = this.F[t.key];
          if (n === void 0) return;
          let o = { type: X.KEY_UP, args: [i, n], date: q.now() };
          this.le(o);
        }
        keyDownListener(t) {
          let e = Gt(t);
          if (F.isMaskedElementChild(e)) return;
          let i = At(e),
            n = this.F[t.key];
          if (n === void 0) return;
          let o = { type: X.KEY_DOWN, args: [i, n], date: q.now() };
          this.le(o);
        }
        copyListener(t) {
          let e = Gt(t);
          if (F.isMaskedElementChild(e)) return;
          let i = At(e),
            n = {
              type: X.CLIPBOARD_COMMAND,
              args: [i, Yi.COPY],
              date: q.now(),
            };
          this.le(n);
        }
        cutListener(t) {
          let e = Gt(t);
          if (F.isMaskedElementChild(e)) return;
          let i = At(e),
            n = { type: X.CLIPBOARD_COMMAND, args: [i, Yi.CUT], date: q.now() };
          this.le(n);
        }
        pasteListener(t) {
          let e = Gt(t);
          if (F.isMaskedElementChild(e)) return;
          let i = At(e),
            n = {
              type: X.CLIPBOARD_COMMAND,
              args: [i, Yi.PASTE],
              date: q.now(),
            };
          this.le(n);
        }
        pointerUpListener(t) {
          let e = Gt(t);
          if (F.isMaskedElementChild(e)) return;
          let i = At(e),
            n = {
              type: X.POINTER_UP,
              args: [
                t.pointerId,
                t.pointerType,
                Ee(t.clientX, 1),
                Ee(t.clientY, 1),
                i,
                t.button,
              ],
              date: q.now(),
            };
          this.le(n);
        }
        pointerMoveListener(t) {
          let e = {
            type: X.POINTER_MOVE,
            args: [
              t.pointerId,
              t.pointerType,
              Ee(t.clientX, 1),
              Ee(t.clientY, 1),
            ],
            date: q.now(),
          };
          this.le(e);
        }
        pointerDownListener(t) {
          let e = Gt(t);
          if (F.isMaskedElementChild(e)) return;
          let i = At(e),
            n = {
              type: X.POINTER_DOWN,
              args: [
                t.pointerId,
                t.pointerType,
                Ee(t.clientX, 1),
                Ee(t.clientY, 1),
                i,
                t.button,
                { pageX: Ee(t.pageX, 1), pageY: Ee(t.pageY, 1) },
              ],
              date: q.now(),
            };
          this.le(n);
        }
        touchStartListener(t) {
          if (!t.changedTouches) return;
          let { changedTouches: e } = t;
          for (let i = 0; i < e.length; i += 1) {
            let n = e[i],
              o = {
                type: X.TOUCH_START,
                args: [n.identifier, Ee(n.clientX, 1), Ee(n.clientY, 1)],
                date: q.now(),
              };
            this.le(o);
          }
        }
        touchMoveListener(t) {
          if (!t.changedTouches) return;
          let { changedTouches: e } = t;
          for (let i = 0; i < e.length; i += 1) {
            let n = e[i],
              o = {
                type: X.TOUCH_MOVE,
                args: [n.identifier, Ee(n.clientX, 1), Ee(n.clientY, 1)],
                date: q.now(),
              };
            this.le(o);
          }
        }
        touchEndCancelListener(t) {
          if (!t.changedTouches) return;
          let { changedTouches: e } = t;
          for (let i = 0; i < e.length; i += 1) {
            let n = e[i],
              o = {
                type: t.type === "touchend" ? X.TOUCH_END : X.TOUCH_CANCEL,
                args: [n.identifier, Ee(n.clientX, 1), Ee(n.clientY, 1)],
                date: q.now(),
              };
            this.le(o);
          }
        }
        Fu() {
          (this.F = {}),
            (this.F[" "] = ut.SPACE),
            (this.F.Spacebar = ut.SPACE),
            (this.F.Backspace = ut.BACKSPACE),
            (this.F.Enter = ut.ENTER),
            (this.F.Delete = ut.DELETE),
            (this.F.ArrowUp = ut.ARROWUP),
            (this.F.ArrowDown = ut.ARROWDOWN),
            (this.F.ArrowLeft = ut.ARROWLEFT),
            (this.F.ArrowRight = ut.ARROWRIGHT),
            (this.F.Up = ut.ARROWUP),
            (this.F.Down = ut.ARROWDOWN),
            (this.F.Left = ut.ARROWLEFT),
            (this.F.Right = ut.ARROWRIGHT),
            (this.F.CapsLock = ut.CAPSLOCK),
            (this.F.Shift = ut.SHIFT),
            (this.F.Tab = ut.TAB),
            (this.F.Escape = ut.ESCAPE),
            (this.F.Esc = ut.ESCAPE),
            (this.F.End = ut.END),
            (this.F.Alt = ut.ALT),
            (this.F.Control = ut.CTRL),
            (this.F.Meta = ut.META);
        }
      }
      return (
        Z([Qt("RecordingPageEvents.start")], s.prototype, "start", null),
        Z([$("scroll")], s.prototype, "scrollListener", null),
        Z([$("mouseOver"), Rt(), Mg()], s.prototype, "mouseOverListener", null),
        Z([$("click"), Rt()], s.prototype, "clickListener", null),
        Z([$("Event handler type: keyup")], s.prototype, "keyUpListener", null),
        Z(
          [$("Event handler type: keydown")],
          s.prototype,
          "keyDownListener",
          null
        ),
        Z([$("Event handler type: copy")], s.prototype, "copyListener", null),
        Z([$("Event handler type: cut")], s.prototype, "cutListener", null),
        Z([$("Event handler type: paste")], s.prototype, "pasteListener", null),
        Z(
          [$("Event handler type: pointerup"), Rt()],
          s.prototype,
          "pointerUpListener",
          null
        ),
        Z(
          [$("Event handler type: pointermove"), Rt(), Yn({ wait: cv })],
          s.prototype,
          "pointerMoveListener",
          null
        ),
        Z(
          [$("Event handler type: pointerdown"), Rt()],
          s.prototype,
          "pointerDownListener",
          null
        ),
        Z(
          [$("Event handler type: touchstart"), Rt()],
          s.prototype,
          "touchStartListener",
          null
        ),
        Z(
          [$("Event handler type: touchmove"), Rt()],
          s.prototype,
          "touchMoveListener",
          null
        ),
        Z(
          [$("Event handler type: touchend-cancel"), Rt()],
          s.prototype,
          "touchEndCancelListener",
          null
        ),
        s
      );
    })(),
    uv = (() => {
      class s {
        constructor(t = { maskingEnabled: !0 }) {
          this.xA = t;
        }
        onScannedAsset(t) {
          this.ka = t;
        }
        xa() {
          let t = window.location.href,
            e = csString.prototype.indexOf.call(t, "#");
          return e === -1 ? t : csString.prototype.substring.call(t, 0, e);
        }
        scanCssString(t) {
          this.Gu(Nr(t));
        }
        scanElement(t, e) {
          (this.xA.maskingEnabled &&
            (F.getMaskedElementDetails(t).state !==
              F.MaskedElementState.NotMasked ||
              (e && F.isMaskedAttribute(t, e)))) ||
            (Fn(t)
              ? this.LA(t)
              : lc(t)
              ? this.VA(t, e)
              : (this.UA(t, e), this.HA(t, e), this.jA(t, e)));
        }
        VA(t, e) {
          var i;
          if ((!e || e === "href") && t.href) {
            let o = {
              assetId:
                ((i = t.sheet) === null || i === void 0 ? void 0 : i.href) ||
                t.href,
              assetBasePath: this.xa(),
              assetRawPath: xh(t),
            };
            this.ka({ type: "stylesheet", asset: o });
          }
        }
        LA(t) {
          var e;
          let i = new Set();
          if (t.textContent) for (let o of Nr(t.textContent)) i.add(o);
          let n;
          try {
            n = (e = t.sheet) === null || e === void 0 ? void 0 : e.cssRules;
          } catch (o) {
            o.name === "SecurityError" ||
              o.name === "InvalidAccessError" ||
              J.error(o.message);
          }
          if (n)
            for (let o = 0; o < n.length; o++) {
              let c = n.item(o).cssText;
              for (let h of Nr(c)) i.add(h);
            }
          this.Gu(Ds(i));
        }
        zu(t) {
          return !this.BA(t) && !Le(t) && !$p(t);
        }
        UA(t, e) {
          if (hf(t) || uf(t)) {
            if (!e || e === "src") {
              let i = t.getAttribute("src");
              if (i && this.zu(i)) {
                let n = {
                  assetId: t.src,
                  assetRawPath: i,
                  assetBasePath: this.xa(),
                };
                this.ka({ type: "asset", asset: n });
              }
            }
            (!e || e === "srcset") && t.srcset && this.FA(t.srcset);
          }
        }
        HA(t, e) {
          if (csNodenodeType.apply(t) !== 1) {
            Tt.warn(
              `StaticResourceUrlTracker: Wrong element nodeType: ${
                t == null ? void 0 : t.nodeName
              }/${csNodenodeType.apply(t)}`
            );
            return;
          }
          if (
            t.hasAttribute &&
            (!e || e === "style") &&
            t.hasAttribute("style")
          ) {
            let i = t.getAttribute("style");
            if (typeof i == "string") this.scanCssString(i);
            else throw new Error("Unexpected style: " + t.outerHTML);
          }
        }
        FA(t) {
          this.Gu(kc(t));
        }
        jA(t, e) {
          if (
            (gf(t) || mf(t) || yf(t)) &&
            (!e || e === "href" || e === "xlink:href")
          ) {
            let i = t.getAttribute("href") || t.getAttribute("xlink:href");
            if (i && this.zu(i)) {
              let n = {
                assetId: Os(i),
                assetRawPath: i,
                assetBasePath: this.xa(),
              };
              this.ka({ type: "asset", asset: n });
            }
          }
        }
        Gu(t) {
          return csArray.prototype.forEach.call(
            csArray.prototype.map.call(
              csArray.prototype.filter.call(t, (e) => this.zu(e)),
              (e) => ({ rawUrl: e, absoluteUrl: Os(e) })
            ),
            (e) => {
              let i = {
                assetId: e.absoluteUrl,
                assetBasePath: this.xa(),
                assetRawPath: e.rawUrl,
              };
              this.ka({ type: "asset", asset: i });
            }
          );
        }
        BA(t) {
          return /^https:\/\/\w+:\w+@/.test(t);
        }
      }
      return s;
    })(),
    hv = 30,
    dv = 0,
    ed = (() => {
      class s {
        constructor(t, e = hv, i = dv) {
          (this.GA = t),
            (this.zA = e),
            (this.qA = i),
            (this.Ke = new Hr()),
            (this.Ge = !1),
            (this.qu = 0),
            (this.Jp = () => {
              for (this.qu = 0; this.Ke.length; ) {
                if (this.qu >= this.zA) {
                  csSetTimeout(this.Jp, this.qA);
                  return;
                }
                let n = q.elapsed(),
                  o = this.Ke.pop();
                if (!o) break;
                this.runTask(o);
                let c = q.elapsed() - n;
                this.qu += c;
              }
              this.Ge = !1;
            });
        }
        schedule(t, e = !1) {
          if (!this.GA || e) {
            t();
            return;
          }
          Vt.general.pendingTasks.increase(), this.Ke.push(t), this.WA();
        }
        WA() {
          this.Ge ||
            ((this.Ge = !0),
            csSetTimeout(() => {
              this.Jp();
            }));
        }
        runTask(t) {
          Vt.general.pendingTasks.decrease(), t();
        }
        runPendingTasks() {
          this.Ke.forEach((t) => {
            this.runTask(t);
          }),
            this.Ke.clear();
        }
        clearQueue() {
          Vt.general.pendingTasks.clear(),
            Vt.mutations.pendingMutations.clear(),
            this.Ke.clear();
        }
        isEmpty() {
          return this.Ke.length === 0;
        }
      }
      return (
        Z([$("TaskScheduler"), Qt("runTask")], s.prototype, "runTask", null),
        Z([Qt("runPendingTasks")], s.prototype, "runPendingTasks", null),
        s
      );
    })(),
    fv = (() => {
      class s {
        constructor() {
          (this.Rt = !1),
            (this.Qp = new Mc(
              (t) => t.type === "cssRuleInserted" && this.YA(t)
            )),
            (this.KA = Zn((t) => {
              this.Rt &&
                t.length > 0 &&
                this.M.schedule(() => pt(t, (e) => this.zn.scanElement(e)));
            })),
            (this.JA = ({ type: t, asset: e }) => {
              var i, n, o;
              t === "stylesheet" &&
                ((i = this.QA) === null || i === void 0 || i.call(this, e)),
                (n = this.ZA) === null || n === void 0 || n.call(this, e);
              let c = {
                date: q.now(),
                type: X.STATIC_RESOURCE_URL,
                args: [e.assetId],
              };
              (o = this.B) === null || o === void 0 || o.call(this, c);
            }),
            (this.M = new ed(!0, 30, 0)),
            (this.Cn = new qh((t) => this.tb(t))),
            (this.U = new cs((t) => this.fa(t))),
            (this.zn = new uv()),
            this.zn.onScannedAsset(this.JA);
        }
        onEvent(t) {
          this.B = t;
        }
        onAsset(t) {
          this.ZA = t;
        }
        onStyleSheetFound(t) {
          this.QA = t;
        }
        start() {
          this.Rt ||
            ((this.Rt = !0),
            this.Qp.observe(),
            this.Cn.observe(),
            this.U.observe());
        }
        stop() {
          this.Rt &&
            (this.Qp.disconnect(),
            this.Cn.disconnect(),
            this.U.disconnect(),
            (this.Rt = !1));
        }
        YA(t) {
          !t.rule || !this.Rt || this.zn.scanCssString(t.rule);
        }
        tb(t) {
          this.Rt &&
            F.getMaskedElementDetails(t).state ===
              F.MaskedElementState.NotMasked &&
            this.KA.push(t);
        }
        fa(t) {
          csSetTimeout(() => {
            for (let e of t)
              switch (e.type) {
                case "attributes":
                  this.zn.scanElement(e.target, e.attributeName);
                  break;
                case "characterData":
                  this.eb(e.target);
                  break;
                case "childList":
              }
          });
        }
        eb(t) {
          Nn(t) &&
            csNodeparentNode.apply(t) &&
            Fn(csNodeparentNode.apply(t)) &&
            this.zn.scanCssString(t.data);
        }
      }
      return s;
    })(),
    pv = "csPersisted",
    eu = "v2/recording",
    gv = ["isRecording"],
    sd = [
      "replay:resourceManager:enableForOnlineResource:nextPageviewOnly",
      "cssrm:onlineAssets:activateForNextPageview",
    ],
    mv = ["replay:resourceManager:getStatus", "cssrm:getStatus"],
    yv = (() => {
      class s {
        constructor(
          t,
          e,
          i,
          n,
          o,
          c,
          h,
          d,
          S,
          y,
          _,
          w,
          T,
          M,
          x,
          P,
          N,
          W,
          D,
          L,
          it,
          et
        ) {
          (this.ai = t),
            (this.C = e),
            (this.E = i),
            (this.Ue = n),
            (this.S = o),
            (this.O = c),
            (this.V = h),
            (this.Ee = d),
            (this.ye = S),
            (this.yt = y),
            (this.Ve = _),
            (this.Tt = w),
            (this.w = T),
            (this.ci = M),
            (this.Zp = x),
            (this.Yt = P),
            (this.xt = N),
            (this.Q = W),
            (this.Vn = D),
            (this.ot = L),
            (this.rO = it),
            (this.lt = et),
            (this.La = null);
        }
        init() {
          var t, e, i;
          let n = [],
            o = [];
          csArray.prototype.push.call(o, new NE()),
            (this.qn = new FE(
              this.ot.shouldUseAnonymization(),
              this.E.whitelistedAttributes,
              this.O,
              this.E.anonymizeDigits
            )),
            this.Fi();
          let c = new PS(pv);
          this.sb(c),
            (this.G = new iv(() => {
              var D;
              return (
                ((D = this.C.getSession()) === null || D === void 0
                  ? void 0
                  : D.pageNumber) || 0
              );
            }));
          let h = new fv();
          csArray.prototype.push.call(n, h),
            $a.isSupported() &&
              ((this.se = new $a()),
              (this.Ne = new NS()),
              (this.tg = new ZS(
                this.Ne,
                this.E.getStaticResourceManagerUri(),
                this.Ue
              )),
              this.Zp.addListener(this.tg),
              csArray.prototype.push.call(o, this.se));
          let d = new Lr(
              this.Ue,
              {
                getRequestParameters: () => ({
                  let: this.recordingService.getRecordingLastEventTimestamp(),
                }),
              },
              {
                getRequestParameters: () => ({
                  rst: this.recordingService.getRecordingStartTimestamp(),
                }),
              },
              {
                getRequestParameters: () => ({
                  rt: csArray.prototype.join.call(
                    this.C.getRecordingTypes(),
                    ","
                  ),
                }),
              }
            ),
            S = new Jh(`${this.E.getRecordingUri()}/${eu}`);
          csArray.prototype.push.call(o, this.qn),
            csArray.prototype.push.call(o, new QE(this.Q)),
            csArray.prototype.push.call(o, new tS()),
            (this.Gi = new lv()),
            this.Gi.init(),
            csArray.prototype.push.call(n, this.Gi),
            (this.Vt = new KS(c, S, this.Y)),
            csArray.prototype.push.call(n, new nv(window.location, this.O));
          let y = new OE(),
            _ = new iS(),
            w = new rS(),
            T = new aS(
              this.lt,
              (e = this.E.experimental) === null || e === void 0
                ? void 0
                : e.trackedCustomInputProperties
            ),
            M = new lS(),
            x = csArray.prototype.filter.call(
              [
                _,
                this.Ee,
                y,
                new qS(csArray.prototype.filter.call(n, (D) => D)),
                M,
                new uS(),
                new ES(),
                T,
                w,
              ],
              Boolean
            );
          (this.Ra = new SS()),
            (this.rb = new vS((D) => this.ye.anonymize(D))),
            (this.fs = new zS(this.Ra)),
            csArray.prototype.push.call(x, this.Ra),
            csArray.prototype.push.call(o, this.rb);
          let P = new bS(x, o),
            N = new GS(P, this.w, this.Ne, this.fs, this.Rs),
            W = csArray.prototype.filter.call([y, _, w, T, M], Boolean);
          (this.recordingService = new XS(
            this.E,
            this.G,
            d,
            this.V,
            this.C,
            this.ye,
            this.yt,
            this.Ve,
            this.lt,
            this.Y,
            this.Vt,
            S,
            N,
            n,
            W,
            this.se,
            this.Vn,
            this.fs,
            this.Rs
          )),
            this.ci.addListener(this.recordingService),
            this.Zp.addListener(this.recordingService),
            this.recordingService.init(),
            this.S.register(
              gv,
              () =>
                this.C.isReplayRecorded() &&
                !this.Yt.isUrlExcludedForSessionReplay()
            ),
            this.S.register(sd, () => {
              this.recordingService.activateOnlineAssetsOnNextPageview(),
                this.w.emitRecordingContextChange();
            }),
            this.S.register(mv, () =>
              this.recordingService.getStaticResourceManagerStatus()
            ),
            (this.Wn = new OS(this.w, this.C)),
            this.ci.addListener(this.Wn),
            this.ai.enableRecordingContext(
              this.recordingService,
              this.C,
              this.Wn
            ),
            this.Wu();
        }
        onAfterNaturalPageView() {
          var t;
          this.Yt.isUrlExcludedForSessionReplay()
            ? this.recordingService.resetOnlineAssetsOnPageview()
            : this.recordingService.updateOnlineAssetsOnPageview(),
            (t = this.tg) === null || t === void 0 || t.initState();
        }
        onStartTracking() {
          this.Vt.recover(),
            this.Fi(),
            this.C.isReplayRecorded() &&
              !this.Yt.isUrlExcludedForSessionReplay() &&
              (this.C.isTemporarilyRecorded() &&
                this.recordingService.blockSendingEventsFromQuotaService(),
              this.Va(),
              this.La ||
                ((this.La = new TS(() =>
                  st.counters.featureUsage.count(
                    "form-associated-custom-elements"
                  )
                )),
                this.La.start()));
        }
        onArtificialPageViewEnd() {
          this.C.isReplayRecorded() &&
            !this.Yt.isUrlExcludedForSessionReplay() &&
            !this.C.isTemporarilyRecorded() &&
            this.Vt.sendLastMessageBeacon(),
            this.recordingService.clearStates(),
            this.Yn();
        }
        onAfterArtificialPageView() {
          this.Fi(),
            this.C.isReplayRecorded() &&
            !this.Yt.isUrlExcludedForSessionReplay()
              ? (this.C.isTemporarilyRecorded() &&
                  this.recordingService.blockSendingEventsFromQuotaService(),
                this.recordingService.updateOnlineAssetsOnPageview(),
                this.Va())
              : this.recordingService.resetOnlineAssetsOnPageview();
        }
        onBeforeSessionRenewal() {
          this.recordingService.clearStates(), this.Yn();
        }
        onOptout() {
          var t;
          this.Yn(),
            this.recordingService.onOptOut(),
            (t = this.La) === null || t === void 0 || t.stop();
        }
        onReplayUnanonymizationConsentGranted() {
          this.Fi(),
            this.recordingService.triggerUnanonymizationConsentGranted(),
            this.w.emitRecordingContextChange();
        }
        onReplayUnanonymizationConsentWithdrawn() {
          this.Fi(),
            this.recordingService.triggerUnanonymizationConsentWithdrawn(),
            this.w.emitRecordingContextChange();
        }
        onCollectStateChange(t, e) {
          t === z.QUOTA_REACHED || (t === z.ANALYTICS_ONLY && e === Ue.ETR_OFF)
            ? (this.recordingService.clearEvents(), this.Yn())
            : (this.Y.setQueryParams({
                rt: csArray.prototype.join.call(
                  this.C.getRecordingTypes(),
                  ","
                ),
              }),
              this.recordingService.allowSendingEventsFromQuotaService(),
              this.recordingService.pushEvents(),
              this.Wn.onCollectStateChange(t, e));
        }
        onTargetingRulesMatched() {
          this.C.isReplayRecorded() &&
            !this.Yt.isUrlExcludedForSessionReplay() &&
            !this.recordingService.isRecording() &&
            this.Va();
        }
        onInitialDomStart() {
          this.recordingService.blockSendingEventsFromSerialization(),
            this.Vt.blockSendingLastMessage();
        }
        onInitialDomDone(t) {
          this.recordingService.allowSendingEventsFromSerialization(),
            this.recordingService.addInitialDom(t),
            this.Vt.allowSendingLastMessage(),
            this.Gi.start(),
            this.recordingService.pushEvents();
        }
        onAfterReplayRecordingConsentGranted() {
          this.C.isReplayRecorded() &&
            !this.Yt.isUrlExcludedForSessionReplay() &&
            (this.C.isTemporarilyRecorded() &&
              this.recordingService.blockSendingEventsFromQuotaService(),
            this.Va(),
            this.recordingService.triggerRecordingForSessionGranted());
        }
        onAfterReplayRecordingConsentWithdrawn() {
          this.recordingService.isRecording() &&
            (this.recordingService.triggerRecordingForSessionWithdrawn(),
            this.recordingService.clearStates(),
            this.Yn());
        }
        Wu() {
          var t, e, i, n, o, c;
          if (
            !(
              (i =
                (e =
                  (t = this.E.experimental) === null || t === void 0
                    ? void 0
                    : t.sessionReplay) === null || e === void 0
                  ? void 0
                  : e.shadowRoot) === null || i === void 0
            ) &&
            i.filterByHostSelector
          ) {
            let h =
              (c =
                (o =
                  (n = this.E.experimental) === null || n === void 0
                    ? void 0
                    : n.sessionReplay) === null || o === void 0
                  ? void 0
                  : o.shadowRoot) === null || c === void 0
                ? void 0
                : c.filterByHostSelector;
            pt(h, (d) => {
              ne(d) &&
                cs.setShadowRootFilter((S) => {
                  try {
                    return Pe.call(S.host, d);
                  } catch {
                    return !1;
                  }
                });
            });
          }
        }
        Va() {
          this.recordingService.start(),
            this.Vt.start(),
            this.w.emitRecordingContextChange();
        }
        Yn() {
          this.recordingService.stop(),
            this.Vt.stop(),
            this.w.emitRecordingContextChange();
        }
        sb(t) {
          let e = "byteArray";
          this.Y = this.xt.create(`${this.E.getRecordingUri()}/${eu}`, e, t);
        }
        Fi() {
          var t;
          let e = this.ot.shouldUseAnonymization();
          this.qn.setAnonymization(e),
            (t = this.ib) === null || t === void 0 || t.setAnonymization(e);
        }
      }
      return (
        Z(
          [Qt("Recording.onStartTracking")],
          s.prototype,
          "onStartTracking",
          null
        ),
        Z([Qt("onInitialDomDone")], s.prototype, "onInitialDomDone", null),
        s
      );
    })(),
    Ev = (() => {
      class s extends Wt {
        validateArgs(t) {
          return !!dt(t);
        }
        execute() {
          this.commandsService.applyFromImplementation(
            sd[0],
            [],
            "SrmOnlineAssetsTemplate"
          );
        }
      }
      return s;
    })(),
    Sv = (() => {
      class s {
        constructor(t) {
          (this.Mt = t), (this.ue = []);
        }
        handleCommand(t) {
          if (Xe(t) && (this.Xn(t), this.Mt.isNaturalPageViewSent())) {
            let e = this.Mt.getTrackingContext();
            e !== null && this.$t(t, e);
          }
        }
        Xn(t) {
          csArray.prototype.push.call(this.ue, t);
        }
        executeRegisteredCallbacks() {
          let t = this.Mt.getTrackingContext();
          t !== null &&
            csArray.prototype.map.call(this.ue, (e) => this.$t(e, t));
        }
        $t(t, e) {
          csSetTimeout(() => {
            t(e);
          });
        }
      }
      return s;
    })(),
    vv = (() => {
      class s {
        constructor(t) {
          (this.Mt = t), (this.zi = []);
        }
        handleCommand(t) {
          if (this.Mt.isNaturalPageViewSent()) return this.nb(t);
          this.Kn(t);
        }
        nb(t) {
          let e = this.Mt.getSessionKey();
          return this.eg(t) && e !== null && this.$t(t.callback, e), e;
        }
        Kn(t) {
          this.eg(t) && csArray.prototype.push.call(this.zi, t.callback);
        }
        flushPendingCallbacks() {
          let t = this.Mt.getSessionKey();
          t !== null &&
            csArray.prototype.forEach.call(this.zi, (e) => {
              this.$t(e, t);
            }),
            (this.zi = []);
        }
        eg(t) {
          return t && typeof t.callback == "function";
        }
        $t(t, e) {
          csSetTimeout(() => {
            t(e);
          });
        }
      }
      return s;
    })(),
    _v = (() => {
      class s {
        constructor() {
          this.ue = new Set();
        }
        handleCommand(t, e) {
          return !Xe(t) || this.ue.has(t)
            ? null
            : (this.ue.add(t),
              e && ((this.Oe = e), this.sg(t, e)),
              () => this.ue.delete(t));
        }
        executeCallbacks(t) {
          this.ob(t) && ((this.Oe = t), this.ue.forEach((e) => this.sg(e, t)));
        }
        sg(t, e) {
          csSetTimeout(() => {
            try {
              t(e);
            } catch {}
          });
        }
        ob(t) {
          let {
            isRecording: e,
            recordingStartTimestamp: i,
            etrState: n,
            etrStatus: o,
            collectState: c,
          } = t;
          return (
            this.Oe &&
            (this.Oe.isRecording !== e ||
              this.Oe.recordingStartTimestamp !== i ||
              this.Oe.etrState !== n ||
              this.Oe.etrStatus !== o ||
              this.Oe.collectState !== c)
          );
        }
      }
      return s;
    })();
  function wv(s, r) {
    let {
        isRecording: t,
        pageNumber: e,
        projectId: i,
        siteId: n,
        uxaDomain: o,
        csLiteDomain: c,
      } = s,
      h = /^(.+)\.(\d+)$/.exec(s.sessionKey),
      d;
    if (t && h) {
      let [, S, y] = h;
      n
        ? (d = `${c}/sites/${n}/player?uu=${S}&sn=${y}&pn=${e}`)
        : (d = `${o}/quick-playback/index.html?pid=${i}&uu=${S}&sn=${y}&pvid=${e}&recordingType=cs`),
        r.withTimestamp && (d += `&t=${q.now() - r.recordingStartTimestamp}`);
    }
    return { replayLink: d, isRecording: t };
  }
  var Av = (() => {
      class s {
        constructor(t) {
          this.Mt = t;
        }
        handleCommand(t, e) {
          Ki(t) && Xe(e) && this.$t(t, e);
        }
        $t(t, e) {
          csSetTimeout(() => {
            let i = this.Mt.getTrackingContext();
            if (i) {
              let n = wv(i, t);
              e(n);
            }
          });
        }
      }
      return s;
    })(),
    Zs = (() => {
      let s;
      return (
        (function (r) {
          function t(n) {
            return n.replayConsentRequiredForSession;
          }
          r.isReplayConsentNeeded = t;
          function e(n) {
            return (
              n.collectState === z.RECORDING_BLOCKED_BY_CONSENT_NOT_EXPRESSED ||
              n.collectState === z.RECORDING_BLOCKED_BY_CONSENT_WITHDRAWN
            );
          }
          r.isRecordingBlockedByConsent = e;
          function i(n) {
            return n.collectState === z.RECORDING_BLOCKED_BY_CONSENT_WITHDRAWN;
          }
          r.isRecordingWithDrawn = i;
        })(s || (s = {})),
        s
      );
    })(),
    Sn = (() => {
      let s;
      return (
        (function (r) {
          (r[(r.NOT_NEEDED = 1)] = "NOT_NEEDED"),
            (r[(r.NOT_EXPRESSED = 2)] = "NOT_EXPRESSED"),
            (r[(r.WITHDRAWN = 3)] = "WITHDRAWN"),
            (r[(r.GRANTED = 4)] = "GRANTED");
        })(s || (s = {})),
        s
      );
    })(),
    bv = (() => {
      class s {
        constructor(t, e, i, n, o, c) {
          (this.N = t),
            (this.C = e),
            (this.E = i),
            (this.ls = n),
            (this.A = o),
            (this.ht = c),
            (this.ig = !1);
        }
        isNaturalPageViewSent() {
          return this.ig;
        }
        setNaturalPageViewSent(t) {
          this.ig = t;
        }
        getTrackingContext() {
          let t = this.C.getSession();
          if (!t) return null;
          let e = this.getSessionKey();
          if (!e) return null;
          let i = this.E.projectId,
            n = this.E.uxaDomain,
            o = t.pageNumber,
            c = this.ls.getPageViewType(),
            h = this.C.isReplayRecorded(),
            d = this.ab(t),
            S,
            y;
          return (
            this.E.experiments &&
              ((S = this.A.getUrl()), (y = this.ht.getAllValidCustomVars())),
            {
              projectId: i,
              sessionKey: e,
              pageNumber: o,
              pageViewType: c,
              isRecording: h,
              uxaDomain: n,
              recordingConsentState: d,
              ...this.E.smbConfig,
              pageViewUrl: S,
              customVariables: y,
            }
          );
        }
        getSessionKey() {
          let t = this.N.getVisitor();
          return t ? `${t.id}.${t.visitsCount}` : null;
        }
        ab(t) {
          return Zs.isReplayConsentNeeded(this.E)
            ? t.collectState === z.RECORDING_BLOCKED_BY_CONSENT_NOT_EXPRESSED
              ? Sn.NOT_EXPRESSED
              : t.collectState === z.RECORDING_BLOCKED_BY_CONSENT_WITHDRAWN
              ? Sn.WITHDRAWN
              : Sn.GRANTED
            : Sn.NOT_NEEDED;
        }
      }
      return s;
    })(),
    id = ["afterPageView"],
    Tv = ["getSessionKey"],
    Rv = ["getPageviewContext"],
    Cv = ["onRecordingContextChange", "onRecordingStateChange"],
    Iv = ["replay:link:generate"],
    Pv = (() => {
      class s {
        constructor(t, e, i, n, o, c, h, d, S, y) {
          (this.N = t),
            (this.C = e),
            (this.S = i),
            (this.mt = n),
            (this.Z = o),
            (this.E = c),
            (this.ls = h),
            (this.ai = d),
            (this.A = S),
            (this.ht = y),
            (this.rg = null);
        }
        init() {
          (this.Mt = new bv(this.N, this.C, this.E, this.ls, this.A, this.ht)),
            (this.Yu = new Sv(this.Mt)),
            (this.ng = new vv(this.Mt)),
            (this.Jn = new _v()),
            (this.cb = new Av(this.Mt)),
            this.S.register(Tv, (t) => this.ng.handleCommand(t)),
            this.S.register(id, (t) => this.Yu.handleCommand(t)),
            this.S.register(Rv, (t) => t(this.Mt.getTrackingContext())),
            this.S.register(Cv, (t) =>
              this.Jn.handleCommand(t, this.ai.getRecordingContext())
            ),
            this.S.register(Iv, (t, e) => {
              this.Ir &&
                this.cb.handleCommand(
                  {
                    ...t,
                    recordingStartTimestamp:
                      this.ai.getRecordingContext().recordingStartTimestamp,
                  },
                  e
                );
            });
        }
        onAfterNaturalPageView() {
          var t;
          this.Mt.setNaturalPageViewSent(!0),
            this.ng.flushPendingCallbacks(),
            this.Yu.executeRegisteredCallbacks(),
            (t = this.rg) === null ||
              t === void 0 ||
              t.sendAfterPageViewCallbackToChildren();
        }
        onAfterArtificialPageView() {
          var t;
          this.Yu.executeRegisteredCallbacks(),
            (t = this.rg) === null ||
              t === void 0 ||
              t.sendAfterPageViewCallbackToChildren();
        }
        onCollectStateChange() {
          this.executeRecordingContextChangeCallbacks();
        }
        onRecordingContextChange() {
          this.executeRecordingContextChangeCallbacks();
        }
        executeRecordingContextChangeCallbacks() {
          this.Jn.executeCallbacks(this.ai.getRecordingContext());
        }
        setRecordingService(t) {
          this.Ir = t;
        }
      }
      return (
        Z(
          [Yn({ wait: 0, mode: "trailing" })],
          s.prototype,
          "executeRecordingContextChangeCallbacks",
          null
        ),
        s
      );
    })(),
    Oe = (() => {
      class s {
        onEvent(t) {
          this.onEventCallback = t;
        }
        constructor(t, e, i, n) {
          (this.commandsService = t),
            (this.condition = i),
            (this.experimentalConfig = n),
            (this.isStarted = !1),
            (this.og = !1),
            (this.args = e);
        }
        start() {
          this.og || (this.onInit(), (this.og = !0)),
            this.isStarted || (this.onStart(), (this.isStarted = !0));
        }
        stop() {
          this.isStarted && (this.onStop(), (this.isStarted = !1));
        }
      }
      return (
        Z([$()], s.prototype, "start", null),
        Z([$()], s.prototype, "stop", null),
        s
      );
    })(),
    Ov = (() => {
      class s extends Oe {
        validateArgs(t) {
          return !!dt(t);
        }
        lb() {
          this.isStarted && this.onEventCallback();
        }
        onInit() {
          this.commandsService.applyFromImplementation(
            id[0],
            [() => this.lb()],
            "AfterPageViewTrigger"
          );
        }
        onStart() {}
        onStop() {}
      }
      return s;
    })(),
    za = (() => {
      class s extends Oe {
        constructor() {
          super(...arguments),
            (this.Xu = { pageviewTypes: ["natural", "artificial"] });
        }
        validateArgs(t) {
          var e;
          return (
            (dt(t) &&
              Ki(t) &&
              csArray.isArray(t.pageviewTypes) &&
              Hu(t.pageviewTypes, (n) => j(n))) ||
              (J.implementation(
                `BeforePageViewTrigger has wrong argument: ${
                  (e = this.args) === null || e === void 0
                    ? void 0
                    : e.pageviewTypes
                }, fallback to default config.`
              ),
              (this.args = this.Xu)),
            !0
          );
        }
        onInit() {
          this.hb = this.args.pageviewTypes;
        }
        onPageView(t) {
          this.isStarted &&
            csArray.prototype.indexOf.call(this.hb, t) !== -1 &&
            this.onEventCallback();
        }
        onStart() {}
        onStop() {}
      }
      return s;
    })(),
    su = "once per pageview",
    Nv = "always",
    Mv = (() => {
      class s extends Oe {
        constructor() {
          super(...arguments), (this.vt = !0);
        }
        validateArgs(t) {
          if (dt(t)) {
            let e = j(t.selector),
              i = t.frequency ? t.frequency === su || t.frequency === Nv : !0;
            return e && i;
          }
          return !1;
        }
        onInit() {
          if (!ne(this.args.selector)) {
            this.vt = !1;
            return;
          }
          (this.Qn = this.args.frequency ? this.args.frequency === su : !0),
            (this.K = new Ke((t, e) => this.R(t, e)));
        }
        onStart() {
          this.vt && this.K.observe(this.args.selector);
        }
        onStop() {
          this.vt && (this.K.processPendingMutations(), this.K.disconnect());
        }
        R(t, e) {
          e === "added" &&
            (this.Qn
              ? (this.stop(), this.onEventCallback({ element: t[0] }))
              : new Set(t).forEach((i) =>
                  this.onEventCallback({ element: i })
                ));
        }
      }
      return s;
    })(),
    iu = "once per pageview",
    Dv = "always",
    kv = (() => {
      class s extends Oe {
        constructor() {
          super(...arguments), (this.Ku = !1), (this.ji = !1), (this.Qn = !0);
        }
        validateArgs(t) {
          if (dt(t)) {
            let e = j(t.selector),
              i = t.frequency ? t.frequency === iu || t.frequency === Dv : !0;
            return e && i;
          }
          return !1;
        }
        onInit() {
          if (!Hn.isSupported()) return;
          (this.ji = !0),
            (this.Qn = this.args.frequency ? this.args.frequency === iu : !0);
          let t = this.ag();
          (this.W = new Ke(
            (e, i) => {
              if (i === "initial")
                for (let n of e)
                  bt.isVisibleInViewportInForeground(n) && (n[this.Ju] = !0);
              this.Qu(e);
            },
            { closest: t }
          )),
            (this.Dt = new Hn({
              delay: 0,
              trackOnce: !1,
              reobserve: !0,
              allowSameMatch: !0,
            }));
        }
        onStart() {
          !this.ji ||
            this.isStarted ||
            ((this.Ju = csSymbol("skipElement")),
            (this.Ku = !1),
            this.Dt.start((t, e) => this.Zu(t, e)),
            this.W.observe(this.args.selector));
        }
        onStop() {
          !this.ji || !this.isStarted || (this.W.disconnect(), this.Dt.stop());
        }
        Zu(t, e) {
          if (this.isStarted && e === Pr.VisibleInViewPort) {
            let n = this.ag() ? t.closest(this.args.selector) : t;
            if (n) {
              if (n && n[this.Ju]) {
                delete n[this.Ju];
                return;
              }
              this.Qn && this.stop(),
                (!this.Qn || !this.Ku) &&
                  ((this.Ku = !0), this.onEventCallback({ element: n }));
            }
          }
        }
        Qu(t) {
          for (let e of t) this.Dt.observe(e);
        }
        ag() {
          var t;
          return (
            ((t = this.experimentalConfig) === null || t === void 0
              ? void 0
              : t.useClosestElement) === !0
          );
        }
      }
      return s;
    })(),
    xv = (() => {
      class s extends Oe {
        constructor() {
          super(...arguments),
            (this.th = !1),
            (this.vt = !0),
            (this.ni = !0),
            (this.li = {
              boundElement: document,
              type: "click",
              listener: (t) => {
                if (this.th) {
                  this.th = !1;
                  return;
                }
                this.onClickOrTap(t);
              },
            }),
            (this.db = (t, e) => {
              t.type === zt.TAP && ((this.th = !0), this.onClickOrTap(e));
            });
        }
        validateArgs(t) {
          return dt(t) ? j(t.selector) : !1;
        }
        onClickOrTap({ target: t }) {
          if (Ct(t) && si(t)) {
            let e = Qi(t, this.args.selector);
            e && this.onEventCallback({ element: e });
          }
        }
        onInit() {
          if (!ne(this.args.selector)) {
            this.vt = !1;
            return;
          }
          this.Dn = new Wh(this.db);
        }
        onStart() {
          var t;
          this.vt &&
            (Mt(this.li, this.ni),
            (t = this.Dn) === null || t === void 0 || t.observe());
        }
        onStop() {
          var t;
          this.vt &&
            (Dt(this.li, this.ni),
            (t = this.Dn) === null || t === void 0 || t.disconnect());
        }
      }
      return Z([$("onClickOrTap"), Rt()], s.prototype, "onClickOrTap", null), s;
    })(),
    Lv = (() => {
      class s extends Oe {
        constructor() {
          super(...arguments), (this.vt = !0), (this.cg = !1);
        }
        validateArgs(t) {
          return dt(t) ? j(t.selector) : !1;
        }
        onInit() {
          if (!ne(this.args.selector)) {
            this.vt = !1;
            return;
          }
          this.K = new Ke((t, e) => {
            this.R(t, e);
          });
        }
        onStart() {
          this.vt && (this.K.observe(this.args.selector), (this.cg = !0));
        }
        onStop() {
          this.vt && (this.K.processPendingMutations(), this.K.disconnect());
        }
        R(t, e) {
          this.cg
            ? e === "added" &&
              new Set(t).forEach((i) => this.onEventCallback({ element: i }))
            : this.onEventCallback({ element: t[0] });
        }
      }
      return s;
    })(),
    Vv = (() => {
      class s extends Oe {
        constructor() {
          super(...arguments), (this.vt = !0);
        }
        validateArgs(t) {
          return dt(t) ? j(t.selector) : !1;
        }
        onInit() {
          if (!ne(this.args.selector)) {
            this.vt = !1;
            return;
          }
          (this.W = new Ke((t) => this.fb(t))),
            (this.U = new cs((t) => this.pb(t)));
        }
        onStart() {
          this.vt &&
            ((this.Ua = csSymbol("MatchingElement")),
            this.W.observe(this.args.selector),
            this.U.observe());
        }
        onStop() {
          this.vt &&
            (this.W.processPendingMutations(),
            this.W.disconnect(),
            this.U.disconnect());
        }
        fb(t) {
          new Set(t).forEach((e) => this.gb(e));
        }
        pb(t) {
          let e = ac(t, (n) => n.removedNodes),
            i = [];
          for (let n of e) csArray.prototype.push.call(i, ...this.mb(n));
          new Set(i).forEach((n) => this.onEventCallback({ element: n }));
        }
        gb(t) {
          t[this.Ua] = !0;
        }
        mb(t) {
          let e = [];
          return (
            _e(t, NodeFilter.SHOW_ELEMENT).visitAll((i) => {
              i[this.Ua] &&
                (bt.isConnected(i)
                  ? Pe.call(i, this.args.selector) || delete i[this.Ua]
                  : delete i[this.Ua],
                csArray.prototype.push.call(e, i));
            }),
            e
          );
        }
      }
      return s;
    })(),
    Uv = (() => {
      class s extends Oe {
        constructor() {
          super(...arguments), (this.Ha = !0);
        }
        validateArgs(t) {
          return dt(t) ? j(t.selector) : !1;
        }
        onInit() {
          if (!ne(this.args.selector) || !Hn.isSupported()) {
            this.Ha = !1;
            return;
          }
          (this.Dt = new Hn({ delay: 0, trackOnce: !0, reobserve: !0 })),
            (this.W = new Ke((t) => this.Qu(t), { closest: !0 }));
        }
        Qu(t) {
          for (let e of t) this.Dt.observe(e);
        }
        Zu(t, e) {
          if (this.isStarted && e === Pr.VisibleInViewPort) {
            let i = Qi(t, this.args.selector);
            i &&
              (this.onEventCallback({ element: i }),
              this.stop(),
              (this.Ha = !1));
          }
        }
        onStart() {
          this.Ha &&
            (this.Dt.start((t, e) => this.Zu(t, e)),
            this.W.observe(this.args.selector));
        }
        onStop() {
          this.Ha && (this.Dt.stop(), this.W.disconnect());
        }
      }
      return s;
    })(),
    Hv = (() => {
      class s extends Oe {
        constructor() {
          super(...arguments),
            (this.vt = !0),
            (this.ni = !0),
            (this.li = {
              boundElement: document,
              type: "submit",
              listener: (t) => this.submitListener(t),
            });
        }
        validateArgs(t) {
          return dt(t) ? j(t.selector) : !1;
        }
        submitListener({ target: t }) {
          Ct(t) &&
            si(t) &&
            Pe.call(t, this.args.selector) &&
            this.onEventCallback({ element: t });
        }
        onInit() {
          ne(this.args.selector) || (this.vt = !1);
        }
        onStart() {
          this.vt && Mt(this.li, this.ni);
        }
        onStop() {
          this.vt && Dt(this.li, this.ni);
        }
      }
      return (
        Z([$("submitListener"), Rt()], s.prototype, "submitListener", null), s
      );
    })(),
    jv = (() => {
      class s extends Oe {
        constructor() {
          super(...arguments),
            (this.li = {
              boundElement: window,
              type: "hashchange",
              listener: (t) => this.hashChangedListener(t),
            });
        }
        validateArgs(t) {
          return !!dt(t);
        }
        hashChangedListener(t) {
          (t.newURL && t.newURL === t.oldURL) || this.onEventCallback();
        }
        onInit() {}
        onStart() {
          Mt(this.li);
        }
        onStop() {
          Dt(this.li);
        }
      }
      return (
        Z(
          [$("hashChangedListener"), Rt()],
          s.prototype,
          "hashChangedListener",
          null
        ),
        s
      );
    })(),
    Bv = (() => {
      class s {
        static yb() {
          var t, e, i, n;
          if ("history" in window) {
            let o = Object.getOwnPropertyDescriptors(history);
            if (
              !((t = o.pushState) === null || t === void 0) &&
              t.writable &&
              !((e = o.replaceState) === null || e === void 0) &&
              e.writable
            )
              return history;
          }
          if (History.prototype) {
            let o = Object.getOwnPropertyDescriptors(History.prototype);
            if (
              !((i = o.pushState) === null || i === void 0) &&
              i.writable &&
              !((n = o.replaceState) === null || n === void 0) &&
              n.writable
            )
              return History.prototype;
          }
          Tt.warn(
            "Unable to override pushState, replaceState",
            !0,
            "HistoryChangeObserver"
          );
        }
        static eh() {
          let t = s.yb();
          s.Zn === null &&
            Xe(t == null ? void 0 : t.pushState) &&
            (s.Zn = ss({
              target: t,
              methodName: "pushState",
              hook: ({ args: e }) => {
                s.lg("pushstate", e);
              },
            })),
            s.to === null &&
              Xe(t == null ? void 0 : t.replaceState) &&
              (s.to = ss({
                target: t,
                methodName: "replaceState",
                hook: ({ args: e }) => {
                  s.lg("replacestate", e);
                },
              }));
        }
        static dn(t) {
          var e, i;
          s.St.add(t),
            s.St.size === 1 &&
              ((s.Zn === null || s.to === null) && s.eh(),
              (e = s.Zn) === null || e === void 0 || e.activate(),
              (i = s.to) === null || i === void 0 || i.activate(),
              Mt(s.ug),
              Mt(s.hg));
        }
        static Sn(t) {
          var e, i;
          s.St.delete(t),
            s.St.size === 0 &&
              ((e = s.Zn) === null || e === void 0 || e.deactivate(),
              (i = s.to) === null || i === void 0 || i.deactivate(),
              Dt(s.ug),
              Dt(s.hg));
        }
        static lg(t, e) {
          let i = { type: t, state: e[0] };
          j(e[2]) && (i.url = e[2]), s.wr(i);
        }
        static popstateListener(t) {
          s.wr({ type: "popstate", state: t.state });
        }
        static hashchangeListener(t) {
          s.wr({ type: "hashchange", state: null, url: t.newURL });
        }
        static wr(t) {
          csArray.prototype.forEach.call(Ds(s.St), (e) => {
            e(t);
          });
        }
        constructor(t) {
          this.R = t;
        }
        observe() {
          s.dn(this.R);
        }
        disconnect() {
          s.Sn(this.R);
        }
      }
      return (
        (s.Zn = null),
        (s.to = null),
        (s.ug = {
          boundElement: gt,
          type: "popstate",
          listener: (r) => s.popstateListener(r),
        }),
        (s.hg = {
          boundElement: gt,
          type: "hashchange",
          listener: (r) => s.hashchangeListener(r),
        }),
        (s.St = new Set()),
        vt([$("popstateListener"), Rt()], s, "popstateListener", null),
        vt([$("hashchangeListener"), Rt()], s, "hashchangeListener", null),
        s
      );
    })(),
    $v = (() => {
      class s extends Oe {
        validateArgs(t) {
          if (dt(t)) {
            let e = j(t.useDebounce),
              i =
                t.useDebounce === "yes"
                  ? Ht(t == null ? void 0 : t.window)
                  : !0,
              n = j(t.listeners);
            return e && i && n;
          }
          return !1;
        }
        onInit() {
          this.args.useDebounce === "yes"
            ? (this.Cs = jn(() => {
                this.onEventCallback();
              }, this.args.window))
            : (this.Cs = this.onEventCallback),
            (this.K = new Bv((t) => this.Eb(t)));
        }
        dg() {
          return window.location.href;
        }
        Eb(t) {
          let e =
              t.type === "replacestate" &&
              this.args.listeners.indexOf("replaceState") === -1,
            i =
              t.type === "hashchange" &&
              this.args.listeners.indexOf("hashchange") === -1;
          if (e || i) return;
          let n = this.dg();
          this.fg !== n && ((this.fg = n), this.Cs());
        }
        onStart() {
          (this.fg = this.dg()), this.K.observe();
        }
        onStop() {
          this.K.disconnect();
        }
      }
      return s;
    })(),
    Fv = (() => {
      class s extends Oe {
        constructor() {
          super(...arguments),
            (this.vt = !0),
            (this.pg = {
              boundElement: document,
              type: "mouseover",
              listener: (t) => this.mouseoverListener(t),
            }),
            (this.gg = {
              boundElement: document,
              type: "mouseleave",
              listener: (t) => this.mouseleaveListener(t),
            });
        }
        validateArgs(t) {
          return dt(t) ? j(t.selector) : !1;
        }
        onInit() {
          ne(this.args.selector) || (this.vt = !1);
        }
        mouseleaveListener({ target: t }) {
          Ct(t) && si(t) && t[this.ja] && delete t[this.ja];
        }
        mouseoverListener({ target: t }) {
          if (Ct(t) && si(t)) {
            let e = Qi(t, this.args.selector);
            e !== null &&
              !e[this.ja] &&
              ((e[this.ja] = !0), this.onEventCallback({ element: e }));
          }
        }
        onStart() {
          this.vt &&
            ((this.ja = csSymbol("Hovered")), Mt(this.gg, !0), Mt(this.pg, !0));
        }
        onStop() {
          this.vt && (Dt(this.pg), Dt(this.gg));
        }
      }
      return (
        Z(
          [$("mouseleaveListener"), Rt()],
          s.prototype,
          "mouseleaveListener",
          null
        ),
        Z(
          [$("mouseoverListener"), Rt()],
          s.prototype,
          "mouseoverListener",
          null
        ),
        s
      );
    })(),
    Gv = (() => {
      class s {
        static readyStateChangeListener(t) {
          csArray.prototype.forEach.call(Ds(s.callbacks), (e) => e(t));
        }
        static Eu(t) {
          s.callbacks.has(t) ||
            (s.callbacks.add(t),
            s.callbacks.size === 1 && Mt(s.eventHandler, !1));
        }
        static Su(t) {
          s.callbacks.delete(t),
            s.callbacks.size === 0 && Dt(s.eventHandler, !1);
        }
        constructor(t) {
          this.R = t;
        }
        observe() {
          s.Eu(this.R);
        }
        disconnect() {
          s.Su(this.R);
        }
      }
      return (
        (s.callbacks = new Set()),
        (s.eventHandler = {
          boundElement: gt.document,
          type: "readystatechange",
          listener: s.readyStateChangeListener,
        }),
        vt(
          [$("readyStateChangeListener"), Rt()],
          s,
          "readyStateChangeListener",
          null
        ),
        s
      );
    })(),
    zv = (() => {
      class s extends Oe {
        constructor() {
          super(...arguments), (this.Xu = { state: "Any" });
        }
        validateArgs(t) {
          var e;
          return (
            (dt(t) && j(t.state)) ||
              (J.implementation(
                `PageStateTrigger has wrong argument: ${
                  (e = this.args) === null || e === void 0 ? void 0 : e.state
                }, fallback to default config.`
              ),
              (this.args = this.Xu)),
            !0
          );
        }
        onInit() {
          (this.kt = this.args.state.toLowerCase()),
            (this.K = new Gv(() => {
              this.mg(this.kt, document.readyState) &&
                (this.onEventCallback(), this.K.disconnect());
            }));
        }
        onStart() {
          this.mg(this.kt, document.readyState)
            ? this.onEventCallback()
            : this.K.observe();
        }
        onStop() {
          this.K.disconnect();
        }
        mg(t, e) {
          let i = s.yg[e];
          return s.yg[t] <= i;
        }
      }
      return (s.yg = { complete: 3, interactive: 2, loading: 1, any: 0 }), s;
    })(),
    qv = (() => {
      class s {
        constructor(t, e) {
          (this.S = t),
            (this.Sb = e),
            (this.vb = {
              ApiErrorsMaskUrl: Gm,
              NetworkRequestMaskUrls: Uy,
              ArtificialPageview: Oh,
              BlockAllowListForSr: iy,
              CustomError: ry,
              CustomVariable: ay,
              DataCsEncrypt: ly,
              DataCsOverride: hy,
              DynamicVariable: Sy,
              EcTransactionAll: Ry,
              EcTransactionCreate: Cy,
              EcTransactionItemsAdd: Iy,
              EcTransactionSend: Py,
              ElementUnmasking: Oy,
              EventTriggerRecordingPage: xy,
              EventTriggerRecordingSession: Ly,
              PageEvent: Hy,
              PiiMasking: jy,
              RecordingEventTrigger: By,
              SetPath: $y,
              SetQuery: Fy,
              SrmOnlineAssets: Ev,
            }),
            (this.Pr = {
              AfterPageView: Ov,
              ElementAdded: Mv,
              ElementBecomesVisible: kv,
              ElementExist: Lv,
              ElementRemoved: Vv,
              ElementVisibility: Uv,
              ElementClick: xv,
              FormSubmit: Hv,
              HashChange: jv,
              HistoryChange: $v,
              Mouseover: Fv,
              PageState: zv,
              BeforePageView: za,
            });
        }
        _b(t) {
          let e = this.vb[t.name];
          return e
            ? new e(this.S, t.args)
            : (J.error(`Implementations: template ${t.name} does not exist`),
              null);
        }
        wb(t) {
          var e;
          let i = this.Pr[t.name];
          if (!i)
            return (
              J.error(`Implementations: trigger ${t.name} does not exist`), null
            );
          let n = (e = this.Sb) === null || e === void 0 ? void 0 : e[t.name];
          return new i(this.S, t.args, t.condition, n);
        }
        parse(t) {
          let e = [];
          for (let { triggers: i, template: n } of t) {
            let o = this._b(n);
            if (!o) continue;
            if (!o.validateArgs(o.args)) {
              J.implementation(`${n.name} has wrong argument.`);
              continue;
            }
            for (let h of i) {
              let d = this.wb(h);
              if (!d) continue;
              if (!d.validateArgs(d.args)) {
                J.implementation(`${h.name} has wrong argument.`);
                continue;
              }
              csArray.prototype.push.call(e, {
                name: `${h.name}_${n.name}`,
                trigger: d,
                template: o,
              });
            }
          }
          return e;
        }
      }
      return s;
    })();
  function Wv(s) {
    return csArray.isArray(s)
      ? csArray.prototype.map.call(s, _h)
      : Ac(s)
      ? [s]
      : csArray.from(wh(s));
  }
  function Yv(s, r) {
    try {
      let e = /^values\(([a-zA-Z0-9_$[\].]+)\)\[\?([a-zA-Z0-9_$]+)\]$/.exec(s);
      if (!e) return null;
      let i = e[1],
        n = e[2],
        o = bh(r, Wv(i));
      if (typeof o != "object" || o === null) return null;
      let c = [];
      return (
        csArray.prototype.forEach.call(Object.keys(o), (h) => {
          let d = o[h];
          typeof d == "object" &&
            d !== null &&
            !csArray.isArray(d) &&
            n in d &&
            csArray.prototype.push.call(c, d);
        }),
        c
      );
    } catch {
      return null;
    }
  }
  function Xv(s, r) {
    let e = /^\[([0-9]+):([0-9+])\]$/.exec(s);
    if (!e) return null;
    let i = parseInt(e[1], 10),
      n = parseInt(e[2], 10);
    return n <= i || n > r.length
      ? null
      : csArray.prototype.slice.call(r, i, n);
  }
  function Kv(s, r) {
    let t = csString.prototype.split.call(s, "|");
    if (t.length > 2) return null;
    let e = Yv(csString.prototype.trim.call(t[0]), r);
    return t.length === 2
      ? e === null
        ? null
        : Xv(csString.prototype.trim.call(t[1]), e)
      : e;
  }
  var Jv = (() => {
      class s {
        constructor(t, e, i, n) {
          (this.Ab = t),
            (this.M = i),
            (this.Oe = { window, document, location, cookies: {} }),
            (this.Pr = new Set()),
            (this.bb = new qv(e, n));
        }
        init() {
          Object.defineProperty(this.Oe, "cookies", { get: () => this.Tb() });
          let t = this.bb.parse(this.Ab);
          for (let { name: e, trigger: i, template: n } of t)
            (i instanceof za && n instanceof Oh) ||
              (this.Pr.add(i),
              i.onEvent((o) => {
                this.onTriggerEvent(o, n), st.counters.CSTCSnippetUsed.count(e);
              }));
        }
        start(t = !1) {
          this.Pr.forEach((e) => {
            (e.condition && !Ch(e.condition, this.Oe)) ||
              (t
                ? this.M.schedule(() => {
                    e.start();
                  })
                : e.start());
          });
        }
        stop() {
          this.Pr.forEach((t) => {
            t.stop();
          });
        }
        onBeforePageView(t) {
          this.Pr.forEach((e) => {
            if (e instanceof za) {
              e.onPageView(t);
              return;
            }
          });
        }
        onTriggerEvent(t, e) {
          let i = this.Rb(t),
            n = { ...this.Oe, ...i },
            o = [];
          if (mm(e.args) && j(e.args.iterable) && e.args.iterable.length > 0) {
            let c = Kv(e.args.iterable, n);
            if (Ct(c)) {
              let h = csArray.prototype.map.call(c, (d) => ({ ...n, $: d }));
              csArray.prototype.push.call(o, ...h);
            }
          } else csArray.prototype.push.call(o, n);
          if (e instanceof Gr) {
            for (let c of o) e.execute(e.args, c);
            return;
          }
          for (let c of o) {
            let h = xa(e.args, c);
            h && e.execute(h);
          }
        }
        Tb() {
          let t;
          try {
            t = document.cookie;
          } catch {
            t = "";
          }
          return csArray.prototype.reduce.call(
            csString.prototype.split.call(t, "; "),
            (e, i) => {
              let [n, o] = csString.prototype.split.call(i, "=");
              return o !== void 0 && (e[n] = o), e;
            },
            {}
          );
        }
        Rb(t) {
          let e = { ...t };
          for (let i in e)
            It(e[i]) &&
              (F.isMaskedElement(e[i]) || F.isMaskedElementChild(e[i])) &&
              delete e[i];
          return e;
        }
      }
      return (
        Z([Qt("implementationsService.start")], s.prototype, "start", null),
        Z([$()], s.prototype, "onTriggerEvent", null),
        s
      );
    })(),
    Qv = (() => {
      class s {
        constructor(t, e, i, n) {
          this.Ps = new Jv(t, e, i, n);
        }
        init() {
          this.Ps.init();
        }
        onInitTracking() {
          this.Ps.start(!0);
        }
        onOptout() {
          this.Ps.stop();
        }
        onBeforeSessionRenewal() {
          this.Ps.stop(), this.Ps.start();
        }
        onArtificialPageViewEnd() {
          this.Ps.stop();
        }
        onBeforeArtificialPageView() {
          this.Ps.start(), this.Ps.onBeforePageView("artificial");
        }
        onBeforeNaturalPageView() {
          this.Ps.onBeforePageView("natural");
        }
      }
      return s;
    })(),
    Zv = ["optout"];
  var rd = "_cs_optout",
    t_ = (() => {
      class s {
        constructor(t, e) {
          (this.S = t), (this.rs = e);
        }
        init() {
          this.S.register(Zv, () => {
            this.rs.activate();
          });
        }
      }
      return s;
    })(),
    ru = "1",
    e_ = (() => {
      class s {
        constructor(t, e, i) {
          (this.w = t), (this.Ht = e), (this.it = i);
        }
        init() {
          !this.isActive() && this.Cb() && this.activate();
        }
        isActive() {
          return this.it.get() === ru;
        }
        activate() {
          this.w.emitOptout(), this.it.set(ru);
        }
        Cb() {
          return csString.prototype.indexOf.call(this.Ht.href, rd) > 0;
        }
      }
      return s;
    })(),
    s_ = (() => {
      class s {
        constructor() {
          (this.Le = null), (this.Ib = 1);
        }
        startInterval() {
          this.Le = window.csSetInterval(() => {
            let t = this.Ib++;
            if ((this.flush(`interval.${t}`), t >= 5)) {
              this.stopInterval();
              return;
            }
          }, 5e3);
        }
        flush(t) {
          st.counters.tasks.flush(t), st.counters.longTasks.flush(t);
        }
        clear() {
          st.counters.tasks.reset(),
            st.counters.longTasks.reset(),
            this.stopInterval();
        }
        stopInterval() {
          this.Le && (csClearInterval(this.Le), (this.Le = null));
        }
      }
      return s;
    })(),
    nd = -1,
    nr = (s) => {
      addEventListener(
        "pageshow",
        (r) => {
          r.persisted && ((nd = r.timeStamp), s(r));
        },
        !0
      );
    },
    os = (s, r, t, e) => {
      let i, n;
      return (o) => {
        r.value >= 0 &&
          (o || e) &&
          ((n = r.value - (i != null ? i : 0)),
          (n || i === void 0) &&
            ((i = r.value),
            (r.delta = n),
            (r.rating = ((c, h) =>
              c > h[1] ? "poor" : c > h[0] ? "needs-improvement" : "good")(
              r.value,
              t
            )),
            s(r)));
      };
    },
    Vc = (s) => {
      requestAnimationFrame(() => requestAnimationFrame(() => s()));
    },
    Uc = () => {
      let s = performance.getEntriesByType("navigation")[0];
      if (s && s.responseStart > 0 && s.responseStart < performance.now())
        return s;
    },
    qr = () => {
      var r;
      let s = Uc();
      return (r = s == null ? void 0 : s.activationStart) != null ? r : 0;
    },
    as = (s, r = -1) => {
      let t = Uc(),
        e = "navigate";
      return (
        nd >= 0
          ? (e = "back-forward-cache")
          : t &&
            (document.prerendering || qr() > 0
              ? (e = "prerender")
              : document.wasDiscarded
              ? (e = "restore")
              : t.type && (e = t.type.replace(/_/g, "-"))),
        {
          name: s,
          value: r,
          rating: "good",
          delta: 0,
          entries: [],
          id: `v5-${Date.now()}-${
            Math.floor(8999999999999 * Math.random()) + 1e12
          }`,
          navigationType: e,
        }
      );
    },
    ca = new WeakMap();
  function Hc(s, r) {
    return ca.get(s) || ca.set(s, new r()), ca.get(s);
  }
  var qa = class {
      constructor() {
        As(this, "t");
        As(this, "i", 0);
        As(this, "o", []);
      }
      h(r) {
        var i;
        if (r.hadRecentInput) return;
        let t = this.o[0],
          e = this.o.at(-1);
        this.i &&
        t &&
        e &&
        r.startTime - e.startTime < 1e3 &&
        r.startTime - t.startTime < 5e3
          ? ((this.i += r.value), this.o.push(r))
          : ((this.i = r.value), (this.o = [r])),
          (i = this.t) == null || i.call(this, r);
      }
    },
    Wr = (s, r, t = {}) => {
      try {
        if (PerformanceObserver.supportedEntryTypes.includes(s)) {
          let e = new PerformanceObserver((i) => {
            Promise.resolve().then(() => {
              r(i.getEntries());
            });
          });
          return e.observe({ type: s, buffered: !0, ...t }), e;
        }
      } catch {}
    },
    jc = (s) => {
      let r = !1;
      return () => {
        r || (s(), (r = !0));
      };
    },
    Wi = -1,
    nu = () =>
      document.visibilityState !== "hidden" || document.prerendering
        ? 1 / 0
        : 0,
    Bn = (s) => {
      document.visibilityState === "hidden" &&
        Wi > -1 &&
        ((Wi = s.type === "visibilitychange" ? s.timeStamp : 0), i_());
    },
    ou = () => {
      addEventListener("visibilitychange", Bn, !0),
        addEventListener("prerenderingchange", Bn, !0);
    },
    i_ = () => {
      removeEventListener("visibilitychange", Bn, !0),
        removeEventListener("prerenderingchange", Bn, !0);
    },
    od = () => {
      var s;
      if (Wi < 0) {
        let r = qr(),
          t =
            document.prerendering ||
            (s = globalThis.performance
              .getEntriesByType("visibility-state")
              .filter((e) => e.name === "hidden" && e.startTime > r)[0]) == null
              ? void 0
              : s.startTime;
        (Wi = t != null ? t : nu()),
          ou(),
          nr(() => {
            setTimeout(() => {
              (Wi = nu()), ou();
            });
          });
      }
      return {
        get firstHiddenTime() {
          return Wi;
        },
      };
    },
    to = (s) => {
      document.prerendering
        ? addEventListener("prerenderingchange", () => s(), !0)
        : s();
    },
    au = [1800, 3e3],
    ad = (s, r = {}) => {
      to(() => {
        let t = od(),
          e,
          i = as("FCP"),
          n = Wr("paint", (o) => {
            for (let c of o)
              c.name === "first-contentful-paint" &&
                (n.disconnect(),
                c.startTime < t.firstHiddenTime &&
                  ((i.value = Math.max(c.startTime - qr(), 0)),
                  i.entries.push(c),
                  e(!0)));
          });
        n &&
          ((e = os(s, i, au, r.reportAllChanges)),
          nr((o) => {
            (i = as("FCP")),
              (e = os(s, i, au, r.reportAllChanges)),
              Vc(() => {
                (i.value = performance.now() - o.timeStamp), e(!0);
              });
          }));
      });
    },
    cu = [0.1, 0.25],
    r_ = (s, r = {}) => {
      ad(
        jc(() => {
          let t,
            e = as("CLS", 0),
            i = Hc(r, qa),
            n = (c) => {
              for (let h of c) i.h(h);
              i.i > e.value && ((e.value = i.i), (e.entries = i.o), t());
            },
            o = Wr("layout-shift", n);
          o &&
            ((t = os(s, e, cu, r.reportAllChanges)),
            document.addEventListener("visibilitychange", () => {
              document.visibilityState === "hidden" &&
                (n(o.takeRecords()), t(!0));
            }),
            nr(() => {
              (i.i = 0),
                (e = as("CLS", 0)),
                (t = os(s, e, cu, r.reportAllChanges)),
                Vc(() => t());
            }),
            setTimeout(t));
        })
      );
    },
    cd = 0,
    la = 1 / 0,
    vn = 0,
    n_ = (s) => {
      for (let r of s)
        r.interactionId &&
          ((la = Math.min(la, r.interactionId)),
          (vn = Math.max(vn, r.interactionId)),
          (cd = vn ? (vn - la) / 7 + 1 : 0));
    },
    Wa,
    lu = () => {
      var s;
      return Wa ? cd : (s = performance.interactionCount) != null ? s : 0;
    },
    o_ = () => {
      "interactionCount" in performance ||
        Wa ||
        (Wa = Wr("event", n_, {
          type: "event",
          buffered: !0,
          durationThreshold: 0,
        }));
    },
    uu = 0,
    Ya = class {
      constructor() {
        As(this, "u", []);
        As(this, "l", new Map());
        As(this, "m");
        As(this, "p");
      }
      v() {
        (uu = lu()), (this.u.length = 0), this.l.clear();
      }
      P() {
        let r = Math.min(this.u.length - 1, Math.floor((lu() - uu) / 50));
        return this.u[r];
      }
      h(r) {
        var i, n;
        if (
          ((i = this.m) == null || i.call(this, r),
          !r.interactionId && r.entryType !== "first-input")
        )
          return;
        let t = this.u.at(-1),
          e = this.l.get(r.interactionId);
        if (e || this.u.length < 10 || r.duration > t.T) {
          if (
            (e
              ? r.duration > e.T
                ? ((e.entries = [r]), (e.T = r.duration))
                : r.duration === e.T &&
                  r.startTime === e.entries[0].startTime &&
                  e.entries.push(r)
              : ((e = { id: r.interactionId, entries: [r], T: r.duration }),
                this.l.set(e.id, e),
                this.u.push(e)),
            this.u.sort((o, c) => c.T - o.T),
            this.u.length > 10)
          ) {
            let o = this.u.splice(10);
            for (let c of o) this.l.delete(c.id);
          }
          (n = this.p) == null || n.call(this, e);
        }
      }
    },
    ld = (s) => {
      let r = globalThis.requestIdleCallback || setTimeout;
      document.visibilityState === "hidden"
        ? s()
        : (r((s = jc(s))),
          document.addEventListener("visibilitychange", s, { once: !0 }));
    },
    hu = [200, 500],
    a_ = (s, r = {}) => {
      globalThis.PerformanceEventTiming &&
        "interactionId" in PerformanceEventTiming.prototype &&
        to(() => {
          var c;
          o_();
          let t,
            e = as("INP"),
            i = Hc(r, Ya),
            n = (h) => {
              ld(() => {
                for (let S of h) i.h(S);
                let d = i.P();
                d &&
                  d.T !== e.value &&
                  ((e.value = d.T), (e.entries = d.entries), t());
              });
            },
            o = Wr("event", n, {
              durationThreshold: (c = r.durationThreshold) != null ? c : 40,
            });
          (t = os(s, e, hu, r.reportAllChanges)),
            o &&
              (o.observe({ type: "first-input", buffered: !0 }),
              document.addEventListener("visibilitychange", () => {
                document.visibilityState === "hidden" &&
                  (n(o.takeRecords()), t(!0));
              }),
              nr(() => {
                i.v(), (e = as("INP")), (t = os(s, e, hu, r.reportAllChanges));
              }));
        });
    },
    Xa = class {
      constructor() {
        As(this, "m");
      }
      h(r) {
        var t;
        (t = this.m) == null || t.call(this, r);
      }
    },
    du = [2500, 4e3],
    c_ = (s, r = {}) => {
      to(() => {
        let t = od(),
          e,
          i = as("LCP"),
          n = Hc(r, Xa),
          o = (h) => {
            r.reportAllChanges || (h = h.slice(-1));
            for (let d of h)
              n.h(d),
                d.startTime < t.firstHiddenTime &&
                  ((i.value = Math.max(d.startTime - qr(), 0)),
                  (i.entries = [d]),
                  e());
          },
          c = Wr("largest-contentful-paint", o);
        if (c) {
          e = os(s, i, du, r.reportAllChanges);
          let h = jc(() => {
            o(c.takeRecords()), c.disconnect(), e(!0);
          });
          for (let d of ["keydown", "click", "visibilitychange"])
            addEventListener(d, () => ld(h), { capture: !0, once: !0 });
          nr((d) => {
            (i = as("LCP")),
              (e = os(s, i, du, r.reportAllChanges)),
              Vc(() => {
                (i.value = performance.now() - d.timeStamp), e(!0);
              });
          });
        }
      });
    },
    fu = [800, 1800],
    Ka = (s) => {
      document.prerendering
        ? to(() => Ka(s))
        : document.readyState !== "complete"
        ? addEventListener("load", () => Ka(s), !0)
        : setTimeout(s);
    },
    l_ = (s, r = {}) => {
      let t = as("TTFB"),
        e = os(s, t, fu, r.reportAllChanges);
      Ka(() => {
        let i = Uc();
        i &&
          ((t.value = Math.max(i.responseStart - qr(), 0)),
          (t.entries = [i]),
          e(!0),
          nr(() => {
            (t = as("TTFB", 0)), (e = os(s, t, fu, r.reportAllChanges)), e(!0);
          }));
      });
    },
    ud = (() => {
      class s {
        static observe(t, e) {
          csArray.prototype.forEach.call(t, (i) => {
            s.St[i] && s.St[i].add(e),
              csArray.prototype.includes.call(s.Eg, i) || s.Pb(i);
          });
        }
        static Pb(t) {
          try {
            switch (t) {
              case "FCP":
                ad(
                  (e) => {
                    s.St.FCP.forEach((i) => i(e));
                  },
                  { reportAllChanges: !0 }
                );
                break;
              case "CLS":
                r_(
                  (e) => {
                    s.St.CLS.forEach((i) => i(e));
                  },
                  { reportAllChanges: !0 }
                );
                break;
              case "LCP":
                c_(
                  (e) => {
                    s.St.LCP.forEach((i) => i(e));
                  },
                  { reportAllChanges: !0 }
                );
                break;
              case "TTFB":
                l_(
                  (e) => {
                    s.St.TTFB.forEach((i) => i(e));
                  },
                  { reportAllChanges: !0 }
                );
                break;
              case "INP":
                a_(
                  (e) => {
                    s.St.INP.forEach((i) => i(e));
                  },
                  { reportAllChanges: !0 }
                );
                break;
            }
            csArray.prototype.push.call(s.Eg, t);
          } catch {
            st.counters.webVitalsErrors.count(t);
          }
        }
        static disconnect(t, e) {
          csArray.prototype.forEach.call(t, (i) => {
            s.St[i] && s.St[i].delete(e);
          });
        }
        constructor(t, e) {
          (this.Sg = t), (this.R = e);
        }
        observe() {
          s.observe(this.Sg, this.R);
        }
        disconnect() {
          s.disconnect(this.Sg, this.R);
        }
      }
      return (
        (s.Eg = []),
        (s.St = {
          FCP: new Set(),
          CLS: new Set(),
          LCP: new Set(),
          TTFB: new Set(),
          INP: new Set(),
        }),
        s
      );
    })(),
    u_ = (() => {
      class s {
        get Ob() {
          return (
            typeof PerformanceObserver != "undefined" &&
            (PerformanceObserver.supportedEntryTypes == null
              ? void 0
              : csArray.prototype.includes.call(
                  PerformanceObserver.supportedEntryTypes,
                  "long-animation-frame"
                ))
          );
        }
        get Nb() {
          return (
            typeof performance == "object" &&
            typeof performance.getEntriesByType == "function"
          );
        }
        constructor() {
          var t;
          (this.j = !1),
            (this.ih = null),
            (this.Mb = 10),
            (this.Db = 5),
            (this.hi = []),
            (this.qi = []),
            (this.eo = new ud(["INP"], (e) => this.onINP(e))),
            (this.vg =
              (t = window.CSCurrentScript) === null || t === void 0
                ? void 0
                : t.src);
        }
        start() {
          this.Ob &&
            this.Nb &&
            this.vg &&
            (this.eo.observe(), this.initLoAFObserver(), (this.j = !0));
        }
        stop() {
          var t;
          this.j &&
            (this.eo.disconnect(),
            (t = this.ih) === null || t === void 0 || t.disconnect(),
            (this.hi = []),
            (this.qi = []),
            (this.j = !1));
        }
        initLoAFObserver() {
          var t;
          (this.ih = new PerformanceObserver((e) => {
            for (let i of e.getEntries()) this.onLoAF(i);
          })),
            (t = this.ih) === null ||
              t === void 0 ||
              t.observe({ type: "long-animation-frame", buffered: !1 });
        }
        onINP(t) {
          if (!t.entries || t.entries.length === 0) return;
          let e = t.entries[0],
            i = t.entries[t.entries.length - 1],
            n = e.startTime,
            o = i.startTime + i.duration;
          csArray.prototype.push.call(this.qi, {
            metric: t,
            startTime: n,
            endTime: o,
          }),
            this.qi.length > this.Db && csArray.prototype.shift.call(this.qi);
        }
        onLoAF(t) {
          let e = {
            startTime: t.startTime,
            duration: t.duration,
            csDuration: csArray.prototype.reduce.call(
              csArray.prototype.filter.call(
                t.scripts,
                (i) => i.sourceURL === this.vg
              ),
              (i, n) => i + n.duration,
              0
            ),
          };
          csArray.prototype.push.call(this.hi, e),
            this.hi.length > this.Mb && csArray.prototype.shift.call(this.hi),
            this.kb();
        }
        kb() {
          for (; this.qi.length > 0; ) {
            let t = this.qi[0],
              e = this.xb(t.startTime, t.endTime);
            if (e === null) break;
            csArray.prototype.shift.call(this.qi),
              e.length > 0 && this.reportINPWithLoAFs(t, e);
          }
        }
        xb(t, e) {
          let i = this.hi[0],
            n = this.hi[this.hi.length - 1];
          return i && i.startTime > e
            ? []
            : n && n.startTime + n.duration < e
            ? null
            : csArray.prototype.filter.call(this.hi, (c) => {
                let h = c.startTime + c.duration;
                return t < h && e > c.startTime;
              });
        }
        reportINPWithLoAFs(t, e) {
          let i = t.metric.value,
            n = t.startTime,
            o = t.endTime,
            c = 0;
          csArray.prototype.forEach.call(e, (h) => {
            let d = h.startTime + h.duration,
              S = Math.max(h.startTime, n),
              y = Math.min(d, o),
              _ = Math.max(0, y - S);
            if (h.duration > 0) {
              let w = h.csDuration / h.duration;
              c += _ * w;
            }
          }),
            st.counters.inpLoaf.add("total", i),
            st.counters.inpLoaf.add("contribution", c);
        }
      }
      return (
        Z([$()], s.prototype, "initLoAFObserver", null),
        Z([$()], s.prototype, "onINP", null),
        Z([$()], s.prototype, "onLoAF", null),
        Z([$()], s.prototype, "reportINPWithLoAFs", null),
        s
      );
    })(),
    h_ = (() => {
      class s {
        constructor() {
          (this.so = !1),
            (this.rh = []),
            (this._g = new u_()),
            (this.Os = new s_());
        }
        onStartTracking() {
          this.Lb(), this._g.start();
        }
        Lb() {
          if (
            typeof performance != "object" ||
            typeof performance.getEntriesByType != "function"
          )
            return;
          let t = csArray.prototype.filter.call(
            performance.getEntriesByType("resource"),
            (e) => {
              var i;
              if (e.initiatorType !== "script") return !1;
              let n = csString.prototype.split.call(e.name, "/")[2] || "",
                o =
                  (i = window.CSCurrentScript) === null || i === void 0
                    ? void 0
                    : i.src;
              return o ? o === e.name : n === "t.contentsquare.net";
            }
          );
          csArray.prototype.forEach.call(t, (e) => {
            if (e.transferSize === 0) return;
            let i = e.responseEnd - e.responseStart,
              n = e.transferSize;
            i >= 0 && st.counters.downloadTime.push(i),
              n >= 0 && st.counters.transferSize.push(n);
          }),
            st.counters.downloadTime.count > 0 &&
              st.counters.downloadTime.flush(),
            st.counters.transferSize.count > 0 &&
              st.counters.transferSize.flush();
        }
        wg() {
          let t = Oi.shadowRootsCount;
          t !== void 0 && st.counters.dom.add("shadow-dom", t),
            st.counters.mutations.flush(),
            st.counters.dom.flush(),
            st.counters.blockingTime.flush(),
            st.counters.inpContribution.flush(),
            st.counters.inpLoaf.flush();
        }
        onBeforeArtificialPageView() {
          this.wg(), this.Ag(), this.Os.stopInterval(), (this.so = !0);
        }
        onBeforeNaturalPageView() {
          this.wg();
        }
        onAfterNaturalPageView(t) {
          t === Ps.Natural
            ? (this.Os.flush("boot"), this.Os.startInterval())
            : (this.Ag(), this.Os.stopInterval(), (this.so = !0));
        }
        onInitialDomStart() {
          this.so || this.Os.stopInterval();
        }
        onInitialDomDone() {
          if (this.so) return;
          (this.so = !0),
            this.Os.flush("initial-dom"),
            this.bg(() => {
              this.Os.flush("post-initial-dom"), this.Os.startInterval();
            }, 5e3);
          let t = 0,
            e = this.bg(
              () => {
                let i = t.toString();
                st.counters.payloadSize.flush(i), ++t > 6 && e();
              },
              1e3,
              5e3
            );
        }
        onOptout() {
          this.Os.clear(), this._g.stop();
        }
        Ag() {
          csArray.prototype.forEach.call(this.rh, (t) => t()), (this.rh = []);
        }
        bg(t, e, i) {
          let n,
            o,
            c = () => {
              (o = void 0), t(), i !== void 0 && (n = self.csSetInterval(t, i));
            };
          o = self.csSetTimeout(c, e);
          let h = () => {
            o !== void 0 && (csClearTimeout(o), (o = void 0)),
              n !== void 0 && (csClearInterval(n), (n = void 0));
          };
          return csArray.prototype.push.call(this.rh, h), h;
        }
      }
      return s;
    })(),
    d_ = (() => {
      let s;
      return (
        (function (r) {
          r.COMPRESSION_DISABLED = "compressionDisabled";
        })(s || (s = {})),
        s
      );
    })(),
    f_ = (() => {
      class s {
        constructor() {}
        static init(t) {
          (!this.nh || t !== void 0) && this.initFlags(t);
        }
        static initFlags(t = document.cookie) {
          var e;
          let i =
            (e = /_cs_debug=((\w|\.|\:|=)+)/g.exec(t)) === null || e === void 0
              ? void 0
              : e[1];
          if (((this.nh = new Map()), i)) {
            let n = csString.prototype.split.call(i, ".");
            for (let o = 0; o < n.length; o++) {
              let [c, h] = csString.prototype.split.call(n[o], "=");
              this.nh.set(c, h || "true");
            }
          }
        }
        static getBoolean(t) {
          let e = this.getString(t);
          return e != null && e !== "false" && parseInt(e) !== 0;
        }
        static getString(t) {
          var e;
          return (
            this.init(),
            (e = this.nh) === null || e === void 0 ? void 0 : e.get(t)
          );
        }
        static isCompressionEnabled() {
          return !this.getBoolean(d_.COMPRESSION_DISABLED);
        }
        static Log(t) {
          return (e, i, n) => {
            var o;
            let c = i.toString(),
              h = `${
                (o = e.constructor) === null || o === void 0 ? void 0 : o.name
              }.${c}`,
              d = n.value;
            p_(s.getString("debugLog"), t) &&
              (n.value = function (...S) {
                return console.log(h, ...S), d.bind(this)(...S);
              });
          };
        }
      }
      return s;
    })();
  function p_(s, r) {
    var t;
    return s == null
      ? !1
      : s === r ||
          !!(
            !(
              (t = csString.prototype.match.call(
                s,
                new csRegExp("(^|,)(" + r + ")(,|$)")
              )) === null || t === void 0
            ) && t.length
          );
  }
  var g_ = (() => {
    class s {
      constructor(t) {
        (this.Vb = t), (this.Tg = []), (this.oh = {}), (this.Ub = 0);
      }
      static async create(t, e = {}) {
        let i = new s(t),
          n;
        return (
          csArray.prototype.forEach.call(Object.entries(e), ([o, c]) => {
            (e[o] = c), i.register(c);
          }),
          await i.Or().catch((o) => {
            Tt.warn("Failed to start worker: " + o.toString()), (n = new t());
          }),
          new Proxy(i, {
            get(o, c) {
              return c === "__worker"
                ? i.Se
                : t.prototype[c] instanceof Function
                ? (...h) => (n ? Promise.resolve(n[c](...h)) : i.Rg(c, h))
                : n
                ? Promise.resolve(n[c])
                : i.Rg(c, []);
            },
          })
        );
      }
      Rg(t, e) {
        let i = ++this.Ub;
        return new Promise((n, o) => {
          (this.oh[i] = (c, h) => {
            delete this.oh[i], c ? o(c) : n(h);
          }),
            this.Se.postMessage({ id: i, command: t, params: e });
        });
      }
      register(t) {
        csArray.prototype.push.call(this.Tg, t.toString());
      }
      Or() {
        try {
          let t =
              pu.toString() +
              `
` +
              csArray.prototype.join.call(
                this.Tg,
                `
`
              ) +
              `

const klass = (${this.Vb.toString()});

${pu.name}()`,
            e = new Blob([t], { type: "application/javascript" }),
            i = csURL.createObjectURL(e);
          (this.Se = new Worker(i)),
            this.Se.addEventListener("message", (n) => {
              var o, c, h, d, S;
              if (n.data !== "ping") {
                if (
                  (!((o = n.data) === null || o === void 0) && o.critical) ||
                  !n.data.id
                ) {
                  Tt.error(
                    "Worker error:",
                    (h =
                      (c = n.data) === null || c === void 0
                        ? void 0
                        : c.critical) !== null && h !== void 0
                      ? h
                      : "No ID"
                  );
                  return;
                }
                (S = (d = this.oh)[n.data.id]) === null ||
                  S === void 0 ||
                  S.call(d, n.data.error, n.data.result);
              }
            });
        } catch (t) {
          return Promise.reject(t);
        }
        return new Promise((t, e) => {
          (this.Se.onerror = (i) => e(new Error(i.message))),
            (this.Se.onmessage = () => {
              (this.Se.onmessage = this.Se.onerror = null), t();
            });
        });
      }
    }
    return s;
  })();
  function pu() {
    let s = new klass();
    self.postMessage("ping"),
      (self.onmessage = (r) => {
        var t, e, i;
        if (!(!((t = r.data) === null || t === void 0) && t.command))
          return self.postMessage({
            critical: "Invalid command",
            id: (e = r.data) === null || e === void 0 ? void 0 : e.id,
            command: (i = r.data) === null || i === void 0 ? void 0 : i.command,
          });
        Promise.resolve()
          .then(() => {
            let n = s[r.data.command];
            return typeof n == "function" ? n.apply(s, r.data.params) : n;
          })
          .then(
            (n) => {
              var o;
              self.postMessage({
                result: n,
                id: r.data.id,
                command:
                  (o = r.data) === null || o === void 0 ? void 0 : o.command,
              });
            },
            (n) => {
              var o, c;
              self.postMessage({
                error: n,
                id: (o = r.data) === null || o === void 0 ? void 0 : o.id,
                command:
                  (c = r.data) === null || c === void 0 ? void 0 : c.command,
              });
            }
          );
      });
  }
  function Ja() {
    function i(a) {
      let E = a.length;
      for (; --E >= 0; ) a[E] = 0;
    }
    let n = 0,
      o = 1,
      c = 2,
      h = 3,
      d = 258,
      S = 29,
      y = 256,
      _ = y + 1 + S,
      w = 30,
      T = 19,
      M = 2 * _ + 1,
      x = 15,
      P = 16,
      N = 7,
      W = 256,
      D = 16,
      L = 17,
      it = 18,
      et = new Uint8Array([
        0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4,
        5, 5, 5, 5, 0,
      ]),
      ht = new Uint8Array([
        0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10,
        10, 11, 11, 12, 12, 13, 13,
      ]),
      Nt = new Uint8Array([
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7,
      ]),
      oe = new Uint8Array([
        16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15,
      ]),
      ae = 512,
      I = new Array((_ + 2) * 2);
    i(I);
    let Y = new Array(w * 2);
    i(Y);
    let Q = new Array(ae);
    i(Q);
    let nt = new Array(d - h + 1);
    i(nt);
    let Pt = new Array(S);
    i(Pt);
    let jt = new Array(w);
    i(jt);
    function Ne(a, E, v, A, p) {
      (this.static_tree = a),
        (this.extra_bits = E),
        (this.extra_base = v),
        (this.elems = A),
        (this.max_length = p),
        (this.has_stree = a && a.length);
    }
    let us, ni, me;
    function Je(a, E) {
      (this.dyn_tree = a), (this.max_code = 0), (this.stat_desc = E);
    }
    let ce = (a) => (a < 256 ? Q[a] : Q[256 + (a >>> 7)]),
      le = (a, E) => {
        (a.pending_buf[a.pending++] = E & 255),
          (a.pending_buf[a.pending++] = (E >>> 8) & 255);
      },
      _t = (a, E, v) => {
        a.bi_valid > P - v
          ? ((a.bi_buf |= (E << a.bi_valid) & 65535),
            le(a, a.bi_buf),
            (a.bi_buf = E >> (P - a.bi_valid)),
            (a.bi_valid += v - P))
          : ((a.bi_buf |= (E << a.bi_valid) & 65535), (a.bi_valid += v));
      },
      mt = (a, E, v) => {
        _t(a, v[E * 2], v[E * 2 + 1]);
      },
      H = (a, E) => {
        let v = 0;
        do (v |= a & 1), (a >>>= 1), (v <<= 1);
        while (--E > 0);
        return v >>> 1;
      },
      Ls = (a) => {
        a.bi_valid === 16
          ? (le(a, a.bi_buf), (a.bi_buf = 0), (a.bi_valid = 0))
          : a.bi_valid >= 8 &&
            ((a.pending_buf[a.pending++] = a.bi_buf & 255),
            (a.bi_buf >>= 8),
            (a.bi_valid -= 8));
      },
      hs = (a, E) => {
        let v = E.dyn_tree,
          A = E.max_code,
          p = E.stat_desc.static_tree,
          O = E.stat_desc.has_stree,
          C = E.stat_desc.extra_bits,
          k = E.stat_desc.extra_base,
          ot = E.stat_desc.max_length,
          tt,
          Kt,
          de,
          wt,
          ws,
          Fs,
          dn = 0;
        for (wt = 0; wt <= x; wt++) a.bl_count[wt] = 0;
        for (
          v[a.heap[a.heap_max] * 2 + 1] = 0, tt = a.heap_max + 1;
          tt < M;
          tt++
        )
          (Kt = a.heap[tt]),
            (wt = v[v[Kt * 2 + 1] * 2 + 1] + 1),
            wt > ot && ((wt = ot), dn++),
            (v[Kt * 2 + 1] = wt),
            !(Kt > A) &&
              (a.bl_count[wt]++,
              (ws = 0),
              Kt >= k && (ws = C[Kt - k]),
              (Fs = v[Kt * 2]),
              (a.opt_len += Fs * (wt + ws)),
              O && (a.static_len += Fs * (p[Kt * 2 + 1] + ws)));
        if (dn !== 0) {
          do {
            for (wt = ot - 1; a.bl_count[wt] === 0; ) wt--;
            a.bl_count[wt]--,
              (a.bl_count[wt + 1] += 2),
              a.bl_count[ot]--,
              (dn -= 2);
          } while (dn > 0);
          for (wt = ot; wt !== 0; wt--)
            for (Kt = a.bl_count[wt]; Kt !== 0; )
              (de = a.heap[--tt]),
                !(de > A) &&
                  (v[de * 2 + 1] !== wt &&
                    ((a.opt_len += (wt - v[de * 2 + 1]) * v[de * 2]),
                    (v[de * 2 + 1] = wt)),
                  Kt--);
        }
      },
      ds = (a, E, v) => {
        let A = new Array(x + 1),
          p = 0,
          O,
          C;
        for (O = 1; O <= x; O++) A[O] = p = (p + v[O - 1]) << 1;
        for (C = 0; C <= E; C++) {
          let k = a[C * 2 + 1];
          k !== 0 && (a[C * 2] = H(A[k]++, k));
        }
      },
      or = () => {
        let a,
          E,
          v,
          A,
          p,
          O = new Array(x + 1);
        for (v = 0, A = 0; A < S - 1; A++)
          for (Pt[A] = v, a = 0; a < 1 << et[A]; a++) nt[v++] = A;
        for (nt[v - 1] = A, p = 0, A = 0; A < 16; A++)
          for (jt[A] = p, a = 0; a < 1 << ht[A]; a++) Q[p++] = A;
        for (p >>= 7; A < w; A++)
          for (jt[A] = p << 7, a = 0; a < 1 << (ht[A] - 7); a++)
            Q[256 + p++] = A;
        for (E = 0; E <= x; E++) O[E] = 0;
        for (a = 0; a <= 143; ) (I[a * 2 + 1] = 8), a++, O[8]++;
        for (; a <= 255; ) (I[a * 2 + 1] = 9), a++, O[9]++;
        for (; a <= 279; ) (I[a * 2 + 1] = 7), a++, O[7]++;
        for (; a <= 287; ) (I[a * 2 + 1] = 8), a++, O[8]++;
        for (ds(I, _ + 1, O), a = 0; a < w; a++)
          (Y[a * 2 + 1] = 5), (Y[a * 2] = H(a, 5));
        (us = new Ne(I, et, y + 1, _, x)),
          (ni = new Ne(Y, ht, 0, w, x)),
          (me = new Ne(new Array(0), Nt, 0, T, N));
      },
      oi = (a) => {
        let E;
        for (E = 0; E < _; E++) a.dyn_ltree[E * 2] = 0;
        for (E = 0; E < w; E++) a.dyn_dtree[E * 2] = 0;
        for (E = 0; E < T; E++) a.bl_tree[E * 2] = 0;
        (a.dyn_ltree[W * 2] = 1),
          (a.opt_len = a.static_len = 0),
          (a.last_lit = a.matches = 0);
      },
      ar = (a) => {
        a.bi_valid > 8
          ? le(a, a.bi_buf)
          : a.bi_valid > 0 && (a.pending_buf[a.pending++] = a.bi_buf),
          (a.bi_buf = 0),
          (a.bi_valid = 0);
      },
      so = (a, E, v, A) => {
        ar(a),
          A && (le(a, v), le(a, ~v)),
          a.pending_buf.set(a.window.subarray(E, E + v), a.pending),
          (a.pending += v);
      },
      Vs = (a, E, v, A) => {
        let p = E * 2,
          O = v * 2;
        return a[p] < a[O] || (a[p] === a[O] && A[E] <= A[v]);
      },
      we = (a, E, v) => {
        let A = a.heap[v],
          p = v << 1;
        for (
          ;
          p <= a.heap_len &&
          (p < a.heap_len && Vs(E, a.heap[p + 1], a.heap[p], a.depth) && p++,
          !Vs(E, A, a.heap[p], a.depth));

        )
          (a.heap[v] = a.heap[p]), (v = p), (p <<= 1);
        a.heap[v] = A;
      },
      Ni = (a, E, v) => {
        let A,
          p,
          O = 0,
          C,
          k;
        if (a.last_lit !== 0)
          do
            (A =
              (a.pending_buf[a.d_buf + O * 2] << 8) |
              a.pending_buf[a.d_buf + O * 2 + 1]),
              (p = a.pending_buf[a.l_buf + O]),
              O++,
              A === 0
                ? mt(a, p, E)
                : ((C = nt[p]),
                  mt(a, C + y + 1, E),
                  (k = et[C]),
                  k !== 0 && ((p -= Pt[C]), _t(a, p, k)),
                  A--,
                  (C = ce(A)),
                  mt(a, C, v),
                  (k = ht[C]),
                  k !== 0 && ((A -= jt[C]), _t(a, A, k)));
          while (O < a.last_lit);
        mt(a, W, E);
      },
      Us = (a, E) => {
        let v = E.dyn_tree,
          A = E.stat_desc.static_tree,
          p = E.stat_desc.has_stree,
          O = E.stat_desc.elems,
          C,
          k,
          ot = -1,
          tt;
        for (a.heap_len = 0, a.heap_max = M, C = 0; C < O; C++)
          v[C * 2] !== 0
            ? ((a.heap[++a.heap_len] = ot = C), (a.depth[C] = 0))
            : (v[C * 2 + 1] = 0);
        for (; a.heap_len < 2; )
          (tt = a.heap[++a.heap_len] = ot < 2 ? ++ot : 0),
            (v[tt * 2] = 1),
            (a.depth[tt] = 0),
            a.opt_len--,
            p && (a.static_len -= A[tt * 2 + 1]);
        for (E.max_code = ot, C = a.heap_len >> 1; C >= 1; C--) we(a, v, C);
        tt = O;
        do
          (C = a.heap[1]),
            (a.heap[1] = a.heap[a.heap_len--]),
            we(a, v, 1),
            (k = a.heap[1]),
            (a.heap[--a.heap_max] = C),
            (a.heap[--a.heap_max] = k),
            (v[tt * 2] = v[C * 2] + v[k * 2]),
            (a.depth[tt] =
              (a.depth[C] >= a.depth[k] ? a.depth[C] : a.depth[k]) + 1),
            (v[C * 2 + 1] = v[k * 2 + 1] = tt),
            (a.heap[1] = tt++),
            we(a, v, 1);
        while (a.heap_len >= 2);
        (a.heap[--a.heap_max] = a.heap[1]), hs(a, E), ds(v, ot, a.bl_count);
      },
      Bt = (a, E, v) => {
        let A,
          p = -1,
          O,
          C = E[0 * 2 + 1],
          k = 0,
          ot = 7,
          tt = 4;
        for (
          C === 0 && ((ot = 138), (tt = 3)), E[(v + 1) * 2 + 1] = 65535, A = 0;
          A <= v;
          A++
        )
          (O = C),
            (C = E[(A + 1) * 2 + 1]),
            !(++k < ot && O === C) &&
              (k < tt
                ? (a.bl_tree[O * 2] += k)
                : O !== 0
                ? (O !== p && a.bl_tree[O * 2]++, a.bl_tree[D * 2]++)
                : k <= 10
                ? a.bl_tree[L * 2]++
                : a.bl_tree[it * 2]++,
              (k = 0),
              (p = O),
              C === 0
                ? ((ot = 138), (tt = 3))
                : O === C
                ? ((ot = 6), (tt = 3))
                : ((ot = 7), (tt = 4)));
      },
      $t = (a, E, v) => {
        let A,
          p = -1,
          O,
          C = E[0 * 2 + 1],
          k = 0,
          ot = 7,
          tt = 4;
        for (C === 0 && ((ot = 138), (tt = 3)), A = 0; A <= v; A++)
          if (((O = C), (C = E[(A + 1) * 2 + 1]), !(++k < ot && O === C))) {
            if (k < tt)
              do mt(a, O, a.bl_tree);
              while (--k !== 0);
            else
              O !== 0
                ? (O !== p && (mt(a, O, a.bl_tree), k--),
                  mt(a, D, a.bl_tree),
                  _t(a, k - 3, 2))
                : k <= 10
                ? (mt(a, L, a.bl_tree), _t(a, k - 3, 3))
                : (mt(a, it, a.bl_tree), _t(a, k - 11, 7));
            (k = 0),
              (p = O),
              C === 0
                ? ((ot = 138), (tt = 3))
                : O === C
                ? ((ot = 6), (tt = 3))
                : ((ot = 7), (tt = 4));
          }
      },
      Yt = (a) => {
        let E;
        for (
          Bt(a, a.dyn_ltree, a.l_desc.max_code),
            Bt(a, a.dyn_dtree, a.d_desc.max_code),
            Us(a, a.bl_desc),
            E = T - 1;
          E >= 3 && a.bl_tree[oe[E] * 2 + 1] === 0;
          E--
        );
        return (a.opt_len += 3 * (E + 1) + 5 + 5 + 4), E;
      },
      Xt = (a, E, v, A) => {
        let p;
        for (
          _t(a, E - 257, 5), _t(a, v - 1, 5), _t(a, A - 4, 4), p = 0;
          p < A;
          p++
        )
          _t(a, a.bl_tree[oe[p] * 2 + 1], 3);
        $t(a, a.dyn_ltree, E - 1), $t(a, a.dyn_dtree, v - 1);
      },
      io = (a) => {
        let E = 4093624447,
          v;
        for (v = 0; v <= 31; v++, E >>>= 1)
          if (E & 1 && a.dyn_ltree[v * 2] !== 0) return 0;
        if (
          a.dyn_ltree[9 * 2] !== 0 ||
          a.dyn_ltree[10 * 2] !== 0 ||
          a.dyn_ltree[13 * 2] !== 0
        )
          return 1;
        for (v = 32; v < y; v++) if (a.dyn_ltree[v * 2] !== 0) return 1;
        return 0;
      },
      cr = !1,
      ro = (a) => {
        cr || (or(), (cr = !0)),
          (a.l_desc = new Je(a.dyn_ltree, us)),
          (a.d_desc = new Je(a.dyn_dtree, ni)),
          (a.bl_desc = new Je(a.bl_tree, me)),
          (a.bi_buf = 0),
          (a.bi_valid = 0),
          oi(a);
      },
      lr = (a, E, v, A) => {
        _t(a, (n << 1) + (A ? 1 : 0), 3), so(a, E, v, !0);
      },
      St = (a) => {
        _t(a, o << 1, 3), mt(a, W, I), Ls(a);
      },
      ai = (a, E, v, A) => {
        let p,
          O,
          C = 0;
        a.level > 0
          ? (a.strm.data_type === 2 && (a.strm.data_type = io(a)),
            Us(a, a.l_desc),
            Us(a, a.d_desc),
            (C = Yt(a)),
            (p = (a.opt_len + 3 + 7) >>> 3),
            (O = (a.static_len + 3 + 7) >>> 3),
            O <= p && (p = O))
          : (p = O = v + 5),
          v + 4 <= p && E !== -1
            ? lr(a, E, v, A)
            : a.strategy === 4 || O === p
            ? (_t(a, (o << 1) + (A ? 1 : 0), 3), Ni(a, I, Y))
            : (_t(a, (c << 1) + (A ? 1 : 0), 3),
              Xt(a, a.l_desc.max_code + 1, a.d_desc.max_code + 1, C + 1),
              Ni(a, a.dyn_ltree, a.dyn_dtree)),
          oi(a),
          A && ar(a);
      },
      Mi = (a, E, v) => (
        (a.pending_buf[a.d_buf + a.last_lit * 2] = (E >>> 8) & 255),
        (a.pending_buf[a.d_buf + a.last_lit * 2 + 1] = E & 255),
        (a.pending_buf[a.l_buf + a.last_lit] = v & 255),
        a.last_lit++,
        E === 0
          ? a.dyn_ltree[v * 2]++
          : (a.matches++,
            E--,
            a.dyn_ltree[(nt[v] + y + 1) * 2]++,
            a.dyn_dtree[ce(E) * 2]++),
        a.last_lit === a.lit_bufsize - 1
      );
    var no = ro,
      Xr = lr,
      oo = ai,
      ao = Mi,
      co = St,
      lo = {
        _tr_init: no,
        _tr_stored_block: Xr,
        _tr_flush_block: oo,
        _tr_tally: ao,
        _tr_align: co,
      },
      Kr = (a, E, v, A) => {
        let p = (a & 65535) | 0,
          O = ((a >>> 16) & 65535) | 0,
          C = 0;
        for (; v !== 0; ) {
          (C = v > 2e3 ? 2e3 : v), (v -= C);
          do (p = (p + E[A++]) | 0), (O = (O + p) | 0);
          while (--C);
          (p %= 65521), (O %= 65521);
        }
        return p | (O << 16) | 0;
      };
    let uo = () => {
        let a,
          E = [];
        for (var v = 0; v < 256; v++) {
          a = v;
          for (var A = 0; A < 8; A++)
            a = a & 1 ? 3988292384 ^ (a >>> 1) : a >>> 1;
          E[v] = a;
        }
        return E;
      },
      ho = new Uint32Array(uo());
    var Me = (a, E, v, A) => {
        let p = ho,
          O = A + v;
        a ^= -1;
        for (let C = A; C < O; C++) a = (a >>> 8) ^ p[(a ^ E[C]) & 255];
        return a ^ -1;
      },
      fs = {
        2: "need dictionary",
        1: "stream end",
        0: "",
        "-1": "file error",
        "-2": "stream error",
        "-3": "data error",
        "-4": "insufficient memory",
        "-5": "buffer error",
        "-6": "incompatible version",
      },
      Qr = {
        Z_NO_FLUSH: 0,
        Z_PARTIAL_FLUSH: 1,
        Z_SYNC_FLUSH: 2,
        Z_FULL_FLUSH: 3,
        Z_FINISH: 4,
        Z_BLOCK: 5,
        Z_TREES: 6,
        Z_OK: 0,
        Z_STREAM_END: 1,
        Z_NEED_DICT: 2,
        Z_ERRNO: -1,
        Z_STREAM_ERROR: -2,
        Z_DATA_ERROR: -3,
        Z_MEM_ERROR: -4,
        Z_BUF_ERROR: -5,
        Z_NO_COMPRESSION: 0,
        Z_BEST_SPEED: 1,
        Z_BEST_COMPRESSION: 9,
        Z_DEFAULT_COMPRESSION: -1,
        Z_FILTERED: 1,
        Z_HUFFMAN_ONLY: 2,
        Z_RLE: 3,
        Z_FIXED: 4,
        Z_DEFAULT_STRATEGY: 0,
        Z_BINARY: 0,
        Z_TEXT: 1,
        Z_UNKNOWN: 2,
        Z_DEFLATED: 8,
      };
    let {
        _tr_init: ur,
        _tr_stored_block: hr,
        _tr_flush_block: ps,
        _tr_tally: ue,
        _tr_align: Zr,
      } = lo,
      {
        Z_NO_FLUSH: gs,
        Z_PARTIAL_FLUSH: Hs,
        Z_FULL_FLUSH: tn,
        Z_FINISH: yt,
        Z_BLOCK: ci,
        Z_OK: Ft,
        Z_STREAM_END: ms,
        Z_STREAM_ERROR: ye,
        Z_DATA_ERROR: fo,
        Z_BUF_ERROR: dr,
        Z_DEFAULT_COMPRESSION: po,
        Z_FILTERED: go,
        Z_HUFFMAN_ONLY: Di,
        Z_RLE: en,
        Z_FIXED: sn,
        Z_DEFAULT_STRATEGY: rn,
        Z_UNKNOWN: mo,
        Z_DEFLATED: ys,
      } = Qr,
      yo = 9,
      Eo = 15,
      So = 8,
      fr = 256 + 1 + 29,
      nn = 30,
      wo = 19,
      Ao = 2 * fr + 1,
      bo = 15,
      ct = 3,
      je = 258,
      he = je + ct + 1,
      pr = 32,
      Es = 42,
      ki = 69,
      xi = 73,
      li = 91,
      Li = 103,
      Ss = 113,
      Be = 666,
      kt = 1,
      ui = 2,
      De = 3,
      js = 4,
      gr = 3,
      $e = (a, E) => ((a.msg = fs[E]), E),
      Vi = (a) => (a << 1) - (a > 4 ? 9 : 0),
      Fe = (a) => {
        let E = a.length;
        for (; --E >= 0; ) a[E] = 0;
      },
      ke = (a, E, v) => ((E << a.hash_shift) ^ v) & a.hash_mask,
      Ae = (a) => {
        let E = a.state,
          v = E.pending;
        v > a.avail_out && (v = a.avail_out),
          v !== 0 &&
            (a.output.set(
              E.pending_buf.subarray(E.pending_out, E.pending_out + v),
              a.next_out
            ),
            (a.next_out += v),
            (E.pending_out += v),
            (a.total_out += v),
            (a.avail_out -= v),
            (E.pending -= v),
            E.pending === 0 && (E.pending_out = 0));
      },
      xt = (a, E) => {
        ps(
          a,
          a.block_start >= 0 ? a.block_start : -1,
          a.strstart - a.block_start,
          E
        ),
          (a.block_start = a.strstart),
          Ae(a.strm);
      },
      lt = (a, E) => {
        a.pending_buf[a.pending++] = E;
      },
      xe = (a, E) => {
        (a.pending_buf[a.pending++] = (E >>> 8) & 255),
          (a.pending_buf[a.pending++] = E & 255);
      },
      mr = (a, E, v, A) => {
        let p = a.avail_in;
        return (
          p > A && (p = A),
          p === 0
            ? 0
            : ((a.avail_in -= p),
              E.set(a.input.subarray(a.next_in, a.next_in + p), v),
              a.state.wrap === 1
                ? (a.adler = Kr(a.adler, E, p, v))
                : a.state.wrap === 2 && (a.adler = Me(a.adler, E, p, v)),
              (a.next_in += p),
              (a.total_in += p),
              p)
        );
      },
      yr = (a, E) => {
        let v = a.max_chain_length,
          A = a.strstart,
          p,
          O,
          C = a.prev_length,
          k = a.nice_match,
          ot = a.strstart > a.w_size - he ? a.strstart - (a.w_size - he) : 0,
          tt = a.window,
          Kt = a.w_mask,
          de = a.prev,
          wt = a.strstart + je,
          ws = tt[A + C - 1],
          Fs = tt[A + C];
        a.prev_length >= a.good_match && (v >>= 2),
          k > a.lookahead && (k = a.lookahead);
        do
          if (
            ((p = E),
            !(
              tt[p + C] !== Fs ||
              tt[p + C - 1] !== ws ||
              tt[p] !== tt[A] ||
              tt[++p] !== tt[A + 1]
            ))
          ) {
            (A += 2), p++;
            do;
            while (
              tt[++A] === tt[++p] &&
              tt[++A] === tt[++p] &&
              tt[++A] === tt[++p] &&
              tt[++A] === tt[++p] &&
              tt[++A] === tt[++p] &&
              tt[++A] === tt[++p] &&
              tt[++A] === tt[++p] &&
              tt[++A] === tt[++p] &&
              A < wt
            );
            if (((O = je - (wt - A)), (A = wt - je), O > C)) {
              if (((a.match_start = E), (C = O), O >= k)) break;
              (ws = tt[A + C - 1]), (Fs = tt[A + C]);
            }
          }
        while ((E = de[E & Kt]) > ot && --v !== 0);
        return C <= a.lookahead ? C : a.lookahead;
      },
      vs = (a) => {
        let E = a.w_size,
          v,
          A,
          p,
          O,
          C;
        do {
          if (
            ((O = a.window_size - a.lookahead - a.strstart),
            a.strstart >= E + (E - he))
          ) {
            a.window.set(a.window.subarray(E, E + E), 0),
              (a.match_start -= E),
              (a.strstart -= E),
              (a.block_start -= E),
              (A = a.hash_size),
              (v = A);
            do (p = a.head[--v]), (a.head[v] = p >= E ? p - E : 0);
            while (--A);
            (A = E), (v = A);
            do (p = a.prev[--v]), (a.prev[v] = p >= E ? p - E : 0);
            while (--A);
            O += E;
          }
          if (a.strm.avail_in === 0) break;
          if (
            ((A = mr(a.strm, a.window, a.strstart + a.lookahead, O)),
            (a.lookahead += A),
            a.lookahead + a.insert >= ct)
          )
            for (
              C = a.strstart - a.insert,
                a.ins_h = a.window[C],
                a.ins_h = ke(a, a.ins_h, a.window[C + 1]);
              a.insert &&
              ((a.ins_h = ke(a, a.ins_h, a.window[C + ct - 1])),
              (a.prev[C & a.w_mask] = a.head[a.ins_h]),
              (a.head[a.ins_h] = C),
              C++,
              a.insert--,
              !(a.lookahead + a.insert < ct));

            );
        } while (a.lookahead < he && a.strm.avail_in !== 0);
      },
      Bs = (a, E) => {
        let v = 65535;
        for (v > a.pending_buf_size - 5 && (v = a.pending_buf_size - 5); ; ) {
          if (a.lookahead <= 1) {
            if ((vs(a), a.lookahead === 0 && E === gs)) return kt;
            if (a.lookahead === 0) break;
          }
          (a.strstart += a.lookahead), (a.lookahead = 0);
          let A = a.block_start + v;
          if (
            ((a.strstart === 0 || a.strstart >= A) &&
              ((a.lookahead = a.strstart - A),
              (a.strstart = A),
              xt(a, !1),
              a.strm.avail_out === 0)) ||
            (a.strstart - a.block_start >= a.w_size - he &&
              (xt(a, !1), a.strm.avail_out === 0))
          )
            return kt;
        }
        return (
          (a.insert = 0),
          E === yt
            ? (xt(a, !0), a.strm.avail_out === 0 ? De : js)
            : (a.strstart > a.block_start &&
                (xt(a, !1), a.strm.avail_out === 0),
              kt)
        );
      },
      Ui = (a, E) => {
        let v, A;
        for (;;) {
          if (a.lookahead < he) {
            if ((vs(a), a.lookahead < he && E === gs)) return kt;
            if (a.lookahead === 0) break;
          }
          if (
            ((v = 0),
            a.lookahead >= ct &&
              ((a.ins_h = ke(a, a.ins_h, a.window[a.strstart + ct - 1])),
              (v = a.prev[a.strstart & a.w_mask] = a.head[a.ins_h]),
              (a.head[a.ins_h] = a.strstart)),
            v !== 0 &&
              a.strstart - v <= a.w_size - he &&
              (a.match_length = yr(a, v)),
            a.match_length >= ct)
          )
            if (
              ((A = ue(a, a.strstart - a.match_start, a.match_length - ct)),
              (a.lookahead -= a.match_length),
              a.match_length <= a.max_lazy_match && a.lookahead >= ct)
            ) {
              a.match_length--;
              do
                a.strstart++,
                  (a.ins_h = ke(a, a.ins_h, a.window[a.strstart + ct - 1])),
                  (v = a.prev[a.strstart & a.w_mask] = a.head[a.ins_h]),
                  (a.head[a.ins_h] = a.strstart);
              while (--a.match_length !== 0);
              a.strstart++;
            } else
              (a.strstart += a.match_length),
                (a.match_length = 0),
                (a.ins_h = a.window[a.strstart]),
                (a.ins_h = ke(a, a.ins_h, a.window[a.strstart + 1]));
          else
            (A = ue(a, 0, a.window[a.strstart])), a.lookahead--, a.strstart++;
          if (A && (xt(a, !1), a.strm.avail_out === 0)) return kt;
        }
        return (
          (a.insert = a.strstart < ct - 1 ? a.strstart : ct - 1),
          E === yt
            ? (xt(a, !0), a.strm.avail_out === 0 ? De : js)
            : a.last_lit && (xt(a, !1), a.strm.avail_out === 0)
            ? kt
            : ui
        );
      },
      Qe = (a, E) => {
        let v, A, p;
        for (;;) {
          if (a.lookahead < he) {
            if ((vs(a), a.lookahead < he && E === gs)) return kt;
            if (a.lookahead === 0) break;
          }
          if (
            ((v = 0),
            a.lookahead >= ct &&
              ((a.ins_h = ke(a, a.ins_h, a.window[a.strstart + ct - 1])),
              (v = a.prev[a.strstart & a.w_mask] = a.head[a.ins_h]),
              (a.head[a.ins_h] = a.strstart)),
            (a.prev_length = a.match_length),
            (a.prev_match = a.match_start),
            (a.match_length = ct - 1),
            v !== 0 &&
              a.prev_length < a.max_lazy_match &&
              a.strstart - v <= a.w_size - he &&
              ((a.match_length = yr(a, v)),
              a.match_length <= 5 &&
                (a.strategy === go ||
                  (a.match_length === ct &&
                    a.strstart - a.match_start > 4096)) &&
                (a.match_length = ct - 1)),
            a.prev_length >= ct && a.match_length <= a.prev_length)
          ) {
            (p = a.strstart + a.lookahead - ct),
              (A = ue(a, a.strstart - 1 - a.prev_match, a.prev_length - ct)),
              (a.lookahead -= a.prev_length - 1),
              (a.prev_length -= 2);
            do
              ++a.strstart <= p &&
                ((a.ins_h = ke(a, a.ins_h, a.window[a.strstart + ct - 1])),
                (v = a.prev[a.strstart & a.w_mask] = a.head[a.ins_h]),
                (a.head[a.ins_h] = a.strstart));
            while (--a.prev_length !== 0);
            if (
              ((a.match_available = 0),
              (a.match_length = ct - 1),
              a.strstart++,
              A && (xt(a, !1), a.strm.avail_out === 0))
            )
              return kt;
          } else if (a.match_available) {
            if (
              ((A = ue(a, 0, a.window[a.strstart - 1])),
              A && xt(a, !1),
              a.strstart++,
              a.lookahead--,
              a.strm.avail_out === 0)
            )
              return kt;
          } else (a.match_available = 1), a.strstart++, a.lookahead--;
        }
        return (
          a.match_available &&
            ((A = ue(a, 0, a.window[a.strstart - 1])), (a.match_available = 0)),
          (a.insert = a.strstart < ct - 1 ? a.strstart : ct - 1),
          E === yt
            ? (xt(a, !0), a.strm.avail_out === 0 ? De : js)
            : a.last_lit && (xt(a, !1), a.strm.avail_out === 0)
            ? kt
            : ui
        );
      },
      on = (a, E) => {
        let v,
          A,
          p,
          O,
          C = a.window;
        for (;;) {
          if (a.lookahead <= je) {
            if ((vs(a), a.lookahead <= je && E === gs)) return kt;
            if (a.lookahead === 0) break;
          }
          if (
            ((a.match_length = 0),
            a.lookahead >= ct &&
              a.strstart > 0 &&
              ((p = a.strstart - 1),
              (A = C[p]),
              A === C[++p] && A === C[++p] && A === C[++p]))
          ) {
            O = a.strstart + je;
            do;
            while (
              A === C[++p] &&
              A === C[++p] &&
              A === C[++p] &&
              A === C[++p] &&
              A === C[++p] &&
              A === C[++p] &&
              A === C[++p] &&
              A === C[++p] &&
              p < O
            );
            (a.match_length = je - (O - p)),
              a.match_length > a.lookahead && (a.match_length = a.lookahead);
          }
          if (
            (a.match_length >= ct
              ? ((v = ue(a, 1, a.match_length - ct)),
                (a.lookahead -= a.match_length),
                (a.strstart += a.match_length),
                (a.match_length = 0))
              : ((v = ue(a, 0, a.window[a.strstart])),
                a.lookahead--,
                a.strstart++),
            v && (xt(a, !1), a.strm.avail_out === 0))
          )
            return kt;
        }
        return (
          (a.insert = 0),
          E === yt
            ? (xt(a, !0), a.strm.avail_out === 0 ? De : js)
            : a.last_lit && (xt(a, !1), a.strm.avail_out === 0)
            ? kt
            : ui
        );
      },
      To = (a, E) => {
        let v;
        for (;;) {
          if (a.lookahead === 0 && (vs(a), a.lookahead === 0)) {
            if (E === gs) return kt;
            break;
          }
          if (
            ((a.match_length = 0),
            (v = ue(a, 0, a.window[a.strstart])),
            a.lookahead--,
            a.strstart++,
            v && (xt(a, !1), a.strm.avail_out === 0))
          )
            return kt;
        }
        return (
          (a.insert = 0),
          E === yt
            ? (xt(a, !0), a.strm.avail_out === 0 ? De : js)
            : a.last_lit && (xt(a, !1), a.strm.avail_out === 0)
            ? kt
            : ui
        );
      };
    function be(a, E, v, A, p) {
      (this.good_length = a),
        (this.max_lazy = E),
        (this.nice_length = v),
        (this.max_chain = A),
        (this.func = p);
    }
    let $s = [
        new be(0, 0, 0, 0, Bs),
        new be(4, 4, 8, 4, Ui),
        new be(4, 5, 16, 8, Ui),
        new be(4, 6, 32, 32, Ui),
        new be(4, 4, 16, 16, Qe),
        new be(8, 16, 32, 32, Qe),
        new be(8, 16, 128, 128, Qe),
        new be(8, 32, 128, 256, Qe),
        new be(32, 128, 258, 1024, Qe),
        new be(32, 258, 258, 4096, Qe),
      ],
      an = (a) => {
        (a.window_size = 2 * a.w_size),
          Fe(a.head),
          (a.max_lazy_match = $s[a.level].max_lazy),
          (a.good_match = $s[a.level].good_length),
          (a.nice_match = $s[a.level].nice_length),
          (a.max_chain_length = $s[a.level].max_chain),
          (a.strstart = 0),
          (a.block_start = 0),
          (a.lookahead = 0),
          (a.insert = 0),
          (a.match_length = a.prev_length = ct - 1),
          (a.match_available = 0),
          (a.ins_h = 0);
      };
    function Ro() {
      (this.strm = null),
        (this.status = 0),
        (this.pending_buf = null),
        (this.pending_buf_size = 0),
        (this.pending_out = 0),
        (this.pending = 0),
        (this.wrap = 0),
        (this.gzhead = null),
        (this.gzindex = 0),
        (this.method = ys),
        (this.last_flush = -1),
        (this.w_size = 0),
        (this.w_bits = 0),
        (this.w_mask = 0),
        (this.window = null),
        (this.window_size = 0),
        (this.prev = null),
        (this.head = null),
        (this.ins_h = 0),
        (this.hash_size = 0),
        (this.hash_bits = 0),
        (this.hash_mask = 0),
        (this.hash_shift = 0),
        (this.block_start = 0),
        (this.match_length = 0),
        (this.prev_match = 0),
        (this.match_available = 0),
        (this.strstart = 0),
        (this.match_start = 0),
        (this.lookahead = 0),
        (this.prev_length = 0),
        (this.max_chain_length = 0),
        (this.max_lazy_match = 0),
        (this.level = 0),
        (this.strategy = 0),
        (this.good_match = 0),
        (this.nice_match = 0),
        (this.dyn_ltree = new Uint16Array(Ao * 2)),
        (this.dyn_dtree = new Uint16Array((2 * nn + 1) * 2)),
        (this.bl_tree = new Uint16Array((2 * wo + 1) * 2)),
        Fe(this.dyn_ltree),
        Fe(this.dyn_dtree),
        Fe(this.bl_tree),
        (this.l_desc = null),
        (this.d_desc = null),
        (this.bl_desc = null),
        (this.bl_count = new Uint16Array(bo + 1)),
        (this.heap = new Uint16Array(2 * fr + 1)),
        Fe(this.heap),
        (this.heap_len = 0),
        (this.heap_max = 0),
        (this.depth = new Uint16Array(2 * fr + 1)),
        Fe(this.depth),
        (this.l_buf = 0),
        (this.lit_bufsize = 0),
        (this.last_lit = 0),
        (this.d_buf = 0),
        (this.opt_len = 0),
        (this.static_len = 0),
        (this.matches = 0),
        (this.insert = 0),
        (this.bi_buf = 0),
        (this.bi_valid = 0);
    }
    let Er = (a) => {
        if (!a || !a.state) return $e(a, ye);
        (a.total_in = a.total_out = 0), (a.data_type = mo);
        let E = a.state;
        return (
          (E.pending = 0),
          (E.pending_out = 0),
          E.wrap < 0 && (E.wrap = -E.wrap),
          (E.status = E.wrap ? Es : Ss),
          (a.adler = E.wrap === 2 ? 0 : 1),
          (E.last_flush = gs),
          ur(E),
          Ft
        );
      },
      Sr = (a) => {
        let E = Er(a);
        return E === Ft && an(a.state), E;
      },
      Co = (a, E) =>
        !a || !a.state || a.state.wrap !== 2 ? ye : ((a.state.gzhead = E), Ft),
      Hi = (a, E, v, A, p, O) => {
        if (!a) return ye;
        let C = 1;
        if (
          (E === po && (E = 6),
          A < 0 ? ((C = 0), (A = -A)) : A > 15 && ((C = 2), (A -= 16)),
          p < 1 ||
            p > yo ||
            v !== ys ||
            A < 8 ||
            A > 15 ||
            E < 0 ||
            E > 9 ||
            O < 0 ||
            O > sn)
        )
          return $e(a, ye);
        A === 8 && (A = 9);
        let k = new Ro();
        return (
          (a.state = k),
          (k.strm = a),
          (k.wrap = C),
          (k.gzhead = null),
          (k.w_bits = A),
          (k.w_size = 1 << k.w_bits),
          (k.w_mask = k.w_size - 1),
          (k.hash_bits = p + 7),
          (k.hash_size = 1 << k.hash_bits),
          (k.hash_mask = k.hash_size - 1),
          (k.hash_shift = ~~((k.hash_bits + ct - 1) / ct)),
          (k.window = new Uint8Array(k.w_size * 2)),
          (k.head = new Uint16Array(k.hash_size)),
          (k.prev = new Uint16Array(k.w_size)),
          (k.lit_bufsize = 1 << (p + 6)),
          (k.pending_buf_size = k.lit_bufsize * 4),
          (k.pending_buf = new Uint8Array(k.pending_buf_size)),
          (k.d_buf = 1 * k.lit_bufsize),
          (k.l_buf = 3 * k.lit_bufsize),
          (k.level = E),
          (k.strategy = O),
          (k.method = v),
          Sr(a)
        );
      },
      Io = (a, E) => Hi(a, E, ys, Eo, So, rn),
      vr = (a, E) => {
        let v, A;
        if (!a || !a.state || E > ci || E < 0) return a ? $e(a, ye) : ye;
        let p = a.state;
        if (
          !a.output ||
          (!a.input && a.avail_in !== 0) ||
          (p.status === Be && E !== yt)
        )
          return $e(a, a.avail_out === 0 ? dr : ye);
        p.strm = a;
        let O = p.last_flush;
        if (((p.last_flush = E), p.status === Es))
          if (p.wrap === 2)
            (a.adler = 0),
              lt(p, 31),
              lt(p, 139),
              lt(p, 8),
              p.gzhead
                ? (lt(
                    p,
                    (p.gzhead.text ? 1 : 0) +
                      (p.gzhead.hcrc ? 2 : 0) +
                      (p.gzhead.extra ? 4 : 0) +
                      (p.gzhead.name ? 8 : 0) +
                      (p.gzhead.comment ? 16 : 0)
                  ),
                  lt(p, p.gzhead.time & 255),
                  lt(p, (p.gzhead.time >> 8) & 255),
                  lt(p, (p.gzhead.time >> 16) & 255),
                  lt(p, (p.gzhead.time >> 24) & 255),
                  lt(
                    p,
                    p.level === 9 ? 2 : p.strategy >= Di || p.level < 2 ? 4 : 0
                  ),
                  lt(p, p.gzhead.os & 255),
                  p.gzhead.extra &&
                    p.gzhead.extra.length &&
                    (lt(p, p.gzhead.extra.length & 255),
                    lt(p, (p.gzhead.extra.length >> 8) & 255)),
                  p.gzhead.hcrc &&
                    (a.adler = Me(a.adler, p.pending_buf, p.pending, 0)),
                  (p.gzindex = 0),
                  (p.status = ki))
                : (lt(p, 0),
                  lt(p, 0),
                  lt(p, 0),
                  lt(p, 0),
                  lt(p, 0),
                  lt(
                    p,
                    p.level === 9 ? 2 : p.strategy >= Di || p.level < 2 ? 4 : 0
                  ),
                  lt(p, gr),
                  (p.status = Ss));
          else {
            let C = (ys + ((p.w_bits - 8) << 4)) << 8,
              k = -1;
            p.strategy >= Di || p.level < 2
              ? (k = 0)
              : p.level < 6
              ? (k = 1)
              : p.level === 6
              ? (k = 2)
              : (k = 3),
              (C |= k << 6),
              p.strstart !== 0 && (C |= pr),
              (C += 31 - (C % 31)),
              (p.status = Ss),
              xe(p, C),
              p.strstart !== 0 &&
                (xe(p, a.adler >>> 16), xe(p, a.adler & 65535)),
              (a.adler = 1);
          }
        if (p.status === ki)
          if (p.gzhead.extra) {
            for (
              v = p.pending;
              p.gzindex < (p.gzhead.extra.length & 65535) &&
              !(
                p.pending === p.pending_buf_size &&
                (p.gzhead.hcrc &&
                  p.pending > v &&
                  (a.adler = Me(a.adler, p.pending_buf, p.pending - v, v)),
                Ae(a),
                (v = p.pending),
                p.pending === p.pending_buf_size)
              );

            )
              lt(p, p.gzhead.extra[p.gzindex] & 255), p.gzindex++;
            p.gzhead.hcrc &&
              p.pending > v &&
              (a.adler = Me(a.adler, p.pending_buf, p.pending - v, v)),
              p.gzindex === p.gzhead.extra.length &&
                ((p.gzindex = 0), (p.status = xi));
          } else p.status = xi;
        if (p.status === xi)
          if (p.gzhead.name) {
            v = p.pending;
            do {
              if (
                p.pending === p.pending_buf_size &&
                (p.gzhead.hcrc &&
                  p.pending > v &&
                  (a.adler = Me(a.adler, p.pending_buf, p.pending - v, v)),
                Ae(a),
                (v = p.pending),
                p.pending === p.pending_buf_size)
              ) {
                A = 1;
                break;
              }
              p.gzindex < p.gzhead.name.length
                ? (A = p.gzhead.name.charCodeAt(p.gzindex++) & 255)
                : (A = 0),
                lt(p, A);
            } while (A !== 0);
            p.gzhead.hcrc &&
              p.pending > v &&
              (a.adler = Me(a.adler, p.pending_buf, p.pending - v, v)),
              A === 0 && ((p.gzindex = 0), (p.status = li));
          } else p.status = li;
        if (p.status === li)
          if (p.gzhead.comment) {
            v = p.pending;
            do {
              if (
                p.pending === p.pending_buf_size &&
                (p.gzhead.hcrc &&
                  p.pending > v &&
                  (a.adler = Me(a.adler, p.pending_buf, p.pending - v, v)),
                Ae(a),
                (v = p.pending),
                p.pending === p.pending_buf_size)
              ) {
                A = 1;
                break;
              }
              p.gzindex < p.gzhead.comment.length
                ? (A = p.gzhead.comment.charCodeAt(p.gzindex++) & 255)
                : (A = 0),
                lt(p, A);
            } while (A !== 0);
            p.gzhead.hcrc &&
              p.pending > v &&
              (a.adler = Me(a.adler, p.pending_buf, p.pending - v, v)),
              A === 0 && (p.status = Li);
          } else p.status = Li;
        if (
          (p.status === Li &&
            (p.gzhead.hcrc
              ? (p.pending + 2 > p.pending_buf_size && Ae(a),
                p.pending + 2 <= p.pending_buf_size &&
                  (lt(p, a.adler & 255),
                  lt(p, (a.adler >> 8) & 255),
                  (a.adler = 0),
                  (p.status = Ss)))
              : (p.status = Ss)),
          p.pending !== 0)
        ) {
          if ((Ae(a), a.avail_out === 0)) return (p.last_flush = -1), Ft;
        } else if (a.avail_in === 0 && Vi(E) <= Vi(O) && E !== yt)
          return $e(a, dr);
        if (p.status === Be && a.avail_in !== 0) return $e(a, dr);
        if (
          a.avail_in !== 0 ||
          p.lookahead !== 0 ||
          (E !== gs && p.status !== Be)
        ) {
          let C =
            p.strategy === Di
              ? To(p, E)
              : p.strategy === en
              ? on(p, E)
              : $s[p.level].func(p, E);
          if (((C === De || C === js) && (p.status = Be), C === kt || C === De))
            return a.avail_out === 0 && (p.last_flush = -1), Ft;
          if (
            C === ui &&
            (E === Hs
              ? Zr(p)
              : E !== ci &&
                (hr(p, 0, 0, !1),
                E === tn &&
                  (Fe(p.head),
                  p.lookahead === 0 &&
                    ((p.strstart = 0), (p.block_start = 0), (p.insert = 0)))),
            Ae(a),
            a.avail_out === 0)
          )
            return (p.last_flush = -1), Ft;
        }
        return E !== yt
          ? Ft
          : p.wrap <= 0
          ? ms
          : (p.wrap === 2
              ? (lt(p, a.adler & 255),
                lt(p, (a.adler >> 8) & 255),
                lt(p, (a.adler >> 16) & 255),
                lt(p, (a.adler >> 24) & 255),
                lt(p, a.total_in & 255),
                lt(p, (a.total_in >> 8) & 255),
                lt(p, (a.total_in >> 16) & 255),
                lt(p, (a.total_in >> 24) & 255))
              : (xe(p, a.adler >>> 16), xe(p, a.adler & 65535)),
            Ae(a),
            p.wrap > 0 && (p.wrap = -p.wrap),
            p.pending !== 0 ? Ft : ms);
      },
      Po = (a) => {
        if (!a || !a.state) return ye;
        let E = a.state.status;
        return E !== Es &&
          E !== ki &&
          E !== xi &&
          E !== li &&
          E !== Li &&
          E !== Ss &&
          E !== Be
          ? $e(a, ye)
          : ((a.state = null), E === Ss ? $e(a, fo) : Ft);
      },
      Oo = (a, E) => {
        let v = E.length;
        if (!a || !a.state) return ye;
        let A = a.state,
          p = A.wrap;
        if (p === 2 || (p === 1 && A.status !== Es) || A.lookahead) return ye;
        if (
          (p === 1 && (a.adler = Kr(a.adler, E, v, 0)),
          (A.wrap = 0),
          v >= A.w_size)
        ) {
          p === 0 &&
            (Fe(A.head), (A.strstart = 0), (A.block_start = 0), (A.insert = 0));
          let ot = new Uint8Array(A.w_size);
          ot.set(E.subarray(v - A.w_size, v), 0), (E = ot), (v = A.w_size);
        }
        let O = a.avail_in,
          C = a.next_in,
          k = a.input;
        for (
          a.avail_in = v, a.next_in = 0, a.input = E, vs(A);
          A.lookahead >= ct;

        ) {
          let ot = A.strstart,
            tt = A.lookahead - (ct - 1);
          do
            (A.ins_h = ke(A, A.ins_h, A.window[ot + ct - 1])),
              (A.prev[ot & A.w_mask] = A.head[A.ins_h]),
              (A.head[A.ins_h] = ot),
              ot++;
          while (--tt);
          (A.strstart = ot), (A.lookahead = ct - 1), vs(A);
        }
        return (
          (A.strstart += A.lookahead),
          (A.block_start = A.strstart),
          (A.insert = A.lookahead),
          (A.lookahead = 0),
          (A.match_length = A.prev_length = ct - 1),
          (A.match_available = 0),
          (a.next_in = C),
          (a.input = k),
          (a.avail_in = O),
          (A.wrap = p),
          Ft
        );
      };
    var No = Io,
      Mo = Hi,
      _r = Sr,
      Do = Er,
      ko = Co,
      ji = vr,
      _s = Po,
      cn = Oo,
      xo = "pako deflate (from Nodeca project)",
      di = {
        deflateInit: No,
        deflateInit2: Mo,
        deflateReset: _r,
        deflateResetKeep: Do,
        deflateSetHeader: ko,
        deflate: ji,
        deflateEnd: _s,
        deflateSetDictionary: cn,
        deflateInfo: xo,
      };
    let Lo = (a, E) => Object.prototype.hasOwnProperty.call(a, E);
    var ln = function (a) {
        let E = Array.prototype.slice.call(arguments, 1);
        for (; E.length; ) {
          let v = E.shift();
          if (v) {
            if (typeof v != "object")
              throw new TypeError(v + "must be non-object");
            for (let A in v) Lo(v, A) && (a[A] = v[A]);
          }
        }
        return a;
      },
      fi = (a) => {
        let E = 0;
        for (let A = 0, p = a.length; A < p; A++) E += a[A].length;
        let v = new Uint8Array(E);
        for (let A = 0, p = 0, O = a.length; A < O; A++) {
          let C = a[A];
          v.set(C, p), (p += C.length);
        }
        return v;
      },
      pi = { assign: ln, flattenChunks: fi };
    let Ze = !0;
    try {
      String.fromCharCode.apply(null, new Uint8Array(1));
    } catch {
      Ze = !1;
    }
    let gi = new Uint8Array(256);
    for (let a = 0; a < 256; a++)
      gi[a] =
        a >= 252
          ? 6
          : a >= 248
          ? 5
          : a >= 240
          ? 4
          : a >= 224
          ? 3
          : a >= 192
          ? 2
          : 1;
    gi[254] = gi[254] = 1;
    var Vo = (a) => {
      if (typeof TextEncoder == "function" && TextEncoder.prototype.encode)
        return new TextEncoder().encode(a);
      let E,
        v,
        A,
        p,
        O,
        C = a.length,
        k = 0;
      for (p = 0; p < C; p++)
        (v = a.charCodeAt(p)),
          (v & 64512) === 55296 &&
            p + 1 < C &&
            ((A = a.charCodeAt(p + 1)),
            (A & 64512) === 56320 &&
              ((v = 65536 + ((v - 55296) << 10) + (A - 56320)), p++)),
          (k += v < 128 ? 1 : v < 2048 ? 2 : v < 65536 ? 3 : 4);
      for (E = new Uint8Array(k), O = 0, p = 0; O < k; p++)
        (v = a.charCodeAt(p)),
          (v & 64512) === 55296 &&
            p + 1 < C &&
            ((A = a.charCodeAt(p + 1)),
            (A & 64512) === 56320 &&
              ((v = 65536 + ((v - 55296) << 10) + (A - 56320)), p++)),
          v < 128
            ? (E[O++] = v)
            : v < 2048
            ? ((E[O++] = 192 | (v >>> 6)), (E[O++] = 128 | (v & 63)))
            : v < 65536
            ? ((E[O++] = 224 | (v >>> 12)),
              (E[O++] = 128 | ((v >>> 6) & 63)),
              (E[O++] = 128 | (v & 63)))
            : ((E[O++] = 240 | (v >>> 18)),
              (E[O++] = 128 | ((v >>> 12) & 63)),
              (E[O++] = 128 | ((v >>> 6) & 63)),
              (E[O++] = 128 | (v & 63)));
      return E;
    };
    let un = (a, E = a.length) => {
      if (E < 65534 && a.subarray && Ze)
        return String.fromCharCode.apply(
          null,
          a.length === E ? a : a.subarray(0, E)
        );
      let v = "";
      for (let A = 0; A < E; A++) v += String.fromCharCode(a[A]);
      return v;
    };
    var Uo = (a, E) => {
        let v = E || a.length;
        if (typeof TextDecoder == "function" && TextDecoder.prototype.decode)
          return new TextDecoder().decode(a.subarray(0, E));
        let A,
          p,
          O = new Array(v * 2);
        for (p = 0, A = 0; A < v; ) {
          let C = a[A++];
          if (C < 128) {
            O[p++] = C;
            continue;
          }
          let k = gi[C];
          if (k > 4) {
            (O[p++] = 65533), (A += k - 1);
            continue;
          }
          for (C &= k === 2 ? 31 : k === 3 ? 15 : 7; k > 1 && A < v; )
            (C = (C << 6) | (a[A++] & 63)), k--;
          if (k > 1) {
            O[p++] = 65533;
            continue;
          }
          C < 65536
            ? (O[p++] = C)
            : ((C -= 65536),
              (O[p++] = 55296 | ((C >> 10) & 1023)),
              (O[p++] = 56320 | (C & 1023)));
        }
        return un(O, p);
      },
      Ho = (a, E) => {
        (E = E || a.length), E > a.length && (E = a.length);
        let v = E - 1;
        for (; v >= 0 && (a[v] & 192) === 128; ) v--;
        return v < 0 || v === 0 ? E : v + gi[a[v]] > E ? v : E;
      },
      hn = { string2buf: Vo, buf2string: Uo, utf8border: Ho };
    function jo() {
      (this.input = null),
        (this.next_in = 0),
        (this.avail_in = 0),
        (this.total_in = 0),
        (this.output = null),
        (this.next_out = 0),
        (this.avail_out = 0),
        (this.total_out = 0),
        (this.msg = ""),
        (this.state = null),
        (this.data_type = 2),
        (this.adler = 0);
    }
    var Bo = jo;
    let u = Object.prototype.toString,
      {
        Z_NO_FLUSH: l,
        Z_SYNC_FLUSH: f,
        Z_FULL_FLUSH: g,
        Z_FINISH: m,
        Z_OK: b,
        Z_STREAM_END: U,
        Z_DEFAULT_COMPRESSION: V,
        Z_DEFAULT_STRATEGY: R,
        Z_DEFLATED: B,
      } = Qr;
    function G(a) {
      this.options = pi.assign(
        {
          level: V,
          method: B,
          chunkSize: 16384,
          windowBits: 15,
          memLevel: 8,
          strategy: R,
        },
        a || {}
      );
      let E = this.options;
      E.raw && E.windowBits > 0
        ? (E.windowBits = -E.windowBits)
        : E.gzip &&
          E.windowBits > 0 &&
          E.windowBits < 16 &&
          (E.windowBits += 16),
        (this.err = 0),
        (this.msg = ""),
        (this.ended = !1),
        (this.chunks = []),
        (this.strm = new Bo()),
        (this.strm.avail_out = 0);
      let v = di.deflateInit2(
        this.strm,
        E.level,
        E.method,
        E.windowBits,
        E.memLevel,
        E.strategy
      );
      if (v !== b) throw new Error(fs[v]);
      if (
        (E.header && di.deflateSetHeader(this.strm, E.header), E.dictionary)
      ) {
        let A;
        if (
          (typeof E.dictionary == "string"
            ? (A = hn.string2buf(E.dictionary))
            : u.call(E.dictionary) === "[object ArrayBuffer]"
            ? (A = new Uint8Array(E.dictionary))
            : (A = E.dictionary),
          (v = di.deflateSetDictionary(this.strm, A)),
          v !== b)
        )
          throw new Error(fs[v]);
        this._dict_set = !0;
      }
    }
    (G.prototype.push = function (a, E) {
      let v = this.strm,
        A = this.options.chunkSize,
        p,
        O;
      if (this.ended) return !1;
      for (
        E === ~~E ? (O = E) : (O = E === !0 ? m : l),
          typeof a == "string"
            ? (v.input = hn.string2buf(a))
            : u.call(a) === "[object ArrayBuffer]"
            ? (v.input = new Uint8Array(a))
            : (v.input = a),
          v.next_in = 0,
          v.avail_in = v.input.length;
        ;

      ) {
        if (
          (v.avail_out === 0 &&
            ((v.output = new Uint8Array(A)),
            (v.next_out = 0),
            (v.avail_out = A)),
          (O === f || O === g) && v.avail_out <= 6)
        ) {
          this.onData(v.output.subarray(0, v.next_out)), (v.avail_out = 0);
          continue;
        }
        if (((p = di.deflate(v, O)), p === U))
          return (
            v.next_out > 0 && this.onData(v.output.subarray(0, v.next_out)),
            (p = di.deflateEnd(this.strm)),
            this.onEnd(p),
            (this.ended = !0),
            p === b
          );
        if (v.avail_out === 0) {
          this.onData(v.output);
          continue;
        }
        if (O > 0 && v.next_out > 0) {
          this.onData(v.output.subarray(0, v.next_out)), (v.avail_out = 0);
          continue;
        }
        if (v.avail_in === 0) break;
      }
      return !0;
    }),
      (G.prototype.onData = function (a) {
        this.chunks.push(a);
      }),
      (G.prototype.onEnd = function (a) {
        a === b && (this.result = pi.flattenChunks(this.chunks)),
          (this.chunks = []),
          (this.err = a),
          (this.msg = this.strm.msg);
      });
    function K(a, E) {
      E = E || {};
      let v = new G(E);
      if ((v.push(a, !0), v.err)) throw v.msg || fs[v.err];
      return v.result;
    }
    function rt(a, E) {
      return (E = E || {}), (E.gzip = !0), K(a, E);
    }
    return (a, E, v) => {
      let A = rt(a);
      return E === "base64" ? (A = btoa(un(A))) : (A = A.buffer), v && v(A), A;
    };
  }
  var m_ = (() => {
      class s extends ih {
        constructor() {
          super(),
            (this.algorithm = Fr.GZIP),
            (this.Hb = Ja()),
            (this.compress = (i, n, o) => this.Cg.compress(i, n).then(o));
          let e =
            typeof CompressionStream != "undefined" && !!self.CompressionStream
              ? E_
              : y_;
          (this.Cg = new e()),
            g_.create(e, { getPakoCompressor: Ja }).then((i) => {
              this.Cg = i;
            });
        }
        compressSync(t, e) {
          try {
            return this.Hb(t, e);
          } catch (i) {
            throw (Tt.warn(i), i);
          }
        }
      }
      return s;
    })(),
    y_ = (() => {
      class s {
        constructor() {
          this.jb = Ja();
        }
        compress(t, e) {
          return Promise.resolve(this.jb(t, e));
        }
      }
      return s;
    })(),
    E_ = (() => {
      class s {
        Bb(t) {
          return new Promise((e) => {
            let i = new FileReader();
            (i.onload = (n) => e(n.target.result.split(",")[1])),
              i.readAsDataURL(new Blob([t]));
          });
        }
        compress(t, e) {
          let i = new Response(t).body.pipeThrough(
              new CompressionStream("gzip")
            ),
            n = new Response(i).arrayBuffer();
          return e === "base64" ? n.then((o) => this.Bb(o)) : n;
        }
      }
      return s;
    })(),
    S_ = (() => {
      class s extends ih {
        constructor() {
          super(...arguments),
            (this.algorithm = Fr.UNCOMPRESSED),
            (this.compress = (t, e, i) => {
              i(this.compressSync(t, e));
            }),
            (this.compressSync = (t, e) => t);
        }
      }
      return s;
    })(),
    hd = (() => {
      class s {
        static create(t = !0) {
          return this.instance
            ? this.instance
            : t && !f_.isCompressionEnabled()
            ? new S_()
            : (this.instance = new m_());
        }
      }
      return s;
    })(),
    v_ = (s) => {
      let r = s * 60 * 1e3;
      return `${Math.floor(csDate.now() / r)}`;
    },
    __ = 5e3,
    w_ = (() => {
      class s extends yc {
        constructor(t, e, i) {
          super(t, e),
            (this.Nr = null),
            (this.$b = (i == null ? void 0 : i.type) || "json"),
            (this.Ig = i == null ? void 0 : i.cacheMinutes),
            (this.Go = i == null ? void 0 : i.timeout);
        }
        onLoad(t) {
          this.lr = t;
        }
        onError(t) {
          this.tn = t;
        }
        onTimeout(t, e) {
          (this.bi = t), (this.Go = e);
        }
        send() {
          csArray.prototype.forEach.call(this.beforeRequestCallbacks, (n) =>
            n()
          );
          let t = this.retrieveParameters();
          this.Vc(t);
          let e = kr.toQuery(t),
            i = `${this.domainUri}${this.path ? `/${this.path}` : ""}?${e}`;
          this.Fb(i, this.$b);
        }
        abort() {
          this.Nr && (this.Nr.abort(), (this.Nr = null));
        }
        isInProgress() {
          return this.Nr !== null;
        }
        Fb(t, e) {
          var i;
          let n = new XMLHttpRequest();
          n.open("GET", t, !0),
            (n.responseType = e),
            (n.onerror = () => {
              var o;
              return (o = this.tn) === null || o === void 0
                ? void 0
                : o.call(this, n);
            }),
            (n.ontimeout = () => {
              var o;
              return (o = this.bi) === null || o === void 0
                ? void 0
                : o.call(this, n);
            }),
            (n.onload = () => {
              var o, c;
              n.status >= 200 && n.status < 400
                ? ((o = this.lr) === null ||
                    o === void 0 ||
                    o.call(this, this.Gb(n, e) ? n.response : n.responseText),
                  csArray.prototype.forEach.call(
                    this.afterRequestCallbacks,
                    (h) => h()
                  ))
                : (c = this.tn) === null || c === void 0 || c.call(this, n);
            }),
            (n.onloadend = () => {
              this.Nr = null;
            }),
            (n.timeout = (i = this.Go) !== null && i !== void 0 ? i : __),
            (this.Nr = n),
            n.send();
        }
        Gb(t, e) {
          let i = t.getResponseHeader("Content-Type");
          return i === null
            ? e === "json"
            : csString.prototype.indexOf.call(
                csString.prototype.toLowerCase.call(i),
                "json"
              ) > 0;
        }
        Vc(t) {
          let e;
          this.Ig
            ? (e = `${v_(this.Ig)}`)
            : (e = csString.prototype.slice.call(`${Math.random()}`, 2, 8)),
            (t.r = e);
        }
      }
      return s;
    })(),
    dd = (() => {
      class s {
        constructor(t) {
          this.Pg = t;
        }
        create(t, e, i, n) {
          let o = e
            ? {
                compressor: this.Pg.compress,
                compressionOutputType: e,
                compressionType: this.Pg.algorithm,
              }
            : void 0;
          return new xn({
            endpoint: t,
            compressionOpts: o,
            recoveryStorage: i,
            disableRequestCounting: n,
          });
        }
      }
      return s;
    })(),
    A_ = (() => {
      class s {
        setItem(t, e) {
          window.localStorage.setItem(t, e);
        }
        getItem(t) {
          return window.localStorage.getItem(t);
        }
        removeItem(t) {
          window.localStorage.removeItem(t);
        }
      }
      return s;
    })(),
    ua = (() => {
      class s {
        constructor(t, e, i, n, o, c) {
          (this.E = t),
            (this.D = e),
            (this.ah = i),
            (this.fi = n),
            (this.Og = o),
            (this.zb = c);
        }
        onCookieSet(t) {
          this.Je = t;
        }
        onCookieRemoved(t) {
          this.Wi = t;
        }
        get() {
          return this.E.cookielessTrackingEnabled
            ? this.ah.getItem(this.fi)
            : this.D.get(this.fi);
        }
        set(t) {
          var e;
          this.E.cookielessTrackingEnabled
            ? this.ah.setItem(this.fi, t)
            : (this.D.set(this.fi, t, this.Og, this.zb),
              (e = this.Je) === null ||
                e === void 0 ||
                e.call(this, this.fi, t, this.Og));
        }
        remove() {
          var t;
          this.E.cookielessTrackingEnabled
            ? this.ah.removeItem(this.fi)
            : (this.D.delete(this.fi),
              (t = this.Wi) === null || t === void 0 || t.call(this, this.fi));
        }
      }
      return s;
    })(),
    Yr = (() => {
      class s {
        isEventTypeSupported(t) {
          return (
            csArray.prototype.indexOf.call(this.supportedEventTypes, t) !== -1
          );
        }
        enhanceAnalysisEvent(t, e) {
          return this.isEventTypeSupported(e.type)
            ? this.baseEnhanceAnalysisEvent(t, e)
            : e;
        }
      }
      return s;
    })();
  var b_ = (() => {
      class s {
        constructor(t) {
          this.ch = t;
        }
        start() {
          this.ch.onEvent((t) => this.X(t)), this.ch.start();
        }
        stop() {
          this.ch.stop();
        }
        X(t) {
          let e = `Content Security Policy error. Violated directive: ${t.violatedDirective} - Source file: ${t.sourceFile}`;
          J.warn(e);
        }
      }
      return s;
    })(),
    T_ = (() => {
      class s {
        constructor() {
          this.Zt = {
            boundElement: document,
            type: "securitypolicyviolation",
            listener: (t) => this.securityPolicyViolationListener(t),
          };
        }
        start() {
          Mt(this.Zt);
        }
        stop() {
          Dt(this.Zt);
        }
        onEvent(t) {
          this.B = t;
        }
        Xb(t) {
          if (!t) return !1;
          let e = t.disposition;
          return (
            j(t.sourceFile) &&
            csArray.prototype.some.call(
              s.Kb,
              (i) => csString.prototype.indexOf.call(t.sourceFile, i) > 0
            ) &&
            e !== "report"
          );
        }
        securityPolicyViolationListener(t) {
          this.Xb(t) &&
            this.B({
              violatedDirective: t.violatedDirective,
              sourceFile: t.sourceFile,
            });
        }
      }
      return (
        (s.Kb = ["contentsquare", "cdnssl.clicktale.net"]),
        Z(
          [$("Event handler type: securitypolicyviolation")],
          s.prototype,
          "securityPolicyViolationListener",
          null
        ),
        s
      );
    })(),
    R_ = (() => {
      class s {
        init() {
          (this.Ba = new b_(new T_())), this.Ba.start();
        }
        onOptout() {
          this.Ba.stop();
        }
        onArtificialPageViewEnd(t) {
          t && this.Ba.stop();
        }
        onAfterArtificialPageView(t) {
          t && this.Ba.start();
        }
      }
      return s;
    })(),
    C_ = (() => {
      class s {
        constructor(t, e, i) {
          (this.E = t), (this.C = e), (this.w = i);
        }
        grantReplayConsent() {
          if (!Zs.isReplayConsentNeeded(this.E)) return;
          let t = this.C.getSession();
          if (!t) {
            this.C.grantReplayRecordingBeforeSessionStart();
            return;
          }
          Zs.isRecordingBlockedByConsent(t) &&
            (this.C.grantReplayRecording(t),
            this.w.emitAfterReplayRecordingConsentGranted());
        }
        withdrawReplayConsent() {
          if (!Zs.isReplayConsentNeeded(this.E)) return;
          let t = this.C.getSession();
          if (!t) {
            this.C.withdrawnReplayRecordingBeforeSessionStart();
            return;
          }
          Zs.isRecordingWithDrawn(t) ||
            (this.C.withdrawnReplayRecording(t),
            this.w.emitAfterReplayRecordingConsentWithdrawn());
        }
      }
      return s;
    })(),
    I_ = ["replay:consent:unanonymized:granted", "trackConsentGranted"],
    P_ = ["replay:consent:unanonymized:withdrawn", "trackConsentWithdrawn"],
    O_ = ["replay:consent:startForSession:granted"],
    N_ = ["replay:consent:startForSession:withdrawn"],
    M_ = (() => {
      class s {
        constructor(t, e, i, n, o) {
          (this.E = t), (this.S = e), (this.bt = i), (this.C = n), (this.w = o);
        }
        init() {
          (this.Ng = new C_(this.E, this.C, this.w)),
            this.bt.setInitialConsent(),
            this.ut();
        }
        ut() {
          this.S.register(I_, () => {
            this.bt.grantReplayAnonymizationConsent();
          }),
            this.S.register(P_, () => {
              this.bt.withdrawReplayAnonymizationConsent();
            }),
            this.S.register(O_, () => {
              this.Ng.grantReplayConsent();
            }),
            this.S.register(N_, () => {
              this.Ng.withdrawReplayConsent();
            });
        }
        onOptout() {
          this.bt.removeAllConsents();
        }
        onBeforeVisitorRenewal() {
          this.bt.removeAllConsents();
        }
        onAfterVisitorRenewal() {
          this.bt.setInitialConsent();
        }
        onAfterVisitorCleared() {
          this.bt.setInitialConsent();
        }
      }
      return s;
    })(),
    Ys = "_cs_c",
    yi = (() => {
      let s;
      return (
        (function (r) {
          (r[(r.NOT_REQUIRED = 0)] = "NOT_REQUIRED"),
            (r[(r.NOT_EXPRESSED = 1)] = "NOT_EXPRESSED"),
            (r[(r.GRANTED = 2)] = "GRANTED"),
            (r[(r.WITHDRAWN = 3)] = "WITHDRAWN");
        })(s || (s = {})),
        s
      );
    })(),
    D_ = (() => {
      class s {
        constructor(t, e, i) {
          (this.E = t), (this.D = e), (this._t = i);
        }
        get() {
          let t;
          return (
            this.E.cookielessTrackingEnabled
              ? (t = this._t.getItem(Ys))
              : (t = this.D.get(Ys)),
            t === null ? t : Number(t)
          );
        }
        set(t) {
          this.E.cookielessTrackingEnabled
            ? this._t.setItem(Ys, csString(t))
            : this.D.set(Ys, csString(t), oc);
        }
        remove() {
          this.E.cookielessTrackingEnabled
            ? this._t.removeItem(Ys)
            : this.D.delete(Ys);
        }
        handleSubdomainChange() {
          this.E.cookielessTrackingEnabled ||
            (this.E.allowSubdomains
              ? this.D.delete(Ys, Xn.CURRENT_DOMAIN)
              : this.D.delete(Ys, this.D.getRootDomain()));
        }
      }
      return s;
    })(),
    k_ = (() => {
      class s {
        constructor(t, e, i) {
          (this.E = t), (this.it = e), (this.w = i);
        }
        setInitialConsent() {
          let t = this.it.get();
          (t === null || this.hasConsentRequiredChanged(t)) &&
            this.setDefaultReplayAnonymization();
        }
        hasConsentRequiredChanged(t) {
          let e = this.E.consentRequired;
          return (e && t === yi.NOT_REQUIRED) || (!e && t !== yi.NOT_REQUIRED);
        }
        handleSubdomainChange() {
          this.it.handleSubdomainChange();
        }
        setDefaultReplayAnonymization() {
          let t = this.E.consentRequired ? yi.NOT_EXPRESSED : yi.NOT_REQUIRED;
          this.it.set(t);
        }
        grantReplayAnonymizationConsent() {
          this.E.consentRequired &&
            (this.it.set(yi.GRANTED),
            this.w.emitReplayUnanonymizationConsentGranted());
        }
        withdrawReplayAnonymizationConsent() {
          this.E.consentRequired &&
            (this.it.set(yi.WITHDRAWN),
            this.w.emitReplayUnanonymizationConsentWithdrawn());
        }
        removeAllConsents() {
          this.it.remove();
        }
        isReplayUnanonymizedAllowedByConsent() {
          return !this.E.consentRequired || this.it.get() === yi.GRANTED;
        }
        getRequestParameters() {
          return { uc: `${this.it.get()}` };
        }
      }
      return s;
    })(),
    gu = 512,
    mu = 255,
    ha = {
      SESSION: ["visit", 2],
      PAGE: ["page", 3],
      NEXT_PAGE_ONLY: ["nextPageOnly", 4],
    },
    x_ = (() => {
      class s {
        constructor(t, e) {
          (this.O = t), (this.it = e), (this.re = {}), (this.Fe = {});
        }
        set(t, e, i, n) {
          let o, c;
          if (
            (Ht(t) || j(t)) &&
            Number(t) > 0 &&
            Ct(e) &&
            Ct(i) &&
            !Xe(e) &&
            !Xe(i) &&
            this.Jb(n)
          ) {
            let h = this.O.anonymizePII(csString(e)),
              d = this.O.anonymizePII(csString(i));
            if (
              ((o = [
                csString.prototype.slice.call(h, 0, gu),
                csString.prototype.slice.call(d, 0, mu),
              ]),
              (c = i !== ""),
              !ft(n) || csArray.prototype.indexOf.call(ha.SESSION, n) >= 0)
            ) {
              let S = this.getCustomVariablesSession();
              c ? (S[t] = o) : delete S[t], this.setCustomVariableSession(S);
            }
            (!ft(n) || csArray.prototype.indexOf.call(ha.PAGE, n) >= 0) &&
              (c ? (this.re[t] = o) : delete this.re[t]),
              ft(n) &&
                csArray.prototype.indexOf.call(ha.NEXT_PAGE_ONLY, n) >= 0 &&
                (c ? (this.Fe[t] = o) : delete this.Fe[t]);
          } else throw new ge(Cc[0]);
        }
        getCustomVariablesSession() {
          let t = this.it.get();
          if (!t) return {};
          let e = window.csJSON.parse(t);
          return e !== null && Ki(e) ? e : {};
        }
        setCustomVariableSession(t) {
          this.it.set(window.csJSON.stringify(t));
        }
        removeCustomVariablesSession() {
          this.it.remove();
        }
        removeCustomVariablesPage() {
          this.re = {};
        }
        getRequestParameters() {
          let t = this.getCustomVariablesSession();
          for (let i in this.Fe)
            this.Fe.hasOwnProperty(i) && (this.re[i] = this.Fe[i]);
          for (let i in this.re)
            this.re.hasOwnProperty(i) && (t[i] = this.re[i]);
          if (window.csJSON.stringify(t).length <= 2) return {};
          let e = { cvars: this.Mg(t) };
          return (
            this.hasCustomVariablesPage() &&
              (e.cvarp = this.getCustomVariablesPage()),
            e
          );
        }
        deleteNextPageOnlyCustomVariables() {
          if (Object.keys(this.Fe).length > 0)
            for (let t in this.Fe)
              this.Fe[t] === this.re[t] &&
                (delete this.re[t], delete this.Fe[t]);
        }
        hasCustomVariablesPage() {
          return this.re && !wa(this.re);
        }
        getCustomVariablesPage() {
          return this.Mg(this.re);
        }
        Dg(t) {
          for (let e in t)
            if (t.hasOwnProperty(e)) {
              let i = parseInt(e, 10),
                n = t[e],
                o = n[0],
                c = n[1];
              (!Ld(i, 1, 20) || o.length > gu || c.length > mu) && delete t[e];
            }
        }
        Mg(t) {
          this.Dg(t);
          let e = wa(t) ? [] : t;
          return window.csJSON.stringify(e);
        }
        Jb(t) {
          return !ft(t) || j(t) || Ht(t);
        }
        getAllValidCustomVars() {
          let t = this.getCustomVariablesSession();
          for (let e in this.Fe)
            this.Fe.hasOwnProperty(e) && (this.re[e] = this.Fe[e]);
          for (let e in this.re)
            this.re.hasOwnProperty(e) && (t[e] = this.re[e]);
          return this.Dg(t), t;
        }
      }
      return s;
    })(),
    fd = (() => {
      class s {
        constructor(t, e, i, n) {
          (this.ve = t), (this.io = e), (this.ro = i), (this.bt = n);
        }
        init() {
          this.Qb();
        }
        shouldMaskNonTextElements() {
          if (
            this.ve.anonymisationMethod !==
            mi.replayRecordingMaskedUrlRegexRules
          )
            return !1;
          if (this.ve.isSMB) return this.shouldUseAnonymization();
          let t = this.ro.getMatchingRules(this.io.getAnonymizedUrl());
          return csArray.prototype.some.call(t, (e) => e.maskMedia);
        }
        shouldUseAnonymization() {
          if (this.bt && !this.bt.isReplayUnanonymizedAllowedByConsent()) {
            switch (this.ve.anonymisationMethod) {
              case null:
              case mi.replayRecordingUnmaskedUrlRegex:
                return !(
                  this.ve.replayRecordingUnmaskedUrlRegex &&
                  this.ve.replayRecordingUnmaskedUrlRegex.test(
                    this.io.getAnonymizedUrl()
                  )
                );
              case mi.replayRecordingUnmaskedUrlRegexRules:
                return !this.ro.evaluateUrl(this.io.getAnonymizedUrl());
            }
            return !0;
          } else {
            switch (this.ve.anonymisationMethod) {
              case null:
              case mi.replayRecordingMaskedUrlRegex:
                return !!(
                  this.ve.replayRecordingMaskedUrlRegex &&
                  this.ve.replayRecordingMaskedUrlRegex.test(
                    this.io.getAnonymizedUrl()
                  )
                );
              case mi.replayRecordingMaskedUrlRegexRules:
                return this.ro.evaluateUrl(this.io.getAnonymizedUrl());
            }
            return !1;
          }
        }
        Qb() {
          this.ve.anonymisationMethod ===
            mi.replayRecordingMaskedUrlRegexRules &&
          this.ve.replayRecordingMaskedUrlRegexRules
            ? this.ro.setRegexRules(this.ve.replayRecordingMaskedUrlRegexRules)
            : this.ve.anonymisationMethod ===
                mi.replayRecordingUnmaskedUrlRegexRules &&
              this.ve.replayRecordingUnmaskedUrlRegexRules &&
              this.ro.setRegexRules(
                this.ve.replayRecordingUnmaskedUrlRegexRules
              );
        }
      }
      return s;
    })(),
    Qa = class {
      constructor(r) {
        this.Me = r;
      }
      send(r) {
        hj.log.debug(`Sending tags: ${csJSON.stringify(r)}`),
          this.Me.pushInternalEvents(r);
      }
      tag(r, t, e, i, n) {
        let o = this;
        return function (c) {
          if (c) {
            let h = csArray.prototype.reduce.call(
              e,
              function (d, S) {
                let y = r,
                  _ = "",
                  w = Object.keys(S);
                return (
                  csArray.prototype.forEach.call(w, function (T) {
                    let M = S[T],
                      x = c[M];
                    x == null && (x = ""),
                      i && (x = i(M, x)),
                      M === t && (_ = x),
                      M === t && !n
                        ? (y += `.${T}`)
                        : x !== "" && (y += `.${T}:${x}`);
                  }),
                  csArray.prototype.push.call(d, { key: y, val: _ }),
                  d
                );
              },
              []
            );
            o.send(h);
          }
        };
      }
      setup({ vocEnabled: r, integrationsEnabled: t }) {
        let e = function (d, S) {
            return typeof S == "string"
              ? csString.prototype.replace.call(S, /\.|:/g, "_")
              : S;
          },
          i = function (d, S) {
            return csString.prototype.replace.call(
              csString.prototype.replace.call(
                csString.prototype.replace.call(
                  csString.prototype.toString.call(S),
                  ".e:",
                  ".E:"
                ),
                ".v:",
                ".V:"
              ),
              ".c:",
              ".C:"
            );
          },
          n = function (d, S) {
            if (d === "answer") {
              let _ = parseInt(S);
              return isNaN(_)
                ? (J.warn(
                    `Poll question answer should be a number type, received ${S} instead`
                  ),
                  S)
                : _;
            }
            return d !== "type"
              ? S
              : {
                  "rating-scale-5": "rating5",
                  "rating-scale-7": "rating7",
                  "net-promoter-score": "nps",
                  "single-close-ended": "singleClose",
                  "multiple-close-ended": "multiClose",
                  "single-open-ended-multiple-line": "singleOpenMulti",
                  "single-open-ended-single-line": "singleOpenSingle",
                }[S] || S;
          },
          o = {
            "poll.show": this.tag("poll.show", "id", [{ id: "id" }]),
            "poll.send": this.tag("poll.send", "response_id", [
              { id: "id", r_id: "response_id" },
            ]),
            "poll.question": this.tag(
              "poll.q",
              "answer",
              [{ t: "type", a: "answer", id: "id", qid: "questionUuid" }],
              n
            ),
            "feedback.show": this.tag("feedback.show", "id", [{ id: "id" }]),
            "feedback.send": this.tag("feedback.send", "id", [{ id: "id" }]),
            "feedback.sentiment": this.tag("feedback.sentiment", "emotion", [
              { e: "emotion", id: "id", r_id: "response_id" },
            ]),
            "survey.show": this.tag("survey.show", "id", [{ id: "id" }]),
            "survey.open": this.tag("survey.open", "id", [{ id: "id" }]),
          },
          c = {
            "exp.opt": this.tag(
              "exp.opt",
              "variantId",
              [{ e: "experimentId", v: "variantId" }],
              i
            ),
            "exp.ub": this.tag(
              "exp.ub",
              "variantId",
              [{ e: "experimentId", v: "variantId" }],
              i
            ),
            "exp.abt": this.tag(
              "exp.abt",
              "variantId",
              [{ e: "experimentId", v: "variantId" }],
              i
            ),
            "exp.go": this.tag(
              "exp.go",
              "variantId",
              [{ e: "experimentId", v: "variantId", c: "containerId" }],
              i
            ),
            "int.ga": this.tag("int.ga", "action", [{ a: "action" }], e, !0),
            "int.mp": this.tag("int.mp", "event", [{ event: "event" }], e, !0),
            "int.hubspot": this.tag("int.hubspot", "utk", [{ utk: "utk" }]),
          };
        return Object.assign({}, r ? o : {}, t ? c : {});
      }
      listen(r) {
        let t = this.setup(r);
        csArray.prototype.forEach.call(Object.keys(t), function (e) {
          hj.event.listen(e, t[e]);
        });
      }
    },
    L_ = Qa,
    eo = (function () {
      "use strict";
      var s = {
        d: function (u, l) {
          for (var f in l)
            s.o(l, f) &&
              !s.o(u, f) &&
              Object.defineProperty(u, f, { enumerable: !0, get: l[f] });
        },
      };
      (s.g = (function () {
        if (typeof globalThis == "object") return globalThis;
        try {
          return this || new Function("return this")();
        } catch {
          if (typeof window == "object") return window;
        }
      })()),
        (s.o = function (u, l) {
          return Object.prototype.hasOwnProperty.call(u, l);
        });
      var r = {};
      s.d(r, {
        u6: function () {
          return ho;
        },
        b2: function () {
          return uo;
        },
        Vv: function () {
          return Lo;
        },
        pF: function () {
          return Li;
        },
        XA: function () {
          return tn;
        },
        fd: function () {
          return Ss;
        },
        ec: function () {
          return gi;
        },
      });
      var t = function (u) {
        return u.replace(/%u[\dA-F]{4}|%[\dA-F]{2}/gi, function (l) {
          return l.startsWith("%u")
            ? String.fromCharCode(parseInt(l.slice(2), 16))
            : String.fromCharCode(parseInt(l.slice(1), 16));
        });
      };
      function e(u) {
        return t(encodeURIComponent(u));
      }
      function i(u) {
        return btoa(e(u));
      }
      function n(u) {
        return (function (l) {
          return decodeURIComponent(
            (function (f) {
              return f.replace(/[^a-zA-Z0-9@*_+-./]/g, function (g) {
                var m = g.charCodeAt(0);
                return m < 256
                  ? "%" + m.toString(16).padStart(2, "0").toUpperCase()
                  : "%u" + m.toString(16).padStart(4, "0").toUpperCase();
              });
            })(l)
          );
        })(atob(u));
      }
      var o = {
        isOn: function () {
          var u;
          return (
            _hjSettings.hjdebug === void 0 &&
              (_hjSettings.hjdebug =
                ((u = hj.bridge.storage.items.DEBUG_FLAG) === null ||
                u === void 0
                  ? void 0
                  : u.get()) === "true"),
            _hjSettings.hjdebug
          );
        },
        on: function (u) {
          (_hjSettings.hjdebug = !0),
            u && hj.bridge.storage.items.DEBUG_FLAG.set(!0);
        },
        off: function () {
          (_hjSettings.hjdebug = !1),
            hj.bridge.storage.items.DEBUG_FLAG.clear();
        },
        emit: function (u, l) {
          typeof _hjEmitters != "undefined" &&
            _hjEmitters.includes &&
            _hjEmitters.includes(u) &&
            window.postMessage(
              {
                data: l,
                message: hj.bridge.storage.items.DEBUG_FLAG.getKey(),
                type: u,
              },
              "*"
            );
        },
      };
      function c(u) {
        return (
          (c =
            typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
              ? function (l) {
                  return typeof l;
                }
              : function (l) {
                  return l &&
                    typeof Symbol == "function" &&
                    l.constructor === Symbol &&
                    l !== Symbol.prototype
                    ? "symbol"
                    : typeof l;
                }),
          c(u)
        );
      }
      var h = !1,
        d = "",
        S = {
          autotag: "#ff0099",
          command: "#0079a4",
          cookies: "#5a2c22",
          data: "#009bd2",
          event: "#ff7000",
          events: "#ffc000",
          exception: "#e63946",
          heatmap: "#700000",
          init: "#6600cc",
          integration: "#2a9072",
          poll: "#00a000",
          property: "#ff33cc",
          recording: "#dd0000",
          rendering: "#bd00ea",
          sampling: "#efb0a1",
          survey: "#007000",
          targeting: "#00ee00",
          visitdata: "#00668a",
          websocket: "#0dc0ff",
        },
        y = {
          init: function () {
            window.console === void 0 &&
              (window.console = {
                debug: function () {},
                trace: function () {},
                log: function () {},
                info: function () {},
                warn: function () {},
                error: function () {},
              });
          },
          debug: function (u, l, f) {
            var g = (l && S[l.toLowerCase()]) || "#2a9d8f";
            d != u && h && (console.groupEnd(), (h = !1)),
              (d = u),
              hj.debug !== void 0 &&
                hj.debug.isOn() &&
                (c(u) === "object"
                  ? hj.hq.each(u, function (m, b) {
                      hj.log.debug(m + ": " + b, l, null);
                    })
                  : ((u =
                      l && typeof u == "string"
                        ? l.toUpperCase() + ": " + u
                        : u),
                    (u =
                      "%c" +
                      new Date()
                        .toTimeString()
                        .replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1") +
                      ":%c " +
                      u),
                    f
                      ? (h ||
                          (console.groupCollapsed(
                            u + ":",
                            "color: #999;",
                            "color: " + g + ";"
                          ),
                          (h = !0)),
                        console.log(f))
                      : console.log(u, "color: #999;", "color: " + g + ";")));
          },
          info: function (u) {
            console.log("%c" + u, "color: #006EFF");
          },
          warn: function (u) {
            console.log("%c" + u, "color: #E8910C");
          },
          error: function (u) {
            console.error("Hotjar error: " + u);
          },
          warnIfEmpty: function (u, l) {
            if (
              Array.isArray(u) ? u.length === 0 : hj.hq.isNullOrUndefined(u)
            ) {
              var f =
                u === null ? "null" : u === void 0 ? "undefined" : "no value";
              hj.log.debug(
                "WARNING: ["
                  .concat(l, "] a value was expected but ")
                  .concat(f, " was found!")
              );
            }
          },
        },
        _ = {},
        w = {},
        T = {};
      function M(u, l, f) {
        var g;
        u[l] || (u[l] = []), (g = u[l]) === null || g === void 0 || g.push(f);
      }
      _ = {
        listen: hj.tryCatch(function (u, l) {
          M(w, u, l),
            (function (f) {
              var g;
              T[f] &&
                ((g = T[f]) === null ||
                  g === void 0 ||
                  g.forEach(function (m) {
                    _.signal(f, m);
                  }),
                delete T[f]);
            })(u);
        }, "hj.event.listen"),
        removeListener: hj.tryCatch(function (u, l) {
          var f = w[u];
          if (f) {
            var g = f.indexOf(l);
            g !== -1 && f.splice(g, 1);
          }
        }, "hj.event.removeListener"),
        signal: hj.tryCatch(function (u, l, f) {
          var g;
          w[u]
            ? (g = w[u]) === null ||
              g === void 0 ||
              g.forEach(function (m) {
                m(l);
              })
            : f
            ? M(T, u, l)
            : (T[u] = [l]);
        }, "hj.event.signal"),
        clearAllListeners: hj.tryCatch(function () {
          (w = {}), (T = {});
        }, "hj.event.clearAllListeners"),
      };
      var x,
        P,
        N =
          (((P = function () {
            return x();
          }).test = x =
            function () {
              var u;
              if (!navigator) return "No User-Agent Provided";
              if (
                (u = navigator.userAgentData) !== null &&
                u !== void 0 &&
                u.mobile
              )
                return "mobile";
              var l = function (f) {
                return navigator.userAgent.match(f);
              };
              return l(
                /GoogleTV|SmartTV|Internet.TV|NetCast|NETTV|AppleTV|boxee|Kylo|Roku|DLNADOC|CE\-HTML/i
              ) || l(/Xbox|PLAYSTATION.3|Wii/i)
                ? "tv"
                : l(/iPad/i) ||
                  (l(/tablet/i) && !l(/RX-34/i)) ||
                  l(/FOLIO/i) ||
                  (l(/Linux/i) &&
                    l(/Android/i) &&
                    !l(
                      /Fennec|mobi|HTC.Magic|HTCX06HT|Nexus.One|SC-02B|fone.945|Chromebook/i
                    )) ||
                  l(/Kindle/i) ||
                  (l(/Mac.OS/i) && l(/Silk/i)) ||
                  l(
                    /GT-P10|SC-01C|SHW-M180S|SGH-T849|SCH-I800|SHW-M180L|SPH-P100|SGH-I987|zt180|HTC(.Flyer|\_Flyer)|Sprint.ATP51|ViewPad7|pandigital(sprnova|nova)|Ideos.S7|Dell.Streak.7|Advent.Vega|A101IT|A70BHT|MID7015|Next2|nook/i
                  ) ||
                  (l(/MB511/i) && l(/RUTEM/i))
                ? "tablet"
                : l(
                    /BOLT|Fennec|Iris|Maemo|Minimo|Mobi|mowser|NetFront|Novarra|Prism|RX-34|Skyfire|Tear|XV6875|XV6975|Google.Wireless.Transcoder/i
                  ) ||
                  (l(/Opera/i) &&
                    l(/Windows.NT.5/i) &&
                    l(
                      /HTC|Xda|Mini|Vario|SAMSUNG\-GT\-i8000|SAMSUNG\-SGH\-i9/i
                    ))
                ? "mobile"
                : (l(/Windows.(NT|XP|ME|9)/) && !l(/Phone/i)) ||
                  l(/Win(9|.9|NT)/i) ||
                  (l(/Macintosh|PowerPC/i) && !l(/Silk/i)) ||
                  (l(/Linux/i) && l(/X11/i)) ||
                  l(/Solaris|SunOS|BSD/i) ||
                  (l(
                    /Bot|Crawler|Spider|Yahoo|ia_archiver|Covario-IDS|findlinks|DataparkSearch|larbin|Mediapartners-Google|NG-Search|Snappy|Teoma|Jeeves|TinEye/i
                  ) &&
                    !l(/Mobile/i)) ||
                  l(/\b(CrOS|Chromebook)\b/i)
                ? "desktop"
                : "mobile";
            }),
          P);
      function W(u) {
        return (
          (W =
            typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
              ? function (l) {
                  return typeof l;
                }
              : function (l) {
                  return l &&
                    typeof Symbol == "function" &&
                    l.constructor === Symbol &&
                    l !== Symbol.prototype
                    ? "symbol"
                    : typeof l;
                }),
          W(u)
        );
      }
      var D = hj.tryCatch(function (u) {
          var l, f, g;
          for (l = u.length - 1; l > 0; l -= 1)
            (f = Math.floor(Math.random() * (l + 1))),
              (g = u[l]),
              (u[l] = u[f]),
              (u[f] = g);
          return u;
        }, "utils.shuffle"),
        L =
          (hj.tryCatch(function (u) {
            return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
              u
            );
          }, "utils.validateEmail"),
          hj.tryCatch(function () {
            return (
              hj.userDeviceType ||
                ((hj.userDeviceType = N()),
                hj.userDeviceType === "mobile" &&
                  (hj.userDeviceType = "phone")),
              hj.userDeviceType
            );
          }, "utils.deviceType")),
        it = hj.tryCatch(function () {
          var u = (function () {
              try {
                return window.self !== window.top;
              } catch {
                return !0;
              }
            })(),
            l = {
              width:
                !u && window.screen
                  ? window.screen.width
                  : document.body.clientWidth,
              height:
                !u && window.screen
                  ? window.screen.height
                  : document.body.clientHeight,
            };
          return {
            width:
              window.innerWidth ||
              document.documentElement.clientWidth ||
              l.width,
            height:
              window.innerHeight ||
              document.documentElement.clientHeight ||
              l.height,
          };
        }, "utils.getWindowSize"),
        et = function (u, l, f, g, m) {
          var b = 1;
          if (
            (m !== void 0 &&
              hj.log.debug("Retry iteration ".concat(b, " of ").concat(m)),
            u())
          )
            return l(!0);
          var U = setInterval(function () {
            return (
              b++,
              u()
                ? (clearInterval(U), l(!0))
                : b >= g
                ? (clearInterval(U), l(!1))
                : void 0
            );
          }, f);
        },
        ht = function (u, l) {
          return function (f, g) {
            hj.log.debug("[".concat(u, "] ").concat(f), l, g);
          };
        },
        Nt = function (u) {
          return u && typeof u == "string" ? u.replace(/[\W_]+/g, "-") : "";
        };
      function oe(u) {
        try {
          return decodeURIComponent(u);
        } catch {
          return u;
        }
      }
      function ae(u) {
        for (
          var l,
            f = [],
            g = new RegExp(
              "[^?&]?" +
                u.replace(/\[/, "\\[").replace(/]/, "\\]") +
                "=([^&]+)",
              "g"
            );
          (l = g.exec(location.search));

        )
          f.push(oe(l[1]));
        switch (f.length) {
          case 0:
            return "";
          case 1:
            return f[0];
          default:
            return f;
        }
      }
      var I = {},
        Y = {};
      function Q(u, l) {
        var f;
        if (!I.matchOperations[u.match_operation])
          return (
            hj.exceptions.log(
              new Error(
                'Targeting error - "'.concat(
                  u.match_operation,
                  '" match operation does not exist.'
                )
              ),
              "hj.targeting.matchPatternWithRule"
            ),
            !1
          );
        u.rule_type = u.rule_type || u.component;
        var g = (function (m, b) {
          return !b ||
            m.rule_type !== "date" ||
            (m.match_operation !== "less_than" &&
              m.match_operation !== "greater_than")
            ? b
            : (new Date(b).valueOf() / 1e3).toFixed(0);
        })(u, l);
        return (f = I.matchOperations[u.match_operation](u, g)).error
          ? (hj.exceptions.log(
              new Error(
                "Targeting error - "
                  .concat(u.match_operation, " - ")
                  .concat(f.error)
              ),
              "hj.targeting.matchPatternWithRule"
            ),
            !1)
          : (u.component !== "url" && u.negate && (f = !f),
            (function (m, b, U) {
              var V = U ? "Match " : "No Match ";
              !U ||
                (m.component !== "url" && m.component !== "device") ||
                ((V +=
                  m.component +
                  "|" +
                  m.match_operation +
                  "|" +
                  m.pattern +
                  (m.negate ? " [NEGATE]" : "")),
                hj.log.debug(V, "targeting")),
                (m.component !== "attribute" && m.component !== "event") ||
                  ((V +=
                    m.component +
                    "|" +
                    m.name +
                    " (" +
                    m.rule_type +
                    ")|" +
                    m.match_operation +
                    "|" +
                    m.pattern +
                    "|compared with: " +
                    b +
                    (m.negate ? " [NEGATE]" : "")),
                  hj.log.debug(V, "targeting"));
            })(u, l, f),
            f);
      }
      function nt(u) {
        var l,
          f = L();
        return (
          (l =
            u.length === 0 ||
            u.length === 3 ||
            u.some(function (g) {
              return Q(g, f);
            }))
            ? hj.log.debug("Device match found", "targeting")
            : hj.log.debug("No device match found", "targeting"),
          l
        );
      }
      var Pt = function (u) {
          var l, f, g;
          return u == null ||
            (l = u.toLowerCase()) === null ||
            l === void 0 ||
            (f = l.split("#")[0]) === null ||
            f === void 0 ||
            (g = f.split("?")[0]) === null ||
            g === void 0
            ? void 0
            : g
                .replace("http://www.", "")
                .replace("https://www.", "")
                .replace("http://", "")
                .replace("https://", "")
                .replace(/\/$/, "");
        },
        jt = function (u, l, f) {
          return function () {
            return u.apply(null, arguments)
              ? l.apply(null, arguments)
              : f.apply(null, arguments);
          };
        },
        Ne = function (u, l) {
          return u !== void 0 && l !== void 0 && u !== null && l !== null;
        },
        us = function (u, l) {
          return (
            !isNaN(u.pattern) && !isNaN(l) && l !== "" && typeof l != "boolean"
          );
        },
        ni = function (u, l) {
          if (!l || l.toString() === parseInt(l, 10).toString()) return !1;
          var f = new Date(l);
          return f !== "Invalid Date" && !isNaN(f);
        },
        me = function (u) {
          return jt(Ne, u, function () {
            return !1;
          });
        },
        Je = function (u) {
          return me(
            jt(us, u, function (l, f) {
              return {
                error: f
                  ? "Cannot compare non-numeric values (rule: { name: '"
                      .concat(
                        l.name,
                        `' },
                        pattern: '`
                      )
                      .concat(f, "').")
                  : void 0,
              };
            })
          );
        },
        ce = function (u) {
          return me(
            jt(ni, u, function (l, f) {
              return {
                error:
                  "Cannot compare dates. Given pattern is not a date (rule: { name: '"
                    .concat(l.name, "' }, pattern: '")
                    .concat(f, "')."),
              };
            })
          );
        };
      (I.matchUrl = function (u, l) {
        var f,
          g = !1,
          m = !1,
          b = !1;
        if (u.length === 0)
          return hj.log.debug("No URL targeting rules set", "targeting"), !1;
        for (var U = 0; U < u.length; U += 1) {
          var V, R;
          if (
            (!(g = !!(f = u[U]) && Q(f, l)) ||
              ((V = f) !== null && V !== void 0 && V.negate) ||
              (b = !0),
            g && (R = f) !== null && R !== void 0 && R.negate)
          ) {
            m = !0;
            break;
          }
        }
        return (
          (g = b && !m)
            ? hj.log.debug(
                "URL match found without any negate rules",
                "targeting"
              )
            : m
            ? hj.log.debug("Negate URL rule match found", "targeting")
            : hj.log.debug("No URL match found", "targeting"),
          g
        );
      }),
        (I.matchRules = hj.tryCatch(function (u, l, f) {
          for (
            var g,
              m,
              b,
              U,
              V,
              R = u.rules,
              B = u.userAttributeMatchLogic,
              G = {
                device: { rules: [], isMatch: null, doMatch: nt },
                url: { rules: [], isMatch: null, doMatch: I.matchUrl },
                attribute: { rules: [] },
                trigger: { rules: [] },
              },
              K = 0;
            K < R.length;
            K += 1
          ) {
            var rt = R[K];
            if (rt !== void 0) {
              var a = G[rt.component];
              a !== void 0
                ? a.rules.push(rt)
                : hj.exceptions.log(
                    new Error(
                      "Targeting error - ".concat(
                        G[rt.component],
                        " targeting component is not supported."
                      )
                    ),
                    "hj.targeting.matchRules"
                  );
            }
          }
          hj.log.debug("-- Matching rules for new item --");
          var E = function (C, k) {
            var ot;
            l !== "__proto__" &&
              l !== "constructor" &&
              (Y[l] === void 0 && (Y[l] = []),
              (ot = Y[l]) === null ||
                ot === void 0 ||
                ot.push({ eventName: C, callback: k }),
              hj.event.listen(C, k));
          };
          if (
            (Object.keys(Y).forEach(function (C) {
              var k;
              C !== l &&
                ((k = Y[C]) === null ||
                  k === void 0 ||
                  k.forEach(function (ot) {
                    hj.event.removeListener(ot.eventName, ot.callback);
                  }),
                delete Y[C]);
            }),
            (g = G.device) !== null &&
              g !== void 0 &&
              g.doMatch &&
              ((m = G.device) === null ||
                m === void 0 ||
                !m.doMatch(G.device.rules)))
          )
            return !1;
          var v = function () {
              var C;
              return (function (k, ot) {
                function tt(de) {
                  hj.log.debug(de, "targeting");
                }
                if (k === void 0 || k.length === 0)
                  return (
                    tt("No specific user attribute targeting rules set."), !0
                  );
                var Kt = function (de) {
                  return Q(de, hj.userAttributes.get(de.name));
                };
                return ot === "and" && k.every(Kt)
                  ? (tt("All user attributes matched. (AND logic)"), !0)
                  : ot === "or" && k.some(Kt)
                  ? (tt("A user attribute matched. (OR logic)"), !0)
                  : (tt("User attributes set do not match current visitor."),
                    !1);
              })(
                (C = G.attribute) === null || C === void 0 ? void 0 : C.rules,
                B != null ? B : "and"
              );
            },
            A = (b = G.trigger) === null || b === void 0 ? void 0 : b.rules;
          if (A != null && A.length) {
            hj.log.debug(
              "Setting up targeting listeners for trigger rules",
              "targeting"
            );
            var p = function () {
              v() && (f == null || f(!0));
            };
            A.forEach(function (C) {
              var k = "trigger:" + C.pattern;
              E(k, p);
            });
          }
          var O =
            G.url &&
            G.url.doMatch &&
            ((U = G.url) === null || U === void 0
              ? void 0
              : U.doMatch(G.url.rules, l));
          return ((V = G.attribute) === null || V === void 0
            ? void 0
            : V.rules.length) === 0 || v()
            ? !!O && (f == null || f(), !0)
            : (hj.log.debug(
                "Setting up targeting listeners for attribute rules",
                "targeting"
              ),
              E("user-attributes-set", function () {
                O && v() && (f == null || f(!0));
              }),
              !1);
        }, "hj.targeting.matchRules")),
        (I.matchOperations = {
          exact: function (u, l) {
            return u.rule_type === "string"
              ? me(function (f, g) {
                  return g.toLowerCase() === f.pattern.toLowerCase();
                })(u, l)
              : u.rule_type === "boolean"
              ? ((u.pattern = String(u.pattern) === "true"), l === u.pattern)
              : u.rule_type === "number"
              ? l != null && Number(l) === Number(u.pattern)
              : l === u.pattern;
          },
          starts_with: me(function (u, l) {
            return (l = l || "").indexOf(u.pattern) === 0;
          }),
          ends_with: me(function (u, l) {
            var f =
              l.length - u.pattern.length == -1
                ? 0
                : l.length - u.pattern.length;
            return l.substring(f, l.length) === u.pattern;
          }),
          contains: me(function (u, l) {
            return (l = l || "").indexOf(u.pattern) !== -1;
          }),
          regex: me(function (u, l) {
            try {
              return new RegExp(u.pattern).test(l);
            } catch {
              return (
                hj.log
                  .error(`The regular expression used for page targeting was invalid. Please provide a valid regular
                        expression.

Read more here: https://help.hotjar.com/hc/en-us/articles/115012727628`),
                !1
              );
            }
          }),
          simple: me(function (u, l) {
            return Pt(l) === Pt(u.pattern);
          }),
          greater_than: Je(function (u, l) {
            return Number(l) > Number(u.pattern);
          }),
          less_than: Je(function (u, l) {
            return Number(l) < Number(u.pattern);
          }),
          unknown: function (u, l) {
            return (
              (l = typeof l == "string" ? l.trim() : l) !== 0 && l !== !1 && !l
            );
          },
          exact_date: ce(function (u, l) {
            var f = new Date(1e3 * u.pattern);
            return new Date(l).toDateString() === f.toDateString();
          }),
          exact_days_ago: ce(function (u, l) {
            var f,
              g = new Date();
            return (
              (f = g.setDate(g.getDate() - Number(u.pattern))),
              (f = new Date(f)),
              new Date(l).toDateString() === f.toDateString()
            );
          }),
          more_than_days_ago: ce(function (u, l) {
            var f = Number(u.pattern) + 1,
              g = new Date().getTime() / 1e3;
            return (g -= 86400 * f), new Date(l).getTime() / 1e3 <= g;
          }),
          less_than_days_ago: ce(function (u, l) {
            if (Number(u.pattern) === 0)
              return I.matchOperations.exact_days_ago(u, l);
            var f = new Date().getTime() / 1e3;
            return (
              (f -= 86400 * Number(u.pattern)), new Date(l).getTime() / 1e3 >= f
            );
          }),
        });
      var le = {
        getFeatures: hj.tryCatch(function () {
          return hj.settings.features || [];
        }, "hj.features.getFeatures"),
        hasFeature: hj.tryCatch(function (u) {
          var l;
          try {
            var f = window.localStorage.getItem(
              "HJ_OVERRIDE_FEATURE:".concat(u)
            );
            l = f === "true" || f === "1";
          } catch {
            l = !1;
          }
          return le.getFeatures().indexOf(u) > -1 || l;
        }, "hj.features.hasFeature"),
      };
      function _t(u) {
        return (
          (_t =
            typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
              ? function (l) {
                  return typeof l;
                }
              : function (l) {
                  return l &&
                    typeof Symbol == "function" &&
                    l.constructor === Symbol &&
                    l !== Symbol.prototype
                    ? "symbol"
                    : typeof l;
                }),
          _t(u)
        );
      }
      var mt = function (u) {
        var l,
          f,
          g,
          m = window._hjDocument || document;
        if (((H.selector = u), H.isWindow(u)))
          return (this[0] = window), (this.length = 1), this;
        if (H.isDocument(u, m)) return (this[0] = m), (this.length = 1), this;
        if (_t(u) === "object") return (this[0] = u), (this.length = 1), this;
        if (
          typeof u == "string" &&
          u.charAt(0) === "<" &&
          u.charAt(u.length - 1) === ">" &&
          u.length >= 3
        )
          return (
            ((l = m.createElement("div")).innerHTML = u),
            (this[0] = l.childNodes[0]),
            (this.length = 1),
            this
          );
        if (typeof u == "string") {
          isNaN(u.charAt(1)) ||
            (u.charAt(0) !== "." && u.charAt(0) !== "#") ||
            (u = u.charAt(0) + "\\3" + u.charAt(1) + " " + u.slice(2));
          try {
            f = m.querySelectorAll(u);
          } catch {
            return (this.length = 0), this;
          }
          for (g = 0; g < f.length; g += 1) this[g] = f[g];
          return (this.length = f.length), this;
        }
        return this;
      };
      (mt.prototype.val = function (u) {
        return (
          u !== void 0 && this.length > 0 && (this[0].value = u),
          this[0] === void 0 ? void 0 : this[0] ? this[0].value : ""
        );
      }),
        (mt.prototype.each = function (u, l) {
          Array.prototype.forEach.call(this, function (f, g, m) {
            l(g, f, m);
          });
        }),
        (mt.prototype.hasClass = function (u) {
          return this[0].classList
            ? this[0].classList.contains(u)
            : new RegExp("(^| )" + u + "( |$)", "gi").test(this[0].className);
        }),
        (mt.prototype.remove = function () {
          var u;
          for (u = 0; u < this.length; u += 1)
            this[u].parentNode.removeChild(this[u]);
        }),
        (mt.prototype.trigger = function (u) {
          var l,
            f,
            g,
            m = u.split(" ");
          for (l = 0; l < this.length; l += 1)
            for (f = 0; f < m.length; f += 1)
              (g = document.createEvent("HTMLEvents")).initEvent(m[f], !0, !1),
                this[l].dispatchEvent(g);
        }),
        (mt.prototype.on = function (u, l, f, g) {
          var m,
            b,
            U,
            V,
            R,
            B,
            G,
            K,
            rt = u.split(" ");
          if (((g = !!g), H.isDocument(this[0]) && typeof l == "string"))
            for (b = 0; b < rt.length; b += 1)
              typeof l == "string"
                ? (typeof f == "boolean" &&
                    f === !1 &&
                    (f = function (a) {
                      return a.preventDefault(), !1;
                    }),
                  (U = l + "." + rt[b]),
                  (V = function (a) {
                    if ((R = document.querySelectorAll(l))) {
                      for (
                        B = a.target, G = -1;
                        B && (G = Array.prototype.indexOf.call(R, B)) === -1;

                      )
                        B = B.parentElement;
                      G > -1 && f.call(B, a);
                    }
                  }),
                  Array.isArray(H.eventHandlers[U]) ||
                    (H.eventHandlers[U] = []),
                  H.eventHandlers[U].push(V),
                  document.addEventListener(rt[b].split(".")[0], V, !0))
                : (typeof l == "boolean" &&
                    l === !1 &&
                    (l = function (a) {
                      return a.preventDefault(), !1;
                    }),
                  Array.isArray(H.eventHandlers.document) ||
                    (H.eventHandlers.document = []),
                  H.eventHandlers.document.push(l),
                  this[0].addEventListener(rt[b].split(".")[0], l, g));
          else if (H.isDocument(this[0]))
            for (b = 0; b < rt.length; b += 1)
              typeof l == "boolean" &&
                l === !1 &&
                (l = function (a) {
                  return a.preventDefault(), !1;
                }),
                (U = "document." + rt[b]),
                Array.isArray(H.eventHandlers[U]) || (H.eventHandlers[U] = []),
                H.eventHandlers[U].push(l),
                document.addEventListener(rt[b].split(".")[0], l, g);
          else if (H.isWindow(this[0]))
            for (b = 0; b < rt.length; b += 1)
              typeof l == "boolean" &&
                l === !1 &&
                (l = function (a) {
                  return a.preventDefault(), !1;
                }),
                (U = "window." + rt[b]),
                Array.isArray(H.eventHandlers[U]) || (H.eventHandlers[U] = []),
                H.eventHandlers[U].push(l),
                window.addEventListener(rt[b].split(".")[0], l, g);
          else
            for (m = 0; m < this.length; m += 1)
              for (b = 0; b < rt.length; b += 1)
                _t(l) === "object"
                  ? ((K = l),
                    (l = function (a) {
                      (a.data = K), f.call(this[m], a);
                    }))
                  : typeof l == "boolean" &&
                    l === !1 &&
                    (l = function (a) {
                      return a.preventDefault(), !1;
                    }),
                  (U = H.selector + "." + rt[b]),
                  Array.isArray(H.eventHandlers[U]) ||
                    (H.eventHandlers[U] = []),
                  H.eventHandlers[U].push(l),
                  this[m].addEventListener(rt[b].split(".")[0], l, g);
          return this;
        }),
        (mt.prototype.off = function (u, l, f, g) {
          var m,
            b,
            U,
            V = u.split(" ");
          for (g = !!g, m = 0; m < this.length; m += 1)
            for (b = 0; b < V.length; b += 1)
              if (H.isDocument(this[m]) && typeof l == "string")
                if (f === void 0) {
                  if (_t(H.eventHandlers[l + "." + V[b]]) === "object") {
                    for (
                      U = 0;
                      U < H.eventHandlers[l + "." + V[b]].length;
                      U += 1
                    )
                      document.removeEventListener(
                        V[b].split(".")[0],
                        H.eventHandlers[l + "." + V[b]][U],
                        !0
                      );
                    delete H.eventHandlers[l + "." + V[b]];
                  }
                } else document.removeEventListener(V[b].split(".")[0], f, g);
              else if (H.isDocument(this[m]))
                if (l === void 0) {
                  if (_t(H.eventHandlers["document." + V[b]]) === "object") {
                    for (
                      U = 0;
                      U < H.eventHandlers["document." + V[b]].length;
                      U += 1
                    )
                      document.removeEventListener(
                        V[b].split(".")[0],
                        H.eventHandlers["document." + V[b]][U],
                        g
                      );
                    delete H.eventHandlers["document." + V[b]];
                  }
                } else document.removeEventListener(V[b].split(".")[0], l, g);
              else if (H.isWindow(this[m]))
                if (l === void 0) {
                  if (_t(H.eventHandlers["window." + V[b]]) === "object") {
                    for (
                      U = 0;
                      U < H.eventHandlers["window." + V[b]].length;
                      U += 1
                    )
                      window.removeEventListener(
                        V[b].split(".")[0],
                        H.eventHandlers["window." + V[b]][U],
                        g
                      );
                    delete H.eventHandlers["window." + V[b]];
                  }
                } else window.removeEventListener(V[b].split(".")[0], l, g);
              else if (l === void 0) {
                if (_t(H.eventHandlers[H.selector + "." + V[b]]) === "object") {
                  for (
                    U = 0;
                    U < H.eventHandlers[H.selector + "." + V[b]].length;
                    U += 1
                  )
                    this[m].removeEventListener(
                      V[b].split(".")[0],
                      H.eventHandlers[H.selector + "." + V[b]][U],
                      g
                    );
                  delete H.eventHandlers[H.selector + "." + V[b]];
                }
              } else this[m].removeEventListener(V[b].split(".")[0], l, g);
          return this;
        }),
        (mt.prototype.scrollTop = function () {
          return H.isWindow(this[0]) || H.isDocument(this[0])
            ? window.document.body.scrollTop ||
                window.document.documentElement.scrollTop
            : this[0].scrollTop;
        }),
        (mt.prototype.scrollLeft = function () {
          return H.isWindow(this[0]) || H.isDocument(this[0])
            ? document.body.scrollLeft || document.documentElement.scrollLeft
            : this[0].scrollLeft;
        }),
        (mt.prototype.height = function () {
          var u;
          return H.isWindow(this[0])
            ? document.documentElement.clientHeight
            : this[0].nodeType === 9
            ? ((u = this[0].documentElement),
              Math.max(
                this[0].body.scrollHeight,
                u.scrollHeight,
                this[0].body.offsetHeight,
                u.offsetHeight,
                u.clientHeight
              ))
            : Math.max(this[0].scrollHeight, this[0].offsetHeight);
        }),
        (mt.prototype.width = function () {
          var u;
          return H.isWindow(this[0])
            ? document.documentElement.clientWidth
            : this[0].nodeType === 9
            ? ((u = this[0].documentElement),
              Math.max(
                this[0].body.scrollWidth,
                u.scrollWidth,
                this[0].body.offsetWidth,
                u.offsetWidth,
                u.clientWidth
              ))
            : Math.max(this[0].scrollWidth, this[0].offsetWidth);
        }),
        (mt.prototype.attr = function (u, l) {
          var f;
          if (l || l === "") {
            for (f = 0; f < this.length; f += 1) this[f].setAttribute(u, l);
            return this;
          }
          return this[0] &&
            _t(this[0]) === "object" &&
            this[0].getAttribute(u) !== null
            ? this[0].getAttribute(u)
            : void 0;
        }),
        (mt.prototype.is = function (u) {
          return (function (l, f) {
            var g =
              l.matchesSelector ||
              l.msMatchesSelector ||
              l.mozMatchesSelector ||
              l.webkitMatchesSelector ||
              l.oMatchesSelector;
            if (g) return g.call(l, f);
            for (
              var m = l.parentNode.querySelectorAll(f), b = m.length;
              b >= 0;
              b -= 1
            )
              if (m[b] === l) return !0;
            return !1;
          })(this[0], u);
        }),
        (mt.prototype.ready = function (u) {
          H.isDocument(this[0]) &&
            (document.readyState === "interactive" ||
            document.readyState === "complete" ||
            document.readyState === "loaded"
              ? u()
              : document.addEventListener("DOMContentLoaded", u, !1));
        }),
        (mt.prototype.parent = function () {
          var u;
          return ((u = this[0].parentNode) === null || u === void 0
            ? void 0
            : u.nodeName) === "#document-fragment"
            ? H(this[0].parentNode.host)
            : H(this[0].parentNode);
        }),
        (mt.prototype.get = function (u) {
          return this[u];
        }),
        (mt.prototype.removeAttr = function (u) {
          var l;
          for (l = 0; l < this.length; l += 1) this[l].removeAttribute(u);
          return this;
        });
      var H = function (u) {
        return new mt(u);
      };
      (H.isFunction = function (u) {
        return typeof u == "function";
      }),
        (H.isWindow = function (u) {
          return u === s.g;
        }),
        (H.isDocument = function (u, l) {
          return u === (l || document);
        }),
        (H.noop = function () {}),
        (H.stringify = function (u) {
          if (Array.prototype.toJSON === void 0) return JSON.stringify(u);
          var l = Array.prototype.toJSON;
          delete Array.prototype.toJSON;
          try {
            return JSON.stringify(u);
          } finally {
            Array.prototype.toJSON = l;
          }
        }),
        (H.stringify = function (u) {
          if (Array.prototype.toJSON === void 0) return JSON.stringify(u);
          var l = Array.prototype.toJSON;
          delete Array.prototype.toJSON;
          try {
            return JSON.stringify(u);
          } finally {
            Array.prototype.toJSON = l;
          }
        }),
        (H.each = function (u, l) {
          var f, g, m;
          if (
            _t(u) === "object" &&
            Object.prototype.toString.call(u) !== "[object Array]"
          ) {
            if ((g = u[Object.keys(u)[0]]) && g.nodeName !== void 0) {
              for (f in u)
                if (
                  Object.prototype.hasOwnProperty.call(u, f) &&
                  f !== "length" &&
                  l(f, u[f], u) === !1
                )
                  break;
            } else
              for (f in u)
                if (
                  Object.prototype.hasOwnProperty.call(u, f) &&
                  l(f, u[f], u) === !1
                )
                  break;
          } else if (u !== void 0)
            for (m = 0; m < u.length && l(m, u[m], u) !== !1; m += 1);
        }),
        (mt.prototype.append = function (u) {
          var l;
          _t(u) === "object"
            ? H.selector === "body"
              ? document.body.appendChild(u.get(0))
              : this[0].appendChild(u.get(0))
            : H.selector === "body"
            ? (((l = document.createElement("div")).innerHTML = u),
              document.body.appendChild(l))
            : (((l = document.createElement("div")).innerHTML = u),
              this[0].appendChild(l));
        }),
        (H.ajax = function (u) {
          var l = new XMLHttpRequest();
          (u.type = u.type || "GET"),
            (u.timeout_ms = u.timeout_ms || 15e3),
            u.withCredentials && (l.withCredentials = !0),
            l.open(u.type, u.url, !0),
            (l.timeout = u.timeout_ms),
            (u.type !== "POST" && u.type !== "PUT") ||
              !u.contentType ||
              l.setRequestHeader("Content-Type", u.contentType),
            (l.onload = function () {
              l.status >= 200 && l.status < 400
                ? H.isFunction(u.success) &&
                  u.success(l.responseText && JSON.parse(l.responseText), l)
                : H.isFunction(u.error) && u.error(l);
            }),
            (l.onerror = function () {
              H.isFunction(u.error) && u.error(l);
            }),
            (l.ontimeout = function () {
              H.isFunction(u.timeout) && u.timeout(l);
            }),
            H.isFunction(u.requestAnnotator) && u.requestAnnotator(l),
            (u.type !== "POST" && u.type !== "PUT") || !u.data
              ? l.send()
              : l.send(u.data);
        }),
        (H.eventHandlers = {}),
        (H.selector = ""),
        (H.trim = function (u) {
          return typeof u == "string" ? u.replace(/^\s+|\s+$/gm, "") : "";
        }),
        (H.isUndefined = function (u) {
          return u === void 0;
        }),
        (H.isNullOrUndefined = function (u) {
          return u === null || H.isUndefined(u);
        }),
        (H.inArray = function (u, l) {
          var f = l.indexOf(u);
          return f !== void 0 && f !== -1;
        }),
        (H.values = function (u) {
          return Object.keys(u).map(function (l) {
            return u[l];
          });
        });
      var Ls = {
          get: function (u, l, f) {
            (l = l || H.noop),
              (f = f || H.noop),
              H.ajax({
                url: u,
                success: hj.tryCatch(l, "Data"),
                error: hj.tryCatch(f, "Data"),
              });
          },
          post: function (u, l, f, g) {
            var m =
              arguments.length > 4 && arguments[4] !== void 0
                ? arguments[4]
                : { contentType: "json" };
            (f = f || H.noop), (g = g || H.noop);
            var b =
              m != null && m.query ? "".concat(u, "?").concat(m.query) : u;
            return H.ajax({
              url: b,
              type: "POST",
              data:
                (m == null ? void 0 : m.contentType) === "json"
                  ? H.stringify(l)
                  : l,
              contentType: "text/plain; charset=UTF-8",
              success: hj.tryCatch(f, "Data"),
              error: hj.tryCatch(g, "Data"),
            });
          },
          putAsJSON: function (u, l, f, g) {
            (f = f || H.noop),
              (g = g || H.noop),
              H.ajax({
                url: u,
                type: "PUT",
                data: H.stringify(l),
                contentType: "text/plain; charset=UTF-8",
                success: hj.tryCatch(f, "Data"),
                error: hj.tryCatch(g, "Data"),
              });
          },
          postAsJSON: function (u, l, f, g) {
            return (
              (f = f || H.noop),
              (g = g || H.noop),
              H.ajax({
                url: u,
                type: "POST",
                data: H.stringify(l),
                contentType: "application/json; charset=UTF-8",
                success: hj.tryCatch(f, "Data"),
                error: hj.tryCatch(g, "Data"),
              })
            );
          },
        },
        hs = [],
        ds = [];
      function or(u, l) {
        hj.tryCatch(l, "Rendering")(u);
      }
      function oi(u, l) {
        hj.widgetDelay.set(function () {
          hj.tryCatch(l, "Rendering")(u);
        }, 1e3 * u.display_delay);
      }
      function ar(u, l, f) {
        var g = hj.hq(document),
          m = hj.hq(window),
          b = [];
        function U() {
          hj.tryCatch(l, "Rendering")(u),
            g.off("mousemove." + f),
            g.off("mouseout." + f);
        }
        hs.push(f),
          g.off("mousemove." + f),
          g.off("mouseout." + f),
          g.on(
            "mousemove." + f,
            hj.tryCatch(function (V) {
              var R, B, G, K;
              b.push({ x: V.clientX, y: V.clientY }),
                b.length > 2 &&
                  (((R = b[1]) === null || R === void 0 ? void 0 : R.x) ===
                    ((B = b[2]) === null || B === void 0 ? void 0 : B.x) &&
                  ((G = b[1]) === null || G === void 0 ? void 0 : G.y) ===
                    ((K = b[2]) === null || K === void 0 ? void 0 : K.y)
                    ? b.pop()
                    : b.shift());
            }, "Rendering")
          ),
          g.on(
            "mouseout." + f,
            hj.tryCatch(function (V) {
              var R = this;
              (V.relatedTarget &&
                (!R ||
                  V.relatedTarget === R ||
                  R.compareDocumentPosition(V.relatedTarget) &
                    Node.DOCUMENT_POSITION_CONTAINED_BY)) ||
                (function (B) {
                  var G = b[1],
                    K = b[0];
                  if (
                    ((B |= 0), G !== void 0 && !((K && G.y >= K.y) || B > 0))
                  ) {
                    if (K && K.x === G.x) U();
                    else if (K) {
                      var rt = K.y - G.y / K.x - G.x,
                        a = -(K.y - rt * K.x) / rt;
                      a > 0 && a < m.width() && U();
                    }
                  }
                })(V.clientY);
            }, "Rendering")
          );
      }
      function so(u, l, f) {
        var g = hj.hq(document),
          m = hj.hq(window);
        ds.push(f),
          m.off("scroll." + f),
          m.on(
            "scroll." + f,
            hj.tryCatch(function () {
              var b = g.height();
              (g.scrollTop() + it().height) / b >= 0.5 &&
                (m.off("scroll." + f), l(u));
            }, "Rendering")
          );
      }
      var Vs = {
          clearAllAbandonEvents: hj.tryCatch(function () {
            hs.forEach(function (u) {
              hj.log.debug("Removing abandon events for " + u, "rendering"),
                hj.hq(document).off("mousemove." + u),
                hj.hq(document).off("mouseout." + u);
            }),
              (hs = []);
          }, "hj.rendering.clearAllAbandonEvents"),
          clearAllScrollEvents: hj.tryCatch(function () {
            ds.forEach(function (u) {
              hj.log.debug("Removing scroll events for " + u, "rendering"),
                hj.hq(window).off("scroll." + u);
            }),
              (ds = []);
          }, "hj.rendering.clearAllScrollEvents"),
          callAccordingToCondition: hj.tryCatch(function (u, l, f) {
            var g = { immediate: or, delay: oi, abandon: ar, scroll: so }[
              u.display_type === "inline" ? "immediate" : u.display_condition
            ];
            if (
              (hj.log.debug(
                "Calling active item (" + l + "): " + u.display_condition,
                "rendering"
              ),
              !g)
            )
              throw new Error(
                'Unhandled display condition: "' + u.display_condition + '"'
              );
            hj.tryCatch(g, "Rendering")(u, f, l);
          }, "hj.rendering.callAccordingToCondition"),
        },
        we = function (u, l) {
          return (u + l) & 4294967295;
        };
      function Ni(u, l) {
        var f = Bt(
            (f = u[0]),
            (b = u[1]),
            (m = u[2]),
            (g = u[3]),
            l[0],
            7,
            -680876936
          ),
          g = Bt(g, f, b, m, l[1], 12, -389564586),
          m = Bt(m, g, f, b, l[2], 17, 606105819),
          b = Bt(b, m, g, f, l[3], 22, -1044525330);
        (f = Bt(f, b, m, g, l[4], 7, -176418897)),
          (g = Bt(g, f, b, m, l[5], 12, 1200080426)),
          (m = Bt(m, g, f, b, l[6], 17, -1473231341)),
          (b = Bt(b, m, g, f, l[7], 22, -45705983)),
          (f = Bt(f, b, m, g, l[8], 7, 1770035416)),
          (g = Bt(g, f, b, m, l[9], 12, -1958414417)),
          (m = Bt(m, g, f, b, l[10], 17, -42063)),
          (b = Bt(b, m, g, f, l[11], 22, -1990404162)),
          (f = Bt(f, b, m, g, l[12], 7, 1804603682)),
          (g = Bt(g, f, b, m, l[13], 12, -40341101)),
          (m = Bt(m, g, f, b, l[14], 17, -1502002290)),
          (f = $t(
            f,
            (b = Bt(b, m, g, f, l[15], 22, 1236535329)),
            m,
            g,
            l[1],
            5,
            -165796510
          )),
          (g = $t(g, f, b, m, l[6], 9, -1069501632)),
          (m = $t(m, g, f, b, l[11], 14, 643717713)),
          (b = $t(b, m, g, f, l[0], 20, -373897302)),
          (f = $t(f, b, m, g, l[5], 5, -701558691)),
          (g = $t(g, f, b, m, l[10], 9, 38016083)),
          (m = $t(m, g, f, b, l[15], 14, -660478335)),
          (b = $t(b, m, g, f, l[4], 20, -405537848)),
          (f = $t(f, b, m, g, l[9], 5, 568446438)),
          (g = $t(g, f, b, m, l[14], 9, -1019803690)),
          (m = $t(m, g, f, b, l[3], 14, -187363961)),
          (b = $t(b, m, g, f, l[8], 20, 1163531501)),
          (f = $t(f, b, m, g, l[13], 5, -1444681467)),
          (g = $t(g, f, b, m, l[2], 9, -51403784)),
          (m = $t(m, g, f, b, l[7], 14, 1735328473)),
          (f = Yt(
            f,
            (b = $t(b, m, g, f, l[12], 20, -1926607734)),
            m,
            g,
            l[5],
            4,
            -378558
          )),
          (g = Yt(g, f, b, m, l[8], 11, -2022574463)),
          (m = Yt(m, g, f, b, l[11], 16, 1839030562)),
          (b = Yt(b, m, g, f, l[14], 23, -35309556)),
          (f = Yt(f, b, m, g, l[1], 4, -1530992060)),
          (g = Yt(g, f, b, m, l[4], 11, 1272893353)),
          (m = Yt(m, g, f, b, l[7], 16, -155497632)),
          (b = Yt(b, m, g, f, l[10], 23, -1094730640)),
          (f = Yt(f, b, m, g, l[13], 4, 681279174)),
          (g = Yt(g, f, b, m, l[0], 11, -358537222)),
          (m = Yt(m, g, f, b, l[3], 16, -722521979)),
          (b = Yt(b, m, g, f, l[6], 23, 76029189)),
          (f = Yt(f, b, m, g, l[9], 4, -640364487)),
          (g = Yt(g, f, b, m, l[12], 11, -421815835)),
          (m = Yt(m, g, f, b, l[15], 16, 530742520)),
          (f = Xt(
            f,
            (b = Yt(b, m, g, f, l[2], 23, -995338651)),
            m,
            g,
            l[0],
            6,
            -198630844
          )),
          (g = Xt(g, f, b, m, l[7], 10, 1126891415)),
          (m = Xt(m, g, f, b, l[14], 15, -1416354905)),
          (b = Xt(b, m, g, f, l[5], 21, -57434055)),
          (f = Xt(f, b, m, g, l[12], 6, 1700485571)),
          (g = Xt(g, f, b, m, l[3], 10, -1894986606)),
          (m = Xt(m, g, f, b, l[10], 15, -1051523)),
          (b = Xt(b, m, g, f, l[1], 21, -2054922799)),
          (f = Xt(f, b, m, g, l[8], 6, 1873313359)),
          (g = Xt(g, f, b, m, l[15], 10, -30611744)),
          (m = Xt(m, g, f, b, l[6], 15, -1560198380)),
          (b = Xt(b, m, g, f, l[13], 21, 1309151649)),
          (f = Xt(f, b, m, g, l[4], 6, -145523070)),
          (g = Xt(g, f, b, m, l[11], 10, -1120210379)),
          (m = Xt(m, g, f, b, l[2], 15, 718787259)),
          (b = Xt(b, m, g, f, l[9], 21, -343485551)),
          (u[0] = we(f, u[0])),
          (u[1] = we(b, u[1])),
          (u[2] = we(m, u[2])),
          (u[3] = we(g, u[3]));
      }
      function Us(u, l, f, g, m, b) {
        return (l = we(we(l, u), we(g, b))), we((l << m) | (l >>> (32 - m)), f);
      }
      function Bt(u, l, f, g, m, b, U) {
        return Us((l & f) | (~l & g), u, l, m, b, U);
      }
      function $t(u, l, f, g, m, b, U) {
        return Us((l & g) | (f & ~g), u, l, m, b, U);
      }
      function Yt(u, l, f, g, m, b, U) {
        return Us(l ^ f ^ g, u, l, m, b, U);
      }
      function Xt(u, l, f, g, m, b, U) {
        return Us(f ^ (l | ~g), u, l, m, b, U);
      }
      function io(u) {
        var l,
          f = [];
        for (l = 0; 64 > l; l += 4)
          f[l >> 2] =
            u.charCodeAt(l) +
            (u.charCodeAt(l + 1) << 8) +
            (u.charCodeAt(l + 2) << 16) +
            (u.charCodeAt(l + 3) << 24);
        return f;
      }
      var cr = "0123456789abcdef".split("");
      function ro(u) {
        for (var l = "", f = 0; 4 > f; f++)
          l += cr[(u >> (8 * f + 4)) & 15] + cr[(u >> (8 * f)) & 15];
        return l;
      }
      var lr = function (u, l) {
        var f = "";
        try {
          f = (function (g) {
            for (var m = 0; m < g.length; m++) g[m] = ro(g[m]);
            return g.join("");
          })(
            (function (g) {
              var m,
                b = g.length,
                U = [1732584193, -271733879, -1732584194, 271733878];
              for (m = 64; m <= g.length; m += 64)
                Ni(U, io(g.substring(m - 64, m)));
              g = g.substring(m - 64);
              var V = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
              for (m = 0; m < g.length; m++)
                V[m >> 2] |= g.charCodeAt(m) << (m % 4 << 3);
              if (((V[m >> 2] |= 128 << (m % 4 << 3)), 55 < m))
                for (Ni(U, V), m = 0; 16 > m; m++) V[m] = 0;
              return (V[14] = 8 * b), Ni(U, V), U;
            })(e(u))
          );
        } catch (g) {
          l ? (f = "") : hj.exceptions.log(g, "md5");
        }
        return f;
      };
      lr("hello") != "5d41402abc4b2a76b9719d911017c592" &&
        (we = function (u, l) {
          var f = (65535 & u) + (65535 & l);
          return (((u >> 16) + (l >> 16) + (f >> 16)) << 16) | (65535 & f);
        });
      var St = {
          id: void 0,
          attributes: {},
          init: hj.tryCatch(function () {
            if (hj.settings.user_attributes_enabled) {
              var u = (function () {
                var l =
                  hj.bridge.storage.items.HAS_CACHED_USER_ATTRIBUTES.get() ===
                  "true"
                    ? hj.bridge.storage.localStorage.USER_ATTRIBUTES.get()
                    : void 0;
                if (l)
                  try {
                    var f = (function (g) {
                      try {
                        var m = JSON.parse(g);
                        if (m && W(m) === "object") return !0;
                      } catch {}
                      return !1;
                    })(l)
                      ? l
                      : hj.b64DecodeUnicode(l);
                    return JSON.parse(f);
                  } catch {
                    return;
                  }
              })();
              u &&
                ((St.id = u.userId),
                (St.attributes = u.attributes),
                delete St.attributes.contentsquare_replay_link);
            }
          }, "userAttributes.init"),
          reset: hj.tryCatch(function () {
            (St.id = void 0),
              (St.attributes = {}),
              hj.bridge.storage.items.HAS_CACHED_USER_ATTRIBUTES.clear(),
              hj.bridge.storage.localStorage.USER_ATTRIBUTES.clear();
          }, "userAttributes.reset"),
          set: hj.tryCatch(function (u, l) {
            var f, g, m, b, U;
            l &&
              l.contentsquare_replay_link &&
              (hj.log.debug(
                "Storing contentsquare_replay_link user attribute: ".concat(
                  l.contentsquare_replay_link
                ),
                "userAttributes"
              ),
              (St.attributes.contentsquare_replay_link =
                l.contentsquare_replay_link)),
              hj.settings.user_attributes_enabled
                ? (St.id !== void 0 &&
                    St.id !== null &&
                    St.id !== u &&
                    (hj.log.debug(
                      "User ID changed, resetting all attributes before continuing.",
                      "userAttributes"
                    ),
                    St.reset()),
                  (St.id = u),
                  (St.attributes =
                    ((f = St.attributes),
                    (g = {}),
                    (m = {}),
                    [f, l].forEach(function (V) {
                      if (V)
                        for (var R in V)
                          Object.prototype.hasOwnProperty.call(V, R) &&
                            R !== "length" &&
                            (g[R] = V[R]);
                    }),
                    Object.keys(g)
                      .sort()
                      .forEach(function (V) {
                        m[V] = g[V];
                      }),
                    m)),
                  (b = { attributes: St.attributes, userId: St.id }),
                  (U = hj.b64EncodeUnicode(JSON.stringify(b))),
                  hj.bridge.storage.localStorage.USER_ATTRIBUTES.set(U),
                  hj.bridge.storage.items.HAS_CACHED_USER_ATTRIBUTES.set(
                    "true",
                    !0
                  ),
                  hj.event.signal("user-attributes-set"),
                  hj.bridge.isRecordingEnabled()
                    ? St.flush()
                    : hj.log.debug(
                        "No recording in progress. Not sending.",
                        "userAttributes"
                      ))
                : hj.log.debug(
                    "User attributes not enabled. Doing nothing.",
                    "userAttributes"
                  );
          }, "userAttributes.set"),
          flush: hj.tryCatch(function () {
            var u =
              arguments.length > 0 && arguments[0] !== void 0
                ? arguments[0]
                : hj.hq.noop;
            if (St.id !== void 0 || Object.keys(St.attributes).length) {
              var l = hj.bridge.storage.items.USER_ATTRIBUTES_HASH.get({
                  resetExpiry: !0,
                }),
                f = hj.md5(
                  JSON.stringify({
                    allAttributes: St.attributes,
                    userId: St.id,
                  })
                );
              if (l === f)
                return (
                  u(null, St.id, St.attributes),
                  void hj.log.debug(
                    "No changed user attributes. Not sending.",
                    "userAttributes"
                  )
                );
              hj.bridge.storage.items.USER_ATTRIBUTES_HASH.set(f),
                hj.debug.isOn() &&
                  (function (g, m) {
                    hj.ajax.post(
                      ""
                        .concat(hj.identifyEndpoint, "/sites/")
                        .concat(hj.settings.site_id, "/users/")
                        .concat(hj.bridge.getSessionUserId(!0), "/validate"),
                      { user_id: g, attributes: m },
                      hj.tryCatch(function (b) {
                        b.errors && Object.keys(b.errors).length > 0
                          ? hj.log.debug(
                              "User validation API call PARTIALLY successful (some errors).",
                              "userAttributes",
                              b
                            )
                          : hj.log.debug(
                              "User validation API call successful.",
                              "userAttributes",
                              b
                            );
                      }, "userAttributes"),
                      hj.tryCatch(function (b) {
                        hj.log.debug(
                          "User Attributes validation API call failed.",
                          "userAttributes",
                          (b.responseText && JSON.parse(b.responseText)) ||
                            "unknown_failure"
                        );
                      }, "userAttributes")
                    );
                  })(St.id, St.attributes),
                hj.bridge.flushUserAttributes(St.id, St.attributes),
                u(null, St.id, St.attributes);
            } else u(Error("no_user"));
          }, "userAttributes.flush"),
          get: hj.tryCatch(function (u) {
            return u === "user_id" ? St.id : u && St.attributes[u];
          }, "userAttributes.get"),
        },
        ai = {},
        Mi = { "user.id": void 0 },
        no = {
          get: function (u) {
            return Mi[u];
          },
          set: function (u, l) {
            Mi[u] = l;
            var f = ai[u];
            typeof f == "function" && l && (f(l), delete ai[u]);
          },
          on: function (u, l) {
            ai[u] = l;
            var f = Mi[u];
            f && (l(f), delete ai[u]);
          },
          reset: function () {
            (ai = {}), (Mi = { "user.id": void 0 });
          },
        },
        Xr = hj.tryCatch(function () {
          var u = (function () {
              try {
                return window.self !== window.top;
              } catch {
                return !0;
              }
            })(),
            l = {
              width:
                !u && window.screen
                  ? window.screen.width
                  : document.body.clientWidth,
              height:
                !u && window.screen
                  ? window.screen.height
                  : document.body.clientHeight,
            };
          return {
            width:
              window.innerWidth ||
              document.documentElement.clientWidth ||
              l.width,
            height:
              window.innerHeight ||
              document.documentElement.clientHeight ||
              l.height,
          };
        }, "common"),
        oo = hj.tryCatch(function () {
          var u, l;
          if (
            document &&
            document.documentElement &&
            document.documentElement.clientWidth
          )
            (u = document.documentElement.clientWidth),
              (l = document.documentElement.clientHeight);
          else {
            var f = Xr();
            (u = f.width), (l = f.height);
          }
          return { width: u, height: l };
        }, "common"),
        ao = hj.tryCatch(function (u) {
          return (
            (u = u || window),
            { left: hj.hq(u).scrollLeft(), top: hj.hq(u).scrollTop() }
          );
        }, "common"),
        co = hj.tryCatch(function () {
          var u = parseInt(
            (1e3 * (hj.hq(window).scrollTop() + hj.ui.getWindowSize().height)) /
              hj.hq(document).height(),
            10
          );
          return Math.min(1e3, u);
        }, "common"),
        lo = hj.tryCatch(function (u) {
          var l = hj.ui.getScrollPosition();
          hj.hq(document).on(
            "scroll.hotjarDisable resize.hotjarDisable mousewheel.hotjarDisable DOMMouseScroll.hotjarDisable touchmove.hotjarDisable",
            hj.tryCatch(function (f) {
              f.preventDefault(), window.scrollTo(l.left, l.top), u && u();
            }, "common")
          );
        }, "common"),
        $c = hj.tryCatch(function () {
          hj.hq(document).off("scroll.hotjarDisable"),
            hj.hq(document).off("resize.hotjarDisable"),
            hj.hq(document).off("mousewheel.hotjarDisable"),
            hj.hq(document).off("DOMMouseScroll.hotjarDisable"),
            hj.hq(document).off("touchmove.hotjarDisable");
        }, "common"),
        Kr = {
          getWindowSize: Xr,
          getDocumentSize: oo,
          getScrollPosition: ao,
          getBottomAsPercentage: co,
          disableScrolling: lo,
          enableScrolling: $c,
        },
        uo = function () {
          var u = (
            arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
          ).uuid;
          (hj.debug = o),
            (hj.log = y),
            (hj.hq = H),
            (hj.ajax = Ls),
            (hj.uuid = u || window.hj.uuid),
            (hj.encodeAsUtf8 = e),
            (hj.b64EncodeUnicode = i),
            (hj.b64DecodeUnicode = n),
            (hj.md5 = lr),
            (hj.event = _),
            (hj.userAttributes = St),
            (hj.targeting = I),
            (hj.features = le),
            (hj.rendering = Vs),
            (hj.ui = Kr),
            (hj.store = { session: no });
        },
        ho = hj.tryCatch(function () {
          var u = ae("hjDebug");
          u && (u === "1" || u === "true" ? hj.debug.on(!0) : hj.debug.off());
        }, "init"),
        Jr = {
          storage: {},
          set: hj.tryCatch(function (u) {
            Jr.storage.events = u;
          }, "sessionEvents.set"),
          get: hj.tryCatch(function () {
            return Jr.storage.events;
          }, "sessionEvents.get"),
        };
      function Me(u) {
        return (
          (Me =
            typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
              ? function (l) {
                  return typeof l;
                }
              : function (l) {
                  return l &&
                    typeof Symbol == "function" &&
                    l.constructor === Symbol &&
                    l !== Symbol.prototype
                    ? "symbol"
                    : typeof l;
                }),
          Me(u)
        );
      }
      function fs() {
        return (
          (fs = Object.assign
            ? Object.assign.bind()
            : function (u) {
                for (var l = 1; l < arguments.length; l++) {
                  var f = arguments[l];
                  for (var g in f)
                    Object.prototype.hasOwnProperty.call(f, g) && (u[g] = f[g]);
                }
                return u;
              }),
          fs.apply(this, arguments)
        );
      }
      function Qr(u, l) {
        return (
          (function (f) {
            if (Array.isArray(f)) return f;
          })(u) ||
          (function (f, g) {
            var m =
              f == null
                ? null
                : (typeof Symbol != "undefined" && f[Symbol.iterator]) ||
                  f["@@iterator"];
            if (m != null) {
              var b,
                U,
                V,
                R,
                B = [],
                G = !0,
                K = !1;
              try {
                if (((V = (m = m.call(f)).next), g === 0)) {
                  if (Object(m) !== m) return;
                  G = !1;
                } else
                  for (
                    ;
                    !(G = (b = V.call(m)).done) &&
                    (B.push(b.value), B.length !== g);
                    G = !0
                  );
              } catch (rt) {
                (K = !0), (U = rt);
              } finally {
                try {
                  if (
                    !G &&
                    m.return != null &&
                    ((R = m.return()), Object(R) !== R)
                  )
                    return;
                } finally {
                  if (K) throw U;
                }
              }
              return B;
            }
          })(u, l) ||
          (function (f, g) {
            if (f) {
              if (typeof f == "string") return ur(f, g);
              var m = Object.prototype.toString.call(f).slice(8, -1);
              return (
                m === "Object" && f.constructor && (m = f.constructor.name),
                m === "Map" || m === "Set"
                  ? Array.from(f)
                  : m === "Arguments" ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(m)
                  ? ur(f, g)
                  : void 0
              );
            }
          })(u, l) ||
          (function () {
            throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
          })()
        );
      }
      function ur(u, l) {
        (l == null || l > u.length) && (l = u.length);
        for (var f = 0, g = new Array(l); f < l; f++) g[f] = u[f];
        return g;
      }
      var hr,
        ps,
        ue,
        Zr = {
          getAsNumber: function () {
            var u = hj.bridge.getSessionUserId(!0);
            return (
              (parseInt((u == null ? void 0 : u.slice(-10)) || "", 16) + 1) /
              Math.pow(2, 40)
            );
          },
          compareRatio: hj.tryCatch(function (u, l) {
            return Zr.getAsNumber() * (l ? 100 : 1) <= u;
          }, "identifier.compareRatio"),
        },
        gs = [
          "af",
          "ar",
          "bg",
          "ca",
          "cs",
          "cy",
          "da",
          "de",
          "el",
          "en",
          "es",
          "et",
          "fa",
          "fi",
          "fr",
          "he",
          "hr",
          "hu",
          "id",
          "it",
          "ja",
          "ko",
          "lt",
          "lv",
          "mis",
          "nb",
          "nl",
          "pl",
          "pt_BR",
          "pt",
          "ro",
          "ru",
          "sk",
          "sl",
          "sq",
          "sr",
          "sv",
          "sw",
          "th",
          "tl",
          "tr",
          "uk",
          "vi",
          "zh_CN",
          "zh_TW",
        ],
        Hs = Object.freeze({
          POPOVER: "popover",
          FULL_SCREEN: "full_screen",
          EXTERNAL: "external_link",
          BUTTON: "button",
          INLINE_EMBEDDED: "inline",
          BUBBLE: "bubble",
          MOBILE_POPOVER: "mobile_popover",
        }),
        tn = hj.tryCatch(function () {
          (hj.widget = (function () {
            var u,
              l = {},
              f = ["ar", "fa", "he"],
              g = [],
              m = [],
              b = [],
              U = [],
              V = !1;
            return (
              (l.ctrl = void 0),
              (l.data = void 0),
              (l.model = {}),
              (l.activeLanguageDirection = "ltr"),
              (l.widgetAttributePrefix = "_hj-f5b2a1eb-9b07"),
              (l.getCtaLinks = function () {
                return {
                  polls:
                    "https://www.hotjar.com/feedback-surveys?utm_source=client&utm_medium=poll&utm_campaign=insights",
                  surveys:
                    "https://www.hotjar.com/?utm_source=client&utm_medium=survey&utm_campaign=insights",
                };
              }),
              (l.getActiveLanguage = function () {
                var R;
                return (R = u) !== null && R !== void 0 ? R : "en";
              }),
              (l.addMatchingWidget = function (R, B, G, K, rt, a, E, v) {
                var A = E === Hs.INLINE_EMBEDDED;
                if (K === void 0 || hj.isPreview || Zr.compareRatio(K, !0)) {
                  var p = {
                    type: R,
                    id: B,
                    created: G,
                    runCallback: rt,
                    removeCallback: a,
                    isInlineEmbedded: A,
                    targetingRules: v,
                    displayType: E,
                  };
                  V
                    ? l.setActiveWidget(p)
                    : ((A ? m : g).push(p), A && U.push(p));
                } else
                  hj.log.debug(
                    "Session identifier not in targeting percentage. Widget will not match.",
                    "targeting"
                  );
              }),
              (l.clearWidget = hj.tryCatch(function () {
                var R = "#_hj_poll_container,._hj-widget-container";
                hj.hq(R).length > 0 &&
                  (hj.log.debug(
                    "Removing previously shown widget from DOM",
                    "widgets"
                  ),
                  hj.hq(R).remove());
              }, "widgets")),
              (l.emptyMatchingWidgets = function () {
                (g = []),
                  (m = []),
                  b.forEach(function (R) {
                    R();
                  }),
                  (b = []),
                  (V = !1);
              }),
              (l.isPhoneOrTablet = hj.tryCatch(function () {
                return (
                  hj.widget.isVeryNarrowScreen() ||
                  L() === "phone" ||
                  L() === "tablet"
                );
              }, "common")),
              (l.isVeryNarrowScreen = hj.tryCatch(function () {
                return hj.hq(window).width() <= 450;
              }, "common")),
              (l.removeActiveWidget = function (R) {
                hj.widgetDelay.clear(),
                  Vs.clearAllAbandonEvents(),
                  Vs.clearAllScrollEvents(),
                  (R = R || function () {}),
                  l.activeWidget
                    ? (l.activeWidget.removeCallback &&
                        l.activeWidget.removeCallback(R),
                      delete l.activeWidget)
                    : R();
              }),
              (l.runLatestMatchingWidget = function () {
                var R, B;
                g.forEach(function (G) {
                  var K = (function (rt) {
                    return rt.type === "incoming" ||
                      rt.displayType === "button" ||
                      rt.displayType === "bubble"
                      ? 0
                      : 1;
                  })(G);
                  (!R || K > B || (K === B && G.created > R.created)) &&
                    ((R = G), (B = K));
                }),
                  R ? l.setActiveWidget(R) : l.removeActiveWidget(),
                  (V = !0);
              }),
              (l.runInlineEmbeddedWidgets = function () {
                (U = U.filter(function (R) {
                  var B = hj.targeting.matchUrl(
                    R.targetingRules,
                    location.href
                  );
                  return B || R.removeCallback(), B;
                })),
                  m.forEach(function (R) {
                    R.runCallback();
                  });
              }),
              (l.setActiveWidget = function (R) {
                (l.activeWidget &&
                  R.type === l.activeWidget.type &&
                  R.id === l.activeWidget.id) ||
                  l.removeActiveWidget(function () {
                    R.runCallback(), (l.activeWidget = R);
                  });
              }),
              (l.setLanguage = hj.tryCatch(function (R) {
                var B = (R || "en").replace("-", "_");
                if (!gs.includes(B))
                  throw new Error('Invalid language "' + R + '"');
                (u = B),
                  (hj.widget.activeLanguageDirection =
                    f.indexOf(B) > -1 ? "rtl" : "ltr"),
                  (hj.widget.isActiveLanguageDirectionRtl =
                    hj.widget.activeLanguageDirection === "rtl");
              }, "common")),
              (l.registerCleanupForInlineWidget = function (R) {
                b.push(R);
              }),
              l
            );
          })()),
            (hj.widgetDelay = (function () {
              var u = {},
                l = null;
              return (
                (u.clear = hj.tryCatch(function () {
                  clearTimeout(l), (l = null);
                }, "hj.widgetDelay.clear")),
                (u.set = hj.tryCatch(function (f, g) {
                  u.clear(), (l = setTimeout(f, g));
                }, "hj.widgetDelay.set")),
                u
              );
            })());
        }, "widgets"),
        yt = Object.freeze({
          LIVE: "LIVE",
          REVIEW_WEBAPP: "REVIEW_WEBAPP",
          REVIEW: "REVIEW",
          STAGING: "STAGING",
          DEV: "DEV",
          DEV_OLD: "DEV_OLD",
        }),
        ci =
          (hr = (ue = document.location.host.match(
            /^(insights-webapp|surveys-webapp|insights|surveys)-(.*?)((?:\.[^.]+)?(?:\.hotjarians\.net)|(?:\.[^.]+)?(?:\.eks\.hotjar\.com))$/
          )) && {
            component: ue[1],
            reviewId: ue[2],
            domain: ue[3],
            reviewUrlSuffix: ue[2] + ue[3],
          }) === null || hr === void 0
            ? void 0
            : hr.reviewUrlSuffix,
        Ft = Object.freeze(
          (((ps = {})[yt.LIVE] = {
            INSIGHTS: "insights.hotjar.com",
            SURVEYS: "surveys.hotjar.com",
          }),
          (ps[yt.REVIEW] = {
            INSIGHTS: "insights-".concat(ci),
            SURVEYS: "surveys-".concat(ci),
          }),
          (ps[yt.REVIEW_WEBAPP] = {
            INSIGHTS: "insights-webapp-".concat(ci),
            SURVEYS: "surveys-webapp-".concat(ci),
          }),
          (ps[yt.STAGING] = {
            INSIGHTS: "insights-staging.hotjar.com",
            SURVEYS: "surveys-staging.hotjar.com",
          }),
          (ps[yt.DEV] = {
            INSIGHTS: "local.hotjar.com:8443",
            SURVEYS: "surveys.local.hotjar.com:8443",
          }),
          (ps[yt.DEV_OLD] = {
            INSIGHTS: "local.hotjar.com",
            SURVEYS: "surveys.local.hotjar.com",
          }),
          ps)
        ),
        ms = function (u) {
          return function (l, f) {
            return l === Ft[u][f];
          };
        },
        ye = ms(yt.DEV),
        fo = ms(yt.DEV_OLD),
        dr = ms(yt.LIVE),
        po = ms(yt.REVIEW_WEBAPP),
        go = ms(yt.REVIEW),
        Di = ms(yt.STAGING),
        en = function () {
          var u =
              arguments.length > 0 && arguments[0] !== void 0
                ? arguments[0]
                : document.location.href,
            l = [
              Ft[yt.LIVE].SURVEYS,
              Ft[yt.REVIEW_WEBAPP].SURVEYS,
              Ft[yt.REVIEW].SURVEYS,
              Ft[yt.STAGING].SURVEYS,
              Ft[yt.DEV].SURVEYS,
              Ft[yt.DEV_OLD].SURVEYS,
            ],
            f = document.createElement("a");
          return (f.href = u), l.indexOf(f.hostname) >= 0;
        },
        sn = {
          popover: { isExternal: !1, allowsScreenshots: !0 },
          full_screen: { isExternal: !1, allowsScreenshots: !0 },
          inline: { isExternal: !1, allowsScreenshots: !0 },
          button: { isExternal: !1, allowsScreenshots: !0 },
          bubble: { isExternal: !1, allowsScreenshots: !0 },
          external_link: { isExternal: !0, allowsScreenshots: !1 },
          mobile_popover: { isExternal: !0, allowsScreenshots: !1 },
        },
        rn = function (u) {
          return sn[u].isExternal;
        },
        mo =
          (Object.freeze({
            LAST_RECORDING_ACTIVITY_STORE_DEBOUNCE: 5e3,
            MAX_TIME_SINCE_LAST_RECORDING_ACTIVITY_IN_SESSION: 12e4,
          }),
          window.hjLazyModules,
          "js"),
        ys =
          (Object.freeze({ id: null, selector_version: 2 }),
          function (u) {
            var l =
                arguments.length > 1 && arguments[1] !== void 0
                  ? arguments[1]
                  : Eo,
              f =
                arguments.length > 2 && arguments[2] !== void 0
                  ? arguments[2]
                  : So,
              g = 0,
              m = !1;
            function b() {
              --g != 0 || m || l.bind(this)();
            }
            function U() {
              (m = !0), f.bind(this)();
            }
            Object.keys(u).forEach(function (V) {
              var R = u[V];
              typeof R == "string" && (R = [R]),
                (g += R.length),
                R.forEach(function (B) {
                  yo(B, V, b, U);
                });
            });
          }),
        yo = function (u, l, f, g) {
          var m;
          l === mo
            ? ((m = document.createElement("script")).src = ""
                .concat(hj.scriptDomain)
                .concat(u))
            : l === "css" &&
              (((m = document.createElement("link")).href = ""
                .concat(hj.scriptDomain)
                .concat(u)),
              (m.rel = "stylesheet")),
            (m.onload = f),
            (m.onerror = g),
            document.getElementsByTagName("head")[0].appendChild(m);
        };
      function Eo() {}
      function So() {
        var u = this.src || this.href;
        hj.exceptions.log(
          new Error("Failed to load module: ".concat(u, ".")),
          "loader"
        );
      }
      var vo = function (u, l) {
        var f, g;
        if (hj.isPreview) return !1;
        var m =
            ((f = u.targeting) === null || f === void 0
              ? void 0
              : f.filter(function (R) {
                  return R.component === "url";
                })) || [],
          b =
            (g = u.targeting) === null || g === void 0
              ? void 0
              : g.some(function (R) {
                  return R.component === "trigger";
                }),
          U =
            u.display_type === Hs.EXTERNAL ||
            u.display_type === Hs.MOBILE_POPOVER,
          V = b || U || hj.targeting.matchUrl(m, hj.currentUrl) === !0;
        return (
          hj.tryCatch(function () {
            if (!V)
              throw new Error(
                "Rendered survey out of URL targeting in "
                  .concat(l, " with ID: ")
                  .concat(u.id)
              );
          }, "render-out-of-targeting")(),
          !V
        );
      };
      function _o(u, l) {
        for (var f = u.querySelectorAll(l), g = 0; g < f.length; g++) {
          var m = f[g];
          m && m.parentElement && m.parentElement.removeChild(m);
        }
      }
      var fr = hj.tryCatch(function () {
          (hj.surveyImpressionsMoved = !0),
            (hj.polls = (function () {
              var u,
                l = {},
                f = window.hjLazyModules,
                g = hj.tryCatch(function (R, B) {
                  vo(R, "doRenderSurvey") || hj.widget.renderSurvey(R, B);
                }, "polls");
              function m() {
                return f.SURVEY_V2;
              }
              var b = hj.tryCatch(function (R, B) {
                  if (!vo(R, "renderWidget")) {
                    (hj.widget.pollsData = hj.widget.pollsData || {}),
                      (hj.widget.pollsData[R.id] = R),
                      (hj.widget.pollsResponsesUUID =
                        hj.widget.pollsResponsesUUID || {}),
                      (hj.widget.pollsResponsesUUID[R.id] = hj.uuid()),
                      hj.widget.setLanguage(R.language),
                      hj.log.debug("Rendering poll widget.", "poll");
                    var G = m();
                    G !== u
                      ? ys(m(), function () {
                          (u = G), g(R, B);
                        })
                      : g(R, B);
                  }
                }, "polls"),
                U = hj.tryCatch(function (R) {
                  var B = JSON.parse(JSON.stringify(R));
                  return (
                    (function (G) {
                      hj.hq.each(G.content.questions, function (K, rt) {
                        rt.answers &&
                          hj.hq.each(rt.answers, function (a, E) {
                            E.index = a;
                          });
                      });
                    })(B),
                    (function (G) {
                      hj.hq.each(G.content.questions, function (K, rt) {
                        rt.randomize_answer_order &&
                          (rt.pin_last_to_bottom
                            ? (rt.answers = D(rt.answers.slice(0, -1)).concat(
                                rt.answers.slice(-1)
                              ))
                            : D(rt.answers));
                      });
                    })(B),
                    B
                  );
                }, "polls"),
                V = hj.tryCatch(function (R, B) {
                  hj.widget.pollsData = hj.widget.pollsData || {};
                  var G = U(R);
                  (hj.widget.pollsData[R.id] = G),
                    (hj.settings.legal_name = R.legal_name),
                    (hj.settings.privacy_policy_url = R.privacy_policy_url),
                    B && (hj.settings.features = B),
                    hj.tryCatch(
                      function () {
                        b(G);
                      },
                      G,
                      "polls"
                    )();
                }, "polls");
              return (
                (l.add = hj.tryCatch(function (R) {
                  (hj.widget.pollsData = hj.widget.pollsData || {}),
                    (hj.widget.pollsData[R.id] = U(R)),
                    hj.tryCatch(Vs.callAccordingToCondition, "polls")(
                      hj.widget.pollsData[R.id],
                      "poll",
                      b
                    );
                }, "polls")),
                (l.addEmbedded = hj.tryCatch(function (R, B) {
                  hj.widget.emptyMatchingWidgets();
                  var G =
                    R.display_type === "external_link"
                      ? void 0
                      : R.targeting_percentage;
                  hj.widget.addMatchingWidget(
                    "poll",
                    R.id,
                    R.created_epoch_time,
                    G,
                    function () {
                      var K = U(R),
                        rt = K.display_type === Hs.MOBILE_POPOVER;
                      rt ||
                        ((K.skin = "light"),
                        (K.background = "#ffffff"),
                        (K.pageBackground = R.background)),
                        hj.bridge.storage.items.POLL_DONE.exists(R.id) &&
                          R.persist_condition !== "always" &&
                          (hj.log.debug(
                            "Offsite poll " + R.id + " was already submitted.",
                            "poll"
                          ),
                          (K.is_submitted = !0)),
                        (hj.widget.pollsData = hj.widget.pollsData || {}),
                        (hj.widget.pollsData[K.id] = K),
                        b(K, B[0]),
                        typeof window.hjRenderCallback != "function" ||
                          rt ||
                          window.hjRenderCallback({ background: R.background });
                    },
                    l.remove,
                    R.display_type
                  );
                }, "polls")),
                (l.handleSurveyEvent = hj.tryCatch(function (R) {
                  var B;
                  R.detail.event === "surveyClosed" &&
                    R.detail.surveyId ===
                      ((B = hj.widget.activeWidget) === null || B === void 0
                        ? void 0
                        : B.id) &&
                    hj.widget.removeActiveWidget();
                })),
                (l.remove = hj.tryCatch(function (R, B) {
                  hj.widget.pollsData[B]
                    ? (_o(document.body, ".".concat("_hj-widget-container")),
                      _o(document.body, ".".concat("_hj-widget-iframe")),
                      delete hj.widget.pollsData[B],
                      R &&
                        setTimeout(function () {
                          R();
                        }, 1))
                    : R && R();
                }, "polls")),
                (l.run = hj.tryCatch(function (R) {
                  var B;
                  if (hj.hq("._hj-survey-embed-container").length > 0) {
                    var G,
                      K = hj.hq("._hj-survey-embed-container"),
                      rt = K.attr("data-survey-id"),
                      a =
                        (G = hj.settings.polls) === null || G === void 0
                          ? void 0
                          : G.find(function (v) {
                              return rn(v.display_type) && v.uuid == rt;
                            });
                    if (a !== void 0)
                      return (
                        hj.log.debug(
                          "Offsite poll #"
                            .concat(
                              a.id,
                              " has matched with the embedded UUID "
                            )
                            .concat(rt),
                          "poll"
                        ),
                        void l.addEmbedded(a, K)
                      );
                  }
                  if (en(R))
                    return (
                      hj.hq(document).trigger("hj-embedded-survey-mismatch"),
                      hj.widgetDelay.clear(),
                      hj.widget.emptyMatchingWidgets(),
                      void hj.log.debug(
                        "Could not match the embedded UUID.",
                        "poll"
                      )
                    );
                  var E =
                    (B = hj.settings.polls) === null || B === void 0
                      ? void 0
                      : B.filter(function (v) {
                          return (
                            (A = v.display_type),
                            sn[A] !== void 0 && !rn(v.display_type)
                          );
                          var A;
                        });
                  E == null ||
                    E.forEach(function (v) {
                      hj.targeting.matchRules(
                        {
                          rules: v.targeting,
                          userAttributeMatchLogic:
                            v.targeting_user_attribute_match_logic,
                        },
                        R,
                        hj.tryCatch(function () {
                          hj.log.debug(
                            "Poll #" + v.id + " has matched.",
                            "poll"
                          ),
                            hj.bridge.storage.items.POLL_DONE.exists(v.id) &&
                            v.persist_condition !== "always"
                              ? hj.log.debug(
                                  "Poll was already submitted.",
                                  "poll"
                                )
                              : hj.widget.addMatchingWidget(
                                  "poll",
                                  v.id,
                                  v.created_epoch_time,
                                  v.targeting_percentage,
                                  function () {
                                    return l.add(v);
                                  },
                                  function (A) {
                                    return l.remove(A, v.id);
                                  },
                                  v.display_type,
                                  v.targeting
                                );
                        }, "polls.run.matchRules-callback")
                      );
                    });
                }, "polls")),
                (l.enablePreview = function () {
                  window._hjPollReload = V;
                }),
                hj.isPreview && l.enablePreview(),
                window.addEventListener(
                  "hotjar-survey-event",
                  l.handleSurveyEvent
                ),
                l
              );
            })());
        }, "polls"),
        nn = Object.freeze({
          MODAL: "_hj-modal",
          FOOTER: "_hj-footer",
          SURVEY_INVITES: "_hj_survey_invite_container",
          HEATMAP_RETAKER: "_hj-heatmap-retaker",
          ADMIN_WIDGET: "_hj_admin_widget",
          NOTICATION: "_hj-notification",
        }),
        wo =
          (Object.freeze({
            RETAKER: "_hjRetakerTrsToken",
            TARGETING: "_hjRetakerTargeting",
          }),
          function (u) {
            if (u) {
              if (
                u.startsWith("data:image") ||
                u.startsWith("blob:") ||
                u.startsWith("http")
              )
                return u;
              var l =
                hj.environment === "live"
                  ? hj.surveyImagesHost
                  : "d23waydkwbngmu.cloudfront.net";
              return "https://".concat(l, "/").concat(u);
            }
          }),
        Ao = function () {
          var u = {},
            l = window.hjLazyModules;
          function f(g) {
            return g.display_type === Hs.EXTERNAL
              ? (function (m, b) {
                  if (b) return "https://".concat(b, "/").concat(m);
                  var U = (function () {
                      var R =
                          arguments.length > 0 && arguments[0] !== void 0
                            ? arguments[0]
                            : "INSIGHTS",
                        B =
                          arguments.length > 1 && arguments[1] !== void 0
                            ? arguments[1]
                            : document.location.host;
                      return dr(B, R)
                        ? yt.LIVE
                        : ye(B, R)
                        ? yt.DEV
                        : fo(B, R)
                        ? yt.DEV_OLD
                        : po(B, R)
                        ? yt.REVIEW_WEBAPP
                        : go(B, R)
                        ? yt.REVIEW
                        : Di(B, R)
                        ? yt.STAGING
                        : yt.LIVE;
                    })(),
                    V = Ft[U].SURVEYS;
                  return "https://".concat(V, "/").concat(m);
                })(g.uuid, hj.surveysHost)
              : g.public_url;
          }
          return (
            (u.run = hj.tryCatch(function (g) {
              if (!en(g)) {
                var m = (hj.settings.polls || []).filter(function (U) {
                    return U.invite_enabled && U.display_type === Hs.EXTERNAL;
                  }),
                  b = (hj.settings.surveys || []).concat(m);
                hj.hq.each(b || [], function (U, V) {
                  I.matchRules(
                    {
                      rules: V.targeting,
                      userAttributeMatchLogic:
                        V.targeting_user_attribute_match_logic,
                    },
                    g,
                    hj.tryCatch(function () {
                      hj.log.debug(
                        "Survey #" + V.id + " has matched.",
                        "survey"
                      ),
                        hj.bridge.storage.items.SURVEY_INVITES_CLOSED.exists(
                          V.id
                        )
                          ? hj.log.debug("Survey was already viewed.", "survey")
                          : hj.widget.addMatchingWidget(
                              "survey",
                              V.id,
                              V.created_epoch_time,
                              V.targeting_percentage,
                              function () {
                                (hj.survey.data = V),
                                  Vs.callAccordingToCondition(
                                    hj.survey.data,
                                    "survey",
                                    hj.tryCatch(function () {
                                      var R;
                                      (R = hj.survey.data),
                                        (hj.widget.surveyInvitationData = {
                                          id: R.id,
                                          title: R.invite.title,
                                          description: R.invite.description,
                                          button: R.invite.button,
                                          close: R.invite.close,
                                          url: f(R),
                                          logoUrl: wo(
                                            R.logo_path || R.logo_url
                                          ),
                                        }),
                                        ys(l.SURVEY_INVITATION);
                                    }, "polls")
                                  );
                              },
                              u.remove
                            );
                    }, "surveys.run.matchRules-callback")
                  );
                });
              }
            }, "surveys")),
            (u.remove = hj.tryCatch(function (g) {
              hj.survey.data
                ? (hj.hq(".".concat(nn.SURVEY_INVITES)).length > 0 &&
                    hj.hq(".".concat(nn.SURVEY_INVITES)).remove(),
                  delete hj.survey.data,
                  g &&
                    setTimeout(function () {
                      g();
                    }, 1))
                : g && g();
            })),
            u
          );
        },
        bo = hj.tryCatch(function () {
          hj.survey = {
            invites: Ao(),
            ctrl: void 0,
            data: void 0,
            model: {},
            activeLanguageDirection: "ltr",
          };
        }, "surveys");
      function ct() {
        return (
          (ct = Object.assign
            ? Object.assign.bind()
            : function (u) {
                for (var l = 1; l < arguments.length; l++) {
                  var f = arguments[l];
                  for (var g in f)
                    Object.prototype.hasOwnProperty.call(f, g) && (u[g] = f[g]);
                }
                return u;
              }),
          ct.apply(this, arguments)
        );
      }
      var je = "https://voc.hotjar.com",
        he = [
          je,
          "https://voc.ew1-integration-1.hotjarians.net",
          "https://hj-engage-unmoderated-review.s3.eu-west-1.amazonaws.com",
        ],
        pr = "hj-uut",
        Es = {
          get: function () {
            var u = window.sessionStorage.getItem(pr);
            return u ? JSON.parse(u) : null;
          },
          getValue: function (u) {
            var l = Es.get();
            return l == null ? void 0 : l[u];
          },
          set: function (u) {
            if (u) {
              var l,
                f = (l = Es.get()) !== null && l !== void 0 ? l : {};
              window.sessionStorage.setItem(
                pr,
                JSON.stringify(ct(ct({}, f), u))
              );
            }
          },
          clear: function () {
            window.sessionStorage.removeItem(pr);
          },
          validDomains: he,
        },
        ki = function (u) {
          var l = new URLSearchParams(u);
          return (
            !!l.has("project_uuid") ||
            (l.get("is_preview") === "1"
              ? l.has("task_uuid")
              : l.has("response_uuid") &&
                l.has("task_uuid") &&
                l.has("participation_uuid"))
          );
        },
        xi = function () {
          var u,
            l =
              (u = (function () {
                var m = document.referrer;
                if (
                  typeof m == "string" &&
                  (function (b) {
                    if (typeof b != "string") return !1;
                    try {
                      var U = new URL(b),
                        V = U.searchParams.get("is_preview") === "1";
                      return (
                        !!he.some(function (R) {
                          return b == null ? void 0 : b.includes(R);
                        }) ||
                        (!!V &&
                          U.hostname.endsWith(".hotjar.com") &&
                          U.pathname.includes("research/projects/tests"))
                      );
                    } catch {
                      return !1;
                    }
                  })(m) &&
                  ki(new URL(m).search)
                )
                  return m;
              })()) !== null && u !== void 0
                ? u
                : (function () {
                    var m = new URLSearchParams(window.location.search).get(
                      "hj_uut"
                    );
                    if (
                      he.some(function (V) {
                        var R;
                        return (R = document.referrer) === null || R === void 0
                          ? void 0
                          : R.includes(V);
                      }) &&
                      m
                    ) {
                      var b = window.atob(m);
                      if (ki(b)) {
                        var U = new URL(je);
                        return (U.search = b), U.toString();
                      }
                    }
                  })(),
            f = l !== void 0,
            g = Es.get() !== null;
          return f && Es.set({ referrer: l }), g || f;
        },
        li = !1,
        Li = function () {
          li ||
            ((function () {
              try {
                hj.request = (function () {
                  var u,
                    l,
                    f =
                      ((l =
                        hj.askUrl ||
                        ((u = hj.defaults) === null || u === void 0
                          ? void 0
                          : u.askUrl)),
                      {
                        v1: "".concat(l, "api/v1"),
                        v2: "".concat(l, "api/v2"),
                      }),
                    g = {},
                    m = { granted: null, callbacks: [], inProgress: !1 },
                    b = function () {
                      return hj.bridge.getSessionUserId(!0) || "";
                    },
                    U = [],
                    V = !1;
                  function R(B, G, K, rt) {
                    U.push([B, G, K, rt]),
                      V ||
                        (function a() {
                          if (U.length !== 0) {
                            V = !0;
                            var E = (function (C, k, ot) {
                                if (
                                  k &&
                                  !Array.isArray(k) &&
                                  typeof k.length == "number"
                                ) {
                                  var tt = k.length;
                                  return ur(k, 4 < tt ? 4 : tt);
                                }
                                return C(k, 4);
                              })(Qr, U.shift()),
                              v = E[0],
                              A = E[1],
                              p = E[2],
                              O = E[3];
                            hj.ajax.post(
                              v,
                              A,
                              function (C) {
                                try {
                                  p && p(C);
                                } finally {
                                  a();
                                }
                              },
                              function (C) {
                                try {
                                  O && O(C);
                                } finally {
                                  a();
                                }
                              }
                            );
                          } else V = !1;
                        })();
                  }
                  return (
                    (g.getConsentGranted = hj.tryCatch(function (B) {
                      var G,
                        K = "?";
                      m.granted !== null && B
                        ? B(m.granted)
                        : (B && m.callbacks.push(B),
                          m.inProgress ||
                            ((K += "user_id=" + b()),
                            (m.inProgress = !0),
                            hj.ajax.get(
                              ""
                                .concat(hj.apiUrlBase, "/sites/")
                                .concat(hj.settings.site_id, "/consent")
                                .concat(K),
                              function (rt) {
                                for (
                                  m.granted =
                                    !!rt.success &&
                                    rt.scopes.indexOf("associate") !== -1,
                                    m.inProgress = !1;
                                  (G = m.callbacks.pop());

                                )
                                  hj.tryCatch(G, "ConsentData")(m.granted);
                              },
                              function () {
                                for (
                                  m.granted = !1, m.inProgress = !1;
                                  (G = m.callbacks.pop());

                                )
                                  hj.tryCatch(G, "ConsentData")(m.granted);
                              }
                            )));
                    }, "hj.request.getConsentGranted")),
                    (g.grantConsent = hj.tryCatch(function (B, G) {
                      (B.user_id = b()),
                        (B.action = "grant_for_response"),
                        R(
                          ""
                            .concat(hj.apiUrlBase, "/sites/")
                            .concat(hj.settings.site_id, "/consent/associate"),
                          B,
                          function (K) {
                            (m.granted = !!K.success),
                              G && hj.tryCatch(G, "GrantConsent")(m.granted);
                          },
                          function () {
                            m.granted = !1;
                          }
                        );
                    }, "hj.request.getConsent")),
                    (g.savePollResponse = hj.tryCatch(function (
                      B,
                      G,
                      K,
                      rt,
                      a
                    ) {
                      var E = hj.widget.pollsResponsesUUID[B];
                      K.action = "create_or_update_poll_response";
                      var v = Jr.get();
                      v && (K.events = hj.hq.stringify(v)),
                        (function (A, p, O, C, k) {
                          var ot = it();
                          (O.window_width = O.window_width || ot.width),
                            (O.window_height = O.window_height || ot.height),
                            (O.user_id = p ? b() : void 0),
                            (O.url = location.href),
                            (O.account_id = hj.settings.account_id || null),
                            (O.payload_signature =
                              hj.settings.account_signature || null),
                            hj.userAttributes.flush(function (tt, Kt, de) {
                              if (tt) {
                                O.identify_user_id =
                                  hj.userAttributes.get("user_id") || null;
                                var wt = hj.userAttributes.get(
                                  "contentsquare_replay_link"
                                );
                                wt &&
                                  (O.identify_attributes = {
                                    contentsquare_replay_link: wt,
                                  });
                              } else (O.identify_user_id = Kt), (O.identify_attributes = de);
                              if (hj.sdk !== void 0) {
                                O.language = hj.sdk.getDeviceLanguage();
                                var ws = {
                                  contentsquare_replay_link:
                                    hj.sdk.getReplayLink(),
                                };
                                O.identify_attributes = fs(
                                  fs(
                                    {},
                                    Me(O.identify_attributes) === "object"
                                      ? O.identify_attributes
                                      : void 0
                                  ),
                                  ws
                                );
                              }
                              R(
                                A,
                                O,
                                function (Fs) {
                                  C && C(Fs);
                                },
                                function () {
                                  k && k(new Error("Error sending response"));
                                }
                              );
                            });
                        })(
                          ""
                            .concat(f.v2, "/client/sites/")
                            .concat(hj.settings.site_id, "/poll/")
                            .concat(B, "/response/")
                            .concat(E),
                          G,
                          K,
                          function (A) {
                            A.is_new_response &&
                              hj.event.signal("poll.send", {
                                id: B,
                                response_id: A.poll_response_id,
                              }),
                              rt == null || rt(A);
                          },
                          a
                        );
                    },
                    "data")),
                    (g.completePollResponse = hj.tryCatch(function (B, G) {
                      var K = hj.widget.pollsResponsesUUID[B];
                      R(
                        ""
                          .concat(f.v2, "/client/sites/")
                          .concat(hj.settings.site_id, "/poll/")
                          .concat(B, "/response/")
                          .concat(K),
                        {
                          action: "finish_poll_response",
                          completion_time_from_engagement_ms: G.fromEngagement,
                          completion_time_from_render_ms: G.fromRender,
                        }
                      );
                    }, "data")),
                    g
                  );
                })();
              } catch (u) {
                hj.exceptions.log(u, "hj.request");
              }
            })(),
            tn(),
            fr(),
            bo(),
            (li = !0));
        },
        Ss = function (u) {
          hj.widget &&
            (xi()
              ? ys(
                  window.hjLazyModules.USER_TEST,
                  function () {
                    var l, f;
                    (l = (f = hj.widget).initUserTest) === null ||
                      l === void 0 ||
                      l.call(f);
                  },
                  function () {
                    hj.log.error("Failed to load user test module");
                  }
                )
              : (hj.widget.emptyMatchingWidgets(),
                hj.polls.run(u),
                hj.survey.invites.run(u),
                hj.widget.runLatestMatchingWidget(),
                hj.widget.runInlineEmbeddedWidgets()));
        },
        Be = ht("ab-tasty", "integration");
      function kt() {
        return (
          window.ABTasty !== void 0 &&
          window.ABTasty.hitServiceNotifierSubscribe !== void 0
        );
      }
      var ui = {
        setup: hj.tryCatch(function () {
          function u(l) {
            if (
              l.type === "CAMPAIGN" &&
              l.data &&
              l.data.caname &&
              l.data.vaname
            ) {
              var f = l.data,
                g = f.caname,
                m = f.vaname;
              Be(
                "AB Tasty campaign '"
                  .concat(g, "' is on variant '")
                  .concat(m, "'"),
                l
              ),
                hj.event.signal(
                  "exp.abt",
                  { experimentId: g, variantId: m },
                  !0
                );
              var b = Nt("".concat(g, "-").concat(m));
              hj("event", b), Be("Sending event '".concat(b, "'"));
            } else Be("Invalid AB Tasty event", l);
          }
          et(
            kt,
            function (l) {
              l
                ? (Be("AB Tasty global object found"),
                  window.ABTasty.hitServiceNotifierSubscribe(u, "CAMPAIGN", {
                    withHitHistory: !0,
                  }))
                : Be("AB Tasty global object not found");
            },
            2e3,
            10
          );
        }, "abTasty.setup"),
      };
      function De() {
        return (
          (De = Object.assign
            ? Object.assign.bind()
            : function (u) {
                for (var l = 1; l < arguments.length; l++) {
                  var f = arguments[l];
                  for (var g in f)
                    Object.prototype.hasOwnProperty.call(f, g) && (u[g] = f[g]);
                }
                return u;
              }),
          De.apply(this, arguments)
        );
      }
      function js(u, l) {
        return (
          (function (f) {
            if (Array.isArray(f)) return f;
          })(u) ||
          (function (f, g) {
            var m =
              f == null
                ? null
                : (typeof Symbol != "undefined" && f[Symbol.iterator]) ||
                  f["@@iterator"];
            if (m != null) {
              var b,
                U,
                V,
                R,
                B = [],
                G = !0,
                K = !1;
              try {
                if (((V = (m = m.call(f)).next), g === 0)) {
                  if (Object(m) !== m) return;
                  G = !1;
                } else
                  for (
                    ;
                    !(G = (b = V.call(m)).done) &&
                    (B.push(b.value), B.length !== g);
                    G = !0
                  );
              } catch (rt) {
                (K = !0), (U = rt);
              } finally {
                try {
                  if (
                    !G &&
                    m.return != null &&
                    ((R = m.return()), Object(R) !== R)
                  )
                    return;
                } finally {
                  if (K) throw U;
                }
              }
              return B;
            }
          })(u, l) ||
          (function (f, g) {
            if (f) {
              if (typeof f == "string") return gr(f, g);
              var m = Object.prototype.toString.call(f).slice(8, -1);
              return (
                m === "Object" && f.constructor && (m = f.constructor.name),
                m === "Map" || m === "Set"
                  ? Array.from(f)
                  : m === "Arguments" ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(m)
                  ? gr(f, g)
                  : void 0
              );
            }
          })(u, l) ||
          (function () {
            throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
          })()
        );
      }
      function gr(u, l) {
        (l == null || l > u.length) && (l = u.length);
        for (var f = 0, g = new Array(l); f < l; f++) g[f] = u[f];
        return g;
      }
      function $e() {
        var u;
        return (
          typeof window[
            (u = window.GoogleAnalyticsObject) !== null && u !== void 0
              ? u
              : "ga"
          ] == "function"
        );
      }
      function Vi(u, l) {
        !l ||
          !l.length ||
          l.length < 2 ||
          l[0] !== "event" ||
          Fe(u, {
            action: l[1],
            category: (l[2] && l[2].event_category) || "",
            label: (l[2] && l[2].event_label) || "",
            value: (l[2] && l[2].value) || "",
          });
      }
      function Fe(u, l) {
        if (
          !(function (m) {
            return m.action === "detect_user" && m.category === "Hotjar";
          })(l)
        ) {
          var f = (function (m) {
              return (
                "GA_" +
                [m.action, m.category, m.label, m.value]
                  .filter(function (b) {
                    return b === 0 || !!b;
                  })
                  .join("-")
              );
            })(l),
            g = (function (m) {
              return "GA_" + m.action;
            })(l);
          hj.log.debug("intercepting ".concat(u, ": ") + JSON.stringify(l)),
            hj("event", f),
            f !== g && hj("event", g),
            hj.event.signal("int.ga", l);
        }
      }
      var hi,
        ke,
        Ae,
        xt = { gaClientSent: !1, gtagClientSent: !1, dataLayerSent: !1 },
        lt = function (u) {
          return xt[u];
        },
        xe = function (u, l) {
          xt[u] && (xt[u] = l);
        },
        mr = ht("ga.forward_events", "integration"),
        yr = !1,
        vs = {
          setup: hj.tryCatch(function () {
            if (!yr) {
              yr = !0;
              var u = $e(),
                l = typeof window.gtag == "function";
              et(
                function () {
                  return (
                    window.dataLayer !== void 0 &&
                    window.dataLayer.length !== void 0
                  );
                },
                function (f) {
                  if (f)
                    return (
                      mr("Intercepting dataLayer"),
                      (function () {
                        var m = window.dataLayer;
                        if (m._hj !== !0) {
                          m.forEach(function (U) {
                            Vi("dataLayer", U);
                          });
                          var b = m.push;
                          (m.push = function () {
                            b.apply(m, arguments),
                              Vi("dataLayer", arguments[0]);
                          }),
                            (m._hj = !0);
                        }
                      })(),
                      void (
                        lt("dataLayerSent") ||
                        (hj.metrics.count("ga-version", {
                          tag: { version: "datalayer" },
                        }),
                        xe("dataLayerSent", !0))
                      )
                    );
                  var g;
                  l &&
                    (mr("Intercepting gtag"),
                    (g = window.gtag),
                    (window.gtag = function () {
                      var m = Array.prototype.slice.call(arguments);
                      g.apply(null, m), Vi("gtag", m);
                    }),
                    lt("gtagClientSent") ||
                      (hj.metrics.count("ga-version", {
                        tag: { version: "gtag" },
                      }),
                      xe("gtagClientSent", !0)));
                },
                3e3,
                5
              ),
                u &&
                  (mr("Intercepting ga"),
                  (0, window[window.GoogleAnalyticsObject || "ga"])(function (
                    f
                  ) {
                    var g = f.get("sendHitTask");
                    f.set("sendHitTask", function (m) {
                      g(m);
                      var b = (function (U) {
                        var V = decodeURIComponent(U)
                          .split("&")
                          .map(function (R) {
                            return R.split("=");
                          })
                          .filter(function (R) {
                            var B = (function (G, K, rt) {
                              if (
                                K &&
                                !Array.isArray(K) &&
                                typeof K.length == "number"
                              ) {
                                var a = K.length;
                                return gr(K, 1 < a ? 1 : a);
                              }
                              return G(K, 1);
                            })(js, R)[0];
                            return (
                              ["t", "ec", "ea", "el", "ev"].indexOf(B) > -1
                            );
                          })
                          .reduce(function (R, B) {
                            var G;
                            return De(
                              De({}, R),
                              {},
                              (((G = {})[B[0]] = B[1]), G)
                            );
                          }, {});
                        return V.t
                          ? {
                              event: V.t,
                              category: V.ec || "",
                              action: V.ea || "",
                              label: V.el || "",
                              value: V.ev || "",
                            }
                          : {};
                      })(m.get("hitPayload"));
                      b.event === "event" && Fe("ga", b);
                    });
                  }),
                  lt("gaClientSent") ||
                    (hj.metrics.count("ga-version", { tag: { version: "ga" } }),
                    xe("gaClientSent", !0)));
            }
          }, "ga.forward_events"),
        },
        Bs = ht("ga.send_hjuid"),
        Ui = 60,
        Qe = !0,
        on = !1,
        To = hj.tryCatch(function () {
          on ||
            ((on = !0),
            hj.store.session.on("user.id", function (u) {
              typeof u != "string" || u.length < 8
                ? Bs("invalid userid: '".concat(u, "'"))
                : (Bs("got userId"), (ke = u.substring(0, 8)), an());
            }),
            be());
        }, "integrations.googleAnalytics"),
        be = hj.tryCatch(function () {
          if (!hi) {
            if ($e()) {
              lt("gaClientSent") ||
                (hj.metrics.count("ga-version", { tag: { version: "ga" } }),
                xe("gaClientSent", !0));
              var u = window[window.GoogleAnalyticsObject || "ga"];
              return (
                Bs("`ga` variable is available, waiting for tracker."),
                void u(function (l) {
                  $s(l, !0);
                })
              );
            }
            Ui <= 0
              ? Bs("given up looking for GA module")
              : ((Ui -= 1), setTimeout(be, 500));
          }
        }, "integrations"),
        $s = hj.tryCatch(function (u, l) {
          u &&
            ((hi && l) ||
              (hi !== u && (Bs("got fresh tracker"), (Qe = !0)),
              (hi = u),
              an()));
        }, "integrations"),
        an = hj.tryCatch(function () {
          Qe &&
            ke &&
            hi &&
            ((Qe = !1),
            hi.send("event", "Hotjar", "detect_user", ke, {
              nonInteraction: 1,
            }),
            Bs("successfully sent detect_user event"));
        }, "integrations"),
        Ro = {
          setup: To,
          setTracker: hj.tryCatch(function (u) {
            $s(u, !1);
          }, "integrations.googleAnalytics"),
        },
        Er = ht("ga.send_hjuid_gtag"),
        Sr = !1,
        Co = hj.tryCatch(function () {
          if (!Sr) {
            Sr = !0;
            var u = window.dataLayer;
            u !== void 0
              ? (lt("datalayerSent") ||
                  (hj.metrics.count("ga-version", {
                    tag: { version: "datalayer" },
                  }),
                  xe("datalayerSent", !0)),
                lt("gtagClientSent") ||
                  (hj.metrics.count("ga-version", { tag: { version: "gtag" } }),
                  xe("gtagClientSent", !0)),
                hj.store.session.on("user.id", function (f) {
                  if (f && typeof f == "string" && !(f.length < 8)) {
                    var g = f.substring(0, 8);
                    l("set", "user_properties", { hjuid: g }),
                      l("event", "detect_user", {
                        event_category: "Hotjar",
                        event_label: g,
                        non_interaction: !0,
                      });
                  }
                }))
              : Er("`dataLayer` is undefined");
          }
          function l() {
            var f;
            Er(
              "calling gtag(".concat(
                ((f = arguments),
                Array.from(f).map(function (g) {
                  return JSON.stringify(g);
                })),
                ")"
              )
            ),
              u.push(arguments);
          }
        }, "ga.send_hjuid_gtag"),
        Hi = {
          forwardEvents: vs,
          sendHotjarUserId: Ro,
          sendHotjarUserIdGtag: { setup: Co },
        },
        Io = function () {
          return hj.bridge.storage.items.HUBSPOT_UTK.get() !== null;
        },
        vr = ht("hubspot", "integrations"),
        Po = {
          setup: hj.tryCatch(function () {
            vr("HubSpot setup started"),
              et(
                Io,
                function (u) {
                  if (u) {
                    var l = hj.bridge.storage.items.HUBSPOT_UTK.get();
                    vr("HubSpot UTK found: ".concat(l)),
                      hj.event.signal("int.hubspot", { utk: l });
                  } else vr("HubSpot UTK cookie not found");
                },
                5e3,
                5
              );
          }, "hubspot.setup"),
        },
        Oo = ht("kissmetrics", "integration"),
        No = function () {
          return window.KM !== void 0 && window.KM.i !== void 0;
        },
        Mo = {
          setup: hj.tryCatch(function () {
            et(
              No,
              function (u) {
                if (u) {
                  var l = window.KM.i();
                  Oo("Kissmetrics User ID found: ".concat(l)),
                    hj("identify", null, { kissmetrics_id: l });
                }
              },
              5e3,
              5
            );
          }, "kissmetrics.setup"),
        },
        _r = ht("mixpanel.send_events"),
        Do = function () {
          return (
            window.mixpanel !== void 0 && window.mixpanel.set_config !== void 0
          );
        },
        ko = {
          setup: hj.tryCatch(function () {
            et(
              Do,
              function (u) {
                var l, f, g, m;
                u
                  ? (_r("Registering mixpanel hook"),
                    !Ae &&
                      (l = window.mixpanel.config) !== null &&
                      l !== void 0 &&
                      (f = l.hooks) !== null &&
                      f !== void 0 &&
                      f.before_send_events &&
                      (Ae =
                        (g = window.mixpanel.config) === null ||
                        g === void 0 ||
                        (m = g.hooks) === null ||
                        m === void 0
                          ? void 0
                          : m.before_send_events),
                    window.mixpanel.set_config({
                      hooks: {
                        before_send_events: function (b) {
                          Ae && Ae(b);
                          var U = Nt(b.event);
                          return (
                            _r("sending mixpanel payload: ".concat(b.event)),
                            hj("event", "MP_".concat(U)),
                            hj.event.signal("int.mp", { event: U }),
                            b
                          );
                        },
                      },
                    }))
                  : _r(
                      "mixpanel global object not found or set_config not ready"
                    );
              },
              3e3,
              5
            );
          }, "mixpanel.setup"),
        },
        ji = ht("optimizely", "integration"),
        _s = window.optimizely;
      function cn() {
        ji("looking for tags.");
        var u = _s.get("state").getExperimentStates({ isActive: !0 });
        for (var l in u) {
          var f = u[l],
            g = (f.isInExperimentHoldback ? "HB_" : "") + f.experimentName,
            m = f.variation.name || f.variation.id;
          hj.event.signal("exp.opt", { experimentId: g, variantId: m }),
            hj("event", g + "/" + m);
        }
      }
      var xo = {
          setup: hj.tryCatch(function () {
            _s !== void 0 &&
            typeof _s.push == "function" &&
            typeof _s.get == "function" &&
            _s.get("state") !== void 0 &&
            _s.get("data") !== void 0
              ? (ji("listening for campaignDecided event."),
                (_s = window.optimizely || []).push({
                  type: "addListener",
                  filter: { name: "campaignDecided" },
                  handler: function (u) {
                    u.name === "applied" &&
                      (ji("campaign decided; ready to tag experiments."), cn());
                  },
                }),
                cn())
              : ji("`window.optimizely` is not ready");
          }, "optimizely.setup"),
        },
        di = {
          setup: hj.tryCatch(function () {
            window.ub !== void 0 &&
            window.ub.page !== void 0 &&
            window.ub.page.variantId !== void 0
              ? (hj.log.debug(
                  "Unbounce experiment in page '"
                    .concat(window.ub.page.name, "' is on variant '")
                    .concat(window.ub.page.variantId, "'"),
                  "integration",
                  window.ub
                ),
                hj.event.signal("exp.ub", {
                  experimentId: window.ub.page.name,
                  variantId: window.ub.page.variantId,
                }),
                hj(
                  "event",
                  ""
                    .concat(Nt(window.ub.page.name), "-variant-")
                    .concat(window.ub.page.variantId)
                ))
              : hj.log.debug("Unbounce experiment not found", "integration");
          }, "unbounce.setup"),
        },
        Lo = hj.tryCatch(function () {
          var u = hj.settings.integrations;
          if (u) {
            var l = hj.bridge.getSessionUserId();
            hj.store.session.set("user.id", l),
              u.optimizely && u.optimizely.tag_recordings && xo.setup(),
              u.google_analytics &&
                (u.google_analytics.tag_sessions && Hi.forwardEvents.setup(),
                u.google_analytics.send_hotjar_id &&
                  (Hi.sendHotjarUserId.setup(),
                  Hi.sendHotjarUserIdGtag.setup())),
              u.unbounce && u.unbounce.tag_recordings && di.setup(),
              u.mixpanel && u.mixpanel.send_events && ko.setup(),
              u.hubspot &&
                u.hubspot.enabled &&
                u.hubspot.send_recordings &&
                Po.setup(),
              u.abtasty && u.abtasty.tag_recordings && ui.setup(),
              u.kissmetrics && u.kissmetrics.send_user_id && Mo.setup();
          }
        }, "integrations"),
        ln = !1,
        fi = function (u) {
          var l = u.title,
            f = u.message,
            g = u.status,
            m = window.hjLazyModules;
          ln
            ? hj.widget.renderNotificationWidget({
                title: l,
                message: f,
                status: g,
              })
            : ys(m.NOTIFICATION, function () {
                (ln = !0),
                  hj.widget.renderNotificationWidget({
                    title: l,
                    message: f,
                    status: g,
                  });
              });
        };
      function pi() {
        return (
          (pi = Object.assign
            ? Object.assign.bind()
            : function (u) {
                for (var l = 1; l < arguments.length; l++) {
                  var f = arguments[l];
                  for (var g in f)
                    Object.prototype.hasOwnProperty.call(f, g) && (u[g] = f[g]);
                }
                return u;
              }),
          pi.apply(this, arguments)
        );
      }
      var Ze,
        gi = ((Ze = {
          _sendVerifyInstallation: function (u) {
            var l = ""
              .concat(hj.apiUrlBase, "/client/sites/")
              .concat(hj.settings.site_id, "/verify-installation?sv=")
              .concat(_hjSettings.hjsv || 0);
            hj.ajax.post(l, {}, hj.tryCatch(u, "init._sendVerifyInstallation"));
          },
          _reportVerificationResults: function (u, l, f) {
            if (u) {
              var g = le.hasFeature("tcvs_v2")
                  ? "https://"
                      .concat(
                        hj.environment === "live"
                          ? "tcvsapi.contentsquare.com"
                          : "gateway-tcvs.staging.eu-west-1.csq.io",
                        "/v1/verification/"
                      )
                      .concat(u, "/result")
                  : ""
                      .concat(hj.apiUrlBase, "/tcvs/verification/")
                      .concat(u, "/result"),
                m = pi(pi({}, f && { error_detail: f }), {}, { status: l });
              (le.hasFeature("tcvs_v2") ? hj.ajax.postAsJSON : hj.ajax.post)(
                g,
                m,
                function () {
                  hj.tcVerificationResultsSent = !0;
                },
                function (b) {
                  b &&
                    b.status !== 400 &&
                    b.status !== 404 &&
                    hj.exceptions.log(
                      new Error("TCVS endpoint failed"),
                      "init._reportVerificationResults"
                    ),
                    (hj.tcVerificationResultsSent = !0);
                }
              );
            }
          },
        }),
        {
          verifyInstallationAuto: function () {
            if (hj.settings.tracking_code_verified)
              hj.log.debug("Tracking code verified.", "init");
            else {
              hj.log.debug(
                "Tracking code verified not found, updating first data.",
                "init"
              );
              var u = ""
                .concat(hj.apiUrlBase, "/client/sites/")
                .concat(hj.settings.site_id, "/verify-installation/auto");
              hj.ajax.post(u, {}, void 0, function (l) {
                hj.exceptions.log(
                  new Error("Url: ".concat(u, " - Status: ").concat(l.status)),
                  "init._verifyInstallationAuto"
                );
              });
            }
          },
          verifyInstallation: function () {
            var u,
              l =
                arguments.length > 0 && arguments[0] !== void 0
                  ? arguments[0]
                  : "Hotjar",
              f = ae("hjVerifyInstall"),
              g = ae("hjVerifyUUID"),
              m = function () {
                fi({
                  title: "".concat(l, " installation invalid"),
                  message:
                    "The tracking code you are trying to verify does not match the one installed on this page. Please make sure you install the correct tracking code provided for this site.",
                  status: "bad",
                }),
                  Ze._reportVerificationResults(g, "wrong_code", {
                    expected: String(hj.verifyInstall),
                    actual: String(hjSiteSettings.site_id),
                  });
                var K = "Passed Site ID: "
                  .concat(hj.verifyInstall, " != Configured Site ")
                  .concat(hj.settings.site_id);
                hj.exceptions.log(new Error(K), "init._verifyInstallation");
              };
            try {
              u = sessionStorage.getItem("hjVerifyInstall");
            } catch {}
            if (f || u) {
              hj.verifyInstall = parseInt(f || u);
              try {
                sessionStorage.setItem("hjVerifyInstall", f || u);
              } catch {}
              if (
                window.hjBootstrapCalled &&
                window.hjBootstrapCalled.length > 1
              ) {
                var b,
                  U = window.hjBootstrapCalled.filter(function (K, rt) {
                    return window.hjBootstrapCalled.indexOf(K) === rt;
                  }),
                  V =
                    "You have " +
                    window.hjBootstrapCalled.length +
                    " tracking scripts installed on your site. ",
                  R =
                    window.hjBootstrapCalled.length === 2
                      ? "script as this"
                      : "scripts as these",
                  B = !!window.dataLayer;
                U.length > 1
                  ? ((b =
                      V +
                      "Please remove the duplicate " +
                      R +
                      " will cause issues."),
                    fi({
                      title: "Multiple different ".concat(
                        l,
                        " scripts detected"
                      ),
                      message: b,
                      status: "bad",
                    }),
                    Ze._reportVerificationResults(g, "multiple_codes", {
                      expected: String(hj.verifyInstall),
                      actual: U,
                      gtm: !1,
                    }))
                  : B
                  ? ((b =
                      V +
                      "If you've installed ".concat(
                        l,
                        " through GTM - please remove the duplicate "
                      ) +
                      R +
                      " will cause issues."),
                    Ze._reportVerificationResults(g, "multiple_codes", {
                      expected: String(hj.verifyInstall),
                      actual: U,
                      gtm: !0,
                    }),
                    fi({
                      title: "Multiple ".concat(l, " scripts detected"),
                      message: b,
                      status: "bad",
                    }))
                  : hj.verifyInstall === hj.settings.site_id
                  ? ((b =
                      V +
                      "This will not affect data collection, but we do suggest removing redundant scripts."),
                    Ze._reportVerificationResults(g, "warning", {
                      expected: String(hj.verifyInstall),
                      reason: "multiple scripts",
                    }),
                    fi({
                      title: "Multiple ".concat(l, " scripts detected"),
                      message: b,
                      status: "warning",
                    }))
                  : m();
                var G =
                  "Passed Site ID: " +
                  hj.verifyInstall +
                  " contains multiple scripts " +
                  window.hjBootstrapCalled.join(", ");
                hj.exceptions.log(new Error(G), "init._verifyInstallation");
              } else
                hj.verifyInstall === hj.settings.site_id
                  ? (Ze._sendVerifyInstallation(function (K) {
                      K.success ||
                        hj.exceptions.log(
                          new Error("Verify installation endpoint failed"),
                          "init._verifyInstallation"
                        );
                    }),
                    fi({
                      title: "".concat(l, " installation verified"),
                      message:
                        "The ".concat(
                          l,
                          " tracking code has been properly installed on this page. "
                        ) +
                        "Browse your site in this window if you wish to verify installation on any other pages.",
                      status: "good",
                    }),
                    Ze._reportVerificationResults(g, "ok"))
                  : m();
            }
          },
        }).verifyInstallation,
        Vo = r.u6,
        un = r.b2,
        Uo = r.Vv,
        Ho = r.pF,
        hn = r.XA,
        jo = r.fd,
        Bo = r.ec;
      return { gn: Vo, fn: un, pn: Uo, vn: Ho, yn: hn, mn: jo, jn: Bo };
    })();
  var V_ = eo.fn;
  var U_ = eo.vn,
    H_ = eo.yn,
    j_ = eo.mn;
  function B_() {
    window._uxa.push([
      "replay:link:generate",
      {},
      ({ isRecording: s, replayLink: r }) => {
        typeof hj == "function" &&
          s &&
          r &&
          hj("identify", null, {
            contentsquare_replay_link: `https://${r}&vd=hotjar`,
          });
      },
    ]);
  }
  function $_(s) {
    let r = !1,
      t,
      e = {},
      i = ["event", "trigger", "identify", "stateChange"];
    function n(y) {
      return !hj.optOut && csArray.prototype.indexOf.call(i, y) >= 0;
    }
    function o() {
      Object.defineProperty(t, "push", {
        writable: !0,
        value: function () {
          for (let y = 0; y < arguments.length; y += 1)
            this[this.length] = arguments[y];
          return c(), this.length;
        },
      });
    }
    function c() {
      let y = csArray.prototype.slice.call(csArray.prototype.shift.call(t)),
        _ = e[y[0]],
        w = csArray.prototype.slice.call(y, 1);
      hj.log.debug(
        "Processing command: " +
          y[0] +
          " " +
          csArray.prototype.join.call(
            csArray.prototype.map.call(w, function (T) {
              return (typeof T == "object" || typeof T == "function") &&
                T !== null
                ? csJSON.stringify(T)
                : T;
            }),
            ", "
          )
      ),
        typeof _ != "function"
          ? hj.log.debug('Unknown command: "' + y[0] + '"', "command")
          : n(y[0])
          ? J.tryToExecute("hj-command", _)(w)
          : hj.log.debug(
              'Command "' + y[0] + '" blocked due to opt-out',
              "command"
            ),
        t.length > 0 && J.tryToExecute("hj-queue-command", c)();
    }
    function h(y) {
      y[0] && hj.event.signal("trigger:" + y[0]);
    }
    function d(y) {
      let _ = y[0];
      if (y[1]) {
        let w;
        (!_ && _ !== 0) || _ === "null" || _ === "undefined"
          ? (w = null)
          : (w = csString(_)),
          hj.userAttributes.set(w, y[1]);
      } else
        _ != null && typeof _ == "object" && hj.userAttributes.set(null, _);
    }
    return (
      (e.event = function (y) {
        if ((h(y), y && y.length > 0)) {
          let _ = y[0];
          s.pushExternalEvents([_]);
        }
      }),
      (e.identify = function (y) {
        d(y);
      }),
      (e.trigger = function (y) {
        h(y);
      }),
      (e.stateChange = function (y) {
        let _ = window.location.href;
        y && y.length >= 1 && y[0] && (_ = y[0]),
          hj.log.debug('Changing state to URL "' + _ + '"', "command"),
          s.pushPageView(_);
      }),
      {
        activate: function () {
          !r && hj && ((t = hj.q), (r = !0), o(), t.length > 0 && c());
        },
        isActive: () => r,
      }
    );
  }
  var F_ = (s) => {
      let {
          accountId: r,
          accountSignature: t,
          projectId: e,
          siteId: i,
          surveys: n,
          hashes: o,
        } = s,
        c =
          window.CS_INTEGRATIONS_CONF &&
          window.CS_INTEGRATIONS_CONF["hubspot-client-side"];
      (hj.settings = {
        ...hj.settings,
        account_id: r,
        account_signature: t,
        cs_project_id: e,
        features: [],
        integrations: {
          hubspot: {
            enabled: !!c,
            send_surveys:
              (c == null ? void 0 : c.settings) == null
                ? void 0
                : csArray.prototype.includes.call(
                    c == null ? void 0 : c.settings,
                    "sendSurveyResponses"
                  ),
          },
        },
        polls: n,
        site_id: i,
        user_attributes_enabled: !0,
      }),
        (window.hjLazyModules = o);
    },
    pd = (() => {
      class s {
        constructor(t, e, i, n) {
          (this.E = t), (this.N = e), (this.A = i), (this.Me = n);
        }
        init() {
          this.E.vocData && F_(this.E.vocData),
            new L_(this.Me).listen({ vocEnabled: !0, integrationsEnabled: !1 }),
            H_();
        }
        Or() {
          let t = this.A.getUrl();
          (hj.currentUrl = t), U_(), B_(), j_(t);
        }
        onAfterNaturalPageView() {
          this.Or();
        }
        onAfterArtificialPageView() {
          this.Or();
        }
        onStartNoTrackingMode() {
          this.N.createOrUpdateVisitor();
        }
      }
      return s;
    })(),
    G_ = (() => {
      class s extends se {
        constructor() {
          super(), (this.lh = []);
        }
        onStart() {
          csArray.prototype.forEach.call(this.lh, (t) =>
            this.triggerHotjarEvent(t)
          ),
            (this.lh = []);
        }
        onStop() {}
        triggerHotjarEvent(t) {
          if (!this.isStarted) {
            csArray.prototype.push.call(this.lh, t);
            return;
          }
          this.Ml(t) && hj("event", t);
        }
        Ml(t) {
          return j(t);
        }
      }
      return s;
    })(),
    z_ = 60 * 60 * 24 * 1e3,
    q_ = z_ * 365,
    da = (s, r, t = q_) => ({
      add: (e) => {
        let i = r.get(s),
          n = i ? `${i},${e}` : e;
        r.set({ key: s, value: n, duration: t });
      },
      exists: (e) => {
        let i =
          (r.get(s) == null
            ? void 0
            : csString.prototype.split.call(r.get(s), ",")) || [];
        for (let n = 0; n < i.length; n++) if (csString(e) === i[n]) return !0;
        return !1;
      },
      remove: (e) => {
        let i =
            (r.get(s) == null
              ? void 0
              : csString.prototype.split.call(r.get(s), ",")) || [],
          n = csArray.prototype.join.call(
            csArray.prototype.filter.call(i, (o) => o !== csString(e)),
            ","
          );
        r.set({ key: s, value: n, duration: t });
      },
    }),
    Fi = (s, r, t = !1) => ({
      set: (e) => r.set({ key: s, value: e, useLocalStorage: t }),
      get: () => r.get(s, t),
      clear: () => r.clear(s, t),
    }),
    W_ = (() => {
      class s {
        constructor(t, e, i) {
          (this.E = t), (this.D = e), (this._t = i);
        }
        get(t, e) {
          return this.E.cookielessTrackingEnabled || e
            ? this._t.getItem(t)
            : this.D.get(t) || this._t.getItem(t);
        }
        set(t) {
          this.E.cookielessTrackingEnabled || t.useLocalStorage
            ? this._t.setItem(t.key, t.value)
            : this.D.set(t.key, t.value, t.duration);
        }
        clear(t, e) {
          this.E.cookielessTrackingEnabled || e
            ? this._t.removeItem(t)
            : this.D.delete(t);
        }
      }
      return s;
    })(),
    Y_ = (s, r, t) => {
      hj.bridge = {
        storage: {
          items: {
            POLL_DONE: da("_hjDonePolls", s),
            POLL_MINIMIZED: da("_hjMinimizedPolls", s),
            SURVEY_INVITES_CLOSED: da("_hjClosedSurveyInvites", s),
            DEBUG_FLAG: Fi("hjDebug", s),
            FEEDBACK_SHOW_MESSAGE: Fi("_hjShownFeedbackMessage", s),
            HUBSPOT_UTK: Fi("hubspotutk", s),
            HAS_CACHED_USER_ATTRIBUTES: Fi("_hjHasCachedUserAttributes", s),
            USER_ATTRIBUTES_HASH: Fi("_hjUserAttributesHash", s),
          },
          localStorage: { USER_ATTRIBUTES: Fi("_hjUserAttributes", s, !0) },
        },
        getSessionUserId: () => {
          let e = r.getVisitor();
          return e == null ? void 0 : e.id;
        },
        getSessionFirstSeen: () => {},
        getPageContent: (e) => t.getPageContent(e),
        isRecordingEnabled: () => !1,
        flushUserAttributes: () => null,
      };
    };
  function X_(s) {
    return (
      Et.traverse(s, (r) => {
        if (r.nodeType === Ms.DOCUMENT_FRAGMENT_NODE) {
          let t = Et.getProperty(r, "styles");
          t && (r.adoptedStyleSheets = t);
        }
      }),
      s
    );
  }
  function K_(s) {
    if (s != null && s.length) return Ye(s, (r) => Q_(r));
  }
  function J_() {
    _e(document).visitAll((s) => {
      var r;
      if (
        Ji(s) &&
        ((r = s.adoptedStyleSheets) === null || r === void 0
          ? void 0
          : r.length) > 0
      ) {
        let t = K_(s.adoptedStyleSheets);
        Et.setProperty(s, "styles", t);
      }
    });
  }
  function Q_(s) {
    let r = [];
    try {
      r = Ye(s.cssRules, (t) => t.cssText);
    } catch {}
    return { cssRules: r, disabled: s.disabled };
  }
  var Z_ = (() => {
      class s {
        constructor(t, e, i, n, o) {
          (this.Zb = t),
            (this.E = e),
            (this.Ee = i),
            (this.J = n),
            (this.Kt = o);
        }
        getPageContent(t) {
          this.Ee.setMaskedElementSettings(this.J.getMaskedElementSettings()),
            this.Ee.startIdentifier(),
            this.Kt.start(),
            J_(),
            bE.serialize(document, (e) => {
              let i = X_(e),
                n = csArray.prototype.reduce.call(
                  this.Zb,
                  (o, c) => c.sanitize(o),
                  i
                );
              this.Kt.stop(), t(csJSON.stringify(n), this.E.projectId);
            });
        }
      }
      return s;
    })(),
    gd = (() => {
      class s extends ls {
        constructor(t) {
          super(),
            (this.W = null),
            (this.$a = null),
            (this.U = null),
            (this.ti = null),
            (this.kg = ["value", "checked", "src", "data", "alt"]),
            (this.Fa = { state: F.MaskedElementState.Child }),
            (this.tT = (e) => {
              for (let i of e) {
                if (
                  F.isMaskedElement(i.target) ||
                  F.isMaskedElementChild(i.target)
                )
                  for (let n = 0; n < i.addedNodes.length; n += 1) {
                    let o = i.addedNodes[n];
                    F.isMaskedElement(o) ||
                      F.isMaskedElementChild(o) ||
                      (It(o) && this.xg(o));
                  }
                for (let n = 0; n < i.removedNodes.length; n += 1) {
                  let o = i.removedNodes[n];
                  bt.isConnected(o) || this.Lg(o);
                }
              }
            }),
            (this.eT = t);
        }
        setMaskedElementSettings(t) {
          this.Ns = t;
        }
        startIdentifier() {
          this.isStarted || ((this.isStarted = !0), this.onStart());
        }
        stopIdentifier() {
          return (this.isStarted = !1), this.onStop();
        }
        start() {}
        stop() {}
        onStart() {
          var t, e, i, n;
          this.Ns ||
            (Tt.error(
              "maskedElementSettings not initialized",
              "MaskedElementIdentifier.start"
            ),
            (this.Ns = {
              elementSelector: "",
              attrSelector: "",
              attrSelectors: [],
            }));
          let {
            elementSelector: o,
            attrSelector: c,
            attrSelectors: h,
          } = this.Ns;
          ((t = this.ti) !== null && t !== void 0) || (this.ti = this.sT()),
            o.length !== 0 &&
              (((e = this.W) !== null && e !== void 0) || (this.W = this.iT()),
              this.W.observe(o)),
            c.length !== 0 &&
              (((i = this.$a) !== null && i !== void 0) ||
                (this.$a = this.rT(h)),
              this.$a.observe(c)),
            ((n = this.U) !== null && n !== void 0) ||
              (this.U = new cs(this.tT, (d, S) => S === "added" && this.nT(d))),
            this.U.observe(),
            csSetTimeout(this.eT);
        }
        onStop() {
          var t, e, i;
          this.W && (this.Lg(document), this.W.disconnect()),
            (t = this.$a) === null || t === void 0 || t.disconnect(),
            (e = this.U) === null || e === void 0 || e.disconnect(),
            (i = this.ti) === null || i === void 0 || i.disconnect();
        }
        sT() {
          return window.ResizeObserver
            ? new ResizeObserver((t) => {
                window.requestAnimationFrame(() => {
                  csArray.prototype.forEach.call(t, (e) => {
                    this.resizeObserverCallback(e);
                  });
                });
              })
            : null;
        }
        iT() {
          return new Ke((t) => {
            csArray.prototype.forEach.call(t, (e) => {
              this.oT(e) ? this.xg(e) : (this.aT(e), this.cT(e));
            });
          });
        }
        rT(t) {
          return new Ke((e) => {
            csArray.prototype.forEach.call(e, (i) => this.lT(i, t));
          });
        }
        resizeObserverCallback(t) {
          let e = t.target.getBoundingClientRect(),
            i = F.getMaskedElementDetails(t.target);
          if (
            i.state !== F.MaskedElementState.Parent ||
            (e.width === i.width && e.height === i.height)
          )
            return;
          let n = {
            state: F.MaskedElementState.Parent,
            width: e.width,
            height: e.height,
          };
          F.setMaskedElementProperty(t.target, n),
            this.produceEvent({
              type: "ResizeMaskedElement",
              target: At(t.target),
              width: e.width,
              height: e.height,
            });
        }
        cT(t) {
          !this.ti || !It(t) || zn(t) || this.ti.observe(t);
        }
        oT(t) {
          let e = csNodeparentNode.apply(t);
          return e
            ? F.isMaskedElement(e) || F.isMaskedElementChild(e)
            : Ji(t)
            ? F.isMaskedElement(t.host) || F.isMaskedElementChild(t.host)
            : !1;
        }
        nT(t) {
          (F.isMaskedElement(t.host) || F.isMaskedElementChild(t.host)) &&
            F.setMaskedElementProperty(t, this.Fa);
        }
        Lg(t) {
          _e(t, NodeFilter.SHOW_ELEMENT).visitAll((i) => {
            F.unsetMaskedElementProperty(i),
              t === document && st.counters.dom.add("size", 1);
          });
        }
        aT(t) {
          let e = t.getBoundingClientRect(),
            i = {
              state: F.MaskedElementState.Parent,
              width: e.width,
              height: e.height,
            };
          F.setMaskedElementProperty(t, i),
            this.uT(t),
            _e(t).visitAll(
              (n) => n !== t && F.setMaskedElementProperty(n, this.Fa)
            );
        }
        xg(t) {
          F.setMaskedElementProperty(t, this.Fa),
            _e(t).visitAll(
              (e) => e !== t && F.setMaskedElementProperty(e, this.Fa)
            );
        }
        uT(t) {
          var e;
          let i =
            (e = Et.getProperty(t, F.maskedAttributeProp)) !== null &&
            e !== void 0
              ? e
              : { attributes: [] };
          for (let n = 0; n < this.kg.length; n += 1) {
            let o = this.kg[n];
            csArray.prototype.indexOf.call(i.attributes, o) === -1 &&
              csArray.prototype.push.call(i.attributes, o);
          }
          i.attributes.length !== 0 && F.setMaskedAttributeProperty(t, i);
        }
        lT(t, e) {
          var i;
          let n =
            (i = Et.getProperty(t, F.maskedAttributeProp)) !== null &&
            i !== void 0
              ? i
              : { attributes: [] };
          for (let o = 0; o < t.attributes.length; o += 1) {
            let c = t.attributes[o].name;
            csArray.prototype.indexOf.call(n.attributes, c) === -1 &&
              csArray.prototype.some.call(
                e,
                (h) =>
                  csString.prototype.indexOf.call(h.attrName, c) > -1 &&
                  Pe.call(t, h.selector)
              ) &&
              csArray.prototype.push.call(n.attributes, c);
          }
          n.attributes.length !== 0 && F.setMaskedAttributeProperty(t, n);
        }
      }
      return xs([$()], s.prototype, "resizeObserverCallback", null), s;
    })(),
    md = (() => {
      class s {
        constructor() {
          (this.uh = 0),
            (this.j = !1),
            (this.Vg = "data-cs-capture"),
            (this.pi = (t) => {
              for (let e of t) {
                if (is.isWhitelistedElement(e.target))
                  for (let i = 0; i < e.addedNodes.length; i += 1) {
                    let n = e.addedNodes[i];
                    is.isWhitelistedElement(n) || (It(n) && this.Ug(n));
                  }
                for (let i = 0; i < e.removedNodes.length; i += 1) {
                  let n = e.removedNodes[i];
                  bt.isConnected(n) || this.Hg(n);
                }
              }
            });
        }
        start() {
          this.uh++, !this.j && ((this.j = !0), this.hT());
        }
        hT() {
          this.W || (this.W = new Ke((e) => pt(e, (i) => this.Ug(i))));
          let t = this.hh ? `[${this.Vg}], ${this.hh}` : `[${this.Vg}]`;
          this.W.observe(t),
            this.U ||
              (this.U = new cs(this.pi, (e, i) => i === "added" && this.dT(e))),
            this.U.observe();
        }
        stop() {
          this.j && (this.uh--, this.uh === 0 && ((this.j = !1), this.fT()));
        }
        fT() {
          this.W && (this.Hg(document), this.W.disconnect()),
            this.U && this.U.disconnect();
        }
        setWhitelistedElementsSelector(t, e = !0) {
          if (ne(t)) this.hh = t;
          else if (e) throw new ge("setCapturedElementsSelector");
        }
        getWhitelistedElementsSelector() {
          return this.hh;
        }
        Ug(t) {
          _e(t).visitAll((e) => {
            is.whitelistElement(e);
          });
        }
        dT(t) {
          is.isWhitelistedElement(t.host) && is.whitelistElement(t);
        }
        Hg(t) {
          _e(t, NodeFilter.SHOW_ELEMENT).visitAll((i) => {
            is.removeWhitelistElement(i);
          });
        }
      }
      return s;
    })(),
    tw = (() => {
      class s {
        constructor() {}
        sanitize(t) {
          return (
            Et.traverse(t, (e) => {
              if (e instanceof Ie) {
                let i = F.getMaskedAttributeDetails(e);
                e.attributes = this.oa(e, i);
                let n = F.getMaskedElementDetails(e);
                n.state === F.MaskedElementState.Parent && this.aa(e, n);
              }
            }),
            t
          );
        }
        oa(t, e) {
          return e.attributes.length === 0
            ? t.attributes
            : csArray.prototype.filter.call(
                t.attributes,
                (i) =>
                  csArray.prototype.indexOf.call(e.attributes, i.name) === -1
              );
        }
        aa(t, e) {
          let i = `width: ${e.width}px !important; height: ${e.height}px !important;`;
          (t.children = []),
            (t.shadowRoot = void 0),
            csArray.prototype.push.call(t.attributes, {
              name: "style",
              value: i,
              namespaceURI: "",
            }),
            Ie.getAttribute(t, "data-cs-mask") ||
              csArray.prototype.push.call(t.attributes, {
                name: "data-cs-mask",
                value: "",
                namespaceURI: "",
              });
        }
      }
      return s;
    })(),
    yd = (() => {
      let s;
      return (
        (function (r) {
          function t() {
            let i =
                navigator.userAgent + navigator.language + navigator.platform,
              n = csString.prototype.slice.call(e(i).toString(16), -4),
              o = new csDate().getTime(),
              c = "xxxxxxxx-hhhh-axxx-yxxx-xxxxxxxxxxxx".replace(
                /[xy]/g,
                (h) => {
                  let d = (o + Math.random() * 16) % 16 | 0;
                  return (
                    (o = Math.floor(o / 16)),
                    (h === "x" ? d : (d & 7) | 8).toString(16)
                  );
                }
              );
            return csString.prototype.replace.call(c, "hhhh", n);
          }
          r.generate = t;
          function e(i) {
            let n = 0;
            for (let o = 0; o < i.length; o += 1)
              n =
                csString.prototype.charCodeAt.call(i, o) +
                (n << 6) +
                (n << 16) -
                n;
            return Math.abs(n);
          }
        })(s || (s = {})),
        s
      );
    })(),
    ew = ["event"],
    Ed = (() => {
      class s {
        constructor(t, e, i, n, o, c, h, d, S) {
          (this.S = t),
            (this.Me = e),
            (this.E = i),
            (this.D = n),
            (this._t = o),
            (this.N = c),
            (this.O = h),
            (this.ot = d),
            (this.J = S),
            (this.jg = new G_()),
            (this.pT = new W_(this.E, this.D, this._t));
        }
        init() {
          this.S.register(ew, (t) => {
            this.jg.triggerHotjarEvent(t);
          }),
            V_({ uuid: yd.generate }),
            Y_(this.pT, this.N, this.gT());
        }
        start() {
          this.mT(), this.jg.start();
        }
        mT() {
          $_(this.Me).activate();
        }
        gT() {
          let t = new gd(() => {}),
            e = new md(),
            i = this.ot.shouldUseAnonymization(),
            n = new tw(),
            o = new $h(
              i,
              this.E.whitelistedAttributes,
              this.O,
              this.E.anonymizeDigits
            );
          return new Z_([n, o], this.E, t, this.J, e);
        }
      }
      return s;
    })(),
    yu = 250,
    Za = class {
      constructor(r) {
        this.z = r;
      }
      pushPageView(r) {
        window._uxa.push(["trackPageview", r]);
      }
      pushDynamicVariable(r, t) {
        window._uxa.push(["trackDynamicVariable", { key: r, value: t }]);
      }
      pushInternalEvents(r) {
        csArray.prototype.forEach.call(r, ({ key: t, val: e }) =>
          this.pushDynamicVariable(t, e)
        );
      }
      pushExternalEvents(r) {
        var t;
        if (!this.z) return;
        let e = this.yT(r);
        for (let i = 0; i < e.length; i += 1) {
          let n = this.ET(e[i]);
          n.length && n.length <= yu
            ? (hj.log.debug(`Sending event: tag_recording:${n}`),
              (t = this.z) === null || t === void 0 || t.emitExternalEvent(n))
            : J.warn(
                `Invalid recording tag: " ${n} ", should have length 1.. ${yu} characters, was ${n.length}.`
              );
        }
      }
      ST(r) {
        let t = typeof r == "string";
        return !!(
          Re.mayHaveNumberSequence(r.toString()) ||
          (t &&
            csString.prototype.indexOf.call(r, "@") > -1 &&
            Re.mayHaveEmail(r)) ||
          (t && Re.mayHaveIPAddress(r))
        );
      }
      yT(r) {
        let t = /^[a-zA-Z0-9 _\-.:/]*$/;
        return r
          ? csArray.prototype.filter.call(r, (e) =>
              e
                ? t.test(e.toString())
                  ? this.ST(e)
                    ? (hj.log.debug(
                        "Tag " +
                          e +
                          " has been removed due to possible PII information included"
                      ),
                      !1)
                    : !0
                  : (hj.log.debug(
                      "Tag " +
                        e +
                        " has been removed due to having invalid characters"
                    ),
                    !1)
                : !1
            )
          : [];
      }
      ET(r) {
        return typeof r == "string"
          ? csString.prototype.replace.call(r, /^\s+|\s+$/gm, "")
          : "";
      }
    },
    Sd = Za,
    sw = (() => {
      class s {
        constructor() {}
        onLoad(t) {
          this.lr = t;
        }
        onLoadCallbackExecute() {
          this.lr();
        }
        start() {
          let t = this.onLoadCallbackExecute.bind(this);
          this.vT(t);
        }
        vT(t) {
          document.readyState === "complete" ||
          (document.readyState !== "loading" &&
            !document.documentElement.doScroll)
            ? csSetTimeout(t)
            : (document.addEventListener("DOMContentLoaded", e),
              window.addEventListener("load", e));
          function e() {
            document.removeEventListener("DOMContentLoaded", e),
              window.removeEventListener("load", e),
              t();
          }
        }
      }
      return Z([$("onLoad")], s.prototype, "onLoadCallbackExecute", null), s;
    })(),
    iw = "csq:start-hotjar",
    tr = (() => {
      let s;
      return (
        (function (r) {
          r.HJ_DUAL_COLLECT = "one_app_tag_dc";
        })(s || (s = {})),
        s
      );
    })(),
    $n = (() => {
      class s {
        static set(t, e) {
          s.Bg[t] = e;
        }
        static isEnabled(t) {
          return s.Bg[t] === !0;
        }
      }
      return (s.Bg = { [tr.HJ_DUAL_COLLECT]: !1 }), s;
    })();
  function vd() {
    return window.hjSiteSettings
      ? (window.hjSiteSettings.features == null
          ? void 0
          : csArray.prototype.indexOf.call(
              window.hjSiteSettings.features,
              tr.HJ_DUAL_COLLECT
            )) > -1
      : !1;
  }
  function Eu(s) {
    return vd() ? (s ? !_c(s) && !fh(s) : !0) : !1;
  }
  function rw(s) {
    return !vd() || !s ? !1 : _c(s) || fh(s);
  }
  var nw = (() => {
      class s extends yc {
        constructor() {
          super("");
        }
        send() {}
      }
      return s;
    })(),
    ow = (() => {
      class s extends se {
        constructor(t, e, i, n, o) {
          super(),
            (this.E = t),
            (this.w = e),
            (this.z = i),
            (this.Ci = n),
            (this.A = o),
            (this.ws = null);
        }
        init() {
          this.bl();
        }
        onStart(t = We.Natural) {
          switch (t) {
            case We.Natural:
              this.Tl();
              break;
            case We.Artificial:
              this.Rl();
              break;
            case We.Renewal:
              this.Cl();
              break;
          }
        }
        onStop() {}
        triggerArtificialPageView(t, e) {
          this.isStarted
            ? (this.w.emitArtificialPageViewEnd(), this.Ii(t, e))
            : (Ct(t) && this.A.overridePath(t, e),
              this.z.emitTargetingRulesArtificialPageview(this.A.getUrl()),
              this.E.hasTargetingRules() && this.A.cleanupOverrideLifespan());
        }
        Tl() {
          let t = this.A.getAnonymizedUrl();
          this.w.emitBeforeNaturalPageView(t),
            this.Ci.send(),
            this.A.cleanupOverrideLifespan(),
            this.w.emitAfterNaturalPageView(Ps.Natural),
            (this.ws = t);
        }
        Cl() {
          let t = this.A.getAnonymizedUrl();
          this.w.emitBeforeNaturalPageView(t),
            this.Ci.send(),
            this.w.emitAfterNaturalPageView(Ps.Renewal),
            (this.ws = t);
        }
        Ii(t, e, i = !1) {
          Ct(t) && this.A.overridePath(t, e);
          let n = this.A.getAnonymizedUrl();
          this.w.emitBeforeArtificialPageView(this.ws, n),
            this.Ci.send(),
            this.A.cleanupOverrideLifespan(),
            this.w.emitAfterArtificialPageView(i),
            (this.ws = n);
        }
        Rl() {
          this.Ii(null, void 0, !0);
        }
        bl() {
          window.addEventListener("pageshow", (t) => {
            this.isStarted &&
              t.persisted &&
              (this.w.emitArtificialPageViewEnd(), this.Ii());
          });
        }
      }
      return s;
    })(),
    aw = (() => {
      class s {
        constructor(t, e, i, n, o) {
          (this.E = t), (this.S = e), (this.w = i), (this.z = n), (this.A = o);
        }
        init() {
          let t = new nw();
          (this.fh = new ow(this.E, this.w, this.z, t, this.A)),
            this.fh.init(),
            Ph(this.S, this.fh, this.A);
        }
        start() {
          this.fh.start();
        }
      }
      return s;
    })(),
    cw = (() => {
      class s {
        constructor(t, e, i, n, o, c, h, d, S, y, _) {
          (this.E = t),
            (this.w = e),
            (this.S = i),
            (this.N = n),
            (this.A = o),
            (this.z = c),
            (this.O = h),
            (this.J = d),
            (this.D = S),
            (this._t = y),
            (this.bt = _);
        }
        start() {
          if (this._T()) {
            this.ut(),
              this.J.init(),
              (this.$g = new aw(this.E, this.S, this.w, this.z, this.A)),
              this.$g.init();
            let t = new qn();
            if (
              ((this.ot = new fd(this.E, this.A, t, this.bt)),
              this.ot.init(),
              !$n.isEnabled(tr.HJ_DUAL_COLLECT))
            ) {
              let i = new Sd(this.z),
                n = new Ed(
                  this.S,
                  i,
                  this.E,
                  this.D,
                  this._t,
                  this.N,
                  this.O,
                  this.ot,
                  this.J
                );
              n.init(),
                n.start(),
                (this.Fg = new pd(this.E, this.N, this.A, i)),
                this.Fg.init(),
                this.w.addListener(this.Fg);
            }
            let e = new sw();
            e.onLoad(() => {
              this.w.emitStartNoTrackingMode(), this.S.start(), this.$g.start();
            }),
              e.start();
          }
        }
        _T() {
          var t;
          return (
            ((t = this.E.voc) === null || t === void 0 ? void 0 : t.enabled) ||
            this.E.vocData
          );
        }
        ut() {
          this.S.register(Kn, (t) => {
            this.J.setMaskedElementSettingsFromCommand(t);
          });
        }
      }
      return s;
    })();
  var lw = (() => {
      class s {
        constructor(t, e) {
          (this.Q = t), (this.Tt = e), (this.ph = !1);
        }
        getRequestParameters() {
          return { dr: this.get() };
        }
        addUrlMaskingPattern(t) {
          this.Tt.addUrlMaskingPattern(t);
        }
        enableRemoveQueryString() {
          this.ph = !0;
        }
        disableRemoveQueryString() {
          this.ph = !1;
        }
        get() {
          let t = this.ph ? this.Q.removeQueryString(this.zg()) : this.zg();
          return this.Q.anonymizeUrl(t, {
            maskingPatterns: this.Tt.getUrlMaskingPatterns(),
          });
        }
        set(t) {
          this.qg = t;
        }
        zg() {
          if (this.qg) return this.qg;
          let t = "";
          try {
            t = window.top.document.referrer;
          } catch {
            if (window.parent)
              try {
                t = window.parent.document.referrer;
              } catch {
                t = "";
              }
          }
          return (
            t === "" && (t = document.referrer),
            typeof t != "string" && (t = ""),
            t
          );
        }
      }
      return s;
    })(),
    fa = (() => {
      let s;
      return (
        (function (r) {
          (r[(r.page = 1)] = "page"),
            (r[(r.onNextPageviewOnly = 2)] = "onNextPageviewOnly");
        })(s || (s = {})),
        s
      );
    })(),
    uw = (() => {
      class s {
        constructor(t, e) {
          (this.Ht = t), (this.Q = e), (this.CT = 10);
        }
        overridePath(t, e) {
          if (t === "") {
            this.gi = void 0;
            return;
          }
          let i = this.Wg(e);
          i && (this.gh = i), (this.gi = e ? this.Yg(t, e) : t);
        }
        overrideQuery(t, e) {
          let i = this.Wg(e);
          i && (this.mh = i), (this.no = e ? this.Yg(t, e) : t);
        }
        computeOverriddenUrl(t) {
          return this.IT(t) ? this.getAnonymizedUrl() : t;
        }
        PT(t) {
          return (typeof t == "string" || typeof t == "number") && t in fa;
        }
        IT(t) {
          let e = this.qo(this.Ht.href);
          return this.qo(t) === e;
        }
        qo(t) {
          return Rp(t, "/") ? csString.prototype.slice.call(t, 0, -1) : t;
        }
        Wg(t) {
          return ft(t == null ? void 0 : t.lifespan) &&
            this.PT(t == null ? void 0 : t.lifespan)
            ? t == null
              ? void 0
              : t.lifespan
            : null;
        }
        OT() {
          return this.gh && this.gh in fa;
        }
        NT() {
          return this.mh && this.mh in fa;
        }
        cleanupOverrideLifespan() {
          this.OT() && ((this.gi = void 0), (this.gh = void 0)),
            this.NT() && ((this.no = void 0), (this.mh = void 0));
        }
        getAnonymizedUrl() {
          let t = Cl(this.Ht, this.gi, this.no);
          return this.Q.anonymizeUrl(t);
        }
        getUrl() {
          return Cl(this.Ht, this.gi, this.no);
        }
        getAnonymizedPathAndQuery() {
          let t = ft(this.gi) ? ka(this.gi) : this.Ht.pathname,
            e = ft(this.no) ? vh(this.no) : this.Ht.search;
          return this.Q.anonymizeUrl(t + e);
        }
        getPath() {
          return ft(this.gi) ? ka(this.gi) : this.Ht.pathname;
        }
        getUrlProtocol() {
          return this.Ht.protocol;
        }
        getRequestParameters() {
          return { url: this.getAnonymizedUrl() };
        }
        Yg(t, e) {
          return this.MT(e) ? this.DT(t) : this.kT(e) ? this.xT(t) : t;
        }
        kT(t) {
          return !!t.decodeURI;
        }
        xT(t) {
          return this.Xg(t, 1, !1);
        }
        MT(t) {
          return !!t.decodeURIDeep;
        }
        DT(t) {
          return this.Xg(t, this.CT, !0);
        }
        Xg(t, e, i) {
          let n = t;
          for (let o = 0; o < e; o++)
            try {
              let c = window.decodeURI(n);
              if (c === n) return n;
              n = c;
            } catch {
              return n;
            }
          return i && J.warn(`decodeURIDeep limit reached: ${n}`), n;
        }
      }
      return s;
    })(),
    hw = (() => {
      class s {
        constructor(t, e) {
          (this.S = t), (this.ze = e);
        }
        init() {
          this.S.register(["debugEvents"], (t) => {
            typeof t == "boolean" &&
              this.ze.updateDynamicFields("emitDebugEvents", t);
          });
        }
      }
      return s;
    })();
  var dw = 1024,
    fw = 512,
    pa = 1024,
    ga = "||",
    pw = (() => {
      let s;
      return (
        (function (r) {
          function t(c, h) {
            return j(c) &&
              csString.prototype.indexOf.call(
                csString.prototype.toLowerCase.call(c),
                Cs.CHAMELEON
              ) !== -1
              ? Cs.CHAMELEON
              : h;
          }
          r.handleCustomEventCommandMisuse = t;
          function e(c, h, d) {
            let S = i(d);
            return {
              type: at.CUSTOM_EVENT,
              ts: 0,
              customEventName: Jt.truncate(c, dw, Jt.ELLIPSIS),
              sourceLibrary: yg(h) ? h : Cs.WEB,
              ...(wa(S) ? {} : { properties: S }),
            };
          }
          r.buildCustomEvent = e;
          function i(c) {
            let h = {};
            for (let d in c) {
              if (d.length > fw) continue;
              let S = c[d];
              if (Ht(S) || Cn(S)) h[d] = csString(S);
              else if (o(S)) h[d] = Jt.truncate(S, pa, Jt.ELLIPSIS);
              else if (Xd(S)) {
                let y = n(S);
                y !== "" && (h[d] = y);
              }
            }
            return h;
          }
          r.sanitizeCustomEventProperties = i;
          function n(c) {
            let h = "";
            for (let d = 0; d < c.length; d++) {
              let S = c[d];
              if (!Ht(S) && !Cn(S) && !o(S)) continue;
              let y = csString(S);
              if (h === "") h = Jt.truncate(y, pa, Jt.ELLIPSIS);
              else if (h.length + ga.length + y.length <= pa) h += ga + y;
              else break;
            }
            return h;
          }
          function o(c) {
            return j(c) && !ic(c) && !csString.prototype.includes.call(c, ga);
          }
        })(s || (s = {})),
        s
      );
    })();
  var Su = (() => {
    class s {
      constructor(t, e, i, n) {
        (this.E = t), (this.N = e), (this.C = i), (this.Ft = n);
      }
      getRequestParameters() {
        let t = { ...gc(), ...this.E.getRequestParameters() },
          e = this.C.getSession();
        e && (t.pn = `${e.pageNumber}`);
        let i = this.N.getVisitor();
        if (
          (i && ((t.sn = `${i.visitsCount}`), (t.uu = `${i.id}`)),
          this.LT(t),
          window.heap && !this.E.isCsCrosswritingHeap())
        )
          try {
            (t.happid = window.heap.appid),
              window.heap.getSessionId && (t.hsid = window.heap.getSessionId()),
              window.heap.getUserId
                ? (t.huu = window.heap.getUserId())
                : window.heap.userId && (t.huu = window.heap.userId),
              window.heap.getPageviewMetadata &&
                (t.hpvid = window.heap.getPageviewMetadata().pageviewId);
          } catch {
            delete t.happid, delete t.hsid, delete t.huu, delete t.hpvid;
          }
        return t;
      }
      LT(t) {
        if (!this.Ft) return;
        let e = this.Ft.getSharedContext();
        e &&
          ((t.happid = e.happid),
          (t.t = e.pageTitle),
          (t.fvt = csString(e.firstViewTime)),
          (t.fvurl = e.firstViewUrl),
          e.previousViewUrl && (t.pvurl = e.previousViewUrl),
          (t.url = e.currentViewUrl),
          e.sessionReferrer && (t.fpvurl = e.sessionReferrer),
          (t.sw = csString(e.screenWidth)),
          (t.sh = csString(e.screenHeight)),
          (t.cvt = csString(e.currentViewTime)),
          e.encryptedIdentity && (t.i = e.encryptedIdentity),
          e.cvarp && (t.cvarp = e.cvarp));
      }
    }
    return s;
  })();
  function gw() {
    let s = "[data-cs-mask]",
      r = "#c1_card_info_id",
      t = ".ctHidden",
      e = [
        "[data-heap-redact-text]",
        "[heap-ignore]",
        "[data-heap-ignore]",
        "[data-heap-redact-attributes]",
      ],
      i = ["[data-hj-suppress]", ".data-hj-suppress", "[data-hj-masked]"];
    return [s, r, t, ...e, ...i];
  }
  function mw() {
    return [
      {
        selector: ".ctHidden,input:not([type=button]):not([type=submit])",
        attrName: "value",
      },
    ];
  }
  var yw = (() => {
      class s {
        constructor(t) {
          (this.qc = t),
            (this.VT = {
              PIISelectors: ["picture", "img", "video", "audio"],
              Attributes: [],
            }),
            (this.Ns = {
              elementSelector: "",
              attrSelector: "",
              attrSelectors: [],
            });
          let e = { PIISelectors: gw(), Attributes: mw() };
          this.Ns = F.getComputedSelectorSettings(e, this.Ns);
        }
        init() {
          this.UT();
        }
        setMaskedElementSettingsFromCommand(t) {
          if (((t = F.sanitizeSelectorUserInput(t)), !F.isSelectorUserInput(t)))
            throw new ge(Kn[0]);
          this.Sh(t);
        }
        setMaskedElementSettingsFromParent(t) {
          let e = {
            PIISelectors: csString.prototype.split.call(t.elementSelector, ","),
            Attributes: t.attrSelectors,
          };
          this.Sh(e);
        }
        getMaskedElementSettings(t) {
          return t ? this.Jg(this.VT) : this.Ns;
        }
        UT() {
          var t, e, i, n, o, c, h;
          let d = { PIISelectors: [], Attributes: [] };
          ((i =
            (e =
              (t = window == null ? void 0 : window.ClickTaleSettings) ===
                null || t === void 0
                ? void 0
                : t.DOM) === null || e === void 0
              ? void 0
              : e.PII) === null || i === void 0
            ? void 0
            : i.Text) instanceof Array &&
            d.PIISelectors.push(...window.ClickTaleSettings.DOM.PII.Text),
            ((c =
              (o =
                (n = window == null ? void 0 : window.ClickTaleSettings) ===
                  null || n === void 0
                  ? void 0
                  : n.DOM) === null || o === void 0
                ? void 0
                : o.PII) === null || c === void 0
              ? void 0
              : c.Attributes) instanceof Array &&
              window.ClickTaleSettings.DOM.PII.Attributes.forEach((S) => {
                j(S.attr) &&
                  j(S.rule) &&
                  d.Attributes.push({ selector: S.rule, attrName: S.attr });
              }),
            (h = this.qc) === null ||
              h === void 0 ||
              h.markClicktalePIIInUse(d),
            this.Sh(d);
        }
        Sh(t) {
          this.Ns = this.Jg(t);
        }
        Jg(t) {
          return F.getComputedSelectorSettings(t, this.Ns);
        }
      }
      return s;
    })(),
    Ew = 60 * 1e3,
    Sw = 30 * 1e3,
    vw = (() => {
      class s {
        constructor(t, e) {
          (this.C = t),
            (this.N = e),
            (this.vh = !1),
            (this.HT = Wn(() => this.C.refreshSession(), Sw));
        }
        onSessionExpired(t) {
          this.jT = t;
        }
        isSessionValid() {
          return this.vh
            ? !0
            : !(
                !this.C.hasValidSession() ||
                (this.C.pollCacheRefreshEvent() && this.N.isSessionRenewed())
              );
        }
        isCurrentPageviewValid() {
          let t = this.C.hasValidSession();
          return this.C.pollCacheRefreshEvent(!1)
            ? !this.N.isSessionRenewed()
            : t;
        }
        refreshSession() {
          this.isSessionValid()
            ? this.HT()
            : this.BT() && ((this.Qg = q.now()), this.renewSession(!1));
        }
        renewSession(t) {
          (this.vh = !0), this.jT(t), (this.vh = !1);
        }
        BT() {
          return !document.hidden && (!ft(this.Qg) || q.now() - this.Qg > Ew);
        }
      }
      return s;
    })(),
    _w = (() => {
      class s {
        constructor() {
          (this.W = null),
            (this.U = null),
            (this.j = !1),
            (this.pi = (t) => {
              for (let e of t)
                if (Ks.isEditableNode(e.target))
                  for (let i = 0; i < e.addedNodes.length; i += 1) {
                    let n = e.addedNodes[i];
                    if (!Ks.isEditableNode(n)) {
                      if (Nn(n) || lf(n)) {
                        Ks.markEditableNode(n);
                        continue;
                      }
                      It(n) && this.Zg(n);
                    }
                  }
            });
        }
        start() {
          this.j ||
            ((this.j = !0),
            (this.W = new Ke((t) =>
              pt(t, (e) => {
                this.Zg(e);
              })
            )),
            this.W.observe("[contenteditable]"),
            (this.U = new cs(this.pi, (t, e) => e === "added" && this.$T(t))),
            this.U.observe());
        }
        stop() {
          var t, e;
          this.j &&
            ((this.j = !1),
            (t = this.W) === null || t === void 0 || t.disconnect(),
            (this.W = null),
            (e = this.U) === null || e === void 0 || e.disconnect(),
            (this.U = null));
        }
        Zg(t) {
          _e(t).visitAll((e) => {
            Ks.markEditableNode(e);
          });
        }
        $T(t) {
          Ks.isEditableNode(t.host) && Ks.markEditableNode(t);
        }
      }
      return s;
    })();
  var _d = (() => {
      class s {
        constructor() {
          this.subscriptions = {};
        }
        subscribe(t, e) {
          (this.subscriptions[t] = e),
            Object.keys(this.subscriptions).length === 1 &&
              this.onStartTracking();
        }
        unsubscribe(t) {
          delete this.subscriptions[t],
            Object.keys(this.subscriptions).length === 0 &&
              this.onStopTracking();
        }
      }
      return s;
    })(),
    ww = (() => {
      class s extends _d {
        constructor(t) {
          super(),
            (this.GT = t),
            (this.ii = [
              {
                boundElement: document,
                type: "touchstart",
                listener: (e) => this.X(e),
              },
              {
                boundElement: document,
                type: "touchmove",
                listener: (e) => this.X(e),
              },
              {
                boundElement: document,
                type: "touchend",
                listener: (e) => this.X(e),
              },
            ]),
            (this.oo = new Fa()),
            this.oo.onGesture((e, i) => this._u(e, i));
        }
        _u(t, e) {
          for (let i in this.subscriptions) {
            let n = this.subscriptions[i];
            n(t, e);
          }
        }
        onStartTracking() {
          this.canDetectGesture() &&
            csArray.prototype.forEach.call(this.ii, (t) => Mt(t));
        }
        onStopTracking() {
          this.canDetectGesture() &&
            csArray.prototype.forEach.call(this.ii, (t) => Dt(t));
        }
        canDetectGesture() {
          return typeof devicePixelRatio != "undefined";
        }
        X(t) {
          this.GT.tryToExecute("process gesture event", () => {
            if (this.oo.isValidTouchEvent(t))
              switch (t.type) {
                case "touchstart":
                  this.oo.processActionDown(t);
                  break;
                case "touchmove":
                  this.oo.processActionMove();
                  break;
                case "touchend":
                  this.oo.processActionUp(t);
                  break;
              }
          })();
        }
        static isSwipe(t) {
          return t.type === zt.FLICK || t.type === zt.DRAG;
        }
      }
      return s;
    })();
  var Aw = (() => {
      class s {
        constructor(t) {
          this.gt = t;
        }
        on(t, e) {
          return (i) => {
            this.gt.hasValidEventTarget(i) && this.f0(i, t) && e(i);
          };
        }
        f0(t, e) {
          let i = Gt(t);
          return Pe.call(i, e);
        }
        isMatchesSelectorSupported() {
          return !!Pe;
        }
      }
      return s;
    })(),
    bw = (() => {
      class s extends se {
        constructor() {
          super(), (this.am = 0);
        }
        onStart() {
          J.isPerfLoggingActive() &&
            (this.co = window.csSetInterval(() => this.cm(), s.p0));
        }
        onStop() {
          J.isPerfLoggingActive() && (this.cm(), csClearInterval(this.co));
        }
        cm() {
          this.am >= s.g0 ||
            (st.counters.methodPerformance.flush() && this.am++);
        }
      }
      return (s.p0 = 5e3), (s.g0 = 5), s;
    })(),
    Tw = (() => {
      class s {
        constructor() {}
        init() {
          this.qa = new bw();
        }
        onStartTracking() {
          this.qa.start();
        }
        onOptout() {
          this.qa.stop();
        }
        onArtificialPageViewEnd(t) {
          t && this.qa.stop();
        }
        onAfterArtificialPageView(t) {
          t && this.qa.start();
        }
      }
      return s;
    })();
  var pe = (() => {
      class s {
        static buildFromCustomEvent(t, e) {
          return this.Em(null, t, e);
        }
        static buildFromAnalysisEvent(t, e, i) {
          return this.Em(t, e, i);
        }
        static Em(t, e, i) {
          return csArray.prototype.reduce.call(
            i,
            (n, o) => o.enhanceAnalysisEvent(t, n),
            e
          );
        }
      }
      return s;
    })(),
    Rw = (() => {
      class s extends se {
        constructor(t, e, i, n, o, c, h, d, S, y, _, w, T, M, x, P, N) {
          super(),
            (this.E = t),
            (this.yi = e),
            (this._e = i),
            (this.Lr = n),
            (this.Ph = o),
            (this.Qe = c),
            (this.ke = h),
            (this.Oh = d),
            (this.V = S),
            (this.ae = y),
            (this.Nh = _),
            (this.Xe = w),
            (this.Y = T),
            (this.zt = M),
            (this.Ka = x),
            (this.Ms = P),
            (this.Ds = N),
            (this.Rr = new Qh()),
            (this.Ja = !1),
            (this.Ji = []);
        }
        init() {
          var t, e, i;
          this.yi.onEvent((n) => this.ie(n)),
            this._e.onEvent((n) => this.ie(n)),
            this.Lr.onEvent(() => {
              let n = this.Lr.getRequestParameters();
              this.Y.setQueryParams(n), this.ke.setQueryParams(n);
            }),
            this.Nh.onEvent((n) => this.ks(n)),
            this.Mh(),
            (t = this.Ka) === null ||
              t === void 0 ||
              t.onEvent((n) => this.ie(n)),
            (e = this.Ms) === null ||
              e === void 0 ||
              e.onEvent((n) => this.ie(n)),
            (i = this.Ds) === null ||
              i === void 0 ||
              i.onEvent((n) => this.ie(n)),
            this.H0();
        }
        H0() {
          this.ke.onBeaconSuccess(() => {
            this.Qe.clearEvents();
          }),
            this.ke.onBeaconFailure((t) => {
              this.j0(t);
            });
        }
        initStates() {
          let t = this.Oh.getRequestParameters(),
            e = this.Ph.getRequestParameters(),
            i = this.Lr.getRequestParameters();
          this.Y.setQueryParams(t),
            this.Y.setQueryParams(e),
            this.Y.setQueryParams(i),
            this.ke.setQueryParams(t),
            this.ke.setQueryParams(e),
            this.ke.setQueryParams(i),
            this.wl();
        }
        clearStates(t) {
          var e, i;
          this.yi.flushPendingDebouncedListeners(),
            (e = this.Ms) === null ||
              e === void 0 ||
              e.flushPendingKeyboardNavigationEvent(),
            (i = this.Ds) === null ||
              i === void 0 ||
              i.flushPendingTextHighlightEvent(),
            t ? (this.Dh(), this.sendLastMessageBeacon()) : this.sendEvents(),
            this.Lr.reset(),
            this.Y.removeQueryParams();
        }
        onStart(t) {
          var e, i, n;
          this.Xe.start(),
            this.yi.start(),
            this.Lr.start(),
            this._e.start(),
            (e = this.Ka) === null || e === void 0 || e.start(),
            (i = this.Ds) === null || i === void 0 || i.start(),
            t || this.Nh.start(),
            (n = this.Ms) === null || n === void 0 || n.start(),
            csArray.prototype.forEach.call(this.Ji, (o) => {
              this.ks(o);
            }),
            (this.Ji = []);
        }
        collectInitialEvents() {
          var t;
          (t = this.Ka) === null || t === void 0 || t.collectInitialEvents();
        }
        onIframeAnalysisBrowserEvent(t) {
          this.ks(t);
        }
        onIframeAnalysisUserEvent(t) {
          this.ie(t);
        }
        onExternalEvent(t) {
          this.X(t);
        }
        ks(t) {
          this.isStarted && this.V.isCurrentPageviewValid() && this.X(t);
        }
        ie(t) {
          this.isStarted &&
            (this.V.refreshSession(), this.V.isSessionValid() && this.X(t));
        }
        X(t) {
          this.Qe.addEvent(this.B0(t)),
            this.Qe.isFull() && this.sendEvents(),
            this.E.emitDebugEvents &&
              this.Rr.emit("analysisEvent", { ...t, typeName: at[t.type] });
        }
        B0(t) {
          return (t.ts = this.Ri()), t;
        }
        Dh() {
          this.ke.setQueryParams({ hlm: "true" }), (this.Ja = !0);
        }
        sendLastMessageBeacon() {
          this.ke.removeQueryParams(["i"]),
            this.ke.setQueryParams(this.Oh.getRequestParameters()),
            this.ke.setQueryParams(this.Ph.getRequestParameters()),
            this.ke.send(this.Qe.stringifyEvents()),
            this.ke.removeQueryParams(["hlm"]),
            (this.Ja = !1);
        }
        sendEvents() {
          this.Qe.isEmpty() ||
            (this.ke.removeQueryParams(["i"]),
            this.Y.setQueryParams(this.Oh.getRequestParameters()),
            this.Y.setQueryParams(this.Ph.getRequestParameters()),
            this.Y.send(this.Qe.getEvents()),
            this.Qe.clearEvents());
        }
        onStop() {
          var t, e, i;
          this.Xe.stop(),
            this.yi.stop(),
            this.Lr.stop(),
            this._e.stop(),
            this.Nh.stop(),
            (t = this.Ka) === null || t === void 0 || t.stop(),
            (e = this.Ms) === null || e === void 0 || e.stop(),
            (i = this.Ds) === null || i === void 0 || i.stop(),
            this.Qe.empty();
        }
        wl() {
          this.cs = q.now();
        }
        Ri() {
          return q.now() - this.cs;
        }
        Mh() {
          this.Xe.onEvent((t) => {
            var e, i;
            t !== Ve.Visible &&
              ((e = this.Ms) === null ||
                e === void 0 ||
                e.flushPendingKeyboardNavigationEvent(),
              (i = this.Ds) === null ||
                i === void 0 ||
                i.flushPendingTextHighlightEvent(),
              t === Ve.PagehideVisible
                ? this.Dh()
                : t === Ve.PagehideHidden
                ? (this.Dh(), this.sendLastMessageBeacon())
                : (!this.Qe.isEmpty() || this.Ja) &&
                  this.sendLastMessageBeacon());
          });
        }
        j0(t) {
          try {
            (!this.Qe.isEmpty() || this.Ja) &&
              this.ae.save({
                requestParameters: t,
                events: this.Qe.getEvents(),
              });
          } catch {}
        }
        pushCustomEvent(t, e, i) {
          if (!(j(t) && !ic(t)) || (i !== void 0 && !dt(i)))
            throw new ge(tc[0]);
          let n = pw.buildCustomEvent(t, e, i),
            o = pe.buildFromCustomEvent(n, this.zt);
          this.isStarted ? this.ks(o) : csArray.prototype.push.call(this.Ji, o);
        }
      }
      return s;
    })(),
    Te = (() => {
      let s;
      return (
        (function (r) {
          (r[(r.ANONYMIZED = 0)] = "ANONYMIZED"),
            (r[(r.CAPTURED = 1)] = "CAPTURED"),
            (r[(r.MASKED = 2)] = "MASKED"),
            (r[(r.ENCRYPTED = 3)] = "ENCRYPTED");
        })(s || (s = {})),
        s
      );
    })();
  var Cw = (() => {
    class s extends Yr {
      constructor() {
        super(...arguments),
          (this.supportedEventTypes = [at.CHANGE]),
          (this.J0 = [
            "text",
            "email",
            "number",
            "search",
            "tel",
            "url",
            "password",
          ]);
      }
      baseEnhanceAnalysisEvent(t, e) {
        let i = Gt(t);
        return (
          Gn(i) &&
            csArray.prototype.indexOf.call(this.J0, i.type) >= 0 &&
            (e.isBlank = i.value === ""),
          e
        );
      }
    }
    return s;
  })();
  var wd = (() => {
      class s extends Yr {
        constructor(t) {
          super(),
            (this.gt = t),
            (this.supportedEventTypes = [
              at.MOUSEDOWN,
              at.MOUSEUP,
              at.CLICK,
              at.MOUSEOVER,
              at.TAP,
              at.DRAG,
              at.FLICK,
              at.SUBMIT,
              at.CHANGE,
            ]);
        }
        baseEnhanceAnalysisEvent(t, e) {
          return e.tgt || (e.tgt = this.gt.getEventTargetPath(t)), e;
        }
      }
      return s;
    })(),
    vu = 65535,
    Iw = (() => {
      let s;
      return (
        (function (r) {
          function t(e) {
            let i = Gt(e);
            if (
              !i ||
              !It(i) ||
              !Xe(i.getBoundingClientRect) ||
              !Ct(e.pageX) ||
              !Ct(e.pageY)
            )
              return { xRel: -1, yRel: -1, valid: !1 };
            let n = i.getBoundingClientRect(),
              o = e.pageX - n.left - qt.windowOffsetX(),
              c = e.pageY - n.top - qt.windowOffsetY();
            i !== document.documentElement &&
              ((o += i.scrollLeft), (c += i.scrollTop));
            let h = Math.max(i.scrollWidth, n.width),
              d = Math.max(i.scrollHeight, n.height),
              S = Math.round((o / h) * vu),
              y = Math.round((c / d) * vu);
            return { xRel: S, yRel: y, valid: !0 };
          }
          r.getRelativePosition = t;
        })(s || (s = {})),
        s
      );
    })(),
    Pw = (() => {
      class s extends Yr {
        constructor(t, e) {
          super(),
            (this.ze = t),
            (this.gt = e),
            (this.supportedEventTypes = [at.MOUSEMOVE, at.CLICK]),
            (this.xh = "");
        }
        baseEnhanceAnalysisEvent(t, e) {
          let { valid: i, xRel: n, yRel: o } = Iw.getRelativePosition(t);
          if (i) {
            let c = this.gt.getEventTargetPath(t);
            c !== ti.INVALID_ELEMENT &&
              ((e.xRel = n),
              (e.yRel = o),
              e.type === at.MOUSEMOVE &&
                (c !== this.xh || this.ze.iframesTracking
                  ? ((this.xh = c),
                    (e.tgtHM = c),
                    this.ze.isChild || (e.tgtHMH = hh(e.tgtHM)))
                  : (e.tgtHM = "")));
          } else e.type === at.MOUSEMOVE && (this.xh = "");
          return e;
        }
      }
      return s;
    })(),
    Ad = (() => {
      class s extends Yr {
        constructor(t, e) {
          super(),
            (this.gt = t),
            (this.Gt = e),
            (this.supportedEventTypes = [
              at.CLICK,
              at.SUBMIT,
              at.CHANGE,
              at.TAP,
            ]);
        }
        baseEnhanceAnalysisEvent(t, e) {
          let i = this.Gt.getSensitiveStatus().useAnonymization,
            { path: n, hierarchy: o } = this.gt.getEventTargetPathAndHierarchy(
              t,
              i
            );
          return (e.tgt = n), (e.hrchy = o), e;
        }
      }
      return s;
    })(),
    _u = 100,
    bd = (() => {
      class s extends Yr {
        constructor(t, e, i) {
          super(),
            (this.E = t),
            (this.Gt = e),
            (this.O = i),
            (this.supportedEventTypes = [at.TAP, at.CLICK, at.SUBMIT]);
        }
        Q0(t) {
          let e = "",
            i = document.createTreeWalker(t, NodeFilter.SHOW_TEXT),
            n = i.nextNode();
          for (; n; ) {
            if (
              ((e += n.textContent),
              hc(n.parentElement) ||
                uc(n.parentElement) ||
                this.Gt.getElementSensitiveStatus(n.parentElement) !==
                  Te.CAPTURED)
            )
              return !0;
            if (csString.prototype.trim.call(e).length >= _u) break;
            n = i.nextNode();
          }
          return !1;
        }
        Z0(t) {
          let e = Qi(t, "button,a");
          return (
            e || (this.E.collectTargetText === Na.ButtonAndLinkOnly ? null : t)
          );
        }
        baseEnhanceAnalysisEvent(t, e) {
          if (si(csEventtarget.apply(t))) {
            let i = this.Z0(csEventtarget.apply(t));
            if (
              i &&
              j(i.textContent) &&
              !this.Q0(i) &&
              !this.O.hasPII(i.textContent, this.E.anonymizeDigits)
            ) {
              let n = Jt.truncate(
                csString.prototype.trim.call(i.textContent),
                _u
              );
              n.length > 0 && (e.text = n);
            }
          }
          return e;
        }
      }
      return s;
    })();
  function Ow(s, r, t, e, i) {
    let n = [];
    return (
      csArray.prototype.push.call(n, new Pw(s, r)),
      s.isCollectTargetTextEnabled() &&
        csArray.prototype.push.call(n, new bd(s, t, new ri())),
      s.collectHierarchy && csArray.prototype.push.call(n, new Ad(r, t)),
      csArray.prototype.push.call(n, new Cw(), new wd(r)),
      n
    );
  }
  function Nw(s, r, t, e, i) {
    let n = [];
    return (
      s.isCollectTargetTextEnabled() &&
        csArray.prototype.push.call(n, new bd(s, t, new ri())),
      s.collectHierarchy && csArray.prototype.push.call(n, new Ad(r, t)),
      csArray.prototype.push.call(n, new wd(r)),
      n
    );
  }
  var Mw = (() => {
      class s extends se {
        constructor(t, e) {
          super(),
            (this.ae = t),
            (this.Y = e),
            (this.Am = () => {
              document.visibilityState === "visible" && this.bm();
            });
        }
        onStart() {
          this.bm(), this.Ou();
        }
        onStop() {
          this.Nu();
        }
        getRecoveryStorage() {
          return this.ae;
        }
        bm() {
          let t = this.ae.recover();
          if (t !== null) {
            let { requestParameters: e, events: i } = t;
            this.Y.send(i, e);
          }
        }
        Ou() {
          document.addEventListener("visibilitychange", this.Am);
        }
        Nu() {
          document.removeEventListener("visibilitychange", this.Am);
        }
      }
      return s;
    })(),
    Dw = (() => {
      class s {
        constructor(t) {
          this.br = t;
        }
        save(t) {
          localStorage.setItem(this.br, csJSON.stringify(t));
        }
        clear() {
          localStorage.removeItem(this.br);
        }
        recover() {
          let t = localStorage.getItem(this.br);
          if (t === null) return null;
          let e = null;
          try {
            e = csJSON.parse(t);
          } catch {
            J.error(`Invalid item in localStorage.
         (key:${this.br}; value:${t})`);
          } finally {
            this.clear();
          }
          return e;
        }
      }
      return s;
    })(),
    kw = 50,
    xw = (() => {
      class s {
        constructor(t = []) {
          this.Bt = t;
        }
        stringifyEvents() {
          return csJSON.stringify(this.Bt);
        }
        addEvent(t) {
          csArray.prototype.push.call(this.Bt, t);
        }
        eventsCount() {
          return this.Bt.length;
        }
        clearEvents() {
          this.Bt = [];
        }
        empty() {
          this.clearEvents();
        }
        isFull() {
          return this.eventsCount() >= kw;
        }
        isEmpty() {
          return this.Bt.length === 0;
        }
        getEvents() {
          return this.Bt;
        }
      }
      return s;
    })(),
    Lw = (() => {
      class s {
        constructor(t, e, i, n = ["submit"]) {
          (this.zt = t),
            (this.gt = e),
            (this.qt = i),
            (this.tR = n),
            (this.Tm = "select, select *, input, textarea"),
            (this.eR = "select, select *, input, textarea"),
            (this.Rm =
              "a, a *, button, button *, select, select *, input, textarea"),
            (this.ho = "input, select, textarea"),
            (this.sR = "form"),
            (this.oc = 150),
            (this.iR = 400),
            (this.Cm = !1),
            (this.fo = jn((o, c) => this.scrollListener(o, c), this.oc)),
            (this.Im = jn((o) => this.resizeListener(o), this.oc)),
            (this.rR = Wn((o) => this.mouseMoveListener(o), this.iR)),
            (this.nR = [
              {
                boundElement: window,
                type: "resize",
                listener: () => this.Im(),
              },
              {
                boundElement: document,
                type: "scroll",
                listener: (o) => this.fo(o),
              },
              {
                boundElement: window,
                type: "mousemove",
                listener: (o) => {
                  this.rR(Ng(o));
                },
              },
              {
                boundElement: document,
                type: "mousedown",
                listener: (o) => this.mouseDownListener(o),
              },
              {
                boundElement: document,
                type: "mouseup",
                listener: (o) => this.mouseUpListener(o),
              },
              {
                boundElement: document,
                type: "click",
                listener: (o) => this.clickListener(o),
              },
            ]),
            (this.Pm = [
              {
                type: "change",
                listener: this.qt.on(this.eR, (o) => this.changeListener(o)),
              },
              {
                type: "submit",
                listener: this.qt.on(this.sR, (o) => this.submitListener(o)),
              },
            ]),
            (this.oR = [
              {
                boundElement: document,
                type: "mouseover",
                listener: this.qt.on(this.Rm, (o) => this.mouseOverListener(o)),
              },
              {
                boundElement: document,
                type: "mouseout",
                listener: this.qt.on(this.Rm, (o) => this.mouseOutListener(o)),
              },
              {
                boundElement: document,
                type: "focusin",
                listener: this.qt.on(this.Tm, (o) => this.focusInListener(o)),
              },
              {
                boundElement: document,
                type: "focusout",
                listener: this.qt.on(this.Tm, (o) => this.focusOutListener(o)),
              },
              {
                boundElement: document,
                type: "keyup",
                listener: this.qt.on(this.ho, (o) => this.keyUpListener(o)),
              },
              {
                boundElement: document,
                type: "keydown",
                listener: this.qt.on(this.ho, (o) => this.keyDownListener(o)),
              },
              {
                boundElement: document,
                type: "copy",
                listener: this.qt.on(this.ho, (o) => this.copyListener(o)),
              },
              {
                boundElement: document,
                type: "cut",
                listener: this.qt.on(this.ho, (o) => this.cutListener(o)),
              },
              {
                boundElement: document,
                type: "paste",
                listener: this.qt.on(this.ho, (o) => this.pasteListener(o)),
              },
              ...csArray.prototype.map.call(this.Pm, (o) => ({
                ...o,
                boundElement: document,
              })),
            ]),
            (this.F = {}),
            (this.zl = (o, c) => {
              switch (c) {
                case "initial":
                case "added":
                  this.Bi(o);
                  break;
                case "removed":
                  this.$i(o);
                  break;
              }
            }),
            (this.pe = new Oi(this.zl)),
            this.Fu();
        }
        Bi(t) {
          if (Mn(t)) {
            let e = this.Om();
            csArray.prototype.forEach.call(e, (i) => Mt(i));
          } else {
            let e = this.Nm();
            csArray.prototype.forEach.call(e, (i) => {
              Mt({ ...i, boundElement: t });
            });
          }
        }
        $i(t) {
          if (Mn(t)) {
            let e = this.Om();
            csArray.prototype.forEach.call(e, (i) => Dt(i));
          } else {
            let e = this.Nm();
            csArray.prototype.forEach.call(e, (i) => {
              Dt({ ...i, boundElement: t });
            });
          }
        }
        onEvent(t) {
          this.B = t;
        }
        start() {
          this.pe.observe(), this.Bi(document), this.resizeListener();
        }
        stop() {
          this.$i(document), this.pe.disconnect();
        }
        flushPendingDebouncedListeners() {
          this.fo.flushPending(), this.Im.flushPending();
        }
        Mm(t) {
          return csArray.prototype.some.call(this.tR, (e) => e === t);
        }
        Nm() {
          return this.qt.isMatchesSelectorSupported()
            ? csArray.prototype.filter.call(this.Pm, (t) => !this.Mm(t.type))
            : (J.warn("Element.matches is not implemented yet"), []);
        }
        Om() {
          let t = [];
          return (
            csArray.prototype.push.call(t, ...this.nR),
            this.qt.isMatchesSelectorSupported()
              ? csArray.prototype.push.call(t, ...this.oR)
              : J.warn("Element.matches is not implemented yet"),
            csArray.prototype.filter.call(t, (e) => !this.Mm(e.type))
          );
        }
        resizeListener(t) {
          let e = Xi.getScrollContainer(),
            i = si(e);
          i && (this.Cm = !0);
          let n = {
            type: at.RESIZE,
            ts: 0,
            x: i ? e.clientWidth : qt.windowWidth(),
            y: i ? e.clientHeight : qt.windowHeight(),
          };
          t !== void 0 && (n.d = t), this.B(n);
        }
        scrollListener(t, e) {
          let i = Xi.isEventOnScrollContainer(e);
          !this.Cm && i && this.resizeListener();
          let n = {
              type: at.SCROLL,
              ts: 0,
              x: i ? csEventtarget.apply(e).scrollLeft : qt.windowOffsetX(),
              y: i ? csEventtarget.apply(e).scrollTop : qt.windowOffsetY(),
              d: t,
            },
            o = pe.buildFromAnalysisEvent(e, n, this.zt);
          this.B(o);
        }
        mouseMoveListener(t) {
          let e = { type: at.MOUSEMOVE, ts: 0, x: t.pageX, y: t.pageY },
            i = pe.buildFromAnalysisEvent(t, e, this.zt);
          this.B(i);
        }
        mouseDownListener(t) {
          let e = {
              type: at.MOUSEDOWN,
              ts: 0,
              x: t.pageX,
              y: t.pageY,
              tgt: "",
            },
            i = pe.buildFromAnalysisEvent(t, e, this.zt);
          this.we(i);
        }
        mouseUpListener(t) {
          let e = { type: at.MOUSEUP, ts: 0, x: t.pageX, y: t.pageY, tgt: "" },
            i = pe.buildFromAnalysisEvent(t, e, this.zt);
          this.we(i);
        }
        clickListener(t) {
          let e = { type: at.CLICK, ts: 0, x: t.pageX, y: t.pageY, tgt: "" },
            i = pe.buildFromAnalysisEvent(t, e, this.zt);
          this.we(i);
        }
        mouseOverListener(t) {
          let e = {
              type: at.MOUSEOVER,
              ts: 0,
              x: t.pageX,
              y: t.pageY,
              tgt: "",
            },
            i = pe.buildFromAnalysisEvent(t, e, this.zt);
          this.we(i);
        }
        mouseOutListener(t) {
          let e = {
              type: at.MOUSEOUT,
              ts: 0,
              x: t.pageX,
              y: t.pageY,
              tgt: this.gt.getEventTargetPath(t),
            },
            i = pe.buildFromAnalysisEvent(t, e, this.zt);
          this.we(i);
        }
        focusInListener(t) {
          let e = {
              type: at.FOCUSIN,
              ts: 0,
              tgt: this.gt.getEventTargetPath(t),
            },
            i = pe.buildFromAnalysisEvent(t, e, this.zt);
          this.we(i);
        }
        focusOutListener(t) {
          let e = {
              type: at.FOCUSOUT,
              ts: 0,
              tgt: this.gt.getEventTargetPath(t),
            },
            i = pe.buildFromAnalysisEvent(t, e, this.zt);
          this.we(i);
        }
        changeListener(t) {
          let e = { type: at.CHANGE, ts: 0, tgt: "" },
            i = pe.buildFromAnalysisEvent(t, e, this.zt);
          this.we(i);
        }
        submitListener(t) {
          let e = { type: at.SUBMIT, ts: 0, tgt: "" },
            i = pe.buildFromAnalysisEvent(t, e, this.zt);
          this.we(i);
        }
        copyListener(t) {
          let e = {
            type: at.COMMAND,
            ts: 0,
            tgt: this.gt.getEventTargetPath(t),
            key: Yi.COPY,
          };
          this.we(e);
        }
        cutListener(t) {
          let e = {
            type: at.COMMAND,
            ts: 0,
            tgt: this.gt.getEventTargetPath(t),
            key: Yi.CUT,
          };
          this.we(e);
        }
        pasteListener(t) {
          let e = {
            type: at.COMMAND,
            ts: 0,
            tgt: this.gt.getEventTargetPath(t),
            key: Yi.PASTE,
          };
          this.we(e);
        }
        keyUpListener(t) {
          let e = {
            type: at.KEYUP,
            ts: 0,
            tgt: this.gt.getEventTargetPath(t),
            key: this.Dm(t),
          };
          this.we(e);
        }
        keyDownListener(t) {
          let e = {
            type: at.KEYDOWN,
            ts: 0,
            tgt: this.gt.getEventTargetPath(t),
            key: this.Dm(t),
          };
          this.we(e);
        }
        Dm(t) {
          let e = this.F[t.key];
          return e === void 0 ? ut.ALPHANUMERICAL : e;
        }
        we(t) {
          uh(t) && t.tgt !== ti.INVALID_ELEMENT && this.B(t);
        }
        Fu() {
          (this.F[" "] = ut.SPACE),
            (this.F.Spacebar = ut.SPACE),
            (this.F.Enter = ut.ENTER),
            (this.F.Backspace = ut.BACKSPACE),
            (this.F.Delete = ut.DELETE),
            (this.F.ArrowUp = ut.ARROWUP),
            (this.F.ArrowDown = ut.ARROWDOWN),
            (this.F.ArrowLeft = ut.ARROWLEFT),
            (this.F.ArrowRight = ut.ARROWRIGHT),
            (this.F.Up = ut.ARROWUP),
            (this.F.Down = ut.ARROWDOWN),
            (this.F.Left = ut.ARROWLEFT),
            (this.F.Right = ut.ARROWRIGHT),
            (this.F.CapsLock = ut.CAPSLOCK),
            (this.F.Shift = ut.SHIFT),
            (this.F.Tab = ut.TAB);
        }
      }
      return (
        Z(
          [$("Event handler type: resize")],
          s.prototype,
          "resizeListener",
          null
        ),
        Z(
          [$("Event handler type: scroll")],
          s.prototype,
          "scrollListener",
          null
        ),
        Z(
          [$("Event handler type: mouseMove"), Rt()],
          s.prototype,
          "mouseMoveListener",
          null
        ),
        Z(
          [$("Event handler type: mouseDown"), Rt()],
          s.prototype,
          "mouseDownListener",
          null
        ),
        Z(
          [$("Event handler type: mouseUp"), Rt()],
          s.prototype,
          "mouseUpListener",
          null
        ),
        Z(
          [$("Event handler type: click"), Rt()],
          s.prototype,
          "clickListener",
          null
        ),
        Z(
          [$("Event handler type: mouseOver"), Rt()],
          s.prototype,
          "mouseOverListener",
          null
        ),
        Z(
          [$("Event handler type: mouseOut"), Rt()],
          s.prototype,
          "mouseOutListener",
          null
        ),
        Z(
          [$("Event handler type: focusIn")],
          s.prototype,
          "focusInListener",
          null
        ),
        Z(
          [$("Event handler type: focusOut")],
          s.prototype,
          "focusOutListener",
          null
        ),
        Z(
          [$("Event handler type: change")],
          s.prototype,
          "changeListener",
          null
        ),
        Z(
          [$("Event handler type: submit"), Rt()],
          s.prototype,
          "submitListener",
          null
        ),
        Z([$("Event handler type: copy")], s.prototype, "copyListener", null),
        Z([$("Event handler type: cut")], s.prototype, "cutListener", null),
        Z([$("Event handler type: paste")], s.prototype, "pasteListener", null),
        Z([$("Event handler type: keyup")], s.prototype, "keyUpListener", null),
        Z(
          [$("Event handler type: keydown")],
          s.prototype,
          "keyDownListener",
          null
        ),
        s
      );
    })(),
    Vw = (() => {
      class s {
        constructor(t, e, i) {
          (this.zt = t), (this._e = e), (this.Ot = i);
        }
        processGesture(t, e) {
          switch (t.type) {
            case zt.TAP:
              this.aR(e);
              break;
            case zt.FLICK:
              this.cR(t, e);
              break;
            case zt.DRAG:
              this.lR(t, e);
              break;
            default:
              break;
          }
        }
        aR(t) {
          let e = { type: at.TAP, ts: 0, x: 0, y: 0, tgt: "" },
            i = pe.buildFromAnalysisEvent(t, e, this.zt);
          i.tgt !== ti.INVALID_ELEMENT && this.B(i);
        }
        lR(t, e) {
          var i, n;
          let o = { type: at.DRAG, ts: 0, fd: t.direction, tgt: "" };
          !((i = this.Ot) === null || i === void 0) &&
            i.collectGestureDistance &&
            (o.distance = t.distance),
            !((n = this.Ot) === null || n === void 0) &&
              n.collectGestureVelocity &&
              (o.velocity = t.velocity);
          let c = pe.buildFromAnalysisEvent(e, o, this.zt);
          c.tgt !== ti.INVALID_ELEMENT && this.B(c);
        }
        cR(t, e) {
          var i, n;
          let o = { type: at.FLICK, ts: 0, fd: t.direction, tgt: "" };
          !((i = this.Ot) === null || i === void 0) &&
            i.collectGestureDistance &&
            (o.distance = t.distance),
            !((n = this.Ot) === null || n === void 0) &&
              n.collectGestureVelocity &&
              (o.velocity = t.velocity);
          let c = pe.buildFromAnalysisEvent(e, o, this.zt);
          c.tgt !== ti.INVALID_ELEMENT && this.B(c);
        }
        onEvent(t) {
          this.B = t;
        }
        start() {
          this._e.subscribe(s.km, (t, e) => this.processGesture(t, e));
        }
        stop() {
          this._e.unsubscribe(s.km);
        }
      }
      return (
        (s.km = "AnalysisGestureTracker"),
        Z([Rt()], s.prototype, "processGesture", null),
        s
      );
    })();
  var Uw = (() => {
      class s {
        constructor() {
          (this.Lm = 100),
            (this.go = 0),
            (this.mo = qt.documentHeight()),
            (this.Vm = {
              boundElement: document,
              type: "scroll",
              listener: (t) => this.maxScrollRateListener(t),
            }),
            (this.go = this.Uh(Xi.getScrollContainer()).maxScrollRate);
        }
        onEvent(t) {
          this.B = t;
        }
        start() {
          Mt(this.Vm);
        }
        stop() {
          Dt(this.Vm);
        }
        reset() {
          let t = Xi.getScrollContainer(),
            { maxScrollRate: e, maxDocumentHeight: i } = this.Uh(t);
          (this.mo = i), (this.go = e), this.B();
        }
        Uh(t) {
          let e = 0,
            i = 0;
          if (t === null) (i = qt.documentHeight()), (e = this.fR(i));
          else {
            let n = this.pR(t);
            (i = this.Um(t, n)), (e = this.gR(t, n));
          }
          return { maxScrollRate: e, maxDocumentHeight: i };
        }
        maxScrollRateListener(t) {
          let e = null;
          Xi.isEventOnScrollContainer(t) && (e = csEventtarget.apply(t));
          let { maxScrollRate: i, maxDocumentHeight: n } = this.Uh(e);
          (i > this.go || n > this.mo) &&
            ((this.go = i), n > this.mo && (this.mo = n), this.B());
        }
        fR(t) {
          let e = Math.round((this.mR() / t) * 100);
          return Math.min(e, this.Lm);
        }
        mR() {
          let t = qt.windowHeight();
          return qt.windowOffsetY() + t;
        }
        gR(t, e) {
          let i =
              t.scrollTop + t.clientHeight + t.getBoundingClientRect().top + e,
            n = this.Um(t, e),
            o = Math.round((i / n) * 100);
          return Math.min(o, this.Lm);
        }
        pR(t) {
          let e = window.getComputedStyle(t).paddingTop || "0px";
          return parseInt(e, 10);
        }
        Um(t, e) {
          return t.scrollHeight + t.getBoundingClientRect().top + e;
        }
        getRequestParameters() {
          return { sr: `${this.go}`, mdh: `${this.mo}` };
        }
      }
      return (
        Z(
          [$("MaxScrollRate handler")],
          s.prototype,
          "maxScrollRateListener",
          null
        ),
        s
      );
    })(),
    Hw = (() => {
      class s {
        constructor() {
          (this.yR = (t) => this.processMetric(t)),
            (this.j = !1),
            (this.eo = new ud(["FCP", "CLS", "LCP", "TTFB", "INP"], this.yR));
        }
        onEvent(t) {
          this.B = t;
        }
        start() {
          this.j || ((this.j = !0), this.eo.observe());
        }
        stop() {
          (this.j = !1), this.eo.disconnect();
        }
        processMetric(t) {
          if (!this.j) return;
          let e = { type: at.PERFORMANCE, name: t.name, val: t.value, ts: 0 };
          this.B(e);
        }
      }
      return (
        Z(
          [$("Performance metric handler")],
          s.prototype,
          "processMetric",
          null
        ),
        s
      );
    })(),
    jw = (() => {
      class s {
        constructor(t) {
          (this.ER = Math.pow(2, 32) - 2), (this.Zi = t.performance);
        }
        getRequestParameters() {
          let t = this.SR();
          return t
            ? {
                str: t.startRender,
                di: t.domInteractive,
                dc: t.domComplete,
                fl: t.fullyLoaded,
              }
            : {};
        }
        SR() {
          let t = this.vR();
          if (t && (t == null ? void 0 : t.loadEventEnd) > 0) {
            let e = this.Hm({
              startRender: t.responseStart - t.requestStart,
              domInteractive: t.domInteractive - t.requestStart,
              domComplete: t.domComplete - t.requestStart,
              fullyLoaded: t.loadEventEnd - t.requestStart,
            });
            if (e) return e;
          }
          if (this.Zi && this.Zi.timing && this.Zi.timing.loadEventEnd > 0) {
            let e = this.Zi.timing;
            return this.Hm({
              startRender: e.domLoading - e.requestStart,
              domInteractive: e.domInteractive - e.requestStart,
              domComplete: e.domComplete - e.requestStart,
              fullyLoaded: e.loadEventEnd - e.requestStart,
            });
          }
          return null;
        }
        vR() {
          if (!this._R()) return null;
          let t = this.Zi.getEntriesByType("navigation");
          return t && t.length > 0 ? t[0] : null;
        }
        Hm(t) {
          let e = {};
          for (let i in t) {
            let n = t[i];
            if (n < 0) e[i] = "0";
            else {
              if (n > this.ER || !Number.isFinite(n)) return null;
              e[i] = Math.round(n).toString();
            }
          }
          return csArray.prototype.every.call(
            Object.values(e),
            (i) => i === "0"
          )
            ? null
            : e;
        }
        _R() {
          return (
            typeof this.Zi == "object" &&
            typeof this.Zi.getEntriesByType == "function"
          );
        }
      }
      return s;
    })();
  var Bw = "csAnalysisEventsPersisted",
    wu = "v2/events",
    tc = ["trackEvent"];
  var $w = (() => {
      class s {
        constructor(t, e, i, n, o, c, h, d, S, y, _, w, T, M, x) {
          (this.E = t),
            (this.Et = e),
            (this.N = i),
            (this.wt = n),
            (this.qt = o),
            (this.S = c),
            (this.V = h),
            (this._e = d),
            (this.mt = S),
            (this.xt = y),
            (this.z = _),
            (this.Gt = w),
            (this.tt = T),
            (this.Wt = M),
            (this.At = x);
        }
        init() {
          let t = new xw(),
            e = this.xt.create(`${this.E.getTrackerUri()}/${wu}`, "base64");
          (this.Ur = this.NR(e)),
            (this.Ae = this.MR(t, this.Ur.getRecoveryStorage(), e)),
            this.Ae.init(),
            this.z.addListener(this.Ae),
            this.mt.addListener(this.Ae),
            this.S.register(tc, (i) => {
              if (!dt(i)) throw new ge(tc[0]);
              this.Ae.pushCustomEvent(i.name, i.source, i.properties);
            });
        }
        onStartTracking(t) {
          this.Ur.start(), this.Ae.start(t);
        }
        onAfterNaturalPageView() {
          this.Ae.initStates();
        }
        onArtificialPageViewEnd(t) {
          this.Ae.clearStates(!0), t && (this.Ae.stop(), this.Ur.stop());
        }
        onAfterArtificialPageView(t) {
          this.Ae.initStates(),
            t && (this.Ae.start(), this.Ur.start()),
            this.Ae.collectInitialEvents();
        }
        onBeforeSessionRenewal() {
          this.Ae.clearStates(), this.Ae.stop(), this.Ur.stop();
        }
        onOptout() {
          this.Ae.stop(), this.Ur.stop();
        }
        MR(t, e, i) {
          let n = new jw(window),
            o = new Uw(),
            c = Ow(this.E, this.wt, this.Gt, this.Wt, this.At),
            h = [];
          this.E.collectSubmit || csArray.prototype.push.call(h, "submit");
          let d = new Lw(c, this.wt, this.qt, h),
            S = Nw(this.E, this.wt, this.Gt, this.Wt, this.At),
            y = new Vw(S, this._e),
            _ = new Hw(),
            w = new Zh(),
            T,
            M,
            x,
            P = new Jh(`${this.E.getTrackerUri()}/${wu}`),
            N = new Lr(this.Et, this.N);
          return new Rw(
            this.E,
            d,
            y,
            o,
            n,
            t,
            P,
            N,
            this.V,
            e,
            _,
            w,
            i,
            c,
            T,
            M,
            x
          );
        }
        NR(t) {
          return new Mw(new Dw(Bw), t);
        }
      }
      return s;
    })(),
    Fw = ["startDataCollection", "data-collection:start"],
    Gw = ["data-collection:stop"],
    zw = (() => {
      class s {
        constructor(t, e) {
          (this.Ze = t), (this.S = e);
        }
        init() {
          this.S.register(Fw, () => {
            this.Ze.startDataCollection();
          }),
            this.S.register(Gw, () => {
              this.Ze.stopDataCollection();
            });
        }
      }
      return s;
    })(),
    ma = { fromSessionRenewal: !1, isRenewedVisitor: !1 },
    qw = (() => {
      class s {
        constructor(t, e, i, n, o, c) {
          (this.E = t),
            (this.w = e),
            (this.rs = i),
            (this.J = n),
            (this.tr = o),
            (this.V = c),
            (this.Jm = !1),
            (this.Qm = 0),
            (this.jh = !0),
            (this.Zm = !1),
            (this.Us = !1),
            (this.startDataCollection = ({
              fromSessionRenewal: h,
              onAfterDataCollectionStartedCallback: d,
            } = ma) => {
              (h && this.Us) || !this.Jm ? this.DR(h, d) : this.kR();
            });
        }
        isDataCollectionStarted() {
          return this.Us;
        }
        tryStartAutomaticDataCollection({
          fromSessionRenewal: t,
          isRenewedVisitor: e,
          onAfterDataCollectionStartedCallback: i,
        } = ma) {
          this.xR(t, e) &&
            this.startDataCollection({
              fromSessionRenewal: t,
              onAfterDataCollectionStartedCallback: i,
            });
        }
        disableStartDataCollection() {
          this.jh = !1;
        }
        allowStartDataCollection({ fromSessionRenewal: t } = ma) {
          (this.jh = !0),
            this.Zm && this.startDataCollection({ fromSessionRenewal: t });
        }
        stopDataCollection() {
          this.Us &&
            ((this.Us = !1),
            this.w.emitArtificialPageViewEnd(!0),
            this.tr.stop());
        }
        kR() {
          this.Us ||
            ((this.Us = !0),
            this.V.isSessionValid()
              ? (this.V.refreshSession(), this.tr.start(We.Artificial))
              : this.V.renewSession(!1));
        }
        xR(t, e) {
          return e && !this.Us
            ? !1
            : t
            ? !0
            : this.E.startMode === Ln.Manual
            ? !1
            : !Ha(this.E) &&
              !this.E.isHeapSideloadsStartDataCollection() &&
              !this.E.isCsSideloadingHeap();
        }
        DR(t, e) {
          if (
            this.rs.isActive() ||
            ((this.Zm = !0), this.LR() && (this.Qm++, this.Qm < 2)) ||
            !this.jh ||
            (this.Us && !t)
          )
            return;
          (this.Jm = !0), (this.Us = !0), this.J.init();
          let i = t ? We.Renewal : We.Natural;
          this.tr.start(i);
          let n = () => {
            this.w.emitStartTracking(t), typeof e == "function" && e();
          };
          bt.onDocumentLoaded(n);
        }
        LR() {
          return Ha(this.E) && this.E.isCsSideloadingHeap();
        }
      }
      return s;
    })();
  var Ww = 20,
    Yw = "Custom Error:",
    Xw = "https://cserror.com/texterror.js",
    Kw = (() => {
      class s extends se {
        constructor(t, e, i, n, o, c, h) {
          super(),
            (this.Bs = t),
            (this.zh = e),
            (this.Et = i),
            (this.ye = n),
            (this.ci = o),
            (this.A = c),
            (this.V = h),
            (this.pc = []),
            (this.Li = 0),
            (this.er = []);
        }
        initStates() {
          (this.cs = q.now()),
            this.zh.removeQueryParams(),
            this.zh.setQueryParams(this.Et.getRequestParameters()),
            (this.pc = []),
            (this.Li = 0);
        }
        onStart() {
          this.Bs.subscribe(s.jt, (t) => this.X(t)), this.Gh();
        }
        onStop() {
          this.Bs.unsubscribe(s.jt);
        }
        onIframeJavascriptError(t) {
          this.X(t);
        }
        trackCustomError(t) {
          let e = {
            errorType: "jsError",
            message: `${Yw} ${t}`,
            lineno: 1,
            colno: 1,
            filename: Xw,
          };
          this.Eo(e);
        }
        Eo(t) {
          if (this.isStarted) {
            let e = this.X(t);
            e && this.ci.emitCustomJavaScriptErrorEvent(e);
          } else csArray.prototype.push.call(this.er, t);
        }
        Gh() {
          this.isStarted &&
            (csArray.prototype.forEach.call(this.er, (t) => this.Eo(t)),
            (this.er = []));
        }
        X(t) {
          if (this.isStarted && this.Li < Ww && this.V.isSessionValid()) {
            let e = { ...t, pageUrl: this.A.getAnonymizedUrl(), rt: this.Ri() };
            return (
              this.ye.anonymize(e),
              csArray.prototype.push.call(this.pc, e),
              this.cn(),
              e
            );
          }
          return null;
        }
        Ri() {
          return q.now() - this.cs;
        }
        cn() {
          this.zh.send({ errors: this.pc }), (this.pc = []), (this.Li += 1);
        }
      }
      return (s.jt = "JavaScriptErrorsService"), s;
    })(),
    Jw = "errors",
    Qw = (() => {
      class s {
        constructor(t, e, i, n, o, c, h, d, S, y) {
          (this.Bs = t),
            (this.ye = e),
            (this.E = i),
            (this.Et = n),
            (this.mt = o),
            (this.S = c),
            (this.ci = h),
            (this.A = d),
            (this.xt = S),
            (this.V = y);
        }
        init() {
          let t = this.xt.create(`${this.E.getTrackerUri()}/${Jw}`);
          (this.$s = new Kw(
            this.Bs,
            t,
            this.Et,
            this.ye,
            this.ci,
            this.A,
            this.V
          )),
            this.mt.addListener(this.$s),
            this.ut();
        }
        ut() {
          this.E.jsCustomErrorsEnabled &&
            !this.E.customErrors.enabled &&
            this.S.register(Nh, (t) => {
              this.$s.trackCustomError(t);
            });
        }
        onStartTracking() {
          this.$s.start();
        }
        onAfterNaturalPageView() {
          this.$s.initStates();
        }
        onArtificialPageViewEnd(t) {
          t && this.$s.stop();
        }
        onAfterArtificialPageView(t) {
          this.$s.initStates(), t && this.$s.start();
        }
        onBeforeSessionRenewal() {
          this.$s.stop();
        }
        onOptout() {
          this.$s.stop();
        }
      }
      return s;
    })(),
    Zw = (() => {
      class s extends _d {
        constructor() {
          super(), (this.K = new Yh((t) => this.errorListener(t)));
        }
        onStartTracking() {
          this.K.observe();
        }
        onStopTracking() {
          this.K.disconnect();
        }
        errorListener(t) {
          let e = this.cC(t);
          for (let i in this.subscriptions) {
            let n = this.subscriptions[i];
            n(e);
          }
        }
        lC(t) {
          return (
            (t = t != null ? t : "[NO ERROR MESSAGE]"),
            Jt.truncate(t, s.wu, Jt.ELLIPSIS)
          );
        }
        uC(t) {
          return !t || Le(t) ? "" : Jt.truncate(t, s.Au, Jt.ELLIPSIS);
        }
        cC(t) {
          return {
            errorType: "jsError",
            message: this.lC(t.message),
            filename: this.uC(t.filename),
            lineno: t.lineno,
            colno: t.colno,
          };
        }
      }
      return (
        (s.wu = 1024),
        (s.Au = 150),
        Z([$("Event handler type: error")], s.prototype, "errorListener", null),
        s
      );
    })(),
    tA = "CS_ANONYMIZED_VALUE",
    eA = (() => {
      class s {
        constructor(t, e) {
          (this.O = t), (this.A = e);
        }
        anonymize(t) {
          return (
            j(t.message) &&
              ((t.message = this.hC(t.message)),
              (t.message = this.O.anonymizePII(t.message))),
            j(t.filename) &&
              (t.filename = this.A.computeOverriddenUrl(t.filename)),
            t
          );
        }
        hC(t) {
          return csString.prototype.replace.call(
            t,
            /(value\s*=\s*".*"|value\s*=\s*'.*')/,
            `value='${tA}'`
          );
        }
      }
      return s;
    })();
  var sA = (() => {
    class s {
      constructor(t) {
        this.S = t;
      }
      init() {
        this.yy(s.GC, nh), this.yy(s.zC, rh);
      }
      yy(t, e) {
        this.S.register([t], (i, n) => {
          !j(i) || !(j(n) || ns(n)) || J.error(n, `${e}${i}`);
        });
      }
    }
    return (
      (s.zC = "logSnippetError"), (s.GC = "logImplementationSnippetError"), s
    );
  })();
  var iA = (() => {
    class s {
      constructor() {
        this.Wh = Ps.Natural;
      }
      setPageViewType(t) {
        this.Wh = t;
      }
      getPageViewType() {
        return this.Wh;
      }
      getRequestParameters() {
        return { pvt: this.Wh };
      }
    }
    return s;
  })();
  var rA = (() => {
      class s {
        constructor(t, e) {
          (this.Gt = t), (this.E = e), (this.Ey = !1);
        }
        enableRecordingContext(t, e, i) {
          (this.Ey = !0), (this.Ir = t), (this.C = e), (this.Wn = i);
        }
        getRecordingContext() {
          var t, e, i;
          if (!this.Ey)
            return {
              isRecording: !1,
              recordingStartTimestamp: 0,
              etrState: Ue.ETR_OFF,
              etrStatus: Ce.ETR_DISABLED,
              collectState: z.ANALYTICS_ONLY,
            };
          let n = this.C.getSession();
          return {
            isRecording: this.Ir.isRecording(),
            useAnonymization: this.Gt.getSensitiveStatus().useAnonymization,
            enableOnlineResources:
              (t = this.Ir.getStaticResourceManagerStatus()) === null ||
              t === void 0
                ? void 0
                : t.onlineAssets.activated,
            enableOnlineResourcesOnNextPageview:
              (e = this.Ir.getStaticResourceManagerStatus()) === null ||
              e === void 0
                ? void 0
                : e.onlineAssets.enabledOnNextPageview,
            recordingStartTimestamp: parseInt(
              this.Ir.getRecordingStartTimestamp(),
              10
            ),
            etrState: this.E.malkaEtrEnabled ? Ue.ETR_ON : Ue.ETR_OFF,
            etrStatus: this.Wn.getEtrStatus(n),
            collectState:
              (i = n == null ? void 0 : n.collectState) !== null && i !== void 0
                ? i
                : z.ANALYTICS_ONLY,
          };
        }
      }
      return s;
    })(),
    Ur = (() => {
      class s {
        static isRecordingSupported() {
          return "MutationObserver" in window && "visibilityState" in document;
        }
        static isAsyncSerializationSupported() {
          return "Promise" in window && "findIndex" in csArray.prototype;
        }
      }
      return s;
    })();
  var nA = (() => {
      class s extends se {
        constructor(t, e, i, n, o, c) {
          super(),
            (this.Ee = t),
            (this.J = e),
            (this.Kt = i),
            (this.gr = n),
            (this.Gr = o),
            (this.ot = c);
        }
        onStart() {
          var t, e, i;
          this.Kt.start(),
            this.Ee.setMaskedElementSettings(
              this.J.getMaskedElementSettings(
                (t = this.ot) === null || t === void 0
                  ? void 0
                  : t.shouldMaskNonTextElements()
              )
            ),
            this.Ee.startIdentifier(),
            (e = this.gr) === null || e === void 0 || e.start(),
            (i = this.Gr) === null || i === void 0 || i.start();
        }
        onStop() {
          var t, e;
          this.Kt.stop(),
            this.Ee.stopIdentifier(),
            (t = this.gr) === null || t === void 0 || t.stop(),
            (e = this.Gr) === null || e === void 0 || e.stop();
        }
      }
      return s;
    })(),
    oA = (() => {
      class s {
        constructor(t, e, i, n, o, c) {
          (this.ot = t),
            (this.J = e),
            (this.Xt = i),
            (this.Kt = n),
            (this._n = o),
            (this.lt = c),
            (this.wn = Ec(this._n));
        }
        getSensitiveStatus() {
          var t, e;
          return {
            started: this.Xt.isStarted,
            useAnonymization: this.ot.shouldUseAnonymization(),
            capturedElementSelector: this.Kt.getWhitelistedElementsSelector(),
            maskedElementSettings: this.J.getMaskedElementSettings(
              (t = this.ot) === null || t === void 0
                ? void 0
                : t.shouldMaskNonTextElements()
            ),
            encryptionSelectors:
              (e = this.lt) === null || e === void 0
                ? void 0
                : e.getEncryptionSelectors(),
          };
        }
        getElementSensitiveStatus(t) {
          let e = this.Xt.isStarted,
            i = this.ot.shouldUseAnonymization();
          return e
            ? F.isMaskedElement(t) || F.isMaskedElementChild(t)
              ? Te.MASKED
              : $E.shouldEncrypt(t)
              ? Te.ENCRYPTED
              : Ks.isEditableNode(t)
              ? Te.ANONYMIZED
              : i
              ? is.isWhitelistedElement(t)
                ? Te.CAPTURED
                : Te.ANONYMIZED
              : Te.CAPTURED
            : Te.ANONYMIZED;
        }
        getAttributeSensitiveStatus(t, e) {
          if (!this.Xt.isStarted) return Te.ANONYMIZED;
          let i = this.ot.shouldUseAnonymization();
          return F.isMaskedAttribute(t, e)
            ? Te.MASKED
            : i
            ? ir(t) || is.isWhitelistedElement(t) || this.wn.has(e)
              ? Te.CAPTURED
              : Te.ANONYMIZED
            : Te.CAPTURED;
        }
      }
      return s;
    })(),
    aA = (() => {
      class s {
        constructor(t) {
          this.V = t;
        }
        onAfterVisitorRenewal() {
          this.V.renewSession(!0);
        }
      }
      return s;
    })(),
    cA = {
      MATCHED: {
        [z.ANALYTICS_ONLY]: z.ANALYTICS_ONLY_RULES_TARGETING,
        [z.RECORDING_GLOBAL_SAMPLING]: z.RECORDING_RULES_TARGETING,
        [z.ANALYTICS_ONLY_RECORDING_PENDING_RULES_TARGETING]:
          z.RECORDING_RULES_TARGETING,
      },
      MISSED: {
        [z.ANALYTICS_ONLY]: z.ANALYTICS_ONLY_RULES_TARGETING,
        [z.RECORDING_GLOBAL_SAMPLING]:
          z.ANALYTICS_ONLY_RECORDING_PENDING_RULES_TARGETING,
      },
    },
    ya = (() => {
      let s;
      return (
        (function (r) {
          let t;
          function e(w) {
            t = w;
          }
          r.setLogger = e;
          function i(w, T) {
            for (let M of w) if (o(M, T)) return !0;
            return !1;
          }
          r.isUrlMatching = i;
          function n(w, T) {
            if (j(T)) {
              for (let M of w) if (o(M, T)) return !0;
            } else if (Cn(T)) {
              for (let M of w) if (o(M, csString(T))) return !0;
            }
            return !1;
          }
          r.isMatching = n;
          function o(w, T) {
            let M = c(w, T);
            return w.negate ? !M : M;
          }
          function c(w, T) {
            switch (
              (w.rule_type === "date" &&
                (w.match_operation === "less_than" ||
                  w.match_operation === "greater_than") &&
                (T = (new csDate(T).valueOf() / 1e3).toFixed(0)),
              w.match_operation)
            ) {
              case "exact":
                switch (w.rule_type) {
                  case "string":
                    return j(w.pattern)
                      ? csString.prototype.toLowerCase.call(T) ===
                          csString.prototype.toLowerCase.call(w.pattern)
                      : !1;
                  case "boolean":
                    return T === w.pattern || T === csString(w.pattern);
                  case "number":
                    return Ct(T) ? Number(T) === Number(w.pattern) : !1;
                  default:
                    return T === w.pattern;
                }
              case "starts_with":
                return j(w.pattern)
                  ? csString.prototype.indexOf.call(T, w.pattern) === 0
                  : !1;
              case "ends_with":
                return j(w.pattern) ? er(T, w.pattern) : !1;
              case "contains":
                return j(w.pattern)
                  ? csString.prototype.indexOf.call(T, w.pattern) !== -1
                  : !1;
              case "regex":
                if (!j(w.pattern)) return !1;
                try {
                  return new csRegExp(w.pattern).test(T);
                } catch (M) {
                  return (
                    t == null ||
                      t.warn(
                        `targeting.matchOperation.regex invalid ${
                          M == null ? void 0 : M.message
                        }`
                      ),
                    !1
                  );
                }
              case "simple":
                return j(w.pattern) ? _(T) === _(w.pattern) : !1;
              case "greater_than":
                return Number(T) > Number(w.pattern);
              case "less_than":
                return Number(T) < Number(w.pattern);
              case "exact_date": {
                let M = Number(w.pattern);
                if (!Ht(M)) return !1;
                let x = new csDate(M * 1e3);
                return new csDate(T).toDateString() === x.toDateString();
              }
              case "exact_days_ago":
                return h(w, T);
              case "more_than_days_ago":
                return d(w, T);
              case "less_than_days_ago":
                return S(w, T);
              case "unknown":
                return y(T);
              default:
                return (
                  t == null ||
                    t.warn(
                      `targeting.matchOperation.regex not managed operation ${w.match_operation}`
                    ),
                  !1
                );
            }
          }
          function h(w, T) {
            let M = new csDate(),
              x = M.setDate(M.getDate() - Number(w.pattern)),
              P = new csDate(x);
            return new csDate(T).toDateString() === P.toDateString();
          }
          function d(w, T) {
            let M = Number(w.pattern);
            if (!Ht(M)) return !1;
            let x = Number(M) + 1,
              P = new csDate(),
              N = new csDate(P);
            return (
              N.setDate(P.getDate() - x), new csDate(T).getTime() <= N.getTime()
            );
          }
          function S(w, T) {
            let M = Number(w.pattern);
            if (!Ht(M)) return !1;
            if (M === 0) return h(w, T);
            let x = new csDate(),
              P = new csDate(x);
            return (
              P.setDate(x.getDate() - M), new csDate(T).getTime() >= P.getTime()
            );
          }
          function y(w) {
            return Ct(w)
              ? j(w)
                ? csString.prototype.trim.call(w) === ""
                : Cn(w)
                ? w === !0
                : Ht(w)
                ? w !== 0
                : !1
              : !0;
          }
          function _(w) {
            let T = ee(w, "http://") || ee(w, "https://") ? w : `https://${w}`,
              M = sh(T);
            return M !== null
              ? csString.prototype.replace.call(M.host, /^www./, "")
              : w;
          }
        })(s || (s = {})),
        s
      );
    })(),
    lA = (() => {
      let s;
      return (
        (function (r) {
          r.URL = "url";
        })(s || (s = {})),
        s
      );
    })(),
    Ea = {
      isLegacyURL: (s) => s.component === "url",
      isLegacyTrigger: (s) => s.component === "trigger",
      isURL: (s) => s.type === lA.URL,
    },
    uA = (() => {
      class s {
        constructor(t) {
          (this.vy = new qn()), (this._y = []), (this.wy = []), ya.setLogger(t);
        }
        setTargetingRules(t) {
          this.vy.setRegexRules(csArray.prototype.filter.call(t, Ea.isURL));
          for (let e of t)
            Ea.isLegacyURL(e)
              ? csArray.prototype.push.call(this._y, e)
              : Ea.isLegacyTrigger(e) &&
                csArray.prototype.push.call(this.wy, e);
        }
        matchUrl(t) {
          return ya.isUrlMatching(this._y, t) || this.vy.evaluateUrl(t);
        }
        matchTrigger(t) {
          return ya.isMatching(this.wy, t);
        }
      }
      return s;
    })(),
    hA = (() => {
      class s extends se {
        constructor(t, e, i) {
          super(), (this.Ay = t), (this.Xh = e), (this.A = i);
        }
        init() {
          (this.Kh = new uA(J)), this.Ay && this.Kh.setTargetingRules(this.Ay);
        }
        onStart() {}
        checkTargetingRules() {
          let t = this.A.getAnonymizedUrl();
          this.Xh(this.Jh(t, "url"));
        }
        onStop() {}
        onTargetingRulesArtificialPageview(t) {
          this.isStarted && this.Xh(this.Jh(t, "url"));
        }
        onExternalEvent(t) {
          this.isStarted && this.Xh(this.Jh(t.name, "trigger"));
        }
        Jh(t, e) {
          var i, n;
          return e === "url" &&
            j(t) &&
            !((i = this.Kh) === null || i === void 0) &&
            i.matchUrl(t)
            ? !0
            : !!(
                e === "trigger" &&
                !((n = this.Kh) === null || n === void 0) &&
                n.matchTrigger(t)
              );
        }
      }
      return s;
    })(),
    dA = (() => {
      class s {
        constructor(t, e, i, n, o, c, h) {
          (this.E = t),
            (this.w = e),
            (this.Ct = i),
            (this.z = n),
            (this.A = o),
            (this.C = c),
            (this.Ze = h),
            (this.ir = !1),
            (this.To = (d = !1) => {
              this.ir &&
                this.E.isSMB &&
                this.Ze.allowStartDataCollection({ fromSessionRenewal: d }),
                this.E.startMode === Ln.Automatic &&
                  this.Ze.startDataCollection({ fromSessionRenewal: d });
            }),
            (this.JC = (d) => {
              this.ir || ((this.ir = d), this.by(), this.To());
            });
        }
        init() {
          this.E.isSMB && this.Ze.disableStartDataCollection(),
            (this.zr = new hA(this.E.recordTargetingRules, this.JC, this.A)),
            this.z.addListener(this.zr),
            this.zr.init();
        }
        start() {
          this.zr.start();
        }
        stop() {
          this.zr.stop();
        }
        maybeStartDataCollection(t) {
          if (t) {
            this.To(t);
            return;
          }
          if (this.QC()) {
            (this.ir = !0), this.To(), this.stop();
            return;
          }
          this.zr.checkTargetingRules();
        }
        onAfterArtificialPageView() {
          this.zr.checkTargetingRules();
        }
        onCollectStateChange(t) {
          if (this.Ty(t)) {
            this.stop();
            return;
          }
          let e = t === z.ANALYTICS_ONLY_RECORDING_PENDING_RULES_TARGETING;
          (!this.ir && e) || csSetTimeout(() => this.Ry(t), 0);
        }
        onStartTracking() {
          this.by();
        }
        QC() {
          let t = this.C.getSession();
          return !!(t && this.Ty(t.collectState));
        }
        Ty(t) {
          return (
            t === z.RECORDING_RULES_TARGETING ||
            t === z.ANALYTICS_ONLY_RULES_TARGETING
          );
        }
        by() {
          var t;
          if (this.ir) {
            let e = this.C.getSession(),
              i = this.Ct.getInitialCollectState();
            this.Ry(
              (t = e == null ? void 0 : e.collectState) !== null && t !== void 0
                ? t
                : i
            ),
              this.Ze.isDataCollectionStarted() &&
                this.w.emitTargetingRulesMatched();
          }
        }
        Ry(t) {
          let e = cA[this.ir ? "MATCHED" : "MISSED"][t];
          e && this.w.emitCollectStateChange(e, Ue.ETR_OFF);
        }
      }
      return s;
    })(),
    fA = (() => {
      class s {
        constructor() {
          (this.Cy = new Set()),
            (this.Iy = []),
            (this.Qh = new Set()),
            (this.Zh = []);
        }
        addUrlMaskingPattern(t) {
          if (this.Cy.has(t)) return;
          this.Cy.add(t);
          let e = ll(t);
          csArray.prototype.push.call(this.Iy, e);
        }
        getUrlMaskingPatterns() {
          return this.Iy;
        }
        resetPartialUrlMaskingPatterns() {
          this.Qh.clear(), (this.Zh = []);
        }
        addPartialUrlMaskingPattern(t) {
          if (this.Qh.has(t)) return;
          this.Qh.add(t);
          let e = ll(t);
          csArray.prototype.push.call(this.Zh, e);
        }
        getPartialUrlMaskingPatterns() {
          return this.Zh;
        }
      }
      return s;
    })(),
    pA = (() => {
      class s {
        constructor(t, e, i) {
          (this.E = t), (this.N = e), (this.C = i), (this.cs = q.now());
        }
        resetStartTime() {
          this.cs = q.now();
        }
        getSessionData() {
          let { projectId: t } = this.E,
            e = this.N.getVisitor();
          e == null &&
            J.warn(
              "Visitor is null. This happens when a snippet tries to get Session Data before the tag was initialized."
            );
          let { id: i, visitsCount: n } = e != null ? e : {},
            o = this.C.getSession();
          o === null &&
            J.warn(
              "Session is null. This happens when a snippet tries to get Session Data before the tag was initialized."
            );
          let { pageNumber: c } = o != null ? o : {};
          return {
            projectId: t,
            userId: i,
            sessionNumber: n,
            pageNumber: c,
            relativeTimestamp: q.now() - this.cs,
          };
        }
      }
      return s;
    })(),
    gA = ["clearSession"],
    mA = ["extendSession"];
  var yA = ["getSessionData"],
    EA = ["session:start:newVisitor"],
    SA = ["session:clear:visitor"],
    vA = (() => {
      class s {
        constructor(t, e, i, n) {
          (this.E = t), (this.N = e), (this.C = i), (this.S = n);
        }
        init() {
          (this.td = new pA(this.E, this.N, this.C)),
            this.S.register(gA, () => this.C.removeSession()),
            this.S.register(mA, () => this.C.extendSessionPeriodically(), {
              disableApplyPending: !0,
            }),
            this.S.register(yA, () => this.td.getSessionData(), {
              disableApplyPending: !0,
            }),
            this.S.register(EA, () => this.N.renewVisitor()),
            this.S.register(
              SA,
              () => {
                this.N.resetVisitor();
              },
              { disableApplyImmediate: !0 }
            );
        }
        onBeforeNaturalPageView() {
          this.N.createOrUpdateVisitor(), this.C.createOrUpdateSession();
        }
        onBeforeArtificialPageView() {
          this.N.createOrUpdateVisitor(), this.C.createOrUpdateSession();
        }
        onAfterNaturalPageView() {
          this.td.resetStartTime();
        }
        onAfterArtificialPageView() {
          this.td.resetStartTime();
        }
        onOptout() {
          this.N.removeVisitor(), this.C.removeSession();
        }
        onCollectStateChange(t) {
          this.C.updateCollectState(t);
        }
      }
      return s;
    })(),
    _A = (() => {
      class s {
        constructor(
          t,
          e,
          i,
          n,
          o,
          c,
          h,
          d,
          S,
          y,
          _,
          w,
          T,
          M,
          x,
          P,
          N,
          W,
          D,
          L,
          it,
          et,
          ht,
          Nt,
          oe,
          ae,
          I,
          Y,
          Q,
          nt,
          Pt,
          jt,
          Ne,
          us,
          ni,
          me,
          Je
        ) {
          (this.Et = t),
            (this.Ro = e),
            (this.de = i),
            (this.N = n),
            (this.C = o),
            (this.V = c),
            (this.As = h),
            (this.w = d),
            (this.S = S),
            (this.sl = y),
            (this.E = _),
            (this.il = w),
            (this.rs = T),
            (this.nn = M),
            (this.bt = x),
            (this.O = P),
            (this.wt = N),
            (this.Q = W),
            (this.A = D),
            (this.ZC = L),
            (this.z = it),
            (this.mt = et),
            (this.ht = ht),
            (this.Py = Nt),
            (this.Yt = oe),
            (this.tI = ae),
            (this.M = I),
            (this.xt = Y),
            (this.D = Q),
            (this._t = nt),
            (this.ft = Pt),
            (this.Ct = jt),
            (this.J = Ne),
            (this.We = us),
            (this.Pt = ni),
            (this.Wt = me),
            (this.At = Je),
            (this.eI = (ce) => {
              this.w.emitBeforeSessionRenewal(),
                this.qr(!0, ce),
                this.w.emitAfterSessionRenewal();
            }),
            (this.sI = (ce) => {
              this.w.emitBeforeSessionRenewal(),
                this.Ct.refreshQuota((le) => {
                  le !== z.QUOTA_REACHED &&
                    (this.qr(!0, ce), this.w.emitAfterSessionRenewal());
                });
            });
        }
        start() {
          if ((this.il.init(), this.rs.init(), this.rs.isActive())) return;
          let t, e, i, n, o, c, h, d, S, y, _, w, T, M, x, P, N, W;
          this.M.schedule(() => {
            (M = new aA(this.V)),
              (_ = new Aw(this.wt)),
              (w = new gd(() => {})),
              (x = new md()),
              (W = new _w());
            let D = new nA(w, this.J, x, N, W, this.Sc());
            T = new oA(
              this.Sc(),
              this.J,
              D,
              x,
              this.E.whitelistedAttributes,
              P
            );
            let L = new cy(this.w, this.S, this.J, D, x, P, N);
            L.init(),
              this.w.addListener(L),
              (t = new $w(
                this.E,
                this.Ro,
                this.N,
                this.wt,
                _,
                this.S,
                this.V,
                new ww(J),
                this.mt,
                this.xt,
                this.z,
                T,
                this.tt,
                this.Wt,
                this.At
              )),
              (e = new yy(this.S, this.C, this.E, this.Et, this.de, this.O)),
              (y = new rA(T, this.E));
            let it = null,
              et = new iA();
            (i = new Pv(
              this.N,
              this.C,
              this.S,
              this.mt,
              it,
              this.E,
              et,
              y,
              this.A,
              this.ht
            )),
              (n = new Ty(
                this.E,
                this.Ro,
                this.N,
                this.S,
                this.O,
                this.V,
                this.A
              ));
            let ht, Nt;
            (this.tr = new sy(
              this.E,
              this.S,
              this.w,
              this.Ro,
              this.N,
              this.C,
              this.As,
              this.bt,
              this.ht,
              this.A,
              this.Yt,
              et,
              this.z,
              this.xt,
              this.We,
              ht,
              this.Wt,
              this.At,
              Nt
            )),
              (this.Oy = new vA(this.E, this.N, this.C, this.S)),
              (this.Ze = new qw(
                this.E,
                this.w,
                this.rs,
                this.J,
                this.tr,
                this.V
              )),
              new zw(this.Ze, this.S).init(),
              (c = new ky(this.E, this.S, this.de, this.Ro, this.z)),
              (h = new sA(this.S)),
              (d = new Tw());
          }),
            this.M.schedule(() => {
              (this.Bs = new Zw()), (this.ye = new eA(this.O, this.A));
              let D = new Qw(
                this.Bs,
                this.ye,
                this.E,
                this.Ro,
                this.mt,
                this.S,
                this.z,
                this.A,
                this.xt,
                this.V
              );
              D.init(), this.w.addListener(D);
            }),
            this.M.schedule(() => {
              this.nn.init();
            }),
            this.M.schedule(() => {
              i.init();
            }),
            this.M.schedule(() => {
              e.init();
            }),
            this.M.schedule(() => {
              n.init();
            }),
            this.M.schedule(() => {
              this.Py.init();
            }),
            this.M.schedule(() => {
              this.tr.init();
            }),
            this.M.schedule(() => {
              this.Oy.init();
            }),
            this.M.schedule(() => {
              c.init();
            }),
            this.M.schedule(() => {
              this.ZC.init();
            }),
            this.M.schedule(() => {
              h.init();
            }),
            this.M.schedule(() => {
              d.init();
            }),
            this.M.schedule(() => {
              this.tI.init();
            }),
            this.M.schedule(() => {
              this.w.addListener(this.Oy),
                this.w.addListener(this.sl),
                this.w.addListener(t),
                this.w.addListener(this.nn),
                this.w.addListener(i),
                this.w.addListener(n),
                this.w.addListener(this.Py),
                this.w.addListener(this.tr),
                this.w.addListener(c),
                this.w.addListener(e),
                this.w.addListener(d),
                this.w.addListener(M);
            }),
            Ur.isRecordingSupported() &&
              this.M.schedule(() => {
                let D = new yv(
                  y,
                  this.C,
                  this.E,
                  this.Et,
                  this.S,
                  this.O,
                  this.V,
                  w,
                  this.ye,
                  this.yt,
                  this.Ve,
                  this.Tt,
                  this.w,
                  this.z,
                  this.mt,
                  this.Yt,
                  this.xt,
                  this.Q,
                  this.Vn,
                  this.Sc(),
                  this.Hr,
                  P
                );
                D.init(),
                  this.w.addListener(D),
                  i.setRecordingService(D.recordingService);
              }),
            this.M.schedule(() => {
              let D, L;
              if (!$n.isEnabled(tr.HJ_DUAL_COLLECT)) {
                (L = new Sd(this.z)),
                  (D = new Ed(
                    this.S,
                    L,
                    this.E,
                    this.D,
                    this._t,
                    this.N,
                    this.O,
                    this.Sc(),
                    this.J
                  )),
                  D.init();
                {
                  D.start();
                  let it = new pd(this.E, this.N, this.A, L);
                  this.w.addListener(it), it.init();
                }
              }
            }),
            this.M.schedule(() => {
              t.init();
            }),
            this.M.schedule(() => {
              this.E.isQuotaEnabled()
                ? this.V.onSessionExpired((D) => {
                    this.sI(D);
                  })
                : this.V.onSessionExpired((D) => {
                    this.eI(D);
                  }),
                this.qr();
            });
        }
        qr(t = !1, e = !1) {
          var i, n, o;
          if (this.E.hasTargetingRules()) {
            this.Co ||
              ((this.Co = new dA(
                this.E,
                this.w,
                this.Ct,
                this.z,
                this.A,
                this.C,
                this.Ze
              )),
              this.w.addListener(this.Co),
              this.Co.init(),
              this.Co.start(),
              this.S.start(),
              (i = this.tt) === null || i === void 0 || i.start()),
              this.Co.maybeStartDataCollection(t);
            return;
          }
          this.S.start(),
            (n = this.tt) === null || n === void 0 || n.start(),
            this.Ze.tryStartAutomaticDataCollection({
              fromSessionRenewal: t,
              isRenewedVisitor: e,
            });
        }
        Sc() {
          if (this.ot) return this.ot;
          let t = new qn();
          return (
            (this.ot = new fd(this.E, this.A, t, this.bt)),
            this.ot.init(),
            this.ot.shouldUseAnonymization() &&
              st.counters.pageAnonymisation.count("anonymized-on-start"),
            this.ot
          );
        }
      }
      return s;
    })();
  var Td = (() => {
      class s {
        constructor(t) {
          this.configuration = t;
        }
      }
      return s;
    })(),
    wA = (() => {
      class s extends Td {
        constructor(t, e, i, n, o) {
          super(t),
            (this.configuration = t),
            (this.w = e),
            (this.sd = i),
            (this.A = n),
            (this.rd = o),
            (this.nd = !1);
        }
        refreshQuota() {}
        canCollect(t) {
          return !0;
        }
        init() {
          this.configuration.malkaUrlEnabled &&
            this.configuration.hasRecordingUrlRules() &&
            ((this.nd = !0),
            this.rd.setRegexRules(this.configuration.recordingUrlRules));
        }
        sanitizeSessionCollectState(t) {
          return (
            (t.collectState === z.QUOTA_REACHED ||
              t.collectState === z.RECORDING_RULES_TARGETING ||
              t.collectState === z.RECORDING_TEMPORARILY) &&
              (t.collectState = z.ANALYTICS_ONLY),
            t
          );
        }
        computeInitialCollectState() {
          return Zs.isReplayConsentNeeded(this.configuration)
            ? z.RECORDING_BLOCKED_BY_CONSENT_NOT_EXPRESSED
            : this.vc();
        }
        computeInitialCollectStateFromRecordingConsentGranted() {
          return this.vc();
        }
        vc() {
          if (!Ur.isRecordingSupported()) return z.ANALYTICS_ONLY;
          let t = z.ANALYTICS_ONLY,
            e = Ue.ETR_OFF;
          return (
            Ai.percentage() < this.configuration.replayRecordingRate ||
            this.sd.isForceReplayRecorded()
              ? (t = z.RECORDING_GLOBAL_SAMPLING)
              : this.nd &&
                this.rd.evaluateUrl(this.A.getAnonymizedUrl()) &&
                (t = z.RECORDING_URL_SAMPLING),
            this.configuration.malkaEtrEnabled && (e = Ue.ETR_ON),
            this.w.emitCollectStateChange(t, e),
            t
          );
        }
        getEligibleCollectState(t) {
          if (!Ur.isRecordingSupported()) return z.ANALYTICS_ONLY;
          if (Zs.isRecordingBlockedByConsent(t))
            return t.collectState === z.RECORDING_BLOCKED_BY_CONSENT_WITHDRAWN
              ? z.RECORDING_BLOCKED_BY_CONSENT_WITHDRAWN
              : z.RECORDING_BLOCKED_BY_CONSENT_NOT_EXPRESSED;
          if (t.collectState === z.RECORDING_GLOBAL_SAMPLING)
            return z.RECORDING_GLOBAL_SAMPLING;
          let e = this.configuration.malkaEtrEnabled ? Ue.ETR_ON : Ue.ETR_OFF;
          return this.nd && this.rd.evaluateUrl(this.A.getAnonymizedUrl())
            ? (this.w.emitCollectStateChange(z.RECORDING_URL_SAMPLING, e),
              z.RECORDING_URL_SAMPLING)
            : (this.w.emitCollectStateChange(z.ANALYTICS_ONLY, e),
              z.ANALYTICS_ONLY);
        }
        isReplayRecorded(t) {
          return Zs.isRecordingBlockedByConsent(t)
            ? !1
            : t.collectState === z.RECORDING_TEMPORARILY ||
                t.collectState === z.RECORDING_GLOBAL_SAMPLING ||
                t.collectState === z.RECORDING_URL_SAMPLING ||
                this.configuration.malkaEtrEnabled;
        }
        getInitialCollectState() {
          return z.ANALYTICS_ONLY;
        }
        getRecordingConsentWithdrawn() {
          return z.RECORDING_BLOCKED_BY_CONSENT_WITHDRAWN;
        }
      }
      return s;
    })(),
    Ge = "_cs_s",
    ec = 18e5,
    Sa = ".",
    AA = 13,
    _n = (() => {
      let s;
      return (
        (function (r) {
          (r[(r.NOT_FOUND = 0)] = "NOT_FOUND"),
            (r[(r.EXPIRED = 1)] = "EXPIRED"),
            (r[(r.FOUND = 2)] = "FOUND");
        })(s || (s = {})),
        s
      );
    })(),
    bA = (() => {
      class s {
        constructor(t, e, i) {
          (this.E = t),
            (this.D = e),
            (this.ft = i),
            (this.ce = null),
            (this.od = !1);
        }
        get(t) {
          let e = this.getRawSession(t);
          return this.isValid(e) ? mh(e) : null;
        }
        getRawSession(t) {
          if (t) {
            let S = this.ad();
            return Da(S);
          }
          let { sessionString: e, status: i } = this.iI(),
            n = Da(e);
          if (i !== _n.EXPIRED) return n;
          if (this.E.cookielessTrackingEnabled) return null;
          let o = this.ad();
          if (!o) return null;
          let c = csString.prototype.split.call(o, Sa);
          if (!s.Ny(c)) return o;
          let h = c[c.length - 1],
            d = parseInt(h, 10);
          return isNaN(d) || this.rI(d), n;
        }
        onCookieSet(t) {
          this.Je = t;
        }
        onCookieRemoved(t) {
          this.Wi = t;
        }
        set(t, e = ec) {
          var i;
          let n = q.now() + e,
            o = qg(t);
          (o += `${Sa}${n}`),
            this.nI(o, n),
            this.E.cookielessTrackingEnabled
              ? this.ft.setItem(Ge, o)
              : (this.D.set(Ge, o, e),
                (i = this.Je) === null ||
                  i === void 0 ||
                  i.call(this, Ge, o, e));
        }
        remove() {
          var t;
          this.E.cookielessTrackingEnabled
            ? this.ft.removeItem(Ge)
            : (this.D.delete(Ge),
              (t = this.Wi) === null || t === void 0 || t.call(this, Ge)),
            this.oI();
        }
        handleSubdomainChange() {
          if (this.E.cookielessTrackingEnabled) return;
          let t = this.get(!0);
          t &&
            (this.E.allowSubdomains
              ? this.D.delete(Ge, Xn.CURRENT_DOMAIN)
              : this.D.delete(Ge, this.D.getRootDomain()),
            this.set(t));
        }
        isValid(t) {
          return t !== null && wc(t);
        }
        nI(t, e) {
          this.ce = { sessionString: t, expires: e };
        }
        iI() {
          return this.ce
            ? this.ce && q.now() <= this.ce.expires
              ? { sessionString: this.ce.sessionString, status: _n.FOUND }
              : { sessionString: this.ce.sessionString, status: _n.EXPIRED }
            : { sessionString: this.ad(), status: _n.NOT_FOUND };
        }
        oI() {
          this.ce = null;
        }
        rI(t) {
          this.ce && ((this.ce.expires = t), (this.od = !0));
        }
        isCacheRefreshed() {
          return this.od;
        }
        resetCacheRefreshed() {
          this.od = !1;
        }
        ad() {
          if (this.E.cookielessTrackingEnabled) {
            let e = this.ft.getItem(Ge);
            return !e || this.My(e) ? null : e;
          }
          let t = this.D.get(Ge);
          return !t || this.My(t) ? null : t;
        }
        My(t) {
          let e = csString.prototype.split.call(t, Sa);
          if (!s.Ny(e)) return !1;
          let i = parseInt(e[e.length - 1], 10);
          return !isNaN(i) && q.now() > i;
        }
        static Ny(t) {
          return t[t.length - 1].length === AA;
        }
      }
      return s;
    })(),
    TA = (() => {
      class s extends Td {
        constructor(t, e, i) {
          super(t),
            (this.configuration = t),
            (this.Io = e),
            (this.w = i),
            (this.aI = z.RECORDING_GLOBAL_SAMPLING);
        }
        refreshQuota(t) {
          (this.Dy = t), (this.Po = void 0), this.cI();
        }
        init(t) {
          this.lI();
          let e = Ut.get(Ge);
          if (e !== null && wc(e)) {
            let i = Wg(e);
            t(this.canCollect(i), i == null ? void 0 : i.collectState);
          } else
            this.refreshQuota((i) => {
              t(i !== z.QUOTA_REACHED, i);
            });
        }
        sanitizeSessionCollectState(t) {
          return t;
        }
        canCollect(t) {
          return t !== null && t.collectState !== z.QUOTA_REACHED;
        }
        computeInitialCollectState(t) {
          return this.Po
            ? (this.w.emitCollectStateChange(
                this.Po,
                this.configuration.malkaEtrEnabled ? Ue.ETR_ON : Ue.ETR_OFF
              ),
              this.Po)
            : (J.warn(
                "Quota file error computeInitialCollectState() called before quota answered"
              ),
              z.QUOTA_REACHED);
        }
        getEligibleCollectState(t) {
          return t.collectState === z.QUOTA_REACHED
            ? z.QUOTA_REACHED
            : !Ur.isRecordingSupported() && this.isReplayRecorded(t)
            ? z.ANALYTICS_ONLY
            : t.collectState === z.RECORDING_RULES_TARGETING
            ? z.RECORDING_RULES_TARGETING
            : t.collectState === z.ANALYTICS_ONLY_RULES_TARGETING
            ? z.ANALYTICS_ONLY_RULES_TARGETING
            : t.collectState ===
              z.ANALYTICS_ONLY_RECORDING_PENDING_RULES_TARGETING
            ? z.ANALYTICS_ONLY_RECORDING_PENDING_RULES_TARGETING
            : t.collectState === z.RECORDING_GLOBAL_SAMPLING
            ? z.RECORDING_GLOBAL_SAMPLING
            : z.ANALYTICS_ONLY;
        }
        isReplayRecorded(t) {
          return (
            t.collectState === z.RECORDING_GLOBAL_SAMPLING ||
            t.collectState === z.RECORDING_RULES_TARGETING
          );
        }
        getInitialCollectState() {
          return this.Po || z.QUOTA_REACHED;
        }
        computeInitialCollectStateFromRecordingConsentGranted(t) {
          return z.ANALYTICS_ONLY;
        }
        Oo(t) {
          (this.Po = t), this.Dy && this.Dy(t);
        }
        lI() {
          this.Io.onError((t) =>
            this.quotaServiceErrorHandler(
              `HTTP:${t.status} - fetching quota file for pid: ${this.configuration.projectId}`
            )
          ),
            this.Io.onTimeout(() => this.quotaServiceErrorHandler("timeout")),
            this.Io.onLoad((t) => this.quotaFileHandler(t));
        }
        cI() {
          this.Io.isInProgress() || this.Io.send();
        }
        quotaFileHandler(t) {
          var e;
          if (
            !(
              !((e = t == null ? void 0 : t.quotas) === null || e === void 0) &&
              e.length
            )
          ) {
            this.quotaServiceErrorHandler(
              "Quota types missing from config file"
            );
            return;
          }
          this.uI(t);
        }
        quotaServiceErrorHandler(t) {
          let e = `Quota error - ${t}`;
          J.warn(e), this.Oo(this.aI);
        }
        uI(t) {
          let e = !1,
            i = !1;
          for (let n of t.quotas)
            n.quotaType === "ANALYTICS" && n.value
              ? (e = !0)
              : n.quotaType === "RECORDING" &&
                n.value &&
                Ai.boolean(Math.round(n.value * 100)) &&
                (i = !0);
          !e && i
            ? this.quotaServiceErrorHandler(
                `Quota types impossible: replay without analytics - ${csJSON.stringify(
                  t
                )}`
              )
            : e && i
            ? Ur.isRecordingSupported()
              ? this.Oo(z.RECORDING_GLOBAL_SAMPLING)
              : this.Oo(z.ANALYTICS_ONLY)
            : e && !i
            ? this.Oo(z.ANALYTICS_ONLY)
            : this.Oo(z.QUOTA_REACHED);
        }
        getRecordingConsentWithdrawn() {
          return z.ANALYTICS_ONLY;
        }
      }
      return (
        Z(
          [$("Quota File: quotaFileHandler")],
          s.prototype,
          "quotaFileHandler",
          null
        ),
        Z(
          [$("Quota File: onerror")],
          s.prototype,
          "quotaServiceErrorHandler",
          null
        ),
        s
      );
    })();
  var RA = (() => {
    class s {
      constructor(t, e, i, n, o, c, h, d) {
        (this.N = t),
          (this.C = e),
          (this.ys = i),
          (this.ht = n),
          (this.E = o),
          (this.Pt = c),
          (this.At = h),
          (this.Ft = d);
      }
      get() {
        var t, e, i;
        return {
          exclusion: this.ys.getAppliedTrackingDraw(),
          visitor: this.N.getVisitor(),
          session: this.C.getSession(),
          cvars: this.ht.getCustomVariablesSession(),
          identity:
            (t = this.Pt) === null || t === void 0 ? void 0 : t.getIdentity(),
          customProperties:
            (e = this.At) === null || e === void 0 ? void 0 : e.getProperties(),
          sessionContext:
            (i = this.Ft) === null || i === void 0
              ? void 0
              : i.getSessionContextStorageValue(),
        };
      }
      apply(t) {
        t && (t.exclusion ? this.exclude() : this.include(t));
      }
      exclude() {
        var t, e, i;
        this.ys.exclude(this.E),
          this.N.removeVisitor(),
          this.C.removeSession(),
          this.ht.removeCustomVariablesSession(),
          (t = this.Pt) === null || t === void 0 || t.resetIdentity(),
          (e = this.At) === null || e === void 0 || e.clearProperties(),
          (i = this.Ft) === null || i === void 0 || i.removeSessionContext();
      }
      include(t) {
        var e, i, n;
        this.ys.removeExclusion(),
          this.N.setVisitor(t.visitor),
          t.session ? this.C.setSession(t.session) : this.C.removeSession(),
          t.cvars
            ? this.ht.setCustomVariableSession(t.cvars)
            : this.ht.removeCustomVariablesSession(),
          t.identity && this.Pt
            ? this.Pt.setIdentityCookie(t.identity)
            : (e = this.Pt) === null || e === void 0 || e.resetIdentity(),
          t.customProperties && this.At
            ? this.At.setProperties(t.customProperties)
            : (i = this.At) === null || i === void 0 || i.clearProperties(),
          t.sessionContext && this.Ft
            ? this.Ft.setSessionContextStorageValue(t.sessionContext)
            : (n = this.Ft) === null ||
              n === void 0 ||
              n.removeSessionContext();
      }
    }
    return s;
  })();
  var Bc = 60 * 1e3,
    CA = 60 * Bc,
    IA = 4 * CA - Bc,
    Gi = (() => {
      let s;
      return (
        (function (r) {
          (r[(r.NO = 0)] = "NO"),
            (r[(r.WITHDRAWN = 1)] = "WITHDRAWN"),
            (r[(r.GRANTED = 2)] = "GRANTED");
        })(s || (s = {})),
        s
      );
    })(),
    PA = (() => {
      class s {
        constructor(t, e, i, n, o) {
          (this.Te = t),
            (this.Ct = e),
            (this.w = i),
            (this.mI = n),
            (this.yI = o),
            (this.Mo = null),
            (this.ld = 0),
            (this.Do = Gi.NO);
        }
        setDynamicVariablesService(t) {
          this.EI = t;
        }
        createOrUpdateSession() {
          this.ud(), (this.SI = q.now()), (this.ld = 0);
          let t = this.Ly();
          t === null
            ? ((t = this.vI()), this.vc(t), this.w.emitSessionCreated())
            : ((t = this.Ct.sanitizeSessionCollectState(t)),
              this._I(t),
              (t.collectState = this.Ct.getEligibleCollectState(t))),
            this.setSession(t);
        }
        grantReplayRecording(t) {
          (t.collectState = this.Ct.getInitialCollectState()),
            (t.collectState =
              this.Ct.computeInitialCollectStateFromRecordingConsentGranted(t)),
            this.setSession(t);
        }
        grantReplayRecordingBeforeSessionStart() {
          this.Do = Gi.GRANTED;
        }
        withdrawnReplayRecording(t) {
          (t.collectState = this.Ct.getRecordingConsentWithdrawn()),
            this.setSession(t);
        }
        withdrawnReplayRecordingBeforeSessionStart() {
          this.Do = Gi.WITHDRAWN;
        }
        vc(t) {
          this.Do === Gi.WITHDRAWN
            ? ((t.collectState = this.Ct.getRecordingConsentWithdrawn()),
              this.setSession(t))
            : this.Do === Gi.GRANTED
            ? (t.collectState =
                this.Ct.computeInitialCollectStateFromRecordingConsentGranted(
                  t
                ))
            : (t.collectState = this.Ct.computeInitialCollectState(t)),
            (this.Do = Gi.NO);
        }
        vI() {
          return {
            pageNumber: 1,
            collectState: this.Ct.getInitialCollectState(),
            replayConsent: this.mI ? Ma.NOT_EXPRESSED : Ma.UNNECESSARY,
            etrStatus: Ce.ETR_NOT_SAVED_SESSION,
          };
        }
        _I(t) {
          t.pageNumber += 1;
        }
        isReplayRecorded() {
          let t = this.getSession();
          return !!t && this.Ct.isReplayRecorded(t);
        }
        isTemporarilyRecorded() {
          let t = this.getSession();
          return (
            (t == null ? void 0 : t.collectState) === z.RECORDING_TEMPORARILY
          );
        }
        getRequestParameters() {
          let t = {},
            e = this.getSession();
          return e !== null && (t.pn = `${e.pageNumber}`), t;
        }
        getSession() {
          return this.Te.get();
        }
        Ly() {
          return this.Te.get(!0);
        }
        doesSessionExist() {
          return this.Te.get() !== null;
        }
        setSession(t) {
          this.Te.set(t), this.w.emitSessionRefreshed();
        }
        refreshSession() {
          let t = this.Ly();
          t && this.setSession(t);
        }
        removeSession() {
          this.Te.remove(), this.w.emitSessionRemoved();
        }
        getRecordingTypes() {
          let t = this.getSession(),
            e = this.wI(t);
          return this.AI(e);
        }
        AI(t) {
          let e = [];
          return (
            csArray.prototype.forEach.call(t, (i) => {
              if (_c(i)) {
                let n = zg[i] || i;
                csArray.prototype.push.call(e, n);
              }
            }),
            e
          );
        }
        wI(t) {
          let e = [];
          return (
            (t == null ? void 0 : t.collectState) !== void 0 &&
              (csArray.prototype.push.call(e, t.collectState),
              this.yI &&
                csArray.prototype.push.call(e, z.RECORDING_ETR_SAMPLING)),
            e
          );
        }
        updateCollectState(t) {
          let e = this.getSession();
          e !== null && ((e.collectState = t), this.setSession(e));
        }
        hasValidSession() {
          let t = this.Te.getRawSession();
          return this.Te.isValid(t);
        }
        handleSubdomainChange() {
          this.Te.handleSubdomainChange();
        }
        pollCacheRefreshEvent(t = !0) {
          let e = this.Te.isCacheRefreshed();
          return e && t && this.Te.resetCacheRefreshed(), e;
        }
        extendSessionPeriodically() {
          this.Mo || this.Vy();
        }
        extendSession() {
          let t = this.getSession();
          return t === null
            ? (J.warn("extendSession is trying to extend an expired session"),
              this.ud(),
              !1)
            : (this.setSession(t), !0);
        }
        Vy() {
          if (this.bI()) {
            this.ud();
            return;
          }
          this.extendSession() && (this.TI(), this.RI());
        }
        RI() {
          this.Mo = window.csSetTimeout(() => {
            this.Vy();
          }, ec - Bc);
        }
        bI() {
          return IA - (q.now() + ec - this.SI) < 0;
        }
        ud() {
          this.Mo && (window.csClearTimeout(this.Mo), (this.Mo = null));
        }
        TI() {
          (this.ld += 1),
            this.EI.trackDynamicVariable("session_expiry_update", this.ld);
        }
      }
      return s;
    })();
  var OA = (() => {
      class s {
        constructor(t, e, i) {
          (this.N = t), (this.C = e), (this.DI = i);
        }
        handle() {
          this.N.hasAllowSubdomainsChanged() &&
            (this.N.handleSubdomainChange(),
            this.C.handleSubdomainChange(),
            this.DI.handleSubdomainChange());
        }
      }
      return s;
    })(),
    va = "_cs_inc",
    NA = (() => {
      class s {
        constructor(t, e) {
          (this.Ht = t), (this.D = e);
        }
        isForceIncluded() {
          return this.kI() || this.xI();
        }
        isForceReplayRecorded() {
          return this.LI(z.RECORDING_GLOBAL_SAMPLING);
        }
        kI() {
          return this.D.get(va) !== null;
        }
        LI(t) {
          return this.D.get(va) === t;
        }
        xI() {
          return csString.prototype.indexOf.call(this.Ht.href, va) > 0;
        }
      }
      return s;
    })(),
    MA = (() => {
      class s {
        constructor(t, e, i) {
          (this.E = t), (this.N = e), (this.ys = i);
        }
        clear() {
          this.VI() &&
            ((this.Hy = this.N.getVisitor()), this.N.removeVisitor()),
            this.UI() && this.ys.removeExclusion();
        }
        VI() {
          return (
            this.N.doesVisitorExist() &&
            this.N.getVisitor().appliedTrackingDraw !== this.E.lastTrackingDraw
          );
        }
        UI() {
          return this.ys.getAppliedTrackingDraw() !== this.E.lastTrackingDraw;
        }
        restoreClearedVisitor() {
          this.Hy && this.N.setVisitor(this.Hy);
        }
      }
      return s;
    })(),
    DA = (() => {
      class s {
        constructor(t, e, i, n, o, c, h, d) {
          (this.E = t),
            (this.N = e),
            (this.ys = i),
            (this.jy = n),
            (this.HI = o),
            (this.jI = c),
            (this.BI = h),
            (this.sd = d);
        }
        compute(t) {
          var e, i;
          this.E.crossDomainTracking && !this.E.cookielessTrackingEnabled
            ? this.E.crossDomainSingleIframeTracking
              ? (e = this.BI) === null ||
                e === void 0 ||
                e.start(() => this.pd(t))
              : (i = this.jI) === null ||
                i === void 0 ||
                i.applyUpToDate(() => this.pd(t))
            : this.pd(t);
        }
        pd(t) {
          this.HI.handle(),
            this.jy.clear(),
            this.$I()
              ? (this.jy.restoreClearedVisitor(), t(!0))
              : (this.ys.exclude(this.E), t(!1));
        }
        $I() {
          let t = Ai.boolean(this.E.sampleRate);
          return (
            this.sd.isForceIncluded() ||
            (!this.ys.isExcluded() && this.N.doesVisitorExist()) ||
            (!this.ys.isExcluded() && t)
          );
        }
      }
      return s;
    })(),
    Au = (() => {
      class s {
        constructor(t, e, i, n) {
          (this.E = t),
            (this.it = e),
            (this.w = i),
            (this.C = n),
            (this.FI = 10 * 1e3);
        }
        createOrUpdateVisitor() {
          var t;
          let e = this.getVisitor();
          e === null &&
            ((e = this.GI()),
            (t = this.C) === null || t === void 0 || t.removeSession()),
            this.zI(e),
            this.setVisitor(e);
        }
        GI() {
          return {
            id: yd.generate(),
            visitsCount: 0,
            appliedTrackingDraw: this.E.lastTrackingDraw,
            creationTimestamp: Kc(),
            lastVisitTimestamp: 0,
            hitTimestamp: 0,
            expires: q.now() + this.E.visitorCookieTimeout,
            allowSubdomains: this.E.allowSubdomains,
            identityPrint: null,
          };
        }
        zI(t) {
          let e = Kc();
          this.C &&
            !this.C.doesSessionExist() &&
            ((t.visitsCount += 1), (t.lastVisitTimestamp = e)),
            (t.hitTimestamp = e),
            (t.appliedTrackingDraw = this.E.lastTrackingDraw),
            (this.By = t.visitsCount);
        }
        getRequestParameters() {
          let t = this.getVisitor();
          return t
            ? { uu: t.id, sn: `${t.visitsCount}`, hd: `${t.hitTimestamp}` }
            : {};
        }
        getVisitor() {
          return this.it.get();
        }
        setVisitor(t) {
          this.it.set(t);
        }
        doesVisitorExist() {
          return this.it.get() !== null;
        }
        resetVisitor() {
          this.$y(), this.w.emitAfterVisitorCleared();
        }
        removeVisitor() {
          this.it.remove();
        }
        hasAllowSubdomainsChanged() {
          let t = this.getVisitor();
          return t ? t.allowSubdomains !== this.E.allowSubdomains : !1;
        }
        handleSubdomainChange() {
          this.it.handleSubdomainChange();
        }
        isSessionRenewed() {
          let t = this.getVisitor();
          return t === null || this.By === void 0
            ? !1
            : t.visitsCount !== this.By;
        }
        qI() {
          return !ft(this.Fy) || q.now() - this.Fy > this.FI;
        }
        renewVisitor() {
          this.qI()
            ? ((this.Fy = q.now()), this.$y(), this.w.emitAfterVisitorRenewal())
            : J.warn(
                "session:start:newVisitor is trying to renew visitor under time limit"
              );
        }
        $y() {
          this.w.emitBeforeVisitorRenewal(), this.removeVisitor();
        }
      }
      return s;
    })(),
    ts = "_cs_id",
    bu = (() => {
      class s {
        constructor(t, e, i) {
          (this.E = t), (this.D = e), (this.ft = i);
        }
        onCookieSet(t) {
          this.Je = t;
        }
        onCookieRemoved(t) {
          this.Wi = t;
        }
        get() {
          let t;
          return (
            this.E.cookielessTrackingEnabled
              ? (t = this.ft.getItem(ts))
              : (t = this.D.get(ts)),
            t ? (Bg(t) || J.warn(`Invalid visitor string: ${t}`), Hg(t)) : null
          );
        }
        set(t) {
          var e;
          let i = jg(t);
          if (this.E.cookielessTrackingEnabled) this.ft.setItem(ts, i);
          else {
            let n = new csDate(t.expires);
            this.D.set(ts, i, n),
              (e = this.Je) === null || e === void 0 || e.call(this, ts, i, n);
          }
        }
        remove() {
          var t;
          this.E.cookielessTrackingEnabled
            ? this.ft.removeItem(ts)
            : (this.D.delete(ts),
              (t = this.Wi) === null || t === void 0 || t.call(this, ts));
        }
        handleSubdomainChange() {
          if (this.E.cookielessTrackingEnabled) return;
          let t = this.get();
          t &&
            ((t.allowSubdomains = this.E.allowSubdomains),
            this.E.allowSubdomains
              ? this.D.delete(ts, Xn.CURRENT_DOMAIN)
              : this.D.delete(ts, this.D.getRootDomain()),
            this.set(t));
        }
      }
      return s;
    })(),
    kA = (() => {
      class s {
        constructor(t, e, i, n, o, c) {
          (this.E = t),
            (this.Ti = e),
            (this.ur = i),
            (this.M = n),
            (this.w = o),
            (this.ft = c);
        }
        initWithQuota() {
          if (!this.E.collectionEnabled) {
            this.Gy(), Eu() && this.zy();
            return;
          }
          let t = new w_(this.E.getSettingsFileUri(), "", {
            type: "json",
            cacheMinutes: 15,
          });
          (this.Ct = new TA(this.E, t, this.w)),
            this.Ct.init((e, i) => {
              e ? this.init() : this.Gy(),
                Eu(i)
                  ? this.zy()
                  : rw(i) &&
                    ($n.set(tr.HJ_DUAL_COLLECT, !1),
                    st.counters.trackedFeatures.count(
                      "dual-collection-csq-replay"
                    ));
            });
        }
        zy() {
          $n.set(tr.HJ_DUAL_COLLECT, !0),
            window.dispatchEvent(new CustomEvent(iw)),
            st.counters.trackedFeatures.count("dual-collection-hj-replay");
        }
        qy() {
          this.M.schedule(() => {
            var t;
            (this.O = new ri()),
              (this.Q = new ug(this.O)),
              (this.A = new uw(window.location, this.Q)),
              (this.D = new Xn(this.E, this.A, this.Ti)),
              this.D.init(),
              (this._t = new A_());
            let e;
            !((t = this.E.experimental) === null || t === void 0) &&
              t.checkPIIMigration &&
              ((e = new Rg()), this.w.addListener(e)),
              (this.S = new Pg([Ig.UXA], e)),
              (this.z = new Og()),
              (this.J = new yw(e)),
              (this.bt = new k_(
                this.E,
                new D_(this.E, this.D, this._t),
                this.w
              ));
          });
        }
        Gy() {
          this.qy(),
            this.M.schedule(() => {
              let t = new bu(this.E, this.D, this.ft),
                e = new Au(this.E, t, this.w);
              new cw(
                this.E,
                this.w,
                this.S,
                e,
                this.A,
                this.z,
                this.O,
                this.J,
                this.D,
                this._t,
                this.bt
              ).start();
            });
        }
        init() {
          Tr.isSupported() && Tr.setDigestSalt(this.E.projectId.toString());
          let t,
            e,
            i,
            n,
            o,
            c,
            h,
            d,
            S,
            y,
            _,
            w,
            T,
            M,
            x,
            P,
            N,
            W,
            D,
            L,
            it,
            et,
            ht,
            Nt,
            oe,
            ae,
            I,
            Y,
            Q,
            nt,
            Pt,
            jt,
            Ne,
            us,
            ni,
            me;
          this.qy();
          let Je = new h_();
          this.w.addListener(Je),
            this.M.schedule(() => {
              (_ = new NA(window.location, this.D)),
                new R_().init(),
                (w = hd.create()),
                (y = new dd(w)),
                this.Ct === void 0 &&
                  ((this.Ct = new wA(this.E, this.w, _, this.A, new qn())),
                  this.Ct.init());
            }),
            this.M.schedule(() => {
              (t = new bA(this.E, this.D, this.ft)),
                (e = new PA(
                  t,
                  this.Ct,
                  this.w,
                  this.E.replayConsentRequiredForSession,
                  this.E.malkaEtrEnabled
                )),
                (i = new bu(this.E, this.D, this.ft)),
                (n = new Au(this.E, i, this.w, e)),
                this.ur.setContext(n, e);
            }),
            this.M.schedule(() => {
              var ce, le;
              (c = new OA(n, e, this.bt)),
                (h = new ua(this.E, this.D, this.ft, yh, Bd)),
                (d = new Kg(window.location, h)),
                (S = new Xg(d)),
                (M = new MA(this.E, n, d)),
                (Nt = new Lg(ti, this.E));
              let _t = new ua(this.E, this.D, this.ft, ny);
              (oe = new x_(this.O, _t)),
                (W = new oy(this.S, oe)),
                (Ne = new vw(e, n)),
                (us = new lw(this.Q, new fA()));
              let mt;
              (D = new _g(Nt, this.E.isChild, mt)),
                (L = new wg(Nt)),
                (it = new Ag(Nt)),
                (et = new Tg()),
                (ht = new vg(D, L, it, et)),
                (x = new Cg(this.S, ht)),
                (P = new Zg(this.A)),
                (N = new Jg(P, this.S));
              let H = new RA(n, e, d, oe, this.E, nt, Y, Pt);
            }),
            this.M.schedule(() => {
              let ce = new DA(this.E, n, d, M, c, T, o, _);
              this.E.implementations &&
                ((ae = new Qv(
                  this.E.implementations,
                  this.S,
                  this.M,
                  this.E.experimental.snippets
                )),
                ae.init(),
                this.w.addListener(ae)),
                ce.compute((le) => {
                  this.M.schedule(async () => {
                    x.init();
                    let _t = new M_(this.E, this.S, this.bt, e, this.w),
                      mt = new ua(this.E, this.D, this._t, rd, oc),
                      H = new e_(this.w, window.location, mt),
                      Ls = new t_(this.S, H),
                      hs = new hw(this.S, this.E),
                      ds = new Su(this.E, n, e),
                      or = new Su(this.E, n, e, Pt);
                    le
                      ? (this.w.emitInitTracking(),
                        new _A(
                          ds,
                          or,
                          w,
                          n,
                          e,
                          Ne,
                          us,
                          this.w,
                          this.S,
                          x,
                          this.E,
                          Ls,
                          H,
                          _t,
                          this.bt,
                          this.O,
                          Nt,
                          this.Q,
                          this.A,
                          hs,
                          this.z,
                          ht,
                          oe,
                          W,
                          P,
                          N,
                          this.M,
                          y,
                          this.D,
                          this._t,
                          this.ft,
                          this.Ct,
                          this.J,
                          jt,
                          nt,
                          I,
                          Y
                        ).start())
                      : new Yg(this.w, this.S, x, Ls, H, S, _t).start();
                  });
                });
            });
        }
      }
      return s;
    })(),
    xA = (() => {
      class s extends Sc {
        constructor(t) {
          super(), (this.M = t);
          {
            let e = (i, n) => {
              if (
                typeof n != "string" ||
                !csString.prototype.startsWith.call(n, "on")
              )
                return;
              let o = csString.prototype.substring.call(n, 2);
              return (...c) => {
                n === "onInitialDomDone" && (c = []),
                  document.dispatchEvent(
                    new CustomEvent("cs-e2e-event", {
                      detail: { type: "lifecycle", name: o, data: c },
                    })
                  );
              };
            };
            this.addListener(new Proxy({}, { get: e }));
          }
        }
        emitBeforeNaturalPageView(t) {
          for (let e of this.listeners)
            e.onBeforeNaturalPageView && e.onBeforeNaturalPageView(t);
        }
        emitAfterNaturalPageView(t) {
          for (let e of this.listeners)
            e.onAfterNaturalPageView && e.onAfterNaturalPageView(t);
        }
        emitInitTracking() {
          for (let t of this.listeners) t.onInitTracking && t.onInitTracking();
        }
        emitStartTracking(t) {
          for (let e of this.listeners)
            e.onStartTracking && this.M.schedule(() => e.onStartTracking(t));
        }
        emitStartNoTrackingMode() {
          for (let t of this.listeners)
            t.onStartNoTrackingMode &&
              this.M.schedule(() => t.onStartNoTrackingMode());
        }
        emitArtificialPageViewEnd(t = !1) {
          for (let e of this.listeners)
            if (e.onArtificialPageViewEnd)
              try {
                e.onArtificialPageViewEnd(t);
              } catch (i) {
                J.error(i);
              }
        }
        emitBeforeArtificialPageView(t, e) {
          for (let i of this.listeners)
            i.onBeforeArtificialPageView && i.onBeforeArtificialPageView(t, e);
        }
        emitAfterArtificialPageView(t = !1) {
          for (let e of this.listeners)
            e.onAfterArtificialPageView && e.onAfterArtificialPageView(t);
        }
        emitBeforeSessionRenewal() {
          for (let t of this.listeners)
            t.onBeforeSessionRenewal && t.onBeforeSessionRenewal();
        }
        emitAfterSessionRenewal() {
          for (let t of this.listeners)
            t.onAfterSessionRenewal && t.onAfterSessionRenewal();
        }
        emitOptout() {
          for (let t of this.listeners) t.onOptout && t.onOptout();
        }
        emitReplayUnanonymizationConsentGranted() {
          for (let t of this.listeners)
            t.onReplayUnanonymizationConsentGranted &&
              t.onReplayUnanonymizationConsentGranted();
        }
        emitReplayUnanonymizationConsentWithdrawn() {
          for (let t of this.listeners)
            t.onReplayUnanonymizationConsentWithdrawn &&
              t.onReplayUnanonymizationConsentWithdrawn();
        }
        emitAfterReplayRecordingConsentGranted() {
          for (let t of this.listeners)
            t.onAfterReplayRecordingConsentGranted &&
              t.onAfterReplayRecordingConsentGranted();
        }
        emitAfterReplayRecordingConsentWithdrawn() {
          for (let t of this.listeners)
            t.onAfterReplayRecordingConsentWithdrawn &&
              t.onAfterReplayRecordingConsentWithdrawn();
        }
        emitCollectStateChange(t, e) {
          for (let i of this.listeners)
            i.onCollectStateChange && i.onCollectStateChange(t, e);
        }
        emitInitialDomStart() {
          for (let t of this.listeners)
            t.onInitialDomStart && t.onInitialDomStart();
        }
        emitInitialDomDone(t) {
          for (let e of this.listeners)
            e.onInitialDomDone && e.onInitialDomDone(t);
        }
        emitRecordingContextChange() {
          for (let t of this.listeners)
            t.onRecordingContextChange && t.onRecordingContextChange();
        }
        emitSensitiveStatusChange() {
          var t;
          for (let e of this.listeners)
            (t = e.onSensitiveStatusChange) === null ||
              t === void 0 ||
              t.call(e);
        }
        emitBeforeVisitorRenewal() {
          for (let t of this.listeners)
            t.onBeforeVisitorRenewal && t.onBeforeVisitorRenewal();
        }
        emitAfterVisitorCleared() {
          for (let t of this.listeners)
            t.onAfterVisitorCleared && t.onAfterVisitorCleared();
        }
        emitAfterVisitorRenewal() {
          for (let t of this.listeners)
            t.onAfterVisitorRenewal && t.onAfterVisitorRenewal();
        }
        emitSessionCreated() {
          for (let t of this.listeners)
            t.onSessionCreated && t.onSessionCreated();
        }
        emitSessionRemoved() {
          for (let t of this.listeners)
            t.onSessionRemoved && t.onSessionRemoved();
        }
        emitSessionRefreshed() {
          for (let t of this.listeners)
            t.onSessionRefreshed && t.onSessionRefreshed();
        }
        emitTargetingRulesMatched() {
          for (let t of this.listeners)
            t.onTargetingRulesMatched && t.onTargetingRulesMatched();
        }
      }
      return (
        Z([Qt("emitStartTracking")], s.prototype, "emitStartTracking", null), s
      );
    })();
  var zi = "_cs_t",
    Tu = "1",
    LA = (() => {
      class s {
        constructor(t, e) {
          (this.It = t), (this.E = e), (this.Mc = !1), (this.Dc = !1);
        }
        init() {
          if (
            !this.E.cookielessTrackingEnabled &&
            this.It.isTopWindowTracker() &&
            "cookie" in document
          ) {
            if (!this.It.isInIframeContext() && Ut.isCookiePresent()) {
              (this.Mc = !0), (this.Dc = !1);
              return;
            }
            if ((Ut.set(zi, Tu, Ut.CURRENT_DOMAIN), Ut.get(zi) !== null)) {
              (this.Mc = !0), (this.Dc = !1), Ut.remove(zi, Ut.CURRENT_DOMAIN);
              return;
            }
            Ut.set(zi, Tu, Ut.CURRENT_DOMAIN, void 0, Qs.None, es.Yes),
              Ut.get(zi) !== null &&
                ((this.Mc = !0),
                (this.Dc = !0),
                Ut.remove(zi, Ut.CURRENT_DOMAIN));
          }
        }
        areCookiesEnabled() {
          return this.Mc;
        }
        isSameSiteNoneSecureNeeded() {
          return this.Dc;
        }
      }
      return s;
    })();
  function VA() {
    let s = "CSSessionStorageTest";
    try {
      return (
        sessionStorage.setItem(s, s),
        sessionStorage.getItem(s) !== s
          ? !1
          : (sessionStorage.removeItem(s), !0)
      );
    } catch {
      return !1;
    }
  }
  var UA = (() => {
      class s {
        constructor(t, e) {
          (this.E = t), (this.Ti = e);
        }
        canTrack() {
          return (
            this.E.isProjectActive() && this.GP() && this.cE() && this.zP()
          );
        }
        canTrackInChild() {
          return (
            this.E.isProjectActive() &&
            this.qP() &&
            (this.cE() || this.WP() || this.YP())
          );
        }
        zP() {
          return this.E.cookielessTrackingEnabled
            ? VA()
            : this.Ti.areCookiesEnabled();
        }
        cE() {
          return Mp(window.location.hostname, this.E.hostnames);
        }
        GP() {
          return !this.lE() && this.XP();
        }
        qP() {
          return !this.lE() && this.KP();
        }
        WP() {
          return (
            window.location.protocol === "about:" &&
            window.location.hostname === ""
          );
        }
        lE() {
          return (
            "visibilityState" in document &&
            document.visibilityState === "prerender"
          );
        }
        XP() {
          return this.uE() && this.JP();
        }
        KP() {
          return this.uE();
        }
        JP() {
          try {
            return !!window.localStorage;
          } catch {
            return !1;
          }
        }
        uE() {
          return (
            "pageXOffset" in window &&
            "pageYOffset" in window &&
            "onpagehide" in window &&
            "JSON" in window &&
            "parse" in window.csJSON &&
            "stringify" in window.csJSON &&
            "addEventListener" in window &&
            "removeEventListener" in window &&
            "Node" in window &&
            "filter" in csArray.prototype &&
            "forEach" in csArray.prototype &&
            "querySelectorAll" in document &&
            "now" in csDate &&
            "keys" in Object &&
            "performance" in window &&
            "Map" in window &&
            "Set" in window
          );
        }
        YP() {
          return (
            this.E.isWebView &&
            window.location.protocol === "file:" &&
            window.location.hostname === ""
          );
        }
      }
      return s;
    })(),
    vi = (() => {
      let s;
      return (
        (function (r) {
          let t = "{domain}/tag/tag.bundle.js?v={version}",
            e,
            i = {
              loadBundle(N) {
                let W = N.source,
                  D = N.data;
                if (c(D)) {
                  let L = () => {
                    let it = n(t, D);
                    _(it, () => W.postMessage("csBundleLoaded", N.origin));
                  };
                  (e = D.token), P(i.loadBundle), h(N.origin) && L();
                }
              },
            };
          function n(N, W) {
            return csString.prototype.replace.call(
              csString.prototype.replace.call(
                csString.prototype.replace.call(N, "{version}", W.version),
                "{token}",
                W.token
              ),
              "{domain}",
              W.domain
            );
          }
          function o() {
            return e;
          }
          r.getToken = o;
          function c(N) {
            return (
              N &&
              N.type === "csBundleInjection" &&
              h(N.domain) &&
              S(N.version) &&
              d(N.token)
            );
          }
          (r.isAuthorizedIncomingMessage = c),
            (r.hjDomainRegex = /^https?:\/\/[a-zA-Z0-9\.\-]+\.hotjar\.com$/);
          function h(N) {
            return (
              /^https?:\/\/[a-zA-Z0-9\.\-]+\.(content-square\.fr|contentsquare\.com|csq\.io)$/.test(
                N
              ) || r.hjDomainRegex.test(N)
            );
          }
          r.isAuthorizedDomain = h;
          function d(N) {
            return /^[a-zA-Z0-9]+$/.test(N);
          }
          r.isAuthorizedToken = d;
          function S(N) {
            return /^[a-zA-Z0-9\.]+$/.test(N);
          }
          r.isAuthorizedTagVersion = S;
          function y() {
            let N = window.opener || window.parent;
            return window !== N && window.addEventListener;
          }
          r.isActivable = y;
          function _(N, W) {
            let D = document.createElement("script");
            (D.type = "text/javascript"),
              (D.async = !0),
              (D.src = N),
              (D.onload = W),
              (D.charset = "utf-8"),
              document.head.appendChild(D);
          }
          r.addScript = _;
          function w(N) {
            let W = document.createElement("link");
            (W.rel = "stylesheet"), (W.href = N), document.head.appendChild(W);
          }
          r.addStyle = w;
          function T(N) {
            return `${N}?cb=${new csDate().getTime()}`;
          }
          r.addCacheBusting = T;
          function M() {
            x(i.loadBundle);
          }
          r.waitForBundleInjection = M;
          function x(N) {
            window.addEventListener("message", N, !1);
          }
          r.listen = x;
          function P(N) {
            window.removeEventListener("message", N, !1);
          }
          r.removeListener = P;
        })(s || (s = {})),
        s
      );
    })(),
    Ru = "_hp_ved",
    HA = 18e5,
    jA = "/js/ved.js",
    BA = "/css/ved.css",
    $A = "/js/ved.css",
    FA = (() => {
      let s;
      return (
        (function (r) {
          r.StatusUpdate = "status";
        })(s || (s = {})),
        s
      );
    })(),
    GA = (() => {
      let s;
      return (
        (function (r) {
          r.ReceivedInitMessage = "received_init_message";
        })(s || (s = {})),
        s
      );
    })();
  var _a = (() => {
      let s;
      return (
        (function (r) {
          let t = !1,
            e;
          function i(_) {
            return e + _;
          }
          function n() {
            let _ = [i(BA), i($A)];
            csArray.prototype.forEach.call(_, (w) => {
              vi.addStyle(w);
            });
          }
          function o(_) {
            let w = new csRegExp("(^|;)[ ]*" + _ + "=([^;]*)"),
              T = w.exec(document.cookie);
            return T ? decodeURIComponent(T[2]) : null;
          }
          function c(_, w, T) {
            let M = encodeURIComponent(_) + "=" + encodeURIComponent(w),
              x = new csDate();
            x.setTime(x.getTime() + T);
            let P = M + "; expires=" + x.toUTCString() + "; path=/";
            document.cookie = P;
          }
          function h() {
            c(Ru, "on", HA);
          }
          function d() {
            return o(Ru) === "on";
          }
          r.isVLCookieEnabled = d;
          function S(_) {
            window.heapV = Object.assign({}, window.heap, {
              source: _ == null ? void 0 : _.source,
              uri: e,
              loadArgs: _ == null ? void 0 : _.data.args,
              identify: () => {},
              track: () => {},
            });
          }
          r.initializeHeapV = S;
          function y(_, w) {
            var T;
            if (((e = _), w)) {
              let M = { type: FA.StatusUpdate, value: GA.ReceivedInitMessage },
                x = { targetOrigin: w == null ? void 0 : w.origin };
              (T = w == null ? void 0 : w.source) === null ||
                T === void 0 ||
                T.postMessage(M, x);
            }
            t ||
              ((t = !0), h(), S(w), window.heapV && (vi.addScript(i(jA)), n()));
          }
          r.init = y;
        })(s || (s = {})),
        s
      );
    })(),
    zA = (() => {
      let s;
      return (
        (function (r) {
          let t = window.opener || window.parent,
            e = "tag",
            i = "https://app.contentsquare.com",
            n = [
              /^https:\/\/app\.contentsquare\.com$/,
              /^https:\/\/dev-app\.contentsquare\.com$/,
              /^https:\/\/staging-app\.contentsquare\.com$/,
              /^https:\/\/.*\.test\.contentsquare\.com$/,
              /^https:\/\/app\.[a-z0-9-]+\.csiab\.[a-z0-9-]+\.csq\.io$/,
              vi.hjDomainRegex,
            ],
            o,
            c,
            h,
            d = {
              initHeapVisualLabeler(L) {
                var it;
                L.origin === h &&
                  ((it = L.data) === null || it === void 0
                    ? void 0
                    : it.message) === "init" &&
                  L.source &&
                  (_a.init(h, L), N(d.initHeapVisualLabeler));
              },
              ping(L) {
                typeof L.data == "string" &&
                  L.data === "ping" &&
                  _(L.origin) &&
                  ((c = L.origin),
                  (o = vi.hjDomainRegex.test(L.origin) ? i : L.origin),
                  N(d.ping),
                  P(d.insertMessageScript),
                  w(vi.addCacheBusting("utils.js")));
              },
              insertMessageScript: W((L) => {
                typeof L.data == "string" &&
                  L.data !== "ping" &&
                  (N(d.insertMessageScript), w(L.data));
              }),
            };
          function S() {
            return vi.getToken();
          }
          r.getToken = S;
          function y() {
            return window !== t && window.addEventListener;
          }
          r.isActivable = y;
          function _(L) {
            return csArray.prototype.some.call(n, (it) => it.test(L));
          }
          r.isAuthorizedDomain = _;
          function w(L, it) {
            let et = document.createElement("script");
            (et.type = "text/javascript"), (et.async = !0);
            let ht =
              o == null
                ? void 0
                : csString.prototype.replace.call(o, /^https?:/, "");
            (et.src = `${ht}/${e}/${L}`),
              (et.onload = it),
              (et.charset = "utf-8"),
              document.getElementsByTagName("head")[0].appendChild(et),
              T(L);
          }
          function T(L) {
            csString.prototype.includes.call(L, "&mode=") &&
              sessionStorage.setItem(
                "_hjRetakerMode",
                csString.prototype.split.call(L, "&mode=")[1]
              );
          }
          function M() {
            P(d.ping), vi.waitForBundleInjection();
          }
          r.waitForConnection = M;
          function x(L) {
            (h = L),
              P(d.initHeapVisualLabeler),
              _a.isVLCookieEnabled() && _a.init(h);
          }
          r.waitForHeapVisualLabeler = x;
          function P(L) {
            window.addEventListener("message", L, !1);
          }
          r.listen = P;
          function N(L) {
            window.removeEventListener("message", L, !1);
          }
          r.removeListener = N;
          function W(L) {
            return function (it) {
              it.origin === c && L(it);
            };
          }
          r.secureListener = W;
          function D(L) {
            c && t.postMessage(L, c);
          }
          r.post = D;
        })(s || (s = {})),
        s
      );
    })();
  var wn = window.CSFrameCommunication || zA,
    qA = (() => {
      class s {
        setItem(t, e) {
          window.sessionStorage.setItem(t, e);
        }
        getItem(t) {
          return window.sessionStorage.getItem(t);
        }
        removeItem(t) {
          window.sessionStorage.removeItem(t);
        }
      }
      return s;
    })(),
    Cu = "cs_verify_install_auto",
    Iu = "cs_verify_install",
    WA = "hjVerifyInstall",
    YA = "hjVerifyUUID",
    XA = (() => {
      class s {
        constructor(t, e) {
          (this.E = t), (this.ft = e);
        }
        verifyInstallation() {
          var t;
          let e = Gp(),
            i = e[WA] || "",
            n = e[YA] || "",
            o,
            c = 0;
          try {
            o = this.ft.getItem(Iu);
          } catch {}
          if (i || o) {
            if (((c = Number(i || o) || 0), i))
              try {
                this.ft.setItem(Iu, i);
              } catch {}
            if (
              ((t = window.CSQ_TAGS) === null || t === void 0
                ? void 0
                : t.length) > 1
            ) {
              this.QP(c, n);
              return;
            }
            this.ZP(c, n);
          }
        }
        verifyInstallationAuto() {
          if (this.E.trackingCodeVerified) return;
          let t = null;
          try {
            t = this.ft.getItem(Cu);
          } catch {}
          let e = `${this.E.projectId}`;
          if (!t || t !== e) {
            let i = new xn({
              endpoint: this.tO(),
              contentType: "application/json",
            });
            i.send({}),
              i.onLoad(() => {
                this.ft.setItem(Cu, e);
              }),
              i.onError((n) => {
                J.error(
                  `Failed to report verification results: ${n}`,
                  "verifyInstallationAuto"
                );
              });
          }
        }
        tO() {
          return `${this.E.getVerificationEndpoint()}/v2/projects/${
            this.E.projectId
          }/verify-installation/auto`;
        }
        eO(t) {
          return `${this.E.getVerificationEndpoint()}/v1/verification/${t}/result`;
        }
        hE(t, e) {
          this.Jr({
            title: "Contentsquare installation invalid",
            message:
              "The tracking code you are trying to verify does not match the one installed on this page. Please make sure you install the correct tracking code provided for this site.",
            status: "bad",
          }),
            this.Lo({
              verifyUUID: e,
              status: "wrong_code",
              detail: {
                expected: csString(t),
                actual: csString(this.E.projectId),
              },
            });
          let i = `Passed projectId: ${t} != Configured Site ${this.E.projectId}`;
          J.error(i, "verifyInstallation");
        }
        QP(t, e) {
          let i = csArray.prototype.filter.call(
              window.CSQ_TAGS,
              function (d, S) {
                return csArray.prototype.indexOf.call(window.CSQ_TAGS, d) === S;
              }
            ),
            n =
              "You have " +
              window.CSQ_TAGS.length +
              " tracking scripts installed on your site. ",
            o = !!window.dataLayer,
            c;
          i.length > 1
            ? ((c =
                n +
                "Please remove the duplicate scripts to prevent data collection issues."),
              this.Jr({
                title: "Multiple different Contentsquare scripts detected",
                message: c,
                status: "bad",
              }),
              this.Lo({
                verifyUUID: e,
                status: "multiple_codes",
                detail: {
                  expected: csString(t),
                  actual: csArray.prototype.map.call(i, csString),
                  gtm: !1,
                },
              }))
            : o
            ? ((c =
                n +
                "If you've installed Contentsquare through GTM - please remove the duplicate scripts to prevent data collection issues."),
              this.Jr({
                title: "Multiple Contentsquare scripts detected",
                message: c,
                status: "bad",
              }),
              this.Lo({
                verifyUUID: e,
                status: "multiple_codes",
                detail: {
                  expected: csString(t),
                  actual: csArray.prototype.map.call(i, csString),
                  gtm: !0,
                },
              }))
            : t === this.E.projectId
            ? ((c =
                n +
                "This will not affect data collection, but we do suggest removing redundant scripts."),
              this.Jr({
                title: "Multiple Contentsquare scripts detected",
                message: c,
                status: "warning",
              }),
              this.Lo({
                verifyUUID: e,
                status: "warning",
                detail: { expected: csString(t), reason: "multiple scripts" },
              }))
            : this.hE(t, e);
          let h =
            "Passed Site ID: " +
            t +
            " contains multiple scripts " +
            csArray.prototype.join.call(window.CSQ_TAGS, ", ");
          J.error(h, "verifyInstallation");
        }
        ZP(t, e) {
          if (t === this.E.projectId) {
            let i = () =>
                this.Jr({
                  title: "Contentsquare installation verified",
                  message:
                    "The Contentsquare tracking code has been properly installed on this page. Browse your site in this window if you wish to verify installation on any other pages.",
                  status: "good",
                }),
              n = () =>
                this.Jr({
                  title: "Error reporting verification results",
                  message:
                    "There was an error reporting the verification result. Please try again.",
                  status: "bad",
                });
            this.Lo({ verifyUUID: e, status: "ok", onSuccess: i, onError: n });
          } else this.hE(t, e);
        }
        sO(t) {
          switch (t) {
            case "good":
              return "\u2705";
            case "bad":
              return "\u274C";
            case "warning":
              return "\u26A0\uFE0F";
            default:
              return "\u2139\uFE0F";
          }
        }
        Jr({ title: t, message: e, status: i }) {
          let o = `${this.sO(i)} ${t}

${e}`;
          window.alert(o);
        }
        Lo({ verifyUUID: t, detail: e, status: i, onSuccess: n, onError: o }) {
          if (!t) return;
          let c = new xn({
              endpoint: this.eO(t),
              contentType: "application/json",
            }),
            h = { ...(e && { error_detail: e }), status: i };
          c.send(h),
            c.onLoad((d) => {
              d.status < 400 ? n && n() : o && o();
            }),
            c.onError((d) => {
              J.error(
                `Failed to report verification results: ${d}`,
                "verifyInstallation"
              ),
                o && o();
            });
        }
      }
      return s;
    })(),
    KA = (() => {
      class s {
        constructor(t, e, i) {
          (this.E = t), (this.It = e), (this.ur = i);
        }
        start() {
          var t, e, i, n, o;
          if (
            ((window.CSQ_TAGS = csArray.prototype.concat.call(
              window.CSQ_TAGS || [],
              this.E.projectId
            )),
            window.UXAnalytics)
          )
            return;
          window.UXAnalytics = {};
          let c = new qA();
          if (!this.It.isInWebViewContext()) {
            let _ = new XA(this.E, c);
            _.verifyInstallationAuto(), _.verifyInstallation();
          }
          let h = new ed(
              !!(
                !((t = this.E.taskSchedulerOptions) === null || t === void 0) &&
                t.enabled
              ),
              (e = this.E.taskSchedulerOptions) === null || e === void 0
                ? void 0
                : e.maxProcessingTime,
              (i = this.E.taskSchedulerOptions) === null || i === void 0
                ? void 0
                : i.waitDuration
            ),
            d = new LA(this.It, this.E);
          d.init();
          let S = new UA(this.E, d);
          if (this.It.isTopWindowTracker() && S.canTrack()) {
            if (
              (!(
                (n = window.CSProtectnativeFunctionsLogs) === null ||
                n === void 0
              ) &&
                n.Warning &&
                J.warn(
                  `protectNativeFunctions failed: ${window.CSProtectnativeFunctionsLogs.Warning}`
                ),
              !(
                (o = window.CSProtectnativeFunctionsLogs) === null ||
                o === void 0
              ) && o.Critical)
            ) {
              J.error(
                `protectNativeFunctions failed: ${window.CSProtectnativeFunctionsLogs.Critical}`
              );
              return;
            }
            og();
            let _ = new xA(h),
              w = new kA(this.E, d, this.ur, h, _, c);
            this.E.isQuotaEnabled() ? w.initWithQuota() : w.init();
          }
          let y =
            csString.prototype.indexOf.call(window.location.href, "csDebug=1") >
            -1;
          (window.UXAnalytics = {
            Sensitive: {
              isNodeSensitive(_) {
                return F.isMaskedElement(_) || F.isMaskedElementChild(_);
              },
              isAttributeSensitive(_, w) {
                return F.isMaskedAttribute(_, w);
              },
              getSensitiveAttributes(_) {
                return On(_.attributes, (w) => F.isMaskedAttribute(_, w.name));
              },
            },
            Console: {
              warn(_) {
                y && console.warn("cs.tracking.warning", _);
              },
              error(_) {
                y && console.error("cs.tracking.error", _);
              },
            },
            Version: Qu,
          }),
            window.CSFrameCommunication ||
              ((window.CSFrameCommunication = wn),
              wn.isActivable() && wn.waitForConnection(),
              this.E.isCsCrosswritingHeap() &&
                wn.waitForHeapVisualLabeler(this.E.getHeapWebAppUri()));
        }
      }
      return (
        Z([Qt("main.start"), $("main.start")], s.prototype, "start", null), s
      );
    })(),
    JA = (() => {
      class s {
        constructor(t, e, i, n = s.THROTTLE_INTERVAL) {
          var o;
          (this.send = t),
            (this.getRequestParameters = e),
            (this.onInit = i),
            (this.queue = []),
            (this.throttledFlush = Pd(() => this._flush(), {
              wait: n,
              mode: "trailing",
            })),
            (o = this.onInit) === null || o === void 0 || o.call(this);
        }
        _flush() {
          this.queue.length !== 0 &&
            (this.send({
              m: csArray.prototype.map.call(this.queue, (t) => ({
                n: t.name,
                p: t.parameter,
                v: t.value,
              })),
              ...this.getRequestParameters(),
            }),
            (this.queue = []));
        }
        push(t) {
          csArray.prototype.push.call(this.queue, ...t), this.throttledFlush();
        }
      }
      return (s.THROTTLE_INTERVAL = 5e3), s;
    })();
  function QA() {
    csSetTimeout(() => {
      let s = 0;
      typeof CompressionStream != "undefined" && (s |= 1),
        typeof TransformStream != "undefined" && (s |= 2),
        typeof performance != "undefined" &&
          typeof performance.now == "function" &&
          (s |= 4),
        typeof Worker != "undefined" && (s |= 8),
        typeof scheduler != "undefined" &&
          (typeof scheduler.yield == "function" && (s |= 16),
          typeof scheduler.postTask == "function" && (s |= 32)),
        st.counters.availableFeatures.set(s);
    });
  }
  var ZA = (() => {
    class s extends JA {
      constructor(t, e, i) {
        let n = () => {
            QA();
          },
          o = () => ({
            p: e.anonymizePII(window.location.pathname),
            pid: i,
            v: gc().v,
          });
        super(t.send.bind(t), o, n);
      }
    }
    return s;
  })();
  function tb(s, r) {
    let t = s.validationRate / 10,
      e = Ai.boolean(t);
    if ((s.environment === "staging" || !1 || e) && !r.isInWebViewContext())
      try {
        let o = hd.create(r.isTopWindowTracker()),
          h = new dd(o).create(s.getMetricsUri(), void 0, void 0, !0),
          d = new ri(),
          S = new ZA(h, d, s.projectId);
        st.setService(S);
      } catch (o) {
        J.warn(`Error initializing metrics: ${o.message}`);
      }
  }
  function eb() {
    var s;
    Jd();
    let r = new ah(window.CS_CONF);
    (window._uxa = window._uxa || []), r.processOptionOverrides(window._uxa);
    let t = new ap(window, r);
    t.init();
    let e = new kp();
    if (
      (Vd(J),
      tp(J),
      rp((n, o) => ks(o, [He.EventListener, n])),
      ip((n, o) => ks(o, [He.MonkeyPatch, n])),
      np(),
      J.computeIsActive(r.validationRate),
      t.isTopWindowTracker())
    ) {
      let n = new Up(r, e);
      J.setStrategy(n);
    } else if (t.isInWebViewContext()) {
      let n = new Bp();
      J.setStrategy(n);
    }
    !((s = r == null ? void 0 : r.experimental) === null || s === void 0) &&
      s.disableMutationObserverProtection &&
      window.csMutationObserver &&
      (window.csMutationObserver = Ci(window, "MutationObserver")),
      jf(),
      tb(r, t),
      new KA(r, t, e).start();
  }
  function sb(s) {
    let r = s instanceof Error ? s : new Error(csString(s));
    if (!J.getStrategy()) {
      let t = { projectId: 1, validationRate: 10 },
        e = new ah(window.CS_CONF || t);
      J.computeIsActive(e.validationRate), J.setStrategy(new Pp(e));
    }
    J.error(r, "trackingTagStartup");
  }
  window.CSCurrentScript = document.currentScript;
  csSetTimeout(() => {
    try {
      op(eb);
    } catch (s) {
      sb(s);
    }
  });
})();

// signature-6e98190fd5c51af8bb30b87ce6235997cbd8037bf506e55215e518419c455de3
