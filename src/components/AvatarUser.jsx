import { UserOutlined } from '@ant-design/icons';
import { Avatar, Space } from 'antd';


export default function AvatarUser({size = "", className = ""}) {
   return (
      <Space className={className}>
         <Avatar size={size} icon={ <UserOutlined />} />
      </Space>
   )
}

