import styled from 'styled-components'
import PropTypes from 'prop-types'

export const Meta = styled.div`
    text-align: inherit;
    margin-bottom: 1rem;
    font-weight: 300;
    color: var(--color-grey);
`

Meta.propTypes = {
    children: PropTypes.node.isRequired,
}

