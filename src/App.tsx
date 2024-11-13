// Compontents
import { TopBar } from './components/top-bar/topBar'
import { ContentSection } from './components/content-section/ContentSection'
import { Banner } from './components/banner/Banner'
import { ScrollingBox } from './components/scrollingBox/ScrollingBox'
import { PreviousJobs } from './components/previous-job/previousJob'
import { Educations } from './components/education/education'
import { Skills } from './components/skills/Skills'
import { Footer } from './components/footer/Footer'

// Hooks
import { useWindowWide } from './lib/hooks/useWindowSize'

// Styles
import './App.css'

function App() {

  // this hook returns true if the window width is greater than the argument.
  // we want mobile, so this is inverted with ! 
  const mobile = !useWindowWide(480);

  return (
    <div className="appWrapper">
      <TopBar />

      <main>
        <ContentSection banner>
          <Banner />
        </ContentSection>

        {/* <ContentSection heading="Bio">
          <FilledBio />
        </ContentSection> */}

        <ContentSection heading="Work History">
          <PreviousJobs />
        </ContentSection>

        <ContentSection heading="Education">
          <Educations />
        </ContentSection>

        <ContentSection heading={"Projects"} decoration={`${mobile ? "scroll! ->" : ""}`}>
          <ScrollingBox />
        </ContentSection>

        <ContentSection heading="Skills">
          <Skills />
        </ContentSection>

        <Footer />
      </main>
    </div>
  )
}

export default App
