import { trigger, transition, style, query, animate } from '@angular/animations'

export const animations = trigger('routeAnimations', [
    transition('* <=> *', [
        query(':enter, :leave', [
            style({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                bottom: 0,
                zIndex: 1
            })
        ], { optional: true }),
        query(':leave', [
            animate('100ms linear', style({
                transform: 'translateY(100%)',
            }))
        ], { optional: true }),
        query(':enter', [
            style({
                transform: 'scale(0)',
                transformOrigin: 'bottom',
            }),
            animate('200ms linear', style({
                transform: 'scale(1)',
            }))
        ], { optional: true }),
    ])
])