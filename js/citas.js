document.addEventListener('DOMContentLoaded', () => {
    const days = document.querySelectorAll('.day');
    const timeSlots = document.getElementById('time-slots');
    const availableTimes = document.getElementById('available-times');

    const hoursAvailable = {
        // Días de ejemplo con horas disponibles
        '1': ['09:00 AM', '10:00 AM', '11:00 AM', '02:00 PM'],
        '2': ['09:00 AM', '11:00 AM', '01:00 PM', '04:00 PM'],
        '3': ['08:30 AM', '10:30 AM', '12:00 PM', '03:00 PM'],
    };

    days.forEach(day => {
        day.addEventListener('click', () => {
            // Seleccionar día
            days.forEach(d => d.classList.remove('selected'));
            day.classList.add('selected');

            // Mostrar las horas disponibles
            const selectedDay = day.textContent;
            const hours = hoursAvailable[selectedDay] || [];
            timeSlots.innerHTML = ''; // Limpiar horas anteriores

            if (hours.length > 0) {
                hours.forEach(hour => {
                    const timeButton = document.createElement('button');
                    timeButton.classList.add('time-slot');
                    timeButton.textContent = hour;
                    timeButton.addEventListener('click', () => {
                        alert(`Cita seleccionada el día ${selectedDay} a las ${hour}`);
                    });
                    timeSlots.appendChild(timeButton);
                });
                availableTimes.style.display = 'block';
            } else {
                timeSlots.innerHTML = '<p>No hay horas disponibles para este día.</p>';
            }
        });
    });
});
