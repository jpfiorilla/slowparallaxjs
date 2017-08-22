import React from 'react';
import { TweenMax } from 'gsap';
import ScrollMagic from 'scrollmagic';
import { isMobile } from './device';
// import PropTypes from 'prop-types';

const randomBetween = (low = 0, high = 1) => Math.floor(Math.random() * high) + low;

class SlowParallax extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.id = randomBetween(1, 999999999999);
        this.class = props.class || props.className;
        this.time = props.time || 10;
        this.timeMax = props.timeMax;
        this.distance = props.distance || 200;
    }
    componentDidMount(){
        if (!isMobile()){
            let tweenName = `${this.class}SlowParallaxTween${this.id}`,
                sceneName = `${this.class}SlowParallaxScene${this.id}`,
                uniqueClass = `.${this.class + this.id}`,
                trigger = `.${this.class}Trigger${this.id}`,
                objectRef = this.class + this.id,
                targetStateName = `${this.class}Target${this.id}`;

            this.controller = new ScrollMagic.Controller();

            if (this.timeMax) this.time = randomBetween(time, timeMax)
            else this.time = this.time + randomBetween(-1.5, 1.5);

            this[tweenName] = TweenMax.to(uniqueClass, this.time, { transform: `translateY(${this.state[targetStateName] || 0}px)`, ease: Circ.easeOut });
            this[sceneName] = new ScrollMagic.Scene()
                .triggerHook(1)
                .on('update', e => {
                    let scrollAmount = window.scrollY - (this.state.lastPos || 0),
                        scrollRange = window.innerHeight,
                        // height = ReactDOM.findDOMNode(this).getElementsByClassName(objectRef)[0].clientHeight,
                        distanceFromTrigger = -(this.refs[trigger.slice(1)].getBoundingClientRect().top /*+ (height/2)*/) + scrollRange/2,
                        { lastPos } = this.state,
                        stateChange = { lastPos: window.scrollY },
                        target = (distanceFromTrigger > 0) && (distanceFromTrigger > scrollRange) ? -(this.distance/2) :
                                (distanceFromTrigger < 0) && (distanceFromTrigger < -scrollRange) ? (this.distance/2 || 0) :
                                -((this.distance/2) * distanceFromTrigger/scrollRange);

                    // console.log(`target: ${target}, distance: ${distanceFromTrigger}, totalAmount: ${this.distance}, innerHeight: ${scrollRange}`, uniqueClass)

                    this[tweenName].kill();
                    this[tweenName] = TweenMax.to(uniqueClass, this.time, { transform: `translateY(${this.state[targetStateName] || 0}px)`, ease: Circ.easeOut });

                    stateChange[targetStateName] = target;
                    this.setState(stateChange);
                })
                .setTween(this[tweenName])
                .addTo(this.controller);

        } else if (globals.isTablet){
            console.log('isTablet')
        }
    }
    componentWillUnmount = function(){
        let tweenName = `${this.class}SlowParallaxTween${this.id}`,
            sceneName = `${this.class}SlowParallaxScene${this.id}`;

        this.controller.destroy();
        this[sceneName].destroy();

        this[tweenName] = null;
        this[sceneName] = null;
    }
    render() {
        return(
            <div className={`slowParallax ${this.class} ${this.class + this.id}`} style={this.props.style || {}}>
                <div className={`${this.class}Trigger${this.id}`} ref={`${this.class}Trigger${this.id}`} style={this.props.triggerStyle} />
                {/*<div className={`${this.class} ${this.class + this.id}`}>*/}
                    {this.props.content}
                {/*</div>*/}
            </div>
        );
    }
}

// SlowParallax.propTypes = {
//     class: PropTypes.string.isRequired,
//     content: PropTypes.element.isRequired,
//     time: PropTypes.number.isRequired,
//     distance: PropTypes.number.isRequired
// };

export default SlowParallax;
