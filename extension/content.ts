import { ViewController } from "./App/viewController";
import { getWhatsAppHtmlTargetBySelector } from "./utils/getWhatsAppHtmlTarget";
import { injectJs } from "./utils/injectJs";
import { isWhatsAppWebReady } from "./utils/isWhatsAppWebReady";

let isOpening = false;

function setup() {
  if (!isWhatsAppWebReady()) {
    setTimeout(function () {
      setup();
    }, 1000);
    return;
  }
  injectJs({ src: chrome.runtime.getURL("/extension/wppconnect-wa.js") });
  /*   injectJs({ src: chrome.runtime.getURL("/extension/wapi_agile.js") }); */
  injectJs({ src: chrome.runtime.getURL("/extension/script.js") });
  addOpenMessageListButton();

  handleClickOutsideView();
}

setup();

// View Controller
const messagesView = new ViewController({
  name: "sender-app-messages",
  anchorElementSelector: "header:first-child > div:last-child span ",
  src: window.chrome.runtime.getURL("index.html"),
  width: 400,
  height: 600,
});

// function initOnChatChangeListener() {
//   var target = getWhatsAppHtmlTargetBySelector("activeChatContainer");

//   if (!target) {
//   }

//   var observer = new MutationObserver(function (mutations) {
//     addOpenMessageListButton();
//      sendChatChangedEvent();
//   });

//   var config = { attributes: true, childList: true, characterData: true };

//   observer.observe(target!, config);
// }

function addOpenMessageListButton() {
  // Add button with icon
  var button = document.getElementById("open-iframe");
  if (button) {
    return;
  }
  button = document.createElement("button");
  button.id = "open-iframe";
  button.classList.add("open-message-list-button");
  button.style.fill = "#54656f";
  button.style.padding = "5px";
  button.title = "Abrir chat sem contato salvo";
  button.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M10 8h8V6h-8Zm0 3h8V9h-8Zm0 3h5v-2h-5ZM7 8q.425 0 .713-.287Q8 7.425 8 7t-.287-.713Q7.425 6 7 6t-.713.287Q6 6.575 6 7t.287.713Q6.575 8 7 8Zm0 3q.425 0 .713-.288Q8 10.425 8 10t-.287-.713Q7.425 9 7 9t-.713.287Q6 9.575 6 10t.287.712Q6.575 11 7 11Zm0 3q.425 0 .713-.288Q8 13.425 8 13t-.287-.713Q7.425 12 7 12t-.713.287Q6 12.575 6 13t.287.712Q6.575 14 7 14Zm-5 8V4q0-.825.588-1.413Q3.175 2 4 2h16q.825 0 1.413.587Q22 3.175 22 4v12q0 .825-.587 1.413Q20.825 18 20 18H6Zm2-4.825L5.175 16H20V4H4ZM4 4v13.175Z"/></svg>`;
  document
    .querySelector("header:first-child > div:last-child span ")!
    .appendChild(button);
  // Add click event_2lSWV _3cjY2 copyable-area
  button.addEventListener("click", () => {
    messagesView.toggle();

    setTimeout(() => {
      isOpening = true;
    }, 500);
  });
}

function handleClickOutsideView() {
  const all = document.querySelector("*");

  all?.addEventListener("click", () => {
    if (messagesView.status === "opened" && isOpening) {
      messagesView.close();
      isOpening = false;
    }
  });
}
