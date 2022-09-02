
function clock() {
    setInterval(() => {

        let time = new Date();

        h = time.getHours();
        m = time.getMinutes();
        s = time.getSeconds();

        hour = document.getElementById('hour');
        minute = document.getElementById('minute');
        second = document.getElementById('second');

        hour.style.transform = `rotate(${30 * h + m / 2}deg)`;
        minute.style.transform = `rotate(${6 * m}deg)`;
        second.style.transform = `rotate(${6 * s}deg)`;


    }, 1000)
}

clock()