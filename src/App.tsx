import {defaultTheme, Flex, Item, ListView, Provider} from '@adobe/react-spectrum';

export function App() {
  return (
    <Provider theme={defaultTheme}>
      <Flex minHeight="100vh">
        <ListView minWidth="size-3000">
          <Item>Item 1</Item>
          <Item>Item 2</Item>
          <Item>Item 3</Item>
        </ListView>
      </Flex>
    </Provider>
  );
}
