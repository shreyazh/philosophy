import { Challenge } from '../types/philosophy';

export const challengesData: Challenge[] = [
  {
    id: 'rationalism-vs-empiricism',
    name: 'Rationalism vs Empiricism',
    description: 'The fundamental debate about whether knowledge comes primarily from reason and innate ideas (rationalism) or from sensory experience (empiricism).',
    challenger: 'British Empiricism',
    challenged: 'Continental Rationalism',
    period: 'Early Modern',
    outcome: 'Kant\'s synthesis in Critical Philosophy',
    significance: 'Shaped modern epistemology and scientific method',
    externalLinks: [
      { title: 'The Great Debate: Reason vs Experience', url: '#', type: 'article' },
      { title: 'Kant\'s Synthesis Explained', url: '#', type: 'video' },
      { title: 'History of Epistemology', url: '#', type: 'course' }
    ]
  },
  {
    id: 'faith-vs-reason',
    name: 'Faith vs Reason',
    description: 'The medieval debate about the relationship between religious faith and philosophical reason, and whether they complement or conflict with each other.',
    challenger: 'Scholastic Philosophy',
    challenged: 'Pure Faith Traditions',
    period: 'Medieval',
    outcome: 'Synthesis in Thomistic philosophy',
    significance: 'Established framework for religious philosophy',
    externalLinks: [
      { title: 'Medieval Philosophy Overview', url: '#', type: 'encyclopedia' },
      { title: 'Aquinas on Faith and Reason', url: '#', type: 'article' },
      { title: 'Medieval Thought Documentary', url: '#', type: 'video' }
    ]
  },
  {
    id: 'determinism-vs-free-will',
    name: 'Determinism vs Free Will',
    description: 'The ongoing philosophical debate about whether human actions are determined by prior causes or whether humans have genuine freedom to choose their actions.',
    challenger: 'Scientific Determinism',
    challenged: 'Moral Responsibility',
    period: 'Modern to Contemporary',
    outcome: 'Ongoing debate with various compatibilist solutions',
    significance: 'Central to ethics, law, and human self-understanding',
    externalLinks: [
      { title: 'Free Will vs Determinism Debate', url: '#', type: 'encyclopedia' },
      { title: 'Neuroscience and Free Will', url: '#', type: 'article' },
      { title: 'Philosophy of Mind Course', url: '#', type: 'course' }
    ]
  },
  {
  id: 'vedanta-vs-buddhism',
  name: 'Vedānta vs Buddhism',
  description: 'Debate over the nature of self and ultimate reality: the Buddhist doctrine of anātman (no-self) versus the Vedāntic affirmation of ātman (true self).',
  challenger: 'Buddhist Philosophy',
  challenged: 'Advaita Vedānta',
  period: 'Ancient to Medieval India',
  outcome: 'Enduring debate; Vedānta became dominant in Hindu philosophy while Buddhism influenced epistemology and logic.',
  significance: 'Central to Indian metaphysics and comparative philosophy of self.',
  externalLinks: [
    { title: 'Vedānta and Buddhism Debate', url: '#', type: 'article' }
  ]
},
{
  id: 'jainism-vs-hinduism',
  name: 'Jainism vs Hindu Orthodoxy',
  description: 'Jain critique of Vedic sacrificial rituals and caste system, emphasizing non-violence (ahimsa) and spiritual equality.',
  challenger: 'Jain Philosophy',
  challenged: 'Vedic Orthodoxy',
  period: 'Ancient India',
  outcome: 'Jainism established as an independent religious-philosophical system.',
  significance: 'Introduced strong emphasis on ahimsa and pluralism (anekāntavāda).',
  externalLinks: [
    { title: 'Jain Philosophy Overview', url: '#', type: 'encyclopedia' }
  ]
},
{
  id: 'carvaka-vs-orthodox',
  name: 'Cārvāka vs Orthodox Schools',
  description: 'Materialist Cārvāka school rejected karma, rebirth, and Vedic authority, clashing with all orthodox systems.',
  challenger: 'Cārvāka (Lokāyata)',
  challenged: 'Astika (orthodox schools)',
  period: 'Ancient India',
  outcome: 'Cārvāka tradition diminished but left strong critiques of religion.',
  significance: 'India’s earliest materialist/atheist philosophy.',
  externalLinks: [
    { title: 'Cārvāka Materialism', url: '#', type: 'encyclopedia' }
  ]
},
{
  id: 'nyaya-vs-buddhist-logic',
  name: 'Nyāya vs Buddhist Logic',
  description: 'Nyāya realism clashed with Buddhist logic and epistemology on issues of perception, inference, and universals.',
  challenger: 'Buddhist Logicians (Dignāga, Dharmakīrti)',
  challenged: 'Nyāya School',
  period: 'Classical India',
  outcome: 'Mutual enrichment of Indian logic and epistemology.',
  significance: 'Led to highly developed theories of knowledge and reasoning in India.',
  externalLinks: [
    { title: 'Nyāya and Buddhist Logic', url: '#', type: 'article' }
  ]
},
{
  id: 'bhakti-vs-ritualism',
  name: 'Bhakti vs Ritualism',
  description: 'Bhakti (devotional movements) challenged rigid ritualism, caste-based barriers, and emphasized personal relationship with the divine.',
  challenger: 'Bhakti Philosophy',
  challenged: 'Vedic Ritualism',
  period: 'Medieval India',
  outcome: 'Widespread popular devotional traditions across Hinduism.',
  significance: 'Reshaped Indian religious philosophy and social practices.',
  externalLinks: [
    { title: 'Bhakti Philosophy', url: '#', type: 'encyclopedia' }
  ]
},
  {
  id: 'advaita-vs-dvaita',
  name: 'Advaita vs Dvaita Vedānta',
  description: 'The debate between Śaṅkara’s non-dualism (Brahman as the only reality) and Madhva’s dualism (eternal distinction between God and souls).',
  challenger: 'Dvaita Vedānta (Madhva)',
  challenged: 'Advaita Vedānta (Śaṅkara)',
  period: 'Medieval India',
  outcome: 'Multiple Vedāntic schools coexisted with lasting influence.',
  significance: 'Core debate on the relationship of self, world, and God in Hindu philosophy.',
  externalLinks: [
    { title: 'Vedānta Schools', url: '#', type: 'encyclopedia' }
  ]
},
{
  id: 'sankhya-vs-vedanta',
  name: 'Sāṃkhya vs Vedānta',
  description: 'Sāṃkhya dualism (Purusha–Prakriti distinction) opposed Vedāntic monism, debating the nature of self and ultimate reality.',
  challenger: 'Sāṃkhya',
  challenged: 'Vedānta',
  period: 'Ancient to Medieval India',
  outcome: 'Vedānta absorbed some Sāṃkhya ideas but maintained monism.',
  significance: 'Shaped metaphysical discourse on dualism and causation.',
  externalLinks: [
    { title: 'Sāṃkhya Philosophy', url: '#', type: 'encyclopedia' }
  ]
},
{
  id: 'mimamsa-vs-vedanta',
  name: 'Mīmāṃsā vs Vedānta',
  description: 'Mīmāṃsā emphasized ritual action and Vedic authority, while Vedānta prioritized metaphysics and liberation.',
  challenger: 'Vedānta',
  challenged: 'Mīmāṃsā',
  period: 'Classical India',
  outcome: 'Mīmāṃsā declined in popularity; Vedānta rose as dominant Hindu philosophy.',
  significance: 'Shift from ritual orthodoxy to spiritual-philosophical focus.',
  externalLinks: [
    { title: 'Mīmāṃsā and Vedānta', url: '#', type: 'article' }
  ]
},
{
  id: 'hindu-vs-islamic-thought',
  name: 'Hindu Philosophy vs Islamic Thought',
  description: 'Medieval debates between Hindu philosophers and Islamic scholars on metaphysics, theology, and ethics during Delhi Sultanate and Mughal rule.',
  challenger: 'Islamic Philosophers (e.g., Sufis, Theologians)',
  challenged: 'Hindu Philosophers (Vedānta, Nyāya, Bhakti)',
  period: 'Medieval India',
  outcome: 'Mutual influence, emergence of syncretic traditions (e.g., Sufism and Bhakti).',
  significance: 'Shaped interfaith dialogue and religious philosophy in South Asia.',
  externalLinks: [
    { title: 'Islamic Influence on Indian Philosophy', url: '#', type: 'article' }
  ]
},
{
  id: 'modern-indian-vs-colonial-thought',
  name: 'Modern Indian Philosophy vs Colonial Thought',
  description: 'Debates between Indian philosophers (e.g., Vivekananda, Aurobindo, Gandhi) and Western colonial worldviews on spirituality, rationality, and modernity.',
  challenger: 'Modern Indian Thinkers',
  challenged: 'Western Colonial Philosophy',
  period: '19th–20th century',
  outcome: 'Synthesis of Indian and Western ideas; contributed to independence and global recognition of Indian thought.',
  significance: 'Formed the basis of contemporary Indian philosophy and nationalism.',
  externalLinks: [
    { title: 'Modern Indian Philosophy', url: '#', type: 'book' }
  ]
},
  {
    id: 'idealism-vs-materialism',
    name: 'Idealism vs Materialism',
    description: 'The debate over whether reality is fundamentally mental/spiritual (idealism) or physical/material (materialism).',
    challenger: 'Materialism',
    challenged: 'Idealism',
    period: 'Ancient to Modern',
    outcome: 'Coexistence of competing schools',
    significance: 'Shaped metaphysics and philosophy of mind',
    externalLinks: [
      { title: 'Idealism vs Materialism', url: '#', type: 'article' }
    ]
  },
  {
    id: 'realism-vs-nominalism',
    name: 'Realism vs Nominalism',
    description: 'Medieval debate over the existence of universals: are they real entities or just names?',
    challenger: 'Nominalism',
    challenged: 'Scholastic Realism',
    period: 'Medieval',
    outcome: 'Divergent schools with no consensus',
    significance: 'Impacted logic, theology, and metaphysics',
    externalLinks: [
      { title: 'Nominalism and Realism', url: '#', type: 'encyclopedia' }
    ]
  },
  {
    id: 'mind-vs-body',
    name: 'Mind-Body Problem',
    description: 'Debate over the relationship between mind and body: dualism vs physicalism.',
    challenger: 'Physicalism',
    challenged: 'Cartesian Dualism',
    period: 'Modern to Contemporary',
    outcome: 'Neuroscience leans physicalist, philosophy remains divided',
    significance: 'Core to philosophy of mind',
    externalLinks: [
      { title: 'Mind-Body Problem Overview', url: '#', type: 'encyclopedia' }
    ]
  },
  {
    id: 'nature-vs-nurture',
    name: 'Nature vs Nurture',
    description: 'Debate on whether human traits are determined by genetics (nature) or environment (nurture).',
    challenger: 'Environmentalism',
    challenged: 'Nativism',
    period: 'Modern to Contemporary',
    outcome: 'Acknowledgement of interaction between both',
    significance: 'Influences psychology, sociology, education',
    externalLinks: [
      { title: 'Nature vs Nurture Debate', url: '#', type: 'article' }
    ]
  },
  {
    id: 'liberty-vs-authority',
    name: 'Liberty vs Authority',
    description: 'Debate over the balance between individual freedom and social or political authority.',
    challenger: 'Liberalism',
    challenged: 'Absolutism',
    period: 'Enlightenment to Modern',
    outcome: 'Constitutional democracies established balances',
    significance: 'Central to political philosophy',
    externalLinks: [
      { title: 'Liberty vs Authority', url: '#', type: 'encyclopedia' }
    ]
  },
  {
    id: 'reason-vs-emotion',
    name: 'Reason vs Emotion',
    description: 'The philosophical dispute over whether reason or emotion should guide moral and personal decisions.',
    challenger: 'Romanticism',
    challenged: 'Rationalism',
    period: 'Modern',
    outcome: 'Recognition of both in human life',
    significance: 'Shaped ethics and aesthetics',
    externalLinks: [
      { title: 'Reason vs Emotion', url: '#', type: 'article' }
    ]
  },
  {
    id: 'science-vs-religion',
    name: 'Science vs Religion',
    description: 'The tension between scientific explanations and religious doctrines.',
    challenger: 'Scientific Naturalism',
    challenged: 'Religious Orthodoxy',
    period: 'Modern to Contemporary',
    outcome: 'Ongoing debate with coexistence models',
    significance: 'Defines cultural worldviews',
    externalLinks: [
      { title: 'Science vs Religion', url: '#', type: 'encyclopedia' }
    ]
  },
  {
    id: 'relativism-vs-universalism',
    name: 'Relativism vs Universalism',
    description: 'Debate about whether values and truths are relative to cultures or universally valid.',
    challenger: 'Cultural Relativism',
    challenged: 'Moral Universalism',
    period: 'Contemporary',
    outcome: 'No consensus, pluralism accepted',
    significance: 'Central in ethics and anthropology',
    externalLinks: [
      { title: 'Moral Relativism vs Universalism', url: '#', type: 'article' }
    ]
  },
  {
    id: 'egoism-vs-altruism',
    name: 'Egoism vs Altruism',
    description: 'Debate over whether humans are motivated primarily by self-interest or genuine concern for others.',
    challenger: 'Psychological Egoism',
    challenged: 'Ethical Altruism',
    period: 'Ancient to Modern',
    outcome: 'Mixed evidence and philosophical positions',
    significance: 'Impacts ethics and political theory',
    externalLinks: [
      { title: 'Egoism and Altruism', url: '#', type: 'encyclopedia' }
    ]
  },
  {
    id: 'order-vs-chaos',
    name: 'Order vs Chaos',
    description: 'Philosophical theme exploring the tension between structured order and creative chaos.',
    challenger: 'Existentialism',
    challenged: 'Traditional Metaphysics',
    period: 'Modern to Contemporary',
    outcome: 'Expressed in existentialist and postmodern thought',
    significance: 'Influences art, literature, and cultural theory',
    externalLinks: [
      { title: 'Order and Chaos in Philosophy', url: '#', type: 'article' }
    ]
  },
  {
    id: 'self-vs-other',
    name: 'Self vs Other',
    description: 'Philosophical exploration of identity, subjectivity, and the recognition of the other.',
    challenger: 'Phenomenology',
    challenged: 'Classical Individualism',
    period: 'Contemporary',
    outcome: 'Shift toward intersubjectivity',
    significance: 'Shaped ethics and social philosophy',
    externalLinks: [
      { title: 'Self and Other in Philosophy', url: '#', type: 'article' }
    ]
  },
  {
    id: 'freedom-vs-security',
    name: 'Freedom vs Security',
    description: 'Debate over prioritizing individual freedoms or collective security in governance.',
    challenger: 'Authoritarianism',
    challenged: 'Liberal Freedom',
    period: 'Modern to Contemporary',
    outcome: 'Trade-offs in policy and governance',
    significance: 'Core issue in political philosophy',
    externalLinks: [
      { title: 'Freedom vs Security Debate', url: '#', type: 'article' }
    ]
  },
  {
    id: 'skepticism-vs-certainty',
    name: 'Skepticism vs Certainty',
    description: 'Debate over whether certainty of knowledge is possible.',
    challenger: 'Skepticism',
    challenged: 'Dogmatism',
    period: 'Ancient to Modern',
    outcome: 'Critical philosophy balances both',
    significance: 'Key to epistemology',
    externalLinks: [
      { title: 'Skepticism in Philosophy', url: '#', type: 'encyclopedia' }
    ]
  },
  {
    id: 'individual-vs-community',
    name: 'Individual vs Community',
    description: 'Debate over the priority of individual rights versus collective welfare.',
    challenger: 'Communitarianism',
    challenged: 'Individualism',
    period: 'Modern to Contemporary',
    outcome: 'Balancing models in ethics and politics',
    significance: 'Shapes social and political thought',
    externalLinks: [
      { title: 'Individual vs Community', url: '#', type: 'article' }
    ]
  },
  {
    id: 'analytic-vs-continental',
    name: 'Analytic vs Continental Philosophy',
    description: 'Division between Anglo-American analytic tradition and European continental philosophy.',
    challenger: 'Analytic Philosophy',
    challenged: 'Continental Philosophy',
    period: '20th century',
    outcome: 'Distinct traditions with limited dialogue',
    significance: 'Defines contemporary philosophical landscape',
    externalLinks: [
      { title: 'Analytic vs Continental', url: '#', type: 'encyclopedia' }
    ]
  },
  {
    id: 'humanism-vs-nihilism',
    name: 'Humanism vs Nihilism',
    description: 'Debate between affirming human value and meaning (humanism) versus denial of inherent meaning (nihilism).',
    challenger: 'Nihilism',
    challenged: 'Humanism',
    period: 'Modern to Contemporary',
    outcome: 'Existentialist responses affirm human meaning',
    significance: 'Influences existentialism and ethics',
    externalLinks: [
      { title: 'Humanism and Nihilism', url: '#', type: 'article' }
    ]
  },
  {
    id: 'tradition-vs-progress',
    name: 'Tradition vs Progress',
    description: 'Debate on the value of preserving traditions versus embracing progress and innovation.',
    challenger: 'Progressivism',
    challenged: 'Traditionalism',
    period: 'Modern to Contemporary',
    outcome: 'Context-dependent balances',
    significance: 'Central to social and political debates',
    externalLinks: [
      { title: 'Tradition vs Progress', url: '#', type: 'article' }
    ]
  }
];