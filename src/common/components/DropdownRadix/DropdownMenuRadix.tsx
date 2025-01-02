import React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { HamburgerMenuIcon, DotFilledIcon, CheckIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import stl from "common/components/DropdownRadix/DropdownMenuRadix.module.css";

export const DropdownMenuRadix = () => {
  const [bookmarksChecked, setBookmarksChecked] = React.useState(true);
  const [urlsChecked, setUrlsChecked] = React.useState(false);
  const [person, setPerson] = React.useState("pedro");

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className={stl.IconButton} aria-label="Customise options">
          <HamburgerMenuIcon />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className={stl.Content} sideOffset={5}>
          <DropdownMenu.Item className={stl.Item}>
            New Tab <div className={stl.RightSlot}>⌘+T</div>
          </DropdownMenu.Item>
          <DropdownMenu.Item className={stl.Item}>
            New Window <div className={stl.RightSlot}>⌘+N</div>
          </DropdownMenu.Item>
          <DropdownMenu.Item className={stl.Item} disabled>
            New Private Window <div className={stl.RightSlot}>⇧+⌘+N</div>
          </DropdownMenu.Item>
          <DropdownMenu.Sub>
            <DropdownMenu.SubTrigger className={stl.SubTrigger}>
              More Tools
              <div className={stl.RightSlot}>
                <ChevronRightIcon />
              </div>
            </DropdownMenu.SubTrigger>
            <DropdownMenu.Portal>
              <DropdownMenu.SubContent className={stl.SubContent} sideOffset={2} alignOffset={-5}>
                <DropdownMenu.Item className={stl.Item}>
                  Save Page As… <div className={stl.RightSlot}>⌘+S</div>
                </DropdownMenu.Item>
                <DropdownMenu.Item className={stl.Item}>Create Shortcut…</DropdownMenu.Item>
                <DropdownMenu.Item className={stl.Item}>Name Window…</DropdownMenu.Item>
                <DropdownMenu.Separator className={stl.Separator} />
                <DropdownMenu.Item className={stl.Item}>Developer Tools</DropdownMenu.Item>
              </DropdownMenu.SubContent>
            </DropdownMenu.Portal>
          </DropdownMenu.Sub>

          <DropdownMenu.Separator className={stl.Separator} />

          <DropdownMenu.CheckboxItem
            className={stl.CheckboxItem}
            checked={bookmarksChecked}
            onCheckedChange={setBookmarksChecked}
          >
            <DropdownMenu.ItemIndicator className={stl.ItemIndicator}>
              <CheckIcon />
            </DropdownMenu.ItemIndicator>
            Show Bookmarks <div className={stl.RightSlot}>⌘+B</div>
          </DropdownMenu.CheckboxItem>
          <DropdownMenu.CheckboxItem
            className={stl.CheckboxItem}
            checked={urlsChecked}
            onCheckedChange={setUrlsChecked}
          >
            <DropdownMenu.ItemIndicator className={stl.ItemIndicator}>
              <CheckIcon />
            </DropdownMenu.ItemIndicator>
            Show Full URLs
          </DropdownMenu.CheckboxItem>

          <DropdownMenu.Separator className={stl.Separator} />

          <DropdownMenu.Label className={stl.Label}>People</DropdownMenu.Label>
          <DropdownMenu.RadioGroup value={person} onValueChange={setPerson}>
            <DropdownMenu.RadioItem className={stl.RadioItem} value="pedro">
              <DropdownMenu.ItemIndicator className={stl.ItemIndicator}>
                <DotFilledIcon />
              </DropdownMenu.ItemIndicator>
              Pedro Duarte
            </DropdownMenu.RadioItem>
            <DropdownMenu.RadioItem className={stl.RadioItem} value="colm">
              <DropdownMenu.ItemIndicator className={stl.ItemIndicator}>
                <DotFilledIcon />
              </DropdownMenu.ItemIndicator>
              Colm Tuite
            </DropdownMenu.RadioItem>
          </DropdownMenu.RadioGroup>

          <DropdownMenu.Arrow className={stl.Arrow} />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};
