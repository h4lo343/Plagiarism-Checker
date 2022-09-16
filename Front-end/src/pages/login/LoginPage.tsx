import { Link, useNavigate } from "react-router-dom";
import { Button, Checkbox, Form, Input, notification } from "antd";
import type { NotificationPlacement } from 'antd/es/notification';
import { BackgroundImage } from "../../components";
import styles from "./LoginPage.module.css";
import { Watermark } from "../../components";
import React, { useEffect } from "react";
import { useReduxDispatch, useReduxSelector } from "../../redux/hooks";
import { login } from "../../redux/authentication/slice";
import { useDispatch } from "react-redux";
import { ReduxDispatch, RootState } from "../../redux/store"
import { useSelector, TypedUseSelectorHook } from "react-redux";


export const LoginPage = () => {

  const selector: TypedUseSelectorHook<RootState> = useSelector
  const token = selector((state) => state.authentication.jwtToken)
  const error = selector((state) => state.authentication.error)
  const userType = selector((state) => state.authentication.userType)

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

  const loading = false;
  const navigate = useNavigate();
  const [form] = Form.useForm();

  useEffect(() => {
    if (token !== null) {
      if (token == "student") {
        navigate('/student')
      }
      else {
        navigate('/teacher')
      }
    }
  }, [token])

   

  const dispatch = useDispatch<ReduxDispatch>();
  const onFinish = (values: any) => {
    dispatch(login({
      username: values.username,
      password: values.password
    }))
    if (error) {
      openNotification("Username or Password incorrect", "top")
    }

  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div>
      <BackgroundImage />
      <Form
        name="basic"
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 18 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        className={styles["login-form"]}
        form={form}
      >
        <Form.Item
          label="Email"
          name="username"
          rules={[{ required: true, message: 'Please input your email!' }]}
          style={{ marginTop: "80px" }}
        >
          <Input className={styles['input-box']} />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password className={styles['input-box']} />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit" loading={loading}>
            Submit
          </Button>

          <Link to="/register" style={{ marginLeft: "10px" }}>Register for an account</Link>

        </Form.Item>
        <Watermark top='24%' left='60%' />
      </Form>
    </div>
  )
};
