import { trigger, transition, query, style, animate } from '@angular/animations'

export const animation = trigger('routeAnimations', [
    transition('* <=> *', [
        query(':enter, :leave', [
            style({
                position: 'absolute',
                opacity: 0,
                top: 0,
                left: 0,
                width: '100%'
            })
        ], { optional: true }),
        query(':enter', [
            style({
                left: '-100%'
            })
        ], { optional: true })
    ])
])