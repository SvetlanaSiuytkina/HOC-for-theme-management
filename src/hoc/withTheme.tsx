import type { ComponentType } from 'react';
import type { ThemeColors, ThemeType } from '../types';

export interface WithThemeProps {
  theme: ThemeType;
  palette: Record<ThemeType, ThemeColors>;
  label: string;
  onClick?: () => void;
}

export function withTheme (
  WrappedComponent: ComponentType<WithThemeProps>
): ComponentType<WithThemeProps> {
  function WithThemeComponent (props: WithThemeProps) {
    return <WrappedComponent {...props} />
  }

  WithThemeComponent.displayName = `withTheme(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`

  return WithThemeComponent;
}