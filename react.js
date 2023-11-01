function createElement(type, props, ...children) {
  const reactElement = {
    type,
    props: {
      ...props,
      children
    },
  }
  return reactElement
}

export default { createElement }
