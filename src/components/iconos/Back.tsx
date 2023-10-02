import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={800}
    height={800}
    viewBox="0 0 48 48"
    {...props}
  >
    <title>{"arrow-back-solid"}</title>
    <g data-name="Layer 2">
      <path fill="none" d="M0 0h48v48H0z" data-name="invisible box" />
      <path
        d="M19.7 6a.9.9 0 0 0-.8.4L2.4 23.1a1.5 1.5 0 0 0 0 2l16.5 16.5a.9.9 0 0 0 .8.4 1.2 1.2 0 0 0 1.1-1.3V31c15.7.7 21.1 3.8 23.5 9.2.4.8.8 1.1 1.1 1.1s.6-.4.6-1c-.2-10.5-10-20.9-25.2-22.4V7.3A1.2 1.2 0 0 0 19.7 6Z"
        data-name="Q3 icons"
      />
    </g>
  </svg>
)
export default SvgComponent
