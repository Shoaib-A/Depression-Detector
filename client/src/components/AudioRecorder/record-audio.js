import { useEffect, useState } from "react";

const useRecorder = () => {
  const [audioURL, setAudioURL] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [recorder, setRecorder] = useState(null);

  useEffect(() => {
    const requestRecorder = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const mediaRecorder = new MediaRecorder(stream);
        setRecorder(mediaRecorder);
      } catch (error) {
        console.error("Error requesting recorder:", error);
      }
    };

    if (recorder === null && isRecording) {
      requestRecorder();
    }

    if (recorder && isRecording) {
      recorder.start();
    }

    if (recorder && !isRecording) {
      recorder.stop();
    }

    const handleData = (event) => {
      setAudioURL(URL.createObjectURL(event.data));
    };

    if (recorder) {
      recorder.addEventListener("dataavailable", handleData);
      return () => recorder.removeEventListener("dataavailable", handleData);
    }
  }, [recorder, isRecording]);

  const startRecording = () => {
    setIsRecording(true);
  };

  const stopRecording = () => {
    setIsRecording(false);
  };

  return [audioURL, isRecording, startRecording, stopRecording];
};

export default useRecorder;
