import * as React from 'react';
import { Card } from 'antd';

const { memo } = React;

interface IProps {
	job: IDataJob;
}

const JobCard: React.FC<IProps> = memo(props => {
	const { job } = props;

	return (
		<Card hoverable>
			<p style={s.title}>{job.title}</p>

			<p>{job.salary_to}</p>
			<p>{job.salary_from}</p>
			<p>{job.salary_period}</p>
			<p>{new Date(job.activation_date).toLocaleDateString()}</p>
		</Card>
	);
});

const s: Stylesheet = {
	title: {
		textAlign: 'center',
		fontSize: 20,
		fontWeight: 'bold'
	}
};

export default JobCard;
