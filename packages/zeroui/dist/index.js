'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var clsx = require('clsx');
var tailwindMerge = require('tailwind-merge');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefault(React);

var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var buttonBaseStyles = "cursor-pointer active:scale-95 inline-flex items-center justify-center font-medium rounded-2xl transition-all duration-200 focus:outline-none disabled:opacity-50 disabled:pointer-events-none";
var buttonVariants = {
  default: "bg-zinc-900 text-white hover:bg-zinc-800 focus:ring-zinc-900 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100 dark:focus:ring-white",
  secondary: "bg-zinc-100 text-zinc-900 border border-zinc-200 hover:bg-zinc-200 focus:ring-zinc-500 dark:bg-zinc-800 dark:text-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-700",
  outline: "border-1 border-zinc-900/20 text-zinc-900 hover:bg-zinc-100 focus:ring-zinc-900 dark:border-white dark:text-white dark:hover:bg-zinc-800 dark:focus:ring-white",
  ghost: "text-zinc-900 hover:bg-zinc-100 focus:ring-zinc-500 dark:text-white dark:hover:bg-zinc-800",
  destructive: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-600",
  link: "text-zinc-900 underline underline-offset-4 hover:text-zinc-600 dark:text-white dark:hover:text-zinc-300 focus:ring-zinc-500"
};
var buttonSizes = {
  sm: "px-4 py-1.5 text-sm",
  md: "px-6 py-2 text-sm",
  lg: "px-10 py-2 text-base",
  icon: "h-9 w-9 p-0 text-sm"
};
function Button(_a) {
  var _b = _a, {
    variant = "default",
    size = "md",
    children,
    className = ""
  } = _b, props = __objRest(_b, [
    "variant",
    "size",
    "children",
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "button",
    __spreadProps(__spreadValues({
      className: `${buttonBaseStyles} ${buttonVariants[variant]} ${buttonSizes[size]} ${className}`
    }, props), {
      children
    })
  );
}
function ButtonIcon(_a) {
  var _b = _a, {
    variant = "default",
    size = "md",
    color = "default",
    isActive = false,
    children,
    className = ""
  } = _b, props = __objRest(_b, [
    "variant",
    "size",
    "color",
    "isActive",
    "children",
    "className"
  ]);
  const baseStyles = "inline-flex items-center justify-center rounded-2xl transition-all duration-200 focus:outline-none active:scale-95 disabled:opacity-50 disabled:pointer-events-none cursor-pointer";
  const variants = {
    default: "bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 shadow-[inset_0_-1px_0_0_rgba(0,0,0,0.05)] dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]",
    outline: "border-2 border-zinc-300 dark:border-zinc-600",
    ghost: ""
  };
  const colors = {
    default: {
      inactive: "text-zinc-500 hover:bg-zinc-200 hover:text-zinc-900 dark:hover:bg-zinc-700 dark:hover:text-white",
      active: "text-zinc-900 bg-zinc-200 dark:text-white dark:bg-zinc-700"
    },
    heart: {
      inactive: "text-zinc-500 hover:bg-red-50 hover:text-red-500 dark:hover:bg-red-950 dark:hover:text-red-400",
      active: "text-red-500 bg-red-50 dark:text-red-400 dark:bg-red-950"
    },
    flame: {
      inactive: "text-zinc-500 hover:bg-orange-50 hover:text-orange-500 dark:hover:bg-orange-950 dark:hover:text-orange-400",
      active: "text-orange-500 bg-orange-50 dark:text-orange-400 dark:bg-orange-950"
    },
    star: {
      inactive: "text-zinc-500 hover:bg-yellow-50 hover:text-yellow-500 dark:hover:bg-yellow-950 dark:hover:text-yellow-400",
      active: "text-yellow-500 bg-yellow-50 dark:text-yellow-400 dark:bg-yellow-950"
    },
    success: {
      inactive: "text-zinc-500 hover:bg-green-50 hover:text-green-500 dark:hover:bg-green-950 dark:hover:text-green-400",
      active: "text-green-500 bg-green-50 dark:text-green-400 dark:bg-green-950"
    },
    info: {
      inactive: "text-zinc-500 hover:bg-blue-50 hover:text-blue-500 dark:hover:bg-blue-950 dark:hover:text-blue-400",
      active: "text-blue-500 bg-blue-50 dark:text-blue-400 dark:bg-blue-950"
    }
  };
  const sizes3 = {
    sm: "p-2",
    md: "p-3",
    lg: "p-4"
  };
  const colorStyles = isActive ? colors[color].active : colors[color].inactive;
  return /* @__PURE__ */ jsxRuntime.jsx(
    "button",
    __spreadProps(__spreadValues({
      className: `${baseStyles} ${variants[variant]} ${colorStyles} ${sizes3[size]} ${className}`
    }, props), {
      children
    })
  );
}
function Spinner({ className }) {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      className: `animate-spin ${className}`,
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          "circle",
          {
            className: "opacity-25",
            cx: "12",
            cy: "12",
            r: "10",
            stroke: "currentColor",
            strokeWidth: "4"
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            className: "opacity-75",
            fill: "currentColor",
            d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          }
        )
      ]
    }
  );
}
function Dots({ className }) {
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: `flex items-center gap-1 ${className}`, children: [
    /* @__PURE__ */ jsxRuntime.jsx("span", { className: "w-1.5 h-1.5 bg-current rounded-full animate-bounce [animation-delay:-0.3s]" }),
    /* @__PURE__ */ jsxRuntime.jsx("span", { className: "w-1.5 h-1.5 bg-current rounded-full animate-bounce [animation-delay:-0.15s]" }),
    /* @__PURE__ */ jsxRuntime.jsx("span", { className: "w-1.5 h-1.5 bg-current rounded-full animate-bounce" })
  ] });
}
function Pulse({ className }) {
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: `flex items-center gap-0.5 ${className}`, children: [
    /* @__PURE__ */ jsxRuntime.jsx("span", { className: "w-1 h-4 bg-current rounded-full animate-pulse [animation-delay:-0.3s]" }),
    /* @__PURE__ */ jsxRuntime.jsx("span", { className: "w-1 h-4 bg-current rounded-full animate-pulse [animation-delay:-0.15s]" }),
    /* @__PURE__ */ jsxRuntime.jsx("span", { className: "w-1 h-4 bg-current rounded-full animate-pulse" })
  ] });
}
function CheckIcon({ className }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      className,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "3",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: /* @__PURE__ */ jsxRuntime.jsx("polyline", { points: "20 6 9 17 4 12" })
    }
  );
}
function ButtonLoading(_a) {
  var _b = _a, {
    variant = "default",
    size = "md",
    loadingVariant = "spinner",
    isLoading = false,
    isCompleted = false,
    completedText = "Done",
    children,
    className = "",
    disabled
  } = _b, props = __objRest(_b, [
    "variant",
    "size",
    "loadingVariant",
    "isLoading",
    "isCompleted",
    "completedText",
    "children",
    "className",
    "disabled"
  ]);
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-2xl transition-all duration-300 focus:outline-none active:scale-[0.98] disabled:pointer-events-none cursor-pointer gap-2";
  const variants = {
    default: "bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100",
    outline: "border-2 border-zinc-900 text-zinc-900 hover:bg-zinc-100 dark:border-white dark:text-white dark:hover:bg-zinc-800",
    ghost: "text-zinc-900 hover:bg-zinc-100 dark:text-white dark:hover:bg-zinc-800"
  };
  const completedStyles = {
    default: "bg-green-500 text-white hover:bg-green-600 dark:bg-green-500 dark:text-white dark:hover:bg-green-600",
    outline: "border-2 border-green-500 text-green-500 hover:bg-green-50 dark:border-green-400 dark:text-green-400 dark:hover:bg-green-950",
    ghost: "text-green-500 hover:bg-green-50 dark:text-green-400 dark:hover:bg-green-950"
  };
  const sizes3 = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base"
  };
  const iconSizes = {
    sm: "w-3 h-3",
    md: "w-4 h-4",
    lg: "w-5 h-5"
  };
  const LoadingIndicator = () => {
    switch (loadingVariant) {
      case "dots":
        return /* @__PURE__ */ jsxRuntime.jsx(Dots, { className: iconSizes[size] });
      case "pulse":
        return /* @__PURE__ */ jsxRuntime.jsx(Pulse, { className: iconSizes[size] });
      default:
        return /* @__PURE__ */ jsxRuntime.jsx(Spinner, { className: iconSizes[size] });
    }
  };
  const currentVariant = isCompleted ? completedStyles[variant] : variants[variant];
  const isDisabled = disabled || isLoading;
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "button",
    __spreadProps(__spreadValues({
      className: `${baseStyles} ${currentVariant} ${sizes3[size]} ${isLoading ? "opacity-80" : ""} ${className}`,
      disabled: isDisabled
    }, props), {
      children: [
        isLoading && /* @__PURE__ */ jsxRuntime.jsx(LoadingIndicator, {}),
        isCompleted && !isLoading && /* @__PURE__ */ jsxRuntime.jsx(CheckIcon, { className: iconSizes[size] }),
        /* @__PURE__ */ jsxRuntime.jsx("span", { className: isLoading ? "opacity-70" : "", children: isCompleted && !isLoading ? completedText : children })
      ]
    })
  );
}
function ButtonGroupItem(_a) {
  var _b = _a, {
    isActive = false,
    children,
    className = ""
  } = _b, props = __objRest(_b, [
    "isActive",
    "children",
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "button",
    __spreadProps(__spreadValues({
      className: `group-item ${isActive ? "active" : ""} ${className}`,
      "data-active": isActive
    }, props), {
      children
    })
  );
}
function ButtonGroup({
  variant = "default",
  size = "md",
  orientation = "horizontal",
  children,
  className = ""
}) {
  const baseStyles = "inline-flex rounded-2xl overflow-hidden";
  const orientations = {
    horizontal: "flex-row",
    vertical: "flex-col"
  };
  const variantStyles = {
    default: "bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700",
    outline: "border-2 border-zinc-300 dark:border-zinc-600",
    ghost: ""
  };
  const itemBaseStyles = "cursor-pointer inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]";
  const itemVariants = {
    default: `
      text-zinc-600 dark:text-zinc-400
      hover:bg-zinc-200 hover:text-zinc-900 dark:hover:bg-zinc-700 dark:hover:text-white
      data-[active=true]:bg-zinc-900 data-[active=true]:text-white dark:data-[active=true]:bg-white dark:data-[active=true]:text-zinc-900
    `,
    outline: `
      text-zinc-600 dark:text-zinc-400
      hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-white
      data-[active=true]:bg-zinc-900 data-[active=true]:text-white dark:data-[active=true]:bg-white dark:data-[active=true]:text-zinc-900
    `,
    ghost: `
      text-zinc-600 dark:text-zinc-400
      hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-white
      data-[active=true]:bg-zinc-100 data-[active=true]:text-zinc-900 dark:data-[active=true]:bg-zinc-800 dark:data-[active=true]:text-white
    `
  };
  const itemSizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base"
  };
  const dividerStyles = {
    horizontal: {
      default: "[&>.group-item:not(:last-child)]:border-r [&>.group-item:not(:last-child)]:border-zinc-200 dark:[&>.group-item:not(:last-child)]:border-zinc-700",
      outline: "[&>.group-item:not(:last-child)]:border-r-2 [&>.group-item:not(:last-child)]:border-zinc-300 dark:[&>.group-item:not(:last-child)]:border-zinc-600",
      ghost: ""
    },
    vertical: {
      default: "[&>.group-item:not(:last-child)]:border-b [&>.group-item:not(:last-child)]:border-zinc-200 dark:[&>.group-item:not(:last-child)]:border-zinc-700",
      outline: "[&>.group-item:not(:last-child)]:border-b-2 [&>.group-item:not(:last-child)]:border-zinc-300 dark:[&>.group-item:not(:last-child)]:border-zinc-600",
      ghost: ""
    }
  };
  const styledChildren = React__default.default.Children.map(children, (child) => {
    if (React__default.default.isValidElement(child)) {
      const existingClassName = child.props.className || "";
      return React__default.default.cloneElement(child, {
        className: `${itemBaseStyles} ${itemVariants[variant]} ${itemSizes[size]} ${existingClassName}`.trim()
      });
    }
    return child;
  });
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      className: `${baseStyles} ${orientations[orientation]} ${variantStyles[variant]} ${dividerStyles[orientation][variant]} ${className}`,
      children: styledChildren
    }
  );
}
ButtonGroup.Item = ButtonGroupItem;
var brandColors = {
  google: {
    bg: "bg-white dark:bg-zinc-800",
    hover: "hover:bg-zinc-50 dark:hover:bg-zinc-700",
    text: "text-zinc-700 dark:text-zinc-200",
    border: "border-zinc-300 dark:border-zinc-600"
  },
  github: {
    bg: "bg-[#24292e] dark:bg-[#24292e]",
    hover: "hover:bg-[#1b1f23] dark:hover:bg-[#1b1f23]",
    text: "text-white",
    border: "border-[#24292e]"
  },
  twitter: {
    bg: "bg-black dark:bg-white",
    hover: "hover:bg-zinc-800 dark:hover:bg-zinc-100",
    text: "text-white dark:text-black",
    border: "border-black dark:border-white"
  },
  facebook: {
    bg: "bg-[#1877f2]",
    hover: "hover:bg-[#166fe5]",
    text: "text-white",
    border: "border-[#1877f2]"
  },
  apple: {
    bg: "bg-black dark:bg-white",
    hover: "hover:bg-zinc-800 dark:hover:bg-zinc-100",
    text: "text-white dark:text-black",
    border: "border-black dark:border-white"
  },
  discord: {
    bg: "bg-[#5865f2]",
    hover: "hover:bg-[#4752c4]",
    text: "text-white",
    border: "border-[#5865f2]"
  },
  linkedin: {
    bg: "bg-[#0a66c2]",
    hover: "hover:bg-[#004182]",
    text: "text-white",
    border: "border-[#0a66c2]"
  },
  spotify: {
    bg: "bg-[#1db954]",
    hover: "hover:bg-[#1aa34a]",
    text: "text-white",
    border: "border-[#1db954]"
  }
};
function GoogleIcon({ className }) {
  return /* @__PURE__ */ jsxRuntime.jsxs("svg", { className, viewBox: "0 0 24 24", children: [
    /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        fill: "#4285F4",
        d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        fill: "#34A853",
        d: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        fill: "#FBBC05",
        d: "M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        fill: "#EA4335",
        d: "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      }
    )
  ] });
}
function GitHubIcon({ className }) {
  return /* @__PURE__ */ jsxRuntime.jsx("svg", { className, viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" }) });
}
function TwitterIcon({ className }) {
  return /* @__PURE__ */ jsxRuntime.jsx("svg", { className, viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" }) });
}
function FacebookIcon({ className }) {
  return /* @__PURE__ */ jsxRuntime.jsx("svg", { className, viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" }) });
}
function AppleIcon({ className }) {
  return /* @__PURE__ */ jsxRuntime.jsx("svg", { className, viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" }) });
}
function DiscordIcon({ className }) {
  return /* @__PURE__ */ jsxRuntime.jsx("svg", { className, viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z" }) });
}
function LinkedInIcon({ className }) {
  return /* @__PURE__ */ jsxRuntime.jsx("svg", { className, viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" }) });
}
function SpotifyIcon({ className }) {
  return /* @__PURE__ */ jsxRuntime.jsx("svg", { className, viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" }) });
}
var providerIcons = {
  google: GoogleIcon,
  github: GitHubIcon,
  twitter: TwitterIcon,
  facebook: FacebookIcon,
  apple: AppleIcon,
  discord: DiscordIcon,
  linkedin: LinkedInIcon,
  spotify: SpotifyIcon
};
var providerNames = {
  google: "Google",
  github: "GitHub",
  twitter: "X",
  facebook: "Facebook",
  apple: "Apple",
  discord: "Discord",
  linkedin: "LinkedIn",
  spotify: "Spotify"
};
function ButtonSocial(_a) {
  var _b = _a, {
    provider,
    variant = "default",
    size = "md",
    children,
    className = ""
  } = _b, props = __objRest(_b, [
    "provider",
    "variant",
    "size",
    "children",
    "className"
  ]);
  const baseStyles = "cursor-pointer inline-flex items-center justify-center font-medium rounded-2xl transition-all duration-200 focus:outline-none active:scale-95 disabled:opacity-50 disabled:pointer-events-none gap-2";
  const colors = brandColors[provider];
  const Icon2 = providerIcons[provider];
  const defaultText = `Continue with ${providerNames[provider]}`;
  const variants = {
    default: `${colors.bg} ${colors.hover} ${colors.text} border ${colors.border}`,
    outline: `bg-transparent border-2 ${colors.border} ${colors.text} hover:${colors.bg}`,
    icon: `${colors.bg} ${colors.hover} ${colors.text}`
  };
  const sizes3 = {
    sm: variant === "icon" ? "p-2" : "px-4 py-2 text-sm",
    md: variant === "icon" ? "p-3" : "px-6 py-2.5 text-sm",
    lg: variant === "icon" ? "p-4" : "px-8 py-3 text-base"
  };
  const iconSizes = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6"
  };
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "button",
    __spreadProps(__spreadValues({
      className: `${baseStyles} ${variants[variant]} ${sizes3[size]} ${className}`
    }, props), {
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(Icon2, { className: iconSizes[size] }),
        variant !== "icon" && /* @__PURE__ */ jsxRuntime.jsx("span", { children: children || defaultText })
      ]
    })
  );
}
function useCursorPosition(ref, enabled = true) {
  const [position, setPosition] = React.useState({ x: 50, y: 50 });
  const handleMouseMove = React.useCallback((e) => {
    const element = ref.current;
    if (!element) return;
    const rect = element.getBoundingClientRect();
    const x = Math.round((e.clientX - rect.left) / rect.width * 100);
    const y = Math.round((e.clientY - rect.top) / rect.height * 100);
    setPosition({
      x: Math.max(0, Math.min(100, x)),
      y: Math.max(0, Math.min(100, y))
    });
  }, [ref]);
  const handleMouseLeave = React.useCallback(() => {
    setPosition({ x: 50, y: 50 });
  }, []);
  React.useEffect(() => {
    const element = ref.current;
    if (!element || !enabled) return;
    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [ref, enabled, handleMouseMove, handleMouseLeave]);
  return position;
}
var gradientPresets = {
  "purple-blue": { from: "#8b5cf6", via: "#6366f1", to: "#3b82f6" },
  "orange-red": { from: "#f97316", via: "#ef4444", to: "#dc2626" },
  "green-teal": { from: "#10b981", via: "#14b8a6", to: "#06b6d4" },
  "pink-purple": { from: "#ec4899", via: "#d946ef", to: "#8b5cf6" },
  "custom": { from: "#8b5cf6", to: "#3b82f6" }
};
var sizes = {
  sm: "px-4 py-1.5 text-sm",
  md: "px-6 py-2 text-sm",
  lg: "px-10 py-2.5 text-base"
};
function NoiseFilter({ id, effect }) {
  const baseFrequency = effect === "grain" ? "0.8" : "0.3";
  const numOctaves = effect === "grain" ? "4" : "2";
  return /* @__PURE__ */ jsxRuntime.jsx("svg", { className: "absolute w-0 h-0", "aria-hidden": "true", children: /* @__PURE__ */ jsxRuntime.jsx("defs", { children: /* @__PURE__ */ jsxRuntime.jsxs("filter", { id, children: [
    /* @__PURE__ */ jsxRuntime.jsx(
      "feTurbulence",
      {
        type: "fractalNoise",
        baseFrequency,
        numOctaves,
        stitchTiles: "stitch",
        result: "noise"
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsx("feColorMatrix", { type: "saturate", values: "0", in: "noise", result: "mono" }),
    /* @__PURE__ */ jsxRuntime.jsx("feBlend", { in: "SourceGraphic", in2: "mono", mode: "overlay" })
  ] }) }) });
}
function NoiseOverlay({ effect, opacity, filterId }) {
  if (effect === "animated") {
    return /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      {
        className: "absolute inset-0 rounded-2xl pointer-events-none animate-noise",
        style: {
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          opacity,
          mixBlendMode: "overlay"
        }
      }
    );
  }
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(NoiseFilter, { id: filterId, effect }),
    /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      {
        className: "absolute inset-0 rounded-2xl pointer-events-none",
        style: {
          filter: `url(#${filterId})`,
          opacity,
          mixBlendMode: "overlay"
        }
      }
    )
  ] });
}
function RippleEffect({ ripples, onAnimationEnd }) {
  return /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, { children: ripples.map((ripple) => /* @__PURE__ */ jsxRuntime.jsx(
    "span",
    {
      className: "absolute rounded-full bg-white/40 pointer-events-none",
      style: {
        left: ripple.x,
        top: ripple.y,
        width: 10,
        height: 10,
        transform: "translate(-50%, -50%)",
        animation: "ripple-expand 0.6s ease-out forwards"
      },
      onAnimationEnd: () => onAnimationEnd(ripple.id)
    },
    ripple.id
  )) });
}
function BorderWrapper({
  effect,
  colors,
  children
}) {
  if (effect === "rotating") {
    return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "relative inline-flex rounded-2xl overflow-hidden p-[2px]", children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "div",
        {
          className: "absolute inset-[-50%] animate-gradient-rotate",
          style: {
            background: `conic-gradient(${colors.from}, ${colors.via || colors.from}, ${colors.to}, ${colors.from})`
          }
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx("div", { className: "relative rounded-2xl", children })
    ] });
  }
  if (effect === "pulsing") {
    return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "relative inline-flex", children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "div",
        {
          className: "absolute -inset-[2px] rounded-2xl animate-border-pulse",
          style: {
            background: colors.from,
            ["--pulse-color"]: colors.from
          }
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx("div", { className: "relative", children })
    ] });
  }
  if (effect === "spectrum") {
    return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "relative inline-flex", children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "div",
        {
          className: "absolute -inset-[2px] rounded-2xl",
          style: {
            background: `linear-gradient(90deg, ${colors.from}, ${colors.via || colors.from}, ${colors.to})`,
            animation: "spectrum-shift 3s linear infinite"
          }
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx("div", { className: "relative", children })
    ] });
  }
  if (effect === "glow") {
    return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "relative inline-flex", children: [
      children,
      /* @__PURE__ */ jsxRuntime.jsx(
        "div",
        {
          className: "absolute -bottom-2 left-1/2 -translate-x-1/2 h-2 rounded-full blur-md opacity-50 dark:opacity-25",
          style: {
            width: "70%",
            background: `linear-gradient(90deg, ${colors.from}, ${colors.via || colors.from}, ${colors.to})`
          }
        }
      )
    ] });
  }
  return /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, { children });
}
function ButtonGradient(_a) {
  var _b = _a, {
    size = "md",
    gradient = "purple-blue",
    gradientFrom,
    gradientTo,
    gradientVia,
    noiseEffect = "none",
    noiseOpacity = 0.15,
    cursorEffect = "none",
    borderEffect = "none",
    children,
    className = "",
    onClick,
    disabled
  } = _b, props = __objRest(_b, [
    "size",
    "gradient",
    "gradientFrom",
    "gradientTo",
    "gradientVia",
    "noiseEffect",
    "noiseOpacity",
    "cursorEffect",
    "borderEffect",
    "children",
    "className",
    "onClick",
    "disabled"
  ]);
  const buttonRef = React.useRef(null);
  const filterId = React.useId().replace(/:/g, "");
  const cursorPosition = useCursorPosition(buttonRef, cursorEffect === "glow" || cursorEffect === "spotlight");
  const [ripples, setRipples] = React.useState([]);
  const baseStyles = "cursor-pointer relative overflow-hidden inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-purple-500 active:scale-95 disabled:opacity-50 disabled:pointer-events-none";
  const borderRadius = borderEffect === "glow" ? "rounded-md" : "rounded-2xl";
  const colors = gradient === "custom" ? { from: gradientFrom || "#8b5cf6", via: gradientVia, to: gradientTo || "#3b82f6" } : gradientPresets[gradient];
  const handleClick = (e) => {
    if (cursorEffect === "ripple" && !disabled) {
      const rect = e.currentTarget.getBoundingClientRect();
      setRipples((prev) => [
        ...prev,
        {
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
          id: Date.now()
        }
      ]);
    }
    onClick == null ? void 0 : onClick(e);
  };
  const handleRippleEnd = (id) => {
    setRipples((prev) => prev.filter((r) => r.id !== id));
  };
  const getCursorOverlay = () => {
    if (cursorEffect === "glow") {
      return /* @__PURE__ */ jsxRuntime.jsx(
        "div",
        {
          className: "absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-200",
          style: {
            background: `radial-gradient(circle at ${cursorPosition.x}% ${cursorPosition.y}%, rgba(255,255,255,0.3) 0%, transparent 50%)`
          }
        }
      );
    }
    if (cursorEffect === "spotlight") {
      return /* @__PURE__ */ jsxRuntime.jsx(
        "div",
        {
          className: "absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-200",
          style: {
            background: `radial-gradient(circle at ${cursorPosition.x}% ${cursorPosition.y}%, rgba(255,255,255,0.5) 0%, transparent 30%)`,
            mixBlendMode: "soft-light"
          }
        }
      );
    }
    return null;
  };
  const buttonElement = /* @__PURE__ */ jsxRuntime.jsxs(
    "button",
    __spreadProps(__spreadValues({
      ref: buttonRef,
      className: `${baseStyles} ${borderRadius} ${sizes[size]} ${className}`,
      onClick: handleClick,
      disabled
    }, props), {
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          "span",
          {
            className: `absolute inset-0 ${borderRadius} ${borderEffect !== "none" ? "bg-white dark:bg-zinc-950" : ""}`,
            style: borderEffect === "none" ? {
              background: `linear-gradient(135deg, ${colors.from}, ${colors.via || colors.from}, ${colors.to})`
            } : void 0
          }
        ),
        noiseEffect !== "none" && /* @__PURE__ */ jsxRuntime.jsx(NoiseOverlay, { effect: noiseEffect, opacity: noiseOpacity, filterId }),
        getCursorOverlay(),
        cursorEffect === "ripple" && /* @__PURE__ */ jsxRuntime.jsx(RippleEffect, { ripples, onAnimationEnd: handleRippleEnd }),
        borderEffect === "glow" && /* @__PURE__ */ jsxRuntime.jsx(
          "span",
          {
            className: "absolute bottom-0 left-0 right-0 h-0.5 rounded-full z-10 animate-glow-sway",
            style: {
              background: `linear-gradient(90deg, ${colors.from}, ${colors.via || colors.from}, ${colors.to}, ${colors.from})`
            }
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx("span", { className: `relative z-10 drop-shadow-sm ${borderEffect !== "none" ? "text-zinc-900 dark:text-white" : "text-white"}`, children })
      ]
    })
  );
  return /* @__PURE__ */ jsxRuntime.jsx(BorderWrapper, { effect: borderEffect, colors, children: buttonElement });
}
var sizes2 = {
  sm: "px-3.5 py-1.5 text-sm",
  md: "px-5 py-2 text-sm",
  lg: "px-7 py-2.5 text-base"
};
function ButtonGlass(_a) {
  var _b = _a, {
    size = "md",
    variant = "default",
    children,
    className = "",
    disabled
  } = _b, props = __objRest(_b, [
    "size",
    "variant",
    "children",
    "className",
    "disabled"
  ]);
  const baseStyles = "cursor-pointer relative inline-flex items-center justify-center font-medium rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none backdrop-blur-xl backdrop-saturate-150";
  const getVariantStyles = () => {
    switch (variant) {
      case "default":
        return "bg-white/70 dark:bg-white/20 border border-white/50 dark:border-white/10 text-zinc-900 dark:text-white hover:bg-white/80 dark:hover:bg-white/30 shadow-sm";
      case "secondary":
        return "bg-zinc-100/70 dark:bg-zinc-800/70 border border-zinc-200/50 dark:border-zinc-700/50 text-zinc-900 dark:text-white hover:bg-zinc-200/70 dark:hover:bg-zinc-700/70 shadow-sm";
      case "dark":
        return "bg-zinc-900/70 dark:bg-zinc-900/80 border border-zinc-800/50 dark:border-zinc-700/30 text-white hover:bg-zinc-900/80 dark:hover:bg-zinc-800/80 shadow-sm";
      default:
        return "";
    }
  };
  return /* @__PURE__ */ jsxRuntime.jsx(
    "button",
    __spreadProps(__spreadValues({
      className: `${baseStyles} ${sizes2[size]} ${getVariantStyles()} ${className}`,
      disabled
    }, props), {
      children: /* @__PURE__ */ jsxRuntime.jsx("span", { className: "relative z-10", children })
    })
  );
}
function Button3D(_a) {
  var _b = _a, {
    variant = "default",
    children,
    className = ""
  } = _b, props = __objRest(_b, [
    "variant",
    "children",
    "className"
  ]);
  const baseStyles = "relative inline-flex items-center justify-center px-6 py-3 font-bold transition-all duration-75 ease-in-out border-2 focus:outline-none active:scale-95";
  const variants = {
    default: "bg-white text-black border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-none active:translate-x-[4px] active:translate-y-[4px]",
    inverse: "bg-black text-white border-white shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-none active:translate-x-[4px] active:translate-y-[4px]",
    outline: "bg-transparent text-black dark:text-white border-current shadow-[4px_4px_0px_0px_currentColor] hover:shadow-[2px_2px_0px_0px_currentColor] hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-none active:translate-x-[4px] active:translate-y-[4px]"
  };
  return /* @__PURE__ */ jsxRuntime.jsx(
    "button",
    __spreadProps(__spreadValues({
      className: `${baseStyles} ${variants[variant]} ${className}`
    }, props), {
      children
    })
  );
}
var InputBase = React.forwardRef(
  (_a, ref) => {
    var _b = _a, { className, label, helperText, error, variant = "default" } = _b, props = __objRest(_b, ["className", "label", "helperText", "error", "variant"]);
    const baseStyles = "w-full px-4 py-2 text-sm transition-all duration-200 outline-none placeholder:text-muted-foreground/50 disabled:cursor-not-allowed disabled:opacity-50";
    const variants = {
      default: "bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg focus:border-violet-500/50 focus:ring-2 focus:ring-violet-500/20",
      filled: "bg-zinc-100 dark:bg-zinc-800/50 border-transparent rounded-lg focus:bg-white dark:focus:bg-zinc-900 focus:border-violet-500/50 focus:ring-2 focus:ring-violet-500/20",
      underscore: "bg-transparent border-b border-zinc-200 dark:border-zinc-800 rounded-none px-0 focus:border-violet-500 focus:ring-0"
    };
    const errorStyles = error ? "border-red-500 focus:border-red-500 focus:ring-red-500/20 text-red-600" : "";
    return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "w-full space-y-2", children: [
      label && /* @__PURE__ */ jsxRuntime.jsx("label", { className: "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-zinc-900 dark:text-zinc-100", children: label }),
      /* @__PURE__ */ jsxRuntime.jsx(
        "input",
        __spreadValues({
          ref,
          className: `
            ${baseStyles} 
            ${variants[variant]} 
            ${errorStyles}
            ${className}
          `
        }, props)
      ),
      helperText && /* @__PURE__ */ jsxRuntime.jsx("p", { className: `text-xs ${error ? "text-red-500" : "text-zinc-500"}`, children: helperText })
    ] });
  }
);
InputBase.displayName = "InputBase";
var input_base_default = InputBase;
var InputFloating = React.forwardRef(
  (_a, ref) => {
    var _b = _a, { className, label, error } = _b, props = __objRest(_b, ["className", "label", "error"]);
    return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "relative z-0 w-full group", children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "input",
        __spreadValues({
          ref,
          type: "text",
          placeholder: " ",
          className: `
            block py-2.5 px-0 w-full text-sm text-zinc-900 bg-transparent border-0 border-b-2 border-zinc-300 appearance-none dark:text-white dark:border-zinc-600 dark:focus:border-violet-500 focus:outline-none focus:ring-0 focus:border-violet-600 peer
            ${error ? "border-red-500 focus:border-red-500" : ""}
            ${className}
          `
        }, props)
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "label",
        {
          className: `
            peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-violet-600 peer-focus:dark:text-violet-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6
            ${error ? "text-red-500 peer-focus:text-red-500" : "text-zinc-500 dark:text-zinc-400"}
          `,
          children: label
        }
      )
    ] });
  }
);
InputFloating.displayName = "InputFloating";
var input_floating_default = InputFloating;
var InputIcon = React.forwardRef(
  (_a, ref) => {
    var _b = _a, { className, icon: Icon2, iconPosition = "left", iconClassName, error } = _b, props = __objRest(_b, ["className", "icon", "iconPosition", "iconClassName", "error"]);
    return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "relative w-full", children: [
      Icon2 && iconPosition === "left" && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none", children: /* @__PURE__ */ jsxRuntime.jsx(Icon2, { className: `h-5 w-5 text-zinc-500 ${iconClassName}` }) }),
      /* @__PURE__ */ jsxRuntime.jsx(
        "input",
        __spreadValues({
          ref,
          className: `
            w-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg py-2 text-sm transition-all duration-200 outline-none
            focus:border-violet-500/50 focus:ring-2 focus:ring-violet-500/20
            disabled:cursor-not-allowed disabled:opacity-50 placeholder:text-muted-foreground/50
            ${iconPosition === "left" ? Icon2 ? "pl-10 pr-4" : "px-4" : Icon2 ? "pl-4 pr-10" : "px-4"}
            ${error ? "border-red-500 focus:border-red-500 focus:ring-red-500/20" : ""}
            ${className}
          `
        }, props)
      ),
      Icon2 && iconPosition === "right" && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none", children: /* @__PURE__ */ jsxRuntime.jsx(Icon2, { className: `h-5 w-5 text-zinc-500 ${iconClassName}` }) })
    ] });
  }
);
InputIcon.displayName = "InputIcon";
var input_icon_default = InputIcon;
var InputGradient = React.forwardRef(
  (_a, ref) => {
    var _b = _a, { className, wrapperClassName, gradientFrom = "#8b5cf6", gradientTo = "#3b82f6" } = _b, props = __objRest(_b, ["className", "wrapperClassName", "gradientFrom", "gradientTo"]);
    const [isFocused, setIsFocused] = React.useState(false);
    return /* @__PURE__ */ jsxRuntime.jsxs(
      "div",
      {
        className: `relative rounded-xl p-[1px] group transition-all duration-300 ${wrapperClassName}`,
        style: {
          background: isFocused ? `linear-gradient(90deg, ${gradientFrom}, ${gradientTo})` : "rgba(82, 82, 91, 0.3)"
          // zinc-600/30 equivalent
        },
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(
            "div",
            {
              className: "absolute inset-0 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none",
              style: {
                background: isFocused ? `linear-gradient(90deg, ${gradientFrom}, ${gradientTo})` : "transparent"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsx(
            "input",
            __spreadValues({
              ref,
              onFocus: (e) => {
                var _a2;
                setIsFocused(true);
                (_a2 = props.onFocus) == null ? void 0 : _a2.call(props, e);
              },
              onBlur: (e) => {
                var _a2;
                setIsFocused(false);
                (_a2 = props.onBlur) == null ? void 0 : _a2.call(props, e);
              },
              className: `
            relative w-full bg-white dark:bg-zinc-950 rounded-[11px] px-4 py-3 text-sm outline-none 
            placeholder:text-zinc-500 dark:placeholder:text-zinc-400
            transition-all duration-200
            ${className}
          `
            }, props)
          )
        ]
      }
    );
  }
);
InputGradient.displayName = "InputGradient";
var input_gradient_default = InputGradient;
function cn(...inputs) {
  return tailwindMerge.twMerge(clsx.clsx(inputs));
}
function InputOTP({
  length = 6,
  onComplete,
  className,
  onChange
}) {
  const [code, setCode] = React.useState(new Array(length).fill(""));
  const [activeInput, setActiveInput] = React.useState(0);
  const inputRefs = React.useRef([]);
  React.useEffect(() => {
    inputRefs.current = inputRefs.current.slice(0, length);
  }, [length]);
  const handleChange = (e, index) => {
    var _a;
    const val = e.target.value;
    if (isNaN(Number(val))) return;
    const newCode = [...code];
    newCode[index] = val.substring(val.length - 1);
    setCode(newCode);
    const otpValue = newCode.join("");
    onChange == null ? void 0 : onChange(otpValue);
    if (otpValue.length === length && !newCode.includes("")) {
      onComplete == null ? void 0 : onComplete(otpValue);
    }
    if (val && index < length - 1) {
      (_a = inputRefs.current[index + 1]) == null ? void 0 : _a.focus();
      setActiveInput(index + 1);
    }
  };
  const handleKeyDown = (e, index) => {
    var _a, _b, _c;
    if (e.key === "Backspace") {
      if (!code[index] && index > 0) {
        const newCode = [...code];
        newCode[index - 1] = "";
        setCode(newCode);
        (_a = inputRefs.current[index - 1]) == null ? void 0 : _a.focus();
        setActiveInput(index - 1);
        onChange == null ? void 0 : onChange(newCode.join(""));
      } else {
        const newCode = [...code];
        newCode[index] = "";
        setCode(newCode);
        onChange == null ? void 0 : onChange(newCode.join(""));
      }
    } else if (e.key === "ArrowLeft" && index > 0) {
      (_b = inputRefs.current[index - 1]) == null ? void 0 : _b.focus();
      setActiveInput(index - 1);
    } else if (e.key === "ArrowRight" && index < length - 1) {
      (_c = inputRefs.current[index + 1]) == null ? void 0 : _c.focus();
      setActiveInput(index + 1);
    }
  };
  const handlePaste = (e) => {
    var _a;
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").split("").filter((char) => !isNaN(Number(char))).slice(0, length);
    if (pastedData.length > 0) {
      const newCode = [...code];
      const filledLength = Math.min(newCode.length, pastedData.length);
      for (let i = 0; i < filledLength; i++) {
        newCode[i] = pastedData[i];
      }
      setCode(newCode);
      const otpValue = newCode.join("");
      onChange == null ? void 0 : onChange(otpValue);
      if (otpValue.length === length) {
        onComplete == null ? void 0 : onComplete(otpValue);
      }
      const focusIndex = Math.min(filledLength, length - 1);
      (_a = inputRefs.current[focusIndex]) == null ? void 0 : _a.focus();
      setActiveInput(focusIndex);
    }
  };
  return /* @__PURE__ */ jsxRuntime.jsx("div", { className: cn("flex gap-2 items-center justify-center", className), children: code.map((value, index) => /* @__PURE__ */ jsxRuntime.jsx(
    "input",
    {
      ref: (el) => {
        inputRefs.current[index] = el;
      },
      type: "text",
      inputMode: "numeric",
      maxLength: 1,
      value,
      onChange: (e) => handleChange(e, index),
      onKeyDown: (e) => handleKeyDown(e, index),
      onFocus: () => setActiveInput(index),
      onPaste: handlePaste,
      className: cn(
        "w-10 h-12 text-center text-xl font-semibold border-2 rounded-lg bg-white dark:bg-zinc-900 transition-all duration-200 outline-none caret-violet-500",
        activeInput === index ? "border-violet-500 ring-2 ring-violet-500/20 z-10 scale-105" : "border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 hover:border-zinc-300 dark:hover:border-zinc-700"
      )
    },
    index
  )) });
}

// ../../node_modules/lucide-react/dist/esm/shared/src/utils/mergeClasses.js
var mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();

// ../../node_modules/lucide-react/dist/esm/shared/src/utils/toKebabCase.js
var toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();

// ../../node_modules/lucide-react/dist/esm/shared/src/utils/toCamelCase.js
var toCamelCase = (string) => string.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (match, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase()
);

// ../../node_modules/lucide-react/dist/esm/shared/src/utils/toPascalCase.js
var toPascalCase = (string) => {
  const camelCase = toCamelCase(string);
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};

// ../../node_modules/lucide-react/dist/esm/defaultAttributes.js
var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};

// ../../node_modules/lucide-react/dist/esm/shared/src/utils/hasA11yProp.js
var hasA11yProp = (props) => {
  for (const prop in props) {
    if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
      return true;
    }
  }
  return false;
};

// ../../node_modules/lucide-react/dist/esm/Icon.js
var Icon = React.forwardRef(
  (_a, ref) => {
    var _b = _a, {
      color = "currentColor",
      size = 24,
      strokeWidth = 2,
      absoluteStrokeWidth,
      className = "",
      children,
      iconNode
    } = _b, rest = __objRest(_b, [
      "color",
      "size",
      "strokeWidth",
      "absoluteStrokeWidth",
      "className",
      "children",
      "iconNode"
    ]);
    return React.createElement(
      "svg",
      __spreadValues(__spreadValues(__spreadProps(__spreadValues({
        ref
      }, defaultAttributes), {
        width: size,
        height: size,
        stroke: color,
        strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
        className: mergeClasses("lucide", className)
      }), !children && !hasA11yProp(rest) && { "aria-hidden": "true" }), rest),
      [
        ...iconNode.map(([tag, attrs]) => React.createElement(tag, attrs)),
        ...Array.isArray(children) ? children : [children]
      ]
    );
  }
);

// ../../node_modules/lucide-react/dist/esm/createLucideIcon.js
var createLucideIcon = (iconName, iconNode) => {
  const Component = React.forwardRef(
    (_a, ref) => {
      var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
      return React.createElement(Icon, __spreadValues({
        ref,
        iconNode,
        className: mergeClasses(
          `lucide-${toKebabCase(toPascalCase(iconName))}`,
          `lucide-${iconName}`,
          className
        )
      }, props));
    }
  );
  Component.displayName = toPascalCase(iconName);
  return Component;
};

// ../../node_modules/lucide-react/dist/esm/icons/arrow-down.js
var __iconNode = [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
];
var ArrowDown = createLucideIcon("arrow-down", __iconNode);

// ../../node_modules/lucide-react/dist/esm/icons/chevron-down.js
var __iconNode2 = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
var ChevronDown = createLucideIcon("chevron-down", __iconNode2);

// ../../node_modules/lucide-react/dist/esm/icons/chevron-left.js
var __iconNode3 = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]];
var ChevronLeft = createLucideIcon("chevron-left", __iconNode3);

// ../../node_modules/lucide-react/dist/esm/icons/chevron-right.js
var __iconNode4 = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]];
var ChevronRight = createLucideIcon("chevron-right", __iconNode4);

// ../../node_modules/lucide-react/dist/esm/icons/ellipsis.js
var __iconNode5 = [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "19", cy: "12", r: "1", key: "1wjl8i" }],
  ["circle", { cx: "5", cy: "12", r: "1", key: "1pcz8c" }]
];
var Ellipsis = createLucideIcon("ellipsis", __iconNode5);

// ../../node_modules/lucide-react/dist/esm/icons/file.js
var __iconNode6 = [
  [
    "path",
    {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
      key: "1oefj6"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }]
];
var File = createLucideIcon("file", __iconNode6);

// ../../node_modules/lucide-react/dist/esm/icons/minus.js
var __iconNode7 = [["path", { d: "M5 12h14", key: "1ays0h" }]];
var Minus = createLucideIcon("minus", __iconNode7);

// ../../node_modules/lucide-react/dist/esm/icons/plus.js
var __iconNode8 = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
];
var Plus = createLucideIcon("plus", __iconNode8);

// ../../node_modules/lucide-react/dist/esm/icons/upload.js
var __iconNode9 = [
  ["path", { d: "M12 3v12", key: "1x0j5s" }],
  ["path", { d: "m17 8-5-5-5 5", key: "7q97r8" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }]
];
var Upload = createLucideIcon("upload", __iconNode9);

// ../../node_modules/lucide-react/dist/esm/icons/x.js
var __iconNode10 = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
var X = createLucideIcon("x", __iconNode10);
function InputFile(_a) {
  var _b = _a, {
    className,
    label,
    helperText,
    onFileSelect,
    accept
  } = _b, props = __objRest(_b, [
    "className",
    "label",
    "helperText",
    "onFileSelect",
    "accept"
  ]);
  const [dragActive, setDragActive] = React.useState(false);
  const [selectedFile, setSelectedFile] = React.useState(null);
  const inputRef = React.useRef(null);
  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      setSelectedFile(file);
      onFileSelect == null ? void 0 : onFileSelect(file);
    }
  };
  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile(file);
      onFileSelect == null ? void 0 : onFileSelect(file);
    }
  };
  const removeFile = (e) => {
    e.stopPropagation();
    setSelectedFile(null);
    onFileSelect == null ? void 0 : onFileSelect(null);
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };
  const onButtonClick = () => {
    var _a2;
    (_a2 = inputRef.current) == null ? void 0 : _a2.click();
  };
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: cn("w-full space-y-2", className), children: [
    label && /* @__PURE__ */ jsxRuntime.jsx("label", { className: "text-sm font-medium leading-none text-zinc-900 dark:text-zinc-100", children: label }),
    /* @__PURE__ */ jsxRuntime.jsxs(
      "div",
      {
        className: cn(
          "relative flex flex-col items-center justify-center w-full h-40 border-2 border-dashed rounded-xl transition-all duration-200 cursor-pointer overflow-hidden",
          dragActive ? "border-violet-500 bg-violet-50 dark:bg-violet-900/10" : "border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800"
        ),
        onDragEnter: handleDrag,
        onDragLeave: handleDrag,
        onDragOver: handleDrag,
        onDrop: handleDrop,
        onClick: onButtonClick,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(
            "input",
            __spreadValues({
              ref: inputRef,
              type: "file",
              className: "hidden",
              accept,
              onChange: handleChange
            }, props)
          ),
          selectedFile ? /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex flex-col items-center p-4 animate-in fade-in zoom-in-95 duration-200", children: [
            /* @__PURE__ */ jsxRuntime.jsx("div", { className: "w-12 h-12 rounded-lg bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center mb-2 text-violet-600 dark:text-violet-400", children: /* @__PURE__ */ jsxRuntime.jsx(File, { className: "w-6 h-6" }) }),
            /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-sm font-medium text-zinc-900 dark:text-zinc-100 text-center truncate max-w-[200px]", children: selectedFile.name }),
            /* @__PURE__ */ jsxRuntime.jsxs("p", { className: "text-xs text-zinc-500 mt-1", children: [
              (selectedFile.size / 1024).toFixed(2),
              " KB"
            ] }),
            /* @__PURE__ */ jsxRuntime.jsx(
              "button",
              {
                onClick: removeFile,
                className: "absolute top-2 right-2 p-1 rounded-full bg-zinc-200 dark:bg-zinc-800 hover:bg-red-100 dark:hover:bg-red-900/30 hover:text-red-500 transition-colors",
                children: /* @__PURE__ */ jsxRuntime.jsx(X, { className: "w-4 h-4" })
              }
            )
          ] }) : /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex flex-col items-center text-center p-4", children: [
            /* @__PURE__ */ jsxRuntime.jsx("div", { className: "w-10 h-10 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center mb-3 text-zinc-500", children: /* @__PURE__ */ jsxRuntime.jsx(Upload, { className: "w-5 h-5" }) }),
            /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-sm font-medium text-zinc-700 dark:text-zinc-300", children: "Click to upload or drag and drop" }),
            /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-xs text-zinc-500 mt-1", children: accept ? `Accepted formats: ${accept}` : "All files accepted" })
          ] })
        ]
      }
    ),
    helperText && !selectedFile && /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-xs text-zinc-500", children: helperText })
  ] });
}
function InputTags({
  label,
  helperText,
  placeholder = "Add a tag...",
  onChange,
  className,
  defaultValue = [],
  maxTags
}) {
  const [tags, setTags] = React.useState(defaultValue);
  const [inputValue, setInputValue] = React.useState("");
  const [isFocused, setIsFocused] = React.useState(false);
  const inputRef = React.useRef(null);
  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      addTag();
    } else if (e.key === "Backspace" && !inputValue && tags.length > 0) {
      removeTag(tags.length - 1);
    }
  };
  const addTag = () => {
    const trimmedInput = inputValue.trim();
    if (trimmedInput && !tags.includes(trimmedInput)) {
      if (maxTags && tags.length >= maxTags) return;
      const newTags = [...tags, trimmedInput];
      setTags(newTags);
      onChange == null ? void 0 : onChange(newTags);
      setInputValue("");
    }
  };
  const removeTag = (index) => {
    const newTags = tags.filter((_, i) => i !== index);
    setTags(newTags);
    onChange == null ? void 0 : onChange(newTags);
  };
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: cn("w-full space-y-2", className), children: [
    label && /* @__PURE__ */ jsxRuntime.jsx("label", { className: "text-sm font-medium leading-none text-zinc-900 dark:text-zinc-100", children: label }),
    /* @__PURE__ */ jsxRuntime.jsxs(
      "div",
      {
        className: cn(
          "flex flex-wrap items-center gap-2 p-2 w-full min-h-[42px] border rounded-lg bg-white dark:bg-zinc-900 transition-all duration-200 cursor-text",
          isFocused ? "border-violet-500 ring-2 ring-violet-500/20" : "border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700"
        ),
        onClick: () => {
          var _a;
          return (_a = inputRef.current) == null ? void 0 : _a.focus();
        },
        children: [
          tags.map((tag, index) => /* @__PURE__ */ jsxRuntime.jsxs(
            "span",
            {
              className: "inline-flex items-center px-2 py-1 text-xs font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 rounded-md animate-in fade-in zoom-in-95 duration-200",
              children: [
                tag,
                /* @__PURE__ */ jsxRuntime.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: (e) => {
                      e.stopPropagation();
                      removeTag(index);
                    },
                    className: "ml-1 text-zinc-500 hover:text-red-500 focus:outline-none",
                    children: /* @__PURE__ */ jsxRuntime.jsx(X, { size: 12 })
                  }
                )
              ]
            },
            index
          )),
          /* @__PURE__ */ jsxRuntime.jsx(
            "input",
            {
              ref: inputRef,
              type: "text",
              value: inputValue,
              onChange: (e) => setInputValue(e.target.value),
              onKeyDown: handleKeyDown,
              onFocus: () => setIsFocused(true),
              onBlur: () => {
                setIsFocused(false);
                addTag();
              },
              placeholder: tags.length === 0 ? placeholder : "",
              className: "flex-1 bg-transparent border-none outline-none text-sm min-w-[120px] text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-500"
            }
          )
        ]
      }
    ),
    helperText && /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-xs text-zinc-500", children: helperText })
  ] });
}
function TextareaAuto(_a) {
  var _b = _a, {
    className,
    label,
    helperText,
    minRows = 3,
    maxRows = 10,
    onChange,
    value
  } = _b, props = __objRest(_b, [
    "className",
    "label",
    "helperText",
    "minRows",
    "maxRows",
    "onChange",
    "value"
  ]);
  const textareaRef = React.useRef(null);
  const [internalValue, setInternalValue] = React.useState(value || "");
  const handleResize = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${Math.min(
        textarea.scrollHeight,
        maxRows * 24
        // approximate line-height of 24px
      )}px`;
    }
  };
  React.useEffect(() => {
    handleResize();
  }, [internalValue, value]);
  const handleChange = (e) => {
    setInternalValue(e.target.value);
    onChange == null ? void 0 : onChange(e);
  };
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "w-full space-y-2", children: [
    label && /* @__PURE__ */ jsxRuntime.jsx("label", { className: "text-sm font-medium leading-none text-zinc-900 dark:text-zinc-100", children: label }),
    /* @__PURE__ */ jsxRuntime.jsx(
      "textarea",
      __spreadValues({
        ref: textareaRef,
        rows: minRows,
        value: value !== void 0 ? value : internalValue,
        onChange: handleChange,
        className: cn(
          "w-full px-4 py-3 text-sm rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 outline-none transition-all duration-200 placeholder:text-zinc-500 dark:placeholder:text-zinc-400 resize-none",
          "focus:border-violet-500/50 focus:ring-2 focus:ring-violet-500/20",
          className
        ),
        style: { scrollbarWidth: "none" }
      }, props)
    ),
    helperText && /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-xs text-zinc-500", children: helperText })
  ] });
}
function TooltipBase({
  content,
  children,
  position = "top",
  className,
  wrapperClassName
}) {
  const [isVisible, setIsVisible] = React.useState(false);
  const positionClasses = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
    left: "right-full top-1/2 -translate-y-1/2 mr-2",
    right: "left-full top-1/2 -translate-y-1/2 ml-2"
  };
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "div",
    {
      className: cn("relative inline-block", wrapperClassName),
      onMouseEnter: () => setIsVisible(true),
      onMouseLeave: () => setIsVisible(false),
      children: [
        children,
        /* @__PURE__ */ jsxRuntime.jsx(
          "div",
          {
            className: cn(
              "absolute z-50 px-3 py-1.5 text-xs font-medium text-white bg-zinc-900 dark:bg-zinc-100 dark:text-zinc-900 rounded-md shadow-sm whitespace-nowrap transition-all duration-200 pointer-events-none",
              positionClasses[position],
              isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 scale-95",
              position === "top" && !isVisible && "translate-y-1",
              position === "bottom" && !isVisible && "-translate-y-1",
              position === "left" && !isVisible && "translate-x-1",
              position === "right" && !isVisible && "-translate-x-1",
              className
            ),
            children: content
          }
        )
      ]
    }
  );
}
function TooltipGlass({
  content,
  children,
  position = "top",
  className
}) {
  const [isVisible, setIsVisible] = React.useState(false);
  const positionClasses = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-3",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-3",
    left: "right-full top-1/2 -translate-y-1/2 mr-3",
    right: "left-full top-1/2 -translate-y-1/2 ml-3"
  };
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "div",
    {
      className: "relative inline-block",
      onMouseEnter: () => setIsVisible(true),
      onMouseLeave: () => setIsVisible(false),
      children: [
        children,
        /* @__PURE__ */ jsxRuntime.jsx(
          "div",
          {
            className: cn(
              "absolute z-50 px-4 py-2 text-sm font-medium backdrop-blur-md bg-white/30 dark:bg-black/30 border border-white/20 dark:border-white/10 rounded-xl shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] whitespace-nowrap transition-all duration-300 pointer-events-none",
              "text-zinc-800 dark:text-zinc-100",
              positionClasses[position],
              isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 scale-95 blur-sm",
              position === "top" && !isVisible && "translate-y-2",
              position === "bottom" && !isVisible && "-translate-y-2",
              position === "left" && !isVisible && "translate-x-2",
              position === "right" && !isVisible && "-translate-x-2",
              className
            ),
            children: content
          }
        )
      ]
    }
  );
}
function TooltipNeon({
  content,
  children,
  position = "top",
  className,
  color = "violet"
}) {
  const [isVisible, setIsVisible] = React.useState(false);
  const colors = {
    violet: "border-violet-500 shadow-[0_0_15px_rgba(139,92,246,0.5)] text-violet-100 bg-zinc-900/90",
    cyan: "border-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.5)] text-cyan-100 bg-zinc-900/90",
    pink: "border-pink-500 shadow-[0_0_15px_rgba(236,72,153,0.5)] text-pink-100 bg-zinc-900/90"
  };
  const positionClasses = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-3",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-3",
    left: "right-full top-1/2 -translate-y-1/2 mr-3",
    right: "left-full top-1/2 -translate-y-1/2 ml-3"
  };
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "div",
    {
      className: "relative inline-block",
      onMouseEnter: () => setIsVisible(true),
      onMouseLeave: () => setIsVisible(false),
      children: [
        children,
        /* @__PURE__ */ jsxRuntime.jsxs(
          "div",
          {
            className: cn(
              "absolute z-50 px-4 py-2 text-xs uppercase tracking-widest font-bold border rounded-none whitespace-nowrap transition-all duration-200 pointer-events-none",
              colors[color],
              positionClasses[position],
              isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 scale-90",
              position === "top" && !isVisible && "translate-y-2",
              position === "bottom" && !isVisible && "-translate-y-2",
              position === "left" && !isVisible && "translate-x-2",
              position === "right" && !isVisible && "-translate-x-2",
              className
            ),
            children: [
              /* @__PURE__ */ jsxRuntime.jsx("span", { className: "relative z-10", children: content }),
              /* @__PURE__ */ jsxRuntime.jsx("div", { className: "absolute inset-0 bg-white/5 w-full h-full animate-blink pointer-events-none" })
            ]
          }
        )
      ]
    }
  );
}
function TooltipMinimal({
  content,
  children,
  position = "top",
  className
}) {
  const [isVisible, setIsVisible] = React.useState(false);
  const positionClasses = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-1",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-1",
    left: "right-full top-1/2 -translate-y-1/2 mr-2",
    right: "left-full top-1/2 -translate-y-1/2 ml-2"
  };
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "div",
    {
      className: "relative inline-block group",
      onMouseEnter: () => setIsVisible(true),
      onMouseLeave: () => setIsVisible(false),
      children: [
        children,
        /* @__PURE__ */ jsxRuntime.jsx(
          "div",
          {
            className: cn(
              "absolute z-50 text-xs font-medium text-zinc-500 dark:text-zinc-400 whitespace-nowrap transition-all duration-300 pointer-events-none",
              positionClasses[position],
              isVisible ? "opacity-100 translate-y-0" : "opacity-0",
              position === "top" && !isVisible && "translate-y-1",
              position === "bottom" && !isVisible && "-translate-y-1",
              position === "left" && !isVisible && "translate-x-1",
              position === "right" && !isVisible && "-translate-x-1",
              className
            ),
            children: content
          }
        )
      ]
    }
  );
}
function TooltipHologram({
  content,
  children,
  position = "top",
  className
}) {
  const [isVisible, setIsVisible] = React.useState(false);
  const [rotation, setRotation] = React.useState({ x: 0, y: 0 });
  const triggerRef = React.useRef(null);
  const handleMouseMove = (e) => {
    if (!triggerRef.current) return;
    const rect = triggerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / centerY * -15;
    const rotateY = (x - centerX) / centerX * 15;
    setRotation({ x: rotateX, y: rotateY });
  };
  const handleMouseLeave = () => {
    setIsVisible(false);
    setRotation({ x: 0, y: 0 });
  };
  const positionClasses = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-4",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-4",
    left: "right-full top-1/2 -translate-y-1/2 mr-4",
    right: "left-full top-1/2 -translate-y-1/2 ml-4"
  };
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "div",
    {
      ref: triggerRef,
      className: cn("relative inline-block group perspective-1000", className),
      onMouseEnter: () => setIsVisible(true),
      onMouseLeave: handleMouseLeave,
      onMouseMove: handleMouseMove,
      children: [
        children,
        /* @__PURE__ */ jsxRuntime.jsxs(
          "div",
          {
            className: cn(
              "absolute z-50 px-4 py-2 text-sm font-semibold tracking-wide uppercase text-cyan-100 whitespace-nowrap transition-opacity duration-300 pointer-events-none",
              isVisible ? "opacity-100" : "opacity-0",
              positionClasses[position]
            ),
            style: {
              transform: isVisible ? `translate(${position === "top" || position === "bottom" ? "-50%" : "0"}, ${position === "left" || position === "right" ? "-50%" : "0"}) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)` : void 0,
              transformStyle: "preserve-3d"
            },
            children: [
              /* @__PURE__ */ jsxRuntime.jsx("div", { className: "absolute inset-0 bg-cyan-500/10 backdrop-blur-md rounded-lg border border-cyan-400/30 shadow-[0_0_15px_rgba(34,211,238,0.3)]" }),
              /* @__PURE__ */ jsxRuntime.jsx(
                "div",
                {
                  className: "absolute inset-0 rounded-lg opacity-40 mix-blend-overlay",
                  style: {
                    background: `linear-gradient(${135 + rotation.y * 2}deg, rgba(255,255,255,0) 30%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0) 70%)`
                  }
                }
              ),
              /* @__PURE__ */ jsxRuntime.jsx("div", { className: "absolute inset-0 bg-[linear-gradient(rgba(18,255,255,0.1)_1px,transparent_1px)] bg-[size:100%_4px] rounded-lg pointer-events-none" }),
              /* @__PURE__ */ jsxRuntime.jsx("span", { className: "relative z-10 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]", children: content })
            ]
          }
        )
      ]
    }
  );
}
function TooltipGlitch({
  content,
  children,
  position = "top",
  className
}) {
  const [isVisible, setIsVisible] = React.useState(false);
  const positionClasses = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-3",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-3",
    left: "right-full top-1/2 -translate-y-1/2 mr-3",
    right: "left-full top-1/2 -translate-y-1/2 ml-3"
  };
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "div",
    {
      className: cn("relative inline-block", className),
      onMouseEnter: () => setIsVisible(true),
      onMouseLeave: () => setIsVisible(false),
      children: [
        children,
        /* @__PURE__ */ jsxRuntime.jsx(
          "div",
          {
            className: cn(
              "absolute z-50 whitespace-nowrap pointer-events-none",
              positionClasses[position],
              isVisible ? "opacity-100" : "opacity-0"
            ),
            children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "relative group", children: [
              /* @__PURE__ */ jsxRuntime.jsx("div", { className: "relative z-10 bg-black/90 text-white font-mono text-xs px-3 py-1.5 border-l-2 border-red-500 clip-path-polygon-[0_0,_100%_0,_100%_100%,_10%_100%,_0_80%]", children: /* @__PURE__ */ jsxRuntime.jsx("span", { className: "tracking-widest uppercase", children: content }) }),
              /* @__PURE__ */ jsxRuntime.jsx(
                "div",
                {
                  className: cn(
                    "absolute inset-0 bg-red-600/80 text-transparent px-3 py-1.5 font-mono text-xs border-l-2 border-transparent",
                    isVisible && "animate-glitch-1"
                  ),
                  style: { clipPath: "polygon(0 0, 100% 0, 100% 100%, 10% 100%, 0 80%)" },
                  children: content
                }
              ),
              /* @__PURE__ */ jsxRuntime.jsx(
                "div",
                {
                  className: cn(
                    "absolute inset-0 bg-blue-600/80 text-transparent px-3 py-1.5 font-mono text-xs border-l-2 border-transparent",
                    isVisible && "animate-glitch-2"
                  ),
                  style: { clipPath: "polygon(0 0, 100% 0, 100% 100%, 10% 100%, 0 80%)" },
                  children: content
                }
              )
            ] })
          }
        )
      ]
    }
  );
}
function TooltipSmart({
  content,
  children,
  className
}) {
  const [isVisible, setIsVisible] = React.useState(false);
  const [coords, setCoords] = React.useState({ x: 0, y: 0 });
  const triggerRef = React.useRef(null);
  const handleMouseMove = (e) => {
    if (triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      setCoords({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    }
  };
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "div",
    {
      ref: triggerRef,
      className: cn("relative inline-block cursor-none", className),
      onMouseEnter: () => setIsVisible(true),
      onMouseLeave: () => setIsVisible(false),
      onMouseMove: handleMouseMove,
      children: [
        children,
        /* @__PURE__ */ jsxRuntime.jsx(
          "div",
          {
            className: cn(
              "absolute z-50 px-3 py-1.5 text-xs font-medium text-white bg-zinc-900/90 dark:bg-white/90 dark:text-zinc-900 rounded-full shadow-xl backdrop-blur-sm pointer-events-none transition-opacity duration-150 whitespace-nowrap",
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
            ),
            style: {
              left: coords.x,
              top: coords.y,
              transform: "translate(12px, 12px)"
              // Offset from cursor
            },
            children: content
          }
        )
      ]
    }
  );
}
var TabsContext = React__default.default.createContext(null);
function useTabs() {
  const context = React__default.default.useContext(TabsContext);
  if (!context) throw new Error("Tabs components must be used within a Tabs provider");
  return context;
}
function Tabs({ defaultValue, className, children }) {
  const [activeTab, setActiveTab] = React.useState(defaultValue);
  return /* @__PURE__ */ jsxRuntime.jsx(TabsContext.Provider, { value: { activeTab, setActiveTab }, children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: cn("w-full", className), children }) });
}
function TabsList({ children, className }) {
  return /* @__PURE__ */ jsxRuntime.jsx("div", { className: cn("inline-flex items-center justify-center rounded-lg bg-zinc-100 p-1 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400", className), children });
}
function TabsTrigger({ value, children, className, icon }) {
  const { activeTab, setActiveTab } = useTabs();
  const isActive = activeTab === value;
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "button",
    {
      onClick: () => setActiveTab(value),
      className: cn(
        "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-zinc-950 dark:focus-visible:ring-zinc-300",
        isActive ? "bg-white text-zinc-950 shadow-sm dark:bg-zinc-950 dark:text-zinc-50" : "hover:bg-zinc-200/50 hover:text-zinc-900 dark:hover:bg-zinc-700/50 dark:hover:text-zinc-50",
        className
      ),
      children: [
        icon && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "w-4 h-4", children: icon }),
        children
      ]
    }
  );
}
function TabsContent({ value, children, className }) {
  const { activeTab } = useTabs();
  if (activeTab !== value) return null;
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      className: cn(
        "mt-2 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 dark:ring-offset-zinc-950 dark:focus-visible:ring-zinc-300 animate-in fade-in-0 zoom-in-95 duration-200",
        className
      ),
      children
    }
  );
}
var TabsGlassContext = React__default.default.createContext(null);
function TabsGlass({ defaultValue, className, children }) {
  const [activeTab, setActiveTab] = React.useState(defaultValue);
  return /* @__PURE__ */ jsxRuntime.jsx(TabsGlassContext.Provider, { value: { activeTab, setActiveTab }, children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: cn("w-full group/tabs", className), children }) });
}
function TabsGlassList({ children, className }) {
  return /* @__PURE__ */ jsxRuntime.jsx("div", { className: cn("relative flex items-center gap-2 p-1.5 rounded-full bg-white/20 dark:bg-black/20 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-lg w-fit", className), children });
}
function TabsGlassTrigger({ value, children, className, icon }) {
  const context = React__default.default.useContext(TabsGlassContext);
  if (!context) throw new Error("TabsGlassTrigger must be used within TabsGlass");
  const { activeTab, setActiveTab } = context;
  const isActive = activeTab === value;
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "button",
    {
      onClick: () => setActiveTab(value),
      className: cn(
        "relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 z-10",
        isActive ? "text-zinc-900 dark:text-white" : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200",
        className
      ),
      children: [
        isActive && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "absolute inset-0 bg-white/80 dark:bg-zinc-800/80 shadow-sm rounded-full -z-10 animate-in fade-in zoom-in-95 duration-200" }),
        icon && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "w-4 h-4", children: icon }),
        children
      ]
    }
  );
}
function TabsGlassContent({ value, children, className }) {
  const context = React__default.default.useContext(TabsGlassContext);
  if (!context) throw new Error("TabsGlassContent must be used within TabsGlass");
  if (context.activeTab !== value) return null;
  return /* @__PURE__ */ jsxRuntime.jsx("div", { className: cn("mt-4 p-6 rounded-2xl bg-white/40 dark:bg-black/40 backdrop-blur-md border border-white/20 dark:border-white/10 shadow-xl animate-in slide-in-from-bottom-2 fade-in duration-300", className), children });
}
var TabsNeonContext = React__default.default.createContext(null);
function TabsNeon({ defaultValue, className, children }) {
  const [activeTab, setActiveTab] = React.useState(defaultValue);
  return /* @__PURE__ */ jsxRuntime.jsx(TabsNeonContext.Provider, { value: { activeTab, setActiveTab }, children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: cn("w-full", className), children }) });
}
function TabsNeonList({ children, className }) {
  return /* @__PURE__ */ jsxRuntime.jsx("div", { className: cn("flex items-center gap-8 border-b border-zinc-800/50 pb-px mb-6 px-4", className), children });
}
function TabsNeonTrigger({ value, children, className }) {
  const context = React__default.default.useContext(TabsNeonContext);
  if (!context) throw new Error("TabsNeonTrigger must be used within TabsNeon");
  const { activeTab, setActiveTab } = context;
  const isActive = activeTab === value;
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "button",
    {
      onClick: () => setActiveTab(value),
      className: cn(
        "relative pb-3 text-sm font-medium tracking-wide uppercase transition-all duration-300",
        isActive ? "text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]" : "text-zinc-500 hover:text-zinc-300",
        className
      ),
      children: [
        children,
        /* @__PURE__ */ jsxRuntime.jsx("span", { className: cn(
          "absolute bottom-0 left-0 w-full h-[2px] bg-cyan-400 shadow-[0_0_10px_2px_rgba(34,211,238,0.6)] transition-all duration-300",
          isActive ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
        ) })
      ]
    }
  );
}
function TabsNeonContent({ value, children, className }) {
  const context = React__default.default.useContext(TabsNeonContext);
  if (!context) throw new Error("TabsNeonContent must be used within TabsNeon");
  if (context.activeTab !== value) return null;
  return /* @__PURE__ */ jsxRuntime.jsx("div", { className: cn("animate-in fade-in duration-500", className), children });
}
var TabsCyberContext = React__default.default.createContext(null);
function TabsCyber({ defaultValue, className, children }) {
  const [activeTab, setActiveTab] = React.useState(defaultValue);
  return /* @__PURE__ */ jsxRuntime.jsx(TabsCyberContext.Provider, { value: { activeTab, setActiveTab }, children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: cn("w-full bg-zinc-950/50 p-1", className), children }) });
}
function TabsCyberList({ children, className }) {
  return /* @__PURE__ */ jsxRuntime.jsx("div", { className: cn("flex flex-wrap gap-2 mb-8", className), children });
}
function TabsCyberTrigger({ value, children, className }) {
  const context = React__default.default.useContext(TabsCyberContext);
  if (!context) throw new Error("TabsCyberTrigger must be used within TabsCyber");
  const { activeTab, setActiveTab } = context;
  const isActive = activeTab === value;
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "button",
    {
      onClick: () => setActiveTab(value),
      className: cn(
        "relative px-6 py-2 text-sm font-mono uppercase tracking-wider clip-path-slant transition-all duration-200",
        isActive ? "bg-yellow-400 text-black font-bold clip-path-slant-active" : "bg-zinc-900 text-zinc-500 border border-zinc-800 hover:text-yellow-400 hover:border-yellow-400/50",
        className
      ),
      style: {
        clipPath: "polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)"
      },
      children: [
        !isActive && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "absolute top-0 right-0 w-2 h-2 border-t border-r border-zinc-700" }),
        !isActive && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "absolute bottom-0 left-0 w-2 h-2 border-b border-l border-zinc-700" }),
        children
      ]
    }
  );
}
function TabsCyberContent({ value, children, className }) {
  const context = React__default.default.useContext(TabsCyberContext);
  if (!context) throw new Error("TabsCyberContent must be used within TabsCyber");
  if (context.activeTab !== value) return null;
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: cn(
    "relative p-6 border border-zinc-800 bg-zinc-900/50",
    "before:absolute before:top-0 before:left-0 before:w-3 before:h-3 before:border-t-2 before:border-l-2 before:border-yellow-400/50",
    "after:absolute after:bottom-0 after:right-0 after:w-3 after:h-3 after:border-b-2 after:border-r-2 after:border-yellow-400/50",
    "animate-in fade-in zoom-in-95 duration-150",
    className
  ), children: [
    /* @__PURE__ */ jsxRuntime.jsx("div", { className: "absolute top-0 right-10 w-20 h-px bg-zinc-800" }),
    /* @__PURE__ */ jsxRuntime.jsx("div", { className: "absolute bottom-0 left-10 w-20 h-px bg-zinc-800" }),
    children
  ] });
}
var PaginationLink = (_a) => {
  var _b = _a, {
    className,
    isActive,
    size = "icon"
  } = _b, props = __objRest(_b, [
    "className",
    "isActive",
    "size"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "a",
    __spreadValues({
      "aria-current": isActive ? "page" : void 0,
      className: cn(
        buttonBaseStyles,
        buttonVariants[isActive ? "outline" : "ghost"],
        buttonSizes[size],
        isActive && "bg-zinc-100 dark:bg-zinc-800",
        className
      )
    }, props)
  );
};
PaginationLink.displayName = "PaginationLink";
var Pagination = (_a) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "nav",
    __spreadValues({
      role: "navigation",
      "aria-label": "pagination",
      className: cn("mx-auto flex w-full justify-center", className)
    }, props)
  );
};
Pagination.displayName = "Pagination";
var PaginationContent = React__default.default.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "ul",
    __spreadValues({
      ref,
      className: cn("flex flex-row items-center gap-1", className)
    }, props)
  );
});
PaginationContent.displayName = "PaginationContent";
var PaginationItem = React__default.default.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx("li", __spreadValues({ ref, className: cn("", className) }, props));
});
PaginationItem.displayName = "PaginationItem";
var PaginationPrevious = (_a) => {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    PaginationLink,
    __spreadProps(__spreadValues({
      "aria-label": "Go to previous page",
      size: "md",
      className: cn("gap-1 pl-2.5", className)
    }, props), {
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(ChevronLeft, { className: "h-4 w-4" }),
        /* @__PURE__ */ jsxRuntime.jsx("span", { children: "Previous" })
      ]
    })
  );
};
PaginationPrevious.displayName = "PaginationPrevious";
var PaginationNext = (_a) => {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    PaginationLink,
    __spreadProps(__spreadValues({
      "aria-label": "Go to next page",
      size: "md",
      className: cn("gap-1 pr-2.5", className)
    }, props), {
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("span", { children: "Next" }),
        /* @__PURE__ */ jsxRuntime.jsx(ChevronRight, { className: "h-4 w-4" })
      ]
    })
  );
};
PaginationNext.displayName = "PaginationNext";
var PaginationEllipsis = (_a) => {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "span",
    __spreadProps(__spreadValues({
      "aria-hidden": true,
      className: cn("flex h-9 w-9 items-center justify-center", className)
    }, props), {
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(Ellipsis, { className: "h-4 w-4" }),
        /* @__PURE__ */ jsxRuntime.jsx("span", { className: "sr-only", children: "More pages" })
      ]
    })
  );
};
PaginationEllipsis.displayName = "PaginationEllipsis";
var PaginationGlass = (_a) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "nav",
    __spreadValues({
      role: "navigation",
      "aria-label": "pagination",
      className: cn("mx-auto flex w-full justify-center", className)
    }, props)
  );
};
var PaginationGlassContent = React__default.default.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "ul",
    __spreadValues({
      ref,
      className: cn(
        "flex flex-row items-center gap-1 p-2 rounded-full bg-white/20 dark:bg-black/20 backdrop-blur-md border border-white/20 dark:border-white/10 shadow-lg",
        className
      )
    }, props)
  );
});
var PaginationGlassItem = React__default.default.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx("li", __spreadValues({ ref, className: cn("", className) }, props));
});
var PaginationGlassLink = (_a) => {
  var _b = _a, {
    className,
    isActive,
    children
  } = _b, props = __objRest(_b, [
    "className",
    "isActive",
    "children"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "a",
    __spreadProps(__spreadValues({
      "aria-current": isActive ? "page" : void 0,
      className: cn(
        "flex items-center justify-center min-w-[36px] h-9 px-3 text-sm font-medium rounded-full transition-all duration-300 cursor-pointer select-none",
        isActive ? "bg-white/90 text-zinc-900 shadow-sm" : "text-zinc-600 dark:text-zinc-300 hover:bg-white/40 dark:hover:bg-white/10 hover:text-zinc-900 dark:hover:text-white",
        className
      )
    }, props), {
      children
    })
  );
};
var PaginationGlassPrevious = (_a) => {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    PaginationGlassLink,
    __spreadProps(__spreadValues({
      "aria-label": "Go to previous page",
      className: cn("pl-2.5", className)
    }, props), {
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(ChevronLeft, { className: "h-4 w-4" }),
        /* @__PURE__ */ jsxRuntime.jsx("span", { className: "sr-only", children: "Previous" })
      ]
    })
  );
};
var PaginationGlassNext = (_a) => {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    PaginationGlassLink,
    __spreadProps(__spreadValues({
      "aria-label": "Go to next page",
      className: cn("pr-2.5", className)
    }, props), {
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("span", { className: "sr-only", children: "Next" }),
        /* @__PURE__ */ jsxRuntime.jsx(ChevronRight, { className: "h-4 w-4" })
      ]
    })
  );
};
var PaginationGlassEllipsis = (_a) => {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "span",
    __spreadProps(__spreadValues({
      "aria-hidden": true,
      className: cn("flex h-9 w-9 items-center justify-center text-zinc-500", className)
    }, props), {
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(Ellipsis, { className: "h-4 w-4" }),
        /* @__PURE__ */ jsxRuntime.jsx("span", { className: "sr-only", children: "More pages" })
      ]
    })
  );
};
var PaginationNeon = (_a) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "nav",
    __spreadValues({
      role: "navigation",
      "aria-label": "pagination",
      className: cn("mx-auto flex w-full justify-center", className)
    }, props)
  );
};
var PaginationNeonContent = React__default.default.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "ul",
    __spreadValues({
      ref,
      className: cn("flex flex-row items-center gap-2", className)
    }, props)
  );
});
var PaginationNeonItem = React__default.default.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx("li", __spreadValues({ ref, className: cn("", className) }, props));
});
var PaginationNeonLink = (_a) => {
  var _b = _a, {
    className,
    isActive,
    children
  } = _b, props = __objRest(_b, [
    "className",
    "isActive",
    "children"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "a",
    __spreadProps(__spreadValues({
      "aria-current": isActive ? "page" : void 0,
      className: cn(
        "relative flex items-center justify-center min-w-[40px] h-10 px-3 text-sm font-bold border-2 transition-all duration-300 cursor-pointer select-none overflow-hidden group",
        isActive ? "border-cyan-400 text-cyan-400 bg-cyan-950/30 shadow-[0_0_15px_rgba(34,211,238,0.5)]" : "border-zinc-800 text-zinc-500 hover:border-cyan-700 hover:text-cyan-200 hover:bg-cyan-950/10",
        className
      )
    }, props), {
      children: [
        isActive && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "absolute inset-0 bg-cyan-400/10 animate-pulse" }),
        /* @__PURE__ */ jsxRuntime.jsx("span", { className: "relative z-10", children })
      ]
    })
  );
};
var PaginationNeonPrevious = (_a) => {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    PaginationNeonLink,
    __spreadProps(__spreadValues({
      "aria-label": "Go to previous page",
      className: cn("", className)
    }, props), {
      children: /* @__PURE__ */ jsxRuntime.jsx(ChevronLeft, { className: "h-5 w-5" })
    })
  );
};
var PaginationNeonNext = (_a) => {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    PaginationNeonLink,
    __spreadProps(__spreadValues({
      "aria-label": "Go to next page",
      className: cn("", className)
    }, props), {
      children: /* @__PURE__ */ jsxRuntime.jsx(ChevronRight, { className: "h-5 w-5" })
    })
  );
};
var PaginationNeonEllipsis = (_a) => {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "span",
    __spreadProps(__spreadValues({
      "aria-hidden": true,
      className: cn("flex h-10 w-10 items-center justify-center text-zinc-600", className)
    }, props), {
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(Ellipsis, { className: "h-4 w-4" }),
        /* @__PURE__ */ jsxRuntime.jsx("span", { className: "sr-only", children: "More pages" })
      ]
    })
  );
};
var PaginationCyber = (_a) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "nav",
    __spreadValues({
      role: "navigation",
      "aria-label": "pagination",
      className: cn("mx-auto flex w-full justify-center", className)
    }, props)
  );
};
var PaginationCyberContent = React__default.default.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "ul",
    __spreadValues({
      ref,
      className: cn("flex flex-row items-center gap-1 bg-black/40 p-1 border border-zinc-800 backdrop-blur-sm", className),
      style: { clipPath: "polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)" }
    }, props)
  );
});
var PaginationCyberItem = React__default.default.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx("li", __spreadValues({ ref, className: cn("", className) }, props));
});
var PaginationCyberLink = (_a) => {
  var _b = _a, {
    className,
    isActive,
    children
  } = _b, props = __objRest(_b, [
    "className",
    "isActive",
    "children"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "a",
    __spreadProps(__spreadValues({
      "aria-current": isActive ? "page" : void 0,
      className: cn(
        "flex items-center justify-center min-w-[40px] h-10 px-3 text-sm font-mono border-b-2 transition-all duration-150 cursor-pointer select-none",
        isActive ? "border-yellow-500 bg-yellow-500/10 text-yellow-500 font-bold" : "border-transparent text-zinc-500 hover:text-yellow-400 hover:bg-yellow-500/5",
        className
      )
    }, props), {
      children
    })
  );
};
var PaginationCyberPrevious = (_a) => {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    PaginationCyberLink,
    __spreadProps(__spreadValues({
      "aria-label": "Go to previous page",
      className: cn("border-r border-zinc-800", className)
    }, props), {
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(ChevronLeft, { className: "h-4 w-4" }),
        /* @__PURE__ */ jsxRuntime.jsx("span", { className: "sr-only", children: "Previous" })
      ]
    })
  );
};
var PaginationCyberNext = (_a) => {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    PaginationCyberLink,
    __spreadProps(__spreadValues({
      "aria-label": "Go to next page",
      className: cn("border-l border-zinc-800", className)
    }, props), {
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("span", { className: "sr-only", children: "Next" }),
        /* @__PURE__ */ jsxRuntime.jsx(ChevronRight, { className: "h-4 w-4" })
      ]
    })
  );
};
var PaginationCyberEllipsis = (_a) => {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "span",
    __spreadProps(__spreadValues({
      "aria-hidden": true,
      className: cn("flex h-10 w-10 items-center justify-center text-zinc-600 font-mono", className)
    }, props), {
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(Ellipsis, { className: "h-4 w-4" }),
        /* @__PURE__ */ jsxRuntime.jsx("span", { className: "sr-only", children: "More pages" })
      ]
    })
  );
};
function AccordionBase({ title, children, className, defaultOpen = false }) {
  const [isOpen, setIsOpen] = React.useState(defaultOpen);
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: cn("border-b border-zinc-200 dark:border-zinc-800", className), children: [
    /* @__PURE__ */ jsxRuntime.jsxs(
      "button",
      {
        type: "button",
        onClick: () => setIsOpen(!isOpen),
        className: "flex w-full items-center justify-between py-4 font-medium transition-all hover:underline text-left rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2 dark:focus:ring-zinc-300 dark:focus:ring-offset-zinc-950",
        children: [
          title,
          /* @__PURE__ */ jsxRuntime.jsx(
            ChevronDown,
            {
              className: cn("h-4 w-4 shrink-0 transition-transform duration-200", isOpen && "rotate-180")
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      {
        className: cn(
          "overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-96 opacity-100 pb-4" : "max-h-0 opacity-0"
        ),
        children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: "text-sm text-zinc-500 dark:text-zinc-400", children })
      }
    )
  ] });
}
function AccordionGlass({ title, children, className, defaultOpen = false }) {
  const [isOpen, setIsOpen] = React.useState(defaultOpen);
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: cn("mb-4 rounded-xl overflow-hidden border border-white/20 dark:border-white/10 bg-white/10 dark:bg-black/10 backdrop-blur-md shadow-sm transition-all duration-300", isOpen && "bg-white/20 dark:bg-black/20 shadow-md", className), children: [
    /* @__PURE__ */ jsxRuntime.jsxs(
      "button",
      {
        type: "button",
        onClick: () => setIsOpen(!isOpen),
        className: "flex w-full items-center justify-between p-4 text-left transition-colors hover:bg-white/10 dark:hover:bg-white/5",
        children: [
          /* @__PURE__ */ jsxRuntime.jsx("span", { className: "font-semibold text-zinc-800 dark:text-white", children: title }),
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: cn("p-1 rounded-full bg-white/20 dark:bg-white/10 transition-transform duration-300", isOpen && "rotate-180 bg-white/40 dark:bg-white/20"), children: isOpen ? /* @__PURE__ */ jsxRuntime.jsx(Minus, { className: "w-4 h-4" }) : /* @__PURE__ */ jsxRuntime.jsx(Plus, { className: "w-4 h-4" }) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      {
        className: cn(
          "overflow-hidden transition-all duration-500 ease-out",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        ),
        children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: "p-4 pt-0 text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed border-t border-white/10", children })
      }
    )
  ] });
}
function AccordionNeon({ title, children, className, defaultOpen = false }) {
  const [isOpen, setIsOpen] = React.useState(defaultOpen);
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: cn("mb-4 group", className), children: [
    /* @__PURE__ */ jsxRuntime.jsxs(
      "button",
      {
        type: "button",
        onClick: () => setIsOpen(!isOpen),
        className: cn(
          "flex w-full items-center justify-between p-4 text-left border rounded-lg transition-all duration-300",
          isOpen ? "border-cyan-500 bg-cyan-950/20 text-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.2)]" : "border-zinc-800 bg-zinc-900/50 text-zinc-400 hover:border-zinc-600 hover:text-zinc-200"
        ),
        children: [
          /* @__PURE__ */ jsxRuntime.jsxs("span", { className: "font-bold tracking-wide uppercase flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntime.jsx("span", { className: cn("w-2 h-2 rounded-full transition-colors duration-300", isOpen ? "bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,1)]" : "bg-zinc-700") }),
            title
          ] }),
          /* @__PURE__ */ jsxRuntime.jsx(
            ChevronRight,
            {
              className: cn("h-5 w-5 transition-transform duration-300", isOpen && "rotate-90 text-cyan-400")
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      {
        className: cn(
          "overflow-hidden transition-all duration-300 ease-in-out border-l border-r border-b rounded-b-lg mx-1",
          isOpen ? "max-h-96 opacity-100 border-cyan-500/30 bg-cyan-950/10" : "max-h-0 opacity-0 border-transparent bg-transparent"
        ),
        children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: "p-4 text-sm text-cyan-100/80 font-light leading-relaxed", children })
      }
    )
  ] });
}
function AccordionCyber({ title, id, children, className, defaultOpen = false }) {
  const [isOpen, setIsOpen] = React.useState(defaultOpen);
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: cn("mb-2 relative", className), children: [
    /* @__PURE__ */ jsxRuntime.jsxs(
      "button",
      {
        type: "button",
        onClick: () => setIsOpen(!isOpen),
        className: cn(
          "relative flex w-full items-center justify-between p-3 pl-6 text-left border-l-2 transition-all duration-200 clip-path-slant",
          "bg-zinc-900",
          isOpen ? "border-yellow-500 text-yellow-500" : "border-zinc-700 text-zinc-400 hover:text-yellow-200 hover:border-yellow-500/50"
        ),
        style: {
          clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%)"
        },
        children: [
          /* @__PURE__ */ jsxRuntime.jsxs("span", { className: "font-mono text-sm uppercase tracking-wider", children: [
            /* @__PURE__ */ jsxRuntime.jsxs("span", { className: "opacity-50 mr-3", children: [
              "[",
              id,
              "]"
            ] }),
            title
          ] }),
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: cn("mr-4 text-xs font-mono transition-opacity", isOpen ? "opacity-100" : "opacity-50"), children: isOpen ? "[-]" : "[+]" }),
          isOpen && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "absolute inset-0 bg-yellow-500/5 pointer-events-none" })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      {
        className: cn(
          "overflow-hidden transition-all duration-200 ease-linear border-l border-dashed border-yellow-500/20 ml-2 mt-1 pl-4",
          isOpen ? "max-h-96 opacity-100 py-2" : "max-h-0 opacity-0 py-0"
        ),
        children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "text-xs font-mono text-zinc-400 leading-relaxed border-l-2 border-yellow-500/50 pl-2", children: [
          /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-yellow-500/40 select-none mr-2", children: ">" }),
          children
        ] })
      }
    )
  ] });
}
function AccordionSpring({ title, children, className, defaultOpen = false }) {
  const [isOpen, setIsOpen] = React.useState(defaultOpen);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "div",
    {
      className: cn(
        "mb-3 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border-2 border-transparent transition-all duration-500 ease-[cubic-bezier(0.87,0,0.13,1)]",
        isOpen ? "border-zinc-900 dark:border-zinc-100 shadow-xl scale-[1.02]" : "hover:scale-[1.01] hover:bg-zinc-100 dark:hover:bg-zinc-800",
        className
      ),
      children: [
        /* @__PURE__ */ jsxRuntime.jsxs(
          "button",
          {
            type: "button",
            onClick: () => setIsOpen(!isOpen),
            className: "flex w-full items-center justify-between p-5 text-left",
            children: [
              /* @__PURE__ */ jsxRuntime.jsx("span", { className: cn("text-lg font-bold tracking-tight transition-colors", isOpen ? "text-zinc-900 dark:text-zinc-100" : "text-zinc-600 dark:text-zinc-400"), children: title }),
              /* @__PURE__ */ jsxRuntime.jsx(
                "div",
                {
                  className: cn(
                    "flex items-center justify-center w-8 h-8 rounded-full border-2 border-zinc-900 dark:border-zinc-100 transition-all duration-500 ease-[cubic-bezier(0.87,0,0.13,1)]",
                    isOpen ? "bg-zinc-900 dark:bg-zinc-100 rotate-45" : "bg-transparent"
                  ),
                  children: /* @__PURE__ */ jsxRuntime.jsx(Plus, { className: cn("w-5 h-5 transition-colors duration-300", isOpen ? "text-white dark:text-zinc-900" : "text-zinc-900 dark:text-zinc-100") })
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          "div",
          {
            className: cn(
              "overflow-hidden transition-[max-height,opacity,padding] duration-500 ease-[cubic-bezier(0.87,0,0.13,1)]",
              isOpen ? "max-h-96 opacity-100 pb-5 px-5" : "max-h-0 opacity-0 pb-0 px-5"
            ),
            children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: "text-zinc-600 dark:text-zinc-400 font-medium leading-relaxed", children })
          }
        )
      ]
    }
  );
}
function AccordionBorder({ title, children, className, defaultOpen = false }) {
  const [isOpen, setIsOpen] = React.useState(defaultOpen);
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: cn("relative mb-px group", className), children: [
    /* @__PURE__ */ jsxRuntime.jsxs(
      "button",
      {
        type: "button",
        onClick: () => setIsOpen(!isOpen),
        className: "relative flex w-full items-center justify-between py-6 text-left group overflow-hidden",
        children: [
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: cn("absolute inset-0 bg-zinc-100 dark:bg-zinc-800 transition-transform duration-500 ease-out origin-left", isOpen ? "scale-x-100" : "scale-x-0 group-hover:scale-x-5") }),
          /* @__PURE__ */ jsxRuntime.jsx("span", { className: cn("relative z-10 text-xl font-light tracking-wide transition-colors duration-300 pl-4", isOpen ? "text-zinc-900 dark:text-zinc-100 pl-6" : "text-zinc-500 group-hover:text-zinc-900 dark:group-hover:text-zinc-300"), children: title }),
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: cn("relative z-10 pr-4 transition-transform duration-500", isOpen ? "rotate-180" : "group-hover:translate-y-1"), children: /* @__PURE__ */ jsxRuntime.jsx(ArrowDown, { className: "w-5 h-5 font-thin", strokeWidth: 1.5 }) }),
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "absolute bottom-0 left-0 w-full h-px bg-zinc-200 dark:bg-zinc-800" }),
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: cn("absolute bottom-0 left-0 w-full h-px bg-zinc-900 dark:bg-zinc-100 transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] origin-left", isOpen ? "scale-x-100" : "scale-x-0") })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      {
        className: cn(
          "overflow-hidden transition-[max-height,opacity] duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        ),
        children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: "py-6 px-6 text-zinc-600 dark:text-zinc-400 font-light leading-relaxed text-lg border-l border-zinc-200 dark:border-zinc-800 ml-4", children })
      }
    )
  ] });
}
function AccordionImage({ items, className }) {
  var _a;
  const [activeItem, setActiveItem] = React.useState(((_a = items[0]) == null ? void 0 : _a.id) || null);
  return /* @__PURE__ */ jsxRuntime.jsx("div", { className: cn("flex flex-col md:flex-row gap-2 w-full h-[500px]", className), children: items.map((item) => {
    const isActive = activeItem === item.id;
    return /* @__PURE__ */ jsxRuntime.jsxs(
      "div",
      {
        role: "button",
        onClick: () => setActiveItem(item.id),
        className: cn(
          "relative flex-1 rounded-2xl overflow-hidden cursor-pointer transition-[flex-grow] duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group",
          isActive ? "flex-[3] cursor-default" : "hover:flex-[1.2]"
        ),
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(
            "div",
            {
              className: "absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105",
              style: { backgroundImage: `url(${item.image})` }
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: cn("absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500", isActive ? "opacity-80" : "opacity-40 group-hover:opacity-60") }),
          /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end", children: [
            /* @__PURE__ */ jsxRuntime.jsx("div", { className: cn("absolute bottom-6 left-6 origin-bottom-left -rotate-90 md:block hidden transition-opacity duration-300", isActive ? "opacity-0 invisible" : "opacity-100 visible"), children: /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-white font-bold text-2xl whitespace-nowrap tracking-wider", children: item.title }) }),
            /* @__PURE__ */ jsxRuntime.jsxs("div", { className: cn("transition-all duration-500 delay-100", isActive ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0 hidden md:block"), children: [
              /* @__PURE__ */ jsxRuntime.jsx("h3", { className: cn("text-white font-bold text-2xl mb-2", !isActive && "md:hidden"), children: item.title }),
              /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-white/80 text-sm md:text-base line-clamp-2 md:line-clamp-none", children: item.description })
            ] })
          ] })
        ]
      },
      item.id
    );
  }) });
}
/*! Bundled license information:

lucide-react/dist/esm/shared/src/utils/mergeClasses.js:
lucide-react/dist/esm/shared/src/utils/toKebabCase.js:
lucide-react/dist/esm/shared/src/utils/toCamelCase.js:
lucide-react/dist/esm/shared/src/utils/toPascalCase.js:
lucide-react/dist/esm/defaultAttributes.js:
lucide-react/dist/esm/shared/src/utils/hasA11yProp.js:
lucide-react/dist/esm/Icon.js:
lucide-react/dist/esm/createLucideIcon.js:
lucide-react/dist/esm/icons/arrow-down.js:
lucide-react/dist/esm/icons/chevron-down.js:
lucide-react/dist/esm/icons/chevron-left.js:
lucide-react/dist/esm/icons/chevron-right.js:
lucide-react/dist/esm/icons/ellipsis.js:
lucide-react/dist/esm/icons/file.js:
lucide-react/dist/esm/icons/minus.js:
lucide-react/dist/esm/icons/plus.js:
lucide-react/dist/esm/icons/upload.js:
lucide-react/dist/esm/icons/x.js:
lucide-react/dist/esm/lucide-react.js:
  (**
   * @license lucide-react v0.563.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)
*/

exports.AccordionBase = AccordionBase;
exports.AccordionBorder = AccordionBorder;
exports.AccordionCyber = AccordionCyber;
exports.AccordionGlass = AccordionGlass;
exports.AccordionImage = AccordionImage;
exports.AccordionNeon = AccordionNeon;
exports.AccordionSpring = AccordionSpring;
exports.Button = Button;
exports.Button3D = Button3D;
exports.ButtonGlass = ButtonGlass;
exports.ButtonGradient = ButtonGradient;
exports.ButtonGroup = ButtonGroup;
exports.ButtonIcon = ButtonIcon;
exports.ButtonLoading = ButtonLoading;
exports.ButtonSocial = ButtonSocial;
exports.InputBase = input_base_default;
exports.InputFile = InputFile;
exports.InputFloating = input_floating_default;
exports.InputGradient = input_gradient_default;
exports.InputIcon = input_icon_default;
exports.InputOTP = InputOTP;
exports.InputTags = InputTags;
exports.Pagination = Pagination;
exports.PaginationContent = PaginationContent;
exports.PaginationCyber = PaginationCyber;
exports.PaginationCyberContent = PaginationCyberContent;
exports.PaginationCyberEllipsis = PaginationCyberEllipsis;
exports.PaginationCyberItem = PaginationCyberItem;
exports.PaginationCyberLink = PaginationCyberLink;
exports.PaginationCyberNext = PaginationCyberNext;
exports.PaginationCyberPrevious = PaginationCyberPrevious;
exports.PaginationEllipsis = PaginationEllipsis;
exports.PaginationGlass = PaginationGlass;
exports.PaginationGlassContent = PaginationGlassContent;
exports.PaginationGlassEllipsis = PaginationGlassEllipsis;
exports.PaginationGlassItem = PaginationGlassItem;
exports.PaginationGlassLink = PaginationGlassLink;
exports.PaginationGlassNext = PaginationGlassNext;
exports.PaginationGlassPrevious = PaginationGlassPrevious;
exports.PaginationItem = PaginationItem;
exports.PaginationLink = PaginationLink;
exports.PaginationNeon = PaginationNeon;
exports.PaginationNeonContent = PaginationNeonContent;
exports.PaginationNeonEllipsis = PaginationNeonEllipsis;
exports.PaginationNeonItem = PaginationNeonItem;
exports.PaginationNeonLink = PaginationNeonLink;
exports.PaginationNeonNext = PaginationNeonNext;
exports.PaginationNeonPrevious = PaginationNeonPrevious;
exports.PaginationNext = PaginationNext;
exports.PaginationPrevious = PaginationPrevious;
exports.Tabs = Tabs;
exports.TabsContent = TabsContent;
exports.TabsCyber = TabsCyber;
exports.TabsCyberContent = TabsCyberContent;
exports.TabsCyberList = TabsCyberList;
exports.TabsCyberTrigger = TabsCyberTrigger;
exports.TabsGlass = TabsGlass;
exports.TabsGlassContent = TabsGlassContent;
exports.TabsGlassList = TabsGlassList;
exports.TabsGlassTrigger = TabsGlassTrigger;
exports.TabsList = TabsList;
exports.TabsNeon = TabsNeon;
exports.TabsNeonContent = TabsNeonContent;
exports.TabsNeonList = TabsNeonList;
exports.TabsNeonTrigger = TabsNeonTrigger;
exports.TabsTrigger = TabsTrigger;
exports.TextareaAuto = TextareaAuto;
exports.TooltipBase = TooltipBase;
exports.TooltipGlass = TooltipGlass;
exports.TooltipGlitch = TooltipGlitch;
exports.TooltipHologram = TooltipHologram;
exports.TooltipMinimal = TooltipMinimal;
exports.TooltipNeon = TooltipNeon;
exports.TooltipSmart = TooltipSmart;
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map