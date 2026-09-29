import { useState } from 'react';
import ThemedButtonWithTheme from './components/ThemedButtonWithTheme';
import type { ThemeType, ThemePalette } from './types';

const palette: ThemePalette = {
  light: {
    background: '#ffffff',
    text: '#000000',
    buttonBackground: '#f0f0f0',
    buttonText: '#000000',
    buttonBorder: '#cccccc',
  },
  dark: {
    background: '#222222',
    text: '#ffffff',
    buttonBackground: '#444444',
    buttonText: '#ffffff',
    buttonBorder: '#666666',
  },
};

function App() {
  const [theme, setTheme] = useState<ThemeType>('light');

  function toggleTheme() {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  }

  const colors = palette[theme];

  return (
    <div
      style={{
        backgroundColor: colors.background,
        color: colors.text,
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '20px',
        transition: 'all 0.3s ease',
      }}
    >
      <ThemedButtonWithTheme
        theme={theme}
        palette={palette}
        label={`Переключить тему (сейчас: ${theme})`}
        onClick={toggleTheme}
      />

      <ThemedButtonWithTheme
        theme={theme}
        palette={palette}
        label="Кнопка с темой"
        onClick={() => alert('Кнопка нажата!')}
      />
    </div>
  );
}

export default App;