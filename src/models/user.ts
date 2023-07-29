export type User = {
	id: string;
	username: string;
	firstname: string;
	lastname: string;
	avatar: string;
	email: string;
	country: string;
	city: string;
	phoneNumber: string;
	whatsappNumber: string;
	address: string;
	verified: boolean;
};

export const emptyUser: User = {
	name: '',
	email: '',
	phoneNumber: '',
	address: ''
};
