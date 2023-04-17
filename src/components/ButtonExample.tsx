import { Button, Stack } from "@chakra-ui/react";

export default function ButtonExample() {
  return (
    <Stack direction="row" spacing={4} align="center">
      <Button variant="solid">Button</Button>
      <Button variant="outline">Button</Button>
      <Button variant="ghost">Button</Button>
      <Button variant="link">Button</Button>
      <Button colorScheme="yellow">Yellow</Button>
    </Stack>
  );
}
