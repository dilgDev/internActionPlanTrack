import { ThemeProviderContext } from "@/hooks/useTheme";
import { ThemeProviderProps, Theme} from "@/interfaces/theme";
import { useState, useEffect } from "react";
export function ThemeProvider({
    children,
    defaultTheme = "light",
    storageKey = "vite-ui-theme",
    ...props
  }: ThemeProviderProps) {
    const [theme, setTheme] = useState<Theme>(
      () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
    )
   
    useEffect(() => {
      const root = window.document.documentElement
   
      root.classList.remove("light", "dark")
   
      root.classList.add(theme)
    }, [theme])
   
    const value = {
      theme,
      setTheme: (theme: Theme) => {
        localStorage.setItem(storageKey, theme)
        setTheme(theme)
      },
    }
   
    return (
      <ThemeProviderContext.Provider {...props} value={value}>
        {children}
      </ThemeProviderContext.Provider>
    )
  }