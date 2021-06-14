import React, { memo } from 'react';
import { Provider } from 'react-redux';
import { store } from '../../state/store';

const ProviderLayer: React.FC = memo(({ children }) => {
	// This layer provides for redux or react component states
	return <Provider store={store}>{children}</Provider>;
});

export default ProviderLayer;
