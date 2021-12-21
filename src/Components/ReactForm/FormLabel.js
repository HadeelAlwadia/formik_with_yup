import React from 'react'

export default function FormLabel({title ,id}) {
    return (
        <label htmlFor={id}>{title}</label>
    )
}
