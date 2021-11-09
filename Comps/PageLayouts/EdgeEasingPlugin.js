import { ScrollbarPlugin } from 'smooth-scrollbar';
import Scrollbar from 'smooth-scrollbar';

export default class EdgeEasingPlugin extends ScrollbarPlugin {
    constructor() {
        super(...arguments);
        this._remainMomentum = {
            x: 0,
            y: 0,
        };
    }
    transformDelta(delta) {
        const { limit, offset, } = this.scrollbar;
        const x = this._remainMomentum.x + delta.x;
        const y = this._remainMomentum.y + delta.y;

        // clamps momentum within [-offset, limit - offset]
        this.scrollbar.setMomentum(Math.max(-offset.x, Math.min(x, limit.x - offset.x)), Math.max(-offset.y, Math.min(y, limit.y - offset.y)));
        return { x: 0, y: 0 };
    }
    onRender(remainMomentum) {
        Object.assign(this._remainMomentum, remainMomentum);
    }
}

EdgeEasingPlugin.pluginName = 'edgeEasing';

Scrollbar.use(EdgeEasingPlugin);