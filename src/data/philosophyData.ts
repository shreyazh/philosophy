import { PhilosophicalPeriod, PhilosophicalSchool } from '../types/philosophy';

export const philosophyData: PhilosophicalPeriod[] = [
  {
    id: 'ancient',
    name: 'Ancient Philosophy',
    years: '6th century BCE - 6th century CE',
    description: 'The foundation of Western and Eastern philosophical thought',
    schools: [
      {
        id: 'vedanta',
        name: 'Vedanta',
        period: 'Ancient',
        years: '800 BCE onwards',
        region: 'India',
        description: 'A Hindu philosophical school based on the Upanishads',
        detailedDescription: 'Vedanta explores metaphysics, self-realization, Brahman (ultimate reality), and Atman (self). Different schools include Advaita, Vishishtadvaita, and Dvaita.',
        keyIdeas: ['Brahman', 'Atman', 'Moksha'],
        majorThinkers: ['shankara', 'ramanuja', 'madhva'],
        influences: ['Upanishads', 'Vedic tradition'],
        challenged: ['Materialism', 'Buddhism', 'Jainism'],
        developments: ['Metaphysics', 'Non-dualism', 'Theology'],
        legacy: 'A cornerstone of Indian philosophy and spirituality',
        color: '#D97706',
        relatedSchools: ['jain-philosophy', 'vaishnavism', 'bhakti-philosophy'],
        keyTexts: ['Upanishads', 'Brahma Sutras', 'Bhagavad Gita'],
        externalLinks: [
          { title: 'Vedanta Philosophy', url: '#', type: 'encyclopedia' }
        ]
      },
      {
        id: 'jain-philosophy',
        name: 'Jain Philosophy',
        period: 'Ancient',
        years: '6th century BCE onwards',
        region: 'India',
        description: 'Philosophy of Jainism emphasizing non-violence and asceticism',
        detailedDescription: 'Jain philosophy focuses on Ahimsa (non-violence), Anekantavada (non-absolutism), and Moksha through renunciation. It developed alongside Buddhism and Hinduism.',
        keyIdeas: ['Ahimsa', 'Anekantavada', 'Syadvada'],
        majorThinkers: ['mahavira', 'kundakunda'],
        influences: ['Vedic religion', 'Sramana traditions'],
        challenged: ['Vedic ritualism', 'Materialist philosophies'],
        developments: ['Ethics', 'Logic', 'Ascetic practice'],
        legacy: 'Influenced Indian ethics, vegetarianism, and religious pluralism',
        color: '#84CC16',
        relatedSchools: ['vedanta', 'buddhism'],
        keyTexts: ['Tattvartha Sutra'],
        externalLinks: [
          { title: 'Jain Philosophy Overview', url: '#', type: 'encyclopedia' }
        ]
      },
      {
        id: 'presocratic',
        name: 'Pre-Socratic Philosophy',
        period: 'Ancient',
        years: '6th-5th century BCE',
        region: 'Greece',
        description: 'The first Western philosophers who sought natural explanations for phenomena',
        detailedDescription: 'The Pre-Socratic philosophers were the first thinkers in the Western tradition to attempt rational explanations of the world around them, moving away from purely mythological accounts. They laid the groundwork for all subsequent Western philosophy and science by asking fundamental questions about the nature of reality, change, and knowledge.',
        keyIdeas: ['Natural philosophy', 'Logos', 'Atomism', 'Elements theory'],
        majorThinkers: ['thales', 'heraclitus', 'democritus', 'parmenides'],
        influences: ['Mythology', 'Ancient Near Eastern thought'],
        challenged: ['Mythological explanations of nature', 'Traditional religious beliefs'],
        developments: ['Scientific method', 'Rational inquiry', 'Materialist philosophy'],
        legacy: 'Established the foundation for all subsequent Western philosophy and science',
        color: '#8B5CF6',
        relatedSchools: ['classical', 'hellenistic'],
        keyTexts: ['Fragments of Heraclitus', 'Parmenides\' Poem', 'Democritus\' Atomism'],
        externalLinks: [
          { title: 'Pre-Socratic Philosophy Overview', url: '#', type: 'encyclopedia' },
          { title: 'Early Greek Thought', url: '#', type: 'book' },
          { title: 'Ancient Philosophy Documentary', url: '#', type: 'video' }
        ]
      },
            {
        id: 'carvaka',
        name: 'Cārvāka Philosophy',
        period: 'Ancient',
        years: '6th century BCE onwards',
        region: 'India',
        description: 'An ancient Indian materialist and skeptical school of thought',
        detailedDescription: 'Cārvāka (also called Lokāyata) was a materialist and hedonist school in ancient India. It rejected the authority of the Vedas, denied the existence of an afterlife, and emphasized direct perception (pratyakṣa) as the only valid source of knowledge. It was opposed to ritualism, asceticism, and metaphysical speculation.',
        keyIdeas: ['Materialism', 'Hedonism', 'Skepticism', 'Pratyakṣa (perception) as knowledge'],
        majorThinkers: ['brihaspati'],
        influences: ['Sramana traditions', 'Indian rationalist thought'],
        challenged: ['Vedic authority', 'Vedanta', 'Buddhism', 'Jainism'],
        developments: ['Epistemology of perception', 'Critique of religion'],
        legacy: 'Provided the earliest form of materialism in India and influenced later rationalist traditions',
        color: '#EA580C',
        relatedSchools: ['vedanta', 'jain-philosophy', 'buddhism'],
        keyTexts: ['Fragments preserved in later critiques'],
        externalLinks: [
          { title: 'Cārvāka / Lokāyata Philosophy', url: '#', type: 'encyclopedia' }
        ]
      },
      {
        id: 'buddhism',
        name: 'Buddhist Philosophy',
        period: 'Ancient',
        years: '5th century BCE onwards',
        region: 'India',
        description: 'A heterodox Indian philosophy founded by the Buddha',
        detailedDescription: 'Buddhist philosophy rejects Vedic authority, emphasizing the Four Noble Truths and the Eightfold Path. It develops doctrines of impermanence, non-self, and dependent origination.',
        keyIdeas: ['Impermanence (anicca)', 'Non-self (anatta)', 'Dependent origination'],
        majorThinkers: ['buddha', 'nāgārjuna', 'vasubandhu'],
        influences: ['Sramana traditions'],
        challenged: ['Vedic orthodoxy', 'Atman doctrine'],
        developments: ['Epistemology', 'Logic', 'Madhyamaka and Yogacara'],
        legacy: 'Spread across Asia and shaped global philosophy and religion',
        color: '#C026D3',
        relatedSchools: ['jain-philosophy', 'carvaka'],
        keyTexts: ['Dhammapada', 'Mūlamadhyamakakārikā', 'Abhidharmakosha'],
        externalLinks: [
          { title: 'Buddhist Philosophy', url: '#', type: 'encyclopedia' }
        ]
      },
      {
        id: 'eastern-ancient',
        name: 'Ancient Eastern Philosophy',
        period: 'Ancient',
        years: '6th century BCE - 6th century CE',
        region: 'Asia',
        description: 'Diverse philosophical traditions from India, China, and surrounding regions',
        detailedDescription: 'Ancient Eastern philosophy encompasses rich traditions from India, China, and other Asian cultures. These philosophies often integrated spiritual practice with philosophical inquiry, emphasizing practical wisdom for liberation from suffering and harmonious living.',
        keyIdeas: ['Dharma', 'Karma', 'The Way (Dao)', 'Non-dualism', 'Middle Way'],
        majorThinkers: ['buddha', 'confucius', 'laozi', 'nagarjuna'],
        influences: ['Vedic traditions', 'Social upheaval', 'Religious practices'],
        challenged: ['Caste system', 'Ritual orthodoxy', 'Excessive materialism'],
        developments: ['Meditation practices', 'Ethical social systems', 'Non-violent philosophy'],
        legacy: 'Continues to influence billions and modern mindfulness practices',
        color: '#F59E0B',
        relatedSchools: [],
        keyTexts: ['Dhammapada', 'Analects', 'Tao Te Ching', 'Lotus Sutra'],
        externalLinks: [
          { title: 'Eastern Philosophy Introduction', url: '#', type: 'encyclopedia' },
          { title: 'Buddhism and Philosophy', url: '#', type: 'course' },
          { title: 'Taoism Explained', url: '#', type: 'video' }
        ]
      },
      {
        id: 'ancient-indian-political-thought',
        name: 'Ancient Indian Political Thought',
        period: 'Ancient',
        years: '4th century BCE onwards',
        region: 'India',
        description: 'Indian traditions of statecraft and political theory',
        detailedDescription: 'Philosophy of politics and governance in ancient India, particularly through texts like Arthashastra and Dharmaśāstra, focusing on power, justice, and order.',
        keyIdeas: ['Rajadharma', 'Arthashastra', 'Dharma'],
        majorThinkers: ['chanakya', 'manu'],
        influences: ['Vedic tradition', 'Mahabharata'],
        challenged: ['Anarchy', 'Unjust rule'],
        developments: ['Political theory', 'Law codes', 'Statecraft'],
        legacy: 'Contributed to global political philosophy and governance',
        color: '#0EA5E9',
        relatedSchools: ['vedanta', 'modern-indian-philosophy'],
        keyTexts: ['Arthashastra', 'Manusmriti'],
        externalLinks: [
          { title: 'Ancient Indian Political Thought', url: '#', type: 'encyclopedia' }
        ]
      },
      {
        id: 'classical',
        name: 'Classical Philosophy',
        period: 'Ancient',
        years: '5th-3rd century BCE',
        region: 'Greece',
        description: 'The golden age of Greek philosophy with Socrates, Plato, and Aristotle',
        detailedDescription: 'Classical Greek philosophy represents the pinnacle of ancient philosophical achievement. This period saw the development of systematic approaches to ethics, politics, metaphysics, and epistemology that continue to influence Western thought today. The three great figures - Socrates, Plato, and Aristotle - each built upon their predecessors while developing distinctive philosophical systems.',
        keyIdeas: ['Virtue ethics', 'Theory of Forms', 'Logic', 'Political philosophy'],
        majorThinkers: ['socrates', 'plato', 'aristotle'],
        influences: ['Pre-Socratic philosophy', 'Sophists'],
        challenged: ['Sophistry', 'Moral relativism', 'Unreflective life'],
        developments: ['Systematic logic', 'Ethical theory', 'Political science', 'Metaphysics'],
        legacy: 'Established the fundamental questions and methods of Western philosophy',
        color: '#3B82F6',
        relatedSchools: ['presocratic', 'hellenistic'],
        keyTexts: ['Republic', 'Nicomachean Ethics', 'Metaphysics', 'Apology'],
        externalLinks: [
          { title: 'Classical Philosophy Guide', url: '#', type: 'encyclopedia' },
          { title: 'Ancient Greek Philosophy Course', url: '#', type: 'course' },
          { title: 'Plato and Aristotle Compared', url: '#', type: 'video' }
        ]
      },
      {
        id: 'hellenistic',
        name: 'Hellenistic Philosophy',
        period: 'Ancient',
        years: '3rd century BCE - 3rd century CE',
        region: 'Mediterranean',
        description: 'Practical philosophies focused on achieving happiness and tranquility',
        detailedDescription: 'Hellenistic philosophy emerged in the wake of Alexander the Great\'s conquests and the decline of the Greek city-states. These schools focused on practical wisdom for living well in an uncertain world, emphasizing personal tranquility and ethical guidance over abstract metaphysical speculation.',
        keyIdeas: ['Ataraxia', 'Practical wisdom', 'Cosmopolitanism', 'Physics and ethics'],
        majorThinkers: ['epicurus', 'zeno-of-citium', 'sextus-empiricus'],
        influences: ['Classical philosophy', 'Political instability'],
        challenged: ['Academic dogmatism', 'Political engagement over personal peace'],
        developments: ['Skeptical method', 'Therapeutic philosophy', 'Cosmopolitan ethics'],
        legacy: 'Influenced later therapeutic approaches to philosophy and psychology',
        color: '#10B981',
        relatedSchools: ['classical', 'christian-philosophy'],
        keyTexts: ['Letter to Menoeceus', 'Meditations of Marcus Aurelius', 'Outlines of Pyrrhonism'],
        externalLinks: [
          { title: 'Hellenistic Philosophy Overview', url: '#', type: 'encyclopedia' },
          { title: 'Stoicism and Modern Life', url: '#', type: 'article' },
          { title: 'Ancient Wisdom for Modern Times', url: '#', type: 'video' }
        ]
      },
        {
        id: 'nyaya',
        name: 'Nyāya Philosophy',
        period: 'Ancient',
        years: '2nd century BCE onwards',
        region: 'India',
        description: 'A school of logic and epistemology in Hindu philosophy',
        detailedDescription: 'Nyāya emphasizes logic, epistemology, and methods of reasoning. It identifies four valid sources of knowledge: perception, inference, comparison, and testimony. Nyāya contributed significantly to Indian debates on metaphysics and theology.',
        keyIdeas: ['Logic', 'Epistemology', 'Inference (anumāna)'],
        majorThinkers: ['gautama', 'uddyoṭakara', 'gaṅgeśa'],
        influences: ['Vedic tradition'],
        challenged: ['Buddhism', 'Carvaka'],
        developments: ['Indian logic', 'Epistemology'],
        legacy: 'Formed the foundation for Indian logic and debate traditions',
        color: '#0F766E',
        relatedSchools: ['vaisheshika', 'vedanta'],
        keyTexts: ['Nyāya Sūtras'],
        externalLinks: [
          { title: 'Nyāya Philosophy', url: '#', type: 'encyclopedia' }
        ]
      },
      {
        id: 'vaisheshika',
        name: 'Vaiśeṣika Philosophy',
        period: 'Ancient',
        years: '2nd century BCE onwards',
        region: 'India',
        description: 'An atomistic school of Indian philosophy',
        detailedDescription: 'Vaiśeṣika explains the physical world through atomism and categorization. It identifies substances, qualities, and motions as categories of reality. It often worked in tandem with Nyāya.',
        keyIdeas: ['Atomism', 'Categories (padārthas)', 'Metaphysics'],
        majorThinkers: ['kanada'],
        influences: ['Nyāya', 'Vedic tradition'],
        challenged: ['Buddhism', 'Vedanta'],
        developments: ['Metaphysics of atoms', 'Categorical analysis'],
        legacy: 'Influenced Indian physics, metaphysics, and logic',
        color: '#6D28D9',
        relatedSchools: ['nyaya'],
        keyTexts: ['Vaiśeṣika Sūtra'],
        externalLinks: [
          { title: 'Vaiśeṣika Philosophy', url: '#', type: 'encyclopedia' }
        ]
      },
      {
        id: 'samkhya',
        name: 'Sāṃkhya Philosophy',
        period: 'Ancient',
        years: '6th century BCE onwards',
        region: 'India',
        description: 'A dualist school distinguishing between consciousness and matter',
        detailedDescription: 'Sāṃkhya is one of the oldest systematic schools of Indian philosophy. It posits two ultimate realities: Purusha (consciousness) and Prakriti (matter). Its framework influenced Yoga and Vedānta.',
        keyIdeas: ['Dualism', 'Purusha-Prakriti distinction', 'Evolution of cosmos'],
        majorThinkers: ['kapila', 'ishvarakrishna'],
        influences: ['Upanishads'],
        challenged: ['Vedanta monism', 'Carvaka materialism'],
        developments: ['Metaphysical dualism', 'Cosmology'],
        legacy: 'Influenced Yoga, Buddhism, and Vedānta metaphysics',
        color: '#B45309',
        relatedSchools: ['yoga', 'vedanta'],
        keyTexts: ['Sāṃkhya Kārikā'],
        externalLinks: [
          { title: 'Sāṃkhya Philosophy', url: '#', type: 'encyclopedia' }
        ]
      },
      {
        id: 'yoga',
        name: 'Yoga Philosophy',
        period: 'Ancient',
        years: '2nd century BCE onwards',
        region: 'India',
        description: 'A practical and spiritual system of self-realization',
        detailedDescription: 'Yoga is closely related to Sāṃkhya but emphasizes practice. Codified by Patañjali, it prescribes an eightfold path to liberation through meditation, ethics, and concentration.',
        keyIdeas: ['Eightfold path (Ashtanga Yoga)', 'Meditation', 'Liberation'],
        majorThinkers: ['patanjali'],
        influences: ['Sāṃkhya'],
        challenged: ['Materialism'],
        developments: ['Meditative psychology', 'Ethical practice'],
        legacy: 'Yoga became a global spiritual and physical practice',
        color: '#1E40AF',
        relatedSchools: ['samkhya', 'vedanta'],
        keyTexts: ['Yoga Sūtras of Patañjali'],
        externalLinks: [
          { title: 'Yoga Philosophy', url: '#', type: 'encyclopedia' }
        ]
      },
      {
        id: 'ajivika',
        name: 'Ājīvika Philosophy',
        period: 'Ancient',
        years: '5th century BCE – 14th century CE',
        region: 'India',
        description: 'An ascetic, heterodox school emphasizing absolute determinism',
        detailedDescription: 'The Ājīvikas were a śramaṇa movement contemporaneous with Buddhism and Jainism. They upheld a strict doctrine of niyati (fate), teaching that all events are predetermined and beyond human control. They rejected the moral efficacy of karma as taught by Buddhists, Jains, and Hindus. Though their texts are lost, accounts survive through Buddhist and Jain sources.',
        keyIdeas: ['Determinism', 'Niyati (fate)', 'Asceticism'],
        majorThinkers: ['makkhali gosala'],
        influences: ['Śramaṇa traditions'],
        challenged: ['Buddhism', 'Jainism', 'Hindu orthodoxy'],
        developments: ['Fatalism in Indian thought'],
        legacy: 'Eventually declined but influenced Indian debates on free will, determinism, and karma',
        color: '#9333EA',
        relatedSchools: ['buddhism', 'jain-philosophy', 'carvaka'],
        keyTexts: ['No surviving primary texts; references in Buddhist and Jain canons'],
        externalLinks: [
          { title: 'Ājīvika Philosophy', url: '#', type: 'encyclopedia' }
        ]
      },
      {
        id: 'mimamsa',
        name: 'Mīmāṃsā Philosophy',
        period: 'Ancient',
        years: '3rd century BCE onwards',
        region: 'India',
        description: 'A school focused on ritual and interpretation of the Vedas',
        detailedDescription: 'Mīmāṃsā emphasizes dharma and Vedic ritual as central to life. It provides a systematic method for interpreting Vedic texts and is foundational to Hindu law and ritual practice.',
        keyIdeas: ['Dharma', 'Vedic authority', 'Hermeneutics'],
        majorThinkers: ['jaimini', 'kumārila bhaṭṭa'],
        influences: ['Vedic ritualism'],
        challenged: ['Buddhism', 'Carvaka'],
        developments: ['Hermeneutics', 'Philosophy of language'],
        legacy: 'Shaped Hindu ritual practice and law',
        color: '#065F46',
        relatedSchools: ['vedanta'],
        keyTexts: ['Mīmāṃsā Sūtras'],
        externalLinks: [
          { title: 'Mīmāṃsā Philosophy', url: '#', type: 'encyclopedia' }
        ]
      },
      {
        id: 'african-philosophy',
        name: 'African Philosophy',
        period: 'Ancient',
        years: 'Ancient to modern',
        region: 'Africa',
        description: 'Philosophy rooted in African traditions, oral narratives, and cultural worldviews',
        detailedDescription: 'African philosophy involves indigenous systems of thought, ethics, metaphysics, and communal worldviews expressed through oral traditions, proverbs, myths, and later modern academic philosophy.',
        keyIdeas: ['Ubuntu', 'Communalism', 'Ethics of harmony'],
        majorThinkers: ['ptahhotep', 'augustine', 'kwame nkrumah'],
        influences: ['Oral traditions', 'Religion', 'Colonial encounters'],
        challenged: ['Eurocentrism', 'Colonial domination'],
        developments: ['Ethics', 'Political thought', 'Hermeneutics'],
        legacy: 'Contributed to postcolonial identity, ethics, and global philosophy',
        color: '#EF4444',
        relatedSchools: ['indigenous-philosophy', 'modern-philosophy'],
        keyTexts: ['Ptahhotep’s Maxims', 'Augustine’s Confessions'],
        externalLinks: [
          { title: 'African Philosophy Overview', url: '#', type: 'encyclopedia' }
        ]
      },
      {
        id: 'indigenous-philosophy',
        name: 'Indigenous Philosophy',
        period: 'Ancient',
        years: 'Timeless',
        region: 'Global Indigenous Cultures',
        description: 'Philosophical systems rooted in indigenous traditions and worldviews',
        detailedDescription: 'Indigenous philosophy emphasizes interconnectedness of all beings, environmental stewardship, oral wisdom, myth, and rituals as vehicles for philosophy.',
        keyIdeas: ['Harmony with nature', 'Spiritual ecology', 'Community wisdom'],
        majorThinkers: [],
        influences: ['Myth', 'Ritual', 'Land-based traditions'],
        challenged: ['Colonialism', 'Western rationalism'],
        developments: ['Ethics of sustainability', 'Spiritual metaphysics'],
        legacy: 'Informs ecological ethics and cultural revitalization',
        color: '#6366F1',
        relatedSchools: ['african-philosophy', 'eastern-ancient'],
        keyTexts: ['Oral traditions', 'Sacred stories'],
        externalLinks: [
          { title: 'Indigenous Philosophy', url: '#', type: 'encyclopedia' }
        ]
      },      
      {
        id: 'vaishnavism',
        name: 'Vaishnavism',
        period: 'Ancient',
        years: '1st millennium BCE onwards',
        region: 'India',
        description: 'A Hindu tradition centered on devotion to Vishnu',
        detailedDescription: 'Vaishnavism emphasizes bhakti (devotion) to Vishnu and his avatars such as Krishna and Rama. It integrates theology, metaphysics, and devotional practice.',
        keyIdeas: ['Bhakti', 'Avatar doctrine', 'Moksha'],
        majorThinkers: ['ramanuja', 'chaitanya', 'madhva'],
        influences: ['Vedic tradition', 'Upanishads'],
        challenged: ['Ritualism', 'Caste dominance'],
        developments: ['Devotional movements', 'Temple worship', 'Theology'],
        legacy: 'Major Hindu religious and philosophical tradition',
        color: '#F43F5E',
        relatedSchools: ['bhakti-philosophy', 'vedanta'],
        keyTexts: ['Bhagavad Gita', 'Bhagavata Purana'],
        externalLinks: [
          { title: 'Vaishnavism', url: '#', type: 'encyclopedia' }
        ]
      },
      {
        id: 'bhakti-philosophy',
        name: 'Bhakti Philosophy',
        period: 'Ancient',
        years: '1st millennium CE onwards',
        region: 'India',
        description: 'Philosophy of devotion in Hinduism',
        detailedDescription: 'Bhakti philosophy emphasizes love and devotion to a personal deity as the path to liberation, transcending ritualism and caste hierarchies.',
        keyIdeas: ['Devotion', 'Equality before God', 'Love as liberation'],
        majorThinkers: ['kabir', 'mirabai', 'tulsidas'],
        influences: ['Vaishnavism', 'Shaivism', 'Sufism'],
        challenged: ['Ritualism', 'Caste hierarchy'],
        developments: ['Devotional poetry', 'Bhakti movements'],
        legacy: 'Shaped Indian culture, literature, and spirituality',
        color: '#3B82F6',
        relatedSchools: ['vaishnavism', 'vedanta'],
        keyTexts: ['Bhakti poems', 'Bhagavata Purana'],
        externalLinks: [
          { title: 'Bhakti Movement', url: '#', type: 'encyclopedia' }
        ]
      },      
    ]
  },
  {
    id: 'medieval',
    name: 'Medieval Philosophy',
    years: '4th - 14th century CE',
    description: 'The synthesis of religious faith and philosophical reason',
    schools: [
      {
        id: 'christian-philosophy',
        name: 'Christian Philosophy',
        period: 'Medieval',
        years: '4th-14th century CE',
        region: 'Europe, North Africa',
        description: 'Integration of Christian theology with Greek philosophical methods',
        detailedDescription: 'Christian philosophy emerged as early Christian thinkers sought to reconcile their faith with the sophisticated philosophical traditions of Greece and Rome. This synthesis created new approaches to questions of existence, knowledge, and morality within a theistic framework.',
        keyIdeas: ['Faith and reason', 'Divine illumination', 'Natural theology', 'Scholasticism'],
        majorThinkers: ['augustine', 'aquinas', 'anselm', 'duns-scotus'],
        influences: ['Platonism', 'Aristotelianism', 'Christian doctrine'],
        challenged: ['Pagan philosophy', 'Pure rationalism', 'Heretical doctrines'],
        developments: ['Scholastic method', 'Natural law theory', 'Proofs for God\'s existence'],
        legacy: 'Shaped Western intellectual tradition and university education',
        color: '#DC2626',
        relatedSchools: ['islamic-philosophy', 'jewish-philosophy'],
        keyTexts: ['Confessions', 'Summa Theologica', 'City of God', 'Proslogion'],
        externalLinks: [
          { title: 'Medieval Christian Philosophy', url: '#', type: 'encyclopedia' },
          { title: 'Aquinas and Aristotle', url: '#', type: 'article' },
          { title: 'Scholastic Method Explained', url: '#', type: 'video' }
        ]
      },
       {
        id: 'scholasticism',
        name: 'Scholasticism',
        period: 'Medieval',
        years: '12th-17th century',
        region: 'Europe',
        description: 'A method of philosophy and theology based on dialectical reasoning',
        detailedDescription: 'Scholasticism sought to reconcile faith and reason through logical analysis of theological and philosophical problems, heavily influenced by Aristotle.',
        keyIdeas: ['Faith and reason', 'Dialectical method', 'Universals'],
        majorThinkers: ['anselm', 'aquinas', 'duns scotus'],
        influences: ['Aristotle', 'Christian theology'],
        challenged: ['Mysticism', 'Islamic philosophy'],
        developments: ['Systematic theology', 'Logic', 'Ethics'],
        legacy: 'Created the intellectual framework of medieval universities',
        color: '#2563EB',
        relatedSchools: ['christian-philosophy'],
        keyTexts: ['Summa Theologica', 'Cur Deus Homo'],
        externalLinks: [
          { title: 'Scholasticism', url: '#', type: 'encyclopedia' }
        ]
      },
      {
        id: 'islamic-philosophy',
        name: 'Islamic Philosophy',
        period: 'Medieval',
        years: '8th-12th century CE',
        region: 'Middle East, Spain, Central Asia',
        description: 'Preservation and advancement of Greek philosophy within Islamic framework',
        detailedDescription: 'Islamic philosophy played a crucial role in preserving and developing Greek philosophical texts during the European Dark Ages. Islamic philosophers made significant original contributions while working within an Islamic theological framework.',
        keyIdeas: ['Unity of truth', 'Rational theology', 'Aristotelian metaphysics', 'Medical philosophy'],
        majorThinkers: ['al-kindi', 'al-farabi', 'avicenna', 'averroes'],
        influences: ['Aristotelianism', 'Neoplatonism', 'Islamic theology'],
        challenged: ['Religious literalism', 'Anti-philosophical theology'],
        developments: ['Logic and methodology', 'Medical theory', 'Political philosophy'],
        legacy: 'Preserved and transmitted Greek philosophy to Medieval Europe',
        color: '#059669',
        relatedSchools: ['christian-philosophy', 'jewish-philosophy'],
        keyTexts: ['The Incoherence of the Philosophers', 'The Book of Healing', 'The Perfect State'],
        externalLinks: [
          { title: 'Islamic Philosophy Overview', url: '#', type: 'encyclopedia' },
          { title: 'Averroes and Aristotle', url: '#', type: 'article' },
          { title: 'Medieval Islamic Thought', url: '#', type: 'course' }
        ]
      },
      {
        id: 'jewish-philosophy',
        name: 'Jewish Philosophy',
        period: 'Medieval',
        years: '9th-15th century CE',
        region: 'Spain, France, Germany',
        description: 'Synthesis of Jewish theology with Aristotelian and Platonic philosophy',
        detailedDescription: 'Jewish philosophy in the medieval period sought to harmonize Jewish religious teachings with the philosophical methods and insights of Greek philosophy, particularly Aristotelianism, creating sophisticated theological and philosophical systems.',
        keyIdeas: ['Maimonidean rationalism', 'Divine attributes', 'Prophecy', 'Jewish law and philosophy'],
        majorThinkers: ['saadia-gaon', 'maimonides', 'gersonides', 'hasdai-crescas'],
        influences: ['Aristotelianism', 'Islamic philosophy', 'Jewish theology'],
        challenged: ['Anthropomorphism', 'Literal interpretation', 'Philosophical materialism'],
        developments: ['Negative theology', 'Rational commandments', 'Philosophical psychology'],
        legacy: 'Influenced both Jewish thought and Christian scholasticism',
        color: '#7C3AED',
        relatedSchools: ['christian-philosophy', 'islamic-philosophy'],
        keyTexts: ['Guide for the Perplexed', 'Book of Beliefs and Opinions', 'Wars of the Lord'],
        externalLinks: [
          { title: 'Medieval Jewish Philosophy', url: '#', type: 'encyclopedia' },
          { title: 'Maimonides\' Philosophy', url: '#', type: 'article' },
          { title: 'Jewish Thought in the Middle Ages', url: '#', type: 'course' }
        ]
      }
    ]
  },
  {
    id: 'renaissance',
    name: 'Renaissance & Early Modern',
    years: '14th - 17th century CE',
    description: 'Revival of classical learning and emergence of modern philosophical methods',
    schools: [
      {
        id: 'humanism',
        name: 'Renaissance Humanism',
        period: 'Renaissance',
        years: '14th-16th century CE',
        region: 'Italy, Northern Europe',
        description: 'Emphasis on human dignity, classical learning, and secular concerns',
        detailedDescription: 'Renaissance Humanism marked a shift toward human-centered philosophy, emphasizing the dignity and worth of the individual. Humanists sought to revive classical learning while developing new approaches to education, politics, and human potential.',
        keyIdeas: ['Human dignity', 'Classical revival', 'Secular education', 'Individual potential'],
        majorThinkers: ['petrarch', 'pico-della-mirandola', 'erasmus'],
        influences: ['Classical antiquity', 'Christian philosophy', 'Byzantine scholarship'],
        challenged: ['Medieval scholasticism', 'Exclusive focus on theology'],
        developments: ['Liberal arts education', 'Critical textual scholarship', 'Political humanism'],
        legacy: 'Shaped modern education and democratic ideals',
        color: '#EF4444',
        relatedSchools: ['rationalism'],
        keyTexts: ['Oration on the Dignity of Man', 'The Praise of Folly', 'Letters to Posterity'],
        externalLinks: [
          { title: 'Renaissance Humanism Overview', url: '#', type: 'encyclopedia' },
          { title: 'Pico della Mirandola\'s Oration', url: '#', type: 'book' },
          { title: 'Renaissance Philosophy', url: '#', type: 'video' }
        ]
      },
      {
        id: 'rationalism',
        name: 'Rationalism',
        period: 'Early Modern',
        years: '17th century CE',
        region: 'France, Netherlands, Germany',
        description: 'Knowledge comes primarily through reason and innate ideas',
        detailedDescription: 'Rationalism emerged as a response to skepticism and the need for certain knowledge. Rationalist philosophers believed that reason, rather than sensory experience, was the primary source of knowledge and that certain truths could be known independently of experience.',
        keyIdeas: ['Innate ideas', 'Methodical doubt', 'Mathematical certainty', 'Mind-body dualism'],
        majorThinkers: ['descartes', 'spinoza', 'leibniz'],
        influences: ['Mathematical revolution', 'Scientific method', 'Classical skepticism'],
        challenged: ['Aristotelian physics', 'Scholastic method', 'Sensory knowledge'],
        developments: ['Modern epistemology', 'Mathematical philosophy', 'Systematic metaphysics'],
        legacy: 'Established foundation for modern philosophy and scientific method',
        color: '#2563EB',
        relatedSchools: ['empiricism', 'german-idealism'],
        keyTexts: ['Meditations on First Philosophy', 'Ethics', 'Monadology', 'Discourse on Method'],
        externalLinks: [
          { title: 'Rationalist Philosophy', url: '#', type: 'encyclopedia' },
          { title: 'Descartes\' Method', url: '#', type: 'article' },
          { title: 'Continental Rationalism Course', url: '#', type: 'course' }
        ]
      },
      {
        id: 'empiricism',
        name: 'British Empiricism',
        period: 'Early Modern',
        years: '17th-18th century CE',
        region: 'Britain',
        description: 'Knowledge comes primarily through sensory experience',
        detailedDescription: 'British Empiricism developed as a systematic alternative to Continental Rationalism, arguing that all knowledge ultimately derives from sensory experience. This tradition emphasized observation, experimentation, and inductive reasoning.',
        keyIdeas: ['Tabula rasa', 'Sensory experience', 'Induction', 'Skepticism about causation'],
        majorThinkers: ['locke', 'berkeley', 'hume'],
        influences: ['Scientific revolution', 'Bacon\'s method', 'Political upheaval'],
        challenged: ['Innate ideas', 'Rationalist metaphysics', 'Certainty of causation'],
        developments: ['Modern psychology', 'Political liberalism', 'Skeptical philosophy'],
        legacy: 'Influenced modern science, psychology, and political theory',
        color: '#059669',
        relatedSchools: ['rationalism', 'german-idealism'],
        keyTexts: ['Essay Concerning Human Understanding', 'Treatise of Human Nature', 'Principles of Human Knowledge'],
        externalLinks: [
          { title: 'British Empiricism Guide', url: '#', type: 'encyclopedia' },
          { title: 'Hume\'s Skepticism', url: '#', type: 'article' },
          { title: 'Empiricist Tradition', url: '#', type: 'video' }
        ]
      }
    ]
  },
  {
    id: 'enlightenment',
    name: 'Enlightenment',
    years: '17th - 18th century CE',
    description: 'Age of reason, progress, and human rights',
    schools: [
        {
        id: 'enlightenment',
        name: 'Enlightenment Philosophy',
        period: 'Modern',
        years: '18th century',
        region: 'Europe',
        description: 'An intellectual movement emphasizing reason, liberty, and progress',
        detailedDescription: 'The Enlightenment applied reason to society, politics, science, and morality, advocating secularism, progress, and human rights.',
        keyIdeas: ['Reason', 'Progress', 'Liberty', 'Secularism'],
        majorThinkers: ['voltaire', 'kant', 'rousseau'],
        influences: ['Rationalism', 'Empiricism', 'Scientific revolution'],
        challenged: ['Absolutism', 'Religious dogma'],
        developments: ['Political theory', 'Human rights', 'Secular ethics'],
        legacy: 'Shaped modern democracies and liberal thought',
        color: '#FACC15',
        relatedSchools: ['liberalism', 'modern-philosophy'],
        keyTexts: ['The Social Contract', 'Critique of Pure Reason'],
        externalLinks: [
          { title: 'Enlightenment', url: '#', type: 'encyclopedia' }
        ]
      },
      {
        id: 'german-idealism',
        name: 'German Idealism',
        period: 'Enlightenment',
        years: '18th-19th century CE',
        region: 'Germany',
        description: 'Reality is fundamentally mental or spiritual in nature',
        detailedDescription: 'German Idealism emerged as a response to the limitations of both rationalism and empiricism. These philosophers argued that reality is fundamentally mental or spiritual, and developed sophisticated systems to explain the relationship between mind and world.',
        keyIdeas: ['Transcendental idealism', 'Absolute spirit', 'Dialectical method', 'Categorical imperative'],
        majorThinkers: ['kant', 'hegel', 'fichte', 'schelling'],
        influences: ['Rationalism vs. Empiricism debate', 'Scientific revolution', 'Political revolutions'],
        challenged: ['Dogmatic metaphysics', 'Naive realism', 'Moral heteronomy'],
        developments: ['Critical philosophy', 'Moral autonomy', 'Historical consciousness'],
        legacy: 'Revolutionized epistemology, ethics, and political philosophy',
        color: '#7C3AED',
        relatedSchools: ['rationalism', 'empiricism'],
        keyTexts: ['Critique of Pure Reason', 'Phenomenology of Spirit', 'Science of Knowledge'],
        externalLinks: [
          { title: 'German Idealism Overview', url: '#', type: 'encyclopedia' },
          { title: 'Kant\'s Critical Philosophy', url: '#', type: 'course' },
          { title: 'Hegel\'s Dialectic Explained', url: '#', type: 'video' }
        ]
      },
      {
        id: 'french-enlightenment',
        name: 'French Enlightenment',
        period: 'Enlightenment',
        years: '18th century CE',
        region: 'France',
        description: 'Reason, progress, and criticism of traditional authority',
        detailedDescription: 'The French Enlightenment emphasized the power of reason to reform society and advance knowledge. These thinkers challenged traditional authority and promoted ideals of progress, tolerance, and human rights.',
        keyIdeas: ['Reason', 'Progress', 'Natural rights', 'Religious tolerance', 'Social contract'],
        majorThinkers: ['voltaire', 'rousseau', 'diderot', 'montesquieu'],
        influences: ['British empiricism', 'Scientific revolution', 'Political absolutism'],
        challenged: ['Religious authority', 'Political absolutism', 'Traditional social hierarchy'],
        developments: ['Democratic theory', 'Religious tolerance', 'Educational reform'],
        legacy: 'Inspired democratic revolutions and modern human rights',
        color: '#DC2626',
        relatedSchools: ['german-idealism'],
        keyTexts: ['Social Contract', 'Spirit of the Laws', 'Candide', 'Encyclopedia'],
        externalLinks: [
          { title: 'French Enlightenment', url: '#', type: 'encyclopedia' },
          { title: 'Voltaire and Religious Tolerance', url: '#', type: 'article' },
          { title: 'Age of Reason Documentary', url: '#', type: 'video' }
        ]
      }
    ]
  },
  {
    id: 'modern',
    name: '19th Century Philosophy',
    years: '19th century CE',
    description: 'Revolutionary developments in ethics, politics, and human understanding',
    schools: [
      {
        id: 'utilitarianism',
        name: 'Utilitarianism',
        period: '19th Century',
        years: '18th-19th century CE',
        region: 'Britain',
        description: 'Actions are right when they promote the greatest happiness for the greatest number',
        detailedDescription: 'Utilitarianism emerged as a systematic approach to ethics based on consequences rather than duties or virtues. It provided a seemingly scientific method for moral decision-making and social reform.',
        keyIdeas: ['Greatest happiness principle', 'Consequentialism', 'Hedonistic calculus', 'Social reform'],
        majorThinkers: ['bentham', 'mill', 'sidgwick'],
        influences: ['British empiricism', 'Industrial revolution', 'Social problems'],
        challenged: ['Deontological ethics', 'Traditional moral intuitions', 'Social inequality'],
        developments: ['Welfare economics', 'Social policy', 'Animal rights theory'],
        legacy: 'Foundational to modern economics, public policy, and ethics',
        color: '#F59E0B',
        relatedSchools: ['empiricism'],
        keyTexts: ['Introduction to the Principles of Morals and Legislation', 'On Liberty', 'The Methods of Ethics'],
        externalLinks: [
          { title: 'Utilitarian Ethics', url: '#', type: 'encyclopedia' },
          { title: 'Mill\'s Harm Principle', url: '#', type: 'article' },
          { title: 'Applied Ethics Course', url: '#', type: 'course' }
        ]
      },
      {
        id: 'liberalism',
        name: 'Liberalism',
        period: 'Modern',
        years: '17th-19th century',
        region: 'Europe, North America',
        description: 'Political philosophy centered on liberty, equality, and rights',
        detailedDescription: 'Liberalism emphasizes individual rights, rule of law, representative democracy, and free markets.',
        keyIdeas: ['Natural rights', 'Individual liberty', 'Social contract'],
        majorThinkers: ['locke', 'mill', 'montesquieu'],
        influences: ['Enlightenment', 'Empiricism'],
        challenged: ['Absolutism', 'Feudalism'],
        developments: ['Democratic theory', 'Human rights'],
        legacy: 'Foundation of modern democracies',
        color: '#0891B2',
        relatedSchools: ['enlightenment', 'modern-indian-philosophy'],
        keyTexts: ['Two Treatises of Government', 'On Liberty'],
        externalLinks: [
          { title: 'Liberalism', url: '#', type: 'encyclopedia' }
        ]
      },
      {
        id: 'existentialism-precursors',
        name: 'Existentialist Precursors',
        period: '19th Century',
        years: '19th century CE',
        region: 'Denmark, Germany, Russia',
        description: 'Individual existence, freedom, and choice as fundamental concerns',
        detailedDescription: 'The precursors to existentialism challenged the systematic, rational approaches of previous philosophy, emphasizing instead the concrete, lived experience of individuals facing anxiety, freedom, and the search for meaning.',
        keyIdeas: ['Subjective truth', 'Anxiety', 'Will to power', 'Underground consciousness'],
        majorThinkers: ['kierkegaard', 'nietzsche', 'dostoevsky'],
        influences: ['German idealism', 'Romantic movement', 'Modern alienation'],
        challenged: ['Systematic philosophy', 'Christian morality', 'Rational optimism'],
        developments: ['Psychology of existence', 'Critique of modernity', 'Artistic philosophy'],
        legacy: 'Birthed existentialism and influenced depth psychology',
        color: '#7C2D12',
        relatedSchools: ['german-idealism', 'continental'],
        keyTexts: ['Fear and Trembling', 'Thus Spoke Zarathustra', 'Notes from Underground'],
        externalLinks: [
          { title: 'Existentialist Precursors', url: '#', type: 'encyclopedia' },
          { title: 'Kierkegaard vs Hegel', url: '#', type: 'article' },
          { title: 'Nietzsche\'s Philosophy', url: '#', type: 'video' }
        ]
      },
      {
        id: 'marxism',
        name: 'Marxism',
        period: '19th Century',
        years: '19th century CE',
        region: 'Germany, Britain',
        description: 'Historical materialism and critique of capitalist economic systems',
        detailedDescription: 'Marxism developed as both a philosophical system and a program for social change, combining German idealist dialectics with French socialist politics and British economic analysis to create a comprehensive critique of capitalism.',
        keyIdeas: ['Historical materialism', 'Class struggle', 'Dialectical materialism', 'Alienation'],
        majorThinkers: ['marx', 'engels'],
        influences: ['German idealism', 'British economics', 'French socialism'],
        challenged: ['Capitalist economics', 'Idealist philosophy', 'Political inequality'],
        developments: ['Socialist theory', 'Economic analysis', 'Revolutionary praxis'],
        legacy: 'Shaped modern political movements and economic theory',
        color: '#BE123C',
        relatedSchools: ['german-idealism'],
        keyTexts: ['Das Kapital', 'The Communist Manifesto', 'The German Ideology'],
        externalLinks: [
          { title: 'Marxist Philosophy', url: '#', type: 'encyclopedia' },
          { title: 'Historical Materialism Explained', url: '#', type: 'article' },
          { title: 'Marx\'s Economic Theory', url: '#', type: 'course' }
        ]
      }
    ]
  },
  {
    id: 'contemporary',
    name: 'Contemporary Philosophy',
    years: '20th century CE - present',
    description: 'Diverse approaches to language, consciousness, and human experience',
    schools: [
      {
        id: 'existentialism',
        name: 'Existentialism',
        period: 'Contemporary',
        years: '19th-20th century',
        region: 'Europe',
        description: 'Philosophy emphasizing individual existence, freedom, and meaning',
        detailedDescription: 'Existentialism stresses the individual’s freedom, choice, and responsibility in creating meaning in an absurd or indifferent universe.',
        keyIdeas: ['Freedom', 'Authenticity', 'Absurdity'],
        majorThinkers: ['kierkegaard', 'nietzsche', 'sartre', 'camus'],
        influences: ['German idealism', 'Phenomenology'],
        challenged: ['Determinism', 'Essentialism'],
        developments: ['Literature', 'Psychology', 'Theology'],
        legacy: 'Shaped 20th-century literature, theology, and continental philosophy',
        color: '#BE123C',
        relatedSchools: ['marxism', 'feminism'],
        keyTexts: ['Being and Nothingness', 'The Myth of Sisyphus'],
        externalLinks: [
          { title: 'Existentialism', url: '#', type: 'encyclopedia' }
        ]
      },
      {
        id: 'feminism',
        name: 'Feminist Philosophy',
        period: 'Contemporary',
        years: '19th century onwards',
        region: 'Global',
        description: 'Philosophy addressing gender, equality, and social justice',
        detailedDescription: 'Feminist philosophy critiques patriarchy, examines the construction of gender, and promotes equality and liberation.',
        keyIdeas: ['Gender equality', 'Intersectionality', 'Critique of patriarchy'],
        majorThinkers: ['mary wollstonecraft', 'simone de beauvoir', 'bell hooks'],
        influences: ['Liberalism', 'Marxism'],
        challenged: ['Patriarchy', 'Sexism'],
        developments: ['Ethics', 'Epistemology', 'Social philosophy'],
        legacy: 'Reshaped philosophy, politics, and social theory',
        color: '#DB2777',
        relatedSchools: ['existentialism', 'marxism'],
        keyTexts: ['A Vindication of the Rights of Woman', 'The Second Sex'],
        externalLinks: [
          { title: 'Feminist Philosophy', url: '#', type: 'encyclopedia' }
        ]
      },
      {
        id: 'modern-indian-philosophy',
        name: 'Modern Indian Philosophy',
        period: 'Contemporary',
        years: '19th-20th century',
        region: 'India',
        description: 'Indian philosophical developments under colonial and modern contexts',
        detailedDescription: 'Modern Indian philosophy includes reformist, nationalist, and spiritual thinkers addressing colonialism, identity, and modernization.',
        keyIdeas: ['Nationalism', 'Spiritual reform', 'Integration of East and West'],
        majorThinkers: ['vivekananda', 'gandhi', 'tagore', 'auro­bindo'],
        influences: ['Vedanta', 'Bhakti movements', 'Liberalism'],
        challenged: ['Colonialism', 'Caste system'],
        developments: ['Political philosophy', 'Religious reform'],
        legacy: 'Influenced Indian independence and global philosophy',
        color: '#15803D',
        relatedSchools: ['liberalism', 'ancient-indian-political-thought'],
        keyTexts: ['Hind Swaraj', 'The Life Divine'],
        externalLinks: [
          { title: 'Modern Indian Philosophy', url: '#', type: 'encyclopedia' }
        ]
      },
      {
        id: 'analytic',
        name: 'Analytic Philosophy',
        period: 'Contemporary',
        years: '20th century CE - present',
        region: 'Britain, United States',
        description: 'Emphasis on logical analysis, language, and scientific methods',
        detailedDescription: 'Analytic philosophy emerged in the early 20th century with an emphasis on clarity, logical rigor, and the analysis of language. It became the dominant tradition in the English-speaking world and emphasizes precise argumentation and scientific methodology.',
        keyIdeas: ['Logical analysis', 'Language philosophy', 'Empirical methods', 'Conceptual clarity'],
        majorThinkers: ['russell', 'wittgenstein', 'quine', 'rawls'],
        influences: ['Mathematical logic', 'Scientific revolution', 'Linguistic turn'],
        challenged: ['Continental obscurity', 'Metaphysical speculation', 'Intuitive methods'],
        developments: ['Philosophy of language', 'Logic and mathematics', 'Political philosophy'],
        legacy: 'Dominant in Anglo-American universities and influences cognitive science',
        color: '#1E40AF',
        relatedSchools: ['empiricism'],
        keyTexts: ['Principia Mathematica', 'Tractatus Logico-Philosophicus', 'A Theory of Justice'],
        externalLinks: [
          { title: 'Analytic Philosophy Overview', url: '#', type: 'encyclopedia' },
          { title: 'Wittgenstein\'s Language Games', url: '#', type: 'article' },
          { title: 'Modern Logic Course', url: '#', type: 'course' }
        ]
      },
      {
        id: 'continental',
        name: 'Continental Philosophy',
        period: 'Contemporary',
        years: '20th century CE - present',
        region: 'Continental Europe',
        description: 'Focus on historical context, human experience, and interpretive methods',
        detailedDescription: 'Continental philosophy emphasizes the historical and cultural context of philosophical problems, often focusing on human experience, interpretation, and the critique of modern society and thought.',
        keyIdeas: ['Phenomenology', 'Hermeneutics', 'Deconstruction', 'Existential analysis'],
        majorThinkers: ['husserl', 'heidegger', 'sartre', 'derrida'],
        influences: ['German idealism', 'Existentialist precursors', 'Historical crises'],
        challenged: ['Scientific positivism', 'Analytic methods', 'Objective truth claims'],
        developments: ['Phenomenological method', 'Existential psychoanalysis', 'Postmodern critique'],
        legacy: 'Influences humanities, psychology, and cultural theory',
        color: '#92400E',
        relatedSchools: ['existentialism-precursors', 'german-idealism'],
        keyTexts: ['Being and Time', 'Being and Nothingness', 'Of Grammatology'],
        externalLinks: [
          { title: 'Continental Philosophy Guide', url: '#', type: 'encyclopedia' },
          { title: 'Phenomenology Explained', url: '#', type: 'video' },
          { title: 'Existentialism Course', url: '#', type: 'course' }
        ]
      },
      {
        id: 'pragmatism',
        name: 'American Pragmatism',
        period: 'Contemporary',
        years: 'Late 19th-20th century CE',
        region: 'United States',
        description: 'Truth and meaning are determined by practical consequences',
        detailedDescription: 'American Pragmatism emerged as a distinctly American philosophical tradition that emphasized the practical consequences of ideas and beliefs. Pragmatists argued that the meaning and truth of concepts should be understood in terms of their practical effects.',
        keyIdeas: ['Pragmatic maxim', 'Fallibilism', 'Democratic inquiry', 'Experience-based truth'],
        majorThinkers: ['peirce', 'james', 'dewey', 'rorty'],
        influences: ['American democracy', 'Scientific method', 'Evolutionary theory'],
        challenged: ['Correspondence theory of truth', 'Foundationalism', 'Abstract metaphysics'],
        developments: ['Democratic education', 'Scientific instrumentalism', 'Anti-foundationalism'],
        legacy: 'Influenced American education, democracy, and philosophy of science',
        color: '#0D9488',
        relatedSchools: ['empiricism'],
        keyTexts: ['Pragmatism', 'Democracy and Education', 'Philosophy and the Mirror of Nature'],
        externalLinks: [
          { title: 'American Pragmatism', url: '#', type: 'encyclopedia' },
          { title: 'Dewey\'s Educational Philosophy', url: '#', type: 'article' },
          { title: 'Pragmatist Tradition', url: '#', type: 'video' }
        ]
      }
    ]
  }
];
export const allSchools: PhilosophicalSchool[] = philosophyData.flatMap(period => period.schools);