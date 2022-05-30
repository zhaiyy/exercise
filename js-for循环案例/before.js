const cityData  =  require('./cityData')

console.time('beforeTime')
const arr1 = []
for (let i = 0; i < cityData.length; i++) {
 const cityName = cityData[i].name
 arr1[i] = {}
 arr1[i].value = cityName
 arr1[i].label = cityName
 arr1[i].children = []

 for (let j = 0; j < cityData[i].citys.length; j++) {
   const name = cityData[i].citys[j].name
   arr1[i].children[j] = {}
   arr1[i].children[j].value = name
   arr1[i].children[j].label = name
 }
}
console.timeEnd('beforeTime')
