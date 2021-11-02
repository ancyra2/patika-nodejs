function circleArea(r){
  let area = Math.PI * r * r;
  console.log(`Dairenin alani : ${area} dir.`)
}
function circleCircumference(r){
  let c = 2 * Math.PI * r;
  console.log(`Dairenin çevresi : ${c} dir.`)
}

module.exports = {
  circleArea,
  circleCircumference
}
