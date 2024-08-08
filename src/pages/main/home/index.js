import IntroductionComponent from "./introduction";
import SiteStateComponent from "./site_state";
import ArtistFieldComponent from "./artist_field";
import MusicFieldComponent from "./music_field";
import BrandListComponent from "./brand_list";
import ContactUsComponent from "./contact_us";

const Home = () => {
    return (
        <>
            <IntroductionComponent />
            <SiteStateComponent />
            <ArtistFieldComponent />
            <MusicFieldComponent />
            <BrandListComponent />
            {/* <ContactUsComponent /> */}
        </>)
};

export default Home;