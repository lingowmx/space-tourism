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
      <h2 className="text-white">
        <span>01</span>
        <p>Pick your destination</p>
      </h2>
      <section className="text-white flex w-[600px] place-content-between">
        <div>
          {selectedDestination && (
            <img
              src={selectedDestination.images.png}
              alt={selectedDestination.name}
              className="w-40 h-40"
            />
          )}
        </div>
        <div className="flex flex-col">
          <ul className="flex">
            {destinations.map((destination) => (
              <li
                key={destination.name}
                className="cursor-pointer"
                onClick={() => handleSelectDestination(destination)}
              >
                {destination.name}
              </li>
            ))} 
          </ul>
          {selectedDestination && (
            <>
              <h2>{selectedDestination.name}</h2>
              <p>{selectedDestination.description}</p>
              <div className="flex flex-row">
                <div>
                  <p>Avg. Distance</p>
                  <p>{selectedDestination.distance}</p>
                </div>
                <div>
                  <p>Est. Travel Time</p>
                  <p>{selectedDestination.travel}</p>
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </DestinationLayout>
  );
};
