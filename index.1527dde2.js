var e=new Promise(function(e,n){var t=setTimeout(function(){n(Error())},3e3);document.addEventListener("click",function(){clearTimeout(t),e("First promise was resolved")})}),n=new Promise(function(e){var n=function(n){e("Second promise was resolved")};document.addEventListener("click",n),document.addEventListener("contextmenu",n)}),t=new Promise(function(e){var n=!1,t=!1,o=function(){n&&t&&e("Third promise was resolved")};document.addEventListener("click",function(){n=!0,o()}),document.addEventListener("contextmenu",function(){t=!0,o()})});function o(e){var n=document.createElement("div");n.dataset.qa="notification",n.textContent=e,e?n.classList.add("success"):(n.classList.add("error"),n.textContent="First promise was rejected"),document.body.append(n)}e.then(function(e){o(e)}).catch(function(){o("")}),n.then(function(e){o(e)}),t.then(function(e){o(e)});
//# sourceMappingURL=index.1527dde2.js.map
