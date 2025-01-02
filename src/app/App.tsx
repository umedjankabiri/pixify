import "app/App.css";
import { Header } from "common/components/Header/Header.tsx";
import { Post } from "common/components/Post/Post.tsx";
import { CheckboxRadix } from "common/components/CheckboxRadix/CheckboxRadix.tsx";
import { useState } from "react";
import { SelectRadix } from "common/components/SelectRadix/SelectRadix.tsx";
import { TabsRadix } from "common/components/TabsRadix/TabsRadix";
import { DropdownMenuRadix } from "common/components/DropdownRadix/DropdownMenuRadix.tsx";
import { RadioGroupRadix } from "common/components/RadioGroupRadix/RadioGroupRadix.tsx";
import { Typography } from "common/components/Typography/Typography.tsx";

function App() {
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <div style={{ backgroundColor: "#8d9094" }}>
      <Header />
      <Post />
      <CheckboxRadix checked={checked} setChecked={setChecked} />
      <SelectRadix value={"1"} />
      <SelectRadix value={"2"} />
      <TabsRadix />
      <DropdownMenuRadix />
      <RadioGroupRadix />
      <Typography variant={"h1"} color={"primary"} align={"center"}>
        I am using my Typography component, with primary color
      </Typography>
      <Typography variant={"h1"} color={"secondary"} align={"center"}>
        I am using my Typography component, with secondary color
      </Typography>
      <Typography variant={"h1"} color={"success"} align={"center"}>
        I am using my Typography component, with success color
      </Typography>
      <Typography variant={"h1"} color={"warning"} align={"center"}>
        I am using my Typography component, with warning color
      </Typography>
      <Typography variant={"h1"} color={"error"} align={"center"}>
        I am using my Typography component, with error color
      </Typography>
    </div>
  );
}

export default App;
