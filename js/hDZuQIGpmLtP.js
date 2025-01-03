!(function (e) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = e();
    else if ("function" == typeof define && define.amd) define([], e);
    else {
        ("undefined" != typeof window
            ? window
            : "undefined" != typeof global
              ? global
              : "undefined" != typeof self
                ? self
                : this
        ).Bugsnag = e();
    }
})(function () {
    var e = ["navigation", "request", "process", "log", "user", "state", "error", "manual"],
        t = function (e, t, n) {
            for (var r = n, a = 0, o = e.length; a < o; a++) r = t(r, e[a], a, e);
            return r;
        },
        n = function (e, n) {
            return t(
                e,
                function (e, t, r, a) {
                    return n(t, r, a) ? e.concat(t) : e;
                },
                []
            );
        },
        r = function (e, n) {
            return t(
                e,
                function (e, t, r, a) {
                    return !0 === e || t === n;
                },
                !1
            );
        },
        a = function (e) {
            return "[object Array]" === Object.prototype.toString.call(e);
        },
        o = !{ toString: null }.propertyIsEnumerable("toString"),
        i = [
            "toString",
            "toLocaleString",
            "valueOf",
            "hasOwnProperty",
            "isPrototypeOf",
            "propertyIsEnumerable",
            "constructor"
        ],
        s = function (e) {
            var t,
                n = [];
            for (t in e) Object.prototype.hasOwnProperty.call(e, t) && n.push(t);
            if (!o) return n;
            for (var r = 0, a = i.length; r < a; r++) Object.prototype.hasOwnProperty.call(e, i[r]) && n.push(i[r]);
            return n;
        },
        u = function (e, t) {
            return (
                void 0 === e && (e = 1),
                void 0 === t && (t = Infinity),
                function (n) {
                    return "number" == typeof n && parseInt("" + n, 10) === n && n >= e && n <= t;
                }
            );
        },
        c = function (e) {
            return (
                "function" == typeof e ||
                (a(e) &&
                    n(e, function (e) {
                        return "function" == typeof e;
                    }).length === e.length)
            );
        },
        l = function (e) {
            return "string" == typeof e && !!e.length;
        },
        d = {};
    d.schema = {
        apiKey: {
            defaultValue: function () {
                return null;
            },
            message: "is required",
            validate: l
        },
        appVersion: {
            defaultValue: function () {
                return undefined;
            },
            message: "should be a string",
            validate: function (e) {
                return e === undefined || l(e);
            }
        },
        appType: {
            defaultValue: function () {
                return undefined;
            },
            message: "should be a string",
            validate: function (e) {
                return e === undefined || l(e);
            }
        },
        autoDetectErrors: {
            defaultValue: function () {
                return !0;
            },
            message: "should be true|false",
            validate: function (e) {
                return !0 === e || !1 === e;
            }
        },
        enabledErrorTypes: {
            defaultValue: function () {
                return { unhandledExceptions: !0, unhandledRejections: !0 };
            },
            message:
                "should be an object containing the flags { unhandledExceptions:true|false, unhandledRejections:true|false }",
            allowPartialObject: !0,
            validate: function (e) {
                if ("object" != typeof e || !e) return !1;
                var t = s(e),
                    a = s({ unhandledExceptions: !0, unhandledRejections: !0 });
                return (
                    !(
                        n(t, function (e) {
                            return r(a, e);
                        }).length < t.length
                    ) &&
                    !(
                        n(s(e), function (t) {
                            return "boolean" != typeof e[t];
                        }).length > 0
                    )
                );
            }
        },
        onError: {
            defaultValue: function () {
                return [];
            },
            message: "should be a function or array of functions",
            validate: c
        },
        onSession: {
            defaultValue: function () {
                return [];
            },
            message: "should be a function or array of functions",
            validate: c
        },
        onBreadcrumb: {
            defaultValue: function () {
                return [];
            },
            message: "should be a function or array of functions",
            validate: c
        },
        endpoints: {
            defaultValue: function (e) {
                return void 0 === e
                    ? { notify: "https://notify.bugsnag.com", sessions: "https://sessions.bugsnag.com" }
                    : { notify: null, sessions: null };
            },
            message: "should be an object containing endpoint URLs { notify, sessions }",
            validate: function (e) {
                return (
                    e &&
                    "object" == typeof e &&
                    l(e.notify) &&
                    l(e.sessions) &&
                    0 ===
                        n(s(e), function (e) {
                            return !r(["notify", "sessions"], e);
                        }).length
                );
            }
        },
        autoTrackSessions: {
            defaultValue: function (e) {
                return !0;
            },
            message: "should be true|false",
            validate: function (e) {
                return !0 === e || !1 === e;
            }
        },
        enabledReleaseStages: {
            defaultValue: function () {
                return null;
            },
            message: "should be an array of strings",
            validate: function (e) {
                return (
                    null === e ||
                    (a(e) &&
                        n(e, function (e) {
                            return "string" == typeof e;
                        }).length === e.length)
                );
            }
        },
        releaseStage: {
            defaultValue: function () {
                return "production";
            },
            message: "should be a string",
            validate: function (e) {
                return "string" == typeof e && e.length;
            }
        },
        maxBreadcrumbs: {
            defaultValue: function () {
                return 25;
            },
            message: "should be a number ≤100",
            validate: function (e) {
                return u(0, 100)(e);
            }
        },
        enabledBreadcrumbTypes: {
            defaultValue: function () {
                return e;
            },
            message: "should be null or a list of available breadcrumb types (" + e.join(",") + ")",
            validate: function (n) {
                return (
                    null === n ||
                    (a(n) &&
                        t(
                            n,
                            function (t, n) {
                                return !1 === t ? t : r(e, n);
                            },
                            !0
                        ))
                );
            }
        },
        context: {
            defaultValue: function () {
                return undefined;
            },
            message: "should be a string",
            validate: function (e) {
                return e === undefined || "string" == typeof e;
            }
        },
        user: {
            defaultValue: function () {
                return {};
            },
            message: "should be an object with { id, email, name } properties",
            validate: function (e) {
                return (
                    null === e ||
                    (e &&
                        t(
                            s(e),
                            function (e, t) {
                                return e && r(["id", "email", "name"], t);
                            },
                            !0
                        ))
                );
            }
        },
        metadata: {
            defaultValue: function () {
                return {};
            },
            message: "should be an object",
            validate: function (e) {
                return "object" == typeof e && null !== e;
            }
        },
        logger: {
            defaultValue: function () {
                return undefined;
            },
            message: "should be null or an object with methods { debug, info, warn, error }",
            validate: function (e) {
                return (
                    !e ||
                    (e &&
                        t(
                            ["debug", "info", "warn", "error"],
                            function (t, n) {
                                return t && "function" == typeof e[n];
                            },
                            !0
                        ))
                );
            }
        },
        redactedKeys: {
            defaultValue: function () {
                return ["password"];
            },
            message: "should be an array of strings|regexes",
            validate: function (e) {
                return (
                    a(e) &&
                    e.length ===
                        n(e, function (e) {
                            return "string" == typeof e || (e && "function" == typeof e.test);
                        }).length
                );
            }
        },
        plugins: {
            defaultValue: function () {
                return [];
            },
            message: "should be an array of plugin objects",
            validate: function (e) {
                return (
                    a(e) &&
                    e.length ===
                        n(e, function (e) {
                            return e && "object" == typeof e && "function" == typeof e.load;
                        }).length
                );
            }
        },
        featureFlags: {
            defaultValue: function () {
                return [];
            },
            message: 'should be an array of objects that have a "name" property',
            validate: function (e) {
                return (
                    a(e) &&
                    e.length ===
                        n(e, function (e) {
                            return e && "object" == typeof e && "string" == typeof e.name;
                        }).length
                );
            }
        },
        reportUnhandledPromiseRejectionsAsHandled: {
            defaultValue: function () {
                return !1;
            },
            message: "should be true|false",
            validate: function (e) {
                return !0 === e || !1 === e;
            }
        }
    };
    var f = function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        },
        g = function (e, n) {
            return t(
                e,
                function (e, t, r, a) {
                    return e.concat(n(t, r, a));
                },
                []
            );
        };
    function h() {
        return (h = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                  }
                  return e;
              }).apply(this, arguments);
    }
    var p = d.schema,
        v = {
            releaseStage: f({}, p.releaseStage, {
                defaultValue: function () {
                    return /^localhost(:\d+)?$/.test(window.location.host) ? "development" : "production";
                }
            }),
            appType: h({}, p.appType, {
                defaultValue: function () {
                    return "browser";
                }
            }),
            logger: f({}, p.logger, {
                defaultValue: function () {
                    return "undefined" != typeof console && "function" == typeof console.debug ? m() : undefined;
                }
            })
        },
        m = function () {
            var e = {},
                t = console.log;
            return (
                g(["debug", "info", "warn", "error"], function (n) {
                    var r = console[n];
                    e[n] = "function" == typeof r ? r.bind(console, "[bugsnag]") : t.bind(console, "[bugsnag]");
                }),
                e
            );
        },
        y = (function () {
            function e(e, t, n, r) {
                void 0 === r && (r = new Date()),
                    (this.type = n),
                    (this.message = e),
                    (this.metadata = t),
                    (this.timestamp = r);
            }
            return (
                (e.prototype.toJSON = function () {
                    return { type: this.type, name: this.message, timestamp: this.timestamp, metaData: this.metadata };
                }),
                e
            );
        })(),
        _ = {};
    !(function (e, t) {
        "use strict";
        "object" == typeof _ ? (_ = t()) : (e.StackFrame = t());
    })(this, function () {
        "use strict";
        function e(e) {
            return e.charAt(0).toUpperCase() + e.substring(1);
        }
        function t(e) {
            return function () {
                return this[e];
            };
        }
        var n = ["isConstructor", "isEval", "isNative", "isToplevel"],
            r = ["columnNumber", "lineNumber"],
            a = ["fileName", "functionName", "source"],
            o = n.concat(r, a, ["args"], ["evalOrigin"]);
        function i(t) {
            if (t) for (var n = 0; n < o.length; n++) t[o[n]] !== undefined && this["set" + e(o[n])](t[o[n]]);
        }
        (i.prototype = {
            getArgs: function () {
                return this.args;
            },
            setArgs: function (e) {
                if ("[object Array]" !== Object.prototype.toString.call(e))
                    throw new TypeError("Args must be an Array");
                this.args = e;
            },
            getEvalOrigin: function () {
                return this.evalOrigin;
            },
            setEvalOrigin: function (e) {
                if (e instanceof i) this.evalOrigin = e;
                else {
                    if (!(e instanceof Object)) throw new TypeError("Eval Origin must be an Object or StackFrame");
                    this.evalOrigin = new i(e);
                }
            },
            toString: function () {
                var e = this.getFileName() || "",
                    t = this.getLineNumber() || "",
                    n = this.getColumnNumber() || "",
                    r = this.getFunctionName() || "";
                return this.getIsEval()
                    ? e
                        ? "[eval] (" + e + ":" + t + ":" + n + ")"
                        : "[eval]:" + t + ":" + n
                    : r
                      ? r + " (" + e + ":" + t + ":" + n + ")"
                      : e + ":" + t + ":" + n;
            }
        }),
            (i.fromString = function (e) {
                var t = e.indexOf("("),
                    n = e.lastIndexOf(")"),
                    r = e.substring(0, t),
                    a = e.substring(t + 1, n).split(","),
                    o = e.substring(n + 1);
                if (0 === o.indexOf("@"))
                    var s = /@(.+?)(?::(\d+))?(?::(\d+))?$/.exec(o, ""),
                        u = s[1],
                        c = s[2],
                        l = s[3];
                return new i({
                    functionName: r,
                    args: a || undefined,
                    fileName: u,
                    lineNumber: c || undefined,
                    columnNumber: l || undefined
                });
            });
        for (var s = 0; s < n.length; s++)
            (i.prototype["get" + e(n[s])] = t(n[s])),
                (i.prototype["set" + e(n[s])] = (function (e) {
                    return function (t) {
                        this[e] = Boolean(t);
                    };
                })(n[s]));
        for (var u = 0; u < r.length; u++)
            (i.prototype["get" + e(r[u])] = t(r[u])),
                (i.prototype["set" + e(r[u])] = (function (e) {
                    return function (t) {
                        if (((n = t), isNaN(parseFloat(n)) || !isFinite(n)))
                            throw new TypeError(e + " must be a Number");
                        var n;
                        this[e] = Number(t);
                    };
                })(r[u]));
        for (var c = 0; c < a.length; c++)
            (i.prototype["get" + e(a[c])] = t(a[c])),
                (i.prototype["set" + e(a[c])] = (function (e) {
                    return function (t) {
                        this[e] = String(t);
                    };
                })(a[c]));
        return i;
    });
    var b = {};
    !(function (e, t) {
        "use strict";
        "object" == typeof b ? (b = t(_)) : (e.StackGenerator = t(e.StackFrame));
    })(this, function (e) {
        return {
            backtrace: function (t) {
                var n = [],
                    r = 10;
                "object" == typeof t && "number" == typeof t.maxStackSize && (r = t.maxStackSize);
                for (var a = arguments.callee; a && n.length < r && a.arguments; ) {
                    for (var o = new Array(a.arguments.length), i = 0; i < o.length; ++i) o[i] = a.arguments[i];
                    /function(?:\s+([\w$]+))+\s*\(/.test(a.toString())
                        ? n.push(new e({ functionName: RegExp.$1 || undefined, args: o }))
                        : n.push(new e({ args: o }));
                    try {
                        a = a.caller;
                    } catch (s) {
                        break;
                    }
                }
                return n;
            }
        };
    });
    var S = {};
    !(function (e, t) {
        "use strict";
        "object" == typeof S ? (S = t(_)) : (e.ErrorStackParser = t(e.StackFrame));
    })(this, function (e) {
        "use strict";
        var t = /(^|@)\S+:\d+/,
            n = /^\s*at .*(\S+:\d+|\(native\))/m,
            r = /^(eval@)?(\[native code])?$/;
        return {
            parse: function (e) {
                if ("undefined" != typeof e.stacktrace || "undefined" != typeof e["opera#sourceloc"])
                    return this.parseOpera(e);
                if (e.stack && e.stack.match(n)) return this.parseV8OrIE(e);
                if (e.stack) return this.parseFFOrSafari(e);
                throw new Error("Cannot parse given Error object");
            },
            extractLocation: function (e) {
                if (-1 === e.indexOf(":")) return [e];
                var t = /(.+?)(?::(\d+))?(?::(\d+))?$/.exec(e.replace(/[()]/g, ""));
                return [t[1], t[2] || undefined, t[3] || undefined];
            },
            parseV8OrIE: function (t) {
                return t.stack
                    .split("\n")
                    .filter(function (e) {
                        return !!e.match(n);
                    }, this)
                    .map(function (t) {
                        t.indexOf("(eval ") > -1 &&
                            (t = t.replace(/eval code/g, "eval").replace(/(\(eval at [^()]*)|(\),.*$)/g, ""));
                        var n = t.replace(/^\s+/, "").replace(/\(eval code/g, "("),
                            r = n.match(/ (\((.+):(\d+):(\d+)\)$)/),
                            a = (n = r ? n.replace(r[0], "") : n).split(/\s+/).slice(1),
                            o = this.extractLocation(r ? r[1] : a.pop()),
                            i = a.join(" ") || undefined,
                            s = ["eval", "<anonymous>"].indexOf(o[0]) > -1 ? undefined : o[0];
                        return new e({ functionName: i, fileName: s, lineNumber: o[1], columnNumber: o[2], source: t });
                    }, this);
            },
            parseFFOrSafari: function (t) {
                return t.stack
                    .split("\n")
                    .filter(function (e) {
                        return !e.match(r);
                    }, this)
                    .map(function (t) {
                        if (
                            (t.indexOf(" > eval") > -1 &&
                                (t = t.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g, ":$1")),
                            -1 === t.indexOf("@") && -1 === t.indexOf(":"))
                        )
                            return new e({ functionName: t });
                        var n = /((.*".+"[^@]*)?[^@]*)(?:@)/,
                            r = t.match(n),
                            a = r && r[1] ? r[1] : undefined,
                            o = this.extractLocation(t.replace(n, ""));
                        return new e({
                            functionName: a,
                            fileName: o[0],
                            lineNumber: o[1],
                            columnNumber: o[2],
                            source: t
                        });
                    }, this);
            },
            parseOpera: function (e) {
                return !e.stacktrace ||
                    (e.message.indexOf("\n") > -1 && e.message.split("\n").length > e.stacktrace.split("\n").length)
                    ? this.parseOpera9(e)
                    : e.stack
                      ? this.parseOpera11(e)
                      : this.parseOpera10(e);
            },
            parseOpera9: function (t) {
                for (
                    var n = /Line (\d+).*script (?:in )?(\S+)/i, r = t.message.split("\n"), a = [], o = 2, i = r.length;
                    o < i;
                    o += 2
                ) {
                    var s = n.exec(r[o]);
                    s && a.push(new e({ fileName: s[2], lineNumber: s[1], source: r[o] }));
                }
                return a;
            },
            parseOpera10: function (t) {
                for (
                    var n = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i,
                        r = t.stacktrace.split("\n"),
                        a = [],
                        o = 0,
                        i = r.length;
                    o < i;
                    o += 2
                ) {
                    var s = n.exec(r[o]);
                    s &&
                        a.push(
                            new e({ functionName: s[3] || undefined, fileName: s[2], lineNumber: s[1], source: r[o] })
                        );
                }
                return a;
            },
            parseOpera11: function (n) {
                return n.stack
                    .split("\n")
                    .filter(function (e) {
                        return !!e.match(t) && !e.match(/^Error created at/);
                    }, this)
                    .map(function (t) {
                        var n,
                            r = t.split("@"),
                            a = this.extractLocation(r.pop()),
                            o = r.shift() || "",
                            i =
                                o.replace(/<anonymous function(: (\w+))?>/, "$2").replace(/\([^)]*\)/g, "") ||
                                undefined;
                        o.match(/\(([^)]*)\)/) && (n = o.replace(/^[^(]+\(([^)]*)\)$/, "$1"));
                        var s = n === undefined || "[arguments not available]" === n ? undefined : n.split(",");
                        return new e({
                            functionName: i,
                            args: s,
                            fileName: a[0],
                            lineNumber: a[1],
                            columnNumber: a[2],
                            source: t
                        });
                    }, this);
            }
        };
    });
    var w = S,
        E = function (e, t, n, r) {
            var a = r && r.redactedKeys ? r.redactedKeys : [],
                o = r && r.redactedPaths ? r.redactedPaths : [];
            return JSON.stringify(
                (function (e, t, n) {
                    var r = [],
                        a = 0;
                    return (function o(e, i) {
                        function s() {
                            return i.length > x && a > j;
                        }
                        a++;
                        if (i.length > O) return N;
                        if (s()) return N;
                        if (null === e || "object" != typeof e) return e;
                        if (
                            (function (e, t) {
                                for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return !0;
                                return !1;
                            })(r, e)
                        )
                            return "[Circular]";
                        r.push(e);
                        if ("function" == typeof e.toJSON)
                            try {
                                a--;
                                var u = o(e.toJSON(), i);
                                return r.pop(), u;
                            } catch (m) {
                                return k(m);
                            }
                        var c =
                            ((l = e),
                            l instanceof Error ||
                                /^\[object (Error|(Dom)?Exception)\]$/.test(Object.prototype.toString.call(l)));
                        var l;
                        if (c) {
                            a--;
                            var d = o({ name: e.name, message: e.message }, i);
                            return r.pop(), d;
                        }
                        if (
                            (function (e) {
                                return "[object Array]" === Object.prototype.toString.call(e);
                            })(e)
                        ) {
                            for (var f = [], g = 0, h = e.length; g < h; g++) {
                                if (s()) {
                                    f.push(N);
                                    break;
                                }
                                f.push(o(e[g], i.concat("[]")));
                            }
                            return r.pop(), f;
                        }
                        var p = {};
                        try {
                            for (var v in e)
                                if (Object.prototype.hasOwnProperty.call(e, v))
                                    if (R(n, i.join(".")) && L(t, v)) p[v] = "[REDACTED]";
                                    else {
                                        if (s()) {
                                            p[v] = N;
                                            break;
                                        }
                                        p[v] = o(T(e, v), i.concat(v));
                                    }
                        } catch (y) {}
                        r.pop();
                        return p;
                    })(e, []);
                })(e, a, o),
                t,
                n
            );
        },
        O = 20,
        j = 25e3,
        x = 8,
        N = "...";
    function k(e) {
        return "[Throws: " + (e ? e.message : "?") + "]";
    }
    function R(e, t) {
        for (var n = 0, r = e.length; n < r; n++) if (0 === t.indexOf(e[n])) return !0;
        return !1;
    }
    function L(e, t) {
        for (var n = 0, r = e.length; n < r; n++) {
            if ("string" == typeof e[n] && e[n].toLowerCase() === t.toLowerCase()) return !0;
            if (e[n] && "function" == typeof e[n].test && e[n].test(t)) return !0;
        }
        return !1;
    }
    function T(e, t) {
        try {
            return e[t];
        } catch (n) {
            return k(n);
        }
    }
    function B(e, t, n, r) {
        if ("string" == typeof n) {
            r === undefined ? (r = null) : null !== r && "string" != typeof r && (r = E(r));
            var a = t[n];
            "number" != typeof a
                ? (e.push({ name: n, variant: r }), (t[n] = e.length - 1))
                : (e[a] = { name: n, variant: r });
        }
    }
    var M = {
            add: B,
            clear: function (e, t, n) {
                var r = t[n];
                "number" == typeof r && ((e[r] = null), delete t[n]);
            },
            merge: function (e, t, n) {
                if (a(t)) {
                    for (var r = 0; r < t.length; ++r) {
                        var o = t[r];
                        null !== o && "object" == typeof o && B(e, n, o.name, o.variant);
                    }
                    return e;
                }
            },
            toEventApi: function (e) {
                return g(n(e, Boolean), function (e) {
                    var t = e.name,
                        n = e.variant,
                        r = { featureFlag: t };
                    return "string" == typeof n && (r.variant = n), r;
                });
            }
        },
        q = function (e) {
            return !(
                !e ||
                (!e.stack && !e.stacktrace && !e["opera#sourceloc"]) ||
                "string" != typeof (e.stack || e.stacktrace || e["opera#sourceloc"]) ||
                e.stack === e.name + ": " + e.message
            );
        };
    var I = function (e) {
            switch (Object.prototype.toString.call(e)) {
                case "[object Error]":
                case "[object Exception]":
                case "[object DOMException]":
                    return !0;
                default:
                    return e instanceof Error;
            }
        },
        C = function (e, t, n) {
            "string" == typeof t &&
                (n
                    ? "__proto__" !== t && "constructor" !== t && "prototype" !== t && e[t] && delete e[t][n]
                    : delete e[t]);
        },
        D = {
            add: function (e, t, n, r) {
                var a;
                if (t) {
                    var o;
                    if (null === n) return C(e, t);
                    "object" == typeof n && (o = n),
                        "string" == typeof n && (((a = {})[n] = r), (o = a)),
                        o &&
                            "__proto__" !== t &&
                            "constructor" !== t &&
                            "prototype" !== t &&
                            (e[t] || (e[t] = {}), (e[t] = f({}, e[t], o)));
                }
            },
            get: function (e, t, n) {
                return "string" != typeof t ? undefined : n ? (e[t] ? e[t][n] : undefined) : e[t];
            },
            clear: C
        };
    function A() {
        return (A = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                  }
                  return e;
              }).apply(this, arguments);
    }
    var F = (function () {
            function e(t, n, r, a, o) {
                void 0 === r && (r = []),
                    void 0 === a && (a = H()),
                    (this.apiKey = undefined),
                    (this.context = undefined),
                    (this.groupingHash = undefined),
                    (this.originalError = o),
                    (this._handledState = a),
                    (this.severity = this._handledState.severity),
                    (this.unhandled = this._handledState.unhandled),
                    (this.app = {}),
                    (this.device = {}),
                    (this.request = {}),
                    (this.breadcrumbs = []),
                    (this.threads = []),
                    (this._metadata = {}),
                    (this._features = []),
                    (this._featuresIndex = {}),
                    (this._user = {}),
                    (this._session = undefined),
                    (this._correlation = undefined),
                    (this.errors = [K(t, n, e.__type, r)]);
            }
            var t = e.prototype;
            return (
                (t.addMetadata = function (e, t, n) {
                    return D.add(this._metadata, e, t, n);
                }),
                (t.setTraceCorrelation = function (e, t) {
                    "string" == typeof e &&
                        (this._correlation = A({ traceId: e }, "string" == typeof t ? { spanId: t } : {}));
                }),
                (t.getMetadata = function (e, t) {
                    return D.get(this._metadata, e, t);
                }),
                (t.clearMetadata = function (e, t) {
                    return D.clear(this._metadata, e, t);
                }),
                (t.addFeatureFlag = function (e, t) {
                    void 0 === t && (t = null), M.add(this._features, this._featuresIndex, e, t);
                }),
                (t.addFeatureFlags = function (e) {
                    M.merge(this._features, e, this._featuresIndex);
                }),
                (t.getFeatureFlags = function () {
                    return M.toEventApi(this._features);
                }),
                (t.clearFeatureFlag = function (e) {
                    M.clear(this._features, this._featuresIndex, e);
                }),
                (t.clearFeatureFlags = function () {
                    (this._features = []), (this._featuresIndex = {});
                }),
                (t.getUser = function () {
                    return this._user;
                }),
                (t.setUser = function (e, t, n) {
                    this._user = { id: e, email: t, name: n };
                }),
                (t.toJSON = function () {
                    return {
                        payloadVersion: "4",
                        exceptions: g(this.errors, function (e) {
                            return f({}, e, { message: e.errorMessage });
                        }),
                        severity: this.severity,
                        unhandled: this._handledState.unhandled,
                        severityReason: this._handledState.severityReason,
                        app: this.app,
                        device: this.device,
                        request: this.request,
                        breadcrumbs: this.breadcrumbs,
                        context: this.context,
                        groupingHash: this.groupingHash,
                        metaData: this._metadata,
                        user: this._user,
                        session: this._session,
                        featureFlags: this.getFeatureFlags(),
                        correlation: this._correlation
                    };
                }),
                e
            );
        })(),
        P = function (e) {
            var t = {
                file: e.fileName,
                method: V(e.functionName),
                lineNumber: e.lineNumber,
                columnNumber: e.columnNumber,
                code: undefined,
                inProject: undefined
            };
            return t.lineNumber > -1 && !t.file && !t.method && (t.file = "global code"), t;
        },
        V = function (e) {
            return /^global code$/i.test(e) ? "global code" : e;
        },
        H = function () {
            return { unhandled: !1, severity: "warning", severityReason: { type: "handledException" } };
        },
        $ = function (e) {
            return "string" == typeof e ? e : "";
        };
    function K(e, n, r, a) {
        return {
            errorClass: $(e),
            errorMessage: $(n),
            type: r,
            stacktrace: t(
                a,
                function (e, t) {
                    var n = P(t);
                    try {
                        return "{}" === JSON.stringify(n) ? e : e.concat(n);
                    } catch (r) {
                        return e;
                    }
                },
                []
            )
        };
    }
    (F.getStacktrace = function (e, t, r) {
        if (q(e)) return w.parse(e).slice(t);
        try {
            return n(b.backtrace(), function (e) {
                return -1 === (e.functionName || "").indexOf("StackGenerator$$");
            }).slice(1 + r);
        } catch (a) {
            return [];
        }
    }),
        (F.create = function (e, t, n, r, a, o) {
            void 0 === a && (a = 0);
            var i,
                s = X(e, t, r, o),
                u = s[0],
                c = s[1];
            try {
                var l = F.getStacktrace(u, c > 0 ? 1 + c + a : 0, 1 + a);
                i = new F(u.name, u.message, l, n, e);
            } catch (p) {
                i = new F(u.name, u.message, [], n, e);
            }
            if (("InvalidError" === u.name && i.addMetadata("" + r, "non-error parameter", U(e)), u.cause)) {
                var d,
                    f = (function e(t) {
                        return t.cause ? [t].concat(e(t.cause)) : [t];
                    })(u).slice(1),
                    h = g(f, function (e) {
                        var t = I(e) && q(e) ? w.parse(e) : [],
                            n = X(e, !0, "error cause")[0];
                        return (
                            "InvalidError" === n.name && i.addMetadata("error cause", U(e)),
                            K(n.name, n.message, F.__type, t)
                        );
                    });
                (d = i.errors).push.apply(d, h);
            }
            return i;
        });
    var U = function (e) {
            return null === e ? "null" : e === undefined ? "undefined" : e;
        },
        X = function (e, t, n, r) {
            var a,
                o = 0,
                i = function (e) {
                    var t = "error cause" === n ? "was" : "received";
                    r && r.warn(n + " " + t + ' a non-error: "' + e + '"');
                    var a = new Error(n + " " + t + ' a non-error. See "' + n + '" tab for more detail.');
                    return (a.name = "InvalidError"), a;
                };
            if (t)
                switch (typeof e) {
                    case "string":
                    case "number":
                    case "boolean":
                        (a = new Error(String(e))), (o += 1);
                        break;
                    case "function":
                        (a = i("function")), (o += 2);
                        break;
                    case "object":
                        null !== e && I(e)
                            ? (a = e)
                            : null !== e && J(e)
                              ? (((a = new Error(e.message || e.errorMessage)).name = e.name || e.errorClass), (o += 1))
                              : ((a = i(null === e ? "null" : "unsupported object")), (o += 2));
                        break;
                    default:
                        (a = i("nothing")), (o += 2);
                }
            else I(e) ? (a = e) : ((a = i(typeof e)), (o += 2));
            if (!q(a))
                try {
                    throw a;
                } catch (s) {
                    q(s) && ((a = s), (o = 1));
                }
            return [a, o];
        };
    F.__type = "browserjs";
    var J = function (e) {
            return !(
                ("string" != typeof e.name && "string" != typeof e.errorClass) ||
                ("string" != typeof e.message && "string" != typeof e.errorMessage)
            );
        },
        W = F,
        z = function (e, t, n, r) {
            for (var a = !1, o = e.slice(); !a && o.length; )
                try {
                    a = !1 === o.pop()(t);
                } catch (i) {
                    r.error("Error occurred in " + n + " callback, continuing anyway…"), r.error(i);
                }
            return a;
        },
        G = function (e, t) {
            var n = "000000000" + e;
            return n.substr(n.length - t);
        },
        Q = "object" == typeof window ? window : self,
        Y = 0;
    for (var Z in Q) Object.hasOwnProperty.call(Q, Z) && Y++;
    var ee = navigator.mimeTypes ? navigator.mimeTypes.length : 0,
        te = G((ee + navigator.userAgent.length).toString(36) + Y.toString(36), 4),
        ne = function () {
            return te;
        },
        re = 0,
        ae = 4,
        oe = 36,
        ie = Math.pow(oe, ae);
    function se() {
        return G(((Math.random() * ie) << 0).toString(oe), ae);
    }
    function ue() {
        return (
            "c" +
            new Date().getTime().toString(oe) +
            G(((re = re < ie ? re : 0), ++re - 1).toString(oe), ae) +
            ne() +
            (se() + se())
        );
    }
    (ue.fingerprint = ne),
        (ue.isCuid = function (e) {
            return "string" == typeof e && /^c[a-z0-9]{20,32}$/.test(e);
        });
    var ce = ue,
        le = (function () {
            function e() {
                (this.id = ce()),
                    (this.startedAt = new Date()),
                    (this._handled = 0),
                    (this._unhandled = 0),
                    (this._user = {}),
                    (this.app = {}),
                    (this.device = {});
            }
            var t = e.prototype;
            return (
                (t.getUser = function () {
                    return this._user;
                }),
                (t.setUser = function (e, t, n) {
                    this._user = { id: e, email: t, name: n };
                }),
                (t.toJSON = function () {
                    return {
                        id: this.id,
                        startedAt: this.startedAt,
                        events: { handled: this._handled, unhandled: this._unhandled }
                    };
                }),
                (t._track = function (e) {
                    this[e._handledState.unhandled ? "_unhandled" : "_handled"] += 1;
                }),
                e
            );
        })(),
        de = M.add,
        fe = M.clear,
        ge = M.merge,
        he = function () {},
        pe = (function () {
            function a(e, t, n, r) {
                var o = this;
                void 0 === t && (t = d.schema),
                    void 0 === n && (n = []),
                    (this._notifier = r),
                    (this._config = {}),
                    (this._schema = t),
                    (this._delivery = { sendSession: he, sendEvent: he }),
                    (this._logger = { debug: he, info: he, warn: he, error: he }),
                    (this._plugins = {}),
                    (this._breadcrumbs = []),
                    (this._session = null),
                    (this._metadata = {}),
                    (this._featuresIndex = {}),
                    (this._features = []),
                    (this._context = undefined),
                    (this._user = {}),
                    (this._cbs = { e: [], s: [], sp: [], b: [] }),
                    (this.Client = a),
                    (this.Event = W),
                    (this.Breadcrumb = y),
                    (this.Session = le),
                    (this._config = this._configure(e, n)),
                    g(n.concat(this._config.plugins), function (e) {
                        e && o._loadPlugin(e);
                    }),
                    (this._depth = 1);
                var i = this,
                    s = this.notify;
                this.notify = function () {
                    return s.apply(i, arguments);
                };
            }
            var o = a.prototype;
            return (
                (o.addMetadata = function (e, t, n) {
                    return D.add(this._metadata, e, t, n);
                }),
                (o.getMetadata = function (e, t) {
                    return D.get(this._metadata, e, t);
                }),
                (o.clearMetadata = function (e, t) {
                    return D.clear(this._metadata, e, t);
                }),
                (o.addFeatureFlag = function (e, t) {
                    void 0 === t && (t = null), de(this._features, this._featuresIndex, e, t);
                }),
                (o.addFeatureFlags = function (e) {
                    ge(this._features, e, this._featuresIndex);
                }),
                (o.clearFeatureFlag = function (e) {
                    fe(this._features, this._featuresIndex, e);
                }),
                (o.clearFeatureFlags = function () {
                    (this._features = []), (this._featuresIndex = {});
                }),
                (o.getContext = function () {
                    return this._context;
                }),
                (o.setContext = function (e) {
                    this._context = e;
                }),
                (o._configure = function (e, n) {
                    var r = t(
                            n,
                            function (e, t) {
                                return t && t.configSchema ? f({}, e, t.configSchema) : e;
                            },
                            this._schema
                        ),
                        a = t(
                            s(r),
                            function (t, n) {
                                var a = r[n].defaultValue(e[n]);
                                e[n] !== undefined
                                    ? r[n].validate(e[n])
                                        ? r[n].allowPartialObject
                                            ? (t.config[n] = f(a, e[n]))
                                            : (t.config[n] = e[n])
                                        : ((t.errors[n] = r[n].message), (t.config[n] = a))
                                    : (t.config[n] = a);
                                return t;
                            },
                            { errors: {}, config: {} }
                        ),
                        o = a.errors,
                        i = a.config;
                    if (r.apiKey) {
                        if (!i.apiKey) throw new Error("No Bugsnag API Key set");
                        /^[0-9a-f]{32}$/i.test(i.apiKey) ||
                            (o.apiKey = "should be a string of 32 hexadecimal characters");
                    }
                    return (
                        (this._metadata = f({}, i.metadata)),
                        ge(this._features, i.featureFlags, this._featuresIndex),
                        (this._user = f({}, i.user)),
                        (this._context = i.context),
                        i.logger && (this._logger = i.logger),
                        i.onError && (this._cbs.e = this._cbs.e.concat(i.onError)),
                        i.onBreadcrumb && (this._cbs.b = this._cbs.b.concat(i.onBreadcrumb)),
                        i.onSession && (this._cbs.s = this._cbs.s.concat(i.onSession)),
                        s(o).length && this._logger.warn(ve(o, e)),
                        i
                    );
                }),
                (o.getUser = function () {
                    return this._user;
                }),
                (o.setUser = function (e, t, n) {
                    this._user = { id: e, email: t, name: n };
                }),
                (o._loadPlugin = function (e) {
                    var t = e.load(this);
                    e.name && (this._plugins["~" + e.name + "~"] = t);
                }),
                (o.getPlugin = function (e) {
                    return this._plugins["~" + e + "~"];
                }),
                (o._setDelivery = function (e) {
                    this._delivery = e(this);
                }),
                (o.startSession = function () {
                    var e = new le();
                    return (
                        (e.app.releaseStage = this._config.releaseStage),
                        (e.app.version = this._config.appVersion),
                        (e.app.type = this._config.appType),
                        (e._user = f({}, this._user)),
                        z(this._cbs.s, e, "onSession", this._logger)
                            ? (this._logger.debug("Session not started due to onSession callback"), this)
                            : this._sessionDelegate.startSession(this, e)
                    );
                }),
                (o.addOnError = function (e, t) {
                    void 0 === t && (t = !1), this._cbs.e[t ? "unshift" : "push"](e);
                }),
                (o.removeOnError = function (e) {
                    this._cbs.e = n(this._cbs.e, function (t) {
                        return t !== e;
                    });
                }),
                (o._addOnSessionPayload = function (e) {
                    this._cbs.sp.push(e);
                }),
                (o.addOnSession = function (e) {
                    this._cbs.s.push(e);
                }),
                (o.removeOnSession = function (e) {
                    this._cbs.s = n(this._cbs.s, function (t) {
                        return t !== e;
                    });
                }),
                (o.addOnBreadcrumb = function (e, t) {
                    void 0 === t && (t = !1), this._cbs.b[t ? "unshift" : "push"](e);
                }),
                (o.removeOnBreadcrumb = function (e) {
                    this._cbs.b = n(this._cbs.b, function (t) {
                        return t !== e;
                    });
                }),
                (o.pauseSession = function () {
                    return this._sessionDelegate.pauseSession(this);
                }),
                (o.resumeSession = function () {
                    return this._sessionDelegate.resumeSession(this);
                }),
                (o.leaveBreadcrumb = function (t, n, a) {
                    if (
                        ((t = "string" == typeof t ? t : ""),
                        (a = "string" == typeof a && r(e, a) ? a : "manual"),
                        (n = "object" == typeof n && null !== n ? n : {}),
                        t)
                    ) {
                        var o = new y(t, n, a);
                        z(this._cbs.b, o, "onBreadcrumb", this._logger)
                            ? this._logger.debug("Breadcrumb not attached due to onBreadcrumb callback")
                            : (this._breadcrumbs.push(o),
                              this._breadcrumbs.length > this._config.maxBreadcrumbs &&
                                  (this._breadcrumbs = this._breadcrumbs.slice(
                                      this._breadcrumbs.length - this._config.maxBreadcrumbs
                                  )));
                    }
                }),
                (o._isBreadcrumbTypeEnabled = function (e) {
                    var t = this._config.enabledBreadcrumbTypes;
                    return null === t || r(t, e);
                }),
                (o.notify = function (e, t, n) {
                    void 0 === n && (n = he);
                    var r = W.create(e, !0, undefined, "notify()", this._depth + 1, this._logger);
                    this._notify(r, t, n);
                }),
                (o._notify = function (e, t, n) {
                    var o = this;
                    if (
                        (void 0 === n && (n = he),
                        (e.app = f({}, e.app, {
                            releaseStage: this._config.releaseStage,
                            version: this._config.appVersion,
                            type: this._config.appType
                        })),
                        (e.context = e.context || this._context),
                        (e._metadata = f({}, e._metadata, this._metadata)),
                        (e._user = f({}, e._user, this._user)),
                        (e.breadcrumbs = this._breadcrumbs.slice()),
                        ge(e._features, this._features, e._featuresIndex),
                        null !== this._config.enabledReleaseStages &&
                            !r(this._config.enabledReleaseStages, this._config.releaseStage))
                    )
                        return (
                            this._logger.warn("Event not sent due to releaseStage/enabledReleaseStages configuration"),
                            n(null, e)
                        );
                    var i = e.severity,
                        s = function (e) {
                            o._logger.error("Error occurred in onError callback, continuing anyway…"),
                                o._logger.error(e);
                        };
                    !(function (e, t, n, r) {
                        !(function (e, t, n) {
                            var r = 0,
                                a = function () {
                                    if (r >= e.length) return n(null, !0);
                                    t(e[r], function (e, t) {
                                        return e ? n(e) : !1 === t ? n(null, !1) : (r++, void a());
                                    });
                                };
                            a();
                        })(
                            e,
                            function (e, r) {
                                if ("function" != typeof e) return r(null);
                                try {
                                    if (2 !== e.length) {
                                        var a = e(t);
                                        return a && "function" == typeof a.then
                                            ? a.then(
                                                  function (e) {
                                                      return setTimeout(function () {
                                                          return r(null, e);
                                                      });
                                                  },
                                                  function (e) {
                                                      setTimeout(function () {
                                                          return n(e), r(null, !0);
                                                      });
                                                  }
                                              )
                                            : r(null, a);
                                    }
                                    e(t, function (e, t) {
                                        if (e) return n(e), r(null);
                                        r(null, t);
                                    });
                                } catch (o) {
                                    n(o), r(null);
                                }
                            },
                            r
                        );
                    })([].concat(this._cbs.e).concat(t), e, s, function (t, r) {
                        if ((t && s(t), !r))
                            return o._logger.debug("Event not sent due to onError callback"), n(null, e);
                        o._isBreadcrumbTypeEnabled("error") &&
                            a.prototype.leaveBreadcrumb.call(
                                o,
                                e.errors[0].errorClass,
                                {
                                    errorClass: e.errors[0].errorClass,
                                    errorMessage: e.errors[0].errorMessage,
                                    severity: e.severity
                                },
                                "error"
                            ),
                            i !== e.severity && (e._handledState.severityReason = { type: "userCallbackSetSeverity" }),
                            e.unhandled !== e._handledState.unhandled &&
                                ((e._handledState.severityReason.unhandledOverridden = !0),
                                (e._handledState.unhandled = e.unhandled)),
                            o._session && (o._session._track(e), (e._session = o._session)),
                            o._delivery.sendEvent(
                                { apiKey: e.apiKey || o._config.apiKey, notifier: o._notifier, events: [e] },
                                function (t) {
                                    return n(t, e);
                                }
                            );
                    });
                }),
                a
            );
        })(),
        ve = function (e, t) {
            return new Error(
                "Invalid configuration\n" +
                    g(s(e), function (n) {
                        return "  - " + n + " " + e[n] + ", got " + me(t[n]);
                    }).join("\n\n")
            );
        },
        me = function (e) {
            switch (typeof e) {
                case "string":
                case "number":
                case "object":
                    return JSON.stringify(e);
                default:
                    return String(e);
            }
        },
        ye = pe,
        _e = {},
        be = ["events.[].metaData", "events.[].breadcrumbs.[].metaData", "events.[].request"];
    (_e.event = function (e, t) {
        var n = E(e, null, null, { redactedPaths: be, redactedKeys: t });
        return (
            n.length > 1e6 &&
                ((e.events[0]._metadata = {
                    notifier:
                        "WARNING!\nSerialized payload was " + n.length / 1e6 + "MB (limit = 1MB)\nmetadata was removed"
                }),
                (n = E(e, null, null, { redactedPaths: be, redactedKeys: t }))),
            n
        );
    }),
        (_e.session = function (e, t) {
            return E(e, null, null);
        });
    var Se;
    Se = function (e, t) {
        return (
            void 0 === t && (t = window),
            {
                sendEvent: function (n, r) {
                    if ((void 0 === r && (r = function () {}), null === e._config.endpoints.notify)) {
                        var a = new Error("Event not sent due to incomplete endpoint configuration");
                        return r(a);
                    }
                    var o = we(e._config, "notify", "4", t),
                        i = _e.event(n, e._config.redactedKeys),
                        s = new t.XDomainRequest();
                    (s.onload = function () {
                        r(null);
                    }),
                        (s.onerror = function () {
                            var t = new Error("Event failed to send");
                            e._logger.error("Event failed to send…", t),
                                i.length > 1e6 &&
                                    e._logger.warn("Event oversized (" + (i.length / 1e6).toFixed(2) + " MB)"),
                                r(t);
                        }),
                        s.open("POST", o),
                        setTimeout(function () {
                            try {
                                s.send(i);
                            } catch (t) {
                                e._logger.error(t), r(t);
                            }
                        }, 0);
                },
                sendSession: function (n, r) {
                    if ((void 0 === r && (r = function () {}), null === e._config.endpoints.sessions)) {
                        var a = new Error("Session not sent due to incomplete endpoint configuration");
                        return r(a);
                    }
                    var o = we(e._config, "sessions", "1", t),
                        i = new t.XDomainRequest();
                    (i.onload = function () {
                        r(null);
                    }),
                        i.open("POST", o),
                        setTimeout(function () {
                            try {
                                i.send(_e.session(n, e._config.redactedKeys));
                            } catch (t) {
                                e._logger.error(t), r(t);
                            }
                        }, 0);
                }
            }
        );
    };
    var we = function (e, t, n, r) {
            var a = JSON.parse(JSON.stringify(new Date()));
            return (
                Ee(e.endpoints[t], r.location.protocol) +
                "?apiKey=" +
                encodeURIComponent(e.apiKey) +
                "&payloadVersion=" +
                n +
                "&sentAt=" +
                encodeURIComponent(a)
            );
        },
        Ee = (Se._matchPageProtocol = function (e, t) {
            return "http:" === t ? e.replace(/^https:/, "http:") : e;
        }),
        Oe = function (e, t) {
            return (
                void 0 === t && (t = window),
                {
                    sendEvent: function (n, r) {
                        void 0 === r && (r = function () {});
                        try {
                            var a = e._config.endpoints.notify;
                            if (null === a) {
                                var o = new Error("Event not sent due to incomplete endpoint configuration");
                                return r(o);
                            }
                            var i = new t.XMLHttpRequest(),
                                s = _e.event(n, e._config.redactedKeys);
                            (i.onreadystatechange = function () {
                                if (i.readyState === t.XMLHttpRequest.DONE) {
                                    var n = i.status;
                                    if (0 === n || n >= 400) {
                                        var a = new Error("Request failed with status " + n);
                                        e._logger.error("Event failed to send…", a),
                                            s.length > 1e6 &&
                                                e._logger.warn(
                                                    "Event oversized (" + (s.length / 1e6).toFixed(2) + " MB)"
                                                ),
                                            r(a);
                                    } else r(null);
                                }
                            }),
                                i.open("POST", a),
                                i.setRequestHeader("Content-Type", "application/json"),
                                i.setRequestHeader("Bugsnag-Api-Key", n.apiKey || e._config.apiKey),
                                i.setRequestHeader("Bugsnag-Payload-Version", "4"),
                                i.setRequestHeader("Bugsnag-Sent-At", new Date().toISOString()),
                                i.send(s);
                        } catch (u) {
                            e._logger.error(u);
                        }
                    },
                    sendSession: function (n, r) {
                        void 0 === r && (r = function () {});
                        try {
                            var a = e._config.endpoints.sessions;
                            if (null === a) {
                                var o = new Error("Session not sent due to incomplete endpoint configuration");
                                return r(o);
                            }
                            var i = new t.XMLHttpRequest();
                            (i.onreadystatechange = function () {
                                if (i.readyState === t.XMLHttpRequest.DONE) {
                                    var n = i.status;
                                    if (0 === n || n >= 400) {
                                        var a = new Error("Request failed with status " + n);
                                        e._logger.error("Session failed to send…", a), r(a);
                                    } else r(null);
                                }
                            }),
                                i.open("POST", a),
                                i.setRequestHeader("Content-Type", "application/json"),
                                i.setRequestHeader("Bugsnag-Api-Key", e._config.apiKey),
                                i.setRequestHeader("Bugsnag-Payload-Version", "1"),
                                i.setRequestHeader("Bugsnag-Sent-At", new Date().toISOString()),
                                i.send(_e.session(n, e._config.redactedKeys));
                        } catch (s) {
                            e._logger.error(s);
                        }
                    }
                }
            );
        },
        je = new Date(),
        xe = function () {
            je = new Date();
        },
        Ne = {
            name: "appDuration",
            load: function (e) {
                return (
                    e.addOnError(function (e) {
                        var t = new Date();
                        e.app.duration = t - je;
                    }, !0),
                    { reset: xe }
                );
            }
        },
        ke = function (e, t) {
            return (
                void 0 === e && (e = navigator),
                void 0 === t && (t = window),
                {
                    load: function (n) {
                        var r = {
                            locale: e.browserLanguage || e.systemLanguage || e.userLanguage || e.language,
                            userAgent: e.userAgent
                        };
                        t && t.screen && t.screen.orientation && t.screen.orientation.type
                            ? (r.orientation = t.screen.orientation.type)
                            : t &&
                              t.document &&
                              (r.orientation =
                                  t.document.documentElement.clientWidth > t.document.documentElement.clientHeight
                                      ? "landscape"
                                      : "portrait"),
                            n._config.generateAnonymousId &&
                                (r.id = (function (e) {
                                    try {
                                        var t = e.localStorage,
                                            n = t.getItem("bugsnag-anonymous-id");
                                        return n && /^c[a-z0-9]{20,32}$/.test(n)
                                            ? n
                                            : ((n = ce()), t.setItem("bugsnag-anonymous-id", n), n);
                                    } catch (r) {}
                                })(t)),
                            n.addOnSession(function (e) {
                                (e.device = f({}, e.device, r)), n._config.collectUserIp || Re(e);
                            }),
                            n.addOnError(function (e) {
                                (e.device = f({}, e.device, r, { time: new Date() })), n._config.collectUserIp || Re(e);
                            }, !0);
                    },
                    configSchema: {
                        generateAnonymousId: {
                            validate: function (e) {
                                return !0 === e || !1 === e;
                            },
                            defaultValue: function () {
                                return !0;
                            },
                            message: "should be true|false"
                        }
                    }
                }
            );
        },
        Re = function (e) {
            var t = e.getUser();
            (t && t.id) || e.setUser(e.device.id);
        },
        Le = {
            load: function (e) {
                e._sessionDelegate = Te;
            }
        },
        Te = {
            startSession: function (e, t) {
                var n = e;
                return (
                    (n._session = t),
                    (n._pausedSession = null),
                    null === n._config.enabledReleaseStages || r(n._config.enabledReleaseStages, n._config.releaseStage)
                        ? (n._delivery.sendSession({
                              notifier: n._notifier,
                              device: t.device,
                              app: t.app,
                              sessions: [{ id: t.id, startedAt: t.startedAt, user: t._user }]
                          }),
                          n)
                        : (n._logger.warn("Session not sent due to releaseStage/enabledReleaseStages configuration"), n)
                );
            },
            resumeSession: function (e) {
                return e._session
                    ? e
                    : e._pausedSession
                      ? ((e._session = e._pausedSession), (e._pausedSession = null), e)
                      : e.startSession();
            },
            pauseSession: function (e) {
                (e._pausedSession = e._session), (e._session = null);
            }
        },
        Be = {
            load: function (e) {
                e._config.collectUserIp ||
                    e.addOnError(function (e) {
                        e._user && "undefined" == typeof e._user.id && delete e._user.id,
                            (e._user = f({ id: "[REDACTED]" }, e._user)),
                            (e.request = f({ clientIp: "[REDACTED]" }, e.request));
                    });
            },
            configSchema: {
                collectUserIp: {
                    defaultValue: function () {
                        return !0;
                    },
                    message: "should be true|false",
                    validate: function (e) {
                        return !0 === e || !1 === e;
                    }
                }
            }
        },
        Me = {
            load: function (e) {
                !/^(local-)?dev(elopment)?$/.test(e._config.releaseStage) &&
                    e._isBreadcrumbTypeEnabled("log") &&
                    g(qe, function (n) {
                        var r = console[n];
                        (console[n] = function () {
                            for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i];
                            e.leaveBreadcrumb(
                                "Console output",
                                t(
                                    o,
                                    function (e, t, n) {
                                        var r = "[Unknown value]";
                                        try {
                                            r = String(t);
                                        } catch (a) {}
                                        if ("[object Object]" === r)
                                            try {
                                                r = JSON.stringify(t);
                                            } catch (a) {}
                                        return (e["[" + n + "]"] = r), e;
                                    },
                                    { severity: 0 === n.indexOf("group") ? "log" : n }
                                ),
                                "log"
                            ),
                                r.apply(console, o);
                        }),
                            (console[n]._restore = function () {
                                console[n] = r;
                            });
                    });
            }
        },
        qe = n(["log", "debug", "info", "warn", "error"], function (e) {
            return "undefined" != typeof console && "function" == typeof console[e];
        }),
        Ie = function (e, r) {
            return (
                void 0 === e && (e = document),
                void 0 === r && (r = window),
                {
                    load: function (a) {
                        if (a._config.trackInlineScripts) {
                            var o = r.location.href,
                                i = "",
                                s = !!e.attachEvent ? "complete" === e.readyState : "loading" !== e.readyState,
                                u = function () {
                                    return e.documentElement.outerHTML;
                                };
                            i = u();
                            var c = e.onreadystatechange;
                            e.onreadystatechange = function () {
                                "interactive" === e.readyState && ((i = u()), (s = !0));
                                try {
                                    c.apply(this, arguments);
                                } catch (t) {}
                            };
                            var l = null,
                                d = function (e) {
                                    l = e;
                                },
                                f = function () {
                                    var t = e.currentScript || l;
                                    if (!t && !s) {
                                        var n = e.scripts || e.getElementsByTagName("script");
                                        t = n[n.length - 1];
                                    }
                                    return t;
                                };
                            a.addOnError(function (e) {
                                e.errors[0].stacktrace = n(e.errors[0].stacktrace, function (e) {
                                    return !/__trace__$/.test(e.method);
                                });
                                var r = e.errors[0].stacktrace[0],
                                    a = function (e) {
                                        return e.replace(/#.*$/, "").replace(/\?.*$/, "");
                                    };
                                if (!r || !r.file || a(r.file) === a(o)) {
                                    var c = f();
                                    if (c) {
                                        var l = c.innerHTML;
                                        e.addMetadata("script", "content", l.length <= 5e5 ? l : l.substr(0, 5e5)),
                                            r &&
                                                r.lineNumber &&
                                                (r.code = (function (e) {
                                                    (s && i) || (i = u());
                                                    var n = ["\x3c!-- DOC START --\x3e"].concat(i.split("\n")),
                                                        r = e - 1,
                                                        a = Math.max(r - 3, 0),
                                                        o = Math.min(r + 3, n.length);
                                                    return t(
                                                        n.slice(a, o),
                                                        function (e, t, n) {
                                                            return (
                                                                (e[a + 1 + n] = t.length <= 200 ? t : t.substr(0, 200)),
                                                                e
                                                            );
                                                        },
                                                        {}
                                                    );
                                                })(r.lineNumber));
                                    }
                                }
                            }, !0);
                            var h = g(
                                ["setTimeout", "setInterval", "setImmediate", "requestAnimationFrame"],
                                function (e) {
                                    return Ce(r, e, function (e) {
                                        return p(e, function (e) {
                                            return {
                                                get: function () {
                                                    return e[0];
                                                },
                                                replace: function (t) {
                                                    e[0] = t;
                                                }
                                            };
                                        });
                                    });
                                }
                            )[0];
                            g(
                                [
                                    "EventTarget",
                                    "Window",
                                    "Node",
                                    "ApplicationCache",
                                    "AudioTrackList",
                                    "ChannelMergerNode",
                                    "CryptoOperation",
                                    "EventSource",
                                    "FileReader",
                                    "HTMLUnknownElement",
                                    "IDBDatabase",
                                    "IDBRequest",
                                    "IDBTransaction",
                                    "KeyOperation",
                                    "MediaController",
                                    "MessagePort",
                                    "ModalWindow",
                                    "Notification",
                                    "SVGElementInstance",
                                    "Screen",
                                    "TextTrack",
                                    "TextTrackCue",
                                    "TextTrackList",
                                    "WebSocket",
                                    "WebSocketWorker",
                                    "Worker",
                                    "XMLHttpRequest",
                                    "XMLHttpRequestEventTarget",
                                    "XMLHttpRequestUpload"
                                ],
                                function (e) {
                                    r[e] &&
                                        r[e].prototype &&
                                        Object.prototype.hasOwnProperty.call(r[e].prototype, "addEventListener") &&
                                        (Ce(r[e].prototype, "addEventListener", function (e) {
                                            return p(e, De);
                                        }),
                                        Ce(r[e].prototype, "removeEventListener", function (e) {
                                            return p(e, De, !0);
                                        }));
                                }
                            );
                        }
                        function p(e, t, n) {
                            return (
                                void 0 === n && (n = !1),
                                function () {
                                    var r = [].slice.call(arguments);
                                    try {
                                        var a = t(r),
                                            o = a.get();
                                        if ((n && e.apply(this, r), "function" != typeof o)) return e.apply(this, r);
                                        if (o.__trace__) a.replace(o.__trace__);
                                        else {
                                            var i = f();
                                            (o.__trace__ = function () {
                                                d(i),
                                                    h(function () {
                                                        d(null);
                                                    }, 0);
                                                var e = o.apply(this, arguments);
                                                return d(null), e;
                                            }),
                                                (o.__trace__.__trace__ = o.__trace__),
                                                a.replace(o.__trace__);
                                        }
                                    } catch (s) {}
                                    if (e.apply) return e.apply(this, r);
                                    switch (r.length) {
                                        case 1:
                                            return e(r[0]);
                                        case 2:
                                            return e(r[0], r[1]);
                                        default:
                                            return e();
                                    }
                                }
                            );
                        }
                    },
                    configSchema: {
                        trackInlineScripts: {
                            validate: function (e) {
                                return !0 === e || !1 === e;
                            },
                            defaultValue: function () {
                                return !0;
                            },
                            message: "should be true|false"
                        }
                    }
                }
            );
        };
    function Ce(e, t, n) {
        var r = e[t];
        if (!r) return r;
        var a = n(r);
        return (e[t] = a), r;
    }
    function De(e) {
        var t = !!e[1] && "function" == typeof e[1].handleEvent;
        return {
            get: function () {
                return t ? e[1].handleEvent : e[1];
            },
            replace: function (n) {
                t ? (e[1].handleEvent = n) : (e[1] = n);
            }
        };
    }
    var Ae = function (e) {
            return (
                void 0 === e && (e = window),
                {
                    load: function (t) {
                        "addEventListener" in e &&
                            t._isBreadcrumbTypeEnabled("user") &&
                            e.addEventListener(
                                "click",
                                function (n) {
                                    var r, a;
                                    try {
                                        (r = (function (e) {
                                            var t = e.textContent || e.innerText || "";
                                            t || ("submit" !== e.type && "button" !== e.type) || (t = e.value);
                                            if ((t = t.replace(Fe, "$1")).length > 140)
                                                return t.slice(0, 135) + "(...)";
                                            return t;
                                        })(n.target)),
                                            (a = (function i(e, t) {
                                                var n = [e.tagName];
                                                e.id && n.push("#" + e.id);
                                                e.className &&
                                                    e.className.length &&
                                                    n.push("." + e.className.split(" ").join("."));
                                                if (!t.document.querySelectorAll || !Array.prototype.indexOf)
                                                    return n.join("");
                                                try {
                                                    if (1 === t.document.querySelectorAll(n.join("")).length)
                                                        return n.join("");
                                                } catch (a) {
                                                    return n.join("");
                                                }
                                                if (e.parentNode.childNodes.length > 1) {
                                                    var r =
                                                        Array.prototype.indexOf.call(e.parentNode.childNodes, e) + 1;
                                                    n.push(":nth-child(" + r + ")");
                                                }
                                                if (1 === t.document.querySelectorAll(n.join("")).length)
                                                    return n.join("");
                                                if (e.parentNode) return i(e.parentNode, t) + " > " + n.join("");
                                                return n.join("");
                                            })(n.target, e));
                                    } catch (o) {
                                        (r = "[hidden]"),
                                            (a = "[hidden]"),
                                            t._logger.error(
                                                "Cross domain error when tracking click event. See docs: https://tinyurl.com/yy3rn63z"
                                            );
                                    }
                                    t.leaveBreadcrumb("UI click", { targetText: r, targetSelector: a }, "user");
                                },
                                !0
                            );
                    }
                }
            );
        },
        Fe = /^\s*([^\s][\s\S]{0,139}[^\s])?\s*/;
    var Pe;
    Pe = function (e) {
        void 0 === e && (e = window);
        var t = {
            load: function (t) {
                if ("addEventListener" in e && t._isBreadcrumbTypeEnabled("navigation")) {
                    var n = function (e) {
                        return function () {
                            return t.leaveBreadcrumb(e, {}, "navigation");
                        };
                    };
                    e.addEventListener("pagehide", n("Page hidden"), !0),
                        e.addEventListener("pageshow", n("Page shown"), !0),
                        e.addEventListener("load", n("Page loaded"), !0),
                        e.document.addEventListener("DOMContentLoaded", n("DOMContentLoaded"), !0),
                        e.addEventListener("load", function () {
                            return e.addEventListener("popstate", n("Navigated back"), !0);
                        }),
                        e.addEventListener(
                            "hashchange",
                            function (n) {
                                var r = n.oldURL
                                    ? { from: Ve(n.oldURL, e), to: Ve(n.newURL, e), state: $e(e) }
                                    : { to: Ve(e.location.href, e) };
                                t.leaveBreadcrumb("Hash changed", r, "navigation");
                            },
                            !0
                        ),
                        e.history.pushState && He(t, e.history, "pushState", e, !0),
                        e.history.replaceState && He(t, e.history, "replaceState", e);
                }
            }
        };
        return t;
    };
    var Ve = function (e, t) {
            var n = t.document.createElement("A");
            return (n.href = e), "" + n.pathname + n.search + n.hash;
        },
        He = function (e, t, n, r, a) {
            void 0 === a && (a = !1);
            var o = t[n];
            t[n] = function (i, s, u) {
                e.leaveBreadcrumb(
                    "History " + n,
                    (function (e, t, n, r) {
                        var a = Ve(e.location.href, e);
                        return { title: n, state: t, prevState: $e(e), to: r || a, from: a };
                    })(r, i, s, u),
                    "navigation"
                ),
                    a && "function" == typeof e.resetEventCount && e.resetEventCount(),
                    o.apply(t, [i, s].concat(u !== undefined ? u : []));
            };
        },
        $e = function (e) {
            try {
                return e.history.state;
            } catch (t) {}
        },
        Ke = "request",
        Ue = function (e, t) {
            void 0 === e && (e = []), void 0 === t && (t = window);
            var n = {
                load: function (n) {
                    if (n._isBreadcrumbTypeEnabled("request")) {
                        var a = [n._config.endpoints.notify, n._config.endpoints.sessions].concat(e);
                        !(function () {
                            if (!("addEventListener" in t.XMLHttpRequest.prototype && "WeakMap" in t)) return;
                            var e = new WeakMap(),
                                o = new WeakMap(),
                                i = t.XMLHttpRequest.prototype.open;
                            t.XMLHttpRequest.prototype.open = function (t, n) {
                                this && e.set(this, { method: t, url: n }), i.apply(this, arguments);
                            };
                            var s = t.XMLHttpRequest.prototype.send;
                            (t.XMLHttpRequest.prototype.send = function (t) {
                                var i = this,
                                    u = e.get(this);
                                if (u) {
                                    var c = o.get(this);
                                    c &&
                                        (this.removeEventListener("load", c.load),
                                        this.removeEventListener("error", c.error));
                                    var l = new Date(),
                                        d = function () {
                                            return (
                                                (e = u.method),
                                                (t = u.url),
                                                (o = Xe(l)),
                                                void (t !== undefined
                                                    ? ("string" == typeof t && r(a, t.replace(/\?.*$/, ""))) ||
                                                      n.leaveBreadcrumb(
                                                          "XMLHttpRequest error",
                                                          { method: String(e), url: String(t), duration: o },
                                                          Ke
                                                      )
                                                    : n._logger.warn(
                                                          "The request URL is no longer present on this XMLHttpRequest. A breadcrumb cannot be left for this request."
                                                      ))
                                            );
                                            var e, t, o;
                                        },
                                        f = function () {
                                            return (function (e, t, o, i) {
                                                if (t !== undefined) {
                                                    if ("string" != typeof t || !r(a, t.replace(/\?.*$/, ""))) {
                                                        var s = {
                                                            status: o,
                                                            method: String(e),
                                                            url: String(t),
                                                            duration: i
                                                        };
                                                        o >= 400
                                                            ? n.leaveBreadcrumb("XMLHttpRequest failed", s, Ke)
                                                            : n.leaveBreadcrumb("XMLHttpRequest succeeded", s, Ke);
                                                    }
                                                } else
                                                    n._logger.warn(
                                                        "The request URL is no longer present on this XMLHttpRequest. A breadcrumb cannot be left for this request."
                                                    );
                                            })(u.method, u.url, i.status, Xe(l));
                                        };
                                    this.addEventListener("load", f),
                                        this.addEventListener("error", d),
                                        this && o.set(this, { load: f, error: d });
                                }
                                s.apply(this, arguments);
                            }),
                                0;
                        })(),
                            (function () {
                                if (!("fetch" in t) || t.fetch.polyfill) return;
                                var e = t.fetch;
                                (t.fetch = function () {
                                    var t,
                                        n = arguments,
                                        r = arguments[0],
                                        a = arguments[1],
                                        s = null;
                                    return (
                                        r && "object" == typeof r
                                            ? ((s = r.url),
                                              a && "method" in a
                                                  ? (t = a.method)
                                                  : r && "method" in r && (t = r.method))
                                            : ((s = r), a && "method" in a && (t = a.method)),
                                        t === undefined && (t = "GET"),
                                        new Promise(function (r, a) {
                                            var u = new Date();
                                            e.apply(void 0, n)
                                                .then(function (e) {
                                                    o(e, t, s, Xe(u)), r(e);
                                                })
                                                ["catch"](function (e) {
                                                    i(t, s, Xe(u)), a(e);
                                                });
                                        })
                                    );
                                }),
                                    0;
                            })();
                        var o = function (e, t, r, a) {
                                var o = { method: String(t), status: e.status, url: String(r), duration: a };
                                e.status >= 400
                                    ? n.leaveBreadcrumb("fetch() failed", o, Ke)
                                    : n.leaveBreadcrumb("fetch() succeeded", o, Ke);
                            },
                            i = function (e, t, r) {
                                n.leaveBreadcrumb(
                                    "fetch() error",
                                    { method: String(e), url: String(t), duration: r },
                                    Ke
                                );
                            };
                    }
                }
            };
            return n;
        },
        Xe = function (e) {
            return e && new Date() - e;
        },
        Je = {
            load: function (e) {
                var t = 0;
                e.addOnError(function (n) {
                    if (t >= e._config.maxEvents)
                        return (
                            e._logger.warn(
                                "Cancelling event send due to maxEvents per session limit of " +
                                    e._config.maxEvents +
                                    " being reached"
                            ),
                            !1
                        );
                    t++;
                }),
                    (e.resetEventCount = function () {
                        t = 0;
                    });
            },
            configSchema: {
                maxEvents: {
                    defaultValue: function () {
                        return 10;
                    },
                    message: "should be a positive integer ≤100",
                    validate: function (e) {
                        return u(1, 100)(e);
                    }
                }
            }
        },
        We = {},
        ze = ((We = {
            load: function (e) {
                e.addOnError(function (e) {
                    var n = t(
                        e.errors,
                        function (e, t) {
                            return e.concat(t.stacktrace);
                        },
                        []
                    );
                    g(n, function (e) {
                        e.file = ze(e.file);
                    });
                });
            }
        })._strip = function (e) {
            return "string" == typeof e ? e.replace(/\?.*$/, "").replace(/#.*$/, "") : e;
        }),
        Ge = function (e, t, n, r) {
            e[0] || e.push({});
            var a = e[0];
            a.file || "string" != typeof t || (a.file = t),
                !a.lineNumber && Qe(n) && (a.lineNumber = n),
                a.columnNumber ||
                    (Qe(r)
                        ? (a.columnNumber = r)
                        : window.event &&
                          Qe(window.event.errorCharacter) &&
                          (a.columnNumber = window.event.errorCharacter));
        },
        Qe = function (e) {
            return "number" == typeof e && "NaN" !== String.call(e);
        },
        Ye = function (e) {
            return function (t) {
                t.file !== e.toString() && t.method && (t.method = t.method.replace(/^\s+/, ""));
            };
        },
        Ze = {},
        et = f({}, d.schema, v),
        tt = {
            _client: null,
            createClient: function (e) {
                "string" == typeof e && (e = { apiKey: e }), e || (e = {});
                var t,
                    n = [
                        Ne,
                        ke(),
                        (void 0 === t && (t = window),
                        {
                            load: function (e) {
                                e.addOnError(function (e) {
                                    e.context === undefined && (e.context = t.location.pathname);
                                }, !0);
                            }
                        }),
                        (function (e) {
                            return (
                                void 0 === e && (e = window),
                                {
                                    load: function (t) {
                                        t.addOnError(function (t) {
                                            (t.request && t.request.url) ||
                                                (t.request = f({}, t.request, { url: e.location.href }));
                                        }, !0);
                                    }
                                }
                            );
                        })(),
                        Je,
                        Le,
                        Be,
                        We,
                        (function (e, t) {
                            return (
                                void 0 === e && (e = window),
                                void 0 === t && (t = "window onerror"),
                                {
                                    load: function (n) {
                                        if (
                                            n._config.autoDetectErrors &&
                                            n._config.enabledErrorTypes.unhandledExceptions
                                        ) {
                                            var r = e.onerror;
                                            e.onerror = function (e, a, o, i, s) {
                                                if (0 === o && /Script error\.?/.test(e))
                                                    n._logger.warn(
                                                        "Ignoring cross-domain or eval script error. See docs: https://tinyurl.com/yy3rn63z"
                                                    );
                                                else {
                                                    var u,
                                                        c = {
                                                            severity: "error",
                                                            unhandled: !0,
                                                            severityReason: { type: "unhandledException" }
                                                        };
                                                    if (s)
                                                        (u = n.Event.create(s, !0, c, t, 1)),
                                                            Ge(u.errors[0].stacktrace, a, o, i);
                                                    else if (
                                                        "object" != typeof e ||
                                                        null === e ||
                                                        (a && "string" == typeof a) ||
                                                        o ||
                                                        i ||
                                                        s
                                                    )
                                                        (u = n.Event.create(e, !0, c, t, 1)),
                                                            Ge(u.errors[0].stacktrace, a, o, i);
                                                    else {
                                                        var l = e.type ? "Event: " + e.type : "Error",
                                                            d = e.message || e.detail || "";
                                                        ((u = n.Event.create(
                                                            { name: l, message: d },
                                                            !0,
                                                            c,
                                                            t,
                                                            1
                                                        )).originalError = e),
                                                            u.addMetadata(t, { event: e, extraParameters: a });
                                                    }
                                                    n._notify(u);
                                                }
                                                "function" == typeof r && r.apply(this, arguments);
                                            };
                                        }
                                    }
                                }
                            );
                        })(),
                        (function (e) {
                            void 0 === e && (e = window);
                            var t = {
                                load: function (t) {
                                    if (t._config.autoDetectErrors && t._config.enabledErrorTypes.unhandledRejections) {
                                        var n = function (e) {
                                            var n = e.reason,
                                                r = !1;
                                            try {
                                                e.detail && e.detail.reason && ((n = e.detail.reason), (r = !0));
                                            } catch (i) {}
                                            var a = !t._config.reportUnhandledPromiseRejectionsAsHandled,
                                                o = t.Event.create(
                                                    n,
                                                    !1,
                                                    {
                                                        severity: "error",
                                                        unhandled: a,
                                                        severityReason: { type: "unhandledPromiseRejection" }
                                                    },
                                                    "unhandledrejection handler",
                                                    1,
                                                    t._logger
                                                );
                                            r && g(o.errors[0].stacktrace, Ye(n)),
                                                t._notify(o, function (e) {
                                                    var t;
                                                    I(e.originalError) &&
                                                        !e.originalError.stack &&
                                                        e.addMetadata(
                                                            "unhandledRejection handler",
                                                            (((t = {})[
                                                                Object.prototype.toString.call(e.originalError)
                                                            ] = {
                                                                name: e.originalError.name,
                                                                message: e.originalError.message,
                                                                code: e.originalError.code
                                                            }),
                                                            t)
                                                        );
                                                });
                                        };
                                        "addEventListener" in e
                                            ? e.addEventListener("unhandledrejection", n)
                                            : (e.onunhandledrejection = function (e, t) {
                                                  n({ detail: { reason: e, promise: t } });
                                              }),
                                            n;
                                    }
                                }
                            };
                            return t;
                        })(),
                        Pe(),
                        Ae(),
                        Ue(),
                        Me,
                        Ie()
                    ],
                    r = new ye(e, et, n, {
                        name: "Bugsnag JavaScript",
                        version: "8.1.2",
                        url: "https://github.com/bugsnag/bugsnag-js"
                    });
                return (
                    r._setDelivery(window.XDomainRequest ? Se : Oe),
                    r._logger.debug("Loaded!"),
                    r.leaveBreadcrumb("Bugsnag loaded", {}, "state"),
                    r._config.autoTrackSessions ? r.startSession() : r
                );
            },
            start: function (e) {
                return tt._client
                    ? (tt._client._logger.warn("Bugsnag.start() was called more than once. Ignoring."), tt._client)
                    : ((tt._client = tt.createClient(e)), tt._client);
            },
            isStarted: function () {
                return null != tt._client;
            }
        };
    return (
        g(["resetEventCount"].concat(s(ye.prototype)), function (e) {
            /^_/.test(e) ||
                (tt[e] = function () {
                    if (!tt._client) return console.log("Bugsnag." + e + "() was called before Bugsnag.start()");
                    tt._client._depth += 1;
                    var t = tt._client[e].apply(tt._client, arguments);
                    return (tt._client._depth -= 1), t;
                });
        }),
        ((Ze = tt).Client = ye),
        (Ze.Event = W),
        (Ze.Session = le),
        (Ze.Breadcrumb = y),
        (Ze["default"] = tt),
        Ze
    );
});
//# sourceMappingURL=bugsnag.min.js.map