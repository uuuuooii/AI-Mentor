'use client'

import React, { useState } from 'react'
import TextaeaAutosize from 'react-textarea-autosize'

const ChatInput = () => {
  const [input, setInput] = useState<string>('')
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