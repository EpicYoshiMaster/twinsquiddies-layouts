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
})({"iTT7o":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Commentators", ()=>Commentators);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _styledComponents = require("styled-components");
var _styledComponentsDefault = parcelHelpers.interopDefault(_styledComponents);
var _client = require("react-dom/client");
var _nameplate = require("./components/Nameplate");
var _reactHooks = require("@nodecg/react-hooks");
var LoadState;
(function(LoadState) {
    LoadState[LoadState["LS_NotLoaded"] = 0] = "LS_NotLoaded";
    LoadState[LoadState["LS_Loaded"] = 1] = "LS_Loaded";
    LoadState[LoadState["LS_Done"] = 2] = "LS_Done";
})(LoadState || (LoadState = {}));
const AnimationDuration = 1000;
function Commentators() {
    const [show, setShow] = (0, _react.useState)(false);
    const [loaded, setLoaded] = (0, _react.useState)(0);
    const [commentatorList] = (0, _reactHooks.useReplicant)("commentatorList", {
        bundle: "squidwest-layout-controls",
        defaultValue: []
    });
    const [settings] = (0, _reactHooks.useReplicant)("commentatorSettings", {
        bundle: "squidwest-layout-controls",
        defaultValue: {
            autoShow: true,
            delay: 3000,
            autoHide: true,
            lifetime: 5000
        }
    });
    (0, _react.useEffect)(()=>{
        if (!commentatorList) return;
        if (!settings) return;
        if (loaded === 0) setLoaded(1);
    }, [
        commentatorList,
        settings
    ]);
    const onAutoHide = (0, _react.useCallback)(()=>{
        setShow(false);
    }, [
        setShow
    ]);
    const setCurrentShow = (0, _react.useCallback)((newShow)=>{
        if (!settings) return;
        if (newShow && settings.autoHide) window.setTimeout(onAutoHide, Math.max(AnimationDuration + settings.lifetime, AnimationDuration));
        setShow(newShow);
    }, [
        setShow,
        onAutoHide,
        settings
    ]);
    const onAutoShow = (0, _react.useCallback)(()=>{
        setCurrentShow(true);
    }, [
        setCurrentShow
    ]);
    const onCommsControl = (0, _react.useCallback)((value)=>{
        setCurrentShow(value);
    }, [
        setCurrentShow
    ]);
    (0, _react.useEffect)(()=>{
        nodecg.listenFor("commsControl", "squidwest-layout-controls", onCommsControl);
        return ()=>{
            nodecg.unlisten("commsControl", "squidwest-layout-controls", onCommsControl);
        };
    }, [
        onCommsControl
    ]);
    (0, _react.useEffect)(()=>{
        if (settings && loaded === 1) {
            if (settings.autoShow) window.setTimeout(onAutoShow, Math.max(settings.delay, 0));
            setLoaded(2);
        }
    }, [
        loaded,
        settings,
        onAutoShow
    ]);
    return /*#__PURE__*/ (0, _reactDefault.default).createElement(StyledCommentators, {
        __source: {
            fileName: "src/graphics/Commentators.tsx",
            lineNumber: 68,
            columnNumber: 10
        },
        __self: this
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement(Content, {
        __source: {
            fileName: "src/graphics/Commentators.tsx",
            lineNumber: 69,
            columnNumber: 4
        },
        __self: this
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement(LowerThirds, {
        __source: {
            fileName: "src/graphics/Commentators.tsx",
            lineNumber: 70,
            columnNumber: 5
        },
        __self: this
    }, commentatorList && commentatorList.map((commentator, index)=>/*#__PURE__*/ (0, _reactDefault.default).createElement(NameplateWrapper, {
            key: index,
            __source: {
                fileName: "src/graphics/Commentators.tsx",
                lineNumber: 71,
                columnNumber: 70
            },
            __self: this
        }, /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _nameplate.Nameplate), {
            show: show,
            name: commentator.name,
            pronouns: commentator.pronouns,
            tag: commentator.tag,
            animationLength: AnimationDuration,
            __source: {
                fileName: "src/graphics/Commentators.tsx",
                lineNumber: 72,
                columnNumber: 8
            },
            __self: this
        }))))));
}
const StyledCommentators = (0, _styledComponentsDefault.default).div.withConfig({
    displayName: "Commentators__StyledCommentators",
    componentId: "sc-395uqo-0"
})([
    "position:relative;width:1920px;height:1080px;background-color:transparent;"
]);
const Content = (0, _styledComponentsDefault.default).div.withConfig({
    displayName: "Commentators__Content",
    componentId: "sc-395uqo-1"
})([
    "position:relative;width:100%;height:100%;display:flex;flex-direction:column-reverse;"
]);
const LowerThirds = (0, _styledComponentsDefault.default).div.withConfig({
    displayName: "Commentators__LowerThirds",
    componentId: "sc-395uqo-2"
})([
    "position:relative;margin-bottom:50px;display:flex;justify-content:space-evenly;"
]);
const NameplateWrapper = (0, _styledComponentsDefault.default).div.withConfig({
    displayName: "Commentators__NameplateWrapper",
    componentId: "sc-395uqo-3"
})([
    "margin:20px 0;"
]);
const root = (0, _client.createRoot)(document.getElementById("root"));
root.render(/*#__PURE__*/ (0, _reactDefault.default).createElement(Commentators, {
    __source: {
        fileName: "src/graphics/Commentators.tsx",
        lineNumber: 95,
        columnNumber: 13
    },
    __self: undefined
}));

},{"react":"bH1AQ","styled-components":"9xpRL","react-dom/client":"i5cPj","./components/Nameplate":"cxLMe","@nodecg/react-hooks":"audz3","@parcel/transformer-js/src/esmodule-helpers.js":"hvLRG"}],"cxLMe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Nameplate", ()=>Nameplate);
var _styledComponents = require("styled-components");
var _styledComponentsDefault = parcelHelpers.interopDefault(_styledComponents);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _outlinedText = require("./OutlinedText");
const CommentatorOutline = [
    {
        width: "10px",
        color: "var(--commentary-outline)"
    }
];
const TagOutline = [
    {
        width: "10px",
        color: "var(--commentary-tag-outline)"
    }
];
const Nameplate = ({ show, name, pronouns, tag, animationLength })=>{
    const [visible, setVisible] = (0, _react.useState)(false);
    const [active, setActive] = (0, _react.useState)(false);
    let onAnimEnd = (0, _react.useCallback)((animName)=>{
        if (animName === ShowNameplate.getName()) {
            if (!show) {
                setActive(true);
                return;
            }
        } else if (animName === HideNameplate.getName()) setVisible(false);
        setActive(false);
    }, [
        show
    ]);
    (0, _react.useEffect)(()=>{
        if (show && !visible) {
            setVisible(true);
            setActive(true);
        }
        if (!show && visible) setActive(true);
    }, [
        show,
        visible
    ]);
    const pronounsSplit = (0, _react.useMemo)(()=>{
        if (!pronouns) return [];
        let split = pronouns.split("/");
        split = split.map((item, index)=>{
            return index === split.length - 1 ? item : item + "/";
        });
        return split;
    }, [
        pronouns
    ]);
    return /*#__PURE__*/ (0, _reactDefault.default).createElement(NameplateBox, {
        $show: show,
        $visible: visible,
        $active: active,
        $animLength: animationLength || 1000,
        onAnimationEnd: (event)=>{
            onAnimEnd(event.animationName);
        },
        __source: {
            fileName: "src/graphics/components/Nameplate.tsx",
            lineNumber: 56,
            columnNumber: 10
        },
        __self: undefined
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement(Name, {
        __source: {
            fileName: "src/graphics/components/Nameplate.tsx",
            lineNumber: 59,
            columnNumber: 4
        },
        __self: undefined
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _outlinedText.OutlinedText), {
        text: name || "",
        outlines: CommentatorOutline,
        __source: {
            fileName: "src/graphics/components/Nameplate.tsx",
            lineNumber: 60,
            columnNumber: 5
        },
        __self: undefined
    })), tag && /*#__PURE__*/ (0, _reactDefault.default).createElement(Tag, {
        __source: {
            fileName: "src/graphics/components/Nameplate.tsx",
            lineNumber: 62,
            columnNumber: 12
        },
        __self: undefined
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _outlinedText.OutlinedText), {
        text: tag,
        outlines: TagOutline,
        __source: {
            fileName: "src/graphics/components/Nameplate.tsx",
            lineNumber: 63,
            columnNumber: 5
        },
        __self: undefined
    })), pronouns && /*#__PURE__*/ (0, _reactDefault.default).createElement(Pronouns, {
        __source: {
            fileName: "src/graphics/components/Nameplate.tsx",
            lineNumber: 65,
            columnNumber: 17
        },
        __self: undefined
    }, pronounsSplit.map((item, index)=>{
        return /*#__PURE__*/ (0, _reactDefault.default).createElement(PronounsText, {
            key: index,
            __source: {
                fileName: "src/graphics/components/Nameplate.tsx",
                lineNumber: 67,
                columnNumber: 16
            },
            __self: undefined
        }, item);
    })));
};
const ShowNameplate = (0, _styledComponents.keyframes)([
    "0%{opacity:1;clip-path:polygon( 50% -40%,50% -40%,50% 140%,50% 140% );}100%{opacity:1;clip-path:polygon( -40% -40%,140% -40%,140% 140%,-40% 140% )}"
]);
const HideNameplate = (0, _styledComponents.keyframes)([
    "0%{opacity:1;clip-path:polygon( -40% -40%,140% -40%,140% 140%,-40% 140% )}100%{opacity:1;clip-path:polygon( 50% -40%,50% -40%,50% 140%,50% 140% );}"
]);
const NameplateBox = (0, _styledComponentsDefault.default).div.withConfig({
    displayName: "Nameplate__NameplateBox",
    componentId: "sc-trqai7-0"
})([
    "position:relative;display:flex;flex-direction:column;padding:10px;height:160px;width:600px;align-items:center;justify-content:space-evenly;text-align:center;background-image:url('/bundles/twinsquiddies-layouts/images/TwiSqui_Banner.png');background-size:contain;background-repeat:no-repeat;",
    ";",
    ""
], ({ $visible })=>$visible ? (0, _styledComponents.css)([
        "opacity:1;"
    ]) : (0, _styledComponents.css)([
        "opacity:0;"
    ]), (props)=>{
    if (props.$active) return (0, _styledComponents.css)([
        "animation:",
        "ms linear 0s ",
        " forwards;"
    ], props.$animLength, props.$show ? ShowNameplate : HideNameplate);
    else return (0, _styledComponents.css)([
        "animation:none;"
    ]);
});
const Name = (0, _styledComponentsDefault.default).div.withConfig({
    displayName: "Nameplate__Name",
    componentId: "sc-trqai7-1"
})([
    "position:relative;width:100%;font-size:3rem;color:var(--commentary-text);"
]);
const Pronouns = (0, _styledComponentsDefault.default).div.withConfig({
    displayName: "Nameplate__Pronouns",
    componentId: "sc-trqai7-2"
})([
    "position:absolute;display:flex;flex-direction:column;padding:5px;padding-top:60px;bottom:-50px;right:-80px;justify-content:center;align-items:center;width:180px;height:180px;background-image:url('/bundles/twinsquiddies-layouts/images/CherrySquid.png');background-size:contain;background-repeat:no-repeat;color:var(--commentary-pronouns);font-size:1.6rem;"
]);
const Tag = (0, _styledComponentsDefault.default).div.withConfig({
    displayName: "Nameplate__Tag",
    componentId: "sc-trqai7-3"
})([
    "position:relative;margin-left:15px;width:100%;text-align:left;font-size:2.25rem;color:var(--commentary-tag);"
]);
const PronounsText = (0, _styledComponentsDefault.default).div.withConfig({
    displayName: "Nameplate__PronounsText",
    componentId: "sc-trqai7-4"
})([
    ""
]);

},{"styled-components":"9xpRL","react":"bH1AQ","./OutlinedText":"1O3pZ","@parcel/transformer-js/src/esmodule-helpers.js":"hvLRG"}],"1O3pZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "OutlinedText", ()=>OutlinedText);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _styledComponents = require("styled-components");
var _styledComponentsDefault = parcelHelpers.interopDefault(_styledComponents);
const OutlinedText = ({ text, outlines })=>{
    return /*#__PURE__*/ (0, _reactDefault.default).createElement(Wrapper, {
        __source: {
            fileName: "src/graphics/components/OutlinedText.tsx",
            lineNumber: 15,
            columnNumber: 10
        },
        __self: undefined
    }, outlines.map((item, index)=>{
        return /*#__PURE__*/ (0, _reactDefault.default).createElement(TextOutline, {
            $width: item.width,
            $color: item.color,
            key: index,
            __source: {
                fileName: "src/graphics/components/OutlinedText.tsx",
                lineNumber: 17,
                columnNumber: 14
            },
            __self: undefined
        }, text);
    }), /*#__PURE__*/ (0, _reactDefault.default).createElement(Text, {
        __source: {
            fileName: "src/graphics/components/OutlinedText.tsx",
            lineNumber: 19,
            columnNumber: 3
        },
        __self: undefined
    }, text));
};
const Wrapper = (0, _styledComponentsDefault.default).div.withConfig({
    displayName: "OutlinedText__Wrapper",
    componentId: "sc-xqtad3-0"
})([
    "position:relative;"
]);
const Text = (0, _styledComponentsDefault.default).div.withConfig({
    displayName: "OutlinedText__Text",
    componentId: "sc-xqtad3-1"
})([
    "position:relative;"
]);
const TextOutline = (0, _styledComponentsDefault.default).div.withConfig({
    displayName: "OutlinedText__TextOutline",
    componentId: "sc-xqtad3-2"
})([
    "position:absolute;width:100%;left:0;-webkit-text-stroke:",
    " ",
    ";"
], ({ $width })=>$width, ({ $color })=>$color);

},{"react":"bH1AQ","styled-components":"9xpRL","@parcel/transformer-js/src/esmodule-helpers.js":"hvLRG"}]},["iTT7o"], "iTT7o", "parcelRequire19f1")

//# sourceMappingURL=commentators.27949ab7.js.map
