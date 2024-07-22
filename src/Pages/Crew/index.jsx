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
      <div className="lg:flex place-content-center">
        <section className="lg:w-[500px] lg:pl-24">
          <h2 className="text-white flex max-w-96 place-content-around text-2xl tracking-wide mb-4 lg:max-w-ful lg:mt-4 lg:mb-32 lg:justify-start lg:gap-16">
            <span>02</span>
            <p>Meet our crew</p>
          </h2>
          <div>
            {selectedCrew && (
              <>
                <h3 className="text-lg text-white mb-4 lg:text-4xl">{selectedCrew.role}</h3>
                <p className="text-3xl text-white mb-4 share-regular-italic lg:text-6xl lg:mb-16">
                  {selectedCrew.name}
                </p>
                <p className="mb-12 text-white tracking-widest">{selectedCrew.bio}</p>
              </>
            )}
          </div>
          <div>
            <ul className="flex text-white justify-start">
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
          </div>
        </section>
        <section className="text-white w-[500px]">
          <div className="flex justify-center lg:h-[604px] lg:items-end">
            {selectedCrew && (
              <img
                src={selectedCrew.images.png}
                alt={selectedCrew.name}
                className="w-56 h-56  mb-6 lg:w-96 lg:h-96 lg:mb-0"
              />
            )}
          </div>
        </section>
      </div>
    </CrewLayout>
  );
};
