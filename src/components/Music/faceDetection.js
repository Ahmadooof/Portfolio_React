import { ageRef, flipCardInnerRef, genderRef, happyRef, neutralRef, sadRef, surprisedRef, video } from '../Music/Music';
import { stream } from "../Music/startVideo";
import { navButtons as navButton } from '../navbar/Navbar.js';
import { faceAPI, playPausedSongButton, startDetectionsButtonRef } from "./Music";
import * as songs from './MusicList';

export let audio

export let startDetections = async () => {

    var timer = setInterval(async () => {
        window.onpopstate = function () {
            window.history.go(0);
        }
        let detections = await faceAPI.detectAllFaces(video.current, new faceAPI.TinyFaceDetectorOptions()).withFaceExpressions().withAgeAndGender()
        flipCardInnerRef.current.classList.add("flip-card-inner-onClick")
        navButton.current.classList.add('notAllowed')
        if (detections.length === 1) {          // we got a face
            ageRef.current.innerText = ""
            ageRef.current.innerText = "Age:\xa0";
            genderRef.current.innerText = "Gender:\xa0";
            neutralRef.current.innerText = "Neutral:\xa0";
            happyRef.current.innerText = "Happy:\xa0";
            sadRef.current.innerText = "Sad:\xa0";
            surprisedRef.current.innerText = "Surprised:\xa0";
            var neutral = Math.floor(detections[0].expressions.neutral * 100)
            var happy = Math.floor(detections[0].expressions.happy * 100)
            var sad = Math.floor(detections[0].expressions.sad * 100)
            var surprised = Math.floor(detections[0].expressions.surprised * 100)
            var emotionsArr = [neutral, happy, sad, surprised]
            var maxEmotion
            pauseAudio(audio)

            switch (emotionsArr.indexOf(Math.max(...emotionsArr))) {
                case 0:
                    maxEmotion = "neutral"
                    audio = new Audio(songs.TRACKLIST[0].source)
                    audio.play()
                    break
                case 1:
                    maxEmotion = "happy"
                    audio = new Audio(songs.TRACKLIST[1].source)
                    audio.play()
                    break
                case 2:
                    maxEmotion = "sad"
                    audio = new Audio(songs.TRACKLIST[2].source)
                    audio.play()
                    break
                case 3:
                    maxEmotion = "surprised"
                    audio = new Audio(songs.TRACKLIST[3].source)
                    audio.play()
                    break
                default:
                // audio.songs[1].play()
            }

            // flipCardInnerRef.current.classList.add("flip-card-inner-onClick")
            ageRef.current.innerText += Math.round(detections[0].age)
            genderRef.current.innerText += detections[0].gender
            neutralRef.current.innerText += neutral + "\xa0 %"
            happyRef.current.innerText += happy + "\xa0 %"
            sadRef.current.innerText += sad + "\xa0 %"
            surprisedRef.current.innerText += surprised + "\xa0 %"
            // clearInterval(timer)
        } else {
            // flipCardInnerRef.current.classList.add("flip-card-inner-onClick")
            ageRef.current.innerText = ""
            ageRef.current.innerText += "No face has been detected, press the button to start detection again"
            pauseAudio(audio)
            genderRef.current.innerText = "";
            neutralRef.current.innerText = "";
            happyRef.current.innerText = "";
            sadRef.current.innerText = "";
            surprisedRef.current.innerText = "";
        }
        stream.getTracks().forEach(function (track) {
            track.stop();

            clearInterval(timer)
        })

        removeRestrections()
    }, 3000);
}

export function pauseAudio(audio) {
    try {
        if (audio !== null || audio !== undefined)
            audio.pause()
    } catch (error) {

    }
}

function removeRestrections() {
    navButton.current.classList.remove('notAllowed')
    playPausedSongButton.current.hidden = false;
    startDetectionsButtonRef.current.hidden = false
}