import { useState } from 'react';

export default function useRecorder() {
    const [recorder, setRecorder] = useState(null);
    const [audio, setAudio] = useState(null);

    const startRecording = async () => {
        let rec = null;

        // Get audio stream
        // TODO: Show popup asking for mic permission
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

        // Store audio as it comes in
        let audioChunks = [];
        rec.ondataavailable = (e) => audioChunks.push(e.data);

        rec.onstart = () => console.info('Started recording');

        rec.onstop = () => {
            console.info('Stopped recording');

            // Create blob from chunks in order to generate URL
            const blob = new Blob(audioChunks, { type: 'audio/mp4' });
            const url = URL.createObjectURL(blob);
            const audioElm = new Audio(url);

            const newAudio = {
                url,
                blob,
                audioElm,
                play: () => audioElm.play(),
            };
            audioChunks = [];
            setAudio(() => newAudio);
        };
    };

    const stopRecording = () => recorder.stop();

    return {
        startRecording,
        stopRecording,
        audio,
        isRecording: !!recorder,
    };
}
