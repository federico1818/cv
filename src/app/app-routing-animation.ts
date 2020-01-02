import { trigger, transition, query, style, animate } from '@angular/animations'

export const animation = trigger('routeAnimations', [
    transition('* <=> *', [
        query(':enter, :leave', [
            style({
                position: 'absolute',
                left: 0,
                width: '100%',
                opacity: 0,
                transform: 'scale(0) translateY(100%)'
            })
        ], { optional: false }),
        query(':enter', [
            style({
                opacity: 1,
                transform: 'scale(1) translateY(0)'
            })
        ], { optional: false })
    ])
])