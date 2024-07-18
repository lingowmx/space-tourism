import { HomeLayout } from "../../components/Layout/HomeLayout";

export const Home = ( ) => {
  return (
    <HomeLayout>
      <section className=" text-white h-96  flex flex-col justify-center items-center text-center">
        <h2 className="">So you want to travel to</h2>
        <h1>Space</h1>
        <p className="items-center">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
        <button className="bg-white text-black rounded-full w-28 h-28">
          Explore
        </button>
      </section>
    </HomeLayout>
  );
};
