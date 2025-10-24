export type TeamMember = {
  id: string;
  name: string;
  role: string;
  img: string;
  bio: string;
};

export const team: TeamMember[] = [
  {
    id: 'member1',
    name: 'Ім’я Розробника 1',
    role: 'Front-end Developer',
    img: '/images/about/default_avatar.jpg',
    bio: 'Тут короткий опис розробника. Пізніше можна додати справжнє bio.',
  },
  {
    id: 'member2',
    name: 'Ім’я Розробника 2',
    role: 'Back-end Developer',
    img: '/images/about/default_avatar.jpg',
    bio: 'Тут короткий опис розробника. Пізніше можна додати справжнє bio.',
  },
  {
    id: 'member3',
    name: 'Ім’я Розробника 3',
    role: 'Back-end Developer',
    img: '/images/about/default_avatar.jpg',
    bio: 'Тут короткий опис розробника. Пізніше можна додати справжнє bio.',
  },
];
