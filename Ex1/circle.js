const circumference = (radius) => {
  return 2 * Math.PI * radius;
}

const area = (radius) => {
  return Math.PI * radius * radius;
}

module.exports = {
  circumference,
  area
}