import { Slider, InputNumberProps } from 'antd'
import './mulTagOverflow.less'
import { useState } from 'react'

function MulTagOverflow() {
	const [tagWidth, setTagWidth] = useState(200)

	const tagList = [
		'HTML', 'CSS', 'javascript', 'React', 'Vue', 'TypeScript', 'Node'
	]

	const sliderChange: InputNumberProps['onChange'] = (newValue) => {
		setTagWidth(newValue as number)
	}

	return (
		<div className="mul-tag-overflow-wrap">
			<div className="container" style={{ width: tagWidth }}>
				<div className="tag-wrap" style={{ 'num': tagList.length }}>
					{tagList.map(tag => (
						<div className="tag" key={tag}>{tag}</div>
					))}
				</div>
			</div>
			<Slider className="slider-wrap" min={120} max={640} onChange={sliderChange} value={tagWidth} />
		</div>
	)
}

export default MulTagOverflow
