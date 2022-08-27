import {Link, useNavigate} from "react-router-dom";
import {Button, Checkbox, Form, Input} from "antd";
import {BackgroundImage} from "../../components";
import styles from "./LoginForm.module.css";
import {Watermark} from "../../components";
import React, {useEffect} from "react";
import {useReduxDispatch, useReduxSelector} from "../../redux/hooks";
import {login} from "../../redux/authentication/slice";


export const LoginForm = () => {
    /*
        const loading = useReduxSelector((s) => s.authentication.loading);
        const jwtToken = useReduxSelector((s) => s.authentication.jwtToken);

        const dispatch = useReduxDispatch();

        useEffect(() => {
            if (jwtToken !== null) {
                navigate("/");
            }
        }, [navigate, jwtToken])
    */

    const loading = false;
    const navigate = useNavigate();
    const [form] = Form.useForm();

    const mockLogin = () => {
        const username = form.getFieldValue("username")
        const password = form.getFieldValue("password")
        if (password === "123" && username === "student") {
            navigate('/student')
        } else if (password === "123" && username === "teacher") {
            navigate('/teacher')
        }
    }

    const onFinish = (values: any) => {
        console.log('Success:', values);
        /*
        dispatch(login({
            username: values.username,
            password: values.password
        }))
        */
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div>
            <BackgroundImage/>
            <Form
                name="basic"
                labelCol={{span: 6}}
                wrapperCol={{span: 18}}
                initialValues={{remember: true}}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                className={styles["login-form"]}
                form={form}
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{required: true, message: 'Please input your username!'}]}
                    style={{marginTop: "80px"}}
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
                    <Button type="primary" htmlType="submit" onClick={mockLogin} loading={loading}>
                        Submit
                    </Button>

                    <Link to="/register" style={{marginLeft: "10px"}}>Register for an account</Link>

                </Form.Item>
                <Watermark top='24%' left='68%'/>
            </Form>
        </div>
    )
};
