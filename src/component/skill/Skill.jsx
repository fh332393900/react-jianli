import React,{ useState } from 'react';
import {Avatar,Icon,Card,Badge} from 'antd';
import './Skill.css';
import Radar from '../charts/Radar'
import Pie from '../charts/Pie'
function Skill(props) {
    return (
      <div className="skill">
        <Card title="专业技能" bordered={false}>
          <div className="charts">
            <div>
              <Radar className="skill-chart"></Radar>
            </div>
            <div>
              
            </div>
          </div>
        </Card>
      </div>
    )
}
export default Skill;