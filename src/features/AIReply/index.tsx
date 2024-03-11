import { Dialog } from "~components"

import { PromptForm, ResponseList } from "./components"
import { useApp } from "./hooks"

export const App = () => {
  const {
    dialogOpen,
    handleClose,
    responses,
    handleSubmit,
    handleInsert,
    handleRegenerate
  } = useApp()
  return (
    <Dialog open={dialogOpen} close={handleClose}>
      <div className="flex flex-col bg-white gap-8 p-8 overflow-auto">
        <div className="overflow-auto">
          <ResponseList responses={responses} />
        </div>
        <PromptForm
          onSubmit={handleSubmit}
          onRegenerate={handleRegenerate}
          onInsert={handleInsert}
          isResponse={responses?.length > 0}
        />
      </div>
    </Dialog>
  )
}
