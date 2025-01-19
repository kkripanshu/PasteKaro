import React, { useState } from 'react';
import Header from '../Components/Header';
import Popup from '../Components/Popup';
import { Button, Input, message, notification } from 'antd';
const { TextArea } = Input;

const HomePage = () => {
  const [content, setContent] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pasteLink, setPasteLink] = useState('');

  // Initialize notification
  const [api, contextHolder] = notification.useNotification();

  // Function to clear content
  const clearContent = () => {
    setContent('');
  };

  // Function to show error notification
  const openNotificationWithIcon = (type) => {
    api[type]({
      message: 'Error',
      description: 'Please enter some content to create a paste.',
      duration: 2,
       style: {
        transition: 'all 0.7s ease', 
      },
    });
  };

  // Function to create a paste
  const createPaste = async () => {
    if (!content.trim()) {
      openNotificationWithIcon('error');
      return;
    }
    try {
      const response = await fetch('http://localhost:5000/api/paste', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content }),
      });

      if (!response.ok) {
        alert('Something went wrong');
        return;
      }

      const data = await response.json();
      const link = `${window.location.origin}/paste/${data.uniqueLink}`;
      setPasteLink(link);
      setIsModalOpen(true);
    } catch (error) {
      console.error('Error:', error);
      message.error('An error occurred while creating the paste.');
    }
  };

  // Function to handle modal close
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {/* Notification Context */}
      {contextHolder}

      <div className="flex flex-col min-h-screen">
        {/* Header */}
        <Header onNewPaste={clearContent} />

        {/* Main Content */}
        <div className="flex-grow">
          <div className="border-2 border-gray-200 rounded-lg m-4 p-2 h-full flex flex-col gap-4">
            <TextArea
              className="w-full h-full p-2"
              placeholder="Type here..."
              autoSize={{ minRows: 24, maxRows: 24 }} // Adjustable height
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            <div className="flex justify-center">
              <Button onClick={createPaste}>Create Paste</Button>
            </div>

            {/* Modal Component */}
            <Popup open={isModalOpen} onCancel={handleCancel} pasteLink={pasteLink} />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
