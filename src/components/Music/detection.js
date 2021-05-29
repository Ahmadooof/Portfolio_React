import { navButtons as navButton } from '../navbar/Navbar.js';
import { pauseAudio, playNewAudio, TRACKLIST } from './Audio';
import { stopStream } from "./camera";
import { animationAndButtons, faceAPI } from './Music';

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

    navButton.current.classList.add('notAllowed')


    let detections = await new Promise((res, rej) => {
        setTimeout(() => {
            res(faceAPI.detectAllFaces(animationAndButtons.video.current, new faceAPI.TinyFaceDetectorOptions()).withFaceExpressions().withAgeAndGender())
        }, 3000);
    })

    if (detections.length === 1) {          // we got a face
        detectionResult.faceDetected = true
        detectionResult.gender = detections[0].gender
        detectionResult.age = Math.round(detections[0].age)
        detectionResult.neutral = Math.floor(detections[0].expressions.neutral * 100)
        detectionResult.happy = Math.floor(detections[0].expressions.happy * 100)
        detectionResult.sad = Math.floor(detections[0].expressions.sad * 100)
        detectionResult.surprised = Math.floor(detections[0].expressions.surprised * 100)
        var emotionsArr = [detectionResult.neutral, detectionResult.happy, detectionResult.sad, detectionResult.surprised]

        pauseAudio(TRACKLIST.audio)
        playNewAudio(emotionsArr)

    } else {
        detectionResult.faceDetected = false
        pauseAudio(TRACKLIST.audio)
    }
    stopStream()
    navButton.current.classList.remove('notAllowed')
    return detectionResult
}
