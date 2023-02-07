import { useState } from 'react';

export default function useRecorder() {
    const [recorder, setRecorder] = useState(null);
    const [audio, setAudio] = useState(null);

    const startRecording = async () => {
        let rec = null;

        // Get audio stream
        try {
            const stream = await navigator.mediaDevices.getUserMedia({
                audio: true,
            });
            rec = new MediaRecorder(stream);
        } catch (err) {
            console.error(err);
            return;
        }

        // Save and start recorder
        setRecorder(() => rec);
        rec.start();
        console.info('Started recording');

        // Store audio as it comes in
        let audioChunks = [];
        rec.ondataavailable = (e) => audioChunks.push(e.data);

        rec.onstop = () => {
            console.info('Stopped recording');

            // Create blob from chunks in order to generate URL
            const blob = new Blob(audioChunks);
            const url = URL.createObjectURL(blob);
            const audioElm = new Audio(url);

            const audio = {
                url,
                blob,
                audioElm,
                play: () => audioElm.play(),
            };

            audioChunks = [];

            console.log(audioElm);

            setAudio(() => audio);
        };
    };

    const stopRecording = () => recorder.stop();

    return {
        startRecording,
        stopRecording,
        audio,
        isRecording: !!recorder
    };
}
