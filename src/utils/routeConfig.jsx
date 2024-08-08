import Main from "../components/Layout";
import Home from "../pages/main/home";
import MusicStore from "../pages/music_store";
import ArtistProfiles from "../pages/artist_profiles";
import BroadcastMonitoring from "../pages/broadcast_monitoring";
import TopSongs from "../pages/top_songs";
import About from "../pages/about_react";
import SignIn from "../pages/auth/signin";
import Error404 from "../pages/errors/404";

export const routeList = [
    {
        path: '/',
        element: <Main />, 
        children: [ // Corrected the typo here
            {
                path: '/', // This path should be relative to the parent path
                element: <Home />
            },
            {
                path: '/home', // This path should be relative to the parent path
                element: <Home />
            },
            {
                path: '/music_store',
                element: <MusicStore />
            },
            {
                path: '/artist_profiles',
                element: <ArtistProfiles />
            },
            {
                path: '/broadcast_monitoring',
                element: <BroadcastMonitoring />
            },
            {
                path: '/top_songs',
                element: <TopSongs />
            },
            {
                path: '/signin',
                element: <SignIn />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '*',
                element: <Error404 />
            }
        ]
    },
];

export default routeList;