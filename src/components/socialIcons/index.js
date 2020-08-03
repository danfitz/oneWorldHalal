import React from 'react';
import { arrayOf, shape, string } from 'prop-types';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { Box } from 'rebass/styled-components';
import { Link } from '../index';
import theme from '../../theme';

const SocialIcons = ({ brands }) => (
  <Box
    as='ul'
    sx={{ listStyle: 'none', pl: 0 }}
    display='flex'
    justifyContent='center'
  >
    {brands.map((brand, i) => (
      <Box as='li' key={brand.name} sx={{ ':not(:last-child)': { mr: 'lg' } }}>
        <Link
          to={brand.url}
          sx={{
            color: 'orange',
            ':focus, :hover': {
              color: 'white',
            },
          }}
        >
          <span className='visuallyHidden'>{brand.name}</span>
          <Icon icon={['fab', brand.name]} className='fa-2x' />
        </Link>
      </Box>
    ))}
  </Box>
);

SocialIcons.propTypes = {
  brands: arrayOf(
    shape({
      url: string.isRequired,
      name: string.isRequired,
    })
  ).isRequired,
};

export default SocialIcons;
