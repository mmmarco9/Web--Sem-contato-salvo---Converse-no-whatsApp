export function injectJs({
    src = null,
    content = null,
    isModule = false,
  }: {
    src?: string | null;
    content?: string | null;
    isModule?: boolean;
  }) {
    const a = document.createElement("script");
    a.type = isModule ? "module" : "text/javascript";
    if (src) {
      a.src = src;
    } else if (content) {
      a.textContent = content;
    }
    a.charset = "utf-8";
    if (isModule) {
      a.crossOrigin = "anonymous";
    }
    const target = document.head || document.body || document.documentElement;
    target.appendChild(a);
  }