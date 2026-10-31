export const studentInfo = {
  primaryName: 'Shakeel Ahmed',
  degree: 'BS English — Applied Linguistics',
  institution: 'The Pioneers School and College, Jamshoro',
  internshipPlacement: 'The Pioneers School and College, Jamshoro',
  supervisor: 'Muhammad Ismail',
  internshipPeriod: 'September 4 - October 14, 2026',
  requiredHours: { min: 60, max: 80 },
  completedHours: 67,
  durationDays: 14,
  email: 'shakeelakhtiar@gmail.com',
  whatsapp: '+92 341 8636340',
  whatsappLink: 'https://wa.me/923418636340',
  photoPath: '/images/student-photo.jpg',
};

export const progressData = {
  minRequired: 60,
  maxPermitted: 80,
  completed: 67,
  percentageOfMax: 83.75,
  status: 'Minimum requirement met; within the stated 60–80-hour range.',
  hoursAboveMinimum: 7,
  hoursRemainingToMax: 13,
  ariaLabel: '67 of 80 internship hours',
  note: 'The 60-hour minimum has been met.',
};

export const navSections = [
  { id: 'overview', label: 'Overview', icon: 'LayoutDashboard' },
  { id: 'profile', label: 'Student Profile', icon: 'User' },
  { id: 'placement', label: 'Internship Placement', icon: 'Building2' },
  { id: 'objectives', label: 'Learning Objectives', icon: 'Target' },
  { id: 'activities', label: 'Teaching Activities', icon: 'BookOpen' },
  { id: 'journal', label: 'Reflective Journal', icon: 'PenLine' },
  { id: 'logbook', label: 'Daily Logbook', icon: 'FileText' },
  { id: 'weekly-log', label: 'Weekly Log', icon: 'CalendarDays' },
  { id: 'evidence', label: 'Evidence & Documents', icon: 'FolderOpen' },
  { id: 'recognition', label: 'Supervisor Recognition', icon: 'Award' },
  { id: 'reflection', label: 'Final Reflection', icon: 'Sparkles' },
  { id: 'contact', label: 'Contact', icon: 'Mail' },
];

export const learningObjectives = [
  'Explaining English grammar clearly.',
  'Adapting explanations to different levels of prior knowledge.',
  'Encouraging classroom participation.',
  'Using questions and written exercises to check understanding.',
  'Reviewing previous topics regularly.',
  'Identifying and correcting common errors.',
  'Giving constructive feedback.',
  'Developing reflective teaching practice.',
];

export const teachingActivities = [
  {
    title: 'Parts of Speech and Their Functions',
    description:
      'Introduced the basic parts of speech and explained their functions through simple examples, helping students identify grammatical forms in sentences.',
  },
  {
    title: 'Grammar Explanations Using Examples',
    description:
      'Used definitions, examples, and sentence-based exercises to explain grammatical rules, connecting them with practical application.',
  },
  {
    title: 'Sentence-Based Exercises and Revision',
    description:
      'Prepared short exercises allowing students to apply each concept, identify common errors, and correct them through guided practice.',
  },
  {
    title: 'Present, Past, and Future Tenses',
    description:
      'Explained how tenses express the time of an action or situation, using simple examples to distinguish present, past, and future meanings.',
  },
  {
    title: 'Simple and Continuous Tense Forms',
    description:
      "Taught simple and continuous tense forms through examples related to students' daily lives, with sentence-completion and transformation exercises.",
  },
  {
    title: 'Active and Passive Voice Transformations',
    description:
      'Explained how the focus of a sentence changes when transformed from active to passive voice, guiding students through transformation exercises.',
  },
  {
    title: 'Oral Questioning and Written Practice',
    description:
      'Used oral questioning and written practice throughout lessons to check understanding and give students opportunities to use grammar actively.',
  },
  {
    title: 'Classroom Participation and Constructive Feedback',
    description:
      'Encouraged classroom participation, involved quieter students, and provided constructive feedback while correcting errors during guided exercises.',
  },
];

export const teachingContexts = ['Grade 9', 'Matriculation', 'First Year'];

export type JournalEntry = {
  week: string;
  date: string;
  learned: string;
  nextWeek: string;
};

export const journalEntries: JournalEntry[] = [
  {
    week: 'Week 01',
    date: '09-09-2026',
    learned:
      'During this week, I became familiar with the teaching environment and began working with students from Grade 9, Matriculation, and First Year. I started teaching English grammar by introducing the basic parts of speech and explaining their functions through simple examples. I encouraged students to answer questions and identify grammatical forms in sentences. This experience helped me understand that students have different levels of prior knowledge, so a teacher needs to explain concepts clearly, use familiar examples, and check understanding during the lesson. I also learned that a supportive classroom atmosphere can help students participate more confidently.',
    nextWeek:
      "Next week, I will continue teaching the parts of speech one topic at a time and provide more examples and short exercises. I will ask questions throughout the lesson to check students' understanding rather than waiting until the end. I will also try to involve quieter students, give clear instructions, and use brief revision activities to help students remember the concepts.",
  },
  {
    week: 'Week 02',
    date: '25-09-2026',
    learned:
      'During this week, I continued teaching parts of speech, including pronouns, verbs, adjectives, adverbs, prepositions, and conjunctions, using definitions, examples, and sentence-based exercises. I reviewed previous lessons and invited students to ask questions about topics they found difficult. I also used oral questioning and written practice to check their understanding. This experience helped me recognise the importance of regular revision and connecting grammatical rules with practical examples. I learned that students benefit when a lesson moves from a simple explanation to guided practice and then to independent examples.',
    nextWeek:
      'Next week, I will continue reviewing the parts of speech before moving further into sentence structure and tenses. I will prepare short exercises that allow students to apply each concept, identify common errors, and correct them. I will also check understanding more frequently and adjust my explanations when students appear confused.',
  },
  {
    week: 'Week 03',
    date: '02-10-2026',
    learned:
      'During this week, I reviewed the grammar topics covered earlier and began introducing tenses. I explained that tenses help express the time of an action or situation, then used simple examples to distinguish present, past, and future meanings. I guided students in forming sentences and identifying tense patterns. I learned that tenses can be challenging because students may memorise structures without fully understanding when to use them. Clear examples, comparisons, and repeated practice are therefore important for helping learners understand both form and meaning.',
    nextWeek:
      "Next week, I will continue teaching the different tense forms, including simple and continuous forms, through examples related to students' daily lives. I will use short oral questions, sentence-completion tasks, and transformation exercises to assess understanding. I will also revisit difficult points before introducing new material so students can build their knowledge step by step.",
  },
  {
    week: 'Week 04',
    date: '09-10-2026',
    learned:
      'During this week, I continued teaching tenses and helped students practise forming sentences in different time frames. I explained tense patterns through examples and corrected errors during guided exercises. I observed that students need opportunities to use grammar actively, not only copy rules from the board. This week helped me reflect on the value of patient explanation, repetition, and constructive feedback. It also reminded me to consider the different learning needs of Grade 9, Matriculation, and First Year students when choosing examples and the level of difficulty.',
    nextWeek:
      "Next week, I will review the tense forms already taught and give students mixed exercises so they can distinguish between them. I will identify recurring errors and explain why they occur. I will also begin or continue active and passive voice, depending on students' readiness, using clear sentence pairs and guided transformations.",
  },
  {
    week: 'Week 05',
    date: '14-10-2026',
    learned:
      'During this week, I continued grammar instruction and worked on active and passive voice. I explained how the focus of a sentence changes when it is transformed from active to passive voice, and I used examples to show the relationship between the subject, verb, and object. Students practised transforming suitable sentences with guidance. This lesson helped me understand that students need to recognise sentence structure before they can change it accurately. I also learned that checking each step and discussing mistakes can make a difficult grammar topic easier to understand.',
    nextWeek:
      'Next week, I will revise the rules of active and passive voice and provide additional transformation exercises. I will ask students to explain the changes they make, not just give the final answer. I will also continue reviewing tenses where necessary, since correct tense knowledge supports accurate voice transformation.',
  },
];

export const documents = [
  {
    title: 'Daily Internship Logbook',
    description: "Download the student's original daily internship log.",
    buttonLabel: 'Download Daily Log (PDF)',
    filePath: '/documents/daily-log.pdf',
  },
  {
    title: 'Weekly Reflective Log',
    description: "Download the student's original weekly reflection document.",
    buttonLabel: 'Download Weekly Log (PDF)',
    filePath: '/documents/weekly-log.pdf',
  },
];

export const googleDriveLink =
  'https://drive.google.com/file/d/11Fg4GcnAsGnlpKXNJYknvWgMbZSUEPQz/view?usp=drive_link';

export const recognitionData = {
  heading: 'Internship Recognition',
  recipientName: 'Shakeel Ahmed',
  body: 'In recognition of your dedication, hard work, and valuable contribution during your internship at The Pioneer School and College, Jamshoro Campus. Your professionalism, enthusiasm, and willingness to learn are sincerely appreciated. We thank you for your valuable efforts and wish you every success in your future academic and professional journey.',
  internshipPeriod: 'September 1–30, 2026',
  dateOfIssue: 'October 14, 2026',
  supervisor: 'Muhammad Ismail',
};

export const finalReflectionThemes = [
  {
    title: 'Clear Grammar Instruction',
    text:
      'The reflections consistently emphasise the importance of explaining grammar clearly, using familiar examples, and checking understanding during the lesson rather than only at the end.',
  },
  {
    title: 'Classroom Participation',
    text:
      'Encouraging students to answer questions, involving quieter students, and creating a supportive atmosphere were recurring priorities throughout the internship.',
  },
  {
    title: 'Regular Revision',
    text:
      'Reviewing previous topics before introducing new material was a consistent practice, helping students retain concepts and build knowledge step by step.',
  },
  {
    title: 'Guided and Independent Practice',
    text:
      'Lessons moved from simple explanation to guided practice and then to independent examples, giving students opportunities to use grammar actively rather than only copying rules.',
  },
  {
    title: 'Parts of Speech and Tenses',
    text:
      "The teaching sequence progressed from parts of speech to present, past, and future tenses, including simple and continuous forms, with examples connected to students' daily lives.",
  },
  {
    title: 'Active and Passive Voice',
    text:
      'Active and passive voice transformations were introduced with clear sentence pairs, helping students recognise how sentence focus changes and how subject, verb, and object relate.',
  },
  {
    title: 'Constructive Feedback',
    text:
      'Correcting errors during guided exercises and discussing mistakes step by step provided students with constructive feedback that supported their understanding.',
  },
  {
    title: 'Adapting to Different Learning Needs',
    text:
      'The reflections show awareness that Grade 9, Matriculation, and First Year students have different levels of prior knowledge, requiring adjusted examples and difficulty levels.',
  },
];
