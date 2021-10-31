const args = process.argv.slice(2);
let pi = Math.PI;

function circleArea(r){
  area = pi * r * r;
  console.log(`Yarı çapı ${r} olan darinenin alanı : ${area}'dir.`);
}

circleArea(args[0] * 1);
