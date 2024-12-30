import { a as Xo } from "./algoliasearch-lite.umd.C4sqiZvl.js";
import {
  E as Zo,
  F as ei,
  u as ti,
  z as ri,
  G as q,
  q as xt,
  x as Tt,
  y as Dt,
  t as Lt,
  l as xr,
  v as ni,
  n as oi,
  w as ii,
  b as ai,
  c as si,
  A as li,
  h as ci,
  D as ui,
  C as fi,
  B as pi
} from "./index.CR9bdwFp.js";
import { s as di } from "./index.BluUgJpu.js";
import { g as mi } from "./_commonjsHelpers.BosuxZz1.js";
function gi(e) {
  return e instanceof HTMLElement || (!!e && e.nodeType > 0);
}
function hi(e) {
  var t = typeof e == "string",
    r = t ? document.querySelector(e) : e;
  if (!gi(r)) {
    var n = "Container must be `string` or `HTMLElement`.";
    throw (t && (n += " Unable to find ".concat(e)), new Error(n));
  }
  return r;
}
function vi(e, t) {
  return e == null
    ? e
    : Object.keys(e).reduce(function (r, n) {
        if (t.indexOf(n) >= 0) return r;
        var o = n;
        return (r[o] = e[o]), r;
      }, {});
}
var Nt,
  D,
  Qn,
  ce,
  Tr,
  Yn,
  Ft,
  wr,
  Ht,
  Wt,
  Te = {},
  Jn = [],
  yi = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
  Pr = Array.isArray;
function re(e, t) {
  for (var r in t) e[r] = t[r];
  return e;
}
function Xn(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function L(e, t, r) {
  var n,
    o,
    i,
    a = {};
  for (i in t) i == "key" ? (n = t[i]) : i == "ref" ? (o = t[i]) : (a[i] = t[i]);
  if (
    (arguments.length > 2 && (a.children = arguments.length > 3 ? Nt.call(arguments, 2) : r),
    typeof e == "function" && e.defaultProps != null)
  )
    for (i in e.defaultProps) a[i] === void 0 && (a[i] = e.defaultProps[i]);
  return bt(e, a, n, o, null);
}
function bt(e, t, r, n, o) {
  var i = {
    type: e,
    props: t,
    key: r,
    ref: n,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __d: void 0,
    __c: null,
    constructor: void 0,
    __v: o ?? ++Qn,
    __i: -1,
    __u: 0
  };
  return o == null && D.vnode != null && D.vnode(i), i;
}
function bi() {
  return { current: null };
}
function J(e) {
  return e.children;
}
function we(e, t) {
  (this.props = e), (this.context = t);
}
function de(e, t) {
  if (t == null) return e.__ ? de(e.__, e.__i + 1) : null;
  for (var r; t < e.__k.length; t++) if ((r = e.__k[t]) != null && r.__e != null) return r.__e;
  return typeof e.type == "function" ? de(e) : null;
}
function Zn(e) {
  var t, r;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((r = e.__k[t]) != null && r.__e != null) {
        e.__e = e.__c.base = r.__e;
        break;
      }
    return Zn(e);
  }
}
function Dr(e) {
  ((!e.__d && (e.__d = !0) && ce.push(e) && !St.__r++) || Tr !== D.debounceRendering) &&
    ((Tr = D.debounceRendering) || Yn)(St);
}
function St() {
  var e, t, r, n, o, i, a, s;
  for (ce.sort(Ft); (e = ce.shift()); )
    e.__d &&
      ((t = ce.length),
      (n = void 0),
      (i = (o = (r = e).__v).__e),
      (a = []),
      (s = []),
      r.__P &&
        (((n = re({}, o)).__v = o.__v + 1),
        D.vnode && D.vnode(n),
        Ir(r.__P, n, o, r.__n, r.__P.namespaceURI, 32 & o.__u ? [i] : null, a, i ?? de(o), !!(32 & o.__u), s),
        (n.__v = o.__v),
        (n.__.__k[n.__i] = n),
        ro(a, n, s),
        n.__e != i && Zn(n)),
      ce.length > t && ce.sort(Ft));
  St.__r = 0;
}
function eo(e, t, r, n, o, i, a, s, u, c, f) {
  var l,
    d,
    p,
    m,
    g,
    y = (n && n.__k) || Jn,
    v = t.length;
  for (r.__d = u, Oi(r, t, y), u = r.__d, l = 0; l < v; l++)
    (p = r.__k[l]) != null &&
      typeof p != "boolean" &&
      typeof p != "function" &&
      ((d = p.__i === -1 ? Te : y[p.__i] || Te),
      (p.__i = l),
      Ir(e, p, d, o, i, a, s, u, c, f),
      (m = p.__e),
      p.ref && d.ref != p.ref && (d.ref && Er(d.ref, null, p), f.push(p.ref, p.__c || m, p)),
      g == null && m != null && (g = m),
      65536 & p.__u || d.__k === p.__k
        ? (u && typeof p.type == "string" && !e.contains(u) && (u = de(d)), (u = to(p, u, e)))
        : typeof p.type == "function" && p.__d !== void 0
          ? (u = p.__d)
          : m && (u = m.nextSibling),
      (p.__d = void 0),
      (p.__u &= -196609));
  (r.__d = u), (r.__e = g);
}
function Oi(e, t, r) {
  var n,
    o,
    i,
    a,
    s,
    u = t.length,
    c = r.length,
    f = c,
    l = 0;
  for (e.__k = [], n = 0; n < u; n++)
    (a = n + l),
      (o = e.__k[n] =
        (o = t[n]) == null || typeof o == "boolean" || typeof o == "function"
          ? null
          : typeof o == "string" || typeof o == "number" || typeof o == "bigint" || o.constructor == String
            ? bt(null, o, null, null, null)
            : Pr(o)
              ? bt(J, { children: o }, null, null, null)
              : o.constructor === void 0 && o.__b > 0
                ? bt(o.type, o.props, o.key, o.ref ? o.ref : null, o.__v)
                : o) != null
        ? ((o.__ = e),
          (o.__b = e.__b + 1),
          (s = _i(o, r, a, f)),
          (o.__i = s),
          (i = null),
          s !== -1 && (f--, (i = r[s]) && (i.__u |= 131072)),
          i == null || i.__v === null
            ? (s == -1 && l--, typeof o.type != "function" && (o.__u |= 65536))
            : s !== a &&
              (s == a - 1 ? (l = s - a) : s == a + 1 ? l++ : s > a ? (f > u - a ? (l += s - a) : l--) : s < a && l++,
              s !== n + l && (o.__u |= 65536)))
        : (i = r[a]) &&
          i.key == null &&
          i.__e &&
          !(131072 & i.__u) &&
          (i.__e == e.__d && (e.__d = de(i)), Kt(i, i, !1), (r[a] = null), f--);
  if (f)
    for (n = 0; n < c; n++) (i = r[n]) != null && !(131072 & i.__u) && (i.__e == e.__d && (e.__d = de(i)), Kt(i, i));
}
function to(e, t, r) {
  var n, o;
  if (typeof e.type == "function") {
    for (n = e.__k, o = 0; n && o < n.length; o++) n[o] && ((n[o].__ = e), (t = to(n[o], t, r)));
    return t;
  }
  e.__e != t && (r.insertBefore(e.__e, t || null), (t = e.__e));
  do t = t && t.nextSibling;
  while (t != null && t.nodeType === 8);
  return t;
}
function _i(e, t, r, n) {
  var o = e.key,
    i = e.type,
    a = r - 1,
    s = r + 1,
    u = t[r];
  if (u === null || (u && o == u.key && i === u.type && !(131072 & u.__u))) return r;
  if (n > (u != null && !(131072 & u.__u) ? 1 : 0))
    for (; a >= 0 || s < t.length; ) {
      if (a >= 0) {
        if ((u = t[a]) && !(131072 & u.__u) && o == u.key && i === u.type) return a;
        a--;
      }
      if (s < t.length) {
        if ((u = t[s]) && !(131072 & u.__u) && o == u.key && i === u.type) return s;
        s++;
      }
    }
  return -1;
}
function Lr(e, t, r) {
  t[0] === "-"
    ? e.setProperty(t, r ?? "")
    : (e[t] = r == null ? "" : typeof r != "number" || yi.test(t) ? r : r + "px");
}
function ut(e, t, r, n, o) {
  var i;
  e: if (t === "style")
    if (typeof r == "string") e.style.cssText = r;
    else {
      if ((typeof n == "string" && (e.style.cssText = n = ""), n)) for (t in n) (r && t in r) || Lr(e.style, t, "");
      if (r) for (t in r) (n && r[t] === n[t]) || Lr(e.style, t, r[t]);
    }
  else if (t[0] === "o" && t[1] === "n")
    (i = t !== (t = t.replace(/(PointerCapture)$|Capture$/i, "$1"))),
      (t = t.toLowerCase() in e || t === "onFocusOut" || t === "onFocusIn" ? t.toLowerCase().slice(2) : t.slice(2)),
      e.l || (e.l = {}),
      (e.l[t + i] = r),
      r
        ? n
          ? (r.u = n.u)
          : ((r.u = wr), e.addEventListener(t, i ? Wt : Ht, i))
        : e.removeEventListener(t, i ? Wt : Ht, i);
  else {
    if (o == "http://www.w3.org/2000/svg") t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (
      t != "width" &&
      t != "height" &&
      t != "href" &&
      t != "list" &&
      t != "form" &&
      t != "tabIndex" &&
      t != "download" &&
      t != "rowSpan" &&
      t != "colSpan" &&
      t != "role" &&
      t != "popover" &&
      t in e
    )
      try {
        e[t] = r ?? "";
        break e;
      } catch {}
    typeof r == "function" ||
      (r == null || (r === !1 && t[4] !== "-")
        ? e.removeAttribute(t)
        : e.setAttribute(t, t == "popover" && r == 1 ? "" : r));
  }
}
function Nr(e) {
  return function (t) {
    if (this.l) {
      var r = this.l[t.type + e];
      if (t.t == null) t.t = wr++;
      else if (t.t < r.u) return;
      return r(D.event ? D.event(t) : t);
    }
  };
}
function Ir(e, t, r, n, o, i, a, s, u, c) {
  var f,
    l,
    d,
    p,
    m,
    g,
    y,
    v,
    _,
    w,
    S,
    I,
    E,
    A,
    h,
    b,
    O = t.type;
  if (t.constructor !== void 0) return null;
  128 & r.__u && ((u = !!(32 & r.__u)), (i = [(s = t.__e = r.__e)])), (f = D.__b) && f(t);
  e: if (typeof O == "function")
    try {
      if (
        ((v = t.props),
        (_ = "prototype" in O && O.prototype.render),
        (w = (f = O.contextType) && n[f.__c]),
        (S = f ? (w ? w.props.value : f.__) : n),
        r.__c
          ? (y = (l = t.__c = r.__c).__ = l.__E)
          : (_ ? (t.__c = l = new O(v, S)) : ((t.__c = l = new we(v, S)), (l.constructor = O), (l.render = wi)),
            w && w.sub(l),
            (l.props = v),
            l.state || (l.state = {}),
            (l.context = S),
            (l.__n = n),
            (d = l.__d = !0),
            (l.__h = []),
            (l._sb = [])),
        _ && l.__s == null && (l.__s = l.state),
        _ &&
          O.getDerivedStateFromProps != null &&
          (l.__s == l.state && (l.__s = re({}, l.__s)), re(l.__s, O.getDerivedStateFromProps(v, l.__s))),
        (p = l.props),
        (m = l.state),
        (l.__v = t),
        d)
      )
        _ && O.getDerivedStateFromProps == null && l.componentWillMount != null && l.componentWillMount(),
          _ && l.componentDidMount != null && l.__h.push(l.componentDidMount);
      else {
        if (
          (_ &&
            O.getDerivedStateFromProps == null &&
            v !== p &&
            l.componentWillReceiveProps != null &&
            l.componentWillReceiveProps(v, S),
          !l.__e &&
            ((l.shouldComponentUpdate != null && l.shouldComponentUpdate(v, l.__s, S) === !1) || t.__v === r.__v))
        ) {
          for (
            t.__v !== r.__v && ((l.props = v), (l.state = l.__s), (l.__d = !1)),
              t.__e = r.__e,
              t.__k = r.__k,
              t.__k.forEach(function (P) {
                P && (P.__ = t);
              }),
              I = 0;
            I < l._sb.length;
            I++
          )
            l.__h.push(l._sb[I]);
          (l._sb = []), l.__h.length && a.push(l);
          break e;
        }
        l.componentWillUpdate != null && l.componentWillUpdate(v, l.__s, S),
          _ &&
            l.componentDidUpdate != null &&
            l.__h.push(function () {
              l.componentDidUpdate(p, m, g);
            });
      }
      if (((l.context = S), (l.props = v), (l.__P = e), (l.__e = !1), (E = D.__r), (A = 0), _)) {
        for (
          l.state = l.__s, l.__d = !1, E && E(t), f = l.render(l.props, l.state, l.context), h = 0;
          h < l._sb.length;
          h++
        )
          l.__h.push(l._sb[h]);
        l._sb = [];
      } else
        do (l.__d = !1), E && E(t), (f = l.render(l.props, l.state, l.context)), (l.state = l.__s);
        while (l.__d && ++A < 25);
      (l.state = l.__s),
        l.getChildContext != null && (n = re(re({}, n), l.getChildContext())),
        _ && !d && l.getSnapshotBeforeUpdate != null && (g = l.getSnapshotBeforeUpdate(p, m)),
        eo(
          e,
          Pr((b = f != null && f.type === J && f.key == null ? f.props.children : f)) ? b : [b],
          t,
          r,
          n,
          o,
          i,
          a,
          s,
          u,
          c
        ),
        (l.base = t.__e),
        (t.__u &= -161),
        l.__h.length && a.push(l),
        y && (l.__E = l.__ = null);
    } catch (P) {
      (t.__v = null),
        u || i != null
          ? ((t.__e = s), (t.__u |= u ? 160 : 32), (i[i.indexOf(s)] = null))
          : ((t.__e = r.__e), (t.__k = r.__k)),
        D.__e(P, t, r);
    }
  else i == null && t.__v === r.__v ? ((t.__k = r.__k), (t.__e = r.__e)) : (t.__e = Si(r.__e, t, r, n, o, i, a, u, c));
  (f = D.diffed) && f(t);
}
function ro(e, t, r) {
  t.__d = void 0;
  for (var n = 0; n < r.length; n++) Er(r[n], r[++n], r[++n]);
  D.__c && D.__c(t, e),
    e.some(function (o) {
      try {
        (e = o.__h),
          (o.__h = []),
          e.some(function (i) {
            i.call(o);
          });
      } catch (i) {
        D.__e(i, o.__v);
      }
    });
}
function Si(e, t, r, n, o, i, a, s, u) {
  var c,
    f,
    l,
    d,
    p,
    m,
    g,
    y = r.props,
    v = t.props,
    _ = t.type;
  if (
    (_ === "svg"
      ? (o = "http://www.w3.org/2000/svg")
      : _ === "math"
        ? (o = "http://www.w3.org/1998/Math/MathML")
        : o || (o = "http://www.w3.org/1999/xhtml"),
    i != null)
  ) {
    for (c = 0; c < i.length; c++)
      if ((p = i[c]) && "setAttribute" in p == !!_ && (_ ? p.localName === _ : p.nodeType === 3)) {
        (e = p), (i[c] = null);
        break;
      }
  }
  if (e == null) {
    if (_ === null) return document.createTextNode(v);
    (e = document.createElementNS(o, _, v.is && v)), (i = null), (s = !1);
  }
  if (_ === null) y === v || (s && e.data === v) || (e.data = v);
  else {
    if (((i = i && Nt.call(e.childNodes)), (y = r.props || Te), !s && i != null))
      for (y = {}, c = 0; c < e.attributes.length; c++) y[(p = e.attributes[c]).name] = p.value;
    for (c in y)
      if (((p = y[c]), c != "children")) {
        if (c == "dangerouslySetInnerHTML") l = p;
        else if (c !== "key" && !(c in v)) {
          if ((c == "value" && "defaultValue" in v) || (c == "checked" && "defaultChecked" in v)) continue;
          ut(e, c, null, p, o);
        }
      }
    for (c in v)
      (p = v[c]),
        c == "children"
          ? (d = p)
          : c == "dangerouslySetInnerHTML"
            ? (f = p)
            : c == "value"
              ? (m = p)
              : c == "checked"
                ? (g = p)
                : c === "key" || (s && typeof p != "function") || y[c] === p || ut(e, c, p, y[c], o);
    if (f) s || (l && (f.__html === l.__html || f.__html === e.innerHTML)) || (e.innerHTML = f.__html), (t.__k = []);
    else if (
      (l && (e.innerHTML = ""),
      eo(
        e,
        Pr(d) ? d : [d],
        t,
        r,
        n,
        _ === "foreignObject" ? "http://www.w3.org/1999/xhtml" : o,
        i,
        a,
        i ? i[0] : r.__k && de(r, 0),
        s,
        u
      ),
      i != null)
    )
      for (c = i.length; c--; ) i[c] != null && Xn(i[c]);
    s ||
      ((c = "value"),
      m !== void 0 &&
        (m !== e[c] || (_ === "progress" && !m) || (_ === "option" && m !== y[c])) &&
        ut(e, c, m, y[c], o),
      (c = "checked"),
      g !== void 0 && g !== e[c] && ut(e, c, g, y[c], o));
  }
  return e;
}
function Er(e, t, r) {
  try {
    typeof e == "function" ? e(t) : (e.current = t);
  } catch (n) {
    D.__e(n, r);
  }
}
function Kt(e, t, r) {
  var n, o;
  if (
    (D.unmount && D.unmount(e),
    (n = e.ref) && ((n.current && n.current !== e.__e) || Er(n, null, t)),
    (n = e.__c) != null)
  ) {
    if (n.componentWillUnmount)
      try {
        n.componentWillUnmount();
      } catch (i) {
        D.__e(i, t);
      }
    n.base = n.__P = null;
  }
  if ((n = e.__k)) for (o = 0; o < n.length; o++) n[o] && Kt(n[o], t, r || typeof e.type != "function");
  r || e.__e == null || Xn(e.__e), (e.__c = e.__ = e.__e = e.__d = void 0);
}
function wi(e, t, r) {
  return this.constructor(e, r);
}
function Ar(e, t, r) {
  var n, o, i, a;
  D.__ && D.__(e, t),
    (o = (n = typeof r == "function") ? null : (r && r.__k) || t.__k),
    (i = []),
    (a = []),
    Ir(
      t,
      (e = ((!n && r) || t).__k = L(J, null, [e])),
      o || Te,
      Te,
      t.namespaceURI,
      !n && r ? [r] : o ? null : t.firstChild ? Nt.call(t.childNodes) : null,
      i,
      !n && r ? r : o ? o.__e : t.firstChild,
      n,
      a
    ),
    ro(i, e, a);
}
(Nt = Jn.slice),
  (D = {
    __e: function (e, t, r, n) {
      for (var o, i, a; (t = t.__); )
        if ((o = t.__c) && !o.__)
          try {
            if (
              ((i = o.constructor) &&
                i.getDerivedStateFromError != null &&
                (o.setState(i.getDerivedStateFromError(e)), (a = o.__d)),
              o.componentDidCatch != null && (o.componentDidCatch(e, n || {}), (a = o.__d)),
              a)
            )
              return (o.__E = o);
          } catch (s) {
            e = s;
          }
      throw e;
    }
  }),
  (Qn = 0),
  (we.prototype.setState = function (e, t) {
    var r;
    (r = this.__s != null && this.__s !== this.state ? this.__s : (this.__s = re({}, this.state))),
      typeof e == "function" && (e = e(re({}, r), this.props)),
      e && re(r, e),
      e != null && this.__v && (t && this._sb.push(t), Dr(this));
  }),
  (we.prototype.forceUpdate = function (e) {
    this.__v && ((this.__e = !0), e && this.__h.push(e), Dr(this));
  }),
  (we.prototype.render = J),
  (ce = []),
  (Yn = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout),
  (Ft = function (e, t) {
    return e.__v.__b - t.__v.__b;
  }),
  (St.__r = 0),
  (wr = 0),
  (Ht = Nr(!1)),
  (Wt = Nr(!0));
var Pi = function (t) {
  var r = t.insights,
    n = t.sendEvent;
  return function (o) {
    var i = Mr(o.target, o.currentTarget, function (l) {
      return l.hasAttribute("data-insights-event");
    });
    if (i) {
      var a = Ii(i);
      a.forEach(function (l) {
        return n(l);
      });
    }
    var s = Mr(o.target, o.currentTarget, function (l) {
      return l.hasAttribute("data-insights-method") && l.hasAttribute("data-insights-payload");
    });
    if (s) {
      var u = Zo(s),
        c = u.method,
        f = u.payload;
      r(c, f);
    }
  };
};
function Mr(e, t, r) {
  for (var n = e; n && !r(n); ) {
    if (n === t) return null;
    n = n.parentElement;
  }
  return n;
}
function Ii(e) {
  var t = e.getAttribute("data-insights-event");
  if (typeof t != "string")
    throw new Error("The insights middleware expects `data-insights-event` to be a base64-encoded JSON string.");
  try {
    return ei(t);
  } catch {
    throw new Error("The insights middleware was unable to parse `data-insights-event`.");
  }
}
function De(e) {
  "@babel/helpers - typeof";
  return (
    (De =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    De(e)
  );
}
function Rr(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Ei(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Rr(Object(r), !0).forEach(function (n) {
          Ai(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Rr(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function Ai(e, t, r) {
  return (
    (t = $i(t)),
    t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
    e
  );
}
function $i(e) {
  var t = ji(e, "string");
  return De(t) === "symbol" ? t : String(t);
}
function ji(e, t) {
  if (De(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (De(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function kr(e) {
  return Di(e) || Ti(e) || xi(e) || Ci();
}
function Ci() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function xi(e, t) {
  if (e) {
    if (typeof e == "string") return Ut(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if ((r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")) return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Ut(e, t);
  }
}
function Ti(e) {
  if ((typeof Symbol < "u" && e[Symbol.iterator] != null) || e["@@iterator"] != null) return Array.from(e);
}
function Di(e) {
  if (Array.isArray(e)) return Ut(e);
}
function Ut(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Li(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    r = ti([].concat(kr(Object.keys(e || {})), kr(Object.keys(t))));
  return r.reduce(
    function (n, o) {
      var i = e ? e[o] : void 0,
        a = t[o],
        s = a !== void 0 && a !== i;
      return (n.templates[o] = s ? a : i), (n.useCustomCompileOptions[o] = s), n;
    },
    { templates: {}, useCustomCompileOptions: {} }
  );
}
function Ni(e) {
  var t = e.defaultTemplates,
    r = e.templates,
    n = e.templatesConfig,
    o = Li(t, r);
  return Ei({ templatesConfig: n }, o);
}
var no = {};
(function (e) {
  (function (t) {
    var r = /\S/,
      n = /\"/g,
      o = /\n/g,
      i = /\r/g,
      a = /\\/g,
      s = /\u2028/,
      u = /\u2029/;
    (t.tags = { "#": 1, "^": 2, "<": 3, $: 4, "/": 5, "!": 6, ">": 7, "=": 8, _v: 9, "{": 10, "&": 11, _t: 12 }),
      (t.scan = function (b, O) {
        var P = b.length,
          C = 0,
          N = 1,
          M = 2,
          x = C,
          W = null,
          $e = null,
          G = "",
          R = [],
          K = !1,
          T = 0,
          Rt = 0,
          ge = "{{",
          Z = "}}";
        function jr() {
          G.length > 0 && (R.push({ tag: "_t", text: new String(G) }), (G = ""));
        }
        function Yo() {
          for (var Q = !0, U = Rt; U < R.length; U++)
            if (((Q = t.tags[R[U].tag] < t.tags._v || (R[U].tag == "_t" && R[U].text.match(r) === null)), !Q))
              return !1;
          return Q;
        }
        function Cr(Q, U) {
          if ((jr(), Q && Yo()))
            for (var Y = Rt, he; Y < R.length; Y++)
              R[Y].text && ((he = R[Y + 1]) && he.tag == ">" && (he.indent = R[Y].text.toString()), R.splice(Y, 1));
          else
            U ||
              R.push({
                tag: `
`
              });
          (K = !1), (Rt = R.length);
        }
        function Jo(Q, U) {
          var Y = "=" + Z,
            he = Q.indexOf(Y, U),
            kt = f(Q.substring(Q.indexOf("=", U) + 1, he)).split(" ");
          return (ge = kt[0]), (Z = kt[kt.length - 1]), he + Y.length - 1;
        }
        for (O && ((O = O.split(" ")), (ge = O[0]), (Z = O[1])), T = 0; T < P; T++)
          x == C
            ? l(ge, b, T)
              ? (--T, jr(), (x = N))
              : b.charAt(T) ==
                  `
`
                ? Cr(K)
                : (G += b.charAt(T))
            : x == N
              ? ((T += ge.length - 1),
                ($e = t.tags[b.charAt(T + 1)]),
                (W = $e ? b.charAt(T + 1) : "_v"),
                W == "=" ? ((T = Jo(b, T)), (x = C)) : ($e && T++, (x = M)),
                (K = T))
              : l(Z, b, T)
                ? (R.push({ tag: W, n: f(G), otag: ge, ctag: Z, i: W == "/" ? K - ge.length : T + Z.length }),
                  (G = ""),
                  (T += Z.length - 1),
                  (x = C),
                  W == "{" && (Z == "}}" ? T++ : c(R[R.length - 1])))
                : (G += b.charAt(T));
        return Cr(K, !0), R;
      });
    function c(h) {
      h.n.substr(h.n.length - 1) === "}" && (h.n = h.n.substring(0, h.n.length - 1));
    }
    function f(h) {
      return h.trim ? h.trim() : h.replace(/^\s*|\s*$/g, "");
    }
    function l(h, b, O) {
      if (b.charAt(O) != h.charAt(0)) return !1;
      for (var P = 1, C = h.length; P < C; P++) if (b.charAt(O + P) != h.charAt(P)) return !1;
      return !0;
    }
    var d = { _t: !0, "\n": !0, $: !0, "/": !0 };
    function p(h, b, O, P) {
      var C = [],
        N = null,
        M = null,
        x = null;
      for (M = O[O.length - 1]; h.length > 0; ) {
        if (((x = h.shift()), M && M.tag == "<" && !(x.tag in d))) throw new Error("Illegal content in < super tag.");
        if (t.tags[x.tag] <= t.tags.$ || m(x, P)) O.push(x), (x.nodes = p(h, x.tag, O, P));
        else if (x.tag == "/") {
          if (O.length === 0) throw new Error("Closing tag without opener: /" + x.n);
          if (((N = O.pop()), x.n != N.n && !g(x.n, N.n, P))) throw new Error("Nesting error: " + N.n + " vs. " + x.n);
          return (N.end = x.i), C;
        } else
          x.tag ==
            `
` &&
            (x.last =
              h.length == 0 ||
              h[0].tag ==
                `
`);
        C.push(x);
      }
      if (O.length > 0) throw new Error("missing closing tag: " + O.pop().n);
      return C;
    }
    function m(h, b) {
      for (var O = 0, P = b.length; O < P; O++) if (b[O].o == h.n) return (h.tag = "#"), !0;
    }
    function g(h, b, O) {
      for (var P = 0, C = O.length; P < C; P++) if (O[P].c == h && O[P].o == b) return !0;
    }
    function y(h) {
      var b = [];
      for (var O in h) b.push('"' + w(O) + '": function(c,p,t,i) {' + h[O] + "}");
      return "{ " + b.join(",") + " }";
    }
    function v(h) {
      var b = [];
      for (var O in h.partials)
        b.push('"' + w(O) + '":{name:"' + w(h.partials[O].name) + '", ' + v(h.partials[O]) + "}");
      return "partials: {" + b.join(",") + "}, subs: " + y(h.subs);
    }
    t.stringify = function (h, b, O) {
      return "{code: function (c,p,i) { " + t.wrapMain(h.code) + " }," + v(h) + "}";
    };
    var _ = 0;
    (t.generate = function (h, b, O) {
      _ = 0;
      var P = { code: "", subs: {}, partials: {} };
      return t.walk(h, P), O.asString ? this.stringify(P, b, O) : this.makeTemplate(P, b, O);
    }),
      (t.wrapMain = function (h) {
        return 'var t=this;t.b(i=i||"");' + h + "return t.fl();";
      }),
      (t.template = t.Template),
      (t.makeTemplate = function (h, b, O) {
        var P = this.makePartials(h);
        return (P.code = new Function("c", "p", "i", this.wrapMain(h.code))), new this.template(P, b, this, O);
      }),
      (t.makePartials = function (h) {
        var b,
          O = { subs: {}, partials: h.partials, name: h.name };
        for (b in O.partials) O.partials[b] = this.makePartials(O.partials[b]);
        for (b in h.subs) O.subs[b] = new Function("c", "p", "t", "i", h.subs[b]);
        return O;
      });
    function w(h) {
      return h
        .replace(a, "\\\\")
        .replace(n, '\\"')
        .replace(o, "\\n")
        .replace(i, "\\r")
        .replace(s, "\\u2028")
        .replace(u, "\\u2029");
    }
    function S(h) {
      return ~h.indexOf(".") ? "d" : "f";
    }
    function I(h, b) {
      var O = "<" + (b.prefix || ""),
        P = O + h.n + _++;
      return (
        (b.partials[P] = { name: h.n, partials: {} }),
        (b.code += 't.b(t.rp("' + w(P) + '",c,p,"' + (h.indent || "") + '"));'),
        P
      );
    }
    t.codegen = {
      "#": function (h, b) {
        (b.code +=
          "if(t.s(t." +
          S(h.n) +
          '("' +
          w(h.n) +
          '",c,p,1),c,p,0,' +
          h.i +
          "," +
          h.end +
          ',"' +
          h.otag +
          " " +
          h.ctag +
          '")){t.rs(c,p,function(c,p,t){'),
          t.walk(h.nodes, b),
          (b.code += "});c.pop();}");
      },
      "^": function (h, b) {
        (b.code += "if(!t.s(t." + S(h.n) + '("' + w(h.n) + '",c,p,1),c,p,1,0,0,"")){'),
          t.walk(h.nodes, b),
          (b.code += "};");
      },
      ">": I,
      "<": function (h, b) {
        var O = { partials: {}, code: "", subs: {}, inPartial: !0 };
        t.walk(h.nodes, O);
        var P = b.partials[I(h, b)];
        (P.subs = O.subs), (P.partials = O.partials);
      },
      $: function (h, b) {
        var O = { subs: {}, code: "", partials: b.partials, prefix: h.n };
        t.walk(h.nodes, O), (b.subs[h.n] = O.code), b.inPartial || (b.code += 't.sub("' + w(h.n) + '",c,p,i);');
      },
      "\n": function (h, b) {
        b.code += A('"\\n"' + (h.last ? "" : " + i"));
      },
      _v: function (h, b) {
        b.code += "t.b(t.v(t." + S(h.n) + '("' + w(h.n) + '",c,p,0)));';
      },
      _t: function (h, b) {
        b.code += A('"' + w(h.text) + '"');
      },
      "{": E,
      "&": E
    };
    function E(h, b) {
      b.code += "t.b(t.t(t." + S(h.n) + '("' + w(h.n) + '",c,p,0)));';
    }
    function A(h) {
      return "t.b(" + h + ");";
    }
    (t.walk = function (h, b) {
      for (var O, P = 0, C = h.length; P < C; P++) (O = t.codegen[h[P].tag]), O && O(h[P], b);
      return b;
    }),
      (t.parse = function (h, b, O) {
        return (O = O || {}), p(h, "", [], O.sectionTags || []);
      }),
      (t.cache = {}),
      (t.cacheKey = function (h, b) {
        return [h, !!b.asString, !!b.disableLambda, b.delimiters, !!b.modelGet].join("||");
      }),
      (t.compile = function (h, b) {
        b = b || {};
        var O = t.cacheKey(h, b),
          P = this.cache[O];
        if (P) {
          var C = P.partials;
          for (var N in C) delete C[N].instance;
          return P;
        }
        return (P = this.generate(this.parse(this.scan(h, b.delimiters), h, b), h, b)), (this.cache[O] = P);
      });
  })(e);
})(no);
var oo = {};
(function (e) {
  (function (t) {
    (t.Template = function (p, m, g, y) {
      (p = p || {}),
        (this.r = p.code || this.r),
        (this.c = g),
        (this.options = y || {}),
        (this.text = m || ""),
        (this.partials = p.partials || {}),
        (this.subs = p.subs || {}),
        (this.buf = "");
    }),
      (t.Template.prototype = {
        r: function (p, m, g) {
          return "";
        },
        v: l,
        t: f,
        render: function (m, g, y) {
          return this.ri([m], g || {}, y);
        },
        ri: function (p, m, g) {
          return this.r(p, m, g);
        },
        ep: function (p, m) {
          var g = this.partials[p],
            y = m[g.name];
          if (g.instance && g.base == y) return g.instance;
          if (typeof y == "string") {
            if (!this.c) throw new Error("No compiler available.");
            y = this.c.compile(y, this.options);
          }
          if (!y) return null;
          if (((this.partials[p].base = y), g.subs)) {
            m.stackText || (m.stackText = {});
            for (key in g.subs)
              m.stackText[key] ||
                (m.stackText[key] =
                  this.activeSub !== void 0 && m.stackText[this.activeSub] ? m.stackText[this.activeSub] : this.text);
            y = n(y, g.subs, g.partials, this.stackSubs, this.stackPartials, m.stackText);
          }
          return (this.partials[p].instance = y), y;
        },
        rp: function (p, m, g, y) {
          var v = this.ep(p, g);
          return v ? v.ri(m, g, y) : "";
        },
        rs: function (p, m, g) {
          var y = p[p.length - 1];
          if (!d(y)) {
            g(p, m, this);
            return;
          }
          for (var v = 0; v < y.length; v++) p.push(y[v]), g(p, m, this), p.pop();
        },
        s: function (p, m, g, y, v, _, w) {
          var S;
          return d(p) && p.length === 0
            ? !1
            : (typeof p == "function" && (p = this.ms(p, m, g, y, v, _, w)),
              (S = !!p),
              !y && S && m && m.push(typeof p == "object" ? p : m[m.length - 1]),
              S);
        },
        d: function (p, m, g, y) {
          var v,
            _ = p.split("."),
            w = this.f(_[0], m, g, y),
            S = this.options.modelGet,
            I = null;
          if (p === "." && d(m[m.length - 2])) w = m[m.length - 1];
          else for (var E = 1; E < _.length; E++) (v = r(_[E], w, S)), v !== void 0 ? ((I = w), (w = v)) : (w = "");
          return y && !w ? !1 : (!y && typeof w == "function" && (m.push(I), (w = this.mv(w, m, g)), m.pop()), w);
        },
        f: function (p, m, g, y) {
          for (var v = !1, _ = null, w = !1, S = this.options.modelGet, I = m.length - 1; I >= 0; I--)
            if (((_ = m[I]), (v = r(p, _, S)), v !== void 0)) {
              w = !0;
              break;
            }
          return w ? (!y && typeof v == "function" && (v = this.mv(v, m, g)), v) : y ? !1 : "";
        },
        ls: function (p, m, g, y, v) {
          var _ = this.options.delimiters;
          return (
            (this.options.delimiters = v), this.b(this.ct(f(p.call(m, y)), m, g)), (this.options.delimiters = _), !1
          );
        },
        ct: function (p, m, g) {
          if (this.options.disableLambda) throw new Error("Lambda features disabled.");
          return this.c.compile(p, this.options).render(m, g);
        },
        b: function (p) {
          this.buf += p;
        },
        fl: function () {
          var p = this.buf;
          return (this.buf = ""), p;
        },
        ms: function (p, m, g, y, v, _, w) {
          var S,
            I = m[m.length - 1],
            E = p.call(I);
          return typeof E == "function"
            ? y
              ? !0
              : ((S =
                  this.activeSub && this.subsText && this.subsText[this.activeSub]
                    ? this.subsText[this.activeSub]
                    : this.text),
                this.ls(E, I, g, S.substring(v, _), w))
            : E;
        },
        mv: function (p, m, g) {
          var y = m[m.length - 1],
            v = p.call(y);
          return typeof v == "function" ? this.ct(f(v.call(y)), y, g) : v;
        },
        sub: function (p, m, g, y) {
          var v = this.subs[p];
          v && ((this.activeSub = p), v(m, g, this, y), (this.activeSub = !1));
        }
      });
    function r(p, m, g) {
      var y;
      return (
        m &&
          typeof m == "object" &&
          (m[p] !== void 0 ? (y = m[p]) : g && m.get && typeof m.get == "function" && (y = m.get(p))),
        y
      );
    }
    function n(p, m, g, y, v, _) {
      function w() {}
      w.prototype = p;
      function S() {}
      S.prototype = p.subs;
      var I,
        E = new w();
      (E.subs = new S()), (E.subsText = {}), (E.buf = ""), (y = y || {}), (E.stackSubs = y), (E.subsText = _);
      for (I in m) y[I] || (y[I] = m[I]);
      for (I in y) E.subs[I] = y[I];
      (v = v || {}), (E.stackPartials = v);
      for (I in g) v[I] || (v[I] = g[I]);
      for (I in v) E.partials[I] = v[I];
      return E;
    }
    var o = /&/g,
      i = /</g,
      a = />/g,
      s = /\'/g,
      u = /\"/g,
      c = /[&<>\"\']/;
    function f(p) {
      return String(p ?? "");
    }
    function l(p) {
      return (
        (p = f(p)),
        c.test(p)
          ? p.replace(o, "&amp;").replace(i, "&lt;").replace(a, "&gt;").replace(s, "&#39;").replace(u, "&quot;")
          : p
      );
    }
    var d =
      Array.isArray ||
      function (p) {
        return Object.prototype.toString.call(p) === "[object Array]";
      };
  })(e);
})(oo);
var wt = no;
wt.Template = oo.Template;
wt.template = wt.Template;
var Mi = wt;
const io = mi(Mi);
var ao = function (e, t, r, n) {
    var o;
    t[0] = 0;
    for (var i = 1; i < t.length; i++) {
      var a = t[i++],
        s = t[i] ? ((t[0] |= a ? 1 : 2), r[t[i++]]) : t[++i];
      a === 3
        ? (n[0] = s)
        : a === 4
          ? (n[1] = Object.assign(n[1] || {}, s))
          : a === 5
            ? ((n[1] = n[1] || {})[t[++i]] = s)
            : a === 6
              ? (n[1][t[++i]] += s + "")
              : a
                ? ((o = e.apply(s, ao(e, s, r, ["", null]))),
                  n.push(o),
                  s[0] ? (t[0] |= 2) : ((t[i - 2] = 0), (t[i] = o)))
                : n.push(s);
    }
    return n;
  },
  qr = new Map();
function so(e) {
  var t = qr.get(this);
  return (
    t || ((t = new Map()), qr.set(this, t)),
    (t = ao(
      this,
      t.get(e) ||
        (t.set(
          e,
          (t = (function (r) {
            for (
              var n,
                o,
                i = 1,
                a = "",
                s = "",
                u = [0],
                c = function (d) {
                  i === 1 && (d || (a = a.replace(/^\s*\n\s*|\s*\n\s*$/g, "")))
                    ? u.push(0, d, a)
                    : i === 3 && (d || a)
                      ? (u.push(3, d, a), (i = 2))
                      : i === 2 && a === "..." && d
                        ? u.push(4, d, 0)
                        : i === 2 && a && !d
                          ? u.push(5, 0, !0, a)
                          : i >= 5 &&
                            ((a || (!d && i === 5)) && (u.push(i, 0, a, o), (i = 6)),
                            d && (u.push(i, d, 0, o), (i = 6))),
                    (a = "");
                },
                f = 0;
              f < r.length;
              f++
            ) {
              f && (i === 1 && c(), c(f));
              for (var l = 0; l < r[f].length; l++)
                (n = r[f][l]),
                  i === 1
                    ? n === "<"
                      ? (c(), (u = [u]), (i = 3))
                      : (a += n)
                    : i === 4
                      ? a === "--" && n === ">"
                        ? ((i = 1), (a = ""))
                        : (a = n + a[0])
                      : s
                        ? n === s
                          ? (s = "")
                          : (a += n)
                        : n === '"' || n === "'"
                          ? (s = n)
                          : n === ">"
                            ? (c(), (i = 1))
                            : i &&
                              (n === "="
                                ? ((i = 5), (o = a), (a = ""))
                                : n === "/" && (i < 5 || r[f][l + 1] === ">")
                                  ? (c(), i === 3 && (u = u[0]), (i = u), (u = u[0]).push(2, 0, i), (i = 0))
                                  : n === " " ||
                                      n === "	" ||
                                      n ===
                                        `
` ||
                                      n === "\r"
                                    ? (c(), (i = 2))
                                    : (a += n)),
                  i === 3 && a === "!--" && ((i = 4), (u = u[0]));
            }
            return c(), u;
          })(e))
        ),
        t),
      arguments,
      []
    )).length > 1
      ? t
      : t[0]
  );
}
var Ri = so.bind(L),
  Mt = ri({ createElement: L, Fragment: J }),
  ki = ["classNames"];
function Vt() {
  return (
    (Vt = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Vt.apply(this, arguments)
  );
}
function qi(e, t) {
  if (e == null) return {};
  var r = Bi(e, t),
    n,
    o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      (n = i[o]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function Bi(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    o,
    i;
  for (i = 0; i < n.length; i++) (o = n[i]), !(t.indexOf(o) >= 0) && (r[o] = e[o]);
  return r;
}
function Fi(e) {
  var t = e.classNames,
    r = t === void 0 ? {} : t,
    n = qi(e, ki);
  return L(
    Mt,
    Vt(
      {
        classNames: {
          root: q("ais-Highlight", r.root),
          highlighted: q("ais-Highlight-highlighted", r.highlighted),
          nonHighlighted: q("ais-Highlight-nonHighlighted", r.nonHighlighted),
          separator: q("ais-Highlight-separator", r.separator)
        }
      },
      n
    )
  );
}
var Hi = ["hit", "attribute", "cssClasses"];
function zt() {
  return (
    (zt = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    zt.apply(this, arguments)
  );
}
function Wi(e, t) {
  if (e == null) return {};
  var r = Ki(e, t),
    n,
    o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      (n = i[o]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function Ki(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    o,
    i;
  for (i = 0; i < n.length; i++) (o = n[i]), !(t.indexOf(o) >= 0) && (r[o] = e[o]);
  return r;
}
function Ui(e) {
  var t = e.hit,
    r = e.attribute,
    n = e.cssClasses,
    o = Wi(e, Hi),
    i = xt(t._highlightResult, r) || [],
    a = Lt(i),
    s = a.map(function (u) {
      var c = u.value;
      return Tt(Dt(c || ""));
    });
  return L(Fi, zt({}, o, { parts: s, classNames: n }));
}
var Vi = ["classNames"];
function Gt() {
  return (
    (Gt = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Gt.apply(this, arguments)
  );
}
function zi(e, t) {
  if (e == null) return {};
  var r = Gi(e, t),
    n,
    o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      (n = i[o]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function Gi(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    o,
    i;
  for (i = 0; i < n.length; i++) (o = n[i]), !(t.indexOf(o) >= 0) && (r[o] = e[o]);
  return r;
}
function Qi(e) {
  var t = e.classNames,
    r = t === void 0 ? {} : t,
    n = zi(e, Vi);
  return L(
    Mt,
    Gt(
      {
        classNames: {
          root: q("ais-ReverseHighlight", r.root),
          highlighted: q("ais-ReverseHighlight-highlighted", r.highlighted),
          nonHighlighted: q("ais-ReverseHighlight-nonHighlighted", r.nonHighlighted),
          separator: q("ais-ReverseHighlight-separator", r.separator)
        }
      },
      n
    )
  );
}
function Le(e) {
  "@babel/helpers - typeof";
  return (
    (Le =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Le(e)
  );
}
var Yi = ["hit", "attribute", "cssClasses"],
  Ji = ["isHighlighted"];
function Qt() {
  return (
    (Qt = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Qt.apply(this, arguments)
  );
}
function Br(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Fr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Br(Object(r), !0).forEach(function (n) {
          Xi(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Br(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function Xi(e, t, r) {
  return (
    (t = Zi(t)),
    t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
    e
  );
}
function Zi(e) {
  var t = ea(e, "string");
  return Le(t) === "symbol" ? t : String(t);
}
function ea(e, t) {
  if (Le(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Le(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Hr(e, t) {
  if (e == null) return {};
  var r = ta(e, t),
    n,
    o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      (n = i[o]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function ta(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    o,
    i;
  for (i = 0; i < n.length; i++) (o = n[i]), !(t.indexOf(o) >= 0) && (r[o] = e[o]);
  return r;
}
function ra(e) {
  var t = e.hit,
    r = e.attribute,
    n = e.cssClasses,
    o = Hr(e, Yi),
    i = xt(t._highlightResult, r) || [],
    a = Lt(i),
    s = a.map(function (u) {
      var c = u.value;
      return Tt(Dt(c || "")).map(function (f) {
        var l = f.isHighlighted,
          d = Hr(f, Ji);
        return Fr(Fr({}, d), {}, { isHighlighted: !l });
      });
    });
  return L(Qi, Qt({}, o, { parts: s, classNames: n }));
}
var na = ["classNames"];
function Yt() {
  return (
    (Yt = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Yt.apply(this, arguments)
  );
}
function oa(e, t) {
  if (e == null) return {};
  var r = ia(e, t),
    n,
    o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      (n = i[o]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function ia(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    o,
    i;
  for (i = 0; i < n.length; i++) (o = n[i]), !(t.indexOf(o) >= 0) && (r[o] = e[o]);
  return r;
}
function aa(e) {
  var t = e.classNames,
    r = t === void 0 ? {} : t,
    n = oa(e, na);
  return L(
    Mt,
    Yt(
      {
        classNames: {
          root: q("ais-ReverseSnippet", r.root),
          highlighted: q("ais-ReverseSnippet-highlighted", r.highlighted),
          nonHighlighted: q("ais-ReverseSnippet-nonHighlighted", r.nonHighlighted),
          separator: q("ais-ReverseSnippet-separator", r.separator)
        }
      },
      n
    )
  );
}
function Ne(e) {
  "@babel/helpers - typeof";
  return (
    (Ne =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Ne(e)
  );
}
var sa = ["hit", "attribute", "cssClasses"],
  la = ["isHighlighted"];
function Jt() {
  return (
    (Jt = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Jt.apply(this, arguments)
  );
}
function Wr(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Kr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Wr(Object(r), !0).forEach(function (n) {
          ca(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Wr(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function ca(e, t, r) {
  return (
    (t = ua(t)),
    t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
    e
  );
}
function ua(e) {
  var t = fa(e, "string");
  return Ne(t) === "symbol" ? t : String(t);
}
function fa(e, t) {
  if (Ne(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Ne(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Ur(e, t) {
  if (e == null) return {};
  var r = pa(e, t),
    n,
    o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      (n = i[o]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function pa(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    o,
    i;
  for (i = 0; i < n.length; i++) (o = n[i]), !(t.indexOf(o) >= 0) && (r[o] = e[o]);
  return r;
}
function da(e) {
  var t = e.hit,
    r = e.attribute,
    n = e.cssClasses,
    o = Ur(e, sa),
    i = xt(t._snippetResult, r) || [],
    a = Lt(i),
    s = a.map(function (u) {
      var c = u.value;
      return Tt(Dt(c || "")).map(function (f) {
        var l = f.isHighlighted,
          d = Ur(f, la);
        return Kr(Kr({}, d), {}, { isHighlighted: !l });
      });
    });
  return L(aa, Jt({}, o, { parts: s, classNames: n }));
}
var ma = ["classNames"];
function Xt() {
  return (
    (Xt = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Xt.apply(this, arguments)
  );
}
function ga(e, t) {
  if (e == null) return {};
  var r = ha(e, t),
    n,
    o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      (n = i[o]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function ha(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    o,
    i;
  for (i = 0; i < n.length; i++) (o = n[i]), !(t.indexOf(o) >= 0) && (r[o] = e[o]);
  return r;
}
function va(e) {
  var t = e.classNames,
    r = t === void 0 ? {} : t,
    n = ga(e, ma);
  return L(
    Mt,
    Xt(
      {
        classNames: {
          root: q("ais-Snippet", r.root),
          highlighted: q("ais-Snippet-highlighted", r.highlighted),
          nonHighlighted: q("ais-Snippet-nonHighlighted", r.nonHighlighted),
          separator: q("ais-Snippet-separator", r.separator)
        }
      },
      n
    )
  );
}
var ya = ["hit", "attribute", "cssClasses"];
function Zt() {
  return (
    (Zt = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Zt.apply(this, arguments)
  );
}
function ba(e, t) {
  if (e == null) return {};
  var r = Oa(e, t),
    n,
    o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      (n = i[o]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function Oa(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    o,
    i;
  for (i = 0; i < n.length; i++) (o = n[i]), !(t.indexOf(o) >= 0) && (r[o] = e[o]);
  return r;
}
function _a(e) {
  var t = e.hit,
    r = e.attribute,
    n = e.cssClasses,
    o = ba(e, ya),
    i = xt(t._snippetResult, r) || [],
    a = Lt(i),
    s = a.map(function (u) {
      var c = u.value;
      return Tt(Dt(c || ""));
    });
  return L(va, Zt({}, o, { parts: s, classNames: n }));
}
function Pe(e) {
  "@babel/helpers - typeof";
  return (
    (Pe =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Pe(e)
  );
}
function Vr(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Pt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Vr(Object(r), !0).forEach(function (n) {
          lo(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Vr(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function lo(e, t, r) {
  return (
    (t = Sa(t)),
    t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
    e
  );
}
function Sa(e) {
  var t = wa(e, "string");
  return Pe(t) === "symbol" ? t : String(t);
}
function wa(e, t) {
  if (Pe(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Pe(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Pa() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
    t = arguments.length > 1 ? arguments[1] : void 0,
    r = arguments.length > 2 ? arguments[2] : void 0;
  return Object.keys(e).reduce(function (n, o) {
    return Pt(
      Pt({}, n),
      {},
      lo({}, o, function () {
        var i = this;
        return function (a) {
          var s = function (c) {
            return io.compile(c, t).render(i);
          };
          return e[o].call(r, a, s);
        };
      })
    );
  }, {});
}
function Ia(e) {
  var t = e.templates,
    r = e.templateKey,
    n = e.compileOptions,
    o = e.helpers,
    i = e.data,
    a = e.bindEvent,
    s = e.sendEvent,
    u = t[r];
  if (typeof u != "string" && typeof u != "function")
    throw new Error("Template must be 'string' or 'function', was '".concat(Pe(u), "' (key: ").concat(r, ")"));
  if (typeof u == "function") {
    var c = a || {};
    return (
      (c.html = Ri),
      (c.sendEvent = s),
      (c.components = { Highlight: Ui, ReverseHighlight: ra, Snippet: _a, ReverseSnippet: da }),
      u(i, c)
    );
  }
  var f = Pa(o, n, i);
  return io
    .compile(u, n)
    .render(Pt(Pt({}, i), {}, { helpers: f }))
    .replace(/[ \n\r\t\f\xA0]+/g, function (l) {
      return l.replace(/(^|\xA0+)[^\xA0]+/g, "$1 ");
    })
    .trim();
}
function er() {
  return (
    (er = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    er.apply(this, arguments)
  );
}
function me(e) {
  "@babel/helpers - typeof";
  return (
    (me =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    me(e)
  );
}
function Ea(e) {
  return Ca(e) || ja(e) || $a(e) || Aa();
}
function Aa() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function $a(e, t) {
  if (e) {
    if (typeof e == "string") return tr(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if ((r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")) return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return tr(e, t);
  }
}
function ja(e) {
  if ((typeof Symbol < "u" && e[Symbol.iterator] != null) || e["@@iterator"] != null) return Array.from(e);
}
function Ca(e) {
  if (Array.isArray(e)) return tr(e);
}
function tr(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function co(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function xa(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, mo(n.key), n);
  }
}
function uo(e, t, r) {
  return t && xa(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function fo(e, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && rr(e, t);
}
function rr(e, t) {
  return (
    (rr = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, o) {
          return (n.__proto__ = o), n;
        }),
    rr(e, t)
  );
}
function po(e) {
  var t = Da();
  return function () {
    var n = It(e),
      o;
    if (t) {
      var i = It(this).constructor;
      o = Reflect.construct(n, arguments, i);
    } else o = n.apply(this, arguments);
    return Ta(this, o);
  };
}
function Ta(e, t) {
  if (t && (me(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return nr(e);
}
function nr(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Da() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
  } catch {
    return !1;
  }
}
function It(e) {
  return (
    (It = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    It(e)
  );
}
function or(e, t, r) {
  return (
    (t = mo(t)),
    t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
    e
  );
}
function mo(e) {
  var t = La(e, "string");
  return me(t) === "symbol" ? t : String(t);
}
function La(e, t) {
  if (me(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (me(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Na = (function (e) {
    fo(r, e);
    var t = po(r);
    function r() {
      var n;
      co(this, r);
      for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++) i[a] = arguments[a];
      return (n = t.call.apply(t, [this].concat(i))), or(nr(n), "ref", bi()), or(nr(n), "nodes", []), n;
    }
    return (
      uo(r, [
        {
          key: "componentDidMount",
          value: function () {
            var o = new DocumentFragment(),
              i = document.createElement("div");
            (i.innerHTML = this.props.content),
              (this.nodes = Ea(i.childNodes)),
              this.nodes.forEach(function (a) {
                return o.appendChild(a);
              }),
              this.ref.current.replaceWith(o);
          }
        },
        {
          key: "componentWillUnmount",
          value: function () {
            this.nodes.forEach(function (o) {
              if (o instanceof Element) {
                o.outerHTML = "";
                return;
              }
              o.nodeValue = "";
            }),
              this.nodes[0].nodeValue && (this.nodes[0].nodeValue = "");
          }
        },
        {
          key: "render",
          value: function () {
            return L("div", { ref: this.ref });
          }
        }
      ]),
      r
    );
  })(we),
  Ma = { data: {}, rootTagName: "div", useCustomCompileOptions: {}, templates: {}, templatesConfig: {} },
  Ot = (function (e) {
    fo(r, e);
    var t = po(r);
    function r() {
      return co(this, r), t.apply(this, arguments);
    }
    return (
      uo(r, [
        {
          key: "shouldComponentUpdate",
          value: function (o) {
            return (
              !xr(this.props.data, o.data) ||
              this.props.templateKey !== o.templateKey ||
              !xr(this.props.rootProps, o.rootProps)
            );
          }
        },
        {
          key: "render",
          value: function () {
            var o = this.props.rootTagName === "fragment" ? J : this.props.rootTagName,
              i = this.props.useCustomCompileOptions[this.props.templateKey],
              a = i ? this.props.templatesConfig.compileOptions : {},
              s = Ia({
                templates: this.props.templates,
                templateKey: this.props.templateKey,
                compileOptions: a,
                helpers: this.props.templatesConfig.helpers,
                data: this.props.data,
                bindEvent: this.props.bindEvent,
                sendEvent: this.props.sendEvent
              });
            return s === null
              ? null
              : me(s) === "object"
                ? L(o, this.props.rootProps, s)
                : o === J
                  ? L(Na, { content: s, key: Math.random() })
                  : L(o, er({}, this.props.rootProps, { dangerouslySetInnerHTML: { __html: s } }));
          }
        }
      ]),
      r
    );
  })(we);
or(Ot, "defaultProps", Ma);
function Me(e) {
  "@babel/helpers - typeof";
  return (
    (Me =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Me(e)
  );
}
function zr(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Gr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? zr(Object(r), !0).forEach(function (n) {
          Ra(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : zr(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function Ra(e, t, r) {
  return (
    (t = ka(t)),
    t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
    e
  );
}
function ka(e) {
  var t = qa(e, "string");
  return Me(t) === "symbol" ? t : String(t);
}
function qa(e, t) {
  if (Me(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Me(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Ba = function (t) {
    var r = ni(oi);
    return Gr(Gr({}, r({ searchParameters: t })), {}, { $$widgetType: "ais.configure" });
  },
  Fa = {
    empty: function () {
      return "No results";
    },
    item: function (t) {
      return JSON.stringify(vi(t, ["__hitIndex"]), null, 2);
    }
  };
function Re(e) {
  "@babel/helpers - typeof";
  return (
    (Re =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Re(e)
  );
}
var Ha = ["hit", "index"];
function Qr(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Oe(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Qr(Object(r), !0).forEach(function (n) {
          Wa(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Qr(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function Wa(e, t, r) {
  return (
    (t = Ka(t)),
    t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
    e
  );
}
function Ka(e) {
  var t = Ua(e, "string");
  return Re(t) === "symbol" ? t : String(t);
}
function Ua(e, t) {
  if (Re(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Re(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Va(e, t) {
  if (e == null) return {};
  var r = za(e, t),
    n,
    o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      (n = i[o]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function za(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    o,
    i;
  for (i = 0; i < n.length; i++) (o = n[i]), !(t.indexOf(o) >= 0) && (r[o] = e[o]);
  return r;
}
function Ga(e) {
  if (e == null) throw new TypeError("Cannot destructure " + e);
}
function _e() {
  return (
    (_e = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    _e.apply(this, arguments)
  );
}
var Qa = si({ name: "hits" }),
  Ya = li({ createElement: L, Fragment: J }),
  Ja = function (t) {
    var r = t.renderState,
      n = t.cssClasses,
      o = t.containerNode,
      i = t.templates;
    return function (a, s) {
      var u = a.items,
        c = a.results,
        f = a.instantSearchInstance,
        l = a.insights,
        d = a.bindEvent,
        p = a.sendEvent,
        m = a.banner;
      if (s) {
        r.templateProps = Ni({ defaultTemplates: Fa, templatesConfig: f.templatesConfig, templates: i });
        return;
      }
      var g = Pi({ insights: l, sendEvent: p }),
        y = function (S) {
          var I = _e({}, (Ga(S), S));
          return L(
            Ot,
            _e({}, r.templateProps, { rootProps: I, templateKey: "empty", data: c, rootTagName: "fragment" })
          );
        },
        v = function (S) {
          var I = S.hit,
            E = S.index,
            A = Va(S, Ha);
          return L(
            Ot,
            _e({}, r.templateProps, {
              templateKey: "item",
              rootTagName: "li",
              rootProps: Oe(
                Oe({}, A),
                {},
                {
                  onClick: function (b) {
                    g(b), A.onClick();
                  },
                  onAuxClick: function (b) {
                    g(b), A.onAuxClick();
                  }
                }
              ),
              data: Oe(
                Oe({}, I),
                {},
                {
                  get __hitIndex() {
                    return E;
                  }
                }
              ),
              bindEvent: d,
              sendEvent: p
            })
          );
        },
        _ = function (S) {
          return L(Ot, _e({}, r.templateProps, { templateKey: "banner", data: S, rootTagName: "fragment" }));
        };
      Ar(
        L(Ya, {
          hits: u,
          itemComponent: v,
          sendEvent: p,
          classNames: n,
          emptyComponent: y,
          banner: m,
          bannerComponent: i.banner ? _ : void 0
        }),
        o
      );
    };
  };
const Xa = function (t) {
  var r = t || {},
    n = r.container,
    o = r.escapeHTML,
    i = r.transformItems,
    a = r.templates,
    s = a === void 0 ? {} : a,
    u = r.cssClasses,
    c = u === void 0 ? {} : u;
  if (!n) throw new Error(Qa("The `container` option is required."));
  var f = hi(n),
    l = Ja({ containerNode: f, cssClasses: c, renderState: {}, templates: s }),
    d = ii(ai)(l, function () {
      return Ar(null, f);
    });
  return Oe(Oe({}, d({ escapeHTML: o, transformItems: i })), {}, { $$widgetType: "ais.hits" });
};
(() => {
  const e = [
    "+1",
    "+52",
    "+44",
    "+49",
    "+355",
    "+376",
    "+374",
    "+43",
    "+994",
    "+375",
    "+32",
    "+387",
    "+359",
    "+385",
    "+357",
    "+420",
    "+45",
    "+372",
    "+358",
    "+33",
    "+995",
    "+49",
    "+30",
    "+36",
    "+354",
    "+353",
    "+39",
    "+7",
    "+383",
    "+371",
    "+423",
    "+370",
    "+352",
    "+356",
    "+373",
    "+377",
    "+382",
    "+31",
    "+389",
    "+47",
    "+48",
    "+351",
    "+40",
    "+7",
    "+378",
    "+381",
    "+421",
    "+386",
    "+34",
    "+46",
    "+41",
    "+90",
    "+380",
    "+379",
    "+591",
    "+55",
    "+56",
    "+57",
    "+506",
    "+53",
    "+1",
    "+593",
    "+503",
    "+502",
    "+509",
    "+504",
    "+505",
    "+507",
    "+595",
    "+51",
    "+598",
    "+58",
    "+61",
    "+64",
    "+81",
    "+82"
  ];
  function t() {
    document.querySelectorAll(".init-atlan-hubspot-form").forEach((n) => {
      const { formId: o } = n.dataset,
        { portalId: i } = n.dataset,
        { formInstanceId: a } = n.dataset,
        s = "#" + n.id;
      window.hbspt &&
        window.hbspt.forms.create({ region: "na1", portalId: i || "6880682", formId: o, target: s, formInstanceId: a });
    }),
      setTimeout(() => {
        if (!window.hbspt) {
          window.__SENTRY__ && __SENTRY__.hub.captureEvent({ message: "Hubspot scripts not loaded" }),
            window.Bugsnag &&
              window.Bugsnag.notify("hubspot-form-not-loading", function (o) {
                (o.severity = "info"),
                  (o.context = document.location.pathname),
                  o.addMetadata("moreInfo", { previousPage: document.location.search });
              });
          const n = document.querySelectorAll(".spinner-loader");
          Array.from(n).forEach((o) => {
            o.style.display = "none";
            const i = o.closest(".init-atlan-hubspot-form");
            i &&
              ((i.className += " p-5 text-center bg-white rounded-lg"),
              (i.innerHTML = `⚠️ We're unable to load this form. Please check your browser's security settings and turn off any ad blockers as they may interfere with form load. In case that doesn't work, 
               <a href="/forms/contact?ref=${document.location.pathname}" class="text-primary underline">click here</a>, to leave your email and we will get back you.
              `));
          });
        }
      }, 1e3);
  }
  window.addEventListener("DOMContentLoaded", () => {
    t();
  }),
    window.addEventListener("message", (n) => {
      if (
        (n.data.type === "hsFormCallback" && n.data.eventName === "onFormReady" && r(),
        n.data.eventName === "onFormSubmit")
      ) {
        if (!document.getElementById("filter-form-flow")) return;
        const a = n.data.data.find((u) => u.name === "phone")?.value;
        e.find((u) => a && a.startsWith(u)) &&
          setTimeout(() => {
            document.location = "/forms/talk-to-sales-meeting";
          }, 1e3);
      }
    });
  function r() {
    document.querySelectorAll('[data-portal-id="39882711"]:not(form)').forEach((o) => {
      const i = document.createElement("div");
      (i.className = "bg-orange-500 text-white px-4 py-1 text-xl inline-block rounded"),
        (i.innerText = "Sandbox"),
        o.insertBefore(i, o.firstChild),
        console.log("tag", i);
    });
  }
})();
(function () {
  console.log(`  __        __         _            _        _   _   _             
  \\ \\      / /__  _ __| | __   __ _| |_     / \\ | |_| | __ _ _ __  
   \\ \\ /\\ / / _ \\| '__| |/ /  / _\` | __|   / _ \\| __| |/ _\` | '_ \\ 
    \\ V  V / (_) | |  |   <  | (_| | |_   / ___ \\ |_| | (_| | | | |
     \\_/\\_/ \\___/|_|  |_|\\_\\  \\__,_|\\__| /_/   \\_\\__|_|\\__,_|_| |_|`),
    console.log(
      "So, you're a curious one. We at Atlan are looking for people just like you. Visit our careers page to view open positions and apply. https://atlan.com/careers"
    );
})();
(function () {
  const t = document.location.origin,
    r = document.location.pathname;
  document.querySelectorAll("a").forEach((n) => {
    const { pathname: o, origin: i, href: a, host: s } = n;
    if (!a) return;
    const u = new URL(a),
      c = u.searchParams,
      f = n.getAttribute("href"),
      l = s?.includes("atlan.com") || s?.includes("atln.cm");
    if (
      f.startsWith("#") ||
      f.startsWith("mailto:") ||
      u.hash ||
      (!l && f.startsWith("http")) ||
      f.includes("javascript:void(")
    )
      return;
    if (f?.includes(".atlan.com") || f?.includes("atln.cm")) {
      c.set("ref", t + r), (u.search = decodeURIComponent(c.toString())), (n.href = u.toString());
      return;
    }
    let d = r;
    n.dataset.prependRef && (d = n.dataset.prependRef + d),
      c.set("ref", d),
      (u.search = decodeURIComponent(c.toString())),
      (n.href = u.toString());
  });
})();
(function () {
  const e = document.querySelector("[data-meeting-redirect-url]"),
    t = e ? e.getAttribute("data-meeting-redirect-url") : null;
  window.addEventListener("message", function (r) {
    r.origin === "https://meetings.hubspot.com" &&
      r.data.meetingBookSucceeded &&
      t &&
      setTimeout(() => {
        this.window.location.href = t;
      }, 2500);
  });
})();
(function () {
  const t = document.getElementById("site-navbar");
  t &&
    window.addEventListener(
      "scroll",
      () => {
        window.scrollY == 0
          ? (t.classList.add("border-b"), t.classList.add("border-gray-100"), t.classList.remove("scrolled"))
          : (t.classList.add("scrolled"), t.classList.remove("border-b"), t.classList.remove("border-gray-100"));
      },
      { passive: !0 }
    );
})();
(() => {
  function e() {
    document.querySelectorAll(".swiper-container").forEach((t) => {
      const r = t.querySelector(".slide-progress"),
        n = t.querySelectorAll(".swiper-slide"),
        o = new window.Swiper(t, { loop: !0 });
      if ((o.on("after-slide", () => {}), t.dataset.autoplay)) {
        let i = function () {
          f = setInterval(function () {
            c += 10;
            const l = (((c % a) + 10) / a) * 100;
            r && (r.style.width = `${l}%`), l === 100 && (u++, u >= s && (u = 0), o.slideTo(u));
          }, 10);
        };
        const a = Number(t.dataset.duration),
          s = n.length;
        let u = 0,
          c = 0,
          f;
        i(),
          n.forEach((l) => {
            l.addEventListener("mouseover", () => {
              clearInterval(f);
            }),
              l.addEventListener("mouseout", () => {
                i();
              });
          });
      }
    });
  }
  window.addEventListener("load", () => {
    e();
  });
})();
(function () {
  const t = document.getElementById("mobile-nav-toggle"),
    r = document.getElementById("mobile-menu-holder");
  t?.addEventListener("click", () => {
    r.classList.toggle("mobile-menu-open"),
      r.classList.contains("mobile-menu-open")
        ? (document.body.style.overflow = "hidden")
        : (document.body.style.overflow = "unset");
  });
})();
function go() {
  const e = document.querySelectorAll("[data-modal]"),
    t = document.querySelector(".connector-search");
  e.forEach((r) => {
    r.addEventListener("click", (n) => {
      t || n.preventDefault();
      const o = r.getAttribute("data-modal"),
        i = document.getElementById(o);
      i && ((i.style.display = "block"), (document.body.style.overflowY = "hidden"));
    });
  });
}
go();
window.registerModalButtons = go;
const ho = () => {
  document.querySelectorAll(".modal-close").forEach((o) => {
    o.addEventListener("click", () => {
      const i = o.closest(".modal");
      i && r(i);
    });
  }),
    document.querySelectorAll(".modal").forEach((o) => {
      o.addEventListener("click", (i) => {
        i.target === o && r(o);
      });
    });
  function r(o) {
    (o.style.display = "none"), (document.body.style.overflowY = "unset"), n(o);
  }
  function n(o) {
    let i;
    var a = o.querySelectorAll("iframe"),
      s = o.querySelectorAll("video");
    a.forEach((u) => {
      var c = u.src;
      c.includes("vimeo") ? (i = { method: "pause", value: "true" }) : (i = { event: "command", func: "pauseVideo" }),
        u.contentWindow.postMessage(JSON.stringify(i), "*");
    }),
      s.forEach((u) => {
        u.pause();
      });
  }
};
ho();
window.registerModalOtherButtons = ho;
(function () {
  document.querySelectorAll("[data-tab]").forEach((e) => {
    const t = e.getAttribute("data-tab-active"),
      r = e.querySelectorAll("[data-tab-trigger]"),
      n = e.querySelectorAll("[data-tab-content]"),
      o = (i) => {
        r.forEach((u) => u.classList.remove("active")), n.forEach((u) => u.classList.remove("active"));
        const a = e.querySelector(`[data-tab-trigger="${i}"]`),
          s = e.querySelector(`[data-tab-content="${i}"]`);
        a && a.classList.add("active"), s && s.classList.add("active");
      };
    o(t || 0), r.forEach((i) => i.addEventListener("click", () => o(i.getAttribute("data-tab-trigger"))));
  });
})();
(function () {
  document.querySelectorAll("[data-faq]").forEach((e) => {
    const t = e.getAttribute("data-faq-active"),
      r = e.querySelector("[data-gtm-event]"),
      n = Array.from(e.querySelectorAll("[data-faq-trigger]")),
      o = Array.from(e.querySelectorAll("[data-faq-content]")),
      i = (a) => {
        const s = e.querySelector(`[data-faq-trigger="${a}"]`),
          u = e.querySelector(`[data-faq-content="${a}"]`);
        n.filter((c) => c !== s).forEach((c) => c.classList.remove("active")),
          o.filter((c) => c !== u).forEach((c) => c.classList.remove("active")),
          s && s.classList.toggle("active"),
          u && u.classList.toggle("active");
      };
    t && i(t),
      n.forEach((a) =>
        a.addEventListener("click", () => {
          if ((i(a.getAttribute("data-faq-trigger")), r && r.getAttribute("class").includes("active"))) {
            let s = r.getAttribute("id");
            dataLayer.push({ event: "expand_highlighted_story", story_click_id: s });
          }
        })
      );
  });
})();
function X(e) {
  return Array.isArray ? Array.isArray(e) : bo(e) === "[object Array]";
}
const Za = 1 / 0;
function es(e) {
  if (typeof e == "string") return e;
  let t = e + "";
  return t == "0" && 1 / e == -Za ? "-0" : t;
}
function ts(e) {
  return e == null ? "" : es(e);
}
function z(e) {
  return typeof e == "string";
}
function vo(e) {
  return typeof e == "number";
}
function rs(e) {
  return e === !0 || e === !1 || (ns(e) && bo(e) == "[object Boolean]");
}
function yo(e) {
  return typeof e == "object";
}
function ns(e) {
  return yo(e) && e !== null;
}
function B(e) {
  return e != null;
}
function qt(e) {
  return !e.trim().length;
}
function bo(e) {
  return e == null ? (e === void 0 ? "[object Undefined]" : "[object Null]") : Object.prototype.toString.call(e);
}
const os = "Incorrect 'index' type",
  is = (e) => `Invalid value for key ${e}`,
  as = (e) => `Pattern length exceeds max of ${e}.`,
  ss = (e) => `Missing ${e} property in key`,
  ls = (e) => `Property 'weight' in key '${e}' must be a positive integer`,
  Yr = Object.prototype.hasOwnProperty;
class cs {
  constructor(t) {
    (this._keys = []), (this._keyMap = {});
    let r = 0;
    t.forEach((n) => {
      let o = Oo(n);
      this._keys.push(o), (this._keyMap[o.id] = o), (r += o.weight);
    }),
      this._keys.forEach((n) => {
        n.weight /= r;
      });
  }
  get(t) {
    return this._keyMap[t];
  }
  keys() {
    return this._keys;
  }
  toJSON() {
    return JSON.stringify(this._keys);
  }
}
function Oo(e) {
  let t = null,
    r = null,
    n = null,
    o = 1,
    i = null;
  if (z(e) || X(e)) (n = e), (t = Jr(e)), (r = ir(e));
  else {
    if (!Yr.call(e, "name")) throw new Error(ss("name"));
    const a = e.name;
    if (((n = a), Yr.call(e, "weight") && ((o = e.weight), o <= 0))) throw new Error(ls(a));
    (t = Jr(a)), (r = ir(a)), (i = e.getFn);
  }
  return { path: t, id: r, weight: o, src: n, getFn: i };
}
function Jr(e) {
  return X(e) ? e : e.split(".");
}
function ir(e) {
  return X(e) ? e.join(".") : e;
}
function us(e, t) {
  let r = [],
    n = !1;
  const o = (i, a, s) => {
    if (B(i))
      if (!a[s]) r.push(i);
      else {
        let u = a[s];
        const c = i[u];
        if (!B(c)) return;
        if (s === a.length - 1 && (z(c) || vo(c) || rs(c))) r.push(ts(c));
        else if (X(c)) {
          n = !0;
          for (let f = 0, l = c.length; f < l; f += 1) o(c[f], a, s + 1);
        } else a.length && o(c, a, s + 1);
      }
  };
  return o(e, z(t) ? t.split(".") : t, 0), n ? r : r[0];
}
const fs = { includeMatches: !1, findAllMatches: !1, minMatchCharLength: 1 },
  ps = {
    isCaseSensitive: !1,
    includeScore: !1,
    keys: [],
    shouldSort: !0,
    sortFn: (e, t) => (e.score === t.score ? (e.idx < t.idx ? -1 : 1) : e.score < t.score ? -1 : 1)
  },
  ds = { location: 0, threshold: 0.6, distance: 100 },
  ms = { useExtendedSearch: !1, getFn: us, ignoreLocation: !1, ignoreFieldNorm: !1, fieldNormWeight: 1 };
var $ = { ...ps, ...fs, ...ds, ...ms };
const gs = /[^ ]+/g;
function hs(e = 1, t = 3) {
  const r = new Map(),
    n = Math.pow(10, t);
  return {
    get(o) {
      const i = o.match(gs).length;
      if (r.has(i)) return r.get(i);
      const a = 1 / Math.pow(i, 0.5 * e),
        s = parseFloat(Math.round(a * n) / n);
      return r.set(i, s), s;
    },
    clear() {
      r.clear();
    }
  };
}
class $r {
  constructor({ getFn: t = $.getFn, fieldNormWeight: r = $.fieldNormWeight } = {}) {
    (this.norm = hs(r, 3)), (this.getFn = t), (this.isCreated = !1), this.setIndexRecords();
  }
  setSources(t = []) {
    this.docs = t;
  }
  setIndexRecords(t = []) {
    this.records = t;
  }
  setKeys(t = []) {
    (this.keys = t),
      (this._keysMap = {}),
      t.forEach((r, n) => {
        this._keysMap[r.id] = n;
      });
  }
  create() {
    this.isCreated ||
      !this.docs.length ||
      ((this.isCreated = !0),
      z(this.docs[0])
        ? this.docs.forEach((t, r) => {
            this._addString(t, r);
          })
        : this.docs.forEach((t, r) => {
            this._addObject(t, r);
          }),
      this.norm.clear());
  }
  add(t) {
    const r = this.size();
    z(t) ? this._addString(t, r) : this._addObject(t, r);
  }
  removeAt(t) {
    this.records.splice(t, 1);
    for (let r = t, n = this.size(); r < n; r += 1) this.records[r].i -= 1;
  }
  getValueForItemAtKeyId(t, r) {
    return t[this._keysMap[r]];
  }
  size() {
    return this.records.length;
  }
  _addString(t, r) {
    if (!B(t) || qt(t)) return;
    let n = { v: t, i: r, n: this.norm.get(t) };
    this.records.push(n);
  }
  _addObject(t, r) {
    let n = { i: r, $: {} };
    this.keys.forEach((o, i) => {
      let a = o.getFn ? o.getFn(t) : this.getFn(t, o.path);
      if (B(a)) {
        if (X(a)) {
          let s = [];
          const u = [{ nestedArrIndex: -1, value: a }];
          for (; u.length; ) {
            const { nestedArrIndex: c, value: f } = u.pop();
            if (B(f))
              if (z(f) && !qt(f)) {
                let l = { v: f, i: c, n: this.norm.get(f) };
                s.push(l);
              } else
                X(f) &&
                  f.forEach((l, d) => {
                    u.push({ nestedArrIndex: d, value: l });
                  });
          }
          n.$[i] = s;
        } else if (z(a) && !qt(a)) {
          let s = { v: a, n: this.norm.get(a) };
          n.$[i] = s;
        }
      }
    }),
      this.records.push(n);
  }
  toJSON() {
    return { keys: this.keys, records: this.records };
  }
}
function _o(e, t, { getFn: r = $.getFn, fieldNormWeight: n = $.fieldNormWeight } = {}) {
  const o = new $r({ getFn: r, fieldNormWeight: n });
  return o.setKeys(e.map(Oo)), o.setSources(t), o.create(), o;
}
function vs(e, { getFn: t = $.getFn, fieldNormWeight: r = $.fieldNormWeight } = {}) {
  const { keys: n, records: o } = e,
    i = new $r({ getFn: t, fieldNormWeight: r });
  return i.setKeys(n), i.setIndexRecords(o), i;
}
function ft(
  e,
  {
    errors: t = 0,
    currentLocation: r = 0,
    expectedLocation: n = 0,
    distance: o = $.distance,
    ignoreLocation: i = $.ignoreLocation
  } = {}
) {
  const a = t / e.length;
  if (i) return a;
  const s = Math.abs(n - r);
  return o ? a + s / o : s ? 1 : a;
}
function ys(e = [], t = $.minMatchCharLength) {
  let r = [],
    n = -1,
    o = -1,
    i = 0;
  for (let a = e.length; i < a; i += 1) {
    let s = e[i];
    s && n === -1 ? (n = i) : !s && n !== -1 && ((o = i - 1), o - n + 1 >= t && r.push([n, o]), (n = -1));
  }
  return e[i - 1] && i - n >= t && r.push([n, i - 1]), r;
}
const ue = 32;
function bs(
  e,
  t,
  r,
  {
    location: n = $.location,
    distance: o = $.distance,
    threshold: i = $.threshold,
    findAllMatches: a = $.findAllMatches,
    minMatchCharLength: s = $.minMatchCharLength,
    includeMatches: u = $.includeMatches,
    ignoreLocation: c = $.ignoreLocation
  } = {}
) {
  if (t.length > ue) throw new Error(as(ue));
  const f = t.length,
    l = e.length,
    d = Math.max(0, Math.min(n, l));
  let p = i,
    m = d;
  const g = s > 1 || u,
    y = g ? Array(l) : [];
  let v;
  for (; (v = e.indexOf(t, m)) > -1; ) {
    let A = ft(t, { currentLocation: v, expectedLocation: d, distance: o, ignoreLocation: c });
    if (((p = Math.min(A, p)), (m = v + f), g)) {
      let h = 0;
      for (; h < f; ) (y[v + h] = 1), (h += 1);
    }
  }
  m = -1;
  let _ = [],
    w = 1,
    S = f + l;
  const I = 1 << (f - 1);
  for (let A = 0; A < f; A += 1) {
    let h = 0,
      b = S;
    for (; h < b; )
      ft(t, { errors: A, currentLocation: d + b, expectedLocation: d, distance: o, ignoreLocation: c }) <= p
        ? (h = b)
        : (S = b),
        (b = Math.floor((S - h) / 2 + h));
    S = b;
    let O = Math.max(1, d - b + 1),
      P = a ? l : Math.min(d + b, l) + f,
      C = Array(P + 2);
    C[P + 1] = (1 << A) - 1;
    for (let M = P; M >= O; M -= 1) {
      let x = M - 1,
        W = r[e.charAt(x)];
      if (
        (g && (y[x] = +!!W),
        (C[M] = ((C[M + 1] << 1) | 1) & W),
        A && (C[M] |= ((_[M + 1] | _[M]) << 1) | 1 | _[M + 1]),
        C[M] & I &&
          ((w = ft(t, { errors: A, currentLocation: x, expectedLocation: d, distance: o, ignoreLocation: c })), w <= p))
      ) {
        if (((p = w), (m = x), m <= d)) break;
        O = Math.max(1, 2 * d - m);
      }
    }
    if (ft(t, { errors: A + 1, currentLocation: d, expectedLocation: d, distance: o, ignoreLocation: c }) > p) break;
    _ = C;
  }
  const E = { isMatch: m >= 0, score: Math.max(0.001, w) };
  if (g) {
    const A = ys(y, s);
    A.length ? u && (E.indices = A) : (E.isMatch = !1);
  }
  return E;
}
function Os(e) {
  let t = {};
  for (let r = 0, n = e.length; r < n; r += 1) {
    const o = e.charAt(r);
    t[o] = (t[o] || 0) | (1 << (n - r - 1));
  }
  return t;
}
class So {
  constructor(
    t,
    {
      location: r = $.location,
      threshold: n = $.threshold,
      distance: o = $.distance,
      includeMatches: i = $.includeMatches,
      findAllMatches: a = $.findAllMatches,
      minMatchCharLength: s = $.minMatchCharLength,
      isCaseSensitive: u = $.isCaseSensitive,
      ignoreLocation: c = $.ignoreLocation
    } = {}
  ) {
    if (
      ((this.options = {
        location: r,
        threshold: n,
        distance: o,
        includeMatches: i,
        findAllMatches: a,
        minMatchCharLength: s,
        isCaseSensitive: u,
        ignoreLocation: c
      }),
      (this.pattern = u ? t : t.toLowerCase()),
      (this.chunks = []),
      !this.pattern.length)
    )
      return;
    const f = (d, p) => {
        this.chunks.push({ pattern: d, alphabet: Os(d), startIndex: p });
      },
      l = this.pattern.length;
    if (l > ue) {
      let d = 0;
      const p = l % ue,
        m = l - p;
      for (; d < m; ) f(this.pattern.substr(d, ue), d), (d += ue);
      if (p) {
        const g = l - ue;
        f(this.pattern.substr(g), g);
      }
    } else f(this.pattern, 0);
  }
  searchIn(t) {
    const { isCaseSensitive: r, includeMatches: n } = this.options;
    if ((r || (t = t.toLowerCase()), this.pattern === t)) {
      let m = { isMatch: !0, score: 0 };
      return n && (m.indices = [[0, t.length - 1]]), m;
    }
    const {
      location: o,
      distance: i,
      threshold: a,
      findAllMatches: s,
      minMatchCharLength: u,
      ignoreLocation: c
    } = this.options;
    let f = [],
      l = 0,
      d = !1;
    this.chunks.forEach(({ pattern: m, alphabet: g, startIndex: y }) => {
      const {
        isMatch: v,
        score: _,
        indices: w
      } = bs(t, m, g, {
        location: o + y,
        distance: i,
        threshold: a,
        findAllMatches: s,
        minMatchCharLength: u,
        includeMatches: n,
        ignoreLocation: c
      });
      v && (d = !0), (l += _), v && w && (f = [...f, ...w]);
    });
    let p = { isMatch: d, score: d ? l / this.chunks.length : 1 };
    return d && n && (p.indices = f), p;
  }
}
class ne {
  constructor(t) {
    this.pattern = t;
  }
  static isMultiMatch(t) {
    return Xr(t, this.multiRegex);
  }
  static isSingleMatch(t) {
    return Xr(t, this.singleRegex);
  }
  search() {}
}
function Xr(e, t) {
  const r = e.match(t);
  return r ? r[1] : null;
}
class _s extends ne {
  constructor(t) {
    super(t);
  }
  static get type() {
    return "exact";
  }
  static get multiRegex() {
    return /^="(.*)"$/;
  }
  static get singleRegex() {
    return /^=(.*)$/;
  }
  search(t) {
    const r = t === this.pattern;
    return { isMatch: r, score: r ? 0 : 1, indices: [0, this.pattern.length - 1] };
  }
}
class Ss extends ne {
  constructor(t) {
    super(t);
  }
  static get type() {
    return "inverse-exact";
  }
  static get multiRegex() {
    return /^!"(.*)"$/;
  }
  static get singleRegex() {
    return /^!(.*)$/;
  }
  search(t) {
    const n = t.indexOf(this.pattern) === -1;
    return { isMatch: n, score: n ? 0 : 1, indices: [0, t.length - 1] };
  }
}
class ws extends ne {
  constructor(t) {
    super(t);
  }
  static get type() {
    return "prefix-exact";
  }
  static get multiRegex() {
    return /^\^"(.*)"$/;
  }
  static get singleRegex() {
    return /^\^(.*)$/;
  }
  search(t) {
    const r = t.startsWith(this.pattern);
    return { isMatch: r, score: r ? 0 : 1, indices: [0, this.pattern.length - 1] };
  }
}
class Ps extends ne {
  constructor(t) {
    super(t);
  }
  static get type() {
    return "inverse-prefix-exact";
  }
  static get multiRegex() {
    return /^!\^"(.*)"$/;
  }
  static get singleRegex() {
    return /^!\^(.*)$/;
  }
  search(t) {
    const r = !t.startsWith(this.pattern);
    return { isMatch: r, score: r ? 0 : 1, indices: [0, t.length - 1] };
  }
}
class Is extends ne {
  constructor(t) {
    super(t);
  }
  static get type() {
    return "suffix-exact";
  }
  static get multiRegex() {
    return /^"(.*)"\$$/;
  }
  static get singleRegex() {
    return /^(.*)\$$/;
  }
  search(t) {
    const r = t.endsWith(this.pattern);
    return { isMatch: r, score: r ? 0 : 1, indices: [t.length - this.pattern.length, t.length - 1] };
  }
}
class Es extends ne {
  constructor(t) {
    super(t);
  }
  static get type() {
    return "inverse-suffix-exact";
  }
  static get multiRegex() {
    return /^!"(.*)"\$$/;
  }
  static get singleRegex() {
    return /^!(.*)\$$/;
  }
  search(t) {
    const r = !t.endsWith(this.pattern);
    return { isMatch: r, score: r ? 0 : 1, indices: [0, t.length - 1] };
  }
}
class wo extends ne {
  constructor(
    t,
    {
      location: r = $.location,
      threshold: n = $.threshold,
      distance: o = $.distance,
      includeMatches: i = $.includeMatches,
      findAllMatches: a = $.findAllMatches,
      minMatchCharLength: s = $.minMatchCharLength,
      isCaseSensitive: u = $.isCaseSensitive,
      ignoreLocation: c = $.ignoreLocation
    } = {}
  ) {
    super(t),
      (this._bitapSearch = new So(t, {
        location: r,
        threshold: n,
        distance: o,
        includeMatches: i,
        findAllMatches: a,
        minMatchCharLength: s,
        isCaseSensitive: u,
        ignoreLocation: c
      }));
  }
  static get type() {
    return "fuzzy";
  }
  static get multiRegex() {
    return /^"(.*)"$/;
  }
  static get singleRegex() {
    return /^(.*)$/;
  }
  search(t) {
    return this._bitapSearch.searchIn(t);
  }
}
class Po extends ne {
  constructor(t) {
    super(t);
  }
  static get type() {
    return "include";
  }
  static get multiRegex() {
    return /^'"(.*)"$/;
  }
  static get singleRegex() {
    return /^'(.*)$/;
  }
  search(t) {
    let r = 0,
      n;
    const o = [],
      i = this.pattern.length;
    for (; (n = t.indexOf(this.pattern, r)) > -1; ) (r = n + i), o.push([n, r - 1]);
    const a = !!o.length;
    return { isMatch: a, score: a ? 0 : 1, indices: o };
  }
}
const ar = [_s, Po, ws, Ps, Es, Is, Ss, wo],
  Zr = ar.length,
  As = / +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,
  $s = "|";
function js(e, t = {}) {
  return e.split($s).map((r) => {
    let n = r
        .trim()
        .split(As)
        .filter((i) => i && !!i.trim()),
      o = [];
    for (let i = 0, a = n.length; i < a; i += 1) {
      const s = n[i];
      let u = !1,
        c = -1;
      for (; !u && ++c < Zr; ) {
        const f = ar[c];
        let l = f.isMultiMatch(s);
        l && (o.push(new f(l, t)), (u = !0));
      }
      if (!u)
        for (c = -1; ++c < Zr; ) {
          const f = ar[c];
          let l = f.isSingleMatch(s);
          if (l) {
            o.push(new f(l, t));
            break;
          }
        }
    }
    return o;
  });
}
const Cs = new Set([wo.type, Po.type]);
class xs {
  constructor(
    t,
    {
      isCaseSensitive: r = $.isCaseSensitive,
      includeMatches: n = $.includeMatches,
      minMatchCharLength: o = $.minMatchCharLength,
      ignoreLocation: i = $.ignoreLocation,
      findAllMatches: a = $.findAllMatches,
      location: s = $.location,
      threshold: u = $.threshold,
      distance: c = $.distance
    } = {}
  ) {
    (this.query = null),
      (this.options = {
        isCaseSensitive: r,
        includeMatches: n,
        minMatchCharLength: o,
        findAllMatches: a,
        ignoreLocation: i,
        location: s,
        threshold: u,
        distance: c
      }),
      (this.pattern = r ? t : t.toLowerCase()),
      (this.query = js(this.pattern, this.options));
  }
  static condition(t, r) {
    return r.useExtendedSearch;
  }
  searchIn(t) {
    const r = this.query;
    if (!r) return { isMatch: !1, score: 1 };
    const { includeMatches: n, isCaseSensitive: o } = this.options;
    t = o ? t : t.toLowerCase();
    let i = 0,
      a = [],
      s = 0;
    for (let u = 0, c = r.length; u < c; u += 1) {
      const f = r[u];
      (a.length = 0), (i = 0);
      for (let l = 0, d = f.length; l < d; l += 1) {
        const p = f[l],
          { isMatch: m, indices: g, score: y } = p.search(t);
        if (m) {
          if (((i += 1), (s += y), n)) {
            const v = p.constructor.type;
            Cs.has(v) ? (a = [...a, ...g]) : a.push(g);
          }
        } else {
          (s = 0), (i = 0), (a.length = 0);
          break;
        }
      }
      if (i) {
        let l = { isMatch: !0, score: s / i };
        return n && (l.indices = a), l;
      }
    }
    return { isMatch: !1, score: 1 };
  }
}
const sr = [];
function Ts(...e) {
  sr.push(...e);
}
function lr(e, t) {
  for (let r = 0, n = sr.length; r < n; r += 1) {
    let o = sr[r];
    if (o.condition(e, t)) return new o(e, t);
  }
  return new So(e, t);
}
const Et = { AND: "$and", OR: "$or" },
  cr = { PATH: "$path", PATTERN: "$val" },
  ur = (e) => !!(e[Et.AND] || e[Et.OR]),
  Ds = (e) => !!e[cr.PATH],
  Ls = (e) => !X(e) && yo(e) && !ur(e),
  en = (e) => ({ [Et.AND]: Object.keys(e).map((t) => ({ [t]: e[t] })) });
function Io(e, t, { auto: r = !0 } = {}) {
  const n = (o) => {
    let i = Object.keys(o);
    const a = Ds(o);
    if (!a && i.length > 1 && !ur(o)) return n(en(o));
    if (Ls(o)) {
      const u = a ? o[cr.PATH] : i[0],
        c = a ? o[cr.PATTERN] : o[u];
      if (!z(c)) throw new Error(is(u));
      const f = { keyId: ir(u), pattern: c };
      return r && (f.searcher = lr(c, t)), f;
    }
    let s = { children: [], operator: i[0] };
    return (
      i.forEach((u) => {
        const c = o[u];
        X(c) &&
          c.forEach((f) => {
            s.children.push(n(f));
          });
      }),
      s
    );
  };
  return ur(e) || (e = en(e)), n(e);
}
function Ns(e, { ignoreFieldNorm: t = $.ignoreFieldNorm }) {
  e.forEach((r) => {
    let n = 1;
    r.matches.forEach(({ key: o, norm: i, score: a }) => {
      const s = o ? o.weight : null;
      n *= Math.pow(a === 0 && s ? Number.EPSILON : a, (s || 1) * (t ? 1 : i));
    }),
      (r.score = n);
  });
}
function Ms(e, t) {
  const r = e.matches;
  (t.matches = []),
    B(r) &&
      r.forEach((n) => {
        if (!B(n.indices) || !n.indices.length) return;
        const { indices: o, value: i } = n;
        let a = { indices: o, value: i };
        n.key && (a.key = n.key.src), n.idx > -1 && (a.refIndex = n.idx), t.matches.push(a);
      });
}
function Rs(e, t) {
  t.score = e.score;
}
function ks(e, t, { includeMatches: r = $.includeMatches, includeScore: n = $.includeScore } = {}) {
  const o = [];
  return (
    r && o.push(Ms),
    n && o.push(Rs),
    e.map((i) => {
      const { idx: a } = i,
        s = { item: t[a], refIndex: a };
      return (
        o.length &&
          o.forEach((u) => {
            u(i, s);
          }),
        s
      );
    })
  );
}
class Ae {
  constructor(t, r = {}, n) {
    (this.options = { ...$, ...r }),
      this.options.useExtendedSearch,
      (this._keyStore = new cs(this.options.keys)),
      this.setCollection(t, n);
  }
  setCollection(t, r) {
    if (((this._docs = t), r && !(r instanceof $r))) throw new Error(os);
    this._myIndex =
      r ||
      _o(this.options.keys, this._docs, { getFn: this.options.getFn, fieldNormWeight: this.options.fieldNormWeight });
  }
  add(t) {
    B(t) && (this._docs.push(t), this._myIndex.add(t));
  }
  remove(t = () => !1) {
    const r = [];
    for (let n = 0, o = this._docs.length; n < o; n += 1) {
      const i = this._docs[n];
      t(i, n) && (this.removeAt(n), (n -= 1), (o -= 1), r.push(i));
    }
    return r;
  }
  removeAt(t) {
    this._docs.splice(t, 1), this._myIndex.removeAt(t);
  }
  getIndex() {
    return this._myIndex;
  }
  search(t, { limit: r = -1 } = {}) {
    const { includeMatches: n, includeScore: o, shouldSort: i, sortFn: a, ignoreFieldNorm: s } = this.options;
    let u = z(t) ? (z(this._docs[0]) ? this._searchStringList(t) : this._searchObjectList(t)) : this._searchLogical(t);
    return (
      Ns(u, { ignoreFieldNorm: s }),
      i && u.sort(a),
      vo(r) && r > -1 && (u = u.slice(0, r)),
      ks(u, this._docs, { includeMatches: n, includeScore: o })
    );
  }
  _searchStringList(t) {
    const r = lr(t, this.options),
      { records: n } = this._myIndex,
      o = [];
    return (
      n.forEach(({ v: i, i: a, n: s }) => {
        if (!B(i)) return;
        const { isMatch: u, score: c, indices: f } = r.searchIn(i);
        u && o.push({ item: i, idx: a, matches: [{ score: c, value: i, norm: s, indices: f }] });
      }),
      o
    );
  }
  _searchLogical(t) {
    const r = Io(t, this.options),
      n = (s, u, c) => {
        if (!s.children) {
          const { keyId: l, searcher: d } = s,
            p = this._findMatches({
              key: this._keyStore.get(l),
              value: this._myIndex.getValueForItemAtKeyId(u, l),
              searcher: d
            });
          return p && p.length ? [{ idx: c, item: u, matches: p }] : [];
        }
        const f = [];
        for (let l = 0, d = s.children.length; l < d; l += 1) {
          const p = s.children[l],
            m = n(p, u, c);
          if (m.length) f.push(...m);
          else if (s.operator === Et.AND) return [];
        }
        return f;
      },
      o = this._myIndex.records,
      i = {},
      a = [];
    return (
      o.forEach(({ $: s, i: u }) => {
        if (B(s)) {
          let c = n(r, s, u);
          c.length &&
            (i[u] || ((i[u] = { idx: u, item: s, matches: [] }), a.push(i[u])),
            c.forEach(({ matches: f }) => {
              i[u].matches.push(...f);
            }));
        }
      }),
      a
    );
  }
  _searchObjectList(t) {
    const r = lr(t, this.options),
      { keys: n, records: o } = this._myIndex,
      i = [];
    return (
      o.forEach(({ $: a, i: s }) => {
        if (!B(a)) return;
        let u = [];
        n.forEach((c, f) => {
          u.push(...this._findMatches({ key: c, value: a[f], searcher: r }));
        }),
          u.length && i.push({ idx: s, item: a, matches: u });
      }),
      i
    );
  }
  _findMatches({ key: t, value: r, searcher: n }) {
    if (!B(r)) return [];
    let o = [];
    if (X(r))
      r.forEach(({ v: i, i: a, n: s }) => {
        if (!B(i)) return;
        const { isMatch: u, score: c, indices: f } = n.searchIn(i);
        u && o.push({ score: c, key: t, value: i, idx: a, norm: s, indices: f });
      });
    else {
      const { v: i, n: a } = r,
        { isMatch: s, score: u, indices: c } = n.searchIn(i);
      s && o.push({ score: u, key: t, value: i, norm: a, indices: c });
    }
    return o;
  }
}
Ae.version = "7.0.0";
Ae.createIndex = _o;
Ae.parseIndex = vs;
Ae.config = $;
Ae.parseQuery = Io;
Ts(xs);
const qs = new Event("make-active-filter");
(function () {
  window.addEventListener("load", () => {
    let r = document.querySelector(".init-search");
    if (!r) return;
    let n;
    r.addEventListener("input", (o) => {
      (n = o.target.value), n && document.dispatchEvent(qs);
      let i = document.querySelectorAll("[data-search-id]");
      if (n === "") {
        console.log("No value given");
        for (const l of i) l.style.display = "block";
        return;
      }
      const a = Array.from(i).map((l, d) => {
          const { searchId: p, searchTitle: m, searchCategory: g, searchType: y } = l.dataset;
          return { searchId: p, searchTitle: m, searchCategory: g, searchType: y };
        }),
        s = { includeScore: !0, threshold: 0.2, keys: ["searchTitle"] },
        c = new Ae(a, s).search(n);
      t(n);
      const f = c.map((l, d) => l.item.searchId);
      for (const l of i) f.includes(l.dataset.searchId) ? (l.style.display = "block") : (l.style.display = "none");
    });
  });
  function e(r, n) {
    let o;
    return function (...i) {
      clearTimeout(o),
        (o = setTimeout(() => {
          r.apply(this, i);
        }, n));
    };
  }
  const t = e((r) => {
    console.log("searchTerm", r), window.dataLayer && window.dataLayer.push({ event: "user-searched", search_term: r });
  }, 900);
})();
(function () {
  const e = Array.from(document.querySelectorAll("[data-filter-btn]")),
    t = window.location.hash.replace("#", ""),
    r = () => {
      const i = document.querySelector(".ais-SearchBox-input");
      i &&
        ((i.value = ""),
        new URLSearchParams(window.location.search).get("query") &&
          history.pushState(null, "", window.location.pathname));
    },
    n = () => {
      const i = window.location.hash.replace("#", "");
      console.log("Calling apply Filter", i),
        Array.from(document.querySelectorAll("[data-filter-item]")).forEach((s) => {
          const u = s.parentElement;
          if (i === "all") {
            (s.style.display = "flex"), (u.style.display = "block");
            return;
          }
          s.dataset.filterItem === i
            ? ((s.style.display = "flex"), (u.style.display = "block"))
            : ((s.style.display = "none"), (u.style.display = "none"));
        });
    },
    o = (i, a = !1) => {
      if ((a && r(), !i)) return;
      const s = document.querySelector(`[data-filter-btn="${i}"]`);
      s && ((window.location.hash = i), e.forEach((u) => u.classList.remove("active")), s.classList.add("active"));
    };
  o(t || "all", !0),
    e.forEach((i) => {
      i.addEventListener("click", () => {
        o(i.dataset.filterBtn, !0), window.screen.width >= 768 && window.scrollTo(0, 363);
      });
    }),
    document.addEventListener(
      "make-active-filter-all",
      (i) => {
        console.log("calling this make-active-filter"), o("all");
      },
      !1
    ),
    document.addEventListener("make-current-filter-active", (i) => {
      n();
    });
})();
function Bs() {
  const e = document.createElement("script");
  (e.defer = !0),
    (e.src = "https://player.vimeo.com/api/player.js"),
    document.body.appendChild(e),
    e.addEventListener("load", () => {
      document.querySelectorAll("[data-video-player]").forEach((r) => {
        console.log("-----s", r);
        var n = new window.Vimeo.Player(r);
        if ((r.dataset.playOnLoad && n.play(), n.setVolume(0), n.on("play", function () {}), window.innerWidth < 500))
          return;
        function o() {
          var i = 0.8,
            a = r.offsetLeft,
            s = r.offsetTop,
            u = r.offsetWidth,
            c = r.offsetHeight,
            f = a + u,
            l = s + c,
            d,
            p,
            m;
          (d = Math.max(0, Math.min(u, window.pageXOffset + window.innerWidth - a, f - window.pageXOffset))),
            (p = Math.max(0, Math.min(c, window.pageYOffset + window.innerHeight - s, l - window.pageYOffset))),
            (m = (d * p) / (u * c));
          const g = n.currentTime > 0 && !n.paused && !n.ended && n.readyState > n.HAVE_CURRENT_DATA;
          m < i && !t(r) && g ? n.pause() : m < i && !g ? n.play() : g && n.pause();
        }
        r.dataset.planOnScroll !== !1 &&
          (window.addEventListener("scroll", o, !1, { passive: !0 }), window.addEventListener("resize", o, !1));
      });
    });
  function t(r) {
    for (var n = r.offsetTop, o = r.offsetLeft, i = r.offsetWidth, a = r.offsetHeight; r.offsetParent; )
      (r = r.offsetParent), (n += r.offsetTop), (o += r.offsetLeft);
    return (
      n < window.pageYOffset + window.innerHeight &&
      o < window.pageXOffset + window.innerWidth &&
      n + a > window.pageYOffset &&
      o + i > window.pageXOffset
    );
  }
}
window.addEventListener("load", (e) => {
  Bs();
});
(function () {
  document.querySelectorAll("[data-click-play-trigger]").forEach((e) => {
    const t = e.dataset.clickPlayTrigger,
      r = document.querySelector(`[data-click-play-player="${t}"]`),
      n = document.querySelector(`[data-click-play-icon="${t}"]`);
    e.addEventListener("click", () => {
      if (((i) => i.currentTime > 0 && !i.paused && !i.ended && i.readyState > 2)(r))
        return (n.style.display = "block"), r.pause();
      (n.style.display = "none"), r.play(), !(window.innerWidth < 500) && (r.muted = !1);
    });
  });
})();
const Fs = "400px",
  Eo = new IntersectionObserver(
    (e) => {
      e.forEach((t) => {
        t.isIntersecting &&
          ((t.target.style.backgroundImage = `url(${t.target.dataset.src})`),
          t.target.classList.remove("lazy-bg"),
          Eo.unobserve(t.target));
      });
    },
    { rootMargin: `0px 0px ${Fs} 0px` }
  );
document.querySelectorAll(".lazy-bg").forEach((e) => {
  Eo.observe(e);
});
window.addEventListener("DOMContentLoaded", () => {
  document.location.hostname === "events.atlan.com" &&
    document.querySelectorAll("a").forEach((r) => {
      r.href = r.href.replace("events.atlan.com", "atlan.com");
    });
});
/*! lozad.js - v1.16.0 - 2020-09-06
 * https://github.com/ApoorvSaxena/lozad.js
 * Copyright (c) 2020 Apoorv Saxena; Licensed MIT */ const Hs = typeof document < "u" && document.documentMode,
  Ws = {
    rootMargin: "0px",
    threshold: 0,
    load(e) {
      if (e.nodeName.toLowerCase() === "picture") {
        let r = e.querySelector("img"),
          n = !1;
        r === null && ((r = document.createElement("img")), (n = !0)),
          Hs && e.getAttribute("data-iesrc") && (r.src = e.getAttribute("data-iesrc")),
          e.getAttribute("data-alt") && (r.alt = e.getAttribute("data-alt")),
          n && e.append(r);
      }
      if (e.nodeName.toLowerCase() === "video" && !e.getAttribute("data-src") && e.children) {
        const r = e.children;
        let n;
        for (let o = 0; o <= r.length - 1; o++) (n = r[o].getAttribute("data-src")), n && (r[o].src = n);
        e.load();
      }
      e.getAttribute("data-poster") && (e.poster = e.getAttribute("data-poster")),
        e.getAttribute("data-src") && (e.src = e.getAttribute("data-src")),
        e.getAttribute("data-srcset") && e.setAttribute("srcset", e.getAttribute("data-srcset"));
      let t = ",";
      if (
        (e.getAttribute("data-background-delimiter") && (t = e.getAttribute("data-background-delimiter")),
        e.getAttribute("data-background-image"))
      )
        e.style.backgroundImage = `url('${e.getAttribute("data-background-image").split(t).join("'),url('")}')`;
      else if (e.getAttribute("data-background-image-set")) {
        const r = e.getAttribute("data-background-image-set").split(t);
        let n = r[0].substr(0, r[0].indexOf(" ")) || r[0];
        (n = n.indexOf("url(") === -1 ? `url(${n})` : n),
          r.length === 1
            ? (e.style.backgroundImage = n)
            : e.setAttribute(
                "style",
                (e.getAttribute("style") || "") +
                  `background-image: ${n}; background-image: -webkit-image-set(${r}); background-image: image-set(${r})`
              );
      }
      e.getAttribute("data-toggle-class") && e.classList.toggle(e.getAttribute("data-toggle-class"));
    },
    loaded() {}
  };
function fr(e) {
  e.setAttribute("data-loaded", !0);
}
function Ks(e) {
  e.getAttribute("data-placeholder-background") && (e.style.background = e.getAttribute("data-placeholder-background"));
}
const pr = (e) => e.getAttribute("data-loaded") === "true",
  Us = (e, t) => (r, n) => {
    r.forEach((o) => {
      (o.intersectionRatio > 0 || o.isIntersecting) &&
        (n.unobserve(o.target), pr(o.target) || (e(o.target), fr(o.target), t(o.target)));
    });
  },
  tn = (e, t = document) => (e instanceof Element ? [e] : e instanceof NodeList ? e : t.querySelectorAll(e));
function Vs(e = ".lozad", t = {}) {
  const { root: r, rootMargin: n, threshold: o, load: i, loaded: a } = Object.assign({}, Ws, t);
  let s;
  typeof window < "u" &&
    window.IntersectionObserver &&
    (s = new IntersectionObserver(Us(i, a), { root: r, rootMargin: n, threshold: o }));
  const u = tn(e, r);
  for (let c = 0; c < u.length; c++) Ks(u[c]);
  return {
    observe() {
      const c = tn(e, r);
      for (let f = 0; f < c.length; f++)
        if (!pr(c[f])) {
          if (s) {
            s.observe(c[f]);
            continue;
          }
          i(c[f]), fr(c[f]), a(c[f]);
        }
    },
    triggerLoad(c) {
      pr(c) || (i(c), fr(c), a(c));
    },
    observer: s
  };
}
function zs() {
  Vs().observe();
}
zs();
function xe(e) {
  return { current: e };
}
function At(e, t) {
  var r = void 0;
  return function () {
    for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++) o[i] = arguments[i];
    r && clearTimeout(r),
      (r = setTimeout(function () {
        return e.apply(void 0, o);
      }, t));
  };
}
function ke(e) {
  return e.reduce(function (t, r) {
    return t.concat(r);
  }, []);
}
var Gs = 0;
function Ao() {
  return "autocomplete-".concat(Gs++);
}
function $t(e, t) {
  return t.reduce(function (r, n) {
    return r && r[n];
  }, e);
}
function qe(e) {
  return e.collections.length === 0
    ? 0
    : e.collections.reduce(function (t, r) {
        return t + r.items.length;
      }, 0);
}
function rn(e) {
  return e !== Object(e);
}
function $o(e, t) {
  if (e === t) return !0;
  if (rn(e) || rn(t) || typeof e == "function" || typeof t == "function") return e === t;
  if (Object.keys(e).length !== Object.keys(t).length) return !1;
  for (var r = 0, n = Object.keys(e); r < n.length; r++) {
    var o = n[r];
    if (!(o in t) || !$o(e[o], t[o])) return !1;
  }
  return !0;
}
var jt = function () {};
function Qs(e) {
  if (typeof window < "u") return e({ window });
}
var jo = "1.17.2",
  Co = [{ segment: "autocomplete-core", version: jo }];
function nn(e) {
  var t = e.item,
    r = e.items,
    n = r === void 0 ? [] : r;
  return {
    index: t.__autocomplete_indexName,
    items: [t],
    positions: [
      1 +
        n.findIndex(function (o) {
          return o.objectID === t.objectID;
        })
    ],
    queryID: t.__autocomplete_queryID,
    algoliaSource: ["autocomplete"]
  };
}
function Ys(e, t) {
  return el(e) || Zs(e, t) || Xs(e, t) || Js();
}
function Js() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Xs(e, t) {
  if (e) {
    if (typeof e == "string") return on(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if ((r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")) return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return on(e, t);
  }
}
function on(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Zs(e, t) {
  var r = e == null ? null : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r != null) {
    var n,
      o,
      i,
      a,
      s = [],
      u = !0,
      c = !1;
    try {
      if (((i = (r = r.call(e)).next), t !== 0))
        for (; !(u = (n = i.call(r)).done) && (s.push(n.value), s.length !== t); u = !0);
    } catch (f) {
      (c = !0), (o = f);
    } finally {
      try {
        if (!u && r.return != null && ((a = r.return()), Object(a) !== a)) return;
      } finally {
        if (c) throw o;
      }
    }
    return s;
  }
}
function el(e) {
  if (Array.isArray(e)) return e;
}
function tl(e) {
  var t = (e.version || "").split(".").map(Number),
    r = Ys(t, 2),
    n = r[0],
    o = r[1],
    i = n >= 3,
    a = n === 2 && o >= 4,
    s = n === 1 && o >= 10;
  return i || a || s;
}
var rl = ["items"],
  nl = ["items"];
function Be(e) {
  "@babel/helpers - typeof";
  return (
    (Be =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Be(e)
  );
}
function pt(e) {
  return sl(e) || al(e) || il(e) || ol();
}
function ol() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function il(e, t) {
  if (e) {
    if (typeof e == "string") return dr(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if ((r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")) return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return dr(e, t);
  }
}
function al(e) {
  if ((typeof Symbol < "u" && e[Symbol.iterator] != null) || e["@@iterator"] != null) return Array.from(e);
}
function sl(e) {
  if (Array.isArray(e)) return dr(e);
}
function dr(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function xo(e, t) {
  if (e == null) return {};
  var r = ll(e, t),
    n,
    o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      (n = i[o]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function ll(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    o,
    i;
  for (i = 0; i < n.length; i++) (o = n[i]), !(t.indexOf(o) >= 0) && (r[o] = e[o]);
  return r;
}
function an(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Ie(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? an(Object(r), !0).forEach(function (n) {
          cl(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : an(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function cl(e, t, r) {
  return (
    (t = ul(t)),
    t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
    e
  );
}
function ul(e) {
  var t = fl(e, "string");
  return Be(t) === "symbol" ? t : String(t);
}
function fl(e, t) {
  if (Be(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Be(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function pl(e) {
  for (
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 20, r = [], n = 0;
    n < e.objectIDs.length;
    n += t
  )
    r.push(Ie(Ie({}, e), {}, { objectIDs: e.objectIDs.slice(n, n + t) }));
  return r;
}
function dt(e) {
  return e.map(function (t) {
    var r = t.items,
      n = xo(t, rl);
    return Ie(
      Ie({}, n),
      {},
      {
        objectIDs:
          r?.map(function (o) {
            var i = o.objectID;
            return i;
          }) || n.objectIDs
      }
    );
  });
}
function dl(e) {
  var t = tl(e);
  function r(n, o, i) {
    if (t && typeof i < "u") {
      var a = i[0].__autocomplete_algoliaCredentials,
        s = a.appId,
        u = a.apiKey,
        c = { "X-Algolia-Application-Id": s, "X-Algolia-API-Key": u };
      e.apply(void 0, [n].concat(pt(o), [{ headers: c }]));
    } else e.apply(void 0, [n].concat(pt(o)));
  }
  return {
    init: function (o, i) {
      e("init", { appId: o, apiKey: i });
    },
    setAuthenticatedUserToken: function (o) {
      e("setAuthenticatedUserToken", o);
    },
    setUserToken: function (o) {
      e("setUserToken", o);
    },
    clickedObjectIDsAfterSearch: function () {
      for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++) i[a] = arguments[a];
      i.length > 0 && r("clickedObjectIDsAfterSearch", dt(i), i[0].items);
    },
    clickedObjectIDs: function () {
      for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++) i[a] = arguments[a];
      i.length > 0 && r("clickedObjectIDs", dt(i), i[0].items);
    },
    clickedFilters: function () {
      for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++) i[a] = arguments[a];
      i.length > 0 && e.apply(void 0, ["clickedFilters"].concat(i));
    },
    convertedObjectIDsAfterSearch: function () {
      for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++) i[a] = arguments[a];
      i.length > 0 && r("convertedObjectIDsAfterSearch", dt(i), i[0].items);
    },
    convertedObjectIDs: function () {
      for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++) i[a] = arguments[a];
      i.length > 0 && r("convertedObjectIDs", dt(i), i[0].items);
    },
    convertedFilters: function () {
      for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++) i[a] = arguments[a];
      i.length > 0 && e.apply(void 0, ["convertedFilters"].concat(i));
    },
    viewedObjectIDs: function () {
      for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++) i[a] = arguments[a];
      i.length > 0 &&
        i
          .reduce(function (s, u) {
            var c = u.items,
              f = xo(u, nl);
            return [].concat(
              pt(s),
              pt(
                pl(
                  Ie(
                    Ie({}, f),
                    {},
                    {
                      objectIDs:
                        c?.map(function (l) {
                          var d = l.objectID;
                          return d;
                        }) || f.objectIDs
                    }
                  )
                ).map(function (l) {
                  return { items: c, payload: l };
                })
              )
            );
          }, [])
          .forEach(function (s) {
            var u = s.items,
              c = s.payload;
            return r("viewedObjectIDs", [c], u);
          });
    },
    viewedFilters: function () {
      for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++) i[a] = arguments[a];
      i.length > 0 && e.apply(void 0, ["viewedFilters"].concat(i));
    }
  };
}
function ml(e) {
  var t = e.items,
    r = t.reduce(function (n, o) {
      var i;
      return (
        (n[o.__autocomplete_indexName] = ((i = n[o.__autocomplete_indexName]) !== null && i !== void 0 ? i : []).concat(
          o
        )),
        n
      );
    }, {});
  return Object.keys(r).map(function (n) {
    var o = r[n];
    return { index: n, items: o, algoliaSource: ["autocomplete"] };
  });
}
function je(e) {
  return e.objectID && e.__autocomplete_indexName && e.__autocomplete_queryID;
}
function Fe(e) {
  "@babel/helpers - typeof";
  return (
    (Fe =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Fe(e)
  );
}
function Ee(e) {
  return yl(e) || vl(e) || hl(e) || gl();
}
function gl() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function hl(e, t) {
  if (e) {
    if (typeof e == "string") return mr(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if ((r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")) return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return mr(e, t);
  }
}
function vl(e) {
  if ((typeof Symbol < "u" && e[Symbol.iterator] != null) || e["@@iterator"] != null) return Array.from(e);
}
function yl(e) {
  if (Array.isArray(e)) return mr(e);
}
function mr(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function sn(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function H(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? sn(Object(r), !0).forEach(function (n) {
          bl(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : sn(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function bl(e, t, r) {
  return (
    (t = Ol(t)),
    t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
    e
  );
}
function Ol(e) {
  var t = _l(e, "string");
  return Fe(t) === "symbol" ? t : String(t);
}
function _l(e, t) {
  if (Fe(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Fe(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Sl = 400,
  To = "2.13.0",
  wl = "https://cdn.jsdelivr.net/npm/search-insights@".concat(To, "/dist/search-insights.min.js"),
  Pl = At(function (e) {
    var t = e.onItemsChange,
      r = e.items,
      n = e.insights,
      o = e.state;
    t({
      insights: n,
      insightsEvents: ml({ items: r }).map(function (i) {
        return H({ eventName: "Items Viewed" }, i);
      }),
      state: o
    });
  }, Sl);
function ln(e) {
  var t = Il(e),
    r = t.insightsClient,
    n = t.insightsInitParams,
    o = t.onItemsChange,
    i = t.onSelect,
    a = t.onActive,
    s = t.__autocomplete_clickAnalytics,
    u = r;
  if (
    (r ||
      Qs(function (d) {
        var p = d.window,
          m = p.AlgoliaAnalyticsObject || "aa";
        typeof m == "string" && (u = p[m]),
          u ||
            ((p.AlgoliaAnalyticsObject = m),
            p[m] ||
              (p[m] = function () {
                p[m].queue || (p[m].queue = []);
                for (var g = arguments.length, y = new Array(g), v = 0; v < g; v++) y[v] = arguments[v];
                p[m].queue.push(y);
              }),
            (p[m].version = To),
            (u = p[m]),
            El(p));
      }),
    !u)
  )
    return {};
  n && u("init", H({ partial: !0 }, n));
  var c = dl(u),
    f = xe([]),
    l = At(function (d) {
      var p = d.state;
      if (p.isOpen) {
        var m = p.collections
          .reduce(function (g, y) {
            return [].concat(Ee(g), Ee(y.items));
          }, [])
          .filter(je);
        $o(
          f.current.map(function (g) {
            return g.objectID;
          }),
          m.map(function (g) {
            return g.objectID;
          })
        ) || ((f.current = m), m.length > 0 && Pl({ onItemsChange: o, items: m, insights: c, state: p }));
      }
    }, 0);
  return {
    name: "aa.algoliaInsightsPlugin",
    subscribe: function (p) {
      var m = p.setContext,
        g = p.onSelect,
        y = p.onActive,
        v = !1;
      function _(w) {
        m({
          algoliaInsightsPlugin: {
            __algoliaSearchParameters: H(H({}, s ? { clickAnalytics: !0 } : {}), w ? { userToken: Al(w) } : {}),
            insights: c
          }
        });
      }
      u("addAlgoliaAgent", "insights-plugin"),
        _(),
        u("onUserTokenChange", function (w) {
          v || _(w);
        }),
        u("getUserToken", null, function (w, S) {
          v || _(S);
        }),
        u("onAuthenticatedUserTokenChange", function (w) {
          w
            ? ((v = !0), _(w))
            : ((v = !1),
              u("getUserToken", null, function (S, I) {
                return _(I);
              }));
        }),
        u("getAuthenticatedUserToken", null, function (w, S) {
          S && ((v = !0), _(S));
        }),
        g(function (w) {
          var S = w.item,
            I = w.state,
            E = w.event,
            A = w.source;
          je(S) &&
            i({
              state: I,
              event: E,
              insights: c,
              item: S,
              insightsEvents: [H({ eventName: "Item Selected" }, nn({ item: S, items: A.getItems().filter(je) }))]
            });
        }),
        y(function (w) {
          var S = w.item,
            I = w.source,
            E = w.state,
            A = w.event;
          je(S) &&
            a({
              state: E,
              event: A,
              insights: c,
              item: S,
              insightsEvents: [H({ eventName: "Item Active" }, nn({ item: S, items: I.getItems().filter(je) }))]
            });
        });
    },
    onStateChange: function (p) {
      var m = p.state;
      l({ state: m });
    },
    __autocomplete_pluginOptions: e
  };
}
function cn() {
  var e,
    t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
    r = arguments.length > 1 ? arguments[1] : void 0;
  return [].concat(
    Ee(t),
    ["autocomplete-internal"],
    Ee(
      (e = r.algoliaInsightsPlugin) !== null && e !== void 0 && e.__automaticInsights ? ["autocomplete-automatic"] : []
    )
  );
}
function Il(e) {
  return H(
    {
      onItemsChange: function (r) {
        var n = r.insights,
          o = r.insightsEvents,
          i = r.state;
        n.viewedObjectIDs.apply(
          n,
          Ee(
            o.map(function (a) {
              return H(H({}, a), {}, { algoliaSource: cn(a.algoliaSource, i.context) });
            })
          )
        );
      },
      onSelect: function (r) {
        var n = r.insights,
          o = r.insightsEvents,
          i = r.state;
        n.clickedObjectIDsAfterSearch.apply(
          n,
          Ee(
            o.map(function (a) {
              return H(H({}, a), {}, { algoliaSource: cn(a.algoliaSource, i.context) });
            })
          )
        );
      },
      onActive: jt,
      __autocomplete_clickAnalytics: !0
    },
    e
  );
}
function El(e) {
  var t =
    "[Autocomplete]: Could not load search-insights.js. Please load it manually following https://alg.li/insights-autocomplete";
  try {
    var r = e.document.createElement("script");
    (r.async = !0),
      (r.src = wl),
      (r.onerror = function () {
        console.error(t);
      }),
      document.body.appendChild(r);
  } catch {
    console.error(t);
  }
}
function Al(e) {
  return typeof e == "number" ? e.toString() : e;
}
function _t(e, t) {
  var r = t;
  return {
    then: function (o, i) {
      return _t(e.then(mt(o, r, e), mt(i, r, e)), r);
    },
    catch: function (o) {
      return _t(e.catch(mt(o, r, e)), r);
    },
    finally: function (o) {
      return (
        o && r.onCancelList.push(o),
        _t(
          e.finally(
            mt(
              o &&
                function () {
                  return (r.onCancelList = []), o();
                },
              r,
              e
            )
          ),
          r
        )
      );
    },
    cancel: function () {
      r.isCanceled = !0;
      var o = r.onCancelList;
      (r.onCancelList = []),
        o.forEach(function (i) {
          i();
        });
    },
    isCanceled: function () {
      return r.isCanceled === !0;
    }
  };
}
function un(e) {
  return _t(e, { isCanceled: !1, onCancelList: [] });
}
function mt(e, t, r) {
  return e
    ? function (o) {
        return t.isCanceled ? o : e(o);
      }
    : r;
}
function $l() {
  var e = [];
  return {
    add: function (r) {
      return (
        e.push(r),
        r.finally(function () {
          e = e.filter(function (n) {
            return n !== r;
          });
        })
      );
    },
    cancelAll: function () {
      e.forEach(function (r) {
        return r.cancel();
      });
    },
    isEmpty: function () {
      return e.length === 0;
    }
  };
}
function jl() {
  var e = -1,
    t = -1,
    r = void 0;
  return function (o) {
    e++;
    var i = e;
    return Promise.resolve(o).then(function (a) {
      return r && i < t ? r : ((t = i), (r = a), a);
    });
  };
}
function fn(e, t, r, n) {
  if (!r) return null;
  if (e < 0 && (t === null || (n !== null && t === 0))) return r + e;
  var o = (t === null ? -1 : t) + e;
  return o <= -1 || o >= r ? (n === null ? null : 0) : o;
}
function pn(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function dn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? pn(Object(r), !0).forEach(function (n) {
          Cl(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : pn(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function Cl(e, t, r) {
  return (
    (t = xl(t)),
    t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
    e
  );
}
function xl(e) {
  var t = Tl(e, "string");
  return He(t) === "symbol" ? t : String(t);
}
function Tl(e, t) {
  if (He(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (He(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function He(e) {
  "@babel/helpers - typeof";
  return (
    (He =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    He(e)
  );
}
function Dl(e, t) {
  var r = [];
  return Promise.resolve(e(t)).then(function (n) {
    return Promise.all(
      n
        .filter(function (o) {
          return !!o;
        })
        .map(function (o) {
          if ((o.sourceId, r.includes(o.sourceId)))
            throw new Error("[Autocomplete] The `sourceId` ".concat(JSON.stringify(o.sourceId), " is not unique."));
          r.push(o.sourceId);
          var i = {
            getItemInputValue: function (u) {
              var c = u.state;
              return c.query;
            },
            getItemUrl: function () {},
            onSelect: function (u) {
              var c = u.setIsOpen;
              c(!1);
            },
            onActive: jt,
            onResolve: jt
          };
          Object.keys(i).forEach(function (s) {
            i[s].__default = !0;
          });
          var a = dn(dn({}, i), o);
          return Promise.resolve(a);
        })
    );
  });
}
function Ll(e) {
  var t = e.collections
      .map(function (n) {
        return n.items.length;
      })
      .reduce(function (n, o, i) {
        var a = n[i - 1] || 0,
          s = a + o;
        return n.push(s), n;
      }, []),
    r = t.reduce(function (n, o) {
      return o <= e.activeItemId ? n + 1 : n;
    }, 0);
  return e.collections[r];
}
function Nl(e) {
  for (var t = e.state, r = e.collection, n = !1, o = 0, i = 0; n === !1; ) {
    var a = t.collections[o];
    if (a === r) {
      n = !0;
      break;
    }
    (i += a.items.length), o++;
  }
  return t.activeItemId - i;
}
function pe(e) {
  var t = Ll(e);
  if (!t) return null;
  var r = t.items[Nl({ state: e, collection: t })],
    n = t.source,
    o = n.getItemInputValue({ item: r, state: e }),
    i = n.getItemUrl({ item: r, state: e });
  return { item: r, itemInputValue: o, itemUrl: i, source: n };
}
function F(e, t, r) {
  return [e, r?.sourceId, t].filter(Boolean).join("-").replace(/\s/g, "");
}
function Ml(e, t) {
  return e === t || e.contains(t);
}
var Rl = /((gt|sm)-|galaxy nexus)|samsung[- ]|samsungbrowser/i;
function kl(e) {
  return !!(e && e.match(Rl));
}
function ql(e) {
  return {
    results: e,
    hits: e
      .map(function (t) {
        return t.hits;
      })
      .filter(Boolean),
    facetHits: e
      .map(function (t) {
        var r;
        return (r = t.facetHits) === null || r === void 0
          ? void 0
          : r.map(function (n) {
              return { label: n.value, count: n.count, _highlightResult: { label: { value: n.highlighted } } };
            });
      })
      .filter(Boolean)
  };
}
function mn(e) {
  return e.nativeEvent || e;
}
function We(e) {
  "@babel/helpers - typeof";
  return (
    (We =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    We(e)
  );
}
function gn(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Bl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? gn(Object(r), !0).forEach(function (n) {
          Fl(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : gn(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function Fl(e, t, r) {
  return (
    (t = Hl(t)),
    t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
    e
  );
}
function Hl(e) {
  var t = Wl(e, "string");
  return We(t) === "symbol" ? t : String(t);
}
function Wl(e, t) {
  if (We(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (We(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Kl(e, t, r) {
  var n = t.initialState;
  return {
    getState: function () {
      return n;
    },
    dispatch: function (i, a) {
      var s = Bl({}, n);
      (n = e(n, { type: i, props: t, payload: a })), r({ state: n, prevState: s });
    },
    pendingRequests: $l()
  };
}
function Ke(e) {
  "@babel/helpers - typeof";
  return (
    (Ke =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Ke(e)
  );
}
function hn(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function gt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? hn(Object(r), !0).forEach(function (n) {
          Ul(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : hn(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function Ul(e, t, r) {
  return (
    (t = Vl(t)),
    t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
    e
  );
}
function Vl(e) {
  var t = zl(e, "string");
  return Ke(t) === "symbol" ? t : String(t);
}
function zl(e, t) {
  if (Ke(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Ke(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Gl(e) {
  var t = e.store,
    r = function (c) {
      t.dispatch("setActiveItemId", c);
    },
    n = function (c) {
      t.dispatch("setQuery", c);
    },
    o = function (c) {
      var f = 0,
        l = c.map(function (d) {
          return gt(
            gt({}, d),
            {},
            {
              items: ke(d.items).map(function (p) {
                return gt(gt({}, p), {}, { __autocomplete_id: f++ });
              })
            }
          );
        });
      t.dispatch("setCollections", l);
    },
    i = function (c) {
      t.dispatch("setIsOpen", c);
    },
    a = function (c) {
      t.dispatch("setStatus", c);
    },
    s = function (c) {
      t.dispatch("setContext", c);
    };
  return { setActiveItemId: r, setQuery: n, setCollections: o, setIsOpen: i, setStatus: a, setContext: s };
}
function Ue(e) {
  "@babel/helpers - typeof";
  return (
    (Ue =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Ue(e)
  );
}
function Ql(e) {
  return Zl(e) || Xl(e) || Jl(e) || Yl();
}
function Yl() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Jl(e, t) {
  if (e) {
    if (typeof e == "string") return gr(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if ((r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")) return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return gr(e, t);
  }
}
function Xl(e) {
  if ((typeof Symbol < "u" && e[Symbol.iterator] != null) || e["@@iterator"] != null) return Array.from(e);
}
function Zl(e) {
  if (Array.isArray(e)) return gr(e);
}
function gr(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function vn(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function ve(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? vn(Object(r), !0).forEach(function (n) {
          ec(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : vn(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function ec(e, t, r) {
  return (
    (t = tc(t)),
    t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
    e
  );
}
function tc(e) {
  var t = rc(e, "string");
  return Ue(t) === "symbol" ? t : String(t);
}
function rc(e, t) {
  if (Ue(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Ue(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function nc(e, t) {
  var r,
    n = typeof window < "u" ? window : {},
    o = e.plugins || [];
  return ve(
    ve(
      {
        debug: !1,
        openOnFocus: !1,
        enterKeyHint: void 0,
        ignoreCompositionEvents: !1,
        placeholder: "",
        autoFocus: !1,
        defaultActiveItemId: null,
        stallThreshold: 300,
        insights: void 0,
        environment: n,
        shouldPanelOpen: function (a) {
          var s = a.state;
          return qe(s) > 0;
        },
        reshape: function (a) {
          var s = a.sources;
          return s;
        }
      },
      e
    ),
    {},
    {
      id: (r = e.id) !== null && r !== void 0 ? r : Ao(),
      plugins: o,
      initialState: ve(
        { activeItemId: null, query: "", completion: null, collections: [], isOpen: !1, status: "idle", context: {} },
        e.initialState
      ),
      onStateChange: function (a) {
        var s;
        (s = e.onStateChange) === null || s === void 0 || s.call(e, a),
          o.forEach(function (u) {
            var c;
            return (c = u.onStateChange) === null || c === void 0 ? void 0 : c.call(u, a);
          });
      },
      onSubmit: function (a) {
        var s;
        (s = e.onSubmit) === null || s === void 0 || s.call(e, a),
          o.forEach(function (u) {
            var c;
            return (c = u.onSubmit) === null || c === void 0 ? void 0 : c.call(u, a);
          });
      },
      onReset: function (a) {
        var s;
        (s = e.onReset) === null || s === void 0 || s.call(e, a),
          o.forEach(function (u) {
            var c;
            return (c = u.onReset) === null || c === void 0 ? void 0 : c.call(u, a);
          });
      },
      getSources: function (a) {
        return Promise.all(
          []
            .concat(
              Ql(
                o.map(function (s) {
                  return s.getSources;
                })
              ),
              [e.getSources]
            )
            .filter(Boolean)
            .map(function (s) {
              return Dl(s, a);
            })
        )
          .then(function (s) {
            return ke(s);
          })
          .then(function (s) {
            return s.map(function (u) {
              return ve(
                ve({}, u),
                {},
                {
                  onSelect: function (f) {
                    u.onSelect(f),
                      t.forEach(function (l) {
                        var d;
                        return (d = l.onSelect) === null || d === void 0 ? void 0 : d.call(l, f);
                      });
                  },
                  onActive: function (f) {
                    u.onActive(f),
                      t.forEach(function (l) {
                        var d;
                        return (d = l.onActive) === null || d === void 0 ? void 0 : d.call(l, f);
                      });
                  },
                  onResolve: function (f) {
                    u.onResolve(f),
                      t.forEach(function (l) {
                        var d;
                        return (d = l.onResolve) === null || d === void 0 ? void 0 : d.call(l, f);
                      });
                  }
                }
              );
            });
          });
      },
      navigator: ve(
        {
          navigate: function (a) {
            var s = a.itemUrl;
            n.location.assign(s);
          },
          navigateNewTab: function (a) {
            var s = a.itemUrl,
              u = n.open(s, "_blank", "noopener");
            u?.focus();
          },
          navigateNewWindow: function (a) {
            var s = a.itemUrl;
            n.open(s, "_blank", "noopener");
          }
        },
        e.navigator
      )
    }
  );
}
function Ve(e) {
  "@babel/helpers - typeof";
  return (
    (Ve =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Ve(e)
  );
}
function yn(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function ht(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? yn(Object(r), !0).forEach(function (n) {
          Do(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : yn(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function Do(e, t, r) {
  return (
    (t = oc(t)),
    t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
    e
  );
}
function oc(e) {
  var t = ic(e, "string");
  return Ve(t) === "symbol" ? t : String(t);
}
function ic(e, t) {
  if (Ve(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Ve(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function ac(e) {
  var t = e.collections,
    r = e.props,
    n = e.state,
    o = t.reduce(function (u, c) {
      return ht(
        ht({}, u),
        {},
        Do(
          {},
          c.source.sourceId,
          ht(
            ht({}, c.source),
            {},
            {
              getItems: function () {
                return ke(c.items);
              }
            }
          )
        )
      );
    }, {}),
    i = r.plugins.reduce(
      function (u, c) {
        return c.reshape ? c.reshape(u) : u;
      },
      { sourcesBySourceId: o, state: n }
    ),
    a = i.sourcesBySourceId,
    s = r.reshape({ sourcesBySourceId: a, sources: Object.values(a), state: n });
  return ke(s)
    .filter(Boolean)
    .map(function (u) {
      return { source: u, items: u.getItems() };
    });
}
function ze(e) {
  "@babel/helpers - typeof";
  return (
    (ze =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    ze(e)
  );
}
function bn(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function ye(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? bn(Object(r), !0).forEach(function (n) {
          sc(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : bn(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function sc(e, t, r) {
  return (
    (t = lc(t)),
    t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
    e
  );
}
function lc(e) {
  var t = cc(e, "string");
  return ze(t) === "symbol" ? t : String(t);
}
function cc(e, t) {
  if (ze(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (ze(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Lo(e) {
  return dc(e) || pc(e) || fc(e) || uc();
}
function uc() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function fc(e, t) {
  if (e) {
    if (typeof e == "string") return hr(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if ((r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")) return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return hr(e, t);
  }
}
function pc(e) {
  if ((typeof Symbol < "u" && e[Symbol.iterator] != null) || e["@@iterator"] != null) return Array.from(e);
}
function dc(e) {
  if (Array.isArray(e)) return hr(e);
}
function hr(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function vt(e) {
  return !!e.execute;
}
function mc(e) {
  return !!e?.execute;
}
function gc(e, t, r) {
  if (mc(e)) {
    var n =
      e.requesterId === "algolia"
        ? Object.assign.apply(
            Object,
            [{}].concat(
              Lo(
                Object.keys(r.context).map(function (o) {
                  var i;
                  return (i = r.context[o]) === null || i === void 0 ? void 0 : i.__algoliaSearchParameters;
                })
              )
            )
          )
        : {};
    return ye(
      ye({}, e),
      {},
      {
        requests: e.queries.map(function (o) {
          return {
            query: e.requesterId === "algolia" ? ye(ye({}, o), {}, { params: ye(ye({}, n), o.params) }) : o,
            sourceId: t,
            transformResponse: e.transformResponse
          };
        })
      }
    );
  }
  return { items: e, sourceId: t };
}
function hc(e) {
  var t = e.reduce(function (n, o) {
      if (!vt(o)) return n.push(o), n;
      var i = o.searchClient,
        a = o.execute,
        s = o.requesterId,
        u = o.requests,
        c = n.find(function (d) {
          return vt(o) && vt(d) && d.searchClient === i && !!s && d.requesterId === s;
        });
      if (c) {
        var f;
        (f = c.items).push.apply(f, Lo(u));
      } else {
        var l = { execute: a, requesterId: s, items: u, searchClient: i };
        n.push(l);
      }
      return n;
    }, []),
    r = t.map(function (n) {
      if (!vt(n)) return Promise.resolve(n);
      var o = n,
        i = o.execute,
        a = o.items,
        s = o.searchClient;
      return i({ searchClient: s, requests: a });
    });
  return Promise.all(r).then(function (n) {
    return ke(n);
  });
}
function vc(e, t, r) {
  return t.map(function (n) {
    var o = e.filter(function (u) {
        return u.sourceId === n.sourceId;
      }),
      i = o.map(function (u) {
        var c = u.items;
        return c;
      }),
      a = o[0].transformResponse,
      s = a ? a(ql(i)) : i;
    return (
      n.onResolve({ source: n, results: i, items: s, state: r.getState() }),
      s.every(Boolean),
      'The `getItems` function from source "'
        .concat(n.sourceId, '" must return an array of items but returned ')
        .concat(
          JSON.stringify(void 0),
          `.

Did you forget to return items?

See: https://www.algolia.com/doc/ui-libraries/autocomplete/core-concepts/sources/#param-getitems`
        ),
      { source: n, items: s }
    );
  });
}
function Ge(e) {
  "@babel/helpers - typeof";
  return (
    (Ge =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Ge(e)
  );
}
var yc = ["event", "nextState", "props", "query", "refresh", "store"];
function On(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function oe(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? On(Object(r), !0).forEach(function (n) {
          bc(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : On(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function bc(e, t, r) {
  return (
    (t = Oc(t)),
    t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
    e
  );
}
function Oc(e) {
  var t = _c(e, "string");
  return Ge(t) === "symbol" ? t : String(t);
}
function _c(e, t) {
  if (Ge(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Ge(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Sc(e, t) {
  if (e == null) return {};
  var r = wc(e, t),
    n,
    o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      (n = i[o]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function wc(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    o,
    i;
  for (i = 0; i < n.length; i++) (o = n[i]), !(t.indexOf(o) >= 0) && (r[o] = e[o]);
  return r;
}
var Ce = null,
  _n = jl();
function fe(e) {
  var t = e.event,
    r = e.nextState,
    n = r === void 0 ? {} : r,
    o = e.props,
    i = e.query,
    a = e.refresh,
    s = e.store,
    u = Sc(e, yc);
  Ce && o.environment.clearTimeout(Ce);
  var c = u.setCollections,
    f = u.setIsOpen,
    l = u.setQuery,
    d = u.setActiveItemId,
    p = u.setStatus,
    m = u.setContext;
  if ((l(i), d(o.defaultActiveItemId), !i && o.openOnFocus === !1)) {
    var g,
      y = s.getState().collections.map(function (w) {
        return oe(oe({}, w), {}, { items: [] });
      });
    p("idle"), c(y), f((g = n.isOpen) !== null && g !== void 0 ? g : o.shouldPanelOpen({ state: s.getState() }));
    var v = un(
      _n(y).then(function () {
        return Promise.resolve();
      })
    );
    return s.pendingRequests.add(v);
  }
  p("loading"),
    (Ce = o.environment.setTimeout(function () {
      p("stalled");
    }, o.stallThreshold));
  var _ = un(
    _n(
      o.getSources(oe({ query: i, refresh: a, state: s.getState() }, u)).then(function (w) {
        return Promise.all(
          w.map(function (S) {
            return Promise.resolve(S.getItems(oe({ query: i, refresh: a, state: s.getState() }, u))).then(function (I) {
              return gc(I, S.sourceId, s.getState());
            });
          })
        )
          .then(hc)
          .then(function (S) {
            var I = S.some(function (A) {
              var h = A.items;
              return Pc(h);
            });
            if (I) {
              var E;
              m({
                algoliaInsightsPlugin: oe(
                  oe(
                    {},
                    ((E = s.getState().context) === null || E === void 0 ? void 0 : E.algoliaInsightsPlugin) || {}
                  ),
                  {},
                  { __automaticInsights: I }
                )
              });
            }
            return vc(S, w, s);
          })
          .then(function (S) {
            return ac({ collections: S, props: o, state: s.getState() });
          });
      })
    )
  )
    .then(function (w) {
      var S;
      p("idle"), c(w);
      var I = o.shouldPanelOpen({ state: s.getState() });
      f((S = n.isOpen) !== null && S !== void 0 ? S : (o.openOnFocus && !i && I) || I);
      var E = pe(s.getState());
      if (s.getState().activeItemId !== null && E) {
        var A = E.item,
          h = E.itemInputValue,
          b = E.itemUrl,
          O = E.source;
        O.onActive(
          oe({ event: t, item: A, itemInputValue: h, itemUrl: b, refresh: a, source: O, state: s.getState() }, u)
        );
      }
    })
    .finally(function () {
      p("idle"), Ce && o.environment.clearTimeout(Ce);
    });
  return s.pendingRequests.add(_);
}
function Pc(e) {
  return !Array.isArray(e) && !!e?._automaticInsights;
}
function Qe(e) {
  "@babel/helpers - typeof";
  return (
    (Qe =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Qe(e)
  );
}
var Ic = ["event", "props", "refresh", "store"];
function Sn(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function ie(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Sn(Object(r), !0).forEach(function (n) {
          Ec(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Sn(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function Ec(e, t, r) {
  return (
    (t = Ac(t)),
    t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
    e
  );
}
function Ac(e) {
  var t = $c(e, "string");
  return Qe(t) === "symbol" ? t : String(t);
}
function $c(e, t) {
  if (Qe(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Qe(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function jc(e, t) {
  if (e == null) return {};
  var r = Cc(e, t),
    n,
    o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      (n = i[o]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function Cc(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    o,
    i;
  for (i = 0; i < n.length; i++) (o = n[i]), !(t.indexOf(o) >= 0) && (r[o] = e[o]);
  return r;
}
function xc(e) {
  var t = e.event,
    r = e.props,
    n = e.refresh,
    o = e.store,
    i = jc(e, Ic);
  if (t.key === "ArrowUp" || t.key === "ArrowDown") {
    var a = function () {
        var m = pe(o.getState()),
          g = r.environment.document.getElementById(F(r.id, "item-".concat(o.getState().activeItemId), m?.source));
        g && (g.scrollIntoViewIfNeeded ? g.scrollIntoViewIfNeeded(!1) : g.scrollIntoView(!1));
      },
      s = function () {
        var m = pe(o.getState());
        if (o.getState().activeItemId !== null && m) {
          var g = m.item,
            y = m.itemInputValue,
            v = m.itemUrl,
            _ = m.source;
          _.onActive(
            ie({ event: t, item: g, itemInputValue: y, itemUrl: v, refresh: n, source: _, state: o.getState() }, i)
          );
        }
      };
    t.preventDefault(),
      o.getState().isOpen === !1 && (r.openOnFocus || o.getState().query)
        ? fe(ie({ event: t, props: r, query: o.getState().query, refresh: n, store: o }, i)).then(function () {
            o.dispatch(t.key, { nextActiveItemId: r.defaultActiveItemId }), s(), setTimeout(a, 0);
          })
        : (o.dispatch(t.key, {}), s(), a());
  } else if (t.key === "Escape") t.preventDefault(), o.dispatch(t.key, null), o.pendingRequests.cancelAll();
  else if (t.key === "Tab") o.dispatch("blur", null), o.pendingRequests.cancelAll();
  else if (t.key === "Enter") {
    if (
      o.getState().activeItemId === null ||
      o.getState().collections.every(function (p) {
        return p.items.length === 0;
      })
    ) {
      r.debug || o.pendingRequests.cancelAll();
      return;
    }
    t.preventDefault();
    var u = pe(o.getState()),
      c = u.item,
      f = u.itemInputValue,
      l = u.itemUrl,
      d = u.source;
    if (t.metaKey || t.ctrlKey)
      l !== void 0 &&
        (d.onSelect(
          ie({ event: t, item: c, itemInputValue: f, itemUrl: l, refresh: n, source: d, state: o.getState() }, i)
        ),
        r.navigator.navigateNewTab({ itemUrl: l, item: c, state: o.getState() }));
    else if (t.shiftKey)
      l !== void 0 &&
        (d.onSelect(
          ie({ event: t, item: c, itemInputValue: f, itemUrl: l, refresh: n, source: d, state: o.getState() }, i)
        ),
        r.navigator.navigateNewWindow({ itemUrl: l, item: c, state: o.getState() }));
    else if (!t.altKey) {
      if (l !== void 0) {
        d.onSelect(
          ie({ event: t, item: c, itemInputValue: f, itemUrl: l, refresh: n, source: d, state: o.getState() }, i)
        ),
          r.navigator.navigate({ itemUrl: l, item: c, state: o.getState() });
        return;
      }
      fe(ie({ event: t, nextState: { isOpen: !1 }, props: r, query: f, refresh: n, store: o }, i)).then(function () {
        d.onSelect(
          ie({ event: t, item: c, itemInputValue: f, itemUrl: l, refresh: n, source: d, state: o.getState() }, i)
        );
      });
    }
  }
}
function Ye(e) {
  "@babel/helpers - typeof";
  return (
    (Ye =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Ye(e)
  );
}
var Tc = ["props", "refresh", "store"],
  Dc = ["inputElement", "formElement", "panelElement"],
  Lc = ["inputElement"],
  Nc = ["inputElement", "maxLength"],
  Mc = ["source"],
  Rc = ["item", "source"];
function wn(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function k(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? wn(Object(r), !0).forEach(function (n) {
          kc(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : wn(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function kc(e, t, r) {
  return (
    (t = qc(t)),
    t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
    e
  );
}
function qc(e) {
  var t = Bc(e, "string");
  return Ye(t) === "symbol" ? t : String(t);
}
function Bc(e, t) {
  if (Ye(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Ye(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function be(e, t) {
  if (e == null) return {};
  var r = Fc(e, t),
    n,
    o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      (n = i[o]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function Fc(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    o,
    i;
  for (i = 0; i < n.length; i++) (o = n[i]), !(t.indexOf(o) >= 0) && (r[o] = e[o]);
  return r;
}
function Hc(e) {
  var t = e.props,
    r = e.refresh,
    n = e.store,
    o = be(e, Tc),
    i = function (m) {
      var g = m.inputElement,
        y = m.formElement,
        v = m.panelElement,
        _ = be(m, Dc);
      function w(S) {
        var I = n.getState().isOpen || !n.pendingRequests.isEmpty();
        if (!(!I || S.target === g)) {
          var E = [y, v].some(function (A) {
            return Ml(A, S.target);
          });
          E === !1 && (n.dispatch("blur", null), t.debug || n.pendingRequests.cancelAll());
        }
      }
      return k(
        {
          onTouchStart: w,
          onMouseDown: w,
          onTouchMove: function (I) {
            n.getState().isOpen === !1 || g !== t.environment.document.activeElement || I.target === g || g.blur();
          }
        },
        _
      );
    },
    a = function (m) {
      return k(
        {
          role: "combobox",
          "aria-expanded": n.getState().isOpen,
          "aria-haspopup": "listbox",
          "aria-owns": n.getState().isOpen
            ? n
                .getState()
                .collections.map(function (g) {
                  var y = g.source;
                  return F(t.id, "list", y);
                })
                .join(" ")
            : void 0,
          "aria-labelledby": F(t.id, "label")
        },
        m
      );
    },
    s = function (m) {
      m.inputElement;
      var g = be(m, Lc);
      return k(
        {
          action: "",
          noValidate: !0,
          role: "search",
          onSubmit: function (v) {
            var _;
            v.preventDefault(),
              t.onSubmit(k({ event: v, refresh: r, state: n.getState() }, o)),
              n.dispatch("submit", null),
              (_ = m.inputElement) === null || _ === void 0 || _.blur();
          },
          onReset: function (v) {
            var _;
            v.preventDefault(),
              t.onReset(k({ event: v, refresh: r, state: n.getState() }, o)),
              n.dispatch("reset", null),
              (_ = m.inputElement) === null || _ === void 0 || _.focus();
          }
        },
        g
      );
    },
    u = function (m) {
      var g;
      function y(b) {
        (t.openOnFocus || n.getState().query) &&
          fe(k({ event: b, props: t, query: n.getState().completion || n.getState().query, refresh: r, store: n }, o)),
          n.dispatch("focus", null);
      }
      var v = m || {};
      v.inputElement;
      var _ = v.maxLength,
        w = _ === void 0 ? 512 : _,
        S = be(v, Nc),
        I = pe(n.getState()),
        E = ((g = t.environment.navigator) === null || g === void 0 ? void 0 : g.userAgent) || "",
        A = kl(E),
        h = t.enterKeyHint || (I != null && I.itemUrl && !A ? "go" : "search");
      return k(
        {
          "aria-autocomplete": "both",
          "aria-activedescendant":
            n.getState().isOpen && n.getState().activeItemId !== null
              ? F(t.id, "item-".concat(n.getState().activeItemId), I?.source)
              : void 0,
          "aria-controls": n.getState().isOpen
            ? n
                .getState()
                .collections.map(function (b) {
                  var O = b.source;
                  return F(t.id, "list", O);
                })
                .join(" ")
            : void 0,
          "aria-labelledby": F(t.id, "label"),
          value: n.getState().completion || n.getState().query,
          id: F(t.id, "input"),
          autoComplete: "off",
          autoCorrect: "off",
          autoCapitalize: "off",
          enterKeyHint: h,
          spellCheck: "false",
          autoFocus: t.autoFocus,
          placeholder: t.placeholder,
          maxLength: w,
          type: "search",
          onChange: function (O) {
            var P = O.currentTarget.value;
            if (t.ignoreCompositionEvents && mn(O).isComposing) {
              o.setQuery(P);
              return;
            }
            fe(k({ event: O, props: t, query: P.slice(0, w), refresh: r, store: n }, o));
          },
          onCompositionEnd: function (O) {
            fe(k({ event: O, props: t, query: O.currentTarget.value.slice(0, w), refresh: r, store: n }, o));
          },
          onKeyDown: function (O) {
            mn(O).isComposing || xc(k({ event: O, props: t, refresh: r, store: n }, o));
          },
          onFocus: y,
          onBlur: jt,
          onClick: function (O) {
            m.inputElement === t.environment.document.activeElement && !n.getState().isOpen && y(O);
          }
        },
        S
      );
    },
    c = function (m) {
      return k({ htmlFor: F(t.id, "input"), id: F(t.id, "label") }, m);
    },
    f = function (m) {
      var g = m || {},
        y = g.source,
        v = be(g, Mc);
      return k({ role: "listbox", "aria-labelledby": F(t.id, "label"), id: F(t.id, "list", y) }, v);
    },
    l = function (m) {
      return k(
        {
          onMouseDown: function (y) {
            y.preventDefault();
          },
          onMouseLeave: function () {
            n.dispatch("mouseleave", null);
          }
        },
        m
      );
    },
    d = function (m) {
      var g = m.item,
        y = m.source,
        v = be(m, Rc);
      return k(
        {
          id: F(t.id, "item-".concat(g.__autocomplete_id), y),
          role: "option",
          "aria-selected": n.getState().activeItemId === g.__autocomplete_id,
          onMouseMove: function (w) {
            if (g.__autocomplete_id !== n.getState().activeItemId) {
              n.dispatch("mousemove", g.__autocomplete_id);
              var S = pe(n.getState());
              if (n.getState().activeItemId !== null && S) {
                var I = S.item,
                  E = S.itemInputValue,
                  A = S.itemUrl,
                  h = S.source;
                h.onActive(
                  k({ event: w, item: I, itemInputValue: E, itemUrl: A, refresh: r, source: h, state: n.getState() }, o)
                );
              }
            }
          },
          onMouseDown: function (w) {
            w.preventDefault();
          },
          onClick: function (w) {
            var S = y.getItemInputValue({ item: g, state: n.getState() }),
              I = y.getItemUrl({ item: g, state: n.getState() }),
              E = I
                ? Promise.resolve()
                : fe(k({ event: w, nextState: { isOpen: !1 }, props: t, query: S, refresh: r, store: n }, o));
            E.then(function () {
              y.onSelect(
                k({ event: w, item: g, itemInputValue: S, itemUrl: I, refresh: r, source: y, state: n.getState() }, o)
              );
            });
          }
        },
        v
      );
    };
  return {
    getEnvironmentProps: i,
    getRootProps: a,
    getFormProps: s,
    getLabelProps: c,
    getInputProps: u,
    getPanelProps: l,
    getListProps: f,
    getItemProps: d
  };
}
function Je(e) {
  "@babel/helpers - typeof";
  return (
    (Je =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Je(e)
  );
}
function Pn(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Wc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Pn(Object(r), !0).forEach(function (n) {
          No(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Pn(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function No(e, t, r) {
  return (
    (t = Kc(t)),
    t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
    e
  );
}
function Kc(e) {
  var t = Uc(e, "string");
  return Je(t) === "symbol" ? t : String(t);
}
function Uc(e, t) {
  if (Je(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Je(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Vc(e) {
  var t,
    r,
    n,
    o,
    i = e.plugins,
    a = e.options,
    s =
      (t = (((r = a.__autocomplete_metadata) === null || r === void 0 ? void 0 : r.userAgents) || [])[0]) === null ||
      t === void 0
        ? void 0
        : t.segment,
    u = s
      ? No({}, s, Object.keys(((n = a.__autocomplete_metadata) === null || n === void 0 ? void 0 : n.options) || {}))
      : {};
  return {
    plugins: i.map(function (c) {
      return { name: c.name, options: Object.keys(c.__autocomplete_pluginOptions || []) };
    }),
    options: Wc({ "autocomplete-core": Object.keys(a) }, u),
    ua: Co.concat(((o = a.__autocomplete_metadata) === null || o === void 0 ? void 0 : o.userAgents) || [])
  };
}
function zc(e) {
  var t,
    r,
    n = e.metadata,
    o = e.environment,
    i =
      (t = o.navigator) === null || t === void 0 || (r = t.userAgent) === null || r === void 0
        ? void 0
        : r.includes("Algolia Crawler");
  if (i) {
    var a = o.document.createElement("meta"),
      s = o.document.querySelector("head");
    (a.name = "algolia:metadata"),
      setTimeout(function () {
        (a.content = JSON.stringify(n)), s.appendChild(a);
      }, 0);
  }
}
function In(e) {
  var t,
    r = e.state;
  return r.isOpen === !1 || r.activeItemId === null
    ? null
    : ((t = pe(r)) === null || t === void 0 ? void 0 : t.itemInputValue) || null;
}
function Xe(e) {
  "@babel/helpers - typeof";
  return (
    (Xe =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Xe(e)
  );
}
function En(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function j(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? En(Object(r), !0).forEach(function (n) {
          Gc(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : En(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function Gc(e, t, r) {
  return (
    (t = Qc(t)),
    t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
    e
  );
}
function Qc(e) {
  var t = Yc(e, "string");
  return Xe(t) === "symbol" ? t : String(t);
}
function Yc(e, t) {
  if (Xe(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Xe(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Jc = function (t, r) {
  switch (r.type) {
    case "setActiveItemId":
      return j(j({}, t), {}, { activeItemId: r.payload });
    case "setQuery":
      return j(j({}, t), {}, { query: r.payload, completion: null });
    case "setCollections":
      return j(j({}, t), {}, { collections: r.payload });
    case "setIsOpen":
      return j(j({}, t), {}, { isOpen: r.payload });
    case "setStatus":
      return j(j({}, t), {}, { status: r.payload });
    case "setContext":
      return j(j({}, t), {}, { context: j(j({}, t.context), r.payload) });
    case "ArrowDown": {
      var n = j(
        j({}, t),
        {},
        {
          activeItemId: r.payload.hasOwnProperty("nextActiveItemId")
            ? r.payload.nextActiveItemId
            : fn(1, t.activeItemId, qe(t), r.props.defaultActiveItemId)
        }
      );
      return j(j({}, n), {}, { completion: In({ state: n }) });
    }
    case "ArrowUp": {
      var o = j(j({}, t), {}, { activeItemId: fn(-1, t.activeItemId, qe(t), r.props.defaultActiveItemId) });
      return j(j({}, o), {}, { completion: In({ state: o }) });
    }
    case "Escape":
      return t.isOpen
        ? j(j({}, t), {}, { activeItemId: null, isOpen: !1, completion: null })
        : j(j({}, t), {}, { activeItemId: null, query: "", status: "idle", collections: [] });
    case "submit":
      return j(j({}, t), {}, { activeItemId: null, isOpen: !1, status: "idle" });
    case "reset":
      return j(
        j({}, t),
        {},
        {
          activeItemId: r.props.openOnFocus === !0 ? r.props.defaultActiveItemId : null,
          status: "idle",
          completion: null,
          query: ""
        }
      );
    case "focus":
      return j(
        j({}, t),
        {},
        {
          activeItemId: r.props.defaultActiveItemId,
          isOpen: (r.props.openOnFocus || !!t.query) && r.props.shouldPanelOpen({ state: t })
        }
      );
    case "blur":
      return r.props.debug ? t : j(j({}, t), {}, { isOpen: !1, activeItemId: null });
    case "mousemove":
      return j(j({}, t), {}, { activeItemId: r.payload });
    case "mouseleave":
      return j(j({}, t), {}, { activeItemId: r.props.defaultActiveItemId });
    default:
      return "The reducer action ".concat(JSON.stringify(r.type), " is not supported."), t;
  }
};
function Ze(e) {
  "@babel/helpers - typeof";
  return (
    (Ze =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Ze(e)
  );
}
function An(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function ae(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? An(Object(r), !0).forEach(function (n) {
          Xc(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : An(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function Xc(e, t, r) {
  return (
    (t = Zc(t)),
    t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
    e
  );
}
function Zc(e) {
  var t = eu(e, "string");
  return Ze(t) === "symbol" ? t : String(t);
}
function eu(e, t) {
  if (Ze(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Ze(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function tu(e) {
  var t = [],
    r = nc(e, t),
    n = Kl(Jc, r, a),
    o = Gl({ store: n }),
    i = Hc(ae({ props: r, refresh: s, store: n, navigator: r.navigator }, o));
  function a(l) {
    var d,
      p,
      m = l.prevState,
      g = l.state;
    if (
      (r.onStateChange(ae({ prevState: m, state: g, refresh: s, navigator: r.navigator }, o)),
      !c() &&
        (d = g.context) !== null &&
        d !== void 0 &&
        (p = d.algoliaInsightsPlugin) !== null &&
        p !== void 0 &&
        p.__automaticInsights &&
        r.insights !== !1)
    ) {
      var y = ln({ __autocomplete_clickAnalytics: !1 });
      r.plugins.push(y), u([y]);
    }
  }
  function s() {
    return fe(
      ae(
        {
          event: new Event("input"),
          nextState: { isOpen: n.getState().isOpen },
          props: r,
          navigator: r.navigator,
          query: n.getState().query,
          refresh: s,
          store: n
        },
        o
      )
    );
  }
  function u(l) {
    l.forEach(function (d) {
      var p;
      return (p = d.subscribe) === null || p === void 0
        ? void 0
        : p.call(
            d,
            ae(
              ae({}, o),
              {},
              {
                navigator: r.navigator,
                refresh: s,
                onSelect: function (g) {
                  t.push({ onSelect: g });
                },
                onActive: function (g) {
                  t.push({ onActive: g });
                },
                onResolve: function (g) {
                  t.push({ onResolve: g });
                }
              }
            )
          );
    });
  }
  function c() {
    return r.plugins.some(function (l) {
      return l.name === "aa.algoliaInsightsPlugin";
    });
  }
  if (r.insights && !c()) {
    var f = typeof r.insights == "boolean" ? {} : r.insights;
    r.plugins.push(ln(f));
  }
  return (
    u(r.plugins),
    zc({ metadata: Vc({ plugins: r.plugins, options: e }), environment: r.environment }),
    ae(ae({ refresh: s, navigator: r.navigator }, i), o)
  );
}
var ru = function (t) {
  var r = t.environment,
    n = r.document.createElementNS("http://www.w3.org/2000/svg", "svg");
  n.setAttribute("class", "aa-ClearIcon"),
    n.setAttribute("viewBox", "0 0 24 24"),
    n.setAttribute("width", "18"),
    n.setAttribute("height", "18"),
    n.setAttribute("fill", "currentColor");
  var o = r.document.createElementNS("http://www.w3.org/2000/svg", "path");
  return (
    o.setAttribute(
      "d",
      "M5.293 6.707l5.293 5.293-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l5.293-5.293 5.293 5.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-5.293-5.293 5.293-5.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"
    ),
    n.appendChild(o),
    n
  );
};
function $n(e, t) {
  if (typeof t == "string") {
    var r = e.document.querySelector(t);
    return "The element ".concat(JSON.stringify(t), " is not in the document."), r;
  }
  return t;
}
function nu() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
  return t.reduce(function (n, o) {
    return (
      Object.keys(o).forEach(function (i) {
        var a = n[i],
          s = o[i];
        a !== s && (n[i] = [a, s].filter(Boolean).join(" "));
      }),
      n
    );
  }, {});
}
function ou(e) {
  return lu(e) || su(e) || au(e) || iu();
}
function iu() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function au(e, t) {
  if (e) {
    if (typeof e == "string") return vr(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if ((r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")) return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return vr(e, t);
  }
}
function su(e) {
  if ((typeof Symbol < "u" && e[Symbol.iterator] != null) || e["@@iterator"] != null) return Array.from(e);
}
function lu(e) {
  if (Array.isArray(e)) return vr(e);
}
function vr(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function yr(e) {
  "@babel/helpers - typeof";
  return (
    (yr =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    yr(e)
  );
}
var jn = function (t) {
  return t && yr(t) === "object" && Object.prototype.toString.call(t) === "[object Object]";
};
function Mo() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
  return t.reduce(function (n, o) {
    return (
      Object.keys(o).forEach(function (i) {
        var a = n[i],
          s = o[i];
        Array.isArray(a) && Array.isArray(s)
          ? (n[i] = a.concat.apply(a, ou(s)))
          : jn(a) && jn(s)
            ? (n[i] = Mo(a, s))
            : (n[i] = s);
      }),
      n
    );
  }, {});
}
function et(e) {
  "@babel/helpers - typeof";
  return (
    (et =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    et(e)
  );
}
function Cn(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function xn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Cn(Object(r), !0).forEach(function (n) {
          Ro(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Cn(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function Ro(e, t, r) {
  return (
    (t = cu(t)),
    t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
    e
  );
}
function cu(e) {
  var t = uu(e, "string");
  return et(t) === "symbol" ? t : String(t);
}
function uu(e, t) {
  if (et(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (et(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function fu(e, t) {
  return gu(e) || mu(e, t) || du(e, t) || pu();
}
function pu() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function du(e, t) {
  if (e) {
    if (typeof e == "string") return Tn(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if ((r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")) return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Tn(e, t);
  }
}
function Tn(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function mu(e, t) {
  var r = e == null ? null : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r != null) {
    var n,
      o,
      i,
      a,
      s = [],
      u = !0,
      c = !1;
    try {
      if (((i = (r = r.call(e)).next), t !== 0))
        for (; !(u = (n = i.call(r)).done) && (s.push(n.value), s.length !== t); u = !0);
    } catch (f) {
      (c = !0), (o = f);
    } finally {
      try {
        if (!u && r.return != null && ((a = r.return()), Object(a) !== a)) return;
      } finally {
        if (c) throw o;
      }
    }
    return s;
  }
}
function gu(e) {
  if (Array.isArray(e)) return e;
}
function hu(e, t) {
  return Object.entries(e).reduce(function (r, n) {
    var o = fu(n, 2),
      i = o[0],
      a = o[1];
    return t({ key: i, value: a }) ? xn(xn({}, r), {}, Ro({}, i, a)) : r;
  }, {});
}
var vu = ["ontouchstart", "ontouchend", "ontouchmove", "ontouchcancel"];
function yu(e, t, r) {
  r === null ? (e[t] = "") : typeof r != "number" ? (e[t] = r) : (e[t] = r + "px");
}
function Dn(e) {
  this._listeners[e.type](e);
}
function ko(e, t, r) {
  var n,
    o,
    i = e[t];
  if (t === "style")
    if (typeof r == "string") e.style = r;
    else if (r === null) e.style = "";
    else for (t in r) (!i || r[t] !== i[t]) && yu(e.style, t, r[t]);
  else
    t[0] === "o" && t[1] === "n"
      ? ((n = t !== (t = t.replace(/Capture$/, ""))),
        (o = t.toLowerCase()),
        (o in e || vu.includes(o)) && (t = o),
        (t = t.slice(2)),
        e._listeners || (e._listeners = {}),
        (e._listeners[t] = r),
        r ? i || e.addEventListener(t, Dn, n) : e.removeEventListener(t, Dn, n))
      : t !== "list" &&
          t !== "tagName" &&
          t !== "form" &&
          t !== "type" &&
          t !== "size" &&
          t !== "download" &&
          t !== "href" &&
          t in e
        ? (e[t] = r ?? "")
        : typeof r != "function" &&
          t !== "dangerouslySetInnerHTML" &&
          (r == null || (r === !1 && !/^ar/.test(t)) ? e.removeAttribute(t) : e.setAttribute(t, r));
}
function qo(e) {
  switch (e) {
    case "onChange":
      return "onInput";
    case "onCompositionEnd":
      return "oncompositionend";
    default:
      return e;
  }
}
function V(e, t) {
  for (var r in t) ko(e, qo(r), t[r]);
}
function Ln(e, t) {
  for (var r in t) (r[0] === "o" && r[1] === "n") || ko(e, qo(r), t[r]);
}
var bu = ["children"];
function Ou(e) {
  return Pu(e) || wu(e) || Su(e) || _u();
}
function _u() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Su(e, t) {
  if (e) {
    if (typeof e == "string") return br(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if ((r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")) return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return br(e, t);
  }
}
function wu(e) {
  if ((typeof Symbol < "u" && e[Symbol.iterator] != null) || e["@@iterator"] != null) return Array.from(e);
}
function Pu(e) {
  if (Array.isArray(e)) return br(e);
}
function br(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Iu(e, t) {
  if (e == null) return {};
  var r = Eu(e, t),
    n,
    o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      (n = i[o]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function Eu(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    o,
    i;
  for (i = 0; i < n.length; i++) (o = n[i]), !(t.indexOf(o) >= 0) && (r[o] = e[o]);
  return r;
}
function Bo(e) {
  return function (r, n) {
    var o = n.children,
      i = o === void 0 ? [] : o,
      a = Iu(n, bu),
      s = e.document.createElement(r);
    return V(s, a), s.append.apply(s, Ou(i)), s;
  };
}
function tt(e) {
  "@babel/helpers - typeof";
  return (
    (tt =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    tt(e)
  );
}
var Au = [
  "autocompleteScopeApi",
  "environment",
  "classNames",
  "getInputProps",
  "getInputPropsCore",
  "isDetached",
  "state"
];
function Nn(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Bt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Nn(Object(r), !0).forEach(function (n) {
          $u(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Nn(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function $u(e, t, r) {
  return (
    (t = ju(t)),
    t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
    e
  );
}
function ju(e) {
  var t = Cu(e, "string");
  return tt(t) === "symbol" ? t : String(t);
}
function Cu(e, t) {
  if (tt(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (tt(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function xu(e, t) {
  if (e == null) return {};
  var r = Tu(e, t),
    n,
    o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      (n = i[o]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function Tu(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    o,
    i;
  for (i = 0; i < n.length; i++) (o = n[i]), !(t.indexOf(o) >= 0) && (r[o] = e[o]);
  return r;
}
var Du = function (t) {
    var r = t.autocompleteScopeApi,
      n = t.environment;
    t.classNames;
    var o = t.getInputProps,
      i = t.getInputPropsCore,
      a = t.isDetached,
      s = t.state,
      u = xu(t, Au),
      c = Bo(n),
      f = c("input", u),
      l = o(Bt({ state: s, props: i({ inputElement: f }), inputElement: f }, r));
    return (
      V(
        f,
        Bt(
          Bt({}, l),
          {},
          {
            onKeyDown: function (p) {
              (a && p.key === "Tab") || l.onKeyDown(p);
            }
          }
        )
      ),
      f
    );
  },
  Lu = function (t) {
    var r = t.environment,
      n = r.document.createElementNS("http://www.w3.org/2000/svg", "svg");
    return (
      n.setAttribute("class", "aa-LoadingIcon"),
      n.setAttribute("viewBox", "0 0 100 100"),
      n.setAttribute("width", "20"),
      n.setAttribute("height", "20"),
      (n.innerHTML = `<circle
  cx="50"
  cy="50"
  fill="none"
  r="35"
  stroke="currentColor"
  stroke-dasharray="164.93361431346415 56.97787143782138"
  stroke-width="6"
>
  <animateTransform
    attributeName="transform"
    type="rotate"
    repeatCount="indefinite"
    dur="1s"
    values="0 50 50;90 50 50;180 50 50;360 50 50"
    keyTimes="0;0.40;0.65;1"
  />
</circle>`),
      n
    );
  },
  Mn = function (t) {
    var r = t.environment,
      n = r.document.createElementNS("http://www.w3.org/2000/svg", "svg");
    n.setAttribute("class", "aa-SubmitIcon"),
      n.setAttribute("viewBox", "0 0 24 24"),
      n.setAttribute("width", "20"),
      n.setAttribute("height", "20"),
      n.setAttribute("fill", "currentColor");
    var o = r.document.createElementNS("http://www.w3.org/2000/svg", "path");
    return (
      o.setAttribute(
        "d",
        "M16.041 15.856c-0.034 0.026-0.067 0.055-0.099 0.087s-0.060 0.064-0.087 0.099c-1.258 1.213-2.969 1.958-4.855 1.958-1.933 0-3.682-0.782-4.95-2.050s-2.050-3.017-2.050-4.95 0.782-3.682 2.050-4.95 3.017-2.050 4.95-2.050 3.682 0.782 4.95 2.050 2.050 3.017 2.050 4.95c0 1.886-0.745 3.597-1.959 4.856zM21.707 20.293l-3.675-3.675c1.231-1.54 1.968-3.493 1.968-5.618 0-2.485-1.008-4.736-2.636-6.364s-3.879-2.636-6.364-2.636-4.736 1.008-6.364 2.636-2.636 3.879-2.636 6.364 1.008 4.736 2.636 6.364 3.879 2.636 6.364 2.636c2.125 0 4.078-0.737 5.618-1.968l3.675 3.675c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z"
      ),
      n.appendChild(o),
      n
    );
  };
function rt(e) {
  "@babel/helpers - typeof";
  return (
    (rt =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    rt(e)
  );
}
function Rn(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function ee(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Rn(Object(r), !0).forEach(function (n) {
          Nu(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Rn(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function Nu(e, t, r) {
  return (
    (t = Mu(t)),
    t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
    e
  );
}
function Mu(e) {
  var t = Ru(e, "string");
  return rt(t) === "symbol" ? t : String(t);
}
function Ru(e, t) {
  if (rt(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (rt(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function ku(e) {
  var t = e.autocomplete,
    r = e.autocompleteScopeApi,
    n = e.classNames,
    o = e.environment,
    i = e.isDetached,
    a = e.placeholder,
    s = a === void 0 ? "Search" : a,
    u = e.propGetters,
    c = e.setIsModalOpen,
    f = e.state,
    l = e.translations,
    d = Bo(o),
    p = u.getRootProps(ee({ state: f, props: t.getRootProps({}) }, r)),
    m = d("div", ee({ class: n.root }, p)),
    g = d("div", {
      class: n.detachedContainer,
      onMouseDown: function (T) {
        T.stopPropagation();
      }
    }),
    y = d("div", {
      class: n.detachedOverlay,
      children: [g],
      onMouseDown: function () {
        c(!1), t.setIsOpen(!1);
      }
    }),
    v = u.getLabelProps(ee({ state: f, props: t.getLabelProps({}) }, r)),
    _ = d("button", {
      class: n.submitButton,
      type: "submit",
      title: l.submitButtonTitle,
      children: [Mn({ environment: o })]
    }),
    w = d("label", ee({ class: n.label, children: [_], ariaLabel: l.submitButtonTitle }, v)),
    S = d("button", {
      class: n.clearButton,
      type: "reset",
      title: l.clearButtonTitle,
      children: [ru({ environment: o })]
    }),
    I = d("div", { class: n.loadingIndicator, children: [Lu({ environment: o })] }),
    E = Du({
      class: n.input,
      environment: o,
      state: f,
      getInputProps: u.getInputProps,
      getInputPropsCore: t.getInputProps,
      autocompleteScopeApi: r,
      isDetached: i
    }),
    A = d("div", { class: n.inputWrapperPrefix, children: [w, I] }),
    h = d("div", { class: n.inputWrapperSuffix, children: [S] }),
    b = d("div", { class: n.inputWrapper, children: [E] }),
    O = u.getFormProps(ee({ state: f, props: t.getFormProps({ inputElement: E }) }, r)),
    P = d("form", ee({ class: n.form, children: [A, b, h] }, O)),
    C = u.getPanelProps(ee({ state: f, props: t.getPanelProps({}) }, r)),
    N = d("div", ee({ class: n.panel }, C)),
    M = d("div", { class: n.detachedSearchButtonQuery, textContent: f.query }),
    x = d("div", { class: n.detachedSearchButtonPlaceholder, hidden: !!f.query, textContent: s });
  if (i) {
    var W = d("div", { class: n.detachedSearchButtonIcon, children: [Mn({ environment: o })] }),
      $e = d("button", {
        type: "button",
        class: n.detachedSearchButton,
        title: l.detachedSearchButtonTitle,
        id: v.id,
        onClick: function () {
          c(!0);
        },
        children: [W, x, M]
      }),
      G = d("button", {
        type: "button",
        class: n.detachedCancelButton,
        textContent: l.detachedCancelButtonText,
        onTouchStart: function (T) {
          T.stopPropagation();
        },
        onClick: function () {
          t.setIsOpen(!1), c(!1);
        }
      }),
      R = d("div", { class: n.detachedFormContainer, children: [P, G] });
    g.appendChild(R), m.appendChild($e);
  } else m.appendChild(P);
  return {
    detachedContainer: g,
    detachedOverlay: y,
    detachedSearchButtonQuery: M,
    detachedSearchButtonPlaceholder: x,
    inputWrapper: b,
    input: E,
    root: m,
    form: P,
    label: w,
    submitButton: _,
    clearButton: S,
    loadingIndicator: I,
    panel: N
  };
}
function qu() {
  var e = [],
    t = [];
  function r(n) {
    e.push(n);
    var o = n();
    t.push(o);
  }
  return {
    runEffect: r,
    cleanupEffects: function () {
      var o = t;
      (t = []),
        o.forEach(function (i) {
          i();
        });
    },
    runEffects: function () {
      var o = e;
      (e = []),
        o.forEach(function (i) {
          r(i);
        });
    }
  };
}
function Bu() {
  var e = [];
  return {
    reactive: function (r) {
      var n = r(),
        o = {
          _fn: r,
          _ref: { current: n },
          get value() {
            return this._ref.current;
          },
          set value(i) {
            this._ref.current = i;
          }
        };
      return e.push(o), o;
    },
    runReactives: function () {
      e.forEach(function (r) {
        r._ref.current = r._fn();
      });
    }
  };
}
var Fo = "__aa-highlight__",
  Ho = "__/aa-highlight__";
function Fu() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
    t = e;
  return {
    get: function () {
      return t;
    },
    add: function (n) {
      var o = t[t.length - 1];
      o?.isHighlighted === n.isHighlighted
        ? (t[t.length - 1] = { value: o.value + n.value, isHighlighted: o.isHighlighted })
        : t.push(n);
    }
  };
}
function Wo(e) {
  var t = e.highlightedValue,
    r = t.split(Fo),
    n = r.shift(),
    o = Fu(n ? [{ value: n, isHighlighted: !1 }] : []);
  return (
    r.forEach(function (i) {
      var a = i.split(Ho);
      o.add({ value: a[0], isHighlighted: !0 }), a[1] !== "" && o.add({ value: a[1], isHighlighted: !1 });
    }),
    o.get()
  );
}
function Hu(e) {
  return Vu(e) || Uu(e) || Ku(e) || Wu();
}
function Wu() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ku(e, t) {
  if (e) {
    if (typeof e == "string") return Or(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if ((r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")) return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Or(e, t);
  }
}
function Uu(e) {
  if ((typeof Symbol < "u" && e[Symbol.iterator] != null) || e["@@iterator"] != null) return Array.from(e);
}
function Vu(e) {
  if (Array.isArray(e)) return Or(e);
}
function Or(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Ko(e) {
  var t = e.hit,
    r = e.attribute,
    n = Array.isArray(r) ? r : [r],
    o = $t(t, ["_highlightResult"].concat(Hu(n), ["value"]));
  return typeof o != "string" && (o = $t(t, n) || ""), Wo({ highlightedValue: o });
}
var zu = { "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"', "&#39;": "'" },
  Gu = new RegExp(/\w/i),
  Uo = /&(amp|quot|lt|gt|#39);/g,
  Qu = RegExp(Uo.source);
function Yu(e) {
  return e && Qu.test(e)
    ? e.replace(Uo, function (t) {
        return zu[t];
      })
    : e;
}
function Ju(e, t) {
  var r,
    n,
    o = e[t],
    i = ((r = e[t + 1]) === null || r === void 0 ? void 0 : r.isHighlighted) || !0,
    a = ((n = e[t - 1]) === null || n === void 0 ? void 0 : n.isHighlighted) || !0;
  return !Gu.test(Yu(o.value)) && a === i ? a : o.isHighlighted;
}
function nt(e) {
  "@babel/helpers - typeof";
  return (
    (nt =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    nt(e)
  );
}
function kn(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function yt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? kn(Object(r), !0).forEach(function (n) {
          Xu(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : kn(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function Xu(e, t, r) {
  return (
    (t = Zu(t)),
    t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
    e
  );
}
function Zu(e) {
  var t = ef(e, "string");
  return nt(t) === "symbol" ? t : String(t);
}
function ef(e, t) {
  if (nt(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (nt(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Vo(e) {
  return e.some(function (t) {
    return t.isHighlighted;
  })
    ? e.map(function (t, r) {
        return yt(yt({}, t), {}, { isHighlighted: !Ju(e, r) });
      })
    : e.map(function (t) {
        return yt(yt({}, t), {}, { isHighlighted: !1 });
      });
}
function tf(e) {
  return Vo(Ko(e));
}
function rf(e) {
  return sf(e) || af(e) || of(e) || nf();
}
function nf() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function of(e, t) {
  if (e) {
    if (typeof e == "string") return _r(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if ((r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")) return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return _r(e, t);
  }
}
function af(e) {
  if ((typeof Symbol < "u" && e[Symbol.iterator] != null) || e["@@iterator"] != null) return Array.from(e);
}
function sf(e) {
  if (Array.isArray(e)) return _r(e);
}
function _r(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function zo(e) {
  var t = e.hit,
    r = e.attribute,
    n = Array.isArray(r) ? r : [r],
    o = $t(t, ["_snippetResult"].concat(rf(n), ["value"]));
  return typeof o != "string" && (o = $t(t, n) || ""), Wo({ highlightedValue: o });
}
function lf(e) {
  return Vo(zo(e));
}
function ot(e) {
  "@babel/helpers - typeof";
  return (
    (ot =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    ot(e)
  );
}
function qn(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Bn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? qn(Object(r), !0).forEach(function (n) {
          cf(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : qn(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function cf(e, t, r) {
  return (
    (t = uf(t)),
    t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
    e
  );
}
function uf(e) {
  var t = ff(e, "string");
  return ot(t) === "symbol" ? t : String(t);
}
function ff(e, t) {
  if (ot(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (ot(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function pf(e, t) {
  function r(n) {
    return e({
      searchClient: n.searchClient,
      queries: n.requests.map(function (o) {
        return o.query;
      })
    }).then(function (o) {
      return o.map(function (i, a) {
        var s = n.requests[a],
          u = s.sourceId,
          c = s.transformResponse;
        return { items: i, sourceId: u, transformResponse: c };
      });
    });
  }
  return function (o) {
    return function (a) {
      return Bn(Bn({ requesterId: t, execute: r }, o), a);
    };
  };
}
function df(e) {
  var t = e.transporter || {},
    r = t.headers,
    n = r === void 0 ? {} : r,
    o = t.queryParameters,
    i = o === void 0 ? {} : o,
    a = "x-algolia-application-id",
    s = "x-algolia-api-key",
    u = n[a] || i[a],
    c = n[s] || i[s];
  return { appId: u, apiKey: c };
}
function it(e) {
  "@babel/helpers - typeof";
  return (
    (it =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    it(e)
  );
}
var mf = ["params"];
function Fn(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function se(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Fn(Object(r), !0).forEach(function (n) {
          gf(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Fn(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function gf(e, t, r) {
  return (
    (t = hf(t)),
    t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
    e
  );
}
function hf(e) {
  var t = vf(e, "string");
  return it(t) === "symbol" ? t : String(t);
}
function vf(e, t) {
  if (it(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (it(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function yf(e, t) {
  if (e == null) return {};
  var r = bf(e, t),
    n,
    o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      (n = i[o]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function bf(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    o,
    i;
  for (i = 0; i < n.length; i++) (o = n[i]), !(t.indexOf(o) >= 0) && (r[o] = e[o]);
  return r;
}
function Hn(e) {
  return wf(e) || Sf(e) || _f(e) || Of();
}
function Of() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _f(e, t) {
  if (e) {
    if (typeof e == "string") return Sr(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if ((r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")) return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Sr(e, t);
  }
}
function Sf(e) {
  if ((typeof Symbol < "u" && e[Symbol.iterator] != null) || e["@@iterator"] != null) return Array.from(e);
}
function wf(e) {
  if (Array.isArray(e)) return Sr(e);
}
function Sr(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Pf(e) {
  var t = e.searchClient,
    r = e.queries,
    n = e.userAgents,
    o = n === void 0 ? [] : n;
  if (typeof t.addAlgoliaAgent == "function") {
    var i = [].concat(Hn(Co), Hn(o));
    i.forEach(function (c) {
      var f = c.segment,
        l = c.version;
      t.addAlgoliaAgent(f, l);
    });
  }
  var a = df(t),
    s = a.appId,
    u = a.apiKey;
  return t
    .search(
      r.map(function (c) {
        var f = c.params,
          l = yf(c, mf);
        return se(se({}, l), {}, { params: se({ hitsPerPage: 5, highlightPreTag: Fo, highlightPostTag: Ho }, f) });
      })
    )
    .then(function (c) {
      return c.results.map(function (f, l) {
        var d;
        return se(
          se({}, f),
          {},
          {
            hits:
              (d = f.hits) === null || d === void 0
                ? void 0
                : d.map(function (p) {
                    return se(
                      se({}, p),
                      {},
                      {
                        __autocomplete_indexName: f.index || r[l].indexName,
                        __autocomplete_queryID: f.queryID,
                        __autocomplete_algoliaCredentials: { appId: s, apiKey: u }
                      }
                    );
                  })
          }
        );
      });
    });
}
function If(e) {
  var t = e.createElement,
    r = e.Fragment;
  function n(o) {
    var i = o.hit,
      a = o.attribute,
      s = o.tagName,
      u = s === void 0 ? "mark" : s;
    return t(
      r,
      {},
      Ko({ hit: i, attribute: a }).map(function (c, f) {
        return c.isHighlighted ? t(u, { key: f }, c.value) : c.value;
      })
    );
  }
  return (n.__autocomplete_componentName = "Highlight"), n;
}
function Ef(e) {
  var t = e.createElement,
    r = e.Fragment;
  function n(o) {
    var i = o.hit,
      a = o.attribute,
      s = o.tagName,
      u = s === void 0 ? "mark" : s;
    return t(
      r,
      {},
      tf({ hit: i, attribute: a }).map(function (c, f) {
        return c.isHighlighted ? t(u, { key: f }, c.value) : c.value;
      })
    );
  }
  return (n.__autocomplete_componentName = "ReverseHighlight"), n;
}
function Af(e) {
  var t = e.createElement,
    r = e.Fragment;
  function n(o) {
    var i = o.hit,
      a = o.attribute,
      s = o.tagName,
      u = s === void 0 ? "mark" : s;
    return t(
      r,
      {},
      lf({ hit: i, attribute: a }).map(function (c, f) {
        return c.isHighlighted ? t(u, { key: f }, c.value) : c.value;
      })
    );
  }
  return (n.__autocomplete_componentName = "ReverseSnippet"), n;
}
function $f(e) {
  var t = e.createElement,
    r = e.Fragment;
  function n(o) {
    var i = o.hit,
      a = o.attribute,
      s = o.tagName,
      u = s === void 0 ? "mark" : s;
    return t(
      r,
      {},
      zo({ hit: i, attribute: a }).map(function (c, f) {
        return c.isHighlighted ? t(u, { key: f }, c.value) : c.value;
      })
    );
  }
  return (n.__autocomplete_componentName = "Snippet"), n;
}
function at(e) {
  "@babel/helpers - typeof";
  return (
    (at =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    at(e)
  );
}
var jf = [
  "classNames",
  "container",
  "getEnvironmentProps",
  "getFormProps",
  "getInputProps",
  "getItemProps",
  "getLabelProps",
  "getListProps",
  "getPanelProps",
  "getRootProps",
  "panelContainer",
  "panelPlacement",
  "render",
  "renderNoResults",
  "renderer",
  "detachedMediaQuery",
  "components",
  "translations"
];
function Wn(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function te(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Wn(Object(r), !0).forEach(function (n) {
          Cf(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Wn(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function Cf(e, t, r) {
  return (
    (t = xf(t)),
    t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
    e
  );
}
function xf(e) {
  var t = Tf(e, "string");
  return at(t) === "symbol" ? t : String(t);
}
function Tf(e, t) {
  if (at(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (at(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Df(e, t) {
  if (e == null) return {};
  var r = Lf(e, t),
    n,
    o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      (n = i[o]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function Lf(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    o,
    i;
  for (i = 0; i < n.length; i++) (o = n[i]), !(t.indexOf(o) >= 0) && (r[o] = e[o]);
  return r;
}
var Nf = {
    clearButton: "aa-ClearButton",
    detachedCancelButton: "aa-DetachedCancelButton",
    detachedContainer: "aa-DetachedContainer",
    detachedFormContainer: "aa-DetachedFormContainer",
    detachedOverlay: "aa-DetachedOverlay",
    detachedSearchButton: "aa-DetachedSearchButton",
    detachedSearchButtonIcon: "aa-DetachedSearchButtonIcon",
    detachedSearchButtonPlaceholder: "aa-DetachedSearchButtonPlaceholder",
    detachedSearchButtonQuery: "aa-DetachedSearchButtonQuery",
    form: "aa-Form",
    input: "aa-Input",
    inputWrapper: "aa-InputWrapper",
    inputWrapperPrefix: "aa-InputWrapperPrefix",
    inputWrapperSuffix: "aa-InputWrapperSuffix",
    item: "aa-Item",
    label: "aa-Label",
    list: "aa-List",
    loadingIndicator: "aa-LoadingIndicator",
    panel: "aa-Panel",
    panelLayout: "aa-PanelLayout aa-Panel--scrollable",
    root: "aa-Autocomplete",
    source: "aa-Source",
    sourceFooter: "aa-SourceFooter",
    sourceHeader: "aa-SourceHeader",
    sourceNoResults: "aa-SourceNoResults",
    submitButton: "aa-SubmitButton"
  },
  Mf = function (t, r) {
    var n = t.children,
      o = t.render;
    o(n, r);
  },
  Rf = { createElement: L, Fragment: J, render: Ar };
function kf(e) {
  var t,
    r = e.classNames,
    n = e.container,
    o = e.getEnvironmentProps,
    i = e.getFormProps,
    a = e.getInputProps,
    s = e.getItemProps,
    u = e.getLabelProps,
    c = e.getListProps,
    f = e.getPanelProps,
    l = e.getRootProps,
    d = e.panelContainer,
    p = e.panelPlacement,
    m = e.render,
    g = e.renderNoResults,
    y = e.renderer,
    v = e.detachedMediaQuery,
    _ = e.components,
    w = e.translations,
    S = Df(e, jf),
    I = typeof window < "u" ? window : {},
    E = $n(I, n);
  E.tagName;
  var A = te(te({}, Rf), y),
    h = { Highlight: If(A), ReverseHighlight: Ef(A), ReverseSnippet: Af(A), Snippet: $f(A) },
    b = {
      clearButtonTitle: "Clear",
      detachedCancelButtonText: "Cancel",
      detachedSearchButtonTitle: "Search",
      submitButtonTitle: "Submit"
    };
  return {
    renderer: {
      classNames: nu(Nf, r ?? {}),
      container: E,
      getEnvironmentProps:
        o ??
        function (O) {
          var P = O.props;
          return P;
        },
      getFormProps:
        i ??
        function (O) {
          var P = O.props;
          return P;
        },
      getInputProps:
        a ??
        function (O) {
          var P = O.props;
          return P;
        },
      getItemProps:
        s ??
        function (O) {
          var P = O.props;
          return P;
        },
      getLabelProps:
        u ??
        function (O) {
          var P = O.props;
          return P;
        },
      getListProps:
        c ??
        function (O) {
          var P = O.props;
          return P;
        },
      getPanelProps:
        f ??
        function (O) {
          var P = O.props;
          return P;
        },
      getRootProps:
        l ??
        function (O) {
          var P = O.props;
          return P;
        },
      panelContainer: d ? $n(I, d) : I.document.body,
      panelPlacement: p ?? "input-wrapper-width",
      render: m ?? Mf,
      renderNoResults: g,
      renderer: A,
      detachedMediaQuery:
        v ?? getComputedStyle(I.document.documentElement).getPropertyValue("--aa-detached-media-query"),
      components: te(te({}, h), _),
      translations: te(te({}, b), w)
    },
    core: te(te({}, S), {}, { id: (t = S.id) !== null && t !== void 0 ? t : Ao(), environment: I })
  };
}
function qf(e) {
  var t = e.panelPlacement,
    r = e.container,
    n = e.form,
    o = e.environment,
    i = r.getBoundingClientRect(),
    a = o.pageYOffset || o.document.documentElement.scrollTop || o.document.body.scrollTop || 0,
    s = a + i.top + i.height;
  switch (t) {
    case "start":
      return { top: s, left: i.left };
    case "end":
      return { top: s, right: o.document.documentElement.clientWidth - (i.left + i.width) };
    case "full-width":
      return { top: s, left: 0, right: 0, width: "unset", maxWidth: "unset" };
    case "input-wrapper-width": {
      var u = n.getBoundingClientRect();
      return {
        top: s,
        left: u.left,
        right: o.document.documentElement.clientWidth - (u.left + u.width),
        width: "unset",
        maxWidth: "unset"
      };
    }
    default:
      throw new Error("[Autocomplete] The `panelPlacement` value ".concat(JSON.stringify(t), " is not valid."));
  }
}
function st(e) {
  "@babel/helpers - typeof";
  return (
    (st =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    st(e)
  );
}
function Ct() {
  return (
    (Ct = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Ct.apply(this, arguments)
  );
}
function Kn(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Se(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Kn(Object(r), !0).forEach(function (n) {
          Bf(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Kn(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function Bf(e, t, r) {
  return (
    (t = Ff(t)),
    t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
    e
  );
}
function Ff(e) {
  var t = Hf(e, "string");
  return st(t) === "symbol" ? t : String(t);
}
function Hf(e, t) {
  if (st(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (st(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Wf(e) {
  var t = e.autocomplete,
    r = e.autocompleteScopeApi,
    n = e.dom,
    o = e.propGetters,
    i = e.state;
  Ln(n.root, o.getRootProps(Se({ state: i, props: t.getRootProps({}) }, r))),
    Ln(
      n.input,
      o.getInputProps(Se({ state: i, props: t.getInputProps({ inputElement: n.input }), inputElement: n.input }, r))
    ),
    V(n.label, { hidden: i.status === "stalled" }),
    V(n.loadingIndicator, { hidden: i.status !== "stalled" }),
    V(n.clearButton, { hidden: !i.query }),
    V(n.detachedSearchButtonQuery, { textContent: i.query }),
    V(n.detachedSearchButtonPlaceholder, { hidden: !!i.query });
}
function Kf(e, t) {
  var r = t.autocomplete,
    n = t.autocompleteScopeApi,
    o = t.classNames,
    i = t.html,
    a = t.dom,
    s = t.panelContainer,
    u = t.propGetters,
    c = t.state,
    f = t.components,
    l = t.renderer;
  if (!c.isOpen) {
    s.contains(a.panel) && s.removeChild(a.panel);
    return;
  }
  !s.contains(a.panel) && c.status !== "loading" && s.appendChild(a.panel),
    a.panel.classList.toggle("aa-Panel--stalled", c.status === "stalled");
  var d = c.collections
      .filter(function (g) {
        var y = g.source,
          v = g.items;
        return y.templates.noResults || v.length > 0;
      })
      .map(function (g, y) {
        var v = g.source,
          _ = g.items;
        return l.createElement(
          "section",
          { key: y, className: o.source, "data-autocomplete-source-id": v.sourceId },
          v.templates.header &&
            l.createElement(
              "div",
              { className: o.sourceHeader },
              v.templates.header({
                components: f,
                createElement: l.createElement,
                Fragment: l.Fragment,
                items: _,
                source: v,
                state: c,
                html: i
              })
            ),
          v.templates.noResults && _.length === 0
            ? l.createElement(
                "div",
                { className: o.sourceNoResults },
                v.templates.noResults({
                  components: f,
                  createElement: l.createElement,
                  Fragment: l.Fragment,
                  source: v,
                  state: c,
                  html: i
                })
              )
            : l.createElement(
                "ul",
                Ct({ className: o.list }, u.getListProps(Se({ state: c, props: r.getListProps({ source: v }) }, n))),
                _.map(function (w) {
                  var S = r.getItemProps({ item: w, source: v });
                  return l.createElement(
                    "li",
                    Ct({ key: S.id, className: o.item }, u.getItemProps(Se({ state: c, props: S }, n))),
                    v.templates.item({
                      components: f,
                      createElement: l.createElement,
                      Fragment: l.Fragment,
                      item: w,
                      state: c,
                      html: i
                    })
                  );
                })
              ),
          v.templates.footer &&
            l.createElement(
              "div",
              { className: o.sourceFooter },
              v.templates.footer({
                components: f,
                createElement: l.createElement,
                Fragment: l.Fragment,
                items: _,
                source: v,
                state: c,
                html: i
              })
            )
        );
      }),
    p = l.createElement(
      l.Fragment,
      null,
      l.createElement("div", { className: o.panelLayout }, d),
      l.createElement("div", { className: "aa-GradientBottom" })
    ),
    m = d.reduce(function (g, y) {
      return (g[y.props["data-autocomplete-source-id"]] = y), g;
    }, {});
  e(Se(Se({ children: p, state: c, sections: d, elements: m }, l), {}, { components: f, html: i }, n), a.panel);
}
var Go = [{ segment: "autocomplete-js", version: jo }],
  Uf = ["components"];
function lt(e) {
  "@babel/helpers - typeof";
  return (
    (lt =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    lt(e)
  );
}
function Vf(e, t) {
  if (e == null) return {};
  var r = zf(e, t),
    n,
    o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      (n = i[o]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function zf(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    o,
    i;
  for (i = 0; i < n.length; i++) (o = n[i]), !(t.indexOf(o) >= 0) && (r[o] = e[o]);
  return r;
}
function Un(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function le(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Un(Object(r), !0).forEach(function (n) {
          Qo(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Un(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function Qo(e, t, r) {
  return (
    (t = Gf(t)),
    t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
    e
  );
}
function Gf(e) {
  var t = Qf(e, "string");
  return lt(t) === "symbol" ? t : String(t);
}
function Qf(e, t) {
  if (lt(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (lt(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Yf(e) {
  var t = qu(),
    r = t.runEffect,
    n = t.cleanupEffects,
    o = t.runEffects,
    i = Bu(),
    a = i.reactive,
    s = i.runReactives,
    u = xe(!1),
    c = xe(e),
    f = xe(void 0),
    l = a(function () {
      return kf(c.current);
    }),
    d = a(function () {
      return l.value.core.environment.matchMedia(l.value.renderer.detachedMediaQuery).matches;
    }),
    p = a(function () {
      return tu(
        le(
          le({}, l.value.core),
          {},
          {
            onStateChange: function (b) {
              var O, P, C;
              (u.current = b.state.collections.some(function (N) {
                return N.source.templates.noResults;
              })),
                (O = f.current) === null || O === void 0 || O.call(f, b),
                (P = (C = l.value.core).onStateChange) === null || P === void 0 || P.call(C, b);
            },
            shouldPanelOpen:
              c.current.shouldPanelOpen ||
              function (h) {
                var b = h.state;
                if (d.value) return !0;
                var O = qe(b) > 0;
                if (!l.value.core.openOnFocus && !b.query) return O;
                var P = !!(u.current || l.value.renderer.renderNoResults);
                return (!O && P) || O;
              },
            __autocomplete_metadata: { userAgents: Go, options: e }
          }
        )
      );
    }),
    m = xe(
      le(
        { collections: [], completion: null, context: {}, isOpen: !1, query: "", activeItemId: null, status: "idle" },
        l.value.core.initialState
      )
    ),
    g = {
      getEnvironmentProps: l.value.renderer.getEnvironmentProps,
      getFormProps: l.value.renderer.getFormProps,
      getInputProps: l.value.renderer.getInputProps,
      getItemProps: l.value.renderer.getItemProps,
      getLabelProps: l.value.renderer.getLabelProps,
      getListProps: l.value.renderer.getListProps,
      getPanelProps: l.value.renderer.getPanelProps,
      getRootProps: l.value.renderer.getRootProps
    },
    y = {
      setActiveItemId: p.value.setActiveItemId,
      setQuery: p.value.setQuery,
      setCollections: p.value.setCollections,
      setIsOpen: p.value.setIsOpen,
      setStatus: p.value.setStatus,
      setContext: p.value.setContext,
      refresh: p.value.refresh,
      navigator: p.value.navigator
    },
    v = a(function () {
      return so.bind(l.value.renderer.renderer.createElement);
    }),
    _ = a(function () {
      return ku({
        autocomplete: p.value,
        autocompleteScopeApi: y,
        classNames: l.value.renderer.classNames,
        environment: l.value.core.environment,
        isDetached: d.value,
        placeholder: l.value.core.placeholder,
        propGetters: g,
        setIsModalOpen: A,
        state: m.current,
        translations: l.value.renderer.translations
      });
    });
  function w() {
    V(_.value.panel, {
      style: d.value
        ? {}
        : qf({
            panelPlacement: l.value.renderer.panelPlacement,
            container: _.value.root,
            form: _.value.form,
            environment: l.value.core.environment
          })
    });
  }
  function S(h) {
    m.current = h;
    var b = {
        autocomplete: p.value,
        autocompleteScopeApi: y,
        classNames: l.value.renderer.classNames,
        components: l.value.renderer.components,
        container: l.value.renderer.container,
        html: v.value,
        dom: _.value,
        panelContainer: d.value ? _.value.detachedContainer : l.value.renderer.panelContainer,
        propGetters: g,
        state: m.current,
        renderer: l.value.renderer.renderer
      },
      O = (!qe(h) && !u.current && l.value.renderer.renderNoResults) || l.value.renderer.render;
    Wf(b), Kf(O, b);
  }
  r(function () {
    var h = p.value.getEnvironmentProps({
      formElement: _.value.form,
      panelElement: _.value.panel,
      inputElement: _.value.input
    });
    return (
      V(l.value.core.environment, h),
      function () {
        V(
          l.value.core.environment,
          Object.keys(h).reduce(function (b, O) {
            return le(le({}, b), {}, Qo({}, O, void 0));
          }, {})
        );
      }
    );
  }),
    r(function () {
      var h = d.value ? l.value.core.environment.document.body : l.value.renderer.panelContainer,
        b = d.value ? _.value.detachedOverlay : _.value.panel;
      return (
        d.value && m.current.isOpen && A(!0),
        S(m.current),
        function () {
          h.contains(b) && (h.removeChild(b), h.classList.remove("aa-Detached"));
        }
      );
    }),
    r(function () {
      var h = l.value.renderer.container;
      return (
        h.appendChild(_.value.root),
        function () {
          h.removeChild(_.value.root);
        }
      );
    }),
    r(function () {
      var h = At(function (b) {
        var O = b.state;
        S(O);
      }, 0);
      return (
        (f.current = function (b) {
          var O = b.state,
            P = b.prevState;
          if (
            (d.value && P.isOpen !== O.isOpen && A(O.isOpen),
            !d.value && O.isOpen && !P.isOpen && w(),
            O.query !== P.query)
          ) {
            var C = l.value.core.environment.document.querySelectorAll(".aa-Panel--scrollable");
            C.forEach(function (N) {
              N.scrollTop !== 0 && (N.scrollTop = 0);
            });
          }
          h({ state: O });
        }),
        function () {
          f.current = void 0;
        }
      );
    }),
    r(function () {
      var h = At(function () {
        var b = d.value;
        (d.value = l.value.core.environment.matchMedia(l.value.renderer.detachedMediaQuery).matches),
          b !== d.value ? E({}) : requestAnimationFrame(w);
      }, 20);
      return (
        l.value.core.environment.addEventListener("resize", h),
        function () {
          l.value.core.environment.removeEventListener("resize", h);
        }
      );
    }),
    r(function () {
      if (!d.value) return function () {};
      function h(C) {
        _.value.detachedContainer.classList.toggle("aa-DetachedContainer--modal", C);
      }
      function b(C) {
        h(C.matches);
      }
      var O = l.value.core.environment.matchMedia(
        getComputedStyle(l.value.core.environment.document.documentElement).getPropertyValue(
          "--aa-detached-modal-media-query"
        )
      );
      h(O.matches);
      var P = !!O.addEventListener;
      return (
        P ? O.addEventListener("change", b) : O.addListener(b),
        function () {
          P ? O.removeEventListener("change", b) : O.removeListener(b);
        }
      );
    }),
    r(function () {
      return requestAnimationFrame(w), function () {};
    });
  function I() {
    n();
  }
  function E() {
    var h = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    n();
    var b = l.value.renderer,
      O = b.components,
      P = Vf(b, Uf);
    (c.current = Mo(
      P,
      l.value.core,
      {
        components: hu(O, function (C) {
          var N = C.value;
          return !N.hasOwnProperty("__autocomplete_componentName");
        }),
        initialState: m.current
      },
      h
    )),
      s(),
      o(),
      p.value.refresh().then(function () {
        S(m.current);
      });
  }
  function A(h) {
    var b = l.value.core.environment.document.body.contains(_.value.detachedOverlay);
    h !== b &&
      (h
        ? (l.value.core.environment.document.body.appendChild(_.value.detachedOverlay),
          l.value.core.environment.document.body.classList.add("aa-Detached"),
          _.value.input.focus())
        : (l.value.core.environment.document.body.removeChild(_.value.detachedOverlay),
          l.value.core.environment.document.body.classList.remove("aa-Detached")));
  }
  return le(le({}, y), {}, { update: E, destroy: I });
}
function ct(e) {
  "@babel/helpers - typeof";
  return (
    (ct =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    ct(e)
  );
}
function Vn(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function zn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Vn(Object(r), !0).forEach(function (n) {
          Jf(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Vn(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function Jf(e, t, r) {
  return (
    (t = Xf(t)),
    t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
    e
  );
}
function Xf(e) {
  var t = Zf(e, "string");
  return ct(t) === "symbol" ? t : String(t);
}
function Zf(e, t) {
  if (ct(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (ct(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var ep = pf(function (e) {
    return Pf(zn(zn({}, e), {}, { userAgents: Go }));
  }, "algolia"),
  tp = ep({
    transformResponse: function (t) {
      return t.hits;
    }
  });
const rp = document.getElementById("hits"),
  np =
    rp &&
    Xa({
      container: "#hits",
      templates: {
        item(e, { html: t, components: r }) {
          const n = e.isComingSoon
              ? t`<div
              class="absolute w-full h-full inset-0 opacity-0 rounded-2xl duration-500 bg-blue-600 pointer-events-none group-hover:pointer-events-auto group-hover:opacity-100 group-hover:ease-in-out group-hover:block"
            >
              <div
                class="flex flex-col items-start justify-center h-full pl-6 pt-8 duration-300 ease-in-out delay-100 group-hover:duration-500 group-hover:pt-0"
              >
                <p
                  class="p3 text-white mb-3"
                  style="font-size:15px !important;"
                >
                  This connector will be released soon. Learn more about it from
                  our team.
                </p>
                <div
                  class="text-cyan-500 cursor-pointer"
                  style="font-size:15px;font-weight:600 !important;"
                >
                  Talk to us
                  <img
                    src="https://website-assets.atlan.com/img/arrow-right-cyan.svg"
                    alt="cyan arrow"
                    style="width:12px;"
                    class="ml-1"
                  />
                </div>
              </div>
            </div>`
              : t``,
            o = e.isUnderConsideration
              ? t`<div
              class="absolute w-full h-full inset-0 opacity-0 rounded-2xl duration-500 bg-blue-600 pointer-events-none group-hover:pointer-events-auto group-hover:opacity-100 group-hover:ease-in-out group-hover:block"
            >
              <div
                class="flex flex-col items-start justify-center h-full pl-6 pt-8 duration-300 ease-in-out delay-100 group-hover:duration-500 group-hover:pt-0"
              >
                <p
                  class="p3 text-white mb-3"
                  style="font-size:15px !important;"
                >
                  Is this connector important to you? <br />
                  Let's build it together.
                </p>
                <div
                  class="text-cyan-500 cursor-pointer"
                  style="font-size:15px;font-weight:600 !important;"
                >
                  Talk to us
                  <img
                    src="https://website-assets.atlan.com/img/arrow-right-cyan.svg"
                    alt="cyan arrow"
                    style="width:12px;"
                    class="ml-1"
                  />
                </div>
              </div>
            </div>`
              : t``,
            i = e.isComingSoon
              ? t`<div>
              <div
                class="items-center text-blue-500 bg-gray-50 badge badge-md rounded-md py-1 px-3"
                style="background-color:background: #F5F5FF;"
              >
                Coming Soon
              </div>
            </div>`
              : t``,
            a = e.isUnderConsideration
              ? t`<div>
              <div
                class="items-center text-gray-500 bg-gray-50 badge badge-md rounded-md py-1 px-3"
              >
                Under Consideration
              </div>
            </div>`
              : t``,
            s = (u) => di(u || "", { customReplacements: [["'", ""]] });
          return t`
          <a
            class="flex flex-col items-start pl-6 pr-6 py-6 border rounded-2xl relative h-full min-h-[138px] ${e.parentClass} connector-card"
            href="${e.link || `/forms/get-started/?name=${e.name}`}"
            target="${e.link ? "_blank" : ""}"
            id="connector_${e.objectID}"
            style="border-width:1px"
            data-connector-title="${e.name}"
            data-category-type="${e.isComingSoon ? "comingSoon" : e.isUnderConsideration ? "underConsideration" : "live"}"
            data-filter-item="${s(e.tagType) || "all"}"
          >
            ${o} ${n}

            <div class="flex flex-col h-full justify-between w-full gap-2">
              <div class="flex items-start justify-between flex-1">
                <div class="mb-2 h-15 flex-1">
                  <div class="max-h-[50px]">
                    <img
                      src="${e.logo}"
                      alt="altText"
                      class="${e.iconClass ? e.iconClass : "w-16 h-full"}"
                    />
                  </div>
                </div>
                <div
                  class="badge badge-md rounded-md py-1 px-3 !hidden group-hover:!block ${e.isComingSoon || e.isUnderConsideration ? "group-hover:!hidden" : ""}"
                  style="background-color: ${e.tagBg}"
                >
                  <span style="color: ${e.tagTextColor}">${e.tagName}</span>
                </div>
                ${i} ${a}
              </div>
              <div>
                <div class="flex items-start justify-between">
                  <h6
                    class="font-bold text-lg text-gray-600 p2 connector-title"
                    style="font-weight:900"
                  >
                    ${r.Highlight({ hit: e, attribute: "name" })}
                  </h6>
                  <img
                    class="group-hover:!block !hidden ${e.isComingSoon || e.isUnderConsideration ? "group-hover:!hidden" : ""}"
                    src="https://website-assets.atlan.com/img/chevron-right-primary.svg"
                    alt="icon"
                  />
                </div>
              </div>
            </div>
          </a>
        `;
        },
        empty() {
          return `
  <div class="hits-empty-state">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      width="138"
      height="138"
      class="hits-empty-state-image"
    >
      <defs>
        <linearGradient id="c" x1="50%" x2="50%" y1="100%" y2="0%">
          <stop offset="0%" stop-color="#F5F5FA" />
          <stop offset="100%" stop-color="#FFF" />
        </linearGradient>
        <path
          id="b"
          d="M68.71 114.25a45.54 45.54 0 1 1 0-91.08 45.54 45.54 0 0 1 0 91.08z"
        />
        <filter
          id="a"
          width="140.6%"
          height="140.6%"
          x="-20.3%"
          y="-15.9%"
          filterUnits="objectBoundingBox"
        >
          <feOffset dy="4" in="SourceAlpha" result="shadowOffsetOuter1" />
          <feGaussianBlur
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
            stdDeviation="5.5"
          />
          <feColorMatrix
            in="shadowBlurOuter1"
            result="shadowMatrixOuter1"
            values="0 0 0 0 0.145098039 0 0 0 0 0.17254902 0 0 0 0 0.380392157 0 0 0 0.15 0"
          />
          <feOffset dy="2" in="SourceAlpha" result="shadowOffsetOuter2" />
          <feGaussianBlur
            in="shadowOffsetOuter2"
            result="shadowBlurOuter2"
            stdDeviation="1.5"
          />
          <feColorMatrix
            in="shadowBlurOuter2"
            result="shadowMatrixOuter2"
            values="0 0 0 0 0.364705882 0 0 0 0 0.392156863 0 0 0 0 0.580392157 0 0 0 0.2 0"
          />
          <feMerge>
            <feMergeNode in="shadowMatrixOuter1" />
            <feMergeNode in="shadowMatrixOuter2" />
          </feMerge>
        </filter>
      </defs>
      <g fill="none" fill-rule="evenodd">
        <circle
          cx="68.85"
          cy="68.85"
          r="68.85"
          fill="#5468FF"
          opacity=".07"
        />
        <circle
          cx="68.85"
          cy="68.85"
          r="52.95"
          fill="#5468FF"
          opacity=".08"
        />
        <use fill="#000" filter="url(#a)" xlink:href="#b" />
        <use fill="url(#c)" xlink:href="#b" />
        <path
          d="M76.01 75.44c5-5 5.03-13.06.07-18.01a12.73 12.73 0 0 0-18 .07c-5 4.99-5.03 13.05-.07 18a12.73 12.73 0 0 0 18-.06zm2.5 2.5a16.28 16.28 0 0 1-23.02.09A16.29 16.29 0 0 1 55.57 55a16.28 16.28 0 0 1 23.03-.1 16.28 16.28 0 0 1-.08 23.04zm1.08-1.08l-2.15 2.16 8.6 8.6 2.16-2.15-8.6-8.6z"
          fill="#5369FF"
        />
      </g>
    </svg>

    <p class="hits-empty-state-title">
      Can't find the tool in your stack?
    </p>
    <p class="hits-empty-state-description">
      Let us know and we'll build it together.
    </p>
    <a  class="btn btn-primary mt-5 btn-sm send-ga-event p3 block" 
        data-modal="request-integration-modal" 
        id="request-connector-btn-top-fold" 
        style="border-radius:13px !important;"
        >
    Request connector</a>
  </div>
`;
        }
      }
    }),
  op = np;
function ip(e, t) {
  let r;
  return function (...o) {
    return (
      r && clearTimeout(r),
      new Promise((i) => {
        r = setTimeout(() => i(e(...o)), t);
      })
    );
  };
}
const ap = "N7XGBZ1DRU",
  sp = "da0389f95d810db01da8b364be4a29e0";
let lp = document.querySelector("#autocomplete");
lp && cp();
function cp() {
  const e = ip((c) => Promise.resolve(c), 300),
    t = Xo(ap, sp),
    r = "master_CONNECTORS",
    n = ci(),
    o = {
      ...t,
      search(c) {
        const f = c.map((l) => ((!l.params.query || l.params.query.length === 0) && (l.params.analytics = !1), l));
        return t.search(f);
      }
    },
    i = ui(() => {}),
    a = fi({ searchClient: o, indexName: r, routing: n });
  a.addWidgets([i({}), op, pi({ indexName: r }).addWidgets([Ba({})])]),
    a.on("render", (c) => {
      const f = new Event("make-current-filter-active");
      if (
        (console.log("Dispatchign"),
        document.dispatchEvent(f),
        window.registerModalButtons(),
        !document.querySelector(".request-connector-li"))
      ) {
        let d = document.createElement("li");
        d.classList.add("request-connector-li"),
          (d.innerHTML = `<div class="relative flex flex-col items-start block py-6 pl-6 pr-6 border rounded-2xl md:justify-center" style="border-width:1px">
  <div class="pt-1 p2 !font-extrabold">Can’t find the tool in your stack?</div><a class="mt-4 btn btn-outline-primary btn-sm req-integ-btn send-ga-event md:mt-4 !p3" id="request-connector-btn-card" href="/forms/request-connector/" style="border-radius:56px">Request connector</a>
</div>`);
        let p = document.querySelector(".ais-Hits-list");
        p && p.appendChild(d);
      }
      const l = document.querySelector("#loading-indicator");
      a.status === "loading" || a.status === "stalled"
        ? (l.innerHTML =
            '<img class="spinner-loader" src="https://website-assets.atlan.com/spinner-blue.svg" alt="spinner" width="50">')
        : (l.innerHTML = "");
    }),
    a.start();
  function s(c) {
    a.setUiState((f) => ({ ...f, [r]: { ...f[r], page: 1, ...c } }));
  }
  function u() {
    const c = n.read();
    return (c && c[r]) || {};
  }
  u(),
    Yf({
      container: "#autocomplete",
      placeholder: "Search for warehouses, BI tools, and more",
      openOnFocus: !0,
      insights: !0,
      getSources({ query: c }) {
        return c
          ? e([
              {
                sourceId: "products",
                getItems() {
                  return tp({ searchClient: o, queries: [{ indexName: r, query: c, params: { hitsPerPage: 8 } }] });
                },
                getItemUrl({ item: f }) {
                  return f.link || `/forms/get-started/?name=${f.name}`;
                },
                templates: {
                  item({ item: f, components: l, html: d }) {
                    const p = f.isUnderConsideration
                        ? d`<div>
                      <div
                        class="items-center px-3 py-1 text-gray-500 border rounded-md bg-gray-50 badge badge-md"
                      >
                        Under Consideration
                      </div>
                    </div>`
                        : d``,
                      m = f.isComingSoon
                        ? d`<div>
                      <div
                        class="items-center px-3 py-1 text-blue-500 border rounded-md bg-gray-50 badge badge-md"
                        style="background-color:background: #F5F5FF;"
                      >
                        Coming Soon
                      </div>
                    </div>`
                        : d``;
                    return d`<a
                  class="flex aa-ItemWrapper"
                  href="${f.link || `/forms/get-started/?name=${f.name}`}"
                  target="${f.link ? "_blank" : ""}"
                >
                  <div
                    class="flex justify-between w-full aa-ItemContent md:w-[655px] w-[370px]"
                  >
                    <div class="flex items-center flex-1 gap-4">
                      <div class="aa-ItemIcon aa-ItemIcon--alignTop">
                        <img
                          src="${f.logo}"
                          alt="${f.name}"
                          width="40"
                          height="40"
                        />
                      </div>
                      <div class="aa-ItemContentBody">
                        <div class="aa-ItemContentTitle">
                          ${l.Highlight({ hit: f, attribute: "name" })}
                        </div>
                        <div class="aa-ItemContentDescription">
                          ${l.Snippet({ hit: f, attribute: "description" })}
                        </div>
                      </div>
                      <div class="aa-ItemActions">
                        <button
                          class="aa-ItemActionButton aa-DesktopOnly aa-ActiveOnly"
                          type="button"
                          title="Select"
                        >
                          <svg
                            viewBox="0 0 24 24"
                            width="20"
                            height="20"
                            fill="currentColor"
                          >
                            <path
                              d="M18.984 6.984h2.016v6h-15.188l3.609 3.609-1.406 1.406-6-6 6-6 1.406 1.406-3.609 3.609h13.172v-4.031z"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div>${m} ${p}</div>
                  </div>
                </a>`;
                  }
                }
              }
            ])
          : [
              {
                sourceId: "empty-state-links",
                getItems() {
                  return [
                    {
                      logo: "https://website-assets.atlan.com/img/integration-logos/snow-logo.svg",
                      label: "Snowflake",
                      url: "https://ask.atlan.com/hc/en-us/articles/6191147037841"
                    },
                    {
                      logo: "https://website-assets.atlan.com/img/stack/databricks.svg",
                      label: "Databricks",
                      url: "https://ask.atlan.com/hc/en-us/articles/6328320542737"
                    },
                    {
                      logo: "https://website-assets.atlan.com/img/integration-logos/dbt-logo.svg",
                      label: "Dbt",
                      url: "https://ask.atlan.com/hc/en-us/articles/6335792032529"
                    },
                    {
                      logo: "https://website-assets.atlan.com/img/stack/athena.svg",
                      label: "Amazon Athena",
                      url: "https://ask.atlan.com/hc/en-us/articles/6325332880273"
                    },
                    {
                      logo: "https://website-assets.atlan.com/img/integration-logos/powerbi-logo.svg",
                      label: "Power BI",
                      url: "https://ask.atlan.com/hc/en-us/articles/6332230874897"
                    },
                    {
                      logo: "https://website-assets.atlan.com/img/integration-logos/tableau-logo.svg",
                      label: "Tableau",
                      url: "https://ask.atlan.com/hc/en-us/articles/6332466426897"
                    },
                    {
                      logo: "https://website-assets.atlan.com/img/kafka.svg",
                      label: "Kafka",
                      url: "https://ask.atlan.com/hc/en-us/articles/6625268165519"
                    },
                    {
                      logo: "https://website-assets.atlan.com/img/stack/fivetran.svg",
                      label: "Fivetran",
                      url: "https://ask.atlan.com/hc/en-us/articles/8427123935121"
                    },
                    {
                      logo: "https://website-assets.atlan.com/img/stack/microsoft-sql.svg",
                      label: "Microsoft SQL Server",
                      url: "https://ask.atlan.com/hc/en-us/articles/6190830031249"
                    },
                    {
                      logo: "https://website-assets.atlan.com/img/data-catalog/oracle.svg",
                      label: "Oracle",
                      url: "https://ask.atlan.com/hc/en-us/articles/6850339304861"
                    }
                  ];
                },
                getItemUrl({ item: f }) {
                  return f.url;
                },
                templates: {
                  header({ html: f }) {
                    return f`<p class="ml-2 text-gray-400 text-[14px]">
                    Top 10 Searches
                  </p>`;
                  },
                  item({ item: f, html: l, components: d }) {
                    return l` <a
                    class="flex aa-ItemWrapper"
                    href="${f.url || "javascript:void(0)"}"
                    target="${f.url ? "_blank" : ""}"
                  >
                    <div class="flex w-full aa-ItemContent">
                      <div class="flex items-center flex-1 gap-4">
                        <div class="aa-ItemIcon aa-ItemIcon--alignTop">
                          <img
                            src="${f.logo}"
                            alt="${f.label}"
                            width="40"
                            height="40"
                          />
                        </div>
                        <div class="aa-ItemContentBody">
                          <div class="aa-ItemContentTitle">
                            ${d.Highlight({ hit: f, attribute: "label" })}
                          </div>
                          <div class="aa-ItemContentDescription">
                            ${d.Snippet({ hit: f, attribute: "description" })}
                          </div>
                        </div>
                        <div class="aa-ItemActions">
                          <button
                            class="aa-ItemActionButton aa-DesktopOnly aa-ActiveOnly"
                            type="button"
                            title="Select"
                          >
                            <svg
                              viewBox="0 0 24 24"
                              width="20"
                              height="20"
                              fill="currentColor"
                            >
                              <path
                                d="M18.984 6.984h2.016v6h-15.188l3.609 3.609-1.406 1.406-6-6 6-6 1.406 1.406-3.609 3.609h13.172v-4.031z"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </a>`;
                  }
                }
              }
            ];
      },
      renderNoResults({ render: c, html: f, state: l }, d) {
        c(
          f`
            <a
              href="/forms/request-connector/?name=${l.query}"
              class="flex items-center px-2 py-0 m-2 group hover:bg-[#EFEEF7]"
            >
              <img
                src="https://website-assets.atlan.com/img/icon-plus.svg"
                width="35"
                height="35"
                class="p-2 border bg-blue-50 rounded-4"
              />
              <div class="md:aa-PanelLayout aa-Panel--scrollable">
                <span class="font-bold group-hover:text-blue-500"
                  >${l.query}</span
                >
                <p class="mt-2 text-[13px] text-gray-500">
                  Request this connector
                </p>
              </div>
            </a>
          `,
          d
        );
      },
      navigator: {
        navigate({ itemUrl: c }) {
          window.location.assign(c);
        }
      },
      onSubmit({ state: c }) {
        s({ query: c.query });
      },
      onReset() {
        s({ query: "" });
      },
      onStateChange({ prevState: c, state: f }) {
        window.registerModalButtons();
      }
    }),
    window.addEventListener("popstate", () => {
      setQuery(a.helper?.state.query || "");
    });
}
(function () {
  window.addEventListener("message", (t) => {
    if (t.data.type === "hsFormCallback" && t.data.eventName === "onFormReady") {
      let r;
      const n = new URL(document.location).searchParams.get("ref"),
        o = new URL(document.location).search,
        i = document.referrer ? new URL(document.referrer).pathname : "";
      n ? (r = n) : o ? (r = o) : i ? (r = i) : (r = "undetermined");
      const a = document.cookie.match(/_ga=(.+?);/),
        s = a ? a[1].split(".").slice(-2).join(".") : null,
        u = document.querySelector("[name=google_client_id]"),
        c = document.querySelector("[name=previous_page_url]"),
        f = document.querySelector("[name=previous_page_url__book_a_demo_]");
      u && (u.value = s), c && (c.value = r), f && (f.value = r);
    }
  });
})();
function Gn() {
  var e = function () {
    return (((1 + Math.random()) * 65536) | 0).toString(16).substring(1);
  };
  return e() + e() + "-" + e() + "-" + e() + "-" + e() + "-" + e() + e() + e();
}
function up() {
  document.querySelectorAll("h2").forEach((t) => {
    t.style.scrollMarginTop = "5.5rem";
  });
}
function fp() {
  const e = document.getElementById("page-ext").innerText,
    r = (e ? JSON.parse(e) : {}).inlineForms || [];
  document.querySelectorAll("md-form").forEach((i) => {
    const a = i.getAttribute("formid"),
      s = i.getAttribute("title"),
      u = i.getAttribute("subtitle"),
      c = i.getAttribute("design"),
      f = i.getAttribute("left"),
      l = i.getAttribute("image"),
      d = i.getAttribute("image-size"),
      p = i.getAttribute("image-position");
    o({ container: i, formId: a, image: l, title: s, subtitle: u, left: f, design: c, imageSize: d, imagePosition: p });
  }),
    r.forEach(
      ({
        insertAfter: i,
        insertBefore: a,
        formId: s,
        image: u,
        title: c,
        subtitle: f,
        left: l,
        design: d,
        imageSize: p,
        imagePosition: m
      }) => {
        const g = document.querySelector(i || a),
          y = document.createElement("div"),
          v = i ? "afterend" : "beforebegin";
        g.insertAdjacentElement(v, y),
          o({
            container: y,
            formId: s,
            image: u,
            title: c,
            subtitle: f,
            left: l,
            design: d,
            imageSize: p,
            imagePosition: m
          });
      }
    );
  async function o({
    container: i,
    formId: a,
    image: s,
    title: u,
    subtitle: c,
    left: f,
    design: l,
    imageSize: d,
    imagePosition: p
  }) {
    const m = {
        default: { container: "block " },
        basic: {
          container: "rounded-lg block bg-blue-50 relative flex flex-col lg:flex-row",
          content: " p-4 lg:p-9 flex-auto",
          image:
            "w-full lg:w-[174px] flex-none h-72 lg:h-auto bg-blue-100 rounded-t-lg lg:rounded-l-lg bg-contain bg-center bg-no-repeat"
        }
      },
      g = m[l] || m.default;
    i.className += g.container;
    const y = document.createElement("div");
    (y.className += g.image),
      s &&
        ((y.style.backgroundImage = `url(${s})`),
        (y.style.backgroundSize = d),
        (y.style.backgroundPosition = p),
        i.appendChild(y));
    const v = document.createElement("div");
    (v.className += g.content), i.appendChild(v);
    const _ = document.createElement("div"),
      w = f ? "text-left" : "text-center";
    if ((_.classList.add(w), _.classList.add("hs-form-holder"), (_.id = "form-holder-" + Gn()), u)) {
      const S = document.createElement("h4");
      (S.innerHTML = u), (S.className = " text-lg font-semibold mb-5 form-here"), v.appendChild(S);
    }
    if (c) {
      const S = document.createElement("p");
      (S.innerHTML = c), (S.className = "text-gray-700 mb-6"), v.appendChild(S);
    }
    v.appendChild(_),
      i.classList.add("hubspot-inline-formblock"),
      setTimeout(() => {
        window.hbspt &&
          window.hbspt.forms.create({
            portalId: "6880682",
            formId: a,
            target: `#${_.id}`,
            formInstanceId: "instance_" + Gn()
          }),
          setTimeout(() => {
            if (!window.hbspt) {
              console.log("Hubspot did not load");
              const S = document.querySelectorAll(".hs-form-holder");
              Array.from(S).forEach((I) => {
                const E = I;
                E &&
                  ((E.className += " p-5 text-center bg-white rounded-lg"),
                  (E.innerHTML = `⚠️ We're unable to load this form. Please check your browser's security settings and turn off any ad blockers as they may interfere with form load. In case that doesn't work, 
               <a href="/forms/contact?ref=${document.location.pathname}" class="text-primary underline">click here</a>, to leave your email and we will get back you.
              `));
              }),
                window.Bugsnag &&
                  window.Bugsnag.notify("hubspot-form-not-loading", function (I) {
                    (I.severity = "info"),
                      (I.context = document.location.pathname),
                      I.addMetadata("moreInfo", { previousPage: document.location.search });
                  });
            }
          }, 1e3);
      }, 100);
  }
}
function pp() {
  document.querySelectorAll("two-cta").forEach((r) => {
    t(r);
  });
  function t(r) {
    console.log("container", r);
    const n = document.createElement("div");
    n.className = "flex items-center justify-center gap-6 w-full";
    const o = r.getAttribute("leftctatext"),
      i = r.getAttribute("leftctalink"),
      a = r.getAttribute("rightctatext"),
      s = r.getAttribute("rightctalink"),
      u = document.createElement("div");
    u.innerHTML = `<a href="${i}" class="btn three-min-cta send-ga-event btn-primary btn-md my-0 py-3 px-3 text-white">${o}</a>`;
    const c = document.createElement("div");
    (c.innerHTML = `<a href="${s}" class="btn read-docs-btn btn-outline-primary btn-md send-ga-event py-3 px-3 text-blue">${a}</a>`),
      n.append(u),
      n.append(c),
      r.append(n);
    const f = document.location.origin,
      l = document.location.pathname;
    n &&
      n.querySelectorAll("a").forEach((d) => {
        const { href: p, host: m } = d;
        if (!p) return;
        const g = new URL(p),
          y = g.searchParams,
          v = d.getAttribute("href"),
          _ = m?.includes("atlan.com") || m?.includes("atln.cm");
        if (
          !v.startsWith("#") &&
          !v.startsWith("mailto:") &&
          !g.hash &&
          !(!_ && v.startsWith("http")) &&
          !v.includes("javascript:void(")
        ) {
          if (v?.includes(".atlan.com") || v?.includes("atln.cm")) {
            y.set("ref", f + l), (g.search = decodeURIComponent(y.toString())), (d.href = g.toString());
            return;
          }
          y.set("ref", l), (g.search = decodeURIComponent(y.toString())), (d.href = g.toString());
        }
      });
  }
}
const dp = new Event("search-clicked"),
  mp = document.querySelectorAll("div.sidebarVisible");
mp.forEach((e) => {
  e.addEventListener("click", () => {
    document.getElementById("searchInput").blur(),
      document.dispatchEvent(dp),
      document.getElementById("slideover-container").classList.toggle("invisible"),
      document.getElementById("slideover-bg").classList.toggle("opacity-0"),
      document.getElementById("slideover-bg").classList.toggle("opacity-80"),
      document.getElementById("slideover").classList.toggle("translate-x-full"),
      (document.body.style.overflow = "hidden");
    let r = document.getElementsByClassName("ais-SearchBox-input");
    if (r.length > 0) {
      var n = r[0];
      setTimeout(() => {
        n.focus();
      }, 100),
        setTimeout(() => {
          const o = document.getElementById("loader");
          o.style.display = "none";
        }, 4e3);
    }
  });
});
function gp() {
  const e = document.getElementById("page-right-sidebar");
  e &&
    document.querySelectorAll("table").forEach((t) => {
      let r = (o, i) => {
        o.forEach((a) => {
          a.isIntersecting ? (e.style.opacity = 0) : (e.style.opacity = 1);
        });
      };
      new IntersectionObserver(r, { threshold: [0, 1] }).observe(t);
    });
}
document.addEventListener("DOMContentLoaded", function () {
  const e = document.getElementById("searchButton"),
    t = document.getElementById("searchInput");
  t &&
    t.addEventListener("keydown", function (r) {
      r.key === "Enter" && (r.preventDefault(), e.click());
    });
});
gp();
setTimeout(() => {
  up(), fp(), pp();
}, 1e3);
window.addEventListener("scroll", function () {
  const e = document.querySelector(".progress-bar");
  if (e) {
    const t = document.documentElement.scrollHeight - document.documentElement.clientHeight,
      n = (window.scrollY / t) * 100;
    e.style.width = n + "%";
  }
});
window.addEventListener("message", (e) => {
  e?.data?.eventName === "onFormSubmit" &&
    e?.data?.id === "143c9acd-25d1-424e-9320-8274d9b078b7" &&
    (window.location.href = `/demo/welcome?ref=${window.location.pathname}`);
});