"use strict";(()=>{var r=()=>{var o;let e="Last Published:";for(let t of document.childNodes)if(t.nodeType===Node.COMMENT_NODE&&((o=t.textContent)==null?void 0:o.includes(e))){let n=t.textContent.trim().split(e)[1];if(n)return new Date(n)}};var s=e=>{let o=r();console.log(`Hello ${e}!`)};window.Webflow||(window.Webflow=[]);window.Webflow.push(()=>{s("Samso"),document.body.style.backgroundColor="blue"});})();