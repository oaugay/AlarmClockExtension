chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "set_timer") {
    const timeInSeconds = message.time;

    if (!timeInSeconds || timeInSeconds <= 0) {
      sendResponse({ error: "Invalid time specified." });
      return;
    }

    const delayInMinutes = timeInSeconds / 60;

    chrome.alarms.create("custom_alarm", { delayInMinutes: delayInMinutes });
    console.log(`Alarm set for ${timeInSeconds} seconds`);

    sendResponse({ message: `Timer set for ${timeInSeconds} seconds.` });
  }
});

chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === "custom_alarm") {
    chrome.windows.create({
      url: "alarm.html",
      type: "popup",
      width: 400,
      height: 300
    });
  }
});
