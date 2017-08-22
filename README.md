**Parallax. With momentum.**

Example: http://www.ofo.so/

```js
import SlowParallax from 'slowparallax';

<SlowParallax
	class='someClass'
	content={
		<div className='someClass'>Some content</div>
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
<div class="slowParallax className className999" style={{ prop: 'value' }}>
	<div class="classNameTrigger999" ref="classNameTrigger999" style={{ otherProp: 'otherValue' }} />
	<div class="someClass">Some content</div>
</div>
```

As the user scrolls, the `someClass <div>` will float lazily up & down the screen by 200px. This takes place over the course of a random amount of time between 10 and 15 seconds.