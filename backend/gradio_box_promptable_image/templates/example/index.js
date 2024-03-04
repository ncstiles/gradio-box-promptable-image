const { setContext: x, getContext: p } = window.__gradio__svelte__internal, v = "WORKER_PROXY_CONTEXT_KEY";
function w() {
  return p(v);
}
function R(n) {
  return n.host === window.location.host || n.host === "localhost:7860" || n.host === "127.0.0.1:7860" || // Ref: https://github.com/gradio-app/gradio/blob/v3.32.0/js/app/src/Index.svelte#L194
  n.host === "lite.local";
}
function C(n, e) {
  const s = e.toLowerCase();
  for (const [t, l] of Object.entries(n))
    if (t.toLowerCase() === s)
      return l;
}
function E(n) {
  if (n == null)
    return !1;
  const e = new URL(n);
  return !(!R(e) || e.protocol !== "http:" && e.protocol !== "https:");
}
async function k(n) {
  if (n == null || !E(n))
    return n;
  const e = w();
  if (e == null)
    return n;
  const t = new URL(n).pathname;
  return e.httpRequest({
    method: "GET",
    path: t,
    headers: {},
    query_string: ""
  }).then((l) => {
    if (l.status !== 200)
      throw new Error(`Failed to get file ${t} from the Wasm worker.`);
    const r = new Blob([l.body], {
      type: C(l.headers, "content-type")
    });
    return URL.createObjectURL(r);
  });
}
const {
  SvelteComponent: O,
  assign: u,
  compute_rest_props: m,
  detach: q,
  element: L,
  exclude_internal_props: U,
  get_spread_update: K,
  init: P,
  insert: T,
  noop: g,
  safe_not_equal: W,
  set_attributes: d,
  src_url_equal: X,
  toggle_class: h
} = window.__gradio__svelte__internal;
function Y(n) {
  let e, s, t = [
    {
      src: s = /*resolved_src*/
      n[0]
    },
    /*$$restProps*/
    n[1]
  ], l = {};
  for (let r = 0; r < t.length; r += 1)
    l = u(l, t[r]);
  return {
    c() {
      e = L("img"), d(e, l), h(e, "svelte-kxeri3", !0);
    },
    m(r, o) {
      T(r, e, o);
    },
    p(r, [o]) {
      d(e, l = K(t, [
        o & /*resolved_src*/
        1 && !X(e.src, s = /*resolved_src*/
        r[0]) && { src: s },
        o & /*$$restProps*/
        2 && /*$$restProps*/
        r[1]
      ])), h(e, "svelte-kxeri3", !0);
    },
    i: g,
    o: g,
    d(r) {
      r && q(e);
    }
  };
}
function S(n, e, s) {
  const t = ["src"];
  let l = m(e, t), { src: r = void 0 } = e, o, a;
  return n.$$set = (_) => {
    e = u(u({}, e), U(_)), s(1, l = m(e, t)), "src" in _ && s(2, r = _.src);
  }, n.$$.update = () => {
    if (n.$$.dirty & /*src, latest_src*/
    12) {
      s(0, o = r), s(3, a = r);
      const _ = r;
      k(_).then((y) => {
        a === _ && s(0, o = y);
      });
    }
  }, [o, l, r, a];
}
class j extends O {
  constructor(e) {
    super(), P(this, e, S, Y, W, { src: 2 });
  }
}
const {
  SvelteComponent: I,
  attr: N,
  check_outros: B,
  create_component: F,
  destroy_component: G,
  detach: H,
  element: V,
  group_outros: z,
  init: A,
  insert: D,
  mount_component: J,
  safe_not_equal: M,
  toggle_class: i,
  transition_in: c,
  transition_out: f
} = window.__gradio__svelte__internal;
function b(n) {
  let e, s;
  return e = new j({
    props: {
      src: (
        /*samples_dir*/
        n[1] + /*value*/
        n[0].path
      ),
      alt: ""
    }
  }), {
    c() {
      F(e.$$.fragment);
    },
    m(t, l) {
      J(e, t, l), s = !0;
    },
    p(t, l) {
      const r = {};
      l & /*samples_dir, value*/
      3 && (r.src = /*samples_dir*/
      t[1] + /*value*/
      t[0].path), e.$set(r);
    },
    i(t) {
      s || (c(e.$$.fragment, t), s = !0);
    },
    o(t) {
      f(e.$$.fragment, t), s = !1;
    },
    d(t) {
      G(e, t);
    }
  };
}
function Q(n) {
  let e, s, t = (
    /*value*/
    n[0] && b(n)
  );
  return {
    c() {
      e = V("div"), t && t.c(), N(e, "class", "container svelte-1sgcyba"), i(
        e,
        "table",
        /*type*/
        n[2] === "table"
      ), i(
        e,
        "gallery",
        /*type*/
        n[2] === "gallery"
      ), i(
        e,
        "selected",
        /*selected*/
        n[3]
      ), i(
        e,
        "border",
        /*value*/
        n[0]
      );
    },
    m(l, r) {
      D(l, e, r), t && t.m(e, null), s = !0;
    },
    p(l, [r]) {
      /*value*/
      l[0] ? t ? (t.p(l, r), r & /*value*/
      1 && c(t, 1)) : (t = b(l), t.c(), c(t, 1), t.m(e, null)) : t && (z(), f(t, 1, 1, () => {
        t = null;
      }), B()), (!s || r & /*type*/
      4) && i(
        e,
        "table",
        /*type*/
        l[2] === "table"
      ), (!s || r & /*type*/
      4) && i(
        e,
        "gallery",
        /*type*/
        l[2] === "gallery"
      ), (!s || r & /*selected*/
      8) && i(
        e,
        "selected",
        /*selected*/
        l[3]
      ), (!s || r & /*value*/
      1) && i(
        e,
        "border",
        /*value*/
        l[0]
      );
    },
    i(l) {
      s || (c(t), s = !0);
    },
    o(l) {
      f(t), s = !1;
    },
    d(l) {
      l && H(e), t && t.d();
    }
  };
}
function Z(n, e, s) {
  let { value: t } = e, { samples_dir: l } = e, { type: r } = e, { selected: o = !1 } = e;
  return n.$$set = (a) => {
    "value" in a && s(0, t = a.value), "samples_dir" in a && s(1, l = a.samples_dir), "type" in a && s(2, r = a.type), "selected" in a && s(3, o = a.selected);
  }, [t, l, r, o];
}
class $ extends I {
  constructor(e) {
    super(), A(this, e, Z, Q, M, {
      value: 0,
      samples_dir: 1,
      type: 2,
      selected: 3
    });
  }
}
export {
  $ as default
};
