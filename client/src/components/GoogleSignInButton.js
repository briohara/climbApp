import React, { useEffect, useState } from "react";

const GOOGLE_BUTTON_ID = "google-sign-in-button";

const GoogleSignIn = props => {
  useEffect(() => {
    window.gapi.signin2.render(GOOGLE_BUTTON_ID, {
      width: 200,
      height: 50,
      onsuccess: props.onSuccess
    });
  });

  return <div id={GOOGLE_BUTTON_ID} />;
};

export default GoogleSignIn;
