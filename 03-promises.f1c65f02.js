!function(){var e=document.querySelector(".form"),n=document.querySelector('input[name="delay"]'),t=document.querySelector('input[name="step"]'),o=document.querySelector('input[name="amount"]');function c(e,n){return new Promise((function(t,o){setTimeout((function(){Math.random()>.3?t({position:e,delay:n}):o({position:e,delay:n})}),n)}))}e.addEventListener("submit",(function(e){e.preventDefault();for(var a=o.value,i=parseInt(t.value),u=parseInt(n.value),r=0;r<a;r++){c(r,0===r?u:u+r*i).then((function(e){var n=e.position,t=e.delay;console.log("✅ Fulfilled promise ".concat(n," in ").concat(t,"ms"))})).catch((function(e){var n=e.position,t=e.delay;console.log("❌ Rejected promise ".concat(n," in ").concat(t,"ms"))}))}}))}();
//# sourceMappingURL=03-promises.f1c65f02.js.map
