import React, { useEffect, useRef } from 'react'
import './Music.css'

// import '@tensorflow/tfjs-node';
import * as faceapi from 'face-api.js';


var constraints = { video: { width: 1280, height: 720 } };

function Music() {
    const video = useRef(null)
    const videoNoise = useRef(null)

    function startVideo() {
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
            console.log("gr")
            // faceapi.nets.ssdMobilenetv1.loadFromUri('/models'),
            // faceapi.nets.tinyYolov2.loadFromUri('/models'),
        ])
    }, [])

    const startDetections = () => {
        setTimeout(async () => {
            const detections = await faceapi.detectAllFaces(video.current, new faceapi.TinyFaceDetectorOptions()).withFaceExpressions().withAgeAndGender()
            detections.forEach(detection => {
                console.log(detection)
            })
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
                    <div className="video-container">
                        <canvas className="videoCanvas" ref={videoNoise}></canvas>
                        <video onPlaying={startDetections} className="music-camera" ref={video} autoPlay muted></video>
                    </div>
                    <div className="start-video">
                        <button className="button button-circle-right" onClick={startVideo}>Start Detections</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Music
