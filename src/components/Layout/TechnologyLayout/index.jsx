import { MainLayout } from "../MainLayout"

//Images
import mobileBackgroundDefault from "../../../assets/Technology/background-technology-mobile.jpg";
import tabletBackgroundDefault from "../../../assets/Technology/background-technology-tablet.jpg";
import desktopBackgroundDefault from "../../../assets/Technology/background-technology-desktop.jpg";

export const TechnologyLayout = ({children}) => {
  return (
    <MainLayout>
      <div className="w-full h-full absolute share-regular">
        <picture className="">
          <source srcSet={mobileBackgroundDefault} media="(max-width: 371px)"/>
          <source srcSet={tabletBackgroundDefault} media="(min-width: 372px and max-width: 1023px)"/>
          <source srcSet={desktopBackgroundDefault} media="(max-width: 1280px)"/>
          <img src={mobileBackgroundDefault} alt="mobile-background" className="w-full h-full object-cover"/>
        </picture>
        <div className="absolute z-10 top-28 w-full p-4 lg:pr-0 lg:pt-28">
          {children}
        </div>  
      </div>  
    </MainLayout>
  )}