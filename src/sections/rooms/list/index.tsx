import React from 'react';
import { Box, Button, Flex, Table, Text } from '@mantine/core';
import classes from './room.module.scss';
import { IconCirclePlus, IconPencil, IconTrash } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';
import { Link, Outlet } from 'react-router-dom';

const RoomsModule = () => {
  const { t } = useTranslation();

  const elements = [
    { id: 1, kafedra: t('branch'), roomNumber: t('name'), volume: 50, projector: 'Bor' },
    { id: 2, kafedra: t('branch'), roomNumber: t('name'), volume: 50, projector: 'Bor' },
    { id: 3, kafedra: t('branch'), roomNumber: t('name'), volume: 50, projector: 'Bor' },
    { id: 4, kafedra: t('branch'), roomNumber: t('name'), volume: 50, projector: 'Bor' },
  ];

  const rows = elements.map((element) => (
    <Table.Tr key={element.id}>
      <Table.Td>{element.id}</Table.Td>
      <Table.Td>{element.kafedra}</Table.Td>
      <Table.Td>{element.roomNumber}</Table.Td>
      <Table.Td>{element.volume}</Table.Td>
      <Table.Td>{element.projector}</Table.Td>
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
        <Text className={classes.text}>{t('rooms')}</Text>
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
            <Table.Th w="20%">{t('kafedra')}</Table.Th>
            <Table.Th w="20%">{t('roomNumber')}</Table.Th>
            <Table.Th w="20%">{t('volume')}</Table.Th>
            <Table.Th w="20%">{t('projector')}</Table.Th>
            <Table.Th />
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
      <Outlet />
    </Box>
  );
};

export default RoomsModule;
