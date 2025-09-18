import { PhilosophicalIdea } from '../types/philosophy';

export const ideasData: PhilosophicalIdea[] = [
  {
    id: 'socratic-method',
    name: 'Socratic Method',
    description: 'A form of inquiry and discussion between individuals, based on asking and answering questions to stimulate critical thinking and to draw out ideas and underlying presuppositions.',
    originSchool: 'classical',
    keyThinkers: ['socrates', 'plato'],
    relatedIdeas: ['dialectical-method', 'critical-thinking', 'maieutics'],
    challenges: ['dogmatism', 'unreflective-belief', 'sophistry'],
    modernApplications: ['Education', 'Psychotherapy', 'Legal cross-examination', 'Scientific inquiry'],
    influences: ['Greek dialectic', 'Sophist debates'],
    developments: ['Socratic dialogues', 'Critical pedagogy'],
    legacy: 'Foundation for Western philosophical inquiry and modern pedagogy',
    keyTexts: ['Plato\'s Dialogues'],
    externalLinks: [
      { title: 'Internet Encyclopedia of Philosophy: Socratic Method', url: 'https://iep.utm.edu/socratic-method/', type: 'encyclopedia' },
      { title: 'Britannica: Socratic Method', url: 'https://www.britannica.com/topic/Socratic-method', type: 'article' },
      { title: 'Philosophy Now: Socratic Method and Critical Thinking', url: 'https://philosophynow.org/issues/141/Socratic_Questioning_and_Critical_Thinking', type: 'article' }
    ]
  },
  {
    id: 'theory-of-forms',
    name: 'Theory of Forms',
    description: 'Plato\'s theory that non-physical forms or ideas represent the most accurate reality. According to this theory, the material world is an imperfect reflection of perfect, eternal, and unchangeable forms.',
    originSchool: 'classical',
    keyThinkers: ['plato'],
    relatedIdeas: ['allegory-of-cave', 'philosopher-king', 'tripartite-soul'],
    challenges: ['materialism', 'empiricism', 'aristotelian-realism'],
    modernApplications: ['Mathematical Platonism', 'Idealist philosophy', 'Aesthetic theory'],
    influences: ['Socratic inquiry', 'Parmenidean being'],
    developments: ['Theory of universals', 'Metaphysical realism'],
    legacy: 'Shaped metaphysics and epistemology across millennia',
    keyTexts: ['Republic', 'Parmenides'],
    externalLinks: [
      { title: 'Internet Encyclopedia of Philosophy: Plato’s Metaphysics', url: 'https://iep.utm.edu/plato-metaphysics-epistemology/', type: 'encyclopedia' },
      { title: 'Britannica: Theory of Forms', url: 'https://www.britannica.com/topic/Platos-theory-of-forms', type: 'article' },
      { title: 'Plato, Parmenides – Full Text (Perseus Digital Library)', url: 'http://www.perseus.tufts.edu/hopper/text?doc=Plat.+Parm.+126a', type: 'book' }
    ]
  },
  {
    id: 'categorical-imperative',
    name: 'Categorical Imperative',
    description: 'Kant\'s principle that one should act only according to maxims that could become universal laws. It represents the supreme principle of morality and emphasizes duty-based ethics.',
    originSchool: 'german-idealism',
    keyThinkers: ['kant'],
    relatedIdeas: ['moral-autonomy', 'good-will', 'kingdom-of-ends'],
    challenges: ['consequentialism', 'moral-relativism', 'virtue-ethics'],
    modernApplications: ['Medical ethics', 'Business ethics', 'Human rights law', 'AI ethics', 'Data governance', 'Responsible AI audits'],
    influences: ['Rationalism', 'Christian ethics'],
    developments: ['Deontological frameworks'],
    legacy: 'Cornerstone of deontological ethics and human rights',
    keyTexts: ['Groundwork of the Metaphysics of Morals'],
    externalLinks: [
      { title: 'Internet Encyclopedia of Philosophy: Kant’s Moral Philosophy', url: 'https://iep.utm.edu/kant-moral/', type: 'encyclopedia' },
      { title: 'Britannica: Categorical Imperative', url: 'https://www.britannica.com/topic/categorical-imperative', type: 'article' },
      { title: 'Project Gutenberg: Groundwork of the Metaphysics of Morals', url: 'https://www.gutenberg.org/ebooks/5682', type: 'book' }
    ]
  },
  {
    id: 'will-to-power',
    name: 'Will to Power',
    description: 'Nietzsche\'s concept describing what he believed to be the main driving force in humans: the desire to grow, expand, and exercise power over one\'s environment and oneself.',
    originSchool: 'existentialism-precursors',
    keyThinkers: ['nietzsche'],
    relatedIdeas: ['ubermensch', 'eternal-recurrence', 'master-slave-morality'],
    challenges: ['christian-morality', 'democratic-equality', 'utilitarian-happiness'],
    modernApplications: ['Psychology', 'Leadership theory', 'Evolutionary psychology', 'Self-improvement', 'Organizational behavior'],
    influences: ['Schopenhauer', 'Greek tragedy'],
    developments: ['Genealogical method'],
    legacy: 'Catalyst for existentialism and postmodern critiques',
    keyTexts: ['Thus Spoke Zarathustra'],
    externalLinks: [
      { title: 'Internet Encyclopedia of Philosophy: Nietzsche’s Ethics', url: 'https://iep.utm.edu/nietz-eth/', type: 'encyclopedia' },
      { title: 'Britannica: Nietzsche – Will to Power', url: 'https://www.britannica.com/topic/will-to-power', type: 'article' },
      { title: 'Nietzsche’s Will to Power (Internet Archive full text)', url: 'https://archive.org/details/willtopower00nietuoft', type: 'book' }
    ]
  },
  {
    id: 'aristotelian-virtue-ethics',
    name: 'Virtue Ethics',
    description: 'Aristotle\'s ethics focusing on character and virtue as the basis for moral life, emphasizing the cultivation of good habits to achieve eudaimonia (flourishing).',
    originSchool: 'classical',
    keyThinkers: ['aristotle'],
    relatedIdeas: ['golden-mean', 'eudaimonia', 'practical-wisdom'],
    challenges: ['utilitarianism', 'deontology', 'moral-relativism'],
    modernApplications: ['Character education', 'Medical ethics', 'Leadership training', 'AI value alignment', 'Professional ethics'],
    externalLinks: [
      { title: 'Internet Encyclopedia of Philosophy: Virtue Ethics', url: 'https://iep.utm.edu/virtue-ethics/', type: 'encyclopedia' },
      { title: 'Britannica: Virtue Ethics', url: 'https://www.britannica.com/topic/virtue-ethics', type: 'article' },
      { title: 'Philosophy Now: Virtue Ethics in the Modern World', url: 'https://philosophynow.org/issues/82/Virtue_Ethics_in_the_Modern_World', type: 'article' }
    ]
  },
  {
    id: 'confucian-ren',
    name: 'Confucian Ren (Humaneness)',
    description: 'Confucius emphasized ren (humaneness, benevolence) as the highest virtue guiding social harmony and personal cultivation.',
    originSchool: 'confucianism',
    keyThinkers: ['confucius'],
    relatedIdeas: ['li', 'filial-piety', 'virtue-ethics'],
    challenges: ['legalism', 'individualism'],
    modernApplications: ['East Asian education', 'Political theory', 'Business ethics', 'Corporate governance'],
    externalLinks: [
      { title: 'Internet Encyclopedia of Philosophy: Confucius', url: 'https://iep.utm.edu/confucius/', type: 'encyclopedia' },
      { title: 'Britannica: Ren (Confucianism)', url: 'https://www.britannica.com/topic/ren', type: 'article' },
      { title: 'The Analects of Confucius – Complete Text', url: 'https://www.gutenberg.org/ebooks/3330', type: 'book' }
    ]
  },
  {
    id: 'daoist-wuwei',
    name: 'Daoist Wu Wei',
    description: 'The Daoist principle of effortless action or non-interference with the natural flow of the universe.',
    originSchool: 'daoism',
    keyThinkers: ['laozi', 'zhuangzi'],
    relatedIdeas: ['dao', 'naturalness', 'yin-yang'],
    challenges: ['activism', 'rationalism'],
    modernApplications: ['Mindfulness', 'Environmental ethics', 'Management minimalism'],
    externalLinks: [
      { title: 'Internet Encyclopedia of Philosophy: Daoism', url: 'https://iep.utm.edu/daoism/', type: 'encyclopedia' },
      { title: 'Britannica: Wu Wei', url: 'https://www.britannica.com/topic/wuwei', type: 'article' },
      { title: 'Tao Te Ching – Full English Text (Sacred Texts)', url: 'https://www.sacred-texts.com/tao/taote.htm', type: 'book' }
    ]
  },
  {
    id: 'advaita-vedanta-nondualism',
    name: 'Advaita Vedanta Nondualism',
    description: 'Shankara’s doctrine that ultimate reality (Brahman) and the self (Atman) are identical, rejecting dualism.',
    originSchool: 'hindu-philosophy',
    keyThinkers: ['adi-shankara'],
    relatedIdeas: ['maya', 'moksha', 'brahman'],
    challenges: ['dvaita-dualism', 'buddhist-emptiness'],
    modernApplications: ['Spirituality', 'Nondual awareness studies', 'Contemplative neuroscience'],
    externalLinks: [
      { title: 'Internet Encyclopedia of Philosophy: Advaita Vedanta', url: 'https://iep.utm.edu/advaita/', type: 'encyclopedia' },
      { title: 'Britannica: Vedanta Philosophy', url: 'https://www.britannica.com/topic/Vedanta', type: 'article' },
      { title: 'Shankara: Crest-Jewel of Discrimination (Sacred Texts)', url: 'https://www.sacred-texts.com/hin/cjd/index.htm', type: 'book' }
    ]
  },
  {
    id: 'buddhist-four-noble-truths',
    name: 'Four Noble Truths',
    description: 'The core Buddhist teaching that life involves suffering, its cause is craving, it can be ended, and the Eightfold Path provides the way.',
    originSchool: 'buddhism',
    keyThinkers: ['buddha'],
    relatedIdeas: ['eightfold-path', 'dependent-origination', 'nirvana'],
    challenges: ['materialism', 'eternalism', 'nihilism'],
    modernApplications: ['Mindfulness-based therapy', 'Meditation research', 'CBT integrations'],
    externalLinks: [
      { title: 'Internet Encyclopedia of Philosophy: Buddhism', url: 'https://iep.utm.edu/buddha/', type: 'encyclopedia' },
      { title: 'Britannica: Four Noble Truths', url: 'https://www.britannica.com/topic/Four-Noble-Truths', type: 'article' },
      { title: 'Dhammapada – Full Text (Sacred Texts)', url: 'https://www.sacred-texts.com/bud/dhp/index.htm', type: 'book' }
    ]
  },
  {
    id: 'mencian-goodness',
    name: 'Mencian View of Human Nature',
    description: 'Mencius argued that humans are inherently good and need cultivation to realize their potential.',
    originSchool: 'confucianism',
    keyThinkers: ['mencius'],
    relatedIdeas: ['ren', 'li', 'virtue-ethics'],
    challenges: ['xunzi-evil-nature', 'legalism'],
    modernApplications: ['Moral education', 'Positive psychology', 'Social policy design'],
    externalLinks: [
      { title: 'Internet Encyclopedia of Philosophy: Mencius', url: 'https://iep.utm.edu/mencius/', type: 'encyclopedia' },
      { title: 'Britannica: Mencius', url: 'https://www.britannica.com/biography/Mencius', type: 'article' },
      { title: 'The Works of Mencius – Full Text', url: 'https://www.gutenberg.org/ebooks/14065', type: 'book' }
    ]
  },
  {
    id: 'xunzi-evil-nature',
    name: 'Xunzi’s View of Human Nature',
    description: 'Xunzi argued that humans are inherently selfish and require education and rituals to become good.',
    originSchool: 'confucianism',
    keyThinkers: ['xunzi'],
    relatedIdeas: ['li', 'legalism'],
    challenges: ['mencius-goodness', 'daoist-naturalness'],
    modernApplications: ['Law enforcement', 'Educational theory', 'Behavioral public policy'],
    externalLinks: [
      { title: 'Internet Encyclopedia of Philosophy: Xunzi', url: 'https://iep.utm.edu/xunzi/', type: 'encyclopedia' },
      { title: 'Britannica: Xunzi', url: 'https://www.britannica.com/biography/Xunzi', type: 'article' },
      { title: 'Xunzi: Basic Writings (Full Text at Archive.org)', url: 'https://archive.org/details/xunzibasicwriting00hsun', type: 'book' }
    ]
  },
  {
    id: 'al-farabi-virtue-city',
    name: 'Al-Farabi’s Virtuous City',
    description: 'An Islamic philosophical vision of an ideal society governed by virtuous leadership and divine principles.',
    originSchool: 'islamic-philosophy',
    keyThinkers: ['al-farabi'],
    relatedIdeas: ['plato-republic', 'islamic-political-thought'],
    challenges: ['authoritarianism', 'secularism'],
    modernApplications: ['Islamic political thought', 'Ethics of governance', 'City planning ethics'],
    externalLinks: [
      { title: 'Internet Encyclopedia of Philosophy: Al-Farabi', url: 'https://iep.utm.edu/al-farabi/', type: 'encyclopedia' },
      { title: 'Britannica: Al-Farabi – Political Philosophy', url: 'https://www.britannica.com/biography/Al-Farabi', type: 'article' },
      { title: 'Al-Farabi: On the Perfect State (Archive.org full text)', url: 'https://archive.org/details/AlFarabiOnThePerfectState', type: 'book' }
    ]
  },
  {
    id: 'avicenna-metaphysics',
    name: 'Avicenna’s Metaphysics',
    description: 'Avicenna integrated Aristotelian philosophy with Islamic theology, emphasizing the Necessary Existent (God).',
    originSchool: 'islamic-philosophy',
    keyThinkers: ['avicenna'],
    relatedIdeas: ['essence-existence', 'aristotelianism', 'monotheism'],
    challenges: ['al-ghazali-criticism', 'empiricism'],
    modernApplications: ['Philosophy of religion', 'Metaphysics', 'Analytic theology'],
    externalLinks: [
      { title: 'Internet Encyclopedia of Philosophy: Avicenna', url: 'https://iep.utm.edu/ibn-sina/', type: 'encyclopedia' },
      { title: 'Britannica: Avicenna', url: 'https://www.britannica.com/biography/Avicenna', type: 'article' },
      { title: 'Avicenna: Metaphysics (Archive.org full text)', url: 'https://archive.org/details/IbnSinaMetaphysicsEnglish', type: 'book' }
    ]
  },
  {
    id: 'al-ghazali-incoherence',
    name: 'Critique of Philosophy',
    description: 'Al-Ghazali’s "Incoherence of the Philosophers" argued against excessive rationalism, emphasizing faith and divine will.',
    originSchool: 'islamic-philosophy',
    keyThinkers: ['al-ghazali'],
    relatedIdeas: ['sufism', 'theology'],
    challenges: ['avicenna-metaphysics', 'aristotelianism'],
    modernApplications: ['Theology', 'Faith vs reason debates', 'Science and religion studies'],
    externalLinks: [
      { title: 'Internet Encyclopedia of Philosophy: Al-Ghazali', url: 'https://iep.utm.edu/al-ghazali/', type: 'encyclopedia' },
      { title: 'Britannica: Al-Ghazali', url: 'https://www.britannica.com/biography/al-Ghazali', type: 'article' },
      { title: 'Al-Ghazali: The Incoherence of the Philosophers (Archive.org)', url: 'https://archive.org/details/incoherenceofphi00ghaz', type: 'book' }
    ]
  },
  {
    id: 'ibn-rushd-reconciliation',
    name: 'Ibn Rushd on Faith and Reason',
    description: 'Ibn Rushd (Averroes) argued for harmony between religion and philosophy, defending Aristotle.',
    originSchool: 'islamic-philosophy',
    keyThinkers: ['averroes'],
    relatedIdeas: ['aristotelianism', 'rationalism'],
    challenges: ['al-ghazali-incoherence'],
    modernApplications: ['Science-religion dialogue', 'Philosophy of science'],
    externalLinks: [
      { title: 'Internet Encyclopedia of Philosophy: Averroes', url: 'https://iep.utm.edu/ibn-rushd/', type: 'encyclopedia' },
      { title: 'Britannica: Averroes', url: 'https://www.britannica.com/biography/Averroes', type: 'article' },
      { title: 'Averroes: The Incoherence of the Incoherence (Archive.org full text)', url: 'https://archive.org/details/averroes-incoherence-of-incoherence', type: 'book' }
    ]
  },
  {
    id: 'sankhya-dualism',
    name: 'Sāṃkhya Dualism',
    description: 'An Indian philosophical system distinguishing between consciousness (purusha) and matter (prakriti).',
    originSchool: 'hindu-philosophy',
    keyThinkers: ['kapila'],
    relatedIdeas: ['yoga', 'purusha', 'prakriti'],
    challenges: ['advaita-nondualism', 'buddhist-emptiness'],
    modernApplications: ['Yoga philosophy', 'Mind-body studies', 'Cognitive science debates'],
    externalLinks: [
      { title: 'Internet Encyclopedia of Philosophy: Samkhya', url: 'https://iep.utm.edu/samkhya/', type: 'encyclopedia' },
      { title: 'Britannica: Samkhya', url: 'https://www.britannica.com/topic/Sankhya', type: 'article' },
      { title: 'Samkhya Karika – Full Text (Sacred Texts)', url: 'https://www.sacred-texts.com/hin/sbe01/index.htm', type: 'book' }
    ]
  },
  {
    id: 'augustinian-theodicy',
    name: 'Augustinian Theodicy',
    description: 'St. Augustine’s explanation of evil as the privation of good, consistent with an omnipotent God.',
    originSchool: 'christian-philosophy',
    keyThinkers: ['augustine'],
    relatedIdeas: ['original-sin', 'free-will-defense'],
    challenges: ['problem-of-evil', 'manichean-dualism'],
    modernApplications: ['Philosophy of religion', 'Pastoral counseling'],
    externalLinks: [
      { title: 'Internet Encyclopedia of Philosophy: Augustine', url: 'https://iep.utm.edu/augustine/', type: 'encyclopedia' },
      { title: 'Britannica: Theodicy – Augustine', url: 'https://www.britannica.com/topic/theodicy/The-Augustinian-theodicy', type: 'article' },
      { title: 'Augustine: Confessions (Project Gutenberg)', url: 'https://www.gutenberg.org/ebooks/3296', type: 'book' }
    ]
  },
  {
    id: 'thomistic-natural-law',
    name: 'Natural Law Theory',
    description: 'Aquinas argued that moral law is grounded in human nature and discoverable by reason.',
    originSchool: 'scholasticism',
    keyThinkers: ['thomas-aquinas'],
    relatedIdeas: ['eternal-law', 'divine-law', 'human-law'],
    challenges: ['legal-positivism', 'moral-relativism'],
    modernApplications: ['Law', 'Human rights', 'Bioethics'],
    externalLinks: [
      { title: 'Internet Encyclopedia of Philosophy: Natural Law', url: 'https://iep.utm.edu/natlaw/', type: 'encyclopedia' },
      { title: 'Britannica: Natural Law', url: 'https://www.britannica.com/topic/natural-law', type: 'article' },
      { title: 'Aquinas: Summa Theologica (Internet Sacred Texts)', url: 'https://www.sacred-texts.com/chr/aquinas/summa/index.htm', type: 'book' }
    ]
  },
  {
    id: 'rousseau-general-will',
    name: 'General Will',
    description: 'Rousseau’s concept that legitimate political authority rests on the collective will of the people.',
    originSchool: 'enlightenment',
    keyThinkers: ['rousseau'],
    relatedIdeas: ['social-contract', 'popular-sovereignty'],
    challenges: ['tyranny-of-majority', 'individual-liberty'],
    modernApplications: ['Democratic theory', 'Civic tech'],
    externalLinks: [
      { title: 'Internet Encyclopedia of Philosophy: Rousseau', url: 'https://iep.utm.edu/rousseau/', type: 'encyclopedia' },
      { title: 'Britannica: Rousseau and General Will', url: 'https://www.britannica.com/biography/Jean-Jacques-Rousseau/Political-philosophy', type: 'article' },
      { title: 'The Social Contract – Full Text (Gutenberg)', url: 'https://www.gutenberg.org/ebooks/46333', type: 'book' }
    ]
  },
  {
    id: 'hobbes-social-contract',
    name: 'Hobbesian Social Contract',
    description: 'Hobbes argued that humans consent to a sovereign power to escape the state of nature and ensure order.',
    originSchool: 'early-modern',
    keyThinkers: ['thomas-hobbes'],
    relatedIdeas: ['leviathan', 'political-order'],
    challenges: ['liberalism', 'anarchism'],
    modernApplications: ['Political science', 'International relations'],
    externalLinks: [
      { title: 'Internet Encyclopedia of Philosophy: Hobbes', url: 'https://iep.utm.edu/hobbes/', type: 'encyclopedia' },
      { title: 'Britannica: Hobbes’s Social Contract', url: 'https://www.britannica.com/biography/Thomas-Hobbes', type: 'article' },
      { title: 'Leviathan – Full Text (Gutenberg)', url: 'https://www.gutenberg.org/ebooks/3207', type: 'book' }
    ]
  },
  {
    id: 'locke-natural-rights',
    name: 'Natural Rights',
    description: 'Locke’s theory of life, liberty, and property as inalienable rights forming the basis of government.',
    originSchool: 'early-modern',
    keyThinkers: ['locke'],
    relatedIdeas: ['social-contract', 'liberalism'],
    challenges: ['authoritarianism', 'collectivism'],
    modernApplications: ['Constitutional law', 'Human rights discourse'],
    externalLinks: [
      { title: 'Internet Encyclopedia of Philosophy: Locke', url: 'https://iep.utm.edu/locke/', type: 'encyclopedia' },
      { title: 'Britannica: Locke’s Political Philosophy', url: 'https://www.britannica.com/biography/John-Locke', type: 'article' },
      { title: 'Two Treatises of Government – Full Text (Gutenberg)', url: 'https://www.gutenberg.org/ebooks/7370', type: 'book' }
    ]
  },
  {
    id: 'hegel-dialectics',
    name: 'Hegelian Dialectics',
    description: 'Hegel’s method of thesis-antithesis-synthesis as the logic of historical and philosophical development.',
    originSchool: 'german-idealism',
    keyThinkers: ['hegel'],
    relatedIdeas: ['absolute-idealism', 'historicism'],
    challenges: ['materialism', 'empiricism'],
    modernApplications: ['Political theory', 'Critical theory', 'Design thinking iterations'],
    externalLinks: [
      { title: 'Internet Encyclopedia of Philosophy: Hegel', url: 'https://iep.utm.edu/hegel/', type: 'encyclopedia' },
      { title: 'Britannica: Dialectic in Hegel', url: 'https://www.britannica.com/topic/dialectic', type: 'article' },
      { title: 'Hegel: Phenomenology of Spirit (Archive.org)', url: 'https://archive.org/details/HegelsPhenomenologyOfSpirit', type: 'book' }
    ]
  },
  {
    id: 'marx-historical-materialism',
    name: 'Historical Materialism',
    description: 'Marx’s theory that economic structures shape history, culture, and politics through class struggle.',
    originSchool: 'marxism',
    keyThinkers: ['marx', 'engels'],
    relatedIdeas: ['class-struggle', 'dialectical-materialism'],
    challenges: ['idealism', 'liberal-democracy'],
    modernApplications: ['Sociology', 'Political economy', 'Media studies'],
    externalLinks: [
      { title: 'Internet Encyclopedia of Philosophy: Marx’s Philosophy of History', url: 'https://iep.utm.edu/marx-hist/', type: 'encyclopedia' },
      { title: 'Britannica: Marxism', url: 'https://www.britannica.com/topic/Marxism', type: 'article' },
      { title: 'The Communist Manifesto – Full Text (Gutenberg)', url: 'https://www.gutenberg.org/ebooks/61', type: 'book' }
    ]
  },
  {
    id: 'sartre-existentialism',
    name: 'Existentialism',
    description: 'Sartre emphasized radical freedom, responsibility, and the creation of meaning in an absurd world.',
    originSchool: 'existentialism',
    keyThinkers: ['sartre'],
    relatedIdeas: ['bad-faith', 'absurdism', 'freedom'],
    challenges: ['determinism', 'religious-essentialism'],
    modernApplications: ['Literature', 'Psychology', 'Existential therapy'],
    externalLinks: [
      { title: 'Internet Encyclopedia of Philosophy: Sartre', url: 'https://iep.utm.edu/sartre/', type: 'encyclopedia' },
      { title: 'Britannica: Existentialism', url: 'https://www.britannica.com/topic/existentialism', type: 'article' },
      { title: 'Sartre: Existentialism is a Humanism (Archive.org)', url: 'https://archive.org/details/existentialism_is_a_humanism', type: 'book' }
    ]
  },
  {
    id: 'camus-absurdism',
    name: 'Absurdism',
    description: 'Camus highlighted the absurd tension between human search for meaning and an indifferent universe.',
    originSchool: 'existentialism',
    keyThinkers: ['camus'],
    relatedIdeas: ['existentialism', 'nihilism'],
    challenges: ['religious-theism', 'dogmatism'],
    modernApplications: ['Modern literature', 'Therapy', 'Resilience training'],
    externalLinks: [
      { title: 'Internet Encyclopedia of Philosophy: Camus', url: 'https://iep.utm.edu/camus/', type: 'encyclopedia' },
      { title: 'Britannica: The Absurd – Camus', url: 'https://www.britannica.com/biography/Albert-Camus', type: 'article' },
      { title: 'Camus: The Myth of Sisyphus (Archive.org full text)', url: 'https://archive.org/details/in.ernet.dli.2015.218034', type: 'book' }
    ]
  },
  {
    id: 'simone-de-beauvoir-feminism',
    name: 'Existentialist Feminism',
    description: 'De Beauvoir’s view that women are historically constructed as "Other" and must assert freedom and equality.',
    originSchool: 'feminist-philosophy',
    keyThinkers: ['simone-de-beauvoir'],
    relatedIdeas: ['existentialism', 'gender-theory'],
    challenges: ['patriarchy', 'essentialism'],
    modernApplications: ['Gender studies', 'Social justice', 'Policy analysis'],
    externalLinks: [
      { title: 'Internet Encyclopedia of Philosophy: Simone de Beauvoir', url: 'https://iep.utm.edu/beauvoir/', type: 'encyclopedia' },
      { title: 'Britannica: Simone de Beauvoir', url: 'https://www.britannica.com/biography/Simone-de-Beauvoir', type: 'article' },
      { title: 'The Second Sex – Full Text (Archive.org)', url: 'https://archive.org/details/secondsex1949debe', type: 'book' }
    ]
  },
  {
    id: 'derrida-deconstruction',
    name: 'Deconstruction',
    description: 'Derrida’s method of analyzing texts by exposing hidden assumptions and contradictions.',
    originSchool: 'post-structuralism',
    keyThinkers: ['derrida'],
    relatedIdeas: ['logocentrism', 'différance'],
    challenges: ['analytic-philosophy', 'empiricism'],
    modernApplications: ['Literary criticism', 'Cultural studies', 'Legal interpretation'],
    externalLinks: []
  },
  {
    id: 'foucault-power-knowledge',
    name: 'Power/Knowledge',
    description: 'Foucault analyzed how power and knowledge are intertwined in social institutions and discourses.',
    originSchool: 'postmodernism',
    keyThinkers: ['foucault'],
    relatedIdeas: ['biopolitics', 'disciplinary-power'],
    challenges: ['universal-truth', 'essentialism'],
    modernApplications: ['Sociology', 'Critical theory', 'Public health policy'],
    externalLinks: []
  },
  {
    id: 'greatest-happiness-principle',
    name: 'Greatest Happiness Principle',
    description: 'The utilitarian principle that actions are right in proportion as they tend to promote happiness; wrong as they tend to produce the reverse of happiness.',
    originSchool: 'utilitarianism',
    keyThinkers: ['bentham', 'mill'],
    relatedIdeas: ['hedonistic-calculus', 'consequentialism', 'social-reform'],
    challenges: ['deontological-ethics', 'virtue-ethics', 'individual-rights'],
    modernApplications: ['Public policy', 'Healthcare allocation', 'Economic theory', 'Animal welfare'],
    externalLinks: [
      { title: 'Utilitarian Ethics Overview', url: '#', type: 'encyclopedia' },
      { title: 'Mill vs Bentham on Happiness', url: '#', type: 'article' },
      { title: 'Applied Ethics Course', url: '#', type: 'course' }
    ] }, 
  { id: 'virtue-is-knowledge', name: 'Virtue is Knowledge', description: 'Socrates taught that knowing the good is sufficient to act rightly.', originSchool: 'classical', keyThinkers: ['socrates'], relatedIdeas: ['socratic-method'], challenges: ['akrasia'], modernApplications: ['Moral education'], externalLinks: [] },
  { id: 'care-of-soul', name: 'Care of the Soul', description: 'Socrates emphasized self-examination and moral cultivation as life’s highest duty.', originSchool: 'classical', keyThinkers: ['socrates'], relatedIdeas: ['virtue-is-knowledge'], challenges: ['hedonism'], modernApplications: ['Therapy', 'Self-reflection'], externalLinks: [] },
  { id: 'philosopher-king', name: 'Philosopher King', description: 'Plato’s vision of rulers guided by wisdom and virtue.', originSchool: 'classical', keyThinkers: ['plato'], relatedIdeas: ['theory-of-forms'], challenges: ['oligarchy', 'democracy'], modernApplications: ['Leadership ethics'], externalLinks: [] },
  { id: 'tripartite-soul', name: 'Tripartite Soul', description: 'Plato’s division of the soul into reason, spirit, and appetite.', originSchool: 'classical', keyThinkers: ['plato'], relatedIdeas: ['virtue-ethics'], challenges: ['monism'], modernApplications: ['Psychology'], externalLinks: [] },
  { id: 'allegory-of-cave', name: 'Allegory of the Cave', description: 'Plato’s metaphor for enlightenment and ignorance.', originSchool: 'classical', keyThinkers: ['plato'], relatedIdeas: ['theory-of-forms'], challenges: ['empiricism'], modernApplications: ['Education'], externalLinks: [] },
  { id: 'virtue-ethics', name: 'Virtue Ethics', description: 'Aristotle’s ethics grounded in character cultivation and virtue.', originSchool: 'classical', keyThinkers: ['aristotle'], relatedIdeas: ['golden-mean'], challenges: ['utilitarianism', 'deontology'], modernApplications: ['Character education'], externalLinks: [] },
  { id: 'golden-mean', name: 'Golden Mean', description: 'Aristotle’s idea that virtue lies between extremes.', originSchool: 'classical', keyThinkers: ['aristotle'], relatedIdeas: ['virtue-ethics'], challenges: ['moral-absolutism'], modernApplications: ['Ethics training'], externalLinks: [] },
  { id: 'four-causes', name: 'Four Causes', description: 'Aristotle’s framework: material, formal, efficient, and final causes explain change.', originSchool: 'classical', keyThinkers: ['aristotle'], relatedIdeas: ['teleology'], challenges: ['mechanistic-science'], modernApplications: ['Science philosophy'], externalLinks: [] },
  { id: 'syllogistic-logic', name: 'Syllogistic Logic', description: 'Aristotle’s formal system of deductive reasoning.', originSchool: 'classical', keyThinkers: ['aristotle'], relatedIdeas: ['logic'], challenges: ['symbolic-logic'], modernApplications: ['Computer science'], externalLinks: [] },
  { id: 'transcendental-idealism', name: 'Transcendental Idealism', description: 'Kant’s claim that we experience phenomena shaped by categories of mind, not noumena.', originSchool: 'german-idealism', keyThinkers: ['kant'], relatedIdeas: ['synthetic-a-priori'], challenges: ['empiricism', 'realism'], modernApplications: ['Epistemology'], externalLinks: [] },
  { id: 'synthetic-a-priori', name: 'Synthetic a Priori', description: 'Kant’s category of judgments that expand knowledge yet are necessary.', originSchool: 'german-idealism', keyThinkers: ['kant'], relatedIdeas: ['transcendental-idealism'], challenges: ['empiricism'], modernApplications: ['Mathematics', 'Logic'], externalLinks: [] },
  { id: 'moral-autonomy', name: 'Moral Autonomy', description: 'Kant’s idea that morality arises from rational self-legislation.', originSchool: 'german-idealism', keyThinkers: ['kant'], relatedIdeas: ['categorical-imperative'], challenges: ['heteronomy'], modernApplications: ['Human rights'], externalLinks: [] },
  { id: 'eternal-recurrence', name: 'Eternal Recurrence', description: 'Nietzsche’s thought experiment that life repeats infinitely.', originSchool: 'existentialism-precursors', keyThinkers: ['nietzsche'], relatedIdeas: ['will-to-power'], challenges: ['linear-history'], modernApplications: ['Existential psychology'], externalLinks: [] },
  { id: 'ubermensch', name: 'Übermensch', description: 'Nietzsche’s ideal of self-overcoming individual beyond conventional morality.', originSchool: 'existentialism-precursors', keyThinkers: ['nietzsche'], relatedIdeas: ['will-to-power'], challenges: ['egalitarianism'], modernApplications: ['Self-actualization'], externalLinks: [] },
  { id: 'god-is-dead', name: 'God is Dead', description: 'Nietzsche’s claim that traditional belief in God has lost cultural force.', originSchool: 'existentialism-precursors', keyThinkers: ['nietzsche'], relatedIdeas: ['nihilism'], challenges: ['religious-theism'], modernApplications: ['Secular ethics'], externalLinks: [] },
  { id: 'ren-benevolence', name: 'Ren (Benevolence)', description: 'Confucian core virtue of humaneness and compassion.', originSchool: 'confucianism', keyThinkers: ['confucius'], relatedIdeas: ['li-ritual'], challenges: ['legalism'], modernApplications: ['East Asian ethics'], externalLinks: [] },
  { id: 'li-ritual', name: 'Li (Ritual)', description: 'Confucian principle of proper conduct and ritual order.', originSchool: 'confucianism', keyThinkers: ['confucius'], relatedIdeas: ['ren-benevolence'], challenges: ['anarchy'], modernApplications: ['Cultural studies'], externalLinks: [] },
  { id: 'junzi-gentleman', name: 'Junzi (Gentleman)', description: 'Confucius’ model of the cultivated moral person.', originSchool: 'confucianism', keyThinkers: ['confucius'], relatedIdeas: ['virtue-ethics'], challenges: ['selfishness'], modernApplications: ['Education'], externalLinks: [] },
  { id: 'rectification-of-names', name: 'Rectification of Names', description: 'Confucian doctrine that social order requires correct use of names.', originSchool: 'confucianism', keyThinkers: ['confucius'], relatedIdeas: ['junzi-gentleman'], challenges: ['linguistic-relativism'], modernApplications: ['Law', 'Politics'], externalLinks: [] },
  { id: 'conceptual-decolonization', name: 'Conceptual Decolonization', description: 'Kwasi Wiredu’s call to rethink African philosophy using indigenous categories.', originSchool: 'african-philosophy', keyThinkers: ['wiredu'], relatedIdeas: ['decolonization'], challenges: ['eurocentrism'], modernApplications: ['Philosophy of culture'], externalLinks: [] },
  { id: 'communalism', name: 'African Communalism', description: 'Emphasis on community and shared existence in African philosophy.', originSchool: 'african-philosophy', keyThinkers: ['mbiti'], relatedIdeas: ['ubuntu'], challenges: ['individualism'], modernApplications: ['Political theory'], externalLinks: [] },
  { id: 'indigenous-sovereignty', name: 'Indigenous Sovereignty', description: 'Philosophy of self-determination and cultural survival of Indigenous peoples.', originSchool: 'indigenous-philosophy', keyThinkers: [], relatedIdeas: ['decolonization'], challenges: ['colonialism'], modernApplications: ['Law', 'Politics'], externalLinks: [] },
  { id: 'decolonization', name: 'Decolonization', description: 'Philosophy of dismantling colonial structures of knowledge and power.', originSchool: 'global-philosophy', keyThinkers: ['fanon'], relatedIdeas: ['conceptual-decolonization'], challenges: ['neocolonialism'], modernApplications: ['Critical theory'], externalLinks: [] },
  { id: 'capabilities-approach', name: 'Capabilities Approach', description: 'Martha Nussbaum and Amartya Sen’s framework for justice based on human capabilities.', originSchool: 'contemporary', keyThinkers: ['nussbaum', 'sen'], relatedIdeas: ['justice'], challenges: ['utilitarianism'], modernApplications: ['Development economics'], externalLinks: [] },
  { id: 'justice', name: 'Justice', description: 'Philosophical debates on fairness, equality, and rights.', originSchool: 'universal', keyThinkers: ['plato', 'rawls'], relatedIdeas: ['capabilities-approach'], challenges: ['relativism'], modernApplications: ['Law', 'Politics'], externalLinks: [] },
  { id: 'advaita-vedanta', name: 'Advaita Vedanta', description: 'Nondual Hindu philosophy identifying Atman with Brahman.', originSchool: 'hindu-philosophy', keyThinkers: ['adi-shankara'], relatedIdeas: ['non-dualism', 'maya-illusion'], challenges: ['dvaita-dualism'], modernApplications: ['Spirituality'], externalLinks: [] },
  { id: 'non-dualism', name: 'Non-Dualism', description: 'View that ultimate reality is unified beyond dual categories.', originSchool: 'indian-philosophy', keyThinkers: ['adi-shankara'], relatedIdeas: ['advaita-vedanta'], challenges: ['dualism'], modernApplications: ['Consciousness studies'], externalLinks: [] },
  { id: 'maya-illusion', name: 'Maya (Illusion)', description: 'Hindu concept that the material world is illusory compared to Brahman.', originSchool: 'hindu-philosophy', keyThinkers: [], relatedIdeas: ['advaita-vedanta'], challenges: ['realism'], modernApplications: ['Metaphysics'], externalLinks: [] },
  { id: 'vishishtadvaita', name: 'Vishishtadvaita', description: 'Ramanuja’s qualified nondualism integrating devotion to God with metaphysics.', originSchool: 'hindu-philosophy', keyThinkers: ['ramanuja'], relatedIdeas: ['bhakti-devotion'], challenges: ['advaita-vedanta'], modernApplications: ['Theology'], externalLinks: [] },
  { id: 'bhakti-devotion', name: 'Bhakti (Devotion)', description: 'Hindu philosophy of loving devotion to God.', originSchool: 'hindu-philosophy', keyThinkers: ['ramanuja', 'chaitanya'], relatedIdeas: ['vishishtadvaita'], challenges: ['ritualism'], modernApplications: ['Religious practice'], externalLinks: [] },
  { id: 'dvaita-dualism', name: 'Dvaita Dualism', description: 'Madhva’s philosophy of eternal difference between soul and God.', originSchool: 'hindu-philosophy', keyThinkers: ['madhva'], relatedIdeas: ['advaita-vedanta'], challenges: ['non-dualism'], modernApplications: ['Theology'], externalLinks: [] },
  { id: 'political-realism', name: 'Political Realism', description: 'View that politics is driven by power and self-interest.', originSchool: 'political-philosophy', keyThinkers: ['machiavelli'], relatedIdeas: ['statecraft'], challenges: ['idealism'], modernApplications: ['International relations'], externalLinks: [] },
  { id: 'statecraft', name: 'Statecraft', description: 'Practical art of governing and maintaining political power.', originSchool: 'political-philosophy', keyThinkers: ['kautilya', 'machiavelli'], relatedIdeas: ['political-realism'], challenges: ['utopianism'], modernApplications: ['Political science'], externalLinks: [] },
  { id: 'economics', name: 'Philosophy of Economics', description: 'Study of ethical, political, and ontological aspects of economics.', originSchool: 'modern', keyThinkers: ['smith', 'marx', 'sen'], relatedIdeas: ['justice'], challenges: ['reductionism'], modernApplications: ['Policy'], externalLinks: [] },
  { id: 'humanism', name: 'Humanism', description: 'Emphasis on human dignity, autonomy, and rationality.', originSchool: 'renaissance', keyThinkers: ['erasmus', 'pico-della-mirandola'], relatedIdeas: ['universalism'], challenges: ['nihilism'], modernApplications: ['Education'], externalLinks: [] },
  { id: 'universalism', name: 'Universalism', description: 'Belief in universal moral principles transcending culture.', originSchool: 'ethics', keyThinkers: ['kant', 'stoics'], relatedIdeas: ['humanism'], challenges: ['relativism'], modernApplications: ['Human rights'], externalLinks: [] },
  { id: 'education', name: 'Philosophy of Education', description: 'Inquiry into aims, methods, and meaning of education.', originSchool: 'universal', keyThinkers: ['plato', 'dewey'], relatedIdeas: ['socratic-method'], challenges: ['instrumentalism'], modernApplications: ['Teaching'], externalLinks: [] },
  { id: 'original-sin', name: 'Original Sin', description: 'Augustine’s doctrine of inherited sinfulness.', originSchool: 'christian-philosophy', keyThinkers: ['augustine'], relatedIdeas: ['just-war-theory'], challenges: ['pelagianism'], modernApplications: ['Theology'], externalLinks: [] },
  { id: 'just-war-theory', name: 'Just War Theory', description: 'Christian doctrine on when war is morally permissible.', originSchool: 'scholasticism', keyThinkers: ['augustine', 'aquinas'], relatedIdeas: ['natural-law'], challenges: ['pacifism'], modernApplications: ['Military ethics'], externalLinks: [] },
  { id: 'faith-and-reason', name: 'Faith and Reason', description: 'Debates on compatibility of religious belief with rational inquiry.', originSchool: 'christian-philosophy', keyThinkers: ['aquinas'], relatedIdeas: ['natural-law'], challenges: ['fideism'], modernApplications: ['Theology'], externalLinks: [] },
  { id: 'natural-law', name: 'Natural Law', description: 'Moral order discoverable by reason, rooted in divine order.', originSchool: 'scholasticism', keyThinkers: ['aquinas'], relatedIdeas: ['five-ways'], challenges: ['legal-positivism'], modernApplications: ['Law'], externalLinks: [] },
  { id: 'five-ways', name: 'Five Ways', description: 'Aquinas’s five arguments for the existence of God.', originSchool: 'scholasticism', keyThinkers: ['aquinas'], relatedIdeas: ['faith-and-reason'], challenges: ['atheism'], modernApplications: ['Philosophy of religion'], externalLinks: [] },
  { id: 'cogito-ergo-sum', name: 'Cogito ergo sum', description: 'Descartes’ foundational certainty: "I think, therefore I am."', originSchool: 'early-modern', keyThinkers: ['descartes'], relatedIdeas: ['methodic-doubt'], challenges: ['skepticism'], modernApplications: ['Epistemology'], externalLinks: [] },
  { id: 'dualism', name: 'Cartesian Dualism', description: 'Descartes’ division of mind and body as distinct substances.', originSchool: 'early-modern', keyThinkers: ['descartes'], relatedIdeas: ['cogito-ergo-sum'], challenges: ['materialism'], modernApplications: ['Philosophy of mind'], externalLinks: [] },
    {
    id: 'kirtan',
    name: 'Kirtan',
    description: 'A devotional practice in Hinduism involving communal singing, chanting, and call-and-response recitation of divine names, central in Gaudiya Vaishnavism and Bhakti movements.',
    originSchool: 'indian-bhakti',
    keyThinkers: ['chaitanya-mahaprabhu', 'surdas', 'mirabai'],
    relatedIdeas: ['bhakti-devotion', 'gaudiya-vaishnavism', 'nama-sankirtana'],
    challenges: ['ritualism', 'sectarianism', 'externalism'],
    modernApplications: ['Yoga practice', 'Spiritual communities', 'Music therapy', 'Interfaith devotion'],
    externalLinks: [
      { title: 'Kirtan and Bhakti Tradition', url: '#', type: 'article' },
      { title: 'Devotional Singing in India', url: '#', type: 'video' },
      { title: 'Kirtan Practice Guide', url: '#', type: 'course' }
    ]
  },
  // --- Added ideas to cover school keyIdeas ---
  { id: 'brahman', name: 'Brahman', description: 'Ultimate, all-pervading reality in Vedanta philosophy.', originSchool: 'vedanta', keyThinkers: ['shankara'], relatedIdeas: ['atman', 'non-dualism'], challenges: ['materialism'], modernApplications: ['Comparative religion'], externalLinks: [] },
  { id: 'atman', name: 'Atman', description: 'The inner self or soul, identical with Brahman in Advaita Vedanta.', originSchool: 'vedanta', keyThinkers: ['shankara'], relatedIdeas: ['brahman', 'non-dualism'], challenges: ['buddhist-non-self'], modernApplications: ['Spirituality'], externalLinks: [] },
  { id: 'moksha', name: 'Moksha', description: 'Liberation from the cycle of birth and death in Indian philosophies.', originSchool: 'vedanta', keyThinkers: [], relatedIdeas: ['non-dualism'], challenges: ['worldly-attachment'], modernApplications: ['Spiritual practice'], externalLinks: [] },
  { id: 'ahimsa', name: 'Ahimsa', description: 'Non-violence as supreme virtue in Jainism and beyond.', originSchool: 'jain-philosophy', keyThinkers: ['mahavira'], relatedIdeas: ['anekantavada', 'syadvada'], challenges: ['just-war-theory'], modernApplications: ['Vegetarianism', 'Nonviolent movements'], externalLinks: [] },
  { id: 'anekantavada', name: 'Anekantavada', description: 'Jain doctrine of non-absolutism: truth is many-sided.', originSchool: 'jain-philosophy', keyThinkers: [], relatedIdeas: ['syadvada'], challenges: ['dogmatism'], modernApplications: ['Pluralism'], externalLinks: [] },
  { id: 'syadvada', name: 'Syadvada', description: 'Jain theory of conditioned predication: statements are true in certain respects.', originSchool: 'jain-philosophy', keyThinkers: [], relatedIdeas: ['anekantavada'], challenges: ['absolutism'], modernApplications: ['Logic'], externalLinks: [] },
  { id: 'natural-philosophy', name: 'Natural Philosophy', description: 'Early rational inquiry into nature by pre-Socratic thinkers.', originSchool: 'presocratic', keyThinkers: ['thales', 'heraclitus'], relatedIdeas: ['logos', 'atomism'], challenges: ['mythology'], modernApplications: ['Science history'], externalLinks: [] },
  { id: 'logos', name: 'Logos', description: 'Principle of order and reason in the cosmos.', originSchool: 'presocratic', keyThinkers: ['heraclitus'], relatedIdeas: ['natural-philosophy'], challenges: ['irrationalism'], modernApplications: ['Philosophy of language'], externalLinks: [] },
  { id: 'atomism', name: 'Atomism', description: 'Theory that reality consists of indivisible atoms and void.', originSchool: 'presocratic', keyThinkers: ['democritus'], relatedIdeas: ['natural-philosophy'], challenges: ['continuous-substance'], modernApplications: ['Science of matter'], externalLinks: [] },
  { id: 'elements-theory', name: 'Elements Theory', description: 'Classical idea that nature is composed of basic elements.', originSchool: 'presocratic', keyThinkers: ['empedocles'], relatedIdeas: ['natural-philosophy'], challenges: ['atomic-theory'], modernApplications: ['History of science'], externalLinks: [] },
  { id: 'materialism', name: 'Materialism', description: 'View that matter is primary and all phenomena are physical.', originSchool: 'carvaka', keyThinkers: ['brihaspati'], relatedIdeas: ['hedonism', 'skepticism'], challenges: ['idealism', 'theism'], modernApplications: ['Philosophy of mind'], externalLinks: [] },
  { id: 'hedonism', name: 'Hedonism', description: 'Ethical view that pleasure is the highest good.', originSchool: 'carvaka', keyThinkers: [], relatedIdeas: ['utilitarianism'], challenges: ['virtue-ethics'], modernApplications: ['Well-being studies'], externalLinks: [] },
  { id: 'skepticism', name: 'Skepticism', description: 'Doubt about the possibility of certain knowledge.', originSchool: 'hellenistic', keyThinkers: ['sextus-empiricus'], relatedIdeas: ['ataraxia'], challenges: ['dogmatism'], modernApplications: ['Epistemology'], externalLinks: [] },
  { id: 'pratyaksha', name: 'Pratyaksha (Perception as Knowledge)', description: 'Carvaka emphasis on direct perception as the only valid knowledge source.', originSchool: 'carvaka', keyThinkers: [], relatedIdeas: ['materialism'], challenges: ['inference-theories'], modernApplications: ['Epistemology'], externalLinks: [] },
  { id: 'impermanence', name: 'Impermanence (Anicca)', description: 'Buddhist doctrine that all conditioned phenomena are transient.', originSchool: 'buddhism', keyThinkers: ['buddha'], relatedIdeas: ['dependent-origination', 'non-self'], challenges: ['essentialism'], modernApplications: ['Mindfulness'], externalLinks: [] },
  { id: 'non-self', name: 'Non-self (Anatta)', description: 'Buddhist claim that there is no permanent, unchanging self.', originSchool: 'buddhism', keyThinkers: ['buddha'], relatedIdeas: ['dependent-origination', 'impermanence'], challenges: ['atman'], modernApplications: ['Psychology of self'], externalLinks: [] },
  { id: 'dependent-origination', name: 'Dependent Origination', description: 'Buddhist principle that phenomena arise interdependently.', originSchool: 'buddhism', keyThinkers: ['buddha'], relatedIdeas: ['impermanence', 'non-self'], challenges: ['substance-metaphysics'], modernApplications: ['Systems thinking'], externalLinks: [] },
  { id: 'dharma', name: 'Dharma', description: 'Moral order and duty; core in Indian traditions.', originSchool: 'eastern-ancient', keyThinkers: [], relatedIdeas: ['karma', 'middle-way'], challenges: ['relativism'], modernApplications: ['Ethics'], externalLinks: [] },
  { id: 'karma', name: 'Karma', description: 'Law of moral causation where actions have consequences.', originSchool: 'eastern-ancient', keyThinkers: [], relatedIdeas: ['dharma', 'rebirth'], challenges: ['fatalism'], modernApplications: ['Moral psychology'], externalLinks: [] },
  { id: 'dao', name: 'The Way (Dao)', description: 'Central Daoist concept of the natural way of things.', originSchool: 'eastern-ancient', keyThinkers: ['laozi'], relatedIdeas: ['wu-wei'], challenges: ['legalism'], modernApplications: ['Environmental ethics'], externalLinks: [] },
  { id: 'middle-way', name: 'Middle Way', description: 'Buddhist path avoiding extremes of indulgence and asceticism.', originSchool: 'buddhism', keyThinkers: ['buddha'], relatedIdeas: ['four-noble-truths'], challenges: ['ascetic-extremes'], modernApplications: ['Therapeutic balance'], externalLinks: [] },
  { id: 'rajadharma', name: 'Rajadharma', description: 'Duties of a ruler in Indian political thought.', originSchool: 'ancient-indian-political-thought', keyThinkers: ['chanakya'], relatedIdeas: ['arthashastra'], challenges: ['tyranny'], modernApplications: ['Governance'], externalLinks: [] },
  { id: 'arthashastra', name: 'Arthashastra', description: 'Treatise on statecraft, economic policy, and military strategy.', originSchool: 'ancient-indian-political-thought', keyThinkers: ['chanakya'], relatedIdeas: ['statecraft', 'rajadharma'], challenges: ['idealism'], modernApplications: ['Political science'], externalLinks: [] },
  { id: 'ataraxia', name: 'Ataraxia', description: 'Hellenistic ideal of tranquility and freedom from disturbance.', originSchool: 'hellenistic', keyThinkers: ['epicurus'], relatedIdeas: ['practical-wisdom'], challenges: ['anxiety'], modernApplications: ['Therapeutic philosophy'], externalLinks: [] },
  { id: 'cosmopolitanism', name: 'Cosmopolitanism', description: 'View that all humans belong to a single moral community.', originSchool: 'hellenistic', keyThinkers: ['stoics'], relatedIdeas: ['universalism'], challenges: ['nationalism'], modernApplications: ['Global ethics'], externalLinks: [] },
  { id: 'practical-wisdom', name: 'Practical Wisdom (Phronesis)', description: 'Aristotle’s notion of sound judgment in action.', originSchool: 'classical', keyThinkers: ['aristotle'], relatedIdeas: ['virtue-ethics', 'golden-mean'], challenges: ['rule-fetishism'], modernApplications: ['Leadership'], externalLinks: [] }
];
