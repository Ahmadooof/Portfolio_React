import * as faceapi from 'face-api.js';
import React, { useEffect, useRef, useState } from 'react';
import { startDetections } from '../Music/faceDetection';
import { startCamera, stream } from '../Music/startCamera';
import { pauseAudio, playPauseAudio, TRACKLIST } from './Audio';
import './Music.css';
import { ResultDetection } from './ResultDetection';


export let animationAndButtons
export let faceAPI


function Music() {

    const [detectionResult, setdetectionResult] = useState({})

    // when this is true, buttons will be hidden
    const [hideButtons, sethideButtons] = useState(false)

    // flip card when detection is finish to show result
    const [flipCard, setflipCard] = useState(false)

    // hide noiseCanvas when clicked start detection
    const [hideCanvas, setcanvasIsOff] = useState(false)


    animationAndButtons = {
        video: useRef(null),
        videoNoise: useRef(null),
    }

    const [buttonPaused, setbuttonPaused] = useState(true)

    const changeButtonText = () => {
        if (TRACKLIST.audio === null || TRACKLIST.audio === undefined)
            return
        setbuttonPaused(!buttonPaused)
    }


    let v
    useEffect(() => {
        window.onpopstate = function () {
            window.history.go(0);
        }

        window.scrollTo(0, 0)
        v = animationAndButtons.videoNoise.current.getContext('2d')
        playNoiseVideo()
        Promise.all([
            faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
            // faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
            faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
            faceapi.nets.faceExpressionNet.loadFromUri('/models'),
            faceapi.nets.ageGenderNet.loadFromUri('/models'),
            faceAPI = faceapi
            // faceapi.nets.ssdMobilenetv1.loadFromUri('/models'),
            // faceapi.nets.tinyYolov2.loadFromUri('/models'),
        ])

        // this run when the component is destroyed.
        return () => {
            pauseNoiseVideo()
            pauseAudio(TRACKLIST.audio)
            if (stream !== undefined) {
                stream.getTracks().forEach(function (track) {
                    track.stop();
                })
            }
        }
    }, [])

    var times
    const playNoiseVideo = () => {
        times = window.requestAnimationFrame(playNoiseVideo)
        var w = v.canvas.width,
            h = v.canvas.height,
            idata = v.createImageData(w, h),
            buffer32 = new Uint32Array(idata.data.buffer),
            len = buffer32.length,
            i = 0;

        for (; i < len;)
            buffer32[i++] = ((255 * Math.random()) | 0) << 24;

        v.putImageData(idata, 0, 0);
    }

    let pauseNoiseVideo = () => {
        window.cancelAnimationFrame(times)
    }

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
                        <div className={`${flipCard ? 'flip-card-after-detection' : ''} flip-card-inner`} >
                            <div className="flip-card-front">
                                <canvas className={`${hideCanvas ? 'hidden' : 'noiseCanvas'}`} ref={animationAndButtons.videoNoise}></canvas>
                                <video onPlaying={
                                    () => {
                                        startDetections().then(value => {
                                            setdetectionResult(value)
                                            setflipCard(true)
                                            sethideButtons(false)
                                        })
                                    }
                                }
                                    // className={`${hideButtons ? 'hidden' : ''} camera-detections`} ref={animationAndButtons.video} autoPlay muted></video>
                                    className='camera-detections' ref={animationAndButtons.video} autoPlay muted></video>
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
                                                    <ResultDetection
                                                        text={detectionResult.faceDetected ? 'Gender: ' + detectionResult.gender : ''}
                                                    />
                                                </tr>
                                                <tr>
                                                    <ResultDetection
                                                        text={detectionResult.faceDetected ? 'Age: ' + detectionResult.age : 'No face has been detected'}
                                                    />
                                                </tr>
                                                <tr>
                                                    <ResultDetection
                                                        text={detectionResult.faceDetected ? 'Neutral: ' + detectionResult.neutral + '%' : ''}
                                                    />
                                                </tr>
                                                <tr>
                                                    <ResultDetection
                                                        text={detectionResult.faceDetected ? 'Happy: ' + detectionResult.happy + '%' : ''}
                                                    />
                                                </tr>
                                                <tr>
                                                    <ResultDetection
                                                        text={detectionResult.faceDetected ? 'Sad: ' + detectionResult.sad + '%' : ''}
                                                    />
                                                </tr>
                                                <tr>
                                                    <ResultDetection
                                                        text={detectionResult.faceDetected ? 'Surprised: ' + detectionResult.surprised + '%' : ''}
                                                    />
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="buttons-container">
                        <div className="button-start-detection ">
                            <button className={`${hideButtons ? 'hidden' : ''} button button-circle-right`} onClick={() => {
                                sethideButtons(true)
                                setcanvasIsOff(true)
                                setflipCard(false)
                                startCamera()
                                pauseNoiseVideo()
                            }} >Start detections</button>
                        </div>
                        <div className={`button-song ${hideButtons ? 'hidden' : ''}`}>
                            <button onClick={() => {

                                playPauseAudio(TRACKLIST.audio)
                                changeButtonText()
                            }} className="button button-circle-song">{buttonPaused ? "Pause Tune" : "Play Tune"}</button>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}

export default Music
