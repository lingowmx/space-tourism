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
      <h2 className="text-white">
        <span>02</span>
        <p>Meet our crew</p>
      </h2>
      <section>
        <div>
          {selectedCrew && (
            <>
              <h3>{selectedCrew.role}</h3>
              <p>{selectedCrew.name}</p>
              <p>{selectedCrew.bio}</p>
            </>
          )}
          <ul>
            {crew.map((member) => (
              <li
                key={member.name}
                onClick={() => handleSelectCrew(member)}
                className={`${
                  selectedCrew?.name === member.name ? "text-blue-400" : ""
                }`}
                style={{ listStyleType: "disc", marginLeft: "20px" }}
              >
                {/* {member.name} */}
              </li>
            ))}
          </ul>
        </div>
        <div>
          {selectedCrew && (
            <img
              src={selectedCrew.images.png}
              alt={selectedCrew.name}
              className="w-40 h-40"
            />
          )}
        </div>
      </section>
    </CrewLayout>
  );
};
