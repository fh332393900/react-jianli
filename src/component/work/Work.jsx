import React,{ useState } from 'react';
import {Avatar,Icon,Card,Badge} from 'antd';
import './Work.css'
function Work(props) {
    const [work,setWork] = useState(props.workInfo)
    const cardItem = work.map((item,index) => 
        <div key={index}>
            <div>{item.company} <span>{item.time}</span></div>
            <div>{item.desc}</div>
        </div>
    )
    return (
        <div className="work">
            <div className="work-list">
                <Card title="工作经验" bordered={false}>
                    {
                        work.map((item,index) => 
                            <div key={index} className="card-item">
                                <div className="card-title">
                                    {item.company} 
                                    <div>{item.time} | {item.position}</div>
                                </div>
                                <div className="card-desc">
                                    <Badge color="#108ee9"/>
                                    {item.desc}
                                </div>
                            </div>
                        )
                    }
                </Card>
            </div>
        </div>
    )
}
export default Work;