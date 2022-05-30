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
    const cityDataLen = cityData.length
    const arr1 = new Array(cityDataLen)
    for (let i = 0; i < cityDataLen; i++) {
      const { name, citys } = cityData[i]
      const citysLen = citys.length
      const children = new Array(citysLen)
      for (let j = 0; j < citysLen; j++) {
        const { name: childName } = citys[j]
        children[j] = {
          value: childName,
          label: childName
        }
      }
      arr1[i] = {
        value: name,
        label: name,
        children: children
      }
    }
    timeList.push(performance.now() - start)
  }
  for (let i = 0; i < loopNum; i++) {
    formatCityData()
  }
  console.log('数组长度：', cityData.length, '优化数组赋值后耗时: ' + (timeList.reduce((pre, next) => pre + next) / timeList.length).toFixed(2) + 'ms')
})
