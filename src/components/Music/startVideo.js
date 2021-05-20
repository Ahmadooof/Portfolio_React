import { flipCardInnerRef, playPausedSongButton, startDetectionsButtonRef, video, videoNoise } from '../Music/Music';
import { navButtons } from '../navbar/Navbar.js';

var constraints = { video: { width: 1280, height: 720 } };

export let stream
export function startVideo() {
    setRestrection()
    removeFlipCardAnimation()

    navigator.mediaDevices.getUserMedia(constraints).then(
        (MediaStream) => {
            video.current.srcObject = MediaStream
            video.current.onloadedmetadata = function () {
                video.current.play();
                stream = MediaStream
            };
        }
    )
}

function setRestrection() {
    navButtons.current.classList.add('notAllowed');
    playPausedSongButton.current.hidden = true;
    startDetectionsButtonRef.current.hidden = true;
    videoNoise.current.hidden = true;
    video.current.hidden = false;
}

function removeFlipCardAnimation() {
    if (flipCardInnerRef.current.classList.contains("flip-card-inner-onClick"))
        flipCardInnerRef.current.classList.remove("flip-card-inner-onClick")
}

