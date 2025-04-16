import React from 'react'; 
import { Code } from '@interfaces/common';

interface CodingBar2Props {
    code : Code
}

const CodingBar2: React.FC<CodingBar2Props> = ({code}) => {
    const {title, percent} = code; // 구조분해할당 다른 사람 작업을 추가? 할 ? 때? 
    return (
        <>
            <div className="bar__metadata"><span>{code.title}</span><span>{code.percent}%</span></div>
            <div className="bar__bg"><div className="bar__value" style={{"width": `${code.percent}%`}}></div></div>
        </>
    );
}

export default CodingBar2;