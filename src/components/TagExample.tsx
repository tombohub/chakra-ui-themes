import {
  Tag,
  TagLabel,
  TagLeftIcon,
  TagRightIcon,
  TagCloseButton,
  HStack,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

export default function TagExample() {
  return (
    <HStack>
      <Tag>Sample Tag</Tag>;
      <Tag>
        <TagLeftIcon as={AddIcon} />
        <TagLabel>LeftIcon</TagLabel>
      </Tag>
      <Tag>
        <TagLabel>RightIcon</TagLabel>
        <TagRightIcon as={AddIcon} />
      </Tag>
      <Tag>
        <TagLabel>Close</TagLabel>
        <TagCloseButton />
      </Tag>
    </HStack>
  );
}
