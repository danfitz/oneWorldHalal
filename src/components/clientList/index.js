import React from 'react';
import { string, object, shape, arrayOf } from 'prop-types';
import { Box } from 'rebass/styled-components';
import ListBlock from '../listBlock';
import { Image } from '../index';

const ClientList = ({ title, subtitle, backgroundImage, clients }) => {
  return (
    <ListBlock
      title={title}
      subtitle={subtitle}
      backgroundImage={backgroundImage}
    >
      {clients.map(client => (
        <Box as='li' key={client.name} bg='trueWhite' p='md'>
          <Image fluid={client.logo.fluid} alt={client.name} />
        </Box>
      ))}
    </ListBlock>
  );
};

ClientList.propTypes = {
  title: string.isRequired,
  subtitle: string.isRequired,
  backgroundImage: shape({
    fluid: object.isRequired,
  }),
  clients: arrayOf(
    shape({
      name: string.isRequired,
      logo: shape({
        fluid: object.isRequired,
      }),
    })
  ),
};

export default ClientList;
