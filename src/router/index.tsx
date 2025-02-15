import {ReactNode, Suspense} from "react";
import {RouteObject} from "react-router-dom";
import AnimationFace from "@/views/animation-face"
import LessChange from '@/views/theme-change/less-change'
import OpacityBtn from '@/views/opacity-btn'


const lazyLoad = (children: ReactNode) => {
    return (
        <Suspense fallback={<h1>loading</h1>}>
            {children}
        </Suspense>
    )
}
const routes: RouteObject[] = [
    {
        path: '/',
        element: null
    },
    {
        path: 'animationFace',
        element: <AnimationFace />
    },
    {
        path: 'theme',
        element: null,
        children: [
            {
                path: 'lessChange',
                element: <LessChange />
            }
        ]
    },
    {
        path: 'opacityBtn',
        element: <OpacityBtn />
    },
    {
        path: 'test',
        element: <test />
    }
]

export default routes