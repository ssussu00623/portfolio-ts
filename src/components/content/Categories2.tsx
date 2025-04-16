import React, { useEffect, useState } from 'react';
import Category2 from './Category2';
import axios from 'axios';

type Category = {
    name: string;
    count: number;
}

const Categories2: React.FC = () => {
    const [selected, setSelected] = useState('All');
    const [categoryList, setCategoryList] = useState<Category[]>([]); // 데이터를 직접 담는 곳에서 타입 체크 진행

    useEffect(() => {
        axios.get('data/category.json')
            .then((res) => setCategoryList(res.data))
            .catch((error) => console.log(error));
    }, []);

    const handleSelected = (name: string) => {
        setSelected(name);
    }

    return (
        <ul className="categories">
            {categoryList && categoryList.map((category) =>  
                <li>
                    <Category2 
                            category={category}
                            click={handleSelected}
                            style={category.name === selected ? // category.name 값을 사용하는 경우 타입 정의가 필요
                                    'category category--selected'
                                    : 'category'
                            }
                            />
                </li>
            )}
        </ul>
    );
}

export default Categories2;