// Конфигурация летающих белых частиц
particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 60, /* Количество частиц на экране */
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff" /* Цвет частиц — белый */
    },
    "shape": {
      "type": "circle" /* Форма — круглая */
    },
    "opacity": {
      "value": 0.4, /* Прозрачность */
      "random": true,
      "anim": {
        "enable": true,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3, /* Размер точек */
      "random": true,
      "anim": {
        "enable": false
      }
    },
    "line_linked": {
      "enable": false /* Отключаем соединительные линии между точками */
    },
    "move": {
      "enable": true,
      "speed": 1.5, /* Скорость полета */
      "direction": "none", /* Случайное направление полета */
      "random": true,
      "straight": false,
      "out_mode": "out", /* Точки улетают за экран и появляются заново */
      "bounce": false
    }
  },
  "retina_detect": true
});

// Заглушка для пустых кнопок
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        if (this.getAttribute('href') === '#') {
            e.preventDefault();
            alert('Ссылка временно недоступна или проверяется администратором.');
        }
    });
});
