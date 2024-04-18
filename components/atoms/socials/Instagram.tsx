import * as React from "react"
import { SVGProps, memo } from "react"

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width={22}
        height={23}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M21 6.5a5 5 0 0 0-5-5H6a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5v-10Z"
            stroke="#212121"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M14.594 13.3a4 4 0 1 0-7.1-3.686 4 4 0 0 0 7.1 3.685ZM16.5 6h.01"
            stroke="#212121"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
)

const Instagram = memo(SvgComponent)
export default Instagram
