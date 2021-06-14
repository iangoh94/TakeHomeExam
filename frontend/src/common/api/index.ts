import { get, patch, post, del } from './main.api';

export const getJobs = async (
	filters?: IJobsFilter
): Promise<IEndpointJobs> => {
	const request: IRequest = {
		endpoint: 'jobs',
		params: { ...filters }
	};

	return await get<IEndpointJobs>(request);
};

export const getJob = async (jobId: string | number): Promise<IEndpointJob> => {
	const request: IRequest = {
		endpoint: 'job',
		params: { job_id: jobId }
	};

	return await get<IEndpointJob>(request);
};

export const createJob = async (job: ICreateNewJob): Promise<IEndpointJob> => {
	const request: IRequest = {
		endpoint: 'job',
		params: { ...job }
	};

	return await get<IEndpointJob>(request);
};
