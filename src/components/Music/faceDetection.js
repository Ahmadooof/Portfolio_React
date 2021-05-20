import { animationAndButtons, detectionResult } from '../Music/Music';
import { stream } from "../Music/startVideo";
import { navButtons as navButton } from '../navbar/Navbar.js';
import { faceAPI } from "./Music";
import * as songs from './MusicList';

export let audio



export let startDetections = async () => {


    var timer = setInterval(async () => {
        window.onpopstate = function () {
            window.history.go(0);
        }
        let detections = await faceAPI.detectAllFaces(animationAndButtons.video.current, new faceAPI.TinyFaceDetectorOptions()).withFaceExpressions().withAgeAndGender()
        animationAndButtons.flipCardInner.current.classList.add("flip-card-inner-onClick")
        navButton.current.classList.add('notAllowed')
        if (detections.length === 1) {          // we got a face
            // age = ""
            detectionResult.age.current.innerText = "Age:\xa0";
            detectionResult.gender.current.innerText = "Gender:\xa0";
            detectionResult.neutral.current.innerText = "Neutral:\xa0";
            detectionResult.happy.current.innerText = "Happy:\xa0";
            detectionResult.sad.current.innerText = "Sad:\xa0";
            detectionResult.surprised.current.innerText = "Surprised:\xa0";
            var neutral = Math.floor(detections[0].expressions.neutral * 100)
            var happy = Math.floor(detections[0].expressions.happy * 100)
            var sad = Math.floor(detections[0].expressions.sad * 100)
            var surprised = Math.floor(detections[0].expressions.surprised * 100)
            var emotionsArr = [neutral, happy, sad, surprised]
            pauseAudio(audio)
            switch (emotionsArr.indexOf(Math.max(...emotionsArr))) {
                case 0:
                    audio = new Audio(songs.TRACKLIST[0].source)
                    break
                case 1:
                    audio = new Audio(songs.TRACKLIST[1].source)
                    break
                case 2:
                    audio = new Audio(songs.TRACKLIST[2].source)
                    break
                case 3:
                    audio = new Audio(songs.TRACKLIST[3].source)
                    break
                default:
                    audio = new Audio(songs.TRACKLIST[0].source)
            }
            audio.play()
            detectionResult.age.current.innerText += Math.round(detections[0].age)
            detectionResult.gender.current.innerText += detections[0].gender
            detectionResult.neutral.current.innerText += neutral + "\xa0 %"
            detectionResult.happy.current.innerText += happy + "\xa0 %"
            detectionResult.sad.current.innerText += sad + "\xa0 %"
            detectionResult.surprised.current.innerText += surprised + "\xa0 %"
        } else {
            // age = ""
            detectionResult.age.current.innerText = ""
            detectionResult.age.current.innerText += "No face has been detected, press the button to start detection again"
            pauseAudio(audio)
            // detectionResult.gender.current.innerText = "";
            // detectionResult.neutral.current.innerText = "";
            // detectionResult.happy.current.innerText = "";
            // detectionResult.sad.current.innerText = "";
            // detectionResult.surprised.current.innerText = "";
        }
        stream.getTracks().forEach(function (track) {
            track.stop();

            clearInterval(timer)
        })

        removeRestrections()
    }, 3000);
}

export function pauseAudio(audio) {
    if (audio !== undefined)  // Audio is not initialized
        audio.pause()
}

function removeRestrections() {
    navButton.current.classList.remove('notAllowed')
    animationAndButtons.playPauseButton.current.hidden = false;
    animationAndButtons.startDetectionButton.current.hidden = false
}