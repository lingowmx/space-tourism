// import PropTypes from "prop-types";
import { MainLayout } from "../MainLayout";

//Images
import mobileBackgroundDefault from "../../../assets/Home/background-home-mobile.jpg";
import tabletBackgroundDefault from "../../../assets/Home/background-home-tablet.jpg";
import desktopBackgroundDefault from "../../../assets/Home/background-home-desktop.jpg";


export const HomeLayout = ({children}) => {
  return (
    <MainLayout>
      <div className="w-full h-full absolute">
        <picture className="">
          <source srcSet={mobileBackgroundDefault} media="(max-width: 371px)"/>
          <source srcSet={tabletBackgroundDefault} media="(min-width: 372px and max-width: 1023px)"/>
          <source srcSet={desktopBackgroundDefault} media="(max-width: 1280px)"/>
          <img src={mobileBackgroundDefault} alt="mobile-background" className="w-full h-full object-cover"/>
        </picture>
        <div className="absolute z-10 top-32">
          {children}
        </div>
      </div>  
    </MainLayout>
  )
}

// HomeLayout.propTypes = {
//   mobileBackgroundDefault: PropTypes.string.isRequired,
//   tabletBackgroundDefault: PropTypes.string.isRequired,
//   desktopBackgroundDefault: PropTypes.string.isRequired,
// }
