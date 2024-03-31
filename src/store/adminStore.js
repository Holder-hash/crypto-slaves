import { makeAutoObservable } from "mobx";

class AdminStore {
  isAdmin = false;

  constructor() {
    makeAutoObservable(this);
  }

  setIsAmin() {
    this.isAdmin = true;
  }
  
  unsetIsAmin() {
    this.isAdmin = false;
  }
}

const adminStore = new AdminStore();
export default adminStore;