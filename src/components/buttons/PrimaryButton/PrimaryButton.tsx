import "./PrimaryButton.scss";

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

export const Button = ({ onClick, children }: ButtonProps) => {
  return (
    <button className={"btn"} onClick={onClick}>
      {children}
    </button>
  );
};
