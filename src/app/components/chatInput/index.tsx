'use client'

import React, { useState } from 'react'
import TextaeaAutosize from 'react-textarea-autosize'

const ChatInput = () => {
  const [input, setInput] = useState<string>('')

  const { mutate: sendMessage, isLoading } = useMutation({
    mutationFn: async () => {
      const response = await fetch('/api/message', {
        method: 'POST',
        headers: {
          'Contetn-Type': 'application/json'
        },
        body: JSON.stringify({})
      })
    }
  })

  return (
    <div>
      <TextaeaAutosize
        rows={2}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        autoFocus
        placeholder='send a message'
      />
    </div>
  )
}

export default ChatInput