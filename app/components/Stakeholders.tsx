import FormField from "./FormField";
import Link from "next/link";
import { useState } from "react";
//@ts-ignore
const Stakeholders = ({ onStakeholdersUpdate }) => {
  const [stakeholders, setStakeHolders] = useState([] as Stakeholder[]);

  const [stakeholder, setCurrentStakeholder] = useState({
    firstName: "",
    lastName: "",
    role: "",
    linkedIn: "",
  } as Stakeholder);
  const onSubmit = () => {
    setStakeHolders([...stakeholders, stakeholder]);
    onStakeholdersUpdate(stakeholder);
  };

  //@ts-ignore
  const handleFieldChange = (fieldName: string, e) => {
    setCurrentStakeholder({ ...stakeholder, [fieldName]: e.target.value });
  };
  return (
    <div>
      <ul className={"mt-4 mb-8"}>
        {stakeholders.map((stakeholder, i) => (
          <li key={i}>
            <Link className={"text-primary"} href={stakeholder.linkedIn}>
              {`${stakeholder.firstName} 
                ${stakeholder.lastName} 
                (${stakeholder.role})`}
            </Link>
          </li>
        ))}
      </ul>
      <div
        className={
          "w-10/12 flex flex-wrap mt-4 gap-4 bg-primary text-black p-4 rounded indicator"
        }
      >
        <FormField
          //@ts-ignore
          handleChange={(e) => handleFieldChange("firstName", e)}
          inputType={"text"}
          labelName={"First Name *"}
          labelColor={"text-black"}
          placeholder={"Alice"}
        />
        <FormField
          //@ts-ignore
          inputType={"text"}
          labelName={"Last Name *"}
          labelColor={"text-black"}
          placeholder={"Miller"}
          handleChange={(e: any) => handleFieldChange("lastName", e)}
        />
        <FormField
          //@ts-ignore
          handleChange={(e) => handleFieldChange("role", e)}
          inputType={"text"}
          labelName={"Role *"}
          labelColor={"text-black"}
          placeholder={"CEO"}
        />
        <FormField
          //@ts-ignore
          handleChange={(e) => handleFieldChange("linkedIn", e)}
          inputType={"text"}
          labelName={"LinkedIn *"}
          labelColor={"text-black"}
          placeholder={""}
        />

        <div
          onClick={onSubmit}
          className="indicator-item indicator-start badge badge-black rounded-full p-2 justify-center items-center w-6 h-6 cursor-pointer"
        >
          +
        </div>
      </div>
    </div>
  );
};

export default Stakeholders;
