let videoBtn = document.getElementById('video-btn');
let upBtn = document.getElementById('up-btn');

let previewImgs = document.querySelector('.carousel-inner');
let previewSize = previewImgs.children.length;
let prev = document.getElementById('prev');
let next = document.getElementById('next');

let feedPrev = document.getElementById('prev-feed');
let feedNext = document.getElementById('next-feed');
let feedbacks = document.querySelector('.feedback');
let feedSize = feedbacks.children.length;

let color = 'white';

// Change Preview Image Function
function changePreviewImage(){
    for(let i = 0 ; i < previewSize ;i++)
        if (previewImgs.children[i].classList.contains('active')){
            document.getElementById('no-Product-view').innerHTML = "0"+(i+1);
        }
}
next.addEventListener('click', changePreviewImage);
prev.addEventListener('click', changePreviewImage);

//  Feedback Buttons Function
feedPrev.addEventListener('click',function(){
    if( feedbacks.children[0].classList.contains('feed-active')){
        feedPrev.disabled = true;
        feedNext.disabled = false;
        feedPrev.pointerEvents = 'none';
        feedNext.pointerEvents = 'auto';
    }
    else{
        for(let i = 2 ; i > 0; i--){
            if(feedbacks.children[i].classList.contains('feed-active')){
                feedbacks.children[i].classList.remove('feed-active');
                feedbacks.children[i-1].classList.add('feed-active');
                break;
            }
        };
    }
})
feedNext.addEventListener('click',function(){
    if( feedbacks.children[2].classList.contains('feed-active')){
        feedNext.disabled = true;
        feedNext.style.pointerEvents = 'none';
        feedPrev.disabled = false;
        feedPrev.pointerEvents = 'auto';
    }
    else{
        for(let i = 0 ; i < 2 ; i++){
            if (feedbacks.children[i].classList.contains('feed-active')){
                feedbacks.children[i].classList.remove('feed-active');
                feedbacks.children[i+1].classList.add('feed-active');
                break;
            }
        };
    }
})

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
function changeColor(id) {
    let mainCol = document.getElementById('main-col');
    if(id === 1){
        mainCol.src = '../images/img-color-1.png';
        color = 'baby-blue';
    }
    else if(id === 2){
        mainCol.src = '../images/img-color-2.png';
        color = 'green';
    }
    else if(id === 3){
        mainCol.src = '../images/img-color-3.png';
        color = 'red';
    }
    else if(id === 4){
        mainCol.src = '../images/img-color-4.png';
        color = 'black';
    }
    else{
        mainCol.src = '../images/img-11.png';
        color = 'white';
    }
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

////////////