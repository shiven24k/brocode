function updateClock(){
    const now = new Date();
    let hours = now.getHours().toString().padStart(2, '0');
    const meredian = hours >= 12 ? 'PM' : 'AM';
    hours = (hours % 12) || 12;
    hours = hours.toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const time = `${hours}:${minutes}:${seconds} ${meredian}`;
    document.getElementById('clock').innerText = time;
}
updateClock();
setInterval(updateClock, 1000);
