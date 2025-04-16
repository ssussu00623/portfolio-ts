import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Article2: React.FC<{type: string}> = ({type}) => {

    const [data, setData] = useState([]);
    const [tools, setTools] = useState([]);
    const [etc, setEtc] = useState([]);
    useEffect(()=>{
        axios('data/article.json')
            .then((res)=>{
                setData(res.data)
                setTools(res.data.tools)
                setEtc(res.data.etc)
            }
        )
            .catch(error => console.log(error))
    })
    /*
    const data = {
        "tools": [
            "Visual Studio Code",
            "IntelliJ",
            "Android Studio Code",
            "iOS development tools",
            "Eclipse"
        ],
        "etc":[
            "Git",
            "Scrum Master",
            "SVN"
        ]
    }; 
*/  

    return (
        <article className="skills__tools">
            <h3 className="skill__title">{type}</h3>
            <ul>
                {type === 'Tools' ? 
                    tools.map(item =>
                        <li>{item}</li>
                    )
                    : etc.map(item => 
                        <li>{item}</li>
                    )
                }                
            </ul>
        </article>
    );
}

export default Article2;