import {
  mdiAccount,
  mdiCogOutline,
  mdiEmail,
  mdiLogout,
  mdiThemeLightDark,
} from '@mdi/js'

export default [
  {
    isCurrentUser: true,
    menu: [
      {
        icon: mdiAccount,
        label: 'Meu Perfil',
        to: '/profile'
      },
      {
        icon: mdiCogOutline,
        label: 'Configuracões'
      },
      {
        icon: mdiEmail,
        label: 'Mensagens'
      },
      {
        isDivider: true
      },
      {
        icon: mdiLogout,
        label: 'Sair',
        isLogout: true
      }
    ]
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
