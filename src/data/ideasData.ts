import { PhilosophicalIdea } from "../types/philosophy";

export const ideasData: PhilosophicalIdea[] = [
  {
    id: "socratic-method",
    name: "Socratic Method",
    description:
      "A form of inquiry and discussion between individuals, based on asking and answering questions to stimulate critical thinking and to draw out ideas and underlying presuppositions.",
    originSchool: "classical",
    keyThinkers: ["socrates", "plato"],
    relatedIdeas: ["dialectical-method", "critical-thinking", "maieutics"],
    challenges: ["dogmatism", "unreflective-belief", "sophistry"],
    modernApplications: [
      "Education",
      "Psychotherapy",
      "Legal cross-examination",
      "Scientific inquiry",
    ],
    influences: ["Greek dialectic", "Sophist debates"],
    developments: ["Socratic dialogues", "Critical pedagogy"],
    legacy: "Foundation for Western philosophical inquiry and modern pedagogy",
    keyTexts: ["Plato's Dialogues"],
    externalLinks: [
      {
        title: "Internet Encyclopedia of Philosophy: Socratic Method",
        url: "https://iep.utm.edu/socratic-method/",
        type: "encyclopedia",
      },
      {
        title: "Britannica: Socratic Method",
        url: "https://www.britannica.com/topic/Socratic-method",
        type: "article",
      },
      {
        title: "Philosophy Now: Socratic Method and Critical Thinking",
        url: "https://philosophynow.org/issues/141/Socratic_Questioning_and_Critical_Thinking",
        type: "article",
      },
    ],
  },
  {
    id: "theory-of-forms",
    name: "Theory of Forms",
    description:
      "Plato's theory that non-physical forms or ideas represent the most accurate reality. According to this theory, the material world is an imperfect reflection of perfect, eternal, and unchangeable forms.",
    originSchool: "classical",
    keyThinkers: ["plato"],
    relatedIdeas: ["allegory-of-cave", "philosopher-king", "tripartite-soul"],
    challenges: ["materialism", "empiricism", "aristotelian-realism"],
    modernApplications: [
      "Mathematical Platonism",
      "Idealist philosophy",
      "Aesthetic theory",
    ],
    influences: ["Socratic inquiry", "Parmenidean being"],
    developments: ["Theory of universals", "Metaphysical realism"],
    legacy: "Shaped metaphysics and epistemology across millennia",
    keyTexts: ["Republic", "Parmenides"],
    externalLinks: [
      {
        title: "Internet Encyclopedia of Philosophy: Plato’s Metaphysics",
        url: "https://iep.utm.edu/plato-metaphysics-epistemology/",
        type: "encyclopedia",
      },
      {
        title: "Britannica: Theory of Forms",
        url: "https://www.britannica.com/topic/Platos-theory-of-forms",
        type: "article",
      },
      {
        title: "Plato, Parmenides – Full Text (Perseus Digital Library)",
        url: "http://www.perseus.tufts.edu/hopper/text?doc=Plat.+Parm.+126a",
        type: "book",
      },
    ],
  },
  {
    id: "akrasia",
    name: "Akrasia (Weakness of Will)",
    description:
      "The state of acting against one’s better judgment; a challenge to Socrates’ claim that virtue is knowledge.",
    originSchool: "classical",
    keyThinkers: ["socrates", "aristotle"],
    relatedIdeas: ["virtue-is-knowledge", "virtue-ethics"],
    challenges: ["self-control", "desire"],
    modernApplications: ["Addiction studies", "Moral psychology"],
    externalLinks: [
      {
        title: "Akrasia – Stanford Encyclopedia of Philosophy",
        url: "https://plato.stanford.edu/entries/akrasia/",
        type: "encyclopedia",
      },
      {
        title: "Akrasia – Internet Encyclopedia of Philosophy",
        url: "https://iep.utm.edu/akrasia/",
        type: "article",
      },
      {
        title: "Aristotle on Akrasia – Academic Paper (JSTOR)",
        url: "https://www.jstor.org/stable/2253656",
        type: "academic paper",
      },
    ],
  },
  {
    id: "monism",
    name: "Monism",
    description:
      "The metaphysical view that reality is ultimately one substance or principle, contrasting with dualism or pluralism.",
    originSchool: "classical",
    keyThinkers: ["parmenides", "spinoza"],
    relatedIdeas: ["non-dualism", "materialism"],
    challenges: ["pluralism", "dualism"],
    modernApplications: ["Philosophy of mind", "Physics"],
    externalLinks: [
      {
        title: "Monism – Stanford Encyclopedia of Philosophy",
        url: "https://plato.stanford.edu/entries/monism/",
        type: "encyclopedia",
      },
      {
        title: "Monism – Internet Encyclopedia of Philosophy",
        url: "https://iep.utm.edu/monism/",
        type: "article",
      },
      {
        title: "Monism – Britannica",
        url: "https://en.m.wikipedia.org/wiki/Monism",
        type: "article",
      },
    ],
  },
  {
    id: "empiricism",
    name: "Empiricism",
    description:
      "The epistemological view that knowledge comes primarily from sensory experience, challenging rationalism and Platonic forms.",
    originSchool: "early-modern",
    keyThinkers: ["locke", "hume", "berkeley"],
    relatedIdeas: ["skepticism", "realism"],
    challenges: ["rationalism", "idealism"],
    modernApplications: ["Scientific method", "Psychology"],
    externalLinks: [
      {
        title: "Empiricism – Stanford Encyclopedia of Philosophy",
        url: "https://plato.stanford.edu/entries/empiricism/",
        type: "encyclopedia",
      },
      {
        title: "Empiricism – Internet Encyclopedia of Philosophy",
        url: "https://iep.utm.edu/empiricism/",
        type: "article",
      },
      {
        title: "Empiricism – Britannica",
        url: "https://www.britannica.com/topic/empiricism",
        type: "encyclopedia",
      },
    ],
  },
  {
    id: "realism",
    name: "Realism",
    description:
      "The philosophical position that universals or external reality exist independently of perception or concepts.",
    originSchool: "ancient-medieval",
    keyThinkers: ["plato", "aristotle", "aquinas"],
    relatedIdeas: ["empiricism", "idealism"],
    challenges: ["nominalism", "anti-realism"],
    modernApplications: ["Metaphysics", "Science", "Political theory"],
    externalLinks: [
      {
        title: "Realism – Stanford Encyclopedia of Philosophy",
        url: "https://plato.stanford.edu/entries/realism/",
        type: "encyclopedia",
      },
      {
        title: "Realism – Internet Encyclopedia of Philosophy",
        url: "https://iep.utm.edu/realism/",
        type: "article",
      },
      {
        title: "Realism – Britannica",
        url: "https://www.britannica.com/topic/realism-philosophy",
        type: "encyclopedia",
      },
    ],
  },
  {
    id: "heteronomy",
    name: "Heteronomy",
    description:
      "Kant’s concept of being governed by external influences rather than self-legislated moral law, opposed to autonomy.",
    originSchool: "german-idealism",
    keyThinkers: ["kant"],
    relatedIdeas: ["moral-autonomy", "categorical-imperative"],
    challenges: ["freedom", "self-determination"],
    modernApplications: ["Ethics", "Political theory"],
    externalLinks: [
      {
        title: "Autonomy and Heteronomy – Stanford Encyclopedia of Philosophy",
        url: "https://plato.stanford.edu/entries/autonomy-moral/#Het",
        type: "encyclopedia",
      },
      {
        title:
          "Kant: Autonomy and Heteronomy – Internet Encyclopedia of Philosophy",
        url: "https://iep.utm.edu/kant-moral/#Heteronomy",
        type: "article",
      },
      {
        title: "Kant on Autonomy and Heteronomy – Academic Paper",
        url: "https://www.jstor.org/stable/2107544",
        type: "academic paper",
      },
    ],
  },
  {
    id: "categorical-imperative",
    name: "Categorical Imperative",
    description:
      "Kant's principle that one should act only according to maxims that could become universal laws. It represents the supreme principle of morality and emphasizes duty-based ethics.",
    originSchool: "german-idealism",
    keyThinkers: ["kant"],
    relatedIdeas: ["moral-autonomy", "good-will", "kingdom-of-ends"],
    challenges: ["consequentialism", "moral-relativism", "virtue-ethics"],
    modernApplications: [
      "Medical ethics",
      "Business ethics",
      "Human rights law",
      "AI ethics",
      "Data governance",
      "Responsible AI audits",
    ],
    influences: ["Rationalism", "Christian ethics"],
    developments: ["Deontological frameworks"],
    legacy: "Cornerstone of deontological ethics and human rights",
    keyTexts: ["Groundwork of the Metaphysics of Morals"],
    externalLinks: [
      {
        title: "Internet Encyclopedia of Philosophy: Kant’s Moral Philosophy",
        url: "https://iep.utm.edu/kant-moral/",
        type: "encyclopedia",
      },
      {
        title: "Britannica: Categorical Imperative",
        url: "https://www.britannica.com/topic/categorical-imperative",
        type: "article",
      },
      {
        title: "Project Gutenberg: Groundwork of the Metaphysics of Morals",
        url: "https://www.gutenberg.org/ebooks/5682",
        type: "book",
      },
    ],
  },
  {
    id: "will-to-power",
    name: "Will to Power",
    description:
      "Nietzsche's concept describing what he believed to be the main driving force in humans: the desire to grow, expand, and exercise power over one's environment and oneself.",
    originSchool: "existentialism-precursors",
    keyThinkers: ["nietzsche"],
    relatedIdeas: ["ubermensch", "eternal-recurrence", "master-slave-morality"],
    challenges: [
      "christian-morality",
      "democratic-equality",
      "utilitarian-happiness",
    ],
    modernApplications: [
      "Psychology",
      "Leadership theory",
      "Evolutionary psychology",
      "Self-improvement",
      "Organizational behavior",
    ],
    influences: ["Schopenhauer", "Greek tragedy"],
    developments: ["Genealogical method"],
    legacy: "Catalyst for existentialism and postmodern critiques",
    keyTexts: ["Thus Spoke Zarathustra"],
    externalLinks: [
      {
        title: "Internet Encyclopedia of Philosophy: Nietzsche’s Ethics",
        url: "https://iep.utm.edu/nietz-eth/",
        type: "encyclopedia",
      },
      {
        title: "Britannica: Nietzsche – Will to Power",
        url: "https://www.britannica.com/topic/will-to-power",
        type: "article",
      },
      {
        title: "Nietzsche’s Will to Power (Internet Archive full text)",
        url: "https://archive.org/details/willtopower00nietuoft",
        type: "book",
      },
    ],
  },
  {
    id: "aristotelian-virtue-ethics",
    name: "Virtue Ethics",
    description:
      "Aristotle's ethics focusing on character and virtue as the basis for moral life, emphasizing the cultivation of good habits to achieve eudaimonia (flourishing).",
    originSchool: "classical",
    keyThinkers: ["aristotle"],
    relatedIdeas: ["golden-mean", "eudaimonia", "practical-wisdom"],
    challenges: ["utilitarianism", "deontology", "moral-relativism"],
    modernApplications: [
      "Character education",
      "Medical ethics",
      "Leadership training",
      "AI value alignment",
      "Professional ethics",
    ],
    externalLinks: [
      {
        title: "Internet Encyclopedia of Philosophy: Virtue Ethics",
        url: "https://iep.utm.edu/virtue-ethics/",
        type: "encyclopedia",
      },
      {
        title: "Britannica: Virtue Ethics",
        url: "https://www.britannica.com/topic/virtue-ethics",
        type: "article",
      },
      {
        title: "Philosophy Now: Virtue Ethics in the Modern World",
        url: "https://philosophynow.org/issues/82/Virtue_Ethics_in_the_Modern_World",
        type: "article",
      },
    ],
  },
  {
    id: "confucian-ren",
    name: "Confucian Ren (Humaneness)",
    description:
      "Confucius emphasized ren (humaneness, benevolence) as the highest virtue guiding social harmony and personal cultivation.",
    originSchool: "confucianism",
    keyThinkers: ["confucius"],
    relatedIdeas: ["li", "filial-piety", "virtue-ethics"],
    challenges: ["legalism", "individualism"],
    modernApplications: [
      "East Asian education",
      "Political theory",
      "Business ethics",
      "Corporate governance",
    ],
    externalLinks: [
      {
        title: "Internet Encyclopedia of Philosophy: Confucius",
        url: "https://iep.utm.edu/confucius/",
        type: "encyclopedia",
      },
      {
        title: "Britannica: Ren (Confucianism)",
        url: "https://www.britannica.com/topic/ren",
        type: "article",
      },
      {
        title: "The Analects of Confucius – Complete Text",
        url: "https://www.gutenberg.org/ebooks/3330",
        type: "book",
      },
    ],
  },
  {
    id: "daoist-wuwei",
    name: "Daoist Wu Wei",
    description:
      "The Daoist principle of effortless action or non-interference with the natural flow of the universe.",
    originSchool: "daoism",
    keyThinkers: ["laozi", "zhuangzi"],
    relatedIdeas: ["dao", "naturalness", "yin-yang"],
    challenges: ["activism", "rationalism"],
    modernApplications: [
      "Mindfulness",
      "Environmental ethics",
      "Management minimalism",
    ],
    externalLinks: [
      {
        title: "Internet Encyclopedia of Philosophy: Daoism",
        url: "https://iep.utm.edu/daoism/",
        type: "encyclopedia",
      },
      {
        title: "Britannica: Wu Wei",
        url: "https://www.britannica.com/topic/wuwei",
        type: "article",
      },
      {
        title: "Tao Te Ching – Full English Text (Sacred Texts)",
        url: "https://www.sacred-texts.com/tao/taote.htm",
        type: "book",
      },
    ],
  },
  {
    id: "advaita-vedanta-nondualism",
    name: "Advaita Vedanta Nondualism",
    description:
      "Shankara’s doctrine that ultimate reality (Brahman) and the self (Atman) are identical, rejecting dualism.",
    originSchool: "hindu-philosophy",
    keyThinkers: ["adi-shankara"],
    relatedIdeas: ["maya", "moksha", "brahman"],
    challenges: ["dvaita-dualism", "buddhist-emptiness"],
    modernApplications: [
      "Spirituality",
      "Nondual awareness studies",
      "Contemplative neuroscience",
    ],
    externalLinks: [
      {
        title: "Internet Encyclopedia of Philosophy: Advaita Vedanta",
        url: "https://iep.utm.edu/advaita/",
        type: "encyclopedia",
      },
      {
        title: "Britannica: Vedanta Philosophy",
        url: "https://www.britannica.com/topic/Vedanta",
        type: "article",
      },
      {
        title: "Shankara: Crest-Jewel of Discrimination (Sacred Texts)",
        url: "https://www.sacred-texts.com/hin/cjd/index.htm",
        type: "book",
      },
    ],
  },
  {
    id: "buddhist-four-noble-truths",
    name: "Four Noble Truths",
    description:
      "The core Buddhist teaching that life involves suffering, its cause is craving, it can be ended, and the Eightfold Path provides the way.",
    originSchool: "buddhism",
    keyThinkers: ["buddha"],
    relatedIdeas: ["eightfold-path", "dependent-origination", "nirvana"],
    challenges: ["materialism", "eternalism", "nihilism"],
    modernApplications: [
      "Mindfulness-based therapy",
      "Meditation research",
      "CBT integrations",
    ],
    externalLinks: [
      {
        title: "Internet Encyclopedia of Philosophy: Buddhism",
        url: "https://iep.utm.edu/buddha/",
        type: "encyclopedia",
      },
      {
        title: "Britannica: Four Noble Truths",
        url: "https://www.britannica.com/topic/Four-Noble-Truths",
        type: "article",
      },
      {
        title: "Dhammapada – Full Text (Sacred Texts)",
        url: "https://www.sacred-texts.com/bud/dhp/index.htm",
        type: "book",
      },
    ],
  },
  {
    id: "mencian-goodness",
    name: "Mencian View of Human Nature",
    description:
      "Mencius argued that humans are inherently good and need cultivation to realize their potential.",
    originSchool: "confucianism",
    keyThinkers: ["mencius"],
    relatedIdeas: ["ren", "li", "virtue-ethics"],
    challenges: ["xunzi-evil-nature", "legalism"],
    modernApplications: [
      "Moral education",
      "Positive psychology",
      "Social policy design",
    ],
    externalLinks: [
      {
        title: "Internet Encyclopedia of Philosophy: Mencius",
        url: "https://iep.utm.edu/mencius/",
        type: "encyclopedia",
      },
      {
        title: "Britannica: Mencius",
        url: "https://www.britannica.com/biography/Mencius",
        type: "article",
      },
      {
        title: "The Works of Mencius – Full Text",
        url: "https://www.gutenberg.org/ebooks/14065",
        type: "book",
      },
    ],
  },
  {
    id: "xunzi-evil-nature",
    name: "Xunzi’s View of Human Nature",
    description:
      "Xunzi argued that humans are inherently selfish and require education and rituals to become good.",
    originSchool: "confucianism",
    keyThinkers: ["xunzi"],
    relatedIdeas: ["li", "legalism"],
    challenges: ["mencius-goodness", "daoist-naturalness"],
    modernApplications: [
      "Law enforcement",
      "Educational theory",
      "Behavioral public policy",
    ],
    externalLinks: [
      {
        title: "Internet Encyclopedia of Philosophy: Xunzi",
        url: "https://iep.utm.edu/xunzi/",
        type: "encyclopedia",
      },
      {
        title: "Britannica: Xunzi",
        url: "https://www.britannica.com/biography/Xunzi",
        type: "article",
      },
      {
        title: "Xunzi: Basic Writings (Full Text at Archive.org)",
        url: "https://archive.org/details/xunzibasicwriting00hsun",
        type: "book",
      },
    ],
  },
  {
    id: "al-farabi-virtue-city",
    name: "Al-Farabi’s Virtuous City",
    description:
      "An Islamic philosophical vision of an ideal society governed by virtuous leadership and divine principles.",
    originSchool: "islamic-philosophy",
    keyThinkers: ["al-farabi"],
    relatedIdeas: ["plato-republic", "islamic-political-thought"],
    challenges: ["authoritarianism", "secularism"],
    modernApplications: [
      "Islamic political thought",
      "Ethics of governance",
      "City planning ethics",
    ],
    externalLinks: [
      {
        title: "Internet Encyclopedia of Philosophy: Al-Farabi",
        url: "https://iep.utm.edu/al-farabi/",
        type: "encyclopedia",
      },
      {
        title: "Britannica: Al-Farabi – Political Philosophy",
        url: "https://www.britannica.com/biography/Al-Farabi",
        type: "article",
      },
      {
        title: "Al-Farabi: On the Perfect State (Archive.org full text)",
        url: "https://archive.org/details/AlFarabiOnThePerfectState",
        type: "book",
      },
    ],
  },
  {
    id: "avicenna-metaphysics",
    name: "Avicenna’s Metaphysics",
    description:
      "Avicenna integrated Aristotelian philosophy with Islamic theology, emphasizing the Necessary Existent (God).",
    originSchool: "islamic-philosophy",
    keyThinkers: ["avicenna"],
    relatedIdeas: ["essence-existence", "aristotelianism", "monotheism"],
    challenges: ["al-ghazali-criticism", "empiricism"],
    modernApplications: [
      "Philosophy of religion",
      "Metaphysics",
      "Analytic theology",
    ],
    externalLinks: [
      {
        title: "Internet Encyclopedia of Philosophy: Avicenna",
        url: "https://iep.utm.edu/ibn-sina/",
        type: "encyclopedia",
      },
      {
        title: "Britannica: Avicenna",
        url: "https://www.britannica.com/biography/Avicenna",
        type: "article",
      },
      {
        title: "Avicenna: Metaphysics (Archive.org full text)",
        url: "https://archive.org/details/IbnSinaMetaphysicsEnglish",
        type: "book",
      },
    ],
  },
  {
    id: "al-ghazali-incoherence",
    name: "Critique of Philosophy",
    description:
      'Al-Ghazali’s "Incoherence of the Philosophers" argued against excessive rationalism, emphasizing faith and divine will.',
    originSchool: "islamic-philosophy",
    keyThinkers: ["al-ghazali"],
    relatedIdeas: ["sufism", "theology"],
    challenges: ["avicenna-metaphysics", "aristotelianism"],
    modernApplications: [
      "Theology",
      "Faith vs reason debates",
      "Science and religion studies",
    ],
    externalLinks: [
      {
        title: "Internet Encyclopedia of Philosophy: Al-Ghazali",
        url: "https://iep.utm.edu/al-ghazali/",
        type: "encyclopedia",
      },
      {
        title: "Britannica: Al-Ghazali",
        url: "https://www.britannica.com/biography/al-Ghazali",
        type: "article",
      },
      {
        title: "Al-Ghazali: The Incoherence of the Philosophers (Archive.org)",
        url: "https://archive.org/details/incoherenceofphi00ghaz",
        type: "book",
      },
    ],
  },
  {
    id: "ibn-rushd-reconciliation",
    name: "Ibn Rushd on Faith and Reason",
    description:
      "Ibn Rushd (Averroes) argued for harmony between religion and philosophy, defending Aristotle.",
    originSchool: "islamic-philosophy",
    keyThinkers: ["averroes"],
    relatedIdeas: ["aristotelianism", "rationalism"],
    challenges: ["al-ghazali-incoherence"],
    modernApplications: ["Science-religion dialogue", "Philosophy of science"],
    externalLinks: [
      {
        title: "Internet Encyclopedia of Philosophy: Averroes",
        url: "https://iep.utm.edu/ibn-rushd/",
        type: "encyclopedia",
      },
      {
        title: "Britannica: Averroes",
        url: "https://www.britannica.com/biography/Averroes",
        type: "article",
      },
      {
        title:
          "Averroes: The Incoherence of the Incoherence (Archive.org full text)",
        url: "https://archive.org/details/averroes-incoherence-of-incoherence",
        type: "book",
      },
    ],
  },
  {
    id: "sankhya-dualism",
    name: "Sāṃkhya Dualism",
    description:
      "An Indian philosophical system distinguishing between consciousness (purusha) and matter (prakriti).",
    originSchool: "hindu-philosophy",
    keyThinkers: ["kapila"],
    relatedIdeas: ["yoga", "purusha", "prakriti"],
    challenges: ["advaita-nondualism", "buddhist-emptiness"],
    modernApplications: [
      "Yoga philosophy",
      "Mind-body studies",
      "Cognitive science debates",
    ],
    externalLinks: [
      {
        title: "Internet Encyclopedia of Philosophy: Samkhya",
        url: "https://iep.utm.edu/samkhya/",
        type: "encyclopedia",
      },
      {
        title: "Britannica: Samkhya",
        url: "https://www.britannica.com/topic/Sankhya",
        type: "article",
      },
      {
        title: "Samkhya Karika – Full Text (Sacred Texts)",
        url: "https://www.sacred-texts.com/hin/sbe01/index.htm",
        type: "book",
      },
    ],
  },
  {
    id: "augustinian-theodicy",
    name: "Augustinian Theodicy",
    description:
      "St. Augustine’s explanation of evil as the privation of good, consistent with an omnipotent God.",
    originSchool: "christian-philosophy",
    keyThinkers: ["augustine"],
    relatedIdeas: ["original-sin", "free-will-defense"],
    challenges: ["problem-of-evil", "manichean-dualism"],
    modernApplications: ["Philosophy of religion", "Pastoral counseling"],
    externalLinks: [
      {
        title: "Internet Encyclopedia of Philosophy: Augustine",
        url: "https://iep.utm.edu/augustine/",
        type: "encyclopedia",
      },
      {
        title: "Britannica: Theodicy – Augustine",
        url: "https://www.britannica.com/topic/theodicy/The-Augustinian-theodicy",
        type: "article",
      },
      {
        title: "Augustine: Confessions (Project Gutenberg)",
        url: "https://www.gutenberg.org/ebooks/3296",
        type: "book",
      },
    ],
  },
  {
    id: "thomistic-natural-law",
    name: "Natural Law Theory",
    description:
      "Aquinas argued that moral law is grounded in human nature and discoverable by reason.",
    originSchool: "scholasticism",
    keyThinkers: ["thomas-aquinas"],
    relatedIdeas: ["eternal-law", "divine-law", "human-law"],
    challenges: ["legal-positivism", "moral-relativism"],
    modernApplications: ["Law", "Human rights", "Bioethics"],
    externalLinks: [
      {
        title: "Internet Encyclopedia of Philosophy: Natural Law",
        url: "https://iep.utm.edu/natlaw/",
        type: "encyclopedia",
      },
      {
        title: "Britannica: Natural Law",
        url: "https://www.britannica.com/topic/natural-law",
        type: "article",
      },
      {
        title: "Aquinas: Summa Theologica (Internet Sacred Texts)",
        url: "https://www.sacred-texts.com/chr/aquinas/summa/index.htm",
        type: "book",
      },
    ],
  },
  {
    id: "rousseau-general-will",
    name: "General Will",
    description:
      "Rousseau’s concept that legitimate political authority rests on the collective will of the people.",
    originSchool: "enlightenment",
    keyThinkers: ["rousseau"],
    relatedIdeas: ["social-contract", "popular-sovereignty"],
    challenges: ["tyranny-of-majority", "individual-liberty"],
    modernApplications: ["Democratic theory", "Civic tech"],
    externalLinks: [
      {
        title: "Internet Encyclopedia of Philosophy: Rousseau",
        url: "https://iep.utm.edu/rousseau/",
        type: "encyclopedia",
      },
      {
        title: "Britannica: Rousseau and General Will",
        url: "https://www.britannica.com/biography/Jean-Jacques-Rousseau/Political-philosophy",
        type: "article",
      },
      {
        title: "The Social Contract – Full Text (Gutenberg)",
        url: "https://www.gutenberg.org/ebooks/46333",
        type: "book",
      },
    ],
  },
  {
    id: "hobbes-social-contract",
    name: "Hobbesian Social Contract",
    description:
      "Hobbes argued that humans consent to a sovereign power to escape the state of nature and ensure order.",
    originSchool: "early-modern",
    keyThinkers: ["thomas-hobbes"],
    relatedIdeas: ["leviathan", "political-order"],
    challenges: ["liberalism", "anarchism"],
    modernApplications: ["Political science", "International relations"],
    externalLinks: [
      {
        title: "Internet Encyclopedia of Philosophy: Hobbes",
        url: "https://iep.utm.edu/hobbes/",
        type: "encyclopedia",
      },
      {
        title: "Britannica: Hobbes’s Social Contract",
        url: "https://www.britannica.com/biography/Thomas-Hobbes",
        type: "article",
      },
      {
        title: "Leviathan – Full Text (Gutenberg)",
        url: "https://www.gutenberg.org/ebooks/3207",
        type: "book",
      },
    ],
  },
  {
    id: "locke-natural-rights",
    name: "Natural Rights",
    description:
      "Locke’s theory of life, liberty, and property as inalienable rights forming the basis of government.",
    originSchool: "early-modern",
    keyThinkers: ["locke"],
    relatedIdeas: ["social-contract", "liberalism"],
    challenges: ["authoritarianism", "collectivism"],
    modernApplications: ["Constitutional law", "Human rights discourse"],
    externalLinks: [
      {
        title: "Internet Encyclopedia of Philosophy: Locke",
        url: "https://iep.utm.edu/locke/",
        type: "encyclopedia",
      },
      {
        title: "Britannica: Locke’s Political Philosophy",
        url: "https://www.britannica.com/biography/John-Locke",
        type: "article",
      },
      {
        title: "Two Treatises of Government – Full Text (Gutenberg)",
        url: "https://www.gutenberg.org/ebooks/7370",
        type: "book",
      },
    ],
  },
  {
    id: "hegel-dialectics",
    name: "Hegelian Dialectics",
    description:
      "Hegel’s method of thesis-antithesis-synthesis as the logic of historical and philosophical development.",
    originSchool: "german-idealism",
    keyThinkers: ["hegel"],
    relatedIdeas: ["absolute-idealism", "historicism"],
    challenges: ["materialism", "empiricism"],
    modernApplications: [
      "Political theory",
      "Critical theory",
      "Design thinking iterations",
    ],
    externalLinks: [
      {
        title: "Internet Encyclopedia of Philosophy: Hegel",
        url: "https://iep.utm.edu/hegel/",
        type: "encyclopedia",
      },
      {
        title: "Britannica: Dialectic in Hegel",
        url: "https://www.britannica.com/topic/dialectic",
        type: "article",
      },
      {
        title: "Hegel: Phenomenology of Spirit (Archive.org)",
        url: "https://archive.org/details/HegelsPhenomenologyOfSpirit",
        type: "book",
      },
    ],
  },
  {
    id: "marx-historical-materialism",
    name: "Historical Materialism",
    description:
      "Marx’s theory that economic structures shape history, culture, and politics through class struggle.",
    originSchool: "marxism",
    keyThinkers: ["marx", "engels"],
    relatedIdeas: ["class-struggle", "dialectical-materialism"],
    challenges: ["idealism", "liberal-democracy"],
    modernApplications: ["Sociology", "Political economy", "Media studies"],
    externalLinks: [
      {
        title:
          "Internet Encyclopedia of Philosophy: Marx’s Philosophy of History",
        url: "https://iep.utm.edu/marx-hist/",
        type: "encyclopedia",
      },
      {
        title: "Britannica: Marxism",
        url: "https://www.britannica.com/topic/Marxism",
        type: "article",
      },
      {
        title: "The Communist Manifesto – Full Text (Gutenberg)",
        url: "https://www.gutenberg.org/ebooks/61",
        type: "book",
      },
    ],
  },
  {
    id: "sartre-existentialism",
    name: "Existentialism",
    description:
      "Sartre emphasized radical freedom, responsibility, and the creation of meaning in an absurd world.",
    originSchool: "existentialism",
    keyThinkers: ["sartre"],
    relatedIdeas: ["bad-faith", "absurdism", "freedom"],
    challenges: ["determinism", "religious-essentialism"],
    modernApplications: ["Literature", "Psychology", "Existential therapy"],
    externalLinks: [
      {
        title: "Internet Encyclopedia of Philosophy: Sartre",
        url: "https://iep.utm.edu/sartre/",
        type: "encyclopedia",
      },
      {
        title: "Britannica: Existentialism",
        url: "https://www.britannica.com/topic/existentialism",
        type: "article",
      },
      {
        title: "Sartre: Existentialism is a Humanism (Archive.org)",
        url: "https://archive.org/details/existentialism_is_a_humanism",
        type: "book",
      },
    ],
  },
  {
  id: "absurdity",
  name: "Absurdity",
  description:
    "The existential condition that arises from the conflict between human beings' search for meaning and the apparent indifference or silence of the universe. Absurdity highlights the tension between rational desire for order and the irrationality of existence.",
  originSchool: "existentialism",
  keyThinkers: ["albert-camus", "søren-kierkegaard"],
  relatedIdeas: ["meaninglessness", "rebellion", "existential-freedom", "nihilism"],
  challenges: ["religious-theodicy", "rationalism", "scientific-positivism"],
  modernApplications: [
    "Literature and theater of the absurd",
    "Philosophy of meaning and value",
    "Clinical psychology and resilience studies"
  ],
  influences: ["existential-theology", "phenomenology", "dostoevskian-existentialism"],
  developments: ["absurdist-literature", "existential-humanism"],
  legacy: "Framed 20th-century debates on meaning, influenced literature, theater, and modern philosophy of life",
  keyTexts: ["The Myth of Sisyphus (Camus)", "Fear and Trembling (Kierkegaard)"],
  externalLinks: [
    {
      title: "Stanford Encyclopedia of Philosophy: The Absurd",
      url: "https://plato.stanford.edu/entries/absurd/",
      type: "encyclopedia"
    },
    {
      title: "Internet Encyclopedia of Philosophy: Albert Camus",
      url: "https://iep.utm.edu/camus/",
      type: "encyclopedia"
    }
  ]
},

  {
    id: "camus-absurdism",
    name: "Absurdism",
    description:
      "Camus highlighted the absurd tension between human search for meaning and an indifferent universe.",
    originSchool: "existentialism",
    keyThinkers: ["camus"],
    relatedIdeas: ["existentialism", "nihilism"],
    challenges: ["religious-theism", "dogmatism"],
    modernApplications: ["Modern literature", "Therapy", "Resilience training"],
    externalLinks: [
      {
        title: "Internet Encyclopedia of Philosophy: Camus",
        url: "https://iep.utm.edu/camus/",
        type: "encyclopedia",
      },
      {
        title: "Britannica: The Absurd – Camus",
        url: "https://www.britannica.com/biography/Albert-Camus",
        type: "article",
      },
      {
        title: "Camus: The Myth of Sisyphus (Archive.org full text)",
        url: "https://archive.org/details/in.ernet.dli.2015.218034",
        type: "book",
      },
    ],
  },
  {
    id: "existentialist-feminism",
    name: "Existentialist Feminism",
    description:
      'De Beauvoir’s view that women are historically constructed as "Other" and must assert freedom and equality.',
    originSchool: "feminist-philosophy",
    keyThinkers: ["simone-de-beauvoir"],
    relatedIdeas: ["existentialism", "gender-theory"],
    challenges: ["patriarchy", "essentialism"],
    modernApplications: ["Gender studies", "Social justice", "Policy analysis"],
    externalLinks: [
      {
        title: "Internet Encyclopedia of Philosophy: Simone de Beauvoir",
        url: "https://iep.utm.edu/beauvoir/",
        type: "encyclopedia",
      },
      {
        title: "Britannica: Simone de Beauvoir",
        url: "https://www.britannica.com/biography/Simone-de-Beauvoir",
        type: "article",
      },
      {
        title: "The Second Sex – Full Text (Archive.org)",
        url: "https://archive.org/details/secondsex1949debe",
        type: "book",
      },
    ],
  },
  {
    id: "derrida-deconstruction",
    name: "Deconstruction",
    description:
      "Derrida’s method of analyzing texts by exposing hidden assumptions and contradictions.",
    originSchool: "post-structuralism",
    keyThinkers: ["derrida"],
    relatedIdeas: ["logocentrism", "différance"],
    challenges: ["analytic-philosophy", "empiricism"],
    modernApplications: [
      "Literary criticism",
      "Cultural studies",
      "Legal interpretation",
    ],
    externalLinks: [
      {
        title: "Deconstruction – Stanford Encyclopedia of Philosophy",
        url: "https://plato.stanford.edu/entries/deconstruction/",
        type: "encyclopedia",
      },
      {
        title:
          "Jacques Derrida and Deconstruction – Internet Encyclopedia of Philosophy",
        url: "https://iep.utm.edu/derrida/",
        type: "article",
      },
      {
        title: "Of Grammatology (Derrida)",
        url: "https://monoskop.org/images/7/7e/Derrida_Jacques_Of_Grammatology_1997.pdf",
        type: "book",
      },
    ],
  },
  {
    id: "foucault-power-knowledge",
    name: "Power/Knowledge",
    description:
      "Foucault analyzed how power and knowledge are intertwined in social institutions and discourses.",
    originSchool: "postmodernism",
    keyThinkers: ["foucault"],
    relatedIdeas: ["biopolitics", "disciplinary-power"],
    challenges: ["universal-truth", "essentialism"],
    modernApplications: [
      "Sociology",
      "Critical theory",
      "Public health policy",
    ],
    externalLinks: [
      {
        title:
          "Michel Foucault – Power/Knowledge – Stanford Encyclopedia of Philosophy",
        url: "https://plato.stanford.edu/entries/foucault/#PowKno",
        type: "encyclopedia",
      },
      {
        title: "Power/Knowledge – Internet Encyclopedia of Philosophy",
        url: "https://iep.utm.edu/foucault/#PowerKnowledge",
        type: "article",
      },
      {
        title: "Power/Knowledge (Foucault, 1980)",
        url: "https://monoskop.org/images/9/92/Foucault_Michel_Power_Knowledge_Selected_Interviews_and_Other_Writings_1972-1977.pdf",
        type: "book",
      },
    ],
  },
  {
    id: "greatest-happiness-principle",
    name: "Greatest Happiness Principle",
    description:
      "The utilitarian principle that actions are right in proportion as they tend to promote happiness; wrong as they tend to produce the reverse of happiness.",
    originSchool: "utilitarianism",
    keyThinkers: ["bentham", "mill"],
    relatedIdeas: ["hedonistic-calculus", "consequentialism", "social-reform"],
    challenges: ["deontological-ethics", "virtue-ethics", "individual-rights"],
    modernApplications: [
      "Public policy",
      "Healthcare allocation",
      "Economic theory",
      "Animal welfare",
    ],
    externalLinks: [
      {
        title: "Utilitarianism – Stanford Encyclopedia of Philosophy",
        url: "https://plato.stanford.edu/entries/utilitarianism-history/",
        type: "encyclopedia",
      },
      {
        title: "Bentham and Mill on the Principle of Utility",
        url: "https://iep.utm.edu/utilitarianism/#Happiness",
        type: "article",
      },
      {
        title: "Introduction to Utilitarian Ethics – MIT OpenCourseWare",
        url: "https://ocw.mit.edu/courses/linguistics-and-philosophy/24-231-ethics-spring-2021/",
        type: "course",
      },
    ],
  },
  {
    id: "virtue-is-knowledge",
    name: "Virtue is Knowledge",
    description:
      "Socrates taught that knowing the good is sufficient to act rightly.",
    originSchool: "classical",
    keyThinkers: ["socrates"],
    relatedIdeas: ["socratic-method"],
    challenges: ["akrasia"],
    modernApplications: ["Moral education"],
    externalLinks: [
      {
        title: "Socrates and the Virtue‐Is‐Knowledge Thesis",
        url: "https://plato.stanford.edu/entries/socrates-virtue/",
        type: "encyclopedia",
      },
      {
        title: "Virtue is Knowledge – Internet Encyclopedia of Philosophy",
        url: "https://iep.utm.edu/virtue-is-knowledge/",
        type: "article",
      },
      {
        title: "Why Socrates Thought Knowledge Equals Virtue",
        url: "https://academic.oup.com/book/2302/chapter/183307889",
        type: "chapter",
      },
    ],
  },
  {
    id: "care-of-soul",
    name: "Care of the Soul",
    description:
      "Socrates emphasized self-examination and moral cultivation as life’s highest duty.",
    originSchool: "classical",
    keyThinkers: ["socrates"],
    relatedIdeas: ["virtue-is-knowledge"],
    challenges: ["hedonism"],
    modernApplications: ["Therapy", "Self-reflection"],
    externalLinks: [
      {
        title:
          "Socratic Care of the Soul – Stanford Encyclopedia of Philosophy",
        url: "https://plato.stanford.edu/entries/socrates-care-soul/",
        type: "article",
      },
      {
        title: "Care of the Soul in Ancient Philosophy",
        url: "https://iep.utm.edu/care-of-the-soul/",
        type: "article",
      },
      {
        title: "Self-Examination in Socratic Thought",
        url: "https://www.cambridge.org/core/journals/classical-quarterly/article/selfexamination-in-socratic-ethics/1C3A17B34FDC6AB56A1D89DD1AA2F6C8",
        type: "academic paper",
      },
    ],
  },
  {
    id: "philosopher-king",
    name: "Philosopher King",
    description: "Plato’s vision of rulers guided by wisdom and virtue.",
    originSchool: "classical",
    keyThinkers: ["plato"],
    relatedIdeas: ["theory-of-forms"],
    challenges: ["oligarchy", "democracy"],
    modernApplications: ["Leadership ethics"],
    externalLinks: [
      {
        title:
          "Philosopher king | Definition, Plato, Republic, Examples, & Facts",
        url: "https://www.britannica.com/topic/philosopher-king",
        type: "encyclopedia",
      },
      {
        title: "Plato: The Republic – Internet Encyclopedia of Philosophy",
        url: "https://iep.utm.edu/republic/",
        type: "article",
      },
      {
        title: "What Is a Philosopher King According to Plato?",
        url: "https://platointelligence.com/what-is-a-philosopher-king-according-to-plato/",
        type: "article",
      },
    ],
  },
  {
    id: "tripartite-soul",
    name: "Tripartite Soul",
    description:
      "Plato’s division of the soul into reason, spirit, and appetite.",
    originSchool: "classical",
    keyThinkers: ["plato"],
    relatedIdeas: ["virtue-ethics"],
    challenges: ["monism"],
    modernApplications: ["Psychology"],
    externalLinks: [
      {
        title: "Plato’s Tripartite Soul – Stanford Encyclopedia of Philosophy",
        url: "https://plato.stanford.edu/entries/plato-psychology/#TripSoul",
        type: "article",
      },
      {
        title:
          "Tripartite Soul (reason, spirit, appetite) – Encyclopedia Britannica",
        url: "https://www.britannica.com/topic/psychology/Plato#ref39869",
        type: "encyclopedia",
      },
      {
        title:
          "The Soul According to Plato – Internet Encyclopedia of Philosophy",
        url: "https://iep.utm.edu/soul-in-plato/",
        type: "article",
      },
    ],
  },
  {
    id: "allegory-of-cave",
    name: "Allegory of the Cave",
    description: "Plato’s metaphor for enlightenment and ignorance.",
    originSchool: "classical",
    keyThinkers: ["plato"],
    relatedIdeas: ["theory-of-forms"],
    challenges: ["empiricism"],
    modernApplications: ["Education"],
    externalLinks: [
      {
        title: "Allegory of the Cave – Stanford Encyclopedia of Philosophy",
        url: "https://plato.stanford.edu/entries/plato-myths/#Cave",
        type: "article",
      },
      {
        title: "Allegory of the Cave – Internet Encyclopedia of Philosophy",
        url: "https://iep.utm.edu/platomy/#!allegory-of-the-cave",
        type: "article",
      },
      {
        title: "Allegory of the Cave Explained – SparkNotes",
        url: "https://www.sparknotes.com/philosophy/republic/themes/",
        type: "article",
      },
    ],
  },
  {
    id: "virtue-ethics",
    name: "Virtue Ethics",
    description:
      "Aristotle’s ethics grounded in character cultivation and virtue.",
    originSchool: "classical",
    keyThinkers: ["aristotle"],
    relatedIdeas: ["golden-mean"],
    challenges: ["utilitarianism", "deontology"],
    modernApplications: ["Character education"],
    externalLinks: [
      {
        title: "Virtue Ethics (Stanford Encyclopedia of Philosophy)",
        url: "https://plato.stanford.edu/entries/ethics-virtue/",
        type: "encyclopedia",
      },
      {
        title: "Aristotle: Ethics – Internet Encyclopedia of Philosophy",
        url: "https://iep.utm.edu/aristotle-ethics/",
        type: "article",
      },
      {
        title: "Aristotle’s Virtue Ethics – Encyclopedia Britannica",
        url: "https://www.britannica.com/topic/virtue-ethics",
        type: "encyclopedia",
      },
    ],
  },
  {
    id: "golden-mean",
    name: "Golden Mean",
    description: "Aristotle’s idea that virtue lies between extremes.",
    originSchool: "classical",
    keyThinkers: ["aristotle"],
    relatedIdeas: ["virtue-ethics"],
    challenges: ["moral-absolutism"],
    modernApplications: ["Ethics training"],
    externalLinks: [
      {
        title: "Golden Mean – Stanford Encyclopedia of Philosophy",
        url: "https://plato.stanford.edu/entries/golden-mean/",
        type: "encyclopedia",
      },
      {
        title: "Golden Mean – Internet Encyclopedia of Philosophy",
        url: "https://iep.utm.edu/golden-mean/",
        type: "article",
      },
      {
        title: "Golden Mean (Ethics) – Encyclopedia Britannica",
        url: "https://www.britannica.com/topic/golden-mean-philosophy",
        type: "encyclopedia",
      },
    ],
  },
  {
    id: "four-causes",
    name: "Four Causes",
    description:
      "Aristotle’s framework: material, formal, efficient, and final causes explain change.",
    originSchool: "classical",
    keyThinkers: ["aristotle"],
    relatedIdeas: ["teleology"],
    challenges: ["mechanistic-science"],
    modernApplications: ["Science philosophy"],
    externalLinks: [
      {
        title: "Aristotle’s Four Causes – Internet Encyclopedia of Philosophy",
        url: "https://iep.utm.edu/four-causes/",
        type: "article",
      },
      {
        title: "Four Causes – Encyclopedia Britannica",
        url: "https://www.britannica.com/topic/four-causes",
        type: "encyclopedia",
      },
      {
        title:
          "Causes, Final, Formal, Material, Efficient – Stanford Encyclopedia of Philosophy",
        url: "https://plato.stanford.edu/entries/aristotle-causes/",
        type: "encyclopedia",
      },
    ],
  },
  {
    id: "syllogistic-logic",
    name: "Syllogistic Logic",
    description: "Aristotle’s formal system of deductive reasoning.",
    originSchool: "classical",
    keyThinkers: ["aristotle"],
    relatedIdeas: ["logic"],
    challenges: ["symbolic-logic"],
    modernApplications: ["Computer science"],
    externalLinks: [
      {
        title: "Syllogistic Logic – Stanford Encyclopedia of Philosophy",
        url: "https://plato.stanford.edu/entries/syllogistic-logic/",
        type: "encyclopedia",
      },
      {
        title: "Aristotle’s Logic – Internet Encyclopedia of Philosophy",
        url: "https://iep.utm.edu/aristotle-logic/",
        type: "article",
      },
      {
        title: "Syllogism – Encyclopedia Britannica",
        url: "https://www.britannica.com/topic/syllogism-philosophy",
        type: "encyclopedia",
      },
    ],
  },
  {
    id: "transcendental-idealism",
    name: "Transcendental Idealism",
    description:
      "Kant’s claim that we experience phenomena shaped by categories of mind, not noumena.",
    originSchool: "german-idealism",
    keyThinkers: ["kant"],
    relatedIdeas: ["synthetic-a-priori"],
    challenges: ["empiricism", "realism"],
    modernApplications: ["Epistemology"],
    externalLinks: [
      {
        title: "Transcendental Idealism – Stanford Encyclopedia of Philosophy",
        url: "https://plato.stanford.edu/entries/kant-transcendental-idealism/",
        type: "article",
      },
      {
        title:
          "Immanuel Kant – Critique of Pure Reason (transcendental idealism)",
        url: "https://iep.utm.edu/kant-cross/",
        type: "article",
      },
      {
        title: "Kant’s Transcendental Idealism – Encyclopedia Britannica",
        url: "https://www.britannica.com/topic/transcendentalism#ref62168",
        type: "encyclopedia",
      },
    ],
  },
  {
    id: "synthetic-a-priori",
    name: "Synthetic a Priori",
    description:
      "Kant’s category of judgments that expand knowledge yet are necessary.",
    originSchool: "german-idealism",
    keyThinkers: ["kant"],
    relatedIdeas: ["transcendental-idealism"],
    challenges: ["empiricism"],
    modernApplications: ["Mathematics", "Logic"],
    externalLinks: [
      {
        title: "Synthetic a priori – Stanford Encyclopedia of Philosophy",
        url: "https://plato.stanford.edu/entries/synthetic-apriori/",
        type: "article",
      },
      {
        title:
          "Synthetic a priori judgments – Internet Encyclopedia of Philosophy",
        url: "https://iep.utm.edu/synthetic-a-priori/",
        type: "article",
      },
      {
        title: "The Synthetic a Priori – Encyclopaedia Britannica",
        url: "https://www.britannica.com/topic/synthetic-judgment-philosophy",
        type: "encyclopedia",
      },
    ],
  },
  {
    id: "moral-autonomy",
    name: "Moral Autonomy",
    description:
      "Kant’s idea that morality arises from rational self-legislation.",
    originSchool: "german-idealism",
    keyThinkers: ["kant"],
    relatedIdeas: ["categorical-imperative"],
    challenges: ["heteronomy"],
    modernApplications: ["Human rights"],
    externalLinks: [
      {
        title:
          "Autonomy in Moral Philosophy – Stanford Encyclopedia of Philosophy",
        url: "https://plato.stanford.edu/entries/autonomy-moral/",
        type: "article",
      },
      {
        title: "Kant’s Moral Autonomy – Internet Encyclopedia of Philosophy",
        url: "https://iep.utm.edu/kant-autonomy/",
        type: "article",
      },
      {
        title: "Moral Autonomy – Encyclopedia Britannica",
        url: "https://www.britannica.com/topic/autonomy-philosophy",
        type: "encyclopedia",
      },
    ],
  },
  {
    id: "eternal-recurrence",
    name: "Eternal Recurrence",
    description: "Nietzsche’s thought experiment that life repeats infinitely.",
    originSchool: "existentialism-precursors",
    keyThinkers: ["nietzsche"],
    relatedIdeas: ["will-to-power"],
    challenges: ["linear-history"],
    modernApplications: ["Existential psychology"],
    externalLinks: [
      {
        title: "Eternal Recurrence – Stanford Encyclopedia of Philosophy",
        url: "https://plato.stanford.edu/entries/eternal-recurrence-nietzsche/",
        type: "article",
      },
      {
        title:
          "Nietzsche: Eternal Return – Internet Encyclopedia of Philosophy",
        url: "https://iep.utm.edu/nietzsche-eternal-return/",
        type: "article",
      },
      {
        title: "Eternal Return Explained – Britannica",
        url: "https://www.britannica.com/topic/eternal-return-philosophy",
        type: "encyclopedia",
      },
    ],
  },
  {
    id: "ubermensch",
    name: "Übermensch",
    description:
      "Nietzsche’s ideal of self-overcoming individual beyond conventional morality.",
    originSchool: "existentialism-precursors",
    keyThinkers: ["nietzsche"],
    relatedIdeas: ["will-to-power"],
    challenges: ["egalitarianism"],
    modernApplications: ["Self-actualization"],
    externalLinks: [
      {
        title: "Übermensch – Stanford Encyclopedia of Philosophy",
        url: "https://plato.stanford.edu/entries/nietzsche-übermensch/",
        type: "article",
      },
      {
        title: "Übermensch – Internet Encyclopedia of Philosophy",
        url: "https://iep.utm.edu/nietzsche-uber/ (check encoding)",
        type: "article",
      },
      {
        title: "Übermensch – Encyclopedia Britannica",
        url: "https://www.britannica.com/topic/ubermensch",
        type: "encyclopedia",
      },
    ],
  },
  {
    id: "god-is-dead",
    name: "God is Dead",
    description:
      "Nietzsche’s claim that traditional belief in God has lost cultural force.",
    originSchool: "existentialism-precursors",
    keyThinkers: ["nietzsche"],
    relatedIdeas: ["nihilism"],
    challenges: ["religious-theism"],
    modernApplications: ["Secular ethics"],
    externalLinks: [
      {
        title: "God is Dead – Stanford Encyclopedia of Philosophy",
        url: "https://plato.stanford.edu/entries/god-dead/",
        type: "article",
      },
      {
        title: "Nietzsche – God is Dead – Internet Encyclopedia of Philosophy",
        url: "https://iep.utm.edu/nietzsche-godisdead/",
        type: "article",
      },
      {
        title: "God is Dead – Encyclopedia Britannica",
        url: "https://www.britannica.com/topic/god-is-dead-philosophy",
        type: "encyclopedia",
      },
    ],
  },
  {
    id: "ren-benevolence",
    name: "Ren (Benevolence)",
    description: "Confucian core virtue of humaneness and compassion.",
    originSchool: "confucianism",
    keyThinkers: ["confucius"],
    relatedIdeas: ["li-ritual"],
    challenges: ["legalism"],
    modernApplications: ["East Asian ethics"],
    externalLinks: [
      {
        title: "Ren – Stanford Encyclopedia of Philosophy",
        url: "https://plato.stanford.edu/entries/confucius/#Ren",
        type: "article",
      },
      {
        title: "Ren (Benevolence) – Internet Encyclopedia of Philosophy",
        url: "https://iep.utm.edu/ren-benevolence/",
        type: "article",
      },
      {
        title: "Ren – Encyclopedia Britannica",
        url: "https://www.britannica.com/topic/Ren-Confucianism",
        type: "encyclopedia",
      },
    ],
  },
  {
    id: "li-ritual",
    name: "Li (Ritual)",
    description: "Confucian principle of proper conduct and ritual order.",
    originSchool: "confucianism",
    keyThinkers: ["confucius"],
    relatedIdeas: ["ren-benevolence"],
    challenges: ["anarchy"],
    modernApplications: ["Cultural studies"],
    externalLinks: [
      {
        title: "Li – Stanford Encyclopedia of Philosophy",
        url: "https://plato.stanford.edu/entries/confucianism/#Li",
        type: "article",
      },
      {
        title: "Li (Ritual) – Internet Encyclopedia of Philosophy",
        url: "https://iep.utm.edu/confucianism-li/",
        type: "article",
      },
      {
        title: "Ritual in Confucianism – Encyclopedia Britannica",
        url: "https://www.britannica.com/topic/Confucianism#ref50029",
        type: "encyclopedia",
      },
    ],
  },
  {
    id: "junzi-gentleman",
    name: "Junzi (Gentleman)",
    description: "Confucius’ model of the cultivated moral person.",
    originSchool: "confucianism",
    keyThinkers: ["confucius"],
    relatedIdeas: ["virtue-ethics"],
    challenges: ["selfishness"],
    modernApplications: ["Education"],
    externalLinks: [
      {
        title: "Junzi – Stanford Encyclopedia of Philosophy",
        url: "https://plato.stanford.edu/entries/confucius/#Junzi",
        type: "article",
      },
      {
        title: "Junzi (Gentleman) – Internet Encyclopedia of Philosophy",
        url: "https://iep.utm.edu/confucius-junzi/",
        type: "article",
      },
      {
        title: "Junzi – Encyclopedia Britannica",
        url: "https://www.britannica.com/topic/Junzi-Confucianism",
        type: "encyclopedia",
      },
    ],
  },
  {
    id: "rectification-of-names",
    name: "Rectification of Names",
    description:
      "Confucian doctrine that social order requires correct use of names.",
    originSchool: "confucianism",
    keyThinkers: ["confucius"],
    relatedIdeas: ["junzi-gentleman"],
    challenges: ["linguistic-relativism"],
    modernApplications: ["Law", "Politics"],
    externalLinks: [
      {
        title: "Rectification of Names – Stanford Encyclopedia of Philosophy",
        url: "https://plato.stanford.edu/entries/confucianism/#Rectification",
        type: "article",
      },
      {
        title: "Rectification of Names – Internet Encyclopedia of Philosophy",
        url: "https://iep.utm.edu/confucianism-rectification/",
        type: "article",
      },
      {
        title: "Names and Social Order – Encyclopedia Britannica",
        url: "https://www.britannica.com/topic/Confucianism#ref53972",
        type: "encyclopedia",
      },
    ],
  },
  {
    id: "conceptual-decolonization",
    name: "Conceptual Decolonization",
    description:
      "Kwasi Wiredu’s call to rethink African philosophy using indigenous categories.",
    originSchool: "african-philosophy",
    keyThinkers: ["wiredu"],
    relatedIdeas: ["decolonization"],
    challenges: ["eurocentrism"],
    modernApplications: ["Philosophy of culture"],
    externalLinks: [
      {
        title: "African Philosophy and the Decolonization of Concern",
        url: "https://plato.stanford.edu/entries/african-philosophy/#Decolonisation",
        type: "article",
      },
      {
        title:
          "Wiredu and Conceptual Decolonization – Internet Encyclopedia of Philosophy",
        url: "https://iep.utm.edu/wiredu-conceptual-decolonization/",
        type: "article",
      },
      {
        title:
          "Decolonization and Philosophy – Journal Article (Taylor & Francis)",
        url: "https://www.tandfonline.com/doi/full/10.1080/09518398.2020.1737501",
        type: "academic paper",
      },
    ],
  },
  {
    id: "communalism",
    name: "African Communalism",
    description:
      "Emphasis on community and shared existence in African philosophy.",
    originSchool: "african-philosophy",
    keyThinkers: ["mbiti"],
    relatedIdeas: ["ubuntu"],
    challenges: ["individualism"],
    modernApplications: ["Political theory"],
    externalLinks: [
      {
        title: "African Communalism – Stanford Encyclopedia of Philosophy",
        url: "https://plato.stanford.edu/entries/communalism/",
        type: "article",
      },
      {
        title: "Ubuntu, Communalism, and the African Renaissance – IEP",
        url: "https://iep.utm.edu/ubuntu-communalism/",
        type: "article",
      },
      {
        title: "Communalism – Encyclopedia Britannica",
        url: "https://www.britannica.com/topic/communism-politics (note: different sense)",
        type: "encyclopedia",
      },
    ],
  },
  {
    id: "indigenous-sovereignty",
    name: "Indigenous Sovereignty",
    description:
      "Philosophy of self-determination and cultural survival of Indigenous peoples.",
    originSchool: "indigenous-philosophy",
    keyThinkers: [],
    relatedIdeas: ["decolonization"],
    challenges: ["colonialism"],
    modernApplications: ["Law", "Politics"],
    externalLinks: [
      {
        title: "Indigenous Sovereignty – Stanford Encyclopedia of Philosophy",
        url: "https://plato.stanford.edu/entries/indigenous-sovereignty/",
        type: "article",
      },
      {
        title: "Indigenous Peoples and Sovereignty – IEP",
        url: "https://iep.utm.edu/indigenous-sovereignty/",
        type: "article",
      },
      {
        title: "Sovereignty in International Law – Britannica",
        url: "https://www.britannica.com/topic/sovereignty-politics-and-law",
        type: "encyclopedia",
      },
    ],
  },
  {
    id: "decolonization",
    name: "Decolonization",
    description:
      "Philosophy of dismantling colonial structures of knowledge and power.",
    originSchool: "global-philosophy",
    keyThinkers: ["fanon"],
    relatedIdeas: ["conceptual-decolonization"],
    challenges: ["neocolonialism"],
    modernApplications: ["Critical theory"],
    externalLinks: [
      {
        title: "Decolonization – Stanford Encyclopedia of Philosophy",
        url: "https://plato.stanford.edu/entries/decolonization/",
        type: "article",
      },
      {
        title: "Frantz Fanon – Wretched of the Earth summary – IEP",
        url: "https://iep.utm.edu/fanon-wretched-earth/",
        type: "article",
      },
      {
        title: "Decolonization and Its Impact – Britannica",
        url: "https://www.britannica.com/topic/decolonization-history",
        type: "encyclopedia",
      },
    ],
  },
  {
    id: "capabilities-approach",
    name: "Capabilities Approach",
    description:
      "Martha Nussbaum and Amartya Sen’s framework for justice based on human capabilities.",
    originSchool: "contemporary",
    keyThinkers: ["nussbaum", "sen"],
    relatedIdeas: ["justice"],
    challenges: ["utilitarianism"],
    modernApplications: ["Development economics"],
    externalLinks: [
      {
        title: "Capabilities Approach – Stanford Encyclopedia of Philosophy",
        url: "https://plato.stanford.edu/entries/capabilities/",
        type: "article",
      },
      {
        title: "Capabilities Approach – Internet Encyclopedia of Philosophy",
        url: "https://iep.utm.edu/capabilities-approach/",
        type: "article",
      },
      {
        title: "Sen and Nussbaum – Encyclopedia Britannica",
        url: "https://www.britannica.com/biography/Amartya-Sen",
        type: "encyclopedia",
      },
    ],
  },
  {
    id: "justice",
    name: "Justice",
    description: "Philosophical debates on fairness, equality, and rights.",
    originSchool: "universal",
    keyThinkers: ["plato", "rawls"],
    relatedIdeas: ["capabilities-approach"],
    challenges: ["relativism"],
    modernApplications: ["Law", "Politics"],
    externalLinks: [
      {
        title: "Justice – Stanford Encyclopedia of Philosophy",
        url: "https://plato.stanford.edu/entries/justice/",
        type: "article",
      },
      {
        title: "Justice – Internet Encyclopedia of Philosophy",
        url: "https://iep.utm.edu/justice/",
        type: "article",
      },
      {
        title: "Justice – Encyclopedia Britannica",
        url: "https://www.britannica.com/topic/justice-philosophy-and-law",
        type: "encyclopedia",
      },
    ],
  },
  {
    id: "advaita-vedanta",
    name: "Advaita Vedanta",
    description: "Nondual Hindu philosophy identifying Atman with Brahman.",
    originSchool: "hindu-philosophy",
    keyThinkers: ["adi-shankara"],
    relatedIdeas: ["non-dualism", "maya-illusion"],
    challenges: ["dvaita-dualism"],
    modernApplications: ["Spirituality"],
    externalLinks: [
      {
        title: "Advaita Vedanta – Stanford Encyclopedia of Philosophy",
        url: "https://plato.stanford.edu/entries/advaita-vedanta/",
        type: "article",
      },
      {
        title: "Advaita Vedanta – Internet Encyclopedia of Philosophy",
        url: "https://iep.utm.edu/advaita-vedanta/",
        type: "article",
      },
      {
        title: "Advaita Vedanta – Britannica",
        url: "https://www.britannica.com/topic/Advaita",
        type: "encyclopedia",
      },
    ],
  },
  {
    id: "non-dualism",
    name: "Non-Dualism",
    description:
      "View that ultimate reality is unified beyond dual categories.",
    originSchool: "indian-philosophy",
    keyThinkers: ["adi-shankara"],
    relatedIdeas: ["advaita-vedanta"],
    challenges: ["dualism"],
    modernApplications: ["Consciousness studies"],
    externalLinks: [
      {
        title: "Non-Dualism – Stanford Encyclopedia of Philosophy",
        url: "https://plato.stanford.edu/entries/advaita-vedanta/#NonDua",
        type: "article",
      },
      {
        title: "Non-Dualism – Internet Encyclopedia of Philosophy",
        url: "https://iep.utm.edu/non-dualism/",
        type: "article",
      },
      {
        title: "Nondualism – Encyclopedia Britannica",
        url: "https://www.britannica.com/topic/nondualism",
        type: "encyclopedia",
      },
    ],
  },
  {
    id: "maya-illusion",
    name: "Maya (Illusion)",
    description:
      "Hindu concept that the material world is illusory compared to Brahman.",
    originSchool: "hindu-philosophy",
    keyThinkers: [],
    relatedIdeas: ["advaita-vedanta"],
    challenges: ["realism"],
    modernApplications: ["Metaphysics"],
    externalLinks: [
      {
        title: "Maya in Vedanta – Stanford Encyclopedia of Philosophy",
        url: "https://plato.stanford.edu/entries/maya/",
        type: "article",
      },
      {
        title: "Maya – Internet Encyclopedia of Philosophy",
        url: "https://iep.utm.edu/maya-illusion/",
        type: "article",
      },
      {
        title: "Maya – Britannica",
        url: "https://www.britannica.com/topic/maya-philosophy",
        type: "encyclopedia",
      },
    ],
  },
  {
    id: "vishishtadvaita",
    name: "Vishishtadvaita",
    description:
      "Ramanuja’s qualified nondualism integrating devotion to God with metaphysics.",
    originSchool: "hindu-philosophy",
    keyThinkers: ["ramanuja"],
    relatedIdeas: ["bhakti-devotion"],
    challenges: ["advaita-vedanta"],
    modernApplications: ["Theology"],
    externalLinks: [
      {
        title: "Vishishtadvaita – Stanford Encyclopedia of Philosophy",
        url: "https://plato.stanford.edu/entries/ramanuja/#VisNon",
        type: "article",
      },
      {
        title: "Vishishtadvaita – Internet Encyclopedia of Philosophy",
        url: "https://iep.utm.edu/vishishtadvaita/",
        type: "article",
      },
      {
        title: "Vishishtadvaita – Britannica",
        url: "https://www.britannica.com/topic/Vishishtadvaita",
        type: "encyclopedia",
      },
    ],
  },
  {
    id: "bhakti-devotion",
    name: "Bhakti (Devotion)",
    description: "Hindu philosophy of loving devotion to God.",
    originSchool: "hindu-philosophy",
    keyThinkers: ["ramanuja", "chaitanya"],
    relatedIdeas: ["vishishtadvaita"],
    challenges: ["ritualism"],
    modernApplications: ["Religious practice"],
    externalLinks: [
      {
        title: "Bhakti Movement – Stanford Encyclopedia of Philosophy",
        url: "https://plato.stanford.edu/entries/bhakti/",
        type: "article",
      },
      {
        title: "Bhakti – Internet Encyclopedia of Philosophy",
        url: "https://iep.utm.edu/bhakti/",
        type: "article",
      },
      {
        title: "Bhakti – Britannica",
        url: "https://www.britannica.com/topic/Bhakti",
        type: "encyclopedia",
      },
    ],
  },
  {
    id: "dvaita-dualism",
    name: "Dvaita Dualism",
    description:
      "Madhva’s philosophy of eternal difference between soul and God.",
    originSchool: "hindu-philosophy",
    keyThinkers: ["madhva"],
    relatedIdeas: ["advaita-vedanta"],
    challenges: ["non-dualism"],
    modernApplications: ["Theology"],
    externalLinks: [
      {
        title: "Dvaita Vedanta – Stanford Encyclopedia of Philosophy",
        url: "https://plato.stanford.edu/entries/madhva/",
        type: "article",
      },
      {
        title: "Dvaita – Internet Encyclopedia of Philosophy",
        url: "https://iep.utm.edu/dvaita/",
        type: "article",
      },
      {
        title: "Dvaita – Britannica",
        url: "https://www.britannica.com/topic/Dvaita",
        type: "encyclopedia",
      },
    ],
  },
  {
    id: "political-realism",
    name: "Political Realism",
    description: "View that politics is driven by power and self-interest.",
    originSchool: "political-philosophy",
    keyThinkers: ["machiavelli"],
    relatedIdeas: ["statecraft"],
    challenges: ["idealism"],
    modernApplications: ["International relations"],
    externalLinks: [
      {
        title: "Political Realism – Stanford Encyclopedia of Philosophy",
        url: "https://plato.stanford.edu/entries/realism-intl-relations/",
        type: "article",
      },
      {
        title: "Realism in Political Theory – IEP",
        url: "https://iep.utm.edu/political-realism/",
        type: "article",
      },
      {
        title: "Political Realism – Britannica",
        url: "https://www.britannica.com/topic/realism-political-theory",
        type: "encyclopedia",
      },
    ],
  },
  {
    id: "statecraft",
    name: "Statecraft",
    description: "Practical art of governing and maintaining political power.",
    originSchool: "political-philosophy",
    keyThinkers: ["kautilya", "machiavelli"],
    relatedIdeas: ["political-realism"],
    challenges: ["utopianism"],
    modernApplications: ["Political science"],
    externalLinks: [
      {
        title: "Kautilya’s Arthashastra and Statecraft",
        url: "https://plato.stanford.edu/entries/kautilya-arthashastra/",
        type: "article",
      },
      {
        title: "Machiavelli on Statecraft – IEP",
        url: "https://iep.utm.edu/machiavelli/#Statecraft",
        type: "article",
      },
      {
        title: "Statecraft – Britannica",
        url: "https://www.britannica.com/topic/statecraft",
        type: "encyclopedia",
      },
    ],
  },
  {
    id: "economics",
    name: "Philosophy of Economics",
    description:
      "Study of ethical, political, and ontological aspects of economics.",
    originSchool: "modern",
    keyThinkers: ["smith", "marx", "sen"],
    relatedIdeas: ["justice"],
    challenges: ["reductionism"],
    modernApplications: ["Policy"],
    externalLinks: [
      {
        title: "Philosophy of Economics – Stanford Encyclopedia of Philosophy",
        url: "https://plato.stanford.edu/entries/economics/",
        type: "article",
      },
      {
        title: "Philosophy of Economics – Internet Encyclopedia of Philosophy",
        url: "https://iep.utm.edu/econ-phil/",
        type: "article",
      },
      {
        title: "Economics and Philosophy – Cambridge Journal",
        url: "https://www.cambridge.org/core/journals/economics-and-philosophy",
        type: "academic paper",
      },
    ],
  },
  {
    id: "humanism",
    name: "Humanism",
    description: "Emphasis on human dignity, autonomy, and rationality.",
    originSchool: "renaissance",
    keyThinkers: ["erasmus", "pico-della-mirandola"],
    relatedIdeas: ["universalism"],
    challenges: ["nihilism"],
    modernApplications: ["Education"],
    externalLinks: [
      {
        title: "Renaissance Humanism – Stanford Encyclopedia of Philosophy",
        url: "https://plato.stanford.edu/entries/renaissance-humanism/",
        type: "article",
      },
      {
        title: "Humanism – Internet Encyclopedia of Philosophy",
        url: "https://iep.utm.edu/humanism/",
        type: "article",
      },
      {
        title: "Humanism – Britannica",
        url: "https://www.britannica.com/topic/humanism",
        type: "encyclopedia",
      },
    ],
  },
  {
    id: "universalism",
    name: "Universalism",
    description: "Belief in universal moral principles transcending culture.",
    originSchool: "ethics",
    keyThinkers: ["kant", "stoics"],
    relatedIdeas: ["humanism"],
    challenges: ["relativism"],
    modernApplications: ["Human rights"],
    externalLinks: [
      {
        title: "Moral Universalism – Stanford Encyclopedia of Philosophy",
        url: "https://plato.stanford.edu/entries/moral-relativism/#MorUni",
        type: "article",
      },
      {
        title: "Universalism in Ethics – IEP",
        url: "https://iep.utm.edu/universalism/",
        type: "article",
      },
      {
        title: "Universalism – Britannica",
        url: "https://www.britannica.com/topic/universalism-theology",
        type: "encyclopedia",
      },
    ],
  },
  {
    id: "education",
    name: "Philosophy of Education",
    description: "Inquiry into aims, methods, and meaning of education.",
    originSchool: "universal",
    keyThinkers: ["plato", "dewey"],
    relatedIdeas: ["socratic-method"],
    challenges: ["instrumentalism"],
    modernApplications: ["Teaching"],
    externalLinks: [
      {
        title: "Philosophy of Education – Stanford Encyclopedia of Philosophy",
        url: "https://plato.stanford.edu/entries/education-philosophy/",
        type: "article",
      },
      {
        title: "Philosophy of Education – Internet Encyclopedia of Philosophy",
        url: "https://iep.utm.edu/education-philosophy/",
        type: "article",
      },
      {
        title: "Philosophy of Education – Britannica",
        url: "https://www.britannica.com/topic/philosophy-of-education",
        type: "encyclopedia",
      },
    ],
  },
  {
    id: "original-sin",
    name: "Original Sin",
    description: "Augustine’s doctrine of inherited sinfulness.",
    originSchool: "christian-philosophy",
    keyThinkers: ["augustine"],
    relatedIdeas: ["just-war-theory"],
    challenges: ["pelagianism"],
    modernApplications: ["Theology"],
    externalLinks: [
      {
        title: "Original Sin – Stanford Encyclopedia of Philosophy",
        url: "https://plato.stanford.edu/entries/original-sin/",
        type: "article",
      },
      {
        title: "Augustine and Original Sin – IEP",
        url: "https://iep.utm.edu/augustine-original-sin/",
        type: "article",
      },
      {
        title: "Original Sin – Britannica",
        url: "https://www.britannica.com/topic/original-sin",
        type: "encyclopedia",
      },
    ],
  },
  {
    id: "just-war-theory",
    name: "Just War Theory",
    description: "Christian doctrine on when war is morally permissible.",
    originSchool: "scholasticism",
    keyThinkers: ["augustine", "aquinas"],
    relatedIdeas: ["natural-law"],
    challenges: ["pacifism"],
    modernApplications: ["Military ethics"],
    externalLinks: [
      {
        title: "Just War Theory – Stanford Encyclopedia of Philosophy",
        url: "https://plato.stanford.edu/entries/war/#JusWarThe",
        type: "article",
      },
      {
        title: "Just War Theory – Internet Encyclopedia of Philosophy",
        url: "https://iep.utm.edu/just-war/",
        type: "article",
      },
      {
        title: "Just War – Britannica",
        url: "https://www.britannica.com/topic/just-war",
        type: "encyclopedia",
      },
    ],
  },
  {
    id: "faith-and-reason",
    name: "Faith and Reason",
    description:
      "Debates on compatibility of religious belief with rational inquiry.",
    originSchool: "christian-philosophy",
    keyThinkers: ["aquinas"],
    relatedIdeas: ["natural-law"],
    challenges: ["fideism"],
    modernApplications: ["Theology"],
    externalLinks: [
      {
        title: "Faith and Reason – Stanford Encyclopedia of Philosophy",
        url: "https://plato.stanford.edu/entries/faith-reason/",
        type: "article",
      },
      {
        title: "Faith and Reason – Internet Encyclopedia of Philosophy",
        url: "https://iep.utm.edu/faith-reason/",
        type: "article",
      },
      {
        title: "Faith and Reason – Britannica",
        url: "https://www.britannica.com/topic/faith-and-reason",
        type: "encyclopedia",
      },
    ],
  },
  {
    id: "natural-law",
    name: "Natural Law",
    description: "Moral order discoverable by reason, rooted in divine order.",
    originSchool: "scholasticism",
    keyThinkers: ["aquinas"],
    relatedIdeas: ["five-ways"],
    challenges: ["legal-positivism"],
    modernApplications: ["Law"],
    externalLinks: [
      {
        title: "Natural Law Theories – Stanford Encyclopedia of Philosophy",
        url: "https://plato.stanford.edu/entries/natural-law-theories/",
        type: "article",
      },
      {
        title: "Natural Law – Internet Encyclopedia of Philosophy",
        url: "https://iep.utm.edu/natural-law/",
        type: "article",
      },
      {
        title: "Natural Law – Britannica",
        url: "https://www.britannica.com/topic/natural-law",
        type: "encyclopedia",
      },
    ],
  },
  {
    id: "five-ways",
    name: "Five Ways",
    description: "Aquinas’s five arguments for the existence of God.",
    originSchool: "scholasticism",
    keyThinkers: ["aquinas"],
    relatedIdeas: ["faith-and-reason"],
    challenges: ["atheism"],
    modernApplications: ["Philosophy of religion"],
    externalLinks: [
      {
        title:
          "St. Thomas Aquinas: Five Ways – Stanford Encyclopedia of Philosophy",
        url: "https://plato.stanford.edu/entries/aquinas/#FivWayProExiGod",
        type: "article",
      },
      {
        title: "Five Ways – Internet Encyclopedia of Philosophy",
        url: "https://iep.utm.edu/aquinas-five-ways/",
        type: "article",
      },
      {
        title: "Five Ways – Britannica",
        url: "https://www.britannica.com/biography/Saint-Thomas-Aquinas/Five-Ways",
        type: "encyclopedia",
      },
    ],
  },
  {
    id: "cogito-ergo-sum",
    name: "Cogito ergo sum",
    description:
      'Descartes’ foundational certainty: "I think, therefore I am."',
    originSchool: "early-modern",
    keyThinkers: ["descartes"],
    relatedIdeas: ["methodic-doubt"],
    challenges: ["skepticism"],
    modernApplications: ["Epistemology"],
    externalLinks: [
      {
        title: "Descartes’ Epistemology – Stanford Encyclopedia of Philosophy",
        url: "https://plato.stanford.edu/entries/descartes-epistemology/",
        type: "encyclopedia",
      },
      {
        title: "Cogito, Ergo Sum – Britannica",
        url: "https://www.britannica.com/topic/cogito-ergo-sum",
        type: "encyclopedia",
      },
      {
        title: "Meditations on First Philosophy (Primary Text)",
        url: "https://www.gutenberg.org/ebooks/59",
        type: "book",
      },
    ],
  },
  {
    id: "dualism",
    name: "Cartesian Dualism",
    description: "Descartes’ division of mind and body as distinct substances.",
    originSchool: "early-modern",
    keyThinkers: ["descartes"],
    relatedIdeas: ["cogito-ergo-sum"],
    challenges: ["materialism"],
    modernApplications: ["Philosophy of mind"],
    externalLinks: [
      {
        title: "Mind-Body Dualism – Stanford Encyclopedia of Philosophy",
        url: "https://plato.stanford.edu/entries/dualism/",
        type: "encyclopedia",
      },
      {
        title: "Cartesian Dualism – Internet Encyclopedia of Philosophy",
        url: "https://iep.utm.edu/dualism/",
        type: "article",
      },
      {
        title: "Dualism – Britannica",
        url: "https://www.britannica.com/topic/dualism-philosophy",
        type: "encyclopedia",
      },
    ],
  },
  {
    id: "kirtan",
    name: "Kirtan",
    description:
      "A devotional practice in Hinduism involving communal singing, chanting, and call-and-response recitation of divine names, central in Gaudiya Vaishnavism and Bhakti movements.",
    originSchool: "indian-bhakti",
    keyThinkers: ["chaitanya-mahaprabhu", "surdas", "mirabai"],
    relatedIdeas: ["bhakti-devotion", "gaudiya-vaishnavism", "nama-sankirtana"],
    challenges: ["ritualism", "sectarianism", "externalism"],
    modernApplications: [
      "Yoga practice",
      "Spiritual communities",
      "Music therapy",
      "Interfaith devotion",
    ],
    externalLinks: [
      {
        title: "Kirtan in the Bhakti Tradition – Oxford Bibliographies",
        url: "https://www.oxfordbibliographies.com/display/document/obo-9780195399318/obo-9780195399318-0318.xml",
        type: "academic paper",
      },
      {
        title: "What Is Kirtan? – Yoga Journal",
        url: "https://www.yogajournal.com/practice/kirtan-chanting-in-yoga/",
        type: "article",
      },
      {
        title: "Kirtan: Heart of Devotion (Documentary)",
        url: "https://www.youtube.com/watch?v=YtMCZSK-9cA",
        type: "video",
      },
    ],
  },
  {
    id: "brahman",
    name: "Brahman",
    description: "Ultimate, all-pervading reality in Vedanta philosophy.",
    originSchool: "vedanta",
    keyThinkers: ["shankara"],
    relatedIdeas: ["atman", "non-dualism"],
    challenges: ["materialism"],
    modernApplications: ["Comparative religion"],
    externalLinks: [
      {
        title: "Brahman – Stanford Encyclopedia of Philosophy",
        url: "https://plato.stanford.edu/entries/advaita-vedanta/#Brah",
        type: "encyclopedia",
      },
      {
        title: "Brahman – Internet Encyclopedia of Philosophy",
        url: "https://iep.utm.edu/brahman/",
        type: "article",
      },
      {
        title: "Brahman – Britannica",
        url: "https://www.britannica.com/topic/Brahman-Hinduism",
        type: "encyclopedia",
      },
    ],
  },
  {
    id: "atman",
    name: "Atman",
    description:
      "The inner self or soul, identical with Brahman in Advaita Vedanta.",
    originSchool: "vedanta",
    keyThinkers: ["shankara"],
    relatedIdeas: ["brahman", "non-dualism"],
    challenges: ["buddhist-non-self"],
    modernApplications: ["Spirituality"],
    externalLinks: [
      {
        title: "Atman – Stanford Encyclopedia of Philosophy",
        url: "https://plato.stanford.edu/entries/atman/",
        type: "encyclopedia",
      },
      {
        title: "Atman – Internet Encyclopedia of Philosophy",
        url: "https://iep.utm.edu/atman/",
        type: "article",
      },
      {
        title: "Atman – Britannica",
        url: "https://www.britannica.com/topic/atman",
        type: "encyclopedia",
      },
    ],
  },
  {
    id: "moksha",
    name: "Moksha",
    description:
      "Liberation from the cycle of birth and death in Indian philosophies.",
    originSchool: "vedanta",
    keyThinkers: [],
    relatedIdeas: ["non-dualism"],
    challenges: ["worldly-attachment"],
    modernApplications: ["Spiritual practice"],
    externalLinks: [
      {
        title: "Moksha – Stanford Encyclopedia of Philosophy",
        url: "https://plato.stanford.edu/entries/moksha/",
        type: "encyclopedia",
      },
      {
        title: "Moksha – Internet Encyclopedia of Philosophy",
        url: "https://iep.utm.edu/moksha/",
        type: "article",
      },
      {
        title: "Moksha – Britannica",
        url: "https://www.britannica.com/topic/moksha",
        type: "encyclopedia",
      },
    ],
  },
  {
    id: "ahimsa",
    name: "Ahimsa",
    description: "Non-violence as supreme virtue in Jainism and beyond.",
    originSchool: "jain-philosophy",
    keyThinkers: ["mahavira"],
    relatedIdeas: ["anekantavada", "syadvada"],
    challenges: ["just-war-theory"],
    modernApplications: ["Vegetarianism", "Nonviolent movements"],
    externalLinks: [
      {
        title: "Ahimsa – Stanford Encyclopedia of Philosophy",
        url: "https://plato.stanford.edu/entries/ahimsa/",
        type: "encyclopedia",
      },
      {
        title: "Ahimsa – Internet Encyclopedia of Philosophy",
        url: "https://iep.utm.edu/ahimsa/",
        type: "article",
      },
      {
        title: "Ahimsa – Britannica",
        url: "https://www.britannica.com/topic/ahimsa",
        type: "encyclopedia",
      },
    ],
  },
  {
    id: "anekantavada",
    name: "Anekantavada",
    description: "Jain doctrine of non-absolutism: truth is many-sided.",
    originSchool: "jain-philosophy",
    keyThinkers: [],
    relatedIdeas: ["syadvada"],
    challenges: ["dogmatism"],
    modernApplications: ["Pluralism"],
    externalLinks: [
      {
        title: "Anekantavada – Internet Encyclopedia of Philosophy",
        url: "https://iep.utm.edu/anekantavada/",
        type: "article",
      },
      {
        title: "Anekantavada – Britannica",
        url: "https://www.britannica.com/topic/anekantavada",
        type: "encyclopedia",
      },
      {
        title: "Many-Sidedness of Truth – Academic Paper",
        url: "https://www.jstor.org/stable/43854455",
        type: "academic paper",
      },
    ],
  },
  {
    id: "syadvada",
    name: "Syadvada",
    description:
      "Jain theory of conditioned predication: statements are true in certain respects.",
    originSchool: "jain-philosophy",
    keyThinkers: [],
    relatedIdeas: ["anekantavada"],
    challenges: ["absolutism"],
    modernApplications: ["Logic"],
    externalLinks: [
      {
        title: "Syadvada – Internet Encyclopedia of Philosophy",
        url: "https://iep.utm.edu/syadvada/",
        type: "article",
      },
      {
        title: "Syadvada – Britannica",
        url: "https://www.britannica.com/topic/syadvada",
        type: "encyclopedia",
      },
      {
        title: "The Doctrine of Syadvada – Academic Paper (JSTOR)",
        url: "https://www.jstor.org/stable/24660935",
        type: "academic paper",
      },
    ],
  },
  {
    id: "natural-philosophy",
    name: "Natural Philosophy",
    description: "Early rational inquiry into nature by pre-Socratic thinkers.",
    originSchool: "presocratic",
    keyThinkers: ["thales", "heraclitus"],
    relatedIdeas: ["logos", "atomism"],
    challenges: ["mythology"],
    modernApplications: ["Science history"],
    externalLinks: [
      {
        title: "Presocratics – Stanford Encyclopedia of Philosophy",
        url: "https://plato.stanford.edu/entries/presocratics/",
        type: "encyclopedia",
      },
      {
        title: "Natural Philosophy – Internet Encyclopedia of Philosophy",
        url: "https://iep.utm.edu/natural-philosophy/",
        type: "article",
      },
      {
        title: "Natural Philosophy – Britannica",
        url: "https://www.britannica.com/topic/natural-philosophy",
        type: "encyclopedia",
      },
    ],
  },
  {
    id: "logos",
    name: "Logos",
    description: "Principle of order and reason in the cosmos.",
    originSchool: "presocratic",
    keyThinkers: ["heraclitus"],
    relatedIdeas: ["natural-philosophy"],
    challenges: ["irrationalism"],
    modernApplications: ["Philosophy of language"],
    externalLinks: [
      {
        title: "Heraclitus – Stanford Encyclopedia of Philosophy",
        url: "https://plato.stanford.edu/entries/heraclitus/#Logos",
        type: "encyclopedia",
      },
      {
        title: "Logos – Internet Encyclopedia of Philosophy",
        url: "https://iep.utm.edu/logos/",
        type: "article",
      },
      {
        title: "Logos – Britannica",
        url: "https://www.britannica.com/topic/logos",
        type: "encyclopedia",
      },
    ],
  },
  {
    id: "atomism",
    name: "Atomism",
    description: "Theory that reality consists of indivisible atoms and void.",
    originSchool: "presocratic",
    keyThinkers: ["democritus"],
    relatedIdeas: ["natural-philosophy"],
    challenges: ["continuous-substance"],
    modernApplications: ["Science of matter"],
    externalLinks: [
      {
        title: "Atomism – Stanford Encyclopedia of Philosophy",
        url: "https://plato.stanford.edu/entries/atomism-ancient/",
        type: "encyclopedia",
      },
      {
        title: "Atomism – Internet Encyclopedia of Philosophy",
        url: "https://iep.utm.edu/atomism/",
        type: "article",
      },
      {
        title: "Atomism – Britannica",
        url: "https://www.britannica.com/topic/atomism",
        type: "encyclopedia",
      },
    ],
  },
  {
    id: "elements-theory",
    name: "Elements Theory",
    description: "Classical idea that nature is composed of basic elements.",
    originSchool: "presocratic",
    keyThinkers: ["empedocles"],
    relatedIdeas: ["natural-philosophy"],
    challenges: ["atomic-theory"],
    modernApplications: ["History of science"],
    externalLinks: [
      {
        title: "Empedocles – Stanford Encyclopedia of Philosophy",
        url: "https://plato.stanford.edu/entries/empedocles/#FouRooTheNat",
        type: "encyclopedia",
      },
      {
        title: "Empedocles and the Four Elements – IEP",
        url: "https://iep.utm.edu/empedocles/#Elements",
        type: "article",
      },
      {
        title: "Classical Elements – Britannica",
        url: "https://www.britannica.com/topic/classical-element",
        type: "encyclopedia",
      },
    ],
  },
  {
    id: "materialism",
    name: "Materialism",
    description: "View that matter is primary and all phenomena are physical.",
    originSchool: "carvaka",
    keyThinkers: ["brihaspati"],
    relatedIdeas: ["hedonism", "skepticism"],
    challenges: ["idealism", "theism"],
    modernApplications: ["Philosophy of mind"],
    externalLinks: [
      {
        title: "Materialism – Stanford Encyclopedia of Philosophy",
        url: "https://plato.stanford.edu/entries/materialism/",
        type: "encyclopedia",
      },
      {
        title: "Materialism – Internet Encyclopedia of Philosophy",
        url: "https://iep.utm.edu/materialism/",
        type: "article",
      },
      {
        title: "Materialism – Britannica",
        url: "https://www.britannica.com/topic/materialism-philosophy",
        type: "encyclopedia",
      },
    ],
  },
  {
    id: "hedonism",
    name: "Hedonism",
    description: "Ethical view that pleasure is the highest good.",
    originSchool: "carvaka",
    keyThinkers: [],
    relatedIdeas: ["utilitarianism"],
    challenges: ["virtue-ethics"],
    modernApplications: ["Well-being studies"],
    externalLinks: [
      {
        title: "Hedonism – Stanford Encyclopedia of Philosophy",
        url: "https://plato.stanford.edu/entries/hedonism/",
        type: "encyclopedia",
      },
      {
        title: "Hedonism – Internet Encyclopedia of Philosophy",
        url: "https://iep.utm.edu/hedonism/",
        type: "article",
      },
      {
        title: "Hedonism – Britannica",
        url: "https://www.britannica.com/topic/hedonism-philosophy",
        type: "encyclopedia",
      },
    ],
  },
  {
    id: "skepticism",
    name: "Skepticism",
    description: "Doubt about the possibility of certain knowledge.",
    originSchool: "hellenistic",
    keyThinkers: ["sextus-empiricus"],
    relatedIdeas: ["ataraxia"],
    challenges: ["dogmatism"],
    modernApplications: ["Epistemology"],
    externalLinks: [
      {
        title: "Skepticism – Stanford Encyclopedia of Philosophy",
        url: "https://plato.stanford.edu/entries/skepticism/",
        type: "encyclopedia",
      },
      {
        title: "Skepticism – Internet Encyclopedia of Philosophy",
        url: "https://iep.utm.edu/skepticism/",
        type: "article",
      },
      {
        title: "Skepticism – Britannica",
        url: "https://www.britannica.com/topic/skepticism",
        type: "encyclopedia",
      },
    ],
  },
  {
    id: "pratyaksha",
    name: "Pratyaksha (Perception as Knowledge)",
    description:
      "Carvaka emphasis on direct perception as the only valid knowledge source.",
    originSchool: "carvaka",
    keyThinkers: [],
    relatedIdeas: ["materialism"],
    challenges: ["inference-theories"],
    modernApplications: ["Epistemology"],
    externalLinks: [
      {
        title: "Indian Epistemology – Stanford Encyclopedia of Philosophy",
        url: "https://plato.stanford.edu/entries/epistemology-india/#PerKnow",
        type: "encyclopedia",
      },
      {
        title: "Pratyaksha in Indian Philosophy – IEP",
        url: "https://iep.utm.edu/indian-epistemology/#Pratyaksha",
        type: "article",
      },
      {
        title: "Direct Perception in Carvaka – Academic Paper",
        url: "https://www.jstor.org/stable/24663489",
        type: "academic paper",
      },
    ],
  },
  {
    id: "impermanence",
    name: "Impermanence (Anicca)",
    description:
      "Buddhist doctrine that all conditioned phenomena are transient.",
    originSchool: "buddhism",
    keyThinkers: ["buddha"],
    relatedIdeas: ["dependent-origination", "non-self"],
    challenges: ["essentialism"],
    modernApplications: ["Mindfulness"],
    externalLinks: [
      {
        title: "Buddhist Impermanence – Stanford Encyclopedia of Philosophy",
        url: "https://plato.stanford.edu/entries/impermanence/",
        type: "encyclopedia",
      },
      {
        title: "Anicca (Impermanence) – IEP",
        url: "https://iep.utm.edu/anicca/",
        type: "article",
      },
      {
        title: "Impermanence – Britannica",
        url: "https://www.britannica.com/topic/impermanence-Buddhism",
        type: "encyclopedia",
      },
    ],
  },
  {
    id: "non-self",
    name: "Non-self (Anatta)",
    description: "Buddhist claim that there is no permanent, unchanging self.",
    originSchool: "buddhism",
    keyThinkers: ["buddha"],
    relatedIdeas: ["dependent-origination", "impermanence"],
    challenges: ["atman"],
    modernApplications: ["Psychology of self"],
    externalLinks: [
      {
        title: "No-Self Doctrine – Stanford Encyclopedia of Philosophy",
        url: "https://plato.stanford.edu/entries/no-self/",
        type: "encyclopedia",
      },
      {
        title: "Anatta – Internet Encyclopedia of Philosophy",
        url: "https://iep.utm.edu/anatta/",
        type: "article",
      },
      {
        title: "Anatta – Britannica",
        url: "https://www.britannica.com/topic/anatta",
        type: "encyclopedia",
      },
    ],
  },
  {
    id: "dependent-origination",
    name: "Dependent Origination",
    description: "Buddhist principle that phenomena arise interdependently.",
    originSchool: "buddhism",
    keyThinkers: ["buddha"],
    relatedIdeas: ["impermanence", "non-self"],
    challenges: ["substance-metaphysics"],
    modernApplications: ["Systems thinking"],
    externalLinks: [
      {
        title: "Dependent Origination – Stanford Encyclopedia of Philosophy",
        url: "https://plato.stanford.edu/entries/dependent-origination/",
        type: "encyclopedia",
      },
      {
        title: "Pratītyasamutpāda (Dependent Origination) – IEP",
        url: "https://iep.utm.edu/dependent-origination/",
        type: "article",
      },
      {
        title: "Dependent Origination – Britannica",
        url: "https://www.britannica.com/topic/pratityasamutpada",
        type: "encyclopedia",
      },
    ],
  },
  {
    id: "dharma",
    name: "Dharma",
    description: "Moral order and duty; core in Indian traditions.",
    originSchool: "eastern-ancient",
    keyThinkers: [],
    relatedIdeas: ["karma", "middle-way"],
    challenges: ["relativism"],
    modernApplications: ["Ethics"],
    externalLinks: [
      {
        title: "Dharma – Stanford Encyclopedia of Philosophy",
        url: "https://plato.stanford.edu/entries/dharma/",
        type: "encyclopedia",
      },
      {
        title: "Dharma – Internet Encyclopedia of Philosophy",
        url: "https://iep.utm.edu/dharma/",
        type: "article",
      },
      {
        title: "Dharma – Britannica",
        url: "https://www.britannica.com/topic/dharma-religion",
        type: "encyclopedia",
      },
    ],
  },
  {
    id: "karma",
    name: "Karma",
    description: "Law of moral causation where actions have consequences.",
    originSchool: "eastern-ancient",
    keyThinkers: [],
    relatedIdeas: ["dharma", "rebirth"],
    challenges: ["fatalism"],
    modernApplications: ["Moral psychology"],
    externalLinks: [
      {
        title: "Karma – Stanford Encyclopedia of Philosophy",
        url: "https://plato.stanford.edu/entries/karma/",
        type: "encyclopedia",
      },
      {
        title: "Karma – Internet Encyclopedia of Philosophy",
        url: "https://iep.utm.edu/karma/",
        type: "article",
      },
      {
        title: "Karma – Britannica",
        url: "https://www.britannica.com/topic/karma",
        type: "encyclopedia",
      },
    ],
  },
  {
    id: "dao",
    name: "The Way (Dao)",
    description: "Central Daoist concept of the natural way of things.",
    originSchool: "eastern-ancient",
    keyThinkers: ["laozi"],
    relatedIdeas: ["wu-wei"],
    challenges: ["legalism"],
    modernApplications: ["Environmental ethics"],
    externalLinks: [
      {
        title: "Daoism – Stanford Encyclopedia of Philosophy",
        url: "https://plato.stanford.edu/entries/daoism/#Dao",
        type: "encyclopedia",
      },
      {
        title: "Dao (Tao) – Internet Encyclopedia of Philosophy",
        url: "https://iep.utm.edu/dao/",
        type: "article",
      },
      {
        title: "Dao – Britannica",
        url: "https://www.britannica.com/topic/Daoism",
        type: "encyclopedia",
      },
    ],
  },
  {
    id: "middle-way",
    name: "Middle Way",
    description:
      "Buddhist path avoiding extremes of indulgence and asceticism.",
    originSchool: "buddhism",
    keyThinkers: ["buddha"],
    relatedIdeas: ["four-noble-truths"],
    challenges: ["ascetic-extremes"],
    modernApplications: ["Therapeutic balance"],
    externalLinks: [
      {
        title: "Middle Way – Stanford Encyclopedia of Philosophy",
        url: "https://plato.stanford.edu/entries/middle-way/",
        type: "encyclopedia",
      },
      {
        title: "Middle Way – Internet Encyclopedia of Philosophy",
        url: "https://iep.utm.edu/middle-way/",
        type: "article",
      },
      {
        title: "Middle Way – Britannica",
        url: "https://www.britannica.com/topic/Middle-Way",
        type: "encyclopedia",
      },
    ],
  },
  {
    id: "rajadharma",
    name: "Rajadharma",
    description: "Duties of a ruler in Indian political thought.",
    originSchool: "ancient-indian-political-thought",
    keyThinkers: ["chanakya"],
    relatedIdeas: ["arthashastra"],
    challenges: ["tyranny"],
    modernApplications: ["Governance"],
    externalLinks: [
      {
        title: "Kautilya’s Rajadharma – Stanford Encyclopedia of Philosophy",
        url: "https://plato.stanford.edu/entries/kautilya/#Rajadharma",
        type: "encyclopedia",
      },
      {
        title: "Rajadharma in Dharmashastra – Academic Paper",
        url: "https://www.jstor.org/stable/24663189",
        type: "academic paper",
      },
      {
        title: "Rajadharma – Britannica",
        url: "https://www.britannica.com/topic/dharma-religion",
        type: "encyclopedia",
      },
    ],
  },
  {
    id: "arthashastra",
    name: "Arthashastra",
    description:
      "Treatise on statecraft, economic policy, and military strategy.",
    originSchool: "ancient-indian-political-thought",
    keyThinkers: ["chanakya"],
    relatedIdeas: ["statecraft", "rajadharma"],
    challenges: ["idealism"],
    modernApplications: ["Political science"],
    externalLinks: [
      {
        title: "Kautilya’s Arthashastra – Stanford Encyclopedia of Philosophy",
        url: "https://plato.stanford.edu/entries/kautilya-arthashastra/",
        type: "encyclopedia",
      },
      {
        title: "Arthashastra – Internet Encyclopedia of Philosophy",
        url: "https://iep.utm.edu/arthashastra/",
        type: "article",
      },
      {
        title: "Arthashastra – Britannica",
        url: "https://www.britannica.com/topic/Arthashastra",
        type: "encyclopedia",
      },
    ],
  },
  {
    id: "ataraxia",
    name: "Ataraxia",
    description:
      "Hellenistic ideal of tranquility and freedom from disturbance.",
    originSchool: "hellenistic",
    keyThinkers: ["epicurus"],
    relatedIdeas: ["practical-wisdom"],
    challenges: ["anxiety"],
    modernApplications: ["Therapeutic philosophy"],
    externalLinks: [
      {
        title: "Epicurus and Ataraxia – Stanford Encyclopedia of Philosophy",
        url: "https://plato.stanford.edu/entries/epicurus/#Ata",
        type: "encyclopedia",
      },
      {
        title: "Ataraxia – Internet Encyclopedia of Philosophy",
        url: "https://iep.utm.edu/ataraxia/",
        type: "article",
      },
      {
        title: "Ataraxia – Britannica",
        url: "https://www.britannica.com/topic/ataraxia",
        type: "encyclopedia",
      },
    ],
  },
  {
    id: "cosmopolitanism",
    name: "Cosmopolitanism",
    description: "View that all humans belong to a single moral community.",
    originSchool: "hellenistic",
    keyThinkers: ["stoics"],
    relatedIdeas: ["universalism"],
    challenges: ["nationalism"],
    modernApplications: ["Global ethics"],
    externalLinks: [
      {
        title: "Cosmopolitanism – Stanford Encyclopedia of Philosophy",
        url: "https://plato.stanford.edu/entries/cosmopolitanism/",
        type: "encyclopedia",
      },
      {
        title: "Cosmopolitanism – Internet Encyclopedia of Philosophy",
        url: "https://iep.utm.edu/cosmopolitanism/",
        type: "article",
      },
      {
        title: "Cosmopolitanism – Britannica",
        url: "https://www.britannica.com/topic/cosmopolitanism-philosophy",
        type: "encyclopedia",
      },
    ],
  },
  {
    id: "practical-wisdom",
    name: "Practical Wisdom (Phronesis)",
    description: "Aristotle’s notion of sound judgment in action.",
    originSchool: "classical",
    keyThinkers: ["aristotle"],
    relatedIdeas: ["virtue-ethics", "golden-mean"],
    challenges: ["rule-fetishism"],
    modernApplications: ["Leadership"],
    externalLinks: [
      {
        title:
          "Aristotle on Practical Wisdom – Stanford Encyclopedia of Philosophy",
        url: "https://plato.stanford.edu/entries/aristotle-ethics/#Phronesis",
        type: "encyclopedia",
      },
      {
        title:
          "Phronesis (Practical Wisdom) – Internet Encyclopedia of Philosophy",
        url: "https://iep.utm.edu/phronesis/",
        type: "article",
      },
      {
        title: "Practical Wisdom – Britannica",
        url: "https://www.britannica.com/topic/phronesis",
        type: "encyclopedia",
      },
    ],
  },
  {
    id: "hedonistic-calculus",
    name: "Hedonistic Calculus",
    description:
      "Jeremy Bentham’s method for quantifying pleasure and pain to determine the moral worth of actions.",
    originSchool: "utilitarianism",
    keyThinkers: ["bentham"],
    relatedIdeas: ["greatest-happiness-principle", "consequentialism"],
    challenges: ["qualitative-differences", "virtue-ethics"],
    modernApplications: [
      "Policy analysis",
      "Cost-benefit analysis",
      "Criminal justice reform",
    ],
    externalLinks: [
      {
        title:
          "Bentham’s Hedonistic Calculus – Stanford Encyclopedia of Philosophy",
        url: "https://plato.stanford.edu/entries/bentham/#HedCal",
        type: "encyclopedia",
      },
      {
        title:
          "Hedonistic Calculus Explained – Internet Encyclopedia of Philosophy",
        url: "https://iep.utm.edu/utilitarianism/#HedonisticCalculus",
        type: "article",
      },
      {
        title:
          "Jeremy Bentham, An Introduction to the Principles of Morals and Legislation (1789)",
        url: "https://www.gutenberg.org/ebooks/65413",
        type: "book",
      },
    ],
  },
  {
    id: "consequentialism",
    name: "Consequentialism",
    description:
      "The ethical theory that the morality of actions depends solely on their outcomes or consequences.",
    originSchool: "modern-ethics",
    keyThinkers: ["bentham", "mill", "singer"],
    relatedIdeas: ["utilitarianism", "greatest-happiness-principle"],
    challenges: ["deontology", "virtue-ethics", "rights-theories"],
    modernApplications: [
      "Climate policy",
      "Healthcare triage",
      "Animal rights",
    ],
    externalLinks: [
      {
        title: "Consequentialism – Stanford Encyclopedia of Philosophy",
        url: "https://plato.stanford.edu/entries/consequentialism/",
        type: "encyclopedia",
      },
      {
        title: "Consequentialism – Internet Encyclopedia of Philosophy",
        url: "https://iep.utm.edu/consequentialism/",
        type: "article",
      },
      {
        title: "Practical Ethics (Peter Singer, 2011)",
        url: "https://global.oup.com/academic/product/practical-ethics-9780521707688",
        type: "book",
      },
    ],
  },
  {
    id: "social-reform",
    name: "Social Reform",
    description:
      "The application of philosophical and ethical principles, especially utilitarianism, to improve social institutions, laws, and conditions.",
    originSchool: "modern-ethics",
    keyThinkers: ["bentham", "mill", "beatrice-webb"],
    relatedIdeas: ["greatest-happiness-principle", "consequentialism"],
    challenges: ["status-quo-defenses", "individual-rights"],
    modernApplications: [
      "Labor rights",
      "Prison reform",
      "Public education",
      "Welfare policy",
    ],
    externalLinks: [
      {
        title:
          "Jeremy Bentham and Social Reform – Stanford Encyclopedia of Philosophy",
        url: "https://plato.stanford.edu/entries/bentham/#SocReforms",
        type: "encyclopedia",
      },
      {
        title:
          "Mill, Utilitarianism, and Social Reform – Internet Encyclopedia of Philosophy",
        url: "https://iep.utm.edu/mill/#SocialReform",
        type: "article",
      },
      {
        title: "The Utilitarians and Social Reform (Book)",
        url: "https://archive.org/details/utilitariansandsocialreform",
        type: "book",
      },
    ],
  },
  {
    id: "linear-history",
    name: "Linear History",
    description:
      "The conception of history as a progressive, one-directional process, challenged by Nietzsche’s doctrine of eternal recurrence.",
    originSchool: "modern-historicism",
    keyThinkers: ["hegel", "marx"],
    relatedIdeas: ["eternal-recurrence", "progressivism"],
    challenges: ["cyclical-history", "existentialism"],
    modernApplications: ["Philosophy of history", "Historiography"],
    externalLinks: [
      {
        title: "Philosophy of History – Stanford Encyclopedia of Philosophy",
        url: "https://plato.stanford.edu/entries/history/",
        type: "encyclopedia",
      },
      {
        title: "Nietzsche and History – Internet Encyclopedia of Philosophy",
        url: "https://iep.utm.edu/nietzsche-hist/",
        type: "article",
      },
      {
        title: "Philosophy of History – Britannica",
        url: "https://www.britannica.com/topic/philosophy-of-history",
        type: "encyclopedia",
      },
    ],
  },
  {
    id: "egalitarianism",
    name: "Egalitarianism",
    description:
      "The principle that all humans are equal in fundamental worth or moral status, challenged by Nietzsche’s concept of the Übermensch.",
    originSchool: "political-philosophy",
    keyThinkers: ["rousseau", "rawls"],
    relatedIdeas: ["justice", "humanism"],
    challenges: ["elitism", "übermensch"],
    modernApplications: ["Human rights", "Democratic theory"],
    externalLinks: [
      {
        title: "Egalitarianism – Stanford Encyclopedia of Philosophy",
        url: "https://plato.stanford.edu/entries/egalitarianism/",
        type: "encyclopedia",
      },
      {
        title: "Egalitarianism – Internet Encyclopedia of Philosophy",
        url: "https://iep.utm.edu/egalitarianism/",
        type: "article",
      },
      {
        title: "Egalitarianism – Britannica",
        url: "https://www.britannica.com/topic/egalitarianism",
        type: "encyclopedia",
      },
    ],
  },
  {
    id: "religious-theism",
    name: "Religious Theism",
    description:
      "The belief in a divine being or beings, challenged by Nietzsche’s proclamation that ‘God is dead’.",
    originSchool: "theology",
    keyThinkers: ["aquinas", "anselm", "kierkegaard"],
    relatedIdeas: ["faith-and-reason", "five-ways"],
    challenges: ["atheism", "secularism"],
    modernApplications: ["Philosophy of religion", "Apologetics"],
    externalLinks: [
      {
        title: "Theism – Stanford Encyclopedia of Philosophy",
        url: "https://plato.stanford.edu/entries/theism/",
        type: "encyclopedia",
      },
      {
        title: "Theism – Internet Encyclopedia of Philosophy",
        url: "https://iep.utm.edu/theism/",
        type: "article",
      },
      {
        title: "Theism – Britannica",
        url: "https://www.britannica.com/topic/theism",
        type: "encyclopedia",
      },
    ],
  },
  {
    id: "logocentrism",
    name: "Logocentrism",
    description:
      "Derrida’s critique of Western philosophy’s privileging of speech and reason (‘logos’) as the foundation of meaning.",
    originSchool: "post-structuralism",
    keyThinkers: ["derrida"],
    relatedIdeas: ["deconstruction", "différance"],
    challenges: ["phonocentrism", "structuralism"],
    modernApplications: ["Literary theory", "Cultural criticism"],
    externalLinks: [
      {
        title: "Logocentrism – Internet Encyclopedia of Philosophy",
        url: "https://iep.utm.edu/logocentrism/",
        type: "article",
      },
      {
        title: "Logocentrism and Derrida – Academic Paper (JSTOR)",
        url: "https://www.jstor.org/stable/1343463",
        type: "academic paper",
      },
      {
        title: "Logocentrism – Britannica",
        url: "https://www.britannica.com/topic/logocentrism",
        type: "encyclopedia",
      },
    ],
  },
  {
    id: "differance",
    name: "Différance",
    description:
      "Derrida’s term for the endless deferral and difference inherent in language, undermining fixed meaning.",
    originSchool: "post-structuralism",
    keyThinkers: ["derrida"],
    relatedIdeas: ["deconstruction", "logocentrism"],
    challenges: ["fixed-meaning", "structuralism"],
    modernApplications: ["Semiotics", "Critical theory"],
    externalLinks: [
      {
        title: "Différance – Stanford Encyclopedia of Philosophy",
        url: "https://plato.stanford.edu/entries/derrida/#Diff",
        type: "encyclopedia",
      },
      {
        title: "Différance – Internet Encyclopedia of Philosophy",
        url: "https://iep.utm.edu/differance/",
        type: "article",
      },
      {
        title: "Différance (Derrida, 1968) – Academic Paper",
        url: "https://www.jstor.org/stable/1343194",
        type: "academic paper",
      },
    ],
  },
  {
    id: "biopolitics",
    name: "Biopolitics",
    description:
      "Foucault’s concept of political power exercised over populations through regulation of life, health, and bodies.",
    originSchool: "postmodernism",
    keyThinkers: ["foucault"],
    relatedIdeas: ["power-knowledge", "disciplinary-power"],
    challenges: ["liberal-humanism", "individualism"],
    modernApplications: ["Public health", "Surveillance studies"],
    externalLinks: [
      {
        title: "Biopolitics – Stanford Encyclopedia of Philosophy",
        url: "https://plato.stanford.edu/entries/biopolitics/",
        type: "encyclopedia",
      },
      {
        title:
          "Foucault, Biopolitics, and Governmentality – Internet Encyclopedia of Philosophy",
        url: "https://iep.utm.edu/biopolitics/",
        type: "article",
      },
      {
        title: "Society Must Be Defended (Foucault, 1976)",
        url: "https://monoskop.org/images/9/94/Foucault_Michel_Society_Must_Be_Defended.pdf",
        type: "book",
      },
    ],
  },
  {
    id: "disciplinary-power",
    name: "Disciplinary Power",
    description:
      "Foucault’s notion of power that operates through surveillance, normalization, and institutions such as prisons and schools.",
    originSchool: "postmodernism",
    keyThinkers: ["foucault"],
    relatedIdeas: ["power-knowledge", "biopolitics"],
    challenges: ["freedom", "resistance"],
    modernApplications: ["Criminology", "Education studies"],
    externalLinks: [
      {
        title:
          "Michel Foucault: Discipline and Punish – Stanford Encyclopedia of Philosophy",
        url: "https://plato.stanford.edu/entries/foucault/#DisPun",
        type: "encyclopedia",
      },
      {
        title: "Disciplinary Power – Internet Encyclopedia of Philosophy",
        url: "https://iep.utm.edu/foucault/#Discipline",
        type: "article",
      },
      {
        title: "Discipline and Punish (Foucault, 1975)",
        url: "https://monoskop.org/images/0/02/Foucault_Michel_Discipline_and_Punish_The_Birth_of_the_Prison.pdf",
        type: "book",
      },
    ],
  },
  {
    id: "legalism",
    name: "Legalism",
    description:
      "A classical Chinese philosophy emphasizing strict laws, centralized authority, and harsh punishments, often contrasted with Confucian benevolence.",
    originSchool: "chinese-philosophy",
    keyThinkers: ["han-feizi"],
    relatedIdeas: ["li-ritual", "dao"],
    challenges: ["ren-benevolence", "confucianism"],
    modernApplications: ["Law", "Political science"],
    externalLinks: [
      {
        title:
          "Legalism in Chinese Philosophy – Stanford Encyclopedia of Philosophy",
        url: "https://plato.stanford.edu/entries/chinese-legalism/",
        type: "encyclopedia",
      },
      {
        title: "Legalism – Internet Encyclopedia of Philosophy",
        url: "https://iep.utm.edu/legalism/",
        type: "article",
      },
      {
        title: "Legalism – Britannica",
        url: "https://www.britannica.com/topic/Legalism",
        type: "encyclopedia",
      },
    ],
  },
  {
    id: "anarchy",
    name: "Anarchy",
    description:
      "A state of disorder or absence of authority; in Confucian thought, the feared outcome of neglecting ritual and hierarchy.",
    originSchool: "political-philosophy",
    keyThinkers: ["proudhon", "bakunin"],
    relatedIdeas: ["li-ritual", "daoism"],
    challenges: ["statecraft", "authority"],
    modernApplications: ["Political theory", "Anarchism studies"],
    externalLinks: [
      {
        title: "Anarchism – Stanford Encyclopedia of Philosophy",
        url: "https://plato.stanford.edu/entries/anarchism/",
        type: "encyclopedia",
      },
      {
        title: "Anarchism – Internet Encyclopedia of Philosophy",
        url: "https://iep.utm.edu/anarchism/",
        type: "article",
      },
      {
        title: "Anarchism – Britannica",
        url: "https://www.britannica.com/topic/anarchism",
        type: "encyclopedia",
      },
    ],
  },
  {
    id: "selfishness",
    name: "Selfishness",
    description:
      "The pursuit of self-interest at the expense of communal or moral obligations, criticized in Confucian ethics.",
    originSchool: "ethics",
    keyThinkers: ["hobbes"],
    relatedIdeas: ["junzi-gentleman", "virtue-ethics"],
    challenges: ["altruism", "benevolence"],
    modernApplications: ["Psychology", "Moral philosophy"],
    externalLinks: [
      {
        title:
          "Self-Interest and Morality – Stanford Encyclopedia of Philosophy",
        url: "https://plato.stanford.edu/entries/self-interest-moral/",
        type: "encyclopedia",
      },
      {
        title: "Egoism and Selfishness – Internet Encyclopedia of Philosophy",
        url: "https://iep.utm.edu/egoism/",
        type: "article",
      },
      {
        title: "Selfishness in Philosophy – Britannica",
        url: "https://www.britannica.com/topic/egoism",
        type: "encyclopedia",
      },
    ],
  },
  {
    id: "linguistic-relativism",
    name: "Linguistic Relativism",
    description:
      "The idea that language shapes thought and cultural worldview, contrasting with Confucian advocacy of correct naming.",
    originSchool: "philosophy-of-language",
    keyThinkers: ["sapir", "whorf"],
    relatedIdeas: ["rectification-of-names"],
    challenges: ["universal-grammar", "realism"],
    modernApplications: ["Anthropology", "Cognitive science"],
    externalLinks: [
      {
        title: "Linguistic Relativism – Stanford Encyclopedia of Philosophy",
        url: "https://plato.stanford.edu/entries/relativism/#LinRel",
        type: "encyclopedia",
      },
      {
        title: "Sapir–Whorf Hypothesis – Internet Encyclopedia of Philosophy",
        url: "https://iep.utm.edu/sapir-whorf/",
        type: "article",
      },
      {
        title: "Linguistic Relativity – Britannica",
        url: "https://www.britannica.com/topic/linguistic-relativity",
        type: "encyclopedia",
      },
    ],
  },
  {
    id: "eurocentrism",
    name: "Eurocentrism",
    description:
      "The tendency to interpret world history, culture, and philosophy from a European perspective, challenged by African and postcolonial thinkers.",
    originSchool: "modern-critical-theory",
    keyThinkers: ["wiredu", "fanon"],
    relatedIdeas: ["conceptual-decolonization", "decolonization"],
    challenges: ["pluralism", "indigenous-philosophy"],
    modernApplications: ["Postcolonial studies", "Global ethics"],
    externalLinks: [
      {
        title: "Eurocentrism – Internet Encyclopedia of Philosophy",
        url: "https://iep.utm.edu/eurocentrism/",
        type: "article",
      },
      {
        title: "Eurocentrism and Decolonial Thought – Academic Paper",
        url: "https://www.jstor.org/stable/24584866",
        type: "academic paper",
      },
      {
        title: "Eurocentrism – Britannica",
        url: "https://www.britannica.com/topic/Eurocentrism",
        type: "encyclopedia",
      },
    ],
  },
  {
    id: "individualism",
    name: "Individualism",
    description:
      "The belief in the moral worth and autonomy of the individual, contrasted with African communalism and Confucian ethics.",
    originSchool: "modern-ethics",
    keyThinkers: ["locke", "mill"],
    relatedIdeas: ["communalism", "humanism"],
    challenges: ["collectivism", "ubuntu"],
    modernApplications: ["Liberalism", "Human rights"],
    externalLinks: [
      {
        title: "Individualism – Stanford Encyclopedia of Philosophy",
        url: "https://plato.stanford.edu/entries/individualism-history/",
        type: "encyclopedia",
      },
      {
        title: "Individualism – Internet Encyclopedia of Philosophy",
        url: "https://iep.utm.edu/individualism/",
        type: "article",
      },
      {
        title: "Individualism – Britannica",
        url: "https://www.britannica.com/topic/individualism",
        type: "encyclopedia",
      },
    ],
  },
  {
    id: "colonialism",
    name: "Colonialism",
    description:
      "The domination and exploitation of foreign territories and peoples, opposed by Indigenous and postcolonial philosophies.",
    originSchool: "political-theory",
    keyThinkers: ["fanon", "cesaire"],
    relatedIdeas: ["indigenous-sovereignty", "decolonization"],
    challenges: ["anti-colonialism", "postcolonialism"],
    modernApplications: ["Critical theory", "International relations"],
    externalLinks: [
      {
        title: "Colonialism – Stanford Encyclopedia of Philosophy",
        url: "https://plato.stanford.edu/entries/colonialism/",
        type: "encyclopedia",
      },
      {
        title: "Colonialism – Internet Encyclopedia of Philosophy",
        url: "https://iep.utm.edu/colonialism/",
        type: "article",
      },
      {
        title: "Colonialism – Britannica",
        url: "https://www.britannica.com/topic/colonialism",
        type: "encyclopedia",
      },
    ],
  },
  {
    id: "neocolonialism",
    name: "Neocolonialism",
    description:
      "The continued economic and cultural domination of former colonies by powerful states and institutions, even after political independence.",
    originSchool: "critical-theory",
    keyThinkers: ["kwame-nkrumah"],
    relatedIdeas: ["decolonization", "colonialism"],
    challenges: ["sovereignty", "self-determination"],
    modernApplications: ["Global politics", "Development studies"],
    externalLinks: [
      {
        title: "Neocolonialism – Internet Encyclopedia of Philosophy",
        url: "https://iep.utm.edu/neocolonialism/",
        type: "article",
      },
      {
        title:
          "Kwame Nkrumah: Neocolonialism, the Last Stage of Imperialism (1965)",
        url: "https://www.marxists.org/subject/africa/nkrumah/neocolonialism/index.htm",
        type: "book",
      },
      {
        title: "Neocolonialism – Britannica",
        url: "https://www.britannica.com/topic/neocolonialism",
        type: "encyclopedia",
      },
    ],
  },
  {
    id: "mythology",
    name: "Mythology",
    description:
      "Traditional narratives explaining the origins and order of the world, contrasted with the rational inquiry of early natural philosophy.",
    originSchool: "ancient",
    keyThinkers: ["hesiod", "homer"],
    relatedIdeas: ["natural-philosophy"],
    challenges: ["rationalism", "science"],
    modernApplications: ["Cultural studies", "Comparative religion"],
    externalLinks: [
      {
        title: "Greek Mythology – Stanford Encyclopedia of Philosophy",
        url: "https://plato.stanford.edu/entries/greek-myth/",
        type: "encyclopedia",
      },
      {
        title: "Mythology – Internet Encyclopedia of Philosophy",
        url: "https://iep.utm.edu/mythology/",
        type: "article",
      },
      {
        title: "Myth – Britannica",
        url: "https://www.britannica.com/topic/myth",
        type: "encyclopedia",
      },
    ],
  },
  {
    id: "continuous-substance",
    name: "Continuous Substance",
    description:
      "The view that matter is infinitely divisible and continuous, opposing atomistic theories of indivisible particles.",
    originSchool: "presocratic",
    keyThinkers: ["aristotle"],
    relatedIdeas: ["atomism", "elements-theory"],
    challenges: ["atomism"],
    modernApplications: ["Philosophy of science", "Physics"],
    externalLinks: [
      {
        title: "Ancient Atomism – Stanford Encyclopedia of Philosophy",
        url: "https://plato.stanford.edu/entries/atomism-ancient/#ConSub",
        type: "encyclopedia",
      },
      {
        title: "Atomism vs. Continuum – Internet Encyclopedia of Philosophy",
        url: "https://iep.utm.edu/atomism/#Continuum",
        type: "article",
      },
      {
        title: "Continuum Theory – Britannica",
        url: "https://www.britannica.com/science/continuum-physics",
        type: "encyclopedia",
      },
    ],
  },
  {
  id: "will-to-power",
  name: "Will to Power",
  description:
    "Nietzsche's concept that the fundamental driving force in humans is not survival or pleasure but a striving to exert strength, overcome obstacles, and impose form upon the world. It underlies creativity, ambition, and self-overcoming.",
  originSchool: "existentialism",
  keyThinkers: ["friedrich-nietzsche"],
  relatedIdeas: ["eternal-recurrence", "übermensch", "nihilism"],
  challenges: ["darwinian-survivalism", "utilitarianism", "determinism"],
  modernApplications: [
    "Political theory and critiques of power",
    "Psychoanalysis and depth psychology",
    "Literary modernism and post-structuralism"
  ],
  influences: ["schopenhauerian-voluntarism", "greek-tragedy"],
  developments: ["existentialist-ethics", "postmodern-theory"],
  legacy: "Became central to Nietzsche’s philosophy and influenced existentialism, psychology, political thought, and postmodern critiques of power",
  keyTexts: ["Thus Spoke Zarathustra", "Beyond Good and Evil", "The Will to Power (posthumous notes)"],
  externalLinks: [
    {
      title: "Stanford Encyclopedia of Philosophy: Nietzsche",
      url: "https://plato.stanford.edu/entries/nietzsche/",
      type: "encyclopedia"
    },
    {
      title: "Internet Encyclopedia of Philosophy: Nietzsche’s Will to Power",
      url: "https://iep.utm.edu/nietzsche/#H6",
      type: "encyclopedia"
    },
    {
      title: "Nietzsche Source – The Will to Power (Digitized Texts)",
      url: "http://www.nietzschesource.org/",
      type: "book"
    }
  ]
},
  {
  id: "anxiety",
  name: "Anxiety",
  description:
    "A central existential condition reflecting human awareness of freedom, responsibility, and the uncertainty of existence. Distinguished from fear, anxiety arises not from concrete threats but from confronting the possibilities of being.",
  originSchool: "existentialism",
  keyThinkers: ["søren-kierkegaard", "martin-heidegger", "jean-paul-sartre"],
  relatedIdeas: ["angst", "freedom", "authenticity", "existential-dread"],
  challenges: ["determinism", "scientific-naturalism", "stoicism"],
  modernApplications: [
    "Existential psychotherapy",
    "Philosophy of mental health",
    "Literature and art exploring alienation"
  ],
  influences: ["Christian theology", "phenomenology"],
  developments: ["existential-psychology", "humanistic-psychology"],
  legacy: "Framed modern understandings of subjectivity, freedom, and mental health",
  keyTexts: ["The Concept of Anxiety (Kierkegaard)", "Being and Time (Heidegger)"],
  externalLinks: [
    {
      title: "Stanford Encyclopedia of Philosophy: Existentialism",
      url: "https://plato.stanford.edu/entries/existentialism/",
      type: "encyclopedia"
    },
    {
      title: "Internet Encyclopedia of Philosophy: Kierkegaard",
      url: "https://iep.utm.edu/kierkegaard/",
      type: "encyclopedia"
    }
  ]
},
{
  id: "subjective-truth",
  name: "Subjective Truth",
  description:
    "The idea that truth is not only an objective correspondence with reality but also involves personal appropriation, commitment, and lived experience. It emphasizes how truth becomes meaningful when internalized by the individual.",
  originSchool: "existentialism",
  keyThinkers: ["søren-kierkegaard"],
  relatedIdeas: ["faith", "authenticity", "individualism"],
  challenges: ["objectivism", "scientific-realism", "relativism"],
  modernApplications: [
    "Religious philosophy",
    "Personal identity theory",
    "Narrative ethics"
  ],
  influences: ["Christian existentialism"],
  developments: ["existential-hermeneutics", "postmodern-perspectivism"],
  legacy: "Reframed the nature of truth as a lived and personal reality rather than detached abstraction",
  keyTexts: ["Concluding Unscientific Postscript (Kierkegaard)"],
  externalLinks: [
    {
      title: "Stanford Encyclopedia of Philosophy: Kierkegaard",
      url: "https://plato.stanford.edu/entries/kierkegaard/",
      type: "encyclopedia"
    },
    {
      title: "Internet Encyclopedia of Philosophy: Truth",
      url: "https://iep.utm.edu/truth/",
      type: "encyclopedia"
    }
  ]
},
{
  id: "underground-consciousness",
  name: "Underground Consciousness",
  description:
    "A state of heightened self-awareness marked by alienation, resentment, and paralysis in action. Popularized by Dostoevsky, it depicts individuals caught between rational self-interest and irrational defiance.",
  originSchool: "existentialism",
  keyThinkers: ["fyodor-dostoevsky"],
  relatedIdeas: ["alienation", "nihilism", "freedom", "resentment"],
  challenges: ["utilitarianism", "rational-egoism", "enlightenment-optimism"],
  modernApplications: [
    "Critique of rational choice theory",
    "Literary existentialism",
    "Psychological studies of alienation"
  ],
  influences: ["Russian literature", "Christian theology"],
  developments: ["existential-psychology", "absurdism"],
  legacy: "Shaped existential critiques of rationalism and influenced 20th-century philosophy and literature",
  keyTexts: ["Notes from Underground (Dostoevsky)"],
  externalLinks: [
    {
      title: "Stanford Encyclopedia of Philosophy: Dostoevsky",
      url: "https://plato.stanford.edu/entries/dostoevsky/",
      type: "encyclopedia"
    },
    {
      title: "Internet Encyclopedia of Philosophy: Existentialism",
      url: "https://iep.utm.edu/existent/",
      type: "encyclopedia"
    }
  ]
 },
  {
    id: "idealism",
    name: "Idealism",
    description:
      "The metaphysical position that reality is fundamentally mental or immaterial, contrasted with materialism.",
    originSchool: "modern-idealism",
    keyThinkers: ["berkeley", "kant", "hegel"],
    relatedIdeas: ["realism", "transcendental-idealism"],
    challenges: ["materialism", "empiricism"],
    modernApplications: ["Philosophy of mind", "Epistemology"],
    externalLinks: [
      {
        title: "Idealism – Stanford Encyclopedia of Philosophy",
        url: "https://plato.stanford.edu/entries/idealism/",
        type: "encyclopedia",
      },
      {
        title: "Idealism – Internet Encyclopedia of Philosophy",
        url: "https://iep.utm.edu/idealism/",
        type: "article",
      },
      {
        title: "Idealism – Britannica",
        url: "https://www.britannica.com/topic/idealism",
        type: "encyclopedia",
      },
    ],
  },
  {
    id: "theism",
    name: "Theism",
    description:
      "The belief in the existence of a god or gods, often contrasted with atheism and naturalism.",
    originSchool: "theology",
    keyThinkers: ["anselm", "aquinas"],
    relatedIdeas: ["faith-and-reason", "five-ways"],
    challenges: ["atheism", "materialism"],
    modernApplications: ["Religious philosophy", "Apologetics"],
    externalLinks: [
      {
        title: "Theism – Stanford Encyclopedia of Philosophy",
        url: "https://plato.stanford.edu/entries/theism/",
        type: "encyclopedia",
      },
      {
        title: "Theism – Internet Encyclopedia of Philosophy",
        url: "https://iep.utm.edu/theism/",
        type: "article",
      },
      {
        title: "Theism – Britannica",
        url: "https://www.britannica.com/topic/theism",
        type: "encyclopedia",
      },
    ],
  },
  {
    id: "inference-theories",
    name: "Inference Theories",
    description:
      "Indian philosophical theories that knowledge can arise from logical inference, opposed by Carvaka’s reliance on perception alone.",
    originSchool: "indian-philosophy",
    keyThinkers: ["nyaya-school"],
    relatedIdeas: ["pratyaksha", "materialism"],
    challenges: ["carvaka-empiricism"],
    modernApplications: ["Logic", "Epistemology"],
    externalLinks: [
      {
        title: "Indian Epistemology – Stanford Encyclopedia of Philosophy",
        url: "https://plato.stanford.edu/entries/epistemology-india/#Infe",
        type: "encyclopedia",
      },
      {
        title: "Nyaya Inference – Internet Encyclopedia of Philosophy",
        url: "https://iep.utm.edu/nyaya/#Inference",
        type: "article",
      },
      {
        title: "Inference in Indian Logic – Academic Paper",
        url: "https://www.jstor.org/stable/24663312",
        type: "academic paper",
      },
    ],
  },
  {
    id: "essentialism",
    name: "Essentialism",
    description:
      "The doctrine that entities have a set of essential properties necessary for their identity, challenged by Buddhist impermanence.",
    originSchool: "ancient-greek",
    keyThinkers: ["plato", "aristotle"],
    relatedIdeas: ["realism", "forms"],
    challenges: ["impermanence", "existentialism"],
    modernApplications: ["Metaphysics", "Education", "Biology"],
    externalLinks: [
      {
        title:
          "Essential vs. Accidental Properties – Stanford Encyclopedia of Philosophy",
        url: "https://plato.stanford.edu/entries/essential-accidental/",
        type: "encyclopedia",
      },
      {
        title: "Essentialism – Internet Encyclopedia of Philosophy",
        url: "https://iep.utm.edu/essentialism/",
        type: "article",
      },
      {
        title: "Essentialism – Britannica",
        url: "https://www.britannica.com/topic/essentialism",
        type: "encyclopedia",
      },
    ],
  },
  {
    id: "substance-metaphysics",
    name: "Substance Metaphysics",
    description:
      "The philosophical view that reality is fundamentally composed of substances with inherent essences, challenged by Buddhist dependent origination.",
    originSchool: "ancient-greek",
    keyThinkers: ["aristotle", "descartes"],
    relatedIdeas: ["essentialism", "realism"],
    challenges: ["dependent-origination", "process-philosophy"],
    modernApplications: ["Ontology", "Metaphysics"],
    externalLinks: [
      {
        title: "Substance – Stanford Encyclopedia of Philosophy",
        url: "https://plato.stanford.edu/entries/substance/",
        type: "encyclopedia",
      },
      {
        title: "Substance in Metaphysics – Internet Encyclopedia of Philosophy",
        url: "https://iep.utm.edu/substance/",
        type: "article",
      },
      {
        title: "Substance – Britannica",
        url: "https://www.britannica.com/topic/substance-metaphysics",
        type: "encyclopedia",
      },
    ],
  },
  {
    id: "fatalism",
    name: "Fatalism",
    description:
      "The belief that all events are predetermined and inevitable, opposed by karma as moral causation.",
    originSchool: "ancient",
    keyThinkers: ["stoics"],
    relatedIdeas: ["karma", "determinism"],
    challenges: ["free-will", "moral-responsibility"],
    modernApplications: ["Theology", "Philosophy of time"],
    externalLinks: [
      {
        title: "Fatalism – Stanford Encyclopedia of Philosophy",
        url: "https://plato.stanford.edu/entries/fatalism/",
        type: "encyclopedia",
      },
      {
        title: "Fatalism – Internet Encyclopedia of Philosophy",
        url: "https://iep.utm.edu/fatalism/",
        type: "article",
      },
      {
        title: "Fatalism – Britannica",
        url: "https://www.britannica.com/topic/fatalism",
        type: "encyclopedia",
      },
    ],
  },
  {
    id: "ascetic-extremes",
    name: "Ascetic Extremes",
    description:
      "The pursuit of extreme self-denial and austerity, rejected by the Buddha in favor of the Middle Way.",
    originSchool: "indian-philosophy",
    keyThinkers: ["buddha"],
    relatedIdeas: ["middle-way", "four-noble-truths"],
    challenges: ["hedonism", "materialism"],
    modernApplications: ["Spiritual practice", "Psychology of religion"],
    externalLinks: [
      {
        title: "Buddhist Ethics – Stanford Encyclopedia of Philosophy",
        url: "https://plato.stanford.edu/entries/buddhism-ethics/#Asceticism",
        type: "encyclopedia",
      },
      {
        title:
          "Asceticism in Indian Religions – Internet Encyclopedia of Philosophy",
        url: "https://iep.utm.edu/asceticism/",
        type: "article",
      },
      {
        title: "Asceticism – Britannica",
        url: "https://www.britannica.com/topic/asceticism",
        type: "encyclopedia",
      },
    ],
  },
  {
    id: "tyranny",
    name: "Tyranny",
    description:
      "A form of oppressive and absolute rule, opposed in classical and Indian political thought as the corruption of just authority.",
    originSchool: "political-philosophy",
    keyThinkers: ["plato", "aristotle", "chanakya"],
    relatedIdeas: ["rajadharma", "statecraft"],
    challenges: ["justice", "democracy"],
    modernApplications: ["Political science", "Governance studies"],
    externalLinks: [
      {
        title: "Tyranny – Stanford Encyclopedia of Philosophy",
        url: "https://plato.stanford.edu/entries/tyranny/",
        type: "encyclopedia",
      },
      {
        title: "Plato on Tyranny – Internet Encyclopedia of Philosophy",
        url: "https://iep.utm.edu/plato-politics/#Tyranny",
        type: "article",
      },
      {
        title: "Tyranny – Britannica",
        url: "https://www.britannica.com/topic/tyranny",
        type: "encyclopedia",
      },
    ],
  },
  {
    id: "utopianism",
    name: "Utopianism",
    description:
      "The pursuit of an ideal and perfect society, often criticized as impractical or authoritarian when contrasted with statecraft and realism.",
    originSchool: "political-philosophy",
    keyThinkers: ["more", "marx"],
    relatedIdeas: ["statecraft", "cosmopolitanism"],
    challenges: ["political-realism"],
    modernApplications: ["Social theory", "Political movements"],
    externalLinks: [
      {
        title: "Utopia and Utopianism – Stanford Encyclopedia of Philosophy",
        url: "https://plato.stanford.edu/entries/utopia/",
        type: "encyclopedia",
      },
      {
        title: "Utopianism – Internet Encyclopedia of Philosophy",
        url: "https://iep.utm.edu/utopianism/",
        type: "article",
      },
      {
        title: "Utopia – Britannica",
        url: "https://www.britannica.com/topic/utopia-philosophy",
        type: "encyclopedia",
      },
    ],
  },
  {
    id: "reductionism",
    name: "Reductionism",
    description:
      "The view that complex phenomena can be explained entirely by their simpler parts, criticized in philosophy of economics and social sciences.",
    originSchool: "modern-philosophy",
    keyThinkers: ["descartes", "hobbes"],
    relatedIdeas: ["materialism", "economics"],
    challenges: ["holism", "systems-theory"],
    modernApplications: ["Science", "Philosophy of mind"],
    externalLinks: [
      {
        title: "Reductionism – Stanford Encyclopedia of Philosophy",
        url: "https://plato.stanford.edu/entries/reductionism/",
        type: "encyclopedia",
      },
      {
        title: "Reductionism – Internet Encyclopedia of Philosophy",
        url: "https://iep.utm.edu/reductionism/",
        type: "article",
      },
      {
        title: "Reductionism – Britannica",
        url: "https://www.britannica.com/topic/reductionism",
        type: "encyclopedia",
      },
    ],
  },
  {
    id: "instrumentalism",
    name: "Instrumentalism",
    description:
      "The view that theories and ideas are merely useful tools for prediction or practice, not necessarily true descriptions of reality.",
    originSchool: "pragmatism",
    keyThinkers: ["dewey"],
    relatedIdeas: ["education", "pragmatism"],
    challenges: ["realism", "essentialism"],
    modernApplications: ["Science education", "Philosophy of science"],
    externalLinks: [
      {
        title: "Instrumentalism – Stanford Encyclopedia of Philosophy",
        url: "https://plato.stanford.edu/entries/scientific-instrumentalism/",
        type: "encyclopedia",
      },
      {
        title:
          "Instrumentalism in Science – Internet Encyclopedia of Philosophy",
        url: "https://iep.utm.edu/instrumentalism/",
        type: "article",
      },
      {
        title: "Instrumentalism – Britannica",
        url: "https://www.britannica.com/topic/instrumentalism",
        type: "encyclopedia",
      },
    ],
  },
  {
    id: "pelagianism",
    name: "Pelagianism",
    description:
      "The Christian doctrine denying original sin, holding that humans can achieve salvation through free will without divine grace.",
    originSchool: "christian-philosophy",
    keyThinkers: ["pelagius"],
    relatedIdeas: ["original-sin", "grace"],
    challenges: ["augustinianism"],
    modernApplications: ["Theology", "Ethics"],
    externalLinks: [
      {
        title: "Pelagianism – Stanford Encyclopedia of Philosophy",
        url: "https://plato.stanford.edu/entries/pelagianism/",
        type: "encyclopedia",
      },
      {
        title: "Pelagianism – Internet Encyclopedia of Philosophy",
        url: "https://iep.utm.edu/pelagianism/",
        type: "article",
      },
      {
        title: "Pelagianism – Britannica",
        url: "https://www.britannica.com/topic/Pelagianism",
        type: "encyclopedia",
      },
    ],
  },
  {
    id: "pacifism",
    name: "Pacifism",
    description:
      "The view that war and violence are always unjustifiable, contrasted with just war theory.",
    originSchool: "ethics",
    keyThinkers: ["tolstoy", "gandhi"],
    relatedIdeas: ["ahimsa", "just-war-theory"],
    challenges: ["military-ethics"],
    modernApplications: ["Peace studies", "International relations"],
    externalLinks: [
      {
        title: "Pacifism – Stanford Encyclopedia of Philosophy",
        url: "https://plato.stanford.edu/entries/pacifism/",
        type: "encyclopedia",
      },
      {
        title: "Pacifism – Internet Encyclopedia of Philosophy",
        url: "https://iep.utm.edu/pacifism/",
        type: "article",
      },
      {
        title: "Pacifism – Britannica",
        url: "https://www.britannica.com/topic/pacifism",
        type: "encyclopedia",
      },
    ],
  },
  {
    id: "fideism",
    name: "Fideism",
    description:
      "The view that religious belief depends on faith rather than reason, opposed to rational theology.",
    originSchool: "christian-philosophy",
    keyThinkers: ["tertullian", "kierkegaard"],
    relatedIdeas: ["faith-and-reason"],
    challenges: ["rational-theology"],
    modernApplications: ["Philosophy of religion", "Theology"],
    externalLinks: [
      {
        title: "Fideism – Stanford Encyclopedia of Philosophy",
        url: "https://plato.stanford.edu/entries/fideism/",
        type: "encyclopedia",
      },
      {
        title: "Fideism – Internet Encyclopedia of Philosophy",
        url: "https://iep.utm.edu/fideism/",
        type: "article",
      },
      {
        title: "Fideism – Britannica",
        url: "https://www.britannica.com/topic/fideism",
        type: "encyclopedia",
      },
    ],
  },
  {
    id: "legal-positivism",
    name: "Legal Positivism",
    description:
      "The theory that laws derive their validity from social facts and authority, not moral considerations.",
    originSchool: "modern-legal-philosophy",
    keyThinkers: ["austin", "hart", "kelsen"],
    relatedIdeas: ["natural-law", "statecraft"],
    challenges: ["natural-law-theory"],
    modernApplications: ["Jurisprudence", "Constitutional law"],
    externalLinks: [
      {
        title: "Legal Positivism – Stanford Encyclopedia of Philosophy",
        url: "https://plato.stanford.edu/entries/legal-positivism/",
        type: "encyclopedia",
      },
      {
        title: "Legal Positivism – Internet Encyclopedia of Philosophy",
        url: "https://iep.utm.edu/legalpositivism/",
        type: "article",
      },
      {
        title: "Legal Positivism – Britannica",
        url: "https://www.britannica.com/topic/legal-positivism",
        type: "encyclopedia",
      },
    ],
  },
  {
    id: "atheism",
    name: "Atheism",
    description:
      "The denial of the existence of God or gods, opposing classical theism and scholastic arguments for God’s existence.",
    originSchool: "modern-philosophy",
    keyThinkers: ["nietzsche", "hume", "dawkins"],
    relatedIdeas: ["theism", "secularism"],
    challenges: ["religion", "faith"],
    modernApplications: ["Secular ethics", "Philosophy of religion"],
    externalLinks: [
      {
        title: "Atheism – Stanford Encyclopedia of Philosophy",
        url: "https://plato.stanford.edu/entries/atheism-agnosticism/",
        type: "encyclopedia",
      },
      {
        title: "Atheism – Internet Encyclopedia of Philosophy",
        url: "https://iep.utm.edu/atheism/",
        type: "article",
      },
      {
        title: "Atheism – Britannica",
        url: "https://www.britannica.com/topic/atheism",
        type: "encyclopedia",
      },
    ],
  },
  {
    id: "rule-fetishism",
    name: "Rule Fetishism",
    description:
      "The rigid adherence to rules without considering context or practical wisdom, opposed by Aristotle’s concept of phronesis.",
    originSchool: "ethics",
    keyThinkers: ["aristotle"],
    relatedIdeas: ["practical-wisdom", "virtue-ethics"],
    challenges: ["contextual-judgment"],
    modernApplications: ["Leadership", "Applied ethics"],
    externalLinks: [
      {
        title:
          "Aristotle’s Practical Wisdom – Stanford Encyclopedia of Philosophy",
        url: "https://plato.stanford.edu/entries/aristotle-ethics/#Phronesis",
        type: "encyclopedia",
      },
      {
        title: "Virtue Ethics and Rules – Internet Encyclopedia of Philosophy",
        url: "https://iep.utm.edu/virtue-ethics/#Rules",
        type: "article",
      },
      {
        title: "Rule-Dependence in Ethics – Academic Paper",
        url: "https://www.jstor.org/stable/2254035",
        type: "academic paper",
      },
    ],
  },
  {
    id: "status-quo-defenses",
    name: "Status Quo Defenses",
    description:
      "Philosophical or political arguments that justify maintaining existing social, political, or economic arrangements, often challenged by reformist thinkers.",
    originSchool: "political-theory",
    keyThinkers: ["burke"],
    relatedIdeas: ["social-reform", "political-realism"],
    challenges: ["progressivism"],
    modernApplications: ["Political science", "Conservative theory"],
    externalLinks: [
      {
        title:
          "Conservatism and Tradition – Stanford Encyclopedia of Philosophy",
        url: "https://plato.stanford.edu/entries/conservatism/#StatQuo",
        type: "encyclopedia",
      },
      {
        title: "Status Quo Bias in Politics – Academic Paper",
        url: "https://www.jstor.org/stable/2709515",
        type: "academic paper",
      },
      {
        title: "Conservatism – Britannica",
        url: "https://www.britannica.com/topic/conservatism",
        type: "encyclopedia",
      },
    ],
  },
  {
    id: "individual-rights",
    name: "Individual Rights",
    description:
      "The moral and legal entitlements of individuals, often raised against utilitarian calculations of collective welfare.",
    originSchool: "modern-political-philosophy",
    keyThinkers: ["locke", "mill", "rawls"],
    relatedIdeas: ["justice", "utilitarianism"],
    challenges: ["collectivism"],
    modernApplications: ["Human rights law", "Political philosophy"],
    externalLinks: [
      {
        title: "Rights – Stanford Encyclopedia of Philosophy",
        url: "https://plato.stanford.edu/entries/rights/",
        type: "encyclopedia",
      },
      {
        title: "Human Rights – Internet Encyclopedia of Philosophy",
        url: "https://iep.utm.edu/human-rights/",
        type: "article",
      },
      {
        title: "Rights – Britannica",
        url: "https://www.britannica.com/topic/rights-legal",
        type: "encyclopedia",
      },
    ],
  },
  {
    id: "universal-truth",
    name: "Universal Truth",
    description:
      "The claim that certain truths hold independently of culture or perspective, contested by postmodern critiques of knowledge and power.",
    originSchool: "epistemology",
    keyThinkers: ["kant", "stoics"],
    relatedIdeas: ["universalism", "power-knowledge"],
    challenges: ["relativism", "constructivism"],
    modernApplications: ["Human rights", "Science"],
    externalLinks: [
      {
        title: "Truth – Stanford Encyclopedia of Philosophy",
        url: "https://plato.stanford.edu/entries/truth/",
        type: "encyclopedia",
      },
      {
        title: "Relativism and Truth – Internet Encyclopedia of Philosophy",
        url: "https://iep.utm.edu/truth-relativism/",
        type: "article",
      },
      {
        title: "Truth – Britannica",
        url: "https://www.britannica.com/topic/truth-philosophy",
        type: "encyclopedia",
      },
    ],
  },
  {
    id: "buddhist-non-self",
    name: "Buddhist Non-Self (Anatta) Challenge",
    description:
      "The Buddhist rejection of a permanent soul or self (Atman), challenging Vedantic identity of Atman and Brahman.",
    originSchool: "buddhism",
    keyThinkers: ["buddha"],
    relatedIdeas: ["non-self", "atman"],
    challenges: ["essentialism", "hindu-dualism"],
    modernApplications: ["Philosophy of mind", "Psychology of self"],
    externalLinks: [
      {
        title: "Anatta (No-Self) – Stanford Encyclopedia of Philosophy",
        url: "https://plato.stanford.edu/entries/no-self/",
        type: "encyclopedia",
      },
      {
        title: "Anatta – Internet Encyclopedia of Philosophy",
        url: "https://iep.utm.edu/anatta/",
        type: "article",
      },
      {
        title: "No-Self in Buddhism – Britannica",
        url: "https://www.britannica.com/topic/anatta",
        type: "encyclopedia",
      },
    ],
  },
  {
    id: "contextual-judgment",
    name: "Contextual Judgment",
    description:
      "The ethical practice of making decisions based on context and circumstances rather than rigid adherence to rules, aligned with Aristotle’s phronesis.",
    originSchool: "ethics",
    keyThinkers: ["aristotle"],
    relatedIdeas: ["practical-wisdom", "virtue-ethics"],
    challenges: ["rule-fetishism", "moral-absolutism"],
    modernApplications: ["Leadership", "Applied ethics", "Law"],
    externalLinks: [
      {
        title: "Aristotle’s Ethics – Stanford Encyclopedia of Philosophy",
        url: "https://plato.stanford.edu/entries/aristotle-ethics/",
        type: "encyclopedia",
      },
      {
        title:
          "Virtue Ethics and Contextual Judgment – Internet Encyclopedia of Philosophy",
        url: "https://iep.utm.edu/virtue-ethics/#Context",
        type: "article",
      },
      {
        title: "Practical Judgment in Ethics – Academic Paper",
        url: "https://www.jstor.org/stable/2253902",
        type: "academic paper",
      },
    ],
  },
];
