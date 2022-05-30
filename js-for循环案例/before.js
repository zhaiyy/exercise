const mockData = require('./cityData')
const { cityData: data, dataLenList, loopNum } = mockData
const { performance } = require('perf_hooks')

dataLenList.forEach((step) => {
  const cityData = []
  for (let i = 0; i <= step; i++) {
    cityData.push(...data)
  }

  const timeList = []
  const formatCityData = () => {
    const start = performance.now()
    const arr1 = []
    for (let i = 0; i < cityData.length; i++) {
      arr1[i] = {}
      arr1[i].value = cityData[i].name
      arr1[i].label = cityData[i].name
      arr1[i].children = []
  
      for (let j = 0; j < cityData[i].citys.length; j++) {
        arr1[i].children[j] = {}
        arr1[i].children[j].value = cityData[i].citys[j].name
        arr1[i].children[j].label = cityData[i].citys[j].name
      }
    }
    timeList.push(performance.now() - start)
  }
  for (let i = 0; i < loopNum; i++) {
    formatCityData()
  }
  console.log('数组长度：', cityData.length, '优化前耗时: ' + (timeList.reduce((pre, next) => pre + next) / timeList.length).toFixed(2) + 'ms')
})
