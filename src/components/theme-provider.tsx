import { useEffect, useState, type ReactNode } from 'react'

import {
  THEME_STORAGE_KEY,
  ThemeProviderContext,
  type ResolvedTheme,
  type Theme,
} from '@/lib/theme'

function getSystemTheme(): ResolvedTheme {
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

function getStoredTheme(fallback: Theme): Theme {
  const stored = localStorage.getItem(THEME_STORAGE_KEY)
  return stored === 'light' || stored === 'dark' || stored === 'system'
    ? stored
    : fallback
}

export function ThemeProvider({
  children,
  defaultTheme = 'system',
}: {
  children: ReactNode
  defaultTheme?: Theme
}) {
  const [theme, setThemeState] = useState<Theme>(() =>
    getStoredTheme(defaultTheme),
  )
  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>(() =>
    theme === 'system' ? getSystemTheme() : theme,
  )

  // Apply the resolved theme to <html> and keep it in sync with OS changes
  // while the preference is "system".
  useEffect(() => {
    const root = document.documentElement

    const apply = () => {
      const resolved = theme === 'system' ? getSystemTheme() : theme
      root.classList.toggle('dark', resolved === 'dark')
      root.style.colorScheme = resolved
      setResolvedTheme(resolved)
    }

    apply()

    if (theme !== 'system') return
    const media = window.matchMedia('(prefers-color-scheme: dark)')
    media.addEventListener('change', apply)
    return () => media.removeEventListener('change', apply)
  }, [theme])

  const setTheme = (next: Theme) => {
    localStorage.setItem(THEME_STORAGE_KEY, next)
    setThemeState(next)
  }

  return (
    <ThemeProviderContext.Provider value={{ theme, resolvedTheme, setTheme }}>
      {children}
    </ThemeProviderContext.Provider>
  )
}
