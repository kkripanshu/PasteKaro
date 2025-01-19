import React, {useEffect, useState} from 'react';
import { Button, Modal, Spin } from 'antd';

const Popup = ({ open, onCancel, pasteLink }) => {

  const [copyButtonText, setCopyButtonText] = useState('Copy');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (open) {
      setLoading(true);
      const timer = setTimeout(() => {
        setLoading(false);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [open]);


  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(pasteLink);
      setCopyButtonText('Copied');

      setTimeout(() => {
        setCopyButtonText('Copy');
      }, 2000);
    }
    catch(err){
      console.error(err);
    }
  }


  return (
    <Modal title="Paste Created" open={open} onCancel={onCancel} footer={null} >
      {loading ? (
        <div className='flex justify-center items-center h-32'>
          <Spin size='large' />
      </div>
      ) : (
              <div className='flex flex-col gap-4'>
        <div className='text-md font-semibold select-none text-red-400'>
          Your paste content has been successfully created. Here is the link to your paste:
        </div>
        <div
          className='p-4 bg-gray-300 rounded-lg select-none break-all mb-4 '
        >
          {pasteLink}
        </div>
        <div className='flex justify-center bg-green text-blue hover:text-blue-900 hover:border-red-500'>
          <Button onClick={handleCopy}>{copyButtonText}</Button>
        </div>
      </div>
    )}
    </Modal>
  );
};

export default Popup;
