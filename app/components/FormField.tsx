import { forwardRef } from "react";
// @ts-ignore
const FormField = forwardRef(
  (
    {
      inputType = "",
      isTextArea = false,
      isSelect = false,
      options = [],
      labelName = "",
      labelColor = "",
      placeholder = "",
      error = "",
      handleChange = (...args: any[]) => {},
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
            ref={ref}
            rows={5}
            {...props}
          />
        ) : isSelect ? (
          <select
            ref={ref}
            className="select select-bordered select-primary rounded focus:border-none text-white"
          >
            <option disabled>Pick one</option>
            {options.map((option: any) => (
              <option key={option.id} value={option.value}>
                {option.text}
              </option>
            ))}
          </select>
        ) : (
          <input
            type={inputType}
            placeholder={placeholder}
            className={
              inputType == "file"
                ? "file-input file-input-bordered file-input-primary w-full min-w-[100px] sm:min-w-[300px] rounded"
                : "input input-bordered input-primary min-w-[100px] sm:min-w-[300px] w-full rounded focus:border-none text-white"
            }
            onChange={handleChange}
            ref={ref}
            {...props}
          />
        )}
        {error && <p className={"text-sm text-red-400"}>{error}</p>}
      </label>
    );
  },
);

export default FormField;
