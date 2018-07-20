import React from 'react';

export const CoinCell = ({ value }) => (
	<div>
		{value}
	</div>
);

export const PriceCell = ({ value }) => (
	<div>
		$ {value}
	</div>
);

export const MarketCapCell = ({ value }) => (
	<div>
		$ {value}
	</div>
);

export const PercentCell = ({ value }) => (
	<div>
		{value}
	</div>
);