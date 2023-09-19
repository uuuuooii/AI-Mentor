import { ReactNode, createContext, useState } from "react";
import { ChatInputProps } from "../chat/chatInput/type";
import { nanoid } from "nanoid";

export const MessagesContext = createContext<{
  messages: ChatInputProps[]
  isMessageUpdating: boolean
  addMessage: (message: ChatInputProps) => void
  removeMessage: (id: string) => void
  updateMessage: (id: string, updateFn: (prevText: string) => string) => void
  setIsMessageUpdating: (isUpdating: boolean) => void
}>({
  messages: [],
  isMessageUpdating: false,
  addMessage: () => { },
  removeMessage: () => { },
  updateMessage: () => { },
  setIsMessageUpdating: () => { }
})

export function MessagesProvider({ children }: { children: ReactNode }) {
  const [isMessageUpdating, setIsMessageUpdating] = useState<boolean>(false)
  const [messages, setMessages] = useState<ChatInputProps[]>([
    {
      id: nanoid(),
      text: '안녕하세요',
      isUserMessage: false
    }
  ])

  const addMessage = (message: ChatInputProps) => {
    setMessages((prev) => [...prev, message])
  }

  const removeMessage = (id: string) => {
    setMessages((prev) => prev.filter((message) => message.id !== id))
  }

  const updateMessage = (id: string, updateFn: (prevText: string) => string) => {
    setMessages((prev) => prev.map((message) => {
      if (message.id === id) {
        return { ...message, text: updateFn(message.text) }
      }

      return message
    }))
  }

  return (
    <MessagesContext.Provider
      value={{
        messages,
        isMessageUpdating,
        addMessage,
        removeMessage,
        updateMessage,
        setIsMessageUpdating
      }}>
      {children}
    </MessagesContext.Provider>
  )
}