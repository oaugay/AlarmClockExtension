document.addEventListener("DOMContentLoaded", () => {
    const alarmSound = document.getElementById("alarmSound");
  
    alarmSound.play().catch((error) => {
      console.error("Failed to play alarm sound:", error);
    });
  
    document.getElementById("stop").addEventListener("click", () => {
      alarmSound.pause();
      alarmSound.currentTime = 0;
      window.close();
    });
  });
  