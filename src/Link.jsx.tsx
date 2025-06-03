import {EVENTS} from "./utils.js";


export function navigate(href) {
  window.history.pushState(null, null, href)

  const navigationEvent = new Event(EVENTS.PUSHSTATE)
  window.dispatchEvent(navigationEvent)
}

