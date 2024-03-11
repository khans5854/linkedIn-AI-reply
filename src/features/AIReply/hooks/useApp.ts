import { useEffect, useState } from "react";



import {
  eventEmitter,
  focusInHandler,
  focusOutHandler,
  ICON_BUTTON_EVENT,
  injectComponent,
  insertText,
  removeComponent
} from "~utils"

import type { IResponse } from "../types"

/**
 * Generates a response for a given prompt.
 * @param prompt - The prompt for which the response needs to be generated.
 * @returns A promise that resolves to the generated response.
 */
const generateResponse = async (prompt: string): Promise<string> => {
  // fake response
  return new Promise((resolve) => {
    setTimeout(
      () =>
        resolve(
          `Fake!! Thanks you for the opportunity! If you any more question of if there's any else I can help you with, feel free to ask.`
        ),
      500
    )
  })
}

/**
 * Custom React hook that manages the state and logic for the AIReply feature.
 * @returns An object containing the state and functions for the AIReply feature.
 */
export const useApp = () => {
  const [dialogOpen, setDialogOpen] = useState<boolean>(false)

  const [responses, setResponses] = useState<IResponse[]>([])

  /**
   * Closes the dialog.
   */
  const handleClose = () => {
    setDialogOpen(false)
  }

  /**
   * Event handler for the icon button.
   */
  const iconButtonHandler = () => {
    setDialogOpen(true)
  }

  useEffect(() => {
    document.addEventListener("focusin", focusInHandler)

    document.addEventListener("focusout", focusOutHandler)

    eventEmitter.addListener(ICON_BUTTON_EVENT, iconButtonHandler)

    return () => {
      document.removeEventListener("focusin", injectComponent)

      document.removeEventListener("focusout", removeComponent)

      eventEmitter.removeAllListeners(ICON_BUTTON_EVENT)
    }
  }, [])

  /**
   * Handles the generation of a response for a given prompt.
   * @param prompt - The prompt for which the response needs to be generated.
   */
  const handleGenerateResponse = async (prompt: string) => {
    try {
      const response = await generateResponse(prompt)
      setResponses((responses) => [...responses, { prompt, response }])
    } catch (error) {}
  }

  /**
   * Handles the submission of a prompt.
   * @param prompt - The prompt to be submitted.
   */
  const handleSubmit = async (prompt: string) => {
    if (!prompt) return
    await handleGenerateResponse(prompt)
  }

  /**
   * Handles the regeneration of the last response.
   */
  const handleRegenerate = () => {
    if (!responses?.length) return
    const text = responses?.at(-1)?.prompt
    setResponses((responses) => responses.slice(0, -1))
    handleGenerateResponse(text)
  }

  /**
   * Handles the insertion of the last response into the linkedin input field.
   */
  const handleInsert = () => {
    if (!responses?.length) return
    const text = responses?.at(-1)?.response
    insertText(text)
    handleClose()
  }

  return {
    dialogOpen,
    handleClose,
    responses,
    handleSubmit,
    handleInsert,
    handleRegenerate
  }
}