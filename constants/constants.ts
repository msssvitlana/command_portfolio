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

type NavItem = {
  label: string;
  name: string;
  href: string;
};

export const navItems: NavItem[] = [
  {
    label: 'Main',
    name: 'Головна',
    href: '/',
  },
  {
    label: 'About',
    name: 'Про нас',
    href: '/about',
  },
  {
    label: 'Projects',
    name: 'Проекти',
    href: '/projects',
  },
  {
    label: 'Services',
    name: 'Послуги',
    href: '/services',
  },
  {
    label: 'Blog',
    name: 'Блог',
    href: '/blog',
  },
  {
    label: 'Contacts',
    name: 'Контакти',
    href: '/contact',
  },
];
