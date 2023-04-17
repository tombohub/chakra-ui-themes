import {
  Button,
  Card,
  CardBody,
  Text,
  Container,
  Checkbox,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Stack,
  HStack,
  IconButton,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  VStack,
  Radio,
  RadioGroup,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Select,
  Switch,
  Badge,
  Code,
  Divider,
  Kbd,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
} from "@chakra-ui/react";
import ButtonExample from "@/components/ButtonExample";

import { SearchIcon } from "@chakra-ui/icons";
import TableExample from "@/components/TableExample";

export default function Home() {
  return (
    <>
      <Container>
        <Card>
          <CardBody>
            <ButtonExample />
            <HStack>
              <Checkbox>Checkbox</Checkbox>
              <Checkbox defaultChecked>Checked</Checkbox>
              <Checkbox isDisabled>Disabled</Checkbox>
              <Checkbox isDisabled defaultChecked>
                Dis. Checked
              </Checkbox>
              <Checkbox isInvalid>Invalid</Checkbox>
            </HStack>

            <HStack>
              <FormControl>
                <FormLabel>Label</FormLabel>
                <Input type="email" />
                <FormHelperText>Helper text</FormHelperText>
              </FormControl>
              <FormControl isInvalid={true}>
                <FormLabel>Invalid</FormLabel>
                <Input type="email" />
                <FormErrorMessage>Error message</FormErrorMessage>
              </FormControl>
            </HStack>

            <VStack spacing={2}>
              <Input variant="outline" placeholder="Outline" />
              <Input variant="filled" placeholder="Filled" />
              <Input variant="flushed" placeholder="Flushed" />
              <Input variant="unstyled" placeholder="Unstyled" />
              <InputGroup>
                <InputLeftAddon>https://</InputLeftAddon>
                <Input placeholder="mysite" />
                <InputRightAddon>.com</InputRightAddon>
              </InputGroup>
            </VStack>

            <HStack>
              <RadioGroup defaultValue="1">
                <Radio value="1">Radio</Radio>
                <Radio value="2">Radio</Radio>
                <Radio isInvalid>Radio</Radio>
                <Radio isDisabled>Checked</Radio>
              </RadioGroup>
            </HStack>

            <HStack>
              <RangeSlider defaultValue={[10, 30]}>
                <RangeSliderTrack>
                  <RangeSliderFilledTrack />
                </RangeSliderTrack>
                <RangeSliderThumb index={0} />
                <RangeSliderThumb index={1} />
              </RangeSlider>
            </HStack>

            <HStack>
              <Select placeholder="Select option">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
            </HStack>

            <HStack>
              <Switch id="email-alerts" />
            </HStack>

            <HStack>
              <Badge>Default</Badge>
              <Badge colorScheme="green">Success</Badge>
              <Badge colorScheme="red">Removed</Badge>
              <Badge colorScheme="purple">New</Badge>
            </HStack>

            <HStack>
              <Code children="console.log(welcome)" />
              <Code colorScheme="red" children="var chakra = 'awesome!'" />
              <Code colorScheme="yellow" children="npm install chakra" />
            </HStack>

            <HStack>
              <Divider />
            </HStack>

            <HStack>
              <span>
                <Kbd>shift</Kbd> + <Kbd>H</Kbd>
              </span>
            </HStack>

            <HStack>
              <StatGroup>
                <Stat>
                  <StatLabel>Sent</StatLabel>
                  <StatNumber>345,670</StatNumber>
                  <StatHelpText>
                    <StatArrow type="increase" />
                    23.36%
                  </StatHelpText>
                </Stat>

                <Stat>
                  <StatLabel>Clicked</StatLabel>
                  <StatNumber>45</StatNumber>
                  <StatHelpText>
                    <StatArrow type="decrease" />
                    9.05%
                  </StatHelpText>
                </Stat>
              </StatGroup>
            </HStack>

            <TableExample />
          </CardBody>
        </Card>
      </Container>
    </>
  );
}
