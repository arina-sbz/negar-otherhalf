/**
 * ============================================================================
 * THE LITTLE UNIVERSE OF MY OTHER HALF — CONTENT FILE
 * ============================================================================
 * This is the ONLY file you need to edit to personalize the entire website.
 * Every name, message, photo path, lyric, and playlist detail lives here.
 *
 * See PERSONALIZATION_GUIDE.md for a full walkthrough with screenshots-in-words.
 *
 * Anywhere you see `// PERSONALIZE THIS`, that's a spot meant for your words.
 * ============================================================================
 */

// ---------------------------------------------------------------------------
// TYPES
// ---------------------------------------------------------------------------

export interface Memory {
  id: string;
  image: string;
  // still used as the accessible name for screen readers, even though no caption is shown on screen
  imageAlt: string;
  date?: string;
  location?: string;
  caption?: string;
  story?: string;
  whatIRememberMost?: string;
  song?: string;
  lyricExcerpt?: string;
  celestialMessage?: string;
}

export interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  story: string;
  photo?: string;
  photoAlt?: string;
  song?: string;
  lyricExcerpt?: string;
  celestialNote?: string;
}

export interface OpenWhenLetter {
  id: string;
  label: string;
  seal:
    | "saturn"
    | "moon"
    | "heart"
    | "star"
    | "constellation"
    | "bracelet"
    | "stamp";
  paragraphs: string[];
}

export interface ReasonILoveYou {
  id: string;
  text: string;
  shape: "note" | "ticket" | "notebook" | "star" | "planet" | "bracelet";
}

export interface FavoriteLyric {
  id: string;
  excerpt: string;
  songTitle: string;
  artist: string;
  whyItMatters: string;
  memory?: string;
  image?: string;
  spotifyUrl?: string;
  celestialNote?: string;
}

export interface ConstellationStar {
  id: string;
  label: string;
  message: string;
  date?: string;
  photo?: string;
  song?: string;
  x: number; // 0-100, percentage across the card
  y: number; // 0-100, percentage down the card
  order: number;
}

export interface CelestialMessage {
  id: string;
  phrase: string;
}

export interface ThemeSettings {
  paper: string;
  paperDark: string;
  paperNight: string;
  ink: string;
  mutedInk: string;
  rose: string;
  burgundy: string;
  sage: string;
  fadedBlue: string;
  midnight: string;
  saturnGold: string;
  moonCream: string;
  tape: string;
}

export interface BirthdayContent {
  // Identity
  recipientName: string;
  recipientNickname: string;
  bestFriendNickname: string;
  senderName: string;
  birthdayDate: string;
  websiteTitle: string;
  friendshipTagline: string;

  // Core written pieces
  coverMessage: string;
  coverSubline: string;
  introductoryMessage: string;
  mainLetter: string[];
  finalMessage: string[];
  finalClosingLine: string;
  moonAndSaturnMessage: string;
  saturnMessage: string;
  celestialMessages: CelestialMessage[];

  // Sections
  memories: Memory[];
  timelineEvents: TimelineEvent[];
  openWhenLetters: OpenWhenLetter[];
  reasonsILoveYou: ReasonILoveYou[];

  // Soundtrack
  favoriteLyrics: FavoriteLyric[];
  spotifyPlaylistTitle: string;
  spotifyPlaylistUrl: string;
  spotifyPlaylistEmbedUrl: string;
  spotifyPlaylistCover: string;
  spotifyPlaylistDedication: string;

  // Constellation
  constellationName: string;
  constellationDescription: string;
  constellationStars: ConstellationStar[];

  // Media
  heroPhoto: string;
  heroPhotoAlt: string;
  backgroundAudioSrc: string;
  voiceNoteSrc: string;

  // Theme + misc labels
  theme: ThemeSettings;
  insideJokes: string[];
  secretMessage: string;
  spaceStickerLabels: string[];
  taylorInspiredSectionLabels: {
    memories: string;
    timeline: string;
    eras: string;
    openWhen: string;
    reasons: string;
    soundtrack: string;
    constellation: string;
    finalPage: string;
  };
  // PERSONALIZE THIS: the word spelled out by the interactive friendship bracelet
  braceletWord: string;
  // PERSONALIZE THIS: the note revealed when the flip-stamp on the scrapbook home is tapped
  hiddenStampMessage: string;
}

// ---------------------------------------------------------------------------
// CONTENT
// ---------------------------------------------------------------------------

export const birthdayContent: BirthdayContent = {
  // PERSONALIZE THIS: her name as you'd write it on an envelope
  recipientName: "Negar",
  // PERSONALIZE THIS: a soft nickname used in a few tender spots
  recipientNickname: "BooBoo",
  // PERSONALIZE THIS: the nickname used throughout the site
  bestFriendNickname: "My Other Half",
  // PERSONALIZE THIS: your name, for the letters and closing line
  senderName: "Arina",
  // PERSONALIZE THIS: format however you like, e.g. "July 13"
  birthdayDate: "July 13",
  websiteTitle: "The Little Universe of My Other Half",
  // PERSONALIZE THIS
  friendshipTagline: "Two halves, one sky.",

  // PERSONALIZE THIS
  coverMessage:
    "A tiny universe on the internet,\nmade only for my other half.",
  // // PERSONALIZE THIS
  coverSubline: "Best experienced with sound ♡",

  // PERSONALIZE THIS
  introductoryMessage:
    "We met when we were twelve, and it took us a while to actually like each other.",

  // PERSONALIZE THIS: the full letter, one string per paragraph
  mainLetter: [
    "We were twelve when we met, and if I’m honest, I don’t think either of us liked the other much at first boo.",
    "Somehow we found our way back to each other anyway no matter what, and you never really left again.",
    "You’re the part of me that can never be taken away from me. I am the Arina I am today because of you, can’t imagine my life without you.",
    "So I made you a tiny universe out of pieces of us. Winx Club, the birthday party my mom wouldn’t let me go to, the emo phase, every ridiculous phase after that, and every good morning text since 2023.",
    "I don’t think I can fully explain what it means to have you in this life, but I try everyday to show you how much I love you boo, happy birthday my soulmate.",
    // 'Ready to look through our little universe?',
  ],

  // PERSONALIZE THIS: the final reveal message, one string per line/paragraph
  finalMessage: [
    "You are not only my best friend.",
    "You’re the person who makes me feel like myself, even on the days I don’t feel like much of anything.",
    "It’s been fifteen years. Same schools growing up, different universities, and now an actual distance between us. None of it ever made this feel less real.",
    "Thank you for every good morning, every good night, every photo of a moon or a cloud that made me think of you, and every version of yourself you’ve shared with me since we were twelve.",
    "Out of every person, in every place, I’m so grateful I found you.",
    "Happy birthday, my person, my soulmate, my otherhalf.",
    "Love you to the Moon and to Saturn.",
  ],
  // PERSONALIZE THIS
  finalClosingLine:
    "In every era, every universe, and every lifetime, you’ll be my other half.",

  // PERSONALIZE THIS
  moonAndSaturnMessage: "Love you to the Moon and to Saturn.",
  // PERSONALIZE THIS
  saturnMessage:
    "Some friendships have their own gravity. Ours even has rings.",

  // PERSONALIZE THIS: short handwritten-style celestial phrases used as decoration
  celestialMessages: [
    { id: "cm-1", phrase: "Love you to the Moon and to Saturn." },
    { id: "cm-2", phrase: "In every universe, I’d find you." },
    { id: "cm-3", phrase: "Some friendships have their own gravity." },
    { id: "cm-4", phrase: "You made my universe softer." },
    { id: "cm-5", phrase: "Different cities, same sky." },
    { id: "cm-6", phrase: "No amount of distance could change our orbit." },
    { id: "cm-7", phrase: "You are one of the brightest parts of my sky." },
    {
      id: "cm-8",
      phrase: "Out of every universe, I’m glad I found you in this one.",
    },
    { id: "cm-9", phrase: "Two halves under the same sky." },
    { id: "cm-10", phrase: "My favourite person in every universe." },
    { id: "cm-11", phrase: "Every moon and every cloud, I think of you." },
  ],

  // PERSONALIZE THIS: add/remove memories freely — 20 placeholders included, replace the images/stories with your own
  memories: [
    {
      id: "memory-1",
      image: "/photos/IMG_0841.JPG",
      imageAlt: "Placeholder photo for the first memory",
      date: "2021",
      location: "Online, obviously",
      caption: "The night we first talked for six hours straight",
      story:
        'We were supposed to talk for ten minutes. Six hours later neither of us wanted to hang up. I remember thinking, "oh, this one is different."',
      whatIRememberMost:
        "How easy it was to talk to you, like we’d known each other for years.",
      song: "Add a song title",
      lyricExcerpt: "Add a short lyric excerpt here",
      celestialMessage: "Some friendships have their own gravity.",
    },
    {
      id: "memory-2",
      image: "/photos/IMG_1401.jpg",
      imageAlt: "Placeholder photo for the second memory",
      date: "2021",
      location: "Two different time zones",
      caption: "Our first shared Taylor Swift meltdown",
      story:
        "A surprise release dropped and we both texted the same three words at the exact same second.",
      song: "Add a song title",
    },
    {
      id: "memory-3",
      image: "/photos/IMG_4653.JPG",
      imageAlt: "Placeholder photo for the third memory",
      date: "2022",
      caption: "The voice note that made me cry-laugh on the bus",
      story:
        "You sent me eleven minutes of pure chaos about something completely unimportant and it remains one of my favourite things you’ve ever sent me.",
    },
    {
      id: "memory-4",
      image: "/photos/IMG_4655.JPG",
      imageAlt: "Placeholder photo for the fourth memory",
      date: "2022",
      caption: "The hard week you talked me through",
      story:
        "I don’t think you know how much that week mattered. You just showed up, every day, without me having to ask.",
      celestialMessage: "You made my universe softer.",
    },
    {
      id: "memory-5",
      image: "/photos/IMG_4656.JPG",
      imageAlt: "Placeholder photo for the fifth memory",
      date: "2023",
      caption: 'The first time we called it "our era"',
      story:
        'We started joking about our friendship having "eras" like an album, and it just stuck.',
    },
    {
      id: "memory-6",
      image: "/photos/IMG_4657.JPG",
      imageAlt: "Placeholder photo for the sixth memory",
      date: "2023",
      caption: "The playlist that started as a joke",
      story:
        "I made you a three-song playlist as a bit. It is now forty songs long and still growing.",
      song: "Add a song title",
    },
    {
      id: "memory-7",
      image: "/photos/IMG_4658.JPG",
      imageAlt: "Placeholder photo for the seventh memory",
      date: "2024",
      caption: 'The day "my other half" became official',
      story:
        'I called you that by accident in a message and you said "wait, keep that," so I did, forever.',
      celestialMessage: "Two halves under the same sky.",
    },
    {
      id: "memory-8",
      image: "/photos/IMG_4659.JPG",
      imageAlt: "Placeholder photo for the eighth memory",
      date: "This year",
      caption: "Right now, building you a tiny universe",
      story:
        "This website. This is today’s memory, proof that some things are worth doing the long way.",
      celestialMessage: "Love you to the Moon and to Saturn.",
    },
    {
      id: "memory-9",
      image: "/photos/IMG_4660.JPG",
      imageAlt: "Placeholder photo for the ninth memory",
      date: "2021",
      location: "A very laggy video call",
      caption: "Our first video call, buffering the entire time",
      story:
        "The connection dropped four times and we just kept calling back. Worth every reconnect.",
    },
    {
      id: "memory-10",
      image: "/photos/IMG_4661.JPG",
      imageAlt: "Placeholder photo for the tenth memory",
      date: "2021",
      caption: "The night we found our timezone overlap",
      story:
        "We mapped out the two-hour window where we were both awake and guarded it like it was sacred. It kind of was.",
      celestialMessage: "Different cities, same sky.",
    },
    {
      id: "memory-11",
      image: "/photos/IMG_4662.JPG",
      imageAlt: "Placeholder photo for the eleventh memory",
      date: "2022",
      caption: "The care package that took three weeks to arrive",
      story:
        "You mailed me a box of things that reminded you of me. I still have almost all of it.",
      whatIRememberMost:
        "Opening it on a random Tuesday and immediately texting you a photo of everything.",
    },
    {
      id: "memory-12",
      image: "/photos/IMG_4663.JPG",
      imageAlt: "Placeholder photo for the twelfth memory",
      date: "2022",
      caption: "The screenshot marathon",
      story:
        'One of us said "wait send me a screenshot of that" and somehow we didn’t stop for two hours.',
    },
    {
      id: "memory-13",
      image: "/photos/IMG_4665.JPG",
      imageAlt: "Placeholder photo for the thirteenth memory",
      date: "2022",
      caption: "Comparing our Spotify Wrapped, immediately",
      story:
        "We sent screenshots within minutes of it dropping. Unsurprisingly, overlapping top artists.",
      song: "Add a song title",
    },
    {
      id: "memory-14",
      image: "/photos/IMG_4667.JPG",
      imageAlt: "Placeholder photo for the fourteenth memory",
      date: "2022",
      caption: "The trip we almost booked",
      story:
        "We got as far as browsing flights before life got in the way. Still counts as a memory to me.",
      celestialMessage: "No amount of distance could change our orbit.",
    },
    {
      id: "memory-15",
      image: "/photos/IMG_4668.JPG",
      imageAlt: "Placeholder photo for the fifteenth memory",
      date: "2023",
      caption: "Matching outfits on two different continents",
      story: "Complete coincidence. Or fate. We have never agreed on which.",
    },
    {
      id: "memory-16",
      image: "/photos/IMG_4669.JPG",
      imageAlt: "Placeholder photo for the sixteenth memory",
      date: "2023",
      caption: "The comfort call during finals week",
      story:
        "You stayed on the phone with me while I did absolutely nothing productive, and it helped more than studying would have.",
      whatIRememberMost:
        "You not saying much, just being there while I panicked quietly.",
    },
    {
      id: "memory-17",
      image: "/photos/IMG_4670.JPG",
      imageAlt: "Placeholder photo for the seventeenth memory",
      date: "2023",
      caption: "Mailing each other friendship bracelets",
      story:
        "Neither of us told the other one first. They arrived the same week.",
      celestialMessage: "You are one of the brightest parts of my sky.",
    },
    {
      id: "memory-18",
      image: "/photos/IMG_4671.JPG",
      imageAlt: "Placeholder photo for the eighteenth memory",
      date: "2024",
      caption: 'Watching the Eras Tour livestream "together"',
      story:
        "Separate couches, same setlist, a group chat that would not stop buzzing for three hours straight.",
      song: "Add a song title",
      lyricExcerpt: "Add a short lyric excerpt here",
    },
    {
      id: "memory-19",
      image: "/photos/IMG_4700.JPG",
      imageAlt: "Placeholder photo for the nineteenth memory",
      date: "2024",
      caption: "The holiday card that arrived in February",
      story:
        "International mail has never been fast for us. We have made peace with it.",
    },
    {
      id: "memory-20",
      image: "/photos/IMG_4673.JPG",
      imageAlt: "Placeholder photo for the twentieth memory",
      date: "This year",
      caption: "Planning the trip to finally meet in person",
      story:
        "This time we have actual dates. Actual dates! Add the details here once they’re real.",
      celestialMessage: "In every universe, I’d find you.",
    },
    {
      id: "memory-21",
      image: "/photos/IMG_4674.JPG",
      imageAlt: "Placeholder photo for memory 21",
    },
    {
      id: "memory-22",
      image: "/photos/IMG_4676.JPG",
      imageAlt: "Placeholder photo for memory 22",
    },
    {
      id: "memory-23",
      image: "/photos/IMG_4677.JPG",
      imageAlt: "Placeholder photo for memory 23",
    },
    {
      id: "memory-24",
      image: "/photos/IMG_4678.JPG",
      imageAlt: "Placeholder photo for memory 24",
    },
    {
      id: "memory-25",
      image: "/photos/IMG_4679.JPG",
      imageAlt: "Placeholder photo for memory 25",
    },
    {
      id: "memory-26",
      image: "/photos/IMG_4683.JPG",
      imageAlt: "Placeholder photo for memory 26",
    },
    {
      id: "memory-27",
      image: "/photos/IMG_4684.JPG",
      imageAlt: "Placeholder photo for memory 27",
    },
    {
      id: "memory-28",
      image: "/photos/IMG_4685.JPG",
      imageAlt: "Placeholder photo for memory 28",
    },
    {
      id: "memory-29",
      image: "/photos/IMG_4686.JPG",
      imageAlt: "Placeholder photo for memory 29",
    },
    {
      id: "memory-30",
      image: "/photos/IMG_4687.jpg",
      imageAlt: "Placeholder photo for memory 30",
    },
    {
      id: "memory-31",
      image: "/photos/IMG_4688.JPG",
      imageAlt: "Placeholder photo for memory 31",
    },
    {
      id: "memory-32",
      image: "/photos/IMG_7022.jpg",
      imageAlt: "Placeholder photo for memory 32",
    },
    {
      id: "memory-33",
      image: "/photos/IMG_7073.JPG",
      imageAlt: "Placeholder photo for memory 33",
    },
    {
      id: "memory-34",
      image: "/photos/IMG_7079.JPG",
      imageAlt: "Placeholder photo for memory 34",
    },
    {
      id: "memory-35",
      image: "/photos/IMG_7088.JPG",
      imageAlt: "Placeholder photo for memory 35",
    },
    {
      id: "memory-36",
      image: "/photos/IMG_7152.jpg",
      imageAlt: "Placeholder photo for memory 36",
    },
    {
      id: "memory-37",
      image: "/photos/IMG_7154.jpg",
      imageAlt: "Placeholder photo for memory 37",
    },
    {
      id: "memory-38",
      image: "/photos/IMG_7349.jpg",
      imageAlt: "Placeholder photo for memory 38",
    },
    {
      id: "memory-39",
      image: "/photos/IMG_7537.JPG",
      imageAlt: "Placeholder photo for memory 39",
    },
    {
      id: "memory-40",
      image: "/photos/IMG_7557.jpg",
      imageAlt: "Placeholder photo for memory 40",
    },
  ],

  // PERSONALIZE THIS
  timelineEvents: [
    {
      id: "tl-1",
      date: "Age 12 · middle school",
      title: "Two girls who didn’t like each other",
      story:
        "We didn’t exactly hit it off. It took a while, but once we clicked, that was it.",
    },
    {
      id: "tl-2",
      date: "Age 12",
      title: "The Winx Club era",
      story:
        "The first thing we ever bonded over. It didn’t stop there either, we’ve been sharing obsessions ever since.",
    },
    {
      id: "tl-3",
      date: "Middle school",
      title: "The birthday party I couldn’t go to",
      story:
        "My mom said no. I was devastated about it for what felt like forever. We still bring it up.",
    },
    {
      id: "tl-4",
      date: "Middle school",
      title: "School, side by side",
      story:
        "We spent our school days together, which somehow made even the boring parts of growing up fun.",
    },
    {
      id: "tl-5",
      date: "The emo phase",
      title: "Our emo phase",
      story:
        "Avril, skeletons, drawings, dramatic playlists. We went through it together, obviously, because we went through everything together.",
    },
    {
      id: "tl-6",
      date: "Celebrity Era",
      title: "The singer / Hollywood actress phase",
      story:
        "We were absolutely going to be famous. The plan was very detailed, extremely unserious. We loved it anyway & we even won awards, remember?",
    },
    {
      id: "tl-7",
      date: "The One Direction era",
      title: "Delulus",
      story:
        "An unreasonable number of delulus about 1D. You telling me about your delulus with harry while lying down on your parents bed together.",
    },
    {
      id: "tl-8",
      date: "Your random crushes",
      title: "The Leo incident",
      story:
        "You had a crush on Leo from the Ninja Turtles and I will never, ever let you live it down.",
    },
    {
      id: "tl-9",
      date: "High school",
      title: "Same school, still together",
      story:
        "We stayed together through high school, which made all of it, the good and the hard, so much easier to get through.",
    },
    {
      id: "tl-10",
      date: "Along the way",
      title: "The fights we had",
      story:
        'We had our dramas. We fought more than once, including one whole month in high school where we didn’t speak at all. I remember listening to "i hate u, i love u" after school on repeat, and turning around to see you walking the other way. Reyhan told me that day: "even your fights are goals." She wasn’t wrong. Every time, it blew over and we were fine again.',
      song: "i hate u, i love u by Olivia O’Brien",
    },
    {
      id: "tl-11",
      date: "University",
      title: "Different universities, same city",
      story:
        "We went to different universities for our bachelor’s degrees, but we stayed in the same city the whole time, so honestly nothing really changed between us, I think our connection even became deeper.",
    },
    {
      id: "tl-12",
      date: "Safe zone",
      title: "Naps, movies, and the food you made",
      story:
        "Some of my favourite memories of us aren’t even big moments. Just naps that turned into sleepovers, movies, and the food you made me. I remember it all too well.",
    },
    {
      id: "tl-13",
      date: "2023",
      title: "The distance began",
      story:
        "We officially became long-distance in 2023. Somehow it changed the geography and nothing else.",
      celestialNote: "Out of every universe, I’m glad I found you in this one.",
    },
    {
      id: "tl-14",
      date: "Every day since",
      title: "Good morning, good night",
      story:
        "Every single day since: good mornings, good nights, photos, video messages. I think about you all the time, and I mean that literally.",
    },
    {
      id: "tl-15",
      date: "Somewhere in there",
      title: "Your anime era (my fault)",
      story:
        "You got into anime because of me, and then came the Banana Fish phase, which is honestly a whole story on its own.",
    },
    {
      id: "tl-16",
      date: "Now",
      title: "27, and still each other’s",
      story:
        "We’re both 27 now. Still together, just further apart. Still my other half, that part was never going to change.",
      celestialNote: "My favourite person in every universe.",
    },
    {
      id: "tl-17",
      date: "Today",
      title: "Right now, building this",
      story:
        "This website. Proof that I’d cross any distance, even in code, at midnight, just to make sure you feel how much you matter to me and listening to your playlist while making it, feeling so emotional and grateful.",
      celestialNote: "Every moon and every cloud, I think of you.",
    },
  ],

  // PERSONALIZE THIS
  openWhenLetters: [
    {
      id: "ow-1",
      label: "Open when you miss me",
      seal: "moon",
      paragraphs: [
        "If you’re reading this, I already miss you too, probably at the exact same moment.",
        "Distance is just a technical inconvenience. It has never once made this feel less real, we are under the same moon.",
      ],
    },
    {
      id: "ow-2",
      label: "Open when you need to laugh",
      seal: "star",
      paragraphs: [
        "Do you remember you sang Darlin by Avril to 1D hairdresser daughter so she gets out of the closet, somehow harry ended up more in love with you.",
      ],
    },
    {
      id: "ow-3",
      label: "Open when you doubt yourself",
      seal: "heart",
      paragraphs: [
        "Whatever you’re doubting right now, I promise it doesn’t change how much you matter, or how proud I am of you.",
        "You are so much more than the moment you’re in.",
      ],
    },
    {
      id: "ow-4",
      label: "Open when the distance feels too big",
      seal: "saturn",
      paragraphs: [
        "Some days the miles feel heavier than others. This is one of those reminders that they’ve never actually changed anything between us.",
        "Same sky, different window. Still your other half.",
      ],
    },
    {
      id: "ow-5",
      label: "Open when you need a reminder of how loved you are",
      seal: "bracelet",
      paragraphs: [
        "You are loved. Loudly, specifically, and completely, by me and by everyone lucky enough to actually know you.",
      ],
    },
    {
      id: "ow-6",
      label: "Open when you feel alone",
      seal: "moon",
      paragraphs: [
        "You are not alone. You have never been alone since the day you became my other half.",
        "I am one message or a call away, always. Just count on me!",
      ],
    },
    {
      id: "ow-7",
      label: "Open when you need motivation",
      seal: "star",
      paragraphs: [
        "You have survived every hard thing so far. This next thing is not the exception.",
      ],
    },
    {
      id: "ow-8",
      label: "Open when you need a Taylor song",
      seal: "saturn",
      paragraphs: [
        "Listen to tis the damn season and think about the day we spent at the hotel, vibed to the album and took a bath.",
      ],
    },
    {
      id: "ow-9",
      label: "Open when it is your birthday again",
      seal: "constellation",
      paragraphs: [
        "Happy birthday, again, from the future. If you’re reading this next year, that means we made it through another whole trip around the sun as each other’s other half.",
      ],
    },
    // {
    //   id: 'ow-10',
    //   label: 'Open when you want an inside joke',
    //   seal: 'heart',
    //   paragraphs: [
    //     'PERSONALIZE THIS: drop your favourite ridiculous inside joke here, the kind that needs zero explanation between the two of you.',
    //   ],
    // },
  ],

  // PERSONALIZE THIS: at least 12 reasons, editable freely
  reasonsILoveYou: [
    {
      id: "love-1",
      text: "You know what goes on in my head even when I didn’t know myself.",
      shape: "note",
    },
    { id: "love-2", text: "You know how to make me laugh.", shape: "ticket" },
    {
      id: "love-3",
      text: "You made parts of me feel understood that I didn’t know how to explain.",
      shape: "notebook",
    },
    {
      id: "love-4",
      text: "You have been a safe place without ever asking me to be less of myself.",
      shape: "star",
    },
    {
      id: "love-5",
      text: "You somehow always know when I need comfort and when I need honesty.",
      shape: "planet",
    },
    {
      id: "love-6",
      text: "My life is better simply because you exist in it.",
      shape: "bracelet",
    },
    {
      id: "love-7",
      text: "You are my favourite person to be dramatic with.",
      shape: "note",
    },
    {
      id: "love-8",
      text: "You became my other half without ever making me feel incomplete.",
      shape: "star",
    },
    {
      id: "love-9",
      text: "You pay attention to all the small details.",
      shape: "ticket",
    },
    {
      id: "love-10",
      text: "You never once made the distance feel like an excuse to drift.",
      shape: "planet",
    },
    {
      id: "love-11",
      text: "You celebrate my good days like they’re yours too.",
      shape: "notebook",
    },
    {
      id: "love-12",
      text: "You understand how I feel when I look at a specific movie scene or listen to a specific song, you get the vibe, no one does!",
      shape: "bracelet",
    },
    {
      id: "love-13",
      text: "Moein said he can’t be you for me, and I think that’s the ultimate friendship goal.",
      shape: "note",
    },
    {
      id: "love-14",
      text: "You always tell me the truth, even when it’s the harder thing to say.",
      shape: "ticket",
    },
    {
      id: "love-15",
      text: "You’re woven into who I am, not just someone who happens to be around.",
      shape: "star",
    },
    {
      id: "love-16",
      text: "You’ve known me since we were twelve, before I figured out most of who I am.",
      shape: "planet",
    },
    {
      id: "love-17",
      text: "I bring a small thing you gave me to every concert I go to or video call with you, just so it feels like you’re there.",
      shape: "ticket",
    },
    {
      id: "love-18",
      text: "You are my soulmate, not in the romantic sense, in the once-in-a-lifetime sense.",
      shape: "bracelet",
    },
  ],

  // PERSONALIZE THIS
  // PERSONALIZE THIS: 10 songs from the playlist — add your own short excerpt and meaning for each
  favoriteLyrics: [
    {
      id: "lyric-1",
      excerpt: `Love you to the moon and to Saturn,
Passed down like folk songs,
The love lasts so long,
And I've been meaning to tell you,
I think your house is haunted,
Your dad is always mad and that must be why,
And I think you should come live with,
Me and we can be pirates,
Then you won't have to cry`,
      songTitle: "seven",
      artist: "Taylor Swift",
      whyItMatters:
        "Growing up, I actually believed my own house was haunted, and your house was always my escape from it. Every time this song plays, it feels like she wrote it just for us.",
      image: "",
      spotifyUrl: "",
      celestialNote: "Some songs feel like they were written under our sky.",
    },
    {
      id: "lyric-2",
      excerpt: `You came out the blue on a rainy night, no lie
I'll tell you how I almost died,
While you're bringing me back to life`,
      songTitle: "Angel Baby",
      artist: "Troye Sivan",
      whyItMatters: "You are my angel baby.",
    },
    {
      id: "lyric-3",
      excerpt: `If I could be with you tonight
I would sing you to sleep
Never let them take the light behind your eyes
I'll fail and lose this fight
Never fade in the dark
Just remember you will always burn as bright`,
      songTitle: "The Light Behind Your Eyes",
      artist: "My Chemical Romance",
      whyItMatters: "No matter what you're going through, I'm always there for you Boo.",
    },
    {
      id: "lyric-4",
      excerpt: `For every failing sun, there's a morning after
Though I'm empty when you go
I just wanted you to know
That the world is ugly
But you're beautiful to me`,
      songTitle: "The World Is Ugly",
      artist: "My Chemical Romance",
      whyItMatters: "You are the most beautiful person I've ever met.",
    },
    {
      id: "lyric-5",
      excerpt: `No oxygen, can barely breathe
My darkest sin, you've raised release,
And it's all because of you, all because of you,
And I don't know what it is, but you've pulled me in,
No one compares, could ever begin,
To love me like you do,
And I wouldn't want them to`,
      songTitle: "Nobody",
      artist: "Selena Gomez",
      whyItMatters: "The type of love I experience with you is just different.",
    },
    {
      id: "lyric-6",
      excerpt: `It's never too late,
To come back to my side,
The stars in your eyes,
Shined brighter in Tupelo,
And if you're ever tired of being known,
For who you know,
You know, you'll always know me`,
      songTitle: "dorothea",
      artist: "Taylor Swift",
      whyItMatters: "Always know we are living this life together.",
    },
    {
      id: "lyric-7",
      excerpt: `And even though you hurt,
I'm always a phone call away,
As long as I'm here with you, here with you
Then darling, I'll cry with you, cry with you`,
      songTitle: "cry with you",
      artist: "Jeremy Zucker",
      whyItMatters: "Just call me and text me whenever you want, you are my priority.",
    },
    {
      id: "lyric-8",
      excerpt: `And the road not taken looks real good now,
And it always leads to you in my hometown,
Sleep in half the day just for old times' sake`,
      songTitle: "’tis the damn season",
      artist: "Taylor Swift",
      whyItMatters: "You are home.",
    },
    {
      id: "lyric-9",
      excerpt: `I could cry just thinkin' about you
Every line I write is somethin' about you
Every guy I want looks somethin' just like you
Every book I read I only read for you
Every art piece is just to remind you
I don't know who I am with or without you`,
      songTitle: "Could Cry Just Thinkin’ About You",
      artist: "Troye Sivan",
      whyItMatters: "You are a piece of art, so perfectly created.",
    },
    {
      id: "lyric-10",
      excerpt: `We were lying on your couch
I remember
You took a Polaroid of us
Then discovered (Then discovered)
The rest of the world was black and white
But we were in screaming color`,
      songTitle: "out of the woods",
      artist: "Taylor Swift",
      whyItMatters: "You bring color to my life more than you can imagine.",
    },
  ],

  // PERSONALIZE THIS: Spotify playlist details
  spotifyPlaylistTitle: "for my other half",
  spotifyPlaylistUrl:
    "https://open.spotify.com/playlist/7iNUTYpB5c6eCV4mQv8C1i?si=1c2462e495354420",
  spotifyPlaylistEmbedUrl:
    "https://open.spotify.com/embed/playlist/7iNUTYpB5c6eCV4mQv8C1i",
  spotifyPlaylistCover: "/photos/IMG_4672.JPG",
  spotifyPlaylistDedication:
    "I made you this playlist because sometimes a song can say everything I don’t know how to fit into one letter.",

  // Constellation
  constellationName: "The Other Half",
  constellationDescription: "Two people, different places, one shared sky.",
  constellationStars: [
    {
      id: "star-1",
      label: "You are my soulmate",
      message: "You literally changed my life Boo.",
      x: 18,
      y: 30,
      order: 1,
    },
    {
      id: "star-2",
      label: "An inside joke",
      message:
        "Do you remember I sang out of the woods at grammys for you and you were my plus one",
      x: 32,
      y: 55,
      order: 2,
    },
    {
      id: "star-3",
      label: "A quality I love",
      message: "How endlessly loyal you are.",
      x: 48,
      y: 20,
      order: 3,
    },
    {
      id: "star-4",
      label: "A meaningful moment",
      message:
        "When we sang shadows moses while you were driving fast and your dad was scared in the back of the car.",
      x: 58,
      y: 62,
      order: 4,
    },
    {
      id: "star-5",
      label: "A song",
      message: "Listen to Seven by Tay Tay",
      x: 70,
      y: 35,
      order: 5,
    },
    {
      id: "star-6",
      label: "A word for us",
      message: '"Other half," because that’s exactly what you are.',
      x: 82,
      y: 55,
      order: 6,
    },
    {
      id: "star-7",
      label: "A friendship era",
      message: 'The "To the Moon and to Saturn" era.',
      x: 90,
      y: 25,
      order: 7,
    },
    {
      id: "star-8",
      label: "Arina’s birthday",
      message: "April 25th, 1999.",
      x: 14,
      y: 75,
      order: 8,
    },
    {
      id: "star-9",
      label: "Negar’s birthday",
      message: "July 13th, 1999.",
      x: 88,
      y: 78,
      order: 9,
    },
  ],

  // Media (leave paths as-is; add your own files at these locations)
  heroPhoto: "/photos/bf2.jpg",
  heroPhotoAlt: "A favourite photo of the two of us",
  backgroundAudioSrc: "/audio/Taylor Swift - seven.mp3",
  voiceNoteSrc: "/audio/Otherhalf voice.mp3",

  theme: {
    paper: "#141935",
    paperDark: "#1c2348",
    paperNight: "#141935",
    ink: "#eef0f6",
    mutedInk: "#9aa6c9",
    rose: "#b6c6ef",
    burgundy: "#3d4a7a",
    sage: "#8fa8c9",
    fadedBlue: "#9fb8d9",
    midnight: "#1f2547",
    saturnGold: "#c9a86a",
    moonCream: "#f3ecd9",
    tape: "#c7d0e6",
  },

  // PERSONALIZE THIS
  insideJokes: [
    "Winx Club forever",
    "The birthday party my mom said no to",
    "Leo. Just Leo.",
    "The Banana Fish phase",
    "Naps that turned into four hours",
  ],

  // PERSONALIZE THIS
  secretMessage:
    "You found the secret part, which is fitting because you always notice the little things.",

  spaceStickerLabels: [
    "A suspiciously sparkly Saturn sticker",
    "A tiny hand-drawn Moon",
    "A postage stamp shaped like a star",
  ],

  taylorInspiredSectionLabels: {
    memories: "Our memories",
    timeline: "Our story",
    eras: "Our friendship eras",
    openWhen: "Open when…",
    reasons: "Things I love about you",
    soundtrack: "The soundtrack of us",
    constellation: "Our constellation",
    finalPage: "For my other half",
  },
  // PERSONALIZE THIS: spelled out, one letter per bead, on the interactive bracelet
  braceletWord: "OTHER HALF",
  // PERSONALIZE THIS
  hiddenStampMessage:
    "Every time I see the moon or the clouds, I think of you and send you the picture, you do the same, feels so special and rare, love it!",
};

export default birthdayContent;
