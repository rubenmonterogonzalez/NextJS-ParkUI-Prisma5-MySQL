import { splitProps } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const linkFn = /* @__PURE__ */ createRecipe('link', {
  "variant": "text"
}, [])

const linkVariantMap = {
  "variant": [
    "text",
    "toc",
    "navbar"
  ]
}

const linkVariantKeys = Object.keys(linkVariantMap)

export const link = /* @__PURE__ */ Object.assign(linkFn, {
  __recipe__: true,
  __name__: 'link',
  raw: (props) => props,
  variantKeys: linkVariantKeys,
  variantMap: linkVariantMap,
  splitVariantProps(props) {
    return splitProps(props, linkVariantKeys)
  },
})