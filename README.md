**Parallax. With momentum.**

Example: http://www.ofo.so/

```js
import SlowParallax from 'slowparallax';

<SlowParallax
	class='someClass'
	content={
		<div className='myContent'>Some content</div>
	}
	distance={200}
	time={10}
	timeMax={15} // optional
	style={{ prop: 'value' }} // optional
	triggerStyle={{ otherProp: 'otherValue' }} // optional
>
```
yields:-

```js
<div class="slowParallax someClass someClass999" style={{ prop: 'value' }}>
	<div class="someClassTrigger999" ref="someClassTrigger999" style={{ otherProp: 'otherValue' }} />
	<div class="myContent">Some content</div>
</div>
```

As the user scrolls, the `someClass <div>` will float lazily up & down the screen by 200px. This takes place over the course of a random amount of time between 10 and 15 seconds.

Exposed Property | Type | Default | Required | Description
``` | ``` | ``` | ``` | ```
`class` or `className` | `string` | x |  ✔ | Class name given to the outer parent `<div>`.
`content` | HTML element | x | ✔ | HTML content which will be animated.
`distance` | `number` | 200 | x | Distance in `px` the `content` will travel in each direction.
`time` | `number` | 10 | x | Amount of time it will take the `content` to travel to its destination after each scroll event. This amount is slightly randomized to make the effect more natural.
`timeMax` | `number` | x | x | If provided, the time used will be a random amount between the `time` and `timeMax`.
`style` | `object` | {} | x | Style applied to the outer parent `<div>`.
`triggerStyle` | `object` | {} | x | Style applied to the trigger `<div>`.