import styled from 'styled-components'
import PropTypes from 'prop-types'

// 

export const Subheading = styled.h4`
    font-family: var(--font-heading);
    color: var(--color-primary);
    text-align: left;
    ${ props => props.center && 'text-align: center;' }
    ${ props => props.right && 'text-align: right;' }
`

Subheading.propTypes = {
    children: PropTypes.node.isRequired,
}
