(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const o of l)
      if (o.type === "childList")
        for (const i of o.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const o = {};
    return (
      l.integrity && (o.integrity = l.integrity),
      l.referrerPolicy && (o.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : l.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const o = n(l);
    fetch(l.href, o);
  }
})();
function mc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Zs = { exports: {} },
  ll = {},
  Js = { exports: {} },
  T = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Zn = Symbol.for("react.element"),
  hc = Symbol.for("react.portal"),
  gc = Symbol.for("react.fragment"),
  vc = Symbol.for("react.strict_mode"),
  yc = Symbol.for("react.profiler"),
  wc = Symbol.for("react.provider"),
  kc = Symbol.for("react.context"),
  Sc = Symbol.for("react.forward_ref"),
  xc = Symbol.for("react.suspense"),
  Cc = Symbol.for("react.memo"),
  Ec = Symbol.for("react.lazy"),
  Ai = Symbol.iterator;
function jc(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ai && e[Ai]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var qs = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  bs = Object.assign,
  eu = {};
function sn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = eu),
    (this.updater = n || qs);
}
sn.prototype.isReactComponent = {};
sn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
sn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function tu() {}
tu.prototype = sn.prototype;
function Qo(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = eu),
    (this.updater = n || qs);
}
var Ko = (Qo.prototype = new tu());
Ko.constructor = Qo;
bs(Ko, sn.prototype);
Ko.isPureReactComponent = !0;
var Vi = Array.isArray,
  nu = Object.prototype.hasOwnProperty,
  Go = { current: null },
  ru = { key: !0, ref: !0, __self: !0, __source: !0 };
function lu(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      nu.call(t, r) && !ru.hasOwnProperty(r) && (l[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) l.children = n;
  else if (1 < s) {
    for (var u = Array(s), c = 0; c < s; c++) u[c] = arguments[c + 2];
    l.children = u;
  }
  if (e && e.defaultProps)
    for (r in ((s = e.defaultProps), s)) l[r] === void 0 && (l[r] = s[r]);
  return {
    $$typeof: Zn,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: Go.current,
  };
}
function Nc(e, t) {
  return {
    $$typeof: Zn,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Yo(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Zn;
}
function _c(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Bi = /\/+/g;
function Cl(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? _c("" + e.key)
    : t.toString(36);
}
function kr(e, t, n, r, l) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (o) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Zn:
          case hc:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (l = l(i)),
      (e = r === "" ? "." + Cl(i, 0) : r),
      Vi(l)
        ? ((n = ""),
          e != null && (n = e.replace(Bi, "$&/") + "/"),
          kr(l, t, n, "", function (c) {
            return c;
          }))
        : l != null &&
          (Yo(l) &&
            (l = Nc(
              l,
              n +
                (!l.key || (i && i.key === l.key)
                  ? ""
                  : ("" + l.key).replace(Bi, "$&/") + "/") +
                e
            )),
          t.push(l)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), Vi(e)))
    for (var s = 0; s < e.length; s++) {
      o = e[s];
      var u = r + Cl(o, s);
      i += kr(o, t, n, u, l);
    }
  else if (((u = jc(e)), typeof u == "function"))
    for (e = u.call(e), s = 0; !(o = e.next()).done; )
      (o = o.value), (u = r + Cl(o, s++)), (i += kr(o, t, n, u, l));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return i;
}
function rr(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    kr(e, r, "", "", function (o) {
      return t.call(n, o, l++);
    }),
    r
  );
}
function Lc(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var ae = { current: null },
  Rus = { transition: null },
  zc = {
    ReactCurrentDispatcher: ae,
    ReactCurrentBatchConfig: Rus,
    ReactCurrentOwner: Go,
  };
T.Children = {
  map: rr,
  forEach: function (e, t, n) {
    rr(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      rr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      rr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Yo(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
T.Component = sn;
T.Fragment = gc;
T.Profiler = yc;
T.PureComponent = Qo;
T.StrictMode = vc;
T.Suspense = xc;
T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = zc;
T.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = bs({}, e.props),
    l = e.key,
    o = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (i = Go.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var s = e.type.defaultProps;
    for (u in t)
      nu.call(t, u) &&
        !ru.hasOwnProperty(u) &&
        (r[u] = t[u] === void 0 && s !== void 0 ? s[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    s = Array(u);
    for (var c = 0; c < u; c++) s[c] = arguments[c + 2];
    r.children = s;
  }
  return { $$typeof: Zn, type: e.type, key: l, ref: o, props: r, _owner: i };
};
T.createContext = function (e) {
  return (
    (e = {
      $$typeof: kc,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: wc, _context: e }),
    (e.Consumer = e)
  );
};
T.createElement = lu;
T.createFactory = function (e) {
  var t = lu.bind(null, e);
  return (t.type = e), t;
};
T.createRef = function () {
  return { current: null };
};
T.forwardRef = function (e) {
  return { $$typeof: Sc, render: e };
};
T.isValidElement = Yo;
T.lazy = function (e) {
  return { $$typeof: Ec, _payload: { _status: -1, _result: e }, _init: Lc };
};
T.memo = function (e, t) {
  return { $$typeof: Cc, type: e, compare: t === void 0 ? null : t };
};
T.startTransition = function (e) {
  var t = Rus.transition;
  Rus.transition = {};
  try {
    e();
  } finally {
    Rus.transition = t;
  }
};
T.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
T.useCallback = function (e, t) {
  return ae.current.useCallback(e, t);
};
T.useContext = function (e) {
  return ae.current.useContext(e);
};
T.useDebugValue = function () {};
T.useDeferredValue = function (e) {
  return ae.current.useDeferredValue(e);
};
T.useEffect = function (e, t) {
  return ae.current.useEffect(e, t);
};
T.useId = function () {
  return ae.current.useId();
};
T.useImperativeHandle = function (e, t, n) {
  return ae.current.useImperativeHandle(e, t, n);
};
T.useInsertionEffect = function (e, t) {
  return ae.current.useInsertionEffect(e, t);
};
T.useLayoutEffect = function (e, t) {
  return ae.current.useLayoutEffect(e, t);
};
T.useMemo = function (e, t) {
  return ae.current.useMemo(e, t);
};
T.useReducer = function (e, t, n) {
  return ae.current.useReducer(e, t, n);
};
T.useRef = function (e) {
  return ae.current.useRef(e);
};
T.useState = function (e) {
  return ae.current.useState(e);
};
T.useSyncExternalStore = function (e, t, n) {
  return ae.current.useSyncExternalStore(e, t, n);
};
T.useTransition = function () {
  return ae.current.useTransition();
};
T.version = "18.2.0";
Js.exports = T;
var ee = Js.exports;
const Pc = mc(ee);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Tc = ee,
  Ic = Symbol.for("react.element"),
  Mc = Symbol.for("react.fragment"),
  Rc = Object.prototype.hasOwnProperty,
  Dc = Tc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Oc = { key: !0, ref: !0, __self: !0, __source: !0 };
function ou(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) Rc.call(t, r) && !Oc.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: Ic,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: Dc.current,
  };
}
ll.Fragment = Mc;
ll.jsx = ou;
ll.jsxs = ou;
Zs.exports = ll;
var p = Zs.exports;
const Fc = "Close",
  $c = { hello: "Hello, i am", name: "Buzruk", webdeveloper: "Web Developer" },
  Uc = {
    title: "About me",
    description:
      "Full Stack Developer with 1+ years of experience building web and mobile applications using diverse technologies like .NET, Python, JavaScript, and Swift. Passionate open-source contributor with a strong project portfolio on GitHub.",
  },
  Ac = {
    darkmode: "Dark mode",
    lightmode: "Light mode",
    english: "English",
    Russian: "Russian",
    sound: "Sound",
    mute: "Mute",
    theme: "Change theme",
    code: "View code",
  },
  Vc = { title: "Social networks" },
  Bc = { title: "Skills" },
  Wc = { title: "Projects", more: "View more", code: "Code", live: "Live" },
  Hc = {
    close: Fc,
    title: $c,
    about: Uc,
    settings: Ac,
    social: Vc,
    skills: Bc,
    projects: Wc,
  },
  Qc = "Закрывать",
  Kc = {
    hello: "Здравствуйте, я",
    name: "Бузрук",
    webdeveloper: "Full-Stack разработчик",
  },
  Gc = {
    title: "Обо мне",
    description:
      "Full Stack Developer с более чем 1-летним опытом создания веб- и мобильных приложений с использованием различных технологий, таких как .NET, Python, JavaScript и Swift. Увлеченный участник открытого исходного кода с сильным портфолио проектов на GitHub.",
  },
  Yc = {
    darkmode: "Темный режим",
    lightmode: "Светлый режим",
    english: "Английский",
    Russian: "Русский",
    sound: "Звук",
    mute: "беззвучный",
    theme: "Менять тему",
    code: "Посмотреть код",
  },
  Xc = { title: "Социальные сети" },
  Zc = { title: "Навыки" },
  Jc = { title: "Проекты", more: "Посмотреть больше", code: "Код", live: "Живой" },
  qc = {
    close: Qc,
    title: Kc,
    about: Gc,
    settings: Yc,
    social: Xc,
    skills: Zc,
    projects: Jc,
  },
  iu = ee.createContext(),
  Wi = ["en", "ru"],
  bc = ({ children: e }) => {
    let t = localStorage.getItem("language")
      ? localStorage.getItem("language")
      : navigator.language.substring(0, 2) ||
        navigator.userLanguage.substring(0, 2);
    t = Wi.includes(t) ? t : "en";
    const [n, r] = ee.useState(t),
      l = n === "en" ? Hc : qc;
    ee.useEffect(() => {
      localStorage.setItem("language", n);
    }, [n]);
    const o = (i) => {
      console.log(i),
        r(Wi.includes(i) ? i : "en"),
        (document.documentElement.lang = i);
    };
    return p.jsx(iu.Provider, {
      value: { language: n, changeLanguage: o, translations: l },
      children: e,
    });
  },
  mt = () => ee.useContext(iu);
var Xl = {},
  su = { exports: {} },
  ke = {},
  uu = { exports: {} },
  au = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(j, z) {
    var P = j.length;
    j.push(z);
    e: for (; 0 < P; ) {
      var Q = (P - 1) >>> 1,
        Z = j[Q];
      if (0 < l(Z, z)) (j[Q] = z), (j[P] = Z), (P = Q);
      else break e;
    }
  }
  function n(j) {
    return j.length === 0 ? null : j[0];
  }
  function r(j) {
    if (j.length === 0) return null;
    var z = j[0],
      P = j.pop();
    if (P !== z) {
      j[0] = P;
      e: for (var Q = 0, Z = j.length, tr = Z >>> 1; Q < tr; ) {
        var yt = 2 * (Q + 1) - 1,
          xl = j[yt],
          wt = yt + 1,
          nr = j[wt];
        if (0 > l(xl, P))
          wt < Z && 0 > l(nr, xl)
            ? ((j[Q] = nr), (j[wt] = P), (Q = wt))
            : ((j[Q] = xl), (j[yt] = P), (Q = yt));
        else if (wt < Z && 0 > l(nr, P)) (j[Q] = nr), (j[wt] = P), (Q = wt);
        else break e;
      }
    }
    return z;
  }
  function l(j, z) {
    var P = j.sortIndex - z.sortIndex;
    return P !== 0 ? P : j.id - z.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var i = Date,
      s = i.now();
    e.unstable_now = function () {
      return i.now() - s;
    };
  }
  var u = [],
    c = [],
    g = 1,
    h = null,
    m = 3,
    w = !1,
    k = !1,
    S = !1,
    $ = typeof setTimeout == "function" ? setTimeout : null,
    d = typeof clearTimeout == "function" ? clearTimeout : null,
    a = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function f(j) {
    for (var z = n(c); z !== null; ) {
      if (z.callback === null) r(c);
      else if (z.startTime <= j)
        r(c), (z.sortIndex = z.expirationTime), t(u, z);
      else break;
      z = n(c);
    }
  }
  function v(j) {
    if (((S = !1), f(j), !k))
      if (n(u) !== null) (k = !0), kl(E);
      else {
        var z = n(c);
        z !== null && Sl(v, z.startTime - j);
      }
  }
  function E(j, z) {
    (k = !1), S && ((S = !1), d(L), (L = -1)), (w = !0);
    var P = m;
    try {
      for (
        f(z), h = n(u);
        h !== null && (!(h.expirationTime > z) || (j && !Le()));

      ) {
        var Q = h.callback;
        if (typeof Q == "function") {
          (h.callback = null), (m = h.priorityLevel);
          var Z = Q(h.expirationTime <= z);
          (z = e.unstable_now()),
            typeof Z == "function" ? (h.callback = Z) : h === n(u) && r(u),
            f(z);
        } else r(u);
        h = n(u);
      }
      if (h !== null) var tr = !0;
      else {
        var yt = n(c);
        yt !== null && Sl(v, yt.startTime - z), (tr = !1);
      }
      return tr;
    } finally {
      (h = null), (m = P), (w = !1);
    }
  }
  var N = !1,
    _ = null,
    L = -1,
    H = 5,
    I = -1;
  function Le() {
    return !(e.unstable_now() - I < H);
  }
  function cn() {
    if (_ !== null) {
      var j = e.unstable_now();
      I = j;
      var z = !0;
      try {
        z = _(!0, j);
      } finally {
        z ? dn() : ((N = !1), (_ = null));
      }
    } else N = !1;
  }
  var dn;
  if (typeof a == "function")
    dn = function () {
      a(cn);
    };
  else if (typeof MessageChannel < "u") {
    var Ui = new MessageChannel(),
      pc = Ui.port2;
    (Ui.port1.onmessage = cn),
      (dn = function () {
        pc.postMessage(null);
      });
  } else
    dn = function () {
      $(cn, 0);
    };
  function kl(j) {
    (_ = j), N || ((N = !0), dn());
  }
  function Sl(j, z) {
    L = $(function () {
      j(e.unstable_now());
    }, z);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (j) {
      j.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      k || w || ((k = !0), kl(E));
    }),
    (e.unstable_forceFrameRate = function (j) {
      0 > j || 125 < j
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (H = 0 < j ? Math.floor(1e3 / j) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return m;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(u);
    }),
    (e.unstable_next = function (j) {
      switch (m) {
        case 1:
        case 2:
        case 3:
          var z = 3;
          break;
        default:
          z = m;
      }
      var P = m;
      m = z;
      try {
        return j();
      } finally {
        m = P;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (j, z) {
      switch (j) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          j = 3;
      }
      var P = m;
      m = j;
      try {
        return z();
      } finally {
        m = P;
      }
    }),
    (e.unstable_scheduleCallback = function (j, z, P) {
      var Q = e.unstable_now();
      switch (
        (typeof P == "object" && P !== null
          ? ((P = P.delay), (P = typeof P == "number" && 0 < P ? Q + P : Q))
          : (P = Q),
        j)
      ) {
        case 1:
          var Z = -1;
          break;
        case 2:
          Z = 250;
          break;
        case 5:
          Z = 1073741823;
          break;
        case 4:
          Z = 1e4;
          break;
        default:
          Z = 5e3;
      }
      return (
        (Z = P + Z),
        (j = {
          id: g++,
          callback: z,
          priorityLevel: j,
          startTime: P,
          expirationTime: Z,
          sortIndex: -1,
        }),
        P > Q
          ? ((j.sortIndex = P),
            t(c, j),
            n(u) === null &&
              j === n(c) &&
              (S ? (d(L), (L = -1)) : (S = !0), Sl(v, P - Q)))
          : ((j.sortIndex = Z), t(u, j), k || w || ((k = !0), kl(E))),
        j
      );
    }),
    (e.unstable_shouldYield = Le),
    (e.unstable_wrapCallback = function (j) {
      var z = m;
      return function () {
        var P = m;
        m = z;
        try {
          return j.apply(this, arguments);
        } finally {
          m = P;
        }
      };
    });
})(au);
uu.exports = au;
var ed = uu.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var cu = ee,
  we = ed;
function y(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var du = new Set(),
  Mn = {};
function It(e, t) {
  bt(e, t), bt(e + "Capture", t);
}
function bt(e, t) {
  for (Mn[e] = t, e = 0; e < t.length; e++) du.add(t[e]);
}
var Ke = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Zl = Object.prototype.hasOwnProperty,
  td =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Hi = {},
  Qi = {};
function nd(e) {
  return Zl.call(Qi, e)
    ? !0
    : Zl.call(Hi, e)
    ? !1
    : td.test(e)
    ? (Qi[e] = !0)
    : ((Hi[e] = !0), !1);
}
function rd(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function ld(e, t, n, r) {
  if (t === null || typeof t > "u" || rd(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function ce(e, t, n, r, l, o, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = i);
}
var ne = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ne[e] = new ce(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ne[t] = new ce(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ne[e] = new ce(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ne[e] = new ce(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ne[e] = new ce(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ne[e] = new ce(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ne[e] = new ce(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ne[e] = new ce(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ne[e] = new ce(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Xo = /[\-:]([a-z])/g;
function Zo(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Xo, Zo);
    ne[t] = new ce(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Xo, Zo);
    ne[t] = new ce(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Xo, Zo);
  ne[t] = new ce(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ne[e] = new ce(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ne.xlinkHref = new ce(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ne[e] = new ce(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Jo(e, t, n, r) {
  var l = ne.hasOwnProperty(t) ? ne[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (ld(t, n, l, r) && (n = null),
    r || l === null
      ? nd(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : l.mustUseProperty
      ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
      : ((t = l.attributeName),
        (r = l.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((l = l.type),
            (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Ze = cu.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  lr = Symbol.for("react.element"),
  Dt = Symbol.for("react.portal"),
  Ot = Symbol.for("react.fragment"),
  qo = Symbol.for("react.strict_mode"),
  Jl = Symbol.for("react.profiler"),
  fu = Symbol.for("react.provider"),
  pu = Symbol.for("react.context"),
  bo = Symbol.for("react.forward_ref"),
  ql = Symbol.for("react.suspense"),
  bl = Symbol.for("react.suspense_list"),
  ei = Symbol.for("react.memo"),
  qe = Symbol.for("react.lazy"),
  mu = Symbol.for("react.offscreen"),
  Ki = Symbol.iterator;
function fn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ki && e[Ki]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var B = Object.assign,
  El;
function kn(e) {
  if (El === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      El = (t && t[1]) || "";
    }
  return (
    `
` +
    El +
    e
  );
}
var jl = !1;
function Nl(e, t) {
  if (!e || jl) return "";
  jl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          r = c;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (
        var l = c.stack.split(`
`),
          o = r.stack.split(`
`),
          i = l.length - 1,
          s = o.length - 1;
        1 <= i && 0 <= s && l[i] !== o[s];

      )
        s--;
      for (; 1 <= i && 0 <= s; i--, s--)
        if (l[i] !== o[s]) {
          if (i !== 1 || s !== 1)
            do
              if ((i--, s--, 0 > s || l[i] !== o[s])) {
                var u =
                  `
` + l[i].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    u.includes("<anonymous>") &&
                    (u = u.replace("<anonymous>", e.displayName)),
                  u
                );
              }
            while (1 <= i && 0 <= s);
          break;
        }
    }
  } finally {
    (jl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? kn(e) : "";
}
function od(e) {
  switch (e.tag) {
    case 5:
      return kn(e.type);
    case 16:
      return kn("Lazy");
    case 13:
      return kn("Suspense");
    case 19:
      return kn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Nl(e.type, !1)), e;
    case 11:
      return (e = Nl(e.type.render, !1)), e;
    case 1:
      return (e = Nl(e.type, !0)), e;
    default:
      return "";
  }
}
function eo(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Ot:
      return "Fragment";
    case Dt:
      return "Portal";
    case Jl:
      return "Profiler";
    case qo:
      return "StrictMode";
    case ql:
      return "Suspense";
    case bl:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case pu:
        return (e.displayName || "Context") + ".Consumer";
      case fu:
        return (e._context.displayName || "Context") + ".Provider";
      case bo:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case ei:
        return (
          (t = e.displayName || null), t !== null ? t : eo(e.type) || "Memo"
        );
      case qe:
        (t = e._payload), (e = e._init);
        try {
          return eo(e(t));
        } catch {}
    }
  return null;
}
function id(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return eo(t);
    case 8:
      return t === qo ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function ft(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function hu(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function sd(e) {
  var t = hu(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (i) {
          (r = "" + i), o.call(this, i);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (i) {
          r = "" + i;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function or(e) {
  e._valueTracker || (e._valueTracker = sd(e));
}
function gu(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = hu(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Mr(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function to(e, t) {
  var n = t.checked;
  return B({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Gi(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = ft(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function vu(e, t) {
  (t = t.checked), t != null && Jo(e, "checked", t, !1);
}
function no(e, t) {
  vu(e, t);
  var n = ft(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? ro(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && ro(e, t.type, ft(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Yi(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function ro(e, t, n) {
  (t !== "number" || Mr(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Sn = Array.isArray;
function Gt(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + ft(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function lo(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(y(91));
  return B({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Xi(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(y(92));
      if (Sn(n)) {
        if (1 < n.length) throw Error(y(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: ft(n) };
}
function yu(e, t) {
  var n = ft(t.value),
    r = ft(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Zi(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function wu(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function oo(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? wu(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var ir,
  ku = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        ir = ir || document.createElement("div"),
          ir.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = ir.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Rn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var En = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  ud = ["Webkit", "ms", "Moz", "O"];
Object.keys(En).forEach(function (e) {
  ud.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (En[t] = En[e]);
  });
});
function Su(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (En.hasOwnProperty(e) && En[e])
    ? ("" + t).trim()
    : t + "px";
}
function xu(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = Su(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var ad = B(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function io(e, t) {
  if (t) {
    if (ad[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(y(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(y(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(y(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(y(62));
  }
}
function so(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var uo = null;
function ti(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var ao = null,
  Yt = null,
  Xt = null;
function Ji(e) {
  if ((e = bn(e))) {
    if (typeof ao != "function") throw Error(y(280));
    var t = e.stateNode;
    t && ((t = al(t)), ao(e.stateNode, e.type, t));
  }
}
function Cu(e) {
  Yt ? (Xt ? Xt.push(e) : (Xt = [e])) : (Yt = e);
}
function Eu() {
  if (Yt) {
    var e = Yt,
      t = Xt;
    if (((Xt = Yt = null), Ji(e), t)) for (e = 0; e < t.length; e++) Ji(t[e]);
  }
}
function ju(e, t) {
  return e(t);
}
function Nu() {}
var _l = !1;
function _u(e, t, n) {
  if (_l) return e(t, n);
  _l = !0;
  try {
    return ju(e, t, n);
  } finally {
    (_l = !1), (Yt !== null || Xt !== null) && (Nu(), Eu());
  }
}
function Dn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = al(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(y(231, t, typeof n));
  return n;
}
var co = !1;
if (Ke)
  try {
    var pn = {};
    Object.defineProperty(pn, "passive", {
      get: function () {
        co = !0;
      },
    }),
      window.addEventListener("test", pn, pn),
      window.removeEventListener("test", pn, pn);
  } catch {
    co = !1;
  }
function cd(e, t, n, r, l, o, i, s, u) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (g) {
    this.onError(g);
  }
}
var jn = !1,
  Rr = null,
  Dr = !1,
  fo = null,
  dd = {
    onError: function (e) {
      (jn = !0), (Rr = e);
    },
  };
function fd(e, t, n, r, l, o, i, s, u) {
  (jn = !1), (Rr = null), cd.apply(dd, arguments);
}
function pd(e, t, n, r, l, o, i, s, u) {
  if ((fd.apply(this, arguments), jn)) {
    if (jn) {
      var c = Rr;
      (jn = !1), (Rr = null);
    } else throw Error(y(198));
    Dr || ((Dr = !0), (fo = c));
  }
}
function Mt(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Lu(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function qi(e) {
  if (Mt(e) !== e) throw Error(y(188));
}
function md(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Mt(e)), t === null)) throw Error(y(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var o = l.alternate;
    if (o === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === o.child) {
      for (o = l.child; o; ) {
        if (o === n) return qi(l), e;
        if (o === r) return qi(l), t;
        o = o.sibling;
      }
      throw Error(y(188));
    }
    if (n.return !== r.return) (n = l), (r = o);
    else {
      for (var i = !1, s = l.child; s; ) {
        if (s === n) {
          (i = !0), (n = l), (r = o);
          break;
        }
        if (s === r) {
          (i = !0), (r = l), (n = o);
          break;
        }
        s = s.sibling;
      }
      if (!i) {
        for (s = o.child; s; ) {
          if (s === n) {
            (i = !0), (n = o), (r = l);
            break;
          }
          if (s === r) {
            (i = !0), (r = o), (n = l);
            break;
          }
          s = s.sibling;
        }
        if (!i) throw Error(y(189));
      }
    }
    if (n.alternate !== r) throw Error(y(190));
  }
  if (n.tag !== 3) throw Error(y(188));
  return n.stateNode.current === n ? e : t;
}
function zu(e) {
  return (e = md(e)), e !== null ? Pu(e) : null;
}
function Pu(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Pu(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Tu = we.unstable_scheduleCallback,
  bi = we.unstable_cancelCallback,
  hd = we.unstable_shouldYield,
  gd = we.unstable_requestPaint,
  K = we.unstable_now,
  vd = we.unstable_getCurrentPriorityLevel,
  ni = we.unstable_ImmediatePriority,
  Iu = we.unstable_UserBlockingPriority,
  Or = we.unstable_NormalPriority,
  yd = we.unstable_LowPriority,
  Mu = we.unstable_IdlePriority,
  ol = null,
  Ue = null;
function wd(e) {
  if (Ue && typeof Ue.onCommitFiberRoot == "function")
    try {
      Ue.onCommitFiberRoot(ol, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Me = Math.clz32 ? Math.clz32 : xd,
  kd = Math.log,
  Sd = Math.LN2;
function xd(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((kd(e) / Sd) | 0)) | 0;
}
var sr = 64,
  ur = 4194304;
function xn(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Fr(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    o = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var s = i & ~l;
    s !== 0 ? (r = xn(s)) : ((o &= i), o !== 0 && (r = xn(o)));
  } else (i = n & ~l), i !== 0 ? (r = xn(i)) : o !== 0 && (r = xn(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (o = t & -t), l >= o || (l === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Me(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function Cd(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Ed(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var i = 31 - Me(o),
      s = 1 << i,
      u = l[i];
    u === -1
      ? (!(s & n) || s & r) && (l[i] = Cd(s, t))
      : u <= t && (e.expiredLanes |= s),
      (o &= ~s);
  }
}
function po(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Ru() {
  var e = sr;
  return (sr <<= 1), !(sr & 4194240) && (sr = 64), e;
}
function Ll(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Jn(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Me(t)),
    (e[t] = n);
}
function jd(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Me(n),
      o = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o);
  }
}
function ri(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Me(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var R = 0;
function Du(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Ou,
  li,
  Fu,
  $u,
  Uu,
  mo = !1,
  ar = [],
  lt = null,
  ot = null,
  it = null,
  On = new Map(),
  Fn = new Map(),
  et = [],
  Nd =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function es(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      lt = null;
      break;
    case "dragenter":
    case "dragleave":
      ot = null;
      break;
    case "mouseover":
    case "mouseout":
      it = null;
      break;
    case "pointerover":
    case "pointerout":
      On.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Fn.delete(t.pointerId);
  }
}
function mn(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [l],
      }),
      t !== null && ((t = bn(t)), t !== null && li(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function _d(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (lt = mn(lt, e, t, n, r, l)), !0;
    case "dragenter":
      return (ot = mn(ot, e, t, n, r, l)), !0;
    case "mouseover":
      return (it = mn(it, e, t, n, r, l)), !0;
    case "pointerover":
      var o = l.pointerId;
      return On.set(o, mn(On.get(o) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (o = l.pointerId), Fn.set(o, mn(Fn.get(o) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function Au(e) {
  var t = xt(e.target);
  if (t !== null) {
    var n = Mt(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Lu(n)), t !== null)) {
          (e.blockedOn = t),
            Uu(e.priority, function () {
              Fu(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function xr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = ho(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (uo = r), n.target.dispatchEvent(r), (uo = null);
    } else return (t = bn(n)), t !== null && li(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function ts(e, t, n) {
  xr(e) && n.delete(t);
}
function Ld() {
  (mo = !1),
    lt !== null && xr(lt) && (lt = null),
    ot !== null && xr(ot) && (ot = null),
    it !== null && xr(it) && (it = null),
    On.forEach(ts),
    Fn.forEach(ts);
}
function hn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    mo ||
      ((mo = !0),
      we.unstable_scheduleCallback(we.unstable_NormalPriority, Ld)));
}
function $n(e) {
  function t(l) {
    return hn(l, e);
  }
  if (0 < ar.length) {
    hn(ar[0], e);
    for (var n = 1; n < ar.length; n++) {
      var r = ar[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    lt !== null && hn(lt, e),
      ot !== null && hn(ot, e),
      it !== null && hn(it, e),
      On.forEach(t),
      Fn.forEach(t),
      n = 0;
    n < et.length;
    n++
  )
    (r = et[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < et.length && ((n = et[0]), n.blockedOn === null); )
    Au(n), n.blockedOn === null && et.shift();
}
var Zt = Ze.ReactCurrentBatchConfig,
  $r = !0;
function zd(e, t, n, r) {
  var l = R,
    o = Zt.transition;
  Zt.transition = null;
  try {
    (R = 1), oi(e, t, n, r);
  } finally {
    (R = l), (Zt.transition = o);
  }
}
function Pd(e, t, n, r) {
  var l = R,
    o = Zt.transition;
  Zt.transition = null;
  try {
    (R = 4), oi(e, t, n, r);
  } finally {
    (R = l), (Zt.transition = o);
  }
}
function oi(e, t, n, r) {
  if ($r) {
    var l = ho(e, t, n, r);
    if (l === null) $l(e, t, r, Ur, n), es(e, r);
    else if (_d(l, e, t, n, r)) r.stopPropagation();
    else if ((es(e, r), t & 4 && -1 < Nd.indexOf(e))) {
      for (; l !== null; ) {
        var o = bn(l);
        if (
          (o !== null && Ou(o),
          (o = ho(e, t, n, r)),
          o === null && $l(e, t, r, Ur, n),
          o === l)
        )
          break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else $l(e, t, r, null, n);
  }
}
var Ur = null;
function ho(e, t, n, r) {
  if (((Ur = null), (e = ti(r)), (e = xt(e)), e !== null))
    if (((t = Mt(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Lu(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Ur = e), null;
}
function Vu(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (vd()) {
        case ni:
          return 1;
        case Iu:
          return 4;
        case Or:
        case yd:
          return 16;
        case Mu:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var nt = null,
  ii = null,
  Cr = null;
function Bu() {
  if (Cr) return Cr;
  var e,
    t = ii,
    n = t.length,
    r,
    l = "value" in nt ? nt.value : nt.textContent,
    o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
  return (Cr = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Er(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function cr() {
  return !0;
}
function ns() {
  return !1;
}
function Se(e) {
  function t(n, r, l, o, i) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = i),
      (this.currentTarget = null);
    for (var s in e)
      e.hasOwnProperty(s) && ((n = e[s]), (this[s] = n ? n(o) : o[s]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? cr
        : ns),
      (this.isPropagationStopped = ns),
      this
    );
  }
  return (
    B(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = cr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = cr));
      },
      persist: function () {},
      isPersistent: cr,
    }),
    t
  );
}
var un = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  si = Se(un),
  qn = B({}, un, { view: 0, detail: 0 }),
  Td = Se(qn),
  zl,
  Pl,
  gn,
  il = B({}, qn, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: ui,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== gn &&
            (gn && e.type === "mousemove"
              ? ((zl = e.screenX - gn.screenX), (Pl = e.screenY - gn.screenY))
              : (Pl = zl = 0),
            (gn = e)),
          zl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Pl;
    },
  }),
  rs = Se(il),
  Id = B({}, il, { dataTransfer: 0 }),
  Md = Se(Id),
  Rd = B({}, qn, { relatedTarget: 0 }),
  Tl = Se(Rd),
  Dd = B({}, un, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Od = Se(Dd),
  Fd = B({}, un, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  $d = Se(Fd),
  Ud = B({}, un, { data: 0 }),
  ls = Se(Ud),
  Ad = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  Vd = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  Bd = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Wd(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Bd[e]) ? !!t[e] : !1;
}
function ui() {
  return Wd;
}
var Hd = B({}, qn, {
    key: function (e) {
      if (e.key) {
        var t = Ad[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Er(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Vd[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ui,
    charCode: function (e) {
      return e.type === "keypress" ? Er(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Er(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Qd = Se(Hd),
  Kd = B({}, il, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  os = Se(Kd),
  Gd = B({}, qn, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ui,
  }),
  Yd = Se(Gd),
  Xd = B({}, un, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Zd = Se(Xd),
  Jd = B({}, il, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  qd = Se(Jd),
  bd = [9, 13, 27, 32],
  ai = Ke && "CompositionEvent" in window,
  Nn = null;
Ke && "documentMode" in document && (Nn = document.documentMode);
var ef = Ke && "TextEvent" in window && !Nn,
  Wu = Ke && (!ai || (Nn && 8 < Nn && 11 >= Nn)),
  is = String.fromCharCode(32),
  ss = !1;
function Hu(e, t) {
  switch (e) {
    case "keyup":
      return bd.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Qu(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Ft = !1;
function tf(e, t) {
  switch (e) {
    case "compositionend":
      return Qu(t);
    case "keypress":
      return t.which !== 32 ? null : ((ss = !0), is);
    case "textInput":
      return (e = t.data), e === is && ss ? null : e;
    default:
      return null;
  }
}
function nf(e, t) {
  if (Ft)
    return e === "compositionend" || (!ai && Hu(e, t))
      ? ((e = Bu()), (Cr = ii = nt = null), (Ft = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Wu && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var rf = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function us(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!rf[e.type] : t === "textarea";
}
function Ku(e, t, n, r) {
  Cu(r),
    (t = Ar(t, "onChange")),
    0 < t.length &&
      ((n = new si("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var _n = null,
  Un = null;
function lf(e) {
  ra(e, 0);
}
function sl(e) {
  var t = At(e);
  if (gu(t)) return e;
}
function of(e, t) {
  if (e === "change") return t;
}
var Gu = !1;
if (Ke) {
  var Il;
  if (Ke) {
    var Ml = "oninput" in document;
    if (!Ml) {
      var as = document.createElement("div");
      as.setAttribute("oninput", "return;"),
        (Ml = typeof as.oninput == "function");
    }
    Il = Ml;
  } else Il = !1;
  Gu = Il && (!document.documentMode || 9 < document.documentMode);
}
function cs() {
  _n && (_n.detachEvent("onpropertychange", Yu), (Un = _n = null));
}
function Yu(e) {
  if (e.propertyName === "value" && sl(Un)) {
    var t = [];
    Ku(t, Un, e, ti(e)), _u(lf, t);
  }
}
function sf(e, t, n) {
  e === "focusin"
    ? (cs(), (_n = t), (Un = n), _n.attachEvent("onpropertychange", Yu))
    : e === "focusout" && cs();
}
function uf(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return sl(Un);
}
function af(e, t) {
  if (e === "click") return sl(t);
}
function cf(e, t) {
  if (e === "input" || e === "change") return sl(t);
}
function df(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var De = typeof Object.is == "function" ? Object.is : df;
function An(e, t) {
  if (De(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!Zl.call(t, l) || !De(e[l], t[l])) return !1;
  }
  return !0;
}
function ds(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function fs(e, t) {
  var n = ds(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = ds(n);
  }
}
function Xu(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Xu(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Zu() {
  for (var e = window, t = Mr(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Mr(e.document);
  }
  return t;
}
function ci(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function ff(e) {
  var t = Zu(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Xu(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && ci(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          o = Math.min(r.start, l);
        (r = r.end === void 0 ? o : Math.min(r.end, l)),
          !e.extend && o > r && ((l = r), (r = o), (o = l)),
          (l = fs(n, o));
        var i = fs(n, r);
        l &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(i.node, i.offset))
            : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var pf = Ke && "documentMode" in document && 11 >= document.documentMode,
  $t = null,
  go = null,
  Ln = null,
  vo = !1;
function ps(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  vo ||
    $t == null ||
    $t !== Mr(r) ||
    ((r = $t),
    "selectionStart" in r && ci(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Ln && An(Ln, r)) ||
      ((Ln = r),
      (r = Ar(go, "onSelect")),
      0 < r.length &&
        ((t = new si("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = $t))));
}
function dr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Ut = {
    animationend: dr("Animation", "AnimationEnd"),
    animationiteration: dr("Animation", "AnimationIteration"),
    animationstart: dr("Animation", "AnimationStart"),
    transitionend: dr("Transition", "TransitionEnd"),
  },
  Rl = {},
  Ju = {};
Ke &&
  ((Ju = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Ut.animationend.animation,
    delete Ut.animationiteration.animation,
    delete Ut.animationstart.animation),
  "TransitionEvent" in window || delete Ut.transitionend.transition);
function ul(e) {
  if (Rl[e]) return Rl[e];
  if (!Ut[e]) return e;
  var t = Ut[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Ju) return (Rl[e] = t[n]);
  return e;
}
var qu = ul("animationend"),
  bu = ul("animationiteration"),
  ea = ul("animationstart"),
  ta = ul("transitionend"),
  na = new Map(),
  ms =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function ht(e, t) {
  na.set(e, t), It(t, [e]);
}
for (var Dl = 0; Dl < ms.length; Dl++) {
  var Ol = ms[Dl],
    mf = Ol.toLowerCase(),
    hf = Ol[0].toUpperCase() + Ol.slice(1);
  ht(mf, "on" + hf);
}
ht(qu, "onAnimationEnd");
ht(bu, "onAnimationIteration");
ht(ea, "onAnimationStart");
ht("dblclick", "onDoubleClick");
ht("focusin", "onFocus");
ht("focusout", "onBlur");
ht(ta, "onTransitionEnd");
bt("onMouseEnter", ["mouseout", "mouseover"]);
bt("onMouseLeave", ["mouseout", "mouseover"]);
bt("onPointerEnter", ["pointerout", "pointerover"]);
bt("onPointerLeave", ["pointerout", "pointerover"]);
It(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
It(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
It("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
It(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
It(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
It(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Cn =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  gf = new Set("cancel close invalid load scroll toggle".split(" ").concat(Cn));
function hs(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), pd(r, t, void 0, e), (e.currentTarget = null);
}
function ra(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var s = r[i],
            u = s.instance,
            c = s.currentTarget;
          if (((s = s.listener), u !== o && l.isPropagationStopped())) break e;
          hs(l, s, c), (o = u);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((s = r[i]),
            (u = s.instance),
            (c = s.currentTarget),
            (s = s.listener),
            u !== o && l.isPropagationStopped())
          )
            break e;
          hs(l, s, c), (o = u);
        }
    }
  }
  if (Dr) throw ((e = fo), (Dr = !1), (fo = null), e);
}
function O(e, t) {
  var n = t[xo];
  n === void 0 && (n = t[xo] = new Set());
  var r = e + "__bubble";
  n.has(r) || (la(t, e, 2, !1), n.add(r));
}
function Fl(e, t, n) {
  var r = 0;
  t && (r |= 4), la(n, e, r, t);
}
var fr = "_reactListening" + Math.random().toString(36).slice(2);
function Vn(e) {
  if (!e[fr]) {
    (e[fr] = !0),
      du.forEach(function (n) {
        n !== "selectionchange" && (gf.has(n) || Fl(n, !1, e), Fl(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[fr] || ((t[fr] = !0), Fl("selectionchange", !1, t));
  }
}
function la(e, t, n, r) {
  switch (Vu(t)) {
    case 1:
      var l = zd;
      break;
    case 4:
      l = Pd;
      break;
    default:
      l = oi;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !co ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
      ? e.addEventListener(t, n, { passive: l })
      : e.addEventListener(t, n, !1);
}
function $l(e, t, n, r, l) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var s = r.stateNode.containerInfo;
        if (s === l || (s.nodeType === 8 && s.parentNode === l)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var u = i.tag;
            if (
              (u === 3 || u === 4) &&
              ((u = i.stateNode.containerInfo),
              u === l || (u.nodeType === 8 && u.parentNode === l))
            )
              return;
            i = i.return;
          }
        for (; s !== null; ) {
          if (((i = xt(s)), i === null)) return;
          if (((u = i.tag), u === 5 || u === 6)) {
            r = o = i;
            continue e;
          }
          s = s.parentNode;
        }
      }
      r = r.return;
    }
  _u(function () {
    var c = o,
      g = ti(n),
      h = [];
    e: {
      var m = na.get(e);
      if (m !== void 0) {
        var w = si,
          k = e;
        switch (e) {
          case "keypress":
            if (Er(n) === 0) break e;
          case "keydown":
          case "keyup":
            w = Qd;
            break;
          case "focusin":
            (k = "focus"), (w = Tl);
            break;
          case "focusout":
            (k = "blur"), (w = Tl);
            break;
          case "beforeblur":
          case "afterblur":
            w = Tl;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            w = rs;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            w = Md;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            w = Yd;
            break;
          case qu:
          case bu:
          case ea:
            w = Od;
            break;
          case ta:
            w = Zd;
            break;
          case "scroll":
            w = Td;
            break;
          case "wheel":
            w = qd;
            break;
          case "copy":
          case "cut":
          case "paste":
            w = $d;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            w = os;
        }
        var S = (t & 4) !== 0,
          $ = !S && e === "scroll",
          d = S ? (m !== null ? m + "Capture" : null) : m;
        S = [];
        for (var a = c, f; a !== null; ) {
          f = a;
          var v = f.stateNode;
          if (
            (f.tag === 5 &&
              v !== null &&
              ((f = v),
              d !== null && ((v = Dn(a, d)), v != null && S.push(Bn(a, v, f)))),
            $)
          )
            break;
          a = a.return;
        }
        0 < S.length &&
          ((m = new w(m, k, null, n, g)), h.push({ event: m, listeners: S }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((m = e === "mouseover" || e === "pointerover"),
          (w = e === "mouseout" || e === "pointerout"),
          m &&
            n !== uo &&
            (k = n.relatedTarget || n.fromElement) &&
            (xt(k) || k[Ge]))
        )
          break e;
        if (
          (w || m) &&
          ((m =
            g.window === g
              ? g
              : (m = g.ownerDocument)
              ? m.defaultView || m.parentWindow
              : window),
          w
            ? ((k = n.relatedTarget || n.toElement),
              (w = c),
              (k = k ? xt(k) : null),
              k !== null &&
                (($ = Mt(k)), k !== $ || (k.tag !== 5 && k.tag !== 6)) &&
                (k = null))
            : ((w = null), (k = c)),
          w !== k)
        ) {
          if (
            ((S = rs),
            (v = "onMouseLeave"),
            (d = "onMouseEnter"),
            (a = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((S = os),
              (v = "onPointerLeave"),
              (d = "onPointerEnter"),
              (a = "pointer")),
            ($ = w == null ? m : At(w)),
            (f = k == null ? m : At(k)),
            (m = new S(v, a + "leave", w, n, g)),
            (m.target = $),
            (m.relatedTarget = f),
            (v = null),
            xt(g) === c &&
              ((S = new S(d, a + "enter", k, n, g)),
              (S.target = f),
              (S.relatedTarget = $),
              (v = S)),
            ($ = v),
            w && k)
          )
            t: {
              for (S = w, d = k, a = 0, f = S; f; f = Rt(f)) a++;
              for (f = 0, v = d; v; v = Rt(v)) f++;
              for (; 0 < a - f; ) (S = Rt(S)), a--;
              for (; 0 < f - a; ) (d = Rt(d)), f--;
              for (; a--; ) {
                if (S === d || (d !== null && S === d.alternate)) break t;
                (S = Rt(S)), (d = Rt(d));
              }
              S = null;
            }
          else S = null;
          w !== null && gs(h, m, w, S, !1),
            k !== null && $ !== null && gs(h, $, k, S, !0);
        }
      }
      e: {
        if (
          ((m = c ? At(c) : window),
          (w = m.nodeName && m.nodeName.toLowerCase()),
          w === "select" || (w === "input" && m.type === "file"))
        )
          var E = of;
        else if (us(m))
          if (Gu) E = cf;
          else {
            E = uf;
            var N = sf;
          }
        else
          (w = m.nodeName) &&
            w.toLowerCase() === "input" &&
            (m.type === "checkbox" || m.type === "radio") &&
            (E = af);
        if (E && (E = E(e, c))) {
          Ku(h, E, n, g);
          break e;
        }
        N && N(e, m, c),
          e === "focusout" &&
            (N = m._wrapperState) &&
            N.controlled &&
            m.type === "number" &&
            ro(m, "number", m.value);
      }
      switch (((N = c ? At(c) : window), e)) {
        case "focusin":
          (us(N) || N.contentEditable === "true") &&
            (($t = N), (go = c), (Ln = null));
          break;
        case "focusout":
          Ln = go = $t = null;
          break;
        case "mousedown":
          vo = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (vo = !1), ps(h, n, g);
          break;
        case "selectionchange":
          if (pf) break;
        case "keydown":
        case "keyup":
          ps(h, n, g);
      }
      var _;
      if (ai)
        e: {
          switch (e) {
            case "compositionstart":
              var L = "onCompositionStart";
              break e;
            case "compositionend":
              L = "onCompositionEnd";
              break e;
            case "compositionupdate":
              L = "onCompositionUpdate";
              break e;
          }
          L = void 0;
        }
      else
        Ft
          ? Hu(e, n) && (L = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (L = "onCompositionStart");
      L &&
        (Wu &&
          n.locale !== "ko" &&
          (Ft || L !== "onCompositionStart"
            ? L === "onCompositionEnd" && Ft && (_ = Bu())
            : ((nt = g),
              (ii = "value" in nt ? nt.value : nt.textContent),
              (Ft = !0))),
        (N = Ar(c, L)),
        0 < N.length &&
          ((L = new ls(L, e, null, n, g)),
          h.push({ event: L, listeners: N }),
          _ ? (L.data = _) : ((_ = Qu(n)), _ !== null && (L.data = _)))),
        (_ = ef ? tf(e, n) : nf(e, n)) &&
          ((c = Ar(c, "onBeforeInput")),
          0 < c.length &&
            ((g = new ls("onBeforeInput", "beforeinput", null, n, g)),
            h.push({ event: g, listeners: c }),
            (g.data = _)));
    }
    ra(h, t);
  });
}
function Bn(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Ar(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      o = l.stateNode;
    l.tag === 5 &&
      o !== null &&
      ((l = o),
      (o = Dn(e, n)),
      o != null && r.unshift(Bn(e, o, l)),
      (o = Dn(e, t)),
      o != null && r.push(Bn(e, o, l))),
      (e = e.return);
  }
  return r;
}
function Rt(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function gs(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var s = n,
      u = s.alternate,
      c = s.stateNode;
    if (u !== null && u === r) break;
    s.tag === 5 &&
      c !== null &&
      ((s = c),
      l
        ? ((u = Dn(n, o)), u != null && i.unshift(Bn(n, u, s)))
        : l || ((u = Dn(n, o)), u != null && i.push(Bn(n, u, s)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var vf = /\r\n?/g,
  yf = /\u0000|\uFFFD/g;
function vs(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      vf,
      `
`
    )
    .replace(yf, "");
}
function pr(e, t, n) {
  if (((t = vs(t)), vs(e) !== t && n)) throw Error(y(425));
}
function Vr() {}
var yo = null,
  wo = null;
function ko(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var So = typeof setTimeout == "function" ? setTimeout : void 0,
  wf = typeof clearTimeout == "function" ? clearTimeout : void 0,
  ys = typeof Promise == "function" ? Promise : void 0,
  kf =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof ys < "u"
      ? function (e) {
          return ys.resolve(null).then(e).catch(Sf);
        }
      : So;
function Sf(e) {
  setTimeout(function () {
    throw e;
  });
}
function Ul(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), $n(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  $n(t);
}
function st(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function ws(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var an = Math.random().toString(36).slice(2),
  $e = "__reactFiber$" + an,
  Wn = "__reactProps$" + an,
  Ge = "__reactContainer$" + an,
  xo = "__reactEvents$" + an,
  xf = "__reactListeners$" + an,
  Cf = "__reactHandles$" + an;
function xt(e) {
  var t = e[$e];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Ge] || n[$e])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = ws(e); e !== null; ) {
          if ((n = e[$e])) return n;
          e = ws(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function bn(e) {
  return (
    (e = e[$e] || e[Ge]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function At(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(y(33));
}
function al(e) {
  return e[Wn] || null;
}
var Co = [],
  Vt = -1;
function gt(e) {
  return { current: e };
}
function F(e) {
  0 > Vt || ((e.current = Co[Vt]), (Co[Vt] = null), Vt--);
}
function D(e, t) {
  Vt++, (Co[Vt] = e.current), (e.current = t);
}
var pt = {},
  ie = gt(pt),
  pe = gt(!1),
  _t = pt;
function en(e, t) {
  var n = e.type.contextTypes;
  if (!n) return pt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    o;
  for (o in n) l[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function me(e) {
  return (e = e.childContextTypes), e != null;
}
function Br() {
  F(pe), F(ie);
}
function ks(e, t, n) {
  if (ie.current !== pt) throw Error(y(168));
  D(ie, t), D(pe, n);
}
function oa(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(y(108, id(e) || "Unknown", l));
  return B({}, n, r);
}
function Wr(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || pt),
    (_t = ie.current),
    D(ie, e),
    D(pe, pe.current),
    !0
  );
}
function Ss(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(y(169));
  n
    ? ((e = oa(e, t, _t)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      F(pe),
      F(ie),
      D(ie, e))
    : F(pe),
    D(pe, n);
}
var Be = null,
  cl = !1,
  Al = !1;
function ia(e) {
  Be === null ? (Be = [e]) : Be.push(e);
}
function Ef(e) {
  (cl = !0), ia(e);
}
function vt() {
  if (!Al && Be !== null) {
    Al = !0;
    var e = 0,
      t = R;
    try {
      var n = Be;
      for (R = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Be = null), (cl = !1);
    } catch (l) {
      throw (Be !== null && (Be = Be.slice(e + 1)), Tu(ni, vt), l);
    } finally {
      (R = t), (Al = !1);
    }
  }
  return null;
}
var Bt = [],
  Wt = 0,
  Hr = null,
  Qr = 0,
  xe = [],
  Ce = 0,
  Lt = null,
  We = 1,
  He = "";
function kt(e, t) {
  (Bt[Wt++] = Qr), (Bt[Wt++] = Hr), (Hr = e), (Qr = t);
}
function sa(e, t, n) {
  (xe[Ce++] = We), (xe[Ce++] = He), (xe[Ce++] = Lt), (Lt = e);
  var r = We;
  e = He;
  var l = 32 - Me(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var o = 32 - Me(t) + l;
  if (30 < o) {
    var i = l - (l % 5);
    (o = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (l -= i),
      (We = (1 << (32 - Me(t) + l)) | (n << l) | r),
      (He = o + e);
  } else (We = (1 << o) | (n << l) | r), (He = e);
}
function di(e) {
  e.return !== null && (kt(e, 1), sa(e, 1, 0));
}
function fi(e) {
  for (; e === Hr; )
    (Hr = Bt[--Wt]), (Bt[Wt] = null), (Qr = Bt[--Wt]), (Bt[Wt] = null);
  for (; e === Lt; )
    (Lt = xe[--Ce]),
      (xe[Ce] = null),
      (He = xe[--Ce]),
      (xe[Ce] = null),
      (We = xe[--Ce]),
      (xe[Ce] = null);
}
var ye = null,
  ve = null,
  U = !1,
  Ie = null;
function ua(e, t) {
  var n = Ee(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function xs(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (ye = e), (ve = st(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (ye = e), (ve = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Lt !== null ? { id: We, overflow: He } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ee(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (ye = e),
            (ve = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Eo(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function jo(e) {
  if (U) {
    var t = ve;
    if (t) {
      var n = t;
      if (!xs(e, t)) {
        if (Eo(e)) throw Error(y(418));
        t = st(n.nextSibling);
        var r = ye;
        t && xs(e, t)
          ? ua(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (U = !1), (ye = e));
      }
    } else {
      if (Eo(e)) throw Error(y(418));
      (e.flags = (e.flags & -4097) | 2), (U = !1), (ye = e);
    }
  }
}
function Cs(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  ye = e;
}
function mr(e) {
  if (e !== ye) return !1;
  if (!U) return Cs(e), (U = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !ko(e.type, e.memoizedProps))),
    t && (t = ve))
  ) {
    if (Eo(e)) throw (aa(), Error(y(418)));
    for (; t; ) ua(e, t), (t = st(t.nextSibling));
  }
  if ((Cs(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(y(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              ve = st(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      ve = null;
    }
  } else ve = ye ? st(e.stateNode.nextSibling) : null;
  return !0;
}
function aa() {
  for (var e = ve; e; ) e = st(e.nextSibling);
}
function tn() {
  (ve = ye = null), (U = !1);
}
function pi(e) {
  Ie === null ? (Ie = [e]) : Ie.push(e);
}
var jf = Ze.ReactCurrentBatchConfig;
function Pe(e, t) {
  if (e && e.defaultProps) {
    (t = B({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Kr = gt(null),
  Gr = null,
  Ht = null,
  mi = null;
function hi() {
  mi = Ht = Gr = null;
}
function gi(e) {
  var t = Kr.current;
  F(Kr), (e._currentValue = t);
}
function No(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Jt(e, t) {
  (Gr = e),
    (mi = Ht = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (fe = !0), (e.firstContext = null));
}
function Ne(e) {
  var t = e._currentValue;
  if (mi !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Ht === null)) {
      if (Gr === null) throw Error(y(308));
      (Ht = e), (Gr.dependencies = { lanes: 0, firstContext: e });
    } else Ht = Ht.next = e;
  return t;
}
var Ct = null;
function vi(e) {
  Ct === null ? (Ct = [e]) : Ct.push(e);
}
function ca(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), vi(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    Ye(e, r)
  );
}
function Ye(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var be = !1;
function yi(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function da(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Qe(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function ut(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), M & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      Ye(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), vi(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    Ye(e, n)
  );
}
function jr(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), ri(e, n);
  }
}
function Es(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var i = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (l = o = i) : (o = o.next = i), (n = n.next);
      } while (n !== null);
      o === null ? (l = o = t) : (o = o.next = t);
    } else l = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Yr(e, t, n, r) {
  var l = e.updateQueue;
  be = !1;
  var o = l.firstBaseUpdate,
    i = l.lastBaseUpdate,
    s = l.shared.pending;
  if (s !== null) {
    l.shared.pending = null;
    var u = s,
      c = u.next;
    (u.next = null), i === null ? (o = c) : (i.next = c), (i = u);
    var g = e.alternate;
    g !== null &&
      ((g = g.updateQueue),
      (s = g.lastBaseUpdate),
      s !== i &&
        (s === null ? (g.firstBaseUpdate = c) : (s.next = c),
        (g.lastBaseUpdate = u)));
  }
  if (o !== null) {
    var h = l.baseState;
    (i = 0), (g = c = u = null), (s = o);
    do {
      var m = s.lane,
        w = s.eventTime;
      if ((r & m) === m) {
        g !== null &&
          (g = g.next =
            {
              eventTime: w,
              lane: 0,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            });
        e: {
          var k = e,
            S = s;
          switch (((m = t), (w = n), S.tag)) {
            case 1:
              if (((k = S.payload), typeof k == "function")) {
                h = k.call(w, h, m);
                break e;
              }
              h = k;
              break e;
            case 3:
              k.flags = (k.flags & -65537) | 128;
            case 0:
              if (
                ((k = S.payload),
                (m = typeof k == "function" ? k.call(w, h, m) : k),
                m == null)
              )
                break e;
              h = B({}, h, m);
              break e;
            case 2:
              be = !0;
          }
        }
        s.callback !== null &&
          s.lane !== 0 &&
          ((e.flags |= 64),
          (m = l.effects),
          m === null ? (l.effects = [s]) : m.push(s));
      } else
        (w = {
          eventTime: w,
          lane: m,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null,
        }),
          g === null ? ((c = g = w), (u = h)) : (g = g.next = w),
          (i |= m);
      if (((s = s.next), s === null)) {
        if (((s = l.shared.pending), s === null)) break;
        (m = s),
          (s = m.next),
          (m.next = null),
          (l.lastBaseUpdate = m),
          (l.shared.pending = null);
      }
    } while (1);
    if (
      (g === null && (u = h),
      (l.baseState = u),
      (l.firstBaseUpdate = c),
      (l.lastBaseUpdate = g),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (i |= l.lane), (l = l.next);
      while (l !== t);
    } else o === null && (l.shared.lanes = 0);
    (Pt |= i), (e.lanes = i), (e.memoizedState = h);
  }
}
function js(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(y(191, l));
        l.call(r);
      }
    }
}
var fa = new cu.Component().refs;
function _o(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : B({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var dl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Mt(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = ue(),
      l = ct(e),
      o = Qe(r, l);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = ut(e, o, l)),
      t !== null && (Re(t, e, l, r), jr(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = ue(),
      l = ct(e),
      o = Qe(r, l);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = ut(e, o, l)),
      t !== null && (Re(t, e, l, r), jr(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = ue(),
      r = ct(e),
      l = Qe(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = ut(e, l, r)),
      t !== null && (Re(t, e, r, n), jr(t, e, r));
  },
};
function Ns(e, t, n, r, l, o, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, i)
      : t.prototype && t.prototype.isPureReactComponent
      ? !An(n, r) || !An(l, o)
      : !0
  );
}
function pa(e, t, n) {
  var r = !1,
    l = pt,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = Ne(o))
      : ((l = me(t) ? _t : ie.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? en(e, l) : pt)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = dl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function _s(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && dl.enqueueReplaceState(t, t.state, null);
}
function Lo(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = fa), yi(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (l.context = Ne(o))
    : ((o = me(t) ? _t : ie.current), (l.context = en(e, o))),
    (l.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (_o(e, t, o, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && dl.enqueueReplaceState(l, l.state, null),
      Yr(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function vn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(y(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(y(147, e));
      var l = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (i) {
            var s = l.refs;
            s === fa && (s = l.refs = {}),
              i === null ? delete s[o] : (s[o] = i);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(y(284));
    if (!n._owner) throw Error(y(290, e));
  }
  return e;
}
function hr(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      y(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Ls(e) {
  var t = e._init;
  return t(e._payload);
}
function ma(e) {
  function t(d, a) {
    if (e) {
      var f = d.deletions;
      f === null ? ((d.deletions = [a]), (d.flags |= 16)) : f.push(a);
    }
  }
  function n(d, a) {
    if (!e) return null;
    for (; a !== null; ) t(d, a), (a = a.sibling);
    return null;
  }
  function r(d, a) {
    for (d = new Map(); a !== null; )
      a.key !== null ? d.set(a.key, a) : d.set(a.index, a), (a = a.sibling);
    return d;
  }
  function l(d, a) {
    return (d = dt(d, a)), (d.index = 0), (d.sibling = null), d;
  }
  function o(d, a, f) {
    return (
      (d.index = f),
      e
        ? ((f = d.alternate),
          f !== null
            ? ((f = f.index), f < a ? ((d.flags |= 2), a) : f)
            : ((d.flags |= 2), a))
        : ((d.flags |= 1048576), a)
    );
  }
  function i(d) {
    return e && d.alternate === null && (d.flags |= 2), d;
  }
  function s(d, a, f, v) {
    return a === null || a.tag !== 6
      ? ((a = Gl(f, d.mode, v)), (a.return = d), a)
      : ((a = l(a, f)), (a.return = d), a);
  }
  function u(d, a, f, v) {
    var E = f.type;
    return E === Ot
      ? g(d, a, f.props.children, v, f.key)
      : a !== null &&
        (a.elementType === E ||
          (typeof E == "object" &&
            E !== null &&
            E.$$typeof === qe &&
            Ls(E) === a.type))
      ? ((v = l(a, f.props)), (v.ref = vn(d, a, f)), (v.return = d), v)
      : ((v = Tr(f.type, f.key, f.props, null, d.mode, v)),
        (v.ref = vn(d, a, f)),
        (v.return = d),
        v);
  }
  function c(d, a, f, v) {
    return a === null ||
      a.tag !== 4 ||
      a.stateNode.containerInfo !== f.containerInfo ||
      a.stateNode.implementation !== f.implementation
      ? ((a = Yl(f, d.mode, v)), (a.return = d), a)
      : ((a = l(a, f.children || [])), (a.return = d), a);
  }
  function g(d, a, f, v, E) {
    return a === null || a.tag !== 7
      ? ((a = Nt(f, d.mode, v, E)), (a.return = d), a)
      : ((a = l(a, f)), (a.return = d), a);
  }
  function h(d, a, f) {
    if ((typeof a == "string" && a !== "") || typeof a == "number")
      return (a = Gl("" + a, d.mode, f)), (a.return = d), a;
    if (typeof a == "object" && a !== null) {
      switch (a.$$typeof) {
        case lr:
          return (
            (f = Tr(a.type, a.key, a.props, null, d.mode, f)),
            (f.ref = vn(d, null, a)),
            (f.return = d),
            f
          );
        case Dt:
          return (a = Yl(a, d.mode, f)), (a.return = d), a;
        case qe:
          var v = a._init;
          return h(d, v(a._payload), f);
      }
      if (Sn(a) || fn(a))
        return (a = Nt(a, d.mode, f, null)), (a.return = d), a;
      hr(d, a);
    }
    return null;
  }
  function m(d, a, f, v) {
    var E = a !== null ? a.key : null;
    if ((typeof f == "string" && f !== "") || typeof f == "number")
      return E !== null ? null : s(d, a, "" + f, v);
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case lr:
          return f.key === E ? u(d, a, f, v) : null;
        case Dt:
          return f.key === E ? c(d, a, f, v) : null;
        case qe:
          return (E = f._init), m(d, a, E(f._payload), v);
      }
      if (Sn(f) || fn(f)) return E !== null ? null : g(d, a, f, v, null);
      hr(d, f);
    }
    return null;
  }
  function w(d, a, f, v, E) {
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return (d = d.get(f) || null), s(a, d, "" + v, E);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case lr:
          return (d = d.get(v.key === null ? f : v.key) || null), u(a, d, v, E);
        case Dt:
          return (d = d.get(v.key === null ? f : v.key) || null), c(a, d, v, E);
        case qe:
          var N = v._init;
          return w(d, a, f, N(v._payload), E);
      }
      if (Sn(v) || fn(v)) return (d = d.get(f) || null), g(a, d, v, E, null);
      hr(a, v);
    }
    return null;
  }
  function k(d, a, f, v) {
    for (
      var E = null, N = null, _ = a, L = (a = 0), H = null;
      _ !== null && L < f.length;
      L++
    ) {
      _.index > L ? ((H = _), (_ = null)) : (H = _.sibling);
      var I = m(d, _, f[L], v);
      if (I === null) {
        _ === null && (_ = H);
        break;
      }
      e && _ && I.alternate === null && t(d, _),
        (a = o(I, a, L)),
        N === null ? (E = I) : (N.sibling = I),
        (N = I),
        (_ = H);
    }
    if (L === f.length) return n(d, _), U && kt(d, L), E;
    if (_ === null) {
      for (; L < f.length; L++)
        (_ = h(d, f[L], v)),
          _ !== null &&
            ((a = o(_, a, L)), N === null ? (E = _) : (N.sibling = _), (N = _));
      return U && kt(d, L), E;
    }
    for (_ = r(d, _); L < f.length; L++)
      (H = w(_, d, L, f[L], v)),
        H !== null &&
          (e && H.alternate !== null && _.delete(H.key === null ? L : H.key),
          (a = o(H, a, L)),
          N === null ? (E = H) : (N.sibling = H),
          (N = H));
    return (
      e &&
        _.forEach(function (Le) {
          return t(d, Le);
        }),
      U && kt(d, L),
      E
    );
  }
  function S(d, a, f, v) {
    var E = fn(f);
    if (typeof E != "function") throw Error(y(150));
    if (((f = E.call(f)), f == null)) throw Error(y(151));
    for (
      var N = (E = null), _ = a, L = (a = 0), H = null, I = f.next();
      _ !== null && !I.done;
      L++, I = f.next()
    ) {
      _.index > L ? ((H = _), (_ = null)) : (H = _.sibling);
      var Le = m(d, _, I.value, v);
      if (Le === null) {
        _ === null && (_ = H);
        break;
      }
      e && _ && Le.alternate === null && t(d, _),
        (a = o(Le, a, L)),
        N === null ? (E = Le) : (N.sibling = Le),
        (N = Le),
        (_ = H);
    }
    if (I.done) return n(d, _), U && kt(d, L), E;
    if (_ === null) {
      for (; !I.done; L++, I = f.next())
        (I = h(d, I.value, v)),
          I !== null &&
            ((a = o(I, a, L)), N === null ? (E = I) : (N.sibling = I), (N = I));
      return U && kt(d, L), E;
    }
    for (_ = r(d, _); !I.done; L++, I = f.next())
      (I = w(_, d, L, I.value, v)),
        I !== null &&
          (e && I.alternate !== null && _.delete(I.key === null ? L : I.key),
          (a = o(I, a, L)),
          N === null ? (E = I) : (N.sibling = I),
          (N = I));
    return (
      e &&
        _.forEach(function (cn) {
          return t(d, cn);
        }),
      U && kt(d, L),
      E
    );
  }
  function $(d, a, f, v) {
    if (
      (typeof f == "object" &&
        f !== null &&
        f.type === Ot &&
        f.key === null &&
        (f = f.props.children),
      typeof f == "object" && f !== null)
    ) {
      switch (f.$$typeof) {
        case lr:
          e: {
            for (var E = f.key, N = a; N !== null; ) {
              if (N.key === E) {
                if (((E = f.type), E === Ot)) {
                  if (N.tag === 7) {
                    n(d, N.sibling),
                      (a = l(N, f.props.children)),
                      (a.return = d),
                      (d = a);
                    break e;
                  }
                } else if (
                  N.elementType === E ||
                  (typeof E == "object" &&
                    E !== null &&
                    E.$$typeof === qe &&
                    Ls(E) === N.type)
                ) {
                  n(d, N.sibling),
                    (a = l(N, f.props)),
                    (a.ref = vn(d, N, f)),
                    (a.return = d),
                    (d = a);
                  break e;
                }
                n(d, N);
                break;
              } else t(d, N);
              N = N.sibling;
            }
            f.type === Ot
              ? ((a = Nt(f.props.children, d.mode, v, f.key)),
                (a.return = d),
                (d = a))
              : ((v = Tr(f.type, f.key, f.props, null, d.mode, v)),
                (v.ref = vn(d, a, f)),
                (v.return = d),
                (d = v));
          }
          return i(d);
        case Dt:
          e: {
            for (N = f.key; a !== null; ) {
              if (a.key === N)
                if (
                  a.tag === 4 &&
                  a.stateNode.containerInfo === f.containerInfo &&
                  a.stateNode.implementation === f.implementation
                ) {
                  n(d, a.sibling),
                    (a = l(a, f.children || [])),
                    (a.return = d),
                    (d = a);
                  break e;
                } else {
                  n(d, a);
                  break;
                }
              else t(d, a);
              a = a.sibling;
            }
            (a = Yl(f, d.mode, v)), (a.return = d), (d = a);
          }
          return i(d);
        case qe:
          return (N = f._init), $(d, a, N(f._payload), v);
      }
      if (Sn(f)) return k(d, a, f, v);
      if (fn(f)) return S(d, a, f, v);
      hr(d, f);
    }
    return (typeof f == "string" && f !== "") || typeof f == "number"
      ? ((f = "" + f),
        a !== null && a.tag === 6
          ? (n(d, a.sibling), (a = l(a, f)), (a.return = d), (d = a))
          : (n(d, a), (a = Gl(f, d.mode, v)), (a.return = d), (d = a)),
        i(d))
      : n(d, a);
  }
  return $;
}
var nn = ma(!0),
  ha = ma(!1),
  er = {},
  Ae = gt(er),
  Hn = gt(er),
  Qn = gt(er);
function Et(e) {
  if (e === er) throw Error(y(174));
  return e;
}
function wi(e, t) {
  switch ((D(Qn, t), D(Hn, e), D(Ae, er), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : oo(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = oo(t, e));
  }
  F(Ae), D(Ae, t);
}
function rn() {
  F(Ae), F(Hn), F(Qn);
}
function ga(e) {
  Et(Qn.current);
  var t = Et(Ae.current),
    n = oo(t, e.type);
  t !== n && (D(Hn, e), D(Ae, n));
}
function ki(e) {
  Hn.current === e && (F(Ae), F(Hn));
}
var A = gt(0);
function Xr(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Vl = [];
function Si() {
  for (var e = 0; e < Vl.length; e++)
    Vl[e]._workInProgressVersionPrimary = null;
  Vl.length = 0;
}
var Nr = Ze.ReactCurrentDispatcher,
  Bl = Ze.ReactCurrentBatchConfig,
  zt = 0,
  V = null,
  Y = null,
  J = null,
  Zr = !1,
  zn = !1,
  Kn = 0,
  Nf = 0;
function re() {
  throw Error(y(321));
}
function xi(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!De(e[n], t[n])) return !1;
  return !0;
}
function Ci(e, t, n, r, l, o) {
  if (
    ((zt = o),
    (V = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Nr.current = e === null || e.memoizedState === null ? Pf : Tf),
    (e = n(r, l)),
    zn)
  ) {
    o = 0;
    do {
      if (((zn = !1), (Kn = 0), 25 <= o)) throw Error(y(301));
      (o += 1),
        (J = Y = null),
        (t.updateQueue = null),
        (Nr.current = If),
        (e = n(r, l));
    } while (zn);
  }
  if (
    ((Nr.current = Jr),
    (t = Y !== null && Y.next !== null),
    (zt = 0),
    (J = Y = V = null),
    (Zr = !1),
    t)
  )
    throw Error(y(300));
  return e;
}
function Ei() {
  var e = Kn !== 0;
  return (Kn = 0), e;
}
function Fe() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return J === null ? (V.memoizedState = J = e) : (J = J.next = e), J;
}
function _e() {
  if (Y === null) {
    var e = V.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Y.next;
  var t = J === null ? V.memoizedState : J.next;
  if (t !== null) (J = t), (Y = e);
  else {
    if (e === null) throw Error(y(310));
    (Y = e),
      (e = {
        memoizedState: Y.memoizedState,
        baseState: Y.baseState,
        baseQueue: Y.baseQueue,
        queue: Y.queue,
        next: null,
      }),
      J === null ? (V.memoizedState = J = e) : (J = J.next = e);
  }
  return J;
}
function Gn(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Wl(e) {
  var t = _e(),
    n = t.queue;
  if (n === null) throw Error(y(311));
  n.lastRenderedReducer = e;
  var r = Y,
    l = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (l !== null) {
      var i = l.next;
      (l.next = o.next), (o.next = i);
    }
    (r.baseQueue = l = o), (n.pending = null);
  }
  if (l !== null) {
    (o = l.next), (r = r.baseState);
    var s = (i = null),
      u = null,
      c = o;
    do {
      var g = c.lane;
      if ((zt & g) === g)
        u !== null &&
          (u = u.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action));
      else {
        var h = {
          lane: g,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        u === null ? ((s = u = h), (i = r)) : (u = u.next = h),
          (V.lanes |= g),
          (Pt |= g);
      }
      c = c.next;
    } while (c !== null && c !== o);
    u === null ? (i = r) : (u.next = s),
      De(r, t.memoizedState) || (fe = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = u),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (o = l.lane), (V.lanes |= o), (Pt |= o), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Hl(e) {
  var t = _e(),
    n = t.queue;
  if (n === null) throw Error(y(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = (l = l.next);
    do (o = e(o, i.action)), (i = i.next);
    while (i !== l);
    De(o, t.memoizedState) || (fe = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function va() {}
function ya(e, t) {
  var n = V,
    r = _e(),
    l = t(),
    o = !De(r.memoizedState, l);
  if (
    (o && ((r.memoizedState = l), (fe = !0)),
    (r = r.queue),
    ji(Sa.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (J !== null && J.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Yn(9, ka.bind(null, n, r, l, t), void 0, null),
      q === null)
    )
      throw Error(y(349));
    zt & 30 || wa(n, t, l);
  }
  return l;
}
function wa(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = V.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (V.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function ka(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), xa(t) && Ca(e);
}
function Sa(e, t, n) {
  return n(function () {
    xa(t) && Ca(e);
  });
}
function xa(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !De(e, n);
  } catch {
    return !0;
  }
}
function Ca(e) {
  var t = Ye(e, 1);
  t !== null && Re(t, e, 1, -1);
}
function zs(e) {
  var t = Fe();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Gn,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = zf.bind(null, V, e)),
    [t.memoizedState, e]
  );
}
function Yn(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = V.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (V.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Ea() {
  return _e().memoizedState;
}
function _r(e, t, n, r) {
  var l = Fe();
  (V.flags |= e),
    (l.memoizedState = Yn(1 | t, n, void 0, r === void 0 ? null : r));
}
function fl(e, t, n, r) {
  var l = _e();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (Y !== null) {
    var i = Y.memoizedState;
    if (((o = i.destroy), r !== null && xi(r, i.deps))) {
      l.memoizedState = Yn(t, n, o, r);
      return;
    }
  }
  (V.flags |= e), (l.memoizedState = Yn(1 | t, n, o, r));
}
function Ps(e, t) {
  return _r(8390656, 8, e, t);
}
function ji(e, t) {
  return fl(2048, 8, e, t);
}
function ja(e, t) {
  return fl(4, 2, e, t);
}
function Na(e, t) {
  return fl(4, 4, e, t);
}
function _a(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function La(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), fl(4, 4, _a.bind(null, t, e), n)
  );
}
function Ni() {}
function za(e, t) {
  var n = _e();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && xi(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Pa(e, t) {
  var n = _e();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && xi(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Ta(e, t, n) {
  return zt & 21
    ? (De(n, t) || ((n = Ru()), (V.lanes |= n), (Pt |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (fe = !0)), (e.memoizedState = n));
}
function _f(e, t) {
  var n = R;
  (R = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Bl.transition;
  Bl.transition = {};
  try {
    e(!1), t();
  } finally {
    (R = n), (Bl.transition = r);
  }
}
function Ia() {
  return _e().memoizedState;
}
function Lf(e, t, n) {
  var r = ct(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Ma(e))
  )
    Ra(t, n);
  else if (((n = ca(e, t, n, r)), n !== null)) {
    var l = ue();
    Re(n, e, r, l), Da(n, t, r);
  }
}
function zf(e, t, n) {
  var r = ct(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Ma(e)) Ra(t, l);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var i = t.lastRenderedState,
          s = o(i, n);
        if (((l.hasEagerState = !0), (l.eagerState = s), De(s, i))) {
          var u = t.interleaved;
          u === null
            ? ((l.next = l), vi(t))
            : ((l.next = u.next), (u.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = ca(e, t, l, r)),
      n !== null && ((l = ue()), Re(n, e, r, l), Da(n, t, r));
  }
}
function Ma(e) {
  var t = e.alternate;
  return e === V || (t !== null && t === V);
}
function Ra(e, t) {
  zn = Zr = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Da(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), ri(e, n);
  }
}
var Jr = {
    readContext: Ne,
    useCallback: re,
    useContext: re,
    useEffect: re,
    useImperativeHandle: re,
    useInsertionEffect: re,
    useLayoutEffect: re,
    useMemo: re,
    useReducer: re,
    useRef: re,
    useState: re,
    useDebugValue: re,
    useDeferredValue: re,
    useTransition: re,
    useMutableSource: re,
    useSyncExternalStore: re,
    useId: re,
    unstable_isNewReconciler: !1,
  },
  Pf = {
    readContext: Ne,
    useCallback: function (e, t) {
      return (Fe().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Ne,
    useEffect: Ps,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        _r(4194308, 4, _a.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return _r(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return _r(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Fe();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Fe();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Lf.bind(null, V, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Fe();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: zs,
    useDebugValue: Ni,
    useDeferredValue: function (e) {
      return (Fe().memoizedState = e);
    },
    useTransition: function () {
      var e = zs(!1),
        t = e[0];
      return (e = _f.bind(null, e[1])), (Fe().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = V,
        l = Fe();
      if (U) {
        if (n === void 0) throw Error(y(407));
        n = n();
      } else {
        if (((n = t()), q === null)) throw Error(y(349));
        zt & 30 || wa(r, t, n);
      }
      l.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (l.queue = o),
        Ps(Sa.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        Yn(9, ka.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Fe(),
        t = q.identifierPrefix;
      if (U) {
        var n = He,
          r = We;
        (n = (r & ~(1 << (32 - Me(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Kn++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Nf++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Tf = {
    readContext: Ne,
    useCallback: za,
    useContext: Ne,
    useEffect: ji,
    useImperativeHandle: La,
    useInsertionEffect: ja,
    useLayoutEffect: Na,
    useMemo: Pa,
    useReducer: Wl,
    useRef: Ea,
    useState: function () {
      return Wl(Gn);
    },
    useDebugValue: Ni,
    useDeferredValue: function (e) {
      var t = _e();
      return Ta(t, Y.memoizedState, e);
    },
    useTransition: function () {
      var e = Wl(Gn)[0],
        t = _e().memoizedState;
      return [e, t];
    },
    useMutableSource: va,
    useSyncExternalStore: ya,
    useId: Ia,
    unstable_isNewReconciler: !1,
  },
  If = {
    readContext: Ne,
    useCallback: za,
    useContext: Ne,
    useEffect: ji,
    useImperativeHandle: La,
    useInsertionEffect: ja,
    useLayoutEffect: Na,
    useMemo: Pa,
    useReducer: Hl,
    useRef: Ea,
    useState: function () {
      return Hl(Gn);
    },
    useDebugValue: Ni,
    useDeferredValue: function (e) {
      var t = _e();
      return Y === null ? (t.memoizedState = e) : Ta(t, Y.memoizedState, e);
    },
    useTransition: function () {
      var e = Hl(Gn)[0],
        t = _e().memoizedState;
      return [e, t];
    },
    useMutableSource: va,
    useSyncExternalStore: ya,
    useId: Ia,
    unstable_isNewReconciler: !1,
  };
function ln(e, t) {
  try {
    var n = "",
      r = t;
    do (n += od(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (o) {
    l =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function Ql(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function zo(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Mf = typeof WeakMap == "function" ? WeakMap : Map;
function Oa(e, t, n) {
  (n = Qe(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      br || ((br = !0), (Uo = r)), zo(e, t);
    }),
    n
  );
}
function Fa(e, t, n) {
  (n = Qe(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        zo(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        zo(e, t),
          typeof r != "function" &&
            (at === null ? (at = new Set([this])) : at.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    n
  );
}
function Ts(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Mf();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = Gf.bind(null, e, t, n)), t.then(e, e));
}
function Is(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Ms(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Qe(-1, 1)), (t.tag = 2), ut(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Rf = Ze.ReactCurrentOwner,
  fe = !1;
function se(e, t, n, r) {
  t.child = e === null ? ha(t, null, n, r) : nn(t, e.child, n, r);
}
function Rs(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return (
    Jt(t, l),
    (r = Ci(e, t, n, r, o, l)),
    (n = Ei()),
    e !== null && !fe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Xe(e, t, l))
      : (U && n && di(t), (t.flags |= 1), se(e, t, r, l), t.child)
  );
}
function Ds(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !Ri(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), $a(e, t, o, r, l))
      : ((e = Tr(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & l))) {
    var i = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : An), n(i, r) && e.ref === t.ref)
    )
      return Xe(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = dt(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function $a(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (An(o, r) && e.ref === t.ref)
      if (((fe = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
        e.flags & 131072 && (fe = !0);
      else return (t.lanes = e.lanes), Xe(e, t, l);
  }
  return Po(e, t, n, r, l);
}
function Ua(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        D(Kt, ge),
        (ge |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          D(Kt, ge),
          (ge |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        D(Kt, ge),
        (ge |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      D(Kt, ge),
      (ge |= r);
  return se(e, t, l, n), t.child;
}
function Aa(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Po(e, t, n, r, l) {
  var o = me(n) ? _t : ie.current;
  return (
    (o = en(t, o)),
    Jt(t, l),
    (n = Ci(e, t, n, r, o, l)),
    (r = Ei()),
    e !== null && !fe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Xe(e, t, l))
      : (U && r && di(t), (t.flags |= 1), se(e, t, n, l), t.child)
  );
}
function Os(e, t, n, r, l) {
  if (me(n)) {
    var o = !0;
    Wr(t);
  } else o = !1;
  if ((Jt(t, l), t.stateNode === null))
    Lr(e, t), pa(t, n, r), Lo(t, n, r, l), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      s = t.memoizedProps;
    i.props = s;
    var u = i.context,
      c = n.contextType;
    typeof c == "object" && c !== null
      ? (c = Ne(c))
      : ((c = me(n) ? _t : ie.current), (c = en(t, c)));
    var g = n.getDerivedStateFromProps,
      h =
        typeof g == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    h ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((s !== r || u !== c) && _s(t, i, r, c)),
      (be = !1);
    var m = t.memoizedState;
    (i.state = m),
      Yr(t, r, i, l),
      (u = t.memoizedState),
      s !== r || m !== u || pe.current || be
        ? (typeof g == "function" && (_o(t, n, g, r), (u = t.memoizedState)),
          (s = be || Ns(t, n, s, r, m, u, c))
            ? (h ||
                (typeof i.UNSAFE_componentWillMount != "function" &&
                  typeof i.componentWillMount != "function") ||
                (typeof i.componentWillMount == "function" &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == "function" &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = u)),
          (i.props = r),
          (i.state = u),
          (i.context = c),
          (r = s))
        : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (i = t.stateNode),
      da(e, t),
      (s = t.memoizedProps),
      (c = t.type === t.elementType ? s : Pe(t.type, s)),
      (i.props = c),
      (h = t.pendingProps),
      (m = i.context),
      (u = n.contextType),
      typeof u == "object" && u !== null
        ? (u = Ne(u))
        : ((u = me(n) ? _t : ie.current), (u = en(t, u)));
    var w = n.getDerivedStateFromProps;
    (g =
      typeof w == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((s !== h || m !== u) && _s(t, i, r, u)),
      (be = !1),
      (m = t.memoizedState),
      (i.state = m),
      Yr(t, r, i, l);
    var k = t.memoizedState;
    s !== h || m !== k || pe.current || be
      ? (typeof w == "function" && (_o(t, n, w, r), (k = t.memoizedState)),
        (c = be || Ns(t, n, c, r, m, k, u) || !1)
          ? (g ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(r, k, u),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(r, k, u)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (s === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (s === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = k)),
        (i.props = r),
        (i.state = k),
        (i.context = u),
        (r = c))
      : (typeof i.componentDidUpdate != "function" ||
          (s === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
          (s === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return To(e, t, n, r, o, l);
}
function To(e, t, n, r, l, o) {
  Aa(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return l && Ss(t, n, !1), Xe(e, t, o);
  (r = t.stateNode), (Rf.current = t);
  var s =
    i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = nn(t, e.child, null, o)), (t.child = nn(t, null, s, o)))
      : se(e, t, s, o),
    (t.memoizedState = r.state),
    l && Ss(t, n, !0),
    t.child
  );
}
function Va(e) {
  var t = e.stateNode;
  t.pendingContext
    ? ks(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && ks(e, t.context, !1),
    wi(e, t.containerInfo);
}
function Fs(e, t, n, r, l) {
  return tn(), pi(l), (t.flags |= 256), se(e, t, n, r), t.child;
}
var Io = { dehydrated: null, treeContext: null, retryLane: 0 };
function Mo(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Ba(e, t, n) {
  var r = t.pendingProps,
    l = A.current,
    o = !1,
    i = (t.flags & 128) !== 0,
    s;
  if (
    ((s = i) ||
      (s = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    s
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    D(A, l & 1),
    e === null)
  )
    return (
      jo(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((i = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (i = { mode: "hidden", children: i }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = i))
                : (o = hl(i, r, 0, null)),
              (e = Nt(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = Mo(n)),
              (t.memoizedState = Io),
              e)
            : _i(t, i))
    );
  if (((l = e.memoizedState), l !== null && ((s = l.dehydrated), s !== null)))
    return Df(e, t, i, r, s, l, n);
  if (o) {
    (o = r.fallback), (i = t.mode), (l = e.child), (s = l.sibling);
    var u = { mode: "hidden", children: r.children };
    return (
      !(i & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = u),
          (t.deletions = null))
        : ((r = dt(l, u)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      s !== null ? (o = dt(s, o)) : ((o = Nt(o, i, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? Mo(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (o.memoizedState = i),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = Io),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = dt(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function _i(e, t) {
  return (
    (t = hl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function gr(e, t, n, r) {
  return (
    r !== null && pi(r),
    nn(t, e.child, null, n),
    (e = _i(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Df(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Ql(Error(y(422)))), gr(e, t, i, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (l = t.mode),
        (r = hl({ mode: "visible", children: r.children }, l, 0, null)),
        (o = Nt(o, l, i, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && nn(t, e.child, null, i),
        (t.child.memoizedState = Mo(i)),
        (t.memoizedState = Io),
        o);
  if (!(t.mode & 1)) return gr(e, t, i, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var s = r.dgst;
    return (r = s), (o = Error(y(419))), (r = Ql(o, r, void 0)), gr(e, t, i, r);
  }
  if (((s = (i & e.childLanes) !== 0), fe || s)) {
    if (((r = q), r !== null)) {
      switch (i & -i) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | i) ? 0 : l),
        l !== 0 &&
          l !== o.retryLane &&
          ((o.retryLane = l), Ye(e, l), Re(r, e, l, -1));
    }
    return Mi(), (r = Ql(Error(y(421)))), gr(e, t, i, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Yf.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (ve = st(l.nextSibling)),
      (ye = t),
      (U = !0),
      (Ie = null),
      e !== null &&
        ((xe[Ce++] = We),
        (xe[Ce++] = He),
        (xe[Ce++] = Lt),
        (We = e.id),
        (He = e.overflow),
        (Lt = t)),
      (t = _i(t, r.children)),
      (t.flags |= 4096),
      t);
}
function $s(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), No(e.return, t, n);
}
function Kl(e, t, n, r, l) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = l));
}
function Wa(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    o = r.tail;
  if ((se(e, t, r.children, n), (r = A.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && $s(e, n, t);
        else if (e.tag === 19) $s(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((D(A, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && Xr(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          Kl(t, !1, l, n, o);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && Xr(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        Kl(t, !0, n, null, o);
        break;
      case "together":
        Kl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Lr(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Xe(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Pt |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(y(153));
  if (t.child !== null) {
    for (
      e = t.child, n = dt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = dt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Of(e, t, n) {
  switch (t.tag) {
    case 3:
      Va(t), tn();
      break;
    case 5:
      ga(t);
      break;
    case 1:
      me(t.type) && Wr(t);
      break;
    case 4:
      wi(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      D(Kr, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (D(A, A.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Ba(e, t, n)
          : (D(A, A.current & 1),
            (e = Xe(e, t, n)),
            e !== null ? e.sibling : null);
      D(A, A.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Wa(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        D(A, A.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Ua(e, t, n);
  }
  return Xe(e, t, n);
}
var Ha, Ro, Qa, Ka;
Ha = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Ro = function () {};
Qa = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), Et(Ae.current);
    var o = null;
    switch (n) {
      case "input":
        (l = to(e, l)), (r = to(e, r)), (o = []);
        break;
      case "select":
        (l = B({}, l, { value: void 0 })),
          (r = B({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (l = lo(e, l)), (r = lo(e, r)), (o = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Vr);
    }
    io(n, r);
    var i;
    n = null;
    for (c in l)
      if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null)
        if (c === "style") {
          var s = l[c];
          for (i in s) s.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (Mn.hasOwnProperty(c)
              ? o || (o = [])
              : (o = o || []).push(c, null));
    for (c in r) {
      var u = r[c];
      if (
        ((s = l != null ? l[c] : void 0),
        r.hasOwnProperty(c) && u !== s && (u != null || s != null))
      )
        if (c === "style")
          if (s) {
            for (i in s)
              !s.hasOwnProperty(i) ||
                (u && u.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ""));
            for (i in u)
              u.hasOwnProperty(i) &&
                s[i] !== u[i] &&
                (n || (n = {}), (n[i] = u[i]));
          } else n || (o || (o = []), o.push(c, n)), (n = u);
        else
          c === "dangerouslySetInnerHTML"
            ? ((u = u ? u.__html : void 0),
              (s = s ? s.__html : void 0),
              u != null && s !== u && (o = o || []).push(c, u))
            : c === "children"
            ? (typeof u != "string" && typeof u != "number") ||
              (o = o || []).push(c, "" + u)
            : c !== "suppressContentEditableWarning" &&
              c !== "suppressHydrationWarning" &&
              (Mn.hasOwnProperty(c)
                ? (u != null && c === "onScroll" && O("scroll", e),
                  o || s === u || (o = []))
                : (o = o || []).push(c, u));
    }
    n && (o = o || []).push("style", n);
    var c = o;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
Ka = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function yn(e, t) {
  if (!U)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function le(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Ff(e, t, n) {
  var r = t.pendingProps;
  switch ((fi(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return le(t), null;
    case 1:
      return me(t.type) && Br(), le(t), null;
    case 3:
      return (
        (r = t.stateNode),
        rn(),
        F(pe),
        F(ie),
        Si(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (mr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Ie !== null && (Bo(Ie), (Ie = null)))),
        Ro(e, t),
        le(t),
        null
      );
    case 5:
      ki(t);
      var l = Et(Qn.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Qa(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(y(166));
          return le(t), null;
        }
        if (((e = Et(Ae.current)), mr(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[$e] = t), (r[Wn] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              O("cancel", r), O("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              O("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Cn.length; l++) O(Cn[l], r);
              break;
            case "source":
              O("error", r);
              break;
            case "img":
            case "image":
            case "link":
              O("error", r), O("load", r);
              break;
            case "details":
              O("toggle", r);
              break;
            case "input":
              Gi(r, o), O("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                O("invalid", r);
              break;
            case "textarea":
              Xi(r, o), O("invalid", r);
          }
          io(n, o), (l = null);
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var s = o[i];
              i === "children"
                ? typeof s == "string"
                  ? r.textContent !== s &&
                    (o.suppressHydrationWarning !== !0 &&
                      pr(r.textContent, s, e),
                    (l = ["children", s]))
                  : typeof s == "number" &&
                    r.textContent !== "" + s &&
                    (o.suppressHydrationWarning !== !0 &&
                      pr(r.textContent, s, e),
                    (l = ["children", "" + s]))
                : Mn.hasOwnProperty(i) &&
                  s != null &&
                  i === "onScroll" &&
                  O("scroll", r);
            }
          switch (n) {
            case "input":
              or(r), Yi(r, o, !0);
              break;
            case "textarea":
              or(r), Zi(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Vr);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = wu(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = i.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = i.createElement(n, { is: r.is }))
                : ((e = i.createElement(n)),
                  n === "select" &&
                    ((i = e),
                    r.multiple
                      ? (i.multiple = !0)
                      : r.size && (i.size = r.size)))
              : (e = i.createElementNS(e, n)),
            (e[$e] = t),
            (e[Wn] = r),
            Ha(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = so(n, r)), n)) {
              case "dialog":
                O("cancel", e), O("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                O("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < Cn.length; l++) O(Cn[l], e);
                l = r;
                break;
              case "source":
                O("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                O("error", e), O("load", e), (l = r);
                break;
              case "details":
                O("toggle", e), (l = r);
                break;
              case "input":
                Gi(e, r), (l = to(e, r)), O("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = B({}, r, { value: void 0 })),
                  O("invalid", e);
                break;
              case "textarea":
                Xi(e, r), (l = lo(e, r)), O("invalid", e);
                break;
              default:
                l = r;
            }
            io(n, l), (s = l);
            for (o in s)
              if (s.hasOwnProperty(o)) {
                var u = s[o];
                o === "style"
                  ? xu(e, u)
                  : o === "dangerouslySetInnerHTML"
                  ? ((u = u ? u.__html : void 0), u != null && ku(e, u))
                  : o === "children"
                  ? typeof u == "string"
                    ? (n !== "textarea" || u !== "") && Rn(e, u)
                    : typeof u == "number" && Rn(e, "" + u)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (Mn.hasOwnProperty(o)
                      ? u != null && o === "onScroll" && O("scroll", e)
                      : u != null && Jo(e, o, u, i));
              }
            switch (n) {
              case "input":
                or(e), Yi(e, r, !1);
                break;
              case "textarea":
                or(e), Zi(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + ft(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? Gt(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      Gt(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Vr);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return le(t), null;
    case 6:
      if (e && t.stateNode != null) Ka(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(y(166));
        if (((n = Et(Qn.current)), Et(Ae.current), mr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[$e] = t),
            (o = r.nodeValue !== n) && ((e = ye), e !== null))
          )
            switch (e.tag) {
              case 3:
                pr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  pr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[$e] = t),
            (t.stateNode = r);
      }
      return le(t), null;
    case 13:
      if (
        (F(A),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (U && ve !== null && t.mode & 1 && !(t.flags & 128))
          aa(), tn(), (t.flags |= 98560), (o = !1);
        else if (((o = mr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(y(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(y(317));
            o[$e] = t;
          } else
            tn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          le(t), (o = !1);
        } else Ie !== null && (Bo(Ie), (Ie = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || A.current & 1 ? X === 0 && (X = 3) : Mi())),
          t.updateQueue !== null && (t.flags |= 4),
          le(t),
          null);
    case 4:
      return (
        rn(), Ro(e, t), e === null && Vn(t.stateNode.containerInfo), le(t), null
      );
    case 10:
      return gi(t.type._context), le(t), null;
    case 17:
      return me(t.type) && Br(), le(t), null;
    case 19:
      if ((F(A), (o = t.memoizedState), o === null)) return le(t), null;
      if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
        if (r) yn(o, !1);
        else {
          if (X !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = Xr(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    yn(o, !1),
                    r = i.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (i = o.alternate),
                    i === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = i.childLanes),
                        (o.lanes = i.lanes),
                        (o.child = i.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = i.memoizedProps),
                        (o.memoizedState = i.memoizedState),
                        (o.updateQueue = i.updateQueue),
                        (o.type = i.type),
                        (e = i.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return D(A, (A.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            K() > on &&
            ((t.flags |= 128), (r = !0), yn(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Xr(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              yn(o, !0),
              o.tail === null && o.tailMode === "hidden" && !i.alternate && !U)
            )
              return le(t), null;
          } else
            2 * K() - o.renderingStartTime > on &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), yn(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = o.last),
            n !== null ? (n.sibling = i) : (t.child = i),
            (o.last = i));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = K()),
          (t.sibling = null),
          (n = A.current),
          D(A, r ? (n & 1) | 2 : n & 1),
          t)
        : (le(t), null);
    case 22:
    case 23:
      return (
        Ii(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? ge & 1073741824 && (le(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : le(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(y(156, t.tag));
}
function $f(e, t) {
  switch ((fi(t), t.tag)) {
    case 1:
      return (
        me(t.type) && Br(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        rn(),
        F(pe),
        F(ie),
        Si(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return ki(t), null;
    case 13:
      if ((F(A), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(y(340));
        tn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return F(A), null;
    case 4:
      return rn(), null;
    case 10:
      return gi(t.type._context), null;
    case 22:
    case 23:
      return Ii(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var vr = !1,
  oe = !1,
  Uf = typeof WeakSet == "function" ? WeakSet : Set,
  C = null;
function Qt(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        W(e, t, r);
      }
    else n.current = null;
}
function Do(e, t, n) {
  try {
    n();
  } catch (r) {
    W(e, t, r);
  }
}
var Us = !1;
function Af(e, t) {
  if (((yo = $r), (e = Zu()), ci(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0,
            s = -1,
            u = -1,
            c = 0,
            g = 0,
            h = e,
            m = null;
          t: for (;;) {
            for (
              var w;
              h !== n || (l !== 0 && h.nodeType !== 3) || (s = i + l),
                h !== o || (r !== 0 && h.nodeType !== 3) || (u = i + r),
                h.nodeType === 3 && (i += h.nodeValue.length),
                (w = h.firstChild) !== null;

            )
              (m = h), (h = w);
            for (;;) {
              if (h === e) break t;
              if (
                (m === n && ++c === l && (s = i),
                m === o && ++g === r && (u = i),
                (w = h.nextSibling) !== null)
              )
                break;
              (h = m), (m = h.parentNode);
            }
            h = w;
          }
          n = s === -1 || u === -1 ? null : { start: s, end: u };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (wo = { focusedElem: e, selectionRange: n }, $r = !1, C = t; C !== null; )
    if (((t = C), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (C = e);
    else
      for (; C !== null; ) {
        t = C;
        try {
          var k = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (k !== null) {
                  var S = k.memoizedProps,
                    $ = k.memoizedState,
                    d = t.stateNode,
                    a = d.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? S : Pe(t.type, S),
                      $
                    );
                  d.__reactInternalSnapshotBeforeUpdate = a;
                }
                break;
              case 3:
                var f = t.stateNode.containerInfo;
                f.nodeType === 1
                  ? (f.textContent = "")
                  : f.nodeType === 9 &&
                    f.documentElement &&
                    f.removeChild(f.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(y(163));
            }
        } catch (v) {
          W(t, t.return, v);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (C = e);
          break;
        }
        C = t.return;
      }
  return (k = Us), (Us = !1), k;
}
function Pn(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        (l.destroy = void 0), o !== void 0 && Do(t, n, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function pl(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Oo(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Ga(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Ga(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[$e], delete t[Wn], delete t[xo], delete t[xf], delete t[Cf])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Ya(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function As(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Ya(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Fo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Vr));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Fo(e, t, n), e = e.sibling; e !== null; ) Fo(e, t, n), (e = e.sibling);
}
function $o(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for ($o(e, t, n), e = e.sibling; e !== null; ) $o(e, t, n), (e = e.sibling);
}
var b = null,
  Te = !1;
function Je(e, t, n) {
  for (n = n.child; n !== null; ) Xa(e, t, n), (n = n.sibling);
}
function Xa(e, t, n) {
  if (Ue && typeof Ue.onCommitFiberUnmount == "function")
    try {
      Ue.onCommitFiberUnmount(ol, n);
    } catch {}
  switch (n.tag) {
    case 5:
      oe || Qt(n, t);
    case 6:
      var r = b,
        l = Te;
      (b = null),
        Je(e, t, n),
        (b = r),
        (Te = l),
        b !== null &&
          (Te
            ? ((e = b),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : b.removeChild(n.stateNode));
      break;
    case 18:
      b !== null &&
        (Te
          ? ((e = b),
            (n = n.stateNode),
            e.nodeType === 8
              ? Ul(e.parentNode, n)
              : e.nodeType === 1 && Ul(e, n),
            $n(e))
          : Ul(b, n.stateNode));
      break;
    case 4:
      (r = b),
        (l = Te),
        (b = n.stateNode.containerInfo),
        (Te = !0),
        Je(e, t, n),
        (b = r),
        (Te = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !oe &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var o = l,
            i = o.destroy;
          (o = o.tag),
            i !== void 0 && (o & 2 || o & 4) && Do(n, t, i),
            (l = l.next);
        } while (l !== r);
      }
      Je(e, t, n);
      break;
    case 1:
      if (
        !oe &&
        (Qt(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (s) {
          W(n, t, s);
        }
      Je(e, t, n);
      break;
    case 21:
      Je(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((oe = (r = oe) || n.memoizedState !== null), Je(e, t, n), (oe = r))
        : Je(e, t, n);
      break;
    default:
      Je(e, t, n);
  }
}
function Vs(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Uf()),
      t.forEach(function (r) {
        var l = Xf.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function ze(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var o = e,
          i = t,
          s = i;
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 5:
              (b = s.stateNode), (Te = !1);
              break e;
            case 3:
              (b = s.stateNode.containerInfo), (Te = !0);
              break e;
            case 4:
              (b = s.stateNode.containerInfo), (Te = !0);
              break e;
          }
          s = s.return;
        }
        if (b === null) throw Error(y(160));
        Xa(o, i, l), (b = null), (Te = !1);
        var u = l.alternate;
        u !== null && (u.return = null), (l.return = null);
      } catch (c) {
        W(l, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Za(t, e), (t = t.sibling);
}
function Za(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((ze(t, e), Oe(e), r & 4)) {
        try {
          Pn(3, e, e.return), pl(3, e);
        } catch (S) {
          W(e, e.return, S);
        }
        try {
          Pn(5, e, e.return);
        } catch (S) {
          W(e, e.return, S);
        }
      }
      break;
    case 1:
      ze(t, e), Oe(e), r & 512 && n !== null && Qt(n, n.return);
      break;
    case 5:
      if (
        (ze(t, e),
        Oe(e),
        r & 512 && n !== null && Qt(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          Rn(l, "");
        } catch (S) {
          W(e, e.return, S);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var o = e.memoizedProps,
          i = n !== null ? n.memoizedProps : o,
          s = e.type,
          u = e.updateQueue;
        if (((e.updateQueue = null), u !== null))
          try {
            s === "input" && o.type === "radio" && o.name != null && vu(l, o),
              so(s, i);
            var c = so(s, o);
            for (i = 0; i < u.length; i += 2) {
              var g = u[i],
                h = u[i + 1];
              g === "style"
                ? xu(l, h)
                : g === "dangerouslySetInnerHTML"
                ? ku(l, h)
                : g === "children"
                ? Rn(l, h)
                : Jo(l, g, h, c);
            }
            switch (s) {
              case "input":
                no(l, o);
                break;
              case "textarea":
                yu(l, o);
                break;
              case "select":
                var m = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var w = o.value;
                w != null
                  ? Gt(l, !!o.multiple, w, !1)
                  : m !== !!o.multiple &&
                    (o.defaultValue != null
                      ? Gt(l, !!o.multiple, o.defaultValue, !0)
                      : Gt(l, !!o.multiple, o.multiple ? [] : "", !1));
            }
            l[Wn] = o;
          } catch (S) {
            W(e, e.return, S);
          }
      }
      break;
    case 6:
      if ((ze(t, e), Oe(e), r & 4)) {
        if (e.stateNode === null) throw Error(y(162));
        (l = e.stateNode), (o = e.memoizedProps);
        try {
          l.nodeValue = o;
        } catch (S) {
          W(e, e.return, S);
        }
      }
      break;
    case 3:
      if (
        (ze(t, e), Oe(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          $n(t.containerInfo);
        } catch (S) {
          W(e, e.return, S);
        }
      break;
    case 4:
      ze(t, e), Oe(e);
      break;
    case 13:
      ze(t, e),
        Oe(e),
        (l = e.child),
        l.flags & 8192 &&
          ((o = l.memoizedState !== null),
          (l.stateNode.isHidden = o),
          !o ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (Pi = K())),
        r & 4 && Vs(e);
      break;
    case 22:
      if (
        ((g = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((oe = (c = oe) || g), ze(t, e), (oe = c)) : ze(t, e),
        Oe(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !g && e.mode & 1)
        )
          for (C = e, g = e.child; g !== null; ) {
            for (h = C = g; C !== null; ) {
              switch (((m = C), (w = m.child), m.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Pn(4, m, m.return);
                  break;
                case 1:
                  Qt(m, m.return);
                  var k = m.stateNode;
                  if (typeof k.componentWillUnmount == "function") {
                    (r = m), (n = m.return);
                    try {
                      (t = r),
                        (k.props = t.memoizedProps),
                        (k.state = t.memoizedState),
                        k.componentWillUnmount();
                    } catch (S) {
                      W(r, n, S);
                    }
                  }
                  break;
                case 5:
                  Qt(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    Ws(h);
                    continue;
                  }
              }
              w !== null ? ((w.return = m), (C = w)) : Ws(h);
            }
            g = g.sibling;
          }
        e: for (g = null, h = e; ; ) {
          if (h.tag === 5) {
            if (g === null) {
              g = h;
              try {
                (l = h.stateNode),
                  c
                    ? ((o = l.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((s = h.stateNode),
                      (u = h.memoizedProps.style),
                      (i =
                        u != null && u.hasOwnProperty("display")
                          ? u.display
                          : null),
                      (s.style.display = Su("display", i)));
              } catch (S) {
                W(e, e.return, S);
              }
            }
          } else if (h.tag === 6) {
            if (g === null)
              try {
                h.stateNode.nodeValue = c ? "" : h.memoizedProps;
              } catch (S) {
                W(e, e.return, S);
              }
          } else if (
            ((h.tag !== 22 && h.tag !== 23) ||
              h.memoizedState === null ||
              h === e) &&
            h.child !== null
          ) {
            (h.child.return = h), (h = h.child);
            continue;
          }
          if (h === e) break e;
          for (; h.sibling === null; ) {
            if (h.return === null || h.return === e) break e;
            g === h && (g = null), (h = h.return);
          }
          g === h && (g = null), (h.sibling.return = h.return), (h = h.sibling);
        }
      }
      break;
    case 19:
      ze(t, e), Oe(e), r & 4 && Vs(e);
      break;
    case 21:
      break;
    default:
      ze(t, e), Oe(e);
  }
}
function Oe(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Ya(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(y(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Rn(l, ""), (r.flags &= -33));
          var o = As(e);
          $o(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            s = As(e);
          Fo(e, s, i);
          break;
        default:
          throw Error(y(161));
      }
    } catch (u) {
      W(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Vf(e, t, n) {
  (C = e), Ja(e);
}
function Ja(e, t, n) {
  for (var r = (e.mode & 1) !== 0; C !== null; ) {
    var l = C,
      o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || vr;
      if (!i) {
        var s = l.alternate,
          u = (s !== null && s.memoizedState !== null) || oe;
        s = vr;
        var c = oe;
        if (((vr = i), (oe = u) && !c))
          for (C = l; C !== null; )
            (i = C),
              (u = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? Hs(l)
                : u !== null
                ? ((u.return = i), (C = u))
                : Hs(l);
        for (; o !== null; ) (C = o), Ja(o), (o = o.sibling);
        (C = l), (vr = s), (oe = c);
      }
      Bs(e);
    } else
      l.subtreeFlags & 8772 && o !== null ? ((o.return = l), (C = o)) : Bs(e);
  }
}
function Bs(e) {
  for (; C !== null; ) {
    var t = C;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              oe || pl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !oe)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Pe(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && js(t, o, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                js(t, i, n);
              }
              break;
            case 5:
              var s = t.stateNode;
              if (n === null && t.flags & 4) {
                n = s;
                var u = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    u.autoFocus && n.focus();
                    break;
                  case "img":
                    u.src && (n.src = u.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var c = t.alternate;
                if (c !== null) {
                  var g = c.memoizedState;
                  if (g !== null) {
                    var h = g.dehydrated;
                    h !== null && $n(h);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(y(163));
          }
        oe || (t.flags & 512 && Oo(t));
      } catch (m) {
        W(t, t.return, m);
      }
    }
    if (t === e) {
      C = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (C = n);
      break;
    }
    C = t.return;
  }
}
function Ws(e) {
  for (; C !== null; ) {
    var t = C;
    if (t === e) {
      C = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (C = n);
      break;
    }
    C = t.return;
  }
}
function Hs(e) {
  for (; C !== null; ) {
    var t = C;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            pl(4, t);
          } catch (u) {
            W(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              W(t, l, u);
            }
          }
          var o = t.return;
          try {
            Oo(t);
          } catch (u) {
            W(t, o, u);
          }
          break;
        case 5:
          var i = t.return;
          try {
            Oo(t);
          } catch (u) {
            W(t, i, u);
          }
      }
    } catch (u) {
      W(t, t.return, u);
    }
    if (t === e) {
      C = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      (s.return = t.return), (C = s);
      break;
    }
    C = t.return;
  }
}
var Bf = Math.ceil,
  qr = Ze.ReactCurrentDispatcher,
  Li = Ze.ReactCurrentOwner,
  je = Ze.ReactCurrentBatchConfig,
  M = 0,
  q = null,
  G = null,
  te = 0,
  ge = 0,
  Kt = gt(0),
  X = 0,
  Xn = null,
  Pt = 0,
  ml = 0,
  zi = 0,
  Tn = null,
  de = null,
  Pi = 0,
  on = 1 / 0,
  Ve = null,
  br = !1,
  Uo = null,
  at = null,
  yr = !1,
  rt = null,
  el = 0,
  In = 0,
  Ao = null,
  zr = -1,
  Pr = 0;
function ue() {
  return M & 6 ? K() : zr !== -1 ? zr : (zr = K());
}
function ct(e) {
  return e.mode & 1
    ? M & 2 && te !== 0
      ? te & -te
      : jf.transition !== null
      ? (Pr === 0 && (Pr = Ru()), Pr)
      : ((e = R),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Vu(e.type))),
        e)
    : 1;
}
function Re(e, t, n, r) {
  if (50 < In) throw ((In = 0), (Ao = null), Error(y(185)));
  Jn(e, n, r),
    (!(M & 2) || e !== q) &&
      (e === q && (!(M & 2) && (ml |= n), X === 4 && tt(e, te)),
      he(e, r),
      n === 1 && M === 0 && !(t.mode & 1) && ((on = K() + 500), cl && vt()));
}
function he(e, t) {
  var n = e.callbackNode;
  Ed(e, t);
  var r = Fr(e, e === q ? te : 0);
  if (r === 0)
    n !== null && bi(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && bi(n), t === 1))
      e.tag === 0 ? Ef(Qs.bind(null, e)) : ia(Qs.bind(null, e)),
        kf(function () {
          !(M & 6) && vt();
        }),
        (n = null);
    else {
      switch (Du(r)) {
        case 1:
          n = ni;
          break;
        case 4:
          n = Iu;
          break;
        case 16:
          n = Or;
          break;
        case 536870912:
          n = Mu;
          break;
        default:
          n = Or;
      }
      n = oc(n, qa.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function qa(e, t) {
  if (((zr = -1), (Pr = 0), M & 6)) throw Error(y(327));
  var n = e.callbackNode;
  if (qt() && e.callbackNode !== n) return null;
  var r = Fr(e, e === q ? te : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = tl(e, r);
  else {
    t = r;
    var l = M;
    M |= 2;
    var o = ec();
    (q !== e || te !== t) && ((Ve = null), (on = K() + 500), jt(e, t));
    do
      try {
        Qf();
        break;
      } catch (s) {
        ba(e, s);
      }
    while (1);
    hi(),
      (qr.current = o),
      (M = l),
      G !== null ? (t = 0) : ((q = null), (te = 0), (t = X));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = po(e)), l !== 0 && ((r = l), (t = Vo(e, l)))), t === 1)
    )
      throw ((n = Xn), jt(e, 0), tt(e, r), he(e, K()), n);
    if (t === 6) tt(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !Wf(l) &&
          ((t = tl(e, r)),
          t === 2 && ((o = po(e)), o !== 0 && ((r = o), (t = Vo(e, o)))),
          t === 1))
      )
        throw ((n = Xn), jt(e, 0), tt(e, r), he(e, K()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(y(345));
        case 2:
          St(e, de, Ve);
          break;
        case 3:
          if (
            (tt(e, r), (r & 130023424) === r && ((t = Pi + 500 - K()), 10 < t))
          ) {
            if (Fr(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              ue(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = So(St.bind(null, e, de, Ve), t);
            break;
          }
          St(e, de, Ve);
          break;
        case 4:
          if ((tt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - Me(r);
            (o = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~o);
          }
          if (
            ((r = l),
            (r = K() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * Bf(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = So(St.bind(null, e, de, Ve), r);
            break;
          }
          St(e, de, Ve);
          break;
        case 5:
          St(e, de, Ve);
          break;
        default:
          throw Error(y(329));
      }
    }
  }
  return he(e, K()), e.callbackNode === n ? qa.bind(null, e) : null;
}
function Vo(e, t) {
  var n = Tn;
  return (
    e.current.memoizedState.isDehydrated && (jt(e, t).flags |= 256),
    (e = tl(e, t)),
    e !== 2 && ((t = de), (de = n), t !== null && Bo(t)),
    e
  );
}
function Bo(e) {
  de === null ? (de = e) : de.push.apply(de, e);
}
function Wf(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            o = l.getSnapshot;
          l = l.value;
          try {
            if (!De(o(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function tt(e, t) {
  for (
    t &= ~zi,
      t &= ~ml,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Me(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Qs(e) {
  if (M & 6) throw Error(y(327));
  qt();
  var t = Fr(e, 0);
  if (!(t & 1)) return he(e, K()), null;
  var n = tl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = po(e);
    r !== 0 && ((t = r), (n = Vo(e, r)));
  }
  if (n === 1) throw ((n = Xn), jt(e, 0), tt(e, t), he(e, K()), n);
  if (n === 6) throw Error(y(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    St(e, de, Ve),
    he(e, K()),
    null
  );
}
function Ti(e, t) {
  var n = M;
  M |= 1;
  try {
    return e(t);
  } finally {
    (M = n), M === 0 && ((on = K() + 500), cl && vt());
  }
}
function Tt(e) {
  rt !== null && rt.tag === 0 && !(M & 6) && qt();
  var t = M;
  M |= 1;
  var n = je.transition,
    r = R;
  try {
    if (((je.transition = null), (R = 1), e)) return e();
  } finally {
    (R = r), (je.transition = n), (M = t), !(M & 6) && vt();
  }
}
function Ii() {
  (ge = Kt.current), F(Kt);
}
function jt(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), wf(n)), G !== null))
    for (n = G.return; n !== null; ) {
      var r = n;
      switch ((fi(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Br();
          break;
        case 3:
          rn(), F(pe), F(ie), Si();
          break;
        case 5:
          ki(r);
          break;
        case 4:
          rn();
          break;
        case 13:
          F(A);
          break;
        case 19:
          F(A);
          break;
        case 10:
          gi(r.type._context);
          break;
        case 22:
        case 23:
          Ii();
      }
      n = n.return;
    }
  if (
    ((q = e),
    (G = e = dt(e.current, null)),
    (te = ge = t),
    (X = 0),
    (Xn = null),
    (zi = ml = Pt = 0),
    (de = Tn = null),
    Ct !== null)
  ) {
    for (t = 0; t < Ct.length; t++)
      if (((n = Ct[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          o = n.pending;
        if (o !== null) {
          var i = o.next;
          (o.next = l), (r.next = i);
        }
        n.pending = r;
      }
    Ct = null;
  }
  return e;
}
function ba(e, t) {
  do {
    var n = G;
    try {
      if ((hi(), (Nr.current = Jr), Zr)) {
        for (var r = V.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        Zr = !1;
      }
      if (
        ((zt = 0),
        (J = Y = V = null),
        (zn = !1),
        (Kn = 0),
        (Li.current = null),
        n === null || n.return === null)
      ) {
        (X = 1), (Xn = t), (G = null);
        break;
      }
      e: {
        var o = e,
          i = n.return,
          s = n,
          u = t;
        if (
          ((t = te),
          (s.flags |= 32768),
          u !== null && typeof u == "object" && typeof u.then == "function")
        ) {
          var c = u,
            g = s,
            h = g.tag;
          if (!(g.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var m = g.alternate;
            m
              ? ((g.updateQueue = m.updateQueue),
                (g.memoizedState = m.memoizedState),
                (g.lanes = m.lanes))
              : ((g.updateQueue = null), (g.memoizedState = null));
          }
          var w = Is(i);
          if (w !== null) {
            (w.flags &= -257),
              Ms(w, i, s, o, t),
              w.mode & 1 && Ts(o, c, t),
              (t = w),
              (u = c);
            var k = t.updateQueue;
            if (k === null) {
              var S = new Set();
              S.add(u), (t.updateQueue = S);
            } else k.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              Ts(o, c, t), Mi();
              break e;
            }
            u = Error(y(426));
          }
        } else if (U && s.mode & 1) {
          var $ = Is(i);
          if ($ !== null) {
            !($.flags & 65536) && ($.flags |= 256),
              Ms($, i, s, o, t),
              pi(ln(u, s));
            break e;
          }
        }
        (o = u = ln(u, s)),
          X !== 4 && (X = 2),
          Tn === null ? (Tn = [o]) : Tn.push(o),
          (o = i);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var d = Oa(o, u, t);
              Es(o, d);
              break e;
            case 1:
              s = u;
              var a = o.type,
                f = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof a.getDerivedStateFromError == "function" ||
                  (f !== null &&
                    typeof f.componentDidCatch == "function" &&
                    (at === null || !at.has(f))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var v = Fa(o, s, t);
                Es(o, v);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      nc(n);
    } catch (E) {
      (t = E), G === n && n !== null && (G = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function ec() {
  var e = qr.current;
  return (qr.current = Jr), e === null ? Jr : e;
}
function Mi() {
  (X === 0 || X === 3 || X === 2) && (X = 4),
    q === null || (!(Pt & 268435455) && !(ml & 268435455)) || tt(q, te);
}
function tl(e, t) {
  var n = M;
  M |= 2;
  var r = ec();
  (q !== e || te !== t) && ((Ve = null), jt(e, t));
  do
    try {
      Hf();
      break;
    } catch (l) {
      ba(e, l);
    }
  while (1);
  if ((hi(), (M = n), (qr.current = r), G !== null)) throw Error(y(261));
  return (q = null), (te = 0), X;
}
function Hf() {
  for (; G !== null; ) tc(G);
}
function Qf() {
  for (; G !== null && !hd(); ) tc(G);
}
function tc(e) {
  var t = lc(e.alternate, e, ge);
  (e.memoizedProps = e.pendingProps),
    t === null ? nc(e) : (G = t),
    (Li.current = null);
}
function nc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = $f(n, t)), n !== null)) {
        (n.flags &= 32767), (G = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (X = 6), (G = null);
        return;
      }
    } else if (((n = Ff(n, t, ge)), n !== null)) {
      G = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      G = t;
      return;
    }
    G = t = e;
  } while (t !== null);
  X === 0 && (X = 5);
}
function St(e, t, n) {
  var r = R,
    l = je.transition;
  try {
    (je.transition = null), (R = 1), Kf(e, t, n, r);
  } finally {
    (je.transition = l), (R = r);
  }
  return null;
}
function Kf(e, t, n, r) {
  do qt();
  while (rt !== null);
  if (M & 6) throw Error(y(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(y(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (jd(e, o),
    e === q && ((G = q = null), (te = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      yr ||
      ((yr = !0),
      oc(Or, function () {
        return qt(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = je.transition), (je.transition = null);
    var i = R;
    R = 1;
    var s = M;
    (M |= 4),
      (Li.current = null),
      Af(e, n),
      Za(n, e),
      ff(wo),
      ($r = !!yo),
      (wo = yo = null),
      (e.current = n),
      Vf(n),
      gd(),
      (M = s),
      (R = i),
      (je.transition = o);
  } else e.current = n;
  if (
    (yr && ((yr = !1), (rt = e), (el = l)),
    (o = e.pendingLanes),
    o === 0 && (at = null),
    wd(n.stateNode),
    he(e, K()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (br) throw ((br = !1), (e = Uo), (Uo = null), e);
  return (
    el & 1 && e.tag !== 0 && qt(),
    (o = e.pendingLanes),
    o & 1 ? (e === Ao ? In++ : ((In = 0), (Ao = e))) : (In = 0),
    vt(),
    null
  );
}
function qt() {
  if (rt !== null) {
    var e = Du(el),
      t = je.transition,
      n = R;
    try {
      if (((je.transition = null), (R = 16 > e ? 16 : e), rt === null))
        var r = !1;
      else {
        if (((e = rt), (rt = null), (el = 0), M & 6)) throw Error(y(331));
        var l = M;
        for (M |= 4, C = e.current; C !== null; ) {
          var o = C,
            i = o.child;
          if (C.flags & 16) {
            var s = o.deletions;
            if (s !== null) {
              for (var u = 0; u < s.length; u++) {
                var c = s[u];
                for (C = c; C !== null; ) {
                  var g = C;
                  switch (g.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Pn(8, g, o);
                  }
                  var h = g.child;
                  if (h !== null) (h.return = g), (C = h);
                  else
                    for (; C !== null; ) {
                      g = C;
                      var m = g.sibling,
                        w = g.return;
                      if ((Ga(g), g === c)) {
                        C = null;
                        break;
                      }
                      if (m !== null) {
                        (m.return = w), (C = m);
                        break;
                      }
                      C = w;
                    }
                }
              }
              var k = o.alternate;
              if (k !== null) {
                var S = k.child;
                if (S !== null) {
                  k.child = null;
                  do {
                    var $ = S.sibling;
                    (S.sibling = null), (S = $);
                  } while (S !== null);
                }
              }
              C = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) (i.return = o), (C = i);
          else
            e: for (; C !== null; ) {
              if (((o = C), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Pn(9, o, o.return);
                }
              var d = o.sibling;
              if (d !== null) {
                (d.return = o.return), (C = d);
                break e;
              }
              C = o.return;
            }
        }
        var a = e.current;
        for (C = a; C !== null; ) {
          i = C;
          var f = i.child;
          if (i.subtreeFlags & 2064 && f !== null) (f.return = i), (C = f);
          else
            e: for (i = a; C !== null; ) {
              if (((s = C), s.flags & 2048))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      pl(9, s);
                  }
                } catch (E) {
                  W(s, s.return, E);
                }
              if (s === i) {
                C = null;
                break e;
              }
              var v = s.sibling;
              if (v !== null) {
                (v.return = s.return), (C = v);
                break e;
              }
              C = s.return;
            }
        }
        if (
          ((M = l), vt(), Ue && typeof Ue.onPostCommitFiberRoot == "function")
        )
          try {
            Ue.onPostCommitFiberRoot(ol, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (R = n), (je.transition = t);
    }
  }
  return !1;
}
function Ks(e, t, n) {
  (t = ln(n, t)),
    (t = Oa(e, t, 1)),
    (e = ut(e, t, 1)),
    (t = ue()),
    e !== null && (Jn(e, 1, t), he(e, t));
}
function W(e, t, n) {
  if (e.tag === 3) Ks(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Ks(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (at === null || !at.has(r)))
        ) {
          (e = ln(n, e)),
            (e = Fa(t, e, 1)),
            (t = ut(t, e, 1)),
            (e = ue()),
            t !== null && (Jn(t, 1, e), he(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Gf(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = ue()),
    (e.pingedLanes |= e.suspendedLanes & n),
    q === e &&
      (te & n) === n &&
      (X === 4 || (X === 3 && (te & 130023424) === te && 500 > K() - Pi)
        ? jt(e, 0)
        : (zi |= n)),
    he(e, t);
}
function rc(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = ur), (ur <<= 1), !(ur & 130023424) && (ur = 4194304))
      : (t = 1));
  var n = ue();
  (e = Ye(e, t)), e !== null && (Jn(e, t, n), he(e, n));
}
function Yf(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), rc(e, n);
}
function Xf(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(y(314));
  }
  r !== null && r.delete(t), rc(e, n);
}
var lc;
lc = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || pe.current) fe = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (fe = !1), Of(e, t, n);
      fe = !!(e.flags & 131072);
    }
  else (fe = !1), U && t.flags & 1048576 && sa(t, Qr, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Lr(e, t), (e = t.pendingProps);
      var l = en(t, ie.current);
      Jt(t, n), (l = Ci(null, t, r, e, l, n));
      var o = Ei();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            me(r) ? ((o = !0), Wr(t)) : (o = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            yi(t),
            (l.updater = dl),
            (t.stateNode = l),
            (l._reactInternals = t),
            Lo(t, r, e, n),
            (t = To(null, t, r, !0, o, n)))
          : ((t.tag = 0), U && o && di(t), se(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Lr(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = Jf(r)),
          (e = Pe(r, e)),
          l)
        ) {
          case 0:
            t = Po(null, t, r, e, n);
            break e;
          case 1:
            t = Os(null, t, r, e, n);
            break e;
          case 11:
            t = Rs(null, t, r, e, n);
            break e;
          case 14:
            t = Ds(null, t, r, Pe(r.type, e), n);
            break e;
        }
        throw Error(y(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Pe(r, l)),
        Po(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Pe(r, l)),
        Os(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((Va(t), e === null)) throw Error(y(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (l = o.element),
          da(e, t),
          Yr(t, r, null, n);
        var i = t.memoizedState;
        if (((r = i.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (l = ln(Error(y(423)), t)), (t = Fs(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = ln(Error(y(424)), t)), (t = Fs(e, t, r, n, l));
            break e;
          } else
            for (
              ve = st(t.stateNode.containerInfo.firstChild),
                ye = t,
                U = !0,
                Ie = null,
                n = ha(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((tn(), r === l)) {
            t = Xe(e, t, n);
            break e;
          }
          se(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        ga(t),
        e === null && jo(t),
        (r = t.type),
        (l = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (i = l.children),
        ko(r, l) ? (i = null) : o !== null && ko(r, o) && (t.flags |= 32),
        Aa(e, t),
        se(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && jo(t), null;
    case 13:
      return Ba(e, t, n);
    case 4:
      return (
        wi(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = nn(t, null, r, n)) : se(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Pe(r, l)),
        Rs(e, t, r, l, n)
      );
    case 7:
      return se(e, t, t.pendingProps, n), t.child;
    case 8:
      return se(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return se(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (o = t.memoizedProps),
          (i = l.value),
          D(Kr, r._currentValue),
          (r._currentValue = i),
          o !== null)
        )
          if (De(o.value, i)) {
            if (o.children === l.children && !pe.current) {
              t = Xe(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var s = o.dependencies;
              if (s !== null) {
                i = o.child;
                for (var u = s.firstContext; u !== null; ) {
                  if (u.context === r) {
                    if (o.tag === 1) {
                      (u = Qe(-1, n & -n)), (u.tag = 2);
                      var c = o.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var g = c.pending;
                        g === null
                          ? (u.next = u)
                          : ((u.next = g.next), (g.next = u)),
                          (c.pending = u);
                      }
                    }
                    (o.lanes |= n),
                      (u = o.alternate),
                      u !== null && (u.lanes |= n),
                      No(o.return, n, t),
                      (s.lanes |= n);
                    break;
                  }
                  u = u.next;
                }
              } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((i = o.return), i === null)) throw Error(y(341));
                (i.lanes |= n),
                  (s = i.alternate),
                  s !== null && (s.lanes |= n),
                  No(i, n, t),
                  (i = o.sibling);
              } else i = o.child;
              if (i !== null) i.return = o;
              else
                for (i = o; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((o = i.sibling), o !== null)) {
                    (o.return = i.return), (i = o);
                    break;
                  }
                  i = i.return;
                }
              o = i;
            }
        se(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        Jt(t, n),
        (l = Ne(l)),
        (r = r(l)),
        (t.flags |= 1),
        se(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = Pe(r, t.pendingProps)),
        (l = Pe(r.type, l)),
        Ds(e, t, r, l, n)
      );
    case 15:
      return $a(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Pe(r, l)),
        Lr(e, t),
        (t.tag = 1),
        me(r) ? ((e = !0), Wr(t)) : (e = !1),
        Jt(t, n),
        pa(t, r, l),
        Lo(t, r, l, n),
        To(null, t, r, !0, e, n)
      );
    case 19:
      return Wa(e, t, n);
    case 22:
      return Ua(e, t, n);
  }
  throw Error(y(156, t.tag));
};
function oc(e, t) {
  return Tu(e, t);
}
function Zf(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Ee(e, t, n, r) {
  return new Zf(e, t, n, r);
}
function Ri(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Jf(e) {
  if (typeof e == "function") return Ri(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === bo)) return 11;
    if (e === ei) return 14;
  }
  return 2;
}
function dt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ee(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Tr(e, t, n, r, l, o) {
  var i = 2;
  if (((r = e), typeof e == "function")) Ri(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case Ot:
        return Nt(n.children, l, o, t);
      case qo:
        (i = 8), (l |= 8);
        break;
      case Jl:
        return (
          (e = Ee(12, n, t, l | 2)), (e.elementType = Jl), (e.lanes = o), e
        );
      case ql:
        return (e = Ee(13, n, t, l)), (e.elementType = ql), (e.lanes = o), e;
      case bl:
        return (e = Ee(19, n, t, l)), (e.elementType = bl), (e.lanes = o), e;
      case mu:
        return hl(n, l, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case fu:
              i = 10;
              break e;
            case pu:
              i = 9;
              break e;
            case bo:
              i = 11;
              break e;
            case ei:
              i = 14;
              break e;
            case qe:
              (i = 16), (r = null);
              break e;
          }
        throw Error(y(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Ee(i, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function Nt(e, t, n, r) {
  return (e = Ee(7, e, r, t)), (e.lanes = n), e;
}
function hl(e, t, n, r) {
  return (
    (e = Ee(22, e, r, t)),
    (e.elementType = mu),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Gl(e, t, n) {
  return (e = Ee(6, e, null, t)), (e.lanes = n), e;
}
function Yl(e, t, n) {
  return (
    (t = Ee(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function qf(e, t, n, r, l) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Ll(0)),
    (this.expirationTimes = Ll(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Ll(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function Di(e, t, n, r, l, o, i, s, u) {
  return (
    (e = new qf(e, t, n, s, u)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = Ee(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    yi(o),
    e
  );
}
function bf(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Dt,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function ic(e) {
  if (!e) return pt;
  e = e._reactInternals;
  e: {
    if (Mt(e) !== e || e.tag !== 1) throw Error(y(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (me(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(y(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (me(n)) return oa(e, n, t);
  }
  return t;
}
function sc(e, t, n, r, l, o, i, s, u) {
  return (
    (e = Di(n, r, !0, e, l, o, i, s, u)),
    (e.context = ic(null)),
    (n = e.current),
    (r = ue()),
    (l = ct(n)),
    (o = Qe(r, l)),
    (o.callback = t ?? null),
    ut(n, o, l),
    (e.current.lanes = l),
    Jn(e, l, r),
    he(e, r),
    e
  );
}
function gl(e, t, n, r) {
  var l = t.current,
    o = ue(),
    i = ct(l);
  return (
    (n = ic(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Qe(o, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = ut(l, t, i)),
    e !== null && (Re(e, l, i, o), jr(e, l, i)),
    i
  );
}
function nl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Gs(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Oi(e, t) {
  Gs(e, t), (e = e.alternate) && Gs(e, t);
}
function ep() {
  return null;
}
var uc =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Fi(e) {
  this._internalRoot = e;
}
vl.prototype.render = Fi.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(y(409));
  gl(e, t, null, null);
};
vl.prototype.unmount = Fi.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Tt(function () {
      gl(null, e, null, null);
    }),
      (t[Ge] = null);
  }
};
function vl(e) {
  this._internalRoot = e;
}
vl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = $u();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < et.length && t !== 0 && t < et[n].priority; n++);
    et.splice(n, 0, e), n === 0 && Au(e);
  }
};
function $i(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function yl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Ys() {}
function tp(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var c = nl(i);
        o.call(c);
      };
    }
    var i = sc(t, r, e, 0, null, !1, !1, "", Ys);
    return (
      (e._reactRootContainer = i),
      (e[Ge] = i.current),
      Vn(e.nodeType === 8 ? e.parentNode : e),
      Tt(),
      i
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var s = r;
    r = function () {
      var c = nl(u);
      s.call(c);
    };
  }
  var u = Di(e, 0, !1, null, null, !1, !1, "", Ys);
  return (
    (e._reactRootContainer = u),
    (e[Ge] = u.current),
    Vn(e.nodeType === 8 ? e.parentNode : e),
    Tt(function () {
      gl(t, u, n, r);
    }),
    u
  );
}
function wl(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var s = l;
      l = function () {
        var u = nl(i);
        s.call(u);
      };
    }
    gl(t, i, e, l);
  } else i = tp(n, t, e, l, r);
  return nl(i);
}
Ou = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = xn(t.pendingLanes);
        n !== 0 &&
          (ri(t, n | 1), he(t, K()), !(M & 6) && ((on = K() + 500), vt()));
      }
      break;
    case 13:
      Tt(function () {
        var r = Ye(e, 1);
        if (r !== null) {
          var l = ue();
          Re(r, e, 1, l);
        }
      }),
        Oi(e, 1);
  }
};
li = function (e) {
  if (e.tag === 13) {
    var t = Ye(e, 134217728);
    if (t !== null) {
      var n = ue();
      Re(t, e, 134217728, n);
    }
    Oi(e, 134217728);
  }
};
Fu = function (e) {
  if (e.tag === 13) {
    var t = ct(e),
      n = Ye(e, t);
    if (n !== null) {
      var r = ue();
      Re(n, e, t, r);
    }
    Oi(e, t);
  }
};
$u = function () {
  return R;
};
Uu = function (e, t) {
  var n = R;
  try {
    return (R = e), t();
  } finally {
    R = n;
  }
};
ao = function (e, t, n) {
  switch (t) {
    case "input":
      if ((no(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = al(r);
            if (!l) throw Error(y(90));
            gu(r), no(r, l);
          }
        }
      }
      break;
    case "textarea":
      yu(e, n);
      break;
    case "select":
      (t = n.value), t != null && Gt(e, !!n.multiple, t, !1);
  }
};
ju = Ti;
Nu = Tt;
var np = { usingClientEntryPoint: !1, Events: [bn, At, al, Cu, Eu, Ti] },
  wn = {
    findFiberByHostInstance: xt,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  rp = {
    bundleType: wn.bundleType,
    version: wn.version,
    rendererPackageName: wn.rendererPackageName,
    rendererConfig: wn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Ze.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = zu(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: wn.findFiberByHostInstance || ep,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var wr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!wr.isDisabled && wr.supportsFiber)
    try {
      (ol = wr.inject(rp)), (Ue = wr);
    } catch {}
}
ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = np;
ke.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!$i(t)) throw Error(y(200));
  return bf(e, t, null, n);
};
ke.createRoot = function (e, t) {
  if (!$i(e)) throw Error(y(299));
  var n = !1,
    r = "",
    l = uc;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = Di(e, 1, !1, null, null, n, !1, r, l)),
    (e[Ge] = t.current),
    Vn(e.nodeType === 8 ? e.parentNode : e),
    new Fi(t)
  );
};
ke.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(y(188))
      : ((e = Object.keys(e).join(",")), Error(y(268, e)));
  return (e = zu(t)), (e = e === null ? null : e.stateNode), e;
};
ke.flushSync = function (e) {
  return Tt(e);
};
ke.hydrate = function (e, t, n) {
  if (!yl(t)) throw Error(y(200));
  return wl(null, e, t, !0, n);
};
ke.hydrateRoot = function (e, t, n) {
  if (!$i(e)) throw Error(y(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    o = "",
    i = uc;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = sc(t, null, e, 1, n ?? null, l, !1, o, i)),
    (e[Ge] = t.current),
    Vn(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new vl(t);
};
ke.render = function (e, t, n) {
  if (!yl(t)) throw Error(y(200));
  return wl(null, e, t, !1, n);
};
ke.unmountComponentAtNode = function (e) {
  if (!yl(e)) throw Error(y(40));
  return e._reactRootContainer
    ? (Tt(function () {
        wl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Ge] = null);
        });
      }),
      !0)
    : !1;
};
ke.unstable_batchedUpdates = Ti;
ke.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!yl(n)) throw Error(y(200));
  if (e == null || e._reactInternals === void 0) throw Error(y(38));
  return wl(e, t, n, !1, r);
};
ke.version = "18.2.0-next-9e3b772b8-20220608";
function ac() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ac);
    } catch (e) {
      console.error(e);
    }
}
ac(), (su.exports = ke);
var lp = su.exports,
  Xs = lp;
(Xl.createRoot = Xs.createRoot), (Xl.hydrateRoot = Xs.hydrateRoot);
const op = "/assets/language-5434bbf8.svg",
  ip = "/assets/sound-on-6bdc6707.svg",
  sp = "/assets/sound-off-861ff8ed.svg",
  up = "/assets/darkmode-fad8f585.svg",
  ap = "/assets/lightmode-b7c817fc.svg",
  cp = "/assets/external-link-6d14b8d8.svg",
  dp = "/assets/star-71e2ed53.svg";
function fp() {
  const e = localStorage.getItem("darkmode")
      ? localStorage.getItem("darkmode") === "true"
      : !0,
    t = localStorage.getItem("sound")
      ? localStorage.getItem("sound") === "true"
      : !0,
    { translations: n, language: r, changeLanguage: l } = mt(),
    [o, i] = ee.useState(e),
    [s, u] = ee.useState(t);
  function c() {
    u(!s), localStorage.setItem("sound", !s);
  }
  return (
    ee.useEffect(() => {
      document.documentElement.classList.toggle("darkmode", o),
        localStorage.setItem("darkmode", o);
    }, [o]),
    p.jsx("nav", {
      className: "section settings",
      children: p.jsxs("ul", {
        children: [
          p.jsx("li", {
            style: { "--animation-delay": "0.1s" },
            children: p.jsxs("button", {
              className: "sound-btn",
              onClick: () => i(!o),
              title: `${n.settings[o ? "lightmode" : "darkmode"]}`,
              children: [
                p.jsx("img", {
                  src: up,
                  alt: "Dark Mode",
                  className: `${o ? "" : "img-hidden"}`,
                  "data-sound": "switch-on.mp3",
                }),
                p.jsx("img", {
                  src: ap,
                  alt: "Light Mode",
                  className: `${o ? "img-hidden" : ""}`,
                  "data-sound": "switch-off.mp3",
                }),
              ],
            }),
          }),
          p.jsx("li", {
            style: { "--animation-delay": "0.2s" },
            children: p.jsxs("button", {
              onClick: () => l(r === "ru" ? "en" : "ru"),
              title: `${n.settings[r === "ru" ? "english" : "Russian"]}`,
              className: "language-btn",
              children: [
                p.jsx("img", {
                  src: op,
                  alt: `${r === "ru" ? "English" : "Russian"}`,
                }),
                p.jsx("span", {
                  className: `${r === "ru" ? "hidden" : ""}`,
                  "data-sound": "switch-on.mp3",
                  children: "RU",
                }),
                p.jsx("span", {
                  className: `${r === "ru" ? "" : "hidden"}`,
                  "data-sound": "switch-off.mp3",
                  children: "EN",
                }),
              ],
            }),
          }),
          p.jsx("li", {
            style: { "--animation-delay": "0.3s" },
            children: p.jsxs("button", {
              onClick: c,
              className: "sound-btn",
              title: `${n.settings[s ? "mute" : "sound"]}`,
              children: [
                p.jsx("img", {
                  src: ip,
                  alt: "Sound on",
                  className: `${s ? "" : "img-hidden"}`,
                  "data-sound": "switch-on.mp3",
                }),
                p.jsx("img", {
                  src: sp,
                  alt: "Sound off",
                  className: `${s ? "img-hidden" : ""}`,
                  "data-sound": "switch-off.mp3",
                }),
              ],
            }),
          }),
          p.jsx("li", {
            style: { "--animation-delay": "0.4s" },
            children: p.jsxs("a", {
              href: "https://github.com/buzurgmexrubon",
              className: "code-btn",
              target: "_blank",
              rel: "noopener noreferrer",
              title: `${n.settings.code}`,
              children: [
                p.jsx("img", {
                  src: dp,
                  alt: "Code",
                  "data-sound": "switch-on.mp3",
                }),
                p.jsx("img", {
                  src: cp,
                  alt: "",
                  "data-sound": "switch-off.mp3",
                }),
              ],
            }),
          }),
        ],
      }),
    })
  );
}
const pp = { name: "HTML", color: "#E34F26", skills: !0 },
  mp = { name: "CSS", color: "#1572B6", skills: !0 },
  hp = { name: "JavaScript", color: "#F7DF1E", contrast: !0, skills: !0 },
  xp = { name: "Bootstrap", color: "#7952B3", skills: !0 },
  gp = { name: "Dotnet", color: "#512bd4", skills: !0 },
  vp = { name: "Python", color: "#61DBFB", contrast: !0, skills: !0 },
  yp = { name: "Swift", color: "#f05137", skills: !0 },
  wp = { name: "Rust", color: "#000000", skills: !0 },
  Sp = { name: "SQL", color: "#ffffff", skills: !0 },
  Cp = { name: "Vim", color: "#339933", skills: !0 },
  kp = { name: "Git", color: "#F05032", skills: !0 },
  Ep = { name: "Github", color: "#000000", skills: !0 },
//   jp = { name: "LeafletJS", color: "#199900", image: !1 },
//   Np = { name: "Axios", color: "#5F9EA0", image: !1 },
//   _p = { name: "Styled Components", color: "#DB7093", image: !1 },
//   Lp = { name: "Web3", color: "#FF0000", image: !1 },
//   zp = { name: "Ethers", color: "#AF1CF0", image: !1 },
//   Pp = { name: "Solidity", color: "#4CCBD1", image: !1 },
  x = {
    html: pp,
    css: mp,
    javascript: hp,
    bootstrap: xp,
    dotnet: gp,
    python: vp,
    swift: yp,
    rust: wp,
    sql: Sp,
    vim: Cp,
    git: kp,
    github: Ep,
    // leaflet: jp,
    // axios: Np,
    // styledComponents: _p,
    // web3: Lp,
    // ethers: zp,
    // solidity: Pp,
  },
  Ir = [
    {
      name: "Buzruk.GenericRepository",
      repo: "https://github.com/buzurgmexrubon/Buzruk.GenericRepository",
      // if project is repo use repo:
      // if project is on the web use live:
      // live: "https://github.com/buzurgmexrubon/Buzruk.GenericRepository",
      description: {
        short: {
          en: "Simplify data access across your application with a robust generic repository pattern.",
          ru: "Упростите доступ к данным в вашем приложении с помощью надежного универсального шаблона репозитория.",
        },
        long: {
          en: "Say goodbye to repetitive CRUD boilerplate and hello to a streamlined, asynchronous-first approach to data access in your .NET applications! Buzruk.GenericRepository is your supercharged generic repository, offering a unified interface to work with various entities. Focus on building amazing features while this package handles the data interaction heavy lifting.",
          ru: "Попрощайтесь с повторяющимся шаблоном CRUD и приветствуйте оптимизированный асинхронный подход к доступу к данным в ваших .NET-приложениях! Buzruk.GenericRepository — это расширенный универсальный репозиторий, предлагающий унифицированный интерфейс для работы с различными объектами. Сосредоточьтесь на создании удивительных функций, в то время как этот пакет берет на себя тяжелую работу по взаимодействию данных.",
        },
      },
      techs: [
        x.dotnet
      ],
      poster: "/projects-images/Buzruk.GenericRepository/poster.webp",
      images: [
        "/projects-images/Buzruk.GenericRepository/1.webp",
        "/projects-images/Buzruk.GenericRepository/2.webp",
        "/projects-images/Buzruk.GenericRepository/3.webp",
      ],
    }
  ];
function cc(e) {
  return e
    .sort((t, n) => t - n)
    .reduce((t, n, r) => (r % 2 === 0 ? t.unshift(n) : t.push(n), t), []);
}
function Wo(e, t = 0.25) {
  if (localStorage.getItem("sound") === "false") return;
  const n = new Audio(`/sounds/${e}`);
  (n.volume = t), n.play();
}
const dc = "/assets/repo-570058e0.svg",
  Ho = "/assets/live-568cd55b.svg",
  Tp = "/assets/close-8b62d009.svg";
const rl = "/assets/arrow-d09e5562.svg";
function Ip({ currentProject: e, orderProjects: t }) {
  const [n, r] = ee.useState(0);
  ee.useEffect(() => l(0), [e]),
    ee.useEffect(() => {
      const o = (i) => l(n + (i.deltaY > 0 ? 1 : -1));
      return (
        document
          .querySelector(".project-imgs-container")
          .addEventListener("wheel", o, { passive: !1 }),
        () => document.querySelector(".images-slider")
      );
    }, [n]);
  function l(o) {
    o > t[e].images.length - 1 ||
      o < 0 ||
      (document.querySelectorAll(".project-image").forEach((i) => {
        i.classList.remove("slide-left", "slide-right"),
          i.id !== `project-image-${o}` &&
            i.classList.add(
              Number(i.id.replace("project-image-", "")) < o
                ? "slide-left"
                : "slide-right"
            );
      }),
      r(o));
  }
  return p.jsxs("section", {
    children: [
      p.jsxs("div", {
        className: "project-imgs-container",
        children: [
          t[e].images &&
            t[e].images.map((o, i) =>
              p.jsx(
                "img",
                {
                  src: o,
                  alt: `Project ${t[e].name} preview #${i + 1}`,
                  className: "project-image",
                  loading: "lazy",
                  id: `project-image-${i}`,
                },
                i
              )
            ),
          p.jsx("button", {
            onClick: () => l(n - 1),
            disabled: n < 1,
            className: "prev-img",
            children: p.jsx("img", {
              src: rl,
              alt: "arrow",
              className: "arrow-left",
            }),
          }),
          p.jsx("button", {
            className: "next-img",
            onClick: () => l(n + 1),
            disabled: n === t[e].images.length - 1,
            children: p.jsx("img", { src: rl, alt: "arrow" }),
          }),
        ],
      }),
      p.jsx("ul", {
        className: "images-slider",
        children:
          t[e].images &&
          t[e].images.map((o, i) =>
            p.jsx(
              "li",
              { className: n === i ? "selected-p" : "", onClick: () => l(i) },
              i
            )
          ),
      }),
    ],
  });
}
function Mp({ orderProjects: e, currentProject: t }) {
  var l, o;
  const { translations: n, language: r } = mt();
  return p.jsxs("section", {
    children: [
      p.jsx("h3", {
        className: "project-title",
        children: p.jsx("a", {
          href: e[t].live,
          target: "_blank",
          rel: "noopener noreferrer",
          children: e[t].name,
        }),
      }),
      p.jsx("p", {
        className: "project-description",
        children: e[t].description.long[r],
      }),
      p.jsx("ul", {
        className: "project-technologies",
        children: e[t].techs.map((i, s) =>
          p.jsxs(
            "li",
            {
            // TODO: Fix it
            //   className: `project-skill ${i.contrast ? "skill-contrast" : ""}`,
              className: `project-skill ${""}`,
            //  style: { backgroundColor: "var(--primary-color)" },
              style: { backgroundColor: i.color ?? "var(--primary-color)" },
              children: [
                i.image !== !1 &&
                  p.jsx("img", {
                    src: `/skills/${i.name.toLowerCase()}.svg`,
                    alt: i,
                  }),
                i.name,
              ],
            },
            s
          )
        ),
      }),
      p.jsxs("p", {
        className: "project-links",
        children: [
          ((l = e[t]) == null ? void 0 : l.repo) &&
            p.jsxs("a", {
              href: e[t].repo,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "repo-link",
              children: [p.jsx("img", { src: dc, alt: "" }), n.projects.code],
            }),
          ((o = e[t]) == null ? void 0 : o.live) &&
            p.jsxs("a", {
              href: e[t].live,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "live-link",
              children: [p.jsx("img", { src: Ho, alt: "" }), n.projects.live],
            }),
        ],
      }),
    ],
  });
}
function Rp({ setCurrentProject: e, currentProject: t, orderProjects: n }) {
  const r = (l) => {
    (l.deltaY < 0 && t === 0) ||
      (l.deltaY > 0 && t === n.length - 1) ||
      e(t + (l.deltaY > 0 ? 1 : -1));
  };
  return p.jsxs("div", {
    className: "projects-slider",
    children: [
      p.jsxs("div", {
        className: "project-buttons",
        children: [
          p.jsx("button", {
            onClick: () => e(t - 1),
            disabled: t === 0,
            children: p.jsx("img", {
              src: rl,
              alt: "arrow",
              className: "arrow-left",
            }),
          }),
          p.jsx("button", {
            onClick: () => e(t + 1),
            disabled: t === n.length - 1,
            children: p.jsx("img", { src: rl, alt: "arrow" }),
          }),
        ],
      }),
      p.jsx("div", {
        className: "slider",
        onWheel: r,
        children: n.map((l, o) =>
          p.jsx(
            "article",
            {
              className: `project ${t === o ? "project-selected" : ""}`,
              onClick: () => e(o),
              children: p.jsx("img", { src: l.poster, alt: l.name }),
            },
            o
          )
        ),
      }),
    ],
  });
}
function Dp({ currentProject: e, setCurrentProject: t }) {
  const n = cc(Ir),
    { translations: r } = mt(),
    l = ee.useRef(null),
    o = () => {
      l.current.classList.add("hide"),
        setTimeout(() => {
          l.current.close(), l.current.classList.remove("hide");
        }, 200);
    },
    i = (s) => {
      s.target.classList.contains("projects-dialog") && o();
    };
  return window.innerWidth < 1050
    ? null
    : p.jsxs("dialog", {
        className: "projects-dialog",
        onClick: i,
        ref: l,
        children: [
          p.jsxs("div", {
            className: "current-project",
            children: [
              p.jsx("button", {
                className: "close",
                onClick: () => o(),
                title: r.close,
                "data-sound": "switch-off.mp3",
                children: p.jsx("img", {
                  src: Tp,
                  alt: r.close,
                  "aria-label": r.close,
                  "data-sound": "switch-off.mp3",
                }),
              }),
              p.jsx(Ip, { currentProject: e, orderProjects: n }),
              p.jsx(Mp, { orderProjects: n, currentProject: e }),
            ],
          }),
          p.jsx(Rp, {
            setCurrentProject: t,
            currentProject: e,
            orderProjects: n,
          }),
        ],
      });
}
function Op() {
  const [e, t] = ee.useState(Math.floor(Ir.length / 2)),
    { translations: n, language: r } = mt(),
    l = cc(Ir);
  ee.useEffect(() => {
    const i = (s) => {
      window.innerWidth < 1050 ||
        (s.preventDefault(),
        (document.querySelector(".projects-container").scrollLeft +=
          s.deltaY * 2));
    };
    return (
      document
        .querySelector(".projects-container")
        .addEventListener("wheel", i, { passive: !1 }),
      () => document.querySelector(".projects-container")
    );
  }, []);
  function o(i) {
    window.innerWidth < 1050 ||
      (t(l.findIndex((s) => s.name === i)),
      document.querySelector(".projects-dialog").showModal());
  }
  return p.jsxs("section", {
    className: "section projects",
    children: [
      p.jsx("div", { className: "wave" }),
      p.jsxs("div", {
        className: "projects-title",
        children: [
          p.jsx("h2", { children: n.projects.title }),
          p.jsxs("a", {
            className: "see-more",
            href: "https://github.com/buzurgmexrubon?tab=repositories",
            target: "_blank",
            rel: "noopener noreferrer",
            children: [
              p.jsx("span", { children: n.projects.more }),
              p.jsx("img", { src: Ho, alt: "" }),
            ],
          }),
        ],
      }),
      p.jsx("div", {
        className: "projects-container",
        children: Ir.map((i, s) =>
          p.jsxs(
            "article",
            {
              className: "project",
              onClick: () => o(i.name),
              onMouseEnter: () => Wo("hover.ogg", 0.02),
              tabIndex: "0",
              style: { "--animation-delay": `${s * 0.1}s` },
              children: [
                p.jsxs("div", {
                  className: "image-container",
                  children: [
                    p.jsx("img", { src: i.poster, alt: i.name }),
                    p.jsx("div", {
                      className: "project-viewmore",
                      children: n.projects.more,
                    }),
                  ],
                }),
                p.jsxs("div", {
                  className: "project-info",
                  children: [
                    p.jsx("h3", {
                      className: "project-title",
                      children: i.name,
                    }),
                    p.jsx("p", {
                      className: "project-description",
                      children: i.description.short[r],
                    }),
                    p.jsxs("p", {
                      className: "project-links",
                      children: [
                        i.repo &&
                          p.jsxs("a", {
                            href: i.repo,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: [
                              p.jsx("img", { src: dc, alt: "Repository" }),
                              n.projects.code,
                            ],
                          }),
                        i.live &&
                          p.jsxs("a", {
                            href: i.live,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: [
                              p.jsx("img", { src: Ho, alt: "Go to project" }),
                              n.projects.live,
                            ],
                          }),
                      ],
                    }),
                  ],
                }),
              ],
            },
            s
          )
        ),
      }),
      p.jsx(Dp, { currentProject: e, setCurrentProject: t }),
    ],
  });
}
const fc = [];
for (const e in x) x[e].skills && fc.push(x[e]);
function Fp({ children: e, dir: t = "top", ariaHidden: n = "true" }) {
  const r = ["top", "right", "bottom", "left"].includes(t) ? t : "top";
  return p.jsx("div", {
    className: "tooltip",
    "data-dir": r,
    "aria-hidden": n,
    children: e,
  });
}
function $p() {
  const { translations: e } = mt();
  return p.jsxs("section", {
    className: "section skills",
    children: [
      p.jsx("h2", { children: e.skills.title }),
      p.jsx("ul", {
        className: "skills-container",
        children: fc.map((t, n) =>
          p.jsxs(
            "li",
            {
              style: {
                "--skill-color": t.color,
                "--animation-delay": `${n * 0.05}s`,
              },
              className: "skill tooltip-container",
              children: [
                p.jsx("img", {
                  src: `/skills/${t.name.toLowerCase()}.svg`,
                  className: "invert skills_skill",
                  alt: "",
                }),
                p.jsx(Fp, {
                  class: "skill",
                  ariaHidden: "true",
                  children: t.name,
                }),
              ],
            },
            n
          )
        ),
      }),
    ],
  });
}
function Up() {
  return p.jsxs("svg", {
    role: "img",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    //fill:"none",
    //stroke:"#ffffff",
    strokeWidth:"2",
    strokeLinecap:"round",
    strokeLinejoin:"round",
    class:"feather feather-instagram",
    children: [
    p.jsx("path", {
        fillRule:"evenodd",
        clipRule:"evenodd",
        d:"M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z",
        fill:"#0F0F0F"
    }),
    p.jsx("path", {
        d:"M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z",
        fill:"#0F0F0F"
    }),
    p.jsx("path", {
        fillRule:"evenodd",
        clipRule:"evenodd",
        d:"M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z",
        fill:"#0F0F0F"
    })
    ],
  });
}
function Ap() {
  return p.jsxs("svg", {
    role: "img",
    className: "github-icon",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      p.jsx("title", { children: "GitHub" }),
      p.jsx("path", {
        d: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",
      }),
    ],
  });
}
function Vp() {
  return p.jsxs("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "40",
    height: "40",
    style: { height: "auto" },
    viewBox: "0 0 24 24",
    strokeWidth: "1.25",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      p.jsx("path", {
        d: "M0 0h24v24H0z",
        stroke: "none",
        style: { fill: "none" },
      }),
      p.jsx("path", {
        d: "M22 7.535V17a3 3 0 0 1-2.824 2.995L19 20H5a3 3 0 0 1-2.995-2.824L2 17V7.535l9.445 6.297.116.066a1 1 0 0 0 .878 0l.116-.066L22 7.535z",
        fill: "currentColor",
        stroke: "none",
      }),
      p.jsx("path", {
        d: "M19 4c1.08 0 2.027.57 2.555 1.427L12 11.797l-9.555-6.37a2.999 2.999 0 0 1 2.354-1.42L5 4h14z",
        fill: "currentColor",
        stroke: "none",
      }),
    ],
  });
}
function Bp() {
  return p.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 50 50",
    fill: "#FFFFFF",
    children: p.jsx("path", {
      d: "M 8 3.0097656 C 4.53 3.0097656 2.0097656 5.0892187 2.0097656 7.9492188 C 2.0097656 10.819219 4.59 12.990234 8 12.990234 C 11.47 12.990234 13.990234 10.870625 13.990234 7.890625 C 13.830234 5.020625 11.36 3.0097656 8 3.0097656 z M 3 15 C 2.45 15 2 15.45 2 16 L 2 45 C 2 45.55 2.45 46 3 46 L 13 46 C 13.55 46 14 45.55 14 45 L 14 16 C 14 15.45 13.55 15 13 15 L 3 15 z M 18 15 C 17.45 15 17 15.45 17 16 L 17 45 C 17 45.55 17.45 46 18 46 L 27 46 C 27.552 46 28 45.552 28 45 L 28 30 L 28 29.75 L 28 29.5 C 28 27.13 29.820625 25.199531 32.140625 25.019531 C 32.260625 24.999531 32.38 25 32.5 25 C 32.62 25 32.739375 24.999531 32.859375 25.019531 C 35.179375 25.199531 37 27.13 37 29.5 L 37 45 C 37 45.552 37.448 46 38 46 L 47 46 C 47.55 46 48 45.55 48 45 L 48 28 C 48 21.53 44.529063 15 36.789062 15 C 33.269062 15 30.61 16.360234 29 17.490234 L 29 16 C 29 15.45 28.55 15 28 15 L 18 15 z",
    }),
  });
}
function Wp() {
  return p.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    children: p.jsx("path", {
      d: "M21.384,17.752a2.108,2.108,0,0,1-.522,3.359,7.543,7.543,0,0,1-5.476.642C10.5,20.523,3.477,13.5,2.247,8.614a7.543,7.543,0,0,1,.642-5.476,2.108,2.108,0,0,1,3.359-.522L8.333,4.7a2.094,2.094,0,0,1,.445,2.328A3.877,3.877,0,0,1,8,8.2c-2.384,2.384,5.417,10.185,7.8,7.8a3.877,3.877,0,0,1,1.173-.781,2.092,2.092,0,0,1,2.328.445Z",
    }),
  });
}
function Hp() {
  return p.jsxs("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      p.jsx("g", {
        clipPath: "url(#clip0_1139_6)",
        children: p.jsx("path", {
          d: "M12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0ZM17.3298 7.2C16.8727 7.20811 16.1713 7.44889 12.7958 8.835C11.6136 9.32046 9.25077 10.3253 5.70743 11.8494C5.13205 12.0753 4.83064 12.2963 4.8032 12.5124C4.75052 12.9272 5.3555 13.0564 6.11668 13.3007C6.73728 13.4998 7.5721 13.7328 8.00608 13.7421C8.39975 13.7505 8.83912 13.5902 9.32421 13.2614C12.6349 11.0551 14.3438 9.93987 14.4511 9.91583C14.5268 9.89887 14.6317 9.87754 14.7028 9.93991C14.7739 10.0023 14.7669 10.1204 14.7593 10.1521C14.6992 10.4054 11.5892 13.1981 11.4102 13.3817L11.3244 13.468C10.6649 14.1193 9.99835 14.5446 11.1484 15.2928C12.1868 15.9684 12.7912 16.3994 13.8609 17.0917C14.5446 17.5341 15.0806 18.0588 15.7864 17.9946C16.1112 17.9651 16.4467 17.6636 16.6171 16.7644C17.0197 14.6392 17.8112 10.0345 17.9941 8.13705C18.0102 7.9708 17.99 7.75805 17.9738 7.66465C17.9576 7.57125 17.9238 7.43818 17.8008 7.33968C17.6552 7.22301 17.4304 7.19841 17.3298 7.2Z",
          fill: "black",
        }),
      }),
      p.jsx("defs", {
        children: p.jsx("clipPath", {
          id: "clip0_1139_6",
          children: p.jsx("rect", { width: "24", height: "24", fill: "white" }),
        }),
      }),
    ],
  });
}
function Qp() {
  const { translations: e } = mt(),
    t = [
      {
        name: "Gmail",
        link: "mailto:buzurgmexrubon@gmail.com",
        user: "buzurgmexrubon@gmail.com",
        color: "#AAAAAA",
        icon: p.jsx(Vp, {}),
      },
      {
        name: "Phone",
        link: "tel:+998777774367",
        user: "998777774367",
        color: "#EA4335",
        icon: p.jsx(Wp, {}),
      },
      {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/buzurgmexr-sultonaliyev-98240a28b/",
        user: "buzurgmexr-sultonaliyev-98240a28b",
        color: "#3183ff",
        icon: p.jsx(Bp, {}),
      },
      {
        name: "Github",
        link: "https://github.com/buzurgmexrubon",
        user: "buzurgmexrubon",
        color: "#444444",
        icon: p.jsx(Ap, {}),
      },
      {
        name: "Instagram",
        link: "https://www.instagram.com/buzurgmexrubon/",
        user: "buzurgmexrubon",
        color: "#fe7f00",
        icon: p.jsx(Up, {}),
      },
      {
        name: "Telegram",
        link: "https://t.me/buzurgmexr",
        user: "buzurgmexr",
        color: "#1DA1F2",
        icon: p.jsx(Hp, {}),
      },
    ];
  return p.jsxs("section", {
    className: "section social",
    children: [
      p.jsx("h2", { className: "hidden", children: e.social.title }),
      p.jsx("nav", {
        children: p.jsx("ul", {
          className: "social-container",
          children: t.map((r, l) =>
            p.jsx(
              "li",
              {
                className: "social-link",
                style: {
                  "--bg-color": r.color,
                  "--animation-delay": `${l * 0.1}s`,
                },
                title: r.name,
                children:
                  p.jsx("a", {
                        href: r.link,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        "aria-label": r.name,
                        children: r.icon,
                      }),
              },
              l
            )
          ),
        }),
      }),
    ],
  });
}
function Kp() {
  const { translations: e } = mt();
  return p.jsx("section", {
    className: "section title",
    children: p.jsxs("h1", {
      children: [
        p.jsx("span", { className: "title-hello", children: e.title.hello }),
        p.jsx("span", { className: "title-name", children: e.title.name }),
        p.jsx("span", {
          className: "title-subtitle",
          children: e.title.webdeveloper,
        }),
      ],
    }),
  });
}
function Gp() {
  const { translations: e } = mt();
  return p.jsxs("section", {
    className: "section about",
    children: [
      p.jsx("h2", { children: e.about.title }),
      p.jsx("p", { dangerouslySetInnerHTML: { __html: e.about.description } }),
    ],
  });
}
function Yp() {
  function e(t) {
    document.documentElement.style.setProperty(
      "--primary-color",
      t.target.value
    );
  }
  return p.jsxs("div", {
    className: "section logo",
    children: [
      p.jsx("input", {
        type: "color",
        "aria-label": "Main color",
        className: "color-picker",
        defaultValue: "#713dff",
        onChange: e,
        "data-sound": "bite.mp3",
      }),
      p.jsx("div", { className: "logo-border" }),
      p.jsx("img", {
        src: "./favicon.svg",
        alt: "",
        className: "logo-image",
        "data-sound": "bite.mp3",
      }),
    ],
  });
}
function Xp() {
  return p.jsx("div", {
    className: "loading-page",
    children: p.jsxs("div", {
      className: "container",
      children: [
        p.jsx("div", { className: "title", style: { height: "113px" } }),
        p.jsx("div", { className: "about", children: "	" }),
        p.jsx("div", {
          className: "settings",
          children: p.jsx("div", { style: { width: "23px" } }),
        }),
        p.jsx("div", {
          className: "social",
          children: p.jsx("div", { style: { height: "24px" } }),
        }),
        p.jsx("div", { className: "skills" }),
        p.jsx("div", { className: "projects" }),
        p.jsx("div", {
          className: "logo",
          children: p.jsx("div", { style: { height: "116px" } }),
        }),
      ],
    }),
  });
}
function Zp() {
  return (
    ee.useEffect(() => {
      function e(t) {
        if (t.target.dataset.sound) return Wo(t.target.dataset.sound);
        Wo("click.wav");
      }
      if (typeof window !== void 0) {
        document
          .querySelectorAll(".loading-page .container > div")
          .forEach((n) => {
            n.style.animation = "none";
          });
        const t = document.querySelector(".loading-page");
        t &&
          (t.style.animation =
            "loading-pag 1s cubic-bezier(0.53, 0.55, 0.23, 1.07) forwards");
      }
      return (
        document.addEventListener("click", e),
        () => {
          document.removeEventListener("click", e);
        }
      );
    }, []),
    p.jsxs(p.Fragment, {
      children: [
        p.jsx(Xp, {}),
        p.jsxs("main", {
          children: [
            p.jsx(Kp, {}),
            p.jsx(Gp, {}),
            p.jsx($p, {}),
            p.jsx(Qp, {}),
            p.jsx(Yp, {}),
            p.jsx(Op, {}),
            p.jsx(fp, {}),
          ],
        }),
      ],
    })
  );
}
Xl.createRoot(document.getElementById("root")).render(
  p.jsx(Pc.StrictMode, { children: p.jsx(bc, { children: p.jsx(Zp, {}) }) })
);
