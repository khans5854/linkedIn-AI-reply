/**
 * This file contains constants used in the Chrome extension.
 */

import EventEmitter from "events"

/**
 * The URL for the input icon.
 */
export const INPUT_ICON_URL = chrome.runtime.getURL("assets/input-icon.svg")

/**
 * The ID for the input icon.
 */
export const INPUT_ICON_ID = "AI-Reply-Icon"

/**
 * The selector for the LinkedIn chat input field container.
 */
export const LINKEDIN_INPUT_CONTAINER_SELECTOR = "msg-form__contenteditable"

/**
 * The selector for the LinkedIn chat input field.
 */
export const LINKEDIN_INPUT_SELECTOR = "p"

/**
 * The event name for the icon click event.
 */
export const ICON_BUTTON_EVENT = "icon-click"

/**
 * Converts a selector to a class selector.
 * @param selector The selector to convert.
 * @returns The class selector.
 */
export const byClass = (selector: string) => `.${selector}`

/**
 * Converts a selector to a id selector.
 * @param selector The selector to convert.
 * @returns The id selector.
 */
export const byId = (selector: string) => `#${selector}`

/**
 * An event emitter used for communication between components.
 */
export const eventEmitter = new EventEmitter()
