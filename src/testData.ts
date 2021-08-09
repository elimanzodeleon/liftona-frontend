export const dummyWorkouts = [
  {
    id: 1,
    user: 'asdf',
    title: 'arm blaster',
    description: 'keep rest times under 30 seconds. focus on form.',
    exercises: [
      {
        name: 'alternating dumbbell curls',
        sets: 4,
        reps: 12,
        unilateral: true,
      },
      {
        name: 'skull crushers',
        sets: 4,
        reps: 12,
        unilateral: false,
      },
      {
        name: 'barbell curls',
        sets: 4,
        reps: 15,
        unilateral: false,
      },
      {
        name: 'ez bar cable pushdowns',
        sets: 4,
        reps: 12,
        unilateral: false,
      },
      {
        name: 'rope cable pushdowns',
        sets: 4,
        reps: 12,
        unilateral: false,
      },
      {
        name: 'static curls',
        sets: 4,
        reps: 12,
        unilateral: false,
      },
    ],
    createdAt: new Date().toDateString(),
  },
  {
    id: 2,
    user: 'noah',
    title: 'legs v1',
    description:
      'keep rest times under one min. stay hydrated! Slow on way down, explode when pushing.',
    exercises: [
      {
        name: 'barbell squats',
        sets: 5,
        reps: 10,
        unilateral: false,
      },
      {
        name: 'hungarian split squat',
        sets: 4,
        reps: 12,
        unilateral: true,
      },
      {
        name: 'leg press',
        sets: 5,
        reps: 12,
        unilateral: false,
      },
      {
        name: 'barbell lunges',
        sets: 4,
        reps: 12,
        unilateral: true,
      },
      {
        name: 'leg ext',
        sets: 4,
        reps: 15,
        unilateral: false,
      },
      {
        name: 'romanian deadlifts',
        sets: 4,
        reps: 12,
        unilateral: false,
      },
    ],
    createdAt: new Date().toDateString(),
  },
  {
    id: 3,
    user: 'noah',
    title: 'shoulders',
    description: '',
    exercises: [
      {
        name: 'dumbell military press',
        sets: 5,
        reps: 10,
        unilateral: false,
      },
      {
        name: 'alteranting lateral raise',
        sets: 4,
        reps: 12,
        unilateral: true,
      },
      {
        name: 'alternating dumbell front raise',
        sets: 4,
        reps: 12,
        unilateral: true,
      },
      {
        name: 'upright rows',
        sets: 4,
        reps: 15,
        unilateral: false,
      },
      {
        name: 'rear delt flys',
        sets: 5,
        reps: 15,
        unilateral: false,
      },
      {
        name: 'hammer military press',
        sets: 4,
        reps: 12,
        unilateral: false,
      },
    ],
    createdAt: new Date().toDateString(),
  },
];

export const users = [
  {
    id: 1,
    username: 'eli',
    name: 'eli st paul',
  },
  {
    id: 2,
    username: 'lionlizz',
    name: 'elizabeth manzo',
  },
  {
    id: 3,
    username: 'arnold',
    name: 'arnold schwarzenegger',
  },
  {
    id: 4,
    username: 'amanda',
    name: 'amanda bynes',
  },
];
