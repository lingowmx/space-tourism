import { MainLayout } from "../MainLayout"

//Images
import mobileBackgroundDefault from "../../../assets/Destination/background-destination-mobile.jpg";
import tabletBackgroundDefault from "../../../assets/Destination/background-destination-tablet.jpg";
import desktopBackgroundDefault from "../../../assets/Destination/background-destination-desktop.jpg";

export const DestinationLayout = ({children}) => {
  return (
    <MainLayout>
      <div className="w-full h-full absolute">
        <picture className="">
          <source srcSet={mobileBackgroundDefault} media="(max-width: 371px)"/>
          <source srcSet={tabletBackgroundDefault} media="(min-width: 372px and max-width: 1023px)"/>
          <source srcSet={desktopBackgroundDefault} media="(max-width: 1280px)"/>
          <img src={mobileBackgroundDefault} alt="mobile-background" className="w-full h-full object-cover"/>
        </picture>
        <div className="absolute z-10 top-28 p-8">
          {children}
        </div>  
      </div>  
    </MainLayout>
  )
}
