type SelectorsIdentifier = "activeChatContainer";

const allSelectorsIdentifier: any = {
  activeChatContainer: [
    "#app > div > div > div.ldL67._3sh5K",
    "#app > div > div > div._2Ts6i._2xAQV",
  ],
};

export function getWhatsAppHtmlTargetBySelector(
  selector: SelectorsIdentifier,
): HTMLElement | null {
  const selectors = allSelectorsIdentifier[selector];
  for (const sel of selectors) {
    const target = document.querySelector(sel);
    if (target) {
      return target;
    }
  }
  return null;
}