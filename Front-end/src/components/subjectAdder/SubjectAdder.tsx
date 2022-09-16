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
import axios from "axios";
import React, { useState } from "react";
import { useSelector, TypedUseSelectorHook, useDispatch } from "react-redux";
import { RootState, ReduxDispatch } from "../../redux/store"
import { getSubjectList } from "../../redux/subjectList/slice";
 

const { Option } = Select;

export const SubjectAdder = () => {
  const selector: TypedUseSelectorHook<RootState> = useSelector
  const dispatch = useDispatch<ReduxDispatch>();
  const jwtToken = selector((state) => state.authentication.jwtToken)

  const [visible, setVisible] = useState(false);
  const [form] = useForm();

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const onClick = async () => {
    try {
      const result = await form.validateFields();

      setVisible(false);
      await axios.post(`http://localhost:8888/subject/createSubject/`,

        {
          subjectCode: result['Subject ID'],
          subjectName: result['Subject Name'],
        },
        {
          headers: {
            token: `${jwtToken}`
          }
        }
      )
      if (jwtToken) {
        dispatch(getSubjectList(jwtToken))
      }
      
    } catch (error) {
      const time = new Date();
    }
  };

  return (
    <>
      <Button type="primary" onClick={showDrawer} icon={<PlusOutlined />}>
        New Subject
      </Button>
      <Drawer
        title="Create a new Subject"
        width={720}
        onClose={onClose}
        visible={visible}
        bodyStyle={{
          paddingBottom: 80,
        }}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button type="primary" htmlType="submit" onClick={onClick}>
              Submit
            </Button>
          </Space>
        }
      >
        <Form layout="vertical" form={form} >
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="Semester"
                label="Semester"
                rules={[
                  {
                    required: true,
                    message: "Please enter semester for the Subject",
                  },
                ]}
              >
                <Input placeholder="Please enter semester for the Subject" />
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
                name="Professor name"
                label="Professor name"
                rules={[
                  {
                    required: true,
                    message: "Please input the Professor name",
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
          {/* <Row gutter={16}>
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
          </Row> */}
        </Form>
      </Drawer>
    </>
  );
};
