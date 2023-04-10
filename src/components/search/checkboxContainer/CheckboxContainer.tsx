import React from "react";
import { TSearchParams } from "@/types/commonTypes";
import classes from "./CheckboxContainer.module.css";

interface ICheckboxContainerProps {
  params: string[];
  optionChangeHandler: (checkbox: TSearchParams) => void;
  option: string;
}

const CheckboxContainer: React.FC<ICheckboxContainerProps> = ({
  params,
  option,
  optionChangeHandler,
}) => {
  return (
    <div className={classes.checkboxContainer}>
      {params.map((checkbox) => {
        return (
          <label key={checkbox}>
            {checkbox}
            <input
              onChange={() => optionChangeHandler(checkbox as TSearchParams)}
              type="checkbox"
              checked={option === checkbox}
            />
            <span></span>
          </label>
        );
      })}
    </div>
  );
};

export default React.memo(CheckboxContainer);
