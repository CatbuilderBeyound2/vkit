import React from 'react';

import * as styles from './index.less';
import { Tree } from 'antd';
const { TreeNode } = Tree;

type Props = {
  tree: Object;
  onSelect?: Function;
  onCheck?: Function;
};
class Demo extends React.Component<Props> {
  state = {
    autoExpandParent: true,
    checkedKeys: [],
    selectedKeys: []
  };
  componentDidMount() {}
  onExpand = expandedKeys => {
    console.log('onExpand', expandedKeys);
    // if not set autoExpandParent to false, if children expanded, parent can not collapse.
    // or, you can remove all expanded children keys.
    this.setState({
      autoExpandParent: false
    });
  };

  onCheck = checkedKeys => {
    console.log('onCheck', checkedKeys);
    this.setState({ checkedKeys });
  };

  onSelect = (selectedKeys, info) => {
    console.log('onSelect', info, selectedKeys);
    this.setState({ selectedKeys });
  };

  renderTreeNodes = data =>
    data.map(item => {
      if (item.children) {
        return (
          <TreeNode title={item.title} key={item.key} dataRef={item}>
            {this.renderTreeNodes(item.children)}
          </TreeNode>
        );
      }
      return <TreeNode {...item} />;
    });

  render() {
    return (
      <div className={styles.wrapper}>
        <Tree
          checkable
          multiple
          autoExpandParent={this.state.autoExpandParent}
          onCheck={this.onCheck}
          onSelect={this.onSelect}
          checkedKeys={this.state.checkedKeys}
          selectedKeys={this.state.selectedKeys}
        >
          {this.renderTreeNodes(this.props.tree)}
        </Tree>
      </div>
    );
  }
}

export default Demo;
