import axios from "axios";
import { toast } from "react-toastify";
import {
  REGISTER_USER_URL,
  RESEND_OTP_URL,
  VERIFY_OTP_URL,
  TRACK_ITEM_URL,
  GET_AWB_STATUS_URL
} from "../components/utils/api";
const loginUrl = process.env.NEXT_PUBLIC_LOGIN_URL;

export const userCreated = async (props) => {
  const registerUrl = `${process.env.NEXT_PUBLIC_BASEURL}${REGISTER_USER_URL}`;
  try {
    const registerCall = await axios({
      url: registerUrl,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        
      },
      data: props,
    });

    if (registerCall && registerCall.status === 200) {
      toast.success("User created... Please varify by OTP ");
      return { success: true, data: registerCall.data };
    } else if (registerCall.response.status === 409) {
      let message = registerCall.response.data;
      toast.error(message);
      return { success: false, data: registerCall.data };
    }
  } catch (err) {
    toast.error(err.response ? err.response.data : err.message);
    return { success: false, data: err };
  }
};
export const otpVerified = async (props) => {
  const verifyUserUrl = `${process.env.NEXT_PUBLIC_BASEURL}${VERIFY_OTP_URL}`;
  try {
    const verifyOtpValues = await axios({
      url: verifyUserUrl,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "force-cache",
      },
      data: props,
      
    });

    if (
      verifyOtpValues &&
      verifyOtpValues.status === 200 &&
      !verifyOtpValues.data.error
    ) {
      toast.success("OTP verfied");
      window.location.replace(loginUrl);
      console.log("otp verification status");
    } else {
      toast.error(verifyOtpValues.data.error);
    }
  } catch (err) {
    toast.error(err.response ? err.response.data.error : err.message);
  }
};

export const ResendOtp = async (params) => {
  try {
    const otpUrl = `${process.env.NEXT_PUBLIC_BASEURL}${RESEND_OTP_URL}`;
    const otpEmailValues = await axios({
      url: otpUrl,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "force-cache",
      },
      data: params,
    });

    if (otpEmailValues && otpEmailValues.status === 200) {
      toast.success("Email Sent Successfully");
    }
  } catch (err) {
    toast.error(err.response ? err.response.data.error : err.message);
    console.log(err);
  }
};

export const trackItem = async (params,setLoading) => {
  const trackUrl = `${process.env.NEXT_PUBLIC_BASEURL}${TRACK_ITEM_URL}`;

  try {
    setLoading(true)
    const trackItemCall = await axios({
      method: "POST",
      url: trackUrl,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "force-cache",
      },
      data: params,
    });

    if (trackItemCall && trackItemCall.status === 200) {
      setLoading(false)
      toast.success("Your Order Status is available");
      return  trackItemCall.data ;
    }
  } catch (err) {
    setLoading(false)
    toast.error(err.response ? err.response.data : err.message);
  }
};




