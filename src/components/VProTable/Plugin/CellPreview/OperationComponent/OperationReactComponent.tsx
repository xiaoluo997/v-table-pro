import {Space, Button, Popconfirm, message,Drawer } from 'antd'
import { useState } from 'react';
export const OperationReactComponent = () => {
  const [detailVisible, setDetailVisible] = useState(false)
  return (
    <div>
    <Space size="small" style={{ marginLeft: 10, marginTop: 40 }}>
      <Button
        onClick={() =>
         setDetailVisible(true)
        }
        type="primary"
      >
        Info
      </Button>
      <Popconfirm
        title="Confirm"
        onConfirm={() => {
          message.info({
            content: 'ok'
          });
        }}
        onCancel={() => {
          message.error({
            content: 'cancel'
          });
        }}
      >
        <Button>Delete</Button>
      </Popconfirm>
      </Space>
      <Drawer
        title={`largeDrawer`}
        placement="right"
        size={'large'}
        open={detailVisible}
        onClose={() => setDetailVisible(false)}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
      </div>
  );
};