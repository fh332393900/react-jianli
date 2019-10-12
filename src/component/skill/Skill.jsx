import React,{ useState } from 'react';
import {Avatar,Icon,Card,Badge} from 'antd';
import './Skill.css'
function Skill(props) {
   
    return (
        <div className="skill">
            <Card title="专业技能" bordered={false}></Card>
        </div>
    )
}
export default Skill;