# Мастер класс по веб-разработке ЛШ2026, Политех

В рамках МК мы научимся визуализировать данные, создав небольшое веб-приложение, с помощь которого вы сможете отобразить свои результаты и впечатлить экспертов

## Как запустить исходники

1. Форкнуть этот репозиторий в свой аккаунт
2. Создать папку с проектом
3. Склонировать форк репозитория: `git clone <ссылка>`

## Дополнительно пригодится

Функция для рассчета линейной регрессии (звучит сложно, но нам не важно, как она работает под капотом)

```
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

Ссылка на документацию библиотеки Chart.js: [Тык!](https://www.chartjs.org/docs/latest/)

Мой телеграм: @vandruggg
