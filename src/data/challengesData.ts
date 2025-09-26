import { Challenge } from '../types/philosophy';

export const challengesData: Challenge[] = [
  {
    id: 'rationalism-vs-empiricism',
    name: 'Rationalism vs Empiricism',
    description: `The fundamental debate about whether knowledge comes primarily from reason and innate ideas (rationalism) or from sensory experience (empiricism). Rationalists such as Descartes, Leibniz, and Spinoza argued that knowledge of metaphysical truths, mathematical certainty, and logical necessity can be accessed by reason alone, independent of experience. Empiricists such as Locke, Berkeley, and Hume contended that the mind begins as a blank slate (tabula rasa) and all knowledge derives from sense impressions. The dispute concerns the origin of concepts, the reliability of perception, and the scope of human understanding.`,
    challenger: 'British Empiricism',
    challenged: 'Continental Rationalism',
    period: 'Early Modern',
    outcome: `Kant’s synthesis in Critical Philosophy: Immanuel Kant proposed that while all knowledge begins with experience, the mind provides innate forms (space, time) and categories (causality, substance) that structure experience. This preserved empiricism’s emphasis on sensory input while retaining rationalism’s insistence on necessity and universality. Kant reframed the debate as transcendental idealism, marking a turning point in epistemology.`,
    significance: `This debate shaped modern epistemology and the foundations of the scientific method. It clarified how observation and reasoning complement one another in forming knowledge. It also influenced skepticism, philosophy of mind, and cognitive science by probing the limits of perception and the mind’s role in constructing reality. The rationalism-empiricism tension continues to inform debates about innate cognition, artificial intelligence, and the reliability of empirical science.`,
    externalLinks: [
      { title: 'Rationalism vs. Empiricism (SEP)', url: 'https://plato.stanford.edu/entries/rationalism-empiricism/', type: 'encyclopedia' },
      { title: 'Immanuel Kant (IEP) – overview of transcendental idealism', url: 'https://iep.utm.edu/kantview/', type: 'encyclopedia' },
      { title: 'Classics of Western Philosophy (MIT OpenCourseWare)', url: 'https://ocw.mit.edu/courses/24-01-classics-of-western-philosophy-spring-2006/', type: 'course' }
    ]
  },
  {
    id: 'faith-vs-reason',
    name: 'Faith vs Reason',
    description: `The medieval debate about the relationship between religious faith and philosophical reason. Thinkers such as Augustine, Anselm, and Aquinas asked whether belief in God and Christian doctrine required faith alone, or whether reason and philosophy could demonstrate religious truths. Scholastic philosophers attempted to integrate Aristotelian logic into theology, while others held that faith must be kept separate or above reason. The tension influenced church authority, methods of education, and the intellectual climate of medieval Europe.`,
    challenger: 'Scholastic Philosophy',
    challenged: 'Pure Faith Traditions',
    period: 'Medieval',
    outcome: `Thomas Aquinas provided a synthesis by arguing that reason can demonstrate some truths (e.g., God’s existence) but that faith is necessary for mysteries beyond human comprehension. His Thomistic philosophy influenced Catholic theology and preserved the value of both domains, shaping scholastic method and theological argumentation.`,
    significance: `This debate set the groundwork for religious philosophy, affecting how theology interacts with philosophy. It influenced later disputes in the Enlightenment between secular rationalism and faith traditions, and remains relevant in modern debates about the compatibility of science, philosophy, and religion. The framework developed in scholasticism continues to shape Catholic education and natural theology.`,
    externalLinks: [
      { title: 'Faith (SEP)', url: 'https://plato.stanford.edu/entries/faith/', type: 'encyclopedia' },
      { title: 'Thomas Aquinas (SEP)', url: 'https://plato.stanford.edu/entries/aquinas/', type: 'encyclopedia' },
      { title: 'Faith and reason (Britannica)', url: 'https://www.britannica.com/topic/faith#ref1236082', type: 'encyclopedia' }
    ]
  },
  {
    id: 'determinism-vs-free-will',
    name: 'Determinism vs Free Will',
    description: `The philosophical question of whether human actions are determined by prior causes or whether genuine freedom of choice exists. Determinism claims that all events follow necessarily from antecedent conditions, grounded in natural laws, divine foreknowledge, or causal chains. Free will advocates argue that moral responsibility requires the ability to choose otherwise. The debate includes positions such as hard determinism (denying free will), libertarianism (affirming undetermined freedom), and compatibilism (reconciling causal determination with meaningful agency).`,
    challenger: 'Scientific Determinism',
    challenged: 'Moral Responsibility',
    period: 'Modern to Contemporary',
    outcome: `The debate remains unresolved but has yielded nuanced theories. Compatibilists like Hume and modern philosophers argue that freedom can be defined as acting according to one’s desires without coercion. Others, influenced by neuroscience, argue that brain activity undermines free choice. Libertarians and existentialists affirm authentic freedom. No consensus exists, but sophisticated models of freedom and causation enrich philosophy, ethics, and psychology.`,
    significance: `The issue affects ethics, law, and personal identity. If determinism holds, the basis for moral responsibility and punishment is challenged. If freedom exists, metaphysical questions about causality arise. The discussion continues to shape debates in neuroscience, criminal law, and theology, making it one of the most enduring problems in philosophy.`,
    externalLinks: [
      { title: 'Free Will (SEP)', url: 'https://plato.stanford.edu/entries/freewill/', type: 'encyclopedia' },
      { title: 'Determinism (Britannica)', url: 'https://www.britannica.com/topic/determinism', type: 'encyclopedia' },
      { title: 'Compatibilism (Britannica)', url: 'https://www.britannica.com/topic/compatibilism', type: 'encyclopedia' }
    ]
  },
  {
    id: 'vedanta-vs-buddhism',
    name: 'Vedānta vs Buddhism',
    description: `The debate over the nature of self and ultimate reality in classical Indian thought. Vedānta, especially Advaita, maintains that the true self (ātman) is identical with Brahman, the ultimate non-dual reality. Buddhism, by contrast, denies the existence of a permanent self (anātman) and emphasizes impermanence, dependent origination, and emptiness (śūnyatā). These traditions contested each other’s metaphysics, theories of liberation, and epistemologies. Buddhist logicians critiqued Vedānta’s ontology, while Vedāntins criticized Buddhist denial of self as nihilistic.`,
    challenger: 'Buddhist Philosophy',
    challenged: 'Advaita Vedānta',
    period: 'Ancient to Medieval India',
    outcome: `Vedānta became dominant in Hindu philosophy while Buddhism’s presence declined in India but persisted globally. The debates sharpened both traditions: Vedānta incorporated logical rigor and epistemological insights from Buddhism, while Buddhism influenced Indian and Tibetan thought in logic and meditation.`,
    significance: `Central to Indian metaphysics and comparative philosophy of self. The debate continues to shape global philosophy of mind and consciousness, interreligious dialogue, and the comparative study of personal identity and liberation.`,
    externalLinks: [
      { title: 'Advaita Vedānta (SEP)', url: 'https://plato.stanford.edu/entries/vedanta-advaita/', type: 'encyclopedia' },
      { title: 'Buddhist Philosophy: Anattā / No-Self (IEP)', url: 'https://iep.utm.edu/anatta/', type: 'encyclopedia' },
      { title: 'Vedānta (Britannica)', url: 'https://www.britannica.com/topic/Vedanta', type: 'encyclopedia' }
    ]
  },
  {
    id: 'jainism-vs-hinduism',
    name: 'Jainism vs Hindu Orthodoxy',
    description: `Jainism, arising in ancient India, rejected central features of Vedic religion such as sacrificial rituals and caste hierarchy. Jain philosophy emphasizes non-violence (ahimsa), non-possession, and the plurality of viewpoints (anekāntavāda). By contrast, Vedic orthodoxy upheld animal sacrifice, ritualism, and social stratification based on caste. Jains denied the authority of the Vedas and pursued liberation through asceticism and strict ethical discipline rather than ritual sacrifice. Their critique influenced social and religious practices across India.`,
    challenger: 'Jain Philosophy',
    challenged: 'Vedic Orthodoxy',
    period: 'Ancient India',
    outcome: `Jainism established itself as an independent religious-philosophical system. While remaining a minority tradition, it endured through rich textual traditions, monastic orders, and lay communities. Its ethical emphasis influenced wider Indian thought, especially the value of ahimsa adopted by later Hindu, Buddhist, and modern reform movements.`,
    significance: `Jainism’s critique reshaped Indian philosophy by introducing pluralism and strict non-violence, later inspiring Gandhi and global non-violent resistance. It illustrates how minority traditions can shape broader cultural and ethical landscapes despite limited demographic presence.`,
    externalLinks: [
      { title: 'Jain Philosophy (SEP)', url: 'https://plato.stanford.edu/entries/jainism/', type: 'encyclopedia' },
      { title: 'Anekāntavāda (IEP)', url: 'https://iep.utm.edu/anekanta/', type: 'encyclopedia' },
      { title: 'Jainism (Britannica)', url: 'https://www.britannica.com/topic/Jainism', type: 'encyclopedia' }
    ]
  },
  {
    id: 'carvaka-vs-orthodox',
    name: 'Cārvāka vs Orthodox Schools',
    description: `The Cārvāka or Lokāyata school represented ancient India’s materialist philosophy. It denied the authority of the Vedas, karma, rebirth, and liberation, holding that only direct perception is a valid source of knowledge. The Cārvāka rejected inference when it extended beyond empirical verification and denied the existence of an afterlife or unseen entities. Orthodox Hindu schools: Nyāya, Vaiśeṣika, Vedānta, Mīmāṃsā, Yoga, Sāṃkhya; defending inference, scripture, and metaphysical doctrines against Cārvāka criticism.`,
    challenger: 'Cārvāka (Lokāyata)',
    challenged: 'Astika (orthodox schools)',
    period: 'Ancient India',
    outcome: `The Cārvāka tradition declined, with few original texts surviving, but its arguments were preserved in opponents’ refutations. It exerted influence as a counterpoint, representing skepticism toward religion and metaphysics in Indian philosophy.`,
    significance: `Cārvāka is important as India’s earliest materialist philosophy, anticipating modern naturalism and atheism. Its focus on empirical perception and rejection of supernatural claims foreshadowed later scientific approaches and critical philosophy.`,
    externalLinks: [
      { title: 'Indian Materialism (IEP)', url: 'https://iep.utm.edu/indmat/', type: 'encyclopedia' },
      { title: 'Carvaka – Internet Encyclopedia of Philosophy', url: 'https://iep.utm.edu/lokayata/', type: 'encyclopedia' },
      { title: 'Cārvāka / Lokāyata (Britannica)', url: 'https://www.britannica.com/topic/Charvaka', type: 'encyclopedia' }
    ]
  },
  {
    id: 'nyaya-vs-buddhist-logic',
    name: 'Nyāya vs Buddhist Logic',
    description: `Nyāya realism posited an external world with real universals, selves, and valid sources of knowledge (perception, inference, analogy, testimony). Buddhist logicians such as Dignāga and Dharmakīrti emphasized momentariness, denial of universals, and a refined theory of perception and inference. Buddhists argued that cognition constructs reality, while Nyāya philosophers defended realism against Buddhist idealism. Their exchanges produced some of the most rigorous logical and epistemological debates in Indian thought.`,
    challenger: 'Buddhist Logicians (Dignāga, Dharmakīrti)',
    challenged: 'Nyāya School',
    period: 'Classical India',
    outcome: `Both traditions enriched Indian logic and epistemology. Nyāya refined its defenses of realism, while Buddhist philosophers developed a sophisticated theory of perception and inference. Even as Buddhism declined in India, Nyāya absorbed and systematized aspects of Buddhist logical theory.`,
    significance: `The debate advanced theories of knowledge, logic, and language in Indian philosophy. It influenced later Hindu and Buddhist traditions and remains a major resource for comparative philosophy and the history of logic.`,
    externalLinks: [
      { title: 'Dignāga (SEP)', url: 'https://plato.stanford.edu/entries/dignaga/', type: 'encyclopedia' },
      { title: 'Dharmakīrti (SEP)', url: 'https://plato.stanford.edu/entries/dharmakiirti/', type: 'encyclopedia' },
      { title: 'Nyāya (IEP)', url: 'https://iep.utm.edu/nyaya/', type: 'encyclopedia' },
      { title: 'Buddhist Logic – Stanford Encyclopedia of Philosophy', url: 'https://plato.stanford.edu/entries/buddhist-logic/', type: 'encyclopedia' }
    ]
  },
  {
    id: 'bhakti-vs-ritualism',
    name: 'Bhakti vs Ritualism',
    description: `The Bhakti devotional movements arose across medieval India, emphasizing personal devotion to God over ritual performance and priestly authority. Saints and poets such as Kabir, Mirabai, and the Alvars and Nayanars composed vernacular hymns stressing love and surrender rather than sacrificial rites or caste exclusivity. Ritualism emphasized adherence to Vedic rites, caste norms, and priestly mediation. Bhakti challenged these hierarchies, democratizing spirituality through music, poetry, and direct experience of the divine.`,
    challenger: 'Bhakti Philosophy',
    challenged: 'Vedic Ritualism',
    period: 'Medieval India',
    outcome: `Bhakti spread widely, transforming Hindu religious life. It produced rich devotional literature and regional traditions while diminishing the exclusive authority of ritual specialists. While rituals continued, devotion became a central path to liberation across Hindu communities.`,
    significance: `Bhakti reshaped Indian religious philosophy by prioritizing devotion, equality, and emotional expression. It influenced social reform, vernacular literature, and interfaith exchange, leaving a legacy that persists in modern Hinduism and global spirituality.`,
    externalLinks: [
      { title: 'Bhakti (Britannica)', url: 'https://www.britannica.com/topic/bhakti', type: 'encyclopedia' },
      { title: 'Bhakti & Sufism (IGNOU eGyanKosh unit)', url: 'https://egyankosh.ac.in/bitstream/123456789/21721/1/Unit-24.pdf', type: 'course' }
    ]
  },
  {
    id: 'advaita-vs-dvaita',
    name: 'Advaita vs Dvaita Vedānta',
    description: `The Vedānta school split into major branches, most notably Śaṅkara’s Advaita (non-dualism) and Madhva’s Dvaita (dualism). Advaita holds that Brahman alone is real, the world is ultimately illusory (māyā), and the individual self (ātman) is identical with Brahman. Liberation (moksha) comes from realizing this non-duality through knowledge. Dvaita, in contrast, maintains that the individual soul and God (Vishnu) are eternally distinct, and that devotion (bhakti) and divine grace are the only path to liberation. These views clash over metaphysics, theology, soteriology, and the interpretation of sacred texts.`,
    challenger: 'Dvaita Vedānta (Madhva)',
    challenged: 'Advaita Vedānta (Śaṅkara)',
    period: 'Medieval India',
    outcome: `Both schools coexisted with vibrant traditions, creating a plurality of Vedāntic systems. Advaita gained intellectual prestige, while Dvaita inspired devotional communities. Their debates refined metaphysical arguments on self, world, and God, and shaped Hindu theology’s diversity.`,
    significance: `The rivalry defined central issues of Indian philosophy: whether reality is ultimately one or many, and whether devotion or knowledge leads to liberation. It shaped Hindu practice, theology, and interfaith dialogue, influencing both scholars and lay practitioners.`,
    externalLinks: [
      { title: 'Dvaita Vedānta (IEP)', url: 'https://iep.utm.edu/dvaita/', type: 'encyclopedia' },
      { title: 'Advaita Vedānta (IEP)', url: 'https://iep.utm.edu/adv-veda/', type: 'encyclopedia' },
      { title: 'Madhva (Britannica)', url: 'https://www.britannica.com/biography/Madhva', type: 'encyclopedia' }
    ]
  },
  {
    id: 'sankhya-vs-vedanta',
    name: 'Sāṃkhya vs Vedānta',
    description: `Sāṃkhya, one of the oldest Indian systems, is a dualistic philosophy positing two eternal principles: Purusha (pure consciousness) and Prakriti (primordial matter). It teaches liberation comes from discriminating between the two. Vedānta, particularly Advaita, rejects dualism, affirming monism: the world and consciousness are ultimately Brahman. This conflict pits dualist realism against monist idealism. The debate addressed whether liberation requires knowledge of separation (Sāṃkhya) or realization of unity (Vedānta), and whether Prakriti is an independent reality or only appearance.`,
    challenger: 'Sāṃkhya',
    challenged: 'Vedānta',
    period: 'Ancient to Medieval India',
    outcome: `Vedānta absorbed Sāṃkhya categories of matter and evolution but reinterpreted them as appearances within Brahman. Sāṃkhya’s independent system declined, though its cosmology influenced Yoga and other schools.`,
    significance: `This debate shaped Indian metaphysical discourse, contributing enduring discussions of dualism, causation, and consciousness. It influenced Yoga philosophy and modern cross-cultural debates about the nature of matter and mind.`,
    externalLinks: [
      { title: 'Sāṃkhya (IEP)', url: 'https://iep.utm.edu/samkhya/', type: 'encyclopedia' },
      { title: 'Sāṃkhya (Britannica)', url: 'https://www.britannica.com/topic/Sankhya', type: 'encyclopedia' },
      { title: 'Advaita Vedānta (SEP)', url: 'https://plato.stanford.edu/entries/vedanta-advaita/', type: 'encyclopedia' }
    ]
  },
  {
    id: 'mimamsa-vs-vedanta',
    name: 'Mīmāṃsā vs Vedānta',
    description: `Mīmāṃsā, or Purva-Mīmāṃsā, emphasized the authority of the Vedas and ritual action (karma) as the path to maintaining cosmic order. It denied a permanent self beyond ritual obligations and focused on dharma as revealed in scripture. Vedānta (Uttara-Mīmāṃsā), by contrast, emphasized ultimate reality (Brahman) and liberation (moksha) through knowledge, interpreting the Vedas metaphysically rather than ritually. This debate reflects a transition in Indian thought from ritual-centered orthodoxy toward speculative metaphysics and mysticism.`,
    challenger: 'Vedānta',
    challenged: 'Mīmāṃsā',
    period: 'Classical India',
    outcome: `Mīmāṃsā declined in prominence, though its hermeneutics shaped Hindu law and ritual practice. Vedānta emerged as the dominant Hindu philosophy, integrating aspects of ritual but prioritizing metaphysical realization.`,
    significance: `This contest illustrates the evolution of Hindu philosophy from ritual orthodoxy to spirituality and metaphysical speculation. It shaped interpretive methods of scripture and influenced the balance between action and knowledge in Hindu practice.`,
    externalLinks: [
      { title: 'Mīmāṃsā (IEP)', url: 'https://iep.utm.edu/mimamsa/', type: 'encyclopedia' },
      { title: 'Mīmāṃsā (Britannica)', url: 'https://www.britannica.com/topic/Mimamsa', type: 'encyclopedia' },
      { title: 'Vedānta (Britannica)', url: 'https://www.britannica.com/topic/Vedanta', type: 'encyclopedia' }
    ]
  },
  {
    id: 'hindu-vs-islamic-thought',
    name: 'Hindu Philosophy vs Islamic Thought',
    description: `During the Delhi Sultanate and Mughal rule, Hindu philosophers engaged with Islamic scholars on theology, metaphysics, and ethics. Hindu traditions like Vedānta, Nyāya, and Bhakti debated Islamic kalām, Sufi mysticism, and Aristotelian philosophy transmitted through Islam. Dialogues explored the nature of God, soul, creation, and ethical law. Some conflicts arose over idolatry vs monotheism, but exchanges also fostered mutual respect and synthesis. Thinkers like Dara Shikoh studied the Upanishads and Sufi texts side by side, encouraging cross-fertilization.`,
    challenger: 'Islamic Philosophers (e.g., Sufis, Theologians)',
    challenged: 'Hindu Philosophers (Vedānta, Nyāya, Bhakti)',
    period: 'Medieval India',
    outcome: `The interaction produced syncretic traditions such as Sufism’s influence on Bhakti and Sikhism’s blending of Hindu and Islamic elements. Intellectual exchange enriched both traditions, though political tensions often overshadowed dialogue.`,
    significance: `These debates shaped interfaith relations in South Asia, fostering syncretic traditions and shared spirituality. They remain relevant to contemporary interreligious dialogue and comparative theology.`,
    externalLinks: [
      { title: 'Dārā Shikōh (Britannica)', url: 'https://www.britannica.com/biography/Dara-Shikoh', type: 'encyclopedia' },
      { title: 'Sufism in India – Britannica', url: 'https://www.britannica.com/topic/Sufism', type: 'encyclopedia' },
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
      { title: 'Modern Indian Philosophy – Internet Encyclopedia of Philosophy', url: 'https://iep.utm.edu/modern-indian-philosophy/', type: 'encyclopedia' },
      { title: 'Gandhi – Stanford Encyclopedia of Philosophy', url: 'https://plato.stanford.edu/entries/gandhi/', type: 'encyclopedia' },
      { title: 'Sri Aurobindo (Britannica)', url: 'https://www.britannica.com/biography/Sri-Aurobindo', type: 'encyclopedia' },
      { title: 'Pax Gandhiana (OUP book)', url: 'https://academic.oup.com/book/12258', type: 'book' }
    ]
  },
  {
    id: 'idealism-vs-materialism',
    name: 'Idealism vs Materialism',
    description: `This debate concerns the fundamental nature of reality: is it mental/spiritual (idealism) or physical/material (materialism)? Idealists such as Berkeley argue that reality is dependent on mind or consciousness, with matter existing only as perception. German idealists like Hegel saw reality as rational spirit. Materialists, from Democritus to Marx, argue that matter is primary, with consciousness arising from material processes. The clash has persisted through metaphysics, philosophy of mind, and political theory.`,
    challenger: 'Materialism',
    challenged: 'Idealism',
    period: 'Ancient to Modern',
    outcome: `Neither side has fully triumphed; instead, philosophies coexist. Materialism dominates science, while forms of idealism persist in metaphysics, theology, and phenomenology. The debate continues in consciousness studies and physics.`,
    significance: `This debate shaped Western philosophy, influencing metaphysics, theology, and political theory. It remains central in philosophy of mind, especially in debates over consciousness, artificial intelligence, and the relation between thought and matter.`,
    externalLinks: [
      { title: 'Idealism (Britannica)', url: 'https://www.britannica.com/topic/idealism', type: 'encyclopedia' },
      { title: 'Materialism (Britannica)', url: 'https://www.britannica.com/topic/materialism-philosophy', type: 'encyclopedia' },
      { title: 'German Idealism (IEP)', url: 'https://iep.utm.edu/germidea/', type: 'encyclopedia' }
    ]
  },
  {
    id: 'realism-vs-nominalism',
    name: 'Realism vs Nominalism',
    description: `In medieval philosophy, the problem of universals asked whether general concepts like “redness” or “humanity” exist independently of the mind. Realists (e.g., Aquinas) argued universals exist either in God’s mind or as real essences. Nominalists (e.g., Ockham) claimed universals are merely names we use to group particulars. The dispute influenced theology, metaphysics, and logic. It also raised issues about language, meaning, and the relationship between words and reality.`,
    challenger: 'Nominalism',
    challenged: 'Scholastic Realism',
    period: 'Medieval',
    outcome: `The debate produced divergent schools with no consensus. Nominalism gained influence in late medieval thought, paving the way for empiricism, while realism persisted in Thomism and Catholic theology.`,
    significance: `The problem of universals shaped medieval scholasticism and later analytic philosophy. It remains relevant in metaphysics, philosophy of language, and logic, as well as in debates over scientific classification and abstract objects.`,
    externalLinks: [
      { title: 'Medieval Problem of Universals (SEP)', url: 'https://plato.stanford.edu/entries/universals-medieval/', type: 'encyclopedia' },
      { title: 'Nominalism (Britannica)', url: 'https://www.britannica.com/topic/nominalism', type: 'encyclopedia' },
      { title: 'Realism – Universals (Britannica)', url: 'https://www.britannica.com/topic/realism-philosophy/Universals', type: 'encyclopedia' }
    ]
  },
  {
    id: 'mind-vs-body',
    name: 'Mind-Body Problem',
    description: `This debate examines the relationship between consciousness and the physical body. Cartesian dualism holds that mind and body are distinct substances. Physicalists argue that mental states are brain states, reducible to neural activity. Alternative theories include functionalism, panpsychism, and emergentism. The debate raises questions about free will, personal identity, and whether consciousness can be explained by science.`,
    challenger: 'Physicalism',
    challenged: 'Cartesian Dualism',
    period: 'Modern to Contemporary',
    outcome: `Neuroscience increasingly supports physicalism, linking consciousness to brain activity. Yet many philosophers argue dualist or non-reductive accounts better capture subjective experience. No consensus exists.`,
    significance: `Central to philosophy of mind, the mind-body problem influences neuroscience, psychology, and AI. It shapes debates on consciousness, personal identity, and the possibility of artificial intelligence with subjective experience.`,
    externalLinks: [
      { title: 'Mind–Body Problem (Britannica)', url: 'https://www.britannica.com/topic/mind-body-problem', type: 'encyclopedia' },
      { title: 'Mind–Body Dualism (Britannica)', url: 'https://www.britannica.com/topic/mind-body-dualism', type: 'encyclopedia' },
      { title: 'Physicalism (Oxford Bibliographies)', url: 'https://www.oxfordbibliographies.com/abstract/document/obo-9780195396577/obo-9780195396577-0267.xml', type: 'article' }
    ]
  },
  {
    id: 'nature-vs-nurture',
    name: 'Nature vs Nurture',
    description: `This debate examines whether human traits, behaviors, and intelligence are primarily shaped by genetic inheritance (nature) or environmental influences (nurture). Nativists argue biological determinism plays the dominant role, while empiricists and social scientists emphasize upbringing, culture, and education. Studies of twins, adoption, and cross-cultural psychology provide evidence for both sides. The debate extends to morality, personality, language acquisition, and mental health. It also raises ethical concerns about reductionism, determinism, and the social consequences of attributing traits to genes versus social context.`,
    challenger: 'Environmentalism',
    challenged: 'Nativism',
    period: 'Modern to Contemporary',
    outcome: `Modern consensus accepts an interactionist model: genes and environment interact dynamically, with epigenetics showing how environment influences gene expression. Neither factor alone suffices to explain human development.`,
    significance: `This debate shaped psychology, education, and sociology. It informs policies on inequality, criminal justice, and healthcare, as well as ongoing research in behavioral genetics, neuroscience, and developmental psychology.`,
    externalLinks: [
      { title: 'Nature vs. Nurture (SimplyPsychology)', url: 'https://www.simplypsychology.org/naturevsnurture.html', type: 'article' },
      { title: 'Evolutionary psychology: controversy (Britannica)', url: 'https://www.britannica.com/science/evolutionary-psychology/Controversy', type: 'encyclopedia' },
      { title: 'Innateness (Oxford Handbook chapter)', url: 'https://academic.oup.com/edited-volume/28238/chapter/213320662', type: 'article' }
    ]
  },
  {
    id: 'liberty-vs-authority',
    name: 'Liberty vs Authority',
    description: `This debate explores the balance between individual freedom and political or social authority. Thinkers like Hobbes emphasized the need for strong authority to prevent chaos, while Locke and Mill defended natural rights and liberty against tyranny. Authority provides security and order, but unchecked power can oppress individuals. Liberty enables personal autonomy, but without limits can lead to conflict and instability. The debate spans theories of government, constitutional law, and ethics, influencing revolutions, liberal democracies, and authoritarian regimes.`,
    challenger: 'Liberalism',
    challenged: 'Absolutism',
    period: 'Enlightenment to Modern',
    outcome: `Constitutional democracies established systems balancing liberty with authority, through rule of law, separation of powers, and rights protections. However, tensions remain, especially in crises when security is prioritized over freedom.`,
    significance: `Central to political philosophy, this debate shapes debates on governance, civil rights, and legitimacy of state power. It influences contemporary issues like surveillance, freedom of speech, and public health mandates.`,
    externalLinks: [
      { title: 'On Liberty (J. S. Mill, Project Gutenberg)', url: 'https://www.gutenberg.org/ebooks/34901', type: 'book' },
      { title: 'Constitutionalism (Britannica)', url: 'https://www.britannica.com/topic/constitutionalism', type: 'encyclopedia' },
      { title: 'Liberalism (SEP)', url: 'https://plato.stanford.edu/entries/liberalism/', type: 'encyclopedia' }
    ]
  },
  {
    id: 'reason-vs-emotion',
    name: 'Reason vs Emotion',
    description: `This philosophical dispute concerns whether reason or emotion should guide decision-making and morality. Rationalists argue that logic and universal principles provide reliable guidance, while romantics and sentimentalists emphasize the moral insights of feeling, empathy, and passion. Thinkers from Plato to Hume, Kant, and Nietzsche debated the respective roles of intellect and affect. Modern psychology and neuroscience show cognition and emotion are deeply intertwined. The issue extends to ethics, aesthetics, and theories of human motivation.`,
    challenger: 'Romanticism',
    challenged: 'Rationalism',
    period: 'Modern',
    outcome: `Philosophers increasingly recognize that both reason and emotion play indispensable roles in human life. Moral psychology suggests emotions guide action and moral judgment, while reason provides structure and justification.`,
    significance: `The debate reshaped ethics and aesthetics, influencing literature, political philosophy, and psychology. It remains vital in understanding moral decision-making, AI ethics, and cultural attitudes toward rationality versus passion.`,
    externalLinks: [
      { title: 'Emotion (SEP)', url: 'https://plato.stanford.edu/entries/emotion/', type: 'encyclopedia' },
      { title: 'Practical Reason (SEP)', url: 'https://plato.stanford.edu/entries/practical-reason/', type: 'encyclopedia' },
      { title: 'Romanticism (Britannica)', url: 'https://www.britannica.com/art/Romanticism', type: 'encyclopedia' }
    ]
  },
  {
    id: 'science-vs-religion',
    name: 'Science vs Religion',
    description: `Science explains phenomena through empirical observation and testable theories, while religion appeals to revelation, sacred texts, and tradition. Historical conflicts include Galileo’s heliocentrism versus the Church, and Darwin’s evolution versus creationism. Yet not all encounters are antagonistic: many propose science and religion address different domains (facts vs values). Some theologians reinterpret religious doctrine in light of science, while others resist perceived secular encroachment. The debate also concerns ethics—e.g., biotechnology, climate change, and AI—where science provides means, and religion provides moral frameworks.`,
    challenger: 'Scientific Naturalism',
    challenged: 'Religious Orthodoxy',
    period: 'Modern to Contemporary',
    outcome: `There is no resolution; instead, multiple models coexist—conflict, independence, dialogue, and integration. Many religious groups accept scientific findings, while others oppose them. Philosophers explore complementarity or irreducible tension.`,
    significance: `Defines cultural worldviews and shapes education, public policy, and identity. It affects debates over evolution, climate action, and bioethics, influencing how societies reconcile tradition with modernity.`,
    externalLinks: [
      { title: 'Science & Religion (Oxford Bibliographies)', url: 'https://www.oxfordbibliographies.com/display/document/obo-9780195396577/obo-9780195396577-0147.xml', type: 'article' },
      { title: 'On the Intersection of Science and Religion (Pew Research Center)', url: 'https://www.pewresearch.org/science/2020/08/26/on-the-intersection-of-science-and-religion/', type: 'article' },
      { title: 'Science and Religion (University of Oxford)', url: 'https://www.theology.ox.ac.uk/science-and-religion', type: 'course' }
    ]
  },
  {
    id: 'relativism-vs-universalism',
    name: 'Relativism vs Universalism',
    description: `This ethical debate asks whether values, morals, and truths are culturally relative or universally valid. Relativists argue that moral systems are context-dependent, shaped by culture and history, and that no single framework is objectively correct. Universalists argue for timeless moral truths—human rights, justice, and rational norms—that transcend culture. Anthropologists often highlight cultural diversity, while philosophers argue for or against universal ethical principles. The debate underlies disputes about human rights, international law, and cultural practices.`,
    challenger: 'Cultural Relativism',
    challenged: 'Moral Universalism',
    period: 'Contemporary',
    outcome: `No consensus exists. Modern ethics often adopts pluralism, recognizing cultural variation but defending minimal universal standards (e.g., against genocide, slavery). Debates continue in human rights discourse and global ethics.`,
    significance: `Central to philosophy, anthropology, and politics. It shapes international relations, debates on tolerance, multiculturalism, and global justice. It remains vital in addressing cultural conflict and globalization.`,
    externalLinks: [
      { title: 'Relativism (SEP)', url: 'https://plato.stanford.edu/entries/relativism/', type: 'encyclopedia' },
      { title: 'Moral Relativism (IEP)', url: 'https://iep.utm.edu/moral-re/', type: 'encyclopedia' },
      { title: 'Cultural/Ethical Relativism (Britannica)', url: 'https://www.britannica.com/topic/ethical-relativism', type: 'encyclopedia' }
    ]
  },
  {
    id: 'egoism-vs-altruism',
    name: 'Egoism vs Altruism',
    description: `This debate addresses human motivation: are people fundamentally self-interested (egoism) or genuinely capable of caring for others (altruism)? Psychological egoists argue all actions ultimately serve self-interest, even seemingly generous ones. Ethical egoists maintain people ought to act in their own interest. Altruists insist that humans can and should act out of genuine concern for others. The debate shapes ethics, evolutionary biology, and political philosophy, and raises questions about morality’s foundation.`,
    challenger: 'Psychological Egoism',
    challenged: 'Ethical Altruism',
    period: 'Ancient to Modern',
    outcome: `Philosophers and scientists present mixed evidence: while self-interest motivates much behavior, altruism appears in parental care, cooperation, and empathy. The debate remains unresolved but nuanced theories integrate both.`,
    significance: `The issue influences moral philosophy, political theory, and social policy. It affects debates about charity, cooperation, capitalism, and human nature. It also shapes discussions in evolutionary psychology and ethics.`,
    externalLinks: [
      { title: 'Egoism (IEP)', url: 'https://iep.utm.edu/egoism/', type: 'encyclopedia' },
      { title: 'Altruism (Britannica)', url: 'https://www.britannica.com/topic/altruism-ethics', type: 'encyclopedia' },
      { title: 'Altruism & Group Selection (IEP)', url: 'https://iep.utm.edu/altruism-and-group-selection/', type: 'encyclopedia' }
    ]
  },
  {
    id: 'order-vs-chaos',
    name: 'Order vs Chaos',
    description: `Philosophical reflection on order and chaos addresses whether the universe is fundamentally structured or fundamentally unpredictable. Traditional metaphysics emphasized cosmic order—law, reason, logos—while modern existentialism and postmodernism explore the creative and destructive role of chaos. Literature, art, and science grapple with the tension between pattern and disorder, stability and creativity. Nietzsche, existentialists, and modern chaos theory highlight chaos as a condition of possibility for freedom and novelty, while classical philosophy emphasized order as essential for truth and morality.`,
    challenger: 'Existentialism',
    challenged: 'Traditional Metaphysics',
    period: 'Modern to Contemporary',
    outcome: `Existentialist and postmodern thought valorized chaos as creative, while science reveals chaotic dynamics within order (chaos theory). The tension remains unresolved but generative.`,
    significance: `This theme influences philosophy, art, literature, and cultural theory. It shapes how we conceive human freedom, creativity, and the cosmos, and resonates in science, politics, and psychology.`,
    externalLinks: [
      { title: 'Apollonian (Britannica)', url: 'https://www.britannica.com/art/Apollonian', type: 'encyclopedia' },
      { title: 'Chaos (ancient Greek religion) – Britannica', url: 'https://www.britannica.com/topic/Chaos-ancient-Greek-religion', type: 'encyclopedia' },
      { title: 'The Birth of Tragedy (Britannica)', url: 'https://www.britannica.com/topic/The-Birth-of-Tragedy', type: 'encyclopedia' }
    ]
  },
  {
    id: 'self-vs-other',
    name: 'Self vs Other',
    description: `This debate explores identity, subjectivity, and recognition of the Other. Classical individualism prioritizes autonomous selfhood, while phenomenology (Husserl, Levinas) and existentialism stress intersubjectivity and ethical responsibility toward others. Levinas argued that the face of the Other commands ethical response prior to reason. Feminist and postcolonial thinkers highlight how the “Other” is marginalized in systems of power. The debate extends into ethics, political theory, and cultural identity, shaping discourses on inclusion and difference.`,
    challenger: 'Phenomenology',
    challenged: 'Classical Individualism',
    period: 'Contemporary',
    outcome: `Shift toward intersubjectivity and relational conceptions of self. Modern thought recognizes identity as socially and ethically constituted, not purely autonomous.`,
    significance: `This debate reshapes ethics and social philosophy, influencing feminism, postcolonial studies, and multiculturalism. It emphasizes empathy, recognition, and justice in shaping human relations.`,
    externalLinks: [
      { title: 'Husserl: Phenomenology of Embodiment (IEP)', url: 'https://iep.utm.edu/husspemb/', type: 'encyclopedia' },
      { title: 'Emmanuel Levinas (Britannica)', url: 'https://www.britannica.com/biography/Emmanuel-Levinas', type: 'encyclopedia' },
      { title: 'Husserl’s Intersubjectivity (journal article PDF)', url: 'https://www.tandfonline.com/doi/pdf/10.1080/20797222.2019.1632023', type: 'article' }
    ]
  },
  {
    id: 'freedom-vs-security',
    name: 'Freedom vs Security',
    description: `This political debate considers how societies balance individual freedoms with collective security. Liberal traditions emphasize rights, liberties, and minimal interference, while authoritarian traditions stress stability, order, and safety. The tension intensifies during crises such as wars, terrorism, and pandemics, when governments impose restrictions in the name of security. Philosophers and political theorists debate whether trade-offs are justified, how much liberty can be limited, and what legitimizes authority.`,
    challenger: 'Authoritarianism',
    challenged: 'Liberal Freedom',
    period: 'Modern to Contemporary',
    outcome: `Most societies adopt pragmatic trade-offs, balancing civil liberties with public safety. Democracies enshrine rights while permitting emergency powers; authoritarian states tilt heavily toward security.`,
    significance: `Core issue in political philosophy and governance. It shapes constitutional law, surveillance policy, and civil rights, raising perennial questions about democracy and legitimacy.`,
    externalLinks: [
      { title: 'Civil Liberties & the Bill of Rights (Britannica)', url: 'https://www.britannica.com/topic/Constitution-of-the-United-States-of-America/Civil-liberties-and-the-Bill-of-Rights', type: 'encyclopedia' },
      { title: 'On Liberty (J. S. Mill, Project Gutenberg)', url: 'https://www.gutenberg.org/ebooks/34901', type: 'book' },
      { title: 'Constitutionalism – political & legal (Britannica)', url: 'https://www.britannica.com/topic/constitutionalism/Political-and-legal-constitutionalism-compared', type: 'encyclopedia' }
    ]
  },
  {
    id: 'skepticism-vs-certainty',
    name: 'Skepticism vs Certainty',
    description: `Skeptics argue that knowledge claims are doubtful, pointing to sensory error, disagreement, and regress of justification. From Pyrrho to Hume, skepticism challenged dogmatism. Certainty-seekers like Descartes aimed to establish indubitable foundations of knowledge. Kant, pragmatists, and modern epistemologists seek middle paths, acknowledging fallibility while defending reliable knowledge. The debate concerns epistemic justification, truth, and the limits of human cognition.`,
    challenger: 'Skepticism',
    challenged: 'Dogmatism',
    period: 'Ancient to Modern',
    outcome: `Philosophy developed critical approaches balancing doubt and justification. Modern epistemology accepts fallibilism—knowledge without absolute certainty—while rejecting radical skepticism.`,
    significance: `Key to epistemology, this debate shaped methods of science, rational inquiry, and philosophy itself. It continues in discussions of relativism, post-truth, and skepticism about AI or perception.`,
    externalLinks: [
      { title: 'Skepticism (SEP)', url: 'https://plato.stanford.edu/entries/skepticism/', type: 'encyclopedia' },
      { title: 'Skepticism (Britannica)', url: 'https://www.britannica.com/topic/skepticism', type: 'encyclopedia' },
      { title: 'Epistemology (Britannica) – overview', url: 'https://www.britannica.com/topic/epistemology', type: 'encyclopedia' }
    ]
  },
  {
    id: 'individual-vs-community',
    name: 'Individual vs Community',
    description: `This debate explores the priority of individual rights versus collective welfare. Individualists emphasize autonomy, personal freedom, and self-interest, while communitarians stress social obligations, solidarity, and common good. The tension underlies debates in political theory, ethics, and economics. Liberal democracies often try to balance both, while collectivist traditions prioritize the community over the individual. Issues include public health, taxation, cultural identity, and social justice.`,
    challenger: 'Communitarianism',
    challenged: 'Individualism',
    period: 'Modern to Contemporary',
    outcome: `Philosophy recognizes both individual rights and communal obligations. Models of balance differ by culture and politics, but neither principle alone suffices for just society.`,
    significance: `Shapes social and political thought, influencing public policy, law, and ethics. The debate remains active in questions about social welfare, cultural rights, and global responsibility.`,
    externalLinks: [
      { title: 'Communitarianism (SEP)', url: 'https://plato.stanford.edu/entries/communitarianism/', type: 'encyclopedia' },
      { title: 'Communitarianism (Britannica)', url: 'https://www.britannica.com/topic/communitarianism', type: 'encyclopedia' },
      { title: 'Liberalism (SEP)', url: 'https://plato.stanford.edu/entries/liberalism/', type: 'encyclopedia' }
    ]
  },
  {
    id: 'analytic-vs-continental',
    name: 'Analytic vs Continental Philosophy',
    description: `The 20th century saw philosophy divided into two broad traditions. Analytic philosophy, dominant in the Anglo-American world, emphasized logic, language, clarity, and scientific rigor (Russell, Frege, Wittgenstein). Continental philosophy, rooted in European traditions, engaged phenomenology, existentialism, hermeneutics, and post-structuralism (Heidegger, Sartre, Derrida). The division shaped methods, subject matter, and academic culture. While analytic philosophers critiqued continental obscurity, continentals critiqued analytic narrowness.`,
    challenger: 'Analytic Philosophy',
    challenged: 'Continental Philosophy',
    period: '20th century',
    outcome: `The traditions developed largely in parallel, with limited dialogue. Recent decades have seen increasing cross-fertilization, especially in ethics, political philosophy, and philosophy of mind.`,
    significance: `Defines the contemporary philosophical landscape. Understanding the split helps contextualize academic traditions, methods, and debates still active today.`,
    externalLinks: [
      { title: 'Analytic Philosophy (IEP)', url: 'https://iep.utm.edu/analytic-philosophy/', type: 'encyclopedia' },
      { title: 'Continental Philosophy (IEP)', url: 'https://iep.utm.edu/category/traditions/continental/', type: 'encyclopedia' },
      { title: 'Continental Philosophy (Britannica)', url: 'https://www.britannica.com/topic/continental-philosophy', type: 'encyclopedia' }
    ]
  },
  {
    id: 'humanism-vs-nihilism',
    name: 'Humanism vs Nihilism',
    description: `Humanism affirms human dignity, rationality, and capacity for meaning, often emphasizing ethics without divine authority. Nihilism, associated with Nietzsche, denies inherent meaning, value, or purpose in life. The clash reflects modern crises of faith, morality, and existentialism. Humanists argue that meaning can be created through human agency and solidarity. Nihilists warn of illusion and despair, pushing philosophy to confront life’s lack of ultimate justification.`,
    challenger: 'Nihilism',
    challenged: 'Humanism',
    period: 'Modern to Contemporary',
    outcome: `Existentialist philosophers like Sartre sought to move beyond nihilism by affirming self-created meaning and freedom. Humanism remains influential in secular ethics and education.`,
    significance: `This debate influences ethics, literature, and existential philosophy. It shapes discussions of meaning, despair, and human creativity in the absence of transcendent grounding.`,
    externalLinks: [
      { title: 'Humanism (Britannica)', url: 'https://www.britannica.com/topic/humanism', type: 'encyclopedia' },
      { title: 'Nihilism (IEP)', url: 'https://iep.utm.edu/nihilism/', type: 'encyclopedia' },
      { title: 'Nihilism (Britannica)', url: 'https://www.britannica.com/topic/nihilism', type: 'encyclopedia' }
    ]
  },
  {
    id: 'tradition-vs-progress',
    name: 'Tradition vs Progress',
    description: `This debate concerns whether societies should preserve traditions or embrace progress and innovation. Traditionalists value continuity, inherited wisdom, and stability, warning against radical change. Progressives emphasize reform, innovation, and adaptation to new circumstances. The debate spans politics, culture, religion, and philosophy, influencing revolutions, modernization, and cultural identity. It reflects the tension between conserving values and adapting to evolving challenges.`,
    challenger: 'Progressivism',
    challenged: 'Traditionalism',
    period: 'Modern to Contemporary',
    outcome: `Societies typically negotiate context-dependent balances, sometimes leaning on tradition for stability, sometimes pursuing progress to address injustice or adapt to change.`,
    significance: `Central to social and political debates worldwide. It shapes discussions on education, technology, cultural heritage, and political reform, reflecting the tension between preservation and innovation.`,
    externalLinks: [
      { title: 'Political Philosophy – overview (Britannica)', url: 'https://www.britannica.com/topic/political-philosophy', type: 'encyclopedia' },
      { title: 'Constitutionalism (Britannica)', url: 'https://www.britannica.com/topic/constitutionalism', type: 'encyclopedia' }
    ]
  }
];
