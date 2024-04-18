import * as React from "react"
import { SVGProps, memo } from "react"

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width={24}
        height={21}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M19.86 3.03A10.899 10.899 0 0 0 23 1.5a7.72 7.72 0 0 1-2.08 3.67c.052.274.08.55.08.83 0 11.5-11 16.5-20 11.5a11.64 11.64 0 0 0 7-2c-9-4-5-13-5-13a10.66 10.66 0 0 0 9 4.53v-1a4.48 4.48 0 0 1 7.86-3Z"
            stroke="#212121"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
)

const Twitter = memo(SvgComponent)
export default Twitter
