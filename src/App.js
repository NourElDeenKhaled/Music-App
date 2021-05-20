import "./styles/App.css";
import { useGlobalContext } from "./context/AppContext";
import Header from "./components/Header";
import React from "react";
import SectionTitle from "./components/SectionTitle";
import MultipleSlider from "./components/MultipleSlider";
import EventCard from "./components/EventCard";
import Footer from "./components/Footer";

function App() {
  const { artists, albums } = useGlobalContext();

  return (
    <React.Fragment>
      <Header />
      <main>
        <div className="container">
          <SectionTitle title="Top Charts" subtitle="Listen top chart" />
          <MultipleSlider data={albums} />
          <div className="main-div">
            <div className="left">
              <EventCard
                img="https://kri8thm.kiraninfosoft.com/listen/theme/assets/images/background/vertical/1.jpg"
                title="New Year Party"
              />
            </div>
            <div className="middle">
              <div className="above">
                <EventCard
                  img="https://kri8thm.kiraninfosoft.com/listen/theme/assets/images/background/horizontal/1.jpg"
                  title="Dance with DJ Nowan"
                />
              </div>
              <div className="beyond">
                <EventCard
                  img="https://kri8thm.kiraninfosoft.com/listen/theme/assets/images/background/horizontal/2.jpg"
                  title="Party like DJ Josh"
                />
              </div>
            </div>
            <div className="right">
              <div className="above">
                <EventCard
                  img="https://www.internetdj.com/assets/images/6a825cf4aece5045c8d589abfe636267.png"
                  title="Join DJ Licious"
                />
              </div>
              <div className="beyond">
                <EventCard
                  img="https://static.billboard.com/files/media/Marshmello-2016-Bellnjerry-billboard-1548-650-2-compressed.jpg"
                  title="All eyes on DJ Marshmello"
                />
              </div>
            </div>
          </div>
          <SectionTitle
            title="Featured Artists"
            subtitle="Select the best to listen"
          />
          <MultipleSlider data={artists} />
        </div>
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;
