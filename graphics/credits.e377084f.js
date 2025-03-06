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
})({"CjDdB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Credits", ()=>Credits);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _styledComponents = require("styled-components");
var _styledComponentsDefault = parcelHelpers.interopDefault(_styledComponents);
var _carouselComponent = require("./components/CarouselComponent");
var _react1 = require("@phosphor-icons/react");
var _client = require("react-dom/client");
var _reactHooks = require("@nodecg/react-hooks");
var _creditsNameRow = require("./components/CreditsNameRow");
function Credits() {
    const [eventData, setEventData] = (0, _reactHooks.useReplicant)("eventData", {
        bundle: "squidwest-layout-controls"
    });
    const [currentEvent, setCurrentEvent] = (0, _react.useState)({
        name: "Current Event Name",
        location: "Event Location",
        number: 1,
        date: "Today"
    });
    const [nextEvent, setNextEvent] = (0, _react.useState)({
        name: "Next Event Name",
        location: "Next Event Location",
        number: 2,
        date: "January 1, 2024"
    });
    const [creditsData, setCreditsData] = (0, _reactHooks.useReplicant)("creditsData", {
        bundle: "squidwest-layout-controls"
    });
    const [setupTeam, setSetupTeam] = (0, _react.useState)([
        ""
    ]);
    const [commentaryTeam, setCommentaryTeam] = (0, _react.useState)([
        ""
    ]);
    const [techTeam, setTechTeam] = (0, _react.useState)([
        ""
    ]);
    const [staffTeam, setStaffTeam] = (0, _react.useState)([
        ""
    ]);
    const [headTO, setHeadTO] = (0, _react.useState)([
        ""
    ]);
    const [poolCaptains, setPoolCaptains] = (0, _react.useState)([
        ""
    ]);
    const [artTeam, setArtTeam] = (0, _react.useState)([
        ""
    ]);
    (0, _react.useEffect)(()=>{
        if (!eventData) return;
        setCurrentEvent(eventData.currentEvent);
        setNextEvent(eventData.nextEvent);
    }, [
        eventData
    ]);
    (0, _react.useEffect)(()=>{
        if (!creditsData) return;
        setSetupTeam(creditsData.setupTeam);
        setCommentaryTeam(creditsData.commentaryTeam);
        setTechTeam(creditsData.techTeam);
        setStaffTeam(creditsData.staffTeam);
        setHeadTO(creditsData.headTO);
        setPoolCaptains(creditsData.poolCaptains);
        setArtTeam(creditsData.artTeam);
    }, [
        creditsData
    ]);
    return /*#__PURE__*/ (0, _reactDefault.default).createElement(StyledCredits, {
        __source: {
            fileName: "src/graphics/Credits.tsx",
            lineNumber: 51,
            columnNumber: 10
        },
        __self: this
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement(Content, {
        __source: {
            fileName: "src/graphics/Credits.tsx",
            lineNumber: 52,
            columnNumber: 13
        },
        __self: this
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _carouselComponent.CarouselComponent), {
        speed: 10000,
        transitionSpeed: 3000,
        once: true,
        __source: {
            fileName: "src/graphics/Credits.tsx",
            lineNumber: 53,
            columnNumber: 17
        },
        __self: this
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement(CreditsRow, {
        __source: {
            fileName: "src/graphics/Credits.tsx",
            lineNumber: 54,
            columnNumber: 21
        },
        __self: this
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement(TitleText, {
        __source: {
            fileName: "src/graphics/Credits.tsx",
            lineNumber: 55,
            columnNumber: 25
        },
        __self: this
    }, currentEvent.name, " ", currentEvent.number > 0 ? "#" + currentEvent.number : "")), setupTeam.length > 0 && /*#__PURE__*/ (0, _reactDefault.default).createElement(CreditsRow, {
        __source: {
            fileName: "src/graphics/Credits.tsx",
            lineNumber: 57,
            columnNumber: 46
        },
        __self: this
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _creditsNameRow.CreditsNameRow), {
        title: "Setup and Teardown Volunteers",
        names: setupTeam,
        __source: {
            fileName: "src/graphics/Credits.tsx",
            lineNumber: 58,
            columnNumber: 25
        },
        __self: this
    })), commentaryTeam.length > 0 && /*#__PURE__*/ (0, _reactDefault.default).createElement(CreditsRow, {
        __source: {
            fileName: "src/graphics/Credits.tsx",
            lineNumber: 60,
            columnNumber: 51
        },
        __self: this
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _creditsNameRow.CreditsNameRow), {
        title: "Commentary",
        names: commentaryTeam,
        __source: {
            fileName: "src/graphics/Credits.tsx",
            lineNumber: 61,
            columnNumber: 25
        },
        __self: this
    })), techTeam.length > 0 && /*#__PURE__*/ (0, _reactDefault.default).createElement(CreditsRow, {
        __source: {
            fileName: "src/graphics/Credits.tsx",
            lineNumber: 63,
            columnNumber: 45
        },
        __self: this
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _creditsNameRow.CreditsNameRow), {
        title: "Stream Technicians",
        names: techTeam,
        __source: {
            fileName: "src/graphics/Credits.tsx",
            lineNumber: 64,
            columnNumber: 25
        },
        __self: this
    })), artTeam.length > 0 && /*#__PURE__*/ (0, _reactDefault.default).createElement(CreditsRow, {
        __source: {
            fileName: "src/graphics/Credits.tsx",
            lineNumber: 66,
            columnNumber: 44
        },
        __self: this
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _creditsNameRow.CreditsNameRow), {
        title: "Artists",
        names: artTeam,
        __source: {
            fileName: "src/graphics/Credits.tsx",
            lineNumber: 67,
            columnNumber: 25
        },
        __self: this
    })), staffTeam.length > 0 && /*#__PURE__*/ (0, _reactDefault.default).createElement(CreditsRow, {
        __source: {
            fileName: "src/graphics/Credits.tsx",
            lineNumber: 69,
            columnNumber: 46
        },
        __self: this
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement(LogoRow, {
        __source: {
            fileName: "src/graphics/Credits.tsx",
            lineNumber: 70,
            columnNumber: 25
        },
        __self: this
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement(HeaderText, {
        __source: {
            fileName: "src/graphics/Credits.tsx",
            lineNumber: 71,
            columnNumber: 29
        },
        __self: this
    }, "SquidWest TOs and Staff"), /*#__PURE__*/ (0, _reactDefault.default).createElement("img", {
        src: "/bundles/twinsquiddies-layouts/images/SW_Logo_Red_bg.png",
        __source: {
            fileName: "src/graphics/Credits.tsx",
            lineNumber: 72,
            columnNumber: 29
        },
        __self: this
    })), staffTeam.map((name, index)=>{
        return /*#__PURE__*/ (0, _reactDefault.default).createElement(NameText, {
            key: index,
            __source: {
                fileName: "src/graphics/Credits.tsx",
                lineNumber: 75,
                columnNumber: 20
            },
            __self: this
        }, name);
    })), /*#__PURE__*/ (0, _reactDefault.default).createElement(CreditsRow, {
        __source: {
            fileName: "src/graphics/Credits.tsx",
            lineNumber: 78,
            columnNumber: 21
        },
        __self: this
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement(EventLogo, {
        src: "/bundles/twinsquiddies-layouts/images/TwinSquiddiesLogo.png",
        __source: {
            fileName: "src/graphics/Credits.tsx",
            lineNumber: 79,
            columnNumber: 25
        },
        __self: this
    }), /*#__PURE__*/ (0, _reactDefault.default).createElement(CreditsColumns, {
        __source: {
            fileName: "src/graphics/Credits.tsx",
            lineNumber: 80,
            columnNumber: 25
        },
        __self: this
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement(Rows, {
        __source: {
            fileName: "src/graphics/Credits.tsx",
            lineNumber: 81,
            columnNumber: 29
        },
        __self: this
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _creditsNameRow.CreditsNameRow), {
        title: "Head TO",
        names: headTO,
        __source: {
            fileName: "src/graphics/Credits.tsx",
            lineNumber: 82,
            columnNumber: 33
        },
        __self: this
    })), /*#__PURE__*/ (0, _reactDefault.default).createElement(Rows, {
        __source: {
            fileName: "src/graphics/Credits.tsx",
            lineNumber: 84,
            columnNumber: 29
        },
        __self: this
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _creditsNameRow.CreditsNameRow), {
        title: "Staff and Pool Captains",
        names: poolCaptains,
        __source: {
            fileName: "src/graphics/Credits.tsx",
            lineNumber: 85,
            columnNumber: 33
        },
        __self: this
    })))), /*#__PURE__*/ (0, _reactDefault.default).createElement(CreditsRow, {
        __source: {
            fileName: "src/graphics/Credits.tsx",
            lineNumber: 89,
            columnNumber: 21
        },
        __self: this
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement(EventLogo, {
        src: "/bundles/twinsquiddies-layouts/images/TwinSquiddiesLogo.png",
        __source: {
            fileName: "src/graphics/Credits.tsx",
            lineNumber: 90,
            columnNumber: 25
        },
        __self: this
    }), /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _creditsNameRow.CreditsNameRow), {
        title: "Production",
        names: [
            "MissPixiSix",
            "iMADgamerII",
            "Lilalychi",
            "Bits",
            "EpicYoshiMaster"
        ],
        __source: {
            fileName: "src/graphics/Credits.tsx",
            lineNumber: 91,
            columnNumber: 25
        },
        __self: this
    })), /*#__PURE__*/ (0, _reactDefault.default).createElement(CreditsRow, {
        __source: {
            fileName: "src/graphics/Credits.tsx",
            lineNumber: 93,
            columnNumber: 21
        },
        __self: this
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement(HeaderText, {
        __source: {
            fileName: "src/graphics/Credits.tsx",
            lineNumber: 94,
            columnNumber: 25
        },
        __self: this
    }, "Stream Overlays and Design"), /*#__PURE__*/ (0, _reactDefault.default).createElement(YoshiRow, {
        __source: {
            fileName: "src/graphics/Credits.tsx",
            lineNumber: 95,
            columnNumber: 25
        },
        __self: this
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement("img", {
        src: "/bundles/twinsquiddies-layouts/images/misc/harmonypixel.gif",
        alt: "Harmony Pixel",
        __source: {
            fileName: "src/graphics/Credits.tsx",
            lineNumber: 96,
            columnNumber: 29
        },
        __self: this
    }), /*#__PURE__*/ (0, _reactDefault.default).createElement(YoshiSpan, {
        __source: {
            fileName: "src/graphics/Credits.tsx",
            lineNumber: 97,
            columnNumber: 29
        },
        __self: this
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement(YoshiText, {
        __source: {
            fileName: "src/graphics/Credits.tsx",
            lineNumber: 97,
            columnNumber: 40
        },
        __self: this
    }, "EpicYoshiMaster")), /*#__PURE__*/ (0, _reactDefault.default).createElement("img", {
        src: "/bundles/twinsquiddies-layouts/images/misc/harmonypixel.gif",
        alt: "Harmony Pixel",
        __source: {
            fileName: "src/graphics/Credits.tsx",
            lineNumber: 98,
            columnNumber: 29
        },
        __self: this
    })), /*#__PURE__*/ (0, _reactDefault.default).createElement(Divider, {
        __source: {
            fileName: "src/graphics/Credits.tsx",
            lineNumber: 100,
            columnNumber: 25
        },
        __self: this
    }), /*#__PURE__*/ (0, _reactDefault.default).createElement(NameText, {
        __source: {
            fileName: "src/graphics/Credits.tsx",
            lineNumber: 101,
            columnNumber: 25
        },
        __self: this
    }, "Need stream overlays for your event?"), /*#__PURE__*/ (0, _reactDefault.default).createElement(NameText, {
        __source: {
            fileName: "src/graphics/Credits.tsx",
            lineNumber: 102,
            columnNumber: 25
        },
        __self: this
    }, "Contact me!"), /*#__PURE__*/ (0, _reactDefault.default).createElement(YoshiRow, {
        __source: {
            fileName: "src/graphics/Credits.tsx",
            lineNumber: 103,
            columnNumber: 25
        },
        __self: this
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _react1.DiscordLogo), {
        __source: {
            fileName: "src/graphics/Credits.tsx",
            lineNumber: 104,
            columnNumber: 29
        },
        __self: this
    }), /*#__PURE__*/ (0, _reactDefault.default).createElement(NameText, {
        __source: {
            fileName: "src/graphics/Credits.tsx",
            lineNumber: 105,
            columnNumber: 29
        },
        __self: this
    }, "@epicyoshimaster")), /*#__PURE__*/ (0, _reactDefault.default).createElement(YoshiRow, {
        __source: {
            fileName: "src/graphics/Credits.tsx",
            lineNumber: 107,
            columnNumber: 25
        },
        __self: this
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _react1.TwitterLogo), {
        __source: {
            fileName: "src/graphics/Credits.tsx",
            lineNumber: 108,
            columnNumber: 29
        },
        __self: this
    }), /*#__PURE__*/ (0, _reactDefault.default).createElement(NameText, {
        __source: {
            fileName: "src/graphics/Credits.tsx",
            lineNumber: 109,
            columnNumber: 29
        },
        __self: this
    }, "@EpicYoshiMaster")), /*#__PURE__*/ (0, _reactDefault.default).createElement(YoshiRow, {
        __source: {
            fileName: "src/graphics/Credits.tsx",
            lineNumber: 111,
            columnNumber: 25
        },
        __self: this
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _react1.GithubLogo), {
        __source: {
            fileName: "src/graphics/Credits.tsx",
            lineNumber: 112,
            columnNumber: 29
        },
        __self: this
    }), /*#__PURE__*/ (0, _reactDefault.default).createElement(NameText, {
        __source: {
            fileName: "src/graphics/Credits.tsx",
            lineNumber: 113,
            columnNumber: 29
        },
        __self: this
    }, "EpicYoshiMaster")), /*#__PURE__*/ (0, _reactDefault.default).createElement(YoshiRow, {
        __source: {
            fileName: "src/graphics/Credits.tsx",
            lineNumber: 115,
            columnNumber: 25
        },
        __self: this
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _react1.Butterfly), {
        __source: {
            fileName: "src/graphics/Credits.tsx",
            lineNumber: 116,
            columnNumber: 29
        },
        __self: this
    }), /*#__PURE__*/ (0, _reactDefault.default).createElement(NameText, {
        __source: {
            fileName: "src/graphics/Credits.tsx",
            lineNumber: 117,
            columnNumber: 29
        },
        __self: this
    }, "@epicyoshimaster.bsky.social"))), /*#__PURE__*/ (0, _reactDefault.default).createElement(CreditsRow, {
        __source: {
            fileName: "src/graphics/Credits.tsx",
            lineNumber: 120,
            columnNumber: 21
        },
        __self: this
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement(HeaderText, {
        __source: {
            fileName: "src/graphics/Credits.tsx",
            lineNumber: 121,
            columnNumber: 25
        },
        __self: this
    }, "Special Thanks")), /*#__PURE__*/ (0, _reactDefault.default).createElement(CreditsRow, {
        __source: {
            fileName: "src/graphics/Credits.tsx",
            lineNumber: 123,
            columnNumber: 21
        },
        __self: this
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement(LogoRow, {
        __source: {
            fileName: "src/graphics/Credits.tsx",
            lineNumber: 124,
            columnNumber: 25
        },
        __self: this
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement(HeaderText, {
        __source: {
            fileName: "src/graphics/Credits.tsx",
            lineNumber: 125,
            columnNumber: 29
        },
        __self: this
    }, "Left Click Lounge"), /*#__PURE__*/ (0, _reactDefault.default).createElement("img", {
        src: "/bundles/twinsquiddies-layouts/images/LeftClickLoungeLogo.png",
        __source: {
            fileName: "src/graphics/Credits.tsx",
            lineNumber: 126,
            columnNumber: 29
        },
        __self: this
    })), /*#__PURE__*/ (0, _reactDefault.default).createElement(NameText, {
        __source: {
            fileName: "src/graphics/Credits.tsx",
            lineNumber: 128,
            columnNumber: 25
        },
        __self: this
    }, "Venue, equipment, and support")), /*#__PURE__*/ (0, _reactDefault.default).createElement(CreditsRow, {
        __source: {
            fileName: "src/graphics/Credits.tsx",
            lineNumber: 130,
            columnNumber: 21
        },
        __self: this
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement(HeaderText, {
        __source: {
            fileName: "src/graphics/Credits.tsx",
            lineNumber: 131,
            columnNumber: 25
        },
        __self: this
    }, "Event Participants"), /*#__PURE__*/ (0, _reactDefault.default).createElement(NameText, {
        __source: {
            fileName: "src/graphics/Credits.tsx",
            lineNumber: 132,
            columnNumber: 25
        },
        __self: this
    }, "These events aren't possible without you")), /*#__PURE__*/ (0, _reactDefault.default).createElement(CreditsRow, {
        __source: {
            fileName: "src/graphics/Credits.tsx",
            lineNumber: 134,
            columnNumber: 21
        },
        __self: this
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement(HeaderText, {
        __source: {
            fileName: "src/graphics/Credits.tsx",
            lineNumber: 135,
            columnNumber: 25
        },
        __self: this
    }, "Stream Viewers"), /*#__PURE__*/ (0, _reactDefault.default).createElement(NameText, {
        __source: {
            fileName: "src/graphics/Credits.tsx",
            lineNumber: 136,
            columnNumber: 25
        },
        __self: this
    }, "We hope you enjoyed")), /*#__PURE__*/ (0, _reactDefault.default).createElement(CreditsRow, {
        __source: {
            fileName: "src/graphics/Credits.tsx",
            lineNumber: 138,
            columnNumber: 21
        },
        __self: this
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement(TitleText, {
        __source: {
            fileName: "src/graphics/Credits.tsx",
            lineNumber: 139,
            columnNumber: 25
        },
        __self: this
    }, nextEvent.name, " ", nextEvent.number > 0 ? "#" + nextEvent.number : ""), /*#__PURE__*/ (0, _reactDefault.default).createElement(NameText, {
        __source: {
            fileName: "src/graphics/Credits.tsx",
            lineNumber: 140,
            columnNumber: 25
        },
        __self: this
    }, nextEvent.location), /*#__PURE__*/ (0, _reactDefault.default).createElement(NameText, {
        __source: {
            fileName: "src/graphics/Credits.tsx",
            lineNumber: 141,
            columnNumber: 25
        },
        __self: this
    }, nextEvent.date), /*#__PURE__*/ (0, _reactDefault.default).createElement(NameText, {
        __source: {
            fileName: "src/graphics/Credits.tsx",
            lineNumber: 142,
            columnNumber: 25
        },
        __self: this
    }, "See you there!")))));
}
const StyledCredits = (0, _styledComponentsDefault.default).div.withConfig({
    displayName: "Credits__StyledCredits",
    componentId: "sc-1xdhckx-0"
})([
    "position:relative;width:1920px;height:1080px;"
]);
const Content = (0, _styledComponentsDefault.default).div.withConfig({
    displayName: "Credits__Content",
    componentId: "sc-1xdhckx-1"
})([
    "position:relative;width:100%;height:100%;color:var(--credits-text);background-color:var(--credits-bg);overflow:hidden;"
]);
const TitleText = (0, _styledComponentsDefault.default).div.withConfig({
    displayName: "Credits__TitleText",
    componentId: "sc-1xdhckx-2"
})([
    "font-weight:bolder;font-size:7rem;"
]);
const HeaderText = (0, _styledComponentsDefault.default).div.withConfig({
    displayName: "Credits__HeaderText",
    componentId: "sc-1xdhckx-3"
})([
    "font-weight:bolder;font-size:6rem;"
]);
const NameText = (0, _styledComponentsDefault.default).div.withConfig({
    displayName: "Credits__NameText",
    componentId: "sc-1xdhckx-4"
})([
    "font-weight:normal;font-size:3.5rem;"
]);
const CreditsRow = (0, _styledComponentsDefault.default).div.withConfig({
    displayName: "Credits__CreditsRow",
    componentId: "sc-1xdhckx-5"
})([
    "position:relative;width:100%;height:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;"
]);
const CreditsColumns = (0, _styledComponentsDefault.default).div.withConfig({
    displayName: "Credits__CreditsColumns",
    componentId: "sc-1xdhckx-6"
})([
    "position:relative;width:100%;display:flex;flex-direction:row;justify-content:space-evenly;align-items:flex-start;"
]);
const Rows = (0, _styledComponentsDefault.default).div.withConfig({
    displayName: "Credits__Rows",
    componentId: "sc-1xdhckx-7"
})([
    "position:relative;display:flex;flex-direction:column;justify-content:center;align-items:center;"
]);
const LogoRow = (0, _styledComponentsDefault.default).div.withConfig({
    displayName: "Credits__LogoRow",
    componentId: "sc-1xdhckx-8"
})([
    "position:relative;display:flex;width:100%;flex-direction:row;align-items:center;justify-content:center;& img{margin-left:20px;margin-bottom:20px;height:12.5rem;}"
]);
const EventLogo = (0, _styledComponentsDefault.default).img.withConfig({
    displayName: "Credits__EventLogo",
    componentId: "sc-1xdhckx-9"
})([
    "height:35rem;"
]);
const YoshiRow = (0, _styledComponentsDefault.default)(LogoRow).withConfig({
    displayName: "Credits__YoshiRow",
    componentId: "sc-1xdhckx-10"
})([
    "& img{height:5rem;}svg{width:1em;object-fit:contain;margin-right:20px;font-size:50px;}"
]);
const YoshiText = (0, _styledComponentsDefault.default)(NameText).withConfig({
    displayName: "Credits__YoshiText",
    componentId: "sc-1xdhckx-11"
})([
    "position:relative;font-size:5rem;font-weight:bold;color:#fff;background:#000;mix-blend-mode:multiply;"
]);
const YoshiSpan = (0, _styledComponentsDefault.default).span.withConfig({
    displayName: "Credits__YoshiSpan",
    componentId: "sc-1xdhckx-12"
})([
    "background:linear-gradient(to right,transparent 0% 13%,#424fff 13% 16%,transparent 16% 17%,#65b5ff 17% 19%,transparent 19% 100%),linear-gradient(to right,transparent 0% 41%,#65b5ff 41% 43%,transparent 43% 100%),linear-gradient(to right,transparent 0% 56%,#fe64ab 56% 59%,#a1b4a8 59%,61%,transparent 61% 100%),linear-gradient(to right,#ff86d5 0% 25%,#00ddab 25% 50%,#ff86d5 50% 75%,#00ddab 75% 100%);background-size:25%;"
]);
const Divider = (0, _styledComponentsDefault.default).div.withConfig({
    displayName: "Credits__Divider",
    componentId: "sc-1xdhckx-13"
})([
    "width:100%;height:10%;"
]);
const root = (0, _client.createRoot)(document.getElementById("root"));
root.render(/*#__PURE__*/ (0, _reactDefault.default).createElement(Credits, {
    __source: {
        fileName: "src/graphics/Credits.tsx",
        lineNumber: 205,
        columnNumber: 13
    },
    __self: undefined
}));

},{"react":"bH1AQ","styled-components":"9xpRL","./components/CarouselComponent":"3ZV6n","@phosphor-icons/react":"h9z2e","react-dom/client":"i5cPj","@nodecg/react-hooks":"audz3","./components/CreditsNameRow":"gc9si","@parcel/transformer-js/src/esmodule-helpers.js":"hvLRG"}],"3ZV6n":[function(require,module,exports) {
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

},{"react":"bH1AQ","styled-components":"9xpRL","@parcel/transformer-js/src/esmodule-helpers.js":"hvLRG"}],"gc9si":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CreditsNameRow", ()=>CreditsNameRow);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _styledComponents = require("styled-components");
var _styledComponentsDefault = parcelHelpers.interopDefault(_styledComponents);
const CreditsNameRow = ({ title, names })=>{
    return /*#__PURE__*/ (0, _reactDefault.default).createElement(Row, {
        __source: {
            fileName: "src/graphics/components/CreditsNameRow.tsx",
            lineNumber: 11,
            columnNumber: 10
        },
        __self: undefined
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement(HeaderText, {
        __source: {
            fileName: "src/graphics/components/CreditsNameRow.tsx",
            lineNumber: 12,
            columnNumber: 13
        },
        __self: undefined
    }, title), names.map((item, index)=>{
        return /*#__PURE__*/ (0, _reactDefault.default).createElement(NameText, {
            key: index,
            __source: {
                fileName: "src/graphics/components/CreditsNameRow.tsx",
                lineNumber: 14,
                columnNumber: 14
            },
            __self: undefined
        }, item);
    }));
};
const Row = (0, _styledComponentsDefault.default).div.withConfig({
    displayName: "CreditsNameRow__Row",
    componentId: "sc-a41hsu-0"
})([
    "display:contents;"
]);
const HeaderText = (0, _styledComponentsDefault.default).div.withConfig({
    displayName: "CreditsNameRow__HeaderText",
    componentId: "sc-a41hsu-1"
})([
    "font-weight:bolder;font-size:6rem;"
]);
const NameText = (0, _styledComponentsDefault.default).div.withConfig({
    displayName: "CreditsNameRow__NameText",
    componentId: "sc-a41hsu-2"
})([
    "font-weight:normal;font-size:3.5rem;"
]);

},{"react":"bH1AQ","styled-components":"9xpRL","@parcel/transformer-js/src/esmodule-helpers.js":"hvLRG"}]},["CjDdB"], "CjDdB", "parcelRequire19f1")

//# sourceMappingURL=credits.e377084f.js.map
