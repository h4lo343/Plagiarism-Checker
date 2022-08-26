import { UploadOutlined } from '@ant-design/icons';
import { Button, Space, Upload } from 'antd';
import React from 'react';

export const UploadBox = () => (
  <Space
    style={{
      width: '20%',
      bottom:50,
      right:0,
    }}
    size={'large'}
  >
    <Upload
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      listType="picture"
      maxCount={1}
      accept={'.pdf,.png,.word,.docx,.doc'}
    >
      <Button icon={<UploadOutlined />} 
              style={{
                width:130, 
                height:60,             
                fontSize:"20px",
                borderRadius:10          
              }}
      >Upload
      </Button>
    </Upload> 
  </Space>
);
 

 
