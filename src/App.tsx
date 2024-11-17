import { useState } from 'react';

// Compontents
import { TopBar } from './components/top-bar/topBar'
import { ContentSection } from './components/content-section/ContentSection'
import { Banner } from './components/banner/Banner'
import { ScrollingBox } from './components/scrollingBox/ScrollingBox'
import { PreviousExperiences } from './components/previous-experience/previousExperience'
import { Skills } from './components/skills/Skills'
import { Footer } from './components/footer/Footer'

// Hooks
import { useWindowWide } from './lib/hooks/useWindowSize'

// Styles
import './App.css'
import ThemeVariablesSheet from './theme/themeVariablesSheet';
import { createPortal } from 'react-dom';
// themes
import { blueTheme } from './theme/themes/blueTheme';
import { goldTheme } from './theme/themes/goldTheme';
import { greenTheme } from './theme/themes/greenTheme';


function App() {

  const [theme, setTheme] = useState(blueTheme)

  // this hook returns true if the window width is greater than the argument.
  // we want mobile, so this is inverted with ! 
  const mobile = !useWindowWide(480);

  return (
    <>
      {/* Inserts theme  */}
      {createPortal(
        <ThemeVariablesSheet theme={theme} />,
        document.head)}
      <div className="appWrapper">
        <TopBar/>

        <main>
          <ContentSection banner>
            <Banner theme={theme} setTheme={setTheme} themes={[blueTheme, goldTheme, greenTheme]} />
          </ContentSection>

          <ContentSection heading={"Projects"} decoration={`${mobile ? "scroll! ->" : ""}`}>
            <ScrollingBox />
          </ContentSection>

          <ContentSection heading="Experience">
            <PreviousExperiences />
          </ContentSection>

          <ContentSection heading="Skills">
            <Skills />
          </ContentSection>

          <Footer />
        </main>
      </div>
    </>
  )
}

export default App
