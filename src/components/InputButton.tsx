/**
 * Represents an input button component.
 * This component renders an image button that emits an event when clicked.
 */
import { eventEmitter, ICON_BUTTON_EVENT, INPUT_ICON_URL } from "~/utils"

export const InputButton = () => {
  /**
   * Handles the click event of the icon button.
   * @param e - The mouse event object.
   */
  const handleIconClick = (e: React.MouseEvent<HTMLDivElement>) => {
    eventEmitter.emit(ICON_BUTTON_EVENT, e)
  }

  return (
    <div className="cursor-pointer" onClick={handleIconClick} role="button">
      <img className="w-10 h-10" src={INPUT_ICON_URL} alt="AI Reply Icon" />
    </div>
  )
}
