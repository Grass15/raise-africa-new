const ProjectDescription = ({ subtitle = "", description = "" }) => {
  return (
    <div className={"flex flex-col items-center w-96"}>
      <h4
        className={
          "font-semibold text-lg px-3 py-1 bg-[#222221] w-full text-primary rounded-t-sm"
        }
      >
        {subtitle}
      </h4>
      <p
        className={
          "text-sm w-full text-[#7D7D7D] bg-secondary rounded-b-sm px-3 py-2 h-32"
        }
      >
        {description}
      </p>
    </div>
  );
};

export default ProjectDescription;
