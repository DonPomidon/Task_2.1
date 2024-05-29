document.addEventListener('DOMContentLoaded', (event) => {
    let button = document.getElementById('button');
    let text = document.getElementById('text');
    let addButton = document.getElementById('addImageButton');
    let removebButton = document.getElementById('removeImageButton');
    let container = document.getElementById('imageContainer');

    button.addEventListener('click', () => {
        text.style.color = getRandomColor();
        button.style.backgroundColor = getRandomColor();
        button.style.color = getRandomColor();
    });

    function getRandomColor() {
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    addButton.addEventListener('click', () => {
        let img = document.createElement('img');

        img.src = '../images/background.jpg';

        container.appendChild(img);
    })

    removebButton.addEventListener('click', () => {
        if (container.hasChildNodes()) {
            container.removeChild(container.lastChild);
        }
    })

    const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
    const appendAlert = (message, type) => {
    const wrapper = document.createElement('div')
        wrapper.innerHTML = [
        `<div class="alert alert-${type} alert-dismissible" role="alert">`,
        `   <div>${message}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>'
    ].join('')

    alertPlaceholder.append(wrapper)
    }

    const alertTrigger = document.getElementById('liveAlertBtn')
    if (alertTrigger) {
        alertTrigger.addEventListener('click', () => {
            appendAlert('Aleeeert!', 'success')
        })
    }

    const carousel = new bootstrap.Carousel('#myCarousel')
});