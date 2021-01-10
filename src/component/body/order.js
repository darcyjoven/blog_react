import { useState } from "react";


// 提供获取排序信息
function  getOrder(){
    
}

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