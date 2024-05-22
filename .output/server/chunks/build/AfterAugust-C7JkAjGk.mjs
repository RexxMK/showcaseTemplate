import { _ as _sfc_main$1$1, a as _sfc_main$2, b as _sfc_main$3, c as _sfc_main$2$1 } from './ScrollGallery-CuzMpPIn.mjs';
import { ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { p as pageData } from './pageData-Cu7rdIyB.mjs';

const _sfc_main$1 = {
  __name: "VideoBorder",
  __ssrInlineRender: true,
  props: {
    laptop: Object,
    mobile: Object
  },
  setup(__props) {
    ref(null);
    const isMobile = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "c-video-border" }, _attrs))}>`);
      if (unref(isMobile)) {
        _push(`<div><div class="flex justify-center">`);
        if (__props.mobile.src) {
          _push(`<div class="b-solid b-detail"><video${ssrRenderAttr("src", __props.mobile.src)} class="w-[330px] cursor-pointer m-[8px]" autoplay muted loop></video></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<div><div class="flex justify-center">`);
        if (__props.laptop.src) {
          _push(`<div class="b-solid b-2 b-detail"><video${ssrRenderAttr("src", __props.laptop.src)} class="w-[1100px] cursor-pointer m-[14px]" autoplay muted loop></video></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/VideoBorder.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "AfterAugust",
  __ssrInlineRender: true,
  setup(__props) {
    const page = ref(pageData.afterAugust);
    const teaserMaxWidth = ref("max-w-27ch");
    const isMobile = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ImageSlider = _sfc_main$3;
      const _component_ImageGallery = _sfc_main$2$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "afterAugust bg-primary" }, _attrs))}>`);
      if (unref(isMobile)) {
        _push(`<div class="flex flex-col gap-y-[165px] pb-[165px]">`);
        _push(ssrRenderComponent(_sfc_main$1$1, mergeProps({ ...unref(page).hero }, { teaserMaxWidth: unref(teaserMaxWidth) }), null, _parent));
        _push(ssrRenderComponent(_sfc_main$1, { ...unref(page).borderVideo.intro }, null, _parent));
        _push(ssrRenderComponent(_component_ImageSlider, { ...unref(page).imageSlider }, null, _parent));
        _push(ssrRenderComponent(_sfc_main$2, { ...unref(page).scrollGallery }, null, _parent));
        _push(ssrRenderComponent(_sfc_main$1, { ...unref(page).borderVideo.story }, null, _parent));
        _push(ssrRenderComponent(_component_ImageGallery, mergeProps({ ...unref(page).imageGallery }, { sliceAmount: 2 }), null, _parent));
        _push(ssrRenderComponent(_sfc_main$1, { ...unref(page).borderVideo.outro }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<div class="flex flex-col gap-y-[360px] pb-[360px]">`);
        _push(ssrRenderComponent(_sfc_main$1$1, { ...unref(page).hero }, null, _parent));
        _push(ssrRenderComponent(_sfc_main$1, { ...unref(page).borderVideo.intro }, null, _parent));
        _push(ssrRenderComponent(_component_ImageSlider, { ...unref(page).imageSlider }, null, _parent));
        _push(ssrRenderComponent(_sfc_main$2, { ...unref(page).scrollGallery }, null, _parent));
        _push(ssrRenderComponent(_sfc_main$1, { ...unref(page).borderVideo.story }, null, _parent));
        _push(ssrRenderComponent(_component_ImageGallery, mergeProps({ ...unref(page).imageGallery }, { sliceAmount: 3 }), null, _parent));
        _push(ssrRenderComponent(_sfc_main$1, { ...unref(page).borderVideo.outro }, null, _parent));
        _push(`</div>`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/AfterAugust.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=AfterAugust-C7JkAjGk.mjs.map
