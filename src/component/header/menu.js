import { useState } from "react"

function HeaderMenu(props) {
    const [activeId,setActiveId]=useState(1);
    return (
        <ul role="navigation" className="Tabs AppHeader-Tabs css-0">
            {
                props.menus.map(menu=>(
                    <li role="tab" className="Tabs-item AppHeader-Tab Tabs-item--noMeta">
                        <a className={"Tabs-link AppHeader-TabsLink "+(menu.id===activeId?"is-active":"")}/* "Tabs-link AppHeader-TabsLink is-active" */ 
                           key={menu.id} href={menu.link} onClick={()=>setActiveId(menu.id)} data-za-not-track-link="true">
                            {menu.content}
                        </a>
                    </li>
                )) 
            }
        </ul>
    )
}
export {
    HeaderMenu
}