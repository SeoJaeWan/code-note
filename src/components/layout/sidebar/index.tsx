import { BsChevronDoubleLeft } from "@react-icons/all-files/bs/BsChevronDoubleLeft";
import { BsChevronDoubleRight } from "@react-icons/all-files/bs/BsChevronDoubleRight";
import { BiExport } from "@react-icons/all-files/bi/BiExport";
import { BiImport } from "@react-icons/all-files/bi/BiImport";
import { Inner, Menu, ToggleButton } from "./Style";

const SideBar = () => {
  return (
    <Menu>
      <ToggleButton type="button" isHidden={true}>
        <BsChevronDoubleRight data-testid="showButton" size={20} />
      </ToggleButton>
      <Inner>
        <ToggleButton type="button" isHidden={false}>
          <BsChevronDoubleLeft data-testid="hiddenButton" size={20} />
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
