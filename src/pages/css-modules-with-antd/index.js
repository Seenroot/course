import styles from './styles.less';
import { Button, Input } from 'antd';

export default () => {
  return (
    <div>
      <p>
        <span className={styles['override-ant-btn']}>
          <Button type='primary' >圆角样式按妞</Button>
        </span>
      </p>
      <p>
        <Button type='primary' >antd 原始按钮</Button>
      </p>
      <p>
        <span className={styles['override-ant-input']}>
          <Input placeholder="Basic usage" />
        </span>
      </p>
    </div>
  );
};