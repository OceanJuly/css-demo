import { Flex } from "antd";
import './opacity-btn.scss'
import './lessColor.less'

function OpacityBtn() {
    return (
        <div className="opacity-btn-wrap">
            <h2>Sass Button</h2>
            <Flex gap="small">
                <button className="btn btn-1">Primary</button>
                <button className="btn btn-1" disabled>Primary</button>
                <button className="btn btn-2">Delete</button>
                <button className="btn btn-2" disabled>Delete</button>
                <button className="btn btn-3">Warning</button>
                <button className="btn btn-3" disabled>Warning</button>
            </Flex>
            <h2>Less Button</h2>
            <Flex gap="small">
                <button className="lbtn lbtn-1">Primary</button>
                <button className="lbtn lbtn-1" disabled>Primary</button>
                <button className="lbtn lbtn-2">Delete</button>
                <button className="lbtn lbtn-2" disabled>Delete</button>
                <button className="lbtn lbtn-3">Warning</button>
                <button className="lbtn lbtn-3" disabled>Warning</button>
            </Flex>
            <h2>Test</h2>
            <Flex gap="small">
                <button className="lbtn lbtn-1">test1</button>
                <button className="test-btn">test1</button>
                <button className="lbtn lbtn-1" disabled>test2</button>
                <button className="test-btn" disabled>test2</button>
            </Flex>
        </div>
    )
}

export default OpacityBtn