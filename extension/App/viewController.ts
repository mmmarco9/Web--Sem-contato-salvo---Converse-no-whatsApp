type ViewStatus = "opened" | "closed";

type ViewProps = {
  name: string;
  anchorElementSelector: string;
  src: string;
  width: number;
  height: number;
};

export class ViewController {
  private _anchorElementSelector: string;
  private _status: ViewStatus;
  private _viewSource: string;
  private _name: string;
  private _container: HTMLIFrameElement = document.createElement("iframe");
  private _width: number;
  private _height: number;
  private _anchor: Element | undefined;
  private _backdroop: HTMLDivElement = document.createElement("div");
  private _isOpening = false;

  get status() {
    return this._status;
  }

  constructor(props: ViewProps) {
    this._container.setAttribute("allow", "microphone");
    this._anchorElementSelector = props.anchorElementSelector;
    this._status = "closed";
    this._viewSource = props.src;
    this._name = props.name;
    this._width = props.width;
    this._height = props.height;

    /* this.initBacktrop(); */
    this.initContainer();
  }

  private initContainer() {
    this._container.style.position = "fixed";
    this._container.id = this._name;

    this._container.style.width = this._width + "px";
    this._container.style.height = this._height + "px";

    this._container.style.border = "none";
    this._container.style.background = "transparent";
    this._container.style.zIndex = "999999";
    this._container.style.overflow = "hidden";
    // this._container.style.borderRadius = '10px'
    // this._container.style.boxShadow = '0px 0px 10px 0px rgba(0,0,0,0.75)'
    this._container.style.top = "-2000px";

    this._container.src = this._viewSource;
    document.body.appendChild(this._container);
  }

  toggle() {
    if (this._status === "opened") {
      this.close();
    } else {
      this.open();
    }
  }

  open() {
    this._anchor = document.querySelector(this._anchorElementSelector)!;
    if (!this._anchor) {
      console.log("anchor not found");
      return;
    }
    this._status = "opened";
    this._isOpening = true;

    this.showBackdroop();

    this.showContainer();
  }
  close() {
    if (this._status !== "opened") return;
    this._status = "closed";
    this._isOpening = false;
    this.hideContainer();
    this.hideBackdroop();
  }

  emitEvent(event: string, data: any) {
    this._container.contentWindow?.postMessage({ event, data }, "*");
  }

  private hideContainer() {
    this._container.style.top = "-2000px";
  }

  private showContainer() {
    if (!this._anchor) {
      console.log("anchor not found");
      return;
    }
  
    const anchorRect = this._anchor.getBoundingClientRect();
  
    // verifica se o elemento tem a propriedade offsetHeight
    if (this._container instanceof HTMLElement && typeof this._container.offsetHeight !== "undefined") {
      const containerHeight = this._container.offsetHeight;
  
      this._container.style.top = (anchorRect.top + anchorRect.height) + "px";
      this._container.style.left = anchorRect.left + "px";
      this._container.style.marginTop = "20px";
    }
  }
  
  
  

  private hideBackdroop() {
    this._backdroop.style.display = "none";
  }

  private showBackdroop() {
    this._backdroop.style.display = "block";
  }
}
