import{createElement}from"../helper/createElement.js";const ANSWER_LENGTH=3;export const createRadio=(e,t)=>{e.textContent="";const a=createElement("fieldset",{className:"form__fieldset"}),n=createElement("div",{className:"form__top"}),l=createElement("legend",{className:"form__legend",textContent:t.title}),s=createElement("span",{className:"step"});n.append(l,s);const r=createElement("div",{className:t.answers.length>3?"label-wrapper":"label-wrapper_flex"});return t.answers.map((e=>{const t=createElement("label",{className:"radio"}),a=createElement("input",{className:"radio__input",type:"radio",name:"radio",value:e}),n=createElement("span",{className:"radio__text",textContent:e});t.append(a,n),r.append(t)})),a.append(n,r),e.append(a),{step:s}};