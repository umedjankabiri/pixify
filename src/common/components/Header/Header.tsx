import { Card } from "common/components/Card/Card.tsx";
import stl from "./Header.module.css";
import { Button } from "common/components/Button/Button.tsx";

export const Header = () => {
  return (
    <div className={stl.headerWrapper}>
      <div className={stl.container}>
        <h3>logotype</h3>
        <Button asChild>
          <a href={"/sign-up"}>Sign Up</a>
        </Button>
        <Card />
      </div>
    </div>
  );
};
