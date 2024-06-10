function updateTime() {
    const now = new Date();
    
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June', 
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    
    const dayName = days[now.getDay()];
    const day = now.getDate();
    const month = months[now.getMonth()];
    const year = now.getFullYear();
    
    const date = `${dayName} ${day} ${month} ${year}`;
    const time = now.toLocaleTimeString();
    
    document.getElementById('date').innerText = date;
    document.getElementById('time').innerText = time;
}


updateTime();
setInterval(updateTime, 1000);
