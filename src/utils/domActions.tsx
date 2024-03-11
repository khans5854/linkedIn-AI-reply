import { createRoot } from "react-dom/client"

import { InputButton } from "~components"

import {
  byClass,
  byId,
  INPUT_ICON_ID,
  LINKEDIN_INPUT_CONTAINER_SELECTOR,
  LINKEDIN_INPUT_SELECTOR
} from "./constant"

/**
 * Creates a container element for the injected component.
 * @returns The created container element.
 */
const getContainer = () => {
  const container = document.createElement("div")
  container.id = INPUT_ICON_ID
  container.style.position = "absolute"
  container.style.right = "0"
  container.style.bottom = "0"
  return container
}

/**
 * Injects the component into the chat input container.
 */
export const injectComponent = () => {
  const chatInput = document.querySelector(
    byClass(LINKEDIN_INPUT_CONTAINER_SELECTOR)
  ) as HTMLElement
  if (!chatInput) return
  if (chatInput.querySelector(byId(INPUT_ICON_ID))) return
  chatInput.style.position = "relative"
  const reactContainer = getContainer()
  const containerRoot = createRoot(reactContainer)
  containerRoot.render(<InputButton />)
  chatInput.insertBefore(reactContainer, chatInput.lastChild)
}

/**
 * Removes the injected component from the chat input container.
 */
export const removeComponent = () => {
  const chatInput = document.querySelector(
    byClass(LINKEDIN_INPUT_CONTAINER_SELECTOR)
  )
  if (!chatInput) return
  const inputIcon = chatInput.querySelector(byId(INPUT_ICON_ID))
  if (inputIcon) {
    chatInput.removeChild(inputIcon)
  }
}

/**
 * Handles the focus in event on the chat input container.
 * @param event - The focus event.
 */
export const focusInHandler = (event: FocusEvent) => {
  const target = event.target as HTMLElement
  if (target.classList.contains(LINKEDIN_INPUT_CONTAINER_SELECTOR)) {
    injectComponent()
  }
}

/**
 * Handles the focus out event on the chat input container.
 * @param event - The focus event.
 */
export const focusOutHandler = (event: FocusEvent) => {
  const target = event.target as HTMLElement
  if (target.classList.contains(LINKEDIN_INPUT_CONTAINER_SELECTOR)) {
    removeComponent()
  }
}

/**
 * Inserts text into the chat input.
 * @param text - The text to insert.
 */
export const insertText = (text: string) => {
  const chatInputContainer = document.querySelector(
    byClass(LINKEDIN_INPUT_CONTAINER_SELECTOR)
  )
  if (!chatInputContainer) return
  const chatInput = chatInputContainer.querySelector(LINKEDIN_INPUT_SELECTOR)
  chatInput.innerText = `${chatInput.textContent} ${text}`
  chatInputContainer.dispatchEvent(new Event("input", { bubbles: true }))
}
