import { createSlice } from "@reduxjs/toolkit";
import {
  deleteEmailAction,
  deleteMailFromInboxAction,
  deleteMailFromOutboxAction,
  getEmailAction,
  getEmailDataAction,
  sendEmailAction,
  updateReadMailAction,
} from "../Reducer/asyncEmailReducer";

const initialState = {
  emailList: undefined,
  changed: false,
  inboxEmail: null,
  outboxEmail: null,
  Inbox: [],
  Outbox: [],
};
const emailSlice = createSlice({
  name: "email",
  initialState,
  reducers: {
    openInboxEmailDetail: (state, action) => {
      state.inboxEmail = action.payload;
    },
    openOutboxEmailDetail: (state, action) => {
      state.outboxEmail = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(sendEmailAction.fulfilled, (state, action) => {
      console.log(action.payload);
      state.changed = true;
    });
    builder.addCase(getEmailDataAction.fulfilled, (state, action) => {
      state.changed = false;
      const outboxEmailList = action.payload.outboxEmailList;
      console.log(outboxEmailList);
      const inboxEmailList = action.payload.inboxEmailList;
      console.log(inboxEmailList);
      state.Outbox = outboxEmailList;
      state.Inbox = inboxEmailList;
    });

    builder.addCase(deleteMailFromInboxAction.fulfilled, (state, action) => {
      state.changed = true;
    });
    builder.addCase(deleteMailFromOutboxAction.fulfilled, (state, action) => {
      state.changed = true;
    });
    builder.addCase(updateReadMailAction.fulfilled, (state, action) => {
      //  state.Inbox = action.payload;
      // const mailToBeUpdated = action.payload;
      // state.changed = true;
      // console.log("update read mail : 6", mailToBeUpdated);
      // const updatedList = state.Inbox.filter(
      //   (mail) => mailToBeUpdated.uniqueName !== mail.uniqueName
      // );
      // state.Inbox = updatedList;
      // state.Inbox.push(mailToBeUpdated);
    });
  },
});

export default emailSlice;
export const emailAction = emailSlice.actions;
