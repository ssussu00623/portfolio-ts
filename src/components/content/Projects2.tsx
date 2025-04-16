import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Project2 from './Project2';


const Projects2: React.FC = () => {

    const [projectList, setProjectList] = useState([]);

    useEffect(() => {
        axios('data/project.json')
            .then((res) => setProjectList(res.data))
            .catch((error) => console.log(error));
    }, [])
    /*
    const projectList = [
            {
                "img" : "images/projects/project1.webp",
                "alt" : "project1",
                "title" : "Project #1",
                "description" : "Clone Coding with HTML, CSS",
            },
            {
                "img" : "images/projects/project2.webp",
                "alt" : "project1",
                "title" : "Project #1",
                "description" : "Clone Coding with HTML, CSS",
            },
            {
                "img" : "images/projects/project3.webp",
                "alt" : "project1",
                "title" : "Project #1",
                "description" : "Clone Coding with HTML, CSS",
            },
            {
                "img" : "images/projects/project4.webp",
                "alt" : "project1",
                "title" : "Project #1",
                "description" : "Clone Coding with HTML, CSS",
            },
            {
                "img" : "images/projects/project5.webp",
                "alt" : "project1",
                "title" : "Project #1",
                "description" : "Clone Coding with HTML, CSS",
            },
            {
                "img" : "images/projects/project6.webp",
                "alt" : "project1",
                "title" : "Project #1",
                "description" : "Clone Coding with HTML, CSS",
            },
            {
                "img" : "images/projects/project7.webp",
                "alt" : "project1",
                "title" : "Project #1",
                "description" : "Clone Coding with HTML, CSS",
            },
            {
                "img" : "images/projects/project8.webp",
                "alt" : "project1",
                "title" : "Project #1",
                "description" : "Clone Coding with HTML, CSS",
            },
        ];
        */
    return (
        <ul className="projects">
            {projectList && projectList.map((project) =>
                <li className="project">
                    <Project2 project={project} /> 
                </li>
            )}
        </ul>
    );
}

export default Projects2;