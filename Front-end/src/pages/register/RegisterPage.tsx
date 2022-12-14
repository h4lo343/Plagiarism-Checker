import React from "react";
import { BackgroundImage } from "../../components";
import { Button, Form, Input, Select, notification } from 'antd';
import type { NotificationPlacement } from 'antd/es/notification';
import { BorderTopOutlined } from '@ant-design/icons';
import styles from "./RegisterPage.module.css"
import { Watermark } from '../../components';
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const RegisterPage: React.FC = () => {

  const { Option } = Select;
  const navigate = useNavigate();
  const openNotification = (description: string, placement: NotificationPlacement) => {
    notification.open(
      {
        message: "Notification",
        placement,
        description,
        duration: 1.2
      }
    )
  }

  const onFinish = async (values: any) => {

    try {
      const result = await axios.post("http://localhost:8888/auth/register", {
        email: values.email,
        username: values.username,
        password: values.password,
        role: values.identity
      });
      if (result.status == 200) {
        openNotification("register successful", "top")
        navigate("/Login");
      }
      else {
        openNotification("register unsuccessful", "top")
      }

    } catch (error: any) {
      const errorCode = error.response.status
      if (errorCode == '409') {
        openNotification("this email has already been registered", "top")
      }
    }

  };

  const onFinishFailed = (errorInfo: any) => {

  };


  return (
    <div className={styles.page}>
      <BackgroundImage />
      <Form
        name="basic"
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 18 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        className={styles["register-form"]}
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: 'Please input your email!' },
            { type: "email", message: "it is not a valid email address" }
          ]}
          style={{ marginTop: "42px" }}
          className={styles["form-item"]}
        >
          <Input className={styles['input-box']} />
        </Form.Item>

        <Form.Item
          label="Username"
          name="username"
          rules={[
            { required: true, message: 'Please input your username!' },
            { min: 6, max: 10 }
          ]}
        >
          <Input className={styles['input-box']} />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',

            },
            { min: 6, max: 10 }
          ]}
          hasFeedback
        >
          <Input.Password className={styles['input-box']} />
        </Form.Item>

        <Form.Item
          name="confirm"
          label="Confirm"
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

        <Form.Item name="identity" label="Identity"
          rules={[{
            required: true,
            message: 'Please select your account identity!'
          },]}>
          <Select
            placeholder="Please select your identity"
            allowClear
            style={{ width: "220px" }}
          >
            <Option value="student">Student</Option>
            <Option value="teacher">Teacher</Option>
          </Select>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            register
          </Button>
        </Form.Item>
        <Watermark top='24%' left='60%' />
      </Form>
    </div>
  )

}




