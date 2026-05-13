const express = require('express');
const app = express();
const PORT = 3000;

// Маршрут для статического ответа
app.get('/static', (req, res) => {
  res.json({
    header: 'Hello',
    body: 'Octagon NodeJS Test'
  });
});

// Маршрут для динамического расчёта
app.get('/dynamic', (req, res) => {
  // Получаем параметры из адресной строки
  const a = req.query.a;
  const b = req.query.b;
  const c = req.query.c;

  // Проверяем, что все параметры переданы и являются числами
  if (a === undefined || b === undefined || c === undefined) {
    return res.json({ header: 'Error' });
  }

  const numA = parseFloat(a);
  const numB = parseFloat(b);
  const numC = parseFloat(c);

  if (isNaN(numA) || isNaN(numB) || isNaN(numC)) {
    return res.json({ header: 'Error' });
  }

  // Вычисляем результат по формуле (a * b * c) / 3
  const result = (numA * numB * numC) / 3;

  res.json({
    header: 'Calculated',
    body: result.toString()
  });
});

app.listen(PORT, () => {
  console.log(`Сервер запущен: http://localhost:${PORT}`);
});