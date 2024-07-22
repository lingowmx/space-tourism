import { HomeLayout } from "../../components/Layout/HomeLayout";

export const Home = () => {
  return (
    <HomeLayout>
      <div className="w-[1024px]">

      <section className=" text-white share-regular h-full  flex flex-col justify-center items-center text-center px-5 lg:flex lg:flex-row lg:mt-28">
        <div className="lg:flex lg:flex-col lg:w-[524px] lg:px-16">
          <h2 className="text-2xl mb-6 uppercase">So, you want to travel to</h2>
          <h1 className="text-8xl mb-6 tracking-wider">Space</h1>
          <p className="items-center mb-8 tracking-wide leading-9 text-xl">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="w-[480px] lg:pl-20">
          <button className="bg-white text-black text-2xl rounded-full w-32 h-32 lg:w-60 lg:h-60 lg:text-5xl">
            Explore
          </button>
        </div>
      </section>
      </div>
    </HomeLayout>
  );
};
