# Мастер класс по веб-разработке ЛШ2026, Политех

В рамках МК мы научимся визуализировать данные, создав небольшое веб-приложение, с помощь которого вы сможете отобразить свои результаты и впечатлить экспертов

## Как запустить исходники

1. Форкнуть этот репозиторий в свой аккаунт
2. Создать папку с проектом
3. Склонировать форк репозитория: `git clone <ссылка>`

## Дополнительно пригодится

Функция для рассчета линейной регрессии (звучит сложно, но нам не важно, как она работает под капотом)

```javascript
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
```

Пример mock даных

```javascript
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
```

Ссылка на документацию библиотеки Chart.js: [Тык!](https://www.chartjs.org/docs/latest/)

Мой телеграм: @vandruggg
