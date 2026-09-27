import type { WithThemeProps } from '../hoc/withTheme';

function ThemeButton ({ theme, palette, label, onClick }: WithThemeProps) {
  const colors = palette[theme];

  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: colors.buttonBackground,
        color: colors.buttonText,
        border: `2px solid ${colors.buttonBorder}`,
        padding: '10px 20px',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px',
      }}
    >
      {label}
    </button>
  );
}

export default ThemeButton;