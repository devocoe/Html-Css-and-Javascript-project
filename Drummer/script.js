let a = document.getElementById('a');
let s = document.getElementById('s');
let d = document.getElementById('d');
let f = document.getElementById('f');
let g = document.getElementById('g');
let h = document.getElementById('h');
let j = document.getElementById('j');
let k = document.getElementById('k');


const music = {
    a:'sounds/tom-1.mp3',
    s:'sounds/tom-2.mp3',
    d:'sounds/tom-3.mp3',
    f:'sounds/tom-4.mp3',
    g:'sounds/snare.mp3',
    h:'sounds/kick-bass.mp3',
    j:'sounds/crash.mp3'

}





document.addEventListener('keypress',(event)=>{
    key = event.key
    
    if(key == 'a'){
        let sound = new Audio(music.a);
        a.classList.add('active')
        sound.play()
        setTimeout(() => {
            a.classList.remove('active')
        }, 100);
    }
    else if(key == 's'){
        let sound = new Audio(music.s);
        s.classList.add('active')
        sound.play()
        setTimeout(() => {
            s.classList.remove('active')
        }, 100);
    }
    else if(key == 'd'){
        let sound = new Audio(music.d);
        d.classList.add('active')
        sound.play()
        setTimeout(() => {
            d.classList.remove('active')
        }, 100);
    }
    else if(key == 'f'){
        let sound = new Audio(music.f);
        f.classList.add('active')
        sound.play()
        setTimeout(() => {
            f.classList.remove('active')
        }, 100);
    }
    else if(key == 'g'){
        let sound = new Audio(music.g);
        g.classList.add('active')
        sound.play()
        setTimeout(() => {
            g.classList.remove('active')
        }, 100);
    }
    else if(key == 'h'){
        let sound = new Audio(music.h);
        h.classList.add('active')
        sound.play()
        setTimeout(() => {
            h.classList.remove('active')
        }, 100);
    }
    else if(key == 'j'){
        let sound = new Audio(music.j);
        j.classList.add('active')
        sound.play()
        setTimeout(() => {
            j.classList.remove('active')
        }, 100);
    }
})


