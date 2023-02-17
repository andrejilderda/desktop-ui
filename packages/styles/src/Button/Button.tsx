import "./../../dist/module/button/button.module.css";
import styles from "./button.module.css";
import clsx from "clsx";
import React from "react";

// import classes from "./Button.module.css";
// export const Button = () =>
//     children: React.ReactNode;
//     classNames?: string | string[];
//   {
//     // return null;
//     return <button className="button">Button</button>;
//   };

export const Button = ({
  children,
  classNames,
}: {
  children: React.ReactNode;
  classNames?: string | string[];
}) => {
  return (
    <button className={clsx(styles.button, classNames)}>{children}</button>
  );
};
