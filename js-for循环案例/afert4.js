const mockData = require('./cityData')
const { cityData: data, dataLenList, loopNum } = mockData
const { performance } = require('perf_hooks')

class City {
  constructor({name, citys}) {
    this.label = name
    this.value = name
    if(citys) {
      this.children = new Array(citys.length)
      for (let j = 0; j < citys.length; j++) {
        this.children[j] = new City(citys[j])
      }
    }
  }
}

dataLenList.forEach((step) => {
  const cityData = []
  for (let i = 0; i <= step; i++) {
    cityData.push(...data)
  }

  const timeList = []

  const formatCityData = () => {
    const start = performance.now()
    const cityDataLen = cityData.length
    const arr1 = new Array(cityDataLen)
    for (let i = 0; i < cityDataLen; i++) {
      arr1[i] = new City(cityData[i])
    }
    timeList.push(performance.now() - start)
  }
  for (let i = 0; i < loopNum; i++) {
    formatCityData()
  }
  console.log('数组长度：', cityData.length, '抽取class 类后耗时: ' + (timeList.reduce((pre, next) => pre + next) / timeList.length).toFixed(2) + 'ms')
})
