import Link from "next/link";
import { FC, FormEvent } from "react";
import { IconType } from "react-icons";

interface Props {
  onClick?: any;
  content: string;
  icon?: IconType;
  iconBehind?: IconType;
  iconSize?: number;
  href?: string;
  customClasses?: string;
  type?: string;
  to?: string;
  external?: boolean;
}

const BtnWithIcon: FC<Props> = ({
  onClick,
  content,
  icon,
  iconBehind,
  href,
  iconSize,
  customClasses,
  type,
  to,
  external,
}): JSX.Element => {
  let Component = "button" as any;
  if (!onClick && href) {
    Component = "a" as any;
  }

  if (!onClick && to) {
    Component = Link as any;
  }

  let externalLinkAttr = {};
  if (external) {
    externalLinkAttr = { target: "_blank", rel: "noopener noreferrer" };
  }

  return (
    <Component
      href={href || to}
      onClick={onClick}
      className={`primary-btn ${customClasses}`}
      type={type}
      {...externalLinkAttr}
    >
      {icon && icon({ size: iconSize })}
      {content}

      {iconBehind && iconBehind({ size: iconSize })}
    </Component>
  );
};

export default BtnWithIcon;
