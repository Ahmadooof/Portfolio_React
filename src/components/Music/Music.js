import React, { useEffect, useRef } from 'react'
import './Music.css'

// import '@tensorflow/tfjs-node';
import * as faceapi from 'face-api.js';
import { FaceMatch } from 'face-api.js';


var constraints = { video: { width: 1280, height: 720 } };

function Music() {
    const video = useRef(null)
    const videoContainer = useRef(null)

    function startVideo() {
        navigator.mediaDevices.getUserMedia(constraints).then(
            (MediaStream) => {
                video.current.srcObject = MediaStream
                video.current.onloadedmetadata = function (e) {
                    video.current.play();
                };
            }
        )
    }

    useEffect(() => {
        Promise.all([
            faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
            faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
            faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
            faceapi.nets.faceExpressionNet.loadFromUri('/models')
        ]).then(startVideo)
    }, [])

    // startVideo()
    const playV = () => {
        console.log(faceapi)
        const canvas = faceapi.createCanvasFromMedia(video.current)
        videoContainer.current.append(canvas)
        const displaySize = { width: video.current.width, height: video.current.height }
        faceapi.matchDimensions(canvas, displaySize)
        setInterval(async () => {
            const detections = await faceapi.detectAllFaces(video.current, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions()
            const resizedDetections = faceapi.resizeResults(detections, displaySize)
            canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)
            faceapi.draw.drawDetections(canvas, resizedDetections)
            // faceapi.draw.drawFaceLandmarks(canvas, resizedDetections)
            faceapi.draw.drawFaceExpressions(canvas, resizedDetections)
        }, 5000)
    }

    return (
        <div className="container" ref={videoContainer}>
            <video width="720" height="560" onPlaying={playV} ref={video} autoPlay muted></video>
        </div>
    )
}

export default Music
