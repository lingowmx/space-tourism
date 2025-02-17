import { SpaceContext } from "../../components/Layout/Context";
import { DestinationLayout } from "../../components/Layout/DestinationLayout";
import { useContext, useState, useEffect } from "react";

export const Destination = () => {
  const { destinations } = useContext(SpaceContext);
  const [selectedDestination, setSelectedDestination] = useState(null);
  useEffect(() => {
    if (destinations.length > 0) {
      setSelectedDestination(destinations[0]);
    }
  }, [destinations]);

  const handleSelectDestination = (destination) => {
    setSelectedDestination(destination);
  };
  return (
    <DestinationLayout>
      <div className="sm:text-2xl lg:flex xl:place-content-between xl:px-28">
        <section className="lg:w-[500px]">
          <h2 className="text-white flex w-80  place-content-around text-2xl tracking-wide mb-4 lg:max-w-ful lg:px-10 lg:w-96 xl:text-4xl xl:w-[500px]">
            <span>01</span>
            <p>Pick your destination</p>
          </h2>
          
          <div className="w-full flex justify-center">
            {selectedDestination && (
              <picture>
                <source srcSet={selectedDestination.images.png} media="(max-width: 371px)" type="image/png"/>
                <source srcSet={selectedDestination.images.webp} media="(min-width: 372px)" type="image/webp"/>
                <img
                  src={selectedDestination.images.png}
                  alt={selectedDestination.name}
                  className="w-40 h-40 mb-4 lg:w-96 lg:h-96 lg:mt-8"
                />
              </picture>
            )}
          </div>
        </section>
        <section className="text-white flex flex-col w-full place-content-between lg:w-[500px] lg:place-content-around">
        <div className="w-full mb-4 lg:mt-8 lg:text-3xl">
            <ul className="flex text-white justify-center xl:text-3xl">
              {destinations.map((destination) => (
                <li
                  key={destination.name}
                  className={`cursor-pointer mr-4 hover:text-blue-500 ${selectedDestination?.name === destination.name ? "text-blue-500": ""}`}
                  onClick={() => handleSelectDestination(destination)}
                >
                  {destination.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col lg:px-12">
            {selectedDestination && (
              <>
                <h2 className="mx-auto mb-4 text-5xl share-regular-italic lg:text-6xl">
                  {selectedDestination.name}
                </h2>
                <p className="text-center h-36 lg:text-xl lg:text-left lg:pb-8 lg:border-solid border-b-4 border-gray-400 xl:text-2xl xl:h-52">
                  {selectedDestination.description}
                </p>
                <br className="border-4 border-gray-400 border-solid" />
                <div className="flex flex-row w-full place-content-around">
                  <div className="w-[120px]">
                    <p className="text-sm sm:text-base">Avg. Distance</p>
                    <p className="text-xl sm:text-2xl">{selectedDestination.distance}</p>
                  </div>
                  <div className="w-[120px]">
                    <p className="text-sm sm:text-base">Est. Travel Time</p>
                    <p className="text-xl sm:text-2xl">{selectedDestination.travel}</p>
                  </div>
                </div>
              </>
            )}
          </div>
        </section>
      </div>
    </DestinationLayout>
  );
};
