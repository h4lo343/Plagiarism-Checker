import { UploadOutlined } from '@ant-design/icons';
import { Button, Upload } from 'antd';
import React from 'react';
const props = {
  action: '//jsonplaceholder.typicode.com/posts/',
  listType: 'picture',

  previewFile(file:any) {
    console.log('Your upload file:', file); // Your process logic. Here we just mock to the same file

    return fetch('https://next.json-generator.com/api/json/get/4ytyBoLK8', {
      method: 'POST',
      body: file,
    })
      .then((res) => res.json())
      .then(({ thumbnail }) => thumbnail);
  },
};

export const UploadBox = () => (
  <>
  Assignment
  </>
);
 
