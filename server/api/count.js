
let counter = 0

export default (req, res) => {
  counter++
  return JSON.stringify(counter)
}