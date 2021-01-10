function InputSearch() {
    return (
        <input
            type="text" maxLength={100}  autoComplete="off" role="combobox" aria-controls=""
            aria-expanded="false" aria-autocomplete="list"
            aria-activedescendant="AutoComplete2--1" id="Popover1-toggle"
            aria-haspopup="true" aria-owns="Popover1-content" className="Input"
            placeholder="请输入搜索内容" value="">
        </input>
    )
}
export{
    InputSearch
}