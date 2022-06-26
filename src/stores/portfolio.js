import { defineStore } from 'pinia'

export const usePortfolioStore = defineStore('portfolio', {
  state: () => ({
    cards: [
      {
        img: 'https://i.imgur.com/6Py5FqX.png',
        title: 'GLSL Shaders',
        desc: 'An exploration of various 3D visual effects through GLSL shaders.',
        link: '/link/to/article',
      },
      {
        img: 'https://i.imgur.com/XysBf4s.png',
        title: '3D Scene with Shaders',
        desc: 'Achieved with OpenGL, a 3D scene containing some objects, animation, and lighting.',
        link: '/link/to/article',
      },
      {
        img: 'https://i.imgur.com/qyP69yO.png',
        title: 'This website',
        desc: "I made this website you're viewing, here's how.",
        link: '/link/to/article',
      },
    ],
  }),

  getters: {},

  actions: {},
})
