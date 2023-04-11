import { Key, ReactElement } from 'react';
import { Segmented, Table as AntdTable } from 'antd';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { ColumnsType } from 'antd/es/table/interface';
import { Checklist } from '../../services/interfaces';

interface TableProp {
  checklist: Checklist[];
  id: number;
}

interface DataType {
  key: Key;
  done: ReactElement;
  task: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Done',
    dataIndex: 'done',
  },
  {
    title: 'Task',
    dataIndex: 'task',
  },
];

const options = [
  {
    value: 'done',
    icon: <CheckOutlined style={{ color: 'green' }} />,
  },
  {
    value: 'not',
    icon: <CloseOutlined style={{ color: 'red' }} />,
  },
];


function Table({ checklist, id }: TableProp) {

// Create a simple slider, to show if the task was done or not,
// The API doesn't any thing, here is only to show one possible way
// to illustrate how to show this data to user.
  const data: DataType[] = checklist.map((list, i) => {
    const { completed, task } = list;
    const value = completed ? 'done' : 'not';
    const Slider = <Segmented options={options} defaultValue={value} />;

    return { key: `${id}-${i}`, done: Slider, task };
  }, []);

  return <AntdTable columns={columns} dataSource={data} size="small" pagination={false} />;
}

export default Table;
