const ka = [
  { color: "red", primary: 600, secondary: 100 },
  { color: "green", primary: 600, secondary: 100 },
  { color: "blue", primary: 600, secondary: 100 },
  { color: "yellow", primary: 500, secondary: 100 },
  { color: "purple", primary: 600, secondary: 100 },
  { color: "teal", primary: 600, secondary: 100 },
  { color: "orange", primary: 600, secondary: 100 },
  { color: "cyan", primary: 600, secondary: 100 },
  { color: "lime", primary: 500, secondary: 100 },
  { color: "pink", primary: 600, secondary: 100 }
], sl = {
  inherit: "inherit",
  current: "currentColor",
  transparent: "transparent",
  black: "#000",
  white: "#fff",
  slate: {
    50: "#f8fafc",
    100: "#f1f5f9",
    200: "#e2e8f0",
    300: "#cbd5e1",
    400: "#94a3b8",
    500: "#64748b",
    600: "#475569",
    700: "#334155",
    800: "#1e293b",
    900: "#0f172a",
    950: "#020617"
  },
  gray: {
    50: "#f9fafb",
    100: "#f3f4f6",
    200: "#e5e7eb",
    300: "#d1d5db",
    400: "#9ca3af",
    500: "#6b7280",
    600: "#4b5563",
    700: "#374151",
    800: "#1f2937",
    900: "#111827",
    950: "#030712"
  },
  zinc: {
    50: "#fafafa",
    100: "#f4f4f5",
    200: "#e4e4e7",
    300: "#d4d4d8",
    400: "#a1a1aa",
    500: "#71717a",
    600: "#52525b",
    700: "#3f3f46",
    800: "#27272a",
    900: "#18181b",
    950: "#09090b"
  },
  neutral: {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#e5e5e5",
    300: "#d4d4d4",
    400: "#a3a3a3",
    500: "#737373",
    600: "#525252",
    700: "#404040",
    800: "#262626",
    900: "#171717",
    950: "#0a0a0a"
  },
  stone: {
    50: "#fafaf9",
    100: "#f5f5f4",
    200: "#e7e5e4",
    300: "#d6d3d1",
    400: "#a8a29e",
    500: "#78716c",
    600: "#57534e",
    700: "#44403c",
    800: "#292524",
    900: "#1c1917",
    950: "#0c0a09"
  },
  red: {
    50: "#fef2f2",
    100: "#fee2e2",
    200: "#fecaca",
    300: "#fca5a5",
    400: "#f87171",
    500: "#ef4444",
    600: "#dc2626",
    700: "#b91c1c",
    800: "#991b1b",
    900: "#7f1d1d",
    950: "#450a0a"
  },
  orange: {
    50: "#fff7ed",
    100: "#ffedd5",
    200: "#fed7aa",
    300: "#fdba74",
    400: "#fb923c",
    500: "#f97316",
    600: "#ea580c",
    700: "#c2410c",
    800: "#9a3412",
    900: "#7c2d12",
    950: "#431407"
  },
  amber: {
    50: "#fffbeb",
    100: "#fef3c7",
    200: "#fde68a",
    300: "#fcd34d",
    400: "#fbbf24",
    500: "#f59e0b",
    600: "#d97706",
    700: "#b45309",
    800: "#92400e",
    900: "#78350f",
    950: "#451a03"
  },
  yellow: {
    50: "#fefce8",
    100: "#fef9c3",
    200: "#fef08a",
    300: "#fde047",
    400: "#facc15",
    500: "#eab308",
    600: "#ca8a04",
    700: "#a16207",
    800: "#854d0e",
    900: "#713f12",
    950: "#422006"
  },
  lime: {
    50: "#f7fee7",
    100: "#ecfccb",
    200: "#d9f99d",
    300: "#bef264",
    400: "#a3e635",
    500: "#84cc16",
    600: "#65a30d",
    700: "#4d7c0f",
    800: "#3f6212",
    900: "#365314",
    950: "#1a2e05"
  },
  green: {
    50: "#f0fdf4",
    100: "#dcfce7",
    200: "#bbf7d0",
    300: "#86efac",
    400: "#4ade80",
    500: "#22c55e",
    600: "#16a34a",
    700: "#15803d",
    800: "#166534",
    900: "#14532d",
    950: "#052e16"
  },
  emerald: {
    50: "#ecfdf5",
    100: "#d1fae5",
    200: "#a7f3d0",
    300: "#6ee7b7",
    400: "#34d399",
    500: "#10b981",
    600: "#059669",
    700: "#047857",
    800: "#065f46",
    900: "#064e3b",
    950: "#022c22"
  },
  teal: {
    50: "#f0fdfa",
    100: "#ccfbf1",
    200: "#99f6e4",
    300: "#5eead4",
    400: "#2dd4bf",
    500: "#14b8a6",
    600: "#0d9488",
    700: "#0f766e",
    800: "#115e59",
    900: "#134e4a",
    950: "#042f2e"
  },
  cyan: {
    50: "#ecfeff",
    100: "#cffafe",
    200: "#a5f3fc",
    300: "#67e8f9",
    400: "#22d3ee",
    500: "#06b6d4",
    600: "#0891b2",
    700: "#0e7490",
    800: "#155e75",
    900: "#164e63",
    950: "#083344"
  },
  sky: {
    50: "#f0f9ff",
    100: "#e0f2fe",
    200: "#bae6fd",
    300: "#7dd3fc",
    400: "#38bdf8",
    500: "#0ea5e9",
    600: "#0284c7",
    700: "#0369a1",
    800: "#075985",
    900: "#0c4a6e",
    950: "#082f49"
  },
  blue: {
    50: "#eff6ff",
    100: "#dbeafe",
    200: "#bfdbfe",
    300: "#93c5fd",
    400: "#60a5fa",
    500: "#3b82f6",
    600: "#2563eb",
    700: "#1d4ed8",
    800: "#1e40af",
    900: "#1e3a8a",
    950: "#172554"
  },
  indigo: {
    50: "#eef2ff",
    100: "#e0e7ff",
    200: "#c7d2fe",
    300: "#a5b4fc",
    400: "#818cf8",
    500: "#6366f1",
    600: "#4f46e5",
    700: "#4338ca",
    800: "#3730a3",
    900: "#312e81",
    950: "#1e1b4b"
  },
  violet: {
    50: "#f5f3ff",
    100: "#ede9fe",
    200: "#ddd6fe",
    300: "#c4b5fd",
    400: "#a78bfa",
    500: "#8b5cf6",
    600: "#7c3aed",
    700: "#6d28d9",
    800: "#5b21b6",
    900: "#4c1d95",
    950: "#2e1065"
  },
  purple: {
    50: "#faf5ff",
    100: "#f3e8ff",
    200: "#e9d5ff",
    300: "#d8b4fe",
    400: "#c084fc",
    500: "#a855f7",
    600: "#9333ea",
    700: "#7e22ce",
    800: "#6b21a8",
    900: "#581c87",
    950: "#3b0764"
  },
  fuchsia: {
    50: "#fdf4ff",
    100: "#fae8ff",
    200: "#f5d0fe",
    300: "#f0abfc",
    400: "#e879f9",
    500: "#d946ef",
    600: "#c026d3",
    700: "#a21caf",
    800: "#86198f",
    900: "#701a75",
    950: "#4a044e"
  },
  pink: {
    50: "#fdf2f8",
    100: "#fce7f3",
    200: "#fbcfe8",
    300: "#f9a8d4",
    400: "#f472b6",
    500: "#ec4899",
    600: "#db2777",
    700: "#be185d",
    800: "#9d174d",
    900: "#831843",
    950: "#500724"
  },
  rose: {
    50: "#fff1f2",
    100: "#ffe4e6",
    200: "#fecdd3",
    300: "#fda4af",
    400: "#fb7185",
    500: "#f43f5e",
    600: "#e11d48",
    700: "#be123c",
    800: "#9f1239",
    900: "#881337",
    950: "#4c0519"
  }
};
ka.reduce(
  (t, { color: e, primary: n, secondary: r }) => ({
    ...t,
    [e]: {
      primary: sl[e][n],
      secondary: sl[e][r]
    }
  }),
  {}
);
function Sa(t) {
  let e, n = t[0], r = 1;
  for (; r < t.length; ) {
    const i = t[r], l = t[r + 1];
    if (r += 2, (i === "optionalAccess" || i === "optionalCall") && n == null)
      return;
    i === "access" || i === "optionalAccess" ? (e = n, n = l(n)) : (i === "call" || i === "optionalCall") && (n = l((...o) => n.call(e, ...o)), e = void 0);
  }
  return n;
}
class Fn extends Error {
  constructor(e) {
    super(e), this.name = "ShareError";
  }
}
async function Ca(t, e) {
  if (window.__gradio_space__ == null)
    throw new Fn("Must be on Spaces to share.");
  let n, r, i;
  if (e === "url") {
    const s = await fetch(t);
    n = await s.blob(), r = s.headers.get("content-type") || "", i = s.headers.get("content-disposition") || "";
  } else
    n = Ta(t), r = t.split(";")[0].split(":")[1], i = "file" + r.split("/")[1];
  const l = new File([n], i, { type: r }), o = await fetch("https://huggingface.co/uploads", {
    method: "POST",
    body: l,
    headers: {
      "Content-Type": l.type,
      "X-Requested-With": "XMLHttpRequest"
    }
  });
  if (!o.ok) {
    if (Sa([o, "access", (s) => s.headers, "access", (s) => s.get, "call", (s) => s("content-type"), "optionalAccess", (s) => s.includes, "call", (s) => s("application/json")])) {
      const s = await o.json();
      throw new Fn(`Upload failed: ${s.error}`);
    }
    throw new Fn("Upload failed.");
  }
  return await o.text();
}
function Ta(t) {
  for (var e = t.split(","), n = e[0].match(/:(.*?);/)[1], r = atob(e[1]), i = r.length, l = new Uint8Array(i); i--; )
    l[i] = r.charCodeAt(i);
  return new Blob([l], { type: n });
}
const {
  SvelteComponent: Aa,
  assign: Ba,
  create_slot: Ha,
  detach: Pa,
  element: Na,
  get_all_dirty_from_scope: Ia,
  get_slot_changes: La,
  get_spread_update: Oa,
  init: Ma,
  insert: Ra,
  safe_not_equal: Da,
  set_dynamic_element_data: al,
  set_style: Oe,
  toggle_class: lt,
  transition_in: Zo,
  transition_out: Jo,
  update_slot_base: Ua
} = window.__gradio__svelte__internal;
function qa(t) {
  let e, n, r;
  const i = (
    /*#slots*/
    t[18].default
  ), l = Ha(
    i,
    t,
    /*$$scope*/
    t[17],
    null
  );
  let o = [
    { "data-testid": (
      /*test_id*/
      t[7]
    ) },
    { id: (
      /*elem_id*/
      t[2]
    ) },
    {
      class: n = "block " + /*elem_classes*/
      t[3].join(" ") + " svelte-1t38q2d"
    }
  ], a = {};
  for (let s = 0; s < o.length; s += 1)
    a = Ba(a, o[s]);
  return {
    c() {
      e = Na(
        /*tag*/
        t[14]
      ), l && l.c(), al(
        /*tag*/
        t[14]
      )(e, a), lt(
        e,
        "hidden",
        /*visible*/
        t[10] === !1
      ), lt(
        e,
        "padded",
        /*padding*/
        t[6]
      ), lt(
        e,
        "border_focus",
        /*border_mode*/
        t[5] === "focus"
      ), lt(e, "hide-container", !/*explicit_call*/
      t[8] && !/*container*/
      t[9]), Oe(
        e,
        "height",
        /*get_dimension*/
        t[15](
          /*height*/
          t[0]
        )
      ), Oe(e, "width", typeof /*width*/
      t[1] == "number" ? `calc(min(${/*width*/
      t[1]}px, 100%))` : (
        /*get_dimension*/
        t[15](
          /*width*/
          t[1]
        )
      )), Oe(
        e,
        "border-style",
        /*variant*/
        t[4]
      ), Oe(
        e,
        "overflow",
        /*allow_overflow*/
        t[11] ? "visible" : "hidden"
      ), Oe(
        e,
        "flex-grow",
        /*scale*/
        t[12]
      ), Oe(e, "min-width", `calc(min(${/*min_width*/
      t[13]}px, 100%))`), Oe(e, "border-width", "var(--block-border-width)");
    },
    m(s, u) {
      Ra(s, e, u), l && l.m(e, null), r = !0;
    },
    p(s, u) {
      l && l.p && (!r || u & /*$$scope*/
      131072) && Ua(
        l,
        i,
        s,
        /*$$scope*/
        s[17],
        r ? La(
          i,
          /*$$scope*/
          s[17],
          u,
          null
        ) : Ia(
          /*$$scope*/
          s[17]
        ),
        null
      ), al(
        /*tag*/
        s[14]
      )(e, a = Oa(o, [
        (!r || u & /*test_id*/
        128) && { "data-testid": (
          /*test_id*/
          s[7]
        ) },
        (!r || u & /*elem_id*/
        4) && { id: (
          /*elem_id*/
          s[2]
        ) },
        (!r || u & /*elem_classes*/
        8 && n !== (n = "block " + /*elem_classes*/
        s[3].join(" ") + " svelte-1t38q2d")) && { class: n }
      ])), lt(
        e,
        "hidden",
        /*visible*/
        s[10] === !1
      ), lt(
        e,
        "padded",
        /*padding*/
        s[6]
      ), lt(
        e,
        "border_focus",
        /*border_mode*/
        s[5] === "focus"
      ), lt(e, "hide-container", !/*explicit_call*/
      s[8] && !/*container*/
      s[9]), u & /*height*/
      1 && Oe(
        e,
        "height",
        /*get_dimension*/
        s[15](
          /*height*/
          s[0]
        )
      ), u & /*width*/
      2 && Oe(e, "width", typeof /*width*/
      s[1] == "number" ? `calc(min(${/*width*/
      s[1]}px, 100%))` : (
        /*get_dimension*/
        s[15](
          /*width*/
          s[1]
        )
      )), u & /*variant*/
      16 && Oe(
        e,
        "border-style",
        /*variant*/
        s[4]
      ), u & /*allow_overflow*/
      2048 && Oe(
        e,
        "overflow",
        /*allow_overflow*/
        s[11] ? "visible" : "hidden"
      ), u & /*scale*/
      4096 && Oe(
        e,
        "flex-grow",
        /*scale*/
        s[12]
      ), u & /*min_width*/
      8192 && Oe(e, "min-width", `calc(min(${/*min_width*/
      s[13]}px, 100%))`);
    },
    i(s) {
      r || (Zo(l, s), r = !0);
    },
    o(s) {
      Jo(l, s), r = !1;
    },
    d(s) {
      s && Pa(e), l && l.d(s);
    }
  };
}
function Fa(t) {
  let e, n = (
    /*tag*/
    t[14] && qa(t)
  );
  return {
    c() {
      n && n.c();
    },
    m(r, i) {
      n && n.m(r, i), e = !0;
    },
    p(r, [i]) {
      /*tag*/
      r[14] && n.p(r, i);
    },
    i(r) {
      e || (Zo(n, r), e = !0);
    },
    o(r) {
      Jo(n, r), e = !1;
    },
    d(r) {
      n && n.d(r);
    }
  };
}
function Ga(t, e, n) {
  let { $$slots: r = {}, $$scope: i } = e, { height: l = void 0 } = e, { width: o = void 0 } = e, { elem_id: a = "" } = e, { elem_classes: s = [] } = e, { variant: u = "solid" } = e, { border_mode: c = "base" } = e, { padding: f = !0 } = e, { type: _ = "normal" } = e, { test_id: h = void 0 } = e, { explicit_call: d = !1 } = e, { container: m = !0 } = e, { visible: g = !0 } = e, { allow_overflow: p = !0 } = e, { scale: T = null } = e, { min_width: v = 0 } = e, B = _ === "fieldset" ? "fieldset" : "div";
  const N = (y) => {
    if (y !== void 0) {
      if (typeof y == "number")
        return y + "px";
      if (typeof y == "string")
        return y;
    }
  };
  return t.$$set = (y) => {
    "height" in y && n(0, l = y.height), "width" in y && n(1, o = y.width), "elem_id" in y && n(2, a = y.elem_id), "elem_classes" in y && n(3, s = y.elem_classes), "variant" in y && n(4, u = y.variant), "border_mode" in y && n(5, c = y.border_mode), "padding" in y && n(6, f = y.padding), "type" in y && n(16, _ = y.type), "test_id" in y && n(7, h = y.test_id), "explicit_call" in y && n(8, d = y.explicit_call), "container" in y && n(9, m = y.container), "visible" in y && n(10, g = y.visible), "allow_overflow" in y && n(11, p = y.allow_overflow), "scale" in y && n(12, T = y.scale), "min_width" in y && n(13, v = y.min_width), "$$scope" in y && n(17, i = y.$$scope);
  }, [
    l,
    o,
    a,
    s,
    u,
    c,
    f,
    h,
    d,
    m,
    g,
    p,
    T,
    v,
    B,
    N,
    _,
    i,
    r
  ];
}
class Yo extends Aa {
  constructor(e) {
    super(), Ma(this, e, Ga, Fa, Da, {
      height: 0,
      width: 1,
      elem_id: 2,
      elem_classes: 3,
      variant: 4,
      border_mode: 5,
      padding: 6,
      type: 16,
      test_id: 7,
      explicit_call: 8,
      container: 9,
      visible: 10,
      allow_overflow: 11,
      scale: 12,
      min_width: 13
    });
  }
}
const {
  SvelteComponent: ja,
  append: Sr,
  attr: An,
  create_component: za,
  destroy_component: Va,
  detach: xa,
  element: ul,
  init: Xa,
  insert: Wa,
  mount_component: Za,
  safe_not_equal: Ja,
  set_data: Ya,
  space: Qa,
  text: Ka,
  toggle_class: ot,
  transition_in: $a,
  transition_out: eu
} = window.__gradio__svelte__internal;
function tu(t) {
  let e, n, r, i, l, o;
  return r = new /*Icon*/
  t[1]({}), {
    c() {
      e = ul("label"), n = ul("span"), za(r.$$.fragment), i = Qa(), l = Ka(
        /*label*/
        t[0]
      ), An(n, "class", "svelte-9gxdi0"), An(e, "for", ""), An(e, "data-testid", "block-label"), An(e, "class", "svelte-9gxdi0"), ot(e, "hide", !/*show_label*/
      t[2]), ot(e, "sr-only", !/*show_label*/
      t[2]), ot(
        e,
        "float",
        /*float*/
        t[4]
      ), ot(
        e,
        "hide-label",
        /*disable*/
        t[3]
      );
    },
    m(a, s) {
      Wa(a, e, s), Sr(e, n), Za(r, n, null), Sr(e, i), Sr(e, l), o = !0;
    },
    p(a, [s]) {
      (!o || s & /*label*/
      1) && Ya(
        l,
        /*label*/
        a[0]
      ), (!o || s & /*show_label*/
      4) && ot(e, "hide", !/*show_label*/
      a[2]), (!o || s & /*show_label*/
      4) && ot(e, "sr-only", !/*show_label*/
      a[2]), (!o || s & /*float*/
      16) && ot(
        e,
        "float",
        /*float*/
        a[4]
      ), (!o || s & /*disable*/
      8) && ot(
        e,
        "hide-label",
        /*disable*/
        a[3]
      );
    },
    i(a) {
      o || ($a(r.$$.fragment, a), o = !0);
    },
    o(a) {
      eu(r.$$.fragment, a), o = !1;
    },
    d(a) {
      a && xa(e), Va(r);
    }
  };
}
function nu(t, e, n) {
  let { label: r = null } = e, { Icon: i } = e, { show_label: l = !0 } = e, { disable: o = !1 } = e, { float: a = !0 } = e;
  return t.$$set = (s) => {
    "label" in s && n(0, r = s.label), "Icon" in s && n(1, i = s.Icon), "show_label" in s && n(2, l = s.show_label), "disable" in s && n(3, o = s.disable), "float" in s && n(4, a = s.float);
  }, [r, i, l, o, a];
}
class Qo extends ja {
  constructor(e) {
    super(), Xa(this, e, nu, tu, Ja, {
      label: 0,
      Icon: 1,
      show_label: 2,
      disable: 3,
      float: 4
    });
  }
}
const {
  SvelteComponent: ru,
  append: vi,
  attr: tt,
  bubble: iu,
  create_component: lu,
  destroy_component: ou,
  detach: Ko,
  element: yi,
  init: su,
  insert: $o,
  listen: au,
  mount_component: uu,
  safe_not_equal: cu,
  set_data: fu,
  set_style: Bn,
  space: _u,
  text: hu,
  toggle_class: Ue,
  transition_in: du,
  transition_out: mu
} = window.__gradio__svelte__internal;
function cl(t) {
  let e, n;
  return {
    c() {
      e = yi("span"), n = hu(
        /*label*/
        t[1]
      ), tt(e, "class", "svelte-lpi64a");
    },
    m(r, i) {
      $o(r, e, i), vi(e, n);
    },
    p(r, i) {
      i & /*label*/
      2 && fu(
        n,
        /*label*/
        r[1]
      );
    },
    d(r) {
      r && Ko(e);
    }
  };
}
function pu(t) {
  let e, n, r, i, l, o, a, s = (
    /*show_label*/
    t[2] && cl(t)
  );
  return i = new /*Icon*/
  t[0]({}), {
    c() {
      e = yi("button"), s && s.c(), n = _u(), r = yi("div"), lu(i.$$.fragment), tt(r, "class", "svelte-lpi64a"), Ue(
        r,
        "small",
        /*size*/
        t[4] === "small"
      ), Ue(
        r,
        "large",
        /*size*/
        t[4] === "large"
      ), e.disabled = /*disabled*/
      t[7], tt(
        e,
        "aria-label",
        /*label*/
        t[1]
      ), tt(
        e,
        "aria-haspopup",
        /*hasPopup*/
        t[8]
      ), tt(
        e,
        "title",
        /*label*/
        t[1]
      ), tt(e, "class", "svelte-lpi64a"), Ue(
        e,
        "pending",
        /*pending*/
        t[3]
      ), Ue(
        e,
        "padded",
        /*padded*/
        t[5]
      ), Ue(
        e,
        "highlight",
        /*highlight*/
        t[6]
      ), Ue(
        e,
        "transparent",
        /*transparent*/
        t[9]
      ), Bn(e, "color", !/*disabled*/
      t[7] && /*_color*/
      t[11] ? (
        /*_color*/
        t[11]
      ) : "var(--block-label-text-color)"), Bn(e, "--bg-color", /*disabled*/
      t[7] ? "auto" : (
        /*background*/
        t[10]
      ));
    },
    m(u, c) {
      $o(u, e, c), s && s.m(e, null), vi(e, n), vi(e, r), uu(i, r, null), l = !0, o || (a = au(
        e,
        "click",
        /*click_handler*/
        t[13]
      ), o = !0);
    },
    p(u, [c]) {
      /*show_label*/
      u[2] ? s ? s.p(u, c) : (s = cl(u), s.c(), s.m(e, n)) : s && (s.d(1), s = null), (!l || c & /*size*/
      16) && Ue(
        r,
        "small",
        /*size*/
        u[4] === "small"
      ), (!l || c & /*size*/
      16) && Ue(
        r,
        "large",
        /*size*/
        u[4] === "large"
      ), (!l || c & /*disabled*/
      128) && (e.disabled = /*disabled*/
      u[7]), (!l || c & /*label*/
      2) && tt(
        e,
        "aria-label",
        /*label*/
        u[1]
      ), (!l || c & /*hasPopup*/
      256) && tt(
        e,
        "aria-haspopup",
        /*hasPopup*/
        u[8]
      ), (!l || c & /*label*/
      2) && tt(
        e,
        "title",
        /*label*/
        u[1]
      ), (!l || c & /*pending*/
      8) && Ue(
        e,
        "pending",
        /*pending*/
        u[3]
      ), (!l || c & /*padded*/
      32) && Ue(
        e,
        "padded",
        /*padded*/
        u[5]
      ), (!l || c & /*highlight*/
      64) && Ue(
        e,
        "highlight",
        /*highlight*/
        u[6]
      ), (!l || c & /*transparent*/
      512) && Ue(
        e,
        "transparent",
        /*transparent*/
        u[9]
      ), c & /*disabled, _color*/
      2176 && Bn(e, "color", !/*disabled*/
      u[7] && /*_color*/
      u[11] ? (
        /*_color*/
        u[11]
      ) : "var(--block-label-text-color)"), c & /*disabled, background*/
      1152 && Bn(e, "--bg-color", /*disabled*/
      u[7] ? "auto" : (
        /*background*/
        u[10]
      ));
    },
    i(u) {
      l || (du(i.$$.fragment, u), l = !0);
    },
    o(u) {
      mu(i.$$.fragment, u), l = !1;
    },
    d(u) {
      u && Ko(e), s && s.d(), ou(i), o = !1, a();
    }
  };
}
function gu(t, e, n) {
  let r, { Icon: i } = e, { label: l = "" } = e, { show_label: o = !1 } = e, { pending: a = !1 } = e, { size: s = "small" } = e, { padded: u = !0 } = e, { highlight: c = !1 } = e, { disabled: f = !1 } = e, { hasPopup: _ = !1 } = e, { color: h = "var(--block-label-text-color)" } = e, { transparent: d = !1 } = e, { background: m = "var(--background-fill-primary)" } = e;
  function g(p) {
    iu.call(this, t, p);
  }
  return t.$$set = (p) => {
    "Icon" in p && n(0, i = p.Icon), "label" in p && n(1, l = p.label), "show_label" in p && n(2, o = p.show_label), "pending" in p && n(3, a = p.pending), "size" in p && n(4, s = p.size), "padded" in p && n(5, u = p.padded), "highlight" in p && n(6, c = p.highlight), "disabled" in p && n(7, f = p.disabled), "hasPopup" in p && n(8, _ = p.hasPopup), "color" in p && n(12, h = p.color), "transparent" in p && n(9, d = p.transparent), "background" in p && n(10, m = p.background);
  }, t.$$.update = () => {
    t.$$.dirty & /*highlight, color*/
    4160 && n(11, r = c ? "var(--color-accent)" : h);
  }, [
    i,
    l,
    o,
    a,
    s,
    u,
    c,
    f,
    _,
    d,
    m,
    r,
    h,
    g
  ];
}
class hn extends ru {
  constructor(e) {
    super(), su(this, e, gu, pu, cu, {
      Icon: 0,
      label: 1,
      show_label: 2,
      pending: 3,
      size: 4,
      padded: 5,
      highlight: 6,
      disabled: 7,
      hasPopup: 8,
      color: 12,
      transparent: 9,
      background: 10
    });
  }
}
const {
  SvelteComponent: bu,
  append: wu,
  attr: Cr,
  binding_callbacks: vu,
  create_slot: yu,
  detach: Eu,
  element: fl,
  get_all_dirty_from_scope: ku,
  get_slot_changes: Su,
  init: Cu,
  insert: Tu,
  safe_not_equal: Au,
  toggle_class: st,
  transition_in: Bu,
  transition_out: Hu,
  update_slot_base: Pu
} = window.__gradio__svelte__internal;
function Nu(t) {
  let e, n, r;
  const i = (
    /*#slots*/
    t[5].default
  ), l = yu(
    i,
    t,
    /*$$scope*/
    t[4],
    null
  );
  return {
    c() {
      e = fl("div"), n = fl("div"), l && l.c(), Cr(n, "class", "icon svelte-3w3rth"), Cr(e, "class", "empty svelte-3w3rth"), Cr(e, "aria-label", "Empty value"), st(
        e,
        "small",
        /*size*/
        t[0] === "small"
      ), st(
        e,
        "large",
        /*size*/
        t[0] === "large"
      ), st(
        e,
        "unpadded_box",
        /*unpadded_box*/
        t[1]
      ), st(
        e,
        "small_parent",
        /*parent_height*/
        t[3]
      );
    },
    m(o, a) {
      Tu(o, e, a), wu(e, n), l && l.m(n, null), t[6](e), r = !0;
    },
    p(o, [a]) {
      l && l.p && (!r || a & /*$$scope*/
      16) && Pu(
        l,
        i,
        o,
        /*$$scope*/
        o[4],
        r ? Su(
          i,
          /*$$scope*/
          o[4],
          a,
          null
        ) : ku(
          /*$$scope*/
          o[4]
        ),
        null
      ), (!r || a & /*size*/
      1) && st(
        e,
        "small",
        /*size*/
        o[0] === "small"
      ), (!r || a & /*size*/
      1) && st(
        e,
        "large",
        /*size*/
        o[0] === "large"
      ), (!r || a & /*unpadded_box*/
      2) && st(
        e,
        "unpadded_box",
        /*unpadded_box*/
        o[1]
      ), (!r || a & /*parent_height*/
      8) && st(
        e,
        "small_parent",
        /*parent_height*/
        o[3]
      );
    },
    i(o) {
      r || (Bu(l, o), r = !0);
    },
    o(o) {
      Hu(l, o), r = !1;
    },
    d(o) {
      o && Eu(e), l && l.d(o), t[6](null);
    }
  };
}
function Iu(t) {
  let e, n = t[0], r = 1;
  for (; r < t.length; ) {
    const i = t[r], l = t[r + 1];
    if (r += 2, (i === "optionalAccess" || i === "optionalCall") && n == null)
      return;
    i === "access" || i === "optionalAccess" ? (e = n, n = l(n)) : (i === "call" || i === "optionalCall") && (n = l((...o) => n.call(e, ...o)), e = void 0);
  }
  return n;
}
function Lu(t, e, n) {
  let r, { $$slots: i = {}, $$scope: l } = e, { size: o = "small" } = e, { unpadded_box: a = !1 } = e, s;
  function u(f) {
    if (!f)
      return !1;
    const { height: _ } = f.getBoundingClientRect(), { height: h } = Iu([
      f,
      "access",
      (d) => d.parentElement,
      "optionalAccess",
      (d) => d.getBoundingClientRect,
      "call",
      (d) => d()
    ]) || { height: _ };
    return _ > h + 2;
  }
  function c(f) {
    vu[f ? "unshift" : "push"](() => {
      s = f, n(2, s);
    });
  }
  return t.$$set = (f) => {
    "size" in f && n(0, o = f.size), "unpadded_box" in f && n(1, a = f.unpadded_box), "$$scope" in f && n(4, l = f.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*el*/
    4 && n(3, r = u(s));
  }, [o, a, s, r, l, i, c];
}
class es extends bu {
  constructor(e) {
    super(), Cu(this, e, Lu, Nu, Au, { size: 0, unpadded_box: 1 });
  }
}
const {
  SvelteComponent: Ou,
  append: _l,
  attr: Ce,
  detach: Mu,
  init: Ru,
  insert: Du,
  noop: Tr,
  safe_not_equal: Uu,
  svg_element: Ar
} = window.__gradio__svelte__internal;
function qu(t) {
  let e, n, r;
  return {
    c() {
      e = Ar("svg"), n = Ar("path"), r = Ar("circle"), Ce(n, "d", "M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"), Ce(r, "cx", "12"), Ce(r, "cy", "13"), Ce(r, "r", "4"), Ce(e, "xmlns", "http://www.w3.org/2000/svg"), Ce(e, "width", "100%"), Ce(e, "height", "100%"), Ce(e, "viewBox", "0 0 24 24"), Ce(e, "fill", "none"), Ce(e, "stroke", "currentColor"), Ce(e, "stroke-width", "1.5"), Ce(e, "stroke-linecap", "round"), Ce(e, "stroke-linejoin", "round"), Ce(e, "class", "feather feather-camera");
    },
    m(i, l) {
      Du(i, e, l), _l(e, n), _l(e, r);
    },
    p: Tr,
    i: Tr,
    o: Tr,
    d(i) {
      i && Mu(e);
    }
  };
}
class Fu extends Ou {
  constructor(e) {
    super(), Ru(this, e, null, qu, Uu, {});
  }
}
const {
  SvelteComponent: Gu,
  append: ju,
  attr: je,
  detach: zu,
  init: Vu,
  insert: xu,
  noop: Br,
  safe_not_equal: Xu,
  svg_element: hl
} = window.__gradio__svelte__internal;
function Wu(t) {
  let e, n;
  return {
    c() {
      e = hl("svg"), n = hl("circle"), je(n, "cx", "12"), je(n, "cy", "12"), je(n, "r", "10"), je(e, "xmlns", "http://www.w3.org/2000/svg"), je(e, "width", "100%"), je(e, "height", "100%"), je(e, "viewBox", "0 0 24 24"), je(e, "stroke-width", "1.5"), je(e, "stroke-linecap", "round"), je(e, "stroke-linejoin", "round"), je(e, "class", "feather feather-circle");
    },
    m(r, i) {
      xu(r, e, i), ju(e, n);
    },
    p: Br,
    i: Br,
    o: Br,
    d(r) {
      r && zu(e);
    }
  };
}
class Zu extends Gu {
  constructor(e) {
    super(), Vu(this, e, null, Wu, Xu, {});
  }
}
const {
  SvelteComponent: Ju,
  append: Hr,
  attr: ze,
  detach: Yu,
  init: Qu,
  insert: Ku,
  noop: Pr,
  safe_not_equal: $u,
  set_style: We,
  svg_element: Hn
} = window.__gradio__svelte__internal;
function ec(t) {
  let e, n, r, i;
  return {
    c() {
      e = Hn("svg"), n = Hn("g"), r = Hn("path"), i = Hn("path"), ze(r, "d", "M18,6L6.087,17.913"), We(r, "fill", "none"), We(r, "fill-rule", "nonzero"), We(r, "stroke-width", "2px"), ze(n, "transform", "matrix(1.14096,-0.140958,-0.140958,1.14096,-0.0559523,0.0559523)"), ze(i, "d", "M4.364,4.364L19.636,19.636"), We(i, "fill", "none"), We(i, "fill-rule", "nonzero"), We(i, "stroke-width", "2px"), ze(e, "width", "100%"), ze(e, "height", "100%"), ze(e, "viewBox", "0 0 24 24"), ze(e, "version", "1.1"), ze(e, "xmlns", "http://www.w3.org/2000/svg"), ze(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), ze(e, "xml:space", "preserve"), ze(e, "stroke", "currentColor"), We(e, "fill-rule", "evenodd"), We(e, "clip-rule", "evenodd"), We(e, "stroke-linecap", "round"), We(e, "stroke-linejoin", "round");
    },
    m(l, o) {
      Ku(l, e, o), Hr(e, n), Hr(n, r), Hr(e, i);
    },
    p: Pr,
    i: Pr,
    o: Pr,
    d(l) {
      l && Yu(e);
    }
  };
}
class tc extends Ju {
  constructor(e) {
    super(), Qu(this, e, null, ec, $u, {});
  }
}
const {
  SvelteComponent: nc,
  append: rc,
  attr: ln,
  detach: ic,
  init: lc,
  insert: oc,
  noop: Nr,
  safe_not_equal: sc,
  svg_element: dl
} = window.__gradio__svelte__internal;
function ac(t) {
  let e, n;
  return {
    c() {
      e = dl("svg"), n = dl("path"), ln(n, "d", "M23,20a5,5,0,0,0-3.89,1.89L11.8,17.32a4.46,4.46,0,0,0,0-2.64l7.31-4.57A5,5,0,1,0,18,7a4.79,4.79,0,0,0,.2,1.32l-7.31,4.57a5,5,0,1,0,0,6.22l7.31,4.57A4.79,4.79,0,0,0,18,25a5,5,0,1,0,5-5ZM23,4a3,3,0,1,1-3,3A3,3,0,0,1,23,4ZM7,19a3,3,0,1,1,3-3A3,3,0,0,1,7,19Zm16,9a3,3,0,1,1,3-3A3,3,0,0,1,23,28Z"), ln(n, "fill", "currentColor"), ln(e, "id", "icon"), ln(e, "xmlns", "http://www.w3.org/2000/svg"), ln(e, "viewBox", "0 0 32 32");
    },
    m(r, i) {
      oc(r, e, i), rc(e, n);
    },
    p: Nr,
    i: Nr,
    o: Nr,
    d(r) {
      r && ic(e);
    }
  };
}
class uc extends nc {
  constructor(e) {
    super(), lc(this, e, null, ac, sc, {});
  }
}
const {
  SvelteComponent: cc,
  append: fc,
  attr: It,
  detach: _c,
  init: hc,
  insert: dc,
  noop: Ir,
  safe_not_equal: mc,
  svg_element: ml
} = window.__gradio__svelte__internal;
function pc(t) {
  let e, n;
  return {
    c() {
      e = ml("svg"), n = ml("path"), It(n, "fill", "currentColor"), It(n, "d", "M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"), It(e, "xmlns", "http://www.w3.org/2000/svg"), It(e, "width", "100%"), It(e, "height", "100%"), It(e, "viewBox", "0 0 32 32");
    },
    m(r, i) {
      dc(r, e, i), fc(e, n);
    },
    p: Ir,
    i: Ir,
    o: Ir,
    d(r) {
      r && _c(e);
    }
  };
}
class gc extends cc {
  constructor(e) {
    super(), hc(this, e, null, pc, mc, {});
  }
}
const {
  SvelteComponent: bc,
  append: wc,
  attr: Lt,
  detach: vc,
  init: yc,
  insert: Ec,
  noop: Lr,
  safe_not_equal: kc,
  svg_element: pl
} = window.__gradio__svelte__internal;
function Sc(t) {
  let e, n;
  return {
    c() {
      e = pl("svg"), n = pl("path"), Lt(n, "d", "M5 8l4 4 4-4z"), Lt(e, "class", "dropdown-arrow svelte-145leq6"), Lt(e, "xmlns", "http://www.w3.org/2000/svg"), Lt(e, "width", "100%"), Lt(e, "height", "100%"), Lt(e, "viewBox", "0 0 18 18");
    },
    m(r, i) {
      Ec(r, e, i), wc(e, n);
    },
    p: Lr,
    i: Lr,
    o: Lr,
    d(r) {
      r && vc(e);
    }
  };
}
class ts extends bc {
  constructor(e) {
    super(), yc(this, e, null, Sc, kc, {});
  }
}
const {
  SvelteComponent: Cc,
  append: Or,
  attr: Ve,
  detach: Tc,
  init: Ac,
  insert: Bc,
  noop: Mr,
  safe_not_equal: Hc,
  svg_element: Pn
} = window.__gradio__svelte__internal;
function Pc(t) {
  let e, n, r, i;
  return {
    c() {
      e = Pn("svg"), n = Pn("g"), r = Pn("path"), i = Pn("path"), Ve(r, "fill", "currentColor"), Ve(r, "d", "m5.505 11.41l.53.53l-.53-.53ZM3 14.952h-.75H3ZM9.048 21v.75V21ZM11.41 5.505l-.53-.53l.53.53Zm1.831 12.34a.75.75 0 0 0 1.06-1.061l-1.06 1.06ZM7.216 9.697a.75.75 0 1 0-1.06 1.061l1.06-1.06Zm10.749 2.362l-5.905 5.905l1.06 1.06l5.905-5.904l-1.06-1.06Zm-11.93-.12l5.905-5.905l-1.06-1.06l-5.905 5.904l1.06 1.06Zm0 6.025c-.85-.85-1.433-1.436-1.812-1.933c-.367-.481-.473-.79-.473-1.08h-1.5c0 .749.312 1.375.78 1.99c.455.596 1.125 1.263 1.945 2.083l1.06-1.06Zm-1.06-7.086c-.82.82-1.49 1.488-1.945 2.084c-.468.614-.78 1.24-.78 1.99h1.5c0-.29.106-.6.473-1.08c.38-.498.962-1.083 1.812-1.933l-1.06-1.06Zm7.085 7.086c-.85.85-1.435 1.433-1.933 1.813c-.48.366-.79.472-1.08.472v1.5c.75 0 1.376-.312 1.99-.78c.596-.455 1.264-1.125 2.084-1.945l-1.06-1.06Zm-7.085 1.06c.82.82 1.487 1.49 2.084 1.945c.614.468 1.24.78 1.989.78v-1.5c-.29 0-.599-.106-1.08-.473c-.497-.38-1.083-.962-1.933-1.812l-1.06 1.06Zm12.99-12.99c.85.85 1.433 1.436 1.813 1.933c.366.481.472.79.472 1.08h1.5c0-.749-.312-1.375-.78-1.99c-.455-.596-1.125-1.263-1.945-2.083l-1.06 1.06Zm1.06 7.086c.82-.82 1.49-1.488 1.945-2.084c.468-.614.78-1.24.78-1.99h-1.5c0 .29-.106.6-.473 1.08c-.38.498-.962 1.083-1.812 1.933l1.06 1.06Zm0-8.146c-.82-.82-1.487-1.49-2.084-1.945c-.614-.468-1.24-.78-1.989-.78v1.5c.29 0 .599.106 1.08.473c.497.38 1.083.962 1.933 1.812l1.06-1.06Zm-7.085 1.06c.85-.85 1.435-1.433 1.933-1.812c.48-.367.79-.473 1.08-.473v-1.5c-.75 0-1.376.312-1.99.78c-.596.455-1.264 1.125-2.084 1.945l1.06 1.06Zm2.362 10.749L7.216 9.698l-1.06 1.061l7.085 7.085l1.06-1.06Z"), Ve(i, "stroke", "currentColor"), Ve(i, "stroke-linecap", "round"), Ve(i, "stroke-width", "1.5"), Ve(i, "d", "M9 21h12"), Ve(n, "fill", "none"), Ve(e, "xmlns", "http://www.w3.org/2000/svg"), Ve(e, "width", "100%"), Ve(e, "height", "100%"), Ve(e, "viewBox", "0 0 24 24");
    },
    m(l, o) {
      Bc(l, e, o), Or(e, n), Or(n, r), Or(n, i);
    },
    p: Mr,
    i: Mr,
    o: Mr,
    d(l) {
      l && Tc(e);
    }
  };
}
class Nc extends Cc {
  constructor(e) {
    super(), Ac(this, e, null, Pc, Hc, {});
  }
}
const {
  SvelteComponent: Ic,
  append: Rr,
  attr: le,
  detach: Lc,
  init: Oc,
  insert: Mc,
  noop: Dr,
  safe_not_equal: Rc,
  svg_element: Nn
} = window.__gradio__svelte__internal;
function Dc(t) {
  let e, n, r, i;
  return {
    c() {
      e = Nn("svg"), n = Nn("rect"), r = Nn("circle"), i = Nn("polyline"), le(n, "x", "3"), le(n, "y", "3"), le(n, "width", "18"), le(n, "height", "18"), le(n, "rx", "2"), le(n, "ry", "2"), le(r, "cx", "8.5"), le(r, "cy", "8.5"), le(r, "r", "1.5"), le(i, "points", "21 15 16 10 5 21"), le(e, "xmlns", "http://www.w3.org/2000/svg"), le(e, "width", "100%"), le(e, "height", "100%"), le(e, "viewBox", "0 0 24 24"), le(e, "fill", "none"), le(e, "stroke", "currentColor"), le(e, "stroke-width", "1.5"), le(e, "stroke-linecap", "round"), le(e, "stroke-linejoin", "round"), le(e, "class", "feather feather-image");
    },
    m(l, o) {
      Mc(l, e, o), Rr(e, n), Rr(e, r), Rr(e, i);
    },
    p: Dr,
    i: Dr,
    o: Dr,
    d(l) {
      l && Lc(e);
    }
  };
}
let lr = class extends Ic {
  constructor(e) {
    super(), Oc(this, e, null, Dc, Rc, {});
  }
};
const {
  SvelteComponent: Uc,
  append: qc,
  attr: Ot,
  detach: Fc,
  init: Gc,
  insert: jc,
  noop: Ur,
  safe_not_equal: zc,
  svg_element: gl
} = window.__gradio__svelte__internal;
function Vc(t) {
  let e, n;
  return {
    c() {
      e = gl("svg"), n = gl("path"), Ot(n, "fill", "currentColor"), Ot(n, "d", "M13.75 2a2.25 2.25 0 0 1 2.236 2.002V4h1.764A2.25 2.25 0 0 1 20 6.25V11h-1.5V6.25a.75.75 0 0 0-.75-.75h-2.129c-.404.603-1.091 1-1.871 1h-3.5c-.78 0-1.467-.397-1.871-1H6.25a.75.75 0 0 0-.75.75v13.5c0 .414.336.75.75.75h4.78a3.99 3.99 0 0 0 .505 1.5H6.25A2.25 2.25 0 0 1 4 19.75V6.25A2.25 2.25 0 0 1 6.25 4h1.764a2.25 2.25 0 0 1 2.236-2h3.5Zm2.245 2.096L16 4.25c0-.052-.002-.103-.005-.154ZM13.75 3.5h-3.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5ZM15 12a3 3 0 0 0-3 3v5c0 .556.151 1.077.415 1.524l3.494-3.494a2.25 2.25 0 0 1 3.182 0l3.494 3.494c.264-.447.415-.968.415-1.524v-5a3 3 0 0 0-3-3h-5Zm0 11a2.985 2.985 0 0 1-1.524-.415l3.494-3.494a.75.75 0 0 1 1.06 0l3.494 3.494A2.985 2.985 0 0 1 20 23h-5Zm5-7a1 1 0 1 1 0-2a1 1 0 0 1 0 2Z"), Ot(e, "xmlns", "http://www.w3.org/2000/svg"), Ot(e, "width", "100%"), Ot(e, "height", "100%"), Ot(e, "viewBox", "0 0 24 24");
    },
    m(r, i) {
      jc(r, e, i), qc(e, n);
    },
    p: Ur,
    i: Ur,
    o: Ur,
    d(r) {
      r && Fc(e);
    }
  };
}
class ns extends Uc {
  constructor(e) {
    super(), Gc(this, e, null, Vc, zc, {});
  }
}
const {
  SvelteComponent: xc,
  append: In,
  attr: oe,
  detach: Xc,
  init: Wc,
  insert: Zc,
  noop: qr,
  safe_not_equal: Jc,
  svg_element: on
} = window.__gradio__svelte__internal;
function Yc(t) {
  let e, n, r, i, l;
  return {
    c() {
      e = on("svg"), n = on("path"), r = on("path"), i = on("line"), l = on("line"), oe(n, "d", "M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"), oe(r, "d", "M19 10v2a7 7 0 0 1-14 0v-2"), oe(i, "x1", "12"), oe(i, "y1", "19"), oe(i, "x2", "12"), oe(i, "y2", "23"), oe(l, "x1", "8"), oe(l, "y1", "23"), oe(l, "x2", "16"), oe(l, "y2", "23"), oe(e, "xmlns", "http://www.w3.org/2000/svg"), oe(e, "width", "100%"), oe(e, "height", "100%"), oe(e, "viewBox", "0 0 24 24"), oe(e, "fill", "none"), oe(e, "stroke", "currentColor"), oe(e, "stroke-width", "2"), oe(e, "stroke-linecap", "round"), oe(e, "stroke-linejoin", "round"), oe(e, "class", "feather feather-mic");
    },
    m(o, a) {
      Zc(o, e, a), In(e, n), In(e, r), In(e, i), In(e, l);
    },
    p: qr,
    i: qr,
    o: qr,
    d(o) {
      o && Xc(e);
    }
  };
}
class Qc extends xc {
  constructor(e) {
    super(), Wc(this, e, null, Yc, Jc, {});
  }
}
const {
  SvelteComponent: Kc,
  append: $c,
  attr: Te,
  detach: ef,
  init: tf,
  insert: nf,
  noop: Fr,
  safe_not_equal: rf,
  svg_element: bl
} = window.__gradio__svelte__internal;
function lf(t) {
  let e, n;
  return {
    c() {
      e = bl("svg"), n = bl("rect"), Te(n, "x", "3"), Te(n, "y", "3"), Te(n, "width", "18"), Te(n, "height", "18"), Te(n, "rx", "2"), Te(n, "ry", "2"), Te(e, "xmlns", "http://www.w3.org/2000/svg"), Te(e, "width", "100%"), Te(e, "height", "100%"), Te(e, "viewBox", "0 0 24 24"), Te(e, "stroke-width", "1.5"), Te(e, "stroke-linecap", "round"), Te(e, "stroke-linejoin", "round"), Te(e, "class", "feather feather-square");
    },
    m(r, i) {
      nf(r, e, i), $c(e, n);
    },
    p: Fr,
    i: Fr,
    o: Fr,
    d(r) {
      r && ef(e);
    }
  };
}
class of extends Kc {
  constructor(e) {
    super(), tf(this, e, null, lf, rf, {});
  }
}
const {
  SvelteComponent: sf,
  append: wl,
  attr: qe,
  detach: af,
  init: uf,
  insert: cf,
  noop: Gr,
  safe_not_equal: ff,
  svg_element: jr
} = window.__gradio__svelte__internal;
function _f(t) {
  let e, n, r;
  return {
    c() {
      e = jr("svg"), n = jr("polyline"), r = jr("path"), qe(n, "points", "1 4 1 10 7 10"), qe(r, "d", "M3.51 15a9 9 0 1 0 2.13-9.36L1 10"), qe(e, "xmlns", "http://www.w3.org/2000/svg"), qe(e, "width", "100%"), qe(e, "height", "100%"), qe(e, "viewBox", "0 0 24 24"), qe(e, "fill", "none"), qe(e, "stroke", "currentColor"), qe(e, "stroke-width", "2"), qe(e, "stroke-linecap", "round"), qe(e, "stroke-linejoin", "round"), qe(e, "class", "feather feather-rotate-ccw");
    },
    m(i, l) {
      cf(i, e, l), wl(e, n), wl(e, r);
    },
    p: Gr,
    i: Gr,
    o: Gr,
    d(i) {
      i && af(e);
    }
  };
}
class hf extends sf {
  constructor(e) {
    super(), uf(this, e, null, _f, ff, {});
  }
}
const {
  SvelteComponent: df,
  append: zr,
  attr: pe,
  detach: mf,
  init: pf,
  insert: gf,
  noop: Vr,
  safe_not_equal: bf,
  svg_element: Ln
} = window.__gradio__svelte__internal;
function wf(t) {
  let e, n, r, i;
  return {
    c() {
      e = Ln("svg"), n = Ln("path"), r = Ln("polyline"), i = Ln("line"), pe(n, "d", "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"), pe(r, "points", "17 8 12 3 7 8"), pe(i, "x1", "12"), pe(i, "y1", "3"), pe(i, "x2", "12"), pe(i, "y2", "15"), pe(e, "xmlns", "http://www.w3.org/2000/svg"), pe(e, "width", "90%"), pe(e, "height", "90%"), pe(e, "viewBox", "0 0 24 24"), pe(e, "fill", "none"), pe(e, "stroke", "currentColor"), pe(e, "stroke-width", "2"), pe(e, "stroke-linecap", "round"), pe(e, "stroke-linejoin", "round"), pe(e, "class", "feather feather-upload");
    },
    m(l, o) {
      gf(l, e, o), zr(e, n), zr(e, r), zr(e, i);
    },
    p: Vr,
    i: Vr,
    o: Vr,
    d(l) {
      l && mf(e);
    }
  };
}
let rs = class extends df {
  constructor(e) {
    super(), pf(this, e, null, wf, bf, {});
  }
};
const {
  SvelteComponent: vf,
  append: vl,
  attr: at,
  detach: yf,
  init: Ef,
  insert: kf,
  noop: xr,
  safe_not_equal: Sf,
  svg_element: Xr
} = window.__gradio__svelte__internal;
function Cf(t) {
  let e, n, r;
  return {
    c() {
      e = Xr("svg"), n = Xr("path"), r = Xr("path"), at(n, "fill", "currentColor"), at(n, "d", "M12 2c-4.963 0-9 4.038-9 9c0 3.328 1.82 6.232 4.513 7.79l-2.067 1.378A1 1 0 0 0 6 22h12a1 1 0 0 0 .555-1.832l-2.067-1.378C19.18 17.232 21 14.328 21 11c0-4.962-4.037-9-9-9zm0 16c-3.859 0-7-3.141-7-7c0-3.86 3.141-7 7-7s7 3.14 7 7c0 3.859-3.141 7-7 7z"), at(r, "fill", "currentColor"), at(r, "d", "M12 6c-2.757 0-5 2.243-5 5s2.243 5 5 5s5-2.243 5-5s-2.243-5-5-5zm0 8c-1.654 0-3-1.346-3-3s1.346-3 3-3s3 1.346 3 3s-1.346 3-3 3z"), at(e, "xmlns", "http://www.w3.org/2000/svg"), at(e, "width", "100%"), at(e, "height", "100%"), at(e, "viewBox", "0 0 24 24");
    },
    m(i, l) {
      kf(i, e, l), vl(e, n), vl(e, r);
    },
    p: xr,
    i: xr,
    o: xr,
    d(i) {
      i && yf(e);
    }
  };
}
let is = class extends vf {
  constructor(e) {
    super(), Ef(this, e, null, Cf, Sf, {});
  }
};
const {
  SvelteComponent: Tf,
  create_component: Af,
  destroy_component: Bf,
  init: Hf,
  mount_component: Pf,
  safe_not_equal: Nf,
  transition_in: If,
  transition_out: Lf
} = window.__gradio__svelte__internal, { createEventDispatcher: Of } = window.__gradio__svelte__internal;
function Mf(t) {
  let e, n;
  return e = new hn({
    props: {
      Icon: uc,
      label: (
        /*i18n*/
        t[2]("common.share")
      ),
      pending: (
        /*pending*/
        t[3]
      )
    }
  }), e.$on(
    "click",
    /*click_handler*/
    t[5]
  ), {
    c() {
      Af(e.$$.fragment);
    },
    m(r, i) {
      Pf(e, r, i), n = !0;
    },
    p(r, [i]) {
      const l = {};
      i & /*i18n*/
      4 && (l.label = /*i18n*/
      r[2]("common.share")), i & /*pending*/
      8 && (l.pending = /*pending*/
      r[3]), e.$set(l);
    },
    i(r) {
      n || (If(e.$$.fragment, r), n = !0);
    },
    o(r) {
      Lf(e.$$.fragment, r), n = !1;
    },
    d(r) {
      Bf(e, r);
    }
  };
}
function Rf(t, e, n) {
  const r = Of();
  let { formatter: i } = e, { value: l } = e, { i18n: o } = e, a = !1;
  const s = async () => {
    try {
      n(3, a = !0);
      const u = await i(l);
      r("share", { description: u });
    } catch (u) {
      console.error(u);
      let c = u instanceof Fn ? u.message : "Share failed.";
      r("error", c);
    } finally {
      n(3, a = !1);
    }
  };
  return t.$$set = (u) => {
    "formatter" in u && n(0, i = u.formatter), "value" in u && n(1, l = u.value), "i18n" in u && n(2, o = u.i18n);
  }, [i, l, o, a, r, s];
}
class Df extends Tf {
  constructor(e) {
    super(), Hf(this, e, Rf, Mf, Nf, { formatter: 0, value: 1, i18n: 2 });
  }
}
const {
  SvelteComponent: Uf,
  append: Et,
  attr: Ei,
  check_outros: qf,
  create_component: ls,
  destroy_component: os,
  detach: Gn,
  element: ki,
  group_outros: Ff,
  init: Gf,
  insert: jn,
  mount_component: ss,
  safe_not_equal: jf,
  set_data: Si,
  space: Ci,
  text: an,
  toggle_class: yl,
  transition_in: Zn,
  transition_out: Jn
} = window.__gradio__svelte__internal;
function zf(t) {
  let e, n;
  return e = new rs({}), {
    c() {
      ls(e.$$.fragment);
    },
    m(r, i) {
      ss(e, r, i), n = !0;
    },
    i(r) {
      n || (Zn(e.$$.fragment, r), n = !0);
    },
    o(r) {
      Jn(e.$$.fragment, r), n = !1;
    },
    d(r) {
      os(e, r);
    }
  };
}
function Vf(t) {
  let e, n;
  return e = new ns({}), {
    c() {
      ls(e.$$.fragment);
    },
    m(r, i) {
      ss(e, r, i), n = !0;
    },
    i(r) {
      n || (Zn(e.$$.fragment, r), n = !0);
    },
    o(r) {
      Jn(e.$$.fragment, r), n = !1;
    },
    d(r) {
      os(e, r);
    }
  };
}
function El(t) {
  let e, n, r = (
    /*i18n*/
    t[1]("common.or") + ""
  ), i, l, o, a = (
    /*message*/
    (t[2] || /*i18n*/
    t[1]("upload_text.click_to_upload")) + ""
  ), s;
  return {
    c() {
      e = ki("span"), n = an("- "), i = an(r), l = an(" -"), o = Ci(), s = an(a), Ei(e, "class", "or svelte-kzcjhc");
    },
    m(u, c) {
      jn(u, e, c), Et(e, n), Et(e, i), Et(e, l), jn(u, o, c), jn(u, s, c);
    },
    p(u, c) {
      c & /*i18n*/
      2 && r !== (r = /*i18n*/
      u[1]("common.or") + "") && Si(i, r), c & /*message, i18n*/
      6 && a !== (a = /*message*/
      (u[2] || /*i18n*/
      u[1]("upload_text.click_to_upload")) + "") && Si(s, a);
    },
    d(u) {
      u && (Gn(e), Gn(o), Gn(s));
    }
  };
}
function xf(t) {
  let e, n, r, i, l, o = (
    /*i18n*/
    t[1](
      /*defs*/
      t[5][
        /*type*/
        t[0]
      ] || /*defs*/
      t[5].file
    ) + ""
  ), a, s, u;
  const c = [Vf, zf], f = [];
  function _(d, m) {
    return (
      /*type*/
      d[0] === "clipboard" ? 0 : 1
    );
  }
  r = _(t), i = f[r] = c[r](t);
  let h = (
    /*mode*/
    t[3] !== "short" && El(t)
  );
  return {
    c() {
      e = ki("div"), n = ki("span"), i.c(), l = Ci(), a = an(o), s = Ci(), h && h.c(), Ei(n, "class", "icon-wrap svelte-kzcjhc"), yl(
        n,
        "hovered",
        /*hovered*/
        t[4]
      ), Ei(e, "class", "wrap svelte-kzcjhc");
    },
    m(d, m) {
      jn(d, e, m), Et(e, n), f[r].m(n, null), Et(e, l), Et(e, a), Et(e, s), h && h.m(e, null), u = !0;
    },
    p(d, [m]) {
      let g = r;
      r = _(d), r !== g && (Ff(), Jn(f[g], 1, 1, () => {
        f[g] = null;
      }), qf(), i = f[r], i || (i = f[r] = c[r](d), i.c()), Zn(i, 1), i.m(n, null)), (!u || m & /*hovered*/
      16) && yl(
        n,
        "hovered",
        /*hovered*/
        d[4]
      ), (!u || m & /*i18n, type*/
      3) && o !== (o = /*i18n*/
      d[1](
        /*defs*/
        d[5][
          /*type*/
          d[0]
        ] || /*defs*/
        d[5].file
      ) + "") && Si(a, o), /*mode*/
      d[3] !== "short" ? h ? h.p(d, m) : (h = El(d), h.c(), h.m(e, null)) : h && (h.d(1), h = null);
    },
    i(d) {
      u || (Zn(i), u = !0);
    },
    o(d) {
      Jn(i), u = !1;
    },
    d(d) {
      d && Gn(e), f[r].d(), h && h.d();
    }
  };
}
function Xf(t, e, n) {
  let { type: r = "file" } = e, { i18n: i } = e, { message: l = void 0 } = e, { mode: o = "full" } = e, { hovered: a = !1 } = e;
  const s = {
    image: "upload_text.drop_image",
    video: "upload_text.drop_video",
    audio: "upload_text.drop_audio",
    file: "upload_text.drop_file",
    csv: "upload_text.drop_csv",
    gallery: "upload_text.drop_gallery",
    clipboard: "upload_text.paste_clipboard"
  };
  return t.$$set = (u) => {
    "type" in u && n(0, r = u.type), "i18n" in u && n(1, i = u.i18n), "message" in u && n(2, l = u.message), "mode" in u && n(3, o = u.mode), "hovered" in u && n(4, a = u.hovered);
  }, [r, i, l, o, a, s];
}
class as extends Uf {
  constructor(e) {
    super(), Gf(this, e, Xf, xf, jf, {
      type: 0,
      i18n: 1,
      message: 2,
      mode: 3,
      hovered: 4
    });
  }
}
const {
  SvelteComponent: Wf,
  append: Wr,
  attr: Qe,
  check_outros: un,
  create_component: or,
  destroy_component: sr,
  detach: Jt,
  element: En,
  empty: Zf,
  group_outros: cn,
  init: Jf,
  insert: Yt,
  listen: ar,
  mount_component: ur,
  safe_not_equal: Yf,
  space: Zr,
  toggle_class: dt,
  transition_in: ce,
  transition_out: Ae
} = window.__gradio__svelte__internal;
function kl(t) {
  let e, n = (
    /*sources*/
    t[1].includes("upload")
  ), r, i = (
    /*sources*/
    t[1].includes("microphone")
  ), l, o = (
    /*sources*/
    t[1].includes("webcam")
  ), a, s = (
    /*sources*/
    t[1].includes("clipboard")
  ), u, c = n && Sl(t), f = i && Cl(t), _ = o && Tl(t), h = s && Al(t);
  return {
    c() {
      e = En("span"), c && c.c(), r = Zr(), f && f.c(), l = Zr(), _ && _.c(), a = Zr(), h && h.c(), Qe(e, "class", "source-selection svelte-1jp3vgd"), Qe(e, "data-testid", "source-select");
    },
    m(d, m) {
      Yt(d, e, m), c && c.m(e, null), Wr(e, r), f && f.m(e, null), Wr(e, l), _ && _.m(e, null), Wr(e, a), h && h.m(e, null), u = !0;
    },
    p(d, m) {
      m & /*sources*/
      2 && (n = /*sources*/
      d[1].includes("upload")), n ? c ? (c.p(d, m), m & /*sources*/
      2 && ce(c, 1)) : (c = Sl(d), c.c(), ce(c, 1), c.m(e, r)) : c && (cn(), Ae(c, 1, 1, () => {
        c = null;
      }), un()), m & /*sources*/
      2 && (i = /*sources*/
      d[1].includes("microphone")), i ? f ? (f.p(d, m), m & /*sources*/
      2 && ce(f, 1)) : (f = Cl(d), f.c(), ce(f, 1), f.m(e, l)) : f && (cn(), Ae(f, 1, 1, () => {
        f = null;
      }), un()), m & /*sources*/
      2 && (o = /*sources*/
      d[1].includes("webcam")), o ? _ ? (_.p(d, m), m & /*sources*/
      2 && ce(_, 1)) : (_ = Tl(d), _.c(), ce(_, 1), _.m(e, a)) : _ && (cn(), Ae(_, 1, 1, () => {
        _ = null;
      }), un()), m & /*sources*/
      2 && (s = /*sources*/
      d[1].includes("clipboard")), s ? h ? (h.p(d, m), m & /*sources*/
      2 && ce(h, 1)) : (h = Al(d), h.c(), ce(h, 1), h.m(e, null)) : h && (cn(), Ae(h, 1, 1, () => {
        h = null;
      }), un());
    },
    i(d) {
      u || (ce(c), ce(f), ce(_), ce(h), u = !0);
    },
    o(d) {
      Ae(c), Ae(f), Ae(_), Ae(h), u = !1;
    },
    d(d) {
      d && Jt(e), c && c.d(), f && f.d(), _ && _.d(), h && h.d();
    }
  };
}
function Sl(t) {
  let e, n, r, i, l;
  return n = new rs({}), {
    c() {
      e = En("button"), or(n.$$.fragment), Qe(e, "class", "icon svelte-1jp3vgd"), Qe(e, "aria-label", "Upload file"), dt(
        e,
        "selected",
        /*active_source*/
        t[0] === "upload" || !/*active_source*/
        t[0]
      );
    },
    m(o, a) {
      Yt(o, e, a), ur(n, e, null), r = !0, i || (l = ar(
        e,
        "click",
        /*click_handler*/
        t[6]
      ), i = !0);
    },
    p(o, a) {
      (!r || a & /*active_source*/
      1) && dt(
        e,
        "selected",
        /*active_source*/
        o[0] === "upload" || !/*active_source*/
        o[0]
      );
    },
    i(o) {
      r || (ce(n.$$.fragment, o), r = !0);
    },
    o(o) {
      Ae(n.$$.fragment, o), r = !1;
    },
    d(o) {
      o && Jt(e), sr(n), i = !1, l();
    }
  };
}
function Cl(t) {
  let e, n, r, i, l;
  return n = new Qc({}), {
    c() {
      e = En("button"), or(n.$$.fragment), Qe(e, "class", "icon svelte-1jp3vgd"), Qe(e, "aria-label", "Record audio"), dt(
        e,
        "selected",
        /*active_source*/
        t[0] === "microphone"
      );
    },
    m(o, a) {
      Yt(o, e, a), ur(n, e, null), r = !0, i || (l = ar(
        e,
        "click",
        /*click_handler_1*/
        t[7]
      ), i = !0);
    },
    p(o, a) {
      (!r || a & /*active_source*/
      1) && dt(
        e,
        "selected",
        /*active_source*/
        o[0] === "microphone"
      );
    },
    i(o) {
      r || (ce(n.$$.fragment, o), r = !0);
    },
    o(o) {
      Ae(n.$$.fragment, o), r = !1;
    },
    d(o) {
      o && Jt(e), sr(n), i = !1, l();
    }
  };
}
function Tl(t) {
  let e, n, r, i, l;
  return n = new is({}), {
    c() {
      e = En("button"), or(n.$$.fragment), Qe(e, "class", "icon svelte-1jp3vgd"), Qe(e, "aria-label", "Capture from camera"), dt(
        e,
        "selected",
        /*active_source*/
        t[0] === "webcam"
      );
    },
    m(o, a) {
      Yt(o, e, a), ur(n, e, null), r = !0, i || (l = ar(
        e,
        "click",
        /*click_handler_2*/
        t[8]
      ), i = !0);
    },
    p(o, a) {
      (!r || a & /*active_source*/
      1) && dt(
        e,
        "selected",
        /*active_source*/
        o[0] === "webcam"
      );
    },
    i(o) {
      r || (ce(n.$$.fragment, o), r = !0);
    },
    o(o) {
      Ae(n.$$.fragment, o), r = !1;
    },
    d(o) {
      o && Jt(e), sr(n), i = !1, l();
    }
  };
}
function Al(t) {
  let e, n, r, i, l;
  return n = new ns({}), {
    c() {
      e = En("button"), or(n.$$.fragment), Qe(e, "class", "icon svelte-1jp3vgd"), Qe(e, "aria-label", "Paste from clipboard"), dt(
        e,
        "selected",
        /*active_source*/
        t[0] === "clipboard"
      );
    },
    m(o, a) {
      Yt(o, e, a), ur(n, e, null), r = !0, i || (l = ar(
        e,
        "click",
        /*click_handler_3*/
        t[9]
      ), i = !0);
    },
    p(o, a) {
      (!r || a & /*active_source*/
      1) && dt(
        e,
        "selected",
        /*active_source*/
        o[0] === "clipboard"
      );
    },
    i(o) {
      r || (ce(n.$$.fragment, o), r = !0);
    },
    o(o) {
      Ae(n.$$.fragment, o), r = !1;
    },
    d(o) {
      o && Jt(e), sr(n), i = !1, l();
    }
  };
}
function Qf(t) {
  let e, n, r = (
    /*unique_sources*/
    t[2].length > 1 && kl(t)
  );
  return {
    c() {
      r && r.c(), e = Zf();
    },
    m(i, l) {
      r && r.m(i, l), Yt(i, e, l), n = !0;
    },
    p(i, [l]) {
      /*unique_sources*/
      i[2].length > 1 ? r ? (r.p(i, l), l & /*unique_sources*/
      4 && ce(r, 1)) : (r = kl(i), r.c(), ce(r, 1), r.m(e.parentNode, e)) : r && (cn(), Ae(r, 1, 1, () => {
        r = null;
      }), un());
    },
    i(i) {
      n || (ce(r), n = !0);
    },
    o(i) {
      Ae(r), n = !1;
    },
    d(i) {
      i && Jt(e), r && r.d(i);
    }
  };
}
function Kf(t, e, n) {
  let r, { sources: i } = e, { active_source: l } = e, { handle_clear: o = () => {
  } } = e, { handle_select: a = () => {
  } } = e;
  async function s(h) {
    o(), n(0, l = h), a(h);
  }
  const u = () => s("upload"), c = () => s("microphone"), f = () => s("webcam"), _ = () => s("clipboard");
  return t.$$set = (h) => {
    "sources" in h && n(1, i = h.sources), "active_source" in h && n(0, l = h.active_source), "handle_clear" in h && n(4, o = h.handle_clear), "handle_select" in h && n(5, a = h.handle_select);
  }, t.$$.update = () => {
    t.$$.dirty & /*sources*/
    2 && n(2, r = [...new Set(i)]);
  }, [
    l,
    i,
    r,
    s,
    o,
    a,
    u,
    c,
    f,
    _
  ];
}
class $f extends Wf {
  constructor(e) {
    super(), Jf(this, e, Kf, Qf, Yf, {
      sources: 1,
      active_source: 0,
      handle_clear: 4,
      handle_select: 5
    });
  }
}
const us = (t) => {
  let e;
  if (t.currentTarget instanceof Element)
    e = t.currentTarget.querySelector("img");
  else
    return [NaN, NaN];
  const n = e.getBoundingClientRect(), r = e.naturalWidth / n.width, i = e.naturalHeight / n.height;
  if (r > i) {
    const a = e.naturalHeight / r, s = (n.height - a) / 2;
    var l = Math.round((t.clientX - n.left) * r), o = Math.round((t.clientY - n.top - s) * r);
  } else {
    const a = e.naturalWidth / i, s = (n.width - a) / 2;
    var l = Math.round((t.clientX - n.left - s) * i), o = Math.round((t.clientY - n.top) * i);
  }
  return l < 0 || l >= e.naturalWidth || o < 0 || o >= e.naturalHeight ? null : [l, o];
}, { setContext: bp, getContext: e_ } = window.__gradio__svelte__internal, t_ = "WORKER_PROXY_CONTEXT_KEY";
function cs() {
  return e_(t_);
}
function n_(t) {
  return t.host === window.location.host || t.host === "localhost:7860" || t.host === "127.0.0.1:7860" || // Ref: https://github.com/gradio-app/gradio/blob/v3.32.0/js/app/src/Index.svelte#L194
  t.host === "lite.local";
}
function fs(t, e) {
  const n = e.toLowerCase();
  for (const [r, i] of Object.entries(t))
    if (r.toLowerCase() === n)
      return i;
}
function _s(t) {
  if (t == null)
    return !1;
  const e = new URL(t);
  return !(!n_(e) || e.protocol !== "http:" && e.protocol !== "https:");
}
async function r_(t) {
  if (t == null || !_s(t))
    return t;
  const e = cs();
  if (e == null)
    return t;
  const r = new URL(t).pathname;
  return e.httpRequest({
    method: "GET",
    path: r,
    headers: {},
    query_string: ""
  }).then((i) => {
    if (i.status !== 200)
      throw new Error(`Failed to get file ${r} from the Wasm worker.`);
    const l = new Blob([i.body], {
      type: fs(i.headers, "content-type")
    });
    return URL.createObjectURL(l);
  });
}
const {
  SvelteComponent: i_,
  assign: Yn,
  check_outros: hs,
  compute_rest_props: Bl,
  create_slot: Ji,
  detach: cr,
  element: ds,
  empty: ms,
  exclude_internal_props: l_,
  get_all_dirty_from_scope: Yi,
  get_slot_changes: Qi,
  get_spread_update: ps,
  group_outros: gs,
  init: o_,
  insert: fr,
  listen: bs,
  prevent_default: s_,
  safe_not_equal: a_,
  set_attributes: Qn,
  transition_in: Ct,
  transition_out: Tt,
  update_slot_base: Ki
} = window.__gradio__svelte__internal, { createEventDispatcher: u_ } = window.__gradio__svelte__internal;
function c_(t) {
  let e, n, r, i, l;
  const o = (
    /*#slots*/
    t[8].default
  ), a = Ji(
    o,
    t,
    /*$$scope*/
    t[7],
    null
  );
  let s = [
    { href: (
      /*href*/
      t[0]
    ) },
    {
      target: n = typeof window < "u" && window.__is_colab__ ? "_blank" : null
    },
    { rel: "noopener noreferrer" },
    { download: (
      /*download*/
      t[1]
    ) },
    /*$$restProps*/
    t[6]
  ], u = {};
  for (let c = 0; c < s.length; c += 1)
    u = Yn(u, s[c]);
  return {
    c() {
      e = ds("a"), a && a.c(), Qn(e, u);
    },
    m(c, f) {
      fr(c, e, f), a && a.m(e, null), r = !0, i || (l = bs(
        e,
        "click",
        /*dispatch*/
        t[3].bind(null, "click")
      ), i = !0);
    },
    p(c, f) {
      a && a.p && (!r || f & /*$$scope*/
      128) && Ki(
        a,
        o,
        c,
        /*$$scope*/
        c[7],
        r ? Qi(
          o,
          /*$$scope*/
          c[7],
          f,
          null
        ) : Yi(
          /*$$scope*/
          c[7]
        ),
        null
      ), Qn(e, u = ps(s, [
        (!r || f & /*href*/
        1) && { href: (
          /*href*/
          c[0]
        ) },
        { target: n },
        { rel: "noopener noreferrer" },
        (!r || f & /*download*/
        2) && { download: (
          /*download*/
          c[1]
        ) },
        f & /*$$restProps*/
        64 && /*$$restProps*/
        c[6]
      ]));
    },
    i(c) {
      r || (Ct(a, c), r = !0);
    },
    o(c) {
      Tt(a, c), r = !1;
    },
    d(c) {
      c && cr(e), a && a.d(c), i = !1, l();
    }
  };
}
function f_(t) {
  let e, n, r, i;
  const l = [h_, __], o = [];
  function a(s, u) {
    return (
      /*is_downloading*/
      s[2] ? 0 : 1
    );
  }
  return e = a(t), n = o[e] = l[e](t), {
    c() {
      n.c(), r = ms();
    },
    m(s, u) {
      o[e].m(s, u), fr(s, r, u), i = !0;
    },
    p(s, u) {
      let c = e;
      e = a(s), e === c ? o[e].p(s, u) : (gs(), Tt(o[c], 1, 1, () => {
        o[c] = null;
      }), hs(), n = o[e], n ? n.p(s, u) : (n = o[e] = l[e](s), n.c()), Ct(n, 1), n.m(r.parentNode, r));
    },
    i(s) {
      i || (Ct(n), i = !0);
    },
    o(s) {
      Tt(n), i = !1;
    },
    d(s) {
      s && cr(r), o[e].d(s);
    }
  };
}
function __(t) {
  let e, n, r, i;
  const l = (
    /*#slots*/
    t[8].default
  ), o = Ji(
    l,
    t,
    /*$$scope*/
    t[7],
    null
  );
  let a = [
    /*$$restProps*/
    t[6],
    { href: (
      /*href*/
      t[0]
    ) }
  ], s = {};
  for (let u = 0; u < a.length; u += 1)
    s = Yn(s, a[u]);
  return {
    c() {
      e = ds("a"), o && o.c(), Qn(e, s);
    },
    m(u, c) {
      fr(u, e, c), o && o.m(e, null), n = !0, r || (i = bs(e, "click", s_(
        /*wasm_click_handler*/
        t[5]
      )), r = !0);
    },
    p(u, c) {
      o && o.p && (!n || c & /*$$scope*/
      128) && Ki(
        o,
        l,
        u,
        /*$$scope*/
        u[7],
        n ? Qi(
          l,
          /*$$scope*/
          u[7],
          c,
          null
        ) : Yi(
          /*$$scope*/
          u[7]
        ),
        null
      ), Qn(e, s = ps(a, [
        c & /*$$restProps*/
        64 && /*$$restProps*/
        u[6],
        (!n || c & /*href*/
        1) && { href: (
          /*href*/
          u[0]
        ) }
      ]));
    },
    i(u) {
      n || (Ct(o, u), n = !0);
    },
    o(u) {
      Tt(o, u), n = !1;
    },
    d(u) {
      u && cr(e), o && o.d(u), r = !1, i();
    }
  };
}
function h_(t) {
  let e;
  const n = (
    /*#slots*/
    t[8].default
  ), r = Ji(
    n,
    t,
    /*$$scope*/
    t[7],
    null
  );
  return {
    c() {
      r && r.c();
    },
    m(i, l) {
      r && r.m(i, l), e = !0;
    },
    p(i, l) {
      r && r.p && (!e || l & /*$$scope*/
      128) && Ki(
        r,
        n,
        i,
        /*$$scope*/
        i[7],
        e ? Qi(
          n,
          /*$$scope*/
          i[7],
          l,
          null
        ) : Yi(
          /*$$scope*/
          i[7]
        ),
        null
      );
    },
    i(i) {
      e || (Ct(r, i), e = !0);
    },
    o(i) {
      Tt(r, i), e = !1;
    },
    d(i) {
      r && r.d(i);
    }
  };
}
function d_(t) {
  let e, n, r, i, l;
  const o = [f_, c_], a = [];
  function s(u, c) {
    return c & /*href*/
    1 && (e = null), e == null && (e = !!/*worker_proxy*/
    (u[4] && _s(
      /*href*/
      u[0]
    ))), e ? 0 : 1;
  }
  return n = s(t, -1), r = a[n] = o[n](t), {
    c() {
      r.c(), i = ms();
    },
    m(u, c) {
      a[n].m(u, c), fr(u, i, c), l = !0;
    },
    p(u, [c]) {
      let f = n;
      n = s(u, c), n === f ? a[n].p(u, c) : (gs(), Tt(a[f], 1, 1, () => {
        a[f] = null;
      }), hs(), r = a[n], r ? r.p(u, c) : (r = a[n] = o[n](u), r.c()), Ct(r, 1), r.m(i.parentNode, i));
    },
    i(u) {
      l || (Ct(r), l = !0);
    },
    o(u) {
      Tt(r), l = !1;
    },
    d(u) {
      u && cr(i), a[n].d(u);
    }
  };
}
function m_(t, e, n) {
  const r = ["href", "download"];
  let i = Bl(e, r), { $$slots: l = {}, $$scope: o } = e, { href: a = void 0 } = e, { download: s } = e;
  const u = u_();
  let c = !1;
  const f = cs();
  async function _() {
    if (c)
      return;
    if (u("click"), a == null)
      throw new Error("href is not defined.");
    if (f == null)
      throw new Error("Wasm worker proxy is not available.");
    const d = new URL(a).pathname;
    n(2, c = !0), f.httpRequest({
      method: "GET",
      path: d,
      headers: {},
      query_string: ""
    }).then((m) => {
      if (m.status !== 200)
        throw new Error(`Failed to get file ${d} from the Wasm worker.`);
      const g = new Blob(
        [m.body],
        {
          type: fs(m.headers, "content-type")
        }
      ), p = URL.createObjectURL(g), T = document.createElement("a");
      T.href = p, T.download = s, T.click(), URL.revokeObjectURL(p);
    }).finally(() => {
      n(2, c = !1);
    });
  }
  return t.$$set = (h) => {
    e = Yn(Yn({}, e), l_(h)), n(6, i = Bl(e, r)), "href" in h && n(0, a = h.href), "download" in h && n(1, s = h.download), "$$scope" in h && n(7, o = h.$$scope);
  }, [
    a,
    s,
    c,
    u,
    f,
    _,
    i,
    o,
    l
  ];
}
class p_ extends i_ {
  constructor(e) {
    super(), o_(this, e, m_, d_, a_, { href: 0, download: 1 });
  }
}
const {
  SvelteComponent: g_,
  assign: Ti,
  compute_rest_props: Hl,
  detach: b_,
  element: w_,
  exclude_internal_props: v_,
  get_spread_update: y_,
  init: E_,
  insert: k_,
  noop: Pl,
  safe_not_equal: S_,
  set_attributes: Nl,
  src_url_equal: C_,
  toggle_class: Il
} = window.__gradio__svelte__internal;
function T_(t) {
  let e, n, r = [
    {
      src: n = /*resolved_src*/
      t[0]
    },
    /*$$restProps*/
    t[1]
  ], i = {};
  for (let l = 0; l < r.length; l += 1)
    i = Ti(i, r[l]);
  return {
    c() {
      e = w_("img"), Nl(e, i), Il(e, "svelte-kxeri3", !0);
    },
    m(l, o) {
      k_(l, e, o);
    },
    p(l, [o]) {
      Nl(e, i = y_(r, [
        o & /*resolved_src*/
        1 && !C_(e.src, n = /*resolved_src*/
        l[0]) && { src: n },
        o & /*$$restProps*/
        2 && /*$$restProps*/
        l[1]
      ])), Il(e, "svelte-kxeri3", !0);
    },
    i: Pl,
    o: Pl,
    d(l) {
      l && b_(e);
    }
  };
}
function A_(t, e, n) {
  const r = ["src"];
  let i = Hl(e, r), { src: l = void 0 } = e, o, a;
  return t.$$set = (s) => {
    e = Ti(Ti({}, e), v_(s)), n(1, i = Hl(e, r)), "src" in s && n(2, l = s.src);
  }, t.$$.update = () => {
    if (t.$$.dirty & /*src, latest_src*/
    12) {
      n(0, o = l), n(3, a = l);
      const s = l;
      r_(s).then((u) => {
        a === s && n(0, o = u);
      });
    }
  }, [o, i, l, a];
}
class ws extends g_ {
  constructor(e) {
    super(), E_(this, e, A_, T_, S_, { src: 2 });
  }
}
var Jr = new Intl.Collator(0, { numeric: 1 }).compare;
function Ll(t, e, n) {
  return t = t.split("."), e = e.split("."), Jr(t[0], e[0]) || Jr(t[1], e[1]) || (e[2] = e.slice(2).join("."), n = /[.-]/.test(t[2] = t.slice(2).join(".")), n == /[.-]/.test(e[2]) ? Jr(t[2], e[2]) : n ? -1 : 1);
}
function vs(t, e, n) {
  return e.startsWith("http://") || e.startsWith("https://") ? n ? t : e : t + e;
}
function Yr(t) {
  if (t.startsWith("http")) {
    const { protocol: e, host: n } = new URL(t);
    return n.endsWith("hf.space") ? {
      ws_protocol: "wss",
      host: n,
      http_protocol: e
    } : {
      ws_protocol: e === "https:" ? "wss" : "ws",
      http_protocol: e,
      host: n
    };
  } else if (t.startsWith("file:"))
    return {
      ws_protocol: "ws",
      http_protocol: "http:",
      host: "lite.local"
      // Special fake hostname only used for this case. This matches the hostname allowed in `is_self_host()` in `js/wasm/network/host.ts`.
    };
  return {
    ws_protocol: "wss",
    http_protocol: "https:",
    host: t
  };
}
const ys = /^[^\/]*\/[^\/]*$/, B_ = /.*hf\.space\/{0,1}$/;
async function H_(t, e) {
  const n = {};
  e && (n.Authorization = `Bearer ${e}`);
  const r = t.trim();
  if (ys.test(r))
    try {
      const i = await fetch(
        `https://huggingface.co/api/spaces/${r}/host`,
        { headers: n }
      );
      if (i.status !== 200)
        throw new Error("Space metadata could not be loaded.");
      const l = (await i.json()).host;
      return {
        space_id: t,
        ...Yr(l)
      };
    } catch (i) {
      throw new Error("Space metadata could not be loaded." + i.message);
    }
  if (B_.test(r)) {
    const { ws_protocol: i, http_protocol: l, host: o } = Yr(r);
    return {
      space_id: o.replace(".hf.space", ""),
      ws_protocol: i,
      http_protocol: l,
      host: o
    };
  }
  return {
    space_id: !1,
    ...Yr(r)
  };
}
function P_(t) {
  let e = {};
  return t.forEach(({ api_name: n }, r) => {
    n && (e[n] = r);
  }), e;
}
const N_ = /^(?=[^]*\b[dD]iscussions{0,1}\b)(?=[^]*\b[dD]isabled\b)[^]*$/;
async function Ol(t) {
  try {
    const n = (await fetch(
      `https://huggingface.co/api/spaces/${t}/discussions`,
      {
        method: "HEAD"
      }
    )).headers.get("x-error-message");
    return !(n && N_.test(n));
  } catch {
    return !1;
  }
}
function I_(t, e, n, r) {
  if (e.length === 0) {
    if (n === "replace")
      return r;
    if (n === "append")
      return t + r;
    throw new Error(`Unsupported action: ${n}`);
  }
  let i = t;
  for (let o = 0; o < e.length - 1; o++)
    i = i[e[o]];
  const l = e[e.length - 1];
  switch (n) {
    case "replace":
      i[l] = r;
      break;
    case "append":
      i[l] += r;
      break;
    case "add":
      Array.isArray(i) ? i.splice(Number(l), 0, r) : i[l] = r;
      break;
    case "delete":
      Array.isArray(i) ? i.splice(Number(l), 1) : delete i[l];
      break;
    default:
      throw new Error(`Unknown action: ${n}`);
  }
  return t;
}
function L_(t, e) {
  return e.forEach(([n, r, i]) => {
    t = I_(t, r, n, i);
  }), t;
}
async function Es(t, e, n, r = M_) {
  let i = (Array.isArray(t) ? t : [t]).map(
    (l) => l.blob
  );
  return await Promise.all(
    await r(e, i, void 0, n).then(
      async (l) => {
        if (l.error)
          throw new Error(l.error);
        return l.files ? l.files.map((o, a) => new $i({
          ...t[a],
          path: o,
          url: e + "/file=" + o
        })) : [];
      }
    )
  );
}
async function ks(t, e) {
  return t.map(
    (n, r) => new $i({
      path: n.name,
      orig_name: n.name,
      blob: n,
      size: n.size,
      mime_type: n.type,
      is_stream: e
    })
  );
}
class $i {
  constructor({
    path: e,
    url: n,
    orig_name: r,
    size: i,
    blob: l,
    is_stream: o,
    mime_type: a,
    alt_text: s
  }) {
    this.path = e, this.url = n, this.orig_name = r, this.size = i, this.blob = n ? void 0 : l, this.is_stream = o, this.mime_type = a, this.alt_text = s;
  }
}
const Ss = "This application is too busy. Keep trying!", pt = "Connection errored out.";
let Cs;
function O_(t, e) {
  return { post_data: n, upload_files: r, client: i, handle_blob: l };
  async function n(o, a, s) {
    const u = { "Content-Type": "application/json" };
    s && (u.Authorization = `Bearer ${s}`);
    try {
      var c = await t(o, {
        method: "POST",
        body: JSON.stringify(a),
        headers: u
      });
    } catch {
      return [{ error: pt }, 500];
    }
    let f, _;
    try {
      f = await c.json(), _ = c.status;
    } catch (h) {
      f = { error: `Could not parse server response: ${h}` }, _ = 500;
    }
    return [f, _];
  }
  async function r(o, a, s, u) {
    const c = {};
    s && (c.Authorization = `Bearer ${s}`);
    const f = 1e3, _ = [];
    for (let d = 0; d < a.length; d += f) {
      const m = a.slice(d, d + f), g = new FormData();
      m.forEach((T) => {
        g.append("files", T);
      });
      try {
        const T = u ? `${o}/upload?upload_id=${u}` : `${o}/upload`;
        var h = await t(T, {
          method: "POST",
          body: g,
          headers: c
        });
      } catch {
        return { error: pt };
      }
      const p = await h.json();
      _.push(...p);
    }
    return { files: _ };
  }
  async function i(o, a = {}) {
    return new Promise(async (s) => {
      const { status_callback: u, hf_token: c } = a, f = {
        predict: ae,
        submit: Z,
        view_api: ye,
        component_server: x
      };
      if ((typeof window > "u" || !("WebSocket" in window)) && !global.Websocket) {
        const E = await import("./wrapper-6f348d45-f837cf34.js");
        Cs = (await import("./__vite-browser-external-2447137e.js")).Blob, global.WebSocket = E.WebSocket;
      }
      const { ws_protocol: _, http_protocol: h, host: d, space_id: m } = await H_(o, c), g = Math.random().toString(36).substring(2), p = {};
      let T = !1, v = {}, B = {}, N = null;
      const y = {}, W = /* @__PURE__ */ new Set();
      let k, L = {}, q = !1;
      c && m && (q = await D_(m, c));
      async function R(E) {
        if (k = E, window.location.protocol === "https:" && (k.root = k.root.replace("http://", "https://")), L = P_((E == null ? void 0 : E.dependencies) || []), k.auth_required)
          return {
            config: k,
            ...f
          };
        try {
          ee = await ye(k);
        } catch (b) {
          console.error(`Could not get api details: ${b.message}`);
        }
        return {
          config: k,
          ...f
        };
      }
      let ee;
      async function D(E) {
        if (u && u(E), E.status === "running")
          try {
            k = await Ul(
              t,
              `${h}//${d}`,
              c
            );
            const b = await R(k);
            s(b);
          } catch (b) {
            console.error(b), u && u({
              status: "error",
              message: "Could not load this space.",
              load_status: "error",
              detail: "NOT_FOUND"
            });
          }
      }
      try {
        k = await Ul(
          t,
          `${h}//${d}`,
          c
        );
        const E = await R(k);
        s(E);
      } catch (E) {
        console.error(E), m ? Bi(
          m,
          ys.test(m) ? "space_name" : "subdomain",
          D
        ) : u && u({
          status: "error",
          message: "Could not load this space.",
          load_status: "error",
          detail: "NOT_FOUND"
        });
      }
      function ae(E, b, I) {
        let w = !1, A = !1, Y;
        if (typeof E == "number")
          Y = k.dependencies[E];
        else {
          const j = E.replace(/^\//, "");
          Y = k.dependencies[L[j]];
        }
        if (Y.types.continuous)
          throw new Error(
            "Cannot call predict on this function as it may run forever. Use submit instead"
          );
        return new Promise((j, re) => {
          const C = Z(E, b, I);
          let P;
          C.on("data", (de) => {
            A && (C.destroy(), j(de)), w = !0, P = de;
          }).on("status", (de) => {
            de.stage === "error" && re(de), de.stage === "complete" && (A = !0, w && (C.destroy(), j(P)));
          });
        });
      }
      function Z(E, b, I, w = null) {
        let A, Y;
        if (typeof E == "number")
          A = E, Y = ee.unnamed_endpoints[A];
        else {
          const K = E.replace(/^\//, "");
          A = L[K], Y = ee.named_endpoints[E.trim()];
        }
        if (typeof A != "number")
          throw new Error(
            "There is no endpoint matching that name of fn_index matching that number."
          );
        let j, re, C = k.protocol ?? "ws";
        const P = typeof E == "number" ? "/predict" : E;
        let de, S = null, Le = !1;
        const rn = {};
        let it = "";
        typeof window < "u" && (it = new URLSearchParams(window.location.search).toString()), l(`${k.root}`, b, Y, c).then(
          (K) => {
            if (de = {
              data: K || [],
              event_data: I,
              fn_index: A,
              trigger_id: w
            }, U_(A, k))
              z({
                type: "status",
                endpoint: P,
                stage: "pending",
                queue: !1,
                fn_index: A,
                time: /* @__PURE__ */ new Date()
              }), n(
                `${k.root}/run${P.startsWith("/") ? P : `/${P}`}${it ? "?" + it : ""}`,
                {
                  ...de,
                  session_hash: g
                },
                c
              ).then(([te, Q]) => {
                const he = te.data;
                Q == 200 ? (z({
                  type: "data",
                  endpoint: P,
                  fn_index: A,
                  data: he,
                  time: /* @__PURE__ */ new Date()
                }), z({
                  type: "status",
                  endpoint: P,
                  fn_index: A,
                  stage: "complete",
                  eta: te.average_duration,
                  queue: !1,
                  time: /* @__PURE__ */ new Date()
                })) : z({
                  type: "status",
                  stage: "error",
                  endpoint: P,
                  fn_index: A,
                  message: te.error,
                  queue: !1,
                  time: /* @__PURE__ */ new Date()
                });
              }).catch((te) => {
                z({
                  type: "status",
                  stage: "error",
                  message: te.message,
                  endpoint: P,
                  fn_index: A,
                  queue: !1,
                  time: /* @__PURE__ */ new Date()
                });
              });
            else if (C == "ws") {
              z({
                type: "status",
                stage: "pending",
                queue: !0,
                endpoint: P,
                fn_index: A,
                time: /* @__PURE__ */ new Date()
              });
              let te = new URL(`${_}://${vs(
                d,
                k.path,
                !0
              )}
							/queue/join${it ? "?" + it : ""}`);
              q && te.searchParams.set("__sign", q), j = new WebSocket(te), j.onclose = (Q) => {
                Q.wasClean || z({
                  type: "status",
                  stage: "error",
                  broken: !0,
                  message: pt,
                  queue: !0,
                  endpoint: P,
                  fn_index: A,
                  time: /* @__PURE__ */ new Date()
                });
              }, j.onmessage = function(Q) {
                const he = JSON.parse(Q.data), { type: ue, status: X, data: J } = Qr(
                  he,
                  p[A]
                );
                if (ue === "update" && X && !Le)
                  z({
                    type: "status",
                    endpoint: P,
                    fn_index: A,
                    time: /* @__PURE__ */ new Date(),
                    ...X
                  }), X.stage === "error" && j.close();
                else if (ue === "hash") {
                  j.send(JSON.stringify({ fn_index: A, session_hash: g }));
                  return;
                } else
                  ue === "data" ? j.send(JSON.stringify({ ...de, session_hash: g })) : ue === "complete" ? Le = X : ue === "log" ? z({
                    type: "log",
                    log: J.log,
                    level: J.level,
                    endpoint: P,
                    fn_index: A
                  }) : ue === "generating" && z({
                    type: "status",
                    time: /* @__PURE__ */ new Date(),
                    ...X,
                    stage: X == null ? void 0 : X.stage,
                    queue: !0,
                    endpoint: P,
                    fn_index: A
                  });
                J && (z({
                  type: "data",
                  time: /* @__PURE__ */ new Date(),
                  data: J.data,
                  endpoint: P,
                  fn_index: A
                }), Le && (z({
                  type: "status",
                  time: /* @__PURE__ */ new Date(),
                  ...Le,
                  stage: X == null ? void 0 : X.stage,
                  queue: !0,
                  endpoint: P,
                  fn_index: A
                }), j.close()));
              }, Ll(k.version || "2.0.0", "3.6") < 0 && addEventListener(
                "open",
                () => j.send(JSON.stringify({ hash: g }))
              );
            } else if (C == "sse") {
              z({
                type: "status",
                stage: "pending",
                queue: !0,
                endpoint: P,
                fn_index: A,
                time: /* @__PURE__ */ new Date()
              });
              var me = new URLSearchParams({
                fn_index: A.toString(),
                session_hash: g
              }).toString();
              let te = new URL(
                `${k.root}/queue/join?${it ? it + "&" : ""}${me}`
              );
              re = e(te), re.onmessage = async function(Q) {
                const he = JSON.parse(Q.data), { type: ue, status: X, data: J } = Qr(
                  he,
                  p[A]
                );
                if (ue === "update" && X && !Le)
                  z({
                    type: "status",
                    endpoint: P,
                    fn_index: A,
                    time: /* @__PURE__ */ new Date(),
                    ...X
                  }), X.stage === "error" && re.close();
                else if (ue === "data") {
                  S = he.event_id;
                  let [mt, Ea] = await n(
                    `${k.root}/queue/data`,
                    {
                      ...de,
                      session_hash: g,
                      event_id: S
                    },
                    c
                  );
                  Ea !== 200 && (z({
                    type: "status",
                    stage: "error",
                    message: pt,
                    queue: !0,
                    endpoint: P,
                    fn_index: A,
                    time: /* @__PURE__ */ new Date()
                  }), re.close());
                } else
                  ue === "complete" ? Le = X : ue === "log" ? z({
                    type: "log",
                    log: J.log,
                    level: J.level,
                    endpoint: P,
                    fn_index: A
                  }) : ue === "generating" && z({
                    type: "status",
                    time: /* @__PURE__ */ new Date(),
                    ...X,
                    stage: X == null ? void 0 : X.stage,
                    queue: !0,
                    endpoint: P,
                    fn_index: A
                  });
                J && (z({
                  type: "data",
                  time: /* @__PURE__ */ new Date(),
                  data: J.data,
                  endpoint: P,
                  fn_index: A
                }), Le && (z({
                  type: "status",
                  time: /* @__PURE__ */ new Date(),
                  ...Le,
                  stage: X == null ? void 0 : X.stage,
                  queue: !0,
                  endpoint: P,
                  fn_index: A
                }), re.close()));
              };
            } else
              (C == "sse_v1" || C == "sse_v2") && (z({
                type: "status",
                stage: "pending",
                queue: !0,
                endpoint: P,
                fn_index: A,
                time: /* @__PURE__ */ new Date()
              }), n(
                `${k.root}/queue/join?${it}`,
                {
                  ...de,
                  session_hash: g
                },
                c
              ).then(([te, Q]) => {
                if (Q === 503)
                  z({
                    type: "status",
                    stage: "error",
                    message: Ss,
                    queue: !0,
                    endpoint: P,
                    fn_index: A,
                    time: /* @__PURE__ */ new Date()
                  });
                else if (Q !== 200)
                  z({
                    type: "status",
                    stage: "error",
                    message: pt,
                    queue: !0,
                    endpoint: P,
                    fn_index: A,
                    time: /* @__PURE__ */ new Date()
                  });
                else {
                  S = te.event_id;
                  let he = async function(ue) {
                    try {
                      const { type: X, status: J, data: mt } = Qr(
                        ue,
                        p[A]
                      );
                      if (X == "heartbeat")
                        return;
                      if (X === "update" && J && !Le)
                        z({
                          type: "status",
                          endpoint: P,
                          fn_index: A,
                          time: /* @__PURE__ */ new Date(),
                          ...J
                        });
                      else if (X === "complete")
                        Le = J;
                      else if (X == "unexpected_error")
                        console.error("Unexpected error", J == null ? void 0 : J.message), z({
                          type: "status",
                          stage: "error",
                          message: (J == null ? void 0 : J.message) || "An Unexpected Error Occurred!",
                          queue: !0,
                          endpoint: P,
                          fn_index: A,
                          time: /* @__PURE__ */ new Date()
                        });
                      else if (X === "log") {
                        z({
                          type: "log",
                          log: mt.log,
                          level: mt.level,
                          endpoint: P,
                          fn_index: A
                        });
                        return;
                      } else
                        X === "generating" && (z({
                          type: "status",
                          time: /* @__PURE__ */ new Date(),
                          ...J,
                          stage: J == null ? void 0 : J.stage,
                          queue: !0,
                          endpoint: P,
                          fn_index: A
                        }), mt && C === "sse_v2" && ya(S, mt));
                      mt && (z({
                        type: "data",
                        time: /* @__PURE__ */ new Date(),
                        data: mt.data,
                        endpoint: P,
                        fn_index: A
                      }), Le && z({
                        type: "status",
                        time: /* @__PURE__ */ new Date(),
                        ...Le,
                        stage: J == null ? void 0 : J.stage,
                        queue: !0,
                        endpoint: P,
                        fn_index: A
                      })), ((J == null ? void 0 : J.stage) === "complete" || (J == null ? void 0 : J.stage) === "error") && (y[S] && delete y[S], S in B && delete B[S]);
                    } catch (X) {
                      console.error("Unexpected client exception", X), z({
                        type: "status",
                        stage: "error",
                        message: "An Unexpected Error Occurred!",
                        queue: !0,
                        endpoint: P,
                        fn_index: A,
                        time: /* @__PURE__ */ new Date()
                      }), H();
                    }
                  };
                  S in v && (v[S].forEach(
                    (ue) => he(ue)
                  ), delete v[S]), y[S] = he, W.add(S), T || ve();
                }
              }));
          }
        );
        function ya(K, me) {
          !B[K] ? (B[K] = [], me.data.forEach((Q, he) => {
            B[K][he] = Q;
          })) : me.data.forEach((Q, he) => {
            let ue = L_(
              B[K][he],
              Q
            );
            B[K][he] = ue, me.data[he] = ue;
          });
        }
        function z(K) {
          const te = rn[K.type] || [];
          te == null || te.forEach((Q) => Q(K));
        }
        function yr(K, me) {
          const te = rn, Q = te[K] || [];
          return te[K] = Q, Q == null || Q.push(me), { on: yr, off: Tn, cancel: Er, destroy: kr };
        }
        function Tn(K, me) {
          const te = rn;
          let Q = te[K] || [];
          return Q = Q == null ? void 0 : Q.filter((he) => he !== me), te[K] = Q, { on: yr, off: Tn, cancel: Er, destroy: kr };
        }
        async function Er() {
          const K = {
            stage: "complete",
            queue: !1,
            time: /* @__PURE__ */ new Date()
          };
          Le = K, z({
            ...K,
            type: "status",
            endpoint: P,
            fn_index: A
          });
          let me = {};
          C === "ws" ? (j && j.readyState === 0 ? j.addEventListener("open", () => {
            j.close();
          }) : j.close(), me = { fn_index: A, session_hash: g }) : (re.close(), me = { event_id: S });
          try {
            await t(`${k.root}/reset`, {
              headers: { "Content-Type": "application/json" },
              method: "POST",
              body: JSON.stringify(me)
            });
          } catch {
            console.warn(
              "The `/reset` endpoint could not be called. Subsequent endpoint results may be unreliable."
            );
          }
        }
        function kr() {
          for (const K in rn)
            rn[K].forEach((me) => {
              Tn(K, me);
            });
        }
        return {
          on: yr,
          off: Tn,
          cancel: Er,
          destroy: kr
        };
      }
      function ve() {
        T = !0;
        let E = new URLSearchParams({
          session_hash: g
        }).toString(), b = new URL(`${k.root}/queue/data?${E}`);
        N = e(b), N.onmessage = async function(I) {
          let w = JSON.parse(I.data);
          const A = w.event_id;
          if (!A)
            await Promise.all(
              Object.keys(y).map(
                (Y) => y[Y](w)
              )
            );
          else if (y[A]) {
            w.msg === "process_completed" && (W.delete(A), W.size === 0 && H());
            let Y = y[A];
            window.setTimeout(Y, 0, w);
          } else
            v[A] || (v[A] = []), v[A].push(w);
        }, N.onerror = async function(I) {
          await Promise.all(
            Object.keys(y).map(
              (w) => y[w]({
                msg: "unexpected_error",
                message: pt
              })
            )
          ), H();
        };
      }
      function H() {
        T = !1, N == null || N.close();
      }
      async function x(E, b, I) {
        var w;
        const A = { "Content-Type": "application/json" };
        c && (A.Authorization = `Bearer ${c}`);
        let Y, j = k.components.find(
          (P) => P.id === E
        );
        (w = j == null ? void 0 : j.props) != null && w.root_url ? Y = j.props.root_url : Y = k.root;
        const re = await t(
          `${Y}/component_server/`,
          {
            method: "POST",
            body: JSON.stringify({
              data: I,
              component_id: E,
              fn_name: b,
              session_hash: g
            }),
            headers: A
          }
        );
        if (!re.ok)
          throw new Error(
            "Could not connect to component server: " + re.statusText
          );
        return await re.json();
      }
      async function ye(E) {
        if (ee)
          return ee;
        const b = { "Content-Type": "application/json" };
        c && (b.Authorization = `Bearer ${c}`);
        let I;
        if (Ll(E.version || "2.0.0", "3.30") < 0 ? I = await t(
          "https://gradio-space-api-fetcher-v2.hf.space/api",
          {
            method: "POST",
            body: JSON.stringify({
              serialize: !1,
              config: JSON.stringify(E)
            }),
            headers: b
          }
        ) : I = await t(`${E.root}/info`, {
          headers: b
        }), !I.ok)
          throw new Error(pt);
        let w = await I.json();
        return "api" in w && (w = w.api), w.named_endpoints["/predict"] && !w.unnamed_endpoints[0] && (w.unnamed_endpoints[0] = w.named_endpoints["/predict"]), R_(w, E, L);
      }
    });
  }
  async function l(o, a, s, u) {
    const c = await Ai(
      a,
      void 0,
      [],
      !0,
      s
    );
    return Promise.all(
      c.map(async ({ path: f, blob: _, type: h }) => {
        if (_) {
          const d = (await r(o, [_], u)).files[0];
          return { path: f, file_url: d, type: h, name: _ == null ? void 0 : _.name };
        }
        return { path: f, type: h };
      })
    ).then((f) => (f.forEach(({ path: _, file_url: h, type: d, name: m }) => {
      if (d === "Gallery")
        Dl(a, h, _);
      else if (h) {
        const g = new $i({ path: h, orig_name: m });
        Dl(a, g, _);
      }
    }), a));
  }
}
const { post_data: wp, upload_files: M_, client: vp, handle_blob: yp } = O_(
  fetch,
  (...t) => new EventSource(...t)
);
function Ml(t, e, n, r) {
  switch (t.type) {
    case "string":
      return "string";
    case "boolean":
      return "boolean";
    case "number":
      return "number";
  }
  if (n === "JSONSerializable" || n === "StringSerializable")
    return "any";
  if (n === "ListStringSerializable")
    return "string[]";
  if (e === "Image")
    return r === "parameter" ? "Blob | File | Buffer" : "string";
  if (n === "FileSerializable")
    return (t == null ? void 0 : t.type) === "array" ? r === "parameter" ? "(Blob | File | Buffer)[]" : "{ name: string; data: string; size?: number; is_file?: boolean; orig_name?: string}[]" : r === "parameter" ? "Blob | File | Buffer" : "{ name: string; data: string; size?: number; is_file?: boolean; orig_name?: string}";
  if (n === "GallerySerializable")
    return r === "parameter" ? "[(Blob | File | Buffer), (string | null)][]" : "[{ name: string; data: string; size?: number; is_file?: boolean; orig_name?: string}, (string | null))][]";
}
function Rl(t, e) {
  return e === "GallerySerializable" ? "array of [file, label] tuples" : e === "ListStringSerializable" ? "array of strings" : e === "FileSerializable" ? "array of files or single file" : t.description;
}
function R_(t, e, n) {
  const r = {
    named_endpoints: {},
    unnamed_endpoints: {}
  };
  for (const i in t) {
    const l = t[i];
    for (const o in l) {
      const a = e.dependencies[o] ? o : n[o.replace("/", "")], s = l[o];
      r[i][o] = {}, r[i][o].parameters = {}, r[i][o].returns = {}, r[i][o].type = e.dependencies[a].types, r[i][o].parameters = s.parameters.map(
        ({ label: u, component: c, type: f, serializer: _ }) => ({
          label: u,
          component: c,
          type: Ml(f, c, _, "parameter"),
          description: Rl(f, _)
        })
      ), r[i][o].returns = s.returns.map(
        ({ label: u, component: c, type: f, serializer: _ }) => ({
          label: u,
          component: c,
          type: Ml(f, c, _, "return"),
          description: Rl(f, _)
        })
      );
    }
  }
  return r;
}
async function D_(t, e) {
  try {
    return (await (await fetch(`https://huggingface.co/api/spaces/${t}/jwt`, {
      headers: {
        Authorization: `Bearer ${e}`
      }
    })).json()).token || !1;
  } catch (n) {
    return console.error(n), !1;
  }
}
function Dl(t, e, n) {
  for (; n.length > 1; )
    t = t[n.shift()];
  t[n.shift()] = e;
}
async function Ai(t, e = void 0, n = [], r = !1, i = void 0) {
  if (Array.isArray(t)) {
    let l = [];
    return await Promise.all(
      t.map(async (o, a) => {
        var s;
        let u = n.slice();
        u.push(a);
        const c = await Ai(
          t[a],
          r ? ((s = i == null ? void 0 : i.parameters[a]) == null ? void 0 : s.component) || void 0 : e,
          u,
          !1,
          i
        );
        l = l.concat(c);
      })
    ), l;
  } else {
    if (globalThis.Buffer && t instanceof globalThis.Buffer)
      return [
        {
          path: n,
          blob: e === "Image" ? !1 : new Cs([t]),
          type: e
        }
      ];
    if (typeof t == "object") {
      let l = [];
      for (let o in t)
        if (t.hasOwnProperty(o)) {
          let a = n.slice();
          a.push(o), l = l.concat(
            await Ai(
              t[o],
              void 0,
              a,
              !1,
              i
            )
          );
        }
      return l;
    }
  }
  return [];
}
function U_(t, e) {
  var n, r, i, l;
  return !(((r = (n = e == null ? void 0 : e.dependencies) == null ? void 0 : n[t]) == null ? void 0 : r.queue) === null ? e.enable_queue : (l = (i = e == null ? void 0 : e.dependencies) == null ? void 0 : i[t]) != null && l.queue) || !1;
}
async function Ul(t, e, n) {
  const r = {};
  if (n && (r.Authorization = `Bearer ${n}`), typeof window < "u" && window.gradio_config && location.origin !== "http://localhost:9876" && !window.gradio_config.dev_mode) {
    const i = window.gradio_config.root, l = window.gradio_config;
    return l.root = vs(e, l.root, !1), { ...l, path: i };
  } else if (e) {
    let i = await t(`${e}/config`, {
      headers: r
    });
    if (i.status === 200) {
      const l = await i.json();
      return l.path = l.path ?? "", l.root = e, l;
    }
    throw new Error("Could not get config.");
  }
  throw new Error("No config or app endpoint found");
}
async function Bi(t, e, n) {
  let r = e === "subdomain" ? `https://huggingface.co/api/spaces/by-subdomain/${t}` : `https://huggingface.co/api/spaces/${t}`, i, l;
  try {
    if (i = await fetch(r), l = i.status, l !== 200)
      throw new Error();
    i = await i.json();
  } catch {
    n({
      status: "error",
      load_status: "error",
      message: "Could not get space status",
      detail: "NOT_FOUND"
    });
    return;
  }
  if (!i || l !== 200)
    return;
  const {
    runtime: { stage: o },
    id: a
  } = i;
  switch (o) {
    case "STOPPED":
    case "SLEEPING":
      n({
        status: "sleeping",
        load_status: "pending",
        message: "Space is asleep. Waking it up...",
        detail: o
      }), setTimeout(() => {
        Bi(t, e, n);
      }, 1e3);
      break;
    case "PAUSED":
      n({
        status: "paused",
        load_status: "error",
        message: "This space has been paused by the author. If you would like to try this demo, consider duplicating the space.",
        detail: o,
        discussions_enabled: await Ol(a)
      });
      break;
    case "RUNNING":
    case "RUNNING_BUILDING":
      n({
        status: "running",
        load_status: "complete",
        message: "",
        detail: o
      });
      break;
    case "BUILDING":
      n({
        status: "building",
        load_status: "pending",
        message: "Space is building...",
        detail: o
      }), setTimeout(() => {
        Bi(t, e, n);
      }, 1e3);
      break;
    default:
      n({
        status: "space_error",
        load_status: "error",
        message: "This space is experiencing an issue.",
        detail: o,
        discussions_enabled: await Ol(a)
      });
      break;
  }
}
function Qr(t, e) {
  switch (t.msg) {
    case "send_data":
      return { type: "data" };
    case "send_hash":
      return { type: "hash" };
    case "queue_full":
      return {
        type: "update",
        status: {
          queue: !0,
          message: Ss,
          stage: "error",
          code: t.code,
          success: t.success
        }
      };
    case "heartbeat":
      return {
        type: "heartbeat"
      };
    case "unexpected_error":
      return {
        type: "unexpected_error",
        status: {
          queue: !0,
          message: t.message,
          stage: "error",
          success: !1
        }
      };
    case "estimation":
      return {
        type: "update",
        status: {
          queue: !0,
          stage: e || "pending",
          code: t.code,
          size: t.queue_size,
          position: t.rank,
          eta: t.rank_eta,
          success: t.success
        }
      };
    case "progress":
      return {
        type: "update",
        status: {
          queue: !0,
          stage: "pending",
          code: t.code,
          progress_data: t.progress_data,
          success: t.success
        }
      };
    case "log":
      return { type: "log", data: t };
    case "process_generating":
      return {
        type: "generating",
        status: {
          queue: !0,
          message: t.success ? null : t.output.error,
          stage: t.success ? "generating" : "error",
          code: t.code,
          progress_data: t.progress_data,
          eta: t.average_duration
        },
        data: t.success ? t.output : null
      };
    case "process_completed":
      return "error" in t.output ? {
        type: "update",
        status: {
          queue: !0,
          message: t.output.error,
          stage: "error",
          code: t.code,
          success: t.success
        }
      } : {
        type: "complete",
        status: {
          queue: !0,
          message: t.success ? void 0 : t.output.error,
          stage: t.success ? "complete" : "error",
          code: t.code,
          progress_data: t.progress_data
        },
        data: t.success ? t.output : null
      };
    case "process_starts":
      return {
        type: "update",
        status: {
          queue: !0,
          stage: "pending",
          code: t.code,
          size: t.rank,
          position: 0,
          success: t.success,
          eta: t.eta
        }
      };
  }
  return { type: "none", status: { stage: "error", queue: !0 } };
}
const {
  SvelteComponent: q_,
  append: ql,
  attr: Kr,
  bubble: Fl,
  check_outros: Hi,
  create_component: Bt,
  destroy_component: Ht,
  detach: dn,
  element: $r,
  empty: F_,
  group_outros: Pi,
  init: G_,
  insert: mn,
  listen: j_,
  mount_component: Pt,
  safe_not_equal: z_,
  space: Ni,
  toggle_class: Gl,
  transition_in: Se,
  transition_out: Re
} = window.__gradio__svelte__internal, { createEventDispatcher: V_ } = window.__gradio__svelte__internal;
function x_(t) {
  let e, n, r, i, l, o, a, s, u, c = (
    /*show_download_button*/
    t[3] && jl(t)
  ), f = (
    /*show_share_button*/
    t[5] && zl(t)
  );
  return o = new ws({
    props: {
      src: (
        /*value*/
        t[0].url
      ),
      alt: "",
      loading: "lazy"
    }
  }), {
    c() {
      e = $r("div"), c && c.c(), n = Ni(), f && f.c(), r = Ni(), i = $r("button"), l = $r("div"), Bt(o.$$.fragment), Kr(e, "class", "icon-buttons svelte-n22rtv"), Kr(l, "class", "image-container svelte-n22rtv"), Gl(
        l,
        "selectable",
        /*selectable*/
        t[4]
      ), Kr(i, "class", "svelte-n22rtv");
    },
    m(_, h) {
      mn(_, e, h), c && c.m(e, null), ql(e, n), f && f.m(e, null), mn(_, r, h), mn(_, i, h), ql(i, l), Pt(o, l, null), a = !0, s || (u = j_(
        i,
        "click",
        /*handle_click*/
        t[7]
      ), s = !0);
    },
    p(_, h) {
      /*show_download_button*/
      _[3] ? c ? (c.p(_, h), h & /*show_download_button*/
      8 && Se(c, 1)) : (c = jl(_), c.c(), Se(c, 1), c.m(e, n)) : c && (Pi(), Re(c, 1, 1, () => {
        c = null;
      }), Hi()), /*show_share_button*/
      _[5] ? f ? (f.p(_, h), h & /*show_share_button*/
      32 && Se(f, 1)) : (f = zl(_), f.c(), Se(f, 1), f.m(e, null)) : f && (Pi(), Re(f, 1, 1, () => {
        f = null;
      }), Hi());
      const d = {};
      h & /*value*/
      1 && (d.src = /*value*/
      _[0].url), o.$set(d), (!a || h & /*selectable*/
      16) && Gl(
        l,
        "selectable",
        /*selectable*/
        _[4]
      );
    },
    i(_) {
      a || (Se(c), Se(f), Se(o.$$.fragment, _), a = !0);
    },
    o(_) {
      Re(c), Re(f), Re(o.$$.fragment, _), a = !1;
    },
    d(_) {
      _ && (dn(e), dn(r), dn(i)), c && c.d(), f && f.d(), Ht(o), s = !1, u();
    }
  };
}
function X_(t) {
  let e, n;
  return e = new es({
    props: {
      unpadded_box: !0,
      size: "large",
      $$slots: { default: [Z_] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Bt(e.$$.fragment);
    },
    m(r, i) {
      Pt(e, r, i), n = !0;
    },
    p(r, i) {
      const l = {};
      i & /*$$scope*/
      4096 && (l.$$scope = { dirty: i, ctx: r }), e.$set(l);
    },
    i(r) {
      n || (Se(e.$$.fragment, r), n = !0);
    },
    o(r) {
      Re(e.$$.fragment, r), n = !1;
    },
    d(r) {
      Ht(e, r);
    }
  };
}
function jl(t) {
  let e, n;
  return e = new p_({
    props: {
      href: (
        /*value*/
        t[0].url
      ),
      download: (
        /*value*/
        t[0].orig_name || "image"
      ),
      $$slots: { default: [W_] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Bt(e.$$.fragment);
    },
    m(r, i) {
      Pt(e, r, i), n = !0;
    },
    p(r, i) {
      const l = {};
      i & /*value*/
      1 && (l.href = /*value*/
      r[0].url), i & /*value*/
      1 && (l.download = /*value*/
      r[0].orig_name || "image"), i & /*$$scope, i18n*/
      4160 && (l.$$scope = { dirty: i, ctx: r }), e.$set(l);
    },
    i(r) {
      n || (Se(e.$$.fragment, r), n = !0);
    },
    o(r) {
      Re(e.$$.fragment, r), n = !1;
    },
    d(r) {
      Ht(e, r);
    }
  };
}
function W_(t) {
  let e, n;
  return e = new hn({
    props: {
      Icon: gc,
      label: (
        /*i18n*/
        t[6]("common.download")
      )
    }
  }), {
    c() {
      Bt(e.$$.fragment);
    },
    m(r, i) {
      Pt(e, r, i), n = !0;
    },
    p(r, i) {
      const l = {};
      i & /*i18n*/
      64 && (l.label = /*i18n*/
      r[6]("common.download")), e.$set(l);
    },
    i(r) {
      n || (Se(e.$$.fragment, r), n = !0);
    },
    o(r) {
      Re(e.$$.fragment, r), n = !1;
    },
    d(r) {
      Ht(e, r);
    }
  };
}
function zl(t) {
  let e, n;
  return e = new Df({
    props: {
      i18n: (
        /*i18n*/
        t[6]
      ),
      formatter: (
        /*func*/
        t[8]
      ),
      value: (
        /*value*/
        t[0]
      )
    }
  }), e.$on(
    "share",
    /*share_handler*/
    t[9]
  ), e.$on(
    "error",
    /*error_handler*/
    t[10]
  ), {
    c() {
      Bt(e.$$.fragment);
    },
    m(r, i) {
      Pt(e, r, i), n = !0;
    },
    p(r, i) {
      const l = {};
      i & /*i18n*/
      64 && (l.i18n = /*i18n*/
      r[6]), i & /*value*/
      1 && (l.value = /*value*/
      r[0]), e.$set(l);
    },
    i(r) {
      n || (Se(e.$$.fragment, r), n = !0);
    },
    o(r) {
      Re(e.$$.fragment, r), n = !1;
    },
    d(r) {
      Ht(e, r);
    }
  };
}
function Z_(t) {
  let e, n;
  return e = new lr({}), {
    c() {
      Bt(e.$$.fragment);
    },
    m(r, i) {
      Pt(e, r, i), n = !0;
    },
    i(r) {
      n || (Se(e.$$.fragment, r), n = !0);
    },
    o(r) {
      Re(e.$$.fragment, r), n = !1;
    },
    d(r) {
      Ht(e, r);
    }
  };
}
function J_(t) {
  let e, n, r, i, l, o;
  e = new Qo({
    props: {
      show_label: (
        /*show_label*/
        t[2]
      ),
      Icon: lr,
      label: (
        /*label*/
        t[1] || /*i18n*/
        t[6]("image.image")
      )
    }
  });
  const a = [X_, x_], s = [];
  function u(c, f) {
    return (
      /*value*/
      c[0] === null || !/*value*/
      c[0].url ? 0 : 1
    );
  }
  return r = u(t), i = s[r] = a[r](t), {
    c() {
      Bt(e.$$.fragment), n = Ni(), i.c(), l = F_();
    },
    m(c, f) {
      Pt(e, c, f), mn(c, n, f), s[r].m(c, f), mn(c, l, f), o = !0;
    },
    p(c, [f]) {
      const _ = {};
      f & /*show_label*/
      4 && (_.show_label = /*show_label*/
      c[2]), f & /*label, i18n*/
      66 && (_.label = /*label*/
      c[1] || /*i18n*/
      c[6]("image.image")), e.$set(_);
      let h = r;
      r = u(c), r === h ? s[r].p(c, f) : (Pi(), Re(s[h], 1, 1, () => {
        s[h] = null;
      }), Hi(), i = s[r], i ? i.p(c, f) : (i = s[r] = a[r](c), i.c()), Se(i, 1), i.m(l.parentNode, l));
    },
    i(c) {
      o || (Se(e.$$.fragment, c), Se(i), o = !0);
    },
    o(c) {
      Re(e.$$.fragment, c), Re(i), o = !1;
    },
    d(c) {
      c && (dn(n), dn(l)), Ht(e, c), s[r].d(c);
    }
  };
}
function Y_(t, e, n) {
  let { value: r } = e, { label: i = void 0 } = e, { show_label: l } = e, { show_download_button: o = !0 } = e, { selectable: a = !1 } = e, { show_share_button: s = !1 } = e, { i18n: u } = e;
  const c = V_(), f = (m) => {
    let g = us(m);
    g && c("select", { index: g, value: null });
  }, _ = async (m) => m ? `<img src="${await Ca(m, "base64")}" />` : "";
  function h(m) {
    Fl.call(this, t, m);
  }
  function d(m) {
    Fl.call(this, t, m);
  }
  return t.$$set = (m) => {
    "value" in m && n(0, r = m.value), "label" in m && n(1, i = m.label), "show_label" in m && n(2, l = m.show_label), "show_download_button" in m && n(3, o = m.show_download_button), "selectable" in m && n(4, a = m.selectable), "show_share_button" in m && n(5, s = m.show_share_button), "i18n" in m && n(6, u = m.i18n);
  }, [
    r,
    i,
    l,
    o,
    a,
    s,
    u,
    f,
    _,
    h,
    d
  ];
}
class Q_ extends q_ {
  constructor(e) {
    super(), G_(this, e, Y_, J_, z_, {
      value: 0,
      label: 1,
      show_label: 2,
      show_download_button: 3,
      selectable: 4,
      show_share_button: 5,
      i18n: 6
    });
  }
}
const {
  SvelteComponent: K_,
  append: On,
  attr: ei,
  create_component: $_,
  destroy_component: e0,
  detach: t0,
  element: ti,
  init: n0,
  insert: r0,
  listen: i0,
  mount_component: l0,
  noop: o0,
  safe_not_equal: s0,
  set_style: a0,
  space: u0,
  text: c0,
  transition_in: f0,
  transition_out: _0
} = window.__gradio__svelte__internal, { createEventDispatcher: h0 } = window.__gradio__svelte__internal;
function d0(t) {
  let e, n, r, i, l, o = "Click to Access Webcam", a, s, u, c;
  return i = new is({}), {
    c() {
      e = ti("button"), n = ti("div"), r = ti("span"), $_(i.$$.fragment), l = u0(), a = c0(o), ei(r, "class", "icon-wrap svelte-fjcd9c"), ei(n, "class", "wrap svelte-fjcd9c"), ei(e, "class", "svelte-fjcd9c"), a0(e, "height", "100%");
    },
    m(f, _) {
      r0(f, e, _), On(e, n), On(n, r), l0(i, r, null), On(n, l), On(n, a), s = !0, u || (c = i0(
        e,
        "click",
        /*click_handler*/
        t[1]
      ), u = !0);
    },
    p: o0,
    i(f) {
      s || (f0(i.$$.fragment, f), s = !0);
    },
    o(f) {
      _0(i.$$.fragment, f), s = !1;
    },
    d(f) {
      f && t0(e), e0(i), u = !1, c();
    }
  };
}
function m0(t) {
  const e = h0();
  return [e, () => e("click")];
}
class p0 extends K_ {
  constructor(e) {
    super(), n0(this, e, m0, d0, s0, {});
  }
}
function St() {
}
const g0 = (t) => t;
function b0(t) {
  return t();
}
function w0(t) {
  t.forEach(b0);
}
function v0(t) {
  return typeof t == "function";
}
function y0(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
function E0(t, ...e) {
  if (t == null) {
    for (const r of e)
      r(void 0);
    return St;
  }
  const n = t.subscribe(...e);
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
const Ts = typeof window < "u";
let Vl = Ts ? () => window.performance.now() : () => Date.now(), As = Ts ? (t) => requestAnimationFrame(t) : St;
const qt = /* @__PURE__ */ new Set();
function Bs(t) {
  qt.forEach((e) => {
    e.c(t) || (qt.delete(e), e.f());
  }), qt.size !== 0 && As(Bs);
}
function k0(t) {
  let e;
  return qt.size === 0 && As(Bs), {
    promise: new Promise((n) => {
      qt.add(e = { c: t, f: n });
    }),
    abort() {
      qt.delete(e);
    }
  };
}
function S0(t, { delay: e = 0, duration: n = 400, easing: r = g0 } = {}) {
  const i = +getComputedStyle(t).opacity;
  return {
    delay: e,
    duration: n,
    easing: r,
    css: (l) => `opacity: ${l * i}`
  };
}
const Mt = [];
function C0(t, e) {
  return {
    subscribe: kn(t, e).subscribe
  };
}
function kn(t, e = St) {
  let n;
  const r = /* @__PURE__ */ new Set();
  function i(a) {
    if (y0(t, a) && (t = a, n)) {
      const s = !Mt.length;
      for (const u of r)
        u[1](), Mt.push(u, t);
      if (s) {
        for (let u = 0; u < Mt.length; u += 2)
          Mt[u][0](Mt[u + 1]);
        Mt.length = 0;
      }
    }
  }
  function l(a) {
    i(a(t));
  }
  function o(a, s = St) {
    const u = [a, s];
    return r.add(u), r.size === 1 && (n = e(i, l) || St), a(t), () => {
      r.delete(u), r.size === 0 && n && (n(), n = null);
    };
  }
  return { set: i, update: l, subscribe: o };
}
function Qt(t, e, n) {
  const r = !Array.isArray(t), i = r ? [t] : t;
  if (!i.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const l = e.length < 2;
  return C0(n, (o, a) => {
    let s = !1;
    const u = [];
    let c = 0, f = St;
    const _ = () => {
      if (c)
        return;
      f();
      const d = e(r ? u[0] : u, o, a);
      l ? o(d) : f = v0(d) ? d : St;
    }, h = i.map(
      (d, m) => E0(
        d,
        (g) => {
          u[m] = g, c &= ~(1 << m), s && _();
        },
        () => {
          c |= 1 << m;
        }
      )
    );
    return s = !0, _(), function() {
      w0(h), f(), s = !1;
    };
  });
}
function xl(t) {
  return Object.prototype.toString.call(t) === "[object Date]";
}
function Ii(t, e, n, r) {
  if (typeof n == "number" || xl(n)) {
    const i = r - n, l = (n - e) / (t.dt || 1 / 60), o = t.opts.stiffness * i, a = t.opts.damping * l, s = (o - a) * t.inv_mass, u = (l + s) * t.dt;
    return Math.abs(u) < t.opts.precision && Math.abs(i) < t.opts.precision ? r : (t.settled = !1, xl(n) ? new Date(n.getTime() + u) : n + u);
  } else {
    if (Array.isArray(n))
      return n.map(
        (i, l) => Ii(t, e[l], n[l], r[l])
      );
    if (typeof n == "object") {
      const i = {};
      for (const l in n)
        i[l] = Ii(t, e[l], n[l], r[l]);
      return i;
    } else
      throw new Error(`Cannot spring ${typeof n} values`);
  }
}
function Xl(t, e = {}) {
  const n = kn(t), { stiffness: r = 0.15, damping: i = 0.8, precision: l = 0.01 } = e;
  let o, a, s, u = t, c = t, f = 1, _ = 0, h = !1;
  function d(g, p = {}) {
    c = g;
    const T = s = {};
    return t == null || p.hard || m.stiffness >= 1 && m.damping >= 1 ? (h = !0, o = Vl(), u = g, n.set(t = c), Promise.resolve()) : (p.soft && (_ = 1 / ((p.soft === !0 ? 0.5 : +p.soft) * 60), f = 0), a || (o = Vl(), h = !1, a = k0((v) => {
      if (h)
        return h = !1, a = null, !1;
      f = Math.min(f + _, 1);
      const B = {
        inv_mass: f,
        opts: m,
        settled: !0,
        dt: (v - o) * 60 / 1e3
      }, N = Ii(B, u, t, c);
      return o = v, u = t, n.set(t = N), B.settled && (a = null), !B.settled;
    })), new Promise((v) => {
      a.promise.then(() => {
        T === s && v();
      });
    }));
  }
  const m = {
    set: d,
    update: (g, p) => d(g(c, t), p),
    subscribe: n.subscribe,
    stiffness: r,
    damping: i,
    precision: l
  };
  return m;
}
const {
  SvelteComponent: T0,
  action_destroyer: A0,
  add_render_callback: B0,
  append: rt,
  attr: se,
  binding_callbacks: H0,
  check_outros: pn,
  create_component: Kt,
  create_in_transition: P0,
  destroy_component: $t,
  destroy_each: N0,
  detach: He,
  element: De,
  empty: el,
  ensure_array_like: Wl,
  group_outros: gn,
  init: I0,
  insert: Pe,
  listen: _r,
  mount_component: en,
  noop: tl,
  run_all: L0,
  safe_not_equal: O0,
  set_data: Hs,
  set_input_value: Li,
  space: bn,
  stop_propagation: M0,
  text: Ps,
  toggle_class: Mn,
  transition_in: _e,
  transition_out: we
} = window.__gradio__svelte__internal, { createEventDispatcher: R0, onMount: D0 } = window.__gradio__svelte__internal;
function Zl(t, e, n) {
  const r = t.slice();
  return r[31] = e[n], r;
}
function U0(t) {
  let e, n, r, i, l, o, a, s, u, c, f;
  const _ = [G0, F0], h = [];
  function d(p, T) {
    return (
      /*mode*/
      p[1] === "video" || /*streaming*/
      p[0] ? 0 : 1
    );
  }
  r = d(t), i = h[r] = _[r](t);
  let m = !/*recording*/
  t[6] && Jl(t), g = (
    /*options_open*/
    t[9] && Yl(t)
  );
  return {
    c() {
      e = De("div"), n = De("button"), i.c(), o = bn(), m && m.c(), a = bn(), g && g.c(), s = el(), se(n, "aria-label", l = /*mode*/
      t[1] === "image" ? "capture photo" : "start recording"), se(n, "class", "svelte-8hqvb6"), se(e, "class", "button-wrap svelte-8hqvb6");
    },
    m(p, T) {
      Pe(p, e, T), rt(e, n), h[r].m(n, null), rt(e, o), m && m.m(e, null), Pe(p, a, T), g && g.m(p, T), Pe(p, s, T), u = !0, c || (f = _r(
        n,
        "click",
        /*record_video_or_photo*/
        t[11]
      ), c = !0);
    },
    p(p, T) {
      let v = r;
      r = d(p), r === v ? h[r].p(p, T) : (gn(), we(h[v], 1, 1, () => {
        h[v] = null;
      }), pn(), i = h[r], i ? i.p(p, T) : (i = h[r] = _[r](p), i.c()), _e(i, 1), i.m(n, null)), (!u || T[0] & /*mode*/
      2 && l !== (l = /*mode*/
      p[1] === "image" ? "capture photo" : "start recording")) && se(n, "aria-label", l), /*recording*/
      p[6] ? m && (gn(), we(m, 1, 1, () => {
        m = null;
      }), pn()) : m ? (m.p(p, T), T[0] & /*recording*/
      64 && _e(m, 1)) : (m = Jl(p), m.c(), _e(m, 1), m.m(e, null)), /*options_open*/
      p[9] ? g ? (g.p(p, T), T[0] & /*options_open*/
      512 && _e(g, 1)) : (g = Yl(p), g.c(), _e(g, 1), g.m(s.parentNode, s)) : g && (gn(), we(g, 1, 1, () => {
        g = null;
      }), pn());
    },
    i(p) {
      u || (_e(i), _e(m), _e(g), u = !0);
    },
    o(p) {
      we(i), we(m), we(g), u = !1;
    },
    d(p) {
      p && (He(e), He(a), He(s)), h[r].d(), m && m.d(), g && g.d(p), c = !1, f();
    }
  };
}
function q0(t) {
  let e, n, r, i;
  return n = new p0({}), n.$on(
    "click",
    /*click_handler*/
    t[19]
  ), {
    c() {
      e = De("div"), Kt(n.$$.fragment), se(e, "title", "grant webcam access");
    },
    m(l, o) {
      Pe(l, e, o), en(n, e, null), i = !0;
    },
    p: tl,
    i(l) {
      i || (_e(n.$$.fragment, l), l && (r || B0(() => {
        r = P0(e, S0, { delay: 100, duration: 200 }), r.start();
      })), i = !0);
    },
    o(l) {
      we(n.$$.fragment, l), i = !1;
    },
    d(l) {
      l && He(e), $t(n);
    }
  };
}
function F0(t) {
  let e, n, r;
  return n = new Fu({}), {
    c() {
      e = De("div"), Kt(n.$$.fragment), se(e, "class", "icon svelte-8hqvb6"), se(e, "title", "capture photo");
    },
    m(i, l) {
      Pe(i, e, l), en(n, e, null), r = !0;
    },
    p: tl,
    i(i) {
      r || (_e(n.$$.fragment, i), r = !0);
    },
    o(i) {
      we(n.$$.fragment, i), r = !1;
    },
    d(i) {
      i && He(e), $t(n);
    }
  };
}
function G0(t) {
  let e, n, r, i;
  const l = [z0, j0], o = [];
  function a(s, u) {
    return (
      /*recording*/
      s[6] ? 0 : 1
    );
  }
  return e = a(t), n = o[e] = l[e](t), {
    c() {
      n.c(), r = el();
    },
    m(s, u) {
      o[e].m(s, u), Pe(s, r, u), i = !0;
    },
    p(s, u) {
      let c = e;
      e = a(s), e !== c && (gn(), we(o[c], 1, 1, () => {
        o[c] = null;
      }), pn(), n = o[e], n || (n = o[e] = l[e](s), n.c()), _e(n, 1), n.m(r.parentNode, r));
    },
    i(s) {
      i || (_e(n), i = !0);
    },
    o(s) {
      we(n), i = !1;
    },
    d(s) {
      s && He(r), o[e].d(s);
    }
  };
}
function j0(t) {
  let e, n, r;
  return n = new Zu({}), {
    c() {
      e = De("div"), Kt(n.$$.fragment), se(e, "class", "icon red svelte-8hqvb6"), se(e, "title", "start recording");
    },
    m(i, l) {
      Pe(i, e, l), en(n, e, null), r = !0;
    },
    i(i) {
      r || (_e(n.$$.fragment, i), r = !0);
    },
    o(i) {
      we(n.$$.fragment, i), r = !1;
    },
    d(i) {
      i && He(e), $t(n);
    }
  };
}
function z0(t) {
  let e, n, r;
  return n = new of({}), {
    c() {
      e = De("div"), Kt(n.$$.fragment), se(e, "class", "icon red svelte-8hqvb6"), se(e, "title", "stop recording");
    },
    m(i, l) {
      Pe(i, e, l), en(n, e, null), r = !0;
    },
    i(i) {
      r || (_e(n.$$.fragment, i), r = !0);
    },
    o(i) {
      we(n.$$.fragment, i), r = !1;
    },
    d(i) {
      i && He(e), $t(n);
    }
  };
}
function Jl(t) {
  let e, n, r, i, l;
  return n = new ts({}), {
    c() {
      e = De("button"), Kt(n.$$.fragment), se(e, "class", "icon svelte-8hqvb6"), se(e, "aria-label", "select input source");
    },
    m(o, a) {
      Pe(o, e, a), en(n, e, null), r = !0, i || (l = _r(
        e,
        "click",
        /*select_source*/
        t[12]
      ), i = !0);
    },
    p: tl,
    i(o) {
      r || (_e(n.$$.fragment, o), r = !0);
    },
    o(o) {
      we(n.$$.fragment, o), r = !1;
    },
    d(o) {
      o && He(e), $t(n), i = !1, l();
    }
  };
}
function Yl(t) {
  let e, n, r, i, l, o, a;
  r = new ts({});
  function s(f, _) {
    return (
      /*video_sources*/
      f[8].length === 0 ? x0 : V0
    );
  }
  let u = s(t), c = u(t);
  return {
    c() {
      e = De("select"), n = De("button"), Kt(r.$$.fragment), i = bn(), c.c(), se(n, "class", "inset-icon svelte-8hqvb6"), se(e, "class", "select-wrap svelte-8hqvb6"), se(e, "aria-label", "select source");
    },
    m(f, _) {
      Pe(f, e, _), rt(e, n), en(r, n, null), rt(n, i), c.m(e, null), l = !0, o || (a = [
        _r(n, "click", M0(
          /*click_handler_1*/
          t[20]
        )),
        A0(nl.call(
          null,
          e,
          /*handle_click_outside*/
          t[14]
        ))
      ], o = !0);
    },
    p(f, _) {
      u === (u = s(f)) && c ? c.p(f, _) : (c.d(1), c = u(f), c && (c.c(), c.m(e, null)));
    },
    i(f) {
      l || (_e(r.$$.fragment, f), l = !0);
    },
    o(f) {
      we(r.$$.fragment, f), l = !1;
    },
    d(f) {
      f && He(e), $t(r), c.d(), o = !1, L0(a);
    }
  };
}
function V0(t) {
  let e, n = Wl(
    /*video_sources*/
    t[8]
  ), r = [];
  for (let i = 0; i < n.length; i += 1)
    r[i] = Ql(Zl(t, n, i));
  return {
    c() {
      for (let i = 0; i < r.length; i += 1)
        r[i].c();
      e = el();
    },
    m(i, l) {
      for (let o = 0; o < r.length; o += 1)
        r[o] && r[o].m(i, l);
      Pe(i, e, l);
    },
    p(i, l) {
      if (l[0] & /*video_sources, selectVideoSource*/
      8448) {
        n = Wl(
          /*video_sources*/
          i[8]
        );
        let o;
        for (o = 0; o < n.length; o += 1) {
          const a = Zl(i, n, o);
          r[o] ? r[o].p(a, l) : (r[o] = Ql(a), r[o].c(), r[o].m(e.parentNode, e));
        }
        for (; o < r.length; o += 1)
          r[o].d(1);
        r.length = n.length;
      }
    },
    d(i) {
      i && He(e), N0(r, i);
    }
  };
}
function x0(t) {
  let e, n = (
    /*i18n*/
    t[3]("common.no_devices") + ""
  ), r;
  return {
    c() {
      e = De("option"), r = Ps(n), e.__value = "", Li(e, e.__value), se(e, "class", "svelte-8hqvb6");
    },
    m(i, l) {
      Pe(i, e, l), rt(e, r);
    },
    p(i, l) {
      l[0] & /*i18n*/
      8 && n !== (n = /*i18n*/
      i[3]("common.no_devices") + "") && Hs(r, n);
    },
    d(i) {
      i && He(e);
    }
  };
}
function Ql(t) {
  let e, n = (
    /*source*/
    t[31].label + ""
  ), r, i, l, o, a;
  function s() {
    return (
      /*click_handler_2*/
      t[21](
        /*source*/
        t[31]
      )
    );
  }
  return {
    c() {
      e = De("option"), r = Ps(n), i = bn(), e.__value = l = `
							` + /*source*/
      t[31].label + `
						`, Li(e, e.__value), se(e, "class", "svelte-8hqvb6");
    },
    m(u, c) {
      Pe(u, e, c), rt(e, r), rt(e, i), o || (a = _r(e, "click", s), o = !0);
    },
    p(u, c) {
      t = u, c[0] & /*video_sources*/
      256 && n !== (n = /*source*/
      t[31].label + "") && Hs(r, n), c[0] & /*video_sources*/
      256 && l !== (l = `
							` + /*source*/
      t[31].label + `
						`) && (e.__value = l, Li(e, e.__value));
    },
    d(u) {
      u && He(e), o = !1, a();
    }
  };
}
function X0(t) {
  let e, n, r, i, l, o;
  const a = [q0, U0], s = [];
  function u(c, f) {
    return (
      /*webcam_accessed*/
      c[7] ? 1 : 0
    );
  }
  return i = u(t), l = s[i] = a[i](t), {
    c() {
      e = De("div"), n = De("video"), r = bn(), l.c(), se(n, "class", "svelte-8hqvb6"), Mn(
        n,
        "flip",
        /*mirror_webcam*/
        t[2]
      ), Mn(n, "hide", !/*webcam_accessed*/
      t[7]), se(e, "class", "wrap svelte-8hqvb6");
    },
    m(c, f) {
      Pe(c, e, f), rt(e, n), t[18](n), rt(e, r), s[i].m(e, null), o = !0;
    },
    p(c, f) {
      (!o || f[0] & /*mirror_webcam*/
      4) && Mn(
        n,
        "flip",
        /*mirror_webcam*/
        c[2]
      ), (!o || f[0] & /*webcam_accessed*/
      128) && Mn(n, "hide", !/*webcam_accessed*/
      c[7]);
      let _ = i;
      i = u(c), i === _ ? s[i].p(c, f) : (gn(), we(s[_], 1, 1, () => {
        s[_] = null;
      }), pn(), l = s[i], l ? l.p(c, f) : (l = s[i] = a[i](c), l.c()), _e(l, 1), l.m(e, null));
    },
    i(c) {
      o || (_e(l), o = !0);
    },
    o(c) {
      we(l), o = !1;
    },
    d(c) {
      c && He(e), t[18](null), s[i].d();
    }
  };
}
async function W0(t) {
  let e, n = t[0], r = 1;
  for (; r < t.length; ) {
    const i = t[r], l = t[r + 1];
    if (r += 2, (i === "optionalAccess" || i === "optionalCall") && n == null)
      return;
    i === "access" || i === "optionalAccess" ? (e = n, n = await l(n)) : (i === "call" || i === "optionalCall") && (n = await l((...o) => n.call(e, ...o)), e = void 0);
  }
  return n;
}
function nl(t, e) {
  const n = (r) => {
    t && !t.contains(r.target) && !r.defaultPrevented && e(r);
  };
  return document.addEventListener("click", n, !0), {
    destroy() {
      document.removeEventListener("click", n, !0);
    }
  };
}
function Z0(t, e, n) {
  let r, i, { streaming: l = !1 } = e, { pending: o = !1 } = e, { root: a = "" } = e, { mode: s = "image" } = e, { mirror_webcam: u } = e, { include_audio: c } = e, { i18n: f } = e;
  const _ = R0();
  D0(() => i = document.createElement("canvas"));
  const h = {
    width: { ideal: 1920 },
    height: { ideal: 1440 }
  };
  async function d(H) {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      _("error", f("image.no_webcam_support"));
      return;
    }
    try {
      T = await navigator.mediaDevices.getUserMedia({
        video: H ? { deviceId: { exact: H }, ...h } : h,
        audio: c
      }), n(5, r.srcObject = T, r), n(5, r.muted = !0, r), r.play(), n(7, y = !0);
    } catch (x) {
      if (x instanceof DOMException && x.name == "NotAllowedError")
        _("error", f("image.allow_webcam_access"));
      else
        throw x;
    }
  }
  function m() {
    var H = i.getContext("2d");
    (!l || l && g) && r.videoWidth && r.videoHeight && (i.width = r.videoWidth, i.height = r.videoHeight, H.drawImage(r, 0, 0, r.videoWidth, r.videoHeight), u && (H.scale(-1, 1), H.drawImage(r, -r.videoWidth, 0)), i.toBlob(
      (x) => {
        _(l ? "stream" : "capture", x);
      },
      "image/png",
      0.8
    ));
  }
  let g = !1, p = [], T, v, B;
  function N() {
    if (g) {
      B.stop();
      let H = new Blob(p, { type: v }), x = new FileReader();
      x.onload = async function(ye) {
        if (ye.target) {
          let E = new File([H], "sample." + v.substring(6));
          const b = await ks([E]);
          let I = (await W0([
            await Es(b, a),
            "optionalAccess",
            async (w) => w.filter,
            "call",
            async (w) => w(Boolean)
          ]))[0];
          _("capture", I), _("stop_recording");
        }
      }, x.readAsDataURL(H);
    } else {
      _("start_recording"), p = [];
      let H = ["video/webm", "video/mp4"];
      for (let x of H)
        if (MediaRecorder.isTypeSupported(x)) {
          v = x;
          break;
        }
      if (v === null) {
        console.error("No supported MediaRecorder mimeType");
        return;
      }
      B = new MediaRecorder(T, { mimeType: v }), B.addEventListener("dataavailable", function(x) {
        p.push(x.data);
      }), B.start(200);
    }
    n(6, g = !g);
  }
  let y = !1;
  function W() {
    s === "image" && l && n(6, g = !g), s === "image" ? m() : N(), !g && T && (T.getTracks().forEach((H) => H.stop()), n(5, r.srcObject = null, r), n(7, y = !1));
  }
  l && s === "image" && window.setInterval(
    () => {
      r && !o && m();
    },
    500
  );
  async function k() {
    const H = await navigator.mediaDevices.enumerateDevices();
    n(8, L = H.filter((x) => x.kind === "videoinput")), n(9, R = !0);
  }
  let L = [];
  async function q(H) {
    await d(H), n(9, R = !1);
  }
  let R = !1;
  function ee(H) {
    H.preventDefault(), H.stopPropagation(), n(9, R = !1);
  }
  function D(H) {
    H0[H ? "unshift" : "push"](() => {
      r = H, n(5, r);
    });
  }
  const ae = async () => d(), Z = () => n(9, R = !1), ve = (H) => q(H.deviceId);
  return t.$$set = (H) => {
    "streaming" in H && n(0, l = H.streaming), "pending" in H && n(15, o = H.pending), "root" in H && n(16, a = H.root), "mode" in H && n(1, s = H.mode), "mirror_webcam" in H && n(2, u = H.mirror_webcam), "include_audio" in H && n(17, c = H.include_audio), "i18n" in H && n(3, f = H.i18n);
  }, [
    l,
    s,
    u,
    f,
    nl,
    r,
    g,
    y,
    L,
    R,
    d,
    W,
    k,
    q,
    ee,
    o,
    a,
    c,
    D,
    ae,
    Z,
    ve
  ];
}
class J0 extends T0 {
  constructor(e) {
    super(), I0(
      this,
      e,
      Z0,
      X0,
      O0,
      {
        streaming: 0,
        pending: 15,
        root: 16,
        mode: 1,
        mirror_webcam: 2,
        include_audio: 17,
        i18n: 3,
        click_outside: 4
      },
      null,
      [-1, -1]
    );
  }
  get click_outside() {
    return nl;
  }
}
function Y0(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Q0 = function(e) {
  return K0(e) && !$0(e);
};
function K0(t) {
  return !!t && typeof t == "object";
}
function $0(t) {
  var e = Object.prototype.toString.call(t);
  return e === "[object RegExp]" || e === "[object Date]" || nh(t);
}
var eh = typeof Symbol == "function" && Symbol.for, th = eh ? Symbol.for("react.element") : 60103;
function nh(t) {
  return t.$$typeof === th;
}
function rh(t) {
  return Array.isArray(t) ? [] : {};
}
function wn(t, e) {
  return e.clone !== !1 && e.isMergeableObject(t) ? Ft(rh(t), t, e) : t;
}
function ih(t, e, n) {
  return t.concat(e).map(function(r) {
    return wn(r, n);
  });
}
function lh(t, e) {
  if (!e.customMerge)
    return Ft;
  var n = e.customMerge(t);
  return typeof n == "function" ? n : Ft;
}
function oh(t) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(t).filter(function(e) {
    return Object.propertyIsEnumerable.call(t, e);
  }) : [];
}
function Kl(t) {
  return Object.keys(t).concat(oh(t));
}
function Ns(t, e) {
  try {
    return e in t;
  } catch {
    return !1;
  }
}
function sh(t, e) {
  return Ns(t, e) && !(Object.hasOwnProperty.call(t, e) && Object.propertyIsEnumerable.call(t, e));
}
function ah(t, e, n) {
  var r = {};
  return n.isMergeableObject(t) && Kl(t).forEach(function(i) {
    r[i] = wn(t[i], n);
  }), Kl(e).forEach(function(i) {
    sh(t, i) || (Ns(t, i) && n.isMergeableObject(e[i]) ? r[i] = lh(i, n)(t[i], e[i], n) : r[i] = wn(e[i], n));
  }), r;
}
function Ft(t, e, n) {
  n = n || {}, n.arrayMerge = n.arrayMerge || ih, n.isMergeableObject = n.isMergeableObject || Q0, n.cloneUnlessOtherwiseSpecified = wn;
  var r = Array.isArray(e), i = Array.isArray(t), l = r === i;
  return l ? r ? n.arrayMerge(t, e, n) : ah(t, e, n) : wn(e, n);
}
Ft.all = function(e, n) {
  if (!Array.isArray(e))
    throw new Error("first argument should be an array");
  return e.reduce(function(r, i) {
    return Ft(r, i, n);
  }, {});
};
var uh = Ft, ch = uh;
const fh = /* @__PURE__ */ Y0(ch);
var Oi = function(t, e) {
  return Oi = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, r) {
    n.__proto__ = r;
  } || function(n, r) {
    for (var i in r)
      Object.prototype.hasOwnProperty.call(r, i) && (n[i] = r[i]);
  }, Oi(t, e);
};
function hr(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  Oi(t, e);
  function n() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
}
var V = function() {
  return V = Object.assign || function(e) {
    for (var n, r = 1, i = arguments.length; r < i; r++) {
      n = arguments[r];
      for (var l in n)
        Object.prototype.hasOwnProperty.call(n, l) && (e[l] = n[l]);
    }
    return e;
  }, V.apply(this, arguments);
};
function ni(t, e, n) {
  if (n || arguments.length === 2)
    for (var r = 0, i = e.length, l; r < i; r++)
      (l || !(r in e)) && (l || (l = Array.prototype.slice.call(e, 0, r)), l[r] = e[r]);
  return t.concat(l || Array.prototype.slice.call(e));
}
var U;
(function(t) {
  t[t.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", t[t.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", t[t.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", t[t.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", t[t.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", t[t.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", t[t.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", t[t.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", t[t.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", t[t.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", t[t.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", t[t.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", t[t.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", t[t.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", t[t.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", t[t.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", t[t.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", t[t.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", t[t.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", t[t.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", t[t.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", t[t.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", t[t.INVALID_TAG = 23] = "INVALID_TAG", t[t.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", t[t.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", t[t.UNCLOSED_TAG = 27] = "UNCLOSED_TAG";
})(U || (U = {}));
var $;
(function(t) {
  t[t.literal = 0] = "literal", t[t.argument = 1] = "argument", t[t.number = 2] = "number", t[t.date = 3] = "date", t[t.time = 4] = "time", t[t.select = 5] = "select", t[t.plural = 6] = "plural", t[t.pound = 7] = "pound", t[t.tag = 8] = "tag";
})($ || ($ = {}));
var Gt;
(function(t) {
  t[t.number = 0] = "number", t[t.dateTime = 1] = "dateTime";
})(Gt || (Gt = {}));
function $l(t) {
  return t.type === $.literal;
}
function _h(t) {
  return t.type === $.argument;
}
function Is(t) {
  return t.type === $.number;
}
function Ls(t) {
  return t.type === $.date;
}
function Os(t) {
  return t.type === $.time;
}
function Ms(t) {
  return t.type === $.select;
}
function Rs(t) {
  return t.type === $.plural;
}
function hh(t) {
  return t.type === $.pound;
}
function Ds(t) {
  return t.type === $.tag;
}
function Us(t) {
  return !!(t && typeof t == "object" && t.type === Gt.number);
}
function Mi(t) {
  return !!(t && typeof t == "object" && t.type === Gt.dateTime);
}
var qs = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/, dh = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
function mh(t) {
  var e = {};
  return t.replace(dh, function(n) {
    var r = n.length;
    switch (n[0]) {
      case "G":
        e.era = r === 4 ? "long" : r === 5 ? "narrow" : "short";
        break;
      case "y":
        e.year = r === 2 ? "2-digit" : "numeric";
        break;
      case "Y":
      case "u":
      case "U":
      case "r":
        throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");
      case "q":
      case "Q":
        throw new RangeError("`q/Q` (quarter) patterns are not supported");
      case "M":
      case "L":
        e.month = ["numeric", "2-digit", "short", "long", "narrow"][r - 1];
        break;
      case "w":
      case "W":
        throw new RangeError("`w/W` (week) patterns are not supported");
      case "d":
        e.day = ["numeric", "2-digit"][r - 1];
        break;
      case "D":
      case "F":
      case "g":
        throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
      case "E":
        e.weekday = r === 4 ? "short" : r === 5 ? "narrow" : "short";
        break;
      case "e":
        if (r < 4)
          throw new RangeError("`e..eee` (weekday) patterns are not supported");
        e.weekday = ["short", "long", "narrow", "short"][r - 4];
        break;
      case "c":
        if (r < 4)
          throw new RangeError("`c..ccc` (weekday) patterns are not supported");
        e.weekday = ["short", "long", "narrow", "short"][r - 4];
        break;
      case "a":
        e.hour12 = !0;
        break;
      case "b":
      case "B":
        throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");
      case "h":
        e.hourCycle = "h12", e.hour = ["numeric", "2-digit"][r - 1];
        break;
      case "H":
        e.hourCycle = "h23", e.hour = ["numeric", "2-digit"][r - 1];
        break;
      case "K":
        e.hourCycle = "h11", e.hour = ["numeric", "2-digit"][r - 1];
        break;
      case "k":
        e.hourCycle = "h24", e.hour = ["numeric", "2-digit"][r - 1];
        break;
      case "j":
      case "J":
      case "C":
        throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
      case "m":
        e.minute = ["numeric", "2-digit"][r - 1];
        break;
      case "s":
        e.second = ["numeric", "2-digit"][r - 1];
        break;
      case "S":
      case "A":
        throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");
      case "z":
        e.timeZoneName = r < 4 ? "short" : "long";
        break;
      case "Z":
      case "O":
      case "v":
      case "V":
      case "X":
      case "x":
        throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead");
    }
    return "";
  }), e;
}
var ph = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
function gh(t) {
  if (t.length === 0)
    throw new Error("Number skeleton cannot be empty");
  for (var e = t.split(ph).filter(function(_) {
    return _.length > 0;
  }), n = [], r = 0, i = e; r < i.length; r++) {
    var l = i[r], o = l.split("/");
    if (o.length === 0)
      throw new Error("Invalid number skeleton");
    for (var a = o[0], s = o.slice(1), u = 0, c = s; u < c.length; u++) {
      var f = c[u];
      if (f.length === 0)
        throw new Error("Invalid number skeleton");
    }
    n.push({ stem: a, options: s });
  }
  return n;
}
function bh(t) {
  return t.replace(/^(.*?)-/, "");
}
var eo = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g, Fs = /^(@+)?(\+|#+)?[rs]?$/g, wh = /(\*)(0+)|(#+)(0+)|(0+)/g, Gs = /^(0+)$/;
function to(t) {
  var e = {};
  return t[t.length - 1] === "r" ? e.roundingPriority = "morePrecision" : t[t.length - 1] === "s" && (e.roundingPriority = "lessPrecision"), t.replace(Fs, function(n, r, i) {
    return typeof i != "string" ? (e.minimumSignificantDigits = r.length, e.maximumSignificantDigits = r.length) : i === "+" ? e.minimumSignificantDigits = r.length : r[0] === "#" ? e.maximumSignificantDigits = r.length : (e.minimumSignificantDigits = r.length, e.maximumSignificantDigits = r.length + (typeof i == "string" ? i.length : 0)), "";
  }), e;
}
function js(t) {
  switch (t) {
    case "sign-auto":
      return {
        signDisplay: "auto"
      };
    case "sign-accounting":
    case "()":
      return {
        currencySign: "accounting"
      };
    case "sign-always":
    case "+!":
      return {
        signDisplay: "always"
      };
    case "sign-accounting-always":
    case "()!":
      return {
        signDisplay: "always",
        currencySign: "accounting"
      };
    case "sign-except-zero":
    case "+?":
      return {
        signDisplay: "exceptZero"
      };
    case "sign-accounting-except-zero":
    case "()?":
      return {
        signDisplay: "exceptZero",
        currencySign: "accounting"
      };
    case "sign-never":
    case "+_":
      return {
        signDisplay: "never"
      };
  }
}
function vh(t) {
  var e;
  if (t[0] === "E" && t[1] === "E" ? (e = {
    notation: "engineering"
  }, t = t.slice(2)) : t[0] === "E" && (e = {
    notation: "scientific"
  }, t = t.slice(1)), e) {
    var n = t.slice(0, 2);
    if (n === "+!" ? (e.signDisplay = "always", t = t.slice(2)) : n === "+?" && (e.signDisplay = "exceptZero", t = t.slice(2)), !Gs.test(t))
      throw new Error("Malformed concise eng/scientific notation");
    e.minimumIntegerDigits = t.length;
  }
  return e;
}
function no(t) {
  var e = {}, n = js(t);
  return n || e;
}
function yh(t) {
  for (var e = {}, n = 0, r = t; n < r.length; n++) {
    var i = r[n];
    switch (i.stem) {
      case "percent":
      case "%":
        e.style = "percent";
        continue;
      case "%x100":
        e.style = "percent", e.scale = 100;
        continue;
      case "currency":
        e.style = "currency", e.currency = i.options[0];
        continue;
      case "group-off":
      case ",_":
        e.useGrouping = !1;
        continue;
      case "precision-integer":
      case ".":
        e.maximumFractionDigits = 0;
        continue;
      case "measure-unit":
      case "unit":
        e.style = "unit", e.unit = bh(i.options[0]);
        continue;
      case "compact-short":
      case "K":
        e.notation = "compact", e.compactDisplay = "short";
        continue;
      case "compact-long":
      case "KK":
        e.notation = "compact", e.compactDisplay = "long";
        continue;
      case "scientific":
        e = V(V(V({}, e), { notation: "scientific" }), i.options.reduce(function(s, u) {
          return V(V({}, s), no(u));
        }, {}));
        continue;
      case "engineering":
        e = V(V(V({}, e), { notation: "engineering" }), i.options.reduce(function(s, u) {
          return V(V({}, s), no(u));
        }, {}));
        continue;
      case "notation-simple":
        e.notation = "standard";
        continue;
      case "unit-width-narrow":
        e.currencyDisplay = "narrowSymbol", e.unitDisplay = "narrow";
        continue;
      case "unit-width-short":
        e.currencyDisplay = "code", e.unitDisplay = "short";
        continue;
      case "unit-width-full-name":
        e.currencyDisplay = "name", e.unitDisplay = "long";
        continue;
      case "unit-width-iso-code":
        e.currencyDisplay = "symbol";
        continue;
      case "scale":
        e.scale = parseFloat(i.options[0]);
        continue;
      case "integer-width":
        if (i.options.length > 1)
          throw new RangeError("integer-width stems only accept a single optional option");
        i.options[0].replace(wh, function(s, u, c, f, _, h) {
          if (u)
            e.minimumIntegerDigits = c.length;
          else {
            if (f && _)
              throw new Error("We currently do not support maximum integer digits");
            if (h)
              throw new Error("We currently do not support exact integer digits");
          }
          return "";
        });
        continue;
    }
    if (Gs.test(i.stem)) {
      e.minimumIntegerDigits = i.stem.length;
      continue;
    }
    if (eo.test(i.stem)) {
      if (i.options.length > 1)
        throw new RangeError("Fraction-precision stems only accept a single optional option");
      i.stem.replace(eo, function(s, u, c, f, _, h) {
        return c === "*" ? e.minimumFractionDigits = u.length : f && f[0] === "#" ? e.maximumFractionDigits = f.length : _ && h ? (e.minimumFractionDigits = _.length, e.maximumFractionDigits = _.length + h.length) : (e.minimumFractionDigits = u.length, e.maximumFractionDigits = u.length), "";
      });
      var l = i.options[0];
      l === "w" ? e = V(V({}, e), { trailingZeroDisplay: "stripIfInteger" }) : l && (e = V(V({}, e), to(l)));
      continue;
    }
    if (Fs.test(i.stem)) {
      e = V(V({}, e), to(i.stem));
      continue;
    }
    var o = js(i.stem);
    o && (e = V(V({}, e), o));
    var a = vh(i.stem);
    a && (e = V(V({}, e), a));
  }
  return e;
}
var Rn = {
  AX: [
    "H"
  ],
  BQ: [
    "H"
  ],
  CP: [
    "H"
  ],
  CZ: [
    "H"
  ],
  DK: [
    "H"
  ],
  FI: [
    "H"
  ],
  ID: [
    "H"
  ],
  IS: [
    "H"
  ],
  ML: [
    "H"
  ],
  NE: [
    "H"
  ],
  RU: [
    "H"
  ],
  SE: [
    "H"
  ],
  SJ: [
    "H"
  ],
  SK: [
    "H"
  ],
  AS: [
    "h",
    "H"
  ],
  BT: [
    "h",
    "H"
  ],
  DJ: [
    "h",
    "H"
  ],
  ER: [
    "h",
    "H"
  ],
  GH: [
    "h",
    "H"
  ],
  IN: [
    "h",
    "H"
  ],
  LS: [
    "h",
    "H"
  ],
  PG: [
    "h",
    "H"
  ],
  PW: [
    "h",
    "H"
  ],
  SO: [
    "h",
    "H"
  ],
  TO: [
    "h",
    "H"
  ],
  VU: [
    "h",
    "H"
  ],
  WS: [
    "h",
    "H"
  ],
  "001": [
    "H",
    "h"
  ],
  AL: [
    "h",
    "H",
    "hB"
  ],
  TD: [
    "h",
    "H",
    "hB"
  ],
  "ca-ES": [
    "H",
    "h",
    "hB"
  ],
  CF: [
    "H",
    "h",
    "hB"
  ],
  CM: [
    "H",
    "h",
    "hB"
  ],
  "fr-CA": [
    "H",
    "h",
    "hB"
  ],
  "gl-ES": [
    "H",
    "h",
    "hB"
  ],
  "it-CH": [
    "H",
    "h",
    "hB"
  ],
  "it-IT": [
    "H",
    "h",
    "hB"
  ],
  LU: [
    "H",
    "h",
    "hB"
  ],
  NP: [
    "H",
    "h",
    "hB"
  ],
  PF: [
    "H",
    "h",
    "hB"
  ],
  SC: [
    "H",
    "h",
    "hB"
  ],
  SM: [
    "H",
    "h",
    "hB"
  ],
  SN: [
    "H",
    "h",
    "hB"
  ],
  TF: [
    "H",
    "h",
    "hB"
  ],
  VA: [
    "H",
    "h",
    "hB"
  ],
  CY: [
    "h",
    "H",
    "hb",
    "hB"
  ],
  GR: [
    "h",
    "H",
    "hb",
    "hB"
  ],
  CO: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  DO: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  KP: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  KR: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  NA: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  PA: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  PR: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  VE: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  AC: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  AI: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  BW: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  BZ: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  CC: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  CK: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  CX: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  DG: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  FK: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  GB: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  GG: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  GI: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  IE: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  IM: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  IO: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  JE: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  LT: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  MK: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  MN: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  MS: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  NF: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  NG: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  NR: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  NU: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  PN: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  SH: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  SX: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  TA: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  ZA: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  "af-ZA": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  AR: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  CL: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  CR: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  CU: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  EA: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "es-BO": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "es-BR": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "es-EC": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "es-ES": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "es-GQ": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "es-PE": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  GT: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  HN: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  IC: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  KG: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  KM: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  LK: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  MA: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  MX: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  NI: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  PY: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  SV: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  UY: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  JP: [
    "H",
    "h",
    "K"
  ],
  AD: [
    "H",
    "hB"
  ],
  AM: [
    "H",
    "hB"
  ],
  AO: [
    "H",
    "hB"
  ],
  AT: [
    "H",
    "hB"
  ],
  AW: [
    "H",
    "hB"
  ],
  BE: [
    "H",
    "hB"
  ],
  BF: [
    "H",
    "hB"
  ],
  BJ: [
    "H",
    "hB"
  ],
  BL: [
    "H",
    "hB"
  ],
  BR: [
    "H",
    "hB"
  ],
  CG: [
    "H",
    "hB"
  ],
  CI: [
    "H",
    "hB"
  ],
  CV: [
    "H",
    "hB"
  ],
  DE: [
    "H",
    "hB"
  ],
  EE: [
    "H",
    "hB"
  ],
  FR: [
    "H",
    "hB"
  ],
  GA: [
    "H",
    "hB"
  ],
  GF: [
    "H",
    "hB"
  ],
  GN: [
    "H",
    "hB"
  ],
  GP: [
    "H",
    "hB"
  ],
  GW: [
    "H",
    "hB"
  ],
  HR: [
    "H",
    "hB"
  ],
  IL: [
    "H",
    "hB"
  ],
  IT: [
    "H",
    "hB"
  ],
  KZ: [
    "H",
    "hB"
  ],
  MC: [
    "H",
    "hB"
  ],
  MD: [
    "H",
    "hB"
  ],
  MF: [
    "H",
    "hB"
  ],
  MQ: [
    "H",
    "hB"
  ],
  MZ: [
    "H",
    "hB"
  ],
  NC: [
    "H",
    "hB"
  ],
  NL: [
    "H",
    "hB"
  ],
  PM: [
    "H",
    "hB"
  ],
  PT: [
    "H",
    "hB"
  ],
  RE: [
    "H",
    "hB"
  ],
  RO: [
    "H",
    "hB"
  ],
  SI: [
    "H",
    "hB"
  ],
  SR: [
    "H",
    "hB"
  ],
  ST: [
    "H",
    "hB"
  ],
  TG: [
    "H",
    "hB"
  ],
  TR: [
    "H",
    "hB"
  ],
  WF: [
    "H",
    "hB"
  ],
  YT: [
    "H",
    "hB"
  ],
  BD: [
    "h",
    "hB",
    "H"
  ],
  PK: [
    "h",
    "hB",
    "H"
  ],
  AZ: [
    "H",
    "hB",
    "h"
  ],
  BA: [
    "H",
    "hB",
    "h"
  ],
  BG: [
    "H",
    "hB",
    "h"
  ],
  CH: [
    "H",
    "hB",
    "h"
  ],
  GE: [
    "H",
    "hB",
    "h"
  ],
  LI: [
    "H",
    "hB",
    "h"
  ],
  ME: [
    "H",
    "hB",
    "h"
  ],
  RS: [
    "H",
    "hB",
    "h"
  ],
  UA: [
    "H",
    "hB",
    "h"
  ],
  UZ: [
    "H",
    "hB",
    "h"
  ],
  XK: [
    "H",
    "hB",
    "h"
  ],
  AG: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  AU: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  BB: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  BM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  BS: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  CA: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  DM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  "en-001": [
    "h",
    "hb",
    "H",
    "hB"
  ],
  FJ: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  FM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  GD: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  GM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  GU: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  GY: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  JM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  KI: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  KN: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  KY: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  LC: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  LR: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  MH: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  MP: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  MW: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  NZ: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  SB: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  SG: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  SL: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  SS: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  SZ: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  TC: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  TT: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  UM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  US: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  VC: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  VG: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  VI: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  ZM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  BO: [
    "H",
    "hB",
    "h",
    "hb"
  ],
  EC: [
    "H",
    "hB",
    "h",
    "hb"
  ],
  ES: [
    "H",
    "hB",
    "h",
    "hb"
  ],
  GQ: [
    "H",
    "hB",
    "h",
    "hb"
  ],
  PE: [
    "H",
    "hB",
    "h",
    "hb"
  ],
  AE: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  "ar-001": [
    "h",
    "hB",
    "hb",
    "H"
  ],
  BH: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  DZ: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  EG: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  EH: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  HK: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  IQ: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  JO: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  KW: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  LB: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  LY: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  MO: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  MR: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  OM: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  PH: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  PS: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  QA: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  SA: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  SD: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  SY: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  TN: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  YE: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  AF: [
    "H",
    "hb",
    "hB",
    "h"
  ],
  LA: [
    "H",
    "hb",
    "hB",
    "h"
  ],
  CN: [
    "H",
    "hB",
    "hb",
    "h"
  ],
  LV: [
    "H",
    "hB",
    "hb",
    "h"
  ],
  TL: [
    "H",
    "hB",
    "hb",
    "h"
  ],
  "zu-ZA": [
    "H",
    "hB",
    "hb",
    "h"
  ],
  CD: [
    "hB",
    "H"
  ],
  IR: [
    "hB",
    "H"
  ],
  "hi-IN": [
    "hB",
    "h",
    "H"
  ],
  "kn-IN": [
    "hB",
    "h",
    "H"
  ],
  "ml-IN": [
    "hB",
    "h",
    "H"
  ],
  "te-IN": [
    "hB",
    "h",
    "H"
  ],
  KH: [
    "hB",
    "h",
    "H",
    "hb"
  ],
  "ta-IN": [
    "hB",
    "h",
    "hb",
    "H"
  ],
  BN: [
    "hb",
    "hB",
    "h",
    "H"
  ],
  MY: [
    "hb",
    "hB",
    "h",
    "H"
  ],
  ET: [
    "hB",
    "hb",
    "h",
    "H"
  ],
  "gu-IN": [
    "hB",
    "hb",
    "h",
    "H"
  ],
  "mr-IN": [
    "hB",
    "hb",
    "h",
    "H"
  ],
  "pa-IN": [
    "hB",
    "hb",
    "h",
    "H"
  ],
  TW: [
    "hB",
    "hb",
    "h",
    "H"
  ],
  KE: [
    "hB",
    "hb",
    "H",
    "h"
  ],
  MM: [
    "hB",
    "hb",
    "H",
    "h"
  ],
  TZ: [
    "hB",
    "hb",
    "H",
    "h"
  ],
  UG: [
    "hB",
    "hb",
    "H",
    "h"
  ]
};
function Eh(t, e) {
  for (var n = "", r = 0; r < t.length; r++) {
    var i = t.charAt(r);
    if (i === "j") {
      for (var l = 0; r + 1 < t.length && t.charAt(r + 1) === i; )
        l++, r++;
      var o = 1 + (l & 1), a = l < 2 ? 1 : 3 + (l >> 1), s = "a", u = kh(e);
      for ((u == "H" || u == "k") && (a = 0); a-- > 0; )
        n += s;
      for (; o-- > 0; )
        n = u + n;
    } else
      i === "J" ? n += "H" : n += i;
  }
  return n;
}
function kh(t) {
  var e = t.hourCycle;
  if (e === void 0 && // @ts-ignore hourCycle(s) is not identified yet
  t.hourCycles && // @ts-ignore
  t.hourCycles.length && (e = t.hourCycles[0]), e)
    switch (e) {
      case "h24":
        return "k";
      case "h23":
        return "H";
      case "h12":
        return "h";
      case "h11":
        return "K";
      default:
        throw new Error("Invalid hourCycle");
    }
  var n = t.language, r;
  n !== "root" && (r = t.maximize().region);
  var i = Rn[r || ""] || Rn[n || ""] || Rn["".concat(n, "-001")] || Rn["001"];
  return i[0];
}
var ri, Sh = new RegExp("^".concat(qs.source, "*")), Ch = new RegExp("".concat(qs.source, "*$"));
function F(t, e) {
  return { start: t, end: e };
}
var Th = !!String.prototype.startsWith, Ah = !!String.fromCodePoint, Bh = !!Object.fromEntries, Hh = !!String.prototype.codePointAt, Ph = !!String.prototype.trimStart, Nh = !!String.prototype.trimEnd, Ih = !!Number.isSafeInteger, Lh = Ih ? Number.isSafeInteger : function(t) {
  return typeof t == "number" && isFinite(t) && Math.floor(t) === t && Math.abs(t) <= 9007199254740991;
}, Ri = !0;
try {
  var Oh = Vs("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  Ri = ((ri = Oh.exec("a")) === null || ri === void 0 ? void 0 : ri[0]) === "a";
} catch {
  Ri = !1;
}
var ro = Th ? (
  // Native
  function(e, n, r) {
    return e.startsWith(n, r);
  }
) : (
  // For IE11
  function(e, n, r) {
    return e.slice(r, r + n.length) === n;
  }
), Di = Ah ? String.fromCodePoint : (
  // IE11
  function() {
    for (var e = [], n = 0; n < arguments.length; n++)
      e[n] = arguments[n];
    for (var r = "", i = e.length, l = 0, o; i > l; ) {
      if (o = e[l++], o > 1114111)
        throw RangeError(o + " is not a valid code point");
      r += o < 65536 ? String.fromCharCode(o) : String.fromCharCode(((o -= 65536) >> 10) + 55296, o % 1024 + 56320);
    }
    return r;
  }
), io = (
  // native
  Bh ? Object.fromEntries : (
    // Ponyfill
    function(e) {
      for (var n = {}, r = 0, i = e; r < i.length; r++) {
        var l = i[r], o = l[0], a = l[1];
        n[o] = a;
      }
      return n;
    }
  )
), zs = Hh ? (
  // Native
  function(e, n) {
    return e.codePointAt(n);
  }
) : (
  // IE 11
  function(e, n) {
    var r = e.length;
    if (!(n < 0 || n >= r)) {
      var i = e.charCodeAt(n), l;
      return i < 55296 || i > 56319 || n + 1 === r || (l = e.charCodeAt(n + 1)) < 56320 || l > 57343 ? i : (i - 55296 << 10) + (l - 56320) + 65536;
    }
  }
), Mh = Ph ? (
  // Native
  function(e) {
    return e.trimStart();
  }
) : (
  // Ponyfill
  function(e) {
    return e.replace(Sh, "");
  }
), Rh = Nh ? (
  // Native
  function(e) {
    return e.trimEnd();
  }
) : (
  // Ponyfill
  function(e) {
    return e.replace(Ch, "");
  }
);
function Vs(t, e) {
  return new RegExp(t, e);
}
var Ui;
if (Ri) {
  var lo = Vs("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  Ui = function(e, n) {
    var r;
    lo.lastIndex = n;
    var i = lo.exec(e);
    return (r = i[1]) !== null && r !== void 0 ? r : "";
  };
} else
  Ui = function(e, n) {
    for (var r = []; ; ) {
      var i = zs(e, n);
      if (i === void 0 || xs(i) || Fh(i))
        break;
      r.push(i), n += i >= 65536 ? 2 : 1;
    }
    return Di.apply(void 0, r);
  };
var Dh = (
  /** @class */
  function() {
    function t(e, n) {
      n === void 0 && (n = {}), this.message = e, this.position = { offset: 0, line: 1, column: 1 }, this.ignoreTag = !!n.ignoreTag, this.locale = n.locale, this.requiresOtherClause = !!n.requiresOtherClause, this.shouldParseSkeletons = !!n.shouldParseSkeletons;
    }
    return t.prototype.parse = function() {
      if (this.offset() !== 0)
        throw Error("parser can only be used once");
      return this.parseMessage(0, "", !1);
    }, t.prototype.parseMessage = function(e, n, r) {
      for (var i = []; !this.isEOF(); ) {
        var l = this.char();
        if (l === 123) {
          var o = this.parseArgument(e, r);
          if (o.err)
            return o;
          i.push(o.val);
        } else {
          if (l === 125 && e > 0)
            break;
          if (l === 35 && (n === "plural" || n === "selectordinal")) {
            var a = this.clonePosition();
            this.bump(), i.push({
              type: $.pound,
              location: F(a, this.clonePosition())
            });
          } else if (l === 60 && !this.ignoreTag && this.peek() === 47) {
            if (r)
              break;
            return this.error(U.UNMATCHED_CLOSING_TAG, F(this.clonePosition(), this.clonePosition()));
          } else if (l === 60 && !this.ignoreTag && qi(this.peek() || 0)) {
            var o = this.parseTag(e, n);
            if (o.err)
              return o;
            i.push(o.val);
          } else {
            var o = this.parseLiteral(e, n);
            if (o.err)
              return o;
            i.push(o.val);
          }
        }
      }
      return { val: i, err: null };
    }, t.prototype.parseTag = function(e, n) {
      var r = this.clonePosition();
      this.bump();
      var i = this.parseTagName();
      if (this.bumpSpace(), this.bumpIf("/>"))
        return {
          val: {
            type: $.literal,
            value: "<".concat(i, "/>"),
            location: F(r, this.clonePosition())
          },
          err: null
        };
      if (this.bumpIf(">")) {
        var l = this.parseMessage(e + 1, n, !0);
        if (l.err)
          return l;
        var o = l.val, a = this.clonePosition();
        if (this.bumpIf("</")) {
          if (this.isEOF() || !qi(this.char()))
            return this.error(U.INVALID_TAG, F(a, this.clonePosition()));
          var s = this.clonePosition(), u = this.parseTagName();
          return i !== u ? this.error(U.UNMATCHED_CLOSING_TAG, F(s, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
            val: {
              type: $.tag,
              value: i,
              children: o,
              location: F(r, this.clonePosition())
            },
            err: null
          } : this.error(U.INVALID_TAG, F(a, this.clonePosition())));
        } else
          return this.error(U.UNCLOSED_TAG, F(r, this.clonePosition()));
      } else
        return this.error(U.INVALID_TAG, F(r, this.clonePosition()));
    }, t.prototype.parseTagName = function() {
      var e = this.offset();
      for (this.bump(); !this.isEOF() && qh(this.char()); )
        this.bump();
      return this.message.slice(e, this.offset());
    }, t.prototype.parseLiteral = function(e, n) {
      for (var r = this.clonePosition(), i = ""; ; ) {
        var l = this.tryParseQuote(n);
        if (l) {
          i += l;
          continue;
        }
        var o = this.tryParseUnquoted(e, n);
        if (o) {
          i += o;
          continue;
        }
        var a = this.tryParseLeftAngleBracket();
        if (a) {
          i += a;
          continue;
        }
        break;
      }
      var s = F(r, this.clonePosition());
      return {
        val: { type: $.literal, value: i, location: s },
        err: null
      };
    }, t.prototype.tryParseLeftAngleBracket = function() {
      return !this.isEOF() && this.char() === 60 && (this.ignoreTag || // If at the opening tag or closing tag position, bail.
      !Uh(this.peek() || 0)) ? (this.bump(), "<") : null;
    }, t.prototype.tryParseQuote = function(e) {
      if (this.isEOF() || this.char() !== 39)
        return null;
      switch (this.peek()) {
        case 39:
          return this.bump(), this.bump(), "'";
        case 123:
        case 60:
        case 62:
        case 125:
          break;
        case 35:
          if (e === "plural" || e === "selectordinal")
            break;
          return null;
        default:
          return null;
      }
      this.bump();
      var n = [this.char()];
      for (this.bump(); !this.isEOF(); ) {
        var r = this.char();
        if (r === 39)
          if (this.peek() === 39)
            n.push(39), this.bump();
          else {
            this.bump();
            break;
          }
        else
          n.push(r);
        this.bump();
      }
      return Di.apply(void 0, n);
    }, t.prototype.tryParseUnquoted = function(e, n) {
      if (this.isEOF())
        return null;
      var r = this.char();
      return r === 60 || r === 123 || r === 35 && (n === "plural" || n === "selectordinal") || r === 125 && e > 0 ? null : (this.bump(), Di(r));
    }, t.prototype.parseArgument = function(e, n) {
      var r = this.clonePosition();
      if (this.bump(), this.bumpSpace(), this.isEOF())
        return this.error(U.EXPECT_ARGUMENT_CLOSING_BRACE, F(r, this.clonePosition()));
      if (this.char() === 125)
        return this.bump(), this.error(U.EMPTY_ARGUMENT, F(r, this.clonePosition()));
      var i = this.parseIdentifierIfPossible().value;
      if (!i)
        return this.error(U.MALFORMED_ARGUMENT, F(r, this.clonePosition()));
      if (this.bumpSpace(), this.isEOF())
        return this.error(U.EXPECT_ARGUMENT_CLOSING_BRACE, F(r, this.clonePosition()));
      switch (this.char()) {
        case 125:
          return this.bump(), {
            val: {
              type: $.argument,
              // value does not include the opening and closing braces.
              value: i,
              location: F(r, this.clonePosition())
            },
            err: null
          };
        case 44:
          return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(U.EXPECT_ARGUMENT_CLOSING_BRACE, F(r, this.clonePosition())) : this.parseArgumentOptions(e, n, i, r);
        default:
          return this.error(U.MALFORMED_ARGUMENT, F(r, this.clonePosition()));
      }
    }, t.prototype.parseIdentifierIfPossible = function() {
      var e = this.clonePosition(), n = this.offset(), r = Ui(this.message, n), i = n + r.length;
      this.bumpTo(i);
      var l = this.clonePosition(), o = F(e, l);
      return { value: r, location: o };
    }, t.prototype.parseArgumentOptions = function(e, n, r, i) {
      var l, o = this.clonePosition(), a = this.parseIdentifierIfPossible().value, s = this.clonePosition();
      switch (a) {
        case "":
          return this.error(U.EXPECT_ARGUMENT_TYPE, F(o, s));
        case "number":
        case "date":
        case "time": {
          this.bumpSpace();
          var u = null;
          if (this.bumpIf(",")) {
            this.bumpSpace();
            var c = this.clonePosition(), f = this.parseSimpleArgStyleIfPossible();
            if (f.err)
              return f;
            var _ = Rh(f.val);
            if (_.length === 0)
              return this.error(U.EXPECT_ARGUMENT_STYLE, F(this.clonePosition(), this.clonePosition()));
            var h = F(c, this.clonePosition());
            u = { style: _, styleLocation: h };
          }
          var d = this.tryParseArgumentClose(i);
          if (d.err)
            return d;
          var m = F(i, this.clonePosition());
          if (u && ro(u == null ? void 0 : u.style, "::", 0)) {
            var g = Mh(u.style.slice(2));
            if (a === "number") {
              var f = this.parseNumberSkeletonFromString(g, u.styleLocation);
              return f.err ? f : {
                val: { type: $.number, value: r, location: m, style: f.val },
                err: null
              };
            } else {
              if (g.length === 0)
                return this.error(U.EXPECT_DATE_TIME_SKELETON, m);
              var p = g;
              this.locale && (p = Eh(g, this.locale));
              var _ = {
                type: Gt.dateTime,
                pattern: p,
                location: u.styleLocation,
                parsedOptions: this.shouldParseSkeletons ? mh(p) : {}
              }, T = a === "date" ? $.date : $.time;
              return {
                val: { type: T, value: r, location: m, style: _ },
                err: null
              };
            }
          }
          return {
            val: {
              type: a === "number" ? $.number : a === "date" ? $.date : $.time,
              value: r,
              location: m,
              style: (l = u == null ? void 0 : u.style) !== null && l !== void 0 ? l : null
            },
            err: null
          };
        }
        case "plural":
        case "selectordinal":
        case "select": {
          var v = this.clonePosition();
          if (this.bumpSpace(), !this.bumpIf(","))
            return this.error(U.EXPECT_SELECT_ARGUMENT_OPTIONS, F(v, V({}, v)));
          this.bumpSpace();
          var B = this.parseIdentifierIfPossible(), N = 0;
          if (a !== "select" && B.value === "offset") {
            if (!this.bumpIf(":"))
              return this.error(U.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, F(this.clonePosition(), this.clonePosition()));
            this.bumpSpace();
            var f = this.tryParseDecimalInteger(U.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, U.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
            if (f.err)
              return f;
            this.bumpSpace(), B = this.parseIdentifierIfPossible(), N = f.val;
          }
          var y = this.tryParsePluralOrSelectOptions(e, a, n, B);
          if (y.err)
            return y;
          var d = this.tryParseArgumentClose(i);
          if (d.err)
            return d;
          var W = F(i, this.clonePosition());
          return a === "select" ? {
            val: {
              type: $.select,
              value: r,
              options: io(y.val),
              location: W
            },
            err: null
          } : {
            val: {
              type: $.plural,
              value: r,
              options: io(y.val),
              offset: N,
              pluralType: a === "plural" ? "cardinal" : "ordinal",
              location: W
            },
            err: null
          };
        }
        default:
          return this.error(U.INVALID_ARGUMENT_TYPE, F(o, s));
      }
    }, t.prototype.tryParseArgumentClose = function(e) {
      return this.isEOF() || this.char() !== 125 ? this.error(U.EXPECT_ARGUMENT_CLOSING_BRACE, F(e, this.clonePosition())) : (this.bump(), { val: !0, err: null });
    }, t.prototype.parseSimpleArgStyleIfPossible = function() {
      for (var e = 0, n = this.clonePosition(); !this.isEOF(); ) {
        var r = this.char();
        switch (r) {
          case 39: {
            this.bump();
            var i = this.clonePosition();
            if (!this.bumpUntil("'"))
              return this.error(U.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, F(i, this.clonePosition()));
            this.bump();
            break;
          }
          case 123: {
            e += 1, this.bump();
            break;
          }
          case 125: {
            if (e > 0)
              e -= 1;
            else
              return {
                val: this.message.slice(n.offset, this.offset()),
                err: null
              };
            break;
          }
          default:
            this.bump();
            break;
        }
      }
      return {
        val: this.message.slice(n.offset, this.offset()),
        err: null
      };
    }, t.prototype.parseNumberSkeletonFromString = function(e, n) {
      var r = [];
      try {
        r = gh(e);
      } catch {
        return this.error(U.INVALID_NUMBER_SKELETON, n);
      }
      return {
        val: {
          type: Gt.number,
          tokens: r,
          location: n,
          parsedOptions: this.shouldParseSkeletons ? yh(r) : {}
        },
        err: null
      };
    }, t.prototype.tryParsePluralOrSelectOptions = function(e, n, r, i) {
      for (var l, o = !1, a = [], s = /* @__PURE__ */ new Set(), u = i.value, c = i.location; ; ) {
        if (u.length === 0) {
          var f = this.clonePosition();
          if (n !== "select" && this.bumpIf("=")) {
            var _ = this.tryParseDecimalInteger(U.EXPECT_PLURAL_ARGUMENT_SELECTOR, U.INVALID_PLURAL_ARGUMENT_SELECTOR);
            if (_.err)
              return _;
            c = F(f, this.clonePosition()), u = this.message.slice(f.offset, this.offset());
          } else
            break;
        }
        if (s.has(u))
          return this.error(n === "select" ? U.DUPLICATE_SELECT_ARGUMENT_SELECTOR : U.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, c);
        u === "other" && (o = !0), this.bumpSpace();
        var h = this.clonePosition();
        if (!this.bumpIf("{"))
          return this.error(n === "select" ? U.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : U.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, F(this.clonePosition(), this.clonePosition()));
        var d = this.parseMessage(e + 1, n, r);
        if (d.err)
          return d;
        var m = this.tryParseArgumentClose(h);
        if (m.err)
          return m;
        a.push([
          u,
          {
            value: d.val,
            location: F(h, this.clonePosition())
          }
        ]), s.add(u), this.bumpSpace(), l = this.parseIdentifierIfPossible(), u = l.value, c = l.location;
      }
      return a.length === 0 ? this.error(n === "select" ? U.EXPECT_SELECT_ARGUMENT_SELECTOR : U.EXPECT_PLURAL_ARGUMENT_SELECTOR, F(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !o ? this.error(U.MISSING_OTHER_CLAUSE, F(this.clonePosition(), this.clonePosition())) : { val: a, err: null };
    }, t.prototype.tryParseDecimalInteger = function(e, n) {
      var r = 1, i = this.clonePosition();
      this.bumpIf("+") || this.bumpIf("-") && (r = -1);
      for (var l = !1, o = 0; !this.isEOF(); ) {
        var a = this.char();
        if (a >= 48 && a <= 57)
          l = !0, o = o * 10 + (a - 48), this.bump();
        else
          break;
      }
      var s = F(i, this.clonePosition());
      return l ? (o *= r, Lh(o) ? { val: o, err: null } : this.error(n, s)) : this.error(e, s);
    }, t.prototype.offset = function() {
      return this.position.offset;
    }, t.prototype.isEOF = function() {
      return this.offset() === this.message.length;
    }, t.prototype.clonePosition = function() {
      return {
        offset: this.position.offset,
        line: this.position.line,
        column: this.position.column
      };
    }, t.prototype.char = function() {
      var e = this.position.offset;
      if (e >= this.message.length)
        throw Error("out of bound");
      var n = zs(this.message, e);
      if (n === void 0)
        throw Error("Offset ".concat(e, " is at invalid UTF-16 code unit boundary"));
      return n;
    }, t.prototype.error = function(e, n) {
      return {
        val: null,
        err: {
          kind: e,
          message: this.message,
          location: n
        }
      };
    }, t.prototype.bump = function() {
      if (!this.isEOF()) {
        var e = this.char();
        e === 10 ? (this.position.line += 1, this.position.column = 1, this.position.offset += 1) : (this.position.column += 1, this.position.offset += e < 65536 ? 1 : 2);
      }
    }, t.prototype.bumpIf = function(e) {
      if (ro(this.message, e, this.offset())) {
        for (var n = 0; n < e.length; n++)
          this.bump();
        return !0;
      }
      return !1;
    }, t.prototype.bumpUntil = function(e) {
      var n = this.offset(), r = this.message.indexOf(e, n);
      return r >= 0 ? (this.bumpTo(r), !0) : (this.bumpTo(this.message.length), !1);
    }, t.prototype.bumpTo = function(e) {
      if (this.offset() > e)
        throw Error("targetOffset ".concat(e, " must be greater than or equal to the current offset ").concat(this.offset()));
      for (e = Math.min(e, this.message.length); ; ) {
        var n = this.offset();
        if (n === e)
          break;
        if (n > e)
          throw Error("targetOffset ".concat(e, " is at invalid UTF-16 code unit boundary"));
        if (this.bump(), this.isEOF())
          break;
      }
    }, t.prototype.bumpSpace = function() {
      for (; !this.isEOF() && xs(this.char()); )
        this.bump();
    }, t.prototype.peek = function() {
      if (this.isEOF())
        return null;
      var e = this.char(), n = this.offset(), r = this.message.charCodeAt(n + (e >= 65536 ? 2 : 1));
      return r ?? null;
    }, t;
  }()
);
function qi(t) {
  return t >= 97 && t <= 122 || t >= 65 && t <= 90;
}
function Uh(t) {
  return qi(t) || t === 47;
}
function qh(t) {
  return t === 45 || t === 46 || t >= 48 && t <= 57 || t === 95 || t >= 97 && t <= 122 || t >= 65 && t <= 90 || t == 183 || t >= 192 && t <= 214 || t >= 216 && t <= 246 || t >= 248 && t <= 893 || t >= 895 && t <= 8191 || t >= 8204 && t <= 8205 || t >= 8255 && t <= 8256 || t >= 8304 && t <= 8591 || t >= 11264 && t <= 12271 || t >= 12289 && t <= 55295 || t >= 63744 && t <= 64975 || t >= 65008 && t <= 65533 || t >= 65536 && t <= 983039;
}
function xs(t) {
  return t >= 9 && t <= 13 || t === 32 || t === 133 || t >= 8206 && t <= 8207 || t === 8232 || t === 8233;
}
function Fh(t) {
  return t >= 33 && t <= 35 || t === 36 || t >= 37 && t <= 39 || t === 40 || t === 41 || t === 42 || t === 43 || t === 44 || t === 45 || t >= 46 && t <= 47 || t >= 58 && t <= 59 || t >= 60 && t <= 62 || t >= 63 && t <= 64 || t === 91 || t === 92 || t === 93 || t === 94 || t === 96 || t === 123 || t === 124 || t === 125 || t === 126 || t === 161 || t >= 162 && t <= 165 || t === 166 || t === 167 || t === 169 || t === 171 || t === 172 || t === 174 || t === 176 || t === 177 || t === 182 || t === 187 || t === 191 || t === 215 || t === 247 || t >= 8208 && t <= 8213 || t >= 8214 && t <= 8215 || t === 8216 || t === 8217 || t === 8218 || t >= 8219 && t <= 8220 || t === 8221 || t === 8222 || t === 8223 || t >= 8224 && t <= 8231 || t >= 8240 && t <= 8248 || t === 8249 || t === 8250 || t >= 8251 && t <= 8254 || t >= 8257 && t <= 8259 || t === 8260 || t === 8261 || t === 8262 || t >= 8263 && t <= 8273 || t === 8274 || t === 8275 || t >= 8277 && t <= 8286 || t >= 8592 && t <= 8596 || t >= 8597 && t <= 8601 || t >= 8602 && t <= 8603 || t >= 8604 && t <= 8607 || t === 8608 || t >= 8609 && t <= 8610 || t === 8611 || t >= 8612 && t <= 8613 || t === 8614 || t >= 8615 && t <= 8621 || t === 8622 || t >= 8623 && t <= 8653 || t >= 8654 && t <= 8655 || t >= 8656 && t <= 8657 || t === 8658 || t === 8659 || t === 8660 || t >= 8661 && t <= 8691 || t >= 8692 && t <= 8959 || t >= 8960 && t <= 8967 || t === 8968 || t === 8969 || t === 8970 || t === 8971 || t >= 8972 && t <= 8991 || t >= 8992 && t <= 8993 || t >= 8994 && t <= 9e3 || t === 9001 || t === 9002 || t >= 9003 && t <= 9083 || t === 9084 || t >= 9085 && t <= 9114 || t >= 9115 && t <= 9139 || t >= 9140 && t <= 9179 || t >= 9180 && t <= 9185 || t >= 9186 && t <= 9254 || t >= 9255 && t <= 9279 || t >= 9280 && t <= 9290 || t >= 9291 && t <= 9311 || t >= 9472 && t <= 9654 || t === 9655 || t >= 9656 && t <= 9664 || t === 9665 || t >= 9666 && t <= 9719 || t >= 9720 && t <= 9727 || t >= 9728 && t <= 9838 || t === 9839 || t >= 9840 && t <= 10087 || t === 10088 || t === 10089 || t === 10090 || t === 10091 || t === 10092 || t === 10093 || t === 10094 || t === 10095 || t === 10096 || t === 10097 || t === 10098 || t === 10099 || t === 10100 || t === 10101 || t >= 10132 && t <= 10175 || t >= 10176 && t <= 10180 || t === 10181 || t === 10182 || t >= 10183 && t <= 10213 || t === 10214 || t === 10215 || t === 10216 || t === 10217 || t === 10218 || t === 10219 || t === 10220 || t === 10221 || t === 10222 || t === 10223 || t >= 10224 && t <= 10239 || t >= 10240 && t <= 10495 || t >= 10496 && t <= 10626 || t === 10627 || t === 10628 || t === 10629 || t === 10630 || t === 10631 || t === 10632 || t === 10633 || t === 10634 || t === 10635 || t === 10636 || t === 10637 || t === 10638 || t === 10639 || t === 10640 || t === 10641 || t === 10642 || t === 10643 || t === 10644 || t === 10645 || t === 10646 || t === 10647 || t === 10648 || t >= 10649 && t <= 10711 || t === 10712 || t === 10713 || t === 10714 || t === 10715 || t >= 10716 && t <= 10747 || t === 10748 || t === 10749 || t >= 10750 && t <= 11007 || t >= 11008 && t <= 11055 || t >= 11056 && t <= 11076 || t >= 11077 && t <= 11078 || t >= 11079 && t <= 11084 || t >= 11085 && t <= 11123 || t >= 11124 && t <= 11125 || t >= 11126 && t <= 11157 || t === 11158 || t >= 11159 && t <= 11263 || t >= 11776 && t <= 11777 || t === 11778 || t === 11779 || t === 11780 || t === 11781 || t >= 11782 && t <= 11784 || t === 11785 || t === 11786 || t === 11787 || t === 11788 || t === 11789 || t >= 11790 && t <= 11798 || t === 11799 || t >= 11800 && t <= 11801 || t === 11802 || t === 11803 || t === 11804 || t === 11805 || t >= 11806 && t <= 11807 || t === 11808 || t === 11809 || t === 11810 || t === 11811 || t === 11812 || t === 11813 || t === 11814 || t === 11815 || t === 11816 || t === 11817 || t >= 11818 && t <= 11822 || t === 11823 || t >= 11824 && t <= 11833 || t >= 11834 && t <= 11835 || t >= 11836 && t <= 11839 || t === 11840 || t === 11841 || t === 11842 || t >= 11843 && t <= 11855 || t >= 11856 && t <= 11857 || t === 11858 || t >= 11859 && t <= 11903 || t >= 12289 && t <= 12291 || t === 12296 || t === 12297 || t === 12298 || t === 12299 || t === 12300 || t === 12301 || t === 12302 || t === 12303 || t === 12304 || t === 12305 || t >= 12306 && t <= 12307 || t === 12308 || t === 12309 || t === 12310 || t === 12311 || t === 12312 || t === 12313 || t === 12314 || t === 12315 || t === 12316 || t === 12317 || t >= 12318 && t <= 12319 || t === 12320 || t === 12336 || t === 64830 || t === 64831 || t >= 65093 && t <= 65094;
}
function Fi(t) {
  t.forEach(function(e) {
    if (delete e.location, Ms(e) || Rs(e))
      for (var n in e.options)
        delete e.options[n].location, Fi(e.options[n].value);
    else
      Is(e) && Us(e.style) || (Ls(e) || Os(e)) && Mi(e.style) ? delete e.style.location : Ds(e) && Fi(e.children);
  });
}
function Gh(t, e) {
  e === void 0 && (e = {}), e = V({ shouldParseSkeletons: !0, requiresOtherClause: !0 }, e);
  var n = new Dh(t, e).parse();
  if (n.err) {
    var r = SyntaxError(U[n.err.kind]);
    throw r.location = n.err.location, r.originalMessage = n.err.message, r;
  }
  return e != null && e.captureLocation || Fi(n.val), n.val;
}
function ii(t, e) {
  var n = e && e.cache ? e.cache : Wh, r = e && e.serializer ? e.serializer : Xh, i = e && e.strategy ? e.strategy : zh;
  return i(t, {
    cache: n,
    serializer: r
  });
}
function jh(t) {
  return t == null || typeof t == "number" || typeof t == "boolean";
}
function Xs(t, e, n, r) {
  var i = jh(r) ? r : n(r), l = e.get(i);
  return typeof l > "u" && (l = t.call(this, r), e.set(i, l)), l;
}
function Ws(t, e, n) {
  var r = Array.prototype.slice.call(arguments, 3), i = n(r), l = e.get(i);
  return typeof l > "u" && (l = t.apply(this, r), e.set(i, l)), l;
}
function rl(t, e, n, r, i) {
  return n.bind(e, t, r, i);
}
function zh(t, e) {
  var n = t.length === 1 ? Xs : Ws;
  return rl(t, this, n, e.cache.create(), e.serializer);
}
function Vh(t, e) {
  return rl(t, this, Ws, e.cache.create(), e.serializer);
}
function xh(t, e) {
  return rl(t, this, Xs, e.cache.create(), e.serializer);
}
var Xh = function() {
  return JSON.stringify(arguments);
};
function il() {
  this.cache = /* @__PURE__ */ Object.create(null);
}
il.prototype.get = function(t) {
  return this.cache[t];
};
il.prototype.set = function(t, e) {
  this.cache[t] = e;
};
var Wh = {
  create: function() {
    return new il();
  }
}, li = {
  variadic: Vh,
  monadic: xh
}, jt;
(function(t) {
  t.MISSING_VALUE = "MISSING_VALUE", t.INVALID_VALUE = "INVALID_VALUE", t.MISSING_INTL_API = "MISSING_INTL_API";
})(jt || (jt = {}));
var dr = (
  /** @class */
  function(t) {
    hr(e, t);
    function e(n, r, i) {
      var l = t.call(this, n) || this;
      return l.code = r, l.originalMessage = i, l;
    }
    return e.prototype.toString = function() {
      return "[formatjs Error: ".concat(this.code, "] ").concat(this.message);
    }, e;
  }(Error)
), oo = (
  /** @class */
  function(t) {
    hr(e, t);
    function e(n, r, i, l) {
      return t.call(this, 'Invalid values for "'.concat(n, '": "').concat(r, '". Options are "').concat(Object.keys(i).join('", "'), '"'), jt.INVALID_VALUE, l) || this;
    }
    return e;
  }(dr)
), Zh = (
  /** @class */
  function(t) {
    hr(e, t);
    function e(n, r, i) {
      return t.call(this, 'Value for "'.concat(n, '" must be of type ').concat(r), jt.INVALID_VALUE, i) || this;
    }
    return e;
  }(dr)
), Jh = (
  /** @class */
  function(t) {
    hr(e, t);
    function e(n, r) {
      return t.call(this, 'The intl string context variable "'.concat(n, '" was not provided to the string "').concat(r, '"'), jt.MISSING_VALUE, r) || this;
    }
    return e;
  }(dr)
), Ee;
(function(t) {
  t[t.literal = 0] = "literal", t[t.object = 1] = "object";
})(Ee || (Ee = {}));
function Yh(t) {
  return t.length < 2 ? t : t.reduce(function(e, n) {
    var r = e[e.length - 1];
    return !r || r.type !== Ee.literal || n.type !== Ee.literal ? e.push(n) : r.value += n.value, e;
  }, []);
}
function Qh(t) {
  return typeof t == "function";
}
function zn(t, e, n, r, i, l, o) {
  if (t.length === 1 && $l(t[0]))
    return [
      {
        type: Ee.literal,
        value: t[0].value
      }
    ];
  for (var a = [], s = 0, u = t; s < u.length; s++) {
    var c = u[s];
    if ($l(c)) {
      a.push({
        type: Ee.literal,
        value: c.value
      });
      continue;
    }
    if (hh(c)) {
      typeof l == "number" && a.push({
        type: Ee.literal,
        value: n.getNumberFormat(e).format(l)
      });
      continue;
    }
    var f = c.value;
    if (!(i && f in i))
      throw new Jh(f, o);
    var _ = i[f];
    if (_h(c)) {
      (!_ || typeof _ == "string" || typeof _ == "number") && (_ = typeof _ == "string" || typeof _ == "number" ? String(_) : ""), a.push({
        type: typeof _ == "string" ? Ee.literal : Ee.object,
        value: _
      });
      continue;
    }
    if (Ls(c)) {
      var h = typeof c.style == "string" ? r.date[c.style] : Mi(c.style) ? c.style.parsedOptions : void 0;
      a.push({
        type: Ee.literal,
        value: n.getDateTimeFormat(e, h).format(_)
      });
      continue;
    }
    if (Os(c)) {
      var h = typeof c.style == "string" ? r.time[c.style] : Mi(c.style) ? c.style.parsedOptions : r.time.medium;
      a.push({
        type: Ee.literal,
        value: n.getDateTimeFormat(e, h).format(_)
      });
      continue;
    }
    if (Is(c)) {
      var h = typeof c.style == "string" ? r.number[c.style] : Us(c.style) ? c.style.parsedOptions : void 0;
      h && h.scale && (_ = _ * (h.scale || 1)), a.push({
        type: Ee.literal,
        value: n.getNumberFormat(e, h).format(_)
      });
      continue;
    }
    if (Ds(c)) {
      var d = c.children, m = c.value, g = i[m];
      if (!Qh(g))
        throw new Zh(m, "function", o);
      var p = zn(d, e, n, r, i, l), T = g(p.map(function(N) {
        return N.value;
      }));
      Array.isArray(T) || (T = [T]), a.push.apply(a, T.map(function(N) {
        return {
          type: typeof N == "string" ? Ee.literal : Ee.object,
          value: N
        };
      }));
    }
    if (Ms(c)) {
      var v = c.options[_] || c.options.other;
      if (!v)
        throw new oo(c.value, _, Object.keys(c.options), o);
      a.push.apply(a, zn(v.value, e, n, r, i));
      continue;
    }
    if (Rs(c)) {
      var v = c.options["=".concat(_)];
      if (!v) {
        if (!Intl.PluralRules)
          throw new dr(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, jt.MISSING_INTL_API, o);
        var B = n.getPluralRules(e, { type: c.pluralType }).select(_ - (c.offset || 0));
        v = c.options[B] || c.options.other;
      }
      if (!v)
        throw new oo(c.value, _, Object.keys(c.options), o);
      a.push.apply(a, zn(v.value, e, n, r, i, _ - (c.offset || 0)));
      continue;
    }
  }
  return Yh(a);
}
function Kh(t, e) {
  return e ? V(V(V({}, t || {}), e || {}), Object.keys(t).reduce(function(n, r) {
    return n[r] = V(V({}, t[r]), e[r] || {}), n;
  }, {})) : t;
}
function $h(t, e) {
  return e ? Object.keys(t).reduce(function(n, r) {
    return n[r] = Kh(t[r], e[r]), n;
  }, V({}, t)) : t;
}
function oi(t) {
  return {
    create: function() {
      return {
        get: function(e) {
          return t[e];
        },
        set: function(e, n) {
          t[e] = n;
        }
      };
    }
  };
}
function ed(t) {
  return t === void 0 && (t = {
    number: {},
    dateTime: {},
    pluralRules: {}
  }), {
    getNumberFormat: ii(function() {
      for (var e, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((e = Intl.NumberFormat).bind.apply(e, ni([void 0], n, !1)))();
    }, {
      cache: oi(t.number),
      strategy: li.variadic
    }),
    getDateTimeFormat: ii(function() {
      for (var e, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((e = Intl.DateTimeFormat).bind.apply(e, ni([void 0], n, !1)))();
    }, {
      cache: oi(t.dateTime),
      strategy: li.variadic
    }),
    getPluralRules: ii(function() {
      for (var e, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((e = Intl.PluralRules).bind.apply(e, ni([void 0], n, !1)))();
    }, {
      cache: oi(t.pluralRules),
      strategy: li.variadic
    })
  };
}
var td = (
  /** @class */
  function() {
    function t(e, n, r, i) {
      var l = this;
      if (n === void 0 && (n = t.defaultLocale), this.formatterCache = {
        number: {},
        dateTime: {},
        pluralRules: {}
      }, this.format = function(o) {
        var a = l.formatToParts(o);
        if (a.length === 1)
          return a[0].value;
        var s = a.reduce(function(u, c) {
          return !u.length || c.type !== Ee.literal || typeof u[u.length - 1] != "string" ? u.push(c.value) : u[u.length - 1] += c.value, u;
        }, []);
        return s.length <= 1 ? s[0] || "" : s;
      }, this.formatToParts = function(o) {
        return zn(l.ast, l.locales, l.formatters, l.formats, o, void 0, l.message);
      }, this.resolvedOptions = function() {
        return {
          locale: l.resolvedLocale.toString()
        };
      }, this.getAst = function() {
        return l.ast;
      }, this.locales = n, this.resolvedLocale = t.resolveLocale(n), typeof e == "string") {
        if (this.message = e, !t.__parse)
          throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
        this.ast = t.__parse(e, {
          ignoreTag: i == null ? void 0 : i.ignoreTag,
          locale: this.resolvedLocale
        });
      } else
        this.ast = e;
      if (!Array.isArray(this.ast))
        throw new TypeError("A message must be provided as a String or AST.");
      this.formats = $h(t.formats, r), this.formatters = i && i.formatters || ed(this.formatterCache);
    }
    return Object.defineProperty(t, "defaultLocale", {
      get: function() {
        return t.memoizedDefaultLocale || (t.memoizedDefaultLocale = new Intl.NumberFormat().resolvedOptions().locale), t.memoizedDefaultLocale;
      },
      enumerable: !1,
      configurable: !0
    }), t.memoizedDefaultLocale = null, t.resolveLocale = function(e) {
      var n = Intl.NumberFormat.supportedLocalesOf(e);
      return n.length > 0 ? new Intl.Locale(n[0]) : new Intl.Locale(typeof e == "string" ? e : e[0]);
    }, t.__parse = Gh, t.formats = {
      number: {
        integer: {
          maximumFractionDigits: 0
        },
        currency: {
          style: "currency"
        },
        percent: {
          style: "percent"
        }
      },
      date: {
        short: {
          month: "numeric",
          day: "numeric",
          year: "2-digit"
        },
        medium: {
          month: "short",
          day: "numeric",
          year: "numeric"
        },
        long: {
          month: "long",
          day: "numeric",
          year: "numeric"
        },
        full: {
          weekday: "long",
          month: "long",
          day: "numeric",
          year: "numeric"
        }
      },
      time: {
        short: {
          hour: "numeric",
          minute: "numeric"
        },
        medium: {
          hour: "numeric",
          minute: "numeric",
          second: "numeric"
        },
        long: {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          timeZoneName: "short"
        },
        full: {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          timeZoneName: "short"
        }
      }
    }, t;
  }()
);
function nd(t, e) {
  if (e == null)
    return;
  if (e in t)
    return t[e];
  const n = e.split(".");
  let r = t;
  for (let i = 0; i < n.length; i++)
    if (typeof r == "object") {
      if (i > 0) {
        const l = n.slice(i, n.length).join(".");
        if (l in r) {
          r = r[l];
          break;
        }
      }
      r = r[n[i]];
    } else
      r = void 0;
  return r;
}
const ft = {}, rd = (t, e, n) => n && (e in ft || (ft[e] = {}), t in ft[e] || (ft[e][t] = n), n), Zs = (t, e) => {
  if (e == null)
    return;
  if (e in ft && t in ft[e])
    return ft[e][t];
  const n = mr(e);
  for (let r = 0; r < n.length; r++) {
    const i = n[r], l = ld(i, t);
    if (l)
      return rd(t, e, l);
  }
};
let ll;
const Sn = kn({});
function id(t) {
  return ll[t] || null;
}
function Js(t) {
  return t in ll;
}
function ld(t, e) {
  if (!Js(t))
    return null;
  const n = id(t);
  return nd(n, e);
}
function od(t) {
  if (t == null)
    return;
  const e = mr(t);
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    if (Js(r))
      return r;
  }
}
function sd(t, ...e) {
  delete ft[t], Sn.update((n) => (n[t] = fh.all([n[t] || {}, ...e]), n));
}
Qt(
  [Sn],
  ([t]) => Object.keys(t)
);
Sn.subscribe((t) => ll = t);
const Vn = {};
function ad(t, e) {
  Vn[t].delete(e), Vn[t].size === 0 && delete Vn[t];
}
function Ys(t) {
  return Vn[t];
}
function ud(t) {
  return mr(t).map((e) => {
    const n = Ys(e);
    return [e, n ? [...n] : []];
  }).filter(([, e]) => e.length > 0);
}
function Gi(t) {
  return t == null ? !1 : mr(t).some(
    (e) => {
      var n;
      return (n = Ys(e)) == null ? void 0 : n.size;
    }
  );
}
function cd(t, e) {
  return Promise.all(
    e.map((r) => (ad(t, r), r().then((i) => i.default || i)))
  ).then((r) => sd(t, ...r));
}
const sn = {};
function Qs(t) {
  if (!Gi(t))
    return t in sn ? sn[t] : Promise.resolve();
  const e = ud(t);
  return sn[t] = Promise.all(
    e.map(
      ([n, r]) => cd(n, r)
    )
  ).then(() => {
    if (Gi(t))
      return Qs(t);
    delete sn[t];
  }), sn[t];
}
const fd = {
  number: {
    scientific: { notation: "scientific" },
    engineering: { notation: "engineering" },
    compactLong: { notation: "compact", compactDisplay: "long" },
    compactShort: { notation: "compact", compactDisplay: "short" }
  },
  date: {
    short: { month: "numeric", day: "numeric", year: "2-digit" },
    medium: { month: "short", day: "numeric", year: "numeric" },
    long: { month: "long", day: "numeric", year: "numeric" },
    full: { weekday: "long", month: "long", day: "numeric", year: "numeric" }
  },
  time: {
    short: { hour: "numeric", minute: "numeric" },
    medium: { hour: "numeric", minute: "numeric", second: "numeric" },
    long: {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      timeZoneName: "short"
    },
    full: {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      timeZoneName: "short"
    }
  }
}, _d = {
  fallbackLocale: null,
  loadingDelay: 200,
  formats: fd,
  warnOnMissingMessages: !0,
  handleMissingMessage: void 0,
  ignoreTag: !0
}, hd = _d;
function zt() {
  return hd;
}
const si = kn(!1);
var dd = Object.defineProperty, md = Object.defineProperties, pd = Object.getOwnPropertyDescriptors, so = Object.getOwnPropertySymbols, gd = Object.prototype.hasOwnProperty, bd = Object.prototype.propertyIsEnumerable, ao = (t, e, n) => e in t ? dd(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, wd = (t, e) => {
  for (var n in e || (e = {}))
    gd.call(e, n) && ao(t, n, e[n]);
  if (so)
    for (var n of so(e))
      bd.call(e, n) && ao(t, n, e[n]);
  return t;
}, vd = (t, e) => md(t, pd(e));
let ji;
const Kn = kn(null);
function uo(t) {
  return t.split("-").map((e, n, r) => r.slice(0, n + 1).join("-")).reverse();
}
function mr(t, e = zt().fallbackLocale) {
  const n = uo(t);
  return e ? [.../* @__PURE__ */ new Set([...n, ...uo(e)])] : n;
}
function Nt() {
  return ji ?? void 0;
}
Kn.subscribe((t) => {
  ji = t ?? void 0, typeof window < "u" && t != null && document.documentElement.setAttribute("lang", t);
});
const yd = (t) => {
  if (t && od(t) && Gi(t)) {
    const { loadingDelay: e } = zt();
    let n;
    return typeof window < "u" && Nt() != null && e ? n = window.setTimeout(
      () => si.set(!0),
      e
    ) : si.set(!0), Qs(t).then(() => {
      Kn.set(t);
    }).finally(() => {
      clearTimeout(n), si.set(!1);
    });
  }
  return Kn.set(t);
}, Cn = vd(wd({}, Kn), {
  set: yd
}), pr = (t) => {
  const e = /* @__PURE__ */ Object.create(null);
  return (r) => {
    const i = JSON.stringify(r);
    return i in e ? e[i] : e[i] = t(r);
  };
};
var Ed = Object.defineProperty, $n = Object.getOwnPropertySymbols, Ks = Object.prototype.hasOwnProperty, $s = Object.prototype.propertyIsEnumerable, co = (t, e, n) => e in t ? Ed(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, ol = (t, e) => {
  for (var n in e || (e = {}))
    Ks.call(e, n) && co(t, n, e[n]);
  if ($n)
    for (var n of $n(e))
      $s.call(e, n) && co(t, n, e[n]);
  return t;
}, tn = (t, e) => {
  var n = {};
  for (var r in t)
    Ks.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && $n)
    for (var r of $n(t))
      e.indexOf(r) < 0 && $s.call(t, r) && (n[r] = t[r]);
  return n;
};
const vn = (t, e) => {
  const { formats: n } = zt();
  if (t in n && e in n[t])
    return n[t][e];
  throw new Error(`[svelte-i18n] Unknown "${e}" ${t} format.`);
}, kd = pr(
  (t) => {
    var e = t, { locale: n, format: r } = e, i = tn(e, ["locale", "format"]);
    if (n == null)
      throw new Error('[svelte-i18n] A "locale" must be set to format numbers');
    return r && (i = vn("number", r)), new Intl.NumberFormat(n, i);
  }
), Sd = pr(
  (t) => {
    var e = t, { locale: n, format: r } = e, i = tn(e, ["locale", "format"]);
    if (n == null)
      throw new Error('[svelte-i18n] A "locale" must be set to format dates');
    return r ? i = vn("date", r) : Object.keys(i).length === 0 && (i = vn("date", "short")), new Intl.DateTimeFormat(n, i);
  }
), Cd = pr(
  (t) => {
    var e = t, { locale: n, format: r } = e, i = tn(e, ["locale", "format"]);
    if (n == null)
      throw new Error(
        '[svelte-i18n] A "locale" must be set to format time values'
      );
    return r ? i = vn("time", r) : Object.keys(i).length === 0 && (i = vn("time", "short")), new Intl.DateTimeFormat(n, i);
  }
), Td = (t = {}) => {
  var e = t, {
    locale: n = Nt()
  } = e, r = tn(e, [
    "locale"
  ]);
  return kd(ol({ locale: n }, r));
}, Ad = (t = {}) => {
  var e = t, {
    locale: n = Nt()
  } = e, r = tn(e, [
    "locale"
  ]);
  return Sd(ol({ locale: n }, r));
}, Bd = (t = {}) => {
  var e = t, {
    locale: n = Nt()
  } = e, r = tn(e, [
    "locale"
  ]);
  return Cd(ol({ locale: n }, r));
}, Hd = pr(
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  (t, e = Nt()) => new td(t, e, zt().formats, {
    ignoreTag: zt().ignoreTag
  })
), Pd = (t, e = {}) => {
  var n, r, i, l;
  let o = e;
  typeof t == "object" && (o = t, t = o.id);
  const {
    values: a,
    locale: s = Nt(),
    default: u
  } = o;
  if (s == null)
    throw new Error(
      "[svelte-i18n] Cannot format a message without first setting the initial locale."
    );
  let c = Zs(t, s);
  if (!c)
    c = (l = (i = (r = (n = zt()).handleMissingMessage) == null ? void 0 : r.call(n, { locale: s, id: t, defaultValue: u })) != null ? i : u) != null ? l : t;
  else if (typeof c != "string")
    return console.warn(
      `[svelte-i18n] Message with id "${t}" must be of type "string", found: "${typeof c}". Gettin its value through the "$format" method is deprecated; use the "json" method instead.`
    ), c;
  if (!a)
    return c;
  let f = c;
  try {
    f = Hd(c, s).format(a);
  } catch (_) {
    _ instanceof Error && console.warn(
      `[svelte-i18n] Message "${t}" has syntax error:`,
      _.message
    );
  }
  return f;
}, Nd = (t, e) => Bd(e).format(t), Id = (t, e) => Ad(e).format(t), Ld = (t, e) => Td(e).format(t), Od = (t, e = Nt()) => Zs(t, e);
Qt([Cn, Sn], () => Pd);
Qt([Cn], () => Nd);
Qt([Cn], () => Id);
Qt([Cn], () => Ld);
Qt([Cn, Sn], () => Od);
const {
  SvelteComponent: Md,
  append: Be,
  attr: vt,
  detach: ea,
  element: yt,
  init: Rd,
  insert: ta,
  noop: fo,
  safe_not_equal: Dd,
  set_data: er,
  set_style: ai,
  space: zi,
  text: Rt,
  toggle_class: _o
} = window.__gradio__svelte__internal, { onMount: Ud, createEventDispatcher: qd, getContext: Fd } = window.__gradio__svelte__internal;
function ho(t) {
  let e, n, r, i, l = fn(
    /*file_to_display*/
    t[2]
  ) + "", o, a, s, u, c = (
    /*file_to_display*/
    t[2].orig_name + ""
  ), f;
  return {
    c() {
      e = yt("div"), n = yt("span"), r = yt("div"), i = yt("progress"), o = Rt(l), s = zi(), u = yt("span"), f = Rt(c), ai(i, "visibility", "hidden"), ai(i, "height", "0"), ai(i, "width", "0"), i.value = a = fn(
        /*file_to_display*/
        t[2]
      ), vt(i, "max", "100"), vt(i, "class", "svelte-cr2edf"), vt(r, "class", "progress-bar svelte-cr2edf"), vt(u, "class", "file-name svelte-cr2edf"), vt(e, "class", "file svelte-cr2edf");
    },
    m(_, h) {
      ta(_, e, h), Be(e, n), Be(n, r), Be(r, i), Be(i, o), Be(e, s), Be(e, u), Be(u, f);
    },
    p(_, h) {
      h & /*file_to_display*/
      4 && l !== (l = fn(
        /*file_to_display*/
        _[2]
      ) + "") && er(o, l), h & /*file_to_display*/
      4 && a !== (a = fn(
        /*file_to_display*/
        _[2]
      )) && (i.value = a), h & /*file_to_display*/
      4 && c !== (c = /*file_to_display*/
      _[2].orig_name + "") && er(f, c);
    },
    d(_) {
      _ && ea(e);
    }
  };
}
function Gd(t) {
  let e, n, r, i = (
    /*files_with_progress*/
    t[0].length + ""
  ), l, o, a = (
    /*files_with_progress*/
    t[0].length > 1 ? "files" : "file"
  ), s, u, c, f = (
    /*file_to_display*/
    t[2] && ho(t)
  );
  return {
    c() {
      e = yt("div"), n = yt("span"), r = Rt("Uploading "), l = Rt(i), o = zi(), s = Rt(a), u = Rt("..."), c = zi(), f && f.c(), vt(n, "class", "uploading svelte-cr2edf"), vt(e, "class", "wrap svelte-cr2edf"), _o(
        e,
        "progress",
        /*progress*/
        t[1]
      );
    },
    m(_, h) {
      ta(_, e, h), Be(e, n), Be(n, r), Be(n, l), Be(n, o), Be(n, s), Be(n, u), Be(e, c), f && f.m(e, null);
    },
    p(_, [h]) {
      h & /*files_with_progress*/
      1 && i !== (i = /*files_with_progress*/
      _[0].length + "") && er(l, i), h & /*files_with_progress*/
      1 && a !== (a = /*files_with_progress*/
      _[0].length > 1 ? "files" : "file") && er(s, a), /*file_to_display*/
      _[2] ? f ? f.p(_, h) : (f = ho(_), f.c(), f.m(e, null)) : f && (f.d(1), f = null), h & /*progress*/
      2 && _o(
        e,
        "progress",
        /*progress*/
        _[1]
      );
    },
    i: fo,
    o: fo,
    d(_) {
      _ && ea(e), f && f.d();
    }
  };
}
function fn(t) {
  return t.progress * 100 / (t.size || 0) || 0;
}
function jd(t) {
  let e = 0;
  return t.forEach((n) => {
    e += fn(n);
  }), document.documentElement.style.setProperty("--upload-progress-width", (e / t.length).toFixed(2) + "%"), e / t.length;
}
function zd(t, e, n) {
  let { upload_id: r } = e, { root: i } = e, { files: l } = e, o, a = !1, s, u, c = l.map((d) => ({ ...d, progress: 0 }));
  const f = qd();
  function _(d, m) {
    n(0, c = c.map((g) => (g.orig_name === d && (g.progress += m), g)));
  }
  const h = Fd("EventSource_factory");
  return Ud(() => {
    o = h(new URL(`${i}/upload_progress?upload_id=${r}`)), o.onmessage = async function(d) {
      const m = JSON.parse(d.data);
      a || n(1, a = !0), m.msg === "done" ? (o.close(), f("done")) : (n(6, s = m), _(m.orig_name, m.chunk_size));
    };
  }), t.$$set = (d) => {
    "upload_id" in d && n(3, r = d.upload_id), "root" in d && n(4, i = d.root), "files" in d && n(5, l = d.files);
  }, t.$$.update = () => {
    t.$$.dirty & /*files_with_progress*/
    1 && jd(c), t.$$.dirty & /*current_file_upload, files_with_progress*/
    65 && n(2, u = s || c[0]);
  }, [
    c,
    a,
    u,
    r,
    i,
    l,
    s
  ];
}
class Vd extends Md {
  constructor(e) {
    super(), Rd(this, e, zd, Gd, Dd, { upload_id: 3, root: 4, files: 5 });
  }
}
const {
  SvelteComponent: xd,
  append: mo,
  attr: ge,
  binding_callbacks: Xd,
  bubble: gt,
  check_outros: na,
  create_component: Wd,
  create_slot: ra,
  destroy_component: Zd,
  detach: gr,
  element: Vi,
  empty: ia,
  get_all_dirty_from_scope: la,
  get_slot_changes: oa,
  group_outros: sa,
  init: Jd,
  insert: br,
  listen: Me,
  mount_component: Yd,
  prevent_default: bt,
  run_all: Qd,
  safe_not_equal: Kd,
  set_style: aa,
  space: $d,
  stop_propagation: wt,
  toggle_class: be,
  transition_in: ht,
  transition_out: At,
  update_slot_base: ua
} = window.__gradio__svelte__internal, { createEventDispatcher: em, tick: tm, getContext: nm } = window.__gradio__svelte__internal;
function rm(t) {
  let e, n, r, i, l, o, a, s, u, c;
  const f = (
    /*#slots*/
    t[22].default
  ), _ = ra(
    f,
    t,
    /*$$scope*/
    t[21],
    null
  );
  return {
    c() {
      e = Vi("button"), _ && _.c(), n = $d(), r = Vi("input"), ge(r, "aria-label", "file upload"), ge(r, "data-testid", "file-upload"), ge(r, "type", "file"), ge(
        r,
        "accept",
        /*accept_file_types*/
        t[12]
      ), r.multiple = i = /*file_count*/
      t[5] === "multiple" || void 0, ge(r, "webkitdirectory", l = /*file_count*/
      t[5] === "directory" || void 0), ge(r, "mozdirectory", o = /*file_count*/
      t[5] === "directory" || void 0), ge(r, "class", "svelte-1aq8tno"), ge(e, "tabindex", a = /*hidden*/
      t[7] ? -1 : 0), ge(e, "class", "svelte-1aq8tno"), be(
        e,
        "hidden",
        /*hidden*/
        t[7]
      ), be(
        e,
        "center",
        /*center*/
        t[3]
      ), be(
        e,
        "boundedheight",
        /*boundedheight*/
        t[2]
      ), be(
        e,
        "flex",
        /*flex*/
        t[4]
      ), aa(e, "height", "100%");
    },
    m(h, d) {
      br(h, e, d), _ && _.m(e, null), mo(e, n), mo(e, r), t[30](r), s = !0, u || (c = [
        Me(
          r,
          "change",
          /*load_files_from_upload*/
          t[15]
        ),
        Me(e, "drag", wt(bt(
          /*drag_handler*/
          t[23]
        ))),
        Me(e, "dragstart", wt(bt(
          /*dragstart_handler*/
          t[24]
        ))),
        Me(e, "dragend", wt(bt(
          /*dragend_handler*/
          t[25]
        ))),
        Me(e, "dragover", wt(bt(
          /*dragover_handler*/
          t[26]
        ))),
        Me(e, "dragenter", wt(bt(
          /*dragenter_handler*/
          t[27]
        ))),
        Me(e, "dragleave", wt(bt(
          /*dragleave_handler*/
          t[28]
        ))),
        Me(e, "drop", wt(bt(
          /*drop_handler*/
          t[29]
        ))),
        Me(
          e,
          "click",
          /*open_file_upload*/
          t[9]
        ),
        Me(
          e,
          "drop",
          /*loadFilesFromDrop*/
          t[16]
        ),
        Me(
          e,
          "dragenter",
          /*updateDragging*/
          t[14]
        ),
        Me(
          e,
          "dragleave",
          /*updateDragging*/
          t[14]
        )
      ], u = !0);
    },
    p(h, d) {
      _ && _.p && (!s || d[0] & /*$$scope*/
      2097152) && ua(
        _,
        f,
        h,
        /*$$scope*/
        h[21],
        s ? oa(
          f,
          /*$$scope*/
          h[21],
          d,
          null
        ) : la(
          /*$$scope*/
          h[21]
        ),
        null
      ), (!s || d[0] & /*accept_file_types*/
      4096) && ge(
        r,
        "accept",
        /*accept_file_types*/
        h[12]
      ), (!s || d[0] & /*file_count*/
      32 && i !== (i = /*file_count*/
      h[5] === "multiple" || void 0)) && (r.multiple = i), (!s || d[0] & /*file_count*/
      32 && l !== (l = /*file_count*/
      h[5] === "directory" || void 0)) && ge(r, "webkitdirectory", l), (!s || d[0] & /*file_count*/
      32 && o !== (o = /*file_count*/
      h[5] === "directory" || void 0)) && ge(r, "mozdirectory", o), (!s || d[0] & /*hidden*/
      128 && a !== (a = /*hidden*/
      h[7] ? -1 : 0)) && ge(e, "tabindex", a), (!s || d[0] & /*hidden*/
      128) && be(
        e,
        "hidden",
        /*hidden*/
        h[7]
      ), (!s || d[0] & /*center*/
      8) && be(
        e,
        "center",
        /*center*/
        h[3]
      ), (!s || d[0] & /*boundedheight*/
      4) && be(
        e,
        "boundedheight",
        /*boundedheight*/
        h[2]
      ), (!s || d[0] & /*flex*/
      16) && be(
        e,
        "flex",
        /*flex*/
        h[4]
      );
    },
    i(h) {
      s || (ht(_, h), s = !0);
    },
    o(h) {
      At(_, h), s = !1;
    },
    d(h) {
      h && gr(e), _ && _.d(h), t[30](null), u = !1, Qd(c);
    }
  };
}
function im(t) {
  let e, n, r = !/*hidden*/
  t[7] && po(t);
  return {
    c() {
      r && r.c(), e = ia();
    },
    m(i, l) {
      r && r.m(i, l), br(i, e, l), n = !0;
    },
    p(i, l) {
      /*hidden*/
      i[7] ? r && (sa(), At(r, 1, 1, () => {
        r = null;
      }), na()) : r ? (r.p(i, l), l[0] & /*hidden*/
      128 && ht(r, 1)) : (r = po(i), r.c(), ht(r, 1), r.m(e.parentNode, e));
    },
    i(i) {
      n || (ht(r), n = !0);
    },
    o(i) {
      At(r), n = !1;
    },
    d(i) {
      i && gr(e), r && r.d(i);
    }
  };
}
function lm(t) {
  let e, n, r, i, l;
  const o = (
    /*#slots*/
    t[22].default
  ), a = ra(
    o,
    t,
    /*$$scope*/
    t[21],
    null
  );
  return {
    c() {
      e = Vi("button"), a && a.c(), ge(e, "tabindex", n = /*hidden*/
      t[7] ? -1 : 0), ge(e, "class", "svelte-1aq8tno"), be(
        e,
        "hidden",
        /*hidden*/
        t[7]
      ), be(
        e,
        "center",
        /*center*/
        t[3]
      ), be(
        e,
        "boundedheight",
        /*boundedheight*/
        t[2]
      ), be(
        e,
        "flex",
        /*flex*/
        t[4]
      ), aa(e, "height", "100%");
    },
    m(s, u) {
      br(s, e, u), a && a.m(e, null), r = !0, i || (l = Me(
        e,
        "click",
        /*paste_clipboard*/
        t[8]
      ), i = !0);
    },
    p(s, u) {
      a && a.p && (!r || u[0] & /*$$scope*/
      2097152) && ua(
        a,
        o,
        s,
        /*$$scope*/
        s[21],
        r ? oa(
          o,
          /*$$scope*/
          s[21],
          u,
          null
        ) : la(
          /*$$scope*/
          s[21]
        ),
        null
      ), (!r || u[0] & /*hidden*/
      128 && n !== (n = /*hidden*/
      s[7] ? -1 : 0)) && ge(e, "tabindex", n), (!r || u[0] & /*hidden*/
      128) && be(
        e,
        "hidden",
        /*hidden*/
        s[7]
      ), (!r || u[0] & /*center*/
      8) && be(
        e,
        "center",
        /*center*/
        s[3]
      ), (!r || u[0] & /*boundedheight*/
      4) && be(
        e,
        "boundedheight",
        /*boundedheight*/
        s[2]
      ), (!r || u[0] & /*flex*/
      16) && be(
        e,
        "flex",
        /*flex*/
        s[4]
      );
    },
    i(s) {
      r || (ht(a, s), r = !0);
    },
    o(s) {
      At(a, s), r = !1;
    },
    d(s) {
      s && gr(e), a && a.d(s), i = !1, l();
    }
  };
}
function po(t) {
  let e, n;
  return e = new Vd({
    props: {
      root: (
        /*root*/
        t[6]
      ),
      upload_id: (
        /*upload_id*/
        t[10]
      ),
      files: (
        /*file_data*/
        t[11]
      )
    }
  }), {
    c() {
      Wd(e.$$.fragment);
    },
    m(r, i) {
      Yd(e, r, i), n = !0;
    },
    p(r, i) {
      const l = {};
      i[0] & /*root*/
      64 && (l.root = /*root*/
      r[6]), i[0] & /*upload_id*/
      1024 && (l.upload_id = /*upload_id*/
      r[10]), i[0] & /*file_data*/
      2048 && (l.files = /*file_data*/
      r[11]), e.$set(l);
    },
    i(r) {
      n || (ht(e.$$.fragment, r), n = !0);
    },
    o(r) {
      At(e.$$.fragment, r), n = !1;
    },
    d(r) {
      Zd(e, r);
    }
  };
}
function om(t) {
  let e, n, r, i;
  const l = [lm, im, rm], o = [];
  function a(s, u) {
    return (
      /*filetype*/
      s[0] === "clipboard" ? 0 : (
        /*uploading*/
        s[1] ? 1 : 2
      )
    );
  }
  return e = a(t), n = o[e] = l[e](t), {
    c() {
      n.c(), r = ia();
    },
    m(s, u) {
      o[e].m(s, u), br(s, r, u), i = !0;
    },
    p(s, u) {
      let c = e;
      e = a(s), e === c ? o[e].p(s, u) : (sa(), At(o[c], 1, 1, () => {
        o[c] = null;
      }), na(), n = o[e], n ? n.p(s, u) : (n = o[e] = l[e](s), n.c()), ht(n, 1), n.m(r.parentNode, r));
    },
    i(s) {
      i || (ht(n), i = !0);
    },
    o(s) {
      At(n), i = !1;
    },
    d(s) {
      s && gr(r), o[e].d(s);
    }
  };
}
function go(t) {
  let e, n = t[0], r = 1;
  for (; r < t.length; ) {
    const i = t[r], l = t[r + 1];
    if (r += 2, (i === "optionalAccess" || i === "optionalCall") && n == null)
      return;
    i === "access" || i === "optionalAccess" ? (e = n, n = l(n)) : (i === "call" || i === "optionalCall") && (n = l((...o) => n.call(e, ...o)), e = void 0);
  }
  return n;
}
function sm(t, e, n) {
  if (!t || t === "*" || t === "file/*")
    return !0;
  let r;
  if (typeof t == "string")
    r = t.split(",").map((i) => i.trim());
  else if (Array.isArray(t))
    r = t;
  else
    return !1;
  return r.includes(e) || r.some((i) => {
    const [l] = i.split("/").map((o) => o.trim());
    return i.endsWith("/*") && n.startsWith(l + "/");
  });
}
function am(t, e, n) {
  let { $$slots: r = {}, $$scope: i } = e, { filetype: l = null } = e, { dragging: o = !1 } = e, { boundedheight: a = !0 } = e, { center: s = !0 } = e, { flex: u = !0 } = e, { file_count: c = "single" } = e, { disable_click: f = !1 } = e, { root: _ } = e, { hidden: h = !1 } = e, { format: d = "file" } = e, { uploading: m = !1 } = e, g, p, T;
  const v = nm("upload_files");
  let B;
  const N = em();
  function y() {
    n(17, o = !o);
  }
  function W() {
    navigator.clipboard.read().then(async (b) => {
      for (let I = 0; I < b.length; I++) {
        const w = b[I].types.find((A) => A.startsWith("image/"));
        if (w) {
          b[I].getType(w).then(async (A) => {
            const Y = new File([A], `clipboard.${w.replace("image/", "")}`);
            await q([Y]);
          });
          break;
        }
      }
    });
  }
  function k() {
    f || (n(13, B.value = "", B), B.click());
  }
  async function L(b) {
    await tm(), n(10, g = Math.random().toString(36).substring(2, 15)), n(1, m = !0);
    const I = await Es(b, _, g, v);
    return N("load", c === "single" ? go([I, "optionalAccess", (w) => w[0]]) : I), n(1, m = !1), I || [];
  }
  async function q(b) {
    if (!b.length)
      return;
    let I = b.map((w) => new File([w], w.name));
    return n(11, p = await ks(I)), await L(p);
  }
  async function R(b) {
    const I = b.target;
    if (I.files)
      if (d != "blob")
        await q(Array.from(I.files));
      else {
        if (c === "single") {
          N("load", I.files[0]);
          return;
        }
        N("load", I.files);
      }
  }
  async function ee(b) {
    if (n(17, o = !1), !go([b, "access", (w) => w.dataTransfer, "optionalAccess", (w) => w.files]))
      return;
    const I = Array.from(b.dataTransfer.files).filter((w) => {
      const A = "." + w.name.split(".").pop();
      return A && sm(l, A, w.type) || (A && Array.isArray(l) ? l.includes(A) : A === l) ? !0 : (N("error", `Invalid file type only ${l} allowed.`), !1);
    });
    await q(I);
  }
  function D(b) {
    gt.call(this, t, b);
  }
  function ae(b) {
    gt.call(this, t, b);
  }
  function Z(b) {
    gt.call(this, t, b);
  }
  function ve(b) {
    gt.call(this, t, b);
  }
  function H(b) {
    gt.call(this, t, b);
  }
  function x(b) {
    gt.call(this, t, b);
  }
  function ye(b) {
    gt.call(this, t, b);
  }
  function E(b) {
    Xd[b ? "unshift" : "push"](() => {
      B = b, n(13, B);
    });
  }
  return t.$$set = (b) => {
    "filetype" in b && n(0, l = b.filetype), "dragging" in b && n(17, o = b.dragging), "boundedheight" in b && n(2, a = b.boundedheight), "center" in b && n(3, s = b.center), "flex" in b && n(4, u = b.flex), "file_count" in b && n(5, c = b.file_count), "disable_click" in b && n(18, f = b.disable_click), "root" in b && n(6, _ = b.root), "hidden" in b && n(7, h = b.hidden), "format" in b && n(19, d = b.format), "uploading" in b && n(1, m = b.uploading), "$$scope" in b && n(21, i = b.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty[0] & /*filetype*/
    1 && (l == null || typeof l == "string" ? n(12, T = l) : (n(0, l = l.map((b) => b.startsWith(".") ? b : b + "/*")), n(12, T = l.join(", "))));
  }, [
    l,
    m,
    a,
    s,
    u,
    c,
    _,
    h,
    W,
    k,
    g,
    p,
    T,
    B,
    y,
    R,
    ee,
    o,
    f,
    d,
    q,
    i,
    r,
    D,
    ae,
    Z,
    ve,
    H,
    x,
    ye,
    E
  ];
}
class um extends xd {
  constructor(e) {
    super(), Jd(
      this,
      e,
      am,
      om,
      Kd,
      {
        filetype: 0,
        dragging: 17,
        boundedheight: 2,
        center: 3,
        flex: 4,
        file_count: 5,
        disable_click: 18,
        root: 6,
        hidden: 7,
        format: 19,
        uploading: 1,
        paste_clipboard: 8,
        open_file_upload: 9,
        load_files: 20
      },
      null,
      [-1, -1]
    );
  }
  get paste_clipboard() {
    return this.$$.ctx[8];
  }
  get open_file_upload() {
    return this.$$.ctx[9];
  }
  get load_files() {
    return this.$$.ctx[20];
  }
}
const {
  SvelteComponent: cm,
  append: bo,
  attr: fm,
  create_component: ui,
  destroy_component: ci,
  detach: _m,
  element: hm,
  init: dm,
  insert: mm,
  mount_component: fi,
  noop: pm,
  safe_not_equal: gm,
  space: wo,
  transition_in: _i,
  transition_out: hi
} = window.__gradio__svelte__internal, { createEventDispatcher: bm } = window.__gradio__svelte__internal;
function wm(t) {
  let e, n, r, i, l, o, a;
  return n = new hn({
    props: { Icon: hf, label: "Remove Last Prompt" }
  }), n.$on(
    "click",
    /*click_handler*/
    t[1]
  ), i = new hn({
    props: { Icon: Nc, label: "Remove All Prompts" }
  }), i.$on(
    "click",
    /*click_handler_1*/
    t[2]
  ), o = new hn({
    props: { Icon: tc, label: "Remove Image" }
  }), o.$on(
    "click",
    /*click_handler_2*/
    t[3]
  ), {
    c() {
      e = hm("div"), ui(n.$$.fragment), r = wo(), ui(i.$$.fragment), l = wo(), ui(o.$$.fragment), fm(e, "class", "svelte-1g74h68");
    },
    m(s, u) {
      mm(s, e, u), fi(n, e, null), bo(e, r), fi(i, e, null), bo(e, l), fi(o, e, null), a = !0;
    },
    p: pm,
    i(s) {
      a || (_i(n.$$.fragment, s), _i(i.$$.fragment, s), _i(o.$$.fragment, s), a = !0);
    },
    o(s) {
      hi(n.$$.fragment, s), hi(i.$$.fragment, s), hi(o.$$.fragment, s), a = !1;
    },
    d(s) {
      s && _m(e), ci(n), ci(i), ci(o);
    }
  };
}
function vm(t) {
  const e = bm();
  return [e, (l) => {
    e("remove_box"), l.stopPropagation();
  }, (l) => {
    e("remove_boxes"), l.stopPropagation();
  }, (l) => {
    e("remove_image"), l.stopPropagation();
  }];
}
class ym extends cm {
  constructor(e) {
    super(), dm(this, e, vm, wm, gm, {});
  }
}
const {
  SvelteComponent: Em,
  append: km,
  attr: vo,
  binding_callbacks: yo,
  bubble: Sm,
  detach: Cm,
  element: Eo,
  flush: Dn,
  init: Tm,
  insert: Am,
  listen: Ze,
  noop: di,
  run_all: Bm,
  safe_not_equal: Hm,
  set_style: Pm,
  stop_propagation: Nm
} = window.__gradio__svelte__internal, { createEventDispatcher: Im, onDestroy: Lm, onMount: Om, tick: Mm } = window.__gradio__svelte__internal;
function Rm(t) {
  let e, n, r, i;
  return {
    c() {
      e = Eo("div"), n = Eo("canvas"), Pm(n, "z-index", "15"), vo(n, "class", "svelte-1mnpmgt"), vo(e, "class", "wrap svelte-1mnpmgt");
    },
    m(l, o) {
      Am(l, e, o), km(e, n), t[13](n), t[14](e), r || (i = [
        Ze(
          n,
          "mousedown",
          /*handle_draw_start*/
          t[2]
        ),
        Ze(
          n,
          "mousemove",
          /*handle_draw_move*/
          t[3]
        ),
        Ze(
          n,
          "mouseout",
          /*handle_draw_move*/
          t[3]
        ),
        Ze(
          n,
          "mouseup",
          /*handle_draw_end*/
          t[4]
        ),
        Ze(
          n,
          "touchstart",
          /*handle_draw_start*/
          t[2]
        ),
        Ze(
          n,
          "touchmove",
          /*handle_draw_move*/
          t[3]
        ),
        Ze(
          n,
          "touchend",
          /*handle_draw_end*/
          t[4]
        ),
        Ze(
          n,
          "touchcancel",
          /*handle_draw_end*/
          t[4]
        ),
        Ze(
          n,
          "blur",
          /*handle_draw_end*/
          t[4]
        ),
        Ze(n, "click", Nm(
          /*click_handler*/
          t[12]
        ))
      ], r = !0);
    },
    p: di,
    i: di,
    o: di,
    d(l) {
      l && Cm(e), t[13](null), t[14](null), r = !1, Bm(i);
    }
  };
}
function Dm(t, e, n) {
  const r = Im();
  let { width: i = 0 } = e, { height: l = 0 } = e, { natural_width: o = 0 } = e, { natural_height: a = 0 } = e, s = [], u = [], c, f, _, h = !1, d, m, g, p, T, v = 0, B = 0, N;
  async function y(E) {
    await Mm(), n(1, f.width = E.width, f), n(1, f.height = E.height, f), n(1, f.style.width = `${E.width}px`, f), n(1, f.style.height = `${E.height}px`, f), n(1, f.style.marginTop = `-${E.height}px`, f);
  }
  async function W() {
    i === v && l === B || (await y({ width: i, height: l }), Z(), setTimeout(
      () => {
        B = l, v = i;
      },
      100
    ), k());
  }
  function k() {
    return s = [], u = [], Z(), r("change", u), !0;
  }
  function L() {
    return s.pop(), u.pop(), Z(), r("change", u), !0;
  }
  Om(async () => {
    _ = f.getContext("2d"), _ && (_.lineJoin = "round", _.lineCap = "round", _.strokeStyle = "#000"), N = new ResizeObserver(() => {
      W();
    }), N.observe(c), ae(), k();
  }), Lm(() => {
    N.unobserve(c);
  });
  function q(E) {
    const b = f.getBoundingClientRect();
    let I, w;
    if (E instanceof MouseEvent)
      I = E.clientX, w = E.clientY;
    else if (E instanceof TouchEvent)
      I = E.changedTouches[0].clientX, w = E.changedTouches[0].clientY;
    else
      return { x: m, y: g };
    return {
      x: I - b.left,
      y: w - b.top
    };
  }
  function R(E) {
    E.preventDefault(), h = !0, d = 0, E instanceof MouseEvent && (d = E.button);
    const { x: b, y: I } = q(E);
    m = b, g = I;
  }
  function ee(E) {
    E.preventDefault();
    const { x: b, y: I } = q(E);
    p = b, T = I;
  }
  function D(E) {
    if (E.preventDefault(), h) {
      const { x: b, y: I } = q(E);
      let w = Math.min(m, b), A = Math.min(g, I), Y = Math.max(m, b), j = Math.max(g, I), re = w == Y && A == j;
      if (!re) {
        s.push([w, A, Y, j]);
        let C = o / i, P = a / l;
        u.push([
          Math.round(w * C),
          Math.round(A * P),
          re ? d == 0 ? 1 : 0 : 2,
          re ? 0 : Math.round(
            Y * C
          ),
          re ? 0 : Math.round(j * P),
          re ? 4 : 3
        ]), r("change", u);
      }
    }
    h = !1;
  }
  function ae() {
    Z(), window.requestAnimationFrame(() => {
      ae();
    });
  }
  function Z() {
    if (_)
      if (_.clearRect(0, 0, i, l), h && p != m && g != T) {
        let E = s.slice();
        E.push([m, g, p, T]), ve(E);
      } else
        ve(s);
  }
  function ve(E) {
    _ && (_.strokeStyle = "#FF0000", _.fillStyle = "rgba(0, 0, 0, 0.1)", _.beginPath(), E.forEach((b) => {
      b[0] != b[2] && b[1] != b[3] && _.rect(b[0], b[1], b[2] - b[0], b[3] - b[1]);
    }), _.fill(), _.stroke(), _.strokeStyle = "#000");
  }
  function H(E) {
    Sm.call(this, t, E);
  }
  function x(E) {
    yo[E ? "unshift" : "push"](() => {
      f = E, n(1, f);
    });
  }
  function ye(E) {
    yo[E ? "unshift" : "push"](() => {
      c = E, n(0, c);
    });
  }
  return t.$$set = (E) => {
    "width" in E && n(5, i = E.width), "height" in E && n(6, l = E.height), "natural_width" in E && n(7, o = E.natural_width), "natural_height" in E && n(8, a = E.natural_height);
  }, [
    c,
    f,
    R,
    ee,
    D,
    i,
    l,
    o,
    a,
    W,
    k,
    L,
    H,
    x,
    ye
  ];
}
class Um extends Em {
  constructor(e) {
    super(), Tm(
      this,
      e,
      Dm,
      Rm,
      Hm,
      {
        width: 5,
        height: 6,
        natural_width: 7,
        natural_height: 8,
        resize_canvas: 9,
        clear: 10,
        undo: 11
      },
      null,
      [-1, -1]
    );
  }
  get width() {
    return this.$$.ctx[5];
  }
  set width(e) {
    this.$$set({ width: e }), Dn();
  }
  get height() {
    return this.$$.ctx[6];
  }
  set height(e) {
    this.$$set({ height: e }), Dn();
  }
  get natural_width() {
    return this.$$.ctx[7];
  }
  set natural_width(e) {
    this.$$set({ natural_width: e }), Dn();
  }
  get natural_height() {
    return this.$$.ctx[8];
  }
  set natural_height(e) {
    this.$$set({ natural_height: e }), Dn();
  }
  get resize_canvas() {
    return this.$$.ctx[9];
  }
  get clear() {
    return this.$$.ctx[10];
  }
  get undo() {
    return this.$$.ctx[11];
  }
}
const {
  SvelteComponent: qm,
  add_flush_callback: xi,
  append: Dt,
  attr: ct,
  bind: Xi,
  binding_callbacks: yn,
  bubble: mi,
  check_outros: xn,
  create_component: Vt,
  create_slot: Fm,
  destroy_component: xt,
  detach: tr,
  element: nr,
  empty: Gm,
  get_all_dirty_from_scope: jm,
  get_slot_changes: zm,
  group_outros: Xn,
  init: Vm,
  insert: rr,
  listen: ko,
  mount_component: Xt,
  noop: xm,
  run_all: Xm,
  safe_not_equal: Wm,
  space: _n,
  src_url_equal: So,
  toggle_class: Co,
  transition_in: fe,
  transition_out: ke,
  update_slot_base: Zm
} = window.__gradio__svelte__internal, { createEventDispatcher: Jm, tick: Ym } = window.__gradio__svelte__internal;
function To(t) {
  let e, n;
  return e = new ym({}), e.$on(
    "remove_box",
    /*remove_box_handler*/
    t[26]
  ), e.$on(
    "remove_boxes",
    /*remove_boxes_handler*/
    t[27]
  ), e.$on(
    "remove_image",
    /*remove_image_handler*/
    t[28]
  ), {
    c() {
      Vt(e.$$.fragment);
    },
    m(r, i) {
      Xt(e, r, i), n = !0;
    },
    p: xm,
    i(r) {
      n || (fe(e.$$.fragment, r), n = !0);
    },
    o(r) {
      ke(e.$$.fragment, r), n = !1;
    },
    d(r) {
      xt(e, r);
    }
  };
}
function Ao(t) {
  let e;
  const n = (
    /*#slots*/
    t[25].default
  ), r = Fm(
    n,
    t,
    /*$$scope*/
    t[40],
    null
  );
  return {
    c() {
      r && r.c();
    },
    m(i, l) {
      r && r.m(i, l), e = !0;
    },
    p(i, l) {
      r && r.p && (!e || l[1] & /*$$scope*/
      512) && Zm(
        r,
        n,
        i,
        /*$$scope*/
        i[40],
        e ? zm(
          n,
          /*$$scope*/
          i[40],
          l,
          null
        ) : jm(
          /*$$scope*/
          i[40]
        ),
        null
      );
    },
    i(i) {
      e || (fe(r, i), e = !0);
    },
    o(i) {
      ke(r, i), e = !1;
    },
    d(i) {
      r && r.d(i);
    }
  };
}
function Qm(t) {
  let e, n, r = (
    /*value*/
    t[1] === null && Ao(t)
  );
  return {
    c() {
      r && r.c(), e = Gm();
    },
    m(i, l) {
      r && r.m(i, l), rr(i, e, l), n = !0;
    },
    p(i, l) {
      /*value*/
      i[1] === null ? r ? (r.p(i, l), l[0] & /*value*/
      2 && fe(r, 1)) : (r = Ao(i), r.c(), fe(r, 1), r.m(e.parentNode, e)) : r && (Xn(), ke(r, 1, 1, () => {
        r = null;
      }), xn());
    },
    i(i) {
      n || (fe(r), n = !0);
    },
    o(i) {
      ke(r), n = !1;
    },
    d(i) {
      i && tr(e), r && r.d(i);
    }
  };
}
function Km(t) {
  let e, n, r, i, l, o, a, s, u, c = {};
  return o = new Um({ props: c }), t[38](o), o.$on(
    "change",
    /*handle_points_change*/
    t[17]
  ), {
    c() {
      e = nr("div"), n = nr("img"), l = _n(), Vt(o.$$.fragment), So(n.src, r = /*value*/
      t[1].url) || ct(n, "src", r), ct(n, "alt", i = /*value*/
      t[1].alt_text), ct(e, "class", "image-frame svelte-xgcoa0"), Co(
        e,
        "selectable",
        /*selectable*/
        t[7]
      );
    },
    m(f, _) {
      rr(f, e, _), Dt(e, n), Dt(e, l), Xt(o, e, null), a = !0, s || (u = [
        ko(
          n,
          "click",
          /*handle_click*/
          t[21]
        ),
        ko(
          n,
          "load",
          /*handle_image_load*/
          t[16]
        )
      ], s = !0);
    },
    p(f, _) {
      (!a || _[0] & /*value*/
      2 && !So(n.src, r = /*value*/
      f[1].url)) && ct(n, "src", r), (!a || _[0] & /*value*/
      2 && i !== (i = /*value*/
      f[1].alt_text)) && ct(n, "alt", i);
      const h = {};
      o.$set(h), (!a || _[0] & /*selectable*/
      128) && Co(
        e,
        "selectable",
        /*selectable*/
        f[7]
      );
    },
    i(f) {
      a || (fe(o.$$.fragment, f), a = !0);
    },
    o(f) {
      ke(o.$$.fragment, f), a = !1;
    },
    d(f) {
      f && tr(e), t[38](null), xt(o), s = !1, Xm(u);
    }
  };
}
function $m(t) {
  let e, n;
  return e = new J0({
    props: {
      root: (
        /*root*/
        t[8]
      ),
      mirror_webcam: (
        /*mirror_webcam*/
        t[6]
      ),
      streaming: (
        /*streaming*/
        t[5]
      ),
      mode: "image",
      include_audio: !1,
      i18n: (
        /*i18n*/
        t[9]
      )
    }
  }), e.$on(
    "capture",
    /*capture_handler*/
    t[33]
  ), e.$on(
    "stream",
    /*stream_handler*/
    t[34]
  ), e.$on(
    "error",
    /*error_handler_1*/
    t[35]
  ), e.$on(
    "drag",
    /*drag_handler*/
    t[36]
  ), e.$on(
    "upload",
    /*upload_handler*/
    t[37]
  ), {
    c() {
      Vt(e.$$.fragment);
    },
    m(r, i) {
      Xt(e, r, i), n = !0;
    },
    p(r, i) {
      const l = {};
      i[0] & /*root*/
      256 && (l.root = /*root*/
      r[8]), i[0] & /*mirror_webcam*/
      64 && (l.mirror_webcam = /*mirror_webcam*/
      r[6]), i[0] & /*streaming*/
      32 && (l.streaming = /*streaming*/
      r[5]), i[0] & /*i18n*/
      512 && (l.i18n = /*i18n*/
      r[9]), e.$set(l);
    },
    i(r) {
      n || (fe(e.$$.fragment, r), n = !0);
    },
    o(r) {
      ke(e.$$.fragment, r), n = !1;
    },
    d(r) {
      xt(e, r);
    }
  };
}
function Bo(t) {
  let e, n, r;
  function i(o) {
    t[39](o);
  }
  let l = {
    sources: (
      /*sources*/
      t[4]
    ),
    handle_clear: (
      /*handle_clear*/
      t[19]
    ),
    handle_select: (
      /*handle_select_source*/
      t[22]
    )
  };
  return (
    /*active_source*/
    t[0] !== void 0 && (l.active_source = /*active_source*/
    t[0]), e = new $f({ props: l }), yn.push(() => Xi(e, "active_source", i)), {
      c() {
        Vt(e.$$.fragment);
      },
      m(o, a) {
        Xt(e, o, a), r = !0;
      },
      p(o, a) {
        const s = {};
        a[0] & /*sources*/
        16 && (s.sources = /*sources*/
        o[4]), !n && a[0] & /*active_source*/
        1 && (n = !0, s.active_source = /*active_source*/
        o[0], xi(() => n = !1)), e.$set(s);
      },
      i(o) {
        r || (fe(e.$$.fragment, o), r = !0);
      },
      o(o) {
        ke(e.$$.fragment, o), r = !1;
      },
      d(o) {
        xt(e, o);
      }
    }
  );
}
function e1(t) {
  var W;
  let e, n, r, i, l, o, a, s, u, c, f, _, h = (
    /*sources*/
    t[4].length > 1 || /*sources*/
    t[4].includes("clipboard")
  ), d;
  e = new Qo({
    props: {
      show_label: (
        /*show_label*/
        t[3]
      ),
      Icon: lr,
      label: (
        /*label*/
        t[2] || "Image"
      )
    }
  });
  let m = (
    /*value*/
    ((W = t[1]) == null ? void 0 : W.url) && !/*active_streaming*/
    t[12] && To(t)
  );
  function g(k) {
    t[30](k);
  }
  function p(k) {
    t[31](k);
  }
  let T = {
    hidden: (
      /*value*/
      t[1] !== null || /*active_source*/
      t[0] === "webcam"
    ),
    filetype: (
      /*active_source*/
      t[0] === "clipboard" ? "clipboard" : "image/*"
    ),
    root: (
      /*root*/
      t[8]
    ),
    disable_click: !/*sources*/
    t[4].includes("upload"),
    $$slots: { default: [Qm] },
    $$scope: { ctx: t }
  };
  /*uploading*/
  t[10] !== void 0 && (T.uploading = /*uploading*/
  t[10]), /*dragging*/
  t[11] !== void 0 && (T.dragging = /*dragging*/
  t[11]), o = new um({ props: T }), t[29](o), yn.push(() => Xi(o, "uploading", g)), yn.push(() => Xi(o, "dragging", p)), o.$on(
    "load",
    /*handle_upload*/
    t[18]
  ), o.$on(
    "error",
    /*error_handler*/
    t[32]
  );
  const v = [$m, Km], B = [];
  function N(k, L) {
    return (
      /*active_source*/
      k[0] === "webcam" && /*streaming*/
      (k[5] || !/*streaming*/
      k[5] && !/*value*/
      k[1]) ? 0 : (
        /*value*/
        k[1] !== null && !/*streaming*/
        k[5] ? 1 : -1
      )
    );
  }
  ~(c = N(t)) && (f = B[c] = v[c](t));
  let y = h && Bo(t);
  return {
    c() {
      Vt(e.$$.fragment), n = _n(), r = nr("div"), m && m.c(), i = _n(), l = nr("div"), Vt(o.$$.fragment), u = _n(), f && f.c(), _ = _n(), y && y.c(), ct(l, "class", "upload-container svelte-xgcoa0"), ct(r, "data-testid", "image"), ct(r, "class", "image-container svelte-xgcoa0");
    },
    m(k, L) {
      Xt(e, k, L), rr(k, n, L), rr(k, r, L), m && m.m(r, null), Dt(r, i), Dt(r, l), Xt(o, l, null), Dt(l, u), ~c && B[c].m(l, null), Dt(r, _), y && y.m(r, null), d = !0;
    },
    p(k, L) {
      var D;
      const q = {};
      L[0] & /*show_label*/
      8 && (q.show_label = /*show_label*/
      k[3]), L[0] & /*label*/
      4 && (q.label = /*label*/
      k[2] || "Image"), e.$set(q), /*value*/
      (D = k[1]) != null && D.url && !/*active_streaming*/
      k[12] ? m ? (m.p(k, L), L[0] & /*value, active_streaming*/
      4098 && fe(m, 1)) : (m = To(k), m.c(), fe(m, 1), m.m(r, i)) : m && (Xn(), ke(m, 1, 1, () => {
        m = null;
      }), xn());
      const R = {};
      L[0] & /*value, active_source*/
      3 && (R.hidden = /*value*/
      k[1] !== null || /*active_source*/
      k[0] === "webcam"), L[0] & /*active_source*/
      1 && (R.filetype = /*active_source*/
      k[0] === "clipboard" ? "clipboard" : "image/*"), L[0] & /*root*/
      256 && (R.root = /*root*/
      k[8]), L[0] & /*sources*/
      16 && (R.disable_click = !/*sources*/
      k[4].includes("upload")), L[0] & /*value*/
      2 | L[1] & /*$$scope*/
      512 && (R.$$scope = { dirty: L, ctx: k }), !a && L[0] & /*uploading*/
      1024 && (a = !0, R.uploading = /*uploading*/
      k[10], xi(() => a = !1)), !s && L[0] & /*dragging*/
      2048 && (s = !0, R.dragging = /*dragging*/
      k[11], xi(() => s = !1)), o.$set(R);
      let ee = c;
      c = N(k), c === ee ? ~c && B[c].p(k, L) : (f && (Xn(), ke(B[ee], 1, 1, () => {
        B[ee] = null;
      }), xn()), ~c ? (f = B[c], f ? f.p(k, L) : (f = B[c] = v[c](k), f.c()), fe(f, 1), f.m(l, null)) : f = null), L[0] & /*sources*/
      16 && (h = /*sources*/
      k[4].length > 1 || /*sources*/
      k[4].includes("clipboard")), h ? y ? (y.p(k, L), L[0] & /*sources*/
      16 && fe(y, 1)) : (y = Bo(k), y.c(), fe(y, 1), y.m(r, null)) : y && (Xn(), ke(y, 1, 1, () => {
        y = null;
      }), xn());
    },
    i(k) {
      d || (fe(e.$$.fragment, k), fe(m), fe(o.$$.fragment, k), fe(f), fe(y), d = !0);
    },
    o(k) {
      ke(e.$$.fragment, k), ke(m), ke(o.$$.fragment, k), ke(f), ke(y), d = !1;
    },
    d(k) {
      k && (tr(n), tr(r)), xt(e, k), m && m.d(), t[29](null), xt(o), ~c && B[c].d(), y && y.d();
    }
  };
}
function t1(t) {
  let e, n = t[0], r = 1;
  for (; r < t.length; ) {
    const i = t[r], l = t[r + 1];
    if (r += 2, (i === "optionalAccess" || i === "optionalCall") && n == null)
      return;
    i === "access" || i === "optionalAccess" ? (e = n, n = l(n)) : (i === "call" || i === "optionalCall") && (n = l((...o) => n.call(e, ...o)), e = void 0);
  }
  return n;
}
function n1(t, e, n) {
  let r, { $$slots: i = {}, $$scope: l } = e;
  const o = Jm();
  let a, { value: s } = e, { points: u } = e, { label: c = void 0 } = e, { show_label: f } = e, { sources: _ = ["upload", "clipboard", "webcam"] } = e, { streaming: h = !1 } = e, { pending: d = !1 } = e, { mirror_webcam: m } = e, { selectable: g = !1 } = e, { root: p } = e, { i18n: T } = e, v, B = !1, { active_source: N = null } = e;
  function y(C) {
    const P = C.currentTarget;
    n(13, a.width = P.width, a), n(13, a.height = P.height, a), n(13, a.natural_width = P.naturalWidth, a), n(13, a.natural_height = P.naturalHeight, a), a.resize_canvas();
  }
  function W({ detail: C }) {
    n(23, u = C), o("points_change", C);
  }
  function k({ detail: C }) {
    n(1, s = C), o("upload", C);
  }
  function L() {
    n(1, s = null), o("clear"), o("change", null);
  }
  async function q(C) {
    n(24, d = !0);
    const P = await v.load_files([new File([C], "webcam.png")]);
    n(1, s = t1([P, "optionalAccess", (de) => de[0]]) || null), await Ym(), o(h ? "stream" : "change"), n(24, d = !1);
  }
  let R = !1;
  function ee(C) {
    let P = us(C);
    P && o("select", { index: P, value: null });
  }
  async function D(C) {
    switch (C) {
      case "clipboard":
        v.paste_clipboard();
        break;
    }
  }
  const ae = () => {
    a.undo();
  }, Z = () => {
    a.clear();
  }, ve = () => {
    n(1, s = null), o("clear");
  };
  function H(C) {
    yn[C ? "unshift" : "push"](() => {
      v = C, n(14, v);
    });
  }
  function x(C) {
    B = C, n(10, B);
  }
  function ye(C) {
    R = C, n(11, R);
  }
  function E(C) {
    mi.call(this, t, C);
  }
  const b = (C) => q(C.detail), I = (C) => q(C.detail);
  function w(C) {
    mi.call(this, t, C);
  }
  function A(C) {
    mi.call(this, t, C);
  }
  const Y = (C) => q(C.detail);
  function j(C) {
    yn[C ? "unshift" : "push"](() => {
      a = C, n(13, a);
    });
  }
  function re(C) {
    N = C, n(0, N), n(4, _);
  }
  return t.$$set = (C) => {
    "value" in C && n(1, s = C.value), "points" in C && n(23, u = C.points), "label" in C && n(2, c = C.label), "show_label" in C && n(3, f = C.show_label), "sources" in C && n(4, _ = C.sources), "streaming" in C && n(5, h = C.streaming), "pending" in C && n(24, d = C.pending), "mirror_webcam" in C && n(6, m = C.mirror_webcam), "selectable" in C && n(7, g = C.selectable), "root" in C && n(8, p = C.root), "i18n" in C && n(9, T = C.i18n), "active_source" in C && n(0, N = C.active_source), "$$scope" in C && n(40, l = C.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty[0] & /*active_source, sources*/
    17 && !N && _ && n(0, N = _[0]), t.$$.dirty[0] & /*streaming, active_source*/
    33 && n(12, r = h && N === "webcam"), t.$$.dirty[0] & /*uploading, active_streaming*/
    5120 && B && !r && n(1, s = null), t.$$.dirty[0] & /*dragging*/
    2048 && o("drag", R);
  }, [
    N,
    s,
    c,
    f,
    _,
    h,
    m,
    g,
    p,
    T,
    B,
    R,
    r,
    a,
    v,
    o,
    y,
    W,
    k,
    L,
    q,
    ee,
    D,
    u,
    d,
    i,
    ae,
    Z,
    ve,
    H,
    x,
    ye,
    E,
    b,
    I,
    w,
    A,
    Y,
    j,
    re,
    l
  ];
}
class r1 extends qm {
  constructor(e) {
    super(), Vm(
      this,
      e,
      n1,
      e1,
      Wm,
      {
        value: 1,
        points: 23,
        label: 2,
        show_label: 3,
        sources: 4,
        streaming: 5,
        pending: 24,
        mirror_webcam: 6,
        selectable: 7,
        root: 8,
        i18n: 9,
        active_source: 0
      },
      null,
      [-1, -1]
    );
  }
}
function Ut(t) {
  let e = ["", "k", "M", "G", "T", "P", "E", "Z"], n = 0;
  for (; t > 1e3 && n < e.length - 1; )
    t /= 1e3, n++;
  let r = e[n];
  return (Number.isInteger(t) ? t : t.toFixed(1)) + r;
}
const {
  SvelteComponent: i1,
  append: xe,
  attr: G,
  component_subscribe: Ho,
  detach: l1,
  element: o1,
  init: s1,
  insert: a1,
  noop: Po,
  safe_not_equal: u1,
  set_style: Un,
  svg_element: Xe,
  toggle_class: No
} = window.__gradio__svelte__internal, { onMount: c1 } = window.__gradio__svelte__internal;
function f1(t) {
  let e, n, r, i, l, o, a, s, u, c, f, _;
  return {
    c() {
      e = o1("div"), n = Xe("svg"), r = Xe("g"), i = Xe("path"), l = Xe("path"), o = Xe("path"), a = Xe("path"), s = Xe("g"), u = Xe("path"), c = Xe("path"), f = Xe("path"), _ = Xe("path"), G(i, "d", "M255.926 0.754768L509.702 139.936V221.027L255.926 81.8465V0.754768Z"), G(i, "fill", "#FF7C00"), G(i, "fill-opacity", "0.4"), G(i, "class", "svelte-43sxxs"), G(l, "d", "M509.69 139.936L254.981 279.641V361.255L509.69 221.55V139.936Z"), G(l, "fill", "#FF7C00"), G(l, "class", "svelte-43sxxs"), G(o, "d", "M0.250138 139.937L254.981 279.641V361.255L0.250138 221.55V139.937Z"), G(o, "fill", "#FF7C00"), G(o, "fill-opacity", "0.4"), G(o, "class", "svelte-43sxxs"), G(a, "d", "M255.923 0.232622L0.236328 139.936V221.55L255.923 81.8469V0.232622Z"), G(a, "fill", "#FF7C00"), G(a, "class", "svelte-43sxxs"), Un(r, "transform", "translate(" + /*$top*/
      t[1][0] + "px, " + /*$top*/
      t[1][1] + "px)"), G(u, "d", "M255.926 141.5L509.702 280.681V361.773L255.926 222.592V141.5Z"), G(u, "fill", "#FF7C00"), G(u, "fill-opacity", "0.4"), G(u, "class", "svelte-43sxxs"), G(c, "d", "M509.69 280.679L254.981 420.384V501.998L509.69 362.293V280.679Z"), G(c, "fill", "#FF7C00"), G(c, "class", "svelte-43sxxs"), G(f, "d", "M0.250138 280.681L254.981 420.386V502L0.250138 362.295V280.681Z"), G(f, "fill", "#FF7C00"), G(f, "fill-opacity", "0.4"), G(f, "class", "svelte-43sxxs"), G(_, "d", "M255.923 140.977L0.236328 280.68V362.294L255.923 222.591V140.977Z"), G(_, "fill", "#FF7C00"), G(_, "class", "svelte-43sxxs"), Un(s, "transform", "translate(" + /*$bottom*/
      t[2][0] + "px, " + /*$bottom*/
      t[2][1] + "px)"), G(n, "viewBox", "-1200 -1200 3000 3000"), G(n, "fill", "none"), G(n, "xmlns", "http://www.w3.org/2000/svg"), G(n, "class", "svelte-43sxxs"), G(e, "class", "svelte-43sxxs"), No(
        e,
        "margin",
        /*margin*/
        t[0]
      );
    },
    m(h, d) {
      a1(h, e, d), xe(e, n), xe(n, r), xe(r, i), xe(r, l), xe(r, o), xe(r, a), xe(n, s), xe(s, u), xe(s, c), xe(s, f), xe(s, _);
    },
    p(h, [d]) {
      d & /*$top*/
      2 && Un(r, "transform", "translate(" + /*$top*/
      h[1][0] + "px, " + /*$top*/
      h[1][1] + "px)"), d & /*$bottom*/
      4 && Un(s, "transform", "translate(" + /*$bottom*/
      h[2][0] + "px, " + /*$bottom*/
      h[2][1] + "px)"), d & /*margin*/
      1 && No(
        e,
        "margin",
        /*margin*/
        h[0]
      );
    },
    i: Po,
    o: Po,
    d(h) {
      h && l1(e);
    }
  };
}
function _1(t, e, n) {
  let r, i, { margin: l = !0 } = e;
  const o = Xl([0, 0]);
  Ho(t, o, (_) => n(1, r = _));
  const a = Xl([0, 0]);
  Ho(t, a, (_) => n(2, i = _));
  let s;
  async function u() {
    await Promise.all([o.set([125, 140]), a.set([-125, -140])]), await Promise.all([o.set([-125, 140]), a.set([125, -140])]), await Promise.all([o.set([-125, 0]), a.set([125, -0])]), await Promise.all([o.set([125, 0]), a.set([-125, 0])]);
  }
  async function c() {
    await u(), s || c();
  }
  async function f() {
    await Promise.all([o.set([125, 0]), a.set([-125, 0])]), c();
  }
  return c1(() => (f(), () => s = !0)), t.$$set = (_) => {
    "margin" in _ && n(0, l = _.margin);
  }, [l, r, i, o, a];
}
class h1 extends i1 {
  constructor(e) {
    super(), s1(this, e, _1, f1, u1, { margin: 0 });
  }
}
const {
  SvelteComponent: d1,
  append: kt,
  attr: Je,
  binding_callbacks: Io,
  check_outros: ca,
  create_component: m1,
  create_slot: p1,
  destroy_component: g1,
  destroy_each: fa,
  detach: O,
  element: nt,
  empty: nn,
  ensure_array_like: ir,
  get_all_dirty_from_scope: b1,
  get_slot_changes: w1,
  group_outros: _a,
  init: v1,
  insert: M,
  mount_component: y1,
  noop: Wi,
  safe_not_equal: E1,
  set_data: Ge,
  set_style: _t,
  space: Ye,
  text: ne,
  toggle_class: Fe,
  transition_in: Wt,
  transition_out: Zt,
  update_slot_base: k1
} = window.__gradio__svelte__internal, { tick: S1 } = window.__gradio__svelte__internal, { onDestroy: C1 } = window.__gradio__svelte__internal, T1 = (t) => ({}), Lo = (t) => ({});
function Oo(t, e, n) {
  const r = t.slice();
  return r[38] = e[n], r[40] = n, r;
}
function Mo(t, e, n) {
  const r = t.slice();
  return r[38] = e[n], r;
}
function A1(t) {
  let e, n = (
    /*i18n*/
    t[1]("common.error") + ""
  ), r, i, l;
  const o = (
    /*#slots*/
    t[29].error
  ), a = p1(
    o,
    t,
    /*$$scope*/
    t[28],
    Lo
  );
  return {
    c() {
      e = nt("span"), r = ne(n), i = Ye(), a && a.c(), Je(e, "class", "error svelte-1yserjw");
    },
    m(s, u) {
      M(s, e, u), kt(e, r), M(s, i, u), a && a.m(s, u), l = !0;
    },
    p(s, u) {
      (!l || u[0] & /*i18n*/
      2) && n !== (n = /*i18n*/
      s[1]("common.error") + "") && Ge(r, n), a && a.p && (!l || u[0] & /*$$scope*/
      268435456) && k1(
        a,
        o,
        s,
        /*$$scope*/
        s[28],
        l ? w1(
          o,
          /*$$scope*/
          s[28],
          u,
          T1
        ) : b1(
          /*$$scope*/
          s[28]
        ),
        Lo
      );
    },
    i(s) {
      l || (Wt(a, s), l = !0);
    },
    o(s) {
      Zt(a, s), l = !1;
    },
    d(s) {
      s && (O(e), O(i)), a && a.d(s);
    }
  };
}
function B1(t) {
  let e, n, r, i, l, o, a, s, u, c = (
    /*variant*/
    t[8] === "default" && /*show_eta_bar*/
    t[18] && /*show_progress*/
    t[6] === "full" && Ro(t)
  );
  function f(v, B) {
    if (
      /*progress*/
      v[7]
    )
      return N1;
    if (
      /*queue_position*/
      v[2] !== null && /*queue_size*/
      v[3] !== void 0 && /*queue_position*/
      v[2] >= 0
    )
      return P1;
    if (
      /*queue_position*/
      v[2] === 0
    )
      return H1;
  }
  let _ = f(t), h = _ && _(t), d = (
    /*timer*/
    t[5] && qo(t)
  );
  const m = [M1, O1], g = [];
  function p(v, B) {
    return (
      /*last_progress_level*/
      v[15] != null ? 0 : (
        /*show_progress*/
        v[6] === "full" ? 1 : -1
      )
    );
  }
  ~(l = p(t)) && (o = g[l] = m[l](t));
  let T = !/*timer*/
  t[5] && Xo(t);
  return {
    c() {
      c && c.c(), e = Ye(), n = nt("div"), h && h.c(), r = Ye(), d && d.c(), i = Ye(), o && o.c(), a = Ye(), T && T.c(), s = nn(), Je(n, "class", "progress-text svelte-1yserjw"), Fe(
        n,
        "meta-text-center",
        /*variant*/
        t[8] === "center"
      ), Fe(
        n,
        "meta-text",
        /*variant*/
        t[8] === "default"
      );
    },
    m(v, B) {
      c && c.m(v, B), M(v, e, B), M(v, n, B), h && h.m(n, null), kt(n, r), d && d.m(n, null), M(v, i, B), ~l && g[l].m(v, B), M(v, a, B), T && T.m(v, B), M(v, s, B), u = !0;
    },
    p(v, B) {
      /*variant*/
      v[8] === "default" && /*show_eta_bar*/
      v[18] && /*show_progress*/
      v[6] === "full" ? c ? c.p(v, B) : (c = Ro(v), c.c(), c.m(e.parentNode, e)) : c && (c.d(1), c = null), _ === (_ = f(v)) && h ? h.p(v, B) : (h && h.d(1), h = _ && _(v), h && (h.c(), h.m(n, r))), /*timer*/
      v[5] ? d ? d.p(v, B) : (d = qo(v), d.c(), d.m(n, null)) : d && (d.d(1), d = null), (!u || B[0] & /*variant*/
      256) && Fe(
        n,
        "meta-text-center",
        /*variant*/
        v[8] === "center"
      ), (!u || B[0] & /*variant*/
      256) && Fe(
        n,
        "meta-text",
        /*variant*/
        v[8] === "default"
      );
      let N = l;
      l = p(v), l === N ? ~l && g[l].p(v, B) : (o && (_a(), Zt(g[N], 1, 1, () => {
        g[N] = null;
      }), ca()), ~l ? (o = g[l], o ? o.p(v, B) : (o = g[l] = m[l](v), o.c()), Wt(o, 1), o.m(a.parentNode, a)) : o = null), /*timer*/
      v[5] ? T && (T.d(1), T = null) : T ? T.p(v, B) : (T = Xo(v), T.c(), T.m(s.parentNode, s));
    },
    i(v) {
      u || (Wt(o), u = !0);
    },
    o(v) {
      Zt(o), u = !1;
    },
    d(v) {
      v && (O(e), O(n), O(i), O(a), O(s)), c && c.d(v), h && h.d(), d && d.d(), ~l && g[l].d(v), T && T.d(v);
    }
  };
}
function Ro(t) {
  let e, n = `translateX(${/*eta_level*/
  (t[17] || 0) * 100 - 100}%)`;
  return {
    c() {
      e = nt("div"), Je(e, "class", "eta-bar svelte-1yserjw"), _t(e, "transform", n);
    },
    m(r, i) {
      M(r, e, i);
    },
    p(r, i) {
      i[0] & /*eta_level*/
      131072 && n !== (n = `translateX(${/*eta_level*/
      (r[17] || 0) * 100 - 100}%)`) && _t(e, "transform", n);
    },
    d(r) {
      r && O(e);
    }
  };
}
function H1(t) {
  let e;
  return {
    c() {
      e = ne("processing |");
    },
    m(n, r) {
      M(n, e, r);
    },
    p: Wi,
    d(n) {
      n && O(e);
    }
  };
}
function P1(t) {
  let e, n = (
    /*queue_position*/
    t[2] + 1 + ""
  ), r, i, l, o;
  return {
    c() {
      e = ne("queue: "), r = ne(n), i = ne("/"), l = ne(
        /*queue_size*/
        t[3]
      ), o = ne(" |");
    },
    m(a, s) {
      M(a, e, s), M(a, r, s), M(a, i, s), M(a, l, s), M(a, o, s);
    },
    p(a, s) {
      s[0] & /*queue_position*/
      4 && n !== (n = /*queue_position*/
      a[2] + 1 + "") && Ge(r, n), s[0] & /*queue_size*/
      8 && Ge(
        l,
        /*queue_size*/
        a[3]
      );
    },
    d(a) {
      a && (O(e), O(r), O(i), O(l), O(o));
    }
  };
}
function N1(t) {
  let e, n = ir(
    /*progress*/
    t[7]
  ), r = [];
  for (let i = 0; i < n.length; i += 1)
    r[i] = Uo(Mo(t, n, i));
  return {
    c() {
      for (let i = 0; i < r.length; i += 1)
        r[i].c();
      e = nn();
    },
    m(i, l) {
      for (let o = 0; o < r.length; o += 1)
        r[o] && r[o].m(i, l);
      M(i, e, l);
    },
    p(i, l) {
      if (l[0] & /*progress*/
      128) {
        n = ir(
          /*progress*/
          i[7]
        );
        let o;
        for (o = 0; o < n.length; o += 1) {
          const a = Mo(i, n, o);
          r[o] ? r[o].p(a, l) : (r[o] = Uo(a), r[o].c(), r[o].m(e.parentNode, e));
        }
        for (; o < r.length; o += 1)
          r[o].d(1);
        r.length = n.length;
      }
    },
    d(i) {
      i && O(e), fa(r, i);
    }
  };
}
function Do(t) {
  let e, n = (
    /*p*/
    t[38].unit + ""
  ), r, i, l = " ", o;
  function a(c, f) {
    return (
      /*p*/
      c[38].length != null ? L1 : I1
    );
  }
  let s = a(t), u = s(t);
  return {
    c() {
      u.c(), e = Ye(), r = ne(n), i = ne(" | "), o = ne(l);
    },
    m(c, f) {
      u.m(c, f), M(c, e, f), M(c, r, f), M(c, i, f), M(c, o, f);
    },
    p(c, f) {
      s === (s = a(c)) && u ? u.p(c, f) : (u.d(1), u = s(c), u && (u.c(), u.m(e.parentNode, e))), f[0] & /*progress*/
      128 && n !== (n = /*p*/
      c[38].unit + "") && Ge(r, n);
    },
    d(c) {
      c && (O(e), O(r), O(i), O(o)), u.d(c);
    }
  };
}
function I1(t) {
  let e = Ut(
    /*p*/
    t[38].index || 0
  ) + "", n;
  return {
    c() {
      n = ne(e);
    },
    m(r, i) {
      M(r, n, i);
    },
    p(r, i) {
      i[0] & /*progress*/
      128 && e !== (e = Ut(
        /*p*/
        r[38].index || 0
      ) + "") && Ge(n, e);
    },
    d(r) {
      r && O(n);
    }
  };
}
function L1(t) {
  let e = Ut(
    /*p*/
    t[38].index || 0
  ) + "", n, r, i = Ut(
    /*p*/
    t[38].length
  ) + "", l;
  return {
    c() {
      n = ne(e), r = ne("/"), l = ne(i);
    },
    m(o, a) {
      M(o, n, a), M(o, r, a), M(o, l, a);
    },
    p(o, a) {
      a[0] & /*progress*/
      128 && e !== (e = Ut(
        /*p*/
        o[38].index || 0
      ) + "") && Ge(n, e), a[0] & /*progress*/
      128 && i !== (i = Ut(
        /*p*/
        o[38].length
      ) + "") && Ge(l, i);
    },
    d(o) {
      o && (O(n), O(r), O(l));
    }
  };
}
function Uo(t) {
  let e, n = (
    /*p*/
    t[38].index != null && Do(t)
  );
  return {
    c() {
      n && n.c(), e = nn();
    },
    m(r, i) {
      n && n.m(r, i), M(r, e, i);
    },
    p(r, i) {
      /*p*/
      r[38].index != null ? n ? n.p(r, i) : (n = Do(r), n.c(), n.m(e.parentNode, e)) : n && (n.d(1), n = null);
    },
    d(r) {
      r && O(e), n && n.d(r);
    }
  };
}
function qo(t) {
  let e, n = (
    /*eta*/
    t[0] ? `/${/*formatted_eta*/
    t[19]}` : ""
  ), r, i;
  return {
    c() {
      e = ne(
        /*formatted_timer*/
        t[20]
      ), r = ne(n), i = ne("s");
    },
    m(l, o) {
      M(l, e, o), M(l, r, o), M(l, i, o);
    },
    p(l, o) {
      o[0] & /*formatted_timer*/
      1048576 && Ge(
        e,
        /*formatted_timer*/
        l[20]
      ), o[0] & /*eta, formatted_eta*/
      524289 && n !== (n = /*eta*/
      l[0] ? `/${/*formatted_eta*/
      l[19]}` : "") && Ge(r, n);
    },
    d(l) {
      l && (O(e), O(r), O(i));
    }
  };
}
function O1(t) {
  let e, n;
  return e = new h1({
    props: { margin: (
      /*variant*/
      t[8] === "default"
    ) }
  }), {
    c() {
      m1(e.$$.fragment);
    },
    m(r, i) {
      y1(e, r, i), n = !0;
    },
    p(r, i) {
      const l = {};
      i[0] & /*variant*/
      256 && (l.margin = /*variant*/
      r[8] === "default"), e.$set(l);
    },
    i(r) {
      n || (Wt(e.$$.fragment, r), n = !0);
    },
    o(r) {
      Zt(e.$$.fragment, r), n = !1;
    },
    d(r) {
      g1(e, r);
    }
  };
}
function M1(t) {
  let e, n, r, i, l, o = `${/*last_progress_level*/
  t[15] * 100}%`, a = (
    /*progress*/
    t[7] != null && Fo(t)
  );
  return {
    c() {
      e = nt("div"), n = nt("div"), a && a.c(), r = Ye(), i = nt("div"), l = nt("div"), Je(n, "class", "progress-level-inner svelte-1yserjw"), Je(l, "class", "progress-bar svelte-1yserjw"), _t(l, "width", o), Je(i, "class", "progress-bar-wrap svelte-1yserjw"), Je(e, "class", "progress-level svelte-1yserjw");
    },
    m(s, u) {
      M(s, e, u), kt(e, n), a && a.m(n, null), kt(e, r), kt(e, i), kt(i, l), t[30](l);
    },
    p(s, u) {
      /*progress*/
      s[7] != null ? a ? a.p(s, u) : (a = Fo(s), a.c(), a.m(n, null)) : a && (a.d(1), a = null), u[0] & /*last_progress_level*/
      32768 && o !== (o = `${/*last_progress_level*/
      s[15] * 100}%`) && _t(l, "width", o);
    },
    i: Wi,
    o: Wi,
    d(s) {
      s && O(e), a && a.d(), t[30](null);
    }
  };
}
function Fo(t) {
  let e, n = ir(
    /*progress*/
    t[7]
  ), r = [];
  for (let i = 0; i < n.length; i += 1)
    r[i] = xo(Oo(t, n, i));
  return {
    c() {
      for (let i = 0; i < r.length; i += 1)
        r[i].c();
      e = nn();
    },
    m(i, l) {
      for (let o = 0; o < r.length; o += 1)
        r[o] && r[o].m(i, l);
      M(i, e, l);
    },
    p(i, l) {
      if (l[0] & /*progress_level, progress*/
      16512) {
        n = ir(
          /*progress*/
          i[7]
        );
        let o;
        for (o = 0; o < n.length; o += 1) {
          const a = Oo(i, n, o);
          r[o] ? r[o].p(a, l) : (r[o] = xo(a), r[o].c(), r[o].m(e.parentNode, e));
        }
        for (; o < r.length; o += 1)
          r[o].d(1);
        r.length = n.length;
      }
    },
    d(i) {
      i && O(e), fa(r, i);
    }
  };
}
function Go(t) {
  let e, n, r, i, l = (
    /*i*/
    t[40] !== 0 && R1()
  ), o = (
    /*p*/
    t[38].desc != null && jo(t)
  ), a = (
    /*p*/
    t[38].desc != null && /*progress_level*/
    t[14] && /*progress_level*/
    t[14][
      /*i*/
      t[40]
    ] != null && zo()
  ), s = (
    /*progress_level*/
    t[14] != null && Vo(t)
  );
  return {
    c() {
      l && l.c(), e = Ye(), o && o.c(), n = Ye(), a && a.c(), r = Ye(), s && s.c(), i = nn();
    },
    m(u, c) {
      l && l.m(u, c), M(u, e, c), o && o.m(u, c), M(u, n, c), a && a.m(u, c), M(u, r, c), s && s.m(u, c), M(u, i, c);
    },
    p(u, c) {
      /*p*/
      u[38].desc != null ? o ? o.p(u, c) : (o = jo(u), o.c(), o.m(n.parentNode, n)) : o && (o.d(1), o = null), /*p*/
      u[38].desc != null && /*progress_level*/
      u[14] && /*progress_level*/
      u[14][
        /*i*/
        u[40]
      ] != null ? a || (a = zo(), a.c(), a.m(r.parentNode, r)) : a && (a.d(1), a = null), /*progress_level*/
      u[14] != null ? s ? s.p(u, c) : (s = Vo(u), s.c(), s.m(i.parentNode, i)) : s && (s.d(1), s = null);
    },
    d(u) {
      u && (O(e), O(n), O(r), O(i)), l && l.d(u), o && o.d(u), a && a.d(u), s && s.d(u);
    }
  };
}
function R1(t) {
  let e;
  return {
    c() {
      e = ne(" /");
    },
    m(n, r) {
      M(n, e, r);
    },
    d(n) {
      n && O(e);
    }
  };
}
function jo(t) {
  let e = (
    /*p*/
    t[38].desc + ""
  ), n;
  return {
    c() {
      n = ne(e);
    },
    m(r, i) {
      M(r, n, i);
    },
    p(r, i) {
      i[0] & /*progress*/
      128 && e !== (e = /*p*/
      r[38].desc + "") && Ge(n, e);
    },
    d(r) {
      r && O(n);
    }
  };
}
function zo(t) {
  let e;
  return {
    c() {
      e = ne("-");
    },
    m(n, r) {
      M(n, e, r);
    },
    d(n) {
      n && O(e);
    }
  };
}
function Vo(t) {
  let e = (100 * /*progress_level*/
  (t[14][
    /*i*/
    t[40]
  ] || 0)).toFixed(1) + "", n, r;
  return {
    c() {
      n = ne(e), r = ne("%");
    },
    m(i, l) {
      M(i, n, l), M(i, r, l);
    },
    p(i, l) {
      l[0] & /*progress_level*/
      16384 && e !== (e = (100 * /*progress_level*/
      (i[14][
        /*i*/
        i[40]
      ] || 0)).toFixed(1) + "") && Ge(n, e);
    },
    d(i) {
      i && (O(n), O(r));
    }
  };
}
function xo(t) {
  let e, n = (
    /*p*/
    (t[38].desc != null || /*progress_level*/
    t[14] && /*progress_level*/
    t[14][
      /*i*/
      t[40]
    ] != null) && Go(t)
  );
  return {
    c() {
      n && n.c(), e = nn();
    },
    m(r, i) {
      n && n.m(r, i), M(r, e, i);
    },
    p(r, i) {
      /*p*/
      r[38].desc != null || /*progress_level*/
      r[14] && /*progress_level*/
      r[14][
        /*i*/
        r[40]
      ] != null ? n ? n.p(r, i) : (n = Go(r), n.c(), n.m(e.parentNode, e)) : n && (n.d(1), n = null);
    },
    d(r) {
      r && O(e), n && n.d(r);
    }
  };
}
function Xo(t) {
  let e, n;
  return {
    c() {
      e = nt("p"), n = ne(
        /*loading_text*/
        t[9]
      ), Je(e, "class", "loading svelte-1yserjw");
    },
    m(r, i) {
      M(r, e, i), kt(e, n);
    },
    p(r, i) {
      i[0] & /*loading_text*/
      512 && Ge(
        n,
        /*loading_text*/
        r[9]
      );
    },
    d(r) {
      r && O(e);
    }
  };
}
function D1(t) {
  let e, n, r, i, l;
  const o = [B1, A1], a = [];
  function s(u, c) {
    return (
      /*status*/
      u[4] === "pending" ? 0 : (
        /*status*/
        u[4] === "error" ? 1 : -1
      )
    );
  }
  return ~(n = s(t)) && (r = a[n] = o[n](t)), {
    c() {
      e = nt("div"), r && r.c(), Je(e, "class", i = "wrap " + /*variant*/
      t[8] + " " + /*show_progress*/
      t[6] + " svelte-1yserjw"), Fe(e, "hide", !/*status*/
      t[4] || /*status*/
      t[4] === "complete" || /*show_progress*/
      t[6] === "hidden"), Fe(
        e,
        "translucent",
        /*variant*/
        t[8] === "center" && /*status*/
        (t[4] === "pending" || /*status*/
        t[4] === "error") || /*translucent*/
        t[11] || /*show_progress*/
        t[6] === "minimal"
      ), Fe(
        e,
        "generating",
        /*status*/
        t[4] === "generating"
      ), Fe(
        e,
        "border",
        /*border*/
        t[12]
      ), _t(
        e,
        "position",
        /*absolute*/
        t[10] ? "absolute" : "static"
      ), _t(
        e,
        "padding",
        /*absolute*/
        t[10] ? "0" : "var(--size-8) 0"
      );
    },
    m(u, c) {
      M(u, e, c), ~n && a[n].m(e, null), t[31](e), l = !0;
    },
    p(u, c) {
      let f = n;
      n = s(u), n === f ? ~n && a[n].p(u, c) : (r && (_a(), Zt(a[f], 1, 1, () => {
        a[f] = null;
      }), ca()), ~n ? (r = a[n], r ? r.p(u, c) : (r = a[n] = o[n](u), r.c()), Wt(r, 1), r.m(e, null)) : r = null), (!l || c[0] & /*variant, show_progress*/
      320 && i !== (i = "wrap " + /*variant*/
      u[8] + " " + /*show_progress*/
      u[6] + " svelte-1yserjw")) && Je(e, "class", i), (!l || c[0] & /*variant, show_progress, status, show_progress*/
      336) && Fe(e, "hide", !/*status*/
      u[4] || /*status*/
      u[4] === "complete" || /*show_progress*/
      u[6] === "hidden"), (!l || c[0] & /*variant, show_progress, variant, status, translucent, show_progress*/
      2384) && Fe(
        e,
        "translucent",
        /*variant*/
        u[8] === "center" && /*status*/
        (u[4] === "pending" || /*status*/
        u[4] === "error") || /*translucent*/
        u[11] || /*show_progress*/
        u[6] === "minimal"
      ), (!l || c[0] & /*variant, show_progress, status*/
      336) && Fe(
        e,
        "generating",
        /*status*/
        u[4] === "generating"
      ), (!l || c[0] & /*variant, show_progress, border*/
      4416) && Fe(
        e,
        "border",
        /*border*/
        u[12]
      ), c[0] & /*absolute*/
      1024 && _t(
        e,
        "position",
        /*absolute*/
        u[10] ? "absolute" : "static"
      ), c[0] & /*absolute*/
      1024 && _t(
        e,
        "padding",
        /*absolute*/
        u[10] ? "0" : "var(--size-8) 0"
      );
    },
    i(u) {
      l || (Wt(r), l = !0);
    },
    o(u) {
      Zt(r), l = !1;
    },
    d(u) {
      u && O(e), ~n && a[n].d(), t[31](null);
    }
  };
}
let qn = [], pi = !1;
async function U1(t, e = !0) {
  if (!(window.__gradio_mode__ === "website" || window.__gradio_mode__ !== "app" && e !== !0)) {
    if (qn.push(t), !pi)
      pi = !0;
    else
      return;
    await S1(), requestAnimationFrame(() => {
      let n = [0, 0];
      for (let r = 0; r < qn.length; r++) {
        const l = qn[r].getBoundingClientRect();
        (r === 0 || l.top + window.scrollY <= n[0]) && (n[0] = l.top + window.scrollY, n[1] = r);
      }
      window.scrollTo({ top: n[0] - 20, behavior: "smooth" }), pi = !1, qn = [];
    });
  }
}
function q1(t, e, n) {
  let r, { $$slots: i = {}, $$scope: l } = e, { i18n: o } = e, { eta: a = null } = e, { queue_position: s } = e, { queue_size: u } = e, { status: c } = e, { scroll_to_output: f = !1 } = e, { timer: _ = !0 } = e, { show_progress: h = "full" } = e, { message: d = null } = e, { progress: m = null } = e, { variant: g = "default" } = e, { loading_text: p = "Loading..." } = e, { absolute: T = !0 } = e, { translucent: v = !1 } = e, { border: B = !1 } = e, { autoscroll: N } = e, y, W = !1, k = 0, L = 0, q = null, R = null, ee = 0, D = null, ae, Z = null, ve = !0;
  const H = () => {
    n(0, a = n(26, q = n(19, E = null))), n(24, k = performance.now()), n(25, L = 0), W = !0, x();
  };
  function x() {
    requestAnimationFrame(() => {
      n(25, L = (performance.now() - k) / 1e3), W && x();
    });
  }
  function ye() {
    n(25, L = 0), n(0, a = n(26, q = n(19, E = null))), W && (W = !1);
  }
  C1(() => {
    W && ye();
  });
  let E = null;
  function b(w) {
    Io[w ? "unshift" : "push"](() => {
      Z = w, n(16, Z), n(7, m), n(14, D), n(15, ae);
    });
  }
  function I(w) {
    Io[w ? "unshift" : "push"](() => {
      y = w, n(13, y);
    });
  }
  return t.$$set = (w) => {
    "i18n" in w && n(1, o = w.i18n), "eta" in w && n(0, a = w.eta), "queue_position" in w && n(2, s = w.queue_position), "queue_size" in w && n(3, u = w.queue_size), "status" in w && n(4, c = w.status), "scroll_to_output" in w && n(21, f = w.scroll_to_output), "timer" in w && n(5, _ = w.timer), "show_progress" in w && n(6, h = w.show_progress), "message" in w && n(22, d = w.message), "progress" in w && n(7, m = w.progress), "variant" in w && n(8, g = w.variant), "loading_text" in w && n(9, p = w.loading_text), "absolute" in w && n(10, T = w.absolute), "translucent" in w && n(11, v = w.translucent), "border" in w && n(12, B = w.border), "autoscroll" in w && n(23, N = w.autoscroll), "$$scope" in w && n(28, l = w.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty[0] & /*eta, old_eta, timer_start, eta_from_start*/
    218103809 && (a === null && n(0, a = q), a != null && q !== a && (n(27, R = (performance.now() - k) / 1e3 + a), n(19, E = R.toFixed(1)), n(26, q = a))), t.$$.dirty[0] & /*eta_from_start, timer_diff*/
    167772160 && n(17, ee = R === null || R <= 0 || !L ? null : Math.min(L / R, 1)), t.$$.dirty[0] & /*progress*/
    128 && m != null && n(18, ve = !1), t.$$.dirty[0] & /*progress, progress_level, progress_bar, last_progress_level*/
    114816 && (m != null ? n(14, D = m.map((w) => {
      if (w.index != null && w.length != null)
        return w.index / w.length;
      if (w.progress != null)
        return w.progress;
    })) : n(14, D = null), D ? (n(15, ae = D[D.length - 1]), Z && (ae === 0 ? n(16, Z.style.transition = "0", Z) : n(16, Z.style.transition = "150ms", Z))) : n(15, ae = void 0)), t.$$.dirty[0] & /*status*/
    16 && (c === "pending" ? H() : ye()), t.$$.dirty[0] & /*el, scroll_to_output, status, autoscroll*/
    10493968 && y && f && (c === "pending" || c === "complete") && U1(y, N), t.$$.dirty[0] & /*status, message*/
    4194320, t.$$.dirty[0] & /*timer_diff*/
    33554432 && n(20, r = L.toFixed(1));
  }, [
    a,
    o,
    s,
    u,
    c,
    _,
    h,
    m,
    g,
    p,
    T,
    v,
    B,
    y,
    D,
    ae,
    Z,
    ee,
    ve,
    E,
    r,
    f,
    d,
    N,
    k,
    L,
    q,
    R,
    l,
    i,
    b,
    I
  ];
}
class ha extends d1 {
  constructor(e) {
    super(), v1(
      this,
      e,
      q1,
      D1,
      E1,
      {
        i18n: 1,
        eta: 0,
        queue_position: 2,
        queue_size: 3,
        status: 4,
        scroll_to_output: 21,
        timer: 5,
        show_progress: 6,
        message: 22,
        progress: 7,
        variant: 8,
        loading_text: 9,
        absolute: 10,
        translucent: 11,
        border: 12,
        autoscroll: 23
      },
      null,
      [-1, -1]
    );
  }
}
const {
  SvelteComponent: F1,
  attr: G1,
  check_outros: j1,
  create_component: z1,
  destroy_component: V1,
  detach: x1,
  element: X1,
  group_outros: W1,
  init: Z1,
  insert: J1,
  mount_component: Y1,
  safe_not_equal: Q1,
  toggle_class: ut,
  transition_in: Wn,
  transition_out: Zi
} = window.__gradio__svelte__internal;
function Wo(t) {
  let e, n;
  return e = new ws({
    props: {
      src: (
        /*samples_dir*/
        t[1] + /*value*/
        t[0].path
      ),
      alt: ""
    }
  }), {
    c() {
      z1(e.$$.fragment);
    },
    m(r, i) {
      Y1(e, r, i), n = !0;
    },
    p(r, i) {
      const l = {};
      i & /*samples_dir, value*/
      3 && (l.src = /*samples_dir*/
      r[1] + /*value*/
      r[0].path), e.$set(l);
    },
    i(r) {
      n || (Wn(e.$$.fragment, r), n = !0);
    },
    o(r) {
      Zi(e.$$.fragment, r), n = !1;
    },
    d(r) {
      V1(e, r);
    }
  };
}
function K1(t) {
  let e, n, r = (
    /*value*/
    t[0] && Wo(t)
  );
  return {
    c() {
      e = X1("div"), r && r.c(), G1(e, "class", "container svelte-1sgcyba"), ut(
        e,
        "table",
        /*type*/
        t[2] === "table"
      ), ut(
        e,
        "gallery",
        /*type*/
        t[2] === "gallery"
      ), ut(
        e,
        "selected",
        /*selected*/
        t[3]
      ), ut(
        e,
        "border",
        /*value*/
        t[0]
      );
    },
    m(i, l) {
      J1(i, e, l), r && r.m(e, null), n = !0;
    },
    p(i, [l]) {
      /*value*/
      i[0] ? r ? (r.p(i, l), l & /*value*/
      1 && Wn(r, 1)) : (r = Wo(i), r.c(), Wn(r, 1), r.m(e, null)) : r && (W1(), Zi(r, 1, 1, () => {
        r = null;
      }), j1()), (!n || l & /*type*/
      4) && ut(
        e,
        "table",
        /*type*/
        i[2] === "table"
      ), (!n || l & /*type*/
      4) && ut(
        e,
        "gallery",
        /*type*/
        i[2] === "gallery"
      ), (!n || l & /*selected*/
      8) && ut(
        e,
        "selected",
        /*selected*/
        i[3]
      ), (!n || l & /*value*/
      1) && ut(
        e,
        "border",
        /*value*/
        i[0]
      );
    },
    i(i) {
      n || (Wn(r), n = !0);
    },
    o(i) {
      Zi(r), n = !1;
    },
    d(i) {
      i && x1(e), r && r.d();
    }
  };
}
function $1(t, e, n) {
  let { value: r } = e, { samples_dir: i } = e, { type: l } = e, { selected: o = !1 } = e;
  return t.$$set = (a) => {
    "value" in a && n(0, r = a.value), "samples_dir" in a && n(1, i = a.samples_dir), "type" in a && n(2, l = a.type), "selected" in a && n(3, o = a.selected);
  }, [r, i, l, o];
}
class Ep extends F1 {
  constructor(e) {
    super(), Z1(this, e, $1, K1, Q1, {
      value: 0,
      samples_dir: 1,
      type: 2,
      selected: 3
    });
  }
}
const {
  SvelteComponent: ep,
  add_flush_callback: gi,
  assign: da,
  bind: bi,
  binding_callbacks: wi,
  check_outros: ma,
  create_component: Ke,
  destroy_component: $e,
  detach: wr,
  empty: pa,
  flush: ie,
  get_spread_object: ga,
  get_spread_update: ba,
  group_outros: wa,
  init: tp,
  insert: vr,
  mount_component: et,
  safe_not_equal: np,
  space: va,
  transition_in: Ne,
  transition_out: Ie
} = window.__gradio__svelte__internal;
function rp(t) {
  let e, n;
  return e = new Yo({
    props: {
      visible: (
        /*visible*/
        t[4]
      ),
      variant: (
        /*_image*/
        t[22] === null ? "dashed" : "solid"
      ),
      border_mode: (
        /*dragging*/
        t[23] ? "focus" : "base"
      ),
      padding: !1,
      elem_id: (
        /*elem_id*/
        t[2]
      ),
      elem_classes: (
        /*elem_classes*/
        t[3]
      ),
      height: (
        /*height*/
        t[9] || void 0
      ),
      width: (
        /*width*/
        t[10]
      ),
      allow_overflow: !1,
      container: (
        /*container*/
        t[12]
      ),
      scale: (
        /*scale*/
        t[13]
      ),
      min_width: (
        /*min_width*/
        t[14]
      ),
      $$slots: { default: [cp] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Ke(e.$$.fragment);
    },
    m(r, i) {
      et(e, r, i), n = !0;
    },
    p(r, i) {
      const l = {};
      i[0] & /*visible*/
      16 && (l.visible = /*visible*/
      r[4]), i[0] & /*_image*/
      4194304 && (l.variant = /*_image*/
      r[22] === null ? "dashed" : "solid"), i[0] & /*dragging*/
      8388608 && (l.border_mode = /*dragging*/
      r[23] ? "focus" : "base"), i[0] & /*elem_id*/
      4 && (l.elem_id = /*elem_id*/
      r[2]), i[0] & /*elem_classes*/
      8 && (l.elem_classes = /*elem_classes*/
      r[3]), i[0] & /*height*/
      512 && (l.height = /*height*/
      r[9] || void 0), i[0] & /*width*/
      1024 && (l.width = /*width*/
      r[10]), i[0] & /*container*/
      4096 && (l.container = /*container*/
      r[12]), i[0] & /*scale*/
      8192 && (l.scale = /*scale*/
      r[13]), i[0] & /*min_width*/
      16384 && (l.min_width = /*min_width*/
      r[14]), i[0] & /*_selectable, root, sources, label, show_label, pending, streaming, mirror_webcam, gradio, active_source, _image, _points, value, dragging, loading_status*/
      66914659 | i[1] & /*$$scope*/
      8192 && (l.$$scope = { dirty: i, ctx: r }), e.$set(l);
    },
    i(r) {
      n || (Ne(e.$$.fragment, r), n = !0);
    },
    o(r) {
      Ie(e.$$.fragment, r), n = !1;
    },
    d(r) {
      $e(e, r);
    }
  };
}
function ip(t) {
  let e, n;
  return e = new Yo({
    props: {
      visible: (
        /*visible*/
        t[4]
      ),
      variant: "solid",
      border_mode: (
        /*dragging*/
        t[23] ? "focus" : "base"
      ),
      padding: !1,
      elem_id: (
        /*elem_id*/
        t[2]
      ),
      elem_classes: (
        /*elem_classes*/
        t[3]
      ),
      height: (
        /*height*/
        t[9] || void 0
      ),
      width: (
        /*width*/
        t[10]
      ),
      allow_overflow: !1,
      container: (
        /*container*/
        t[12]
      ),
      scale: (
        /*scale*/
        t[13]
      ),
      min_width: (
        /*min_width*/
        t[14]
      ),
      $$slots: { default: [fp] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Ke(e.$$.fragment);
    },
    m(r, i) {
      et(e, r, i), n = !0;
    },
    p(r, i) {
      const l = {};
      i[0] & /*visible*/
      16 && (l.visible = /*visible*/
      r[4]), i[0] & /*dragging*/
      8388608 && (l.border_mode = /*dragging*/
      r[23] ? "focus" : "base"), i[0] & /*elem_id*/
      4 && (l.elem_id = /*elem_id*/
      r[2]), i[0] & /*elem_classes*/
      8 && (l.elem_classes = /*elem_classes*/
      r[3]), i[0] & /*height*/
      512 && (l.height = /*height*/
      r[9] || void 0), i[0] & /*width*/
      1024 && (l.width = /*width*/
      r[10]), i[0] & /*container*/
      4096 && (l.container = /*container*/
      r[12]), i[0] & /*scale*/
      8192 && (l.scale = /*scale*/
      r[13]), i[0] & /*min_width*/
      16384 && (l.min_width = /*min_width*/
      r[14]), i[0] & /*_image, label, show_label, show_download_button, _selectable, show_share_button, gradio, loading_status*/
      6326498 | i[1] & /*$$scope*/
      8192 && (l.$$scope = { dirty: i, ctx: r }), e.$set(l);
    },
    i(r) {
      n || (Ne(e.$$.fragment, r), n = !0);
    },
    o(r) {
      Ie(e.$$.fragment, r), n = !1;
    },
    d(r) {
      $e(e, r);
    }
  };
}
function lp(t) {
  let e, n;
  return e = new es({
    props: {
      unpadded_box: !0,
      size: "large",
      $$slots: { default: [ap] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Ke(e.$$.fragment);
    },
    m(r, i) {
      et(e, r, i), n = !0;
    },
    p(r, i) {
      const l = {};
      i[1] & /*$$scope*/
      8192 && (l.$$scope = { dirty: i, ctx: r }), e.$set(l);
    },
    i(r) {
      n || (Ne(e.$$.fragment, r), n = !0);
    },
    o(r) {
      Ie(e.$$.fragment, r), n = !1;
    },
    d(r) {
      $e(e, r);
    }
  };
}
function op(t) {
  let e, n;
  return e = new as({
    props: {
      i18n: (
        /*gradio*/
        t[21].i18n
      ),
      type: "clipboard",
      mode: "short"
    }
  }), {
    c() {
      Ke(e.$$.fragment);
    },
    m(r, i) {
      et(e, r, i), n = !0;
    },
    p(r, i) {
      const l = {};
      i[0] & /*gradio*/
      2097152 && (l.i18n = /*gradio*/
      r[21].i18n), e.$set(l);
    },
    i(r) {
      n || (Ne(e.$$.fragment, r), n = !0);
    },
    o(r) {
      Ie(e.$$.fragment, r), n = !1;
    },
    d(r) {
      $e(e, r);
    }
  };
}
function sp(t) {
  let e, n;
  return e = new as({
    props: {
      i18n: (
        /*gradio*/
        t[21].i18n
      ),
      type: "image"
    }
  }), {
    c() {
      Ke(e.$$.fragment);
    },
    m(r, i) {
      et(e, r, i), n = !0;
    },
    p(r, i) {
      const l = {};
      i[0] & /*gradio*/
      2097152 && (l.i18n = /*gradio*/
      r[21].i18n), e.$set(l);
    },
    i(r) {
      n || (Ne(e.$$.fragment, r), n = !0);
    },
    o(r) {
      Ie(e.$$.fragment, r), n = !1;
    },
    d(r) {
      $e(e, r);
    }
  };
}
function ap(t) {
  let e, n;
  return e = new lr({}), {
    c() {
      Ke(e.$$.fragment);
    },
    m(r, i) {
      et(e, r, i), n = !0;
    },
    i(r) {
      n || (Ne(e.$$.fragment, r), n = !0);
    },
    o(r) {
      Ie(e.$$.fragment, r), n = !1;
    },
    d(r) {
      $e(e, r);
    }
  };
}
function up(t) {
  let e, n, r, i;
  const l = [sp, op, lp], o = [];
  function a(s, u) {
    return (
      /*active_source*/
      s[24] === "upload" || !/*active_source*/
      s[24] ? 0 : (
        /*active_source*/
        s[24] === "clipboard" ? 1 : 2
      )
    );
  }
  return e = a(t), n = o[e] = l[e](t), {
    c() {
      n.c(), r = pa();
    },
    m(s, u) {
      o[e].m(s, u), vr(s, r, u), i = !0;
    },
    p(s, u) {
      let c = e;
      e = a(s), e === c ? o[e].p(s, u) : (wa(), Ie(o[c], 1, 1, () => {
        o[c] = null;
      }), ma(), n = o[e], n ? n.p(s, u) : (n = o[e] = l[e](s), n.c()), Ne(n, 1), n.m(r.parentNode, r));
    },
    i(s) {
      i || (Ne(n), i = !0);
    },
    o(s) {
      Ie(n), i = !1;
    },
    d(s) {
      s && wr(r), o[e].d(s);
    }
  };
}
function cp(t) {
  let e, n, r, i, l, o, a;
  const s = [
    {
      autoscroll: (
        /*gradio*/
        t[21].autoscroll
      )
    },
    { i18n: (
      /*gradio*/
      t[21].i18n
    ) },
    /*loading_status*/
    t[1]
  ];
  let u = {};
  for (let d = 0; d < s.length; d += 1)
    u = da(u, s[d]);
  e = new ha({ props: u });
  function c(d) {
    t[32](d);
  }
  function f(d) {
    t[33](d);
  }
  function _(d) {
    t[34](d);
  }
  let h = {
    selectable: (
      /*_selectable*/
      t[11]
    ),
    root: (
      /*root*/
      t[8]
    ),
    sources: (
      /*sources*/
      t[16]
    ),
    label: (
      /*label*/
      t[5]
    ),
    show_label: (
      /*show_label*/
      t[6]
    ),
    pending: (
      /*pending*/
      t[19]
    ),
    streaming: (
      /*streaming*/
      t[18]
    ),
    mirror_webcam: (
      /*mirror_webcam*/
      t[20]
    ),
    i18n: (
      /*gradio*/
      t[21].i18n
    ),
    $$slots: { default: [up] },
    $$scope: { ctx: t }
  };
  return (
    /*active_source*/
    t[24] !== void 0 && (h.active_source = /*active_source*/
    t[24]), /*_image*/
    t[22] !== void 0 && (h.value = /*_image*/
    t[22]), /*_points*/
    t[25] !== void 0 && (h.points = /*_points*/
    t[25]), r = new r1({ props: h }), wi.push(() => bi(r, "active_source", c)), wi.push(() => bi(r, "value", f)), wi.push(() => bi(r, "points", _)), r.$on(
      "points_change",
      /*points_change_handler*/
      t[35]
    ), r.$on(
      "edit",
      /*edit_handler*/
      t[36]
    ), r.$on(
      "clear",
      /*clear_handler*/
      t[37]
    ), r.$on(
      "stream",
      /*stream_handler*/
      t[38]
    ), r.$on(
      "drag",
      /*drag_handler*/
      t[39]
    ), r.$on(
      "upload",
      /*upload_handler*/
      t[40]
    ), r.$on(
      "select",
      /*select_handler_1*/
      t[41]
    ), r.$on(
      "share",
      /*share_handler_1*/
      t[42]
    ), r.$on(
      "error",
      /*error_handler_1*/
      t[43]
    ), {
      c() {
        Ke(e.$$.fragment), n = va(), Ke(r.$$.fragment);
      },
      m(d, m) {
        et(e, d, m), vr(d, n, m), et(r, d, m), a = !0;
      },
      p(d, m) {
        const g = m[0] & /*gradio, loading_status*/
        2097154 ? ba(s, [
          m[0] & /*gradio*/
          2097152 && {
            autoscroll: (
              /*gradio*/
              d[21].autoscroll
            )
          },
          m[0] & /*gradio*/
          2097152 && { i18n: (
            /*gradio*/
            d[21].i18n
          ) },
          m[0] & /*loading_status*/
          2 && ga(
            /*loading_status*/
            d[1]
          )
        ]) : {};
        e.$set(g);
        const p = {};
        m[0] & /*_selectable*/
        2048 && (p.selectable = /*_selectable*/
        d[11]), m[0] & /*root*/
        256 && (p.root = /*root*/
        d[8]), m[0] & /*sources*/
        65536 && (p.sources = /*sources*/
        d[16]), m[0] & /*label*/
        32 && (p.label = /*label*/
        d[5]), m[0] & /*show_label*/
        64 && (p.show_label = /*show_label*/
        d[6]), m[0] & /*pending*/
        524288 && (p.pending = /*pending*/
        d[19]), m[0] & /*streaming*/
        262144 && (p.streaming = /*streaming*/
        d[18]), m[0] & /*mirror_webcam*/
        1048576 && (p.mirror_webcam = /*mirror_webcam*/
        d[20]), m[0] & /*gradio*/
        2097152 && (p.i18n = /*gradio*/
        d[21].i18n), m[0] & /*gradio, active_source*/
        18874368 | m[1] & /*$$scope*/
        8192 && (p.$$scope = { dirty: m, ctx: d }), !i && m[0] & /*active_source*/
        16777216 && (i = !0, p.active_source = /*active_source*/
        d[24], gi(() => i = !1)), !l && m[0] & /*_image*/
        4194304 && (l = !0, p.value = /*_image*/
        d[22], gi(() => l = !1)), !o && m[0] & /*_points*/
        33554432 && (o = !0, p.points = /*_points*/
        d[25], gi(() => o = !1)), r.$set(p);
      },
      i(d) {
        a || (Ne(e.$$.fragment, d), Ne(r.$$.fragment, d), a = !0);
      },
      o(d) {
        Ie(e.$$.fragment, d), Ie(r.$$.fragment, d), a = !1;
      },
      d(d) {
        d && wr(n), $e(e, d), $e(r, d);
      }
    }
  );
}
function fp(t) {
  let e, n, r, i;
  const l = [
    {
      autoscroll: (
        /*gradio*/
        t[21].autoscroll
      )
    },
    { i18n: (
      /*gradio*/
      t[21].i18n
    ) },
    /*loading_status*/
    t[1]
  ];
  let o = {};
  for (let a = 0; a < l.length; a += 1)
    o = da(o, l[a]);
  return e = new ha({ props: o }), r = new Q_({
    props: {
      value: (
        /*_image*/
        t[22]
      ),
      label: (
        /*label*/
        t[5]
      ),
      show_label: (
        /*show_label*/
        t[6]
      ),
      show_download_button: (
        /*show_download_button*/
        t[7]
      ),
      selectable: (
        /*_selectable*/
        t[11]
      ),
      show_share_button: (
        /*show_share_button*/
        t[15]
      ),
      i18n: (
        /*gradio*/
        t[21].i18n
      )
    }
  }), r.$on(
    "select",
    /*select_handler*/
    t[29]
  ), r.$on(
    "share",
    /*share_handler*/
    t[30]
  ), r.$on(
    "error",
    /*error_handler*/
    t[31]
  ), {
    c() {
      Ke(e.$$.fragment), n = va(), Ke(r.$$.fragment);
    },
    m(a, s) {
      et(e, a, s), vr(a, n, s), et(r, a, s), i = !0;
    },
    p(a, s) {
      const u = s[0] & /*gradio, loading_status*/
      2097154 ? ba(l, [
        s[0] & /*gradio*/
        2097152 && {
          autoscroll: (
            /*gradio*/
            a[21].autoscroll
          )
        },
        s[0] & /*gradio*/
        2097152 && { i18n: (
          /*gradio*/
          a[21].i18n
        ) },
        s[0] & /*loading_status*/
        2 && ga(
          /*loading_status*/
          a[1]
        )
      ]) : {};
      e.$set(u);
      const c = {};
      s[0] & /*_image*/
      4194304 && (c.value = /*_image*/
      a[22]), s[0] & /*label*/
      32 && (c.label = /*label*/
      a[5]), s[0] & /*show_label*/
      64 && (c.show_label = /*show_label*/
      a[6]), s[0] & /*show_download_button*/
      128 && (c.show_download_button = /*show_download_button*/
      a[7]), s[0] & /*_selectable*/
      2048 && (c.selectable = /*_selectable*/
      a[11]), s[0] & /*show_share_button*/
      32768 && (c.show_share_button = /*show_share_button*/
      a[15]), s[0] & /*gradio*/
      2097152 && (c.i18n = /*gradio*/
      a[21].i18n), r.$set(c);
    },
    i(a) {
      i || (Ne(e.$$.fragment, a), Ne(r.$$.fragment, a), i = !0);
    },
    o(a) {
      Ie(e.$$.fragment, a), Ie(r.$$.fragment, a), i = !1;
    },
    d(a) {
      a && wr(n), $e(e, a), $e(r, a);
    }
  };
}
function _p(t) {
  let e, n, r, i;
  const l = [ip, rp], o = [];
  function a(s, u) {
    return (
      /*interactive*/
      s[17] ? 1 : 0
    );
  }
  return e = a(t), n = o[e] = l[e](t), {
    c() {
      n.c(), r = pa();
    },
    m(s, u) {
      o[e].m(s, u), vr(s, r, u), i = !0;
    },
    p(s, u) {
      let c = e;
      e = a(s), e === c ? o[e].p(s, u) : (wa(), Ie(o[c], 1, 1, () => {
        o[c] = null;
      }), ma(), n = o[e], n ? n.p(s, u) : (n = o[e] = l[e](s), n.c()), Ne(n, 1), n.m(r.parentNode, r));
    },
    i(s) {
      i || (Ne(n), i = !0);
    },
    o(s) {
      Ie(n), i = !1;
    },
    d(s) {
      s && wr(r), o[e].d(s);
    }
  };
}
function hp(t) {
  let e, n = t[0], r = 1;
  for (; r < t.length; ) {
    const i = t[r], l = t[r + 1];
    if (r += 2, (i === "optionalAccess" || i === "optionalCall") && n == null)
      return;
    i === "access" || i === "optionalAccess" ? (e = n, n = l(n)) : (i === "call" || i === "optionalCall") && (n = l((...o) => n.call(e, ...o)), e = void 0);
  }
  return n;
}
function dp(t, e, n) {
  let r, i, l, { elem_id: o = "" } = e, { elem_classes: a = [] } = e, { visible: s = !0 } = e;
  const u = "interactive";
  let { value: c = null } = e, f = null, { label: _ } = e, { show_label: h } = e, { show_download_button: d } = e, { root: m } = e, { height: g } = e, { width: p } = e, { _selectable: T = !1 } = e, { container: v = !0 } = e, { scale: B = null } = e, { min_width: N = void 0 } = e, { loading_status: y } = e, { show_share_button: W = !1 } = e, { sources: k = ["upload", "clipboard", "webcam"] } = e, { interactive: L } = e, { streaming: q } = e, { pending: R } = e, { mirror_webcam: ee } = e, { gradio: D } = e, ae, Z = null;
  const ve = ({ detail: S }) => D.dispatch("select", S), H = ({ detail: S }) => D.dispatch("share", S), x = ({ detail: S }) => D.dispatch("error", S);
  function ye(S) {
    Z = S, n(24, Z);
  }
  function E(S) {
    r = S, n(22, r), n(0, c);
  }
  function b(S) {
    i = S, n(25, i), n(0, c);
  }
  const I = ({ detail: S }) => n(0, c.points = S, c), w = () => D.dispatch("edit"), A = () => {
    n(0, c = null), D.dispatch("clear"), D.dispatch("change");
  }, Y = () => D.dispatch("stream"), j = ({ detail: S }) => n(23, ae = S), re = ({ detail: S }) => {
    c == null ? n(0, c = { image: S, points: null }) : n(0, c.image = S, c), D.dispatch("upload");
  }, C = ({ detail: S }) => D.dispatch("select", S), P = ({ detail: S }) => D.dispatch("share", S), de = ({ detail: S }) => {
    n(1, y = y || {}), n(1, y.status = "error", y), D.dispatch("error", S);
  };
  return t.$$set = (S) => {
    "elem_id" in S && n(2, o = S.elem_id), "elem_classes" in S && n(3, a = S.elem_classes), "visible" in S && n(4, s = S.visible), "value" in S && n(0, c = S.value), "label" in S && n(5, _ = S.label), "show_label" in S && n(6, h = S.show_label), "show_download_button" in S && n(7, d = S.show_download_button), "root" in S && n(8, m = S.root), "height" in S && n(9, g = S.height), "width" in S && n(10, p = S.width), "_selectable" in S && n(11, T = S._selectable), "container" in S && n(12, v = S.container), "scale" in S && n(13, B = S.scale), "min_width" in S && n(14, N = S.min_width), "loading_status" in S && n(1, y = S.loading_status), "show_share_button" in S && n(15, W = S.show_share_button), "sources" in S && n(16, k = S.sources), "interactive" in S && n(17, L = S.interactive), "streaming" in S && n(18, q = S.streaming), "pending" in S && n(19, R = S.pending), "mirror_webcam" in S && n(20, ee = S.mirror_webcam), "gradio" in S && n(21, D = S.gradio);
  }, t.$$.update = () => {
    t.$$.dirty[0] & /*value*/
    1 && n(22, r = c && c.image), t.$$.dirty[0] & /*value*/
    1 && n(25, i = c && c.points), t.$$.dirty[0] & /*_image*/
    4194304 && n(28, l = hp([r, "optionalAccess", (S) => S.url])), t.$$.dirty[0] & /*url, gradio*/
    270532608 && l && D.dispatch("change"), t.$$.dirty[0] & /*value, old_value, gradio*/
    136314881 && JSON.stringify(c) !== JSON.stringify(f) && (n(27, f = c), D.dispatch("change"));
  }, [
    c,
    y,
    o,
    a,
    s,
    _,
    h,
    d,
    m,
    g,
    p,
    T,
    v,
    B,
    N,
    W,
    k,
    L,
    q,
    R,
    ee,
    D,
    r,
    ae,
    Z,
    i,
    u,
    f,
    l,
    ve,
    H,
    x,
    ye,
    E,
    b,
    I,
    w,
    A,
    Y,
    j,
    re,
    C,
    P,
    de
  ];
}
class kp extends ep {
  constructor(e) {
    super(), tp(
      this,
      e,
      dp,
      _p,
      np,
      {
        elem_id: 2,
        elem_classes: 3,
        visible: 4,
        mode: 26,
        value: 0,
        label: 5,
        show_label: 6,
        show_download_button: 7,
        root: 8,
        height: 9,
        width: 10,
        _selectable: 11,
        container: 12,
        scale: 13,
        min_width: 14,
        loading_status: 1,
        show_share_button: 15,
        sources: 16,
        interactive: 17,
        streaming: 18,
        pending: 19,
        mirror_webcam: 20,
        gradio: 21
      },
      null,
      [-1, -1]
    );
  }
  get elem_id() {
    return this.$$.ctx[2];
  }
  set elem_id(e) {
    this.$$set({ elem_id: e }), ie();
  }
  get elem_classes() {
    return this.$$.ctx[3];
  }
  set elem_classes(e) {
    this.$$set({ elem_classes: e }), ie();
  }
  get visible() {
    return this.$$.ctx[4];
  }
  set visible(e) {
    this.$$set({ visible: e }), ie();
  }
  get mode() {
    return this.$$.ctx[26];
  }
  get value() {
    return this.$$.ctx[0];
  }
  set value(e) {
    this.$$set({ value: e }), ie();
  }
  get label() {
    return this.$$.ctx[5];
  }
  set label(e) {
    this.$$set({ label: e }), ie();
  }
  get show_label() {
    return this.$$.ctx[6];
  }
  set show_label(e) {
    this.$$set({ show_label: e }), ie();
  }
  get show_download_button() {
    return this.$$.ctx[7];
  }
  set show_download_button(e) {
    this.$$set({ show_download_button: e }), ie();
  }
  get root() {
    return this.$$.ctx[8];
  }
  set root(e) {
    this.$$set({ root: e }), ie();
  }
  get height() {
    return this.$$.ctx[9];
  }
  set height(e) {
    this.$$set({ height: e }), ie();
  }
  get width() {
    return this.$$.ctx[10];
  }
  set width(e) {
    this.$$set({ width: e }), ie();
  }
  get _selectable() {
    return this.$$.ctx[11];
  }
  set _selectable(e) {
    this.$$set({ _selectable: e }), ie();
  }
  get container() {
    return this.$$.ctx[12];
  }
  set container(e) {
    this.$$set({ container: e }), ie();
  }
  get scale() {
    return this.$$.ctx[13];
  }
  set scale(e) {
    this.$$set({ scale: e }), ie();
  }
  get min_width() {
    return this.$$.ctx[14];
  }
  set min_width(e) {
    this.$$set({ min_width: e }), ie();
  }
  get loading_status() {
    return this.$$.ctx[1];
  }
  set loading_status(e) {
    this.$$set({ loading_status: e }), ie();
  }
  get show_share_button() {
    return this.$$.ctx[15];
  }
  set show_share_button(e) {
    this.$$set({ show_share_button: e }), ie();
  }
  get sources() {
    return this.$$.ctx[16];
  }
  set sources(e) {
    this.$$set({ sources: e }), ie();
  }
  get interactive() {
    return this.$$.ctx[17];
  }
  set interactive(e) {
    this.$$set({ interactive: e }), ie();
  }
  get streaming() {
    return this.$$.ctx[18];
  }
  set streaming(e) {
    this.$$set({ streaming: e }), ie();
  }
  get pending() {
    return this.$$.ctx[19];
  }
  set pending(e) {
    this.$$set({ pending: e }), ie();
  }
  get mirror_webcam() {
    return this.$$.ctx[20];
  }
  set mirror_webcam(e) {
    this.$$set({ mirror_webcam: e }), ie();
  }
  get gradio() {
    return this.$$.ctx[21];
  }
  set gradio(e) {
    this.$$set({ gradio: e }), ie();
  }
}
export {
  Ep as BaseExample,
  ws as BaseImage,
  r1 as BaseImageUploader,
  Q_ as BaseStaticImage,
  Um as BoxDrawer,
  J0 as Webcam,
  kp as default
};
