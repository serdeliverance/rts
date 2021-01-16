import { ChildAsFC } from './Child'

const Parent = () => {
    return <ChildAsFC color="red" onClick={ () => console.log('clicked!')} >
            ImAChildrenProp
        </ChildAsFC>
}

export default Parent