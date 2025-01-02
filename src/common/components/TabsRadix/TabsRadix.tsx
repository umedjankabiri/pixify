import { FC } from "react";
import * as Tabs from "@radix-ui/react-tabs";
import stl from "common/components/TabsRadix/TabsRadix.module.css";

export const TabsRadix: FC = () => {
  return (
    <Tabs.Root className={stl.Root} defaultValue="tab1">
      <Tabs.List className={stl.List} aria-label="Manage your account">
        <Tabs.Trigger className={stl.Trigger} value="tab1">
          Account
        </Tabs.Trigger>
        <Tabs.Trigger className={stl.Trigger} value="tab2">
          Password
        </Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content className={stl.Content} value="tab1">
        <p className={stl.Text}>Make changes to your account here. Click save when you're done.</p>
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
        <div style={{ display: "flex", marginTop: 20, justifyContent: "flex-end" }}>
          <button className={`${stl.Button} green`}>Save changes</button>
        </div>
      </Tabs.Content>
      <Tabs.Content className={stl.Content} value="tab2">
        <p className={stl.Text}>Change your password here. After saving, you'll be logged out.</p>
        <fieldset className={stl.Fieldset}>
          <label className={stl.Label} htmlFor="currentPassword">
            Current password
          </label>
          <input className={stl.Input} id="currentPassword" type="password" />
        </fieldset>
        <fieldset className={stl.Fieldset}>
          <label className={stl.Label} htmlFor="newPassword">
            New password
          </label>
          <input className={stl.Input} id="newPassword" type="password" />
        </fieldset>
        <fieldset className={stl.Fieldset}>
          <label className={stl.Label} htmlFor="confirmPassword">
            Confirm password
          </label>
          <input className={stl.Input} id="confirmPassword" type="password" />
        </fieldset>
        <div style={{ display: "flex", marginTop: 20, justifyContent: "flex-end" }}>
          <button className={`${stl.Button} green`}>Change password</button>
        </div>
      </Tabs.Content>
    </Tabs.Root>
  );
};
