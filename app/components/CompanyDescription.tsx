const ProjectDescription = ({ subtitle = "", description = "" }) => {
  return (
    <div className={"flex flex-col px-3 gap-2 p-2 "}>
      <h4 className={"text-[#7D7D7D] text-sm"}>{subtitle}</h4>
      <p className={"font-medium text-primary"}>
        {description ? description[0].toUpperCase() + description.slice(1) : ""}
      </p>
    </div>
  );
};

export default ProjectDescription;
