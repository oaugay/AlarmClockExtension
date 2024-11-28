document.getElementById("start").addEventListener("click", () => {
    const timeInput = document.getElementById("time").value;
  
    if (!timeInput || isNaN(timeInput) || timeInput <= 0) {
      alert("Please enter a valid time in seconds.");
      return;
    }
  
    const timeInSeconds = parseInt(timeInput);
  
    chrome.runtime.sendMessage({ action: "set_timer", time: timeInSeconds }, (response) => {
      if (chrome.runtime.lastError) {
        console.error("Error sending message:", chrome.runtime.lastError.message);
      } else if (response.error) {
        console.error("Error in response:", response.error);
      } else {
        console.log(response.message);
      }
    });
  
    window.close();
  });
  