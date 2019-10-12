import React,{ useState } from 'react';
import {Avatar,Icon} from 'antd';
import './User.css'
function User(props) {
    const [user,setUser] = useState(props.userInfo)
    console.log(user)
    return (
        <div className="user">
            <div className="user-avatar">
                <div className='user-name'>
                    {user.name}
                    <div className="user-hope">求职意向：{user.hope}</div>
                </div>
                <Avatar size={64} src={user.avatar} />
            </div>
            <div className="user-basic">
                <div><Icon type="phone" theme="twoTone" twoToneColor="#87d068"/> 手机：{user.phone}</div>
                <div><Icon type="idcard" theme="twoTone"/> 学历：{user.education}</div>
                <div><Icon type="environment" theme="twoTone" twoToneColor="#eb2f96" /> 地址：{user.address}</div>
                <div><Icon type="mail" theme="twoTone" twoToneColor="#2db7f5"/> 邮箱：{user.email}</div>
            </div>
        </div>
    )
}
export default User;