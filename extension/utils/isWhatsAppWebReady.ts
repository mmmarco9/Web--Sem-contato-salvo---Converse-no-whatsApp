export function isWhatsAppWebReady() {
    return (
      document.getElementById("startup") == null &&
      document.getElementsByClassName("app-wrapper-web").length > 0 &&
      document.getElementsByClassName("two")[0] != null
    );
  }
  