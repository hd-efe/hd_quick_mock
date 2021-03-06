import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { Button, Row, Col, Icon, Menu, Dropdown, Avatar, Spin, Table, Tag, Form, Input, Select, Pagination, message, Empty } from "ant-design-vue" // 组件
const MenuItem = Menu.Item
const FormItem = Form.Item
const SelectOption = Select.Option
Vue.component(Button.name, Button)
Vue.component(Icon.name, Icon)
Vue.component(Row.name, Row)
Vue.component(Col.name, Col)
Vue.component(Menu.name, Menu)
Vue.component(MenuItem.name, MenuItem)
Vue.component(Dropdown.name, Dropdown)
Vue.component(Avatar.name, Avatar)
Vue.component(Spin.name, Spin)
Vue.component(Table.name, Table)
Vue.component(Tag.name, Tag)
Vue.component(Form.name, Form)
Vue.component(FormItem.name, FormItem)
Vue.component(Input.name, Input)
Vue.component(Select.name, Select)
Vue.component(SelectOption.name, SelectOption)
Vue.component(Pagination.name, Pagination)
Vue.component(Empty.name, Empty)

Vue.config.productionTip = false
Vue.prototype.$message = message
new Vue({
  components: {
    Button
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app')
