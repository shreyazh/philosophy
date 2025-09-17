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
      'The unexamined life is not worth living.',
      'I know that I know nothing.',
      'Virtue is knowledge.',
      'No one does wrong willingly.'
    ],
    externalLinks: [
      { title: 'Internet Encyclopedia: Socrates', url: 'https://iep.utm.edu/socrates/', type: 'encyclopedia' },
      { title: 'Britannica: Socrates', url: 'https://www.britannica.com/biography/Socrates', type: 'article' },
      { title: 'Socratic Method Overview – Philosophy Now', url: 'https://philosophynow.org/issues/137/The_Socratic_Method', type: 'article' }
    ]
  },
  {
    id: 'thomas-hobbes',
    name: 'Thomas Hobbes',
    years: '1588-1679',
    nationality: 'English',
    keyWorks: ['Leviathan'],
    biography: 'Hobbes was an English philosopher best known for his political philosophy. In Leviathan, he argued that in the state of nature life would be “solitary, poor, nasty, brutish, and short,” justifying an absolute sovereign for peace and security.',
    keyIdeas: ['hobbes-social-contract'],
    influences: ['descartes', 'bacon'],
    influenced: ['locke', 'rousseau'],
    schools: ['early-modern'],
    challenges: ['anarchism'],
    quotes: [
      'The condition of man... is a condition of war of everyone against everyone.',
      'Covenants, without the sword, are but words.'
    ],
    externalLinks: [
      { title: 'Britannica: Thomas Hobbes', url: 'https://www.britannica.com/biography/Thomas-Hobbes', type: 'article' },
      { title: 'Leviathan – Project Gutenberg', url: 'https://www.gutenberg.org/ebooks/3207', type: 'book' }
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
      'The beginning is the most important part of the work.',
      'Ignorance, the root and stem of all evil.',
      'Justice is nothing other than the advantage of the stronger.',
      'Philosophy begins in wonder.'
    ],
    externalLinks: [
      { title: 'Internet Encyclopedia: Plato', url: 'https://iep.utm.edu/plato/', type: 'encyclopedia' },
      { title: 'Britannica: Plato', url: 'https://www.britannica.com/biography/Plato', type: 'article' },
      { title: 'The Allegory of the Cave (full text at MIT Classics)', url: 'http://classics.mit.edu/Plato/republic.7.vii.html', type: 'book' }
    ]
  },
  {
    id: 'martha-nussbaum',
    name: 'Martha C. Nussbaum',
    years: '1947-present',
    nationality: 'American',
    keyWorks: ['Creating Capabilities', 'Frontiers of Justice'],
    biography: 'Nussbaum is a contemporary philosopher known for the capabilities approach to human development and for contributions to political philosophy, ethics, and the emotions.',
    keyIdeas: ['capabilities-approach'],
    influences: ['aristotle', 'sen'],
    influenced: ['development-theory'],
    schools: ['modern-philosophy'],
    challenges: ['utilitarianism'],
    quotes: [
      'The capabilities approach asks: what is each person able to do and to be?',
      'Human dignity requires opportunities to flourish.'
    ],
    externalLinks: [
      { title: 'Britannica: Martha Nussbaum', url: 'https://www.britannica.com/biography/Martha-C-Nussbaum', type: 'article' },
      { title: 'Creating Capabilities – Internet Archive', url: 'https://archive.org/details/creatingcapabilities', type: 'book' }
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
      'Man is by nature a political animal.',
      'We are what we repeatedly do. Excellence then, is not an act, but a habit.',
      'The whole is greater than the sum of its parts.',
      'Knowing yourself is the beginning of all wisdom.'
    ],
    externalLinks: [
      { title: 'Internet Encyclopedia: Aristotle', url: 'https://iep.utm.edu/aristotl/', type: 'encyclopedia' },
      { title: 'Britannica: Aristotle', url: 'https://www.britannica.com/biography/Aristotle', type: 'article' },
      { title: 'Nicomachean Ethics – Project Gutenberg', url: 'https://www.gutenberg.org/ebooks/8438', type: 'book' }
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
      'Act only according to that maxim whereby you can at the same time will that it should become a universal law.',
      'Two things fill the mind with ever-increasing wonder and awe: the starry heavens above me and the moral law within me.',
      'Science is organized knowledge. Wisdom is organized life.',
      'Enlightenment is man’s emergence from his self-incurred immaturity.'
    ],
    externalLinks: [
      { title: 'Internet Encyclopedia: Kant', url: 'https://iep.utm.edu/kantview/', type: 'encyclopedia' },
      { title: 'Britannica: Immanuel Kant', url: 'https://www.britannica.com/biography/Immanuel-Kant', type: 'article' },
      { title: 'Critique of Pure Reason – Project Gutenberg', url: 'https://www.gutenberg.org/ebooks/4280', type: 'book' }
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
      'God is dead. God remains dead. And we have killed him.',
      'He who has a why to live can bear almost any how.',
      'What does not kill me makes me stronger.',
      'There are no facts, only interpretations.'
    ],
    externalLinks: [
      { title: 'Internet Encyclopedia: Nietzsche', url: 'https://iep.utm.edu/nietzsche/', type: 'encyclopedia' },
      { title: 'Britannica: Friedrich Nietzsche', url: 'https://www.britannica.com/biography/Friedrich-Nietzsche', type: 'article' },
      { title: 'Beyond Good and Evil – Project Gutenberg', url: 'https://www.gutenberg.org/ebooks/4363', type: 'book' }
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
      'It does not matter how slowly you go as long as you do not stop.',
      'The man who moves a mountain begins by carrying away small stones.',
      'Real knowledge is to know the extent of one’s ignorance.',
      'Respect yourself and others will respect you.'
    ],
    externalLinks: [
      { title: 'Internet Encyclopedia: Confucius', url: 'https://iep.utm.edu/confucius/', type: 'encyclopedia' },
      { title: 'Britannica: Confucius', url: 'https://www.britannica.com/biography/Confucius', type: 'article' },
      { title: 'The Analects – Internet Archive (Legge translation)', url: 'https://archive.org/details/analectsofconfuc00confuoft', type: 'book' }
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
    quotes: [
      'Brahman is real, the world is illusory, the self is none other than Brahman.',
      'When the mind becomes still, the Self reveals itself.',
      'Knowledge alone destroys ignorance, as light destroys deep darkness.',
      'Liberation is not attained through actions, but only through knowledge.'
    ],
    externalLinks: [
      { title: 'Internet Encyclopedia: Advaita Vedanta', url: 'https://iep.utm.edu/adv-veda/', type: 'encyclopedia' },
      { title: 'Upadesasahasri – HolyBooks English PDF', url: 'https://www.holybooks.com/upadeshasahasri-english/', type: 'book' },
      { title: 'Britannica: Shankara', url: 'https://www.britannica.com/biography/Shankara', type: 'article' }
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
    quotes: [
      'Surrender to God is the supreme means of liberation.',
      'The Lord is the inner ruler of all beings.',
      'Devotion, not mere knowledge, brings one close to the divine.',
      'Bhakti is both the means and the end.'
    ],
    externalLinks: [
      { title: 'Internet Encyclopedia: Ramanuja', url: 'https://iep.utm.edu/ramanuja/', type: 'encyclopedia' },
      { title: 'Britannica: Ramanuja', url: 'https://www.britannica.com/biography/Ramanuja', type: 'article' },
      { title: 'Sri Bhashya – Internet Archive', url: 'https://archive.org/details/sribhashyaenglish', type: 'book' }
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
    quotes: [
      'The soul and God are eternally distinct.',
      'Devotion leads the soul to grace and liberation.',
      'The world is real and not illusory.',
      'Without God’s grace, liberation is impossible.'
    ],
    externalLinks: [
      { title: 'Britannica: Madhva', url: 'https://www.britannica.com/biography/Madhva', type: 'article' },
      { title: 'Internet Encyclopedia: Dvaita Vedanta', url: 'https://iep.utm.edu/dvaita/', type: 'encyclopedia' },
      { title: 'Works of Madhvacharya – Internet Archive', url: 'https://archive.org/details/MadhvacharyaTexts', type: 'book' }
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
    quotes: [
      'A person should not be too honest. Straight trees are cut first and honest people are taken advantage of first.',
      'Education is the best friend. An educated person is respected everywhere.',
      'There is some self-interest behind every friendship. There is no friendship without self-interest.',
      'Do not reveal what you have thought upon doing, but by wise counsel keep it secret.'
    ],
    externalLinks: [
      { title: 'Arthashastra (English Translation) – Internet Archive', url: 'https://archive.org/details/Arthashastra_Kautilya', type: 'book' },
      { title: 'Britannica: Kautilya', url: 'https://www.britannica.com/biography/Kautilya', type: 'article' },
      { title: 'Philosophy Now: Chanakya and Indian Political Thought', url: 'https://philosophynow.org/issues/117/Kautilya_and_the_Arthashastra', type: 'article' }
    ]
  },
    {
    id: 'buddha',
    name: 'Siddhartha Gautama (Buddha)',
    years: '563-483 BCE',
    nationality: 'Indian',
    keyWorks: ['Dhammapada'],
    biography: 'Founder of Buddhism, taught the Four Noble Truths and the Eightfold Path.',
    keyIdeas: ['four-noble-truths', 'eightfold-path', 'impermanence'],
    influences: ['indian-spiritual-traditions'],
    influenced: ['buddhism-worldwide'],
    schools: ['buddhism'],
    challenges: ['vedic-ritualism'],
    quotes: [
      'All conditioned things are impermanent.',
      'Peace comes from within. Do not seek it without.',
      'Health is the greatest gift, contentment the greatest wealth, faithfulness the best relationship.',
      'Three things cannot be long hidden: the sun, the moon, and the truth.'
    ],
    externalLinks: [
      { title: 'Internet Encyclopedia: Buddha', url: 'https://iep.utm.edu/buddha/', type: 'encyclopedia' },
      { title: 'Britannica: Buddha', url: 'https://www.britannica.com/biography/Buddha-founder-of-Buddhism', type: 'article' },
      { title: 'Dhammapada (translation) – Internet Archive', url: 'https://archive.org/details/dhammapada_201911', type: 'book' }
    ]
  },
  {
    id: 'nagarjuna',
    name: 'Nagarjuna',
    years: '150-250 CE',
    nationality: 'Indian',
    keyWorks: ['Mūlamadhyamakakārikā'],
    biography: 'Buddhist philosopher who founded the Madhyamaka school of emptiness.',
    keyIdeas: ['emptiness-sunyata', 'middle-way'],
    influences: ['buddha'],
    influenced: ['zen', 'tibetan-buddhism'],
    schools: ['madhyamaka'],
    challenges: ['essentialism'],
    quotes: [
      'Emptiness wrongly grasped is like picking up a poisonous snake by the wrong end.',
      'All is possible when emptiness is possible. Nothing is possible when emptiness is impossible.',
      'The victorious ones have said that emptiness is the relinquishing of all views.',
      'Nirvana is not different from samsara; samsara is not different from nirvana.'
    ],
    externalLinks: [
      { title: 'Internet Encyclopedia: Nagarjuna', url: 'https://iep.utm.edu/nagarjun/', type: 'encyclopedia' },
      { title: 'Britannica: Nagarjuna', url: 'https://www.britannica.com/biography/Nagarjuna-Buddhist-philosopher', type: 'article' },
      { title: 'Mūlamadhyamakakārikā – Internet Archive', url: 'https://archive.org/details/Mulamadhyamakakarika', type: 'book' }
    ]
  },
  {
    id: 'mahavira',
    name: 'Mahavira',
    years: '599-527 BCE',
    nationality: 'Indian',
    keyWorks: ['Jain Agamas'],
    biography: 'Mahavira, also known as Vardhamana, was the 24th Tirthankara of Jainism. He revitalized and spread Jain philosophy, emphasizing non-violence (ahimsa), truth, and asceticism.',
    keyIdeas: ['ahimsa-nonviolence', 'anekantavada-manysidedness', 'aparigraha-nonpossession'],
    influences: ['parshvanatha', 'sramana-traditions'],
    influenced: ['jainism', 'gandhi'],
    schools: ['jain-philosophy'],
    challenges: ['vedic-ritualism', 'materialism'],
    quotes: [
      'All souls are equal and eternal.',
      'Non-violence is the highest religion.',
      'A man is seated on top of a tree in the midst of a burning forest. He sees all living beings perish, but he does not realize that the same fate is soon to overtake him also.',
      'By sincerity, a man gains all he wishes for.'
    ],
    externalLinks: [
      { title: 'Britannica: Mahavira', url: 'https://www.britannica.com/biography/Mahavira', type: 'article' },
      { title: 'Internet Encyclopedia: Jain Philosophy', url: 'https://iep.utm.edu/jainism/', type: 'encyclopedia' },
      { title: 'Sacred Texts: Jainism', url: 'https://www.sacred-texts.com/jai/index.htm', type: 'book' }
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
      'When will tears flow from my eyes as I chant Your holy name?',
      'Wherever the glories of Lord Krishna are sung, there reside Chaitanya and his devotees.',
      'The essence of all religion is to develop love for God.'
    ],
    externalLinks: [
      { title: 'Britannica: Chaitanya', url: 'https://www.britannica.com/biography/Caitanya', type: 'article' },
      { title: 'Sacred Texts: Vaishnavism (includes Chaitanya sources)', url: 'https://www.sacred-texts.com/hin/vov/index.htm', type: 'book' },
      { title: 'Gaudiya Vaishnavism Overview – Philosophy Now', url: 'https://philosophynow.org/issues/122/Vaishnavism_and_Philosophy', type: 'article' }
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
    quotes: [
      'The highest education is that which does not merely give us information but makes our life in harmony with all existence.',
      'Faith is the bird that feels the light when the dawn is still dark.',
      'You can’t cross the sea merely by standing and staring at the water.',
      'Love is an endless mystery, for it has nothing else to explain it.'
    ],
    externalLinks: [
      { title: 'Britannica: Rabindranath Tagore', url: 'https://www.britannica.com/biography/Rabindranath-Tagore', type: 'article' },
      { title: 'Internet Archive: Sadhana (Tagore)', url: 'https://archive.org/details/sadhanaotheress00tagouoft', type: 'book' },
      { title: 'The Religion of Man – Internet Archive', url: 'https://archive.org/details/religionofman00rabi', type: 'book' }
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
    quotes: [
      'A journey of a thousand miles begins with a single step.',
      'When I let go of what I am, I become what I might be.',
      'Knowing others is intelligence; knowing yourself is true wisdom.',
      'The best fighter is never angry.'
    ],
    externalLinks: [
      { title: 'Internet Encyclopedia: Daoism (includes Laozi)', url: 'https://iep.utm.edu/daoism/', type: 'encyclopedia' },
      { title: 'Britannica: Laozi', url: 'https://www.britannica.com/biography/Laozi', type: 'article' },
      { title: 'Tao Te Ching – Internet Archive (Legge translation)', url: 'https://archive.org/details/taoteching00laot', type: 'book' }
    ]
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
    quotes: [
      'Am I a man dreaming I am a butterfly, or a butterfly dreaming I am a man?',
      'Happiness is the absence of striving for happiness.',
      'Flow with whatever may happen, and let your mind be free.',
      'Do not use life to give life to death and do not use death to bring death to life.'
    ],
    externalLinks: [
      { title: 'Britannica: Zhuangzi', url: 'https://www.britannica.com/biography/Zhuangzi', type: 'article' },
      { title: 'Internet Encyclopedia: Zhuangzi', url: 'https://iep.utm.edu/zhuangzi/', type: 'encyclopedia' },
      { title: 'The Book of Chuang Tzu – Internet Archive', url: 'https://archive.org/details/bookofchuangtzu00zhuarich', type: 'book' }
    ]
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
    quotes: [
      'The great man is he who does not lose his childlike heart.',
      'The tendency of human nature to do good is like that of water to flow downward.',
      'Benevolence brings glory to a ruler, cruelty brings ruin.',
      'Friendship with the righteous is the way to wealth and honor.'
    ],
    externalLinks: [
      { title: 'Britannica: Mencius', url: 'https://www.britannica.com/biography/Mencius', type: 'article' },
      { title: 'Internet Encyclopedia: Mencius', url: 'https://iep.utm.edu/mencius/', type: 'encyclopedia' },
      { title: 'The Works of Mencius – Internet Archive', url: 'https://archive.org/details/worksofmencius00mencuoft', type: 'book' }
    ]
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
    quotes: [
      'Human nature is evil; goodness is a result of conscious activity.',
      'A person becomes good by learning.',
      'Rites are the greatest instruments of instruction.',
      'The nature of man is such that he seeks profit.'
    ],
    externalLinks: [
      { title: 'Britannica: Xunzi', url: 'https://www.britannica.com/biography/Xunzi', type: 'article' },
      { title: 'Internet Encyclopedia: Xunzi', url: 'https://iep.utm.edu/xunzi/', type: 'encyclopedia' },
      { title: 'The Works of Xunzi – Internet Archive', url: 'https://archive.org/details/xunzi00hsunuoft', type: 'book' }
    ]
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
    quotes: [
      'Our hearts are restless until they rest in you.',
      'Faith is to believe what you do not yet see; the reward for this faith is to see what you believe.',
      'The world is a book, and those who do not travel read only one page.',
      'Love, and do what you will.'
    ],
    externalLinks: [
      { title: 'Britannica: St. Augustine', url: 'https://www.britannica.com/biography/Saint-Augustine', type: 'article' },
      { title: 'Confessions – Project Gutenberg', url: 'https://www.gutenberg.org/ebooks/3296', type: 'book' },
      { title: 'The City of God – Internet Archive', url: 'https://archive.org/details/thecityofgod03088gut', type: 'book' }
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
    quotes: [
      'To one who has faith, no explanation is necessary. To one without faith, no explanation is possible.',
      'Better to illuminate than merely to shine.',
      'Wonder is the desire of knowledge.',
      'There is nothing on this earth more to be prized than true friendship.'
    ],
    externalLinks: [
      { title: 'Internet Encyclopedia: Aquinas', url: 'https://iep.utm.edu/aquinas/', type: 'encyclopedia' },
      { title: 'Britannica: Thomas Aquinas', url: 'https://www.britannica.com/biography/Saint-Thomas-Aquinas', type: 'article' },
      { title: 'Summa Theologica – Gutenberg', url: 'https://www.gutenberg.org/ebooks/17611', type: 'book' }
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
    quotes: [
      'I think, therefore I am.',
      'The preservation of health should be the first study of one who is of any worth to oneself.',
      'Except our own thoughts, there is nothing absolutely in our power.',
      'The reading of all good books is like a conversation with the finest minds of past centuries.'
    ],
    externalLinks: [
      { title: 'Internet Encyclopedia: Descartes', url: 'https://iep.utm.edu/descarte/', type: 'encyclopedia' },
      { title: 'Britannica: Descartes', url: 'https://www.britannica.com/biography/Rene-Descartes', type: 'article' },
      { title: 'Meditations – Gutenberg', url: 'https://www.gutenberg.org/ebooks/23306', type: 'book' }
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
    quotes: [
      'All mankind... being all equal and independent, no one ought to harm another in his life, health, liberty or possessions.',
      'The end of law is not to abolish or restrain, but to preserve and enlarge freedom.',
      'Education begins the gentleman, but reading, good company and reflection must finish him.',
      'New opinions are always suspected, and usually opposed.'
    ],
    externalLinks: [
      { title: 'Internet Encyclopedia: Locke', url: 'https://iep.utm.edu/locke/', type: 'encyclopedia' },
      { title: 'Britannica: Locke', url: 'https://www.britannica.com/biography/John-Locke', type: 'article' },
      { title: 'Two Treatises of Government – Gutenberg', url: 'https://www.gutenberg.org/ebooks/7370', type: 'book' }
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
    quotes: [
      'Man is born free, and everywhere he is in chains.',
      'People who know little are usually great talkers, while men who know much say little.',
      'Patience is bitter, but its fruit is sweet.',
      'The world of reality has its limits; the world of imagination is boundless.'
    ],
    externalLinks: [
      { title: 'Internet Encyclopedia: Rousseau', url: 'https://iep.utm.edu/rousseau/', type: 'encyclopedia' },
      { title: 'Britannica: Rousseau', url: 'https://www.britannica.com/biography/Jean-Jacques-Rousseau', type: 'article' },
      { title: 'The Social Contract – Gutenberg', url: 'https://www.gutenberg.org/ebooks/46333', type: 'book' }
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
    quotes: [
      'Reason is, and ought only to be the slave of the passions.',
      'A wise man proportions his belief to the evidence.',
      'Custom is the great guide of human life.',
      'Beauty in things exists in the mind which contemplates them.'
    ],
    externalLinks: [
      { title: 'Internet Encyclopedia: Hume', url: 'https://iep.utm.edu/hume/', type: 'encyclopedia' },
      { title: 'Britannica: David Hume', url: 'https://www.britannica.com/biography/David-Hume', type: 'article' },
      { title: 'Enquiry Concerning Human Understanding – Gutenberg', url: 'https://www.gutenberg.org/ebooks/9662', type: 'book' }
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
    quotes: [
      'The real is the rational and the rational is the real.',
      'Nothing great in the world has ever been accomplished without passion.',
      'Truth is found neither in the thesis nor the antithesis, but in an emergent synthesis.',
      'Education is the art of making man ethical.'
    ],
    externalLinks: [
      { title: 'Internet Encyclopedia: Hegel', url: 'https://iep.utm.edu/hegel/', type: 'encyclopedia' },
      { title: 'Britannica: Hegel', url: 'https://www.britannica.com/biography/Georg-Wilhelm-Friedrich-Hegel', type: 'article' },
      { title: 'Phenomenology of Spirit – Internet Archive', url: 'https://archive.org/details/phenomenologyofs00hege', type: 'book' }
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
    quotes: [
      'The philosophers have only interpreted the world, in various ways. The point, however, is to change it.',
      'Workers of the world unite; you have nothing to lose but your chains.',
      'Religion is the opium of the people.',
      'From each according to his ability, to each according to his needs.'
    ],
    externalLinks: [
      { title: 'Internet Encyclopedia: Marx', url: 'https://iep.utm.edu/marx/', type: 'encyclopedia' },
      { title: 'Britannica: Karl Marx', url: 'https://www.britannica.com/biography/Karl-Marx', type: 'article' },
      { title: 'The Communist Manifesto – Gutenberg', url: 'https://www.gutenberg.org/ebooks/61', type: 'book' }
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
    quotes: [
      'Man is condemned to be free.',
      'Hell is other people.',
      'Freedom is what you do with what’s been done to you.',
      'Existence precedes essence.'
    ],
    externalLinks: [
      { title: 'Internet Encyclopedia: Sartre', url: 'https://iep.utm.edu/sartre-jean-paul/', type: 'encyclopedia' },
      { title: 'Britannica: Jean-Paul Sartre', url: 'https://www.britannica.com/biography/Jean-Paul-Sartre', type: 'article' },
      { title: 'Being and Nothingness – Internet Archive', url: 'https://archive.org/details/beingnothingness00sart', type: 'book' }
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
    quotes: [
      'One is not born, but rather becomes, a woman.',
      'Change your life today. Don’t gamble on the future, act now, without delay.',
      'Society cares for the individual only so far as he is profitable.',
      'I am too intelligent, too demanding, and too resourceful for anyone to be able to take charge of me entirely.'
    ],
    externalLinks: [
      { title: 'Internet Encyclopedia: Simone de Beauvoir', url: 'https://iep.utm.edu/beauvoir/', type: 'encyclopedia' },
      { title: 'Britannica: Simone de Beauvoir', url: 'https://www.britannica.com/biography/Simone-de-Beauvoir', type: 'article' },
      { title: 'The Second Sex – Internet Archive', url: 'https://archive.org/details/second-sex-de-beauvoir', type: 'book' }
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
    quotes: [
      'The aim of society is the attainment of true happiness.',
      'Virtue is the perfection of the soul.',
      'Knowledge is the cause of the perfection of the human soul.',
      'Happiness is achieved through the cooperation of individuals in a virtuous city.'
    ],
    externalLinks: [
      { title: 'Internet Encyclopedia: Al-Farabi', url: 'https://iep.utm.edu/al-farabi/', type: 'encyclopedia' },
      { title: 'Britannica: Al-Farabi', url: 'https://www.britannica.com/biography/Al-Farabi', type: 'article' },
      { title: 'Selections from Al-Farabi – Internet Archive', url: 'https://archive.org/details/alfarabiselectedtexts', type: 'book' }
    ]
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
    quotes: [
      'The world is divided into men who have wit and no religion and men who have religion and no wit.',
      'Medicine is the science by which we learn the various states of the body.',
      'The knowledge of anything, since all things have causes, is not acquired or complete unless it is known by its causes.',
      'Human intellect at its perfection is angelic.'
    ],
    externalLinks: [
      { title: 'Internet Encyclopedia: Avicenna', url: 'https://iep.utm.edu/avicenna/', type: 'encyclopedia' },
      { title: 'Britannica: Avicenna', url: 'https://www.britannica.com/biography/Avicenna', type: 'article' },
      { title: 'Canon of Medicine – Internet Archive', url: 'https://archive.org/details/AvicennaCanonOfMedicine', type: 'book' }
    ]
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
    quotes: [
      'Ignorance leads to fear, fear leads to hate, and hate leads to violence.',
      'Truth does not contradict truth.',
      'Knowledge is the conformity of the object and the intellect.',
      'He who is engaged in the study of science is engaged in the contemplation of the divine.'
    ],
    externalLinks: [
      { title: 'Internet Encyclopedia: Averroes', url: 'https://iep.utm.edu/averroes/', type: 'encyclopedia' },
      { title: 'Britannica: Averroes', url: 'https://www.britannica.com/biography/Averroes', type: 'article' },
      { title: 'Selections of Averroes – Internet Archive', url: 'https://archive.org/details/averroescommentaries', type: 'book' }
    ]
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
    quotes: [
      'Knowledge without action is wastefulness.',
      'Desire makes slaves out of kings and patience makes kings out of slaves.',
      'The ultimate happiness lies in nearness to God.',
      'He who buries his head deep into a nosebag full of food cannot hope to see the invisible world.'
    ],
    externalLinks: [
      { title: 'Internet Encyclopedia: Al-Ghazali', url: 'https://iep.utm.edu/al-ghazali/', type: 'encyclopedia' },
      { title: 'Britannica: Al-Ghazali', url: 'https://www.britannica.com/biography/al-Ghazali', type: 'article' },
      { title: 'The Incoherence of the Philosophers – Internet Archive', url: 'https://archive.org/details/GhazaliIncoherence', type: 'book' }
    ]
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
    quotes: [
      'Good thoughts, good words, good deeds.',
      'He who sows righteousness reaps the most excellent fruit.',
      'Turn yourself not away from three best things: good thoughts, good words, and good deeds.',
      'The best of men is he who accepts joy and grief as if they were the same.'
    ],
    externalLinks: [
      { title: 'Britannica: Zoroaster', url: 'https://www.britannica.com/biography/Zoroaster', type: 'article' },
      { title: 'Internet Encyclopedia: Zoroastrianism', url: 'https://iep.utm.edu/zoroastr/', type: 'encyclopedia' },
      { title: 'Avesta (Sacred Texts)', url: 'https://www.sacred-texts.com/zor/sbe04/index.htm', type: 'book' }
    ]
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
    quotes: [
      'Reserve your right to think, for even to think wrongly is better than not to think at all.',
      'Fables should be taught as fables, myths as myths, and miracles as poetic fancies.',
      'To teach superstitions as truths is a most terrible thing.',
      'All formal dogmatic religions are fallacious and must never be accepted by self-respecting persons.'
    ],
    externalLinks: [
      { title: 'Britannica: Hypatia', url: 'https://www.britannica.com/biography/Hypatia', type: 'article' },
      { title: 'Internet Encyclopedia: Hypatia', url: 'https://iep.utm.edu/hypatia/', type: 'encyclopedia' },
      { title: 'Hypatia Studies – Internet Archive', url: 'https://archive.org/details/hypatiaalexandria', type: 'book' }
    ]
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
      'The world is my representation.',
      'Compassion is the basis of morality.',
      'A man can do what he wills, but he cannot will what he wills.',
      'Life is a constant oscillation between desire and boredom.'
    ],
    externalLinks: [
      { title: 'Internet Encyclopedia: Schopenhauer', url: 'https://iep.utm.edu/schopenh/', type: 'encyclopedia' },
      { title: 'Britannica: Schopenhauer', url: 'https://www.britannica.com/biography/Arthur-Schopenhauer', type: 'article' },
      { title: 'On the Basis of Morality – Gutenberg', url: 'https://www.gutenberg.org/ebooks/44929', type: 'book' }
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
    quotes: [
      'History is a science.',
      'Man is the child of his customs, not the child of his ancestors.',
      'Government is an institution which prevents injustice other than such as it commits itself.',
      'The past resembles the future more than one drop of water resembles another.'
    ],
    externalLinks: [
      { title: 'Britannica: Ibn Khaldun', url: 'https://www.britannica.com/biography/Ibn-Khaldun', type: 'article' },
      { title: 'Internet Encyclopedia: Ibn Khaldun', url: 'https://iep.utm.edu/ibn-khaldun/', type: 'encyclopedia' },
      { title: 'Muqaddimah – Internet Archive (Rosenthal translation)', url: 'https://archive.org/details/MuqaddimahIbnKhaldun', type: 'book' }
    ]
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
    quotes: [
      'The colonized can see right away if decolonization is taking place or not.',
      'Imperialism leaves behind germs of rot which we must clinically detect and remove from our land but from our minds as well.',
      'To speak a language is to take on a world, a culture.',
      'In the world through which I travel, I am endlessly creating myself.'
    ],
    externalLinks: [
      { title: 'Internet Encyclopedia: Fanon', url: 'https://iep.utm.edu/fanon/', type: 'encyclopedia' },
      { title: 'Britannica: Frantz Fanon', url: 'https://www.britannica.com/biography/Frantz-Fanon', type: 'article' },
      { title: 'The Wretched of the Earth – Internet Archive', url: 'https://archive.org/details/wretched-of-the-earth', type: 'book' }
    ]
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
    quotes: [
      'Language is the house of Being.',
      'Every man is born as many men and dies as a single one.',
      'Being is always the Being of a being.',
      'The human being is not the lord of beings, but the shepherd of Being.'
    ],
    externalLinks: [
      { title: 'Internet Encyclopedia: Heidegger', url: 'https://iep.utm.edu/heidegge/', type: 'encyclopedia' },
      { title: 'Britannica: Martin Heidegger', url: 'https://www.britannica.com/biography/Martin-Heidegger', type: 'article' },
      { title: 'Being and Time – Internet Archive', url: 'https://archive.org/details/BeingAndTime', type: 'book' }
    ]
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
    quotes: [
      'Where there is power, there is resistance.',
      'Knowledge is not made for understanding; it is made for cutting.',
      'The soul is the prison of the body.',
      'Power is everywhere… because it comes from everywhere.'
    ],
    externalLinks: [
      { title: 'Internet Encyclopedia: Foucault', url: 'https://iep.utm.edu/foucault/', type: 'encyclopedia' },
      { title: 'Britannica: Michel Foucault', url: 'https://www.britannica.com/biography/Michel-Foucault', type: 'article' },
      { title: 'Discipline and Punish – Internet Archive', url: 'https://archive.org/details/discipline-punish-foucault', type: 'book' }
    ]
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
    quotes: [
      'There is nothing outside the text.',
      'Every sign is a mark which refers to another sign.',
      'Deconstruction is not destruction.',
      'Meaning is never present in itself, but always deferred.'
    ],
    externalLinks: [
      { title: 'Internet Encyclopedia: Derrida', url: 'https://iep.utm.edu/derrida/', type: 'encyclopedia' },
      { title: 'Britannica: Jacques Derrida', url: 'https://www.britannica.com/biography/Jacques-Derrida', type: 'article' },
      { title: 'Of Grammatology – Internet Archive', url: 'https://archive.org/details/OfGrammatology', type: 'book' }
    ]
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
    quotes: [
      'Feminism is for everybody.',
      'Love is an action, never simply a feeling.',
      'The practice of love is the most powerful antidote to the politics of domination.',
      'Without justice there can be no love.'
    ],
    externalLinks: [
      { title: 'Britannica: bell hooks', url: 'https://www.britannica.com/biography/Bell-Hooks', type: 'article' },
      { title: 'Internet Encyclopedia: Feminist Philosophy (hooks included)', url: 'https://iep.utm.edu/fem-phil/', type: 'encyclopedia' },
      { title: 'Teaching to Transgress – Internet Archive', url: 'https://archive.org/details/TeachingToTransgressHooks', type: 'book' }
    ]
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
    quotes: [
      'Coloniality is the dark side of modernity.',
      'Eurocentrism is not merely an ideology; it is a structure of knowledge.',
      'Modernity is inseparable from coloniality.',
      'The colonial matrix of power persists beyond colonialism.'
    ],
    externalLinks: [
      { title: 'Britannica: Aníbal Quijano', url: 'https://www.britannica.com/biography/Anibal-Quijano', type: 'article' },
      { title: 'Philosophy Now: Quijano and Coloniality', url: 'https://philosophynow.org/issues/144/Anibal_Quijano_and_Coloniality', type: 'article' },
      { title: 'Coloniality of Power – PDF (academic archive)', url: 'https://archive.org/details/quijano-coloniality-of-power', type: 'book' }
    ]
  },
  {
    id: 'kwasi-wiredu',
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
    quotes: [
      'Decolonization is the radical alteration of our conceptual frameworks.',
      'Philosophy must always be done in the context of one’s own culture.',
      'Tradition must be interrogated, not simply preserved.',
      'Conceptual decolonization is indispensable for African philosophy.'
    ],
    externalLinks: [
      { title: 'Britannica: Kwasi Wiredu', url: 'https://www.britannica.com/biography/Kwasi-Wiredu', type: 'article' },
      { title: 'Internet Encyclopedia: African Philosophy (Wiredu included)', url: 'https://iep.utm.edu/afrphil/', type: 'encyclopedia' },
      { title: 'Philosophy and an African Culture – Internet Archive', url: 'https://archive.org/details/PhilosophyAndAnAfricanCultureWiredu', type: 'book' }
    ]
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
    quotes: [
      'Indians think in terms of circles, not lines.',
      'Religion is for people who are afraid of going to hell. Spirituality is for those who have been there.',
      'The future of mankind lies waiting for those who will come to understand their lives and take up their responsibilities to all living things.',
      'We must protect the land for the seventh generation to come.'
    ],
    externalLinks: [
      { title: 'Britannica: Vine Deloria Jr.', url: 'https://www.britannica.com/biography/Vine-Deloria-Jr', type: 'article' },
      { title: 'Custer Died for Your Sins – Internet Archive', url: 'https://archive.org/details/custer-died-for-your-sins', type: 'book' },
      { title: 'Philosophy Now: Vine Deloria Jr.', url: 'https://philosophynow.org/issues/152/Vine_Deloria_Jr_and_Indigenous_Philosophy', type: 'article' }
    ]
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
    quotes: [
      'Poverty is not just a lack of money; it is not having the capability to realize one’s potential as a human being.',
      'Development is freedom.',
      'Justice is a social commitment to equality of opportunities.',
      'Economic growth without investment in human development is unsustainable.'
    ],
    externalLinks: [
      { title: 'Britannica: Amartya Sen', url: 'https://www.britannica.com/biography/Amartya-Sen', type: 'article' },
      { title: 'Internet Encyclopedia: Sen (Capabilities Approach)', url: 'https://iep.utm.edu/sen-cap/', type: 'encyclopedia' },
      { title: 'Development as Freedom – Internet Archive', url: 'https://archive.org/details/development-as-freedom-sen', type: 'book' }
    ]
  },
  {
    id: 'spinoza',
    name: 'Baruch Spinoza',
    years: '1632-1677',
    nationality: 'Dutch',
    keyWorks: ['Ethics', 'Theological-Political Treatise'],
    biography: 'Spinoza was a Dutch philosopher of Sephardi Portuguese origin, one of the early thinkers of the Enlightenment. His work in ethics and rationalism laid foundations for modern biblical criticism and secular philosophy.',
    keyIdeas: ['pantheism', 'determinism', 'ethics-of-joy'],
    influences: ['descartes', 'stoics', 'jewish-philosophy'],
    influenced: ['hegel', 'nietzsche', 'einstein'],
    schools: ['rationalism'],
    challenges: ['orthodoxy'],
    quotes: [
      'The more you struggle to live, the less you live. Give up the notion that you must be sure of what you are doing.',
      'The highest activity a human being can attain is learning for understanding, because to understand is to be free.',
      'Peace is not an absence of war; it is a virtue, a state of mind.',
      'Man is a social animal.'
    ],
    externalLinks: [
      { title: 'Internet Encyclopedia: Spinoza', url: 'https://iep.utm.edu/spinoza/', type: 'encyclopedia' },
      { title: 'Britannica: Spinoza', url: 'https://www.britannica.com/biography/Baruch-Spinoza', type: 'article' },
      { title: 'Ethics – Gutenberg', url: 'https://www.gutenberg.org/ebooks/3800', type: 'book' }
    ]
  },
  {
    id: 'leibniz',
    name: 'Gottfried Wilhelm Leibniz',
    years: '1646-1716',
    nationality: 'German',
    keyWorks: ['Monadology', 'Discourse on Metaphysics'],
    biography: 'Leibniz was a German polymath and philosopher who developed calculus independently of Newton and proposed metaphysical theories of monads, optimism, and pre-established harmony.',
    keyIdeas: ['monadology', 'pre-established-harmony', 'optimism'],
    influences: ['descartes', 'aristotle'],
    influenced: ['kant', 'wolff'],
    schools: ['rationalism'],
    challenges: ['empiricism'],
    quotes: [
      'This is the best of all possible worlds.',
      'Music is the pleasure the human mind experiences from counting without being aware that it is counting.',
      'Reality cannot be found except in one single source.',
      'The present is pregnant with the future.'
    ],
    externalLinks: [
      { title: 'Internet Encyclopedia: Leibniz', url: 'https://iep.utm.edu/leibniz/', type: 'encyclopedia' },
      { title: 'Britannica: Leibniz', url: 'https://www.britannica.com/biography/Gottfried-Wilhelm-Leibniz', type: 'article' },
      { title: 'Monadology – Gutenberg', url: 'https://www.gutenberg.org/ebooks/17147', type: 'book' }
    ]
  },
  {
    id: 'hobbes',
    name: 'Thomas Hobbes',
    years: '1588-1679',
    nationality: 'English',
    keyWorks: ['Leviathan'],
    biography: 'Hobbes was an English philosopher considered one of the founders of modern political philosophy. His social contract theory laid the groundwork for later liberal thought.',
    keyIdeas: ['social-contract', 'political-realism', 'materialism'],
    influences: ['aristotle', 'descartes'],
    influenced: ['locke', 'rousseau'],
    schools: ['political-philosophy'],
    challenges: ['idealism'],
    quotes: [
      'The condition of man is a condition of war of everyone against everyone.',
      'Hell is truth seen too late.',
      'It is not wisdom but authority that makes a law.',
      'The life of man, solitary, poor, nasty, brutish, and short.'
    ],
    externalLinks: [
      { title: 'Internet Encyclopedia: Hobbes', url: 'https://iep.utm.edu/hobbes/', type: 'encyclopedia' },
      { title: 'Britannica: Hobbes', url: 'https://www.britannica.com/biography/Thomas-Hobbes', type: 'article' },
      { title: 'Leviathan – Gutenberg', url: 'https://www.gutenberg.org/ebooks/3207', type: 'book' }
    ]
  },
  {
    id: 'camus',
    name: 'Albert Camus',
    years: '1913-1960',
    nationality: 'French-Algerian',
    keyWorks: ['The Myth of Sisyphus', 'The Stranger'],
    biography: 'Camus was a French-Algerian philosopher, author, and journalist, known for developing the concept of the absurd and influencing existentialism and modern literature.',
    keyIdeas: ['absurdism', 'rebellion', 'freedom'],
    influences: ['nietzsche', 'sartre'],
    influenced: ['existentialism', 'absurdist-literature'],
    schools: ['existentialism', 'absurdism'],
    challenges: ['nihilism'],
    quotes: [
      'In the depth of winter, I finally learned that within me there lay an invincible summer.',
      'The struggle itself toward the heights is enough to fill a man’s heart. One must imagine Sisyphus happy.',
      'The only way to deal with an unfree world is to become so absolutely free that your very existence is an act of rebellion.',
      'Seeking what is true is not seeking what is desirable.'
    ],
    externalLinks: [
      { title: 'Internet Encyclopedia: Camus', url: 'https://iep.utm.edu/camus/', type: 'encyclopedia' },
      { title: 'Britannica: Albert Camus', url: 'https://www.britannica.com/biography/Albert-Camus', type: 'article' },
      { title: 'The Myth of Sisyphus – Internet Archive', url: 'https://archive.org/details/myth-of-sisyphus', type: 'book' }
    ]
  }
];
