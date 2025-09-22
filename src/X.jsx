import PropTypes from 'prop-types';
export default function X({size, fill})
{
  return <svg xmlns="http://www.w3.org/2000/svg" height={size} viewBox="0 -960 960 960" width={size} fill={fill}><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
}

X.propTypes = {
  size: PropTypes.string.isRequired, 
  fill: PropTypes.string.isRequired
};

