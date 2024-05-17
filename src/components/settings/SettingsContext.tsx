import { ReactNode, createContext, useCallback, useMemo } from 'react';
import useLocalStorage from '@/hooks/useLocalStorage';

type ThemeModeValue = 'light' | 'dark';

type SettingsValueProps = {
  themeMode: ThemeModeValue;
};

const defaultSettings: SettingsValueProps = {
  themeMode: 'light',
};

export type SettingsContextProps = SettingsValueProps & {
  onToggleMode: VoidFunction;
  onChangeMode: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const initialState: SettingsContextProps = {
  ...defaultSettings,
  onToggleMode: () => {},
  onChangeMode: () => {},
};

export const SettingsContext = createContext(initialState);

type SettingsProviderProps = {
  children: ReactNode;
};

export function SettingsProvider({ children }: SettingsProviderProps) {
  const [settings, setSettings] = useLocalStorage('settings', defaultSettings);

  const onToggleMode = useCallback(() => {
    const themeMode = settings.themeMode === 'light' ? 'dark' : 'light';
    setSettings({ ...settings, themeMode });
  }, [setSettings, settings]);

  const onChangeMode = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const themeMode = event.target.value;
      setSettings({ ...settings, themeMode });
    },
    [setSettings, settings]
  );

  const value = useMemo(
    () => ({
      ...settings,
      onToggleMode,
      onChangeMode,
    }),
    [settings, onToggleMode, onChangeMode]
  );

  return <SettingsContext.Provider value={value}>{children}</SettingsContext.Provider>;
}
