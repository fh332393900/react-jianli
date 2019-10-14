import * as React from 'react'
import { Tabs } from 'antd';

const { TabPane } = Tabs;
function tagPage(){
    
    return (
        <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane tab={`文章（${8}）`} key="1">
            Content of Tab Pane 1
            </TabPane>
            <TabPane tab={`项目（${8}）`} key="2">
            Content of Tab Pane 2
            </TabPane>
        </Tabs>
    )
}
function callback(key) {
  
}
export default tagPage;
