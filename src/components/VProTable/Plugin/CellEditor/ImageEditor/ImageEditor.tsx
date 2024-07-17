import type { IEditor } from '@visactor/vtable-editors';
import * as ReactVTable from '@visactor/react-vtable';
import { Select,Upload ,message, Modal} from 'antd';
import ReactDom from 'react-dom/client'
import { useState } from 'react';
import type { VTable } from '@visactor/react-vtable';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';


import type { GetProp, UploadProps } from 'antd';
type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];
const getBase64 = (img: FileType, callback: (url: string) => void) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result as string));
  reader.readAsDataURL(img);
};
const TModal = () => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>();
  const [visible, setVisible] = useState(true)


  const beforeUpload = (file: FileType) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
};
  const handleChange: UploadProps['onChange'] = (info) => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj as FileType, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };

  const uploadButton = (
    <button style={{ border: 0, background: 'none' }} type="button">
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </button>
  );
  return   <Modal
            title='Modal Title'
            visible={visible}
            onOk={() => setVisible(false)}
            onCancel={() => setVisible(false)}
            autoFocus={false}
            focusLock={true}
  >
    <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
      beforeUpload={beforeUpload}
      
      defaultFileList={[
        {
          uid: '-2',
          name: '20200717-103937.png',
          status: 'done',
          url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
        {
          uid: '-1',
          name: 'hahhahahahaha.png',
          status: 'done',
          url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
      ]}
        onChange={handleChange}
      >
        {imageUrl  ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
      </Upload>
         
        </Modal>
}
export default class CustomImage implements IEditor {
  constructor() {
    this.root = null;
    this.element = null;
    this.container = null;
  }
  onStart(editorContext) {
    const { container, referencePosition, value } = editorContext;
    this.container = container;
    this.createElement(value);
    value && this.setValue(value);
    (null == referencePosition ? void 0 : referencePosition.rect) && this.adjustPosition(referencePosition.rect);
  }

  createElement(defaultValue) {
    const div = document.createElement('div');
    div.style.position = 'absolute';
    div.style.width = '100%';
    div.style.padding = '1px';
    div.style.boxSizing = 'border-box';
    div.style.backgroundColor = '#232324';
    this.container.appendChild(div);
    this.root = ReactDom.createRoot(div);
    const options = ['Beijing', 'Shanghai', 'Guangzhou'];
    this.root.render(
      <div>
          <TModal></TModal>
      </div>
    );
    this.element = div;
  }

  getValue() {
    return this.currentValue;
  }

  setValue(value) {
    this.currentValue = value;
  }

  adjustPosition(rect) {
    if (this.element) {
      (this.element.style.top = rect.top + 'px'),
        (this.element.style.left = rect.left + 'px'),
        (this.element.style.width = rect.width + 'px'),
        (this.element.style.height = rect.height + 'px');
    }
  }

  onEnd() {
    this.container.removeChild(this.element);
  }

  isEditorElement(target) {
    // cascader创建时时在cavas后追加一个dom，而popup append在body尾部。不论popup还是dom，都应该被认为是点击到了editor区域
    return this.element.contains(target) || this.isClickPopUp(target);
  }

  isClickPopUp(target) {
    while (target) {
      if (target.classList && target.classList.contains('arco-select')) {
        return true;
      }
      // 如果到达了DOM树的顶部，则停止搜索
      target = target.parentNode;
    }
    // 如果遍历结束也没有找到符合条件的父元素，则返回false
    return false;
  }
}


