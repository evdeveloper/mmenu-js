import Mmenu from '../../core/oncanvas/mmenu.oncanvas';
Mmenu.configs.classNames.toggles = {
    toggle: 'Toggle',
    check: 'Check'
};
export default function () {
    this.bind('initPanels:after', (panels) => {
        //	Refactor toggle classes
        panels.forEach((panel) => {
            Mmenu.DOM.find(panel, 'input')
                .forEach((input) => {
                Mmenu.refactorClass(input, this.conf.classNames.toggles.toggle, 'mm-toggle');
                Mmenu.refactorClass(input, this.conf.classNames.toggles.check, 'mm-check');
            });
        });
    });
}
;
