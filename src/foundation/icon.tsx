import React from "react";
import cn from "classnames";

export type IIconProps = React.HTMLAttributes<HTMLElement>;

export const Icon = (props: IIconProps) => {
  const { className, ...restProps } = props;
  return <i className={cn("material-icons", className)} {...restProps}></i>;
};
