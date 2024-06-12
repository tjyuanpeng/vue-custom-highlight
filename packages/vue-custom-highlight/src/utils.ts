export type AllowCssStyle = Partial<
  Pick<CSSStyleDeclaration, 'color' | 'backgroundColor' | 'textDecoration' | 'textShadow'>
>

const hyphenateRE = /\B([A-Z])/g
const hyphenate = (str: string) => str.replace(hyphenateRE, '-$1').toLowerCase()
const isString = (val: unknown): val is string => typeof val === 'string'

export const stringifyStyle = (styles: AllowCssStyle | string | undefined): string => {
  if (!styles) {
    return ''
  }
  if (isString(styles)) {
    return styles
  }
  let ret = ''
  for (const [key, value] of Object.entries(styles)) {
    const normalizedKey = key.startsWith(`--`) ? key : hyphenate(key)
    if (isString(value) || typeof value === 'number') {
      // only render valid values
      ret += `${normalizedKey}:${value};`
    }
  }
  return ret
}
