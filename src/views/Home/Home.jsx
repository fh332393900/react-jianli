import * as React from 'react'
import User from '../../component/user/User';
import Work from '../../component/work/Work';
import Skill from '../../component/skill/Skill'
import './Home.css'
function Home() {
    let user = {
        avatar:'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
        name:'冯航',
        hope:'前端工程师',
        age:'21',
        height:'168',
        birthday:'1997.12.20',
        phone:'17713605274',
        email:'332393900@qq.com',
        education:'全日制本科',
        address:'成都市双流区应龙路青年城',
        work:[{
            time:'2018.11-2019.7',
            company:'成都博智维讯信息技术股份有限公司',
            position:'前端开发',
            desc:'主要负责爱亲母婴电商网站的后台管理系统，使用vue+element的框架来开发门店后台管理、营运中心、供应链3个板块，并顺利完成交付。主要内容包含商品信息sku管理、供应商、订单与退货单、优惠活动、购物车，小程序的商品模板等电子商务网站常见的功能模块。'
        },
        {
            time:'2019.7-2019.10',
            company:'成都云禾网信科技有限公司',
            position:'前端开发',
            desc:'负责外呼宝（电话呼叫系统）企业端和后台端的开发，完成了1.1至1.5版本的迭代。使用vue+element来进行开发。主要对客户信息和员工信息进行管理，调用电话拨打服务，并对拨打记录进行数据统计。'
        }]
    }
    return (
        <div className="home">
            <User userInfo={user}></User>
            <Work workInfo={user.work}></Work>
            <Skill></Skill>
        </div> 
    )
}

export default Home;