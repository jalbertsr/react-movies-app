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

export default {
  randomColor: () => tagCategories[Math.floor(Math.random() * (tagCategories.length + 1))]
}
