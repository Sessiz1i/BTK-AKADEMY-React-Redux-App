// TODO - REDUX COUNTER İÇİN ACTION TANIMLAMALARI
import * as actionTypes from './actionTypes'

export const increaseCounter = (payload) => ({
    type: actionTypes.INCREASE_COUNTER,
    payload: payload
})

export const decreaseCounter = (payload) => ({
    type: actionTypes.DECREASE_COUNTER,
    payload: payload
})

export const increaseByTwoCounter = () => ({
    type: actionTypes.INCREASE_BY_TWO_COUNTER,
    payload: 2
})