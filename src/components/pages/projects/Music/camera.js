import { animationAndButtons } from './Music';
import * as faceapi from 'face-api.js';
export let faceAPI

var constraints = { video: { width: 1280, height: 720 } };

export let stream
export function camera() {
    Promise.all([
        faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
        // faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
        faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
        faceapi.nets.faceExpressionNet.loadFromUri('/models'),
        faceapi.nets.ageGenderNet.loadFromUri('/models'),
        faceAPI = faceapi
        // faceapi.nets.ssdMobilenetv1.loadFromUri('/models'),
        // faceapi.nets.tinyYolov2.loadFromUri('/models'),
    ]).then(startCamera)

}

function startCamera() {
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



