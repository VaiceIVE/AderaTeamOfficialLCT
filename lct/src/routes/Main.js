import React from "react";
import LastProjects from "../components/LastProjects";

import Projects from "../components/Projects";
import Qa from "../components/Qa";


export default function Main() {
    
    return(
        <div>
            <Qa/>
            <Projects/>
            <LastProjects/>
        </div>
    )
}

