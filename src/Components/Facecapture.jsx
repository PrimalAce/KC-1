import React, { useRef, useState, useEffect, useCallback } from "react";

const FaceCapture = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const streamRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);
  const [isCameraActive, setIsCameraActive] = useState(false);

  const stopCamera = useCallback(() => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }
    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }
    setIsCameraActive(false);
  }, []);

  const startCamera = useCallback(async () => {
    stopCamera();
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setIsCameraActive(true);
      }
    } catch (err) {
      console.error("Error accessing camera: ", err);
      setIsCameraActive(false);
    }
  }, [stopCamera]);

  useEffect(() => {
    startCamera();
    return () => stopCamera();
  }, [startCamera, stopCamera]);

  const capturePhoto = () => {
    const canvas = canvasRef.current;
    const video = videoRef.current;
    if (canvas && video) {
      const context = canvas.getContext("2d");
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      const imageData = canvas.toDataURL("image/png");
      setCapturedImage(imageData);
      stopCamera(); // Stop camera after capture
    }
  };

  const retakePhoto = () => {
    setCapturedImage(null);
    startCamera(); // Restart camera for retake
  };

  const submitPhoto = () => {
    // Handle photo submission - you can add your submission logic here
    console.log('Photo submitted:', capturedImage);
    alert('Face capture submitted successfully!');
    // You might want to navigate to the next step or emit an event
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6 py-12">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-2xl p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Face Capture</h1>
          <p className="text-slate-600">Align your face inside the passport-style frame and capture a clear image.</p>
        </div>

        <div className="relative mx-auto max-w-3xl overflow-hidden rounded-[36px] border-4 border-dashed border-slate-300/70 bg-slate-50 shadow-inner" style={{ aspectRatio: '4 / 3', maxWidth: '520px' }}>
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-4 left-4 w-12 h-12 border-2 border-slate-400 rounded-br-full"></div>
            <div className="absolute top-4 right-4 w-12 h-12 border-2 border-slate-400 rounded-bl-full"></div>
            <div className="absolute bottom-4 left-4 w-12 h-12 border-2 border-slate-400 rounded-tr-full"></div>
            <div className="absolute bottom-4 right-4 w-12 h-12 border-2 border-slate-400 rounded-tl-full"></div>
          </div>

          {!capturedImage ? (
            <video
              ref={videoRef}
              autoPlay
              muted
              playsInline
              className="h-full w-full object-cover"
              style={{ display: isCameraActive ? 'block' : 'none' }}
            />
          ) : (
            <img
              src={capturedImage}
              alt="Captured face"
              className="h-full w-full object-cover"
            />
          )}

          {!capturedImage && !isCameraActive && (
            <div className="absolute inset-0 flex items-center justify-center bg-slate-100">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-slate-600 mx-auto mb-4"></div>
                <p className="text-slate-600 font-medium">Starting camera...</p>
              </div>
            </div>
          )}
        </div>

        <div className="mt-6 text-center text-sm text-slate-500">
          Make sure your face is centered, well-lit, and visible from the shoulders up.
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
          {!capturedImage ? (
            <button
              onClick={capturePhoto}
              className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:from-blue-600 hover:to-indigo-700 transition"
            >
              Capture
            </button>
          ) : (
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button
                onClick={retakePhoto}
                className="flex-1 sm:flex-none bg-slate-500 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:bg-slate-600 transition"
              >
                Retake
              </button>
              <button
                onClick={submitPhoto}
                className="flex-1 sm:flex-none bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:from-green-600 hover:to-emerald-700 transition"
              >
                Submit
              </button>
            </div>
          )}
        </div>

        <canvas ref={canvasRef} className="hidden" />
      </div>
    </div>
  );
};

export default FaceCapture;
