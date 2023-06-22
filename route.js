ymaps.ready(function () {
  // Создаем карту
  var myMap = new ymaps.Map('map', {
    center: [55.76, 37.64], // координаты центра карты
    zoom: 10 // масштаб карты
  }, {
    searchControlProvider: 'yandex#search'
  });

  // Добавляем элемент управления для построения маршрута
  var control = new ymaps.control.RoutePanel({
    options: {
      reverseGeocoding: true
    }
  });
  myMap.controls.add(control);

  // После построения маршрута ищем его стоимость
  control.routePanel.getRouteAsync().then(function (route) {
    var calculator = new ymaps.control.RouteEditor({
      route: route
    });
    myMap.controls.add(calculator);
    var cost = calculator.getRouteData().then(function (routeData) {
      var price = routeData.tariff.totalCost;
      console.log(price); // в переменной price хранится стоимость маршрута
    });
  });
});