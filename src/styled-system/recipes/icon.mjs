import { splitProps } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const iconFn = /* @__PURE__ */ createRecipe('icon', {
  "size": "md"
}, [])

const iconVariantMap = {
  "size": [
    "xs",
    "sm",
    "md",
    "lg",
    "xl",
    "2xl"
  ]
}

const iconVariantKeys = Object.keys(iconVariantMap)

export const icon = /* @__PURE__ */ Object.assign(iconFn, {
  __recipe__: true,
  __name__: 'icon',
  raw: (props) => props,
  variantKeys: iconVariantKeys,
  variantMap: iconVariantMap,
  splitVariantProps(props) {
    return splitProps(props, iconVariantKeys)
  },
})