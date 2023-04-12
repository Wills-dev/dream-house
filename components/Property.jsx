import Link from "next/link";
import Image from "next/image";
import { Flex, Box, Text, Avatar } from "@chakra-ui/react";
import millify from "millify";
import defaultImage from "../assests/images/houseThree.jpg";

const Property = ({ property: coverPhoto, externalID }) => {
  return (
    <Link href={`/property/${externalID}`} passHref>
      <Flex
        flexWrap="wrap"
        w="420px"
        p="5"
        paddingTop="0"
        justifycontent="flex-start"
      >
        <Box>
          <Image src={coverPhoto ? coverPhoto.url : defaultImage} />
        </Box>
      </Flex>
    </Link>
  );
};

export default Property;
