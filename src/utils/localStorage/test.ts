import { getStorageItem, setStorageItem } from '.'

describe('getStorageItem()', () => {
  beforeEach(() => {
    window.localStorage.clear()
  })
  it('should return the item from localStorage', () => {
    window.localStorage.setItem(
      'PETSTOURSELF_cartItems',
      JSON.stringify(['1', '2'])
    )

    expect(getStorageItem('cartItems')).toStrictEqual(['1', '2'])
  })
})

describe('setStorageItem()', () => {
  beforeEach(() => {
    window.localStorage.clear()
  })
  it('should add the item from localStorage', () => {
    setStorageItem('cartItems', ['1', '2'])

    expect(window.localStorage.getItem('PETSTOURSELF_cartItems')).toStrictEqual(
      JSON.stringify(['1', '2'])
    )
  })
})
