// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
'use strict';

var $$Map                      = require("bs-platform/lib/js/map.js");
var List                       = require("bs-platform/lib/js/list.js");
var Block                      = require("bs-platform/lib/js/block.js");
var Curry                      = require("bs-platform/lib/js/curry.js");
var Pervasives                 = require("bs-platform/lib/js/pervasives.js");
var Caml_string                = require("bs-platform/lib/js/caml_string.js");
var Json_decode                = require("bs-json/src/Json_decode.js");
var Logic$LonaCompilerCore     = require("./logic.bs.js");
var Caml_builtin_exceptions    = require("bs-platform/lib/js/caml_builtin_exceptions.js");
var StringMap$LonaCompilerCore = require("../containers/stringMap.bs.js");
var StringSet$LonaCompilerCore = require("../containers/stringSet.bs.js");

function compare(a, b) {
  return Caml_string.caml_string_compare(a[/* name */1], b[/* name */1]);
}

var include = $$Map.Make(/* module */[/* compare */compare]);

var empty = include[0];

var add = include[3];

var find = include[21];

function find_opt(key, map) {
  var exit = 0;
  var item;
  try {
    item = Curry._2(find, key, map);
    exit = 1;
  }
  catch (exn){
    if (exn === Caml_builtin_exceptions.not_found) {
      return /* None */0;
    } else {
      throw exn;
    }
  }
  if (exit === 1) {
    return /* Some */[item];
  }
  
}

var LayerMap_001 = /* is_empty */include[1];

var LayerMap_002 = /* mem */include[2];

var LayerMap_004 = /* singleton */include[4];

var LayerMap_005 = /* remove */include[5];

var LayerMap_006 = /* merge */include[6];

var LayerMap_007 = /* compare */include[7];

var LayerMap_008 = /* equal */include[8];

var LayerMap_009 = /* iter */include[9];

var LayerMap_010 = /* fold */include[10];

var LayerMap_011 = /* for_all */include[11];

var LayerMap_012 = /* exists */include[12];

var LayerMap_013 = /* filter */include[13];

var LayerMap_014 = /* partition */include[14];

var LayerMap_015 = /* cardinal */include[15];

var LayerMap_016 = /* bindings */include[16];

var LayerMap_017 = /* min_binding */include[17];

var LayerMap_018 = /* max_binding */include[18];

var LayerMap_019 = /* choose */include[19];

var LayerMap_020 = /* split */include[20];

var LayerMap_022 = /* map */include[22];

var LayerMap_023 = /* mapi */include[23];

var LayerMap = /* module */[
  /* empty */empty,
  LayerMap_001,
  LayerMap_002,
  /* add */add,
  LayerMap_004,
  LayerMap_005,
  LayerMap_006,
  LayerMap_007,
  LayerMap_008,
  LayerMap_009,
  LayerMap_010,
  LayerMap_011,
  LayerMap_012,
  LayerMap_013,
  LayerMap_014,
  LayerMap_015,
  LayerMap_016,
  LayerMap_017,
  LayerMap_018,
  LayerMap_019,
  LayerMap_020,
  /* find */find,
  LayerMap_022,
  LayerMap_023,
  /* find_opt */find_opt
];

var stylesSet = Curry._1(StringSet$LonaCompilerCore.of_list, /* :: */[
      "alignItems",
      /* :: */[
        "alignSelf",
        /* :: */[
          "flex",
          /* :: */[
            "flexDirection",
            /* :: */[
              "font",
              /* :: */[
                "justifyContent",
                /* :: */[
                  "marginTop",
                  /* :: */[
                    "marginRight",
                    /* :: */[
                      "marginBottom",
                      /* :: */[
                        "marginLeft",
                        /* :: */[
                          "paddingTop",
                          /* :: */[
                            "paddingRight",
                            /* :: */[
                              "paddingBottom",
                              /* :: */[
                                "paddingLeft",
                                /* :: */[
                                  "width",
                                  /* :: */[
                                    "height",
                                    /* :: */[
                                      "pressed",
                                      /* :: */[
                                        "hovered",
                                        /* :: */[
                                          "onPress",
                                          /* :: */[
                                            "textAlign",
                                            /* [] */0
                                          ]
                                        ]
                                      ]
                                    ]
                                  ]
                                ]
                              ]
                            ]
                          ]
                        ]
                      ]
                    ]
                  ]
                ]
              ]
            ]
          ]
        ]
      ]
    ]);

function flatten(layer) {
  var inner = function (acc, layer) {
    var children = layer[/* children */3];
    return List.flatten(/* :: */[
                acc,
                /* :: */[
                  /* :: */[
                    layer,
                    /* [] */0
                  ],
                  List.map((function (param) {
                          return inner(/* [] */0, param);
                        }), children)
                ]
              ]);
  };
  return inner(/* [] */0, layer);
}

function find$1(f, rootLayer) {
  var exit = 0;
  var item;
  try {
    item = List.find(f, flatten(rootLayer));
    exit = 1;
  }
  catch (exn){
    if (exn === Caml_builtin_exceptions.not_found) {
      return /* None */0;
    } else {
      throw exn;
    }
  }
  if (exit === 1) {
    return /* Some */[item];
  }
  
}

function findByName(name, rootLayer) {
  return find$1((function (layer) {
                return +(layer[/* name */1] === name);
              }), rootLayer);
}

function flatmapParent(f, layer) {
  var inner = function (layer) {
    return Pervasives.$at(List.map(Curry._1(f, /* Some */[layer]), layer[/* children */3]), List.concat(List.map(inner, layer[/* children */3])));
  };
  return Pervasives.$at(/* :: */[
              Curry._2(f, /* None */0, layer),
              /* [] */0
            ], inner(layer));
}

function findParent(rootLayer, targetLayer) {
  var containsChild = function (parent) {
    return List.exists((function (child) {
                  return +(child === targetLayer);
                }), parent[/* children */3]);
  };
  return find$1(containsChild, rootLayer);
}

function flatmap(f, layer) {
  return flatmapParent((function (_, layer) {
                return Curry._1(f, layer);
              }), layer);
}

function flatmapParameters(f, layer) {
  var parameterLists = flatmapParent((function (_, layer) {
          return Curry._1(StringMap$LonaCompilerCore.bindings, layer[/* parameters */2]);
        }), layer);
  return List.map(Curry._1(f, layer), List.concat(parameterLists));
}

function getFlexDirection(layer) {
  var exit = 0;
  var value;
  try {
    value = Curry._2(StringMap$LonaCompilerCore.find, "flexDirection", layer[/* parameters */2]);
    exit = 1;
  }
  catch (exn){
    if (exn === Caml_builtin_exceptions.not_found) {
      return "column";
    } else {
      throw exn;
    }
  }
  if (exit === 1) {
    return Json_decode.string(value[/* data */1]);
  }
  
}

function getStringParameterOpt(parameterName, layer) {
  var exit = 0;
  var value;
  try {
    value = Curry._2(StringMap$LonaCompilerCore.find, parameterName, layer[/* parameters */2]);
    exit = 1;
  }
  catch (exn){
    if (exn === Caml_builtin_exceptions.not_found) {
      return /* None */0;
    } else {
      throw exn;
    }
  }
  if (exit === 1) {
    return /* Some */[Json_decode.string(value[/* data */1])];
  }
  
}

function getStringParameter(parameterName, layer) {
  var match = getStringParameterOpt(parameterName, layer);
  if (match) {
    return match[0];
  } else {
    return "";
  }
}

function getNumberParameterOpt(parameterName, layer) {
  var exit = 0;
  var value;
  try {
    value = Curry._2(StringMap$LonaCompilerCore.find, parameterName, layer[/* parameters */2]);
    exit = 1;
  }
  catch (exn){
    if (exn === Caml_builtin_exceptions.not_found) {
      return /* None */0;
    } else {
      throw exn;
    }
  }
  if (exit === 1) {
    return /* Some */[Json_decode.$$float(value[/* data */1])];
  }
  
}

function getNumberParameter(parameterName, layer) {
  var match = getNumberParameterOpt(parameterName, layer);
  if (match) {
    return match[0];
  } else {
    return 0.0;
  }
}

function getSizingRules(parent, layer) {
  var parentDirection = parent ? getFlexDirection(parent[0]) : "column";
  var flex = getNumberParameterOpt("flex", layer);
  var width = getNumberParameterOpt("width", layer);
  var height = getNumberParameterOpt("height", layer);
  var alignSelf = getStringParameterOpt("alignSelf", layer);
  var widthSizingRule = parentDirection === "row" ? (
      flex ? (
          flex[0] !== 1.0 ? (
              width ? /* Fixed */[width[0]] : /* FitContent */1
            ) : /* Fill */0
        ) : (
          width ? /* Fixed */[width[0]] : /* FitContent */1
        )
    ) : (
      alignSelf ? (
          alignSelf[0] === "stretch" ? /* Fill */0 : (
              width ? /* Fixed */[width[0]] : /* FitContent */1
            )
        ) : (
          width ? /* Fixed */[width[0]] : /* FitContent */1
        )
    );
  var heightSizingRule = parentDirection === "row" ? (
      alignSelf ? (
          alignSelf[0] === "stretch" ? /* Fill */0 : (
              height ? /* Fixed */[height[0]] : /* FitContent */1
            )
        ) : (
          height ? /* Fixed */[height[0]] : /* FitContent */1
        )
    ) : (
      flex ? (
          flex[0] !== 1.0 ? (
              height ? /* Fixed */[height[0]] : /* FitContent */1
            ) : /* Fill */0
        ) : (
          height ? /* Fixed */[height[0]] : /* FitContent */1
        )
    );
  return /* record */[
          /* width */widthSizingRule,
          /* height */heightSizingRule
        ];
}

function printSizingRule(param) {
  if (typeof param === "number") {
    if (param !== 0) {
      return "fitContent";
    } else {
      return "fill";
    }
  } else {
    return "fixed(" + (Pervasives.string_of_float(param[0]) + ")");
  }
}

function getInsets(prefix, layer) {
  var extract = function (key) {
    return StringMap$LonaCompilerCore.find_opt(prefix + key, layer[/* parameters */2]);
  };
  var unwrap = function (param) {
    if (param) {
      return Json_decode.$$float(param[0][/* data */1]);
    } else {
      return 0.0;
    }
  };
  var values = List.map(unwrap, List.map(extract, /* :: */[
            "Top",
            /* :: */[
              "Right",
              /* :: */[
                "Bottom",
                /* :: */[
                  "Left",
                  /* [] */0
                ]
              ]
            ]
          ]));
  var exit = 0;
  if (values) {
    var match = values[1];
    if (match) {
      var match$1 = match[1];
      if (match$1) {
        var match$2 = match$1[1];
        if (match$2) {
          if (match$2[1]) {
            exit = 1;
          } else {
            return /* float array */[
                    values[0],
                    match[0],
                    match$1[0],
                    match$2[0]
                  ];
          }
        } else {
          exit = 1;
        }
      } else {
        exit = 1;
      }
    } else {
      exit = 1;
    }
  } else {
    exit = 1;
  }
  if (exit === 1) {
    throw [
          Caml_builtin_exceptions.match_failure,
          [
            "/Users/devinabbott/Projects/Lona/compiler/core/src/core/layer.re",
            167,
            6
          ]
        ];
  }
  
}

function getPadding(param) {
  return getInsets("padding", param);
}

function getMargin(param) {
  return getInsets("margin", param);
}

function parameterAssignmentsFromLogic(layer, node) {
  var identifiers = Logic$LonaCompilerCore.accessedIdentifiers(node);
  return List.fold_left((function (acc, item) {
                if (item.tag) {
                  return acc;
                } else {
                  var match = item[1];
                  if (match) {
                    var match$1 = match[1];
                    if (match$1) {
                      var match$2 = match$1[1];
                      if (match$2 && !match$2[1]) {
                        var layerName = match$1[0];
                        var propertyName = match$2[0];
                        var logicValue = item;
                        var acc$1 = acc;
                        var match$3 = findByName(layerName, layer);
                        if (match$3) {
                          var found = match$3[0];
                          var match$4 = find_opt(found, acc$1);
                          if (match$4) {
                            return Curry._3(add, found, Curry._3(StringMap$LonaCompilerCore.add, propertyName, logicValue, match$4[0]), acc$1);
                          } else {
                            return Curry._3(add, found, Curry._3(StringMap$LonaCompilerCore.add, propertyName, logicValue, StringMap$LonaCompilerCore.empty), acc$1);
                          }
                        } else {
                          return acc$1;
                        }
                      } else {
                        return acc;
                      }
                    } else {
                      return acc;
                    }
                  } else {
                    return acc;
                  }
                }
              }), empty, List.map((function (param) {
                    return /* Identifier */Block.__(0, [
                              param[0],
                              param[1]
                            ]);
                  }), Curry._1(Logic$LonaCompilerCore.IdentifierSet[/* elements */19], identifiers)));
}

function logicAssignmentsFromLayerParameters(layer) {
  var layerMap = [empty];
  flatmapParent((function (_, layer) {
          var layer$1 = layer;
          var stringMap = [StringMap$LonaCompilerCore.empty];
          var extractParameter = function (param) {
            var lonaValue = param[1];
            var parameterName = param[0];
            var receiver_000 = lonaValue[/* ltype */0];
            var receiver_001 = /* :: */[
              "layers",
              /* :: */[
                layer$1[/* name */1],
                /* :: */[
                  parameterName,
                  /* [] */0
                ]
              ]
            ];
            var receiver = /* Identifier */Block.__(0, [
                receiver_000,
                receiver_001
              ]);
            var source = /* Literal */Block.__(1, [lonaValue]);
            var assignment = /* Assign */Block.__(2, [
                source,
                receiver
              ]);
            stringMap[0] = Curry._3(StringMap$LonaCompilerCore.add, parameterName, assignment, stringMap[0]);
            return /* () */0;
          };
          List.iter(extractParameter, Curry._1(StringMap$LonaCompilerCore.bindings, layer$1[/* parameters */2]));
          layerMap[0] = Curry._3(add, layer$1, stringMap[0], layerMap[0]);
          return /* () */0;
        }), layer);
  return layerMap[0];
}

function parameterIsStyle(name) {
  return StringSet$LonaCompilerCore.has(name, stylesSet);
}

function splitParamsMap(params) {
  return Curry._2(StringMap$LonaCompilerCore.partition, (function (key, _) {
                return StringSet$LonaCompilerCore.has(key, stylesSet);
              }), params);
}

function parameterMapToLogicValueMap(params) {
  return Curry._2(StringMap$LonaCompilerCore.map, (function (item) {
                return /* Literal */Block.__(1, [item]);
              }), params);
}

function layerTypeToString(x) {
  if (typeof x === "number") {
    switch (x) {
      case 0 : 
          return "View";
      case 1 : 
          return "Text";
      case 2 : 
          return "Image";
      case 3 : 
          return "Animation";
      case 4 : 
          return "Children";
      case 5 : 
          return "Unknown";
      
    }
  } else {
    return x[0];
  }
}

function mapBindings(f, map) {
  return List.map(f, Curry._1(StringMap$LonaCompilerCore.bindings, map));
}

exports.LayerMap                            = LayerMap;
exports.stylesSet                           = stylesSet;
exports.flatten                             = flatten;
exports.find                                = find$1;
exports.findByName                          = findByName;
exports.flatmapParent                       = flatmapParent;
exports.findParent                          = findParent;
exports.flatmap                             = flatmap;
exports.flatmapParameters                   = flatmapParameters;
exports.getFlexDirection                    = getFlexDirection;
exports.getStringParameterOpt               = getStringParameterOpt;
exports.getStringParameter                  = getStringParameter;
exports.getNumberParameterOpt               = getNumberParameterOpt;
exports.getNumberParameter                  = getNumberParameter;
exports.getSizingRules                      = getSizingRules;
exports.printSizingRule                     = printSizingRule;
exports.getInsets                           = getInsets;
exports.getPadding                          = getPadding;
exports.getMargin                           = getMargin;
exports.parameterAssignmentsFromLogic       = parameterAssignmentsFromLogic;
exports.logicAssignmentsFromLayerParameters = logicAssignmentsFromLayerParameters;
exports.parameterIsStyle                    = parameterIsStyle;
exports.splitParamsMap                      = splitParamsMap;
exports.parameterMapToLogicValueMap         = parameterMapToLogicValueMap;
exports.layerTypeToString                   = layerTypeToString;
exports.mapBindings                         = mapBindings;
/* include Not a pure module */
