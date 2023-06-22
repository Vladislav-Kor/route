ymaps.ready(function () {
  var map = new ymaps.Map('map', {
    center: [55.753994, 37.622093],  // координаты центра карты
    zoom: 12  // масштаб карты
  });

  // координаты точки, до которой нужен маршрут (например, Красная площадь в Москве)
  var destination = [55.753960, 37.620393];
  
  // создаем маршрут и задаем параметры
  ymaps.route([
    [map.getCenter()[0], map.getCenter()[1]],  // начальная точка маршрута (центр карты)
    destination  // конечная точка маршрута
  ], {
    // можно указать опции маршрута, например, тип транспорта
    // transportationMode: 'transit' // общественный транспорт
  }).then(function (route) {
    map.geoObjects.add(route);  // добавляем маршрут на карту
    var distance = route.getLength();  // расчет длины маршрута (в метрах)
    console.log('Длина маршрута: ' + distance.toFixed(0) + ' метров');
  });
});