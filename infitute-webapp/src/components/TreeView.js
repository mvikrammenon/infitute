import { UncontrolledTreeEnvironment, Tree, StaticTreeDataProvider } from 'react-complex-tree';
import 'react-complex-tree/lib/style.css';
import { longTree } from '../data/treeData';


export default function TreeView({onSelectCallback=(items, treeId) => console.log("Failed to provide props: ", items, treeId)}) {
  return (
    <UncontrolledTreeEnvironment
      dataProvider={
        new StaticTreeDataProvider(longTree.items, (item, data) => ({
          ...item,
          data
        }))
      }
      getItemTitle={(item) => item.data}
      viewState={{
        "tree-1": {
          expandedItems: ["Fruit"]
        }
      }}
      onPrimaryAction={onSelectCallback}
    >
      <Tree treeId="tree-1" rootItem="root" />
    </UncontrolledTreeEnvironment>
  );
}