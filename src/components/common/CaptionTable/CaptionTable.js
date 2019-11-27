import React from 'react'

export const CaptionTable = ({ children }) => {
    if (!children) return null
    return <h3 style={{ textAlign: 'center', padding: '0.5em' }}>{children}</h3>;
}