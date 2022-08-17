import React, { useState } from "react";

const Menu: React.FC = (): JSX.Element => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [selectMenu, setSelectMenu] = useState();
  const menu = () => {
    return ["Injio", "Staff Directory", "Contact Us", "FAQs"];
  };

  const toggleDropDown = () => {
    setShowDropDown(!showDropDown);
  };

  const dismissHandler = (event: React.FocusEvent<HTMLButtonElement>): void => {
    if(event.currentTarget === event.target) {
      setShowDropDown(false);
    }
  };

const menuSelection = (menu: string) => {
  setSelectMenu(menu);
};

return (
  <>
    <div>
      <div>
        {selectMenu ? `You selected ${selectMenu}`
        : "Select something"}
      </div>
    </div>
    <button
      onClick={(): void => toggleDropDown()}
      onBlur={(e): React.FocusEvent<HTMLButtonElement>: void =></HTMLButtonElement>}
    >
        {selectMenu ? "Select:" + selectMenu: "select something"} </div>
        {showDropDown && (
          <Drop 
            menus = {menus()}
            showDropDown={false}
            toggleDropDown={(): void => toggleDropDown()}
            menuSelection={menuSelection}
            />
            )}
            </button>
      </div>
    </div>
  
  </>
)





};


export default Menu;