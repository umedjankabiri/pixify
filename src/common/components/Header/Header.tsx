import { Card } from "common/components/Card/Card.tsx";
import stl from "./Header.module.css";
import { ModalRadix } from "common/components/ModalRadix/ModalRadix.tsx";

export const Header = () => {
  return (
    <div className={stl.headerWrapper}>
      <div className={stl.container}>
        <h3>logotype</h3>
        <Card />
        <ModalRadix />
      </div>
    </div>
  );
};
