import { SettingsContext } from '@/components/settings/SettingsContext';
import { useContext } from 'react';

export const useSettingsContext = () => {
  return useContext(SettingsContext);
};
