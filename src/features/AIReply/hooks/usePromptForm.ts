import { useState } from "react";





/**
 * Represents the form hook for handling prompts.
 */
interface IPromptForm {
  /**
   * Callback function to be executed when the form is submitted.
   * @param prompt - The prompt value entered by the user.
   */
  onSubmit: (prompt: string) => Promise<void>
}

/**
 * Custom hook for managing the prompt form state and actions.
 * @param onSubmit - Callback function to be executed when the form is submitted.
 * @returns An object containing the prompt value, input change handler, and form submit handler.
 */
export const usePromptForm = ({ onSubmit }: IPromptForm) => {
  const [prompt, setPrompt] = useState<string>("")

  /**
   * Handles the input change event and updates the prompt value.
   * @param e - The input change event.
   */
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPrompt(e.target.value)

  /**
   * Handles the form submit event and calls the onSubmit callback.
   * @param e - The form submit event.
   */
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.stopPropagation()
    e.preventDefault()

    if (!prompt) return

    try {
      await onSubmit(prompt)

      setPrompt("")
    } catch (error) {}
  }

  return {
    prompt,
    handleInputChange,
    handleSubmit
  }
}