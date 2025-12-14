import { NavLink } from "react-router";
import { ModeToggle } from "./mode-toggle";
import { ChevronDown, PhoneCall } from "lucide-react";

export default function Header() {
  const links = [
    { to: "/", label: "Home", backdrop: "" },
    { to: "/packages", label: "Packages", backdrop: <ChevronDown /> },
    { to: "/bft", label: "BFT", backdrop: <ChevronDown /> },
    { to: "/options", label: "Options", backdrop: <ChevronDown /> },
    { to: "/info", label: "Info", backdrop: <ChevronDown /> },
    { to: "/agreement", label: "Agreement", backdrop: "" },
  ] as const;

  return (
    <div>
      <div className="flex justify-between items-center  px-2 py-1">
        <div className=" text-3xl ml-7"> logo</div>
        <nav className="flex gap-6 text-xl items-center justify-center">
          {links.map(({ to, label, backdrop }) => {
            return (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) => (isActive ? "font-bold" : "")}
                end
              >
                <div className=" flex">
                  {label}
                  {backdrop}
                </div>
              </NavLink>
            );
          })}
        </nav>
        <div className="flex items-center gap-2">
          <div className=" flex gap-1.5 text-3xl border p-3 rounded-2xl border-black ">
            <PhoneCall /> 13001100031
          </div>
          <ModeToggle />
        </div>
      </div>
      <hr />
    </div>
  );
}
