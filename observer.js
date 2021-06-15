function observe(obj) {
    if (!obj || typeof obj !== 'object') {
        return
    }
    Object.keys(obj).forEach((key) => {
        defineReactive(obj, key, obj[key])
    })
}

function defineReactive(obj, key, val) {
  observe(val)
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: false,  // 不能再 define, 再使用 defineProperty 会报错
    get: function () {
      return val
    },
    set: function (newVal) {
      console.log('value changed', val, '--->', newVal)
      val = newVal
    }
})
}
let data = { name: 'Mr Wang' }
observe(data)
data.name = 'Cheng'

