import { Challenge } from '../types/philosophy';

export const challengesData: Challenge[] = [
  {
    id: 'rationalism-vs-empiricism',
    name: 'Rationalism vs Empiricism',
    description:
      'Early modern philosophers argued over the primary source of knowledge: rationalists (e.g., Descartes, Spinoza, Leibniz) emphasized a priori reasoning and innate ideas, while empiricists (e.g., Locke, Berkeley, Hume) insisted that all ideas originate in sensory experience. The debate shaped questions about the reliability of perception, the possibility of certainty, and the limits of human understanding.',
    challenger: 'British Empiricism',
    challenged: 'Continental Rationalism',
    period: 'Early Modern',
    outcome:
      'Kant’s Critical Philosophy synthesized the debate by distinguishing a priori forms of sensibility and understanding from empirical content, arguing for synthetic a priori knowledge and the phenomena/noumena distinction in the Critique of Pure Reason.',
    significance:
      'This debate set the agenda for modern epistemology, influenced the scientific method’s balance of theory and observation, and framed later discussions of analytic/synthetic, a priori/a posteriori, and concept acquisition.',
    externalLinks: [
      { title: 'Rationalism vs. Empiricism (SEP)', url: 'https://plato.stanford.edu/entries/rationalism-empiricism/', type: 'encyclopedia' },
      { title: 'Immanuel Kant (IEP) – overview of transcendental idealism', url: 'https://iep.utm.edu/kantview/', type: 'encyclopedia' },
      { title: 'Classics of Western Philosophy (MIT OpenCourseWare)', url: 'https://ocw.mit.edu/courses/24-01-classics-of-western-philosophy-spring-2006/', type: 'course' }
    ]
  },
  {
    id: 'faith-vs-reason',
    name: 'Faith vs Reason',
    description:
      'Medieval and early modern thinkers asked whether revealed faith and philosophical reason conflict or complement each other. Figures like Augustine and Aquinas argued that reason can clarify and defend truths of faith, while others emphasized the distinct domains and limits of each.',
    challenger: 'Scholastic Philosophy',
    challenged: 'Pure Faith Traditions',
    period: 'Medieval',
    outcome:
      'Thomistic synthesis: Aquinas held that certain truths are knowable by reason (e.g., God’s existence via natural theology) while mysteries of faith exceed reason yet are not irrational, establishing a durable model of harmony and hierarchy between the two.',
    significance:
      'Provided a conceptual framework for philosophy of religion, natural theology, and later debates about secular reason and the autonomy of science vis-à-vis theology.',
    externalLinks: [
      { title: 'Faith (SEP)', url: 'https://plato.stanford.edu/entries/faith/', type: 'encyclopedia' },
      { title: 'Thomas Aquinas (SEP)', url: 'https://plato.stanford.edu/entries/aquinas/', type: 'encyclopedia' },
      { title: 'Faith and reason (Britannica)', url: 'https://www.britannica.com/topic/faith#ref1236082', type: 'encyclopedia' }
    ]
  },
  {
    id: 'determinism-vs-free-will',
    name: 'Determinism vs Free Will',
    description:
      'Are human actions determined by prior causes and the laws of nature, or do agents possess genuine freedom? Philosophers distinguish hard determinism, libertarianism, and compatibilism, while contemporary discussion engages neuroscience, psychology, and moral responsibility.',
    challenger: 'Scientific Determinism',
    challenged: 'Moral Responsibility',
    period: 'Modern to Contemporary',
    outcome:
      'No final resolution; influential compatibilist accounts reconcile causal determination with responsibility, while libertarians defend indeterministic or agent-causal models. Empirical findings inform but do not settle the normative questions.',
    significance:
      'Foundational for ethics, criminal law, and self-understanding, shaping doctrines of blame, punishment, and autonomy across the sciences and humanities.',
    externalLinks: [
      { title: 'Free Will (SEP)', url: 'https://plato.stanford.edu/entries/freewill/', type: 'encyclopedia' },
      { title: 'Determinism (Britannica)', url: 'https://www.britannica.com/topic/determinism', type: 'encyclopedia' },
      { title: 'Compatibilism (Britannica)', url: 'https://www.britannica.com/topic/compatibilism', type: 'encyclopedia' }
    ]
  },
  {
    id: 'vedanta-vs-buddhism',
    name: 'Vedānta vs Buddhism',
    description:
      'Indian philosophical debates contrasted Buddhist anātman (no enduring self) with Vedāntic affirmations of ātman/Brahman. Disputes ranged over the nature of consciousness, self, liberation, and the status of appearances vs ultimate reality.',
    challenger: 'Buddhist Philosophy',
    challenged: 'Advaita Vedānta',
    period: 'Ancient to Medieval India',
    outcome:
      'An enduring, multifaceted controversy: Vedānta became dominant within Hindu philosophy, while Buddhist logic and epistemology (e.g., Dignāga–Dharmakīrti) profoundly shaped Indian debates about perception, inference, and self.',
    significance:
      'Central to comparative metaphysics of self and consciousness; continues to inform global philosophy of mind, ethics, and soteriology.',
    externalLinks: [
      { title: 'Advaita Vedānta (SEP)', url: 'https://plato.stanford.edu/entries/vedanta-advaita/', type: 'encyclopedia' },
      { title: 'Buddhist Philosophy: Anattā / No-Self (IEP)', url: 'https://iep.utm.edu/anatta/', type: 'encyclopedia' },
      { title: 'Vedānta (Britannica)', url: 'https://www.britannica.com/topic/Vedanta', type: 'encyclopedia' }
    ]
  },
  {
    id: 'jainism-vs-hinduism',
    name: 'Jainism vs Hindu Orthodoxy',
    description:
      'Jain thinkers critiqued Vedic sacrifice and caste, arguing for rigorous non-violence (ahiṃsā), many-sidedness (anekāntavāda), and spiritual equality. Their polemics targeted ritualism and metaphysical assumptions of orthodox schools.',
    challenger: 'Jain Philosophy',
    challenged: 'Vedic Orthodoxy',
    period: 'Ancient India',
    outcome:
      'Jainism consolidated as an independent philosophical–religious system with distinctive ethics, metaphysics, and ascetic practice, dialoguing extensively with Hindu and Buddhist schools.',
    significance:
      'Introduced systematic commitments to non-violence and pluralism that influenced Indian ethics, law, and interreligious discourse.',
    externalLinks: [
      { title: 'Jain Philosophy (SEP)', url: 'https://plato.stanford.edu/entries/jainism/', type: 'encyclopedia' },
      { title: 'Anekāntavāda (IEP)', url: 'https://iep.utm.edu/anekanta/', type: 'encyclopedia' },
      { title: 'Jainism (Britannica)', url: 'https://www.britannica.com/topic/Jainism', type: 'encyclopedia' }
    ]
  },
  {
    id: 'carvaka-vs-orthodox',
    name: 'Cārvāka vs Orthodox Schools',
    description:
      'The materialist Cārvāka (Lokāyata) tradition rejected Vedic authority, karma, and rebirth, defending perception as the primary pramāṇa and critiquing religious practice as socially and epistemically suspect.',
    challenger: 'Cārvāka (Lokāyata)',
    challenged: 'Āstika (orthodox schools)',
    period: 'Ancient India',
    outcome:
      'As an organized school it waned, but its skeptical and empiricist critiques persisted through doxographies and counter-arguments by rivals.',
    significance:
      'Represents one of the world’s earliest explicit materialisms and a counterpoint to religious orthodoxy in Indian intellectual history.',
    externalLinks: [
      { title: 'Indian Materialism (IEP)', url: 'https://iep.utm.edu/indmat/', type: 'encyclopedia' },
      { title: 'Cārvāka / Lokāyata (Britannica)', url: 'https://www.britannica.com/topic/Charvaka', type: 'encyclopedia' }
    ]
  },
  {
    id: 'nyaya-vs-buddhist-logic',
    name: 'Nyāya vs Buddhist Logic',
    description:
      'Nyāya realists defended external objects, universals, and robust inference; Buddhist logicians (Dignāga, Dharmakīrti) advanced sophisticated theories of perception, exclusion (apoha), and momentariness. Their debates shaped criteria for knowledge and valid reasoning.',
    challenger: 'Buddhist Logicians (Dignāga, Dharmakīrti)',
    challenged: 'Nyāya School',
    period: 'Classical India',
    outcome:
      'Sustained dialectic refined both sides: Buddhist epistemology matured, while late (Navya-)Nyāya developed highly technical analytic tools adopted across traditions.',
    significance:
      'Catalyzed a uniquely rigorous tradition of logic and epistemology in India, comparable in sophistication to classical Greek and later scholastic logic.',
    externalLinks: [
      { title: 'Dignāga (SEP)', url: 'https://plato.stanford.edu/entries/dignaga/', type: 'encyclopedia' },
      { title: 'Dharmakīrti (SEP)', url: 'https://plato.stanford.edu/entries/dharmakiirti/', type: 'encyclopedia' },
      { title: 'Nyāya (IEP)', url: 'https://iep.utm.edu/nyaya/', type: 'encyclopedia' }
    ]
  },
  {
    id: 'bhakti-vs-ritualism',
    name: 'Bhakti vs Ritualism',
    description:
      'Bhakti movements challenged rigid ritual authority and caste barriers by emphasizing personal devotion, vernacular expression, and direct access to the divine. Saints and poets reoriented religious practice toward love and grace.',
    challenger: 'Bhakti Philosophy',
    challenged: 'Vedic Ritualism',
    period: 'Medieval India',
    outcome:
      'Devotional traditions spread widely across Hinduism (Vaiṣṇava, Śaiva, Śākta), influencing social reform, music, and literature.',
    significance:
      'Recast religious authority and community, promoting accessibility and ethical critique of social hierarchies.',
    externalLinks: [
      { title: 'Bhakti (Britannica)', url: 'https://www.britannica.com/topic/bhakti', type: 'encyclopedia' },
      { title: 'Bhakti & Sufism (IGNOU eGyanKosh unit)', url: 'https://egyankosh.ac.in/bitstream/123456789/21721/1/Unit-24.pdf', type: 'course' }
    ]
  },
  {
    id: 'advaita-vs-dvaita',
    name: 'Advaita vs Dvaita Vedānta',
    description:
      'Śaṅkara’s Advaita argues ultimate non-duality of Brahman, with the world and self ultimately identical to Brahman; Madhva’s Dvaita defends real and eternal distinction between God (Viṣṇu), souls, and matter.',
    challenger: 'Dvaita Vedānta (Madhva)',
    challenged: 'Advaita Vedānta (Śaṅkara)',
    period: 'Medieval India',
    outcome:
      'Multiple Vedāntic systems (Advaita, Viśiṣṭādvaita, Dvaita, etc.) coexisted, each building extensive scriptural commentaries and devotional/monastic lineages.',
    significance:
      'Defines core options for understanding the relation among self, world, and God—continuing to inform theology, ritual, and spiritual practice.',
    externalLinks: [
      { title: 'Dvaita Vedānta (IEP)', url: 'https://iep.utm.edu/dvaita/', type: 'encyclopedia' },
      { title: 'Advaita Vedānta (IEP)', url: 'https://iep.utm.edu/adv-veda/', type: 'encyclopedia' },
      { title: 'Madhva (Britannica)', url: 'https://www.britannica.com/biography/Madhva', type: 'encyclopedia' }
    ]
  },
  {
    id: 'sankhya-vs-vedanta',
    name: 'Sāṃkhya vs Vedānta',
    description:
      'Sāṃkhya posits a dualism of puruṣa (conscious self) and prakṛti (primordial matter), with liberation via discriminative knowledge; Vedānta often reads ultimate reality as non-dual Brahman, challenging Sāṃkhya’s dualism.',
    challenger: 'Sāṃkhya',
    challenged: 'Vedānta',
    period: 'Ancient to Medieval India',
    outcome:
      'Vedānta absorbed select Sāṃkhya concepts (e.g., guṇas) while resisting dualism; debates continued in commentarial traditions.',
    significance:
      'Framed enduring Indian discussions of consciousness, causation, and metaphysical dependence.',
    externalLinks: [
      { title: 'Sāṃkhya (IEP)', url: 'https://iep.utm.edu/samkhya/', type: 'encyclopedia' },
      { title: 'Sāṃkhya (Britannica)', url: 'https://www.britannica.com/topic/Sankhya', type: 'encyclopedia' },
      { title: 'Advaita Vedānta (SEP)', url: 'https://plato.stanford.edu/entries/vedanta-advaita/', type: 'encyclopedia' }
    ]
  },
  {
    id: 'mimamsa-vs-vedanta',
    name: 'Mīmāṃsā vs Vedānta',
    description:
      'Pūrva-Mīmāṃsā prioritizes Vedic ritual, linguistic analysis, and dharma as action-guiding authority; Vedānta centers metaphysics and liberation (mokṣa) through knowledge of Brahman.',
    challenger: 'Vedānta',
    challenged: 'Mīmāṃsā',
    period: 'Classical India',
    outcome:
      'Vedānta rose to prominence in later periods, while Mīmāṃsā’s semantic and hermeneutic insights remained foundational in Indian legal and ritual exegesis.',
    significance:
      'Marks a shift from ritual orthopraxy toward soteriological and metaphysical concerns, while preserving sophisticated theories of language and normativity.',
    externalLinks: [
      { title: 'Mīmāṃsā (IEP)', url: 'https://iep.utm.edu/mimamsa/', type: 'encyclopedia' },
      { title: 'Mīmāṃsā (Britannica)', url: 'https://www.britannica.com/topic/Mimamsa', type: 'encyclopedia' },
      { title: 'Vedānta (Britannica)', url: 'https://www.britannica.com/topic/Vedanta', type: 'encyclopedia' }
    ]
  },
  {
    id: 'hindu-vs-islamic-thought',
    name: 'Hindu Philosophy vs Islamic Thought',
    description:
      'In medieval South Asia, Hindu philosophers engaged Islamic theologians, Sufis, and philosophers on divine unity, metaphysics, and ethics. Translation projects (e.g., Persian Upaniṣads) and shared devotional forms fostered exchange.',
    challenger: 'Islamic Philosophers (e.g., Sufis, Theologians)',
    challenged: 'Hindu Philosophers (Vedānta, Nyāya, Bhakti)',
    period: 'Medieval India',
    outcome:
      'Mutual influence and syncretisms emerged (e.g., Bhakti–Sufi resonances), alongside vigorous debate on scripture, reason, and mystical experience.',
    significance:
      'Shaped interfaith philosophy in South Asia and the comparative study of metaphysics and devotion.',
    externalLinks: [
      { title: 'Dārā Shikōh (Britannica)', url: 'https://www.britannica.com/biography/Dara-Shikoh', type: 'encyclopedia' },
      { title: 'Islamic Philosophy (Britannica)', url: 'https://www.britannica.com/topic/Islamic-philosophy', type: 'encyclopedia' }
    ]
  },
  {
    id: 'modern-indian-vs-colonial-thought',
    name: 'Modern Indian Philosophy vs Colonial Thought',
    description:
      'Thinkers such as Vivekananda, Aurobindo, and Gandhi challenged colonial narratives by rearticulating Indian spiritual and philosophical ideas in conversation with modernity, science, and nationalism.',
    challenger: 'Modern Indian Thinkers',
    challenged: 'Western Colonial Philosophy',
    period: '19th–20th century',
    outcome:
      'A creative synthesis of Indian and Western ideas influenced anti-colonial movements and global intellectual life, from nonviolence to integral yoga.',
    significance:
      'Laid foundations for modern Indian political philosophy, religious pluralism, and cross-cultural dialogue.',
    externalLinks: [
      { title: 'Vivekananda (Britannica)', url: 'https://www.britannica.com/biography/Vivekananda', type: 'encyclopedia' },
      { title: 'Sri Aurobindo (Britannica)', url: 'https://www.britannica.com/biography/Sri-Aurobindo', type: 'encyclopedia' },
      { title: 'Pax Gandhiana (OUP book)', url: 'https://academic.oup.com/book/12258', type: 'book' }
    ]
  },
  {
    id: 'idealism-vs-materialism',
    name: 'Idealism vs Materialism',
    description:
      'Metaphysicians dispute whether reality is fundamentally mental or physical. Idealists give priority to mind, concepts, or experience; materialists (often physicalists) hold that all phenomena, including mind, are ultimately physical.',
    challenger: 'Materialism',
    challenged: 'Idealism',
    period: 'Ancient to Modern',
    outcome:
      'No consensus; contemporary philosophy of mind features diverse physicalist approaches alongside neo-idealistic proposals and neutral monisms.',
    significance:
      'Structures debates about consciousness, causation, scientific explanation, and the unity of knowledge.',
    externalLinks: [
      { title: 'Idealism (Britannica)', url: 'https://www.britannica.com/topic/idealism', type: 'encyclopedia' },
      { title: 'Materialism (Britannica)', url: 'https://www.britannica.com/topic/materialism-philosophy', type: 'encyclopedia' },
      { title: 'German Idealism (IEP)', url: 'https://iep.utm.edu/germidea/', type: 'encyclopedia' }
    ]
  },
  {
    id: 'realism-vs-nominalism',
    name: 'Realism vs Nominalism',
    description:
      'The medieval problem of universals asks whether shared features (e.g., “redness,” “humanity”) exist mind-independently (realism) or are merely names/concepts applied to particulars (nominalism).',
    challenger: 'Nominalism',
    challenged: 'Scholastic Realism',
    period: 'Medieval',
    outcome:
      'Persistent divergence among realist, conceptualist, and nominalist positions, each with sophisticated variants and implications for logic and language.',
    significance:
      'Influences metaphysics, semantics, philosophy of mathematics, and the ontology of properties and kinds.',
    externalLinks: [
      { title: 'Medieval Problem of Universals (SEP)', url: 'https://plato.stanford.edu/entries/universals-medieval/', type: 'encyclopedia' },
      { title: 'Nominalism (Britannica)', url: 'https://www.britannica.com/topic/nominalism', type: 'encyclopedia' },
      { title: 'Realism – Universals (Britannica)', url: 'https://www.britannica.com/topic/realism-philosophy/Universals', type: 'encyclopedia' }
    ]
  },
  {
    id: 'mind-vs-body',
    name: 'Mind-Body Problem',
    description:
      'How do mental phenomena relate to physical processes? Views range from Cartesian dualism to physicalism and property dualism, with ongoing debates about consciousness, mental causation, and reduction.',
    challenger: 'Physicalism',
    challenged: 'Cartesian Dualism',
    period: 'Modern to Contemporary',
    outcome:
      'Neuroscience and cognitive science support physicalist frameworks, yet hard problems of consciousness and qualia sustain plural positions in philosophy.',
    significance:
      'Central to philosophy of mind and cognitive science, with implications for AI, psychiatry, and the nature of persons.',
    externalLinks: [
      { title: 'Mind–Body Problem (Britannica)', url: 'https://www.britannica.com/topic/mind-body-problem', type: 'encyclopedia' },
      { title: 'Mind–Body Dualism (Britannica)', url: 'https://www.britannica.com/topic/mind-body-dualism', type: 'encyclopedia' },
      { title: 'Physicalism (Oxford Bibliographies)', url: 'https://www.oxfordbibliographies.com/abstract/document/obo-9780195396577/obo-9780195396577-0267.xml', type: 'article' }
    ]
  },
  {
    id: 'nature-vs-nurture',
    name: 'Nature vs Nurture',
    description:
      'Do genetics or environment primarily shape human traits? Contemporary views emphasize gene–environment interaction, epigenetics, and developmental systems over simple dichotomies.',
    challenger: 'Environmentalism',
    challenged: 'Nativism',
    period: 'Modern to Contemporary',
    outcome:
      'Consensus that both are integral, with complex interactions varying by trait and context; simplistic “blank slate” or genetic determinism positions are largely rejected.',
    significance:
      'Guides research in psychology, education, behavioral genetics, and bioethics, influencing policy and practice.',
    externalLinks: [
      { title: 'Nature vs. Nurture (SimplyPsychology)', url: 'https://www.simplypsychology.org/naturevsnurture.html', type: 'article' },
      { title: 'Evolutionary psychology: controversy (Britannica)', url: 'https://www.britannica.com/science/evolutionary-psychology/Controversy', type: 'encyclopedia' },
      { title: 'Innateness (Oxford Handbook chapter)', url: 'https://academic.oup.com/edited-volume/28238/chapter/213320662', type: 'article' }
    ]
  },
  {
    id: 'liberty-vs-authority',
    name: 'Liberty vs Authority',
    description:
      'Political philosophy seeks a just balance between individual freedoms and the coercive powers needed for social order. Liberal theories stress rights and limits on state power; rival views emphasize cohesion, virtue, or security.',
    challenger: 'Liberalism',
    challenged: 'Absolutism',
    period: 'Enlightenment to Modern',
    outcome:
      'Constitutional democracies articulated rights, checks and balances, and rule-of-law frameworks to mediate freedom and authority.',
    significance:
      'Frames contemporary debates on civil liberties, emergency powers, and the scope of state action.',
    externalLinks: [
      { title: 'On Liberty (J. S. Mill, Project Gutenberg)', url: 'https://www.gutenberg.org/ebooks/34901', type: 'book' },
      { title: 'Constitutionalism (Britannica)', url: 'https://www.britannica.com/topic/constitutionalism', type: 'encyclopedia' },
      { title: 'Liberalism (SEP)', url: 'https://plato.stanford.edu/entries/liberalism/', type: 'encyclopedia' }
    ]
  },
  {
    id: 'reason-vs-emotion',
    name: 'Reason vs Emotion',
    description:
      'Should reasoning or feelings guide deliberation and value? From Stoics to Hume to contemporary cognitive science, philosophers analyze emotions as sources of insight, motivation, and bias alongside practical reason.',
    challenger: 'Romanticism',
    challenged: 'Rationalism',
    period: 'Modern',
    outcome:
      'A broad recognition that emotions and reasons are intertwined: emotions can be cognitively rich and action-guiding, while practical reason evaluates and integrates affect.',
    significance:
      'Impacts ethics, decision theory, and aesthetics, reshaping how we understand agency and practical wisdom.',
    externalLinks: [
      { title: 'Emotion (SEP)', url: 'https://plato.stanford.edu/entries/emotion/', type: 'encyclopedia' },
      { title: 'Practical Reason (SEP)', url: 'https://plato.stanford.edu/entries/practical-reason/', type: 'encyclopedia' },
      { title: 'Romanticism (Britannica)', url: 'https://www.britannica.com/art/Romanticism', type: 'encyclopedia' }
    ]
  },
  {
    id: 'science-vs-religion',
    name: 'Science vs Religion',
    description:
      'Across history, science and religion have related in modes of conflict, independence, dialogue, and integration. Contemporary scholarship examines methodological boundaries, cosmology, evolution, and personhood.',
    challenger: 'Scientific Naturalism',
    challenged: 'Religious Orthodoxy',
    period: 'Modern to Contemporary',
    outcome:
      'No single model prevails; diverse traditions adopt coexistence or integration strategies while acknowledging areas of tension.',
    significance:
      'Shapes public understanding of knowledge, education policy, and ethics of emerging technologies.',
    externalLinks: [
      { title: 'Science & Religion (Oxford Bibliographies)', url: 'https://www.oxfordbibliographies.com/display/document/obo-9780195396577/obo-9780195396577-0147.xml', type: 'article' },
      { title: 'On the Intersection of Science and Religion (Pew Research Center)', url: 'https://www.pewresearch.org/science/2020/08/26/on-the-intersection-of-science-and-religion/', type: 'article' },
      { title: 'Science and Religion (University of Oxford)', url: 'https://www.theology.ox.ac.uk/science-and-religion', type: 'course' }
    ]
  },
  {
    id: 'relativism-vs-universalism',
    name: 'Relativism vs Universalism',
    description:
      'Are truth and value relative to cultures or perspectives, or are there universally valid norms? Philosophers distinguish descriptive cultural diversity from metaethical and epistemic relativisms.',
    challenger: 'Cultural Relativism',
    challenged: 'Moral Universalism',
    period: 'Contemporary',
    outcome:
      'No uniform verdict; many endorse pluralism compatible with limited universals (e.g., human rights), while others defend robust objectivism or context-sensitive relativisms.',
    significance:
      'Crucial for cross-cultural ethics, law, anthropology, and debates over tolerance and critique.',
    externalLinks: [
      { title: 'Relativism (SEP)', url: 'https://plato.stanford.edu/entries/relativism/', type: 'encyclopedia' },
      { title: 'Moral Relativism (IEP)', url: 'https://iep.utm.edu/moral-re/', type: 'encyclopedia' },
      { title: 'Cultural/Ethical Relativism (Britannica)', url: 'https://www.britannica.com/topic/ethical-relativism', type: 'encyclopedia' }
    ]
  },
  {
    id: 'egoism-vs-altruism',
    name: 'Egoism vs Altruism',
    description:
      'Are humans primarily self-interested, or can they be genuinely motivated by concern for others? Distinctions among psychological, ethical, and rational egoism contrast with theories of altruism in ethics and evolutionary biology.',
    challenger: 'Psychological Egoism',
    challenged: 'Ethical Altruism',
    period: 'Ancient to Modern',
    outcome:
      'Empirical and philosophical debates yield mixed conclusions: motivational complexity undermines simple egoism, yet normative theories continue to weigh self-interest against impartial beneficence.',
    significance:
      'Informs moral theory, public policy, and social science models of cooperation and welfare.',
    externalLinks: [
      { title: 'Egoism (IEP)', url: 'https://iep.utm.edu/egoism/', type: 'encyclopedia' },
      { title: 'Altruism (Britannica)', url: 'https://www.britannica.com/topic/altruism-ethics', type: 'encyclopedia' },
      { title: 'Altruism & Group Selection (IEP)', url: 'https://iep.utm.edu/altruism-and-group-selection/', type: 'encyclopedia' }
    ]
  },
  {
    id: 'order-vs-chaos',
    name: 'Order vs Chaos',
    description:
      'A recurrent theme from Greek cosmogony to Nietzsche’s aesthetics contrasts structured order with generative disorder. Philosophers explore how form emerges from flux and the role of restraint and transgression in culture.',
    challenger: 'Existentialism',
    challenged: 'Traditional Metaphysics',
    period: 'Modern to Contemporary',
    outcome:
      'In modern thought, “order vs. chaos” becomes a creative tension rather than a winner-take-all dispute, informing accounts of art, normativity, and science.',
    significance:
      'Shapes aesthetics, cultural criticism, and metaphysical pictures of stability and change.',
    externalLinks: [
      { title: 'Apollonian (Britannica)', url: 'https://www.britannica.com/art/Apollonian', type: 'encyclopedia' },
      { title: 'Chaos (ancient Greek religion) – Britannica', url: 'https://www.britannica.com/topic/Chaos-ancient-Greek-religion', type: 'encyclopedia' },
      { title: 'The Birth of Tragedy (Britannica)', url: 'https://www.britannica.com/topic/The-Birth-of-Tragedy', type: 'encyclopedia' }
    ]
  },
  {
    id: 'self-vs-other',
    name: 'Self vs Other',
    description:
      'From phenomenology to ethics, thinkers analyze how selfhood is constituted in relation to others. Topics include intersubjectivity, recognition, and the ethical priority of the Other (e.g., Levinas).',
    challenger: 'Phenomenology',
    challenged: 'Classical Individualism',
    period: 'Contemporary',
    outcome:
      'Shift from atomistic selves toward relational and dialogical accounts of identity and normativity.',
    significance:
      'Informs contemporary ethics, political theory, and social ontology, emphasizing responsibility and recognition.',
    externalLinks: [
      { title: 'Husserl: Phenomenology of Embodiment (IEP)', url: 'https://iep.utm.edu/husspemb/', type: 'encyclopedia' },
      { title: 'Emmanuel Levinas (Britannica)', url: 'https://www.britannica.com/biography/Emmanuel-Levinas', type: 'encyclopedia' },
      { title: 'Husserl’s Intersubjectivity (journal article PDF)', url: 'https://www.tandfonline.com/doi/pdf/10.1080/20797222.2019.1632023', type: 'article' }
    ]
  },
  {
    id: 'freedom-vs-security',
    name: 'Freedom vs Security',
    description:
      'Modern states balance civil liberties with public safety and national security. Political philosophy and constitutional law specify protections, limits, and emergency powers.',
    challenger: 'Authoritarianism',
    challenged: 'Liberal Freedom',
    period: 'Modern to Contemporary',
    outcome:
      'Institutional mechanisms—rights charters, judicial review, proportionality tests—mediate trade-offs, though tensions flare in crises.',
    significance:
      'A perennial issue for democratic legitimacy, surveillance ethics, and human rights.',
    externalLinks: [
      { title: 'Civil Liberties & the Bill of Rights (Britannica)', url: 'https://www.britannica.com/topic/Constitution-of-the-United-States-of-America/Civil-liberties-and-the-Bill-of-Rights', type: 'encyclopedia' },
      { title: 'On Liberty (J. S. Mill, Project Gutenberg)', url: 'https://www.gutenberg.org/ebooks/34901', type: 'book' },
      { title: 'Constitutionalism – political & legal (Britannica)', url: 'https://www.britannica.com/topic/constitutionalism/Political-and-legal-constitutionalism-compared', type: 'encyclopedia' }
    ]
  },
  {
    id: 'skepticism-vs-certainty',
    name: 'Skepticism vs Certainty',
    description:
      'Can we attain certain knowledge, or must we suspend judgment? From ancient Pyrrhonism to Cartesian doubt and contemporary externalism, skepticism tests the scope and grounding of justification.',
    challenger: 'Skepticism',
    challenged: 'Dogmatism',
    period: 'Ancient to Modern',
    outcome:
      'Critical philosophy seeks fallible, context-sensitive justification rather than infallible certainty; skepticism remains a methodological and substantive challenge.',
    significance:
      'Drives developments in epistemology, philosophy of science, and theories of evidence.',
    externalLinks: [
      { title: 'Skepticism (SEP)', url: 'https://plato.stanford.edu/entries/skepticism/', type: 'encyclopedia' },
      { title: 'Skepticism (Britannica)', url: 'https://www.britannica.com/topic/skepticism', type: 'encyclopedia' },
      { title: 'Epistemology (Britannica) – overview', url: 'https://www.britannica.com/topic/epistemology', type: 'encyclopedia' }
    ]
  },
  {
    id: 'individual-vs-community',
    name: 'Individual vs Community',
    description:
      'How should we prioritize individual rights against communal goods and traditions? Communitarian critiques of liberalism stress the social embeddedness of persons and the value of shared practices.',
    challenger: 'Communitarianism',
    challenged: 'Individualism',
    period: 'Modern to Contemporary',
    outcome:
      'Many political theories now incorporate both personal rights and community-shaping institutions, negotiating tensions through constitutional and civic frameworks.',
    significance:
      'Shapes debates on social policy, multiculturalism, and civic education.',
    externalLinks: [
      { title: 'Communitarianism (SEP)', url: 'https://plato.stanford.edu/entries/communitarianism/', type: 'encyclopedia' },
      { title: 'Communitarianism (Britannica)', url: 'https://www.britannica.com/topic/communitarianism', type: 'encyclopedia' },
      { title: 'Liberalism (SEP)', url: 'https://plato.stanford.edu/entries/liberalism/', type: 'encyclopedia' }
    ]
  },
  {
    id: 'analytic-vs-continental',
    name: 'Analytic vs Continental Philosophy',
    description:
      'Twentieth-century philosophy diverged into analytic (clarity, logic, language) and continental (phenomenology, hermeneutics, critical theory, post-structuralism) traditions. Despite differences in style and method, there are many overlaps and dialogues.',
    challenger: 'Analytic Philosophy',
    challenged: 'Continental Philosophy',
    period: '20th century',
    outcome:
      'Ongoing cross-pollination: contemporary work increasingly bridges methods, topics, and canons across the divide.',
    significance:
      'Defines much of the contemporary philosophical landscape, curricula, and research cultures.',
    externalLinks: [
      { title: 'Analytic Philosophy (IEP)', url: 'https://iep.utm.edu/analytic-philosophy/', type: 'encyclopedia' },
      { title: 'Continental Philosophy (IEP)', url: 'https://iep.utm.edu/category/traditions/continental/', type: 'encyclopedia' },
      { title: 'Continental Philosophy (Britannica)', url: 'https://www.britannica.com/topic/continental-philosophy', type: 'encyclopedia' }
    ]
  },
  {
    id: 'humanism-vs-nihilism',
    name: 'Humanism vs Nihilism',
    description:
      'Humanism affirms human dignity, reason, and cultural achievement; nihilism denies objective value or meaning. Modernity confronts the collapse of traditional sources of meaning while seeking new grounds for value.',
    challenger: 'Nihilism',
    challenged: 'Humanism',
    period: 'Modern to Contemporary',
    outcome:
      'Philosophical responses range from affirmations of human creativity and responsibility to existentialist and pragmatic reconstructions of value.',
    significance:
      'Informs debates about secular ethics, education, and cultural pessimism/renewal.',
    externalLinks: [
      { title: 'Humanism (Britannica)', url: 'https://www.britannica.com/topic/humanism', type: 'encyclopedia' },
      { title: 'Nihilism (IEP)', url: 'https://iep.utm.edu/nihilism/', type: 'encyclopedia' },
      { title: 'Nihilism (Britannica)', url: 'https://www.britannica.com/topic/nihilism', type: 'encyclopedia' }
    ]
  },
  {
    id: 'tradition-vs-progress',
    name: 'Tradition vs Progress',
    description:
      'Societies weigh the value of inherited practices against innovation and reform. Conservative outlooks stress continuity, organic change, and skepticism about rationalist schemes; progressive currents emphasize improvement, inclusion, and social experimentation.',
    challenger: 'Progressivism',
    challenged: 'Traditionalism',
    period: 'Modern to Contemporary',
    outcome:
      'Context-dependent equilibria emerge through institutions that can conserve core goods while enabling incremental change.',
    significance:
      'Central to public philosophy and policymaking, shaping disputes over education, culture, technology, and rights.',
    externalLinks: [
      { title: 'Political Philosophy – overview (Britannica)', url: 'https://www.britannica.com/topic/political-philosophy', type: 'encyclopedia' },
      { title: 'Constitutionalism (Britannica)', url: 'https://www.britannica.com/topic/constitutionalism', type: 'encyclopedia' }
    ]
  }
];
