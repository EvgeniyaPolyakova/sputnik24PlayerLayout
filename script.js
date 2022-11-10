const playButton = document.querySelector(".sputnik24-playing-toggle");

playButton.addEventListener("click", () => {
  playButton.classList.toggle("sputnik24-play");
  playButton.classList.toggle("sputnik24-pause");
});

const fullscreenButton = document.querySelector(".sputnik24-fullscreen-toggle");

fullscreenButton.addEventListener("click", () => {
  fullscreenButton.classList.toggle("sputnik24-fullscreen");
  fullscreenButton.classList.toggle("sputnik24-exit-fullscreen");
});

const volumeRange = document.querySelector(".sputnik24-volume-range");
const volumeProgress = document.querySelector(".sputnik24-volume-progress");
const volumeIcon = document.querySelector(".volume-icon");

volumeRange.addEventListener("input", () => {
  volumeProgress.style.width = volumeRange.value + "%";

  if (+volumeRange.value === 0) {
    volumeIcon.classList.add("mute-volume");
    volumeIcon.classList.remove("low-volume");
  } else if (+volumeRange.value <= 50) {
    volumeIcon.classList.remove("mute-volume");
    volumeIcon.classList.add("low-volume");
  } else {
    volumeIcon.classList.remove("low-volume");
  }
});

const volumePanel = document.querySelector(".sputnik24-volume-panel");
const volumeArea = document.querySelector(".sputnik24-volume-area");

volumeArea.addEventListener("mouseenter", function () {
  // volumeControl.style.margin = '0px 2px 0px 0px';
  volumePanel.style.width = "52px";
});

volumeArea.addEventListener("mouseleave", function () {
  // volumeControl.style.margin = '0px 0px 0px 0px';
  volumePanel.style.width = "0px";
});

const settingBtn = document.querySelector(".sputnik24-settings-button");
const settingsMenu = document.querySelector(".sputnik24-settings-menu");

settingBtn.addEventListener("click", () => {
  settingBtn.classList.toggle("show-settings-menu");
  settingsMenu.classList.toggle("active");
});

const menuItem = document.querySelector(".sputnik24-menu-item");
const qualityMenu = document.querySelector(".sputnik24-quality-menu");

menuItem.addEventListener("click", () => {
  settingsMenu.classList.remove("active");
  qualityMenu.classList.add("show-quality-menu");
});

// QUALITY

const qualityItem = document.querySelectorAll(
  ".sputnik24-quality-menu__body-item"
);

qualityItem.forEach((item) =>
  item.addEventListener("click", () => {
    item.classList.add("selected-quality");
    qualityMenu.classList.remove("show-quality-menu");
    settingBtn.classList.remove("show-settings-menu");
  })
);

const qualityMenuHeader = document.querySelector(
  ".sputnik24-quality-menu__header"
);
qualityMenuHeader.addEventListener("click", () => {
  qualityMenu.classList.remove("show-quality-menu");
  settingBtn.classList.add("show-settings-menu");
  settingsMenu.classList.add("active");
});
