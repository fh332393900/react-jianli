import * as React from 'react'
import './Head.css'
import { Menu, Dropdown, Icon } from 'antd';
const Head = () => {
    return (
        <div className='head'>
            <div>个人简历</div>
            <Dropdown overlay={menu} trigger={['click']}>
                <div className="ant-dropdown-link" href="#">
                    <Icon type="menu" />
                </div>
            </Dropdown>
        </div>
    )
}
const menu = (
    <Menu>
      <Menu.Item key="0">
          <Icon type="home"></Icon>首页
      </Menu.Item>
      <Menu.Item key="1">
        <Icon type="user"></Icon>个人中心
      </Menu.Item>
      <Menu.Item key="2">
        <Icon type="setting"></Icon>个人设置
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3"><Icon type="logout" />退出登录</Menu.Item>
    </Menu>
  );
export default Head;