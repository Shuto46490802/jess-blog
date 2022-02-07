import Scrollbar from 'smooth-scrollbar';
import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';

export const getScrollProxy = (_scroller, _header) => {

    const scroller = _scroller;
    const bodyScrollBar = Scrollbar.init(scroller, { damping: 0.1, delegateTo: null });

    if (bodyScrollBar.offset.y !== 0) {
        bodyScrollBar.scrollTo(0, 0, 0)
    }

    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.scrollerProxy(_scroller, {
        scrollTop(value) {
            if (arguments.length) {
                bodyScrollBar.scrollTop = value;
            }
            return bodyScrollBar.scrollTop;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        }
    });

    var lastOffset = null;

    bodyScrollBar.addListener(({ offset }) => {
        ScrollTrigger.update()

        if (offset.y > 0) {
            _header.classList.add("shrinked")
        } else {
            _header.classList.remove("shrinked")
        }

        if (!lastOffset) {
            lastOffset = offset;
            return;
        }

        if (offset.y < lastOffset.y) {
            _header.classList.remove("pull-up")
        } else if (offset.y > lastOffset.y) {
            _header.classList.add("pull-up")
        } else {
            console.log("still")
        }

        lastOffset = offset;
    });

    ScrollTrigger.defaults({ scroller: scroller });

    if (document.querySelector('.gsap-marker-scroller-start')) {
        const markers = gsap.utils.toArray('[class *= "gsap-marker"]');

        bodyScrollBar.addListener(({ offset }) => gsap.set(markers, { marginTop: -offset.y }));
    }
}