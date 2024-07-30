import { HomeLayout } from "../../components/Layout/HomeLayout";

export const Home = () => {
  return (
    <HomeLayout>
      <div className="">

      <section className=" text-white share-regular h-full  flex flex-col justify-center items-center text-center px-5 lg:flex lg:flex-row lg:mt-28">
        <div className="lg:flex lg:flex-col lg:w-[500px] lg:px-8">
          <h2 className="text-white text-2xl mb-6 uppercase lg:text-3xl">So, you want to travel to</h2>
          <h1 className="text-8xl mb-6 tracking-wider lg:text-9xl">Space</h1>
          <p className="items-center mb-8 tracking-wide leading-9 text-xl lg:text-3xl">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="w-full lg:pl-4 lg:w-[500px]">
          <button className="bg-white text-black text-2xl rounded-full w-32 h-32 lg:w-52 lg:h-52 lg:text-5xl">
            Explore
          </button>
        </div>
      </section>
      </div>
    </HomeLayout>
  );
};
