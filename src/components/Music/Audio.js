export const TRACKLIST = [
    {
        id: 1,
        name: "Piano",
        source: "Music/1-N.mp3",
        label: "Neutral",
        link: 'bensound',
    }
    , {
        id: 2,
        name: "Piano",
        source: "Music/2-H.mp3",
        label: "Happy",
        link: 'bensound',
    }
    , {
        id: 3,
        name: "Piano",
        source: "Music/3-S.mp3",
        label: "Sad",
        link: 'bensound',
    }, {
        id: 4,
        name: "Piano",
        source: "Music/4-Su.mp3",
        label: "Surprised",
        link: 'bensound',
    },
    {
        audio: ''
    }
]

export let playPauseAudio = (audio) => {
    if (audio === undefined)  // Audio is not initialized
        return
    if (audio.paused) {     // Audio is off => Turn on
        audio.play()
    }
    else {                  // Audio is on => Turn off
        audio.pause()
    }
}

export let pauseAudio = (audio) => {
    if (audio !== undefined)  // Audio is not initialized
        audio.pause()
}
