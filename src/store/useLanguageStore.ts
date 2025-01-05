import { create } from 'zustand'

interface LanguageStore {
  lang: 'ru' | 'en'
  setLang: (lang: 'ru' | 'en') => void
}

const useLanguageStore = create<LanguageStore>((set) => ({
  lang: 'ru',
  setLang: (lang) => set({ lang }),
}))

export default useLanguageStore
