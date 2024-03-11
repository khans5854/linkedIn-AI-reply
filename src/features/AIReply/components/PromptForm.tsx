import { useState, type FC, type PropsWithoutRef } from "react"

import { usePromptForm } from "../hooks"

interface IPromptFrom {
  isResponse?: boolean
  onSubmit: (prompt: string) => Promise<void>
  onInsert: () => void
  onRegenerate: () => void
}
export const PromptForm: FC<PropsWithoutRef<IPromptFrom>> = ({
  onSubmit,
  onRegenerate,
  onInsert,
  isResponse = false
}) => {
  const { prompt, handleInputChange, handleSubmit } = usePromptForm({
    onSubmit
  })
  return (
    <form className="flex flex-col bg-white gap-8" onSubmit={handleSubmit}>
      <input
        className="p-4 text-2xl rounded-lg focus:outline-none focus:shadow-outline border-2 border-gray-500 border-opacity-25"
        type="text"
        placeholder="Your Prompt"
        onChange={handleInputChange}
        value={prompt}
        name="prompt"
        autoFocus
      />
      <div className="flex self-end gap-4">
        {isResponse ? (
          <button
            className="btn btn-secondary"
            type="button"
            onClick={onInsert}>
              <svg xmlns="http://www.w3.org/2000/svg" height="20" fill="#6B7280" viewBox="0 -960 960 960" width="20"><path d="M440-800v487L216-537l-56 57 320 320 320-320-56-57-224 224v-487h-80Z"/></svg>
            Insert
          </button>
        ) : null}

        {isResponse && !prompt ? (
          <button
            className="btn btn-primary"
            type="button"
            onClick={onRegenerate}>
              <svg xmlns="http://www.w3.org/2000/svg" height="24" fill="#ffffff" viewBox="0 -960 960 960" width="24"><path d="M160-160v-80h110l-16-14q-52-46-73-105t-21-119q0-111 66.5-197.5T400-790v84q-72 26-116 88.5T240-478q0 45 17 87.5t53 78.5l10 10v-98h80v240H160Zm400-10v-84q72-26 116-88.5T720-482q0-45-17-87.5T650-648l-10-10v98h-80v-240h240v80H690l16 14q49 49 71.5 106.5T800-482q0 111-66.5 197.5T560-170Z"/></svg>
            Regenerate
          </button>
        ) : (
          <button
            className="btn btn-primary border-2 border-primary"
            type="submit">
              <svg width="20" height="20" viewBox="20 11 35 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M48.456 25.6075L26.456 14.6075C26.2836 14.5213 26.0899 14.4867 25.8983 14.508C25.7067 14.5293 25.5253 14.6055 25.376 14.7275C25.2334 14.847 25.127 15.0039 25.0687 15.1805C25.0104 15.3572 25.0025 15.5466 25.046 15.7275L28.006 26.4975L25.006 37.2375C24.9652 37.3886 24.9605 37.5471 24.9921 37.7003C25.0237 37.8535 25.0909 37.9972 25.1881 38.1198C25.2854 38.2423 25.4101 38.3403 25.5521 38.4059C25.6942 38.4715 25.8496 38.5029 26.006 38.4975C26.1625 38.4966 26.3167 38.4589 26.456 38.3875L48.456 27.3875C48.6198 27.3036 48.7573 27.1761 48.8532 27.0191C48.9492 26.862 49 26.6816 49 26.4975C49 26.3135 48.9492 26.133 48.8532 25.9759C48.7573 25.8189 48.6198 25.6914 48.456 25.6075ZM27.556 35.6075L29.766 27.4975H39.006V25.4975H29.766L27.556 17.3875L45.766 26.4975L27.556 35.6075Z" fill="#ffffff"/>
              </svg>
            Generate
          </button>
        )}
      </div>
    </form>
  )
}
