import $ from 'jquery';

export default function AnimationActivate(elemId) {
    var elem = $('#' + elemId),
        animationClass = elem.attr('trigger'),
        animationDelay = elem.attr('trigger-delay');
    if (animationDelay) {
        elem.css({
            '-webkit-animation-delay': animationDelay,
            '-moz-animation-delay': animationDelay,
            'animation-delay': animationDelay
        });
    }
    elem.addClass('trigger').addClass('animated');
    elem.addClass('trigger').addClass(animationClass);
    if (elemId === 'about-waypoint-10') {
        $('.ability-bar').map(function () {
            setTimeout(() => {
                this.style.width = this.dataset.width
            }, this.dataset.delay);
        })
    }
}