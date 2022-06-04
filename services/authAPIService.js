import { axiosAuthModified, axiosModified } from "@/services/_base";
import { EventEmitter } from "events";

class AuthServiceAPI extends EventEmitter {
  constructor() {
    super();
    this.platform = 'LOCALPRODUCE';
  }

  fetchAccount(payload) {
    return new Promise(resolve => {
      axiosAuthModified.get(`/auth/account`, {
        params: {
          checkout_session_id: payload.session_id
        },
      }).then(response => {
        resolve(response);
      }).catch(error => {
        resolve(error.response);
      });
    });
  }

  updateAccount(payload) {
    const token = this.getLocalStorage(`auth._token.local`)
    if (token) {
      axiosAuthModified.defaults.headers.common.Authorization = `${token}`;
    }
    return new Promise(resolve => {
      axiosAuthModified.put(`/auth/accounts/${payload.uuid}`, payload).then(response => {
        resolve(response);
      }).catch(error => {
        resolve(error.response);
      });
    });
  }

  fetchAccounts() {
    return new Promise(resolve => {
      axiosAuthModified.get(`/auth/accounts`).then(response => {
        resolve(response);
      }).catch(error => {
        resolve(error.response);
      });
    });
  }

  activateAccount(payload) {
    return new Promise(resolve => {
      axiosAuthModified.patch(`/auth/account/activate`, payload).then(response => {
        resolve(response);
      }).catch(error => {
        resolve(error.response);
      });
    });
  }

  createUser(payload) {
    return new Promise(resolve => {
      axiosAuthModified.post(`/auth/portal-users/`, payload).then(response => {
        resolve(response);
      }).catch(error => {
        resolve(error.response);
      });
    });
  }

  sendInvite(payload) {
    return new Promise(resolve => {
      axiosAuthModified.post(`/portal/invitations/`, payload).then(response => {
        resolve(response);
      }).catch(error => {
        resolve(error.response);
      });
    });
  }

  createOrgUser(payload) {
    return new Promise(resolve => {
      axiosAuthModified.post(`/portal/employees/`, payload).then(response => {
        resolve(response);
      }).catch(error => {
        resolve(error.response);
      });
    });
  }

  fetchUser() {
    const token = this.getLocalStorage(`auth._token.local`)

    if (token) {
      axiosAuthModified.defaults.headers.common.Authorization = `${token}`;
    }

    return new Promise(resolve => {
      axiosAuthModified.get(`/auth/me/`).then(response => {
        resolve(response);
      }).catch(error => {
        resolve(error.response);
      });
    });
  }

  updateUser(payload) {
    const token = this.getLocalStorage(`auth._token.local`)

    if (token) {
      axiosAuthModified.defaults.headers.common.Authorization = `${token}`;
    }

    return new Promise(resolve => {
      axiosAuthModified.patch(`/auth/me/`, payload).then(response => {
        resolve(response);
      }).catch(error => {
        resolve(error.response);
      });
    });
  }

  deleteUser() {
    const token = this.getLocalStorage(`auth._token.local`)

    if (token) {
      axiosAuthModified.defaults.headers.common.Authorization = `${token}`;
    }

    return new Promise(resolve => {
      axiosAuthModified.delete(`/auth/me/`).then(response => {
        resolve(response);
      }).catch(error => {
        resolve(error.response);
      });
    });
  }

  resetPasswordRequest(payload) {
    // const token = this.getLocalStorage(`auth._token.local`)

    // if (token) {
    //   axiosAuthModified.defaults.headers.common.Authorization = `${token}`;
    // }

    return new Promise(resolve => {
      axiosAuthModified.post(`/auth/users/reset-password/`, payload).then(response => {
        resolve(response);
      }).catch(error => {
        resolve(error.response);
      });
    });
  }

  resetPortalPasswordRequest(payload) {
    return new Promise(resolve => {
      axiosAuthModified.post(`/auth/users/reset-portal-password/`, payload).then(response => {
        resolve(response);
      }).catch(error => {
        resolve(error.response);
      });
    });
  }

  resetPasswordRequestConfirm(payload) {
    const token = this.getLocalStorage(`auth._token.local`)

    if (token) {
      axiosAuthModified.defaults.headers.common.Authorization = `${token}`;
    }

    return new Promise(resolve => {
      axiosAuthModified.post(`/auth/users/reset-password/confirm/`, payload).then(response => {
        resolve(response);
      }).catch(error => {
        resolve(error.response);
      });
    });
  }

  confirmUserAccountValidation(payload) {
    return new Promise(resolve => {
      axiosAuthModified.patch(`/auth/users/confirm/sign-up/`, payload).then(response => {
        resolve(response);
      }).catch(error => {
        resolve(error.response);
      });
    });
  }

  confirmUserInviteValidation(payload) {
    return new Promise(resolve => {
      axiosAuthModified.post(`/auth/users/invite/`, payload).then(response => {
        resolve(response);
      }).catch(error => {
        resolve(error.response);
      });
    });
  }

  /**
   * JSON Web Token Auth API
   */

  /**
   * Method to obtain/create user's JSON web token via API: POST payload = { email: email, password: password }
   * @param: email
   * @param: password
   */
  createJWTAuthentication(payload) {
    return new Promise((resolve) => {
      axiosModified.post(`auth/users/jwt/create`, payload, { skipAuthRefresh: true }).then(response => {
        resolve(response);
      }).catch(error => {
        resolve(error.response);
      });
    });
  }

  /**
   * Utility methods for getting, setting and removing key and/or value pairs from local storage:
   */
  getLocalStorage(key) {
    if (process.browser) {
      return localStorage.getItem(key);
    }
  }

  setLocalStorage(key, value) {
    if (process.browser) {
     return localStorage.setItem(key, value);
    } 
    
  }

  removeCookies(key) {
    if (process.browser) {
      return sessionStorage.removeItem(key);
    }
  }

  removeLocalStorage(key) {
    if (process.browser) {
      return localStorage.removeItem(key);
    }
  }

  cleanseLocalStorage() {
    this.removeCookies(`auth._token.local`)
    this.removeCookies(`auth._token_expiration.local`)
    this.removeCookies(`auth.strategy`)
    this.removeCookies(`auth.redirect`)
    this.removeCookies(`auth._refresh_token.local`)
    this.removeCookies(`auth._refresh_token_expiration.local`)

    this.removeLocalStorage(`auth._token.local`)
    this.removeLocalStorage(`auth._token_expiration.local`)
    this.removeLocalStorage(`auth.strategy`)
    this.removeLocalStorage(`auth.redirect`)
    this.removeLocalStorage(`auth._refresh_token.local`)
    this.removeLocalStorage(`auth._refresh_token_expiration.local`)
  }
}

const authAPIService = new AuthServiceAPI();

authAPIService.setMaxListeners(5);

export default authAPIService;
