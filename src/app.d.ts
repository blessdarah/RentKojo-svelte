// See https://kit.svelte.dev/docs/types#app

import type { Component } from 'gridjs';
import type { ComponentType } from 'svelte';

// for information about these interfaces
declare global {
	namespace App {
		type TableColumn = {
			title: string;
			dataIndex: string;
			sortOrder?: 'asc' | 'desc';
			sortMethod?: () => null;
			sortIcon?: string;
			align?: 'left' | 'right' | 'center';
			formatWith?: (row: any) => any;
			fromComponent?: ComponentType;
		};

		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}
}

export {};
