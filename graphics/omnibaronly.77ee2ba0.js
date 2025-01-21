// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"ahfx7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "OmnibarOnly", ()=>OmnibarOnly);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _styledComponents = require("styled-components");
var _styledComponentsDefault = parcelHelpers.interopDefault(_styledComponents);
var _client = require("react-dom/client");
var _omnibar = require("./components/Omnibar");
function OmnibarOnly() {
    return /*#__PURE__*/ (0, _reactDefault.default).createElement(StyledOmnibarOnly, {
        __source: {
            fileName: "src/graphics/OmnibarOnly.tsx",
            lineNumber: 6,
            columnNumber: 10
        },
        __self: this
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement(Content, {
        __source: {
            fileName: "src/graphics/OmnibarOnly.tsx",
            lineNumber: 7,
            columnNumber: 4
        },
        __self: this
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _omnibar.Omnibar), {
        __source: {
            fileName: "src/graphics/OmnibarOnly.tsx",
            lineNumber: 8,
            columnNumber: 5
        },
        __self: this
    })));
}
const StyledOmnibarOnly = (0, _styledComponentsDefault.default).div.withConfig({
    displayName: "OmnibarOnly__StyledOmnibarOnly",
    componentId: "sc-1o5snah-0"
})([
    "position:relative;width:1920px;height:1080px;background-color:transparent;"
]);
const Content = (0, _styledComponentsDefault.default).div.withConfig({
    displayName: "OmnibarOnly__Content",
    componentId: "sc-1o5snah-1"
})([
    "padding-bottom:12px;position:relative;display:flex;flex-direction:column;justify-content:flex-end;width:100%;height:100%;"
]);
const root = (0, _client.createRoot)(document.getElementById("root"));
root.render(/*#__PURE__*/ (0, _reactDefault.default).createElement(OmnibarOnly, {
    __source: {
        fileName: "src/graphics/OmnibarOnly.tsx",
        lineNumber: 21,
        columnNumber: 13
    },
    __self: undefined
}));

},{"react":"bH1AQ","styled-components":"9xpRL","react-dom/client":"i5cPj","./components/Omnibar":"au5f9","@parcel/transformer-js/src/esmodule-helpers.js":"hvLRG"}],"au5f9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Omnibar", ()=>Omnibar);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _styledComponents = require("styled-components");
var _styledComponentsDefault = parcelHelpers.interopDefault(_styledComponents);
var _carouselComponent = require("./CarouselComponent");
var _react1 = require("@phosphor-icons/react");
var _reactHooks = require("@nodecg/react-hooks");
var _utils = require("../../helpers/utils");
const Omnibar = ()=>{
    const [eventData, setEventData] = (0, _reactHooks.useReplicant)("eventData", {
        bundle: "squidwest-layout-controls"
    });
    const [socials] = (0, _reactHooks.useReplicant)("socials", {
        bundle: "squidwest-layout-controls"
    });
    const [intermissionData] = (0, _reactHooks.useReplicant)("intermission", {
        bundle: "squidwest-layout-controls"
    });
    const [currentEvent, setCurrentEvent] = (0, _react.useState)({
        name: "Current Event Name",
        location: "Event Location",
        number: 1,
        date: "Today"
    });
    (0, _react.useEffect)(()=>{
        if (!eventData) return;
        setCurrentEvent(eventData.currentEvent);
    }, [
        eventData
    ]);
    const [time, setTime] = (0, _react.useState)(new Date());
    (0, _react.useEffect)(()=>{
        const interval = setInterval(()=>{
            setTime(new Date());
        }, 1000);
        return ()=>{
            clearInterval(interval);
        };
    }, []);
    const memoTime = (0, _react.useMemo)(()=>{
        return time;
    }, [
        time
    ]);
    return /*#__PURE__*/ (0, _reactDefault.default).createElement(OmnibarWrapper, {
        __source: {
            fileName: "src/graphics/components/Omnibar.tsx",
            lineNumber: 41,
            columnNumber: 10
        },
        __self: undefined
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement(OmnibarItem, {
        $show: intermissionData ? intermissionData.showTime : true,
        __source: {
            fileName: "src/graphics/components/Omnibar.tsx",
            lineNumber: 42,
            columnNumber: 4
        },
        __self: undefined
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement(TimeDate, {
        $border: true,
        __source: {
            fileName: "src/graphics/components/Omnibar.tsx",
            lineNumber: 43,
            columnNumber: 5
        },
        __self: undefined
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement(TimeDisplay, {
        __source: {
            fileName: "src/graphics/components/Omnibar.tsx",
            lineNumber: 44,
            columnNumber: 6
        },
        __self: undefined
    }, (0, _utils.formatDateHM)(memoTime)), /*#__PURE__*/ (0, _reactDefault.default).createElement(DateDisplay, {
        __source: {
            fileName: "src/graphics/components/Omnibar.tsx",
            lineNumber: 47,
            columnNumber: 6
        },
        __self: undefined
    }, (0, _utils.formatDateMDY)(memoTime)))), /*#__PURE__*/ (0, _reactDefault.default).createElement(OmnibarItem, {
        $show: intermissionData ? intermissionData.showEvent : true,
        __source: {
            fileName: "src/graphics/components/Omnibar.tsx",
            lineNumber: 52,
            columnNumber: 4
        },
        __self: undefined
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement(EventSection, {
        $border: true,
        __source: {
            fileName: "src/graphics/components/Omnibar.tsx",
            lineNumber: 53,
            columnNumber: 5
        },
        __self: undefined
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement(Logo, {
        src: "/bundles/twinsquiddies-layouts/images/TwinSquiddiesFlatTransparent.png",
        alt: "Twin Squiddies Logo",
        __source: {
            fileName: "src/graphics/components/Omnibar.tsx",
            lineNumber: 54,
            columnNumber: 6
        },
        __self: undefined
    }), currentEvent.number > 0 && /*#__PURE__*/ (0, _reactDefault.default).createElement(EventNumberText, {
        __source: {
            fileName: "src/graphics/components/Omnibar.tsx",
            lineNumber: 55,
            columnNumber: 34
        },
        __self: undefined
    }, "#", currentEvent.number))), /*#__PURE__*/ (0, _reactDefault.default).createElement(TextOmnibarItem, {
        $show: intermissionData ? intermissionData.showLocation : true,
        $maxWidth: "24rem",
        __source: {
            fileName: "src/graphics/components/Omnibar.tsx",
            lineNumber: 60,
            columnNumber: 4
        },
        __self: undefined
    }, currentEvent.location !== "" && /*#__PURE__*/ (0, _reactDefault.default).createElement(LocationWrapper, {
        $border: true,
        __source: {
            fileName: "src/graphics/components/Omnibar.tsx",
            lineNumber: 61,
            columnNumber: 38
        },
        __self: undefined
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement(LocationText, {
        __source: {
            fileName: "src/graphics/components/Omnibar.tsx",
            lineNumber: 62,
            columnNumber: 6
        },
        __self: undefined
    }, currentEvent.location))), /*#__PURE__*/ (0, _reactDefault.default).createElement(TextOmnibarItem, {
        $show: intermissionData ? intermissionData.showFlavorText : true,
        $maxWidth: "20rem",
        __source: {
            fileName: "src/graphics/components/Omnibar.tsx",
            lineNumber: 67,
            columnNumber: 4
        },
        __self: undefined
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement(TourneyWrapper, {
        $border: true,
        __source: {
            fileName: "src/graphics/components/Omnibar.tsx",
            lineNumber: 68,
            columnNumber: 5
        },
        __self: undefined
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement(TourneyPlaceholder, {
        __source: {
            fileName: "src/graphics/components/Omnibar.tsx",
            lineNumber: 69,
            columnNumber: 6
        },
        __self: undefined
    }, intermissionData ? intermissionData.flavorText : ""))), /*#__PURE__*/ (0, _reactDefault.default).createElement(CarouselWrapper, {
        $border: true,
        __source: {
            fileName: "src/graphics/components/Omnibar.tsx",
            lineNumber: 74,
            columnNumber: 13
        },
        __self: undefined
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _carouselComponent.CarouselComponent), {
        speed: 7000,
        transitionSpeed: 1000,
        __source: {
            fileName: "src/graphics/components/Omnibar.tsx",
            lineNumber: 75,
            columnNumber: 5
        },
        __self: undefined
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement(CarouselRow, {
        __source: {
            fileName: "src/graphics/components/Omnibar.tsx",
            lineNumber: 76,
            columnNumber: 6
        },
        __self: undefined
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement(LogoText, {
        __source: {
            fileName: "src/graphics/components/Omnibar.tsx",
            lineNumber: 77,
            columnNumber: 7
        },
        __self: undefined
    }, "Follow Twin Squiddies!")), /*#__PURE__*/ (0, _reactDefault.default).createElement(CarouselRow, {
        __source: {
            fileName: "src/graphics/components/Omnibar.tsx",
            lineNumber: 79,
            columnNumber: 6
        },
        __self: undefined
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement(StyledButterfly, {
        __source: {
            fileName: "src/graphics/components/Omnibar.tsx",
            lineNumber: 80,
            columnNumber: 25
        },
        __self: undefined
    }), /*#__PURE__*/ (0, _reactDefault.default).createElement(LogoText, {
        __source: {
            fileName: "src/graphics/components/Omnibar.tsx",
            lineNumber: 81,
            columnNumber: 25
        },
        __self: undefined
    }, "@twinsquiddies.bsky.social")), /*#__PURE__*/ (0, _reactDefault.default).createElement(CarouselRow, {
        __source: {
            fileName: "src/graphics/components/Omnibar.tsx",
            lineNumber: 83,
            columnNumber: 6
        },
        __self: undefined
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement(StyledDiscordLogo, {
        __source: {
            fileName: "src/graphics/components/Omnibar.tsx",
            lineNumber: 84,
            columnNumber: 25
        },
        __self: undefined
    }), /*#__PURE__*/ (0, _reactDefault.default).createElement(LogoText, {
        __source: {
            fileName: "src/graphics/components/Omnibar.tsx",
            lineNumber: 85,
            columnNumber: 25
        },
        __self: undefined
    }, "discord.gg/LCL")), /*#__PURE__*/ (0, _reactDefault.default).createElement(CarouselRow, {
        __source: {
            fileName: "src/graphics/components/Omnibar.tsx",
            lineNumber: 87,
            columnNumber: 6
        },
        __self: undefined
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement(LogoText, {
        __source: {
            fileName: "src/graphics/components/Omnibar.tsx",
            lineNumber: 88,
            columnNumber: 7
        },
        __self: undefined
    }, "Follow SquidWest!")), /*#__PURE__*/ (0, _reactDefault.default).createElement(CarouselRow, {
        __source: {
            fileName: "src/graphics/components/Omnibar.tsx",
            lineNumber: 90,
            columnNumber: 6
        },
        __self: undefined
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement(StyledYoutubeLogo, {
        __source: {
            fileName: "src/graphics/components/Omnibar.tsx",
            lineNumber: 91,
            columnNumber: 25
        },
        __self: undefined
    }), /*#__PURE__*/ (0, _reactDefault.default).createElement(LogoText, {
        __source: {
            fileName: "src/graphics/components/Omnibar.tsx",
            lineNumber: 92,
            columnNumber: 25
        },
        __self: undefined
    }, socials ? socials.youtube : "")), /*#__PURE__*/ (0, _reactDefault.default).createElement(CarouselRow, {
        __source: {
            fileName: "src/graphics/components/Omnibar.tsx",
            lineNumber: 94,
            columnNumber: 6
        },
        __self: undefined
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement(StyledTwitterLogo, {
        __source: {
            fileName: "src/graphics/components/Omnibar.tsx",
            lineNumber: 95,
            columnNumber: 25
        },
        __self: undefined
    }), /*#__PURE__*/ (0, _reactDefault.default).createElement(LogoText, {
        __source: {
            fileName: "src/graphics/components/Omnibar.tsx",
            lineNumber: 96,
            columnNumber: 25
        },
        __self: undefined
    }, socials ? socials.twitter : "")), /*#__PURE__*/ (0, _reactDefault.default).createElement(CarouselRow, {
        __source: {
            fileName: "src/graphics/components/Omnibar.tsx",
            lineNumber: 98,
            columnNumber: 6
        },
        __self: undefined
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement(StyledButterfly, {
        __source: {
            fileName: "src/graphics/components/Omnibar.tsx",
            lineNumber: 99,
            columnNumber: 25
        },
        __self: undefined
    }), /*#__PURE__*/ (0, _reactDefault.default).createElement(LogoText, {
        __source: {
            fileName: "src/graphics/components/Omnibar.tsx",
            lineNumber: 100,
            columnNumber: 25
        },
        __self: undefined
    }, socials ? socials.bluesky : "")), /*#__PURE__*/ (0, _reactDefault.default).createElement(CarouselRow, {
        __source: {
            fileName: "src/graphics/components/Omnibar.tsx",
            lineNumber: 102,
            columnNumber: 6
        },
        __self: undefined
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement(StyledDiscordLogo, {
        __source: {
            fileName: "src/graphics/components/Omnibar.tsx",
            lineNumber: 103,
            columnNumber: 25
        },
        __self: undefined
    }), /*#__PURE__*/ (0, _reactDefault.default).createElement(LogoText, {
        __source: {
            fileName: "src/graphics/components/Omnibar.tsx",
            lineNumber: 104,
            columnNumber: 25
        },
        __self: undefined
    }, socials ? socials.discord : "")))), /*#__PURE__*/ (0, _reactDefault.default).createElement(OmnibarElement, {
        as: "img",
        src: "/bundles/twinsquiddies-layouts/images/SW_Logo_Red_bg.png",
        alt: "SquidWest Logo",
        __source: {
            fileName: "src/graphics/components/Omnibar.tsx",
            lineNumber: 108,
            columnNumber: 13
        },
        __self: undefined
    }));
};
const OmnibarWrapper = (0, _styledComponentsDefault.default).div.withConfig({
    displayName: "Omnibar__OmnibarWrapper",
    componentId: "sc-18jg5sb-0"
})([
    "position:relative;display:flex;flex-direction:row;width:calc(100% - 40px);background-color:var(--omnibar-color);height:122px;border:8px solid var(--omnibar-border);border-radius:0.5rem;margin:10px 20px;"
]);
const OmnibarItem = (0, _styledComponentsDefault.default).div.withConfig({
    displayName: "Omnibar__OmnibarItem",
    componentId: "sc-18jg5sb-1"
})([
    "position:relative;display:",
    ";"
], ({ $show })=>$show ? "block" : "none");
const TextOmnibarItem = (0, _styledComponentsDefault.default)(OmnibarItem).withConfig({
    displayName: "Omnibar__TextOmnibarItem",
    componentId: "sc-18jg5sb-2"
})([
    "max-width:",
    ";"
], ({ $maxWidth })=>$maxWidth);
const OmnibarElement = (0, _styledComponentsDefault.default).div.withConfig({
    displayName: "Omnibar__OmnibarElement",
    componentId: "sc-18jg5sb-3"
})([
    "position:relative;padding:10px;color:var(--omnibar-text);font-size:20pt;border-right:",
    ";"
], (props)=>props.$border ? "5px solid var(--omnibar-divider)" : "");
const TimeDate = (0, _styledComponentsDefault.default)(OmnibarElement).withConfig({
    displayName: "Omnibar__TimeDate",
    componentId: "sc-18jg5sb-4"
})([
    "position:relative;width:100%;height:100%;display:flex;flex-direction:column;justify-content:center;"
]);
const TimeDisplay = (0, _styledComponentsDefault.default).div.withConfig({
    displayName: "Omnibar__TimeDisplay",
    componentId: "sc-18jg5sb-5"
})([
    "position:relative;margin:auto;font-size:35pt;"
]);
const DateDisplay = (0, _styledComponentsDefault.default).div.withConfig({
    displayName: "Omnibar__DateDisplay",
    componentId: "sc-18jg5sb-6"
})([
    "position:relative;margin:auto;font-size:20pt;"
]);
const EventSection = (0, _styledComponentsDefault.default)(OmnibarElement).withConfig({
    displayName: "Omnibar__EventSection",
    componentId: "sc-18jg5sb-7"
})([
    "position:relative;display:flex;flex-direction:row;align-items:center;height:100%;"
]);
const EventNumberText = (0, _styledComponentsDefault.default).div.withConfig({
    displayName: "Omnibar__EventNumberText",
    componentId: "sc-18jg5sb-8"
})([
    "margin:8px;font-size:30pt;"
]);
const Logo = (0, _styledComponentsDefault.default).img.withConfig({
    displayName: "Omnibar__Logo",
    componentId: "sc-18jg5sb-9"
})([
    "height:7rem;object-fit:contain;"
]);
const LocationWrapper = (0, _styledComponentsDefault.default)(OmnibarElement).withConfig({
    displayName: "Omnibar__LocationWrapper",
    componentId: "sc-18jg5sb-10"
})([
    "display:flex;flex-direction:column;width:100%;height:100%;align-items:center;"
]);
const LocationText = (0, _styledComponentsDefault.default).div.withConfig({
    displayName: "Omnibar__LocationText",
    componentId: "sc-18jg5sb-11"
})([
    "margin:auto 8px;font-size:25pt;"
]);
const TourneyWrapper = (0, _styledComponentsDefault.default)(OmnibarElement).withConfig({
    displayName: "Omnibar__TourneyWrapper",
    componentId: "sc-18jg5sb-12"
})([
    "display:flex;flex-direction:column;justify-content:center;align-items:center;width:100%;height:100%;"
]);
const TourneyPlaceholder = (0, _styledComponentsDefault.default).div.withConfig({
    displayName: "Omnibar__TourneyPlaceholder",
    componentId: "sc-18jg5sb-13"
})([
    "font-size:25pt;"
]);
const CarouselWrapper = (0, _styledComponentsDefault.default)(OmnibarElement).withConfig({
    displayName: "Omnibar__CarouselWrapper",
    componentId: "sc-18jg5sb-14"
})([
    "position:relative;height:100%;flex-grow:1;"
]);
const CarouselRow = (0, _styledComponentsDefault.default).div.withConfig({
    displayName: "Omnibar__CarouselRow",
    componentId: "sc-18jg5sb-15"
})([
    "position:relative;display:flex;flex-direction:row;align-items:center;justify-content:center;max-height:100%;height:100%;font-size:40pt;"
]);
const StyledYoutubeLogo = (0, _styledComponentsDefault.default)((0, _react1.YoutubeLogo)).withConfig({
    displayName: "Omnibar__StyledYoutubeLogo",
    componentId: "sc-18jg5sb-16"
})([
    "width:1em;object-fit:contain;margin-right:20px;"
]);
const StyledTwitterLogo = (0, _styledComponentsDefault.default)((0, _react1.TwitterLogo)).withConfig({
    displayName: "Omnibar__StyledTwitterLogo",
    componentId: "sc-18jg5sb-17"
})([
    "width:1em;object-fit:contain;margin-right:20px;"
]);
const StyledButterfly = (0, _styledComponentsDefault.default)((0, _react1.Butterfly)).withConfig({
    displayName: "Omnibar__StyledButterfly",
    componentId: "sc-18jg5sb-18"
})([
    "width:1em;object-fit:contain;margin-right:20px;"
]);
const StyledDiscordLogo = (0, _styledComponentsDefault.default)((0, _react1.DiscordLogo)).withConfig({
    displayName: "Omnibar__StyledDiscordLogo",
    componentId: "sc-18jg5sb-19"
})([
    "width:1em;object-fit:contain;margin-right:20px;"
]);
const LogoText = (0, _styledComponentsDefault.default).div.withConfig({
    displayName: "Omnibar__LogoText",
    componentId: "sc-18jg5sb-20"
})([
    "font-size:35pt;"
]);

},{"react":"bH1AQ","styled-components":"9xpRL","./CarouselComponent":"3ZV6n","@phosphor-icons/react":"h9z2e","@nodecg/react-hooks":"audz3","../../helpers/utils":"2gdT3","@parcel/transformer-js/src/esmodule-helpers.js":"hvLRG"}],"3ZV6n":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CarouselComponent", ()=>CarouselComponent);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _styledComponents = require("styled-components");
var _styledComponentsDefault = parcelHelpers.interopDefault(_styledComponents);
const DEFAULT_SPEED = 5000;
const DEFAULT_TRANSITION_SPEED = 1000;
const CarouselComponent = ({ children, playing = true, speed, transitionSpeed, once, startIndex })=>{
    const [carouselIndex, setCarouselIndex] = (0, _react.useState)(startIndex || 0);
    const carouselIntervalId = (0, _react.useRef)(null);
    const activeCarouselIndexRef = (0, _react.useRef)(startIndex || 0);
    const childElements = (0, _react.useMemo)(()=>{
        return (0, _reactDefault.default).Children.toArray(children);
    }, [
        children
    ]);
    (0, _react.useEffect)(()=>{
        if (playing && childElements.length > 1) {
            //Force it to the last element
            if (activeCarouselIndexRef.current >= childElements.length) {
                setCarouselIndex(childElements.length - 1);
                activeCarouselIndexRef.current = childElements.length - 1;
            }
            //Function ID from Set Interval, to clear it later
            carouselIntervalId.current = window.setInterval(()=>{
                if (!playing) return;
                if (once && activeCarouselIndexRef.current + 1 >= childElements.length) {
                    if (carouselIntervalId.current) clearInterval(carouselIntervalId.current);
                    return;
                }
                const nextIndex = (activeCarouselIndexRef.current + 1) % childElements.length;
                setCarouselIndex(nextIndex);
                activeCarouselIndexRef.current = nextIndex;
            }, speed || DEFAULT_SPEED);
        } else if (playing) {
            setCarouselIndex(0);
            activeCarouselIndexRef.current = 0;
        }
        return ()=>{
            if (carouselIntervalId.current) clearInterval(carouselIntervalId.current);
        };
    }, [
        playing,
        childElements.length
    ]);
    return /*#__PURE__*/ (0, _reactDefault.default).createElement(CarouselContainer, {
        __source: {
            fileName: "src/graphics/components/CarouselComponent.tsx",
            lineNumber: 54,
            columnNumber: 10
        },
        __self: undefined
    }, childElements.map((child, index, array)=>/*#__PURE__*/ (0, _reactDefault.default).createElement(CarouselItem, {
            key: index,
            $active: index === carouselIndex,
            $isRelative: index === array.length - 1,
            speed: (transitionSpeed ? transitionSpeed : DEFAULT_TRANSITION_SPEED) / 2,
            __source: {
                fileName: "src/graphics/components/CarouselComponent.tsx",
                lineNumber: 55,
                columnNumber: 57
            },
            __self: undefined
        }, child)));
};
const CarouselContainer = (0, _styledComponentsDefault.default).div.withConfig({
    displayName: "CarouselComponent__CarouselContainer",
    componentId: "sc-1ak0tmm-0"
})([
    "position:relative;width:100%;height:100%;"
]);
const CarouselItem = (0, _styledComponentsDefault.default).div.withConfig({
    displayName: "CarouselComponent__CarouselItem",
    componentId: "sc-1ak0tmm-1"
})([
    "position:",
    ";max-height:100%;width:100%;height:100%;opacity:",
    ";transition:opacity ",
    "ms linear;transition-delay:",
    "ms;"
], (props)=>props.$isRelative ? `relative` : `absolute`, (props)=>props.$active ? 1 : 0, (props)=>props.speed, (props)=>props.$active ? props.speed : 0);

},{"react":"bH1AQ","styled-components":"9xpRL","@parcel/transformer-js/src/esmodule-helpers.js":"hvLRG"}],"2gdT3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "formatTimeHMSC", ()=>formatTimeHMSC);
parcelHelpers.export(exports, "formatDateHM", ()=>formatDateHM);
parcelHelpers.export(exports, "formatDateMDY", ()=>formatDateMDY);
const formatTimeHMSC = (ms)=>{
    ms = ms > 0 ? ms : 0;
    const hour = Math.floor(ms / 60 / 60 / 1000);
    ms = ms % 3600000;
    const minute = Math.floor(ms / 60 / 1000);
    ms = ms % 60000;
    const second = Math.floor(ms / 1000);
    ms = ms % 1000;
    const centiseconds = Math.floor(ms / 10);
    return `${hour}:${minute < 10 ? `0${minute}` : minute}:${second < 10 ? `0${second}` : second}.${centiseconds < 10 ? `0${centiseconds}` : centiseconds}`;
};
const formatDateHM = (date)=>{
    return date.getHours() + ":" + (date.getMinutes() < 10 ? "0" : "") + date.getMinutes();
};
const formatDateMDY = (date)=>{
    return date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear();
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hvLRG"}]},["ahfx7"], "ahfx7", "parcelRequire19f1")

//# sourceMappingURL=omnibaronly.77ee2ba0.js.map
