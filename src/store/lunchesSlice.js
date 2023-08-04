import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useGetAllLunchesQuery } from "./services/spacexApi";

export const fetchLunches = createAsyncThunk(
	'lunches/fetchLunches',
	async function (_, { rejectWithValue }) {
		try {

			const { data: lunches, isLoading, isFetching, isError } = await useGetAllLunchesQuery();

			console.log("lunches/fetchLunches", lunches)
			if (!res) {
				throw new Error('Не прошёл запрос');
			}

			return lunches;

		} catch (error) {
			return rejectWithValue(error.message)
		}
	},
);

const setError = (state, action) => {
	state.status = 'rejected';
	state.error = action.payload;

}


const lunchesSlice = createSlice({
	name: 'lunches',
	initialState: {
		lunches: [],
		status: null,
		error: null,
	},
	reducers: {
		addLunche(state, action) {
			state.lunches.push({
				id: crypto.randomUUID(),
				text: action.payload.text,
				completed: false,
			})
		},
		removeLunches(state, action) {
			state.lunches = state.lunches.filter(todo => todo.id !== action.payload.id)
		},
		toggleLunchesComplete(state, action) {
			const toggleLunches = state.lunches.find(todo => todo.id === action.payload.id);
			toggleLunches.completed = !toggleTodo.completed;
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchLunches.pending, (state) => {
				state.status = 'loading';
				state.error = null;
			})
			.addCase(fetchLunches.fulfilled, (state, action) => {
				state.status = 'resolved';
				state.lunches = [...state.lunches, ...action.payload];

			})
			.addCase(fetchLunches.rejected, setError)
	},
});

export const { addLunche, removeLunches, toggleLunchesComplete } = lunchesSlice.actions;
export default lunchesSlice.reducer;