import { DATA, NAME } from "../config.js";

const drawChart2 = () => {
   const canvas = document.getElementById("canvas-2");
   canvas.width = canvas.getBoundingClientRect().width;
   canvas.height = canvas.getBoundingClientRect().height;
   const ctx = canvas.getContext("2d");

   new Chart(ctx, {
      type: "bar",
      data: {
         labels: Object.values(DATA).map((item) => item.label),
         datasets: [
            {
               label: NAME,
               data: Object.values(DATA).map((item) => item.value),
               backgroundColor: Object.values(DATA).map((item) => `rgb(from ${item.color} r g b / 60%)`),
               borderColor: Object.values(DATA).map((item) => item.color),
               borderWidth: 1,
               borderRadius: 8,
            },
         ],
      },
      options: {
         responsive: true,
         animation: {
            duration: 1000,
            easing: "easeInOutCubic",
         },
         animations: {
            y: {
               from: canvas.getBoundingClientRect().height,
            },
         },
         scales: {
            y: {
               beginAtZero: true,
               grid: {
                  display: true,
                  color: "rgba(0, 0, 0, 0.1)",
               },
            },
            x: {
               grid: {
                  display: false,
               },
            },
         },
         plugins: {
            title: {
               display: true,
               text: NAME,
               font: {
                  size: 18,
               },
            },
         },
      },
   });
};

export { drawChart2 };
