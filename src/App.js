import React, { useState } from 'react';
import { List, Card, Modal, Button, Typography } from 'antd';
import data from './data.json';

const { Paragraph, Title, Text } = Typography;

function App() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '1000px', margin: '0 auto' }}>
      <Title level={2}>Tuyển tập Thơ & Văn</Title>
      <List
        dataSource={data.data}
        renderItem={(item) => (
          <List.Item>
            <Card
              title={<strong>{item["Tên tác phẩm"]}</strong>}
              extra={
                <Button
                  type="link"
                  onClick={() => showModal(item)}
                >
                  Xem JSON
                </Button>
              }
              style={{ width: '100%' }}
            >
              <Text strong>Tác giả:</Text> {item["Tác giả"]} <br />
              <Text strong>Thể loại:</Text> {item["Thể loại"]} <br />
              <Text strong>Nội dung:</Text>
              <Paragraph style={{ whiteSpace: 'pre-wrap', marginTop: '8px' }}>
                {item["Nội dung"]}
              </Paragraph>
            </Card>
          </List.Item>
        )}
      />

      <Modal
        title="Dữ liệu JSON của bài viết"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
        width={800}
        bodyStyle={{ maxHeight: '60vh', overflow: 'auto' }}
      >
        <pre style={{ fontSize: '14px', fontFamily: 'monospace' }}>
          {selectedItem && JSON.stringify(selectedItem, null, 2)}
        </pre>
      </Modal>
    </div>
  );
}

export default App;