import { makeAutoObservable } from "mobx";

class NavActiveStore {
  navActive = false;

  constructor() {
    makeAutoObservable(this);
  }

  toggleActive() {
    this.navActive = !this.navActive;
  }
}

const navActiveStore = new NavActiveStore();
export default navActiveStore;