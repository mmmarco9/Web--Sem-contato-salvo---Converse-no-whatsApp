// chrome.runtime.onInstalled.addListener(function (object) {
//   let externalUrl = "https://www.leadtalk.com.br/";
//   // let internalUrl = chrome.runtime.getURL("views/onboarding.html");

//   if (object.reason === chrome.runtime.OnInstalledReason.INSTALL) {
//     chrome.tabs.create({ url: externalUrl }, function (tab) {
//       console.log("New tab launched with https://www.leadtalk.com.br/");
//     });
//   }
// });