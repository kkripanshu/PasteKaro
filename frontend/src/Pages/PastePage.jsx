import React, { useState, useEffect } from 'react';
import { Button, Input, message } from 'antd';
import { useParams } from 'react-router-dom';

const { TextArea } = Input;

const PastePage = () => {
  const { uniqueLink } = useParams();  // Get the unique link from URL params
  const [pasteContent, setPasteContent] = useState('');
  const [copyButtonText, setCopyButtonText] = useState('Copy');

  // Function to handle copying the paste content
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(pasteContent);
      setCopyButtonText('Copied');
      setTimeout(() => {
        setCopyButtonText('Copy');
      }, 2000);
    } catch (err) {
      console.error('Failed to copy text:', err);
      message.error('Failed to copy text');
    }
  };

  // Fetch the paste content from the backend
  useEffect(() => {
    const fetchPaste = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/paste/${uniqueLink}`);
        if (!response.ok) {
          throw new Error('Paste not found');
        }
        const data = await response.json();
        setPasteContent(data.content);
      } catch (error) {
        message.error('Failed to fetch paste content');
      }
    };

    fetchPaste();
  }, [uniqueLink]);

  return (
    <div className="p-4">
      <h1 className="text-xl font-semibold mb-4">Paste Content</h1>
      <div className="bg-gray-100 p-4 rounded-lg mb-4">
        <TextArea
          className="w-full"
          value={pasteContent}
          readOnly
          autoSize={{ minRows: 24, maxRows: 24 }}
        />
      </div>
      <div className='flex justify-center'>
        <Button onClick={handleCopy}>{copyButtonText}</Button>
      </div>
    </div>
  );
};

export default PastePage;
