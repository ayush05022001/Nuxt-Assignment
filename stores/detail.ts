import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      flag:true,
      lastName:'',
      display:[],
      img:'',
    };
  },
  getters: {
    // Get the full name whenever we need it
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  },
  actions:{
    update(course_update){
      this.display=course_update;
    }
  }
})