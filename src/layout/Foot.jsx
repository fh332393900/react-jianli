import * as React from 'react'
import { Icon } from 'antd'
import './Foot.css'
function Foot() {
    return (
        <div className="foot">
            <div className="foot-icon">
                <div>React</div>
                <div>
                    <a href="https://github.com/fh332393900" className="github"><Icon type="github"></Icon></a>
                </div>
                <div>Ant Design</div>
            </div>
            <div className="foot-right">
                <div>Copyright &copy;</div>
                <div>2019 All rights reserved</div>
            </div>
        </div>
    )
}
export default Foot;