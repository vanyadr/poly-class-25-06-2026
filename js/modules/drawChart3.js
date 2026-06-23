import { NAME } from "../config.js";

const drawChart3 = () => {
   const canvas = document.getElementById("canvas-3");
   canvas.width = canvas.getBoundingClientRect().width;
   canvas.height = canvas.getBoundingClientRect().height;
   const ctx = canvas.getContext("2d");

   const originalData = [
      { x: 1, y: 2.1 },
      { x: 2, y: 3.8 },
      { x: 3, y: 5.2 },
      { x: 4, y: 7.1 },
      { x: 5, y: 8.0 },
      { x: 6, y: 10.3 },
      { x: 7, y: 11.2 },
      { x: 8, y: 13.5 },
      { x: 9, y: 14.1 },
      { x: 10, y: 16.0 },
   ];

   function calculateLinearRegression(data) {
      const n = data.length;

      let sumX = 0,
         sumY = 0,
         sumXY = 0,
         sumX2 = 0;

      data.forEach((point) => {
         sumX += point.x;
         sumY += point.y;
         sumXY += point.x * point.y;
         sumX2 += point.x * point.x;
      });

      const a = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
      const b = (sumY - a * sumX) / n;

      const xMin = Math.min(...data.map((p) => p.x));
      const xMax = Math.max(...data.map((p) => p.x));

      return [
         { x: xMin, y: a * xMin + b },
         { x: xMax, y: a * xMax + b },
      ];
   }

   const trendLine = calculateLinearRegression(originalData);

   new Chart(ctx, {
      type: "scatter",
      data: {
         datasets: [
            {
               label: NAME,
               data: originalData,
               backgroundColor: "rgba(54, 162, 235, 0.8)",
               borderColor: "rgba(54, 162, 235, 1)",
               borderWidth: 2,
               pointRadius: 6,
               pointHoverRadius: 8,
               pointBackgroundColor: "rgba(54, 162, 235, 1)",
               pointBorderColor: "#fff",
               pointBorderWidth: 1,
            },
            {
               label: "Линия тренда",
               data: trendLine,
               type: "line",
               borderColor: "rgba(255, 99, 132, 1)",
               backgroundColor: "rgba(255, 99, 132, 0.1)",
               borderWidth: 2,
               borderDash: [5, 5],
               pointRadius: 0,
               fill: false,
            },
         ],
      },
      options: {
         responsive: true,
         animation: {
            duration: 1000,
            easing: "easeInOutCubic",
         },
         plugins: {
            title: {
               display: true,
               text: "График с линейной регрессией",
               font: {
                  size: 18,
                  weight: "bold",
               },
               padding: 20,
            },
            legend: {
               display: true,
               position: "bottom",
               labels: {
                  usePointStyle: true,
                  padding: 20,
               },
            },
            tooltip: {
               callbacks: {
                  label: function (context) {
                     return `X: ${context.parsed.x}, Y: ${context.parsed.y.toFixed(2)}`;
                  },
               },
            },
         },
         scales: {
            x: {
               title: {
                  display: true,
                  text: "X значения",
                  font: {
                     size: 14,
                  },
               },
               grid: {
                  color: "rgba(0, 0, 0, 0.1)",
               },
            },
            y: {
               title: {
                  display: true,
                  text: "Y значения",
                  font: {
                     size: 14,
                  },
               },
               grid: {
                  color: "rgba(0, 0, 0, 0.1)",
               },
            },
         },
      },
   });
};

export { drawChart3 };
