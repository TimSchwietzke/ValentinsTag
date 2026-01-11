function moveButton() {
    const noBtn = document.getElementById('noBtn');
    const card = document.querySelector('.card');

    if (noBtn.style.position !== 'fixed') {
        noBtn.style.position = 'fixed';
    }

    let x, y;
    let isOverlapping = true;
    const cardRect = card.getBoundingClientRect();

    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;

    const maxX = window.innerWidth - btnWidth;
    const maxY = window.innerHeight - btnHeight;


    while (isOverlapping) {
        x = Math.random() * maxX;
        y = Math.random() * maxY;

        const btnLeft = x;
        const btnRight = x + btnWidth;
        const btnTop = y;
        const btnBottom = y + btnHeight;

        isOverlapping = btnRight > cardRect.left &&   // Button ist rechts vom linken Kartenrand
                        btnLeft < cardRect.right &&   // Button ist links vom rechten Kartenrand
                        btnBottom > cardRect.top &&   // Button ist unterhalb der Kartenoberkante
                        btnTop < cardRect.bottom;
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

function acceptLove() {
    alert("Juhu! ❤️ Schreib mir!");
}