import { Philosopher } from '../types/philosophy';

export const philosophersData: Philosopher[] = [
  {
    id: 'socrates',
    name: 'Socrates',
    years: '470-399 BCE',
    nationality: 'Greek',
    biography: 'Socrates was a classical Greek philosopher credited as the founder of Western philosophy and among the first moral philosophers of the ethical tradition of thought. He is known for his method of questioning and his claim that "the unexamined life is not worth living."',
    keyIdeas: ['socratic-method', 'virtue-is-knowledge', 'care-of-soul'],
    influences: ['Pre-Socratic naturalists', 'Sophists'],
    influenced: ['plato', 'xenophon', 'antisthenes'],
    schools: ['classical'],
    challenges: ['sophistry', 'moral-relativism'],
    quotes: [
      'The unexamined life is not worth living',
      'I know that I know nothing',
      'Virtue is knowledge',
      'No one does wrong willingly'
    ],
    externalLinks: [
      { title: 'Stanford Encyclopedia: Socrates', url: '#', type: 'encyclopedia' },
      { title: 'The Trial of Socrates', url: '#', type: 'article' },
      { title: 'Socratic Method in Practice', url: '#', type: 'video' }
    ]
  },
  {
    id: 'plato',
    name: 'Plato',
    years: '428-348 BCE',
    nationality: 'Greek',
    keyWorks: ['Republic', 'Phaedo', 'Symposium', 'Timaeus'],
    biography: 'Plato was an ancient Greek philosopher born in Athens during the Classical period. He founded the Platonist school of thought and the Academy, the first institution of higher learning in the Western world.',
    keyIdeas: ['theory-of-forms', 'philosopher-king', 'tripartite-soul', 'allegory-of-cave'],
    influences: ['socrates', 'pythagoras', 'heraclitus'],
    influenced: ['aristotle', 'plotinus', 'augustine'],
    schools: ['classical'],
    challenges: ['materialism', 'sophistry', 'democracy'],
    quotes: [
      'The beginning is the most important part of the work',
      'Ignorance, the root and stem of all evil',
      'Justice is nothing other than the advantage of the stronger',
      'Philosophy begins in wonder'
    ],
    externalLinks: [
      { title: 'Stanford Encyclopedia: Plato', url: '#', type: 'encyclopedia' },
      { title: 'The Republic - Full Text', url: '#', type: 'book' },
      { title: 'Plato\'s Cave Allegory Explained', url: '#', type: 'video' }
    ]
  },
  {
    id: 'aristotle',
    name: 'Aristotle',
    years: '384-322 BCE',
    nationality: 'Greek',
    keyWorks: ['Nicomachean Ethics', 'Politics', 'Metaphysics', 'Poetics'],
    biography: 'Aristotle was a Greek philosopher and polymath during the Classical period. His writings cover many subjects including physics, biology, zoology, metaphysics, logic, ethics, aesthetics, poetry, theatre, music, rhetoric, psychology, linguistics, economics, politics, and government.',
    keyIdeas: ['virtue-ethics', 'golden-mean', 'four-causes', 'syllogistic-logic'],
    influences: ['plato', 'pre-socratics'],
    influenced: ['aquinas', 'averroes', 'avicenna'],
    schools: ['classical'],
    challenges: ['platonic-idealism', 'pre-socratic-materialism'],
    quotes: [
      'We are what we repeatedly do. Excellence, then, is not an act, but a habit',
      'The whole is greater than the sum of its parts',
      'Man is by nature a political animal',
      'Knowing yourself is the beginning of all wisdom'
    ],
    externalLinks: [
      { title: 'Stanford Encyclopedia: Aristotle', url: '#', type: 'encyclopedia' },
      { title: 'Nicomachean Ethics - Study Guide', url: '#', type: 'article' },
      { title: 'Aristotle\'s Logic System', url: '#', type: 'course' }
    ]
  },
  {
    id: 'kant',
    name: 'Immanuel Kant',
    years: '1724-1804',
    nationality: 'German',
    keyWorks: ['Critique of Pure Reason', 'Critique of Practical Reason', 'Critique of Judgment'],
    biography: 'Immanuel Kant was a German philosopher and one of the central Enlightenment thinkers. His comprehensive and systematic works in epistemology, metaphysics, ethics, and aesthetics have made him one of the most influential figures in modern Western philosophy.',
    keyIdeas: ['categorical-imperative', 'transcendental-idealism', 'synthetic-a-priori', 'moral-autonomy'],
    influences: ['hume', 'rousseau', 'leibniz'],
    influenced: ['fichte', 'schelling', 'hegel'],
    schools: ['german-idealism'],
    challenges: ['dogmatic-metaphysics', 'moral-heteronomy', 'empirical-skepticism'],
    quotes: [
      'Act only according to that maxim whereby you can at the same time will that it should become a universal law',
      'Sapere aude! Have courage to use your own understanding',
      'Two things fill the mind with ever-increasing wonder and awe: the starry heavens above me and the moral law within me',
      'Enlightenment is man\'s emergence from his self-incurred immaturity'
    ],
    externalLinks: [
      { title: 'Stanford Encyclopedia: Kant', url: '#', type: 'encyclopedia' },
      { title: 'Kant\'s Categorical Imperative Explained', url: '#', type: 'video' },
      { title: 'Critical Philosophy Course', url: '#', type: 'course' }
    ]
  },
  {
    id: 'nietzsche',
    name: 'Friedrich Nietzsche',
    years: '1844-1900',
    nationality: 'German',
    keyWorks: ['Beyond Good and Evil', 'Thus Spoke Zarathustra', 'The Genealogy of Morals'],
    biography: 'Friedrich Nietzsche was a German philosopher, cultural critic, composer, poet, and philologist whose work has exerted a profound influence on modern intellectual history. He is known for his radical critique of traditional European morality and religion.',
    keyIdeas: ['will-to-power', 'eternal-recurrence', 'ubermensch', 'god-is-dead'],
    influences: ['schopenhauer', 'emerson', 'dostoevsky'],
    influenced: ['heidegger', 'sartre', 'foucault'],
    schools: ['existentialism-precursors'],
    challenges: ['christian-morality', 'platonic-idealism', 'german-idealism'],
    quotes: [
      'God is dead. God remains dead. And we have killed him',
      'What does not kill me, makes me stronger',
      'He who has a why to live can bear almost any how',
      'In individuals, insanity is rare; but in groups, parties, nations and epochs, it is the rule'
    ],
    externalLinks: [
      { title: 'Stanford Encyclopedia: Nietzsche', url: '#', type: 'encyclopedia' },
      { title: 'Thus Spoke Zarathustra Analysis', url: '#', type: 'article' },
      { title: 'Nietzsche\'s Philosophy Explained', url: '#', type: 'video' }
    ]
  },
  {
    id: 'confucius',
    name: 'Confucius',
    years: '551-479 BCE',
    nationality: 'Chinese',
    keyWorks: ['Analects'],
    biography: 'Confucius was a Chinese philosopher and politician of the Spring and Autumn period who is traditionally considered the paragon of Chinese sages. His philosophy emphasized personal and governmental morality, correctness of social relationships, justice, kindness, and sincerity.',
    keyIdeas: ['ren-benevolence', 'li-ritual', 'junzi-gentleman', 'rectification-of-names'],
    influences: ['Zhou dynasty traditions', 'Ancient Chinese wisdom'],
    influenced: ['mencius', 'xunzi', 'neo-confucians'],
    schools: ['eastern-ancient'],
    challenges: ['social-chaos', 'moral-decay', 'political-corruption'],
    quotes: [
      'It does not matter how slowly you go as long as you do not stop',
      'The man who moves a mountain begins by carrying away small stones',
      'Choose a job you love, and you will never have to work a day in your life',
      'Real knowledge is to know the extent of one\'s ignorance'
    ],
    externalLinks: [
      { title: 'Stanford Encyclopedia: Confucius', url: '#', type: 'encyclopedia' },
      { title: 'The Analects - Complete Text', url: '#', type: 'book' },
      { title: 'Confucian Ethics Today', url: '#', type: 'article' }
    ]
  },
    {
    id: 'adi-shankara',
    name: 'Adi Shankara',
    years: '788-820 CE',
    nationality: 'Indian',
    keyWorks: ['Brahma Sutra Bhashya', 'Upadesasahasri'],
    biography: 'Adi Shankara was an Indian philosopher and theologian who consolidated the doctrine of Advaita Vedanta, emphasizing non-dualism and the unity of Atman and Brahman.',
    keyIdeas: ['advaita-vedanta', 'non-dualism', 'maya-illusion'],
    influences: ['upanishads'],
    influenced: ['ramanuja', 'vivekananda'],
    schools: ['vedanta'],
    challenges: ['buddhist-philosophy', 'ritualism'],
    quotes: ['Brahman is real, the world is illusory, the self is none other than Brahman'],
    externalLinks: [
      { title: 'Advaita Vedanta - SEP', url: '#', type: 'encyclopedia' },
      { title: 'Shankara’s Works', url: '#', type: 'book' }
    ]
  },
  {
    id: 'ramanuja',
    name: 'Ramanuja',
    years: '1017-1137 CE',
    nationality: 'Indian',
    keyWorks: ['Sri Bhashya', 'Vedarthasangraha'],
    biography: 'Ramanuja was a Hindu theologian and philosopher, the most important proponent of Vishishtadvaita (qualified non-dualism).',
    keyIdeas: ['vishishtadvaita', 'bhakti-devotion'],
    influences: ['vedic-tradition'],
    influenced: ['madhva', 'bhakti-movement'],
    schools: ['vedanta'],
    challenges: ['advaita-vedanta'],
    quotes: ['Surrender to God is the supreme means of liberation'],
    externalLinks: [
      { title: 'Ramanuja - SEP', url: '#', type: 'encyclopedia' },
      { title: 'Sri Bhashya Summary', url: '#', type: 'article' }
    ]
  },
  {
    id: 'madhva',
    name: 'Madhvacharya',
    years: '1238-1317 CE',
    nationality: 'Indian',
    keyWorks: ['Anuvyakhyana', 'Mahabharata Tatparya Nirnaya'],
    biography: 'Madhvacharya was the chief proponent of the Dvaita school of Vedanta, advocating dualism between the individual soul and supreme God.',
    keyIdeas: ['dvaita-dualism', 'bhakti-devotion'],
    influences: ['ramanuja'],
    influenced: ['bhakti-movement'],
    schools: ['vedanta'],
    challenges: ['advaita-vedanta'],
    quotes: ['The soul and God are eternally distinct'],
    externalLinks: [
      { title: 'Dvaita Vedanta - SEP', url: '#', type: 'encyclopedia' },
      { title: 'Madhvacharya Texts', url: '#', type: 'book' }
    ]
  },
  {
    id: 'chanakya',
    name: 'Chanakya (Kautilya)',
    years: 'c. 375-283 BCE',
    nationality: 'Indian',
    keyWorks: ['Arthashastra'],
    biography: 'Chanakya was an ancient Indian teacher, philosopher, economist, jurist, and royal advisor. His Arthashastra is a treatise on statecraft, economic policy, and military strategy.',
    keyIdeas: ['political-realism', 'statecraft', 'economics'],
    influences: ['mauryan-politics'],
    influenced: ['indian-political-thought'],
    schools: ['ancient-indian-political-thought'],
    challenges: ['idealism'],
    quotes: ['A person should not be too honest. Straight trees are cut first and honest people are screwed first.'],
    externalLinks: [
      { title: 'Arthashastra Overview', url: '#', type: 'article' },
      { title: 'Chanakya Neeti', url: '#', type: 'book' }
    ]
  },
    {
    id: 'buddha',
    name: 'Siddhartha Gautama (Buddha)',
    years: '563-483 BCE',
    nationality: 'Indian',
    keyWorks: ['Dhammapada'],
    biography: 'Founder of Buddhism, taught Four Noble Truths and the Eightfold Path.',
    keyIdeas: ['four-noble-truths', 'eightfold-path', 'impermanence'],
    influences: ['indian-spiritual-traditions'],
    influenced: ['buddhism-worldwide'],
    schools: ['buddhism'],
    challenges: ['vedic-ritualism'],
    quotes: ['All conditioned things are impermanent'],
    externalLinks: [{ title: 'Stanford Encyclopedia: Buddha', url: '#', type: 'encyclopedia' }]
  },
  {
    id: 'nagarjuna',
    name: 'Nagarjuna',
    years: '150-250 CE',
    nationality: 'Indian',
    keyWorks: ['Mūlamadhyamakakārikā'],
    biography: 'Buddhist philosopher who founded Madhyamaka school of emptiness.',
    keyIdeas: ['emptiness-sunyata', 'middle-way'],
    influences: ['buddha'],
    influenced: ['zen', 'tibetan-buddhism'],
    schools: ['madhyamaka'],
    challenges: ['essentialism'],
    quotes: ['Emptiness wrongly grasped is like picking up a poisonous snake by the wrong end'],
    externalLinks: [{ title: 'Stanford Encyclopedia: Nagarjuna', url: '#', type: 'encyclopedia' }]
  },
    {
    id: 'mahavira',
    name: 'Mahavira',
    years: '599-527 BCE',
    nationality: 'Indian',
    keyWorks: ['Jain Agamas (teachings)'],
    biography: 'Mahavira, also known as Vardhamana, was the 24th Tirthankara of Jainism. He revitalized and spread Jain philosophy, emphasizing non-violence (ahimsa), truth, and asceticism.',
    keyIdeas: ['ahimsa-nonviolence', 'anekantavada-manysidedness', 'aparigraha-nonpossession'],
    influences: ['parshvanatha', 'sramana-traditions'],
    influenced: ['jainism', 'gandhi'],
    schools: ['jain-philosophy'],
    challenges: ['vedic-ritualism', 'materialism'],
    quotes: [
      'All souls are equal and eternal',
      'Non-violence is the highest religion',
      'A man is seated on top of a tree in the midst of a burning forest. He sees all living beings perish, but he does not realize that the same fate is soon to overtake him also.'
    ],
    externalLinks: [
      { title: 'Mahavira - Stanford Encyclopedia', url: '#', type: 'encyclopedia' },
      { title: 'Principles of Jainism', url: '#', type: 'article' }
    ]
  },
  {
    id: 'chaitanya',
    name: 'Chaitanya Mahaprabhu',
    years: '1486-1534',
    nationality: 'Indian',
    keyWorks: ['Chaitanya Charitamrita (biography)'],
    biography: 'Chaitanya Mahaprabhu was a saint and religious reformer in Bengal, considered the founder of Gaudiya Vaishnavism. He emphasized ecstatic devotion (bhakti) to Krishna through kirtan (devotional singing).',
    keyIdeas: ['bhakti-devotion', 'gaudiya-vaishnavism', 'kirtan'],
    influences: ['bhagavata-purana', 'ramanuja'],
    influenced: ['bhakti-movement', 'iskcon'],
    schools: ['vaishnavism', 'bhakti-philosophy'],
    challenges: ['ritualism', 'caste-orthodoxy'],
    quotes: [
      'Chant the holy name, chant the holy name, chant the holy name of the Lord, for there is no other way to liberation in this age of Kali.',
      'When will tears flow from my eyes as I chant Your holy name?'
    ],
    externalLinks: [
      { title: 'Gaudiya Vaishnavism Overview', url: '#', type: 'article' },
      { title: 'Chaitanya Charitamrita', url: '#', type: 'book' }
    ]
  },
  {
    id: 'rabindranath-tagore',
    name: 'Rabindranath Tagore',
    years: '1861-1941',
    nationality: 'Indian',
    keyWorks: ['Sadhana', 'The Religion of Man'],
    biography: 'Tagore was a poet, philosopher, and polymath who reshaped Bengali literature and music. His philosophy emphasized humanism, universalism, and spiritual freedom.',
    keyIdeas: ['humanism', 'universalism', 'education'],
    influences: ['vedanta', 'western-humanism'],
    influenced: ['gandhi', 'indian-modernism'],
    schools: ['modern-indian-philosophy'],
    challenges: ['colonialism'],
    quotes: ['The highest education is that which does not merely give us information but makes our life in harmony with all existence'],
    externalLinks: [
      { title: 'Tagore Philosophy Overview', url: '#', type: 'article' },
      { title: 'The Religion of Man', url: '#', type: 'book' }
    ]
  },
  {
    id: 'laozi',
    name: 'Laozi',
    years: '6th century BCE',
    nationality: 'Chinese',
    keyWorks: ['Tao Te Ching'],
    biography: 'Founder of Daoism, emphasized harmony with the Tao, simplicity, and naturalness.',
    keyIdeas: ['wu-wei', 'tao-the-way', 'naturalism'],
    influences: ['ancient-chinese-cosmology'],
    influenced: ['zhuangzi', 'neo-taoists'],
    schools: ['daoism'],
    challenges: ['ritualism', 'political-control'],
    quotes: ['A journey of a thousand miles begins with a single step'],
    externalLinks: [{ title: 'Stanford Encyclopedia: Laozi', url: '#', type: 'encyclopedia' }]
  },
  {
    id: 'zhuangzi',
    name: 'Zhuangzi',
    years: '369-286 BCE',
    nationality: 'Chinese',
    keyWorks: ['Zhuangzi'],
    biography: 'Daoist philosopher known for allegory, paradox, and the relativity of perspectives.',
    keyIdeas: ['relativity-of-perspectives', 'freedom', 'dream-of-butterfly'],
    influences: ['laozi'],
    influenced: ['chan-buddhism'],
    schools: ['daoism'],
    challenges: ['dogmatism'],
    quotes: ['Am I a man dreaming I am a butterfly, or a butterfly dreaming I am a man?'],
    externalLinks: [{ title: 'Zhuangzi Text', url: '#', type: 'book' }]
  },
  {
    id: 'mencius',
    name: 'Mencius',
    years: '372-289 BCE',
    nationality: 'Chinese',
    keyWorks: ['Mencius'],
    biography: 'Confucian philosopher emphasizing innate human goodness and benevolent governance.',
    keyIdeas: ['innate-goodness', 'benevolent-rule'],
    influences: ['confucius'],
    influenced: ['neo-confucianism'],
    schools: ['confucianism'],
    challenges: ['xunzi-human-nature-evil'],
    quotes: ['The great man is he who does not lose his childlike heart'],
    externalLinks: [{ title: 'Stanford Encyclopedia: Mencius', url: '#', type: 'encyclopedia' }]
  },
  {
    id: 'xunzi',
    name: 'Xunzi',
    years: '310-235 BCE',
    nationality: 'Chinese',
    keyWorks: ['Xunzi'],
    biography: 'Confucian thinker who argued human nature is inherently selfish and needs cultivation.',
    keyIdeas: ['human-nature-evil', 'ritual-cultivation'],
    influences: ['confucius'],
    influenced: ['legalists'],
    schools: ['confucianism'],
    challenges: ['mencius-human-goodness'],
    quotes: ['Human nature is evil; goodness is a result of conscious activity'],
    externalLinks: [{ title: 'Xunzi Essays', url: '#', type: 'book' }]
  },
    {
    id: 'augustine',
    name: 'Saint Augustine',
    years: '354-430',
    nationality: 'Roman (North African)',
    keyWorks: ['Confessions', 'The City of God'],
    biography: 'Augustine of Hippo was a Christian philosopher and theologian whose writings shaped Western Christianity and Western philosophy. He integrated classical philosophy with Christian doctrine.',
    keyIdeas: ['original-sin', 'just-war-theory', 'faith-and-reason'],
    influences: ['plato', 'scriptures'],
    influenced: ['aquinas', 'luther'],
    schools: ['christian-philosophy'],
    challenges: ['manichaeism', 'skepticism'],
    quotes: ['Our hearts are restless until they rest in you'],
    externalLinks: [
      { title: 'Augustine - Stanford Encyclopedia', url: '#', type: 'encyclopedia' }
    ]
  },
  {
    id: 'thomas-aquinas',
    name: 'Thomas Aquinas',
    years: '1225-1274',
    nationality: 'Italian',
    keyWorks: ['Summa Theologica', 'Summa Contra Gentiles'],
    biography: 'Aquinas was a Dominican friar and theologian who systematized scholastic philosophy, integrating Aristotelian philosophy with Christian theology.',
    keyIdeas: ['natural-law', 'five-ways', 'faith-and-reason'],
    influences: ['aristotle', 'augustine'],
    influenced: ['catholic-scholasticism', 'modern-ethics'],
    schools: ['scholasticism'],
    challenges: ['islamic-philosophy', 'secularism'],
    quotes: ['To one who has faith, no explanation is necessary. To one without faith, no explanation is possible'],
    externalLinks: [
      { title: 'Aquinas - Stanford Encyclopedia', url: '#', type: 'encyclopedia' }
    ]
  },
  {
    id: 'descartes',
    name: 'René Descartes',
    years: '1596-1650',
    nationality: 'French',
    keyWorks: ['Meditations on First Philosophy', 'Discourse on Method'],
    biography: 'Descartes was a French philosopher, mathematician, and scientist, often called the father of modern philosophy. He emphasized reason as the foundation of knowledge.',
    keyIdeas: ['cogito-ergo-sum', 'dualism', 'methodic-doubt'],
    influences: ['augustine', 'aristotle'],
    influenced: ['spinoza', 'locke', 'kant'],
    schools: ['rationalism'],
    challenges: ['skepticism'],
    quotes: ['I think, therefore I am'],
    externalLinks: [
      { title: 'Descartes - Stanford Encyclopedia', url: '#', type: 'encyclopedia' }
    ]
  },
  {
    id: 'locke',
    name: 'John Locke',
    years: '1632-1704',
    nationality: 'English',
    keyWorks: ['Essay Concerning Human Understanding', 'Two Treatises of Government'],
    biography: 'Locke was an English philosopher and physician, regarded as the father of liberalism. He advanced theories of mind, knowledge, and government.',
    keyIdeas: ['empiricism', 'natural-rights', 'social-contract'],
    influences: ['hobbes', 'bacon'],
    influenced: ['rousseau', 'jefferson'],
    schools: ['empiricism', 'liberalism'],
    challenges: ['innatism', 'absolutism'],
    quotes: ['All mankind... being all equal and independent, no one ought to harm another in his life, health, liberty or possessions'],
    externalLinks: [
      { title: 'Locke - Stanford Encyclopedia', url: '#', type: 'encyclopedia' }
    ]
  },
  {
    id: 'rousseau',
    name: 'Jean-Jacques Rousseau',
    years: '1712-1778',
    nationality: 'Swiss-French',
    keyWorks: ['The Social Contract', 'Emile'],
    biography: 'Rousseau was a Genevan philosopher whose ideas influenced the Enlightenment, the French Revolution, and modern political thought.',
    keyIdeas: ['general-will', 'social-contract', 'natural-goodness'],
    influences: ['locke', 'stoics'],
    influenced: ['kant', 'romanticism'],
    schools: ['enlightenment'],
    challenges: ['absolutism'],
    quotes: ['Man is born free, and everywhere he is in chains'],
    externalLinks: [
      { title: 'Rousseau - Stanford Encyclopedia', url: '#', type: 'encyclopedia' }
    ]
  },
  {
    id: 'hume',
    name: 'David Hume',
    years: '1711-1776',
    nationality: 'Scottish',
    keyWorks: ['A Treatise of Human Nature', 'Enquiry Concerning Human Understanding'],
    biography: 'Hume was a Scottish Enlightenment philosopher known for his empiricism, skepticism, and naturalism.',
    keyIdeas: ['empiricism', 'skepticism', 'problem-of-induction'],
    influences: ['locke', 'newton'],
    influenced: ['kant', 'mill'],
    schools: ['empiricism'],
    challenges: ['rationalism'],
    quotes: ['Reason is, and ought only to be the slave of the passions'],
    externalLinks: [
      { title: 'Hume - Stanford Encyclopedia', url: '#', type: 'encyclopedia' }
    ]
  },
  {
    id: 'hegel',
    name: 'Georg Wilhelm Friedrich Hegel',
    years: '1770-1831',
    nationality: 'German',
    keyWorks: ['Phenomenology of Spirit', 'Science of Logic'],
    biography: 'Hegel was a German philosopher and key figure of German Idealism. His dialectical method and philosophy of history influenced modern thought.',
    keyIdeas: ['dialectics', 'absolute-idealism', 'spirit'],
    influences: ['kant', 'fichte', 'schelling'],
    influenced: ['marx', 'existentialists'],
    schools: ['german-idealism'],
    challenges: ['empiricism'],
    quotes: ['The real is the rational and the rational is the real'],
    externalLinks: [
      { title: 'Hegel - Stanford Encyclopedia', url: '#', type: 'encyclopedia' }
    ]
  },
  {
    id: 'marx',
    name: 'Karl Marx',
    years: '1818-1883',
    nationality: 'German',
    keyWorks: ['The Communist Manifesto', 'Das Kapital'],
    biography: 'Marx was a German philosopher, economist, and revolutionary socialist. His theories about society, economics, and politics are collectively understood as Marxism.',
    keyIdeas: ['historical-materialism', 'class-struggle', 'alienation'],
    influences: ['hegel', 'rousseau'],
    influenced: ['lenin', 'critical-theory'],
    schools: ['marxism'],
    challenges: ['capitalism'],
    quotes: ['The philosophers have only interpreted the world, in various ways. The point, however, is to change it'],
    externalLinks: [
      { title: 'Marx - Stanford Encyclopedia', url: '#', type: 'encyclopedia' }
    ]
  },
  {
    id: 'sartre',
    name: 'Jean-Paul Sartre',
    years: '1905-1980',
    nationality: 'French',
    keyWorks: ['Being and Nothingness', 'Existentialism is a Humanism'],
    biography: 'Sartre was a French existentialist philosopher, playwright, and novelist. He emphasized human freedom, bad faith, responsibility, and the absurd.',
    keyIdeas: ['existentialism', 'bad-faith', 'radical-freedom'],
    influences: ['heidegger', 'husserl'],
    influenced: ['foucault', 'camus', 'de-beauvoir', 'fanon'],
    schools: ['existentialism'],
    challenges: ['determinism'],
    quotes: ['Man is condemned to be free'],
    externalLinks: [
      { title: 'Sartre - Stanford Encyclopedia', url: '#', type: 'encyclopedia' }
    ]
  },
  {
    id: 'simone-de-beauvoir',
    name: 'Simone de Beauvoir',
    years: '1908-1986',
    nationality: 'French',
    keyWorks: ['The Second Sex'],
    biography: 'Simone de Beauvoir was a French philosopher and feminist who analyzed the construction of women as "the Other."',
    keyIdeas: ['existentialism', 'feminism', 'freedom'],
    influences: ['sartre', 'hegel'],
    influenced: ['feminist-philosophy'],
    schools: ['existentialism', 'feminism'],
    challenges: ['patriarchy'],
    quotes: ['One is not born, but rather becomes, a woman'],
    externalLinks: [
      { title: 'Beauvoir - Stanford Encyclopedia', url: '#', type: 'encyclopedia' }
    ]
  },
  {
    id: 'al-farabi',
    name: 'Al-Farabi',
    years: '872-950',
    nationality: 'Persian',
    keyWorks: ['Virtuous City'],
    biography: 'Islamic philosopher who merged Plato and Aristotle with Islamic thought.',
    keyIdeas: ['ideal-state', 'logic', 'virtue'],
    influences: ['plato', 'aristotle'],
    influenced: ['avicenna'],
    schools: ['islamic-philosophy'],
    challenges: ['orthodoxy'],
    quotes: ['The aim of society is the attainment of true happiness'],
    externalLinks: [{ title: 'Stanford Encyclopedia: Al-Farabi', url: '#', type: 'encyclopedia' }]
  },
  {
    id: 'avicenna',
    name: 'Avicenna (Ibn Sina)',
    years: '980-1037',
    nationality: 'Persian',
    keyWorks: ['The Book of Healing', 'The Canon of Medicine'],
    biography: 'Polymath who wrote extensively on philosophy and medicine.',
    keyIdeas: ['essence-and-existence', 'soul', 'knowledge'],
    influences: ['aristotle', 'al-farabi'],
    influenced: ['aquinas'],
    schools: ['islamic-philosophy'],
    challenges: ['theologians'],
    quotes: ['The world is divided into men who have wit and no religion and men who have religion and no wit'],
    externalLinks: [{ title: 'Stanford Encyclopedia: Avicenna', url: '#', type: 'encyclopedia' }]
  },
  {
    id: 'averroes',
    name: 'Averroes (Ibn Rushd)',
    years: '1126-1198',
    nationality: 'Andalusian',
    keyWorks: ['Commentaries on Aristotle'],
    biography: 'Islamic philosopher who defended Aristotelian philosophy against critics.',
    keyIdeas: ['double-truth', 'reason-and-faith'],
    influences: ['aristotle'],
    influenced: ['aquinas', 'scholastics'],
    schools: ['islamic-philosophy'],
    challenges: ['al-ghazali'],
    quotes: ['Ignorance leads to fear, fear leads to hate, and hate leads to violence'],
    externalLinks: [{ title: 'Stanford Encyclopedia: Averroes', url: '#', type: 'encyclopedia' }]
  },
  {
    id: 'al-ghazali',
    name: 'Al-Ghazali',
    years: '1058-1111',
    nationality: 'Persian',
    keyWorks: ['The Incoherence of the Philosophers'],
    biography: 'Critiqued philosophers and defended Islamic orthodoxy while embracing mysticism.',
    keyIdeas: ['sufi-mysticism', 'limits-of-reason'],
    influences: ['islamic-theology'],
    influenced: ['averroes', 'islamic-mysticism'],
    schools: ['islamic-philosophy'],
    challenges: ['aristotelian-rationalism'],
    quotes: ['Knowledge without action is wastefulness'],
    externalLinks: [{ title: 'Stanford Encyclopedia: Al-Ghazali', url: '#', type: 'encyclopedia' }]
  },
  {
    id: 'zoroaster',
    name: 'Zoroaster',
    years: 'c. 1200 BCE',
    nationality: 'Persian',
    keyWorks: ['Avesta'],
    biography: 'Founder of Zoroastrianism, taught dualism of good and evil.',
    keyIdeas: ['dualism', 'good-vs-evil'],
    influences: ['ancient-iranian-religion'],
    influenced: ['judaism', 'christianity'],
    schools: ['zoroastrianism'],
    challenges: ['polytheism'],
    quotes: ['Good thoughts, good words, good deeds'],
    externalLinks: [{ title: 'Zoroastrianism Overview', url: '#', type: 'article' }]
  },
  {
    id: 'hypatia',
    name: 'Hypatia of Alexandria',
    years: '350-415 CE',
    nationality: 'Greek-Egyptian',
    keyWorks: ['Commentaries on Diophantus'],
    biography: 'Neoplatonist philosopher, mathematician, and astronomer in Alexandria.',
    keyIdeas: ['neoplatonism', 'mathematics', 'astronomy'],
    influences: ['plotinus'],
    influenced: ['renaissance-humanists'],
    schools: ['neoplatonism'],
    challenges: ['christian-extremists'],
    quotes: ['Reserve your right to think, for even to think wrongly is better than not to think at all'],
    externalLinks: [{ title: 'Hypatia Profile', url: '#', type: 'article' }]
  },
    {
    id: 'schopenhauer',
    name: 'Arthur Schopenhauer',
    years: '1788-1860',
    nationality: 'German',
    keyWorks: ['The World as Will and Representation', 'On the Basis of Morality', 'Parerga and Paralipomena'],
    biography: 'Schopenhauer was a German philosopher known for his metaphysical doctrine that the world is driven by a blind, irrational will. He is regarded as a major figure in pessimism and influenced existentialism, psychoanalysis, and art theory.',
    keyIdeas: ['will-as-thing-in-itself', 'pessimism', 'aesthetic-contemplation', 'asceticism'],
    influences: ['kant', 'plato', 'upanishads', 'buddhism'],
    influenced: ['nietzsche', 'freud', 'wagner'],
    schools: ['german-idealism', 'pessimism'],
    challenges: ['hegelian-idealism', 'rationalism'],
    quotes: [
      'The world is my representation',
      'Man can do what he wills but he cannot will what he wills',
      'Compassion is the basis of morality',
      'Life is a constant oscillation between desire and boredom'
    ],
    externalLinks: [
      { title: 'Stanford Encyclopedia: Schopenhauer', url: 'https://plato.stanford.edu/entries/schopenhauer/', type: 'encyclopedia' },
      { title: 'Internet Encyclopedia: Upanishads (Schopenhauer’s influence)', url: 'https://iep.utm.edu/upanisad/', type: 'encyclopedia' },
      { title: 'On the Basis of Morality - Wikipedia', url: 'https://en.wikipedia.org/wiki/On_the_Basis_of_Morality', type: 'article' },
      { title: 'On the Basis of Morality - Full Text (Project Gutenberg)', url: 'https://www.gutenberg.org/files/44929/44929-h/44929-h.htm', type: 'book' },
      { title: 'Philosophy Now: Schopenhauer’s Compassionate Morality', url: 'https://philosophynow.org/issues/52/Schopenhauers_Compassionate_Morality', type: 'article' }
    ]
  },
  {
    id: 'ibn-khaldun',
    name: 'Ibn Khaldun',
    years: '1332-1406',
    nationality: 'Tunisian',
    keyWorks: ['Muqaddimah'],
    biography: 'Historian and philosopher who developed theories on society and history.',
    keyIdeas: ['asabiyyah', 'cyclical-history'],
    influences: ['islamic-scholarship'],
    influenced: ['modern-sociology'],
    schools: ['islamic-philosophy'],
    challenges: ['linear-historiography'],
    quotes: ['History is a science'],
    externalLinks: [{ title: 'Ibn Khaldun Biography', url: '#', type: 'article' }]
  },
  {
    id: 'simonede-beauvoir',
    name: 'Simone de Beauvoir',
    years: '1908-1986',
    nationality: 'French',
    keyWorks: ['The Second Sex'],
    biography: 'Existentialist philosopher and feminist theorist.',
    keyIdeas: ['existentialism', 'feminism'],
    influences: ['sartre'],
    influenced: ['feminist-theory'],
    schools: ['existentialism'],
    challenges: ['patriarchy'],
    quotes: ['One is not born, but rather becomes, a woman'],
    externalLinks: [{ title: 'Stanford Encyclopedia: De Beauvoir', url: '#', type: 'encyclopedia' }]
  },
  {
    id: 'fanon',
    name: 'Frantz Fanon',
    years: '1925-1961',
    nationality: 'Martinican-Algerian',
    keyWorks: ['The Wretched of the Earth', 'Black Skin, White Masks'],
    biography: 'Philosopher of decolonization and psychology of oppression.',
    keyIdeas: ['anti-colonialism', 'psychoanalysis', 'liberation'],
    influences: ['hegel', 'marx'],
    influenced: ['postcolonial-theory'],
    schools: ['critical-theory'],
    challenges: ['colonialism'],
    quotes: ['The colonized can see right away if decolonization is taking place or not'],
    externalLinks: [{ title: 'Fanon Writings', url: '#', type: 'article' }]
  },

  {
    id: 'heidegger',
    name: 'Martin Heidegger',
    years: '1889-1976',
    nationality: 'German',
    keyWorks: ['Being and Time'],
    biography: 'German philosopher exploring ontology and the meaning of Being.',
    keyIdeas: ['being-in-the-world', 'dasein'],
    influences: ['husserl'],
    influenced: ['sartre', 'derrida'],
    schools: ['existentialism'],
    challenges: ['metaphysics'],
    quotes: ['Language is the house of Being'],
    externalLinks: [{ title: 'Stanford Encyclopedia: Heidegger', url: '#', type: 'encyclopedia' }]
  },
  {
    id: 'foucault',
    name: 'Michel Foucault',
    years: '1926-1984',
    nationality: 'French',
    keyWorks: ['Discipline and Punish', 'The History of Sexuality'],
    biography: 'Philosopher analyzing power, knowledge, and discourse.',
    keyIdeas: ['power-knowledge', 'biopolitics'],
    influences: ['nietzsche'],
    influenced: ['critical-theory'],
    schools: ['post-structuralism'],
    challenges: ['humanism'],
    quotes: ['Where there is power, there is resistance'],
    externalLinks: [{ title: 'Stanford Encyclopedia: Foucault', url: '#', type: 'encyclopedia' }]
  },
  {
    id: 'derrida',
    name: 'Jacques Derrida',
    years: '1930-2004',
    nationality: 'French-Algerian',
    keyWorks: ['Of Grammatology'],
    biography: 'Philosopher who developed deconstruction, critiquing metaphysical binaries.',
    keyIdeas: ['deconstruction', 'différance'],
    influences: ['heidegger'],
    influenced: ['postmodernism'],
    schools: ['post-structuralism'],
    challenges: ['structuralism'],
    quotes: ['There is nothing outside the text'],
    externalLinks: [{ title: 'Stanford Encyclopedia: Derrida', url: '#', type: 'encyclopedia' }]
  },
  {
    id: 'bell-hooks',
    name: 'bell hooks',
    years: '1952-2021',
    nationality: 'American',
    keyWorks: ['Ain’t I a Woman?', 'Teaching to Transgress'],
    biography: 'Cultural critic and feminist theorist.',
    keyIdeas: ['intersectionality', 'feminism', 'education'],
    influences: ['feminist-theory'],
    influenced: ['critical-pedagogy'],
    schools: ['critical-theory'],
    challenges: ['sexism', 'racism'],
    quotes: ['Feminism is for everybody'],
    externalLinks: [{ title: 'bell hooks Library', url: '#', type: 'article' }]
  },
  {
    id: 'quijano',
    name: 'Aníbal Quijano',
    years: '1928-2018',
    nationality: 'Peruvian',
    keyWorks: ['Coloniality of Power'],
    biography: 'Latin American thinker who developed the concept of coloniality of power.',
    keyIdeas: ['coloniality', 'decolonial-theory'],
    influences: ['marxism', 'dependency-theory'],
    influenced: ['mignolo'],
    schools: ['decolonial'],
    challenges: ['eurocentrism'],
    quotes: ['Coloniality is the dark side of modernity'],
    externalLinks: [{ title: 'Decolonial Thought', url: '#', type: 'article' }]
  },
  {
    id: 'teshie-tetteh',
    name: 'Kwasi Wiredu',
    years: '1931-2022',
    nationality: 'Ghanaian',
    keyWorks: ['Philosophy and an African Culture'],
    biography: 'African philosopher advocating conceptual decolonization.',
    keyIdeas: ['conceptual-decolonization', 'communalism'],
    influences: ['akan-traditions'],
    influenced: ['african-philosophy'],
    schools: ['african-philosophy'],
    challenges: ['colonial-thought'],
    quotes: ['Decolonization is the radical alteration of our conceptual frameworks'],
    externalLinks: [{ title: 'Kwasi Wiredu Profile', url: '#', type: 'article' }]
  },
  {
    id: 'vine-deloria',
    name: 'Vine Deloria Jr.',
    years: '1933-2005',
    nationality: 'Native American (Standing Rock Sioux)',
    keyWorks: ['Custer Died for Your Sins'],
    biography: 'Indigenous philosopher and activist critiquing colonialism and defending Native sovereignty.',
    keyIdeas: ['indigenous-sovereignty', 'decolonization'],
    influences: ['indigenous-traditions'],
    influenced: ['indigenous-scholarship'],
    schools: ['indigenous-philosophy'],
    challenges: ['colonialism'],
    quotes: ['Indians think in terms of circles, not lines'],
    externalLinks: [{ title: 'Vine Deloria Resources', url: '#', type: 'article' }]
  },
  {
    id: 'amartya-sen',
    name: 'Amartya Sen',
    years: '1933-present',
    nationality: 'Indian',
    keyWorks: ['Development as Freedom'],
    biography: 'Philosopher and economist focusing on welfare, justice, and development.',
    keyIdeas: ['capabilities-approach', 'justice'],
    influences: ['welfare-economics'],
    influenced: ['development-theory'],
    schools: ['modern-philosophy'],
    challenges: ['utilitarianism'],
    quotes: ['Poverty is not just a lack of money; it is not having the capability to realize one’s potential as a human being'],
    externalLinks: [{ title: 'Amartya Sen Works', url: '#', type: 'article' }]
  }
];
