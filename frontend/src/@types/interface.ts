interface Stylesheet {
	[key: string]: React.CSSProperties;
}

// ==========================
// Request Types
// ==========================
interface IDefaultReturn {
	success: boolean;
}

interface IRequest {
	endpoint: string;
	headers?: Record<string, unknown>;
	params?: Record<string, unknown>;
	data?: Record<string, unknown>;
}

interface IEndpointJobs extends IDefaultReturn {
	jobs: IDataJob[];
}

interface IEndpointJob extends IDefaultReturn {
	job: IDataJob;
}

// ==========================
// Data Types
// ==========================
interface IDataJob {
	job_id: number | string;
	title: string;
	activation_date: string;
	active: boolean;
	salary_from: number;
	salary_to: number;
	salary_period: TSalaryPeriod;
	logo_url: string;
	company_name: string;
	employ_fulltime: boolean;
	employ_contract: boolean;
	employ_parttime: boolean;
}

// ==========================
// Others Types
// ==========================
interface IJobsFilter {
	pageSize?: number;
	keyword?: string;
}

interface ICreateNewJob {
	title: string;
	salary_from: number;
	salary_to: number;
	salary_period: TSalaryPeriod;
}
