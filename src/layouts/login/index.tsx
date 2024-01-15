/*
 * @Author: changjun anson1992@163.com
 * @Date: 2024-01-12 15:32:55
 * @LastEditors: changjun anson1992@163.com
 * @LastEditTime: 2024-01-15 09:45:35
 * @FilePath: /VUE3-VITE-TS-TEMPLATE/src/layouts/login/index.tsx
 * @Description: 登录页面
 */
import { defineComponent,reactive } from 'vue'
import { LoginParams } from '@/types/services/login'
import { login } from '@/services/login'
import { Form, Input, Button, notification } from 'ant-design-vue'
export default defineComponent({
  name: 'Login',
  setup() {
    // 登录表单
    const loginForm = reactive<LoginParams>({
      phone: '',
      password: '',
      md5_password: ''
    })
    const handleLogin = async () => {
      if (loginForm.phone === '') {
        notification.open({
          message: '提示',
          description: '请输入手机号',
          duration: 3
        })
        return
      }
      if (loginForm.password === '') {
        notification.open({
          message: '提示',
          description: '请输入密码',
          duration: 3
        })
        return
      }
      try {
        const res = await login(loginForm)
        console.log('res',res)
      } catch (error) {
        console.log('error',error)
      }
    }
    return ()=>(
      <div class={`relative w-full h-full overflow-hidden px-4`}>
        <div class="text-center text-blue-500">Hello, world!</div>
        <Form v-model:value={ loginForm }>
          <Form.Item label="手机号" name="phone">
            <Input placeholder="请输入手机号" v-model:value={loginForm.phone}/>
          </Form.Item>
          <Form.Item label="密码" name="password">
            <Input placeholder="请输入密码" type="password" v-model:value={loginForm.password} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" onClick={()=>{handleLogin()}}>登录</Button>
          </Form.Item>
        </Form>
      </div>
    )
  }
})
