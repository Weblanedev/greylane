import * as React from "react"
import { SVGProps, memo } from "react"

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width={20}
        height={6}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        transform="rotate(180.607)"
        {...props}
    >
        <path
            d="M21 11 11 1 1 11"
            stroke="white"
            strokeWidth={1.67}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
)

const DropdownArrow = memo(SvgComponent)
export default DropdownArrow
