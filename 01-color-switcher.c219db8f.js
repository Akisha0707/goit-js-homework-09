const t=document.querySelector("body"),e=document.querySelector("button[data-start]"),o=document.querySelector("button[data-stop]");let n;e.addEventListener("click",(function(o){n=setInterval((()=>{t.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3),e.disabled=!0})),o.addEventListener("click",(function(t){clearInterval(n),e.disabled=!1}));
//# sourceMappingURL=01-color-switcher.c219db8f.js.map
