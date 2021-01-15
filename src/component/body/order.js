/*
 * @Date: 2021-01-12 09:05:28
 * @LastEditors: Darcy
 * @LastEditTime: 2021-01-15 13:05:36
 * @FilePath: /blog_react_js/src/component/body/order.js
 * @Description: 
 */
import { useState } from "react"; 

function OrderBy(props) {
    const [activeId, setActiveId] = useState(1); 
    return (
        <nav className="TopstoryTabs Topstory-tabs">
            {
                props.orderbys.map(
                    orderby => (
                        <a aria-controls={(orderby.id === activeId ? "Topstory-recommend" : "Topstory-follow")}
                            className={"TopstoryTabs-link Topstory-tabsLink" + (orderby.id === activeId ? " is-active" : "")}
                            data-za-detail-view-id="9122"
                            data-za-extra="{&quot;button&quot;:{&quot;text&quot;:&quot;推荐&quot;}}"
                            href={orderby.link} key={orderby.id} onClick={() => setActiveId(orderby.id)}>
                            {orderby.content}
                        </a>
                    )
                )
            }
        </nav>
    )
}
export {
    OrderBy
}