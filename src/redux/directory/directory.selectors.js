import {createSelector} from 'reselect';
import { selectCartItems } from '../cart/cart.selectors';



const selectDirectory = state => state.directory;

export const selectDirectorySection = createSelector(
[selectDirectory],
directory => directory.sections


);