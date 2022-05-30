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
    const arr1 = cityData.map(({ name, citys }) => {
      return {
        value: name,
        label: name,
        children: citys
          ? citys.map(({ name: childName }) => ({
              value: childName,
              label: childName
            }))
          : []
      }
    })
    timeList.push(performance.now() - start)
  }
  for (let i = 0; i < loopNum; i++) {
    formatCityData()
  }
  console.log('数组长度：', cityData.length, 'map后耗时: ' + (timeList.reduce((pre, next) => pre + next) / timeList.length).toFixed(2) + 'ms')
})
