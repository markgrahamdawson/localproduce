import postAPIService from '@/services/postAPIService'
import authAPIService from '@/services/authAPIService'

export default ({ app }, inject) => {
  const localProdAPI = {
    post: postAPIService,
    auth: authAPIService,
  }
  inject('localProdAPI', localProdAPI)
}