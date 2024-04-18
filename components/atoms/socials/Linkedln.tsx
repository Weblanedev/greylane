import * as React from "react"
import { SVGProps, memo } from "react"

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width={24}
        height={25}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M20.243 10.257A6 6 0 0 0 10 14.5v7h4v-7a2 2 0 0 1 4 0v7h4v-7a6.001 6.001 0 0 0-1.757-4.243ZM6 9.5H2v12h4v-12ZM4 6.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
            stroke="#212121"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
)

const Linkedln = memo(SvgComponent)
export default Linkedln
