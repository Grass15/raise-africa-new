import { useState } from "react";

//@ts-ignore
const SocialNetwork = ({ onSocialNetworksUpdate, name, link = "" }) => {
  const [socialNetwork, setCurrentSocialNetwork] = useState({
    name: name,
    link: link,
  } as SocialNetwork);
  const onSubmit = () => {
    onSocialNetworksUpdate(socialNetwork);
  };
  //@ts-ignore
  const handleFieldChange = (fieldName: string, e) => {
    const updatedSocialNetwork = {
      ...socialNetwork,
      [fieldName]: e.target.value,
    };
    setCurrentSocialNetwork(updatedSocialNetwork); // Update the state
    onSocialNetworksUpdate(updatedSocialNetwork); // Use the updated value
    console.log(updatedSocialNetwork);
  };
  return (
    <div>
      <div className=" flex flex-col gap-2 p-4 bg-primary rounded">
        <div className="font-medium text-black">{name}</div>
        <input
          type="url"
          className="input input-bordered h-10 rounded w-52 "
          onChange={(e) => handleFieldChange("link", e)}
          defaultValue={link}
        />
      </div>
    </div>
  );
};

export default SocialNetwork;
