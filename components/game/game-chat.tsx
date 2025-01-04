'use client'

import { useState, useEffect, useRef } from 'react'
import { Paperclip, Send } from 'lucide-react'
import { getLobbyMessages, sendMessage } from '@/libs/api'
import { UserIcon } from './svgs/user-icon';


interface Message {
  _id: string;
  content: string;
  sender: string;
  timestamp: string;
}

export function GameChat({ authToken }: { authToken: string | null }) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [username, setUsername] = useState('666');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    async function fetchMessages() {
      try {
        if (!authToken) return;
        const messages = await getLobbyMessages(authToken);
        setMessages(messages);
      } catch (error) {
        console.error('Failed to fetch messages:', error);
      }
    }

    fetchMessages();
  }, [authToken]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    //const timestamp = new Date().toISOString();

    //const newMessage: Message = {
    //  _id: username + timestamp,
    //  content: inputMessage,
    //  sender: username,
    //  timestamp: timestamp,
    //};

    setUsername("666")
    setInputMessage('');

    try {
      if (!authToken || !username || !inputMessage) return;
      const response = await sendMessage(authToken, inputMessage, username);
      setMessages(response.messages);
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
        {messages && messages.map((message) => (
          <div
          key={message._id}
          className={`flex ${message.sender === username ? 'justify-end' : 'justify-start'} mb-4`}
        >
          {!(message.sender === username) && <div>
          <UserIcon />
          </div>}
          <div className="flex flex-col items-start">
            {/* Username tag */}
            <div
              className={`relative px-2 text-xs font-bold text-center ${
                message.sender === username
                  ? 'bg-[#00FFFF]/80 self-end mr-2'
                  : 'bg-[#00FFFF]/80 self-start ml-2'
              }`}
              style={{
                clipPath: 'polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)',
              }}
            >
              {message.sender}
            </div>
        
            {/* Message bubble */}
            <div
              className={`px-4 py-2 ${message.content.length > 50 ? 'pb-8' : 'pb-4'} break-all`} 
              style={{
                backgroundImage: message.sender === username ? 'url("/chatMe.png")' : 'url("/chatAll.png")',
                backgroundSize: '100% 100%',
                backgroundRepeat: 'no-repeat',
                wordWrap: 'break-word'
              }}
            >
              <span className="block text-[#45F0FF]">{message.content}</span>
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


      // <div
      //   className="relative flex-1 mt-16 ml-4 overflow-y-auto scrollbar-thin scrollbar-thumb-[#45F0FF]/20 scrollbar-track-transparent px-4 space-y-4"
      // >
      //   {messages.map((message) => (
      //     <div
      //       key={message.id}
      //       className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
      //     >
      //       <div className="max-w-md">
      //           <span className="block text-xs font-medium mb-1">
      //             {message.username}
      //           </span>
      //         <div
      //           className={"px-4 py-2"} 
      //           style={{
      //             backgroundImage: message.isUser ? 'url("/chatAll.png")' : 'url("/chatMe.png")',
      //             backgroundSize: '100% 100%',
      //             backgroundRepeat: 'no-repeat',
      //           }}
      //         >
      //           <span className="block text-[#45F0FF]">{message.text}</span>
      //         </div>
      //       </div>
      //     </div>
      //   ))}
      //   <div ref={messagesEndRef} />
      // </div>
