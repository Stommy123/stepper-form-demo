import { About, Career, Confirm, General } from './components';

export const emptyFormData = {
  firstName: '',
  lastName: '',
  isAdmin: false,
  favoritePet: '',
  dreamVacation: '',
  employer: '',
  jobTitle: '',
  employmentDuration: '',
};

export const schema = {
  general: {
    title: 'General Information',
    form: General,
    // disables the previous button
    previous: null,
    next: 'about',
  },
  about: {
    title: 'About Me',
    form: About,
    previous: 'general',
    next: 'career',
  },
  career: {
    title: 'Employment Details',
    form: Career,
    previous: 'about',
    next: 'confirm',
  },
  confirm: {
    title: 'Confirmation',
    form: Confirm,
    previous: 'about',
    // signifies submission
    next: null,
  },
};
