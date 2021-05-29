import { animationAndButtons } from './Music';

var constraints = { video: { width: 1280, height: 720 } };

export let stream
export function startCamera() {

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




