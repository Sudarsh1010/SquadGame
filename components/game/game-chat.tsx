'use client'

import { useState, useEffect, useRef } from 'react'
import { ChatBubble } from './svgs/chat-bubble'
import { InputBoxBackground } from './svgs/input-box-background'
import { Paperclip, Send } from 'lucide-react'
import { sendMessage } from '@/libs/api'

interface Message {
  id: number;
  text: string;
  username: string;
  isUser: boolean;
}

const dummyMessages: Message[] = [
  { id: 1, text: "Welcome to Squad Game!", username: "System", isUser: false },
  { id: 2, text: "Hey everyone, ready to play?", username: "Player123", isUser: false },
  { id: 3, text: "Let's do this!", username: "Player456", isUser: true },
];

export function GameChat() {
  const [messages, setMessages] = useState<Message[]>(dummyMessages);
  const [inputMessage, setInputMessage] = useState('');
  const [username, setUsername] = useState('Player456');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const newMessage: Message = {
      id: Date.now(),
      text: inputMessage,
      username: username,
      isUser: true,
    };

    setMessages(prevMessages => [...prevMessages, newMessage]);
    setInputMessage('');

    try {
      const response = await sendMessage(inputMessage, username);
      setMessages(prevMessages => 
        prevMessages === dummyMessages 
          ? [newMessage, response] 
          : [...prevMessages, response]
      );
    } catch (error) {
      console.error('Failed to send message:', error);
    }
  };

  const handleAttachmentClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div
      className="h-full flex flex-col"
      style={{
        backgroundImage: "url('/chat.png')",
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Chat Messages */}
      <div
        className="relative flex-1 mt-16 ml-4 overflow-y-auto scrollbar-thin scrollbar-thumb-[#45F0FF]/20 scrollbar-track-transparent px-4 space-y-4"
      >
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
          >
            <div className="max-w-md">
              <div
                className={`px-4 py-2 rounded-lg ${
                  message.isUser
                    ? 'bg-[#45F0FF]/10 text-[#45F0FF]'
                    : 'bg-[#FF1493]/10 text-[#FF1493]'
                }`}
              >
                <span className="block text-xs font-medium mb-1">
                  {message.username}
                </span>
                <span className="block">{message.text}</span>
              </div>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div
        className="px-8 mb-8 mx-2 ml-6"
        style={{
          backgroundImage: "url('/input.png')",
          backgroundSize: '100% 100%',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <form
          onSubmit={handleSendMessage}
          className="flex items-center w-full mx-auto pl-2 pb-2"
        >
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-grow bg-transparent text-white px-4 py-2 rounded-lg focus:outline-none"
          />
          <button
            type="button"
            onClick={handleAttachmentClick}
            className="p-2 text-[#45F0FF] hover:text-[#45F0FF]/80 transition-colors"
          >
            <Paperclip className="w-4 h-4" />
          </button>
          <button
            type="submit"
            className="p-2 text-[#45F0FF] hover:text-[#45F0FF]/80 transition-colors"
          >
            <Send className="w-4 h-4" />
          </button>
          <input
            ref={fileInputRef}
            type="file"
            className="hidden"
            onChange={(e) => console.log(e.target.files)}
          />
        </form>
      </div>
    </div>
  )
}

