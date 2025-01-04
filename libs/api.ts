export async function getLobbyMessages(token: string) {
  const URL = `${process.env.NEXT_PUBLIC_API_URL}/api/chat/main`;

  try {
    const response = await fetch(URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data.messages;
  } catch (error) {
    console.error('Error fetching lobby messages:', error);
    throw error;
  }
}

export async function sendMessage(token: string, content: string, sender: string, type: 'public' | 'private' = 'public', chatId: string = 'public') {
  const URL = `${process.env.NEXT_PUBLIC_API_URL}/api/chat/message`;

  try {
    const response = await fetch(URL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({sender, content, type, chatId }),
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error sending message:', error);
    throw error;
  }
} 
