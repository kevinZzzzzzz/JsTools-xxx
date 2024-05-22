js-tools-xxx

# js-tools-xxx - v1.0.1

## Table of contents

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
- [copyFile](README.md#copyfile)
- [dateControl](README.md#datecontrol)
- [everyTrim](README.md#everytrim)
- [formatGetParams](README.md#formatgetparams)
- [isObject](README.md#isobject)
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

### copyFile

▸ **copyFile**(`source`, `target`): `void`

复制文件

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `string` | 源文件 |
| `target` | `string` | 目标文件 |

#### Returns

`void`

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
