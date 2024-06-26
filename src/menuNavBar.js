import {
  mdiLogout,
  mdiThemeLightDark,
} from '@mdi/js'

export default [
  {
    isCurrentUser: true,
  },
  {
    icon: mdiThemeLightDark,
    label: 'Light/Dark',
    isDesktopNoLabel: true,
    isToggleLightDark: true
  },
  {
    icon: mdiLogout,
    label: 'Sair',
    isDesktopNoLabel: true,
    isLogout: true
  }
]
