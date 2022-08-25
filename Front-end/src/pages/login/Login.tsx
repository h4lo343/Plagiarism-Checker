import {Button, Checkbox, Form, Input} from 'antd';
import React from 'react';
import styles from "./Login.module.css"
import {Watermark} from '../../components';
import {Link, useNavigate} from 'react-router-dom';
import {Register} from '../register';
import {BackgroundImage} from '../../components';

export const Login: React.FC = () => {

    const navigate = useNavigate()
    const [form] = Form.useForm()

    const login = () => {
        const username = form.getFieldValue("username")
        const password = form.getFieldValue("password")
        if (password === "123" && username === "123") {
            navigate('/home')
        }
    }

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
                labelCol={{span: 8}}
                wrapperCol={{span: 16}}
                initialValues={{remember: true}}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                className={styles["register-form"]}
                form={form}
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{required: true, message: 'Please input your username!'}]}
                    style={{marginTop: "10px"}}
                >
                    <Input className={styles['input-box']}/>
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{required: true, message: 'Please input your password!'}]}
                >
                    <Input.Password className={styles['input-box']}/>
                </Form.Item>

                <Form.Item name="remember" valuePropName="checked" wrapperCol={{offset: 8, span: 16}}>
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item wrapperCol={{offset: 8, span: 16}}>
                    <Button type="primary" htmlType="submit" onClick={login}>
                        Submit
                    </Button>

                    <Link to="/register" style={{marginLeft: "10px"}}>Register for an account</Link>

                </Form.Item>
                <Watermark top='24%' left='68%'/>
            </Form>
        </div>


    );
};

