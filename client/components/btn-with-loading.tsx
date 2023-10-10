import { FC } from "react";
import { ImSpinner } from "react-icons/im";

interface Props {
  isLoading: boolean;
  content: string;
  customClasses?: string;
  type?: "submit" | "button";
  onClick?: any;
}

const BtnWithLoading: FC<Props> = ({
  isLoading,
  content,
  customClasses,
  type,
  onClick,
}): JSX.Element => {
  return (
    <button
      className={`primary-btn w-full ${customClasses}`}
      type={type}
      onClick={onClick && onClick}
    >
      {isLoading ? (
        <>
          <ImSpinner className="animate-spin" size={18} /> Processing
        </>
      ) : (
        <>{content}</>
      )}
    </button>
  );
};

export default BtnWithLoading;
