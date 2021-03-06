import NavItem from "../../nav/nav-item/nav-item";
import NavSearch from "../../nav/nav-search/nav-search";
import UserAvatar from "../user-avatar/user-avatar";

import slider from "../../../public/slider.png";
import add from "../../../public/add.png";
import moon from "../../../public/moon.png";

import { useCallback } from "react";

export default function NavBar({ selected, setSelected, indent }) {
  const handlePostChange = useCallback(
    (val) => {
      setSelected(val);
    },
    [setSelected]
  );

  return (
    <div className="h-20 w-full flex border-solid border-l-[1px] border-bl">
      <section className="flex flex-row items-center bg-magic-1 w-full">
        <div className="flex flex-row items-center">
          <NavItem
            src={slider}
            href="#"
            text="Show/Hide"
            customClickEvent={HideSideBar}
          />
          <NavSearch />
        </div>
        <div className="flex flex-row items-center w-full justify-end mr-4">
          <NavItem
            src={moon}
            href="#"
            text="Switch theme"
            reverse
            customClickEvent={() => switchTheme()}
          />
          <NavItem
            src={add}
            href="#"
            text={`New ${indent == null ? "Forum" : "Post"}`}
            reverse
            customClickEvent={() => handlePostChange(0)}
          />
          <UserAvatar />
        </div>
      </section>
    </div>
  );
}

export function HideSideBar() {
  document.querySelector("#sidebar").classList.toggle("hidden");
}

export function switchTheme() {
  let act = document.querySelector("#main");
  act.classList.toggle("dark");
}
