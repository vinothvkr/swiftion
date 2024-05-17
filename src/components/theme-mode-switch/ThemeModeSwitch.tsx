'use client';
import { useSettingsContext } from '@/hooks/useSettingsContext';
import IconButton from '@mui/material/IconButton';
import { IconMoon, IconSun } from '@tabler/icons-react';

export default function ThemeModeSwitch() {
  const { themeMode, onToggleMode } = useSettingsContext();
  return (
    <>
      <IconButton onClick={onToggleMode}>
        {(themeMode === 'dark' && <IconMoon />) || <IconSun />}
      </IconButton>
    </>
  );
}
