import { CALLBACKS, CANVAS } from "./config.js";
import { hideLoader } from "./modules/hideLoader.js";
import { toggleBlocks } from "./modules/toggleBlocks.js";

document.addEventListener("DOMContentLoaded", () => {
   hideLoader(3000, 1000);
   toggleBlocks(CANVAS, CALLBACKS);

   window.addEventListener("resize", () => {
      toggleBlocks(CANVAS, CALLBACKS);
   });
});
