document.addEventListener('DOMContentLoaded', () => {
    const monthSelector = document.querySelector('.month-name');
    const dateCalendar = document.querySelector('.date-calendar');
    const prevBtn = document.querySelector('.arrow:first-of-type');
    const nextBtn = document.querySelector('.arrow:last-of-type');

    const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", 
                    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    let currentDate = new Date();

    function updateCalendar(date) {
        monthSelector.textContent = `${months[date.getMonth()]} ${date.getFullYear()}`;

        const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
        const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
        const daysInPrevMonth = new Date(date.getFullYear(), date.getMonth(), 0).getDate();

        dateCalendar.innerHTML = '';

        // Días del mes anterior
        for (let i = firstDayOfMonth - 1; i >= 0; i--) {
            const day = document.createElement('button');
            day.classList.add('date', 'faded');
            day.textContent = daysInPrevMonth - i;
            dateCalendar.appendChild(day);
        }

        // Días del mes actual
        for (let day = 1; day <= daysInMonth; day++) {
            const dayBtn = document.createElement('button');
            dayBtn.classList.add('date');
            dayBtn.textContent = day;

            if (day === currentDate.getDate() &&
                date.getMonth() === currentDate.getMonth() &&
                date.getFullYear() === currentDate.getFullYear()) {
                dayBtn.classList.add('current-day');
            }

            dayBtn.addEventListener('click', () => {
                alert(`Has seleccionado el día ${day} de ${months[date.getMonth()]} ${date.getFullYear()}`);
            });

            dateCalendar.appendChild(dayBtn);
        }

        // Días del mes siguiente para completar la semana
        const totalButtons = dateCalendar.childElementCount;
        for (let i = 1; i <= (42 - totalButtons); i++) {
            const day = document.createElement('button');
            day.classList.add('date', 'faded');
            day.textContent = i;
            dateCalendar.appendChild(day);
        }
    }

    prevBtn.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() - 1);
        updateCalendar(currentDate);
    });

    nextBtn.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() + 1);
        updateCalendar(currentDate);
    });

    updateCalendar(currentDate);
});
