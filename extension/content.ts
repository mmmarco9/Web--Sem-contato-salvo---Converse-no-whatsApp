import { ViewController } from "./App/viewController";
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

  injectJs({ src: chrome.runtime.getURL("/extension/script.js") });
  addOpenMessageListButton();
  handleClickOutsideView();
}

setup();

const messagesView = new ViewController({
  name: "sender-app-messages",
  anchorElementSelector: "header:first-child > div:last-child span ",
  src: window.chrome.runtime.getURL("index.html"),
  width: 400,
  height: 600,
});

function addOpenMessageListButton() {
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
  button.innerHTML = `<svg width="24px" height="24px" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(0)matrix(1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5 8L5 2" stroke="#5EBC67" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M3.2697 9.80446C3.09354 10.5072 3 11.2427 3 12C3 16.9706 7.02944 21 12 21H16.5C17.8978 21 18.5967 21 19.1481 20.7716C19.8831 20.4672 20.4672 19.8831 20.7716 19.1481C21 18.5967 21 17.8978 21 16.5V12C21 7.02944 16.9706 3 12 3C11.2427 3 10.5072 3.09354 9.80446 3.2697C10.2353 3.71885 10.5 4.32851 10.5 5C10.5 6.38071 9.38071 7.5 8 7.5H7.5V8C7.5 9.38071 6.38071 10.5 5 10.5C4.32851 10.5 3.71885 10.2353 3.2697 9.80446ZM9 10C8.44772 10 8 10.4477 8 11C8 11.5523 8.44772 12 9 12H15C15.5523 12 16 11.5523 16 11C16 10.4477 15.5523 10 15 10H9ZM12 14C11.4477 14 11 14.4477 11 15C11 15.5523 11.4477 16 12 16H15C15.5523 16 16 15.5523 16 15C16 14.4477 15.5523 14 15 14H12Z" fill="#5EBC67"></path> <path d="M2 5L8 5" stroke="#5EBC67" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>`;
  document
    .querySelector("header:first-child > div:last-child span ")!
    .appendChild(button);
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

function handleKeyDown(event: KeyboardEvent) {
  if (event.ctrlKey && event.altKey && event.key === "a") {
    messagesView.toggle();
    isOpening = true;
  }
}

document.addEventListener("keydown", handleKeyDown);
