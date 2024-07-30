import { useContext, useEffect, useState } from "react";
import { CrewLayout } from "../../components/Layout/CrewLayout";
import { SpaceContext } from "../../components/Layout/Context";

export const Crew = () => {
  const { crew } = useContext(SpaceContext);
  const [selectedCrew, setSelectedCrew] = useState(null);
  useEffect(() => {
    if (crew.length > 0) {
      setSelectedCrew(crew[0]);
    }
  }, [crew]);
  const handleSelectCrew = (member) => {
    setSelectedCrew(member);
  };

  return (
    <CrewLayout>
      <div className="flex flex-col sm:text-2xl sm:px-4 lg:flex-row place-content-center lg:place-content-between xl:px-28">
        <section className="sm:px-4 lg:w-[500px]">
          <h2 className="text-white flex max-w-96 place-content-around text-2xl tracking-wide mb-4 lg:max-w-ful lg:mt-4 lg:mb-8  lg:gap-16 lg:text-4xl">
            <span>02</span>
            <p>Meet our crew</p>
          </h2>
          <div>
            {selectedCrew && (
              <>
                <h3 className="text-lg text-white mb-4 lg:text-4xl">
                  {selectedCrew.role}
                </h3>
                <p className="text-3xl text-white mb-4 share-regular-italic lg:text-6xl lg:mb-16">
                  {selectedCrew.name}
                </p>
                <p className="mb-6 h-40  text-white tracking-widest xl:text-2xl">
                  {selectedCrew.bio}
                </p>
              </>
            )}
          </div>
        </section>

        <section className="text-white flex flex-col justify-center lg-flex lg:flex-col lg:w-[500px]">
          <div className="w-52 h-52 flex mx-auto lg:items-end lg:w-96 lg:h-96 xl:w-[450px] xl:h-[450px]">
            {selectedCrew && (
              <img
                src={selectedCrew.images.png}
                alt={selectedCrew.name}
                className="object-contain w-full h-full lg:w-96 lg:h-96 lg:mb-0 xl:w-[450px] xl:h-[450px]"
              />
            )}
          </div>
          <ul className="lg:order-3s flex text-white justify-center mt-6">
            {crew.map((member) => (
              <li
                key={member.name}
                onClick={() => handleSelectCrew(member)}
                className={`${
                  selectedCrew?.name === member.name ? "text-blue-400" : ""
                }`}
                style={{
                  listStyleType: "disc",
                  marginLeft: "30px",
                  fontSize: "32px",
                }}
              >
                {/* {member.name} */}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </CrewLayout>
  );
};
