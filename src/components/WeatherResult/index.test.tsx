import React from 'react';
import { render } from '@testing-library/react';
import WeatherResult from '.';

test('renders learn react link', () => {
  const { getByText } = render(<WeatherResult />);
});
