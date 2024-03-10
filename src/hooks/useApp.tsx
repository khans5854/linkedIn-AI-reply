import { useEffect } from "react";
import { IconButton } from "~/features/IconButton";
import { createRoot } from 'react-dom/client';

const getContainer = () => {
  const container = document.createElement('div');
  container.id = 'AI-Reply-Icon';
  container.style.position = 'absolute';
  container.style.right = '0';
  container.style.bottom = '0';
  return container;
}
const injectComponent = () => {
  const chatInput: any = document.querySelector('.msg-form__contenteditable'); // Selector for LinkedIn chat input field
  if (chatInput ) {
      chatInput.style.position = 'relative';
      const reactContainer = getContainer();
      const containerRoot = createRoot(reactContainer);
      containerRoot.render(<IconButton />);
      chatInput.insertBefore(reactContainer, chatInput.lastChild);
  }
};
const removeComponent = () => {
  const chatInput: any = document.querySelector('.msg-form__contenteditable');
  if (chatInput) {
      const container = document.getElementById('AI-Reply-Icon');
      if (container) {
          chatInput.removeChild(container);
      }
  }

}
const focusInHandler = (event: FocusEvent) => {
  console.log('focusin');
  const target = event.target as HTMLElement;
  if (target.classList.contains('msg-form__contenteditable')) {
      injectComponent();
  }
}
const focusOutHandler = (event: FocusEvent) => {
    const target = event.target as HTMLElement;
    if (target.classList.contains('msg-form__contenteditable')) {
        removeComponent();
    }
}
export const useApp = () => {
    useEffect(() => {
      document.addEventListener('focusin', focusInHandler);
      document.addEventListener('focusout', focusOutHandler);
      return () => {
        document.removeEventListener('focusin', injectComponent);
        document.removeEventListener('focusout', removeComponent);
      }
    },[]) 
}