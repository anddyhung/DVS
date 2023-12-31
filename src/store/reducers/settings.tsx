import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Account, Organization } from 'types/user-profile';
import axiosServices from 'utils/axios';
import { RootState } from 'store';
import { openSnackbar } from './snackbar';

export const setAccountSettings = (account: Account) => async (dispatch: any) => {
  try {
    const response = await axiosServices.put('/api/v1/user/update-account', {
      firstName: account.firstName,
      lastName: account.lastName,
      password: account.password,
      phoneNumber: account.phoneNumber
    });
    console.log(account);
    if (response.status === 200) {
      dispatch(setSetting(response.data));
      dispatch(
        openSnackbar({
          open: true,
          message: 'Account information changed successfully',
          variant: 'alert',
          alert: {
            color: 'success'
          },
          close: 'true'
        })
      );
    } else {
      dispatch(
        openSnackbar({
          open: true,
          message: 'Please try again.',
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

export const setOrganizationSettings = (organization:Organization)=>async(dispatch:any)=>{
  try{
    const response = await axiosServices.post('/api/v1/user/client-organization',{organization});
    if(response.status ===200){
      dispatch(setOrganizationInfo(response.data[0].organizationSettings));
    }else {
      dispatch(
        openSnackbar({
          open: true,
          message: 'Please try again.',
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
interface SettingState {
  accountSetting: Account | null;
  organizationSetting:Organization|null;
}

const initialState: SettingState = {
  accountSetting: null,
  organizationSetting:null
};

export const settingSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setSetting: (state, action: PayloadAction<Account | any>) => {
      state.accountSetting = action.payload;
    },
    setOrganizationInfo: (state, action:PayloadAction<Organization|null>)=>{
      state.organizationSetting = action.payload;
    }
  }
});
export const { setSetting, setOrganizationInfo } = settingSlice.actions;
export const selectedJobs = (state: RootState) => state.jobs;
export default settingSlice.reducer;
