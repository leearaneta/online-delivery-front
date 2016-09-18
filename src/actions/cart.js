export const ADD_ITEM = 'ADD_ITEM'
export const CHANGE_QUANTITY = 'CHANGE_QUANTITY'
export const REMOVE_ITEM = 'REMOVE_ITEM'

export function addItem(item) {
  return {
    type: ADD_ITEM,
    payload: item
  }
}

export function changeQuantity({item, quantity}) {
  return {
    type: CHANGE_QUANTITY,
    item,
    quantity
  }
}

export function removeItem(item) {
  return {
    type: REMOVE_ITEM,
    payload: item
  }
}
