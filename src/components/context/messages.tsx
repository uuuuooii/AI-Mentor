import { createContext } from "react";
import { ChatInputProps } from "../chatInput/type";

export const MessagesContext = createContext<{
  messages: ChatInputProps[]
  isMessageUpading: boolean
  addMessage: (message: ChatInputProps) => void
  removeMessage: (id: string) => void
  updateMessage: (id: string, updateFn: (prevText: string) => string) => void
  setIsMessageUpdaing: (isUpdating: boolean) => void
}>({
  messages: [],
  isMessageUpading: false,
  addMessage: () => { },
  removeMessage: () => { },
  updateMessage: () => { },
  setIsMessageUpdaing: () => { }
})