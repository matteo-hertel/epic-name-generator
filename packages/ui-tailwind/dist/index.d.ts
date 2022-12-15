type ButtonProps = {
    text: string;
    onClick: () => void;
};
declare const Button: ({ text, onClick }: ButtonProps) => JSX.Element;

export { Button, ButtonProps };
