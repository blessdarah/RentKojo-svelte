export const productTableColumns: App.TableColumn[] = [
	{
		title: 'id',
		dataIndex: 'id'
	},
	{
		title: 'Name',
		dataIndex: 'name'
	},
	{
		title: 'Condition',
		dataIndex: 'condition'
	},
	{
		title: 'Amount',
		dataIndex: 'amount',
		align: 'right',
		formatWith: (item) => Number(item * 1000).toFixed(2)
	},
	{
		title: 'Duration',
		dataIndex: 'durationOfRentage'
	},
	{
		title: 'Available from',
		dataIndex: 'availabilityStartDate',
		formatWith: (item) => new Date(item).toDateString()
	}
];
