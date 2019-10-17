import React from 'react'
import PropTypes from 'prop-types'

export const ExpandUpIcon = ({ color }) => (
    <svg fill={ color } height="16" width="16">
        <path d="M 7.9984227,4.229289 2.3415685,9.886143 3.0486752,10.59325 7.9984227,5.643503 12.948169,10.59325 13.655276,9.886143 Z" />
    </svg>
)

export const ExpandDownIcon = ({ color }) => (
    <svg width="16" height="16" fill={ color }>
        <path d="M 7.9984218,10.59325 13.655276,4.936396 12.948169,4.229289 7.9984218,9.179036 3.0486755,4.229289 2.3415685,4.936396 Z" />
    </svg>
)

const requiredProps = {
    color: PropTypes.string.isRequired,
}

const defaultProps = {
    color: '#ffffff',
}

ExpandUpIcon.propTypes = requiredProps
ExpandDownIcon.propTypes = requiredProps

ExpandUpIcon.defaultProps = defaultProps
ExpandDownIcon.defaultProps = defaultProps
