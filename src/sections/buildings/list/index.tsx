import React from 'react';
import { Box, Button, Flex, Table, Text } from '@mantine/core';
import classes from './buildings.module.scss';
import { IconCirclePlus, IconPencil, IconTrash } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';
import { useDisclosure } from '@mantine/hooks';
import { Link, Outlet } from 'react-router-dom';

const BuildingsModule = () => {
  const { t } = useTranslation();

  const elements = [
    { id: 1, branch: t('branch'), name: t('name') },
    { id: 2, branch: t('branch'), name: t('name') },
    { id: 3, branch: t('branch'), name: t('name') },
    { id: 4, branch: t('branch'), name: t('name') },
  ];

  const rows = elements.map((element) => (
    <Table.Tr key={element.id}>
      <Table.Td>{element.id}</Table.Td>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.branch}</Table.Td>
      <Table.Td>
        <Flex gap={8} justify="end">
          <Button variant="filled" size="compact-lg" component={Link} to="1/edit">
            <IconPencil />
          </Button>
          <Button variant="filled" size="compact-lg" color="red.8">
            <IconTrash />
          </Button>
        </Flex>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <Box className={classes.buildings}>
      <Flex align="center" justify="space-between">
        <Text className={classes.text}>{t('buildings')}</Text>
        <Flex>
          <Button component={Link} to="add" size="compact-lg" leftSection={<IconCirclePlus />}>
            {t('add')}
          </Button>
        </Flex>
      </Flex>
      <Table stickyHeader stickyHeaderOffset={60} withColumnBorders mt={12} withRowBorders>
        <Table.Thead>
          <Table.Tr>
            <Table.Th w="5%">ID</Table.Th>
            <Table.Th w="40%">{t('name')}</Table.Th>
            <Table.Th w="40%">{t('branch')}</Table.Th>
            <Table.Th />
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
      <Outlet />
    </Box>
  );
};

export default BuildingsModule;
