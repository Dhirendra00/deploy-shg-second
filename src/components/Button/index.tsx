type ButtonProps = React.HTMLProps<HTMLButtonElement> & {
  loading?: boolean;
  children: React.ReactNode;
  width?: "full";
  type?: any;
  extraClassName?: string;
  buttonSize?: "small" | "large";
};

export const Button: React.FC<ButtonProps> = ({
  children,
  loading,
  disabled,
  onClick,
  width,
  type = "submit",
  buttonSize = "large",
}: ButtonProps) => {
  const buttonPadding =
    buttonSize === "small" ? "px-3 py-2 shadow-md" : "px-12 py-4 shadow-E400";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled ?? loading}
      className={`flex items-center ${buttonPadding} ${
        width ? "w-full justify-center py-4" : ""
      }  text-center text-xl font-medium text-white  primaryBgColor rounded-sm disabled:opacity-80 gap-x-2 hover:bg-blue-700 shadow-E400 disabled:cursor-not-allowed`}
    >
      {loading ? <div className="loading"></div> : null}
      {children}
    </button>
  );
};

export const GrayButton: React.FC<ButtonProps> = ({
  children,
  loading,
  disabled,
  onClick,
  width,
  type = "submit",
  buttonSize = "large",
}: ButtonProps) => {
  const buttonPadding =
    buttonSize === "small" ? "px-3 py-2 shadow-md" : "px-12 py-4 shadow-E400";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled ?? loading}
      className={`flex items-center ${buttonPadding} ${
        width ? "w-full justify-center py-4" : ""
      }  text-center text-xl font-medium text-white bg-gray-600 rounded-sm disabled:opacity-80 gap-x-2 hover:bg-gray-700 shadow-E400 disabled:cursor-not-allowed`}
    >
      {loading ? <div className="loading"></div> : null}
      {children}
    </button>
  );
};
