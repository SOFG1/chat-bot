import React, { useCallback } from "react";
import s from "./TextArea.module.scss";

interface IProps {
  value: string;
  onChange: (v: string) => void;
  onEnterPress?: () => void
  placeholder?: string;
  className?: string
}

const TextArea = React.memo(({ value, onChange, placeholder, className, onEnterPress }: IProps) => {

  const handleEnterPress = useCallback((e: any) => {
    if(onEnterPress && e.key === "Enter") {
      onEnterPress()
    }
  }, [onEnterPress])

  return (
    <textarea
      className={`${s.textarea} ${className ? className : ""}`}
      value={value}
      onKeyUp={handleEnterPress}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
    ></textarea>
  );
});

export default TextArea;
