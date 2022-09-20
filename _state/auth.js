import { atom } from 'recoil';

export const authenticatedUserAtom = atom({
    key: 'authenticatedUser',
    default: JSON.parse(localStorage.getItem('user'))
});
