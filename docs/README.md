js-tools-xxx

# js-tools-xxx - v1.0.2

## Table of contents

### Classes

- [Bus](classes/Bus.md)

### Type Aliases

- [DateBaseUtil](README.md#datebaseutil)
- [\_quarter](README.md#_quarter)
- [controlType](README.md#controltype)

### Variables

- [dateFormatPost](README.md#dateformatpost)
- [dateFormatPrint](README.md#dateformatprint)
- [dateFormatSearch](README.md#dateformatsearch)
- [dateFormatSel](README.md#dateformatsel)

### Functions

- [compareVer](README.md#comparever)
- [dateControl](README.md#datecontrol)
- [everyTrim](README.md#everytrim)
- [formatGetParams](README.md#formatgetparams)
- [getCookie](README.md#getcookie)
- [getLocalStroage](README.md#getlocalstroage)
- [getSessionStroage](README.md#getsessionstroage)
- [getStorage](README.md#getstorage)
- [getV](README.md#getv)
- [hasKey](README.md#haskey)
- [isObject](README.md#isobject)
- [removeCookie](README.md#removecookie)
- [setCookie](README.md#setcookie)
- [setStorage](README.md#setstorage)
- [trim](README.md#trim)

## Type Aliases

### DateBaseUtil

Ƭ **DateBaseUtil**: ``"year"`` \| ``"years"`` \| ``"y"`` \| ``"month"`` \| ``"months"`` \| ``"M"`` \| ``"week"`` \| ``"weeks"`` \| ``"w"`` \| ``"day"`` \| ``"days"`` \| ``"d"`` \| ``"hour"`` \| ``"hours"`` \| ``"h"`` \| ``"minute"`` \| ``"minutes"`` \| ``"m"`` \| ``"second"`` \| ``"seconds"`` \| ``"s"`` \| ``"millisecond"`` \| ``"milliseconds"`` \| ``"ms"``

___

### \_quarter

Ƭ **\_quarter**: ``"quarter"`` \| ``"quarters"`` \| ``"Q"``

定义季度单位类型

___

### controlType

Ƭ **controlType**: ``"subtract"`` \| ``"add"``

定义时间计算类型

## Variables

### dateFormatPost

• `Const` **dateFormatPost**: ``"YYYY-MM-DD HH:mm:ss"``

___

### dateFormatPrint

• `Const` **dateFormatPrint**: ``" YYYY 年 MM 月 DD 日 HH 时 mm 分 "``

___

### dateFormatSearch

• `Const` **dateFormatSearch**: ``"YYYY-MM-DD"``

___

### dateFormatSel

• `Const` **dateFormatSel**: ``"YYYY-MM-DD HH:mm"``

## Functions

### compareVer

▸ **compareVer**(`firstV`, `secV`): `boolean`

比较前一个版本号是否比后一个版本号高

#### Parameters

| Name | Type |
| :------ | :------ |
| `firstV` | `string` |
| `secV` | `string` |

#### Returns

`boolean`

true or false

**`Example`**

```ts
compareVer('1.1.1', '1.2.1') => false
```

**`Params`**

firstV 比较的版本号

**`Params`**

secV 被比较的版本号

___

### dateControl

▸ **dateControl**(`type`, `amount`, `unit`, `format?`): `string`

时间截取控制

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `type` | [`controlType`](README.md#controltype) | `undefined` | subtract \| add |
| `amount` | `string` \| `number` | `undefined` | 截取数量 |
| `unit` | [`DateBaseUtil`](README.md#datebaseutil) \| [`_quarter`](README.md#_quarter) | `undefined` | - |
| `format` | `string` | `dateFormatPost` |  |

#### Returns

`string`

___

### everyTrim

▸ **everyTrim**(`data`): `any`

深度为对象的每个属性都去掉空格

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

`any`

data

**`Example`**

```ts
everyTrim({  name: '  张三  ' }) => { name: '张三' }
everyTrim({
   name: '  张三  ',
   age: {
     name: '  张三  ',
   },
}) => {
   name: '张三',
   age: {
     name: '张三',
   },

}
```

**`Params`**

data 任意类型的值

___

### formatGetParams

▸ **formatGetParams**(`obj`): `string`

将参数拼接到接口 url 上

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `any` |

#### Returns

`string`

temp 完整接口 uri 路径

**`Example`**

```ts
formatGetParams({ a: 1, b: 2, }) => '?a=1&b=2'
```

**`Params`**

obj 对象

___

### getCookie

▸ **getCookie**(`key`): `string`

获取cookie

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`string`

value 存储的value值 || ""

**`Example`**

```ts
getCookie('aa') => 123 || ""
```

**`Params`**

key 存储的key值

___

### getLocalStroage

▸ **getLocalStroage**(`key`): () => `any`

获取localStroage数据

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`fn`

value 存储的value值

▸ (): `any`

##### Returns

`any`

**`Example`**

```ts
getLocalStroage('aa') => 'aa' || null
```

**`Params`**

key 存储的key值

___

### getSessionStroage

▸ **getSessionStroage**(`key`): () => `any`

获取SessionStroage数据

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`fn`

value 存储的value值

▸ (): `any`

##### Returns

`any`

**`Example`**

```ts
getSessionStroage('aa') => 'aa' || null
```

**`Params`**

key 存储的key值

___

### getStorage

▸ **getStorage**(`type`, `key`): `any`

获取缓存数据

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"localStorage"`` \| ``"sessionStorage"`` |
| `key` | `string` |

#### Returns

`any`

value: 存储的value值

**`Example`**

```ts
getStorage('localStorage', 'aa') => '123' || null
```

**`Params`**

type: 'localStorage' | 'sessionStorage' 存储的位置类型
key 存储的key值

___

### getV

▸ **getV**(`defaultResult?`, `...args`): `any`

获取多级对象值

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `defaultResult` | `string` | `'--'` | 默认值(兜底'--') |
| `...args` | `any` | `undefined` | 需要获取的多级 rest 参数或者独立多级 string |

#### Returns

`any`

**`Example`**

```ts
getV('默认值', {name: {children: [123, 456]}}, 'name', 'children', '0'); /// 123
 getV('默认值', {name: {children: [123, 456]}}, 'name.children.0'); /// 123
 getV('默认值', {name: {children: [123, 456]}}, 'name.children.xxx'); /// 默认值
 getV('默认值', { name: {children: [123, 456], '[]': ['test']} }, 'name.[].0'); /// 'test'
 getV('默认值', { name: {children: [123, 456], '[]': ['test']} }, 'name', '[]', 0); /// 'test'
```

___

### hasKey

▸ **hasKey**(`data`, `key`): `boolean`

对象/数组包含某个 key/index 或者属性

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `any` | 对象 |
| `key` | `string` | 需要判断的 key |

#### Returns

`boolean`

**`Example`**

```ts
hasKey({ a: 1 }, 'a'); /// true
hasKey([0, 1], '0'); /// true
hasKey([0, 1], 2); /// false
hasKey({ a: 1 }, 'b'); /// false
const a = { a: 1 };
a.__proto__.x = 1;
hasKey(a, 'x'); /// true;
```

___

### isObject

▸ **isObject**(`obj`): `boolean`

判断是否为对象

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `any` |

#### Returns

`boolean`

true | false

**`Example`**

```ts
isObject({}) => true
```

**`Params`**

obj 任意类型的值

___

### removeCookie

▸ **removeCookie**(`key`): `void`

删除cookie

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`void`

undefined

**`Example`**

```ts
removeCookie('aa')
```

**`Params`**

key 存储的key值

___

### setCookie

▸ **setCookie**(`key`, `value`, `time`): `void`

设置cookie

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `string` |
| `time` | `number` |

#### Returns

`void`

**`Example`**

```ts
setCookie('aa', 123, 1000) => 'aa' || null
```

**`Params`**

key 存储的key值
value 存储的value值
time 存储时限

___

### setStorage

▸ **setStorage**(`type`, `key`, `value`): `void`

设置缓存数据

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"localStorage"`` \| ``"sessionStorage"`` |
| `key` | `string` |
| `value` | `string` |

#### Returns

`void`

**`Example`**

```ts
setStorage('localStorage', 'aa', '123) => 'aa' || null
```

**`Params`**

type: 'localStorage' | 'sessionStorage' 存储的位置类型
key 存储的key值
value 存储的value值

___

### trim

▸ **trim**(`str`, `global?`): `string`

去掉字符串空格

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `str` | `string` | `undefined` |
| `global` | `boolean` | `false` |

#### Returns

`string`

string

**`Example`**

```ts
trim(' aa ', true) => 'aa'
```

**`Params`**

str 字符串内容

**`Params`**

global 是否匹配全部空格
