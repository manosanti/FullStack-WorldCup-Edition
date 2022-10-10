import { ReactComponent as arrowLeft } from './svgs/arrow-left.svg'
import { ReactComponent as right } from './svgs/right.svg'
import { ReactComponent as left } from './svgs/left.svg'
import { ReactComponent as profile } from './svgs/profile.svg'

const icons = {
    arrowLeft,
    right,
    profile,
    left,
}

export default function Icon ({name, ...props}) {
    const Element = icons[name]
    return <Element {...props} />
}
