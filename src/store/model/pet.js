import { getPets } from '@/api/pet'
import {getPetsByUsername} from "../../api/pet";
import {getPetsById} from "../../api/pet";
import {addPet} from "../../api/pet";
import {updatePet} from "../../api/pet";
import {getCategorys} from "../../api/pet";

const pet = {
  actions: {
    // 登录
    GetPets({commit}) {
      return new Promise((resolve, reject) => {
        getPets().then(response => {
          commit('CHANGE')
          console.log('resopnsee', response);
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    GetCategory({commit}) {
      return new Promise((resolve, reject) => {
        getCategorys().then(response => {
          commit('CHANGE')
          console.log('resopnsee', response);
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },

    GetPetsByUser({commit},username) {
      return new Promise((resolve, reject) => {
        getPetsByUsername(username).then(response => {
          commit('CHANGE')
          console.log('resopnsee', response);
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },

    GetPetById({commit},id) {
      return new Promise((resolve, reject) => {
        getPetsById(id).then(response => {
          commit('CHANGE')
          console.log('resopnsee', response);
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },

    UpdatePet({commit},petInfo) {
      return new Promise((resolve, reject) => {
        petInfo.full=petInfo.toString();
        petInfo.health=petInfo.health.toString();
        petInfo.mood=petInfo.mood.toString();
        updatePet(petInfo).then(response => {
          commit('CHANGE')
          console.log('resopnsee', response);
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },

    AddPet({commit},petForm) {
      return new Promise((resolve, reject) => {
        addPet(petForm).then(response => {
          commit('CHANGE')
          console.log('resopnsee', response);
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
  }
}
export default pet
