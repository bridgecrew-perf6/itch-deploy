'use strict';
webpackJsonp([0], {
  100 : function(allegedI, arg, __webpack_require__) {
    /**
     * @param {!Object} obj
     * @return {?}
     */
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default : obj
      };
    }
    /**
     * @param {!AudioNode} instance
     * @param {!Function} Constructor
     * @return {undefined}
     */
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    /**
     * @param {string} self
     * @param {string} call
     * @return {?}
     */
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return !call || "object" != typeof call && "function" != typeof call ? self : call;
    }
    /**
     * @param {!Object} subClass
     * @param {!Object} superClass
     * @return {undefined}
     */
    function _inherits(subClass, superClass) {
      if ("function" != typeof superClass && null !== superClass) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      /** @type {!Object} */
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor : {
          value : subClass,
          enumerable : false,
          writable : true,
          configurable : true
        }
      });
      if (superClass) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(subClass, superClass);
        } else {
          /** @type {!Object} */
          subClass.__proto__ = superClass;
        }
      }
    }
    Object.defineProperty(arg, "__esModule", {
      value : true
    });
    var _deepAssign = (__webpack_require__(15), __webpack_require__(16));
    var _deepAssign2 = _interopRequireDefault(_deepAssign);
    var _suggestItem = (__webpack_require__(28), __webpack_require__(29));
    var _suggestItem2 = _interopRequireDefault(_suggestItem);
    var _suggestList = (__webpack_require__(18), __webpack_require__(22));
    var _suggestList2 = _interopRequireDefault(_suggestList);
    var _DraggableCore = (__webpack_require__(35), __webpack_require__(13));
    var _DraggableCore2 = _interopRequireDefault(_DraggableCore);
    var _normalizeDataUri = (__webpack_require__(19), __webpack_require__(20));
    var params = _interopRequireDefault(_normalizeDataUri);
    var _createClass = function() {
      /**
       * @param {!Function} d
       * @param {string} props
       * @return {undefined}
       */
      function e(d, props) {
        /** @type {number} */
        var i = 0;
        for (; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          /** @type {boolean} */
          descriptor.configurable = true;
          if ("value" in descriptor) {
            /** @type {boolean} */
            descriptor.writable = true;
          }
          Object.defineProperty(d, descriptor.key, descriptor);
        }
      }
      return function(t, n, a) {
        return n && e(t.prototype, n), a && e(t, a), t;
      };
    }();
    var _prepareStyleProperties = __webpack_require__(0);
    var _prepareStyleProperties2 = _interopRequireDefault(_prepareStyleProperties);
    var _UiIcon = (__webpack_require__(11), __webpack_require__(62), __webpack_require__(12));
    var _UiIcon2 = _interopRequireDefault(_UiIcon);
    var data = params.default.Item;
    var FormioElement = params.default.create()(function(config) {
      var visible = config.visible;
      var onCancel = config.onCancel;
      var onCreate = config.onCreate;
      var options = config.form;
      var lint = options.getFieldDecorator;
      return _prepareStyleProperties2.default.createElement(_suggestItem2.default, {
        visible : visible,
        title : "Cambiar contrase\u00f1a",
        okText : "Guardar",
        onCancel : onCancel,
        onOk : onCreate
      }, _prepareStyleProperties2.default.createElement(params.default, {
        layout : "vertical"
      }, _prepareStyleProperties2.default.createElement(data, {
        label : "Nueva contrase\u00f1a"
      }, lint("nueva_contrasenia", {
        rules : [{
          required : true,
          message : "Indique su nueva contrase\u00f1a"
        }]
      })(_prepareStyleProperties2.default.createElement(_suggestList2.default, {
        prefix : _prepareStyleProperties2.default.createElement(_DraggableCore2.default, {
          type : "lock",
          style : {
            fontSize : 13
          }
        }),
        type : "password",
        placeholder : "Nueva contrase\u00f1a"
      })))));
    });
    var group = function(_EventEmitter) {
      /**
       * @param {!Object} element
       * @return {?}
       */
      function Agent(element) {
        _classCallCheck(this, Agent);
        var $scope = _possibleConstructorReturn(this, (Agent.__proto__ || Object.getPrototypeOf(Agent)).call(this, element));
        return $scope.showModal = function() {
          $scope.setState({
            visible : true
          });
        }, $scope.handleCancel = function() {
          $scope.setState({
            visible : false
          });
        }, $scope.handleCreate = function() {
          var form = $scope.form;
          form.validateFields(function(canCreateDiscussions, n) {
            if (!canCreateDiscussions) {
              _UiIcon2.default.put("/api/usuario/cambiar_contrasenia", {
                nueva_contrasenia : n.nueva_contrasenia
              }).then(function(t) {
                console.log(t);
                if (200 === t.status) {
                  form.resetFields();
                  _deepAssign2.default.success("Contrase\u00f1a actualizada satisfactoriamente");
                  $scope.setState({
                    visible : false,
                    redirect : true
                  });
                } else {
                  _suggestItem2.default.error({
                    title : "Error al cambiar contrase\u00f1a. Revisar los siguientes campos",
                    content : _prepareStyleProperties2.default.createElement("div", null, t.data.errores),
                    onOk : function() {
                    }
                  });
                }
              }).catch(function(mnemonics) {
                _deepAssign2.default.error(mnemonics);
              });
            }
          });
        }, $scope.saveFormRef = function(data) {
          /** @type {!Object} */
          $scope.form = data;
        }, $scope.state = {
          visible : element.visible,
          redirect : false
        }, $scope;
      }
      return _inherits(Agent, _EventEmitter), _createClass(Agent, [{
        key : "componentWillReceiveProps",
        value : function(_ref) {
          var visible = _ref.visible;
          this.setState({
            visible : visible
          });
        }
      }, {
        key : "render",
        value : function() {
          return _prepareStyleProperties2.default.createElement("div", null, _prepareStyleProperties2.default.createElement(FormioElement, {
            ref : this.saveFormRef,
            visible : this.state.visible,
            onCancel : this.handleCancel,
            onCreate : this.handleCreate
          }));
        }
      }]), Agent;
    }(_prepareStyleProperties.Component);
    arg.default = group;
  },
  1017 : function(module, exports, __webpack_require__) {
    /**
     * @param {!Object} obj
     * @return {?}
     */
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default : obj
      };
    }
    /**
     * @param {!AudioNode} instance
     * @param {!Function} Constructor
     * @return {undefined}
     */
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    /**
     * @param {string} self
     * @param {string} call
     * @return {?}
     */
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return !call || "object" != typeof call && "function" != typeof call ? self : call;
    }
    /**
     * @param {!Object} subClass
     * @param {!Object} superClass
     * @return {undefined}
     */
    function _inherits(subClass, superClass) {
      if ("function" != typeof superClass && null !== superClass) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      /** @type {!Object} */
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor : {
          value : subClass,
          enumerable : false,
          writable : true,
          configurable : true
        }
      });
      if (superClass) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(subClass, superClass);
        } else {
          /** @type {!Object} */
          subClass.__proto__ = superClass;
        }
      }
    }
    Object.defineProperty(exports, "__esModule", {
      value : true
    });
    var _deepAssign = (__webpack_require__(15), __webpack_require__(16));
    var _deepAssign2 = _interopRequireDefault(_deepAssign);
    var _suggestItem = (__webpack_require__(28), __webpack_require__(29));
    var _suggestItem2 = _interopRequireDefault(_suggestItem);
    var _normalizeDataUri = (__webpack_require__(153), __webpack_require__(154));
    var _normalizeDataUri2 = _interopRequireDefault(_normalizeDataUri);
    var _UiIcon = (__webpack_require__(18), __webpack_require__(22));
    var _UiIcon2 = _interopRequireDefault(_UiIcon);
    var _classlist = (__webpack_require__(19), __webpack_require__(20));
    var params = _interopRequireDefault(_classlist);
    var _createClass = function() {
      /**
       * @param {!Function} d
       * @param {string} props
       * @return {undefined}
       */
      function e(d, props) {
        /** @type {number} */
        var i = 0;
        for (; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          /** @type {boolean} */
          descriptor.configurable = true;
          if ("value" in descriptor) {
            /** @type {boolean} */
            descriptor.writable = true;
          }
          Object.defineProperty(d, descriptor.key, descriptor);
        }
      }
      return function(t, n, a) {
        return n && e(t.prototype, n), a && e(t, a), t;
      };
    }();
    var _prepareStyleProperties = __webpack_require__(0);
    var _prepareStyleProperties2 = _interopRequireDefault(_prepareStyleProperties);
    var _Trans = (__webpack_require__(11), __webpack_require__(12));
    var _Trans2 = _interopRequireDefault(_Trans);
    var _noframeworkWaypoints = __webpack_require__(1);
    var _noframeworkWaypoints2 = _interopRequireDefault(_noframeworkWaypoints);
    var data = params.default.Item;
    var i = (_UiIcon2.default.TextArea, _normalizeDataUri2.default.RangePicker);
    var FormioElement = params.default.create()(function(options) {
      var visible = options.visible;
      var onCancel = options.onCancel;
      var onCreate = options.onCreate;
      var self = options.form;
      var colorizer = self.getFieldDecorator;
      var context = {
        rules : [{
          type : "array",
          required : true,
          message : "Seleccione la fecha de inicio y fin del seguimiento"
        }]
      };
      return _prepareStyleProperties2.default.createElement(_suggestItem2.default, {
        visible : visible,
        title : "Agregar seguimiento de residencia",
        okText : "Guardar",
        onCancel : onCancel,
        onOk : onCreate
      }, _prepareStyleProperties2.default.createElement(params.default, {
        layout : "vertical",
        style : {
          width : "100%"
        }
      }, _prepareStyleProperties2.default.createElement(data, {
        label : "Seleccione la fecha de inicio y fin del seguimiento",
        style : {
          width : "100%"
        }
      }, colorizer("fechas_seguimiento", context)(_prepareStyleProperties2.default.createElement(i, {
        format : "ll",
        disabledDate : function(creationDate) {
          return creationDate.format("YYYY-MM-DD") < (0, _noframeworkWaypoints2.default)().format("YYYY-MM-DD");
        }
      })))));
    });
    var storageDriver = function(_EventEmitter) {
      /**
       * @param {!Object} element
       * @return {?}
       */
      function Agent(element) {
        _classCallCheck(this, Agent);
        var _this = _possibleConstructorReturn(this, (Agent.__proto__ || Object.getPrototypeOf(Agent)).call(this, element));
        return _this.showModal = function() {
          _this.setState({
            visible : true
          });
        }, _this.handleCancel = function() {
          _this.setState({
            visible : false
          });
        }, _this.handleCreate = function() {
          var form = _this.form;
          form.validateFields(function(canCreateDiscussions, n) {
            if (!canCreateDiscussions) {
              var thissu = n.fechas_seguimiento[0].format("YYYY-MM-DD");
              var nextsa = n.fechas_seguimiento[1].format("YYYY-MM-DD");
              var l = _this.state.id_periodo;
              _Trans2.default.post("/api/periodo/seguimiento", {
                id_periodo : l,
                fecha_inicial : thissu,
                fecha_final : nextsa
              }).then(function(getFilesReply) {
                if (200 === getFilesReply.status) {
                  _deepAssign2.default.success("Seguimiento agregado satisfactoriamente!");
                  form.resetFields();
                  _this.setState({
                    visible : false
                  });
                } else {
                  _suggestItem2.default.error({
                    title : "Error al agregar el seguimiento. Revisar los siguientes campos",
                    content : _prepareStyleProperties2.default.createElement("div", null, getFilesReply.data.errores),
                    onOk : function() {
                    }
                  });
                }
              }).catch(function(canCreateDiscussions) {
                _deepAssign2.default.error("Error en el servidor verificar con el encargado.");
              });
            }
          });
        }, _this.saveFormRef = function(data) {
          /** @type {!Object} */
          _this.form = data;
        }, _this.state = {
          id_periodo : element.id_periodo,
          visible : element.visible
        }, _this;
      }
      return _inherits(Agent, _EventEmitter), _createClass(Agent, [{
        key : "componentWillReceiveProps",
        value : function(_ref) {
          var visible = _ref.visible;
          var _ref$mapStateToPropsF = _ref.id_periodo;
          this.setState({
            id_periodo : _ref$mapStateToPropsF,
            visible : visible
          });
        }
      }, {
        key : "render",
        value : function() {
          return _prepareStyleProperties2.default.createElement("div", null, _prepareStyleProperties2.default.createElement(FormioElement, {
            ref : this.saveFormRef,
            visible : this.state.visible,
            onCancel : this.handleCancel,
            onCreate : this.handleCreate
          }));
        }
      }]), Agent;
    }(_prepareStyleProperties.Component);
    exports.default = storageDriver;
  },
  1018 : function(cond, t, __webpack_require__) {
    /**
     * @param {!Object} obj
     * @return {?}
     */
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default : obj
      };
    }
    /**
     * @param {!AudioNode} instance
     * @param {!Function} Constructor
     * @return {undefined}
     */
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    /**
     * @param {string} self
     * @param {string} call
     * @return {?}
     */
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return !call || "object" != typeof call && "function" != typeof call ? self : call;
    }
    /**
     * @param {!Object} subClass
     * @param {!Object} superClass
     * @return {undefined}
     */
    function _inherits(subClass, superClass) {
      if ("function" != typeof superClass && null !== superClass) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      /** @type {!Object} */
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor : {
          value : subClass,
          enumerable : false,
          writable : true,
          configurable : true
        }
      });
      if (superClass) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(subClass, superClass);
        } else {
          /** @type {!Object} */
          subClass.__proto__ = superClass;
        }
      }
    }
    Object.defineProperty(t, "__esModule", {
      value : true
    });
    var _normalizeDataUri = (__webpack_require__(28), __webpack_require__(29));
    var _normalizeDataUri2 = _interopRequireDefault(_normalizeDataUri);
    var _deepAssign = (__webpack_require__(15), __webpack_require__(16));
    var _deepAssign2 = _interopRequireDefault(_deepAssign);
    var _suggestList = (__webpack_require__(37), __webpack_require__(36));
    var _suggestList2 = _interopRequireDefault(_suggestList);
    var _DraggableCore = (__webpack_require__(33), __webpack_require__(34));
    var _DraggableCore2 = _interopRequireDefault(_DraggableCore);
    var _UiIcon = (__webpack_require__(31), __webpack_require__(32));
    var _UiIcon2 = _interopRequireDefault(_UiIcon);
    var _classlist = (__webpack_require__(153), __webpack_require__(154));
    var _classlist2 = _interopRequireDefault(_classlist);
    var _suggestItem = (__webpack_require__(24), __webpack_require__(25));
    var _suggestItem2 = _interopRequireDefault(_suggestItem);
    var _AboutPage = (__webpack_require__(19), __webpack_require__(20));
    var _AboutPage2 = _interopRequireDefault(_AboutPage);
    var _createClass = function() {
      /**
       * @param {!Function} d
       * @param {string} props
       * @return {undefined}
       */
      function e(d, props) {
        /** @type {number} */
        var i = 0;
        for (; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          /** @type {boolean} */
          descriptor.configurable = true;
          if ("value" in descriptor) {
            /** @type {boolean} */
            descriptor.writable = true;
          }
          Object.defineProperty(d, descriptor.key, descriptor);
        }
      }
      return function(t, n, a) {
        return n && e(t.prototype, n), a && e(t, a), t;
      };
    }();
    var _prepareStyleProperties = __webpack_require__(0);
    var _prepareStyleProperties2 = _interopRequireDefault(_prepareStyleProperties);
    var _Trans = __webpack_require__(12);
    var _Trans2 = _interopRequireDefault(_Trans);
    var _AppDownload = __webpack_require__(1);
    var _AppDownload2 = _interopRequireDefault(_AppDownload);
    var data = _AboutPage2.default.Item;
    var AnimatedIcon = _suggestItem2.default.Option;
    var WrappedComponent = _classlist2.default.RangePicker;
    var FormioElement = _AboutPage2.default.create()(function(o) {
      var onSubmit = o.onCreate;
      var config = o.form;
      var father = o.departamento;
      var foo = o.checkPeriodoEntregaAnteproyecto;
      var lint = config.getFieldDecorator;
      /** @type {number} */
      var a = 2016;
      var options = {
        rules : [{
          type : "array",
          required : true,
          message : "Seleccione la fecha de inicio y fin del periodo"
        }]
      };
      var mapDispatchToProps = {
        rules : [{
          validator : foo
        }, {
          type : "array",
          required : true,
          message : "Seleccione la fecha de inicio y fin del periodo"
        }]
      };
      return _prepareStyleProperties2.default.createElement("div", null, _prepareStyleProperties2.default.createElement(_AboutPage2.default, {
        layout : "vertical",
        onSubmit : onSubmit
      }, _prepareStyleProperties2.default.createElement(_DraggableCore2.default, null, _prepareStyleProperties2.default.createElement(_UiIcon2.default, {
        xs : 24,
        lg : 8
      }, _prepareStyleProperties2.default.createElement(data, {
        label : "Carrera",
        hasFeedback : true
      }, lint("id_carrera", {
        rules : [{
          required : true,
          message : "Debe indicar la carrera"
        }]
      })(_prepareStyleProperties2.default.createElement(_suggestItem2.default, {
        placeholder : "Seleccione una carrera"
      }, father.carreras.map(function(alert, awsKey) {
        return _prepareStyleProperties2.default.createElement(AnimatedIcon, {
          key : awsKey,
          value : "" + alert.id
        }, alert.nombre);
      })))))), _prepareStyleProperties2.default.createElement(_DraggableCore2.default, {
        gutter : 16
      }, _prepareStyleProperties2.default.createElement(_UiIcon2.default, {
        xs : 18,
        lg : 8
      }, _prepareStyleProperties2.default.createElement(data, {
        label : "Periodo de residencia",
        hasFeedback : true
      }, lint("periodo", {
        rules : [{
          required : true,
          message : "Debe indicar el periodo de la residencia"
        }]
      })(_prepareStyleProperties2.default.createElement(_suggestItem2.default, {
        placeholder : "Seleccione un periodo"
      }, _prepareStyleProperties2.default.createElement(AnimatedIcon, {
        value : "FEBRERO-JUNIO"
      }, "FEBRERO-JUNIO"), _prepareStyleProperties2.default.createElement(AnimatedIcon, {
        value : "AGOSTO-DICIEMBRE"
      }, "AGOSTO-DICIEMBRE"))))), _prepareStyleProperties2.default.createElement(_UiIcon2.default, {
        xs : 6,
        lg : 4
      }, _prepareStyleProperties2.default.createElement(data, {
        label : "Ciclo",
        hasFeedback : true
      }, lint("ciclo", {
        rules : [{
          required : true,
          message : "Debe indicar el ciclo de la residencia"
        }]
      })(_prepareStyleProperties2.default.createElement(_suggestItem2.default, {
        placeholder : "Seleccione un ciclo"
      }, Array(50).fill(1).map(function(canCreateDiscussions, awsKey) {
        return a++, _prepareStyleProperties2.default.createElement(AnimatedIcon, {
          key : awsKey,
          value : "" + a
        }, a);
      })))))), _prepareStyleProperties2.default.createElement(_DraggableCore2.default, null, _prepareStyleProperties2.default.createElement(_UiIcon2.default, {
        xs : 24,
        lg : 8
      }, _prepareStyleProperties2.default.createElement(data, {
        label : "Seleccione la fecha de inicio y fin del periodo",
        style : {
          width : "100%"
        }
      }, lint("fechas_periodo", options)(_prepareStyleProperties2.default.createElement(WrappedComponent, {
        format : "ll",
        disabledDate : function(creationDate) {
          return creationDate.format("YYYY-MM-DD") < (0, _AppDownload2.default)().format("YYYY-MM-DD");
        }
      }))))), _prepareStyleProperties2.default.createElement(_DraggableCore2.default, null, _prepareStyleProperties2.default.createElement(_UiIcon2.default, {
        xs : 24,
        lg : 8
      }, _prepareStyleProperties2.default.createElement(data, {
        label : "Seleccione la fecha de inicio y fin de la entrega de anteproyectos"
      }, lint("fechas_entrega_anteproyecto", mapDispatchToProps)(_prepareStyleProperties2.default.createElement(WrappedComponent, {
        format : "ll",
        disabledDate : function(creationDate) {
          return creationDate.format("YYYY-MM-DD") < (0, _AppDownload2.default)().format("YYYY-MM-DD");
        }
      }))))), _prepareStyleProperties2.default.createElement(_suggestList2.default, {
        icon : "save",
        type : "primary",
        htmlType : "submit",
        style : {
          marginTop : 20,
          marginBottom : 20
        }
      }, "Aperturar periodo")));
    });
    var offsetFromCenter = function(_EventEmitter) {
      /**
       * @param {?} data
       * @return {?}
       */
      function Agent(data) {
        _classCallCheck(this, Agent);
        var _this = _possibleConstructorReturn(this, (Agent.__proto__ || Object.getPrototypeOf(Agent)).call(this, data));
        return _this.checkPeriodoEntregaAnteproyecto = function(array, formats, callback) {
          var form = _this.form;
          var siteData = form.getFieldValue("fechas_periodo");
          console.log(formats);
          console.log(siteData);
          if (siteData) {
            if (formats[0].format("YYYY-MM-DD") < siteData[0].format("YYYY-MM-DD")) {
              callback("La fecha de inicio de entrega de anteproyecto debe ser despues de: " + siteData[0].format("ll"));
            } else {
              if (formats[1].format("YYYY-MM-DD") > siteData[1].format("YYYY-MM-DD")) {
                callback("La fecha de fin de entrega de anteproyecto debe ser antes que: " + siteData[1].format("ll"));
              } else {
                callback();
              }
            }
          } else {
            callback("Primero seleccione la fecha del periodo.");
          }
        }, _this.handleCreate = function(e) {
          e.preventDefault();
          var form = _this.form;
          form.validateFields(function(canCreateDiscussions, that) {
            if (!canCreateDiscussions) {
              console.log("Received values of form: ", that);
              var malakh = that.id_carrera;
              var CircularList = that.periodo;
              var rZone = that.ciclo;
              /** @type {!Array} */
              var conv_reverse_sort = [that.fechas_periodo[0].format("YYYY-MM-DD"), that.fechas_periodo[1].format("YYYY-MM-DD")];
              /** @type {!Array} */
              var i = [that.fechas_entrega_anteproyecto[0].format("YYYY-MM-DD"), that.fechas_entrega_anteproyecto[1].format("YYYY-MM-DD")];
              console.log(conv_reverse_sort);
              _Trans2.default.post("/api/carrera/periodo", {
                id_carrera : malakh,
                periodo_residencia : CircularList,
                ciclo : rZone,
                fechas_periodo : conv_reverse_sort,
                fechas_entrega_anteproyecto : i
              }).then(function(e) {
                console.log(e);
                if (200 === e.status) {
                  form.resetFields();
                  _deepAssign2.default.success("Periodo agregado satisfactoriamente!");
                } else {
                  _normalizeDataUri2.default.error({
                    title : "Error al guardar el el periodo. Revisar los siguientes campos",
                    content : _prepareStyleProperties2.default.createElement("div", null, e.data.errores),
                    onOk : function() {
                    }
                  });
                }
              }).catch(function(mnemonics) {
                _deepAssign2.default.error(mnemonics);
              });
            }
          });
        }, _this.saveFormRef = function(data) {
          /** @type {!Object} */
          _this.form = data;
        }, _this.state = {
          departamento : data.departamento
        }, _this;
      }
      return _inherits(Agent, _EventEmitter), _createClass(Agent, [{
        key : "render",
        value : function() {
          var _txs = this.state.departamento;
          return _prepareStyleProperties2.default.createElement("div", null, _prepareStyleProperties2.default.createElement(FormioElement, {
            ref : this.saveFormRef,
            onCreate : this.handleCreate,
            departamento : _txs,
            checkPeriodoEntregaAnteproyecto : this.checkPeriodoEntregaAnteproyecto
          }));
        }
      }]), Agent;
    }(_prepareStyleProperties.Component);
    t.default = offsetFromCenter;
  },
  1050 : function(formatters, customFormatters) {
  },
  1068 : function(cond, t, __webpack_require__) {
    /**
     * @param {!Object} obj
     * @return {?}
     */
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default : obj
      };
    }
    /**
     * @param {!AudioNode} instance
     * @param {!Function} Constructor
     * @return {undefined}
     */
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    /**
     * @param {string} self
     * @param {string} call
     * @return {?}
     */
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return !call || "object" != typeof call && "function" != typeof call ? self : call;
    }
    /**
     * @param {!Object} subClass
     * @param {!Object} superClass
     * @return {undefined}
     */
    function _inherits(subClass, superClass) {
      if ("function" != typeof superClass && null !== superClass) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      /** @type {!Object} */
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor : {
          value : subClass,
          enumerable : false,
          writable : true,
          configurable : true
        }
      });
      if (superClass) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(subClass, superClass);
        } else {
          /** @type {!Object} */
          subClass.__proto__ = superClass;
        }
      }
    }
    Object.defineProperty(t, "__esModule", {
      value : true
    });
    var _suggestList = (__webpack_require__(31), __webpack_require__(32));
    var _suggestList2 = _interopRequireDefault(_suggestList);
    var _DraggableCore = (__webpack_require__(50), __webpack_require__(51));
    var _DraggableCore2 = _interopRequireDefault(_DraggableCore);
    var _normalizeDataUri = (__webpack_require__(104), __webpack_require__(105));
    var _normalizeDataUri2 = _interopRequireDefault(_normalizeDataUri);
    var _UiIcon = (__webpack_require__(35), __webpack_require__(13));
    var _UiIcon2 = _interopRequireDefault(_UiIcon);
    var _CalendarDay = (__webpack_require__(37), __webpack_require__(36));
    var _CalendarDay2 = _interopRequireDefault(_CalendarDay);
    var _deepAssign = (__webpack_require__(15), __webpack_require__(16));
    var _deepAssign2 = _interopRequireDefault(_deepAssign);
    var _CalendarEvent = (__webpack_require__(33), __webpack_require__(34));
    var _CalendarEvent2 = _interopRequireDefault(_CalendarEvent);
    var _AboutPage = (__webpack_require__(28), __webpack_require__(29));
    var _AboutPage2 = _interopRequireDefault(_AboutPage);
    var _AppDownload = (__webpack_require__(19), __webpack_require__(20));
    var _AppDownload2 = _interopRequireDefault(_AppDownload);
    var _suggestItem = (__webpack_require__(18), __webpack_require__(22));
    var _suggestItem2 = _interopRequireDefault(_suggestItem);
    var _buildPageNumber = (__webpack_require__(24), __webpack_require__(25));
    var _buildPageNumber2 = _interopRequireDefault(_buildPageNumber);
    /** @type {function(!Object, ...(Object|null)): !Object} */
    var __ = Object.assign || function(defaultOptions) {
      /** @type {number} */
      var i = 1;
      for (; i < arguments.length; i++) {
        var ext = arguments[i];
        var key;
        for (key in ext) {
          if (Object.prototype.hasOwnProperty.call(ext, key)) {
            defaultOptions[key] = ext[key];
          }
        }
      }
      return defaultOptions;
    };
    var _createClass = function() {
      /**
       * @param {!Function} d
       * @param {string} props
       * @return {undefined}
       */
      function e(d, props) {
        /** @type {number} */
        var i = 0;
        for (; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          /** @type {boolean} */
          descriptor.configurable = true;
          if ("value" in descriptor) {
            /** @type {boolean} */
            descriptor.writable = true;
          }
          Object.defineProperty(d, descriptor.key, descriptor);
        }
      }
      return function(t, n, a) {
        return n && e(t.prototype, n), a && e(t, a), t;
      };
    }();
    var _prepareStyleProperties = __webpack_require__(0);
    var _prepareStyleProperties2 = _interopRequireDefault(_prepareStyleProperties);
    var _toHyphenCase = __webpack_require__(121);
    var _toHyphenCase2 = _interopRequireDefault(_toHyphenCase);
    var _noframeworkWaypoints = __webpack_require__(12);
    var _noframeworkWaypoints2 = _interopRequireDefault(_noframeworkWaypoints);
    var _SearchUtility = __webpack_require__(1);
    var _SearchUtility2 = _interopRequireDefault(_SearchUtility);
    var _CalendarTitle = __webpack_require__(1073);
    var _CalendarTitle2 = _interopRequireDefault(_CalendarTitle);
    var offsetFromCenter = (_buildPageNumber2.default.Option, _buildPageNumber2.default.OptGroup, _suggestItem2.default.TextArea, _AppDownload2.default.Item, function(_EventEmitter) {
      /**
       * @param {?} data
       * @return {?}
       */
      function Agent(data) {
        _classCallCheck(this, Agent);
        var $scope = _possibleConstructorReturn(this, (Agent.__proto__ || Object.getPrototypeOf(Agent)).call(this, data));
        return $scope.onInputChange = function(event) {
          $scope.setState({
            searchText : event.target.value
          });
        }, $scope.onSearch = function() {
          var result = $scope.state;
          var query = result.searchText;
          var bills = result.anteproyectos;
          /** @type {!RegExp} */
          var regex = new RegExp(query, "gi");
          $scope.setState({
            visible : false,
            filterDropdownVisible : false,
            filtered : !!query,
            filterAnteproyectos : bills.map(function(platform) {
              console.warn("record=> ", platform);
              var access_url_exists = platform.nombre ? platform.nombre.match(regex) : null;
              return access_url_exists ? __({}, platform, {
                nombre : _prepareStyleProperties2.default.createElement("span", null, platform.nombre.split(regex).map(function(b, a) {
                  return a > 0 ? [_prepareStyleProperties2.default.createElement("span", {
                    className : "highlight"
                  }, access_url_exists[0]), b] : b;
                }))
              }) : null;
            }).filter(function(canCreateDiscussions) {
              return !!canCreateDiscussions;
            })
          });
        }, $scope.showAsesorExterno = function($scope) {
          _AboutPage2.default.info({
            width : 600,
            title : "Detalles del asesor externo",
            content : _prepareStyleProperties2.default.createElement(_CalendarEvent2.default, {
              gutter : 16
            }, _prepareStyleProperties2.default.createElement("p", null, "Nombre:"), _prepareStyleProperties2.default.createElement(_suggestItem2.default, {
              readOnly : true,
              value : $scope.nombre
            }), _prepareStyleProperties2.default.createElement("p", {
              style : {
                marginTop : 10
              }
            }, "Puesto:"), _prepareStyleProperties2.default.createElement(_suggestItem2.default, {
              readOnly : true,
              value : $scope.puesto
            }), _prepareStyleProperties2.default.createElement("p", {
              style : {
                marginTop : 10
              }
            }, "Correo:"), _prepareStyleProperties2.default.createElement(_suggestItem2.default, {
              readOnly : true,
              value : $scope.usuario.correo
            }), _prepareStyleProperties2.default.createElement("p", {
              style : {
                marginTop : 10
              }
            }, " Empresa"), _prepareStyleProperties2.default.createElement(_suggestItem2.default, {
              readOnly : true,
              value : $scope.empresa.nombre
            })),
            onOk : function() {
            }
          });
        }, $scope.showAlumno = function($scope) {
          _AboutPage2.default.info({
            width : 600,
            title : "Detalles del alumno",
            content : _prepareStyleProperties2.default.createElement(_CalendarEvent2.default, {
              gutter : 16
            }, _prepareStyleProperties2.default.createElement("p", null, "Numero de control:"), _prepareStyleProperties2.default.createElement(_suggestItem2.default, {
              readOnly : true,
              value : $scope.no_control
            }), _prepareStyleProperties2.default.createElement("p", {
              style : {
                marginTop : 10
              }
            }, "Nombre:"), _prepareStyleProperties2.default.createElement(_suggestItem2.default, {
              readOnly : true,
              value : $scope.nombre + " " + $scope.ap_paterno + " " + $scope.ap_materno
            })),
            onOk : function() {
            }
          });
        }, $scope.showAnteproyecto = function(type) {
          _AboutPage2.default.info({
            maskClosable : true,
            width : "85%",
            title : "Anteproyecto",
            content : _prepareStyleProperties2.default.createElement("div", null, _prepareStyleProperties2.default.createElement(_toHyphenCase2.default, {
              file : "/api/anteproyecto/pdf/" + type,
              scale : 1.5
            })),
            onOk : function() {
            }
          });
        }, $scope.state = {
          periodo : data.periodo,
          anteproyectos : data.anteproyectos,
          filterAnteproyectos : data.anteproyectos,
          usuario : data.usuario,
          visible_correcciones : false,
          props_correcciones : {
            id_docente : null,
            id_anteproyecto : null,
            correo_alumno : null
          }
        }, $scope;
      }
      return _inherits(Agent, _EventEmitter), _createClass(Agent, [{
        key : "componentWillReceiveProps",
        value : function(recB) {
          this.state = {
            periodo : recB.periodo,
            anteproyectos : recB.anteproyectos,
            filterAnteproyectos : recB.anteproyectos,
            usuario : recB.usuario,
            visible_correcciones : false,
            props_correcciones : {
              id_docente : null,
              id_anteproyecto : null,
              correo_alumno : null
            }
          };
        }
      }, {
        key : "showInputCorreccion",
        value : function(name, force) {
          this.setState({
            visible_correcciones : true,
            props_correcciones : {
              id_docente : this.state.usuario.id_docente,
              id_anteproyecto : name,
              correo_alumno : force
            }
          });
        }
      }, {
        key : "handleFactible",
        value : function(name, force) {
          _noframeworkWaypoints2.default.put("/api/anteproyecto/factibilidad", {
            id_docente : this.state.usuario.id_docente,
            id_anteproyecto : name,
            esFactible : force ? "factible" : "no_factible"
          }).then(function(getFilesReply) {
            if (200 === getFilesReply.status) {
              _deepAssign2.default.success("Anteproyecto actualizado !");
            } else {
              _AboutPage2.default.error({
                title : "Error al actualizar anteproyecto. Revisar los siguientes campos",
                content : _prepareStyleProperties2.default.createElement("div", null, getFilesReply.data.errores),
                onOk : function() {
                }
              });
            }
          }).catch(function(canCreateDiscussions) {
            _deepAssign2.default.error("Error en el servidor verificar con el encargado.");
          });
        }
      }, {
        key : "render",
        value : function() {
          var self = this;
          var state = this.state;
          var data = (state.anteproyectos, state.filterAnteproyectos);
          var readFunction = state.periodo;
          var lBound = readFunction.fecha_inicio_entrega_anteproyecto;
          var uBound = readFunction.fecha_fin_entrega_anteproyecto;
          var ddeClientHeight = (0, _SearchUtility2.default)().format("YYYY-MM-DD");
          console.warn(")>", data);
          /** @type {!Array} */
          var pivotColValues = [{
            className : "center-text",
            title : "Nombre",
            dataIndex : "nombre",
            key : "nombre",
            filterDropdown : _prepareStyleProperties2.default.createElement("div", {
              className : "custom-filter-dropdown"
            }, _prepareStyleProperties2.default.createElement(_suggestItem2.default, {
              ref : function(input) {
                return self.searchInput = input;
              },
              placeholder : "Buscar por nombre de anteproyecto",
              value : this.state.searchText,
              onChange : this.onInputChange,
              onPressEnter : this.onSearch
            }), _prepareStyleProperties2.default.createElement(_CalendarDay2.default, {
              type : "primary",
              onClick : this.onSearch
            }, "Buscar")),
            filterIcon : _prepareStyleProperties2.default.createElement(_UiIcon2.default, {
              type : "search",
              style : {
                color : this.state.filtered ? "#108ee9" : "#aaa"
              }
            }),
            filterDropdownVisible : this.state.filterDropdownVisible,
            onFilterDropdownVisibleChange : function(canCreateDiscussions) {
              self.setState({
                filterDropdownVisible : canCreateDiscussions,
                visible : false
              }, function() {
                return self.searchInput.focus();
              });
            }
          }, {
            className : "center-text",
            title : "Objetivo general",
            dataIndex : "objetivo_general",
            key : "objetivo_general"
          }, {
            className : "center-text",
            title : "Asesor externo",
            dataIndex : "detalles_asesor_externo",
            key : "detalles_asesor_externo",
            render : function(sb, data) {
              return _prepareStyleProperties2.default.createElement("span", null, _prepareStyleProperties2.default.createElement(_CalendarDay2.default, {
                icon : "contacts",
                onClick : function() {
                  return self.showAsesorExterno(data.detalles_asesor_externo);
                }
              }));
            }
          }, {
            className : "center-text",
            title : "Alumno",
            dataIndex : "detalles_alumno",
            key : "detalles_alumno",
            render : function(sb, data) {
              return _prepareStyleProperties2.default.createElement("span", null, _prepareStyleProperties2.default.createElement(_CalendarDay2.default, {
                icon : "solution",
                onClick : function() {
                  return self.showAlumno(data.detalles_alumno);
                }
              }));
            }
          }, {
            className : "center-text",
            title : "Anteproyecto",
            dataIndex : "anteproyecto",
            key : "anteproyecto",
            render : function(sb, data) {
              return _prepareStyleProperties2.default.createElement("span", null, _prepareStyleProperties2.default.createElement(_CalendarDay2.default, {
                style : {
                  color : "#ff5757",
                  marginRight : 3
                },
                icon : "file-pdf",
                onClick : function() {
                  return self.showAnteproyecto(data.anteproyecto);
                }
              }), _prepareStyleProperties2.default.createElement("a", {
                style : {
                  color : "#ff5757",
                  marginLeft : 3
                },
                target : "_blank",
                href : "/api/anteproyecto/pdf/" + data.anteproyecto
              }, _prepareStyleProperties2.default.createElement(_UiIcon2.default, {
                type : "select"
              })));
            }
          }, {
            className : "center-text",
            title : "Factible",
            dataIndex : "factible",
            key : "factible",
            render : function(sb, data) {
              return _prepareStyleProperties2.default.createElement("span", null, lBound <= ddeClientHeight && uBound >= ddeClientHeight ? _prepareStyleProperties2.default.createElement("span", null, _prepareStyleProperties2.default.createElement(_normalizeDataUri2.default, {
                style : {
                  marginRight : 3,
                  marginBottom : 3
                },
                defaultChecked : !(!data.revision || "factible" !== data.revision.esFactible),
                checkedChildren : "Factible",
                unCheckedChildren : _prepareStyleProperties2.default.createElement(_UiIcon2.default, {
                  type : "cross"
                }),
                onChange : function(dates) {
                  return self.handleFactible(data.id, dates);
                }
              }), _prepareStyleProperties2.default.createElement(_CalendarDay2.default, {
                style : {
                  marginLeft : 3
                },
                icon : "exception",
                onClick : function() {
                  return self.showInputCorreccion(data.id, data.detalles_alumno.usuario.correo);
                }
              }, "Correci\u00f3n")) : _prepareStyleProperties2.default.createElement("p", {
                style : {
                  color : "#ff5757"
                }
              }, "La fecha de revisi\u00f3n finalizo"));
            }
          }];
          return _prepareStyleProperties2.default.createElement("div", null, _prepareStyleProperties2.default.createElement(_CalendarEvent2.default, {
            type : "flex",
            justify : "center",
            align : "middle",
            style : {
              marginTop : 20
            }
          }, _prepareStyleProperties2.default.createElement(_suggestList2.default, {
            xs : 24,
            lg : 24
          }, _prepareStyleProperties2.default.createElement(_DraggableCore2.default, {
            bordered : true,
            title : function() {
              return "Anteproyectos registrados";
            },
            dataSource : data,
            className : "full-width",
            columns : pivotColValues,
            pagination : {
              pageSize : 8
            },
            scroll : {
              x : 2500
            }
          }))), _prepareStyleProperties2.default.createElement(_CalendarTitle2.default, {
            visible : this.state.visible_correcciones,
            id_docente : this.state.props_correcciones.id_docente,
            id_anteproyecto : this.state.props_correcciones.id_anteproyecto,
            correo_alumno : this.state.props_correcciones.correo_alumno
          }));
        }
      }]), Agent;
    }(_prepareStyleProperties.Component));
    t.default = offsetFromCenter;
  },
  1073 : function(cond, t, __webpack_require__) {
    /**
     * @param {!Object} obj
     * @return {?}
     */
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default : obj
      };
    }
    /**
     * @param {!AudioNode} instance
     * @param {!Function} Constructor
     * @return {undefined}
     */
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    /**
     * @param {string} self
     * @param {string} call
     * @return {?}
     */
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return !call || "object" != typeof call && "function" != typeof call ? self : call;
    }
    /**
     * @param {!Object} subClass
     * @param {!Object} superClass
     * @return {undefined}
     */
    function _inherits(subClass, superClass) {
      if ("function" != typeof superClass && null !== superClass) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      /** @type {!Object} */
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor : {
          value : subClass,
          enumerable : false,
          writable : true,
          configurable : true
        }
      });
      if (superClass) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(subClass, superClass);
        } else {
          /** @type {!Object} */
          subClass.__proto__ = superClass;
        }
      }
    }
    Object.defineProperty(t, "__esModule", {
      value : true
    });
    var _deepAssign = (__webpack_require__(15), __webpack_require__(16));
    var _deepAssign2 = _interopRequireDefault(_deepAssign);
    var _suggestItem = (__webpack_require__(28), __webpack_require__(29));
    var _suggestItem2 = _interopRequireDefault(_suggestItem);
    var _normalizeDataUri = (__webpack_require__(18), __webpack_require__(22));
    var _normalizeDataUri2 = _interopRequireDefault(_normalizeDataUri);
    var _UiIcon = (__webpack_require__(19), __webpack_require__(20));
    var params = _interopRequireDefault(_UiIcon);
    var _createClass = function() {
      /**
       * @param {!Function} d
       * @param {string} props
       * @return {undefined}
       */
      function e(d, props) {
        /** @type {number} */
        var i = 0;
        for (; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          /** @type {boolean} */
          descriptor.configurable = true;
          if ("value" in descriptor) {
            /** @type {boolean} */
            descriptor.writable = true;
          }
          Object.defineProperty(d, descriptor.key, descriptor);
        }
      }
      return function(t, n, a) {
        return n && e(t.prototype, n), a && e(t, a), t;
      };
    }();
    var _prepareStyleProperties = __webpack_require__(0);
    var _prepareStyleProperties2 = _interopRequireDefault(_prepareStyleProperties);
    var _classlist = (__webpack_require__(11), __webpack_require__(12));
    var _classlist2 = _interopRequireDefault(_classlist);
    var data = params.default.Item;
    var FormioElement = _normalizeDataUri2.default.TextArea;
    var DropIndicator = params.default.create()(function(config) {
      var visible = config.visible;
      var onCancel = config.onCancel;
      var onCreate = config.onCreate;
      var options = config.form;
      var lint = options.getFieldDecorator;
      return _prepareStyleProperties2.default.createElement(_suggestItem2.default, {
        visible : visible,
        title : "Correcciones para anteproyecto",
        okText : "Guardar",
        onCancel : onCancel,
        onOk : onCreate
      }, _prepareStyleProperties2.default.createElement(params.default, {
        layout : "vertical"
      }, _prepareStyleProperties2.default.createElement(data, {
        label : "Correcciones del anteproyecto"
      }, lint("comentario", {
        rules : [{
          required : true,
          message : "Debe indicar las correcciones."
        }, {
          max : 500,
          message : "Las correcciones no deben pasar 500 caracteres"
        }]
      })(_prepareStyleProperties2.default.createElement(FormioElement, {
        maxLength : "500",
        placeholder : "Escriba aqui las correcciones",
        autosize : {
          minRows : 2,
          maxRows : 6
        }
      })))));
    });
    var offsetFromCenter = function(_EventEmitter) {
      /**
       * @param {!Object} element
       * @return {?}
       */
      function Agent(element) {
        _classCallCheck(this, Agent);
        var $scope = _possibleConstructorReturn(this, (Agent.__proto__ || Object.getPrototypeOf(Agent)).call(this, element));
        return $scope.showModal = function() {
          $scope.setState({
            visible : true
          });
        }, $scope.handleCancel = function() {
          $scope.setState({
            visible : false
          });
        }, $scope.handleCreate = function() {
          var form = $scope.form;
          form.validateFields(function(canCreateDiscussions, n) {
            if (!canCreateDiscussions) {
              _classlist2.default.put("/api/anteproyecto/factibilidad/correciones", {
                id_docente : $scope.state.id_docente,
                id_anteproyecto : $scope.state.id_anteproyecto,
                comentario : n.comentario,
                correo_alumno : $scope.state.correo_alumno
              }).then(function(getFilesReply) {
                if (200 === getFilesReply.status) {
                  _deepAssign2.default.success("Se han enviado las correcciones!");
                  form.resetFields();
                  $scope.setState({
                    visible : false
                  });
                } else {
                  _suggestItem2.default.error({
                    title : "Error al enviar las correcciones. Revisar los siguientes campos",
                    content : _prepareStyleProperties2.default.createElement("div", null, getFilesReply.data.errores),
                    onOk : function() {
                    }
                  });
                }
              }).catch(function(canCreateDiscussions) {
                _deepAssign2.default.error("Error en el servidor verificar con el encargado.");
              });
            }
          });
        }, $scope.saveFormRef = function(data) {
          /** @type {!Object} */
          $scope.form = data;
        }, $scope.state = {
          id_docente : element.id_docente,
          id_anteproyecto : element.id_anteproyecto,
          correo_alumno : element.correo_alumno,
          visible : element.visible
        }, $scope;
      }
      return _inherits(Agent, _EventEmitter), _createClass(Agent, [{
        key : "componentWillReceiveProps",
        value : function(_ref) {
          var visible = _ref.visible;
          this.setState({
            id_docente : _ref.id_docente,
            id_anteproyecto : _ref.id_anteproyecto,
            correo_alumno : _ref.correo_alumno,
            visible : visible
          });
        }
      }, {
        key : "render",
        value : function() {
          return _prepareStyleProperties2.default.createElement("div", null, _prepareStyleProperties2.default.createElement(DropIndicator, {
            ref : this.saveFormRef,
            visible : this.state.visible,
            onCancel : this.handleCancel,
            onCreate : this.handleCreate
          }));
        }
      }]), Agent;
    }(_prepareStyleProperties.Component);
    t.default = offsetFromCenter;
  },
  1074 : function(module, exports, __webpack_require__) {
    /**
     * @param {!Object} obj
     * @return {?}
     */
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default : obj
      };
    }
    /**
     * @param {!AudioNode} instance
     * @param {!Function} Constructor
     * @return {undefined}
     */
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    /**
     * @param {string} self
     * @param {string} call
     * @return {?}
     */
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return !call || "object" != typeof call && "function" != typeof call ? self : call;
    }
    /**
     * @param {!Object} subClass
     * @param {!Object} superClass
     * @return {undefined}
     */
    function _inherits(subClass, superClass) {
      if ("function" != typeof superClass && null !== superClass) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      /** @type {!Object} */
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor : {
          value : subClass,
          enumerable : false,
          writable : true,
          configurable : true
        }
      });
      if (superClass) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(subClass, superClass);
        } else {
          /** @type {!Object} */
          subClass.__proto__ = superClass;
        }
      }
    }
    Object.defineProperty(exports, "__esModule", {
      value : true
    });
    var _suggestList = (__webpack_require__(31), __webpack_require__(32));
    var _suggestList2 = _interopRequireDefault(_suggestList);
    var _DraggableCore = (__webpack_require__(50), __webpack_require__(51));
    var _DraggableCore2 = _interopRequireDefault(_DraggableCore);
    var _normalizeDataUri = (__webpack_require__(104), __webpack_require__(105));
    var _normalizeDataUri2 = _interopRequireDefault(_normalizeDataUri);
    var _UiIcon = (__webpack_require__(470), __webpack_require__(1075));
    var _UiIcon2 = _interopRequireDefault(_UiIcon);
    var _CalendarDay = (__webpack_require__(35), __webpack_require__(13));
    var _CalendarDay2 = _interopRequireDefault(_CalendarDay);
    var _AboutPage = (__webpack_require__(37), __webpack_require__(36));
    var _AboutPage2 = _interopRequireDefault(_AboutPage);
    var _RendererPatcher = (__webpack_require__(15), __webpack_require__(16));
    var inst = _interopRequireDefault(_RendererPatcher);
    var _CalendarEvent = (__webpack_require__(33), __webpack_require__(34));
    var _CalendarEvent2 = _interopRequireDefault(_CalendarEvent);
    var _deepAssign = (__webpack_require__(18), __webpack_require__(22));
    var _deepAssign2 = _interopRequireDefault(_deepAssign);
    var _AppDownload = (__webpack_require__(28), __webpack_require__(29));
    var _AppDownload2 = _interopRequireDefault(_AppDownload);
    var _suggestItem = (__webpack_require__(24), __webpack_require__(25));
    var _suggestItem2 = _interopRequireDefault(_suggestItem);
    /** @type {function(!Object, ...(Object|null)): !Object} */
    var callback = Object.assign || function(defaultOptions) {
      /** @type {number} */
      var i = 1;
      for (; i < arguments.length; i++) {
        var ext = arguments[i];
        var key;
        for (key in ext) {
          if (Object.prototype.hasOwnProperty.call(ext, key)) {
            defaultOptions[key] = ext[key];
          }
        }
      }
      return defaultOptions;
    };
    var _createClass = function() {
      /**
       * @param {!Function} d
       * @param {string} props
       * @return {undefined}
       */
      function e(d, props) {
        /** @type {number} */
        var i = 0;
        for (; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          /** @type {boolean} */
          descriptor.configurable = true;
          if ("value" in descriptor) {
            /** @type {boolean} */
            descriptor.writable = true;
          }
          Object.defineProperty(d, descriptor.key, descriptor);
        }
      }
      return function(t, n, a) {
        return n && e(t.prototype, n), a && e(t, a), t;
      };
    }();
    var _prepareStyleProperties = __webpack_require__(0);
    var _prepareStyleProperties2 = _interopRequireDefault(_prepareStyleProperties);
    var _buildPageNumber = __webpack_require__(121);
    var _buildPageNumber2 = _interopRequireDefault(_buildPageNumber);
    var _noframeworkWaypoints = __webpack_require__(12);
    var _noframeworkWaypoints2 = _interopRequireDefault(_noframeworkWaypoints);
    var _custom = __webpack_require__(1);
    var _custom2 = _interopRequireDefault(_custom);
    var Option = _suggestItem2.default.Option;
    var SuggestList = (_suggestItem2.default.OptGroup, function(_EventEmitter) {
      /**
       * @param {?} data
       * @return {?}
       */
      function Agent(data) {
        _classCallCheck(this, Agent);
        var _this = _possibleConstructorReturn(this, (Agent.__proto__ || Object.getPrototypeOf(Agent)).call(this, data));
        return _this.onInputChange = function(event) {
          _this.setState({
            searchText : event.target.value
          });
        }, _this.onSearch = function() {
          var state = _this.state;
          var searchText = state.searchText;
          var n = state.anteproyectos;
          /** @type {!RegExp} */
          var re = new RegExp(searchText, "gi");
          _this.setState({
            visible : false,
            filterDropdownVisible : false,
            filtered : !!searchText,
            filterAnteproyectos : n.map(function(metadata) {
              var isSpecialComment = metadata.nombre ? metadata.nombre.match(re) : null;
              return isSpecialComment ? callback({}, metadata, {
                nombre : _prepareStyleProperties2.default.createElement("span", null, metadata.nombre.split(re).map(function(b, a) {
                  return a > 0 ? [_prepareStyleProperties2.default.createElement("span", {
                    className : "highlight"
                  }, isSpecialComment[0]), b] : b;
                }))
              }) : null;
            }).filter(function(canCreateDiscussions) {
              return !!canCreateDiscussions;
            })
          });
        }, _this.showAsesorExterno = function($scope) {
          _AppDownload2.default.info({
            width : 600,
            title : "Detalles del asesor externo",
            content : _prepareStyleProperties2.default.createElement(_CalendarEvent2.default, {
              gutter : 16
            }, _prepareStyleProperties2.default.createElement("p", null, "Nombre:"), _prepareStyleProperties2.default.createElement(_deepAssign2.default, {
              readOnly : true,
              value : $scope.nombre
            }), _prepareStyleProperties2.default.createElement("p", {
              style : {
                marginTop : 10
              }
            }, "Puesto:"), _prepareStyleProperties2.default.createElement(_deepAssign2.default, {
              readOnly : true,
              value : $scope.puesto
            }), _prepareStyleProperties2.default.createElement("p", {
              style : {
                marginTop : 10
              }
            }, "Correo:"), _prepareStyleProperties2.default.createElement(_deepAssign2.default, {
              readOnly : true,
              value : $scope.usuario.correo
            }), _prepareStyleProperties2.default.createElement("p", {
              style : {
                marginTop : 10
              }
            }, " Empresa"), _prepareStyleProperties2.default.createElement(_deepAssign2.default, {
              readOnly : true,
              value : $scope.empresa.nombre
            })),
            onOk : function() {
            }
          });
        }, _this.showAlumno = function($scope) {
          _AppDownload2.default.info({
            width : 600,
            title : "Detalles del alumno",
            content : _prepareStyleProperties2.default.createElement(_CalendarEvent2.default, {
              gutter : 16
            }, _prepareStyleProperties2.default.createElement("p", null, "Numero de control:"), _prepareStyleProperties2.default.createElement(_deepAssign2.default, {
              readOnly : true,
              value : $scope.no_control
            }), _prepareStyleProperties2.default.createElement("p", {
              style : {
                marginTop : 10
              }
            }, "Nombre:"), _prepareStyleProperties2.default.createElement(_deepAssign2.default, {
              readOnly : true,
              value : $scope.nombre + " " + $scope.ap_paterno + " " + $scope.ap_materno
            })),
            onOk : function() {
            }
          });
        }, _this.showAnteproyecto = function(type) {
          _AppDownload2.default.info({
            maskClosable : true,
            width : "85%",
            title : "Anteproyecto",
            content : _prepareStyleProperties2.default.createElement("div", null, _prepareStyleProperties2.default.createElement(_buildPageNumber2.default, {
              file : "/api/anteproyecto/pdf/" + type,
              scale : 1.5
            })),
            onOk : function() {
            }
          });
        }, _this.handleDictamen = function($routeParams, url) {
          /** @type {string} */
          var url_host = url ? "aprobado" : "no aprobado";
          var nombre = $routeParams.nombre;
          var runningConnector = $routeParams.asesor_interno;
          var topicCategoryUrl = $routeParams.detalles_asesor_externo;
          if (null === nombre) {
            inst.default.warn("Para completar el proceso, falta el nombre del anteproyecto.");
          } else {
            if (null === topicCategoryUrl) {
              inst.default.warn("Para completar el proceso, falta el asesor externo.");
            } else {
              if (null === runningConnector) {
                inst.default.warn("Para completar el proceso, falta el asesor interno.");
              } else {
                _noframeworkWaypoints2.default.put("/api/anteproyecto/set_dictamen", {
                  id_anteproyecto : $routeParams.id,
                  dictamen : url_host
                }).then(function(getFilesReply) {
                  if (200 === getFilesReply.status) {
                    inst.default.success("Anteproyecto actualizado!");
                  } else {
                    _AppDownload2.default.error({
                      title : "Error al actualizar anteproyecto. Revisar los siguientes campos",
                      content : _prepareStyleProperties2.default.createElement("div", null, getFilesReply.data.errores),
                      onOk : function() {
                      }
                    });
                  }
                }).catch(function(canCreateDiscussions) {
                  inst.default.error("Error en el servidor verificar con el encargado.");
                });
              }
            }
          }
        }, _this.handleAsesorInterno = function(e, islongclick) {
          _noframeworkWaypoints2.default.put("/api/anteproyecto/set_asesor_interno", {
            id_asesor_interno : e,
            id_anteproyecto : islongclick
          }).then(function(getFilesReply) {
            if (200 === getFilesReply.status) {
              inst.default.success("Anteproyecto actualizado!");
              _this.props.updatePeriodo();
            } else {
              _AppDownload2.default.error({
                title : "Error al actualizar anteproyecto. Revisar los siguientes campos",
                content : _prepareStyleProperties2.default.createElement("div", null, getFilesReply.data.errores),
                onOk : function() {
                }
              });
            }
          }).catch(function(canCreateDiscussions) {
            inst.default.error("Error en el servidor verificar con el encargado.");
          });
        }, _this.state = {
          anteproyectos : data.anteproyectos,
          filterAnteproyectos : data.anteproyectos,
          usuario : data.usuario,
          periodo : data.periodo
        }, _this;
      }
      return _inherits(Agent, _EventEmitter), _createClass(Agent, [{
        key : "componentWillReceiveProps",
        value : function(recB) {
          this.state = {
            anteproyectos : recB.anteproyectos,
            filterAnteproyectos : recB.anteproyectos,
            usuario : recB.usuario,
            periodo : recB.periodo
          };
        }
      }, {
        key : "render",
        value : function() {
          var self = this;
          var state = this.state;
          var dataSource2 = (state.anteproyectos, state.filterAnteproyectos);
          var readFunction = state.periodo;
          var lBound = readFunction.fecha_inicio_entrega_anteproyecto;
          var uBound = readFunction.fecha_fin_entrega_anteproyecto;
          var ddeClientHeight = (0, _custom2.default)().format("YYYY-MM-DD");
          /** @type {!Array} */
          var pivotColValues = [{
            width : 200,
            fixed : "left",
            className : "center-text",
            title : "Nombre",
            dataIndex : "nombre",
            key : "nombre",
            filterDropdown : _prepareStyleProperties2.default.createElement("div", {
              className : "custom-filter-dropdown"
            }, _prepareStyleProperties2.default.createElement(_deepAssign2.default, {
              ref : function(input) {
                return self.searchInput = input;
              },
              placeholder : "Buscar por nombre de anteproyecto",
              value : this.state.searchText,
              onChange : this.onInputChange,
              onPressEnter : this.onSearch
            }), _prepareStyleProperties2.default.createElement(_AboutPage2.default, {
              type : "primary",
              onClick : this.onSearch
            }, "Buscar")),
            filterIcon : _prepareStyleProperties2.default.createElement(_CalendarDay2.default, {
              type : "search",
              style : {
                color : this.state.filtered ? "#108ee9" : "#aaa"
              }
            }),
            filterDropdownVisible : this.state.filterDropdownVisible,
            onFilterDropdownVisibleChange : function(canCreateDiscussions) {
              self.setState({
                filterDropdownVisible : canCreateDiscussions,
                visible : false
              }, function() {
                return self.searchInput.focus();
              });
            }
          }, {
            className : "center-text",
            title : "Objetivo general",
            dataIndex : "objetivo_general",
            key : "objetivo_general"
          }, {
            className : "center-text",
            title : "Asesor externo",
            dataIndex : "detalles_asesor_externo",
            key : "detalles_asesor_externo",
            render : function(sb, data) {
              return _prepareStyleProperties2.default.createElement("span", null, _prepareStyleProperties2.default.createElement(_AboutPage2.default, {
                icon : "contacts",
                onClick : function() {
                  return self.showAsesorExterno(data.detalles_asesor_externo);
                }
              }));
            }
          }, {
            className : "center-text",
            title : "Alumno",
            dataIndex : "detalles_alumno",
            key : "detalles_alumno",
            render : function(sb, data) {
              return _prepareStyleProperties2.default.createElement("span", null, _prepareStyleProperties2.default.createElement(_AboutPage2.default, {
                icon : "solution",
                onClick : function() {
                  return self.showAlumno(data.detalles_alumno);
                }
              }));
            }
          }, {
            className : "center-text",
            title : "Anteproyecto",
            dataIndex : "anteproyecto",
            key : "anteproyecto",
            render : function(sb, data) {
              return _prepareStyleProperties2.default.createElement("span", null, _prepareStyleProperties2.default.createElement(_AboutPage2.default, {
                style : {
                  color : "#ff5757",
                  marginRight : 3
                },
                icon : "file-pdf",
                onClick : function() {
                  return self.showAnteproyecto(data.anteproyecto);
                }
              }), _prepareStyleProperties2.default.createElement("a", {
                style : {
                  color : "#ff5757",
                  marginLeft : 3
                },
                target : "_blank",
                href : "/api/anteproyecto/pdf/" + data.anteproyecto
              }, _prepareStyleProperties2.default.createElement(_CalendarDay2.default, {
                type : "select"
              })));
            }
          }, {
            className : "center-text",
            title : "% de factiblidad",
            dataIndex : "porcentaje_factibilidad",
            key : "porcentaje_factibilidad",
            render : function(notify, options) {
              return _prepareStyleProperties2.default.createElement("span", null, _prepareStyleProperties2.default.createElement(_UiIcon2.default, {
                content : options.revisiones,
                title : "Revisi\u00f3n de docentes"
              }, _prepareStyleProperties2.default.createElement("p", {
                style : {
                  color : "#4da1ff"
                }
              }, options.porcentaje_factibilidad + " %")));
            }
          }, {
            width : 150,
            className : "center-text",
            title : "Dictamen",
            dataIndex : "dictamen",
            key : "dictamen",
            render : function(sb, data) {
              return _prepareStyleProperties2.default.createElement("span", null, lBound <= ddeClientHeight && uBound >= ddeClientHeight ? _prepareStyleProperties2.default.createElement(_normalizeDataUri2.default, {
                checkedChildren : "Aprobado",
                defaultChecked : "aprobado" === data.dictamen,
                unCheckedChildren : "No aprobado",
                onChange : function(x) {
                  return self.handleDictamen(data, x);
                }
              }) : _prepareStyleProperties2.default.createElement("p", {
                style : {
                  color : "#ff5757"
                }
              }, "La fecha de revisi\u00f3n finalizo"));
            }
          }, {
            width : 300,
            className : "center-text",
            title : "Asesor interno",
            dataIndex : "asesor_interno",
            key : "asesor_inteno",
            render : function(sb, data) {
              return _prepareStyleProperties2.default.createElement("span", null, _prepareStyleProperties2.default.createElement(_suggestItem2.default, {
                placeholder : "Seleccionde al asesor interno",
                style : {
                  width : "80%"
                },
                onChange : function(e) {
                  return self.handleAsesorInterno(e, data.id);
                },
                defaultValue : data.asesor_interno ? "" + data.asesor_interno.id : null
              }, readFunction.carrera.docentes_carreras.map(function(sentRawMessage, awsKey) {
                return _prepareStyleProperties2.default.createElement(Option, {
                  key : awsKey,
                  value : "" + sentRawMessage.docente.id
                }, sentRawMessage.docente.titulo + " " + sentRawMessage.docente.nombre + " " + sentRawMessage.docente.ap_paterno + " " + sentRawMessage.docente.ap_materno);
              })));
            }
          }];
          return _prepareStyleProperties2.default.createElement(_CalendarEvent2.default, {
            type : "flex",
            justify : "center",
            align : "middle",
            style : {
              marginTop : 20
            }
          }, _prepareStyleProperties2.default.createElement(_suggestList2.default, {
            xs : 24,
            lg : 24
          }, _prepareStyleProperties2.default.createElement(_DraggableCore2.default, {
            bordered : true,
            title : function() {
              return "Registro de dictamen y selecci\u00f3n de asesores internos";
            },
            dataSource : dataSource2,
            className : "full-width",
            columns : pivotColValues,
            pagination : {
              pageSize : 8
            },
            scroll : {
              x : 2500
            }
          })));
        }
      }]), Agent;
    }(_prepareStyleProperties.Component));
    exports.default = SuggestList;
  },
  1076 : function(cond, t, __webpack_require__) {
    /**
     * @param {!Object} obj
     * @return {?}
     */
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default : obj
      };
    }
    /**
     * @param {!AudioNode} instance
     * @param {!Function} Constructor
     * @return {undefined}
     */
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    /**
     * @param {string} self
     * @param {string} call
     * @return {?}
     */
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return !call || "object" != typeof call && "function" != typeof call ? self : call;
    }
    /**
     * @param {!Object} subClass
     * @param {!Object} superClass
     * @return {undefined}
     */
    function _inherits(subClass, superClass) {
      if ("function" != typeof superClass && null !== superClass) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      /** @type {!Object} */
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor : {
          value : subClass,
          enumerable : false,
          writable : true,
          configurable : true
        }
      });
      if (superClass) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(subClass, superClass);
        } else {
          /** @type {!Object} */
          subClass.__proto__ = superClass;
        }
      }
    }
    Object.defineProperty(t, "__esModule", {
      value : true
    });
    var _DraggableCore = (__webpack_require__(48), __webpack_require__(49));
    var _DraggableCore2 = _interopRequireDefault(_DraggableCore);
    var _deepAssign = (__webpack_require__(33), __webpack_require__(34));
    var _deepAssign2 = _interopRequireDefault(_deepAssign);
    var _normalizeDataUri = (__webpack_require__(31), __webpack_require__(32));
    var _normalizeDataUri2 = _interopRequireDefault(_normalizeDataUri);
    var _UiIcon = (__webpack_require__(87), __webpack_require__(74));
    var _UiIcon2 = _interopRequireDefault(_UiIcon);
    var _CalendarDay = (__webpack_require__(77), __webpack_require__(78));
    var _CalendarDay2 = _interopRequireDefault(_CalendarDay);
    var _AboutPage = (__webpack_require__(18), __webpack_require__(22));
    var _AboutPage2 = _interopRequireDefault(_AboutPage);
    var _CalendarEvent = (__webpack_require__(104), __webpack_require__(105));
    var _CalendarEvent2 = _interopRequireDefault(_CalendarEvent);
    var _CalendarTitle = (__webpack_require__(37), __webpack_require__(36));
    var _CalendarTitle2 = _interopRequireDefault(_CalendarTitle);
    var _AppDownload = (__webpack_require__(15), __webpack_require__(16));
    var _AppDownload2 = _interopRequireDefault(_AppDownload);
    var _parametrize = (__webpack_require__(50), __webpack_require__(51));
    var _parametrize2 = _interopRequireDefault(_parametrize);
    var _buildPageNumber = (__webpack_require__(28), __webpack_require__(29));
    var _buildPageNumber2 = _interopRequireDefault(_buildPageNumber);
    var _SearchableTable = (__webpack_require__(35), __webpack_require__(13));
    var _SearchableTable2 = _interopRequireDefault(_SearchableTable);
    var _suggestItem = (__webpack_require__(19), __webpack_require__(20));
    var _suggestItem2 = _interopRequireDefault(_suggestItem);
    var _suggestList = (__webpack_require__(88), __webpack_require__(89));
    var _suggestList2 = _interopRequireDefault(_suggestList);
    var _createClass = function() {
      /**
       * @param {!Function} d
       * @param {string} props
       * @return {undefined}
       */
      function e(d, props) {
        /** @type {number} */
        var i = 0;
        for (; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          /** @type {boolean} */
          descriptor.configurable = true;
          if ("value" in descriptor) {
            /** @type {boolean} */
            descriptor.writable = true;
          }
          Object.defineProperty(d, descriptor.key, descriptor);
        }
      }
      return function(t, n, a) {
        return n && e(t.prototype, n), a && e(t, a), t;
      };
    }();
    var _prepareStyleProperties = __webpack_require__(0);
    var _prepareStyleProperties2 = _interopRequireDefault(_prepareStyleProperties);
    var _noframeworkWaypoints = __webpack_require__(1);
    var _noframeworkWaypoints2 = _interopRequireDefault(_noframeworkWaypoints);
    var _insertCss = __webpack_require__(45);
    var _insertCss2 = _interopRequireDefault(_insertCss);
    var _toHyphenCase = __webpack_require__(12);
    var _toHyphenCase2 = _interopRequireDefault(_toHyphenCase);
    var _RendererPatcher = __webpack_require__(495);
    var _RendererPatcher2 = _interopRequireDefault(_RendererPatcher);
    var NumberPicker = _suggestList2.default.TabPane;
    var Route = _suggestItem2.default.Item;
    var offsetFromCenter = function(_EventEmitter) {
      /**
       * @param {?} data
       * @return {?}
       */
      function Agent(data) {
        _classCallCheck(this, Agent);
        var _this = _possibleConstructorReturn(this, (Agent.__proto__ || Object.getPrototypeOf(Agent)).call(this, data));
        return _this.updateProyecto = function() {
          _this.props.updateProyecto();
        }, _this.showSoluciones = function(buildInTemplates) {
          /** @type {!Array} */
          var pivotColValues = [{
            title : "Solucionado",
            dataIndex : "solucionado",
            key : "solucionado",
            render : function(e, options) {
              return _prepareStyleProperties2.default.createElement(_SearchableTable2.default, {
                type : options.solucionado ? "check" : "close"
              });
            }
          }, {
            title : "Soluci\u00f3n",
            dataIndex : "solucion",
            key : "solucion"
          }];
          var dataSource2 = buildInTemplates.map(function(target_workspace, awsKey) {
            return {
              key : awsKey,
              id : target_workspace.id,
              solucionado : target_workspace.solucionado,
              solucion : target_workspace.solucion
            };
          });
          _buildPageNumber2.default.info({
            width : 800,
            title : "Soluciones recomendadas",
            content : _prepareStyleProperties2.default.createElement("div", null, _prepareStyleProperties2.default.createElement(_parametrize2.default, {
              size : "small",
              columns : pivotColValues,
              dataSource : dataSource2,
              pagination : {
                pageSize : 5
              }
            })),
            onOk : function() {
            }
          });
        }, _this.changeSeguimiento = function(suppressDisabledCheck) {
          _this.setState({
            id_seguimiento : suppressDisabledCheck,
            visible_observacion : false
          });
        }, _this.showAddObservacionSeguimiento = function() {
          _this.setState({
            visible_observacion : true
          });
        }, _this.onChangeObservacion = function(canCreateDiscussions, inEditorHeight) {
          _toHyphenCase2.default.put("/api/proyecto/revision_seguimiento", {
            id_revision_seguimiento : canCreateDiscussions,
            solucionado : inEditorHeight
          }).then(function(testsStatus) {
            if (200 === testsStatus.status) {
              _AppDownload2.default.success("La revisi\u00f3n se ha actulizado satisfactoriamente");
            } else {
              _AppDownload2.default.error("Error al actualizar la revisi\u00f3n, favor de reportar al administrador.");
            }
          });
        }, _this.state = {
          proyecto : data.proyecto,
          usuario : data.usuario,
          id_seguimiento : -1,
          visible_observacion : false
        }, _this;
      }
      return _inherits(Agent, _EventEmitter), _createClass(Agent, [{
        key : "componentWillReceiveProps",
        value : function(recB) {
          this.setState({
            proyecto : recB.proyecto,
            usuario : recB.usuario,
            id_seguimiento : -1,
            visible_observacion : false
          });
        }
      }, {
        key : "render",
        value : function() {
          var e = this;
          var that = this.state;
          var template = that.proyecto;
          var n = that.usuario;
          var selected = that.id_seguimiento;
          var isVisible = that.visible_observacion;
          var date = (0, _noframeworkWaypoints2.default)().format("YYYY-MM-DD");
          var dataSource2 = template.observaciones.filter(function(element) {
            return "plan_de_trabajo" === element.tipo;
          }).map(function(target_workspace) {
            return {
              key : _insertCss2.default.v1(),
              id : target_workspace.id,
              observacion : target_workspace.observacion,
              solucionada : target_workspace.solucionada
            };
          });
          var memeDataSource = template.observaciones.filter(function(element) {
            return "cronograma" === element.tipo;
          }).map(function(target_workspace) {
            return {
              key : _insertCss2.default.v1(),
              id : target_workspace.id,
              observacion : target_workspace.observacion,
              solucionada : target_workspace.solucionada
            };
          });
          var unflatDataSource = template.asesorias.map(function(target_workspace) {
            return {
              key : _insertCss2.default.v1(),
              id : target_workspace.id,
              fecha : (0, _noframeworkWaypoints2.default)(target_workspace.fecha, "YYYY-MM-DD").format("ll"),
              temas_a_asesorar : target_workspace.temas_a_asesorar,
              url_avance : target_workspace.url_avance,
              soluciones_recomendadas : target_workspace.soluciones_recomendadas,
              permitir_generar_formato : target_workspace.permitir_generar_formato
            };
          });
          var swimlaneToCheck = template.seguimientos_proyecto.find(function(sound) {
            return sound.id == selected;
          });
          /** @type {!Array} */
          var nextDS = [];
          if (swimlaneToCheck) {
            nextDS = swimlaneToCheck.revisiones_seguimiento.map(function(newBookmark, canCreateDiscussions) {
              return {
                key : _insertCss2.default.v1(),
                id : newBookmark.id,
                observacion : newBookmark.observacion,
                solucionado : newBookmark.solucionado,
                fecha : (0, _noframeworkWaypoints2.default)(newBookmark.createdAt).utc().format("LL"),
                docente : newBookmark.docente
              };
            });
          }
          /** @type {!Array} */
          var pivotColValues = [{
            title : "Observaci\u00f3n",
            dataIndex : "observacion",
            key : "observacion"
          }];
          /** @type {!Array} */
          var columnsToDisplay = [{
            className : "center-text",
            title : "Fecha",
            dataIndex : "fecha",
            key : "fecha"
          }, {
            className : "center-text",
            title : "Temas a asesorar",
            dataIndex : "temas_a_asesorar",
            key : "temas_a_asesorar"
          }, {
            className : "center-text",
            title : "Avance",
            dataIndex : "url_avance",
            key : "url_avance",
            render : function(notify, options) {
              return _prepareStyleProperties2.default.createElement("a", {
                href : options.url_avance,
                target : "_blank"
              }, "Archivo de avance", _prepareStyleProperties2.default.createElement(_SearchableTable2.default, {
                type : "file-pdf"
              }));
            }
          }, {
            className : "center-text",
            title : "Soluciones recomendadas",
            dataIndex : "soluciones_recomendadas",
            key : "soluciones_recomendadas",
            render : function(sb, data) {
              return _prepareStyleProperties2.default.createElement("span", null, _prepareStyleProperties2.default.createElement(_CalendarTitle2.default, {
                style : {
                  marginLeft : 2,
                  marginRight : 2
                },
                icon : "bars",
                onClick : function() {
                  return e.showSoluciones(data.soluciones_recomendadas);
                }
              }, "Soluciones"));
            }
          }];
          /** @type {!Array} */
          var columnsWithWidths = [{
            className : "center-text",
            title : "Fecha de observaci\u00f3n",
            dataIndex : "fecha",
            key : "fecha"
          }, {
            title : "Solucionado",
            dataIndex : "solucionado",
            key : "solucionado",
            render : function(index, data) {
              return _prepareStyleProperties2.default.createElement("span", null, data.docente.id === n.id_docente ? _prepareStyleProperties2.default.createElement(_CalendarEvent2.default, {
                onChange : function(inEditorHeight) {
                  return e.onChangeObservacion(data.id, inEditorHeight);
                },
                defaultChecked : data.solucionado,
                checkedChildren : "Solucionado",
                unCheckedChildren : _prepareStyleProperties2.default.createElement(_SearchableTable2.default, {
                  type : "cross"
                })
              }) : _prepareStyleProperties2.default.createElement("p", null, data.solucionado ? "Si" : "No"));
            }
          }, {
            className : "center-text",
            title : "Realizado por",
            dataIndex : "docente",
            key : "docente",
            render : function(canvas, lagOffset) {
              return _prepareStyleProperties2.default.createElement("p", null, lagOffset.docente.titulo + " " + lagOffset.docente.nombre + " " + lagOffset.docente.ap_paterno + " " + lagOffset.docente.ap_materno);
            }
          }, {
            className : "center-text",
            title : "Observaci\u00f3n",
            dataIndex : "observacion",
            key : "observacion"
          }];
          return _prepareStyleProperties2.default.createElement(_suggestList2.default, {
            style : {
              marginTop : 30
            },
            key : ".103.",
            defaultActiveKey : "1"
          }, _prepareStyleProperties2.default.createElement(NumberPicker, {
            tab : _prepareStyleProperties2.default.createElement("span", null, _prepareStyleProperties2.default.createElement(_SearchableTable2.default, {
              type : "book"
            }), "Proyecto"),
            key : "proyecto"
          }, _prepareStyleProperties2.default.createElement(_suggestItem2.default, null, _prepareStyleProperties2.default.createElement(Route, {
            label : "T\u00edtulo: "
          }, _prepareStyleProperties2.default.createElement(_AboutPage2.default, {
            value : template.anteproyecto.nombre,
            readOnly : true
          })), _prepareStyleProperties2.default.createElement(Route, {
            label : "Objetivo general: "
          }, _prepareStyleProperties2.default.createElement(_AboutPage2.default, {
            value : template.anteproyecto.objetivo_general,
            readOnly : true
          })), _prepareStyleProperties2.default.createElement(Route, {
            label : "Anteproyecto: "
          }, _prepareStyleProperties2.default.createElement(_CalendarDay2.default, {
            listType : "picture-card",
            fileList : [{
              uid : -1,
              name : "anteproyecto.pdf",
              status : "done",
              url : "/api/anteproyecto/pdf/" + template.anteproyecto.path_file_anteproyecto
            }]
          }))), _prepareStyleProperties2.default.createElement(_deepAssign2.default, {
            className : "border-top"
          }, _prepareStyleProperties2.default.createElement(_normalizeDataUri2.default, {
            xs : 24,
            lg : 6
          }, _prepareStyleProperties2.default.createElement("h2", {
            style : {
              marginBottom : 20
            }
          }, "Plan de trabajo"), _prepareStyleProperties2.default.createElement(Route, {
            label : _prepareStyleProperties2.default.createElement("span", null, "Plan de trabajo\u00a0", _prepareStyleProperties2.default.createElement(_UiIcon2.default, {
              title : "Ultima fecha de actualizaci\u00f3n: " + (0, _noframeworkWaypoints2.default)(template.updatedAt).utc().format("ll")
            }, _prepareStyleProperties2.default.createElement(_SearchableTable2.default, {
              type : "clock-circle-o"
            })))
          }, _prepareStyleProperties2.default.createElement(_CalendarDay2.default, {
            className : "file-preview",
            style : {
              width : 600
            },
            listType : "picture-card",
            fileList : [{
              uid : -1,
              name : "plan_de_trabajo.pdf",
              status : "done",
              url : "/api/plan_de_trabajo/pdf/" + template.filename_plan_trabajo
            }]
          }))), _prepareStyleProperties2.default.createElement(_normalizeDataUri2.default, {
            xs : 24,
            lg : 18
          }, _prepareStyleProperties2.default.createElement(_parametrize2.default, {
            title : function() {
              return "Observaciones de plan de trabajo";
            },
            columns : pivotColValues,
            dataSource : dataSource2,
            pagination : {
              pageSize : 4
            }
          }))), _prepareStyleProperties2.default.createElement(_deepAssign2.default, {
            className : "border-top"
          }, _prepareStyleProperties2.default.createElement(_normalizeDataUri2.default, {
            xs : 24,
            lg : 6
          }, _prepareStyleProperties2.default.createElement("h2", {
            style : {
              marginBottom : 20
            }
          }, "Cronograma de actividades"), _prepareStyleProperties2.default.createElement(Route, {
            label : _prepareStyleProperties2.default.createElement("span", null, "Cronograma de actividades\u00a0", _prepareStyleProperties2.default.createElement(_UiIcon2.default, {
              title : "Ultima fecha de actualizaci\u00f3n: " + (0, _noframeworkWaypoints2.default)(template.updatedAt).utc().format("ll")
            }, _prepareStyleProperties2.default.createElement(_SearchableTable2.default, {
              type : "clock-circle-o"
            })))
          }, _prepareStyleProperties2.default.createElement(_CalendarDay2.default, {
            className : "file-preview",
            style : {
              width : 600
            },
            listType : "picture-card",
            fileList : [{
              uid : -1,
              name : "cronograma.pdf",
              status : "done",
              url : "/api/cronograma/pdf/" + template.filename_cronograma
            }],
            onRemove : false
          }))), _prepareStyleProperties2.default.createElement(_normalizeDataUri2.default, {
            xs : 24,
            lg : 18
          }, _prepareStyleProperties2.default.createElement(_parametrize2.default, {
            title : function() {
              return "Observaciones del cronograma de actividades";
            },
            columns : pivotColValues,
            dataSource : memeDataSource,
            pagination : {
              pageSize : 4
            }
          })))), _prepareStyleProperties2.default.createElement(NumberPicker, {
            tab : _prepareStyleProperties2.default.createElement("span", null, _prepareStyleProperties2.default.createElement(_SearchableTable2.default, {
              type : "solution"
            }), "Asesor\u00edas"),
            key : "asesorias"
          }, _prepareStyleProperties2.default.createElement(_deepAssign2.default, null, _prepareStyleProperties2.default.createElement(_normalizeDataUri2.default, {
            xs : 24,
            lg : 24
          }, _prepareStyleProperties2.default.createElement(_parametrize2.default, {
            title : function() {
              return "Asesor\u00edas";
            },
            columns : columnsToDisplay,
            dataSource : unflatDataSource,
            pagination : {
              pageSize : 5
            },
            scroll : {
              x : 1200
            }
          })))), _prepareStyleProperties2.default.createElement(NumberPicker, {
            tab : _prepareStyleProperties2.default.createElement("span", null, _prepareStyleProperties2.default.createElement(_SearchableTable2.default, {
              type : "calendar"
            }), "Seguimientos"),
            key : "seguimientos"
          }, _prepareStyleProperties2.default.createElement(_suggestList2.default, {
            key : "-99",
            tabPosition : "left",
            defaultActiveKey : "-1",
            onChange : function(element) {
              return e.changeSeguimiento(element);
            }
          }, template.seguimientos_proyecto.map(function(component, a) {
            return _prepareStyleProperties2.default.createElement(NumberPicker, {
              tab : _prepareStyleProperties2.default.createElement("span", null, _prepareStyleProperties2.default.createElement(_SearchableTable2.default, {
                type : "schedule"
              }), "Seguimiento " + (a + 1)),
              key : component.id
            }, date >= component.seguimiento.fecha_inicial && date <= component.seguimiento.fecha_final ? _prepareStyleProperties2.default.createElement(_deepAssign2.default, null, _prepareStyleProperties2.default.createElement(_normalizeDataUri2.default, {
              xs : 24,
              lg : 24,
              style : {
                marginTop : 20,
                marginBottom : 30
              }
            }, component.url_seguimiento ? _prepareStyleProperties2.default.createElement("div", null, _prepareStyleProperties2.default.createElement("p", null, "Link del seguimiento: "), _prepareStyleProperties2.default.createElement(_CalendarDay2.default, {
              defaultFileList : [{
                uid : -2,
                name : "Seguimiento",
                status : "done",
                url : component.url_seguimiento
              }]
            })) : _prepareStyleProperties2.default.createElement(_DraggableCore2.default, {
              message : "El alumno no ha subido su seguimiento",
              type : "warning",
              showIcon : true
            })), _prepareStyleProperties2.default.createElement(_normalizeDataUri2.default, {
              xs : 24,
              lg : 24
            }, _prepareStyleProperties2.default.createElement(_CalendarTitle2.default, {
              type : "primary",
              icon : "plus",
              onClick : function() {
                return e.showAddObservacionSeguimiento();
              }
            }, "Agregar observaci\u00f3n"), _prepareStyleProperties2.default.createElement(_parametrize2.default, {
              title : function() {
                return "Observaciones del seguimiento";
              },
              columns : columnsWithWidths,
              dataSource : nextDS,
              pagination : {
                pageSize : 4
              }
            })), _prepareStyleProperties2.default.createElement(_RendererPatcher2.default, {
              updateProyecto : e.updateProyecto.bind(e),
              updateSeguimientos : function() {
                return console.log("()");
              },
              usuario : n,
              visible : isVisible,
              id_seguimiento : selected
            })) : _prepareStyleProperties2.default.createElement(_DraggableCore2.default, {
              message : "No puede acceder al seguimiento,\n Fecha inicial: " + (0, _noframeworkWaypoints2.default)(component.seguimiento.fecha_inicial, "YYYY-MM-DD").format("LL") + " - Fecha final: " + (0, _noframeworkWaypoints2.default)(component.seguimiento.fecha_final, "YYYY-MM-DD").format("LL"),
              type : "warning",
              showIcon : true
            }));
          }))));
        }
      }]), Agent;
    }(_prepareStyleProperties.Component);
    t.default = offsetFromCenter;
  },
  1101 : function(cond, t, s) {
    /**
     * @param {!Object} obj
     * @return {?}
     */
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default : obj
      };
    }
    /**
     * @param {!AudioNode} instance
     * @param {!Function} Constructor
     * @return {undefined}
     */
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    /**
     * @param {string} self
     * @param {string} call
     * @return {?}
     */
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return !call || "object" != typeof call && "function" != typeof call ? self : call;
    }
    /**
     * @param {!Object} subClass
     * @param {!Object} superClass
     * @return {undefined}
     */
    function _inherits(subClass, superClass) {
      if ("function" != typeof superClass && null !== superClass) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      /** @type {!Object} */
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor : {
          value : subClass,
          enumerable : false,
          writable : true,
          configurable : true
        }
      });
      if (superClass) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(subClass, superClass);
        } else {
          /** @type {!Object} */
          subClass.__proto__ = superClass;
        }
      }
    }
    Object.defineProperty(t, "__esModule", {
      value : true
    });
    var _DraggableCore = (s(50), s(51));
    var _DraggableCore2 = _interopRequireDefault(_DraggableCore);
    var _UiIcon = (s(33), s(34));
    var _UiIcon2 = _interopRequireDefault(_UiIcon);
    var _CalendarDay = (s(48), s(49));
    var _CalendarDay2 = _interopRequireDefault(_CalendarDay);
    var _AboutPage = (s(469), s(471));
    var _AboutPage2 = _interopRequireDefault(_AboutPage);
    var _AppDownload = (s(31), s(32));
    var _AppDownload2 = _interopRequireDefault(_AppDownload);
    var _buildPageNumber = (s(28), s(29));
    var _buildPageNumber2 = _interopRequireDefault(_buildPageNumber);
    var _deepAssign = (s(15), s(16));
    var _deepAssign2 = _interopRequireDefault(_deepAssign);
    var _suggestList = (s(37), s(36));
    var _suggestList2 = _interopRequireDefault(_suggestList);
    var _suggestItem = (s(24), s(25));
    var _suggestItem2 = _interopRequireDefault(_suggestItem);
    var _createClass = function() {
      /**
       * @param {!Function} d
       * @param {string} props
       * @return {undefined}
       */
      function e(d, props) {
        /** @type {number} */
        var i = 0;
        for (; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          /** @type {boolean} */
          descriptor.configurable = true;
          if ("value" in descriptor) {
            /** @type {boolean} */
            descriptor.writable = true;
          }
          Object.defineProperty(d, descriptor.key, descriptor);
        }
      }
      return function(t, n, a) {
        return n && e(t.prototype, n), a && e(t, a), t;
      };
    }();
    var _prepareStyleProperties = s(0);
    var _prepareStyleProperties2 = _interopRequireDefault(_prepareStyleProperties);
    var _Trans = s(12);
    var _Trans2 = _interopRequireDefault(_Trans);
    var a = s(121);
    var _documentDocumentFragment = (_interopRequireDefault(a), s(1));
    var _DocumentFragment = _interopRequireDefault(_documentDocumentFragment);
    var Option = _suggestItem2.default.Option;
    var DropIndicator = _suggestItem2.default.OptGroup;
    var Group = _suggestList2.default.Group;
    var offsetFromCenter = function(_EventEmitter) {
      /**
       * @param {?} data
       * @return {?}
       */
      function Agent(data) {
        _classCallCheck(this, Agent);
        var _this = _possibleConstructorReturn(this, (Agent.__proto__ || Object.getPrototypeOf(Agent)).call(this, data));
        return _this.handleChangePeriodo = function(canCreateDiscussions) {
          _Trans2.default.get("/api/periodo/" + canCreateDiscussions + "/dictamen").then(function(getFilesReply) {
            if (200 === getFilesReply.status) {
              if (null != getFilesReply.data.anteproyectos) {
                var t = getFilesReply.data.anteproyectos.map(function($scope, startIndex) {
                  return {
                    key : startIndex + 1,
                    id : $scope.id,
                    no_control_alumno : $scope.alumno.no_control,
                    nombre_alumno : $scope.alumno.nombre + " " + $scope.alumno.ap_paterno + " " + $scope.alumno.ap_materno,
                    sexo_alumno : $scope.alumno.sexo,
                    nombre_anteproyecto : $scope.nombre,
                    nombre_titular_empresa : $scope.asesor_externo.empresa.nombre_titular + " \n " + $scope.asesor_externo.empresa.puesto_titular,
                    asesor_interno : $scope.asesor_interno.titulo + " " + $scope.asesor_interno.nombre + " " + $scope.asesor_interno.ap_paterno + " " + $scope.asesor_interno.ap_materno,
                    id_asesor_interno : $scope.asesor_interno.id,
                    asesor_externo : $scope.asesor_externo.nombre,
                    dictamen : $scope.dictamen.toUpperCase(),
                    fecha_dictamen : $scope.updatedAt
                  };
                });
                _this.setState({
                  periodo : getFilesReply.data,
                  dictamen_anteproyectos : t
                });
              } else {
                _this.setState({
                  periodo : getFilesReply.data,
                  dictamen_anteproyectos : null
                });
              }
            }
          });
        }, _this.handleAsesorInterno = function(e, islongclick) {
          _Trans2.default.put("/api/anteproyecto/set_asesor_interno", {
            id_asesor_interno : e,
            id_anteproyecto : islongclick
          }).then(function(getFilesReply) {
            if (200 === getFilesReply.status) {
              _deepAssign2.default.success("Anteproyecto actualizado!");
            } else {
              _buildPageNumber2.default.error({
                title : "Error al actualizar anteproyecto. Revisar los siguientes campos",
                content : _prepareStyleProperties2.default.createElement("div", null, getFilesReply.data.errores),
                onOk : function() {
                }
              });
            }
          });
        }, _this.updatePeriodo = function() {
          _Trans2.default.get("/api/periodo/" + _this.state.periodo.id + "/dictamen").then(function(getFilesReply) {
            if (200 === getFilesReply.status) {
              if (null != getFilesReply.data.anteproyectos) {
                var t = getFilesReply.data.anteproyectos.map(function($scope, startIndex) {
                  return {
                    key : startIndex + 1,
                    id : $scope.id,
                    no_control_alumno : $scope.alumno.no_control,
                    nombre_alumno : $scope.alumno.nombre + " " + $scope.alumno.ap_paterno + " " + $scope.alumno.ap_materno,
                    sexo_alumno : $scope.alumno.sexo,
                    nombre_anteproyecto : $scope.nombre,
                    nombre_titular_empresa : $scope.asesor_externo.empresa.nombre_titular + " \n " + $scope.asesor_externo.empresa.puesto_titular,
                    asesor_interno : $scope.asesor_interno.titulo + " " + $scope.asesor_interno.nombre + " " + $scope.asesor_interno.ap_paterno + " " + $scope.asesor_interno.ap_materno,
                    id_asesor_interno : $scope.asesor_interno.id,
                    asesor_externo : $scope.asesor_externo.nombre,
                    dictamen : $scope.dictamen.toUpperCase(),
                    fecha_dictamen : $scope.updatedAt
                  };
                });
                _this.setState({
                  periodo : getFilesReply.data,
                  dictamen_anteproyectos : t
                });
              } else {
                _this.setState({
                  periodo : getFilesReply.data,
                  dictamen_anteproyectos : null
                });
              }
            }
          });
        }, _this.handleGenerarDictamen = function() {
          var wunderlist_list = _this.state.periodo;
          _Trans2.default.post("/api/periodo/generar_dictamen", {
            id_periodo : wunderlist_list.id
          }).then(function(getFilesReply) {
            if (200 === getFilesReply.status) {
              _deepAssign2.default.success("Dictamen generado satisfactoriamente!");
              _this.updatePeriodo();
            } else {
              _buildPageNumber2.default.error({
                title : "Error al intentar generar el dictamen",
                content : _prepareStyleProperties2.default.createElement("div", null, getFilesReply.data.errores),
                onOk : function() {
                }
              });
            }
          }).catch(function(mnemonics) {
            _deepAssign2.default.error(mnemonics);
          });
        }, _this.state = {
          usuario : data.usuario,
          departamento : data.departamento,
          periodo : null,
          dictamen_anteproyectos : null,
          docentes : null
        }, _this;
      }
      return _inherits(Agent, _EventEmitter), _createClass(Agent, [{
        key : "render",
        value : function() {
          var e = this;
          var that = this.state;
          var a = that.departamento;
          var dataSource = that.dictamen_anteproyectos;
          var axis = that.periodo;
          var v = (0, _DocumentFragment.default)().format("YYYY-MM-DD");
          /** @type {!Array} */
          var pivotColValues = [{
            width : 50,
            fixed : "left",
            className : "center-text",
            title : "NUM",
            dataIndex : "key",
            key : "key"
          }, {
            width : 100,
            fixed : "left",
            className : "center-text",
            title : "CONTROL",
            dataIndex : "no_control_alumno",
            key : "no_control_alumno"
          }, {
            width : 200,
            fixed : "left",
            className : "center-text",
            title : "NOMBRE DEL ESTUDIANTE",
            dataIndex : "nombre_alumno",
            key : "nombre_alumno"
          }, {
            className : "center-text",
            title : "S",
            dataIndex : "sexo_alumno",
            key : "sexo_alumno"
          }, {
            className : "center-text",
            title : "ANTEPROYECTO",
            dataIndex : "nombre_anteproyecto",
            key : "nombre_anteproyecto"
          }, {
            className : "center-text",
            title : "NOMBRE Y CARGO DEL TITULAR DE LA EMPRESA",
            dataIndex : "nombre_titular_empresa",
            key : "nombre_titular_empresa"
          }, {
            title : "ASESORES",
            children : [{
              width : 300,
              className : "center-text",
              title : "INTERNO",
              dataIndex : "asesor_interno",
              key : "asesor_interno",
              render : function($datalist, result) {
                return _prepareStyleProperties2.default.createElement(_suggestItem2.default, {
                  placeholder : "Seleccione al asesor interno",
                  style : {
                    width : "100%"
                  },
                  onChange : function(color) {
                    return e.handleAsesorInterno(color, result.id);
                  },
                  defaultValue : result.id_asesor_interno ? "" + result.id_asesor_interno : null
                }, null !== axis ? axis.carrera.docentes_carreras.map(function(sentRawMessage, awsKey) {
                  return _prepareStyleProperties2.default.createElement(Option, {
                    key : awsKey,
                    value : "" + sentRawMessage.docente.id
                  }, sentRawMessage.docente.titulo + " " + sentRawMessage.docente.nombre + " " + sentRawMessage.docente.ap_paterno + " " + sentRawMessage.docente.ap_materno);
                }) : null);
              }
            }, {
              className : "center-text",
              title : "EXTERNO",
              dataIndex : "asesor_externo",
              key : "asesor_externo"
            }]
          }, {
            className : "center-text",
            title : "DICTAMEN",
            dataIndex : "dictamen",
            key : "dictamen"
          }, {
            className : "center-text",
            title : "FECHA DE DICTAMEN",
            dataIndex : "fecha_dictamen",
            key : "fecha_dictamen"
          }];
          /** @type {null} */
          var yearRangeNodes = null;
          /** @type {null} */
          var menuCloseButton = null;
          return null != axis && (yearRangeNodes = _prepareStyleProperties2.default.createElement(_AppDownload2.default, {
            xs : 24,
            lg : 24
          }, _prepareStyleProperties2.default.createElement("h2", {
            style : {
              textAlign : "center"
            }
          }, "DEPARTAMENTO DE ", axis.carrera.departamento.nombre.toUpperCase()), _prepareStyleProperties2.default.createElement("h3", {
            style : {
              textAlign : "center"
            }
          }, "CARRERA: ", axis.carrera.nombre.toUpperCase())), menuCloseButton = v >= axis.fecha_inicio && v < axis.fecha_fin ? null === axis.filename_dictamen ? _prepareStyleProperties2.default.createElement(_AboutPage2.default, {
            title : _prepareStyleProperties2.default.createElement("div", null, _prepareStyleProperties2.default.createElement("p", null, "Al generar el dictamen se eliminaran los anteproyectos que no fueron aceptados, "), _prepareStyleProperties2.default.createElement("p", null, "\u00bfEsta de acuerdo?")),
            onConfirm : function() {
              return e.handleGenerarDictamen();
            },
            okText : "Estoy seguro",
            cancelText : "Cancelar"
          }, _prepareStyleProperties2.default.createElement(_suggestList2.default, {
            type : "primary",
            icon : "file-pdf"
          }, " Generar dictamen ")) : _prepareStyleProperties2.default.createElement(Group, null, _prepareStyleProperties2.default.createElement(_AboutPage2.default, {
            title : _prepareStyleProperties2.default.createElement("div", null, _prepareStyleProperties2.default.createElement("p", null, "Al generar el dictamen se eliminaran los anteproyectos que no fueron aceptados"), _prepareStyleProperties2.default.createElement("p", null, " y se sobrescribira el nuevo dictamen"), _prepareStyleProperties2.default.createElement("p", null, "\u00bfEsta de acuerdo?")),
            onConfirm : function() {
              return e.handleGenerarDictamen();
            },
            okText : "Estoy seguro",
            cancelText : "Cancelar"
          }, _prepareStyleProperties2.default.createElement(_suggestList2.default, {
            icon : "file-pdf"
          }, " Generar dictamen ")), _prepareStyleProperties2.default.createElement(_suggestList2.default, {
            type : "primary",
            icon : "eye-o"
          }, " ", _prepareStyleProperties2.default.createElement("a", {
            style : {
              color : "white"
            },
            target : "_blank",
            href : "/api/dictamen/pdf/" + axis.filename_dictamen
          }, "Ver"))) : null === axis.filename_dictamen ? _prepareStyleProperties2.default.createElement(_CalendarDay2.default, {
            message : "No se ha generado el dictamen y solo se puede generar en las fechas " + axis.fecha_inicio + " al " + axis.fecha_fin,
            type : "info",
            showIcon : true
          }) : _prepareStyleProperties2.default.createElement(_suggestList2.default, {
            type : "primary",
            icon : "eye-o"
          }, " ", _prepareStyleProperties2.default.createElement("a", {
            style : {
              color : "white"
            },
            target : "_blank",
            href : "/api/dictamen/pdf/" + axis.filename_dictamen
          }, "Ver dictamen"))), _prepareStyleProperties2.default.createElement("div", null, _prepareStyleProperties2.default.createElement(_UiIcon2.default, {
            type : "flex"
          }, _prepareStyleProperties2.default.createElement(_AppDownload2.default, {
            xs : 24,
            lg : 6
          }, _prepareStyleProperties2.default.createElement("p", null, "Seleccione el periodo"), _prepareStyleProperties2.default.createElement(_suggestItem2.default, {
            onChange : this.handleChangePeriodo,
            style : {
              width : "100%"
            }
          }, a.carreras.map(function($scope, header) {
            return _prepareStyleProperties2.default.createElement(DropIndicator, {
              key : header,
              label : $scope.nombre
            }, $scope.periodos.map(function(domvalue, s) {
              return _prepareStyleProperties2.default.createElement(Option, {
                key : header + "-" + s,
                value : "" + domvalue.id
              }, domvalue.periodo + " " + domvalue.ciclo);
            }));
          })))), _prepareStyleProperties2.default.createElement(_UiIcon2.default, {
            type : "flex",
            justify : "center",
            align : "middle",
            style : {
              marginTop : 20
            }
          }, yearRangeNodes), _prepareStyleProperties2.default.createElement(_UiIcon2.default, {
            type : "flex",
            justify : "center",
            align : "middle",
            style : {
              marginTop : 20
            }
          }, _prepareStyleProperties2.default.createElement(_AppDownload2.default, {
            xs : 24,
            lg : 24,
            style : {
              marginBottom : 20
            }
          }, menuCloseButton), _prepareStyleProperties2.default.createElement(_AppDownload2.default, {
            xs : 24,
            lg : 24
          }, _prepareStyleProperties2.default.createElement(_DraggableCore2.default, {
            bordered : true,
            title : function() {
              return "Dictamen";
            },
            dataSource : dataSource,
            className : "full-width",
            columns : pivotColValues,
            pagination : {
              pageSize : 8
            },
            scroll : {
              x : 1700
            }
          }))));
        }
      }]), Agent;
    }(_prepareStyleProperties.Component);
    t.default = offsetFromCenter;
  },
  1102 : function(encriptado, info, __webpack_require__) {
    /**
     * @param {!Object} obj
     * @return {?}
     */
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default : obj
      };
    }
    /**
     * @param {!AudioNode} t
     * @param {!Function} x
     * @return {undefined}
     */
    function r(t, x) {
      if (!(t instanceof x)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    /**
     * @param {string} fn
     * @param {string} t
     * @return {?}
     */
    function $(fn, t) {
      if (!fn) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return !t || "object" != typeof t && "function" != typeof t ? fn : t;
    }
    /**
     * @param {!Object} subClass
     * @param {!Object} superClass
     * @return {undefined}
     */
    function _inherits(subClass, superClass) {
      if ("function" != typeof superClass && null !== superClass) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      /** @type {!Object} */
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor : {
          value : subClass,
          enumerable : false,
          writable : true,
          configurable : true
        }
      });
      if (superClass) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(subClass, superClass);
        } else {
          /** @type {!Object} */
          subClass.__proto__ = superClass;
        }
      }
    }
    Object.defineProperty(info, "__esModule", {
      value : true
    });
    var _UiIcon = (__webpack_require__(33), __webpack_require__(34));
    var _UiIcon2 = _interopRequireDefault(_UiIcon);
    var _CalendarDay = (__webpack_require__(31), __webpack_require__(32));
    var _CalendarDay2 = _interopRequireDefault(_CalendarDay);
    var _AboutPage = (__webpack_require__(87), __webpack_require__(74));
    var _AboutPage2 = _interopRequireDefault(_AboutPage);
    var _AppDownload = (__webpack_require__(77), __webpack_require__(78));
    var _AppDownload2 = _interopRequireDefault(_AppDownload);
    var _CalendarEvent = (__webpack_require__(18), __webpack_require__(22));
    var _CalendarEvent2 = _interopRequireDefault(_CalendarEvent);
    var _CalendarTitle = (__webpack_require__(37), __webpack_require__(36));
    var _CalendarTitle2 = _interopRequireDefault(_CalendarTitle);
    var _parametrize = (__webpack_require__(50), __webpack_require__(51));
    var _parametrize2 = _interopRequireDefault(_parametrize);
    var _buildPageNumber = (__webpack_require__(28), __webpack_require__(29));
    var _buildPageNumber2 = _interopRequireDefault(_buildPageNumber);
    var _deepAssign = (__webpack_require__(104), __webpack_require__(105));
    var _deepAssign2 = _interopRequireDefault(_deepAssign);
    var _SearchableTable = (__webpack_require__(35), __webpack_require__(13));
    var _SearchableTable2 = _interopRequireDefault(_SearchableTable);
    var _toHyphenCase = (__webpack_require__(48), __webpack_require__(49));
    var _toHyphenCase2 = _interopRequireDefault(_toHyphenCase);
    var _RendererPatcher = (__webpack_require__(15), __webpack_require__(16));
    var inst = _interopRequireDefault(_RendererPatcher);
    var _suggestItem = (__webpack_require__(24), __webpack_require__(25));
    var _suggestItem2 = _interopRequireDefault(_suggestItem);
    var _suggestList = (__webpack_require__(88), __webpack_require__(89));
    var _suggestList2 = _interopRequireDefault(_suggestList);
    var _DraggableCore = (__webpack_require__(19), __webpack_require__(20));
    var _DraggableCore2 = _interopRequireDefault(_DraggableCore);
    var _createClass = function() {
      /**
       * @param {!Function} d
       * @param {string} props
       * @return {undefined}
       */
      function e(d, props) {
        /** @type {number} */
        var i = 0;
        for (; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          /** @type {boolean} */
          descriptor.configurable = true;
          if ("value" in descriptor) {
            /** @type {boolean} */
            descriptor.writable = true;
          }
          Object.defineProperty(d, descriptor.key, descriptor);
        }
      }
      return function(t, n, a) {
        return n && e(t.prototype, n), a && e(t, a), t;
      };
    }();
    var _prepareStyleProperties = __webpack_require__(0);
    var _prepareStyleProperties2 = _interopRequireDefault(_prepareStyleProperties);
    var _normalizeDataUri = __webpack_require__(12);
    var _normalizeDataUri2 = _interopRequireDefault(_normalizeDataUri);
    var _UiRippleInk = __webpack_require__(1);
    var _UiRippleInk2 = _interopRequireDefault(_UiRippleInk);
    var _uuid = __webpack_require__(45);
    var _uuid2 = _interopRequireDefault(_uuid);
    var _noframeworkWaypoints = __webpack_require__(1103);
    var _noframeworkWaypoints2 = _interopRequireDefault(_noframeworkWaypoints);
    var _custom = __webpack_require__(1104);
    var _custom2 = _interopRequireDefault(_custom);
    var _ValueViewer = __webpack_require__(1105);
    var _ValueViewer2 = _interopRequireDefault(_ValueViewer);
    var _SearchIndex = __webpack_require__(1107);
    var _SearchIndex2 = _interopRequireDefault(_SearchIndex);
    var Route = _DraggableCore2.default.Item;
    var NumberPicker = _suggestList2.default.TabPane;
    var AnimatedIcon = _suggestItem2.default.Option;
    var ne = function(e) {
      /**
       * @param {?} vars
       * @return {?}
       */
      function t(vars) {
        r(this, t);
        var _this = $(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, vars));
        return _this.updateObservaciones = function() {
          var wunderlist_list = _this.state.proyecto;
          _normalizeDataUri2.default.get("/api/proyecto/" + wunderlist_list.id + "/observaciones").then(function(getFilesReply) {
            if (200 === getFilesReply.status) {
              _this.setState({
                visibleAddObservacion : false,
                visibleAddSolucion : false,
                visibleEvaluacionAsesorInterno : false,
                observaciones : getFilesReply.data
              });
            }
          });
        }, _this.showAgregarObservacionPlanTrabajo = function() {
          _this.state.proyecto;
          _this.setState({
            tipo_observacion : "plan_de_trabajo",
            visibleAddObservacion : true,
            visibleAddSolucion : false,
            visibleEvaluacionAsesorInterno : false
          });
        }, _this.showAgregarObservacionCronograma = function() {
          _this.state.proyecto;
          _this.setState({
            tipo_observacion : "cronograma",
            visibleAddObservacion : true,
            visibleAddSolucion : false,
            visibleEvaluacionAsesorInterno : false
          });
        }, _this.onChangeObservacion = function(canCreateDiscussions, inEditorHeight) {
          _normalizeDataUri2.default.put("/api/proyecto/observacion", {
            id_observacion : canCreateDiscussions,
            solucionada : inEditorHeight
          }).then(function(testsStatus) {
            if (200 === testsStatus.status) {
              inst.default.success("Los cambios se han guardado.");
            } else {
              inst.default.error("No se han guardado los cambios, reportar error al administrador.");
            }
          });
        }, _this.onChangeTabSeguimiento = function(switcherWindowId) {
          var $scope = _this.state;
          var n = $scope.seguimientos;
          var $scopeId = $scope.usuario;
          var date = (0, _UiRippleInk2.default)().format("YYYY-MM-DD");
          if ("seguimiento_final" === switcherWindowId) {
          } else {
            var l = n.find(function(currentWindow) {
              return currentWindow.id == switcherWindowId;
            });
            if (date >= l.seguimiento.fecha_inicial && date <= l.seguimiento.fecha_final) {
              _this.setState({
                renderSeguimiento : _prepareStyleProperties2.default.createElement(_ValueViewer2.default, {
                  updateProyecto : _this.updateProyecto.bind(_this),
                  updateSeguimientos : _this.updateSeguimientos.bind(_this),
                  usuario : $scopeId,
                  seguimiento : l
                }),
                visibleEvaluacionAsesorInterno : false
              });
            } else {
              _this.setState({
                renderSeguimiento : _prepareStyleProperties2.default.createElement(_toHyphenCase2.default, {
                  message : "No puede acceder al seguimiento,\n Fecha inicial: " + (0, _UiRippleInk2.default)(l.seguimiento.fecha_inicial, "YYYY-MM-DD").format("LL") + " - Fecha final: " + (0, _UiRippleInk2.default)(l.seguimiento.fecha_final, "YYYY-MM-DD").format("LL"),
                  type : "warning",
                  showIcon : true
                }),
                visibleEvaluacionAsesorInterno : false
              });
            }
          }
        }, _this.onChangeTab = function(e) {
          var wunderlist_list = _this.state.proyecto;
          if ("asesorias" === e) {
            _normalizeDataUri2.default.get("/api/proyecto/" + wunderlist_list.id + "/asesorias").then(function(getFilesReply) {
              if (200 === getFilesReply.status) {
                _this.setState({
                  visibleAddObservacion : false,
                  visibleAddSolucion : false,
                  visibleEvaluacionAsesorInterno : false,
                  asesorias : getFilesReply.data
                });
              }
            });
          } else {
            if ("seguimientos" === e) {
              _normalizeDataUri2.default.get("/api/proyecto/" + wunderlist_list.id + "/seguimientos").then(function(getFilesReply) {
                if (200 === getFilesReply.status) {
                  _this.setState({
                    visibleAddObservacion : false,
                    visibleAddSolucion : false,
                    visibleEvaluacionAsesorInterno : false,
                    seguimientos : getFilesReply.data
                  });
                }
              });
            }
          }
        }, _this.updateSeguimientos = function() {
          var wunderlist_list = _this.state.proyecto;
          _normalizeDataUri2.default.get("/api/proyecto/" + wunderlist_list.id + "/seguimientos").then(function(snapshot) {
            if (200 === snapshot.status) {
              console.warn("a>", snapshot.data);
              _this.setState({
                visibleAddObservacion : false,
                visibleAddSolucion : false,
                seguimientos : snapshot.data,
                visibleEvaluacionAsesorInterno : false
              });
            }
          });
        }, _this.showAddSolucion = function(canCreateDiscussions) {
          _this.setState({
            visibleEvaluacionAsesorInterno : false,
            visibleAddObservacion : false,
            visibleAddSolucion : true,
            id_asesoria : canCreateDiscussions
          });
        }, _this.checkSolucion = function(o, keyFn) {
          _normalizeDataUri2.default.put("/api/proyecto/asesoria/solucion_recomendada", {
            id_solucion : keyFn,
            solucionado : o
          }).then(function(testsStatus) {
            if (200 === testsStatus.status) {
              inst.default.success("Se ha actualizado la soluci\u00f3n.");
            } else {
              inst.default.error("Surgio un error al actualizar la soluci\u00f3n. favor de reportarlo con el administrador.");
            }
          });
        }, _this.checkPermitirGenerarFormato = function(e, islongclick) {
          _normalizeDataUri2.default.put("/api/proyecto/asesoria_autorizar_formato", {
            permitir_generar_formato : e,
            id_asesoria : islongclick
          }).then(function(testsStatus) {
            if (200 === testsStatus.status) {
              inst.default.success("Se ha realizado el cambio de autorizar el formato de asesor\u00eda");
            } else {
              inst.default.error("Surgio un error al actualizar la autorizaci\u00f3n de la asesor\u00eda, favor de reportarlo con el administrador.");
            }
          });
        }, _this.showSoluciones = function(canCreateDiscussions) {
          _normalizeDataUri2.default.get("/api/proyecto/asesoria/" + canCreateDiscussions + "/soluciones_recomendadas").then(function(snapshot) {
            if (200 === snapshot.status) {
              console.warn("soluciones", snapshot.data);
              /** @type {!Array} */
              var pivotColValues = [{
                title : "Solucionado",
                dataIndex : "solucionado",
                key : "solucionado",
                render : function(index, item) {
                  return _prepareStyleProperties2.default.createElement(_deepAssign2.default, {
                    defaultChecked : item.solucionado,
                    checkedChildren : "Solucionado",
                    onChange : function(img) {
                      return _this.checkSolucion(img, item.id);
                    },
                    unCheckedChildren : _prepareStyleProperties2.default.createElement(_SearchableTable2.default, {
                      type : "cross"
                    })
                  });
                }
              }, {
                title : "Soluci\u00f3n",
                dataIndex : "solucion",
                key : "solucion"
              }];
              var dataSource2 = snapshot.data.map(function(target_workspace, awsKey) {
                return {
                  key : awsKey,
                  id : target_workspace.id,
                  solucionado : target_workspace.solucionado,
                  solucion : target_workspace.solucion
                };
              });
              _buildPageNumber2.default.info({
                width : 800,
                title : "Soluciones recomendadas",
                content : _prepareStyleProperties2.default.createElement("div", null, _prepareStyleProperties2.default.createElement(_parametrize2.default, {
                  size : "small",
                  columns : pivotColValues,
                  dataSource : dataSource2,
                  pagination : {
                    pageSize : 5
                  }
                })),
                onOk : function() {
                }
              });
            }
          });
        }, _this.updateTipoAsesoria = function(dataPath, callChange) {
          _normalizeDataUri2.default.put("/api/asesoria/tipo", {
            id_asesoria : dataPath,
            tipo : callChange
          }).then(function(testsStatus) {
            if (200 === testsStatus.status) {
              inst.default.success("El tipo de asesor\u00eda se ha actualizado satisfactoriamente!");
            } else {
              inst.default.error("Ops, hemos tenido un problema, favor de reportar al administrador.");
            }
          });
        }, _this.showEvaluacionAsesorInterno = function(canCreateDiscussions) {
          if ("2009-2010" === canCreateDiscussions.plan_estudios) {
            _normalizeDataUri2.default.get("/api/proyecto/evaluacionAnexoIII/criterios/asesor_interno/").then(function(getFilesReply) {
              if (200 === getFilesReply.status) {
                _this.setState({
                  criterios_evaluacion : getFilesReply.data,
                  visibleEvaluacionAsesorInterno : true,
                  visibleAddObservacion : false,
                  visibleAddSolucion : false
                });
              } else {
                inst.default.warn("Error al realizar petici\u00f3n de criterios de evaluaci\u00f3n, favor de reportar al administrador.");
              }
            });
          } else {
            if ("2015-2016" === canCreateDiscussions.plan_estudios) {
              _normalizeDataUri2.default.get("/api/proyecto/evaluacionAnexoXXX/criterios/asesor_interno/").then(function(getFilesReply) {
                if (200 === getFilesReply.status) {
                  _this.setState({
                    criterios_evaluacion : getFilesReply.data,
                    visibleEvaluacionAsesorInterno : true,
                    visibleAddObservacion : false,
                    visibleAddSolucion : false
                  });
                } else {
                  inst.default.warn("Error al realizar petici\u00f3n de criterios de evaluaci\u00f3n, favor de reportar al administrador.");
                }
              });
            }
          }
        }, _this.autorizarCartaDeLiberacionAsesorInterno = function(data, defer_sort) {
          _normalizeDataUri2.default.put("/api/proyecto/autorizar_carta_liberacion/asesor_interno", {
            id_proyecto : defer_sort,
            autorizar : data
          }).then(function(testsStatus) {
            if (200 === testsStatus.status) {
              inst.default.success("Se ha actualizado la autorizaci\u00f3n de la carta de liberaci\u00f3n.");
            } else {
              inst.default.warn("Error al autorizar la carta de liberaci\u00f3n consultar al administrador.");
            }
          });
        }, _this.updateProyecto = function() {
          _this.props.updateProyecto();
        }, _this.state = {
          usuario : vars.usuario,
          proyecto : vars.proyecto,
          visibleAddObservacion : false,
          tipo_observacion : "",
          observaciones : [],
          asesorias : [],
          seguimientos : [],
          visibleAddSolucion : false,
          id_asesoria : null,
          renderSeguimiento : null,
          visibleEvaluacionAsesorInterno : false,
          criterios_evaluacion : []
        }, _this;
      }
      return _inherits(t, e), _createClass(t, [{
        key : "componentWillReceiveProps",
        value : function(recB) {
          this.setState({
            usuario : recB.usuario,
            proyecto : recB.proyecto,
            visibleAddObservacion : false,
            tipo_observacion : "",
            observaciones : [],
            asesorias : [],
            visibleAddSolucion : false,
            id_asesoria : null,
            seguimientos : [],
            renderSeguimiento : null,
            visibleEvaluacionAsesorInterno : false
          });
        }
      }, {
        key : "componentWillMount",
        value : function() {
          this.updateObservaciones();
        }
      }, {
        key : "render",
        value : function() {
          var e = this;
          var $scope = this.state;
          var $scopeId = $scope.criterios_evaluacion;
          var vis = $scope.visibleEvaluacionAsesorInterno;
          var params = $scope.proyecto;
          var status = $scope.visibleAddObservacion;
          var tipo = $scope.tipo_observacion;
          var imageChanges = $scope.usuario;
          var c = $scope.observaciones;
          var d = $scope.asesorias;
          var blds = $scope.id_asesoria;
          var b = $scope.visibleAddSolucion;
          var navLinksArr = $scope.seguimientos;
          var shareTxt = $scope.renderSeguimiento;
          var dataSource2 = c.filter(function(element) {
            return "plan_de_trabajo" === element.tipo;
          }).map(function(target_workspace) {
            return {
              key : _uuid2.default.v1(),
              id : target_workspace.id,
              observacion : target_workspace.observacion,
              solucionada : target_workspace.solucionada
            };
          });
          var memeDataSource = c.filter(function(element) {
            return "cronograma" === element.tipo;
          }).map(function(target_workspace) {
            return {
              key : _uuid2.default.v1(),
              id : target_workspace.id,
              observacion : target_workspace.observacion,
              solucionada : target_workspace.solucionada
            };
          });
          /** @type {!Array} */
          var pivotColValues = [{
            title : "Solucionada",
            dataIndex : "solucionada",
            key : "solucionada",
            render : function(index, item) {
              return _prepareStyleProperties2.default.createElement(_deepAssign2.default, {
                onChange : function(inEditorHeight) {
                  return e.onChangeObservacion(item.id, inEditorHeight);
                },
                defaultChecked : item.solucionada,
                checkedChildren : "Solucionada",
                unCheckedChildren : _prepareStyleProperties2.default.createElement(_SearchableTable2.default, {
                  type : "cross"
                })
              });
            }
          }, {
            title : "Observaci\u00f3n",
            dataIndex : "observacion",
            key : "observacion"
          }];
          /** @type {!Array} */
          var columnsToDisplay = [{
            className : "center-text",
            title : "Fecha",
            dataIndex : "fecha",
            key : "fecha"
          }, {
            className : "center-text",
            title : "Temas a asesorar",
            dataIndex : "temas_a_asesorar",
            key : "temas_a_asesorar"
          }, {
            className : "center-text",
            title : "Avance",
            dataIndex : "url_avance",
            key : "url_avance",
            render : function(notify, options) {
              return _prepareStyleProperties2.default.createElement("a", {
                href : options.url_avance,
                target : "_blank"
              }, "Archivo de avance", _prepareStyleProperties2.default.createElement(_SearchableTable2.default, {
                type : "file-pdf"
              }));
            }
          }, {
            className : "center-text",
            title : "Soluciones recomendadas",
            dataIndex : "soluciones_recomendadas",
            key : "soluciones_recomendadas",
            render : function(sb, data) {
              return _prepareStyleProperties2.default.createElement("span", null, _prepareStyleProperties2.default.createElement(_CalendarTitle2.default, {
                style : {
                  marginLeft : 2,
                  marginRight : 2
                },
                icon : "bars",
                onClick : function() {
                  return e.showSoluciones(data.id);
                }
              }, "Soluciones"), _prepareStyleProperties2.default.createElement(_CalendarTitle2.default, {
                style : {
                  marginLeft : 2,
                  marginRight : 2
                },
                icon : "plus",
                onClick : function() {
                  return e.showAddSolucion(data.id);
                }
              }, "Agregar soluci\u00f3n"));
            }
          }, {
            className : "center-text",
            title : "Tipo de asesor\u00eda",
            dataIndex : "tipo",
            key : "tipo",
            render : function(dim, val) {
              return _prepareStyleProperties2.default.createElement(_suggestItem2.default, {
                defaultValue : val.tipo,
                onChange : function(change) {
                  return e.updateTipoAsesoria(val.id, change);
                },
                style : {
                  width : "100%"
                }
              }, _prepareStyleProperties2.default.createElement(AnimatedIcon, {
                key : _uuid2.default.v4(),
                value : "virtual"
              }, "Virtual"), _prepareStyleProperties2.default.createElement(AnimatedIcon, {
                key : _uuid2.default.v4(),
                value : "presencial"
              }, "Presencial"));
            }
          }, {
            className : "center-text",
            title : "Generar formato",
            dataIndex : "permitir_generar_formato",
            key : "permitir_generar_formato",
            render : function(index, object) {
              return _prepareStyleProperties2.default.createElement(_deepAssign2.default, {
                defaultChecked : object.permitir_generar_formato,
                checkedChildren : "Autorizado",
                onChange : function(color) {
                  return e.checkPermitirGenerarFormato(color, object.id);
                },
                unCheckedChildren : "No autorizado"
              });
            }
          }];
          var unflatDataSource = d.map(function(element) {
            return {
              key : _uuid2.default.v1(),
              id : element.id,
              fecha : (0, _UiRippleInk2.default)(element.fecha, "YYYY-MM-DD").format("ll"),
              temas_a_asesorar : element.temas_a_asesorar,
              url_avance : element.url_avance,
              soluciones_recomendadas : "on",
              permitir_generar_formato : element.permitir_generar_formato,
              tipo : element.tipo
            };
          });
          return _prepareStyleProperties2.default.createElement("div", null, _prepareStyleProperties2.default.createElement(_suggestList2.default, {
            animated : true,
            key : ".103.",
            defaultActiveKey : "1",
            onChange : function(color) {
              return e.onChangeTab(color);
            }
          }, _prepareStyleProperties2.default.createElement(NumberPicker, {
            tab : _prepareStyleProperties2.default.createElement("span", null, _prepareStyleProperties2.default.createElement(_SearchableTable2.default, {
              type : "book"
            }), "Proyecto"),
            key : "proyecto"
          }, _prepareStyleProperties2.default.createElement(_DraggableCore2.default, null, _prepareStyleProperties2.default.createElement(Route, {
            label : "T\u00edtulo: "
          }, _prepareStyleProperties2.default.createElement(_CalendarEvent2.default, {
            value : params.anteproyecto.nombre,
            readOnly : true
          })), _prepareStyleProperties2.default.createElement(Route, {
            label : "Objetivo general: "
          }, _prepareStyleProperties2.default.createElement(_CalendarEvent2.default, {
            value : params.anteproyecto.objetivo_general,
            readOnly : true
          })), _prepareStyleProperties2.default.createElement(Route, {
            label : "Anteproyecto: "
          }, _prepareStyleProperties2.default.createElement(_AppDownload2.default, {
            listType : "picture-card",
            fileList : [{
              uid : -1,
              name : "anteproyecto.pdf",
              status : "done",
              url : "/api/anteproyecto/pdf/" + params.anteproyecto.path_file_anteproyecto
            }]
          }))), _prepareStyleProperties2.default.createElement(_UiIcon2.default, {
            className : "border-top"
          }, _prepareStyleProperties2.default.createElement(_CalendarDay2.default, {
            xs : 24,
            lg : 6
          }, _prepareStyleProperties2.default.createElement("h2", {
            style : {
              marginBottom : 20
            }
          }, "Plan de trabajo"), _prepareStyleProperties2.default.createElement(Route, {
            label : _prepareStyleProperties2.default.createElement("span", null, "Plan de trabajo\u00a0", _prepareStyleProperties2.default.createElement(_AboutPage2.default, {
              title : "Ultima fecha de actualizaci\u00f3n: " + (0, _UiRippleInk2.default)(params.updatedAt).utc().format("ll")
            }, _prepareStyleProperties2.default.createElement(_SearchableTable2.default, {
              type : "clock-circle-o"
            })))
          }, _prepareStyleProperties2.default.createElement(_AppDownload2.default, {
            className : "file-preview",
            style : {
              width : 600
            },
            listType : "picture-card",
            fileList : [{
              uid : -1,
              name : "plan_de_trabajo.pdf",
              status : "done",
              url : "/api/plan_de_trabajo/pdf/" + params.filename_plan_trabajo
            }]
          }))), _prepareStyleProperties2.default.createElement(_CalendarDay2.default, {
            xs : 24,
            lg : 18
          }, _prepareStyleProperties2.default.createElement(_CalendarTitle2.default, {
            style : {
              marginBottom : 10,
              marginTop : 45
            },
            icon : "plus",
            onClick : this.showAgregarObservacionPlanTrabajo
          }, "Agregar observaci\u00f3n"), _prepareStyleProperties2.default.createElement(_parametrize2.default, {
            title : function() {
              return "Observaciones de plan de trabajo";
            },
            columns : pivotColValues,
            dataSource : dataSource2,
            pagination : {
              pageSize : 4
            }
          }))), _prepareStyleProperties2.default.createElement(_UiIcon2.default, {
            className : "border-top"
          }, _prepareStyleProperties2.default.createElement(_CalendarDay2.default, {
            xs : 24,
            lg : 6
          }, _prepareStyleProperties2.default.createElement("h2", {
            style : {
              marginBottom : 20
            }
          }, "Cronograma de actividades"), _prepareStyleProperties2.default.createElement(Route, {
            label : _prepareStyleProperties2.default.createElement("span", null, "Cronograma de actividades\u00a0", _prepareStyleProperties2.default.createElement(_AboutPage2.default, {
              title : "Ultima fecha de actualizaci\u00f3n: " + (0, _UiRippleInk2.default)(params.updatedAt).utc().format("ll")
            }, _prepareStyleProperties2.default.createElement(_SearchableTable2.default, {
              type : "clock-circle-o"
            })))
          }, _prepareStyleProperties2.default.createElement(_AppDownload2.default, {
            className : "file-preview",
            style : {
              width : 600
            },
            listType : "picture-card",
            fileList : [{
              uid : -1,
              name : "cronograma.pdf",
              status : "done",
              url : "/api/cronograma/pdf/" + params.filename_cronograma
            }],
            onRemove : false
          }))), _prepareStyleProperties2.default.createElement(_CalendarDay2.default, {
            xs : 24,
            lg : 18
          }, _prepareStyleProperties2.default.createElement(_CalendarTitle2.default, {
            style : {
              marginBottom : 10,
              marginTop : 45
            },
            icon : "plus",
            onClick : this.showAgregarObservacionCronograma
          }, "Agregar observaci\u00f3n"), _prepareStyleProperties2.default.createElement(_parametrize2.default, {
            title : function() {
              return "Observaciones del cronograma de actividades";
            },
            columns : pivotColValues,
            dataSource : memeDataSource,
            pagination : {
              pageSize : 4
            }
          })))), _prepareStyleProperties2.default.createElement(NumberPicker, {
            tab : _prepareStyleProperties2.default.createElement("span", null, _prepareStyleProperties2.default.createElement(_SearchableTable2.default, {
              type : "solution"
            }), "Asesor\u00edas"),
            key : "asesorias"
          }, _prepareStyleProperties2.default.createElement(_UiIcon2.default, null, _prepareStyleProperties2.default.createElement(_CalendarDay2.default, {
            xs : 24,
            lg : 24
          }, _prepareStyleProperties2.default.createElement(_parametrize2.default, {
            title : function() {
              return "Asesor\u00edas";
            },
            columns : columnsToDisplay,
            dataSource : unflatDataSource,
            pagination : {
              pageSize : 5
            },
            scroll : {
              x : 1200
            }
          })))), _prepareStyleProperties2.default.createElement(NumberPicker, {
            tab : _prepareStyleProperties2.default.createElement("span", null, _prepareStyleProperties2.default.createElement(_SearchableTable2.default, {
              type : "calendar"
            }), "Seguimientos"),
            key : "seguimientos"
          }, _prepareStyleProperties2.default.createElement(_suggestList2.default, {
            animated : true,
            key : "-9kbas\u00f1djboubj\u00b7#das9",
            tabPosition : "left",
            defaultActiveKey : "0",
            onChange : function(theme) {
              return e.onChangeTabSeguimiento(theme);
            }
          }, navLinksArr.map(function(iAntdProps, canCreateDiscussions) {
            return _prepareStyleProperties2.default.createElement(NumberPicker, {
              tab : _prepareStyleProperties2.default.createElement("span", null, _prepareStyleProperties2.default.createElement(_SearchableTable2.default, {
                type : "schedule"
              }), "Seguimiento " + (canCreateDiscussions + 1)),
              key : iAntdProps.id
            }, shareTxt);
          }), _prepareStyleProperties2.default.createElement(NumberPicker, {
            tab : _prepareStyleProperties2.default.createElement("span", null, _prepareStyleProperties2.default.createElement(_SearchableTable2.default, {
              type : "schedule"
            }), "Seguimiento final"),
            key : "seguimiento_final"
          }, _prepareStyleProperties2.default.createElement(_UiIcon2.default, {
            gutter : 20
          }, _prepareStyleProperties2.default.createElement(_CalendarDay2.default, {
            xs : 24,
            lg : 24,
            style : {
              marginTop : 20,
              marginBottom : 30
            }
          }, params.url_informe_tecnico ? _prepareStyleProperties2.default.createElement("div", null, _prepareStyleProperties2.default.createElement("p", null, "Link del informe t\u00e9cnico: "), _prepareStyleProperties2.default.createElement(_AppDownload2.default, {
            defaultFileList : [{
              uid : -2,
              name : "informe_tecnico",
              status : "done",
              url : params.url_informe_tecnico
            }]
          })) : _prepareStyleProperties2.default.createElement(_toHyphenCase2.default, {
            message : "El alumno no ha subido su informe t\u00e9cnico",
            type : "warning",
            showIcon : true
          })), _prepareStyleProperties2.default.createElement(_CalendarDay2.default, {
            xs : 24,
            lg : 24
          }, params.url_informe_tecnico ? _prepareStyleProperties2.default.createElement("div", null, _prepareStyleProperties2.default.createElement(_CalendarTitle2.default, {
            style : {
              marginBottom : 30
            },
            onClick : function() {
              return e.showEvaluacionAsesorInterno(params.anteproyecto.alumno);
            },
            icon : "bars",
            type : "primary"
          }, "Realizar evaluaci\u00f3n"), _prepareStyleProperties2.default.createElement("h4", {
            style : {
              marginBottom : 10
            }
          }, "Autorizar carta de liberaci\u00f3n"), _prepareStyleProperties2.default.createElement(_AboutPage2.default, {
            title : null === params.id_evaluacion_asesor_interno ? "Antes de autorizar la carta de liberaci\u00f3n debe realizar la evaluaci\u00f3n." : ""
          }, _prepareStyleProperties2.default.createElement(_deepAssign2.default, {
            disabled : null === params.id_evaluacion_asesor_interno,
            defaultChecked : params.autorizar_carta_liberacion_asesor_interno,
            checkedChildren : "Autorizado",
            onChange : function(d) {
              return e.autorizarCartaDeLiberacionAsesorInterno(d, params.id);
            },
            unCheckedChildren : _prepareStyleProperties2.default.createElement(_SearchableTable2.default, {
              type : "cross"
            })
          }))) : _prepareStyleProperties2.default.createElement(_toHyphenCase2.default, {
            message : "El alumno debe subir su informe t\u00e9cnico para continuar con el proceso de evaluaci\u00f3n",
            type : "warning",
            showIcon : true
          }))))))), _prepareStyleProperties2.default.createElement(_noframeworkWaypoints2.default, {
            updateObservaciones : this.updateObservaciones.bind(this),
            id_proyecto : params.id,
            tipo : tipo,
            usuario : imageChanges,
            visible : status
          }), _prepareStyleProperties2.default.createElement(_custom2.default, {
            id_asesoria : blds,
            visible : b
          }), _prepareStyleProperties2.default.createElement(_SearchIndex2.default, {
            updateProyecto : this.updateProyecto.bind(this),
            proyecto : params,
            visible : vis,
            criterios_evaluacion : $scopeId
          }));
        }
      }]), t;
    }(_prepareStyleProperties.Component);
    info.default = ne;
  },
  1103 : function(allegedI, arg, __webpack_require__) {
    /**
     * @param {!Object} obj
     * @return {?}
     */
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default : obj
      };
    }
    /**
     * @param {!AudioNode} instance
     * @param {!Function} Constructor
     * @return {undefined}
     */
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    /**
     * @param {string} self
     * @param {string} call
     * @return {?}
     */
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return !call || "object" != typeof call && "function" != typeof call ? self : call;
    }
    /**
     * @param {!Object} subClass
     * @param {!Object} superClass
     * @return {undefined}
     */
    function _inherits(subClass, superClass) {
      if ("function" != typeof superClass && null !== superClass) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      /** @type {!Object} */
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor : {
          value : subClass,
          enumerable : false,
          writable : true,
          configurable : true
        }
      });
      if (superClass) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(subClass, superClass);
        } else {
          /** @type {!Object} */
          subClass.__proto__ = superClass;
        }
      }
    }
    Object.defineProperty(arg, "__esModule", {
      value : true
    });
    var _deepAssign = (__webpack_require__(15), __webpack_require__(16));
    var _deepAssign2 = _interopRequireDefault(_deepAssign);
    var _suggestItem = (__webpack_require__(28), __webpack_require__(29));
    var _suggestItem2 = _interopRequireDefault(_suggestItem);
    var _normalizeDataUri = (__webpack_require__(24), __webpack_require__(25));
    var _normalizeDataUri2 = _interopRequireDefault(_normalizeDataUri);
    var _UiIcon = (__webpack_require__(18), __webpack_require__(22));
    var _UiIcon2 = _interopRequireDefault(_UiIcon);
    var _classlist = (__webpack_require__(19), __webpack_require__(20));
    var params = _interopRequireDefault(_classlist);
    var _createClass = function() {
      /**
       * @param {!Function} d
       * @param {string} props
       * @return {undefined}
       */
      function e(d, props) {
        /** @type {number} */
        var i = 0;
        for (; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          /** @type {boolean} */
          descriptor.configurable = true;
          if ("value" in descriptor) {
            /** @type {boolean} */
            descriptor.writable = true;
          }
          Object.defineProperty(d, descriptor.key, descriptor);
        }
      }
      return function(t, n, a) {
        return n && e(t.prototype, n), a && e(t, a), t;
      };
    }();
    var _prepareStyleProperties = __webpack_require__(0);
    var _prepareStyleProperties2 = _interopRequireDefault(_prepareStyleProperties);
    var _Trans = (__webpack_require__(11), __webpack_require__(12));
    var _Trans2 = _interopRequireDefault(_Trans);
    var data = params.default.Item;
    var FormioElement = (_UiIcon2.default.Group, _normalizeDataUri2.default.Option, params.default.create()(function(options) {
      var visible = options.visible;
      var onCancel = options.onCancel;
      var onCreate = options.onCreate;
      var root = options.form;
      var readOnlyFn = options.tipo;
      var fullImg = root.getFieldDecorator;
      return _prepareStyleProperties2.default.createElement(_suggestItem2.default, {
        visible : visible,
        title : "Agregar observaci\u00f3n al " + readOnlyFn,
        okText : "Guardar",
        onCancel : onCancel,
        onOk : onCreate
      }, _prepareStyleProperties2.default.createElement(params.default, {
        layout : "vertical"
      }, _prepareStyleProperties2.default.createElement(data, {
        label : "Descripci\u00f3n de la observaci\u00f3n"
      }, fullImg("observacion", {
        rules : [{
          required : true,
          message : "La observaci\u00f3n debe llevar una descripci\u00f3n"
        }, {
          min : 5,
          message : "El minimo de caracteres es de 5."
        }, {
          max : 500,
          message : "El mensaje debe tener como maximo 500 caracteres."
        }]
      })(_prepareStyleProperties2.default.createElement(_UiIcon2.default.TextArea, {
        style : {
          width : "100%"
        },
        placeholder : "Descripci\u00f3n de la observacion...",
        rows : 4
      })))));
    }));
    var group = function(_EventEmitter) {
      /**
       * @param {!Object} element
       * @return {?}
       */
      function Agent(element) {
        _classCallCheck(this, Agent);
        var $scope = _possibleConstructorReturn(this, (Agent.__proto__ || Object.getPrototypeOf(Agent)).call(this, element));
        return $scope.showModal = function() {
          $scope.setState({
            visible : true
          });
        }, $scope.handleCancel = function() {
          $scope.form.resetFields();
          $scope.setState({
            visible : false
          });
        }, $scope.handleCreate = function() {
          var form = $scope.form;
          form.validateFields(function(canCreateDiscussions, n) {
            if (!canCreateDiscussions) {
              _Trans2.default.post("/api/proyecto/observacion", {
                observacion : n.observacion,
                tipo : $scope.state.tipo,
                id_proyecto : $scope.state.id_proyecto,
                id_asesor_interno : $scope.state.usuario.id_docente
              }).then(function(getFilesReply) {
                if (200 === getFilesReply.status) {
                  _deepAssign2.default.success("Observaci\u00f3n agregada correctamente");
                  $scope.setState({
                    visible : false
                  });
                  form.resetFields();
                  $scope.props.updateObservaciones();
                } else {
                  _suggestItem2.default.error({
                    title : "Error al agregar la observaci\u00f3n. Revisar los siguientes campos",
                    content : _prepareStyleProperties2.default.createElement("div", null, getFilesReply.data.errores),
                    onOk : function() {
                    }
                  });
                }
              }).catch(function(mnemonics) {
                _deepAssign2.default.error(mnemonics);
              });
            }
          });
        }, $scope.saveFormRef = function(data) {
          /** @type {!Object} */
          $scope.form = data;
        }, $scope.state = {
          visible : element.visible,
          tipo : element.tipo,
          id_proyecto : element.id_proyecto,
          usuario : element.usuario
        }, $scope;
      }
      return _inherits(Agent, _EventEmitter), _createClass(Agent, [{
        key : "componentWillReceiveProps",
        value : function(element) {
          var visible = element.visible;
          var tipo = element.tipo;
          var fullLabel = element.id_proyecto;
          var currentSpecificities = element.usuario;
          this.setState({
            visible : visible,
            tipo : tipo,
            id_proyecto : fullLabel,
            usuario : currentSpecificities
          });
        }
      }, {
        key : "render",
        value : function() {
          return _prepareStyleProperties2.default.createElement("div", null, _prepareStyleProperties2.default.createElement(FormioElement, {
            ref : this.saveFormRef,
            visible : this.state.visible,
            onCancel : this.handleCancel,
            onCreate : this.handleCreate,
            tipo : this.state.tipo
          }));
        }
      }]), Agent;
    }(_prepareStyleProperties.Component);
    arg.default = group;
  },
  1104 : function(allegedI, arg, __webpack_require__) {
    /**
     * @param {!Object} obj
     * @return {?}
     */
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default : obj
      };
    }
    /**
     * @param {!AudioNode} instance
     * @param {!Function} Constructor
     * @return {undefined}
     */
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    /**
     * @param {string} self
     * @param {string} call
     * @return {?}
     */
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return !call || "object" != typeof call && "function" != typeof call ? self : call;
    }
    /**
     * @param {!Object} subClass
     * @param {!Object} superClass
     * @return {undefined}
     */
    function _inherits(subClass, superClass) {
      if ("function" != typeof superClass && null !== superClass) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      /** @type {!Object} */
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor : {
          value : subClass,
          enumerable : false,
          writable : true,
          configurable : true
        }
      });
      if (superClass) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(subClass, superClass);
        } else {
          /** @type {!Object} */
          subClass.__proto__ = superClass;
        }
      }
    }
    Object.defineProperty(arg, "__esModule", {
      value : true
    });
    var _deepAssign = (__webpack_require__(15), __webpack_require__(16));
    var _deepAssign2 = _interopRequireDefault(_deepAssign);
    var _suggestItem = (__webpack_require__(28), __webpack_require__(29));
    var _suggestItem2 = _interopRequireDefault(_suggestItem);
    var _normalizeDataUri = (__webpack_require__(24), __webpack_require__(25));
    var _normalizeDataUri2 = _interopRequireDefault(_normalizeDataUri);
    var _UiIcon = (__webpack_require__(18), __webpack_require__(22));
    var _UiIcon2 = _interopRequireDefault(_UiIcon);
    var _classlist = (__webpack_require__(19), __webpack_require__(20));
    var params = _interopRequireDefault(_classlist);
    var _createClass = function() {
      /**
       * @param {!Function} d
       * @param {string} props
       * @return {undefined}
       */
      function e(d, props) {
        /** @type {number} */
        var i = 0;
        for (; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          /** @type {boolean} */
          descriptor.configurable = true;
          if ("value" in descriptor) {
            /** @type {boolean} */
            descriptor.writable = true;
          }
          Object.defineProperty(d, descriptor.key, descriptor);
        }
      }
      return function(t, n, a) {
        return n && e(t.prototype, n), a && e(t, a), t;
      };
    }();
    var _prepareStyleProperties = __webpack_require__(0);
    var _prepareStyleProperties2 = _interopRequireDefault(_prepareStyleProperties);
    var _Trans = (__webpack_require__(11), __webpack_require__(12));
    var _Trans2 = _interopRequireDefault(_Trans);
    var data = params.default.Item;
    var FormioElement = (_UiIcon2.default.Group, _normalizeDataUri2.default.Option, params.default.create()(function(config) {
      var visible = config.visible;
      var onCancel = config.onCancel;
      var onCreate = config.onCreate;
      var options = config.form;
      var lint = options.getFieldDecorator;
      return _prepareStyleProperties2.default.createElement(_suggestItem2.default, {
        visible : visible,
        title : "Agregar soluci\u00f3n recomendada",
        okText : "Guardar",
        onCancel : onCancel,
        onOk : onCreate
      }, _prepareStyleProperties2.default.createElement(params.default, {
        layout : "vertical"
      }, _prepareStyleProperties2.default.createElement(data, {
        label : "Soluci\u00f3n"
      }, lint("solucion", {
        rules : [{
          required : true,
          message : "La solucion debe llevar una descripci\u00f3n"
        }, {
          min : 5,
          message : "El minimo de caracteres es de 5."
        }, {
          max : 500,
          message : "El mensaje debe tener como maximo 500 caracteres."
        }]
      })(_prepareStyleProperties2.default.createElement(_UiIcon2.default.TextArea, {
        style : {
          width : "100%"
        },
        placeholder : "Descripci\u00f3n de la soluci\u00f3n..",
        rows : 4
      })))));
    }));
    var group = function(_EventEmitter) {
      /**
       * @param {!Object} element
       * @return {?}
       */
      function Agent(element) {
        _classCallCheck(this, Agent);
        var $scope = _possibleConstructorReturn(this, (Agent.__proto__ || Object.getPrototypeOf(Agent)).call(this, element));
        return $scope.showModal = function() {
          $scope.setState({
            visible : true
          });
        }, $scope.handleCancel = function() {
          $scope.form.resetFields();
          $scope.setState({
            visible : false
          });
        }, $scope.handleCreate = function() {
          var form = $scope.form;
          form.validateFields(function(canCreateDiscussions, n) {
            if (!canCreateDiscussions) {
              _Trans2.default.post("/api/proyecto/asesoria/solucion_recomendada", {
                solucion : n.solucion,
                id_asesoria : $scope.state.id_asesoria
              }).then(function(getFilesReply) {
                if (200 === getFilesReply.status) {
                  _deepAssign2.default.success("Soluci\u00f3n recomendada agregada correctamente");
                  $scope.setState({
                    visible : false
                  });
                  form.resetFields();
                } else {
                  _suggestItem2.default.error({
                    title : "Error al agregar la soluci\u00f3n. Revisar los siguientes campos",
                    content : _prepareStyleProperties2.default.createElement("div", null, getFilesReply.data.errores),
                    onOk : function() {
                    }
                  });
                }
              }).catch(function(mnemonics) {
                _deepAssign2.default.error(mnemonics);
              });
            }
          });
        }, $scope.saveFormRef = function(data) {
          /** @type {!Object} */
          $scope.form = data;
        }, $scope.state = {
          visible : element.visible,
          id_asesoria : element.id_asesoria
        }, $scope;
      }
      return _inherits(Agent, _EventEmitter), _createClass(Agent, [{
        key : "componentWillReceiveProps",
        value : function(_ref) {
          var visible = _ref.visible;
          var _ref$mapStateToPropsF = _ref.id_asesoria;
          this.setState({
            visible : visible,
            id_asesoria : _ref$mapStateToPropsF
          });
        }
      }, {
        key : "render",
        value : function() {
          return _prepareStyleProperties2.default.createElement("div", null, _prepareStyleProperties2.default.createElement(FormioElement, {
            ref : this.saveFormRef,
            visible : this.state.visible,
            onCancel : this.handleCancel,
            onCreate : this.handleCreate
          }));
        }
      }]), Agent;
    }(_prepareStyleProperties.Component);
    arg.default = group;
  },
  1105 : function(module, exports, __webpack_require__) {
    /**
     * @param {!Object} obj
     * @return {?}
     */
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default : obj
      };
    }
    /**
     * @param {!AudioNode} instance
     * @param {!Function} Constructor
     * @return {undefined}
     */
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    /**
     * @param {string} self
     * @param {string} call
     * @return {?}
     */
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return !call || "object" != typeof call && "function" != typeof call ? self : call;
    }
    /**
     * @param {!Object} subClass
     * @param {!Object} superClass
     * @return {undefined}
     */
    function _inherits(subClass, superClass) {
      if ("function" != typeof superClass && null !== superClass) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      /** @type {!Object} */
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor : {
          value : subClass,
          enumerable : false,
          writable : true,
          configurable : true
        }
      });
      if (superClass) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(subClass, superClass);
        } else {
          /** @type {!Object} */
          subClass.__proto__ = superClass;
        }
      }
    }
    Object.defineProperty(exports, "__esModule", {
      value : true
    });
    var _suggestItem = (__webpack_require__(33), __webpack_require__(34));
    var _suggestItem2 = _interopRequireDefault(_suggestItem);
    var _suggestList = (__webpack_require__(50), __webpack_require__(51));
    var _suggestList2 = _interopRequireDefault(_suggestList);
    var _DraggableCore = (__webpack_require__(37), __webpack_require__(36));
    var _DraggableCore2 = _interopRequireDefault(_DraggableCore);
    var _normalizeDataUri = (__webpack_require__(31), __webpack_require__(32));
    var _normalizeDataUri2 = _interopRequireDefault(_normalizeDataUri);
    var _UiIcon = (__webpack_require__(48), __webpack_require__(49));
    var _UiIcon2 = _interopRequireDefault(_UiIcon);
    var _CalendarDay = (__webpack_require__(77), __webpack_require__(78));
    var _CalendarDay2 = _interopRequireDefault(_CalendarDay);
    var _AboutPage = (__webpack_require__(104), __webpack_require__(105));
    var _AboutPage2 = _interopRequireDefault(_AboutPage);
    var _CalendarEvent = (__webpack_require__(35), __webpack_require__(13));
    var _CalendarEvent2 = _interopRequireDefault(_CalendarEvent);
    var _AppDownload = (__webpack_require__(15), __webpack_require__(16));
    var inst = _interopRequireDefault(_AppDownload);
    var _buildPageNumber = (__webpack_require__(19), __webpack_require__(20));
    var _buildPageNumber2 = _interopRequireDefault(_buildPageNumber);
    var _createClass = function() {
      /**
       * @param {!Function} d
       * @param {string} props
       * @return {undefined}
       */
      function e(d, props) {
        /** @type {number} */
        var i = 0;
        for (; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          /** @type {boolean} */
          descriptor.configurable = true;
          if ("value" in descriptor) {
            /** @type {boolean} */
            descriptor.writable = true;
          }
          Object.defineProperty(d, descriptor.key, descriptor);
        }
      }
      return function(t, n, a) {
        return n && e(t.prototype, n), a && e(t, a), t;
      };
    }();
    var _prepareStyleProperties = __webpack_require__(0);
    var _prepareStyleProperties2 = _interopRequireDefault(_prepareStyleProperties);
    var _toHyphenCase = __webpack_require__(45);
    var _toHyphenCase2 = _interopRequireDefault(_toHyphenCase);
    var _noframeworkWaypoints = __webpack_require__(1);
    var _noframeworkWaypoints2 = _interopRequireDefault(_noframeworkWaypoints);
    var _deepAssign = __webpack_require__(12);
    var _deepAssign2 = _interopRequireDefault(_deepAssign);
    var _CalendarTitle = __webpack_require__(495);
    var _CalendarTitle2 = _interopRequireDefault(_CalendarTitle);
    var _SearchIndex = __webpack_require__(1106);
    var _SearchIndex2 = _interopRequireDefault(_SearchIndex);
    var SuggestList = (_buildPageNumber2.default.Item, function(_EventEmitter) {
      /**
       * @param {?} data
       * @return {?}
       */
      function Agent(data) {
        _classCallCheck(this, Agent);
        var _this = _possibleConstructorReturn(this, (Agent.__proto__ || Object.getPrototypeOf(Agent)).call(this, data));
        return _this.updateSeguimientos = function() {
          _this.props.updateSeguimientos();
        }, _this.onChangeObservacion = function(canCreateDiscussions, inEditorHeight) {
          _deepAssign2.default.put("/api/proyecto/revision_seguimiento", {
            id_revision_seguimiento : canCreateDiscussions,
            solucionado : inEditorHeight
          }).then(function(testsStatus) {
            if (200 === testsStatus.status) {
              inst.default.success("La revisi\u00f3n se ha actulizado satisfactoriamente");
            } else {
              inst.default.error("Error al actualizar la revisi\u00f3n, favor de reportar al administrador.");
            }
          });
        }, _this.updateProyecto = function() {
          _this.props.updateProyecto();
        }, _this.showEvaluacionAsesorInterno = function(canCreateDiscussions) {
          _deepAssign2.default.get("/api/proyecto/evaluacionAnexoXXIX/criterios/asesor_interno/").then(function(getFilesReply) {
            if (200 === getFilesReply.status) {
              _this.setState({
                criterios_evaluacion : getFilesReply.data,
                visible_observacion : false,
                visibleEvaluacionAsesorInterno : true
              });
            } else {
              inst.default.warn("Error al realizar petici\u00f3n de criterios de evaluaci\u00f3n, favor de reportar al administrador.");
            }
          });
        }, _this.state = {
          seguimiento : data.seguimiento,
          visible_observacion : false,
          usuario : data.usuario,
          visibleEvaluacionAsesorInterno : false,
          criterios_evaluacion : []
        }, _this;
      }
      return _inherits(Agent, _EventEmitter), _createClass(Agent, [{
        key : "componentWillReceiveProps",
        value : function(recB) {
          this.setState({
            seguimiento : recB.seguimiento,
            visible_observacion : false,
            usuario : recB.usuario,
            visibleEvaluacionAsesorInterno : false,
            criterios_evaluacion : []
          });
        }
      }, {
        key : "showAddObservacionSeguimiento",
        value : function() {
          this.setState({
            visible_observacion : true,
            visibleEvaluacionAsesorInterno : false
          });
        }
      }, {
        key : "render",
        value : function() {
          var e = this;
          var s = this.state;
          var user = s.seguimiento;
          var n = s.usuario;
          var selected = s.visible_observacion;
          var value = s.visibleEvaluacionAsesorInterno;
          var sAttrs = s.criterios_evaluacion;
          var dataSource2 = user.revisiones_seguimiento.map(function(newBookmark, canCreateDiscussions) {
            return {
              key : _toHyphenCase2.default.v1(),
              id : newBookmark.id,
              observacion : newBookmark.observacion,
              solucionado : newBookmark.solucionado,
              fecha : (0, _noframeworkWaypoints2.default)(newBookmark.createdAt).utc().format("LL"),
              docente : newBookmark.docente
            };
          });
          /** @type {!Array} */
          var pivotColValues = [{
            className : "center-text",
            title : "Fecha de observaci\u00f3n",
            dataIndex : "fecha",
            key : "fecha"
          }, {
            title : "Solucionado",
            dataIndex : "solucionado",
            key : "solucionado",
            render : function(index, data) {
              return _prepareStyleProperties2.default.createElement("span", null, data.docente.id == n.id_docente ? _prepareStyleProperties2.default.createElement(_AboutPage2.default, {
                onChange : function(inEditorHeight) {
                  return e.onChangeObservacion(data.id, inEditorHeight);
                },
                defaultChecked : data.solucionado,
                checkedChildren : "Solucionado",
                unCheckedChildren : _prepareStyleProperties2.default.createElement(_CalendarEvent2.default, {
                  type : "cross"
                })
              }) : _prepareStyleProperties2.default.createElement("p", null, data.solucionado ? "Si" : "No"));
            }
          }, {
            className : "center-text",
            title : "Realizada por",
            dataIndex : "docente",
            key : "docente",
            render : function(canvas, lagOffset) {
              return _prepareStyleProperties2.default.createElement("p", null, lagOffset.docente.titulo + " " + lagOffset.docente.nombre + " " + lagOffset.docente.ap_paterno + " " + lagOffset.docente.ap_materno);
            }
          }, {
            className : "center-text",
            title : "Observaci\u00f3n",
            dataIndex : "observacion",
            key : "observacion"
          }];
          return _prepareStyleProperties2.default.createElement(_suggestItem2.default, null, _prepareStyleProperties2.default.createElement(_normalizeDataUri2.default, {
            xs : 24,
            lg : 24,
            style : {
              marginTop : 20,
              marginBottom : 30
            }
          }, user.url_seguimiento ? _prepareStyleProperties2.default.createElement("div", null, _prepareStyleProperties2.default.createElement("p", null, "Link del seguimiento: "), _prepareStyleProperties2.default.createElement(_CalendarDay2.default, {
            defaultFileList : [{
              uid : -2,
              name : "Seguimiento",
              status : "done",
              url : user.url_seguimiento
            }]
          })) : _prepareStyleProperties2.default.createElement(_UiIcon2.default, {
            message : "El alumno no ha subido su seguimiento",
            type : "warning",
            showIcon : true
          })), "2015-2016" === user.proyecto.anteproyecto.alumno.plan_estudios && _prepareStyleProperties2.default.createElement("div", null, _prepareStyleProperties2.default.createElement(_normalizeDataUri2.default, {
            className : "border-top",
            xs : 24,
            lg : 24
          }, _prepareStyleProperties2.default.createElement("h3", null, "Evaluaci\u00f3n del seguimiento de residencia"), user.url_seguimiento ? _prepareStyleProperties2.default.createElement("div", null, _prepareStyleProperties2.default.createElement(_DraggableCore2.default, {
            style : {
              marginBottom : 30
            },
            onClick : function() {
              return e.showEvaluacionAsesorInterno(user.proyecto.anteproyecto.alumno);
            },
            icon : "bars",
            type : "primary"
          }, "Realizar evaluaci\u00f3n"), _prepareStyleProperties2.default.createElement(_SearchIndex2.default, {
            seguimiento : user,
            visible : value,
            criterios_evaluacion : sAttrs
          })) : _prepareStyleProperties2.default.createElement(_UiIcon2.default, {
            message : "El alumno debe subir el avance de su seguimiento para continuar con el proceso de evaluaci\u00f3n",
            type : "warning",
            showIcon : true
          }))), _prepareStyleProperties2.default.createElement(_normalizeDataUri2.default, {
            className : "border-top",
            xs : 24,
            lg : 24
          }, _prepareStyleProperties2.default.createElement(_DraggableCore2.default, {
            type : "primary",
            icon : "plus",
            onClick : function() {
              return e.showAddObservacionSeguimiento();
            }
          }, "Agregar observaci\u00f3n"), _prepareStyleProperties2.default.createElement(_suggestList2.default, {
            title : function() {
              return "Observaciones del seguimiento";
            },
            columns : pivotColValues,
            dataSource : dataSource2,
            pagination : {
              pageSize : 4
            }
          })), _prepareStyleProperties2.default.createElement(_CalendarTitle2.default, {
            updateProyecto : this.updateProyecto.bind(this),
            updateSeguimientos : this.updateSeguimientos.bind(this),
            usuario : n,
            visible : selected,
            id_seguimiento : user.id
          }));
        }
      }]), Agent;
    }(_prepareStyleProperties.Component));
    exports.default = SuggestList;
  },
  1106 : function(cond, t, __webpack_require__) {
    /**
     * @param {!Object} obj
     * @return {?}
     */
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default : obj
      };
    }
    /**
     * @param {!AudioNode} instance
     * @param {!Function} Constructor
     * @return {undefined}
     */
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    /**
     * @param {string} self
     * @param {string} call
     * @return {?}
     */
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return !call || "object" != typeof call && "function" != typeof call ? self : call;
    }
    /**
     * @param {!Object} subClass
     * @param {!Object} superClass
     * @return {undefined}
     */
    function _inherits(subClass, superClass) {
      if ("function" != typeof superClass && null !== superClass) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      /** @type {!Object} */
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor : {
          value : subClass,
          enumerable : false,
          writable : true,
          configurable : true
        }
      });
      if (superClass) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(subClass, superClass);
        } else {
          /** @type {!Object} */
          subClass.__proto__ = superClass;
        }
      }
    }
    Object.defineProperty(t, "__esModule", {
      value : true
    });
    var _deepAssign = (__webpack_require__(15), __webpack_require__(16));
    var _deepAssign2 = _interopRequireDefault(_deepAssign);
    var _suggestItem = (__webpack_require__(28), __webpack_require__(29));
    var _suggestItem2 = _interopRequireDefault(_suggestItem);
    var _suggestList = (__webpack_require__(24), __webpack_require__(25));
    var _suggestList2 = _interopRequireDefault(_suggestList);
    var _normalizeDataUri = (__webpack_require__(18), __webpack_require__(22));
    var _normalizeDataUri2 = _interopRequireDefault(_normalizeDataUri);
    var _UiIcon = (__webpack_require__(19), __webpack_require__(20));
    var params = _interopRequireDefault(_UiIcon);
    var _createClass = function() {
      /**
       * @param {!Function} d
       * @param {string} props
       * @return {undefined}
       */
      function e(d, props) {
        /** @type {number} */
        var i = 0;
        for (; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          /** @type {boolean} */
          descriptor.configurable = true;
          if ("value" in descriptor) {
            /** @type {boolean} */
            descriptor.writable = true;
          }
          Object.defineProperty(d, descriptor.key, descriptor);
        }
      }
      return function(t, n, a) {
        return n && e(t.prototype, n), a && e(t, a), t;
      };
    }();
    var _prepareStyleProperties = __webpack_require__(0);
    var _prepareStyleProperties2 = _interopRequireDefault(_prepareStyleProperties);
    var _classlist = (__webpack_require__(11), __webpack_require__(12));
    var _classlist2 = _interopRequireDefault(_classlist);
    var data = params.default.Item;
    var FormioElement = (_normalizeDataUri2.default.Group, _suggestList2.default.Option);
    var DropIndicator = params.default.create()(function(options) {
      var visible = options.visible;
      var onCancel = options.onCancel;
      var onCreate = options.onCreate;
      var args = options.form;
      var o = options.criterios;
      var readOnlyFn = options.seguimiento;
      var callback = args.getFieldDecorator;
      return _prepareStyleProperties2.default.createElement(_suggestItem2.default, {
        visible : visible,
        title : "Evaluaci\u00f3n de seguimiento de residencia",
        okText : "Guardar",
        onCancel : onCancel,
        onOk : onCreate,
        width : 600,
        style : {
          top : 20
        }
      }, _prepareStyleProperties2.default.createElement(params.default, {
        layout : "vertical"
      }, null !== o ? o.map(function(object, awsKey) {
        return _prepareStyleProperties2.default.createElement(data, {
          key : awsKey,
          label : awsKey + 1 + ". " + object.descripcion,
          style : {
            width : "100%"
          }
        }, callback("" + object.id, {
          rules : [{
            required : true,
            message : "La pregunta debe tener un valor de evaluaci\u00f3n."
          }],
          initialValue : null !== readOnlyFn.evaluacion_asesor_interno ? readOnlyFn.evaluacion_asesor_interno.criterios_de_evaluacion.find(function(i) {
            return i.id_criterio == object.id;
          }).valor_de_evaluacion : null
        })(_prepareStyleProperties2.default.createElement(_suggestList2.default, {
          placeholder : ""
        }, Array(object.valor_max + 1).fill(1).map(function(canCreateDiscussions, a) {
          return _prepareStyleProperties2.default.createElement(FormioElement, {
            key : a,
            value : "" + a
          }, a);
        }))));
      }) : null, _prepareStyleProperties2.default.createElement(data, {
        label : "Observaciones",
        style : {
          width : "100%"
        }
      }, callback("observaciones", {
        rules : [{
          min : 5,
          message : "El minimo de caracteres es de 5."
        }, {
          max : 500,
          message : "Las observaciones debe tener como maximo 500 caracteres."
        }],
        initialValue : null !== readOnlyFn.evaluacion_asesor_interno ? readOnlyFn.evaluacion_asesor_interno.observaciones : null
      })(_prepareStyleProperties2.default.createElement(_normalizeDataUri2.default.TextArea, {
        placeholder : "Escriba aqu\u00ed sus observaciones",
        type : "text",
        autosize : {
          minRows : 2,
          maxRows : 6
        }
      })))));
    });
    var offsetFromCenter = function(_EventEmitter) {
      /**
       * @param {!Object} element
       * @return {?}
       */
      function Agent(element) {
        _classCallCheck(this, Agent);
        var $scope = _possibleConstructorReturn(this, (Agent.__proto__ || Object.getPrototypeOf(Agent)).call(this, element));
        return $scope.showModal = function() {
          $scope.setState({
            visible : true
          });
        }, $scope.handleCancel = function() {
          $scope.setState({
            visible : false
          });
        }, $scope.handleCreate = function() {
          $scope.form.validateFields(function(canCreateDiscussions, contextReference) {
            if (!canCreateDiscussions) {
              console.log("Received values of form: ", contextReference);
              _classlist2.default.put("/api/proyecto/evaluacion_seguimiento/asesor_interno", {
                id_seguimiento : $scope.state.seguimiento.id,
                observaciones : contextReference.observaciones,
                criterios_evaluacion : contextReference,
                criterios : $scope.state.criterios
              }).then(function(getFilesReply) {
                if (200 === getFilesReply.status) {
                  _deepAssign2.default.success("Evaluaci\u00f3n del seguimiento guardada!");
                  $scope.setState({
                    visible : false
                  });
                } else {
                  _suggestItem2.default.error({
                    title : "Error al guardar la evaluaci\u00f3n. Revisar los siguientes campos",
                    content : _prepareStyleProperties2.default.createElement("div", null, getFilesReply.data.errores),
                    onOk : function() {
                    }
                  });
                }
              }).catch(function(mnemonics) {
                _deepAssign2.default.error(mnemonics);
              });
            }
          });
        }, $scope.saveFormRef = function(data) {
          /** @type {!Object} */
          $scope.form = data;
        }, $scope.state = {
          visible : element.visible,
          criterios : element.criterios_evaluacion,
          seguimiento : element.seguimiento
        }, $scope;
      }
      return _inherits(Agent, _EventEmitter), _createClass(Agent, [{
        key : "componentWillReceiveProps",
        value : function(e) {
          var visible = e.visible;
          var pubDateEl = e.criterios_evaluacion;
          var psNode = e.seguimiento;
          this.setState({
            visible : visible,
            criterios : pubDateEl,
            seguimiento : psNode
          });
        }
      }, {
        key : "render",
        value : function() {
          return _prepareStyleProperties2.default.createElement("div", null, _prepareStyleProperties2.default.createElement(DropIndicator, {
            ref : this.saveFormRef,
            visible : this.state.visible,
            onCancel : this.handleCancel,
            onCreate : this.handleCreate,
            criterios : this.state.criterios,
            seguimiento : this.state.seguimiento
          }));
        }
      }]), Agent;
    }(_prepareStyleProperties.Component);
    t.default = offsetFromCenter;
  },
  1107 : function(cond, t, __webpack_require__) {
    /**
     * @param {!Object} obj
     * @return {?}
     */
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default : obj
      };
    }
    /**
     * @param {!AudioNode} instance
     * @param {!Function} Constructor
     * @return {undefined}
     */
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    /**
     * @param {string} self
     * @param {string} call
     * @return {?}
     */
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return !call || "object" != typeof call && "function" != typeof call ? self : call;
    }
    /**
     * @param {!Object} subClass
     * @param {!Object} superClass
     * @return {undefined}
     */
    function _inherits(subClass, superClass) {
      if ("function" != typeof superClass && null !== superClass) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      /** @type {!Object} */
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor : {
          value : subClass,
          enumerable : false,
          writable : true,
          configurable : true
        }
      });
      if (superClass) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(subClass, superClass);
        } else {
          /** @type {!Object} */
          subClass.__proto__ = superClass;
        }
      }
    }
    Object.defineProperty(t, "__esModule", {
      value : true
    });
    var _deepAssign = (__webpack_require__(15), __webpack_require__(16));
    var _deepAssign2 = _interopRequireDefault(_deepAssign);
    var _suggestItem = (__webpack_require__(28), __webpack_require__(29));
    var _suggestItem2 = _interopRequireDefault(_suggestItem);
    var _suggestList = (__webpack_require__(24), __webpack_require__(25));
    var _suggestList2 = _interopRequireDefault(_suggestList);
    var _normalizeDataUri = (__webpack_require__(18), __webpack_require__(22));
    var _normalizeDataUri2 = _interopRequireDefault(_normalizeDataUri);
    var _UiIcon = (__webpack_require__(19), __webpack_require__(20));
    var params = _interopRequireDefault(_UiIcon);
    var _createClass = function() {
      /**
       * @param {!Function} d
       * @param {string} props
       * @return {undefined}
       */
      function e(d, props) {
        /** @type {number} */
        var i = 0;
        for (; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          /** @type {boolean} */
          descriptor.configurable = true;
          if ("value" in descriptor) {
            /** @type {boolean} */
            descriptor.writable = true;
          }
          Object.defineProperty(d, descriptor.key, descriptor);
        }
      }
      return function(t, n, a) {
        return n && e(t.prototype, n), a && e(t, a), t;
      };
    }();
    var _prepareStyleProperties = __webpack_require__(0);
    var _prepareStyleProperties2 = _interopRequireDefault(_prepareStyleProperties);
    var _classlist = (__webpack_require__(11), __webpack_require__(12));
    var _classlist2 = _interopRequireDefault(_classlist);
    var data = params.default.Item;
    var FormioElement = (_normalizeDataUri2.default.Group, _suggestList2.default.Option);
    var DropIndicator = params.default.create()(function(options) {
      var visible = options.visible;
      var onCancel = options.onCancel;
      var onCreate = options.onCreate;
      var args = options.form;
      var o = options.criterios;
      var readOnlyFn = options.proyecto;
      var callback = args.getFieldDecorator;
      return _prepareStyleProperties2.default.createElement(_suggestItem2.default, {
        visible : visible,
        title : "Evaluaci\u00f3n de residencia profesional",
        okText : "Guardar",
        onCancel : onCancel,
        onOk : onCreate,
        width : 600,
        style : {
          top : 20
        }
      }, _prepareStyleProperties2.default.createElement(params.default, {
        layout : "vertical"
      }, null !== o ? o.map(function(object, awsKey) {
        return _prepareStyleProperties2.default.createElement(data, {
          key : awsKey,
          label : awsKey + 1 + ". " + object.descripcion,
          style : {
            width : "100%"
          }
        }, callback("" + object.id, {
          rules : [{
            required : true,
            message : "La pregunta debe tener un valor de evaluaci\u00f3n."
          }],
          initialValue : null !== readOnlyFn.evaluacion_asesor_interno ? readOnlyFn.evaluacion_asesor_interno.criterios_de_evaluacion.find(function(i) {
            return i.id_criterio == object.id;
          }).valor_de_evaluacion : null
        })(_prepareStyleProperties2.default.createElement(_suggestList2.default, {
          placeholder : ""
        }, Array(object.valor_max + 1).fill(1).map(function(canCreateDiscussions, a) {
          return _prepareStyleProperties2.default.createElement(FormioElement, {
            key : a,
            value : "" + a
          }, a);
        }))));
      }) : null, _prepareStyleProperties2.default.createElement(data, {
        label : "Observaciones",
        style : {
          width : "100%"
        }
      }, callback("observaciones", {
        rules : [{
          min : 5,
          message : "El minimo de caracteres es de 5."
        }, {
          max : 500,
          message : "Las observaciones debe tener como maximo 500 caracteres."
        }],
        initialValue : null !== readOnlyFn.evaluacion_asesor_interno ? readOnlyFn.evaluacion_asesor_interno.observaciones : null
      })(_prepareStyleProperties2.default.createElement(_normalizeDataUri2.default.TextArea, {
        placeholder : "Escriba aqu\u00ed sus observaciones",
        type : "text",
        autosize : {
          minRows : 2,
          maxRows : 6
        }
      })))));
    });
    var offsetFromCenter = function(_EventEmitter) {
      /**
       * @param {!Object} element
       * @return {?}
       */
      function Agent(element) {
        _classCallCheck(this, Agent);
        var $scope = _possibleConstructorReturn(this, (Agent.__proto__ || Object.getPrototypeOf(Agent)).call(this, element));
        return $scope.showModal = function() {
          $scope.setState({
            visible : true
          });
        }, $scope.handleCancel = function() {
          $scope.setState({
            visible : false
          });
        }, $scope.handleCreate = function() {
          var form = $scope.form;
          form.validateFields(function(canCreateDiscussions, contextReference) {
            if (!canCreateDiscussions) {
              console.log("Received values of form: ", contextReference);
              _classlist2.default.put("/api/proyecto/evaluacion/asesor_interno", {
                id_proyecto : $scope.state.proyecto.id,
                observaciones : contextReference.observaciones,
                criterios_evaluacion : contextReference,
                criterios : $scope.state.criterios
              }).then(function(getFilesReply) {
                if (200 === getFilesReply.status) {
                  _deepAssign2.default.success("Evaluaci\u00f3n guardada!");
                  $scope.props.updateProyecto();
                  $scope.setState({
                    visible : false
                  });
                  form.resetFields();
                } else {
                  _suggestItem2.default.error({
                    title : "Error al guardar la evaluaci\u00f3n. Revisar los siguientes campos",
                    content : _prepareStyleProperties2.default.createElement("div", null, getFilesReply.data.errores),
                    onOk : function() {
                    }
                  });
                }
              }).catch(function(mnemonics) {
                _deepAssign2.default.error(mnemonics);
              });
            }
          });
        }, $scope.saveFormRef = function(data) {
          /** @type {!Object} */
          $scope.form = data;
        }, $scope.state = {
          visible : element.visible,
          criterios : element.criterios_evaluacion,
          proyecto : element.proyecto
        }, $scope;
      }
      return _inherits(Agent, _EventEmitter), _createClass(Agent, [{
        key : "componentWillReceiveProps",
        value : function(e) {
          var visible = e.visible;
          var pubDateEl = e.criterios_evaluacion;
          var psNode = e.proyecto;
          this.setState({
            visible : visible,
            criterios : pubDateEl,
            proyecto : psNode
          });
        }
      }, {
        key : "render",
        value : function() {
          return _prepareStyleProperties2.default.createElement("div", null, _prepareStyleProperties2.default.createElement(DropIndicator, {
            ref : this.saveFormRef,
            visible : this.state.visible,
            onCancel : this.handleCancel,
            onCreate : this.handleCreate,
            criterios : this.state.criterios,
            proyecto : this.state.proyecto
          }));
        }
      }]), Agent;
    }(_prepareStyleProperties.Component);
    t.default = offsetFromCenter;
  },
  1108 : function(cond, t, __webpack_require__) {
    /**
     * @param {!Object} obj
     * @return {?}
     */
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default : obj
      };
    }
    /**
     * @param {!AudioNode} instance
     * @param {!Function} Constructor
     * @return {undefined}
     */
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    /**
     * @param {string} self
     * @param {string} call
     * @return {?}
     */
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return !call || "object" != typeof call && "function" != typeof call ? self : call;
    }
    /**
     * @param {!Object} subClass
     * @param {!Object} superClass
     * @return {undefined}
     */
    function _inherits(subClass, superClass) {
      if ("function" != typeof superClass && null !== superClass) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      /** @type {!Object} */
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor : {
          value : subClass,
          enumerable : false,
          writable : true,
          configurable : true
        }
      });
      if (superClass) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(subClass, superClass);
        } else {
          /** @type {!Object} */
          subClass.__proto__ = superClass;
        }
      }
    }
    Object.defineProperty(t, "__esModule", {
      value : true
    });
    var _suggestList = (__webpack_require__(35), __webpack_require__(13));
    var _suggestList2 = _interopRequireDefault(_suggestList);
    var _suggestItem = (__webpack_require__(98), __webpack_require__(86));
    var _suggestItem2 = _interopRequireDefault(_suggestItem);
    var _normalizeDataUri = (__webpack_require__(65), __webpack_require__(66));
    var _normalizeDataUri2 = _interopRequireDefault(_normalizeDataUri);
    var _createClass = function() {
      /**
       * @param {!Function} d
       * @param {string} props
       * @return {undefined}
       */
      function e(d, props) {
        /** @type {number} */
        var i = 0;
        for (; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          /** @type {boolean} */
          descriptor.configurable = true;
          if ("value" in descriptor) {
            /** @type {boolean} */
            descriptor.writable = true;
          }
          Object.defineProperty(d, descriptor.key, descriptor);
        }
      }
      return function(t, n, a) {
        return n && e(t.prototype, n), a && e(t, a), t;
      };
    }();
    var _prepareStyleProperties = __webpack_require__(0);
    var _prepareStyleProperties2 = _interopRequireDefault(_prepareStyleProperties);
    var _atan3 = (__webpack_require__(11), __webpack_require__(2));
    var route = (_interopRequireDefault(_atan3), __webpack_require__(62));
    var _classlist = __webpack_require__(12);
    var _cacheManager2 = _interopRequireDefault(_classlist);
    var _roundedCorners = __webpack_require__(99);
    var _CalendarDay = __webpack_require__(100);
    var _CalendarDay2 = _interopRequireDefault(_CalendarDay);
    var _App = __webpack_require__(497);
    var _App2 = _interopRequireDefault(_App);
    var DropIndicator = _normalizeDataUri2.default.Header;
    var ResultsTableComponent = _normalizeDataUri2.default.Content;
    var Footer = _normalizeDataUri2.default.Footer;
    var FormioElement = _normalizeDataUri2.default.Sider;
    var FilterFormInstance = _suggestItem2.default.SubMenu;
    var offsetFromCenter = function(_EventEmitter) {
      /**
       * @return {?}
       */
      function Agent() {
        _classCallCheck(this, Agent);
        var _this = _possibleConstructorReturn(this, (Agent.__proto__ || Object.getPrototypeOf(Agent)).call(this));
        return _this.toggle = function() {
          _this.setState({
            collapsed : !_this.state.collapsed,
            visibleCambiarContrasenia : false
          });
        }, _this.handleMenu = function(event) {
          var a = (event.item, event.key);
          event.selectedKeys;
          if (1 == a) {
            var oldState = _this.state;
            _this.setState({
              componentSelected : a,
              visibleCambiarContrasenia : false,
              componentRender : {
                title : "Registrar anteproyecto",
                render : _prepareStyleProperties2.default.createElement(_App2.default, {
                  anteproyecto : oldState
                })
              }
            });
          }
          if (3 == a) {
            _this.setState({
              visibleCambiarContrasenia : true
            });
          }
        }, _this.state = {
          collapsed : true,
          isAuth : true,
          usuario : null,
          componentRender : {
            title : null,
            render : null
          },
          visibleCambiarContrasenia : false,
          anteproyecto : null
        }, _this;
      }
      return _inherits(Agent, _EventEmitter), _createClass(Agent, [{
        key : "getIsAuth",
        value : function() {
          var res = this;
          (0, _roundedCorners.getIsAuth)().then(function($rootScope) {
            if ("candidato_residente" === $rootScope.rol) {
              _cacheManager2.default.get("/api/alumno/" + $rootScope.id_alumno + "/anteproyecto").then(function(getFilesReply) {
                if (200 === getFilesReply.status) {
                  res.setState({
                    anteproyecto : getFilesReply.data,
                    isAuth : $rootScope.isAuth,
                    usuario : $rootScope,
                    componentRender : {
                      title : "Registrar anteproyecto",
                      render : _prepareStyleProperties2.default.createElement(_App2.default, {
                        anteproyecto : getFilesReply.data
                      })
                    }
                  });
                } else {
                  res.setState({
                    isAuth : false
                  });
                }
              });
            } else {
              res.setState({
                isAuth : false
              });
            }
          });
        }
      }, {
        key : "componentWillMount",
        value : function() {
          this.getIsAuth();
        }
      }, {
        key : "render",
        value : function() {
          var app = this.state;
          var acceptedResourceRoles = app.isAuth;
          var meta = (app.componentSelected, app.componentRender);
          var selected = (app.usuario, app.visibleCambiarContrasenia);
          return acceptedResourceRoles ? _prepareStyleProperties2.default.createElement(_normalizeDataUri2.default, {
            style : {
              minHeight : "100vh"
            }
          }, _prepareStyleProperties2.default.createElement(FormioElement, {
            breakpoint : "lg",
            trigger : null,
            collapsible : true,
            collapsed : this.state.collapsed
          }, _prepareStyleProperties2.default.createElement("div", {
            className : "logo",
            style : {
              textAlign : "center"
            }
          }, _prepareStyleProperties2.default.createElement("img", {
            src : "/img/tec_logo.png",
            alt : "logo_tec",
            height : "100%"
          })), _prepareStyleProperties2.default.createElement(_suggestItem2.default, {
            theme : "dark",
            mode : "inline",
            defaultSelectedKeys : ["1"],
            onSelect : this.handleMenu
          }, _prepareStyleProperties2.default.createElement(_suggestItem2.default.Item, {
            key : "1"
          }, _prepareStyleProperties2.default.createElement(_suggestList2.default, {
            type : "inbox"
          }), _prepareStyleProperties2.default.createElement("span", null, "Registrar anteproyecto")), _prepareStyleProperties2.default.createElement(FilterFormInstance, {
            key : "sub1",
            title : _prepareStyleProperties2.default.createElement("span", null, _prepareStyleProperties2.default.createElement(_suggestList2.default, {
              type : "user"
            }), _prepareStyleProperties2.default.createElement("span", null, "Usuario"))
          }, _prepareStyleProperties2.default.createElement(_suggestItem2.default.Item, {
            key : "3"
          }, "Cambiar contrase\u00f1a"), _prepareStyleProperties2.default.createElement(_suggestItem2.default.Item, null, _prepareStyleProperties2.default.createElement("a", {
            href : "/api/usuario/logout"
          }, " ", _prepareStyleProperties2.default.createElement("strong", null, "Cerrar sesi\u00f3n"), " "), " ")))), _prepareStyleProperties2.default.createElement(_normalizeDataUri2.default, null, _prepareStyleProperties2.default.createElement(DropIndicator, {
            style : {
              background : "#fff",
              padding : 0
            }
          }, _prepareStyleProperties2.default.createElement(_suggestList2.default, {
            className : "trigger",
            type : this.state.collapsed ? "menu-unfold" : "menu-fold",
            onClick : this.toggle
          }), meta.title), _prepareStyleProperties2.default.createElement(ResultsTableComponent, {
            style : {
              margin : "24px 16px",
              padding : 24,
              background : "#fff"
            }
          }, meta.render), _prepareStyleProperties2.default.createElement(Footer, {
            style : {
              textAlign : "center"
            }
          }, "Sistema de Seguimiento de residencias del ITCH \u00a92017 Francisco Blanco 00fblanco@gmail.com")), _prepareStyleProperties2.default.createElement(_CalendarDay2.default, {
            visible : selected
          })) : _prepareStyleProperties2.default.createElement(route.Redirect, {
            to : "/usuario/auth"
          });
        }
      }]), Agent;
    }(_prepareStyleProperties.Component);
    t.default = offsetFromCenter;
  },
  1127 : function(cond, t, __webpack_require__) {
    /**
     * @param {!Object} obj
     * @return {?}
     */
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default : obj
      };
    }
    /**
     * @param {!AudioNode} instance
     * @param {!Function} Constructor
     * @return {undefined}
     */
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    /**
     * @param {string} self
     * @param {string} call
     * @return {?}
     */
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return !call || "object" != typeof call && "function" != typeof call ? self : call;
    }
    /**
     * @param {!Object} subClass
     * @param {!Object} superClass
     * @return {undefined}
     */
    function _inherits(subClass, superClass) {
      if ("function" != typeof superClass && null !== superClass) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      /** @type {!Object} */
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor : {
          value : subClass,
          enumerable : false,
          writable : true,
          configurable : true
        }
      });
      if (superClass) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(subClass, superClass);
        } else {
          /** @type {!Object} */
          subClass.__proto__ = superClass;
        }
      }
    }
    Object.defineProperty(t, "__esModule", {
      value : true
    });
    var _suggestList = (__webpack_require__(35), __webpack_require__(13));
    var _suggestList2 = _interopRequireDefault(_suggestList);
    var _DraggableCore = (__webpack_require__(48), __webpack_require__(49));
    var _DraggableCore2 = _interopRequireDefault(_DraggableCore);
    var _suggestItem = (__webpack_require__(98), __webpack_require__(86));
    var _suggestItem2 = _interopRequireDefault(_suggestItem);
    var _AboutPage = (__webpack_require__(65), __webpack_require__(66));
    var _AboutPage2 = _interopRequireDefault(_AboutPage);
    var _createClass = function() {
      /**
       * @param {!Function} d
       * @param {string} props
       * @return {undefined}
       */
      function e(d, props) {
        /** @type {number} */
        var i = 0;
        for (; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          /** @type {boolean} */
          descriptor.configurable = true;
          if ("value" in descriptor) {
            /** @type {boolean} */
            descriptor.writable = true;
          }
          Object.defineProperty(d, descriptor.key, descriptor);
        }
      }
      return function(t, n, a) {
        return n && e(t.prototype, n), a && e(t, a), t;
      };
    }();
    var _prepareStyleProperties = __webpack_require__(0);
    var _prepareStyleProperties2 = _interopRequireDefault(_prepareStyleProperties);
    var _AppDownload = (__webpack_require__(11), __webpack_require__(2));
    var route = (_interopRequireDefault(_AppDownload), __webpack_require__(62));
    var _classlist = __webpack_require__(12);
    var _cacheManager2 = _interopRequireDefault(_classlist);
    var __WEBPACK_IMPORTED_MODULE_19_date_fns_add_seconds__ = __webpack_require__(99);
    var _deepAssign = __webpack_require__(100);
    var _deepAssign2 = _interopRequireDefault(_deepAssign);
    var _UiIcon = __webpack_require__(474);
    var _UiIcon2 = _interopRequireDefault(_UiIcon);
    var _CalendarDay = __webpack_require__(1128);
    var _CalendarDay2 = _interopRequireDefault(_CalendarDay);
    var _buildPageNumber = __webpack_require__(496);
    var _buildPageNumber2 = _interopRequireDefault(_buildPageNumber);
    var _normalizeDataUri = __webpack_require__(490);
    var _normalizeDataUri2 = _interopRequireDefault(_normalizeDataUri);
    var DropIndicator = _AboutPage2.default.Header;
    var ResultsTableComponent = _AboutPage2.default.Content;
    var Footer = _AboutPage2.default.Footer;
    var FormioElement = _AboutPage2.default.Sider;
    var StatelessContainer = _suggestItem2.default.SubMenu;
    var offsetFromCenter = function(_EventEmitter) {
      /**
       * @return {?}
       */
      function Agent() {
        _classCallCheck(this, Agent);
        var _this = _possibleConstructorReturn(this, (Agent.__proto__ || Object.getPrototypeOf(Agent)).call(this));
        return _this.toggle = function() {
          _this.setState({
            collapsed : !_this.state.collapsed,
            visibleCambiarContrasenia : false
          });
        }, _this.handleMenu = function(event) {
          var a = (event.item, event.key);
          event.selectedKeys;
          if (1 == a) {
            var $scope = _this.state;
            var $scopeId = $scope.departamento;
            var imageChanges = $scope.usuario;
            _this.setState({
              componentSelected : a,
              visibleCambiarContrasenia : false,
              visible_add_docente : false,
              componentRender : {
                title : "Revisi\u00f3n de anteproyectos ",
                render : _prepareStyleProperties2.default.createElement(_UiIcon2.default, {
                  usuario : imageChanges,
                  departamento : $scopeId
                })
              }
            });
          } else {
            if (2 == a) {
              var $scope = _this.state;
              var $scopeId = $scope.departamento;
              var _indexeddbManager2 = $scope.usuario;
              var c = _indexeddbManager2.docente_carrera.find(function(Sha1) {
                return "presidente_academia" === Sha1.rol;
              });
              if (c) {
                _this.setState({
                  componentSelected : a,
                  visibleCambiarContrasenia : false,
                  visible_add_docente : false,
                  componentRender : {
                    title : "Registro de candidato a residente",
                    render : _prepareStyleProperties2.default.createElement(_CalendarDay2.default, {
                      departamento : $scopeId,
                      presidente_academia : c
                    })
                  }
                });
              } else {
                _this.setState({
                  componentSelected : a,
                  visibleCambiarContrasenia : false,
                  visible_add_docente : false,
                  componentRender : {
                    title : "Permiso denegado",
                    render : _prepareStyleProperties2.default.createElement(_DraggableCore2.default, {
                      message : "Permiso denegado, solo el presidente de academia o jefe de departamento puede realizar esta acci\u00f3n.",
                      type : "warning",
                      showIcon : true
                    })
                  }
                });
              }
            } else {
              if (3 == a) {
                _this.setState({
                  visibleCambiarContrasenia : true,
                  visible_add_docente : false
                });
              } else {
                if (4 == a) {
                  _cacheManager2.default.get("/api/proyectos/asesor_interno/" + _this.state.usuario.id_docente).then(function(getFilesReply) {
                    if (200 === getFilesReply.status) {
                      _this.setState({
                        componentSelected : a,
                        visibleCambiarContrasenia : false,
                        visible_add_docente : false,
                        componentRender : {
                          title : "Proyectos de residencia asignados",
                          render : _prepareStyleProperties2.default.createElement(_buildPageNumber2.default, {
                            proyectos : getFilesReply.data,
                            usuario : _this.state.usuario
                          })
                        }
                      });
                    }
                  });
                } else {
                  if (5 == a) {
                    var $scope = _this.state;
                    var f = $scope.departamento;
                    var m = $scope.usuario;
                    var inDeviceData = m.docente_carrera.find(function(Sha1) {
                      return "presidente_academia" === Sha1.rol || "jefe_proyecto" === Sha1.rol;
                    });
                    if (inDeviceData) {
                      var b = f.carreras.filter(function(inPrinterType) {
                        return inPrinterType.id === inDeviceData.id_carrera;
                      });
                      _this.setState({
                        componentSelected : a,
                        visibleCambiarContrasenia : false,
                        visible_add_docente : false,
                        componentRender : {
                          title : "Revisi\u00f3n de seguimientos",
                          render : _prepareStyleProperties2.default.createElement(_normalizeDataUri2.default, {
                            carreras : b,
                            usuario : inDeviceData
                          })
                        }
                      });
                    } else {
                      _this.setState({
                        componentSelected : a,
                        visibleCambiarContrasenia : false,
                        visible_add_docente : false,
                        componentRender : {
                          title : "Permiso denegado",
                          render : _prepareStyleProperties2.default.createElement(_DraggableCore2.default, {
                            message : "Permiso denegado, solo el presidente de academia, jefe de departamento, jefe de proyecto \u00f3 el asesor interno del proyecto puede realizar esta acci\u00f3n.",
                            type : "warning",
                            showIcon : true
                          })
                        }
                      });
                    }
                  }
                }
              }
            }
          }
        }, _this.state = {
          collapsed : true,
          isAuth : true,
          usuario : null,
          departamento : null,
          componentRender : {
            title : null,
            render : null
          },
          visibleCambiarContrasenia : false
        }, _this;
      }
      return _inherits(Agent, _EventEmitter), _createClass(Agent, [{
        key : "getIsAuth",
        value : function() {
          var res = this;
          (0, __WEBPACK_IMPORTED_MODULE_19_date_fns_add_seconds__.getIsAuth)().then(function($rootScope) {
            if ("docente" === $rootScope.rol || "subdirector_academico" === $rootScope.rol) {
              _cacheManager2.default.get("/api/departamento/" + $rootScope.id_departamento).then(function(snapshot) {
                if (200 === snapshot.status) {
                  console.warn("departamento", snapshot.data);
                  res.setState({
                    departamento : snapshot.data,
                    isAuth : $rootScope.isAuth,
                    usuario : $rootScope,
                    componentRender : {
                      title : "Revisi\u00f3n de anteproyectos ",
                      render : _prepareStyleProperties2.default.createElement(_UiIcon2.default, {
                        usuario : $rootScope,
                        departamento : snapshot.data
                      })
                    }
                  });
                } else {
                  res.setState({
                    isAuth : false
                  });
                }
              });
            } else {
              res.setState({
                isAuth : false
              });
            }
          });
        }
      }, {
        key : "componentWillMount",
        value : function() {
          this.getIsAuth();
        }
      }, {
        key : "render",
        value : function() {
          var that = this.state;
          var malakh = that.isAuth;
          var meta = (that.componentSelected, that.componentRender);
          var selected = that.visibleCambiarContrasenia;
          that.usuario;
          that.departamento;
          return malakh ? _prepareStyleProperties2.default.createElement(_AboutPage2.default, {
            style : {
              minHeight : "100vh"
            }
          }, _prepareStyleProperties2.default.createElement(FormioElement, {
            breakpoint : "lg",
            trigger : null,
            collapsible : true,
            collapsed : this.state.collapsed
          }, _prepareStyleProperties2.default.createElement("div", {
            className : "logo",
            style : {
              textAlign : "center"
            }
          }, _prepareStyleProperties2.default.createElement("img", {
            src : "/img/tec_logo.png",
            alt : "logo_tec",
            height : "100%"
          })), _prepareStyleProperties2.default.createElement(_suggestItem2.default, {
            theme : "dark",
            mode : "inline",
            defaultSelectedKeys : ["1"],
            onSelect : this.handleMenu
          }, _prepareStyleProperties2.default.createElement(_suggestItem2.default.Item, {
            key : "1"
          }, _prepareStyleProperties2.default.createElement(_suggestList2.default, {
            type : "solution"
          }), _prepareStyleProperties2.default.createElement("span", null, "Revisi\u00f3n anteproyectos")), _prepareStyleProperties2.default.createElement(_suggestItem2.default.Item, {
            key : "2"
          }, _prepareStyleProperties2.default.createElement(_suggestList2.default, {
            type : "usergroup-add"
          }), _prepareStyleProperties2.default.createElement("span", null, "Agregar candidato a residente")), _prepareStyleProperties2.default.createElement(_suggestItem2.default.Item, {
            key : "4"
          }, _prepareStyleProperties2.default.createElement(_suggestList2.default, {
            type : "book"
          }), _prepareStyleProperties2.default.createElement("span", null, "Proyectos de residencia")), _prepareStyleProperties2.default.createElement(_suggestItem2.default.Item, {
            key : "5"
          }, _prepareStyleProperties2.default.createElement(_suggestList2.default, {
            type : "calendar"
          }), _prepareStyleProperties2.default.createElement("span", null, "Revisi\u00f3n de seguimientos")), _prepareStyleProperties2.default.createElement(_suggestItem2.default.Divider, null), _prepareStyleProperties2.default.createElement(StatelessContainer, {
            key : "sub1",
            title : _prepareStyleProperties2.default.createElement("span", null, _prepareStyleProperties2.default.createElement(_suggestList2.default, {
              type : "user"
            }), _prepareStyleProperties2.default.createElement("span", null, "Usuario"))
          }, _prepareStyleProperties2.default.createElement(_suggestItem2.default.Item, {
            key : "3"
          }, "Cambiar contrase\u00f1a"), _prepareStyleProperties2.default.createElement(_suggestItem2.default.Item, null, _prepareStyleProperties2.default.createElement("a", {
            href : "/api/usuario/logout"
          }, " ", _prepareStyleProperties2.default.createElement("strong", null, "Cerrar sesi\u00f3n"), " "), " ")))), _prepareStyleProperties2.default.createElement(_AboutPage2.default, null, _prepareStyleProperties2.default.createElement(DropIndicator, {
            style : {
              background : "#fff",
              padding : 0
            }
          }, _prepareStyleProperties2.default.createElement(_suggestList2.default, {
            className : "trigger",
            type : this.state.collapsed ? "menu-unfold" : "menu-fold",
            onClick : this.toggle
          }), meta.title), _prepareStyleProperties2.default.createElement(ResultsTableComponent, {
            style : {
              margin : "24px 16px",
              padding : 24,
              background : "#fff"
            }
          }, meta.render), _prepareStyleProperties2.default.createElement(Footer, {
            style : {
              textAlign : "center"
            }
          }, "Sistema de Seguimiento de residencias del ITCH \u00a92017 Francisco Blanco 00fblanco@gmail.com")), _prepareStyleProperties2.default.createElement(_deepAssign2.default, {
            visible : selected
          })) : _prepareStyleProperties2.default.createElement(route.Redirect, {
            to : "/usuario/auth"
          });
        }
      }]), Agent;
    }(_prepareStyleProperties.Component);
    t.default = offsetFromCenter;
  },
  1128 : function(cond, t, __webpack_require__) {
    /**
     * @param {!Object} obj
     * @return {?}
     */
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default : obj
      };
    }
    /**
     * @param {!AudioNode} instance
     * @param {!Function} Constructor
     * @return {undefined}
     */
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    /**
     * @param {string} self
     * @param {string} call
     * @return {?}
     */
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return !call || "object" != typeof call && "function" != typeof call ? self : call;
    }
    /**
     * @param {!Object} subClass
     * @param {!Object} superClass
     * @return {undefined}
     */
    function _inherits(subClass, superClass) {
      if ("function" != typeof superClass && null !== superClass) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      /** @type {!Object} */
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor : {
          value : subClass,
          enumerable : false,
          writable : true,
          configurable : true
        }
      });
      if (superClass) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(subClass, superClass);
        } else {
          /** @type {!Object} */
          subClass.__proto__ = superClass;
        }
      }
    }
    Object.defineProperty(t, "__esModule", {
      value : true
    });
    var _suggestList = (__webpack_require__(33), __webpack_require__(34));
    var _suggestList2 = _interopRequireDefault(_suggestList);
    var _DraggableCore = (__webpack_require__(50), __webpack_require__(51));
    var _DraggableCore2 = _interopRequireDefault(_DraggableCore);
    var _deepAssign = (__webpack_require__(31), __webpack_require__(32));
    var _deepAssign2 = _interopRequireDefault(_deepAssign);
    var _normalizeDataUri = (__webpack_require__(37), __webpack_require__(36));
    var _normalizeDataUri2 = _interopRequireDefault(_normalizeDataUri);
    var _UiIcon = (__webpack_require__(15), __webpack_require__(16));
    var _UiIcon2 = _interopRequireDefault(_UiIcon);
    var _classlist = (__webpack_require__(28), __webpack_require__(29));
    var _classlist2 = _interopRequireDefault(_classlist);
    var _suggestItem = (__webpack_require__(119), __webpack_require__(120));
    var _suggestItem2 = _interopRequireDefault(_suggestItem);
    var _AboutPage = (__webpack_require__(35), __webpack_require__(13));
    var _AboutPage2 = _interopRequireDefault(_AboutPage);
    var _AppDownload = (__webpack_require__(24), __webpack_require__(25));
    var _AppDownload2 = _interopRequireDefault(_AppDownload);
    var _createClass = function() {
      /**
       * @param {!Function} d
       * @param {string} props
       * @return {undefined}
       */
      function e(d, props) {
        /** @type {number} */
        var i = 0;
        for (; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          /** @type {boolean} */
          descriptor.configurable = true;
          if ("value" in descriptor) {
            /** @type {boolean} */
            descriptor.writable = true;
          }
          Object.defineProperty(d, descriptor.key, descriptor);
        }
      }
      return function(t, n, a) {
        return n && e(t.prototype, n), a && e(t, a), t;
      };
    }();
    var _prepareStyleProperties = __webpack_require__(0);
    var _prepareStyleProperties2 = _interopRequireDefault(_prepareStyleProperties);
    var _cacheManager = __webpack_require__(12);
    var _cacheManager2 = _interopRequireDefault(_cacheManager);
    var _noframeworkWaypoints = __webpack_require__(1);
    var _noframeworkWaypoints2 = _interopRequireDefault(_noframeworkWaypoints);
    var _insertCss = __webpack_require__(45);
    var _insertCss2 = _interopRequireDefault(_insertCss);
    var _buildPageNumber = __webpack_require__(472);
    var _buildPageNumber2 = _interopRequireDefault(_buildPageNumber);
    var offsetFromCenter = (_AppDownload2.default.Option, function(_EventEmitter) {
      /**
       * @param {?} data
       * @return {?}
       */
      function Agent(data) {
        _classCallCheck(this, Agent);
        var _this = _possibleConstructorReturn(this, (Agent.__proto__ || Object.getPrototypeOf(Agent)).call(this, data));
        return _this.showListaCandidatosResidente = function(canCreateDiscussions) {
          _cacheManager2.default.get("/api/periodo/" + canCreateDiscussions + "/anteproyectos").then(function(e) {
            if (200 === e.status) {
              var elem = e.data.map(function($routeParams, awsKey) {
                return _prepareStyleProperties2.default.createElement(_suggestItem2.default.Item, {
                  key : awsKey,
                  color : "green",
                  dot : _prepareStyleProperties2.default.createElement(_AboutPage2.default, {
                    type : "check-circle-o",
                    style : {
                      fontSize : "16px"
                    }
                  })
                }, $routeParams.nombre + " " + $routeParams.ap_paterno + " " + $routeParams.ap_materno);
              });
              _classlist2.default.info({
                width : 600,
                title : "Lista de candidatos a residente del periodo.",
                content : _prepareStyleProperties2.default.createElement(_suggestItem2.default, null, elem),
                onOk : function() {
                }
              });
            }
          });
        }, _this.showAddAlumno = function(canCreateDiscussions) {
          _this.setState({
            visible_add_alumno : true,
            id_periodo : canCreateDiscussions
          });
        }, _this.state = {
          departamento : data.departamento,
          carreraSeleccionada : null,
          visible_add_alumno : false,
          id_periodo : null,
          presidente_academia : data.presidente_academia,
          alumnos_rechazados_por_carrera : []
        }, _this;
      }
      return _inherits(Agent, _EventEmitter), _createClass(Agent, [{
        key : "componentWillMount",
        value : function() {
          var boilerStateMachine = this;
          var obj = this.state;
          var a = obj.departamento;
          var data = obj.presidente_academia;
          console.warn(data);
          var wunderlist_list = a.carreras.find(function(depMap) {
            return depMap.id === data.id_carrera;
          });
          if (wunderlist_list) {
            _cacheManager2.default.get("/api/carrera/" + wunderlist_list.id + "/periodos").then(function(getFilesReply) {
              if (200 === getFilesReply.status) {
                _cacheManager2.default.get("/api/alumnos/" + wunderlist_list.id + "/rechazados").then(function(getJobsReply) {
                  if (200 === getJobsReply.status) {
                    boilerStateMachine.setState({
                      alumnos_rechazados_por_carrera : getJobsReply.data._alumnos,
                      carreraSeleccionada : getFilesReply.data,
                      visible_add_alumno : false
                    });
                  }
                });
              } else {
                _UiIcon2.default.warning("Verificar conexi\u00f3n.");
              }
            });
          }
        }
      }, {
        key : "render",
        value : function() {
          var e = this;
          var state = this.state;
          var error = (state.departamento, state.carreraSeleccionada);
          var visibility = state.visible_add_alumno;
          var idnum2expr = state.id_periodo;
          var o = (state.visible_lista_candidatos_residente, state.alumnos_rechazados_por_carrera);
          var color = error ? error.periodos.map(function(target_workspace, canCreateDiscussions) {
            return {
              id : target_workspace.id,
              key : _insertCss2.default.v1(),
              periodo : target_workspace.periodo,
              ciclo : target_workspace.ciclo,
              fecha_periodo : target_workspace.fecha_inicio + " - " + target_workspace.fecha_fin,
              fecha_fin : target_workspace.fecha_fin,
              fecha_inicio_entrega_anteproyecto : target_workspace.fecha_inicio_entrega_anteproyecto,
              fecha_fin_entrega_anteproyecto : target_workspace.fecha_fin_entrega_anteproyecto,
              acciones : (0, _noframeworkWaypoints2.default)().format("YYYY-MM-DD") >= target_workspace.fecha_inicio_entrega_anteproyecto && (0, _noframeworkWaypoints2.default)().format("YYYY-MM-DD") <= target_workspace.fecha_fin_entrega_anteproyecto,
              lista_candidatos : "sisisi"
            };
          }) : null;
          /** @type {!Array} */
          var pivotColValues = [{
            title : "Periodo",
            key : "periodo",
            dataIndex : "periodo"
          }, {
            title : "Ciclo",
            key : "ciclo",
            dataIndex : "ciclo"
          }, {
            title : "Fecha de periodo",
            key : "fecha_periodo",
            dataIndex : "fecha_periodo"
          }, {
            title : "Fecha entrega anteproyectos",
            key : "fecha_entrega_anteproyecto",
            dataIndex : "fecha_entrega_anteproyecto",
            render : function(canvas, lagOffset) {
              return _prepareStyleProperties2.default.createElement("span", null, lagOffset.fecha_inicio_entrega_anteproyecto + "- " + lagOffset.fecha_fin_entrega_anteproyecto);
            }
          }, {
            className : "center-text",
            title : "Acciones",
            key : "acciones",
            dataIndex : "Acciones",
            render : function(firstTime, self) {
              return _prepareStyleProperties2.default.createElement("span", null, true === self.acciones ? _prepareStyleProperties2.default.createElement(_normalizeDataUri2.default, {
                style : {
                  marginRight : 5
                },
                icon : "user-add",
                onClick : function() {
                  return e.showAddAlumno(self.id);
                }
              }, "Candidato a residente") : _prepareStyleProperties2.default.createElement("p", {
                style : {
                  color : "#ff5757"
                }
              }, "Deshabilitado, revisar fechas."));
            }
          }, {
            className : "center-text",
            title : "Lista de candidatos",
            key : "lista_candidatos",
            dataIndex : "lista_candidatos",
            render : function(sb, data) {
              return _prepareStyleProperties2.default.createElement("span", null, _prepareStyleProperties2.default.createElement(_normalizeDataUri2.default, {
                icon : "solution",
                onClick : function() {
                  return e.showListaCandidatosResidente(data.id);
                }
              }));
            }
          }];
          return _prepareStyleProperties2.default.createElement(_suggestList2.default, null, _prepareStyleProperties2.default.createElement(_deepAssign2.default, {
            xs : 24,
            lg : 24,
            style : {
              marginBottom : 20
            }
          }, _prepareStyleProperties2.default.createElement("h2", null, "Carrera: ", error ? error.nombre : "")), _prepareStyleProperties2.default.createElement(_deepAssign2.default, {
            xs : 24,
            lg : 24
          }, _prepareStyleProperties2.default.createElement(_DraggableCore2.default, {
            bordered : true,
            title : function() {
              return "Gesti\u00f3n de periodos";
            },
            dataSource : color,
            className : "full-width",
            columns : pivotColValues,
            pagination : {
              pageSize : 8
            },
            scroll : {
              x : 1E3
            }
          })), _prepareStyleProperties2.default.createElement(_buildPageNumber2.default, {
            visible : visibility,
            carrera : error,
            id_periodo : idnum2expr,
            alumnos_rechazados_por_carrera : o
          }));
        }
      }]), Agent;
    }(_prepareStyleProperties.Component));
    t.default = offsetFromCenter;
  },
  1129 : function(cond, t, __webpack_require__) {
    /**
     * @param {!Object} obj
     * @return {?}
     */
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default : obj
      };
    }
    /**
     * @param {!AudioNode} instance
     * @param {!Function} Constructor
     * @return {undefined}
     */
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    /**
     * @param {string} self
     * @param {string} call
     * @return {?}
     */
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return !call || "object" != typeof call && "function" != typeof call ? self : call;
    }
    /**
     * @param {!Object} subClass
     * @param {!Object} superClass
     * @return {undefined}
     */
    function _inherits(subClass, superClass) {
      if ("function" != typeof superClass && null !== superClass) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      /** @type {!Object} */
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor : {
          value : subClass,
          enumerable : false,
          writable : true,
          configurable : true
        }
      });
      if (superClass) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(subClass, superClass);
        } else {
          /** @type {!Object} */
          subClass.__proto__ = superClass;
        }
      }
    }
    Object.defineProperty(t, "__esModule", {
      value : true
    });
    var _suggestList = (__webpack_require__(35), __webpack_require__(13));
    var _suggestList2 = _interopRequireDefault(_suggestList);
    var _suggestItem = (__webpack_require__(98), __webpack_require__(86));
    var _suggestItem2 = _interopRequireDefault(_suggestItem);
    var _UiIcon = (__webpack_require__(65), __webpack_require__(66));
    var _UiIcon2 = _interopRequireDefault(_UiIcon);
    var _createClass = function() {
      /**
       * @param {!Function} d
       * @param {string} props
       * @return {undefined}
       */
      function e(d, props) {
        /** @type {number} */
        var i = 0;
        for (; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          /** @type {boolean} */
          descriptor.configurable = true;
          if ("value" in descriptor) {
            /** @type {boolean} */
            descriptor.writable = true;
          }
          Object.defineProperty(d, descriptor.key, descriptor);
        }
      }
      return function(t, n, a) {
        return n && e(t.prototype, n), a && e(t, a), t;
      };
    }();
    var _prepareStyleProperties = __webpack_require__(0);
    var _prepareStyleProperties2 = _interopRequireDefault(_prepareStyleProperties);
    var route = (__webpack_require__(11), __webpack_require__(62));
    var _classlist = __webpack_require__(12);
    var _cacheManager2 = _interopRequireDefault(_classlist);
    var _UiRippleInk = __webpack_require__(99);
    var _AboutPage = __webpack_require__(100);
    var _AboutPage2 = _interopRequireDefault(_AboutPage);
    var _normalizeDataUri = __webpack_require__(497);
    var _DraggableCore = (_interopRequireDefault(_normalizeDataUri), __webpack_require__(1130));
    var _DraggableCore2 = _interopRequireDefault(_DraggableCore);
    var DropIndicator = _UiIcon2.default.Header;
    var ResultsTableComponent = _UiIcon2.default.Content;
    var Footer = _UiIcon2.default.Footer;
    var FormioElement = _UiIcon2.default.Sider;
    var FilterFormInstance = _suggestItem2.default.SubMenu;
    var offsetFromCenter = function(_EventEmitter) {
      /**
       * @return {?}
       */
      function Agent() {
        _classCallCheck(this, Agent);
        var _this = _possibleConstructorReturn(this, (Agent.__proto__ || Object.getPrototypeOf(Agent)).call(this));
        return _this.toggle = function() {
          _this.setState({
            collapsed : !_this.state.collapsed,
            visibleCambiarContrasenia : false
          });
        }, _this.handleMenu = function(event) {
          var a = (event.item, event.key);
          event.selectedKeys;
          if (3 == a) {
            _this.setState({
              visibleCambiarContrasenia : true
            });
          }
        }, _this.state = {
          collapsed : true,
          isAuth : true,
          usuario : null,
          componentRender : {
            title : null,
            render : null
          },
          visibleCambiarContrasenia : false
        }, _this;
      }
      return _inherits(Agent, _EventEmitter), _createClass(Agent, [{
        key : "getIsAuth",
        value : function() {
          var res = this;
          (0, _UiRippleInk.getIsAuth)().then(function($rootScope) {
            if ("asesor_externo" === $rootScope.rol) {
              _cacheManager2.default.get("/api/proyectos/asesor_externo/" + $rootScope.id_asesor_externo).then(function(getFilesReply) {
                if (200 === getFilesReply.status) {
                  res.setState({
                    isAuth : $rootScope.isAuth,
                    usuario : $rootScope,
                    visibleCambiarContrasenia : false,
                    componentRender : {
                      title : "Proyectos de residencia",
                      render : _prepareStyleProperties2.default.createElement(_DraggableCore2.default, {
                        proyectos : getFilesReply.data,
                        usuario : res.state.usuario
                      })
                    }
                  });
                }
              });
            } else {
              res.setState({
                isAuth : false
              });
            }
          });
        }
      }, {
        key : "componentWillMount",
        value : function() {
          this.getIsAuth();
        }
      }, {
        key : "render",
        value : function() {
          var app = this.state;
          var acceptedResourceRoles = app.isAuth;
          var meta = (app.componentSelected, app.componentRender);
          var selected = (app.usuario, app.visibleCambiarContrasenia);
          return acceptedResourceRoles ? _prepareStyleProperties2.default.createElement(_UiIcon2.default, {
            style : {
              minHeight : "100vh"
            }
          }, _prepareStyleProperties2.default.createElement(FormioElement, {
            breakpoint : "lg",
            trigger : null,
            collapsible : true,
            collapsed : this.state.collapsed
          }, _prepareStyleProperties2.default.createElement("div", {
            className : "logo",
            style : {
              textAlign : "center"
            }
          }, _prepareStyleProperties2.default.createElement("img", {
            src : "/img/tec_logo.png",
            alt : "logo_tec",
            height : "100%"
          })), _prepareStyleProperties2.default.createElement(_suggestItem2.default, {
            theme : "dark",
            mode : "inline",
            defaultSelectedKeys : ["1"],
            onSelect : this.handleMenu
          }, _prepareStyleProperties2.default.createElement(_suggestItem2.default.Item, {
            key : "1"
          }, _prepareStyleProperties2.default.createElement(_suggestList2.default, {
            type : "inbox"
          }), _prepareStyleProperties2.default.createElement("span", null, "Menu1")), _prepareStyleProperties2.default.createElement(FilterFormInstance, {
            key : "sub1",
            title : _prepareStyleProperties2.default.createElement("span", null, _prepareStyleProperties2.default.createElement(_suggestList2.default, {
              type : "user"
            }), _prepareStyleProperties2.default.createElement("span", null, "Usuario"))
          }, _prepareStyleProperties2.default.createElement(_suggestItem2.default.Item, {
            key : "3"
          }, "Cambiar contrase\u00f1a"), _prepareStyleProperties2.default.createElement(_suggestItem2.default.Item, null, _prepareStyleProperties2.default.createElement("a", {
            href : "/api/usuario/logout"
          }, " ", _prepareStyleProperties2.default.createElement("strong", null, "Cerrar sesi\u00f3n"), " "), " ")))), _prepareStyleProperties2.default.createElement(_UiIcon2.default, null, _prepareStyleProperties2.default.createElement(DropIndicator, {
            style : {
              background : "#fff",
              padding : 0
            }
          }, _prepareStyleProperties2.default.createElement(_suggestList2.default, {
            className : "trigger",
            type : this.state.collapsed ? "menu-unfold" : "menu-fold",
            onClick : this.toggle
          }), meta.title), _prepareStyleProperties2.default.createElement(ResultsTableComponent, {
            style : {
              margin : "24px 16px",
              padding : 24,
              background : "#fff"
            }
          }, meta.render), _prepareStyleProperties2.default.createElement(Footer, {
            style : {
              textAlign : "center"
            }
          }, "Sistema de Seguimiento de residencias del ITCH \u00a92017 Francisco Blanco 00fblanco@gmail.com")), _prepareStyleProperties2.default.createElement(_AboutPage2.default, {
            visible : selected
          })) : _prepareStyleProperties2.default.createElement(route.Redirect, {
            to : "/usuario/auth"
          });
        }
      }]), Agent;
    }(_prepareStyleProperties.Component);
    t.default = offsetFromCenter;
  },
  1130 : function(cond, t, __webpack_require__) {
    /**
     * @param {!Object} obj
     * @return {?}
     */
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default : obj
      };
    }
    /**
     * @param {!AudioNode} instance
     * @param {!Function} Constructor
     * @return {undefined}
     */
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    /**
     * @param {string} self
     * @param {string} call
     * @return {?}
     */
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return !call || "object" != typeof call && "function" != typeof call ? self : call;
    }
    /**
     * @param {!Object} subClass
     * @param {!Object} superClass
     * @return {undefined}
     */
    function _inherits(subClass, superClass) {
      if ("function" != typeof superClass && null !== superClass) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      /** @type {!Object} */
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor : {
          value : subClass,
          enumerable : false,
          writable : true,
          configurable : true
        }
      });
      if (superClass) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(subClass, superClass);
        } else {
          /** @type {!Object} */
          subClass.__proto__ = superClass;
        }
      }
    }
    Object.defineProperty(t, "__esModule", {
      value : true
    });
    var _suggestList = (__webpack_require__(33), __webpack_require__(34));
    var _suggestList2 = _interopRequireDefault(_suggestList);
    var _DraggableCore = (__webpack_require__(148), __webpack_require__(150));
    var _DraggableCore2 = _interopRequireDefault(_DraggableCore);
    var _deepAssign = (__webpack_require__(31), __webpack_require__(32));
    var _deepAssign2 = _interopRequireDefault(_deepAssign);
    var _suggestItem = (__webpack_require__(24), __webpack_require__(25));
    var _suggestItem2 = _interopRequireDefault(_suggestItem);
    var _createClass = function() {
      /**
       * @param {!Function} d
       * @param {string} props
       * @return {undefined}
       */
      function e(d, props) {
        /** @type {number} */
        var i = 0;
        for (; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          /** @type {boolean} */
          descriptor.configurable = true;
          if ("value" in descriptor) {
            /** @type {boolean} */
            descriptor.writable = true;
          }
          Object.defineProperty(d, descriptor.key, descriptor);
        }
      }
      return function(t, n, a) {
        return n && e(t.prototype, n), a && e(t, a), t;
      };
    }();
    var _prepareStyleProperties = __webpack_require__(0);
    var _prepareStyleProperties2 = _interopRequireDefault(_prepareStyleProperties);
    var _normalizeDataUri = __webpack_require__(12);
    var _normalizeDataUri2 = _interopRequireDefault(_normalizeDataUri);
    var _UiIcon = __webpack_require__(45);
    var _UiIcon2 = _interopRequireDefault(_UiIcon);
    var _CalendarDay = __webpack_require__(1131);
    var _CalendarDay2 = _interopRequireDefault(_CalendarDay);
    var Option = _suggestItem2.default.Option;
    var offsetFromCenter = function(_EventEmitter) {
      /**
       * @param {?} data
       * @return {?}
       */
      function Agent(data) {
        _classCallCheck(this, Agent);
        var _this = _possibleConstructorReturn(this, (Agent.__proto__ || Object.getPrototypeOf(Agent)).call(this, data));
        return _this.onChangeResidente = function(applyToDivId) {
          _this.setState({
            spin : true
          });
          _normalizeDataUri2.default.get("/api/alumno/proyecto_para_asesor_externo/" + applyToDivId).then(function(getFilesReply) {
            if (200 === getFilesReply.status) {
              _this.setState({
                renderProyecto : _prepareStyleProperties2.default.createElement(_CalendarDay2.default, {
                  key : _UiIcon2.default.v4(),
                  updateProyecto : _this.updateProyecto.bind(_this),
                  proyecto : getFilesReply.data,
                  usuario : _this.state.usuario
                }),
                id_proyecto : applyToDivId,
                spin : false
              });
            }
          });
        }, _this.updateProyecto = function() {
          _this.setState({
            spin : true
          });
          _normalizeDataUri2.default.get("/api/alumno/proyecto_para_asesor_externo/" + _this.state.id_proyecto).then(function(getFilesReply) {
            if (200 === getFilesReply.status) {
              _this.setState({
                renderProyecto : _prepareStyleProperties2.default.createElement(_CalendarDay2.default, {
                  key : _UiIcon2.default.v4(),
                  updateProyecto : _this.updateProyecto.bind(_this),
                  proyecto : getFilesReply.data,
                  usuario : _this.state.usuario
                }),
                spin : false
              });
            }
          });
        }, _this.state = {
          proyectos : data.proyectos,
          usuario : data.usuario,
          renderProyecto : null,
          id_proyecto : null,
          spin : false
        }, _this;
      }
      return _inherits(Agent, _EventEmitter), _createClass(Agent, [{
        key : "componentWillReceiveProps",
        value : function(recB) {
          this.setState({
            proyectos : recB.proyectos,
            usuario : props.usuario,
            renderProyecto : null,
            id_proyecto : null,
            spin : false
          });
        }
      }, {
        key : "render",
        value : function() {
          var that = this.state;
          var malakh = that.proyectos;
          var input = that.renderProyecto;
          var outgoingController = that.spin;
          return _prepareStyleProperties2.default.createElement(_suggestList2.default, null, _prepareStyleProperties2.default.createElement(_deepAssign2.default, {
            xs : 24,
            lg : 24
          }, _prepareStyleProperties2.default.createElement(_suggestItem2.default, {
            showSearch : true,
            optionFilterProp : "children",
            filterOption : function(evt, op) {
              return op.props.children.toLowerCase().indexOf(evt.toLowerCase()) >= 0;
            },
            placeholder : "Seleccione al residente",
            onChange : this.onChangeResidente,
            style : {
              width : 400
            }
          }, malakh.map(function(domvalue, canCreateDiscussions) {
            return _prepareStyleProperties2.default.createElement(Option, {
              key : _UiIcon2.default.v4(),
              value : "" + domvalue.id
            }, domvalue.anteproyecto.alumno.no_control + " - " + domvalue.anteproyecto.alumno.nombre + " " + domvalue.anteproyecto.alumno.ap_paterno + " " + domvalue.anteproyecto.alumno.ap_materno);
          }))), _prepareStyleProperties2.default.createElement(_deepAssign2.default, {
            xs : 24,
            lg : 24,
            style : {
              marginTop : 25
            }
          }, _prepareStyleProperties2.default.createElement("div", {
            style : {
              textAlign : "center"
            }
          }, true === outgoingController ? _prepareStyleProperties2.default.createElement(_DraggableCore2.default, {
            size : "large",
            tip : "Cargando..."
          }) : null), input));
        }
      }]), Agent;
    }(_prepareStyleProperties.Component);
    t.default = offsetFromCenter;
  },
  1131 : function(cond, t, __webpack_require__) {
    /**
     * @param {!Object} obj
     * @return {?}
     */
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default : obj
      };
    }
    /**
     * @param {!AudioNode} instance
     * @param {!Function} Constructor
     * @return {undefined}
     */
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    /**
     * @param {string} self
     * @param {string} call
     * @return {?}
     */
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return !call || "object" != typeof call && "function" != typeof call ? self : call;
    }
    /**
     * @param {!Object} subClass
     * @param {!Object} superClass
     * @return {undefined}
     */
    function _inherits(subClass, superClass) {
      if ("function" != typeof superClass && null !== superClass) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      /** @type {!Object} */
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor : {
          value : subClass,
          enumerable : false,
          writable : true,
          configurable : true
        }
      });
      if (superClass) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(subClass, superClass);
        } else {
          /** @type {!Object} */
          subClass.__proto__ = superClass;
        }
      }
    }
    Object.defineProperty(t, "__esModule", {
      value : true
    });
    var _suggestItem = (__webpack_require__(87), __webpack_require__(74));
    var _suggestItem2 = _interopRequireDefault(_suggestItem);
    var _suggestList = (__webpack_require__(104), __webpack_require__(105));
    var _suggestList2 = _interopRequireDefault(_suggestList);
    var _DraggableCore = (__webpack_require__(35), __webpack_require__(13));
    var _DraggableCore2 = _interopRequireDefault(_DraggableCore);
    var _CalendarDay = (__webpack_require__(37), __webpack_require__(36));
    var _CalendarDay2 = _interopRequireDefault(_CalendarDay);
    var _AboutPage = (__webpack_require__(31), __webpack_require__(32));
    var _AboutPage2 = _interopRequireDefault(_AboutPage);
    var _AppDownload = (__webpack_require__(48), __webpack_require__(49));
    var _AppDownload2 = _interopRequireDefault(_AppDownload);
    var _CalendarEvent = (__webpack_require__(77), __webpack_require__(78));
    var _CalendarEvent2 = _interopRequireDefault(_CalendarEvent);
    var _CalendarTitle = (__webpack_require__(33), __webpack_require__(34));
    var _CalendarTitle2 = _interopRequireDefault(_CalendarTitle);
    var _buildPageNumber = (__webpack_require__(18), __webpack_require__(22));
    var _buildPageNumber2 = _interopRequireDefault(_buildPageNumber);
    var _deepAssign = (__webpack_require__(15), __webpack_require__(16));
    var _deepAssign2 = _interopRequireDefault(_deepAssign);
    var _toHyphenCase = (__webpack_require__(88), __webpack_require__(89));
    var _toHyphenCase2 = _interopRequireDefault(_toHyphenCase);
    var _RendererPatcher = (__webpack_require__(19), __webpack_require__(20));
    var _RendererPatcher2 = _interopRequireDefault(_RendererPatcher);
    var _createClass = function() {
      /**
       * @param {!Function} d
       * @param {string} props
       * @return {undefined}
       */
      function e(d, props) {
        /** @type {number} */
        var i = 0;
        for (; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          /** @type {boolean} */
          descriptor.configurable = true;
          if ("value" in descriptor) {
            /** @type {boolean} */
            descriptor.writable = true;
          }
          Object.defineProperty(d, descriptor.key, descriptor);
        }
      }
      return function(t, n, a) {
        return n && e(t.prototype, n), a && e(t, a), t;
      };
    }();
    var _prepareStyleProperties = __webpack_require__(0);
    var _prepareStyleProperties2 = _interopRequireDefault(_prepareStyleProperties);
    var _normalizeDataUri = __webpack_require__(12);
    var _normalizeDataUri2 = _interopRequireDefault(_normalizeDataUri);
    var _UiIcon = __webpack_require__(1);
    var _uuid = (_interopRequireDefault(_UiIcon), __webpack_require__(45));
    var _uuid2 = _interopRequireDefault(_uuid);
    var _parametrize = __webpack_require__(1132);
    var _parametrize2 = _interopRequireDefault(_parametrize);
    var _noframeworkWaypoints = __webpack_require__(1133);
    var _noframeworkWaypoints2 = _interopRequireDefault(_noframeworkWaypoints);
    var offsetFromCenter = (_RendererPatcher2.default.Item, _toHyphenCase2.default.TabPane, function(_EventEmitter) {
      /**
       * @param {?} data
       * @return {?}
       */
      function Agent(data) {
        _classCallCheck(this, Agent);
        var _this = _possibleConstructorReturn(this, (Agent.__proto__ || Object.getPrototypeOf(Agent)).call(this, data));
        return _this.showEvaluacionAsesorExterno = function(canCreateDiscussions) {
          if ("2009-2010" === canCreateDiscussions.plan_estudios) {
            _normalizeDataUri2.default.get("/api/proyecto/evaluacionAnexoIII/criterios/asesor_externo").then(function(getFilesReply) {
              if (200 === getFilesReply.status) {
                _this.setState({
                  criterios_evaluacion : getFilesReply.data,
                  visibleEvaluacionAsesorExterno : true
                });
              } else {
                _deepAssign2.default.warn("Error al realizar petici\u00f3n de criterios de evaluaci\u00f3n, favor de reportar al administrador.");
              }
            });
          } else {
            if ("2015-2016" === canCreateDiscussions.plan_estudios) {
              _normalizeDataUri2.default.get("/api/proyecto/evaluacionAnexoXXX/criterios/asesor_externo").then(function(getFilesReply) {
                if (200 === getFilesReply.status) {
                  _this.setState({
                    criterios_evaluacion : getFilesReply.data,
                    visibleEvaluacionAsesorExterno : true
                  });
                } else {
                  _deepAssign2.default.warn("Error al realizar petici\u00f3n de criterios de evaluaci\u00f3n, favor de reportar al administrador.");
                }
              });
            }
          }
        }, _this.autorizarCartaDeLiberacionAsesorExterno = function(data, defer_sort) {
          _normalizeDataUri2.default.put("/api/proyecto/autorizar_carta_liberacion/asesor_externo", {
            id_proyecto : defer_sort,
            autorizar : data
          }).then(function(testsStatus) {
            if (200 === testsStatus.status) {
              _deepAssign2.default.success("Se ha actualizado la autorizaci\u00f3n de la carta de liberaci\u00f3n.");
            } else {
              _deepAssign2.default.warn("Error al autorizar la carta de liberaci\u00f3n consultar al administrador.");
            }
          });
        }, _this.updateProyecto = function() {
          _this.props.updateProyecto();
        }, _this.state = {
          usuario : data.usuario,
          proyecto : data.proyecto,
          renderSeguimiento : null,
          criterios_evaluacion : null,
          visibleEvaluacionAsesorExterno : false
        }, _this;
      }
      return _inherits(Agent, _EventEmitter), _createClass(Agent, [{
        key : "componentWillReceiveProps",
        value : function(recB) {
          this.setState({
            usuario : recB.usuario,
            proyecto : recB.proyecto,
            renderSeguimiento : null,
            criterios_evaluacion : null,
            visibleEvaluacionAsesorExterno : false
          });
        }
      }, {
        key : "render",
        value : function() {
          var sform = this;
          var $scope = this.state;
          var $scopeId = $scope.criterios_evaluacion;
          var b = $scope.visibleEvaluacionAsesorExterno;
          var item = $scope.proyecto;
          $scope.usuario;
          $scope.renderSeguimiento;
          return _prepareStyleProperties2.default.createElement("div", null, _prepareStyleProperties2.default.createElement("h2", null, "Proyecto de residencia"), _prepareStyleProperties2.default.createElement("p", {
            style : {
              marginTop : 20
            }
          }, "Nombre: "), _prepareStyleProperties2.default.createElement(_buildPageNumber2.default, {
            style : {
              marginTop : 5
            },
            value : "" + item.anteproyecto.nombre,
            readOnly : true
          }), _prepareStyleProperties2.default.createElement("p", {
            style : {
              marginTop : 20
            }
          }, "Objetivo general: "), _prepareStyleProperties2.default.createElement(_buildPageNumber2.default, {
            style : {
              marginTop : 5
            },
            value : "" + item.anteproyecto.objetivo_general,
            readOnly : true
          }), "2015-2016" === item.anteproyecto.alumno.plan_estudios && _prepareStyleProperties2.default.createElement(_CalendarTitle2.default, {
            gutter : 16
          }, item.seguimientos_proyecto.map(function(canCreateDiscussions, numero) {
            return _prepareStyleProperties2.default.createElement(_noframeworkWaypoints2.default, {
              key : _uuid2.default.v4(),
              proyecto : item,
              seguimiento : canCreateDiscussions,
              numero : numero
            });
          })), _prepareStyleProperties2.default.createElement("h2", {
            style : {
              marginTop : 20
            },
            className : "border-top"
          }, "Seguimiento final"), _prepareStyleProperties2.default.createElement(_CalendarTitle2.default, {
            gutter : 20
          }, _prepareStyleProperties2.default.createElement(_AboutPage2.default, {
            xs : 24,
            lg : 24,
            style : {
              marginTop : 20,
              marginBottom : 30
            }
          }, item.url_informe_tecnico ? _prepareStyleProperties2.default.createElement("div", null, _prepareStyleProperties2.default.createElement("p", null, "Link del informe t\u00e9cnico: "), _prepareStyleProperties2.default.createElement(_CalendarEvent2.default, {
            defaultFileList : [{
              uid : -2,
              name : "informe_tecnico",
              status : "done",
              url : item.url_informe_tecnico
            }]
          })) : _prepareStyleProperties2.default.createElement(_AppDownload2.default, {
            message : "El alumno no ha subido su informe t\u00e9cnico",
            type : "warning",
            showIcon : true
          })), _prepareStyleProperties2.default.createElement(_AboutPage2.default, {
            xs : 24,
            lg : 24
          }, item.url_informe_tecnico ? _prepareStyleProperties2.default.createElement("div", null, _prepareStyleProperties2.default.createElement(_CalendarDay2.default, {
            style : {
              marginBottom : 30
            },
            onClick : function() {
              return sform.showEvaluacionAsesorExterno(item.anteproyecto.alumno);
            },
            icon : "bars",
            type : "primary"
          }, "Realizar evaluaci\u00f3n"), _prepareStyleProperties2.default.createElement("h4", {
            style : {
              marginBottom : 10
            }
          }, "Autorizar carta de liberaci\u00f3n"), _prepareStyleProperties2.default.createElement(_suggestItem2.default, {
            title : null === item.id_evaluacion_asesor_externo ? "Antes de autorizar la carta de liberaci\u00f3n debe realizar la evaluaci\u00f3n." : ""
          }, _prepareStyleProperties2.default.createElement(_suggestList2.default, {
            disabled : null === item.id_evaluacion_asesor_externo,
            defaultChecked : item.autorizar_carta_liberacion_asesor_externo,
            checkedChildren : "Autorizado",
            onChange : function(el) {
              return sform.autorizarCartaDeLiberacionAsesorExterno(el, item.id);
            },
            unCheckedChildren : _prepareStyleProperties2.default.createElement(_DraggableCore2.default, {
              type : "cross"
            })
          }))) : _prepareStyleProperties2.default.createElement(_AppDownload2.default, {
            message : "El alumno debe subir su informe t\u00e9cnico para continuar con el proceso de evaluaci\u00f3n",
            type : "warning",
            showIcon : true
          }))), _prepareStyleProperties2.default.createElement(_parametrize2.default, {
            updateProyecto : this.updateProyecto.bind(this),
            proyecto : item,
            visible : b,
            criterios_evaluacion : $scopeId
          }));
        }
      }]), Agent;
    }(_prepareStyleProperties.Component));
    t.default = offsetFromCenter;
  },
  1132 : function(cond, t, __webpack_require__) {
    /**
     * @param {!Object} obj
     * @return {?}
     */
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default : obj
      };
    }
    /**
     * @param {!AudioNode} instance
     * @param {!Function} Constructor
     * @return {undefined}
     */
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    /**
     * @param {string} self
     * @param {string} call
     * @return {?}
     */
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return !call || "object" != typeof call && "function" != typeof call ? self : call;
    }
    /**
     * @param {!Object} subClass
     * @param {!Object} superClass
     * @return {undefined}
     */
    function _inherits(subClass, superClass) {
      if ("function" != typeof superClass && null !== superClass) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      /** @type {!Object} */
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor : {
          value : subClass,
          enumerable : false,
          writable : true,
          configurable : true
        }
      });
      if (superClass) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(subClass, superClass);
        } else {
          /** @type {!Object} */
          subClass.__proto__ = superClass;
        }
      }
    }
    Object.defineProperty(t, "__esModule", {
      value : true
    });
    var _deepAssign = (__webpack_require__(15), __webpack_require__(16));
    var _deepAssign2 = _interopRequireDefault(_deepAssign);
    var _suggestItem = (__webpack_require__(28), __webpack_require__(29));
    var _suggestItem2 = _interopRequireDefault(_suggestItem);
    var _suggestList = (__webpack_require__(24), __webpack_require__(25));
    var _suggestList2 = _interopRequireDefault(_suggestList);
    var _normalizeDataUri = (__webpack_require__(18), __webpack_require__(22));
    var _normalizeDataUri2 = _interopRequireDefault(_normalizeDataUri);
    var _UiIcon = (__webpack_require__(19), __webpack_require__(20));
    var params = _interopRequireDefault(_UiIcon);
    var _createClass = function() {
      /**
       * @param {!Function} d
       * @param {string} props
       * @return {undefined}
       */
      function e(d, props) {
        /** @type {number} */
        var i = 0;
        for (; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          /** @type {boolean} */
          descriptor.configurable = true;
          if ("value" in descriptor) {
            /** @type {boolean} */
            descriptor.writable = true;
          }
          Object.defineProperty(d, descriptor.key, descriptor);
        }
      }
      return function(t, n, a) {
        return n && e(t.prototype, n), a && e(t, a), t;
      };
    }();
    var _prepareStyleProperties = __webpack_require__(0);
    var _prepareStyleProperties2 = _interopRequireDefault(_prepareStyleProperties);
    var _classlist = (__webpack_require__(11), __webpack_require__(12));
    var _classlist2 = _interopRequireDefault(_classlist);
    var data = params.default.Item;
    var FormioElement = (_normalizeDataUri2.default.Group, _suggestList2.default.Option);
    var DropIndicator = params.default.create()(function(options) {
      var visible = options.visible;
      var onCancel = options.onCancel;
      var onCreate = options.onCreate;
      var args = options.form;
      var o = options.criterios;
      var readOnlyFn = options.proyecto;
      var callback = args.getFieldDecorator;
      return _prepareStyleProperties2.default.createElement(_suggestItem2.default, {
        visible : visible,
        title : "Evaluaci\u00f3n de residencia profesional",
        okText : "Guardar",
        onCancel : onCancel,
        onOk : onCreate,
        width : 600,
        style : {
          top : 20
        }
      }, _prepareStyleProperties2.default.createElement(params.default, {
        layout : "vertical"
      }, null !== o ? o.map(function(object, awsKey) {
        return _prepareStyleProperties2.default.createElement(data, {
          key : awsKey,
          label : awsKey + 1 + ". " + object.descripcion,
          style : {
            width : "100%"
          }
        }, callback("" + object.id, {
          rules : [{
            required : true,
            message : "La pregunta debe tener un valor de evaluaci\u00f3n."
          }],
          initialValue : null !== readOnlyFn.evaluacion_asesor_externo ? readOnlyFn.evaluacion_asesor_externo.criterios_de_evaluacion.find(function(i) {
            return i.id_criterio == object.id;
          }).valor_de_evaluacion : null
        })(_prepareStyleProperties2.default.createElement(_suggestList2.default, {
          placeholder : ""
        }, Array(object.valor_max + 1).fill(1).map(function(canCreateDiscussions, a) {
          return _prepareStyleProperties2.default.createElement(FormioElement, {
            key : a,
            value : "" + a
          }, a);
        }))));
      }) : null, _prepareStyleProperties2.default.createElement(data, {
        label : "Observaciones",
        style : {
          width : "100%"
        }
      }, callback("observaciones", {
        rules : [{
          min : 5,
          message : "El minimo de caracteres es de 5."
        }, {
          max : 500,
          message : "Las observaciones debe tener como maximo 500 caracteres."
        }],
        initialValue : null !== readOnlyFn.evaluacion_asesor_externo ? readOnlyFn.evaluacion_asesor_externo.observaciones : null
      })(_prepareStyleProperties2.default.createElement(_normalizeDataUri2.default.TextArea, {
        placeholder : "Escriba aqu\u00ed sus observaciones",
        type : "text",
        autosize : {
          minRows : 2,
          maxRows : 6
        }
      })))));
    });
    var offsetFromCenter = function(_EventEmitter) {
      /**
       * @param {!Object} element
       * @return {?}
       */
      function Agent(element) {
        _classCallCheck(this, Agent);
        var $scope = _possibleConstructorReturn(this, (Agent.__proto__ || Object.getPrototypeOf(Agent)).call(this, element));
        return $scope.showModal = function() {
          $scope.setState({
            visible : true
          });
        }, $scope.handleCancel = function() {
          $scope.setState({
            visible : false
          });
        }, $scope.handleCreate = function() {
          var form = $scope.form;
          form.validateFields(function(canCreateDiscussions, contextReference) {
            if (!canCreateDiscussions) {
              console.log("Received values of form: ", contextReference);
              _classlist2.default.put("/api/proyecto/evaluacion/asesor_externo", {
                id_proyecto : $scope.state.proyecto.id,
                observaciones : contextReference.observaciones,
                criterios_evaluacion : contextReference,
                criterios : $scope.state.criterios
              }).then(function(getFilesReply) {
                if (200 === getFilesReply.status) {
                  _deepAssign2.default.success("Evaluaci\u00f3n guardada!");
                  $scope.props.updateProyecto();
                  $scope.setState({
                    visible : false
                  });
                  form.resetFields();
                } else {
                  _suggestItem2.default.error({
                    title : "Error al guardar la evaluaci\u00f3n. Revisar los siguientes campos",
                    content : _prepareStyleProperties2.default.createElement("div", null, getFilesReply.data.errores),
                    onOk : function() {
                    }
                  });
                }
              }).catch(function(mnemonics) {
                _deepAssign2.default.error(mnemonics);
              });
            }
          });
        }, $scope.saveFormRef = function(data) {
          /** @type {!Object} */
          $scope.form = data;
        }, $scope.state = {
          visible : element.visible,
          criterios : element.criterios_evaluacion,
          proyecto : element.proyecto
        }, $scope;
      }
      return _inherits(Agent, _EventEmitter), _createClass(Agent, [{
        key : "componentWillReceiveProps",
        value : function(e) {
          var visible = e.visible;
          var pubDateEl = e.criterios_evaluacion;
          var psNode = e.proyecto;
          this.setState({
            visible : visible,
            criterios : pubDateEl,
            proyecto : psNode
          });
        }
      }, {
        key : "render",
        value : function() {
          return _prepareStyleProperties2.default.createElement("div", null, _prepareStyleProperties2.default.createElement(DropIndicator, {
            ref : this.saveFormRef,
            visible : this.state.visible,
            onCancel : this.handleCancel,
            onCreate : this.handleCreate,
            criterios : this.state.criterios,
            proyecto : this.state.proyecto
          }));
        }
      }]), Agent;
    }(_prepareStyleProperties.Component);
    t.default = offsetFromCenter;
  },
  1133 : function(cond, t, s) {
    /**
     * @param {!Object} obj
     * @return {?}
     */
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default : obj
      };
    }
    /**
     * @param {!AudioNode} instance
     * @param {!Function} Constructor
     * @return {undefined}
     */
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    /**
     * @param {string} self
     * @param {string} call
     * @return {?}
     */
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return !call || "object" != typeof call && "function" != typeof call ? self : call;
    }
    /**
     * @param {!Object} subClass
     * @param {!Object} superClass
     * @return {undefined}
     */
    function _inherits(subClass, superClass) {
      if ("function" != typeof superClass && null !== superClass) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      /** @type {!Object} */
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor : {
          value : subClass,
          enumerable : false,
          writable : true,
          configurable : true
        }
      });
      if (superClass) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(subClass, superClass);
        } else {
          /** @type {!Object} */
          subClass.__proto__ = superClass;
        }
      }
    }
    Object.defineProperty(t, "__esModule", {
      value : true
    });
    var _suggestItem = (s(31), s(32));
    var _suggestItem2 = _interopRequireDefault(_suggestItem);
    var _suggestList = (s(37), s(36));
    var _suggestList2 = _interopRequireDefault(_suggestList);
    var _DraggableCore = (s(48), s(49));
    var _DraggableCore2 = _interopRequireDefault(_DraggableCore);
    var _deepAssign = (s(77), s(78));
    var _deepAssign2 = _interopRequireDefault(_deepAssign);
    var _UiIcon = (s(15), s(16));
    var _UiIcon2 = _interopRequireDefault(_UiIcon);
    var _classlist = (s(88), s(89));
    var _classlist2 = _interopRequireDefault(_classlist);
    var _ = (s(19), s(20));
    var res = _interopRequireDefault(_);
    var _createClass = function() {
      /**
       * @param {!Function} d
       * @param {string} props
       * @return {undefined}
       */
      function e(d, props) {
        /** @type {number} */
        var i = 0;
        for (; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          /** @type {boolean} */
          descriptor.configurable = true;
          if ("value" in descriptor) {
            /** @type {boolean} */
            descriptor.writable = true;
          }
          Object.defineProperty(d, descriptor.key, descriptor);
        }
      }
      return function(t, n, a) {
        return n && e(t.prototype, n), a && e(t, a), t;
      };
    }();
    var _prepareStyleProperties = s(0);
    var _prepareStyleProperties2 = _interopRequireDefault(_prepareStyleProperties);
    var _cacheManager = s(12);
    var _cacheManager2 = _interopRequireDefault(_cacheManager);
    var a = s(1);
    var _uuid = (_interopRequireDefault(a), s(45));
    var _uuid2 = _interopRequireDefault(_uuid);
    var _AboutPage = s(1134);
    var _AboutPage2 = _interopRequireDefault(_AboutPage);
    var offsetFromCenter = (res.default.Item, _classlist2.default.TabPane, function(_EventEmitter) {
      /**
       * @param {?} data
       * @return {?}
       */
      function Agent(data) {
        _classCallCheck(this, Agent);
        var _this = _possibleConstructorReturn(this, (Agent.__proto__ || Object.getPrototypeOf(Agent)).call(this, data));
        return _this.showEvaluacionSeguimientoAsesorExterno = function(canCreateDiscussions) {
          _cacheManager2.default.get("/api/proyecto/evaluacionAnexoXXIX/criterios/asesor_externo/").then(function(getFilesReply) {
            if (200 === getFilesReply.status) {
              _this.setState({
                criterios_evaluacion_seguimiento : getFilesReply.data,
                visibleEvaluacionSeguimientoAsesorExterno : true
              });
            } else {
              _UiIcon2.default.warn("Error al realizar petici\u00f3n de criterios de evaluaci\u00f3n, favor de reportar al administrador.");
            }
          });
        }, _this.state = {
          numero : data.numero,
          seguimiento : data.seguimiento,
          proyecto : data.proyecto,
          criterios_evaluacion_seguimiento : null,
          visibleEvaluacionSeguimientoAsesorExterno : false
        }, _this;
      }
      return _inherits(Agent, _EventEmitter), _createClass(Agent, [{
        key : "componentWillReceiveProps",
        value : function(recB) {
          this.setState({
            numero : recB.numero,
            proyecto : recB.proyecto,
            seguimiento : recB.seguimiento,
            visibleEvaluacionSeguimientoAsesorExterno : false,
            criterios_evaluacion_seguimiento : null
          });
        }
      }, {
        key : "render",
        value : function() {
          var e = this;
          var slot = this.state;
          var boundingBox = slot.criterios_evaluacion_seguimiento;
          var status = slot.visibleEvaluacionSeguimientoAsesorExterno;
          var attachment = slot.seguimiento;
          var instances = slot.numero;
          var bone = slot.proyecto;
          return _prepareStyleProperties2.default.createElement(_suggestItem2.default, {
            xs : 24,
            lg : 24
          }, _prepareStyleProperties2.default.createElement("h2", {
            style : {
              marginTop : 20,
              marginBottom : 10
            },
            className : "border-top"
          }, "Seguimiento " + (instances + 1)), attachment.url_seguimiento ? _prepareStyleProperties2.default.createElement("div", {
            style : {
              marginTop : 10,
              marginBottom : 10
            }
          }, _prepareStyleProperties2.default.createElement("p", null, "Link del seguimiento: "), _prepareStyleProperties2.default.createElement(_deepAssign2.default, {
            defaultFileList : [{
              uid : -2,
              name : "seguimiento de residencia",
              status : "done",
              url : attachment.url_seguimiento
            }]
          })) : _prepareStyleProperties2.default.createElement(_DraggableCore2.default, {
            style : {
              marginTop : 10,
              marginBottom : 10
            },
            message : "El alumno no ha subido el avance de su seguimiento de residencia",
            type : "warning",
            showIcon : true
          }), attachment.url_seguimiento ? _prepareStyleProperties2.default.createElement("div", {
            style : {
              marginTop : 10,
              marginBottom : 10
            }
          }, _prepareStyleProperties2.default.createElement(_suggestList2.default, {
            style : {
              marginBottom : 30
            },
            onClick : function() {
              return e.showEvaluacionSeguimientoAsesorExterno(bone.anteproyecto.alumno);
            },
            icon : "bars",
            type : "primary"
          }, "Realizar evaluaci\u00f3n"), _prepareStyleProperties2.default.createElement(_AboutPage2.default, {
            key : _uuid2.default.v4(),
            seguimiento : attachment,
            visible : status,
            criterios_evaluacion : boundingBox
          })) : _prepareStyleProperties2.default.createElement(_DraggableCore2.default, {
            style : {
              marginTop : 10,
              marginBottom : 10
            },
            message : "El alumno debe subir su avance del seguimiento de residencia para continuar con el proceso de evaluaci\u00f3n",
            type : "warning",
            showIcon : true
          }));
        }
      }]), Agent;
    }(_prepareStyleProperties.Component));
    t.default = offsetFromCenter;
  },
  1134 : function(cond, t, __webpack_require__) {
    /**
     * @param {!Object} obj
     * @return {?}
     */
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default : obj
      };
    }
    /**
     * @param {!AudioNode} instance
     * @param {!Function} Constructor
     * @return {undefined}
     */
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    /**
     * @param {string} self
     * @param {string} call
     * @return {?}
     */
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return !call || "object" != typeof call && "function" != typeof call ? self : call;
    }
    /**
     * @param {!Object} subClass
     * @param {!Object} superClass
     * @return {undefined}
     */
    function _inherits(subClass, superClass) {
      if ("function" != typeof superClass && null !== superClass) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      /** @type {!Object} */
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor : {
          value : subClass,
          enumerable : false,
          writable : true,
          configurable : true
        }
      });
      if (superClass) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(subClass, superClass);
        } else {
          /** @type {!Object} */
          subClass.__proto__ = superClass;
        }
      }
    }
    Object.defineProperty(t, "__esModule", {
      value : true
    });
    var _deepAssign = (__webpack_require__(15), __webpack_require__(16));
    var _deepAssign2 = _interopRequireDefault(_deepAssign);
    var _suggestItem = (__webpack_require__(28), __webpack_require__(29));
    var _suggestItem2 = _interopRequireDefault(_suggestItem);
    var _suggestList = (__webpack_require__(24), __webpack_require__(25));
    var _suggestList2 = _interopRequireDefault(_suggestList);
    var _normalizeDataUri = (__webpack_require__(18), __webpack_require__(22));
    var _normalizeDataUri2 = _interopRequireDefault(_normalizeDataUri);
    var _UiIcon = (__webpack_require__(19), __webpack_require__(20));
    var params = _interopRequireDefault(_UiIcon);
    var _createClass = function() {
      /**
       * @param {!Function} d
       * @param {string} props
       * @return {undefined}
       */
      function e(d, props) {
        /** @type {number} */
        var i = 0;
        for (; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          /** @type {boolean} */
          descriptor.configurable = true;
          if ("value" in descriptor) {
            /** @type {boolean} */
            descriptor.writable = true;
          }
          Object.defineProperty(d, descriptor.key, descriptor);
        }
      }
      return function(t, n, a) {
        return n && e(t.prototype, n), a && e(t, a), t;
      };
    }();
    var _prepareStyleProperties = __webpack_require__(0);
    var _prepareStyleProperties2 = _interopRequireDefault(_prepareStyleProperties);
    var _classlist = (__webpack_require__(11), __webpack_require__(12));
    var _classlist2 = _interopRequireDefault(_classlist);
    var data = params.default.Item;
    var FormioElement = (_normalizeDataUri2.default.Group, _suggestList2.default.Option);
    var DropIndicator = params.default.create()(function(options) {
      var visible = options.visible;
      var onCancel = options.onCancel;
      var onCreate = options.onCreate;
      var args = options.form;
      var o = options.criterios;
      var readOnlyFn = options.seguimiento;
      var callback = args.getFieldDecorator;
      return _prepareStyleProperties2.default.createElement(_suggestItem2.default, {
        visible : visible,
        title : "Evaluaci\u00f3n de seguimiento de residencia",
        okText : "Guardar",
        onCancel : onCancel,
        onOk : onCreate,
        width : 600,
        style : {
          top : 20
        }
      }, _prepareStyleProperties2.default.createElement(params.default, {
        layout : "vertical"
      }, null !== o ? o.map(function(object, awsKey) {
        return _prepareStyleProperties2.default.createElement(data, {
          key : awsKey,
          label : awsKey + 1 + ". " + object.descripcion,
          style : {
            width : "100%"
          }
        }, callback("" + object.id, {
          rules : [{
            required : true,
            message : "La pregunta debe tener un valor de evaluaci\u00f3n."
          }],
          initialValue : null !== readOnlyFn.evaluacion_asesor_externo ? readOnlyFn.evaluacion_asesor_externo.criterios_de_evaluacion.find(function(i) {
            return i.id_criterio == object.id;
          }).valor_de_evaluacion : null
        })(_prepareStyleProperties2.default.createElement(_suggestList2.default, {
          placeholder : ""
        }, Array(object.valor_max + 1).fill(1).map(function(canCreateDiscussions, a) {
          return _prepareStyleProperties2.default.createElement(FormioElement, {
            key : a,
            value : "" + a
          }, a);
        }))));
      }) : null, _prepareStyleProperties2.default.createElement(data, {
        label : "Observaciones",
        style : {
          width : "100%"
        }
      }, callback("observaciones", {
        rules : [{
          min : 5,
          message : "El minimo de caracteres es de 5."
        }, {
          max : 500,
          message : "Las observaciones debe tener como maximo 500 caracteres."
        }],
        initialValue : null !== readOnlyFn.evaluacion_asesor_externo ? readOnlyFn.evaluacion_asesor_externo.observaciones : null
      })(_prepareStyleProperties2.default.createElement(_normalizeDataUri2.default.TextArea, {
        placeholder : "Escriba aqu\u00ed sus observaciones",
        type : "text",
        autosize : {
          minRows : 2,
          maxRows : 6
        }
      })))));
    });
    var offsetFromCenter = function(_EventEmitter) {
      /**
       * @param {!Object} element
       * @return {?}
       */
      function Agent(element) {
        _classCallCheck(this, Agent);
        var $scope = _possibleConstructorReturn(this, (Agent.__proto__ || Object.getPrototypeOf(Agent)).call(this, element));
        return $scope.showModal = function() {
          $scope.setState({
            visible : true
          });
        }, $scope.handleCancel = function() {
          $scope.setState({
            visible : false
          });
        }, $scope.handleCreate = function() {
          $scope.form.validateFields(function(canCreateDiscussions, contextReference) {
            if (!canCreateDiscussions) {
              console.log("Received values of form: ", contextReference);
              _classlist2.default.put("/api/proyecto/evaluacion_seguimiento/asesor_externo", {
                id_seguimiento : $scope.state.seguimiento.id,
                observaciones : contextReference.observaciones,
                criterios_evaluacion : contextReference,
                criterios : $scope.state.criterios
              }).then(function(getFilesReply) {
                if (200 === getFilesReply.status) {
                  _deepAssign2.default.success("Evaluaci\u00f3n del seguimiento guardada!");
                  $scope.setState({
                    visible : false
                  });
                } else {
                  _suggestItem2.default.error({
                    title : "Error al guardar la evaluaci\u00f3n. Revisar los siguientes campos",
                    content : _prepareStyleProperties2.default.createElement("div", null, getFilesReply.data.errores),
                    onOk : function() {
                    }
                  });
                }
              }).catch(function(mnemonics) {
                _deepAssign2.default.error(mnemonics);
              });
            }
          });
        }, $scope.saveFormRef = function(data) {
          /** @type {!Object} */
          $scope.form = data;
        }, $scope.state = {
          visible : element.visible,
          criterios : element.criterios_evaluacion,
          seguimiento : element.seguimiento
        }, $scope;
      }
      return _inherits(Agent, _EventEmitter), _createClass(Agent, [{
        key : "componentWillReceiveProps",
        value : function(e) {
          var visible = e.visible;
          var pubDateEl = e.criterios_evaluacion;
          var psNode = e.seguimiento;
          this.setState({
            visible : visible,
            criterios : pubDateEl,
            seguimiento : psNode
          });
        }
      }, {
        key : "render",
        value : function() {
          return _prepareStyleProperties2.default.createElement("div", null, _prepareStyleProperties2.default.createElement(DropIndicator, {
            ref : this.saveFormRef,
            visible : this.state.visible,
            onCancel : this.handleCancel,
            onCreate : this.handleCreate,
            criterios : this.state.criterios,
            seguimiento : this.state.seguimiento
          }));
        }
      }]), Agent;
    }(_prepareStyleProperties.Component);
    t.default = offsetFromCenter;
  },
  1135 : function(cond, t, __webpack_require__) {
    /**
     * @param {!Object} obj
     * @return {?}
     */
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default : obj
      };
    }
    /**
     * @param {!AudioNode} instance
     * @param {!Function} Constructor
     * @return {undefined}
     */
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    /**
     * @param {string} self
     * @param {string} call
     * @return {?}
     */
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return !call || "object" != typeof call && "function" != typeof call ? self : call;
    }
    /**
     * @param {!Object} subClass
     * @param {!Object} superClass
     * @return {undefined}
     */
    function _inherits(subClass, superClass) {
      if ("function" != typeof superClass && null !== superClass) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      /** @type {!Object} */
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor : {
          value : subClass,
          enumerable : false,
          writable : true,
          configurable : true
        }
      });
      if (superClass) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(subClass, superClass);
        } else {
          /** @type {!Object} */
          subClass.__proto__ = superClass;
        }
      }
    }
    Object.defineProperty(t, "__esModule", {
      value : true
    });
    var _DraggableCore = (__webpack_require__(48), __webpack_require__(49));
    var _DraggableCore2 = _interopRequireDefault(_DraggableCore);
    var _normalizeDataUri = (__webpack_require__(35), __webpack_require__(13));
    var _normalizeDataUri2 = _interopRequireDefault(_normalizeDataUri);
    var _suggestList = (__webpack_require__(37), __webpack_require__(36));
    var _suggestList2 = _interopRequireDefault(_suggestList);
    var _suggestItem = (__webpack_require__(98), __webpack_require__(86));
    var _suggestItem2 = _interopRequireDefault(_suggestItem);
    var _UiIcon = (__webpack_require__(65), __webpack_require__(66));
    var _UiIcon2 = _interopRequireDefault(_UiIcon);
    var _createClass = function() {
      /**
       * @param {!Function} d
       * @param {string} props
       * @return {undefined}
       */
      function e(d, props) {
        /** @type {number} */
        var i = 0;
        for (; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          /** @type {boolean} */
          descriptor.configurable = true;
          if ("value" in descriptor) {
            /** @type {boolean} */
            descriptor.writable = true;
          }
          Object.defineProperty(d, descriptor.key, descriptor);
        }
      }
      return function(t, n, a) {
        return n && e(t.prototype, n), a && e(t, a), t;
      };
    }();
    var _prepareStyleProperties = __webpack_require__(0);
    var _prepareStyleProperties2 = _interopRequireDefault(_prepareStyleProperties);
    var _classlist = (__webpack_require__(11), __webpack_require__(2));
    var route = (_interopRequireDefault(_classlist), __webpack_require__(62));
    var _deepAssign = __webpack_require__(12);
    var _deepAssign2 = _interopRequireDefault(_deepAssign);
    var _noframeworkWaypoints = __webpack_require__(45);
    var _noframeworkWaypoints2 = _interopRequireDefault(_noframeworkWaypoints);
    var __WEBPACK_IMPORTED_MODULE_11_date_fns_end_of_month__ = __webpack_require__(99);
    var _AboutPage = __webpack_require__(100);
    var _AboutPage2 = _interopRequireDefault(_AboutPage);
    var _AppDownload = __webpack_require__(1136);
    var _AppDownload2 = _interopRequireDefault(_AppDownload);
    var _buildPageNumber = __webpack_require__(1137);
    var _buildPageNumber2 = _interopRequireDefault(_buildPageNumber);
    var _custom = __webpack_require__(1140);
    var _custom2 = _interopRequireDefault(_custom);
    var _CalendarDay = __webpack_require__(1142);
    var _CalendarDay2 = _interopRequireDefault(_CalendarDay);
    var DropIndicator = _UiIcon2.default.Header;
    var ResultsTableComponent = _UiIcon2.default.Content;
    var Footer = _UiIcon2.default.Footer;
    var FormioElement = _UiIcon2.default.Sider;
    var ControlledText = _suggestItem2.default.SubMenu;
    var Group = _suggestList2.default.Group;
    var offsetFromCenter = function(_EventEmitter) {
      /**
       * @return {?}
       */
      function Agent() {
        _classCallCheck(this, Agent);
        var _this = _possibleConstructorReturn(this, (Agent.__proto__ || Object.getPrototypeOf(Agent)).call(this));
        return _this.toggle = function() {
          _this.setState({
            collapsed : !_this.state.collapsed,
            visibleCambiarContrasenia : false,
            visibleCancelacion : false
          });
        }, _this.updateAsesorias = function() {
          var t = _this.state.usuario;
          _deepAssign2.default.get("/api/alumno/" + t.id_alumno + "/_proyecto").then(function(getFilesReply) {
            if (200 === getFilesReply.status) {
              _this.setState({
                visibleCambiarContrasenia : false,
                visibleCancelacion : false,
                componentRender : {
                  title : "Asesor\u00edas",
                  render : _prepareStyleProperties2.default.createElement(_custom2.default, {
                    key : _noframeworkWaypoints2.default.v1(),
                    updateAsesorias : _this.updateAsesorias.bind(_this),
                    usuario : t,
                    proyecto : getFilesReply.data
                  })
                }
              });
            }
          });
        }, _this.handleMenu = function(event) {
          var a = (event.item, event.key);
          var $scope = (event.selectedKeys, _this.state);
          var $scopeId = $scope.usuario;
          var bpmnElement = $scope.proyecto;
          if (1 == a) {
            _deepAssign2.default.get("/api/alumno/" + $scopeId.id_alumno + "/_proyecto").then(function(getFilesReply) {
              if (200 === getFilesReply.status) {
                _this.setState({
                  componentSelected : a,
                  visibleCambiarContrasenia : false,
                  visibleCancelacion : false,
                  proyecto : getFilesReply.data,
                  componentRender : {
                    title : "Proyecto de residencia",
                    render : _prepareStyleProperties2.default.createElement(_buildPageNumber2.default, {
                      proyecto : getFilesReply.data
                    })
                  }
                });
              }
            });
          } else {
            if (2 == a) {
              _deepAssign2.default.get("/api/alumno/" + $scopeId.id_alumno + "/_proyecto").then(function(getFilesReply) {
                if (200 === getFilesReply.status) {
                  _this.setState({
                    componentSelected : a,
                    visibleCambiarContrasenia : false,
                    visibleCancelacion : false,
                    componentRender : {
                      title : "Asesor\u00edas",
                      render : _prepareStyleProperties2.default.createElement(_custom2.default, {
                        key : _noframeworkWaypoints2.default.v1(),
                        updateAsesorias : _this.updateAsesorias.bind(_this),
                        usuario : $scopeId,
                        proyecto : getFilesReply.data
                      })
                    }
                  });
                }
              });
            } else {
              if (4 == a) {
                _deepAssign2.default.put("/api/proyecto/seguimientos", {
                  id_proyecto : bpmnElement.id,
                  id_periodo : bpmnElement.anteproyecto.id_periodo
                }).then(function(getFilesReply) {
                  if (200 === getFilesReply.status) {
                    _this.setState({
                      componentSelected : a,
                      visibleCambiarContrasenia : false,
                      visibleCancelacion : false,
                      componentRender : {
                        title : "Seguimientos",
                        render : _prepareStyleProperties2.default.createElement(_CalendarDay2.default, {
                          seguimientos : getFilesReply.data
                        })
                      }
                    });
                  }
                });
              } else {
                if (3 == a) {
                  _this.setState({
                    visibleCambiarContrasenia : true,
                    visibleCancelacion : false
                  });
                }
              }
            }
          }
        }, _this.showFormCancelacion = function() {
          _this.setState({
            visibleCambiarContrasenia : false,
            visibleCancelacion : true
          });
        }, _this.state = {
          collapsed : true,
          isAuth : true,
          usuario : null,
          componentRender : {
            title : null,
            render : null
          },
          visibleCambiarContrasenia : false,
          proyecto : null,
          cancelacion : null,
          visibleCancelacion : false
        }, _this;
      }
      return _inherits(Agent, _EventEmitter), _createClass(Agent, [{
        key : "getIsAuth",
        value : function() {
          var res = this;
          (0, __WEBPACK_IMPORTED_MODULE_11_date_fns_end_of_month__.getIsAuth)().then(function($rootScope) {
            if ("residente" === $rootScope.rol) {
              _deepAssign2.default.get("/api/alumno/" + $rootScope.id_alumno + "/_proyecto").then(function(getFilesReply) {
                if (200 === getFilesReply.status) {
                  res.setState({
                    proyecto : getFilesReply.data,
                    isAuth : $rootScope.isAuth,
                    usuario : $rootScope,
                    componentRender : {
                      title : "Proyecto de residencia",
                      render : _prepareStyleProperties2.default.createElement(_buildPageNumber2.default, {
                        proyecto : getFilesReply.data
                      })
                    }
                  });
                } else {
                  res.setState({
                    isAuth : false
                  });
                }
              }).catch(function(a) {
                _deepAssign2.default.get("/api/alumno/" + $rootScope.id_alumno + "/cancelacion").then(function(getFilesReply) {
                  if (200 === getFilesReply.status) {
                    res.setState({
                      cancelacion : getFilesReply.data
                    });
                  }
                });
              });
            } else {
              res.setState({
                isAuth : false
              });
            }
          });
        }
      }, {
        key : "componentWillMount",
        value : function() {
          this.getIsAuth();
        }
      }, {
        key : "render",
        value : function() {
          var e = this;
          var that = this.state;
          var selected = that.visibleCancelacion;
          var udisp = that.cancelacion;
          var CircularList = that.isAuth;
          var meta = (that.componentSelected, that.componentRender);
          var visible = (that.usuario, that.visibleCambiarContrasenia);
          var isVisible = that.proyecto;
          return CircularList ? _prepareStyleProperties2.default.createElement(_UiIcon2.default, {
            style : {
              minHeight : "100vh"
            }
          }, _prepareStyleProperties2.default.createElement(FormioElement, {
            breakpoint : "lg",
            trigger : null,
            collapsible : true,
            collapsed : this.state.collapsed
          }, _prepareStyleProperties2.default.createElement("div", {
            className : "logo",
            style : {
              textAlign : "center"
            }
          }, _prepareStyleProperties2.default.createElement("img", {
            src : "/img/tec_logo.png",
            alt : "logo_tec",
            height : "100%"
          })), _prepareStyleProperties2.default.createElement(_suggestItem2.default, {
            theme : "dark",
            mode : "inline",
            defaultSelectedKeys : ["1"],
            onSelect : this.handleMenu
          }, _prepareStyleProperties2.default.createElement(_suggestItem2.default.Item, {
            key : "1"
          }, _prepareStyleProperties2.default.createElement(_normalizeDataUri2.default, {
            type : "inbox"
          }), _prepareStyleProperties2.default.createElement("span", null, "Proyecto")), _prepareStyleProperties2.default.createElement(_suggestItem2.default.Item, {
            key : "2"
          }, _prepareStyleProperties2.default.createElement(_normalizeDataUri2.default, {
            type : "solution"
          }), _prepareStyleProperties2.default.createElement("span", null, "Asesor\u00edas")), _prepareStyleProperties2.default.createElement(_suggestItem2.default.Item, {
            key : "4"
          }, _prepareStyleProperties2.default.createElement(_normalizeDataUri2.default, {
            type : "calendar"
          }), _prepareStyleProperties2.default.createElement("span", null, "Seguimientos")), _prepareStyleProperties2.default.createElement(ControlledText, {
            key : "sub1",
            title : _prepareStyleProperties2.default.createElement("span", null, _prepareStyleProperties2.default.createElement(_normalizeDataUri2.default, {
              type : "user"
            }), _prepareStyleProperties2.default.createElement("span", null, "Usuario"))
          }, _prepareStyleProperties2.default.createElement(_suggestItem2.default.Item, {
            key : "3"
          }, "Cambiar contrase\u00f1a"), _prepareStyleProperties2.default.createElement(_suggestItem2.default.Item, null, _prepareStyleProperties2.default.createElement("a", {
            href : "/api/usuario/logout"
          }, " ", _prepareStyleProperties2.default.createElement("strong", null, "Cerrar sesi\u00f3n"), " "), " ")))), _prepareStyleProperties2.default.createElement(_UiIcon2.default, null, _prepareStyleProperties2.default.createElement(DropIndicator, {
            style : {
              background : "#fff",
              padding : 0
            }
          }, _prepareStyleProperties2.default.createElement(_normalizeDataUri2.default, {
            className : "trigger",
            type : this.state.collapsed ? "menu-unfold" : "menu-fold",
            onClick : this.toggle
          }), meta.title), _prepareStyleProperties2.default.createElement(ResultsTableComponent, {
            style : {
              margin : "24px 16px",
              padding : 24,
              background : "#fff"
            }
          }, meta.render, isVisible ? null : _prepareStyleProperties2.default.createElement("div", null, _prepareStyleProperties2.default.createElement(_DraggableCore2.default, {
            message : "Residente, usted no tiene proyecto, probablemente hubo una cancelaci\u00f3n \u00f3 su anteproyecto no fue factible, para mas informaci\u00f3n preguntar al presidente de academia o jefe de departamento.",
            type : "error",
            showIcon : true
          }), null === udisp ? null : _prepareStyleProperties2.default.createElement("div", null, _prepareStyleProperties2.default.createElement(Group, null, _prepareStyleProperties2.default.createElement(_suggestList2.default, {
            onClick : function() {
              return e.showFormCancelacion();
            },
            style : {
              marginTop : 20
            },
            icon : "plus"
          }, "Agregar justificaci\u00f3n de cancelaci\u00f3n de residencia"), _prepareStyleProperties2.default.createElement(_suggestList2.default, {
            type : "primary",
            icon : "file-pdf"
          }, _prepareStyleProperties2.default.createElement("a", {
            style : {
              color : "white"
            },
            href : "/api/alumno/" + udisp.id + "/generarFormatoDeCancelacion",
            target : "_blank"
          }, "Generar formato"))), _prepareStyleProperties2.default.createElement(_AppDownload2.default, {
            cancelacion : udisp,
            visible : selected
          })))), _prepareStyleProperties2.default.createElement(Footer, {
            style : {
              textAlign : "center"
            }
          }, "Sistema de Seguimiento de residencias del ITCH \u00a92017 Francisco Blanco 00fblanco@gmail.com")), _prepareStyleProperties2.default.createElement(_AboutPage2.default, {
            visible : visible
          })) : _prepareStyleProperties2.default.createElement(route.Redirect, {
            to : "/usuario/auth"
          });
        }
      }]), Agent;
    }(_prepareStyleProperties.Component);
    t.default = offsetFromCenter;
  },
  1136 : function(cond, t, __webpack_require__) {
    /**
     * @param {!Object} obj
     * @return {?}
     */
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default : obj
      };
    }
    /**
     * @param {!AudioNode} instance
     * @param {!Function} Constructor
     * @return {undefined}
     */
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    /**
     * @param {string} self
     * @param {string} call
     * @return {?}
     */
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return !call || "object" != typeof call && "function" != typeof call ? self : call;
    }
    /**
     * @param {!Object} subClass
     * @param {!Object} superClass
     * @return {undefined}
     */
    function _inherits(subClass, superClass) {
      if ("function" != typeof superClass && null !== superClass) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      /** @type {!Object} */
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor : {
          value : subClass,
          enumerable : false,
          writable : true,
          configurable : true
        }
      });
      if (superClass) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(subClass, superClass);
        } else {
          /** @type {!Object} */
          subClass.__proto__ = superClass;
        }
      }
    }
    Object.defineProperty(t, "__esModule", {
      value : true
    });
    var _deepAssign = (__webpack_require__(15), __webpack_require__(16));
    var _deepAssign2 = _interopRequireDefault(_deepAssign);
    var _suggestItem = (__webpack_require__(28), __webpack_require__(29));
    var _suggestItem2 = _interopRequireDefault(_suggestItem);
    var _normalizeDataUri = (__webpack_require__(18), __webpack_require__(22));
    var _normalizeDataUri2 = _interopRequireDefault(_normalizeDataUri);
    var _UiIcon = (__webpack_require__(19), __webpack_require__(20));
    var params = _interopRequireDefault(_UiIcon);
    var _createClass = function() {
      /**
       * @param {!Function} d
       * @param {string} props
       * @return {undefined}
       */
      function e(d, props) {
        /** @type {number} */
        var i = 0;
        for (; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          /** @type {boolean} */
          descriptor.configurable = true;
          if ("value" in descriptor) {
            /** @type {boolean} */
            descriptor.writable = true;
          }
          Object.defineProperty(d, descriptor.key, descriptor);
        }
      }
      return function(t, n, a) {
        return n && e(t.prototype, n), a && e(t, a), t;
      };
    }();
    var _prepareStyleProperties = __webpack_require__(0);
    var _prepareStyleProperties2 = _interopRequireDefault(_prepareStyleProperties);
    var _classlist = (__webpack_require__(11), __webpack_require__(62), __webpack_require__(12));
    var _classlist2 = _interopRequireDefault(_classlist);
    var data = params.default.Item;
    var FormioElement = params.default.create()(function(options) {
      var visible = options.visible;
      var onCancel = options.onCancel;
      var onCreate = options.onCreate;
      var root = options.form;
      var what = options.cancelacion;
      var fullImg = root.getFieldDecorator;
      return _prepareStyleProperties2.default.createElement(_suggestItem2.default, {
        visible : visible,
        title : "Justificaci\u00f3n de cancelaci\u00f3n del proyecto: " + what.nombre_proyecto,
        okText : "Guardar",
        onCancel : onCancel,
        onOk : onCreate,
        width : 700
      }, _prepareStyleProperties2.default.createElement(params.default, {
        layout : "vertical"
      }, _prepareStyleProperties2.default.createElement(data, {
        label : "Justificaci\u00f3n de cancelaci\u00f3n"
      }, fullImg("justificacion", {
        rules : [{
          required : true,
          message : "Deb\u00e9 describir la justificaci\u00f3n de la cancelaci\u00f3n del proyecto."
        }],
        initialValue : what.justificacion
      })(_prepareStyleProperties2.default.createElement(_normalizeDataUri2.default.TextArea, {
        autosize : {
          minRows : 3,
          maxRows : 6
        },
        type : "text",
        placeholder : "Justificaci\u00f3n..."
      })))));
    });
    var offsetFromCenter = function(_EventEmitter) {
      /**
       * @param {!Object} element
       * @return {?}
       */
      function Agent(element) {
        _classCallCheck(this, Agent);
        var $scope = _possibleConstructorReturn(this, (Agent.__proto__ || Object.getPrototypeOf(Agent)).call(this, element));
        return $scope.showModal = function() {
          $scope.setState({
            visible : true
          });
        }, $scope.handleCancel = function() {
          $scope.setState({
            visible : false
          });
        }, $scope.handleCreate = function() {
          $scope.form.validateFields(function(isSlidingUp, canCreateDiscussions) {
            if (!isSlidingUp) {
              _classlist2.default.put("/api/alumno/cancelacion_justificacion", {
                id_cancelacion : $scope.state.cancelacion.id,
                justificacion : canCreateDiscussions.justificacion
              }).then(function(e) {
                console.log(e);
                if (200 === e.status) {
                  _deepAssign2.default.success("Justificaci\u00f3n guardada satisfactoriamente");
                  $scope.setState({
                    visible : false
                  });
                } else {
                  _suggestItem2.default.error({
                    title : "Error al cambiar contrase\u00f1a. Revisar los siguientes campos",
                    content : _prepareStyleProperties2.default.createElement("div", null, e.data.errores),
                    onOk : function() {
                    }
                  });
                }
              }).catch(function(mnemonics) {
                _deepAssign2.default.error(mnemonics);
              });
            }
          });
        }, $scope.saveFormRef = function(data) {
          /** @type {!Object} */
          $scope.form = data;
        }, $scope.state = {
          visible : element.visible,
          cancelacion : element.cancelacion
        }, $scope;
      }
      return _inherits(Agent, _EventEmitter), _createClass(Agent, [{
        key : "componentWillReceiveProps",
        value : function(_ref) {
          var visible = _ref.visible;
          var _ref$mapStateToPropsF = _ref.cancelacion;
          this.setState({
            visible : visible,
            cancelacion : _ref$mapStateToPropsF
          });
        }
      }, {
        key : "render",
        value : function() {
          return _prepareStyleProperties2.default.createElement("div", null, _prepareStyleProperties2.default.createElement(FormioElement, {
            ref : this.saveFormRef,
            visible : this.state.visible,
            onCancel : this.handleCancel,
            onCreate : this.handleCreate,
            cancelacion : this.state.cancelacion
          }));
        }
      }]), Agent;
    }(_prepareStyleProperties.Component);
    t.default = offsetFromCenter;
  },
  1137 : function(cond, t, s) {
    /**
     * @param {!Object} obj
     * @return {?}
     */
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default : obj
      };
    }
    /**
     * @param {!AudioNode} instance
     * @param {!Function} Constructor
     * @return {undefined}
     */
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    /**
     * @param {string} self
     * @param {string} call
     * @return {?}
     */
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return !call || "object" != typeof call && "function" != typeof call ? self : call;
    }
    /**
     * @param {!Object} subClass
     * @param {!Object} superClass
     * @return {undefined}
     */
    function _inherits(subClass, superClass) {
      if ("function" != typeof superClass && null !== superClass) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      /** @type {!Object} */
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor : {
          value : subClass,
          enumerable : false,
          writable : true,
          configurable : true
        }
      });
      if (superClass) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(subClass, superClass);
        } else {
          /** @type {!Object} */
          subClass.__proto__ = superClass;
        }
      }
    }
    Object.defineProperty(t, "__esModule", {
      value : true
    });
    var _DraggableCore = (s(33), s(34));
    var _DraggableCore2 = _interopRequireDefault(_DraggableCore);
    var _suggestItem = (s(119), s(120));
    var _suggestItem2 = _interopRequireDefault(_suggestItem);
    var _deepAssign = (s(31), s(32));
    var _deepAssign2 = _interopRequireDefault(_deepAssign);
    var _UiIcon = (s(35), s(13));
    var _UiIcon2 = _interopRequireDefault(_UiIcon);
    var _CalendarDay = (s(18), s(22));
    var _CalendarDay2 = _interopRequireDefault(_CalendarDay);
    var _suggestList = (s(19), s(20));
    var _suggestList2 = _interopRequireDefault(_suggestList);
    var _createClass = function() {
      /**
       * @param {!Function} d
       * @param {string} props
       * @return {undefined}
       */
      function e(d, props) {
        /** @type {number} */
        var i = 0;
        for (; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          /** @type {boolean} */
          descriptor.configurable = true;
          if ("value" in descriptor) {
            /** @type {boolean} */
            descriptor.writable = true;
          }
          Object.defineProperty(d, descriptor.key, descriptor);
        }
      }
      return function(t, n, a) {
        return n && e(t.prototype, n), a && e(t, a), t;
      };
    }();
    var _prepareStyleProperties = s(0);
    var _prepareStyleProperties2 = _interopRequireDefault(_prepareStyleProperties);
    var a = s(12);
    var _AboutPage = (_interopRequireDefault(a), s(1));
    var _AppDownload = (_interopRequireDefault(_AboutPage), s(1138));
    var _AppDownload2 = _interopRequireDefault(_AppDownload);
    var _CalendarEvent = s(1139);
    var _CalendarEvent2 = _interopRequireDefault(_CalendarEvent);
    var Route = _suggestList2.default.Item;
    var offsetFromCenter = function(_EventEmitter) {
      /**
       * @param {?} data
       * @return {?}
       */
      function Agent(data) {
        _classCallCheck(this, Agent);
        var _this = _possibleConstructorReturn(this, (Agent.__proto__ || Object.getPrototypeOf(Agent)).call(this, data));
        return _this.state = {
          proyecto : data.proyecto
        }, _this;
      }
      return _inherits(Agent, _EventEmitter), _createClass(Agent, [{
        key : "componentWillReceiveProps",
        value : function(recB) {
          this.setState({
            proyecto : recB.proyecto
          });
        }
      }, {
        key : "render",
        value : function() {
          var eVideoJSON = this.state.proyecto;
          return console.log("proyecto => ", this.state.proyecto), _prepareStyleProperties2.default.createElement("div", null, _prepareStyleProperties2.default.createElement(_suggestList2.default, null, _prepareStyleProperties2.default.createElement(Route, {
            label : "T\u00edtulo"
          }, _prepareStyleProperties2.default.createElement(_CalendarDay2.default, {
            value : eVideoJSON.anteproyecto.nombre,
            readOnly : true
          })), _prepareStyleProperties2.default.createElement(Route, {
            label : "Objetivo general"
          }, _prepareStyleProperties2.default.createElement(_CalendarDay2.default, {
            value : eVideoJSON.anteproyecto.objetivo_general,
            readOnly : true
          })), _prepareStyleProperties2.default.createElement(Route, {
            label : "Anteproyecto"
          }, _prepareStyleProperties2.default.createElement("a", {
            style : {
              color : "#4da1ff"
            },
            href : "/api/anteproyecto/pdf/" + eVideoJSON.anteproyecto.path_file_anteproyecto,
            target : "_blank"
          }, " Ver anteproyecto ", _prepareStyleProperties2.default.createElement(_UiIcon2.default, {
            type : "file-pdf",
            style : {
              color : "#4da1ff"
            }
          })))), _prepareStyleProperties2.default.createElement(_DraggableCore2.default, {
            className : "border-top"
          }, _prepareStyleProperties2.default.createElement(_deepAssign2.default, {
            xs : 24,
            lg : 24
          }, _prepareStyleProperties2.default.createElement("h2", {
            style : {
              marginBottom : 20
            }
          }, "Plan de trabajo"), _prepareStyleProperties2.default.createElement("a", {
            style : {
              color : "#4da1ff"
            },
            href : "/plantillas/plan_de_trabajo.docx"
          }, "Plantilla de plan de trabajo ", _prepareStyleProperties2.default.createElement(_UiIcon2.default, {
            type : "cloud-download"
          }))), _prepareStyleProperties2.default.createElement(_deepAssign2.default, {
            xs : 24,
            lg : 12
          }, _prepareStyleProperties2.default.createElement(_AppDownload2.default, {
            proyecto : eVideoJSON
          })), _prepareStyleProperties2.default.createElement(_deepAssign2.default, {
            xs : 24,
            lg : 12
          }, _prepareStyleProperties2.default.createElement("p", {
            style : {
              marginLeft : 40,
              marginBottom : 15
            }
          }, "Observaciones del plan de trabajo"), _prepareStyleProperties2.default.createElement(_suggestItem2.default, {
            className : "center-block",
            style : {
              marginLeft : 40,
              overflow : "scroll",
              height : 180,
              paddingLeft : 20,
              paddingTop : 20
            }
          }, eVideoJSON.observaciones.filter(function(element) {
            return "plan_de_trabajo" === element.tipo;
          }).map(function(selector, awsKey) {
            return _prepareStyleProperties2.default.createElement(_suggestItem2.default.Item, {
              key : awsKey,
              color : selector.solucionada ? "green" : "red",
              dot : selector.solucionada ? _prepareStyleProperties2.default.createElement(_UiIcon2.default, {
                type : "check-circle-o"
              }) : _prepareStyleProperties2.default.createElement(_UiIcon2.default, {
                type : "clock-circle-o",
                style : {
                  fontSize : "16px"
                }
              })
            }, selector.observacion);
          })))), _prepareStyleProperties2.default.createElement(_DraggableCore2.default, {
            className : "border-top"
          }, _prepareStyleProperties2.default.createElement(_deepAssign2.default, {
            xs : 24,
            lg : 24
          }, _prepareStyleProperties2.default.createElement("h2", {
            style : {
              marginBottom : 20
            }
          }, "Cronograma"), _prepareStyleProperties2.default.createElement("a", {
            style : {
              color : "#4da1ff"
            },
            href : "/plantillas/cronograma.docx"
          }, "Plantilla de cronograma de actividades ", _prepareStyleProperties2.default.createElement(_UiIcon2.default, {
            type : "cloud-download"
          }))), _prepareStyleProperties2.default.createElement(_deepAssign2.default, {
            xs : 24,
            lg : 12
          }, _prepareStyleProperties2.default.createElement(_CalendarEvent2.default, {
            proyecto : eVideoJSON
          })), _prepareStyleProperties2.default.createElement(_deepAssign2.default, {
            xs : 24,
            lg : 12
          }, _prepareStyleProperties2.default.createElement("p", {
            style : {
              marginLeft : 40,
              marginBottom : 15
            }
          }, "Observaciones del cronograma de actividades"), _prepareStyleProperties2.default.createElement(_suggestItem2.default, {
            className : "center-block",
            style : {
              marginLeft : 40,
              overflow : "scroll",
              height : 180,
              paddingLeft : 20,
              paddingTop : 20
            }
          }, eVideoJSON.observaciones.filter(function(element) {
            return "cronograma" === element.tipo;
          }).map(function(selector, awsKey) {
            return _prepareStyleProperties2.default.createElement(_suggestItem2.default.Item, {
              key : awsKey,
              color : selector.solucionada ? "green" : "red",
              dot : selector.solucionada ? _prepareStyleProperties2.default.createElement(_UiIcon2.default, {
                type : "check-circle-o"
              }) : _prepareStyleProperties2.default.createElement(_UiIcon2.default, {
                type : "clock-circle-o",
                style : {
                  fontSize : "16px"
                }
              })
            }, selector.observacion);
          })))));
        }
      }]), Agent;
    }(_prepareStyleProperties.Component);
    t.default = offsetFromCenter;
  },
  1138 : function(allegedI, arg, resolve) {
    /**
     * @param {!Object} obj
     * @return {?}
     */
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default : obj
      };
    }
    /**
     * @param {!AudioNode} instance
     * @param {!Function} Constructor
     * @return {undefined}
     */
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    /**
     * @param {string} self
     * @param {string} call
     * @return {?}
     */
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return !call || "object" != typeof call && "function" != typeof call ? self : call;
    }
    /**
     * @param {!Object} subClass
     * @param {!Object} superClass
     * @return {undefined}
     */
    function _inherits(subClass, superClass) {
      if ("function" != typeof superClass && null !== superClass) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      /** @type {!Object} */
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor : {
          value : subClass,
          enumerable : false,
          writable : true,
          configurable : true
        }
      });
      if (superClass) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(subClass, superClass);
        } else {
          /** @type {!Object} */
          subClass.__proto__ = superClass;
        }
      }
    }
    Object.defineProperty(arg, "__esModule", {
      value : true
    });
    var _AboutPage = (resolve(77), resolve(78));
    var _AboutPage2 = _interopRequireDefault(_AboutPage);
    var _suggestItem = (resolve(35), resolve(13));
    var _suggestItem2 = _interopRequireDefault(_suggestItem);
    var _deepAssign = (resolve(15), resolve(16));
    var _deepAssign2 = _interopRequireDefault(_deepAssign);
    var _UiIcon = (resolve(18), resolve(22));
    var _UiIcon2 = _interopRequireDefault(_UiIcon);
    var _classlist = (resolve(19), resolve(20));
    var params = _interopRequireDefault(_classlist);
    var _createClass = function() {
      /**
       * @param {!Function} d
       * @param {string} props
       * @return {undefined}
       */
      function e(d, props) {
        /** @type {number} */
        var i = 0;
        for (; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          /** @type {boolean} */
          descriptor.configurable = true;
          if ("value" in descriptor) {
            /** @type {boolean} */
            descriptor.writable = true;
          }
          Object.defineProperty(d, descriptor.key, descriptor);
        }
      }
      return function(t, n, a) {
        return n && e(t.prototype, n), a && e(t, a), t;
      };
    }();
    var _prepareStyleProperties = resolve(0);
    var _prepareStyleProperties2 = _interopRequireDefault(_prepareStyleProperties);
    var target = (resolve(11), resolve(12));
    var _normalizeDataUri = (_interopRequireDefault(target), resolve(1));
    var DropIndicator = (_interopRequireDefault(_normalizeDataUri), params.default.Item);
    var realField = (_UiIcon2.default.TextArea, function(_EventEmitter) {
      /**
       * @return {?}
       */
      function Agent() {
        var _Object$getPrototypeO;
        var i;
        var _this;
        var _ret;
        _classCallCheck(this, Agent);
        /** @type {number} */
        var _len8 = arguments.length;
        /** @type {!Array} */
        var args = Array(_len8);
        /** @type {number} */
        var _key8 = 0;
        for (; _key8 < _len8; _key8++) {
          args[_key8] = arguments[_key8];
        }
        return i = _this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Agent.__proto__ || Object.getPrototypeOf(Agent)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this.normFile = function(info) {
          return Array.isArray(info) ? info : info && info.fileList;
        }, _ret = i, _possibleConstructorReturn(_this, _ret);
      }
      return _inherits(Agent, _EventEmitter), _createClass(Agent, [{
        key : "beforeUpload",
        value : function(e) {
          /** @type {boolean} */
          var k = "application/pdf" === e.type;
          if (!k) {
            _deepAssign2.default.error("El archivo debe ser PDF!");
          }
          /** @type {boolean} */
          var d = e.size / 1024 / 1024 < 10;
          return d || _deepAssign2.default.error("El archivo debe tener un tama\u00f1o menor de 10 MB."), k && d;
        }
      }, {
        key : "render",
        value : function() {
          var RHSong = this.props.form.getFieldDecorator;
          var selectedEntity = this.props.proyecto;
          return _prepareStyleProperties2.default.createElement(params.default, {
            onSubmit : this.handleSubmit
          }, _prepareStyleProperties2.default.createElement("div", {
            className : "dropbox"
          }, _prepareStyleProperties2.default.createElement(DropIndicator, {
            label : "Seleccione su plan de trabajo"
          }, RHSong("file_plan_trabajo", {
            valuePropName : "fileList",
            getValueFromEvent : this.normFile,
            initialValue : selectedEntity.filename_plan_trabajo ? [{
              uid : 1,
              name : "plan_de_trabajo.pdf",
              status : "done",
              url : "/api/plan_de_trabajo/pdf/" + selectedEntity.filename_plan_trabajo
            }] : []
          })(_prepareStyleProperties2.default.createElement(_AboutPage2.default.Dragger, {
            name : "filePlanTrabajo",
            action : "/api/alumno/file_plan_trabajo/" + selectedEntity.id,
            beforeUpload : this.beforeUpload
          }, _prepareStyleProperties2.default.createElement("p", {
            className : "ant-upload-drag-icon"
          }, _prepareStyleProperties2.default.createElement(_suggestItem2.default, {
            type : "inbox"
          })), _prepareStyleProperties2.default.createElement("p", {
            className : "ant-upload-text"
          }, "Da click para seleccionar o arrastra tu archivo .pdf"), _prepareStyleProperties2.default.createElement("p", {
            className : "ant-upload-hint"
          }, "Tu archivo debe pesar menos de 10 MB."))))));
        }
      }]), Agent;
    }(_prepareStyleProperties.Component));
    var C = params.default.create({
      mapPropsToFields : function(respTodo) {
        return {
          props : respTodo
        };
      }
    })(realField);
    arg.default = C;
  },
  1139 : function(allegedI, arg, resolve) {
    /**
     * @param {!Object} obj
     * @return {?}
     */
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default : obj
      };
    }
    /**
     * @param {!AudioNode} instance
     * @param {!Function} Constructor
     * @return {undefined}
     */
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    /**
     * @param {string} self
     * @param {string} call
     * @return {?}
     */
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return !call || "object" != typeof call && "function" != typeof call ? self : call;
    }
    /**
     * @param {!Object} subClass
     * @param {!Object} superClass
     * @return {undefined}
     */
    function _inherits(subClass, superClass) {
      if ("function" != typeof superClass && null !== superClass) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      /** @type {!Object} */
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor : {
          value : subClass,
          enumerable : false,
          writable : true,
          configurable : true
        }
      });
      if (superClass) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(subClass, superClass);
        } else {
          /** @type {!Object} */
          subClass.__proto__ = superClass;
        }
      }
    }
    Object.defineProperty(arg, "__esModule", {
      value : true
    });
    var _AboutPage = (resolve(77), resolve(78));
    var _AboutPage2 = _interopRequireDefault(_AboutPage);
    var _suggestItem = (resolve(35), resolve(13));
    var _suggestItem2 = _interopRequireDefault(_suggestItem);
    var _deepAssign = (resolve(15), resolve(16));
    var _deepAssign2 = _interopRequireDefault(_deepAssign);
    var _UiIcon = (resolve(18), resolve(22));
    var _UiIcon2 = _interopRequireDefault(_UiIcon);
    var _classlist = (resolve(19), resolve(20));
    var params = _interopRequireDefault(_classlist);
    var _createClass = function() {
      /**
       * @param {!Function} d
       * @param {string} props
       * @return {undefined}
       */
      function e(d, props) {
        /** @type {number} */
        var i = 0;
        for (; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          /** @type {boolean} */
          descriptor.configurable = true;
          if ("value" in descriptor) {
            /** @type {boolean} */
            descriptor.writable = true;
          }
          Object.defineProperty(d, descriptor.key, descriptor);
        }
      }
      return function(t, n, a) {
        return n && e(t.prototype, n), a && e(t, a), t;
      };
    }();
    var _prepareStyleProperties = resolve(0);
    var _prepareStyleProperties2 = _interopRequireDefault(_prepareStyleProperties);
    var target = (resolve(11), resolve(12));
    var _normalizeDataUri = (_interopRequireDefault(target), resolve(1));
    var DropIndicator = (_interopRequireDefault(_normalizeDataUri), params.default.Item);
    var realField = (_UiIcon2.default.TextArea, function(_EventEmitter) {
      /**
       * @return {?}
       */
      function Agent() {
        var _Object$getPrototypeO;
        var i;
        var _this;
        var _ret;
        _classCallCheck(this, Agent);
        /** @type {number} */
        var _len8 = arguments.length;
        /** @type {!Array} */
        var args = Array(_len8);
        /** @type {number} */
        var _key8 = 0;
        for (; _key8 < _len8; _key8++) {
          args[_key8] = arguments[_key8];
        }
        return i = _this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Agent.__proto__ || Object.getPrototypeOf(Agent)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this.normFile = function(info) {
          return Array.isArray(info) ? info : info && info.fileList;
        }, _ret = i, _possibleConstructorReturn(_this, _ret);
      }
      return _inherits(Agent, _EventEmitter), _createClass(Agent, [{
        key : "beforeUpload",
        value : function(e) {
          /** @type {boolean} */
          var k = "application/pdf" === e.type;
          if (!k) {
            _deepAssign2.default.error("El archivo debe ser PDF!");
          }
          /** @type {boolean} */
          var d = e.size / 1024 / 1024 < 10;
          return d || _deepAssign2.default.error("El archivo debe tener un tama\u00f1o menor de 10 MB."), k && d;
        }
      }, {
        key : "render",
        value : function() {
          var RHSong = this.props.form.getFieldDecorator;
          var selectedEntity = this.props.proyecto;
          return _prepareStyleProperties2.default.createElement(params.default, {
            onSubmit : this.handleSubmit
          }, _prepareStyleProperties2.default.createElement("div", {
            className : "dropbox"
          }, _prepareStyleProperties2.default.createElement(DropIndicator, {
            label : "Seleccione su cronograma de actividades"
          }, RHSong("file_cronograma", {
            valuePropName : "fileList",
            getValueFromEvent : this.normFile,
            initialValue : selectedEntity.filename_cronograma ? [{
              uid : 1,
              name : "cronograma.pdf",
              status : "done",
              url : "/api/cronograma/pdf/" + selectedEntity.filename_cronograma
            }] : []
          })(_prepareStyleProperties2.default.createElement(_AboutPage2.default.Dragger, {
            name : "fileCronograma",
            action : "/api/alumno/cronograma/" + selectedEntity.id,
            beforeUpload : this.beforeUpload
          }, _prepareStyleProperties2.default.createElement("p", {
            className : "ant-upload-drag-icon"
          }, _prepareStyleProperties2.default.createElement(_suggestItem2.default, {
            type : "inbox"
          })), _prepareStyleProperties2.default.createElement("p", {
            className : "ant-upload-text"
          }, "Da click para seleccionar o arrastra tu archivo .pdf"), _prepareStyleProperties2.default.createElement("p", {
            className : "ant-upload-hint"
          }, "Tu archivo debe pesar menos de 10 MB."))))));
        }
      }]), Agent;
    }(_prepareStyleProperties.Component));
    var C = params.default.create({
      mapPropsToFields : function(respTodo) {
        return {
          props : respTodo
        };
      }
    })(realField);
    arg.default = C;
  },
  1140 : function(cond, t, __webpack_require__) {
    /**
     * @param {!Object} obj
     * @return {?}
     */
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default : obj
      };
    }
    /**
     * @param {!AudioNode} instance
     * @param {!Function} Constructor
     * @return {undefined}
     */
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    /**
     * @param {string} self
     * @param {string} call
     * @return {?}
     */
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return !call || "object" != typeof call && "function" != typeof call ? self : call;
    }
    /**
     * @param {!Object} subClass
     * @param {!Object} superClass
     * @return {undefined}
     */
    function _inherits(subClass, superClass) {
      if ("function" != typeof superClass && null !== superClass) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      /** @type {!Object} */
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor : {
          value : subClass,
          enumerable : false,
          writable : true,
          configurable : true
        }
      });
      if (superClass) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(subClass, superClass);
        } else {
          /** @type {!Object} */
          subClass.__proto__ = superClass;
        }
      }
    }
    Object.defineProperty(t, "__esModule", {
      value : true
    });
    var _suggestList = (__webpack_require__(33), __webpack_require__(34));
    var _suggestList2 = _interopRequireDefault(_suggestList);
    var _DraggableCore = (__webpack_require__(50), __webpack_require__(51));
    var _DraggableCore2 = _interopRequireDefault(_DraggableCore);
    var _deepAssign = (__webpack_require__(31), __webpack_require__(32));
    var _deepAssign2 = _interopRequireDefault(_deepAssign);
    var _normalizeDataUri = (__webpack_require__(48), __webpack_require__(49));
    var _normalizeDataUri2 = _interopRequireDefault(_normalizeDataUri);
    var _UiIcon = (__webpack_require__(156), __webpack_require__(157));
    var _UiIcon2 = _interopRequireDefault(_UiIcon);
    var _CalendarDay = (__webpack_require__(37), __webpack_require__(36));
    var _CalendarDay2 = _interopRequireDefault(_CalendarDay);
    var _suggestItem = (__webpack_require__(119), __webpack_require__(120));
    var _suggestItem2 = _interopRequireDefault(_suggestItem);
    var _AboutPage = (__webpack_require__(35), __webpack_require__(13));
    var _AboutPage2 = _interopRequireDefault(_AboutPage);
    var _AppDownload = (__webpack_require__(28), __webpack_require__(29));
    var _AppDownload2 = _interopRequireDefault(_AppDownload);
    var _createClass = function() {
      /**
       * @param {!Function} d
       * @param {string} props
       * @return {undefined}
       */
      function e(d, props) {
        /** @type {number} */
        var i = 0;
        for (; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          /** @type {boolean} */
          descriptor.configurable = true;
          if ("value" in descriptor) {
            /** @type {boolean} */
            descriptor.writable = true;
          }
          Object.defineProperty(d, descriptor.key, descriptor);
        }
      }
      return function(t, n, a) {
        return n && e(t.prototype, n), a && e(t, a), t;
      };
    }();
    var _prepareStyleProperties = __webpack_require__(0);
    var _prepareStyleProperties2 = _interopRequireDefault(_prepareStyleProperties);
    var _noframeworkWaypoints = __webpack_require__(1);
    var _noframeworkWaypoints2 = _interopRequireDefault(_noframeworkWaypoints);
    var _buildPageNumber = __webpack_require__(1141);
    var _buildPageNumber2 = _interopRequireDefault(_buildPageNumber);
    var _insertCss = __webpack_require__(45);
    var _insertCss2 = _interopRequireDefault(_insertCss);
    var offsetFromCenter = function(_EventEmitter) {
      /**
       * @param {?} data
       * @return {?}
       */
      function Agent(data) {
        _classCallCheck(this, Agent);
        var _this = _possibleConstructorReturn(this, (Agent.__proto__ || Object.getPrototypeOf(Agent)).call(this, data));
        return _this.showAddAsesoria = function() {
          _this.setState({
            visibleRegistrarAsesoria : true
          });
        }, _this.showTutorialSubirAsesoria = function() {
          _AppDownload2.default.info({
            width : 800,
            title : "Tutorial para subir y compartir archivos en google drive",
            content : _prepareStyleProperties2.default.createElement("div", null, _prepareStyleProperties2.default.createElement("video", {
              style : {
                width : "100%",
                marginTop : 10
              },
              controls : true,
              src : "/video/upload_drive.mp4"
            })),
            onOk : function() {
            }
          });
        }, _this.updateAsesorias = function() {
          _this.props.updateAsesorias();
        }, _this.showSolucionesRecomendadas = function(buildInTemplates) {
          _AppDownload2.default.info({
            width : 600,
            title : "Soluciones recomendadas en la asesor\u00eda",
            content : _prepareStyleProperties2.default.createElement("div", {
              style : {
                overflow : "scroll",
                height : 300
              }
            }, _prepareStyleProperties2.default.createElement(_suggestItem2.default, {
              style : {
                marginTop : 30,
                marginLeft : 30
              }
            }, buildInTemplates.map(function(selector, awsKey) {
              return _prepareStyleProperties2.default.createElement(_suggestItem2.default.Item, {
                key : awsKey,
                dot : selector.solucionado ? _prepareStyleProperties2.default.createElement(_AboutPage2.default, {
                  type : "check-circle-o"
                }) : _prepareStyleProperties2.default.createElement(_AboutPage2.default, {
                  type : "clock-circle-o",
                  style : {
                    fontSize : "16px"
                  }
                }),
                color : selector.solucionado ? "green" : "red"
              }, selector.solucion);
            }))),
            onOk : function() {
            }
          });
        }, _this.state = {
          proyecto : data.proyecto,
          visibleRegistrarAsesoria : false,
          usuario : data.usuario
        }, _this;
      }
      return _inherits(Agent, _EventEmitter), _createClass(Agent, [{
        key : "render",
        value : function() {
          var $mmaModLessonHelper = this;
          var that = this.state;
          var malakh = that.proyecto;
          var selected = that.visibleRegistrarAsesoria;
          /** @type {!Array} */
          var pivotColValues = (that.usuario, [{
            className : "center-text",
            title : "Fecha de asesor\u00eda",
            dataIndex : "fecha",
            key : "fecha"
          }, {
            className : "center-text",
            title : "Temas a asesorar",
            dataIndex : "temas_a_asesorar",
            key : "temas_a_asesorar"
          }, {
            className : "center-text",
            title : "Avance",
            dataIndex : "url_avance",
            key : "url_avance",
            render : function(notify, options) {
              return _prepareStyleProperties2.default.createElement("a", {
                href : options.url_avance,
                target : "_blank"
              }, "Avance ", _prepareStyleProperties2.default.createElement(_AboutPage2.default, {
                type : "file-pdf"
              }));
            }
          }, {
            className : "center-text",
            title : "Soluciones recomendadas",
            dataIndex : "soluciones_recomendadas",
            key : "soluciones_recomendadas",
            render : function(t, data) {
              return _prepareStyleProperties2.default.createElement("span", null, _prepareStyleProperties2.default.createElement(_UiIcon2.default, {
                count : data.soluciones_recomendadas.filter(function(animate_param) {
                  return console.log(animate_param), !animate_param.solucionado;
                }).length
              }, _prepareStyleProperties2.default.createElement(_CalendarDay2.default, {
                onClick : function() {
                  return $mmaModLessonHelper.showSolucionesRecomendadas(data.soluciones_recomendadas);
                }
              }, "Ver soluciones")));
            }
          }, {
            className : "center-text",
            title : "Tipo",
            dataIndex : "tipo",
            key : "tipo"
          }, {
            width : 300,
            className : "center-text",
            title : "Formato de asesor\u00eda",
            dataIndex : "formato_asesoria",
            key : "formato_asesoria",
            render : function(notify, timeout) {
              return _prepareStyleProperties2.default.createElement("span", null, timeout.asesoria.permitir_generar_formato ? _prepareStyleProperties2.default.createElement("a", {
                href : "/api/asesoria/" + timeout.asesoria.id + "/generar_formato/",
                target : "_blank"
              }, _prepareStyleProperties2.default.createElement(_CalendarDay2.default, {
                icon : "file-pdf",
                type : "primary"
              }, "Generar formato")) : _prepareStyleProperties2.default.createElement(_normalizeDataUri2.default, {
                message : "El asesor interno debe autorizar el formato",
                type : "warning",
                showIcon : true
              }));
            }
          }]);
          var dataSource2 = malakh.asesorias.map(function(main, canCreateDiscussions) {
            return {
              key : _insertCss2.default.v1(),
              fecha : (0, _noframeworkWaypoints2.default)(main.fecha, "YYYY-MM-DD").format("ll"),
              asesoria : main,
              temas_a_asesorar : main.temas_a_asesorar,
              url_avance : main.url_avance,
              soluciones_recomendadas : main.soluciones_recomendadas,
              tipo : main.tipo
            };
          });
          return _prepareStyleProperties2.default.createElement("div", null, _prepareStyleProperties2.default.createElement(_suggestList2.default, null, _prepareStyleProperties2.default.createElement(_deepAssign2.default, {
            xs : 24,
            lg : 24
          }, _prepareStyleProperties2.default.createElement(_CalendarDay2.default, {
            icon : "plus",
            type : "primary",
            onClick : this.showAddAsesoria
          }, "Agregar asesor\u00eda")), _prepareStyleProperties2.default.createElement(_deepAssign2.default, {
            xs : 24,
            lg : 24,
            style : {
              marginTop : 10
            }
          }, _prepareStyleProperties2.default.createElement(_CalendarDay2.default, {
            icon : "video-camera",
            onClick : this.showTutorialSubirAsesoria
          }, "Tutorial para subir archivos y compartir en drive")), _prepareStyleProperties2.default.createElement(_deepAssign2.default, {
            xs : 24,
            lg : 24
          }, _prepareStyleProperties2.default.createElement(_DraggableCore2.default, {
            title : function() {
              return "Lista de asesor\u00edas registradas";
            },
            columns : pivotColValues,
            dataSource : dataSource2,
            pagination : {
              pageSize : 5
            },
            scroll : {
              x : 1200
            }
          }))), _prepareStyleProperties2.default.createElement(_buildPageNumber2.default, {
            updateAsesorias : this.updateAsesorias.bind(this),
            proyecto : malakh,
            visible : selected
          }));
        }
      }]), Agent;
    }(_prepareStyleProperties.Component);
    t.default = offsetFromCenter;
  },
  1141 : function(cond, t, __webpack_require__) {
    /**
     * @param {!Object} obj
     * @return {?}
     */
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default : obj
      };
    }
    /**
     * @param {!AudioNode} instance
     * @param {!Function} Constructor
     * @return {undefined}
     */
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    /**
     * @param {string} self
     * @param {string} call
     * @return {?}
     */
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return !call || "object" != typeof call && "function" != typeof call ? self : call;
    }
    /**
     * @param {!Object} subClass
     * @param {!Object} superClass
     * @return {undefined}
     */
    function _inherits(subClass, superClass) {
      if ("function" != typeof superClass && null !== superClass) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      /** @type {!Object} */
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor : {
          value : subClass,
          enumerable : false,
          writable : true,
          configurable : true
        }
      });
      if (superClass) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(subClass, superClass);
        } else {
          /** @type {!Object} */
          subClass.__proto__ = superClass;
        }
      }
    }
    Object.defineProperty(t, "__esModule", {
      value : true
    });
    var _deepAssign = (__webpack_require__(15), __webpack_require__(16));
    var _deepAssign2 = _interopRequireDefault(_deepAssign);
    var _suggestList = (__webpack_require__(28), __webpack_require__(29));
    var _suggestList2 = _interopRequireDefault(_suggestList);
    var _DraggableCore = (__webpack_require__(153), __webpack_require__(154));
    var _DraggableCore2 = _interopRequireDefault(_DraggableCore);
    var _normalizeDataUri = (__webpack_require__(87), __webpack_require__(74));
    var _normalizeDataUri2 = _interopRequireDefault(_normalizeDataUri);
    var _UiIcon = (__webpack_require__(35), __webpack_require__(13));
    var _UiIcon2 = _interopRequireDefault(_UiIcon);
    var _classlist = (__webpack_require__(88), __webpack_require__(89));
    var _classlist2 = _interopRequireDefault(_classlist);
    var _AboutPage = (__webpack_require__(24), __webpack_require__(25));
    var _AboutPage2 = _interopRequireDefault(_AboutPage);
    var _suggestItem = (__webpack_require__(18), __webpack_require__(22));
    var _suggestItem2 = _interopRequireDefault(_suggestItem);
    var _AppDownload = (__webpack_require__(19), __webpack_require__(20));
    var _AppDownload2 = _interopRequireDefault(_AppDownload);
    var _createClass = function() {
      /**
       * @param {!Function} d
       * @param {string} props
       * @return {undefined}
       */
      function e(d, props) {
        /** @type {number} */
        var i = 0;
        for (; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          /** @type {boolean} */
          descriptor.configurable = true;
          if ("value" in descriptor) {
            /** @type {boolean} */
            descriptor.writable = true;
          }
          Object.defineProperty(d, descriptor.key, descriptor);
        }
      }
      return function(t, n, a) {
        return n && e(t.prototype, n), a && e(t, a), t;
      };
    }();
    var _prepareStyleProperties = __webpack_require__(0);
    var _prepareStyleProperties2 = _interopRequireDefault(_prepareStyleProperties);
    var _Trans = (__webpack_require__(11), __webpack_require__(12));
    var _Trans2 = _interopRequireDefault(_Trans);
    var _noframeworkWaypoints = __webpack_require__(1);
    var _noframeworkWaypoints2 = _interopRequireDefault(_noframeworkWaypoints);
    var Route = _AppDownload2.default.Item;
    var DropIndicator = (_suggestItem2.default.Group, _AboutPage2.default.Option, _classlist2.default.TabPane, _AppDownload2.default.create()(function(options) {
      var visible = options.visible;
      var onCancel = options.onCancel;
      var onCreate = options.onCreate;
      var root = options.form;
      var lint = (options.carrera, options.alumnos_rechazados, options.addToPeriodo, root.getFieldDecorator);
      return _prepareStyleProperties2.default.createElement(_suggestList2.default, {
        visible : visible,
        title : "Registrar asesor\u00eda",
        okText : "Guardar",
        onCancel : onCancel,
        onOk : onCreate,
        width : 600
      }, _prepareStyleProperties2.default.createElement(_AppDownload2.default, {
        layout : "vertical"
      }, _prepareStyleProperties2.default.createElement(Route, {
        label : _prepareStyleProperties2.default.createElement("span", null, "Fecha de asesor\u00eda\u00a0", _prepareStyleProperties2.default.createElement(_normalizeDataUri2.default, {
          title : "La fecha de asesor\u00eda tiene 3 dias habiles."
        }, _prepareStyleProperties2.default.createElement(_UiIcon2.default, {
          type : "question-circle-o"
        })))
      }, lint("fecha", {
        rules : [{
          required : true,
          message : "La fecha de asesor\u00eda es obligatoria."
        }]
      })(_prepareStyleProperties2.default.createElement(_DraggableCore2.default, {
        format : "ll",
        disabledDate : function(destTimezone) {
          return (0, _noframeworkWaypoints2.default)(destTimezone).format("YYYY-MM-DD") < (0, _noframeworkWaypoints2.default)().format("YYYY-MM-DD") || (0, _noframeworkWaypoints2.default)(destTimezone).format("YYYY-MM-DD") > (0, _noframeworkWaypoints2.default)().add(3, "days").format("YYYY-MM-DD");
        }
      }))), _prepareStyleProperties2.default.createElement(Route, {
        label : "Temas a asesorar"
      }, lint("temas_a_asesorar", {
        rules : [{
          required : true,
          message : "Los temas a asesorar son obligatorios."
        }, {
          min : 5,
          message : "El minimo de caracteres es 5."
        }, {
          max : 500,
          message : "El maximo de caracteres es 500."
        }]
      })(_prepareStyleProperties2.default.createElement(_suggestItem2.default.TextArea, {
        placeholder : "Describa los temas a asesorar",
        rows : 4
      }))), _prepareStyleProperties2.default.createElement(Route, {
        label : "URL del avance de google drive"
      }, lint("url_avance", {
        rules : [{
          required : true,
          message : "El url del archivo es necesario para la revisi\u00f3n."
        }, {
          pattern : "^https://drive.google.com/.*$",
          message : "La URL esta mal formada ejemplo: https://drive.google.com/open?id=0B-agd1bGfOTYcHZNWmtFZ1BINzQ"
        }]
      })(_prepareStyleProperties2.default.createElement(_suggestItem2.default, {
        prefix : _prepareStyleProperties2.default.createElement(_UiIcon2.default, {
          type : "global",
          style : {
            fontSize : 13
          }
        }),
        placeholder : "URL del sitio donde esta almacenado el archivo del avance ejemplo: https://drive.google.com/open?id=0B-agd1bGfOTYcHZNWmtFZ1BINzQ"
      })))));
    }));
    var offsetFromCenter = function(_EventEmitter) {
      /**
       * @param {!Object} element
       * @return {?}
       */
      function Agent(element) {
        _classCallCheck(this, Agent);
        var $scope = _possibleConstructorReturn(this, (Agent.__proto__ || Object.getPrototypeOf(Agent)).call(this, element));
        return $scope.showModal = function() {
          $scope.setState({
            visible : true
          });
        }, $scope.handleCancel = function() {
          $scope.form.resetFields();
          $scope.setState({
            visible : false
          });
        }, $scope.handleCreate = function() {
          var wunderlist_list = $scope.state.proyecto;
          var form = $scope.form;
          form.validateFields(function(n, main) {
            if (!n) {
              _Trans2.default.post("/api/proyecto/asesoria", {
                id_proyecto : wunderlist_list.id,
                id_asesor_interno : wunderlist_list.anteproyecto.id_asesor_interno,
                fecha : main.fecha,
                url_avance : main.url_avance,
                temas_a_asesorar : main.temas_a_asesorar
              }).then(function(getFilesReply) {
                if (200 === getFilesReply.status) {
                  _deepAssign2.default.success("Asesor\u00eda registrada satisfactoriamente");
                  $scope.setState({
                    visible : false
                  });
                  form.resetFields();
                  $scope.props.updateAsesorias();
                } else {
                  _suggestList2.default.error({
                    title : "Error al registrar asesor\u00eda. Revisar los siguientes campos",
                    content : _prepareStyleProperties2.default.createElement("div", null, getFilesReply.data.errores),
                    onOk : function() {
                    }
                  });
                }
              }).catch(function(mnemonics) {
                _deepAssign2.default.error(mnemonics);
              });
            }
          });
        }, $scope.saveFormRef = function(data) {
          /** @type {!Object} */
          $scope.form = data;
        }, $scope.state = {
          visible : element.visible,
          proyecto : element.proyecto
        }, $scope;
      }
      return _inherits(Agent, _EventEmitter), _createClass(Agent, [{
        key : "componentWillReceiveProps",
        value : function(_ref) {
          var visible = _ref.visible;
          var _ref$mapStateToPropsF = _ref.proyecto;
          _ref.usuario;
          this.setState({
            visible : visible,
            proyecto : _ref$mapStateToPropsF
          });
        }
      }, {
        key : "render",
        value : function() {
          return _prepareStyleProperties2.default.createElement("div", null, _prepareStyleProperties2.default.createElement(DropIndicator, {
            ref : this.saveFormRef,
            visible : this.state.visible,
            onCancel : this.handleCancel,
            onCreate : this.handleCreate
          }));
        }
      }]), Agent;
    }(_prepareStyleProperties.Component);
    t.default = offsetFromCenter;
  },
  1142 : function(cond, t, __webpack_require__) {
    /**
     * @param {!Object} obj
     * @return {?}
     */
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default : obj
      };
    }
    /**
     * @param {!AudioNode} instance
     * @param {!Function} Constructor
     * @return {undefined}
     */
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    /**
     * @param {string} self
     * @param {string} call
     * @return {?}
     */
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return !call || "object" != typeof call && "function" != typeof call ? self : call;
    }
    /**
     * @param {!Object} subClass
     * @param {!Object} superClass
     * @return {undefined}
     */
    function _inherits(subClass, superClass) {
      if ("function" != typeof superClass && null !== superClass) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      /** @type {!Object} */
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor : {
          value : subClass,
          enumerable : false,
          writable : true,
          configurable : true
        }
      });
      if (superClass) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(subClass, superClass);
        } else {
          /** @type {!Object} */
          subClass.__proto__ = superClass;
        }
      }
    }
    Object.defineProperty(t, "__esModule", {
      value : true
    });
    var _suggestList = (__webpack_require__(33), __webpack_require__(34));
    var _suggestList2 = _interopRequireDefault(_suggestList);
    var _DraggableCore = (__webpack_require__(31), __webpack_require__(32));
    var _DraggableCore2 = _interopRequireDefault(_DraggableCore);
    var _deepAssign = (__webpack_require__(35), __webpack_require__(13));
    var _deepAssign2 = _interopRequireDefault(_deepAssign);
    var _UiIcon = (__webpack_require__(48), __webpack_require__(49));
    var _UiIcon2 = _interopRequireDefault(_UiIcon);
    var _suggestItem = (__webpack_require__(88), __webpack_require__(89));
    var _suggestItem2 = _interopRequireDefault(_suggestItem);
    var _createClass = function() {
      /**
       * @param {!Function} d
       * @param {string} props
       * @return {undefined}
       */
      function e(d, props) {
        /** @type {number} */
        var i = 0;
        for (; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          /** @type {boolean} */
          descriptor.configurable = true;
          if ("value" in descriptor) {
            /** @type {boolean} */
            descriptor.writable = true;
          }
          Object.defineProperty(d, descriptor.key, descriptor);
        }
      }
      return function(t, n, a) {
        return n && e(t.prototype, n), a && e(t, a), t;
      };
    }();
    var _prepareStyleProperties = __webpack_require__(0);
    var _prepareStyleProperties2 = _interopRequireDefault(_prepareStyleProperties);
    var _normalizeDataUri = __webpack_require__(45);
    var _AboutPage = (_interopRequireDefault(_normalizeDataUri), __webpack_require__(1));
    var _AboutPage2 = _interopRequireDefault(_AboutPage);
    var _CalendarDay = __webpack_require__(1143);
    var _CalendarDay2 = _interopRequireDefault(_CalendarDay);
    var _CalendarEvent = __webpack_require__(1144);
    var _CalendarEvent2 = _interopRequireDefault(_CalendarEvent);
    var ResultsTableComponent = _suggestItem2.default.TabPane;
    var __WEBPACK_IMPORTED_MODULE_1__internals__ = __webpack_require__(1149);
    var offsetFromCenter = function(_EventEmitter) {
      /**
       * @param {?} data
       * @return {?}
       */
      function Agent(data) {
        _classCallCheck(this, Agent);
        var _this = _possibleConstructorReturn(this, (Agent.__proto__ || Object.getPrototypeOf(Agent)).call(this, data));
        return _this.onChangeSeguimiento = function(oldId) {
          var filteredView = _this.state.seguimientos;
          var date = (0, _AboutPage2.default)().format("YYYY-MM-DD");
          if ("seguimiento_final" === oldId) {
            var r = filteredView[0][0].proyecto.anteproyecto.periodo;
            if (date >= (0, _AboutPage2.default)(r.fecha_fin, "YYYY-MM-DD").subtract(__WEBPACK_IMPORTED_MODULE_1__internals__.periodo_residencia.dias_habiles_seguimiento_final, "days").format("YYYY-MM-DD") && date <= (0, _AboutPage2.default)(r.fecha_fin, "YYYY-MM-DD").add(__WEBPACK_IMPORTED_MODULE_1__internals__.periodo_residencia.dias_habiles_seguimiento_final, "days").format("YYYY-MM-DD")) {
              _this.setState({
                renderSeguimiento : _prepareStyleProperties2.default.createElement(_CalendarEvent2.default, {
                  proyecto : filteredView[0][0].proyecto
                })
              });
            } else {
              _this.setState({
                renderSeguimiento : _prepareStyleProperties2.default.createElement(_UiIcon2.default, {
                  message : "El seguimiento final no esta disponible,\n Fecha inicial: " + (0, _AboutPage2.default)(r.fecha_fin, "YYYY-MM-DD").subtract(__WEBPACK_IMPORTED_MODULE_1__internals__.periodo_residencia.dias_habiles_seguimiento_final, "days").format("LL") + " - Fecha final: " + (0, _AboutPage2.default)(r.fecha_fin, "YYYY-MM-DD").add(__WEBPACK_IMPORTED_MODULE_1__internals__.periodo_residencia.dias_habiles_seguimiento_final, "days").format("LL"),
                  type : "warning",
                  showIcon : true
                })
              });
            }
          } else {
            var o = filteredView.find(function(addedJob) {
              return addedJob[0].id == oldId;
            })[0];
            if (date >= o.seguimiento.fecha_inicial && date <= o.seguimiento.fecha_final) {
              _this.setState({
                renderSeguimiento : _prepareStyleProperties2.default.createElement(_CalendarDay2.default, {
                  seguimiento : o
                })
              });
            } else {
              _this.setState({
                renderSeguimiento : _prepareStyleProperties2.default.createElement(_UiIcon2.default, {
                  message : "No puede acceder al seguimiento,\n Fecha inicial: " + (0, _AboutPage2.default)(o.seguimiento.fecha_inicial, "YYYY-MM-DD").format("LL") + " - Fecha final: " + (0, _AboutPage2.default)(o.seguimiento.fecha_final, "YYYY-MM-DD").format("LL"),
                  type : "warning",
                  showIcon : true
                })
              });
            }
          }
        }, _this.state = {
          seguimientos : data.seguimientos,
          renderSeguimiento : null
        }, _this;
      }
      return _inherits(Agent, _EventEmitter), _createClass(Agent, [{
        key : "componentWillReceiveProps",
        value : function(recB) {
          this.setState({
            seguimientos : recB.seguimientos,
            renderSeguimiento : null
          });
        }
      }, {
        key : "render",
        value : function() {
          var contentTypeRef = this;
          var thisState = this.state;
          var navLinksArr = thisState.seguimientos;
          var yearRangeNodes = thisState.renderSeguimiento;
          return _prepareStyleProperties2.default.createElement("div", null, _prepareStyleProperties2.default.createElement(_suggestList2.default, null, _prepareStyleProperties2.default.createElement(_DraggableCore2.default, {
            xs : 24,
            lg : 4
          }, _prepareStyleProperties2.default.createElement(_suggestItem2.default, {
            defaultActiveKey : "-1",
            tabPosition : "left",
            onChange : function(oldId) {
              return contentTypeRef.onChangeSeguimiento(oldId);
            }
          }, navLinksArr.map(function(addedJob, canCreateDiscussions) {
            return console.log("key", addedJob[0].id), _prepareStyleProperties2.default.createElement(ResultsTableComponent, {
              tab : _prepareStyleProperties2.default.createElement("span", null, _prepareStyleProperties2.default.createElement(_deepAssign2.default, {
                type : "schedule"
              }), "Seguimiento " + (canCreateDiscussions + 1)),
              key : addedJob[0].id
            });
          }), _prepareStyleProperties2.default.createElement(ResultsTableComponent, {
            tab : _prepareStyleProperties2.default.createElement("span", null, _prepareStyleProperties2.default.createElement(_deepAssign2.default, {
              type : "schedule"
            }), "Seguimiento final"),
            key : "seguimiento_final"
          }))), _prepareStyleProperties2.default.createElement(_DraggableCore2.default, {
            xs : 24,
            lg : 20
          }, yearRangeNodes)));
        }
      }]), Agent;
    }(_prepareStyleProperties.Component);
    t.default = offsetFromCenter;
  },
  1143 : function(module, exports, __webpack_require__) {
    /**
     * @param {!Object} obj
     * @return {?}
     */
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default : obj
      };
    }
    /**
     * @param {!AudioNode} instance
     * @param {!Function} Constructor
     * @return {undefined}
     */
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    /**
     * @param {string} self
     * @param {string} call
     * @return {?}
     */
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return !call || "object" != typeof call && "function" != typeof call ? self : call;
    }
    /**
     * @param {!Object} subClass
     * @param {!Object} superClass
     * @return {undefined}
     */
    function _inherits(subClass, superClass) {
      if ("function" != typeof superClass && null !== superClass) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      /** @type {!Object} */
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor : {
          value : subClass,
          enumerable : false,
          writable : true,
          configurable : true
        }
      });
      if (superClass) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(subClass, superClass);
        } else {
          /** @type {!Object} */
          subClass.__proto__ = superClass;
        }
      }
    }
    Object.defineProperty(exports, "__esModule", {
      value : true
    });
    var _DraggableCore = (__webpack_require__(156), __webpack_require__(157));
    var _DraggableCore2 = _interopRequireDefault(_DraggableCore);
    var _normalizeDataUri = (__webpack_require__(48), __webpack_require__(49));
    var _normalizeDataUri2 = _interopRequireDefault(_normalizeDataUri);
    var _UiIcon = (__webpack_require__(37), __webpack_require__(36));
    var _UiIcon2 = _interopRequireDefault(_UiIcon);
    var _CalendarDay = (__webpack_require__(35), __webpack_require__(13));
    var _CalendarDay2 = _interopRequireDefault(_CalendarDay);
    var _deepAssign = (__webpack_require__(15), __webpack_require__(16));
    var _deepAssign2 = _interopRequireDefault(_deepAssign);
    var _suggestList = (__webpack_require__(230), __webpack_require__(231));
    var _suggestList2 = _interopRequireDefault(_suggestList);
    var _suggestItem = (__webpack_require__(18), __webpack_require__(22));
    var _suggestItem2 = _interopRequireDefault(_suggestItem);
    var _AboutPage = (__webpack_require__(19), __webpack_require__(20));
    var _AboutPage2 = _interopRequireDefault(_AboutPage);
    var _createClass = function() {
      /**
       * @param {!Function} d
       * @param {string} props
       * @return {undefined}
       */
      function e(d, props) {
        /** @type {number} */
        var i = 0;
        for (; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          /** @type {boolean} */
          descriptor.configurable = true;
          if ("value" in descriptor) {
            /** @type {boolean} */
            descriptor.writable = true;
          }
          Object.defineProperty(d, descriptor.key, descriptor);
        }
      }
      return function(t, n, a) {
        return n && e(t.prototype, n), a && e(t, a), t;
      };
    }();
    var _prepareStyleProperties = __webpack_require__(0);
    var _prepareStyleProperties2 = _interopRequireDefault(_prepareStyleProperties);
    var _AppDownload = (__webpack_require__(11), __webpack_require__(12));
    var _AppDownload2 = _interopRequireDefault(_AppDownload);
    var _buildPageNumber = __webpack_require__(1);
    var _buildPageNumber2 = _interopRequireDefault(_buildPageNumber);
    var data = _AboutPage2.default.Item;
    var FormioElement = (_suggestItem2.default.TextArea, _suggestList2.default.Panel);
    var REkey = function(_EventEmitter) {
      /**
       * @return {?}
       */
      function Agent() {
        var _Object$getPrototypeO;
        var i;
        var _this;
        var _ret;
        _classCallCheck(this, Agent);
        /** @type {number} */
        var _len8 = arguments.length;
        /** @type {!Array} */
        var args = Array(_len8);
        /** @type {number} */
        var _key8 = 0;
        for (; _key8 < _len8; _key8++) {
          args[_key8] = arguments[_key8];
        }
        return i = _this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Agent.__proto__ || Object.getPrototypeOf(Agent)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this.handleSubmit = function(event) {
          event.preventDefault();
          _this.props.form.validateFields(function(isSlidingUp, canCreateDiscussions) {
            if (!isSlidingUp) {
              _AppDownload2.default.put("/api/proyecto/seguimiento", {
                id_seguimiento : _this.props.seguimiento.id,
                url_seguimiento : canCreateDiscussions.url_seguimiento
              }).then(function(testsStatus) {
                if (200 === testsStatus.status) {
                  _deepAssign2.default.success("Seguimiento actualizado satisfactoriamente");
                } else {
                  _deepAssign2.default.error("Error al actualizar al seguimiento, favor de reportar al administrador.");
                }
              });
            }
          });
        }, _ret = i, _possibleConstructorReturn(_this, _ret);
      }
      return _inherits(Agent, _EventEmitter), _createClass(Agent, [{
        key : "render",
        value : function() {
          var callback = this.props.form.getFieldDecorator;
          var model = this.props.seguimiento;
          var css = {
            background : "#f4f8f9",
            borderRadius : 10,
            marginBottom : 24,
            border : 0,
            overflow : "hidden"
          };
          return _prepareStyleProperties2.default.createElement("div", null, _prepareStyleProperties2.default.createElement(_AboutPage2.default, {
            onSubmit : this.handleSubmit
          }, _prepareStyleProperties2.default.createElement("div", {
            className : "dropbox"
          }, _prepareStyleProperties2.default.createElement(data, {
            label : "URL del seguimiento en google drive"
          }, callback("url_seguimiento", {
            rules : [{
              required : true,
              message : "El url del archivo es necesario para la revisi\u00f3n."
            }, {
              pattern : "^https://drive.google.com/[^\\s]*$",
              message : "La URL esta mal formada ejemplo: https://drive.google.com/open?id=0B-agd1bGfOTYcHZNWmtFZ1BINzQ"
            }]
          })(_prepareStyleProperties2.default.createElement(_suggestItem2.default, {
            prefix : _prepareStyleProperties2.default.createElement(_CalendarDay2.default, {
              type : "global",
              style : {
                fontSize : 13
              }
            }),
            addonAfter : model.url_seguimiento ? _prepareStyleProperties2.default.createElement("a", {
              href : model.url_seguimiento ? model.url_seguimiento : "#",
              target : "_blank"
            }, _prepareStyleProperties2.default.createElement(_CalendarDay2.default, {
              type : "cloud"
            }), "Ver seguimiento") : null,
            placeholder : "URL del sitio donde esta almacenado el archivo del seguimiento ejemplo: https://drive.google.com/open?id=0B-agd1bGfOTYcHZNWmtFZ1BINzQ"
          }))), _prepareStyleProperties2.default.createElement(_UiIcon2.default, {
            type : "primary",
            htmlType : "submit"
          }, "Actualizar"))), "2015-2016" === model.proyecto.anteproyecto.alumno.plan_estudios && _prepareStyleProperties2.default.createElement("div", null, _prepareStyleProperties2.default.createElement("h3", {
            className : "border-top",
            style : {
              marginTop : 20
            }
          }, "Evaluaci\u00f3n"), null !== model.id_evaluacion_asesor_interno & null !== model.id_evaluacion_asesor_externo ? _prepareStyleProperties2.default.createElement("a", {
            target : "_blank",
            href : "/api/proyecto/" + model.id + "/formato_evaluacion/anexoXXIX"
          }, _prepareStyleProperties2.default.createElement(_UiIcon2.default, {
            type : "primary",
            icon : "file-pdf"
          }, "Generar formato de evaluaci\u00f3n")) : _prepareStyleProperties2.default.createElement(_normalizeDataUri2.default, {
            message : (null === model.id_evaluacion_asesor_interno ? "El asesor interno no ha realizado la evaluaci\u00f3n" : "") + "\n" + (null === model.id_evaluacion_asesor_externo ? ", El asesor externo no ha realizado la evaluaci\u00f3n" : ""),
            type : "warning",
            showIcon : true
          })), _prepareStyleProperties2.default.createElement("h3", {
            className : "border-top",
            style : {
              marginTop : 20
            }
          }, "Observaciones"), _prepareStyleProperties2.default.createElement("div", {
            style : {
              overflowY : "scroll",
              height : 300
            }
          }, _prepareStyleProperties2.default.createElement(_suggestList2.default, {
            bordered : false
          }, model.revisiones_seguimiento.map(function(selector, awsKey) {
            return _prepareStyleProperties2.default.createElement(FormioElement, {
              header : _prepareStyleProperties2.default.createElement("div", null, selector.solucionado ? _prepareStyleProperties2.default.createElement(_DraggableCore2.default, {
                status : "success",
                text : "Fecha: " + (0, _buildPageNumber2.default)(selector.createdAt).utc().format("LL") + " - Revisi\u00f3n por: " + selector.docente.titulo + " " + selector.docente.nombre + " " + selector.docente.ap_paterno + " " + selector.docente.ap_materno
              }) : _prepareStyleProperties2.default.createElement(_DraggableCore2.default, {
                text : "Fecha: " + (0, _buildPageNumber2.default)(selector.createdAt).utc().format("LL") + " - Revisi\u00f3n por: " + selector.docente.titulo + " " + selector.docente.nombre + " " + selector.docente.ap_paterno + " " + selector.docente.ap_materno,
                status : "processing"
              })),
              key : awsKey,
              style : css
            }, _prepareStyleProperties2.default.createElement("h3", null, "Observaci\u00f3n: "), _prepareStyleProperties2.default.createElement("p", null, selector.observacion));
          }))));
        }
      }]), Agent;
    }(_prepareStyleProperties.Component);
    var value = _AboutPage2.default.create({
      mapPropsToFields : function(respTodo) {
        return {
          props : respTodo
        };
      }
    })(REkey);
    exports.default = value;
  },
  1144 : function(module, exports, __webpack_require__) {
    /**
     * @param {!Object} obj
     * @return {?}
     */
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default : obj
      };
    }
    /**
     * @param {!AudioNode} instance
     * @param {!Function} Constructor
     * @return {undefined}
     */
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    /**
     * @param {string} self
     * @param {string} call
     * @return {?}
     */
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return !call || "object" != typeof call && "function" != typeof call ? self : call;
    }
    /**
     * @param {!Object} subClass
     * @param {!Object} superClass
     * @return {undefined}
     */
    function _inherits(subClass, superClass) {
      if ("function" != typeof superClass && null !== superClass) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      /** @type {!Object} */
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor : {
          value : subClass,
          enumerable : false,
          writable : true,
          configurable : true
        }
      });
      if (superClass) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(subClass, superClass);
        } else {
          /** @type {!Object} */
          subClass.__proto__ = superClass;
        }
      }
    }
    Object.defineProperty(exports, "__esModule", {
      value : true
    });
    var _DraggableCore = (__webpack_require__(48), __webpack_require__(49));
    var _DraggableCore2 = _interopRequireDefault(_DraggableCore);
    var _UiIcon = (__webpack_require__(33), __webpack_require__(34));
    var _UiIcon2 = _interopRequireDefault(_UiIcon);
    var _CalendarDay = (__webpack_require__(31), __webpack_require__(32));
    var _CalendarDay2 = _interopRequireDefault(_CalendarDay);
    var _AboutPage = (__webpack_require__(37), __webpack_require__(36));
    var _AboutPage2 = _interopRequireDefault(_AboutPage);
    var _AppDownload = (__webpack_require__(35), __webpack_require__(13));
    var _AppDownload2 = _interopRequireDefault(_AppDownload);
    var _deepAssign = (__webpack_require__(15), __webpack_require__(16));
    var _deepAssign2 = _interopRequireDefault(_deepAssign);
    var _suggestList = (__webpack_require__(1145), __webpack_require__(1148));
    var _suggestList2 = _interopRequireDefault(_suggestList);
    var _buildPageNumber = (__webpack_require__(230), __webpack_require__(231));
    var _buildPageNumber2 = _interopRequireDefault(_buildPageNumber);
    var _suggestItem = (__webpack_require__(18), __webpack_require__(22));
    var _suggestItem2 = _interopRequireDefault(_suggestItem);
    var _toHyphenCase = (__webpack_require__(19), __webpack_require__(20));
    var params = _interopRequireDefault(_toHyphenCase);
    var _createClass = function() {
      /**
       * @param {!Function} d
       * @param {string} props
       * @return {undefined}
       */
      function e(d, props) {
        /** @type {number} */
        var i = 0;
        for (; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          /** @type {boolean} */
          descriptor.configurable = true;
          if ("value" in descriptor) {
            /** @type {boolean} */
            descriptor.writable = true;
          }
          Object.defineProperty(d, descriptor.key, descriptor);
        }
      }
      return function(t, n, a) {
        return n && e(t.prototype, n), a && e(t, a), t;
      };
    }();
    var _normalizeDataUri = __webpack_require__(0);
    var _normalizeDataUri2 = _interopRequireDefault(_normalizeDataUri);
    var _noframeworkWaypoints = (__webpack_require__(11), __webpack_require__(12));
    var _noframeworkWaypoints2 = _interopRequireDefault(_noframeworkWaypoints);
    var _prepareStyleProperties = __webpack_require__(1);
    var DropIndicator = (_interopRequireDefault(_prepareStyleProperties), params.default.Item);
    var AnimatedIcon = (_suggestItem2.default.TextArea, _buildPageNumber2.default.Panel, _suggestList2.default.TreeNode);
    var item = function(_EventEmitter) {
      /**
       * @return {?}
       */
      function Agent() {
        var _Object$getPrototypeO;
        var i;
        var _this;
        var _ret;
        _classCallCheck(this, Agent);
        /** @type {number} */
        var _len8 = arguments.length;
        /** @type {!Array} */
        var args = Array(_len8);
        /** @type {number} */
        var _key8 = 0;
        for (; _key8 < _len8; _key8++) {
          args[_key8] = arguments[_key8];
        }
        return i = _this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Agent.__proto__ || Object.getPrototypeOf(Agent)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this.handleSubmit = function(event) {
          event.preventDefault();
          _this.props.form.validateFields(function(canCreateDiscussions, contextReference) {
            if (!canCreateDiscussions) {
              console.log("Received values of form: ", contextReference);
              _noframeworkWaypoints2.default.put("/api/proyecto/informe_tecnico", {
                id_proyecto : _this.props.proyecto.id,
                url_informe_tecnico : contextReference.url_informe_tecnico
              }).then(function(testsStatus) {
                if (200 === testsStatus.status) {
                  _deepAssign2.default.success("Informe t\u00e9cnico actualizado satisfactoriamente");
                } else {
                  _deepAssign2.default.error("Error al actualizar al informe t\u00e9cnico, favor de reportar al administrador.");
                }
              });
            }
          });
        }, _ret = i, _possibleConstructorReturn(_this, _ret);
      }
      return _inherits(Agent, _EventEmitter), _createClass(Agent, [{
        key : "render",
        value : function() {
          var callback = this.props.form.getFieldDecorator;
          var model = this.props.proyecto;
          return _normalizeDataUri2.default.createElement("div", null, _normalizeDataUri2.default.createElement(_UiIcon2.default, {
            gutter : 16
          }, _normalizeDataUri2.default.createElement(_CalendarDay2.default, {
            xs : 24,
            lg : 12
          }, _normalizeDataUri2.default.createElement(params.default, {
            onSubmit : this.handleSubmit
          }, _normalizeDataUri2.default.createElement(DropIndicator, {
            label : "URL del informe t\u00e9cnico en google drive"
          }, callback("url_informe_tecnico", {
            rules : [{
              required : true,
              message : "El url del archivo es necesario para la revisi\u00f3n."
            }, {
              pattern : "^https://drive.google.com/[^\\s]*$",
              message : "La URL esta mal formada ejemplo: https://drive.google.com/open?id=0B-agd1bGfOTYcHZNWmtFZ1BINzQ"
            }]
          })(_normalizeDataUri2.default.createElement(_suggestItem2.default, {
            prefix : _normalizeDataUri2.default.createElement(_AppDownload2.default, {
              type : "global",
              style : {
                fontSize : 13
              }
            }),
            placeholder : "URL del sitio donde esta almacenado el archivo del seguimiento ejemplo: https://drive.google.com/open?id=0B-agd1bGfOTYcHZNWmtFZ1BINzQ",
            addonAfter : model.url_informe_tecnico ? _normalizeDataUri2.default.createElement("a", {
              href : model.url_informe_tecnico ? model.url_informe_tecnico : "#",
              target : "_blank"
            }, _normalizeDataUri2.default.createElement(_AppDownload2.default, {
              type : "cloud"
            }), "Ver informe t\u00e9cnico") : null
          }))), _normalizeDataUri2.default.createElement(_AboutPage2.default, {
            type : "primary",
            htmlType : "submit"
          }, "Actualizar"))), _normalizeDataUri2.default.createElement(_CalendarDay2.default, {
            xs : 24,
            lg : 12
          }, _normalizeDataUri2.default.createElement("h3", null, "Estructura del informe t\u00e9cnico"), _normalizeDataUri2.default.createElement(_suggestList2.default, {
            showLine : true
          }, _normalizeDataUri2.default.createElement(AnimatedIcon, {
            title : "Informe t\u00e9cnico",
            key : "0"
          }, _normalizeDataUri2.default.createElement(AnimatedIcon, {
            title : "Portada",
            key : "1"
          }, _normalizeDataUri2.default.createElement(AnimatedIcon, {
            title : "Periodo de residencia",
            key : "1-0"
          }), _normalizeDataUri2.default.createElement(AnimatedIcon, {
            title : "Nombre de proyecto",
            key : "1-1"
          })))))), _normalizeDataUri2.default.createElement(_UiIcon2.default, {
            gutter : 20,
            style : {
              marginTop : 30
            }
          }, _normalizeDataUri2.default.createElement(_CalendarDay2.default, {
            xs : 24,
            lg : 24,
            className : "border-bottom"
          }, _normalizeDataUri2.default.createElement("h3", null, "Formato de evaluaci\u00f3n")), _normalizeDataUri2.default.createElement(_CalendarDay2.default, {
            xs : 24,
            lg : 24
          }, null !== model.id_evaluacion_asesor_interno & null !== model.id_evaluacion_asesor_externo ? _normalizeDataUri2.default.createElement("a", {
            target : "_blank",
            href : "/api/proyecto/" + model.id + "/formato_evaluacion/" + ("2009-2010" === model.anteproyecto.alumno.plan_estudios ? "anexoIII" : "anexoXXX")
          }, _normalizeDataUri2.default.createElement(_AboutPage2.default, {
            type : "primary",
            icon : "file-pdf"
          }, "Generar formato de evaluaci\u00f3n")) : _normalizeDataUri2.default.createElement(_DraggableCore2.default, {
            message : (null === model.id_evaluacion_asesor_interno ? "El asesor interno no ha realizado la evaluaci\u00f3n" : "") + "\n" + (null === model.id_evaluacion_asesor_externo ? ", El asesor externo no ha realizado la evaluaci\u00f3n" : ""),
            type : "warning",
            showIcon : true
          }))), _normalizeDataUri2.default.createElement(_UiIcon2.default, {
            gutter : 20,
            style : {
              marginTop : 30
            }
          }, _normalizeDataUri2.default.createElement(_CalendarDay2.default, {
            xs : 24,
            lg : 24,
            className : "border-bottom"
          }, _normalizeDataUri2.default.createElement("h3", null, "Cartas de liberaci\u00f3n")), _normalizeDataUri2.default.createElement(_CalendarDay2.default, {
            xs : 24,
            lg : 12
          }, _normalizeDataUri2.default.createElement("h4", null, "Asesor interno"), model.autorizar_carta_liberacion_asesor_interno ? _normalizeDataUri2.default.createElement("a", {
            target : "_blank",
            href : "/api/proyecto/" + model.id + "/carta_liberacion/asesor_interno"
          }, _normalizeDataUri2.default.createElement(_AboutPage2.default, {
            type : "primary",
            icon : "file-pdf"
          }, "Generar carta de liberaci\u00f3n")) : _normalizeDataUri2.default.createElement(_DraggableCore2.default, {
            message : "Tu asesor interno no ha autorizado tu carta de liberaci\u00f3n",
            type : "warning",
            showIcon : true
          })), _normalizeDataUri2.default.createElement(_CalendarDay2.default, {
            xs : 24,
            lg : 12
          }, _normalizeDataUri2.default.createElement("h4", null, "Asesor externo"), model.autorizar_carta_liberacion_asesor_externo ? _normalizeDataUri2.default.createElement("a", {
            target : "_blank",
            href : "/api/proyecto/" + model.id + "/carta_liberacion/asesor_externo"
          }, _normalizeDataUri2.default.createElement(_AboutPage2.default, {
            type : "primary",
            icon : "file-pdf"
          }, "Generar carta de liberaci\u00f3n")) : _normalizeDataUri2.default.createElement(_DraggableCore2.default, {
            message : "Tu asesor externo no ha autorizado tu carta de liberaci\u00f3n",
            type : "warning",
            showIcon : true
          }))));
        }
      }]), Agent;
    }(_normalizeDataUri.Component);
    var observable = params.default.create({
      mapPropsToFields : function(respTodo) {
        return {
          props : respTodo
        };
      }
    })(item);
    exports.default = observable;
  },
  1149 : function(mixin, doPost) {
    mixin.exports = {
      periodo_residencia : {
        dias_habiles_seguimiento_final : 15
      },
      jefe_departamento_de_vinculacion : "M.A.T.I. JES\u00daS MAR\u00cdN ROBLES",
      uuid_app : "c3bda844-1489-427b-91b1-b93744ebc086"
    };
  },
  1150 : function(cond, t, __webpack_require__) {
    /**
     * @param {!Object} obj
     * @return {?}
     */
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default : obj
      };
    }
    /**
     * @param {!AudioNode} instance
     * @param {!Function} Constructor
     * @return {undefined}
     */
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    /**
     * @param {string} self
     * @param {string} call
     * @return {?}
     */
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return !call || "object" != typeof call && "function" != typeof call ? self : call;
    }
    /**
     * @param {!Object} subClass
     * @param {!Object} superClass
     * @return {undefined}
     */
    function _inherits(subClass, superClass) {
      if ("function" != typeof superClass && null !== superClass) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      /** @type {!Object} */
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor : {
          value : subClass,
          enumerable : false,
          writable : true,
          configurable : true
        }
      });
      if (superClass) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(subClass, superClass);
        } else {
          /** @type {!Object} */
          subClass.__proto__ = superClass;
        }
      }
    }
    Object.defineProperty(t, "__esModule", {
      value : true
    });
    var _suggestItem = (__webpack_require__(404), __webpack_require__(405));
    var _suggestItem2 = _interopRequireDefault(_suggestItem);
    var _suggestList = (__webpack_require__(33), __webpack_require__(34));
    var _suggestList2 = _interopRequireDefault(_suggestList);
    var _DraggableCore = (__webpack_require__(31), __webpack_require__(32));
    var _DraggableCore2 = _interopRequireDefault(_DraggableCore);
    var _deepAssign = (__webpack_require__(65), __webpack_require__(66));
    var _deepAssign2 = _interopRequireDefault(_deepAssign);
    var _createClass = function() {
      /**
       * @param {!Function} d
       * @param {string} props
       * @return {undefined}
       */
      function e(d, props) {
        /** @type {number} */
        var i = 0;
        for (; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          /** @type {boolean} */
          descriptor.configurable = true;
          if ("value" in descriptor) {
            /** @type {boolean} */
            descriptor.writable = true;
          }
          Object.defineProperty(d, descriptor.key, descriptor);
        }
      }
      return function(t, n, a) {
        return n && e(t.prototype, n), a && e(t, a), t;
      };
    }();
    var _prepareStyleProperties = __webpack_require__(0);
    var _prepareStyleProperties2 = _interopRequireDefault(_prepareStyleProperties);
    var offsetFromCenter = (_deepAssign2.default.Content, _deepAssign2.default.Header, function(_EventEmitter) {
      /**
       * @return {?}
       */
      function Agent() {
        return _classCallCheck(this, Agent), _possibleConstructorReturn(this, (Agent.__proto__ || Object.getPrototypeOf(Agent)).apply(this, arguments));
      }
      return _inherits(Agent, _EventEmitter), _createClass(Agent, [{
        key : "render",
        value : function() {
          return _prepareStyleProperties2.default.createElement("div", null, _prepareStyleProperties2.default.createElement(_suggestList2.default, {
            type : "flex",
            justify : "center",
            align : "middle",
            style : {
              height : "100%"
            },
            key : "a"
          }, _prepareStyleProperties2.default.createElement(_DraggableCore2.default, {
            lg : 16,
            xs : 22
          }, _prepareStyleProperties2.default.createElement(_suggestItem2.default, {
            style : {
              borderBottomRightRadius : 10,
              borderBottomLeftRadius : 10,
              borderTopLeftRadius : 10,
              borderTopRightRadius : 10,
              paddingTop : 25,
              paddingBottom : 25
            }
          }, _prepareStyleProperties2.default.createElement(_suggestList2.default, {
            type : "flex",
            justify : "center",
            align : "middle"
          }, _prepareStyleProperties2.default.createElement(_DraggableCore2.default, {
            lg : 24,
            xs : 24,
            style : {
              paddingLeft : 20,
              paddingRight : 20
            }
          }, _prepareStyleProperties2.default.createElement("h1", {
            style : {
              fontSize : 150,
              color : "#4da1ff",
              textAlign : "center"
            }
          }, "404"), _prepareStyleProperties2.default.createElement("p", {
            style : {
              color : "#4da1ff",
              textAlign : "center"
            }
          }, "Oops!!! Pagina no encontrada.")))))));
        }
      }]), Agent;
    }(_prepareStyleProperties.Component));
    t.default = offsetFromCenter;
  },
  1151 : function(module, id, require) {
    var content = require(1152);
    if ("string" == typeof content) {
      /** @type {!Array} */
      content = [[module.i, content, ""]];
    }
    var transformer = {};
    transformer.transform = void 0;
    require(27)(content, transformer);
    if (content.locals) {
      module.exports = content.locals;
    }
  },
  1152 : function(task, results, equality_function) {
    results = task.exports = equality_function(26)(void 0);
    results.push([task.i, ".logo-login{\n  width: 10em;\n  height: 10em;\n}\n\n.trigger {\n  font-size: 18px;\n  line-height: 64px;\n  padding: 0 16px;\n  cursor: pointer;\n  transition: color .3s;\n}\n\n.cerrar-sesion:hover {\n  color: red;\n  background-color: red;\n}\n.trigger:hover {\n  color: #108ee9;\n}\n\n.logo {\n  height: 32px;\n  /* background: #333; */\n  border-radius: 6px;\n  margin: 16px;\n}\n\n.full-width {\n  width: 100%;\n}\n.center-text{\n  text-align: center !important;\n}\n\n\n.dynamic-delete-button {\n  cursor: pointer;\n  position: relative;\n  top: 4px;\n  font-size: 24px;\n  color: #999;\n  transition: all .3s;\n}\n.dynamic-delete-button:hover {\n  color: #777;\n}\n.dynamic-delete-button[disabled] {\n  cursor: not-allowed;\n  opacity: 0.5;\n}\n\n.custom-filter-dropdown {\n  padding: 8px;\n  border-radius: 6px;\n  background: #fff;\n  box-shadow: 0 1px 6px rgba(0, 0, 0, .2);\n}\n\n.custom-filter-dropdown input {\n  width: 130px;\n  margin-right: 8px;\n}\n\n.highlight {\n  color: #f50;\n}\n\n\n.components-table-demo-nested .ant-table-expanded-row > td:last-child {\n  padding: 0 48px 0 8px;\n}\n\n.components-table-demo-nested .ant-table-expanded-row > td:last-child .ant-table-thead th {\n  border-bottom: 1px solid #e9e9e9;\n}\n\n.components-table-demo-nested .ant-table-expanded-row > td:last-child .ant-table-thead th:first-child {\n  padding-left: 0;\n}\n\n.components-table-demo-nested .ant-table-expanded-row > td:last-child .ant-table-row td:first-child {\n  padding-left: 0;\n}\n\n.components-table-demo-nested .ant-table-expanded-row .ant-table-row:last-child td {\n  border: none;\n}\n\n.components-table-demo-nested .ant-table-expanded-row .ant-table-thead > tr > th {\n  background: none;\n}\n\n.components-table-demo-nested .table-operation a:not(:last-child) {\n  margin-right: 24px;\n}\n.SimplePDF {\n  width: 350px; /* width of pdf document box should be != 0 */\n  height: 500px; /* height of pdf document box should be != 0 */\n  margin: 15px; /* optional */\n  padding: 15px; /* optional */\n  float: left; /* optional */\n}\n\n.pdf{\n  width: 100% !important;\n}\n\n.file-preview {\n  width: 600px !important;\n}\n\n.center-block{\n  justify-content: center;\n  overflow-y: 50px;\n}\n\n.border-top{\n  border-top: 1px solid #d7d9db;\n  margin-top: 20px;\n  padding-top: 10px;\n}\n.border-bottom{\n  border-bottom: 1px solid #d7d9db;\n  margin-bottom: 20px;\n  padding-bottom: 10px;\n}", 
    ""]);
  },
  429 : function(cond, t, __webpack_require__) {
    /**
     * @param {!Object} obj
     * @return {?}
     */
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default : obj
      };
    }
    /**
     * @param {!AudioNode} instance
     * @param {!Function} Constructor
     * @return {undefined}
     */
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    /**
     * @param {string} self
     * @param {string} call
     * @return {?}
     */
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return !call || "object" != typeof call && "function" != typeof call ? self : call;
    }
    /**
     * @param {!Object} subClass
     * @param {!Object} superClass
     * @return {undefined}
     */
    function _inherits(subClass, superClass) {
      if ("function" != typeof superClass && null !== superClass) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      /** @type {!Object} */
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor : {
          value : subClass,
          enumerable : false,
          writable : true,
          configurable : true
        }
      });
      if (superClass) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(subClass, superClass);
        } else {
          /** @type {!Object} */
          subClass.__proto__ = superClass;
        }
      }
    }
    Object.defineProperty(t, "__esModule", {
      value : true
    });
    var _DraggableCore = (__webpack_require__(33), __webpack_require__(34));
    var _DraggableCore2 = _interopRequireDefault(_DraggableCore);
    var _UiIcon = (__webpack_require__(37), __webpack_require__(36));
    var _UiIcon2 = _interopRequireDefault(_UiIcon);
    var _CalendarDay = (__webpack_require__(31), __webpack_require__(32));
    var _CalendarDay2 = _interopRequireDefault(_CalendarDay);
    var _AboutPage = (__webpack_require__(15), __webpack_require__(16));
    var _AboutPage2 = _interopRequireDefault(_AboutPage);
    var _suggestItem = (__webpack_require__(24), __webpack_require__(25));
    var _suggestItem2 = _interopRequireDefault(_suggestItem);
    var _suggestList = (__webpack_require__(50), __webpack_require__(51));
    var _suggestList2 = _interopRequireDefault(_suggestList);
    var _deepAssign = (__webpack_require__(65), __webpack_require__(66));
    var _deepAssign2 = _interopRequireDefault(_deepAssign);
    var _createClass = function() {
      /**
       * @param {!Function} d
       * @param {string} props
       * @return {undefined}
       */
      function e(d, props) {
        /** @type {number} */
        var i = 0;
        for (; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          /** @type {boolean} */
          descriptor.configurable = true;
          if ("value" in descriptor) {
            /** @type {boolean} */
            descriptor.writable = true;
          }
          Object.defineProperty(d, descriptor.key, descriptor);
        }
      }
      return function(t, n, a) {
        return n && e(t.prototype, n), a && e(t, a), t;
      };
    }();
    var _normalizeDataUri = __webpack_require__(0);
    var _normalizeDataUri2 = _interopRequireDefault(_normalizeDataUri);
    var _AppDownload = (__webpack_require__(11), __webpack_require__(12));
    var _AppDownload2 = _interopRequireDefault(_AppDownload);
    var _uuid = __webpack_require__(45);
    var _uuid2 = _interopRequireDefault(_uuid);
    var _CalendarEvent = __webpack_require__(918);
    var _CalendarEvent2 = _interopRequireDefault(_CalendarEvent);
    var _buildPageNumber = __webpack_require__(928);
    var _buildPageNumber2 = _interopRequireDefault(_buildPageNumber);
    var _toHyphenCase = __webpack_require__(452);
    var _toHyphenCase2 = _interopRequireDefault(_toHyphenCase);
    var _CalendarTitle = __webpack_require__(929);
    var _CalendarTitle2 = _interopRequireDefault(_CalendarTitle);
    var _prepareStyleProperties = __webpack_require__(930);
    var Route = (_interopRequireDefault(_prepareStyleProperties), _deepAssign2.default.Content, _deepAssign2.default.Header, _suggestList2.default.Column);
    var DropIndicator = (_suggestList2.default.ColumnGroup, _suggestItem2.default.Option);
    var offsetFromCenter = function(_EventEmitter) {
      /**
       * @return {?}
       */
      function Agent() {
        _classCallCheck(this, Agent);
        var _this2 = _possibleConstructorReturn(this, (Agent.__proto__ || Object.getPrototypeOf(Agent)).call(this));
        return _this2.showModalFormDepartamento = function() {
          _this2.setState({
            visible_form_departamento : true,
            visible_form_edit_departamento : false,
            visible_add_docente : false,
            visible_add_carrera : false
          });
        }, _this2.showModalFormEditDepartamento = function(applyToDivId) {
          _AppDownload2.default.get("/api/departamento/" + applyToDivId).then(function(simpleselect) {
            _this2.setState({
              visible_add_docente : false,
              visible_add_carrera : false,
              visible_form_departamento : false,
              visible_form_edit_departamento : true,
              departamento : simpleselect.data
            });
          });
        }, _this2.showAddDocente = function(eventStr, a) {
          _this2.setState({
            visible_form_departamento : false,
            visible_form_edit_departamento : false,
            visible_add_carrera : false,
            visible_add_docente : true,
            props_add_docente : {
              id_departamento : eventStr,
              nombre_departamento : a
            }
          });
        }, _this2.showAddCarrera = function(eventStr, a) {
          _this2.setState({
            visible_form_departamento : false,
            visible_form_edit_departamento : false,
            visible_add_docente : false,
            visible_add_carrera : true,
            props_add_carrera : {
              id_departamento : eventStr,
              nombre_departamento : a
            }
          });
        }, _this2.changeSubdirectorAcademico = function(scoringCriteriaId) {
          _AppDownload2.default.put("/api/docente/subdirector_academico", {
            id_usuario : scoringCriteriaId || null
          }).then(function(testsStatus) {
            if (200 === testsStatus.status) {
              _AboutPage2.default.success("Subdirector academico actualizado satisfactoriamente");
            } else {
              _AboutPage2.default.error("Tuvimos un error al asignar al subdirector academico.");
            }
          }).catch(function(canCreateDiscussions) {
            _AboutPage2.default.error("Error al asignar al subdirector academico");
          });
        }, _this2.state = {
          data : [],
          visible_form_departamento : false,
          visible_form_edit_departamento : false,
          visible_add_docente : false,
          props_add_docente : {
            id_departamento : null,
            nombre_departamento : null
          },
          visible_add_carrera : false,
          props_add_carrera : {
            id_departamento : null,
            nombre_departamento : null
          },
          departamento : null,
          loadTable : true,
          docentes : []
        }, _this2;
      }
      return _inherits(Agent, _EventEmitter), _createClass(Agent, [{
        key : "fetchDepartamento",
        value : function() {
          var dispatcher = this;
          _AppDownload2.default.get("/api/departamento").then(function(t) {
            if (200 === t.status) {
              var maindata3 = t.data.map(function($scope, awsKey) {
                console.log($scope.docentes);
                var $routeParams = $scope.docentes.find(function($scope) {
                  return "jefe_departamento" === $scope.usuario.rol;
                });
                return {
                  key : awsKey,
                  id : $scope.id,
                  nombre : $scope.nombre,
                  jefe_departamento : $routeParams ? $routeParams.titulo + " " + $routeParams.nombre + " " + $routeParams.ap_paterno + " " + $routeParams.ap_materno : "no asignado",
                  acciones : "Editar departamento"
                };
              });
              _AppDownload2.default.get("/api/docentes").then(function(getFilesReply) {
                if (200 === getFilesReply.status) {
                  dispatcher.setState({
                    docentes : getFilesReply.data,
                    data : maindata3,
                    loadTable : false,
                    visible_form_edit_departamento : false
                  });
                } else {
                  dispatcher.setState({
                    data : maindata3,
                    loadTable : false,
                    visible_form_edit_departamento : false
                  });
                }
              });
            }
          });
        }
      }, {
        key : "handleAddDepartamento",
        value : function() {
          this.fetchDepartamento();
          this.setState({
            visible_form_departamento : false,
            visible_form_edit_departamento : false
          });
        }
      }, {
        key : "componentDidMount",
        value : function() {
          this.fetchDepartamento();
        }
      }, {
        key : "render",
        value : function() {
          var servicesManager = this;
          var state = this.state;
          var visibility = state.visible_form_edit_departamento;
          var selected = state.visible_form_departamento;
          var childStates = state.docentes;
          var options = state.data;
          var idnum2expr = state.departamento;
          var loading = state.loadTable;
          var value = state.visible_add_docente;
          var newSelectionEnd = state.props_add_docente;
          var b = state.visible_add_carrera;
          var targetHandlerInfos = state.props_add_carrera;
          var $scope = childStates.find(function($scope) {
            return "subdirector_academico" === $scope.usuario.rol;
          });
          return _normalizeDataUri2.default.createElement("div", null, _normalizeDataUri2.default.createElement(_DraggableCore2.default, {
            type : "flex",
            justify : "left",
            align : "middle"
          }, _normalizeDataUri2.default.createElement(_CalendarDay2.default, {
            style : {
              marginRight : 20
            }
          }, _normalizeDataUri2.default.createElement("h1", null, " Departamentos ")), _normalizeDataUri2.default.createElement(_CalendarDay2.default, null, _normalizeDataUri2.default.createElement(_UiIcon2.default, {
            type : "primary",
            icon : "plus",
            onClick : this.showModalFormDepartamento
          }, "Agregar"))), _normalizeDataUri2.default.createElement(_DraggableCore2.default, {
            style : {
              marginTop : 20,
              marginBottom : 20
            }
          }, _normalizeDataUri2.default.createElement(_CalendarDay2.default, {
            xs : 24,
            lg : 8
          }, _normalizeDataUri2.default.createElement("h3", null, "Seleccione al subdirector academico"), _normalizeDataUri2.default.createElement(_suggestItem2.default, {
            key : _uuid2.default.v4(),
            style : {
              width : "100%"
            },
            showSearch : true,
            placeholder : "Seleccione al subdirector academico",
            optionFilterProp : "children",
            allowClear : true,
            onChange : function(id) {
              return servicesManager.changeSubdirectorAcademico(id);
            },
            defaultValue : $scope ? $scope.titulo + " " + $scope.nombre + " " + $scope.ap_materno + " " + $scope.ap_paterno : null
          }, childStates.map(function($routeParams, canCreateDiscussions) {
            return _normalizeDataUri2.default.createElement(DropIndicator, {
              key : _uuid2.default.v1(),
              value : "" + $routeParams.id_usuario
            }, $routeParams.titulo + " " + $routeParams.nombre + " " + $routeParams.ap_materno + " " + $routeParams.ap_paterno);
          })))), _normalizeDataUri2.default.createElement(_DraggableCore2.default, {
            type : "flex",
            justify : "center",
            align : "middle",
            style : {
              marginTop : 30
            }
          }, _normalizeDataUri2.default.createElement(_suggestList2.default, {
            dataSource : options,
            className : "full-width",
            pagination : {
              pageSize : 5
            },
            loading : loading,
            scroll : {
              x : 800
            }
          }, _normalizeDataUri2.default.createElement(Route, {
            title : "ID",
            dataIndex : "id",
            key : "id",
            className : "center-text"
          }), _normalizeDataUri2.default.createElement(Route, {
            title : "Nombre",
            dataIndex : "nombre",
            key : "nombre",
            className : "center-text"
          }), _normalizeDataUri2.default.createElement(Route, {
            title : "Jefe de departamento",
            dataIndex : "jefe_departamento",
            key : "jefe_departamento",
            className : "center-text"
          }), _normalizeDataUri2.default.createElement(Route, {
            title : "Acciones",
            key : "acciones",
            render : function($datalist, $scope) {
              return _normalizeDataUri2.default.createElement("span", null, _normalizeDataUri2.default.createElement(_UiIcon2.default, {
                style : {
                  marginRight : 5
                },
                icon : "edit",
                onClick : function() {
                  return servicesManager.showModalFormEditDepartamento($scope.id);
                }
              }, "Departamento"), _normalizeDataUri2.default.createElement(_UiIcon2.default, {
                style : {
                  marginLeft : 5
                },
                icon : "plus",
                onClick : function() {
                  return servicesManager.showAddDocente($scope.id, $scope.nombre);
                }
              }, "docente"), _normalizeDataUri2.default.createElement(_UiIcon2.default, {
                style : {
                  marginLeft : 5
                },
                icon : "plus",
                onClick : function() {
                  return servicesManager.showAddCarrera($scope.id, $scope.nombre);
                }
              }, "carrera"));
            },
            className : "center-text"
          }))), _normalizeDataUri2.default.createElement(_CalendarEvent2.default, {
            visible : selected,
            onAddDepartamento : this.handleAddDepartamento.bind(this)
          }), _normalizeDataUri2.default.createElement(_buildPageNumber2.default, {
            visible : visibility,
            onReloadDepartamentos : this.fetchDepartamento.bind(this),
            departamento : idnum2expr
          }), _normalizeDataUri2.default.createElement(_toHyphenCase2.default, {
            visible : value,
            departamento : newSelectionEnd
          }), _normalizeDataUri2.default.createElement(_CalendarTitle2.default, {
            visible : b,
            departamento : targetHandlerInfos
          }));
        }
      }]), Agent;
    }(_normalizeDataUri.Component);
    t.default = offsetFromCenter;
  },
  452 : function(module, exports, __webpack_require__) {
    /**
     * @param {!Object} obj
     * @return {?}
     */
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default : obj
      };
    }
    /**
     * @param {!AudioNode} instance
     * @param {!Function} Constructor
     * @return {undefined}
     */
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    /**
     * @param {string} self
     * @param {string} call
     * @return {?}
     */
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return !call || "object" != typeof call && "function" != typeof call ? self : call;
    }
    /**
     * @param {!Object} subClass
     * @param {!Object} superClass
     * @return {undefined}
     */
    function _inherits(subClass, superClass) {
      if ("function" != typeof superClass && null !== superClass) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      /** @type {!Object} */
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor : {
          value : subClass,
          enumerable : false,
          writable : true,
          configurable : true
        }
      });
      if (superClass) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(subClass, superClass);
        } else {
          /** @type {!Object} */
          subClass.__proto__ = superClass;
        }
      }
    }
    Object.defineProperty(exports, "__esModule", {
      value : true
    });
    var _deepAssign = (__webpack_require__(15), __webpack_require__(16));
    var _deepAssign2 = _interopRequireDefault(_deepAssign);
    var _suggestItem = (__webpack_require__(28), __webpack_require__(29));
    var _suggestItem2 = _interopRequireDefault(_suggestItem);
    var _normalizeDataUri = (__webpack_require__(35), __webpack_require__(13));
    var _normalizeDataUri2 = _interopRequireDefault(_normalizeDataUri);
    var _suggestList = (__webpack_require__(24), __webpack_require__(25));
    var _suggestList2 = _interopRequireDefault(_suggestList);
    var _DraggableCore = (__webpack_require__(18), __webpack_require__(22));
    var _DraggableCore2 = _interopRequireDefault(_DraggableCore);
    var _UiIcon = (__webpack_require__(19), __webpack_require__(20));
    var params = _interopRequireDefault(_UiIcon);
    var _createClass = function() {
      /**
       * @param {!Function} d
       * @param {string} props
       * @return {undefined}
       */
      function e(d, props) {
        /** @type {number} */
        var i = 0;
        for (; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          /** @type {boolean} */
          descriptor.configurable = true;
          if ("value" in descriptor) {
            /** @type {boolean} */
            descriptor.writable = true;
          }
          Object.defineProperty(d, descriptor.key, descriptor);
        }
      }
      return function(t, n, a) {
        return n && e(t.prototype, n), a && e(t, a), t;
      };
    }();
    var _prepareStyleProperties = __webpack_require__(0);
    var _prepareStyleProperties2 = _interopRequireDefault(_prepareStyleProperties);
    var _Trans = (__webpack_require__(11), __webpack_require__(12));
    var _Trans2 = _interopRequireDefault(_Trans);
    var Route = params.default.Item;
    var Tip = (_DraggableCore2.default.Group, _suggestList2.default.Option);
    var DropIndicator = params.default.create()(function(options) {
      var visible = options.visible;
      var onCancel = options.onCancel;
      var onCreate = options.onCreate;
      var def = options.form;
      var readOnlyFn = options.departamento;
      var extendWidget = def.getFieldDecorator;
      var addonBefore = extendWidget("titulo", {
        initialValue : "ING."
      })(_prepareStyleProperties2.default.createElement(_suggestList2.default, {
        style : {
          width : 60
        }
      }, _prepareStyleProperties2.default.createElement(Tip, {
        value : "ING."
      }, "ING."), _prepareStyleProperties2.default.createElement(Tip, {
        value : "DR."
      }, "DR."), _prepareStyleProperties2.default.createElement(Tip, {
        value : "DRA."
      }, "DRA."), _prepareStyleProperties2.default.createElement(Tip, {
        value : "MTRO."
      }, "MTRO."), _prepareStyleProperties2.default.createElement(Tip, {
        value : "DIR."
      }, "DIR."), _prepareStyleProperties2.default.createElement(Tip, {
        value : "DIRA."
      }, "DIRA."), _prepareStyleProperties2.default.createElement(Tip, {
        value : "LIC."
      }, "LIC."), _prepareStyleProperties2.default.createElement(Tip, {
        value : "ISC."
      }, "ISC."), _prepareStyleProperties2.default.createElement(Tip, {
        value : "ISI."
      }, "ISI."), _prepareStyleProperties2.default.createElement(Tip, {
        value : "MAI."
      }, "MAI."), _prepareStyleProperties2.default.createElement(Tip, {
        value : "MBT."
      }, "MTB."), _prepareStyleProperties2.default.createElement(Tip, {
        value : "MCT."
      }, "MCT."), _prepareStyleProperties2.default.createElement(Tip, {
        value : "MTI."
      }, "MTI."), _prepareStyleProperties2.default.createElement(Tip, {
        value : "M.A.T.I."
      }, "M.A.T.I."), _prepareStyleProperties2.default.createElement(Tip, {
        value : "M.C."
      }, "M.C.")));
      return _prepareStyleProperties2.default.createElement(_suggestItem2.default, {
        visible : visible,
        title : "Agregar docente al departamento de " + readOnlyFn.nombre_departamento,
        okText : "Guardar",
        onCancel : onCancel,
        onOk : onCreate
      }, _prepareStyleProperties2.default.createElement(params.default, {
        layout : "vertical"
      }, _prepareStyleProperties2.default.createElement(Route, {
        label : "Nombre"
      }, extendWidget("nombre", {
        rules : [{
          required : true,
          message : "El docente debe tener un nombre."
        }]
      })(_prepareStyleProperties2.default.createElement(_DraggableCore2.default, {
        addonBefore : addonBefore,
        style : {
          width : "100%"
        },
        placeholder : "Nombre del docente"
      }))), _prepareStyleProperties2.default.createElement(Route, {
        label : "Apellido paterno"
      }, extendWidget("ap_paterno", {
        rules : [{
          required : true,
          message : "El docente debe tener un apellido paterno."
        }]
      })(_prepareStyleProperties2.default.createElement(_DraggableCore2.default, {
        placeholder : "Apellido paterno del docente"
      }))), _prepareStyleProperties2.default.createElement(Route, {
        label : "Apellido materno"
      }, extendWidget("ap_materno", {
        rules : [{
          required : true,
          message : "El docente debe tener un apellido materno."
        }]
      })(_prepareStyleProperties2.default.createElement(_DraggableCore2.default, {
        placeholder : "Apellido materno del docente"
      }))), _prepareStyleProperties2.default.createElement(Route, {
        label : "Correo electronico"
      }, extendWidget("correo", {
        rules : [{
          type : "email",
          message : "El correo no es correcto"
        }, {
          required : true,
          message : "Necesita su correo para autentificarse en el sistema."
        }]
      })(_prepareStyleProperties2.default.createElement(_DraggableCore2.default, {
        prefix : _prepareStyleProperties2.default.createElement(_normalizeDataUri2.default, {
          type : "user",
          style : {
            fontSize : 13
          }
        }),
        type : "email",
        placeholder : "Ingrese su correo electronico"
      })))));
    });
    var indexedDBManager = function(_EventEmitter) {
      /**
       * @param {!Object} element
       * @return {?}
       */
      function Agent(element) {
        _classCallCheck(this, Agent);
        var $scope = _possibleConstructorReturn(this, (Agent.__proto__ || Object.getPrototypeOf(Agent)).call(this, element));
        return $scope.showModal = function() {
          $scope.setState({
            visible : true
          });
        }, $scope.handleCancel = function() {
          $scope.setState({
            visible : false
          });
        }, $scope.handleCreate = function() {
          var form = $scope.form;
          form.validateFields(function(canCreateDiscussions, $routeParams) {
            if (!canCreateDiscussions) {
              console.log("Received values of form: ", $routeParams);
              _Trans2.default.post("/api/docente", {
                titulo : $routeParams.titulo,
                nombre : $routeParams.nombre,
                ap_paterno : $routeParams.ap_paterno,
                ap_materno : $routeParams.ap_materno,
                id_departamento : $scope.state.departamento.id_departamento,
                correo : $routeParams.correo
              }).then(function(t) {
                console.log(t);
                if (200 === t.status) {
                  _deepAssign2.default.success("Docente agregado satisfactoriamente");
                  $scope.setState({
                    visible : false
                  });
                  form.resetFields();
                } else {
                  _suggestItem2.default.error({
                    title : "Error al guardar el docente. Revisar los siguientes campos",
                    content : _prepareStyleProperties2.default.createElement("div", null, t.data.errores),
                    onOk : function() {
                    }
                  });
                }
              }).catch(function(mnemonics) {
                _deepAssign2.default.error(mnemonics);
              });
            }
          });
        }, $scope.saveFormRef = function(data) {
          /** @type {!Object} */
          $scope.form = data;
        }, $scope.state = {
          visible : element.visible,
          departamento : element.departamento
        }, $scope;
      }
      return _inherits(Agent, _EventEmitter), _createClass(Agent, [{
        key : "componentWillReceiveProps",
        value : function(_ref) {
          var visible = _ref.visible;
          var _ref$mapStateToPropsF = _ref.departamento;
          this.setState({
            visible : visible,
            departamento : _ref$mapStateToPropsF
          });
        }
      }, {
        key : "render",
        value : function() {
          return _prepareStyleProperties2.default.createElement("div", null, _prepareStyleProperties2.default.createElement(DropIndicator, {
            ref : this.saveFormRef,
            visible : this.state.visible,
            onCancel : this.handleCancel,
            onCreate : this.handleCreate,
            departamento : this.state.departamento
          }));
        }
      }]), Agent;
    }(_prepareStyleProperties.Component);
    exports.default = indexedDBManager;
  },
  453 : function(cond, t, __webpack_require__) {
    /**
     * @param {!Object} obj
     * @return {?}
     */
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default : obj
      };
    }
    /**
     * @param {!AudioNode} instance
     * @param {!Function} Constructor
     * @return {undefined}
     */
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    /**
     * @param {string} self
     * @param {string} call
     * @return {?}
     */
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return !call || "object" != typeof call && "function" != typeof call ? self : call;
    }
    /**
     * @param {!Object} subClass
     * @param {!Object} superClass
     * @return {undefined}
     */
    function _inherits(subClass, superClass) {
      if ("function" != typeof superClass && null !== superClass) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      /** @type {!Object} */
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor : {
          value : subClass,
          enumerable : false,
          writable : true,
          configurable : true
        }
      });
      if (superClass) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(subClass, superClass);
        } else {
          /** @type {!Object} */
          subClass.__proto__ = superClass;
        }
      }
    }
    Object.defineProperty(t, "__esModule", {
      value : true
    });
    var _suggestList = (__webpack_require__(33), __webpack_require__(34));
    var _suggestList2 = _interopRequireDefault(_suggestList);
    var _DraggableCore = (__webpack_require__(37), __webpack_require__(36));
    var _DraggableCore2 = _interopRequireDefault(_DraggableCore);
    var _normalizeDataUri = (__webpack_require__(31), __webpack_require__(32));
    var _normalizeDataUri2 = _interopRequireDefault(_normalizeDataUri);
    var _suggestItem = (__webpack_require__(50), __webpack_require__(51));
    var _suggestItem2 = _interopRequireDefault(_suggestItem);
    var _deepAssign = (__webpack_require__(65), __webpack_require__(66));
    var _deepAssign2 = _interopRequireDefault(_deepAssign);
    var _createClass = function() {
      /**
       * @param {!Function} d
       * @param {string} props
       * @return {undefined}
       */
      function e(d, props) {
        /** @type {number} */
        var i = 0;
        for (; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          /** @type {boolean} */
          descriptor.configurable = true;
          if ("value" in descriptor) {
            /** @type {boolean} */
            descriptor.writable = true;
          }
          Object.defineProperty(d, descriptor.key, descriptor);
        }
      }
      return function(t, n, a) {
        return n && e(t.prototype, n), a && e(t, a), t;
      };
    }();
    var _prepareStyleProperties = __webpack_require__(0);
    var _prepareStyleProperties2 = _interopRequireDefault(_prepareStyleProperties);
    var _UiIcon = (__webpack_require__(11), __webpack_require__(12));
    var _UiIcon2 = _interopRequireDefault(_UiIcon);
    var Route = (_deepAssign2.default.Content, _deepAssign2.default.Header, _suggestItem2.default.Column);
    var offsetFromCenter = (_suggestItem2.default.ColumnGroup, function(_EventEmitter) {
      /**
       * @return {?}
       */
      function Agent() {
        _classCallCheck(this, Agent);
        var that = _possibleConstructorReturn(this, (Agent.__proto__ || Object.getPrototypeOf(Agent)).call(this));
        return that.showModal = function() {
          that.setState({
            visible : true
          });
        }, that.state = {
          data : [{
            key : "1",
            id : 1,
            nombre : "Sistemas y computaci\u00f3n",
            jefe_departamento : "Jose Angel Nava",
            acciones : "alv"
          }],
          visible : false
        }, that;
      }
      return _inherits(Agent, _EventEmitter), _createClass(Agent, [{
        key : "componentDidMount",
        value : function() {
          var dispatcher = this;
          _UiIcon2.default.get("/api/docente").then(function(t) {
            if (200 === t.status) {
              var maindata3 = t.data.map(function($routeParams, awsKey) {
                return {
                  key : awsKey,
                  id : $routeParams.id,
                  nombre : $routeParams.nombre,
                  jefe_departamento : "unasigned",
                  acciones : "falta"
                };
              });
              dispatcher.setState({
                data : maindata3
              });
            }
          });
        }
      }, {
        key : "render",
        value : function() {
          var state = this.state;
          var dataSource2 = (state.visible, state.data);
          return _prepareStyleProperties2.default.createElement("div", null, _prepareStyleProperties2.default.createElement(_suggestList2.default, {
            type : "flex",
            justify : "left",
            align : "middle"
          }, _prepareStyleProperties2.default.createElement(_normalizeDataUri2.default, {
            style : {
              marginRight : 20
            }
          }, _prepareStyleProperties2.default.createElement("h1", null, " Docente ")), _prepareStyleProperties2.default.createElement(_normalizeDataUri2.default, null, _prepareStyleProperties2.default.createElement(_DraggableCore2.default, {
            type : "primary",
            icon : "plus",
            onClick : this.showModal
          }, "Agregar"))), _prepareStyleProperties2.default.createElement(_suggestList2.default, {
            type : "flex",
            justify : "center",
            align : "middle",
            style : {
              marginTop : 30
            }
          }, _prepareStyleProperties2.default.createElement(_suggestItem2.default, {
            dataSource : dataSource2,
            className : "full-width"
          }, _prepareStyleProperties2.default.createElement(Route, {
            title : "ID",
            dataIndex : "id",
            key : "id",
            className : "center-text"
          }), _prepareStyleProperties2.default.createElement(Route, {
            title : "Nombre",
            dataIndex : "nombre",
            key : "nombre",
            className : "center-text"
          }), _prepareStyleProperties2.default.createElement(Route, {
            title : "Jefe de departamento",
            dataIndex : "jefe_departamento",
            key : "jefe_departamento",
            className : "center-text"
          }), _prepareStyleProperties2.default.createElement(Route, {
            title : "Acciones",
            key : "acciones",
            render : function(accountId, customAudiences) {
              return _prepareStyleProperties2.default.createElement("span", null, _prepareStyleProperties2.default.createElement(_DraggableCore2.default, {
                icon : "edit"
              }, " Cambiar jefe de departamento "));
            },
            className : "center-text"
          }))));
        }
      }]), Agent;
    }(_prepareStyleProperties.Component));
    t.default = offsetFromCenter;
  },
  454 : function(clientAddress, state, __webpack_require__) {
    /**
     * @param {!Object} obj
     * @return {?}
     */
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default : obj
      };
    }
    /**
     * @param {!AudioNode} value
     * @param {!Function} pattern
     * @return {undefined}
     */
    function on(value, pattern) {
      if (!(value instanceof pattern)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    /**
     * @param {string} name
     * @param {string} o
     * @return {?}
     */
    function bind(name, o) {
      if (!name) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return !o || "object" != typeof o && "function" != typeof o ? name : o;
    }
    /**
     * @param {!Object} subClass
     * @param {!Object} superClass
     * @return {undefined}
     */
    function _inherits(subClass, superClass) {
      if ("function" != typeof superClass && null !== superClass) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      /** @type {!Object} */
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor : {
          value : subClass,
          enumerable : false,
          writable : true,
          configurable : true
        }
      });
      if (superClass) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(subClass, superClass);
        } else {
          /** @type {!Object} */
          subClass.__proto__ = superClass;
        }
      }
    }
    Object.defineProperty(state, "__esModule", {
      value : true
    });
    var _suggestList = (__webpack_require__(33), __webpack_require__(34));
    var _suggestList2 = _interopRequireDefault(_suggestList);
    var _DraggableCore = (__webpack_require__(31), __webpack_require__(32));
    var _DraggableCore2 = _interopRequireDefault(_DraggableCore);
    var _normalizeDataUri = (__webpack_require__(35), __webpack_require__(13));
    var _normalizeDataUri2 = _interopRequireDefault(_normalizeDataUri);
    var _UiIcon = (__webpack_require__(37), __webpack_require__(36));
    var _UiIcon2 = _interopRequireDefault(_UiIcon);
    var _CalendarDay = (__webpack_require__(18), __webpack_require__(22));
    var _CalendarDay2 = _interopRequireDefault(_CalendarDay);
    var _suggestItem = (__webpack_require__(50), __webpack_require__(51));
    var _suggestItem2 = _interopRequireDefault(_suggestItem);
    var _deepAssign = (__webpack_require__(65), __webpack_require__(66));
    var _deepAssign2 = _interopRequireDefault(_deepAssign);
    /** @type {function(!Object, ...(Object|null)): !Object} */
    var extend = Object.assign || function(defaultOptions) {
      /** @type {number} */
      var i = 1;
      for (; i < arguments.length; i++) {
        var ext = arguments[i];
        var key;
        for (key in ext) {
          if (Object.prototype.hasOwnProperty.call(ext, key)) {
            defaultOptions[key] = ext[key];
          }
        }
      }
      return defaultOptions;
    };
    var _createClass = function() {
      /**
       * @param {!Function} d
       * @param {string} props
       * @return {undefined}
       */
      function e(d, props) {
        /** @type {number} */
        var i = 0;
        for (; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          /** @type {boolean} */
          descriptor.configurable = true;
          if ("value" in descriptor) {
            /** @type {boolean} */
            descriptor.writable = true;
          }
          Object.defineProperty(d, descriptor.key, descriptor);
        }
      }
      return function(t, n, a) {
        return n && e(t.prototype, n), a && e(t, a), t;
      };
    }();
    var _prepareStyleProperties = __webpack_require__(0);
    var _prepareStyleProperties2 = _interopRequireDefault(_prepareStyleProperties);
    var _AboutPage = (__webpack_require__(11), __webpack_require__(12));
    var _AboutPage2 = _interopRequireDefault(_AboutPage);
    var _CalendarEvent = __webpack_require__(936);
    var _CalendarEvent2 = _interopRequireDefault(_CalendarEvent);
    var _AppDownload = __webpack_require__(937);
    var _AppDownload2 = _interopRequireDefault(_AppDownload);
    var _buildPageNumber = __webpack_require__(938);
    var _buildPageNumber2 = _interopRequireDefault(_buildPageNumber);
    var M = (_deepAssign2.default.Content, _deepAssign2.default.Header, _suggestItem2.default.Column, _suggestItem2.default.ColumnGroup, function(_EventEmitter) {
      /**
       * @return {?}
       */
      function Agent() {
        on(this, Agent);
        var $scope = bind(this, (Agent.__proto__ || Object.getPrototypeOf(Agent)).call(this));
        return $scope.onInputChange = function(event) {
          $scope.setState({
            searchText : event.target.value
          });
        }, $scope.onSearch = function() {
          var action = $scope.state;
          var method = action.searchText;
          var objArrToRemove = action.empresas;
          /** @type {!RegExp} */
          var r = new RegExp(method, "gi");
          $scope.setState({
            visible : false,
            filterDropdownVisible : false,
            filtered : !!method,
            filterEmpresas : objArrToRemove.map(function(e) {
              console.warn(e);
              var k = e.nombre.match(r);
              return k ? extend({}, e, {
                nombre : _prepareStyleProperties2.default.createElement("span", null, e.nombre.split(r).map(function(b, a) {
                  return a > 0 ? [_prepareStyleProperties2.default.createElement("span", {
                    className : "highlight"
                  }, k[0]), b] : b;
                }))
              }) : null;
            }).filter(function(canCreateDiscussions) {
              return !!canCreateDiscussions;
            })
          });
        }, $scope.showModal = function() {
          $scope.setState({
            visible : true,
            visibleFormEditEmpresa : false,
            visibleFormAddAsesorExterno : false
          });
        }, $scope.showModalFormEditEmpresa = function(undefined) {
          var filteredView = $scope.state.empresas;
          var n = filteredView.find(function(api_result) {
            return api_result.id === undefined;
          });
          $scope.setState({
            visible : false,
            visibleFormEditEmpresa : true,
            visibleFormAddAsesorExterno : false,
            props_edit_empresa : n
          });
        }, $scope.showAddAsesorExterno = function(eventStr, a) {
          $scope.setState({
            visible : false,
            visibleFormEditEmpresa : false,
            visibleFormAddAsesorExterno : true,
            props_add_asesor : {
              id_empresa : eventStr,
              nombre_empresa : a
            }
          });
        }, $scope.expandedRowRender = function(canCreateDiscussions) {
          /** @type {!Array} */
          var pivotColValues = [{
            title : "Nombre",
            dataIndex : "nombre"
          }, {
            title : "Puesto",
            dataIndex : "puesto"
          }];
          return _prepareStyleProperties2.default.createElement("div", null, _prepareStyleProperties2.default.createElement("span", null, _prepareStyleProperties2.default.createElement("strong", null, "RFC"), _prepareStyleProperties2.default.createElement("p", null, canCreateDiscussions.detalles.rfc), _prepareStyleProperties2.default.createElement("strong", null, "Domicilio"), _prepareStyleProperties2.default.createElement("p", null, canCreateDiscussions.detalles.domicilio), _prepareStyleProperties2.default.createElement("strong", 
          null, "Codigo postal"), _prepareStyleProperties2.default.createElement("p", null, canCreateDiscussions.detalles.codigo_postal)), _prepareStyleProperties2.default.createElement("span", null, _prepareStyleProperties2.default.createElement("strong", null, "Nombre y puesto del titular de la empresa"), _prepareStyleProperties2.default.createElement("p", null, canCreateDiscussions.titular.titulo + " " + canCreateDiscussions.titular.nombre + " " + canCreateDiscussions.titular.puesto), _prepareStyleProperties2.default.createElement("strong", 
          null, "Nombre y puesto de quien firma el acuerdo con el ITCH"), _prepareStyleProperties2.default.createElement("p", null, canCreateDiscussions.representante_legal.titulo + " " + canCreateDiscussions.representante_legal.nombre + " " + canCreateDiscussions.representante_legal.puesto)), _prepareStyleProperties2.default.createElement(_suggestItem2.default, {
            style : {
              marginTop : 10
            },
            title : function() {
              return "Asesores externos de la empresa";
            },
            columns : pivotColValues,
            size : "small",
            dataSource : canCreateDiscussions.detalles.asesores_externos.map(function($routeParams, awsKey) {
              return {
                key : awsKey,
                nombre : $routeParams.nombre,
                puesto : $routeParams.puesto
              };
            })
          }));
        }, $scope.state = {
          empresas : [],
          filterEmpresas : [],
          visible : false,
          filterDropdownVisible : false,
          searchText : "",
          filtered : false,
          loadTable : true,
          visibleFormAddAsesorExterno : false,
          visibleFormEditEmpresa : false,
          props_add_asesor : {
            id_empresa : null,
            nombre_empresa : null
          },
          props_edit_empresa : {
            detalles : null
          }
        }, $scope;
      }
      return _inherits(Agent, _EventEmitter), _createClass(Agent, [{
        key : "fetchEmpresas",
        value : function() {
          var boilerStateMachine = this;
          _AboutPage2.default.get("/api/empresa").then(function(getFilesReply) {
            if (200 === getFilesReply.status) {
              var a = getFilesReply.data.empresas.map(function($routeParams, awsKey) {
                return {
                  key : awsKey,
                  id : $routeParams.id,
                  nombre : $routeParams.nombre,
                  clasificacion : $routeParams.clasificacion,
                  titular : $routeParams.titular,
                  representante_legal : $routeParams.representante_legal,
                  detalles : {
                    rfc : $routeParams.rfc,
                    domicilio : $routeParams.domicilio + " colonia " + $routeParams.colonia,
                    domicilio_only : $routeParams.domicilio,
                    colonia : $routeParams.colonia,
                    codigo_postal : $routeParams.codigo_postal,
                    fax : $routeParams.fax,
                    mision : $routeParams.mision,
                    puesto_titular : $routeParams.puesto_titular,
                    nombre_titular : $routeParams.nombre_titular,
                    puesto_firma_acuerdo : $routeParams.puesto_firma_acuerdo,
                    nombre_firma_acuerdo : $routeParams.nombre_firma_acuerdo,
                    asesores_externos : $routeParams.asesor_externos
                  },
                  acciones : "acctions"
                };
              });
              boilerStateMachine.setState({
                loadTable : false,
                empresas : a,
                filterEmpresas : a,
                visibleFormAddAsesorExterno : false,
                visibleFormEditEmpresa : false
              });
            }
          }).catch(function(canCreateDiscussions) {
            boilerStateMachine.setState({
              loadTable : false
            });
          });
        }
      }, {
        key : "componentDidMount",
        value : function() {
          this.fetchEmpresas();
        }
      }, {
        key : "handleAddEmpresa",
        value : function() {
          this.fetchEmpresas();
          this.setState({
            visible : false
          });
        }
      }, {
        key : "render",
        value : function() {
          var self = this;
          var tree = this.state;
          var visible = tree.visible;
          var items = tree.filterEmpresas;
          var loading = tree.loadTable;
          var b = tree.visibleFormAddAsesorExterno;
          var row_being_edited = tree.props_add_asesor;
          var value = tree.visibleFormEditEmpresa;
          var panzer = tree.props_edit_empresa;
          /** @type {!Array} */
          var pivotColValues = [{
            title : "Nombre",
            dataIndex : "nombre",
            key : "nombre",
            filterDropdown : _prepareStyleProperties2.default.createElement("div", {
              className : "custom-filter-dropdown"
            }, _prepareStyleProperties2.default.createElement(_CalendarDay2.default, {
              ref : function(input) {
                return self.searchInput = input;
              },
              placeholder : "Buscar por nombre",
              value : this.state.searchText,
              onChange : this.onInputChange,
              onPressEnter : this.onSearch
            }), _prepareStyleProperties2.default.createElement(_UiIcon2.default, {
              type : "primary",
              onClick : this.onSearch
            }, "Buscar")),
            filterIcon : _prepareStyleProperties2.default.createElement(_normalizeDataUri2.default, {
              type : "search",
              style : {
                color : this.state.filtered ? "#108ee9" : "#aaa"
              }
            }),
            filterDropdownVisible : this.state.filterDropdownVisible,
            onFilterDropdownVisibleChange : function(canCreateDiscussions) {
              self.setState({
                filterDropdownVisible : canCreateDiscussions,
                visible : false,
                visibleFormAddAsesorExterno : false,
                visibleFormEditEmpresa : false
              }, function() {
                return self.searchInput.focus();
              });
            }
          }, {
            title : "Clasificaci\u00f3n",
            dataIndex : "clasificacion",
            key : "clasificacion",
            filters : [{
              text : "P\u00fablico",
              value : "p\u00fablico"
            }, {
              text : "Privado",
              value : "privado"
            }, {
              text : "Industrial",
              value : "industrial"
            }, {
              text : "Servicios",
              value : "servicios"
            }],
            filterMultiple : false,
            onFilter : function(e, cb) {
              return 0 === cb.clasificacion.indexOf(e);
            }
          }, {
            title : "Acciones",
            key : "acciones",
            render : function(sb, data) {
              return _prepareStyleProperties2.default.createElement("span", null, _prepareStyleProperties2.default.createElement(_UiIcon2.default, {
                style : {
                  marginRight : 5
                },
                icon : "edit",
                onClick : function() {
                  return self.showModalFormEditEmpresa(data.id);
                }
              }, "Empresa"), _prepareStyleProperties2.default.createElement(_UiIcon2.default, {
                style : {
                  marginLeft : 5
                },
                icon : "team",
                onClick : function() {
                  return self.showAddAsesorExterno(data.id, data.nombre);
                }
              }, "Agregar asesor externo"));
            },
            className : "center-text"
          }];
          return _prepareStyleProperties2.default.createElement("div", null, _prepareStyleProperties2.default.createElement(_suggestList2.default, {
            type : "flex",
            justify : "left",
            align : "middle"
          }, _prepareStyleProperties2.default.createElement(_DraggableCore2.default, {
            style : {
              marginRight : 20
            }
          }, _prepareStyleProperties2.default.createElement("h1", null, " Empresas ")), _prepareStyleProperties2.default.createElement(_DraggableCore2.default, null, _prepareStyleProperties2.default.createElement(_UiIcon2.default, {
            type : "primary",
            icon : "plus",
            onClick : this.showModal
          }, "Agregar"))), _prepareStyleProperties2.default.createElement(_suggestList2.default, {
            type : "flex",
            justify : "center",
            align : "middle",
            style : {
              marginTop : 30
            }
          }, _prepareStyleProperties2.default.createElement(_suggestItem2.default, {
            dataSource : items,
            className : "full-width",
            columns : pivotColValues,
            pagination : {
              pageSize : 5
            },
            loading : loading,
            scroll : {
              x : 1200
            },
            expandedRowRender : this.expandedRowRender
          })), _prepareStyleProperties2.default.createElement(_CalendarEvent2.default, {
            visible : visible,
            onAddEmpresa : this.handleAddEmpresa.bind(this)
          }), _prepareStyleProperties2.default.createElement(_AppDownload2.default, {
            visible : value,
            empresa : panzer,
            onReloadFetch : this.fetchEmpresas.bind(this)
          }), _prepareStyleProperties2.default.createElement(_buildPageNumber2.default, {
            visible : b,
            empresa : row_being_edited,
            onReloadFetch : this.fetchEmpresas.bind(this)
          }));
        }
      }]), Agent;
    }(_prepareStyleProperties.Component));
    state.default = M;
  },
  472 : function(cond, t, __webpack_require__) {
    /**
     * @param {!Object} obj
     * @return {?}
     */
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default : obj
      };
    }
    /**
     * @param {!AudioNode} instance
     * @param {!Function} Constructor
     * @return {undefined}
     */
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    /**
     * @param {string} self
     * @param {string} call
     * @return {?}
     */
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return !call || "object" != typeof call && "function" != typeof call ? self : call;
    }
    /**
     * @param {!Object} subClass
     * @param {!Object} superClass
     * @return {undefined}
     */
    function _inherits(subClass, superClass) {
      if ("function" != typeof superClass && null !== superClass) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      /** @type {!Object} */
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor : {
          value : subClass,
          enumerable : false,
          writable : true,
          configurable : true
        }
      });
      if (superClass) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(subClass, superClass);
        } else {
          /** @type {!Object} */
          subClass.__proto__ = superClass;
        }
      }
    }
    Object.defineProperty(t, "__esModule", {
      value : true
    });
    var _deepAssign = (__webpack_require__(15), __webpack_require__(16));
    var _deepAssign2 = _interopRequireDefault(_deepAssign);
    var _suggestItem = (__webpack_require__(28), __webpack_require__(29));
    var _suggestItem2 = _interopRequireDefault(_suggestItem);
    var _suggestList = (__webpack_require__(119), __webpack_require__(120));
    var _suggestList2 = _interopRequireDefault(_suggestList);
    var _normalizeDataUri = (__webpack_require__(37), __webpack_require__(36));
    var _normalizeDataUri2 = _interopRequireDefault(_normalizeDataUri);
    var _UiIcon = (__webpack_require__(33), __webpack_require__(34));
    var _UiIcon2 = _interopRequireDefault(_UiIcon);
    var _CalendarDay = (__webpack_require__(31), __webpack_require__(32));
    var _CalendarDay2 = _interopRequireDefault(_CalendarDay);
    var _CalendarEvent = (__webpack_require__(35), __webpack_require__(13));
    var _CalendarEvent2 = _interopRequireDefault(_CalendarEvent);
    var _DraggableCore = (__webpack_require__(88), __webpack_require__(89));
    var _DraggableCore2 = _interopRequireDefault(_DraggableCore);
    var _CalendarTitle = (__webpack_require__(24), __webpack_require__(25));
    var _CalendarTitle2 = _interopRequireDefault(_CalendarTitle);
    var _AboutPage = (__webpack_require__(18), __webpack_require__(22));
    var _AboutPage2 = _interopRequireDefault(_AboutPage);
    var _AppDownload = (__webpack_require__(19), __webpack_require__(20));
    var _AppDownload2 = _interopRequireDefault(_AppDownload);
    var _createClass = function() {
      /**
       * @param {!Function} d
       * @param {string} props
       * @return {undefined}
       */
      function e(d, props) {
        /** @type {number} */
        var i = 0;
        for (; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          /** @type {boolean} */
          descriptor.configurable = true;
          if ("value" in descriptor) {
            /** @type {boolean} */
            descriptor.writable = true;
          }
          Object.defineProperty(d, descriptor.key, descriptor);
        }
      }
      return function(t, n, a) {
        return n && e(t.prototype, n), a && e(t, a), t;
      };
    }();
    var _prepareStyleProperties = __webpack_require__(0);
    var _prepareStyleProperties2 = _interopRequireDefault(_prepareStyleProperties);
    var _Trans = (__webpack_require__(11), __webpack_require__(12));
    var _Trans2 = _interopRequireDefault(_Trans);
    var data = _AppDownload2.default.Item;
    var Tip = (_AboutPage2.default.Group, _CalendarTitle2.default.Option);
    var AnimatedIcon = _DraggableCore2.default.TabPane;
    var FormioElement = _AppDownload2.default.create()(function(options) {
      var visible = options.visible;
      var onCancel = options.onCancel;
      var onCreate = options.onCreate;
      var def = options.form;
      var row = options.carrera;
      var l = options.alumnos_rechazados;
      var change = options.addToPeriodo;
      var extendWidget = def.getFieldDecorator;
      var addonBefore = extendWidget("id_tipo_seguro", {})(_prepareStyleProperties2.default.createElement(_CalendarTitle2.default, {
        style : {
          width : 80
        }
      }, _prepareStyleProperties2.default.createElement(Tip, {
        value : "1"
      }, "IMMS."), _prepareStyleProperties2.default.createElement(Tip, {
        value : "2"
      }, "ISSTE"), _prepareStyleProperties2.default.createElement(Tip, {
        value : "3"
      }, "METLIFE"), _prepareStyleProperties2.default.createElement(Tip, {
        value : "4"
      }, "GNP"), _prepareStyleProperties2.default.createElement(Tip, {
        value : "5"
      }, "QU\u00c1LITAS"), _prepareStyleProperties2.default.createElement(Tip, {
        value : "6"
      }, "INBURSA"), _prepareStyleProperties2.default.createElement(Tip, {
        value : "7"
      }, "OTRO")));
      return _prepareStyleProperties2.default.createElement(_suggestItem2.default, {
        visible : visible,
        title : "Agregar alumno a la carrera de " + (row ? row.nombre : ""),
        okText : "Guardar",
        onCancel : onCancel,
        onOk : onCreate,
        style : {
          top : 10
        },
        width : 600
      }, _prepareStyleProperties2.default.createElement(_DraggableCore2.default, {
        defaultActiveKey : "1"
      }, _prepareStyleProperties2.default.createElement(AnimatedIcon, {
        tab : _prepareStyleProperties2.default.createElement("span", null, _prepareStyleProperties2.default.createElement(_CalendarEvent2.default, {
          type : "user-add"
        }), "Nuevo candidato"),
        key : "1"
      }, _prepareStyleProperties2.default.createElement(_AppDownload2.default, {
        layout : "vertical"
      }, _prepareStyleProperties2.default.createElement(_UiIcon2.default, null, _prepareStyleProperties2.default.createElement(_CalendarDay2.default, {
        xs : 24,
        lg : 24
      }, _prepareStyleProperties2.default.createElement(_UiIcon2.default, {
        gutter : 16
      }, _prepareStyleProperties2.default.createElement(_CalendarDay2.default, {
        xs : 24,
        lg : 12
      }, _prepareStyleProperties2.default.createElement(data, {
        label : "N\u00famero de control"
      }, extendWidget("no_control", {
        rules : [{
          required : true,
          message : "El n\u00famero de control es obligatorio."
        }, {
          len : 8,
          message : "El numero de control contiene 8 digitos"
        }]
      })(_prepareStyleProperties2.default.createElement(_AboutPage2.default, {
        style : {
          width : "100%"
        },
        placeholder : "Ingrese el n\u00famero de control del alumno"
      })))), _prepareStyleProperties2.default.createElement(_CalendarDay2.default, {
        xs : 24,
        lg : 12
      }, _prepareStyleProperties2.default.createElement(data, {
        label : "Plan de estudios"
      }, extendWidget("plan_estudios", {
        rules : [{
          required : true,
          message : "El plan de estudio es obligatorio."
        }]
      })(_prepareStyleProperties2.default.createElement(_CalendarTitle2.default, null, _prepareStyleProperties2.default.createElement(Tip, {
        key : "2009-2010",
        value : "2009-2010"
      }, "2009-2010"), _prepareStyleProperties2.default.createElement(Tip, {
        key : "2015-2016",
        value : "2015-2016"
      }, "2015-2016"))))))), _prepareStyleProperties2.default.createElement(_CalendarDay2.default, {
        xs : 24,
        lg : 24
      }, _prepareStyleProperties2.default.createElement(data, {
        label : "Nombre"
      }, extendWidget("nombre", {
        rules : [{
          required : true,
          message : "El alumno debe tener un nombre"
        }]
      })(_prepareStyleProperties2.default.createElement(_AboutPage2.default, {
        placeholder : "Ingrese el nombre(s) del alumno"
      })))), _prepareStyleProperties2.default.createElement(_CalendarDay2.default, {
        xs : 24,
        lg : 24
      }, _prepareStyleProperties2.default.createElement(data, {
        label : "Apellido paterno"
      }, extendWidget("ap_paterno", {
        rules : [{
          required : true,
          message : "El alumno debe tener un apellido paterno."
        }]
      })(_prepareStyleProperties2.default.createElement(_AboutPage2.default, {
        placeholder : "Ingrese el apellido paterno del alumno"
      })))), _prepareStyleProperties2.default.createElement(_CalendarDay2.default, {
        xs : 24,
        lg : 24
      }, _prepareStyleProperties2.default.createElement(data, {
        label : "Apellido materno"
      }, extendWidget("ap_materno", {
        rules : [{
          required : true,
          message : "El alumno debe tener un apellido materno"
        }]
      })(_prepareStyleProperties2.default.createElement(_AboutPage2.default, {
        placeholder : "Ingrese el apellido materno del alumno"
      })))), _prepareStyleProperties2.default.createElement(_CalendarDay2.default, {
        xs : 24,
        lg : 24
      }, _prepareStyleProperties2.default.createElement(_UiIcon2.default, {
        gutter : 16
      }, _prepareStyleProperties2.default.createElement(_CalendarDay2.default, {
        xs : 24,
        lg : 12
      }, _prepareStyleProperties2.default.createElement(data, {
        label : "Sexo"
      }, extendWidget("sexo", {
        rules : [{
          required : true,
          message : "El alumno debe indicar su sexo."
        }]
      })(_prepareStyleProperties2.default.createElement(_CalendarTitle2.default, {
        placeholder : "Seleccione una opci\u00f3n"
      }, _prepareStyleProperties2.default.createElement(Tip, {
        key : "H",
        value : "H"
      }, "Hombre"), _prepareStyleProperties2.default.createElement(Tip, {
        key : "M",
        value : "M"
      }, "Mujer"))))), _prepareStyleProperties2.default.createElement(_CalendarDay2.default, {
        xs : 24,
        lg : 12
      }, _prepareStyleProperties2.default.createElement(data, {
        label : "Seguridad social"
      }, extendWidget("no_seguro", {
        rules : [{
          required : true,
          message : "Debe indicar el n\u00famero de seguro del alumno."
        }]
      })(_prepareStyleProperties2.default.createElement(_AboutPage2.default, {
        addonBefore : addonBefore,
        style : {
          width : "100%"
        },
        placeholder : "N\u00famero de seguro"
      })))))), _prepareStyleProperties2.default.createElement(_CalendarDay2.default, {
        xs : 24,
        lg : 24
      }, _prepareStyleProperties2.default.createElement(data, {
        label : "Ciudad"
      }, extendWidget("ciudad", {
        rules : [{
          required : true,
          message : "El alumno debe indicar su ciudad."
        }]
      })(_prepareStyleProperties2.default.createElement(_AboutPage2.default, {
        placeholder : "Ingrese la ciudad del alumno"
      })))), _prepareStyleProperties2.default.createElement(_CalendarDay2.default, {
        xs : 24,
        lg : 24
      }, _prepareStyleProperties2.default.createElement(data, {
        label : "Domicilio"
      }, extendWidget("domicilio", {
        rules : [{
          required : true,
          message : "El alumno debe indicar su domicilio."
        }]
      })(_prepareStyleProperties2.default.createElement(_AboutPage2.default, {
        placeholder : "Ingrese el domicilio del alumno"
      })))), _prepareStyleProperties2.default.createElement(_CalendarDay2.default, {
        xs : 24,
        lg : 24
      }, _prepareStyleProperties2.default.createElement(data, {
        label : "Correo electronico"
      }, extendWidget("correo", {
        rules : [{
          type : "email",
          message : "El correo no es correcto"
        }, {
          required : true,
          message : "Necesita su correo para autentificarse en el sistema."
        }]
      })(_prepareStyleProperties2.default.createElement(_AboutPage2.default, {
        prefix : _prepareStyleProperties2.default.createElement(_CalendarEvent2.default, {
          type : "user",
          style : {
            fontSize : 13
          }
        }),
        type : "email",
        placeholder : "Ingrese el correo electronico del alumno"
      })))), _prepareStyleProperties2.default.createElement(_CalendarDay2.default, {
        xs : 24,
        lg : 24
      }, _prepareStyleProperties2.default.createElement(data, {
        label : "T\u00e9lefono (no celular)"
      }, extendWidget("numero_celular", {
        rules : [{
          required : true,
          message : "Ingrese el n\u00famero de telefono celular del alumno."
        }]
      })(_prepareStyleProperties2.default.createElement(_AboutPage2.default, {
        prefix : _prepareStyleProperties2.default.createElement(_CalendarEvent2.default, {
          type : "phone",
          style : {
            fontSize : 13
          }
        }),
        placeholder : "Ingrese el n\u00famero de telefono celular del alumno"
      }))))))), _prepareStyleProperties2.default.createElement(AnimatedIcon, {
        tab : _prepareStyleProperties2.default.createElement("span", null, _prepareStyleProperties2.default.createElement(_CalendarEvent2.default, {
          type : "usergroup-delete"
        }), "Candidato a residente rechazado"),
        key : "2"
      }, _prepareStyleProperties2.default.createElement(_suggestList2.default, {
        style : {
          marginLeft : 10
        }
      }, l.map(function($routeParams, awsKey) {
        return _prepareStyleProperties2.default.createElement(_suggestList2.default.Item, {
          dot : _prepareStyleProperties2.default.createElement(_CalendarEvent2.default, {
            type : "exclamation-circle-o",
            style : {
              fontSize : "16px"
            }
          }),
          color : "red",
          key : awsKey
        }, _prepareStyleProperties2.default.createElement("p", null, $routeParams.no_control + " - " + $routeParams.nombre + " " + $routeParams.ap_paterno + " " + $routeParams.ap_materno), _prepareStyleProperties2.default.createElement(_normalizeDataUri2.default, {
          onClick : function() {
            return change($routeParams.id);
          }
        }, "Agregar al periodo"));
      })))));
    });
    var offsetFromCenter = function(_EventEmitter) {
      /**
       * @param {!Object} element
       * @return {?}
       */
      function Agent(element) {
        _classCallCheck(this, Agent);
        var $scope = _possibleConstructorReturn(this, (Agent.__proto__ || Object.getPrototypeOf(Agent)).call(this, element));
        return $scope.showModal = function() {
          $scope.setState({
            visible : true
          });
        }, $scope.handleCancel = function() {
          $scope.setState({
            visible : false
          });
        }, $scope.addToPeriodo = function(canCreateDiscussions) {
          _Trans2.default.put("/api/alumno/retry_anteproyecto", {
            id_alumno : canCreateDiscussions,
            id_periodo : $scope.state.id_periodo
          }).then(function(getFilesReply) {
            if (200 === getFilesReply.status) {
              _deepAssign2.default.success("Alumno agregado al periodo !");
              $scope.setState({
                visible : false
              });
            } else {
              _suggestItem2.default.error({
                title : "Error al actualizar al alumno. Revisar los siguientes campos",
                content : _prepareStyleProperties2.default.createElement("div", null, getFilesReply.data.errores),
                onOk : function() {
                }
              });
            }
          }).catch(function(mnemonics) {
            _deepAssign2.default.error(mnemonics);
          });
        }, $scope.handleCreate = function() {
          var form = $scope.form;
          form.validateFields(function(canCreateDiscussions, $routeParams) {
            if (!canCreateDiscussions) {
              _Trans2.default.post("/api/alumno", {
                no_control : $routeParams.no_control,
                nombre : $routeParams.nombre,
                ap_paterno : $routeParams.ap_paterno,
                ap_materno : $routeParams.ap_materno,
                id_carrera : $scope.state.carrera.id,
                sexo : $routeParams.sexo,
                correo : $routeParams.correo,
                id_periodo : $scope.state.id_periodo,
                domicilio : $routeParams.domicilio,
                ciudad : $routeParams.ciudad,
                numero_celular : $routeParams.numero_celular,
                no_seguro : $routeParams.no_seguro,
                id_tipo_seguro : $routeParams.id_tipo_seguro,
                plan_estudios : $routeParams.plan_estudios
              }).then(function(getFilesReply) {
                if (200 === getFilesReply.status) {
                  _deepAssign2.default.success("Alumno agregado satisfactoriamente");
                  $scope.setState({
                    visible : false
                  });
                  form.resetFields();
                } else {
                  _suggestItem2.default.error({
                    title : "Error al guardar al alumno. Revisar los siguientes campos",
                    content : _prepareStyleProperties2.default.createElement("div", null, getFilesReply.data.errores),
                    onOk : function() {
                    }
                  });
                }
              }).catch(function(mnemonics) {
                _deepAssign2.default.error(mnemonics);
              });
            }
          });
        }, $scope.saveFormRef = function(data) {
          /** @type {!Object} */
          $scope.form = data;
        }, $scope.state = {
          visible : element.visible,
          carrera : element.carrera,
          id_periodo : element.id_periodo,
          alumnos_rechazados : element.alumnos_rechazados_por_carrera
        }, $scope;
      }
      return _inherits(Agent, _EventEmitter), _createClass(Agent, [{
        key : "componentWillReceiveProps",
        value : function(_ref) {
          var visible = _ref.visible;
          var _ref$mapStateToPropsF = _ref.carrera;
          this.setState({
            visible : visible,
            carrera : _ref$mapStateToPropsF,
            id_periodo : _ref.id_periodo,
            alumnos_rechazados : _ref.alumnos_rechazados_por_carrera
          });
        }
      }, {
        key : "render",
        value : function() {
          return _prepareStyleProperties2.default.createElement("div", null, _prepareStyleProperties2.default.createElement(FormioElement, {
            ref : this.saveFormRef,
            visible : this.state.visible,
            onCancel : this.handleCancel,
            onCreate : this.handleCreate,
            carrera : this.state.carrera,
            addToPeriodo : this.addToPeriodo,
            alumnos_rechazados : this.state.alumnos_rechazados
          }));
        }
      }]), Agent;
    }(_prepareStyleProperties.Component);
    t.default = offsetFromCenter;
  },
  474 : function(clientAddress, state, __webpack_require__) {
    /**
     * @param {!Object} obj
     * @return {?}
     */
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default : obj
      };
    }
    /**
     * @param {!Object} obj
     * @param {string} key
     * @param {!Object} value
     * @return {?}
     */
    function update(obj, key, value) {
      return key in obj ? Object.defineProperty(obj, key, {
        value : value,
        enumerable : true,
        configurable : true,
        writable : true
      }) : obj[key] = value, obj;
    }
    /**
     * @param {!AudioNode} instance
     * @param {!Function} Constructor
     * @return {undefined}
     */
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    /**
     * @param {string} self
     * @param {string} call
     * @return {?}
     */
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return !call || "object" != typeof call && "function" != typeof call ? self : call;
    }
    /**
     * @param {!Object} subClass
     * @param {!Object} superClass
     * @return {undefined}
     */
    function _inherits(subClass, superClass) {
      if ("function" != typeof superClass && null !== superClass) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      /** @type {!Object} */
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor : {
          value : subClass,
          enumerable : false,
          writable : true,
          configurable : true
        }
      });
      if (superClass) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(subClass, superClass);
        } else {
          /** @type {!Object} */
          subClass.__proto__ = superClass;
        }
      }
    }
    Object.defineProperty(state, "__esModule", {
      value : true
    });
    var _suggestList = (__webpack_require__(33), __webpack_require__(34));
    var _suggestList2 = _interopRequireDefault(_suggestList);
    var _DraggableCore = (__webpack_require__(31), __webpack_require__(32));
    var _DraggableCore2 = _interopRequireDefault(_DraggableCore);
    var _UiIcon = (__webpack_require__(15), __webpack_require__(16));
    var _UiIcon2 = _interopRequireDefault(_UiIcon);
    var _CalendarDay = (__webpack_require__(156), __webpack_require__(157));
    var _CalendarDay2 = _interopRequireDefault(_CalendarDay);
    var _suggestItem = (__webpack_require__(24), __webpack_require__(25));
    var _suggestItem2 = _interopRequireDefault(_suggestItem);
    var _createClass = function() {
      /**
       * @param {!Function} d
       * @param {string} props
       * @return {undefined}
       */
      function e(d, props) {
        /** @type {number} */
        var i = 0;
        for (; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          /** @type {boolean} */
          descriptor.configurable = true;
          if ("value" in descriptor) {
            /** @type {boolean} */
            descriptor.writable = true;
          }
          Object.defineProperty(d, descriptor.key, descriptor);
        }
      }
      return function(t, n, a) {
        return n && e(t.prototype, n), a && e(t, a), t;
      };
    }();
    var _prepareStyleProperties = __webpack_require__(0);
    var _prepareStyleProperties2 = _interopRequireDefault(_prepareStyleProperties);
    var _deepAssign = __webpack_require__(12);
    var _deepAssign2 = _interopRequireDefault(_deepAssign);
    var _normalizeDataUri = __webpack_require__(1);
    var _AboutPage = (_interopRequireDefault(_normalizeDataUri), __webpack_require__(121));
    var _AppDownload = (_interopRequireDefault(_AboutPage), __webpack_require__(45));
    var _AppDownload2 = _interopRequireDefault(_AppDownload);
    var _CalendarEvent = __webpack_require__(1068);
    var _CalendarEvent2 = _interopRequireDefault(_CalendarEvent);
    var _buildPageNumber = __webpack_require__(1074);
    var _buildPageNumber2 = _interopRequireDefault(_buildPageNumber);
    var Option = _suggestItem2.default.Option;
    var DropIndicator = _suggestItem2.default.OptGroup;
    var M = function(_EventEmitter) {
      /**
       * @param {?} data
       * @return {?}
       */
      function Agent(data) {
        _classCallCheck(this, Agent);
        var _this = _possibleConstructorReturn(this, (Agent.__proto__ || Object.getPrototypeOf(Agent)).call(this, data));
        return _this.handleChangePeriodo = function(applyToDivId) {
          _deepAssign2.default.put("/api/carrera/docente_habilitado", {
            id_docente : _this.state.usuario.id_docente,
            id_periodo : applyToDivId
          }).then(function(getFilesReply) {
            if (200 === getFilesReply.status && true === getFilesReply.data.habilitado) {
              if ("docente" === getFilesReply.data.rol || "jefe_proyecto" === getFilesReply.data.rol) {
                _deepAssign2.default.get("/api/periodo/" + applyToDivId).then(function(getFilesReply) {
                  if (200 === getFilesReply.status) {
                    var t = getFilesReply.data.anteproyectos.map(function($scope, canCreateDiscussions) {
                      return {
                        key : _AppDownload2.default.v1(),
                        id : $scope.id,
                        id_alumno : $scope.id_alumno,
                        dictamen : $scope.dictamen,
                        id_asesor_externo : $scope.id_asesor_externo,
                        id_periodo : $scope.id_periodo,
                        nombre : $scope.nombre,
                        objetivo_general : $scope.objetivo_general,
                        detalles_alumno : $scope.alumno,
                        detalles_asesor_externo : $scope.asesor_externo,
                        anteproyecto : $scope.path_file_anteproyecto,
                        revision : $scope.revisiones.find(function(canCreateDiscussions) {
                          return canCreateDiscussions.id_docente === _this.state.usuario.id_docente;
                        })
                      };
                    });
                    _this.setState({
                      renderRevision : _prepareStyleProperties2.default.createElement(_CalendarEvent2.default, {
                        periodo : getFilesReply.data,
                        usuario : _this.state.usuario,
                        anteproyectos : t
                      })
                    });
                  }
                });
              } else {
                if ("presidente_academia" === getFilesReply.data.rol) {
                  _deepAssign2.default.get("/api/periodo/" + applyToDivId).then(function(getFilesReply) {
                    if (200 === getFilesReply.status) {
                      var n = getFilesReply.data.anteproyectos.map(function($scope, canCreateDiscussions) {
                        var i = $scope.revisiones.filter(function(canCreateDiscussions) {
                          return "factible" === canCreateDiscussions.esFactible;
                        }).length;
                        /** @type {number} */
                        var n = Number((100 * i / $scope.revisiones.length).toFixed(1)) || 0;
                        var enableLink = _prepareStyleProperties2.default.createElement("span", null, $scope.revisiones.map(function(canCreateDiscussions, awsKey) {
                          return "factible" === canCreateDiscussions.esFactible ? _prepareStyleProperties2.default.createElement("p", {
                            key : awsKey
                          }, _prepareStyleProperties2.default.createElement(_CalendarDay2.default, {
                            status : "success",
                            text : canCreateDiscussions.docente.titulo + " " + canCreateDiscussions.docente.nombre + " " + canCreateDiscussions.docente.ap_paterno + " " + canCreateDiscussions.docente.ap_materno
                          })) : "correcci\u00f3n" === canCreateDiscussions.esFactible ? _prepareStyleProperties2.default.createElement("p", {
                            key : awsKey
                          }, _prepareStyleProperties2.default.createElement(_CalendarDay2.default, {
                            status : "processing",
                            text : canCreateDiscussions.docente.titulo + " " + canCreateDiscussions.docente.nombre + " " + canCreateDiscussions.docente.ap_paterno + " " + canCreateDiscussions.docente.ap_materno
                          })) : "no_factible" === canCreateDiscussions.esFactible ? _prepareStyleProperties2.default.createElement("p", {
                            key : awsKey
                          }, _prepareStyleProperties2.default.createElement(_CalendarDay2.default, {
                            status : "error",
                            text : canCreateDiscussions.docente.titulo + " " + canCreateDiscussions.docente.nombre + " " + canCreateDiscussions.docente.ap_paterno + " " + canCreateDiscussions.docente.ap_materno
                          })) : void 0;
                        }));
                        return update({
                          key : _AppDownload2.default.v1(),
                          id : $scope.id,
                          id_alumno : $scope.id_alumno,
                          dictamen : $scope.dictamen,
                          id_asesor_externo : $scope.id_asesor_externo,
                          id_periodo : $scope.id_periodo,
                          nombre : $scope.nombre,
                          objetivo_general : $scope.objetivo_general,
                          detalles_alumno : $scope.alumno,
                          detalles_asesor_externo : $scope.asesor_externo,
                          asesor_interno : $scope.asesor_interno,
                          anteproyecto : $scope.path_file_anteproyecto,
                          revisiones : enableLink,
                          porcentaje_factibilidad : n
                        }, "dictamen", $scope.dictamen);
                      });
                      _this.setState({
                        renderRevision : _prepareStyleProperties2.default.createElement(_buildPageNumber2.default, {
                          updatePeriodo : _this.updatePeriodo.bind(_this),
                          periodo : getFilesReply.data,
                          usuario : _this.state.usuario,
                          anteproyectos : n
                        }),
                        id_periodo : applyToDivId
                      });
                    }
                  });
                }
              }
            } else {
              _UiIcon2.default.warning("Permiso denegado, solicite permisos al jefe de departamento.");
            }
          });
        }, _this.updatePeriodo = function() {
          _deepAssign2.default.get("/api/periodo/" + _this.state.id_periodo).then(function(getFilesReply) {
            if (200 === getFilesReply.status) {
              var t = getFilesReply.data.anteproyectos.map(function($scope, canCreateDiscussions) {
                var i = $scope.revisiones.filter(function(canCreateDiscussions) {
                  return "factible" === canCreateDiscussions.esFactible;
                }).length;
                /** @type {number} */
                var n = Number((100 * i / $scope.revisiones.length).toFixed(1)) || 0;
                var enableLink = _prepareStyleProperties2.default.createElement("span", null, $scope.revisiones.map(function(canCreateDiscussions, awsKey) {
                  return "factible" === canCreateDiscussions.esFactible ? _prepareStyleProperties2.default.createElement("p", {
                    key : awsKey
                  }, _prepareStyleProperties2.default.createElement(_CalendarDay2.default, {
                    status : "success",
                    text : canCreateDiscussions.docente.titulo + " " + canCreateDiscussions.docente.nombre + " " + canCreateDiscussions.docente.ap_paterno + " " + canCreateDiscussions.docente.ap_materno
                  })) : "correcci\u00f3n" === canCreateDiscussions.esFactible ? _prepareStyleProperties2.default.createElement("p", {
                    key : awsKey
                  }, _prepareStyleProperties2.default.createElement(_CalendarDay2.default, {
                    status : "processing",
                    text : canCreateDiscussions.docente.titulo + " " + canCreateDiscussions.docente.nombre + " " + canCreateDiscussions.docente.ap_paterno + " " + canCreateDiscussions.docente.ap_materno
                  })) : "no_factible" === canCreateDiscussions.esFactible ? _prepareStyleProperties2.default.createElement("p", {
                    key : awsKey
                  }, _prepareStyleProperties2.default.createElement(_CalendarDay2.default, {
                    status : "error",
                    text : canCreateDiscussions.docente.titulo + " " + canCreateDiscussions.docente.nombre + " " + canCreateDiscussions.docente.ap_paterno + " " + canCreateDiscussions.docente.ap_materno
                  })) : void 0;
                }));
                return update({
                  key : _AppDownload2.default.v1(),
                  id : $scope.id,
                  id_alumno : $scope.id_alumno,
                  dictamen : $scope.dictamen,
                  id_asesor_externo : $scope.id_asesor_externo,
                  id_periodo : $scope.id_periodo,
                  nombre : $scope.nombre,
                  objetivo_general : $scope.objetivo_general,
                  detalles_alumno : $scope.alumno,
                  detalles_asesor_externo : $scope.asesor_externo,
                  asesor_interno : $scope.asesor_interno,
                  anteproyecto : $scope.path_file_anteproyecto,
                  revisiones : enableLink,
                  porcentaje_factibilidad : n
                }, "dictamen", $scope.dictamen);
              });
              _this.setState({
                renderRevision : _prepareStyleProperties2.default.createElement(_buildPageNumber2.default, {
                  updatePeriodo : _this.updatePeriodo.bind(_this),
                  periodo : getFilesReply.data,
                  usuario : _this.state.usuario,
                  anteproyectos : t
                }),
                id_periodo : _this.state.id_periodo
              });
            }
          });
        }, _this.state = {
          usuario : data.usuario,
          departamento : data.departamento,
          renderRevision : null,
          id_periodo : null
        }, _this;
      }
      return _inherits(Agent, _EventEmitter), _createClass(Agent, [{
        key : "render",
        value : function() {
          var thisState = this.state;
          var swimlaneToCheck = thisState.departamento;
          var sAlertElemsLeft = thisState.renderRevision;
          return _prepareStyleProperties2.default.createElement("div", null, _prepareStyleProperties2.default.createElement(_suggestList2.default, {
            type : "flex"
          }, _prepareStyleProperties2.default.createElement(_DraggableCore2.default, {
            xs : 24,
            lg : 6
          }, _prepareStyleProperties2.default.createElement("p", null, "Seleccione el periodo"), _prepareStyleProperties2.default.createElement(_suggestItem2.default, {
            onChange : this.handleChangePeriodo,
            style : {
              width : "100%"
            }
          }, swimlaneToCheck.carreras.map(function($scope, header) {
            return _prepareStyleProperties2.default.createElement(DropIndicator, {
              key : header,
              label : $scope.nombre
            }, $scope.periodos.map(function(domvalue, s) {
              return _prepareStyleProperties2.default.createElement(Option, {
                key : header + "-" + s,
                value : "" + domvalue.id
              }, domvalue.periodo + " " + domvalue.ciclo);
            }));
          })))), sAlertElemsLeft);
        }
      }]), Agent;
    }(_prepareStyleProperties.Component);
    state.default = M;
  },
  490 : function(cond, t, __webpack_require__) {
    /**
     * @param {!Object} obj
     * @return {?}
     */
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default : obj
      };
    }
    /**
     * @param {!AudioNode} instance
     * @param {!Function} Constructor
     * @return {undefined}
     */
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    /**
     * @param {string} self
     * @param {string} call
     * @return {?}
     */
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return !call || "object" != typeof call && "function" != typeof call ? self : call;
    }
    /**
     * @param {!Object} subClass
     * @param {!Object} superClass
     * @return {undefined}
     */
    function _inherits(subClass, superClass) {
      if ("function" != typeof superClass && null !== superClass) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      /** @type {!Object} */
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor : {
          value : subClass,
          enumerable : false,
          writable : true,
          configurable : true
        }
      });
      if (superClass) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(subClass, superClass);
        } else {
          /** @type {!Object} */
          subClass.__proto__ = superClass;
        }
      }
    }
    Object.defineProperty(t, "__esModule", {
      value : true
    });
    var _suggestList = (__webpack_require__(148), __webpack_require__(150));
    var _suggestList2 = _interopRequireDefault(_suggestList);
    var _DraggableCore = (__webpack_require__(33), __webpack_require__(34));
    var _DraggableCore2 = _interopRequireDefault(_DraggableCore);
    var _deepAssign = (__webpack_require__(31), __webpack_require__(32));
    var _deepAssign2 = _interopRequireDefault(_deepAssign);
    var _UiIcon = (__webpack_require__(15), __webpack_require__(16));
    var _UiIcon2 = _interopRequireDefault(_UiIcon);
    var _suggestItem = (__webpack_require__(24), __webpack_require__(25));
    var _suggestItem2 = _interopRequireDefault(_suggestItem);
    var _createClass = function() {
      /**
       * @param {!Function} d
       * @param {string} props
       * @return {undefined}
       */
      function e(d, props) {
        /** @type {number} */
        var i = 0;
        for (; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          /** @type {boolean} */
          descriptor.configurable = true;
          if ("value" in descriptor) {
            /** @type {boolean} */
            descriptor.writable = true;
          }
          Object.defineProperty(d, descriptor.key, descriptor);
        }
      }
      return function(t, n, a) {
        return n && e(t.prototype, n), a && e(t, a), t;
      };
    }();
    var _prepareStyleProperties = __webpack_require__(0);
    var _prepareStyleProperties2 = _interopRequireDefault(_prepareStyleProperties);
    var _classlist = __webpack_require__(12);
    var _cacheManager2 = _interopRequireDefault(_classlist);
    var _normalizeDataUri = __webpack_require__(1);
    var _AboutPage = (_interopRequireDefault(_normalizeDataUri), __webpack_require__(121));
    var _AppDownload = (_interopRequireDefault(_AboutPage), __webpack_require__(45));
    var _AppDownload2 = _interopRequireDefault(_AppDownload);
    var _CalendarDay = __webpack_require__(1076);
    var _CalendarDay2 = _interopRequireDefault(_CalendarDay);
    var Option = _suggestItem2.default.Option;
    var DropIndicator = _suggestItem2.default.OptGroup;
    var offsetFromCenter = function(_EventEmitter) {
      /**
       * @param {?} data
       * @return {?}
       */
      function Agent(data) {
        _classCallCheck(this, Agent);
        var _this = _possibleConstructorReturn(this, (Agent.__proto__ || Object.getPrototypeOf(Agent)).call(this, data));
        return _this.handleChangePeriodo = function(canCreateDiscussions) {
          _cacheManager2.default.get("/api/periodo/" + canCreateDiscussions + "/proyectos").then(function(getFilesReply) {
            if (200 === getFilesReply.status) {
              _this.setState({
                periodo : getFilesReply.data
              });
            }
          });
        }, _this.handleChangeResidente = function(applyToDivId) {
          _this.setState({
            spin : true,
            renderProyecto : null
          });
          var t = _this.state.usuario;
          _cacheManager2.default.get("/api/alumno/revision_seguimiento/" + applyToDivId).then(function(getFilesReply) {
            if (200 === getFilesReply.status) {
              _this.setState({
                renderProyecto : _prepareStyleProperties2.default.createElement(_CalendarDay2.default, {
                  key : _AppDownload2.default.v1(),
                  updateProyecto : _this.updateProyecto.bind(_this),
                  proyecto : getFilesReply.data,
                  usuario : t
                }),
                id_proyecto : applyToDivId,
                spin : false
              });
            } else {
              _UiIcon2.default.warning("Ops, ocurrio un error interno, favor de reportar al administrador.");
            }
          });
        }, _this.updateProyecto = function() {
          _this.setState({
            spin : true,
            renderProyecto : null
          });
          var $scope = _this.state;
          var $scopeId = $scope.usuario;
          var sheetKey = $scope.id_proyecto;
          _cacheManager2.default.get("/api/alumno/revision_seguimiento/" + sheetKey).then(function(getFilesReply) {
            if (200 === getFilesReply.status) {
              _this.setState({
                renderProyecto : _prepareStyleProperties2.default.createElement(_CalendarDay2.default, {
                  key : _AppDownload2.default.v1(),
                  updateProyecto : _this.updateProyecto.bind(_this),
                  proyecto : getFilesReply.data,
                  usuario : $scopeId
                }),
                id_proyecto : sheetKey,
                spin : false
              });
            } else {
              _UiIcon2.default.warning("Ops, ocurrio un error interno, favor de reportar al administrador.");
            }
          });
        }, _this.state = {
          usuario : data.usuario,
          carreras : data.carreras,
          renderProyecto : null,
          periodo : null,
          id_proyecto : null,
          spin : false
        }, _this;
      }
      return _inherits(Agent, _EventEmitter), _createClass(Agent, [{
        key : "render",
        value : function() {
          var obj = this.state;
          var dependencyNames = obj.carreras;
          var email = obj.renderProyecto;
          var item = obj.periodo;
          var nB = obj.spin;
          return _prepareStyleProperties2.default.createElement("div", null, _prepareStyleProperties2.default.createElement(_DraggableCore2.default, {
            type : "flex",
            gutter : 30
          }, _prepareStyleProperties2.default.createElement(_deepAssign2.default, {
            xs : 24,
            lg : 6
          }, _prepareStyleProperties2.default.createElement("p", null, "Seleccione el periodo"), _prepareStyleProperties2.default.createElement(_suggestItem2.default, {
            placeholder : "Seleccione un periodo",
            onChange : this.handleChangePeriodo,
            style : {
              width : "100%"
            }
          }, dependencyNames.map(function($scope, awsKey) {
            return _prepareStyleProperties2.default.createElement(DropIndicator, {
              key : awsKey,
              label : $scope.nombre
            }, $scope.periodos.map(function(domvalue, canCreateDiscussions) {
              return _prepareStyleProperties2.default.createElement(Option, {
                key : _AppDownload2.default.v1(),
                value : "" + domvalue.id
              }, domvalue.periodo + " " + domvalue.ciclo);
            }));
          }))), _prepareStyleProperties2.default.createElement(_deepAssign2.default, {
            xs : 24,
            lg : 10
          }, _prepareStyleProperties2.default.createElement("p", null, "Seleccione un residente "), _prepareStyleProperties2.default.createElement(_suggestItem2.default, {
            showSearch : true,
            placeholder : "Seleccione un residente",
            onChange : this.handleChangeResidente,
            optionFilterProp : "children",
            style : {
              width : "100%"
            }
          }, item ? item.anteproyectos.map(function(sentRawMessage, canCreateDiscussions) {
            return _prepareStyleProperties2.default.createElement(Option, {
              key : _AppDownload2.default.v1(),
              value : "" + sentRawMessage.alumno.id
            }, " " + sentRawMessage.alumno.no_control + " - " + sentRawMessage.alumno.nombre + " " + sentRawMessage.alumno.ap_paterno + " " + sentRawMessage.alumno.ap_materno);
          }) : null))), _prepareStyleProperties2.default.createElement(_DraggableCore2.default, null, _prepareStyleProperties2.default.createElement(_deepAssign2.default, {
            xs : 24,
            lg : 24,
            style : {
              textAlign : "center"
            }
          }, true === nB ? _prepareStyleProperties2.default.createElement(_suggestList2.default, {
            style : {
              marginTop : 20,
              marginBottom : 20
            },
            size : "large",
            tip : "Cargado..."
          }) : null)), email);
        }
      }]), Agent;
    }(_prepareStyleProperties.Component);
    t.default = offsetFromCenter;
  },
  495 : function(allegedI, arg, __webpack_require__) {
    /**
     * @param {!Object} obj
     * @return {?}
     */
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default : obj
      };
    }
    /**
     * @param {!AudioNode} instance
     * @param {!Function} Constructor
     * @return {undefined}
     */
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    /**
     * @param {string} self
     * @param {string} call
     * @return {?}
     */
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return !call || "object" != typeof call && "function" != typeof call ? self : call;
    }
    /**
     * @param {!Object} subClass
     * @param {!Object} superClass
     * @return {undefined}
     */
    function _inherits(subClass, superClass) {
      if ("function" != typeof superClass && null !== superClass) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      /** @type {!Object} */
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor : {
          value : subClass,
          enumerable : false,
          writable : true,
          configurable : true
        }
      });
      if (superClass) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(subClass, superClass);
        } else {
          /** @type {!Object} */
          subClass.__proto__ = superClass;
        }
      }
    }
    Object.defineProperty(arg, "__esModule", {
      value : true
    });
    var _deepAssign = (__webpack_require__(15), __webpack_require__(16));
    var _deepAssign2 = _interopRequireDefault(_deepAssign);
    var _suggestItem = (__webpack_require__(28), __webpack_require__(29));
    var _suggestItem2 = _interopRequireDefault(_suggestItem);
    var _normalizeDataUri = (__webpack_require__(24), __webpack_require__(25));
    var _normalizeDataUri2 = _interopRequireDefault(_normalizeDataUri);
    var _UiIcon = (__webpack_require__(18), __webpack_require__(22));
    var _UiIcon2 = _interopRequireDefault(_UiIcon);
    var _classlist = (__webpack_require__(19), __webpack_require__(20));
    var params = _interopRequireDefault(_classlist);
    var _createClass = function() {
      /**
       * @param {!Function} d
       * @param {string} props
       * @return {undefined}
       */
      function e(d, props) {
        /** @type {number} */
        var i = 0;
        for (; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          /** @type {boolean} */
          descriptor.configurable = true;
          if ("value" in descriptor) {
            /** @type {boolean} */
            descriptor.writable = true;
          }
          Object.defineProperty(d, descriptor.key, descriptor);
        }
      }
      return function(t, n, a) {
        return n && e(t.prototype, n), a && e(t, a), t;
      };
    }();
    var _prepareStyleProperties = __webpack_require__(0);
    var _prepareStyleProperties2 = _interopRequireDefault(_prepareStyleProperties);
    var _Trans = (__webpack_require__(11), __webpack_require__(12));
    var _Trans2 = _interopRequireDefault(_Trans);
    var data = params.default.Item;
    var FormioElement = (_UiIcon2.default.Group, _normalizeDataUri2.default.Option, params.default.create()(function(config) {
      var visible = config.visible;
      var onCancel = config.onCancel;
      var onCreate = config.onCreate;
      var options = config.form;
      var lint = options.getFieldDecorator;
      return _prepareStyleProperties2.default.createElement(_suggestItem2.default, {
        visible : visible,
        title : "Agregar observaci\u00f3n del seguimiento",
        okText : "Guardar",
        onCancel : onCancel,
        onOk : onCreate,
        width : 600
      }, _prepareStyleProperties2.default.createElement(params.default, {
        layout : "vertical"
      }, _prepareStyleProperties2.default.createElement(data, {
        label : "Descripci\u00f3n de la observaci\u00f3n"
      }, lint("observacion", {
        rules : [{
          required : true,
          message : "La observaci\u00f3n debe llevar una descripci\u00f3n"
        }, {
          min : 5,
          message : "El minimo de caracteres es de 5."
        }, {
          max : 500,
          message : "El mensaje debe tener como maximo 500 caracteres."
        }]
      })(_prepareStyleProperties2.default.createElement(_UiIcon2.default.TextArea, {
        style : {
          width : "100%"
        },
        placeholder : "Descripci\u00f3n de la observacion...",
        rows : 4
      })))));
    }));
    var group = function(_EventEmitter) {
      /**
       * @param {!Object} element
       * @return {?}
       */
      function Agent(element) {
        _classCallCheck(this, Agent);
        var $scope = _possibleConstructorReturn(this, (Agent.__proto__ || Object.getPrototypeOf(Agent)).call(this, element));
        return $scope.showModal = function() {
          $scope.setState({
            visible : true
          });
        }, $scope.handleCancel = function() {
          $scope.form.resetFields();
          $scope.setState({
            visible : false
          });
        }, $scope.handleCreate = function() {
          var form = $scope.form;
          form.validateFields(function(canCreateDiscussions, n) {
            if (!canCreateDiscussions) {
              _Trans2.default.post("/api/proyecto/seguimiento/observacion", {
                observacion : n.observacion,
                id_seguimiento : $scope.state.id_seguimiento,
                id_docente : $scope.state.usuario.id_docente
              }).then(function(getFilesReply) {
                if (200 === getFilesReply.status) {
                  _deepAssign2.default.success("Observaci\u00f3n agregada correctamente");
                  $scope.setState({
                    visible : false
                  });
                  form.resetFields();
                  $scope.props.updateSeguimientos();
                  $scope.props.updateProyecto();
                } else {
                  _suggestItem2.default.error({
                    title : "Error al agregar la observaci\u00f3n. Revisar los siguientes campos",
                    content : _prepareStyleProperties2.default.createElement("div", null, getFilesReply.data.errores),
                    onOk : function() {
                    }
                  });
                }
              }).catch(function(mnemonics) {
                _deepAssign2.default.error(mnemonics);
              });
            }
          });
        }, $scope.saveFormRef = function(data) {
          /** @type {!Object} */
          $scope.form = data;
        }, $scope.state = {
          visible : element.visible,
          id_seguimiento : element.id_seguimiento,
          usuario : element.usuario
        }, $scope;
      }
      return _inherits(Agent, _EventEmitter), _createClass(Agent, [{
        key : "componentWillReceiveProps",
        value : function($scope) {
          var vis = $scope.visible;
          var $scopeId = $scope.id_seguimiento;
          var imageChanges = $scope.usuario;
          this.setState({
            visible : vis,
            id_seguimiento : $scopeId,
            usuario : imageChanges
          });
        }
      }, {
        key : "render",
        value : function() {
          return _prepareStyleProperties2.default.createElement("div", null, _prepareStyleProperties2.default.createElement(FormioElement, {
            ref : this.saveFormRef,
            visible : this.state.visible,
            onCancel : this.handleCancel,
            onCreate : this.handleCreate
          }));
        }
      }]), Agent;
    }(_prepareStyleProperties.Component);
    arg.default = group;
  },
  496 : function(cond, t, __webpack_require__) {
    /**
     * @param {!Object} obj
     * @return {?}
     */
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default : obj
      };
    }
    /**
     * @param {!AudioNode} instance
     * @param {!Function} Constructor
     * @return {undefined}
     */
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    /**
     * @param {string} self
     * @param {string} call
     * @return {?}
     */
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return !call || "object" != typeof call && "function" != typeof call ? self : call;
    }
    /**
     * @param {!Object} subClass
     * @param {!Object} superClass
     * @return {undefined}
     */
    function _inherits(subClass, superClass) {
      if ("function" != typeof superClass && null !== superClass) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      /** @type {!Object} */
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor : {
          value : subClass,
          enumerable : false,
          writable : true,
          configurable : true
        }
      });
      if (superClass) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(subClass, superClass);
        } else {
          /** @type {!Object} */
          subClass.__proto__ = superClass;
        }
      }
    }
    Object.defineProperty(t, "__esModule", {
      value : true
    });
    var _suggestList = (__webpack_require__(33), __webpack_require__(34));
    var _suggestList2 = _interopRequireDefault(_suggestList);
    var _DraggableCore = (__webpack_require__(148), __webpack_require__(150));
    var _DraggableCore2 = _interopRequireDefault(_DraggableCore);
    var _deepAssign = (__webpack_require__(31), __webpack_require__(32));
    var _deepAssign2 = _interopRequireDefault(_deepAssign);
    var _suggestItem = (__webpack_require__(24), __webpack_require__(25));
    var _suggestItem2 = _interopRequireDefault(_suggestItem);
    var _createClass = function() {
      /**
       * @param {!Function} d
       * @param {string} props
       * @return {undefined}
       */
      function e(d, props) {
        /** @type {number} */
        var i = 0;
        for (; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          /** @type {boolean} */
          descriptor.configurable = true;
          if ("value" in descriptor) {
            /** @type {boolean} */
            descriptor.writable = true;
          }
          Object.defineProperty(d, descriptor.key, descriptor);
        }
      }
      return function(t, n, a) {
        return n && e(t.prototype, n), a && e(t, a), t;
      };
    }();
    var _prepareStyleProperties = __webpack_require__(0);
    var _prepareStyleProperties2 = _interopRequireDefault(_prepareStyleProperties);
    var _normalizeDataUri = __webpack_require__(12);
    var _normalizeDataUri2 = _interopRequireDefault(_normalizeDataUri);
    var _UiIcon = __webpack_require__(45);
    var _UiIcon2 = _interopRequireDefault(_UiIcon);
    var _CalendarDay = __webpack_require__(1102);
    var _CalendarDay2 = _interopRequireDefault(_CalendarDay);
    var Option = _suggestItem2.default.Option;
    var offsetFromCenter = function(_EventEmitter) {
      /**
       * @param {?} data
       * @return {?}
       */
      function Agent(data) {
        _classCallCheck(this, Agent);
        var _this = _possibleConstructorReturn(this, (Agent.__proto__ || Object.getPrototypeOf(Agent)).call(this, data));
        return _this.onChangeResidente = function(applyToDivId) {
          _this.setState({
            spin : true,
            renderProyecto : null
          });
          _normalizeDataUri2.default.get("/api/alumno/proyecto_para_asesor_interno/" + applyToDivId).then(function(getFilesReply) {
            if (200 === getFilesReply.status) {
              _this.setState({
                renderProyecto : _prepareStyleProperties2.default.createElement(_CalendarDay2.default, {
                  key : _UiIcon2.default.v1(),
                  updateProyecto : _this.updateProyectoResidente.bind(_this),
                  proyecto : getFilesReply.data,
                  usuario : _this.state.usuario
                }),
                id_proyecto : applyToDivId,
                spin : false
              });
            }
          });
        }, _this.updateProyectoResidente = function() {
          _this.setState({
            spin : true,
            renderProyecto : null
          });
          _normalizeDataUri2.default.get("/api/alumno/proyecto_para_asesor_interno/" + _this.state.id_proyecto).then(function(getFilesReply) {
            if (200 === getFilesReply.status) {
              _this.setState({
                renderProyecto : _prepareStyleProperties2.default.createElement(_CalendarDay2.default, {
                  key : _UiIcon2.default.v1(),
                  updateProyecto : _this.updateProyectoResidente.bind(_this),
                  proyecto : getFilesReply.data,
                  usuario : _this.state.usuario
                }),
                spin : false
              });
            }
          });
        }, _this.state = {
          proyectos : data.proyectos,
          usuario : data.usuario,
          renderProyecto : null,
          id_proyecto : null,
          spin : false
        }, _this;
      }
      return _inherits(Agent, _EventEmitter), _createClass(Agent, [{
        key : "componentWillReceiveProps",
        value : function(recB) {
          this.setState({
            proyectos : recB.proyectos,
            usuario : props.usuario,
            renderProyecto : null,
            id_proyecto : null,
            spin : false
          });
        }
      }, {
        key : "render",
        value : function() {
          var that = this.state;
          var malakh = that.proyectos;
          var input = that.renderProyecto;
          var outgoingController = that.spin;
          return _prepareStyleProperties2.default.createElement(_suggestList2.default, null, _prepareStyleProperties2.default.createElement(_deepAssign2.default, {
            xs : 24,
            lg : 24
          }, _prepareStyleProperties2.default.createElement(_suggestItem2.default, {
            showSearch : true,
            optionFilterProp : "children",
            filterOption : function(evt, op) {
              return op.props.children.toLowerCase().indexOf(evt.toLowerCase()) >= 0;
            },
            placeholder : "Seleccione al residente",
            onChange : this.onChangeResidente,
            style : {
              width : 400
            }
          }, malakh.map(function(domvalue, awsKey) {
            return _prepareStyleProperties2.default.createElement(Option, {
              key : awsKey,
              value : "" + domvalue.id
            }, domvalue.anteproyecto.alumno.no_control + " - " + domvalue.anteproyecto.alumno.nombre + " " + domvalue.anteproyecto.alumno.ap_paterno + " " + domvalue.anteproyecto.alumno.ap_materno);
          }))), _prepareStyleProperties2.default.createElement(_deepAssign2.default, {
            xs : 24,
            lg : 24,
            style : {
              marginTop : 25
            }
          }, _prepareStyleProperties2.default.createElement(_suggestList2.default, null, _prepareStyleProperties2.default.createElement(_deepAssign2.default, {
            xs : 24,
            lg : 24,
            style : {
              textAlign : "center"
            }
          }, true === outgoingController ? _prepareStyleProperties2.default.createElement(_DraggableCore2.default, {
            style : {
              marginTop : 20,
              marginBottom : 20
            },
            size : "large",
            tip : "Cargando..."
          }) : null)), input));
        }
      }]), Agent;
    }(_prepareStyleProperties.Component);
    t.default = offsetFromCenter;
  },
  497 : function(cond, t, __webpack_require__) {
    /**
     * @param {!Object} obj
     * @return {?}
     */
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default : obj
      };
    }
    /**
     * @param {!AudioNode} instance
     * @param {!Function} Constructor
     * @return {undefined}
     */
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    /**
     * @param {string} self
     * @param {string} call
     * @return {?}
     */
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return !call || "object" != typeof call && "function" != typeof call ? self : call;
    }
    /**
     * @param {!Object} subClass
     * @param {!Object} superClass
     * @return {undefined}
     */
    function _inherits(subClass, superClass) {
      if ("function" != typeof superClass && null !== superClass) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      /** @type {!Object} */
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor : {
          value : subClass,
          enumerable : false,
          writable : true,
          configurable : true
        }
      });
      if (superClass) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(subClass, superClass);
        } else {
          /** @type {!Object} */
          subClass.__proto__ = superClass;
        }
      }
    }
    Object.defineProperty(t, "__esModule", {
      value : true
    });
    var _normalizeDataUri = (__webpack_require__(156), __webpack_require__(157));
    var _normalizeDataUri2 = _interopRequireDefault(_normalizeDataUri);
    var _UiIcon = (__webpack_require__(28), __webpack_require__(29));
    var _UiIcon2 = _interopRequireDefault(_UiIcon);
    var _Logger = (__webpack_require__(15), __webpack_require__(16));
    var _Logger2 = _interopRequireDefault(_Logger);
    var _AboutPage = (__webpack_require__(33), __webpack_require__(34));
    var _AboutPage2 = _interopRequireDefault(_AboutPage);
    var _AppDownload = (__webpack_require__(31), __webpack_require__(32));
    var _AppDownload2 = _interopRequireDefault(_AppDownload);
    var _CalendarDay = (__webpack_require__(48), __webpack_require__(49));
    var _CalendarDay2 = _interopRequireDefault(_CalendarDay);
    var _CalendarEvent = (__webpack_require__(37), __webpack_require__(36));
    var _CalendarEvent2 = _interopRequireDefault(_CalendarEvent);
    var _buildPageNumber = (__webpack_require__(77), __webpack_require__(78));
    var _buildPageNumber2 = _interopRequireDefault(_buildPageNumber);
    var _suggestItem = (__webpack_require__(18), __webpack_require__(22));
    var _suggestItem2 = _interopRequireDefault(_suggestItem);
    var _CalendarTitle = (__webpack_require__(87), __webpack_require__(74));
    var _CalendarTitle2 = _interopRequireDefault(_CalendarTitle);
    var _parametrize = (__webpack_require__(35), __webpack_require__(13));
    var _parametrize2 = _interopRequireDefault(_parametrize);
    var _suggestList = (__webpack_require__(230), __webpack_require__(231));
    var _suggestList2 = _interopRequireDefault(_suggestList);
    var _DraggableCore = (__webpack_require__(24), __webpack_require__(25));
    var _DraggableCore2 = _interopRequireDefault(_DraggableCore);
    var _toHyphenCase = (__webpack_require__(19), __webpack_require__(20));
    var params = _interopRequireDefault(_toHyphenCase);
    var _RendererPatcher = (__webpack_require__(1117), __webpack_require__(1120));
    var _RendererPatcher2 = _interopRequireDefault(_RendererPatcher);
    var _createClass = function() {
      /**
       * @param {!Function} d
       * @param {string} props
       * @return {undefined}
       */
      function e(d, props) {
        /** @type {number} */
        var i = 0;
        for (; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          /** @type {boolean} */
          descriptor.configurable = true;
          if ("value" in descriptor) {
            /** @type {boolean} */
            descriptor.writable = true;
          }
          Object.defineProperty(d, descriptor.key, descriptor);
        }
      }
      return function(t, n, a) {
        return n && e(t.prototype, n), a && e(t, a), t;
      };
    }();
    var _prepareStyleProperties = __webpack_require__(0);
    var _prepareStyleProperties2 = _interopRequireDefault(_prepareStyleProperties);
    var _deepAssign = __webpack_require__(12);
    var _deepAssign2 = _interopRequireDefault(_deepAssign);
    var _UiRippleInk = __webpack_require__(1);
    var _UiRippleInk2 = _interopRequireDefault(_UiRippleInk);
    var TreeNode = _RendererPatcher2.default.TreeNode;
    var Route = params.default.Item;
    var NumberPicker = _DraggableCore2.default.Option;
    var Panel = _suggestList2.default.Panel;
    var DropIndicator = params.default.create()(function(self) {
      var handleSubmit = self.handleSubmit;
      var my_form = self.form;
      var $scope = self.anteproyecto;
      var route = self.empresas;
      var boxInput = self.normFile;
      var _onAvatarBeforeUpload = self.beforeUpload;
      var summonTheSqwares = my_form.getFieldDecorator;
      return _prepareStyleProperties2.default.createElement(params.default, {
        layout : "vertical",
        onSubmit : handleSubmit
      }, _prepareStyleProperties2.default.createElement(Route, {
        label : _prepareStyleProperties2.default.createElement("span", null, "Nombre del anteproyecto\u00a0", _prepareStyleProperties2.default.createElement(_CalendarTitle2.default, {
          title : "El nombre del anteproyecto debe tener un formato conciso."
        }, _prepareStyleProperties2.default.createElement(_parametrize2.default, {
          type : "question-circle-o"
        }))),
        hasFeedback : true
      }, summonTheSqwares("nombre", {
        rules : [{
          required : true,
          message : "El anteproyecto debe tener un nombre"
        }],
        initialValue : $scope.nombre ? $scope.nombre : ""
      })(_prepareStyleProperties2.default.createElement(_suggestItem2.default, {
        placeholder : "Ingrese el nombre del anteproyecto",
        type : "text"
      }))), _prepareStyleProperties2.default.createElement(Route, {
        label : "Objetivo general del anteproyecto",
        hasFeedback : true
      }, summonTheSqwares("objetivo_general", {
        rules : [{
          required : true,
          message : "El anteproyecto debe tener un objetivo general."
        }],
        initialValue : $scope.objetivo_general ? $scope.objetivo_general : ""
      })(_prepareStyleProperties2.default.createElement(_suggestItem2.default.TextArea, {
        placeholder : "Escriba aqui el objetivo general",
        type : "text",
        autosize : {
          minRows : 2,
          maxRows : 6
        }
      }))), _prepareStyleProperties2.default.createElement(Route, {
        label : "Origen del proyecto",
        hasFeedback : true
      }, summonTheSqwares("origen", {
        rules : [{
          required : true,
          message : "Debe indicar el origen del anteproyecto."
        }],
        initialValue : $scope.origen ? $scope.origen : ""
      })(_prepareStyleProperties2.default.createElement(_DraggableCore2.default, {
        placeholder : "Seleccione el origen de su proyecto"
      }, _prepareStyleProperties2.default.createElement(NumberPicker, {
        value : "Banco de proyectos"
      }, "Banco de proyectos"), _prepareStyleProperties2.default.createElement(NumberPicker, {
        value : "Propuesta propia"
      }, "Propuesta propia"), _prepareStyleProperties2.default.createElement(NumberPicker, {
        value : "Trabajador"
      }, "Trabajador")))), _prepareStyleProperties2.default.createElement(Route, {
        label : _prepareStyleProperties2.default.createElement("span", null, "Asesor externo\u00a0", _prepareStyleProperties2.default.createElement(_CalendarTitle2.default, {
          title : "Si su asesor o empresa no esta en el catalogo,solicitar al jefe de su departamento."
        }, _prepareStyleProperties2.default.createElement(_parametrize2.default, {
          type : "question-circle-o"
        }))),
        hasFeedback : true
      }, summonTheSqwares("id_asesor_externo", {
        rules : [{
          required : true,
          message : "El anteproyecto debe tener un asesor externo"
        }],
        initialValue : $scope.id_asesor_externo ? "" + $scope.id_asesor_externo : ""
      })(_prepareStyleProperties2.default.createElement(_RendererPatcher2.default, {
        showSearch : true,
        dropdownStyle : {
          maxHeight : 400,
          overflow : "auto"
        },
        placeholder : "Busque por nombre de empresa o el nombre de su asesor externo.",
        allowClear : true,
        treeDefaultExpandAll : true,
        filterTreeNode : function(cond, page) {
          return page.props.title.toLowerCase().indexOf(cond.toLowerCase()) >= 0;
        }
      }, route ? route.map(function($scope, id) {
        return _prepareStyleProperties2.default.createElement(TreeNode, {
          title : $scope.nombre,
          key : "" + id,
          value : null,
          disabled : true
        }, $scope.asesor_externos.map(function($routeParams, a) {
          return _prepareStyleProperties2.default.createElement(TreeNode, {
            value : "" + $routeParams.id,
            title : $routeParams.nombre,
            key : a + "_" + id
          });
        }));
      }) : null))), _prepareStyleProperties2.default.createElement(Route, {
        label : "Seleccione su anteproyecto"
      }, _prepareStyleProperties2.default.createElement("div", {
        className : "dropbox"
      }, summonTheSqwares("file_anteproyecto", {
        valuePropName : "fileList",
        getValueFromEvent : boxInput
      })(_prepareStyleProperties2.default.createElement(_buildPageNumber2.default.Dragger, {
        name : "fileAnteproyecto",
        action : "/api/alumno/file_anteproyecto/" + $scope.id,
        beforeUpload : _onAvatarBeforeUpload
      }, _prepareStyleProperties2.default.createElement("p", {
        className : "ant-upload-drag-icon"
      }, _prepareStyleProperties2.default.createElement(_parametrize2.default, {
        type : "inbox"
      })), _prepareStyleProperties2.default.createElement("p", {
        className : "ant-upload-text"
      }, "Da click para seleccionar o arrastra tu archivo .pdf"), _prepareStyleProperties2.default.createElement("p", {
        className : "ant-upload-hint"
      }, "Tu archivo debe pesar menos de 10 MB."))))), _prepareStyleProperties2.default.createElement(_CalendarEvent2.default, {
        size : "large",
        icon : "save",
        type : "primary",
        htmlType : "submit",
        style : {
          marginTop : 40,
          marginBottom : 20
        }
      }, "Guardar cambios"), _prepareStyleProperties2.default.createElement(_AboutPage2.default, null, _prepareStyleProperties2.default.createElement(_AppDownload2.default, {
        lg : 24,
        xs : 24
      }, null != $scope.nombre & null != $scope.origen & null != $scope.id_asesor_externo ? _prepareStyleProperties2.default.createElement(_CalendarEvent2.default, {
        icon : "file-pdf"
      }, _prepareStyleProperties2.default.createElement("a", {
        href : "/api/alumno/" + $scope.id_alumno + "/solicitud_residencia",
        target : "_blank"
      }, "Generar solicitud de residencia")) : _prepareStyleProperties2.default.createElement(_CalendarDay2.default, {
        type : "info",
        message : "Faltan algunos datos para poder generar su solicitud de residencia",
        showIcon : true
      }))));
    });
    var offsetFromCenter = function(_EventEmitter) {
      /**
       * @param {?} data
       * @return {?}
       */
      function Agent(data) {
        _classCallCheck(this, Agent);
        var _this = _possibleConstructorReturn(this, (Agent.__proto__ || Object.getPrototypeOf(Agent)).call(this, data));
        return _this.normFile = function(info) {
          return Array.isArray(info) ? info : info && info.fileList;
        }, _this.saveFormRef = function(data) {
          /** @type {!Object} */
          _this.form = data;
        }, _this.handleSubmit = function(event) {
          event.preventDefault();
          var args = _this.form;
          var wunderlist_list = _this.state.anteproyecto;
          args.validateFields(function(canCreateDiscussions, $routeParams) {
            if (!canCreateDiscussions) {
              var runningConnector = $routeParams.id_asesor_externo;
              var nombre = $routeParams.nombre;
              var topicCategoryUrl = $routeParams.origen;
              var topicMenuItem = $routeParams.objetivo_general;
              _deepAssign2.default.put("/api/alumno/" + wunderlist_list.id + "/anteproyecto", {
                id_asesor_externo : runningConnector,
                nombre : nombre,
                objetivo_general : topicMenuItem,
                origen : topicCategoryUrl
              }).then(function(getFilesReply) {
                if (200 === getFilesReply.status) {
                  _Logger2.default.success("Anteproyecto actualizado satisfactoriamente!");
                } else {
                  _UiIcon2.default.error({
                    title : "Error no se pudieron guardar los cambios. Revisar los siguientes campos",
                    content : _prepareStyleProperties2.default.createElement("div", null, getFilesReply.data.errores),
                    onOk : function() {
                    }
                  });
                }
              }).catch(function(mnemonics) {
                _Logger2.default.error(mnemonics);
              });
            }
          });
        }, _this.state = {
          anteproyecto : data.anteproyecto,
          empresas : null
        }, _this;
      }
      return _inherits(Agent, _EventEmitter), _createClass(Agent, [{
        key : "componentDidMount",
        value : function() {
          var boilerStateMachine = this;
          _deepAssign2.default.get("/api/empresa").then(function(getFilesReply) {
            if (200 == getFilesReply.status) {
              boilerStateMachine.setState({
                empresas : getFilesReply.data.empresas
              });
            }
          });
        }
      }, {
        key : "beforeUpload",
        value : function(e) {
          /** @type {boolean} */
          var k = "application/pdf" === e.type;
          if (!k) {
            _Logger2.default.error("El archivo debe ser PDF!");
          }
          /** @type {boolean} */
          var d = e.size / 1024 / 1024 < 10;
          return d || _Logger2.default.error("El archivo debe tener un tama\u00f1o menor de 10 MB."), k && d;
        }
      }, {
        key : "render",
        value : function() {
          var state = this.state;
          var swimlaneToCheck = state.anteproyecto;
          var idnum2expr = state.empresas;
          var css = {
            background : "#f4f8f9",
            borderRadius : 10,
            marginBottom : 24,
            border : 0,
            overflow : "hidden"
          };
          swimlaneToCheck.periodo.fecha_inicio_entrega_anteproyecto;
          swimlaneToCheck.periodo.fecha_fin_entrega_anteproyecto;
          (0, _UiRippleInk2.default)().format("YYYY-MM-DD");
          return _prepareStyleProperties2.default.createElement("div", null, _prepareStyleProperties2.default.createElement(_AboutPage2.default, {
            type : "flex",
            justify : "center"
          }, _prepareStyleProperties2.default.createElement(_AppDownload2.default, {
            xs : 24,
            lg : 20,
            style : {
              marginBottom : 25
            }
          }, "aprobado" === swimlaneToCheck.dictamen ? _prepareStyleProperties2.default.createElement(_normalizeDataUri2.default, {
            status : "success",
            text : "Dictamen: aprobado"
          }) : _prepareStyleProperties2.default.createElement(_normalizeDataUri2.default, {
            status : "error",
            text : "Dictamen: no aprobado"
          })), _prepareStyleProperties2.default.createElement(_AppDownload2.default, {
            xs : 24,
            lg : 20,
            style : {
              marginBottom : 25
            }
          }, _prepareStyleProperties2.default.createElement("h3", null, "Revisores"), _prepareStyleProperties2.default.createElement(_suggestList2.default, {
            bordered : false
          }, swimlaneToCheck.revisiones.map(function(experimentNames, awsKey) {
            return _prepareStyleProperties2.default.createElement(Panel, {
              header : experimentNames.docente.nombre,
              key : awsKey,
              style : css
            }, "factible" === experimentNames.esFactible ? _prepareStyleProperties2.default.createElement(_normalizeDataUri2.default, {
              status : "success",
              text : "Proyecto factible"
            }) : "", "no_factible" === experimentNames.esFactible ? _prepareStyleProperties2.default.createElement(_normalizeDataUri2.default, {
              status : "error",
              text : "Proyecto no factible"
            }) : "", "correcci\u00f3n" === experimentNames.esFactible ? _prepareStyleProperties2.default.createElement("div", null, _prepareStyleProperties2.default.createElement(_normalizeDataUri2.default, {
              status : "processing",
              text : "Corregir los siguientes puntos y volver a subir anteproyecto"
            }), _prepareStyleProperties2.default.createElement("p", {
              style : {
                marginLeft : 20,
                marginTop : 10
              }
            }, experimentNames.comentario)) : "");
          }))), _prepareStyleProperties2.default.createElement(_AppDownload2.default, {
            xs : 24,
            lg : 20
          }, _prepareStyleProperties2.default.createElement(DropIndicator, {
            anteproyecto : swimlaneToCheck,
            handleSubmit : this.handleSubmit,
            ref : this.saveFormRef,
            empresas : idnum2expr,
            normFile : this.normFile,
            beforeUpload : this.beforeUpload
          }))));
        }
      }]), Agent;
    }(_prepareStyleProperties.Component);
    t.default = offsetFromCenter;
  },
  502 : function(srcVersion, runtime, __webpack_require__) {
    /**
     * @param {!Object} obj
     * @return {?}
     */
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default : obj
      };
    }
    var _suggestItem = (__webpack_require__(503), __webpack_require__(507));
    var _suggestItem2 = _interopRequireDefault(_suggestItem);
    var _prepareStyleProperties = __webpack_require__(0);
    var _prepareStyleProperties2 = _interopRequireDefault(_prepareStyleProperties);
    var mipAd = __webpack_require__(11);
    var _CommentBox = __webpack_require__(62);
    var _reactRouter = __webpack_require__(659);
    var _normalizeDataUri = __webpack_require__(660);
    var _normalizeDataUri2 = _interopRequireDefault(_normalizeDataUri);
    var _UiIcon = __webpack_require__(1);
    var _UiIcon2 = _interopRequireDefault(_UiIcon);
    __webpack_require__(196);
    var _CalendarDay = __webpack_require__(666);
    var _CalendarDay2 = _interopRequireDefault(_CalendarDay);
    __webpack_require__(1151);
    _UiIcon2.default.locale("es");
    (0, mipAd.render)(_prepareStyleProperties2.default.createElement(_suggestItem2.default, {
      locale : _normalizeDataUri2.default,
      className : "full-height"
    }, _prepareStyleProperties2.default.createElement(_CommentBox.BrowserRouter, {
      history : _reactRouter.browserHistory
    }, _prepareStyleProperties2.default.createElement(_CalendarDay2.default, null))), document.getElementById("app"));
  },
  666 : function(module, exports, __webpack_require__) {
    /**
     * @param {!Object} obj
     * @return {?}
     */
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default : obj
      };
    }
    Object.defineProperty(exports, "__esModule", {
      value : true
    });
    var _normalizeDataUri = __webpack_require__(0);
    var _normalizeDataUri2 = _interopRequireDefault(_normalizeDataUri);
    var _reactRouter = __webpack_require__(62);
    var _nopages = __webpack_require__(667);
    var _nopages2 = _interopRequireDefault(_nopages);
    var _prepareStyleProperties = __webpack_require__(429);
    var _suggestItem = (_interopRequireDefault(_prepareStyleProperties), __webpack_require__(931));
    var _suggestItem2 = _interopRequireDefault(_suggestItem);
    var _CalendarDay = __webpack_require__(940);
    var _CalendarDay2 = _interopRequireDefault(_CalendarDay);
    var _UiIcon = __webpack_require__(1108);
    var _UiIcon2 = _interopRequireDefault(_UiIcon);
    var _CalendarEvent = __webpack_require__(1127);
    var _CalendarEvent2 = _interopRequireDefault(_CalendarEvent);
    var _AboutPage = __webpack_require__(1129);
    var _AboutPage2 = _interopRequireDefault(_AboutPage);
    var _deepAssign = __webpack_require__(1135);
    var _deepAssign2 = _interopRequireDefault(_deepAssign);
    var _button = __webpack_require__(1150);
    var _button2 = _interopRequireDefault(_button);
    /**
     * @return {?}
     */
    var SnabbdomRenderer = function() {
      return _normalizeDataUri2.default.createElement(_reactRouter.Switch, null, _normalizeDataUri2.default.createElement(_reactRouter.Route, {
        exact : true,
        path : "/usuario/auth",
        component : _nopages2.default
      }), _normalizeDataUri2.default.createElement(_suggestItem2.default, {
        path : "/admin"
      }), _normalizeDataUri2.default.createElement(_CalendarDay2.default, {
        path : "/jefe_departamento"
      }), _normalizeDataUri2.default.createElement(_UiIcon2.default, {
        path : "/candidato_residente"
      }), _normalizeDataUri2.default.createElement(_deepAssign2.default, {
        path : "/residente"
      }), _normalizeDataUri2.default.createElement(_CalendarEvent2.default, {
        path : "/docente"
      }), _normalizeDataUri2.default.createElement(_AboutPage2.default, {
        path : "/asesor_externo"
      }), _normalizeDataUri2.default.createElement(_reactRouter.Route, {
        component : _button2.default
      }));
    };
    /** @type {function(): ?} */
    exports.default = SnabbdomRenderer;
  },
  667 : function(allegedI, arg, assign) {
    /**
     * @param {!Object} obj
     * @return {?}
     */
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default : obj
      };
    }
    /**
     * @param {!AudioNode} instance
     * @param {!Function} Constructor
     * @return {undefined}
     */
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    /**
     * @param {string} self
     * @param {string} call
     * @return {?}
     */
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return !call || "object" != typeof call && "function" != typeof call ? self : call;
    }
    /**
     * @param {!Object} subClass
     * @param {!Object} superClass
     * @return {undefined}
     */
    function _inherits(subClass, superClass) {
      if ("function" != typeof superClass && null !== superClass) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      /** @type {!Object} */
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor : {
          value : subClass,
          enumerable : false,
          writable : true,
          configurable : true
        }
      });
      if (superClass) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(subClass, superClass);
        } else {
          /** @type {!Object} */
          subClass.__proto__ = superClass;
        }
      }
    }
    Object.defineProperty(arg, "__esModule", {
      value : true
    });
    var _suggestItem = (assign(404), assign(405));
    var _suggestItem2 = _interopRequireDefault(_suggestItem);
    var _suggestList = (assign(31), assign(32));
    var _suggestList2 = _interopRequireDefault(_suggestList);
    var _DraggableCore = (assign(33), assign(34));
    var _DraggableCore2 = _interopRequireDefault(_DraggableCore);
    var _normalizeDataUri = (assign(19), assign(20));
    var _normalizeDataUri2 = _interopRequireDefault(_normalizeDataUri);
    var _deepAssign = (assign(65), assign(66));
    var _deepAssign2 = _interopRequireDefault(_deepAssign);
    var _createClass = function() {
      /**
       * @param {!Function} d
       * @param {string} props
       * @return {undefined}
       */
      function e(d, props) {
        /** @type {number} */
        var i = 0;
        for (; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          /** @type {boolean} */
          descriptor.configurable = true;
          if ("value" in descriptor) {
            /** @type {boolean} */
            descriptor.writable = true;
          }
          Object.defineProperty(d, descriptor.key, descriptor);
        }
      }
      return function(t, n, a) {
        return n && e(t.prototype, n), a && e(t, a), t;
      };
    }();
    var _prepareStyleProperties = assign(0);
    var _prepareStyleProperties2 = _interopRequireDefault(_prepareStyleProperties);
    var _UiIcon = (assign(11), assign(766));
    var _UiIcon2 = _interopRequireDefault(_UiIcon);
    var _CalendarDay = assign(767);
    var _CalendarDay2 = _interopRequireDefault(_CalendarDay);
    var group = (_deepAssign2.default.Content, _deepAssign2.default.Header, _normalizeDataUri2.default.Item, function(_EventEmitter) {
      /**
       * @return {?}
       */
      function Agent() {
        return _classCallCheck(this, Agent), _possibleConstructorReturn(this, (Agent.__proto__ || Object.getPrototypeOf(Agent)).apply(this, arguments));
      }
      return _inherits(Agent, _EventEmitter), _createClass(Agent, [{
        key : "render",
        value : function() {
          return _prepareStyleProperties2.default.createElement("div", null, _prepareStyleProperties2.default.createElement(_UiIcon2.default, {
            style : {
              background : "#282c34",
              position : "absolute",
              backgroundSize : "cover",
              backgroundRepeat : "no-repeat"
            },
            params : assign(788)
          }), _prepareStyleProperties2.default.createElement(_DraggableCore2.default, {
            type : "flex",
            justify : "center",
            align : "middle",
            style : {
              height : "100%",
              position : "absolute",
              marginLeft : "auto",
              marginRight : "auto",
              left : 0,
              right : 0
            }
          }, _prepareStyleProperties2.default.createElement(_suggestList2.default, {
            lg : 16,
            xs : 22
          }, _prepareStyleProperties2.default.createElement(_suggestItem2.default, {
            style : {
              borderBottomRightRadius : 7,
              borderBottomLeftRadius : 7,
              borderTopLeftRadius : 7,
              borderTopRightRadius : 7,
              paddingTop : 30,
              paddingBottom : 30
            }
          }, _prepareStyleProperties2.default.createElement(_DraggableCore2.default, {
            type : "flex",
            justify : "center",
            align : "middle"
          }, _prepareStyleProperties2.default.createElement(_suggestList2.default, {
            lg : 12,
            xs : 22,
            style : {
              paddingLeft : 20,
              paddingRight : 20
            }
          }, _prepareStyleProperties2.default.createElement(_DraggableCore2.default, {
            className : "custom-image",
            type : "flex",
            justify : "center"
          }, _prepareStyleProperties2.default.createElement("img", {
            src : "/img/tec_Logo.png",
            alt : "logo_tec",
            className : "logo-login"
          })), _prepareStyleProperties2.default.createElement("h2", {
            style : {
              marginTop : 20,
              marginBottom : 20,
              textAlign : "center",
              color : "#505962"
            },
            className : "color-font"
          }, " SSRITCH v1 "), _prepareStyleProperties2.default.createElement("p", {
            style : {
              textAlign : "center"
            }
          }, "Sistema de seguimiento de residencias del Instituto Tecnol\u00f3gico de Chilpancingo")), _prepareStyleProperties2.default.createElement(_suggestList2.default, {
            lg : 12,
            xs : 22,
            className : "col-login",
            style : {
              marginTop : 20
            }
          }, _prepareStyleProperties2.default.createElement("h1", {
            style : {
              color : "#1f90e6",
              marginBottom : 20
            }
          }, "Autenticaci\u00f3n de usuario"), _prepareStyleProperties2.default.createElement(_CalendarDay2.default, null)))))));
        }
      }]), Agent;
    }(_prepareStyleProperties.Component));
    arg.default = group;
  },
  767 : function(module, exports, __webpack_require__) {
    /**
     * @param {!Object} obj
     * @return {?}
     */
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default : obj
      };
    }
    /**
     * @param {!AudioNode} t
     * @param {!Function} x
     * @return {undefined}
     */
    function r(t, x) {
      if (!(t instanceof x)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    /**
     * @param {string} fn
     * @param {string} t
     * @return {?}
     */
    function $(fn, t) {
      if (!fn) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return !t || "object" != typeof t && "function" != typeof t ? fn : t;
    }
    /**
     * @param {!Object} subClass
     * @param {!Object} superClass
     * @return {undefined}
     */
    function _inherits(subClass, superClass) {
      if ("function" != typeof superClass && null !== superClass) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      /** @type {!Object} */
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor : {
          value : subClass,
          enumerable : false,
          writable : true,
          configurable : true
        }
      });
      if (superClass) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(subClass, superClass);
        } else {
          /** @type {!Object} */
          subClass.__proto__ = superClass;
        }
      }
    }
    Object.defineProperty(exports, "__esModule", {
      value : true
    });
    var _suggestItem = (__webpack_require__(37), __webpack_require__(36));
    var _suggestItem2 = _interopRequireDefault(_suggestItem);
    var _suggestList = (__webpack_require__(18), __webpack_require__(22));
    var _suggestList2 = _interopRequireDefault(_suggestList);
    var _DraggableCore = (__webpack_require__(35), __webpack_require__(13));
    var _DraggableCore2 = _interopRequireDefault(_DraggableCore);
    var _deepAssign = (__webpack_require__(48), __webpack_require__(49));
    var _deepAssign2 = _interopRequireDefault(_deepAssign);
    var _normalizeDataUri = (__webpack_require__(19), __webpack_require__(20));
    var params = _interopRequireDefault(_normalizeDataUri);
    var _createClass = function() {
      /**
       * @param {!Function} d
       * @param {string} props
       * @return {undefined}
       */
      function e(d, props) {
        /** @type {number} */
        var i = 0;
        for (; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          /** @type {boolean} */
          descriptor.configurable = true;
          if ("value" in descriptor) {
            /** @type {boolean} */
            descriptor.writable = true;
          }
          Object.defineProperty(d, descriptor.key, descriptor);
        }
      }
      return function(t, n, a) {
        return n && e(t.prototype, n), a && e(t, a), t;
      };
    }();
    var _prepareStyleProperties = __webpack_require__(0);
    var _prepareStyleProperties2 = _interopRequireDefault(_prepareStyleProperties);
    var _CommentBox = __webpack_require__(62);
    var _Trans = __webpack_require__(782);
    var _Trans2 = _interopRequireDefault(_Trans);
    var data = params.default.Item;
    /** @type {string} */
    var UUID = "efda6eec-c3d4-414d-8c1e-eede8c03a2b3";
    var scanDoc = function(e) {
      /**
       * @return {?}
       */
      function t() {
        r(this, t);
        var self = $(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
        return self.handleSubmit = function(event) {
          event.preventDefault();
          self.props.form.validateFields(function(canCreateDiscussions, a) {
            var aImagery = a.correo;
            var aRawData = a.contrasenia;
            if (!canCreateDiscussions) {
              _Trans2.default.post("/api/usuario/auth").send({
                correo : aImagery,
                contrasenia : aRawData,
                UUID : UUID
              }).end(function(canCreateDiscussions, ctx) {
                if (console.log(ctx), 200 === ctx.status && true === ctx.body.isAuth) {
                  var undefined = ctx.body.rol;
                  if ("admin" === undefined) {
                    self.setState({
                      successAuth : _prepareStyleProperties2.default.createElement(_CommentBox.Redirect, {
                        to : "/admin"
                      })
                    });
                  } else {
                    if ("jefe_departamento" === undefined) {
                      self.setState({
                        successAuth : _prepareStyleProperties2.default.createElement(_CommentBox.Redirect, {
                          to : "/jefe_departamento"
                        })
                      });
                    } else {
                      if ("candidato_residente" === undefined) {
                        self.setState({
                          successAuth : _prepareStyleProperties2.default.createElement(_CommentBox.Redirect, {
                            to : "/candidato_residente"
                          })
                        });
                      } else {
                        if ("docente" === undefined || "subdirector_academico" === undefined) {
                          self.setState({
                            successAuth : _prepareStyleProperties2.default.createElement(_CommentBox.Redirect, {
                              to : "/docente"
                            })
                          });
                        } else {
                          if ("asesor_externo" === undefined) {
                            self.setState({
                              successAuth : _prepareStyleProperties2.default.createElement(_CommentBox.Redirect, {
                                to : "/asesor_externo"
                              })
                            });
                          } else {
                            if ("residente" === undefined) {
                              self.setState({
                                successAuth : _prepareStyleProperties2.default.createElement(_CommentBox.Redirect, {
                                  to : "/residente"
                                })
                              });
                            }
                          }
                        }
                      }
                    }
                  }
                } else {
                  self.setState({
                    successAuth : _prepareStyleProperties2.default.createElement(_deepAssign2.default, {
                      message : "Error",
                      description : "Error en la autenticacion",
                      type : "error",
                      showIcon : true,
                      closable : true
                    })
                  });
                }
              });
            }
          });
        }, self.state = {
          successAuth : _prepareStyleProperties2.default.createElement("div", null)
        }, self;
      }
      return _inherits(t, e), _createClass(t, [{
        key : "render",
        value : function() {
          var callback = this.props.form.getFieldDecorator;
          return _prepareStyleProperties2.default.createElement(params.default, {
            onSubmit : this.handleSubmit,
            className : "login-form"
          }, _prepareStyleProperties2.default.createElement(data, null, callback("correo", {
            rules : [{
              type : "email",
              message : "El email no es correcto"
            }, {
              required : true,
              message : "Necesita su correo para autentificarse en el sistema."
            }]
          })(_prepareStyleProperties2.default.createElement(_suggestList2.default, {
            prefix : _prepareStyleProperties2.default.createElement(_DraggableCore2.default, {
              type : "user",
              style : {
                fontSize : 13
              }
            }),
            type : "email",
            placeholder : "Ingrese su correo electronico"
          }))), _prepareStyleProperties2.default.createElement(data, null, callback("contrasenia", {
            rules : [{
              required : true,
              message : "Necesita su contrase\u00f1a para autentificarse en el sistema."
            }]
          })(_prepareStyleProperties2.default.createElement(_suggestList2.default, {
            prefix : _prepareStyleProperties2.default.createElement(_DraggableCore2.default, {
              type : "lock",
              style : {
                fontSize : 13
              }
            }),
            type : "password",
            placeholder : "Intruduca su contrase\u00f1a"
          }))), _prepareStyleProperties2.default.createElement(_suggestItem2.default, {
            icon : "login",
            type : "primary",
            htmlType : "submit",
            style : {
              maxWidth : 100,
              marginTop : 20,
              marginBottom : 20
            }
          }, "Ingresar"), this.state.successAuth);
        }
      }]), t;
    }(_prepareStyleProperties.Component);
    var result = params.default.create()(scanDoc);
    exports.default = result;
  },
  788 : function(mixin, doPost) {
    mixin.exports = {
      particles : {
        number : {
          value : 30,
          density : {
            enable : true,
            value_area : 800
          }
        },
        color : {
          value : "#ffffff"
        },
        shape : {
          type : "circle",
          stroke : {
            width : 0,
            color : "#000000"
          },
          polygon : {
            nb_sides : 5
          },
          image : {
            src : "img/github.svg",
            width : 100,
            height : 100
          }
        },
        opacity : {
          value : .5,
          random : false,
          anim : {
            enable : false,
            speed : 1,
            opacity_min : .1,
            sync : false
          }
        },
        size : {
          value : 3,
          random : true,
          anim : {
            enable : false,
            speed : 40,
            size_min : .1,
            sync : false
          }
        },
        line_linked : {
          enable : true,
          distance : 150,
          color : "#ffffff",
          opacity : .4,
          width : 1
        },
        move : {
          enable : true,
          speed : 6,
          direction : "none",
          random : false,
          straight : false,
          out_mode : "out",
          bounce : false,
          attract : {
            enable : false,
            rotateX : 600,
            rotateY : 1200
          }
        }
      },
      interactivity : {
        detect_on : "canvas",
        events : {
          onhover : {
            enable : true,
            mode : "repulse"
          },
          onclick : {
            enable : true,
            mode : "push"
          },
          resize : true
        },
        modes : {
          grab : {
            distance : 400,
            line_linked : {
              opacity : 1
            }
          },
          bubble : {
            distance : 400,
            size : 40,
            duration : 2,
            opacity : 8,
            speed : 3
          },
          repulse : {
            distance : 200,
            duration : .4
          },
          push : {
            particles_nb : 4
          },
          remove : {
            particles_nb : 2
          }
        }
      },
      retina_detect : true
    };
  },
  918 : function(allegedI, arg, __webpack_require__) {
    /**
     * @param {!Object} obj
     * @return {?}
     */
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default : obj
      };
    }
    /**
     * @param {!AudioNode} instance
     * @param {!Function} Constructor
     * @return {undefined}
     */
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    /**
     * @param {string} self
     * @param {string} call
     * @return {?}
     */
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return !call || "object" != typeof call && "function" != typeof call ? self : call;
    }
    /**
     * @param {!Object} subClass
     * @param {!Object} superClass
     * @return {undefined}
     */
    function _inherits(subClass, superClass) {
      if ("function" != typeof superClass && null !== superClass) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      /** @type {!Object} */
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor : {
          value : subClass,
          enumerable : false,
          writable : true,
          configurable : true
        }
      });
      if (superClass) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(subClass, superClass);
        } else {
          /** @type {!Object} */
          subClass.__proto__ = superClass;
        }
      }
    }
    Object.defineProperty(arg, "__esModule", {
      value : true
    });
    var _deepAssign = (__webpack_require__(15), __webpack_require__(16));
    var _deepAssign2 = _interopRequireDefault(_deepAssign);
    var _suggestItem = (__webpack_require__(28), __webpack_require__(29));
    var _suggestItem2 = _interopRequireDefault(_suggestItem);
    var _normalizeDataUri = (__webpack_require__(24), __webpack_require__(25));
    var _normalizeDataUri2 = _interopRequireDefault(_normalizeDataUri);
    var _suggestList = (__webpack_require__(18), __webpack_require__(22));
    var _suggestList2 = _interopRequireDefault(_suggestList);
    var _UiIcon = (__webpack_require__(19), __webpack_require__(20));
    var params = _interopRequireDefault(_UiIcon);
    var _createClass = function() {
      /**
       * @param {!Function} d
       * @param {string} props
       * @return {undefined}
       */
      function e(d, props) {
        /** @type {number} */
        var i = 0;
        for (; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          /** @type {boolean} */
          descriptor.configurable = true;
          if ("value" in descriptor) {
            /** @type {boolean} */
            descriptor.writable = true;
          }
          Object.defineProperty(d, descriptor.key, descriptor);
        }
      }
      return function(t, n, a) {
        return n && e(t.prototype, n), a && e(t, a), t;
      };
    }();
    var _prepareStyleProperties = __webpack_require__(0);
    var _prepareStyleProperties2 = _interopRequireDefault(_prepareStyleProperties);
    var _Trans = (__webpack_require__(11), __webpack_require__(12));
    var _Trans2 = _interopRequireDefault(_Trans);
    var data = params.default.Item;
    var FormioElement = (_suggestList2.default.Group, _normalizeDataUri2.default.Option, params.default.create()(function(config) {
      var visible = config.visible;
      var onCancel = config.onCancel;
      var onCreate = config.onCreate;
      var options = config.form;
      var lint = options.getFieldDecorator;
      return _prepareStyleProperties2.default.createElement(_suggestItem2.default, {
        visible : visible,
        title : "Agregar nuevo departamento",
        okText : "Guardar",
        onCancel : onCancel,
        onOk : onCreate
      }, _prepareStyleProperties2.default.createElement(params.default, {
        layout : "vertical"
      }, _prepareStyleProperties2.default.createElement(data, {
        label : "Nombre del departamento"
      }, lint("nombre_departamento", {
        rules : [{
          required : true,
          message : "El departamento debe tener un nombre."
        }]
      })(_prepareStyleProperties2.default.createElement(_suggestList2.default, {
        placeholder : "Nombre del departamento"
      })))));
    }));
    var group = function(_EventEmitter) {
      /**
       * @param {!Object} element
       * @return {?}
       */
      function Agent(element) {
        _classCallCheck(this, Agent);
        var $scope = _possibleConstructorReturn(this, (Agent.__proto__ || Object.getPrototypeOf(Agent)).call(this, element));
        return $scope.showModal = function() {
          $scope.setState({
            visible : true
          });
        }, $scope.handleCancel = function() {
          $scope.setState({
            visible : false
          });
        }, $scope.handleCreate = function() {
          var form = $scope.form;
          form.validateFields(function(canCreateDiscussions, n) {
            if (!canCreateDiscussions) {
              _Trans2.default.post("/api/departamento", {
                nombre : n.nombre_departamento
              }).then(function(t) {
                console.log(t);
                if (200 === t.status) {
                  form.resetFields();
                  _deepAssign2.default.success("Departamento agregado satisfactoriamente");
                  $scope.setState({
                    visible : false
                  });
                  $scope.props.onAddDepartamento();
                } else {
                  _suggestItem2.default.error({
                    title : "Error al guardar el departamento. Revisar los siguientes campos",
                    content : _prepareStyleProperties2.default.createElement("div", null, t.data.errores),
                    onOk : function() {
                    }
                  });
                }
              }).catch(function(mnemonics) {
                _deepAssign2.default.error(mnemonics);
              });
            }
          });
        }, $scope.saveFormRef = function(data) {
          /** @type {!Object} */
          $scope.form = data;
        }, $scope.state = {
          visible : element.visible
        }, $scope;
      }
      return _inherits(Agent, _EventEmitter), _createClass(Agent, [{
        key : "componentWillReceiveProps",
        value : function(_ref) {
          var visible = _ref.visible;
          this.setState({
            visible : visible
          });
        }
      }, {
        key : "render",
        value : function() {
          return _prepareStyleProperties2.default.createElement("div", null, _prepareStyleProperties2.default.createElement(FormioElement, {
            ref : this.saveFormRef,
            visible : this.state.visible,
            onCancel : this.handleCancel,
            onCreate : this.handleCreate
          }));
        }
      }]), Agent;
    }(_prepareStyleProperties.Component);
    arg.default = group;
  },
  928 : function(cond, t, __webpack_require__) {
    /**
     * @param {!Object} obj
     * @return {?}
     */
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default : obj
      };
    }
    /**
     * @param {!AudioNode} instance
     * @param {!Function} Constructor
     * @return {undefined}
     */
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    /**
     * @param {string} self
     * @param {string} call
     * @return {?}
     */
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return !call || "object" != typeof call && "function" != typeof call ? self : call;
    }
    /**
     * @param {!Object} subClass
     * @param {!Object} superClass
     * @return {undefined}
     */
    function _inherits(subClass, superClass) {
      if ("function" != typeof superClass && null !== superClass) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      /** @type {!Object} */
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor : {
          value : subClass,
          enumerable : false,
          writable : true,
          configurable : true
        }
      });
      if (superClass) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(subClass, superClass);
        } else {
          /** @type {!Object} */
          subClass.__proto__ = superClass;
        }
      }
    }
    Object.defineProperty(t, "__esModule", {
      value : true
    });
    var _deepAssign = (__webpack_require__(15), __webpack_require__(16));
    var _deepAssign2 = _interopRequireDefault(_deepAssign);
    var _suggestItem = (__webpack_require__(28), __webpack_require__(29));
    var _suggestItem2 = _interopRequireDefault(_suggestItem);
    var _suggestList = (__webpack_require__(24), __webpack_require__(25));
    var _suggestList2 = _interopRequireDefault(_suggestList);
    var _DraggableCore = (__webpack_require__(18), __webpack_require__(22));
    var _DraggableCore2 = _interopRequireDefault(_DraggableCore);
    var _normalizeDataUri = (__webpack_require__(19), __webpack_require__(20));
    var params = _interopRequireDefault(_normalizeDataUri);
    var _createClass = function() {
      /**
       * @param {!Function} d
       * @param {string} props
       * @return {undefined}
       */
      function e(d, props) {
        /** @type {number} */
        var i = 0;
        for (; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          /** @type {boolean} */
          descriptor.configurable = true;
          if ("value" in descriptor) {
            /** @type {boolean} */
            descriptor.writable = true;
          }
          Object.defineProperty(d, descriptor.key, descriptor);
        }
      }
      return function(t, n, a) {
        return n && e(t.prototype, n), a && e(t, a), t;
      };
    }();
    var _prepareStyleProperties = __webpack_require__(0);
    var _prepareStyleProperties2 = _interopRequireDefault(_prepareStyleProperties);
    var _UiIcon = (__webpack_require__(11), __webpack_require__(12));
    var _UiIcon2 = _interopRequireDefault(_UiIcon);
    var Route = params.default.Item;
    var Tip = (_DraggableCore2.default.Group, _suggestList2.default.Option);
    var DropIndicator = params.default.create()(function(config) {
      var visible = config.visible;
      var onCancel = config.onCancel;
      var onCreate = config.onCreate;
      var options = config.form;
      var user = config.departamento;
      var lint = options.getFieldDecorator;
      /** @type {null} */
      var responseCookies = (lint("titulo", {
        initialValue : "ING."
      })(_prepareStyleProperties2.default.createElement(_suggestList2.default, {
        style : {
          width : 60
        }
      }, _prepareStyleProperties2.default.createElement(Tip, {
        value : "ING."
      }, "ING."), _prepareStyleProperties2.default.createElement(Tip, {
        value : "DR."
      }, "DR."), _prepareStyleProperties2.default.createElement(Tip, {
        value : "DRA."
      }, "DRA."), _prepareStyleProperties2.default.createElement(Tip, {
        value : "MTRO."
      }, "MTRO."), _prepareStyleProperties2.default.createElement(Tip, {
        value : "DIR."
      }, "DIR."), _prepareStyleProperties2.default.createElement(Tip, {
        value : "DIRA."
      }, "DIRA."), _prepareStyleProperties2.default.createElement(Tip, {
        value : "LIC."
      }, "LIC."), _prepareStyleProperties2.default.createElement(Tip, {
        value : "ISC."
      }, "ISC."), _prepareStyleProperties2.default.createElement(Tip, {
        value : "ISI."
      }, "ISI."), _prepareStyleProperties2.default.createElement(Tip, {
        value : "MAI."
      }, "MAI."), _prepareStyleProperties2.default.createElement(Tip, {
        value : "MBT."
      }, "MTB."), _prepareStyleProperties2.default.createElement(Tip, {
        value : "MCT."
      }, "MCT."), _prepareStyleProperties2.default.createElement(Tip, {
        value : "MTI."
      }, "MTI."), _prepareStyleProperties2.default.createElement(Tip, {
        value : "M.A.T.I."
      }, "M.A.T.I."), _prepareStyleProperties2.default.createElement(Tip, {
        value : "M.C."
      }, "M.C."))), null);
      return user && (responseCookies = user.docentes.find(function($scope) {
        return "jefe_departamento" === $scope.usuario.rol;
      }) || null), _prepareStyleProperties2.default.createElement(_suggestItem2.default, {
        visible : visible,
        title : "Editar departamento",
        okText : "Actualizar",
        onCancel : onCancel,
        onOk : onCreate,
        width : 600,
        className : "full-width"
      }, _prepareStyleProperties2.default.createElement(params.default, {
        layout : "vertical"
      }, _prepareStyleProperties2.default.createElement(Route, {
        label : "Nombre del departamento",
        initialValue : "",
        hasFeedback : true
      }, lint("nombre_departamento", {
        rules : [{
          required : true,
          message : "El departamento debe tener un nombre."
        }],
        initialValue : user ? user.nombre : ""
      })(_prepareStyleProperties2.default.createElement(_DraggableCore2.default, {
        placeholder : "Nombre del departamento"
      }))), _prepareStyleProperties2.default.createElement(Route, {
        label : "Seleccione al jefe de departamento",
        hasFeedback : true
      }, lint("id_jefe_departamento", {
        rules : [{
          required : true,
          message : "El departamento debe tener un jefe."
        }],
        initialValue : responseCookies ? "" + responseCookies.id_usuario : ""
      })(_prepareStyleProperties2.default.createElement(_suggestList2.default, {
        placeholder : "Seleccione un docente"
      }, user ? user.docentes.map(function($routeParams, awsKey) {
        return _prepareStyleProperties2.default.createElement(Tip, {
          key : awsKey,
          value : "" + $routeParams.id_usuario
        }, $routeParams.titulo + " " + $routeParams.nombre + " " + $routeParams.ap_paterno + " " + $routeParams.ap_materno);
      }) : ""))), _prepareStyleProperties2.default.createElement(Route, {
        label : "Carreras"
      }, lint("carreras", {})(_prepareStyleProperties2.default.createElement(_suggestList2.default, {
        placeholder : "Carreras del departamento"
      }, user ? user.carreras.map(function($routeParams, awsKey) {
        return _prepareStyleProperties2.default.createElement(Tip, {
          key : awsKey,
          value : "" + $routeParams.id
        }, "" + $routeParams.nombre);
      }) : "")))));
    });
    var offsetFromCenter = function(_EventEmitter) {
      /**
       * @param {!Object} element
       * @return {?}
       */
      function Agent(element) {
        _classCallCheck(this, Agent);
        var $scope = _possibleConstructorReturn(this, (Agent.__proto__ || Object.getPrototypeOf(Agent)).call(this, element));
        return $scope.showModal = function() {
          $scope.setState({
            visible : true
          });
        }, $scope.handleCancel = function() {
          $scope.setState({
            visible : false
          });
          $scope.form.resetFields();
        }, $scope.handleCreate = function() {
          var form = $scope.form;
          var wunderlist_list = $scope.state.departamento;
          form.validateFields(function(n, canCreateDiscussions) {
            if (!n) {
              _UiIcon2.default.put("/api/departamento/" + wunderlist_list.id, {
                nombre_departamento : canCreateDiscussions.nombre_departamento,
                id_jefe_departamento : canCreateDiscussions.id_jefe_departamento
              }).then(function(t) {
                console.log(t);
                if (200 === t.status) {
                  form.resetFields();
                  _deepAssign2.default.success("Departamento actualizado satisfactoriamente");
                  $scope.setState({
                    visible : false
                  });
                  $scope.props.onReloadDepartamentos();
                } else {
                  _suggestItem2.default.error({
                    title : "Error al actualizar el departamento. Revisar los siguientes campos",
                    content : _prepareStyleProperties2.default.createElement("div", null, t.data.errores),
                    onOk : function() {
                    }
                  });
                }
              }).catch(function(mnemonics) {
                _deepAssign2.default.error(mnemonics);
              });
            }
          });
        }, $scope.saveFormRef = function(data) {
          /** @type {!Object} */
          $scope.form = data;
        }, $scope.state = {
          visible : element.visible,
          departamento : element.departamento
        }, $scope;
      }
      return _inherits(Agent, _EventEmitter), _createClass(Agent, [{
        key : "componentWillReceiveProps",
        value : function(_ref) {
          var visible = _ref.visible;
          var _ref$mapStateToPropsF = _ref.departamento;
          this.setState({
            visible : visible,
            departamento : _ref$mapStateToPropsF
          });
        }
      }, {
        key : "render",
        value : function() {
          var _txs = this.state.departamento;
          return _prepareStyleProperties2.default.createElement("div", null, _prepareStyleProperties2.default.createElement(DropIndicator, {
            departamento : _txs,
            ref : this.saveFormRef,
            visible : this.state.visible,
            onCancel : this.handleCancel,
            onCreate : this.handleCreate
          }));
        }
      }]), Agent;
    }(_prepareStyleProperties.Component);
    t.default = offsetFromCenter;
  },
  929 : function(allegedI, arg, __webpack_require__) {
    /**
     * @param {!Object} obj
     * @return {?}
     */
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default : obj
      };
    }
    /**
     * @param {!AudioNode} instance
     * @param {!Function} Constructor
     * @return {undefined}
     */
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    /**
     * @param {string} self
     * @param {string} call
     * @return {?}
     */
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return !call || "object" != typeof call && "function" != typeof call ? self : call;
    }
    /**
     * @param {!Object} subClass
     * @param {!Object} superClass
     * @return {undefined}
     */
    function _inherits(subClass, superClass) {
      if ("function" != typeof superClass && null !== superClass) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      /** @type {!Object} */
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor : {
          value : subClass,
          enumerable : false,
          writable : true,
          configurable : true
        }
      });
      if (superClass) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(subClass, superClass);
        } else {
          /** @type {!Object} */
          subClass.__proto__ = superClass;
        }
      }
    }
    Object.defineProperty(arg, "__esModule", {
      value : true
    });
    var _deepAssign = (__webpack_require__(15), __webpack_require__(16));
    var _deepAssign2 = _interopRequireDefault(_deepAssign);
    var _suggestItem = (__webpack_require__(28), __webpack_require__(29));
    var _suggestItem2 = _interopRequireDefault(_suggestItem);
    var _normalizeDataUri = (__webpack_require__(24), __webpack_require__(25));
    var _normalizeDataUri2 = _interopRequireDefault(_normalizeDataUri);
    var _suggestList = (__webpack_require__(18), __webpack_require__(22));
    var _suggestList2 = _interopRequireDefault(_suggestList);
    var _UiIcon = (__webpack_require__(19), __webpack_require__(20));
    var params = _interopRequireDefault(_UiIcon);
    var _createClass = function() {
      /**
       * @param {!Function} d
       * @param {string} props
       * @return {undefined}
       */
      function e(d, props) {
        /** @type {number} */
        var i = 0;
        for (; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          /** @type {boolean} */
          descriptor.configurable = true;
          if ("value" in descriptor) {
            /** @type {boolean} */
            descriptor.writable = true;
          }
          Object.defineProperty(d, descriptor.key, descriptor);
        }
      }
      return function(t, n, a) {
        return n && e(t.prototype, n), a && e(t, a), t;
      };
    }();
    var _prepareStyleProperties = __webpack_require__(0);
    var _prepareStyleProperties2 = _interopRequireDefault(_prepareStyleProperties);
    var _Trans = (__webpack_require__(11), __webpack_require__(12));
    var _Trans2 = _interopRequireDefault(_Trans);
    var data = params.default.Item;
    var FormioElement = (_suggestList2.default.Group, _normalizeDataUri2.default.Option, params.default.create()(function(options) {
      var visible = options.visible;
      var onCancel = options.onCancel;
      var onCreate = options.onCreate;
      var def = options.form;
      var readOnlyFn = options.departamento;
      var extendWidget = def.getFieldDecorator;
      return _prepareStyleProperties2.default.createElement(_suggestItem2.default, {
        visible : visible,
        title : "Agregar carrera al departamento de " + readOnlyFn.nombre_departamento,
        okText : "Guardar",
        onCancel : onCancel,
        onOk : onCreate
      }, _prepareStyleProperties2.default.createElement(params.default, {
        layout : "vertical"
      }, _prepareStyleProperties2.default.createElement(data, {
        label : "Nombre de la carrera"
      }, extendWidget("nombre", {
        rules : [{
          required : true,
          message : "La carrera debe tener un nombre"
        }]
      })(_prepareStyleProperties2.default.createElement(_suggestList2.default, {
        style : {
          width : "100%"
        },
        placeholder : "Nombre de la carrera"
      })))));
    }));
    var group = function(_EventEmitter) {
      /**
       * @param {!Object} element
       * @return {?}
       */
      function Agent(element) {
        _classCallCheck(this, Agent);
        var $scope = _possibleConstructorReturn(this, (Agent.__proto__ || Object.getPrototypeOf(Agent)).call(this, element));
        return $scope.showModal = function() {
          $scope.setState({
            visible : true
          });
        }, $scope.handleCancel = function() {
          $scope.setState({
            visible : false
          });
        }, $scope.handleCreate = function() {
          var form = $scope.form;
          form.validateFields(function(canCreateDiscussions, $routeParams) {
            if (!canCreateDiscussions) {
              _Trans2.default.post("/api/carrera", {
                nombre : $routeParams.nombre,
                id_departamento : $scope.state.departamento.id_departamento
              }).then(function(t) {
                console.log(t);
                if (200 === t.status) {
                  _deepAssign2.default.success("Carrera agregada satisfactoriamente");
                  $scope.setState({
                    visible : false
                  });
                  form.resetFields();
                } else {
                  _suggestItem2.default.error({
                    title : "Error al guardar la carrera. Revisar los siguientes campos",
                    content : _prepareStyleProperties2.default.createElement("div", null, t.data.errores),
                    onOk : function() {
                    }
                  });
                }
              }).catch(function(mnemonics) {
                _deepAssign2.default.error(mnemonics);
              });
            }
          });
        }, $scope.saveFormRef = function(data) {
          /** @type {!Object} */
          $scope.form = data;
        }, $scope.state = {
          visible : element.visible,
          departamento : element.departamento
        }, $scope;
      }
      return _inherits(Agent, _EventEmitter), _createClass(Agent, [{
        key : "componentWillReceiveProps",
        value : function(_ref) {
          var visible = _ref.visible;
          var _ref$mapStateToPropsF = _ref.departamento;
          this.setState({
            visible : visible,
            departamento : _ref$mapStateToPropsF
          });
        }
      }, {
        key : "render",
        value : function() {
          return _prepareStyleProperties2.default.createElement("div", null, _prepareStyleProperties2.default.createElement(FormioElement, {
            ref : this.saveFormRef,
            visible : this.state.visible,
            onCancel : this.handleCancel,
            onCreate : this.handleCreate,
            departamento : this.state.departamento
          }));
        }
      }]), Agent;
    }(_prepareStyleProperties.Component);
    arg.default = group;
  },
  930 : function(module, exports, __webpack_require__) {
    /**
     * @param {!Object} obj
     * @return {?}
     */
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default : obj
      };
    }
    /**
     * @param {!AudioNode} instance
     * @param {!Function} Constructor
     * @return {undefined}
     */
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    /**
     * @param {string} self
     * @param {string} call
     * @return {?}
     */
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return !call || "object" != typeof call && "function" != typeof call ? self : call;
    }
    /**
     * @param {!Object} subClass
     * @param {!Object} superClass
     * @return {undefined}
     */
    function _inherits(subClass, superClass) {
      if ("function" != typeof superClass && null !== superClass) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      /** @type {!Object} */
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor : {
          value : subClass,
          enumerable : false,
          writable : true,
          configurable : true
        }
      });
      if (superClass) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(subClass, superClass);
        } else {
          /** @type {!Object} */
          subClass.__proto__ = superClass;
        }
      }
    }
    Object.defineProperty(exports, "__esModule", {
      value : true
    });
    var _suggestList = (__webpack_require__(37), __webpack_require__(36));
    var _suggestList2 = _interopRequireDefault(_suggestList);
    var _DraggableCore = (__webpack_require__(18), __webpack_require__(22));
    var _DraggableCore2 = _interopRequireDefault(_DraggableCore);
    var _suggestItem = (__webpack_require__(24), __webpack_require__(25));
    var _suggestItem2 = _interopRequireDefault(_suggestItem);
    var _normalizeDataUri = (__webpack_require__(19), __webpack_require__(20));
    var params = _interopRequireDefault(_normalizeDataUri);
    var _createClass = function() {
      /**
       * @param {!Function} d
       * @param {string} props
       * @return {undefined}
       */
      function e(d, props) {
        /** @type {number} */
        var i = 0;
        for (; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          /** @type {boolean} */
          descriptor.configurable = true;
          if ("value" in descriptor) {
            /** @type {boolean} */
            descriptor.writable = true;
          }
          Object.defineProperty(d, descriptor.key, descriptor);
        }
      }
      return function(t, n, a) {
        return n && e(t.prototype, n), a && e(t, a), t;
      };
    }();
    var _prepareStyleProperties = __webpack_require__(0);
    var _prepareStyleProperties2 = _interopRequireDefault(_prepareStyleProperties);
    var data = params.default.Item;
    var Tip = _suggestItem2.default.Option;
    var scanDoc = function(_EventEmitter) {
      /**
       * @return {?}
       */
      function Agent() {
        var _Object$getPrototypeO;
        var i;
        var _this;
        var _ret;
        _classCallCheck(this, Agent);
        /** @type {number} */
        var _len8 = arguments.length;
        /** @type {!Array} */
        var args = Array(_len8);
        /** @type {number} */
        var _key8 = 0;
        for (; _key8 < _len8; _key8++) {
          args[_key8] = arguments[_key8];
        }
        return i = _this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Agent.__proto__ || Object.getPrototypeOf(Agent)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this.handleSubmit = function(event) {
          event.preventDefault();
          _this.props.form.validateFields(function(canCreateDiscussions, isSlidingUp) {
            if (!canCreateDiscussions) {
              alert("alv");
            }
          });
        }, _ret = i, _possibleConstructorReturn(_this, _ret);
      }
      return _inherits(Agent, _EventEmitter), _createClass(Agent, [{
        key : "render",
        value : function() {
          var callback = this.props.form.getFieldDecorator;
          var addonBefore = callback("titulo", {
            initialValue : "ING."
          })(_prepareStyleProperties2.default.createElement(_suggestItem2.default, {
            style : {
              width : 90
            }
          }, _prepareStyleProperties2.default.createElement(Tip, {
            value : "ING."
          }, "ING."), _prepareStyleProperties2.default.createElement(Tip, {
            value : "DR."
          }, "DR."), _prepareStyleProperties2.default.createElement(Tip, {
            value : "DRA."
          }, "DRA."), _prepareStyleProperties2.default.createElement(Tip, {
            value : "MTRO."
          }, "MTRO."), _prepareStyleProperties2.default.createElement(Tip, {
            value : "DIR."
          }, "DIR."), _prepareStyleProperties2.default.createElement(Tip, {
            value : "DIRA."
          }, "DIRA."), _prepareStyleProperties2.default.createElement(Tip, {
            value : "LIC."
          }, "LIC."), _prepareStyleProperties2.default.createElement(Tip, {
            value : "ISC."
          }, "ISC."), _prepareStyleProperties2.default.createElement(Tip, {
            value : "ISI."
          }, "ISI."), _prepareStyleProperties2.default.createElement(Tip, {
            value : "MAI."
          }, "MAI."), _prepareStyleProperties2.default.createElement(Tip, {
            value : "MBT."
          }, "MTB."), _prepareStyleProperties2.default.createElement(Tip, {
            value : "MCT."
          }, "MCT."), _prepareStyleProperties2.default.createElement(Tip, {
            value : "MTI."
          }, "MTI."), _prepareStyleProperties2.default.createElement(Tip, {
            value : "M.A.T.I."
          }, "M.A.T.I."), _prepareStyleProperties2.default.createElement(Tip, {
            value : "M.C."
          }, "M.C.")));
          return _prepareStyleProperties2.default.createElement(params.default, {
            onSubmit : this.handleSubmit
          }, _prepareStyleProperties2.default.createElement(data, {
            label : "Nombre completo del subdirector academico: "
          }, callback("nombre", {
            rules : [{
              required : true,
              message : "El subdirector academico debe tener un nombre."
            }]
          })(_prepareStyleProperties2.default.createElement(_DraggableCore2.default, {
            addonBefore : addonBefore,
            style : {
              width : "100%"
            },
            placeholder : "Nombre completo del subdirector academico"
          }))), _prepareStyleProperties2.default.createElement(_suggestList2.default, {
            htmlType : "submit"
          }, "Guardar"));
        }
      }]), Agent;
    }(_prepareStyleProperties.Component);
    var result = params.default.create()(scanDoc);
    exports.default = result;
  },
  931 : function(clientAddress, state, __webpack_require__) {
    /**
     * @param {!Object} obj
     * @return {?}
     */
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default : obj
      };
    }
    /**
     * @param {!AudioNode} instance
     * @param {!Function} Constructor
     * @return {undefined}
     */
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    /**
     * @param {string} self
     * @param {string} call
     * @return {?}
     */
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return !call || "object" != typeof call && "function" != typeof call ? self : call;
    }
    /**
     * @param {!Object} subClass
     * @param {!Object} superClass
     * @return {undefined}
     */
    function _inherits(subClass, superClass) {
      if ("function" != typeof superClass && null !== superClass) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      /** @type {!Object} */
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor : {
          value : subClass,
          enumerable : false,
          writable : true,
          configurable : true
        }
      });
      if (superClass) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(subClass, superClass);
        } else {
          /** @type {!Object} */
          subClass.__proto__ = superClass;
        }
      }
    }
    Object.defineProperty(state, "__esModule", {
      value : true
    });
    var _suggestList = (__webpack_require__(35), __webpack_require__(13));
    var _suggestList2 = _interopRequireDefault(_suggestList);
    var _suggestItem = (__webpack_require__(98), __webpack_require__(86));
    var _suggestItem2 = _interopRequireDefault(_suggestItem);
    var _UiIcon = (__webpack_require__(65), __webpack_require__(66));
    var _UiIcon2 = _interopRequireDefault(_UiIcon);
    var _createClass = function() {
      /**
       * @param {!Function} d
       * @param {string} props
       * @return {undefined}
       */
      function e(d, props) {
        /** @type {number} */
        var i = 0;
        for (; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          /** @type {boolean} */
          descriptor.configurable = true;
          if ("value" in descriptor) {
            /** @type {boolean} */
            descriptor.writable = true;
          }
          Object.defineProperty(d, descriptor.key, descriptor);
        }
      }
      return function(t, n, a) {
        return n && e(t.prototype, n), a && e(t, a), t;
      };
    }();
    var _prepareStyleProperties = __webpack_require__(0);
    var _prepareStyleProperties2 = _interopRequireDefault(_prepareStyleProperties);
    var _classlist = (__webpack_require__(11), __webpack_require__(2));
    var route = (_interopRequireDefault(_classlist), __webpack_require__(62));
    var _roundedCorners = __webpack_require__(99);
    var _App = __webpack_require__(429);
    var _App2 = _interopRequireDefault(_App);
    var _stringifyRules = __webpack_require__(453);
    var _deepAssign = (_interopRequireDefault(_stringifyRules), __webpack_require__(454));
    var _deepAssign2 = _interopRequireDefault(_deepAssign);
    var _CalendarDay = __webpack_require__(939);
    var _CalendarDay2 = _interopRequireDefault(_CalendarDay);
    var _CalendarEvent = __webpack_require__(100);
    var _CalendarEvent2 = _interopRequireDefault(_CalendarEvent);
    var DropIndicator = _UiIcon2.default.Header;
    var ResultsTableComponent = _UiIcon2.default.Content;
    var Footer = _UiIcon2.default.Footer;
    var FormioElement = _UiIcon2.default.Sider;
    var Stateful = _suggestItem2.default.SubMenu;
    var M = function(_EventEmitter) {
      /**
       * @return {?}
       */
      function Agent() {
        _classCallCheck(this, Agent);
        var _this = _possibleConstructorReturn(this, (Agent.__proto__ || Object.getPrototypeOf(Agent)).call(this));
        return _this.toggle = function() {
          _this.setState({
            collapsed : !_this.state.collapsed,
            visibleCambiarContrasenia : false
          });
        }, _this.handleMenu = function(event) {
          var a = (event.item, event.key);
          event.selectedKeys;
          if (3 == a) {
            _this.setState({
              visibleCambiarContrasenia : true
            });
          } else {
            _this.setState({
              componentSelected : a,
              visibleCambiarContrasenia : false
            });
          }
        }, _this.state = {
          collapsed : false,
          isAuth : true,
          componentSelected : 1,
          components : {
            1 : {
              title : "Gesti\u00f3n de departamentos",
              render : _prepareStyleProperties2.default.createElement(_App2.default, null)
            },
            2 : {
              title : "Gesti\u00f3n de empresas",
              render : _prepareStyleProperties2.default.createElement(_deepAssign2.default, null)
            },
            5 : {
              title : "Usuarios del sistema",
              render : _prepareStyleProperties2.default.createElement(_CalendarDay2.default, null)
            }
          },
          visibleCambiarContrasenia : false
        }, _this;
      }
      return _inherits(Agent, _EventEmitter), _createClass(Agent, [{
        key : "getIsAuth",
        value : function() {
          var res = this;
          (0, _roundedCorners.getIsAuth)().then(function($rootScope) {
            if ("admin" === $rootScope.rol) {
              res.setState({
                isAuth : $rootScope.isAuth
              });
            } else {
              res.setState({
                isAuth : false
              });
            }
          });
        }
      }, {
        key : "componentWillMount",
        value : function() {
          this.getIsAuth();
        }
      }, {
        key : "render",
        value : function() {
          var that = this.state;
          var malakh = that.isAuth;
          var p = that.componentSelected;
          var m = that.components;
          var selected = that.visibleCambiarContrasenia;
          var page = m[p];
          return malakh ? _prepareStyleProperties2.default.createElement(_UiIcon2.default, {
            style : {
              minHeight : "100vh"
            }
          }, _prepareStyleProperties2.default.createElement(FormioElement, {
            breakpoint : "lg",
            trigger : null,
            collapsible : true,
            collapsed : this.state.collapsed
          }, _prepareStyleProperties2.default.createElement("div", {
            className : "logo",
            style : {
              textAlign : "center"
            }
          }, _prepareStyleProperties2.default.createElement("img", {
            src : "/img/tec_logo.png",
            alt : "logo_tec",
            height : "100%"
          })), _prepareStyleProperties2.default.createElement(_suggestItem2.default, {
            theme : "dark",
            mode : "inline",
            defaultSelectedKeys : ["1"],
            onSelect : this.handleMenu
          }, _prepareStyleProperties2.default.createElement(_suggestItem2.default.Item, {
            key : "1"
          }, _prepareStyleProperties2.default.createElement(_suggestList2.default, {
            type : "appstore-o"
          }), _prepareStyleProperties2.default.createElement("span", null, "Departamentos")), _prepareStyleProperties2.default.createElement(_suggestItem2.default.Item, {
            key : "2"
          }, _prepareStyleProperties2.default.createElement(_suggestList2.default, {
            type : "contacts"
          }), _prepareStyleProperties2.default.createElement("span", null, "Empresas")), _prepareStyleProperties2.default.createElement(_suggestItem2.default.Item, {
            key : "5"
          }, _prepareStyleProperties2.default.createElement(_suggestList2.default, {
            type : "bars"
          }), _prepareStyleProperties2.default.createElement("span", null, "Usuarios del sistema")), _prepareStyleProperties2.default.createElement(_suggestItem2.default.Divider, null), _prepareStyleProperties2.default.createElement(Stateful, {
            key : "sub1",
            title : _prepareStyleProperties2.default.createElement("span", null, _prepareStyleProperties2.default.createElement(_suggestList2.default, {
              type : "user"
            }), _prepareStyleProperties2.default.createElement("span", null, "Usuario"))
          }, _prepareStyleProperties2.default.createElement(_suggestItem2.default.Item, {
            key : "3"
          }, "Cambiar contrase\u00f1a"), _prepareStyleProperties2.default.createElement(_suggestItem2.default.Item, null, _prepareStyleProperties2.default.createElement("a", {
            href : "/api/usuario/logout"
          }, " ", _prepareStyleProperties2.default.createElement("strong", null, "Cerrar sesi\u00f3n"), " "), " ")))), _prepareStyleProperties2.default.createElement(_UiIcon2.default, null, _prepareStyleProperties2.default.createElement(DropIndicator, {
            style : {
              background : "#fff",
              padding : 0
            }
          }, _prepareStyleProperties2.default.createElement(_suggestList2.default, {
            className : "trigger",
            type : this.state.collapsed ? "menu-unfold" : "menu-fold",
            onClick : this.toggle
          }), _prepareStyleProperties2.default.createElement("div", {
            style : {
              float : "right",
              marginRight : 20
            }
          }, page.title)), _prepareStyleProperties2.default.createElement(ResultsTableComponent, {
            style : {
              margin : "24px 16px",
              padding : 24,
              background : "#fff"
            }
          }, page.render), _prepareStyleProperties2.default.createElement(Footer, {
            style : {
              textAlign : "center"
            }
          }, "Sistema de Seguimiento de residencias del ITCH \u00a92017 Francisco Blanco 00fblanco@gmail.com")), _prepareStyleProperties2.default.createElement(_CalendarEvent2.default, {
            visible : selected
          })) : _prepareStyleProperties2.default.createElement(route.Redirect, {
            to : "/usuario/auth"
          });
        }
      }]), Agent;
    }(_prepareStyleProperties.Component);
    state.default = M;
  },
  936 : function(cond, t, __webpack_require__) {
    /**
     * @param {!Object} obj
     * @return {?}
     */
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default : obj
      };
    }
    /**
     * @param {!AudioNode} instance
     * @param {!Function} Constructor
     * @return {undefined}
     */
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    /**
     * @param {string} self
     * @param {string} call
     * @return {?}
     */
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return !call || "object" != typeof call && "function" != typeof call ? self : call;
    }
    /**
     * @param {!Object} subClass
     * @param {!Object} superClass
     * @return {undefined}
     */
    function _inherits(subClass, superClass) {
      if ("function" != typeof superClass && null !== superClass) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      /** @type {!Object} */
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor : {
          value : subClass,
          enumerable : false,
          writable : true,
          configurable : true
        }
      });
      if (superClass) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(subClass, superClass);
        } else {
          /** @type {!Object} */
          subClass.__proto__ = superClass;
        }
      }
    }
    Object.defineProperty(t, "__esModule", {
      value : true
    });
    var _deepAssign = (__webpack_require__(15), __webpack_require__(16));
    var _deepAssign2 = _interopRequireDefault(_deepAssign);
    var _suggestList = (__webpack_require__(28), __webpack_require__(29));
    var _suggestList2 = _interopRequireDefault(_suggestList);
    var _normalizeDataUri = (__webpack_require__(33), __webpack_require__(34));
    var _normalizeDataUri2 = _interopRequireDefault(_normalizeDataUri);
    var _UiIcon = (__webpack_require__(31), __webpack_require__(32));
    var _UiIcon2 = _interopRequireDefault(_UiIcon);
    var _DraggableCore = (__webpack_require__(24), __webpack_require__(25));
    var _DraggableCore2 = _interopRequireDefault(_DraggableCore);
    var _suggestItem = (__webpack_require__(18), __webpack_require__(22));
    var _suggestItem2 = _interopRequireDefault(_suggestItem);
    var _ = (__webpack_require__(19), __webpack_require__(20));
    var params = _interopRequireDefault(_);
    var _createClass = function() {
      /**
       * @param {!Function} d
       * @param {string} props
       * @return {undefined}
       */
      function e(d, props) {
        /** @type {number} */
        var i = 0;
        for (; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          /** @type {boolean} */
          descriptor.configurable = true;
          if ("value" in descriptor) {
            /** @type {boolean} */
            descriptor.writable = true;
          }
          Object.defineProperty(d, descriptor.key, descriptor);
        }
      }
      return function(t, n, a) {
        return n && e(t.prototype, n), a && e(t, a), t;
      };
    }();
    var _prepareStyleProperties = __webpack_require__(0);
    var _prepareStyleProperties2 = _interopRequireDefault(_prepareStyleProperties);
    var _Trans = (__webpack_require__(11), __webpack_require__(12));
    var _Trans2 = _interopRequireDefault(_Trans);
    var data = params.default.Item;
    var Tip = (_suggestItem2.default.Group, _DraggableCore2.default.Option);
    var DropIndicator = params.default.create()(function(config) {
      var visible = config.visible;
      var onCancel = config.onCancel;
      var onCreate = config.onCreate;
      var options = config.form;
      var lint = options.getFieldDecorator;
      var addonBefore = lint("titulo_titular", {
        initialValue : "ING."
      })(_prepareStyleProperties2.default.createElement(_DraggableCore2.default, {
        style : {
          width : 60
        }
      }, _prepareStyleProperties2.default.createElement(Tip, {
        value : "ING."
      }, "ING."), _prepareStyleProperties2.default.createElement(Tip, {
        value : "DR."
      }, "DR."), _prepareStyleProperties2.default.createElement(Tip, {
        value : "DRA."
      }, "DRA."), _prepareStyleProperties2.default.createElement(Tip, {
        value : "MTRO."
      }, "MTRO."), _prepareStyleProperties2.default.createElement(Tip, {
        value : "M.A."
      }, "M.A."), _prepareStyleProperties2.default.createElement(Tip, {
        value : "DIR."
      }, "DIR."), _prepareStyleProperties2.default.createElement(Tip, {
        value : "DIRA."
      }, "DIRA."), _prepareStyleProperties2.default.createElement(Tip, {
        value : "LIC."
      }, "LIC."), _prepareStyleProperties2.default.createElement(Tip, {
        value : "ISC."
      }, "ISC."), _prepareStyleProperties2.default.createElement(Tip, {
        value : "ISI."
      }, "ISI."), _prepareStyleProperties2.default.createElement(Tip, {
        value : "MAI."
      }, "MAI."), _prepareStyleProperties2.default.createElement(Tip, {
        value : "MBT."
      }, "MTB."), _prepareStyleProperties2.default.createElement(Tip, {
        value : "MCT."
      }, "MCT."), _prepareStyleProperties2.default.createElement(Tip, {
        value : "MTI."
      }, "MTI."), _prepareStyleProperties2.default.createElement(Tip, {
        value : "M.A.T.I."
      }, "M.A.T.I."), _prepareStyleProperties2.default.createElement(Tip, {
        value : "M.C."
      }, "M.C.")));
      var i = lint("titulo_firma_acuerdo", {
        initialValue : "ING."
      })(_prepareStyleProperties2.default.createElement(_DraggableCore2.default, {
        style : {
          width : 60
        }
      }, _prepareStyleProperties2.default.createElement(Tip, {
        value : "ING."
      }, "ING."), _prepareStyleProperties2.default.createElement(Tip, {
        value : "DR."
      }, "DR."), _prepareStyleProperties2.default.createElement(Tip, {
        value : "DRA."
      }, "DRA."), _prepareStyleProperties2.default.createElement(Tip, {
        value : "MTRO."
      }, "MTRO."), _prepareStyleProperties2.default.createElement(Tip, {
        value : "M.A."
      }, "M.A."), _prepareStyleProperties2.default.createElement(Tip, {
        value : "DIR."
      }, "DIR."), _prepareStyleProperties2.default.createElement(Tip, {
        value : "DIRA."
      }, "DIRA."), _prepareStyleProperties2.default.createElement(Tip, {
        value : "LIC."
      }, "LIC."), _prepareStyleProperties2.default.createElement(Tip, {
        value : "ISC."
      }, "ISC."), _prepareStyleProperties2.default.createElement(Tip, {
        value : "ISI."
      }, "ISI."), _prepareStyleProperties2.default.createElement(Tip, {
        value : "MAI."
      }, "MAI."), _prepareStyleProperties2.default.createElement(Tip, {
        value : "MBT."
      }, "MTB."), _prepareStyleProperties2.default.createElement(Tip, {
        value : "MCT."
      }, "MCT."), _prepareStyleProperties2.default.createElement(Tip, {
        value : "MTI."
      }, "MTI."), _prepareStyleProperties2.default.createElement(Tip, {
        value : "M.A.T.I."
      }, "M.A.T.I."), _prepareStyleProperties2.default.createElement(Tip, {
        value : "M.C."
      }, "M.C.")));
      return _prepareStyleProperties2.default.createElement(_suggestList2.default, {
        visible : visible,
        title : "Agregar nueva empresa",
        okText : "Guardar",
        onCancel : onCancel,
        onOk : onCreate,
        width : 650,
        style : {
          top : 20
        }
      }, _prepareStyleProperties2.default.createElement(params.default, {
        layout : "vertical"
      }, _prepareStyleProperties2.default.createElement(_normalizeDataUri2.default, {
        gutter : 16
      }, _prepareStyleProperties2.default.createElement(_UiIcon2.default, {
        lg : 14,
        xs : 24
      }, _prepareStyleProperties2.default.createElement(data, {
        label : "Nombre de la empresa",
        hasFeedback : true
      }, lint("nombre_empresa", {
        rules : [{
          required : true,
          message : "La empresa debe tener un nombre."
        }]
      })(_prepareStyleProperties2.default.createElement(_suggestItem2.default, {
        placeholder : "Nombre de la empresa"
      })))), _prepareStyleProperties2.default.createElement(_UiIcon2.default, {
        lg : 10,
        xs : 24
      }, _prepareStyleProperties2.default.createElement(data, {
        label : "Seleccione la clasificaci\u00f3n de la empresa",
        hasFeedback : true
      }, lint("clasificacion", {
        rules : [{
          required : true,
          message : "Indique la clasificaci\u00f3n de la empresa"
        }]
      })(_prepareStyleProperties2.default.createElement(_DraggableCore2.default, {
        placeholder : "Selecciona la clasificaci\u00f3n de la empresa"
      }, _prepareStyleProperties2.default.createElement(Tip, {
        value : "industrial"
      }, "Industrial"), _prepareStyleProperties2.default.createElement(Tip, {
        value : "servicios"
      }, "Servicios"), _prepareStyleProperties2.default.createElement(Tip, {
        value : "p\u00fablico"
      }, "P\u00fablico"), _prepareStyleProperties2.default.createElement(Tip, {
        value : "privado"
      }, "Privado")))))), _prepareStyleProperties2.default.createElement(data, {
        label : "RFC",
        hasFeedback : true
      }, lint("rfc", {
        rules : [{
          required : true,
          message : "La empresa debe tener un RFC"
        }, {
          min : 12,
          message : "El RFC debe tener minimo 12 caracteres"
        }, {
          max : 13,
          message : "El RFC debe tener maximo 12 caracteres"
        }]
      })(_prepareStyleProperties2.default.createElement(_suggestItem2.default, {
        placeholder : "RFC de la empresa"
      }))), _prepareStyleProperties2.default.createElement(_normalizeDataUri2.default, {
        gutter : 16
      }, _prepareStyleProperties2.default.createElement(_UiIcon2.default, {
        xs : 24,
        lg : 12
      }, _prepareStyleProperties2.default.createElement(data, {
        label : "Domicilio",
        hasFeedback : true
      }, lint("domicilio", {
        rules : [{
          max : 50,
          message : "El domicilio solo debe tener 50 caracteres"
        }]
      })(_prepareStyleProperties2.default.createElement(_suggestItem2.default, {
        placeholder : "Domicilio de la empresa"
      })))), _prepareStyleProperties2.default.createElement(_UiIcon2.default, {
        xs : 24,
        lg : 12
      }, _prepareStyleProperties2.default.createElement(data, {
        label : "Colonia",
        hasFeedback : true
      }, lint("colonia", {
        rules : [{
          max : 50,
          message : "La colonia solo debe tener 50 caracteres"
        }]
      })(_prepareStyleProperties2.default.createElement(_suggestItem2.default, {
        placeholder : "Colonia de la empresa"
      }))))), _prepareStyleProperties2.default.createElement(_normalizeDataUri2.default, {
        gutter : 16
      }, _prepareStyleProperties2.default.createElement(_UiIcon2.default, {
        lg : 12,
        xs : 24
      }, _prepareStyleProperties2.default.createElement(data, {
        label : "Codigo postal",
        hasFeedback : true
      }, lint("codigo_postal", {
        rules : [{
          len : 5,
          message : "El codigo postal solo debe tener 5 caracteres"
        }]
      })(_prepareStyleProperties2.default.createElement(_suggestItem2.default, {
        placeholder : "Codigo postal de la empresa"
      })))), _prepareStyleProperties2.default.createElement(_UiIcon2.default, {
        lg : 12,
        xs : 24
      }, _prepareStyleProperties2.default.createElement(data, {
        label : "Fax",
        hasFeedback : true
      }, lint("fax", {
        rules : [{
          max : 15,
          message : "El fax debe tener como maximo 15 caracteres"
        }]
      })(_prepareStyleProperties2.default.createElement(_suggestItem2.default, {
        placeholder : "Fax de la empresa"
      })))), _prepareStyleProperties2.default.createElement(_UiIcon2.default, {
        lg : 24,
        xs : 24
      }, _prepareStyleProperties2.default.createElement(data, {
        label : "Misi\u00f3n de la empresa",
        hasFeedback : true
      }, lint("mision", {
        rules : [{
          max : 500,
          message : "La misi\u00f3n debe tener como maximo 500 caracteres"
        }]
      })(_prepareStyleProperties2.default.createElement(_suggestItem2.default.TextArea, {
        placeholder : "Misi\u00f3n de la empresa",
        autosize : {
          minRows : 2,
          maxRows : 6
        }
      }))))), _prepareStyleProperties2.default.createElement(_normalizeDataUri2.default, {
        gutter : 16
      }, _prepareStyleProperties2.default.createElement(_UiIcon2.default, {
        xs : 6,
        lg : 6
      }, _prepareStyleProperties2.default.createElement(data, {
        label : "Puesto del titular",
        hasFeedback : true
      }, lint("puesto_titular", {
        rules : [{
          required : true,
          message : "El titular debe tener un puesto."
        }]
      })(_prepareStyleProperties2.default.createElement(_suggestItem2.default, {
        placeholder : "Puesto del titular"
      })))), _prepareStyleProperties2.default.createElement(_UiIcon2.default, {
        xs : 18,
        lg : 18
      }, _prepareStyleProperties2.default.createElement(data, {
        label : "Nombre completo del titular",
        hasFeedback : true
      }, lint("nombre_titular", {
        rules : [{
          required : true,
          message : "El titular debe tener un nombre."
        }]
      })(_prepareStyleProperties2.default.createElement(_suggestItem2.default, {
        addonBefore : addonBefore,
        placeholder : "Nombre completo del titular"
      }))))), _prepareStyleProperties2.default.createElement(_normalizeDataUri2.default, {
        gutter : 16
      }, _prepareStyleProperties2.default.createElement(_UiIcon2.default, {
        xs : 6,
        lg : 6
      }, _prepareStyleProperties2.default.createElement(data, {
        label : "Puesto del que firma el acuerdo",
        hasFeedback : true
      }, lint("puesto_firma_acuerdo", {
        rules : [{
          required : true,
          message : "El que firma el acuerdo debe tener un puesto."
        }]
      })(_prepareStyleProperties2.default.createElement(_suggestItem2.default, {
        placeholder : "Puesto del que firma el acuerdo"
      })))), _prepareStyleProperties2.default.createElement(_UiIcon2.default, {
        xs : 18,
        lg : 18
      }, _prepareStyleProperties2.default.createElement(data, {
        label : "Nombre completo del que firma el acuerdo de colaboraci\u00f3n",
        hasFeedback : true
      }, lint("nombre_firma_acuerdo", {
        rules : [{
          required : true,
          message : "El que firma el acuerdo debe tener un nombre."
        }]
      })(_prepareStyleProperties2.default.createElement(_suggestItem2.default, {
        addonBefore : i,
        placeholder : "Nombre completo del que firma el acuerdo de colaboraci\u00f3n"
      })))))));
    });
    var offsetFromCenter = function(_EventEmitter) {
      /**
       * @param {!Object} element
       * @return {?}
       */
      function Agent(element) {
        _classCallCheck(this, Agent);
        var $scope = _possibleConstructorReturn(this, (Agent.__proto__ || Object.getPrototypeOf(Agent)).call(this, element));
        return $scope.showModal = function() {
          $scope.setState({
            visible : true
          });
        }, $scope.handleCancel = function() {
          $scope.setState({
            visible : false
          });
          $scope.form.resetFields();
        }, $scope.handleCreate = function() {
          var form = $scope.form;
          form.validateFields(function(canCreateDiscussions, data) {
            if (!canCreateDiscussions) {
              _Trans2.default.post("/api/empresa", {
                nombre : data.nombre_empresa,
                clasificacion : data.clasificacion,
                rfc : data.rfc,
                domicilio : data.domicilio || "",
                colonia : data.colonia || "",
                codigo_postal : data.codigo_postal || "",
                fax : data.fax || "",
                mision : data.mision || "",
                titulo_titular : data.titulo_titular,
                puesto_titular : data.puesto_titular,
                nombre_titular : "" + data.nombre_titular,
                titulo_firma_acuerdo : data.titulo_firma_acuerdo,
                puesto_firma_acuerdo : data.puesto_firma_acuerdo,
                nombre_firma_acuerdo : "" + data.nombre_firma_acuerdo
              }).then(function(getFilesReply) {
                if (200 === getFilesReply.status) {
                  form.resetFields();
                  _deepAssign2.default.success("Empresa agregada satisfactoriamente");
                  $scope.setState({
                    visible : false
                  });
                  $scope.props.onAddEmpresa();
                } else {
                  _suggestList2.default.error({
                    title : "Error al guardar la empresa. Revisar los siguientes campos",
                    content : _prepareStyleProperties2.default.createElement("div", null, getFilesReply.data.errores),
                    onOk : function() {
                    }
                  });
                }
              }).catch(function(mnemonics) {
                _deepAssign2.default.error(mnemonics);
              });
            }
          });
        }, $scope.saveFormRef = function(data) {
          /** @type {!Object} */
          $scope.form = data;
        }, $scope.state = {
          visible : element.visible
        }, $scope;
      }
      return _inherits(Agent, _EventEmitter), _createClass(Agent, [{
        key : "componentWillReceiveProps",
        value : function(_ref) {
          var visible = _ref.visible;
          this.setState({
            visible : visible
          });
        }
      }, {
        key : "render",
        value : function() {
          return _prepareStyleProperties2.default.createElement("div", null, _prepareStyleProperties2.default.createElement(DropIndicator, {
            ref : this.saveFormRef,
            visible : this.state.visible,
            onCancel : this.handleCancel,
            onCreate : this.handleCreate
          }));
        }
      }]), Agent;
    }(_prepareStyleProperties.Component);
    t.default = offsetFromCenter;
  },
  937 : function(cond, t, __webpack_require__) {
    /**
     * @param {!Object} obj
     * @return {?}
     */
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default : obj
      };
    }
    /**
     * @param {!AudioNode} instance
     * @param {!Function} Constructor
     * @return {undefined}
     */
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    /**
     * @param {string} self
     * @param {string} call
     * @return {?}
     */
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return !call || "object" != typeof call && "function" != typeof call ? self : call;
    }
    /**
     * @param {!Object} subClass
     * @param {!Object} superClass
     * @return {undefined}
     */
    function _inherits(subClass, superClass) {
      if ("function" != typeof superClass && null !== superClass) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      /** @type {!Object} */
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor : {
          value : subClass,
          enumerable : false,
          writable : true,
          configurable : true
        }
      });
      if (superClass) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(subClass, superClass);
        } else {
          /** @type {!Object} */
          subClass.__proto__ = superClass;
        }
      }
    }
    Object.defineProperty(t, "__esModule", {
      value : true
    });
    var _deepAssign = (__webpack_require__(15), __webpack_require__(16));
    var _deepAssign2 = _interopRequireDefault(_deepAssign);
    var _suggestList = (__webpack_require__(28), __webpack_require__(29));
    var _suggestList2 = _interopRequireDefault(_suggestList);
    var _normalizeDataUri = (__webpack_require__(33), __webpack_require__(34));
    var _normalizeDataUri2 = _interopRequireDefault(_normalizeDataUri);
    var _UiIcon = (__webpack_require__(31), __webpack_require__(32));
    var _UiIcon2 = _interopRequireDefault(_UiIcon);
    var _DraggableCore = (__webpack_require__(24), __webpack_require__(25));
    var _DraggableCore2 = _interopRequireDefault(_DraggableCore);
    var _suggestItem = (__webpack_require__(18), __webpack_require__(22));
    var _suggestItem2 = _interopRequireDefault(_suggestItem);
    var _ = (__webpack_require__(19), __webpack_require__(20));
    var params = _interopRequireDefault(_);
    var _createClass = function() {
      /**
       * @param {!Function} d
       * @param {string} props
       * @return {undefined}
       */
      function e(d, props) {
        /** @type {number} */
        var i = 0;
        for (; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          /** @type {boolean} */
          descriptor.configurable = true;
          if ("value" in descriptor) {
            /** @type {boolean} */
            descriptor.writable = true;
          }
          Object.defineProperty(d, descriptor.key, descriptor);
        }
      }
      return function(t, n, a) {
        return n && e(t.prototype, n), a && e(t, a), t;
      };
    }();
    var _prepareStyleProperties = __webpack_require__(0);
    var _prepareStyleProperties2 = _interopRequireDefault(_prepareStyleProperties);
    var _classlist = (__webpack_require__(11), __webpack_require__(12));
    var _classlist2 = _interopRequireDefault(_classlist);
    var DropIndicator = params.default.Item;
    var Tip = (_suggestItem2.default.Group, _DraggableCore2.default.Option);
    var FormioElement = params.default.create()(function(options) {
      var visible = options.visible;
      var onCancel = options.onCancel;
      var onCreate = options.onCreate;
      var config = options.form;
      var data = options.empresa;
      var lint = config.getFieldDecorator;
      var addonBefore = lint("titulo_titular", {
        initialValue : data.titular ? data.titular.titulo : "ING."
      })(_prepareStyleProperties2.default.createElement(_DraggableCore2.default, {
        style : {
          width : 60
        }
      }, _prepareStyleProperties2.default.createElement(Tip, {
        value : "ING."
      }, "ING."), _prepareStyleProperties2.default.createElement(Tip, {
        value : "DR."
      }, "DR."), _prepareStyleProperties2.default.createElement(Tip, {
        value : "DRA."
      }, "DRA."), _prepareStyleProperties2.default.createElement(Tip, {
        value : "MTRO."
      }, "MTRO."), _prepareStyleProperties2.default.createElement(Tip, {
        value : "DIR."
      }, "DIR."), _prepareStyleProperties2.default.createElement(Tip, {
        value : "DIRA."
      }, "DIRA."), _prepareStyleProperties2.default.createElement(Tip, {
        value : "LIC."
      }, "LIC."), _prepareStyleProperties2.default.createElement(Tip, {
        value : "ISC."
      }, "ISC."), _prepareStyleProperties2.default.createElement(Tip, {
        value : "ISI."
      }, "ISI."), _prepareStyleProperties2.default.createElement(Tip, {
        value : "MAI."
      }, "MAI."), _prepareStyleProperties2.default.createElement(Tip, {
        value : "MBT."
      }, "MTB."), _prepareStyleProperties2.default.createElement(Tip, {
        value : "MCT."
      }, "MCT."), _prepareStyleProperties2.default.createElement(Tip, {
        value : "MTI."
      }, "MTI."), _prepareStyleProperties2.default.createElement(Tip, {
        value : "M.A.T.I."
      }, "M.A.T.I."), _prepareStyleProperties2.default.createElement(Tip, {
        value : "M.C."
      }, "M.C.")));
      var u = lint("titulo_firma_acuerdo", {
        initialValue : data.representante_legal ? data.representante_legal.titulo : "ING."
      })(_prepareStyleProperties2.default.createElement(_DraggableCore2.default, {
        style : {
          width : 60
        }
      }, _prepareStyleProperties2.default.createElement(Tip, {
        value : "ING."
      }, "ING."), _prepareStyleProperties2.default.createElement(Tip, {
        value : "DR."
      }, "DR."), _prepareStyleProperties2.default.createElement(Tip, {
        value : "DRA."
      }, "DRA."), _prepareStyleProperties2.default.createElement(Tip, {
        value : "MTRO."
      }, "MTRO."), _prepareStyleProperties2.default.createElement(Tip, {
        value : "DIR."
      }, "DIR."), _prepareStyleProperties2.default.createElement(Tip, {
        value : "DIRA."
      }, "DIRA."), _prepareStyleProperties2.default.createElement(Tip, {
        value : "LIC."
      }, "LIC."), _prepareStyleProperties2.default.createElement(Tip, {
        value : "ISC."
      }, "ISC."), _prepareStyleProperties2.default.createElement(Tip, {
        value : "ISI."
      }, "ISI."), _prepareStyleProperties2.default.createElement(Tip, {
        value : "MAI."
      }, "MAI."), _prepareStyleProperties2.default.createElement(Tip, {
        value : "MBT."
      }, "MTB."), _prepareStyleProperties2.default.createElement(Tip, {
        value : "MCT."
      }, "MCT."), _prepareStyleProperties2.default.createElement(Tip, {
        value : "MTI."
      }, "MTI."), _prepareStyleProperties2.default.createElement(Tip, {
        value : "M.A.T.I."
      }, "M.A.T.I."), _prepareStyleProperties2.default.createElement(Tip, {
        value : "M.C."
      }, "M.C.")));
      return _prepareStyleProperties2.default.createElement(_suggestList2.default, {
        visible : visible,
        title : "Editar la empresa " + data.nombre,
        okText : "Actualizar",
        onCancel : onCancel,
        onOk : onCreate,
        width : 650,
        style : {
          top : 20
        }
      }, _prepareStyleProperties2.default.createElement(params.default, {
        layout : "vertical"
      }, _prepareStyleProperties2.default.createElement(DropIndicator, {
        label : "RFC",
        hasFeedback : true
      }, lint("rfc", {
        rules : [{
          required : true,
          message : "La empresa debe tener un RFC"
        }, {
          min : 12,
          message : "El RFC debe tener minimo 12 caracteres"
        }, {
          max : 13,
          message : "El RFC debe tener maximo 12 caracteres"
        }],
        initialValue : data.detalles ? data.detalles.rfc : ""
      })(_prepareStyleProperties2.default.createElement(_suggestItem2.default, {
        placeholder : "RFC de la empresa"
      }))), _prepareStyleProperties2.default.createElement(_normalizeDataUri2.default, {
        gutter : 16
      }, _prepareStyleProperties2.default.createElement(_UiIcon2.default, {
        xs : 24,
        lg : 12
      }, _prepareStyleProperties2.default.createElement(DropIndicator, {
        label : "Domicilio",
        hasFeedback : true
      }, lint("domicilio", {
        rules : [{
          max : 30,
          message : "El domicilio solo debe tener 30 caracteres"
        }],
        initialValue : data.detalles ? data.detalles.domicilio_only : ""
      })(_prepareStyleProperties2.default.createElement(_suggestItem2.default, {
        placeholder : "Domicilio de la empresa"
      })))), _prepareStyleProperties2.default.createElement(_UiIcon2.default, {
        xs : 24,
        lg : 12
      }, _prepareStyleProperties2.default.createElement(DropIndicator, {
        label : "Colonia",
        hasFeedback : true
      }, lint("colonia", {
        rules : [{
          max : 30,
          message : "La colonia solo debe tener 30 caracteres"
        }],
        initialValue : data.detalles ? data.detalles.colonia : ""
      })(_prepareStyleProperties2.default.createElement(_suggestItem2.default, {
        placeholder : "Colonia de la empresa"
      }))))), _prepareStyleProperties2.default.createElement(_normalizeDataUri2.default, {
        gutter : 16
      }, _prepareStyleProperties2.default.createElement(_UiIcon2.default, {
        lg : 12,
        xs : 24
      }, _prepareStyleProperties2.default.createElement(DropIndicator, {
        label : "Codigo postal",
        hasFeedback : true
      }, lint("codigo_postal", {
        rules : [{
          len : 5,
          message : "El codigo postal solo debe tener 5 caracteres"
        }],
        initialValue : data.detalles ? data.detalles.codigo_postal : ""
      })(_prepareStyleProperties2.default.createElement(_suggestItem2.default, {
        placeholder : "Codigo postal de la empresa"
      })))), _prepareStyleProperties2.default.createElement(_UiIcon2.default, {
        lg : 12,
        xs : 24
      }, _prepareStyleProperties2.default.createElement(DropIndicator, {
        label : "Fax",
        hasFeedback : true
      }, lint("fax", {
        rules : [{
          max : 15,
          message : "El fax debe tener como maximo 15 caracteres"
        }],
        initialValue : data.detalles ? data.detalles.fax : ""
      })(_prepareStyleProperties2.default.createElement(_suggestItem2.default, {
        placeholder : "Fax de la empresa"
      })))), _prepareStyleProperties2.default.createElement(_UiIcon2.default, {
        lg : 24,
        xs : 24
      }, _prepareStyleProperties2.default.createElement(DropIndicator, {
        label : "Misi\u00f3n de la empresa",
        hasFeedback : true
      }, lint("mision", {
        rules : [{
          max : 500,
          message : "La misi\u00f3n debe tener como maximo 500 caracteres"
        }],
        initialValue : data.detalles ? data.detalles.mision : ""
      })(_prepareStyleProperties2.default.createElement(_suggestItem2.default.TextArea, {
        placeholder : "Misi\u00f3n de la empresa",
        autosize : {
          minRows : 2,
          maxRows : 6
        }
      }))))), _prepareStyleProperties2.default.createElement(_normalizeDataUri2.default, {
        gutter : 16
      }, _prepareStyleProperties2.default.createElement(_UiIcon2.default, {
        xs : 6,
        lg : 6
      }, _prepareStyleProperties2.default.createElement(DropIndicator, {
        label : "Puesto del titular",
        hasFeedback : true
      }, lint("puesto_titular", {
        rules : [{
          required : true,
          message : "El titular debe tener un puesto."
        }],
        initialValue : data.titular ? data.titular.puesto : ""
      })(_prepareStyleProperties2.default.createElement(_suggestItem2.default, {
        placeholder : "Puesto del titular"
      })))), _prepareStyleProperties2.default.createElement(_UiIcon2.default, {
        xs : 18,
        lg : 18
      }, _prepareStyleProperties2.default.createElement(DropIndicator, {
        label : "Nombre completo del titular",
        hasFeedback : true
      }, lint("nombre_titular", {
        rules : [{
          required : true,
          message : "El titular debe tener un nombre."
        }],
        initialValue : data.titular ? data.titular.nombre : ""
      })(_prepareStyleProperties2.default.createElement(_suggestItem2.default, {
        addonBefore : addonBefore,
        placeholder : "Nombre completo del titular"
      }))))), _prepareStyleProperties2.default.createElement(_normalizeDataUri2.default, {
        gutter : 16
      }, _prepareStyleProperties2.default.createElement(_UiIcon2.default, {
        xs : 6,
        lg : 6
      }, _prepareStyleProperties2.default.createElement(DropIndicator, {
        label : "Puesto del que firma el acuerdo",
        hasFeedback : true
      }, lint("puesto_firma_acuerdo", {
        rules : [{
          required : true,
          message : "El que firma el acuerdo debe tener un puesto."
        }],
        initialValue : data.representante_legal ? data.representante_legal.puesto : ""
      })(_prepareStyleProperties2.default.createElement(_suggestItem2.default, {
        placeholder : "Puesto del que firma el acuerdo"
      })))), _prepareStyleProperties2.default.createElement(_UiIcon2.default, {
        xs : 18,
        lg : 18
      }, _prepareStyleProperties2.default.createElement(DropIndicator, {
        label : "Nombre completo del que firma el acuerdo de colaboraci\u00f3n",
        hasFeedback : true
      }, lint("nombre_firma_acuerdo", {
        rules : [{
          required : true,
          message : "El que firma el acuerdo debe tener un nombre."
        }],
        initialValue : data.representante_legal ? data.representante_legal.nombre : ""
      })(_prepareStyleProperties2.default.createElement(_suggestItem2.default, {
        addonBefore : u,
        placeholder : "Nombre completo del que firma el acuerdo de colaboraci\u00f3n"
      })))))));
    });
    var offsetFromCenter = function(_EventEmitter) {
      /**
       * @param {!Object} element
       * @return {?}
       */
      function Agent(element) {
        _classCallCheck(this, Agent);
        var $scope = _possibleConstructorReturn(this, (Agent.__proto__ || Object.getPrototypeOf(Agent)).call(this, element));
        return $scope.showModal = function() {
          $scope.setState({
            visible : true
          });
        }, $scope.handleCancel = function() {
          $scope.setState({
            visible : false
          });
          $scope.form.resetFields();
        }, $scope.handleCreate = function() {
          var form = $scope.form;
          var remainingNode = $scope.state.empresa;
          form.validateFields(function(n, data) {
            if (!n) {
              _classlist2.default.put("/api/empresa/" + remainingNode.id, {
                rfc : data.rfc,
                domicilio : data.domicilio || "",
                colonia : data.colonia || "",
                codigo_postal : data.codigo_postal || "",
                fax : data.fax || "",
                mision : data.mision || "",
                id_titular : remainingNode.titular.id,
                titulo_titular : data.titulo_titular,
                puesto_titular : data.puesto_titular,
                nombre_titular : "" + data.nombre_titular,
                id_firma_acuerdo : remainingNode.representante_legal.id,
                titulo_firma_acuerdo : data.titulo_firma_acuerdo,
                puesto_firma_acuerdo : data.puesto_firma_acuerdo,
                nombre_firma_acuerdo : "" + data.nombre_firma_acuerdo
              }).then(function(t) {
                console.log(t);
                if (200 === t.status) {
                  form.resetFields();
                  _deepAssign2.default.success("Empresa actualizada satisfactoriamente");
                  $scope.setState({
                    visible : false
                  });
                  $scope.props.onReloadFetch();
                } else {
                  _suggestList2.default.error({
                    title : "Error al actualizar la empresa. Revisar los siguientes campos",
                    content : _prepareStyleProperties2.default.createElement("div", null, t.data.errores),
                    onOk : function() {
                    }
                  });
                }
              }).catch(function(mnemonics) {
                _deepAssign2.default.error(mnemonics);
              });
            }
          });
        }, $scope.saveFormRef = function(data) {
          /** @type {!Object} */
          $scope.form = data;
        }, $scope.state = {
          visible : element.visible,
          empresa : element.empresa
        }, $scope;
      }
      return _inherits(Agent, _EventEmitter), _createClass(Agent, [{
        key : "componentWillReceiveProps",
        value : function(_ref) {
          var visible = _ref.visible;
          var _ref$mapStateToPropsF = _ref.empresa;
          this.setState({
            visible : visible,
            empresa : _ref$mapStateToPropsF
          });
        }
      }, {
        key : "render",
        value : function() {
          return console.log("AQUI", this.state.empresa), _prepareStyleProperties2.default.createElement("div", null, _prepareStyleProperties2.default.createElement(FormioElement, {
            ref : this.saveFormRef,
            visible : this.state.visible,
            onCancel : this.handleCancel,
            onCreate : this.handleCreate,
            empresa : this.state.empresa
          }));
        }
      }]), Agent;
    }(_prepareStyleProperties.Component);
    t.default = offsetFromCenter;
  },
  938 : function(module, exports, __webpack_require__) {
    /**
     * @param {!Object} obj
     * @return {?}
     */
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default : obj
      };
    }
    /**
     * @param {!AudioNode} instance
     * @param {!Function} Constructor
     * @return {undefined}
     */
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    /**
     * @param {string} self
     * @param {string} call
     * @return {?}
     */
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return !call || "object" != typeof call && "function" != typeof call ? self : call;
    }
    /**
     * @param {!Object} subClass
     * @param {!Object} superClass
     * @return {undefined}
     */
    function _inherits(subClass, superClass) {
      if ("function" != typeof superClass && null !== superClass) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      /** @type {!Object} */
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor : {
          value : subClass,
          enumerable : false,
          writable : true,
          configurable : true
        }
      });
      if (superClass) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(subClass, superClass);
        } else {
          /** @type {!Object} */
          subClass.__proto__ = superClass;
        }
      }
    }
    Object.defineProperty(exports, "__esModule", {
      value : true
    });
    var _deepAssign = (__webpack_require__(15), __webpack_require__(16));
    var _deepAssign2 = _interopRequireDefault(_deepAssign);
    var _suggestItem = (__webpack_require__(28), __webpack_require__(29));
    var _suggestItem2 = _interopRequireDefault(_suggestItem);
    var _normalizeDataUri = (__webpack_require__(35), __webpack_require__(13));
    var _normalizeDataUri2 = _interopRequireDefault(_normalizeDataUri);
    var _suggestList = (__webpack_require__(24), __webpack_require__(25));
    var _suggestList2 = _interopRequireDefault(_suggestList);
    var _DraggableCore = (__webpack_require__(18), __webpack_require__(22));
    var _DraggableCore2 = _interopRequireDefault(_DraggableCore);
    var _UiIcon = (__webpack_require__(19), __webpack_require__(20));
    var params = _interopRequireDefault(_UiIcon);
    var _createClass = function() {
      /**
       * @param {!Function} d
       * @param {string} props
       * @return {undefined}
       */
      function e(d, props) {
        /** @type {number} */
        var i = 0;
        for (; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          /** @type {boolean} */
          descriptor.configurable = true;
          if ("value" in descriptor) {
            /** @type {boolean} */
            descriptor.writable = true;
          }
          Object.defineProperty(d, descriptor.key, descriptor);
        }
      }
      return function(t, n, a) {
        return n && e(t.prototype, n), a && e(t, a), t;
      };
    }();
    var _prepareStyleProperties = __webpack_require__(0);
    var _prepareStyleProperties2 = _interopRequireDefault(_prepareStyleProperties);
    var _Trans = (__webpack_require__(11), __webpack_require__(12));
    var _Trans2 = _interopRequireDefault(_Trans);
    var Route = params.default.Item;
    var Tip = (_DraggableCore2.default.Group, _suggestList2.default.Option);
    var DropIndicator = params.default.create()(function(options) {
      var visible = options.visible;
      var onCancel = options.onCancel;
      var onCreate = options.onCreate;
      var def = options.form;
      var readOnlyFn = options.empresa;
      var extendWidget = def.getFieldDecorator;
      var addonBefore = extendWidget("titulo", {
        initialValue : "ING."
      })(_prepareStyleProperties2.default.createElement(_suggestList2.default, {
        style : {
          width : 60
        }
      }, _prepareStyleProperties2.default.createElement(Tip, {
        value : "ING."
      }, "ING."), _prepareStyleProperties2.default.createElement(Tip, {
        value : "DR."
      }, "DR."), _prepareStyleProperties2.default.createElement(Tip, {
        value : "DRA."
      }, "DRA."), _prepareStyleProperties2.default.createElement(Tip, {
        value : "MTRO."
      }, "MTRO."), _prepareStyleProperties2.default.createElement(Tip, {
        value : "DIR."
      }, "DIR."), _prepareStyleProperties2.default.createElement(Tip, {
        value : "DIRA."
      }, "DIRA."), _prepareStyleProperties2.default.createElement(Tip, {
        value : "LIC."
      }, "LIC."), _prepareStyleProperties2.default.createElement(Tip, {
        value : "ISC."
      }, "ISC."), _prepareStyleProperties2.default.createElement(Tip, {
        value : "ISI."
      }, "ISI."), _prepareStyleProperties2.default.createElement(Tip, {
        value : "MAI."
      }, "MAI."), _prepareStyleProperties2.default.createElement(Tip, {
        value : "MBT."
      }, "MTB."), _prepareStyleProperties2.default.createElement(Tip, {
        value : "MCT."
      }, "MCT."), _prepareStyleProperties2.default.createElement(Tip, {
        value : "MTI."
      }, "MTI."), _prepareStyleProperties2.default.createElement(Tip, {
        value : "M.A.T.I."
      }, "M.A.T.I."), _prepareStyleProperties2.default.createElement(Tip, {
        value : "M.C."
      }, "M.C.")));
      return _prepareStyleProperties2.default.createElement(_suggestItem2.default, {
        visible : visible,
        title : "Agregar asesor a la empresa " + readOnlyFn.nombre_empresa,
        okText : "Guardar",
        onCancel : onCancel,
        onOk : onCreate
      }, _prepareStyleProperties2.default.createElement(params.default, {
        layout : "vertical"
      }, _prepareStyleProperties2.default.createElement(Route, {
        label : "Nombre completo del asesor externo"
      }, extendWidget("nombre", {
        rules : [{
          required : true,
          message : "El docente debe tener un nombre."
        }]
      })(_prepareStyleProperties2.default.createElement(_DraggableCore2.default, {
        addonBefore : addonBefore,
        style : {
          width : "100%"
        },
        placeholder : "Nombre completo del asesor externo"
      }))), _prepareStyleProperties2.default.createElement(Route, {
        label : "Puesto del asesor externo"
      }, extendWidget("puesto", {
        rules : [{
          required : true,
          message : "El docente debe tener un puesto dentro de la empresa."
        }]
      })(_prepareStyleProperties2.default.createElement(_DraggableCore2.default, {
        style : {
          width : "100%"
        },
        placeholder : "Puesto del asesor externo"
      }))), _prepareStyleProperties2.default.createElement(Route, {
        label : "Correo del asesor externo"
      }, extendWidget("correo", {
        rules : [{
          type : "email",
          message : "El email no es correcto"
        }, {
          required : true,
          message : "El correo es obligatorio."
        }]
      })(_prepareStyleProperties2.default.createElement(_DraggableCore2.default, {
        prefix : _prepareStyleProperties2.default.createElement(_normalizeDataUri2.default, {
          type : "user",
          style : {
            fontSize : 13
          }
        }),
        type : "email",
        placeholder : "Ingrese su correo electronico"
      })))));
    });
    var indexedDBManager = function(_EventEmitter) {
      /**
       * @param {!Object} element
       * @return {?}
       */
      function Agent(element) {
        _classCallCheck(this, Agent);
        var $scope = _possibleConstructorReturn(this, (Agent.__proto__ || Object.getPrototypeOf(Agent)).call(this, element));
        return $scope.showModal = function() {
          $scope.setState({
            visible : true
          });
        }, $scope.handleCancel = function() {
          $scope.setState({
            visible : false
          });
        }, $scope.handleCreate = function() {
          var form = $scope.form;
          form.validateFields(function(canCreateDiscussions, $routeParams) {
            if (!canCreateDiscussions) {
              console.log("Received values of form: ", $routeParams);
              _Trans2.default.post("/api/asesor_externo", {
                nombre : $routeParams.titulo + " " + $routeParams.nombre,
                puesto : $routeParams.puesto,
                correo : $routeParams.correo,
                id_empresa : $scope.state.empresa.id_empresa
              }).then(function(t) {
                console.log(t);
                if (200 === t.status) {
                  _deepAssign2.default.success("Asesor agregado satisfactoriamente");
                  $scope.setState({
                    visible : false
                  });
                  form.resetFields();
                  $scope.props.onReloadFetch();
                } else {
                  _suggestItem2.default.error({
                    title : "Error al guardar al asesor externo. Revisar los siguientes campos",
                    content : _prepareStyleProperties2.default.createElement("div", null, t.data.errores),
                    onOk : function() {
                    }
                  });
                }
              }).catch(function(descriptionError) {
                console.log(descriptionError);
                _deepAssign2.default.error(descriptionError);
              });
            }
          });
        }, $scope.saveFormRef = function(data) {
          /** @type {!Object} */
          $scope.form = data;
        }, $scope.state = {
          visible : element.visible,
          empresa : element.empresa
        }, $scope;
      }
      return _inherits(Agent, _EventEmitter), _createClass(Agent, [{
        key : "componentWillReceiveProps",
        value : function(_ref) {
          var visible = _ref.visible;
          var _ref$mapStateToPropsF = _ref.empresa;
          this.setState({
            visible : visible,
            empresa : _ref$mapStateToPropsF
          });
        }
      }, {
        key : "render",
        value : function() {
          return _prepareStyleProperties2.default.createElement("div", null, _prepareStyleProperties2.default.createElement(DropIndicator, {
            ref : this.saveFormRef,
            visible : this.state.visible,
            onCancel : this.handleCancel,
            onCreate : this.handleCreate,
            empresa : this.state.empresa
          }));
        }
      }]), Agent;
    }(_prepareStyleProperties.Component);
    exports.default = indexedDBManager;
  },
  939 : function(cond, t, s) {
    /**
     * @param {!Object} obj
     * @return {?}
     */
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default : obj
      };
    }
    /**
     * @param {!AudioNode} instance
     * @param {!Function} Constructor
     * @return {undefined}
     */
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    /**
     * @param {string} self
     * @param {string} call
     * @return {?}
     */
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return !call || "object" != typeof call && "function" != typeof call ? self : call;
    }
    /**
     * @param {!Object} subClass
     * @param {!Object} superClass
     * @return {undefined}
     */
    function _inherits(subClass, superClass) {
      if ("function" != typeof superClass && null !== superClass) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      /** @type {!Object} */
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor : {
          value : subClass,
          enumerable : false,
          writable : true,
          configurable : true
        }
      });
      if (superClass) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(subClass, superClass);
        } else {
          /** @type {!Object} */
          subClass.__proto__ = superClass;
        }
      }
    }
    Object.defineProperty(t, "__esModule", {
      value : true
    });
    var _suggestItem = (s(33), s(34));
    var _suggestItem2 = _interopRequireDefault(_suggestItem);
    var _suggestList = (s(50), s(51));
    var _suggestList2 = _interopRequireDefault(_suggestList);
    var _DraggableCore = (s(37), s(36));
    var _DraggableCore2 = _interopRequireDefault(_DraggableCore);
    var _UiIcon = (s(15), s(16));
    var _UiIcon2 = _interopRequireDefault(_UiIcon);
    var _createClass = function() {
      /**
       * @param {!Function} d
       * @param {string} props
       * @return {undefined}
       */
      function e(d, props) {
        /** @type {number} */
        var i = 0;
        for (; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          /** @type {boolean} */
          descriptor.configurable = true;
          if ("value" in descriptor) {
            /** @type {boolean} */
            descriptor.writable = true;
          }
          Object.defineProperty(d, descriptor.key, descriptor);
        }
      }
      return function(t, n, a) {
        return n && e(t.prototype, n), a && e(t, a), t;
      };
    }();
    var _prepareStyleProperties = s(0);
    var _prepareStyleProperties2 = _interopRequireDefault(_prepareStyleProperties);
    var a = s(11);
    var _deepAssign = (_interopRequireDefault(a), s(12));
    var _deepAssign2 = _interopRequireDefault(_deepAssign);
    var offsetFromCenter = function(_EventEmitter) {
      /**
       * @return {?}
       */
      function Agent() {
        _classCallCheck(this, Agent);
        var _this = _possibleConstructorReturn(this, (Agent.__proto__ || Object.getPrototypeOf(Agent)).call(this));
        return _this.fetchUsuarios = function() {
          _deepAssign2.default.get("/api/usuarios").then(function(t) {
            if (200 === t.status) {
              var a = t.data.map(function(target_workspace, awsKey) {
                return {
                  id : target_workspace.id,
                  correo : target_workspace.correo,
                  rol : target_workspace.rol,
                  key : awsKey
                };
              });
              _this.setState({
                usuarios : a,
                loadTable : false
              });
            }
          });
        }, _this.enviarContrasenia = function(formatters, customFormatters) {
          _deepAssign2.default.put("/api/usuario/cambiar_contrasenia/email", {
            id_usuario : formatters,
            correo : customFormatters
          }).then(function(testsStatus) {
            if (200 === testsStatus.status) {
              _UiIcon2.default.success("Contrase\u00f1a nueva enviada al correo del usuario!");
            } else {
              _UiIcon2.default.error("Surgio un error, verificar conexi\u00f3n");
            }
          });
        }, _this.state = {
          usuarios : [],
          loadTable : true
        }, _this;
      }
      return _inherits(Agent, _EventEmitter), _createClass(Agent, [{
        key : "componentDidMount",
        value : function() {
          this.fetchUsuarios();
        }
      }, {
        key : "render",
        value : function() {
          var that = this;
          var state = this.state;
          var options = state.usuarios;
          var loading = state.loadTable;
          /** @type {!Array} */
          var pivotColValues = [{
            title : "correo",
            dataIndex : "correo",
            key : "correo"
          }, {
            title : "rol",
            dataIndex : "rol",
            key : "rol",
            filters : [{
              text : "docente",
              value : "docente"
            }, {
              text : "residente",
              value : "residente"
            }, {
              text : "candidato_residente",
              value : "candidato_residente"
            }, {
              text : "jefe_departamento",
              value : "jefe_departamento"
            }, {
              text : "asesor_externo",
              value : "asesor_externo"
            }, {
              text : "subdirector_academico",
              value : "subdirector_academico"
            }],
            onFilter : function(e, cb) {
              return 0 === cb.rol.indexOf(e);
            }
          }, {
            className : "center-text",
            title : "Recuperar contrase\u00f1a",
            dataIndex : "recover",
            key : "recover",
            render : function(host, a) {
              return _prepareStyleProperties2.default.createElement(_DraggableCore2.default, {
                icon : "reload",
                onClick : function() {
                  return that.enviarContrasenia(a.id, a.correo);
                }
              }, "Enviar nueva contrase\u00f1a a su correo");
            }
          }];
          return _prepareStyleProperties2.default.createElement("div", null, _prepareStyleProperties2.default.createElement("h3", null, "Usuarios del sistema"), _prepareStyleProperties2.default.createElement(_suggestItem2.default, {
            type : "flex",
            style : {
              marginTop : 20
            }
          }, _prepareStyleProperties2.default.createElement(_suggestList2.default, {
            dataSource : options,
            columns : pivotColValues,
            pagination : {
              pageSize : 10
            },
            loading : loading,
            scroll : {
              x : 1100
            }
          })));
        }
      }]), Agent;
    }(_prepareStyleProperties.Component);
    t.default = offsetFromCenter;
  },
  940 : function(module, exports, __webpack_require__) {
    /**
     * @param {!Object} obj
     * @return {?}
     */
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default : obj
      };
    }
    /**
     * @param {!AudioNode} instance
     * @param {!Function} Constructor
     * @return {undefined}
     */
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    /**
     * @param {string} self
     * @param {string} call
     * @return {?}
     */
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return !call || "object" != typeof call && "function" != typeof call ? self : call;
    }
    /**
     * @param {!Object} subClass
     * @param {!Object} superClass
     * @return {undefined}
     */
    function _inherits(subClass, superClass) {
      if ("function" != typeof superClass && null !== superClass) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      /** @type {!Object} */
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor : {
          value : subClass,
          enumerable : false,
          writable : true,
          configurable : true
        }
      });
      if (superClass) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(subClass, superClass);
        } else {
          /** @type {!Object} */
          subClass.__proto__ = superClass;
        }
      }
    }
    Object.defineProperty(exports, "__esModule", {
      value : true
    });
    var _suggestList = (__webpack_require__(35), __webpack_require__(13));
    var _suggestList2 = _interopRequireDefault(_suggestList);
    var _normalizeDataUri = (__webpack_require__(98), __webpack_require__(86));
    var _normalizeDataUri2 = _interopRequireDefault(_normalizeDataUri);
    var _UiIcon = (__webpack_require__(65), __webpack_require__(66));
    var _UiIcon2 = _interopRequireDefault(_UiIcon);
    var _createClass = function() {
      /**
       * @param {!Function} d
       * @param {string} props
       * @return {undefined}
       */
      function e(d, props) {
        /** @type {number} */
        var i = 0;
        for (; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          /** @type {boolean} */
          descriptor.configurable = true;
          if ("value" in descriptor) {
            /** @type {boolean} */
            descriptor.writable = true;
          }
          Object.defineProperty(d, descriptor.key, descriptor);
        }
      }
      return function(t, n, a) {
        return n && e(t.prototype, n), a && e(t, a), t;
      };
    }();
    var _prepareStyleProperties = __webpack_require__(0);
    var _prepareStyleProperties2 = _interopRequireDefault(_prepareStyleProperties);
    var _srcVideojsDailymotion = (__webpack_require__(11), __webpack_require__(2));
    var route = (_interopRequireDefault(_srcVideojsDailymotion), __webpack_require__(62));
    var _AboutPage = __webpack_require__(12);
    var _AboutPage2 = _interopRequireDefault(_AboutPage);
    var __WEBPACK_IMPORTED_MODULE_11_date_fns_end_of_month__ = __webpack_require__(99);
    var _classlist = __webpack_require__(453);
    var _DraggableCore = (_interopRequireDefault(_classlist), __webpack_require__(454));
    var _DraggableCore2 = _interopRequireDefault(_DraggableCore);
    var _deepAssign = __webpack_require__(941);
    var _deepAssign2 = _interopRequireDefault(_deepAssign);
    var _CalendarDay = __webpack_require__(100);
    var _CalendarDay2 = _interopRequireDefault(_CalendarDay);
    var _noframeworkWaypoints = __webpack_require__(452);
    var _noframeworkWaypoints2 = _interopRequireDefault(_noframeworkWaypoints);
    var _custom = __webpack_require__(943);
    var _custom2 = _interopRequireDefault(_custom);
    var _AppDownload = __webpack_require__(1018);
    var _AppDownload2 = _interopRequireDefault(_AppDownload);
    var _CalendarEvent = __webpack_require__(474);
    var _CalendarEvent2 = _interopRequireDefault(_CalendarEvent);
    var _buildPageNumber = __webpack_require__(490);
    var _buildPageNumber2 = _interopRequireDefault(_buildPageNumber);
    var _toHyphenCase = __webpack_require__(1101);
    var _toHyphenCase2 = _interopRequireDefault(_toHyphenCase);
    var _CalendarTitle = __webpack_require__(496);
    var _CalendarTitle2 = _interopRequireDefault(_CalendarTitle);
    var DropIndicator = _UiIcon2.default.Header;
    var ResultsTableComponent = _UiIcon2.default.Content;
    var Footer = _UiIcon2.default.Footer;
    var FormioElement = _UiIcon2.default.Sider;
    var Route = _normalizeDataUri2.default.SubMenu;
    var SimpleCycle = function(_EventEmitter) {
      /**
       * @return {?}
       */
      function Agent() {
        _classCallCheck(this, Agent);
        var _this = _possibleConstructorReturn(this, (Agent.__proto__ || Object.getPrototypeOf(Agent)).call(this));
        return _this.toggle = function() {
          _this.setState({
            collapsed : !_this.state.collapsed,
            visibleCambiarContrasenia : false
          });
        }, _this.handleMenu = function(event) {
          var a = (event.item, event.key);
          event.selectedKeys;
          if (1 == a) {
            var $scope = _this.state.departamento;
            _this.setState({
              componentSelected : a,
              visibleCambiarContrasenia : false,
              visible_add_docente : false,
              componentRender : {
                title : "Gesti\u00f3n de departamento " + $scope.nombre,
                render : _prepareStyleProperties2.default.createElement(_deepAssign2.default, {
                  departamento : $scope
                })
              }
            });
          } else {
            if (2 == a) {
              _this.setState({
                componentSelected : a,
                visibleCambiarContrasenia : false,
                visible_add_docente : false,
                componentRender : {
                  title : "Gesti\u00f3n de empresas",
                  render : _prepareStyleProperties2.default.createElement(_DraggableCore2.default, null)
                }
              });
            } else {
              if (3 == a) {
                _this.setState({
                  visibleCambiarContrasenia : true,
                  visible_add_docente : false
                });
              } else {
                if (4 == a) {
                  var $routeParams = _this.state.departamento;
                  _this.setState({
                    visibleCambiarContrasenia : false,
                    visible_add_docente : true,
                    props_add_docente : {
                      id_departamento : $routeParams.id,
                      nombre_departamento : $routeParams.nombre
                    }
                  });
                } else {
                  if (5 == a) {
                    var o = _this.state.departamento;
                    _this.setState({
                      visible_add_docente : false,
                      visibleCambiarContrasenia : false,
                      componentRender : {
                        title : "Gesti\u00f3n de periodo de residencia",
                        render : _prepareStyleProperties2.default.createElement(_custom2.default, {
                          departamento : o
                        })
                      }
                    });
                  } else {
                    if (6 == a) {
                      var l = _this.state.departamento;
                      _this.setState({
                        visible_add_docente : false,
                        visibleCambiarContrasenia : false,
                        componentRender : {
                          title : "Apertura de periodo de residencia",
                          render : _prepareStyleProperties2.default.createElement(_AppDownload2.default, {
                            departamento : l
                          })
                        }
                      });
                    } else {
                      if (7 == a) {
                        var $scope = _this.state;
                        var $scopeId = $scope.departamento;
                        var imageChanges = $scope.usuario;
                        _this.setState({
                          visibleCambiarContrasenia : false,
                          visible_add_docente : false,
                          componentRender : {
                            title : "Revisi\u00f3n de anteproyectos ",
                            render : _prepareStyleProperties2.default.createElement(_CalendarEvent2.default, {
                              usuario : imageChanges,
                              departamento : $scopeId
                            })
                          }
                        });
                      } else {
                        if (8 == a) {
                          var $scope = _this.state;
                          var $scopeId = $scope.departamento;
                          var imageChanges = $scope.usuario;
                          _this.setState({
                            visibleCambiarContrasenia : false,
                            visible_add_docente : false,
                            componentRender : {
                              title : "Dictamen",
                              render : _prepareStyleProperties2.default.createElement(_toHyphenCase2.default, {
                                usuario : imageChanges,
                                departamento : $scopeId
                              })
                            }
                          });
                        } else {
                          if (9 == a) {
                            var $scope = _this.state;
                            var imageChanges = $scope.usuario;
                            var $scopeId = $scope.departamento;
                            _this.setState({
                              visibleCambiarContrasenia : false,
                              visible_add_docente : false,
                              componentRender : {
                                title : "Revisi\u00f3n de seguimientos",
                                render : _prepareStyleProperties2.default.createElement(_buildPageNumber2.default, {
                                  usuario : imageChanges,
                                  carreras : $scopeId.carreras
                                })
                              }
                            });
                          } else {
                            if (10 == a) {
                              _this.state.usuario;
                              _AboutPage2.default.get("/api/proyectos/asesor_interno/" + _this.state.usuario.id_docente).then(function(getFilesReply) {
                                if (200 === getFilesReply.status) {
                                  _this.setState({
                                    visibleCambiarContrasenia : false,
                                    visible_add_docente : false,
                                    componentRender : {
                                      title : "Proyectos de residencia asignados",
                                      render : _prepareStyleProperties2.default.createElement(_CalendarTitle2.default, {
                                        proyectos : getFilesReply.data,
                                        usuario : _this.state.usuario
                                      })
                                    }
                                  });
                                }
                              });
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }, _this.state = {
          collapsed : true,
          isAuth : true,
          usuario : null,
          departamento : null,
          componentRender : {
            title : null,
            render : null
          },
          visibleCambiarContrasenia : false,
          visible_add_docente : false,
          props_add_docente : {
            id_departamento : null,
            nombre_departamento : null
          }
        }, _this;
      }
      return _inherits(Agent, _EventEmitter), _createClass(Agent, [{
        key : "getIsAuth",
        value : function() {
          var res = this;
          (0, __WEBPACK_IMPORTED_MODULE_11_date_fns_end_of_month__.getIsAuth)().then(function($rootScope) {
            if ("jefe_departamento" === $rootScope.rol) {
              _AboutPage2.default.get("/api/departamento/" + $rootScope.id_departamento).then(function(getFilesReply) {
                if (200 === getFilesReply.status) {
                  res.setState({
                    departamento : getFilesReply.data,
                    isAuth : $rootScope.isAuth,
                    usuario : $rootScope,
                    componentRender : {
                      title : "Gesti\u00f3n de departamento " + getFilesReply.data.nombre,
                      render : _prepareStyleProperties2.default.createElement(_deepAssign2.default, {
                        departamento : getFilesReply.data
                      })
                    }
                  });
                } else {
                  res.setState({
                    isAuth : false
                  });
                }
              });
            } else {
              res.setState({
                isAuth : false
              });
            }
          });
        }
      }, {
        key : "componentWillMount",
        value : function() {
          this.getIsAuth();
        }
      }, {
        key : "render",
        value : function() {
          var app = this.state;
          var imgapi = app.isAuth;
          var meta = (app.componentSelected, app.componentRender);
          var item = app.visibleCambiarContrasenia;
          var visible = (app.usuario, app.departamento, app.visible_add_docente);
          var acceptedResourceRoles = app.props_add_docente;
          return imgapi ? _prepareStyleProperties2.default.createElement(_UiIcon2.default, {
            style : {
              minHeight : "100vh"
            }
          }, _prepareStyleProperties2.default.createElement(FormioElement, {
            breakpoint : "lg",
            trigger : null,
            collapsible : true,
            collapsed : this.state.collapsed
          }, _prepareStyleProperties2.default.createElement("div", {
            className : "logo",
            style : {
              textAlign : "center"
            }
          }, _prepareStyleProperties2.default.createElement("img", {
            src : "/img/tec_logo.png",
            alt : "logo_tec",
            height : "100%"
          })), _prepareStyleProperties2.default.createElement(_normalizeDataUri2.default, {
            theme : "dark",
            mode : "inline",
            defaultSelectedKeys : ["1"],
            onSelect : this.handleMenu
          }, _prepareStyleProperties2.default.createElement(Route, {
            key : "sub0",
            title : _prepareStyleProperties2.default.createElement("span", null, _prepareStyleProperties2.default.createElement(_suggestList2.default, {
              type : "appstore"
            }), _prepareStyleProperties2.default.createElement("span", null, "Departamento"))
          }, _prepareStyleProperties2.default.createElement(_normalizeDataUri2.default.Item, {
            key : "1"
          }, _prepareStyleProperties2.default.createElement(_suggestList2.default, {
            type : "team"
          }), _prepareStyleProperties2.default.createElement("span", null, "Gestionar")), _prepareStyleProperties2.default.createElement(_normalizeDataUri2.default.Item, {
            key : "4"
          }, _prepareStyleProperties2.default.createElement(_suggestList2.default, {
            type : "user-add"
          }), _prepareStyleProperties2.default.createElement("span", null, "Agregar docente"), _prepareStyleProperties2.default.createElement(_noframeworkWaypoints2.default, {
            visible : visible,
            departamento : acceptedResourceRoles
          }))), _prepareStyleProperties2.default.createElement(Route, {
            key : "sub2",
            title : _prepareStyleProperties2.default.createElement("span", null, _prepareStyleProperties2.default.createElement(_suggestList2.default, {
              type : "calendar"
            }), _prepareStyleProperties2.default.createElement("span", null, "Periodos de residencia"))
          }, _prepareStyleProperties2.default.createElement(_normalizeDataUri2.default.Item, {
            key : "5"
          }, _prepareStyleProperties2.default.createElement(_suggestList2.default, {
            type : "user-add"
          }), _prepareStyleProperties2.default.createElement("span", null, "Gesti\u00f3n de periodo")), _prepareStyleProperties2.default.createElement(_normalizeDataUri2.default.Item, {
            key : "6"
          }, _prepareStyleProperties2.default.createElement(_suggestList2.default, {
            type : "plus"
          }), _prepareStyleProperties2.default.createElement("span", null, "Apertura de periodo")), _prepareStyleProperties2.default.createElement(_normalizeDataUri2.default.Item, {
            key : "7"
          }, _prepareStyleProperties2.default.createElement(_suggestList2.default, {
            type : "solution"
          }), _prepareStyleProperties2.default.createElement("span", null, "Revisi\u00f3n anteproyectos")), _prepareStyleProperties2.default.createElement(_normalizeDataUri2.default.Item, {
            key : "10"
          }, _prepareStyleProperties2.default.createElement(_suggestList2.default, {
            type : "book"
          }), _prepareStyleProperties2.default.createElement("span", null, "Revisi\u00f3n de proyecto de residencia")), _prepareStyleProperties2.default.createElement(_normalizeDataUri2.default.Item, {
            key : "9"
          }, _prepareStyleProperties2.default.createElement(_suggestList2.default, {
            type : "calendar"
          }), _prepareStyleProperties2.default.createElement("span", null, "Revisi\u00f3n de seguimientos")), _prepareStyleProperties2.default.createElement(_normalizeDataUri2.default.Item, {
            key : "8"
          }, _prepareStyleProperties2.default.createElement(_suggestList2.default, {
            type : "schedule"
          }), _prepareStyleProperties2.default.createElement("span", null, "Dictamen"))), _prepareStyleProperties2.default.createElement(_normalizeDataUri2.default.Item, {
            key : "2"
          }, _prepareStyleProperties2.default.createElement(_suggestList2.default, {
            type : "contacts"
          }), _prepareStyleProperties2.default.createElement("span", null, "Empresas")), _prepareStyleProperties2.default.createElement(_normalizeDataUri2.default.Divider, null), _prepareStyleProperties2.default.createElement(Route, {
            key : "sub1",
            title : _prepareStyleProperties2.default.createElement("span", null, _prepareStyleProperties2.default.createElement(_suggestList2.default, {
              type : "user"
            }), _prepareStyleProperties2.default.createElement("span", null, "Usuario"))
          }, _prepareStyleProperties2.default.createElement(_normalizeDataUri2.default.Item, {
            key : "3"
          }, "Cambiar contrase\u00f1a"), _prepareStyleProperties2.default.createElement(_normalizeDataUri2.default.Item, null, _prepareStyleProperties2.default.createElement("a", {
            href : "/api/usuario/logout"
          }, " ", _prepareStyleProperties2.default.createElement("strong", null, "Cerrar sesi\u00f3n"), " "), " ")))), _prepareStyleProperties2.default.createElement(_UiIcon2.default, null, _prepareStyleProperties2.default.createElement(DropIndicator, {
            style : {
              background : "#fff",
              padding : 0
            }
          }, _prepareStyleProperties2.default.createElement(_suggestList2.default, {
            className : "trigger",
            type : this.state.collapsed ? "menu-unfold" : "menu-fold",
            onClick : this.toggle
          }), meta.title), _prepareStyleProperties2.default.createElement(ResultsTableComponent, {
            style : {
              margin : "24px 16px",
              padding : 24,
              background : "#fff"
            }
          }, meta.render), _prepareStyleProperties2.default.createElement(Footer, {
            style : {
              textAlign : "center"
            }
          }, "Sistema de Seguimiento de residencias del ITCH \u00a92017 Francisco Blanco 00fblanco@gmail.com")), _prepareStyleProperties2.default.createElement(_CalendarDay2.default, {
            visible : item
          })) : _prepareStyleProperties2.default.createElement(route.Redirect, {
            to : "/usuario/auth"
          });
        }
      }]), Agent;
    }(_prepareStyleProperties.Component);
    exports.default = SimpleCycle;
  },
  941 : function(cond, t, __webpack_require__) {
    /**
     * @param {!Object} obj
     * @return {?}
     */
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default : obj
      };
    }
    /**
     * @param {!AudioNode} instance
     * @param {!Function} Constructor
     * @return {undefined}
     */
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    /**
     * @param {string} self
     * @param {string} call
     * @return {?}
     */
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return !call || "object" != typeof call && "function" != typeof call ? self : call;
    }
    /**
     * @param {!Object} subClass
     * @param {!Object} superClass
     * @return {undefined}
     */
    function _inherits(subClass, superClass) {
      if ("function" != typeof superClass && null !== superClass) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      /** @type {!Object} */
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor : {
          value : subClass,
          enumerable : false,
          writable : true,
          configurable : true
        }
      });
      if (superClass) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(subClass, superClass);
        } else {
          /** @type {!Object} */
          subClass.__proto__ = superClass;
        }
      }
    }
    Object.defineProperty(t, "__esModule", {
      value : true
    });
    var _suggestList = (__webpack_require__(33), __webpack_require__(34));
    var _suggestList2 = _interopRequireDefault(_suggestList);
    var _DraggableCore = (__webpack_require__(31), __webpack_require__(32));
    var _DraggableCore2 = _interopRequireDefault(_DraggableCore);
    var _deepAssign = (__webpack_require__(15), __webpack_require__(16));
    var _deepAssign2 = _interopRequireDefault(_deepAssign);
    var _suggestItem = (__webpack_require__(24), __webpack_require__(25));
    var _suggestItem2 = _interopRequireDefault(_suggestItem);
    var _createClass = function() {
      /**
       * @param {!Function} d
       * @param {string} props
       * @return {undefined}
       */
      function e(d, props) {
        /** @type {number} */
        var i = 0;
        for (; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          /** @type {boolean} */
          descriptor.configurable = true;
          if ("value" in descriptor) {
            /** @type {boolean} */
            descriptor.writable = true;
          }
          Object.defineProperty(d, descriptor.key, descriptor);
        }
      }
      return function(t, n, a) {
        return n && e(t.prototype, n), a && e(t, a), t;
      };
    }();
    var _prepareStyleProperties = __webpack_require__(0);
    var _prepareStyleProperties2 = _interopRequireDefault(_prepareStyleProperties);
    var _normalizeDataUri = __webpack_require__(12);
    var _normalizeDataUri2 = _interopRequireDefault(_normalizeDataUri);
    var _UiIcon = __webpack_require__(45);
    var _UiIcon2 = _interopRequireDefault(_UiIcon);
    var _CalendarDay = __webpack_require__(942);
    var _CalendarDay2 = _interopRequireDefault(_CalendarDay);
    var Option = _suggestItem2.default.Option;
    var offsetFromCenter = function(_EventEmitter) {
      /**
       * @param {?} data
       * @return {?}
       */
      function Agent(data) {
        _classCallCheck(this, Agent);
        var _this = _possibleConstructorReturn(this, (Agent.__proto__ || Object.getPrototypeOf(Agent)).call(this, data));
        return _this.handleChageCarrera = function(value) {
          var _indexeddbManager2 = _this.state.departamento;
          var n = _indexeddbManager2.carreras.find(function(domvalue) {
            return "" + domvalue.id === value;
          });
          _normalizeDataUri2.default.get("/api/carrera/" + value + "/docentes_asignados").then(function(e) {
            if (200 === e.status) {
              console.log("alv", e.data);
              _this.setState({
                carrera : _prepareStyleProperties2.default.createElement(_CalendarDay2.default, {
                  key : _UiIcon2.default.v4(),
                  carrera : n,
                  docentes : _indexeddbManager2.docentes,
                  docentesAsignados : e.data
                })
              });
            } else {
              _deepAssign2.default.warning("Verificar los docentes asignados.");
            }
          });
        }, _this.state = {
          departamento : data.departamento,
          carrera : null,
          docentesAsigandos : null
        }, _this;
      }
      return _inherits(Agent, _EventEmitter), _createClass(Agent, [{
        key : "componentWillReceiveProps",
        value : function(recB) {
          this.setState({
            departamento : recB.departamento,
            carrera : null,
            docentesAsigandos : null
          });
        }
      }, {
        key : "render",
        value : function() {
          var thisState = this.state;
          var swimlaneToCheck = thisState.departamento;
          var sAlertElemsLeft = thisState.carrera;
          return _prepareStyleProperties2.default.createElement("div", null, _prepareStyleProperties2.default.createElement(_suggestList2.default, null, _prepareStyleProperties2.default.createElement(_DraggableCore2.default, {
            xs : 24,
            lg : 6
          }, _prepareStyleProperties2.default.createElement("p", null, "Carrera: "), _prepareStyleProperties2.default.createElement(_suggestItem2.default, {
            placeholder : "Seleccione una carrera",
            style : {
              width : "100%"
            },
            onChange : this.handleChageCarrera
          }, swimlaneToCheck.carreras.map(function(alert, awsKey) {
            return _prepareStyleProperties2.default.createElement(Option, {
              key : awsKey,
              value : "" + alert.id
            }, alert.nombre);
          })))), sAlertElemsLeft);
        }
      }]), Agent;
    }(_prepareStyleProperties.Component);
    t.default = offsetFromCenter;
  },
  942 : function(cond, t, __webpack_require__) {
    /**
     * @param {!Object} obj
     * @return {?}
     */
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default : obj
      };
    }
    /**
     * @param {!AudioNode} t
     * @param {!Function} x
     * @return {undefined}
     */
    function r(t, x) {
      if (!(t instanceof x)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    /**
     * @param {string} object
     * @param {string} t
     * @return {?}
     */
    function o(object, t) {
      if (!object) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return !t || "object" != typeof t && "function" != typeof t ? object : t;
    }
    /**
     * @param {!Object} subClass
     * @param {!Object} superClass
     * @return {undefined}
     */
    function _inherits(subClass, superClass) {
      if ("function" != typeof superClass && null !== superClass) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      /** @type {!Object} */
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor : {
          value : subClass,
          enumerable : false,
          writable : true,
          configurable : true
        }
      });
      if (superClass) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(subClass, superClass);
        } else {
          /** @type {!Object} */
          subClass.__proto__ = superClass;
        }
      }
    }
    Object.defineProperty(t, "__esModule", {
      value : true
    });
    var _suggestList = (__webpack_require__(50), __webpack_require__(51));
    var _suggestList2 = _interopRequireDefault(_suggestList);
    var _DraggableCore = (__webpack_require__(33), __webpack_require__(34));
    var _DraggableCore2 = _interopRequireDefault(_DraggableCore);
    var _normalizeDataUri = (__webpack_require__(31), __webpack_require__(32));
    var _normalizeDataUri2 = _interopRequireDefault(_normalizeDataUri);
    var _UiIcon = (__webpack_require__(28), __webpack_require__(29));
    var _UiIcon2 = _interopRequireDefault(_UiIcon);
    var _deepAssign = (__webpack_require__(15), __webpack_require__(16));
    var _deepAssign2 = _interopRequireDefault(_deepAssign);
    var _CalendarDay = (__webpack_require__(35), __webpack_require__(13));
    var _CalendarDay2 = _interopRequireDefault(_CalendarDay);
    var _AboutPage = (__webpack_require__(18), __webpack_require__(22));
    var _AboutPage2 = _interopRequireDefault(_AboutPage);
    var _AppDownload = (__webpack_require__(37), __webpack_require__(36));
    var _AppDownload2 = _interopRequireDefault(_AppDownload);
    var _buildPageNumber = (__webpack_require__(19), __webpack_require__(20));
    var params = _interopRequireDefault(_buildPageNumber);
    var _suggestItem = (__webpack_require__(24), __webpack_require__(25));
    var _suggestItem2 = _interopRequireDefault(_suggestItem);
    /** @type {function(!Object, ...(Object|null)): !Object} */
    var extend = Object.assign || function(defaultOptions) {
      /** @type {number} */
      var i = 1;
      for (; i < arguments.length; i++) {
        var ext = arguments[i];
        var key;
        for (key in ext) {
          if (Object.prototype.hasOwnProperty.call(ext, key)) {
            defaultOptions[key] = ext[key];
          }
        }
      }
      return defaultOptions;
    };
    var _createClass = function() {
      /**
       * @param {!Function} d
       * @param {string} props
       * @return {undefined}
       */
      function e(d, props) {
        /** @type {number} */
        var i = 0;
        for (; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          /** @type {boolean} */
          descriptor.configurable = true;
          if ("value" in descriptor) {
            /** @type {boolean} */
            descriptor.writable = true;
          }
          Object.defineProperty(d, descriptor.key, descriptor);
        }
      }
      return function(t, n, a) {
        return n && e(t.prototype, n), a && e(t, a), t;
      };
    }();
    var _prepareStyleProperties = __webpack_require__(0);
    var _prepareStyleProperties2 = _interopRequireDefault(_prepareStyleProperties);
    var _Trans = __webpack_require__(12);
    var _Trans2 = _interopRequireDefault(_Trans);
    var _toHyphenCase = __webpack_require__(45);
    var _toHyphenCase2 = _interopRequireDefault(_toHyphenCase);
    var Option = _suggestItem2.default.Option;
    var data = params.default.Item;
    var DropIndicator = params.default.create()(function(props) {
      var config = props.form;
      var handleSubmit = props.handleSubmit;
      var n = props.docentes;
      var isValid = props.checkDocenteDiferente;
      var plugins = props.docentesAsignados;
      var lint = config.getFieldDecorator;
      var room = plugins.find(function(Sha1) {
        return "presidente_academia" === Sha1.rol;
      }) || null;
      var attribute = plugins.find(function(Sha1) {
        return "jefe_proyecto" === Sha1.rol;
      }) || null;
      return _prepareStyleProperties2.default.createElement(params.default, {
        layout : "horizontal",
        onSubmit : handleSubmit
      }, _prepareStyleProperties2.default.createElement(data, {
        hasFeedback : true,
        label : "Presidente de la academia"
      }, lint("id_presidente_academia", {
        rules : [{
          required : true,
          message : "Seleccione al presidente de academia"
        }],
        initialValue : room ? "" + n.find(function(s) {
          return s.id === room.id_docente;
        }).id : null
      })(_prepareStyleProperties2.default.createElement(_suggestItem2.default, {
        showSearch : true,
        placeholder : "Seleccione al presidente de la academia",
        optionFilterProp : "children",
        filterOption : function(evt, op) {
          return op.props.children.toLowerCase().indexOf(evt.toLowerCase()) >= 0;
        }
      }, n.map(function(alert, canCreateDiscussions) {
        return _prepareStyleProperties2.default.createElement(Option, {
          key : _toHyphenCase2.default.v1(),
          value : "" + alert.id
        }, alert.nombre);
      })))), _prepareStyleProperties2.default.createElement(data, {
        hasFeedback : true,
        label : "Jefe de proyecto"
      }, lint("id_jefe_proyecto", {
        rules : [{
          validator : isValid
        }],
        initialValue : attribute ? "" + n.find(function(procedure) {
          return procedure.id === attribute.id_docente;
        }).id : null
      })(_prepareStyleProperties2.default.createElement(_suggestItem2.default, {
        showSearch : true,
        placeholder : "Seleccione al jefe de proyecto",
        optionFilterProp : "children",
        filterOption : function(evt, op) {
          return op.props.children.toLowerCase().indexOf(evt.toLowerCase()) >= 0;
        }
      }, n.map(function(alert, canCreateDiscussions) {
        return _prepareStyleProperties2.default.createElement(Option, {
          key : _toHyphenCase2.default.v1(),
          value : "" + alert.id
        }, alert.nombre);
      })))), _prepareStyleProperties2.default.createElement(_AppDownload2.default, {
        type : "primary",
        htmlType : "submit"
      }, "Guardar"));
    });
    var offsetFromCenter = function(e) {
      /**
       * @param {?} rt
       * @return {?}
       */
      function t(rt) {
        r(this, t);
        var a = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, rt));
        render.call(a);
        var n = rt.docentes.map(function($routeParams, canCreateDiscussions) {
          return {
            id : $routeParams.id,
            key : _toHyphenCase2.default.v1(),
            nombre : $routeParams.titulo + " " + $routeParams.nombre + " " + $routeParams.ap_paterno + " " + $routeParams.ap_materno,
            id_usuario : $routeParams.id_usuario,
            acciones : "assign"
          };
        });
        return a.state = {
          carrera : rt.carrera,
          docentes : n,
          filterDocentes : n,
          filterDropdownVisible : false,
          searchText : "",
          filtered : false,
          docentesAsignados : rt.docentesAsignados
        }, a;
      }
      return _inherits(t, e), _createClass(t, [{
        key : "componentWillReceiveProps",
        value : function(e) {
          var t = e.docentes.map(function($routeParams, canCreateDiscussions) {
            return {
              id : $routeParams.id,
              key : _toHyphenCase2.default.v1(),
              nombre : $routeParams.titulo + " " + $routeParams.nombre + " " + $routeParams.ap_paterno + " " + $routeParams.ap_materno,
              id_usuario : $routeParams.id_usuario,
              asignacion : "assign"
            };
          });
          this.setState({
            carrera : e.carrera,
            docentes : t,
            filterDocentes : t,
            filterDropdownVisible : false,
            searchText : "",
            filtered : false,
            docentesAsignados : e.docentesAsignados
          });
        }
      }, {
        key : "render",
        value : function() {
          var self = this;
          var state = this.state;
          var visitType = state.carrera;
          var idnum2expr = state.docentes;
          var options = state.filterDocentes;
          var childStates = state.docentesAsignados;
          /** @type {!Array} */
          var pivotColValues = [{
            className : "center-text",
            title : "Nombre",
            dataIndex : "nombre",
            key : "nombre",
            filterDropdown : _prepareStyleProperties2.default.createElement("div", {
              className : "custom-filter-dropdown"
            }, _prepareStyleProperties2.default.createElement(_AboutPage2.default, {
              ref : function(input) {
                return self.searchInput = input;
              },
              placeholder : "Buscar por nombre",
              value : this.state.searchText,
              onChange : this.onInputChange,
              onPressEnter : this.onSearch
            }), _prepareStyleProperties2.default.createElement(_AppDownload2.default, {
              type : "primary",
              onClick : this.onSearch
            }, "Buscar")),
            filterIcon : _prepareStyleProperties2.default.createElement(_CalendarDay2.default, {
              type : "search",
              style : {
                color : this.state.filtered ? "#108ee9" : "#aaa"
              }
            }),
            filterDropdownVisible : this.state.filterDropdownVisible,
            onFilterDropdownVisibleChange : function(canCreateDiscussions) {
              self.setState({
                filterDropdownVisible : canCreateDiscussions,
                visible : false
              }, function() {
                return self.searchInput.focus();
              });
            }
          }];
          var i = childStates.find(function(Sha1) {
            return "presidente_academia" === Sha1.rol;
          }) || null;
          var myTab = childStates.find(function(Sha1) {
            return "jefe_proyecto" === Sha1.rol;
          }) || null;
          /**
           * @param {string} p
           * @return {?}
           */
          var loadData = function(p) {
            return !!childStates.find(function(name) {
              return name.id_docente === p.id && "docente" === name.rol;
            });
          };
          var obj = {
            onChange : function(color, img) {
              console.log("selectedRowKeys: " + color, "selectedRows: ", img);
              _Trans2.default.post("/api/carrera/asignar_docentes", {
                id_carrera : visitType.id,
                array_docentes : img
              }).then(function(getFilesReply) {
                if (200 === getFilesReply.status) {
                  _deepAssign2.default.success("Docentes asignados :)!");
                } else {
                  _UiIcon2.default.error({
                    title : "Error al actualizar docentes. Revisar los siguientes campos",
                    content : _prepareStyleProperties2.default.createElement("div", null, getFilesReply.data.errores),
                    onOk : function() {
                    }
                  });
                }
              }).catch(function(canCreateDiscussions) {
                _deepAssign2.default.error("Error en el servidor verificar con el encargado.");
              });
            },
            getCheckboxProps : function(hosts) {
              return {
                disabled : (i ? hosts.id === i.id_docente : null) || (myTab ? hosts.id === myTab.id_docente : null),
                defaultChecked : loadData(hosts)
              };
            }
          };
          return _prepareStyleProperties2.default.createElement("div", null, _prepareStyleProperties2.default.createElement(_DraggableCore2.default, {
            style : {
              marginTop : 20
            }
          }, _prepareStyleProperties2.default.createElement(_normalizeDataUri2.default, {
            xs : 24,
            lg : 16
          }, _prepareStyleProperties2.default.createElement(DropIndicator, {
            ref : this.refForm,
            handleSubmit : this.handleSubmit,
            docentes : idnum2expr,
            checkDocenteDiferente : this.checkDocenteDiferente,
            docentesAsignados : childStates
          }))), _prepareStyleProperties2.default.createElement(_DraggableCore2.default, {
            type : "flex",
            justify : "center",
            align : "middle",
            style : {
              marginTop : 20
            }
          }, _prepareStyleProperties2.default.createElement(_suggestList2.default, {
            bordered : true,
            title : function() {
              return "Docentes que participan en la carrera";
            },
            rowSelection : obj,
            dataSource : options,
            className : "full-width",
            columns : pivotColValues,
            pagination : {
              pageSize : 8
            },
            scroll : {
              x : 800
            }
          })));
        }
      }]), t;
    }(_prepareStyleProperties.Component);
    /**
     * @return {undefined}
     */
    var render = function() {
      var $scope = this;
      /**
       * @param {!Object} data
       * @return {undefined}
       */
      this.refForm = function(data) {
        /** @type {!Object} */
        $scope.form = data;
      };
      /**
       * @param {?} data
       * @param {?} linkedEntities
       * @param {?} force
       * @return {undefined}
       */
      this.checkDocenteDiferente = function(data, linkedEntities, force) {
        if (linkedEntities === $scope.form.getFieldValue("id_presidente_academia")) {
          force("El jefe de proyecto no puede ser el mismo que el presidente de academia");
        } else {
          force();
        }
      };
      /**
       * @param {!Event} event
       * @return {undefined}
       */
      this.handleSubmit = function(event) {
        event.preventDefault();
        var wunderlist_list = $scope.state.carrera;
        $scope.form.validateFields(function(canCreateDiscussions, contextReference) {
          if (!canCreateDiscussions) {
            console.log("Received values of form: ", contextReference);
            _Trans2.default.post("/api/carrera/asignar_encargados", {
              id_carrera : wunderlist_list.id,
              id_jefe_proyecto : contextReference.id_jefe_proyecto || null,
              id_presidente_academia : contextReference.id_presidente_academia
            }).then(function(getFilesReply) {
              if (200 === getFilesReply.status) {
                _deepAssign2.default.success("Carrera actualizada!");
              } else {
                _UiIcon2.default.error({
                  title : "Error al actualizar la carrera. Revisar los siguientes campos",
                  content : _prepareStyleProperties2.default.createElement("div", null, getFilesReply.data.errores),
                  onOk : function() {
                  }
                });
              }
            }).catch(function(canCreateDiscussions) {
              _deepAssign2.default.error("Error en el servidor verificar con el encargado.");
            });
          }
        });
      };
      /**
       * @param {!Event} event
       * @return {undefined}
       */
      this.onInputChange = function(event) {
        $scope.setState({
          searchText : event.target.value
        });
      };
      /**
       * @return {undefined}
       */
      this.onSearch = function() {
        var state = $scope.state;
        var searchText = state.searchText;
        var n = state.docentes;
        /** @type {!RegExp} */
        var re = new RegExp(searchText, "gi");
        $scope.setState({
          visible : false,
          filterDropdownVisible : false,
          filtered : !!searchText,
          filterDocentes : n.map(function(e) {
            console.warn(e);
            var k = e.nombre.match(re);
            return k ? extend({}, e, {
              nombre : _prepareStyleProperties2.default.createElement("span", null, e.nombre.split(re).map(function(b, a) {
                return a > 0 ? [_prepareStyleProperties2.default.createElement("span", {
                  className : "highlight"
                }, k[0]), b] : b;
              }))
            }) : null;
          }).filter(function(canCreateDiscussions) {
            return !!canCreateDiscussions;
          })
        });
      };
    };
    t.default = offsetFromCenter;
  },
  943 : function(cond, t, __webpack_require__) {
    /**
     * @param {!Object} obj
     * @return {?}
     */
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default : obj
      };
    }
    /**
     * @param {!AudioNode} instance
     * @param {!Function} Constructor
     * @return {undefined}
     */
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    /**
     * @param {string} self
     * @param {string} call
     * @return {?}
     */
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return !call || "object" != typeof call && "function" != typeof call ? self : call;
    }
    /**
     * @param {!Object} subClass
     * @param {!Object} superClass
     * @return {undefined}
     */
    function _inherits(subClass, superClass) {
      if ("function" != typeof superClass && null !== superClass) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      /** @type {!Object} */
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor : {
          value : subClass,
          enumerable : false,
          writable : true,
          configurable : true
        }
      });
      if (superClass) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(subClass, superClass);
        } else {
          /** @type {!Object} */
          subClass.__proto__ = superClass;
        }
      }
    }
    Object.defineProperty(t, "__esModule", {
      value : true
    });
    var _DraggableCore = (__webpack_require__(33), __webpack_require__(34));
    var _DraggableCore2 = _interopRequireDefault(_DraggableCore);
    var _normalizeDataUri = (__webpack_require__(50), __webpack_require__(51));
    var _normalizeDataUri2 = _interopRequireDefault(_normalizeDataUri);
    var _UiIcon = (__webpack_require__(31), __webpack_require__(32));
    var _UiIcon2 = _interopRequireDefault(_UiIcon);
    var _CalendarDay = (__webpack_require__(153), __webpack_require__(154));
    var _CalendarDay2 = _interopRequireDefault(_CalendarDay);
    var _AboutPage = (__webpack_require__(28), __webpack_require__(29));
    var _AboutPage2 = _interopRequireDefault(_AboutPage);
    var _suggestItem = (__webpack_require__(119), __webpack_require__(120));
    var _suggestItem2 = _interopRequireDefault(_suggestItem);
    var _AppDownload = (__webpack_require__(469), __webpack_require__(471));
    var _AppDownload2 = _interopRequireDefault(_AppDownload);
    var _CalendarEvent = (__webpack_require__(37), __webpack_require__(36));
    var _CalendarEvent2 = _interopRequireDefault(_CalendarEvent);
    var _buildPageNumber = (__webpack_require__(35), __webpack_require__(13));
    var _buildPageNumber2 = _interopRequireDefault(_buildPageNumber);
    var _Logger = (__webpack_require__(15), __webpack_require__(16));
    var _Logger2 = _interopRequireDefault(_Logger);
    var _suggestList = (__webpack_require__(24), __webpack_require__(25));
    var _suggestList2 = _interopRequireDefault(_suggestList);
    var _createClass = function() {
      /**
       * @param {!Function} d
       * @param {string} props
       * @return {undefined}
       */
      function e(d, props) {
        /** @type {number} */
        var i = 0;
        for (; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          /** @type {boolean} */
          descriptor.configurable = true;
          if ("value" in descriptor) {
            /** @type {boolean} */
            descriptor.writable = true;
          }
          Object.defineProperty(d, descriptor.key, descriptor);
        }
      }
      return function(t, n, a) {
        return n && e(t.prototype, n), a && e(t, a), t;
      };
    }();
    var _prepareStyleProperties = __webpack_require__(0);
    var _prepareStyleProperties2 = _interopRequireDefault(_prepareStyleProperties);
    var _deepAssign = __webpack_require__(12);
    var _deepAssign2 = _interopRequireDefault(_deepAssign);
    var _UiRippleInk = __webpack_require__(1);
    var _UiRippleInk2 = _interopRequireDefault(_UiRippleInk);
    var _toHyphenCase = __webpack_require__(45);
    var _toHyphenCase2 = _interopRequireDefault(_toHyphenCase);
    var _CalendarTitle = __webpack_require__(472);
    var _CalendarTitle2 = _interopRequireDefault(_CalendarTitle);
    var _SearchIndex = __webpack_require__(1017);
    var _SearchIndex2 = _interopRequireDefault(_SearchIndex);
    var Option = _suggestList2.default.Option;
    var offsetFromCenter = function(_EventEmitter) {
      /**
       * @param {?} data
       * @return {?}
       */
      function Agent(data) {
        _classCallCheck(this, Agent);
        var _this = _possibleConstructorReturn(this, (Agent.__proto__ || Object.getPrototypeOf(Agent)).call(this, data));
        return _this.handleCancelacion = function(canCreateDiscussions) {
          _deepAssign2.default.put("/api/alumno/cancelacion", {
            id_alumno : canCreateDiscussions
          }).then(function(testsStatus) {
            if (200 === testsStatus.status) {
              _Logger2.default.success("Se realizado la cancelaci\u00f3n del proyecto del alumno!");
              _this.setState({
                visible_add_alumno : false,
                visible_add_seguimiento : false
              });
            } else {
              _Logger2.default.error("Ops, hubo un error al realizar la cancelaci\u00f3n, favor de reportar al administrador.");
            }
          });
        }, _this.showListaCandidatosResidente = function(canCreateDiscussions) {
          _deepAssign2.default.get("/api/periodo/" + canCreateDiscussions + "/anteproyectos").then(function(e) {
            if (200 === e.status) {
              var elem = e.data.map(function(parcel, awsKey) {
                return _prepareStyleProperties2.default.createElement("div", {
                  style : {
                    overflowY : 100
                  }
                }, _prepareStyleProperties2.default.createElement(_suggestItem2.default.Item, {
                  key : awsKey,
                  color : "green",
                  dot : _prepareStyleProperties2.default.createElement(_buildPageNumber2.default, {
                    type : "check-circle-o",
                    style : {
                      fontSize : "16px",
                      marginTop : 10,
                      marginLeft : 10
                    }
                  })
                }, _prepareStyleProperties2.default.createElement("p", null, parcel.nombre + " " + parcel.ap_paterno + " " + parcel.ap_materno), _prepareStyleProperties2.default.createElement(_AppDownload2.default, {
                  title : _prepareStyleProperties2.default.createElement("span", null, _prepareStyleProperties2.default.createElement("p", null, "\u00bfEsta seguro de realizar la cancelaci\u00f3n de proyecto?"), _prepareStyleProperties2.default.createElement("p", null, "al realizar esta acci\u00f3n, se borrara todo la informaci\u00f3n relacionada a este alumno"), _prepareStyleProperties2.default.createElement("p", null, "y se podra agregar al alumno a otro periodo.")),
                  onConfirm : function() {
                    return _this.handleCancelacion(parcel.id);
                  },
                  okText : "Si",
                  cancelText : "Cancelar"
                }, _prepareStyleProperties2.default.createElement(_CalendarEvent2.default, {
                  icon : "user-delete",
                  style : {
                    marginTop : 5
                  },
                  type : "danger"
                }, "Realizar cancelaci\u00f3n"))));
              });
              _AboutPage2.default.info({
                width : 600,
                title : "Lista residentes del periodo.",
                content : _prepareStyleProperties2.default.createElement(_suggestItem2.default, null, elem),
                onOk : function() {
                }
              });
            }
          });
        }, _this.showAddAlumno = function(canCreateDiscussions) {
          _this.setState({
            visible_add_alumno : true,
            visible_add_seguimiento : false,
            id_periodo : canCreateDiscussions
          });
        }, _this.showAddSeguimiento = function(formatters, customFormatters) {
          _this.setState({
            visible_add_alumno : false,
            visible_add_seguimiento : true,
            id_periodo : formatters
          });
        }, _this.showSeguimientos = function(er) {
          console.warn(er);
          var elem = er.map(function(canCreateDiscussions, index) {
            return _prepareStyleProperties2.default.createElement(_suggestItem2.default.Item, {
              key : index
            }, _prepareStyleProperties2.default.createElement("p", null, _prepareStyleProperties2.default.createElement("strong", null, index + 1), " - Del ", (0, _UiRippleInk2.default)(canCreateDiscussions.fecha_inicial, "YYYY-MM-DD").format("LL"), " al ", (0, _UiRippleInk2.default)(canCreateDiscussions.fecha_final, "YYYY-MM-DD").format("LL")));
          });
          _AboutPage2.default.info({
            title : "Seguimientos",
            width : 600,
            content : _prepareStyleProperties2.default.createElement(_suggestItem2.default, null, elem),
            onOk : function() {
            }
          });
        }, _this.handleChageCarrera = function(value) {
          var _indexeddbManager2 = _this.state.departamento;
          var wunderlist_list = _indexeddbManager2.carreras.find(function(domvalue) {
            return "" + domvalue.id === value;
          });
          _deepAssign2.default.get("/api/carrera/" + wunderlist_list.id + "/periodos").then(function(getFilesReply) {
            if (200 === getFilesReply.status) {
              _deepAssign2.default.get("/api/alumnos/" + wunderlist_list.id + "/rechazados").then(function(getJobsReply) {
                if (200 === getJobsReply.status) {
                  _this.setState({
                    alumnos_rechazados_por_carrera : getJobsReply.data._alumnos,
                    carreraSeleccionada : getFilesReply.data,
                    visible_add_alumno : false,
                    visible_add_seguimiento : false
                  });
                }
              });
            } else {
              _Logger2.default.warning("Verificar conexi\u00f3n.");
            }
          });
        }, _this.handleChangeFechaFinEntregaAnteproyecto = function(start, deleteCount) {
          _deepAssign2.default.put("/api/periodo/fecha_fin_entrega_anteproyecto", {
            fecha_fin_entrega_anteproyecto : start.format("YYYY-MM-DD"),
            id_periodo : deleteCount
          }).then(function(testsStatus) {
            if (200 === testsStatus.status) {
              _Logger2.default.success("Fecha de entrega de anteproyectos actualizada!");
              window.location.reload();
            } else {
              _Logger2.default.warning("Ups, verificar conexi\u00f3n.");
            }
          });
        }, _this.state = {
          departamento : data.departamento,
          carreraSeleccionada : null,
          visible_add_alumno : false,
          visible_add_seguimiento : false,
          id_periodo : null,
          alumnos_rechazados_por_carrera : []
        }, _this;
      }
      return _inherits(Agent, _EventEmitter), _createClass(Agent, [{
        key : "render",
        value : function() {
          var e = this;
          var _ref = this.state;
          var resourceOrCollection = _ref.departamento;
          var pajax = _ref.carreraSeleccionada;
          var value = _ref.visible_add_alumno;
          var _ref$mapStateToPropsF = _ref.id_periodo;
          var l = (_ref.visible_lista_candidatos_residente, _ref.alumnos_rechazados_por_carrera);
          var visible = _ref.visible_add_seguimiento;
          var time = (0, _UiRippleInk2.default)().format("YYYY-MM-DD");
          var beforePipe$ = pajax ? pajax.periodos.map(function(target_workspace, canCreateDiscussions) {
            return {
              id : target_workspace.id,
              key : _toHyphenCase2.default.v1(),
              periodo : target_workspace.periodo,
              ciclo : target_workspace.ciclo,
              fecha_periodo : target_workspace.fecha_inicio + " - " + target_workspace.fecha_fin,
              fecha_fin : target_workspace.fecha_fin,
              fecha_inicio_entrega_anteproyecto : target_workspace.fecha_inicio_entrega_anteproyecto,
              fecha_fin_entrega_anteproyecto : target_workspace.fecha_fin_entrega_anteproyecto,
              acciones : (0, _UiRippleInk2.default)().format("YYYY-MM-DD") >= target_workspace.fecha_inicio_entrega_anteproyecto && (0, _UiRippleInk2.default)().format("YYYY-MM-DD") <= target_workspace.fecha_fin_entrega_anteproyecto,
              lista_candidatos : "on",
              seguimientos : target_workspace.seguimientos
            };
          }) : null;
          /** @type {!Array} */
          var pivotColValues = [{
            className : "center-text",
            title : "Periodo",
            key : "periodo",
            dataIndex : "periodo"
          }, {
            className : "center-text",
            title : "Ciclo",
            key : "ciclo",
            dataIndex : "ciclo"
          }, {
            className : "center-text",
            title : "Fecha de periodo",
            key : "fecha_periodo",
            dataIndex : "fecha_periodo"
          }, {
            className : "center-text",
            title : "Fecha entrega anteproyectos",
            key : "fecha_entrega_anteproyecto",
            dataIndex : "fecha_entrega_anteproyecto",
            render : function(sb, data) {
              return _prepareStyleProperties2.default.createElement("span", null, data.fecha_inicio_entrega_anteproyecto, " - ", _prepareStyleProperties2.default.createElement(_CalendarDay2.default, {
                onChange : function(color, func) {
                  e.handleChangeFechaFinEntregaAnteproyecto(color, data.id);
                },
                disabledDate : function(creationDate) {
                  return creationDate.format("YYYY-MM-DD") > (0, _UiRippleInk2.default)(data.fecha_fin, "YYYY-MM-DD").format("YYYY-MM-DD") || creationDate.format("YYYY-MM-DD") < (0, _UiRippleInk2.default)(data.fecha_inicio_entrega_anteproyecto, "YYYY-MM-DD").format("YYYY-MM-DD");
                },
                format : "YYYY-MM-DD",
                defaultValue : (0, _UiRippleInk2.default)(data.fecha_fin_entrega_anteproyecto, "YYYY-MM-DD")
              }));
            }
          }, {
            className : "center-text",
            title : "Seguimientos",
            key : "seguimientos",
            dataIndex : "seguimientos",
            render : function(sb, options) {
              return _prepareStyleProperties2.default.createElement("div", null, _prepareStyleProperties2.default.createElement(_CalendarEvent2.default, {
                style : {
                  marginRight : 2,
                  marginLeft : 2
                },
                type : "primary",
                icon : "bars",
                onClick : function() {
                  return e.showSeguimientos(options.seguimientos);
                }
              }, "Lista"), time > options.fecha_fin ? "" : _prepareStyleProperties2.default.createElement(_CalendarEvent2.default, {
                style : {
                  marginRight : 2,
                  marginLeft : 2
                },
                icon : "plus",
                onClick : function() {
                  return e.showAddSeguimiento(options.id, options.fecha_fin);
                }
              }, "Seguimiento"));
            }
          }, {
            className : "center-text",
            title : "Agregar candidato",
            key : "acciones",
            dataIndex : "Acciones",
            render : function(firstTime, self) {
              return _prepareStyleProperties2.default.createElement("span", null, true === self.acciones ? _prepareStyleProperties2.default.createElement(_CalendarEvent2.default, {
                style : {
                  marginRight : 5
                },
                icon : "user-add",
                onClick : function() {
                  return e.showAddAlumno(self.id);
                }
              }, "Candidato a residente") : _prepareStyleProperties2.default.createElement("p", {
                style : {
                  color : "#ff5757"
                }
              }, "Deshabilitado, revisar fechas."));
            }
          }, {
            className : "center-text",
            title : "Lista de candidatos",
            key : "lista_candidatos",
            dataIndex : "lista_candidatos",
            render : function(sb, data) {
              return _prepareStyleProperties2.default.createElement("span", null, _prepareStyleProperties2.default.createElement(_CalendarEvent2.default, {
                icon : "solution",
                onClick : function() {
                  return e.showListaCandidatosResidente(data.id);
                }
              }));
            }
          }];
          return _prepareStyleProperties2.default.createElement(_DraggableCore2.default, {
            gutter : 16
          }, _prepareStyleProperties2.default.createElement(_UiIcon2.default, {
            xs : 24,
            lg : 4
          }, _prepareStyleProperties2.default.createElement("p", null, "Seleccione la carrera: "), _prepareStyleProperties2.default.createElement(_suggestList2.default, {
            placeholder : "Seleccione una carrera",
            style : {
              width : "100%"
            },
            onChange : this.handleChageCarrera
          }, resourceOrCollection.carreras.map(function(alert, awsKey) {
            return _prepareStyleProperties2.default.createElement(Option, {
              key : awsKey,
              value : "" + alert.id
            }, alert.nombre);
          }))), _prepareStyleProperties2.default.createElement(_UiIcon2.default, {
            xs : 24,
            lg : 20
          }, _prepareStyleProperties2.default.createElement(_normalizeDataUri2.default, {
            bordered : true,
            title : function() {
              return "Gesti\u00f3n de periodos";
            },
            dataSource : beforePipe$,
            className : "full-width",
            columns : pivotColValues,
            pagination : {
              pageSize : 8
            },
            scroll : {
              x : 1500
            }
          })), _prepareStyleProperties2.default.createElement(_CalendarTitle2.default, {
            visible : value,
            carrera : pajax,
            id_periodo : _ref$mapStateToPropsF,
            alumnos_rechazados_por_carrera : l
          }), _prepareStyleProperties2.default.createElement(_SearchIndex2.default, {
            visible : visible,
            id_periodo : _ref$mapStateToPropsF
          }));
        }
      }]), Agent;
    }(_prepareStyleProperties.Component);
    t.default = offsetFromCenter;
  },
  99 : function(fi, obj, outline) {
    /**
     * @return {?}
     */
    function resolve() {
      return prop.default.get("/api/usuario/isAuth").then(function(simpleselect) {
        return simpleselect.data;
      });
    }
    Object.defineProperty(obj, "__esModule", {
      value : true
    });
    obj.getIsAuth = void 0;
    var o = outline(12);
    var prop = function(obj) {
      return obj && obj.__esModule ? obj : {
        default : obj
      };
    }(o);
    /** @type {function(): ?} */
    obj.getIsAuth = resolve;
  }
}, [502]);
