import { PhilosophicalPeriod, PhilosophicalSchool } from "../types/philosophy";

export const philosophyData: PhilosophicalPeriod[] = [
  {
    id: "ancient",
    name: "Ancient Philosophy",
    years: "6th century BCE - 6th century CE",
    description: "The foundation of Western and Eastern philosophical thought",
    schools: [
      {
        id: "vedanta",
        name: "Vedanta",
        period: "Ancient",
        years: "800 BCE onwards",
        region: "India",
        description: "A Hindu philosophical school based on the Upanishads",
        detailedDescription:
          "Vedanta explores metaphysics, self-realization, Brahman (ultimate reality), and Atman (self). Different schools include Advaita, Vishishtadvaita, and Dvaita.",
        keyIdeas: ["Brahman", "Atman", "Moksha"],
        majorThinkers: ["shankara", "ramanuja", "madhva"],
        influences: ["Upanishads", "Vedic tradition"],
        challenged: ["Materialism", "Buddhism", "Jainism"],
        developments: ["Metaphysics", "Non-dualism", "Theology"],
        legacy: "A cornerstone of Indian philosophy and spirituality",
        color: "#D97706",
        relatedSchools: ["jain-philosophy", "vaishnavism", "bhakti-philosophy"],
        keyTexts: ["Upanishads", "Brahma Sutras", "Bhagavad Gita"],
        externalLinks: [
          {
            title: "Vedanta – Wikipedia",
            url: "https://en.wikipedia.org/wiki/Vedanta",
            type: "article",
          },
          {
            title: "Vedanta Philosophy",
            url: "https://hinduvism.com/vedanta-philosophy-advaita-vishishtadvaita//",
            type: "article",
          },
          {
            title: "Vedanta in Hinduism – Britannica",
            url: "https://www.britannica.com/topic/Vedanta",
            type: "encyclopedia",
          },
        ],
      },
      {
        id: "jain-philosophy",
        name: "Jain Philosophy",
        period: "Ancient",
        years: "6th century BCE onwards",
        region: "India",
        description:
          "Philosophy of Jainism emphasizing non-violence and asceticism",
        detailedDescription:
          "Jain philosophy focuses on Ahimsa (non-violence), Anekantavada (non-absolutism), and Moksha through renunciation. It developed alongside Buddhism and Hinduism.",
        keyIdeas: ["Ahimsa", "Anekantavada", "Syadvada"],
        majorThinkers: ["mahavira", "kundakunda"],
        influences: ["Vedic religion", "Sramana traditions"],
        challenged: ["Vedic ritualism", "Materialist philosophies"],
        developments: ["Ethics", "Logic", "Ascetic practice"],
        legacy:
          "Influenced Indian ethics, vegetarianism, and religious pluralism",
        color: "#84CC16",
        relatedSchools: ["vedanta", "buddhism"],
        keyTexts: ["Tattvartha Sutra"],
        externalLinks: [
          {
            title: "Jain Philosophy – Stanford Encyclopedia of Philosophy",
            url: "https://plato.stanford.edu/entries/jaina-philosophy/",
            type: "encyclopedia",
          },
          {
            title:
              "Jain Philosophy Overview – Internet Encyclopedia of Philosophy",
            url: "https://iep.utm.edu/jain/",
            type: "article",
          },
          {
            title: "Jainism – Britannica",
            url: "https://www.britannica.com/topic/Jainism",
            type: "encyclopedia",
          },
        ],
      },
      {
        id: "presocratic",
        name: "Pre-Socratic Philosophy",
        period: "Ancient",
        years: "6th-5th century BCE",
        region: "Greece",
        description:
          "The first Western philosophers who sought natural explanations for phenomena",
        detailedDescription:
          "The Pre-Socratic philosophers were the first thinkers in the Western tradition to attempt rational explanations of the world around them, moving away from purely mythological accounts. They laid the groundwork for all subsequent Western philosophy and science by asking fundamental questions about the nature of reality, change, and knowledge.",
        keyIdeas: ["Natural philosophy", "Logos", "Atomism", "Elements theory"],
        majorThinkers: ["thales", "heraclitus", "democritus", "parmenides"],
        influences: ["Mythology", "Ancient Near Eastern thought"],
        challenged: [
          "Mythological explanations of nature",
          "Traditional religious beliefs",
        ],
        developments: [
          "Scientific method",
          "Rational inquiry",
          "Materialist philosophy",
        ],
        legacy:
          "Established the foundation for all subsequent Western philosophy and science",
        color: "#8B5CF6",
        relatedSchools: ["classical", "hellenistic"],
        keyTexts: [
          "Fragments of Heraclitus",
          "Parmenides' Poem",
          "Democritus' Atomism",
        ],
        externalLinks: [
          {
            title:
              "Presocratic Philosophy – Stanford Encyclopedia of Philosophy",
            url: "https://plato.stanford.edu/entries/presocratics/",
            type: "encyclopedia",
          },
          {
            title: "The Presocratics – Internet Encyclopedia of Philosophy",
            url: "https://iep.utm.edu/presocra/",
            type: "article",
          },
          {
            title: "Early Greek Philosophy – Britannica",
            url: "https://www.britannica.com/topic/Western-philosophy/Presocratics",
            type: "encyclopedia",
          },
        ],
      },
      {
        id: "carvaka",
        name: "Cārvāka Philosophy",
        period: "Ancient",
        years: "6th century BCE onwards",
        region: "India",
        description:
          "An ancient Indian materialist and skeptical school of thought",
        detailedDescription:
          "Cārvāka (also called Lokāyata) was a materialist and hedonist school in ancient India. It rejected the authority of the Vedas, denied the existence of an afterlife, and emphasized direct perception (pratyakṣa) as the only valid source of knowledge. It was opposed to ritualism, asceticism, and metaphysical speculation.",
        keyIdeas: [
          "Materialism",
          "Hedonism",
          "Skepticism",
          "pratyaksha",
        ],
        majorThinkers: ["brihaspati"],
        influences: ["Sramana traditions", "Indian rationalist thought"],
        challenged: ["Vedic authority", "Vedanta", "Buddhism", "Jainism"],
        developments: ["Epistemology of perception", "Critique of religion"],
        legacy:
          "Provided the earliest form of materialism in India and influenced later rationalist traditions",
        color: "#EA580C",
        relatedSchools: ["vedanta", "jain-philosophy", "buddhism"],
        keyTexts: ["Fragments preserved in later critiques"],
        externalLinks: [
          {
            title: "Cārvāka/Lokāyata – Stanford Encyclopedia of Philosophy",
            url: "https://plato.stanford.edu/entries/indian-materialism/",
            type: "encyclopedia",
          },
          {
            title:
              "Carvaka/Lokayata Philosophy – Internet Encyclopedia of Philosophy",
            url: "https://iep.utm.edu/carvaka/",
            type: "article",
          },
          {
            title: "Carvaka – Britannica",
            url: "https://www.britannica.com/topic/Carvaka",
            type: "encyclopedia",
          },
        ],
      },
      {
        id: "buddhism",
        name: "Buddhist Philosophy",
        period: "Ancient",
        years: "5th century BCE onwards",
        region: "India",
        description: "A heterodox Indian philosophy founded by the Buddha",
        detailedDescription:
          "Buddhist philosophy rejects Vedic authority, emphasizing the Four Noble Truths and the Eightfold Path. It develops doctrines of impermanence, non-self, and dependent origination.",
        keyIdeas: [
          "Impermanence (anicca)",
          "Non-self (anatta)",
          "Dependent origination",
        ],
        majorThinkers: ["buddha", "nāgārjuna", "vasubandhu"],
        influences: ["Sramana traditions"],
        challenged: ["Vedic orthodoxy", "Atman doctrine"],
        developments: ["Epistemology", "Logic", "Madhyamaka and Yogacara"],
        legacy: "Spread across Asia and shaped global philosophy and religion",
        color: "#C026D3",
        relatedSchools: ["jain-philosophy", "carvaka"],
        keyTexts: ["Dhammapada", "Mūlamadhyamakakārikā", "Abhidharmakosha"],
        externalLinks: [
          {
            title: "Buddhist Philosophy – Wikipedia",
            url: "https://en.wikipedia.org/wiki/Buddhist_philosophy",
            type: "encyclopedia",
          },
          {
            title: "Buddhist Philosophy - Philosophies of Life",
            url: "https://philosophiesoflife.org/buddhist-philosophy/",
            type: "article",
          },
          {
            title: "Buddhism – Britannica",
            url: "https://www.britannica.com/topic/Buddhism",
            type: "encyclopedia",
          },
        ],
      },
      {
        id: "eastern-ancient",
        name: "Ancient Eastern Philosophy",
        period: "Ancient",
        years: "6th century BCE - 6th century CE",
        region: "Asia",
        relatedSchools: ['buddhism','vedanta','samkhya'],
        description:
          "Diverse philosophical traditions from India, China, and surrounding regions",
        detailedDescription:
          "Ancient Eastern philosophy encompasses rich traditions from India, China, and other Asian cultures. These philosophies often integrated spiritual practice with philosophical inquiry, emphasizing practical wisdom for liberation from suffering and harmonious living.",
        keyIdeas: [
          "Dharma",
          "Karma",
          "The Way (Dao)",
          "Non-dualism",
          "Middle Way",
        ],
        majorThinkers: ["buddha", "confucius", "laozi", "nagarjuna"],
        influences: [
          "Vedic traditions",
          "Social upheaval",
          "Religious practices",
        ],
        challenged: [
          "Caste system",
          "Ritual orthodoxy",
          "Excessive materialism",
        ],
        developments: [
          "Meditation practices",
          "Ethical social systems",
          "Non-violent philosophy",
        ],
        legacy:
          "Continues to influence billions and modern mindfulness practices",
        color: "#F59E0B",
        keyTexts: ["Dhammapada", "Analects", "Tao Te Ching", "Lotus Sutra"],
        externalLinks: [
          {
            title: "Eastern Philosophy – Internet Encyclopedia of Philosophy",
            url: "https://iep.utm.edu/eastern-philosophy/",
            type: "encyclopedia",
          },
          {
            title: "Introduction to Eastern Philosophy – Open Yale Courses",
            url: "https://oyc.yale.edu/religious-studies/rlst-145",
            type: "course",
          },
          {
            title: "Taoism Explained – BBC Documentary",
            url: "https://www.bbc.co.uk/programmes/p004n1ff",
            type: "video",
          },
        ],
      },
      {
        id: "ancient-indian-political-thought",
        name: "Ancient Indian Political Thought",
        period: "Ancient",
        years: "4th century BCE onwards",
        region: "India",
        description: "Indian traditions of statecraft and political theory",
        detailedDescription:
          "Philosophy of politics and governance in ancient India, particularly through texts like Arthashastra and Dharmaśāstra, focusing on power, justice, and order.",
        keyIdeas: ["Rajadharma", "Arthashastra", "Dharma"],
        majorThinkers: ["chanakya", "manu"],
        influences: ["Vedic tradition", "Mahabharata"],
        challenged: ["Anarchy", "Unjust rule"],
        developments: ["Political theory", "Law codes", "Statecraft"],
        legacy: "Contributed to global political philosophy and governance",
        color: "#0EA5E9",
        relatedSchools: ["vedanta", "modern-indian-philosophy"],
        keyTexts: ["Arthashastra", "Manusmriti"],
        externalLinks: [
          {
            title:
              "Kautilya’s Arthashastra – Stanford Encyclopedia of Philosophy",
            url: "https://plato.stanford.edu/entries/political-thought-india/",
            type: "encyclopedia",
          },
          {
            title:
              "Ancient Indian Political Philosophy – Internet Encyclopedia of Philosophy",
            url: "https://iep.utm.edu/ancient-indian-politics/",
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
        id: "classical",
        name: "Classical Philosophy",
        period: "Ancient",
        years: "5th-3rd century BCE",
        region: "Greece",
        description:
          "The golden age of Greek philosophy with Socrates, Plato, and Aristotle",
        detailedDescription:
          "Classical Greek philosophy represents the pinnacle of ancient philosophical achievement. This period saw the development of systematic approaches to ethics, politics, metaphysics, and epistemology that continue to influence Western thought today. The three great figures - Socrates, Plato, and Aristotle - each built upon their predecessors while developing distinctive philosophical systems.",
        keyIdeas: [
          "Virtue ethics",
          "Theory of Forms",
          "Logic",
          "Political philosophy",
        ],
        majorThinkers: ["socrates", "plato", "aristotle"],
        influences: ["Pre-Socratic philosophy", "Sophists"],
        challenged: ["Sophistry", "Moral relativism", "Unreflective life"],
        developments: [
          "Systematic logic",
          "Ethical theory",
          "Political science",
          "Metaphysics",
        ],
        legacy:
          "Established the fundamental questions and methods of Western philosophy",
        color: "#3B82F6",
        relatedSchools: ["presocratic", "hellenistic"],
        keyTexts: ["Republic", "Nicomachean Ethics", "Metaphysics", "Apology"],
        externalLinks: [
          {
            title: "Classical Philosophy Guide",
            url: "#",
            type: "encyclopedia",
          },
          {
            title: "Ancient Greek Philosophy Course",
            url: "#",
            type: "course",
          },
          { title: "Plato and Aristotle Compared", url: "#", type: "video" },
        ],
      },
      {
        id: "hellenistic",
        name: "Hellenistic Philosophy",
        period: "Ancient",
        years: "3rd century BCE - 3rd century CE",
        region: "Mediterranean",
        description:
          "Practical philosophies focused on achieving happiness and tranquility",
        detailedDescription:
          "Hellenistic philosophy emerged in the wake of Alexander the Great's conquests and the decline of the Greek city-states. These schools focused on practical wisdom for living well in an uncertain world, emphasizing personal tranquility and ethical guidance over abstract metaphysical speculation.",
        keyIdeas: [
          "Ataraxia",
          "Practical wisdom",
          "Cosmopolitanism",
          "Physics and ethics",
        ],
        majorThinkers: ["epicurus", "zeno-of-citium", "sextus-empiricus"],
        influences: ["Classical philosophy", "Political instability"],
        challenged: [
          "Academic dogmatism",
          "Political engagement over personal peace",
        ],
        developments: [
          "Skeptical method",
          "Therapeutic philosophy",
          "Cosmopolitan ethics",
        ],
        legacy:
          "Influenced later therapeutic approaches to philosophy and psychology",
        color: "#10B981",
        relatedSchools: ["classical", "christian-philosophy"],
        keyTexts: [
          "Letter to Menoeceus",
          "Meditations of Marcus Aurelius",
          "Outlines of Pyrrhonism",
        ],
        externalLinks: [
          {
            title: "Hellenistic Philosophy Overview",
            url: "#",
            type: "encyclopedia",
          },
          { title: "Stoicism and Modern Life", url: "#", type: "article" },
          { title: "Ancient Wisdom for Modern Times", url: "#", type: "video" },
        ],
      },
      {
        id: "nyaya",
        name: "Nyāya Philosophy",
        period: "Ancient",
        years: "2nd century BCE onwards",
        region: "India",
        description: "A school of logic and epistemology in Hindu philosophy",
        detailedDescription:
          "Nyāya emphasizes logic, epistemology, and methods of reasoning. It identifies four valid sources of knowledge: perception, inference, comparison, and testimony. Nyāya contributed significantly to Indian debates on metaphysics and theology.",
        keyIdeas: ["Logic", "Epistemology", "Inference (anumāna)"],
        majorThinkers: ["gautama", "uddyoṭakara", "gaṅgeśa"],
        influences: ["Vedic tradition"],
        challenged: ["Buddhism", "Carvaka"],
        developments: ["Indian logic", "Epistemology"],
        legacy: "Formed the foundation for Indian logic and debate traditions",
        color: "#0F766E",
        relatedSchools: ["vaisheshika", "vedanta"],
        keyTexts: ["Nyāya Sūtras"],
        externalLinks: [
          {
            title: "Nyāya Philosophy – Stanford Encyclopedia of Philosophy",
            url: "https://plato.stanford.edu/entries/nyaya/",
            type: "encyclopedia",
          },
          {
            title: "Nyāya School – Internet Encyclopedia of Philosophy",
            url: "https://iep.utm.edu/nyaya/",
            type: "article",
          },
          {
            title: "Nyaya – Britannica",
            url: "https://www.britannica.com/topic/Nyaya",
            type: "encyclopedia",
          },
        ],
      },
      {
        id: "vaisheshika",
        name: "Vaiśeṣika Philosophy",
        period: "Ancient",
        years: "2nd century BCE onwards",
        region: "India",
        description: "An atomistic school of Indian philosophy",
        detailedDescription:
          "Vaiśeṣika explains the physical world through atomism and categorization. It identifies substances, qualities, and motions as categories of reality. It often worked in tandem with Nyāya.",
        keyIdeas: ["Atomism", "Categories (padārthas)", "Metaphysics"],
        majorThinkers: ["kanada"],
        influences: ["Nyāya", "Vedic tradition"],
        challenged: ["Buddhism", "Vedanta"],
        developments: ["Metaphysics of atoms", "Categorical analysis"],
        legacy: "Influenced Indian physics, metaphysics, and logic",
        color: "#6D28D9",
        relatedSchools: ["nyaya"],
        keyTexts: ["Vaiśeṣika Sūtra"],
        externalLinks: [
          {
            title: "Vaiśeṣika – Stanford Encyclopedia of Philosophy",
            url: "https://plato.stanford.edu/entries/vaisheshika/",
            type: "encyclopedia",
          },
          {
            title: "Vaiśeṣika School – Internet Encyclopedia of Philosophy",
            url: "https://iep.utm.edu/vaisheshika/",
            type: "article",
          },
          {
            title: "Vaisheshika – Britannica",
            url: "https://www.britannica.com/topic/Vaisheshika",
            type: "encyclopedia",
          },
        ],
      },
      {
        id: "samkhya",
        name: "Sāṃkhya Philosophy",
        period: "Ancient",
        years: "6th century BCE onwards",
        region: "India",
        description:
          "A dualist school distinguishing between consciousness and matter",
        detailedDescription:
          "Sāṃkhya is one of the oldest systematic schools of Indian philosophy. It posits two ultimate realities: Purusha (consciousness) and Prakriti (matter). Its framework influenced Yoga and Vedānta.",
        keyIdeas: [
          "Dualism",
          "Purusha-Prakriti distinction",
          "Evolution of cosmos",
        ],
        majorThinkers: ["kapila", "ishvarakrishna"],
        influences: ["Upanishads"],
        challenged: ["Vedanta monism", "Carvaka materialism"],
        developments: ["Metaphysical dualism", "Cosmology"],
        legacy: "Influenced Yoga, Buddhism, and Vedānta metaphysics",
        color: "#B45309",
        relatedSchools: ["yoga", "vedanta"],
        keyTexts: ["Sāṃkhya Kārikā"],
        externalLinks: [
          {
            title: "Sāṃkhya Philosophy – Stanford Encyclopedia of Philosophy",
            url: "https://plato.stanford.edu/entries/samkhya/",
            type: "encyclopedia",
          },
          {
            title: "Sāṃkhya School – Internet Encyclopedia of Philosophy",
            url: "https://iep.utm.edu/samkhya/",
            type: "article",
          },
          {
            title: "Samkhya – Britannica",
            url: "https://www.britannica.com/topic/Samkhya",
            type: "encyclopedia",
          },
        ],
      },
      {
        id: "yoga",
        name: "Yoga Philosophy",
        period: "Ancient",
        years: "2nd century BCE onwards",
        region: "India",
        description: "A practical and spiritual system of self-realization",
        detailedDescription:
          "Yoga is closely related to Sāṃkhya but emphasizes practice. Codified by Patañjali, it prescribes an eightfold path to liberation through meditation, ethics, and concentration.",
        keyIdeas: [
          "Eightfold path (Ashtanga Yoga)",
          "Meditation",
          "Liberation",
        ],
        majorThinkers: ["patanjali"],
        influences: ["Sāṃkhya"],
        challenged: ["Materialism"],
        developments: ["Meditative psychology", "Ethical practice"],
        legacy: "Yoga became a global spiritual and physical practice",
        color: "#1E40AF",
        relatedSchools: ["samkhya", "vedanta"],
        keyTexts: ["Yoga Sūtras of Patañjali"],
        externalLinks: [
          {
            title: "Yoga Philosophy – Stanford Encyclopedia of Philosophy",
            url: "https://plato.stanford.edu/entries/yoga/",
            type: "encyclopedia",
          },
          {
            title: "Yoga – Internet Encyclopedia of Philosophy",
            url: "https://iep.utm.edu/yoga-philosophy/",
            type: "article",
          },
          {
            title: "Yoga – Britannica",
            url: "https://www.britannica.com/topic/Yoga-philosophy",
            type: "encyclopedia",
          },
        ],
      },
      {
        id: "ajivika",
        name: "Ājīvika Philosophy",
        period: "Ancient",
        years: "5th century BCE – 14th century CE",
        region: "India",
        description:
          "An ascetic, heterodox school emphasizing absolute determinism",
        detailedDescription:
          "The Ājīvikas were a śramaṇa movement contemporaneous with Buddhism and Jainism. They upheld a strict doctrine of niyati (fate), teaching that all events are predetermined and beyond human control. They rejected the moral efficacy of karma as taught by Buddhists, Jains, and Hindus. Though their texts are lost, accounts survive through Buddhist and Jain sources.",
        keyIdeas: ["Determinism", "Niyati (fate)", "Asceticism"],
        majorThinkers: ["makkhali gosala"],
        influences: ["Śramaṇa traditions"],
        challenged: ["Buddhism", "Jainism", "Hindu orthodoxy"],
        developments: ["Fatalism in Indian thought"],
        legacy:
          "Eventually declined but influenced Indian debates on free will, determinism, and karma",
        color: "#9333EA",
        relatedSchools: ["buddhism", "jain-philosophy", "carvaka"],
        keyTexts: [
          "No surviving primary texts; references in Buddhist and Jain canons",
        ],
        externalLinks: [
          {
            title: "Ājīvika – Britannica",
            url: "https://www.britannica.com/topic/Ajivika",
            type: "encyclopedia",
          },
          {
            title: "Ajivika Philosophy – Oxford Reference",
            url: "https://www.oxfordreference.com/display/10.1093/oi/authority.20110803095443846",
            type: "encyclopedia",
          },
          {
            title: "Ajivikas – Ancient Indian Philosophy Resource",
            url: "https://www.worldhistory.org/Ajivika/",
            type: "article",
          },
        ],
      },
      {
        id: "mimamsa",
        name: "Mīmāṃsā Philosophy",
        period: "Ancient",
        years: "3rd century BCE onwards",
        region: "India",
        description:
          "A school focused on ritual and interpretation of the Vedas",
        detailedDescription:
          "Mīmāṃsā emphasizes dharma and Vedic ritual as central to life. It provides a systematic method for interpreting Vedic texts and is foundational to Hindu law and ritual practice.",
        keyIdeas: ["Dharma", "Vedic authority", "Hermeneutics"],
        majorThinkers: ["jaimini", "kumārila bhaṭṭa"],
        influences: ["Vedic ritualism"],
        challenged: ["Buddhism", "Carvaka"],
        developments: ["Hermeneutics", "Philosophy of language"],
        legacy: "Shaped Hindu ritual practice and law",
        color: "#065F46",
        relatedSchools: ["vedanta"],
        keyTexts: ["Mīmāṃsā Sūtras"],
        externalLinks: [
          {
            title: "Mīmāṃsā – Stanford Encyclopedia of Philosophy",
            url: "https://plato.stanford.edu/entries/mimamsa/",
            type: "encyclopedia",
          },
          {
            title: "Mīmāṃsā – Internet Encyclopedia of Philosophy",
            url: "https://iep.utm.edu/mimamsa/",
            type: "article",
          },
          {
            title: "Mimamsa – Britannica",
            url: "https://www.britannica.com/topic/Mimamsa",
            type: "encyclopedia",
          },
        ],
      },
      {
        id: "african-philosophy",
        name: "African Philosophy",
        period: "Ancient",
        years: "Ancient to modern",
        region: "Africa",
        description:
          "Philosophy rooted in African traditions, oral narratives, and cultural worldviews",
        detailedDescription:
          "African philosophy involves indigenous systems of thought, ethics, metaphysics, and communal worldviews expressed through oral traditions, proverbs, myths, and later modern academic philosophy.",
        keyIdeas: ["Ubuntu", "Communalism", "Ethics of harmony"],
        majorThinkers: ["ptahhotep", "augustine", "kwame nkrumah"],
        influences: ["Oral traditions", "Religion", "Colonial encounters"],
        challenged: ["Eurocentrism", "Colonial domination"],
        developments: ["Ethics", "Political thought", "Hermeneutics"],
        legacy:
          "Contributed to postcolonial identity, ethics, and global philosophy",
        color: "#EF4444",
        relatedSchools: ["indigenous-philosophy", "modern-philosophy"],
        keyTexts: ["Ptahhotep’s Maxims", "Augustine’s Confessions"],
        externalLinks: [
          {
            title: "African Philosophy – Stanford Encyclopedia of Philosophy",
            url: "https://plato.stanford.edu/entries/african-philosophy/",
            type: "encyclopedia",
          },
          {
            title: "African Philosophy – Internet Encyclopedia of Philosophy",
            url: "https://iep.utm.edu/african-philosophy/",
            type: "article",
          },
          {
            title: "African Philosophy – Britannica",
            url: "https://www.britannica.com/topic/African-philosophy",
            type: "encyclopedia",
          },
        ],
      },
      {
        id: "indigenous-philosophy",
        name: "Indigenous Philosophy",
        period: "Ancient",
        years: "Timeless",
        region: "Global Indigenous Cultures",
        description:
          "Philosophical systems rooted in indigenous traditions and worldviews",
        detailedDescription:
          "Indigenous philosophy emphasizes interconnectedness of all beings, environmental stewardship, oral wisdom, myth, and rituals as vehicles for philosophy.",
        keyIdeas: [
          "Harmony with nature",
          "Spiritual ecology",
          "Community wisdom",
        ],
        majorThinkers: [],
        influences: ["Myth", "Ritual", "Land-based traditions"],
        challenged: ["Colonialism", "Western rationalism"],
        developments: ["Ethics of sustainability", "Spiritual metaphysics"],
        legacy: "Informs ecological ethics and cultural revitalization",
        color: "#6366F1",
        relatedSchools: ["african-philosophy", "eastern-ancient"],
        keyTexts: ["Oral traditions", "Sacred stories"],
        externalLinks: [
          {
            title:
              "Indigenous Philosophy – Internet Encyclopedia of Philosophy",
            url: "https://iep.utm.edu/indigenous-philosophy/",
            type: "encyclopedia",
          },
          {
            title:
              "Indigenous Knowledge Systems – Stanford Encyclopedia of Philosophy",
            url: "https://plato.stanford.edu/entries/indigenous-knowledge/",
            type: "encyclopedia",
          },
          {
            title: "Indigenous Philosophy – Britannica",
            url: "https://www.britannica.com/topic/Indigenous-religion",
            type: "encyclopedia",
          },
        ],
      },

      {
        id: "hindu-philosophy",
        name: "Hindu Philosophy",
        period: "Ancient to Modern",
        years: "1500 BCE onwards",
        region: "India",
        description:
          "The diverse schools of philosophy rooted in the Vedic tradition and Hindu scriptures.",
        detailedDescription:
          "Hindu philosophy encompasses six orthodox darśanas (Nyāya, Vaiśeṣika, Sāṃkhya, Yoga, Mīmāṃsā, Vedānta) as well as devotional and non-dualist traditions. It explores metaphysics, epistemology, ethics, and liberation (moksha), integrating spiritual practice with philosophy.",
        keyIdeas: ["Brahman", "Atman", "Moksha", "Dharma"],
        majorThinkers: ["shankara", "ramanuja", "madhva"],
        influences: ["Vedic texts", "Upanishads"],
        challenged: ["Carvaka materialism", "Buddhism", "Jainism"],
        developments: [
          "Vedanta schools",
          "Bhakti philosophy",
          "Yoga tradition",
        ],
        legacy:
          "Provided one of the oldest and most influential philosophical traditions in the world.",
        color: "#D97706",
        relatedSchools: ["vedanta", "samkhya", "yoga", "bhakti-philosophy"],
        keyTexts: ["Upanishads", "Bhagavad Gita", "Brahma Sutras"],
        externalLinks: [
          {
            title: "Hindu Philosophy – Stanford Encyclopedia of Philosophy",
            url: "https://plato.stanford.edu/entries/hindu-philosophy/",
            type: "encyclopedia",
          },
          {
            title: "Hindu Philosophy – Internet Encyclopedia of Philosophy",
            url: "https://iep.utm.edu/hindu-philosophy/",
            type: "article",
          },
          {
            title: "Indian Philosophy – Britannica",
            url: "https://www.britannica.com/topic/Indian-philosophy",
            type: "encyclopedia",
          },
        ],
      },
      {
        id: "indian-philosophy",
        name: "Indian Philosophy",
        period: "Ancient to Modern",
        years: "1500 BCE onwards",
        region: "India",
        description:
          "A broad category covering orthodox and heterodox schools of Indian thought.",
        detailedDescription:
          "Indian philosophy includes both orthodox (āstika) schools like Nyāya, Sāṃkhya, and Vedānta, and heterodox (nāstika) schools such as Buddhism, Jainism, and Cārvāka. It is characterized by deep engagement with metaphysics, epistemology, ethics, and liberation.",
        keyIdeas: ["Non-dualism", "Karma", "Rebirth", "Liberation"],
        majorThinkers: ["adi-shankara", "nagarjuna", "chanakya"],
        influences: ["Vedas", "Upanishads", "Śramaṇa traditions"],
        challenged: ["Materialism", "Skepticism"],
        developments: ["Metaphysics of self", "Logic", "Yoga practice"],
        legacy:
          "Continues to influence philosophy globally, especially in metaphysics and spirituality.",
        color: "#F59E0B",
        relatedSchools: ["hindu-philosophy", "buddhism", "jain-philosophy"],
        keyTexts: ["Upanishads", "Bhagavad Gita", "Yoga Sutras"],
        externalLinks: [
          {
            title: "Indian Philosophy – Stanford Encyclopedia of Philosophy",
            url: "https://plato.stanford.edu/entries/indian-philosophy/",
            type: "encyclopedia",
          },
          {
            title: "Indian Philosophy – Internet Encyclopedia of Philosophy",
            url: "https://iep.utm.edu/indian-philosophy/",
            type: "article",
          },
          {
            title: "Indian Philosophy – Britannica",
            url: "https://www.britannica.com/topic/Indian-philosophy",
            type: "encyclopedia",
          },
        ],
      },
    ],
  },
  {
    id: "medieval",
    name: "Medieval Philosophy",
    years: "4th - 14th century CE",
    description: "The synthesis of religious faith and philosophical reason",
    schools: [
      {
        id: "vaishnavism",
        name: "Vaishnavism",
        period: "Ancient",
        years: "1st millennium BCE onwards",
        region: "India",
        description: "A Hindu tradition centered on devotion to Vishnu",
        detailedDescription:
          "Vaishnavism emphasizes bhakti (devotion) to Vishnu and his avatars such as Krishna and Rama. It integrates theology, metaphysics, and devotional practice.",
        keyIdeas: ["Bhakti", "Avatar doctrine", "Moksha"],
        majorThinkers: ["ramanuja", "chaitanya", "madhva"],
        influences: ["Vedic tradition", "Upanishads"],
        challenged: ["Ritualism", "Caste dominance"],
        developments: ["Devotional movements", "Temple worship", "Theology"],
        legacy: "Major Hindu religious and philosophical tradition",
        color: "#F43F5E",
        relatedSchools: ["bhakti-philosophy", "vedanta"],
        keyTexts: ["Bhagavad Gita", "Bhagavata Purana"],
        externalLinks: [
          {
            title: "Vaishnavism – Britannica",
            url: "https://www.britannica.com/topic/Vaishnavism",
            type: "encyclopedia",
          },
          {
            title: "Vaishnavism – Oxford Reference",
            url: "https://www.oxfordreference.com/display/10.1093/oi/authority.20110803115001502",
            type: "encyclopedia",
          },
          {
            title: "Bhakti & Vaishnavism – Harvard Divinity School Resource",
            url: "https://rlp.hds.harvard.edu/religions/hinduism/bhakti",
            type: "article",
          },
        ],
      },
      {
        id: "bhakti-philosophy",
        name: "Bhakti Philosophy",
        period: "Ancient",
        years: "1st millennium CE onwards",
        region: "India",
        description: "Philosophy of devotion in Hinduism",
        detailedDescription:
          "Bhakti philosophy emphasizes love and devotion to a personal deity as the path to liberation, transcending ritualism and caste hierarchies.",
        keyIdeas: ["Devotion", "Equality before God", "Love as liberation"],
        majorThinkers: ["kabir", "mirabai", "tulsidas"],
        influences: ["Vaishnavism", "Shaivism", "Sufism"],
        challenged: ["Ritualism", "Caste hierarchy"],
        developments: ["Devotional poetry", "Bhakti movements"],
        legacy: "Shaped Indian culture, literature, and spirituality",
        color: "#3B82F6",
        relatedSchools: ["vaishnavism", "vedanta"],
        keyTexts: ["Bhakti poems", "Bhagavata Purana"],
        externalLinks: [
          {
            title: "Bhakti Movement – Britannica",
            url: "https://www.britannica.com/topic/Bhakti",
            type: "encyclopedia",
          },
          {
            title: "Bhakti Philosophy – Internet Encyclopedia of Philosophy",
            url: "https://iep.utm.edu/bhakti/",
            type: "article",
          },
          {
            title: "Bhakti Tradition – Harvard Divinity School Resource",
            url: "https://rlp.hds.harvard.edu/religions/hinduism/bhakti",
            type: "article",
          },
        ],
      },
      {
        id: "christian-philosophy",
        name: "Christian Philosophy",
        period: "Medieval",
        years: "4th-14th century CE",
        region: "Europe, North Africa",
        description:
          "Integration of Christian theology with Greek philosophical methods",
        detailedDescription:
          "Christian philosophy emerged as early Christian thinkers sought to reconcile their faith with the sophisticated philosophical traditions of Greece and Rome. This synthesis created new approaches to questions of existence, knowledge, and morality within a theistic framework.",
        keyIdeas: [
          "Faith and reason",
          "Divine illumination",
          "Natural theology",
          "Scholasticism",
        ],
        majorThinkers: ["augustine", "aquinas", "anselm", "duns-scotus"],
        influences: ["Platonism", "Aristotelianism", "Christian doctrine"],
        challenged: [
          "Pagan philosophy",
          "Pure rationalism",
          "Heretical doctrines",
        ],
        developments: [
          "Scholastic method",
          "Natural law theory",
          "Proofs for God's existence",
        ],
        legacy:
          "Shaped Western intellectual tradition and university education",
        color: "#DC2626",
        relatedSchools: ["islamic-philosophy", "jewish-philosophy"],
        keyTexts: [
          "Confessions",
          "Summa Theologica",
          "City of God",
          "Proslogion",
        ],
        externalLinks: [
          {
            title:
              "Medieval Christian Philosophy – Stanford Encyclopedia of Philosophy",
            url: "https://plato.stanford.edu/entries/christian-philosophy/",
            type: "encyclopedia",
          },
          {
            title:
              "Aquinas and Aristotle – Internet Encyclopedia of Philosophy",
            url: "https://iep.utm.edu/thomas-aquinas-and-aristotle/",
            type: "article",
          },
          {
            title: "Scholastic Method Explained – YouTube Lecture",
            url: "https://www.youtube.com/watch?v=Se3vZfRUZ3M",
            type: "video",
          },
        ],
      },
      {
        id: "scholasticism",
        name: "Scholasticism",
        period: "Medieval",
        years: "12th-17th century",
        region: "Europe",
        description:
          "A method of philosophy and theology based on dialectical reasoning",
        detailedDescription:
          "Scholasticism sought to reconcile faith and reason through logical analysis of theological and philosophical problems, heavily influenced by Aristotle.",
        keyIdeas: ["Faith and reason", "Dialectical method", "Universals"],
        majorThinkers: ["anselm", "aquinas", "duns scotus"],
        influences: ["Aristotle", "Christian theology"],
        challenged: ["Mysticism", "Islamic philosophy"],
        developments: ["Systematic theology", "Logic", "Ethics"],
        legacy: "Created the intellectual framework of medieval universities",
        color: "#2563EB",
        relatedSchools: ["christian-philosophy"],
        keyTexts: ["Summa Theologica", "Cur Deus Homo"],
        externalLinks: [
          {
            title: "Scholasticism – Stanford Encyclopedia of Philosophy",
            url: "https://plato.stanford.edu/entries/scholasticism/",
            type: "encyclopedia",
          },
        ],
      },
      {
        id: "islamic-philosophy",
        name: "Islamic Philosophy",
        period: "Medieval",
        years: "8th-12th century CE",
        region: "Middle East, Spain, Central Asia",
        description:
          "Preservation and advancement of Greek philosophy within Islamic framework",
        detailedDescription:
          "Islamic philosophy played a crucial role in preserving and developing Greek philosophical texts during the European Dark Ages. Islamic philosophers made significant original contributions while working within an Islamic theological framework.",
        keyIdeas: [
          "Unity of truth",
          "Rational theology",
          "Aristotelian metaphysics",
          "Medical philosophy",
        ],
        majorThinkers: ["al-kindi", "al-farabi", "avicenna", "averroes"],
        influences: ["Aristotelianism", "Neoplatonism", "Islamic theology"],
        challenged: ["Religious literalism", "Anti-philosophical theology"],
        developments: [
          "Logic and methodology",
          "Medical theory",
          "Political philosophy",
        ],
        legacy: "Preserved and transmitted Greek philosophy to Medieval Europe",
        color: "#059669",
        relatedSchools: ["christian-philosophy", "jewish-philosophy"],
        keyTexts: [
          "The Incoherence of the Philosophers",
          "The Book of Healing",
          "The Perfect State",
        ],
        externalLinks: [
          {
            title: "Islamic Philosophy – Stanford Encyclopedia of Philosophy",
            url: "https://plato.stanford.edu/entries/islamic-philosophy/",
            type: "encyclopedia",
          },
          {
            title:
              "Averroes and Aristotle – Internet Encyclopedia of Philosophy",
            url: "https://iep.utm.edu/averroes/",
            type: "article",
          },
          {
            title: "Medieval Islamic Thought – Oxford University Course",
            url: "https://www.conted.ox.ac.uk/courses/islamic-philosophy-in-the-medieval-period",
            type: "course",
          },
        ],
      },
      {
        id: "jewish-philosophy",
        name: "Jewish Philosophy",
        period: "Medieval",
        years: "9th-15th century CE",
        region: "Spain, France, Germany",
        description:
          "Synthesis of Jewish theology with Aristotelian and Platonic philosophy",
        detailedDescription:
          "Jewish philosophy in the medieval period sought to harmonize Jewish religious teachings with the philosophical methods and insights of Greek philosophy, particularly Aristotelianism, creating sophisticated theological and philosophical systems.",
        keyIdeas: [
          "Maimonidean rationalism",
          "Divine attributes",
          "Prophecy",
          "Jewish law and philosophy",
        ],
        majorThinkers: [
          "saadia-gaon",
          "maimonides",
          "gersonides",
          "hasdai-crescas",
        ],
        influences: [
          "Aristotelianism",
          "Islamic philosophy",
          "Jewish theology",
        ],
        challenged: [
          "Anthropomorphism",
          "Literal interpretation",
          "Philosophical materialism",
        ],
        developments: [
          "Negative theology",
          "Rational commandments",
          "Philosophical psychology",
        ],
        legacy: "Influenced both Jewish thought and Christian scholasticism",
        color: "#7C3AED",
        relatedSchools: ["christian-philosophy", "islamic-philosophy"],
        keyTexts: [
          "Guide for the Perplexed",
          "Book of Beliefs and Opinions",
          "Wars of the Lord",
        ],
        externalLinks: [
          {
            title:
              "Medieval Jewish Philosophy – Stanford Encyclopedia of Philosophy",
            url: "https://plato.stanford.edu/entries/jewish-philosophy-medieval/",
            type: "encyclopedia",
          },
          {
            title:
              "Maimonides' Philosophy – Internet Encyclopedia of Philosophy",
            url: "https://iep.utm.edu/maimonides/",
            type: "article",
          },
          {
            title: "Jewish Thought in the Middle Ages – Yale Online Course",
            url: "https://oyc.yale.edu/religious-studies/rlst-145",
            type: "course",
          },
        ],
      },
    ],
  },
  {
    id: "renaissance",
    name: "Renaissance & Early Modern",
    years: "14th - 17th century CE",
    description:
      "Revival of classical learning and emergence of modern philosophical methods",
    schools: [
      {
        id: "humanism",
        name: "Renaissance Humanism",
        period: "Renaissance",
        years: "14th-16th century CE",
        region: "Italy, Northern Europe",
        description:
          "Emphasis on human dignity, classical learning, and secular concerns",
        detailedDescription:
          "Renaissance Humanism marked a shift toward human-centered philosophy, emphasizing the dignity and worth of the individual. Humanists sought to revive classical learning while developing new approaches to education, politics, and human potential.",
        keyIdeas: [
          "Human dignity",
          "Classical revival",
          "Secular education",
          "Individual potential",
        ],
        majorThinkers: ["petrarch", "pico-della-mirandola", "erasmus"],
        influences: [
          "Classical antiquity",
          "Christian philosophy",
          "Byzantine scholarship",
        ],
        challenged: ["Medieval scholasticism", "Exclusive focus on theology"],
        developments: [
          "Liberal arts education",
          "Critical textual scholarship",
          "Political humanism",
        ],
        legacy: "Shaped modern education and democratic ideals",
        color: "#EF4444",
        relatedSchools: ["rationalism"],
        keyTexts: [
          "Oration on the Dignity of Man",
          "The Praise of Folly",
          "Letters to Posterity",
        ],
        externalLinks: [
          {
            title: "Renaissance Humanism – Stanford Encyclopedia of Philosophy",
            url: "https://plato.stanford.edu/entries/renaissance-humanism/",
            type: "encyclopedia",
          },
          {
            title: "Pico della Mirandola's Oration – Project Gutenberg",
            url: "https://www.gutenberg.org/ebooks/4757",
            type: "book",
          },
          {
            title: "Renaissance Philosophy – CrashCourse Video",
            url: "https://www.youtube.com/watch?v=9G2c3XQW9y8",
            type: "video",
          },
        ],
      },
      {
        id: "rationalism",
        name: "Rationalism",
        period: "Early Modern",
        years: "17th century CE",
        region: "France, Netherlands, Germany",
        description:
          "Knowledge comes primarily through reason and innate ideas",
        detailedDescription:
          "Rationalism emerged as a response to skepticism and the need for certain knowledge. Rationalist philosophers believed that reason, rather than sensory experience, was the primary source of knowledge and that certain truths could be known independently of experience.",
        keyIdeas: [
          "Innate ideas",
          "Methodical doubt",
          "Mathematical certainty",
          "Mind-body dualism",
        ],
        majorThinkers: ["descartes", "spinoza", "leibniz"],
        influences: [
          "Mathematical revolution",
          "Scientific method",
          "Classical skepticism",
        ],
        challenged: [
          "Aristotelian physics",
          "Scholastic method",
          "Sensory knowledge",
        ],
        developments: [
          "Modern epistemology",
          "Mathematical philosophy",
          "Systematic metaphysics",
        ],
        legacy:
          "Established foundation for modern philosophy and scientific method",
        color: "#2563EB",
        relatedSchools: ["empiricism", "german-idealism"],
        keyTexts: [
          "Meditations on First Philosophy",
          "Ethics",
          "Monadology",
          "Discourse on Method",
        ],
        externalLinks: [
          {
            title: "Rationalism – Stanford Encyclopedia of Philosophy",
            url: "https://plato.stanford.edu/entries/rationalism-empiricism/",
            type: "encyclopedia",
          },
          {
            title: "Descartes' Method – Internet Encyclopedia of Philosophy",
            url: "https://iep.utm.edu/descmeth/",
            type: "article",
          },
          {
            title: "Continental Rationalism – MIT OpenCourseWare",
            url: "https://ocw.mit.edu/courses/linguistics-and-philosophy/24-221-metaphysics-i-fall-2005/",
            type: "course",
          },
        ],
      },
      {
        id: "early-modern",
        name: "Early Modern Philosophy",
        period: "Early Modern",
        years: "16th-18th century CE",
        region: "Europe",
        description:
          "The period bridging medieval scholasticism and modern philosophy with new methods of knowledge and metaphysics.",
        detailedDescription:
          "Early Modern philosophy was shaped by the scientific revolution, exploration, and challenges to religious authority. Figures like Descartes, Spinoza, and Locke developed new systems of metaphysics and epistemology, laying the groundwork for rationalism, empiricism, and modern political theory.",
        keyIdeas: [
          "Cogito ergo sum",
          "Dualism",
          "Methodic doubt",
          "Social contract",
        ],
        majorThinkers: ["descartes", "spinoza", "locke"],
        influences: ["Renaissance humanism", "Scientific revolution"],
        challenged: ["Scholasticism", "Religious dogmatism"],
        developments: ["Epistemology", "Metaphysics", "Political liberalism"],
        legacy:
          "Established modern methods of inquiry and new theories of mind, knowledge, and governance.",
        color: "#0EA5E9",
        relatedSchools: ["rationalism", "empiricism"],
        keyTexts: ["Meditations on First Philosophy", "Leviathan", "Ethics"],
        externalLinks: [
          {
            title:
              "Early Modern Philosophy – Stanford Encyclopedia of Philosophy",
            url: "https://plato.stanford.edu/entries/early-modern/",
            type: "encyclopedia",
          },
          {
            title: "Modern Philosophy – Internet Encyclopedia of Philosophy",
            url: "https://iep.utm.edu/early-modern/",
            type: "article",
          },
          {
            title: "Early Modern Philosophy – Britannica",
            url: "https://www.britannica.com/topic/Western-philosophy/Early-modern-philosophy",
            type: "encyclopedia",
          },
        ],
      },
      {
        id: "empiricism",
        name: "British Empiricism",
        period: "Early Modern",
        years: "17th-18th century CE",
        region: "Britain",
        description: "Knowledge comes primarily through sensory experience",
        detailedDescription:
          "British Empiricism developed as a systematic alternative to Continental Rationalism, arguing that all knowledge ultimately derives from sensory experience. This tradition emphasized observation, experimentation, and inductive reasoning.",
        keyIdeas: [
          "Tabula rasa",
          "Sensory experience",
          "Induction",
          "Skepticism about causation",
        ],
        majorThinkers: ["locke", "berkeley", "hume"],
        influences: [
          "Scientific revolution",
          "Bacon's method",
          "Political upheaval",
        ],
        challenged: [
          "Innate ideas",
          "Rationalist metaphysics",
          "Certainty of causation",
        ],
        developments: [
          "Modern psychology",
          "Political liberalism",
          "Skeptical philosophy",
        ],
        legacy: "Influenced modern science, psychology, and political theory",
        color: "#059669",
        relatedSchools: ["rationalism", "german-idealism"],
        keyTexts: [
          "Essay Concerning Human Understanding",
          "Treatise of Human Nature",
          "Principles of Human Knowledge",
        ],
        externalLinks: [
          {
            title: "British Empiricism – Stanford Encyclopedia of Philosophy",
            url: "https://plato.stanford.edu/entries/empiricism/",
            type: "encyclopedia",
          },
          {
            title: "Hume's Skepticism – Internet Encyclopedia of Philosophy",
            url: "https://iep.utm.edu/hume-skepticism/",
            type: "article",
          },
          {
            title: "The Empiricist Tradition – Yale Online Lecture",
            url: "https://oyc.yale.edu/philosophy/phil-176/lecture-11",
            type: "video",
          },
        ],
      },
    ],
  },
  {
    id: "enlightenment",
    name: "Enlightenment",
    years: "17th - 18th century CE",
    description: "Age of reason, progress, and human rights",
    schools: [
      {
        id: "enlightenment",
        name: "Enlightenment Philosophy",
        period: "Modern",
        years: "18th century",
        region: "Europe",
        description:
          "An intellectual movement emphasizing reason, liberty, and progress",
        detailedDescription:
          "The Enlightenment applied reason to society, politics, science, and morality, advocating secularism, progress, and human rights.",
        keyIdeas: ["Reason", "Progress", "Liberty", "Secularism"],
        majorThinkers: ["voltaire", "kant", "rousseau"],
        influences: ["Rationalism", "Empiricism", "Scientific revolution"],
        challenged: ["Absolutism", "Religious dogma"],
        developments: ["Political theory", "Human rights", "Secular ethics"],
        legacy: "Shaped modern democracies and liberal thought",
        color: "#FACC15",
        relatedSchools: ["liberalism", "modern-philosophy"],
        keyTexts: ["The Social Contract", "Critique of Pure Reason"],
        externalLinks: [
          {
            title: "Enlightenment – Stanford Encyclopedia of Philosophy",
            url: "https://plato.stanford.edu/entries/enlightenment/",
            type: "encyclopedia",
          },
        ],
      },
      {
        id: "german-idealism",
        name: "German Idealism",
        period: "Enlightenment",
        years: "18th-19th century CE",
        region: "Germany",
        description: "Reality is fundamentally mental or spiritual in nature",
        detailedDescription:
          "German Idealism emerged as a response to the limitations of both rationalism and empiricism. These philosophers argued that reality is fundamentally mental or spiritual, and developed sophisticated systems to explain the relationship between mind and world.",
        keyIdeas: [
          "Transcendental idealism",
          "Absolute spirit",
          "Dialectical method",
          "Categorical imperative",
        ],
        majorThinkers: ["kant", "hegel", "fichte", "schelling"],
        influences: [
          "Rationalism vs. Empiricism debate",
          "Scientific revolution",
          "Political revolutions",
        ],
        challenged: [
          "Dogmatic metaphysics",
          "Naive realism",
          "Moral heteronomy",
        ],
        developments: [
          "Critical philosophy",
          "Moral autonomy",
          "Historical consciousness",
        ],
        legacy: "Revolutionized epistemology, ethics, and political philosophy",
        color: "#7C3AED",
        relatedSchools: ["rationalism", "empiricism"],
        keyTexts: [
          "Critique of Pure Reason",
          "Phenomenology of Spirit",
          "Science of Knowledge",
        ],
        externalLinks: [
          {
            title: "German Idealism – Stanford Encyclopedia of Philosophy",
            url: "https://plato.stanford.edu/entries/idealism-german/",
            type: "encyclopedia",
          },
          {
            title: "Kant's Critical Philosophy – Open Yale Course",
            url: "https://oyc.yale.edu/philosophy/phil-176",
            type: "course",
          },
          {
            title: "Hegel's Dialectic Explained – YouTube",
            url: "https://www.youtube.com/watch?v=3Uqi1pjzx1o",
            type: "video",
          },
        ],
      },
      {
        id: "french-enlightenment",
        name: "French Enlightenment",
        period: "Enlightenment",
        years: "18th century CE",
        region: "France",
        description: "Reason, progress, and criticism of traditional authority",
        detailedDescription:
          "The French Enlightenment emphasized the power of reason to reform society and advance knowledge. These thinkers challenged traditional authority and promoted ideals of progress, tolerance, and human rights.",
        keyIdeas: [
          "Reason",
          "Progress",
          "Natural rights",
          "Religious tolerance",
          "Social contract",
        ],
        majorThinkers: ["voltaire", "rousseau", "diderot", "montesquieu"],
        influences: [
          "British empiricism",
          "Scientific revolution",
          "Political absolutism",
        ],
        challenged: [
          "Religious authority",
          "Political absolutism",
          "Traditional social hierarchy",
        ],
        developments: [
          "Democratic theory",
          "Religious tolerance",
          "Educational reform",
        ],
        legacy: "Inspired democratic revolutions and modern human rights",
        color: "#DC2626",
        relatedSchools: ["german-idealism"],
        keyTexts: [
          "Social Contract",
          "Spirit of the Laws",
          "Candide",
          "Encyclopedia",
        ],
        externalLinks: [
          {
            title: "French Enlightenment – Britannica",
            url: "https://www.britannica.com/event/Enlightenment-European-history",
            type: "encyclopedia",
          },
          {
            title:
              "Voltaire and Religious Tolerance – Internet Encyclopedia of Philosophy",
            url: "https://iep.utm.edu/voltaire/",
            type: "article",
          },
          {
            title: "The Age of Reason Documentary – PBS",
            url: "https://www.pbs.org/empires/themedievalmind/enlightenment.html",
            type: "video",
          },
        ],
      },
    ],
  },
  {
    id: "modern",
    name: "19th Century Philosophy",
    years: "19th century CE",
    description:
      "Revolutionary developments in ethics, politics, and human understanding",
    schools: [
      {
        id: "modern",
        name: "Modern Philosophy (General)",
        period: "Modern",
        years: "17th-19th century CE",
        region: "Europe, Global",
        description:
          "Broad developments in metaphysics, ethics, and politics in the modern period.",
        detailedDescription:
          "Modern philosophy includes rationalism, empiricism, utilitarianism, German idealism, Marxism, and other 17th–19th century movements. It was a time of revolutionary change in epistemology, political philosophy, ethics, and science.",
        keyIdeas: [
          "Reason",
          "Empiricism",
          "Utilitarianism",
          "Historical materialism",
        ],
        majorThinkers: ["descartes", "kant", "mill", "hegel", "marx"],
        influences: [
          "Scientific revolution",
          "Enlightenment",
          "Industrial revolution",
        ],
        challenged: ["Medieval scholasticism", "Religious orthodoxy"],
        developments: ["Modern science", "Political theory", "Ethics"],
        legacy:
          "Created the intellectual foundation of modern Western society and thought.",
        color: "#DC2626",
        relatedSchools: [
          "rationalism",
          "empiricism",
          "utilitarianism",
          "german-idealism",
        ],
        keyTexts: ["Critique of Pure Reason", "On Liberty", "Das Kapital"],
        externalLinks: [
          {
            title: "Modern Philosophy – Stanford Encyclopedia of Philosophy",
            url: "https://plato.stanford.edu/entries/modern-philosophy/",
            type: "encyclopedia",
          },
          {
            title: "Modern Philosophy – Internet Encyclopedia of Philosophy",
            url: "https://iep.utm.edu/modern-philosophy/",
            type: "article",
          },
          {
            title: "Modern Philosophy – Britannica",
            url: "https://www.britannica.com/topic/Western-philosophy/Modern-philosophy",
            type: "encyclopedia",
          },
        ],
      },
      {
        id: "utilitarianism",
        name: "Utilitarianism",
        period: "19th Century",
        years: "18th-19th century CE",
        region: "Britain",
        description:
          "Actions are right when they promote the greatest happiness for the greatest number",
        detailedDescription:
          "Utilitarianism emerged as a systematic approach to ethics based on consequences rather than duties or virtues. It provided a seemingly scientific method for moral decision-making and social reform.",
        keyIdeas: [
          "Greatest happiness principle",
          "Consequentialism",
          "Hedonistic calculus",
          "Social reform",
        ],
        majorThinkers: ["bentham", "mill", "sidgwick"],
        influences: [
          "British empiricism",
          "Industrial revolution",
          "Social problems",
        ],
        challenged: [
          "Deontological ethics",
          "Traditional moral intuitions",
          "Social inequality",
        ],
        developments: [
          "Welfare economics",
          "Social policy",
          "Animal rights theory",
        ],
        legacy: "Foundational to modern economics, public policy, and ethics",
        color: "#F59E0B",
        relatedSchools: ["empiricism"],
        keyTexts: [
          "Introduction to the Principles of Morals and Legislation",
          "On Liberty",
          "The Methods of Ethics",
        ],
        externalLinks: [
          {
            title: "Utilitarianism – Stanford Encyclopedia of Philosophy",
            url: "https://plato.stanford.edu/entries/utilitarianism-history/",
            type: "encyclopedia",
          },
          {
            title:
              "Mill's Harm Principle – Wikipedia",
            url: "http://en.wikipedia.org/wiki/Harm_principle",
            type: "article",
          },
          {
            title: "Applied Ethics & Utilitarianism – Yale Online Course",
            url: "https://oyc.yale.edu/philosophy/phil-181/lecture-7",
            type: "course",
          },
        ],
      },
      {
        id: "liberalism",
        name: "Liberalism",
        period: "Modern",
        years: "17th-19th century",
        region: "Europe, North America",
        description:
          "Political philosophy centered on liberty, equality, and rights",
        detailedDescription:
          "Liberalism emphasizes individual rights, rule of law, representative democracy, and free markets.",
        keyIdeas: ["Natural rights", "Individual liberty", "Social contract"],
        majorThinkers: ["locke", "mill", "montesquieu"],
        influences: ["Enlightenment", "Empiricism"],
        challenged: ["Absolutism", "Feudalism"],
        developments: ["Democratic theory", "Human rights"],
        legacy: "Foundation of modern democracies",
        color: "#0891B2",
        relatedSchools: ["enlightenment", "modern-indian-philosophy"],
        keyTexts: ["Two Treatises of Government", "On Liberty"],
        externalLinks: [
          {
            title: "Liberalism – Stanford Encyclopedia of Philosophy",
            url: "https://plato.stanford.edu/entries/liberalism/",
            type: "encyclopedia",
          },
          {
            title: "Liberalism – Internet Encyclopedia of Philosophy",
            url: "https://iep.utm.edu/liberalism/",
            type: "article",
          },
          {
            title: "Liberalism Overview – Britannica",
            url: "https://www.britannica.com/topic/liberalism",
            type: "encyclopedia",
          },
        ],
      },
      {
        id: "existentialism-precursors",
        name: "Existentialist Precursors",
        period: "19th Century",
        years: "19th century CE",
        region: "Denmark, Germany, Russia",
        description:
          "Individual existence, freedom, and choice as fundamental concerns",
        detailedDescription:
          "The precursors to existentialism challenged the systematic, rational approaches of previous philosophy, emphasizing instead the concrete, lived experience of individuals facing anxiety, freedom, and the search for meaning.",
        keyIdeas: [
          "Subjective truth",
          "Anxiety",
          "Will to power",
          "Underground consciousness",
        ],
        majorThinkers: ["kierkegaard", "nietzsche", "dostoevsky"],
        influences: [
          "German idealism",
          "Romantic movement",
          "Modern alienation",
        ],
        challenged: [
          "Systematic philosophy",
          "Christian morality",
          "Rational optimism",
        ],
        developments: [
          "Psychology of existence",
          "Critique of modernity",
          "Artistic philosophy",
        ],
        legacy: "Birthed existentialism and influenced depth psychology",
        color: "#7C2D12",
        relatedSchools: ["german-idealism", "continental"],
        keyTexts: [
          "Fear and Trembling",
          "Thus Spoke Zarathustra",
          "Notes from Underground",
        ],
        externalLinks: [
          {
            title: "Existentialism – Stanford Encyclopedia of Philosophy",
            url: "https://plato.stanford.edu/entries/existentialism/",
            type: "encyclopedia",
          },
          {
            title:
              "Kierkegaard's Relation to Hegel Reconsidered – Notre Dame Philosophical Review",
            url: "https://ndpr.nd.edu/reviews/kierkegaard-s-relation-to-hegel-reconsidered/",
            type: "article",
          },
          {
            title: "Nietzsche's Philosophy – BBC Documentary",
            url: "https://www.youtube.com/watch?v=wHWbZmg2hzU",
            type: "video",
          },
        ],
      },
      {
        id: "global-philosophy",
        name: "Global Philosophy",
        period: "Modern to Contemporary",
        years: "20th century onwards",
        region: "Global",
        description:
          "Philosophy that seeks to transcend Eurocentric traditions by integrating diverse cultural perspectives.",
        detailedDescription:
          "Global philosophy emphasizes inclusivity, diversity, and cross-cultural dialogue. Thinkers like Frantz Fanon, Kwasi Wiredu, and Enrique Dussel have called for decolonizing philosophy and incorporating African, Asian, and Indigenous traditions into the global conversation.",
        keyIdeas: ["Decolonization", "Conceptual decolonization", "Pluralism"],
        majorThinkers: ["fanon", "wiredu", "dussel"],
        influences: [
          "Postcolonial studies",
          "Critical theory",
          "Indigenous traditions",
        ],
        challenged: ["Eurocentrism", "Colonial domination"],
        developments: ["Postcolonial theory", "Philosophy of culture"],
        legacy:
          "Expands philosophy beyond the Western canon to a truly global discipline.",
        color: "#84CC16",
        relatedSchools: ["african-philosophy", "indigenous-philosophy"],
        keyTexts: [
          "Black Skin, White Masks",
          "Philosophy and an African Culture",
        ],
        externalLinks: [
          {
            title:
              "Decolonizing Philosophy – Stanford Encyclopedia of Philosophy",
            url: "https://plato.stanford.edu/entries/decolonizing-philosophy/",
            type: "encyclopedia",
          },
          {
            title: "Global Philosophy – Internet Encyclopedia of Philosophy",
            url: "https://iep.utm.edu/global-philosophy/",
            type: "article",
          },
          {
            title: "Philosophy Beyond the West – Britannica",
            url: "https://www.britannica.com/topic/philosophy/Non-Western-philosophies",
            type: "encyclopedia",
          },
        ],
      },

      {
        id: "marxism",
        name: "Marxism",
        period: "19th Century",
        years: "19th century CE",
        region: "Germany, Britain",
        description:
          "Historical materialism and critique of capitalist economic systems",
        detailedDescription:
          "Marxism developed as both a philosophical system and a program for social change, combining German idealist dialectics with French socialist politics and British economic analysis to create a comprehensive critique of capitalism.",
        keyIdeas: [
          "Historical materialism",
          "Class struggle",
          "Dialectical materialism",
          "Alienation",
        ],
        majorThinkers: ["marx", "engels"],
        influences: [
          "German idealism",
          "British economics",
          "French socialism",
        ],
        challenged: [
          "Capitalist economics",
          "Idealist philosophy",
          "Political inequality",
        ],
        developments: [
          "Socialist theory",
          "Economic analysis",
          "Revolutionary praxis",
        ],
        legacy: "Shaped modern political movements and economic theory",
        color: "#BE123C",
        relatedSchools: ["german-idealism"],
        keyTexts: [
          "Das Kapital",
          "The Communist Manifesto",
          "The German Ideology",
        ],
        externalLinks: [
          {
            title: "Marxism – Stanford Encyclopedia of Philosophy",
            url: "https://plato.stanford.edu/entries/marx/",
            type: "encyclopedia",
          },
          {
            title:
              "Historical Materialism – Wikipedia",
            url: "https://en.wikipedia.org/wiki/Historical_materialism",
            type: "article",
          },
          {
            title: "Marx's Economic Theory – Yale Online Lecture",
            url: "https://oyc.yale.edu/political-science/plsc-270/lecture-12",
            type: "course",
          },
        ],
      },
    ],
  },
  {
    id: "contemporary",
    name: "Contemporary Philosophy",
    years: "20th century CE - present",
    description:
      "Diverse approaches to language, consciousness, and human experience",
    schools: [
      {
        id: "existentialism",
        name: "Existentialism",
        period: "Contemporary",
        years: "19th-20th century",
        region: "Europe",
        description:
          "Philosophy emphasizing individual existence, freedom, and meaning",
        detailedDescription:
          "Existentialism stresses the individual’s freedom, choice, and responsibility in creating meaning in an absurd or indifferent universe.",
        keyIdeas: ["Freedom", "Authenticity", "Absurdity"],
        majorThinkers: ["kierkegaard", "nietzsche", "sartre", "camus"],
        influences: ["German idealism", "Phenomenology"],
        challenged: ["Determinism", "Essentialism"],
        developments: ["Literature", "Psychology", "Theology"],
        legacy:
          "Shaped 20th-century literature, theology, and continental philosophy",
        color: "#BE123C",
        relatedSchools: ["marxism", "feminism"],
        keyTexts: ["Being and Nothingness", "The Myth of Sisyphus"],
        externalLinks: [
          {
            title: "Existentialism – Stanford Encyclopedia of Philosophy",
            url: "https://plato.stanford.edu/entries/existentialism/",
            type: "encyclopedia",
          },
          {
            title: "Existentialism – Internet Encyclopedia of Philosophy",
            url: "https://iep.utm.edu/existent/",
            type: "article",
          },
          {
            title: "Existentialism in Literature & Philosophy – CrashCourse",
            url: "https://www.youtube.com/watch?v=YaDvRdLMkHs",
            type: "video",
          },
        ],
      },
      {
        id: "feminism",
        name: "Feminist Philosophy",
        period: "Contemporary",
        years: "19th century onwards",
        region: "Global",
        description:
          "Philosophy addressing gender, equality, and social justice",
        detailedDescription:
          "Feminist philosophy critiques patriarchy, examines the construction of gender, and promotes equality and liberation.",
        keyIdeas: [
          "Gender equality",
          "Intersectionality",
          "Critique of patriarchy",
        ],
        majorThinkers: [
          "mary wollstonecraft",
          "simone de beauvoir",
          "bell hooks",
        ],
        influences: ["Liberalism", "Marxism"],
        challenged: ["Patriarchy", "Sexism"],
        developments: ["Ethics", "Epistemology", "Social philosophy"],
        legacy: "Reshaped philosophy, politics, and social theory",
        color: "#DB2777",
        relatedSchools: ["existentialism", "marxism"],
        keyTexts: ["A Vindication of the Rights of Woman", "The Second Sex"],
        externalLinks: [
          {
            title: "Feminist Philosophy – Stanford Encyclopedia of Philosophy",
            url: "https://plato.stanford.edu/entries/feminism/",
            type: "encyclopedia",
          },
          {
            title: "Feminist Philosophy – Internet Encyclopedia of Philosophy",
            url: "https://iep.utm.edu/fem-phil/",
            type: "article",
          },
          {
            title: "History of Feminist Thought – Yale Course",
            url: "https://oyc.yale.edu/womens-gender-and-sexuality-studies/wgss-110",
            type: "course",
          },
        ],
      },
      {
        id: "modern-indian-philosophy",
        name: "Modern Indian Philosophy",
        period: "Contemporary",
        years: "19th-20th century",
        region: "India",
        description:
          "Indian philosophical developments under colonial and modern contexts",
        detailedDescription:
          "Modern Indian philosophy includes reformist, nationalist, and spiritual thinkers addressing colonialism, identity, and modernization.",
        keyIdeas: [
          "Nationalism",
          "Spiritual reform",
          "Integration of East and West",
        ],
        majorThinkers: ["vivekananda", "gandhi", "tagore", "auro­bindo"],
        influences: ["Vedanta", "Bhakti movements", "Liberalism"],
        challenged: ["Colonialism", "Caste system"],
        developments: ["Political philosophy", "Religious reform"],
        legacy: "Influenced Indian independence and global philosophy",
        color: "#15803D",
        relatedSchools: ["liberalism", "ancient-indian-political-thought"],
        keyTexts: ["Hind Swaraj", "The Life Divine"],
        externalLinks: [
          {
            title:
              "Modern Indian Philosophy – Internet Encyclopedia of Philosophy",
            url: "https://iep.utm.edu/modern-indian-philosophy/",
            type: "encyclopedia",
          },
          {
            title:
              "Gandhi and Indian Philosophy – Stanford Encyclopedia of Philosophy",
            url: "https://plato.stanford.edu/entries/gandhi/",
            type: "encyclopedia",
          },
          {
            title: "Modern Indian Thinkers – Britannica",
            url: "https://www.britannica.com/topic/Indian-philosophy/Modern-Indian-philosophy",
            type: "encyclopedia",
          },
        ],
      },
      {
        id: "universal",
        name: "Universal Philosophy",
        period: "Timeless",
        years: "Transhistorical",
        region: "Global",
        description:
          "Philosophy that appeals to universal principles transcending culture and history.",
        detailedDescription:
          "Universal philosophy emphasizes concepts of justice, truth, and human rights that are considered valid across all cultures and times. It includes Stoic cosmopolitanism, Kantian universalism, and modern human rights discourse.",
        keyIdeas: ["Universalism", "Justice", "Human rights"],
        majorThinkers: ["stoics", "kant", "rawls"],
        influences: ["Ethics", "Law", "Religion"],
        challenged: ["Relativism", "Postmodernism"],
        developments: ["Human rights law", "International ethics"],
        legacy:
          "Forms the moral foundation of international law and global ethics.",
        color: "#3B82F6",
        relatedSchools: ["ethics", "enlightenment"],
        keyTexts: [
          "Groundwork of the Metaphysics of Morals",
          "Universal Declaration of Human Rights",
        ],
        externalLinks: [
          {
            title:
              "Universalism in Ethics – Stanford Encyclopedia of Philosophy",
            url: "https://plato.stanford.edu/entries/moral-universalism/",
            type: "encyclopedia",
          },
          {
            title: "Universalism – Internet Encyclopedia of Philosophy",
            url: "https://iep.utm.edu/universalism/",
            type: "article",
          },
          {
            title: "Universalism – Britannica",
            url: "https://www.britannica.com/topic/universalism",
            type: "encyclopedia",
          },
        ],
      },
      {
        id: "post-structuralism",
        name: "Post-Structuralism",
        period: "Contemporary",
        years: "1960s onwards",
        region: "France, Europe",
        description:
          "A critical movement deconstructing structuralist notions of stable meaning and truth.",
        detailedDescription:
          "Post-structuralism arose as a reaction to structuralism in mid-20th-century France. Thinkers like Derrida, Foucault, and Barthes challenged the idea that human culture can be understood through stable structures. Instead, they emphasized the instability of meaning, power relations, and the role of language in shaping thought.",
        keyIdeas: [
          "Deconstruction",
          "Logocentrism",
          "Différance",
          "Discourse analysis",
        ],
        majorThinkers: ["derrida", "barthes", "deleuze"],
        influences: ["Structuralism", "Phenomenology", "Psychoanalysis"],
        challenged: ["Structuralism", "Universalism", "Essentialism"],
        developments: ["Literary theory", "Critical philosophy", "Semiotics"],
        legacy:
          "Shaped literary studies, critical theory, and cultural analysis worldwide.",
        color: "#9333EA",
        relatedSchools: ["continental", "postmodernism"],
        keyTexts: ["Of Grammatology", "Writing and Difference"],
        externalLinks: [
          {
            title: "Post-Structuralism – Stanford Encyclopedia of Philosophy",
            url: "https://plato.stanford.edu/entries/poststructuralism/",
            type: "encyclopedia",
          },
          {
            title: "Post-Structuralism – Internet Encyclopedia of Philosophy",
            url: "https://iep.utm.edu/poststructuralism/",
            type: "article",
          },
          {
            title: "Post-Structuralism – Britannica",
            url: "https://www.britannica.com/topic/poststructuralism",
            type: "encyclopedia",
          },
        ],
      },
      {
        id: "postmodernism",
        name: "Postmodernism",
        period: "Contemporary",
        years: "Late 20th century",
        region: "Europe, Global",
        description:
          "A skeptical movement challenging grand narratives, universal truths, and objective knowledge.",
        detailedDescription:
          "Postmodernism emerged in the late 20th century as a critique of Enlightenment rationalism, scientific objectivity, and universal truth claims. It emphasizes cultural relativism, pluralism, and the role of power/knowledge. Thinkers like Foucault and Lyotard rejected the idea of linear progress and universal reason.",
        keyIdeas: [
          "Power/knowledge",
          "Cultural relativism",
          "Grand narrative critique",
        ],
        majorThinkers: ["foucault", "lyotard", "baudrillard"],
        influences: ["Post-structuralism", "Modernism", "Critical theory"],
        challenged: ["Universalism", "Essentialism", "Objective truth"],
        developments: [
          "Critical sociology",
          "Cultural studies",
          "Political theory",
        ],
        legacy:
          "Transformed debates in philosophy, sociology, history, and cultural studies.",
        color: "#DB2777",
        relatedSchools: ["post-structuralism", "continental"],
        keyTexts: ["The Postmodern Condition", "Discipline and Punish"],
        externalLinks: [
          {
            title: "Postmodernism – Stanford Encyclopedia of Philosophy",
            url: "https://plato.stanford.edu/entries/postmodernism/",
            type: "encyclopedia",
          },
          {
            title: "Postmodernism – Internet Encyclopedia of Philosophy",
            url: "https://iep.utm.edu/postmodernism/",
            type: "article",
          },
          {
            title: "Postmodernism – Britannica",
            url: "https://www.britannica.com/topic/postmodernism",
            type: "encyclopedia",
          },
        ],
      },
      {
        id: "political-philosophy",
        name: "Political Philosophy",
        period: "Ancient to Modern",
        years: "5th century BCE onwards",
        region: "Global",
        description:
          "The study of government, power, justice, and the best forms of political organization.",
        detailedDescription:
          "Political philosophy examines the foundations of political authority, justice, rights, and obligations. From Plato’s Republic to Machiavelli’s Realism and Rawls’s Theory of Justice, it explores how societies should be organized and governed. Ancient Indian, Chinese, and African traditions also developed rich accounts of statecraft and communal ethics.",
        keyIdeas: [
          "Justice",
          "Social contract",
          "Statecraft",
          "Political realism",
        ],
        majorThinkers: ["plato", "aristotle", "machiavelli", "hobbes", "rawls"],
        influences: ["Law", "Ethics", "Economics"],
        challenged: ["Anarchy", "Tyranny", "Utopianism"],
        developments: [
          "Constitutionalism",
          "International relations",
          "Democratic theory",
        ],
        legacy:
          "Continues to shape law, governance, and political systems globally.",
        color: "#2563EB",
        relatedSchools: ["ancient-indian-political-thought", "liberalism"],
        keyTexts: [
          "Republic",
          "The Prince",
          "Leviathan",
          "A Theory of Justice",
        ],
        externalLinks: [
          {
            title: "Political Philosophy – Stanford Encyclopedia of Philosophy",
            url: "https://plato.stanford.edu/entries/political-philosophy/",
            type: "encyclopedia",
          },
          {
            title: "Political Philosophy – Internet Encyclopedia of Philosophy",
            url: "https://iep.utm.edu/political-philosophy/",
            type: "article",
          },
          {
            title: "Political Philosophy – Britannica",
            url: "https://www.britannica.com/topic/political-philosophy",
            type: "encyclopedia",
          },
        ],
      },
      {
        id: "ethics",
        name: "Ethics",
        period: "Ancient to Modern",
        years: "Universal",
        region: "Global",
        description:
          "The philosophical study of morality, virtue, and the good life.",
        detailedDescription:
          "Ethics, or moral philosophy, explores what is right and wrong, good and bad, just and unjust. From Aristotle’s virtue ethics to Kant’s deontological ethics and Mill’s utilitarianism, ethical thought provides frameworks for individual and collective decision-making.",
        keyIdeas: [
          "Virtue ethics",
          "Deontology",
          "Utilitarianism",
          "Universalism",
        ],
        majorThinkers: ["aristotle", "kant", "mill", "confucius"],
        influences: ["Religion", "Law", "Cultural traditions"],
        challenged: ["Relativism", "Nihilism"],
        developments: ["Bioethics", "Applied ethics", "Global justice"],
        legacy:
          "Central to philosophy and applied across law, medicine, and politics.",
        color: "#F59E0B",
        relatedSchools: ["virtue-ethics", "utilitarianism", "deontology"],
        keyTexts: [
          "Nicomachean Ethics",
          "Groundwork of the Metaphysics of Morals",
          "Utilitarianism",
        ],
        externalLinks: [
          {
            title: "Ethics – Stanford Encyclopedia of Philosophy",
            url: "https://plato.stanford.edu/entries/ethics/",
            type: "encyclopedia",
          },
          {
            title: "Moral Philosophy – Internet Encyclopedia of Philosophy",
            url: "https://iep.utm.edu/ethics/",
            type: "article",
          },
          {
            title: "Ethics – Britannica",
            url: "https://www.britannica.com/topic/ethics-philosophy",
            type: "encyclopedia",
          },
        ],
      },

      {
        id: "analytic",
        name: "Analytic Philosophy",
        period: "Contemporary",
        years: "20th century CE - present",
        region: "Britain, United States",
        description:
          "Emphasis on logical analysis, language, and scientific methods",
        detailedDescription:
          "Analytic philosophy emerged in the early 20th century with an emphasis on clarity, logical rigor, and the analysis of language. It became the dominant tradition in the English-speaking world and emphasizes precise argumentation and scientific methodology.",
        keyIdeas: [
          "Logical analysis",
          "Language philosophy",
          "Empirical methods",
          "Conceptual clarity",
        ],
        majorThinkers: ["russell", "wittgenstein", "quine", "rawls"],
        influences: [
          "Mathematical logic",
          "Scientific revolution",
          "Linguistic turn",
        ],
        challenged: [
          "Continental obscurity",
          "Metaphysical speculation",
          "Intuitive methods",
        ],
        developments: [
          "Philosophy of language",
          "Logic and mathematics",
          "Political philosophy",
        ],
        legacy:
          "Dominant in Anglo-American universities and influences cognitive science",
        color: "#1E40AF",
        relatedSchools: ["empiricism"],
        keyTexts: [
          "Principia Mathematica",
          "Tractatus Logico-Philosophicus",
          "A Theory of Justice",
        ],
        externalLinks: [
          {
            title: "Analytic Philosophy – Stanford Encyclopedia of Philosophy",
            url: "https://plato.stanford.edu/entries/analytic-philosophy/",
            type: "encyclopedia",
          },
          {
            title:
              "Wittgenstein's Language Games – Internet Encyclopedia of Philosophy",
            url: "https://iep.utm.edu/wittgens-language-games/",
            type: "article",
          },
          {
            title: "Modern Logic & Philosophy – MIT OpenCourseWare",
            url: "https://ocw.mit.edu/courses/linguistics-and-philosophy/24-241-logic-i-fall-2005/",
            type: "course",
          },
        ],
      },
      {
        id: "continental",
        name: "Continental Philosophy",
        period: "Contemporary",
        years: "20th century CE - present",
        region: "Continental Europe",
        description:
          "Focus on historical context, human experience, and interpretive methods",
        detailedDescription:
          "Continental philosophy emphasizes the historical and cultural context of philosophical problems, often focusing on human experience, interpretation, and the critique of modern society and thought.",
        keyIdeas: [
          "Phenomenology",
          "Hermeneutics",
          "Deconstruction",
          "Existential analysis",
        ],
        majorThinkers: ["husserl", "heidegger", "sartre", "derrida"],
        influences: [
          "German idealism",
          "Existentialist precursors",
          "Historical crises",
        ],
        challenged: [
          "Scientific positivism",
          "Analytic methods",
          "Objective truth claims",
        ],
        developments: [
          "Phenomenological method",
          "Existential psychoanalysis",
          "Postmodern critique",
        ],
        legacy: "Influences humanities, psychology, and cultural theory",
        color: "#92400E",
        relatedSchools: ["existentialism-precursors", "german-idealism"],
        keyTexts: [
          "Being and Time",
          "Being and Nothingness",
          "Of Grammatology",
        ],
        externalLinks: [
          {
            title:
              "Continental Philosophy – Internet Encyclopedia of Philosophy",
            url: "https://iep.utm.edu/continental-philosophy/",
            type: "encyclopedia",
          },
          {
            title: "Phenomenology Explained – YouTube Lecture",
            url: "https://www.youtube.com/watch?v=z9VQvS7Tx38",
            type: "video",
          },
          {
            title: "Existentialism & Continental Thought – Yale Online Course",
            url: "https://oyc.yale.edu/philosophy/phil-176/lecture-13",
            type: "course",
          },
        ],
      },
      {
        id: "pragmatism",
        name: "American Pragmatism",
        period: "Contemporary",
        years: "Late 19th-20th century CE",
        region: "United States",
        description:
          "Truth and meaning are determined by practical consequences",
        detailedDescription:
          "American Pragmatism emerged as a distinctly American philosophical tradition that emphasized the practical consequences of ideas and beliefs. Pragmatists argued that the meaning and truth of concepts should be understood in terms of their practical effects.",
        keyIdeas: [
          "Pragmatic maxim",
          "Fallibilism",
          "Democratic inquiry",
          "Experience-based truth",
        ],
        majorThinkers: ["peirce", "james", "dewey", "rorty"],
        influences: [
          "American democracy",
          "Scientific method",
          "Evolutionary theory",
        ],
        challenged: [
          "Correspondence theory of truth",
          "Foundationalism",
          "Abstract metaphysics",
        ],
        developments: [
          "Democratic education",
          "Scientific instrumentalism",
          "Anti-foundationalism",
        ],
        legacy:
          "Influenced American education, democracy, and philosophy of science",
        color: "#0D9488",
        relatedSchools: ["empiricism"],
        keyTexts: [
          "Pragmatism",
          "Democracy and Education",
          "Philosophy and the Mirror of Nature",
        ],
        externalLinks: [
          {
            title: "Pragmatism – Stanford Encyclopedia of Philosophy",
            url: "https://plato.stanford.edu/entries/pragmatism/",
            type: "encyclopedia",
          },
          {
            title:
              "Dewey's Educational Philosophy – Internet Encyclopedia of Philosophy",
            url: "https://iep.utm.edu/dewey-edu/",
            type: "article",
          },
          {
            title: "Pragmatist Tradition – CrashCourse Video",
            url: "https://www.youtube.com/watch?v=rKMMCP92w7w",
            type: "video",
          },
        ],
      },
    ],
  },
];
export const allSchools: PhilosophicalSchool[] = philosophyData.flatMap(
  (period) => period.schools
);
