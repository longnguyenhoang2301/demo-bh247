import React, { useMemo } from 'react';
import { Table, TableColumnsType, TableProps } from 'antd'

export const CustomTable = ({
  columns,
  ...props
}: {
  columns: any
} & TableProps) => {
  const customColumns: any = useMemo(() => {
    if (!columns) {
      return []
    } else {
      console.log(columns)
      return columns.map((item: any) => {
        return {
          ...item
        }
      })
    }
  }, [props])
  return (
    <Table columns={customColumns} {...props} />
  );
};
