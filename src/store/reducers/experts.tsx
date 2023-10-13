import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Expert } from 'types/expert';
import axiosServices from 'utils/axios';
import { RootState } from 'store';
import { openSnackbar } from './snackbar';
import { ExpertsProfile } from 'types/experts-profile';
export const createExpert = (data: ExpertsProfile) => async (dispatch: any) => {
  try {
    const response = await axiosServices.post('/api/v1/user/expert', data);
    if (response.status === 200) {
      dispatch(addExpert(response.data));
    } else {
      dispatch(
        openSnackbar({
          opne: true,
          message: 'Network Error.',
          variant: 'alert',
          alert: {
            color: 'error'
          },
          close: true
        })
      );
    }
  } catch {
    dispatch(
      openSnackbar({
        opne: true,
        message: 'Network Error.',
        variant: 'alert',
        alert: {
          color: 'error'
        },
        close: true
      })
    );
  }
};

export const getCurrentUser = () => async (dispatch: any) => {
  try {
    const response = await axiosServices.get('/api/v1/user/current');
    if (response.status === 200) {
      dispatch(setCurrentUser(response.data));
    } else {
      dispatch(
        openSnackbar({
          opne: true,
          message: 'Network Error.',
          variant: 'alert',
          alert: {
            color: 'error'
          },
          close: true
        })
      );
    }
  } catch {
    dispatch(
      openSnackbar({
        opne: true,
        message: 'Network Error.',
        variant: 'alert',
        alert: {
          color: 'error'
        },
        close: true
      })
    );
  }
};

export const getAllExperts = () => async (dispatch: any) => {
  try {
    const response = await axiosServices.get('/api/experts/all');
    if (response.status === 200) {
      dispatch(setExperts(response.data));
    } else {
      dispatch(
        openSnackbar({
          open: true,
          message: 'Connection error, Please reload page.',
          variant: 'alert',
          alert: {
            color: 'error'
          },
          close: true
        })
      );
    }
  } catch (error: any) {
    dispatch(
      openSnackbar({
        open: true,
        message: error[0].message,
        variant: 'alert',
        alert: {
          color: 'error'
        },
        close: true
      })
    );
  }
};

export const getRecommendedExperts = (id: string) => async (dispatch: any) => {
  try {
    const response = await axiosServices.post(`/api/v1/user/recommended-expert`, { _id: id });
    if (response.status === 200) {
      dispatch(setRecommededExperts(response.data[0].expert));
    } else {
      dispatch(
        openSnackbar({
          open: true,
          message: 'Connection error, Please reload page.',
          variant: 'alert',
          alert: {
            color: 'error'
          },
          close: true
        })
      );
    }
  } catch (error: any) {
    dispatch(
      openSnackbar({
        open: true,
        message: error[0].message,
        variant: 'alert',
        alert: {
          color: 'error'
        },
        close: true
      })
    );
  }
};

export const getHiredExperts = () => async (dispatch: any) => {
  try {
    const response = await axiosServices.get(`/api/v1/experts/hired-experts`);
    if (response.status === 200) {
      dispatch(setHiredExperts(response.data));
    } else {
      dispatch(
        openSnackbar({
          open: true,
          message: 'Connection error, Please reload page.',
          variant: 'alert',
          alert: {
            color: 'error'
          },
          close: true
        })
      );
    }
  } catch (error: any) {
    dispatch(
      openSnackbar({
        open: true,
        message: error[0].message,
        variant: 'alert',
        alert: {
          color: 'error'
        },
        close: true
      })
    );
  }
};

export const getExpert = (expertId: string) => async (dispatch: any) => {
  try {
    const response = await axiosServices.get(`api/expert/${expertId}`);
    if (response.status === 200) {
      return response.data;
    } else {
      dispatch(
        openSnackbar({
          open: true,
          message: 'Connection error, Please reload page.',
          variant: 'alert',
          alert: {
            color: 'error'
          },
          close: true
        })
      );
    }
  } catch (error: any) {
    dispatch(
      openSnackbar({
        open: true,
        message: error[0].message,
        variant: 'alert',
        alert: {
          color: 'error'
        },
        close: true
      })
    );
  }
};

export const findExpert = (keyword: string) => async (dispatch: any) => {
  try {
    const response = await axiosServices.post(`api/v1/expert/`, { keyword });
    if (response.status === 200) {
      return response.data;
    } else {
      dispatch(
        openSnackbar({
          open: true,
          message: 'Connection error, Please reload page.',
          variant: 'alert',
          alert: {
            color: 'error'
          },
          close: true
        })
      );
    }
  } catch (error: any) {
    dispatch(
      openSnackbar({
        open: true,
        message: error[0].message,
        variant: 'alert',
        alert: {
          color: 'error'
        },
        close: true
      })
    );
  }
};

export const updateExpert = (expert: ExpertsProfile) => async (dispatch: any) => {
  try {
    const response = await axiosServices.post(`/api/v1/user/expert`, expert);
    if (response.status === 200) {
      dispatch(setExperts(response.data));
    } else {
      dispatch(
        openSnackbar({
          open: true,
          message: 'Connection error, Please reload page.',
          variant: 'alert',
          alert: {
            color: 'error'
          },
          close: true
        })
      );
    }
  } catch (error: any) {
    dispatch(
      openSnackbar({
        open: true,
        message: error[0].message,
        variant: 'alert',
        alert: {
          color: 'error'
        },
        close: true
      })
    );
  }
};
export const loadYearsOfExperience = () => async (dispatch: any) => {
  try {
    const response = await axiosServices.get('/api/v1/data/yearsOfExperience');
    if (response.status === 200) {
      dispatch(setYearsOfExperience(response.data));
    } else {
      dispatch(
        openSnackbar({
          open: true,
          message: 'Connection error, Please reload page.',
          variant: 'alert',
          alert: {
            color: 'error'
          },
          close: true
        })
      );
    }
  } catch (error: any) {
    dispatch(
      openSnackbar({
        open: true,
        message: error[0].message,
        variant: 'alert',
        alert: {
          color: 'error'
        },
        close: true
      })
    );
  }
};

export const filterExperts = (budget: string, skills: string[], experience: string, language: string[]) => {};

interface ExpertState {
  allExperts: Expert[];
  hiredExperts: Expert[];
  recommendedExperts: Expert[];
  yearsOfExperience: string[];
  currentUser: Expert[];
}

const initialState: ExpertState = {
  allExperts: [],
  hiredExperts: [],
  recommendedExperts: [],
  yearsOfExperience: [],
  currentUser: []
};

export const expertSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {
    setExperts: (state, action: PayloadAction<Expert[] | any>) => {
      state.allExperts = action.payload;
    },

    setRecommededExperts: (state, action: PayloadAction<Expert[] | any>) => {
      state.recommendedExperts = action.payload;
    },
    setHiredExperts: (state, action: PayloadAction<Expert[] | any>) => {
      state.hiredExperts = action.payload;
    },
    setYearsOfExperience: (state, action: PayloadAction<string[] | any>) => {
      state.yearsOfExperience = action.payload;
    },
    setCurrentUser: (state, action: PayloadAction<Expert | any>) => {
      state.currentUser = action.payload;
    },
    addExpert: (state, action: PayloadAction<Expert | any>) => {
      state.allExperts.push(action.payload);
    }
  }
});
export const { setExperts, setRecommededExperts, setHiredExperts, setYearsOfExperience, addExpert, setCurrentUser } = expertSlice.actions;
export const selectedJobs = (state: RootState) => state.jobs;
export default expertSlice.reducer;
