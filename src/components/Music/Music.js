import React, { useEffect, useRef, useState } from 'react'
import './Music.css'

// import '@tensorflow/tfjs-node';
import * as faceapi from 'face-api.js';


var constraints = { video: { width: 1280, height: 720 } };

function Music() {
    const video = useRef(null)
    const videoNoise = useRef(null)
    const flipCardInnerRef = useRef(null)
    const ageRef = useRef(null)
    const genderRef = useRef(null)
    const neutralRef = useRef(null)
    const happyRef = useRef(null)
    const sadRef = useRef(null)
    const surprisedRef = useRef(null)
    const startDetectionsButtonRef = useRef(null)
    const playPausedSongButton = useRef(null)
    const SongsRef = useRef(null)

    const [started, setStarted] = useState(false)

    const toggleStarted = () => {
        if (started)
            setStarted(false)
    }

    function startVideo() {
        console.log()
        startDetectionsButtonRef.current.disabled = true
        startDetectionsButtonRef.current.style.cursor = 'not-allowed'

        if (flipCardInnerRef.current.classList.contains("flip-card-inner-onClick"))
            flipCardInnerRef.current.classList.remove("flip-card-inner-onClick")
        videoNoise.current.hidden = true
        video.current.hidden = false
        navigator.mediaDevices.getUserMedia(constraints).then(
            (MediaStream) => {
                video.current.srcObject = MediaStream
                video.current.onloadedmetadata = function (e) {
                    video.current.play();
                };
            }
        )
    }
    var ctx
    useEffect(() => {
        video.current.hidden = true
        ctx = videoNoise.current.getContext('2d');
        playNoiseVideo()
        Promise.all([
            faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
            faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
            faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
            faceapi.nets.faceExpressionNet.loadFromUri('/models'),
            faceapi.nets.ageGenderNet.loadFromUri('/models'),
            // faceapi.nets.ssdMobilenetv1.loadFromUri('/models'),
            // faceapi.nets.tinyYolov2.loadFromUri('/models'),
        ])
    }, [started])

    let audio = new Audio("Music/1.mp3")


    const startDetections = () => {
        var timer = setInterval(async () => {
            const detections = await faceapi.detectAllFaces(video.current, new faceapi.TinyFaceDetectorOptions()).withFaceExpressions().withAgeAndGender()
            if (detections.length === 1) {          // we got a face
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
                switch (emotionsArr.indexOf(Math.max(...emotionsArr))) {
                    case 0:
                        maxEmotion = "neutral"
                        audio.play()
                        break
                    case 1:
                        maxEmotion = "happy"
                        break
                    case 2:
                        maxEmotion = "sad"
                        break
                    case 3:
                        maxEmotion = "surprised"
                        break
                    default:
                        maxEmotion = "neutral"
                }
                flipCardInnerRef.current.classList.add("flip-card-inner-onClick")
                ageRef.current.innerText += Math.round(detections[0].age)
                genderRef.current.innerText += detections[0].gender
                neutralRef.current.innerText += neutral + "\xa0 %"
                happyRef.current.innerText += happy + "\xa0 %"
                sadRef.current.innerText += sad + "\xa0 %"
                surprisedRef.current.innerText += surprised + "\xa0 %"
                clearInterval(timer)
                startDetectionsButtonRef.current.disabled = false
                startDetectionsButtonRef.current.style.cursor = 'pointer'

            }
        }, 3000)
    }


    const playNoiseVideo = () => {
        noise();
        requestAnimationFrame(playNoiseVideo);
    }

    function noise() {
        var w = ctx.canvas.width,
            h = ctx.canvas.height,
            idata = ctx.createImageData(w, h),
            buffer32 = new Uint32Array(idata.data.buffer),
            len = buffer32.length,
            i = 0;

        for (; i < len;)
            buffer32[i++] = ((255 * Math.random()) | 0) << 24;

        ctx.putImageData(idata, 0, 0);
    }

    const startSong = (url) => {
        // let audio = new Audio("Music/1.mp3")
        // audio.play()

    }

    var TRACKLIST = [
        {
            id: 1,
            name: "Cet la vie Khaled",
            source: 'Music/1.mp3'
        },
        {
            id: 2,
            name: "song 2",
            // source: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/wwy.mp3"
        }
    ]
    return (
        <>
            <div className="music-container-s-1" >
                <div className="music-left-s-1">
                    <div className="header-container">
                        <h1>Music for your mood</h1>
                        <p>Listen to a song that matches your mood by reading your facial emotions</p>
                    </div>
                </div>
                <div className="music-right-s-1">
                    <div className="music-icon-container-s-1">
                        <i className="fas fa-headphones-alt"></i>
                    </div>
                </div>
                <div className="svg-container">
                </div>
            </div>

            <div className="music-container-s-2" >
                <div className="music-left-s-2">
                    <div className="project-description">
                        <section>
                            <h1>What is music for mood?</h1>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia tenetur, explicabo atque veniam perferendis amet rem hic nostrum porro quae temporibus aut alias, accusantium facilis, sequi pariatur nesciunt omnis non?</p>
                            <h1>How it works?</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad possimus iusto sunt aperiam! Dicta autem provident soluta molestias corporis modi id accusantium fugiat nobis, quia fuga ullam maxime doloribus eveniet.</p>
                        </section>
                    </div>
                </div>
                <div className="music-right-s-2">
                    <div className="flip-card">
                        <div className="flip-card-inner" ref={flipCardInnerRef}>
                            <div className="flip-card-front">
                                <canvas className="noiseCanvas" ref={videoNoise}></canvas>
                                <video onPlaying={startDetections} className="camera" ref={video} autoPlay muted></video>
                            </div>
                            <div className="flip-card-back">
                                <div className="result-detections">
                                    <div className="tbl-header">
                                        <table cellpadding="0" cellspacing="0" border="0">
                                            <thead>
                                                <tr>
                                                    <th>Result</th>
                                                </tr>
                                            </thead>
                                        </table>
                                    </div>
                                    <div className="tbl-content">
                                        <table cellpadding="0" cellspacing="0" border="0">
                                            <tbody>
                                                <tr>
                                                    <td ref={ageRef}></td>
                                                </tr>
                                                <tr>
                                                    <td ref={genderRef}></td>
                                                </tr>
                                                <tr>
                                                    <td ref={neutralRef}></td>
                                                </tr>
                                                <tr>
                                                    <td ref={happyRef}></td>
                                                </tr>
                                                <tr>
                                                    <td ref={sadRef}></td>
                                                </tr>
                                                <tr>
                                                    <td ref={surprisedRef}></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="buttons-container">
                        <div className="button-start-detection">
                            <button ref={startDetectionsButtonRef} className="button button-circle-right" onClick={startVideo} >Start detections</button>
                        </div>
                        <div className="button-song">
                            <button ref={playPausedSongButton} className="button button-circle-song" onClick={startSong}>{started ? "Pause the song" : "Start the Song"}</button>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}

export default Music
