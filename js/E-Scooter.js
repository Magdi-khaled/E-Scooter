let videoBtn = document.getElementById('video-btn');
let upBtn = document.getElementById('up-btn');

// Show Video Trailer Function
videoBtn.onclick = function(){
    // Get The Modal Element
    const modal = document.createElement('div');
    modal.classList.add('modal');

    //Create Video Element
    const video = document.createElement('video');
    video.src = '../Videos/Trailer.mp4';
    video.controls = true;
    modal.appendChild(video);

    // Exit Button
    const exitButton = document.createElement('button');
    exitButton.textContent = 'x';
    exitButton.classList.add('exit-btn-style');
    exitButton.addEventListener('mouseover', () => {
        exitButton.style.color = '#000';
        exitButton.style.backgroundColor = 'var(--color-3)';
        exitButton.style.textTransform = 'scale(1.1)';
        exitButton.style.cursor = 'pointer';
        
    });
    exitButton.addEventListener('mouseleave', () => {
        exitButton.style.backgroundColor = 'var(--color-4)';
        exitButton.style.color = '#000';
    })
    exitButton.addEventListener('mouseup', () => {
        video.muted = true;
    })
    exitButton.addEventListener('click', () => {
        const bodyElements = document.querySelectorAll('body *');
        bodyElements.forEach(element => {
        element.style.pointerEvents = 'auto';
        });
        // Hide the modal and enable background scroll
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    modal.appendChild(exitButton);
    modal.style.display = 'block';
    modal.style.width = '100%';
    modal.style.height = '100vh';
    modal.style.backgroundColor = 'rgb(0 0 0 / 71%)';
    modal.style.color = 'white';
    modal.style.padding = '20px';
    document.body.style.overflow = 'hidden';
    document.body.appendChild(modal);
}
// Change Motor Colors Function
function changeColor(src) {
    let mainCol = document.getElementById('main-col');
    mainCol.src = src;
}
// Hide Up btn or show
window.onscroll = function(){
    if(window.scrollY > 400)
        upBtn.style.display = 'block';
    else
        upBtn.style.display = 'none';
}
// Back Top Function
upBtn.addEventListener('click',function(){
    window.scrollTo({
        top: 0, behavior:'smooth',
    });
})