import React, { useEffect, useRef } from 'react'
import './Music.css'

// import '@tensorflow/tfjs-node';
import * as faceapi from 'face-api.js';


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

    // useEffect(() => {
    //     Promise.all([
    //         faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
    //         faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
    //         faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
    //         faceapi.nets.faceExpressionNet.loadFromUri('/models'),
    //         faceapi.nets.ageGenderNet.loadFromUri('/models'),
    //         // faceapi.nets.ssdMobilenetv1.loadFromUri('/models'),
    //         // faceapi.nets.tinyYolov2.loadFromUri('/models'),
    //     ]).then(startVideo)
    // }, [])

    // startVideo()
    const playV = () => {
        const canvas = faceapi.createCanvasFromMedia(video.current)
        videoContainer.current.append(canvas)
        const displaySize = { width: video.current.width, height: video.current.height }
        faceapi.matchDimensions(canvas, displaySize)
        setInterval(async () => {
            const detections = await faceapi.detectAllFaces(video.current, new faceapi.TinyFaceDetectorOptions()).withFaceExpressions().withAgeAndGender()
            // const detections = await faceapi.detectSingleFace(video.current).withFaceLandmarks().withFaceExpressions().withAgeAndGender().withFaceDescriptor()
            const resizedDetections = faceapi.resizeResults(detections, displaySize)
            canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)
            // faceapi.draw.drawDetections(canvas, resizedDetections)
            // faceapi.draw.drawFaceLandmarks(canvas, resizedDetections)
            // faceapi.draw.drawFaceExpressions(canvas, resizedDetections)
            resizedDetections.forEach(detection => {
                console.log(detection)
                // const box = detection.detection.box
                // const drawBox = new faceapi.draw.DrawBox(box, { label: Math.round(detection.age) + " years old " + detection.gender })
                // drawBox.draw(canvas)
            })
        }, 3000)
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
                        <i class="fas fa-headphones-alt"></i>
                    </div>
                </div>
                <div className="svg-container">
                </div>
            </div>

            <div className="music-container-s-2" >
                <div className="music-container-both-sections">
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

                        <div className="container" ref={videoContainer}>
                            <p>Give it a shot!</p>
                            {/* <video width="720" height="560" onPlaying={playV} ref={video} autoPlay muted></video> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Music
