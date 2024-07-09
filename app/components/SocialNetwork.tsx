import { useState } from "react";

const SocialNetwork = ({ onSocialNetworksUpdate, name }) => {
  const [socialNetwork, setCurrentSocialNetwork] = useState({
    name: name,
    link: "",
  } as SocialNetwork);
  const onSubmit = () => {
    onSocialNetworksUpdate(socialNetwork);
  };
  const handleFieldChange = (fieldName: string, e) => {
    setCurrentSocialNetwork({ ...socialNetwork, [fieldName]: e.target.value });
    onSocialNetworksUpdate(socialNetwork);
  };
  return (
    <div>
      <div className=" flex flex-col gap-2 p-4 bg-primary rounded">
        <div className="font-medium text-black">{name}</div>
        <input
          type="url"
          className="input input-bordered h-10 rounded w-52 "
          onChange={(e) => handleFieldChange("link", e)}
        />
      </div>
    </div>
  );
};

export default SocialNetwork;
