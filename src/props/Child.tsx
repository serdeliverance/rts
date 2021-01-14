interface ChildProps {
    color: string
}

/**
 * disadvantage: all React componentes can have optionally
 * these properties: propTypes, displayName, defaultProps, contextTypes
 * 
 * Declaring that way, Typescript doesn't now about that and If
 * we refer to some of these properties, it will complain.
 * 
 */
export const Child = ({ color }: ChildProps) => {
    return <div>{color}</div>
}

export const ChildAsFC: React.FC<ChildProps> = ({ color }) => {
    return <div>{color}</div>
}

ChildAsFC.displayName // now the IDE can help us with autocomplete...