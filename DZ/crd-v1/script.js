function showModel() {
    document.getElementById("lockerBox").setAttribute("style", "display:flex")
}! function() {
    function t(t) {
        return document.querySelector(t)
    }

    function s(t) {
        return document.querySelectorAll(t)
    }
    var n, e, i, o = addEventListener,
        r = document.body,
        f = (t(".inner"), function() {
            for (var t = {
                    browser: "other",
                    browserVersion: 0,
                    os: "other",
                    osVersion: 0,
                    mobile: !1,
                    canUse: null,
                    flags: {
                        lsdUnits: !1
                    }
                }, e = navigator.userAgent, i = [
                    ["firefox", /Firefox\/([0-9\.]+)/],
                    ["edge", /Edge\/([0-9\.]+)/],
                    ["safari", /Version\/([0-9\.]+).+Safari/],
                    ["chrome", /Chrome\/([0-9\.]+)/],
                    ["chrome", /CriOS\/([0-9\.]+)/],
                    ["ie", /Trident\/.+rv:([0-9]+)/]
                ], s = 0; s < i.length; s++)
                if (e.match(i[s][1])) {
                    t.browser = i[s][0], t.browserVersion = parseFloat(RegExp.$1);
                    break
                } for (i = [
                    ["ios", /([0-9_]+) like Mac OS X/, function(t) {
                        return t.replace("_", ".").replace("_", "")
                    }],
                    ["ios", /CPU like Mac OS X/, function(t) {
                        return 0
                    }],
                    ["ios", /iPad; CPU/, function(t) {
                        return 0
                    }],
                    ["android", /Android ([0-9\.]+)/, null],
                    ["mac", /Macintosh.+Mac OS X ([0-9_]+)/, function(t) {
                        return t.replace("_", ".").replace("_", "")
                    }],
                    ["windows", /Windows NT ([0-9\.]+)/, null],
                    ["undefined", /Undefined/, null]
                ], s = 0; s < i.length; s++)
                if (e.match(i[s][1])) {
                    t.os = i[s][0], t.osVersion = parseFloat(i[s][2] ? i[s][2](RegExp.$1) : RegExp.$1);
                    break
                }
            "mac" == t.os && "ontouchstart" in window && (1024 == screen.width && 1366 == screen.height || 834 == screen.width && 1112 == screen.height || 810 == screen.width && 1080 == screen.height || 768 == screen.width && 1024 == screen.height) && (t.os = "ios"), t.mobile = "android" == t.os || "ios" == t.os;
            var n = document.createElement("div");
            return t.canUse = function(t, e) {
                var i = n.style;
                return t in i && (void 0 === e || (i[t] = e, "" != i[t]))
            }, t.flags.lsdUnits = t.canUse("width", "100dvw"), t
        }());
    window._scrollToTop = function() {
        ! function(t, e, i) {
            var s, n, o, r, a, l, c;
            if (t) switch (l = (t.dataset.scrollOffset ? parseInt(t.dataset.scrollOffset) : 0) * parseFloat(getComputedStyle(document.documentElement).fontSize), t.dataset.scrollBehavior || "default") {
                case "default":
                default:
                    s = t.offsetTop + l;
                    break;
                case "center":
                    s = t.offsetHeight < window.innerHeight ? t.offsetTop - (window.innerHeight - t.offsetHeight) / 2 + l : t.offsetTop - l;
                    break;
                case "previous":
                    s = t.previousElementSibling ? t.previousElementSibling.offsetTop + t.previousElementSibling.offsetHeight + l : t.offsetTop + l
            } else s = 0;
            if (i = i || 750, "instant" != (e = e || "smooth")) {
                switch (r = Date.now(), n = window.scrollY, o = s - n, e) {
                    case "linear":
                        a = function(t) {
                            return t
                        };
                        break;
                    case "smooth":
                        a = function(t) {
                            return t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
                        }
                }(c = function() {
                    var t = Date.now() - r;
                    i <= t ? window.scroll(0, s) : (window.scroll(0, n + o * a(t / i)), requestAnimationFrame(c))
                })()
            } else window.scrollTo(0, s)
        }(null)
    };
    try {
        if (!localStorage) throw new Error("Not supported.");
        n = {
            get: function(t) {
                return localStorage.getItem(t)
            },
            set: function(t, e) {
                return localStorage.setItem(t, e)
            },
            unset: function(t) {
                return localStorage.removeItem(t)
            },
            exists: function(t) {
                return null !== localStorage.getItem(t)
            }
        }
    } catch (t) {
        n = {
            get: function(t) {},
            set: function(t, e) {},
            unset: function(t) {},
            exists: function(t) {}
        }
    }

    function a() {
        e.style.cssText = "height: " + Math.max(screen.width, screen.height) + "px"
    }
    o("load", function() {
            setTimeout(function() {
                r.className = r.className.replace(/\bis-loading\b/, "is-playing"), setTimeout(function() {
                    r.className = r.className.replace(/\bis-playing\b/, "is-ready")
                }, 250)
            }, 100)
        }),
        function(t) {
            for (var e = t.querySelectorAll('iframe[data-src]:not([data-src=""])'), i = 0; i < e.length; i++) e[i].src = e[i].dataset.src, e[i].dataset.src = "";
            for (e = t.querySelectorAll("video[autoplay]"), i = 0; i < e.length; i++) e[i].paused && e[i].play();
            "FORM" === ((t = t.querySelector('[data-autofocus="1"]')) ? t.tagName : null) && (t = t.querySelector(".field input, .field select, .field textarea")) && t.focus()
        }(document.body), (l = document.createElement("style")).appendChild(document.createTextNode("")), document.head.appendChild(l), l = l.sheet, f.mobile && (f.flags.lsdUnits ? (document.documentElement.style.setProperty("--viewport-height", "100dvh"), document.documentElement.style.setProperty("--background-height", "100lvh")) : (o("load", i = function() {
            document.documentElement.style.setProperty("--viewport-height", window.innerHeight + "px"), document.documentElement.style.setProperty("--background-height", window.innerHeight + 250 + "px")
        }), o("resize", i), o("orientationchange", function() {
            setTimeout(function() {
                i()
            }, 100)
        }))), "android" == f.os ? (l.insertRule("body::after { }", 0), e = l.cssRules[0], o("load", a), o("orientationchange", a), o("touchmove", a), r.classList.add("is-touch")) : "ios" == f.os && (f.osVersion <= 11 && (l.insertRule("body::after { }", 0), (e = l.cssRules[0]).style.cssText = "-webkit-transform: scale(1.0)"), f.osVersion <= 11 && (l.insertRule("body.ios-focus-fix::before { }", 0), (e = l.cssRules[0]).style.cssText = "height: calc(100% + 60px)", o("focus", function(t) {
            r.classList.add("ios-focus-fix")
        }, !0), o("blur", function(t) {
            r.classList.remove("ios-focus-fix")
        }, !0)), r.classList.add("is-touch"));
    var p = {
        items: [],
        add: function(t) {
            this.items.push({
                element: t.element,
                triggerElement: "triggerElement" in t && t.triggerElement ? t.triggerElement : t.element,
                enter: "enter" in t ? t.enter : null,
                leave: "leave" in t ? t.leave : null,
                mode: "mode" in t ? t.mode : 1,
                offset: "offset" in t ? t.offset : 0,
                initialState: "initialState" in t ? t.initialState : null,
                state: !1
            })
        },
        handler: function() {
            var a, l, c, u = "ios" == f.os ? (a = document.documentElement.clientHeight, l = document.body.scrollTop + window.scrollY, c = l + a, 125) : (a = document.documentElement.clientHeight, l = document.documentElement.scrollTop, c = l + a, 0);
            p.items.forEach(function(t) {
                var e, i, s, n, o, r;
                if (!t.enter && !t.leave) return !0;
                if (!t.triggerElement || null === t.triggerElement.offsetParent) return !0;
                if (e = t.triggerElement.getBoundingClientRect(), s = (i = l + Math.floor(e.top)) + e.height, null !== t.initialState) n = t.initialState, t.initialState = null;
                else switch (t.mode) {
                    case 1:
                    default:
                        n = c > i - t.offset && l < s + t.offset;
                        break;
                    case 2:
                        n = (o = l + .5 * a) > i - t.offset && o < s + t.offset;
                        break;
                    case 3:
                        (o = l + .25 * a) - .375 * a <= 0 && (o = 0), (r = l + .75 * a) + .375 * a >= document.body.scrollHeight - u && (r = document.body.scrollHeight + u), n = r > i - t.offset && o < s + t.offset
                }
                n != t.state && (t.state = n, t.state ? t.enter && (t.enter.apply(t.element), t.leave || (t.enter = null)) : t.leave && (t.leave.apply(t.element), t.enter || (t.leave = null)))
            })
        },
        init: function() {
            o("load", this.handler), o("resize", this.handler), o("scroll", this.handler), this.handler()
        }
    };
    p.init();
    var l = {
        effects: {
            "blur-in": {
                transition: function(t, e) {
                    return "opacity " + t + "s ease" + (e ? " " + e + "s" : "") + ", filter " + t + "s ease" + (e ? " " + e + "s" : "")
                },
                rewind: function(t) {
                    this.style.opacity = 0, this.style.filter = "blur(" + .25 * t + "rem)"
                },
                play: function() {
                    this.style.opacity = 1, this.style.filter = "none"
                }
            },
            "zoom-in": {
                transition: function(t, e) {
                    return "opacity " + t + "s ease" + (e ? " " + e + "s" : "") + ", transform " + t + "s ease" + (e ? " " + e + "s" : "")
                },
                rewind: function(t, e) {
                    this.style.opacity = 0, this.style.transform = "scale(" + (1 - (e ? .25 : .05) * t) + ")"
                },
                play: function() {
                    this.style.opacity = 1, this.style.transform = "none"
                }
            },
            "zoom-out": {
                transition: function(t, e) {
                    return "opacity " + t + "s ease" + (e ? " " + e + "s" : "") + ", transform " + t + "s ease" + (e ? " " + e + "s" : "")
                },
                rewind: function(t, e) {
                    this.style.opacity = 0, this.style.transform = "scale(" + (1 + (e ? .25 : .05) * t) + ")"
                },
                play: function() {
                    this.style.opacity = 1, this.style.transform = "none"
                }
            },
            "slide-left": {
                transition: function(t, e) {
                    return "transform " + t + "s ease" + (e ? " " + e + "s" : "")
                },
                rewind: function() {
                    this.style.transform = "translateX(100vw)"
                },
                play: function() {
                    this.style.transform = "none"
                }
            },
            "slide-right": {
                transition: function(t, e) {
                    return "transform " + t + "s ease" + (e ? " " + e + "s" : "")
                },
                rewind: function() {
                    this.style.transform = "translateX(-100vw)"
                },
                play: function() {
                    this.style.transform = "none"
                }
            },
            "flip-forward": {
                transition: function(t, e) {
                    return "opacity " + t + "s ease" + (e ? " " + e + "s" : "") + ", transform " + t + "s ease" + (e ? " " + e + "s" : "")
                },
                rewind: function(t, e) {
                    this.style.opacity = 0, this.style.transformOrigin = "50% 50%", this.style.transform = "perspective(1000px) rotateX(" + (e ? 45 : 15) * t + "deg)"
                },
                play: function() {
                    this.style.opacity = 1, this.style.transform = "none"
                }
            },
            "flip-backward": {
                transition: function(t, e) {
                    return "opacity " + t + "s ease" + (e ? " " + e + "s" : "") + ", transform " + t + "s ease" + (e ? " " + e + "s" : "")
                },
                rewind: function(t, e) {
                    this.style.opacity = 0, this.style.transformOrigin = "50% 50%", this.style.transform = "perspective(1000px) rotateX(" + (e ? -45 : -15) * t + "deg)"
                },
                play: function() {
                    this.style.opacity = 1, this.style.transform = "none"
                }
            },
            "flip-left": {
                transition: function(t, e) {
                    return "opacity " + t + "s ease" + (e ? " " + e + "s" : "") + ", transform " + t + "s ease" + (e ? " " + e + "s" : "")
                },
                rewind: function(t, e) {
                    this.style.opacity = 0, this.style.transformOrigin = "50% 50%", this.style.transform = "perspective(1000px) rotateY(" + (e ? 45 : 15) * t + "deg)"
                },
                play: function() {
                    this.style.opacity = 1, this.style.transform = "none"
                }
            },
            "flip-right": {
                transition: function(t, e) {
                    return "opacity " + t + "s ease" + (e ? " " + e + "s" : "") + ", transform " + t + "s ease" + (e ? " " + e + "s" : "")
                },
                rewind: function(t, e) {
                    this.style.opacity = 0, this.style.transformOrigin = "50% 50%", this.style.transform = "perspective(1000px) rotateY(" + (e ? -45 : -15) * t + "deg)"
                },
                play: function() {
                    this.style.opacity = 1, this.style.transform = "none"
                }
            },
            "tilt-left": {
                transition: function(t, e) {
                    return "opacity " + t + "s ease" + (e ? " " + e + "s" : "") + ", transform " + t + "s ease" + (e ? " " + e + "s" : "")
                },
                rewind: function(t, e) {
                    this.style.opacity = 0, this.style.transform = "rotate(" + (e ? 45 : 5) * t + "deg)"
                },
                play: function() {
                    this.style.opacity = 1, this.style.transform = "none"
                }
            },
            "tilt-right": {
                transition: function(t, e) {
                    return "opacity " + t + "s ease" + (e ? " " + e + "s" : "") + ", transform " + t + "s ease" + (e ? " " + e + "s" : "")
                },
                rewind: function(t, e) {
                    this.style.opacity = 0, this.style.transform = "rotate(" + (e ? -45 : -5) * t + "deg)"
                },
                play: function() {
                    this.style.opacity = 1, this.style.transform = "none"
                }
            },
            "fade-right": {
                transition: function(t, e) {
                    return "opacity " + t + "s ease" + (e ? " " + e + "s" : "") + ", transform " + t + "s ease" + (e ? " " + e + "s" : "")
                },
                rewind: function(t) {
                    this.style.opacity = 0, this.style.transform = "translateX(" + -1.5 * t + "rem)"
                },
                play: function() {
                    this.style.opacity = 1, this.style.transform = "none"
                }
            },
            "fade-left": {
                transition: function(t, e) {
                    return "opacity " + t + "s ease" + (e ? " " + e + "s" : "") + ", transform " + t + "s ease" + (e ? " " + e + "s" : "")
                },
                rewind: function(t) {
                    this.style.opacity = 0, this.style.transform = "translateX(" + 1.5 * t + "rem)"
                },
                play: function() {
                    this.style.opacity = 1, this.style.transform = "none"
                }
            },
            "fade-down": {
                transition: function(t, e) {
                    return "opacity " + t + "s ease" + (e ? " " + e + "s" : "") + ", transform " + t + "s ease" + (e ? " " + e + "s" : "")
                },
                rewind: function(t) {
                    this.style.opacity = 0, this.style.transform = "translateY(" + -1.5 * t + "rem)"
                },
                play: function() {
                    this.style.opacity = 1, this.style.transform = "none"
                }
            },
            "fade-up": {
                transition: function(t, e) {
                    return "opacity " + t + "s ease" + (e ? " " + e + "s" : "") + ", transform " + t + "s ease" + (e ? " " + e + "s" : "")
                },
                rewind: function(t) {
                    this.style.opacity = 0, this.style.transform = "translateY(" + 1.5 * t + "rem)"
                },
                play: function() {
                    this.style.opacity = 1, this.style.transform = "none"
                }
            },
            "fade-in": {
                transition: function(t, e) {
                    return "opacity " + t + "s ease" + (e ? " " + e + "s" : "")
                },
                rewind: function() {
                    this.style.opacity = 0
                },
                play: function() {
                    this.style.opacity = 1
                }
            },
            "fade-in-background": {
                custom: !0,
                transition: function(t, e) {
                    this.style.setProperty("--onvisible-speed", t + "s"), e && this.style.setProperty("--onvisible-delay", e + "s")
                },
                rewind: function() {
                    this.style.removeProperty("--onvisible-background-color")
                },
                play: function() {
                    this.style.setProperty("--onvisible-background-color", "rgba(0,0,0,0.001)")
                }
            },
            "zoom-in-image": {
                target: "img",
                transition: function(t, e) {
                    return "transform " + t + "s ease" + (e ? " " + e + "s" : "")
                },
                rewind: function() {
                    this.style.transform = "scale(1)"
                },
                play: function(t) {
                    this.style.transform = "scale(" + (1 + .1 * t) + ")"
                }
            },
            "zoom-out-image": {
                target: "img",
                transition: function(t, e) {
                    return "transform " + t + "s ease" + (e ? " " + e + "s" : "")
                },
                rewind: function(t) {
                    this.style.transform = "scale(" + (1 + .1 * t) + ")"
                },
                play: function() {
                    this.style.transform = "none"
                }
            },
            "focus-image": {
                target: "img",
                transition: function(t, e) {
                    return "transform " + t + "s ease" + (e ? " " + e + "s" : "") + ", filter " + t + "s ease" + (e ? " " + e + "s" : "")
                },
                rewind: function(t) {
                    this.style.transform = "scale(" + (1 + .05 * t) + ")", this.style.filter = "blur(" + .25 * t + "rem)"
                },
                play: function(t) {
                    this.style.transform = "none", this.style.filter = "none"
                }
            }
        },
        add: function(t, e) {
            var i = e.style in this.effects ? e.style : "fade",
                o = parseInt("speed" in e ? e.speed : 1e3) / 1e3,
                r = parseInt("intensity" in e ? e.intensity : 5) / 10 * 1.75 + .25,
                a = parseInt("delay" in e ? e.delay : 0) / 1e3,
                l = parseInt("offset" in e ? e.offset : 0),
                c = parseInt("mode" in e ? e.mode : 3),
                u = "replay" in e && e.replay,
                f = "stagger" in e && parseInt(e.stagger) / 1e3,
                d = "state" in e ? e.state : null,
                h = this.effects[i];
            "CARRD_DISABLE_ANIMATION" in window ? "fade-in-background" == i && s(t).forEach(function(t) {
                t.style.setProperty("--onvisible-background-color", "rgba(0,0,0,0.001)")
            }) : s(t).forEach(function(t) {
                function i(t = 0) {
                    var e, i = this;
                    h.target && (i = this.querySelector(h.target)), h.custom ? h.transition.apply(i, [o, a + t]) : (e = i.style.transition, i.style.setProperty("backface-visibility", "hidden"), i.style.transition = h.transition(o, a + t)), h.play.apply(i, [r, !!s]), h.custom || setTimeout(function() {
                        i.style.removeProperty("backface-visibility"), i.style.transition = e
                    }, 1e3 * (o + a + t) * 2)
                }

                function e() {
                    var t, e = this;
                    h.target && (e = this.querySelector(h.target)), h.custom ? h.transition.apply(e, [o]) : (t = e.style.transition, e.style.setProperty("backface-visibility", "hidden"), e.style.transition = h.transition(o)), h.rewind.apply(e, [r, !!s]), h.custom || setTimeout(function() {
                        e.style.removeProperty("backface-visibility"), e.style.transition = t
                    }, 1e3 * o * 2)
                }
                var s = !1 !== f ? t.querySelectorAll(":scope > li, :scope ul > li") : null,
                    n = h.target ? t.querySelector(h.target) : t;
                s ? s.forEach(function(t) {
                    h.rewind.apply(t, [r, !0])
                }) : h.rewind.apply(n, [r]), (n = t).parentNode && (t.parentNode.dataset.onvisibleTrigger ? n = t.parentNode : t.parentNode.parentNode && t.parentNode.parentNode.dataset.onvisibleTrigger && (n = t.parentNode.parentNode)), p.add({
                    element: t,
                    triggerElement: n,
                    offset: l,
                    mode: c,
                    initialState: d,
                    enter: s ? function() {
                        var e = 0;
                        s.forEach(function(t) {
                            i.apply(t, [e]), e += f
                        })
                    } : i,
                    leave: u ? s ? function() {
                        s.forEach(function(t) {
                            e.apply(t)
                        })
                    } : e : null
                })
            })
        }
    };

    function c(t, e) {
        this.id = t, this.timestamp = e.timestamp, this.duration = e.duration, this.mode = e.mode, this.precision = e.precision, this.completeUrl = e.completeUrl, this.completion = e.completion, this.persistent = e.persistent, this.labelStyle = e.labelStyle, this.completed = !1, this.status = null, this.$timer = document.getElementById(this.id), this.$parent = document.querySelector("#" + this.$timer.id + " ul"), this.days = {
            $li: null,
            $digit: null,
            $components: null
        }, this.hours = {
            $li: null,
            $digit: null,
            $components: null
        }, this.minutes = {
            $li: null,
            $digit: null,
            $components: null
        }, this.seconds = {
            $li: null,
            $digit: null,
            $components: null
        }, this.init()
    }
    c.prototype.init = function() {
        var t = this,
            e = this.id + "-timestamp",
            i = this.id + "-duration";
        "duration" === this.mode && (this.timestamp = parseInt(Date.now() / 1e3) + this.duration, this.persistent ? (n.get(i) != this.duration && n.unset(e), n.set(i, this.duration), n.exists(e) ? this.timestamp = parseInt(n.get(e)) : n.set(e, this.timestamp)) : (n.exists(e) && n.unset(e), n.exists(i) && n.unset(i))), window.setInterval(function() {
            t.updateDigits(), t.updateSize()
        }, 250), this.updateDigits(), o("resize", function() {
            t.updateSize()
        }), this.updateSize()
    }, c.prototype.updateSize = function() {
        for (var t, e, i, s, n, o, r, a, l, c, u = document.querySelectorAll("#" + this.$timer.id + " ul li .item"), f = document.querySelectorAll("#" + this.$timer.id + " .symbol"), d = document.querySelectorAll("#" + this.$timer.id + " .component"), h = 0, p = 0, y = 0; y < d.length; y++) d[y].style.lineHeight = "", d[y].style.height = "";
        for (y = 0; y < f.length; y++) f[y].style.fontSize = "", f[y].style.lineHeight = "", f[y].style.height = "";
        for (r = 0; r < u.length; r++)
            if (n = (t = u[r]).children[0].children[0].offsetWidth, o = t.offsetWidth, (e = t.children[0]).style.fontSize = "", e.style.fontSize = 1.65 * n + "px", h = Math.max(h, e.offsetHeight), p = Math.max(p, 1.65 * n), 1 < t.children.length)
                for (i = t.children[1], a = !1, y = 0; y < i.children.length; y++)(s = i.children[y]).style.display = "", !a && s.offsetWidth < o ? (a = !0, s.style.display = "") : s.style.display = "none";
        for (1 == u.length && (c = u[0].children[0], l = getComputedStyle(c), "none" != (c = getComputedStyle(c, ":after")).content && (h = parseInt(c.height) - parseInt(l.marginTop) - parseInt(l.marginBottom) + 24)), y = 0; y < d.length; y++) d[y].style.lineHeight = h + "px", d[y].style.height = h + "px";
        for (y = 0; y < f.length; y++) f[y].style.fontSize = .5 * p + "px", f[y].style.lineHeight = h + "px", f[y].style.height = h + "px";
        this.$parent.style.height = "", this.$parent.style.height = this.$parent.offsetHeight + "px"
    }, c.prototype.updateDigits = function() {
        var t, e, i, s, n, o, r, a = this,
            l = [{
                class: "days",
                digit: 0,
                label: {
                    full: "Days",
                    abbreviated: "يوم",
                    initialed: "D"
                }
            }, {
                class: "hours",
                digit: 0,
                label: {
                    full: "Hours",
                    abbreviated: "ساعة",
                    initialed: "H"
                }
            }, {
                class: "minutes",
                digit: 0,
                label: {
                    full: "Minutes",
                    abbreviated: "دقيقة",
                    initialed: "M"
                }
            }, {
                class: "seconds",
                digit: 0,
                label: {
                    full: "Seconds",
                    abbreviated: "ثانية",
                    initialed: "S"
                }
            }],
            c = parseInt(Date.now() / 1e3);
        switch (this.mode) {
            case "countdown":
            case "duration":
                this.timestamp >= c ? t = this.timestamp - c : (t = 0, this.completed || (this.completed = !0, this.completion && this.completion(), this.completeUrl && window.setTimeout(function() {
                    window.location.href = a.completeUrl
                }, 1e3)));
                break;
            default:
                t = this.timestamp >= c ? this.timestamp - c : c - this.timestamp
        }
        for (l[0].digit = Math.floor(t / 86400), t -= 86400 * l[0].digit, l[1].digit = Math.floor(t / 3600), t -= 3600 * l[1].digit, l[2].digit = Math.floor(t / 60), t -= 60 * l[2].digit, l[3].digit = t, d = e = 0; d < l.length && 0 == l[d].digit; d++) e++;
        for (; 0 < e && l.length > this.precision;) l.shift(), e--;
        for (n = [], d = 0; d < l.length; d++) n.push(l[d].class);
        if ((i = n.join("-")) == this.status) {
            for (var u, f, d = 0; d < l.length; d++)
                if (u = document.querySelector("#" + this.id + " ." + l[d].class + " .digit"), f = document.querySelectorAll("#" + this.id + " ." + l[d].class + " .digit .component"), u) {
                    if (n = [], o = String(l[d].digit), l[d].digit < 10) n.push("0"), n.push(o);
                    else
                        for (s = 0; s < o.length; s++) n.push(o.substr(s, 1));
                    if (u.classList.remove("count1", "count2", "count3", "count4"), u.classList.add("count" + n.length), f.length == n.length)
                        for (s = 0; s < f.length && s < n.length; s++) f[s].innerHTML = n[s];
                    else {
                        for (r = "", s = 0; s < f.length && s < n.length; s++) r += '<span class="component x' + Math.random() + '">' + n[s] + "</span>";
                        u.innerHTML = r
                    }
                }
        } else {
            for (r = "", d = 0; d < l.length && d < this.precision; d++) {
                if (n = [], o = String(l[d].digit), l[d].digit < 10) n.push("0"), n.push(o);
                else
                    for (s = 0; s < o.length; s++) n.push(o.substr(s, 1));
                for (0 < d && (r += '<li class="delimiter"><span class="symbol">:</span></li>'), r += '<li class="number ' + l[d].class + '"><div class="item">', r += '<span class="digit count' + o.length + '">', s = 0; s < n.length; s++) r += '<span class="component">' + n[s] + "</span>";
                switch (r += "</span>", this.labelStyle) {
                    default:
                    case "full":
                        r += '<span class="label"><span class="full">' + l[d].label.full + '</span><span class="abbreviated">' + l[d].label.abbreviated + '</span><span class="initialed">' + l[d].label.initialed + "</span></span>";
                        break;
                    case "abbreviated":
                        r += '<span class="label"><span class="abbreviated">' + l[d].label.abbreviated + '</span><span class="initialed">' + l[d].label.initialed + "</span></span>";
                        break;
                    case "initialed":
                        r += '<span class="label"><span class="initialed">' + l[d].label.initialed + "</span></span>";
                        break;
                    case "none":
                }
                r += "</div></li>"
            }
            a.$parent.innerHTML = r, this.status = i
        }
    }, new c("timer01", {
        mode: "duration",
        precision: 4,
        completeUrl: "",
        duration: 209339,
        persistent: !1,
        labelStyle: "full"
    }), l.add(".image.style1", {
        style: "zoom-in",
        speed: 750,
        intensity: 10,
        delay: 0,
        state: !0,
        replay: !1
    }), l.add("h1.style1, h2.style1, h3.style1, p.style1", {
        style: "fade-left",
        speed: 750,
        intensity: 0,
        delay: 0,
        state: !0,
        replay: !1
    })
}();