export function render(reactElement, rootDOMElement) {
  const createDOMElement = (reactElement) => {
    if (Array.isArray(reactElement)) {
      return reactElement.map((el) => createDOMElement(el))
    }
    const { type, props } = reactElement

    if (typeof type === 'function') {
      return createDOMElement(type(props))
    }
    const DOMElement = document.createElement(type)

    if (props) {
      Object.entries(props).forEach(([key, value]) => {
        if (key === 'style') {
          Object.assign(DOMElement.style, value)
        } else [(DOMElement[key] = value)]
      })

      if (props.children.length) {
        props.children.forEach((child) => {
          if (!child) return

          if (typeof child === 'string') {
            const textNode = document.createTextNode(child)
            DOMElement.append(textNode)
          } else if (Array.isArray(child)) {
            DOMElement.append(...child.map((el) => createDOMElement(el)))
          } else {
            DOMElement.append(createDOMElement(child))
          }
        })
      }
    }

    return DOMElement
  }

  const DOMElement = createDOMElement(reactElement)
  if (Array.isArray(DOMElement)) {
    rootDOMElement.append(...DOMElement)
  } else {
    rootDOMElement.append(DOMElement)
  }
}
