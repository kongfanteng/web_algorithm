/**
 * 解析 Query 字符串
 * @param {string} str - 需要解析的字符串
 * @returns {object} 返回的解析对象
 * @example
 *
 * ```js
    // 解析 Query 字符串
    
    // 问题
    // - 写一个程序，解析下面的 queryString，返回对象
    // - a.name = ramroll&a.dressU&x=1*&y=

    // 函数描述
    // - 需要解析的字符串 {@link str} 调用字符串的分割成数组方法 split
    // - 返回结果调用累加器 reduce，默认值为空对象 {}，参数 {@link o} 和 {@link kv}
    // - 调用字符串分割数组方法 split 对每个值进行拆分为键值 {@link key} 和属性值 {@link value}
    // - 判断属性值 {@link value} 不存在，直接返回 {@link o}
    // - 属性值存在，对 {@link o} 对象进行赋值，返回 {@link o}

    // 调用
    console.log( parse('a=1&b=&c=5&f=hello') ) // { a: '1', c: '5', f: 'hello' }
    console.log( parse('a&b&c') ) // {}
    console.log( parse('a[name]=fox&a[company]=tecent&b=why') ) // { 'a[name]': 'fox', 'a[company]': 'tecent', b: 'why' }，错误
    console.log( parse('color=Deep%20Blue') ) // { color: 'Deep' }，错误
    console.log( parse('a[0]=1&a[1]=2') ) // { 'a[0]': '1', 'a[1]': '2' }，错误

    // 问题
    // - 未解决对象嵌套（对象和数组）
 * ```
 * 
 */
function parse(str) {
  // - 需要解析的字符串 {@link str} 调用字符串的分割成数组方法 split
  // - 返回结果调用累加器 reduce，默认值为空对象 {}，参数 {@link o} 和 {@link kv}
  return str.split('&').reduce((o, kv) => {
    // - 调用字符串分割数组方法 split 对每个值进行拆分为键值 {@link key} 和属性值 {@link value}
    const [key, value] = kv.split('=')
    // - 判断属性值 {@link value} 不存在，直接返回 {@link o}
    if (!value) return o
    // - 属性值存在，对 {@link o} 对象进行赋值，返回 {@link o}
    o[key] = value
    return o
  }, {})
}
/**
 * 解析 Query 字符串（深层）
 * @param {string} str - query 字符串
 * @return {object} query 对象
 * 
 * @example
 *
 * ```js
    // o[key] = value -> 构造深层设置函数 deep_set
 * ```
 * 
 */
function parse_deep(str) {
  // - 需要解析的字符串 {@link str} 调用字符串的分割成数组方法 split
  // - 返回结果调用累加器 reduce，默认值为空对象 {}，参数 {@link o} 和 {@link kv}
  return str.split('&').reduce((o, kv) => {
    // - 调用字符串分割数组方法 split 对每个值进行拆分为键值 {@link key} 和属性值 {@link value}
    const [key, value] = kv.split('=')
    // - 判断属性值 {@link value} 不存在，直接返回 {@link o}
    if (!value) return o
    // - 属性值存在，对 {@link o} 对象进行赋值，返回 {@link o}
    deep_set(o, key.split(/[\[\]]/g).filter(x=>x), value)
    return o
  }, {})
}
/**
 * 深层设置对象
 * @param {object} o - 存储对象
 * @param {string[]} path - 存储 key/value 的数组
 * @param {string} value - 属性值
 * @example
 *
 * ```js
    // 函数描述
    // - 定义索引 {@link i} 为 0
    // - 循环 for 遍历数组 {@link path}
    // - 对于数组 {@link path} 的第 {@link i} 个不为 undefined 时，赋值为空对象 {}
    // - 对于数组下一位 path[i+1] 为数字时，赋值为空数组 []
    // - 赋值存储对象 {@link o} 为当前定义的 o[path[i]]
    // - 对属性值 {@link value} 进行解码 decodeURIComponent 并赋值属性值 o[path[i]] = value

    // 调用
    console.log( parse_deep('a[name]=fox&a[company]=tecent&b=why') ) // { a: { name: 'fox', company: 'tecent' }, b: 'why' }
    console.log( parse_deep('color=Deep%20Blue') ) // { color: 'Deep Blue' }
    console.log( parse_deep('a[0]=1&a[1]=2') ) // { a: [ '1', '2' ] }
 * ```
 * 
 */
function deep_set(o, path, value) {
  // - 定义索引 {@link i} 为 0
  let i = 0
  // - 循环 for 遍历数组 {@link path}
  for (; i < path.length - 1; i++) {
    // - 对于数组 {@link path} 的第 {@link i} 个为 undefined 时，赋值为空对象 {}
    if (o[path[i]] === undefined) {
      if ( path[i+1].match(/\d+$/) ) {
        o[path[i]] = []
      } else {
        o[path[i]] = {}
      }
    }
    // - 赋值存储对象 {@link o} 为当前定义的 o[path[i]]
    o = o[path[i]]
  }
  // - 赋值属性值 o[path[i]] = value
  o[path[i]] = decodeURIComponent(value)
}