export const OneMenu = [
  { title: 'My profile', pageName: 'MyProfilePage', icon: 'home' },
  { title: 'Contact', pageName: 'ContactPage', icon: 'contact' },
  { title: 'Logout', pageName: 'LoginPage', icon: 'exit' },
];

export const TwoMenu = [
  { title: 'Contact', pageName: 'ContactPage', icon: 'contact' },
  { title: 'Logout', pageName: 'LoginPage', icon: 'exit' },
];

export const ThreeMenu = [
  { title: 'My profile', pageName: 'TabsPage', tabComponent: 'TabMyProfile', index: 0, icon: 'home' },
  { title: 'Contact', pageName: 'TabsPage', tabComponent: 'TabContact', index: 1, icon: 'contacts' },
  { title: 'Special', pageName: 'SpecialPage', icon: 'shuffle' },
  { title: 'Logout', pageName: 'LoginPage', icon: 'exit' },
];

export const TabsMenu = [
  {icon: 'home', title: 'My Profile', root: 'MyProfilePage'},
  {icon: 'contact', title: 'Contact', root: 'ContactPage'},
];