import {EVENTS} from "./utils.js";


// eslint-disable-next-line react-refresh/only-export-components
export function navigate(href) {
  window.history.pushState(null, null, href)

  const navigationEvent = new Event(EVENTS.PUSHSTATE)
  window.dispatchEvent(navigationEvent)
}

export function Link({target, to, ...props}) {
  const handleClick = (event) => {

    const isMainEvent = event.button === 0
    const isModifiedEvent = event.metaKey || event.altKey || event.ctrlKey || event.shiftKey
    const isManageableEvent = target === undefined || target === '_self'

    if (isMainEvent && isModifiedEvent && !isManageableEvent) {
      event.preventDefault()
      navigate(to)
    }

  }
  return (
    <a href={to} onClick={handleClick} target={target} {...props} />
  )
}