import { REFERENCE_IMAGE_BASE_URL } from "../services/config";
import { fallbackLibrary } from "./data";
import type { Selection } from "./data";

export type ReferenceImage = {
  image: string;
  title: string;
};

type ReferenceImageIds = {
  spaceId?: string;
  cabinetId?: string;
  styleId?: string;
  materialId?: string;
};

type ReferenceImageEntry = {
  imageFile: string;
  spaceId: string;
  cabinetId: string;
  styleId: string;
  materialId: string;
};

// Generated from outputs/reference-image-batch/optimized/jpg/reference-images.json.
// Total reference images: 855.
const REFERENCE_IMAGE_BY_KEY: Record<string, ReferenceImageEntry> = {
  "horizontal-living|floating-tv|modern-minimalist|a-oak-white": {
    "imageFile": "ref_0001__horizontal-living__floating-tv__modern-minimalist__a-oak-white.jpg",
    "spaceId": "horizontal-living",
    "cabinetId": "floating-tv",
    "styleId": "modern-minimalist",
    "materialId": "a-oak-white"
  },
  "horizontal-living|floating-tv|modern-minimalist|b-gloss-white": {
    "imageFile": "ref_0002__horizontal-living__floating-tv__modern-minimalist__b-gloss-white.jpg",
    "spaceId": "horizontal-living",
    "cabinetId": "floating-tv",
    "styleId": "modern-minimalist",
    "materialId": "b-gloss-white"
  },
  "horizontal-living|floating-tv|modern-minimalist|d-dark-grey": {
    "imageFile": "ref_0003__horizontal-living__floating-tv__modern-minimalist__d-dark-grey.jpg",
    "spaceId": "horizontal-living",
    "cabinetId": "floating-tv",
    "styleId": "modern-minimalist",
    "materialId": "d-dark-grey"
  },
  "horizontal-living|floating-tv|modern-minimalist|h-matte-white": {
    "imageFile": "ref_0004__horizontal-living__floating-tv__modern-minimalist__h-matte-white.jpg",
    "spaceId": "horizontal-living",
    "cabinetId": "floating-tv",
    "styleId": "modern-minimalist",
    "materialId": "h-matte-white"
  },
  "horizontal-living|floating-tv|french-cream|c-cream-brass": {
    "imageFile": "ref_0005__horizontal-living__floating-tv__french-cream__c-cream-brass.jpg",
    "spaceId": "horizontal-living",
    "cabinetId": "floating-tv",
    "styleId": "french-cream",
    "materialId": "c-cream-brass"
  },
  "horizontal-living|floating-tv|italian-minimal|d-dark-grey": {
    "imageFile": "ref_0006__horizontal-living__floating-tv__italian-minimal__d-dark-grey.jpg",
    "spaceId": "horizontal-living",
    "cabinetId": "floating-tv",
    "styleId": "italian-minimal",
    "materialId": "d-dark-grey"
  },
  "horizontal-living|floating-tv|italian-minimal|h-matte-white": {
    "imageFile": "ref_0007__horizontal-living__floating-tv__italian-minimal__h-matte-white.jpg",
    "spaceId": "horizontal-living",
    "cabinetId": "floating-tv",
    "styleId": "italian-minimal",
    "materialId": "h-matte-white"
  },
  "horizontal-living|floating-tv|japanese-wood|a-oak-white": {
    "imageFile": "ref_0008__horizontal-living__floating-tv__japanese-wood__a-oak-white.jpg",
    "spaceId": "horizontal-living",
    "cabinetId": "floating-tv",
    "styleId": "japanese-wood",
    "materialId": "a-oak-white"
  },
  "horizontal-living|floating-tv|japanese-wood|f-cement-rattan": {
    "imageFile": "ref_0009__horizontal-living__floating-tv__japanese-wood__f-cement-rattan.jpg",
    "spaceId": "horizontal-living",
    "cabinetId": "floating-tv",
    "styleId": "japanese-wood",
    "materialId": "f-cement-rattan"
  },
  "horizontal-living|floating-tv|modern-chinese|e-walnut-glass": {
    "imageFile": "ref_0010__horizontal-living__floating-tv__modern-chinese__e-walnut-glass.jpg",
    "spaceId": "horizontal-living",
    "cabinetId": "floating-tv",
    "styleId": "modern-chinese",
    "materialId": "e-walnut-glass"
  },
  "horizontal-living|floating-tv|wabi-sabi|a-oak-white": {
    "imageFile": "ref_0011__horizontal-living__floating-tv__wabi-sabi__a-oak-white.jpg",
    "spaceId": "horizontal-living",
    "cabinetId": "floating-tv",
    "styleId": "wabi-sabi",
    "materialId": "a-oak-white"
  },
  "horizontal-living|floating-tv|wabi-sabi|c-cream-brass": {
    "imageFile": "ref_0012__horizontal-living__floating-tv__wabi-sabi__c-cream-brass.jpg",
    "spaceId": "horizontal-living",
    "cabinetId": "floating-tv",
    "styleId": "wabi-sabi",
    "materialId": "c-cream-brass"
  },
  "horizontal-living|floating-tv|wabi-sabi|f-cement-rattan": {
    "imageFile": "ref_0013__horizontal-living__floating-tv__wabi-sabi__f-cement-rattan.jpg",
    "spaceId": "horizontal-living",
    "cabinetId": "floating-tv",
    "styleId": "wabi-sabi",
    "materialId": "f-cement-rattan"
  },
  "horizontal-living|floating-tv|american-vintage|e-walnut-glass": {
    "imageFile": "ref_0014__horizontal-living__floating-tv__american-vintage__e-walnut-glass.jpg",
    "spaceId": "horizontal-living",
    "cabinetId": "floating-tv",
    "styleId": "american-vintage",
    "materialId": "e-walnut-glass"
  },
  "horizontal-living|floating-tv|american-vintage|g-american-white": {
    "imageFile": "ref_0015__horizontal-living__floating-tv__american-vintage__g-american-white.jpg",
    "spaceId": "horizontal-living",
    "cabinetId": "floating-tv",
    "styleId": "american-vintage",
    "materialId": "g-american-white"
  },
  "horizontal-living|floating-tv|modern-luxury|b-gloss-white": {
    "imageFile": "ref_0016__horizontal-living__floating-tv__modern-luxury__b-gloss-white.jpg",
    "spaceId": "horizontal-living",
    "cabinetId": "floating-tv",
    "styleId": "modern-luxury",
    "materialId": "b-gloss-white"
  },
  "horizontal-living|floating-tv|modern-luxury|c-cream-brass": {
    "imageFile": "ref_0017__horizontal-living__floating-tv__modern-luxury__c-cream-brass.jpg",
    "spaceId": "horizontal-living",
    "cabinetId": "floating-tv",
    "styleId": "modern-luxury",
    "materialId": "c-cream-brass"
  },
  "horizontal-living|floating-tv|modern-luxury|d-dark-grey": {
    "imageFile": "ref_0018__horizontal-living__floating-tv__modern-luxury__d-dark-grey.jpg",
    "spaceId": "horizontal-living",
    "cabinetId": "floating-tv",
    "styleId": "modern-luxury",
    "materialId": "d-dark-grey"
  },
  "horizontal-living|floating-tv|modern-luxury|e-walnut-glass": {
    "imageFile": "ref_0019__horizontal-living__floating-tv__modern-luxury__e-walnut-glass.jpg",
    "spaceId": "horizontal-living",
    "cabinetId": "floating-tv",
    "styleId": "modern-luxury",
    "materialId": "e-walnut-glass"
  },
  "horizontal-living|bookshelf|modern-minimalist|a-oak-white": {
    "imageFile": "ref_0020__horizontal-living__bookshelf__modern-minimalist__a-oak-white.jpg",
    "spaceId": "horizontal-living",
    "cabinetId": "bookshelf",
    "styleId": "modern-minimalist",
    "materialId": "a-oak-white"
  },
  "horizontal-living|bookshelf|modern-minimalist|b-gloss-white": {
    "imageFile": "ref_0021__horizontal-living__bookshelf__modern-minimalist__b-gloss-white.jpg",
    "spaceId": "horizontal-living",
    "cabinetId": "bookshelf",
    "styleId": "modern-minimalist",
    "materialId": "b-gloss-white"
  },
  "horizontal-living|bookshelf|modern-minimalist|d-dark-grey": {
    "imageFile": "ref_0022__horizontal-living__bookshelf__modern-minimalist__d-dark-grey.jpg",
    "spaceId": "horizontal-living",
    "cabinetId": "bookshelf",
    "styleId": "modern-minimalist",
    "materialId": "d-dark-grey"
  },
  "horizontal-living|bookshelf|modern-minimalist|h-matte-white": {
    "imageFile": "ref_0023__horizontal-living__bookshelf__modern-minimalist__h-matte-white.jpg",
    "spaceId": "horizontal-living",
    "cabinetId": "bookshelf",
    "styleId": "modern-minimalist",
    "materialId": "h-matte-white"
  },
  "horizontal-living|bookshelf|french-cream|c-cream-brass": {
    "imageFile": "ref_0024__horizontal-living__bookshelf__french-cream__c-cream-brass.jpg",
    "spaceId": "horizontal-living",
    "cabinetId": "bookshelf",
    "styleId": "french-cream",
    "materialId": "c-cream-brass"
  },
  "horizontal-living|bookshelf|italian-minimal|d-dark-grey": {
    "imageFile": "ref_0025__horizontal-living__bookshelf__italian-minimal__d-dark-grey.jpg",
    "spaceId": "horizontal-living",
    "cabinetId": "bookshelf",
    "styleId": "italian-minimal",
    "materialId": "d-dark-grey"
  },
  "horizontal-living|bookshelf|italian-minimal|h-matte-white": {
    "imageFile": "ref_0026__horizontal-living__bookshelf__italian-minimal__h-matte-white.jpg",
    "spaceId": "horizontal-living",
    "cabinetId": "bookshelf",
    "styleId": "italian-minimal",
    "materialId": "h-matte-white"
  },
  "horizontal-living|bookshelf|japanese-wood|a-oak-white": {
    "imageFile": "ref_0027__horizontal-living__bookshelf__japanese-wood__a-oak-white.jpg",
    "spaceId": "horizontal-living",
    "cabinetId": "bookshelf",
    "styleId": "japanese-wood",
    "materialId": "a-oak-white"
  },
  "horizontal-living|bookshelf|japanese-wood|f-cement-rattan": {
    "imageFile": "ref_0028__horizontal-living__bookshelf__japanese-wood__f-cement-rattan.jpg",
    "spaceId": "horizontal-living",
    "cabinetId": "bookshelf",
    "styleId": "japanese-wood",
    "materialId": "f-cement-rattan"
  },
  "horizontal-living|bookshelf|modern-chinese|e-walnut-glass": {
    "imageFile": "ref_0029__horizontal-living__bookshelf__modern-chinese__e-walnut-glass.jpg",
    "spaceId": "horizontal-living",
    "cabinetId": "bookshelf",
    "styleId": "modern-chinese",
    "materialId": "e-walnut-glass"
  },
  "horizontal-living|bookshelf|wabi-sabi|a-oak-white": {
    "imageFile": "ref_0030__horizontal-living__bookshelf__wabi-sabi__a-oak-white.jpg",
    "spaceId": "horizontal-living",
    "cabinetId": "bookshelf",
    "styleId": "wabi-sabi",
    "materialId": "a-oak-white"
  },
  "horizontal-living|bookshelf|wabi-sabi|c-cream-brass": {
    "imageFile": "ref_0031__horizontal-living__bookshelf__wabi-sabi__c-cream-brass.jpg",
    "spaceId": "horizontal-living",
    "cabinetId": "bookshelf",
    "styleId": "wabi-sabi",
    "materialId": "c-cream-brass"
  },
  "horizontal-living|bookshelf|wabi-sabi|f-cement-rattan": {
    "imageFile": "ref_0032__horizontal-living__bookshelf__wabi-sabi__f-cement-rattan.jpg",
    "spaceId": "horizontal-living",
    "cabinetId": "bookshelf",
    "styleId": "wabi-sabi",
    "materialId": "f-cement-rattan"
  },
  "horizontal-living|bookshelf|american-vintage|e-walnut-glass": {
    "imageFile": "ref_0033__horizontal-living__bookshelf__american-vintage__e-walnut-glass.jpg",
    "spaceId": "horizontal-living",
    "cabinetId": "bookshelf",
    "styleId": "american-vintage",
    "materialId": "e-walnut-glass"
  },
  "horizontal-living|bookshelf|american-vintage|g-american-white": {
    "imageFile": "ref_0034__horizontal-living__bookshelf__american-vintage__g-american-white.jpg",
    "spaceId": "horizontal-living",
    "cabinetId": "bookshelf",
    "styleId": "american-vintage",
    "materialId": "g-american-white"
  },
  "horizontal-living|bookshelf|modern-luxury|b-gloss-white": {
    "imageFile": "ref_0035__horizontal-living__bookshelf__modern-luxury__b-gloss-white.jpg",
    "spaceId": "horizontal-living",
    "cabinetId": "bookshelf",
    "styleId": "modern-luxury",
    "materialId": "b-gloss-white"
  },
  "horizontal-living|bookshelf|modern-luxury|c-cream-brass": {
    "imageFile": "ref_0036__horizontal-living__bookshelf__modern-luxury__c-cream-brass.jpg",
    "spaceId": "horizontal-living",
    "cabinetId": "bookshelf",
    "styleId": "modern-luxury",
    "materialId": "c-cream-brass"
  },
  "horizontal-living|bookshelf|modern-luxury|d-dark-grey": {
    "imageFile": "ref_0037__horizontal-living__bookshelf__modern-luxury__d-dark-grey.jpg",
    "spaceId": "horizontal-living",
    "cabinetId": "bookshelf",
    "styleId": "modern-luxury",
    "materialId": "d-dark-grey"
  },
  "horizontal-living|bookshelf|modern-luxury|e-walnut-glass": {
    "imageFile": "ref_0038__horizontal-living__bookshelf__modern-luxury__e-walnut-glass.jpg",
    "spaceId": "horizontal-living",
    "cabinetId": "bookshelf",
    "styleId": "modern-luxury",
    "materialId": "e-walnut-glass"
  },
  "horizontal-living|sideboard|modern-minimalist|a-oak-white": {
    "imageFile": "ref_0039__horizontal-living__sideboard__modern-minimalist__a-oak-white.jpg",
    "spaceId": "horizontal-living",
    "cabinetId": "sideboard",
    "styleId": "modern-minimalist",
    "materialId": "a-oak-white"
  },
  "horizontal-living|sideboard|modern-minimalist|b-gloss-white": {
    "imageFile": "ref_0040__horizontal-living__sideboard__modern-minimalist__b-gloss-white.jpg",
    "spaceId": "horizontal-living",
    "cabinetId": "sideboard",
    "styleId": "modern-minimalist",
    "materialId": "b-gloss-white"
  },
  "horizontal-living|sideboard|modern-minimalist|d-dark-grey": {
    "imageFile": "ref_0041__horizontal-living__sideboard__modern-minimalist__d-dark-grey.jpg",
    "spaceId": "horizontal-living",
    "cabinetId": "sideboard",
    "styleId": "modern-minimalist",
    "materialId": "d-dark-grey"
  },
  "horizontal-living|sideboard|modern-minimalist|h-matte-white": {
    "imageFile": "ref_0042__horizontal-living__sideboard__modern-minimalist__h-matte-white.jpg",
    "spaceId": "horizontal-living",
    "cabinetId": "sideboard",
    "styleId": "modern-minimalist",
    "materialId": "h-matte-white"
  },
  "horizontal-living|sideboard|french-cream|c-cream-brass": {
    "imageFile": "ref_0043__horizontal-living__sideboard__french-cream__c-cream-brass.jpg",
    "spaceId": "horizontal-living",
    "cabinetId": "sideboard",
    "styleId": "french-cream",
    "materialId": "c-cream-brass"
  },
  "horizontal-living|sideboard|italian-minimal|d-dark-grey": {
    "imageFile": "ref_0044__horizontal-living__sideboard__italian-minimal__d-dark-grey.jpg",
    "spaceId": "horizontal-living",
    "cabinetId": "sideboard",
    "styleId": "italian-minimal",
    "materialId": "d-dark-grey"
  },
  "horizontal-living|sideboard|italian-minimal|h-matte-white": {
    "imageFile": "ref_0045__horizontal-living__sideboard__italian-minimal__h-matte-white.jpg",
    "spaceId": "horizontal-living",
    "cabinetId": "sideboard",
    "styleId": "italian-minimal",
    "materialId": "h-matte-white"
  },
  "horizontal-living|sideboard|japanese-wood|a-oak-white": {
    "imageFile": "ref_0046__horizontal-living__sideboard__japanese-wood__a-oak-white.jpg",
    "spaceId": "horizontal-living",
    "cabinetId": "sideboard",
    "styleId": "japanese-wood",
    "materialId": "a-oak-white"
  },
  "horizontal-living|sideboard|japanese-wood|f-cement-rattan": {
    "imageFile": "ref_0047__horizontal-living__sideboard__japanese-wood__f-cement-rattan.jpg",
    "spaceId": "horizontal-living",
    "cabinetId": "sideboard",
    "styleId": "japanese-wood",
    "materialId": "f-cement-rattan"
  },
  "horizontal-living|sideboard|modern-chinese|e-walnut-glass": {
    "imageFile": "ref_0048__horizontal-living__sideboard__modern-chinese__e-walnut-glass.jpg",
    "spaceId": "horizontal-living",
    "cabinetId": "sideboard",
    "styleId": "modern-chinese",
    "materialId": "e-walnut-glass"
  },
  "horizontal-living|sideboard|wabi-sabi|a-oak-white": {
    "imageFile": "ref_0049__horizontal-living__sideboard__wabi-sabi__a-oak-white.jpg",
    "spaceId": "horizontal-living",
    "cabinetId": "sideboard",
    "styleId": "wabi-sabi",
    "materialId": "a-oak-white"
  },
  "horizontal-living|sideboard|wabi-sabi|c-cream-brass": {
    "imageFile": "ref_0050__horizontal-living__sideboard__wabi-sabi__c-cream-brass.jpg",
    "spaceId": "horizontal-living",
    "cabinetId": "sideboard",
    "styleId": "wabi-sabi",
    "materialId": "c-cream-brass"
  },
  "horizontal-living|sideboard|wabi-sabi|f-cement-rattan": {
    "imageFile": "ref_0051__horizontal-living__sideboard__wabi-sabi__f-cement-rattan.jpg",
    "spaceId": "horizontal-living",
    "cabinetId": "sideboard",
    "styleId": "wabi-sabi",
    "materialId": "f-cement-rattan"
  },
  "horizontal-living|sideboard|american-vintage|e-walnut-glass": {
    "imageFile": "ref_0052__horizontal-living__sideboard__american-vintage__e-walnut-glass.jpg",
    "spaceId": "horizontal-living",
    "cabinetId": "sideboard",
    "styleId": "american-vintage",
    "materialId": "e-walnut-glass"
  },
  "horizontal-living|sideboard|american-vintage|g-american-white": {
    "imageFile": "ref_0053__horizontal-living__sideboard__american-vintage__g-american-white.jpg",
    "spaceId": "horizontal-living",
    "cabinetId": "sideboard",
    "styleId": "american-vintage",
    "materialId": "g-american-white"
  },
  "horizontal-living|sideboard|modern-luxury|b-gloss-white": {
    "imageFile": "ref_0054__horizontal-living__sideboard__modern-luxury__b-gloss-white.jpg",
    "spaceId": "horizontal-living",
    "cabinetId": "sideboard",
    "styleId": "modern-luxury",
    "materialId": "b-gloss-white"
  },
  "horizontal-living|sideboard|modern-luxury|c-cream-brass": {
    "imageFile": "ref_0055__horizontal-living__sideboard__modern-luxury__c-cream-brass.jpg",
    "spaceId": "horizontal-living",
    "cabinetId": "sideboard",
    "styleId": "modern-luxury",
    "materialId": "c-cream-brass"
  },
  "horizontal-living|sideboard|modern-luxury|d-dark-grey": {
    "imageFile": "ref_0056__horizontal-living__sideboard__modern-luxury__d-dark-grey.jpg",
    "spaceId": "horizontal-living",
    "cabinetId": "sideboard",
    "styleId": "modern-luxury",
    "materialId": "d-dark-grey"
  },
  "horizontal-living|sideboard|modern-luxury|e-walnut-glass": {
    "imageFile": "ref_0057__horizontal-living__sideboard__modern-luxury__e-walnut-glass.jpg",
    "spaceId": "horizontal-living",
    "cabinetId": "sideboard",
    "styleId": "modern-luxury",
    "materialId": "e-walnut-glass"
  },
  "horizontal-living|display-cabinet|modern-minimalist|a-oak-white": {
    "imageFile": "ref_0058__horizontal-living__display-cabinet__modern-minimalist__a-oak-white.jpg",
    "spaceId": "horizontal-living",
    "cabinetId": "display-cabinet",
    "styleId": "modern-minimalist",
    "materialId": "a-oak-white"
  },
  "horizontal-living|display-cabinet|modern-minimalist|b-gloss-white": {
    "imageFile": "ref_0059__horizontal-living__display-cabinet__modern-minimalist__b-gloss-white.jpg",
    "spaceId": "horizontal-living",
    "cabinetId": "display-cabinet",
    "styleId": "modern-minimalist",
    "materialId": "b-gloss-white"
  },
  "horizontal-living|display-cabinet|modern-minimalist|d-dark-grey": {
    "imageFile": "ref_0060__horizontal-living__display-cabinet__modern-minimalist__d-dark-grey.jpg",
    "spaceId": "horizontal-living",
    "cabinetId": "display-cabinet",
    "styleId": "modern-minimalist",
    "materialId": "d-dark-grey"
  },
  "horizontal-living|display-cabinet|modern-minimalist|h-matte-white": {
    "imageFile": "ref_0061__horizontal-living__display-cabinet__modern-minimalist__h-matte-white.jpg",
    "spaceId": "horizontal-living",
    "cabinetId": "display-cabinet",
    "styleId": "modern-minimalist",
    "materialId": "h-matte-white"
  },
  "horizontal-living|display-cabinet|french-cream|c-cream-brass": {
    "imageFile": "ref_0062__horizontal-living__display-cabinet__french-cream__c-cream-brass.jpg",
    "spaceId": "horizontal-living",
    "cabinetId": "display-cabinet",
    "styleId": "french-cream",
    "materialId": "c-cream-brass"
  },
  "horizontal-living|display-cabinet|italian-minimal|d-dark-grey": {
    "imageFile": "ref_0063__horizontal-living__display-cabinet__italian-minimal__d-dark-grey.jpg",
    "spaceId": "horizontal-living",
    "cabinetId": "display-cabinet",
    "styleId": "italian-minimal",
    "materialId": "d-dark-grey"
  },
  "horizontal-living|display-cabinet|italian-minimal|h-matte-white": {
    "imageFile": "ref_0064__horizontal-living__display-cabinet__italian-minimal__h-matte-white.jpg",
    "spaceId": "horizontal-living",
    "cabinetId": "display-cabinet",
    "styleId": "italian-minimal",
    "materialId": "h-matte-white"
  },
  "horizontal-living|display-cabinet|japanese-wood|a-oak-white": {
    "imageFile": "ref_0065__horizontal-living__display-cabinet__japanese-wood__a-oak-white.jpg",
    "spaceId": "horizontal-living",
    "cabinetId": "display-cabinet",
    "styleId": "japanese-wood",
    "materialId": "a-oak-white"
  },
  "horizontal-living|display-cabinet|japanese-wood|f-cement-rattan": {
    "imageFile": "ref_0066__horizontal-living__display-cabinet__japanese-wood__f-cement-rattan.jpg",
    "spaceId": "horizontal-living",
    "cabinetId": "display-cabinet",
    "styleId": "japanese-wood",
    "materialId": "f-cement-rattan"
  },
  "horizontal-living|display-cabinet|modern-chinese|e-walnut-glass": {
    "imageFile": "ref_0067__horizontal-living__display-cabinet__modern-chinese__e-walnut-glass.jpg",
    "spaceId": "horizontal-living",
    "cabinetId": "display-cabinet",
    "styleId": "modern-chinese",
    "materialId": "e-walnut-glass"
  },
  "horizontal-living|display-cabinet|wabi-sabi|a-oak-white": {
    "imageFile": "ref_0068__horizontal-living__display-cabinet__wabi-sabi__a-oak-white.jpg",
    "spaceId": "horizontal-living",
    "cabinetId": "display-cabinet",
    "styleId": "wabi-sabi",
    "materialId": "a-oak-white"
  },
  "horizontal-living|display-cabinet|wabi-sabi|c-cream-brass": {
    "imageFile": "ref_0069__horizontal-living__display-cabinet__wabi-sabi__c-cream-brass.jpg",
    "spaceId": "horizontal-living",
    "cabinetId": "display-cabinet",
    "styleId": "wabi-sabi",
    "materialId": "c-cream-brass"
  },
  "horizontal-living|display-cabinet|wabi-sabi|f-cement-rattan": {
    "imageFile": "ref_0070__horizontal-living__display-cabinet__wabi-sabi__f-cement-rattan.jpg",
    "spaceId": "horizontal-living",
    "cabinetId": "display-cabinet",
    "styleId": "wabi-sabi",
    "materialId": "f-cement-rattan"
  },
  "horizontal-living|display-cabinet|american-vintage|e-walnut-glass": {
    "imageFile": "ref_0071__horizontal-living__display-cabinet__american-vintage__e-walnut-glass.jpg",
    "spaceId": "horizontal-living",
    "cabinetId": "display-cabinet",
    "styleId": "american-vintage",
    "materialId": "e-walnut-glass"
  },
  "horizontal-living|display-cabinet|american-vintage|g-american-white": {
    "imageFile": "ref_0072__horizontal-living__display-cabinet__american-vintage__g-american-white.jpg",
    "spaceId": "horizontal-living",
    "cabinetId": "display-cabinet",
    "styleId": "american-vintage",
    "materialId": "g-american-white"
  },
  "horizontal-living|display-cabinet|modern-luxury|b-gloss-white": {
    "imageFile": "ref_0073__horizontal-living__display-cabinet__modern-luxury__b-gloss-white.jpg",
    "spaceId": "horizontal-living",
    "cabinetId": "display-cabinet",
    "styleId": "modern-luxury",
    "materialId": "b-gloss-white"
  },
  "horizontal-living|display-cabinet|modern-luxury|c-cream-brass": {
    "imageFile": "ref_0074__horizontal-living__display-cabinet__modern-luxury__c-cream-brass.jpg",
    "spaceId": "horizontal-living",
    "cabinetId": "display-cabinet",
    "styleId": "modern-luxury",
    "materialId": "c-cream-brass"
  },
  "horizontal-living|display-cabinet|modern-luxury|d-dark-grey": {
    "imageFile": "ref_0075__horizontal-living__display-cabinet__modern-luxury__d-dark-grey.jpg",
    "spaceId": "horizontal-living",
    "cabinetId": "display-cabinet",
    "styleId": "modern-luxury",
    "materialId": "d-dark-grey"
  },
  "horizontal-living|display-cabinet|modern-luxury|e-walnut-glass": {
    "imageFile": "ref_0076__horizontal-living__display-cabinet__modern-luxury__e-walnut-glass.jpg",
    "spaceId": "horizontal-living",
    "cabinetId": "display-cabinet",
    "styleId": "modern-luxury",
    "materialId": "e-walnut-glass"
  },
  "vertical-living|floating-tv|modern-minimalist|a-oak-white": {
    "imageFile": "ref_0077__vertical-living__floating-tv__modern-minimalist__a-oak-white.jpg",
    "spaceId": "vertical-living",
    "cabinetId": "floating-tv",
    "styleId": "modern-minimalist",
    "materialId": "a-oak-white"
  },
  "vertical-living|floating-tv|modern-minimalist|b-gloss-white": {
    "imageFile": "ref_0078__vertical-living__floating-tv__modern-minimalist__b-gloss-white.jpg",
    "spaceId": "vertical-living",
    "cabinetId": "floating-tv",
    "styleId": "modern-minimalist",
    "materialId": "b-gloss-white"
  },
  "vertical-living|floating-tv|modern-minimalist|d-dark-grey": {
    "imageFile": "ref_0079__vertical-living__floating-tv__modern-minimalist__d-dark-grey.jpg",
    "spaceId": "vertical-living",
    "cabinetId": "floating-tv",
    "styleId": "modern-minimalist",
    "materialId": "d-dark-grey"
  },
  "vertical-living|floating-tv|modern-minimalist|h-matte-white": {
    "imageFile": "ref_0080__vertical-living__floating-tv__modern-minimalist__h-matte-white.jpg",
    "spaceId": "vertical-living",
    "cabinetId": "floating-tv",
    "styleId": "modern-minimalist",
    "materialId": "h-matte-white"
  },
  "vertical-living|floating-tv|french-cream|c-cream-brass": {
    "imageFile": "ref_0081__vertical-living__floating-tv__french-cream__c-cream-brass.jpg",
    "spaceId": "vertical-living",
    "cabinetId": "floating-tv",
    "styleId": "french-cream",
    "materialId": "c-cream-brass"
  },
  "vertical-living|floating-tv|italian-minimal|d-dark-grey": {
    "imageFile": "ref_0082__vertical-living__floating-tv__italian-minimal__d-dark-grey.jpg",
    "spaceId": "vertical-living",
    "cabinetId": "floating-tv",
    "styleId": "italian-minimal",
    "materialId": "d-dark-grey"
  },
  "vertical-living|floating-tv|italian-minimal|h-matte-white": {
    "imageFile": "ref_0083__vertical-living__floating-tv__italian-minimal__h-matte-white.jpg",
    "spaceId": "vertical-living",
    "cabinetId": "floating-tv",
    "styleId": "italian-minimal",
    "materialId": "h-matte-white"
  },
  "vertical-living|floating-tv|japanese-wood|a-oak-white": {
    "imageFile": "ref_0084__vertical-living__floating-tv__japanese-wood__a-oak-white.jpg",
    "spaceId": "vertical-living",
    "cabinetId": "floating-tv",
    "styleId": "japanese-wood",
    "materialId": "a-oak-white"
  },
  "vertical-living|floating-tv|japanese-wood|f-cement-rattan": {
    "imageFile": "ref_0085__vertical-living__floating-tv__japanese-wood__f-cement-rattan.jpg",
    "spaceId": "vertical-living",
    "cabinetId": "floating-tv",
    "styleId": "japanese-wood",
    "materialId": "f-cement-rattan"
  },
  "vertical-living|floating-tv|modern-chinese|e-walnut-glass": {
    "imageFile": "ref_0086__vertical-living__floating-tv__modern-chinese__e-walnut-glass.jpg",
    "spaceId": "vertical-living",
    "cabinetId": "floating-tv",
    "styleId": "modern-chinese",
    "materialId": "e-walnut-glass"
  },
  "vertical-living|floating-tv|wabi-sabi|a-oak-white": {
    "imageFile": "ref_0087__vertical-living__floating-tv__wabi-sabi__a-oak-white.jpg",
    "spaceId": "vertical-living",
    "cabinetId": "floating-tv",
    "styleId": "wabi-sabi",
    "materialId": "a-oak-white"
  },
  "vertical-living|floating-tv|wabi-sabi|c-cream-brass": {
    "imageFile": "ref_0088__vertical-living__floating-tv__wabi-sabi__c-cream-brass.jpg",
    "spaceId": "vertical-living",
    "cabinetId": "floating-tv",
    "styleId": "wabi-sabi",
    "materialId": "c-cream-brass"
  },
  "vertical-living|floating-tv|wabi-sabi|f-cement-rattan": {
    "imageFile": "ref_0089__vertical-living__floating-tv__wabi-sabi__f-cement-rattan.jpg",
    "spaceId": "vertical-living",
    "cabinetId": "floating-tv",
    "styleId": "wabi-sabi",
    "materialId": "f-cement-rattan"
  },
  "vertical-living|floating-tv|american-vintage|e-walnut-glass": {
    "imageFile": "ref_0090__vertical-living__floating-tv__american-vintage__e-walnut-glass.jpg",
    "spaceId": "vertical-living",
    "cabinetId": "floating-tv",
    "styleId": "american-vintage",
    "materialId": "e-walnut-glass"
  },
  "vertical-living|floating-tv|american-vintage|g-american-white": {
    "imageFile": "ref_0091__vertical-living__floating-tv__american-vintage__g-american-white.jpg",
    "spaceId": "vertical-living",
    "cabinetId": "floating-tv",
    "styleId": "american-vintage",
    "materialId": "g-american-white"
  },
  "vertical-living|floating-tv|modern-luxury|b-gloss-white": {
    "imageFile": "ref_0092__vertical-living__floating-tv__modern-luxury__b-gloss-white.jpg",
    "spaceId": "vertical-living",
    "cabinetId": "floating-tv",
    "styleId": "modern-luxury",
    "materialId": "b-gloss-white"
  },
  "vertical-living|floating-tv|modern-luxury|c-cream-brass": {
    "imageFile": "ref_0093__vertical-living__floating-tv__modern-luxury__c-cream-brass.jpg",
    "spaceId": "vertical-living",
    "cabinetId": "floating-tv",
    "styleId": "modern-luxury",
    "materialId": "c-cream-brass"
  },
  "vertical-living|floating-tv|modern-luxury|d-dark-grey": {
    "imageFile": "ref_0094__vertical-living__floating-tv__modern-luxury__d-dark-grey.jpg",
    "spaceId": "vertical-living",
    "cabinetId": "floating-tv",
    "styleId": "modern-luxury",
    "materialId": "d-dark-grey"
  },
  "vertical-living|floating-tv|modern-luxury|e-walnut-glass": {
    "imageFile": "ref_0095__vertical-living__floating-tv__modern-luxury__e-walnut-glass.jpg",
    "spaceId": "vertical-living",
    "cabinetId": "floating-tv",
    "styleId": "modern-luxury",
    "materialId": "e-walnut-glass"
  },
  "vertical-living|bookshelf|modern-minimalist|a-oak-white": {
    "imageFile": "ref_0096__vertical-living__bookshelf__modern-minimalist__a-oak-white.jpg",
    "spaceId": "vertical-living",
    "cabinetId": "bookshelf",
    "styleId": "modern-minimalist",
    "materialId": "a-oak-white"
  },
  "vertical-living|bookshelf|modern-minimalist|b-gloss-white": {
    "imageFile": "ref_0097__vertical-living__bookshelf__modern-minimalist__b-gloss-white.jpg",
    "spaceId": "vertical-living",
    "cabinetId": "bookshelf",
    "styleId": "modern-minimalist",
    "materialId": "b-gloss-white"
  },
  "vertical-living|bookshelf|modern-minimalist|d-dark-grey": {
    "imageFile": "ref_0098__vertical-living__bookshelf__modern-minimalist__d-dark-grey.jpg",
    "spaceId": "vertical-living",
    "cabinetId": "bookshelf",
    "styleId": "modern-minimalist",
    "materialId": "d-dark-grey"
  },
  "vertical-living|bookshelf|modern-minimalist|h-matte-white": {
    "imageFile": "ref_0099__vertical-living__bookshelf__modern-minimalist__h-matte-white.jpg",
    "spaceId": "vertical-living",
    "cabinetId": "bookshelf",
    "styleId": "modern-minimalist",
    "materialId": "h-matte-white"
  },
  "vertical-living|bookshelf|french-cream|c-cream-brass": {
    "imageFile": "ref_0100__vertical-living__bookshelf__french-cream__c-cream-brass.jpg",
    "spaceId": "vertical-living",
    "cabinetId": "bookshelf",
    "styleId": "french-cream",
    "materialId": "c-cream-brass"
  },
  "vertical-living|bookshelf|italian-minimal|d-dark-grey": {
    "imageFile": "ref_0101__vertical-living__bookshelf__italian-minimal__d-dark-grey.jpg",
    "spaceId": "vertical-living",
    "cabinetId": "bookshelf",
    "styleId": "italian-minimal",
    "materialId": "d-dark-grey"
  },
  "vertical-living|bookshelf|italian-minimal|h-matte-white": {
    "imageFile": "ref_0102__vertical-living__bookshelf__italian-minimal__h-matte-white.jpg",
    "spaceId": "vertical-living",
    "cabinetId": "bookshelf",
    "styleId": "italian-minimal",
    "materialId": "h-matte-white"
  },
  "vertical-living|bookshelf|japanese-wood|a-oak-white": {
    "imageFile": "ref_0103__vertical-living__bookshelf__japanese-wood__a-oak-white.jpg",
    "spaceId": "vertical-living",
    "cabinetId": "bookshelf",
    "styleId": "japanese-wood",
    "materialId": "a-oak-white"
  },
  "vertical-living|bookshelf|japanese-wood|f-cement-rattan": {
    "imageFile": "ref_0104__vertical-living__bookshelf__japanese-wood__f-cement-rattan.jpg",
    "spaceId": "vertical-living",
    "cabinetId": "bookshelf",
    "styleId": "japanese-wood",
    "materialId": "f-cement-rattan"
  },
  "vertical-living|bookshelf|modern-chinese|e-walnut-glass": {
    "imageFile": "ref_0105__vertical-living__bookshelf__modern-chinese__e-walnut-glass.jpg",
    "spaceId": "vertical-living",
    "cabinetId": "bookshelf",
    "styleId": "modern-chinese",
    "materialId": "e-walnut-glass"
  },
  "vertical-living|bookshelf|wabi-sabi|a-oak-white": {
    "imageFile": "ref_0106__vertical-living__bookshelf__wabi-sabi__a-oak-white.jpg",
    "spaceId": "vertical-living",
    "cabinetId": "bookshelf",
    "styleId": "wabi-sabi",
    "materialId": "a-oak-white"
  },
  "vertical-living|bookshelf|wabi-sabi|c-cream-brass": {
    "imageFile": "ref_0107__vertical-living__bookshelf__wabi-sabi__c-cream-brass.jpg",
    "spaceId": "vertical-living",
    "cabinetId": "bookshelf",
    "styleId": "wabi-sabi",
    "materialId": "c-cream-brass"
  },
  "vertical-living|bookshelf|wabi-sabi|f-cement-rattan": {
    "imageFile": "ref_0108__vertical-living__bookshelf__wabi-sabi__f-cement-rattan.jpg",
    "spaceId": "vertical-living",
    "cabinetId": "bookshelf",
    "styleId": "wabi-sabi",
    "materialId": "f-cement-rattan"
  },
  "vertical-living|bookshelf|american-vintage|e-walnut-glass": {
    "imageFile": "ref_0109__vertical-living__bookshelf__american-vintage__e-walnut-glass.jpg",
    "spaceId": "vertical-living",
    "cabinetId": "bookshelf",
    "styleId": "american-vintage",
    "materialId": "e-walnut-glass"
  },
  "vertical-living|bookshelf|american-vintage|g-american-white": {
    "imageFile": "ref_0110__vertical-living__bookshelf__american-vintage__g-american-white.jpg",
    "spaceId": "vertical-living",
    "cabinetId": "bookshelf",
    "styleId": "american-vintage",
    "materialId": "g-american-white"
  },
  "vertical-living|bookshelf|modern-luxury|b-gloss-white": {
    "imageFile": "ref_0111__vertical-living__bookshelf__modern-luxury__b-gloss-white.jpg",
    "spaceId": "vertical-living",
    "cabinetId": "bookshelf",
    "styleId": "modern-luxury",
    "materialId": "b-gloss-white"
  },
  "vertical-living|bookshelf|modern-luxury|c-cream-brass": {
    "imageFile": "ref_0112__vertical-living__bookshelf__modern-luxury__c-cream-brass.jpg",
    "spaceId": "vertical-living",
    "cabinetId": "bookshelf",
    "styleId": "modern-luxury",
    "materialId": "c-cream-brass"
  },
  "vertical-living|bookshelf|modern-luxury|d-dark-grey": {
    "imageFile": "ref_0113__vertical-living__bookshelf__modern-luxury__d-dark-grey.jpg",
    "spaceId": "vertical-living",
    "cabinetId": "bookshelf",
    "styleId": "modern-luxury",
    "materialId": "d-dark-grey"
  },
  "vertical-living|bookshelf|modern-luxury|e-walnut-glass": {
    "imageFile": "ref_0114__vertical-living__bookshelf__modern-luxury__e-walnut-glass.jpg",
    "spaceId": "vertical-living",
    "cabinetId": "bookshelf",
    "styleId": "modern-luxury",
    "materialId": "e-walnut-glass"
  },
  "vertical-living|sideboard|modern-minimalist|a-oak-white": {
    "imageFile": "ref_0115__vertical-living__sideboard__modern-minimalist__a-oak-white.jpg",
    "spaceId": "vertical-living",
    "cabinetId": "sideboard",
    "styleId": "modern-minimalist",
    "materialId": "a-oak-white"
  },
  "vertical-living|sideboard|modern-minimalist|b-gloss-white": {
    "imageFile": "ref_0116__vertical-living__sideboard__modern-minimalist__b-gloss-white.jpg",
    "spaceId": "vertical-living",
    "cabinetId": "sideboard",
    "styleId": "modern-minimalist",
    "materialId": "b-gloss-white"
  },
  "vertical-living|sideboard|modern-minimalist|d-dark-grey": {
    "imageFile": "ref_0117__vertical-living__sideboard__modern-minimalist__d-dark-grey.jpg",
    "spaceId": "vertical-living",
    "cabinetId": "sideboard",
    "styleId": "modern-minimalist",
    "materialId": "d-dark-grey"
  },
  "vertical-living|sideboard|modern-minimalist|h-matte-white": {
    "imageFile": "ref_0118__vertical-living__sideboard__modern-minimalist__h-matte-white.jpg",
    "spaceId": "vertical-living",
    "cabinetId": "sideboard",
    "styleId": "modern-minimalist",
    "materialId": "h-matte-white"
  },
  "vertical-living|sideboard|french-cream|c-cream-brass": {
    "imageFile": "ref_0119__vertical-living__sideboard__french-cream__c-cream-brass.jpg",
    "spaceId": "vertical-living",
    "cabinetId": "sideboard",
    "styleId": "french-cream",
    "materialId": "c-cream-brass"
  },
  "vertical-living|sideboard|italian-minimal|d-dark-grey": {
    "imageFile": "ref_0120__vertical-living__sideboard__italian-minimal__d-dark-grey.jpg",
    "spaceId": "vertical-living",
    "cabinetId": "sideboard",
    "styleId": "italian-minimal",
    "materialId": "d-dark-grey"
  },
  "vertical-living|sideboard|italian-minimal|h-matte-white": {
    "imageFile": "ref_0121__vertical-living__sideboard__italian-minimal__h-matte-white.jpg",
    "spaceId": "vertical-living",
    "cabinetId": "sideboard",
    "styleId": "italian-minimal",
    "materialId": "h-matte-white"
  },
  "vertical-living|sideboard|japanese-wood|a-oak-white": {
    "imageFile": "ref_0122__vertical-living__sideboard__japanese-wood__a-oak-white.jpg",
    "spaceId": "vertical-living",
    "cabinetId": "sideboard",
    "styleId": "japanese-wood",
    "materialId": "a-oak-white"
  },
  "vertical-living|sideboard|japanese-wood|f-cement-rattan": {
    "imageFile": "ref_0123__vertical-living__sideboard__japanese-wood__f-cement-rattan.jpg",
    "spaceId": "vertical-living",
    "cabinetId": "sideboard",
    "styleId": "japanese-wood",
    "materialId": "f-cement-rattan"
  },
  "vertical-living|sideboard|modern-chinese|e-walnut-glass": {
    "imageFile": "ref_0124__vertical-living__sideboard__modern-chinese__e-walnut-glass.jpg",
    "spaceId": "vertical-living",
    "cabinetId": "sideboard",
    "styleId": "modern-chinese",
    "materialId": "e-walnut-glass"
  },
  "vertical-living|sideboard|wabi-sabi|a-oak-white": {
    "imageFile": "ref_0125__vertical-living__sideboard__wabi-sabi__a-oak-white.jpg",
    "spaceId": "vertical-living",
    "cabinetId": "sideboard",
    "styleId": "wabi-sabi",
    "materialId": "a-oak-white"
  },
  "vertical-living|sideboard|wabi-sabi|c-cream-brass": {
    "imageFile": "ref_0126__vertical-living__sideboard__wabi-sabi__c-cream-brass.jpg",
    "spaceId": "vertical-living",
    "cabinetId": "sideboard",
    "styleId": "wabi-sabi",
    "materialId": "c-cream-brass"
  },
  "vertical-living|sideboard|wabi-sabi|f-cement-rattan": {
    "imageFile": "ref_0127__vertical-living__sideboard__wabi-sabi__f-cement-rattan.jpg",
    "spaceId": "vertical-living",
    "cabinetId": "sideboard",
    "styleId": "wabi-sabi",
    "materialId": "f-cement-rattan"
  },
  "vertical-living|sideboard|american-vintage|e-walnut-glass": {
    "imageFile": "ref_0128__vertical-living__sideboard__american-vintage__e-walnut-glass.jpg",
    "spaceId": "vertical-living",
    "cabinetId": "sideboard",
    "styleId": "american-vintage",
    "materialId": "e-walnut-glass"
  },
  "vertical-living|sideboard|american-vintage|g-american-white": {
    "imageFile": "ref_0129__vertical-living__sideboard__american-vintage__g-american-white.jpg",
    "spaceId": "vertical-living",
    "cabinetId": "sideboard",
    "styleId": "american-vintage",
    "materialId": "g-american-white"
  },
  "vertical-living|sideboard|modern-luxury|b-gloss-white": {
    "imageFile": "ref_0130__vertical-living__sideboard__modern-luxury__b-gloss-white.jpg",
    "spaceId": "vertical-living",
    "cabinetId": "sideboard",
    "styleId": "modern-luxury",
    "materialId": "b-gloss-white"
  },
  "vertical-living|sideboard|modern-luxury|c-cream-brass": {
    "imageFile": "ref_0131__vertical-living__sideboard__modern-luxury__c-cream-brass.jpg",
    "spaceId": "vertical-living",
    "cabinetId": "sideboard",
    "styleId": "modern-luxury",
    "materialId": "c-cream-brass"
  },
  "vertical-living|sideboard|modern-luxury|d-dark-grey": {
    "imageFile": "ref_0132__vertical-living__sideboard__modern-luxury__d-dark-grey.jpg",
    "spaceId": "vertical-living",
    "cabinetId": "sideboard",
    "styleId": "modern-luxury",
    "materialId": "d-dark-grey"
  },
  "vertical-living|sideboard|modern-luxury|e-walnut-glass": {
    "imageFile": "ref_0133__vertical-living__sideboard__modern-luxury__e-walnut-glass.jpg",
    "spaceId": "vertical-living",
    "cabinetId": "sideboard",
    "styleId": "modern-luxury",
    "materialId": "e-walnut-glass"
  },
  "vertical-living|display-cabinet|modern-minimalist|a-oak-white": {
    "imageFile": "ref_0134__vertical-living__display-cabinet__modern-minimalist__a-oak-white.jpg",
    "spaceId": "vertical-living",
    "cabinetId": "display-cabinet",
    "styleId": "modern-minimalist",
    "materialId": "a-oak-white"
  },
  "vertical-living|display-cabinet|modern-minimalist|b-gloss-white": {
    "imageFile": "ref_0135__vertical-living__display-cabinet__modern-minimalist__b-gloss-white.jpg",
    "spaceId": "vertical-living",
    "cabinetId": "display-cabinet",
    "styleId": "modern-minimalist",
    "materialId": "b-gloss-white"
  },
  "vertical-living|display-cabinet|modern-minimalist|d-dark-grey": {
    "imageFile": "ref_0136__vertical-living__display-cabinet__modern-minimalist__d-dark-grey.jpg",
    "spaceId": "vertical-living",
    "cabinetId": "display-cabinet",
    "styleId": "modern-minimalist",
    "materialId": "d-dark-grey"
  },
  "vertical-living|display-cabinet|modern-minimalist|h-matte-white": {
    "imageFile": "ref_0137__vertical-living__display-cabinet__modern-minimalist__h-matte-white.jpg",
    "spaceId": "vertical-living",
    "cabinetId": "display-cabinet",
    "styleId": "modern-minimalist",
    "materialId": "h-matte-white"
  },
  "vertical-living|display-cabinet|french-cream|c-cream-brass": {
    "imageFile": "ref_0138__vertical-living__display-cabinet__french-cream__c-cream-brass.jpg",
    "spaceId": "vertical-living",
    "cabinetId": "display-cabinet",
    "styleId": "french-cream",
    "materialId": "c-cream-brass"
  },
  "vertical-living|display-cabinet|italian-minimal|d-dark-grey": {
    "imageFile": "ref_0139__vertical-living__display-cabinet__italian-minimal__d-dark-grey.jpg",
    "spaceId": "vertical-living",
    "cabinetId": "display-cabinet",
    "styleId": "italian-minimal",
    "materialId": "d-dark-grey"
  },
  "vertical-living|display-cabinet|italian-minimal|h-matte-white": {
    "imageFile": "ref_0140__vertical-living__display-cabinet__italian-minimal__h-matte-white.jpg",
    "spaceId": "vertical-living",
    "cabinetId": "display-cabinet",
    "styleId": "italian-minimal",
    "materialId": "h-matte-white"
  },
  "vertical-living|display-cabinet|japanese-wood|a-oak-white": {
    "imageFile": "ref_0141__vertical-living__display-cabinet__japanese-wood__a-oak-white.jpg",
    "spaceId": "vertical-living",
    "cabinetId": "display-cabinet",
    "styleId": "japanese-wood",
    "materialId": "a-oak-white"
  },
  "vertical-living|display-cabinet|japanese-wood|f-cement-rattan": {
    "imageFile": "ref_0142__vertical-living__display-cabinet__japanese-wood__f-cement-rattan.jpg",
    "spaceId": "vertical-living",
    "cabinetId": "display-cabinet",
    "styleId": "japanese-wood",
    "materialId": "f-cement-rattan"
  },
  "vertical-living|display-cabinet|modern-chinese|e-walnut-glass": {
    "imageFile": "ref_0143__vertical-living__display-cabinet__modern-chinese__e-walnut-glass.jpg",
    "spaceId": "vertical-living",
    "cabinetId": "display-cabinet",
    "styleId": "modern-chinese",
    "materialId": "e-walnut-glass"
  },
  "vertical-living|display-cabinet|wabi-sabi|a-oak-white": {
    "imageFile": "ref_0144__vertical-living__display-cabinet__wabi-sabi__a-oak-white.jpg",
    "spaceId": "vertical-living",
    "cabinetId": "display-cabinet",
    "styleId": "wabi-sabi",
    "materialId": "a-oak-white"
  },
  "vertical-living|display-cabinet|wabi-sabi|c-cream-brass": {
    "imageFile": "ref_0145__vertical-living__display-cabinet__wabi-sabi__c-cream-brass.jpg",
    "spaceId": "vertical-living",
    "cabinetId": "display-cabinet",
    "styleId": "wabi-sabi",
    "materialId": "c-cream-brass"
  },
  "vertical-living|display-cabinet|wabi-sabi|f-cement-rattan": {
    "imageFile": "ref_0146__vertical-living__display-cabinet__wabi-sabi__f-cement-rattan.jpg",
    "spaceId": "vertical-living",
    "cabinetId": "display-cabinet",
    "styleId": "wabi-sabi",
    "materialId": "f-cement-rattan"
  },
  "vertical-living|display-cabinet|american-vintage|e-walnut-glass": {
    "imageFile": "ref_0147__vertical-living__display-cabinet__american-vintage__e-walnut-glass.jpg",
    "spaceId": "vertical-living",
    "cabinetId": "display-cabinet",
    "styleId": "american-vintage",
    "materialId": "e-walnut-glass"
  },
  "vertical-living|display-cabinet|american-vintage|g-american-white": {
    "imageFile": "ref_0148__vertical-living__display-cabinet__american-vintage__g-american-white.jpg",
    "spaceId": "vertical-living",
    "cabinetId": "display-cabinet",
    "styleId": "american-vintage",
    "materialId": "g-american-white"
  },
  "vertical-living|display-cabinet|modern-luxury|b-gloss-white": {
    "imageFile": "ref_0149__vertical-living__display-cabinet__modern-luxury__b-gloss-white.jpg",
    "spaceId": "vertical-living",
    "cabinetId": "display-cabinet",
    "styleId": "modern-luxury",
    "materialId": "b-gloss-white"
  },
  "vertical-living|display-cabinet|modern-luxury|c-cream-brass": {
    "imageFile": "ref_0150__vertical-living__display-cabinet__modern-luxury__c-cream-brass.jpg",
    "spaceId": "vertical-living",
    "cabinetId": "display-cabinet",
    "styleId": "modern-luxury",
    "materialId": "c-cream-brass"
  },
  "vertical-living|display-cabinet|modern-luxury|d-dark-grey": {
    "imageFile": "ref_0151__vertical-living__display-cabinet__modern-luxury__d-dark-grey.jpg",
    "spaceId": "vertical-living",
    "cabinetId": "display-cabinet",
    "styleId": "modern-luxury",
    "materialId": "d-dark-grey"
  },
  "vertical-living|display-cabinet|modern-luxury|e-walnut-glass": {
    "imageFile": "ref_0152__vertical-living__display-cabinet__modern-luxury__e-walnut-glass.jpg",
    "spaceId": "vertical-living",
    "cabinetId": "display-cabinet",
    "styleId": "modern-luxury",
    "materialId": "e-walnut-glass"
  },
  "master-bedroom|floor-wardrobe|modern-minimalist|a-oak-white": {
    "imageFile": "ref_0153__master-bedroom__floor-wardrobe__modern-minimalist__a-oak-white.jpg",
    "spaceId": "master-bedroom",
    "cabinetId": "floor-wardrobe",
    "styleId": "modern-minimalist",
    "materialId": "a-oak-white"
  },
  "master-bedroom|floor-wardrobe|modern-minimalist|b-gloss-white": {
    "imageFile": "ref_0154__master-bedroom__floor-wardrobe__modern-minimalist__b-gloss-white.jpg",
    "spaceId": "master-bedroom",
    "cabinetId": "floor-wardrobe",
    "styleId": "modern-minimalist",
    "materialId": "b-gloss-white"
  },
  "master-bedroom|floor-wardrobe|modern-minimalist|d-dark-grey": {
    "imageFile": "ref_0155__master-bedroom__floor-wardrobe__modern-minimalist__d-dark-grey.jpg",
    "spaceId": "master-bedroom",
    "cabinetId": "floor-wardrobe",
    "styleId": "modern-minimalist",
    "materialId": "d-dark-grey"
  },
  "master-bedroom|floor-wardrobe|modern-minimalist|h-matte-white": {
    "imageFile": "ref_0156__master-bedroom__floor-wardrobe__modern-minimalist__h-matte-white.jpg",
    "spaceId": "master-bedroom",
    "cabinetId": "floor-wardrobe",
    "styleId": "modern-minimalist",
    "materialId": "h-matte-white"
  },
  "master-bedroom|floor-wardrobe|french-cream|c-cream-brass": {
    "imageFile": "ref_0157__master-bedroom__floor-wardrobe__french-cream__c-cream-brass.jpg",
    "spaceId": "master-bedroom",
    "cabinetId": "floor-wardrobe",
    "styleId": "french-cream",
    "materialId": "c-cream-brass"
  },
  "master-bedroom|floor-wardrobe|italian-minimal|d-dark-grey": {
    "imageFile": "ref_0158__master-bedroom__floor-wardrobe__italian-minimal__d-dark-grey.jpg",
    "spaceId": "master-bedroom",
    "cabinetId": "floor-wardrobe",
    "styleId": "italian-minimal",
    "materialId": "d-dark-grey"
  },
  "master-bedroom|floor-wardrobe|italian-minimal|h-matte-white": {
    "imageFile": "ref_0159__master-bedroom__floor-wardrobe__italian-minimal__h-matte-white.jpg",
    "spaceId": "master-bedroom",
    "cabinetId": "floor-wardrobe",
    "styleId": "italian-minimal",
    "materialId": "h-matte-white"
  },
  "master-bedroom|floor-wardrobe|japanese-wood|a-oak-white": {
    "imageFile": "ref_0160__master-bedroom__floor-wardrobe__japanese-wood__a-oak-white.jpg",
    "spaceId": "master-bedroom",
    "cabinetId": "floor-wardrobe",
    "styleId": "japanese-wood",
    "materialId": "a-oak-white"
  },
  "master-bedroom|floor-wardrobe|japanese-wood|f-cement-rattan": {
    "imageFile": "ref_0161__master-bedroom__floor-wardrobe__japanese-wood__f-cement-rattan.jpg",
    "spaceId": "master-bedroom",
    "cabinetId": "floor-wardrobe",
    "styleId": "japanese-wood",
    "materialId": "f-cement-rattan"
  },
  "master-bedroom|floor-wardrobe|modern-chinese|e-walnut-glass": {
    "imageFile": "ref_0162__master-bedroom__floor-wardrobe__modern-chinese__e-walnut-glass.jpg",
    "spaceId": "master-bedroom",
    "cabinetId": "floor-wardrobe",
    "styleId": "modern-chinese",
    "materialId": "e-walnut-glass"
  },
  "master-bedroom|floor-wardrobe|wabi-sabi|a-oak-white": {
    "imageFile": "ref_0163__master-bedroom__floor-wardrobe__wabi-sabi__a-oak-white.jpg",
    "spaceId": "master-bedroom",
    "cabinetId": "floor-wardrobe",
    "styleId": "wabi-sabi",
    "materialId": "a-oak-white"
  },
  "master-bedroom|floor-wardrobe|wabi-sabi|c-cream-brass": {
    "imageFile": "ref_0164__master-bedroom__floor-wardrobe__wabi-sabi__c-cream-brass.jpg",
    "spaceId": "master-bedroom",
    "cabinetId": "floor-wardrobe",
    "styleId": "wabi-sabi",
    "materialId": "c-cream-brass"
  },
  "master-bedroom|floor-wardrobe|wabi-sabi|f-cement-rattan": {
    "imageFile": "ref_0165__master-bedroom__floor-wardrobe__wabi-sabi__f-cement-rattan.jpg",
    "spaceId": "master-bedroom",
    "cabinetId": "floor-wardrobe",
    "styleId": "wabi-sabi",
    "materialId": "f-cement-rattan"
  },
  "master-bedroom|floor-wardrobe|american-vintage|e-walnut-glass": {
    "imageFile": "ref_0166__master-bedroom__floor-wardrobe__american-vintage__e-walnut-glass.jpg",
    "spaceId": "master-bedroom",
    "cabinetId": "floor-wardrobe",
    "styleId": "american-vintage",
    "materialId": "e-walnut-glass"
  },
  "master-bedroom|floor-wardrobe|american-vintage|g-american-white": {
    "imageFile": "ref_0167__master-bedroom__floor-wardrobe__american-vintage__g-american-white.jpg",
    "spaceId": "master-bedroom",
    "cabinetId": "floor-wardrobe",
    "styleId": "american-vintage",
    "materialId": "g-american-white"
  },
  "master-bedroom|floor-wardrobe|modern-luxury|b-gloss-white": {
    "imageFile": "ref_0168__master-bedroom__floor-wardrobe__modern-luxury__b-gloss-white.jpg",
    "spaceId": "master-bedroom",
    "cabinetId": "floor-wardrobe",
    "styleId": "modern-luxury",
    "materialId": "b-gloss-white"
  },
  "master-bedroom|floor-wardrobe|modern-luxury|c-cream-brass": {
    "imageFile": "ref_0169__master-bedroom__floor-wardrobe__modern-luxury__c-cream-brass.jpg",
    "spaceId": "master-bedroom",
    "cabinetId": "floor-wardrobe",
    "styleId": "modern-luxury",
    "materialId": "c-cream-brass"
  },
  "master-bedroom|floor-wardrobe|modern-luxury|d-dark-grey": {
    "imageFile": "ref_0170__master-bedroom__floor-wardrobe__modern-luxury__d-dark-grey.jpg",
    "spaceId": "master-bedroom",
    "cabinetId": "floor-wardrobe",
    "styleId": "modern-luxury",
    "materialId": "d-dark-grey"
  },
  "master-bedroom|floor-wardrobe|modern-luxury|e-walnut-glass": {
    "imageFile": "ref_0171__master-bedroom__floor-wardrobe__modern-luxury__e-walnut-glass.jpg",
    "spaceId": "master-bedroom",
    "cabinetId": "floor-wardrobe",
    "styleId": "modern-luxury",
    "materialId": "e-walnut-glass"
  },
  "master-bedroom|glass-wardrobe|modern-minimalist|a-oak-white": {
    "imageFile": "ref_0172__master-bedroom__glass-wardrobe__modern-minimalist__a-oak-white.jpg",
    "spaceId": "master-bedroom",
    "cabinetId": "glass-wardrobe",
    "styleId": "modern-minimalist",
    "materialId": "a-oak-white"
  },
  "master-bedroom|glass-wardrobe|modern-minimalist|b-gloss-white": {
    "imageFile": "ref_0173__master-bedroom__glass-wardrobe__modern-minimalist__b-gloss-white.jpg",
    "spaceId": "master-bedroom",
    "cabinetId": "glass-wardrobe",
    "styleId": "modern-minimalist",
    "materialId": "b-gloss-white"
  },
  "master-bedroom|glass-wardrobe|modern-minimalist|d-dark-grey": {
    "imageFile": "ref_0174__master-bedroom__glass-wardrobe__modern-minimalist__d-dark-grey.jpg",
    "spaceId": "master-bedroom",
    "cabinetId": "glass-wardrobe",
    "styleId": "modern-minimalist",
    "materialId": "d-dark-grey"
  },
  "master-bedroom|glass-wardrobe|modern-minimalist|h-matte-white": {
    "imageFile": "ref_0175__master-bedroom__glass-wardrobe__modern-minimalist__h-matte-white.jpg",
    "spaceId": "master-bedroom",
    "cabinetId": "glass-wardrobe",
    "styleId": "modern-minimalist",
    "materialId": "h-matte-white"
  },
  "master-bedroom|glass-wardrobe|french-cream|c-cream-brass": {
    "imageFile": "ref_0176__master-bedroom__glass-wardrobe__french-cream__c-cream-brass.jpg",
    "spaceId": "master-bedroom",
    "cabinetId": "glass-wardrobe",
    "styleId": "french-cream",
    "materialId": "c-cream-brass"
  },
  "master-bedroom|glass-wardrobe|italian-minimal|d-dark-grey": {
    "imageFile": "ref_0177__master-bedroom__glass-wardrobe__italian-minimal__d-dark-grey.jpg",
    "spaceId": "master-bedroom",
    "cabinetId": "glass-wardrobe",
    "styleId": "italian-minimal",
    "materialId": "d-dark-grey"
  },
  "master-bedroom|glass-wardrobe|italian-minimal|h-matte-white": {
    "imageFile": "ref_0178__master-bedroom__glass-wardrobe__italian-minimal__h-matte-white.jpg",
    "spaceId": "master-bedroom",
    "cabinetId": "glass-wardrobe",
    "styleId": "italian-minimal",
    "materialId": "h-matte-white"
  },
  "master-bedroom|glass-wardrobe|japanese-wood|a-oak-white": {
    "imageFile": "ref_0179__master-bedroom__glass-wardrobe__japanese-wood__a-oak-white.jpg",
    "spaceId": "master-bedroom",
    "cabinetId": "glass-wardrobe",
    "styleId": "japanese-wood",
    "materialId": "a-oak-white"
  },
  "master-bedroom|glass-wardrobe|japanese-wood|f-cement-rattan": {
    "imageFile": "ref_0180__master-bedroom__glass-wardrobe__japanese-wood__f-cement-rattan.jpg",
    "spaceId": "master-bedroom",
    "cabinetId": "glass-wardrobe",
    "styleId": "japanese-wood",
    "materialId": "f-cement-rattan"
  },
  "master-bedroom|glass-wardrobe|modern-chinese|e-walnut-glass": {
    "imageFile": "ref_0181__master-bedroom__glass-wardrobe__modern-chinese__e-walnut-glass.jpg",
    "spaceId": "master-bedroom",
    "cabinetId": "glass-wardrobe",
    "styleId": "modern-chinese",
    "materialId": "e-walnut-glass"
  },
  "master-bedroom|glass-wardrobe|wabi-sabi|a-oak-white": {
    "imageFile": "ref_0182__master-bedroom__glass-wardrobe__wabi-sabi__a-oak-white.jpg",
    "spaceId": "master-bedroom",
    "cabinetId": "glass-wardrobe",
    "styleId": "wabi-sabi",
    "materialId": "a-oak-white"
  },
  "master-bedroom|glass-wardrobe|wabi-sabi|c-cream-brass": {
    "imageFile": "ref_0183__master-bedroom__glass-wardrobe__wabi-sabi__c-cream-brass.jpg",
    "spaceId": "master-bedroom",
    "cabinetId": "glass-wardrobe",
    "styleId": "wabi-sabi",
    "materialId": "c-cream-brass"
  },
  "master-bedroom|glass-wardrobe|wabi-sabi|f-cement-rattan": {
    "imageFile": "ref_0184__master-bedroom__glass-wardrobe__wabi-sabi__f-cement-rattan.jpg",
    "spaceId": "master-bedroom",
    "cabinetId": "glass-wardrobe",
    "styleId": "wabi-sabi",
    "materialId": "f-cement-rattan"
  },
  "master-bedroom|glass-wardrobe|american-vintage|e-walnut-glass": {
    "imageFile": "ref_0185__master-bedroom__glass-wardrobe__american-vintage__e-walnut-glass.jpg",
    "spaceId": "master-bedroom",
    "cabinetId": "glass-wardrobe",
    "styleId": "american-vintage",
    "materialId": "e-walnut-glass"
  },
  "master-bedroom|glass-wardrobe|american-vintage|g-american-white": {
    "imageFile": "ref_0186__master-bedroom__glass-wardrobe__american-vintage__g-american-white.jpg",
    "spaceId": "master-bedroom",
    "cabinetId": "glass-wardrobe",
    "styleId": "american-vintage",
    "materialId": "g-american-white"
  },
  "master-bedroom|glass-wardrobe|modern-luxury|b-gloss-white": {
    "imageFile": "ref_0187__master-bedroom__glass-wardrobe__modern-luxury__b-gloss-white.jpg",
    "spaceId": "master-bedroom",
    "cabinetId": "glass-wardrobe",
    "styleId": "modern-luxury",
    "materialId": "b-gloss-white"
  },
  "master-bedroom|glass-wardrobe|modern-luxury|c-cream-brass": {
    "imageFile": "ref_0188__master-bedroom__glass-wardrobe__modern-luxury__c-cream-brass.jpg",
    "spaceId": "master-bedroom",
    "cabinetId": "glass-wardrobe",
    "styleId": "modern-luxury",
    "materialId": "c-cream-brass"
  },
  "master-bedroom|glass-wardrobe|modern-luxury|d-dark-grey": {
    "imageFile": "ref_0189__master-bedroom__glass-wardrobe__modern-luxury__d-dark-grey.jpg",
    "spaceId": "master-bedroom",
    "cabinetId": "glass-wardrobe",
    "styleId": "modern-luxury",
    "materialId": "d-dark-grey"
  },
  "master-bedroom|glass-wardrobe|modern-luxury|e-walnut-glass": {
    "imageFile": "ref_0190__master-bedroom__glass-wardrobe__modern-luxury__e-walnut-glass.jpg",
    "spaceId": "master-bedroom",
    "cabinetId": "glass-wardrobe",
    "styleId": "modern-luxury",
    "materialId": "e-walnut-glass"
  },
  "master-bedroom|sliding-wardrobe|modern-minimalist|a-oak-white": {
    "imageFile": "ref_0191__master-bedroom__sliding-wardrobe__modern-minimalist__a-oak-white.jpg",
    "spaceId": "master-bedroom",
    "cabinetId": "sliding-wardrobe",
    "styleId": "modern-minimalist",
    "materialId": "a-oak-white"
  },
  "master-bedroom|sliding-wardrobe|modern-minimalist|b-gloss-white": {
    "imageFile": "ref_0192__master-bedroom__sliding-wardrobe__modern-minimalist__b-gloss-white.jpg",
    "spaceId": "master-bedroom",
    "cabinetId": "sliding-wardrobe",
    "styleId": "modern-minimalist",
    "materialId": "b-gloss-white"
  },
  "master-bedroom|sliding-wardrobe|modern-minimalist|d-dark-grey": {
    "imageFile": "ref_0193__master-bedroom__sliding-wardrobe__modern-minimalist__d-dark-grey.jpg",
    "spaceId": "master-bedroom",
    "cabinetId": "sliding-wardrobe",
    "styleId": "modern-minimalist",
    "materialId": "d-dark-grey"
  },
  "master-bedroom|sliding-wardrobe|modern-minimalist|h-matte-white": {
    "imageFile": "ref_0194__master-bedroom__sliding-wardrobe__modern-minimalist__h-matte-white.jpg",
    "spaceId": "master-bedroom",
    "cabinetId": "sliding-wardrobe",
    "styleId": "modern-minimalist",
    "materialId": "h-matte-white"
  },
  "master-bedroom|sliding-wardrobe|french-cream|c-cream-brass": {
    "imageFile": "ref_0195__master-bedroom__sliding-wardrobe__french-cream__c-cream-brass.jpg",
    "spaceId": "master-bedroom",
    "cabinetId": "sliding-wardrobe",
    "styleId": "french-cream",
    "materialId": "c-cream-brass"
  },
  "master-bedroom|sliding-wardrobe|italian-minimal|d-dark-grey": {
    "imageFile": "ref_0196__master-bedroom__sliding-wardrobe__italian-minimal__d-dark-grey.jpg",
    "spaceId": "master-bedroom",
    "cabinetId": "sliding-wardrobe",
    "styleId": "italian-minimal",
    "materialId": "d-dark-grey"
  },
  "master-bedroom|sliding-wardrobe|italian-minimal|h-matte-white": {
    "imageFile": "ref_0197__master-bedroom__sliding-wardrobe__italian-minimal__h-matte-white.jpg",
    "spaceId": "master-bedroom",
    "cabinetId": "sliding-wardrobe",
    "styleId": "italian-minimal",
    "materialId": "h-matte-white"
  },
  "master-bedroom|sliding-wardrobe|japanese-wood|a-oak-white": {
    "imageFile": "ref_0198__master-bedroom__sliding-wardrobe__japanese-wood__a-oak-white.jpg",
    "spaceId": "master-bedroom",
    "cabinetId": "sliding-wardrobe",
    "styleId": "japanese-wood",
    "materialId": "a-oak-white"
  },
  "master-bedroom|sliding-wardrobe|japanese-wood|f-cement-rattan": {
    "imageFile": "ref_0199__master-bedroom__sliding-wardrobe__japanese-wood__f-cement-rattan.jpg",
    "spaceId": "master-bedroom",
    "cabinetId": "sliding-wardrobe",
    "styleId": "japanese-wood",
    "materialId": "f-cement-rattan"
  },
  "master-bedroom|sliding-wardrobe|modern-chinese|e-walnut-glass": {
    "imageFile": "ref_0200__master-bedroom__sliding-wardrobe__modern-chinese__e-walnut-glass.jpg",
    "spaceId": "master-bedroom",
    "cabinetId": "sliding-wardrobe",
    "styleId": "modern-chinese",
    "materialId": "e-walnut-glass"
  },
  "master-bedroom|sliding-wardrobe|wabi-sabi|a-oak-white": {
    "imageFile": "ref_0201__master-bedroom__sliding-wardrobe__wabi-sabi__a-oak-white.jpg",
    "spaceId": "master-bedroom",
    "cabinetId": "sliding-wardrobe",
    "styleId": "wabi-sabi",
    "materialId": "a-oak-white"
  },
  "master-bedroom|sliding-wardrobe|wabi-sabi|c-cream-brass": {
    "imageFile": "ref_0202__master-bedroom__sliding-wardrobe__wabi-sabi__c-cream-brass.jpg",
    "spaceId": "master-bedroom",
    "cabinetId": "sliding-wardrobe",
    "styleId": "wabi-sabi",
    "materialId": "c-cream-brass"
  },
  "master-bedroom|sliding-wardrobe|wabi-sabi|f-cement-rattan": {
    "imageFile": "ref_0203__master-bedroom__sliding-wardrobe__wabi-sabi__f-cement-rattan.jpg",
    "spaceId": "master-bedroom",
    "cabinetId": "sliding-wardrobe",
    "styleId": "wabi-sabi",
    "materialId": "f-cement-rattan"
  },
  "master-bedroom|sliding-wardrobe|american-vintage|e-walnut-glass": {
    "imageFile": "ref_0204__master-bedroom__sliding-wardrobe__american-vintage__e-walnut-glass.jpg",
    "spaceId": "master-bedroom",
    "cabinetId": "sliding-wardrobe",
    "styleId": "american-vintage",
    "materialId": "e-walnut-glass"
  },
  "master-bedroom|sliding-wardrobe|american-vintage|g-american-white": {
    "imageFile": "ref_0205__master-bedroom__sliding-wardrobe__american-vintage__g-american-white.jpg",
    "spaceId": "master-bedroom",
    "cabinetId": "sliding-wardrobe",
    "styleId": "american-vintage",
    "materialId": "g-american-white"
  },
  "master-bedroom|sliding-wardrobe|modern-luxury|b-gloss-white": {
    "imageFile": "ref_0206__master-bedroom__sliding-wardrobe__modern-luxury__b-gloss-white.jpg",
    "spaceId": "master-bedroom",
    "cabinetId": "sliding-wardrobe",
    "styleId": "modern-luxury",
    "materialId": "b-gloss-white"
  },
  "master-bedroom|sliding-wardrobe|modern-luxury|c-cream-brass": {
    "imageFile": "ref_0207__master-bedroom__sliding-wardrobe__modern-luxury__c-cream-brass.jpg",
    "spaceId": "master-bedroom",
    "cabinetId": "sliding-wardrobe",
    "styleId": "modern-luxury",
    "materialId": "c-cream-brass"
  },
  "master-bedroom|sliding-wardrobe|modern-luxury|d-dark-grey": {
    "imageFile": "ref_0208__master-bedroom__sliding-wardrobe__modern-luxury__d-dark-grey.jpg",
    "spaceId": "master-bedroom",
    "cabinetId": "sliding-wardrobe",
    "styleId": "modern-luxury",
    "materialId": "d-dark-grey"
  },
  "master-bedroom|sliding-wardrobe|modern-luxury|e-walnut-glass": {
    "imageFile": "ref_0209__master-bedroom__sliding-wardrobe__modern-luxury__e-walnut-glass.jpg",
    "spaceId": "master-bedroom",
    "cabinetId": "sliding-wardrobe",
    "styleId": "modern-luxury",
    "materialId": "e-walnut-glass"
  },
  "master-bedroom|floating-tv|modern-minimalist|a-oak-white": {
    "imageFile": "ref_0210__master-bedroom__floating-tv__modern-minimalist__a-oak-white.jpg",
    "spaceId": "master-bedroom",
    "cabinetId": "floating-tv",
    "styleId": "modern-minimalist",
    "materialId": "a-oak-white"
  },
  "master-bedroom|floating-tv|modern-minimalist|b-gloss-white": {
    "imageFile": "ref_0211__master-bedroom__floating-tv__modern-minimalist__b-gloss-white.jpg",
    "spaceId": "master-bedroom",
    "cabinetId": "floating-tv",
    "styleId": "modern-minimalist",
    "materialId": "b-gloss-white"
  },
  "master-bedroom|floating-tv|modern-minimalist|d-dark-grey": {
    "imageFile": "ref_0212__master-bedroom__floating-tv__modern-minimalist__d-dark-grey.jpg",
    "spaceId": "master-bedroom",
    "cabinetId": "floating-tv",
    "styleId": "modern-minimalist",
    "materialId": "d-dark-grey"
  },
  "master-bedroom|floating-tv|modern-minimalist|h-matte-white": {
    "imageFile": "ref_0213__master-bedroom__floating-tv__modern-minimalist__h-matte-white.jpg",
    "spaceId": "master-bedroom",
    "cabinetId": "floating-tv",
    "styleId": "modern-minimalist",
    "materialId": "h-matte-white"
  },
  "master-bedroom|floating-tv|french-cream|c-cream-brass": {
    "imageFile": "ref_0214__master-bedroom__floating-tv__french-cream__c-cream-brass.jpg",
    "spaceId": "master-bedroom",
    "cabinetId": "floating-tv",
    "styleId": "french-cream",
    "materialId": "c-cream-brass"
  },
  "master-bedroom|floating-tv|italian-minimal|d-dark-grey": {
    "imageFile": "ref_0215__master-bedroom__floating-tv__italian-minimal__d-dark-grey.jpg",
    "spaceId": "master-bedroom",
    "cabinetId": "floating-tv",
    "styleId": "italian-minimal",
    "materialId": "d-dark-grey"
  },
  "master-bedroom|floating-tv|italian-minimal|h-matte-white": {
    "imageFile": "ref_0216__master-bedroom__floating-tv__italian-minimal__h-matte-white.jpg",
    "spaceId": "master-bedroom",
    "cabinetId": "floating-tv",
    "styleId": "italian-minimal",
    "materialId": "h-matte-white"
  },
  "master-bedroom|floating-tv|japanese-wood|a-oak-white": {
    "imageFile": "ref_0217__master-bedroom__floating-tv__japanese-wood__a-oak-white.jpg",
    "spaceId": "master-bedroom",
    "cabinetId": "floating-tv",
    "styleId": "japanese-wood",
    "materialId": "a-oak-white"
  },
  "master-bedroom|floating-tv|japanese-wood|f-cement-rattan": {
    "imageFile": "ref_0218__master-bedroom__floating-tv__japanese-wood__f-cement-rattan.jpg",
    "spaceId": "master-bedroom",
    "cabinetId": "floating-tv",
    "styleId": "japanese-wood",
    "materialId": "f-cement-rattan"
  },
  "master-bedroom|floating-tv|modern-chinese|e-walnut-glass": {
    "imageFile": "ref_0219__master-bedroom__floating-tv__modern-chinese__e-walnut-glass.jpg",
    "spaceId": "master-bedroom",
    "cabinetId": "floating-tv",
    "styleId": "modern-chinese",
    "materialId": "e-walnut-glass"
  },
  "master-bedroom|floating-tv|wabi-sabi|a-oak-white": {
    "imageFile": "ref_0220__master-bedroom__floating-tv__wabi-sabi__a-oak-white.jpg",
    "spaceId": "master-bedroom",
    "cabinetId": "floating-tv",
    "styleId": "wabi-sabi",
    "materialId": "a-oak-white"
  },
  "master-bedroom|floating-tv|wabi-sabi|c-cream-brass": {
    "imageFile": "ref_0221__master-bedroom__floating-tv__wabi-sabi__c-cream-brass.jpg",
    "spaceId": "master-bedroom",
    "cabinetId": "floating-tv",
    "styleId": "wabi-sabi",
    "materialId": "c-cream-brass"
  },
  "master-bedroom|floating-tv|wabi-sabi|f-cement-rattan": {
    "imageFile": "ref_0222__master-bedroom__floating-tv__wabi-sabi__f-cement-rattan.jpg",
    "spaceId": "master-bedroom",
    "cabinetId": "floating-tv",
    "styleId": "wabi-sabi",
    "materialId": "f-cement-rattan"
  },
  "master-bedroom|floating-tv|american-vintage|e-walnut-glass": {
    "imageFile": "ref_0223__master-bedroom__floating-tv__american-vintage__e-walnut-glass.jpg",
    "spaceId": "master-bedroom",
    "cabinetId": "floating-tv",
    "styleId": "american-vintage",
    "materialId": "e-walnut-glass"
  },
  "master-bedroom|floating-tv|american-vintage|g-american-white": {
    "imageFile": "ref_0224__master-bedroom__floating-tv__american-vintage__g-american-white.jpg",
    "spaceId": "master-bedroom",
    "cabinetId": "floating-tv",
    "styleId": "american-vintage",
    "materialId": "g-american-white"
  },
  "master-bedroom|floating-tv|modern-luxury|b-gloss-white": {
    "imageFile": "ref_0225__master-bedroom__floating-tv__modern-luxury__b-gloss-white.jpg",
    "spaceId": "master-bedroom",
    "cabinetId": "floating-tv",
    "styleId": "modern-luxury",
    "materialId": "b-gloss-white"
  },
  "master-bedroom|floating-tv|modern-luxury|c-cream-brass": {
    "imageFile": "ref_0226__master-bedroom__floating-tv__modern-luxury__c-cream-brass.jpg",
    "spaceId": "master-bedroom",
    "cabinetId": "floating-tv",
    "styleId": "modern-luxury",
    "materialId": "c-cream-brass"
  },
  "master-bedroom|floating-tv|modern-luxury|d-dark-grey": {
    "imageFile": "ref_0227__master-bedroom__floating-tv__modern-luxury__d-dark-grey.jpg",
    "spaceId": "master-bedroom",
    "cabinetId": "floating-tv",
    "styleId": "modern-luxury",
    "materialId": "d-dark-grey"
  },
  "master-bedroom|floating-tv|modern-luxury|e-walnut-glass": {
    "imageFile": "ref_0228__master-bedroom__floating-tv__modern-luxury__e-walnut-glass.jpg",
    "spaceId": "master-bedroom",
    "cabinetId": "floating-tv",
    "styleId": "modern-luxury",
    "materialId": "e-walnut-glass"
  },
  "master-bedroom|bay-window|modern-minimalist|a-oak-white": {
    "imageFile": "ref_0229__master-bedroom__bay-window__modern-minimalist__a-oak-white.jpg",
    "spaceId": "master-bedroom",
    "cabinetId": "bay-window",
    "styleId": "modern-minimalist",
    "materialId": "a-oak-white"
  },
  "master-bedroom|bay-window|modern-minimalist|b-gloss-white": {
    "imageFile": "ref_0230__master-bedroom__bay-window__modern-minimalist__b-gloss-white.jpg",
    "spaceId": "master-bedroom",
    "cabinetId": "bay-window",
    "styleId": "modern-minimalist",
    "materialId": "b-gloss-white"
  },
  "master-bedroom|bay-window|modern-minimalist|d-dark-grey": {
    "imageFile": "ref_0231__master-bedroom__bay-window__modern-minimalist__d-dark-grey.jpg",
    "spaceId": "master-bedroom",
    "cabinetId": "bay-window",
    "styleId": "modern-minimalist",
    "materialId": "d-dark-grey"
  },
  "master-bedroom|bay-window|modern-minimalist|h-matte-white": {
    "imageFile": "ref_0232__master-bedroom__bay-window__modern-minimalist__h-matte-white.jpg",
    "spaceId": "master-bedroom",
    "cabinetId": "bay-window",
    "styleId": "modern-minimalist",
    "materialId": "h-matte-white"
  },
  "master-bedroom|bay-window|french-cream|c-cream-brass": {
    "imageFile": "ref_0233__master-bedroom__bay-window__french-cream__c-cream-brass.jpg",
    "spaceId": "master-bedroom",
    "cabinetId": "bay-window",
    "styleId": "french-cream",
    "materialId": "c-cream-brass"
  },
  "master-bedroom|bay-window|italian-minimal|d-dark-grey": {
    "imageFile": "ref_0234__master-bedroom__bay-window__italian-minimal__d-dark-grey.jpg",
    "spaceId": "master-bedroom",
    "cabinetId": "bay-window",
    "styleId": "italian-minimal",
    "materialId": "d-dark-grey"
  },
  "master-bedroom|bay-window|italian-minimal|h-matte-white": {
    "imageFile": "ref_0235__master-bedroom__bay-window__italian-minimal__h-matte-white.jpg",
    "spaceId": "master-bedroom",
    "cabinetId": "bay-window",
    "styleId": "italian-minimal",
    "materialId": "h-matte-white"
  },
  "master-bedroom|bay-window|japanese-wood|a-oak-white": {
    "imageFile": "ref_0236__master-bedroom__bay-window__japanese-wood__a-oak-white.jpg",
    "spaceId": "master-bedroom",
    "cabinetId": "bay-window",
    "styleId": "japanese-wood",
    "materialId": "a-oak-white"
  },
  "master-bedroom|bay-window|japanese-wood|f-cement-rattan": {
    "imageFile": "ref_0237__master-bedroom__bay-window__japanese-wood__f-cement-rattan.jpg",
    "spaceId": "master-bedroom",
    "cabinetId": "bay-window",
    "styleId": "japanese-wood",
    "materialId": "f-cement-rattan"
  },
  "master-bedroom|bay-window|modern-chinese|e-walnut-glass": {
    "imageFile": "ref_0238__master-bedroom__bay-window__modern-chinese__e-walnut-glass.jpg",
    "spaceId": "master-bedroom",
    "cabinetId": "bay-window",
    "styleId": "modern-chinese",
    "materialId": "e-walnut-glass"
  },
  "master-bedroom|bay-window|wabi-sabi|a-oak-white": {
    "imageFile": "ref_0239__master-bedroom__bay-window__wabi-sabi__a-oak-white.jpg",
    "spaceId": "master-bedroom",
    "cabinetId": "bay-window",
    "styleId": "wabi-sabi",
    "materialId": "a-oak-white"
  },
  "master-bedroom|bay-window|wabi-sabi|c-cream-brass": {
    "imageFile": "ref_0240__master-bedroom__bay-window__wabi-sabi__c-cream-brass.jpg",
    "spaceId": "master-bedroom",
    "cabinetId": "bay-window",
    "styleId": "wabi-sabi",
    "materialId": "c-cream-brass"
  },
  "master-bedroom|bay-window|wabi-sabi|f-cement-rattan": {
    "imageFile": "ref_0241__master-bedroom__bay-window__wabi-sabi__f-cement-rattan.jpg",
    "spaceId": "master-bedroom",
    "cabinetId": "bay-window",
    "styleId": "wabi-sabi",
    "materialId": "f-cement-rattan"
  },
  "master-bedroom|bay-window|american-vintage|e-walnut-glass": {
    "imageFile": "ref_0242__master-bedroom__bay-window__american-vintage__e-walnut-glass.jpg",
    "spaceId": "master-bedroom",
    "cabinetId": "bay-window",
    "styleId": "american-vintage",
    "materialId": "e-walnut-glass"
  },
  "master-bedroom|bay-window|american-vintage|g-american-white": {
    "imageFile": "ref_0243__master-bedroom__bay-window__american-vintage__g-american-white.jpg",
    "spaceId": "master-bedroom",
    "cabinetId": "bay-window",
    "styleId": "american-vintage",
    "materialId": "g-american-white"
  },
  "master-bedroom|bay-window|modern-luxury|b-gloss-white": {
    "imageFile": "ref_0244__master-bedroom__bay-window__modern-luxury__b-gloss-white.jpg",
    "spaceId": "master-bedroom",
    "cabinetId": "bay-window",
    "styleId": "modern-luxury",
    "materialId": "b-gloss-white"
  },
  "master-bedroom|bay-window|modern-luxury|c-cream-brass": {
    "imageFile": "ref_0245__master-bedroom__bay-window__modern-luxury__c-cream-brass.jpg",
    "spaceId": "master-bedroom",
    "cabinetId": "bay-window",
    "styleId": "modern-luxury",
    "materialId": "c-cream-brass"
  },
  "master-bedroom|bay-window|modern-luxury|d-dark-grey": {
    "imageFile": "ref_0246__master-bedroom__bay-window__modern-luxury__d-dark-grey.jpg",
    "spaceId": "master-bedroom",
    "cabinetId": "bay-window",
    "styleId": "modern-luxury",
    "materialId": "d-dark-grey"
  },
  "master-bedroom|bay-window|modern-luxury|e-walnut-glass": {
    "imageFile": "ref_0247__master-bedroom__bay-window__modern-luxury__e-walnut-glass.jpg",
    "spaceId": "master-bedroom",
    "cabinetId": "bay-window",
    "styleId": "modern-luxury",
    "materialId": "e-walnut-glass"
  },
  "kitchen|u-kitchen|modern-minimalist|a-oak-white": {
    "imageFile": "ref_0248__kitchen__u-kitchen__modern-minimalist__a-oak-white.jpg",
    "spaceId": "kitchen",
    "cabinetId": "u-kitchen",
    "styleId": "modern-minimalist",
    "materialId": "a-oak-white"
  },
  "kitchen|u-kitchen|modern-minimalist|b-gloss-white": {
    "imageFile": "ref_0249__kitchen__u-kitchen__modern-minimalist__b-gloss-white.jpg",
    "spaceId": "kitchen",
    "cabinetId": "u-kitchen",
    "styleId": "modern-minimalist",
    "materialId": "b-gloss-white"
  },
  "kitchen|u-kitchen|modern-minimalist|d-dark-grey": {
    "imageFile": "ref_0250__kitchen__u-kitchen__modern-minimalist__d-dark-grey.jpg",
    "spaceId": "kitchen",
    "cabinetId": "u-kitchen",
    "styleId": "modern-minimalist",
    "materialId": "d-dark-grey"
  },
  "kitchen|u-kitchen|modern-minimalist|h-matte-white": {
    "imageFile": "ref_0251__kitchen__u-kitchen__modern-minimalist__h-matte-white.jpg",
    "spaceId": "kitchen",
    "cabinetId": "u-kitchen",
    "styleId": "modern-minimalist",
    "materialId": "h-matte-white"
  },
  "kitchen|u-kitchen|french-cream|c-cream-brass": {
    "imageFile": "ref_0252__kitchen__u-kitchen__french-cream__c-cream-brass.jpg",
    "spaceId": "kitchen",
    "cabinetId": "u-kitchen",
    "styleId": "french-cream",
    "materialId": "c-cream-brass"
  },
  "kitchen|u-kitchen|italian-minimal|d-dark-grey": {
    "imageFile": "ref_0253__kitchen__u-kitchen__italian-minimal__d-dark-grey.jpg",
    "spaceId": "kitchen",
    "cabinetId": "u-kitchen",
    "styleId": "italian-minimal",
    "materialId": "d-dark-grey"
  },
  "kitchen|u-kitchen|italian-minimal|h-matte-white": {
    "imageFile": "ref_0254__kitchen__u-kitchen__italian-minimal__h-matte-white.jpg",
    "spaceId": "kitchen",
    "cabinetId": "u-kitchen",
    "styleId": "italian-minimal",
    "materialId": "h-matte-white"
  },
  "kitchen|u-kitchen|japanese-wood|a-oak-white": {
    "imageFile": "ref_0255__kitchen__u-kitchen__japanese-wood__a-oak-white.jpg",
    "spaceId": "kitchen",
    "cabinetId": "u-kitchen",
    "styleId": "japanese-wood",
    "materialId": "a-oak-white"
  },
  "kitchen|u-kitchen|japanese-wood|f-cement-rattan": {
    "imageFile": "ref_0256__kitchen__u-kitchen__japanese-wood__f-cement-rattan.jpg",
    "spaceId": "kitchen",
    "cabinetId": "u-kitchen",
    "styleId": "japanese-wood",
    "materialId": "f-cement-rattan"
  },
  "kitchen|u-kitchen|modern-chinese|e-walnut-glass": {
    "imageFile": "ref_0257__kitchen__u-kitchen__modern-chinese__e-walnut-glass.jpg",
    "spaceId": "kitchen",
    "cabinetId": "u-kitchen",
    "styleId": "modern-chinese",
    "materialId": "e-walnut-glass"
  },
  "kitchen|u-kitchen|wabi-sabi|a-oak-white": {
    "imageFile": "ref_0258__kitchen__u-kitchen__wabi-sabi__a-oak-white.jpg",
    "spaceId": "kitchen",
    "cabinetId": "u-kitchen",
    "styleId": "wabi-sabi",
    "materialId": "a-oak-white"
  },
  "kitchen|u-kitchen|wabi-sabi|c-cream-brass": {
    "imageFile": "ref_0259__kitchen__u-kitchen__wabi-sabi__c-cream-brass.jpg",
    "spaceId": "kitchen",
    "cabinetId": "u-kitchen",
    "styleId": "wabi-sabi",
    "materialId": "c-cream-brass"
  },
  "kitchen|u-kitchen|wabi-sabi|f-cement-rattan": {
    "imageFile": "ref_0260__kitchen__u-kitchen__wabi-sabi__f-cement-rattan.jpg",
    "spaceId": "kitchen",
    "cabinetId": "u-kitchen",
    "styleId": "wabi-sabi",
    "materialId": "f-cement-rattan"
  },
  "kitchen|u-kitchen|american-vintage|e-walnut-glass": {
    "imageFile": "ref_0261__kitchen__u-kitchen__american-vintage__e-walnut-glass.jpg",
    "spaceId": "kitchen",
    "cabinetId": "u-kitchen",
    "styleId": "american-vintage",
    "materialId": "e-walnut-glass"
  },
  "kitchen|u-kitchen|american-vintage|g-american-white": {
    "imageFile": "ref_0262__kitchen__u-kitchen__american-vintage__g-american-white.jpg",
    "spaceId": "kitchen",
    "cabinetId": "u-kitchen",
    "styleId": "american-vintage",
    "materialId": "g-american-white"
  },
  "kitchen|u-kitchen|modern-luxury|b-gloss-white": {
    "imageFile": "ref_0263__kitchen__u-kitchen__modern-luxury__b-gloss-white.jpg",
    "spaceId": "kitchen",
    "cabinetId": "u-kitchen",
    "styleId": "modern-luxury",
    "materialId": "b-gloss-white"
  },
  "kitchen|u-kitchen|modern-luxury|c-cream-brass": {
    "imageFile": "ref_0264__kitchen__u-kitchen__modern-luxury__c-cream-brass.jpg",
    "spaceId": "kitchen",
    "cabinetId": "u-kitchen",
    "styleId": "modern-luxury",
    "materialId": "c-cream-brass"
  },
  "kitchen|u-kitchen|modern-luxury|d-dark-grey": {
    "imageFile": "ref_0265__kitchen__u-kitchen__modern-luxury__d-dark-grey.jpg",
    "spaceId": "kitchen",
    "cabinetId": "u-kitchen",
    "styleId": "modern-luxury",
    "materialId": "d-dark-grey"
  },
  "kitchen|u-kitchen|modern-luxury|e-walnut-glass": {
    "imageFile": "ref_0266__kitchen__u-kitchen__modern-luxury__e-walnut-glass.jpg",
    "spaceId": "kitchen",
    "cabinetId": "u-kitchen",
    "styleId": "modern-luxury",
    "materialId": "e-walnut-glass"
  },
  "kitchen|l-kitchen|modern-minimalist|a-oak-white": {
    "imageFile": "ref_0267__kitchen__l-kitchen__modern-minimalist__a-oak-white.jpg",
    "spaceId": "kitchen",
    "cabinetId": "l-kitchen",
    "styleId": "modern-minimalist",
    "materialId": "a-oak-white"
  },
  "kitchen|l-kitchen|modern-minimalist|b-gloss-white": {
    "imageFile": "ref_0268__kitchen__l-kitchen__modern-minimalist__b-gloss-white.jpg",
    "spaceId": "kitchen",
    "cabinetId": "l-kitchen",
    "styleId": "modern-minimalist",
    "materialId": "b-gloss-white"
  },
  "kitchen|l-kitchen|modern-minimalist|d-dark-grey": {
    "imageFile": "ref_0269__kitchen__l-kitchen__modern-minimalist__d-dark-grey.jpg",
    "spaceId": "kitchen",
    "cabinetId": "l-kitchen",
    "styleId": "modern-minimalist",
    "materialId": "d-dark-grey"
  },
  "kitchen|l-kitchen|modern-minimalist|h-matte-white": {
    "imageFile": "ref_0270__kitchen__l-kitchen__modern-minimalist__h-matte-white.jpg",
    "spaceId": "kitchen",
    "cabinetId": "l-kitchen",
    "styleId": "modern-minimalist",
    "materialId": "h-matte-white"
  },
  "kitchen|l-kitchen|french-cream|c-cream-brass": {
    "imageFile": "ref_0271__kitchen__l-kitchen__french-cream__c-cream-brass.jpg",
    "spaceId": "kitchen",
    "cabinetId": "l-kitchen",
    "styleId": "french-cream",
    "materialId": "c-cream-brass"
  },
  "kitchen|l-kitchen|italian-minimal|d-dark-grey": {
    "imageFile": "ref_0272__kitchen__l-kitchen__italian-minimal__d-dark-grey.jpg",
    "spaceId": "kitchen",
    "cabinetId": "l-kitchen",
    "styleId": "italian-minimal",
    "materialId": "d-dark-grey"
  },
  "kitchen|l-kitchen|italian-minimal|h-matte-white": {
    "imageFile": "ref_0273__kitchen__l-kitchen__italian-minimal__h-matte-white.jpg",
    "spaceId": "kitchen",
    "cabinetId": "l-kitchen",
    "styleId": "italian-minimal",
    "materialId": "h-matte-white"
  },
  "kitchen|l-kitchen|japanese-wood|a-oak-white": {
    "imageFile": "ref_0274__kitchen__l-kitchen__japanese-wood__a-oak-white.jpg",
    "spaceId": "kitchen",
    "cabinetId": "l-kitchen",
    "styleId": "japanese-wood",
    "materialId": "a-oak-white"
  },
  "kitchen|l-kitchen|japanese-wood|f-cement-rattan": {
    "imageFile": "ref_0275__kitchen__l-kitchen__japanese-wood__f-cement-rattan.jpg",
    "spaceId": "kitchen",
    "cabinetId": "l-kitchen",
    "styleId": "japanese-wood",
    "materialId": "f-cement-rattan"
  },
  "kitchen|l-kitchen|modern-chinese|e-walnut-glass": {
    "imageFile": "ref_0276__kitchen__l-kitchen__modern-chinese__e-walnut-glass.jpg",
    "spaceId": "kitchen",
    "cabinetId": "l-kitchen",
    "styleId": "modern-chinese",
    "materialId": "e-walnut-glass"
  },
  "kitchen|l-kitchen|wabi-sabi|a-oak-white": {
    "imageFile": "ref_0277__kitchen__l-kitchen__wabi-sabi__a-oak-white.jpg",
    "spaceId": "kitchen",
    "cabinetId": "l-kitchen",
    "styleId": "wabi-sabi",
    "materialId": "a-oak-white"
  },
  "kitchen|l-kitchen|wabi-sabi|c-cream-brass": {
    "imageFile": "ref_0278__kitchen__l-kitchen__wabi-sabi__c-cream-brass.jpg",
    "spaceId": "kitchen",
    "cabinetId": "l-kitchen",
    "styleId": "wabi-sabi",
    "materialId": "c-cream-brass"
  },
  "kitchen|l-kitchen|wabi-sabi|f-cement-rattan": {
    "imageFile": "ref_0279__kitchen__l-kitchen__wabi-sabi__f-cement-rattan.jpg",
    "spaceId": "kitchen",
    "cabinetId": "l-kitchen",
    "styleId": "wabi-sabi",
    "materialId": "f-cement-rattan"
  },
  "kitchen|l-kitchen|american-vintage|e-walnut-glass": {
    "imageFile": "ref_0280__kitchen__l-kitchen__american-vintage__e-walnut-glass.jpg",
    "spaceId": "kitchen",
    "cabinetId": "l-kitchen",
    "styleId": "american-vintage",
    "materialId": "e-walnut-glass"
  },
  "kitchen|l-kitchen|american-vintage|g-american-white": {
    "imageFile": "ref_0281__kitchen__l-kitchen__american-vintage__g-american-white.jpg",
    "spaceId": "kitchen",
    "cabinetId": "l-kitchen",
    "styleId": "american-vintage",
    "materialId": "g-american-white"
  },
  "kitchen|l-kitchen|modern-luxury|b-gloss-white": {
    "imageFile": "ref_0282__kitchen__l-kitchen__modern-luxury__b-gloss-white.jpg",
    "spaceId": "kitchen",
    "cabinetId": "l-kitchen",
    "styleId": "modern-luxury",
    "materialId": "b-gloss-white"
  },
  "kitchen|l-kitchen|modern-luxury|c-cream-brass": {
    "imageFile": "ref_0283__kitchen__l-kitchen__modern-luxury__c-cream-brass.jpg",
    "spaceId": "kitchen",
    "cabinetId": "l-kitchen",
    "styleId": "modern-luxury",
    "materialId": "c-cream-brass"
  },
  "kitchen|l-kitchen|modern-luxury|d-dark-grey": {
    "imageFile": "ref_0284__kitchen__l-kitchen__modern-luxury__d-dark-grey.jpg",
    "spaceId": "kitchen",
    "cabinetId": "l-kitchen",
    "styleId": "modern-luxury",
    "materialId": "d-dark-grey"
  },
  "kitchen|l-kitchen|modern-luxury|e-walnut-glass": {
    "imageFile": "ref_0285__kitchen__l-kitchen__modern-luxury__e-walnut-glass.jpg",
    "spaceId": "kitchen",
    "cabinetId": "l-kitchen",
    "styleId": "modern-luxury",
    "materialId": "e-walnut-glass"
  },
  "kitchen|i-kitchen|modern-minimalist|a-oak-white": {
    "imageFile": "ref_0286__kitchen__i-kitchen__modern-minimalist__a-oak-white.jpg",
    "spaceId": "kitchen",
    "cabinetId": "i-kitchen",
    "styleId": "modern-minimalist",
    "materialId": "a-oak-white"
  },
  "kitchen|i-kitchen|modern-minimalist|b-gloss-white": {
    "imageFile": "ref_0287__kitchen__i-kitchen__modern-minimalist__b-gloss-white.jpg",
    "spaceId": "kitchen",
    "cabinetId": "i-kitchen",
    "styleId": "modern-minimalist",
    "materialId": "b-gloss-white"
  },
  "kitchen|i-kitchen|modern-minimalist|d-dark-grey": {
    "imageFile": "ref_0288__kitchen__i-kitchen__modern-minimalist__d-dark-grey.jpg",
    "spaceId": "kitchen",
    "cabinetId": "i-kitchen",
    "styleId": "modern-minimalist",
    "materialId": "d-dark-grey"
  },
  "kitchen|i-kitchen|modern-minimalist|h-matte-white": {
    "imageFile": "ref_0289__kitchen__i-kitchen__modern-minimalist__h-matte-white.jpg",
    "spaceId": "kitchen",
    "cabinetId": "i-kitchen",
    "styleId": "modern-minimalist",
    "materialId": "h-matte-white"
  },
  "kitchen|i-kitchen|french-cream|c-cream-brass": {
    "imageFile": "ref_0290__kitchen__i-kitchen__french-cream__c-cream-brass.jpg",
    "spaceId": "kitchen",
    "cabinetId": "i-kitchen",
    "styleId": "french-cream",
    "materialId": "c-cream-brass"
  },
  "kitchen|i-kitchen|italian-minimal|d-dark-grey": {
    "imageFile": "ref_0291__kitchen__i-kitchen__italian-minimal__d-dark-grey.jpg",
    "spaceId": "kitchen",
    "cabinetId": "i-kitchen",
    "styleId": "italian-minimal",
    "materialId": "d-dark-grey"
  },
  "kitchen|i-kitchen|italian-minimal|h-matte-white": {
    "imageFile": "ref_0292__kitchen__i-kitchen__italian-minimal__h-matte-white.jpg",
    "spaceId": "kitchen",
    "cabinetId": "i-kitchen",
    "styleId": "italian-minimal",
    "materialId": "h-matte-white"
  },
  "kitchen|i-kitchen|japanese-wood|a-oak-white": {
    "imageFile": "ref_0293__kitchen__i-kitchen__japanese-wood__a-oak-white.jpg",
    "spaceId": "kitchen",
    "cabinetId": "i-kitchen",
    "styleId": "japanese-wood",
    "materialId": "a-oak-white"
  },
  "kitchen|i-kitchen|japanese-wood|f-cement-rattan": {
    "imageFile": "ref_0294__kitchen__i-kitchen__japanese-wood__f-cement-rattan.jpg",
    "spaceId": "kitchen",
    "cabinetId": "i-kitchen",
    "styleId": "japanese-wood",
    "materialId": "f-cement-rattan"
  },
  "kitchen|i-kitchen|modern-chinese|e-walnut-glass": {
    "imageFile": "ref_0295__kitchen__i-kitchen__modern-chinese__e-walnut-glass.jpg",
    "spaceId": "kitchen",
    "cabinetId": "i-kitchen",
    "styleId": "modern-chinese",
    "materialId": "e-walnut-glass"
  },
  "kitchen|i-kitchen|wabi-sabi|a-oak-white": {
    "imageFile": "ref_0296__kitchen__i-kitchen__wabi-sabi__a-oak-white.jpg",
    "spaceId": "kitchen",
    "cabinetId": "i-kitchen",
    "styleId": "wabi-sabi",
    "materialId": "a-oak-white"
  },
  "kitchen|i-kitchen|wabi-sabi|c-cream-brass": {
    "imageFile": "ref_0297__kitchen__i-kitchen__wabi-sabi__c-cream-brass.jpg",
    "spaceId": "kitchen",
    "cabinetId": "i-kitchen",
    "styleId": "wabi-sabi",
    "materialId": "c-cream-brass"
  },
  "kitchen|i-kitchen|wabi-sabi|f-cement-rattan": {
    "imageFile": "ref_0298__kitchen__i-kitchen__wabi-sabi__f-cement-rattan.jpg",
    "spaceId": "kitchen",
    "cabinetId": "i-kitchen",
    "styleId": "wabi-sabi",
    "materialId": "f-cement-rattan"
  },
  "kitchen|i-kitchen|american-vintage|e-walnut-glass": {
    "imageFile": "ref_0299__kitchen__i-kitchen__american-vintage__e-walnut-glass.jpg",
    "spaceId": "kitchen",
    "cabinetId": "i-kitchen",
    "styleId": "american-vintage",
    "materialId": "e-walnut-glass"
  },
  "kitchen|i-kitchen|american-vintage|g-american-white": {
    "imageFile": "ref_0300__kitchen__i-kitchen__american-vintage__g-american-white.jpg",
    "spaceId": "kitchen",
    "cabinetId": "i-kitchen",
    "styleId": "american-vintage",
    "materialId": "g-american-white"
  },
  "kitchen|i-kitchen|modern-luxury|b-gloss-white": {
    "imageFile": "ref_0301__kitchen__i-kitchen__modern-luxury__b-gloss-white.jpg",
    "spaceId": "kitchen",
    "cabinetId": "i-kitchen",
    "styleId": "modern-luxury",
    "materialId": "b-gloss-white"
  },
  "kitchen|i-kitchen|modern-luxury|c-cream-brass": {
    "imageFile": "ref_0302__kitchen__i-kitchen__modern-luxury__c-cream-brass.jpg",
    "spaceId": "kitchen",
    "cabinetId": "i-kitchen",
    "styleId": "modern-luxury",
    "materialId": "c-cream-brass"
  },
  "kitchen|i-kitchen|modern-luxury|d-dark-grey": {
    "imageFile": "ref_0303__kitchen__i-kitchen__modern-luxury__d-dark-grey.jpg",
    "spaceId": "kitchen",
    "cabinetId": "i-kitchen",
    "styleId": "modern-luxury",
    "materialId": "d-dark-grey"
  },
  "kitchen|i-kitchen|modern-luxury|e-walnut-glass": {
    "imageFile": "ref_0304__kitchen__i-kitchen__modern-luxury__e-walnut-glass.jpg",
    "spaceId": "kitchen",
    "cabinetId": "i-kitchen",
    "styleId": "modern-luxury",
    "materialId": "e-walnut-glass"
  },
  "kitchen|island|modern-minimalist|a-oak-white": {
    "imageFile": "ref_0305__kitchen__island__modern-minimalist__a-oak-white.jpg",
    "spaceId": "kitchen",
    "cabinetId": "island",
    "styleId": "modern-minimalist",
    "materialId": "a-oak-white"
  },
  "kitchen|island|modern-minimalist|b-gloss-white": {
    "imageFile": "ref_0306__kitchen__island__modern-minimalist__b-gloss-white.jpg",
    "spaceId": "kitchen",
    "cabinetId": "island",
    "styleId": "modern-minimalist",
    "materialId": "b-gloss-white"
  },
  "kitchen|island|modern-minimalist|d-dark-grey": {
    "imageFile": "ref_0307__kitchen__island__modern-minimalist__d-dark-grey.jpg",
    "spaceId": "kitchen",
    "cabinetId": "island",
    "styleId": "modern-minimalist",
    "materialId": "d-dark-grey"
  },
  "kitchen|island|modern-minimalist|h-matte-white": {
    "imageFile": "ref_0308__kitchen__island__modern-minimalist__h-matte-white.jpg",
    "spaceId": "kitchen",
    "cabinetId": "island",
    "styleId": "modern-minimalist",
    "materialId": "h-matte-white"
  },
  "kitchen|island|french-cream|c-cream-brass": {
    "imageFile": "ref_0309__kitchen__island__french-cream__c-cream-brass.jpg",
    "spaceId": "kitchen",
    "cabinetId": "island",
    "styleId": "french-cream",
    "materialId": "c-cream-brass"
  },
  "kitchen|island|italian-minimal|d-dark-grey": {
    "imageFile": "ref_0310__kitchen__island__italian-minimal__d-dark-grey.jpg",
    "spaceId": "kitchen",
    "cabinetId": "island",
    "styleId": "italian-minimal",
    "materialId": "d-dark-grey"
  },
  "kitchen|island|italian-minimal|h-matte-white": {
    "imageFile": "ref_0311__kitchen__island__italian-minimal__h-matte-white.jpg",
    "spaceId": "kitchen",
    "cabinetId": "island",
    "styleId": "italian-minimal",
    "materialId": "h-matte-white"
  },
  "kitchen|island|japanese-wood|a-oak-white": {
    "imageFile": "ref_0312__kitchen__island__japanese-wood__a-oak-white.jpg",
    "spaceId": "kitchen",
    "cabinetId": "island",
    "styleId": "japanese-wood",
    "materialId": "a-oak-white"
  },
  "kitchen|island|japanese-wood|f-cement-rattan": {
    "imageFile": "ref_0313__kitchen__island__japanese-wood__f-cement-rattan.jpg",
    "spaceId": "kitchen",
    "cabinetId": "island",
    "styleId": "japanese-wood",
    "materialId": "f-cement-rattan"
  },
  "kitchen|island|modern-chinese|e-walnut-glass": {
    "imageFile": "ref_0314__kitchen__island__modern-chinese__e-walnut-glass.jpg",
    "spaceId": "kitchen",
    "cabinetId": "island",
    "styleId": "modern-chinese",
    "materialId": "e-walnut-glass"
  },
  "kitchen|island|wabi-sabi|a-oak-white": {
    "imageFile": "ref_0315__kitchen__island__wabi-sabi__a-oak-white.jpg",
    "spaceId": "kitchen",
    "cabinetId": "island",
    "styleId": "wabi-sabi",
    "materialId": "a-oak-white"
  },
  "kitchen|island|wabi-sabi|c-cream-brass": {
    "imageFile": "ref_0316__kitchen__island__wabi-sabi__c-cream-brass.jpg",
    "spaceId": "kitchen",
    "cabinetId": "island",
    "styleId": "wabi-sabi",
    "materialId": "c-cream-brass"
  },
  "kitchen|island|wabi-sabi|f-cement-rattan": {
    "imageFile": "ref_0317__kitchen__island__wabi-sabi__f-cement-rattan.jpg",
    "spaceId": "kitchen",
    "cabinetId": "island",
    "styleId": "wabi-sabi",
    "materialId": "f-cement-rattan"
  },
  "kitchen|island|american-vintage|e-walnut-glass": {
    "imageFile": "ref_0318__kitchen__island__american-vintage__e-walnut-glass.jpg",
    "spaceId": "kitchen",
    "cabinetId": "island",
    "styleId": "american-vintage",
    "materialId": "e-walnut-glass"
  },
  "kitchen|island|american-vintage|g-american-white": {
    "imageFile": "ref_0319__kitchen__island__american-vintage__g-american-white.jpg",
    "spaceId": "kitchen",
    "cabinetId": "island",
    "styleId": "american-vintage",
    "materialId": "g-american-white"
  },
  "kitchen|island|modern-luxury|b-gloss-white": {
    "imageFile": "ref_0320__kitchen__island__modern-luxury__b-gloss-white.jpg",
    "spaceId": "kitchen",
    "cabinetId": "island",
    "styleId": "modern-luxury",
    "materialId": "b-gloss-white"
  },
  "kitchen|island|modern-luxury|c-cream-brass": {
    "imageFile": "ref_0321__kitchen__island__modern-luxury__c-cream-brass.jpg",
    "spaceId": "kitchen",
    "cabinetId": "island",
    "styleId": "modern-luxury",
    "materialId": "c-cream-brass"
  },
  "kitchen|island|modern-luxury|d-dark-grey": {
    "imageFile": "ref_0322__kitchen__island__modern-luxury__d-dark-grey.jpg",
    "spaceId": "kitchen",
    "cabinetId": "island",
    "styleId": "modern-luxury",
    "materialId": "d-dark-grey"
  },
  "kitchen|island|modern-luxury|e-walnut-glass": {
    "imageFile": "ref_0323__kitchen__island__modern-luxury__e-walnut-glass.jpg",
    "spaceId": "kitchen",
    "cabinetId": "island",
    "styleId": "modern-luxury",
    "materialId": "e-walnut-glass"
  },
  "enclosed-kitchen|u-kitchen|modern-minimalist|a-oak-white": {
    "imageFile": "ref_0324__enclosed-kitchen__u-kitchen__modern-minimalist__a-oak-white.jpg",
    "spaceId": "enclosed-kitchen",
    "cabinetId": "u-kitchen",
    "styleId": "modern-minimalist",
    "materialId": "a-oak-white"
  },
  "enclosed-kitchen|u-kitchen|modern-minimalist|b-gloss-white": {
    "imageFile": "ref_0325__enclosed-kitchen__u-kitchen__modern-minimalist__b-gloss-white.jpg",
    "spaceId": "enclosed-kitchen",
    "cabinetId": "u-kitchen",
    "styleId": "modern-minimalist",
    "materialId": "b-gloss-white"
  },
  "enclosed-kitchen|u-kitchen|modern-minimalist|d-dark-grey": {
    "imageFile": "ref_0326__enclosed-kitchen__u-kitchen__modern-minimalist__d-dark-grey.jpg",
    "spaceId": "enclosed-kitchen",
    "cabinetId": "u-kitchen",
    "styleId": "modern-minimalist",
    "materialId": "d-dark-grey"
  },
  "enclosed-kitchen|u-kitchen|modern-minimalist|h-matte-white": {
    "imageFile": "ref_0327__enclosed-kitchen__u-kitchen__modern-minimalist__h-matte-white.jpg",
    "spaceId": "enclosed-kitchen",
    "cabinetId": "u-kitchen",
    "styleId": "modern-minimalist",
    "materialId": "h-matte-white"
  },
  "enclosed-kitchen|u-kitchen|french-cream|c-cream-brass": {
    "imageFile": "ref_0328__enclosed-kitchen__u-kitchen__french-cream__c-cream-brass.jpg",
    "spaceId": "enclosed-kitchen",
    "cabinetId": "u-kitchen",
    "styleId": "french-cream",
    "materialId": "c-cream-brass"
  },
  "enclosed-kitchen|u-kitchen|italian-minimal|d-dark-grey": {
    "imageFile": "ref_0329__enclosed-kitchen__u-kitchen__italian-minimal__d-dark-grey.jpg",
    "spaceId": "enclosed-kitchen",
    "cabinetId": "u-kitchen",
    "styleId": "italian-minimal",
    "materialId": "d-dark-grey"
  },
  "enclosed-kitchen|u-kitchen|italian-minimal|h-matte-white": {
    "imageFile": "ref_0330__enclosed-kitchen__u-kitchen__italian-minimal__h-matte-white.jpg",
    "spaceId": "enclosed-kitchen",
    "cabinetId": "u-kitchen",
    "styleId": "italian-minimal",
    "materialId": "h-matte-white"
  },
  "enclosed-kitchen|u-kitchen|japanese-wood|a-oak-white": {
    "imageFile": "ref_0331__enclosed-kitchen__u-kitchen__japanese-wood__a-oak-white.jpg",
    "spaceId": "enclosed-kitchen",
    "cabinetId": "u-kitchen",
    "styleId": "japanese-wood",
    "materialId": "a-oak-white"
  },
  "enclosed-kitchen|u-kitchen|japanese-wood|f-cement-rattan": {
    "imageFile": "ref_0332__enclosed-kitchen__u-kitchen__japanese-wood__f-cement-rattan.jpg",
    "spaceId": "enclosed-kitchen",
    "cabinetId": "u-kitchen",
    "styleId": "japanese-wood",
    "materialId": "f-cement-rattan"
  },
  "enclosed-kitchen|u-kitchen|modern-chinese|e-walnut-glass": {
    "imageFile": "ref_0333__enclosed-kitchen__u-kitchen__modern-chinese__e-walnut-glass.jpg",
    "spaceId": "enclosed-kitchen",
    "cabinetId": "u-kitchen",
    "styleId": "modern-chinese",
    "materialId": "e-walnut-glass"
  },
  "enclosed-kitchen|u-kitchen|wabi-sabi|a-oak-white": {
    "imageFile": "ref_0334__enclosed-kitchen__u-kitchen__wabi-sabi__a-oak-white.jpg",
    "spaceId": "enclosed-kitchen",
    "cabinetId": "u-kitchen",
    "styleId": "wabi-sabi",
    "materialId": "a-oak-white"
  },
  "enclosed-kitchen|u-kitchen|wabi-sabi|c-cream-brass": {
    "imageFile": "ref_0335__enclosed-kitchen__u-kitchen__wabi-sabi__c-cream-brass.jpg",
    "spaceId": "enclosed-kitchen",
    "cabinetId": "u-kitchen",
    "styleId": "wabi-sabi",
    "materialId": "c-cream-brass"
  },
  "enclosed-kitchen|u-kitchen|wabi-sabi|f-cement-rattan": {
    "imageFile": "ref_0336__enclosed-kitchen__u-kitchen__wabi-sabi__f-cement-rattan.jpg",
    "spaceId": "enclosed-kitchen",
    "cabinetId": "u-kitchen",
    "styleId": "wabi-sabi",
    "materialId": "f-cement-rattan"
  },
  "enclosed-kitchen|u-kitchen|american-vintage|e-walnut-glass": {
    "imageFile": "ref_0337__enclosed-kitchen__u-kitchen__american-vintage__e-walnut-glass.jpg",
    "spaceId": "enclosed-kitchen",
    "cabinetId": "u-kitchen",
    "styleId": "american-vintage",
    "materialId": "e-walnut-glass"
  },
  "enclosed-kitchen|u-kitchen|american-vintage|g-american-white": {
    "imageFile": "ref_0338__enclosed-kitchen__u-kitchen__american-vintage__g-american-white.jpg",
    "spaceId": "enclosed-kitchen",
    "cabinetId": "u-kitchen",
    "styleId": "american-vintage",
    "materialId": "g-american-white"
  },
  "enclosed-kitchen|u-kitchen|modern-luxury|b-gloss-white": {
    "imageFile": "ref_0339__enclosed-kitchen__u-kitchen__modern-luxury__b-gloss-white.jpg",
    "spaceId": "enclosed-kitchen",
    "cabinetId": "u-kitchen",
    "styleId": "modern-luxury",
    "materialId": "b-gloss-white"
  },
  "enclosed-kitchen|u-kitchen|modern-luxury|c-cream-brass": {
    "imageFile": "ref_0340__enclosed-kitchen__u-kitchen__modern-luxury__c-cream-brass.jpg",
    "spaceId": "enclosed-kitchen",
    "cabinetId": "u-kitchen",
    "styleId": "modern-luxury",
    "materialId": "c-cream-brass"
  },
  "enclosed-kitchen|u-kitchen|modern-luxury|d-dark-grey": {
    "imageFile": "ref_0341__enclosed-kitchen__u-kitchen__modern-luxury__d-dark-grey.jpg",
    "spaceId": "enclosed-kitchen",
    "cabinetId": "u-kitchen",
    "styleId": "modern-luxury",
    "materialId": "d-dark-grey"
  },
  "enclosed-kitchen|u-kitchen|modern-luxury|e-walnut-glass": {
    "imageFile": "ref_0342__enclosed-kitchen__u-kitchen__modern-luxury__e-walnut-glass.jpg",
    "spaceId": "enclosed-kitchen",
    "cabinetId": "u-kitchen",
    "styleId": "modern-luxury",
    "materialId": "e-walnut-glass"
  },
  "enclosed-kitchen|l-kitchen|modern-minimalist|a-oak-white": {
    "imageFile": "ref_0343__enclosed-kitchen__l-kitchen__modern-minimalist__a-oak-white.jpg",
    "spaceId": "enclosed-kitchen",
    "cabinetId": "l-kitchen",
    "styleId": "modern-minimalist",
    "materialId": "a-oak-white"
  },
  "enclosed-kitchen|l-kitchen|modern-minimalist|b-gloss-white": {
    "imageFile": "ref_0344__enclosed-kitchen__l-kitchen__modern-minimalist__b-gloss-white.jpg",
    "spaceId": "enclosed-kitchen",
    "cabinetId": "l-kitchen",
    "styleId": "modern-minimalist",
    "materialId": "b-gloss-white"
  },
  "enclosed-kitchen|l-kitchen|modern-minimalist|d-dark-grey": {
    "imageFile": "ref_0345__enclosed-kitchen__l-kitchen__modern-minimalist__d-dark-grey.jpg",
    "spaceId": "enclosed-kitchen",
    "cabinetId": "l-kitchen",
    "styleId": "modern-minimalist",
    "materialId": "d-dark-grey"
  },
  "enclosed-kitchen|l-kitchen|modern-minimalist|h-matte-white": {
    "imageFile": "ref_0346__enclosed-kitchen__l-kitchen__modern-minimalist__h-matte-white.jpg",
    "spaceId": "enclosed-kitchen",
    "cabinetId": "l-kitchen",
    "styleId": "modern-minimalist",
    "materialId": "h-matte-white"
  },
  "enclosed-kitchen|l-kitchen|french-cream|c-cream-brass": {
    "imageFile": "ref_0347__enclosed-kitchen__l-kitchen__french-cream__c-cream-brass.jpg",
    "spaceId": "enclosed-kitchen",
    "cabinetId": "l-kitchen",
    "styleId": "french-cream",
    "materialId": "c-cream-brass"
  },
  "enclosed-kitchen|l-kitchen|italian-minimal|d-dark-grey": {
    "imageFile": "ref_0348__enclosed-kitchen__l-kitchen__italian-minimal__d-dark-grey.jpg",
    "spaceId": "enclosed-kitchen",
    "cabinetId": "l-kitchen",
    "styleId": "italian-minimal",
    "materialId": "d-dark-grey"
  },
  "enclosed-kitchen|l-kitchen|italian-minimal|h-matte-white": {
    "imageFile": "ref_0349__enclosed-kitchen__l-kitchen__italian-minimal__h-matte-white.jpg",
    "spaceId": "enclosed-kitchen",
    "cabinetId": "l-kitchen",
    "styleId": "italian-minimal",
    "materialId": "h-matte-white"
  },
  "enclosed-kitchen|l-kitchen|japanese-wood|a-oak-white": {
    "imageFile": "ref_0350__enclosed-kitchen__l-kitchen__japanese-wood__a-oak-white.jpg",
    "spaceId": "enclosed-kitchen",
    "cabinetId": "l-kitchen",
    "styleId": "japanese-wood",
    "materialId": "a-oak-white"
  },
  "enclosed-kitchen|l-kitchen|japanese-wood|f-cement-rattan": {
    "imageFile": "ref_0351__enclosed-kitchen__l-kitchen__japanese-wood__f-cement-rattan.jpg",
    "spaceId": "enclosed-kitchen",
    "cabinetId": "l-kitchen",
    "styleId": "japanese-wood",
    "materialId": "f-cement-rattan"
  },
  "enclosed-kitchen|l-kitchen|modern-chinese|e-walnut-glass": {
    "imageFile": "ref_0352__enclosed-kitchen__l-kitchen__modern-chinese__e-walnut-glass.jpg",
    "spaceId": "enclosed-kitchen",
    "cabinetId": "l-kitchen",
    "styleId": "modern-chinese",
    "materialId": "e-walnut-glass"
  },
  "enclosed-kitchen|l-kitchen|wabi-sabi|a-oak-white": {
    "imageFile": "ref_0353__enclosed-kitchen__l-kitchen__wabi-sabi__a-oak-white.jpg",
    "spaceId": "enclosed-kitchen",
    "cabinetId": "l-kitchen",
    "styleId": "wabi-sabi",
    "materialId": "a-oak-white"
  },
  "enclosed-kitchen|l-kitchen|wabi-sabi|c-cream-brass": {
    "imageFile": "ref_0354__enclosed-kitchen__l-kitchen__wabi-sabi__c-cream-brass.jpg",
    "spaceId": "enclosed-kitchen",
    "cabinetId": "l-kitchen",
    "styleId": "wabi-sabi",
    "materialId": "c-cream-brass"
  },
  "enclosed-kitchen|l-kitchen|wabi-sabi|f-cement-rattan": {
    "imageFile": "ref_0355__enclosed-kitchen__l-kitchen__wabi-sabi__f-cement-rattan.jpg",
    "spaceId": "enclosed-kitchen",
    "cabinetId": "l-kitchen",
    "styleId": "wabi-sabi",
    "materialId": "f-cement-rattan"
  },
  "enclosed-kitchen|l-kitchen|american-vintage|e-walnut-glass": {
    "imageFile": "ref_0356__enclosed-kitchen__l-kitchen__american-vintage__e-walnut-glass.jpg",
    "spaceId": "enclosed-kitchen",
    "cabinetId": "l-kitchen",
    "styleId": "american-vintage",
    "materialId": "e-walnut-glass"
  },
  "enclosed-kitchen|l-kitchen|american-vintage|g-american-white": {
    "imageFile": "ref_0357__enclosed-kitchen__l-kitchen__american-vintage__g-american-white.jpg",
    "spaceId": "enclosed-kitchen",
    "cabinetId": "l-kitchen",
    "styleId": "american-vintage",
    "materialId": "g-american-white"
  },
  "enclosed-kitchen|l-kitchen|modern-luxury|b-gloss-white": {
    "imageFile": "ref_0358__enclosed-kitchen__l-kitchen__modern-luxury__b-gloss-white.jpg",
    "spaceId": "enclosed-kitchen",
    "cabinetId": "l-kitchen",
    "styleId": "modern-luxury",
    "materialId": "b-gloss-white"
  },
  "enclosed-kitchen|l-kitchen|modern-luxury|c-cream-brass": {
    "imageFile": "ref_0359__enclosed-kitchen__l-kitchen__modern-luxury__c-cream-brass.jpg",
    "spaceId": "enclosed-kitchen",
    "cabinetId": "l-kitchen",
    "styleId": "modern-luxury",
    "materialId": "c-cream-brass"
  },
  "enclosed-kitchen|l-kitchen|modern-luxury|d-dark-grey": {
    "imageFile": "ref_0360__enclosed-kitchen__l-kitchen__modern-luxury__d-dark-grey.jpg",
    "spaceId": "enclosed-kitchen",
    "cabinetId": "l-kitchen",
    "styleId": "modern-luxury",
    "materialId": "d-dark-grey"
  },
  "enclosed-kitchen|l-kitchen|modern-luxury|e-walnut-glass": {
    "imageFile": "ref_0361__enclosed-kitchen__l-kitchen__modern-luxury__e-walnut-glass.jpg",
    "spaceId": "enclosed-kitchen",
    "cabinetId": "l-kitchen",
    "styleId": "modern-luxury",
    "materialId": "e-walnut-glass"
  },
  "enclosed-kitchen|i-kitchen|modern-minimalist|a-oak-white": {
    "imageFile": "ref_0362__enclosed-kitchen__i-kitchen__modern-minimalist__a-oak-white.jpg",
    "spaceId": "enclosed-kitchen",
    "cabinetId": "i-kitchen",
    "styleId": "modern-minimalist",
    "materialId": "a-oak-white"
  },
  "enclosed-kitchen|i-kitchen|modern-minimalist|b-gloss-white": {
    "imageFile": "ref_0363__enclosed-kitchen__i-kitchen__modern-minimalist__b-gloss-white.jpg",
    "spaceId": "enclosed-kitchen",
    "cabinetId": "i-kitchen",
    "styleId": "modern-minimalist",
    "materialId": "b-gloss-white"
  },
  "enclosed-kitchen|i-kitchen|modern-minimalist|d-dark-grey": {
    "imageFile": "ref_0364__enclosed-kitchen__i-kitchen__modern-minimalist__d-dark-grey.jpg",
    "spaceId": "enclosed-kitchen",
    "cabinetId": "i-kitchen",
    "styleId": "modern-minimalist",
    "materialId": "d-dark-grey"
  },
  "enclosed-kitchen|i-kitchen|modern-minimalist|h-matte-white": {
    "imageFile": "ref_0365__enclosed-kitchen__i-kitchen__modern-minimalist__h-matte-white.jpg",
    "spaceId": "enclosed-kitchen",
    "cabinetId": "i-kitchen",
    "styleId": "modern-minimalist",
    "materialId": "h-matte-white"
  },
  "enclosed-kitchen|i-kitchen|french-cream|c-cream-brass": {
    "imageFile": "ref_0366__enclosed-kitchen__i-kitchen__french-cream__c-cream-brass.jpg",
    "spaceId": "enclosed-kitchen",
    "cabinetId": "i-kitchen",
    "styleId": "french-cream",
    "materialId": "c-cream-brass"
  },
  "enclosed-kitchen|i-kitchen|italian-minimal|d-dark-grey": {
    "imageFile": "ref_0367__enclosed-kitchen__i-kitchen__italian-minimal__d-dark-grey.jpg",
    "spaceId": "enclosed-kitchen",
    "cabinetId": "i-kitchen",
    "styleId": "italian-minimal",
    "materialId": "d-dark-grey"
  },
  "enclosed-kitchen|i-kitchen|italian-minimal|h-matte-white": {
    "imageFile": "ref_0368__enclosed-kitchen__i-kitchen__italian-minimal__h-matte-white.jpg",
    "spaceId": "enclosed-kitchen",
    "cabinetId": "i-kitchen",
    "styleId": "italian-minimal",
    "materialId": "h-matte-white"
  },
  "enclosed-kitchen|i-kitchen|japanese-wood|a-oak-white": {
    "imageFile": "ref_0369__enclosed-kitchen__i-kitchen__japanese-wood__a-oak-white.jpg",
    "spaceId": "enclosed-kitchen",
    "cabinetId": "i-kitchen",
    "styleId": "japanese-wood",
    "materialId": "a-oak-white"
  },
  "enclosed-kitchen|i-kitchen|japanese-wood|f-cement-rattan": {
    "imageFile": "ref_0370__enclosed-kitchen__i-kitchen__japanese-wood__f-cement-rattan.jpg",
    "spaceId": "enclosed-kitchen",
    "cabinetId": "i-kitchen",
    "styleId": "japanese-wood",
    "materialId": "f-cement-rattan"
  },
  "enclosed-kitchen|i-kitchen|modern-chinese|e-walnut-glass": {
    "imageFile": "ref_0371__enclosed-kitchen__i-kitchen__modern-chinese__e-walnut-glass.jpg",
    "spaceId": "enclosed-kitchen",
    "cabinetId": "i-kitchen",
    "styleId": "modern-chinese",
    "materialId": "e-walnut-glass"
  },
  "enclosed-kitchen|i-kitchen|wabi-sabi|a-oak-white": {
    "imageFile": "ref_0372__enclosed-kitchen__i-kitchen__wabi-sabi__a-oak-white.jpg",
    "spaceId": "enclosed-kitchen",
    "cabinetId": "i-kitchen",
    "styleId": "wabi-sabi",
    "materialId": "a-oak-white"
  },
  "enclosed-kitchen|i-kitchen|wabi-sabi|c-cream-brass": {
    "imageFile": "ref_0373__enclosed-kitchen__i-kitchen__wabi-sabi__c-cream-brass.jpg",
    "spaceId": "enclosed-kitchen",
    "cabinetId": "i-kitchen",
    "styleId": "wabi-sabi",
    "materialId": "c-cream-brass"
  },
  "enclosed-kitchen|i-kitchen|wabi-sabi|f-cement-rattan": {
    "imageFile": "ref_0374__enclosed-kitchen__i-kitchen__wabi-sabi__f-cement-rattan.jpg",
    "spaceId": "enclosed-kitchen",
    "cabinetId": "i-kitchen",
    "styleId": "wabi-sabi",
    "materialId": "f-cement-rattan"
  },
  "enclosed-kitchen|i-kitchen|american-vintage|e-walnut-glass": {
    "imageFile": "ref_0375__enclosed-kitchen__i-kitchen__american-vintage__e-walnut-glass.jpg",
    "spaceId": "enclosed-kitchen",
    "cabinetId": "i-kitchen",
    "styleId": "american-vintage",
    "materialId": "e-walnut-glass"
  },
  "enclosed-kitchen|i-kitchen|american-vintage|g-american-white": {
    "imageFile": "ref_0376__enclosed-kitchen__i-kitchen__american-vintage__g-american-white.jpg",
    "spaceId": "enclosed-kitchen",
    "cabinetId": "i-kitchen",
    "styleId": "american-vintage",
    "materialId": "g-american-white"
  },
  "enclosed-kitchen|i-kitchen|modern-luxury|b-gloss-white": {
    "imageFile": "ref_0377__enclosed-kitchen__i-kitchen__modern-luxury__b-gloss-white.jpg",
    "spaceId": "enclosed-kitchen",
    "cabinetId": "i-kitchen",
    "styleId": "modern-luxury",
    "materialId": "b-gloss-white"
  },
  "enclosed-kitchen|i-kitchen|modern-luxury|c-cream-brass": {
    "imageFile": "ref_0378__enclosed-kitchen__i-kitchen__modern-luxury__c-cream-brass.jpg",
    "spaceId": "enclosed-kitchen",
    "cabinetId": "i-kitchen",
    "styleId": "modern-luxury",
    "materialId": "c-cream-brass"
  },
  "enclosed-kitchen|i-kitchen|modern-luxury|d-dark-grey": {
    "imageFile": "ref_0379__enclosed-kitchen__i-kitchen__modern-luxury__d-dark-grey.jpg",
    "spaceId": "enclosed-kitchen",
    "cabinetId": "i-kitchen",
    "styleId": "modern-luxury",
    "materialId": "d-dark-grey"
  },
  "enclosed-kitchen|i-kitchen|modern-luxury|e-walnut-glass": {
    "imageFile": "ref_0380__enclosed-kitchen__i-kitchen__modern-luxury__e-walnut-glass.jpg",
    "spaceId": "enclosed-kitchen",
    "cabinetId": "i-kitchen",
    "styleId": "modern-luxury",
    "materialId": "e-walnut-glass"
  },
  "semi-enclosed-kitchen|u-kitchen|modern-minimalist|a-oak-white": {
    "imageFile": "ref_0381__semi-enclosed-kitchen__u-kitchen__modern-minimalist__a-oak-white.jpg",
    "spaceId": "semi-enclosed-kitchen",
    "cabinetId": "u-kitchen",
    "styleId": "modern-minimalist",
    "materialId": "a-oak-white"
  },
  "semi-enclosed-kitchen|u-kitchen|modern-minimalist|b-gloss-white": {
    "imageFile": "ref_0382__semi-enclosed-kitchen__u-kitchen__modern-minimalist__b-gloss-white.jpg",
    "spaceId": "semi-enclosed-kitchen",
    "cabinetId": "u-kitchen",
    "styleId": "modern-minimalist",
    "materialId": "b-gloss-white"
  },
  "semi-enclosed-kitchen|u-kitchen|modern-minimalist|d-dark-grey": {
    "imageFile": "ref_0383__semi-enclosed-kitchen__u-kitchen__modern-minimalist__d-dark-grey.jpg",
    "spaceId": "semi-enclosed-kitchen",
    "cabinetId": "u-kitchen",
    "styleId": "modern-minimalist",
    "materialId": "d-dark-grey"
  },
  "semi-enclosed-kitchen|u-kitchen|modern-minimalist|h-matte-white": {
    "imageFile": "ref_0384__semi-enclosed-kitchen__u-kitchen__modern-minimalist__h-matte-white.jpg",
    "spaceId": "semi-enclosed-kitchen",
    "cabinetId": "u-kitchen",
    "styleId": "modern-minimalist",
    "materialId": "h-matte-white"
  },
  "semi-enclosed-kitchen|u-kitchen|french-cream|c-cream-brass": {
    "imageFile": "ref_0385__semi-enclosed-kitchen__u-kitchen__french-cream__c-cream-brass.jpg",
    "spaceId": "semi-enclosed-kitchen",
    "cabinetId": "u-kitchen",
    "styleId": "french-cream",
    "materialId": "c-cream-brass"
  },
  "semi-enclosed-kitchen|u-kitchen|italian-minimal|d-dark-grey": {
    "imageFile": "ref_0386__semi-enclosed-kitchen__u-kitchen__italian-minimal__d-dark-grey.jpg",
    "spaceId": "semi-enclosed-kitchen",
    "cabinetId": "u-kitchen",
    "styleId": "italian-minimal",
    "materialId": "d-dark-grey"
  },
  "semi-enclosed-kitchen|u-kitchen|italian-minimal|h-matte-white": {
    "imageFile": "ref_0387__semi-enclosed-kitchen__u-kitchen__italian-minimal__h-matte-white.jpg",
    "spaceId": "semi-enclosed-kitchen",
    "cabinetId": "u-kitchen",
    "styleId": "italian-minimal",
    "materialId": "h-matte-white"
  },
  "semi-enclosed-kitchen|u-kitchen|japanese-wood|a-oak-white": {
    "imageFile": "ref_0388__semi-enclosed-kitchen__u-kitchen__japanese-wood__a-oak-white.jpg",
    "spaceId": "semi-enclosed-kitchen",
    "cabinetId": "u-kitchen",
    "styleId": "japanese-wood",
    "materialId": "a-oak-white"
  },
  "semi-enclosed-kitchen|u-kitchen|japanese-wood|f-cement-rattan": {
    "imageFile": "ref_0389__semi-enclosed-kitchen__u-kitchen__japanese-wood__f-cement-rattan.jpg",
    "spaceId": "semi-enclosed-kitchen",
    "cabinetId": "u-kitchen",
    "styleId": "japanese-wood",
    "materialId": "f-cement-rattan"
  },
  "semi-enclosed-kitchen|u-kitchen|modern-chinese|e-walnut-glass": {
    "imageFile": "ref_0390__semi-enclosed-kitchen__u-kitchen__modern-chinese__e-walnut-glass.jpg",
    "spaceId": "semi-enclosed-kitchen",
    "cabinetId": "u-kitchen",
    "styleId": "modern-chinese",
    "materialId": "e-walnut-glass"
  },
  "semi-enclosed-kitchen|u-kitchen|wabi-sabi|a-oak-white": {
    "imageFile": "ref_0391__semi-enclosed-kitchen__u-kitchen__wabi-sabi__a-oak-white.jpg",
    "spaceId": "semi-enclosed-kitchen",
    "cabinetId": "u-kitchen",
    "styleId": "wabi-sabi",
    "materialId": "a-oak-white"
  },
  "semi-enclosed-kitchen|u-kitchen|wabi-sabi|c-cream-brass": {
    "imageFile": "ref_0392__semi-enclosed-kitchen__u-kitchen__wabi-sabi__c-cream-brass.jpg",
    "spaceId": "semi-enclosed-kitchen",
    "cabinetId": "u-kitchen",
    "styleId": "wabi-sabi",
    "materialId": "c-cream-brass"
  },
  "semi-enclosed-kitchen|u-kitchen|wabi-sabi|f-cement-rattan": {
    "imageFile": "ref_0393__semi-enclosed-kitchen__u-kitchen__wabi-sabi__f-cement-rattan.jpg",
    "spaceId": "semi-enclosed-kitchen",
    "cabinetId": "u-kitchen",
    "styleId": "wabi-sabi",
    "materialId": "f-cement-rattan"
  },
  "semi-enclosed-kitchen|u-kitchen|american-vintage|e-walnut-glass": {
    "imageFile": "ref_0394__semi-enclosed-kitchen__u-kitchen__american-vintage__e-walnut-glass.jpg",
    "spaceId": "semi-enclosed-kitchen",
    "cabinetId": "u-kitchen",
    "styleId": "american-vintage",
    "materialId": "e-walnut-glass"
  },
  "semi-enclosed-kitchen|u-kitchen|american-vintage|g-american-white": {
    "imageFile": "ref_0395__semi-enclosed-kitchen__u-kitchen__american-vintage__g-american-white.jpg",
    "spaceId": "semi-enclosed-kitchen",
    "cabinetId": "u-kitchen",
    "styleId": "american-vintage",
    "materialId": "g-american-white"
  },
  "semi-enclosed-kitchen|u-kitchen|modern-luxury|b-gloss-white": {
    "imageFile": "ref_0396__semi-enclosed-kitchen__u-kitchen__modern-luxury__b-gloss-white.jpg",
    "spaceId": "semi-enclosed-kitchen",
    "cabinetId": "u-kitchen",
    "styleId": "modern-luxury",
    "materialId": "b-gloss-white"
  },
  "semi-enclosed-kitchen|u-kitchen|modern-luxury|c-cream-brass": {
    "imageFile": "ref_0397__semi-enclosed-kitchen__u-kitchen__modern-luxury__c-cream-brass.jpg",
    "spaceId": "semi-enclosed-kitchen",
    "cabinetId": "u-kitchen",
    "styleId": "modern-luxury",
    "materialId": "c-cream-brass"
  },
  "semi-enclosed-kitchen|u-kitchen|modern-luxury|d-dark-grey": {
    "imageFile": "ref_0398__semi-enclosed-kitchen__u-kitchen__modern-luxury__d-dark-grey.jpg",
    "spaceId": "semi-enclosed-kitchen",
    "cabinetId": "u-kitchen",
    "styleId": "modern-luxury",
    "materialId": "d-dark-grey"
  },
  "semi-enclosed-kitchen|u-kitchen|modern-luxury|e-walnut-glass": {
    "imageFile": "ref_0399__semi-enclosed-kitchen__u-kitchen__modern-luxury__e-walnut-glass.jpg",
    "spaceId": "semi-enclosed-kitchen",
    "cabinetId": "u-kitchen",
    "styleId": "modern-luxury",
    "materialId": "e-walnut-glass"
  },
  "semi-enclosed-kitchen|l-kitchen|modern-minimalist|a-oak-white": {
    "imageFile": "ref_0400__semi-enclosed-kitchen__l-kitchen__modern-minimalist__a-oak-white.jpg",
    "spaceId": "semi-enclosed-kitchen",
    "cabinetId": "l-kitchen",
    "styleId": "modern-minimalist",
    "materialId": "a-oak-white"
  },
  "semi-enclosed-kitchen|l-kitchen|modern-minimalist|b-gloss-white": {
    "imageFile": "ref_0401__semi-enclosed-kitchen__l-kitchen__modern-minimalist__b-gloss-white.jpg",
    "spaceId": "semi-enclosed-kitchen",
    "cabinetId": "l-kitchen",
    "styleId": "modern-minimalist",
    "materialId": "b-gloss-white"
  },
  "semi-enclosed-kitchen|l-kitchen|modern-minimalist|d-dark-grey": {
    "imageFile": "ref_0402__semi-enclosed-kitchen__l-kitchen__modern-minimalist__d-dark-grey.jpg",
    "spaceId": "semi-enclosed-kitchen",
    "cabinetId": "l-kitchen",
    "styleId": "modern-minimalist",
    "materialId": "d-dark-grey"
  },
  "semi-enclosed-kitchen|l-kitchen|modern-minimalist|h-matte-white": {
    "imageFile": "ref_0403__semi-enclosed-kitchen__l-kitchen__modern-minimalist__h-matte-white.jpg",
    "spaceId": "semi-enclosed-kitchen",
    "cabinetId": "l-kitchen",
    "styleId": "modern-minimalist",
    "materialId": "h-matte-white"
  },
  "semi-enclosed-kitchen|l-kitchen|french-cream|c-cream-brass": {
    "imageFile": "ref_0404__semi-enclosed-kitchen__l-kitchen__french-cream__c-cream-brass.jpg",
    "spaceId": "semi-enclosed-kitchen",
    "cabinetId": "l-kitchen",
    "styleId": "french-cream",
    "materialId": "c-cream-brass"
  },
  "semi-enclosed-kitchen|l-kitchen|italian-minimal|d-dark-grey": {
    "imageFile": "ref_0405__semi-enclosed-kitchen__l-kitchen__italian-minimal__d-dark-grey.jpg",
    "spaceId": "semi-enclosed-kitchen",
    "cabinetId": "l-kitchen",
    "styleId": "italian-minimal",
    "materialId": "d-dark-grey"
  },
  "semi-enclosed-kitchen|l-kitchen|italian-minimal|h-matte-white": {
    "imageFile": "ref_0406__semi-enclosed-kitchen__l-kitchen__italian-minimal__h-matte-white.jpg",
    "spaceId": "semi-enclosed-kitchen",
    "cabinetId": "l-kitchen",
    "styleId": "italian-minimal",
    "materialId": "h-matte-white"
  },
  "semi-enclosed-kitchen|l-kitchen|japanese-wood|a-oak-white": {
    "imageFile": "ref_0407__semi-enclosed-kitchen__l-kitchen__japanese-wood__a-oak-white.jpg",
    "spaceId": "semi-enclosed-kitchen",
    "cabinetId": "l-kitchen",
    "styleId": "japanese-wood",
    "materialId": "a-oak-white"
  },
  "semi-enclosed-kitchen|l-kitchen|japanese-wood|f-cement-rattan": {
    "imageFile": "ref_0408__semi-enclosed-kitchen__l-kitchen__japanese-wood__f-cement-rattan.jpg",
    "spaceId": "semi-enclosed-kitchen",
    "cabinetId": "l-kitchen",
    "styleId": "japanese-wood",
    "materialId": "f-cement-rattan"
  },
  "semi-enclosed-kitchen|l-kitchen|modern-chinese|e-walnut-glass": {
    "imageFile": "ref_0409__semi-enclosed-kitchen__l-kitchen__modern-chinese__e-walnut-glass.jpg",
    "spaceId": "semi-enclosed-kitchen",
    "cabinetId": "l-kitchen",
    "styleId": "modern-chinese",
    "materialId": "e-walnut-glass"
  },
  "semi-enclosed-kitchen|l-kitchen|wabi-sabi|a-oak-white": {
    "imageFile": "ref_0410__semi-enclosed-kitchen__l-kitchen__wabi-sabi__a-oak-white.jpg",
    "spaceId": "semi-enclosed-kitchen",
    "cabinetId": "l-kitchen",
    "styleId": "wabi-sabi",
    "materialId": "a-oak-white"
  },
  "semi-enclosed-kitchen|l-kitchen|wabi-sabi|c-cream-brass": {
    "imageFile": "ref_0411__semi-enclosed-kitchen__l-kitchen__wabi-sabi__c-cream-brass.jpg",
    "spaceId": "semi-enclosed-kitchen",
    "cabinetId": "l-kitchen",
    "styleId": "wabi-sabi",
    "materialId": "c-cream-brass"
  },
  "semi-enclosed-kitchen|l-kitchen|wabi-sabi|f-cement-rattan": {
    "imageFile": "ref_0412__semi-enclosed-kitchen__l-kitchen__wabi-sabi__f-cement-rattan.jpg",
    "spaceId": "semi-enclosed-kitchen",
    "cabinetId": "l-kitchen",
    "styleId": "wabi-sabi",
    "materialId": "f-cement-rattan"
  },
  "semi-enclosed-kitchen|l-kitchen|american-vintage|e-walnut-glass": {
    "imageFile": "ref_0413__semi-enclosed-kitchen__l-kitchen__american-vintage__e-walnut-glass.jpg",
    "spaceId": "semi-enclosed-kitchen",
    "cabinetId": "l-kitchen",
    "styleId": "american-vintage",
    "materialId": "e-walnut-glass"
  },
  "semi-enclosed-kitchen|l-kitchen|american-vintage|g-american-white": {
    "imageFile": "ref_0414__semi-enclosed-kitchen__l-kitchen__american-vintage__g-american-white.jpg",
    "spaceId": "semi-enclosed-kitchen",
    "cabinetId": "l-kitchen",
    "styleId": "american-vintage",
    "materialId": "g-american-white"
  },
  "semi-enclosed-kitchen|l-kitchen|modern-luxury|b-gloss-white": {
    "imageFile": "ref_0415__semi-enclosed-kitchen__l-kitchen__modern-luxury__b-gloss-white.jpg",
    "spaceId": "semi-enclosed-kitchen",
    "cabinetId": "l-kitchen",
    "styleId": "modern-luxury",
    "materialId": "b-gloss-white"
  },
  "semi-enclosed-kitchen|l-kitchen|modern-luxury|c-cream-brass": {
    "imageFile": "ref_0416__semi-enclosed-kitchen__l-kitchen__modern-luxury__c-cream-brass.jpg",
    "spaceId": "semi-enclosed-kitchen",
    "cabinetId": "l-kitchen",
    "styleId": "modern-luxury",
    "materialId": "c-cream-brass"
  },
  "semi-enclosed-kitchen|l-kitchen|modern-luxury|d-dark-grey": {
    "imageFile": "ref_0417__semi-enclosed-kitchen__l-kitchen__modern-luxury__d-dark-grey.jpg",
    "spaceId": "semi-enclosed-kitchen",
    "cabinetId": "l-kitchen",
    "styleId": "modern-luxury",
    "materialId": "d-dark-grey"
  },
  "semi-enclosed-kitchen|l-kitchen|modern-luxury|e-walnut-glass": {
    "imageFile": "ref_0418__semi-enclosed-kitchen__l-kitchen__modern-luxury__e-walnut-glass.jpg",
    "spaceId": "semi-enclosed-kitchen",
    "cabinetId": "l-kitchen",
    "styleId": "modern-luxury",
    "materialId": "e-walnut-glass"
  },
  "semi-enclosed-kitchen|i-kitchen|modern-minimalist|a-oak-white": {
    "imageFile": "ref_0419__semi-enclosed-kitchen__i-kitchen__modern-minimalist__a-oak-white.jpg",
    "spaceId": "semi-enclosed-kitchen",
    "cabinetId": "i-kitchen",
    "styleId": "modern-minimalist",
    "materialId": "a-oak-white"
  },
  "semi-enclosed-kitchen|i-kitchen|modern-minimalist|b-gloss-white": {
    "imageFile": "ref_0420__semi-enclosed-kitchen__i-kitchen__modern-minimalist__b-gloss-white.jpg",
    "spaceId": "semi-enclosed-kitchen",
    "cabinetId": "i-kitchen",
    "styleId": "modern-minimalist",
    "materialId": "b-gloss-white"
  },
  "semi-enclosed-kitchen|i-kitchen|modern-minimalist|d-dark-grey": {
    "imageFile": "ref_0421__semi-enclosed-kitchen__i-kitchen__modern-minimalist__d-dark-grey.jpg",
    "spaceId": "semi-enclosed-kitchen",
    "cabinetId": "i-kitchen",
    "styleId": "modern-minimalist",
    "materialId": "d-dark-grey"
  },
  "semi-enclosed-kitchen|i-kitchen|modern-minimalist|h-matte-white": {
    "imageFile": "ref_0422__semi-enclosed-kitchen__i-kitchen__modern-minimalist__h-matte-white.jpg",
    "spaceId": "semi-enclosed-kitchen",
    "cabinetId": "i-kitchen",
    "styleId": "modern-minimalist",
    "materialId": "h-matte-white"
  },
  "semi-enclosed-kitchen|i-kitchen|french-cream|c-cream-brass": {
    "imageFile": "ref_0423__semi-enclosed-kitchen__i-kitchen__french-cream__c-cream-brass.jpg",
    "spaceId": "semi-enclosed-kitchen",
    "cabinetId": "i-kitchen",
    "styleId": "french-cream",
    "materialId": "c-cream-brass"
  },
  "semi-enclosed-kitchen|i-kitchen|italian-minimal|d-dark-grey": {
    "imageFile": "ref_0424__semi-enclosed-kitchen__i-kitchen__italian-minimal__d-dark-grey.jpg",
    "spaceId": "semi-enclosed-kitchen",
    "cabinetId": "i-kitchen",
    "styleId": "italian-minimal",
    "materialId": "d-dark-grey"
  },
  "semi-enclosed-kitchen|i-kitchen|italian-minimal|h-matte-white": {
    "imageFile": "ref_0425__semi-enclosed-kitchen__i-kitchen__italian-minimal__h-matte-white.jpg",
    "spaceId": "semi-enclosed-kitchen",
    "cabinetId": "i-kitchen",
    "styleId": "italian-minimal",
    "materialId": "h-matte-white"
  },
  "semi-enclosed-kitchen|i-kitchen|japanese-wood|a-oak-white": {
    "imageFile": "ref_0426__semi-enclosed-kitchen__i-kitchen__japanese-wood__a-oak-white.jpg",
    "spaceId": "semi-enclosed-kitchen",
    "cabinetId": "i-kitchen",
    "styleId": "japanese-wood",
    "materialId": "a-oak-white"
  },
  "semi-enclosed-kitchen|i-kitchen|japanese-wood|f-cement-rattan": {
    "imageFile": "ref_0427__semi-enclosed-kitchen__i-kitchen__japanese-wood__f-cement-rattan.jpg",
    "spaceId": "semi-enclosed-kitchen",
    "cabinetId": "i-kitchen",
    "styleId": "japanese-wood",
    "materialId": "f-cement-rattan"
  },
  "semi-enclosed-kitchen|i-kitchen|modern-chinese|e-walnut-glass": {
    "imageFile": "ref_0428__semi-enclosed-kitchen__i-kitchen__modern-chinese__e-walnut-glass.jpg",
    "spaceId": "semi-enclosed-kitchen",
    "cabinetId": "i-kitchen",
    "styleId": "modern-chinese",
    "materialId": "e-walnut-glass"
  },
  "semi-enclosed-kitchen|i-kitchen|wabi-sabi|a-oak-white": {
    "imageFile": "ref_0429__semi-enclosed-kitchen__i-kitchen__wabi-sabi__a-oak-white.jpg",
    "spaceId": "semi-enclosed-kitchen",
    "cabinetId": "i-kitchen",
    "styleId": "wabi-sabi",
    "materialId": "a-oak-white"
  },
  "semi-enclosed-kitchen|i-kitchen|wabi-sabi|c-cream-brass": {
    "imageFile": "ref_0430__semi-enclosed-kitchen__i-kitchen__wabi-sabi__c-cream-brass.jpg",
    "spaceId": "semi-enclosed-kitchen",
    "cabinetId": "i-kitchen",
    "styleId": "wabi-sabi",
    "materialId": "c-cream-brass"
  },
  "semi-enclosed-kitchen|i-kitchen|wabi-sabi|f-cement-rattan": {
    "imageFile": "ref_0431__semi-enclosed-kitchen__i-kitchen__wabi-sabi__f-cement-rattan.jpg",
    "spaceId": "semi-enclosed-kitchen",
    "cabinetId": "i-kitchen",
    "styleId": "wabi-sabi",
    "materialId": "f-cement-rattan"
  },
  "semi-enclosed-kitchen|i-kitchen|american-vintage|e-walnut-glass": {
    "imageFile": "ref_0432__semi-enclosed-kitchen__i-kitchen__american-vintage__e-walnut-glass.jpg",
    "spaceId": "semi-enclosed-kitchen",
    "cabinetId": "i-kitchen",
    "styleId": "american-vintage",
    "materialId": "e-walnut-glass"
  },
  "semi-enclosed-kitchen|i-kitchen|american-vintage|g-american-white": {
    "imageFile": "ref_0433__semi-enclosed-kitchen__i-kitchen__american-vintage__g-american-white.jpg",
    "spaceId": "semi-enclosed-kitchen",
    "cabinetId": "i-kitchen",
    "styleId": "american-vintage",
    "materialId": "g-american-white"
  },
  "semi-enclosed-kitchen|i-kitchen|modern-luxury|b-gloss-white": {
    "imageFile": "ref_0434__semi-enclosed-kitchen__i-kitchen__modern-luxury__b-gloss-white.jpg",
    "spaceId": "semi-enclosed-kitchen",
    "cabinetId": "i-kitchen",
    "styleId": "modern-luxury",
    "materialId": "b-gloss-white"
  },
  "semi-enclosed-kitchen|i-kitchen|modern-luxury|c-cream-brass": {
    "imageFile": "ref_0435__semi-enclosed-kitchen__i-kitchen__modern-luxury__c-cream-brass.jpg",
    "spaceId": "semi-enclosed-kitchen",
    "cabinetId": "i-kitchen",
    "styleId": "modern-luxury",
    "materialId": "c-cream-brass"
  },
  "semi-enclosed-kitchen|i-kitchen|modern-luxury|d-dark-grey": {
    "imageFile": "ref_0436__semi-enclosed-kitchen__i-kitchen__modern-luxury__d-dark-grey.jpg",
    "spaceId": "semi-enclosed-kitchen",
    "cabinetId": "i-kitchen",
    "styleId": "modern-luxury",
    "materialId": "d-dark-grey"
  },
  "semi-enclosed-kitchen|i-kitchen|modern-luxury|e-walnut-glass": {
    "imageFile": "ref_0437__semi-enclosed-kitchen__i-kitchen__modern-luxury__e-walnut-glass.jpg",
    "spaceId": "semi-enclosed-kitchen",
    "cabinetId": "i-kitchen",
    "styleId": "modern-luxury",
    "materialId": "e-walnut-glass"
  },
  "study|bookshelf|modern-minimalist|a-oak-white": {
    "imageFile": "ref_0438__study__bookshelf__modern-minimalist__a-oak-white.jpg",
    "spaceId": "study",
    "cabinetId": "bookshelf",
    "styleId": "modern-minimalist",
    "materialId": "a-oak-white"
  },
  "study|bookshelf|modern-minimalist|b-gloss-white": {
    "imageFile": "ref_0439__study__bookshelf__modern-minimalist__b-gloss-white.jpg",
    "spaceId": "study",
    "cabinetId": "bookshelf",
    "styleId": "modern-minimalist",
    "materialId": "b-gloss-white"
  },
  "study|bookshelf|modern-minimalist|d-dark-grey": {
    "imageFile": "ref_0440__study__bookshelf__modern-minimalist__d-dark-grey.jpg",
    "spaceId": "study",
    "cabinetId": "bookshelf",
    "styleId": "modern-minimalist",
    "materialId": "d-dark-grey"
  },
  "study|bookshelf|modern-minimalist|h-matte-white": {
    "imageFile": "ref_0441__study__bookshelf__modern-minimalist__h-matte-white.jpg",
    "spaceId": "study",
    "cabinetId": "bookshelf",
    "styleId": "modern-minimalist",
    "materialId": "h-matte-white"
  },
  "study|bookshelf|french-cream|c-cream-brass": {
    "imageFile": "ref_0442__study__bookshelf__french-cream__c-cream-brass.jpg",
    "spaceId": "study",
    "cabinetId": "bookshelf",
    "styleId": "french-cream",
    "materialId": "c-cream-brass"
  },
  "study|bookshelf|italian-minimal|d-dark-grey": {
    "imageFile": "ref_0443__study__bookshelf__italian-minimal__d-dark-grey.jpg",
    "spaceId": "study",
    "cabinetId": "bookshelf",
    "styleId": "italian-minimal",
    "materialId": "d-dark-grey"
  },
  "study|bookshelf|italian-minimal|h-matte-white": {
    "imageFile": "ref_0444__study__bookshelf__italian-minimal__h-matte-white.jpg",
    "spaceId": "study",
    "cabinetId": "bookshelf",
    "styleId": "italian-minimal",
    "materialId": "h-matte-white"
  },
  "study|bookshelf|japanese-wood|a-oak-white": {
    "imageFile": "ref_0445__study__bookshelf__japanese-wood__a-oak-white.jpg",
    "spaceId": "study",
    "cabinetId": "bookshelf",
    "styleId": "japanese-wood",
    "materialId": "a-oak-white"
  },
  "study|bookshelf|japanese-wood|f-cement-rattan": {
    "imageFile": "ref_0446__study__bookshelf__japanese-wood__f-cement-rattan.jpg",
    "spaceId": "study",
    "cabinetId": "bookshelf",
    "styleId": "japanese-wood",
    "materialId": "f-cement-rattan"
  },
  "study|bookshelf|modern-chinese|e-walnut-glass": {
    "imageFile": "ref_0447__study__bookshelf__modern-chinese__e-walnut-glass.jpg",
    "spaceId": "study",
    "cabinetId": "bookshelf",
    "styleId": "modern-chinese",
    "materialId": "e-walnut-glass"
  },
  "study|bookshelf|wabi-sabi|a-oak-white": {
    "imageFile": "ref_0448__study__bookshelf__wabi-sabi__a-oak-white.jpg",
    "spaceId": "study",
    "cabinetId": "bookshelf",
    "styleId": "wabi-sabi",
    "materialId": "a-oak-white"
  },
  "study|bookshelf|wabi-sabi|c-cream-brass": {
    "imageFile": "ref_0449__study__bookshelf__wabi-sabi__c-cream-brass.jpg",
    "spaceId": "study",
    "cabinetId": "bookshelf",
    "styleId": "wabi-sabi",
    "materialId": "c-cream-brass"
  },
  "study|bookshelf|wabi-sabi|f-cement-rattan": {
    "imageFile": "ref_0450__study__bookshelf__wabi-sabi__f-cement-rattan.jpg",
    "spaceId": "study",
    "cabinetId": "bookshelf",
    "styleId": "wabi-sabi",
    "materialId": "f-cement-rattan"
  },
  "study|bookshelf|american-vintage|e-walnut-glass": {
    "imageFile": "ref_0451__study__bookshelf__american-vintage__e-walnut-glass.jpg",
    "spaceId": "study",
    "cabinetId": "bookshelf",
    "styleId": "american-vintage",
    "materialId": "e-walnut-glass"
  },
  "study|bookshelf|american-vintage|g-american-white": {
    "imageFile": "ref_0452__study__bookshelf__american-vintage__g-american-white.jpg",
    "spaceId": "study",
    "cabinetId": "bookshelf",
    "styleId": "american-vintage",
    "materialId": "g-american-white"
  },
  "study|bookshelf|modern-luxury|b-gloss-white": {
    "imageFile": "ref_0453__study__bookshelf__modern-luxury__b-gloss-white.jpg",
    "spaceId": "study",
    "cabinetId": "bookshelf",
    "styleId": "modern-luxury",
    "materialId": "b-gloss-white"
  },
  "study|bookshelf|modern-luxury|c-cream-brass": {
    "imageFile": "ref_0454__study__bookshelf__modern-luxury__c-cream-brass.jpg",
    "spaceId": "study",
    "cabinetId": "bookshelf",
    "styleId": "modern-luxury",
    "materialId": "c-cream-brass"
  },
  "study|bookshelf|modern-luxury|d-dark-grey": {
    "imageFile": "ref_0455__study__bookshelf__modern-luxury__d-dark-grey.jpg",
    "spaceId": "study",
    "cabinetId": "bookshelf",
    "styleId": "modern-luxury",
    "materialId": "d-dark-grey"
  },
  "study|bookshelf|modern-luxury|e-walnut-glass": {
    "imageFile": "ref_0456__study__bookshelf__modern-luxury__e-walnut-glass.jpg",
    "spaceId": "study",
    "cabinetId": "bookshelf",
    "styleId": "modern-luxury",
    "materialId": "e-walnut-glass"
  },
  "study|display-cabinet|modern-minimalist|a-oak-white": {
    "imageFile": "ref_0457__study__display-cabinet__modern-minimalist__a-oak-white.jpg",
    "spaceId": "study",
    "cabinetId": "display-cabinet",
    "styleId": "modern-minimalist",
    "materialId": "a-oak-white"
  },
  "study|display-cabinet|modern-minimalist|b-gloss-white": {
    "imageFile": "ref_0458__study__display-cabinet__modern-minimalist__b-gloss-white.jpg",
    "spaceId": "study",
    "cabinetId": "display-cabinet",
    "styleId": "modern-minimalist",
    "materialId": "b-gloss-white"
  },
  "study|display-cabinet|modern-minimalist|d-dark-grey": {
    "imageFile": "ref_0459__study__display-cabinet__modern-minimalist__d-dark-grey.jpg",
    "spaceId": "study",
    "cabinetId": "display-cabinet",
    "styleId": "modern-minimalist",
    "materialId": "d-dark-grey"
  },
  "study|display-cabinet|modern-minimalist|h-matte-white": {
    "imageFile": "ref_0460__study__display-cabinet__modern-minimalist__h-matte-white.jpg",
    "spaceId": "study",
    "cabinetId": "display-cabinet",
    "styleId": "modern-minimalist",
    "materialId": "h-matte-white"
  },
  "study|display-cabinet|french-cream|c-cream-brass": {
    "imageFile": "ref_0461__study__display-cabinet__french-cream__c-cream-brass.jpg",
    "spaceId": "study",
    "cabinetId": "display-cabinet",
    "styleId": "french-cream",
    "materialId": "c-cream-brass"
  },
  "study|display-cabinet|italian-minimal|d-dark-grey": {
    "imageFile": "ref_0462__study__display-cabinet__italian-minimal__d-dark-grey.jpg",
    "spaceId": "study",
    "cabinetId": "display-cabinet",
    "styleId": "italian-minimal",
    "materialId": "d-dark-grey"
  },
  "study|display-cabinet|italian-minimal|h-matte-white": {
    "imageFile": "ref_0463__study__display-cabinet__italian-minimal__h-matte-white.jpg",
    "spaceId": "study",
    "cabinetId": "display-cabinet",
    "styleId": "italian-minimal",
    "materialId": "h-matte-white"
  },
  "study|display-cabinet|japanese-wood|a-oak-white": {
    "imageFile": "ref_0464__study__display-cabinet__japanese-wood__a-oak-white.jpg",
    "spaceId": "study",
    "cabinetId": "display-cabinet",
    "styleId": "japanese-wood",
    "materialId": "a-oak-white"
  },
  "study|display-cabinet|japanese-wood|f-cement-rattan": {
    "imageFile": "ref_0465__study__display-cabinet__japanese-wood__f-cement-rattan.jpg",
    "spaceId": "study",
    "cabinetId": "display-cabinet",
    "styleId": "japanese-wood",
    "materialId": "f-cement-rattan"
  },
  "study|display-cabinet|modern-chinese|e-walnut-glass": {
    "imageFile": "ref_0466__study__display-cabinet__modern-chinese__e-walnut-glass.jpg",
    "spaceId": "study",
    "cabinetId": "display-cabinet",
    "styleId": "modern-chinese",
    "materialId": "e-walnut-glass"
  },
  "study|display-cabinet|wabi-sabi|a-oak-white": {
    "imageFile": "ref_0467__study__display-cabinet__wabi-sabi__a-oak-white.jpg",
    "spaceId": "study",
    "cabinetId": "display-cabinet",
    "styleId": "wabi-sabi",
    "materialId": "a-oak-white"
  },
  "study|display-cabinet|wabi-sabi|c-cream-brass": {
    "imageFile": "ref_0468__study__display-cabinet__wabi-sabi__c-cream-brass.jpg",
    "spaceId": "study",
    "cabinetId": "display-cabinet",
    "styleId": "wabi-sabi",
    "materialId": "c-cream-brass"
  },
  "study|display-cabinet|wabi-sabi|f-cement-rattan": {
    "imageFile": "ref_0469__study__display-cabinet__wabi-sabi__f-cement-rattan.jpg",
    "spaceId": "study",
    "cabinetId": "display-cabinet",
    "styleId": "wabi-sabi",
    "materialId": "f-cement-rattan"
  },
  "study|display-cabinet|american-vintage|e-walnut-glass": {
    "imageFile": "ref_0470__study__display-cabinet__american-vintage__e-walnut-glass.jpg",
    "spaceId": "study",
    "cabinetId": "display-cabinet",
    "styleId": "american-vintage",
    "materialId": "e-walnut-glass"
  },
  "study|display-cabinet|american-vintage|g-american-white": {
    "imageFile": "ref_0471__study__display-cabinet__american-vintage__g-american-white.jpg",
    "spaceId": "study",
    "cabinetId": "display-cabinet",
    "styleId": "american-vintage",
    "materialId": "g-american-white"
  },
  "study|display-cabinet|modern-luxury|b-gloss-white": {
    "imageFile": "ref_0472__study__display-cabinet__modern-luxury__b-gloss-white.jpg",
    "spaceId": "study",
    "cabinetId": "display-cabinet",
    "styleId": "modern-luxury",
    "materialId": "b-gloss-white"
  },
  "study|display-cabinet|modern-luxury|c-cream-brass": {
    "imageFile": "ref_0473__study__display-cabinet__modern-luxury__c-cream-brass.jpg",
    "spaceId": "study",
    "cabinetId": "display-cabinet",
    "styleId": "modern-luxury",
    "materialId": "c-cream-brass"
  },
  "study|display-cabinet|modern-luxury|d-dark-grey": {
    "imageFile": "ref_0474__study__display-cabinet__modern-luxury__d-dark-grey.jpg",
    "spaceId": "study",
    "cabinetId": "display-cabinet",
    "styleId": "modern-luxury",
    "materialId": "d-dark-grey"
  },
  "study|display-cabinet|modern-luxury|e-walnut-glass": {
    "imageFile": "ref_0475__study__display-cabinet__modern-luxury__e-walnut-glass.jpg",
    "spaceId": "study",
    "cabinetId": "display-cabinet",
    "styleId": "modern-luxury",
    "materialId": "e-walnut-glass"
  },
  "entrance|shoe-cabinet|modern-minimalist|a-oak-white": {
    "imageFile": "ref_0476__entrance__shoe-cabinet__modern-minimalist__a-oak-white.jpg",
    "spaceId": "entrance",
    "cabinetId": "shoe-cabinet",
    "styleId": "modern-minimalist",
    "materialId": "a-oak-white"
  },
  "entrance|shoe-cabinet|modern-minimalist|b-gloss-white": {
    "imageFile": "ref_0477__entrance__shoe-cabinet__modern-minimalist__b-gloss-white.jpg",
    "spaceId": "entrance",
    "cabinetId": "shoe-cabinet",
    "styleId": "modern-minimalist",
    "materialId": "b-gloss-white"
  },
  "entrance|shoe-cabinet|modern-minimalist|d-dark-grey": {
    "imageFile": "ref_0478__entrance__shoe-cabinet__modern-minimalist__d-dark-grey.jpg",
    "spaceId": "entrance",
    "cabinetId": "shoe-cabinet",
    "styleId": "modern-minimalist",
    "materialId": "d-dark-grey"
  },
  "entrance|shoe-cabinet|modern-minimalist|h-matte-white": {
    "imageFile": "ref_0479__entrance__shoe-cabinet__modern-minimalist__h-matte-white.jpg",
    "spaceId": "entrance",
    "cabinetId": "shoe-cabinet",
    "styleId": "modern-minimalist",
    "materialId": "h-matte-white"
  },
  "entrance|shoe-cabinet|french-cream|c-cream-brass": {
    "imageFile": "ref_0480__entrance__shoe-cabinet__french-cream__c-cream-brass.jpg",
    "spaceId": "entrance",
    "cabinetId": "shoe-cabinet",
    "styleId": "french-cream",
    "materialId": "c-cream-brass"
  },
  "entrance|shoe-cabinet|italian-minimal|d-dark-grey": {
    "imageFile": "ref_0481__entrance__shoe-cabinet__italian-minimal__d-dark-grey.jpg",
    "spaceId": "entrance",
    "cabinetId": "shoe-cabinet",
    "styleId": "italian-minimal",
    "materialId": "d-dark-grey"
  },
  "entrance|shoe-cabinet|italian-minimal|h-matte-white": {
    "imageFile": "ref_0482__entrance__shoe-cabinet__italian-minimal__h-matte-white.jpg",
    "spaceId": "entrance",
    "cabinetId": "shoe-cabinet",
    "styleId": "italian-minimal",
    "materialId": "h-matte-white"
  },
  "entrance|shoe-cabinet|japanese-wood|a-oak-white": {
    "imageFile": "ref_0483__entrance__shoe-cabinet__japanese-wood__a-oak-white.jpg",
    "spaceId": "entrance",
    "cabinetId": "shoe-cabinet",
    "styleId": "japanese-wood",
    "materialId": "a-oak-white"
  },
  "entrance|shoe-cabinet|japanese-wood|f-cement-rattan": {
    "imageFile": "ref_0484__entrance__shoe-cabinet__japanese-wood__f-cement-rattan.jpg",
    "spaceId": "entrance",
    "cabinetId": "shoe-cabinet",
    "styleId": "japanese-wood",
    "materialId": "f-cement-rattan"
  },
  "entrance|shoe-cabinet|modern-chinese|e-walnut-glass": {
    "imageFile": "ref_0485__entrance__shoe-cabinet__modern-chinese__e-walnut-glass.jpg",
    "spaceId": "entrance",
    "cabinetId": "shoe-cabinet",
    "styleId": "modern-chinese",
    "materialId": "e-walnut-glass"
  },
  "entrance|shoe-cabinet|wabi-sabi|a-oak-white": {
    "imageFile": "ref_0486__entrance__shoe-cabinet__wabi-sabi__a-oak-white.jpg",
    "spaceId": "entrance",
    "cabinetId": "shoe-cabinet",
    "styleId": "wabi-sabi",
    "materialId": "a-oak-white"
  },
  "entrance|shoe-cabinet|wabi-sabi|c-cream-brass": {
    "imageFile": "ref_0487__entrance__shoe-cabinet__wabi-sabi__c-cream-brass.jpg",
    "spaceId": "entrance",
    "cabinetId": "shoe-cabinet",
    "styleId": "wabi-sabi",
    "materialId": "c-cream-brass"
  },
  "entrance|shoe-cabinet|wabi-sabi|f-cement-rattan": {
    "imageFile": "ref_0488__entrance__shoe-cabinet__wabi-sabi__f-cement-rattan.jpg",
    "spaceId": "entrance",
    "cabinetId": "shoe-cabinet",
    "styleId": "wabi-sabi",
    "materialId": "f-cement-rattan"
  },
  "entrance|shoe-cabinet|american-vintage|e-walnut-glass": {
    "imageFile": "ref_0489__entrance__shoe-cabinet__american-vintage__e-walnut-glass.jpg",
    "spaceId": "entrance",
    "cabinetId": "shoe-cabinet",
    "styleId": "american-vintage",
    "materialId": "e-walnut-glass"
  },
  "entrance|shoe-cabinet|american-vintage|g-american-white": {
    "imageFile": "ref_0490__entrance__shoe-cabinet__american-vintage__g-american-white.jpg",
    "spaceId": "entrance",
    "cabinetId": "shoe-cabinet",
    "styleId": "american-vintage",
    "materialId": "g-american-white"
  },
  "entrance|shoe-cabinet|modern-luxury|b-gloss-white": {
    "imageFile": "ref_0491__entrance__shoe-cabinet__modern-luxury__b-gloss-white.jpg",
    "spaceId": "entrance",
    "cabinetId": "shoe-cabinet",
    "styleId": "modern-luxury",
    "materialId": "b-gloss-white"
  },
  "entrance|shoe-cabinet|modern-luxury|c-cream-brass": {
    "imageFile": "ref_0492__entrance__shoe-cabinet__modern-luxury__c-cream-brass.jpg",
    "spaceId": "entrance",
    "cabinetId": "shoe-cabinet",
    "styleId": "modern-luxury",
    "materialId": "c-cream-brass"
  },
  "entrance|shoe-cabinet|modern-luxury|d-dark-grey": {
    "imageFile": "ref_0493__entrance__shoe-cabinet__modern-luxury__d-dark-grey.jpg",
    "spaceId": "entrance",
    "cabinetId": "shoe-cabinet",
    "styleId": "modern-luxury",
    "materialId": "d-dark-grey"
  },
  "entrance|shoe-cabinet|modern-luxury|e-walnut-glass": {
    "imageFile": "ref_0494__entrance__shoe-cabinet__modern-luxury__e-walnut-glass.jpg",
    "spaceId": "entrance",
    "cabinetId": "shoe-cabinet",
    "styleId": "modern-luxury",
    "materialId": "e-walnut-glass"
  },
  "walk-in-closet|glass-wardrobe|modern-minimalist|a-oak-white": {
    "imageFile": "ref_0495__walk-in-closet__glass-wardrobe__modern-minimalist__a-oak-white.jpg",
    "spaceId": "walk-in-closet",
    "cabinetId": "glass-wardrobe",
    "styleId": "modern-minimalist",
    "materialId": "a-oak-white"
  },
  "walk-in-closet|glass-wardrobe|modern-minimalist|b-gloss-white": {
    "imageFile": "ref_0496__walk-in-closet__glass-wardrobe__modern-minimalist__b-gloss-white.jpg",
    "spaceId": "walk-in-closet",
    "cabinetId": "glass-wardrobe",
    "styleId": "modern-minimalist",
    "materialId": "b-gloss-white"
  },
  "walk-in-closet|glass-wardrobe|modern-minimalist|d-dark-grey": {
    "imageFile": "ref_0497__walk-in-closet__glass-wardrobe__modern-minimalist__d-dark-grey.jpg",
    "spaceId": "walk-in-closet",
    "cabinetId": "glass-wardrobe",
    "styleId": "modern-minimalist",
    "materialId": "d-dark-grey"
  },
  "walk-in-closet|glass-wardrobe|modern-minimalist|h-matte-white": {
    "imageFile": "ref_0498__walk-in-closet__glass-wardrobe__modern-minimalist__h-matte-white.jpg",
    "spaceId": "walk-in-closet",
    "cabinetId": "glass-wardrobe",
    "styleId": "modern-minimalist",
    "materialId": "h-matte-white"
  },
  "walk-in-closet|glass-wardrobe|french-cream|c-cream-brass": {
    "imageFile": "ref_0499__walk-in-closet__glass-wardrobe__french-cream__c-cream-brass.jpg",
    "spaceId": "walk-in-closet",
    "cabinetId": "glass-wardrobe",
    "styleId": "french-cream",
    "materialId": "c-cream-brass"
  },
  "walk-in-closet|glass-wardrobe|italian-minimal|d-dark-grey": {
    "imageFile": "ref_0500__walk-in-closet__glass-wardrobe__italian-minimal__d-dark-grey.jpg",
    "spaceId": "walk-in-closet",
    "cabinetId": "glass-wardrobe",
    "styleId": "italian-minimal",
    "materialId": "d-dark-grey"
  },
  "walk-in-closet|glass-wardrobe|italian-minimal|h-matte-white": {
    "imageFile": "ref_0501__walk-in-closet__glass-wardrobe__italian-minimal__h-matte-white.jpg",
    "spaceId": "walk-in-closet",
    "cabinetId": "glass-wardrobe",
    "styleId": "italian-minimal",
    "materialId": "h-matte-white"
  },
  "walk-in-closet|glass-wardrobe|japanese-wood|a-oak-white": {
    "imageFile": "ref_0502__walk-in-closet__glass-wardrobe__japanese-wood__a-oak-white.jpg",
    "spaceId": "walk-in-closet",
    "cabinetId": "glass-wardrobe",
    "styleId": "japanese-wood",
    "materialId": "a-oak-white"
  },
  "walk-in-closet|glass-wardrobe|japanese-wood|f-cement-rattan": {
    "imageFile": "ref_0503__walk-in-closet__glass-wardrobe__japanese-wood__f-cement-rattan.jpg",
    "spaceId": "walk-in-closet",
    "cabinetId": "glass-wardrobe",
    "styleId": "japanese-wood",
    "materialId": "f-cement-rattan"
  },
  "walk-in-closet|glass-wardrobe|modern-chinese|e-walnut-glass": {
    "imageFile": "ref_0504__walk-in-closet__glass-wardrobe__modern-chinese__e-walnut-glass.jpg",
    "spaceId": "walk-in-closet",
    "cabinetId": "glass-wardrobe",
    "styleId": "modern-chinese",
    "materialId": "e-walnut-glass"
  },
  "walk-in-closet|glass-wardrobe|wabi-sabi|a-oak-white": {
    "imageFile": "ref_0505__walk-in-closet__glass-wardrobe__wabi-sabi__a-oak-white.jpg",
    "spaceId": "walk-in-closet",
    "cabinetId": "glass-wardrobe",
    "styleId": "wabi-sabi",
    "materialId": "a-oak-white"
  },
  "walk-in-closet|glass-wardrobe|wabi-sabi|c-cream-brass": {
    "imageFile": "ref_0506__walk-in-closet__glass-wardrobe__wabi-sabi__c-cream-brass.jpg",
    "spaceId": "walk-in-closet",
    "cabinetId": "glass-wardrobe",
    "styleId": "wabi-sabi",
    "materialId": "c-cream-brass"
  },
  "walk-in-closet|glass-wardrobe|wabi-sabi|f-cement-rattan": {
    "imageFile": "ref_0507__walk-in-closet__glass-wardrobe__wabi-sabi__f-cement-rattan.jpg",
    "spaceId": "walk-in-closet",
    "cabinetId": "glass-wardrobe",
    "styleId": "wabi-sabi",
    "materialId": "f-cement-rattan"
  },
  "walk-in-closet|glass-wardrobe|american-vintage|e-walnut-glass": {
    "imageFile": "ref_0508__walk-in-closet__glass-wardrobe__american-vintage__e-walnut-glass.jpg",
    "spaceId": "walk-in-closet",
    "cabinetId": "glass-wardrobe",
    "styleId": "american-vintage",
    "materialId": "e-walnut-glass"
  },
  "walk-in-closet|glass-wardrobe|american-vintage|g-american-white": {
    "imageFile": "ref_0509__walk-in-closet__glass-wardrobe__american-vintage__g-american-white.jpg",
    "spaceId": "walk-in-closet",
    "cabinetId": "glass-wardrobe",
    "styleId": "american-vintage",
    "materialId": "g-american-white"
  },
  "walk-in-closet|glass-wardrobe|modern-luxury|b-gloss-white": {
    "imageFile": "ref_0510__walk-in-closet__glass-wardrobe__modern-luxury__b-gloss-white.jpg",
    "spaceId": "walk-in-closet",
    "cabinetId": "glass-wardrobe",
    "styleId": "modern-luxury",
    "materialId": "b-gloss-white"
  },
  "walk-in-closet|glass-wardrobe|modern-luxury|c-cream-brass": {
    "imageFile": "ref_0511__walk-in-closet__glass-wardrobe__modern-luxury__c-cream-brass.jpg",
    "spaceId": "walk-in-closet",
    "cabinetId": "glass-wardrobe",
    "styleId": "modern-luxury",
    "materialId": "c-cream-brass"
  },
  "walk-in-closet|glass-wardrobe|modern-luxury|d-dark-grey": {
    "imageFile": "ref_0512__walk-in-closet__glass-wardrobe__modern-luxury__d-dark-grey.jpg",
    "spaceId": "walk-in-closet",
    "cabinetId": "glass-wardrobe",
    "styleId": "modern-luxury",
    "materialId": "d-dark-grey"
  },
  "walk-in-closet|glass-wardrobe|modern-luxury|e-walnut-glass": {
    "imageFile": "ref_0513__walk-in-closet__glass-wardrobe__modern-luxury__e-walnut-glass.jpg",
    "spaceId": "walk-in-closet",
    "cabinetId": "glass-wardrobe",
    "styleId": "modern-luxury",
    "materialId": "e-walnut-glass"
  },
  "walk-in-closet|sliding-wardrobe|modern-minimalist|a-oak-white": {
    "imageFile": "ref_0514__walk-in-closet__sliding-wardrobe__modern-minimalist__a-oak-white.jpg",
    "spaceId": "walk-in-closet",
    "cabinetId": "sliding-wardrobe",
    "styleId": "modern-minimalist",
    "materialId": "a-oak-white"
  },
  "walk-in-closet|sliding-wardrobe|modern-minimalist|b-gloss-white": {
    "imageFile": "ref_0515__walk-in-closet__sliding-wardrobe__modern-minimalist__b-gloss-white.jpg",
    "spaceId": "walk-in-closet",
    "cabinetId": "sliding-wardrobe",
    "styleId": "modern-minimalist",
    "materialId": "b-gloss-white"
  },
  "walk-in-closet|sliding-wardrobe|modern-minimalist|d-dark-grey": {
    "imageFile": "ref_0516__walk-in-closet__sliding-wardrobe__modern-minimalist__d-dark-grey.jpg",
    "spaceId": "walk-in-closet",
    "cabinetId": "sliding-wardrobe",
    "styleId": "modern-minimalist",
    "materialId": "d-dark-grey"
  },
  "walk-in-closet|sliding-wardrobe|modern-minimalist|h-matte-white": {
    "imageFile": "ref_0517__walk-in-closet__sliding-wardrobe__modern-minimalist__h-matte-white.jpg",
    "spaceId": "walk-in-closet",
    "cabinetId": "sliding-wardrobe",
    "styleId": "modern-minimalist",
    "materialId": "h-matte-white"
  },
  "walk-in-closet|sliding-wardrobe|french-cream|c-cream-brass": {
    "imageFile": "ref_0518__walk-in-closet__sliding-wardrobe__french-cream__c-cream-brass.jpg",
    "spaceId": "walk-in-closet",
    "cabinetId": "sliding-wardrobe",
    "styleId": "french-cream",
    "materialId": "c-cream-brass"
  },
  "walk-in-closet|sliding-wardrobe|italian-minimal|d-dark-grey": {
    "imageFile": "ref_0519__walk-in-closet__sliding-wardrobe__italian-minimal__d-dark-grey.jpg",
    "spaceId": "walk-in-closet",
    "cabinetId": "sliding-wardrobe",
    "styleId": "italian-minimal",
    "materialId": "d-dark-grey"
  },
  "walk-in-closet|sliding-wardrobe|italian-minimal|h-matte-white": {
    "imageFile": "ref_0520__walk-in-closet__sliding-wardrobe__italian-minimal__h-matte-white.jpg",
    "spaceId": "walk-in-closet",
    "cabinetId": "sliding-wardrobe",
    "styleId": "italian-minimal",
    "materialId": "h-matte-white"
  },
  "walk-in-closet|sliding-wardrobe|japanese-wood|a-oak-white": {
    "imageFile": "ref_0521__walk-in-closet__sliding-wardrobe__japanese-wood__a-oak-white.jpg",
    "spaceId": "walk-in-closet",
    "cabinetId": "sliding-wardrobe",
    "styleId": "japanese-wood",
    "materialId": "a-oak-white"
  },
  "walk-in-closet|sliding-wardrobe|japanese-wood|f-cement-rattan": {
    "imageFile": "ref_0522__walk-in-closet__sliding-wardrobe__japanese-wood__f-cement-rattan.jpg",
    "spaceId": "walk-in-closet",
    "cabinetId": "sliding-wardrobe",
    "styleId": "japanese-wood",
    "materialId": "f-cement-rattan"
  },
  "walk-in-closet|sliding-wardrobe|modern-chinese|e-walnut-glass": {
    "imageFile": "ref_0523__walk-in-closet__sliding-wardrobe__modern-chinese__e-walnut-glass.jpg",
    "spaceId": "walk-in-closet",
    "cabinetId": "sliding-wardrobe",
    "styleId": "modern-chinese",
    "materialId": "e-walnut-glass"
  },
  "walk-in-closet|sliding-wardrobe|wabi-sabi|a-oak-white": {
    "imageFile": "ref_0524__walk-in-closet__sliding-wardrobe__wabi-sabi__a-oak-white.jpg",
    "spaceId": "walk-in-closet",
    "cabinetId": "sliding-wardrobe",
    "styleId": "wabi-sabi",
    "materialId": "a-oak-white"
  },
  "walk-in-closet|sliding-wardrobe|wabi-sabi|c-cream-brass": {
    "imageFile": "ref_0525__walk-in-closet__sliding-wardrobe__wabi-sabi__c-cream-brass.jpg",
    "spaceId": "walk-in-closet",
    "cabinetId": "sliding-wardrobe",
    "styleId": "wabi-sabi",
    "materialId": "c-cream-brass"
  },
  "walk-in-closet|sliding-wardrobe|wabi-sabi|f-cement-rattan": {
    "imageFile": "ref_0526__walk-in-closet__sliding-wardrobe__wabi-sabi__f-cement-rattan.jpg",
    "spaceId": "walk-in-closet",
    "cabinetId": "sliding-wardrobe",
    "styleId": "wabi-sabi",
    "materialId": "f-cement-rattan"
  },
  "walk-in-closet|sliding-wardrobe|american-vintage|e-walnut-glass": {
    "imageFile": "ref_0527__walk-in-closet__sliding-wardrobe__american-vintage__e-walnut-glass.jpg",
    "spaceId": "walk-in-closet",
    "cabinetId": "sliding-wardrobe",
    "styleId": "american-vintage",
    "materialId": "e-walnut-glass"
  },
  "walk-in-closet|sliding-wardrobe|american-vintage|g-american-white": {
    "imageFile": "ref_0528__walk-in-closet__sliding-wardrobe__american-vintage__g-american-white.jpg",
    "spaceId": "walk-in-closet",
    "cabinetId": "sliding-wardrobe",
    "styleId": "american-vintage",
    "materialId": "g-american-white"
  },
  "walk-in-closet|sliding-wardrobe|modern-luxury|b-gloss-white": {
    "imageFile": "ref_0529__walk-in-closet__sliding-wardrobe__modern-luxury__b-gloss-white.jpg",
    "spaceId": "walk-in-closet",
    "cabinetId": "sliding-wardrobe",
    "styleId": "modern-luxury",
    "materialId": "b-gloss-white"
  },
  "walk-in-closet|sliding-wardrobe|modern-luxury|c-cream-brass": {
    "imageFile": "ref_0530__walk-in-closet__sliding-wardrobe__modern-luxury__c-cream-brass.jpg",
    "spaceId": "walk-in-closet",
    "cabinetId": "sliding-wardrobe",
    "styleId": "modern-luxury",
    "materialId": "c-cream-brass"
  },
  "walk-in-closet|sliding-wardrobe|modern-luxury|d-dark-grey": {
    "imageFile": "ref_0531__walk-in-closet__sliding-wardrobe__modern-luxury__d-dark-grey.jpg",
    "spaceId": "walk-in-closet",
    "cabinetId": "sliding-wardrobe",
    "styleId": "modern-luxury",
    "materialId": "d-dark-grey"
  },
  "walk-in-closet|sliding-wardrobe|modern-luxury|e-walnut-glass": {
    "imageFile": "ref_0532__walk-in-closet__sliding-wardrobe__modern-luxury__e-walnut-glass.jpg",
    "spaceId": "walk-in-closet",
    "cabinetId": "sliding-wardrobe",
    "styleId": "modern-luxury",
    "materialId": "e-walnut-glass"
  },
  "walk-in-closet|accessories-island|modern-minimalist|a-oak-white": {
    "imageFile": "ref_0533__walk-in-closet__accessories-island__modern-minimalist__a-oak-white.jpg",
    "spaceId": "walk-in-closet",
    "cabinetId": "accessories-island",
    "styleId": "modern-minimalist",
    "materialId": "a-oak-white"
  },
  "walk-in-closet|accessories-island|modern-minimalist|b-gloss-white": {
    "imageFile": "ref_0534__walk-in-closet__accessories-island__modern-minimalist__b-gloss-white.jpg",
    "spaceId": "walk-in-closet",
    "cabinetId": "accessories-island",
    "styleId": "modern-minimalist",
    "materialId": "b-gloss-white"
  },
  "walk-in-closet|accessories-island|modern-minimalist|d-dark-grey": {
    "imageFile": "ref_0535__walk-in-closet__accessories-island__modern-minimalist__d-dark-grey.jpg",
    "spaceId": "walk-in-closet",
    "cabinetId": "accessories-island",
    "styleId": "modern-minimalist",
    "materialId": "d-dark-grey"
  },
  "walk-in-closet|accessories-island|modern-minimalist|h-matte-white": {
    "imageFile": "ref_0536__walk-in-closet__accessories-island__modern-minimalist__h-matte-white.jpg",
    "spaceId": "walk-in-closet",
    "cabinetId": "accessories-island",
    "styleId": "modern-minimalist",
    "materialId": "h-matte-white"
  },
  "walk-in-closet|accessories-island|french-cream|c-cream-brass": {
    "imageFile": "ref_0537__walk-in-closet__accessories-island__french-cream__c-cream-brass.jpg",
    "spaceId": "walk-in-closet",
    "cabinetId": "accessories-island",
    "styleId": "french-cream",
    "materialId": "c-cream-brass"
  },
  "walk-in-closet|accessories-island|italian-minimal|d-dark-grey": {
    "imageFile": "ref_0538__walk-in-closet__accessories-island__italian-minimal__d-dark-grey.jpg",
    "spaceId": "walk-in-closet",
    "cabinetId": "accessories-island",
    "styleId": "italian-minimal",
    "materialId": "d-dark-grey"
  },
  "walk-in-closet|accessories-island|italian-minimal|h-matte-white": {
    "imageFile": "ref_0539__walk-in-closet__accessories-island__italian-minimal__h-matte-white.jpg",
    "spaceId": "walk-in-closet",
    "cabinetId": "accessories-island",
    "styleId": "italian-minimal",
    "materialId": "h-matte-white"
  },
  "walk-in-closet|accessories-island|japanese-wood|a-oak-white": {
    "imageFile": "ref_0540__walk-in-closet__accessories-island__japanese-wood__a-oak-white.jpg",
    "spaceId": "walk-in-closet",
    "cabinetId": "accessories-island",
    "styleId": "japanese-wood",
    "materialId": "a-oak-white"
  },
  "walk-in-closet|accessories-island|japanese-wood|f-cement-rattan": {
    "imageFile": "ref_0541__walk-in-closet__accessories-island__japanese-wood__f-cement-rattan.jpg",
    "spaceId": "walk-in-closet",
    "cabinetId": "accessories-island",
    "styleId": "japanese-wood",
    "materialId": "f-cement-rattan"
  },
  "walk-in-closet|accessories-island|modern-chinese|e-walnut-glass": {
    "imageFile": "ref_0542__walk-in-closet__accessories-island__modern-chinese__e-walnut-glass.jpg",
    "spaceId": "walk-in-closet",
    "cabinetId": "accessories-island",
    "styleId": "modern-chinese",
    "materialId": "e-walnut-glass"
  },
  "walk-in-closet|accessories-island|wabi-sabi|a-oak-white": {
    "imageFile": "ref_0543__walk-in-closet__accessories-island__wabi-sabi__a-oak-white.jpg",
    "spaceId": "walk-in-closet",
    "cabinetId": "accessories-island",
    "styleId": "wabi-sabi",
    "materialId": "a-oak-white"
  },
  "walk-in-closet|accessories-island|wabi-sabi|c-cream-brass": {
    "imageFile": "ref_0544__walk-in-closet__accessories-island__wabi-sabi__c-cream-brass.jpg",
    "spaceId": "walk-in-closet",
    "cabinetId": "accessories-island",
    "styleId": "wabi-sabi",
    "materialId": "c-cream-brass"
  },
  "walk-in-closet|accessories-island|wabi-sabi|f-cement-rattan": {
    "imageFile": "ref_0545__walk-in-closet__accessories-island__wabi-sabi__f-cement-rattan.jpg",
    "spaceId": "walk-in-closet",
    "cabinetId": "accessories-island",
    "styleId": "wabi-sabi",
    "materialId": "f-cement-rattan"
  },
  "walk-in-closet|accessories-island|american-vintage|e-walnut-glass": {
    "imageFile": "ref_0546__walk-in-closet__accessories-island__american-vintage__e-walnut-glass.jpg",
    "spaceId": "walk-in-closet",
    "cabinetId": "accessories-island",
    "styleId": "american-vintage",
    "materialId": "e-walnut-glass"
  },
  "walk-in-closet|accessories-island|american-vintage|g-american-white": {
    "imageFile": "ref_0547__walk-in-closet__accessories-island__american-vintage__g-american-white.jpg",
    "spaceId": "walk-in-closet",
    "cabinetId": "accessories-island",
    "styleId": "american-vintage",
    "materialId": "g-american-white"
  },
  "walk-in-closet|accessories-island|modern-luxury|b-gloss-white": {
    "imageFile": "ref_0548__walk-in-closet__accessories-island__modern-luxury__b-gloss-white.jpg",
    "spaceId": "walk-in-closet",
    "cabinetId": "accessories-island",
    "styleId": "modern-luxury",
    "materialId": "b-gloss-white"
  },
  "walk-in-closet|accessories-island|modern-luxury|c-cream-brass": {
    "imageFile": "ref_0549__walk-in-closet__accessories-island__modern-luxury__c-cream-brass.jpg",
    "spaceId": "walk-in-closet",
    "cabinetId": "accessories-island",
    "styleId": "modern-luxury",
    "materialId": "c-cream-brass"
  },
  "walk-in-closet|accessories-island|modern-luxury|d-dark-grey": {
    "imageFile": "ref_0550__walk-in-closet__accessories-island__modern-luxury__d-dark-grey.jpg",
    "spaceId": "walk-in-closet",
    "cabinetId": "accessories-island",
    "styleId": "modern-luxury",
    "materialId": "d-dark-grey"
  },
  "walk-in-closet|accessories-island|modern-luxury|e-walnut-glass": {
    "imageFile": "ref_0551__walk-in-closet__accessories-island__modern-luxury__e-walnut-glass.jpg",
    "spaceId": "walk-in-closet",
    "cabinetId": "accessories-island",
    "styleId": "modern-luxury",
    "materialId": "e-walnut-glass"
  },
  "dining-room|island|modern-minimalist|a-oak-white": {
    "imageFile": "ref_0552__dining-room__island__modern-minimalist__a-oak-white.jpg",
    "spaceId": "dining-room",
    "cabinetId": "island",
    "styleId": "modern-minimalist",
    "materialId": "a-oak-white"
  },
  "dining-room|island|modern-minimalist|b-gloss-white": {
    "imageFile": "ref_0553__dining-room__island__modern-minimalist__b-gloss-white.jpg",
    "spaceId": "dining-room",
    "cabinetId": "island",
    "styleId": "modern-minimalist",
    "materialId": "b-gloss-white"
  },
  "dining-room|island|modern-minimalist|d-dark-grey": {
    "imageFile": "ref_0554__dining-room__island__modern-minimalist__d-dark-grey.jpg",
    "spaceId": "dining-room",
    "cabinetId": "island",
    "styleId": "modern-minimalist",
    "materialId": "d-dark-grey"
  },
  "dining-room|island|modern-minimalist|h-matte-white": {
    "imageFile": "ref_0555__dining-room__island__modern-minimalist__h-matte-white.jpg",
    "spaceId": "dining-room",
    "cabinetId": "island",
    "styleId": "modern-minimalist",
    "materialId": "h-matte-white"
  },
  "dining-room|island|french-cream|c-cream-brass": {
    "imageFile": "ref_0556__dining-room__island__french-cream__c-cream-brass.jpg",
    "spaceId": "dining-room",
    "cabinetId": "island",
    "styleId": "french-cream",
    "materialId": "c-cream-brass"
  },
  "dining-room|island|italian-minimal|d-dark-grey": {
    "imageFile": "ref_0557__dining-room__island__italian-minimal__d-dark-grey.jpg",
    "spaceId": "dining-room",
    "cabinetId": "island",
    "styleId": "italian-minimal",
    "materialId": "d-dark-grey"
  },
  "dining-room|island|italian-minimal|h-matte-white": {
    "imageFile": "ref_0558__dining-room__island__italian-minimal__h-matte-white.jpg",
    "spaceId": "dining-room",
    "cabinetId": "island",
    "styleId": "italian-minimal",
    "materialId": "h-matte-white"
  },
  "dining-room|island|japanese-wood|a-oak-white": {
    "imageFile": "ref_0559__dining-room__island__japanese-wood__a-oak-white.jpg",
    "spaceId": "dining-room",
    "cabinetId": "island",
    "styleId": "japanese-wood",
    "materialId": "a-oak-white"
  },
  "dining-room|island|japanese-wood|f-cement-rattan": {
    "imageFile": "ref_0560__dining-room__island__japanese-wood__f-cement-rattan.jpg",
    "spaceId": "dining-room",
    "cabinetId": "island",
    "styleId": "japanese-wood",
    "materialId": "f-cement-rattan"
  },
  "dining-room|island|modern-chinese|e-walnut-glass": {
    "imageFile": "ref_0561__dining-room__island__modern-chinese__e-walnut-glass.jpg",
    "spaceId": "dining-room",
    "cabinetId": "island",
    "styleId": "modern-chinese",
    "materialId": "e-walnut-glass"
  },
  "dining-room|island|wabi-sabi|a-oak-white": {
    "imageFile": "ref_0562__dining-room__island__wabi-sabi__a-oak-white.jpg",
    "spaceId": "dining-room",
    "cabinetId": "island",
    "styleId": "wabi-sabi",
    "materialId": "a-oak-white"
  },
  "dining-room|island|wabi-sabi|c-cream-brass": {
    "imageFile": "ref_0563__dining-room__island__wabi-sabi__c-cream-brass.jpg",
    "spaceId": "dining-room",
    "cabinetId": "island",
    "styleId": "wabi-sabi",
    "materialId": "c-cream-brass"
  },
  "dining-room|island|wabi-sabi|f-cement-rattan": {
    "imageFile": "ref_0564__dining-room__island__wabi-sabi__f-cement-rattan.jpg",
    "spaceId": "dining-room",
    "cabinetId": "island",
    "styleId": "wabi-sabi",
    "materialId": "f-cement-rattan"
  },
  "dining-room|island|american-vintage|e-walnut-glass": {
    "imageFile": "ref_0565__dining-room__island__american-vintage__e-walnut-glass.jpg",
    "spaceId": "dining-room",
    "cabinetId": "island",
    "styleId": "american-vintage",
    "materialId": "e-walnut-glass"
  },
  "dining-room|island|american-vintage|g-american-white": {
    "imageFile": "ref_0566__dining-room__island__american-vintage__g-american-white.jpg",
    "spaceId": "dining-room",
    "cabinetId": "island",
    "styleId": "american-vintage",
    "materialId": "g-american-white"
  },
  "dining-room|island|modern-luxury|b-gloss-white": {
    "imageFile": "ref_0567__dining-room__island__modern-luxury__b-gloss-white.jpg",
    "spaceId": "dining-room",
    "cabinetId": "island",
    "styleId": "modern-luxury",
    "materialId": "b-gloss-white"
  },
  "dining-room|island|modern-luxury|c-cream-brass": {
    "imageFile": "ref_0568__dining-room__island__modern-luxury__c-cream-brass.jpg",
    "spaceId": "dining-room",
    "cabinetId": "island",
    "styleId": "modern-luxury",
    "materialId": "c-cream-brass"
  },
  "dining-room|island|modern-luxury|d-dark-grey": {
    "imageFile": "ref_0569__dining-room__island__modern-luxury__d-dark-grey.jpg",
    "spaceId": "dining-room",
    "cabinetId": "island",
    "styleId": "modern-luxury",
    "materialId": "d-dark-grey"
  },
  "dining-room|island|modern-luxury|e-walnut-glass": {
    "imageFile": "ref_0570__dining-room__island__modern-luxury__e-walnut-glass.jpg",
    "spaceId": "dining-room",
    "cabinetId": "island",
    "styleId": "modern-luxury",
    "materialId": "e-walnut-glass"
  },
  "dining-room|sideboard|modern-minimalist|a-oak-white": {
    "imageFile": "ref_0571__dining-room__sideboard__modern-minimalist__a-oak-white.jpg",
    "spaceId": "dining-room",
    "cabinetId": "sideboard",
    "styleId": "modern-minimalist",
    "materialId": "a-oak-white"
  },
  "dining-room|sideboard|modern-minimalist|b-gloss-white": {
    "imageFile": "ref_0572__dining-room__sideboard__modern-minimalist__b-gloss-white.jpg",
    "spaceId": "dining-room",
    "cabinetId": "sideboard",
    "styleId": "modern-minimalist",
    "materialId": "b-gloss-white"
  },
  "dining-room|sideboard|modern-minimalist|d-dark-grey": {
    "imageFile": "ref_0573__dining-room__sideboard__modern-minimalist__d-dark-grey.jpg",
    "spaceId": "dining-room",
    "cabinetId": "sideboard",
    "styleId": "modern-minimalist",
    "materialId": "d-dark-grey"
  },
  "dining-room|sideboard|modern-minimalist|h-matte-white": {
    "imageFile": "ref_0574__dining-room__sideboard__modern-minimalist__h-matte-white.jpg",
    "spaceId": "dining-room",
    "cabinetId": "sideboard",
    "styleId": "modern-minimalist",
    "materialId": "h-matte-white"
  },
  "dining-room|sideboard|french-cream|c-cream-brass": {
    "imageFile": "ref_0575__dining-room__sideboard__french-cream__c-cream-brass.jpg",
    "spaceId": "dining-room",
    "cabinetId": "sideboard",
    "styleId": "french-cream",
    "materialId": "c-cream-brass"
  },
  "dining-room|sideboard|italian-minimal|d-dark-grey": {
    "imageFile": "ref_0576__dining-room__sideboard__italian-minimal__d-dark-grey.jpg",
    "spaceId": "dining-room",
    "cabinetId": "sideboard",
    "styleId": "italian-minimal",
    "materialId": "d-dark-grey"
  },
  "dining-room|sideboard|italian-minimal|h-matte-white": {
    "imageFile": "ref_0577__dining-room__sideboard__italian-minimal__h-matte-white.jpg",
    "spaceId": "dining-room",
    "cabinetId": "sideboard",
    "styleId": "italian-minimal",
    "materialId": "h-matte-white"
  },
  "dining-room|sideboard|japanese-wood|a-oak-white": {
    "imageFile": "ref_0578__dining-room__sideboard__japanese-wood__a-oak-white.jpg",
    "spaceId": "dining-room",
    "cabinetId": "sideboard",
    "styleId": "japanese-wood",
    "materialId": "a-oak-white"
  },
  "dining-room|sideboard|japanese-wood|f-cement-rattan": {
    "imageFile": "ref_0579__dining-room__sideboard__japanese-wood__f-cement-rattan.jpg",
    "spaceId": "dining-room",
    "cabinetId": "sideboard",
    "styleId": "japanese-wood",
    "materialId": "f-cement-rattan"
  },
  "dining-room|sideboard|modern-chinese|e-walnut-glass": {
    "imageFile": "ref_0580__dining-room__sideboard__modern-chinese__e-walnut-glass.jpg",
    "spaceId": "dining-room",
    "cabinetId": "sideboard",
    "styleId": "modern-chinese",
    "materialId": "e-walnut-glass"
  },
  "dining-room|sideboard|wabi-sabi|a-oak-white": {
    "imageFile": "ref_0581__dining-room__sideboard__wabi-sabi__a-oak-white.jpg",
    "spaceId": "dining-room",
    "cabinetId": "sideboard",
    "styleId": "wabi-sabi",
    "materialId": "a-oak-white"
  },
  "dining-room|sideboard|wabi-sabi|c-cream-brass": {
    "imageFile": "ref_0582__dining-room__sideboard__wabi-sabi__c-cream-brass.jpg",
    "spaceId": "dining-room",
    "cabinetId": "sideboard",
    "styleId": "wabi-sabi",
    "materialId": "c-cream-brass"
  },
  "dining-room|sideboard|wabi-sabi|f-cement-rattan": {
    "imageFile": "ref_0583__dining-room__sideboard__wabi-sabi__f-cement-rattan.jpg",
    "spaceId": "dining-room",
    "cabinetId": "sideboard",
    "styleId": "wabi-sabi",
    "materialId": "f-cement-rattan"
  },
  "dining-room|sideboard|american-vintage|e-walnut-glass": {
    "imageFile": "ref_0584__dining-room__sideboard__american-vintage__e-walnut-glass.jpg",
    "spaceId": "dining-room",
    "cabinetId": "sideboard",
    "styleId": "american-vintage",
    "materialId": "e-walnut-glass"
  },
  "dining-room|sideboard|american-vintage|g-american-white": {
    "imageFile": "ref_0585__dining-room__sideboard__american-vintage__g-american-white.jpg",
    "spaceId": "dining-room",
    "cabinetId": "sideboard",
    "styleId": "american-vintage",
    "materialId": "g-american-white"
  },
  "dining-room|sideboard|modern-luxury|b-gloss-white": {
    "imageFile": "ref_0586__dining-room__sideboard__modern-luxury__b-gloss-white.jpg",
    "spaceId": "dining-room",
    "cabinetId": "sideboard",
    "styleId": "modern-luxury",
    "materialId": "b-gloss-white"
  },
  "dining-room|sideboard|modern-luxury|c-cream-brass": {
    "imageFile": "ref_0587__dining-room__sideboard__modern-luxury__c-cream-brass.jpg",
    "spaceId": "dining-room",
    "cabinetId": "sideboard",
    "styleId": "modern-luxury",
    "materialId": "c-cream-brass"
  },
  "dining-room|sideboard|modern-luxury|d-dark-grey": {
    "imageFile": "ref_0588__dining-room__sideboard__modern-luxury__d-dark-grey.jpg",
    "spaceId": "dining-room",
    "cabinetId": "sideboard",
    "styleId": "modern-luxury",
    "materialId": "d-dark-grey"
  },
  "dining-room|sideboard|modern-luxury|e-walnut-glass": {
    "imageFile": "ref_0589__dining-room__sideboard__modern-luxury__e-walnut-glass.jpg",
    "spaceId": "dining-room",
    "cabinetId": "sideboard",
    "styleId": "modern-luxury",
    "materialId": "e-walnut-glass"
  },
  "ldk|bookshelf|modern-minimalist|a-oak-white": {
    "imageFile": "ref_0590__ldk__bookshelf__modern-minimalist__a-oak-white.jpg",
    "spaceId": "ldk",
    "cabinetId": "bookshelf",
    "styleId": "modern-minimalist",
    "materialId": "a-oak-white"
  },
  "ldk|bookshelf|modern-minimalist|b-gloss-white": {
    "imageFile": "ref_0591__ldk__bookshelf__modern-minimalist__b-gloss-white.jpg",
    "spaceId": "ldk",
    "cabinetId": "bookshelf",
    "styleId": "modern-minimalist",
    "materialId": "b-gloss-white"
  },
  "ldk|bookshelf|modern-minimalist|d-dark-grey": {
    "imageFile": "ref_0592__ldk__bookshelf__modern-minimalist__d-dark-grey.jpg",
    "spaceId": "ldk",
    "cabinetId": "bookshelf",
    "styleId": "modern-minimalist",
    "materialId": "d-dark-grey"
  },
  "ldk|bookshelf|modern-minimalist|h-matte-white": {
    "imageFile": "ref_0593__ldk__bookshelf__modern-minimalist__h-matte-white.jpg",
    "spaceId": "ldk",
    "cabinetId": "bookshelf",
    "styleId": "modern-minimalist",
    "materialId": "h-matte-white"
  },
  "ldk|bookshelf|french-cream|c-cream-brass": {
    "imageFile": "ref_0594__ldk__bookshelf__french-cream__c-cream-brass.jpg",
    "spaceId": "ldk",
    "cabinetId": "bookshelf",
    "styleId": "french-cream",
    "materialId": "c-cream-brass"
  },
  "ldk|bookshelf|italian-minimal|d-dark-grey": {
    "imageFile": "ref_0595__ldk__bookshelf__italian-minimal__d-dark-grey.jpg",
    "spaceId": "ldk",
    "cabinetId": "bookshelf",
    "styleId": "italian-minimal",
    "materialId": "d-dark-grey"
  },
  "ldk|bookshelf|italian-minimal|h-matte-white": {
    "imageFile": "ref_0596__ldk__bookshelf__italian-minimal__h-matte-white.jpg",
    "spaceId": "ldk",
    "cabinetId": "bookshelf",
    "styleId": "italian-minimal",
    "materialId": "h-matte-white"
  },
  "ldk|bookshelf|japanese-wood|a-oak-white": {
    "imageFile": "ref_0597__ldk__bookshelf__japanese-wood__a-oak-white.jpg",
    "spaceId": "ldk",
    "cabinetId": "bookshelf",
    "styleId": "japanese-wood",
    "materialId": "a-oak-white"
  },
  "ldk|bookshelf|japanese-wood|f-cement-rattan": {
    "imageFile": "ref_0598__ldk__bookshelf__japanese-wood__f-cement-rattan.jpg",
    "spaceId": "ldk",
    "cabinetId": "bookshelf",
    "styleId": "japanese-wood",
    "materialId": "f-cement-rattan"
  },
  "ldk|bookshelf|modern-chinese|e-walnut-glass": {
    "imageFile": "ref_0599__ldk__bookshelf__modern-chinese__e-walnut-glass.jpg",
    "spaceId": "ldk",
    "cabinetId": "bookshelf",
    "styleId": "modern-chinese",
    "materialId": "e-walnut-glass"
  },
  "ldk|bookshelf|wabi-sabi|a-oak-white": {
    "imageFile": "ref_0600__ldk__bookshelf__wabi-sabi__a-oak-white.jpg",
    "spaceId": "ldk",
    "cabinetId": "bookshelf",
    "styleId": "wabi-sabi",
    "materialId": "a-oak-white"
  },
  "ldk|bookshelf|wabi-sabi|c-cream-brass": {
    "imageFile": "ref_0601__ldk__bookshelf__wabi-sabi__c-cream-brass.jpg",
    "spaceId": "ldk",
    "cabinetId": "bookshelf",
    "styleId": "wabi-sabi",
    "materialId": "c-cream-brass"
  },
  "ldk|bookshelf|wabi-sabi|f-cement-rattan": {
    "imageFile": "ref_0602__ldk__bookshelf__wabi-sabi__f-cement-rattan.jpg",
    "spaceId": "ldk",
    "cabinetId": "bookshelf",
    "styleId": "wabi-sabi",
    "materialId": "f-cement-rattan"
  },
  "ldk|bookshelf|american-vintage|e-walnut-glass": {
    "imageFile": "ref_0603__ldk__bookshelf__american-vintage__e-walnut-glass.jpg",
    "spaceId": "ldk",
    "cabinetId": "bookshelf",
    "styleId": "american-vintage",
    "materialId": "e-walnut-glass"
  },
  "ldk|bookshelf|american-vintage|g-american-white": {
    "imageFile": "ref_0604__ldk__bookshelf__american-vintage__g-american-white.jpg",
    "spaceId": "ldk",
    "cabinetId": "bookshelf",
    "styleId": "american-vintage",
    "materialId": "g-american-white"
  },
  "ldk|bookshelf|modern-luxury|b-gloss-white": {
    "imageFile": "ref_0605__ldk__bookshelf__modern-luxury__b-gloss-white.jpg",
    "spaceId": "ldk",
    "cabinetId": "bookshelf",
    "styleId": "modern-luxury",
    "materialId": "b-gloss-white"
  },
  "ldk|bookshelf|modern-luxury|c-cream-brass": {
    "imageFile": "ref_0606__ldk__bookshelf__modern-luxury__c-cream-brass.jpg",
    "spaceId": "ldk",
    "cabinetId": "bookshelf",
    "styleId": "modern-luxury",
    "materialId": "c-cream-brass"
  },
  "ldk|bookshelf|modern-luxury|d-dark-grey": {
    "imageFile": "ref_0607__ldk__bookshelf__modern-luxury__d-dark-grey.jpg",
    "spaceId": "ldk",
    "cabinetId": "bookshelf",
    "styleId": "modern-luxury",
    "materialId": "d-dark-grey"
  },
  "ldk|bookshelf|modern-luxury|e-walnut-glass": {
    "imageFile": "ref_0608__ldk__bookshelf__modern-luxury__e-walnut-glass.jpg",
    "spaceId": "ldk",
    "cabinetId": "bookshelf",
    "styleId": "modern-luxury",
    "materialId": "e-walnut-glass"
  },
  "ldk|island|modern-minimalist|a-oak-white": {
    "imageFile": "ref_0609__ldk__island__modern-minimalist__a-oak-white.jpg",
    "spaceId": "ldk",
    "cabinetId": "island",
    "styleId": "modern-minimalist",
    "materialId": "a-oak-white"
  },
  "ldk|island|modern-minimalist|b-gloss-white": {
    "imageFile": "ref_0610__ldk__island__modern-minimalist__b-gloss-white.jpg",
    "spaceId": "ldk",
    "cabinetId": "island",
    "styleId": "modern-minimalist",
    "materialId": "b-gloss-white"
  },
  "ldk|island|modern-minimalist|d-dark-grey": {
    "imageFile": "ref_0611__ldk__island__modern-minimalist__d-dark-grey.jpg",
    "spaceId": "ldk",
    "cabinetId": "island",
    "styleId": "modern-minimalist",
    "materialId": "d-dark-grey"
  },
  "ldk|island|modern-minimalist|h-matte-white": {
    "imageFile": "ref_0612__ldk__island__modern-minimalist__h-matte-white.jpg",
    "spaceId": "ldk",
    "cabinetId": "island",
    "styleId": "modern-minimalist",
    "materialId": "h-matte-white"
  },
  "ldk|island|french-cream|c-cream-brass": {
    "imageFile": "ref_0613__ldk__island__french-cream__c-cream-brass.jpg",
    "spaceId": "ldk",
    "cabinetId": "island",
    "styleId": "french-cream",
    "materialId": "c-cream-brass"
  },
  "ldk|island|italian-minimal|d-dark-grey": {
    "imageFile": "ref_0614__ldk__island__italian-minimal__d-dark-grey.jpg",
    "spaceId": "ldk",
    "cabinetId": "island",
    "styleId": "italian-minimal",
    "materialId": "d-dark-grey"
  },
  "ldk|island|italian-minimal|h-matte-white": {
    "imageFile": "ref_0615__ldk__island__italian-minimal__h-matte-white.jpg",
    "spaceId": "ldk",
    "cabinetId": "island",
    "styleId": "italian-minimal",
    "materialId": "h-matte-white"
  },
  "ldk|island|japanese-wood|a-oak-white": {
    "imageFile": "ref_0616__ldk__island__japanese-wood__a-oak-white.jpg",
    "spaceId": "ldk",
    "cabinetId": "island",
    "styleId": "japanese-wood",
    "materialId": "a-oak-white"
  },
  "ldk|island|japanese-wood|f-cement-rattan": {
    "imageFile": "ref_0617__ldk__island__japanese-wood__f-cement-rattan.jpg",
    "spaceId": "ldk",
    "cabinetId": "island",
    "styleId": "japanese-wood",
    "materialId": "f-cement-rattan"
  },
  "ldk|island|modern-chinese|e-walnut-glass": {
    "imageFile": "ref_0618__ldk__island__modern-chinese__e-walnut-glass.jpg",
    "spaceId": "ldk",
    "cabinetId": "island",
    "styleId": "modern-chinese",
    "materialId": "e-walnut-glass"
  },
  "ldk|island|wabi-sabi|a-oak-white": {
    "imageFile": "ref_0619__ldk__island__wabi-sabi__a-oak-white.jpg",
    "spaceId": "ldk",
    "cabinetId": "island",
    "styleId": "wabi-sabi",
    "materialId": "a-oak-white"
  },
  "ldk|island|wabi-sabi|c-cream-brass": {
    "imageFile": "ref_0620__ldk__island__wabi-sabi__c-cream-brass.jpg",
    "spaceId": "ldk",
    "cabinetId": "island",
    "styleId": "wabi-sabi",
    "materialId": "c-cream-brass"
  },
  "ldk|island|wabi-sabi|f-cement-rattan": {
    "imageFile": "ref_0621__ldk__island__wabi-sabi__f-cement-rattan.jpg",
    "spaceId": "ldk",
    "cabinetId": "island",
    "styleId": "wabi-sabi",
    "materialId": "f-cement-rattan"
  },
  "ldk|island|american-vintage|e-walnut-glass": {
    "imageFile": "ref_0622__ldk__island__american-vintage__e-walnut-glass.jpg",
    "spaceId": "ldk",
    "cabinetId": "island",
    "styleId": "american-vintage",
    "materialId": "e-walnut-glass"
  },
  "ldk|island|american-vintage|g-american-white": {
    "imageFile": "ref_0623__ldk__island__american-vintage__g-american-white.jpg",
    "spaceId": "ldk",
    "cabinetId": "island",
    "styleId": "american-vintage",
    "materialId": "g-american-white"
  },
  "ldk|island|modern-luxury|b-gloss-white": {
    "imageFile": "ref_0624__ldk__island__modern-luxury__b-gloss-white.jpg",
    "spaceId": "ldk",
    "cabinetId": "island",
    "styleId": "modern-luxury",
    "materialId": "b-gloss-white"
  },
  "ldk|island|modern-luxury|c-cream-brass": {
    "imageFile": "ref_0625__ldk__island__modern-luxury__c-cream-brass.jpg",
    "spaceId": "ldk",
    "cabinetId": "island",
    "styleId": "modern-luxury",
    "materialId": "c-cream-brass"
  },
  "ldk|island|modern-luxury|d-dark-grey": {
    "imageFile": "ref_0626__ldk__island__modern-luxury__d-dark-grey.jpg",
    "spaceId": "ldk",
    "cabinetId": "island",
    "styleId": "modern-luxury",
    "materialId": "d-dark-grey"
  },
  "ldk|island|modern-luxury|e-walnut-glass": {
    "imageFile": "ref_0627__ldk__island__modern-luxury__e-walnut-glass.jpg",
    "spaceId": "ldk",
    "cabinetId": "island",
    "styleId": "modern-luxury",
    "materialId": "e-walnut-glass"
  },
  "ldk|sideboard|modern-minimalist|a-oak-white": {
    "imageFile": "ref_0628__ldk__sideboard__modern-minimalist__a-oak-white.jpg",
    "spaceId": "ldk",
    "cabinetId": "sideboard",
    "styleId": "modern-minimalist",
    "materialId": "a-oak-white"
  },
  "ldk|sideboard|modern-minimalist|b-gloss-white": {
    "imageFile": "ref_0629__ldk__sideboard__modern-minimalist__b-gloss-white.jpg",
    "spaceId": "ldk",
    "cabinetId": "sideboard",
    "styleId": "modern-minimalist",
    "materialId": "b-gloss-white"
  },
  "ldk|sideboard|modern-minimalist|d-dark-grey": {
    "imageFile": "ref_0630__ldk__sideboard__modern-minimalist__d-dark-grey.jpg",
    "spaceId": "ldk",
    "cabinetId": "sideboard",
    "styleId": "modern-minimalist",
    "materialId": "d-dark-grey"
  },
  "ldk|sideboard|modern-minimalist|h-matte-white": {
    "imageFile": "ref_0631__ldk__sideboard__modern-minimalist__h-matte-white.jpg",
    "spaceId": "ldk",
    "cabinetId": "sideboard",
    "styleId": "modern-minimalist",
    "materialId": "h-matte-white"
  },
  "ldk|sideboard|french-cream|c-cream-brass": {
    "imageFile": "ref_0632__ldk__sideboard__french-cream__c-cream-brass.jpg",
    "spaceId": "ldk",
    "cabinetId": "sideboard",
    "styleId": "french-cream",
    "materialId": "c-cream-brass"
  },
  "ldk|sideboard|italian-minimal|d-dark-grey": {
    "imageFile": "ref_0633__ldk__sideboard__italian-minimal__d-dark-grey.jpg",
    "spaceId": "ldk",
    "cabinetId": "sideboard",
    "styleId": "italian-minimal",
    "materialId": "d-dark-grey"
  },
  "ldk|sideboard|italian-minimal|h-matte-white": {
    "imageFile": "ref_0634__ldk__sideboard__italian-minimal__h-matte-white.jpg",
    "spaceId": "ldk",
    "cabinetId": "sideboard",
    "styleId": "italian-minimal",
    "materialId": "h-matte-white"
  },
  "ldk|sideboard|japanese-wood|a-oak-white": {
    "imageFile": "ref_0635__ldk__sideboard__japanese-wood__a-oak-white.jpg",
    "spaceId": "ldk",
    "cabinetId": "sideboard",
    "styleId": "japanese-wood",
    "materialId": "a-oak-white"
  },
  "ldk|sideboard|japanese-wood|f-cement-rattan": {
    "imageFile": "ref_0636__ldk__sideboard__japanese-wood__f-cement-rattan.jpg",
    "spaceId": "ldk",
    "cabinetId": "sideboard",
    "styleId": "japanese-wood",
    "materialId": "f-cement-rattan"
  },
  "ldk|sideboard|modern-chinese|e-walnut-glass": {
    "imageFile": "ref_0637__ldk__sideboard__modern-chinese__e-walnut-glass.jpg",
    "spaceId": "ldk",
    "cabinetId": "sideboard",
    "styleId": "modern-chinese",
    "materialId": "e-walnut-glass"
  },
  "ldk|sideboard|wabi-sabi|a-oak-white": {
    "imageFile": "ref_0638__ldk__sideboard__wabi-sabi__a-oak-white.jpg",
    "spaceId": "ldk",
    "cabinetId": "sideboard",
    "styleId": "wabi-sabi",
    "materialId": "a-oak-white"
  },
  "ldk|sideboard|wabi-sabi|c-cream-brass": {
    "imageFile": "ref_0639__ldk__sideboard__wabi-sabi__c-cream-brass.jpg",
    "spaceId": "ldk",
    "cabinetId": "sideboard",
    "styleId": "wabi-sabi",
    "materialId": "c-cream-brass"
  },
  "ldk|sideboard|wabi-sabi|f-cement-rattan": {
    "imageFile": "ref_0640__ldk__sideboard__wabi-sabi__f-cement-rattan.jpg",
    "spaceId": "ldk",
    "cabinetId": "sideboard",
    "styleId": "wabi-sabi",
    "materialId": "f-cement-rattan"
  },
  "ldk|sideboard|american-vintage|e-walnut-glass": {
    "imageFile": "ref_0641__ldk__sideboard__american-vintage__e-walnut-glass.jpg",
    "spaceId": "ldk",
    "cabinetId": "sideboard",
    "styleId": "american-vintage",
    "materialId": "e-walnut-glass"
  },
  "ldk|sideboard|american-vintage|g-american-white": {
    "imageFile": "ref_0642__ldk__sideboard__american-vintage__g-american-white.jpg",
    "spaceId": "ldk",
    "cabinetId": "sideboard",
    "styleId": "american-vintage",
    "materialId": "g-american-white"
  },
  "ldk|sideboard|modern-luxury|b-gloss-white": {
    "imageFile": "ref_0643__ldk__sideboard__modern-luxury__b-gloss-white.jpg",
    "spaceId": "ldk",
    "cabinetId": "sideboard",
    "styleId": "modern-luxury",
    "materialId": "b-gloss-white"
  },
  "ldk|sideboard|modern-luxury|c-cream-brass": {
    "imageFile": "ref_0644__ldk__sideboard__modern-luxury__c-cream-brass.jpg",
    "spaceId": "ldk",
    "cabinetId": "sideboard",
    "styleId": "modern-luxury",
    "materialId": "c-cream-brass"
  },
  "ldk|sideboard|modern-luxury|d-dark-grey": {
    "imageFile": "ref_0645__ldk__sideboard__modern-luxury__d-dark-grey.jpg",
    "spaceId": "ldk",
    "cabinetId": "sideboard",
    "styleId": "modern-luxury",
    "materialId": "d-dark-grey"
  },
  "ldk|sideboard|modern-luxury|e-walnut-glass": {
    "imageFile": "ref_0646__ldk__sideboard__modern-luxury__e-walnut-glass.jpg",
    "spaceId": "ldk",
    "cabinetId": "sideboard",
    "styleId": "modern-luxury",
    "materialId": "e-walnut-glass"
  },
  "kids-room|floor-wardrobe|modern-minimalist|a-oak-white": {
    "imageFile": "ref_0647__kids-room__floor-wardrobe__modern-minimalist__a-oak-white.jpg",
    "spaceId": "kids-room",
    "cabinetId": "floor-wardrobe",
    "styleId": "modern-minimalist",
    "materialId": "a-oak-white"
  },
  "kids-room|floor-wardrobe|modern-minimalist|b-gloss-white": {
    "imageFile": "ref_0648__kids-room__floor-wardrobe__modern-minimalist__b-gloss-white.jpg",
    "spaceId": "kids-room",
    "cabinetId": "floor-wardrobe",
    "styleId": "modern-minimalist",
    "materialId": "b-gloss-white"
  },
  "kids-room|floor-wardrobe|modern-minimalist|d-dark-grey": {
    "imageFile": "ref_0649__kids-room__floor-wardrobe__modern-minimalist__d-dark-grey.jpg",
    "spaceId": "kids-room",
    "cabinetId": "floor-wardrobe",
    "styleId": "modern-minimalist",
    "materialId": "d-dark-grey"
  },
  "kids-room|floor-wardrobe|modern-minimalist|h-matte-white": {
    "imageFile": "ref_0650__kids-room__floor-wardrobe__modern-minimalist__h-matte-white.jpg",
    "spaceId": "kids-room",
    "cabinetId": "floor-wardrobe",
    "styleId": "modern-minimalist",
    "materialId": "h-matte-white"
  },
  "kids-room|floor-wardrobe|french-cream|c-cream-brass": {
    "imageFile": "ref_0651__kids-room__floor-wardrobe__french-cream__c-cream-brass.jpg",
    "spaceId": "kids-room",
    "cabinetId": "floor-wardrobe",
    "styleId": "french-cream",
    "materialId": "c-cream-brass"
  },
  "kids-room|floor-wardrobe|italian-minimal|d-dark-grey": {
    "imageFile": "ref_0652__kids-room__floor-wardrobe__italian-minimal__d-dark-grey.jpg",
    "spaceId": "kids-room",
    "cabinetId": "floor-wardrobe",
    "styleId": "italian-minimal",
    "materialId": "d-dark-grey"
  },
  "kids-room|floor-wardrobe|italian-minimal|h-matte-white": {
    "imageFile": "ref_0653__kids-room__floor-wardrobe__italian-minimal__h-matte-white.jpg",
    "spaceId": "kids-room",
    "cabinetId": "floor-wardrobe",
    "styleId": "italian-minimal",
    "materialId": "h-matte-white"
  },
  "kids-room|floor-wardrobe|japanese-wood|a-oak-white": {
    "imageFile": "ref_0654__kids-room__floor-wardrobe__japanese-wood__a-oak-white.jpg",
    "spaceId": "kids-room",
    "cabinetId": "floor-wardrobe",
    "styleId": "japanese-wood",
    "materialId": "a-oak-white"
  },
  "kids-room|floor-wardrobe|japanese-wood|f-cement-rattan": {
    "imageFile": "ref_0655__kids-room__floor-wardrobe__japanese-wood__f-cement-rattan.jpg",
    "spaceId": "kids-room",
    "cabinetId": "floor-wardrobe",
    "styleId": "japanese-wood",
    "materialId": "f-cement-rattan"
  },
  "kids-room|floor-wardrobe|modern-chinese|e-walnut-glass": {
    "imageFile": "ref_0656__kids-room__floor-wardrobe__modern-chinese__e-walnut-glass.jpg",
    "spaceId": "kids-room",
    "cabinetId": "floor-wardrobe",
    "styleId": "modern-chinese",
    "materialId": "e-walnut-glass"
  },
  "kids-room|floor-wardrobe|wabi-sabi|a-oak-white": {
    "imageFile": "ref_0657__kids-room__floor-wardrobe__wabi-sabi__a-oak-white.jpg",
    "spaceId": "kids-room",
    "cabinetId": "floor-wardrobe",
    "styleId": "wabi-sabi",
    "materialId": "a-oak-white"
  },
  "kids-room|floor-wardrobe|wabi-sabi|c-cream-brass": {
    "imageFile": "ref_0658__kids-room__floor-wardrobe__wabi-sabi__c-cream-brass.jpg",
    "spaceId": "kids-room",
    "cabinetId": "floor-wardrobe",
    "styleId": "wabi-sabi",
    "materialId": "c-cream-brass"
  },
  "kids-room|floor-wardrobe|wabi-sabi|f-cement-rattan": {
    "imageFile": "ref_0659__kids-room__floor-wardrobe__wabi-sabi__f-cement-rattan.jpg",
    "spaceId": "kids-room",
    "cabinetId": "floor-wardrobe",
    "styleId": "wabi-sabi",
    "materialId": "f-cement-rattan"
  },
  "kids-room|floor-wardrobe|american-vintage|e-walnut-glass": {
    "imageFile": "ref_0660__kids-room__floor-wardrobe__american-vintage__e-walnut-glass.jpg",
    "spaceId": "kids-room",
    "cabinetId": "floor-wardrobe",
    "styleId": "american-vintage",
    "materialId": "e-walnut-glass"
  },
  "kids-room|floor-wardrobe|american-vintage|g-american-white": {
    "imageFile": "ref_0661__kids-room__floor-wardrobe__american-vintage__g-american-white.jpg",
    "spaceId": "kids-room",
    "cabinetId": "floor-wardrobe",
    "styleId": "american-vintage",
    "materialId": "g-american-white"
  },
  "kids-room|floor-wardrobe|modern-luxury|b-gloss-white": {
    "imageFile": "ref_0662__kids-room__floor-wardrobe__modern-luxury__b-gloss-white.jpg",
    "spaceId": "kids-room",
    "cabinetId": "floor-wardrobe",
    "styleId": "modern-luxury",
    "materialId": "b-gloss-white"
  },
  "kids-room|floor-wardrobe|modern-luxury|c-cream-brass": {
    "imageFile": "ref_0663__kids-room__floor-wardrobe__modern-luxury__c-cream-brass.jpg",
    "spaceId": "kids-room",
    "cabinetId": "floor-wardrobe",
    "styleId": "modern-luxury",
    "materialId": "c-cream-brass"
  },
  "kids-room|floor-wardrobe|modern-luxury|d-dark-grey": {
    "imageFile": "ref_0664__kids-room__floor-wardrobe__modern-luxury__d-dark-grey.jpg",
    "spaceId": "kids-room",
    "cabinetId": "floor-wardrobe",
    "styleId": "modern-luxury",
    "materialId": "d-dark-grey"
  },
  "kids-room|floor-wardrobe|modern-luxury|e-walnut-glass": {
    "imageFile": "ref_0665__kids-room__floor-wardrobe__modern-luxury__e-walnut-glass.jpg",
    "spaceId": "kids-room",
    "cabinetId": "floor-wardrobe",
    "styleId": "modern-luxury",
    "materialId": "e-walnut-glass"
  },
  "kids-room|sliding-wardrobe|modern-minimalist|a-oak-white": {
    "imageFile": "ref_0666__kids-room__sliding-wardrobe__modern-minimalist__a-oak-white.jpg",
    "spaceId": "kids-room",
    "cabinetId": "sliding-wardrobe",
    "styleId": "modern-minimalist",
    "materialId": "a-oak-white"
  },
  "kids-room|sliding-wardrobe|modern-minimalist|b-gloss-white": {
    "imageFile": "ref_0667__kids-room__sliding-wardrobe__modern-minimalist__b-gloss-white.jpg",
    "spaceId": "kids-room",
    "cabinetId": "sliding-wardrobe",
    "styleId": "modern-minimalist",
    "materialId": "b-gloss-white"
  },
  "kids-room|sliding-wardrobe|modern-minimalist|d-dark-grey": {
    "imageFile": "ref_0668__kids-room__sliding-wardrobe__modern-minimalist__d-dark-grey.jpg",
    "spaceId": "kids-room",
    "cabinetId": "sliding-wardrobe",
    "styleId": "modern-minimalist",
    "materialId": "d-dark-grey"
  },
  "kids-room|sliding-wardrobe|modern-minimalist|h-matte-white": {
    "imageFile": "ref_0669__kids-room__sliding-wardrobe__modern-minimalist__h-matte-white.jpg",
    "spaceId": "kids-room",
    "cabinetId": "sliding-wardrobe",
    "styleId": "modern-minimalist",
    "materialId": "h-matte-white"
  },
  "kids-room|sliding-wardrobe|french-cream|c-cream-brass": {
    "imageFile": "ref_0670__kids-room__sliding-wardrobe__french-cream__c-cream-brass.jpg",
    "spaceId": "kids-room",
    "cabinetId": "sliding-wardrobe",
    "styleId": "french-cream",
    "materialId": "c-cream-brass"
  },
  "kids-room|sliding-wardrobe|italian-minimal|d-dark-grey": {
    "imageFile": "ref_0671__kids-room__sliding-wardrobe__italian-minimal__d-dark-grey.jpg",
    "spaceId": "kids-room",
    "cabinetId": "sliding-wardrobe",
    "styleId": "italian-minimal",
    "materialId": "d-dark-grey"
  },
  "kids-room|sliding-wardrobe|italian-minimal|h-matte-white": {
    "imageFile": "ref_0672__kids-room__sliding-wardrobe__italian-minimal__h-matte-white.jpg",
    "spaceId": "kids-room",
    "cabinetId": "sliding-wardrobe",
    "styleId": "italian-minimal",
    "materialId": "h-matte-white"
  },
  "kids-room|sliding-wardrobe|japanese-wood|a-oak-white": {
    "imageFile": "ref_0673__kids-room__sliding-wardrobe__japanese-wood__a-oak-white.jpg",
    "spaceId": "kids-room",
    "cabinetId": "sliding-wardrobe",
    "styleId": "japanese-wood",
    "materialId": "a-oak-white"
  },
  "kids-room|sliding-wardrobe|japanese-wood|f-cement-rattan": {
    "imageFile": "ref_0674__kids-room__sliding-wardrobe__japanese-wood__f-cement-rattan.jpg",
    "spaceId": "kids-room",
    "cabinetId": "sliding-wardrobe",
    "styleId": "japanese-wood",
    "materialId": "f-cement-rattan"
  },
  "kids-room|sliding-wardrobe|modern-chinese|e-walnut-glass": {
    "imageFile": "ref_0675__kids-room__sliding-wardrobe__modern-chinese__e-walnut-glass.jpg",
    "spaceId": "kids-room",
    "cabinetId": "sliding-wardrobe",
    "styleId": "modern-chinese",
    "materialId": "e-walnut-glass"
  },
  "kids-room|sliding-wardrobe|wabi-sabi|a-oak-white": {
    "imageFile": "ref_0676__kids-room__sliding-wardrobe__wabi-sabi__a-oak-white.jpg",
    "spaceId": "kids-room",
    "cabinetId": "sliding-wardrobe",
    "styleId": "wabi-sabi",
    "materialId": "a-oak-white"
  },
  "kids-room|sliding-wardrobe|wabi-sabi|c-cream-brass": {
    "imageFile": "ref_0677__kids-room__sliding-wardrobe__wabi-sabi__c-cream-brass.jpg",
    "spaceId": "kids-room",
    "cabinetId": "sliding-wardrobe",
    "styleId": "wabi-sabi",
    "materialId": "c-cream-brass"
  },
  "kids-room|sliding-wardrobe|wabi-sabi|f-cement-rattan": {
    "imageFile": "ref_0678__kids-room__sliding-wardrobe__wabi-sabi__f-cement-rattan.jpg",
    "spaceId": "kids-room",
    "cabinetId": "sliding-wardrobe",
    "styleId": "wabi-sabi",
    "materialId": "f-cement-rattan"
  },
  "kids-room|sliding-wardrobe|american-vintage|e-walnut-glass": {
    "imageFile": "ref_0679__kids-room__sliding-wardrobe__american-vintage__e-walnut-glass.jpg",
    "spaceId": "kids-room",
    "cabinetId": "sliding-wardrobe",
    "styleId": "american-vintage",
    "materialId": "e-walnut-glass"
  },
  "kids-room|sliding-wardrobe|american-vintage|g-american-white": {
    "imageFile": "ref_0680__kids-room__sliding-wardrobe__american-vintage__g-american-white.jpg",
    "spaceId": "kids-room",
    "cabinetId": "sliding-wardrobe",
    "styleId": "american-vintage",
    "materialId": "g-american-white"
  },
  "kids-room|sliding-wardrobe|modern-luxury|b-gloss-white": {
    "imageFile": "ref_0681__kids-room__sliding-wardrobe__modern-luxury__b-gloss-white.jpg",
    "spaceId": "kids-room",
    "cabinetId": "sliding-wardrobe",
    "styleId": "modern-luxury",
    "materialId": "b-gloss-white"
  },
  "kids-room|sliding-wardrobe|modern-luxury|c-cream-brass": {
    "imageFile": "ref_0682__kids-room__sliding-wardrobe__modern-luxury__c-cream-brass.jpg",
    "spaceId": "kids-room",
    "cabinetId": "sliding-wardrobe",
    "styleId": "modern-luxury",
    "materialId": "c-cream-brass"
  },
  "kids-room|sliding-wardrobe|modern-luxury|d-dark-grey": {
    "imageFile": "ref_0683__kids-room__sliding-wardrobe__modern-luxury__d-dark-grey.jpg",
    "spaceId": "kids-room",
    "cabinetId": "sliding-wardrobe",
    "styleId": "modern-luxury",
    "materialId": "d-dark-grey"
  },
  "kids-room|sliding-wardrobe|modern-luxury|e-walnut-glass": {
    "imageFile": "ref_0684__kids-room__sliding-wardrobe__modern-luxury__e-walnut-glass.jpg",
    "spaceId": "kids-room",
    "cabinetId": "sliding-wardrobe",
    "styleId": "modern-luxury",
    "materialId": "e-walnut-glass"
  },
  "kids-room|tatami|modern-minimalist|a-oak-white": {
    "imageFile": "ref_0685__kids-room__tatami__modern-minimalist__a-oak-white.jpg",
    "spaceId": "kids-room",
    "cabinetId": "tatami",
    "styleId": "modern-minimalist",
    "materialId": "a-oak-white"
  },
  "kids-room|tatami|modern-minimalist|b-gloss-white": {
    "imageFile": "ref_0686__kids-room__tatami__modern-minimalist__b-gloss-white.jpg",
    "spaceId": "kids-room",
    "cabinetId": "tatami",
    "styleId": "modern-minimalist",
    "materialId": "b-gloss-white"
  },
  "kids-room|tatami|modern-minimalist|d-dark-grey": {
    "imageFile": "ref_0687__kids-room__tatami__modern-minimalist__d-dark-grey.jpg",
    "spaceId": "kids-room",
    "cabinetId": "tatami",
    "styleId": "modern-minimalist",
    "materialId": "d-dark-grey"
  },
  "kids-room|tatami|modern-minimalist|h-matte-white": {
    "imageFile": "ref_0688__kids-room__tatami__modern-minimalist__h-matte-white.jpg",
    "spaceId": "kids-room",
    "cabinetId": "tatami",
    "styleId": "modern-minimalist",
    "materialId": "h-matte-white"
  },
  "kids-room|tatami|french-cream|c-cream-brass": {
    "imageFile": "ref_0689__kids-room__tatami__french-cream__c-cream-brass.jpg",
    "spaceId": "kids-room",
    "cabinetId": "tatami",
    "styleId": "french-cream",
    "materialId": "c-cream-brass"
  },
  "kids-room|tatami|italian-minimal|d-dark-grey": {
    "imageFile": "ref_0690__kids-room__tatami__italian-minimal__d-dark-grey.jpg",
    "spaceId": "kids-room",
    "cabinetId": "tatami",
    "styleId": "italian-minimal",
    "materialId": "d-dark-grey"
  },
  "kids-room|tatami|italian-minimal|h-matte-white": {
    "imageFile": "ref_0691__kids-room__tatami__italian-minimal__h-matte-white.jpg",
    "spaceId": "kids-room",
    "cabinetId": "tatami",
    "styleId": "italian-minimal",
    "materialId": "h-matte-white"
  },
  "kids-room|tatami|japanese-wood|a-oak-white": {
    "imageFile": "ref_0692__kids-room__tatami__japanese-wood__a-oak-white.jpg",
    "spaceId": "kids-room",
    "cabinetId": "tatami",
    "styleId": "japanese-wood",
    "materialId": "a-oak-white"
  },
  "kids-room|tatami|japanese-wood|f-cement-rattan": {
    "imageFile": "ref_0693__kids-room__tatami__japanese-wood__f-cement-rattan.jpg",
    "spaceId": "kids-room",
    "cabinetId": "tatami",
    "styleId": "japanese-wood",
    "materialId": "f-cement-rattan"
  },
  "kids-room|tatami|modern-chinese|e-walnut-glass": {
    "imageFile": "ref_0694__kids-room__tatami__modern-chinese__e-walnut-glass.jpg",
    "spaceId": "kids-room",
    "cabinetId": "tatami",
    "styleId": "modern-chinese",
    "materialId": "e-walnut-glass"
  },
  "kids-room|tatami|wabi-sabi|a-oak-white": {
    "imageFile": "ref_0695__kids-room__tatami__wabi-sabi__a-oak-white.jpg",
    "spaceId": "kids-room",
    "cabinetId": "tatami",
    "styleId": "wabi-sabi",
    "materialId": "a-oak-white"
  },
  "kids-room|tatami|wabi-sabi|c-cream-brass": {
    "imageFile": "ref_0696__kids-room__tatami__wabi-sabi__c-cream-brass.jpg",
    "spaceId": "kids-room",
    "cabinetId": "tatami",
    "styleId": "wabi-sabi",
    "materialId": "c-cream-brass"
  },
  "kids-room|tatami|wabi-sabi|f-cement-rattan": {
    "imageFile": "ref_0697__kids-room__tatami__wabi-sabi__f-cement-rattan.jpg",
    "spaceId": "kids-room",
    "cabinetId": "tatami",
    "styleId": "wabi-sabi",
    "materialId": "f-cement-rattan"
  },
  "kids-room|tatami|american-vintage|e-walnut-glass": {
    "imageFile": "ref_0698__kids-room__tatami__american-vintage__e-walnut-glass.jpg",
    "spaceId": "kids-room",
    "cabinetId": "tatami",
    "styleId": "american-vintage",
    "materialId": "e-walnut-glass"
  },
  "kids-room|tatami|american-vintage|g-american-white": {
    "imageFile": "ref_0699__kids-room__tatami__american-vintage__g-american-white.jpg",
    "spaceId": "kids-room",
    "cabinetId": "tatami",
    "styleId": "american-vintage",
    "materialId": "g-american-white"
  },
  "kids-room|tatami|modern-luxury|b-gloss-white": {
    "imageFile": "ref_0700__kids-room__tatami__modern-luxury__b-gloss-white.jpg",
    "spaceId": "kids-room",
    "cabinetId": "tatami",
    "styleId": "modern-luxury",
    "materialId": "b-gloss-white"
  },
  "kids-room|tatami|modern-luxury|c-cream-brass": {
    "imageFile": "ref_0701__kids-room__tatami__modern-luxury__c-cream-brass.jpg",
    "spaceId": "kids-room",
    "cabinetId": "tatami",
    "styleId": "modern-luxury",
    "materialId": "c-cream-brass"
  },
  "kids-room|tatami|modern-luxury|d-dark-grey": {
    "imageFile": "ref_0702__kids-room__tatami__modern-luxury__d-dark-grey.jpg",
    "spaceId": "kids-room",
    "cabinetId": "tatami",
    "styleId": "modern-luxury",
    "materialId": "d-dark-grey"
  },
  "kids-room|tatami|modern-luxury|e-walnut-glass": {
    "imageFile": "ref_0703__kids-room__tatami__modern-luxury__e-walnut-glass.jpg",
    "spaceId": "kids-room",
    "cabinetId": "tatami",
    "styleId": "modern-luxury",
    "materialId": "e-walnut-glass"
  },
  "kids-room|bay-window|modern-minimalist|a-oak-white": {
    "imageFile": "ref_0704__kids-room__bay-window__modern-minimalist__a-oak-white.jpg",
    "spaceId": "kids-room",
    "cabinetId": "bay-window",
    "styleId": "modern-minimalist",
    "materialId": "a-oak-white"
  },
  "kids-room|bay-window|modern-minimalist|b-gloss-white": {
    "imageFile": "ref_0705__kids-room__bay-window__modern-minimalist__b-gloss-white.jpg",
    "spaceId": "kids-room",
    "cabinetId": "bay-window",
    "styleId": "modern-minimalist",
    "materialId": "b-gloss-white"
  },
  "kids-room|bay-window|modern-minimalist|d-dark-grey": {
    "imageFile": "ref_0706__kids-room__bay-window__modern-minimalist__d-dark-grey.jpg",
    "spaceId": "kids-room",
    "cabinetId": "bay-window",
    "styleId": "modern-minimalist",
    "materialId": "d-dark-grey"
  },
  "kids-room|bay-window|modern-minimalist|h-matte-white": {
    "imageFile": "ref_0707__kids-room__bay-window__modern-minimalist__h-matte-white.jpg",
    "spaceId": "kids-room",
    "cabinetId": "bay-window",
    "styleId": "modern-minimalist",
    "materialId": "h-matte-white"
  },
  "kids-room|bay-window|french-cream|c-cream-brass": {
    "imageFile": "ref_0708__kids-room__bay-window__french-cream__c-cream-brass.jpg",
    "spaceId": "kids-room",
    "cabinetId": "bay-window",
    "styleId": "french-cream",
    "materialId": "c-cream-brass"
  },
  "kids-room|bay-window|italian-minimal|d-dark-grey": {
    "imageFile": "ref_0709__kids-room__bay-window__italian-minimal__d-dark-grey.jpg",
    "spaceId": "kids-room",
    "cabinetId": "bay-window",
    "styleId": "italian-minimal",
    "materialId": "d-dark-grey"
  },
  "kids-room|bay-window|italian-minimal|h-matte-white": {
    "imageFile": "ref_0710__kids-room__bay-window__italian-minimal__h-matte-white.jpg",
    "spaceId": "kids-room",
    "cabinetId": "bay-window",
    "styleId": "italian-minimal",
    "materialId": "h-matte-white"
  },
  "kids-room|bay-window|japanese-wood|a-oak-white": {
    "imageFile": "ref_0711__kids-room__bay-window__japanese-wood__a-oak-white.jpg",
    "spaceId": "kids-room",
    "cabinetId": "bay-window",
    "styleId": "japanese-wood",
    "materialId": "a-oak-white"
  },
  "kids-room|bay-window|japanese-wood|f-cement-rattan": {
    "imageFile": "ref_0712__kids-room__bay-window__japanese-wood__f-cement-rattan.jpg",
    "spaceId": "kids-room",
    "cabinetId": "bay-window",
    "styleId": "japanese-wood",
    "materialId": "f-cement-rattan"
  },
  "kids-room|bay-window|modern-chinese|e-walnut-glass": {
    "imageFile": "ref_0713__kids-room__bay-window__modern-chinese__e-walnut-glass.jpg",
    "spaceId": "kids-room",
    "cabinetId": "bay-window",
    "styleId": "modern-chinese",
    "materialId": "e-walnut-glass"
  },
  "kids-room|bay-window|wabi-sabi|a-oak-white": {
    "imageFile": "ref_0714__kids-room__bay-window__wabi-sabi__a-oak-white.jpg",
    "spaceId": "kids-room",
    "cabinetId": "bay-window",
    "styleId": "wabi-sabi",
    "materialId": "a-oak-white"
  },
  "kids-room|bay-window|wabi-sabi|c-cream-brass": {
    "imageFile": "ref_0715__kids-room__bay-window__wabi-sabi__c-cream-brass.jpg",
    "spaceId": "kids-room",
    "cabinetId": "bay-window",
    "styleId": "wabi-sabi",
    "materialId": "c-cream-brass"
  },
  "kids-room|bay-window|wabi-sabi|f-cement-rattan": {
    "imageFile": "ref_0716__kids-room__bay-window__wabi-sabi__f-cement-rattan.jpg",
    "spaceId": "kids-room",
    "cabinetId": "bay-window",
    "styleId": "wabi-sabi",
    "materialId": "f-cement-rattan"
  },
  "kids-room|bay-window|american-vintage|e-walnut-glass": {
    "imageFile": "ref_0717__kids-room__bay-window__american-vintage__e-walnut-glass.jpg",
    "spaceId": "kids-room",
    "cabinetId": "bay-window",
    "styleId": "american-vintage",
    "materialId": "e-walnut-glass"
  },
  "kids-room|bay-window|american-vintage|g-american-white": {
    "imageFile": "ref_0718__kids-room__bay-window__american-vintage__g-american-white.jpg",
    "spaceId": "kids-room",
    "cabinetId": "bay-window",
    "styleId": "american-vintage",
    "materialId": "g-american-white"
  },
  "kids-room|bay-window|modern-luxury|b-gloss-white": {
    "imageFile": "ref_0719__kids-room__bay-window__modern-luxury__b-gloss-white.jpg",
    "spaceId": "kids-room",
    "cabinetId": "bay-window",
    "styleId": "modern-luxury",
    "materialId": "b-gloss-white"
  },
  "kids-room|bay-window|modern-luxury|c-cream-brass": {
    "imageFile": "ref_0720__kids-room__bay-window__modern-luxury__c-cream-brass.jpg",
    "spaceId": "kids-room",
    "cabinetId": "bay-window",
    "styleId": "modern-luxury",
    "materialId": "c-cream-brass"
  },
  "kids-room|bay-window|modern-luxury|d-dark-grey": {
    "imageFile": "ref_0721__kids-room__bay-window__modern-luxury__d-dark-grey.jpg",
    "spaceId": "kids-room",
    "cabinetId": "bay-window",
    "styleId": "modern-luxury",
    "materialId": "d-dark-grey"
  },
  "kids-room|bay-window|modern-luxury|e-walnut-glass": {
    "imageFile": "ref_0722__kids-room__bay-window__modern-luxury__e-walnut-glass.jpg",
    "spaceId": "kids-room",
    "cabinetId": "bay-window",
    "styleId": "modern-luxury",
    "materialId": "e-walnut-glass"
  },
  "balcony|balcony-cabinet|modern-minimalist|a-oak-white": {
    "imageFile": "ref_0723__balcony__balcony-cabinet__modern-minimalist__a-oak-white.jpg",
    "spaceId": "balcony",
    "cabinetId": "balcony-cabinet",
    "styleId": "modern-minimalist",
    "materialId": "a-oak-white"
  },
  "balcony|balcony-cabinet|modern-minimalist|b-gloss-white": {
    "imageFile": "ref_0724__balcony__balcony-cabinet__modern-minimalist__b-gloss-white.jpg",
    "spaceId": "balcony",
    "cabinetId": "balcony-cabinet",
    "styleId": "modern-minimalist",
    "materialId": "b-gloss-white"
  },
  "balcony|balcony-cabinet|modern-minimalist|d-dark-grey": {
    "imageFile": "ref_0725__balcony__balcony-cabinet__modern-minimalist__d-dark-grey.jpg",
    "spaceId": "balcony",
    "cabinetId": "balcony-cabinet",
    "styleId": "modern-minimalist",
    "materialId": "d-dark-grey"
  },
  "balcony|balcony-cabinet|modern-minimalist|h-matte-white": {
    "imageFile": "ref_0726__balcony__balcony-cabinet__modern-minimalist__h-matte-white.jpg",
    "spaceId": "balcony",
    "cabinetId": "balcony-cabinet",
    "styleId": "modern-minimalist",
    "materialId": "h-matte-white"
  },
  "balcony|balcony-cabinet|french-cream|c-cream-brass": {
    "imageFile": "ref_0727__balcony__balcony-cabinet__french-cream__c-cream-brass.jpg",
    "spaceId": "balcony",
    "cabinetId": "balcony-cabinet",
    "styleId": "french-cream",
    "materialId": "c-cream-brass"
  },
  "balcony|balcony-cabinet|italian-minimal|d-dark-grey": {
    "imageFile": "ref_0728__balcony__balcony-cabinet__italian-minimal__d-dark-grey.jpg",
    "spaceId": "balcony",
    "cabinetId": "balcony-cabinet",
    "styleId": "italian-minimal",
    "materialId": "d-dark-grey"
  },
  "balcony|balcony-cabinet|italian-minimal|h-matte-white": {
    "imageFile": "ref_0729__balcony__balcony-cabinet__italian-minimal__h-matte-white.jpg",
    "spaceId": "balcony",
    "cabinetId": "balcony-cabinet",
    "styleId": "italian-minimal",
    "materialId": "h-matte-white"
  },
  "balcony|balcony-cabinet|japanese-wood|a-oak-white": {
    "imageFile": "ref_0730__balcony__balcony-cabinet__japanese-wood__a-oak-white.jpg",
    "spaceId": "balcony",
    "cabinetId": "balcony-cabinet",
    "styleId": "japanese-wood",
    "materialId": "a-oak-white"
  },
  "balcony|balcony-cabinet|japanese-wood|f-cement-rattan": {
    "imageFile": "ref_0731__balcony__balcony-cabinet__japanese-wood__f-cement-rattan.jpg",
    "spaceId": "balcony",
    "cabinetId": "balcony-cabinet",
    "styleId": "japanese-wood",
    "materialId": "f-cement-rattan"
  },
  "balcony|balcony-cabinet|modern-chinese|e-walnut-glass": {
    "imageFile": "ref_0732__balcony__balcony-cabinet__modern-chinese__e-walnut-glass.jpg",
    "spaceId": "balcony",
    "cabinetId": "balcony-cabinet",
    "styleId": "modern-chinese",
    "materialId": "e-walnut-glass"
  },
  "balcony|balcony-cabinet|wabi-sabi|a-oak-white": {
    "imageFile": "ref_0733__balcony__balcony-cabinet__wabi-sabi__a-oak-white.jpg",
    "spaceId": "balcony",
    "cabinetId": "balcony-cabinet",
    "styleId": "wabi-sabi",
    "materialId": "a-oak-white"
  },
  "balcony|balcony-cabinet|wabi-sabi|c-cream-brass": {
    "imageFile": "ref_0734__balcony__balcony-cabinet__wabi-sabi__c-cream-brass.jpg",
    "spaceId": "balcony",
    "cabinetId": "balcony-cabinet",
    "styleId": "wabi-sabi",
    "materialId": "c-cream-brass"
  },
  "balcony|balcony-cabinet|wabi-sabi|f-cement-rattan": {
    "imageFile": "ref_0735__balcony__balcony-cabinet__wabi-sabi__f-cement-rattan.jpg",
    "spaceId": "balcony",
    "cabinetId": "balcony-cabinet",
    "styleId": "wabi-sabi",
    "materialId": "f-cement-rattan"
  },
  "balcony|balcony-cabinet|american-vintage|e-walnut-glass": {
    "imageFile": "ref_0736__balcony__balcony-cabinet__american-vintage__e-walnut-glass.jpg",
    "spaceId": "balcony",
    "cabinetId": "balcony-cabinet",
    "styleId": "american-vintage",
    "materialId": "e-walnut-glass"
  },
  "balcony|balcony-cabinet|american-vintage|g-american-white": {
    "imageFile": "ref_0737__balcony__balcony-cabinet__american-vintage__g-american-white.jpg",
    "spaceId": "balcony",
    "cabinetId": "balcony-cabinet",
    "styleId": "american-vintage",
    "materialId": "g-american-white"
  },
  "balcony|balcony-cabinet|modern-luxury|b-gloss-white": {
    "imageFile": "ref_0738__balcony__balcony-cabinet__modern-luxury__b-gloss-white.jpg",
    "spaceId": "balcony",
    "cabinetId": "balcony-cabinet",
    "styleId": "modern-luxury",
    "materialId": "b-gloss-white"
  },
  "balcony|balcony-cabinet|modern-luxury|c-cream-brass": {
    "imageFile": "ref_0739__balcony__balcony-cabinet__modern-luxury__c-cream-brass.jpg",
    "spaceId": "balcony",
    "cabinetId": "balcony-cabinet",
    "styleId": "modern-luxury",
    "materialId": "c-cream-brass"
  },
  "balcony|balcony-cabinet|modern-luxury|d-dark-grey": {
    "imageFile": "ref_0740__balcony__balcony-cabinet__modern-luxury__d-dark-grey.jpg",
    "spaceId": "balcony",
    "cabinetId": "balcony-cabinet",
    "styleId": "modern-luxury",
    "materialId": "d-dark-grey"
  },
  "balcony|balcony-cabinet|modern-luxury|e-walnut-glass": {
    "imageFile": "ref_0741__balcony__balcony-cabinet__modern-luxury__e-walnut-glass.jpg",
    "spaceId": "balcony",
    "cabinetId": "balcony-cabinet",
    "styleId": "modern-luxury",
    "materialId": "e-walnut-glass"
  },
  "multi-functional|tatami|modern-minimalist|a-oak-white": {
    "imageFile": "ref_0742__multi-functional__tatami__modern-minimalist__a-oak-white.jpg",
    "spaceId": "multi-functional",
    "cabinetId": "tatami",
    "styleId": "modern-minimalist",
    "materialId": "a-oak-white"
  },
  "multi-functional|tatami|modern-minimalist|b-gloss-white": {
    "imageFile": "ref_0743__multi-functional__tatami__modern-minimalist__b-gloss-white.jpg",
    "spaceId": "multi-functional",
    "cabinetId": "tatami",
    "styleId": "modern-minimalist",
    "materialId": "b-gloss-white"
  },
  "multi-functional|tatami|modern-minimalist|d-dark-grey": {
    "imageFile": "ref_0744__multi-functional__tatami__modern-minimalist__d-dark-grey.jpg",
    "spaceId": "multi-functional",
    "cabinetId": "tatami",
    "styleId": "modern-minimalist",
    "materialId": "d-dark-grey"
  },
  "multi-functional|tatami|modern-minimalist|h-matte-white": {
    "imageFile": "ref_0745__multi-functional__tatami__modern-minimalist__h-matte-white.jpg",
    "spaceId": "multi-functional",
    "cabinetId": "tatami",
    "styleId": "modern-minimalist",
    "materialId": "h-matte-white"
  },
  "multi-functional|tatami|french-cream|c-cream-brass": {
    "imageFile": "ref_0746__multi-functional__tatami__french-cream__c-cream-brass.jpg",
    "spaceId": "multi-functional",
    "cabinetId": "tatami",
    "styleId": "french-cream",
    "materialId": "c-cream-brass"
  },
  "multi-functional|tatami|italian-minimal|d-dark-grey": {
    "imageFile": "ref_0747__multi-functional__tatami__italian-minimal__d-dark-grey.jpg",
    "spaceId": "multi-functional",
    "cabinetId": "tatami",
    "styleId": "italian-minimal",
    "materialId": "d-dark-grey"
  },
  "multi-functional|tatami|italian-minimal|h-matte-white": {
    "imageFile": "ref_0748__multi-functional__tatami__italian-minimal__h-matte-white.jpg",
    "spaceId": "multi-functional",
    "cabinetId": "tatami",
    "styleId": "italian-minimal",
    "materialId": "h-matte-white"
  },
  "multi-functional|tatami|japanese-wood|a-oak-white": {
    "imageFile": "ref_0749__multi-functional__tatami__japanese-wood__a-oak-white.jpg",
    "spaceId": "multi-functional",
    "cabinetId": "tatami",
    "styleId": "japanese-wood",
    "materialId": "a-oak-white"
  },
  "multi-functional|tatami|japanese-wood|f-cement-rattan": {
    "imageFile": "ref_0750__multi-functional__tatami__japanese-wood__f-cement-rattan.jpg",
    "spaceId": "multi-functional",
    "cabinetId": "tatami",
    "styleId": "japanese-wood",
    "materialId": "f-cement-rattan"
  },
  "multi-functional|tatami|modern-chinese|e-walnut-glass": {
    "imageFile": "ref_0751__multi-functional__tatami__modern-chinese__e-walnut-glass.jpg",
    "spaceId": "multi-functional",
    "cabinetId": "tatami",
    "styleId": "modern-chinese",
    "materialId": "e-walnut-glass"
  },
  "multi-functional|tatami|wabi-sabi|a-oak-white": {
    "imageFile": "ref_0752__multi-functional__tatami__wabi-sabi__a-oak-white.jpg",
    "spaceId": "multi-functional",
    "cabinetId": "tatami",
    "styleId": "wabi-sabi",
    "materialId": "a-oak-white"
  },
  "multi-functional|tatami|wabi-sabi|c-cream-brass": {
    "imageFile": "ref_0753__multi-functional__tatami__wabi-sabi__c-cream-brass.jpg",
    "spaceId": "multi-functional",
    "cabinetId": "tatami",
    "styleId": "wabi-sabi",
    "materialId": "c-cream-brass"
  },
  "multi-functional|tatami|wabi-sabi|f-cement-rattan": {
    "imageFile": "ref_0754__multi-functional__tatami__wabi-sabi__f-cement-rattan.jpg",
    "spaceId": "multi-functional",
    "cabinetId": "tatami",
    "styleId": "wabi-sabi",
    "materialId": "f-cement-rattan"
  },
  "multi-functional|tatami|american-vintage|e-walnut-glass": {
    "imageFile": "ref_0755__multi-functional__tatami__american-vintage__e-walnut-glass.jpg",
    "spaceId": "multi-functional",
    "cabinetId": "tatami",
    "styleId": "american-vintage",
    "materialId": "e-walnut-glass"
  },
  "multi-functional|tatami|american-vintage|g-american-white": {
    "imageFile": "ref_0756__multi-functional__tatami__american-vintage__g-american-white.jpg",
    "spaceId": "multi-functional",
    "cabinetId": "tatami",
    "styleId": "american-vintage",
    "materialId": "g-american-white"
  },
  "multi-functional|tatami|modern-luxury|b-gloss-white": {
    "imageFile": "ref_0757__multi-functional__tatami__modern-luxury__b-gloss-white.jpg",
    "spaceId": "multi-functional",
    "cabinetId": "tatami",
    "styleId": "modern-luxury",
    "materialId": "b-gloss-white"
  },
  "multi-functional|tatami|modern-luxury|c-cream-brass": {
    "imageFile": "ref_0758__multi-functional__tatami__modern-luxury__c-cream-brass.jpg",
    "spaceId": "multi-functional",
    "cabinetId": "tatami",
    "styleId": "modern-luxury",
    "materialId": "c-cream-brass"
  },
  "multi-functional|tatami|modern-luxury|d-dark-grey": {
    "imageFile": "ref_0759__multi-functional__tatami__modern-luxury__d-dark-grey.jpg",
    "spaceId": "multi-functional",
    "cabinetId": "tatami",
    "styleId": "modern-luxury",
    "materialId": "d-dark-grey"
  },
  "multi-functional|tatami|modern-luxury|e-walnut-glass": {
    "imageFile": "ref_0760__multi-functional__tatami__modern-luxury__e-walnut-glass.jpg",
    "spaceId": "multi-functional",
    "cabinetId": "tatami",
    "styleId": "modern-luxury",
    "materialId": "e-walnut-glass"
  },
  "secondary-bedroom|floor-wardrobe|modern-minimalist|a-oak-white": {
    "imageFile": "ref_0761__secondary-bedroom__floor-wardrobe__modern-minimalist__a-oak-white.jpg",
    "spaceId": "secondary-bedroom",
    "cabinetId": "floor-wardrobe",
    "styleId": "modern-minimalist",
    "materialId": "a-oak-white"
  },
  "secondary-bedroom|floor-wardrobe|modern-minimalist|b-gloss-white": {
    "imageFile": "ref_0762__secondary-bedroom__floor-wardrobe__modern-minimalist__b-gloss-white.jpg",
    "spaceId": "secondary-bedroom",
    "cabinetId": "floor-wardrobe",
    "styleId": "modern-minimalist",
    "materialId": "b-gloss-white"
  },
  "secondary-bedroom|floor-wardrobe|modern-minimalist|d-dark-grey": {
    "imageFile": "ref_0763__secondary-bedroom__floor-wardrobe__modern-minimalist__d-dark-grey.jpg",
    "spaceId": "secondary-bedroom",
    "cabinetId": "floor-wardrobe",
    "styleId": "modern-minimalist",
    "materialId": "d-dark-grey"
  },
  "secondary-bedroom|floor-wardrobe|modern-minimalist|h-matte-white": {
    "imageFile": "ref_0764__secondary-bedroom__floor-wardrobe__modern-minimalist__h-matte-white.jpg",
    "spaceId": "secondary-bedroom",
    "cabinetId": "floor-wardrobe",
    "styleId": "modern-minimalist",
    "materialId": "h-matte-white"
  },
  "secondary-bedroom|floor-wardrobe|french-cream|c-cream-brass": {
    "imageFile": "ref_0765__secondary-bedroom__floor-wardrobe__french-cream__c-cream-brass.jpg",
    "spaceId": "secondary-bedroom",
    "cabinetId": "floor-wardrobe",
    "styleId": "french-cream",
    "materialId": "c-cream-brass"
  },
  "secondary-bedroom|floor-wardrobe|italian-minimal|d-dark-grey": {
    "imageFile": "ref_0766__secondary-bedroom__floor-wardrobe__italian-minimal__d-dark-grey.jpg",
    "spaceId": "secondary-bedroom",
    "cabinetId": "floor-wardrobe",
    "styleId": "italian-minimal",
    "materialId": "d-dark-grey"
  },
  "secondary-bedroom|floor-wardrobe|italian-minimal|h-matte-white": {
    "imageFile": "ref_0767__secondary-bedroom__floor-wardrobe__italian-minimal__h-matte-white.jpg",
    "spaceId": "secondary-bedroom",
    "cabinetId": "floor-wardrobe",
    "styleId": "italian-minimal",
    "materialId": "h-matte-white"
  },
  "secondary-bedroom|floor-wardrobe|japanese-wood|a-oak-white": {
    "imageFile": "ref_0768__secondary-bedroom__floor-wardrobe__japanese-wood__a-oak-white.jpg",
    "spaceId": "secondary-bedroom",
    "cabinetId": "floor-wardrobe",
    "styleId": "japanese-wood",
    "materialId": "a-oak-white"
  },
  "secondary-bedroom|floor-wardrobe|japanese-wood|f-cement-rattan": {
    "imageFile": "ref_0769__secondary-bedroom__floor-wardrobe__japanese-wood__f-cement-rattan.jpg",
    "spaceId": "secondary-bedroom",
    "cabinetId": "floor-wardrobe",
    "styleId": "japanese-wood",
    "materialId": "f-cement-rattan"
  },
  "secondary-bedroom|floor-wardrobe|modern-chinese|e-walnut-glass": {
    "imageFile": "ref_0770__secondary-bedroom__floor-wardrobe__modern-chinese__e-walnut-glass.jpg",
    "spaceId": "secondary-bedroom",
    "cabinetId": "floor-wardrobe",
    "styleId": "modern-chinese",
    "materialId": "e-walnut-glass"
  },
  "secondary-bedroom|floor-wardrobe|wabi-sabi|a-oak-white": {
    "imageFile": "ref_0771__secondary-bedroom__floor-wardrobe__wabi-sabi__a-oak-white.jpg",
    "spaceId": "secondary-bedroom",
    "cabinetId": "floor-wardrobe",
    "styleId": "wabi-sabi",
    "materialId": "a-oak-white"
  },
  "secondary-bedroom|floor-wardrobe|wabi-sabi|c-cream-brass": {
    "imageFile": "ref_0772__secondary-bedroom__floor-wardrobe__wabi-sabi__c-cream-brass.jpg",
    "spaceId": "secondary-bedroom",
    "cabinetId": "floor-wardrobe",
    "styleId": "wabi-sabi",
    "materialId": "c-cream-brass"
  },
  "secondary-bedroom|floor-wardrobe|wabi-sabi|f-cement-rattan": {
    "imageFile": "ref_0773__secondary-bedroom__floor-wardrobe__wabi-sabi__f-cement-rattan.jpg",
    "spaceId": "secondary-bedroom",
    "cabinetId": "floor-wardrobe",
    "styleId": "wabi-sabi",
    "materialId": "f-cement-rattan"
  },
  "secondary-bedroom|floor-wardrobe|american-vintage|e-walnut-glass": {
    "imageFile": "ref_0774__secondary-bedroom__floor-wardrobe__american-vintage__e-walnut-glass.jpg",
    "spaceId": "secondary-bedroom",
    "cabinetId": "floor-wardrobe",
    "styleId": "american-vintage",
    "materialId": "e-walnut-glass"
  },
  "secondary-bedroom|floor-wardrobe|american-vintage|g-american-white": {
    "imageFile": "ref_0775__secondary-bedroom__floor-wardrobe__american-vintage__g-american-white.jpg",
    "spaceId": "secondary-bedroom",
    "cabinetId": "floor-wardrobe",
    "styleId": "american-vintage",
    "materialId": "g-american-white"
  },
  "secondary-bedroom|floor-wardrobe|modern-luxury|b-gloss-white": {
    "imageFile": "ref_0776__secondary-bedroom__floor-wardrobe__modern-luxury__b-gloss-white.jpg",
    "spaceId": "secondary-bedroom",
    "cabinetId": "floor-wardrobe",
    "styleId": "modern-luxury",
    "materialId": "b-gloss-white"
  },
  "secondary-bedroom|floor-wardrobe|modern-luxury|c-cream-brass": {
    "imageFile": "ref_0777__secondary-bedroom__floor-wardrobe__modern-luxury__c-cream-brass.jpg",
    "spaceId": "secondary-bedroom",
    "cabinetId": "floor-wardrobe",
    "styleId": "modern-luxury",
    "materialId": "c-cream-brass"
  },
  "secondary-bedroom|floor-wardrobe|modern-luxury|d-dark-grey": {
    "imageFile": "ref_0778__secondary-bedroom__floor-wardrobe__modern-luxury__d-dark-grey.jpg",
    "spaceId": "secondary-bedroom",
    "cabinetId": "floor-wardrobe",
    "styleId": "modern-luxury",
    "materialId": "d-dark-grey"
  },
  "secondary-bedroom|floor-wardrobe|modern-luxury|e-walnut-glass": {
    "imageFile": "ref_0779__secondary-bedroom__floor-wardrobe__modern-luxury__e-walnut-glass.jpg",
    "spaceId": "secondary-bedroom",
    "cabinetId": "floor-wardrobe",
    "styleId": "modern-luxury",
    "materialId": "e-walnut-glass"
  },
  "secondary-bedroom|sliding-wardrobe|modern-minimalist|a-oak-white": {
    "imageFile": "ref_0780__secondary-bedroom__sliding-wardrobe__modern-minimalist__a-oak-white.jpg",
    "spaceId": "secondary-bedroom",
    "cabinetId": "sliding-wardrobe",
    "styleId": "modern-minimalist",
    "materialId": "a-oak-white"
  },
  "secondary-bedroom|sliding-wardrobe|modern-minimalist|b-gloss-white": {
    "imageFile": "ref_0781__secondary-bedroom__sliding-wardrobe__modern-minimalist__b-gloss-white.jpg",
    "spaceId": "secondary-bedroom",
    "cabinetId": "sliding-wardrobe",
    "styleId": "modern-minimalist",
    "materialId": "b-gloss-white"
  },
  "secondary-bedroom|sliding-wardrobe|modern-minimalist|d-dark-grey": {
    "imageFile": "ref_0782__secondary-bedroom__sliding-wardrobe__modern-minimalist__d-dark-grey.jpg",
    "spaceId": "secondary-bedroom",
    "cabinetId": "sliding-wardrobe",
    "styleId": "modern-minimalist",
    "materialId": "d-dark-grey"
  },
  "secondary-bedroom|sliding-wardrobe|modern-minimalist|h-matte-white": {
    "imageFile": "ref_0783__secondary-bedroom__sliding-wardrobe__modern-minimalist__h-matte-white.jpg",
    "spaceId": "secondary-bedroom",
    "cabinetId": "sliding-wardrobe",
    "styleId": "modern-minimalist",
    "materialId": "h-matte-white"
  },
  "secondary-bedroom|sliding-wardrobe|french-cream|c-cream-brass": {
    "imageFile": "ref_0784__secondary-bedroom__sliding-wardrobe__french-cream__c-cream-brass.jpg",
    "spaceId": "secondary-bedroom",
    "cabinetId": "sliding-wardrobe",
    "styleId": "french-cream",
    "materialId": "c-cream-brass"
  },
  "secondary-bedroom|sliding-wardrobe|italian-minimal|d-dark-grey": {
    "imageFile": "ref_0785__secondary-bedroom__sliding-wardrobe__italian-minimal__d-dark-grey.jpg",
    "spaceId": "secondary-bedroom",
    "cabinetId": "sliding-wardrobe",
    "styleId": "italian-minimal",
    "materialId": "d-dark-grey"
  },
  "secondary-bedroom|sliding-wardrobe|italian-minimal|h-matte-white": {
    "imageFile": "ref_0786__secondary-bedroom__sliding-wardrobe__italian-minimal__h-matte-white.jpg",
    "spaceId": "secondary-bedroom",
    "cabinetId": "sliding-wardrobe",
    "styleId": "italian-minimal",
    "materialId": "h-matte-white"
  },
  "secondary-bedroom|sliding-wardrobe|japanese-wood|a-oak-white": {
    "imageFile": "ref_0787__secondary-bedroom__sliding-wardrobe__japanese-wood__a-oak-white.jpg",
    "spaceId": "secondary-bedroom",
    "cabinetId": "sliding-wardrobe",
    "styleId": "japanese-wood",
    "materialId": "a-oak-white"
  },
  "secondary-bedroom|sliding-wardrobe|japanese-wood|f-cement-rattan": {
    "imageFile": "ref_0788__secondary-bedroom__sliding-wardrobe__japanese-wood__f-cement-rattan.jpg",
    "spaceId": "secondary-bedroom",
    "cabinetId": "sliding-wardrobe",
    "styleId": "japanese-wood",
    "materialId": "f-cement-rattan"
  },
  "secondary-bedroom|sliding-wardrobe|modern-chinese|e-walnut-glass": {
    "imageFile": "ref_0789__secondary-bedroom__sliding-wardrobe__modern-chinese__e-walnut-glass.jpg",
    "spaceId": "secondary-bedroom",
    "cabinetId": "sliding-wardrobe",
    "styleId": "modern-chinese",
    "materialId": "e-walnut-glass"
  },
  "secondary-bedroom|sliding-wardrobe|wabi-sabi|a-oak-white": {
    "imageFile": "ref_0790__secondary-bedroom__sliding-wardrobe__wabi-sabi__a-oak-white.jpg",
    "spaceId": "secondary-bedroom",
    "cabinetId": "sliding-wardrobe",
    "styleId": "wabi-sabi",
    "materialId": "a-oak-white"
  },
  "secondary-bedroom|sliding-wardrobe|wabi-sabi|c-cream-brass": {
    "imageFile": "ref_0791__secondary-bedroom__sliding-wardrobe__wabi-sabi__c-cream-brass.jpg",
    "spaceId": "secondary-bedroom",
    "cabinetId": "sliding-wardrobe",
    "styleId": "wabi-sabi",
    "materialId": "c-cream-brass"
  },
  "secondary-bedroom|sliding-wardrobe|wabi-sabi|f-cement-rattan": {
    "imageFile": "ref_0792__secondary-bedroom__sliding-wardrobe__wabi-sabi__f-cement-rattan.jpg",
    "spaceId": "secondary-bedroom",
    "cabinetId": "sliding-wardrobe",
    "styleId": "wabi-sabi",
    "materialId": "f-cement-rattan"
  },
  "secondary-bedroom|sliding-wardrobe|american-vintage|e-walnut-glass": {
    "imageFile": "ref_0793__secondary-bedroom__sliding-wardrobe__american-vintage__e-walnut-glass.jpg",
    "spaceId": "secondary-bedroom",
    "cabinetId": "sliding-wardrobe",
    "styleId": "american-vintage",
    "materialId": "e-walnut-glass"
  },
  "secondary-bedroom|sliding-wardrobe|american-vintage|g-american-white": {
    "imageFile": "ref_0794__secondary-bedroom__sliding-wardrobe__american-vintage__g-american-white.jpg",
    "spaceId": "secondary-bedroom",
    "cabinetId": "sliding-wardrobe",
    "styleId": "american-vintage",
    "materialId": "g-american-white"
  },
  "secondary-bedroom|sliding-wardrobe|modern-luxury|b-gloss-white": {
    "imageFile": "ref_0795__secondary-bedroom__sliding-wardrobe__modern-luxury__b-gloss-white.jpg",
    "spaceId": "secondary-bedroom",
    "cabinetId": "sliding-wardrobe",
    "styleId": "modern-luxury",
    "materialId": "b-gloss-white"
  },
  "secondary-bedroom|sliding-wardrobe|modern-luxury|c-cream-brass": {
    "imageFile": "ref_0796__secondary-bedroom__sliding-wardrobe__modern-luxury__c-cream-brass.jpg",
    "spaceId": "secondary-bedroom",
    "cabinetId": "sliding-wardrobe",
    "styleId": "modern-luxury",
    "materialId": "c-cream-brass"
  },
  "secondary-bedroom|sliding-wardrobe|modern-luxury|d-dark-grey": {
    "imageFile": "ref_0797__secondary-bedroom__sliding-wardrobe__modern-luxury__d-dark-grey.jpg",
    "spaceId": "secondary-bedroom",
    "cabinetId": "sliding-wardrobe",
    "styleId": "modern-luxury",
    "materialId": "d-dark-grey"
  },
  "secondary-bedroom|sliding-wardrobe|modern-luxury|e-walnut-glass": {
    "imageFile": "ref_0798__secondary-bedroom__sliding-wardrobe__modern-luxury__e-walnut-glass.jpg",
    "spaceId": "secondary-bedroom",
    "cabinetId": "sliding-wardrobe",
    "styleId": "modern-luxury",
    "materialId": "e-walnut-glass"
  },
  "secondary-bedroom|tatami|modern-minimalist|a-oak-white": {
    "imageFile": "ref_0799__secondary-bedroom__tatami__modern-minimalist__a-oak-white.jpg",
    "spaceId": "secondary-bedroom",
    "cabinetId": "tatami",
    "styleId": "modern-minimalist",
    "materialId": "a-oak-white"
  },
  "secondary-bedroom|tatami|modern-minimalist|b-gloss-white": {
    "imageFile": "ref_0800__secondary-bedroom__tatami__modern-minimalist__b-gloss-white.jpg",
    "spaceId": "secondary-bedroom",
    "cabinetId": "tatami",
    "styleId": "modern-minimalist",
    "materialId": "b-gloss-white"
  },
  "secondary-bedroom|tatami|modern-minimalist|d-dark-grey": {
    "imageFile": "ref_0801__secondary-bedroom__tatami__modern-minimalist__d-dark-grey.jpg",
    "spaceId": "secondary-bedroom",
    "cabinetId": "tatami",
    "styleId": "modern-minimalist",
    "materialId": "d-dark-grey"
  },
  "secondary-bedroom|tatami|modern-minimalist|h-matte-white": {
    "imageFile": "ref_0802__secondary-bedroom__tatami__modern-minimalist__h-matte-white.jpg",
    "spaceId": "secondary-bedroom",
    "cabinetId": "tatami",
    "styleId": "modern-minimalist",
    "materialId": "h-matte-white"
  },
  "secondary-bedroom|tatami|french-cream|c-cream-brass": {
    "imageFile": "ref_0803__secondary-bedroom__tatami__french-cream__c-cream-brass.jpg",
    "spaceId": "secondary-bedroom",
    "cabinetId": "tatami",
    "styleId": "french-cream",
    "materialId": "c-cream-brass"
  },
  "secondary-bedroom|tatami|italian-minimal|d-dark-grey": {
    "imageFile": "ref_0804__secondary-bedroom__tatami__italian-minimal__d-dark-grey.jpg",
    "spaceId": "secondary-bedroom",
    "cabinetId": "tatami",
    "styleId": "italian-minimal",
    "materialId": "d-dark-grey"
  },
  "secondary-bedroom|tatami|italian-minimal|h-matte-white": {
    "imageFile": "ref_0805__secondary-bedroom__tatami__italian-minimal__h-matte-white.jpg",
    "spaceId": "secondary-bedroom",
    "cabinetId": "tatami",
    "styleId": "italian-minimal",
    "materialId": "h-matte-white"
  },
  "secondary-bedroom|tatami|japanese-wood|a-oak-white": {
    "imageFile": "ref_0806__secondary-bedroom__tatami__japanese-wood__a-oak-white.jpg",
    "spaceId": "secondary-bedroom",
    "cabinetId": "tatami",
    "styleId": "japanese-wood",
    "materialId": "a-oak-white"
  },
  "secondary-bedroom|tatami|japanese-wood|f-cement-rattan": {
    "imageFile": "ref_0807__secondary-bedroom__tatami__japanese-wood__f-cement-rattan.jpg",
    "spaceId": "secondary-bedroom",
    "cabinetId": "tatami",
    "styleId": "japanese-wood",
    "materialId": "f-cement-rattan"
  },
  "secondary-bedroom|tatami|modern-chinese|e-walnut-glass": {
    "imageFile": "ref_0808__secondary-bedroom__tatami__modern-chinese__e-walnut-glass.jpg",
    "spaceId": "secondary-bedroom",
    "cabinetId": "tatami",
    "styleId": "modern-chinese",
    "materialId": "e-walnut-glass"
  },
  "secondary-bedroom|tatami|wabi-sabi|a-oak-white": {
    "imageFile": "ref_0809__secondary-bedroom__tatami__wabi-sabi__a-oak-white.jpg",
    "spaceId": "secondary-bedroom",
    "cabinetId": "tatami",
    "styleId": "wabi-sabi",
    "materialId": "a-oak-white"
  },
  "secondary-bedroom|tatami|wabi-sabi|c-cream-brass": {
    "imageFile": "ref_0810__secondary-bedroom__tatami__wabi-sabi__c-cream-brass.jpg",
    "spaceId": "secondary-bedroom",
    "cabinetId": "tatami",
    "styleId": "wabi-sabi",
    "materialId": "c-cream-brass"
  },
  "secondary-bedroom|tatami|wabi-sabi|f-cement-rattan": {
    "imageFile": "ref_0811__secondary-bedroom__tatami__wabi-sabi__f-cement-rattan.jpg",
    "spaceId": "secondary-bedroom",
    "cabinetId": "tatami",
    "styleId": "wabi-sabi",
    "materialId": "f-cement-rattan"
  },
  "secondary-bedroom|tatami|american-vintage|e-walnut-glass": {
    "imageFile": "ref_0812__secondary-bedroom__tatami__american-vintage__e-walnut-glass.jpg",
    "spaceId": "secondary-bedroom",
    "cabinetId": "tatami",
    "styleId": "american-vintage",
    "materialId": "e-walnut-glass"
  },
  "secondary-bedroom|tatami|american-vintage|g-american-white": {
    "imageFile": "ref_0813__secondary-bedroom__tatami__american-vintage__g-american-white.jpg",
    "spaceId": "secondary-bedroom",
    "cabinetId": "tatami",
    "styleId": "american-vintage",
    "materialId": "g-american-white"
  },
  "secondary-bedroom|tatami|modern-luxury|b-gloss-white": {
    "imageFile": "ref_0814__secondary-bedroom__tatami__modern-luxury__b-gloss-white.jpg",
    "spaceId": "secondary-bedroom",
    "cabinetId": "tatami",
    "styleId": "modern-luxury",
    "materialId": "b-gloss-white"
  },
  "secondary-bedroom|tatami|modern-luxury|c-cream-brass": {
    "imageFile": "ref_0815__secondary-bedroom__tatami__modern-luxury__c-cream-brass.jpg",
    "spaceId": "secondary-bedroom",
    "cabinetId": "tatami",
    "styleId": "modern-luxury",
    "materialId": "c-cream-brass"
  },
  "secondary-bedroom|tatami|modern-luxury|d-dark-grey": {
    "imageFile": "ref_0816__secondary-bedroom__tatami__modern-luxury__d-dark-grey.jpg",
    "spaceId": "secondary-bedroom",
    "cabinetId": "tatami",
    "styleId": "modern-luxury",
    "materialId": "d-dark-grey"
  },
  "secondary-bedroom|tatami|modern-luxury|e-walnut-glass": {
    "imageFile": "ref_0817__secondary-bedroom__tatami__modern-luxury__e-walnut-glass.jpg",
    "spaceId": "secondary-bedroom",
    "cabinetId": "tatami",
    "styleId": "modern-luxury",
    "materialId": "e-walnut-glass"
  },
  "secondary-bedroom|bay-window|modern-minimalist|a-oak-white": {
    "imageFile": "ref_0818__secondary-bedroom__bay-window__modern-minimalist__a-oak-white.jpg",
    "spaceId": "secondary-bedroom",
    "cabinetId": "bay-window",
    "styleId": "modern-minimalist",
    "materialId": "a-oak-white"
  },
  "secondary-bedroom|bay-window|modern-minimalist|b-gloss-white": {
    "imageFile": "ref_0819__secondary-bedroom__bay-window__modern-minimalist__b-gloss-white.jpg",
    "spaceId": "secondary-bedroom",
    "cabinetId": "bay-window",
    "styleId": "modern-minimalist",
    "materialId": "b-gloss-white"
  },
  "secondary-bedroom|bay-window|modern-minimalist|d-dark-grey": {
    "imageFile": "ref_0820__secondary-bedroom__bay-window__modern-minimalist__d-dark-grey.jpg",
    "spaceId": "secondary-bedroom",
    "cabinetId": "bay-window",
    "styleId": "modern-minimalist",
    "materialId": "d-dark-grey"
  },
  "secondary-bedroom|bay-window|modern-minimalist|h-matte-white": {
    "imageFile": "ref_0821__secondary-bedroom__bay-window__modern-minimalist__h-matte-white.jpg",
    "spaceId": "secondary-bedroom",
    "cabinetId": "bay-window",
    "styleId": "modern-minimalist",
    "materialId": "h-matte-white"
  },
  "secondary-bedroom|bay-window|french-cream|c-cream-brass": {
    "imageFile": "ref_0822__secondary-bedroom__bay-window__french-cream__c-cream-brass.jpg",
    "spaceId": "secondary-bedroom",
    "cabinetId": "bay-window",
    "styleId": "french-cream",
    "materialId": "c-cream-brass"
  },
  "secondary-bedroom|bay-window|italian-minimal|d-dark-grey": {
    "imageFile": "ref_0823__secondary-bedroom__bay-window__italian-minimal__d-dark-grey.jpg",
    "spaceId": "secondary-bedroom",
    "cabinetId": "bay-window",
    "styleId": "italian-minimal",
    "materialId": "d-dark-grey"
  },
  "secondary-bedroom|bay-window|italian-minimal|h-matte-white": {
    "imageFile": "ref_0824__secondary-bedroom__bay-window__italian-minimal__h-matte-white.jpg",
    "spaceId": "secondary-bedroom",
    "cabinetId": "bay-window",
    "styleId": "italian-minimal",
    "materialId": "h-matte-white"
  },
  "secondary-bedroom|bay-window|japanese-wood|a-oak-white": {
    "imageFile": "ref_0825__secondary-bedroom__bay-window__japanese-wood__a-oak-white.jpg",
    "spaceId": "secondary-bedroom",
    "cabinetId": "bay-window",
    "styleId": "japanese-wood",
    "materialId": "a-oak-white"
  },
  "secondary-bedroom|bay-window|japanese-wood|f-cement-rattan": {
    "imageFile": "ref_0826__secondary-bedroom__bay-window__japanese-wood__f-cement-rattan.jpg",
    "spaceId": "secondary-bedroom",
    "cabinetId": "bay-window",
    "styleId": "japanese-wood",
    "materialId": "f-cement-rattan"
  },
  "secondary-bedroom|bay-window|modern-chinese|e-walnut-glass": {
    "imageFile": "ref_0827__secondary-bedroom__bay-window__modern-chinese__e-walnut-glass.jpg",
    "spaceId": "secondary-bedroom",
    "cabinetId": "bay-window",
    "styleId": "modern-chinese",
    "materialId": "e-walnut-glass"
  },
  "secondary-bedroom|bay-window|wabi-sabi|a-oak-white": {
    "imageFile": "ref_0828__secondary-bedroom__bay-window__wabi-sabi__a-oak-white.jpg",
    "spaceId": "secondary-bedroom",
    "cabinetId": "bay-window",
    "styleId": "wabi-sabi",
    "materialId": "a-oak-white"
  },
  "secondary-bedroom|bay-window|wabi-sabi|c-cream-brass": {
    "imageFile": "ref_0829__secondary-bedroom__bay-window__wabi-sabi__c-cream-brass.jpg",
    "spaceId": "secondary-bedroom",
    "cabinetId": "bay-window",
    "styleId": "wabi-sabi",
    "materialId": "c-cream-brass"
  },
  "secondary-bedroom|bay-window|wabi-sabi|f-cement-rattan": {
    "imageFile": "ref_0830__secondary-bedroom__bay-window__wabi-sabi__f-cement-rattan.jpg",
    "spaceId": "secondary-bedroom",
    "cabinetId": "bay-window",
    "styleId": "wabi-sabi",
    "materialId": "f-cement-rattan"
  },
  "secondary-bedroom|bay-window|american-vintage|e-walnut-glass": {
    "imageFile": "ref_0831__secondary-bedroom__bay-window__american-vintage__e-walnut-glass.jpg",
    "spaceId": "secondary-bedroom",
    "cabinetId": "bay-window",
    "styleId": "american-vintage",
    "materialId": "e-walnut-glass"
  },
  "secondary-bedroom|bay-window|american-vintage|g-american-white": {
    "imageFile": "ref_0832__secondary-bedroom__bay-window__american-vintage__g-american-white.jpg",
    "spaceId": "secondary-bedroom",
    "cabinetId": "bay-window",
    "styleId": "american-vintage",
    "materialId": "g-american-white"
  },
  "secondary-bedroom|bay-window|modern-luxury|b-gloss-white": {
    "imageFile": "ref_0833__secondary-bedroom__bay-window__modern-luxury__b-gloss-white.jpg",
    "spaceId": "secondary-bedroom",
    "cabinetId": "bay-window",
    "styleId": "modern-luxury",
    "materialId": "b-gloss-white"
  },
  "secondary-bedroom|bay-window|modern-luxury|c-cream-brass": {
    "imageFile": "ref_0834__secondary-bedroom__bay-window__modern-luxury__c-cream-brass.jpg",
    "spaceId": "secondary-bedroom",
    "cabinetId": "bay-window",
    "styleId": "modern-luxury",
    "materialId": "c-cream-brass"
  },
  "secondary-bedroom|bay-window|modern-luxury|d-dark-grey": {
    "imageFile": "ref_0835__secondary-bedroom__bay-window__modern-luxury__d-dark-grey.jpg",
    "spaceId": "secondary-bedroom",
    "cabinetId": "bay-window",
    "styleId": "modern-luxury",
    "materialId": "d-dark-grey"
  },
  "secondary-bedroom|bay-window|modern-luxury|e-walnut-glass": {
    "imageFile": "ref_0836__secondary-bedroom__bay-window__modern-luxury__e-walnut-glass.jpg",
    "spaceId": "secondary-bedroom",
    "cabinetId": "bay-window",
    "styleId": "modern-luxury",
    "materialId": "e-walnut-glass"
  },
  "bathroom|bathroom-vanity|modern-minimalist|a-oak-white": {
    "imageFile": "ref_0837__bathroom__bathroom-vanity__modern-minimalist__a-oak-white.jpg",
    "spaceId": "bathroom",
    "cabinetId": "bathroom-vanity",
    "styleId": "modern-minimalist",
    "materialId": "a-oak-white"
  },
  "bathroom|bathroom-vanity|modern-minimalist|b-gloss-white": {
    "imageFile": "ref_0838__bathroom__bathroom-vanity__modern-minimalist__b-gloss-white.jpg",
    "spaceId": "bathroom",
    "cabinetId": "bathroom-vanity",
    "styleId": "modern-minimalist",
    "materialId": "b-gloss-white"
  },
  "bathroom|bathroom-vanity|modern-minimalist|d-dark-grey": {
    "imageFile": "ref_0839__bathroom__bathroom-vanity__modern-minimalist__d-dark-grey.jpg",
    "spaceId": "bathroom",
    "cabinetId": "bathroom-vanity",
    "styleId": "modern-minimalist",
    "materialId": "d-dark-grey"
  },
  "bathroom|bathroom-vanity|modern-minimalist|h-matte-white": {
    "imageFile": "ref_0840__bathroom__bathroom-vanity__modern-minimalist__h-matte-white.jpg",
    "spaceId": "bathroom",
    "cabinetId": "bathroom-vanity",
    "styleId": "modern-minimalist",
    "materialId": "h-matte-white"
  },
  "bathroom|bathroom-vanity|french-cream|c-cream-brass": {
    "imageFile": "ref_0841__bathroom__bathroom-vanity__french-cream__c-cream-brass.jpg",
    "spaceId": "bathroom",
    "cabinetId": "bathroom-vanity",
    "styleId": "french-cream",
    "materialId": "c-cream-brass"
  },
  "bathroom|bathroom-vanity|italian-minimal|d-dark-grey": {
    "imageFile": "ref_0842__bathroom__bathroom-vanity__italian-minimal__d-dark-grey.jpg",
    "spaceId": "bathroom",
    "cabinetId": "bathroom-vanity",
    "styleId": "italian-minimal",
    "materialId": "d-dark-grey"
  },
  "bathroom|bathroom-vanity|italian-minimal|h-matte-white": {
    "imageFile": "ref_0843__bathroom__bathroom-vanity__italian-minimal__h-matte-white.jpg",
    "spaceId": "bathroom",
    "cabinetId": "bathroom-vanity",
    "styleId": "italian-minimal",
    "materialId": "h-matte-white"
  },
  "bathroom|bathroom-vanity|japanese-wood|a-oak-white": {
    "imageFile": "ref_0844__bathroom__bathroom-vanity__japanese-wood__a-oak-white.jpg",
    "spaceId": "bathroom",
    "cabinetId": "bathroom-vanity",
    "styleId": "japanese-wood",
    "materialId": "a-oak-white"
  },
  "bathroom|bathroom-vanity|japanese-wood|f-cement-rattan": {
    "imageFile": "ref_0845__bathroom__bathroom-vanity__japanese-wood__f-cement-rattan.jpg",
    "spaceId": "bathroom",
    "cabinetId": "bathroom-vanity",
    "styleId": "japanese-wood",
    "materialId": "f-cement-rattan"
  },
  "bathroom|bathroom-vanity|modern-chinese|e-walnut-glass": {
    "imageFile": "ref_0846__bathroom__bathroom-vanity__modern-chinese__e-walnut-glass.jpg",
    "spaceId": "bathroom",
    "cabinetId": "bathroom-vanity",
    "styleId": "modern-chinese",
    "materialId": "e-walnut-glass"
  },
  "bathroom|bathroom-vanity|wabi-sabi|a-oak-white": {
    "imageFile": "ref_0847__bathroom__bathroom-vanity__wabi-sabi__a-oak-white.jpg",
    "spaceId": "bathroom",
    "cabinetId": "bathroom-vanity",
    "styleId": "wabi-sabi",
    "materialId": "a-oak-white"
  },
  "bathroom|bathroom-vanity|wabi-sabi|c-cream-brass": {
    "imageFile": "ref_0848__bathroom__bathroom-vanity__wabi-sabi__c-cream-brass.jpg",
    "spaceId": "bathroom",
    "cabinetId": "bathroom-vanity",
    "styleId": "wabi-sabi",
    "materialId": "c-cream-brass"
  },
  "bathroom|bathroom-vanity|wabi-sabi|f-cement-rattan": {
    "imageFile": "ref_0849__bathroom__bathroom-vanity__wabi-sabi__f-cement-rattan.jpg",
    "spaceId": "bathroom",
    "cabinetId": "bathroom-vanity",
    "styleId": "wabi-sabi",
    "materialId": "f-cement-rattan"
  },
  "bathroom|bathroom-vanity|american-vintage|e-walnut-glass": {
    "imageFile": "ref_0850__bathroom__bathroom-vanity__american-vintage__e-walnut-glass.jpg",
    "spaceId": "bathroom",
    "cabinetId": "bathroom-vanity",
    "styleId": "american-vintage",
    "materialId": "e-walnut-glass"
  },
  "bathroom|bathroom-vanity|american-vintage|g-american-white": {
    "imageFile": "ref_0851__bathroom__bathroom-vanity__american-vintage__g-american-white.jpg",
    "spaceId": "bathroom",
    "cabinetId": "bathroom-vanity",
    "styleId": "american-vintage",
    "materialId": "g-american-white"
  },
  "bathroom|bathroom-vanity|modern-luxury|b-gloss-white": {
    "imageFile": "ref_0852__bathroom__bathroom-vanity__modern-luxury__b-gloss-white.jpg",
    "spaceId": "bathroom",
    "cabinetId": "bathroom-vanity",
    "styleId": "modern-luxury",
    "materialId": "b-gloss-white"
  },
  "bathroom|bathroom-vanity|modern-luxury|c-cream-brass": {
    "imageFile": "ref_0853__bathroom__bathroom-vanity__modern-luxury__c-cream-brass.jpg",
    "spaceId": "bathroom",
    "cabinetId": "bathroom-vanity",
    "styleId": "modern-luxury",
    "materialId": "c-cream-brass"
  },
  "bathroom|bathroom-vanity|modern-luxury|d-dark-grey": {
    "imageFile": "ref_0854__bathroom__bathroom-vanity__modern-luxury__d-dark-grey.jpg",
    "spaceId": "bathroom",
    "cabinetId": "bathroom-vanity",
    "styleId": "modern-luxury",
    "materialId": "d-dark-grey"
  },
  "bathroom|bathroom-vanity|modern-luxury|e-walnut-glass": {
    "imageFile": "ref_0855__bathroom__bathroom-vanity__modern-luxury__e-walnut-glass.jpg",
    "spaceId": "bathroom",
    "cabinetId": "bathroom-vanity",
    "styleId": "modern-luxury",
    "materialId": "e-walnut-glass"
  }
};

// Local fallback images kept small to avoid exceeding the WeChat Mini Program package limit.
const LOCAL_REFERENCE_IMAGE_FILES: Record<string, true> = {
  "ref_0001__horizontal-living__floating-tv__modern-minimalist__a-oak-white.jpg": true,
  "ref_0002__horizontal-living__floating-tv__modern-minimalist__b-gloss-white.jpg": true,
  "ref_0003__horizontal-living__floating-tv__modern-minimalist__d-dark-grey.jpg": true,
  "ref_0004__horizontal-living__floating-tv__modern-minimalist__h-matte-white.jpg": true,
  "ref_0005__horizontal-living__floating-tv__french-cream__c-cream-brass.jpg": true,
  "ref_0006__horizontal-living__floating-tv__italian-minimal__d-dark-grey.jpg": true,
  "ref_0007__horizontal-living__floating-tv__italian-minimal__h-matte-white.jpg": true,
  "ref_0008__horizontal-living__floating-tv__japanese-wood__a-oak-white.jpg": true,
  "ref_0009__horizontal-living__floating-tv__japanese-wood__f-cement-rattan.jpg": true,
  "ref_0010__horizontal-living__floating-tv__modern-chinese__e-walnut-glass.jpg": true,
  "ref_0011__horizontal-living__floating-tv__wabi-sabi__a-oak-white.jpg": true,
  "ref_0012__horizontal-living__floating-tv__wabi-sabi__c-cream-brass.jpg": true,
  "ref_0013__horizontal-living__floating-tv__wabi-sabi__f-cement-rattan.jpg": true,
  "ref_0014__horizontal-living__floating-tv__american-vintage__e-walnut-glass.jpg": true,
  "ref_0015__horizontal-living__floating-tv__american-vintage__g-american-white.jpg": true,
  "ref_0016__horizontal-living__floating-tv__modern-luxury__b-gloss-white.jpg": true,
  "ref_0017__horizontal-living__floating-tv__modern-luxury__c-cream-brass.jpg": true,
  "ref_0018__horizontal-living__floating-tv__modern-luxury__d-dark-grey.jpg": true,
  "ref_0019__horizontal-living__floating-tv__modern-luxury__e-walnut-glass.jpg": true,
  "ref_0020__horizontal-living__bookshelf__modern-minimalist__a-oak-white.jpg": true,
  "ref_0021__horizontal-living__bookshelf__modern-minimalist__b-gloss-white.jpg": true,
  "ref_0022__horizontal-living__bookshelf__modern-minimalist__d-dark-grey.jpg": true,
  "ref_0023__horizontal-living__bookshelf__modern-minimalist__h-matte-white.jpg": true,
  "ref_0024__horizontal-living__bookshelf__french-cream__c-cream-brass.jpg": true,
  "ref_0025__horizontal-living__bookshelf__italian-minimal__d-dark-grey.jpg": true,
  "ref_0026__horizontal-living__bookshelf__italian-minimal__h-matte-white.jpg": true,
  "ref_0027__horizontal-living__bookshelf__japanese-wood__a-oak-white.jpg": true,
  "ref_0028__horizontal-living__bookshelf__japanese-wood__f-cement-rattan.jpg": true,
  "ref_0029__horizontal-living__bookshelf__modern-chinese__e-walnut-glass.jpg": true,
  "ref_0030__horizontal-living__bookshelf__wabi-sabi__a-oak-white.jpg": true,
  "ref_0031__horizontal-living__bookshelf__wabi-sabi__c-cream-brass.jpg": true,
  "ref_0032__horizontal-living__bookshelf__wabi-sabi__f-cement-rattan.jpg": true,
  "ref_0033__horizontal-living__bookshelf__american-vintage__e-walnut-glass.jpg": true,
  "ref_0034__horizontal-living__bookshelf__american-vintage__g-american-white.jpg": true,
  "ref_0035__horizontal-living__bookshelf__modern-luxury__b-gloss-white.jpg": true,
  "ref_0036__horizontal-living__bookshelf__modern-luxury__c-cream-brass.jpg": true,
  "ref_0037__horizontal-living__bookshelf__modern-luxury__d-dark-grey.jpg": true,
  "ref_0038__horizontal-living__bookshelf__modern-luxury__e-walnut-glass.jpg": true,
  "ref_0039__horizontal-living__sideboard__modern-minimalist__a-oak-white.jpg": true,
  "ref_0040__horizontal-living__sideboard__modern-minimalist__b-gloss-white.jpg": true,
  "ref_0041__horizontal-living__sideboard__modern-minimalist__d-dark-grey.jpg": true,
  "ref_0042__horizontal-living__sideboard__modern-minimalist__h-matte-white.jpg": true,
  "ref_0043__horizontal-living__sideboard__french-cream__c-cream-brass.jpg": true,
  "ref_0044__horizontal-living__sideboard__italian-minimal__d-dark-grey.jpg": true,
  "ref_0045__horizontal-living__sideboard__italian-minimal__h-matte-white.jpg": true,
  "ref_0046__horizontal-living__sideboard__japanese-wood__a-oak-white.jpg": true,
  "ref_0047__horizontal-living__sideboard__japanese-wood__f-cement-rattan.jpg": true,
  "ref_0048__horizontal-living__sideboard__modern-chinese__e-walnut-glass.jpg": true,
  "ref_0049__horizontal-living__sideboard__wabi-sabi__a-oak-white.jpg": true,
  "ref_0050__horizontal-living__sideboard__wabi-sabi__c-cream-brass.jpg": true,
  "ref_0051__horizontal-living__sideboard__wabi-sabi__f-cement-rattan.jpg": true
};

const buildReferenceKey = (ids: ReferenceImageIds) =>
  [ids.spaceId, ids.cabinetId, ids.styleId, ids.materialId].join("|");

const buildNameMap = (items: Array<{ id: string; name: string }>) => {
  const result: Record<string, string> = {};
  items.forEach((item) => {
    result[item.id] = item.name;
  });
  return result;
};

const SPACE_NAMES = buildNameMap(fallbackLibrary.spaces);
const CABINET_NAMES = buildNameMap(fallbackLibrary.cabinets);
const STYLE_NAMES = buildNameMap(fallbackLibrary.styles);
const MATERIAL_NAMES = buildNameMap(fallbackLibrary.materials);

const buildReferenceTitle = (entry: ReferenceImageEntry) =>
  `${SPACE_NAMES[entry.spaceId] || entry.spaceId} ? ${STYLE_NAMES[entry.styleId] || entry.styleId} ? ${CABINET_NAMES[entry.cabinetId] || entry.cabinetId} ? ${MATERIAL_NAMES[entry.materialId] || entry.materialId}`;

const getRemoteReferenceImageUrl = (imageFile: string) => {
  const baseUrl = REFERENCE_IMAGE_BASE_URL.trim().replace(/\/+$/, "");
  return baseUrl ? `${baseUrl}/${imageFile}` : "";
};

const getLocalReferenceImageUrl = (imageFile: string) =>
  LOCAL_REFERENCE_IMAGE_FILES[imageFile] ? `/assets/reference-images/${imageFile}` : "";

const resolveReferenceImageUrl = (imageFile: string) =>
  getRemoteReferenceImageUrl(imageFile) || getLocalReferenceImageUrl(imageFile);

export const findReferenceImageByIds = (ids: ReferenceImageIds) => {
  if (!ids.spaceId || !ids.cabinetId || !ids.styleId || !ids.materialId) {
    return null;
  }

  const entry = REFERENCE_IMAGE_BY_KEY[buildReferenceKey(ids)];
  if (!entry) {
    return null;
  }

  const image = resolveReferenceImageUrl(entry.imageFile);
  return image ? { image, title: buildReferenceTitle(entry) } : null;
};

export const findReferenceImage = (selection: Selection) =>
  findReferenceImageByIds({
    spaceId: selection.space.id,
    cabinetId: selection.cabinet.id,
    styleId: selection.style.id,
    materialId: selection.material.id
  });
