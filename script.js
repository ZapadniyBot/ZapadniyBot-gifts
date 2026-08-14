// Заглушка для пустых кнопок
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        // Если у кнопки вместо ссылки стоит знак #
        if (this.getAttribute('href') === '#') {
            e.preventDefault();
            alert('Ссылка временно недоступна или проверяется администратором.');
        }
    });
});
