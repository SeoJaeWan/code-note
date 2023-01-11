import React from "react";
import { useState } from "react";
import { BsChevronDoubleLeft } from "@react-icons/all-files/bs/BsChevronDoubleLeft";
import { BsChevronDoubleRight } from "@react-icons/all-files/bs/BsChevronDoubleRight";
import { BiExport } from "@react-icons/all-files/bi/BiExport";
import { BiImport } from "@react-icons/all-files/bi/BiImport";
import { Inner, Menu, ToggleButton } from "./Style";

const SideBar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggleButton = () => {
    setToggle((prev) => !prev);
  };

  return (
    <Menu>
      <ToggleButton
        type="button"
        isHidden={!toggle}
        data-testid="showButton"
        onClick={handleToggleButton}
      >
        <BsChevronDoubleRight size={20} />
      </ToggleButton>
      <Inner>
        <ToggleButton
          type="button"
          isHidden={toggle}
          data-testid="hiddenButton"
          onClick={handleToggleButton}
        >
          <BsChevronDoubleLeft size={20} />
        </ToggleButton>
        <button type="button">
          <BiExport />
          Export
        </button>
        <button type="button">
          <BiImport />
          Import
        </button>
      </Inner>
    </Menu>
  );
};

export default SideBar;
