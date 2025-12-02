"use client";

import { Button, ButtonProps } from "antd";

export const TealButton = ({ className = "", ...props }: ButtonProps) => (
  <Button
    {...props}
    className={`
      bg-teal-500! text-black! border-teal-500!
      hover:bg-teal-600! hover:border-teal-600!
      focus:bg-teal-600! focus:border-teal-600!
      active:bg-teal-700! active:border-teal-700!
      ${className}
    `}
  />
);




