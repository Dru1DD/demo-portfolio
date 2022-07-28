import React, { useCallback, useEffect, useState, FC } from 'react'

interface ScrollValue {
    innerWidth: number
}

interface SizeObserverProps {
    children: JSX.Element; 
}

export const SizeContext = React.createContext<ScrollValue>({
    innerWidth: 0
})


const SizeObserver: FC<SizeObserverProps> = ({ children }) => {

    const [ innerWidth, setInnerWidth ] = useState(0)
    const handleResize = useCallback(() => {
        setInnerWidth(window.innerWidth)
    }, [])

    useEffect(() => {
        handleResize()
        window.addEventListener('resize', handleResize, { passive: true })
        return () => window.removeEventListener('resize', handleResize)
    }, [handleResize])

    return (
        <SizeContext.Provider value={{ innerWidth }}>
            {children}
        </SizeContext.Provider>
    )
}



export default SizeObserver