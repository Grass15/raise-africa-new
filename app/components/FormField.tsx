import { forwardRef } from "react";
// @ts-ignore
const FormField = forwardRef(
  (
    {
      //@ts-ignore
      inputType = "",
      //@ts-ignore
      isTextArea = false,
      //@ts-ignore
      isSelect = false,
      //@ts-ignore
      options = [],
      //@ts-ignore
      labelName = "",
      //@ts-ignore
      labelColor = "",
      //@ts-ignore
      placeholder = "",
      //@ts-ignore
      error = "",
      //@ts-ignore
      handleChange = (...args: any[]) => {},
      //@ts-ignore
      accept = "",
      ...props
    },
    ref,
  ) => {
    return (
      <label className="form-control w-full flex-1 flex flex-col">
        <div className="label">
          <span className={"label-text" + labelColor}>{labelName}</span>
        </div>
        {}
        {isTextArea ? (
          <textarea
            className="textarea textarea-bordered textarea-primary rounded text-white"
            placeholder={placeholder}
            //@ts-ignore
            ref={ref}
            rows={5}
            {...props}
          />
        ) : isSelect ? (
          <select
            //@ts-ignore
            ref={ref}
            {...props}
            className="select w-full min-w-[100px] sm:min-w-[300px] select-bordered select-primary rounded focus:border-none text-white"
          >
            <option disabled>Pick one</option>
            {options.map((option: any) => (
              <option key={option.key} value={option.value}>
                {option.text}
              </option>
            ))}
          </select>
        ) : inputType == "file" ? (
          <input
            type={inputType}
            placeholder={placeholder}
            accept={accept}
            className={
              "file-input file-input-bordered file-input-primary w-full min-w-[100px] sm:min-w-[300px] rounded"
            }
            // onChange={handleChange}
            //@ts-ignore
            ref={ref}
            {...props}
          />
        ) : (
          <input
            type={inputType}
            placeholder={placeholder}
            className={
              "input input-bordered input-primary min-w-[100px] sm:min-w-[300px] w-full rounded focus:border-none text-white"
            }
            // onChange={handleChange}
            //@ts-ignore
            ref={ref}
            {...props}
          />
        )}
        {error && <p className={"text-sm text-red-400"}>{error}</p>}
      </label>
    );
  },
);

FormField.displayName = "FormField";

export default FormField;
