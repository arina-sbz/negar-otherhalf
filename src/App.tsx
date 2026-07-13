import { useState } from 'react'
import { AnimatePresence } from 'motion/react'
import { birthdayContent } from './data/birthdayContent'
import { useProgress, type ScrapbookSectionId } from './hooks/useProgress'
import { useAudioController } from './hooks/useAudioController'

import { GiftScene } from './components/scenes/GiftScene'
import { EnvelopeScene } from './components/scenes/EnvelopeScene'
import { ScrapbookHome } from './components/scenes/ScrapbookHome'
import { FinalScene } from './components/scenes/FinalScene'
import { SoundToggle } from './components/audio/SoundToggle'

import { MemoriesSection } from './components/memories/MemoriesSection'
import { OurStorySection } from './components/scrapbook/OurStorySection'
import { OpenWhenSection } from './components/letters/OpenWhenSection'
import { ReasonsSection } from './components/scrapbook/ReasonsSection'
import { SoundtrackSection } from './components/music/SoundtrackSection'
import { ConstellationSection } from './components/celestial/ConstellationSection'

type Stage = 'gift' | 'envelope' | 'scrapbook'

function App() {
  const [stage, setStage] = useState<Stage>('gift')
  const [opening, setOpening] = useState(false)
  const [activeSection, setActiveSection] = useState<ScrapbookSectionId | null>(null)

  const {
    progress,
    markSectionDiscovered,
    markLetterOpened,
    markNoteRevealed,
    markStarActivated,
    setGiftOpened,
    setSecretFound,
    clearActivatedStars,
  } = useProgress()

  const audio = useAudioController(birthdayContent.backgroundAudioSrc, birthdayContent.voiceNoteSrc)

  const handleOpenGift = () => {
    setOpening(true)
    audio.startBackgroundMusic()
    setGiftOpened()
    window.setTimeout(() => {
      setStage('envelope')
      setOpening(false)
    }, 900)
  }

  const handleOpenSection = (section: ScrapbookSectionId) => {
    markSectionDiscovered(section)
    setActiveSection(section)
  }

  const handleReplayConstellation = () => {
    clearActivatedStars(birthdayContent.constellationStars.map((s) => s.id))
  }

  return (
    <>
      <AnimatePresence mode="wait">
        {stage === 'gift' && (
          <GiftScene key="gift" content={birthdayContent} onOpen={handleOpenGift} opening={opening} />
        )}
        {stage === 'envelope' && (
          <EnvelopeScene key="envelope" content={birthdayContent} onContinue={() => setStage('scrapbook')} />
        )}
        {stage === 'scrapbook' && activeSection === null && (
          <ScrapbookHome
            key="home"
            content={birthdayContent}
            discoveredSections={progress.discoveredSections}
            secretFound={progress.secretFound}
            onOpenSection={handleOpenSection}
            onFindSecret={setSecretFound}
          />
        )}

        {stage === 'scrapbook' && activeSection === 'memories' && (
          <MemoriesSection key="memories" memories={birthdayContent.memories} onBack={() => setActiveSection(null)} />
        )}
        {stage === 'scrapbook' && activeSection === 'timeline' && (
          <OurStorySection
            key="timeline"
            timelineEvents={birthdayContent.timelineEvents}
            braceletWord={birthdayContent.braceletWord}
            onBack={() => setActiveSection(null)}
          />
        )}
        {stage === 'scrapbook' && activeSection === 'openWhen' && (
          <OpenWhenSection
            key="openWhen"
            letters={birthdayContent.openWhenLetters}
            openedIds={progress.openedLetters}
            onOpenLetter={markLetterOpened}
            onBack={() => setActiveSection(null)}
          />
        )}
        {stage === 'scrapbook' && activeSection === 'reasons' && (
          <ReasonsSection
            key="reasons"
            reasons={birthdayContent.reasonsILoveYou}
            revealedIds={progress.revealedNotes}
            onReveal={markNoteRevealed}
            onBack={() => setActiveSection(null)}
          />
        )}
        {stage === 'scrapbook' && activeSection === 'soundtrack' && (
          <SoundtrackSection key="soundtrack" content={birthdayContent} onBack={() => setActiveSection(null)} />
        )}
        {stage === 'scrapbook' && activeSection === 'constellation' && (
          <ConstellationSection
            key="constellation"
            constellationName={birthdayContent.constellationName}
            constellationDescription={birthdayContent.constellationDescription}
            stars={birthdayContent.constellationStars}
            activatedIds={progress.activatedStars}
            onActivate={markStarActivated}
            onReplay={handleReplayConstellation}
            onBack={() => setActiveSection(null)}
          />
        )}
        {stage === 'scrapbook' && activeSection === 'finalPage' && (
          <FinalScene
            key="finalPage"
            content={birthdayContent}
            activatedStars={progress.activatedStars}
            onActivateStar={markStarActivated}
            onBack={() => setActiveSection(null)}
            duckAudio={audio.duckBackgroundMusic}
            restoreAudio={audio.restoreBackgroundMusic}
            voiceNote={{
              available: audio.voiceAvailable,
              playing: audio.voicePlaying,
              onPlay: audio.playVoiceNote,
              onPause: audio.pauseVoiceNote,
            }}
          />
        )}
      </AnimatePresence>

      {stage !== 'gift' && <SoundToggle muted={audio.muted} onToggle={audio.toggleMuted} />}
    </>
  )
}

export default App
