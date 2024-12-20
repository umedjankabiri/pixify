import "app/App.css";
import { Header } from "common/components/Header/Header.tsx";
import { Post } from "common/components/Post/Post.tsx";
import { CheckboxRadix } from "common/components/CheckboxRadix/CheckboxRadix.tsx";
import { useState } from "react";

function App() {
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <>
      <Header />
      <Post />
      <CheckboxRadix checked={checked} setChecked={setChecked} />
    </>
  );
}

export default App;
