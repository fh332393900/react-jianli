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
    <Menu style={{width:'calc(10px + 30vmin)'}}>
      <Menu.Item key="0">
          <a href="#/"><Icon type="home"></Icon><span style={{marginLeft:10}}>首页</span></a>
      </Menu.Item>
      <Menu.Item key="1">
        <a href='#/person'><Icon type="user"></Icon><span style={{marginLeft:10}}>个人中心</span></a>
      </Menu.Item>
      <Menu.Item key="2">
        <Icon type="setting"></Icon><span>个人设置</span>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3"><Icon type="logout" />退出登录</Menu.Item>
    </Menu>
  );
export default Head;