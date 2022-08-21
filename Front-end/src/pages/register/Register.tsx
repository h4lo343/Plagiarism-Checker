import React from "react";
import { BackgroundImage } from "../../components";
import { Button, Checkbox, Form, Input, Select} from 'antd';
import styles from "./Register.module.css"
import { Watermark } from '../../components';

export const Register: React.FC = () => {

  const {Option} = Select

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  
  return (
    <div>
      <BackgroundImage/>
      <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          className={styles["register-form"]}
        >
          <Form.Item
            label="enter your user name"
            name="username"
            rules={[{required: true, message: 'Please input your username!' },
                    {min:6, max:10}

                  ]}
            style={{marginTop:"10px"}}
          >
            <Input  className={styles['input-box']} />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
            hasFeedback
          >
            <Input.Password className={styles['input-box']}/>
          </Form.Item>

          <Form.Item
            name="confirm"
            label="Confirm Password"
            dependencies={['password']}
            hasFeedback
            rules={[
            {
              required: true,
              message: 'Please confirm your password!',
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error('The two passwords that you entered do not match!'));
                  },
                }),
              ]}
            >
              <Input.Password className={styles['input-box']} />
          </Form.Item>

          <Form.Item
            label="enter your email"
            name="email"
            rules=
            {[{ 
              required: true, 
              message: 'Please input your email!' },
              {type: "email", message:"it is not a valid email address"}
            ,]}
          >
            <Input className={styles['input-box']}/>
          </Form.Item>

          <Form.Item name="type" label="type" 
            rules={[{ required: true, 
                  message: 'Please select your account type!'},]}>
            <Select 
              placeholder="Select your account type"
              allowClear
              style={{width:"200px"}}
            >
              <Option value="student" >student</Option>
              <Option value="teacher">teacher</Option>      
            </Select>
         </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              register
            </Button>        
          </Form.Item>
          <Watermark top='24%' left='68%'/> 
      </Form>  
    </div>
  )

}

 


