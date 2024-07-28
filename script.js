document.getElementById('spinButton').addEventListener('click', function() {
    const wheel = document.getElementById('wheel');
    const resultElement = document.getElementById('result');
    
    const segments = ['1', '2', '5', '10', '50', 'Крути ще раз'];
    const randomIndex = Math.floor(Math.random() * segments.length);
    const degrees = 360 / segments.length * randomIndex + 3600; // 3600 for multiple spins for better visual effect

    wheel.style.transition = 'transform 4s ease-out';
    wheel.style.transform = `rotate(${degrees}deg)`;

    setTimeout(() => {
        wheel.style.transition = 'none';
        wheel.style.transform = `rotate(${360 / segments.length * randomIndex}deg)`;
        resultElement.textContent = `Результат: ${segments[randomIndex]}`;
    }, 4000);
});
