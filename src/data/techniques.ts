export interface Technique {
  slug: string;
  title: string;
  subtitle: string;
  emoji: string;
  description: string;
  hero: string;
  whatIsIt: string;
  whenToUse: string[];
  howToDoIt: { step: number; title: string; description: string }[];
  wallpaperQuote: string;
  source: string;
  seoKeywords: string[];
}

export const techniques: Technique[] = [
  {
    slug: "grounding",
    title: "5-4-3-2-1 Grounding",
    subtitle: "Anchor yourself to the present with your five senses",
    emoji: "🧭",
    description:
      "A simple but powerful technique that uses your five senses to pull you out of spiraling thoughts and back into the present moment.",
    hero: "When your mind races, your senses are the anchor.",
    whatIsIt:
      "The 5-4-3-2-1 Grounding technique is a sensory awareness exercise from Dialectical Behavior Therapy (DBT). By consciously noticing what you see, touch, hear, smell, and taste, you interrupt anxiety loops and reconnect with your physical environment. It takes less than 2 minutes and works anywhere.",
    whenToUse: [
      "During a panic attack or anxiety spike",
      "When you feel dissociated or detached from reality",
      "When racing thoughts won't stop",
      "Before a stressful event (presentation, interview, difficult conversation)",
      "When you feel overwhelmed and need to reset",
    ],
    howToDoIt: [
      {
        step: 1,
        title: "See — 5 things",
        description:
          "Look around and name 5 things you can see. Be specific: \"the blue pen on my desk\" not just \"a pen.\"",
      },
      {
        step: 2,
        title: "Touch — 4 things",
        description:
          "Notice 4 things you can physically feel. The texture of your shirt, the warmth of your coffee cup, the ground under your feet.",
      },
      {
        step: 3,
        title: "Hear — 3 things",
        description:
          "Listen for 3 distinct sounds. The hum of your computer, distant traffic, birds outside. Close your eyes to focus.",
      },
      {
        step: 4,
        title: "Smell — 2 things",
        description:
          "Identify 2 scents around you. Your shampoo, fresh air, the coffee brewing. If needed, bring something close to smell.",
      },
      {
        step: 5,
        title: "Taste — 1 thing",
        description:
          "Notice 1 taste. Take a sip of water, a breath mint, or simply notice the taste in your mouth right now.",
      },
    ],
    wallpaperQuote: "5-4-3-2-1 — You are here. You are safe.",
    source: "Dialectical Behavior Therapy (DBT)",
    seoKeywords: [
      "5-4-3-2-1 grounding technique",
      "grounding exercises for anxiety",
      "panic attack grounding",
      "sensory grounding",
      "anxiety relief technique",
    ],
  },
  {
    slug: "mindfulness",
    title: "Mindfulness Meditation",
    subtitle: "Be here, fully, without judgment",
    emoji: "🧘",
    description:
      "The practice of focusing your attention on the present moment — your breath, your body, your surroundings — without judging or trying to change anything.",
    hero: "You don't need to clear your mind. Just notice it.",
    whatIsIt:
      "Mindfulness meditation comes from Mindfulness-Based Stress Reduction (MBSR), developed by Dr. Jon Kabat-Zinn. It's not about emptying your mind — it's about observing your thoughts, feelings, and bodily sensations as they are, with curiosity instead of judgment. Even 5 minutes a day can reshape how your brain responds to stress.",
    whenToUse: [
      "As part of your morning or evening routine",
      "During a work break to reset focus",
      "When you notice stress building throughout the day",
      "Before sleep to quiet a busy mind",
      "Anytime you feel emotionally reactive",
    ],
    howToDoIt: [
      {
        step: 1,
        title: "Find a comfortable position",
        description:
          "Sit, stand, or lie down — wherever you're comfortable. Keep your back straight but not rigid. Rest your hands naturally.",
      },
      {
        step: 2,
        title: "Focus on your breath",
        description:
          "Notice the sensation of breathing. The cool air entering your nostrils, your chest rising, your belly expanding. Don't change your breathing — just observe it.",
      },
      {
        step: 3,
        title: "When your mind wanders, come back",
        description:
          "Your mind WILL wander. That's not failure — it's what minds do. When you notice it, gently bring your attention back to your breath. This is the actual practice.",
      },
      {
        step: 4,
        title: "Start with 5 minutes",
        description:
          "Set a timer for 5 minutes. You can increase gradually. Consistency matters more than duration — 5 minutes daily beats 30 minutes once a week.",
      },
      {
        step: 5,
        title: "Close with intention",
        description:
          "When your timer goes off, slowly open your eyes. Take 3 deep breaths. Set a simple intention for your next activity.",
      },
    ],
    wallpaperQuote: "Breathe in. Breathe out. This moment is enough.",
    source: "Mindfulness-Based Stress Reduction (MBSR)",
    seoKeywords: [
      "mindfulness for beginners",
      "how to meditate for anxiety",
      "mindfulness meditation guide",
      "stress reduction meditation",
      "5 minute meditation",
    ],
  },
  {
    slug: "pomodoro",
    title: "Pomodoro Technique",
    subtitle: "Beat overwhelm with focused 25-minute sprints",
    emoji: "🍅",
    description:
      "A time management method that breaks work into focused 25-minute blocks separated by short breaks. Originally designed for productivity, it's surprisingly effective for anxiety-driven overwhelm.",
    hero: "You don't need to do everything. Just 25 minutes.",
    whatIsIt:
      "The Pomodoro Technique was created by Francesco Cirillo in the late 1980s, named after a tomato-shaped kitchen timer. The core idea: work with full focus for 25 minutes, then take a 5-minute break. After 4 cycles, take a longer 15-30 minute break. For anxiety sufferers, this method is transformative because it eliminates the paralysis of \"I have too much to do\" — you only need to commit to 25 minutes.",
    whenToUse: [
      "When you feel overwhelmed by your to-do list",
      "When procrastination is driven by anxiety, not laziness",
      "When you're struggling to start a task",
      "When you've been working too long without breaks (burnout risk)",
      "When perfectionism is making simple tasks feel impossible",
    ],
    howToDoIt: [
      {
        step: 1,
        title: "Pick one task",
        description:
          "Not the whole project. One specific, small task. \"Write the introduction paragraph\" not \"finish the report.\" If it feels too big, break it down more.",
      },
      {
        step: 2,
        title: "Set a timer for 25 minutes",
        description:
          "Use any timer — your phone, a website, a physical timer. Commit to working on ONLY that task until the timer rings. No multitasking.",
      },
      {
        step: 3,
        title: "Work with full focus",
        description:
          "If distracting thoughts come up, jot them on a notepad and return to your task. The timer will end — you just need to keep going until then.",
      },
      {
        step: 4,
        title: "Take a 5-minute break",
        description:
          "Stand up, stretch, get water, look out a window. Step away from your screen. Your brain needs this to consolidate what you just did.",
      },
      {
        step: 5,
        title: "After 4 cycles, take a long break",
        description:
          "Complete 4 Pomodoros, then reward yourself with a 15-30 minute break. Go for a walk, grab a snack, do something enjoyable.",
      },
    ],
    wallpaperQuote: "25 minutes. One thing. You've got this.",
    source: "Francesco Cirillo (1980s)",
    seoKeywords: [
      "pomodoro technique for anxiety",
      "overwhelm management",
      "focus technique for stress",
      "productivity and mental health",
      "anxiety task management",
    ],
  },
  {
    slug: "sensory",
    title: "Sensory Grounding",
    subtitle: "Use your body to calm your nervous system",
    emoji: "🌊",
    description:
      "Activate your physical senses intentionally — through temperature, texture, smell, and sound — to quickly down-regulate your nervous system when emotions feel overwhelming.",
    hero: "Your body is the fastest path back to calm.",
    whatIsIt:
      "Sensory Grounding draws from trauma-informed therapy and somatic experiencing. Unlike cognitive techniques that work from the top down (thoughts → emotions), sensory grounding works from the bottom up (body → emotions). By stimulating your senses with specific intensity, you engage the vagus nerve and shift your nervous system from fight-or-flight into rest-and-digest mode.",
    whenToUse: [
      "During intense emotional flooding",
      "When you're having a flashback or intrusive memory",
      "When anxiety peaks and thinking techniques aren't enough",
      "After a distressing event or conversation",
      "When you feel emotionally numb or disconnected",
    ],
    howToDoIt: [
      {
        step: 1,
        title: "Temperature shock",
        description:
          "Hold an ice cube, splash cold water on your face, or run your hands under cold water. The sudden temperature change activates your dive reflex, immediately slowing your heart rate.",
      },
      {
        step: 2,
        title: "Strong sensation",
        description:
          "Snap a rubber band on your wrist (gently), grip something textured firmly, or bite into a lemon wedge. Strong but safe sensory input interrupts emotional spirals.",
      },
      {
        step: 3,
        title: "Aromatherapy",
        description:
          "Smell something strong and grounding: lavender, peppermint, eucalyptus, or even coffee grounds. Scent reaches the emotional center of your brain faster than any other sense.",
      },
      {
        step: 4,
        title: "Soothing sound",
        description:
          "Play nature sounds, rain, ocean waves, or a calming playlist. Rhythmic, predictable sounds help regulate your nervous system. Try brown noise on YouTube.",
      },
      {
        step: 5,
        title: "Grounding pressure",
        description:
          "Wrap yourself in a heavy blanket, hug a pillow tightly, or press your back against a wall. Deep pressure stimulates serotonin release and creates a sense of safety.",
      },
    ],
    wallpaperQuote: "Feel the ground beneath you. You are anchored.",
    source: "Somatic Experiencing / Trauma-Informed Therapy",
    seoKeywords: [
      "sensory grounding exercises",
      "somatic anxiety relief",
      "body-based anxiety techniques",
      "nervous system regulation",
      "emotional flooding relief",
    ],
  },
  {
    slug: "name-it",
    title: "Name It to Tame It",
    subtitle: "Put your feelings into words and watch them shrink",
    emoji: "🏷️",
    description:
      "The science-backed practice of labeling your emotions with specific words. It sounds too simple, but research shows it actually reduces activity in your brain's fear center.",
    hero: "Name it. Don't numb it.",
    whatIsIt:
      "\"Name It to Tame It\" is a concept popularized by Dr. Dan Siegel, based on affect labeling research from UCLA's Matthew Lieberman. Studies using fMRI scans show that when you put feelings into words, activity in the amygdala (your brain's alarm system) decreases while activity in the prefrontal cortex (your rational brain) increases. In other words: labeling emotions literally changes your brain chemistry in real time.",
    whenToUse: [
      "When you feel intense but unclear emotions",
      "During or after a conflict with someone",
      "When you're emotionally reactive and want to respond thoughtfully",
      "When you can't figure out why you feel bad",
      "As a daily emotional check-in practice",
    ],
    howToDoIt: [
      {
        step: 1,
        title: "Pause and notice",
        description:
          "Stop what you're doing. Close your eyes for a moment. Ask yourself: \"What am I feeling right now?\" Don't rush to answer — let the feeling surface.",
      },
      {
        step: 2,
        title: "Be specific, not vague",
        description:
          "Go beyond \"bad\" or \"fine.\" Try: \"I'm feeling frustrated because my idea was dismissed,\" or \"I'm anxious about tomorrow's meeting and I feel unprepared.\" Specificity is where the magic happens.",
      },
      {
        step: 3,
        title: "Say it or write it",
        description:
          "Speak the feeling out loud or write it down. \"I am feeling [specific emotion] because [reason].\" Hearing your own voice or seeing the words adds another layer of processing.",
      },
      {
        step: 4,
        title: "Notice the shift",
        description:
          "After labeling, pause and notice what changed. The emotion probably didn't disappear, but it likely feels smaller, more manageable, less overwhelming. That's your prefrontal cortex coming online.",
      },
      {
        step: 5,
        title: "Choose your response",
        description:
          "Now that you've named it, you have space to choose what to do next. You might still need to address the situation, but you'll do it from a calmer, clearer state.",
      },
    ],
    wallpaperQuote: "Name it. Don't numb it.",
    source: "Dr. Dan Siegel / UCLA Affect Labeling Research",
    seoKeywords: [
      "name it to tame it",
      "emotion labeling technique",
      "affect labeling anxiety",
      "how to process emotions",
      "emotional regulation technique",
    ],
  },
];

export function getTechnique(slug: string): Technique | undefined {
  return techniques.find((t) => t.slug === slug);
}
