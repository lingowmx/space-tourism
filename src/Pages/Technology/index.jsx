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
      <div className="sm:text-xl lg:flex xl:px-28 lg:place-content-between">
        <section className="lg:w-[600px] lg:pl-16">
          <h2 className="text-white flex w-80 place-content-around text-2xl tracking-wide mb-4 lg:justify-start lg:gap-16 xl:text-4xl xl:w-[450px]">
            <span>03</span>
            <p>Pick your destination</p>
          </h2>
          <div className="text-white lg:flex lg:mt-16">
            <div className="flex flex-col place-items-center mb-5 lg:mb-0 lg:h-[384px]">
              <ul className="lg:h-[300px] lg:flex lg:flex-col lg:gap-8 place-content-center items-center">
                {technology.map((tech) => (
                  <li
                    key={tech.name}
                    onClick={() => handleSelectTechnology(tech)}
                    className={`lg:w-12 lg:h-12 lg:rounded-full lg:border-2 lg:border-solid lg:border-gray-50 lg:text-center lg:place-content-center  ${
                      selectedTechnology?.name === tech.name
                        ? "text-blue-400 lg:bg-white lg:text-black lg:list-none"
                        : ""
                    }`}
                    // style={{ listStyleType: "disc", marginLeft: "20px" }}
                  >
                    <div className="flex gap-6 justify-center cursor-pointer">
                      <span className="hidden lg:block">{tech.number}</span>
                      <span className="lg:hidden">{tech.name}</span>
                    </div>
                     
                  </li>
                ))}
              </ul>
            </div>
            {selectedTechnology && (
              <>
                <div className="sm:px-8 lg:px-12">
                  <p className="text-md">The terminology...</p>
                  <h3 className="text-3xl mb-4 share-regular-italic">
                    {selectedTechnology.name}
                  </h3>
                  <p className="text-center h-48 tracking-widest lg:text-start xl:text-2xl">
                    {selectedTechnology.description}
                  </p>
                </div>
              </>
            )}
          </div>
        </section>
        <section className="lg:w-[500px]">
          <div className="flex justify-center">
            {selectedTechnology && (
              <>
                <img
                  src={selectedTechnology.images.portrait}
                  alt={selectedTechnology.name}
                  className="w-40 h-40 rounded-md lg:w-96 lg:h-96 lg:mt-12"
                />
              </>
            )}
          </div>
        </section>
      </div>
    </TechnologyLayout>
  );
};
