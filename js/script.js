
const modalBtns = document.querySelectorAll('[data-modal]')
const modalBtnsClose = document.querySelectorAll('[data-close]')
const modal = document.querySelector('.modal')

modalBtns.forEach(btn => {
    btn.onclick = () => {
        modal.classList.add('show', 'fade')
    }
})


modalBtnsClose.forEach(btn => {
    btn.onclick = () => {
        modal.classList.remove('show')
    }
})


// tabcontent

const tabcontents = document.querySelectorAll('.tabcontent')
const tabBtns = document.querySelectorAll('.tabheader__item')

tabcontents.forEach(item => item.classList.add('hide', 'fade'))
tabcontents[0].classList.remove('hide')

tabBtns.forEach((btn, idx) => {
    btn.onclick = () => {
        tabBtns.forEach(btn => btn.classList.remove('tabheader__item_active'))
        btn.classList.add('tabheader__item_active')


        tabcontents.forEach(item => item.classList.add('hide'))
        tabcontents[idx].classList.remove('hide')
    }
})




const slides = document.querySelectorAll('.offer__slide')
const prev_btn = document.querySelector('.offer__slider-prev')
const next_btn = document.querySelector('.offer__slider-next')
const current = document.querySelector('#current')
const total = document.querySelector('#total')

let slide_idx = 0
SlideTransparent(slide_idx)



function SlideTransparent(n) {
    if (n === slides.length) {
        slide_idx = 0
    }
    if (n < 0) {
        slide_idx = slides.length - 1
    }

    slides.forEach(el => el.classList.add('hide', 'fade'))
    slides[slide_idx].classList.remove('hide')

    current.innerHTML = slide_idx + 1 < 10 ? `0${slide_idx + 1}` : slide_idx + 1
    total.innerHTML = slides.length < 10 ? `0${slides.length}` : slides.length



}
next_btn.onclick = () => {
    slide_idx++
    SlideTransparent(slide_idx)
}
prev_btn.onclick = () => {
    slide_idx--
    SlideTransparent(slide_idx)
}

const nameInp = document.querySelector('input[name="name"]');
const phoneNum = document.querySelector('input[name="phone"]');
const form = document.querySelector('.order__form');


form.onsubmit = (element) => {
    element.preventDefault()
    console.log({ name: nameInp.value, number: phoneNum.value })
    form.reset()
};




let deadline = "2023-11-28 15:30"

const defaults = {
    spread: 360,
    ticks: 20,
    gravity: 0,
    decay: 0.94,
    startVelocity: 30,
};


function getRemTime(endTime) {
    // const t = Date.now(new Date())
    const t = Date.parse(endTime) - Date.now(new Date())
    const days = Math.round((t / 1000) / 60 / 60 / 24)
    const hours = Math.round((t / 1000) / 60 / 60 % 24)
    const minutes = Math.round((t / 1000) / 60 % 60)
    const seconds = Math.round((t / 1000) % 60)

    return {
        t,
        days,
        hours,
        minutes,
        seconds
    }
}
function setTime(endTime, selector) {
    const t = document.querySelector(selector),
        days = t.querySelector('#days'),
        hours = t.querySelector('#hours'),
        minutes = t.querySelector('#minutes'),
        seconds = t.querySelector('#seconds');
    interval = setInterval(updateTime, 1000)

    function updateTime() {
        const t = getRemTime(endTime)

        if (t.t <= 0) {
            clearInterval(interval)
            shoot()
            return

        }


        days.innerHTML = t.days
        hours.innerHTML = t.hours
        minutes.innerHTML = t.minutes
        seconds.innerHTML = t.seconds



    }

    function shoot() {
        confetti({
            ...defaults,
            particleCount: 1000,
            scalar: 1.2,
            shapes: ["circle", "square"],
            colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
        });

        confetti({
            ...defaults,
            particleCount: 20,
            scalar: 2,
            shapes: ["text"],
            shapeOptions: {
                text: {
                    value: ["🍕", "🍔", "🍟", "🌭", "🍿", "🥓", "🌮", "🥪", "🥙", "🌯", "🍪", "🍩", "🍨", "🍰", "🥧", "🍙", "🍜", "🥓", "🌈"],
                },
            },
        });
    }

    setTimeout(0);
    setTimeout(100);
    setTimeout(200);
}

setTime(deadline, '.timer')

