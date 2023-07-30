import rocketManImage from "../../assets/img/rocketman.png";
import rocketLaunchImage from "../../assets/img/rocketlaunch.png";
import rocketStrideImage from "../../assets/img/rocketride.png";
import RocketItem from "./RocketItem";

const rocketList = [
  {
    img: rocketManImage,
    alt: "Rocket Man",
    name: "Explorer",
    shortDescription: "$",
    description: "Affordable Exploration",
  },
  {
    img: rocketStrideImage,
    alt: "Adventurer",
    name: "Adventurer",
    shortDescription: "$$",
    description: "Best Selling Rocket!",
  },
  {
    img: rocketLaunchImage,
    alt: "Infinity",
    name: "Infinity",
    shortDescription: "$$$",
    description: "Luxury Starship",
  },
];
function RocketList() {
  return (
    <ul className="list-none mx-auto my-12 flex flex-col sm:flex-row items-center gap-8">
      {rocketList.map((rocketDetails) => (
        <RocketItem key={rocketDetails.name} rocketDetails={rocketDetails} />
      ))}
    </ul>
  );
}

export default RocketList;
