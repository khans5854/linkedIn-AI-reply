/**
 * Dialog component that displays a modal dialog box.
 *
 * @component
 * @example
 * ```tsx
 * import { Dialog } from './Dialog';
 *
 * const Example = () => {
 *   const [isOpen, setIsOpen] = useState(false);
 *
 *   const handleClose = () => {
 *     setIsOpen(false);
 *   };
 *
 *   return (
 *     <div>
 *       <button onClick={() => setIsOpen(true)}>Open Dialog</button>
 *       <Dialog open={isOpen} close={handleClose}>
 *         <h1>Dialog Content</h1>
 *         <p>This is the content of the dialog.</p>
 *       </Dialog>
 *     </div>
 *   );
 * };
 * ```
 */
import type { FC, PropsWithChildren } from "react"

interface IDialogProps {
  /**
   * Determines whether the dialog is open or closed.
   */
  open: boolean
  /**
   * Callback function to close the dialog.
   */
  close: () => void
}

export const Dialog: FC<PropsWithChildren<IDialogProps>> = ({
  open,
  close,
  children
}) =>
  open ? (
    <div
      className="flex justify-center fixed z-10 inset-0 bg-black/[.6] w-full h-full"
      onClick={close}>
      <div
        className="flex flex-col bg-white self-center rounded-lg shadow-lg w-[56rem] max-w-[90vw] max-h-[90vh] overflow-auto"
        onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  ) : null
