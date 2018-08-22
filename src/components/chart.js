import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

function average(data) {
	console.log(data);
	let sum = data.reduce(function(acc, num) {
		return (acc += num);
	}, 0);
	return Math.floor(sum / data.length);
}

export default props => {
	return (
		<div>
			<Sparklines height={120} width={180} data={props.data}>
				<SparklinesLine color={props.color} />
				<SparklinesReferenceLine type="avg" />
			</Sparklines>
			<div>
				{average(props.data)} {props.units}
			</div>
		</div>
	);
};
