import React from 'react'
import { Button } from "antd";
import { PlusOutlined  } from '@ant-design/icons';

const Header = ({onNewPaste}) => {
  return (
      <>
          <div className='w-full h-10 bg-gray-200 flex position-fixed top-0 '>
              <div className='text-xl font-semibold select-none text-blue-500 ml-4 items-center flex'>
                PasteKaro
              </div>
              <div className='justify-end flex ml-auto mr-4 items-center'>
              <Button
              icon={<PlusOutlined />}
              onClick={onNewPaste}
              className="bg-white text-blue-400 hover:text-blue-900 hover:border-red-500"
              >New Paste</Button>
              </div>              
          </div>
    </>
  )
}

export default Header