import { animationAndButtons } from './Music';

var constraints = { video: { width: 1280, height: 720 } };

export let stream
export function camera() {

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

export let stopStream = () => {
    stream.getTracks().forEach(function (track) {
        track.stop();
    })
}



