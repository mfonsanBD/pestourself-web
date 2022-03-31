const APP_KEY = 'PETSTOURSELF'

export function getStorageItem(key: string) {
  //no server/static não tem window
  if (typeof window === 'undefined') return

  const data = window.localStorage.getItem(`${APP_KEY}_${key}`)
  return JSON.parse(data!)
}
export function setStorageItem(key: string, value: string[]) {
  //no server/static não tem window
  if (typeof window === 'undefined') return

  const data = JSON.stringify(value)
  return window.localStorage.setItem(`${APP_KEY}_${key}`, data)
}
