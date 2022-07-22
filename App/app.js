let callPopup = document.getElementById('callPopup')
let closePopup = document.getElementById('closePopup')
let popup = document.getElementById('nav__popup')

function popupClosed() {
    document.getElementById('nav__popup').classList.remove('show')
    document.getElementById('body').classList.remove('no-scroll')
}

function closeByKey(evt) {
    if (evt.keyCode == 27) {
        document.getElementById('nav__popup').classList.remove('show')
        document.getElementById('body').classList.remove('no-scroll')
    }
}

callPopup.onclick = function () {
    document.getElementById('nav__popup').classList.add('show')
    document.getElementById('body').classList.add('no-scroll')
}

closePopup.onclick = popupClosed;
popup.onclick = popupClosed;




document.getElementById('popup__wrapper').onclick = function (event) {
    event.stopPropagation();
}


const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()

        const blockID = anchor.getAttribute('href').substr(1)

        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}