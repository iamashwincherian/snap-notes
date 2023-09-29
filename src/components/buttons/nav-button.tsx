import { HeroIconType } from "@/types";
import clsx from "@/utils/clsx";
import { MouseEventHandler } from "react";

interface NavButtonProps {
  label: string;
  icon?: HeroIconType;
  selected?: boolean;
  onClick?: Function;
}

export default function NavButton({
  label,
  selected = false,
  icon: Icon,
  onClick,
}: NavButtonProps) {
  return (
    <div
      className={clsx(
        "flex items-center font-medium transition-all hover:bg-zinc-800 w-fit py-2 px-5 rounded-full cursor-pointer my-2",
        selected ? "text-white bg-zinc-800" : "text-zinc-800 hover:text-white"
      )}
      onClick={() => onClick && onClick()}
    >
      {Icon && <Icon className="w-5 h-5 mr-4 mb-[2px]" />}
      {label}
    </div>
  );
}
