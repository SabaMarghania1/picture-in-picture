const videoElement = document.getElementById("video");
const button = document.getElementById("button");

// Prompting use to select media, and pass then play

async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    console.log("Error here:", error);
  }
}

button.addEventListener("click", async () => {
  button.disabled = true;

  await videoElement.requestPictureInPicture();

  button.disabled = false;
});

choose.addEventListener("click", selectMediaStream);
