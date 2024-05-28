import { ref, resolveComponent, unref, withCtx, createVNode, openBlock, createBlock, createTextVNode, toDisplayString, createCommentVNode, useSSRContext, mergeProps } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { p as pageData } from "./pageData-Dn7cuHB0.js";
import { _ as _export_sfc } from "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "ufo";
import "radix3";
import "defu";
import "klona";
import "devalue";
const _sfc_main$1 = {
  __name: "IndexOverview",
  __ssrInlineRender: true,
  props: {
    title: String,
    teaser: String,
    showcases: Object,
    cta: Object
  },
  setup(__props) {
    const isMobile = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (unref(isMobile)) {
        _push(`<div class="flex flex-col items-center">`);
        if (__props.title) {
          _push(`<div class="capitalize header-sm text-secondary mt-[50px]">${ssrInterpolate(__props.title)}</div>`);
        } else {
          _push(`<!---->`);
        }
        if (__props.teaser) {
          _push(`<div class="capitalize body-sm text-secondary text-center pt-[18px] pb-[60px]">${ssrInterpolate(__props.teaser)}</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="flex flex-col justify-center"><!--[-->`);
        ssrRenderList(__props.showcases, (showcase, index2) => {
          _push(`<div><div class="flex flex-col items-center gap-y-[24px] pb-[49px]">`);
          _push(ssrRenderComponent(_component_RouterLink, {
            to: showcase.cta.url,
            target: "_blank"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<img${ssrRenderAttr("src", showcase.image.src)}${ssrRenderAttr("alt", showcase.image.alt)} class="w-[291px]"${_scopeId}>`);
              } else {
                return [
                  createVNode("img", {
                    src: showcase.image.src,
                    alt: showcase.image.alt,
                    class: "w-[291px]"
                  }, null, 8, ["src", "alt"])
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(ssrRenderComponent(_component_RouterLink, {
            to: showcase.cta.url,
            target: "_blank"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                if (showcase.cta) {
                  _push2(`<button${ssrRenderAttr("to", showcase.cta.url)} class="w-[213px] h-[48px] rounded-50 uppercase caption-lg cursor-pointer bg-detail text-detail-text"${_scopeId}>${ssrInterpolate(showcase.cta.name)} <span class="w-[12px] absolute ml-[14px]"${_scopeId}><svg viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M0.166504 12.3337V0.666992H5.74248V1.6964H1.19592V11.3042H10.8038V6.75768H11.8332V12.3337H0.166504ZM4.43856 8.78219L3.71797 8.0616L10.0832 1.6964H7.37239V0.666992H11.8332V5.12778H10.8038V2.41699L4.43856 8.78219Z" fill="currentColor"${_scopeId}></path></svg></span></button>`);
                } else {
                  _push2(`<!---->`);
                }
              } else {
                return [
                  showcase.cta ? (openBlock(), createBlock("button", {
                    key: 0,
                    to: showcase.cta.url,
                    class: "w-[213px] h-[48px] rounded-50 uppercase caption-lg cursor-pointer bg-detail text-detail-text"
                  }, [
                    createTextVNode(toDisplayString(showcase.cta.name) + " ", 1),
                    createVNode("span", { class: "w-[12px] absolute ml-[14px]" }, [
                      (openBlock(), createBlock("svg", {
                        viewBox: "0 0 12 13",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                      }, [
                        createVNode("path", {
                          d: "M0.166504 12.3337V0.666992H5.74248V1.6964H1.19592V11.3042H10.8038V6.75768H11.8332V12.3337H0.166504ZM4.43856 8.78219L3.71797 8.0616L10.0832 1.6964H7.37239V0.666992H11.8332V5.12778H10.8038V2.41699L4.43856 8.78219Z",
                          fill: "currentColor"
                        })
                      ]))
                    ])
                  ], 8, ["to"])) : createCommentVNode("", true)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div></div>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<div class="flex flex-col items-center">`);
        if (__props.title) {
          _push(`<div class="capitalize header-lg text-secondary mt-[50px]">${ssrInterpolate(__props.title)}</div>`);
        } else {
          _push(`<!---->`);
        }
        if (__props.teaser) {
          _push(`<div class="capitalize body-lg text-secondary text-center pt-[18px] pb-[100px]">${ssrInterpolate(__props.teaser)}</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="flex justify-center gap-[68px]"><!--[-->`);
        ssrRenderList(__props.showcases, (showcase, index2) => {
          _push(`<div><div class="flex flex-col items-center gap-y-[36px]">`);
          _push(ssrRenderComponent(_component_RouterLink, {
            to: showcase.cta.url,
            target: "_blank"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<img${ssrRenderAttr("src", showcase.image.src)}${ssrRenderAttr("alt", showcase.image.alt)} class="w-[450px]"${_scopeId}>`);
              } else {
                return [
                  createVNode("img", {
                    src: showcase.image.src,
                    alt: showcase.image.alt,
                    class: "w-[450px]"
                  }, null, 8, ["src", "alt"])
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(ssrRenderComponent(_component_RouterLink, {
            to: showcase.cta.url,
            target: "_blank"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                if (showcase.cta) {
                  _push2(`<button${ssrRenderAttr("to", showcase.cta.url)} class="w-[213px] h-[48px] rounded-50 uppercase caption-lg cursor-pointer bg-detail text-detail-text"${_scopeId}>${ssrInterpolate(showcase.cta.name)} <span class="w-[12px] absolute ml-[14px]"${_scopeId}><svg viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M0.166504 12.3337V0.666992H5.74248V1.6964H1.19592V11.3042H10.8038V6.75768H11.8332V12.3337H0.166504ZM4.43856 8.78219L3.71797 8.0616L10.0832 1.6964H7.37239V0.666992H11.8332V5.12778H10.8038V2.41699L4.43856 8.78219Z" fill="currentColor"${_scopeId}></path></svg></span></button>`);
                } else {
                  _push2(`<!---->`);
                }
              } else {
                return [
                  showcase.cta ? (openBlock(), createBlock("button", {
                    key: 0,
                    to: showcase.cta.url,
                    class: "w-[213px] h-[48px] rounded-50 uppercase caption-lg cursor-pointer bg-detail text-detail-text"
                  }, [
                    createTextVNode(toDisplayString(showcase.cta.name) + " ", 1),
                    createVNode("span", { class: "w-[12px] absolute ml-[14px]" }, [
                      (openBlock(), createBlock("svg", {
                        viewBox: "0 0 12 13",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                      }, [
                        createVNode("path", {
                          d: "M0.166504 12.3337V0.666992H5.74248V1.6964H1.19592V11.3042H10.8038V6.75768H11.8332V12.3337H0.166504ZM4.43856 8.78219L3.71797 8.0616L10.0832 1.6964H7.37239V0.666992H11.8332V5.12778H10.8038V2.41699L4.43856 8.78219Z",
                          fill: "currentColor"
                        })
                      ]))
                    ])
                  ], 8, ["to"])) : createCommentVNode("", true)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div></div>`);
        });
        _push(`<!--]--></div></div>`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/IndexOverview.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const page = ref(pageData.index);
    const isMobile = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "overview bg-primary min-h-screen" }, _attrs))} data-v-712ad99e>`);
      if (unref(isMobile)) {
        _push(`<div data-v-712ad99e>`);
        _push(ssrRenderComponent(_sfc_main$1, { ...unref(page).overview }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<div data-v-712ad99e>`);
        _push(ssrRenderComponent(_sfc_main$1, { ...unref(page).overview }, null, _parent));
        _push(`</div>`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-712ad99e"]]);
export {
  index as default
};
//# sourceMappingURL=index-Cvs3gOnr.js.map
