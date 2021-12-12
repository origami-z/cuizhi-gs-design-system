import React, { HTMLAttributes } from "react";
import cn from "classnames";

import styles from "./Grid.module.css";

export const DocGrid = ({
  className,
  ...restProps
}: HTMLAttributes<HTMLDivElement>) => {
  return <div className={cn(styles.grid, className)} {...restProps}></div>;
};

export const DocCell = ({
  className,
  ...restProps
}: HTMLAttributes<HTMLDivElement>) => {
  return <div className={cn(styles.gridCell, className)} {...restProps}></div>;
};
