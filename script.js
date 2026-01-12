let noHoverCount = 0;
function moveButton() {
    const noBtn = document.getElementById('noBtn');
    const card = document.querySelector('.card');
    const header = document.getElementById('delal');

    if (noBtn.style.position !== 'fixed') {
        noBtn.style.position = 'fixed';
    }

    noHoverCount++;

    if (noHoverCount === 5) {
        document.getElementById('delal').style.display = 'none';
        document.getElementById('main-content').style.display = 'none';

        document.getElementById('fail-container').style.display = 'block';
    }

    let x, y;
    let positionIsValid = false;
    const headerRect = header.getBoundingClientRect();
    const cardRect = card.getBoundingClientRect();

    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;

    const maxX = window.innerWidth - btnWidth;
    const maxY = window.innerHeight - btnHeight;


    while (!positionIsValid) {
        x = Math.random() * maxX;
        y = Math.random() * maxY;

        const btnLeft = x;
        const btnRight = x + btnWidth;
        const btnTop = y;
        const btnBottom = y + btnHeight;

        const isOverlappingCard = btnRight > cardRect.left &&   // Button ist rechts vom linken Kartenrand
                        btnLeft < cardRect.right &&   // Button ist links vom rechten Kartenrand
                        btnBottom > cardRect.top &&   // Button ist unterhalb der Kartenoberkante
                        btnTop < cardRect.bottom;

        const isOverlappingHeader =
            btnRight > headerRect.left &&
            btnLeft < headerRect.right &&
            btnBottom > headerRect.top &&
            btnTop < headerRect.bottom;

        if (!isOverlappingCard && !isOverlappingHeader) {
            positionIsValid = true;
        }
    }

    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
}

function changeYourMindHover() {
    const mayBtn = document.getElementById('mayBtn');

    mayBtn.innerText = 'Ja natürlich!';
}

function changeYourMindLeave() {
    const mayBtn = document.getElementById('mayBtn');

    mayBtn.innerText = 'Vielleicht';
}

function acceptLove(source) {
    document.getElementById('delal').style.display = 'none';
    document.getElementById('main-content').style.display = 'none';

    const successText = document.getElementById('success-message');

    if (source === 'maybe') {
        successText.innerText = "Vielleicht nehme ich als ja hehe <3 ";
    }

    document.getElementById('success-container').style.display = 'block';
}

function backToTheRoots() {
    document.getElementById('success-container').style.display = 'none';
    document.getElementById('fail-container').style.display = 'none';

    const successText = document.getElementById('success-message');
    successText.innerText = "Ich freue mich :) <3";

    document.getElementById('delal').style.display = 'block';
    document.getElementById('main-content').style.display = 'block';

    const noBtn = document.getElementById('noBtn');
    noBtn.style.position = '';
    noBtn.style.left = '';
    noBtn.style.top = '';

    noHoverCount = 0;
}

document.addEventListener("DOMContentLoaded", function() {
    const customCursor = document.getElementById('custom-cursor');
    const targets = document.querySelectorAll('button, #success-image, #fail-image');

    // 1. Das Div bewegt sich immer mit der Maus mit (auch wenn unsichtbar)
    document.addEventListener('mousemove', (e) => {
        customCursor.style.left = e.clientX + 'px';
        customCursor.style.top = e.clientY + 'px';
    });

    // 2. Ein-/Ausblenden beim Hovern
    targets.forEach(el => {
        el.addEventListener('mouseenter', () => {
            customCursor.style.display = 'block'; // GIF zeigen
        });
        el.addEventListener('mouseleave', () => {
            customCursor.style.display = 'none';  // GIF verstecken
        });
    });
});