// Sat
function updateClock() {
    const now = new Date();
    const clock = document.getElementById('clock');
    if(clock) clock.textContent = now.toLocaleTimeString();
}
setInterval(updateClock, 1000);
updateClock();

// Kalendar
function showCalendar() {
    const calendarDiv = document.getElementById('calendar');
    if(calendarDiv) calendarDiv.textContent = new Date().toDateString();
}
showCalendar();

// Kontakt forma
const form = document.getElementById('contactForm');
if(form){
    form.addEventListener('submit', function(e){
        e.preventDefault();
        alert("Scammed :(");
    });
}