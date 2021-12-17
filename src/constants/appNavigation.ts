export const appNavigation: appNavigationType = [
  { id: 1, title: 'registration', link: '/registration' },
  { id: 2, title: 'login', link: '/login' },
  { id: 3, title: 'profile', link: '/profile' },
  { id: 4, title: 'confirmPassword', link: '/confirmPassword' },
  { id: 5, title: 'popup', link: '/popup' },
  { id: 6, title: 'createNewPassword', link: '/createNewPassword' },
];

type appNavigationType = { id: number; title: string; link: string }[];
