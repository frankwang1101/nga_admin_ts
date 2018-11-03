import { Form, Icon, Input, Button, Select } from 'antd';
import * as React from 'react';
import { FormProps, FormComponentProps } from 'antd/lib/form';

declare interface ModalProps {
  cancel: (...c:any) => any
  data: any
  submit: (...c:any) => any
}

const FormItem = Form.Item;
const Option = Select.Option;
class NormalLoginForm extends React.Component<ModalProps & FormComponentProps, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      username: '',
      nickname: '',
      email: '',
      status: '',
      mobile: '',
    };
  }

  public componentWillReceiveProps(nextprops: any) {
    console.log('receive', Date.now());
    if (JSON.stringify(nextprops.form) !== JSON.stringify(this.props.form)) {
      this.setState({
        ...nextprops.form,
      });
    }
  }

  public handleSubmit = (e: any) => {
    this.props.form.validateFields(async (err: any, values: any) => {
      try {
        if (err) {
          throw new Error(err)
        }
        this.props.submit(values)
      } catch(e) {
        console.log(e);
      }
    });
  };

  public componentWillUnmount() {
    console.log('unmount');
  }

  public render() {
    const { getFieldDecorator } = this.props.form;
    const config = [
      {
        name: 'username',
        rules: [{ required: true, message: 'Please input your username!' }],
        placeholder: '请输入用户名',
        icon: 'user',
      },
      {
        name: 'email',
        rules: [{ message: 'Please input your email!' }],
        placeholder: '请输入邮箱',
        icon: 'user',
      },
      {
        name: 'mobile',
        rules: [{ message: 'Please input your mobile!' }],
        placeholder: '请输入手机号',
        icon: 'user',
      },
      {
        name: 'role',
        rules: [{ message: 'Please input your mobile!' }],
        placeholder: '请输入手机号',
        icon: 'role',
        child: (
          <Select style={{ width: 120 }}>
            <Option value={1}>普通用户</Option>
            <Option value={2}>警告用户</Option>
            <Option value={3}>版主</Option>
            <Option value={5}>管理员</Option>
          </Select>
        ),
      },
      {
        name: 'status',
        rules: [{ require: true, message: 'Please input your mobile!' }],
        placeholder: '请选择状态',
        icon: 'user',
        child: (
          <Select style={{ width: 120 }}>
            <Option value={0}>启用</Option>
            <Option value={1}>禁用</Option>
            <Option value={2}>禁言</Option>
          </Select>
        ),
      },
    ];
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        {config.map((item, idx) => (
          <FormItem key={idx}>
            {getFieldDecorator(item.name, {
              rules: item.rules,
            })(
              item.child ? (
                React.cloneElement(item.child, {})
              ) : (
                <Input
                  prefix={
                    <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                  }
                  placeholder={item.placeholder}
                />
              ),
            )}
          </FormItem>
        ))}
        <FormItem>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            确认
          </Button>
          <Button className="login-form-button" onClick={this.props.cancel}>
            取消
          </Button>
        </FormItem>
      </Form>
    );
  }
}

const WrappedNormalLoginForm = Form.create({
  mapPropsToFields(props: any) {
    const k = {
      username: Form.createFormField({
        value: props.data.username,
      }),
      email: Form.createFormField({ value: props.data.email}),
      mobile: Form.createFormField({ value: props.data.mobile}),
      status: Form.createFormField({ value: props.data.status}),
      role: Form.createFormField({ value: props.data.role}),
    };
    return k;
  },
})(NormalLoginForm);

export default WrappedNormalLoginForm;
