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
      const children = []
      for (let j = 0; j < citys.length; j++) {
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
  console.log('数组长度：', cityData.length, '对象赋值后耗时: ' + (timeList.reduce((pre, next) => pre + next) / timeList.length).toFixed(2) + 'ms')
})
