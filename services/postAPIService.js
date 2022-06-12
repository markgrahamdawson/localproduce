import axios from 'axios'
import { axiosAuthModified } from "@/services/_base";
import authAPIService from "@/services/authAPIService";
import { EventEmitter } from "events";

class PostServiceAPI extends EventEmitter {
    constructor() {
      super();
      this.platform = 'LOCALPRODUCE';
      this.cancelToken = axios.CancelToken.source();
    }
  
    fetchSites() {
      let token = authAPIService.getLocalStorage(`auth._token.local`)
      if (token) {
        axiosAuthModified.defaults.headers.common.Authorization = `${token}`
      }
      axiosAuthModified.defaults.cancelToken = this.cancelToken.token
      return new Promise(resolve => {
        axiosAuthModified.get(`/site/`).then(response => {
          resolve(response);
        }).catch(error => {
          resolve(error.response);
        });
      });
    }

    fetchSite(payload) {
      let token = authAPIService.getLocalStorage(`auth._token.local`)
      if (token) {
        axiosAuthModified.defaults.headers.common.Authorization = `${token}`
      }
      axiosAuthModified.defaults.cancelToken = this.cancelToken.token
      if (payload.id) {
        const url = `/site_extended/${payload.id}/`
        return new Promise(resolve => {
          axiosAuthModified.get(url).then(response => {
            resolve(response);
          }).catch(error => {
            resolve(error.response);
          });
        });
      } else {
        return new Promise(reject => {
          reject();
        })
      }
    }

    fetchPosts() {
      let token = authAPIService.getLocalStorage(`auth._token.local`)
      if (token) {
        axiosAuthModified.defaults.headers.common.Authorization = `${token}`
      }
      axiosAuthModified.defaults.cancelToken = this.cancelToken.token
      return new Promise(resolve => {
        axiosAuthModified.get(`/post/`).then(response => {
          resolve(response);
        }).catch(error => {
          resolve(error.response);
        });
      });
    }

    fetchPost(payload) {
      let token = authAPIService.getLocalStorage(`auth._token.local`)
      if (token) {
        axiosAuthModified.defaults.headers.common.Authorization = `${token}`
      }
      axiosAuthModified.defaults.cancelToken = this.cancelToken.token
      if (payload.slug) {
        const url = `/posts/${payload.slug}/`
        return new Promise(resolve => {
          axiosAuthModified.get(url).then(response => {
            resolve(response);
          }).catch(error => {
            resolve(error.response);
          });
        });
      } else {
        return new Promise(reject => {
          reject();
        })
      }
    }

    fetchItem() {
      let token = authAPIService.getLocalStorage(`auth._token.local`)
      if (token) {
        axiosAuthModified.defaults.headers.common.Authorization = `${token}`
      }
      axiosAuthModified.defaults.cancelToken = this.cancelToken.token
      return new Promise(resolve => {
        axiosAuthModified.get(`/item/`).then(response => {
          resolve(response);
        }).catch(error => {
          resolve(error.response);
        });
      });
    }

    fetchItems(payload) {
      let token = authAPIService.getLocalStorage(`auth._token.local`)
      if (token) {
        axiosAuthModified.defaults.headers.common.Authorization = `${token}`
      }
      axiosAuthModified.defaults.cancelToken = this.cancelToken.token
      if (payload.slug) {
        const url = `/item/${payload.slug}/`
        return new Promise(resolve => {
          axiosAuthModified.get(url).then(response => {
            resolve(response);
          }).catch(error => {
            resolve(error.response);
          });
        });
      } else {
        return new Promise(reject => {
          reject();
        })
      }
    }
}

const postAPIService = new PostServiceAPI();

postAPIService.setMaxListeners(5);

export default postAPIService;
