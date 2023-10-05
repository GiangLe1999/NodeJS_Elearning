import { FC } from "react";
import { ImSpinner } from "react-icons/im";

interface Props {
  isLoading: boolean;
  content: string;
  customClasses?: string;
  type?: "submit" | "button";
}

const BtnWithLoading: FC<Props> = ({
  isLoading,
  content,
  customClasses,
  type,
}): JSX.Element => {
  return (
    <button className={`primary-btn w-full ${customClasses}`} type={type}>
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
