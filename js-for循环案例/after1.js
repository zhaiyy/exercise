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
      const { name, citys } = cityData[i]
      arr1[i] = {}
      arr1[i].value = name
      arr1[i].label = name
      arr1[i].children = []

      for (let j = 0; j < citys.length; j++) {
        const { name: childName } = citys[j]
        arr1[i].children[j] = {}
        arr1[i].children[j].value = childName
        arr1[i].children[j].label = childName
      }
    }
    timeList.push(performance.now() - start)
  }
  for (let i = 0; i < loopNum; i++) {
    formatCityData()
  }
  console.log('数组长度：', cityData.length, '提取变量后耗时: ' + (timeList.reduce((pre, next) => pre + next) / timeList.length).toFixed(2) + 'ms')
})
