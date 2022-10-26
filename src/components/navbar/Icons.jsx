import { BiSearch } from 'react-icons/bi';
import { HiMenuAlt2, HiOutlineShoppingCart } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import styled from 'styled-components';

export const Cart = styled(HiOutlineShoppingCart)`
    color: var(--clr-white);
    width: 1.5em;
    height: 1.5em;
    @media screen and (max-width: 48rem) {
        width: 1.225em;
        height: 1.225em;
    }
`

export const Search = styled(BiSearch)`
    color: var(--clr-white);
    width: 1.5em;
    height: 1.5em;
    @media screen and (max-width: 48rem) {
        width: 1.425em;
        height: 1.425em;
    }
`

export const Bars = styled(HiMenuAlt2)`
  display: none;
  color: var(--clr-white);
  @media screen and (max-width: 48rem) {
    display: block;
    position: relative;
    top: 0;
    left: 10%;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const CloseIcon = styled(AiOutlineClose)`
    color: #fff;
`