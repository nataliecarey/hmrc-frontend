(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define('HMRCFrontend', factory) :
  (global.HMRCFrontend = factory());
}(this, (function () { 'use strict';

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      enumerableOnly && (symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })), keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
    return target;
  }
  function _typeof(obj) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }
  function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function _toPrimitive(input, hint) {
    if (typeof input !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
      var res = prim.call(input, hint || "default");
      if (typeof res !== "object") return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
  }
  function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return typeof key === "symbol" ? key : String(key);
  }

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var defineProperty = createCommonjsModule(function (module, exports) {
  (function (global, factory) {
    factory();
  })(commonjsGlobal, function () {

    (function (undefined) {
      // Detection from https://github.com/Financial-Times/polyfill-service/blob/master/packages/polyfill-library/polyfills/Object/defineProperty/detect.js
      var detect =
      // In IE8, defineProperty could only act on DOM elements, so full support
      // for the feature requires the ability to set a property on an arbitrary object
      'defineProperty' in Object && function () {
        try {
          var a = {};
          Object.defineProperty(a, 'test', {
            value: 42
          });
          return true;
        } catch (e) {
          return false;
        }
      }();
      if (detect) return;

      // Polyfill from https://cdn.polyfill.io/v2/polyfill.js?features=Object.defineProperty&flags=always
      (function (nativeDefineProperty) {
        var supportsAccessors = Object.prototype.hasOwnProperty('__defineGetter__');
        var ERR_ACCESSORS_NOT_SUPPORTED = 'Getters & setters cannot be defined on this javascript engine';
        var ERR_VALUE_ACCESSORS = 'A property cannot both have accessors and be writable or have a value';
        Object.defineProperty = function defineProperty(object, property, descriptor) {
          // Where native support exists, assume it
          if (nativeDefineProperty && (object === window || object === document || object === Element.prototype || object instanceof Element)) {
            return nativeDefineProperty(object, property, descriptor);
          }
          if (object === null || !(object instanceof Object || typeof object === 'object')) {
            throw new TypeError('Object.defineProperty called on non-object');
          }
          if (!(descriptor instanceof Object)) {
            throw new TypeError('Property description must be an object');
          }
          var propertyString = String(property);
          var hasValueOrWritable = 'value' in descriptor || 'writable' in descriptor;
          var getterType = 'get' in descriptor && typeof descriptor.get;
          var setterType = 'set' in descriptor && typeof descriptor.set;

          // handle descriptor.get
          if (getterType) {
            if (getterType !== 'function') {
              throw new TypeError('Getter must be a function');
            }
            if (!supportsAccessors) {
              throw new TypeError(ERR_ACCESSORS_NOT_SUPPORTED);
            }
            if (hasValueOrWritable) {
              throw new TypeError(ERR_VALUE_ACCESSORS);
            }
            Object.__defineGetter__.call(object, propertyString, descriptor.get);
          } else {
            object[propertyString] = descriptor.value;
          }

          // handle descriptor.set
          if (setterType) {
            if (setterType !== 'function') {
              throw new TypeError('Setter must be a function');
            }
            if (!supportsAccessors) {
              throw new TypeError(ERR_ACCESSORS_NOT_SUPPORTED);
            }
            if (hasValueOrWritable) {
              throw new TypeError(ERR_VALUE_ACCESSORS);
            }
            Object.__defineSetter__.call(object, propertyString, descriptor.set);
          }

          // OK to define value unconditionally - if a getter has been specified as well, an error would be thrown above
          if ('value' in descriptor) {
            object[propertyString] = descriptor.value;
          }
          return object;
        };
      })(Object.defineProperty);
    }).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof commonjsGlobal && commonjsGlobal || {});
  });
  });

  var bind = createCommonjsModule(function (module, exports) {
  (function (global, factory) {
    factory();
  })(commonjsGlobal, function () {

    (function (undefined) {
      // Detection from https://github.com/Financial-Times/polyfill-service/blob/master/packages/polyfill-library/polyfills/Object/defineProperty/detect.js
      var detect =
      // In IE8, defineProperty could only act on DOM elements, so full support
      // for the feature requires the ability to set a property on an arbitrary object
      'defineProperty' in Object && function () {
        try {
          var a = {};
          Object.defineProperty(a, 'test', {
            value: 42
          });
          return true;
        } catch (e) {
          return false;
        }
      }();
      if (detect) return;

      // Polyfill from https://cdn.polyfill.io/v2/polyfill.js?features=Object.defineProperty&flags=always
      (function (nativeDefineProperty) {
        var supportsAccessors = Object.prototype.hasOwnProperty('__defineGetter__');
        var ERR_ACCESSORS_NOT_SUPPORTED = 'Getters & setters cannot be defined on this javascript engine';
        var ERR_VALUE_ACCESSORS = 'A property cannot both have accessors and be writable or have a value';
        Object.defineProperty = function defineProperty(object, property, descriptor) {
          // Where native support exists, assume it
          if (nativeDefineProperty && (object === window || object === document || object === Element.prototype || object instanceof Element)) {
            return nativeDefineProperty(object, property, descriptor);
          }
          if (object === null || !(object instanceof Object || typeof object === 'object')) {
            throw new TypeError('Object.defineProperty called on non-object');
          }
          if (!(descriptor instanceof Object)) {
            throw new TypeError('Property description must be an object');
          }
          var propertyString = String(property);
          var hasValueOrWritable = 'value' in descriptor || 'writable' in descriptor;
          var getterType = 'get' in descriptor && typeof descriptor.get;
          var setterType = 'set' in descriptor && typeof descriptor.set;

          // handle descriptor.get
          if (getterType) {
            if (getterType !== 'function') {
              throw new TypeError('Getter must be a function');
            }
            if (!supportsAccessors) {
              throw new TypeError(ERR_ACCESSORS_NOT_SUPPORTED);
            }
            if (hasValueOrWritable) {
              throw new TypeError(ERR_VALUE_ACCESSORS);
            }
            Object.__defineGetter__.call(object, propertyString, descriptor.get);
          } else {
            object[propertyString] = descriptor.value;
          }

          // handle descriptor.set
          if (setterType) {
            if (setterType !== 'function') {
              throw new TypeError('Setter must be a function');
            }
            if (!supportsAccessors) {
              throw new TypeError(ERR_ACCESSORS_NOT_SUPPORTED);
            }
            if (hasValueOrWritable) {
              throw new TypeError(ERR_VALUE_ACCESSORS);
            }
            Object.__defineSetter__.call(object, propertyString, descriptor.set);
          }

          // OK to define value unconditionally - if a getter has been specified as well, an error would be thrown above
          if ('value' in descriptor) {
            object[propertyString] = descriptor.value;
          }
          return object;
        };
      })(Object.defineProperty);
    }).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof commonjsGlobal && commonjsGlobal || {});
    (function (undefined) {
      // Detection from https://github.com/Financial-Times/polyfill-service/blob/master/packages/polyfill-library/polyfills/Function/prototype/bind/detect.js
      var detect = ('bind' in Function.prototype);
      if (detect) return;

      // Polyfill from https://cdn.polyfill.io/v2/polyfill.js?features=Function.prototype.bind&flags=always
      Object.defineProperty(Function.prototype, 'bind', {
        value: function bind(that) {
          // .length is 1
          // add necessary es5-shim utilities
          var $Array = Array;
          var $Object = Object;
          var ObjectPrototype = $Object.prototype;
          var ArrayPrototype = $Array.prototype;
          var Empty = function Empty() {};
          var to_string = ObjectPrototype.toString;
          var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';
          var isCallable; /* inlined from https://npmjs.com/is-callable */
          var fnToStr = Function.prototype.toString,
            tryFunctionObject = function tryFunctionObject(value) {
              try {
                fnToStr.call(value);
                return true;
              } catch (e) {
                return false;
              }
            },
            fnClass = '[object Function]',
            genClass = '[object GeneratorFunction]';
          isCallable = function isCallable(value) {
            if (typeof value !== 'function') {
              return false;
            }
            if (hasToStringTag) {
              return tryFunctionObject(value);
            }
            var strClass = to_string.call(value);
            return strClass === fnClass || strClass === genClass;
          };
          var array_slice = ArrayPrototype.slice;
          var array_concat = ArrayPrototype.concat;
          var array_push = ArrayPrototype.push;
          var max = Math.max;
          // /add necessary es5-shim utilities

          // 1. Let Target be the this value.
          var target = this;
          // 2. If IsCallable(Target) is false, throw a TypeError exception.
          if (!isCallable(target)) {
            throw new TypeError('Function.prototype.bind called on incompatible ' + target);
          }
          // 3. Let A be a new (possibly empty) internal list of all of the
          //   argument values provided after thisArg (arg1, arg2 etc), in order.
          // XXX slicedArgs will stand in for "A" if used
          var args = array_slice.call(arguments, 1); // for normal call
          // 4. Let F be a new native ECMAScript object.
          // 11. Set the [[Prototype]] internal property of F to the standard
          //   built-in Function prototype object as specified in 15.3.3.1.
          // 12. Set the [[Call]] internal property of F as described in
          //   15.3.4.5.1.
          // 13. Set the [[Construct]] internal property of F as described in
          //   15.3.4.5.2.
          // 14. Set the [[HasInstance]] internal property of F as described in
          //   15.3.4.5.3.
          var bound;
          var binder = function () {
            if (this instanceof bound) {
              // 15.3.4.5.2 [[Construct]]
              // When the [[Construct]] internal method of a function object,
              // F that was created using the bind function is called with a
              // list of arguments ExtraArgs, the following steps are taken:
              // 1. Let target be the value of F's [[TargetFunction]]
              //   internal property.
              // 2. If target has no [[Construct]] internal method, a
              //   TypeError exception is thrown.
              // 3. Let boundArgs be the value of F's [[BoundArgs]] internal
              //   property.
              // 4. Let args be a new list containing the same values as the
              //   list boundArgs in the same order followed by the same
              //   values as the list ExtraArgs in the same order.
              // 5. Return the result of calling the [[Construct]] internal
              //   method of target providing args as the arguments.

              var result = target.apply(this, array_concat.call(args, array_slice.call(arguments)));
              if ($Object(result) === result) {
                return result;
              }
              return this;
            } else {
              // 15.3.4.5.1 [[Call]]
              // When the [[Call]] internal method of a function object, F,
              // which was created using the bind function is called with a
              // this value and a list of arguments ExtraArgs, the following
              // steps are taken:
              // 1. Let boundArgs be the value of F's [[BoundArgs]] internal
              //   property.
              // 2. Let boundThis be the value of F's [[BoundThis]] internal
              //   property.
              // 3. Let target be the value of F's [[TargetFunction]] internal
              //   property.
              // 4. Let args be a new list containing the same values as the
              //   list boundArgs in the same order followed by the same
              //   values as the list ExtraArgs in the same order.
              // 5. Return the result of calling the [[Call]] internal method
              //   of target providing boundThis as the this value and
              //   providing args as the arguments.

              // equiv: target.call(this, ...boundArgs, ...args)
              return target.apply(that, array_concat.call(args, array_slice.call(arguments)));
            }
          };

          // 15. If the [[Class]] internal property of Target is "Function", then
          //     a. Let L be the length property of Target minus the length of A.
          //     b. Set the length own property of F to either 0 or L, whichever is
          //       larger.
          // 16. Else set the length own property of F to 0.

          var boundLength = max(0, target.length - args.length);

          // 17. Set the attributes of the length own property of F to the values
          //   specified in 15.3.5.1.
          var boundArgs = [];
          for (var i = 0; i < boundLength; i++) {
            array_push.call(boundArgs, '$' + i);
          }

          // XXX Build a dynamic function with desired amount of arguments is the only
          // way to set the length property of a function.
          // In environments where Content Security Policies enabled (Chrome extensions,
          // for ex.) all use of eval or Function costructor throws an exception.
          // However in all of these environments Function.prototype.bind exists
          // and so this code will never be executed.
          bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this, arguments); }')(binder);
          if (target.prototype) {
            Empty.prototype = target.prototype;
            bound.prototype = new Empty();
            // Clean up dangling references.
            Empty.prototype = null;
          }

          // TODO
          // 18. Set the [[Extensible]] internal property of F to true.

          // TODO
          // 19. Let thrower be the [[ThrowTypeError]] function Object (13.2.3).
          // 20. Call the [[DefineOwnProperty]] internal method of F with
          //   arguments "caller", PropertyDescriptor {[[Get]]: thrower, [[Set]]:
          //   thrower, [[Enumerable]]: false, [[Configurable]]: false}, and
          //   false.
          // 21. Call the [[DefineOwnProperty]] internal method of F with
          //   arguments "arguments", PropertyDescriptor {[[Get]]: thrower,
          //   [[Set]]: thrower, [[Enumerable]]: false, [[Configurable]]: false},
          //   and false.

          // TODO
          // NOTE Function objects created using Function.prototype.bind do not
          // have a prototype property or the [[Code]], [[FormalParameters]], and
          // [[Scope]] internal properties.
          // XXX can't delete prototype in pure-js.

          // 22. Return F.
          return bound;
        }
      });
    }).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof commonjsGlobal && commonjsGlobal || {});
  });
  });

  (function (undefined) {
    // Detection from https://github.com/Financial-Times/polyfill-library/blob/master/polyfills/Object/getOwnPropertyDescriptor/detect.js
    var detect = 'getOwnPropertyDescriptor' in Object && typeof Object.getOwnPropertyDescriptor === 'function' && function () {
      try {
        var object = {};
        object.test = 0;
        return Object.getOwnPropertyDescriptor(object, "test").value === 0;
      } catch (exception) {
        return false;
      }
    }();
    if (detect) return;

    // Polyfill from https://cdn.polyfill.io/v2/polyfill.js?features=Object.getOwnPropertyDescriptor&flags=always
    (function () {
      var call = Function.prototype.call;
      var prototypeOfObject = Object.prototype;
      var owns = call.bind(prototypeOfObject.hasOwnProperty);
      var lookupGetter;
      var lookupSetter;
      var supportsAccessors;
      if (supportsAccessors = owns(prototypeOfObject, "__defineGetter__")) {
        lookupGetter = call.bind(prototypeOfObject.__lookupGetter__);
        lookupSetter = call.bind(prototypeOfObject.__lookupSetter__);
      }
      function doesGetOwnPropertyDescriptorWork(object) {
        try {
          object.sentinel = 0;
          return Object.getOwnPropertyDescriptor(object, "sentinel").value === 0;
        } catch (exception) {
          // returns falsy
        }
      }
      // check whether getOwnPropertyDescriptor works if it's given. Otherwise,
      // shim partially.
      if (Object.defineProperty) {
        var getOwnPropertyDescriptorWorksOnObject = doesGetOwnPropertyDescriptorWork({});
        var getOwnPropertyDescriptorWorksOnDom = typeof document == "undefined" || doesGetOwnPropertyDescriptorWork(document.createElement("div"));
        if (!getOwnPropertyDescriptorWorksOnDom || !getOwnPropertyDescriptorWorksOnObject) {
          var getOwnPropertyDescriptorFallback = Object.getOwnPropertyDescriptor;
        }
      }
      if (!Object.getOwnPropertyDescriptor || getOwnPropertyDescriptorFallback) {
        var ERR_NON_OBJECT = "Object.getOwnPropertyDescriptor called on a non-object: ";
        Object.getOwnPropertyDescriptor = function getOwnPropertyDescriptor(object, property) {
          if (_typeof(object) != "object" && typeof object != "function" || object === null) {
            throw new TypeError(ERR_NON_OBJECT + object);
          }

          // make a valiant attempt to use the real getOwnPropertyDescriptor
          // for I8's DOM elements.
          if (getOwnPropertyDescriptorFallback) {
            try {
              return getOwnPropertyDescriptorFallback.call(Object, object, property);
            } catch (exception) {
              // try the shim if the real one doesn't work
            }
          }

          // If object does not owns property return undefined immediately.
          if (!owns(object, property)) {
            return;
          }

          // If object has a property then it's for sure both `enumerable` and
          // `configurable`.
          var descriptor = {
            enumerable: true,
            configurable: true
          };

          // If JS engine supports accessor properties then property may be a
          // getter or setter.
          if (supportsAccessors) {
            // Unfortunately `__lookupGetter__` will return a getter even
            // if object has own non getter property along with a same named
            // inherited getter. To avoid misbehavior we temporary remove
            // `__proto__` so that `__lookupGetter__` will return getter only
            // if it's owned by an object.
            var prototype = object.__proto__;
            object.__proto__ = prototypeOfObject;
            var getter = lookupGetter(object, property);
            var setter = lookupSetter(object, property);

            // Once we have getter and setter we can put values back.
            object.__proto__ = prototype;
            if (getter || setter) {
              if (getter) {
                descriptor.get = getter;
              }
              if (setter) {
                descriptor.set = setter;
              }
              // If it was accessor property we're done and return here
              // in order to avoid adding `value` to the descriptor.
              return descriptor;
            }
          }

          // If we got this far we know that object has an own property that is
          // not an accessor so we set it as a value and return descriptor.
          descriptor.value = object[property];
          descriptor.writable = true;
          return descriptor;
        };
      }
    })();
  }).call('object' === (typeof window === "undefined" ? "undefined" : _typeof(window)) && window || 'object' === (typeof self === "undefined" ? "undefined" : _typeof(self)) && self || 'object' === (typeof global === "undefined" ? "undefined" : _typeof(global)) && global || {});

  var Document$1 = createCommonjsModule(function (module, exports) {
  (function (global, factory) {
    factory();
  })(commonjsGlobal, function () {

    (function (undefined) {
      // Detection from https://github.com/Financial-Times/polyfill-service/blob/master/packages/polyfill-library/polyfills/Document/detect.js
      var detect = ("Document" in this);
      if (detect) return;

      // Polyfill from https://cdn.polyfill.io/v2/polyfill.js?features=Document&flags=always
      if (typeof WorkerGlobalScope === "undefined" && typeof importScripts !== "function") {
        if (this.HTMLDocument) {
          // IE8

          // HTMLDocument is an extension of Document.  If the browser has HTMLDocument but not Document, the former will suffice as an alias for the latter.
          this.Document = this.HTMLDocument;
        } else {
          // Create an empty function to act as the missing constructor for the document object, attach the document object as its prototype.  The function needs to be anonymous else it is hoisted and causes the feature detect to prematurely pass, preventing the assignments below being made.
          this.Document = this.HTMLDocument = document.constructor = new Function('return function Document() {}')();
          this.Document.prototype = document;
        }
      }
    }).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof commonjsGlobal && commonjsGlobal || {});
  });
  });

  var Element_1 = createCommonjsModule(function (module, exports) {
  (function (global, factory) {
    factory();
  })(commonjsGlobal, function () {

    (function (undefined) {
      // Detection from https://github.com/Financial-Times/polyfill-service/blob/master/packages/polyfill-library/polyfills/Document/detect.js
      var detect = ("Document" in this);
      if (detect) return;

      // Polyfill from https://cdn.polyfill.io/v2/polyfill.js?features=Document&flags=always
      if (typeof WorkerGlobalScope === "undefined" && typeof importScripts !== "function") {
        if (this.HTMLDocument) {
          // IE8

          // HTMLDocument is an extension of Document.  If the browser has HTMLDocument but not Document, the former will suffice as an alias for the latter.
          this.Document = this.HTMLDocument;
        } else {
          // Create an empty function to act as the missing constructor for the document object, attach the document object as its prototype.  The function needs to be anonymous else it is hoisted and causes the feature detect to prematurely pass, preventing the assignments below being made.
          this.Document = this.HTMLDocument = document.constructor = new Function('return function Document() {}')();
          this.Document.prototype = document;
        }
      }
    }).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof commonjsGlobal && commonjsGlobal || {});
    (function (undefined) {
      // Detection from https://github.com/Financial-Times/polyfill-service/blob/master/packages/polyfill-library/polyfills/Element/detect.js
      var detect = 'Element' in this && 'HTMLElement' in this;
      if (detect) return;

      // Polyfill from https://cdn.polyfill.io/v2/polyfill.js?features=Element&flags=always
      (function () {
        // IE8
        if (window.Element && !window.HTMLElement) {
          window.HTMLElement = window.Element;
          return;
        }

        // create Element constructor
        window.Element = window.HTMLElement = new Function('return function Element() {}')();

        // generate sandboxed iframe
        var vbody = document.appendChild(document.createElement('body'));
        var frame = vbody.appendChild(document.createElement('iframe'));

        // use sandboxed iframe to replicate Element functionality
        var frameDocument = frame.contentWindow.document;
        var prototype = Element.prototype = frameDocument.appendChild(frameDocument.createElement('*'));
        var cache = {};

        // polyfill Element.prototype on an element
        var shiv = function (element, deep) {
          var childNodes = element.childNodes || [],
            index = -1,
            key,
            value,
            childNode;
          if (element.nodeType === 1 && element.constructor !== Element) {
            element.constructor = Element;
            for (key in cache) {
              value = cache[key];
              element[key] = value;
            }
          }
          while (childNode = deep && childNodes[++index]) {
            shiv(childNode, deep);
          }
          return element;
        };
        var elements = document.getElementsByTagName('*');
        var nativeCreateElement = document.createElement;
        var interval;
        var loopLimit = 100;
        prototype.attachEvent('onpropertychange', function (event) {
          var propertyName = event.propertyName,
            nonValue = !cache.hasOwnProperty(propertyName),
            newValue = prototype[propertyName],
            oldValue = cache[propertyName],
            index = -1,
            element;
          while (element = elements[++index]) {
            if (element.nodeType === 1) {
              if (nonValue || element[propertyName] === oldValue) {
                element[propertyName] = newValue;
              }
            }
          }
          cache[propertyName] = newValue;
        });
        prototype.constructor = Element;
        if (!prototype.hasAttribute) {
          // <Element>.hasAttribute
          prototype.hasAttribute = function hasAttribute(name) {
            return this.getAttribute(name) !== null;
          };
        }

        // Apply Element prototype to the pre-existing DOM as soon as the body element appears.
        function bodyCheck() {
          if (!loopLimit--) clearTimeout(interval);
          if (document.body && !document.body.prototype && /(complete|interactive)/.test(document.readyState)) {
            shiv(document, true);
            if (interval && document.body.prototype) clearTimeout(interval);
            return !!document.body.prototype;
          }
          return false;
        }
        if (!bodyCheck()) {
          document.onreadystatechange = bodyCheck;
          interval = setInterval(bodyCheck, 25);
        }

        // Apply to any new elements created after load
        document.createElement = function createElement(nodeName) {
          var element = nativeCreateElement(String(nodeName).toLowerCase());
          return shiv(element);
        };

        // remove sandboxed iframe
        document.removeChild(vbody);
      })();
    }).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof commonjsGlobal && commonjsGlobal || {});
  });
  });

  (function (undefined) {
    // Detection from https://github.com/Financial-Times/polyfill-library/blob/master/polyfills/document/querySelector/detect.js
    var detect = 'document' in this && 'querySelector' in this.document;
    if (detect) return;

    // Polyfill from https://cdn.polyfill.io/v2/polyfill.js?features=Event&flags=always
    (function () {
      var head = document.getElementsByTagName('head')[0];
      function getElementsByQuery(node, selector, one) {
        var generator = document.createElement('div'),
          id = 'qsa' + String(Math.random()).slice(3),
          style,
          elements;
        generator.innerHTML = 'x<style>' + selector + '{qsa:' + id + ';}';
        style = head.appendChild(generator.lastChild);
        elements = getElements(node, selector, one, id);
        head.removeChild(style);
        return one ? elements[0] : elements;
      }
      function getElements(node, selector, one, id) {
        var validNode = /1|9/.test(node.nodeType),
          childNodes = node.childNodes,
          elements = [],
          index = -1,
          childNode;
        if (validNode && node.currentStyle && node.currentStyle.qsa === id) {
          if (elements.push(node) && one) {
            return elements;
          }
        }
        while (childNode = childNodes[++index]) {
          elements = elements.concat(getElements(childNode, selector, one, id));
          if (one && elements.length) {
            return elements;
          }
        }
        return elements;
      }
      Document.prototype.querySelector = Element.prototype.querySelector = function querySelectorAll(selector) {
        return getElementsByQuery(this, selector, true);
      };
      Document.prototype.querySelectorAll = Element.prototype.querySelectorAll = function querySelectorAll(selector) {
        return getElementsByQuery(this, selector, false);
      };
    })();
  }).call('object' === (typeof window === "undefined" ? "undefined" : _typeof(window)) && window || 'object' === (typeof self === "undefined" ? "undefined" : _typeof(self)) && self || 'object' === (typeof global === "undefined" ? "undefined" : _typeof(global)) && global || {});

  (function (undefined) {
    // Detection from https://github.com/Financial-Times/polyfill-library/blob/master/polyfills/Element/prototype/dataset/detect.js
    (function () {
      if (!document.documentElement.dataset) {
        return false;
      }
      var el = document.createElement('div');
      el.setAttribute("data-a-b", "c");
      return el.dataset && el.dataset.aB == "c";
    })();

    // Polyfill from https://cdn.polyfill.io/v2/polyfill.js?features=Element.prototype.dataset&flags=always
    Object.defineProperty(Element.prototype, 'dataset', {
      get: function get() {
        var element = this;
        var attributes = this.attributes;
        var map = {};
        for (var i = 0; i < attributes.length; i++) {
          var attribute = attributes[i];
          if (attribute && attribute.name && /^data-\w[\w\-]*$/.test(attribute.name)) {
            var name = attribute.name;
            var value = attribute.value;
            var propName = name.substr(5).replace(/-./g, function (prop) {
              return prop.charAt(1).toUpperCase();
            });
            Object.defineProperty(map, propName, {
              enumerable: this.enumerable,
              get: function () {
                return this.value;
              }.bind({
                value: value || ''
              }),
              set: function setter(name, value) {
                if (typeof value !== 'undefined') {
                  this.setAttribute(name, value);
                } else {
                  this.removeAttribute(name);
                }
              }.bind(element, name)
            });
          }
        }
        return map;
      }
    });
  }).call('object' === (typeof window === "undefined" ? "undefined" : _typeof(window)) && window || 'object' === (typeof self === "undefined" ? "undefined" : _typeof(self)) && self || 'object' === (typeof global === "undefined" ? "undefined" : _typeof(global)) && global || {});

  // Returns a function, that, as long as it continues to be invoked, will not
  // be triggered. The function will be called after it stops being called for
  // N milliseconds. If `immediate` is passed, trigger the function on the
  // leading edge, instead of the trailing.

  // eslint-disable-next-line  import/prefer-default-export
  function debounce(func, wait, immediate) {
    var _this = this;
    var timeout;
    return function () {
      for (var _len = arguments.length, theParams = new Array(_len), _key = 0; _key < _len; _key++) {
        theParams[_key] = arguments[_key];
      }
      var context = _this;
      var later = function later() {
        timeout = null;
        if (!immediate) func.apply(context, theParams);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, theParams);
    };
  }

  // TODO
  // Retrieve breakpoints from Sass vars?
  var breakpoints = {
    xs: 0,
    mobile: 320,
    tablet: 641,
    desktop: 769
  };
  function getCurrentBreakpoint(windowWidth) {
    var reducer = function reducer(acc, curr) {
      var windowInsideBreakpoint = (windowWidth || window.innerWidth) >= breakpoints[curr];
      return windowInsideBreakpoint ? curr : acc;
    };
    return Object.keys(breakpoints).reduce(reducer);
  }

  var isSmall = function isSmall(element) {
    return element.innerWidth <= 768;
  };
  function AccountMenu($module) {
    this.$module = document.querySelector($module);
    this.$moduleBottomMargin = this.$module.style.marginBottom;
    this.$mainNav = this.$module.querySelector('.hmrc-account-menu__main');
    this.$showNavLinkMobile = this.$module.querySelector('.hmrc-account-menu__link--menu');
    this.$currentBreakpoint = getCurrentBreakpoint();
  }
  AccountMenu.prototype.init = function init() {
    this.setup();
    this.$showNavLinkMobile.addEventListener('click', this.eventHandlers.showNavLinkMobileClick.bind(this));
    window.addEventListener('resize', debounce(this.reinstantiate.bind(this)));
  };
  AccountMenu.prototype.reinstantiate = function reinstantiate(resizeEvent) {
    var newBreakpoint = getCurrentBreakpoint(resizeEvent.target.innerWidth);
    var hasCrossedBreakpoint = this.$currentBreakpoint !== newBreakpoint;
    if (hasCrossedBreakpoint) {
      this.$currentBreakpoint = newBreakpoint;
      this.setup();
    }
  };
  AccountMenu.prototype.eventHandlers = {
    showNavLinkMobileClick: function showNavLinkMobileClick(event) {
      event.preventDefault();
      if (isSmall(window)) {
        if (this.$mainNav.classList.contains('main-nav-is-open')) {
          this.hideMainNavMobile(event.currentTarget);
        } else {
          this.showMainNavMobile();
        }
      }
    }
  };
  AccountMenu.prototype.setup = function setup() {
    if (isSmall(window)) {
      this.$module.classList.add('is-smaller');
      this.$showNavLinkMobile.setAttribute('aria-hidden', 'false');
      this.$showNavLinkMobile.removeAttribute('tabindex');
      this.$showNavLinkMobile.classList.remove('js-hidden');
      this.hideMainNavMobile(this.$showNavLinkMobile);
    } else {
      this.$module.classList.remove('is-smaller');
      this.$mainNav.classList.remove('main-nav-is-open', 'js-hidden');
      this.$showNavLinkMobile.setAttribute('aria-hidden', 'true');
      this.$showNavLinkMobile.setAttribute('tabindex', '-1');
      this.$showNavLinkMobile.classList.add('js-hidden');
    }
  };
  AccountMenu.prototype.showMainNavMobile = function showMainNavMobile() {
    // TODO: shall we add main-nav-is-open to `nav`????
    this.$mainNav.classList.remove('js-hidden');
    this.$mainNav.classList.add('main-nav-is-open');
    this.$mainNav.setAttribute('aria-expanded', 'true');
    this.$showNavLinkMobile.setAttribute('aria-expanded', 'true');
    this.$showNavLinkMobile.classList.add('hmrc-account-home--account--is-open');
  };
  AccountMenu.prototype.hideMainNavMobile = function hideMainNavMobile(element) {
    this.$mainNav.classList.remove('main-nav-is-open');
    this.$mainNav.setAttribute('aria-expanded', 'false');
    if (element.classList.contains('hmrc-account-menu__link--menu')) {
      this.$mainNav.classList.add('js-hidden');
      this.$showNavLinkMobile.setAttribute('aria-expanded', 'false');
      this.$showNavLinkMobile.classList.remove('hmrc-account-home--account--is-open');
    }
  };

  function BackLinkHelper($module, window, document) {
    this.$module = $module;
    this.window = window;
    this.document = document;
  }
  BackLinkHelper.prototype.init = function init() {
    var _this = this;
    // do nothing if History API is absent
    if (this.window.history) {
      // store referrer value to cater for IE
      var docReferrer = this.document.referrer;

      // prevent resubmit warning
      if (this.window.history.replaceState && typeof this.window.history.replaceState === 'function') {
        this.window.history.replaceState(null, null, this.window.location.href);
      }

      // handle 'Back' click, dependent upon presence of referrer & no host change
      this.$module.addEventListener('click', function (event) {
        event.preventDefault();
        if (_this.window.history.back && typeof _this.window.history.back === 'function') {
          if (docReferrer !== '' && docReferrer.indexOf(_this.window.location.host) !== -1) {
            _this.window.history.back();
          }
        }
      });
    }
  };

  (function (undefined) {
    // Detection from https://github.com/Financial-Times/polyfill-library/blob/987630a085e29226da16b5dc542042c687560191/polyfills/Array/prototype/forEach/detect.js
    var detect = ('forEach' in Array.prototype);
    if (detect) return;

    // Polyfill from https://cdn.polyfill.io/v2/polyfill.js?features=Array.prototype.forEach&flags=always
    (function () {
      Array.prototype.forEach = function forEach(callback) {
        if (this === undefined || this === null) {
          throw new TypeError(this + " is not an object");
        }
        if (typeof callback !== "function") {
          throw new TypeError(callback + " is not a function");
        }
        var object = Object(this),
          scope = arguments[1],
          arraylike = object instanceof String ? object.split("") : object,
          length = Math.max(Math.min(arraylike.length, 9007199254740991), 0) || 0,
          index = -1;
        while (++index < length) {
          if (index in arraylike) {
            callback.call(scope, arraylike[index], index, object);
          }
        }
      };
    })();
  }).call('object' === (typeof window === "undefined" ? "undefined" : _typeof(window)) && window || 'object' === (typeof self === "undefined" ? "undefined" : _typeof(self)) && self || 'object' === (typeof global === "undefined" ? "undefined" : _typeof(global)) && global || {});

  (function (undefined) {
    // Detection from https://github.com/Financial-Times/polyfill-library/blob/987630a085e29226da16b5dc542042c687560191/polyfills/Object/keys/detect.js
    var detect = 'keys' in Object && function () {
      // Safari 5.0 bug where Object.keys doesn't work with arguments
      return Object.keys(arguments).length === 2;
    }(1, 2) && function () {
      try {
        return true;
      } catch (e) {
        return false;
      }
    }();
    if (detect) return;

    // Polyfill from https://cdn.polyfill.io/v2/polyfill.js?features=Object.assign&flags=always
    Object.keys = function () {

      // modified from https://github.com/es-shims/object-keys
      var has = Object.prototype.hasOwnProperty;
      var toStr = Object.prototype.toString;
      var isEnumerable = Object.prototype.propertyIsEnumerable;
      var hasDontEnumBug = !isEnumerable.call({
        toString: null
      }, "toString");
      var hasProtoEnumBug = isEnumerable.call(function () {}, "prototype");
      var dontEnums = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"];
      var equalsConstructorPrototype = function equalsConstructorPrototype(o) {
        var ctor = o.constructor;
        return ctor && ctor.prototype === o;
      };
      var excludedKeys = {
        $console: true,
        $external: true,
        $frame: true,
        $frameElement: true,
        $frames: true,
        $innerHeight: true,
        $innerWidth: true,
        $outerHeight: true,
        $outerWidth: true,
        $pageXOffset: true,
        $pageYOffset: true,
        $parent: true,
        $scrollLeft: true,
        $scrollTop: true,
        $scrollX: true,
        $scrollY: true,
        $self: true,
        $webkitIndexedDB: true,
        $webkitStorageInfo: true,
        $window: true
      };
      var hasAutomationEqualityBug = function () {
        /* global window */
        if (typeof window === "undefined") {
          return false;
        }
        for (var k in window) {
          try {
            if (!excludedKeys['$' + k] && has.call(window, k) && window[k] !== null && _typeof(window[k]) === 'object') {
              try {
                equalsConstructorPrototype(window[k]);
              } catch (e) {
                return true;
              }
            }
          } catch (e) {
            return true;
          }
        }
        return false;
      }();
      var equalsConstructorPrototypeIfNotBuggy = function equalsConstructorPrototypeIfNotBuggy(o) {
        /* global window */
        if (typeof window === "undefined" || !hasAutomationEqualityBug) {
          return equalsConstructorPrototype(o);
        }
        try {
          return equalsConstructorPrototype(o);
        } catch (e) {
          return false;
        }
      };
      function isArgumentsObject(value) {
        var str = toStr.call(value);
        var isArgs = str === "[object Arguments]";
        if (!isArgs) {
          isArgs = str !== "[object Array]" && value !== null && _typeof(value) === "object" && typeof value.length === "number" && value.length >= 0 && toStr.call(value.callee) === "[object Function]";
        }
        return isArgs;
      }
      return function keys(object) {
        var isFunction = toStr.call(object) === "[object Function]";
        var isArguments = isArgumentsObject(object);
        var isString = toStr.call(object) === "[object String]";
        var theKeys = [];
        if (object === undefined || object === null) {
          throw new TypeError("Cannot convert undefined or null to object");
        }
        var skipProto = hasProtoEnumBug && isFunction;
        if (isString && object.length > 0 && !has.call(object, 0)) {
          for (var i = 0; i < object.length; ++i) {
            theKeys.push(String(i));
          }
        }
        if (isArguments && object.length > 0) {
          for (var j = 0; j < object.length; ++j) {
            theKeys.push(String(j));
          }
        } else {
          for (var name in object) {
            if (!(skipProto && name === "prototype") && has.call(object, name)) {
              theKeys.push(String(name));
            }
          }
        }
        if (hasDontEnumBug) {
          var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);
          for (var k = 0; k < dontEnums.length; ++k) {
            if (!(skipConstructor && dontEnums[k] === "constructor") && has.call(object, dontEnums[k])) {
              theKeys.push(dontEnums[k]);
            }
          }
        }
        return theKeys;
      };
    }();
  }).call("object" === (typeof window === "undefined" ? "undefined" : _typeof(window)) && window || "object" === (typeof self === "undefined" ? "undefined" : _typeof(self)) && self || "object" === (typeof global === "undefined" ? "undefined" : _typeof(global)) && global || {});

  (function (undefined) {
    // Detection from https://github.com/Financial-Times/polyfill-library/blob/987630a085e29226da16b5dc542042c687560191/polyfills/Object/assign/detect.js
    var detect = ('assign' in Object);
    if (detect) return;

    // Polyfill from https://cdn.polyfill.io/v2/polyfill.js?features=Object.assign&flags=always
    (function () {
      // 7.1.13 ToObject ( argument )
      function toObject(argument) {
        if (argument === null || argument === undefined) {
          throw new TypeError('Cannot call method on ' + argument);
        }
        return Object(argument);
      }
      Object.defineProperty(Object, 'assign', {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function assign(target, source) {
          // eslint-disable-line no-unused-vars

          // 1. Let to be ? ToObject(target).
          var to = toObject(target);

          // 2. If only one argument was passed, return to.
          if (arguments.length === 1) {
            return to;
          }

          // 3. Let sources be the List of argument values starting with the second argument
          var sources = Array.prototype.slice.call(arguments, 1);

          // 4. For each element nextSource of sources, in ascending index order, do
          var index1;
          var index2;
          var keys;
          var from;
          for (index1 = 0; index1 < sources.length; index1++) {
            var nextSource = sources[index1];
            // 4a. If nextSource is undefined or null, let keys be a new empty List.
            if (nextSource === undefined || nextSource === null) {
              keys = [];
              // 4b. Else,
            } else {
              // 4bi. Let from be ! ToObject(nextSource).
              from = toObject(nextSource);
              // 4bii. Let keys be ? from.[[OwnPropertyKeys]]().
              /*
                This step in our polyfill is not complying with the specification.
                [[OwnPropertyKeys]] is meant to return ALL keys, including non-enumerable and symbols.
                TODO: When we have Reflect.ownKeys, use that instead as it is the userland equivalent of [[OwnPropertyKeys]].
              */
              keys = Object.keys(from);
            }

            // 4c. For each element nextKey of keys in List order, do
            for (index2 = 0; index2 < keys.length; index2++) {
              var nextKey = keys[index2];
              // 4ci. Let desc be ? from.[[GetOwnProperty]](nextKey).
              var desc = Object.getOwnPropertyDescriptor(from, nextKey);
              // 4cii. If desc is not undefined and desc.[[Enumerable]] is true, then
              if (desc !== undefined && desc.enumerable) {
                // 4cii1. Let propValue be ? Get(from, nextKey).
                var propValue = from[nextKey];
                // 4cii2. Perform ? Set(to, nextKey, propValue, true).
                to[nextKey] = propValue;
              }
            }
          }
          // 5. Return to.
          return to;
        }
      });
    })();
  }).call('object' === (typeof window === "undefined" ? "undefined" : _typeof(window)) && window || 'object' === (typeof self === "undefined" ? "undefined" : _typeof(self)) && self || 'object' === (typeof global === "undefined" ? "undefined" : _typeof(global)) && global || {});

  (function (undefined) {
    // Detection from https://github.com/Financial-Times/polyfill-library/blob/987630a085e29226da16b5dc542042c687560191/polyfills/Date/now/detect.js
    var detect = 'Date' in this && 'now' in this.Date && 'getTime' in this.Date.prototype;
    if (detect) return;

    // Polyfill from https://cdn.polyfill.io/v2/polyfill.js?features=Array.prototype.forEach&flags=always
    Date.now = function now() {
      return new Date().getTime();
    };
  }).call('object' === (typeof window === "undefined" ? "undefined" : _typeof(window)) && window || 'object' === (typeof self === "undefined" ? "undefined" : _typeof(self)) && self || 'object' === (typeof global === "undefined" ? "undefined" : _typeof(global)) && global || {});

  /**
   * TODO: Ideally this would be a NodeList.prototype.forEach polyfill
   * This seems to fail in IE8, requires more investigation.
   * See: https://github.com/imagitama/nodelist-foreach-polyfill
   */
  // eslint-disable-next-line consistent-return
  function nodeListForEach(nodes, callback) {
    if (window.NodeList.prototype.forEach) {
      return nodes.forEach(callback);
    }
    for (var i = 0; i < nodes.length; i += 1) {
      callback.call(window, nodes[i], i, nodes);
    }
  }

  /* global ActiveXObject */
  var _console = console,
    warn = _console.warn;
  var utils = {
    generateDomElementFromString: function generateDomElementFromString(str) {
      var abc = document.createElement('div');
      abc.innerHTML = str;
      return abc.firstChild;
    },
    generateDomElementFromStringAndAppendText: function generateDomElementFromStringAndAppendText(str, text) {
      var $tmp = utils.generateDomElementFromString(str);
      $tmp.innerText = text;
      return $tmp;
    },
    hasClass: function hasClass(selector, className) {
      return document.querySelector(selector).classList.contains(className);
    },
    addClass: function addClass(selector, className) {
      var elements = document.querySelectorAll(selector);
      nodeListForEach(elements, function (i) {
        i.classList.add(className);
      });
    },
    removeClass: function removeClass(selector, className) {
      var elements = document.querySelectorAll(selector);
      nodeListForEach(elements, function (i) {
        i.classList.remove(className);
      });
    },
    removeElement: function removeElement($elem) {
      var parent = $elem.parentNode;
      if (parent) {
        parent.removeChild($elem);
      } else {
        warn("couldn't find parent for elem", $elem);
      }
    },
    ajaxGet: function ajaxGet(url, success) {
      var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
      xhr.open('GET', url);
      xhr.onreadystatechange = function () {
        if (xhr.readyState > 3 && xhr.status === 200) success(xhr.responseText);
      };
      xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
      xhr.send();
      return xhr;
    }
  };

  function displayDialog($elementToDisplay) {
    var $dialog = utils.generateDomElementFromString('<div id="hmrc-timeout-dialog" tabindex="-1" role="dialog" aria-modal="true" class="hmrc-timeout-dialog">');
    var $overlay = utils.generateDomElementFromString('<div id="hmrc-timeout-overlay" class="hmrc-timeout-overlay">');
    var $preparedElementToDisplay = typeof $elementToDisplay === 'string' ? utils.generateDomElementFromString($elementToDisplay) : $elementToDisplay;
    var resetElementsFunctionList = [];
    var closeCallbacks = [];
    $dialog.appendChild($preparedElementToDisplay);
    if (!utils.hasClass('html', 'noScroll')) {
      utils.addClass('html', 'noScroll');
      resetElementsFunctionList.push(function () {
        utils.removeClass('html', 'noScroll');
      });
    }
    document.body.appendChild($dialog);
    document.body.appendChild($overlay);
    resetElementsFunctionList.push(function () {
      utils.removeElement($dialog);
      utils.removeElement($overlay);
    });
    var setupFocusHandlerAndFocusDialog = function setupFocusHandlerAndFocusDialog() {
      function keepFocus(event) {
        var modalFocus = document.getElementById('hmrc-timeout-dialog');
        if (modalFocus) {
          if (event.target !== modalFocus && !modalFocus.contains(event.target)) {
            event.stopPropagation();
            modalFocus.focus();
          }
        }
      }
      var elemToFocusOnReset = document.activeElement;
      $dialog.focus();
      document.addEventListener('focus', keepFocus, true);
      resetElementsFunctionList.push(function () {
        document.removeEventListener('focus', keepFocus);
        elemToFocusOnReset.focus();
      });
    };

    // disable the non-dialog page to prevent confusion for VoiceOver users
    var selectors = ['#skiplink-container', 'body > header', '#global-cookie-message', 'main[role=main]', 'body > footer', 'body > .govuk-skip-link', '.cbanner-govuk-cookie-banner', 'body > .govuk-width-container'];
    var elements = document.querySelectorAll(selectors.join(', '));
    var close = function close() {
      while (resetElementsFunctionList.length > 0) {
        var fn = resetElementsFunctionList.shift();
        fn();
      }
    };
    var closeAndInform = function closeAndInform() {
      closeCallbacks.forEach(function (fn) {
        fn();
      });
      close();
    };
    var setupKeydownHandler = function setupKeydownHandler() {
      function keydownListener(e) {
        if (e.keyCode === 27) {
          closeAndInform();
        }
      }
      document.addEventListener('keydown', keydownListener);
      resetElementsFunctionList.push(function () {
        document.removeEventListener('keydown', keydownListener);
      });
    };
    var preventMobileScrollWhileAllowingPinchZoom = function preventMobileScrollWhileAllowingPinchZoom() {
      var handleTouch = function handleTouch(e) {
        var touches = e.touches || e.changedTouches || [];
        if (touches.length === 1) {
          e.preventDefault();
        }
      };
      document.addEventListener('touchmove', handleTouch, true);
      resetElementsFunctionList.push(function () {
        document.removeEventListener('touchmove', handleTouch, true);
      });
    };
    nodeListForEach(elements, function ($elem) {
      var value = $elem.getAttribute('aria-hidden');
      $elem.setAttribute('aria-hidden', 'true');
      resetElementsFunctionList.push(function () {
        if (value) {
          $elem.setAttribute('aria-hidden', value);
        } else {
          $elem.removeAttribute('aria-hidden');
        }
      });
    });

    //
    setupFocusHandlerAndFocusDialog();
    setupKeydownHandler();
    preventMobileScrollWhileAllowingPinchZoom();
    return {
      closeDialog: function closeDialog() {
        close();
      },
      setAriaLabelledBy: function setAriaLabelledBy(value) {
        if (value) {
          $dialog.setAttribute('aria-labelledby', value);
        } else {
          $dialog.removeAttribute('aria-labelledby');
        }
      },
      addCloseHandler: function addCloseHandler(closeHandler) {
        closeCallbacks.push(closeHandler);
      }
    };
  }
  var dialog = {
    displayDialog: displayDialog
  };

  // Polyfill from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN
  Number.isNaN = Number.isNaN || function isNaN(input) {
    return typeof input === 'number' && input !== input;
  };

  function ValidateInput() {}
  ValidateInput["int"] = function (stringToValidate) {
    var parsedInt = parseInt(stringToValidate, 10);
    return Number.isNaN(parsedInt) ? undefined : parsedInt;
  };
  ValidateInput.string = function (stringToValidate) {
    return typeof stringToValidate === 'string' ? stringToValidate : undefined;
  };
  ValidateInput["boolean"] = function (stringToValidate) {
    return String(stringToValidate).toLowerCase() === 'true';
  };

  function RedirectHelper() {}
  RedirectHelper.redirectToUrl = function (url) {
    // This exists to make redirects more testable
    window.location.href = url;
  };

  // TODO: rewrite this to follow govuk-frontend prototype module pattern

  function TimeoutDialog($module, $sessionActivityService) {
    var options = {};
    var settings = {};
    var cleanupFunctions = [];
    var currentTimer;
    var sessionActivityService = $sessionActivityService;
    function init() {
      var validate = ValidateInput;
      function lookupData(key) {
        return ($module.attributes.getNamedItem(key) || {}).value;
      }
      var localisedDefaults = validate.string(lookupData('data-language')) === 'cy' ? {
        title: 'Rydych ar fin cael eich allgofnodi',
        message: 'Er eich diogelwch, byddwn yn eich allgofnodi cyn pen',
        keepAliveButtonText: 'Parhau i fod wedi’ch mewngofnodi',
        signOutButtonText: 'Allgofnodi',
        properties: {
          minutes: 'funud',
          minute: 'funud',
          seconds: 'eiliad',
          second: 'eiliad'
        }
      } : {
        title: 'You’re about to be signed out',
        message: 'For your security, we will sign you out in',
        keepAliveButtonText: 'Stay signed in',
        signOutButtonText: 'Sign out',
        properties: {
          minutes: 'minutes',
          minute: 'minute',
          seconds: 'seconds',
          second: 'second'
        }
      };
      options = {
        timeout: validate["int"](lookupData('data-timeout')),
        countdown: validate["int"](lookupData('data-countdown')),
        keepAliveUrl: validate.string(lookupData('data-keep-alive-url')),
        signOutUrl: validate.string(lookupData('data-sign-out-url')),
        timeoutUrl: validate.string(lookupData('data-timeout-url')),
        title: validate.string(lookupData('data-title')),
        message: validate.string(lookupData('data-message')),
        messageSuffix: validate.string(lookupData('data-message-suffix')),
        keepAliveButtonText: validate.string(lookupData('data-keep-alive-button-text')),
        signOutButtonText: validate.string(lookupData('data-sign-out-button-text')),
        synchroniseTabs: validate["boolean"](lookupData('data-synchronise-tabs') || false)
      };

      // Default timeoutUrl to signOutUrl if not set
      options.timeoutUrl = options.timeoutUrl || options.signOutUrl;
      validateInput(options);
      settings = mergeOptionsWithDefaults(options, localisedDefaults);
      setupDialogTimer();
      listenForSessionActivityAndResetDialogTimer();
    }
    var broadcastSessionActivity = function broadcastSessionActivity() {
      sessionActivityService.logActivity();
    };
    var listenForSessionActivityAndResetDialogTimer = function listenForSessionActivityAndResetDialogTimer() {
      if (settings.synchroniseTabs) {
        sessionActivityService.onActivity(function (event) {
          var timeOfActivity = event.timestamp;
          cleanup();
          setupDialogTimer(timeOfActivity);
        });
      }
    };
    var validateInput = function validateInput(config) {
      var requiredConfig = ['timeout', 'countdown', 'keepAliveUrl', 'signOutUrl'];
      var missingRequiredConfig = [];
      requiredConfig.forEach(function (item) {
        if (!config[item]) {
          missingRequiredConfig.push("data-".concat(item.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()));
        }
      });
      if (missingRequiredConfig.length > 0) {
        throw new Error("Missing config item(s): [".concat(missingRequiredConfig.join(', '), "]"));
      }
    };
    var mergeOptionsWithDefaults = function mergeOptionsWithDefaults(theOptions, localisedDefaults) {
      var clone = _objectSpread2({}, theOptions);
      Object.keys(localisedDefaults).forEach(function (key) {
        if (_typeof(clone[key]) === 'object') {
          clone[key] = mergeOptionsWithDefaults(theOptions[key], localisedDefaults[key]);
        }
        if (clone[key] === undefined || clone[key] === '') {
          clone[key] = localisedDefaults[key];
        }
      });
      return clone;
    };
    var setupDialogTimer = function setupDialogTimer() {
      var timeOfLastActivity = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getDateNow();
      var signoutTime = timeOfLastActivity + settings.timeout * 1000;
      var delta = getDateNow() - timeOfLastActivity;
      var secondsUntilTimeoutDialog = settings.timeout - settings.countdown;
      var timeout = window.setTimeout(function () {
        setupDialog(signoutTime);
      }, secondsUntilTimeoutDialog * 1000 - delta);
      cleanupFunctions.push(function () {
        window.clearTimeout(timeout);
        if (currentTimer) {
          window.clearTimeout(currentTimer);
        }
      });
    };
    var wrapLink = function wrapLink($elem) {
      var $wrapper = document.createElement('div');
      $wrapper.classList.add('hmrc-timeout-dialog__link-wrapper');
      $wrapper.appendChild($elem);
      return $wrapper;
    };
    var setupDialog = function setupDialog(signoutTime) {
      var $element = utils.generateDomElementFromString('<div>');
      if (settings.title) {
        var $tmp = utils.generateDomElementFromStringAndAppendText('<h1 id="hmrc-timeout-heading" class="govuk-heading-m push--top">', settings.title);
        $element.appendChild($tmp);
      }
      var $countdownElement = utils.generateDomElementFromString('<span id="hmrc-timeout-countdown" class="hmrc-timeout-dialog__countdown">');
      var $audibleMessage = utils.generateDomElementFromString('<p id="hmrc-timeout-message" class="govuk-visually-hidden screenreader-content" aria-live="assertive">');
      var $visualMessge = utils.generateDomElementFromStringAndAppendText('<p class="govuk-body hmrc-timeout-dialog__message" aria-hidden="true">', settings.message);
      $visualMessge.appendChild(document.createTextNode(' '));
      $visualMessge.appendChild($countdownElement);
      $visualMessge.appendChild(document.createTextNode('.'));
      if (settings.messageSuffix) {
        $visualMessge.appendChild(document.createTextNode(" ".concat(settings.messageSuffix)));
      }
      var $staySignedInButton = utils.generateDomElementFromStringAndAppendText('<button id="hmrc-timeout-keep-signin-btn" class="govuk-button">', settings.keepAliveButtonText);
      var $signOutButton = utils.generateDomElementFromStringAndAppendText('<a id="hmrc-timeout-sign-out-link" class="govuk-link hmrc-timeout-dialog__link">', settings.signOutButtonText);
      $staySignedInButton.addEventListener('click', keepAliveAndClose);
      $signOutButton.addEventListener('click', signOut);
      $signOutButton.setAttribute('href', settings.signOutUrl);
      $element.appendChild($visualMessge);
      $element.appendChild($audibleMessage);
      $element.appendChild($staySignedInButton);
      $element.appendChild(document.createTextNode(' '));
      $element.appendChild(wrapLink($signOutButton));
      var dialogControl = dialog.displayDialog($element);
      cleanupFunctions.push(function () {
        dialogControl.closeDialog();
      });
      dialogControl.addCloseHandler(keepAliveAndClose);
      dialogControl.setAriaLabelledBy('hmrc-timeout-heading hmrc-timeout-message');
      var getMillisecondsRemaining = function getMillisecondsRemaining() {
        return signoutTime - getDateNow();
      };
      var getSecondsRemaining = function getSecondsRemaining() {
        return Math.round(getMillisecondsRemaining() / 1000);
      };
      var getHumanText = function getHumanText(counter) {
        var minutes;
        var visibleMessage;
        if (counter < 60) {
          visibleMessage = "".concat(counter, " ").concat(settings.properties[counter !== 1 ? 'seconds' : 'second']);
        } else {
          minutes = Math.ceil(counter / 60);
          visibleMessage = "".concat(minutes, " ").concat(settings.properties[minutes === 1 ? 'minute' : 'minutes']);
        }
        return visibleMessage;
      };
      var getAudibleHumanText = function getAudibleHumanText(counter) {
        var humanText = getHumanText(roundSecondsUp(counter));
        var messageParts = [settings.message, ' ', humanText, '.'];
        if (settings.messageSuffix) {
          messageParts.push(' ');
          messageParts.push(settings.messageSuffix);
        }
        return messageParts.join('');
      };
      var roundSecondsUp = function roundSecondsUp(counter) {
        if (counter > 60) {
          return counter;
        }
        if (counter < 20) {
          return 20;
        }
        return Math.ceil(counter / 20) * 20;
      };
      var updateTextIfChanged = function updateTextIfChanged($elem, text) {
        if ($elem.innerText !== text) {
          // eslint-disable-next-line no-param-reassign
          $elem.innerText = text;
        }
      };
      var updateCountdown = function updateCountdown(counter) {
        var visibleMessage = getHumanText(counter);
        var audibleHumanText = getAudibleHumanText(counter);
        updateTextIfChanged($countdownElement, visibleMessage);
        updateTextIfChanged($audibleMessage, audibleHumanText);
      };
      var getNextTimeout = function getNextTimeout() {
        var remaining = getMillisecondsRemaining();
        var roundedRemaining = Math.floor(getMillisecondsRemaining() / 1000) * 1000;
        if (roundedRemaining <= 60000) {
          return remaining - roundedRemaining || 1000;
        }
        return remaining - (roundedRemaining - (roundedRemaining % 60000 || 60000));
      };
      var runUpdate = function runUpdate() {
        var counter = getSecondsRemaining();
        updateCountdown(counter);
        if (counter <= 0) {
          timeout();
        }
        currentTimer = window.setTimeout(runUpdate, getNextTimeout());
      };
      runUpdate();
    };
    var keepAliveAndClose = function keepAliveAndClose() {
      cleanup();
      setupDialogTimer();
      utils.ajaxGet(settings.keepAliveUrl, function () {});
      broadcastSessionActivity();
    };
    var getDateNow = function getDateNow() {
      return Date.now();
    };
    var signOut = function signOut() {
      RedirectHelper.redirectToUrl(settings.signOutUrl);
    };
    var timeout = function timeout() {
      RedirectHelper.redirectToUrl(settings.timeoutUrl);
    };
    var cleanup = function cleanup() {
      while (cleanupFunctions.length > 0) {
        var fn = cleanupFunctions.shift();
        fn();
      }
    };
    return {
      init: init,
      cleanup: cleanup
    };
  }
  TimeoutDialog.dialog = dialog;
  TimeoutDialog.redirectHelper = RedirectHelper;
  TimeoutDialog.utils = utils;

  // Based on https://github.com/alphagov/govuk_template_jinja
  var setCookie = function setCookie(name, value) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var cookieString = "".concat(name, "=").concat(value, "; path=/");
    if (options.days) {
      var date = new Date();
      date.setTime(date.getTime() + options.days * 24 * 60 * 60 * 1000);
      cookieString = "".concat(cookieString, "; expires=").concat(date.toGMTString());
    }
    if (window.location.protocol === 'https:') {
      cookieString += '; Secure';
    }
    document.cookie = cookieString;
    return cookieString;
  };
  var getCookie = function getCookie(name) {
    var nameEQ = "".concat(name, "=");
    var cookies = document.cookie.split(';');
    for (var i = 0, len = cookies.length; i < len; i += 1) {
      var cookie = cookies[i];
      while (cookie.charAt(0) === ' ') {
        cookie = cookie.substring(1, cookie.length);
      }
      if (cookie.indexOf(nameEQ) === 0) {
        return decodeURIComponent(cookie.substring(nameEQ.length));
      }
    }
    return null;
  };

  function UserResearchBanner($module) {
    this.$module = $module;
    this.$closeLink = this.$module.querySelector('.hmrc-user-research-banner__close');
    this.cookieName = 'mdtpurr';
    this.cookieExpiryDays = 28;
  }
  UserResearchBanner.prototype.init = function init() {
    var cookieData = getCookie(this.cookieName);
    if (cookieData == null) {
      this.$module.classList.add('hmrc-user-research-banner--show');
      this.$closeLink.addEventListener('click', this.eventHandlers.noThanksClick.bind(this));
    }
  };
  UserResearchBanner.prototype.eventHandlers = {
    noThanksClick: function noThanksClick(event) {
      event.preventDefault();
      setCookie(this.cookieName, 'suppress_for_all_services', {
        days: this.cookieExpiryDays
      });
      this.$module.classList.remove('hmrc-user-research-banner--show');
    }
  };

  var SessionActivityService = /*#__PURE__*/function () {
    function SessionActivityService(BrowserBroadcastChannel) {
      _classCallCheck(this, SessionActivityService);
      this.activityChannel = BrowserBroadcastChannel && new BrowserBroadcastChannel('session-activity');
    }
    _createClass(SessionActivityService, [{
      key: "logActivity",
      value: function logActivity() {
        if (this.activityChannel) {
          var event = {
            timestamp: Date.now()
          };
          this.activityChannel.postMessage(event);
        }
      }
    }, {
      key: "onActivity",
      value: function onActivity(callback) {
        if (this.activityChannel) {
          this.activityChannel.onmessage = function (event) {
            callback(event.data);
          };
        }
      }
    }]);
    return SessionActivityService;
  }();

  function initAll() {
    var $AccountMenuSelector = '[data-module="hmrc-account-menu"]';
    if (document.querySelector($AccountMenuSelector)) {
      new AccountMenu($AccountMenuSelector).init();
    }
    var sessionActivityService = new SessionActivityService(window.BroadcastChannel);
    sessionActivityService.logActivity();
    var $TimeoutDialog = document.querySelector('meta[name="hmrc-timeout-dialog"]');
    if ($TimeoutDialog) {
      new TimeoutDialog($TimeoutDialog, sessionActivityService).init();
    }
    var $UserResearchBanner = document.querySelector('[data-module="hmrc-user-research-banner"]');
    if ($UserResearchBanner) {
      new UserResearchBanner($UserResearchBanner).init();
    }
    var $BackLinks = document.querySelectorAll('[data-module="hmrc-back-link"]');
    nodeListForEach($BackLinks, function ($BackLink) {
      new BackLinkHelper($BackLink, window, document).init();
    });
  }
  var all = {
    initAll: initAll,
    AccountMenu: AccountMenu,
    TimeoutDialog: TimeoutDialog,
    UserResearchBanner: UserResearchBanner,
    BackLinkHelper: BackLinkHelper
  };

  return all;

})));
