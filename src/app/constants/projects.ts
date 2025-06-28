export interface Project {
  title: string
  description: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    title: 'subcycle',
    description:
      'App for menstrual cycle and symptoms tracking, while predicting your next cycle events for better planning and health management',
    link: 'https://github.com/kremec/subcycle',
  },
  {
    title: 'subcinema',
    description:
      'Home theatre media player app, optimized for Android TV. It supports viewing video, audio and image media from local storage and network shares',
    link: 'https://github.com/kremec/subcinema',
  },
  {
    title: 'Website for PGD Škofljica',
    description:
      'The new website for a local volunteer fire department in Škofljica, Slovenia',
    link: 'https://github.com/kremec/PGDSkofljicaWeb',
  },
]
