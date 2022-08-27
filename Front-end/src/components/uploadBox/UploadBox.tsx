import {UploadOutlined} from '@ant-design/icons';
import {Button, Space, Upload} from 'antd';
import React from 'react';

export const UploadBox = () => {
  
  return (
    <Space
        style={{
            width: '20%',
            bottom: 50,
            right: 0,
        }}
        size={'large'}
    >
        <Upload
            action={"http://localhost:8888/file/post-one-pdf"}
            listType="text"
            maxCount={1}
            method={"POST"}
            accept={'.pdf,.png,.docx,.doc'}
        >
            <Button icon={<UploadOutlined/>}
                    style={{
                        width: 100,
                        height: 45,
                        fontSize: "15px",
                        borderRadius: 10
                    }}
            >Upload
            </Button>
        </Upload>
    </Space>
  )
     };
 

 
