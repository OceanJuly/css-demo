import './animation-face.less'
import {useEffect, useRef, useState} from "react";

function AnimationFace() {
    const inputRef = useRef<HTMLInputElement | null>(null)
    const [delay, setDelay] = useState(-1)

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.addEventListener('input', handleFacePos)
        }
    }, []);

    function handleFacePos(e: any) {
        const ele = e.target
        const value: number = ele.value
        if (!ele) return
        setDelay(-value)
    }

    return (
        <div className="animation-face-wrap">
            <div className="face" style={{ '--delay': `${delay}s` }}></div>
            <input
                type="range"
                min={0}
                max={1}
                step={.01}
                ref={inputRef}
            />
        </div>
    )
}

export default AnimationFace