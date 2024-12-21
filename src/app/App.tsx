import "app/App.css";
import { Header } from "common/components/Header/Header.tsx";
import { Post } from "common/components/Post/Post.tsx";
import { CheckboxRadix } from "common/components/CheckboxRadix/CheckboxRadix.tsx";
import { useState } from "react";
import { SelectRadix } from "common/components/SelectRadix/SelectRadix.tsx";

function App() {
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <>
      <Header />
      <Post />
      <CheckboxRadix checked={checked} setChecked={setChecked} />
      <SelectRadix value={"1"} />
      <SelectRadix value={"2"} />
    </>
  );
}

export default App;
