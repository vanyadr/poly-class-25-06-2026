import { DATA, NAME } from "../config.js";

const drawChart1 = () => {
   const canvas = document.getElementById("canvas-1");
   canvas.width = canvas.getBoundingClientRect().width;
   canvas.height = canvas.getBoundingClientRect().height;
   const ctx = canvas.getContext("2d");

   const data = DATA;

   const dataLength = Object.keys(data).length;
   const maxValue = Math.max(...data.map((item) => item.value));
   const gap = 30;
   const barWidth = canvas.width / dataLength - gap - 20;
   const startX = 80;
   const chartBottom = canvas.height - 50;
   const chartHeight = Math.floor(chartBottom / 5) * 5 - 100;

   function drawBackground() {
      ctx.fillStyle = "#000";
      ctx.font = "bold 18px Inter";
      ctx.textAlign = "center";
      ctx.fillText(NAME, canvas.width / 2, 22);

      ctx.strokeStyle = "#ddd";
      ctx.lineWidth = 1;

      for (let i = 0; i <= 5; i++) {
         const y = chartBottom - (chartHeight / 5) * i;
         ctx.beginPath();
         ctx.moveTo(60, y);
         ctx.lineTo(canvas.width - 20, y);
         ctx.stroke();

         ctx.fillStyle = "#666";
         ctx.font = "12px Inter";
         ctx.textAlign = "right";
         ctx.fillText(Math.round((maxValue / 5) * i), 55, y + 4);
      }

      ctx.strokeStyle = "#000";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(60, chartBottom);
      ctx.lineTo(canvas.width - 20, chartBottom);
      ctx.stroke();
   }

   function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      drawBackground();

      data.forEach((item, index) => {
         const x = startX + (barWidth + gap) * index;
         const targetHeight = (item.value / maxValue) * chartHeight;
         const y = chartBottom - targetHeight;

         ctx.fillStyle = item.color;
         ctx.fillRect(x, y, barWidth, targetHeight);

         ctx.fillStyle = "#000";
         ctx.font = "bold 14px Inter";
         ctx.textAlign = "center";
         ctx.fillText(item.value, x + barWidth / 2, y - 10);

         ctx.fillStyle = "#000";
         ctx.font = "14px Inter";
         ctx.fillText(item.label, x + barWidth / 2, chartBottom + 25);
      });
   }

   draw();
};

export { drawChart1 };
