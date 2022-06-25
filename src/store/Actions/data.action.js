import NetworkOps from "../../services/NetworkOps";
import { ServiceEnum } from "../../services/Urls";
export const tablepost=(value) => async (dispatch, getstate) => {
    const res = await NetworkOps.post(`${ServiceEnum.post}`,value)
      dispatch({
        type: 'TABLEPOST',
        payload: res.data
      })
    return res
  }
  
  export const tableput=(value,id) => async (dispatch, getstate) => {
    const res = await NetworkOps.put(`${ServiceEnum.put}/${id}`,value)
      dispatch({
        type: 'TABLEPUT',
        payload: res.data
      })
    return res
  }

  export const tableget=() => async (dispatch, getstate) => {
    const res = await NetworkOps.get(`${ServiceEnum.get}`)
      dispatch({
        type: 'TABLEGET',
        payload: res
      })
    return res
  }

  export const tablegetbyid=(id) => async (dispatch, getstate) => {
    const res = await NetworkOps.get(`${ServiceEnum.get}/${id}`)
      dispatch({
        type: 'TABLEGETBYID',
        payload: res
      })
    return res
  }

  export const tabledelete=(id) => async (dispatch, getstate) => {
    const res = await NetworkOps.delete(`${ServiceEnum.delete}/${id}`)
      dispatch({
        type: 'TABLEDELETE',
        payload: res
      })
    return res
  }
 

 