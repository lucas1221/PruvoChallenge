import {
  mdiAccountCircle,
  mdiMonitor,
  mdiTable} from '@mdi/js'

export default [
  {
    to: '/dashboard',
    icon: mdiMonitor,
    label: 'Início'
  },
  {
    to: '/tables',
    label: 'Pessoas',
    icon: mdiTable
  },
  {
    to: '/profile',
    label: 'Perfil',
    icon: mdiAccountCircle
  },
]
