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

let h1Val = document.getElementById('no-Product-view');
let currentActive = feedbacks.children[Math.floor(feedSize/2)];
feedbacks.children[Math.floor(feedSize/2)].classList.add('feed-active');
let prevActive = null;


////////////// Functions //////////////
// Change Preview Image Function
next.addEventListener('click', function(){
    if(h1Val.innerHTML === "01") h1Val.innerHTML = "02";
    else if(h1Val.innerHTML === "02") h1Val.innerHTML = "03";
    else h1Val.innerHTML = "01";
});
prev.addEventListener('click', function(){
    if(h1Val.innerHTML === "01") h1Val.innerHTML = "03";
    else if(h1Val.innerHTML ==="02") h1Val.innerHTML = "01";
    else h1Val.innerHTML = "02";
});

//  Feedback Buttons Function
function changeContent(prev,curr){
    let tmp = prev.innerHTML;
    prev.innerHTML = curr.innerHTML;
    curr.innerHTML = tmp;
    curr.classList.remove('feed-active');
    prev.classList.add('feed-active');
}
feedPrev.addEventListener('click',function(){
    feedNext.disabled = false;
    feedNext.pointerEvents = 'auto';
    if( feedbacks.children[0].classList.contains('feed-active')){
        feedPrev.disabled = true;
        feedPrev.pointerEvents = 'none';
    }
    else{
        for(let i = feedSize-1 ; i > 0; i--){
            if(feedbacks.children[i].classList.contains('feed-active')){
                feedbacks.children[i].classList.remove('feed-active');
                feedbacks.children[i-1].classList.add('feed-active');
                prevActive = feedbacks.children[i];
                currentActive = feedbacks.children[i-1];
                break;
            }
        };
    }
    changeContent(prevActive,currentActive);
})
feedNext.addEventListener('click',function(){
    feedPrev.disabled = false;
    feedPrev.pointerEvents = 'auto';
    if( feedbacks.children[feedSize-1].classList.contains('feed-active')){
        feedNext.disabled = true;
        feedNext.pointerEvents = 'none';
    }
    else{
        for(let i = 0 ; i < feedSize ; i++){
            if (feedbacks.children[i].classList.contains('feed-active')){
                feedbacks.children[i].classList.remove('feed-active');
                feedbacks.children[i+1].classList.add('feed-active');
                prevActive = feedbacks.children[i];
                currentActive = feedbacks.children[i+1];
                break;
            }
        };
    }
    changeContent(prevActive,currentActive);
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
    if(id === 1)
        mainCol.src = '../images/img-color-1.png';
    else if(id === 2)
        mainCol.src = '../images/img-color-2.png';
    else if(id === 3)
        mainCol.src = '../images/img-color-3.png';
    else if(id === 4)
        mainCol.src = '../images/img-color-4.png';
    else
        mainCol.src = '../images/img-11.png';
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

/////END Functionalities/////