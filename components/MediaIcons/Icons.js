import { Link } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
const Icons = () => {
  
  return (
    <>
      <Link
        href={"https://www.facebook.com/Quixgo/" ?? ""}
        target="_blank"
        aria-label="Facebook"
      >
        <FaFacebook fontSize="19px" color="blue" />
      </Link>
      <Link
        href={"https://twitter.com/QUIXGO1" ?? ""}
        target="_blank"
        aria-label="Twitter"
      >
        <FaTwitter fontSize="19px" color="#00acee" />
      </Link>
      <Link
        href={"https://www.linkedin.com/company/quixgo-infotech-pvt-ltd" ?? ""}
        target="_blank"
        aria-label="Linkedin"
      >
        <FaLinkedin fontSize="19px" color="blue" />
      </Link>
      <Link
        href={"https://www.instagram.com/quixgo/" ?? ""}
        target="_blank"
        aria-label="Instagram"
      >
        <Image
          src="/graphics/Instagram-Logo.webp"
          alt="Quixgo instagram handle"
          width="37"
          height="10"
        />
      </Link>
    </>
  );
};

export default Icons;
