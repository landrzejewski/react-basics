function Section({title, children, /*id*/ ...props}) {
    return (
        <section /*id={id}*/ {...props}>
            <h2>{title}</h2>
            {children}
        </section>
    )
}

export default Section;