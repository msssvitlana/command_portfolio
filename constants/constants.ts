export type TeamMember = {
  id: string;
  name: string;
  role: string;
  img: string;
  bio?: string;
  certificates?: string[];
  technologies?: string[];
  age?: number;
};

export const team: TeamMember[] = [
  {
    id: 'member1',
    name: 'Ім’я Розробника 1',
    role: 'Front-end Developer',
    img: '/images/about/default_avatar.jpg',
    age: 27,
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    certificates: ['React Pro Course', 'Advanced JavaScript'],
    bio: 'Обожнюю створювати сучасні, швидкі та красиві інтерфейси 🌟. Мені подобається, коли веб-додатки не лише працюють, а й тішать очі користувачів.',
  },
  {
    id: 'member2',
    name: 'Ім’я Розробника 2',
    role: 'Back-end Developer',
    img: '/images/about/default_avatar.jpg',
    age: 30,
    technologies: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL'],
    certificates: ['Node.js Expert', 'AWS Developer'],
    bio: 'Мені подобається створювати надійні сервери та масштабовані API 🚀. Люблю оптимізувати бекенд і робити системи стабільними та швидкими.',
  },
  {
    id: 'member3',
    name: 'Ім’я Розробника 3',
    role: 'Back-end Developer',
    img: '/images/about/default_avatar.jpg',
    age: 28,
    technologies: ['Python', 'Django', 'REST API', 'Docker'],
    certificates: ['Python Developer Certificate', 'Docker Fundamentals'],
    bio: 'Люблю, коли бекенд працює як швейцарський годинник ⏱️. Оптимізую бази даних і серверну логіку, щоб усе було стабільно та ефективно.',
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
