import"./assets/modulepreload-polyfill-B5Qt9EMX.js";import{i}from"./assets/vendor-BbbuE1sJ.js";document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".form");t.addEventListener("submit",o=>{o.preventDefault();const s=parseInt(t.elements.delay.value,10),n=t.elements.state.value;new Promise((e,m)=>{setTimeout(()=>{n==="fulfilled"?e(s):m(s)},s)}).then(e=>{i.success({title:"✅ Успішно!",message:`Fulfilled promise in ${e}ms`,position:"topRight"})}).catch(e=>{i.error({title:"❌ Помилка!",message:`Rejected promise in ${e}ms`,position:"topRight"})})})});
//# sourceMappingURL=2-snackbar.js.map
