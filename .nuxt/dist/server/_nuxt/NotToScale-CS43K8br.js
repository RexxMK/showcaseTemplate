import { _ as _sfc_main$4, a as _sfc_main$5, b as _sfc_main$6, c as _sfc_main$7 } from "./ScrollGallery-CuzMpPIn.js";
import { useSSRContext, ref, mergeProps, unref } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderClass, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
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
const _sfc_main$3 = {
  __name: "ImageLong",
  __ssrInlineRender: true,
  props: {
    laptop: Object,
    mobile: Object
  },
  setup(__props) {
    const isMobile = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "c-image-long" }, _attrs))}>`);
      if (unref(isMobile)) {
        _push(`<div>`);
        if (__props.mobile) {
          _push(`<div class="flex justify-center"><img${ssrRenderAttr("src", __props.mobile.src)}${ssrRenderAttr("alt", __props.mobile.alt)} class="w-[330px]"></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<div>`);
        if (__props.laptop) {
          _push(`<div class="flex justify-center"><img${ssrRenderAttr("src", __props.laptop.src)}${ssrRenderAttr("alt", __props.laptop.alt)} class="w-[1100px]"></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ImageLong.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "VideoStaggered",
  __ssrInlineRender: true,
  props: {
    laptop: Object,
    mobile: Object
  },
  setup(__props) {
    ref(null);
    const isMobile = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "c-video-staggered" }, _attrs))}>`);
      if (unref(isMobile)) {
        _push(`<div><div class="flex justify-center">`);
        if (__props.mobile.src) {
          _push(`<div class="bg-primary-variant w-[320px] h-[612px] pt-[10px] pl-[11px]"><video${ssrRenderAttr("src", __props.mobile.src)} class="w-[330px] cursor-pointer" autoplay muted loop></video></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<div><div class="flex justify-center">`);
        if (__props.laptop.src) {
          _push(`<div class="bg-primary-variant w-[1070px] h-[630px] pt-[30px] pl-[30px]"><video${ssrRenderAttr("src", __props.laptop.src)} class="w-[1100px] cursor-pointer" autoplay muted loop></video></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/VideoStaggered.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "CardModule",
  __ssrInlineRender: true,
  props: {
    leftCard: Object,
    rightCard: Object,
    leftModule: Object,
    rightModule: Object,
    mobileImages: Array,
    laptopImages: Array,
    mobileVideo: Object,
    laptopVideo: Object
  },
  setup(__props) {
    const isMobile = ref(false);
    const showLeftModule = ref(false);
    const showRightModule = ref(false);
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["c-card-module", { "h-[1000px]": !unref(isMobile) && (unref(showLeftModule) || unref(showRightModule)) }]
      }, _attrs))} data-v-edaf9155>`);
      if (unref(isMobile)) {
        _push(`<div class="flex flex-wrap gap-y-[49px] justify-center" data-v-edaf9155><div class="relative cursor-pointer" data-v-edaf9155>`);
        if (__props.leftCard) {
          _push(`<div class="w-[346px]" data-v-edaf9155><img${ssrRenderAttr("src", __props.leftCard.src)}${ssrRenderAttr("alt", __props.leftCard.alt)} class="${ssrRenderClass([{ clicked: unref(showLeftModule) }, "w-[325px] absolute z-3"])}" data-v-edaf9155><div class="w-[325px] h-[194px] bg-secondary-variant absolute ml-[8px] mt-[8px] z-2" data-v-edaf9155></div><div class="w-[325px] h-[194px] bg-secondary absolute ml-[16px] mt-[16px] z-1" data-v-edaf9155></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="z-5 mt-[206px] overflow-hidden sliderShadow" data-v-edaf9155>`);
        if (unref(showLeftModule)) {
          _push(`<div class="w-full h-auto" data-v-edaf9155><div class="flex gap-x-[13px] overflow-x-auto" data-v-edaf9155><!--[-->`);
          ssrRenderList(__props.leftModule.mobileImages, (image, index) => {
            _push(`<div data-v-edaf9155><img${ssrRenderAttr("src", image.src)}${ssrRenderAttr("alt", image.alt)} class="w-auto h-[583px] sliderShadow" data-v-edaf9155></div>`);
          });
          _push(`<!--]-->`);
          if (__props.leftModule.mobileVideo) {
            _push(`<div data-v-edaf9155><video${ssrRenderAttr("src", __props.leftModule.mobileVideo.src)} class="w-auto h-[583px] cursor-pointer sliderShadow" autoplay muted loop data-v-edaf9155></video></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="relative cursor-pointer" data-v-edaf9155>`);
        if (__props.rightCard) {
          _push(`<div class="w-[346px]" data-v-edaf9155><img${ssrRenderAttr("src", __props.rightCard.src)}${ssrRenderAttr("alt", __props.rightCard.alt)} class="${ssrRenderClass([{ clicked: unref(showRightModule) }, "w-[325px] absolute z-3"])}" data-v-edaf9155><div class="w-[325px] h-[194px] bg-secondary-variant absolute ml-[8px] mt-[8px] z-2" data-v-edaf9155></div><div class="w-[325px] h-[194px] bg-secondary absolute ml-[16px] mt-[16px] z-1" data-v-edaf9155></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="z-5 mt-[206px] overflow-hidden sliderShadow" data-v-edaf9155>`);
        if (unref(showRightModule)) {
          _push(`<div class="w-full h-auto" data-v-edaf9155><div class="flex gap-x-[13px] overflow-x-auto" data-v-edaf9155><!--[-->`);
          ssrRenderList(__props.rightModule.mobileImages, (image, index) => {
            _push(`<div data-v-edaf9155><img${ssrRenderAttr("src", image.src)}${ssrRenderAttr("alt", image.alt)} class="w-[317px] h-auto sliderShadow" data-v-edaf9155></div>`);
          });
          _push(`<!--]-->`);
          if (__props.rightModule.mobileVideo) {
            _push(`<div data-v-edaf9155><video${ssrRenderAttr("src", __props.rightModule.mobileVideo.src)} class="w-auto h-[583px] cursor-pointer sliderShadow" autoplay muted loop data-v-edaf9155></video></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<div class="flex justify-center" data-v-edaf9155><div class="flex justify-center w-[1100px] gap-x-[38px]" data-v-edaf9155><div class="relative cursor-pointer" data-v-edaf9155>`);
        if (__props.leftCard) {
          _push(`<div class="w-[550px] h-[327px]" data-v-edaf9155><img${ssrRenderAttr("src", __props.leftCard.src)}${ssrRenderAttr("alt", __props.leftCard.alt)} class="${ssrRenderClass([{ clicked: unref(showLeftModule) }, "cardContainer w-[550px] absolute z-3"])}" data-v-edaf9155><div class="w-[550px] h-[327px] bg-secondary-variant absolute top-0 ml-[10px] mt-[10px] z-2" data-v-edaf9155></div><div class="w-[550px] h-[327px] bg-secondary absolute top-0 ml-[20px] mt-[20px] z-1" data-v-edaf9155></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="flex justify-center z-5 pt-[97px]" data-v-edaf9155>`);
        if (unref(showLeftModule)) {
          _push(`<div class="w-[1449px] h-[882px] bg-primary-variant absolute overflow-y-auto rounded-10" data-v-edaf9155><div class="flex flex-col items-center mt-[80px]" data-v-edaf9155><div class="flex justify-center gap-x-[68px]" data-v-edaf9155><div class="flex flex-col gap-y-[68px] h-full sticky top-0" data-v-edaf9155><!--[-->`);
          ssrRenderList(__props.leftModule.mobileImages, (image, index) => {
            _push(`<div data-v-edaf9155><img${ssrRenderAttr("src", image.src)}${ssrRenderAttr("alt", image.alt)} class="w-[291px]" data-v-edaf9155></div>`);
          });
          _push(`<!--]--></div><div class="flex flex-col gap-y-[97px] h-full sticky top-0" data-v-edaf9155><!--[-->`);
          ssrRenderList(__props.leftModule.laptopImages, (image, index) => {
            _push(`<div data-v-edaf9155><img${ssrRenderAttr("src", image.src)}${ssrRenderAttr("alt", image.alt)} class="w-[1019px]" data-v-edaf9155></div>`);
          });
          _push(`<!--]--></div></div>`);
          if (__props.leftModule.laptopVideo) {
            _push(`<div class="pt-[232px] pb-[80px]" data-v-edaf9155><div class="w-[1100] h-[42px] bg-secondary" data-v-edaf9155></div><video${ssrRenderAttr("src", __props.leftModule.laptopVideo.src)} class="w-[1100px] cursor-pointer" autoplay muted loop data-v-edaf9155></video></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(showRightModule)) {
          _push(`<div class="w-[1449px] h-[882px] bg-primary-variant absolute overflow-y-auto rounded-10" data-v-edaf9155><div class="flex flex-col items-center mt-[80px]" data-v-edaf9155><div class="flex justify-center gap-x-[68px]" data-v-edaf9155><div class="flex flex-col gap-y-[68px] h-full sticky top-0" data-v-edaf9155><!--[-->`);
          ssrRenderList(__props.rightModule.mobileImages, (image, index) => {
            _push(`<div data-v-edaf9155><img${ssrRenderAttr("src", image.src)}${ssrRenderAttr("alt", image.alt)} class="w-[291px]" data-v-edaf9155></div>`);
          });
          _push(`<!--]--></div><div class="flex flex-col gap-y-[97px] h-full sticky top-0" data-v-edaf9155><!--[-->`);
          ssrRenderList(__props.rightModule.laptopImages, (image, index) => {
            _push(`<div data-v-edaf9155><img${ssrRenderAttr("src", image.src)}${ssrRenderAttr("alt", image.alt)} class="w-[1019px]" data-v-edaf9155></div>`);
          });
          _push(`<!--]--></div></div>`);
          if (__props.rightModule.laptopVideo) {
            _push(`<div class="pt-[232px] pb-[80px]" data-v-edaf9155><div class="w-[1100] h-[42px] bg-secondary" data-v-edaf9155></div><video${ssrRenderAttr("src", __props.rightModule.laptopVideo.src)} class="w-[1100px] cursor-pointer" autoplay muted loop data-v-edaf9155></video></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="relative cursor-pointer" data-v-edaf9155>`);
        if (__props.rightCard) {
          _push(`<div class="w-[550px] h-[327px]" data-v-edaf9155><img${ssrRenderAttr("src", __props.rightCard.src)}${ssrRenderAttr("alt", __props.rightCard.alt)} class="${ssrRenderClass([{ clicked: unref(showRightModule) }, "cardContainer w-[550px] absolute z-3"])}" data-v-edaf9155><div data-v-edaf9155><div class="w-[550px] h-[327px] bg-secondary-variant absolute top-0 ml-[10px] mt-[10px] z-2" data-v-edaf9155></div><div class="w-[550px] h-[327px] bg-secondary absolute top-0 ml-[20px] mt-[20px] z-1" data-v-edaf9155></div></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></div>`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CardModule.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const CardModule = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-edaf9155"]]);
const _sfc_main = {
  __name: "NotToScale",
  __ssrInlineRender: true,
  setup(__props) {
    const page = ref(pageData.notToScale);
    const teaserMaxWidth = ref("max-w-23ch");
    const isMobile = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ImageGallery = _sfc_main$7;
      const _component_ImageLong = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "notToScale bg-primary" }, _attrs))}>`);
      if (unref(isMobile)) {
        _push(`<div class="flex flex-col gap-y-[165px] pb-[165px]">`);
        _push(ssrRenderComponent(_sfc_main$4, mergeProps({ ...unref(page).hero }, { teaserMaxWidth: unref(teaserMaxWidth) }), null, _parent));
        _push(ssrRenderComponent(_sfc_main$2, { ...unref(page).staggeredVideo }, null, _parent));
        _push(ssrRenderComponent(_sfc_main$5, { ...unref(page).scrollGallery }, null, _parent));
        _push(ssrRenderComponent(CardModule, { ...unref(page).cardModule }, null, _parent));
        _push(ssrRenderComponent(_component_ImageGallery, mergeProps({ ...unref(page).imageGallery }, { sliceAmount: 3 }), null, _parent));
        _push(ssrRenderComponent(_component_ImageLong, { ...unref(page).longImage }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<div class="flex flex-col gap-y-[360px] pb-[360px]">`);
        _push(ssrRenderComponent(_sfc_main$4, mergeProps({ ...unref(page).hero }, { teaserMaxWidth: unref(teaserMaxWidth) }), null, _parent));
        _push(ssrRenderComponent(_sfc_main$2, { ...unref(page).staggeredVideo }, null, _parent));
        _push(ssrRenderComponent(_sfc_main$5, { ...unref(page).scrollGallery }, null, _parent));
        _push(ssrRenderComponent(CardModule, { ...unref(page).cardModule }, null, _parent));
        _push(ssrRenderComponent(_sfc_main$6, { ...unref(page).imageSlider }, null, _parent));
        _push(ssrRenderComponent(_component_ImageLong, { ...unref(page).longImage }, null, _parent));
        _push(`</div>`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/NotToScale.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=NotToScale-CS43K8br.js.map
