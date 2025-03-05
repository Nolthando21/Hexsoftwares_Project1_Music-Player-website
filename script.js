// script.js

const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('playPauseBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const volumeControl = document.getElementById('volume');
const progressBar = document.getElementById('progressBar');
const currentTimeDisplay = document.getElementById('currentTime');
const durationDisplay = document.getElementById('duration');
const playlistElement = document.getElementById('playlist');

const songs = [
    {
        title: "Song 1",
        artist: "Artist 1",
        duration: "3:45",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
    },
    {
        title: "Song 2",
        artist: "Artist 2",
        duration: "4:20",
        src: "https://www.soundhelix.com/examples