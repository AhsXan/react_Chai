import { createElement, createRef } from "react";

function customRender(reactElement, mainRoot) {
  //    const domEL=document.createElement(reactElement.type)//"a" we can give direct
  //     domEL.innerHTML= reactElement.children

  //     domEL.setAttribute("href",reactElement.props.href)
  //     domEL.setAttribute("target",reactElement.props.target)
  //     mainRoot.appendChild(domEL)

  const domEl = createElement(reactElement.type);
  domEl.innerHTML(reactElement.children);
  for (let prop in reactElement.pros) {
    if (prop === "children") continue;
    domEl.setAttribute(prop, reactElement.props[prop]);
  }
  mainRoot.appendChild(domEl);
}
// function customRender(reactElement,mainRoot){
// const domElement = document.createElement(reactElement.type)
// domElement.innerHTML= reactElement.children
// domElement.setAttribu te("href", reactElement.props.href)
// domElement.setAttribute("target", reactElement.props.target)
// mainRoot.appendChild(domElement)
// }
const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click ok",
};
const mainRoot = document.querySelector("#root");
customRender(reactElement, mainRoot);
