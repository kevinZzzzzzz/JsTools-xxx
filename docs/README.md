js-tools-xxx

# js-tools-xxx - v1.0.1

## Table of contents

### Functions

- [compareVer](README.md#comparever)
- [everyTrim](README.md#everytrim)
- [formatGetParams](README.md#formatgetparams)
- [isObject](README.md#isobject)
- [trim](README.md#trim)

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
@example:
formatGetParams({ a: 1, b: 2, }) => '?a=1&b=2'

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `any` |

#### Returns

`string`

temp 完整接口 uri 路径

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
