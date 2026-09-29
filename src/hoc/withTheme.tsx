import type { ComponentType } from 'react';
import type { ThemeType } from '../types';

export interface InjectedThemeProps {
  theme: ThemeType;
}

export function withTheme<P extends InjectedThemeProps> (
  WrappedComponent: ComponentType<P>
): ComponentType<P> {
  function WithThemeComponent (props: P) {
    return <WrappedComponent {...props} />
  }

  WithThemeComponent.displayName = `withTheme(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`

  return WithThemeComponent;
}