import { FieldProps } from "formik";

type InputPropsType = React.HTMLProps<HTMLInputElement> &
  FieldProps & { props: any; unit?: string; inputSize?: string };

export const Input: React.FC<InputPropsType> = ({
  field,
  placeholder,
  id,
  props,
  type,
  value,
  onChange,
  inputSize = "large",
}) => {
  return (
    <div className=" flex flex-col w-full relative space-y-1">
      <label
        htmlFor={id}
        className={
          inputSize === "large"
            ? "text-lg font-semibold text-gray-700 capitalize "
            : "text-base font-semibold text-gray-700 capitalize "
        }
      >
        {field.name}
      </label>

      <input
        className={
          inputSize === "large"
            ? "text-lg ring-1 ring-gray-700 ring-opacity-20 w-full rounded-sm px-6 py-4 shadow-E500 outline-none bg-white focus:bg-white focus:shadow-E100 transition-all duration-200 placeholder-shown:text-gray-400 text-gray-800 focus:ring-[1.5px] focus:ring-blue-700 focus:ring-opacity-90"
            : "text-base ring-1 ring-gray-700 ring-opacity-20 w-full rounded-sm px-3 py-2 shadow-E500 outline-none bg-white focus:bg-white focus:shadow-E100 transition-all duration-200 placeholder-shown:text-gray-400 text-gray-800 focus:ring-[1.5px] focus:ring-blue-700 focus:ring-opacity-90"
        }
        required
        placeholder={placeholder}
        type={type}
        {...field}
        {...props}
      />
    </div>
  );
};

export const TextAreaInput: React.FC<InputPropsType> = ({
  field,
  placeholder,
  id,
  props,
  type,
  value,
  onChange,
  label,
  inputSize = "large",
}) => {
  return (
    <div className=" flex flex-col w-full relative space-y-1">
      <label
        htmlFor={id}
        className={
          inputSize === "large"
            ? "text-lg font-semibold text-gray-700 capitalize "
            : "text-base font-semibold text-gray-700 capitalize"
        }
      >
        {label}
      </label>

      <textarea
        className="h-30 text-lg ring-1 ring-gray-700 ring-opacity-20 w-full rounded-sm px-6 py-4 shadow-E500 outline-none bg-white focus:bg-white focus:shadow-E100 transition-all duration-200 placeholder-shown:text-gray-400 text-gray-800 focus:ring-[1.5px] focus:ring-blue-700 focus:ring-opacity-90"
        required
        placeholder={placeholder}
        type={type}
        {...field}
        {...props}
      />
    </div>
  );
};

type PrimaryInputPropsType = React.HTMLProps<HTMLInputElement> & {
  props?: any;
  inputSize?: string;
};

export const PrimaryInput: React.FC<PrimaryInputPropsType> = ({
  placeholder,
  id,
  props,
  type,
  name,
  value,
  onChange,
  inputSize = "large",
  required = true,
}) => {
  return (
    <div className=" flex flex-col w-full relative space-y-1">
      <label
        htmlFor={id}
        className={
          inputSize === "small"
            ? "text-base font-semibold text-gray-700 capitalize "
            : "text-lg font-semibold text-gray-700 capitalize "
        }
      >
        {name}
      </label>

      <input
        className={
          inputSize === "small"
            ? "text-base ring-1 ring-gray-700 ring-opacity-20 w-full rounded-sm px-3 py-2 shadow-E500 outline-none bg-white focus:bg-white focus:shadow-E100 transition-all duration-200 placeholder-shown:text-gray-400 text-gray-800 focus:ring-[1.5px] focus:ring-blue-700 focus:ring-opacity-90"
            : "text-lg ring-1 ring-gray-700 ring-opacity-20 w-full rounded-sm px-6 py-4 shadow-E500 outline-none bg-white focus:bg-white focus:shadow-E100 transition-all duration-200 placeholder-shown:text-gray-400 text-gray-800 focus:ring-[1.5px] focus:ring-blue-700 focus:ring-opacity-90"
        }
        required={required}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={(e) => onChange && onChange(e)}
        {...props}
      />
    </div>
  );
};

export const UnitInput = ({
  field,
  placeholder,
  id,
  props,
  type,
  value,
  onChange,
  unit,
  label,
  inputSize = "large",
}) => {
  return (
    <div className="  flex flex-col w-full relative space-y-1">
      <label
        htmlFor={id}
        className={
          inputSize === "large"
            ? "text-lg font-semibold text-gray-700 capitalize "
            : "text-base font-semibold text-gray-700 capitalize"
        }
      >
        {label}
      </label>

      <input
        className={
          inputSize === "large"
            ? " text-lg ring-1 ring-gray-700 ring-opacity-20 w-full rounded-sm px-6 py-4 shadow-E500 outline-none bg-white focus:bg-white focus:shadow-E100 transition-all duration-200 placeholder-shown:text-gray-400 text-gray-800 focus:ring-[1.5px] focus:ring-blue-700 focus:ring-opacity-90"
            : "text-base ring-1 ring-gray-700 ring-opacity-20 w-full rounded-sm px-3 py-2 shadow-E500 outline-none bg-white focus:bg-white focus:shadow-E100 transition-all duration-200 placeholder-shown:text-gray-400 text-gray-800 focus:ring-[1.5px] focus:ring-blue-700 focus:ring-opacity-90"
        }
        required
        placeholder={placeholder}
        type={type}
        {...field}
        {...props}
      />
      <div
        className={
          inputSize === "large"
            ? "absolute right-0 rounded-r-sm top-[31.8%] text-lg py-4 px-2 min-w-[3.5rem] flex items-center  justify-center font-semibold text-gray-850 bg-gray-200"
            : "absolute right-0 rounded-r-sm top-[34.8%] text-base py-2 px-2 min-w-[3.5rem] flex items-center  justify-center font-semibold text-gray-850 bg-gray-200"
        }
      >
        {unit}
      </div>
    </div>
  );
};

export const FileInput: React.FC<InputPropsType> = ({
  field,
  placeholder,
  id,
  props,
  type,
  value,
  onChange,
  label,
}) => {
  return (
    <div className=" flex flex-col w-full relative space-y-1">
      <label
        htmlFor={id}
        className="form-label text-lg font-semibold text-gray-700 capitalize "
      >
        {label}
      </label>

      <input
        className="text-lg ring-1 ring-gray-700 ring-opacity-20 w-full rounded-sm px-6 py-2 shadow-E500 outline-none bg-white focus:bg-white focus:shadow-E100 transition-all duration-200 placeholder-shown:text-gray-400 text-gray-800 focus:ring-[1.5px] focus:ring-blue-700 focus:ring-opacity-90"
        required
        placeholder={placeholder}
        type={"file"}
        {...field}
        {...props}
      />
    </div>
  );
};
