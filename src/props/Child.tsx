interface ChildProps {
    color: string
    onClick: () => void
}

/**
 * disadvantage: all React componentes can have optionally
 * these properties: propTypes, displayName, defaultProps, contextTypes
 * 
 * Declaring that way, Typescript doesn't now about that and If
 * we refer to some of these properties, it will complain.
 * 
 */
export const Child = ({ color, onClick }: ChildProps) => {
    return <div>
            {color}
            <button onClick={onClick}>Click me!</button>
        </div>
}

export const ChildAsFC: React.FC<ChildProps> = ({ color, onClick, children }) => {
    return <div>
        {color}
        {children}
        <button onClick={onClick}>Click me!</button>
    </div>
}

ChildAsFC.displayName // now the IDE can help us with autocomplete...