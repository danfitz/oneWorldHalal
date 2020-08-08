import React from 'react';
import { Flex, Heading, Button } from 'rebass/styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { increment } from '../store/actions';
import { Link } from '../components';

const FourOhFour = () => {
  const dispatch = useDispatch();
  const count = useSelector(state => state.count);

  const incrementCount = () => dispatch(increment());

  return (
    <>
      <Flex as='main' flexDirection='column' alignItems='center'>
        <Heading as='h1' my='md'>
          Page Not Found
        </Heading>
        <Link to='/' display='block' mb='md'>
          Go Home
        </Link>
        <Button p='sm' onClick={incrementCount}>
          Increment: {count}
        </Button>
      </Flex>
    </>
  );
};

export default FourOhFour;
