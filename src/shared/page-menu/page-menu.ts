export const OneMenu = [
  { title: 'My profile', pageName: 'my-profile', icon: 'home' },
  { title: 'Contact', pageName: 'my-contact', icon: 'contact' },
  { title: 'Logout', pageName: 'login-page', icon: 'exit' },
];

export const TwoMenu = [
  { title: 'Contact', pageName: 'my-contact', icon: 'contact' },
  { title: 'Logout', pageName: 'login-page', icon: 'exit' },
];

export const ThreeMenu = [
  { title: 'My profile', pageName: 'TabsPage', tabComponent: 'TabMyProfile', index: 0, icon: 'home' },
  { title: 'Contact', pageName: 'TabsPage', tabComponent: 'TabContact', index: 1, icon: 'contacts' },
  { title: 'Special', pageName: 'SpecialPage', icon: 'shuffle' },
  { title: 'Logout', pageName: 'login-page', icon: 'exit' },
];

export const TabsMenu = [
  {icon: 'home', title: 'My Profile', root: 'my-profile'},
  {icon: 'contact', title: 'Contact', root: 'my-contact'},
];