const key = "total_trackers_blocked";
let val = "0";

const key_block = "sites_to_turn_off_blocking";
let val_block = [];

const key_theme = "theme";
let val_theme = "light";

chrome.storage.local.set({ key: val }, function () {
  console.log("success");
});

chrome.storage.local.set({ key_block: val_block }, function () {
  console.log("success_block");
});

chrome.storage.local.set({ key_theme: val_theme }, function () {
  console.log("success_theme");
});