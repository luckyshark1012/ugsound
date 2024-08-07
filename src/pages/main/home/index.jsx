import BrandListComponent from "./brand_list";
import ContactUsComponent from "./contact_us";
import IntroductionComponent from "./introduction";
import SiteStateComponent from "./site_state";

const Home = () => {
    return (<>
        <IntroductionComponent />
        <SiteStateComponent />
        <BrandListComponent />
        {/* <ContactUsComponent /> */}
    </>)
};

export default Home;