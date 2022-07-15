import { useId } from 'react'

export function GridPattern(props) {
    let patternId = useId()

    return (
        <svg aria-hidden="true" className="absolute inset-0 h-full w-full">
            <defs>

                <path d="M0 128V.5H128" fill="none" stroke="currentColor" />

            </defs>
            <rect width="100%" height="100%" fill={`url(#${patternId})`} />
        </svg>
    )
}
