import * as React from 'react'
import PersonCard from '../../component/person-card/PersonCard'
import TagPage from '../../component/tabs/Tabs'
function Person(params) {
    let person = {
        name:'冯航',
        avatar:'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
        position:'前端工程师',
        motto:'good study, day day up',
        address:'四川省成都市'
    }
    return (
        <div>
            <PersonCard personInfo={person}></PersonCard>
            <TagPage></TagPage>
        </div>
    )
}
export default Person;