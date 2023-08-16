import React from "react";
import s from "./TextArea.module.scss";

interface IProps {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  className?: string
}

const TextArea = React.memo(({ value, onChange, placeholder, className }: IProps) => {
  return (
    <textarea
      className={`${s.textarea} ${className ? className : ""}`}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
    ></textarea>
  );
});

export default TextArea;
