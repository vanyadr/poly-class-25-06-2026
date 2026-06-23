import { drawChart1 } from "./modules/drawChart1.js";
import { drawChart2 } from "./modules/drawChart2.js";
import { drawChart3 } from "./modules/drawChart3.js";

export const CANVAS = {
   "header-btn-1": "<canvas id='canvas-1'></canvas>",
   "header-btn-2": "<canvas id='canvas-2'></canvas>",
   "header-btn-3": "<canvas id='canvas-3'></canvas>",
};

export const DATA = [
   { label: "Янв", value: 120, color: "#FF6384" },
   { label: "Фев", value: 200, color: "#36A2EB" },
   { label: "Мар", value: 150, color: "#FFCE56" },
   { label: "Апр", value: 300, color: "#4BC0C0" },
   { label: "Май", value: 250, color: "#9966FF" },
   { label: "Июн", value: 180, color: "#FF9F40" },
];

export const NAME = "Данные по месяцам";

export const CALLBACKS = {
   "header-btn-1": drawChart1,
   "header-btn-2": drawChart2,
   "header-btn-3": drawChart3,
};
