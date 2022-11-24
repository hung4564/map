"use strict";
((typeof self !== 'undefined' ? self : this)["webpackChunkmap"] = (typeof self !== 'undefined' ? self : this)["webpackChunkmap"] || []).push([[994],{

/***/ 4519:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ MapControlButton; }
});

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/Map/control/MapControlButton.vue?vue&type=template&id=6efba1d6&scoped=true&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _vm.isGroup ? _c('MapButton', _vm._g(_vm._b({
    attrs: {
      "active": _vm.active,
      "elevation": "0",
      "fab": "",
      "height": _vm.groupSize,
      "text": "",
      "title": _vm.tooltip || _vm.title,
      "width": _vm.groupSize
    }
  }, 'MapButton', _vm.$attrs, false), _vm.$listeners), [_vm._t("default", function () {
    return [_c('MapIcon', [_vm._v(" " + _vm._s(_vm.icon) + " ")])];
  })], 2) : _c('div', {
    staticClass: "button-container"
  }, [_c('div', {
    attrs: {
      "title": _vm.tooltip || _vm.title
    }
  }, [_vm._t("default", function () {
    return [_c('MapButton', _vm._g(_vm._b({
      staticClass: "button-elevation",
      attrs: {
        "height": _vm.size,
        "loading": _vm.loading,
        "width": _vm.size
      }
    }, 'MapButton', _vm.$attrs, false), _vm.$listeners), [_vm._t("default", function () {
      return [_c('MapIcon', [_vm._v(" " + _vm._s(_vm.icon) + " ")])];
    })], 2)];
  })], 2)]);
};

var staticRenderFns = [];

// EXTERNAL MODULE: ./src/components/MapButton.vue + 5 modules
var MapButton = __webpack_require__(544);
// EXTERNAL MODULE: ./src/components/MapIcon.vue + 5 modules
var MapIcon = __webpack_require__(3839);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/Map/control/MapControlButton.vue?vue&type=script&lang=js&


/* harmony default export */ var MapControlButtonvue_type_script_lang_js_ = ({
  components: {
    MapButton: MapButton/* default */.Z,
    MapIcon: MapIcon/* default */.Z
  },
  props: {
    icon: {
      type: String
    },
    tooltip: String,
    title: String,
    loading: Boolean,
    size: {
      type: Number,
      default: 32
    },
    active: Boolean
  },
  inject: {
    isGroup: {
      default: false
    },
    groupSize: {
      default: 0,
      from: "size"
    }
  },
  computed: {}
});
;// CONCATENATED MODULE: ./src/components/Map/control/MapControlButton.vue?vue&type=script&lang=js&
 /* harmony default export */ var control_MapControlButtonvue_type_script_lang_js_ = (MapControlButtonvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-54.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-54.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-54.use[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/Map/control/MapControlButton.vue?vue&type=style&index=0&id=6efba1d6&prod&scoped=true&lang=css&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/Map/control/MapControlButton.vue?vue&type=style&index=0&id=6efba1d6&prod&scoped=true&lang=css&

// EXTERNAL MODULE: ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1001);
;// CONCATENATED MODULE: ./src/components/Map/control/MapControlButton.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.Z)(
  control_MapControlButtonvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "6efba1d6",
  null
  
)

/* harmony default export */ var MapControlButton = (component.exports);

/***/ }),

/***/ 8994:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ BaseMapControl; }
});

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/Map/modules/BaseMapControl/BaseMapControl.vue?vue&type=template&id=2335411e&scoped=true&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('ModuleContainer', _vm._b({
    attrs: {
      "btnWidth": 70
    },
    scopedSlots: _vm._u([{
      key: "btn",
      fn: function () {
        return [_vm.current_baseMaps ? _c('MapControlButton', {
          attrs: {
            "tooltip": _vm.title
          }
        }, [_c('map-card', {
          staticClass: "clickable base-map-button__container",
          attrs: {
            "height": "70px",
            "width": "70px"
          },
          on: {
            "click": _vm.onToggleList
          }
        }, [_c('div', {
          staticClass: "base-map-button__content"
        }, [_c('map-image', {
          attrs: {
            "src": _vm.current_baseMaps.thumbnail
          }
        }, [_c('div', {
          staticClass: "base-map-button__title"
        }, [_c('map-icon', {
          attrs: {
            "dark": "",
            "small": ""
          }
        }, [_vm._v(_vm._s(_vm.controlIcon))]), _c('div', {}, [_vm._v(" " + _vm._s(_vm.title || _vm.trans("map.basemap.title")) + " ")])], 1)])], 1)])], 1) : _c('div')];
      },
      proxy: true
    }, {
      key: "draggable",
      fn: function (props) {
        return [_c('DraggablePopup', _vm._b({
          attrs: {
            "height": 70 * (Math.floor(_vm.c_baseMaps.length / 3) + 1) + 48 + 10,
            "show": _vm.show,
            "is-resizable": false,
            "title": _vm.trans('map.basemap.setting'),
            "width": 70 * 3 + 24
          },
          on: {
            "update:show": function ($event) {
              _vm.show = $event;
            }
          }
        }, 'DraggablePopup', props, false), [_c('div', {
          staticClass: "base-map-control-setting"
        }, _vm._l(_vm.c_baseMaps, function (baseMap) {
          return _c('div', {
            key: baseMap.id,
            staticClass: "clickable base-map-control-setting-item",
            style: {
              width: _vm.sizeBaseMap + 'px'
            },
            attrs: {
              "title": baseMap.title
            },
            on: {
              "click": function ($event) {
                return _vm.onClick(baseMap);
              }
            }
          }, [_c('div', {
            style: {
              width: _vm.sizeBaseMap - 34 + 'px',
              height: _vm.sizeBaseMap - 34 + 'px'
            }
          }, [_c('img', {
            staticStyle: {
              "width": "100%",
              "height": "100%"
            },
            attrs: {
              "src": baseMap.thumbnail
            }
          })]), _c('div', {
            staticClass: "base-map-control-setting-item__title",
            class: {
              'base-map-control-setting-item__active': _vm.current_baseMaps && baseMap.id == _vm.current_baseMaps.id
            },
            staticStyle: {
              "font-size": "14px"
            }
          }, [_vm._v(" " + _vm._s(baseMap.title) + " ")])]);
        }), 0)])];
      }
    }])
  }, 'ModuleContainer', _vm.bindModule, false), [_vm._t("default")], 2);
};

var staticRenderFns = [];

// EXTERNAL MODULE: ./src/components/MapImage.vue + 5 modules
var MapImage = __webpack_require__(6044);
// EXTERNAL MODULE: ./src/components/MapIcon.vue + 5 modules
var MapIcon = __webpack_require__(3839);
// EXTERNAL MODULE: ./src/components/draggable/index.js + 22 modules
var draggable = __webpack_require__(769);
// EXTERNAL MODULE: ./src/components/Map/mixins/ModuleMixin.js + 6 modules
var ModuleMixin = __webpack_require__(7512);
// EXTERNAL MODULE: ./src/components/Map/control/MapControlButton.vue + 5 modules
var MapControlButton = __webpack_require__(4519);
;// CONCATENATED MODULE: ./src/components/Map/modules/BaseMapControl/basemap.js
const basemap = [{
  id: 1,
  title: "Streets",
  type: "vector",
  thumbnail: "data:image/jpeg;base64,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",
  links: ["https://tiles.eofactory.ai/styles/basic/style.json"]
}, {
  id: 2,
  title: "ArcGIS Satellite",
  type: "raster",
  thumbnail: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QBmRXhpZgAATU0AKgAAAAgABgESAAMAAAABAAEAAAMBAAUAAAABAAAAVgMDAAEAAAABAAAAAFEQAAEAAAABAQAAAFERAAQAAAABAAAAAFESAAQAAAABAAAAAAAAAAAAAYagAACxj//bAEMAAgEBAgEBAgICAgICAgIDBQMDAwMDBgQEAwUHBgcHBwYHBwgJCwkICAoIBwcKDQoKCwwMDAwHCQ4PDQwOCwwMDP/bAEMBAgICAwMDBgMDBgwIBwgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDP/AABEIAEMAeAMBIgACEQEDEQH/xAAfAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgv/xAC1EAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+fr/xAAfAQADAQEBAQEBAQEBAAAAAAAAAQIDBAUGBwgJCgv/xAC1EQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APM/GWnaJ+074c1Hw/qNndab4gjCy6BNazG4kku5Yg7W0qyScrKFVWZFOJhGcgErJ7V/wbkfF/X/AIRftrT/AA/ulure28ZWNxZ6pY3MJRorixjmmjchiCsiASJt2klZGzjbkfH+meLxPf6jdraWKfaosXVgIAbe8TKkruOWT5lVgBxlRnPOdj9jD/goJdfsF/t+6T488QWGo69pNsbqHVLa3vGWa8SeCSPfvkJEmx3DYfOdnUHBH22HwtX6vicqhJS5Ixai3eSlpKVr62d9NWruyd7pfHvFQlXo4+StzOV2lZOOqje2l++z022b/cT/AILLftTeB/gp+zDqnhvxJ4gttP1rxRaytpunfZpbmbUvLHzIqxjK/M0fzM0a5YZcDIr+bH4nBHlur64huGkZsqZWBON2Bk45OOpGMntXdftI/tba5+0v+0h4u+IGsaldXaavqM81qkrvhIS58qNVLHYqR7QFBwvaqOvatefGxYY9UtLW1kECmFLK3S3CxofvOqj5iSTnufbFe9kmUvL4cz3krybdlG2yStru7ttbHnZtmTxVTsov3VbV33bd/JWSRzPwj8P6lca1Htt447aRS7SOdqBNpbPHPABJ9B9QD6lc6DDANtrcrcMsRdwQE3DjlBkk9e+DweOlY9vp9p4c8NWtvatfNOxML/KNgj3AhQe5IGTyMYH1OZdtfWN1/q4txAMe3O9Rg7hjGCAducHGM9wK+V4i4vxuCxrdH3aVN8rTivfaV5Wu07apKz11e294XLcPWo3qaykrpp7Lp3V+915HZafDeSaJNp8MSiO6uY5ZJd+CPLEgww6lcybuO4/iIAW9Y6N5dxG8lobea2Cwhi48uVleQv7FmDAZxkADoRkcLpmpalaTRzGO4WGNx82DnnIGPp0+oB7VutrU1ppsdqzOqTAMW2bQoxxz9P5V+b51xtjsxTg7U4t3tFu+1nd3100tZK3Te/0GW5dh8PrbmaVk3bvdWVtNde/meoS+KYZ7eO8kvj9nGAttHGdznjgnsMEnj6cZyMWXxpa6r4sW1utPtZreRzGmVw+37pBPOPQ4OSABk9/KrXxNPb3En79lWFtqbeBz9fw/L6Vq219qBuFvLi0nkDLiOVuAMHg/Xp1/rXx8cRKEuaDa9Ox7TzDnVrfqd0vhnTND0ljI015G0qxMHJUuyjBYbSP72fqQM9zip4T/ALTuY4rCV7hmTPlyLiRjnHy/w+nVh+PStDQfHEI0uZr+OTznby1VUHJP3iQf9liMj+tU9Q+L+j+CrdZbgTx2szfZoWiTM1xJ2xzhFAzkk9h64H6Fk+ecVO+Kw/PNT6yV4ya093msm1baPRNtWi7eHi8HlErUqijG3RaNddba29e+m5H4s8GXXg54kuogVcZ89JPMikzggDgbSARkHOazvEv7OGj+MYYLm+1Sy0+7mIH2mORWXGOhxnfjI5GeDVLw98f3+I5uobS6u7JDjNlLNvGxG3K4/wCBHJx34ORiuq1rxH4X8PaTeaxr2qTtBIVEMawFt2d/mblVkJcN5e1VIBzJyCoB+5z7MeJaGCwsaaXtZN83KuZbJpSunFO99nZ2urLReLl+Gyt4mq9eVJW5nbrurNNrbddbPXV8r4G+F1p8NvENjPBf6fezpKJI5ZFdYWVXBAYEA4bHOOg57jJXU6tdaVJo0l5oGqWfi/wveosMV49olveafIRlYpwy7o5PlcAcrKsZIwMhSvzzMuKMyq1eTMqceeGlnDVfiv68j6bCYPD0I3w8pWlro/8Ahzh7XxTeaxaR3kdg0UkkSl0mUrvzjJxkFsjHK8HPFct49j03W9EvI7rULO2urVRcsxfdLb/MBygyxB3Y9+PY1V/aS+It5ovhzSm0+4kWPXGadr1GwzhVUBAw5G1XHHB6HArwG2vRc6p5cbuGzgnOOvWv0Dg3h+phUsfjLqrLRRb1jG3Kk++m6aurLZpnz+YYiVePsqcvcWu27vv/AFo9dzsNO1S6v7ZlWT93GCykcZP8+a9I/Zv+KLp4jNldaZdX088kam6htHuDbxBgQJNvKoMAEgYxnPXNeTp4pt9FsbiytfLaaVfmZhu3H09up6V9z/8ABEj9hb4j/GL4gXnjjQ4ZNH8JxxSaPda1NawzLLO7RFo4vNON6rIh4VwdwVhhiR9RxHmFLC5bVr1bcqjtJtJvorpN3fSyZz5bgJYrEwoxTvJ6WWvm9Wl+IkNnoenXjWAjhuFWUGUuT5cEj7gu5ckhDtwCc4C8+77y68OaZq1vb6vqVha31+uEgnYbgHZkU/T5ScnnpxzX2T8av+CCNjqfg9F+DvxAuo/iG8so1OXxBPK0dwZJIo2KtBH+7J8t8+ZEykt1jK710PhF/wAEwfGH7OHxn0vRvjF4i+EfiT4eeIL6aCxurSzkXVdTuUinlEBea3KwFSsk5jEpI8kKjMd238HxlXAYug8ZLGSrNKTcZXjO6s20mpKz3tpddVZ2+2o5XiqNdYV0VBNqzWsfK+sXv1/B3R5v8Fv2ENL+POnzT6PqUOqW/hu+W0vn8wCO3meFZFA5+YbJFII4LMMZYEDN+Lv7KEfhDSrnT2uNJFxkC23OJJEOQu9gv8Az1JAGRzX114S8D+Bf2Rvjf4msf7at9C1TxFHp0f2W9uI4bS5t0juHiubcSKpYZadHMbYEsW0qpUVx3i34kaX8DPi63iXU9C0nVfD2vBrmy1Oytft0tsN21pzE0jySRlgdjooKhcKhUkj5XEUeXlnGMuVxi1fS7cU3bur3s+qsfUU6FF03GfLe7Tt0SbSv20te+zPkjU/+CZ11f6FZR6FrVnrV/M6x3kxnj+zx7MYaJh8rKeQDzjAyK4H46/sg658DdLhj1S6aa8tYi14qyAQxxAfJ5ZY5O7oCechielfSH7QH/BUe/ufGNrY+DFgk+wSl5zNay24vICCGV1Khdqgghhg5UY74+VPif8Rv+Em8PXWtazeL/aUky3M7yuSrqSxaMHgKB97GDjBxg5qsoy+vmGMjhKd05OyvprbT0Xm9tfM8fOp4HDYeTiru3R6afm/66o8c8T+JF0q21ItKZV0vyvNKTKFgzyMsWAVccZPoRivD/id8ZLrxrrlv5KPHY2cJiijzyzHBZyCO5AABHQAnByA74r+NLPVvDpsdFsWt7O3vd00rndLOQjCNiMAKOXOOuRnPauDbUI4ooF2tnP71jlTntj/P4V/TeT5ZHBYKnhG3JU3eLlve1rrV2WrSSeidnrc/OeXnqOs1rLRr/Pvt950dp8Urqwnhkt7bT4LiH/VzCN3dDkkHDOVyM91I4FO1Tx1qXim/jm1LULrUJEGFM0hbYD2UfdUeygCsR7RdT2mzhJkP3ju3bvwxxUFv5kcjBty+hHGa9nmd9Q9lDoj2X4M+Mn0zWPsskK3FrfYgaEyGPeW4GGwcEHB5BGQCQcYJXmvh/UbrSNQguI53WS3kWVOejKQR+oor43iThOOZ144iCipWs221e22x0YHHSw0XTu7Xvsn+Z7LaeB5PiRY32n2uswtpkce5P7WkeZvNIyRwQsONp+ZTkcYzXA+Mvg1deDdQW8s4o7vT9iuWhbfszwWAb5ymejEY+YDPSvQ/g9ZzfFPwillpMMb61pLzSXNiHVZL2E7pDcRRcNIUUbXVQxVURujceifD74eXD62WuJo5LNomgdWVTvU7PkYMTlCSflA2nbnPINfM5pxticpzSph60E6UWla1pNWXvJqyber106aNHVhsrnWoxdPeXXp6fLY+Sbewktr7zvs6XEJbJBO0/Q+lfq1/wSx/4LSaX+y1+zNoPw51PRdLvIfDstw++fLSK8t3LN8q4UfL5pCnLHI69APzv/av0HQ/APjuLTfDUNxatDbRtqIYkw+ew3YiznK7SOehJ4wBXBTWcY0GKRkVm5O7HP8Ak19fmmVYbiXKYQk5QjLlnHRXWjtdarVN9eqZng8dXyzFOcbOSvF9V0v+KR/QHZf8F5/hbqHhS8ml0DUNUGofK2y7WFvlUqzo6cuTgKctyoAB4IOH8af+Cjfhv9s/4WaZoPh3T9Stbgyw3Saj5AafRLuGVZIZ1wSMiRFyD8sgYrwDivxz/Y98Gah8W/7csIdLutRt9LtxdM1suWtyzBB0GeRkg9th7Zz754WbWP2b/Cur3Olx3mj6gIJxbXk1w0Zhl8sqXKhgkn3FChlJXdkcFg34JnnDiyrOI4PDzvJOLi3/AHrW5rdn0s7q2mtj77L88r4qjKriaa5LO9r9F09fz69T17/gtJ/wVB+JXjHRYvgReN4Es9HuLK0v9at9Dea+uWIk8yOGaeeGIQyMY45mihjPyyRqZnUstfLPwl/aruPDX7N2vaLeTK2rWjINDkumJEI8xfNjAPXbGWZVOBnjByAfE/EHhC903xLJH4gW7GparbnUzNcMWuAG3sGcMckvtJ+b5uVPfB5vxBfNHPDCrN+7UvISflLnjj8Av41/QGX8L5fTyungOWMoJqTaWjlFq71b3tyu7b5dLn5/is1xFXGyxEW02mtekWnpsl1vstdbH1F8EfiXH4y0+b/hIGurtvOJa88394jOqqMjHzhVRTtJ5DY6DB8v+Nq3/imy1htcvZVjRpH0a2mfAYxZc4HA3Op4xnkkDPNee+C/itffC3xLJPGI5o/9Tc2zMQtwF46j05wea9Y8L6jfftHaqLHw/ot9Z3yIs/ntF9pU/wB7a3y/3QDx0B5GOaWW0sJi6uJw9OMVOzlK9kklq0rWWustVFxXVnDKpWkoRk3JLbTXW2nd+Wjep4VpOlT/ANjTL+4fcq/LM/CHrnp16/5zUUWi3CFRcKo3HcgIyrfj6H619OfFH9mt/h9oMk1/pEs11GiLM0Fmvku0hI3Yyo3A5G3k8jkDmvGdXdb6C2tVt0S6t4mUAhkGB0BUndnAJxzjHU162X42ljIOdLVLS6cWnondOLfRrez7rYmrKpTlyzVn2aaa6dbdjg21F5pifLjjJ+QsBxwO3p9cfj1qa8W5ljjjmZXVcsjY5Offv06Hpz6mrmteD7vS7Vby4YeTMc/ux359cdcHH0ptlbyzXnl2p86PIKZ+Uc4OOenJx712KL6lc8WrxG6dZNDMrfMFXruNFaUljIs+1gY2wCVaitDllLmd2e1f8E9rufRf2yvBusWsLTT6KLu8i2gkQsLSZI3O3nasjoxxgnHUdR7T+0JJb/s+eA4dSbVoUv8AUYVEFnJahZ5WOAG642D5sn249R55/wAE020yx+OV14g1C+stOtfDOlT3zLM5DXnymMxJg7tw3l/lDHEZwO483/aybxR488bWuqXUn262kjJVGuFVkYn5iAxHy8YGCcba/P8AMuG1m+fe2xH8KhGF1a/M25SS16fzb3WnW696jmCw+XQpRdpzlN3vaySir+r2Xzfk+A8aatN8QNRuNQub1pry4l3OpTAxwBz9PQDGKrT6VjS44SzLxkkk7R71TttPvLO7kWaAx+WdjMrB1B+oyD+BrfhRtZslVNzMowUxwwr9ApwSXLFW6WXkeDUk01qep/8ABO74/aZ8Av2kNNm1eSSPw3q1s2j6iyNsJSVgRKf9yQI3uqYyCcjuv+CgH7Vuh/Eu6utN8O3cWoRxyRs12oIVMEKsUeRk4Vck8jIHPUV8tX+gSRFtsa7mOHUDp6Cl0abGrwrextN5IVYYUAHTpn3+tfP4nhvCV81pZtUv7SmuVL7L3s2u6u7a/ketTzatDAzwMLcknd9+l0n2dlf/AIJsfFzxTqHi7xzeapNNCJJlghHkLsjIijWNQo9BsB9jz6Vmi2OrWxkk+aSMDcW7joKm8TPa6lKqKs1u6ttfzjyn+fpXQan4X/4RTS4LmC6i1CyukA8+NflDAcoeeoz3r6Clh4U4qnTVopWSXRdDyKlZytKXxM47X9Ms4GmuFmlkmEhKq0Xy4J5IOTnr3r7I/Yw/a68D/B34IabDrF9puh6pbyTW900DC4uLqIsHVioyxHO3bkAAAdBx8pzLDqke75VYdgMVj6loy5P3Sx4BI59BXi8Q8P4fN8L9TxDag2m+V2bt066a9j1cmzqtl+IWIo25kmtVda/1/SP1cvP2o/hv8WP2a7yLS7iHV5JpGS9a4ijYQhgdqLvJAOF56/eOOhA/OBNQh8YRap9hcSxpfTCDcP3i27FvLYk4/wBk7j3681zPhCe48D3k0kM3l2+oW0lrcDBdSGUgEgHsSMHqPfkHU+ANmT8SreSVJGhhjkZ4Vk8vz8IQEJ54yRk4zj0JBry+FuEaWRVK31eUpQna0dLq1/NJvs9P1OniDiCpmyjUrqMZR6pWv+bXyv8Aocz8Qxc6abbR5451nt5JJpd3UsflX2JChun96sSzvPKKrICVHGBwcV3fxm8VWt7rs0ccNnc3mSklyssjNEy/KUAJA4AHIyO3UGuHW1a5j29G+lfWWl1362PIpSvBXNbT75ZFX/nmORu6iiqemaTLFchW4ORxRVxu1oYVIxuavw18Vah4X1SGexuWgkf90xwGDKeoIIIPqPQgEYIBqW78Q3+tXcIvL26uMjJ8yUt70UUoRSSkt3v8tvzZdT4ix4hnk1PT2FxJJN9gtneDcxPlnBf8RuycHjk+pqjoFxJFGWWR1YBuQ31ooq+pEfg+f6GRqusXU+qqGmkbbgDmqsl7Lb6o0sblZN33h2oorF7nXyrT0HxXk1y7+ZI8m05G45wT1/kK9C1a1S28G3Ece5Y/Jjn27jtDlsEgfTt0ooraicuI+KPr/kcmkjQxJtO3K/4U2Ri0KsSS2ev40UVHQnqvU0tDcyRyK3zKyHIPOcVQ13Vrrw9cCSxuJrWSZWhZomKsUODjPb8KKKqTfKOlrUszGiG4LnknGTXVeG7SO4gi3orfX6GiilS3NMRsFzMz2MchP7yMEKw4xzRRRRJsyif/2Q==",
  links: ["https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"],
  maxzoom: 19
}, {
  id: 3,
  title: "Dark",
  type: "raster",
  thumbnail: "data:image/jpeg;base64,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",
  links: ["https://cartodb-basemaps-1.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png", "https://cartodb-basemaps-2.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png", "https://cartodb-basemaps-3.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png"]
}, {
  id: 4,
  title: "Open Street Map",
  type: "raster",
  thumbnail: "data:image/jpeg;base64,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cC8xLjAvADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDQuNC4wLUV4aXYyIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6R0lNUD0iaHR0cDovL3d3dy5naW1wLm9yZy94bXAvIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9ImdpbXA6ZG9jaWQ6Z2ltcDo3NjE0NWViZS03M2ZjLTQ0ZjUtYWU5Ny1hMGY3ZTlhOTA2ZjciIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzYyNDYxMzAtZTBmNy00YTAyLThkMDUtMTAxODVjMjYxMzY4IiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6ZjNlMTAxNmEtMjc5My00Njk1LThjMGItMzdiOGY0Y2I3MGM4IiBkYzpGb3JtYXQ9ImltYWdlL2pwZWciIEdJTVA6QVBJPSIyLjAiIEdJTVA6UGxhdGZvcm09IkxpbnV4IiBHSU1QOlRpbWVTdGFtcD0iMTYyMDcxNTEyMDg1MTU4NSIgR0lNUDpWZXJzaW9uPSIyLjEwLjI0IiB4bXA6Q3JlYXRvclRvb2w9IkdJTVAgMi4xMCI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDpjaGFuZ2VkPSIvIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjJmMWZjYzliLTdmMDQtNDIzNC1iYjIxLWI5MDc0OTVlYjQyYiIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iR2ltcCAyLjEwIChMaW51eCkiIHN0RXZ0OndoZW49IjIwMjEtMDUtMTFUMTM6Mzg6NDArMDc6MDAiLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw/eHBhY2tldCBlbmQ9InciPz7/4gKwSUNDX1BST0ZJTEUAAQEAAAKgbGNtcwQwAABtbnRyUkdCIFhZWiAH5QAFAAsABgAmAAJhY3NwQVBQTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA9tYAAQAAAADTLWxjbXMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1kZXNjAAABIAAAAEBjcHJ0AAABYAAAADZ3dHB0AAABmAAAABRjaGFkAAABrAAAACxyWFlaAAAB2AAAABRiWFlaAAAB7AAAABRnWFlaAAACAAAAABRyVFJDAAACFAAAACBnVFJDAAACFAAAACBiVFJDAAACFAAAACBjaHJtAAACNAAAACRkbW5kAAACWAAAACRkbWRkAAACfAAAACRtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACQAAAAcAEcASQBNAFAAIABiAHUAaQBsAHQALQBpAG4AIABzAFIARwBCbWx1YwAAAAAAAAABAAAADGVuVVMAAAAaAAAAHABQAHUAYgBsAGkAYwAgAEQAbwBtAGEAaQBuAABYWVogAAAA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",
  links: ["https://a.tile.openstreetmap.org/{z}/{x}/{y}.png", "https://b.tile.openstreetmap.org/{z}/{x}/{y}.png", "https://c.tile.openstreetmap.org/{z}/{x}/{y}.png"]
}, {
  id: 5,
  title: "Google Satellite",
  type: "raster",
  thumbnail: "data:image/jpeg;base64,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YS1mODAzLTQ0NjktYmQzZC1kNjYyNGRjMWU3MWYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MDFiZjkwZDMtZWVlNy00YzVjLWI4NjEtNGNjMTA4OGU0MjY5IiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6MTQzYzI0NTctY2Q4OC00Yzg3LTg2ZDYtZjRhZDExYjQwZmYxIiBkYzpGb3JtYXQ9ImltYWdlL2pwZWciIEdJTVA6QVBJPSIyLjAiIEdJTVA6UGxhdGZvcm09IkxpbnV4IiBHSU1QOlRpbWVTdGFtcD0iMTYyMDcxNTE2MDczODM3MyIgR0lNUDpWZXJzaW9uPSIyLjEwLjI0IiB4bXA6Q3JlYXRvclRvb2w9IkdJTVAgMi4xMCI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDpjaGFuZ2VkPSIvIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmYxNGJlZGJkLWJjMWItNDQ4Mi04Yzk1LTQ0MTZhNTlhNGU2MyIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iR2ltcCAyLjEwIChMaW51eCkiIHN0RXZ0OndoZW49IjIwMjEtMDUtMTFUMTM6Mzk6MjArMDc6MDAiLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw/eHBhY2tldCBlbmQ9InciPz7/4gKwSUNDX1BST0ZJTEUAAQEAAAKgbGNtcwQwAABt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",
  links: ["https://mt0.google.com/vt/lyrs=s&x={x}&y={y}&z={z}", "https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}", "https://mt2.google.com/vt/lyrs=s&x={x}&y={y}&z={z}", "https://mt3.google.com/vt/lyrs=s&x={x}&y={y}&z={z}"]
}];
/* harmony default export */ var BaseMapControl_basemap = (basemap);
// EXTERNAL MODULE: ./src/components/Map/store/store-baseMap.js
var store_baseMap = __webpack_require__(316);
;// CONCATENATED MODULE: ./src/components/Map/modules/BaseMapControl/BaseMapStore.mixins.js

/* harmony default export */ var BaseMapStore_mixins = ({
  props: {
    mapId: String,
    title: {
      type: String,
      default: ""
    }
  },
  inject: {
    i_mapId: {
      from:
      /* injection key */
      "mapId",
      default: null
    }
  },
  computed: {
    c_mapId() {
      return this.i_mapId || this.mapId;
    },

    c_baseMaps() {
      return (0,store_baseMap/* baseMaps */.jk)(this.c_mapId);
    },

    current_baseMaps: {
      get() {
        return (0,store_baseMap/* getCurrentBaseMaps */.AM)(this.c_mapId);
      }

    }
  },
  methods: {
    onDestroy() {
      this.clear();
    },

    setBaseMaps(baseMaps) {
      (0,store_baseMap/* setBaseMaps */._c)(this.c_mapId, baseMaps);
    },

    setDefaultValueForMap(baseMaps) {
      (0,store_baseMap/* setDefaultValueForMap */.Jv)(this.c_mapId, baseMaps);
    },

    clear() {
      (0,store_baseMap/* clearBaseMapForMap */.FW)(this.c_mapId);
    },

    loadItem(item) {
      (0,store_baseMap/* setBaseMapForMap */.VS)(this.c_mapId, item);
    }

  }
});
// EXTERNAL MODULE: ./src/components/MapCard.vue + 4 modules
var MapCard = __webpack_require__(6890);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/Map/modules/BaseMapControl/BaseMapControl.vue?vue&type=script&lang=js&



 //import MapControlGroupButton from "@/components/Map/control/MapControlGroupButton.vue";





/* harmony default export */ var BaseMapControlvue_type_script_lang_js_ = ({
  components: {
    MapControlButton: MapControlButton/* default */.Z,
    DraggablePopup: draggable/* DraggablePopup */.a,
    MapCard: MapCard/* default */.Z,
    MapImage: MapImage/* default */.Z,
    MapIcon: MapIcon/* default */.Z
  },
  mixins: [ModuleMixin/* default */.Z, BaseMapStore_mixins],
  props: {
    baseMaps: {
      type: Array,
      default: () => BaseMapControl_basemap
    },
    title: {
      type: String,
      default: ""
    },
    defaultBaseMap: {
      type: String,
      default: "Open Street Map"
    },
    controlIcon: {
      type: String,
      default: "mdi mdi-layers-outline"
    }
  },
  data: () => ({
    p_baseMaps: [],
    show: false
  }),
  watch: {
    baseMaps: {
      immediate: true,

      handler(value) {
        if (!value || value.length < 1) return;
        this.p_baseMaps = value;
      }

    },
    p_baseMaps: {
      immediate: true,

      handler(value) {
        if (!this.map || !value || value.length < 1) return;
        this.onInit();
      }

    },
    defaultBaseMap: {
      handler(value) {
        this.setDefaultValueForMap(value);
      },

      immediate: true
    }
  },
  computed: {
    sizeBaseMap() {
      return 70;
    }

  },
  methods: {
    onInit() {
      if (this.p_baseMaps.length > 0) {
        this.setBaseMaps(this.p_baseMaps);
      }
    },

    onToggleList() {
      this.show = !this.show;
    },

    onClick(item) {
      if (this.current_baseMaps && item.id === this.current_baseMaps.id) {
        return;
      }

      this.loadItem(item);
    }

  }
});
;// CONCATENATED MODULE: ./src/components/Map/modules/BaseMapControl/BaseMapControl.vue?vue&type=script&lang=js&
 /* harmony default export */ var BaseMapControl_BaseMapControlvue_type_script_lang_js_ = (BaseMapControlvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-54.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-54.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-54.use[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/Map/modules/BaseMapControl/BaseMapControl.vue?vue&type=style&index=0&id=2335411e&prod&scoped=true&lang=css&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/Map/modules/BaseMapControl/BaseMapControl.vue?vue&type=style&index=0&id=2335411e&prod&scoped=true&lang=css&

// EXTERNAL MODULE: ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1001);
;// CONCATENATED MODULE: ./src/components/Map/modules/BaseMapControl/BaseMapControl.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.Z)(
  BaseMapControl_BaseMapControlvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "2335411e",
  null
  
)

/* harmony default export */ var BaseMapControl = (component.exports);

/***/ }),

/***/ 7512:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ ModuleMixin; }
});

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__(6699);
// EXTERNAL MODULE: ./src/components/Map/store/store-event.js
var store_event = __webpack_require__(52);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/Map/ModuleContainer.vue?vue&type=template&id=beabf37e&scoped=true&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "module__container"
  }, [_vm.controlVisible && _vm.$slots['btn'] ? _c('portal', {
    attrs: {
      "order": _vm.order,
      "to": _vm.btnTo
    }
  }, [_c('div', [_vm._t("btn")], 2)]) : _vm._e(), _vm._t("default"), _c('portal', {
    attrs: {
      "to": _vm.draggableTo
    }
  }, [_vm._t("draggable", null, null, _vm.bindDrag)], 2)], 2);
};

var staticRenderFns = [];

// EXTERNAL MODULE: ./node_modules/portal-vue/dist/portal-vue.common.js
var portal_vue_common = __webpack_require__(9248);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/Map/ModuleContainer.vue?vue&type=script&lang=js&


/* harmony default export */ var ModuleContainervue_type_script_lang_js_ = ({
  components: {
    Portal: portal_vue_common/* Portal */.h_
  },
  props: {
    prefix: {
      type: String,
      default: "mapbox"
    },
    btnWidth: {
      type: Number,
      default: 32
    },
    position: {
      type: String,
      default: "bottom-right",

      validator(value) {
        return ["top-left", "top-right", "bottom-left", "bottom-right"].indexOf(value) !== -1;
      }

    },
    controlVisible: {
      type: Boolean,
      default: true
    },
    order: {
      type: Number,
      default: 0
    }
  },
  computed: {
    btnTo() {
      return `${this.position}-${this.prefix}`;
    },

    draggableTo() {
      return `map-draggable-${this.prefix}`;
    },

    bindDrag() {
      let bind = {};

      if (this.position.includes("left")) {
        bind.left = 18 + this.btnWidth;
      }

      if (this.position.includes("right")) {
        bind.right = 18 + this.btnWidth;
      }

      if (this.position.includes("top")) {
        bind.top = 10;
      }

      if (this.position.includes("bottom")) {
        bind.bottom = 10;
      }

      return bind;
    }

  }
});
;// CONCATENATED MODULE: ./src/components/Map/ModuleContainer.vue?vue&type=script&lang=js&
 /* harmony default export */ var Map_ModuleContainervue_type_script_lang_js_ = (ModuleContainervue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-54.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-54.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-54.use[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/Map/ModuleContainer.vue?vue&type=style&index=0&id=beabf37e&prod&scoped=true&lang=css&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/Map/ModuleContainer.vue?vue&type=style&index=0&id=beabf37e&prod&scoped=true&lang=css&

// EXTERNAL MODULE: ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1001);
;// CONCATENATED MODULE: ./src/components/Map/ModuleContainer.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.Z)(
  Map_ModuleContainervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "beabf37e",
  null
  
)

/* harmony default export */ var ModuleContainer = (component.exports);
;// CONCATENATED MODULE: ./src/components/Map/mixins/ModuleMixin.js



/* harmony default export */ var ModuleMixin = ({
  components: {
    ModuleContainer: ModuleContainer
  },
  props: {
    position: {
      type: String,
      default: "bottom-right",

      validator(value) {
        return ["top-left", "top-right", "bottom-left", "bottom-right"].indexOf(value) !== -1;
      }

    },
    controlVisible: {
      type: Boolean,
      default: true
    },
    order: {
      type: Number,
      default: 0
    }
  },

  data() {
    return {
      loaded: false
    };
  },

  watch: {},
  inject: ["getMap", "mapId", "trans"],
  computed: {
    isLeft() {
      return this.position.includes("left");
    },

    isRight() {
      return this.position.includes("right");
    },

    isTop() {
      return this.position.includes("top");
    },

    isBottom() {
      return this.position.includes("bottom");
    },

    bindModule() {
      return {
        controlVisible: this.controlVisible,
        order: this.order,
        position: this.position,
        prefix: this.mapId
      };
    }

  },

  mounted() {
    this.$once("module-loaded", () => {
      this.loaded = true;
    });
    this.$on("module-failed", () => {
      this.loaded = false;
    });
    this.getMap(async map => {
      this.map = map; // Revoke event

      if (this.onInit instanceof Function) {
        const command = this.onInit();

        if (command instanceof Promise) {
          try {
            await command;
          } catch (error) {
            this.$emit("module-failed");
            throw error;
          }
        }
      }

      this.$emit("module-loaded");
    });
  },

  destroyed() {
    if (this.onDestroy instanceof Function) {
      try {
        this.onDestroy();
      } catch (e) {
        console.error(e);
      }
    }

    this.map = null;
  },

  methods: {
    removeListenerMap(event, eventId) {
      (0,store_event/* removeListenerMap */.sq)(this.mapId, event, eventId);
    },

    addListenerMap(event, eventId, cb) {
      (0,store_event/* addListenerMap */.bb)(this.mapId, event, eventId, cb);
    },

    actionAfterMapLoaded(cb) {
      if (!this.map) {
        return this.$once("module-loaded", () => {
          cb();
        });
      }

      cb();
    },

    removeSource(sourceId) {
      if (this.map.getSource(sourceId)) {
        this.map.removeSource(sourceId);
      }
    },

    addLayer(layer, beforeId) {
      if (!this.map) {
        return this.$once("module-loaded", () => {
          this.addLayer(layer, beforeId);
        });
      }

      this.map.addLayer(layer, beforeId);
    },

    removeLayer(layerId) {
      if (!this.map) return;

      if (this.map.getLayer(layerId)) {
        this.map.removeLayer(layerId);
      }

      if (this.map.getSource(layerId)) {
        this.map.removeSource(layerId);
      }
    }

  }
});

/***/ })

}]);
//# sourceMappingURL=map.umd.994.js.map