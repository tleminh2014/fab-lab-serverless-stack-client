const config = {
  s3: {
    REGION: "us-east-2",
    BUCKET: "notes-app-upload14",
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://oiapd1zneh.execute-api.us-east-2.amazonaws.com/prod",
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_kagu9Ptd1",
    APP_CLIENT_ID: "lvslmeiioodcb38cb26nqnr5",
    IDENTITY_POOL_ID: "us-east-2:a59eee79-32da-4f00-afcf-92172e775163",
  },
};

export default config;