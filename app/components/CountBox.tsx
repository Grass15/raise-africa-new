const CountBox = ({ title = "", value = "" }) => {
  return (
    <div className={"flex flex-col items-center w-36"}>
      <h4
        className={
          "font-bold text-3xl p-4 bg-[#222221] w-full text-center truncate text-primary rounded-t-sm"
        }
      >
        {value}
      </h4>
      <p
        className={
          "font-semibold  text-sm w-full bg-secondary rounded-b-sm px-3 py-2 text-center"
        }
      >
        {title}
      </p>
    </div>
  );
};

export default CountBox;
