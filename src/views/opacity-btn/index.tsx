import { Flex } from "antd";
import './opacity-btn.scss'

function OpacityBtn() {
    return (
        <div className="opacity-btn-wrap">
            <Flex gap="small">
                <button className="btn btn-1">Primary</button>
                <button className="btn btn-1" disabled>Primary</button>
                <button className="btn btn-2">Delete</button>
                <button className="btn btn-2" disabled>Delete</button>
                <button className="btn btn-3">Warning</button>
                <button className="btn btn-3" disabled>Warning</button>
            </Flex>
        </div>
    )
}

export default OpacityBtn