import { createThirdwebClient } from "thirdweb";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faBookOpenReader,
  faNotesMedical,
  faSeedling,
  faVirusSlash,
  faWheatAwnCircleExclamation,
} from "@fortawesome/free-solid-svg-icons";

export const client = createThirdwebClient({
  clientId: "192f35bed07f84beca88ff583b0522f7",
});

export const startupCategories = [
  "Health",
  "Education",
  "Environment",
  "Food Security",
  "Counterfeiting",
];

export const startupCategoryIcon = {
  health: faNotesMedical,
  environment: faSeedling,
  education: faBookOpenReader,
  "food Security": faWheatAwnCircleExclamation,
  counterfeiting: faVirusSlash,
};

export const propositionCategories = [
  "Distribution of dividends",
  "Liquidation of our participation in a project",
  "Disbursement of funds",
  "Other",
];

export const forumTabItems = ["All", "Posts", "Comments", "Proposition"];
