export function SectionHeading({ number, children, ...rest }) {
    return (
      <h2
        className="inline-flex items-center rounded-full py-2 px-4 ring-2 ring-primary border-none "
        {...rest}
      >
        <span className="text-base font-medium tracking-tight">
          {children}
        </span>
      </h2>
    )
  }
