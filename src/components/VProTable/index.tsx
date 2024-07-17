import ReactDom from 'react-dom/client';
import { ListTable, ListColumn} from '@visactor/react-vtable';
import { setupEditor } from './Plugin/index'
import {useRef }  from  'react';
import {Button, Select} from 'antd'
import { ColumnsManage } from './columns/index'
import { CommentComponent ,OperationComponent ,ImagePreview} from './Plugin/CellPreview'
import { VTable, CustomComponent } from '@visactor/react-vtable'
const { VGroup, VImage, VTag, VText } = VTable;

import "@arco-design/web-react/dist/css/arco.css";
// const { IconHeart, IconMessage, IconStar, IconStarFill, IconHeartFill } = ArcoDesignIcon;

setupEditor()



function generateRandomString(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

export const VProTable = () => {
  const tableRef = useRef()
  const records = [];
  for (let i = 0; i < 50; i++) {
    records.push({
      id: i,
      sex: 0,
      address:'shagnhai',
      name: generateRandomString(8),
      'image': 'https://www.baidu.com/img/flexible/logo/pc/result.png',
      bloggerId: 1,
      bloggerName: 'Virtual Anchor Xiaohua',
      bloggerAvatar: 'https://lf9-dp-fe-cms-tos.byteorg.com/obj/bit-cloud/VTable/custom-render/flower.jpg',
      introduction:
        'Hi everyone, I am Xiaohua, the virtual host. I am a little fairy who likes games, animation and food. I hope to share happy moments with you through live broadcast.',
      fansCount: 400,
      worksCount: 10,
      phoneNumber:110,
      viewCount: 5,
      city: 'Dream City',
      tags: ['game', 'anime', 'food']
    });
  }


  const save = () => {
    console.log(tableRef.current?.options?.records)
  
  }
  return <div>
    <Select></Select>
    <Button type='primary' onClick={save}>保存</Button>
    <ListTable
        ref={tableRef}
        records={records}
        height={1000}
        width={1400}
        defaultRowHeight={110}
        onReady={table => {
          // eslint-disable-next-line no-undef
          // (window as any).tableInstance = table;
        }}
        ReactDOM={ReactDom}
    >
      <ListColumn field={'id'} width={200} title={'ID'} />
      <ListColumn field={'phoneNumber'} width={200} title={'Phone Number'} editor={'input-editor'} />
      <ListColumn field={'sex'} title={'Sex'} width={200} editor={'radio-editor'} />
      <ListColumn field={'address'} title={'Address'}  width={200} editor={'select-editor'} />
      <ListColumn field={'name'} title={'Comment'}  width={300}  editor={'form-editor'} >
        <CommentComponent role={'custom-layout'} />
      </ListColumn>
      <ListColumn field={'image'} title={'Image'}  width={200} editor={'image-editor'} >
        <ImagePreview role={'custom-layout'}></ImagePreview>
      </ListColumn>
      <ListColumn field={''} title={'Operation'}  width={200}>
        <OperationComponent role={'custom-layout'} />
      </ListColumn>
    </ListTable>
  </div>
}