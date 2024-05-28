
function customRender(reactElement, mainRoot) {
     const domEL=document.createElement(reactElement.type)//"a" we can give direct
      domEL.innerHTML= reactElement.children

      domEL.setAttribute("href",reactElement.props.href)
      domEL.setAttribute("target",reactElement.props.target)
      mainRoot.appendChild(domEL)

  // const domEL = document.createElement(reactElement.type)
  // domEL.innerHTML = reactElement.children;
  // for (const x in reactElement.props) {
  //   if (x  == "children") continue;
  //   else{
  //   domEL.setAttribute(x, reactElement.props[x])
  //   }
  // }
  // mainRoot.appendChild(domEL)
}
// function customRender(reactElement,mainRoot){
// const domElement = document.createElement(reactElement.type)
// domElement.innerHTML= reactElement.children
// domElement.setAttribute("href", reactElement.props.href)
// domElement.setAttribute("target", reactElement.props.target)
// mainRoot.appendChild(domElement)
// }

// }
const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click HEREEEEEEEEEEEEEEEe",
};
const mainRoot = document.querySelector("#root");
customRender(reactElement, mainRoot);
