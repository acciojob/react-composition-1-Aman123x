import React,{useState} from "react";
// import App from "./App";

const Tabs=({tabData})=>{

    const [activeTab,setActiveTab]=useState(tabData[0]);

    return(
        <div>
            <ul>
                {
                    tabData.map((item)=>(
                        <li onClick={()=>setActiveTab(item)}>{item.title}</li>
                    ))
                }
            </ul>
            <div>
                {
                    activeTab && <p>{activeTab.content}</p>
                }
            </div>
        </div>
    )
}

export default Tabs;