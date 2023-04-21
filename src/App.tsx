import {defaultTheme, Flex, Item, ListData, ListView, Provider, SpectrumListViewProps, useListData} from '@adobe/react-spectrum';
import { forwardRef, useRef } from 'react';

interface Item {
  id: string;
  name: string;
}

type MyListViewProps<T> = Omit<SpectrumListViewProps<T> & { lst: ListData<T> }, 'children'>;

const MyListView = forwardRef(<T extends Item>(props: MyListViewProps<T>, ref: any) => {
  const { lst, ...otherProps } = props;
  return (
    <ListView items={lst.items} {...otherProps} ref={ref} >
      {item => (
        <Item key={item.id}>
          {item.name}
        </Item>
      )}
    </ListView>
  );
});

export function App() {
  const ref = useRef();
  const lst = useListData({
    initialItems: [
      { id: '1', name: 'Adobe Photoshop' },
      { id: '2', name: 'Adobe XD' },
      { id: '3', name: 'Adobe InDesign' },
      { id: '4', name: 'Adobe AfterEffects' }
    ]
  });

  return (
    <Provider theme={defaultTheme}>
      <Flex minHeight="100vh">
        <MyListView minWidth="size-3000" lst={lst} ref={ref} />
      </Flex>
    </Provider>
  );
}
