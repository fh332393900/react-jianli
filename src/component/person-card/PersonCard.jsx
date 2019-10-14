import React,{ useState } from 'react';
import {Avatar,Icon,Divider,Tag} from 'antd';
import './PersonCard.css'
function PersonCard(props) {
    const [user,setUser] = useState(props.personInfo)
    return (
        <div className="person">
            <div className="person-avatar">
                <Avatar size={64} src={user.avatar} />
                <div className='person-name'>
                    {user.name}
                </div>
            </div>
            <div className="person-basic">
                <div><Icon type="laptop" /><span style={{marginLeft:'10px'}}>{user.position}</span></div>
                <div><Icon type="environment" /><span style={{marginLeft:'10px'}}>{user.address}</span></div>
            </div>
            <div className="person-tag">
                <Tag color="#f50">JavaScript</Tag>
                <Tag color="#87d068">Vue</Tag>
                <Tag color="#2db7f5">React</Tag>
                <Tag color="#108ee9">TypeScript</Tag>
            </div>
        </div>
    )
}
export default PersonCard;