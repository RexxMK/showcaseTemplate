import { ref, computed, onUnmounted, mergeProps, unref, useSSRContext } from 'file:///Users/rikke/Documents/GitHub/showcaseTemplate/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrRenderStyle, ssrInterpolate, ssrRenderClass } from 'file:///Users/rikke/Documents/GitHub/showcaseTemplate/node_modules/vue/server-renderer/index.mjs';

const _sfc_main$3 = {
  __name: "ImageSlider",
  __ssrInlineRender: true,
  props: {
    topRowImages: Array,
    bottomRowImages: Array,
    mobileImages: Array,
    caption: String
  },
  setup(__props) {
    const props = __props;
    const isMobile = ref(false);
    const topRowTranslate = ref(0);
    const bottomRowTranslate = ref(0);
    let lastScrollPosition = 0;
    const handleScroll = () => {
      const currentScrollPosition = (void 0).scrollY || (void 0).documentElement.scrollTop;
      if (currentScrollPosition > lastScrollPosition) {
        topRowTranslate.value -= 4;
        bottomRowTranslate.value += 4;
      } else {
        topRowTranslate.value += 4;
        bottomRowTranslate.value -= 4;
      }
      lastScrollPosition = currentScrollPosition;
    };
    const getInfiniteImages = (images) => {
      if (!images || images.length === 0)
        return [];
      const repeatCount = Math.ceil((void 0).innerWidth / 650) + 1;
      return Array.from({ length: repeatCount }, () => images).flat();
    };
    const infiniteTopRowImages = computed(
      () => getInfiniteImages(props.topRowImages)
    );
    const infiniteBottomRowImages = computed(
      () => getInfiniteImages(props.bottomRowImages)
    );
    onUnmounted(() => {
      (void 0).removeEventListener("scroll", handleScroll);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "c-image-slider" }, _attrs))}>`);
      if (unref(isMobile)) {
        _push(`<div class="relative"><div class="flex gap-x-[16px] overflow-auto h-auto sliderShadow"><!--[-->`);
        ssrRenderList(__props.mobileImages, (image, index) => {
          _push(`<img${ssrRenderAttr("src", image.src)}${ssrRenderAttr("alt", image.alt)} class="w-[330px] sliderShadow">`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<div class="flex flex-col gap-y-[97px]"><div class="flex gap-x-[68px]" style="${ssrRenderStyle({ transform: `translateX(${unref(topRowTranslate)}px)` })}"><!--[-->`);
        ssrRenderList(unref(infiniteTopRowImages), (image, index) => {
          _push(`<img${ssrRenderAttr("src", image.src)}${ssrRenderAttr("alt", image.alt)} class="w-[650px]">`);
        });
        _push(`<!--]--></div><div class="flex gap-x-[68px]" style="${ssrRenderStyle({ transform: `translateX(${unref(bottomRowTranslate)}px)` })}"><!--[-->`);
        ssrRenderList(unref(infiniteBottomRowImages), (image, index) => {
          _push(`<img${ssrRenderAttr("src", image.src)}${ssrRenderAttr("alt", image.alt)} class="w-[650px]">`);
        });
        _push(`<!--]--></div></div>`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ImageSlider.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "ImageGallery",
  __ssrInlineRender: true,
  props: {
    mobileImages: Array,
    laptopImages: Array,
    cta: Object,
    sliceAmount: {
      type: Number,
      default: 3
    }
  },
  setup(__props) {
    const props = __props;
    const sliceAmount = ref(props.sliceAmount);
    const isMobile = ref(false);
    const isAllImagesVisible = ref(false);
    const remainingAmount = computed(() => {
      if (isMobile.value) {
        return Math.max(0, props.mobileImages.length - sliceAmount.value);
      } else {
        return Math.max(0, props.laptopImages.length - sliceAmount.value);
      }
    });
    const shownAmount = computed(() => {
      if (isMobile.value) {
        return Math.max(0, props.mobileImages.length - props.sliceAmount);
      } else {
        return Math.max(0, props.laptopImages.length - props.sliceAmount);
      }
    });
    const buttonLabel = computed(() => {
      return isAllImagesVisible.value ? props.cta.isActive + " " + shownAmount.value : props.cta.name + " " + remainingAmount.value;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "c-image-gallery" }, _attrs))}><div>`);
      if (unref(isMobile)) {
        _push(`<div class="flex justify-center"><div class="grid gap-[49px]"><!--[-->`);
        ssrRenderList(__props.mobileImages.slice(0, unref(sliceAmount)), (image, index) => {
          _push(`<div><img${ssrRenderAttr("src", image.src)}${ssrRenderAttr("alt", image.alt)} class="w-[330px]"></div>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<div class="flex justify-center"><div class="grid grid-cols-3 gap-[68px]"><!--[-->`);
        ssrRenderList(__props.laptopImages.slice(0, unref(sliceAmount)), (image, index) => {
          _push(`<div><img${ssrRenderAttr("src", image.src)}${ssrRenderAttr("alt", image.alt)} class="w-[430px]"></div>`);
        });
        _push(`<!--]--></div></div>`);
      }
      _push(`</div><div class="flex justify-center pt-[58px]">`);
      if (__props.cta) {
        _push(`<button class="caption-lg w-[213px] h[48px] rounded-50 cursor-pointer bg-detail text-detail-text">${ssrInterpolate(unref(buttonLabel))}</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ImageGallery.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "PageHero",
  __ssrInlineRender: true,
  props: {
    title: String,
    teaser: String,
    award: Object,
    cta: Object,
    teaserMaxWidth: {
      type: String,
      default: "max-w-45ch"
      // Standard max-width
    }
  },
  setup(__props) {
    const props = __props;
    const isMobile = ref(false);
    ref(props.cta.url);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "c-page-hero text-secondary" }, _attrs))}><div class="c-page-hero_award flex flex-col items-center mt-[30px]">`);
      if (__props.award.image) {
        _push(`<img${ssrRenderAttr("src", __props.award.image.src)}${ssrRenderAttr("alt", __props.award.image.alt)} class="w-[100px] shadow-none">`);
      } else {
        _push(`<!---->`);
      }
      if (__props.award.name) {
        _push(`<div class="max-w-21ch text-center pt-[23px] caption-sm">${ssrInterpolate(__props.award.name)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="c-page-hero_content flex flex-col items-center">`);
      if (unref(isMobile)) {
        _push(`<div class="flex flex-col items-center pt-[99px]">`);
        if (__props.title) {
          _push(`<div class="header-sm">${ssrInterpolate(__props.title)}</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="flex justify-center">`);
        if (__props.teaser) {
          _push(`<div class="${ssrRenderClass([__props.teaserMaxWidth, "body-sm text-center pt-[36px] pb-[105px]"])}">${ssrInterpolate(__props.teaser)}</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<div class="pt-[206px]">`);
        if (__props.title) {
          _push(`<div class="header-lg">${ssrInterpolate(__props.title)}</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="flex justify-center">`);
        if (__props.teaser) {
          _push(`<div class="${ssrRenderClass([__props.teaserMaxWidth, "body-lg text-center pt-[18px] pb-[62px]"])}">${ssrInterpolate(__props.teaser)}</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      }
      if (__props.cta) {
        _push(`<button class="w-[213px] h-[48px] rounded-50 cursor-pointer caption-lg bg-detail text-detail-text">${ssrInterpolate(__props.cta.name)} <span class="w-[12px] absolute ml-[14px]"><svg viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.166504 12.3337V0.666992H5.74248V1.6964H1.19592V11.3042H10.8038V6.75768H11.8332V12.3337H0.166504ZM4.43856 8.78219L3.71797 8.0616L10.0832 1.6964H7.37239V0.666992H11.8332V5.12778H10.8038V2.41699L4.43856 8.78219Z" fill="currentColor"></path></svg></span></button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PageHero.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "ScrollGallery",
  __ssrInlineRender: true,
  props: {
    mobileImages: Array,
    laptopImages: Array
  },
  setup(__props) {
    const isMobile = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "c-scroll-gallery" }, _attrs))}>`);
      if (unref(isMobile)) {
        _push(`<div><div class="flex flex-col items-center gap-y-[84px]"><!--[-->`);
        ssrRenderList(__props.mobileImages, (image, index) => {
          _push(`<div><img${ssrRenderAttr("src", image.src)}${ssrRenderAttr("alt", image.alt)} class="w-[330px]"></div>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<div class="flex justify-center gap-x-[68px]"><div class="flex flex-col gap-y-[97px] h-full sticky top-0"><!--[-->`);
        ssrRenderList(__props.mobileImages, (image, index) => {
          _push(`<div><img${ssrRenderAttr("src", image.src)}${ssrRenderAttr("alt", image.alt)} class="w-[291px]"></div>`);
        });
        _push(`<!--]--></div><div class="flex flex-col gap-y-[97px] h-full sticky top-0"><!--[-->`);
        ssrRenderList(__props.laptopImages, (image, index) => {
          _push(`<div><img${ssrRenderAttr("src", image.src)}${ssrRenderAttr("alt", image.alt)} class="w-[1019px]"></div>`);
        });
        _push(`<!--]--></div></div>`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ScrollGallery.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main$1 as _, _sfc_main as a, _sfc_main$3 as b, _sfc_main$2 as c };
//# sourceMappingURL=ScrollGallery-CuzMpPIn.mjs.map
