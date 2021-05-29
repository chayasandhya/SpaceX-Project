import { MENU } from "../Constants";

export function openMenu() {
  return {
    type: MENU,
    payload: true,
  };
}

export function closeMenu() {
  return {
    type: MENU,
    payload: false,
  };
}
