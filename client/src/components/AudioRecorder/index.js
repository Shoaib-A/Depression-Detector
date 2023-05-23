import React, { useEffect, useState } from 'react';
import useRecorder from '../AudioRecorder/record-audio';
import sentiment from 'sentiment';

const AudioRecorder = () => {
  const [audioURL, isRecording, startRecording, stopRecording] = useRecorder();
  const [sentimentScore, setSentimentScore] = useState(0);

  useEffect(() => {
    if (audioURL) {
      const analysis = sentiment(audioURL);
      if (analysis && analysis.score) {
        setSentimentScore(analysis.score);
      }
    }
  }, [audioURL]);

  return (
    <div className="row">
      <h3 className="center-align">Personal Audio Recordings</h3>
      <h6 className="center-align">Record a personal affirmation to replay</h6>

      <audio src={audioURL} controls />
      <button onClick={startRecording} disabled={isRecording}>
        Start Recording
      </button>
      <button onClick={stopRecording} disabled={!isRecording}>
        Stop Recording
      </button>

      <p>Sentiment Score: {sentimentScore}</p>
    </div>
  );
};

export default AudioRecorder;
