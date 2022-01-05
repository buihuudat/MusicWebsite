import YoutubeMp3Downloader from 'youtube-mp3-downloader';

export const Downloader = () => {
  const self = this;

  self.YD = new YoutubeMp3Downloader({
    "ffmpegPath": "/path/to/ffmpeg",        // FFmpeg binary location
    "outputPath": "/path/to/mp3/folder",    // Output file location (default: the home directory)
    "youtubeVideoQuality": "highestaudio",  // Desired video quality (default: highestaudio)
    "queueParallelism": 2,                  // Download parallelism (default: 1)
    "progressTimeout": 2000,                 // Interval in ms for the progress reports (default: 1000)
    "outputOptions" : ["-af", "silenceremove=1:0:-50dB"] // Additional output options passend to ffmpeg
  });

  self.callbacks = {};

  self.YD.on("finished", (error, data) => {
    if (self.callbacks[data.videoId]) {
      self.callbacks[data.videoId](error, data);
    } else {
      console.log("Error: No callback for videoId!");
    }
  });

  self.YD.on("finished", (error, data) => {
    console.error(error + " on videoId " + data.videoId);

    if (self.callbacks[data.videoId]) {
      self.callbacks[data, videoId](error, data);
    } else {
      console.log("Error: No callback for videoId!");
    }
  });
};

Downloader.prototype.getMP3 = (track, callback) => {
  const self = this;
  self.callbacks[track.videoId, track.name];
};

