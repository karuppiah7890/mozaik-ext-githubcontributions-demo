import { ThemeManager } from '@mozaik/ui';

import { nightBlueTheme, snowTheme, solarizedDarkTheme } from '@mozaik/themes';

ThemeManager.add(nightBlueTheme);
ThemeManager.add(snowTheme);
ThemeManager.add(solarizedDarkTheme);

ThemeManager.defaultTheme = solarizedDarkTheme.name;
