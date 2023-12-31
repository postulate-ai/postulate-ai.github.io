import { AnchorHTMLAttributes, ReactElement } from "react";

export default function ExternalAnchor({
  children,
  target = "_blank",
  rel = "noopener noreferrer",
  ...rest
}: AnchorHTMLAttributes<HTMLAnchorElement>): ReactElement {
  return (
    <a target={target} rel={rel} {...rest}>
      {children}
    </a>
  );
}
