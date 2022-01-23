//Libraries
import { gsap } from "gsap";

export const animateIntroImage = (_trigger, ..._image) => {

    if ([_image] && _trigger) {

        const trigger = {
            trigger: _trigger,
            scrub: true,
            start: "top top",
            end: "+=110% top",
        };

        gsap.fromTo([_image],
            {
                yPercent: 0,
                scale: 1
            },
            {
                yPercent: 60,
                scale: 1.35,
                scrollTrigger: trigger
            })

    }

}

export const animateParallaxInsideImage = (_trigger, ..._image) => {

    if ([_image] && _trigger) {

        const trigger = {
            trigger: _trigger,
            scrub: true,
            start: "top bottom",
            end: () => `+=${_trigger.clientHeight} top`,
            invalidateOnRefresh: true,
            // refreshPriority: -1,
            onRefresh: () => {

                const _height = _trigger.clientHeight * 1.1;
                const _top = `-${_height / 3.67}`

                gsap.set([_image],
                    {
                        height: _height,
                        top: _top
                    })
            }
        }

        gsap.fromTo([_image],
            {
                y: 0
            },
            {
                y: () => Math.floor((_trigger.clientHeight * 1.08) / 3.67),
                scrollTrigger: trigger
            })

    }

}

export const animateParallaxImage = (_trigger, _factor, _image) => {

    if (_trigger && _image) {

        const trigger = {
            trigger: _trigger,
            scrub: true,
            start: "top bottom",
            end: `bottom top`,
        }

        gsap.fromTo(_image,
            {
                y: 0
            },
            {
                y: _factor,
                scrollTrigger: trigger
            })

    }

}

export const animateTextUp = (_trigger, _delay, ..._text) => {

    if (_trigger && [_text]) {

        const trigger = {
            trigger: _trigger,
            start: "top bottom",
            toggleActions: "play none none reset",
            ease: "Power2.easeOut"
        }

        gsap.fromTo([_text],
            {
                y: 100,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                duration: 0.75,
                scrollTrigger: trigger,
                stagger: 0.1,
                delay: _delay
            })

    }

}

export const animateButtonScale = (_trigger, _delay, _button) => {

    if (_trigger && _button) {

        const trigger = {
            trigger: _trigger,
            start: "top bottom",
            toggleActions: "play none none reset",
            ease: "Power2.easeOut",
        }

        gsap.timeline({
            paused: false,
            scrollTrigger: trigger,
            delay: _delay
        })
            .fromTo(_button,
                {
                    scale: 1.75
                },
                {
                    scale: 1,
                    duration: 1,
                })
            .fromTo(_button,
                {
                    opacity: 0
                },
                {
                    opacity: 1,
                    duration: 1,
                }, 0.2)

    }

}

export const animateGallery = (_trigger, ..._image) => {

    if (_trigger && [_image]) {

        const trigger = {
            trigger: _trigger,
            start: "top bottom",
            toggleActions: "play none none reset",
            ease: "Power2.easeOut",
        }

        gsap.fromTo([_image],
            {
                x: 300
            },
            {
                x: 0,
                duration: 0.75,
                scrollTrigger: trigger,
                stagger: 0.1
            })

    }

}

export const animateTextHidden = (_trigger, _duration, ..._text) => {

    if (_trigger && [_text]) {

        const trigger = {
            trigger: _trigger,
            start: "top bottom",
            toggleActions: "play none none reset",
            ease: "Power2.easeOut"
        }

        gsap.fromTo([_text],
            {
                yPercent: 120,
                opacity: 0
            },
            {
                yPercent: 0,
                opacity: 1,
                duration: _duration,
                scrollTrigger: trigger,
                stagger: 0.1,
            })

    }

}

export const animateImageScale = (_trigger, _image) => {

    if(_trigger && _image){

        const trigger = {
            trigger: _trigger,
            start: "top bottom",
            toggleActions: "play none none reset",
            ease: "Power2.easeOut"
        }

        gsap.fromTo(_image,
            {
                scale: 1.35
            },
            {
                scale: 1,
                duration: 0.75,
                scrollTrigger: trigger,
                stagger: 0.1,
            })

    }

}