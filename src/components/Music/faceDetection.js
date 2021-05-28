import { animationAndButtons, faceAPI } from '../Music/Music';
import { stream } from "../Music/startVideo";
import { navButtons as navButton } from '../navbar/Navbar.js';
import { pauseAudio, TRACKLIST } from './Audio';

export async function startDetections() {


    let detectionResult = {
        faceDetected: false,
        gender: '',
        age: 0,
        neutral: 0,
        happy: 0,
        sad: 0,
        surprised: 0,
    }

    let detections = await new Promise((res, rej) => {
        setTimeout(() => {
            res(faceAPI.detectAllFaces(animationAndButtons.video.current, new faceAPI.TinyFaceDetectorOptions()).withFaceExpressions().withAgeAndGender())
        }, 3000);
    })

    function animation() {
        animationAndButtons.flipCardInner.current.classList.add("flip-card-inner-onClick")
        navButton.current.classList.add('notAllowed')
    }
    animation()

    if (detections.length === 1) {          // we got a face
        console.log("hi");
        detectionResult.faceDetected = true
        detectionResult.gender = detections[0].gender
        detectionResult.age = Math.round(detections[0].age)
        detectionResult.neutral = Math.floor(detections[0].expressions.neutral * 100)
        detectionResult.happy = Math.floor(detections[0].expressions.happy * 100)
        detectionResult.sad = Math.floor(detections[0].expressions.sad * 100)
        detectionResult.surprised = Math.floor(detections[0].expressions.surprised * 100)

        var emotionsArr = [detectionResult.neutral, detectionResult.happy, detectionResult.sad, detectionResult.surprised]
        pauseAudio(TRACKLIST.audio)
        switch (emotionsArr.indexOf(Math.max(...emotionsArr))) {
            case 0:
                TRACKLIST.audio = new Audio(TRACKLIST[0].source);
                break;
            case 1:
                TRACKLIST.audio = new Audio(TRACKLIST[1].source);
                break;
            case 2:
                TRACKLIST.audio = new Audio(TRACKLIST[2].source);
                break;
            case 3:
                TRACKLIST.audio = new Audio(TRACKLIST[3].source);
                break;
            default:
        }
        TRACKLIST.audio.play();
    } else {
        detectionResult.faceDetected = false
        pauseAudio(TRACKLIST.audio);

    }
    stream.getTracks().forEach(function (track) {
        track.stop();
    })
    removeRestrections()

    return detectionResult
}

function removeRestrections() {
    navButton.current.classList.remove('notAllowed')
}