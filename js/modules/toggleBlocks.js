const toggleBlocks = (
   canvas = {
      "header-btn-1": "",
      "header-btn-2": "",
      "header-btn-3": "",
   },
   callbackObject = {
      "header-btn-1": () => {},
      "header-btn-2": () => {},
      "header-btn-3": () => {},
   },
) => {
   const btns = document.querySelectorAll(".header__btn");
   const container = document.getElementById("main");

   const renderBlock = (button, callback) => {
      btns.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      const id = button.id;
      const html = canvas[id] ?? "";

      container.innerHTML = "";
      container.insertAdjacentHTML("afterbegin", html);

      callback();
   };

   if (btns.length > 0) {
      const btn = btns[0];
      const callback = callbackObject[btns[0].id];
      renderBlock(btn, callback);
   }

   btns.forEach((btn) => {
      btn.addEventListener("click", function () {
         if (!this.classList.contains("active")) {
            const callback = callbackObject[this.id];
            renderBlock(this, callback);
         }
      });
   });
};

export { toggleBlocks };
