import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={800}
    height={800}
    viewBox="0 0 32 32"
    {...props}
  >
    <title>{"refresh"}</title>
    <path
      fill="#000"
      fillRule="evenodd"
      d="M30.858 2.56c.539-.54 1.151-1.01 1.151-1.56s-.447-1-1-1h-10c-.121 0-1 0-1 1v10c0 .55.448 1 1 1 .553 0 .938-.53 1.364-.95l2.779-2.78A11.916 11.916 0 0 1 28 16c0 6.63-5.373 12-12 12S4 22.63 4 16C4 10.06 8.327 5.13 14 4.18V.14C6.109 1.12 0 7.84 0 16c0 8.84 7.164 16 16 16s16-7.16 16-16c0-4.06-1.516-7.75-4.007-10.57l2.865-2.87"
    />
  </svg>
)
export default SvgComponent
