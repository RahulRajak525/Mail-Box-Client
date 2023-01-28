import { createAsyncThunk } from "@reduxjs/toolkit";
import { ApiEmailService } from "../Services/apiEmailServices";

export const sendEmailAction = createAsyncThunk(
  "sendEmailAction",
  async (credentials, thunkAPI) => {
    console.log(credentials);
    const outboxResponse = await ApiEmailService.sendEmailReceiver(credentials);
    const inboxResponse = await ApiEmailService.sendEmailSender(credentials);
    console.log("20", response);
    const response = {
      outboxResponse: outboxResponse,
      inboxResponse: inboxResponse,
    };

    return response;
  }
);

export const deleteMailFromOutboxAction = createAsyncThunk(
  "deleteMailFromOutboxAction",
  async (mailInfo, thunkAPI) => {
    console.log("2");
    const outboxResponse = await ApiEmailService.deleteMailFromOutbox(mailInfo);
    console.log("5", outboxResponse);
    return mailInfo;
  }
);

export const deleteMailFromInboxAction = createAsyncThunk(
  "deleteMailFromInboxAction",
  async (mailInfo, thunkAPI) => {
    console.log("2");
    const inboxResponse = await ApiEmailService.deleteMailFromInbox(mailInfo);
    console.log("5", inboxResponse);
    return mailInfo;
  }
);

export const getEmailDataAction = createAsyncThunk(
  "getEmailDataAction",
  async (senderEmail, thunkAPI) => {
    const response = await ApiEmailService.getEmailData(senderEmail);
    const outBoxData = response.Outbox;
    console.log(outBoxData);

    const outboxEmailList = [];
    for (const key in outBoxData) {
      const newMail = outBoxData[key];
      outboxEmailList.push({
        receiverEmail: newMail.receiverEmail,
        emailSubject: newMail.emailSubject,
        emailContent: newMail.emailContent,
        senderEmail: newMail.senderEmail,
        uniqueId: newMail.uniqueId,
        uniqueName: key,
        mailReadStatus: newMail.mailReadStatus,
        dateOfMail: newMail.dateOfMail,
      });
    }

    const inboxData = response.Inbox;
    console.log(inboxData);
    const inboxEmailList = [];
    for (const key in inboxData) {
      const newMail = inboxData[key];
      inboxEmailList.push({
        receiverEmail: newMail.receiverEmail,
        senderEmail: newMail.senderEmail,
        emailSubject: newMail.emailSubject,
        emailContent: newMail.emailContent,
        uniqueId: newMail.uniqueId,
        uniqueName: key,
        mailReadStatus: newMail.mailReadStatus,
        dateOfMail: newMail.dateOfMail,
      });
    }

    return {
      outboxEmailList: outboxEmailList,
      inboxEmailList: inboxEmailList,
    };
  }
);

export const updateReadMailAction = createAsyncThunk(
  "updateReadMailAction",
  async (mailInfo, thunkAPI) => {
    console.log("update read mail : 2");
    const changedReadStatus = await ApiEmailService.updateMailReadStatus(
      mailInfo
    );
    console.log("update read mail : 5");
    console.log(changedReadStatus);
    return changedReadStatus;
  }
);
