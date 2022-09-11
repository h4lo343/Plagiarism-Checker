import { PlusOutlined } from "@ant-design/icons";
import {
  Button,
  Col,
  DatePicker,
  Drawer,
  Form,
  Input,
  Row,
  Select,
  Space,
} from "antd";
import { useForm } from "antd/es/form/Form";
import FormItem from "antd/es/form/FormItem";
import React, { useState } from "react";

const { Option } = Select;

export const AssignmentAdder = () => {
  const [visible, setVisible] = useState(false);
  const [form] = useForm();

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const onSubmit = async () => {
    try {
      const result = await form.validateFields();
      setVisible(false);
    } catch (error) {
      const time = new Date();
    }
  };

  return (
    <>
      <Button type="primary" onClick={showDrawer} icon={<PlusOutlined />}>
        New assignment
      </Button>
      <Drawer
        title="Create a new Assignment"
        width={720}
        onClose={onClose}
        visible={visible}
        bodyStyle={{
          paddingBottom: 80,
        }}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button onClick={onSubmit} type="primary" htmlType="submit">
              Submit
            </Button>
          </Space>
        }
      >
        <Form layout="vertical" form={form}>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="Semester"
                label="Semester"
                rules={[
                  {
                    required: true,
                    message: "Please enter semester for the assignment",
                  },
                ]}
              >
                <Input placeholder="Please enter semester for the assignment" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="Subject ID"
                label="Subject ID"
                rules={[
                  {
                    required: true,
                    message: "Please enter Subject ID",
                  },
                ]}
              >
                <Input
                  style={{
                    width: "100%",
                  }}
                  placeholder="Please Subject ID"
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="Subject Name"
                label="Subject Name"
                rules={[
                  {
                    required: true,
                    message: "Please input Subject Name",
                  },
                ]}
              >
                <Input
                  style={{
                    width: "100%",
                  }}
                  placeholder="Please input Subject Name"
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="Assignment name"
                label="Assignment name"
                rules={[
                  {
                    required: true,
                    message: "Please input the assignment name",
                  },
                ]}
              >
                <Input
                  style={{
                    width: "100%",
                  }}
                  placeholder="Please input the assignment name"
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <FormItem
                name="Due Date"
                label="Due Date"
                rules={[
                  {
                    required: true,
                    message: "Please pick due date for the assignment",
                  },
                ]}
              >
                <DatePicker style={{width: "100%"}} />
              </FormItem>
            </Col>
          </Row>
        </Form>
      </Drawer>
    </>
  );
};
