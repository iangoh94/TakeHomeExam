import * as React from 'react';
import { Card, Col, Row, Skeleton, Typography } from 'antd';
import moment from 'moment';

const { memo } = React;

interface IProps {
	job: IDataJob;
	loading: boolean;
}

const JobCard: React.FC<IProps> = memo(props => {
	const { job, loading } = props;
	const { Text } = Typography;
	const salaryPeriodCaps = job.salary_period.charAt(0).toUpperCase() + job.salary_period.slice(1)
	const salary = `$${job.salary_from} to $${job.salary_to} (${salaryPeriodCaps})`

	const employmentTypes = [
		job.employ_fulltime ? 'Full Time' : undefined,
		job.employ_contract ? 'Contract' : undefined,
		job.employ_parttime ? 'Part Time' : undefined
	];

	const employmentTypesDisplay = employmentTypes.map(et => {
		if (et) {
			return (
				<Text keyboard>{et}</Text>
			)
		}
	});
	
	return (
		<Card 
			hoverable
			style={s.card}
			cover={
				<Row justify="center" align="middle" style={{ display: 'flex' }}>
					<img alt={job.company_name} src={job.logo_url} style={{ width: '50%', minWidth: 200 }} />
				</Row>
			}
		>
			<Skeleton loading={loading} active avatar>
				<p style={s.title}>{job.title}</p>
				
				<p style={s.salary}>{salary}</p>
				<p>{moment(new Date(job.activation_date).toLocaleDateString()).fromNow()}</p>

				<Row gutter={20}>{employmentTypesDisplay}</Row>
			</Skeleton>
		</Card>
	);
});

const s: Stylesheet = {
	title: {
		textAlign: 'center',
		fontSize: 20,
		fontWeight: 'bolder'
	},
	salary: {
		fontFamily: 'monospace',
		fontSize: 18,
		fontWeight: 'bolder',
		color: 'blue',
	},
	card: {
		minWidth: 400,
		boxShadow: '0 2.8px 2.2px rgba(0, 0, 0, 0.034), 0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06), 0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),0 100px 80px rgba(0, 0, 0, 0.12)'
	}
};

export default JobCard;
