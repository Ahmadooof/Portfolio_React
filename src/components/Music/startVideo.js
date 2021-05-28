import { animationAndButtons } from '../Music/Music';
import { navButtons } from '../navbar/Navbar.js';

var constraints = { video: { width: 1280, height: 720 } };

export let stream
export function startVideo() {
    setRestrection()
    removeFlipCardAnimation()

    navigator.mediaDevices.getUserMedia(constraints).then(
        (MediaStream) => {
            animationAndButtons.video.current.srcObject = MediaStream
            animationAndButtons.video.current.onloadedmetadata = function () {
                animationAndButtons.video.current.play();
                stream = MediaStream
            };
        }
    )
}

function setRestrection() {
    navButtons.current.classList.add('notAllowed');
    animationAndButtons.videoNoise.current.hidden = true;
    animationAndButtons.video.current.hidden = false;
}

function removeFlipCardAnimation() {
    if (animationAndButtons.flipCardInner.current.classList.contains("flip-card-inner-onClick"))
        animationAndButtons.flipCardInner.current.classList.remove("flip-card-inner-onClick")
}

