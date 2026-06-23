const hideLoader = (loaderDuration, animationDuration) => {
   const loaderTimeout = setTimeout(() => {
      const loader = document.querySelector(".loader");
      loader.classList.add("hide");

      const animationTimeout = setTimeout(() => {
         loader.style.display = "none";
         clearTimeout(animationTimeout);
      }, animationDuration);

      clearTimeout(loaderTimeout);
   }, loaderDuration);
};

export { hideLoader };
