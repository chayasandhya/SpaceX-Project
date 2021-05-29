import { PAGE } from "../../Constants";

export function dashboardPage(item) {
  return {
    type: PAGE,
    payload: item.toUpperCase(),
  };
}
