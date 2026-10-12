"use strict";
document.querySelectorAll('[data-layer]').forEach(input=>input.addEventListener('change',()=>{document.querySelector('.'+input.dataset.layer).style.display=input.checked?'':'none';}));