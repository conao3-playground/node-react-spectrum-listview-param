import {defaultTheme, Flex, Item, ListData, ListView, Provider, SpectrumListViewProps, useListData} from '@adobe/react-spectrum';

interface Item {
  id: string;
  name: string;
}

interface MyListViewProps_<T> extends SpectrumListViewProps<T> {
  lst: ListData<T>;
}

type MyListViewProps<T> = Omit<MyListViewProps_<T>, 'children'>;

function MyListView<T extends Item>(props: MyListViewProps<T>) {
  const { lst, ...otherProps } = props;
  return (
    <ListView items={lst.items} {...otherProps} >
      {item => (
        <Item key={item.id}>
          {item.name}
        </Item>
      )}
    </ListView>
  );
}

export function App() {
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
        <MyListView minWidth="size-3000" lst={lst} />
      </Flex>
    </Provider>
  );
}
