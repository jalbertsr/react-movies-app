const tagCategories = [
  'pink',
  'red',
  'orange',
  'green',
  'cyan',
  'blue',
  'purple',
  'black',
  'yellow',
  'brown',
  'coral',
  'turquoise',
  'gold'
]
const genresFilter = [{
  text: 'Action',
  value: 'Action'
}, {
  text: 'Adventure',
  value: 'Adventure'
}, {
  text: 'Animation',
  value: 'Animation'
}, {
  text: 'Comedy',
  value: 'Comedy'
}, {
  text: 'Crime',
  value: 'Crime'
}, {
  text: 'Documentary',
  value: 'Documentary'
}, {
  text: 'Drama',
  value: 'Drama'
}, {
  text: 'Family',
  value: 'Family'
}, {
  text: 'Fantasy',
  value: 'Fantasy'
}, {
  text: 'History',
  value: 'History'
}, {
  text: 'Horror',
  value: 'Horror'
}, {
  text: 'Music',
  value: 'Music'
}, {
  text: 'Mystery',
  value: 'Mystery'
}, {
  text: 'Romance',
  value: 'Romance'
}, {
  text: 'Science Fiction',
  value: 'Science Fiction'
}, {
  text: 'TV Movie',
  value: 'TV Movie'
}, {
  text: 'Thriller',
  value: 'Thriller'
}, {
  text: 'War',
  value: 'War'
}, {
  text: 'Western',
  value: 'Western'
}]

const dictGenres = [
  {
    'id': 28,
    'name': 'Action'
  },
  {
    'id': 12,
    'name': 'Adventure'
  },
  {
    'id': 16,
    'name': 'Animation'
  },
  {
    'id': 35,
    'name': 'Comedy'
  },
  {
    'id': 80,
    'name': 'Crime'
  },
  {
    'id': 99,
    'name': 'Documentary'
  },
  {
    'id': 18,
    'name': 'Drama'
  },
  {
    'id': 10751,
    'name': 'Family'
  },
  {
    'id': 14,
    'name': 'Fantasy'
  },
  {
    'id': 36,
    'name': 'History'
  },
  {
    'id': 27,
    'name': 'Horror'
  },
  {
    'id': 10402,
    'name': 'Music'
  },
  {
    'id': 9648,
    'name': 'Mystery'
  },
  {
    'id': 10749,
    'name': 'Romance'
  },
  {
    'id': 878,
    'name': 'Science Fiction'
  },
  {
    'id': 10770,
    'name': 'TV Movie'
  },
  {
    'id': 53,
    'name': 'Thriller'
  },
  {
    'id': 10752,
    'name': 'War'
  },
  {
    'id': 37,
    'name': 'Western'
  }
]

export default {
  randomColor: () => tagCategories[Math.floor(Math.random() * (tagCategories.length + 1))],
  getGenres: (id) => dictGenres.reduce((acc, genre) => (id === genre.id) ? (acc += genre.name) : acc, ''),
  getFilter: () => genresFilter
}
