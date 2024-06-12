const getAllIndexesOfSubString = (str: string, sub: string, ignoreCase: boolean) => {
  if (ignoreCase) {
    str = str.toLowerCase()
    sub = sub.toLowerCase()
  }
  const list: number[][] = []
  const len = str.length
  const slen = sub.length
  let i = 0
  while (i < len) {
    const r = str.indexOf(sub, i)
    if (r < 0) {
      break
    }
    list.push([r, r + slen])
    i += r + slen
  }
  return list
}

const renderHighlight = ({
  uid,
  text,
  nodeList,
  ignoreCase = false,
}: {
  uid: string
  text: string
  nodeList: HTMLElement[]
  ignoreCase: boolean
}) => {
  if (!text) {
    CSS.highlights.delete(uid)
    return
  }

  const highlight = new Highlight()
  for (const node of nodeList) {
    for (const n of node.childNodes) {
      if (n.nodeType !== 3) {
        continue
      }
      const arr = getAllIndexesOfSubString(n.textContent || '', text, ignoreCase)
      for (const [start, end] of arr) {
        const range = new Range()
        range.setStart(n, start)
        range.setEnd(n, end)
        highlight.add(range)
      }
    }
  }
  CSS.highlights.set(uid, highlight)
}

const clearHighlight = (uid: string) => {
  CSS.highlights.delete(uid)
}

const getHighlightKeys = () => Array.from(CSS.highlights.keys())

export const useCustomHighlight = () => {
  return {
    renderHighlight,
    clearHighlight,
    getHighlightKeys,
  }
}
