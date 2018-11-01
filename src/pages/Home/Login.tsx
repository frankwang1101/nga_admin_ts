import React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { FormComponentProps } from 'antd/lib/form';
import './style/Login.scss';

const FormItem = Form.Item;

export class NormalLoginForm extends React.Component<
  FormComponentProps,
  React.ComponentState
> {
  public render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="wrap">
        <div className="login">
          <h1>欢迎访问nga后台管理系统</h1>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <FormItem>
              {getFieldDecorator('userName', {
                rules: [
                  { required: true, message: '请输入用户名!' },
                ],
              })(
                <Input
                  prefix={
                    <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                  }
                  placeholder="用户名"
                />,
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('password', {
                rules: [
                  { required: true, message: '请输入密码!' },
                ],
              })(
                <Input
                  prefix={
                    <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                  }
                  type="password"
                  placeholder="密码"
                />,
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('remember', {
                initialValue: true,
                valuePropName: 'checked',
              })(<Checkbox>记住我</Checkbox>)}
              <a className="login-form-forgot" href="">
                忘记密码
              </a>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                登录
              </Button>
              或者 <a href="">现在注册!</a>
            </FormItem>
          </Form>
        </div>
      </div>
    );
  }

  private handleSubmit = (e: React.FormEvent<any>) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };
}
const WrappedNormalLoginForm = Form.create()(NormalLoginForm);
export default WrappedNormalLoginForm;
