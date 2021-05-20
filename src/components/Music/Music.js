import * as faceapi from 'face-api.js';
import React, { useEffect, useRef, useState } from 'react';
import { audio, startDetections } from '../Music/faceDetection';
import { startVideo, stream } from '../Music/startVideo';
import './Music.css';

export let ageRef, genderRef, neutralRef, happyRef, surprisedRef, sadRef, video, videoNoise, playPausedSongButton, startDetectionsButtonRef, flipCardInnerRef
export let faceAPI

function Music() {

    videoNoise = useRef(null)
    video = useRef(null)
    playPausedSongButton = useRef(null)
    startDetectionsButtonRef = useRef(null)
    flipCardInnerRef = useRef(null)
    happyRef = useRef(null)
    ageRef = useRef(null)
    genderRef = useRef(null)
    neutralRef = useRef(null)
    surprisedRef = useRef(null)
    sadRef = useRef(null)

    const [buttonPaused, setbuttonPaused] = useState(true)
    var ctx

    const playPauseButton = () => {
        console.log(audio)
        if (audio === null || audio === undefined)  // Audio is not initialized
            return
        if (audio.paused) {     // Audio is Off
            audio.play()
            setbuttonPaused(true)
        }
        else {                  // Audio is On
            audio.pause()
            setbuttonPaused(false)
        }
    }

    useEffect(() => {
        video.current.hidden = true
        // window.history.pushState(null, null, window.location.href);

        window.scrollTo(0, 0);
        ctx = videoNoise.current.getContext('2d');
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
            if (audio !== undefined)  // Audio is not initialized
                audio.pause()
            if (stream !== undefined) {
                stream.getTracks().forEach(function (track) {
                    track.stop();
                })
            }
        }
    }, [])

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
                                <video onPlaying={startDetections} className="camera-detections" ref={video} autoPlay muted></video>
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
                            <button ref={playPausedSongButton} onClick={playPauseButton} className="button button-circle-song">{buttonPaused ? "Pause Tune" : "Play Tune"}</button>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}

export default Music
