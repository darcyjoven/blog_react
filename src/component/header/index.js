/*
 * @Date: 2021-01-12 09:05:28
 * @LastEditors: Darcy
 * @LastEditTime: 2021-01-15 14:20:22
 * @FilePath: /blog_react_js/src/component/header/index.js
 * @Description: 
 */
 
import { BlogTitle } from './blogtitle'
import { HeaderMenu } from './menu'
import { InputSearch } from './inputSearch'
import { headMenus as menus,blogNmae as blog} from '../../demodata.js'


function HeaderAll() { 

    return (
        <div className="AppHeader-inner css-0">
            {/* 右上角名称 */}
            <BlogTitle blog={blog} />
            {/* 菜单导航 */}
            <ul role="navigation" className="Tabs AppHeader-Tabs css-0">
                <HeaderMenu key ='1' menus={menus}></HeaderMenu>
            </ul>
            {/* 搜索框 */}
            <div className="css-1acwmmj">
                <div className="SearchBar AppHeader-SearchBar css-0" role="search"
                    data-za-module="PresetWordItem">
                    <form className="SearchBar-tool">
                        <div>
                            <div className="Popover">
                                <label
                                    className="SearchBar-input Input-wrapper Input-wrapper--grey">
                                    <InputSearch></InputSearch>
                                    <button aria-label="搜索" type="button"
                                        className="Button SearchBar-searchButton Button--primary">
                                        <span style={{ display: "inline-flex", alignItems: "center" }} >
                                            <svg
                                                className="Zi Zi--Search SearchBar-searchIcon"
                                                fill="currentColor" viewBox="0 0 24 24" width="18"
                                                height="18">
                                                <path
                                                    d="M17.068 15.58a8.377 8.377 0 0 0 1.774-5.159 8.421 8.421 0 1 0-8.42 8.421 8.38 8.38 0 0 0 5.158-1.774l3.879 3.88c.957.573 2.131-.464 1.488-1.49l-3.879-3.878zm-6.647 1.157a6.323 6.323 0 0 1-6.316-6.316 6.323 6.323 0 0 1 6.316-6.316 6.323 6.323 0 0 1 6.316 6.316 6.323 6.323 0 0 1-6.316 6.316z"
                                                    fill-rule="evenodd" >
                                                </path>
                                            </svg>
                                        </span>
                                    </button>
                                </label>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export {
    HeaderAll
}