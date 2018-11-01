import { Form, Icon, Input, Button, Select } from 'antd';
import * as React from 'react'

const FormItem = Form.Item;
const Option = Select.Option;
class NormalLoginForm extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
    console.log(props)
    this.state = {
      username: '',
      nickname: '',
      email: '',
      status: '',
      mobile: '',
    }
  }

  public componentWillReceiveProps (nextprops: any){
    if(JSON.stringify(nextprops.form) !== JSON.stringify(this.props.form)) {
      console.log('cccc')
      this.setState({
        ...nextprops.form
      })
    }
  }

  public handleSubmit = (e: any) => {
    e.preventDefault();
    this.props.form.validateFields((err: any, values: any) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  public componentWillUnmount() {
    console.log('unmount')
  }

  public render() {
    const { getFieldDecorator } = this.props.form;
    const config = [
      {
        name: 'username',
        rules: [{ required: true, message: 'Please input your username!' }],
        placeholder: '请输入用户名',
        icon: 'user'
      },
      {
        name: 'nickname',
        rules: [{ required: true, message: 'Please input your nickname!' }],
        placeholder: '请输入昵称',
        icon: 'user'
      },
      {
        name: 'email',
        rules: [{ message: 'Please input your email!' }],
        placeholder: '请输入邮箱',
        icon: 'user'
      },
      {
        name: 'mobile',
        rules: [{ message: 'Please input your mobile!' }],
        placeholder: '请输入手机号',
        icon: 'user'
      },
      {
        name: 'status',
        rules: [{ require: true, message: 'Please input your mobile!' }],
        placeholder: '请选择状态',
        icon: 'user',
        child: <Select style={{ width: 120 }}>
                <Option value="jack">禁用</Option>
                <Option value="lucy">启用</Option>
                <Option value="lucy">禁言</Option>
              </Select>
      },
    ]
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        {
          ...config.map(item => (
            <FormItem>
              {getFieldDecorator(item.name, {
                rules: [{ required: true, message: 'Please input your username!' }],
              })(
                item.child ?
                React.cloneElement(item.child, {

                }) : (
                  <Input
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="Username"
                  />
                )
              )}
            </FormItem>
          ))
        }
        <FormItem>
          <Button type="primary" htmlType="submit" className="login-form-button">
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
    console.log(props)
    const k = {
      username: Form.createFormField(props.data.username),
      nickname: Form.createFormField(props.data.nickname),
      email: Form.createFormField(props.data.email),
      mobile: Form.createFormField(props.data.mobile),
      status: Form.createFormField(props.data.status),
    };
    return k;
  },
})(NormalLoginForm);

export default WrappedNormalLoginForm
