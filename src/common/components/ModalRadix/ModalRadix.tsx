import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import stl from "common/components/ModalRadix/ModalRadix.module.css";

export const ModalRadix = () => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <button className={`${stl.Button} violet`}>Edit profile</button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className={stl.Overlay} />
      <Dialog.Content className={stl.Content}>
        <Dialog.Title className={stl.Title}>Edit profile</Dialog.Title>
        <Dialog.Description className={stl.Description}>
          Make changes to your profile here. Click save when you're done.
        </Dialog.Description>
        <fieldset className={stl.Fieldset}>
          <label className={stl.Label} htmlFor="name">
            Name
          </label>
          <input className={stl.Input} id="name" defaultValue="Pedro Duarte" />
        </fieldset>
        <fieldset className={stl.Fieldset}>
          <label className={stl.Label} htmlFor="username">
            Username
          </label>
          <input className={stl.Input} id="username" defaultValue="@peduarte" />
        </fieldset>
        <div style={{ display: "flex", marginTop: 25, justifyContent: "flex-end" }}>
          <Dialog.Close asChild>
            <button className={`${stl.Button} green`}>Save changes</button>
          </Dialog.Close>
        </div>
        <Dialog.Close asChild>
          <button className={stl.IconButton} aria-label="Close">
            <Cross2Icon />
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);
