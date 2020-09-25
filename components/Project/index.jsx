import PropTypes from 'prop-types'

const Project = ({ name, category }) => (
  <ul>
    <li>
      <strong>{name}</strong> ({category})
    </li>
  </ul>
)

Project.defaultProps = {
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
}

export default Project
