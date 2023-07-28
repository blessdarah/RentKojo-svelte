export type Product = {
	id: string;
	name: string;
	description: string;
	longDescription: string;
	amount: number;
	condition: string;
	duration: number;
	availabilityStartDate: Date;
	availabilityEndDate: Date;
	availabilityStartTime: Date;
	availabilityEndTime: Date;
};

export const emptyProduct = {
	id: '',
	name: '',
	description: '',
	longDescription: '',
	amount: 0,
	condition: '',
	duration: 0,
	availabilityStartDate: new Date(),
	availabilityEndDate: new Date(),
	availabilityStartTime: new Date(),
	availabilityEndTime: new Date()
};
