export type ButtonProps = {
  text: string;
  onClick: () => void;
};

export const Button = ({ text, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="text-xl font-bold rounded-md px-4 py-2 ml-2 bg-gradient-to-r from-brandred to-brandblue text-white"
    >
      {text}
    </button>
  );
};
