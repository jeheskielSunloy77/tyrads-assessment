const baseData = [
	{ date: new Date(2023, 0, 1), expenses: 4000, income: 2400 },
	{ date: new Date(2023, 1, 1), expenses: 3000, income: 1398 },
	{ date: new Date(2023, 2, 1), expenses: 2000, income: 9800 },
	{ date: new Date(2023, 3, 1), expenses: 2780, income: 3908 },
	{ date: new Date(2023, 4, 1), expenses: 1890, income: 4800 },
	{ date: new Date(2023, 5, 1), expenses: 2390, income: 3800 },
]

export interface FinanceData {
	date: Date
	expenses: number
	income: number
	balance: number
}

export const financesData: FinanceData[] = baseData.map((item) => {
	const balance = item.income - item.expenses
	return { ...item, balance }
})

const thisMonthFinanceData = financesData[financesData.length - 1]

export const balanceDiffFromLastMonth: number =
	(thisMonthFinanceData.balance /
		financesData[financesData.length - 2].balance) *
	100

export const thisMonthExpensesPercentage: number = Math.round(
	(thisMonthFinanceData.balance / thisMonthFinanceData.expenses) * 100
)

export const todosData = [
	{ name: 'Done', value: 30, fill: '#8b5cf6' },
	{ name: 'In progress', value: 20, fill: '#f59e0b' },
	{ name: 'Todo', value: 50, fill: '#ef4444' },
]

export const transactions = [
	{
		date: randDate(new Date(2023, 9, 1), new Date(2023, 11, 1)),
		name: 'Salary',
		amount: 2400,
		type: 'income',
		image: '/icons/work.svg',
	},
	{
		date: randDate(new Date(2023, 9, 1), new Date(2023, 11, 1)),
		name: 'Car Repair',
		amount: 800,
		type: 'expense',
		image: '/icons/tools.svg',
	},
	{
		date: randDate(new Date(2023, 9, 1), new Date(2023, 11, 1)),
		name: 'Restaurant Bill',
		amount: 100,
		type: 'expense',
		image: '/icons/restaurant.svg',
	},
	{
		date: randDate(new Date(2023, 9, 1), new Date(2023, 11, 1)),
		name: 'Rent',
		amount: 1500,
		type: 'expense',
		image: '/icons/home.svg',
	},
	{
		date: randDate(new Date(2023, 9, 1), new Date(2023, 11, 1)),
		name: 'Freelance Work',
		amount: 1800,
		type: 'income',
		image: '/icons/freelance-work.svg',
	},
	{
		date: randDate(new Date(2023, 9, 1), new Date(2023, 11, 1)),
		name: 'Groceries',
		amount: 200,
		type: 'expense',
		image: '/icons/groceries.svg',
	},
].sort((a, b) => b.date.getTime() - a.date.getTime())

export type Transaction = (typeof transactions)[number]

function randDate(start: Date, end: Date): Date {
	return new Date(
		start.getTime() + Math.random() * (end.getTime() - start.getTime())
	)
}

export const shoppingList = [
	{
		id: 'shopping-list-1',
		name: 'Milk',
		checked: false,
	},
	{
		id: 'shopping-list-2',
		name: 'Basket of eggs',
		checked: false,
	},
	{
		id: 'shopping-list-3',
		name: 'Comic books',
		checked: true,
	},
	{
		id: 'shopping-list-4',
		name: 'New phone',
		checked: false,
	},
]

export type ShoppingListItem = (typeof shoppingList)[number]

export interface ChatMessage {
	from: string
	message: string
	date: Date
}

export const chatMessages: ChatMessage[] = [
	{
		from: 'Me',
		message: 'Are you ready?',
		date: new Date(Date.now() - 1000 * 60 * 2),
	},
	{
		from: 'Ester Howard',
		message: 'Yes, lets go!',
		date: new Date(),
	},
]
