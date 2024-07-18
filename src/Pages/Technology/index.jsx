import { TechnologyLayout } from "../../components/Layout/TechnologyLayout";
import { useEffect, useContext, useState } from "react";
import { SpaceContext } from "../../components/Layout/Context";

export const Technology = () => {
  const { technology } = useContext(SpaceContext);
  const [selectedTechnology, setSelectedTechnology] = useState(null);
  useEffect(() => {
    if (technology.length > 0) {
      setSelectedTechnology(technology[0]);
    }
  }, [technology]);

  const handleSelectTechnology = (technology) => {
    setSelectedTechnology(technology);
  };
  return (
    <TechnologyLayout>
      <h2 className="text-white">
        <span>03</span>
        <p>Pick your destination</p>
      </h2>
      <div>
        <ul>
          {technology.map((tech) => (
            <li
              key={tech.name}
              onClick={() => handleSelectTechnology(tech)}
              className={`${selectedTechnology?.name === tech.name ? "text-blue-400" : ""}`}
              style={{listStyleType: "disc", marginLeft: "20px"}}
            >
              {tech.name}
            </li>
            
          ))}
        </ul>
        {selectedTechnology && (
          <>
            <div>
              <p>The terminology...</p>
              <h3>{selectedTechnology.name}</h3>
              <p>{selectedTechnology.description}</p>
            </div>
          </>
        )}
      </div>
      <div>
        {selectedTechnology && (
          <>
            <img
              src={selectedTechnology.images.portrait}
              alt={selectedTechnology.name}
              className="w-40 h-40"
            />
          </>
        )}
      </div>
    </TechnologyLayout>
  );
};
