import React, { useState } from "react";
import dynamic from "next/dynamic";
import { Box } from "@chakra-ui/react";
const Loader = dynamic(()=>import('../../components/Loader/Loader'))
const SignUp = dynamic(() => import('../../components/SignUp/SignUp'), {
  ssr: false,
  loading: () => <Box mt={40}><Loader/></Box>,
})
const OtpForm = dynamic(()=>import("../../components/OtpForm"))

const SignupContainer = () => {
  const [isUserCreated, setIsUserCreated] = useState(false);
  const [user, setUser] = useState([]);

  const handleuserCreation = (value) => {
    setUser(value);
  };
  return (
    <>
      <Box mt={[32,32,32,40]}>
        {isUserCreated ? (
          <OtpForm data={user} />
        ) : (
          <SignUp handleUser={setIsUserCreated} user={handleuserCreation} />
        )}
      </Box>
    </>
  );
};

export default SignupContainer;
