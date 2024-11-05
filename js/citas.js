document.addEventListener('DOMContentLoaded', function() {
    const calendarBody = document.getElementById('calendarBody');
    const currentMonthElement = document.getElementById('currentMonth');
    const prevMonthButton = document.getElementById('prevMonth');
    const nextMonthButton = document.getElementById('nextMonth');

    let currentDate = new Date();

    function generateCalendar(year, month) {
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const today = new Date();

        currentMonthElement.textContent = firstDay.toLocaleString('es-ES', { month: 'long', year: 'numeric' });

        let dateString = '';

        // Rellenar los días del mes anterior
        for (let i = 0; i < firstDay.getDay(); i++) {
            dateString += '<td class="other-month"></td>';
        }

        // Rellenar los días del mes actual
        for (let i = 1; i <= lastDay.getDate(); i++) {
            if (i === today.getDate() && month === today.getMonth() && year === today.getFullYear()) {
                dateString += `<td class="current-day">${i}</td>`;
            } else {
                dateString += `<td>${i}</td>`;
            }

            if ((firstDay.getDay() + i - 1) % 7 === 6) {
                dateString += '</tr><tr>';
            }
        }

        // Rellenar los días del mes siguiente
        const remainingDays = 7 - lastDay.getDay();
        for (let i = 1; i <= remainingDays; i++) {
            dateString += '<td class="other-month"></td>';
        }

        calendarBody.innerHTML = `<tr>${dateString}</tr>`;

        // Agregar evento click a las celdas del calendario
        const cells = calendarBody.getElementsByTagName('td');
        for (let cell of cells) {
            cell.addEventListener('click', function() {
                if (this.textContent) {
                    alert(`Has seleccionado el día ${this.textContent} de ${currentMonthElement.textContent}`);
                }
            });
        }
    }

    generateCalendar(currentDate.getFullYear(), currentDate.getMonth());

    prevMonthButton.addEventListener('click', function() {
        currentDate.setMonth(currentDate.getMonth() - 1);
        generateCalendar(currentDate.getFullYear(), currentDate.getMonth());
    });

    nextMonthButton.addEventListener('click', function() {
        currentDate.setMonth(currentDate.getMonth() + 1);
        generateCalendar(currentDate.getFullYear(), currentDate.getMonth());
    });
});

// Alternar la clase de la barra lateral
document.querySelector('.toggle-btn').addEventListener('click', () => {
    document.querySelector('.sidebar').classList.toggle('collapsed');
    document.querySelector('.main-content').classList.toggle('expanded');
});
