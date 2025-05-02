import { DateTime, Duration } from 'luxon';

// 1. Fecha objetivo 
const TARGET = DateTime.fromISO('2030-06-01T12:00:00', { zone: 'Europe/Madrid' });

function updateCounter() {
    // 2. Fecha actual
    const now = DateTime.now().setZone('Europe/Madrid');

    // 3. Diferencia
    let diff: Duration = TARGET.diff(now, ['days', 'hours', 'minutes', 'seconds']);

    if (diff.toMillis() <= 0) diff = Duration.fromObject({}); // llegó la fecha

    // 4. Pintar en el HTML
    (document.getElementById('days')!.textContent = String(Math.floor(diff.days)));
    (document.getElementById('hours')!.textContent = String(diff.hours).padStart(2, '0'));
    (document.getElementById('minutes')!.textContent = String(diff.minutes).padStart(2, '0'));
    (document.getElementById('seconds')!.textContent = String(Math.floor(diff.seconds)).padStart(2, '0'));
}

// Llamada inicial y luego cada segundo
updateCounter();
setInterval(updateCounter, 1000);
